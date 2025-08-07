try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d231271a-2dd2-4d0a-a554-9b07ae0bb1a5", e._sentryDebugIdIdentifier = "sentry-dbid-d231271a-2dd2-4d0a-a554-9b07ae0bb1a5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [1689], {
    6385: (e, t, r) => {
      "use strict";
      r.d(t, {
        DX: () => n.DX,
        xV: () => n.xV,
        s6: () => a
      });
      var n = r(83970),
        i = r(70954),
        o = r(71127),
        s = r(18628);
      const a = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? s.s6 : o.Fragment;
        return (0, i.jsx)(r, {
          ...t
        })
      }
    },
    13404: e => {
      var t, r, n = e.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function o() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
          t = i
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
          r = o
        }
      }();
      var a, l = [],
        c = !1,
        h = -1;

      function u() {
        c && a && (c = !1, a.length ? l = a.concat(l) : h = -1, l.length && d())
      }

      function d() {
        if (!c) {
          var e = s(u);
          c = !0;
          for (var t = l.length; t;) {
            for (a = l, l = []; ++h < t;) a && a[h].run();
            h = -1, t = l.length
          }
          a = null, c = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function f(e, t) {
        this.fun = e, this.array = t
      }

      function p() {}
      n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new f(e, t)), 1 !== l.length || c || s(d)
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(e) {
        return []
      }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    },
    16237: (e, t, r) => {
      "use strict";
      r.d(t, {
        UP: () => a,
        ic: () => u,
        qn: () => y,
        Rv: () => g,
        iQ: () => p,
        Mk: () => f,
        UQ: () => h,
        gr: () => m,
        Ub: () => o,
        jt: () => l,
        ZC: () => s,
        rl: () => v
      });
      var n = r(51838),
        i = r(71127);

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
      const h = ({
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
          h = (0, i.useCallback)((() => {
            document.hidden || l()
          }), []);
        return (0, i.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", l), window.removeEventListener("mousedown", l), window.removeEventListener("resize", l), window.removeEventListener("keydown", l), window.removeEventListener("touchstart", l), window.removeEventListener("wheel", l), document.removeEventListener("mouseleave", c), document.removeEventListener("visibilitychange", h), window.clearTimeout(n.current), s(!1)
          };
          return r ? (window.addEventListener("mousemove", l), window.addEventListener("mousedown", l), window.addEventListener("resize", l), window.addEventListener("keydown", l), window.addEventListener("touchstart", l), window.addEventListener("wheel", l), document.addEventListener("mouseleave", c), document.addEventListener("visibilitychange", h), l()) : e(), () => e()
        }), [r]), {
          isIdle: o
        }
      };

      function u({
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
        }), s = void 0 !== e, a = s ? e : n, l = c(r), h = (0, i.useCallback)((t => {
          if (s) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && l(r)
          } else o(t)
        }), [s, e, o, l]);
        return [a, h]
      }

      function d(e, t, r, n) {
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
      const f = ({
          enabled: e,
          ref: t
        }) => {
          const [r, n] = (0, i.useState)(!1);
          return (0, i.useEffect)((() => {
            n(!1)
          }), [t.current]), d("mouseenter", (() => {
            n(!0)
          }), t), d("mouseleave", (() => {
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
          return d("focusin", (e => {
            a(!0), r?.(e), t?.(!0, e)
          }), e), d("focusout", (e => {
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

      function v(e = !0) {
        const t = o("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      const g = ({
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
      "use strict";
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
    41689: (e, t, r) => {
      "use strict";
      r.d(t, {
        NP: () => v,
        Ym: () => u,
        zQ: () => h,
        DP: () => c
      });
      var n = r(70954),
        i = (r(49639), r(6385)),
        o = r(25648),
        s = r(71127);
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
        h = () => {
          const {
            platformScale: e
          } = l();
          return e
        },
        u = () => {
          const {
            locale: e
          } = l();
          return e
        };
      var d = r(16237);
      const f = (e, t) => {
        const r = "more" === t ? o.xW.lightHc : o.xW.light,
          n = "more" === t ? o.xW.darkHc : o.xW.dark;
        return "dark" === e ? n : r
      };
      var p = r(84105);
      const m = () => p.X3 ? null : document.body,
        v = (0, s.forwardRef)((({
          children: e,
          className: t,
          container: r = m(),
          asChild: l,
          colorScheme: c,
          defaultColorScheme: h,
          contrastMode: u,
          defaultContrastMode: v,
          platformScaleBreakpoints: g,
          platformScaleRatios: y,
          defaultPlatformScale: w,
          platformScale: b,
          locale: k = "en-US"
        }, C) => {
          const S = (0, s.useRef)(null),
            A = (0, d.UP)(S, C),
            E = (0, s.useRef)(r),
            {
              ratio: x,
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
              platformScaleBreakpoints: g,
              platformScaleRatios: y,
              defaultPlatformScale: w,
              platformScale: b
            }),
            {
              appearanceClass: O,
              otherAppearanceClasses: T,
              providerColor: z,
              providerContrast: F
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark",
              contrastMode: r,
              defaultContrastMode: n = "normal"
            }) {
              const i = (0, d.Ub)("(prefers-color-scheme: light)"),
                a = (0, d.Ub)("(prefers-color-scheme: dark)"),
                l = (0, d.Ub)("(prefers-contrast: more)"),
                c = "system" !== e && e || i && "light" || a && "dark" || t,
                h = r || l && "more" || n,
                u = (0, s.useMemo)((() => f(c, h)), [c, h]),
                p = (0, s.useMemo)((() => ((e, t) => {
                  const r = f(e, t);
                  return [o.xW.light, o.xW.dark, o.xW.lightHc, o.xW.darkHc].filter((e => e !== r))
                })(c, h)), [c, h]);
              return {
                appearanceClass: u,
                otherAppearanceClasses: p,
                providerColor: c,
                providerContrast: h
              }
            }({
              colorScheme: c,
              defaultColorScheme: h,
              contrastMode: u,
              defaultContrastMode: v
            });
          return ((e, t, r, n, i) => {
            const a = (0, d.ZC)(i),
              l = (0, d.ZC)(e.current);
            (0, s.useEffect)((() => {
              e.current?.classList.contains(o.X6) || e.current?.classList.add(o.X6), e.current?.classList.add(r), e.current?.classList.remove(...n), a && i && e.current?.classList.contains(a) ? e.current?.classList.replace(a, i) : a && !i && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : i && e.current?.classList.add(i)
            }), [r, i]), (0, s.useEffect)((() => {
              e.current?.style.setProperty(o.HZ, t.toString())
            }), [t]), (0, s.useEffect)((() => {
              l?.classList.remove(o.X6), l?.classList.remove(r), l?.style.removeProperty(o.HZ), i && l?.classList.remove(i)
            }), [l])
          })(l ? S : E, x, O, T, t), (0, n.jsx)(a.Provider, {
            value: {
              locale: k,
              defaultColorScheme: h,
              colorScheme: z,
              defaultContrastMode: v,
              contrastMode: F,
              defaultPlatformScale: w,
              platformScale: L,
              platformScaleRatios: y,
              platformScaleBreakpoints: g
            },
            children: l ? (0, n.jsx)(i.DX, {
              ref: A,
              children: e
            }) : e
          })
        }))
    },
    49639: (e, t, r) => {
      "use strict";
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
        h = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        u = !1;

      function d(e, t) {
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
      const f = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        p = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        m = new Map([
          [126, i.Element],
          [94, i.Start],
          [36, i.End],
          [42, i.Any],
          [33, i.Not],
          [124, i.Hyphen]
        ]),
        v = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        g = new Set(["contains", "icontains"]);

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

      function C(e) {
        const t = [],
          r = S(t, `${e}`, 0);
        if (r < e.length) throw new Error(`Unmatched selector: ${e.slice(r)}`);
        return t
      }

      function S(e, t, r) {
        let o = [];

        function s(e) {
          const n = t.slice(r + e).match(f);
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

        function h() {
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

        function u(e) {
          o.length > 0 && o[o.length - 1].type === n.Descendant ? o[o.length - 1].type = e : (h(), o.push({
            type: e
          }))
        }

        function d(e, t) {
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
              0 !== o.length && o[0].type === n.Descendant || (h(), o.push({
                type: n.Descendant
              })), a(1);
              break;
            case 62:
              u(n.Child), a(1);
              break;
            case 60:
              u(n.Parent), a(1);
              break;
            case 126:
              u(n.Sibling), a(1);
              break;
            case 43:
              u(n.Adjacent), a(1);
              break;
            case 46:
              d("class", i.Element);
              break;
            case 35:
              d("id", i.Equals);
              break;
            case 91: {
              let e;
              a(1);
              let l = null;
              124 === t.charCodeAt(r) ? e = s(1) : t.startsWith("*|", r) ? (l = "*", e = s(2)) : (e = s(0), 124 === t.charCodeAt(r) && 61 !== t.charCodeAt(r + 1) && (l = e, e = s(1))), a(0);
              let h = i.Exists;
              const u = m.get(t.charCodeAt(r));
              if (u) {
                if (h = u, 61 !== t.charCodeAt(r + 1)) throw new Error("Expected `=`");
                a(2)
              } else 61 === t.charCodeAt(r) && (h = i.Equals, a(1));
              let d = "",
                f = null;
              if ("exists" !== h) {
                if (b(t.charCodeAt(r))) {
                  const e = t.charCodeAt(r);
                  let n = r + 1;
                  for (; n < t.length && (t.charCodeAt(n) !== e || c(n));) n += 1;
                  if (t.charCodeAt(n) !== e) throw new Error("Attribute value didn't end");
                  d = w(t.slice(r + 1, n)), r = n + 1
                } else {
                  const e = r;
                  for (; r < t.length && (!k(t.charCodeAt(r)) && 93 !== t.charCodeAt(r) || c(r));) r += 1;
                  d = w(t.slice(e, r))
                }
                a(0);
                const e = 32 | t.charCodeAt(r);
                115 === e ? (f = !1, a(1)) : 105 === e && (f = !0, a(1))
              }
              if (93 !== t.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const p = {
                type: n.Attribute,
                name: e,
                action: h,
                value: d,
                namespace: l,
                ignoreCase: f
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
                if (v.has(e)) {
                  if (b(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (i = [], r = S(i, t, r + 1), 41 !== t.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  r += 1
                } else {
                  if (i = l(), g.has(e)) {
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
                  u(n.ColumnCombinator), a(2);
                  break
                }
              } else {
                if (!f.test(t.slice(r))) break e;
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

      function A(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? A(Object(r), !0).forEach((function(t) {
            x(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function x(e, t, r) {
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
        return r.withOptions = r => e(E(E({}, t), r)), r;

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

      function z(e, t) {
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
      var F, _ = /(\u000D|\u000C|\u000D\u000A)/g,
        R = /[\u0000\uD800-\uDFFF]/g,
        j = /(\/\*)[\s\S]*?(\*\/)/g,
        M = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), n = [], i = t + 1; i < e.length; i += 1) {
            var o = e.charCodeAt(i);
            if (o === r) return [i, String.fromCharCode.apply(null, n)];
            if (92 === o) {
              var s = D(e, i);
              if (null === s) return null;
              var a = z(s, 2),
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
        P = function(e, t) {
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
          var n = z(r, 3),
            i = n[0],
            o = n[1],
            s = n[2],
            a = N(e, i + 1);
          if (null !== a) {
            var l = z(a, 2);
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
          var h = String.fromCharCode.apply(null, n),
            u = "number" === r ? parseFloat(h) : parseInt(h);
          return -0 === u && (u = 0), Number.isNaN(u) ? null : [t - 1, u, r]
        },
        W = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var i = D(e, t);
              if (null === i) break;
              var o = z(i, 2),
                s = o[0],
                a = o[1];
              r.push(a), t = s
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        N = function(e, t) {
          if (e.length <= t || !P(e, t)) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var i = D(e, t);
              if (null === i) break;
              var o = z(i, 2),
                s = o[0],
                a = o[1];
              r.push(a), t = s
            } return [t - 1, String.fromCharCode.apply(null, r)]
        },
        U = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var n = [], i = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, n)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) i || 0 === n.length || (i = !0);
            else if (92 === r) {
              var o = D(e, t);
              if (null === o || i) return null;
              var s = z(o, 2),
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
        q = function(e, t) {
          var r = N(e, t);
          if (null === r) return null;
          var n = z(r, 2),
            i = n[0],
            o = n[1];
          if ("url" === o.toLowerCase()) {
            if (e.length > i + 1 && 40 === e.charCodeAt(i + 1)) {
              for (var s = 2; i + s < e.length; s += 1) {
                var a = e.charCodeAt(i + s);
                if (34 === a || 39 === a) return [i + 1, o.toLowerCase(), "<function-token>"];
                if (9 !== a && 32 !== a && 10 !== a) {
                  var l = U(e, i + s);
                  if (null === l) return null;
                  var c = z(l, 2);
                  return [c[0], c[1], "<url-token>"]
                }
              }
              return [i + 1, o.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > i + 1 && 40 === e.charCodeAt(i + 1)) return [i + 1, o.toLowerCase(), "<function-token>"];
          return [i, o.toLowerCase(), "<ident-token>"]
        },
        G = function(e) {
          if (null === e.mediaCondition) return e;
          var t = H(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        H = function e(t) {
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
        $ = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        V = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(_, "\n").replace(R, "�")).replace(j, "");
            for (var r = []; t < e.length; t += 1) {
              var n = e.charCodeAt(t);
              if (9 === n || 32 === n || 10 === n) {
                for (var i = e.charCodeAt(++t); 9 === i || 32 === i || 10 === i;) i = e.charCodeAt(++t);
                t -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === n) {
                if (null === (E = M(e, t))) return null;
                var o = z(E, 2),
                  s = o[0],
                  a = o[1];
                r.push({
                  type: "<string-token>",
                  value: a
                }), t = s
              } else if (35 === n) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = P(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (E = W(e, t + 1))) {
                    var c = z(E, 2);
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
                if (null === (E = M(e, t))) return null;
                var h = z(E, 2);
                s = h[0], a = h[1], r.push({
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
                var u = I(e, t);
                if (null === u) r.push({
                  type: "<delim-token>",
                  value: n
                });
                else {
                  var d = z(u, 2);
                  s = d[0], "<dimension-token>" === (S = d[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: S[1],
                    unit: S[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === S[0] ? r.push({
                    type: S[0],
                    value: S[1],
                    flag: S[2]
                  }) : r.push({
                    type: S[0],
                    value: S[1],
                    flag: "number"
                  }), t = s
                }
              } else if (44 === n) r.push({
                type: "<comma-token>"
              });
              else if (45 === n) {
                if (null !== (y = I(e, t))) {
                  var f = z(y, 2);
                  s = f[0], "<dimension-token>" === (S = f[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: S[1],
                    unit: S[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === S[0] ? r.push({
                    type: S[0],
                    value: S[1],
                    flag: S[2]
                  }) : r.push({
                    type: S[0],
                    value: S[1],
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
                if (null !== (E = q(e, t))) {
                  var v = z(E, 3),
                    g = (s = v[0], a = v[1], v[2]);
                  r.push({
                    type: g,
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
                  var w = z(y, 2);
                  s = w[0], "<dimension-token>" === (S = w[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: S[1],
                    unit: S[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === S[0] ? r.push({
                    type: S[0],
                    value: S[1],
                    flag: S[2]
                  }) : r.push({
                    type: S[0],
                    value: S[1],
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
                if (null !== (E = N(e, t + 1))) {
                  var k = z(E, 2);
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
                if (null === (E = D(e, t))) return null;
                var C = z(E, 2);
                s = C[0], a = C[1], e = e.slice(0, t) + a + e.slice(s + 1), t -= 1
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
                var S, A = z(E = I(e, t), 2);
                s = A[0], "<dimension-token>" === (S = A[1])[0] ? r.push({
                  type: "<dimension-token>",
                  value: S[1],
                  unit: S[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === S[0] ? r.push({
                  type: S[0],
                  value: S[1],
                  flag: S[2]
                }) : r.push({
                  type: S[0],
                  value: S[1],
                  flag: "number"
                }), t = s
              } else if (95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128) {
                var E;
                if (null === (E = q(e, t))) return null;
                var x = z(E, 3);
                s = x[0], a = x[1], g = x[2], r.push({
                  type: g,
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
          if (null === t) throw $("Failed tokenizing");
          var r = 0,
            n = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw $("Expected whitespace after media");
            r = 2;
            for (var i = 2; i < t.length - 1; i++) {
              var o = t[i];
              if ("<{-token>" === o.type) {
                n = i;
                break
              }
              if ("<semicolon-token>" === o.type) throw $("Expected '{' in media query but found ';'")
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
              return 0 === e.length ? null : Q(e)
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
              }(a), h = c.next(); !h.done; h = c.next()) {
              var u = h.value;
              null !== u && l.push(u)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              h && !h.done && (r = c.return) && r.call(c)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw $("No valid media queries");
          return l
        },
        Q = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Y(e, !0)
            }
          } catch (e) {
            throw $("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw $("Expected media condition or media prefix");
            var r = null,
              n = void 0,
              i = t.value;
            "only" !== i && "not" !== i || (r = i);
            var o = null === r ? 0 : 1;
            if (e.length <= o) throw $("Expected extra token in media query");
            var s = e[o];
            if ("<ident-token>" === s.type) {
              var a = s.value;
              if ("all" === a) n = "all";
              else if ("print" === a || "screen" === a) n = a;
              else {
                if ("tty" !== a && "tv" !== a && "projection" !== a && "handheld" !== a && "braille" !== a && "embossed" !== a && "aural" !== a && "speech" !== a) throw $("Unknown ident '".concat(a, "' in media query"));
                r = "not" === r ? null : "not", n = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== s.type) throw $("Invalid media query");
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
                  mediaCondition: Y(l, !0)
                }
              } catch (e) {
                throw $("Expected media condition after '('", e)
              }
            }
            if (o + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: n,
              mediaCondition: null
            };
            if (!(o + 4 < e.length)) throw $("Expected media condition after media prefix");
            var c = e[o + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw $("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: n,
                mediaCondition: Y(e.slice(o + 2), !1)
              }
            } catch (e) {
              throw $("Expected media condition after 'and'", e)
            }
          }
        },
        Y = function e(t, r, n) {
          if (void 0 === n && (n = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var i, o = t.length - 1, s = 0, a = 0, l = 0; l < t.length; l++) {
            var c = t[l];
            if ("<(-token>" === c.type ? (a += 1, s = Math.max(s, a)) : "<)-token>" === c.type && (a -= 1), 0 === a) {
              o = l;
              break
            }
          }
          if (0 !== a) throw new Error("Mismatched parens\nInvalid media condition");
          var h = t.slice(0, o + 1);
          if (i = 1 === s ? J(h) : "<ident-token>" === h[1].type && "not" === h[1].value ? e(h.slice(2, -1), !0, "not") : e(h.slice(1, -1), !0), o === t.length - 1) return {
            operator: n,
            children: [i]
          };
          var u = t[o + 1];
          if ("<ident-token>" !== u.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== n && n !== u.value) throw new Error("'".concat(u.value, "' and '").concat(n, "' must not be at same level\nInvalid media condition"));
          if ("or" === u.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== u.value && "or" !== u.value) throw new Error("Invalid operator: '".concat(u.value, "'\nInvalid media condition"));
          var d = e(t.slice(o + 2), r, u.value);
          return {
            operator: u.value,
            children: [i].concat(d.children)
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
                h = l.slice(0, 4);
              return "min-" === h ? (c = "min", l = l.slice(4)) : "max-" === h && (c = "max", l = l.slice(4)), a.wsBefore, a.wsAfter, {
                context: "value",
                prefix: c,
                feature: l,
                value: T(a, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var u = K(t);
            return {
              context: "range",
              feature: u.featureName,
              range: u
            }
          } catch (e) {
            throw $("Invalid media feature", e)
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
                  h = e[a + 2];
                if ("<delim-token>" !== c.type) throw new Error("Invalid range");
                var u = c.value;
                if (60 === u) "<delim-token>" !== h.type || 61 !== h.value || h.wsBefore ? o.rightOp = "<" : o.rightOp = "<=";
                else {
                  if (62 !== u) throw new Error("Invalid range");
                  "<delim-token>" !== h.type || 61 !== h.value || h.wsBefore ? o.rightOp = ">" : o.rightOp = ">="
                }
                var d = e[a + 1 + (null !== (i = null === (n = o.rightOp) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0)];
                o.rightToken = d
              } else if (a + 2 !== e.length) throw new Error("Invalid range")
            } else o.rightToken = l;
            var f = null,
              p = o.leftToken,
              m = o.leftOp,
              v = o.featureName,
              g = o.rightOp,
              y = o.rightToken,
              w = null;
            if (null !== p)
              if ("<ident-token>" === p.type) {
                var b = p.type;
                "infinite" === (C = p.value) && (w = {
                  type: b,
                  value: C
                })
              } else "<number-token>" !== p.type && "<dimension-token>" !== p.type && "<ratio-token>" !== p.type || (p.wsBefore, p.wsAfter, w = T(p, ["wsBefore", "wsAfter"]));
            var k = null;
            if (null !== y)
              if ("<ident-token>" === y.type) {
                var C;
                b = y.type, "infinite" === (C = y.value) && (k = {
                  type: b,
                  value: C
                })
              } else "<number-token>" !== y.type && "<dimension-token>" !== y.type && "<ratio-token>" !== y.type || (y.wsBefore, y.wsAfter, k = T(y, ["wsBefore", "wsAfter"]));
            if (null !== w && null !== k)
              if ("<" !== m && "<=" !== m || "<" !== g && "<=" !== g) {
                if (">" !== m && ">=" !== m || ">" !== g && ">=" !== g) throw new Error("Invalid range");
                f = {
                  leftToken: w,
                  leftOp: m,
                  featureName: v,
                  rightOp: g,
                  rightToken: k
                }
              } else f = {
                leftToken: w,
                leftOp: m,
                featureName: v,
                rightOp: g,
                rightToken: k
              };
            else(null === w && null === m && null !== g && null !== k || null !== w && null !== m && null === g && null === k) && (f = {
              leftToken: w,
              leftOp: m,
              featureName: v,
              rightOp: g,
              rightToken: k
            });
            return f
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
        he = le,
        ue = (e, t) => new Error(L(ae || (ae = d(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        de = e => {
          if ("@media " === e) throw ue(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = G(e[t])
            })(V(e))
          } catch (t) {
            throw ue(e, t.message)
          }
        },
        fe = ["vars"],
        pe = ["content"],
        me = "__DECLARATION",
        ve = {
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

      function ge(e, t, r, n) {
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
            "number" != typeof t || 0 === t || ve[r] || (e[r] = "".concat(t, "px"))
          })), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, r = ne(e, fe);
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
                  if (h.length < 1) throw new Error("No adapter configured");
                  return h[h.length - 1]
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
            var [l, [c]] = o[a], u = l - c.length + 1;
            s <= l || (s = u, "." !== t[u - 1] && (t = ge(t, u, l + 1, this.transformClassname(c))))
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
                r = C(e)
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
                  throw new Error(L(F || (F = d(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), n(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
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
              de(s);
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
            if (he[n]) {
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
          for (var h of this.conditionalRulesets)
            for (var u of h.renderToArray()) e.push(be(u));
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
      const Ce = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        Se = new Set,
        Ae = "object" == typeof ke && ke ? ke : {},
        Ee = (e, t, r, n) => {
          "function" == typeof Ae.emitWarning ? Ae.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`)
        };
      let xe = globalThis.AbortController,
        Le = globalThis.AbortSignal;
      if (void 0 === xe) {
        Le = class {
          onabort;
          _onabort = [];
          reason;
          aborted = !1;
          addEventListener(e, t) {
            this._onabort.push(t)
          }
        }, xe = class {
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
        let e = "1" !== Ae.env?.LRU_CACHE_IGNORE_AC_WARNING;
        const t = () => {
          e && (e = !1, Ee("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
        }
      }
      Symbol("type");
      const Oe = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        Te = e => Oe(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? ze : null : null;
      class ze extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class Fe {
        heap;
        length;
        static #e = !1;
        static create(e) {
          const t = Te(e);
          if (!t) return [];
          Fe.#e = !0;
          const r = new Fe(e, t);
          return Fe.#e = !1, r
        }
        constructor(e, t) {
          if (!Fe.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class _e {
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
        #h;
        #u;
        #d;
        #f;
        #p;
        #m;
        #v;
        #g;
        #y;
        #w;
        #b;
        #k;
        #C;
        #S;
        static unsafeExposeInternals(e) {
          return {
            starts: e.#w,
            ttls: e.#b,
            sizes: e.#y,
            keyMap: e.#c,
            keyList: e.#h,
            valList: e.#u,
            next: e.#d,
            prev: e.#f,
            get head() {
              return e.#p
            },
            get tail() {
              return e.#m
            },
            free: e.#v,
            isBackgroundFetch: t => e.#A(t),
            backgroundFetch: (t, r, n, i) => e.#E(t, r, n, i),
            moveToTail: t => e.#x(t),
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
            noDisposeOnSet: h,
            noUpdateTTL: u,
            maxSize: d = 0,
            maxEntrySize: f = 0,
            sizeCalculation: p,
            fetchMethod: m,
            memoMethod: v,
            noDeleteOnFetchRejection: g,
            noDeleteOnStaleGet: y,
            allowStaleOnFetchRejection: w,
            allowStaleOnFetchAbort: b,
            ignoreFetchAbort: k
          } = e;
          if (0 !== t && !Oe(t)) throw new TypeError("max option must be a nonnegative integer");
          const C = t ? Te(t) : Array;
          if (!C) throw new Error("invalid max value: " + t);
          if (this.#t = t, this.#r = d, this.maxEntrySize = f || this.#r, this.sizeCalculation = p, this.sizeCalculation) {
            if (!this.#r && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== v && "function" != typeof v) throw new TypeError("memoMethod must be a function if defined");
          if (this.#s = v, void 0 !== m && "function" != typeof m) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#o = m, this.#C = !!m, this.#c = new Map, this.#h = new Array(t).fill(void 0), this.#u = new Array(t).fill(void 0), this.#d = new C(t), this.#f = new C(t), this.#p = 0, this.#m = 0, this.#v = Fe.create(t), this.#a = 0, this.#l = 0, "function" == typeof l && (this.#n = l), "function" == typeof c ? (this.#i = c, this.#g = []) : (this.#i = void 0, this.#g = void 0), this.#k = !!this.#n, this.#S = !!this.#i, this.noDisposeOnSet = !!h, this.noUpdateTTL = !!u, this.noDeleteOnFetchRejection = !!g, this.allowStaleOnFetchRejection = !!w, this.allowStaleOnFetchAbort = !!b, this.ignoreFetchAbort = !!k, 0 !== this.maxEntrySize) {
            if (0 !== this.#r && !Oe(this.#r)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!Oe(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#z()
          }
          if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!s, this.ttlResolution = Oe(n) || 0 === n ? n : 1, this.ttlAutopurge = !!i, this.ttl = r || 0, this.ttl) {
            if (!Oe(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#F()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#r) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#r) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !Se.has(e))(e) && (Se.add(e), Ee("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, _e))
          }
        }
        getRemainingTTL(e) {
          return this.#c.has(e) ? 1 / 0 : 0
        }
        #F() {
          const e = new ze(this.#t),
            t = new ze(this.#t);
          this.#b = e, this.#w = t, this.#_ = (r, n, i = Ce.now()) => {
            if (t[r] = 0 !== n ? i : 0, e[r] = n, 0 !== n && this.ttlAutopurge) {
              const e = setTimeout((() => {
                this.#T(r) && this.#R(this.#h[r], "expire")
              }), n + 1);
              e.unref && e.unref()
            }
          }, this.#j = r => {
            t[r] = 0 !== e[r] ? Ce.now() : 0
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
            const e = Ce.now();
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
        #j = () => {};
        #M = () => {};
        #_ = () => {};
        #T = () => !1;
        #z() {
          const e = new ze(this.#t);
          this.#l = 0, this.#y = e, this.#P = t => {
            this.#l -= e[t], e[t] = 0
          }, this.#D = (e, t, r, n) => {
            if (this.#A(t)) return 0;
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
        #P = e => {};
        #I = (e, t, r) => {};
        #D = (e, t, r, n) => {
          if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };* #L({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#a)
            for (let t = this.#m; this.#W(t) && (!e && this.#T(t) || (yield t), t !== this.#p);) t = this.#f[t]
        }* #O({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#a)
            for (let t = this.#p; this.#W(t) && (!e && this.#T(t) || (yield t), t !== this.#m);) t = this.#d[t]
        }
        #W(e) {
          return void 0 !== e && this.#c.get(this.#h[e]) === e
        }* entries() {
          for (const e of this.#L()) void 0 === this.#u[e] || void 0 === this.#h[e] || this.#A(this.#u[e]) || (yield [this.#h[e], this.#u[e]])
        }* rentries() {
          for (const e of this.#O()) void 0 === this.#u[e] || void 0 === this.#h[e] || this.#A(this.#u[e]) || (yield [this.#h[e], this.#u[e]])
        }* keys() {
          for (const e of this.#L()) {
            const t = this.#h[e];
            void 0 === t || this.#A(this.#u[e]) || (yield t)
          }
        }* rkeys() {
          for (const e of this.#O()) {
            const t = this.#h[e];
            void 0 === t || this.#A(this.#u[e]) || (yield t)
          }
        }* values() {
          for (const e of this.#L()) void 0 === this.#u[e] || this.#A(this.#u[e]) || (yield this.#u[e])
        }* rvalues() {
          for (const e of this.#O()) void 0 === this.#u[e] || this.#A(this.#u[e]) || (yield this.#u[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e, t = {}) {
          for (const r of this.#L()) {
            const n = this.#u[r],
              i = this.#A(n) ? n.__staleWhileFetching : n;
            if (void 0 !== i && e(i, this.#h[r], this)) return this.get(this.#h[r], t)
          }
        }
        forEach(e, t = this) {
          for (const r of this.#L()) {
            const n = this.#u[r],
              i = this.#A(n) ? n.__staleWhileFetching : n;
            void 0 !== i && e.call(t, i, this.#h[r], this)
          }
        }
        rforEach(e, t = this) {
          for (const r of this.#O()) {
            const n = this.#u[r],
              i = this.#A(n) ? n.__staleWhileFetching : n;
            void 0 !== i && e.call(t, i, this.#h[r], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (const t of this.#O({
              allowStale: !0
            })) this.#T(t) && (this.#R(this.#h[t], "expire"), e = !0);
          return e
        }
        info(e) {
          const t = this.#c.get(e);
          if (void 0 === t) return;
          const r = this.#u[t],
            n = this.#A(r) ? r.__staleWhileFetching : r;
          if (void 0 === n) return;
          const i = {
            value: n
          };
          if (this.#b && this.#w) {
            const e = this.#b[t],
              r = this.#w[t];
            if (e && r) {
              const t = e - (Ce.now() - r);
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
            const r = this.#h[t],
              n = this.#u[t],
              i = this.#A(n) ? n.__staleWhileFetching : n;
            if (void 0 === i || void 0 === r) continue;
            const o = {
              value: i
            };
            if (this.#b && this.#w) {
              o.ttl = this.#b[t];
              const e = Ce.now() - this.#w[t];
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
              r.start = Ce.now() - e
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
          if (this.maxEntrySize && c > this.maxEntrySize) return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.#R(e, "set"), this;
          let h = 0 === this.#a ? void 0 : this.#c.get(e);
          if (void 0 === h) h = 0 === this.#a ? this.#m : 0 !== this.#v.length ? this.#v.pop() : this.#a === this.#t ? this.#B(!1) : this.#a, this.#h[h] = e, this.#u[h] = t, this.#c.set(e, h), this.#d[this.#m] = h, this.#f[h] = this.#m, this.#m = h, this.#a++, this.#I(h, c, a), a && (a.set = "add"), l = !1;
          else {
            this.#x(h);
            const r = this.#u[h];
            if (t !== r) {
              if (this.#C && this.#A(r)) {
                r.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = r;
                void 0 === t || o || (this.#k && this.#n?.(t, e, "set"), this.#S && this.#g?.push([t, e, "set"]))
              } else o || (this.#k && this.#n?.(r, e, "set"), this.#S && this.#g?.push([r, e, "set"]));
              if (this.#P(h), this.#I(h, c, a), this.#u[h] = t, a) {
                a.set = "replace";
                const e = r && this.#A(r) ? r.__staleWhileFetching : r;
                void 0 !== e && (a.oldValue = e)
              }
            } else a && (a.set = "update")
          }
          if (0 === n || this.#b || this.#F(), this.#b && (l || this.#_(h, n, i), a && this.#M(a, h)), !o && this.#S && this.#g) {
            const e = this.#g;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
          return this
        }
        pop() {
          try {
            for (; this.#a;) {
              const e = this.#u[this.#p];
              if (this.#B(!0), this.#A(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#S && this.#g) {
              const e = this.#g;
              let t;
              for (; t = e?.shift();) this.#i?.(...t)
            }
          }
        }
        #B(e) {
          const t = this.#p,
            r = this.#h[t],
            n = this.#u[t];
          return this.#C && this.#A(n) ? n.__abortController.abort(new Error("evicted")) : (this.#k || this.#S) && (this.#k && this.#n?.(n, r, "evict"), this.#S && this.#g?.push([n, r, "evict"])), this.#P(t), e && (this.#h[t] = void 0, this.#u[t] = void 0, this.#v.push(t)), 1 === this.#a ? (this.#p = this.#m = 0, this.#v.length = 0) : this.#p = this.#d[t], this.#c.delete(r), this.#a--, t
        }
        has(e, t = {}) {
          const {
            updateAgeOnHas: r = this.updateAgeOnHas,
            status: n
          } = t, i = this.#c.get(e);
          if (void 0 !== i) {
            const e = this.#u[i];
            if (this.#A(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#T(i)) return r && this.#j(i), n && (n.has = "hit", this.#M(n, i)), !0;
            n && (n.has = "stale", this.#M(n, i))
          } else n && (n.has = "miss");
          return !1
        }
        peek(e, t = {}) {
          const {
            allowStale: r = this.allowStale
          } = t, n = this.#c.get(e);
          if (void 0 === n || !r && this.#T(n)) return;
          const i = this.#u[n];
          return this.#A(i) ? i.__staleWhileFetching : i
        }
        #E(e, t, r, n) {
          const i = void 0 === t ? void 0 : this.#u[t];
          if (this.#A(i)) return i;
          const o = new xe,
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
              const u = h;
              return this.#u[t] === h && (void 0 === n ? u.__staleWhileFetching ? this.#u[t] = u.__staleWhileFetching : this.#R(e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, n, a.options))), n
            },
            c = n => {
              const {
                aborted: i
              } = o.signal, s = i && r.allowStaleOnFetchAbort, a = s || r.allowStaleOnFetchRejection, l = a || r.noDeleteOnFetchRejection, c = h;
              if (this.#u[t] === h && (l && void 0 !== c.__staleWhileFetching ? s || (this.#u[t] = c.__staleWhileFetching) : this.#R(e, "fetch")), a) return r.status && void 0 !== c.__staleWhileFetching && (r.status.returnedStale = !0), c.__staleWhileFetching;
              if (c.__returned === c) throw n
            };
          r.status && (r.status.fetchDispatched = !0);
          const h = new Promise(((t, n) => {
              const s = this.#o?.(e, i, a);
              s && s instanceof Promise && s.then((e => t(void 0 === e ? void 0 : e)), n), o.signal.addEventListener("abort", (() => {
                r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = e => l(e, !0)))
              }))
            })).then(l, (e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), c(e)))),
            u = Object.assign(h, {
              __abortController: o,
              __staleWhileFetching: i,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, u, {
            ...a.options,
            status: void 0
          }), t = this.#c.get(e)) : this.#u[t] = u, u
        }
        #A(e) {
          if (!this.#C) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof xe
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
            noDeleteOnFetchRejection: h = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: u = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: d = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: f = this.allowStaleOnFetchAbort,
            context: p,
            forceRefresh: m = !1,
            status: v,
            signal: g
          } = t;
          if (!this.#C) return v && (v.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: i,
            status: v
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
            noDeleteOnFetchRejection: h,
            allowStaleOnFetchRejection: u,
            allowStaleOnFetchAbort: f,
            ignoreFetchAbort: d,
            status: v,
            signal: g
          };
          let w = this.#c.get(e);
          if (void 0 === w) {
            v && (v.fetch = "miss");
            const t = this.#E(e, w, y, p);
            return t.__returned = t
          } {
            const t = this.#u[w];
            if (this.#A(t)) {
              const e = r && void 0 !== t.__staleWhileFetching;
              return v && (v.fetch = "inflight", e && (v.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const i = this.#T(w);
            if (!m && !i) return v && (v.fetch = "hit"), this.#x(w), n && this.#j(w), v && this.#M(v, w), t;
            const o = this.#E(e, w, y, p),
              s = void 0 !== o.__staleWhileFetching && r;
            return v && (v.fetch = i ? "stale" : "refresh", s && i && (v.returnedStale = !0)), s ? o.__staleWhileFetching : o.__returned = o
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
            const t = this.#u[s],
              a = this.#A(t);
            return o && this.#M(o, s), this.#T(s) ? (o && (o.get = "stale"), a ? (o && r && void 0 !== t.__staleWhileFetching && (o.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (i || this.#R(e, "expire"), o && r && (o.returnedStale = !0), r ? t : void 0)) : (o && (o.get = "hit"), a ? t.__staleWhileFetching : (this.#x(s), n && this.#j(s), t))
          }
          o && (o.get = "miss")
        }
        #N(e, t) {
          this.#f[t] = e, this.#d[e] = t
        }
        #x(e) {
          e !== this.#m && (e === this.#p ? this.#p = this.#d[e] : this.#N(this.#f[e], this.#d[e]), this.#N(this.#m, e), this.#m = e)
        }
        delete(e) {
          return this.#R(e, "delete")
        }
        #R(e, t) {
          let r = !1;
          if (0 !== this.#a) {
            const n = this.#c.get(e);
            if (void 0 !== n)
              if (r = !0, 1 === this.#a) this.#U(t);
              else {
                this.#P(n);
                const r = this.#u[n];
                if (this.#A(r) ? r.__abortController.abort(new Error("deleted")) : (this.#k || this.#S) && (this.#k && this.#n?.(r, e, t), this.#S && this.#g?.push([r, e, t])), this.#c.delete(e), this.#h[n] = void 0, this.#u[n] = void 0, n === this.#m) this.#m = this.#f[n];
                else if (n === this.#p) this.#p = this.#d[n];
                else {
                  const e = this.#f[n];
                  this.#d[e] = this.#d[n];
                  const t = this.#d[n];
                  this.#f[t] = this.#f[n]
                }
                this.#a--, this.#v.push(n)
              }
          }
          if (this.#S && this.#g?.length) {
            const e = this.#g;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
          return r
        }
        clear() {
          return this.#U("delete")
        }
        #U(e) {
          for (const t of this.#O({
              allowStale: !0
            })) {
            const r = this.#u[t];
            if (this.#A(r)) r.__abortController.abort(new Error("deleted"));
            else {
              const n = this.#h[t];
              this.#k && this.#n?.(r, n, e), this.#S && this.#g?.push([r, n, e])
            }
          }
          if (this.#c.clear(), this.#u.fill(void 0), this.#h.fill(void 0), this.#b && this.#w && (this.#b.fill(0), this.#w.fill(0)), this.#y && this.#y.fill(0), this.#p = 0, this.#m = 0, this.#v.length = 0, this.#l = 0, this.#a = 0, this.#S && this.#g) {
            const e = this.#g;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
        }
      }
      r(90562);
      var Re = new Set,
        je = [],
        Me = [];
      u || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        u = !0, h.push(e)
      })({
        appendCss: e => {
          Me.push(e)
        },
        registerClassName: e => {
          Re.add(e)
        },
        registerComposition: e => {
          je.push(e)
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
            localClassNames: Array.from(Re),
            composedClassLists: je,
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
      new _e({
        max: 500
      })
    },
    86755: e => {
      "use strict";
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
          for (var a = "double" == s.quotes ? '"' : "'", l = s.isIdentifier, c = o.charAt(0), h = "", u = 0, d = o.length; u < d;) {
            var f = o.charAt(u++),
              p = f.charCodeAt(),
              m = void 0;
            if (p < 32 || p > 126) {
              if (p >= 55296 && p <= 56319 && u < d) {
                var v = o.charCodeAt(u++);
                56320 == (64512 & v) ? p = ((1023 & p) << 10) + (1023 & v) + 65536 : u--
              }
              m = "\\" + p.toString(16).toUpperCase() + " "
            } else m = s.escapeEverything ? r.test(f) ? "\\" + f : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(f) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == f || !l && ('"' == f && a == f || "'" == f && a == f) || l && n.test(f) ? "\\" + f : f;
            h += m
          }
          return l && (/^-[-\d]/.test(h) ? h = "\\-" + h.slice(1) : /\d/.test(c) && (h = "\\3" + c + " " + h.slice(1))), h = h.replace(i, (function(e, t, r) {
            return t && t.length % 2 ? e : (t || "") + r
          })), !l && s.wrap ? a + h + a : h
        };
      o.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, o.version = "3.0.0", e.exports = o
    },
    97249: (e, t, r) => {
      "use strict";

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