try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "53b6b463-696a-4158-905b-110077ff2da4", e._sentryDebugIdIdentifier = "sentry-dbid-53b6b463-696a-4158-905b-110077ff2da4")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3012], {
    16237: (e, t, r) => {
      r.d(t, {
        UP: () => a,
        ic: () => h,
        qn: () => y,
        Rv: () => v,
        iQ: () => p,
        Mk: () => d,
        UQ: () => u,
        gr: () => m,
        Ub: () => o,
        jt: () => l,
        ZC: () => s,
        rl: () => g
      });
      var n = r(51838),
        i = r(62229);

      function o(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const o = e => n.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [s, a] = (0, i.useState)((() => r ? o(e) : t));

        function l() {
          a(o(e))
        }
        return (0, i.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return l(), t?.addListener ? t?.addListener(l) : t?.addEventListener("change", l), () => {
            t?.removeListener ? t?.removeListener(l) : t?.removeEventListener("change", l)
          }
        }), [e]), s
      }

      function s(e) {
        const t = (0, i.useRef)({
            value: e,
            prev: void 0
          }),
          r = t.current.value;
        return e !== r && (t.current = {
          value: e,
          prev: r
        }), t.current.prev
      }

      function a(...e) {
        const t = (0, i.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      const l = () => o("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function c(e) {
        const t = (0, i.useRef)(e);
        return (0, i.useEffect)((() => {
          t.current = e
        })), (0, i.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      const u = ({
        activity: e,
        leave: t,
        enabled: r = !0
      }) => {
        const n = (0, i.useRef)(),
          [o, s] = (0, i.useState)(!1),
          a = (0, i.useCallback)((() => {
            s(!0)
          }), []),
          l = (0, i.useCallback)((() => {
            let t = 0;
            return (...r) => {
              const i = Date.now();
              i - t >= 500 && (t = i, (() => {
                s(!1), window.clearTimeout(n.current), n.current = window.setTimeout(a, e)
              })(...r))
            }
          })(), []),
          c = (0, i.useCallback)((() => {
            window.clearTimeout(n.current), n.current = window.setTimeout(a, t)
          }), []),
          u = (0, i.useCallback)((() => {
            document.hidden || l()
          }), []);
        return (0, i.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", l), window.removeEventListener("mousedown", l), window.removeEventListener("resize", l), window.removeEventListener("keydown", l), window.removeEventListener("touchstart", l), window.removeEventListener("wheel", l), document.removeEventListener("mouseleave", c), document.removeEventListener("visibilitychange", u), window.clearTimeout(n.current), s(!1)
          };
          return r ? (window.addEventListener("mousemove", l), window.addEventListener("mousedown", l), window.addEventListener("resize", l), window.addEventListener("keydown", l), window.addEventListener("touchstart", l), window.addEventListener("wheel", l), document.addEventListener("mouseleave", c), document.addEventListener("visibilitychange", u), l()) : e(), () => e()
        }), [r]), {
          isIdle: o
        }
      };

      function h({
        prop: e,
        defaultProp: t,
        onChange: r = () => {}
      }) {
        const [n, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, i.useState)(e),
            [n] = r,
            o = (0, i.useRef)(n),
            s = c(t);
          return (0, i.useEffect)((() => {
            o.current !== n && (s(n), o.current = n)
          }), [n, o, s]), r
        }({
          defaultProp: t,
          onChange: r
        }), s = void 0 !== e, a = s ? e : n, l = c(r), u = (0, i.useCallback)((t => {
          if (s) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && l(r)
          } else o(t)
        }), [s, e, o, l]);
        return [a, u]
      }

      function f(e, t, r, n) {
        const o = (0, i.useRef)(t);
        (0, i.useEffect)((() => {
          o.current = t
        }), [t]), (0, i.useEffect)((() => {
          const t = r?.current ?? window;
          if (!t || !t.addEventListener) return;
          const i = e => {
            o.current(e)
          };
          return t.addEventListener(e, i, n), () => {
            t.removeEventListener(e, i, n)
          }
        }), [e, r?.current, n])
      }
      const d = ({
          enabled: e,
          ref: t
        }) => {
          const [r, n] = (0, i.useState)(!1);
          return (0, i.useEffect)((() => {
            n(!1)
          }), [t.current]), f("mouseenter", (() => {
            n(!0)
          }), t), f("mouseleave", (() => {
            n(!1)
          }), t), {
            isHovered: !!e && r
          }
        },
        p = ({
          ref: e,
          onChange: t,
          onFocusIn: r,
          onFocusOut: n,
          enabled: o = !0
        }) => {
          const [s, a] = (0, i.useState)(!1);
          return f("focusin", (e => {
            a(!0), r?.(e), t?.(!0, e)
          }), e), f("focusout", (e => {
            a(!1), n?.(e), t?.(!1, e)
          }), e), {
            isFocused: !!o && s
          }
        },
        m = ({
          enabled: e = !0
        }) => {
          const [t, r] = (0, i.useState)(!1), [n, o] = (0, i.useState)(!1);
          return (0, i.useEffect)((() => {
            e || (r(!1), o(!1))
          }), [e]), {
            eventHandlers: {
              onLoad: () => {
                e && (o(!0), r(!1))
              },
              onAbort: () => {
                e && (o(!0), r(!1))
              },
              onError: () => {
                e && (o(!0), r(!1))
              }
            },
            error: t,
            loaded: n
          }
        };

      function g(e = !0) {
        const t = o("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      const v = ({
          enabled: e = !0,
          latency: t = 300,
          onDoubleClick: r = () => null,
          onSingleClick: n = () => null
        }) => {
          const o = (0, i.useRef)(0),
            s = (0, i.useRef)();
          return {
            handleClick: i => {
              e && (o.current += 1, s.current = setTimeout((() => {
                1 === o.current ? n(i) : 2 === o.current && r(i), o.current = 0
              }), t))
            }
          }
        },
        y = (e, t = []) => {
          const r = (0, i.useRef)(!1);
          (0, i.useEffect)((() => (r.current = !0, () => {
            r.current = !1
          })), []), (0, i.useEffect)((() => {
            r.current && e()
          }), [...t])
        }
    },
    25648: (e, t, r) => {
      r.d(t, {
        Cb: () => n,
        US: () => i,
        xW: () => o,
        HZ: () => s,
        X6: () => a
      });
      var n = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        i = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        o = {
          dark: "foundry_nk7jgu_nu8bkp2",
          darkHc: "foundry_nk7jgu_nu8bkp4",
          light: "foundry_nk7jgu_nu8bkp1",
          lightHc: "foundry_nk7jgu_nu8bkp3",
          tokens: "foundry_nk7jgu_nu8bkp0"
        },
        s = "--foundry_65afb887",
        a = "foundry_nk7jgu_nu8bkp0"
    },
    28136: (e, t, r) => {
      var n = r(75754),
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
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        a = {};

      function l(e) {
        return n.isMemo(e) ? s : a[e.$$typeof] || i
      }
      a[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, a[n.Memo] = s;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        h = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (p) {
            var i = d(r);
            i && i !== p && e(t, i, n)
          }
          var s = u(r);
          h && (s = s.concat(h(r)));
          for (var a = l(t), m = l(r), g = 0; g < s.length; ++g) {
            var v = s[g];
            if (!(o[v] || n && n[v] || m && m[v] || a && a[v])) {
              var y = f(r, v);
              try {
                c(t, v, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    41689: (e, t, r) => {
      r.d(t, {
        NP: () => g,
        Ym: () => h,
        zQ: () => u,
        DP: () => c
      });
      var n = r(70954),
        i = (r(49639), r(6385)),
        o = r(25648),
        s = r(62229);
      const a = (0, s.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: o.US,
          platformScaleBreakpoints: o.Cb,
          locale: "en-US"
        }),
        l = () => (0, s.useContext)(a),
        c = () => {
          const {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: i,
            defaultPlatformScale: o,
            platformScaleRatios: s,
            platformScaleBreakpoints: a,
            locale: c
          } = l();
          return {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: i,
            defaultPlatformScale: o,
            platformScaleRatios: s,
            platformScaleBreakpoints: a,
            locale: c
          }
        },
        u = () => {
          const {
            platformScale: e
          } = l();
          return e
        },
        h = () => {
          const {
            locale: e
          } = l();
          return e
        };
      var f = r(16237);
      const d = (e, t) => {
        const r = "more" === t ? o.xW.lightHc : o.xW.light,
          n = "more" === t ? o.xW.darkHc : o.xW.dark;
        return "dark" === e ? n : r
      };
      var p = r(84105);
      const m = () => p.X3 ? null : document.body,
        g = (0, s.forwardRef)((({
          children: e,
          className: t,
          container: r = m(),
          asChild: l,
          colorScheme: c,
          defaultColorScheme: u,
          contrastMode: h,
          defaultContrastMode: g,
          platformScaleBreakpoints: v,
          platformScaleRatios: y,
          defaultPlatformScale: w,
          platformScale: b,
          locale: k = "en-US"
        }, S) => {
          const x = (0, s.useRef)(null),
            C = (0, f.UP)(x, S),
            A = (0, s.useRef)(r),
            {
              ratio: E,
              scale: L
            } = function(e) {
              const t = (0, s.useMemo)((() => ({
                  ...o.US,
                  ...e.platformScaleRatios
                })), [e.platformScaleRatios]),
                r = (0, s.useMemo)((() => ({
                  ...o.Cb,
                  ...e.platformScaleBreakpoints
                })), [e.platformScaleBreakpoints]),
                [n, i] = (0, s.useState)(e.platformScale || e.defaultPlatformScale),
                a = (0, s.useRef)([]),
                l = () => {
                  if (!p.X3) {
                    for (const {
                        handler: e,
                        matchMedia: t
                      }
                      of a.current) t.removeEventListener("change", e);
                    a.current = []
                  }
                };
              return (0, s.useEffect)((() => (e.platformScale ? i(e.platformScale) : (() => {
                if (!p.X3) {
                  l();
                  for (const e in r) {
                    const t = window.matchMedia(r[e]),
                      n = t => {
                        t.matches && i(e)
                      };
                    t.addEventListener("change", n), t.matches && i(e), a.current.push({
                      handler: n,
                      matchMedia: t
                    })
                  }
                }
              })(), l)), [r, e.platformScale]), {
                scale: n,
                ratio: t[n]
              }
            }({
              platformScaleBreakpoints: v,
              platformScaleRatios: y,
              defaultPlatformScale: w,
              platformScale: b
            }),
            {
              appearanceClass: O,
              otherAppearanceClasses: T,
              providerColor: R,
              providerContrast: z
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark",
              contrastMode: r,
              defaultContrastMode: n = "normal"
            }) {
              const i = (0, f.Ub)("(prefers-color-scheme: light)"),
                a = (0, f.Ub)("(prefers-color-scheme: dark)"),
                l = (0, f.Ub)("(prefers-contrast: more)"),
                c = "system" !== e && e || i && "light" || a && "dark" || t,
                u = r || l && "more" || n,
                h = (0, s.useMemo)((() => d(c, u)), [c, u]),
                p = (0, s.useMemo)((() => ((e, t) => {
                  const r = d(e, t);
                  return [o.xW.light, o.xW.dark, o.xW.lightHc, o.xW.darkHc].filter((e => e !== r))
                })(c, u)), [c, u]);
              return {
                appearanceClass: h,
                otherAppearanceClasses: p,
                providerColor: c,
                providerContrast: u
              }
            }({
              colorScheme: c,
              defaultColorScheme: u,
              contrastMode: h,
              defaultContrastMode: g
            });
          return ((e, t, r, n, i) => {
            const a = (0, f.ZC)(i),
              l = (0, f.ZC)(e.current);
            (0, s.useEffect)((() => {
              e.current?.classList.contains(o.X6) || e.current?.classList.add(o.X6), e.current?.classList.add(r), e.current?.classList.remove(...n), a && i && e.current?.classList.contains(a) ? e.current?.classList.replace(a, i) : a && !i && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : i && e.current?.classList.add(i)
            }), [r, i]), (0, s.useEffect)((() => {
              e.current?.style.setProperty(o.HZ, t.toString())
            }), [t]), (0, s.useEffect)((() => {
              l?.classList.remove(o.X6), l?.classList.remove(r), l?.style.removeProperty(o.HZ), i && l?.classList.remove(i)
            }), [l])
          })(l ? x : A, E, O, T, t), (0, n.jsx)(a.Provider, {
            value: {
              locale: k,
              defaultColorScheme: u,
              colorScheme: R,
              defaultContrastMode: g,
              contrastMode: z,
              defaultPlatformScale: w,
              platformScale: L,
              platformScaleRatios: y,
              platformScaleBreakpoints: v
            },
            children: l ? (0, n.jsx)(i.DX, {
              ref: C,
              children: e
            }) : e
          })
        }))
    },
    49639: (e, t, r) => {
      var n, i, o = {},
        s = r(97249),
        a = r(86755),
        l = r.n(a),
        c = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: r,
              output: n
            } = this._buildTables(e);
            this.gotoFn = r, this.output = n, this.failure = t
          }
          _buildTables(e) {
            const t = {
                0: {}
              },
              r = {};
            let n = 0;
            for (const i of e) {
              let e = 0;
              for (const o of i) t[e] && o in t[e] ? e = t[e][o] : (n++, t[e][o] = n, t[n] = {}, e = n, r[n] = []);
              r[e].push(i)
            }
            const i = {},
              o = [];
            for (const e in t[0]) {
              const r = t[0][e];
              i[r] = 0, o.push(r)
            }
            for (; o.length > 0;) {
              const e = o.shift();
              if (void 0 !== e)
                for (const n in t[e]) {
                  const s = t[e][n];
                  o.push(s);
                  let a = i[e];
                  for (; a > 0 && !(n in t[a]);) a = i[a];
                  if (n in t[a]) {
                    const e = t[a][n];
                    i[s] = e, r[s] = [...r[s], ...r[e]]
                  } else i[s] = 0
                }
            }
            return {
              gotoFn: t,
              output: r,
              failure: i
            }
          }
          search(e) {
            let t = 0;
            const r = [];
            for (let n = 0; n < e.length; n++) {
              const i = e[n];
              for (; t > 0 && !(i in this.gotoFn[t]);) t = this.failure[t];
              if (i in this.gotoFn[t] && (t = this.gotoFn[t][i], this.output[t].length > 0)) {
                const e = this.output[t];
                r.push([n, e])
              }
            }
            return r
          }
          match(e) {
            let t = 0;
            for (let r = 0; r < e.length; r++) {
              const n = e[r];
              for (; t > 0 && !(n in this.gotoFn[t]);) t = this.failure[t];
              if (n in this.gotoFn[t] && (t = this.gotoFn[t][n], this.output[t].length > 0)) return !0
            }
            return !1
          }
        },
        u = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        h = !1;

      function f(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(n || (n = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(i || (i = {}));
      const d = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        p = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        m = new Map([
          [126, i.Element],
          [94, i.Start],
          [36, i.End],
          [42, i.Any],
          [33, i.Not],
          [124, i.Hyphen]
        ]),
        g = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        v = new Set(["contains", "icontains"]);

      function y(e, t, r) {
        const n = parseInt(t, 16) - 65536;
        return n != n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
      }

      function w(e) {
        return e.replace(p, y)
      }

      function b(e) {
        return 39 === e || 34 === e
      }

      function k(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function S(e) {
        const t = [],
          r = x(t, `${e}`, 0);
        if (r < e.length) throw new Error(`Unmatched selector: ${e.slice(r)}`);
        return t
      }

      function x(e, t, r) {
        let o = [];

        function s(e) {
          const n = t.slice(r + e).match(d);
          if (!n) throw new Error(`Expected name, found ${t.slice(r)}`);
          const [i] = n;
          return r += e + i.length, w(i)
        }

        function a(e) {
          for (r += e; r < t.length && k(t.charCodeAt(r));) r++
        }

        function l() {
          const e = r += 1;
          let n = 1;
          for (; n > 0 && r < t.length; r++) 40 !== t.charCodeAt(r) || c(r) ? 41 !== t.charCodeAt(r) || c(r) || n-- : n++;
          if (n) throw new Error("Parenthesis not matched");
          return w(t.slice(e, r - 1))
        }

        function c(e) {
          let r = 0;
          for (; 92 === t.charCodeAt(--e);) r++;
          return !(1 & ~r)
        }

        function u() {
          if (o.length > 0 && function(e) {
              switch (e.type) {
                case n.Adjacent:
                case n.Child:
                case n.Descendant:
                case n.Parent:
                case n.Sibling:
                case n.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(o[o.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function h(e) {
          o.length > 0 && o[o.length - 1].type === n.Descendant ? o[o.length - 1].type = e : (u(), o.push({
            type: e
          }))
        }

        function f(e, t) {
          o.push({
            type: n.Attribute,
            name: e,
            action: t,
            value: s(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function p() {
          if (o.length && o[o.length - 1].type === n.Descendant && o.pop(), 0 === o.length) throw new Error("Empty sub-selector");
          e.push(o)
        }
        if (a(0), t.length === r) return r;
        e: for (; r < t.length;) {
          const e = t.charCodeAt(r);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== o.length && o[0].type === n.Descendant || (u(), o.push({
                type: n.Descendant
              })), a(1);
              break;
            case 62:
              h(n.Child), a(1);
              break;
            case 60:
              h(n.Parent), a(1);
              break;
            case 126:
              h(n.Sibling), a(1);
              break;
            case 43:
              h(n.Adjacent), a(1);
              break;
            case 46:
              f("class", i.Element);
              break;
            case 35:
              f("id", i.Equals);
              break;
            case 91: {
              let e;
              a(1);
              let l = null;
              124 === t.charCodeAt(r) ? e = s(1) : t.startsWith("*|", r) ? (l = "*", e = s(2)) : (e = s(0), 124 === t.charCodeAt(r) && 61 !== t.charCodeAt(r + 1) && (l = e, e = s(1))), a(0);
              let u = i.Exists;
              const h = m.get(t.charCodeAt(r));
              if (h) {
                if (u = h, 61 !== t.charCodeAt(r + 1)) throw new Error("Expected `=`");
                a(2)
              } else 61 === t.charCodeAt(r) && (u = i.Equals, a(1));
              let f = "",
                d = null;
              if ("exists" !== u) {
                if (b(t.charCodeAt(r))) {
                  const e = t.charCodeAt(r);
                  let n = r + 1;
                  for (; n < t.length && (t.charCodeAt(n) !== e || c(n));) n += 1;
                  if (t.charCodeAt(n) !== e) throw new Error("Attribute value didn't end");
                  f = w(t.slice(r + 1, n)), r = n + 1
                } else {
                  const e = r;
                  for (; r < t.length && (!k(t.charCodeAt(r)) && 93 !== t.charCodeAt(r) || c(r));) r += 1;
                  f = w(t.slice(e, r))
                }
                a(0);
                const e = 32 | t.charCodeAt(r);
                115 === e ? (d = !1, a(1)) : 105 === e && (d = !0, a(1))
              }
              if (93 !== t.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const p = {
                type: n.Attribute,
                name: e,
                action: u,
                value: f,
                namespace: l,
                ignoreCase: d
              };
              o.push(p);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(r + 1)) {
                o.push({
                  type: n.PseudoElement,
                  name: s(2).toLowerCase(),
                  data: 40 === t.charCodeAt(r) ? l() : null
                });
                continue
              }
              const e = s(1).toLowerCase();
              let i = null;
              if (40 === t.charCodeAt(r))
                if (g.has(e)) {
                  if (b(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (i = [], r = x(i, t, r + 1), 41 !== t.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  r += 1
                } else {
                  if (i = l(), v.has(e)) {
                    const e = i.charCodeAt(0);
                    e === i.charCodeAt(i.length - 1) && b(e) && (i = i.slice(1, -1))
                  }
                  i = w(i)
                } o.push({
                type: n.Pseudo,
                name: e,
                data: i
              });
              break
            }
            case 44:
              p(), o = [], a(1);
              break;
            default: {
              if (t.startsWith("/*", r)) {
                const e = t.indexOf("*/", r + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                r = e + 2, 0 === o.length && a(0);
                break
              }
              let i, l = null;
              if (42 === e) r += 1, i = "*";
              else if (124 === e) {
                if (i = "", 124 === t.charCodeAt(r + 1)) {
                  h(n.ColumnCombinator), a(2);
                  break
                }
              } else {
                if (!d.test(t.slice(r))) break e;
                i = s(0)
              }
              124 === t.charCodeAt(r) && 124 !== t.charCodeAt(r + 1) && (l = i, 42 === t.charCodeAt(r + 1) ? (i = "*", r += 2) : i = s(1)), o.push("*" === i ? {
                type: n.Universal,
                namespace: l
              } : {
                type: n.Tag,
                name: i,
                namespace: l
              })
            }
          }
        }
        return p(), r
      }

      function C(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? C(Object(r), !0).forEach((function(t) {
            E(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function E(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      const L = function e(t) {
        return r.withOptions = r => e(A(A({}, t), r)), r;

        function r(e, ...r) {
          const n = "string" == typeof e ? [e] : e.raw,
            {
              escapeSpecialCharacters: i = Array.isArray(e)
            } = t;
          let o = "";
          for (let e = 0; e < n.length; e++) {
            let t = n[e];
            i && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), o += t, e < r.length && (o += r[e])
          }
          const s = o.split("\n");
          let a = null;
          for (const e of s) {
            const t = e.match(/^(\s+)\S+/);
            if (t) {
              const e = t[1].length;
              a = a ? Math.min(a, e) : e
            }
          }
          if (null !== a) {
            const e = a;
            o = s.map((t => " " === t[0] || "\t" === t[0] ? t.slice(e) : t)).join("\n")
          }
          return o = o.trim(), i && (o = o.replace(/\\n/g, "\n")), o
        }
      }({});
      var O = function() {
        return O = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }, O.apply(this, arguments)
      };

      function T(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
        }
        return r
      }

      function R(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, o = r.call(e),
          s = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = o.next()).done;) s.push(n.value)
        } catch (e) {
          i = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return s
      }
      var z, F = /(\u000D|\u000C|\u000D\u000A)/g,
        _ = /[\u0000\uD800-\uDFFF]/g,
        P = /(\/\*)[\s\S]*?(\*\/)/g,
        M = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), n = [], i = t + 1; i < e.length; i += 1) {
            var o = e.charCodeAt(i);
            if (o === r) return [i, String.fromCharCode.apply(null, n)];
            if (92 === o) {
              var s = D(e, i);
              if (null === s) return null;
              var a = R(s, 2),
                l = a[0],
                c = a[1];
              n.push(c), i = l
            } else {
              if (10 === o) return null;
              n.push(o)
            }
          }
          return null
        },
        j = function(e, t) {
          if (e.length <= t) return !1;
          var r, n = e.charCodeAt(t);
          return 45 === n ? !(e.length <= t + 1) && (45 === (r = e.charCodeAt(t + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 1) && 10 !== (r = e.charCodeAt(t + 1))
        },
        D = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var r = e.charCodeAt(t + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var n = [r], i = Math.min(t + 7, e.length), o = t + 2; o < i; o += 1) {
              var s = e.charCodeAt(o);
              if (!(s >= 48 && s <= 57 || s >= 65 && s <= 70 || s >= 97 && s <= 102)) break;
              n.push(s)
            }
            if (o < e.length) {
              var a = e.charCodeAt(o);
              9 !== a && 32 !== a && 10 !== a || (o += 1)
            }
            return [o - 1, parseInt(String.fromCharCode.apply(null, n), 16)]
          }
          return [t + 1, r]
        },
        I = function(e, t) {
          var r = B(e, t);
          if (null === r) return null;
          var n = R(r, 3),
            i = n[0],
            o = n[1],
            s = n[2],
            a = N(e, i + 1);
          if (null !== a) {
            var l = R(a, 2);
            return [l[0],
              ["<dimension-token>", o, l[1]]
            ]
          }
          return i + 1 < e.length && 37 === e.charCodeAt(i + 1) ? [i + 1, ["<percentage-token>", o]] : [i, ["<number-token>", o, s]]
        },
        B = function(e, t) {
          if (e.length <= t) return null;
          var r = "integer",
            n = [],
            i = e.charCodeAt(t);
          for (43 !== i && 45 !== i || (t += 1, 45 === i && n.push(45)); t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1;
          if (t + 1 < e.length) {
            var o = e.charCodeAt(t),
              s = e.charCodeAt(t + 1);
            if (46 === o && s >= 48 && s <= 57)
              for (n.push(o, s), r = "number", t += 2; t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1
          }
          if (t + 1 < e.length) {
            o = e.charCodeAt(t), s = e.charCodeAt(t + 1);
            var a = e.charCodeAt(t + 2);
            if (69 === o || 101 === o) {
              var l = s >= 48 && s <= 57;
              if (l || (43 === s || 45 === s) && a >= 48 && a <= 57)
                for (r = "number", l ? (n.push(69, s), t += 2) : 45 === s ? (n.push(69, 45, a), t += 3) : (n.push(69, a), t += 3); t < e.length;) {
                  var c;
                  if (!((c = e.charCodeAt(t)) >= 48 && c <= 57)) break;
                  n.push(c), t += 1
                }
            }
          }
          var u = String.fromCharCode.apply(null, n),
            h = "number" === r ? parseFloat(u) : parseInt(u);
          return -0 === h && (h = 0), Number.isNaN(h) ? null : [t - 1, h, r]
        },
        W = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var i = D(e, t);
              if (null === i) break;
              var o = R(i, 2),
                s = o[0],
                a = o[1];
              r.push(a), t = s
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        N = function(e, t) {
          if (e.length <= t || !j(e, t)) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var i = D(e, t);
              if (null === i) break;
              var o = R(i, 2),
                s = o[0],
                a = o[1];
              r.push(a), t = s
            } return [t - 1, String.fromCharCode.apply(null, r)]
        },
        $ = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var n = [], i = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, n)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) i || 0 === n.length || (i = !0);
            else if (92 === r) {
              var o = D(e, t);
              if (null === o || i) return null;
              var s = R(o, 2),
                a = s[0],
                l = s[1];
              n.push(l), t = a
            } else {
              if (i) return null;
              n.push(r)
            }
            r = e.charCodeAt(++t)
          }
          return null
        },
        U = function(e, t) {
          var r = N(e, t);
          if (null === r) return null;
          var n = R(r, 2),
            i = n[0],
            o = n[1];
          if ("url" === o.toLowerCase()) {
            if (e.length > i + 1 && 40 === e.charCodeAt(i + 1)) {
              for (var s = 2; i + s < e.length; s += 1) {
                var a = e.charCodeAt(i + s);
                if (34 === a || 39 === a) return [i + 1, o.toLowerCase(), "<function-token>"];
                if (9 !== a && 32 !== a && 10 !== a) {
                  var l = $(e, i + s);
                  if (null === l) return null;
                  var c = R(l, 2);
                  return [c[0], c[1], "<url-token>"]
                }
              }
              return [i + 1, o.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > i + 1 && 40 === e.charCodeAt(i + 1)) return [i + 1, o.toLowerCase(), "<function-token>"];
          return [i, o.toLowerCase(), "<ident-token>"]
        },
        H = function(e) {
          if (null === e.mediaCondition) return e;
          var t = q(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        q = function e(t) {
          for (var r = t.children.length - 1; r >= 0; r--) {
            var n = t.children[r];
            if (!("context" in n)) {
              var i = e(n);
              if (null === i.operator && 1 === i.children.length) t.children[r] = i.children[0];
              else if (i.operator === t.operator && ("and" === i.operator || "or" === i.operator)) {
                for (var o = [r, 1], s = 0; s < i.children.length; s++) o.push(i.children[s]);
                t.children.splice.apply(t.children, o)
              }
            }
          }
          return t
        },
        G = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        V = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(F, "\n").replace(_, "�")).replace(P, "");
            for (var r = []; t < e.length; t += 1) {
              var n = e.charCodeAt(t);
              if (9 === n || 32 === n || 10 === n) {
                for (var i = e.charCodeAt(++t); 9 === i || 32 === i || 10 === i;) i = e.charCodeAt(++t);
                t -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === n) {
                if (null === (A = M(e, t))) return null;
                var o = R(A, 2),
                  s = o[0],
                  a = o[1];
                r.push({
                  type: "<string-token>",
                  value: a
                }), t = s
              } else if (35 === n) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = j(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (A = W(e, t + 1))) {
                    var c = R(A, 2);
                    s = c[0], a = c[1], r.push({
                      type: "<hash-token>",
                      value: a.toLowerCase(),
                      flag: l
                    }), t = s;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (39 === n) {
                if (null === (A = M(e, t))) return null;
                var u = R(A, 2);
                s = u[0], a = u[1], r.push({
                  type: "<string-token>",
                  value: a
                }), t = s
              } else if (40 === n) r.push({
                type: "<(-token>"
              });
              else if (41 === n) r.push({
                type: "<)-token>"
              });
              else if (43 === n) {
                var h = I(e, t);
                if (null === h) r.push({
                  type: "<delim-token>",
                  value: n
                });
                else {
                  var f = R(h, 2);
                  s = f[0], "<dimension-token>" === (x = f[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: x[1],
                    unit: x[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === x[0] ? r.push({
                    type: x[0],
                    value: x[1],
                    flag: x[2]
                  }) : r.push({
                    type: x[0],
                    value: x[1],
                    flag: "number"
                  }), t = s
                }
              } else if (44 === n) r.push({
                type: "<comma-token>"
              });
              else if (45 === n) {
                if (null !== (y = I(e, t))) {
                  var d = R(y, 2);
                  s = d[0], "<dimension-token>" === (x = d[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: x[1],
                    unit: x[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === x[0] ? r.push({
                    type: x[0],
                    value: x[1],
                    flag: x[2]
                  }) : r.push({
                    type: x[0],
                    value: x[1],
                    flag: "number"
                  }), t = s;
                  continue
                }
                if (t + 2 < e.length) {
                  var p = e.charCodeAt(t + 1),
                    m = e.charCodeAt(t + 2);
                  if (45 === p && 62 === m) {
                    r.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (A = U(e, t))) {
                  var g = R(A, 3),
                    v = (s = g[0], a = g[1], g[2]);
                  r.push({
                    type: v,
                    value: a
                  }), t = s;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (46 === n) {
                var y;
                if (null !== (y = I(e, t))) {
                  var w = R(y, 2);
                  s = w[0], "<dimension-token>" === (x = w[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: x[1],
                    unit: x[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === x[0] ? r.push({
                    type: x[0],
                    value: x[1],
                    flag: x[2]
                  }) : r.push({
                    type: x[0],
                    value: x[1],
                    flag: "number"
                  }), t = s;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (58 === n) r.push({
                type: "<colon-token>"
              });
              else if (59 === n) r.push({
                type: "<semicolon-token>"
              });
              else if (60 === n) {
                if (t + 3 < e.length) {
                  p = e.charCodeAt(t + 1), m = e.charCodeAt(t + 2);
                  var b = e.charCodeAt(t + 3);
                  if (33 === p && 45 === m && 45 === b) {
                    r.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (64 === n) {
                if (null !== (A = N(e, t + 1))) {
                  var k = R(A, 2);
                  s = k[0], a = k[1], r.push({
                    type: "<at-keyword-token>",
                    value: a.toLowerCase()
                  }), t = s;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (91 === n) r.push({
                type: "<[-token>"
              });
              else if (92 === n) {
                if (null === (A = D(e, t))) return null;
                var S = R(A, 2);
                s = S[0], a = S[1], e = e.slice(0, t) + a + e.slice(s + 1), t -= 1
              } else if (93 === n) r.push({
                type: "<]-token>"
              });
              else if (123 === n) r.push({
                type: "<{-token>"
              });
              else if (125 === n) r.push({
                type: "<}-token>"
              });
              else if (n >= 48 && n <= 57) {
                var x, C = R(A = I(e, t), 2);
                s = C[0], "<dimension-token>" === (x = C[1])[0] ? r.push({
                  type: "<dimension-token>",
                  value: x[1],
                  unit: x[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === x[0] ? r.push({
                  type: x[0],
                  value: x[1],
                  flag: x[2]
                }) : r.push({
                  type: x[0],
                  value: x[1],
                  flag: "number"
                }), t = s
              } else if (95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128) {
                var A;
                if (null === (A = U(e, t))) return null;
                var E = R(A, 3);
                s = E[0], a = E[1], v = E[2], r.push({
                  type: v,
                  value: a
                }), t = s
              } else r.push({
                type: "<delim-token>",
                value: n
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(e.trim());
          if (null === t) throw G("Failed tokenizing");
          var r = 0,
            n = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw G("Expected whitespace after media");
            r = 2;
            for (var i = 2; i < t.length - 1; i++) {
              var o = t[i];
              if ("<{-token>" === o.type) {
                n = i;
                break
              }
              if ("<semicolon-token>" === o.type) throw G("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(r, n), Z(t)
        },
        X = function(e) {
          for (var t = [], r = !1, n = 0; n < e.length; n++) "<whitespace-token>" === e[n].type ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(O(O({}, e[n]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return t
        },
        Z = function(e) {
          for (var t, r, n = [
              []
            ], i = 0; i < e.length; i++) {
            var o = e[i];
            "<comma-token>" === o.type ? n.push([]) : n[n.length - 1].push(o)
          }
          var s = n.map(X);
          if (1 === s.length && 0 === s[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var a = s.map((function(e) {
              return 0 === e.length ? null : Y(e)
            })),
            l = [];
          try {
            for (var c = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  r = t && e[t],
                  n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && n >= e.length && (e = void 0), {
                      value: e && e[n++],
                      done: !e
                    }
                  }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(a), u = c.next(); !u.done; u = c.next()) {
              var h = u.value;
              null !== h && l.push(h)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              u && !u.done && (r = c.return) && r.call(c)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw G("No valid media queries");
          return l
        },
        Y = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Q(e, !0)
            }
          } catch (e) {
            throw G("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw G("Expected media condition or media prefix");
            var r = null,
              n = void 0,
              i = t.value;
            "only" !== i && "not" !== i || (r = i);
            var o = null === r ? 0 : 1;
            if (e.length <= o) throw G("Expected extra token in media query");
            var s = e[o];
            if ("<ident-token>" === s.type) {
              var a = s.value;
              if ("all" === a) n = "all";
              else if ("print" === a || "screen" === a) n = a;
              else {
                if ("tty" !== a && "tv" !== a && "projection" !== a && "handheld" !== a && "braille" !== a && "embossed" !== a && "aural" !== a && "speech" !== a) throw G("Unknown ident '".concat(a, "' in media query"));
                r = "not" === r ? null : "not", n = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== s.type) throw G("Invalid media query");
              var l = [{
                type: "<(-token>",
                wsBefore: !1,
                wsAfter: !1
              }];
              l.push.apply(l, e), l.push({
                type: "<)-token>",
                wsBefore: !1,
                wsAfter: !1
              });
              try {
                return {
                  mediaPrefix: null,
                  mediaType: "all",
                  mediaCondition: Q(l, !0)
                }
              } catch (e) {
                throw G("Expected media condition after '('", e)
              }
            }
            if (o + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: n,
              mediaCondition: null
            };
            if (!(o + 4 < e.length)) throw G("Expected media condition after media prefix");
            var c = e[o + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw G("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: n,
                mediaCondition: Q(e.slice(o + 2), !1)
              }
            } catch (e) {
              throw G("Expected media condition after 'and'", e)
            }
          }
        },
        Q = function e(t, r, n) {
          if (void 0 === n && (n = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var i, o = t.length - 1, s = 0, a = 0, l = 0; l < t.length; l++) {
            var c = t[l];
            if ("<(-token>" === c.type ? (a += 1, s = Math.max(s, a)) : "<)-token>" === c.type && (a -= 1), 0 === a) {
              o = l;
              break
            }
          }
          if (0 !== a) throw new Error("Mismatched parens\nInvalid media condition");
          var u = t.slice(0, o + 1);
          if (i = 1 === s ? J(u) : "<ident-token>" === u[1].type && "not" === u[1].value ? e(u.slice(2, -1), !0, "not") : e(u.slice(1, -1), !0), o === t.length - 1) return {
            operator: n,
            children: [i]
          };
          var h = t[o + 1];
          if ("<ident-token>" !== h.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== n && n !== h.value) throw new Error("'".concat(h.value, "' and '").concat(n, "' must not be at same level\nInvalid media condition"));
          if ("or" === h.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== h.value && "or" !== h.value) throw new Error("Invalid operator: '".concat(h.value, "'\nInvalid media condition"));
          var f = e(t.slice(o + 2), r, h.value);
          return {
            operator: h.value,
            children: [i].concat(f.children)
          }
        },
        J = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], r = 1; r < e.length; r++) {
            if (r < e.length - 2) {
              var n = e[r],
                i = e[r + 1],
                o = e[r + 2];
              if ("<number-token>" === n.type && n.value > 0 && "<delim-token>" === i.type && 47 === i.value && "<number-token>" === o.type && o.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: n.value,
                  denominator: o.value,
                  wsBefore: n.wsBefore,
                  wsAfter: o.wsAfter
                }), r += 2;
                continue
              }
            }
            t.push(e[r])
          }
          var s = t[1];
          if ("<ident-token>" === s.type && 3 === t.length) return {
            context: "boolean",
            feature: s.value
          };
          if (5 === t.length && "<ident-token>" === t[1].type && "<colon-token>" === t[2].type) {
            var a = t[3];
            if ("<number-token>" === a.type || "<dimension-token>" === a.type || "<ratio-token>" === a.type || "<ident-token>" === a.type) {
              var l = t[1].value,
                c = null,
                u = l.slice(0, 4);
              return "min-" === u ? (c = "min", l = l.slice(4)) : "max-" === u && (c = "max", l = l.slice(4)), a.wsBefore, a.wsAfter, {
                context: "value",
                prefix: c,
                feature: l,
                value: T(a, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var h = K(t);
            return {
              context: "range",
              feature: h.featureName,
              range: h
            }
          } catch (e) {
            throw G("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        K = function(e) {
          var t, r, n, i;
          if (e.length < 5 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid range");
          var o = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            s = "<number-token>" === e[1].type || "<dimension-token>" === e[1].type || "<ratio-token>" === e[1].type || "<ident-token>" === e[1].type && "infinite" === e[1].value;
          if ("<delim-token>" === e[2].type) {
            if (60 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? o[s ? "leftOp" : "rightOp"] = "<" : o[s ? "leftOp" : "rightOp"] = "<=";
            else if (62 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? o[s ? "leftOp" : "rightOp"] = ">" : o[s ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== e[2].value) throw new Error("Invalid range");
              o[s ? "leftOp" : "rightOp"] = "="
            }
            if (s) o.leftToken = e[1];
            else {
              if ("<ident-token>" !== e[1].type) throw new Error("Invalid range");
              o.featureName = e[1].value
            }
            var a = 2 + (null !== (r = null === (t = o[s ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0),
              l = e[a];
            if (s) {
              if ("<ident-token>" !== l.type) throw new Error("Invalid range");
              if (o.featureName = l.value, e.length >= 7) {
                var c = e[a + 1],
                  u = e[a + 2];
                if ("<delim-token>" !== c.type) throw new Error("Invalid range");
                var h = c.value;
                if (60 === h) "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? o.rightOp = "<" : o.rightOp = "<=";
                else {
                  if (62 !== h) throw new Error("Invalid range");
                  "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? o.rightOp = ">" : o.rightOp = ">="
                }
                var f = e[a + 1 + (null !== (i = null === (n = o.rightOp) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0)];
                o.rightToken = f
              } else if (a + 2 !== e.length) throw new Error("Invalid range")
            } else o.rightToken = l;
            var d = null,
              p = o.leftToken,
              m = o.leftOp,
              g = o.featureName,
              v = o.rightOp,
              y = o.rightToken,
              w = null;
            if (null !== p)
              if ("<ident-token>" === p.type) {
                var b = p.type;
                "infinite" === (S = p.value) && (w = {
                  type: b,
                  value: S
                })
              } else "<number-token>" !== p.type && "<dimension-token>" !== p.type && "<ratio-token>" !== p.type || (p.wsBefore, p.wsAfter, w = T(p, ["wsBefore", "wsAfter"]));
            var k = null;
            if (null !== y)
              if ("<ident-token>" === y.type) {
                var S;
                b = y.type, "infinite" === (S = y.value) && (k = {
                  type: b,
                  value: S
                })
              } else "<number-token>" !== y.type && "<dimension-token>" !== y.type && "<ratio-token>" !== y.type || (y.wsBefore, y.wsAfter, k = T(y, ["wsBefore", "wsAfter"]));
            if (null !== w && null !== k)
              if ("<" !== m && "<=" !== m || "<" !== v && "<=" !== v) {
                if (">" !== m && ">=" !== m || ">" !== v && ">=" !== v) throw new Error("Invalid range");
                d = {
                  leftToken: w,
                  leftOp: m,
                  featureName: g,
                  rightOp: v,
                  rightToken: k
                }
              } else d = {
                leftToken: w,
                leftOp: m,
                featureName: g,
                rightOp: v,
                rightToken: k
              };
            else(null === w && null === m && null !== v && null !== k || null !== w && null !== m && null === v && null === k) && (d = {
              leftToken: w,
              leftOp: m,
              featureName: g,
              rightOp: v,
              rightToken: k
            });
            return d
          }
          throw new Error("Invalid range")
        };

      function ee(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function te(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? te(Object(r), !0).forEach((function(t) {
            var n, i, o;
            n = e, i = t, o = r[t], (i = ee(i)) in n ? Object.defineProperty(n, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[i] = o
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : te(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function ne(e, t) {
        if (null == e) return {};
        var r, n, i = function(e, t) {
          if (null == e) return {};
          var r, n, i = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
        }
        return i
      }

      function ie(e, t) {
        for (var r in e) t(e[r], r)
      }

      function oe(e, t) {
        var r = {};
        for (var n in e) - 1 === t.indexOf(n) && (r[n] = e[n]);
        return r
      }
      class se {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new se
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var r of e) {
            var n = t.findOrCreateCondition(r);
            t = n.children
          }
          return t
        }
        addRule(e, t, r) {
          var n = this.getConditionalRulesetByPath(r).findOrCreateCondition(t);
          if (!n) throw new Error("Failed to add conditional rule");
          n.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var r = this.getConditionalRulesetByPath(e), n = 0; n < t.length; n++) {
            var i, o = t[n],
              s = null !== (i = r.precedenceLookup.get(o)) && void 0 !== i ? i : new Set;
            for (var a of t.slice(n + 1)) s.add(a);
            r.precedenceLookup.set(o, s)
          }
        }
        isCompatible(e) {
          for (var [t, r] of this.precedenceLookup.entries())
            for (var n of r) {
              var i;
              if (null !== (i = e.precedenceLookup.get(n)) && void 0 !== i && i.has(t)) return !1
            }
          for (var {
              query: o,
              children: s
            }
            of e.ruleset.values()) {
            var a = this.ruleset.get(o);
            if (a && !a.children.isCompatible(s)) return !1
          }
          return !0
        }
        merge(e) {
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of e.ruleset.values()) {
            var i = this.ruleset.get(t);
            i ? (i.rules.push(...r), i.children.merge(n)) : this.ruleset.set(t, {
              query: t,
              rules: r,
              children: n
            })
          }
          for (var [o, s] of e.precedenceLookup.entries()) {
            var a, l = null !== (a = this.precedenceLookup.get(o)) && void 0 !== a ? a : new Set;
            this.precedenceLookup.set(o, new Set([...l, ...s]))
          }
        }
        mergeIfCompatible(e) {
          return !!this.isCompatible(e) && (this.merge(e), !0)
        }
        getSortedRuleset() {
          var e = this,
            t = [],
            r = function(r) {
              var i = e.ruleset.get(n);
              if (!i) throw new Error("Can't find condition for ".concat(n));
              var o = t.findIndex((e => r.has(e.query)));
              o > -1 ? t.splice(o, 0, i) : t.push(i)
            };
          for (var [n, i] of this.precedenceLookup.entries()) r(i);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of this.getSortedRuleset()) {
            var i = {};
            for (var o of r) i[o.selector] = re(re({}, i[o.selector]), o.rule);
            Object.assign(i, ...n.renderToArray()), e.push({
              [t]: i
            })
          }
          return e
        }
      }
      var ae, le = {
          ":-moz-any-link": !0,
          ":-moz-full-screen": !0,
          ":-moz-placeholder": !0,
          ":-moz-read-only": !0,
          ":-moz-read-write": !0,
          ":-ms-fullscreen": !0,
          ":-ms-input-placeholder": !0,
          ":-webkit-any-link": !0,
          ":-webkit-full-screen": !0,
          "::-moz-color-swatch": !0,
          "::-moz-list-bullet": !0,
          "::-moz-list-number": !0,
          "::-moz-page-sequence": !0,
          "::-moz-page": !0,
          "::-moz-placeholder": !0,
          "::-moz-progress-bar": !0,
          "::-moz-range-progress": !0,
          "::-moz-range-thumb": !0,
          "::-moz-range-track": !0,
          "::-moz-scrolled-page-sequence": !0,
          "::-moz-selection": !0,
          "::-ms-backdrop": !0,
          "::-ms-browse": !0,
          "::-ms-check": !0,
          "::-ms-clear": !0,
          "::-ms-fill-lower": !0,
          "::-ms-fill-upper": !0,
          "::-ms-fill": !0,
          "::-ms-reveal": !0,
          "::-ms-thumb": !0,
          "::-ms-ticks-after": !0,
          "::-ms-ticks-before": !0,
          "::-ms-tooltip": !0,
          "::-ms-track": !0,
          "::-ms-value": !0,
          "::-webkit-backdrop": !0,
          "::-webkit-calendar-picker-indicator": !0,
          "::-webkit-inner-spin-button": !0,
          "::-webkit-input-placeholder": !0,
          "::-webkit-meter-bar": !0,
          "::-webkit-meter-even-less-good-value": !0,
          "::-webkit-meter-inner-element": !0,
          "::-webkit-meter-optimum-value": !0,
          "::-webkit-meter-suboptimum-value": !0,
          "::-webkit-outer-spin-button": !0,
          "::-webkit-progress-bar": !0,
          "::-webkit-progress-inner-element": !0,
          "::-webkit-progress-inner-value": !0,
          "::-webkit-progress-value": !0,
          "::-webkit-resizer": !0,
          "::-webkit-scrollbar-button": !0,
          "::-webkit-scrollbar-corner": !0,
          "::-webkit-scrollbar-thumb": !0,
          "::-webkit-scrollbar-track-piece": !0,
          "::-webkit-scrollbar-track": !0,
          "::-webkit-scrollbar": !0,
          "::-webkit-search-cancel-button": !0,
          "::-webkit-search-results-button": !0,
          "::-webkit-slider-runnable-track": !0,
          "::-webkit-slider-thumb": !0,
          "::after": !0,
          "::backdrop": !0,
          "::before": !0,
          "::cue": !0,
          "::file-selector-button": !0,
          "::first-letter": !0,
          "::first-line": !0,
          "::grammar-error": !0,
          "::marker": !0,
          "::placeholder": !0,
          "::selection": !0,
          "::spelling-error": !0,
          "::target-text": !0,
          "::view-transition-group": !0,
          "::view-transition-image-pair": !0,
          "::view-transition-new": !0,
          "::view-transition-old": !0,
          "::view-transition": !0,
          ":active": !0,
          ":after": !0,
          ":any-link": !0,
          ":before": !0,
          ":blank": !0,
          ":checked": !0,
          ":default": !0,
          ":defined": !0,
          ":disabled": !0,
          ":empty": !0,
          ":enabled": !0,
          ":first-child": !0,
          ":first-letter": !0,
          ":first-line": !0,
          ":first-of-type": !0,
          ":first": !0,
          ":focus-visible": !0,
          ":focus-within": !0,
          ":focus": !0,
          ":fullscreen": !0,
          ":hover": !0,
          ":in-range": !0,
          ":indeterminate": !0,
          ":invalid": !0,
          ":last-child": !0,
          ":last-of-type": !0,
          ":left": !0,
          ":link": !0,
          ":only-child": !0,
          ":only-of-type": !0,
          ":optional": !0,
          ":out-of-range": !0,
          ":placeholder-shown": !0,
          ":read-only": !0,
          ":read-write": !0,
          ":required": !0,
          ":right": !0,
          ":root": !0,
          ":scope": !0,
          ":target": !0,
          ":valid": !0,
          ":visited": !0
        },
        ce = Object.keys(le),
        ue = le,
        he = (e, t) => new Error(L(ae || (ae = f(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        fe = e => {
          if ("@media " === e) throw he(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = H(e[t])
            })(V(e))
          } catch (t) {
            throw he(e, t.message)
          }
        },
        de = ["vars"],
        pe = ["content"],
        me = "__DECLARATION",
        ge = {
          animationIterationCount: !0,
          borderImage: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          initialLetter: !0,
          lineClamp: !0,
          lineHeight: !0,
          maxLines: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          tabSize: !0,
          WebkitLineClamp: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          maskBorder: !0,
          maskBorderOutset: !0,
          maskBorderSlice: !0,
          maskBorderWidth: !0,
          shapeImageThreshold: !0,
          stopOpacity: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        };

      function ve(e, t, r, n) {
        var i = e.slice(0, t),
          o = e.slice(r);
        return "".concat(i).concat(n).concat(o)
      }
      var ye = [...ce, "@layer", "@media", "@supports", "@container", "selectors"];
      class we {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new se], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map((e => [e, e]))), this.localClassNamesSearch = new c(e), this.layers = new Map, this.composedClassLists = t.map((e => {
            var {
              identifier: t,
              classList: r
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(r, ")"), "g")
            }
          })).reverse()
        }
        processCssObj(e) {
          if ("fontFace" !== e.type)
            if ("property" !== e.type) {
              if ("keyframes" === e.type) return e.rule = Object.fromEntries(Object.entries(e.rule).map((e => {
                var [t, r] = e;
                return [t, this.transformVars(this.transformProperties(r))]
              }))), void this.keyframesRules.push(e);
              if (this.currConditionalRuleset = new se, "layer" === e.type) {
                var t = "@layer ".concat(e.name);
                this.addLayer([t])
              } else {
                var r = oe(e.rule, ye);
                this.addRule({
                  selector: e.selector,
                  rule: r
                }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
              }
              this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
            } else this.propertyRules.push(e);
          else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var r = this.transformVars(this.transformProperties(e.rule)),
            n = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var i = t[t.length - 1],
            o = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: n,
            rule: r
          }, i, o)
        }
        addRule(e) {
          var t = this.transformVars(this.transformProperties(e.rule)),
            r = this.transformSelector(e.selector);
          this.rules.push({
            selector: r,
            rule: t
          })
        }
        addLayer(e) {
          var t = e.join(" - ");
          this.layers.set(t, e)
        }
        transformProperties(e) {
          return this.transformContent(this.pixelifyProperties(e))
        }
        pixelifyProperties(e) {
          return ie(e, ((t, r) => {
            "number" != typeof t || 0 === t || ge[r] || (e[r] = "".concat(t, "px"))
          })), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, r = ne(e, de);
          return t ? re(re({}, function(e) {
            var t, r = {};
            for (var n in e) r[(e[n], t = n, (0, s.Tm)(t))] = e[n];
            return r
          }(t)), r) : r
        }
        transformContent(e) {
          var {
            content: t
          } = e, r = ne(e, pe);
          return void 0 === t ? r : re({
            content: (Array.isArray(t) ? t : [t]).map((e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"')))
          }, r)
        }
        transformClassname(e) {
          return ".".concat(l()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            r = function(e) {
              t = t.replace(i, (() => (function() {
                (() => {
                  if (u.length < 1) throw new Error("No adapter configured");
                  return u[u.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e)))
            };
          for (var {
              identifier: n,
              regex: i
            }
            of this.composedClassLists) r(n);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var o = this.localClassNamesSearch.search(t), s = t.length, a = o.length - 1; a >= 0; a--) {
            var [l, [c]] = o[a], h = l - c.length + 1;
            s <= l || (s = h, "." !== t[h - 1] && (t = ve(t, h, l + 1, this.transformClassname(c))))
          }
          return t
        }
        transformSelectors(e, t, r) {
          ie(t.selectors, ((t, n) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var i = this.transformSelector(n.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var r, n = () => {
                var r = new RegExp(".".concat(l()(t, {
                  isIdentifier: !0
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(r, "&")
              };
              try {
                r = S(e)
              } catch (e) {
                throw new Error("Invalid selector: ".concat(n()))
              }
              r.forEach((e => {
                try {
                  for (var r = e.length - 1; r >= -1; r--) {
                    if (!e[r]) throw new Error;
                    var i = e[r];
                    if ("child" === i.type || "parent" === i.type || "sibling" === i.type || "adjacent" === i.type || "descendant" === i.type) throw new Error;
                    if ("attribute" === i.type && "class" === i.name && i.value === t) return
                  }
                } catch (e) {
                  throw new Error(L(z || (z = f(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), n(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              }))
            })(i, e.selector);
            var o = {
              selector: i,
              rule: oe(t, ye)
            };
            r ? this.addConditionalRule(o, r) : this.addRule(o);
            var s = {
              type: "selector",
              selector: i,
              rule: t
            };
            this.transformLayer(s, t["@layer"], r), this.transformSupports(s, t["@supports"], r), this.transformMedia(s, t["@media"], r), this.transformContainer(s, t["@container"], r)
          }))
        }
        transformMedia(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [i, o] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@media ".concat(e)))), Object.entries(t))) {
              var s = "@media ".concat(i);
              fe(s);
              var a = [...n, s];
              this.addConditionalRule({
                selector: e.selector,
                rule: oe(o, ye)
              }, a), "local" === e.type && (this.transformSimplePseudos(e, o, a), this.transformSelectors(e, o, a)), this.transformLayer(e, o["@layer"], a), this.transformSupports(e, o["@supports"], a), this.transformContainer(e, o["@container"], a)
            }
        }
        transformContainer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@container ".concat(e)))), ie(t, ((t, r) => {
            var i = "@container ".concat(r),
              o = [...n, i];
            this.addConditionalRule({
              selector: e.selector,
              rule: oe(t, ye)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformSupports(e, t["@supports"], o), this.transformMedia(e, t["@media"], o)
          })))
        }
        transformLayer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@layer ".concat(e)))), ie(t, ((t, r) => {
            var i = [...n, "@layer ".concat(r)];
            this.addLayer(i), this.addConditionalRule({
              selector: e.selector,
              rule: oe(t, ye)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformMedia(e, t["@media"], i), this.transformSupports(e, t["@supports"], i), this.transformContainer(e, t["@container"], i)
          })))
        }
        transformSupports(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@supports ".concat(e)))), ie(t, ((t, r) => {
            var i = [...n, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: oe(t, ye)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformMedia(e, t["@media"], i), this.transformContainer(e, t["@container"], i)
          })))
        }
        transformSimplePseudos(e, t, r) {
          for (var n of Object.keys(t))
            if (ue[n]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              })
            }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(be({
            "@font-face": t
          }));
          for (var r of this.propertyRules) e.push(be({
            ["@property ".concat(r.name)]: r.rule
          }));
          for (var n of this.keyframesRules) e.push(be({
            ["@keyframes ".concat(n.name)]: n.rule
          }));
          for (var i of this.layers.values()) {
            var [o, ...s] = i.reverse(), a = {
              [o]: me
            };
            for (var l of s) a = {
              [l]: a
            };
            e.push(be(a))
          }
          for (var c of this.rules) e.push(be({
            [c.selector]: c.rule
          }));
          for (var u of this.conditionalRulesets)
            for (var h of u.renderToArray()) e.push(be(h));
          return e.filter(Boolean)
        }
      }

      function be(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          n = function(n) {
            var i, o = e[n];
            o && Array.isArray(o) ? r.push(...o.map((e => be({
              [n]: e
            }, t)))) : o && "object" == typeof o ? 0 === Object.keys(o).length || r.push("".concat(t).concat(n, " {\n").concat(be(o, t + "  "), "\n").concat(t, "}")) : o === me ? r.push("".concat(t).concat(n, ";")) : r.push("".concat(t).concat(n.startsWith("--") ? n : (i = n, i.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(o, ";"))
          };
        for (var i of Object.keys(e)) n(i);
        return r.join("\n")
      }
      var ke = r(13404);
      const Se = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        xe = new Set,
        Ce = "object" == typeof ke && ke ? ke : {},
        Ae = (e, t, r, n) => {
          "function" == typeof Ce.emitWarning ? Ce.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`)
        };
      let Ee = globalThis.AbortController,
        Le = globalThis.AbortSignal;
      if (void 0 === Ee) {
        Le = class {
          onabort;
          _onabort = [];
          reason;
          aborted = !1;
          addEventListener(e, t) {
            this._onabort.push(t)
          }
        }, Ee = class {
          constructor() {
            t()
          }
          signal = new Le;
          abort(e) {
            if (!this.signal.aborted) {
              this.signal.reason = e, this.signal.aborted = !0;
              for (const t of this.signal._onabort) t(e);
              this.signal.onabort?.(e)
            }
          }
        };
        let e = "1" !== Ce.env?.LRU_CACHE_IGNORE_AC_WARNING;
        const t = () => {
          e && (e = !1, Ae("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
        }
      }
      Symbol("type");
      const Oe = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        Te = e => Oe(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? Re : null : null;
      class Re extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class ze {
        heap;
        length;
        static #e = !1;
        static create(e) {
          const t = Te(e);
          if (!t) return [];
          ze.#e = !0;
          const r = new ze(e, t);
          return ze.#e = !1, r
        }
        constructor(e, t) {
          if (!ze.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class Fe {
        #t;
        #r;
        #n;
        #i;
        #o;
        #s;
        ttl;
        ttlResolution;
        ttlAutopurge;
        updateAgeOnGet;
        updateAgeOnHas;
        allowStale;
        noDisposeOnSet;
        noUpdateTTL;
        maxEntrySize;
        sizeCalculation;
        noDeleteOnFetchRejection;
        noDeleteOnStaleGet;
        allowStaleOnFetchAbort;
        allowStaleOnFetchRejection;
        ignoreFetchAbort;
        #a;
        #l;
        #c;
        #u;
        #h;
        #f;
        #d;
        #p;
        #m;
        #g;
        #v;
        #y;
        #w;
        #b;
        #k;
        #S;
        #x;
        static unsafeExposeInternals(e) {
          return {
            starts: e.#w,
            ttls: e.#b,
            sizes: e.#y,
            keyMap: e.#c,
            keyList: e.#u,
            valList: e.#h,
            next: e.#f,
            prev: e.#d,
            get head() {
              return e.#p
            },
            get tail() {
              return e.#m
            },
            free: e.#g,
            isBackgroundFetch: t => e.#C(t),
            backgroundFetch: (t, r, n, i) => e.#A(t, r, n, i),
            moveToTail: t => e.#E(t),
            indexes: t => e.#L(t),
            rindexes: t => e.#O(t),
            isStale: t => e.#T(t)
          }
        }
        get max() {
          return this.#t
        }
        get maxSize() {
          return this.#r
        }
        get calculatedSize() {
          return this.#l
        }
        get size() {
          return this.#a
        }
        get fetchMethod() {
          return this.#o
        }
        get memoMethod() {
          return this.#s
        }
        get dispose() {
          return this.#n
        }
        get disposeAfter() {
          return this.#i
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: r,
            ttlResolution: n = 1,
            ttlAutopurge: i,
            updateAgeOnGet: o,
            updateAgeOnHas: s,
            allowStale: a,
            dispose: l,
            disposeAfter: c,
            noDisposeOnSet: u,
            noUpdateTTL: h,
            maxSize: f = 0,
            maxEntrySize: d = 0,
            sizeCalculation: p,
            fetchMethod: m,
            memoMethod: g,
            noDeleteOnFetchRejection: v,
            noDeleteOnStaleGet: y,
            allowStaleOnFetchRejection: w,
            allowStaleOnFetchAbort: b,
            ignoreFetchAbort: k
          } = e;
          if (0 !== t && !Oe(t)) throw new TypeError("max option must be a nonnegative integer");
          const S = t ? Te(t) : Array;
          if (!S) throw new Error("invalid max value: " + t);
          if (this.#t = t, this.#r = f, this.maxEntrySize = d || this.#r, this.sizeCalculation = p, this.sizeCalculation) {
            if (!this.#r && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== g && "function" != typeof g) throw new TypeError("memoMethod must be a function if defined");
          if (this.#s = g, void 0 !== m && "function" != typeof m) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#o = m, this.#S = !!m, this.#c = new Map, this.#u = new Array(t).fill(void 0), this.#h = new Array(t).fill(void 0), this.#f = new S(t), this.#d = new S(t), this.#p = 0, this.#m = 0, this.#g = ze.create(t), this.#a = 0, this.#l = 0, "function" == typeof l && (this.#n = l), "function" == typeof c ? (this.#i = c, this.#v = []) : (this.#i = void 0, this.#v = void 0), this.#k = !!this.#n, this.#x = !!this.#i, this.noDisposeOnSet = !!u, this.noUpdateTTL = !!h, this.noDeleteOnFetchRejection = !!v, this.allowStaleOnFetchRejection = !!w, this.allowStaleOnFetchAbort = !!b, this.ignoreFetchAbort = !!k, 0 !== this.maxEntrySize) {
            if (0 !== this.#r && !Oe(this.#r)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!Oe(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#R()
          }
          if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!s, this.ttlResolution = Oe(n) || 0 === n ? n : 1, this.ttlAutopurge = !!i, this.ttl = r || 0, this.ttl) {
            if (!Oe(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#z()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#r) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#r) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !xe.has(e))(e) && (xe.add(e), Ae("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, Fe))
          }
        }
        getRemainingTTL(e) {
          return this.#c.has(e) ? 1 / 0 : 0
        }
        #z() {
          const e = new Re(this.#t),
            t = new Re(this.#t);
          this.#b = e, this.#w = t, this.#F = (r, n, i = Se.now()) => {
            if (t[r] = 0 !== n ? i : 0, e[r] = n, 0 !== n && this.ttlAutopurge) {
              const e = setTimeout((() => {
                this.#T(r) && this.#_(this.#u[r], "expire")
              }), n + 1);
              e.unref && e.unref()
            }
          }, this.#P = r => {
            t[r] = 0 !== e[r] ? Se.now() : 0
          }, this.#M = (i, o) => {
            if (e[o]) {
              const s = e[o],
                a = t[o];
              if (!s || !a) return;
              i.ttl = s, i.start = a, i.now = r || n();
              const l = i.now - a;
              i.remainingTTL = s - l
            }
          };
          let r = 0;
          const n = () => {
            const e = Se.now();
            if (this.ttlResolution > 0) {
              r = e;
              const t = setTimeout((() => r = 0), this.ttlResolution);
              t.unref && t.unref()
            }
            return e
          };
          this.getRemainingTTL = i => {
            const o = this.#c.get(i);
            if (void 0 === o) return 0;
            const s = e[o],
              a = t[o];
            return s && a ? s - ((r || n()) - a) : 1 / 0
          }, this.#T = i => {
            const o = t[i],
              s = e[i];
            return !!s && !!o && (r || n()) - o > s
          }
        }
        #P = () => {};
        #M = () => {};
        #F = () => {};
        #T = () => !1;
        #R() {
          const e = new Re(this.#t);
          this.#l = 0, this.#y = e, this.#j = t => {
            this.#l -= e[t], e[t] = 0
          }, this.#D = (e, t, r, n) => {
            if (this.#C(t)) return 0;
            if (!Oe(r)) {
              if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
              if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
              if (r = n(t, e), !Oe(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
            }
            return r
          }, this.#I = (t, r, n) => {
            if (e[t] = r, this.#r) {
              const r = this.#r - e[t];
              for (; this.#l > r;) this.#B(!0)
            }
            this.#l += e[t], n && (n.entrySize = r, n.totalCalculatedSize = this.#l)
          }
        }
        #j = e => {};
        #I = (e, t, r) => {};
        #D = (e, t, r, n) => {
          if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };* #L({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#a)
            for (let t = this.#m; this.#W(t) && (!e && this.#T(t) || (yield t), t !== this.#p);) t = this.#d[t]
        }* #O({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#a)
            for (let t = this.#p; this.#W(t) && (!e && this.#T(t) || (yield t), t !== this.#m);) t = this.#f[t]
        }
        #W(e) {
          return void 0 !== e && this.#c.get(this.#u[e]) === e
        }* entries() {
          for (const e of this.#L()) void 0 === this.#h[e] || void 0 === this.#u[e] || this.#C(this.#h[e]) || (yield [this.#u[e], this.#h[e]])
        }* rentries() {
          for (const e of this.#O()) void 0 === this.#h[e] || void 0 === this.#u[e] || this.#C(this.#h[e]) || (yield [this.#u[e], this.#h[e]])
        }* keys() {
          for (const e of this.#L()) {
            const t = this.#u[e];
            void 0 === t || this.#C(this.#h[e]) || (yield t)
          }
        }* rkeys() {
          for (const e of this.#O()) {
            const t = this.#u[e];
            void 0 === t || this.#C(this.#h[e]) || (yield t)
          }
        }* values() {
          for (const e of this.#L()) void 0 === this.#h[e] || this.#C(this.#h[e]) || (yield this.#h[e])
        }* rvalues() {
          for (const e of this.#O()) void 0 === this.#h[e] || this.#C(this.#h[e]) || (yield this.#h[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e, t = {}) {
          for (const r of this.#L()) {
            const n = this.#h[r],
              i = this.#C(n) ? n.__staleWhileFetching : n;
            if (void 0 !== i && e(i, this.#u[r], this)) return this.get(this.#u[r], t)
          }
        }
        forEach(e, t = this) {
          for (const r of this.#L()) {
            const n = this.#h[r],
              i = this.#C(n) ? n.__staleWhileFetching : n;
            void 0 !== i && e.call(t, i, this.#u[r], this)
          }
        }
        rforEach(e, t = this) {
          for (const r of this.#O()) {
            const n = this.#h[r],
              i = this.#C(n) ? n.__staleWhileFetching : n;
            void 0 !== i && e.call(t, i, this.#u[r], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (const t of this.#O({
              allowStale: !0
            })) this.#T(t) && (this.#_(this.#u[t], "expire"), e = !0);
          return e
        }
        info(e) {
          const t = this.#c.get(e);
          if (void 0 === t) return;
          const r = this.#h[t],
            n = this.#C(r) ? r.__staleWhileFetching : r;
          if (void 0 === n) return;
          const i = {
            value: n
          };
          if (this.#b && this.#w) {
            const e = this.#b[t],
              r = this.#w[t];
            if (e && r) {
              const t = e - (Se.now() - r);
              i.ttl = t, i.start = Date.now()
            }
          }
          return this.#y && (i.size = this.#y[t]), i
        }
        dump() {
          const e = [];
          for (const t of this.#L({
              allowStale: !0
            })) {
            const r = this.#u[t],
              n = this.#h[t],
              i = this.#C(n) ? n.__staleWhileFetching : n;
            if (void 0 === i || void 0 === r) continue;
            const o = {
              value: i
            };
            if (this.#b && this.#w) {
              o.ttl = this.#b[t];
              const e = Se.now() - this.#w[t];
              o.start = Math.floor(Date.now() - e)
            }
            this.#y && (o.size = this.#y[t]), e.unshift([r, o])
          }
          return e
        }
        load(e) {
          this.clear();
          for (const [t, r] of e) {
            if (r.start) {
              const e = Date.now() - r.start;
              r.start = Se.now() - e
            }
            this.set(t, r.value, r)
          }
        }
        set(e, t, r = {}) {
          if (void 0 === t) return this.delete(e), this;
          const {
            ttl: n = this.ttl,
            start: i,
            noDisposeOnSet: o = this.noDisposeOnSet,
            sizeCalculation: s = this.sizeCalculation,
            status: a
          } = r;
          let {
            noUpdateTTL: l = this.noUpdateTTL
          } = r;
          const c = this.#D(e, t, r.size || 0, s);
          if (this.maxEntrySize && c > this.maxEntrySize) return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.#_(e, "set"), this;
          let u = 0 === this.#a ? void 0 : this.#c.get(e);
          if (void 0 === u) u = 0 === this.#a ? this.#m : 0 !== this.#g.length ? this.#g.pop() : this.#a === this.#t ? this.#B(!1) : this.#a, this.#u[u] = e, this.#h[u] = t, this.#c.set(e, u), this.#f[this.#m] = u, this.#d[u] = this.#m, this.#m = u, this.#a++, this.#I(u, c, a), a && (a.set = "add"), l = !1;
          else {
            this.#E(u);
            const r = this.#h[u];
            if (t !== r) {
              if (this.#S && this.#C(r)) {
                r.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = r;
                void 0 === t || o || (this.#k && this.#n?.(t, e, "set"), this.#x && this.#v?.push([t, e, "set"]))
              } else o || (this.#k && this.#n?.(r, e, "set"), this.#x && this.#v?.push([r, e, "set"]));
              if (this.#j(u), this.#I(u, c, a), this.#h[u] = t, a) {
                a.set = "replace";
                const e = r && this.#C(r) ? r.__staleWhileFetching : r;
                void 0 !== e && (a.oldValue = e)
              }
            } else a && (a.set = "update")
          }
          if (0 === n || this.#b || this.#z(), this.#b && (l || this.#F(u, n, i), a && this.#M(a, u)), !o && this.#x && this.#v) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
          return this
        }
        pop() {
          try {
            for (; this.#a;) {
              const e = this.#h[this.#p];
              if (this.#B(!0), this.#C(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#x && this.#v) {
              const e = this.#v;
              let t;
              for (; t = e?.shift();) this.#i?.(...t)
            }
          }
        }
        #B(e) {
          const t = this.#p,
            r = this.#u[t],
            n = this.#h[t];
          return this.#S && this.#C(n) ? n.__abortController.abort(new Error("evicted")) : (this.#k || this.#x) && (this.#k && this.#n?.(n, r, "evict"), this.#x && this.#v?.push([n, r, "evict"])), this.#j(t), e && (this.#u[t] = void 0, this.#h[t] = void 0, this.#g.push(t)), 1 === this.#a ? (this.#p = this.#m = 0, this.#g.length = 0) : this.#p = this.#f[t], this.#c.delete(r), this.#a--, t
        }
        has(e, t = {}) {
          const {
            updateAgeOnHas: r = this.updateAgeOnHas,
            status: n
          } = t, i = this.#c.get(e);
          if (void 0 !== i) {
            const e = this.#h[i];
            if (this.#C(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#T(i)) return r && this.#P(i), n && (n.has = "hit", this.#M(n, i)), !0;
            n && (n.has = "stale", this.#M(n, i))
          } else n && (n.has = "miss");
          return !1
        }
        peek(e, t = {}) {
          const {
            allowStale: r = this.allowStale
          } = t, n = this.#c.get(e);
          if (void 0 === n || !r && this.#T(n)) return;
          const i = this.#h[n];
          return this.#C(i) ? i.__staleWhileFetching : i
        }
        #A(e, t, r, n) {
          const i = void 0 === t ? void 0 : this.#h[t];
          if (this.#C(i)) return i;
          const o = new Ee,
            {
              signal: s
            } = r;
          s?.addEventListener("abort", (() => o.abort(s.reason)), {
            signal: o.signal
          });
          const a = {
              signal: o.signal,
              options: r,
              context: n
            },
            l = (n, i = !1) => {
              const {
                aborted: s
              } = o.signal, l = r.ignoreFetchAbort && void 0 !== n;
              if (r.status && (s && !i ? (r.status.fetchAborted = !0, r.status.fetchError = o.signal.reason, l && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), s && !l && !i) return c(o.signal.reason);
              const h = u;
              return this.#h[t] === u && (void 0 === n ? h.__staleWhileFetching ? this.#h[t] = h.__staleWhileFetching : this.#_(e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, n, a.options))), n
            },
            c = n => {
              const {
                aborted: i
              } = o.signal, s = i && r.allowStaleOnFetchAbort, a = s || r.allowStaleOnFetchRejection, l = a || r.noDeleteOnFetchRejection, c = u;
              if (this.#h[t] === u && (l && void 0 !== c.__staleWhileFetching ? s || (this.#h[t] = c.__staleWhileFetching) : this.#_(e, "fetch")), a) return r.status && void 0 !== c.__staleWhileFetching && (r.status.returnedStale = !0), c.__staleWhileFetching;
              if (c.__returned === c) throw n
            };
          r.status && (r.status.fetchDispatched = !0);
          const u = new Promise(((t, n) => {
              const s = this.#o?.(e, i, a);
              s && s instanceof Promise && s.then((e => t(void 0 === e ? void 0 : e)), n), o.signal.addEventListener("abort", (() => {
                r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = e => l(e, !0)))
              }))
            })).then(l, (e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), c(e)))),
            h = Object.assign(u, {
              __abortController: o,
              __staleWhileFetching: i,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, h, {
            ...a.options,
            status: void 0
          }), t = this.#c.get(e)) : this.#h[t] = h, h
        }
        #C(e) {
          if (!this.#S) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof Ee
        }
        async fetch(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: n = this.updateAgeOnGet,
            noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
            ttl: o = this.ttl,
            noDisposeOnSet: s = this.noDisposeOnSet,
            size: a = 0,
            sizeCalculation: l = this.sizeCalculation,
            noUpdateTTL: c = this.noUpdateTTL,
            noDeleteOnFetchRejection: u = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: h = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: f = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: d = this.allowStaleOnFetchAbort,
            context: p,
            forceRefresh: m = !1,
            status: g,
            signal: v
          } = t;
          if (!this.#S) return g && (g.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: i,
            status: g
          });
          const y = {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: i,
            ttl: o,
            noDisposeOnSet: s,
            size: a,
            sizeCalculation: l,
            noUpdateTTL: c,
            noDeleteOnFetchRejection: u,
            allowStaleOnFetchRejection: h,
            allowStaleOnFetchAbort: d,
            ignoreFetchAbort: f,
            status: g,
            signal: v
          };
          let w = this.#c.get(e);
          if (void 0 === w) {
            g && (g.fetch = "miss");
            const t = this.#A(e, w, y, p);
            return t.__returned = t
          } {
            const t = this.#h[w];
            if (this.#C(t)) {
              const e = r && void 0 !== t.__staleWhileFetching;
              return g && (g.fetch = "inflight", e && (g.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const i = this.#T(w);
            if (!m && !i) return g && (g.fetch = "hit"), this.#E(w), n && this.#P(w), g && this.#M(g, w), t;
            const o = this.#A(e, w, y, p),
              s = void 0 !== o.__staleWhileFetching && r;
            return g && (g.fetch = i ? "stale" : "refresh", s && i && (g.returnedStale = !0)), s ? o.__staleWhileFetching : o.__returned = o
          }
        }
        async forceFetch(e, t = {}) {
          const r = await this.fetch(e, t);
          if (void 0 === r) throw new Error("fetch() returned undefined");
          return r
        }
        memo(e, t = {}) {
          const r = this.#s;
          if (!r) throw new Error("no memoMethod provided to constructor");
          const {
            context: n,
            forceRefresh: i,
            ...o
          } = t, s = this.get(e, o);
          if (!i && void 0 !== s) return s;
          const a = r(e, s, {
            options: o,
            context: n
          });
          return this.set(e, a, o), a
        }
        get(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: n = this.updateAgeOnGet,
            noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
            status: o
          } = t, s = this.#c.get(e);
          if (void 0 !== s) {
            const t = this.#h[s],
              a = this.#C(t);
            return o && this.#M(o, s), this.#T(s) ? (o && (o.get = "stale"), a ? (o && r && void 0 !== t.__staleWhileFetching && (o.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (i || this.#_(e, "expire"), o && r && (o.returnedStale = !0), r ? t : void 0)) : (o && (o.get = "hit"), a ? t.__staleWhileFetching : (this.#E(s), n && this.#P(s), t))
          }
          o && (o.get = "miss")
        }
        #N(e, t) {
          this.#d[t] = e, this.#f[e] = t
        }
        #E(e) {
          e !== this.#m && (e === this.#p ? this.#p = this.#f[e] : this.#N(this.#d[e], this.#f[e]), this.#N(this.#m, e), this.#m = e)
        }
        delete(e) {
          return this.#_(e, "delete")
        }
        #_(e, t) {
          let r = !1;
          if (0 !== this.#a) {
            const n = this.#c.get(e);
            if (void 0 !== n)
              if (r = !0, 1 === this.#a) this.#$(t);
              else {
                this.#j(n);
                const r = this.#h[n];
                if (this.#C(r) ? r.__abortController.abort(new Error("deleted")) : (this.#k || this.#x) && (this.#k && this.#n?.(r, e, t), this.#x && this.#v?.push([r, e, t])), this.#c.delete(e), this.#u[n] = void 0, this.#h[n] = void 0, n === this.#m) this.#m = this.#d[n];
                else if (n === this.#p) this.#p = this.#f[n];
                else {
                  const e = this.#d[n];
                  this.#f[e] = this.#f[n];
                  const t = this.#f[n];
                  this.#d[t] = this.#d[n]
                }
                this.#a--, this.#g.push(n)
              }
          }
          if (this.#x && this.#v?.length) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
          return r
        }
        clear() {
          return this.#$("delete")
        }
        #$(e) {
          for (const t of this.#O({
              allowStale: !0
            })) {
            const r = this.#h[t];
            if (this.#C(r)) r.__abortController.abort(new Error("deleted"));
            else {
              const n = this.#u[t];
              this.#k && this.#n?.(r, n, e), this.#x && this.#v?.push([r, n, e])
            }
          }
          if (this.#c.clear(), this.#h.fill(void 0), this.#u.fill(void 0), this.#b && this.#w && (this.#b.fill(0), this.#w.fill(0)), this.#y && this.#y.fill(0), this.#p = 0, this.#m = 0, this.#g.length = 0, this.#l = 0, this.#a = 0, this.#x && this.#v) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
        }
      }
      r(90562);
      var _e = new Set,
        Pe = [],
        Me = [];
      h || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        h = !0, u.push(e)
      })({
        appendCss: e => {
          Me.push(e)
        },
        registerClassName: e => {
          _e.add(e)
        },
        registerComposition: e => {
          Pe.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: r,
              composedClassLists: n
            } = e, i = new we(t, n);
            for (var o of r) i.processCssObj(o);
            return i.toCss()
          }({
            localClassNames: Array.from(_e),
            composedClassLists: Pe,
            cssObjs: Me
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: r
            } = e, n = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, i = o[n];
            if (!i) {
              var s = document.createElement("style");
              t.packageName && s.setAttribute("data-package", t.packageName), s.setAttribute("data-file", t.filePath), s.setAttribute("type", "text/css"), i = o[n] = s, document.head.appendChild(s)
            }
            i.innerHTML = r
          })({
            fileScope: e,
            css: t
          }), Me = []
        },
        getIdentOption: () => "short"
      });
      new Fe({
        max: 500
      })
    },
    55106: (e, t, r) => {
      r.d(t, {
        UE: () => me,
        ll: () => ce,
        rD: () => ve,
        UU: () => fe,
        jD: () => pe,
        ER: () => ge,
        cY: () => ue,
        BN: () => he,
        Ej: () => de
      });
      const n = ["top", "right", "bottom", "left"],
        i = Math.min,
        o = Math.max,
        s = Math.round,
        a = Math.floor,
        l = e => ({
          x: e,
          y: e
        }),
        c = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        u = {
          start: "end",
          end: "start"
        };

      function h(e, t, r) {
        return o(e, i(t, r))
      }

      function f(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function d(e) {
        return e.split("-")[0]
      }

      function p(e) {
        return e.split("-")[1]
      }

      function m(e) {
        return "x" === e ? "y" : "x"
      }

      function g(e) {
        return "y" === e ? "height" : "width"
      }

      function v(e) {
        return ["top", "bottom"].includes(d(e)) ? "y" : "x"
      }

      function y(e) {
        return m(v(e))
      }

      function w(e) {
        return e.replace(/start|end/g, (e => u[e]))
      }

      function b(e) {
        return e.replace(/left|right|bottom|top/g, (e => c[e]))
      }

      function k(e) {
        return "number" != typeof e ? function(e) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
          }
        }(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function S(e) {
        const {
          x: t,
          y: r,
          width: n,
          height: i
        } = e;
        return {
          width: n,
          height: i,
          top: r,
          left: t,
          right: t + n,
          bottom: r + i,
          x: t,
          y: r
        }
      }

      function x(e, t, r) {
        let {
          reference: n,
          floating: i
        } = e;
        const o = v(t),
          s = y(t),
          a = g(s),
          l = d(t),
          c = "y" === o,
          u = n.x + n.width / 2 - i.width / 2,
          h = n.y + n.height / 2 - i.height / 2,
          f = n[a] / 2 - i[a] / 2;
        let m;
        switch (l) {
          case "top":
            m = {
              x: u,
              y: n.y - i.height
            };
            break;
          case "bottom":
            m = {
              x: u,
              y: n.y + n.height
            };
            break;
          case "right":
            m = {
              x: n.x + n.width,
              y: h
            };
            break;
          case "left":
            m = {
              x: n.x - i.width,
              y: h
            };
            break;
          default:
            m = {
              x: n.x,
              y: n.y
            }
        }
        switch (p(t)) {
          case "start":
            m[s] -= f * (r && c ? -1 : 1);
            break;
          case "end":
            m[s] += f * (r && c ? -1 : 1)
        }
        return m
      }
      async function C(e, t) {
        var r;
        void 0 === t && (t = {});
        const {
          x: n,
          y: i,
          platform: o,
          rects: s,
          elements: a,
          strategy: l
        } = e, {
          boundary: c = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: h = "floating",
          altBoundary: d = !1,
          padding: p = 0
        } = f(t, e), m = k(p), g = a[d ? "floating" === h ? "reference" : "floating" : h], v = S(await o.getClippingRect({
          element: null == (r = await (null == o.isElement ? void 0 : o.isElement(g))) || r ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(a.floating)),
          boundary: c,
          rootBoundary: u,
          strategy: l
        })), y = "floating" === h ? {
          x: n,
          y: i,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, w = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(a.floating)), b = await (null == o.isElement ? void 0 : o.isElement(w)) && await (null == o.getScale ? void 0 : o.getScale(w)) || {
          x: 1,
          y: 1
        }, x = S(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: y,
          offsetParent: w,
          strategy: l
        }) : y);
        return {
          top: (v.top - x.top + m.top) / b.y,
          bottom: (x.bottom - v.bottom + m.bottom) / b.y,
          left: (v.left - x.left + m.left) / b.x,
          right: (x.right - v.right + m.right) / b.x
        }
      }

      function A(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function E(e) {
        return n.some((t => e[t] >= 0))
      }

      function L() {
        return "undefined" != typeof window
      }

      function O(e) {
        return z(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function T(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function R(e) {
        var t;
        return null == (t = (z(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function z(e) {
        return !!L() && (e instanceof Node || e instanceof T(e).Node)
      }

      function F(e) {
        return !!L() && (e instanceof Element || e instanceof T(e).Element)
      }

      function _(e) {
        return !!L() && (e instanceof HTMLElement || e instanceof T(e).HTMLElement)
      }

      function P(e) {
        return !(!L() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof T(e).ShadowRoot)
      }

      function M(e) {
        const {
          overflow: t,
          overflowX: r,
          overflowY: n,
          display: i
        } = N(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i)
      }

      function j(e) {
        return ["table", "td", "th"].includes(O(e))
      }

      function D(e) {
        return [":popover-open", ":modal"].some((t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        }))
      }

      function I(e) {
        const t = B(),
          r = F(e) ? N(e) : e;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((e => !!r[e] && "none" !== r[e])) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e => (r.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (r.contain || "").includes(e)))
      }

      function B() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function W(e) {
        return ["html", "body", "#document"].includes(O(e))
      }

      function N(e) {
        return T(e).getComputedStyle(e)
      }

      function $(e) {
        return F(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function U(e) {
        if ("html" === O(e)) return e;
        const t = e.assignedSlot || e.parentNode || P(e) && e.host || R(e);
        return P(t) ? t.host : t
      }

      function H(e) {
        const t = U(e);
        return W(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _(t) && M(t) ? t : H(t)
      }

      function q(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        const i = H(e),
          o = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
          s = T(i);
        if (o) {
          const e = G(s);
          return t.concat(s, s.visualViewport || [], M(i) ? i : [], e && r ? q(e) : [])
        }
        return t.concat(i, q(i, [], r))
      }

      function G(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function V(e) {
        const t = N(e);
        let r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0;
        const i = _(e),
          o = i ? e.offsetWidth : r,
          a = i ? e.offsetHeight : n,
          l = s(r) !== o || s(n) !== a;
        return l && (r = o, n = a), {
          width: r,
          height: n,
          $: l
        }
      }

      function X(e) {
        return F(e) ? e : e.contextElement
      }

      function Z(e) {
        const t = X(e);
        if (!_(t)) return l(1);
        const r = t.getBoundingClientRect(),
          {
            width: n,
            height: i,
            $: o
          } = V(t);
        let a = (o ? s(r.width) : r.width) / n,
          c = (o ? s(r.height) : r.height) / i;
        return a && Number.isFinite(a) || (a = 1), c && Number.isFinite(c) || (c = 1), {
          x: a,
          y: c
        }
      }
      const Y = l(0);

      function Q(e) {
        const t = T(e);
        return B() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : Y
      }

      function J(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const i = e.getBoundingClientRect(),
          o = X(e);
        let s = l(1);
        t && (n ? F(n) && (s = Z(n)) : s = Z(e));
        const a = function(e, t, r) {
          return void 0 === t && (t = !1), !(!r || t && r !== T(e)) && t
        }(o, r, n) ? Q(o) : l(0);
        let c = (i.left + a.x) / s.x,
          u = (i.top + a.y) / s.y,
          h = i.width / s.x,
          f = i.height / s.y;
        if (o) {
          const e = T(o),
            t = n && F(n) ? T(n) : n;
          let r = e,
            i = G(r);
          for (; i && n && t !== r;) {
            const e = Z(i),
              t = i.getBoundingClientRect(),
              n = N(i),
              o = t.left + (i.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              s = t.top + (i.clientTop + parseFloat(n.paddingTop)) * e.y;
            c *= e.x, u *= e.y, h *= e.x, f *= e.y, c += o, u += s, r = T(i), i = G(r)
          }
        }
        return S({
          width: h,
          height: f,
          x: c,
          y: u
        })
      }

      function K(e, t) {
        const r = $(e).scrollLeft;
        return t ? t.left + r : J(R(e)).left + r
      }

      function ee(e, t, r) {
        void 0 === r && (r = !1);
        const n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - (r ? 0 : K(e, n)),
          y: n.top + t.scrollTop
        }
      }

      function te(e, t, r) {
        let n;
        if ("viewport" === t) n = function(e, t) {
          const r = T(e),
            n = R(e),
            i = r.visualViewport;
          let o = n.clientWidth,
            s = n.clientHeight,
            a = 0,
            l = 0;
          if (i) {
            o = i.width, s = i.height;
            const e = B();
            (!e || e && "fixed" === t) && (a = i.offsetLeft, l = i.offsetTop)
          }
          return {
            width: o,
            height: s,
            x: a,
            y: l
          }
        }(e, r);
        else if ("document" === t) n = function(e) {
          const t = R(e),
            r = $(e),
            n = e.ownerDocument.body,
            i = o(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
            s = o(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
          let a = -r.scrollLeft + K(e);
          const l = -r.scrollTop;
          return "rtl" === N(n).direction && (a += o(t.clientWidth, n.clientWidth) - i), {
            width: i,
            height: s,
            x: a,
            y: l
          }
        }(R(e));
        else if (F(t)) n = function(e, t) {
          const r = J(e, !0, "fixed" === t),
            n = r.top + e.clientTop,
            i = r.left + e.clientLeft,
            o = _(e) ? Z(e) : l(1);
          return {
            width: e.clientWidth * o.x,
            height: e.clientHeight * o.y,
            x: i * o.x,
            y: n * o.y
          }
        }(t, r);
        else {
          const r = Q(e);
          n = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
          }
        }
        return S(n)
      }

      function re(e, t) {
        const r = U(e);
        return !(r === t || !F(r) || W(r)) && ("fixed" === N(r).position || re(r, t))
      }

      function ne(e, t, r) {
        const n = _(t),
          i = R(t),
          o = "fixed" === r,
          s = J(e, !0, o, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const c = l(0);
        if (n || !n && !o)
          if (("body" !== O(t) || M(i)) && (a = $(t)), n) {
            const e = J(t, !0, o, t);
            c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
          } else i && (c.x = K(i));
        const u = !i || n || o ? l(0) : ee(i, a);
        return {
          x: s.left + a.scrollLeft - c.x - u.x,
          y: s.top + a.scrollTop - c.y - u.y,
          width: s.width,
          height: s.height
        }
      }

      function ie(e) {
        return "static" === N(e).position
      }

      function oe(e, t) {
        if (!_(e) || "fixed" === N(e).position) return null;
        if (t) return t(e);
        let r = e.offsetParent;
        return R(e) === r && (r = r.ownerDocument.body), r
      }

      function se(e, t) {
        const r = T(e);
        if (D(e)) return r;
        if (!_(e)) {
          let t = U(e);
          for (; t && !W(t);) {
            if (F(t) && !ie(t)) return t;
            t = U(t)
          }
          return r
        }
        let n = oe(e, t);
        for (; n && j(n) && ie(n);) n = oe(n, t);
        return n && W(n) && ie(n) && !I(n) ? r : n || function(e) {
          let t = U(e);
          for (; _(t) && !W(t);) {
            if (I(t)) return t;
            if (D(t)) return null;
            t = U(t)
          }
          return null
        }(e) || r
      }
      const ae = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: r,
            offsetParent: n,
            strategy: i
          } = e;
          const o = "fixed" === i,
            s = R(n),
            a = !!t && D(t.floating);
          if (n === s || a && o) return r;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = l(1);
          const h = l(0),
            f = _(n);
          if ((f || !f && !o) && (("body" !== O(n) || M(s)) && (c = $(n)), _(n))) {
            const e = J(n);
            u = Z(n), h.x = e.x + n.clientLeft, h.y = e.y + n.clientTop
          }
          const d = !s || f || o ? l(0) : ee(s, c, !0);
          return {
            width: r.width * u.x,
            height: r.height * u.y,
            x: r.x * u.x - c.scrollLeft * u.x + h.x + d.x,
            y: r.y * u.y - c.scrollTop * u.y + h.y + d.y
          }
        },
        getDocumentElement: R,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: r,
            rootBoundary: n,
            strategy: s
          } = e;
          const a = [..."clippingAncestors" === r ? D(t) ? [] : function(e, t) {
              const r = t.get(e);
              if (r) return r;
              let n = q(e, [], !1).filter((e => F(e) && "body" !== O(e))),
                i = null;
              const o = "fixed" === N(e).position;
              let s = o ? U(e) : e;
              for (; F(s) && !W(s);) {
                const t = N(s),
                  r = I(s);
                r || "fixed" !== t.position || (i = null), (o ? !r && !i : !r && "static" === t.position && i && ["absolute", "fixed"].includes(i.position) || M(s) && !r && re(e, s)) ? n = n.filter((e => e !== s)) : i = t, s = U(s)
              }
              return t.set(e, n), n
            }(t, this._c) : [].concat(r), n],
            l = a[0],
            c = a.reduce(((e, r) => {
              const n = te(t, r, s);
              return e.top = o(n.top, e.top), e.right = i(n.right, e.right), e.bottom = i(n.bottom, e.bottom), e.left = o(n.left, e.left), e
            }), te(t, l, s));
          return {
            width: c.right - c.left,
            height: c.bottom - c.top,
            x: c.left,
            y: c.top
          }
        },
        getOffsetParent: se,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || se,
            r = this.getDimensions,
            n = await r(e.floating);
          return {
            reference: ne(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: n.width,
              height: n.height
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: r
          } = V(e);
          return {
            width: t,
            height: r
          }
        },
        getScale: Z,
        isElement: F,
        isRTL: function(e) {
          return "rtl" === N(e).direction
        }
      };

      function le(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }

      function ce(e, t, r, n) {
        void 0 === n && (n = {});
        const {
          ancestorScroll: s = !0,
          ancestorResize: l = !0,
          elementResize: c = "function" == typeof ResizeObserver,
          layoutShift: u = "function" == typeof IntersectionObserver,
          animationFrame: h = !1
        } = n, f = X(e), d = s || l ? [...f ? q(f) : [], ...q(t)] : [];
        d.forEach((e => {
          s && e.addEventListener("scroll", r, {
            passive: !0
          }), l && e.addEventListener("resize", r)
        }));
        const p = f && u ? function(e, t) {
          let r, n = null;
          const s = R(e);

          function l() {
            var e;
            clearTimeout(r), null == (e = n) || e.disconnect(), n = null
          }
          return function c(u, h) {
            void 0 === u && (u = !1), void 0 === h && (h = 1), l();
            const f = e.getBoundingClientRect(),
              {
                left: d,
                top: p,
                width: m,
                height: g
              } = f;
            if (u || t(), !m || !g) return;
            const v = {
              rootMargin: -a(p) + "px " + -a(s.clientWidth - (d + m)) + "px " + -a(s.clientHeight - (p + g)) + "px " + -a(d) + "px",
              threshold: o(0, i(1, h)) || 1
            };
            let y = !0;

            function w(t) {
              const n = t[0].intersectionRatio;
              if (n !== h) {
                if (!y) return c();
                n ? c(!1, n) : r = setTimeout((() => {
                  c(!1, 1e-7)
                }), 1e3)
              }
              1 !== n || le(f, e.getBoundingClientRect()) || c(), y = !1
            }
            try {
              n = new IntersectionObserver(w, {
                ...v,
                root: s.ownerDocument
              })
            } catch (e) {
              n = new IntersectionObserver(w, v)
            }
            n.observe(e)
          }(!0), l
        }(f, r) : null;
        let m, g = -1,
          v = null;
        c && (v = new ResizeObserver((e => {
          let [n] = e;
          n && n.target === f && v && (v.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame((() => {
            var e;
            null == (e = v) || e.observe(t)
          }))), r()
        })), f && !h && v.observe(f), v.observe(t));
        let y = h ? J(e) : null;
        return h && function t() {
          const n = J(e);
          y && !le(y, n) && r(), y = n, m = requestAnimationFrame(t)
        }(), r(), () => {
          var e;
          d.forEach((e => {
            s && e.removeEventListener("scroll", r), l && e.removeEventListener("resize", r)
          })), null == p || p(), null == (e = v) || e.disconnect(), v = null, h && cancelAnimationFrame(m)
        }
      }
      const ue = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              var r, n;
              const {
                x: i,
                y: o,
                placement: s,
                middlewareData: a
              } = t, l = await async function(e, t) {
                const {
                  placement: r,
                  platform: n,
                  elements: i
                } = e, o = await (null == n.isRTL ? void 0 : n.isRTL(i.floating)), s = d(r), a = p(r), l = "y" === v(r), c = ["left", "top"].includes(s) ? -1 : 1, u = o && l ? -1 : 1, h = f(t, e);
                let {
                  mainAxis: m,
                  crossAxis: g,
                  alignmentAxis: y
                } = "number" == typeof h ? {
                  mainAxis: h,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: h.mainAxis || 0,
                  crossAxis: h.crossAxis || 0,
                  alignmentAxis: h.alignmentAxis
                };
                return a && "number" == typeof y && (g = "end" === a ? -1 * y : y), l ? {
                  x: g * u,
                  y: m * c
                } : {
                  x: m * c,
                  y: g * u
                }
              }(t, e);
              return s === (null == (r = a.offset) ? void 0 : r.placement) && null != (n = a.arrow) && n.alignmentOffset ? {} : {
                x: i + l.x,
                y: o + l.y,
                data: {
                  ...l,
                  placement: s
                }
              }
            }
          }
        },
        he = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: r,
                y: n,
                placement: i
              } = t, {
                mainAxis: o = !0,
                crossAxis: s = !1,
                limiter: a = {
                  fn: e => {
                    let {
                      x: t,
                      y: r
                    } = e;
                    return {
                      x: t,
                      y: r
                    }
                  }
                },
                ...l
              } = f(e, t), c = {
                x: r,
                y: n
              }, u = await C(t, l), p = v(d(i)), g = m(p);
              let y = c[g],
                w = c[p];
              if (o) {
                const e = "y" === g ? "bottom" : "right";
                y = h(y + u["y" === g ? "top" : "left"], y, y - u[e])
              }
              if (s) {
                const e = "y" === p ? "bottom" : "right";
                w = h(w + u["y" === p ? "top" : "left"], w, w - u[e])
              }
              const b = a.fn({
                ...t,
                [g]: y,
                [p]: w
              });
              return {
                ...b,
                data: {
                  x: b.x - r,
                  y: b.y - n,
                  enabled: {
                    [g]: o,
                    [p]: s
                  }
                }
              }
            }
          }
        },
        fe = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var r, n;
              const {
                placement: i,
                middlewareData: o,
                rects: s,
                initialPlacement: a,
                platform: l,
                elements: c
              } = t, {
                mainAxis: u = !0,
                crossAxis: h = !0,
                fallbackPlacements: m,
                fallbackStrategy: k = "bestFit",
                fallbackAxisSideDirection: S = "none",
                flipAlignment: x = !0,
                ...A
              } = f(e, t);
              if (null != (r = o.arrow) && r.alignmentOffset) return {};
              const E = d(i),
                L = v(a),
                O = d(a) === a,
                T = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                R = m || (O || !x ? [b(a)] : function(e) {
                  const t = b(e);
                  return [w(e), t, w(t)]
                }(a)),
                z = "none" !== S;
              !m && z && R.push(... function(e, t, r, n) {
                const i = p(e);
                let o = function(e, t, r) {
                  const n = ["left", "right"],
                    i = ["right", "left"],
                    o = ["top", "bottom"],
                    s = ["bottom", "top"];
                  switch (e) {
                    case "top":
                    case "bottom":
                      return r ? t ? i : n : t ? n : i;
                    case "left":
                    case "right":
                      return t ? o : s;
                    default:
                      return []
                  }
                }(d(e), "start" === r, n);
                return i && (o = o.map((e => e + "-" + i)), t && (o = o.concat(o.map(w)))), o
              }(a, x, S, T));
              const F = [a, ...R],
                _ = await C(t, A),
                P = [];
              let M = (null == (n = o.flip) ? void 0 : n.overflows) || [];
              if (u && P.push(_[E]), h) {
                const e = function(e, t, r) {
                  void 0 === r && (r = !1);
                  const n = p(e),
                    i = y(e),
                    o = g(i);
                  let s = "x" === i ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                  return t.reference[o] > t.floating[o] && (s = b(s)), [s, b(s)]
                }(i, s, T);
                P.push(_[e[0]], _[e[1]])
              }
              if (M = [...M, {
                  placement: i,
                  overflows: P
                }], !P.every((e => e <= 0))) {
                var j, D;
                const e = ((null == (j = o.flip) ? void 0 : j.index) || 0) + 1,
                  t = F[e];
                if (t) return {
                  data: {
                    index: e,
                    overflows: M
                  },
                  reset: {
                    placement: t
                  }
                };
                let r = null == (D = M.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : D.placement;
                if (!r) switch (k) {
                  case "bestFit": {
                    var I;
                    const e = null == (I = M.filter((e => {
                      if (z) {
                        const t = v(e.placement);
                        return t === L || "y" === t
                      }
                      return !0
                    })).map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : I[0];
                    e && (r = e);
                    break
                  }
                  case "initialPlacement":
                    r = a
                }
                if (i !== r) return {
                  reset: {
                    placement: r
                  }
                }
              }
              return {}
            }
          }
        },
        de = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              var r, n;
              const {
                placement: s,
                rects: a,
                platform: l,
                elements: c
              } = t, {
                apply: u = () => {},
                ...h
              } = f(e, t), m = await C(t, h), g = d(s), y = p(s), w = "y" === v(s), {
                width: b,
                height: k
              } = a.floating;
              let S, x;
              "top" === g || "bottom" === g ? (S = g, x = y === (await (null == l.isRTL ? void 0 : l.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (x = g, S = "end" === y ? "top" : "bottom");
              const A = k - m.top - m.bottom,
                E = b - m.left - m.right,
                L = i(k - m[S], A),
                O = i(b - m[x], E),
                T = !t.middlewareData.shift;
              let R = L,
                z = O;
              if (null != (r = t.middlewareData.shift) && r.enabled.x && (z = E), null != (n = t.middlewareData.shift) && n.enabled.y && (R = A), T && !y) {
                const e = o(m.left, 0),
                  t = o(m.right, 0),
                  r = o(m.top, 0),
                  n = o(m.bottom, 0);
                w ? z = b - 2 * (0 !== e || 0 !== t ? e + t : o(m.left, m.right)) : R = k - 2 * (0 !== r || 0 !== n ? r + n : o(m.top, m.bottom))
              }
              await u({
                ...t,
                availableWidth: z,
                availableHeight: R
              });
              const F = await l.getDimensions(c.floating);
              return b !== F.width || k !== F.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        pe = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: r
              } = t, {
                strategy: n = "referenceHidden",
                ...i
              } = f(e, t);
              switch (n) {
                case "referenceHidden": {
                  const e = A(await C(t, {
                    ...i,
                    elementContext: "reference"
                  }), r.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: E(e)
                    }
                  }
                }
                case "escaped": {
                  const e = A(await C(t, {
                    ...i,
                    altBoundary: !0
                  }), r.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: E(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        me = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: r,
              y: n,
              placement: o,
              rects: s,
              platform: a,
              elements: l,
              middlewareData: c
            } = t, {
              element: u,
              padding: d = 0
            } = f(e, t) || {};
            if (null == u) return {};
            const m = k(d),
              v = {
                x: r,
                y: n
              },
              w = y(o),
              b = g(w),
              S = await a.getDimensions(u),
              x = "y" === w,
              C = x ? "top" : "left",
              A = x ? "bottom" : "right",
              E = x ? "clientHeight" : "clientWidth",
              L = s.reference[b] + s.reference[w] - v[w] - s.floating[b],
              O = v[w] - s.reference[w],
              T = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(u));
            let R = T ? T[E] : 0;
            R && await (null == a.isElement ? void 0 : a.isElement(T)) || (R = l.floating[E] || s.floating[b]);
            const z = L / 2 - O / 2,
              F = R / 2 - S[b] / 2 - 1,
              _ = i(m[C], F),
              P = i(m[A], F),
              M = _,
              j = R - S[b] - P,
              D = R / 2 - S[b] / 2 + z,
              I = h(M, D, j),
              B = !c.arrow && null != p(o) && D !== I && s.reference[b] / 2 - (D < M ? _ : P) - S[b] / 2 < 0,
              W = B ? D < M ? D - M : D - j : 0;
            return {
              [w]: v[w] + W,
              data: {
                [w]: I,
                centerOffset: D - I - W,
                ...B && {
                  alignmentOffset: W
                }
              },
              reset: B
            }
          }
        }),
        ge = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: r,
                y: n,
                placement: i,
                rects: o,
                middlewareData: s
              } = t, {
                offset: a = 0,
                mainAxis: l = !0,
                crossAxis: c = !0
              } = f(e, t), u = {
                x: r,
                y: n
              }, h = v(i), p = m(h);
              let g = u[p],
                y = u[h];
              const w = f(a, t),
                b = "number" == typeof w ? {
                  mainAxis: w,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...w
                };
              if (l) {
                const e = "y" === p ? "height" : "width",
                  t = o.reference[p] - o.floating[e] + b.mainAxis,
                  r = o.reference[p] + o.reference[e] - b.mainAxis;
                g < t ? g = t : g > r && (g = r)
              }
              if (c) {
                var k, S;
                const e = "y" === p ? "width" : "height",
                  t = ["top", "left"].includes(d(i)),
                  r = o.reference[h] - o.floating[e] + (t && (null == (k = s.offset) ? void 0 : k[h]) || 0) + (t ? 0 : b.crossAxis),
                  n = o.reference[h] + o.reference[e] + (t ? 0 : (null == (S = s.offset) ? void 0 : S[h]) || 0) - (t ? b.crossAxis : 0);
                y < r ? y = r : y > n && (y = n)
              }
              return {
                [p]: g,
                [h]: y
              }
            }
          }
        },
        ve = (e, t, r) => {
          const n = new Map,
            i = {
              platform: ae,
              ...r
            },
            o = {
              ...i.platform,
              _c: n
            };
          return (async (e, t, r) => {
            const {
              placement: n = "bottom",
              strategy: i = "absolute",
              middleware: o = [],
              platform: s
            } = r, a = o.filter(Boolean), l = await (null == s.isRTL ? void 0 : s.isRTL(t));
            let c = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: i
              }),
              {
                x: u,
                y: h
              } = x(c, n, l),
              f = n,
              d = {},
              p = 0;
            for (let r = 0; r < a.length; r++) {
              const {
                name: o,
                fn: m
              } = a[r], {
                x: g,
                y: v,
                data: y,
                reset: w
              } = await m({
                x: u,
                y: h,
                initialPlacement: n,
                placement: f,
                strategy: i,
                middlewareData: d,
                rects: c,
                platform: s,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              u = null != g ? g : u, h = null != v ? v : h, d = {
                ...d,
                [o]: {
                  ...d[o],
                  ...y
                }
              }, w && p <= 50 && (p++, "object" == typeof w && (w.placement && (f = w.placement), w.rects && (c = !0 === w.rects ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: i
              }) : w.rects), ({
                x: u,
                y: h
              } = x(c, f, l))), r = -1)
            }
            return {
              x: u,
              y: h,
              placement: f,
              strategy: i,
              middlewareData: d
            }
          })(e, t, {
            ...i,
            platform: o
          })
        }
    },
    68295: (e, t, r) => {
      r.d(t, {
        C: () => s,
        f: () => a
      });
      var n = r(91299);

      function i(e) {
        return e
      }

      function o(e, t) {
        void 0 === t && (t = i);
        var r = [],
          n = !1;
        return {
          read: function() {
            if (n) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return r.length ? r[r.length - 1] : e
          },
          useMedium: function(e) {
            var i = t(e, n);
            return r.push(i),
              function() {
                r = r.filter((function(e) {
                  return e !== i
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (n = !0; r.length;) {
              var t = r;
              r = [], t.forEach(e)
            }
            r = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return r
              }
            }
          },
          assignMedium: function(e) {
            n = !0;
            var t = [];
            if (r.length) {
              var i = r;
              r = [], i.forEach(e), t = r
            }
            var o = function() {
                var r = t;
                t = [], r.forEach(e)
              },
              s = function() {
                return Promise.resolve().then(o)
              };
            s(), r = {
              push: function(e) {
                t.push(e), s()
              },
              filter: function(e) {
                return t = t.filter(e), r
              }
            }
          }
        }
      }

      function s(e, t) {
        return void 0 === t && (t = i), o(e, t)
      }

      function a(e) {
        void 0 === e && (e = {});
        var t = o(null);
        return t.options = (0, n.__assign)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    75754: (e, t, r) => {
      e.exports = r(82886)
    },
    82886: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        a = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        u = r ? Symbol.for("react.async_mode") : 60111,
        h = r ? Symbol.for("react.concurrent_mode") : 60111,
        f = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        p = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        g = r ? Symbol.for("react.lazy") : 60116,
        v = r ? Symbol.for("react.block") : 60121,
        y = r ? Symbol.for("react.fundamental") : 60117,
        w = r ? Symbol.for("react.responder") : 60118,
        b = r ? Symbol.for("react.scope") : 60119;

      function k(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (e = e.type) {
                case u:
                case h:
                case o:
                case a:
                case s:
                case d:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case f:
                    case g:
                    case m:
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
        return k(e) === h
      }
      t.AsyncMode = u, t.ConcurrentMode = h, t.ContextConsumer = c, t.ContextProvider = l, t.Element = n, t.ForwardRef = f, t.Fragment = o, t.Lazy = g, t.Memo = m, t.Portal = i, t.Profiler = a, t.StrictMode = s, t.Suspense = d, t.isAsyncMode = function(e) {
        return S(e) || k(e) === u
      }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
        return k(e) === c
      }, t.isContextProvider = function(e) {
        return k(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return k(e) === f
      }, t.isFragment = function(e) {
        return k(e) === o
      }, t.isLazy = function(e) {
        return k(e) === g
      }, t.isMemo = function(e) {
        return k(e) === m
      }, t.isPortal = function(e) {
        return k(e) === i
      }, t.isProfiler = function(e) {
        return k(e) === a
      }, t.isStrictMode = function(e) {
        return k(e) === s
      }, t.isSuspense = function(e) {
        return k(e) === d
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === o || e === h || e === a || e === s || e === d || e === p || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === f || e.$$typeof === y || e.$$typeof === w || e.$$typeof === b || e.$$typeof === v)
      }, t.typeOf = k
    },
    86755: e => {
      var t = {}.hasOwnProperty,
        r = /[ -,\.\/:-@\[-\^`\{-~]/,
        n = /[ -,\.\/:-@\[\]\^`\{-~]/,
        i = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        o = function e(o, s) {
          "single" != (s = function(e, r) {
            if (!e) return r;
            var n = {};
            for (var i in r) n[i] = t.call(e, i) ? e[i] : r[i];
            return n
          }(s, e.options)).quotes && "double" != s.quotes && (s.quotes = "single");
          for (var a = "double" == s.quotes ? '"' : "'", l = s.isIdentifier, c = o.charAt(0), u = "", h = 0, f = o.length; h < f;) {
            var d = o.charAt(h++),
              p = d.charCodeAt(),
              m = void 0;
            if (p < 32 || p > 126) {
              if (p >= 55296 && p <= 56319 && h < f) {
                var g = o.charCodeAt(h++);
                56320 == (64512 & g) ? p = ((1023 & p) << 10) + (1023 & g) + 65536 : h--
              }
              m = "\\" + p.toString(16).toUpperCase() + " "
            } else m = s.escapeEverything ? r.test(d) ? "\\" + d : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(d) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == d || !l && ('"' == d && a == d || "'" == d && a == d) || l && n.test(d) ? "\\" + d : d;
            u += m
          }
          return l && (/^-[-\d]/.test(u) ? u = "\\-" + u.slice(1) : /\d/.test(c) && (u = "\\3" + c + " " + u.slice(1))), u = u.replace(i, (function(e, t, r) {
            return t && t.length % 2 ? e : (t || "") + r
          })), !l && s.wrap ? a + u + a : u
        };
      o.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, o.version = "3.0.0", e.exports = o
    },
    89720: (e, t, r) => {
      r.d(t, {
        S: () => a
      });
      var n = r(62229);

      function i(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var o = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
        s = new WeakMap;

      function a(e, t) {
        var r, a, l, c = (r = t || null, a = function(t) {
          return e.forEach((function(e) {
            return i(e, t)
          }))
        }, (l = (0, n.useState)((function() {
          return {
            value: r,
            callback: a,
            facade: {
              get current() {
                return l.value
              },
              set current(e) {
                var t = l.value;
                t !== e && (l.value = e, l.callback(e, t))
              }
            }
          }
        }))[0]).callback = a, l.facade);
        return o((function() {
          var t = s.get(c);
          if (t) {
            var r = new Set(t),
              n = new Set(e),
              o = c.current;
            r.forEach((function(e) {
              n.has(e) || i(e, null)
            })), n.forEach((function(e) {
              r.has(e) || i(e, o)
            }))
          }
          s.set(c, e)
        }), [e]), c
      }
    },
    97249: (e, t, r) => {
      function n(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function i(e, t) {
        var r = e;
        for (var n of t) {
          if (!(n in r)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
          r = r[n]
        }
        return r
      }

      function o(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          n = {};
        for (var i in e) {
          var s = e[i],
            a = [...r, i];
          "string" == typeof s || "number" == typeof s || null == s ? n[i] = t(s, a) : "object" != typeof s || Array.isArray(s) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(s) ? "Array" : typeof s, '"')) : n[i] = o(s, t, a)
        }
        return n
      }
      r.d(t, {
        Bx: () => o,
        Jt: () => i,
        Tm: () => n
      })
    }
  }
]);