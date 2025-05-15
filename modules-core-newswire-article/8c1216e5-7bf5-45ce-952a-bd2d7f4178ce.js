! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8c1216e5-7bf5-45ce-952a-bd2d7f4178ce", e._sentryDebugIdIdentifier = "sentry-dbid-8c1216e5-7bf5-45ce-952a-bd2d7f4178ce")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [7382], {
    9862: (e, t, n) => {
      e.exports = n(52522)
    },
    12176: (e, t, n) => {
      n.d(t, {
        NP: () => g,
        Ym: () => h,
        zQ: () => u,
        DP: () => c
      });
      var r = n(25854),
        i = (n(40481), n(30109)),
        o = n(23111),
        s = n(62229);
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
            contrastMode: n,
            defaultContrastMode: r,
            platformScale: i,
            defaultPlatformScale: o,
            platformScaleRatios: s,
            platformScaleBreakpoints: a,
            locale: c
          } = l();
          return {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: n,
            defaultContrastMode: r,
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
      var f = n(24321);
      const d = (e, t) => {
        const n = "more" === t ? o.xW.lightHc : o.xW.light,
          r = "more" === t ? o.xW.darkHc : o.xW.dark;
        return "dark" === e ? r : n
      };
      var p = n(38763);
      const m = () => p.X3 ? null : document.body,
        g = (0, s.forwardRef)((({
          children: e,
          className: t,
          container: n = m(),
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
            A = (0, s.useRef)(n),
            {
              ratio: E,
              scale: L
            } = function(e) {
              const t = (0, s.useMemo)((() => ({
                  ...o.US,
                  ...e.platformScaleRatios
                })), [e.platformScaleRatios]),
                n = (0, s.useMemo)((() => ({
                  ...o.Cb,
                  ...e.platformScaleBreakpoints
                })), [e.platformScaleBreakpoints]),
                [r, i] = (0, s.useState)(e.platformScale || e.defaultPlatformScale),
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
                  for (const e in n) {
                    const t = window.matchMedia(n[e]),
                      r = t => {
                        t.matches && i(e)
                      };
                    t.addEventListener("change", r), t.matches && i(e), a.current.push({
                      handler: r,
                      matchMedia: t
                    })
                  }
                }
              })(), l)), [n, e.platformScale]), {
                scale: r,
                ratio: t[r]
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
              contrastMode: n,
              defaultContrastMode: r = "normal"
            }) {
              const i = (0, f.Ub)("(prefers-color-scheme: light)"),
                a = (0, f.Ub)("(prefers-color-scheme: dark)"),
                l = (0, f.Ub)("(prefers-contrast: more)"),
                c = "system" !== e && e || i && "light" || a && "dark" || t,
                u = n || l && "more" || r,
                h = (0, s.useMemo)((() => d(c, u)), [c, u]),
                p = (0, s.useMemo)((() => ((e, t) => {
                  const n = d(e, t);
                  return [o.xW.light, o.xW.dark, o.xW.lightHc, o.xW.darkHc].filter((e => e !== n))
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
          return ((e, t, n, r, i) => {
            const a = (0, f.ZC)(i),
              l = (0, f.ZC)(e.current);
            (0, s.useEffect)((() => {
              e.current?.classList.contains(o.X6) || e.current?.classList.add(o.X6), e.current?.classList.add(n), e.current?.classList.remove(...r), a && i && e.current?.classList.contains(a) ? e.current?.classList.replace(a, i) : a && !i && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : i && e.current?.classList.add(i)
            }), [n, i]), (0, s.useEffect)((() => {
              e.current?.style.setProperty(o.HZ, t.toString())
            }), [t]), (0, s.useEffect)((() => {
              l?.classList.remove(o.X6), l?.classList.remove(n), l?.style.removeProperty(o.HZ), i && l?.classList.remove(i)
            }), [l])
          })(l ? x : A, E, O, T, t), (0, r.jsx)(a.Provider, {
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
            children: l ? (0, r.jsx)(i.DX, {
              ref: C,
              children: e
            }) : e
          })
        }))
    },
    19683: (e, t, n) => {
      n.d(t, {
        C: () => s,
        f: () => a
      });
      var r = n(23514);

      function i(e) {
        return e
      }

      function o(e, t) {
        void 0 === t && (t = i);
        var n = [],
          r = !1;
        return {
          read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
          },
          useMedium: function(e) {
            var i = t(e, r);
            return n.push(i),
              function() {
                n = n.filter((function(e) {
                  return e !== i
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (r = !0; n.length;) {
              var t = n;
              n = [], t.forEach(e)
            }
            n = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return n
              }
            }
          },
          assignMedium: function(e) {
            r = !0;
            var t = [];
            if (n.length) {
              var i = n;
              n = [], i.forEach(e), t = n
            }
            var o = function() {
                var n = t;
                t = [], n.forEach(e)
              },
              s = function() {
                return Promise.resolve().then(o)
              };
            s(), n = {
              push: function(e) {
                t.push(e), s()
              },
              filter: function(e) {
                return t = t.filter(e), n
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
        return t.options = (0, r.__assign)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    23111: (e, t, n) => {
      n.d(t, {
        Cb: () => r,
        US: () => i,
        xW: () => o,
        HZ: () => s,
        X6: () => a
      });
      var r = {
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
    23614: (e, t, n) => {
      n.d(t, {
        S: () => a
      });
      var r = n(62229);

      function i(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var o = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        s = new WeakMap;

      function a(e, t) {
        var n, a, l, c = (n = t || null, a = function(t) {
          return e.forEach((function(e) {
            return i(e, t)
          }))
        }, (l = (0, r.useState)((function() {
          return {
            value: n,
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
            var n = new Set(t),
              r = new Set(e),
              o = c.current;
            n.forEach((function(e) {
              r.has(e) || i(e, null)
            })), r.forEach((function(e) {
              n.has(e) || i(e, o)
            }))
          }
          s.set(c, e)
        }), [e]), c
      }
    },
    24321: (e, t, n) => {
      n.d(t, {
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
      var r = n(67915),
        i = n(62229);

      function o(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const o = e => r.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [s, a] = (0, i.useState)((() => n ? o(e) : t));

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
          n = t.current.value;
        return e !== n && (t.current = {
          value: e,
          prev: n
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
        enabled: n = !0
      }) => {
        const r = (0, i.useRef)(),
          [o, s] = (0, i.useState)(!1),
          a = (0, i.useCallback)((() => {
            s(!0)
          }), []),
          l = (0, i.useCallback)((() => {
            let t = 0;
            return (...n) => {
              const i = Date.now();
              i - t >= 500 && (t = i, (() => {
                s(!1), window.clearTimeout(r.current), r.current = window.setTimeout(a, e)
              })(...n))
            }
          })(), []),
          c = (0, i.useCallback)((() => {
            window.clearTimeout(r.current), r.current = window.setTimeout(a, t)
          }), []),
          u = (0, i.useCallback)((() => {
            document.hidden || l()
          }), []);
        return (0, i.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", l), window.removeEventListener("mousedown", l), window.removeEventListener("resize", l), window.removeEventListener("keydown", l), window.removeEventListener("touchstart", l), window.removeEventListener("wheel", l), document.removeEventListener("mouseleave", c), document.removeEventListener("visibilitychange", u), window.clearTimeout(r.current), s(!1)
          };
          return n ? (window.addEventListener("mousemove", l), window.addEventListener("mousedown", l), window.addEventListener("resize", l), window.addEventListener("keydown", l), window.addEventListener("touchstart", l), window.addEventListener("wheel", l), document.addEventListener("mouseleave", c), document.addEventListener("visibilitychange", u), l()) : e(), () => e()
        }), [n]), {
          isIdle: o
        }
      };

      function h({
        prop: e,
        defaultProp: t,
        onChange: n = () => {}
      }) {
        const [r, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = (0, i.useState)(e),
            [r] = n,
            o = (0, i.useRef)(r),
            s = c(t);
          return (0, i.useEffect)((() => {
            o.current !== r && (s(r), o.current = r)
          }), [r, o, s]), n
        }({
          defaultProp: t,
          onChange: n
        }), s = void 0 !== e, a = s ? e : r, l = c(n), u = (0, i.useCallback)((t => {
          if (s) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else o(t)
        }), [s, e, o, l]);
        return [a, u]
      }

      function f(e, t, n, r) {
        const o = (0, i.useRef)(t);
        (0, i.useEffect)((() => {
          o.current = t
        }), [t]), (0, i.useEffect)((() => {
          const t = n?.current ?? window;
          if (!t || !t.addEventListener) return;
          const i = e => {
            o.current(e)
          };
          return t.addEventListener(e, i, r), () => {
            t.removeEventListener(e, i, r)
          }
        }), [e, n?.current, r])
      }
      const d = ({
          enabled: e,
          ref: t
        }) => {
          const [n, r] = (0, i.useState)(!1);
          return (0, i.useEffect)((() => {
            r(!1)
          }), [t.current]), f("mouseenter", (() => {
            r(!0)
          }), t), f("mouseleave", (() => {
            r(!1)
          }), t), {
            isHovered: !!e && n
          }
        },
        p = ({
          ref: e,
          onChange: t,
          onFocusIn: n,
          onFocusOut: r,
          enabled: o = !0
        }) => {
          const [s, a] = (0, i.useState)(!1);
          return f("focusin", (e => {
            a(!0), n?.(e), t?.(!0, e)
          }), e), f("focusout", (e => {
            a(!1), r?.(e), t?.(!1, e)
          }), e), {
            isFocused: !!o && s
          }
        },
        m = ({
          enabled: e = !0
        }) => {
          const [t, n] = (0, i.useState)(!1), [r, o] = (0, i.useState)(!1);
          return (0, i.useEffect)((() => {
            e || (n(!1), o(!1))
          }), [e]), {
            eventHandlers: {
              onLoad: () => {
                e && (o(!0), n(!1))
              },
              onAbort: () => {
                e && (o(!0), n(!1))
              },
              onError: () => {
                e && (o(!0), n(!1))
              }
            },
            error: t,
            loaded: r
          }
        };

      function g(e = !0) {
        const t = o("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      const v = ({
          enabled: e = !0,
          latency: t = 300,
          onDoubleClick: n = () => null,
          onSingleClick: r = () => null
        }) => {
          const o = (0, i.useRef)(0),
            s = (0, i.useRef)();
          return {
            handleClick: i => {
              e && (o.current += 1, s.current = setTimeout((() => {
                1 === o.current ? r(i) : 2 === o.current && n(i), o.current = 0
              }), t))
            }
          }
        },
        y = (e, t = []) => {
          const n = (0, i.useRef)(!1);
          (0, i.useEffect)((() => (n.current = !0, () => {
            n.current = !1
          })), []), (0, i.useEffect)((() => {
            n.current && e()
          }), [...t])
        }
    },
    40481: (e, t, n) => {
      var r, i, o = {},
        s = n(45013),
        a = n(79895),
        l = n.n(a),
        c = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: n,
              output: r
            } = this._buildTables(e);
            this.gotoFn = n, this.output = r, this.failure = t
          }
          _buildTables(e) {
            const t = {
                0: {}
              },
              n = {};
            let r = 0;
            for (const i of e) {
              let e = 0;
              for (const o of i) t[e] && o in t[e] ? e = t[e][o] : (r++, t[e][o] = r, t[r] = {}, e = r, n[r] = []);
              n[e].push(i)
            }
            const i = {},
              o = [];
            for (const e in t[0]) {
              const n = t[0][e];
              i[n] = 0, o.push(n)
            }
            for (; o.length > 0;) {
              const e = o.shift();
              if (void 0 !== e)
                for (const r in t[e]) {
                  const s = t[e][r];
                  o.push(s);
                  let a = i[e];
                  for (; a > 0 && !(r in t[a]);) a = i[a];
                  if (r in t[a]) {
                    const e = t[a][r];
                    i[s] = e, n[s] = [...n[s], ...n[e]]
                  } else i[s] = 0
                }
            }
            return {
              gotoFn: t,
              output: n,
              failure: i
            }
          }
          search(e) {
            let t = 0;
            const n = [];
            for (let r = 0; r < e.length; r++) {
              const i = e[r];
              for (; t > 0 && !(i in this.gotoFn[t]);) t = this.failure[t];
              if (i in this.gotoFn[t] && (t = this.gotoFn[t][i], this.output[t].length > 0)) {
                const e = this.output[t];
                n.push([r, e])
              }
            }
            return n
          }
          match(e) {
            let t = 0;
            for (let n = 0; n < e.length; n++) {
              const r = e[n];
              for (; t > 0 && !(r in this.gotoFn[t]);) t = this.failure[t];
              if (r in this.gotoFn[t] && (t = this.gotoFn[t][r], this.output[t].length > 0)) return !0
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
      }(r || (r = {})),
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

      function y(e, t, n) {
        const r = parseInt(t, 16) - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
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
          n = x(t, `${e}`, 0);
        if (n < e.length) throw new Error(`Unmatched selector: ${e.slice(n)}`);
        return t
      }

      function x(e, t, n) {
        let o = [];

        function s(e) {
          const r = t.slice(n + e).match(d);
          if (!r) throw new Error(`Expected name, found ${t.slice(n)}`);
          const [i] = r;
          return n += e + i.length, w(i)
        }

        function a(e) {
          for (n += e; n < t.length && k(t.charCodeAt(n));) n++
        }

        function l() {
          const e = n += 1;
          let r = 1;
          for (; r > 0 && n < t.length; n++) 40 !== t.charCodeAt(n) || c(n) ? 41 !== t.charCodeAt(n) || c(n) || r-- : r++;
          if (r) throw new Error("Parenthesis not matched");
          return w(t.slice(e, n - 1))
        }

        function c(e) {
          let n = 0;
          for (; 92 === t.charCodeAt(--e);) n++;
          return !(1 & ~n)
        }

        function u() {
          if (o.length > 0 && function(e) {
              switch (e.type) {
                case r.Adjacent:
                case r.Child:
                case r.Descendant:
                case r.Parent:
                case r.Sibling:
                case r.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(o[o.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function h(e) {
          o.length > 0 && o[o.length - 1].type === r.Descendant ? o[o.length - 1].type = e : (u(), o.push({
            type: e
          }))
        }

        function f(e, t) {
          o.push({
            type: r.Attribute,
            name: e,
            action: t,
            value: s(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function p() {
          if (o.length && o[o.length - 1].type === r.Descendant && o.pop(), 0 === o.length) throw new Error("Empty sub-selector");
          e.push(o)
        }
        if (a(0), t.length === n) return n;
        e: for (; n < t.length;) {
          const e = t.charCodeAt(n);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== o.length && o[0].type === r.Descendant || (u(), o.push({
                type: r.Descendant
              })), a(1);
              break;
            case 62:
              h(r.Child), a(1);
              break;
            case 60:
              h(r.Parent), a(1);
              break;
            case 126:
              h(r.Sibling), a(1);
              break;
            case 43:
              h(r.Adjacent), a(1);
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
              124 === t.charCodeAt(n) ? e = s(1) : t.startsWith("*|", n) ? (l = "*", e = s(2)) : (e = s(0), 124 === t.charCodeAt(n) && 61 !== t.charCodeAt(n + 1) && (l = e, e = s(1))), a(0);
              let u = i.Exists;
              const h = m.get(t.charCodeAt(n));
              if (h) {
                if (u = h, 61 !== t.charCodeAt(n + 1)) throw new Error("Expected `=`");
                a(2)
              } else 61 === t.charCodeAt(n) && (u = i.Equals, a(1));
              let f = "",
                d = null;
              if ("exists" !== u) {
                if (b(t.charCodeAt(n))) {
                  const e = t.charCodeAt(n);
                  let r = n + 1;
                  for (; r < t.length && (t.charCodeAt(r) !== e || c(r));) r += 1;
                  if (t.charCodeAt(r) !== e) throw new Error("Attribute value didn't end");
                  f = w(t.slice(n + 1, r)), n = r + 1
                } else {
                  const e = n;
                  for (; n < t.length && (!k(t.charCodeAt(n)) && 93 !== t.charCodeAt(n) || c(n));) n += 1;
                  f = w(t.slice(e, n))
                }
                a(0);
                const e = 32 | t.charCodeAt(n);
                115 === e ? (d = !1, a(1)) : 105 === e && (d = !0, a(1))
              }
              if (93 !== t.charCodeAt(n)) throw new Error("Attribute selector didn't terminate");
              n += 1;
              const p = {
                type: r.Attribute,
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
              if (58 === t.charCodeAt(n + 1)) {
                o.push({
                  type: r.PseudoElement,
                  name: s(2).toLowerCase(),
                  data: 40 === t.charCodeAt(n) ? l() : null
                });
                continue
              }
              const e = s(1).toLowerCase();
              let i = null;
              if (40 === t.charCodeAt(n))
                if (g.has(e)) {
                  if (b(t.charCodeAt(n + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (i = [], n = x(i, t, n + 1), 41 !== t.charCodeAt(n)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  n += 1
                } else {
                  if (i = l(), v.has(e)) {
                    const e = i.charCodeAt(0);
                    e === i.charCodeAt(i.length - 1) && b(e) && (i = i.slice(1, -1))
                  }
                  i = w(i)
                } o.push({
                type: r.Pseudo,
                name: e,
                data: i
              });
              break
            }
            case 44:
              p(), o = [], a(1);
              break;
            default: {
              if (t.startsWith("/*", n)) {
                const e = t.indexOf("*/", n + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                n = e + 2, 0 === o.length && a(0);
                break
              }
              let i, l = null;
              if (42 === e) n += 1, i = "*";
              else if (124 === e) {
                if (i = "", 124 === t.charCodeAt(n + 1)) {
                  h(r.ColumnCombinator), a(2);
                  break
                }
              } else {
                if (!d.test(t.slice(n))) break e;
                i = s(0)
              }
              124 === t.charCodeAt(n) && 124 !== t.charCodeAt(n + 1) && (l = i, 42 === t.charCodeAt(n + 1) ? (i = "*", n += 2) : i = s(1)), o.push("*" === i ? {
                type: r.Universal,
                namespace: l
              } : {
                type: r.Tag,
                name: i,
                namespace: l
              })
            }
          }
        }
        return p(), n
      }

      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? C(Object(n), !0).forEach((function(t) {
            E(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function E(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      const L = function e(t) {
        return n.withOptions = n => e(A(A({}, t), n)), n;

        function n(e, ...n) {
          const r = "string" == typeof e ? [e] : e.raw,
            {
              escapeSpecialCharacters: i = Array.isArray(e)
            } = t;
          let o = "";
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            i && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), o += t, e < n.length && (o += n[e])
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
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }, O.apply(this, arguments)
      };

      function T(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
        }
        return n
      }

      function R(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, i, o = n.call(e),
          s = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
        } catch (e) {
          i = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return s
      }
      var z, F = /(\u000D|\u000C|\u000D\u000A)/g,
        _ = /[\u0000\uD800-\uDFFF]/g,
        M = /(\/\*)[\s\S]*?(\*\/)/g,
        P = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var n = e.charCodeAt(t), r = [], i = t + 1; i < e.length; i += 1) {
            var o = e.charCodeAt(i);
            if (o === n) return [i, String.fromCharCode.apply(null, r)];
            if (92 === o) {
              var s = D(e, i);
              if (null === s) return null;
              var a = R(s, 2),
                l = a[0],
                c = a[1];
              r.push(c), i = l
            } else {
              if (10 === o) return null;
              r.push(o)
            }
          }
          return null
        },
        j = function(e, t) {
          if (e.length <= t) return !1;
          var n, r = e.charCodeAt(t);
          return 45 === r ? !(e.length <= t + 1) && (45 === (n = e.charCodeAt(t + 1)) || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 1) && 10 !== (n = e.charCodeAt(t + 1))
        },
        D = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var n = e.charCodeAt(t + 1);
          if (10 === n) return null;
          if (n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102) {
            for (var r = [n], i = Math.min(t + 7, e.length), o = t + 2; o < i; o += 1) {
              var s = e.charCodeAt(o);
              if (!(s >= 48 && s <= 57 || s >= 65 && s <= 70 || s >= 97 && s <= 102)) break;
              r.push(s)
            }
            if (o < e.length) {
              var a = e.charCodeAt(o);
              9 !== a && 32 !== a && 10 !== a || (o += 1)
            }
            return [o - 1, parseInt(String.fromCharCode.apply(null, r), 16)]
          }
          return [t + 1, n]
        },
        I = function(e, t) {
          var n = B(e, t);
          if (null === n) return null;
          var r = R(n, 3),
            i = r[0],
            o = r[1],
            s = r[2],
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
          var n = "integer",
            r = [],
            i = e.charCodeAt(t);
          for (43 !== i && 45 !== i || (t += 1, 45 === i && r.push(45)); t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) r.push(c), t += 1;
          if (t + 1 < e.length) {
            var o = e.charCodeAt(t),
              s = e.charCodeAt(t + 1);
            if (46 === o && s >= 48 && s <= 57)
              for (r.push(o, s), n = "number", t += 2; t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) r.push(c), t += 1
          }
          if (t + 1 < e.length) {
            o = e.charCodeAt(t), s = e.charCodeAt(t + 1);
            var a = e.charCodeAt(t + 2);
            if (69 === o || 101 === o) {
              var l = s >= 48 && s <= 57;
              if (l || (43 === s || 45 === s) && a >= 48 && a <= 57)
                for (n = "number", l ? (r.push(69, s), t += 2) : 45 === s ? (r.push(69, 45, a), t += 3) : (r.push(69, a), t += 3); t < e.length;) {
                  var c;
                  if (!((c = e.charCodeAt(t)) >= 48 && c <= 57)) break;
                  r.push(c), t += 1
                }
            }
          }
          var u = String.fromCharCode.apply(null, r),
            h = "number" === n ? parseFloat(u) : parseInt(u);
          return -0 === h && (h = 0), Number.isNaN(h) ? null : [t - 1, h, n]
        },
        W = function(e, t) {
          if (e.length <= t) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var i = D(e, t);
              if (null === i) break;
              var o = R(i, 2),
                s = o[0],
                a = o[1];
              n.push(a), t = s
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, n)]
        },
        N = function(e, t) {
          if (e.length <= t || !j(e, t)) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var i = D(e, t);
              if (null === i) break;
              var o = R(i, 2),
                s = o[0],
                a = o[1];
              n.push(a), t = s
            } return [t - 1, String.fromCharCode.apply(null, n)]
        },
        $ = function(e, t) {
          for (var n = e.charCodeAt(t); 9 === n || 32 === n || 10 === n;) n = e.charCodeAt(++t);
          for (var r = [], i = !1; t < e.length;) {
            if (41 === n) return [t, String.fromCharCode.apply(null, r)];
            if (34 === n || 39 === n || 40 === n) return null;
            if (9 === n || 32 === n || 10 === n) i || 0 === r.length || (i = !0);
            else if (92 === n) {
              var o = D(e, t);
              if (null === o || i) return null;
              var s = R(o, 2),
                a = s[0],
                l = s[1];
              r.push(l), t = a
            } else {
              if (i) return null;
              r.push(n)
            }
            n = e.charCodeAt(++t)
          }
          return null
        },
        U = function(e, t) {
          var n = N(e, t);
          if (null === n) return null;
          var r = R(n, 2),
            i = r[0],
            o = r[1];
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
          for (var n = t.children.length - 1; n >= 0; n--) {
            var r = t.children[n];
            if (!("context" in r)) {
              var i = e(r);
              if (null === i.operator && 1 === i.children.length) t.children[n] = i.children[0];
              else if (i.operator === t.operator && ("and" === i.operator || "or" === i.operator)) {
                for (var o = [n, 1], s = 0; s < i.children.length; s++) o.push(i.children[s]);
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
            void 0 === t && (t = 0), e = (e = e.replace(F, "\n").replace(_, "�")).replace(M, "");
            for (var n = []; t < e.length; t += 1) {
              var r = e.charCodeAt(t);
              if (9 === r || 32 === r || 10 === r) {
                for (var i = e.charCodeAt(++t); 9 === i || 32 === i || 10 === i;) i = e.charCodeAt(++t);
                t -= 1, n.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === r) {
                if (null === (A = P(e, t))) return null;
                var o = R(A, 2),
                  s = o[0],
                  a = o[1];
                n.push({
                  type: "<string-token>",
                  value: a
                }), t = s
              } else if (35 === r) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = j(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (A = W(e, t + 1))) {
                    var c = R(A, 2);
                    s = c[0], a = c[1], n.push({
                      type: "<hash-token>",
                      value: a.toLowerCase(),
                      flag: l
                    }), t = s;
                    continue
                  }
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (39 === r) {
                if (null === (A = P(e, t))) return null;
                var u = R(A, 2);
                s = u[0], a = u[1], n.push({
                  type: "<string-token>",
                  value: a
                }), t = s
              } else if (40 === r) n.push({
                type: "<(-token>"
              });
              else if (41 === r) n.push({
                type: "<)-token>"
              });
              else if (43 === r) {
                var h = I(e, t);
                if (null === h) n.push({
                  type: "<delim-token>",
                  value: r
                });
                else {
                  var f = R(h, 2);
                  s = f[0], "<dimension-token>" === (x = f[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: x[1],
                    unit: x[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === x[0] ? n.push({
                    type: x[0],
                    value: x[1],
                    flag: x[2]
                  }) : n.push({
                    type: x[0],
                    value: x[1],
                    flag: "number"
                  }), t = s
                }
              } else if (44 === r) n.push({
                type: "<comma-token>"
              });
              else if (45 === r) {
                if (null !== (y = I(e, t))) {
                  var d = R(y, 2);
                  s = d[0], "<dimension-token>" === (x = d[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: x[1],
                    unit: x[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === x[0] ? n.push({
                    type: x[0],
                    value: x[1],
                    flag: x[2]
                  }) : n.push({
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
                    n.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (A = U(e, t))) {
                  var g = R(A, 3),
                    v = (s = g[0], a = g[1], g[2]);
                  n.push({
                    type: v,
                    value: a
                  }), t = s;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (46 === r) {
                var y;
                if (null !== (y = I(e, t))) {
                  var w = R(y, 2);
                  s = w[0], "<dimension-token>" === (x = w[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: x[1],
                    unit: x[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === x[0] ? n.push({
                    type: x[0],
                    value: x[1],
                    flag: x[2]
                  }) : n.push({
                    type: x[0],
                    value: x[1],
                    flag: "number"
                  }), t = s;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (58 === r) n.push({
                type: "<colon-token>"
              });
              else if (59 === r) n.push({
                type: "<semicolon-token>"
              });
              else if (60 === r) {
                if (t + 3 < e.length) {
                  p = e.charCodeAt(t + 1), m = e.charCodeAt(t + 2);
                  var b = e.charCodeAt(t + 3);
                  if (33 === p && 45 === m && 45 === b) {
                    n.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (64 === r) {
                if (null !== (A = N(e, t + 1))) {
                  var k = R(A, 2);
                  s = k[0], a = k[1], n.push({
                    type: "<at-keyword-token>",
                    value: a.toLowerCase()
                  }), t = s;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (91 === r) n.push({
                type: "<[-token>"
              });
              else if (92 === r) {
                if (null === (A = D(e, t))) return null;
                var S = R(A, 2);
                s = S[0], a = S[1], e = e.slice(0, t) + a + e.slice(s + 1), t -= 1
              } else if (93 === r) n.push({
                type: "<]-token>"
              });
              else if (123 === r) n.push({
                type: "<{-token>"
              });
              else if (125 === r) n.push({
                type: "<}-token>"
              });
              else if (r >= 48 && r <= 57) {
                var x, C = R(A = I(e, t), 2);
                s = C[0], "<dimension-token>" === (x = C[1])[0] ? n.push({
                  type: "<dimension-token>",
                  value: x[1],
                  unit: x[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === x[0] ? n.push({
                  type: x[0],
                  value: x[1],
                  flag: x[2]
                }) : n.push({
                  type: x[0],
                  value: x[1],
                  flag: "number"
                }), t = s
              } else if (95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128) {
                var A;
                if (null === (A = U(e, t))) return null;
                var E = R(A, 3);
                s = E[0], a = E[1], v = E[2], n.push({
                  type: v,
                  value: a
                }), t = s
              } else n.push({
                type: "<delim-token>",
                value: r
              })
            }
            return n.push({
              type: "<EOF-token>"
            }), n
          }(e.trim());
          if (null === t) throw G("Failed tokenizing");
          var n = 0,
            r = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw G("Expected whitespace after media");
            n = 2;
            for (var i = 2; i < t.length - 1; i++) {
              var o = t[i];
              if ("<{-token>" === o.type) {
                r = i;
                break
              }
              if ("<semicolon-token>" === o.type) throw G("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(n, r), Z(t)
        },
        X = function(e) {
          for (var t = [], n = !1, r = 0; r < e.length; r++) "<whitespace-token>" === e[r].type ? (n = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(O(O({}, e[r]), {
            wsBefore: n,
            wsAfter: !1
          })), n = !1);
          return t
        },
        Z = function(e) {
          for (var t, n, r = [
              []
            ], i = 0; i < e.length; i++) {
            var o = e[i];
            "<comma-token>" === o.type ? r.push([]) : r[r.length - 1].push(o)
          }
          var s = r.map(X);
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
                  n = t && e[t],
                  r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && r >= e.length && (e = void 0), {
                      value: e && e[r++],
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
              u && !u.done && (n = c.return) && n.call(c)
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
            var n = null,
              r = void 0,
              i = t.value;
            "only" !== i && "not" !== i || (n = i);
            var o = null === n ? 0 : 1;
            if (e.length <= o) throw G("Expected extra token in media query");
            var s = e[o];
            if ("<ident-token>" === s.type) {
              var a = s.value;
              if ("all" === a) r = "all";
              else if ("print" === a || "screen" === a) r = a;
              else {
                if ("tty" !== a && "tv" !== a && "projection" !== a && "handheld" !== a && "braille" !== a && "embossed" !== a && "aural" !== a && "speech" !== a) throw G("Unknown ident '".concat(a, "' in media query"));
                n = "not" === n ? null : "not", r = "all"
              }
            } else {
              if ("not" !== n || "<(-token>" !== s.type) throw G("Invalid media query");
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
              mediaPrefix: n,
              mediaType: r,
              mediaCondition: null
            };
            if (!(o + 4 < e.length)) throw G("Expected media condition after media prefix");
            var c = e[o + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw G("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: n,
                mediaType: r,
                mediaCondition: Q(e.slice(o + 2), !1)
              }
            } catch (e) {
              throw G("Expected media condition after 'and'", e)
            }
          }
        },
        Q = function e(t, n, r) {
          if (void 0 === r && (r = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
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
            operator: r,
            children: [i]
          };
          var h = t[o + 1];
          if ("<ident-token>" !== h.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== r && r !== h.value) throw new Error("'".concat(h.value, "' and '").concat(r, "' must not be at same level\nInvalid media condition"));
          if ("or" === h.value && !n) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== h.value && "or" !== h.value) throw new Error("Invalid operator: '".concat(h.value, "'\nInvalid media condition"));
          var f = e(t.slice(o + 2), n, h.value);
          return {
            operator: h.value,
            children: [i].concat(f.children)
          }
        },
        J = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], n = 1; n < e.length; n++) {
            if (n < e.length - 2) {
              var r = e[n],
                i = e[n + 1],
                o = e[n + 2];
              if ("<number-token>" === r.type && r.value > 0 && "<delim-token>" === i.type && 47 === i.value && "<number-token>" === o.type && o.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: r.value,
                  denominator: o.value,
                  wsBefore: r.wsBefore,
                  wsAfter: o.wsAfter
                }), n += 2;
                continue
              }
            }
            t.push(e[n])
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
          var t, n, r, i;
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
            var a = 2 + (null !== (n = null === (t = o[s ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0),
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
                var f = e[a + 1 + (null !== (i = null === (r = o.rightOp) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0)];
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
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? te(Object(n), !0).forEach((function(t) {
            var r, i, o;
            r = e, i = t, o = n[t], (i = ee(i)) in r ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[i] = o
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function re(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }

      function ie(e, t) {
        for (var n in e) t(e[n], n)
      }

      function oe(e, t) {
        var n = {};
        for (var r in e) - 1 === t.indexOf(r) && (n[r] = e[r]);
        return n
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
          for (var n of e) {
            var r = t.findOrCreateCondition(n);
            t = r.children
          }
          return t
        }
        addRule(e, t, n) {
          var r = this.getConditionalRulesetByPath(n).findOrCreateCondition(t);
          if (!r) throw new Error("Failed to add conditional rule");
          r.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var n = this.getConditionalRulesetByPath(e), r = 0; r < t.length; r++) {
            var i, o = t[r],
              s = null !== (i = n.precedenceLookup.get(o)) && void 0 !== i ? i : new Set;
            for (var a of t.slice(r + 1)) s.add(a);
            n.precedenceLookup.set(o, s)
          }
        }
        isCompatible(e) {
          for (var [t, n] of this.precedenceLookup.entries())
            for (var r of n) {
              var i;
              if (null !== (i = e.precedenceLookup.get(r)) && void 0 !== i && i.has(t)) return !1
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
              rules: n,
              children: r
            }
            of e.ruleset.values()) {
            var i = this.ruleset.get(t);
            i ? (i.rules.push(...n), i.children.merge(r)) : this.ruleset.set(t, {
              query: t,
              rules: n,
              children: r
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
            n = function(n) {
              var i = e.ruleset.get(r);
              if (!i) throw new Error("Can't find condition for ".concat(r));
              var o = t.findIndex((e => n.has(e.query)));
              o > -1 ? t.splice(o, 0, i) : t.push(i)
            };
          for (var [r, i] of this.precedenceLookup.entries()) n(i);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: n,
              children: r
            }
            of this.getSortedRuleset()) {
            var i = {};
            for (var o of n) i[o.selector] = ne(ne({}, i[o.selector]), o.rule);
            Object.assign(i, ...r.renderToArray()), e.push({
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

      function ve(e, t, n, r) {
        var i = e.slice(0, t),
          o = e.slice(n);
        return "".concat(i).concat(r).concat(o)
      }
      var ye = [...ce, "@layer", "@media", "@supports", "@container", "selectors"];
      class we {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new se], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map((e => [e, e]))), this.localClassNamesSearch = new c(e), this.layers = new Map, this.composedClassLists = t.map((e => {
            var {
              identifier: t,
              classList: n
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(n, ")"), "g")
            }
          })).reverse()
        }
        processCssObj(e) {
          if ("fontFace" !== e.type)
            if ("property" !== e.type) {
              if ("keyframes" === e.type) return e.rule = Object.fromEntries(Object.entries(e.rule).map((e => {
                var [t, n] = e;
                return [t, this.transformVars(this.transformProperties(n))]
              }))), void this.keyframesRules.push(e);
              if (this.currConditionalRuleset = new se, "layer" === e.type) {
                var t = "@layer ".concat(e.name);
                this.addLayer([t])
              } else {
                var n = oe(e.rule, ye);
                this.addRule({
                  selector: e.selector,
                  rule: n
                }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
              }
              this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
            } else this.propertyRules.push(e);
          else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var n = this.transformVars(this.transformProperties(e.rule)),
            r = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var i = t[t.length - 1],
            o = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: r,
            rule: n
          }, i, o)
        }
        addRule(e) {
          var t = this.transformVars(this.transformProperties(e.rule)),
            n = this.transformSelector(e.selector);
          this.rules.push({
            selector: n,
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
          return ie(e, ((t, n) => {
            "number" != typeof t || 0 === t || ge[n] || (e[n] = "".concat(t, "px"))
          })), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, n = re(e, de);
          return t ? ne(ne({}, function(e) {
            var t, n = {};
            for (var r in e) n[(e[r], t = r, (0, s.Tm)(t))] = e[r];
            return n
          }(t)), n) : n
        }
        transformContent(e) {
          var {
            content: t
          } = e, n = re(e, pe);
          return void 0 === t ? n : ne({
            content: (Array.isArray(t) ? t : [t]).map((e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"')))
          }, n)
        }
        transformClassname(e) {
          return ".".concat(l()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            n = function(e) {
              t = t.replace(i, (() => (function() {
                (() => {
                  if (u.length < 1) throw new Error("No adapter configured");
                  return u[u.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e)))
            };
          for (var {
              identifier: r,
              regex: i
            }
            of this.composedClassLists) n(r);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var o = this.localClassNamesSearch.search(t), s = t.length, a = o.length - 1; a >= 0; a--) {
            var [l, [c]] = o[a], h = l - c.length + 1;
            s <= l || (s = h, "." !== t[h - 1] && (t = ve(t, h, l + 1, this.transformClassname(c))))
          }
          return t
        }
        transformSelectors(e, t, n) {
          ie(t.selectors, ((t, r) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var i = this.transformSelector(r.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var n, r = () => {
                var n = new RegExp(".".concat(l()(t, {
                  isIdentifier: !0
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(n, "&")
              };
              try {
                n = S(e)
              } catch (e) {
                throw new Error("Invalid selector: ".concat(r()))
              }
              n.forEach((e => {
                try {
                  for (var n = e.length - 1; n >= -1; n--) {
                    if (!e[n]) throw new Error;
                    var i = e[n];
                    if ("child" === i.type || "parent" === i.type || "sibling" === i.type || "adjacent" === i.type || "descendant" === i.type) throw new Error;
                    if ("attribute" === i.type && "class" === i.name && i.value === t) return
                  }
                } catch (e) {
                  throw new Error(L(z || (z = f(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), r(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              }))
            })(i, e.selector);
            var o = {
              selector: i,
              rule: oe(t, ye)
            };
            n ? this.addConditionalRule(o, n) : this.addRule(o);
            var s = {
              type: "selector",
              selector: i,
              rule: t
            };
            this.transformLayer(s, t["@layer"], n), this.transformSupports(s, t["@supports"], n), this.transformMedia(s, t["@media"], n), this.transformContainer(s, t["@container"], n)
          }))
        }
        transformMedia(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [i, o] of(null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@media ".concat(e)))), Object.entries(t))) {
              var s = "@media ".concat(i);
              fe(s);
              var a = [...r, s];
              this.addConditionalRule({
                selector: e.selector,
                rule: oe(o, ye)
              }, a), "local" === e.type && (this.transformSimplePseudos(e, o, a), this.transformSelectors(e, o, a)), this.transformLayer(e, o["@layer"], a), this.transformSupports(e, o["@supports"], a), this.transformContainer(e, o["@container"], a)
            }
        }
        transformContainer(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@container ".concat(e)))), ie(t, ((t, n) => {
            var i = "@container ".concat(n),
              o = [...r, i];
            this.addConditionalRule({
              selector: e.selector,
              rule: oe(t, ye)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformSupports(e, t["@supports"], o), this.transformMedia(e, t["@media"], o)
          })))
        }
        transformLayer(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@layer ".concat(e)))), ie(t, ((t, n) => {
            var i = [...r, "@layer ".concat(n)];
            this.addLayer(i), this.addConditionalRule({
              selector: e.selector,
              rule: oe(t, ye)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformMedia(e, t["@media"], i), this.transformSupports(e, t["@supports"], i), this.transformContainer(e, t["@container"], i)
          })))
        }
        transformSupports(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@supports ".concat(e)))), ie(t, ((t, n) => {
            var i = [...r, "@supports ".concat(n)];
            this.addConditionalRule({
              selector: e.selector,
              rule: oe(t, ye)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformMedia(e, t["@media"], i), this.transformContainer(e, t["@container"], i)
          })))
        }
        transformSimplePseudos(e, t, n) {
          for (var r of Object.keys(t))
            if (ue[r]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              n ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(r),
                rule: t[r]
              }, n) : this.addRule({
                conditions: n,
                selector: "".concat(e.selector).concat(r),
                rule: t[r]
              })
            }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(be({
            "@font-face": t
          }));
          for (var n of this.propertyRules) e.push(be({
            ["@property ".concat(n.name)]: n.rule
          }));
          for (var r of this.keyframesRules) e.push(be({
            ["@keyframes ".concat(r.name)]: r.rule
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
          n = [],
          r = function(r) {
            var i, o = e[r];
            o && Array.isArray(o) ? n.push(...o.map((e => be({
              [r]: e
            }, t)))) : o && "object" == typeof o ? 0 === Object.keys(o).length || n.push("".concat(t).concat(r, " {\n").concat(be(o, t + "  "), "\n").concat(t, "}")) : o === me ? n.push("".concat(t).concat(r, ";")) : n.push("".concat(t).concat(r.startsWith("--") ? r : (i = r, i.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(o, ";"))
          };
        for (var i of Object.keys(e)) r(i);
        return n.join("\n")
      }
      var ke = n(87144);
      const Se = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        xe = new Set,
        Ce = "object" == typeof ke && ke ? ke : {},
        Ae = (e, t, n, r) => {
          "function" == typeof Ce.emitWarning ? Ce.emitWarning(e, t, n, r) : console.error(`[${n}] ${t}: ${e}`)
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
          signal = (() => new Le)();
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
          const n = new ze(e, t);
          return ze.#e = !1, n
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
        #n;
        #r;
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
            backgroundFetch: (t, n, r, i) => e.#A(t, n, r, i),
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
          return this.#n
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
          return this.#r
        }
        get disposeAfter() {
          return this.#i
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: n,
            ttlResolution: r = 1,
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
          if (this.#t = t, this.#n = f, this.maxEntrySize = d || this.#n, this.sizeCalculation = p, this.sizeCalculation) {
            if (!this.#n && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== g && "function" != typeof g) throw new TypeError("memoMethod must be a function if defined");
          if (this.#s = g, void 0 !== m && "function" != typeof m) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#o = m, this.#S = !!m, this.#c = new Map, this.#u = new Array(t).fill(void 0), this.#h = new Array(t).fill(void 0), this.#f = new S(t), this.#d = new S(t), this.#p = 0, this.#m = 0, this.#g = ze.create(t), this.#a = 0, this.#l = 0, "function" == typeof l && (this.#r = l), "function" == typeof c ? (this.#i = c, this.#v = []) : (this.#i = void 0, this.#v = void 0), this.#k = !!this.#r, this.#x = !!this.#i, this.noDisposeOnSet = !!u, this.noUpdateTTL = !!h, this.noDeleteOnFetchRejection = !!v, this.allowStaleOnFetchRejection = !!w, this.allowStaleOnFetchAbort = !!b, this.ignoreFetchAbort = !!k, 0 !== this.maxEntrySize) {
            if (0 !== this.#n && !Oe(this.#n)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!Oe(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#R()
          }
          if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!s, this.ttlResolution = Oe(r) || 0 === r ? r : 1, this.ttlAutopurge = !!i, this.ttl = n || 0, this.ttl) {
            if (!Oe(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#z()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#n) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#n) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !xe.has(e))(e) && (xe.add(e), Ae("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, Fe))
          }
        }
        getRemainingTTL(e) {
          return this.#c.has(e) ? 1 / 0 : 0
        }
        #z() {
          var e = this;
          const t = new Re(this.#t),
            n = new Re(this.#t);
          this.#b = t, this.#w = n, this.#F = function(r, i) {
            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Se.now();
            if (n[r] = 0 !== i ? o : 0, t[r] = i, 0 !== i && e.ttlAutopurge) {
              const t = setTimeout((() => {
                e.#T(r) && e.#_(e.#u[r], "expire")
              }), i + 1);
              t.unref && t.unref()
            }
          }, this.#M = e => {
            n[e] = 0 !== t[e] ? Se.now() : 0
          }, this.#P = (e, o) => {
            if (t[o]) {
              const s = t[o],
                a = n[o];
              if (!s || !a) return;
              e.ttl = s, e.start = a, e.now = r || i();
              const l = e.now - a;
              e.remainingTTL = s - l
            }
          };
          let r = 0;
          const i = () => {
            const e = Se.now();
            if (this.ttlResolution > 0) {
              r = e;
              const t = setTimeout((() => r = 0), this.ttlResolution);
              t.unref && t.unref()
            }
            return e
          };
          this.getRemainingTTL = e => {
            const o = this.#c.get(e);
            if (void 0 === o) return 0;
            const s = t[o],
              a = n[o];
            return s && a ? s - ((r || i()) - a) : 1 / 0
          }, this.#T = e => {
            const o = n[e],
              s = t[e];
            return !!s && !!o && (r || i()) - o > s
          }
        }
        #M = () => {};
        #P = () => {};
        #F = () => {};
        #T = () => !1;
        #R() {
          const e = new Re(this.#t);
          this.#l = 0, this.#y = e, this.#j = t => {
            this.#l -= e[t], e[t] = 0
          }, this.#D = (e, t, n, r) => {
            if (this.#C(t)) return 0;
            if (!Oe(n)) {
              if (!r) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
              if ("function" != typeof r) throw new TypeError("sizeCalculation must be a function");
              if (n = r(t, e), !Oe(n)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
            }
            return n
          }, this.#I = (t, n, r) => {
            if (e[t] = n, this.#n) {
              const n = this.#n - e[t];
              for (; this.#l > n;) this.#B(!0)
            }
            this.#l += e[t], r && (r.entrySize = n, r.totalCalculatedSize = this.#l)
          }
        }
        #j = e => {};
        #I = (e, t, n) => {};
        #D = (e, t, n, r) => {
          if (n || r) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };
        #L() {
          var e = this;
          let {
            allowStale: t = this.allowStale
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function*() {
            if (e.#a)
              for (let n = e.#m; e.#W(n) && (!t && e.#T(n) || (yield n), n !== e.#p);) n = e.#d[n]
          }()
        }
        #O() {
          var e = this;
          let {
            allowStale: t = this.allowStale
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function*() {
            if (e.#a)
              for (let n = e.#p; e.#W(n) && (!t && e.#T(n) || (yield n), n !== e.#m);) n = e.#f[n]
          }()
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
        find(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          for (const n of this.#L()) {
            const r = this.#h[n],
              i = this.#C(r) ? r.__staleWhileFetching : r;
            if (void 0 !== i && e(i, this.#u[n], this)) return this.get(this.#u[n], t)
          }
        }
        forEach(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          for (const n of this.#L()) {
            const r = this.#h[n],
              i = this.#C(r) ? r.__staleWhileFetching : r;
            void 0 !== i && e.call(t, i, this.#u[n], this)
          }
        }
        rforEach(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          for (const n of this.#O()) {
            const r = this.#h[n],
              i = this.#C(r) ? r.__staleWhileFetching : r;
            void 0 !== i && e.call(t, i, this.#u[n], this)
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
          const n = this.#h[t],
            r = this.#C(n) ? n.__staleWhileFetching : n;
          if (void 0 === r) return;
          const i = {
            value: r
          };
          if (this.#b && this.#w) {
            const e = this.#b[t],
              n = this.#w[t];
            if (e && n) {
              const t = e - (Se.now() - n);
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
            const n = this.#u[t],
              r = this.#h[t],
              i = this.#C(r) ? r.__staleWhileFetching : r;
            if (void 0 === i || void 0 === n) continue;
            const o = {
              value: i
            };
            if (this.#b && this.#w) {
              o.ttl = this.#b[t];
              const e = Se.now() - this.#w[t];
              o.start = Math.floor(Date.now() - e)
            }
            this.#y && (o.size = this.#y[t]), e.unshift([n, o])
          }
          return e
        }
        load(e) {
          this.clear();
          for (const [t, n] of e) {
            if (n.start) {
              const e = Date.now() - n.start;
              n.start = Se.now() - e
            }
            this.set(t, n.value, n)
          }
        }
        set(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (void 0 === t) return this.delete(e), this;
          const {
            ttl: r = this.ttl,
            start: i,
            noDisposeOnSet: o = this.noDisposeOnSet,
            sizeCalculation: s = this.sizeCalculation,
            status: a
          } = n;
          let {
            noUpdateTTL: l = this.noUpdateTTL
          } = n;
          const c = this.#D(e, t, n.size || 0, s);
          if (this.maxEntrySize && c > this.maxEntrySize) return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.#_(e, "set"), this;
          let u = 0 === this.#a ? void 0 : this.#c.get(e);
          if (void 0 === u) u = 0 === this.#a ? this.#m : 0 !== this.#g.length ? this.#g.pop() : this.#a === this.#t ? this.#B(!1) : this.#a, this.#u[u] = e, this.#h[u] = t, this.#c.set(e, u), this.#f[this.#m] = u, this.#d[u] = this.#m, this.#m = u, this.#a++, this.#I(u, c, a), a && (a.set = "add"), l = !1;
          else {
            this.#E(u);
            const n = this.#h[u];
            if (t !== n) {
              if (this.#S && this.#C(n)) {
                n.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = n;
                void 0 === t || o || (this.#k && this.#r?.(t, e, "set"), this.#x && this.#v?.push([t, e, "set"]))
              } else o || (this.#k && this.#r?.(n, e, "set"), this.#x && this.#v?.push([n, e, "set"]));
              if (this.#j(u), this.#I(u, c, a), this.#h[u] = t, a) {
                a.set = "replace";
                const e = n && this.#C(n) ? n.__staleWhileFetching : n;
                void 0 !== e && (a.oldValue = e)
              }
            } else a && (a.set = "update")
          }
          if (0 === r || this.#b || this.#z(), this.#b && (l || this.#F(u, r, i), a && this.#P(a, u)), !o && this.#x && this.#v) {
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
            n = this.#u[t],
            r = this.#h[t];
          return this.#S && this.#C(r) ? r.__abortController.abort(new Error("evicted")) : (this.#k || this.#x) && (this.#k && this.#r?.(r, n, "evict"), this.#x && this.#v?.push([r, n, "evict"])), this.#j(t), e && (this.#u[t] = void 0, this.#h[t] = void 0, this.#g.push(t)), 1 === this.#a ? (this.#p = this.#m = 0, this.#g.length = 0) : this.#p = this.#f[t], this.#c.delete(n), this.#a--, t
        }
        has(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            updateAgeOnHas: n = this.updateAgeOnHas,
            status: r
          } = t, i = this.#c.get(e);
          if (void 0 !== i) {
            const e = this.#h[i];
            if (this.#C(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#T(i)) return n && this.#M(i), r && (r.has = "hit", this.#P(r, i)), !0;
            r && (r.has = "stale", this.#P(r, i))
          } else r && (r.has = "miss");
          return !1
        }
        peek(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: n = this.allowStale
          } = t, r = this.#c.get(e);
          if (void 0 === r || !n && this.#T(r)) return;
          const i = this.#h[r];
          return this.#C(i) ? i.__staleWhileFetching : i
        }
        #A(e, t, n, r) {
          var i = this;
          const o = void 0 === t ? void 0 : this.#h[t];
          if (this.#C(o)) return o;
          const s = new Ee,
            {
              signal: a
            } = n;
          a?.addEventListener("abort", (() => s.abort(a.reason)), {
            signal: s.signal
          });
          const l = {
              signal: s.signal,
              options: n,
              context: r
            },
            c = function(r) {
              let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const {
                aborted: a
              } = s.signal, c = n.ignoreFetchAbort && void 0 !== r;
              if (n.status && (a && !o ? (n.status.fetchAborted = !0, n.status.fetchError = s.signal.reason, c && (n.status.fetchAbortIgnored = !0)) : n.status.fetchResolved = !0), a && !c && !o) return u(s.signal.reason);
              const f = h;
              return i.#h[t] === h && (void 0 === r ? f.__staleWhileFetching ? i.#h[t] = f.__staleWhileFetching : i.#_(e, "fetch") : (n.status && (n.status.fetchUpdated = !0), i.set(e, r, l.options))), r
            },
            u = r => {
              const {
                aborted: i
              } = s.signal, o = i && n.allowStaleOnFetchAbort, a = o || n.allowStaleOnFetchRejection, l = a || n.noDeleteOnFetchRejection, c = h;
              if (this.#h[t] === h && (l && void 0 !== c.__staleWhileFetching ? o || (this.#h[t] = c.__staleWhileFetching) : this.#_(e, "fetch")), a) return n.status && void 0 !== c.__staleWhileFetching && (n.status.returnedStale = !0), c.__staleWhileFetching;
              if (c.__returned === c) throw r
            };
          n.status && (n.status.fetchDispatched = !0);
          const h = new Promise(((t, r) => {
              const i = this.#o?.(e, o, l);
              i && i instanceof Promise && i.then((e => t(void 0 === e ? void 0 : e)), r), s.signal.addEventListener("abort", (() => {
                n.ignoreFetchAbort && !n.allowStaleOnFetchAbort || (t(void 0), n.allowStaleOnFetchAbort && (t = e => c(e, !0)))
              }))
            })).then(c, (e => (n.status && (n.status.fetchRejected = !0, n.status.fetchError = e), u(e)))),
            f = Object.assign(h, {
              __abortController: s,
              __staleWhileFetching: o,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, f, {
            ...l.options,
            status: void 0
          }), t = this.#c.get(e)) : this.#h[t] = f, f
        }
        #C(e) {
          if (!this.#S) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof Ee
        }
        async fetch(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: n = this.allowStale,
            updateAgeOnGet: r = this.updateAgeOnGet,
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
            allowStale: n,
            updateAgeOnGet: r,
            noDeleteOnStaleGet: i,
            status: g
          });
          const y = {
            allowStale: n,
            updateAgeOnGet: r,
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
              const e = n && void 0 !== t.__staleWhileFetching;
              return g && (g.fetch = "inflight", e && (g.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const i = this.#T(w);
            if (!m && !i) return g && (g.fetch = "hit"), this.#E(w), r && this.#M(w), g && this.#P(g, w), t;
            const o = this.#A(e, w, y, p),
              s = void 0 !== o.__staleWhileFetching && n;
            return g && (g.fetch = i ? "stale" : "refresh", s && i && (g.returnedStale = !0)), s ? o.__staleWhileFetching : o.__returned = o
          }
        }
        async forceFetch(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = await this.fetch(e, t);
          if (void 0 === n) throw new Error("fetch() returned undefined");
          return n
        }
        memo(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = this.#s;
          if (!n) throw new Error("no memoMethod provided to constructor");
          const {
            context: r,
            forceRefresh: i,
            ...o
          } = t, s = this.get(e, o);
          if (!i && void 0 !== s) return s;
          const a = n(e, s, {
            options: o,
            context: r
          });
          return this.set(e, a, o), a
        }
        get(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: n = this.allowStale,
            updateAgeOnGet: r = this.updateAgeOnGet,
            noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
            status: o
          } = t, s = this.#c.get(e);
          if (void 0 !== s) {
            const t = this.#h[s],
              a = this.#C(t);
            return o && this.#P(o, s), this.#T(s) ? (o && (o.get = "stale"), a ? (o && n && void 0 !== t.__staleWhileFetching && (o.returnedStale = !0), n ? t.__staleWhileFetching : void 0) : (i || this.#_(e, "expire"), o && n && (o.returnedStale = !0), n ? t : void 0)) : (o && (o.get = "hit"), a ? t.__staleWhileFetching : (this.#E(s), r && this.#M(s), t))
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
          let n = !1;
          if (0 !== this.#a) {
            const r = this.#c.get(e);
            if (void 0 !== r)
              if (n = !0, 1 === this.#a) this.#$(t);
              else {
                this.#j(r);
                const n = this.#h[r];
                if (this.#C(n) ? n.__abortController.abort(new Error("deleted")) : (this.#k || this.#x) && (this.#k && this.#r?.(n, e, t), this.#x && this.#v?.push([n, e, t])), this.#c.delete(e), this.#u[r] = void 0, this.#h[r] = void 0, r === this.#m) this.#m = this.#d[r];
                else if (r === this.#p) this.#p = this.#f[r];
                else {
                  const e = this.#d[r];
                  this.#f[e] = this.#f[r];
                  const t = this.#f[r];
                  this.#d[t] = this.#d[r]
                }
                this.#a--, this.#g.push(r)
              }
          }
          if (this.#x && this.#v?.length) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
          return n
        }
        clear() {
          return this.#$("delete")
        }
        #$(e) {
          for (const t of this.#O({
              allowStale: !0
            })) {
            const n = this.#h[t];
            if (this.#C(n)) n.__abortController.abort(new Error("deleted"));
            else {
              const r = this.#u[t];
              this.#k && this.#r?.(n, r, e), this.#x && this.#v?.push([n, r, e])
            }
          }
          if (this.#c.clear(), this.#h.fill(void 0), this.#u.fill(void 0), this.#b && this.#w && (this.#b.fill(0), this.#w.fill(0)), this.#y && this.#y.fill(0), this.#p = 0, this.#m = 0, this.#g.length = 0, this.#l = 0, this.#a = 0, this.#x && this.#v) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
        }
      }
      n(98398);
      var _e = new Set,
        Me = [],
        Pe = [];
      h || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        h = !0, u.push(e)
      })({
        appendCss: e => {
          Pe.push(e)
        },
        registerClassName: e => {
          _e.add(e)
        },
        registerComposition: e => {
          Me.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: n,
              composedClassLists: r
            } = e, i = new we(t, r);
            for (var o of n) i.processCssObj(o);
            return i.toCss()
          }({
            localClassNames: Array.from(_e),
            composedClassLists: Me,
            cssObjs: Pe
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: n
            } = e, r = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, i = o[r];
            if (!i) {
              var s = document.createElement("style");
              t.packageName && s.setAttribute("data-package", t.packageName), s.setAttribute("data-file", t.filePath), s.setAttribute("type", "text/css"), i = o[r] = s, document.head.appendChild(s)
            }
            i.innerHTML = n
          })({
            fileScope: e,
            css: t
          }), Pe = []
        },
        getIdentOption: () => "short"
      });
      new Fe({
        max: 500
      })
    },
    45013: (e, t, n) => {
      function r(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function i(e, t) {
        var n = e;
        for (var r of t) {
          if (!(r in n)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
          n = n[r]
        }
        return n
      }

      function o(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          r = {};
        for (var i in e) {
          var s = e[i],
            a = [...n, i];
          "string" == typeof s || "number" == typeof s || null == s ? r[i] = t(s, a) : "object" != typeof s || Array.isArray(s) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(s) ? "Array" : typeof s, '"')) : r[i] = o(s, t, a)
        }
        return r
      }
      n.d(t, {
        Bx: () => o,
        Jt: () => i,
        Tm: () => r
      })
    },
    52522: (e, t) => {
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        s = n ? Symbol.for("react.strict_mode") : 60108,
        a = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        u = n ? Symbol.for("react.async_mode") : 60111,
        h = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        d = n ? Symbol.for("react.suspense") : 60113,
        p = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        w = n ? Symbol.for("react.responder") : 60118,
        b = n ? Symbol.for("react.scope") : 60119;

      function k(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
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
      t.AsyncMode = u, t.ConcurrentMode = h, t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = f, t.Fragment = o, t.Lazy = g, t.Memo = m, t.Portal = i, t.Profiler = a, t.StrictMode = s, t.Suspense = d, t.isAsyncMode = function(e) {
        return S(e) || k(e) === u
      }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
        return k(e) === c
      }, t.isContextProvider = function(e) {
        return k(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
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
    63735: (e, t, n) => {
      n.d(t, {
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
      const r = ["top", "right", "bottom", "left"],
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

      function h(e, t, n) {
        return o(e, i(t, n))
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
          y: n,
          width: r,
          height: i
        } = e;
        return {
          width: r,
          height: i,
          top: n,
          left: t,
          right: t + r,
          bottom: n + i,
          x: t,
          y: n
        }
      }

      function x(e, t, n) {
        let {
          reference: r,
          floating: i
        } = e;
        const o = v(t),
          s = y(t),
          a = g(s),
          l = d(t),
          c = "y" === o,
          u = r.x + r.width / 2 - i.width / 2,
          h = r.y + r.height / 2 - i.height / 2,
          f = r[a] / 2 - i[a] / 2;
        let m;
        switch (l) {
          case "top":
            m = {
              x: u,
              y: r.y - i.height
            };
            break;
          case "bottom":
            m = {
              x: u,
              y: r.y + r.height
            };
            break;
          case "right":
            m = {
              x: r.x + r.width,
              y: h
            };
            break;
          case "left":
            m = {
              x: r.x - i.width,
              y: h
            };
            break;
          default:
            m = {
              x: r.x,
              y: r.y
            }
        }
        switch (p(t)) {
          case "start":
            m[s] -= f * (n && c ? -1 : 1);
            break;
          case "end":
            m[s] += f * (n && c ? -1 : 1)
        }
        return m
      }
      async function C(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
          x: r,
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
          element: null == (n = await (null == o.isElement ? void 0 : o.isElement(g))) || n ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(a.floating)),
          boundary: c,
          rootBoundary: u,
          strategy: l
        })), y = "floating" === h ? {
          x: r,
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
        return r.some((t => e[t] >= 0))
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

      function M(e) {
        return !(!L() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof T(e).ShadowRoot)
      }

      function P(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: i
        } = N(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
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
          n = F(e) ? N(e) : e;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((e => !!n[e] && "none" !== n[e])) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
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
        const t = e.assignedSlot || e.parentNode || M(e) && e.host || R(e);
        return M(t) ? t.host : t
      }

      function H(e) {
        const t = U(e);
        return W(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _(t) && P(t) ? t : H(t)
      }

      function q(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const i = H(e),
          o = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
          s = T(i);
        if (o) {
          const e = G(s);
          return t.concat(s, s.visualViewport || [], P(i) ? i : [], e && n ? q(e) : [])
        }
        return t.concat(i, q(i, [], n))
      }

      function G(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function V(e) {
        const t = N(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const i = _(e),
          o = i ? e.offsetWidth : n,
          a = i ? e.offsetHeight : r,
          l = s(n) !== o || s(r) !== a;
        return l && (n = o, r = a), {
          width: n,
          height: r,
          $: l
        }
      }

      function X(e) {
        return F(e) ? e : e.contextElement
      }

      function Z(e) {
        const t = X(e);
        if (!_(t)) return l(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: i,
            $: o
          } = V(t);
        let a = (o ? s(n.width) : n.width) / r,
          c = (o ? s(n.height) : n.height) / i;
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

      function J(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const i = e.getBoundingClientRect(),
          o = X(e);
        let s = l(1);
        t && (r ? F(r) && (s = Z(r)) : s = Z(e));
        const a = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== T(e)) && t
        }(o, n, r) ? Q(o) : l(0);
        let c = (i.left + a.x) / s.x,
          u = (i.top + a.y) / s.y,
          h = i.width / s.x,
          f = i.height / s.y;
        if (o) {
          const e = T(o),
            t = r && F(r) ? T(r) : r;
          let n = e,
            i = G(n);
          for (; i && r && t !== n;) {
            const e = Z(i),
              t = i.getBoundingClientRect(),
              r = N(i),
              o = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              s = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
            c *= e.x, u *= e.y, h *= e.x, f *= e.y, c += o, u += s, n = T(i), i = G(n)
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
        const n = $(e).scrollLeft;
        return t ? t.left + n : J(R(e)).left + n
      }

      function ee(e, t, n) {
        void 0 === n && (n = !1);
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : K(e, r)),
          y: r.top + t.scrollTop
        }
      }

      function te(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = T(e),
            r = R(e),
            i = n.visualViewport;
          let o = r.clientWidth,
            s = r.clientHeight,
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
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = R(e),
            n = $(e),
            r = e.ownerDocument.body,
            i = o(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            s = o(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let a = -n.scrollLeft + K(e);
          const l = -n.scrollTop;
          return "rtl" === N(r).direction && (a += o(t.clientWidth, r.clientWidth) - i), {
            width: i,
            height: s,
            x: a,
            y: l
          }
        }(R(e));
        else if (F(t)) r = function(e, t) {
          const n = J(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            i = n.left + e.clientLeft,
            o = _(e) ? Z(e) : l(1);
          return {
            width: e.clientWidth * o.x,
            height: e.clientHeight * o.y,
            x: i * o.x,
            y: r * o.y
          }
        }(t, n);
        else {
          const n = Q(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return S(r)
      }

      function ne(e, t) {
        const n = U(e);
        return !(n === t || !F(n) || W(n)) && ("fixed" === N(n).position || ne(n, t))
      }

      function re(e, t, n) {
        const r = _(t),
          i = R(t),
          o = "fixed" === n,
          s = J(e, !0, o, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const c = l(0);
        if (r || !r && !o)
          if (("body" !== O(t) || P(i)) && (a = $(t)), r) {
            const e = J(t, !0, o, t);
            c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
          } else i && (c.x = K(i));
        const u = !i || r || o ? l(0) : ee(i, a);
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
        let n = e.offsetParent;
        return R(e) === n && (n = n.ownerDocument.body), n
      }

      function se(e, t) {
        const n = T(e);
        if (D(e)) return n;
        if (!_(e)) {
          let t = U(e);
          for (; t && !W(t);) {
            if (F(t) && !ie(t)) return t;
            t = U(t)
          }
          return n
        }
        let r = oe(e, t);
        for (; r && j(r) && ie(r);) r = oe(r, t);
        return r && W(r) && ie(r) && !I(r) ? n : r || function(e) {
          let t = U(e);
          for (; _(t) && !W(t);) {
            if (I(t)) return t;
            if (D(t)) return null;
            t = U(t)
          }
          return null
        }(e) || n
      }
      const ae = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: i
          } = e;
          const o = "fixed" === i,
            s = R(r),
            a = !!t && D(t.floating);
          if (r === s || a && o) return n;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = l(1);
          const h = l(0),
            f = _(r);
          if ((f || !f && !o) && (("body" !== O(r) || P(s)) && (c = $(r)), _(r))) {
            const e = J(r);
            u = Z(r), h.x = e.x + r.clientLeft, h.y = e.y + r.clientTop
          }
          const d = !s || f || o ? l(0) : ee(s, c, !0);
          return {
            width: n.width * u.x,
            height: n.height * u.y,
            x: n.x * u.x - c.scrollLeft * u.x + h.x + d.x,
            y: n.y * u.y - c.scrollTop * u.y + h.y + d.y
          }
        },
        getDocumentElement: R,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: s
          } = e;
          const a = [..."clippingAncestors" === n ? D(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = q(e, [], !1).filter((e => F(e) && "body" !== O(e))),
                i = null;
              const o = "fixed" === N(e).position;
              let s = o ? U(e) : e;
              for (; F(s) && !W(s);) {
                const t = N(s),
                  n = I(s);
                n || "fixed" !== t.position || (i = null), (o ? !n && !i : !n && "static" === t.position && i && ["absolute", "fixed"].includes(i.position) || P(s) && !n && ne(e, s)) ? r = r.filter((e => e !== s)) : i = t, s = U(s)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            l = a[0],
            c = a.reduce(((e, n) => {
              const r = te(t, n, s);
              return e.top = o(r.top, e.top), e.right = i(r.right, e.right), e.bottom = i(r.bottom, e.bottom), e.left = o(r.left, e.left), e
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
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: re(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: r.width,
              height: r.height
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: n
          } = V(e);
          return {
            width: t,
            height: n
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

      function ce(e, t, n, r) {
        void 0 === r && (r = {});
        const {
          ancestorScroll: s = !0,
          ancestorResize: l = !0,
          elementResize: c = "function" == typeof ResizeObserver,
          layoutShift: u = "function" == typeof IntersectionObserver,
          animationFrame: h = !1
        } = r, f = X(e), d = s || l ? [...f ? q(f) : [], ...q(t)] : [];
        d.forEach((e => {
          s && e.addEventListener("scroll", n, {
            passive: !0
          }), l && e.addEventListener("resize", n)
        }));
        const p = f && u ? function(e, t) {
          let n, r = null;
          const s = R(e);

          function l() {
            var e;
            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
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
              const r = t[0].intersectionRatio;
              if (r !== h) {
                if (!y) return c();
                r ? c(!1, r) : n = setTimeout((() => {
                  c(!1, 1e-7)
                }), 1e3)
              }
              1 !== r || le(f, e.getBoundingClientRect()) || c(), y = !1
            }
            try {
              r = new IntersectionObserver(w, {
                ...v,
                root: s.ownerDocument
              })
            } catch (e) {
              r = new IntersectionObserver(w, v)
            }
            r.observe(e)
          }(!0), l
        }(f, n) : null;
        let m, g = -1,
          v = null;
        c && (v = new ResizeObserver((e => {
          let [r] = e;
          r && r.target === f && v && (v.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame((() => {
            var e;
            null == (e = v) || e.observe(t)
          }))), n()
        })), f && !h && v.observe(f), v.observe(t));
        let y = h ? J(e) : null;
        return h && function t() {
          const r = J(e);
          y && !le(y, r) && n(), y = r, m = requestAnimationFrame(t)
        }(), n(), () => {
          var e;
          d.forEach((e => {
            s && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n)
          })), null == p || p(), null == (e = v) || e.disconnect(), v = null, h && cancelAnimationFrame(m)
        }
      }
      const ue = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              var n, r;
              const {
                x: i,
                y: o,
                placement: s,
                middlewareData: a
              } = t, l = await async function(e, t) {
                const {
                  placement: n,
                  platform: r,
                  elements: i
                } = e, o = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)), s = d(n), a = p(n), l = "y" === v(n), c = ["left", "top"].includes(s) ? -1 : 1, u = o && l ? -1 : 1, h = f(t, e);
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
              return s === (null == (n = a.offset) ? void 0 : n.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
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
                x: n,
                y: r,
                placement: i
              } = t, {
                mainAxis: o = !0,
                crossAxis: s = !1,
                limiter: a = {
                  fn: e => {
                    let {
                      x: t,
                      y: n
                    } = e;
                    return {
                      x: t,
                      y: n
                    }
                  }
                },
                ...l
              } = f(e, t), c = {
                x: n,
                y: r
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
                  x: b.x - n,
                  y: b.y - r,
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
              var n, r;
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
              if (null != (n = o.arrow) && n.alignmentOffset) return {};
              const E = d(i),
                L = v(a),
                O = d(a) === a,
                T = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                R = m || (O || !x ? [b(a)] : function(e) {
                  const t = b(e);
                  return [w(e), t, w(t)]
                }(a)),
                z = "none" !== S;
              !m && z && R.push(... function(e, t, n, r) {
                const i = p(e);
                let o = function(e, t, n) {
                  const r = ["left", "right"],
                    i = ["right", "left"],
                    o = ["top", "bottom"],
                    s = ["bottom", "top"];
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? i : r : t ? r : i;
                    case "left":
                    case "right":
                      return t ? o : s;
                    default:
                      return []
                  }
                }(d(e), "start" === n, r);
                return i && (o = o.map((e => e + "-" + i)), t && (o = o.concat(o.map(w)))), o
              }(a, x, S, T));
              const F = [a, ...R],
                _ = await C(t, A),
                M = [];
              let P = (null == (r = o.flip) ? void 0 : r.overflows) || [];
              if (u && M.push(_[E]), h) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = p(e),
                    i = y(e),
                    o = g(i);
                  let s = "x" === i ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[o] > t.floating[o] && (s = b(s)), [s, b(s)]
                }(i, s, T);
                M.push(_[e[0]], _[e[1]])
              }
              if (P = [...P, {
                  placement: i,
                  overflows: M
                }], !M.every((e => e <= 0))) {
                var j, D;
                const e = ((null == (j = o.flip) ? void 0 : j.index) || 0) + 1,
                  t = F[e];
                if (t) return {
                  data: {
                    index: e,
                    overflows: P
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (D = P.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : D.placement;
                if (!n) switch (k) {
                  case "bestFit": {
                    var I;
                    const e = null == (I = P.filter((e => {
                      if (z) {
                        const t = v(e.placement);
                        return t === L || "y" === t
                      }
                      return !0
                    })).map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : I[0];
                    e && (n = e);
                    break
                  }
                  case "initialPlacement":
                    n = a
                }
                if (i !== n) return {
                  reset: {
                    placement: n
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
              var n, r;
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
              if (null != (n = t.middlewareData.shift) && n.enabled.x && (z = E), null != (r = t.middlewareData.shift) && r.enabled.y && (R = A), T && !y) {
                const e = o(m.left, 0),
                  t = o(m.right, 0),
                  n = o(m.top, 0),
                  r = o(m.bottom, 0);
                w ? z = b - 2 * (0 !== e || 0 !== t ? e + t : o(m.left, m.right)) : R = k - 2 * (0 !== n || 0 !== r ? n + r : o(m.top, m.bottom))
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
                rects: n
              } = t, {
                strategy: r = "referenceHidden",
                ...i
              } = f(e, t);
              switch (r) {
                case "referenceHidden": {
                  const e = A(await C(t, {
                    ...i,
                    elementContext: "reference"
                  }), n.reference);
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
                  }), n.floating);
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
              x: n,
              y: r,
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
                x: n,
                y: r
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
              M = i(m[A], F),
              P = _,
              j = R - S[b] - M,
              D = R / 2 - S[b] / 2 + z,
              I = h(P, D, j),
              B = !c.arrow && null != p(o) && D !== I && s.reference[b] / 2 - (D < P ? _ : M) - S[b] / 2 < 0,
              W = B ? D < P ? D - P : D - j : 0;
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
                x: n,
                y: r,
                placement: i,
                rects: o,
                middlewareData: s
              } = t, {
                offset: a = 0,
                mainAxis: l = !0,
                crossAxis: c = !0
              } = f(e, t), u = {
                x: n,
                y: r
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
                  n = o.reference[p] + o.reference[e] - b.mainAxis;
                g < t ? g = t : g > n && (g = n)
              }
              if (c) {
                var k, S;
                const e = "y" === p ? "width" : "height",
                  t = ["top", "left"].includes(d(i)),
                  n = o.reference[h] - o.floating[e] + (t && (null == (k = s.offset) ? void 0 : k[h]) || 0) + (t ? 0 : b.crossAxis),
                  r = o.reference[h] + o.reference[e] + (t ? 0 : (null == (S = s.offset) ? void 0 : S[h]) || 0) - (t ? b.crossAxis : 0);
                y < n ? y = n : y > r && (y = r)
              }
              return {
                [p]: g,
                [h]: y
              }
            }
          }
        },
        ve = (e, t, n) => {
          const r = new Map,
            i = {
              platform: ae,
              ...n
            },
            o = {
              ...i.platform,
              _c: r
            };
          return (async (e, t, n) => {
            const {
              placement: r = "bottom",
              strategy: i = "absolute",
              middleware: o = [],
              platform: s
            } = n, a = o.filter(Boolean), l = await (null == s.isRTL ? void 0 : s.isRTL(t));
            let c = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: i
              }),
              {
                x: u,
                y: h
              } = x(c, r, l),
              f = r,
              d = {},
              p = 0;
            for (let n = 0; n < a.length; n++) {
              const {
                name: o,
                fn: m
              } = a[n], {
                x: g,
                y: v,
                data: y,
                reset: w
              } = await m({
                x: u,
                y: h,
                initialPlacement: r,
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
              } = x(c, f, l))), n = -1)
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
    67332: (e, t, n) => {
      var r = n(9862),
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
        return r.isMemo(e) ? s : a[e.$$typeof] || i
      }
      a[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, a[r.Memo] = s;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        h = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (p) {
            var i = d(n);
            i && i !== p && e(t, i, r)
          }
          var s = u(n);
          h && (s = s.concat(h(n)));
          for (var a = l(t), m = l(n), g = 0; g < s.length; ++g) {
            var v = s[g];
            if (!(o[v] || r && r[v] || m && m[v] || a && a[v])) {
              var y = f(n, v);
              try {
                c(t, v, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    79895: e => {
      var t = {}.hasOwnProperty,
        n = /[ -,\.\/:-@\[-\^`\{-~]/,
        r = /[ -,\.\/:-@\[\]\^`\{-~]/,
        i = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        o = function e(o, s) {
          "single" != (s = function(e, n) {
            if (!e) return n;
            var r = {};
            for (var i in n) r[i] = t.call(e, i) ? e[i] : n[i];
            return r
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
            } else m = s.escapeEverything ? n.test(d) ? "\\" + d : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(d) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == d || !l && ('"' == d && a == d || "'" == d && a == d) || l && r.test(d) ? "\\" + d : d;
            u += m
          }
          return l && (/^-[-\d]/.test(u) ? u = "\\-" + u.slice(1) : /\d/.test(c) && (u = "\\3" + c + " " + u.slice(1))), u = u.replace(i, (function(e, t, n) {
            return t && t.length % 2 ? e : (t || "") + n
          })), !l && s.wrap ? a + u + a : u
        };
      o.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, o.version = "3.0.0", e.exports = o
    }
  }
]);