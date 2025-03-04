! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c72b4400-34bc-4177-9bbb-f5b8f037a191", e._sentryDebugIdIdentifier = "sentry-dbid-c72b4400-34bc-4177-9bbb-f5b8f037a191")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [147], {
    26324: e => {
      var t = {}.hasOwnProperty,
        r = /[ -,\.\/:-@\[-\^`\{-~]/,
        n = /[ -,\.\/:-@\[\]\^`\{-~]/,
        o = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        a = function e(a, i) {
          "single" != (i = function(e, r) {
            if (!e) return r;
            var n = {};
            for (var o in r) n[o] = t.call(e, o) ? e[o] : r[o];
            return n
          }(i, e.options)).quotes && "double" != i.quotes && (i.quotes = "single");
          for (var l = "double" == i.quotes ? '"' : "'", s = i.isIdentifier, c = a.charAt(0), u = "", f = 0, d = a.length; f < d;) {
            var h = a.charAt(f++),
              p = h.charCodeAt(),
              m = void 0;
            if (p < 32 || p > 126) {
              if (p >= 55296 && p <= 56319 && f < d) {
                var v = a.charCodeAt(f++);
                56320 == (64512 & v) ? p = ((1023 & p) << 10) + (1023 & v) + 65536 : f--
              }
              m = "\\" + p.toString(16).toUpperCase() + " "
            } else m = i.escapeEverything ? r.test(h) ? "\\" + h : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(h) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == h || !s && ('"' == h && l == h || "'" == h && l == h) || s && n.test(h) ? "\\" + h : h;
            u += m
          }
          return s && (/^-[-\d]/.test(u) ? u = "\\-" + u.slice(1) : /\d/.test(c) && (u = "\\3" + c + " " + u.slice(1))), u = u.replace(o, (function(e, t, r) {
            return t && t.length % 2 ? e : (t || "") + r
          })), !s && i.wrap ? l + u + l : u
        };
      a.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, a.version = "3.0.0", e.exports = a
    },
    82536: (e, t, r) => {
      r.d(t, {
        Cb: () => n,
        US: () => o,
        xW: () => a,
        HZ: () => i,
        X6: () => l
      });
      var n = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        o = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        a = {
          dark: "foundry_nu8bkpar",
          darkHc: "foundry_nu8bkpat",
          light: "foundry_nu8bkpaq",
          lightHc: "foundry_nu8bkpas",
          tokens: "foundry_nu8bkp1"
        },
        i = "--foundry_nu8bkp0",
        l = "foundry_nu8bkp1"
    },
    87882: (e, t, r) => {
      r.d(t, {
        UP: () => l,
        ic: () => f,
        qn: () => y,
        Pt: () => w,
        Rv: () => g,
        iQ: () => p,
        Mk: () => h,
        UQ: () => u,
        gr: () => m,
        Ub: () => a,
        jt: () => s,
        ZC: () => i,
        rl: () => v
      });
      var n = r(83540),
        o = r(62229);

      function a(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const a = e => n.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [i, l] = (0, o.useState)((() => r ? a(e) : t));

        function s() {
          l(a(e))
        }
        return (0, o.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return s(), t?.addListener ? t?.addListener(s) : t?.addEventListener("change", s), () => {
            t?.removeListener ? t?.removeListener(s) : t?.removeEventListener("change", s)
          }
        }), [e]), i
      }

      function i(e) {
        const t = (0, o.useRef)({
            value: e,
            prev: void 0
          }),
          r = t.current.value;
        return e !== r && (t.current = {
          value: e,
          prev: r
        }), t.current.prev
      }

      function l(...e) {
        const t = (0, o.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      const s = () => a("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function c(e) {
        const t = (0, o.useRef)(e);
        return (0, o.useEffect)((() => {
          t.current = e
        })), (0, o.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      const u = ({
        activity: e,
        leave: t,
        enabled: r = !0
      }) => {
        const n = (0, o.useRef)(),
          [a, i] = (0, o.useState)(!1),
          l = (0, o.useCallback)((() => {
            i(!0)
          }), []),
          s = (0, o.useCallback)(((t, r) => {
            let o = 0;
            return (...t) => {
              const r = Date.now();
              r - o >= 500 && (o = r, (() => {
                i(!1), window.clearTimeout(n.current), n.current = window.setTimeout(l, e)
              })(...t))
            }
          })(), []),
          c = (0, o.useCallback)((() => {
            window.clearTimeout(n.current), n.current = window.setTimeout(l, t)
          }), []),
          u = (0, o.useCallback)((() => {
            document.hidden || s()
          }), []);
        return (0, o.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", s), window.removeEventListener("mousedown", s), window.removeEventListener("resize", s), window.removeEventListener("keydown", s), window.removeEventListener("touchstart", s), window.removeEventListener("wheel", s), document.removeEventListener("mouseleave", c), document.removeEventListener("visibilitychange", u), window.clearTimeout(n.current), i(!1)
          };
          return r ? (window.addEventListener("mousemove", s), window.addEventListener("mousedown", s), window.addEventListener("resize", s), window.addEventListener("keydown", s), window.addEventListener("touchstart", s), window.addEventListener("wheel", s), document.addEventListener("mouseleave", c), document.addEventListener("visibilitychange", u), s()) : e(), () => e()
        }), [r]), {
          isIdle: a
        }
      };

      function f({
        prop: e,
        defaultProp: t,
        onChange: r = (() => {})
      }) {
        const [n, a] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, o.useState)(e),
            [n] = r,
            a = (0, o.useRef)(n),
            i = c(t);
          return (0, o.useEffect)((() => {
            a.current !== n && (i(n), a.current = n)
          }), [n, a, i]), r
        }({
          defaultProp: t,
          onChange: r
        }), i = void 0 !== e, l = i ? e : n, s = c(r), u = (0, o.useCallback)((t => {
          if (i) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && s(r)
          } else a(t)
        }), [i, e, a, s]);
        return [l, u]
      }

      function d(e, t, r, n) {
        const a = (0, o.useRef)(t);
        (0, o.useEffect)((() => {
          a.current = t
        }), [t]), (0, o.useEffect)((() => {
          const t = r?.current ?? window;
          if (!t || !t.addEventListener) return;
          const o = e => {
            a.current(e)
          };
          return t.addEventListener(e, o, n), () => {
            t.removeEventListener(e, o, n)
          }
        }), [e, r?.current, n])
      }
      const h = ({
          enabled: e,
          ref: t
        }) => {
          const [r, n] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
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
          enabled: e,
          ref: t
        }) => {
          const [r, n] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            n(!1)
          }), [t.current]), d("focusin", (() => {
            n(!0)
          }), t), d("focusout", (() => {
            n(!1)
          }), t), {
            isFocused: !!e && r
          }
        },
        m = ({
          enabled: e = !0
        }) => {
          const [t, r] = (0, o.useState)(!1), [n, a] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            e || (r(!1), a(!1))
          }), [e]), {
            eventHandlers: {
              onLoad: () => {
                e && (a(!0), r(!1))
              },
              onAbort: () => {
                e && (a(!0), r(!1))
              },
              onError: () => {
                e && (a(!0), r(!1))
              }
            },
            error: t,
            loaded: n
          }
        };

      function v(e = !0) {
        return !!e && a("screen and (pointer: coarse) and (hover: none)")
      }
      const g = ({
          enabled: e = !0,
          latency: t = 300,
          onDoubleClick: r = (() => null),
          onSingleClick: n = (() => null)
        }) => {
          const a = (0, o.useRef)(0),
            i = (0, o.useRef)();
          return {
            handleClick: o => {
              e && (a.current += 1, i.current = setTimeout((() => {
                1 === a.current ? n(o) : 2 === a.current && r(o), a.current = 0
              }), t))
            }
          }
        },
        y = (e, t = []) => {
          const r = (0, o.useRef)(!1);
          (0, o.useEffect)((() => (r.current = !0, () => {
            r.current = !1
          })), []), (0, o.useEffect)((() => {
            r.current && e()
          }), [...t])
        };

      function w() {
        return {
          countWrappedElements: e => {
            if (!e.current) return;
            const {
              children: t
            } = e.current;
            let r = 0,
              n = 0;
            return Array.from(t).map(((e, t) => {
              const o = e.getBoundingClientRect().top,
                a = e.getBoundingClientRect().height;
              return 0 === t && (r = o, n = a), o
            })).filter((e => e >= r + n)).length
          }
        }
      }
    },
    83919: (e, t, r) => {
      r.d(t, {
        DX: () => i,
        xV: () => s,
        s6: () => p
      });
      var n = r(18751),
        o = r(62229);

      function a(...e) {
        return t => e.forEach((e => function(e, t) {
          "function" == typeof e ? e(t) : null != e && (e.current = t)
        }(e, t)))
      }
      const i = (0, o.forwardRef)(((e, t) => {
        const {
          children: r,
          ...a
        } = e, i = o.Children.toArray(r), s = i.find(c);
        if (s) {
          const e = s.props.children,
            r = i.map((t => t === s ? o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null : t));
          return (0, o.createElement)(l, (0, n.A)({}, a, {
            ref: t
          }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, r) : null)
        }
        return (0, o.createElement)(l, (0, n.A)({}, a, {
          ref: t
        }), r)
      }));
      i.displayName = "Slot";
      const l = (0, o.forwardRef)(((e, t) => {
        const {
          children: r,
          ...n
        } = e;
        return (0, o.isValidElement)(r) ? (0, o.cloneElement)(r, {
          ...u(n, r.props),
          ref: t ? a(t, r.ref) : r.ref
        }) : o.Children.count(r) > 1 ? o.Children.only(null) : null
      }));
      l.displayName = "SlotClone";
      const s = ({
        children: e
      }) => (0, o.createElement)(o.Fragment, null, e);

      function c(e) {
        return (0, o.isValidElement)(e) && e.type === s
      }

      function u(e, t) {
        const r = {
          ...t
        };
        for (const n in t) {
          const o = e[n],
            a = t[n];
          /^on[A-Z]/.test(n) ? o && a ? r[n] = (...e) => {
            a(...e), o(...e)
          } : o && (r[n] = o) : "style" === n ? r[n] = {
            ...o,
            ...a
          } : "className" === n && (r[n] = [o, a].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...r
        }
      }
      var f = r(91029);
      r(44853);
      const d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const r = (0, o.forwardRef)(((e, r) => {
            const {
              asChild: a,
              ...l
            } = e, s = a ? i : t;
            return (0, o.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, o.createElement)(s, (0, n.A)({}, l, {
              ref: r
            }))
          }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {}),
        h = (0, o.forwardRef)(((e, t) => (0, o.createElement)(d.span, (0, n.A)({}, e, {
          ref: t,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
          }
        })))),
        p = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? h : o.Fragment;
          return (0, f.jsx)(r, {
            ...t
          })
        }
    },
    20147: (e, t, r) => {
      r.d(t, {
        NP: () => Ne,
        Ym: () => je,
        DP: () => Le
      });
      var n = r(91029),
        o = {},
        a = r(26324),
        i = r.n(a);
      class l {
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
          for (const o of e) {
            let e = 0;
            for (const a of o) t[e] && a in t[e] ? e = t[e][a] : (n++, t[e][a] = n, t[n] = {}, e = n, r[n] = []);
            r[e].push(o)
          }
          const o = {},
            a = [];
          for (const e in t[0]) {
            const r = t[0][e];
            o[r] = 0, a.push(r)
          }
          for (; a.length > 0;) {
            const e = a.shift();
            if (void 0 !== e)
              for (const n in t[e]) {
                const i = t[e][n];
                a.push(i);
                let l = o[e];
                for (; l > 0 && !(n in t[l]);) l = o[l];
                if (n in t[l]) {
                  const e = t[l][n];
                  o[i] = e, r[i] = [...r[i], ...r[e]]
                } else o[i] = 0
              }
          }
          return {
            gotoFn: t,
            output: r,
            failure: o
          }
        }
        search(e) {
          let t = 0;
          const r = [];
          for (let n = 0; n < e.length; n++) {
            const o = e[n];
            for (; t > 0 && !(o in this.gotoFn[t]);) t = this.failure[t];
            if (o in this.gotoFn[t] && (t = this.gotoFn[t][o], this.output[t].length > 0)) {
              const e = this.output[t];
              r.push([n, e])
            }
          }
          return r
        }
      }
      var s, c, u = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        f = !1;

      function d(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(s || (s = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(c || (c = {}));
      const h = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        p = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        m = new Map([
          [126, c.Element],
          [94, c.Start],
          [36, c.End],
          [42, c.Any],
          [33, c.Not],
          [124, c.Hyphen]
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
        let n = [];

        function o(e) {
          const n = t.slice(r + e).match(h);
          if (!n) throw new Error(`Expected name, found ${t.slice(r)}`);
          const [o] = n;
          return r += e + o.length, w(o)
        }

        function a(e) {
          for (r += e; r < t.length && k(t.charCodeAt(r));) r++
        }

        function i() {
          const e = r += 1;
          let n = 1;
          for (; n > 0 && r < t.length; r++) 40 !== t.charCodeAt(r) || l(r) ? 41 !== t.charCodeAt(r) || l(r) || n-- : n++;
          if (n) throw new Error("Parenthesis not matched");
          return w(t.slice(e, r - 1))
        }

        function l(e) {
          let r = 0;
          for (; 92 === t.charCodeAt(--e);) r++;
          return 1 == (1 & r)
        }

        function u() {
          if (n.length > 0 && function(e) {
              switch (e.type) {
                case s.Adjacent:
                case s.Child:
                case s.Descendant:
                case s.Parent:
                case s.Sibling:
                case s.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(n[n.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function f(e) {
          n.length > 0 && n[n.length - 1].type === s.Descendant ? n[n.length - 1].type = e : (u(), n.push({
            type: e
          }))
        }

        function d(e, t) {
          n.push({
            type: s.Attribute,
            name: e,
            action: t,
            value: o(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function p() {
          if (n.length && n[n.length - 1].type === s.Descendant && n.pop(), 0 === n.length) throw new Error("Empty sub-selector");
          e.push(n)
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
              0 !== n.length && n[0].type === s.Descendant || (u(), n.push({
                type: s.Descendant
              })), a(1);
              break;
            case 62:
              f(s.Child), a(1);
              break;
            case 60:
              f(s.Parent), a(1);
              break;
            case 126:
              f(s.Sibling), a(1);
              break;
            case 43:
              f(s.Adjacent), a(1);
              break;
            case 46:
              d("class", c.Element);
              break;
            case 35:
              d("id", c.Equals);
              break;
            case 91: {
              let e;
              a(1);
              let i = null;
              124 === t.charCodeAt(r) ? e = o(1) : t.startsWith("*|", r) ? (i = "*", e = o(2)) : (e = o(0), 124 === t.charCodeAt(r) && 61 !== t.charCodeAt(r + 1) && (i = e, e = o(1))), a(0);
              let u = c.Exists;
              const f = m.get(t.charCodeAt(r));
              if (f) {
                if (u = f, 61 !== t.charCodeAt(r + 1)) throw new Error("Expected `=`");
                a(2)
              } else 61 === t.charCodeAt(r) && (u = c.Equals, a(1));
              let d = "",
                h = null;
              if ("exists" !== u) {
                if (b(t.charCodeAt(r))) {
                  const e = t.charCodeAt(r);
                  let n = r + 1;
                  for (; n < t.length && (t.charCodeAt(n) !== e || l(n));) n += 1;
                  if (t.charCodeAt(n) !== e) throw new Error("Attribute value didn't end");
                  d = w(t.slice(r + 1, n)), r = n + 1
                } else {
                  const e = r;
                  for (; r < t.length && (!k(t.charCodeAt(r)) && 93 !== t.charCodeAt(r) || l(r));) r += 1;
                  d = w(t.slice(e, r))
                }
                a(0);
                const e = 32 | t.charCodeAt(r);
                115 === e ? (h = !1, a(1)) : 105 === e && (h = !0, a(1))
              }
              if (93 !== t.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const p = {
                type: s.Attribute,
                name: e,
                action: u,
                value: d,
                namespace: i,
                ignoreCase: h
              };
              n.push(p);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(r + 1)) {
                n.push({
                  type: s.PseudoElement,
                  name: o(2).toLowerCase(),
                  data: 40 === t.charCodeAt(r) ? i() : null
                });
                continue
              }
              const e = o(1).toLowerCase();
              let a = null;
              if (40 === t.charCodeAt(r))
                if (v.has(e)) {
                  if (b(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (a = [], r = S(a, t, r + 1), 41 !== t.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  r += 1
                } else {
                  if (a = i(), g.has(e)) {
                    const e = a.charCodeAt(0);
                    e === a.charCodeAt(a.length - 1) && b(e) && (a = a.slice(1, -1))
                  }
                  a = w(a)
                } n.push({
                type: s.Pseudo,
                name: e,
                data: a
              });
              break
            }
            case 44:
              p(), n = [], a(1);
              break;
            default: {
              if (t.startsWith("/*", r)) {
                const e = t.indexOf("*/", r + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                r = e + 2, 0 === n.length && a(0);
                break
              }
              let i, l = null;
              if (42 === e) r += 1, i = "*";
              else if (124 === e) {
                if (i = "", 124 === t.charCodeAt(r + 1)) {
                  f(s.ColumnCombinator), a(2);
                  break
                }
              } else {
                if (!h.test(t.slice(r))) break e;
                i = o(0)
              }
              124 === t.charCodeAt(r) && 124 !== t.charCodeAt(r + 1) && (l = i, 42 === t.charCodeAt(r + 1) ? (i = "*", r += 2) : i = o(1)), n.push("*" === i ? {
                type: s.Universal,
                namespace: l
              } : {
                type: s.Tag,
                name: i,
                namespace: l
              })
            }
          }
        }
        return p(), r
      }

      function E(e, t) {
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
          t % 2 ? E(Object(r), !0).forEach((function(t) {
            O(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function O(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" != typeof n) return n;
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
      const x = function e(t) {
        return r.withOptions = r => e(A(A({}, t), r)), r;

        function r(e, ...r) {
          const n = "string" == typeof e ? [e] : e.raw,
            {
              escapeSpecialCharacters: o = Array.isArray(e)
            } = t;
          let a = "";
          for (let e = 0; e < n.length; e++) {
            let t = n[e];
            o && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), a += t, e < r.length && (a += r[e])
          }
          const i = a.split("\n");
          let l = null;
          for (const e of i) {
            const t = e.match(/^(\s+)\S+/);
            if (t) {
              const e = t[1].length;
              l = l ? Math.min(l, e) : e
            }
          }
          if (null !== l) {
            const e = l;
            a = i.map((t => " " === t[0] || "\t" === t[0] ? t.slice(e) : t)).join("\n")
          }
          return a = a.trim(), o && (a = a.replace(/\\n/g, "\n")), a
        }
      }({});
      var P = function() {
        return P = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, P.apply(this, arguments)
      };

      function L(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }

      function j(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, a = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = a.next()).done;) i.push(n.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = a.return) && r.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return i
      }
      var R, I = /(\u000D|\u000C|\u000D\u000A)/g,
        M = /[\u0000\uD800-\uDFFF]/g,
        T = /(\/\*)[\s\S]*?(\*\/)/g,
        N = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), n = [], o = t + 1; o < e.length; o += 1) {
            var a = e.charCodeAt(o);
            if (a === r) return [o, String.fromCharCode.apply(null, n)];
            if (92 === a) {
              var i = _(e, o);
              if (null === i) return null;
              var l = j(i, 2),
                s = l[0],
                c = l[1];
              n.push(c), o = s
            } else {
              if (10 === a) return null;
              n.push(a)
            }
          }
          return null
        },
        B = function(e, t) {
          if (e.length <= t) return !1;
          var r, n = e.charCodeAt(t);
          return 45 === n ? !(e.length <= t + 1) && (45 === (r = e.charCodeAt(t + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 1) && 10 !== (r = e.charCodeAt(t + 1))
        },
        _ = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var r = e.charCodeAt(t + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var n = [r], o = Math.min(t + 7, e.length), a = t + 2; a < o; a += 1) {
              var i = e.charCodeAt(a);
              if (!(i >= 48 && i <= 57 || i >= 65 && i <= 70 || i >= 97 && i <= 102)) break;
              n.push(i)
            }
            if (a < e.length) {
              var l = e.charCodeAt(a);
              9 !== l && 32 !== l && 10 !== l || (a += 1)
            }
            return [a - 1, parseInt(String.fromCharCode.apply(null, n), 16)]
          }
          return [t + 1, r]
        },
        D = function(e, t) {
          var r = q(e, t);
          if (null === r) return null;
          var n = j(r, 3),
            o = n[0],
            a = n[1],
            i = n[2],
            l = F(e, o + 1);
          if (null !== l) {
            var s = j(l, 2);
            return [s[0],
              ["<dimension-token>", a, s[1]]
            ]
          }
          return o + 1 < e.length && 37 === e.charCodeAt(o + 1) ? [o + 1, ["<percentage-token>", a]] : [o, ["<number-token>", a, i]]
        },
        q = function(e, t) {
          if (e.length <= t) return null;
          var r = "integer",
            n = [],
            o = e.charCodeAt(t);
          for (43 !== o && 45 !== o || (t += 1, 45 === o && n.push(45)); t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1;
          if (t + 1 < e.length) {
            var a = e.charCodeAt(t),
              i = e.charCodeAt(t + 1);
            if (46 === a && i >= 48 && i <= 57)
              for (n.push(a, i), r = "number", t += 2; t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1
          }
          if (t + 1 < e.length) {
            a = e.charCodeAt(t), i = e.charCodeAt(t + 1);
            var l = e.charCodeAt(t + 2);
            if (69 === a || 101 === a) {
              var s = i >= 48 && i <= 57;
              if (s || (43 === i || 45 === i) && l >= 48 && l <= 57)
                for (r = "number", s ? (n.push(69, i), t += 2) : 45 === i ? (n.push(69, 45, l), t += 3) : (n.push(69, l), t += 3); t < e.length;) {
                  var c;
                  if (!((c = e.charCodeAt(t)) >= 48 && c <= 57)) break;
                  n.push(c), t += 1
                }
            }
          }
          var u = String.fromCharCode.apply(null, n),
            f = "number" === r ? parseFloat(u) : parseInt(u);
          return -0 === f && (f = 0), Number.isNaN(f) ? null : [t - 1, f, r]
        },
        z = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var o = _(e, t);
              if (null === o) break;
              var a = j(o, 2),
                i = a[0],
                l = a[1];
              r.push(l), t = i
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        F = function(e, t) {
          if (e.length <= t || !B(e, t)) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var o = _(e, t);
              if (null === o) break;
              var a = j(o, 2),
                i = a[0],
                l = a[1];
              r.push(l), t = i
            } return [t - 1, String.fromCharCode.apply(null, r)]
        },
        U = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var n = [], o = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, n)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) o || 0 === n.length || (o = !0);
            else if (92 === r) {
              var a = _(e, t);
              if (null === a || o) return null;
              var i = j(a, 2),
                l = i[0],
                s = i[1];
              n.push(s), t = l
            } else {
              if (o) return null;
              n.push(r)
            }
            r = e.charCodeAt(++t)
          }
          return null
        },
        W = function(e, t) {
          var r = F(e, t);
          if (null === r) return null;
          var n = j(r, 2),
            o = n[0],
            a = n[1];
          if ("url" === a.toLowerCase()) {
            if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) {
              for (var i = 2; o + i < e.length; i += 1) {
                var l = e.charCodeAt(o + i);
                if (34 === l || 39 === l) return [o + 1, a.toLowerCase(), "<function-token>"];
                if (9 !== l && 32 !== l && 10 !== l) {
                  var s = U(e, o + i);
                  if (null === s) return null;
                  var c = j(s, 2);
                  return [c[0], c[1], "<url-token>"]
                }
              }
              return [o + 1, a.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) return [o + 1, a.toLowerCase(), "<function-token>"];
          return [o, a.toLowerCase(), "<ident-token>"]
        },
        $ = function(e) {
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
              var o = e(n);
              if (null === o.operator && 1 === o.children.length) t.children[r] = o.children[0];
              else if (o.operator === t.operator && ("and" === o.operator || "or" === o.operator)) {
                for (var a = [r, 1], i = 0; i < o.children.length; i++) a.push(o.children[i]);
                t.children.splice.apply(t.children, a)
              }
            }
          }
          return t
        },
        V = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        X = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(I, "\n").replace(M, "�")).replace(T, "");
            for (var r = []; t < e.length; t += 1) {
              var n = e.charCodeAt(t);
              if (9 === n || 32 === n || 10 === n) {
                for (var o = e.charCodeAt(++t); 9 === o || 32 === o || 10 === o;) o = e.charCodeAt(++t);
                t -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === n) {
                if (null === (A = N(e, t))) return null;
                var a = j(A, 2),
                  i = a[0],
                  l = a[1];
                r.push({
                  type: "<string-token>",
                  value: l
                }), t = i
              } else if (35 === n) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var s = B(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (A = z(e, t + 1))) {
                    var c = j(A, 2);
                    i = c[0], l = c[1], r.push({
                      type: "<hash-token>",
                      value: l.toLowerCase(),
                      flag: s
                    }), t = i;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (39 === n) {
                if (null === (A = N(e, t))) return null;
                var u = j(A, 2);
                i = u[0], l = u[1], r.push({
                  type: "<string-token>",
                  value: l
                }), t = i
              } else if (40 === n) r.push({
                type: "<(-token>"
              });
              else if (41 === n) r.push({
                type: "<)-token>"
              });
              else if (43 === n) {
                var f = D(e, t);
                if (null === f) r.push({
                  type: "<delim-token>",
                  value: n
                });
                else {
                  var d = j(f, 2);
                  i = d[0], "<dimension-token>" === (S = d[1])[0] ? r.push({
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
                  }), t = i
                }
              } else if (44 === n) r.push({
                type: "<comma-token>"
              });
              else if (45 === n) {
                if (null !== (y = D(e, t))) {
                  var h = j(y, 2);
                  i = h[0], "<dimension-token>" === (S = h[1])[0] ? r.push({
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
                  }), t = i;
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
                if (null !== (A = W(e, t))) {
                  var v = j(A, 3),
                    g = (i = v[0], l = v[1], v[2]);
                  r.push({
                    type: g,
                    value: l
                  }), t = i;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (46 === n) {
                var y;
                if (null !== (y = D(e, t))) {
                  var w = j(y, 2);
                  i = w[0], "<dimension-token>" === (S = w[1])[0] ? r.push({
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
                  }), t = i;
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
                if (null !== (A = F(e, t + 1))) {
                  var k = j(A, 2);
                  i = k[0], l = k[1], r.push({
                    type: "<at-keyword-token>",
                    value: l.toLowerCase()
                  }), t = i;
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
                if (null === (A = _(e, t))) return null;
                var C = j(A, 2);
                i = C[0], l = C[1], e = e.slice(0, t) + l + e.slice(i + 1), t -= 1
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
                var S, E = j(A = D(e, t), 2);
                i = E[0], "<dimension-token>" === (S = E[1])[0] ? r.push({
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
                }), t = i
              } else if (95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128) {
                var A;
                if (null === (A = W(e, t))) return null;
                var O = j(A, 3);
                i = O[0], l = O[1], g = O[2], r.push({
                  type: g,
                  value: l
                }), t = i
              } else r.push({
                type: "<delim-token>",
                value: n
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(e.trim());
          if (null === t) throw V("Failed tokenizing");
          var r = 0,
            n = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw V("Expected whitespace after media");
            r = 2;
            for (var o = 2; o < t.length - 1; o++) {
              var a = t[o];
              if ("<{-token>" === a.type) {
                n = o;
                break
              }
              if ("<semicolon-token>" === a.type) throw V("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(r, n), Q(t)
        },
        Z = function(e) {
          for (var t = [], r = !1, n = 0; n < e.length; n++) "<whitespace-token>" === e[n].type ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(P(P({}, e[n]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return t
        },
        Q = function(e) {
          for (var t, r, n = [
              []
            ], o = 0; o < e.length; o++) {
            var a = e[o];
            "<comma-token>" === a.type ? n.push([]) : n[n.length - 1].push(a)
          }
          var i = n.map(Z);
          if (1 === i.length && 0 === i[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var l = i.map((function(e) {
              return 0 === e.length ? null : G(e)
            })),
            s = [];
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
              }(l), u = c.next(); !u.done; u = c.next()) {
              var f = u.value;
              null !== f && s.push(f)
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
          if (0 === s.length) throw V("No valid media queries");
          return s
        },
        G = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Y(e, !0)
            }
          } catch (e) {
            throw V("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw V("Expected media condition or media prefix");
            var r = null,
              n = void 0,
              o = t.value;
            "only" !== o && "not" !== o || (r = o);
            var a = null === r ? 0 : 1;
            if (e.length <= a) throw V("Expected extra token in media query");
            var i = e[a];
            if ("<ident-token>" === i.type) {
              var l = i.value;
              if ("all" === l) n = "all";
              else if ("print" === l || "screen" === l) n = l;
              else {
                if ("tty" !== l && "tv" !== l && "projection" !== l && "handheld" !== l && "braille" !== l && "embossed" !== l && "aural" !== l && "speech" !== l) throw V("Unknown ident '".concat(l, "' in media query"));
                r = "not" === r ? null : "not", n = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== i.type) throw V("Invalid media query");
              var s = [{
                type: "<(-token>",
                wsBefore: !1,
                wsAfter: !1
              }];
              s.push.apply(s, e), s.push({
                type: "<)-token>",
                wsBefore: !1,
                wsAfter: !1
              });
              try {
                return {
                  mediaPrefix: null,
                  mediaType: "all",
                  mediaCondition: Y(s, !0)
                }
              } catch (e) {
                throw V("Expected media condition after '('", e)
              }
            }
            if (a + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: n,
              mediaCondition: null
            };
            if (!(a + 4 < e.length)) throw V("Expected media condition after media prefix");
            var c = e[a + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw V("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: n,
                mediaCondition: Y(e.slice(a + 2), !1)
              }
            } catch (e) {
              throw V("Expected media condition after 'and'", e)
            }
          }
        },
        Y = function e(t, r, n) {
          if (void 0 === n && (n = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var o, a = t.length - 1, i = 0, l = 0, s = 0; s < t.length; s++) {
            var c = t[s];
            if ("<(-token>" === c.type ? (l += 1, i = Math.max(i, l)) : "<)-token>" === c.type && (l -= 1), 0 === l) {
              a = s;
              break
            }
          }
          if (0 !== l) throw new Error("Mismatched parens\nInvalid media condition");
          var u = t.slice(0, a + 1);
          if (o = 1 === i ? J(u) : "<ident-token>" === u[1].type && "not" === u[1].value ? e(u.slice(2, -1), !0, "not") : e(u.slice(1, -1), !0), a === t.length - 1) return {
            operator: n,
            children: [o]
          };
          var f = t[a + 1];
          if ("<ident-token>" !== f.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== n && n !== f.value) throw new Error("'".concat(f.value, "' and '").concat(n, "' must not be at same level\nInvalid media condition"));
          if ("or" === f.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== f.value && "or" !== f.value) throw new Error("Invalid operator: '".concat(f.value, "'\nInvalid media condition"));
          var d = e(t.slice(a + 2), r, f.value);
          return {
            operator: f.value,
            children: [o].concat(d.children)
          }
        },
        J = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], r = 1; r < e.length; r++) {
            if (r < e.length - 2) {
              var n = e[r],
                o = e[r + 1],
                a = e[r + 2];
              if ("<number-token>" === n.type && n.value > 0 && "<delim-token>" === o.type && 47 === o.value && "<number-token>" === a.type && a.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: n.value,
                  denominator: a.value,
                  wsBefore: n.wsBefore,
                  wsAfter: a.wsAfter
                }), r += 2;
                continue
              }
            }
            t.push(e[r])
          }
          var i = t[1];
          if ("<ident-token>" === i.type && 3 === t.length) return {
            context: "boolean",
            feature: i.value
          };
          if (5 === t.length && "<ident-token>" === t[1].type && "<colon-token>" === t[2].type) {
            var l = t[3];
            if ("<number-token>" === l.type || "<dimension-token>" === l.type || "<ratio-token>" === l.type || "<ident-token>" === l.type) {
              var s = t[1].value,
                c = null,
                u = s.slice(0, 4);
              return "min-" === u ? (c = "min", s = s.slice(4)) : "max-" === u && (c = "max", s = s.slice(4)), l.wsBefore, l.wsAfter, {
                context: "value",
                prefix: c,
                feature: s,
                value: L(l, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var f = K(t);
            return {
              context: "range",
              feature: f.featureName,
              range: f
            }
          } catch (e) {
            throw V("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        K = function(e) {
          var t, r, n, o;
          if (e.length < 5 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid range");
          var a = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            i = "<number-token>" === e[1].type || "<dimension-token>" === e[1].type || "<ratio-token>" === e[1].type || "<ident-token>" === e[1].type && "infinite" === e[1].value;
          if ("<delim-token>" === e[2].type) {
            if (60 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? a[i ? "leftOp" : "rightOp"] = "<" : a[i ? "leftOp" : "rightOp"] = "<=";
            else if (62 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? a[i ? "leftOp" : "rightOp"] = ">" : a[i ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== e[2].value) throw new Error("Invalid range");
              a[i ? "leftOp" : "rightOp"] = "="
            }
            if (i) a.leftToken = e[1];
            else {
              if ("<ident-token>" !== e[1].type) throw new Error("Invalid range");
              a.featureName = e[1].value
            }
            var l = 2 + (null !== (r = null === (t = a[i ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0),
              s = e[l];
            if (i) {
              if ("<ident-token>" !== s.type) throw new Error("Invalid range");
              if (a.featureName = s.value, e.length >= 7) {
                var c = e[l + 1],
                  u = e[l + 2];
                if ("<delim-token>" !== c.type) throw new Error("Invalid range");
                var f = c.value;
                if (60 === f) "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? a.rightOp = "<" : a.rightOp = "<=";
                else {
                  if (62 !== f) throw new Error("Invalid range");
                  "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? a.rightOp = ">" : a.rightOp = ">="
                }
                var d = e[l + 1 + (null !== (o = null === (n = a.rightOp) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0)];
                a.rightToken = d
              } else if (l + 2 !== e.length) throw new Error("Invalid range")
            } else a.rightToken = s;
            var h = null,
              p = a.leftToken,
              m = a.leftOp,
              v = a.featureName,
              g = a.rightOp,
              y = a.rightToken,
              w = null;
            if (null !== p)
              if ("<ident-token>" === p.type) {
                var b = p.type;
                "infinite" === (C = p.value) && (w = {
                  type: b,
                  value: C
                })
              } else "<number-token>" !== p.type && "<dimension-token>" !== p.type && "<ratio-token>" !== p.type || (p.wsBefore, p.wsAfter, w = L(p, ["wsBefore", "wsAfter"]));
            var k = null;
            if (null !== y)
              if ("<ident-token>" === y.type) {
                var C;
                b = y.type, "infinite" === (C = y.value) && (k = {
                  type: b,
                  value: C
                })
              } else "<number-token>" !== y.type && "<dimension-token>" !== y.type && "<ratio-token>" !== y.type || (y.wsBefore, y.wsAfter, k = L(y, ["wsBefore", "wsAfter"]));
            if (null !== w && null !== k)
              if ("<" !== m && "<=" !== m || "<" !== g && "<=" !== g) {
                if (">" !== m && ">=" !== m || ">" !== g && ">=" !== g) throw new Error("Invalid range");
                h = {
                  leftToken: w,
                  leftOp: m,
                  featureName: v,
                  rightOp: g,
                  rightToken: k
                }
              } else h = {
                leftToken: w,
                leftOp: m,
                featureName: v,
                rightOp: g,
                rightToken: k
              };
            else(null === w && null === m && null !== g && null !== k || null !== w && null !== m && null === g && null === k) && (h = {
              leftToken: w,
              leftOp: m,
              featureName: v,
              rightOp: g,
              rightToken: k
            });
            return h
          }
          throw new Error("Invalid range")
        };

      function ee(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
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
            var n, o, a;
            n = e, o = t, a = r[t], (o = ee(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : te(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function ne(e, t) {
        if (null == e) return {};
        var r, n, o = function(e, t) {
          if (null == e) return {};
          var r, n, o = {},
            a = Object.keys(e);
          for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
        }
        return o
      }

      function oe(e, t) {
        for (var r in e) t(e[r], r)
      }

      function ae(e, t) {
        var r = {};
        for (var n in e) - 1 === t.indexOf(n) && (r[n] = e[n]);
        return r
      }
      class ie {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new ie
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
            var o, a = t[n],
              i = null !== (o = r.precedenceLookup.get(a)) && void 0 !== o ? o : new Set;
            for (var l of t.slice(n + 1)) i.add(l);
            r.precedenceLookup.set(a, i)
          }
        }
        isCompatible(e) {
          for (var [t, r] of this.precedenceLookup.entries())
            for (var n of r) {
              var o;
              if (null !== (o = e.precedenceLookup.get(n)) && void 0 !== o && o.has(t)) return !1
            }
          for (var {
              query: a,
              children: i
            }
            of e.ruleset.values()) {
            var l = this.ruleset.get(a);
            if (l && !l.children.isCompatible(i)) return !1
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
            var o = this.ruleset.get(t);
            o ? (o.rules.push(...r), o.children.merge(n)) : this.ruleset.set(t, {
              query: t,
              rules: r,
              children: n
            })
          }
          for (var [a, i] of e.precedenceLookup.entries()) {
            var l, s = null !== (l = this.precedenceLookup.get(a)) && void 0 !== l ? l : new Set;
            this.precedenceLookup.set(a, new Set([...s, ...i]))
          }
        }
        mergeIfCompatible(e) {
          return !!this.isCompatible(e) && (this.merge(e), !0)
        }
        getSortedRuleset() {
          var e = this,
            t = [],
            r = function(r) {
              var o = e.ruleset.get(n);
              if (!o) throw new Error("Can't find condition for ".concat(n));
              var a = t.findIndex((e => r.has(e.query)));
              a > -1 ? t.splice(a, 0, o) : t.push(o)
            };
          for (var [n, o] of this.precedenceLookup.entries()) r(o);
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
            var o = {};
            for (var a of r) o[a.selector] = a.rule;
            Object.assign(o, ...n.renderToArray()), e.push({
              [t]: o
            })
          }
          return e
        }
      }
      var le, se = {
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
        ce = Object.keys(se),
        ue = se,
        fe = (e, t) => new Error(x(le || (le = d(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        de = e => {
          if ("@media " === e) throw fe(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = $(e[t])
            })(X(e))
          } catch (t) {
            throw fe(e, t.message)
          }
        },
        he = ["vars"],
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
        var o = e.slice(0, t),
          a = e.slice(r);
        return "".concat(o).concat(n).concat(a)
      }
      var ye = [...ce, "@layer", "@media", "@supports", "@container", "selectors"];
      class we {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new ie], this.fontFaceRules = [], this.keyframesRules = [], this.localClassNamesMap = new Map(e.map((e => [e, e]))), this.localClassNamesSearch = new l(e), this.layers = new Map, this.composedClassLists = t.map((e => {
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
          if ("fontFace" !== e.type) {
            if ("keyframes" === e.type) return e.rule = Object.fromEntries(Object.entries(e.rule).map((e => {
              var [t, r] = e;
              return [t, this.transformProperties(r)]
            }))), void this.keyframesRules.push(e);
            if (this.currConditionalRuleset = new ie, "layer" === e.type) {
              var t = "@layer ".concat(e.name);
              this.addLayer([t])
            } else {
              var r = ae(e.rule, ye);
              this.addRule({
                selector: e.selector,
                rule: r
              }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
            }
            this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
          } else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var r = this.transformVars(this.transformProperties(e.rule)),
            n = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var o = t[t.length - 1],
            a = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: n,
            rule: r
          }, o, a)
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
          return oe(e, ((t, r) => {
            "number" != typeof t || 0 === t || ve[r] || (e[r] = "".concat(t, "px"))
          })), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, r = ne(e, he);
          return t ? re(re({}, function(e, t) {
            var r, n, o, a = {};
            for (var i in e) a[(e[i], r = i, n = void 0, o = void 0, (o = (n = r).match(/^var\((.*)\)$/)) ? o[1] : n)] = e[i];
            return a
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
          return ".".concat(i()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            r = function(e) {
              t = t.replace(o, (() => (function() {
                (() => {
                  if (u.length < 1) throw new Error("No adapter configured");
                  return u[u.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e)))
            };
          for (var {
              identifier: n,
              regex: o
            }
            of this.composedClassLists) r(n);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var a = this.localClassNamesSearch.search(t), i = t.length, l = a.length - 1; l >= 0; l--) {
            var [s, [c]] = a[l], f = s - c.length + 1;
            f >= i || (i = f, "." !== t[f - 1] && (t = ge(t, f, s + 1, this.transformClassname(c))))
          }
          return t
        }
        transformSelectors(e, t, r) {
          oe(t.selectors, ((t, n) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var o = this.transformSelector(n.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var r, n = () => {
                var r = new RegExp(".".concat(i()(t, {
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
                    var o = e[r];
                    if ("child" === o.type || "parent" === o.type || "sibling" === o.type || "adjacent" === o.type || "descendant" === o.type) throw new Error;
                    if ("attribute" === o.type && "class" === o.name && o.value === t) return
                  }
                } catch (e) {
                  throw new Error(x(R || (R = d(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), n(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              }))
            })(o, e.selector);
            var a = {
              selector: o,
              rule: ae(t, ye)
            };
            r ? this.addConditionalRule(a, r) : this.addRule(a);
            var l = {
              type: "selector",
              selector: o,
              rule: t
            };
            this.transformLayer(l, t["@layer"], r), this.transformSupports(l, t["@supports"], r), this.transformMedia(l, t["@media"], r)
          }))
        }
        transformMedia(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [o, a] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@media ".concat(e)))), Object.entries(t))) {
              var i = "@media ".concat(o);
              de(i);
              var l = [...n, i];
              this.addConditionalRule({
                selector: e.selector,
                rule: ae(a, ye)
              }, l), "local" === e.type && (this.transformSimplePseudos(e, a, l), this.transformSelectors(e, a, l)), this.transformLayer(e, a["@layer"], l), this.transformSupports(e, a["@supports"], l), this.transformContainer(e, a["@container"], l)
            }
        }
        transformContainer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@container ".concat(e)))), oe(t, ((t, r) => {
            var o = "@container ".concat(r),
              a = [...n, o];
            this.addConditionalRule({
              selector: e.selector,
              rule: ae(t, ye)
            }, a), "local" === e.type && (this.transformSimplePseudos(e, t, a), this.transformSelectors(e, t, a)), this.transformLayer(e, t["@layer"], a), this.transformSupports(e, t["@supports"], a), this.transformMedia(e, t["@media"], a)
          })))
        }
        transformLayer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@layer ".concat(e)))), oe(t, ((t, r) => {
            var o = [...n, "@layer ".concat(r)];
            this.addLayer(o), this.addConditionalRule({
              selector: e.selector,
              rule: ae(t, ye)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformMedia(e, t["@media"], o), this.transformSupports(e, t["@supports"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSupports(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@supports ".concat(e)))), oe(t, ((t, r) => {
            var o = [...n, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: ae(t, ye)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformMedia(e, t["@media"], o), this.transformContainer(e, t["@container"], o)
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
          for (var r of this.keyframesRules) e.push(be({
            ["@keyframes ".concat(r.name)]: r.rule
          }));
          for (var n of this.layers.values()) {
            var [o, ...a] = n.reverse(), i = {
              [o]: me
            };
            for (var l of a) i = {
              [l]: i
            };
            e.push(be(i))
          }
          for (var s of this.rules) e.push(be({
            [s.selector]: s.rule
          }));
          for (var c of this.conditionalRulesets)
            for (var u of c.renderToArray()) e.push(be(u));
          return e.filter(Boolean)
        }
      }

      function be(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          n = function(n) {
            var o, a = e[n];
            a && Array.isArray(a) ? r.push(...a.map((e => be({
              [n]: e
            }, t)))) : a && "object" == typeof a ? 0 === Object.keys(a).length || r.push("".concat(t).concat(n, " {\n").concat(be(a, t + "  "), "\n").concat(t, "}")) : a === me ? r.push("".concat(t).concat(n, ";")) : r.push("".concat(t).concat(n.startsWith("--") ? n : (o = n, o.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(a, ";"))
          };
        for (var o of Object.keys(e)) n(o);
        return r.join("\n")
      }
      r(17132);
      var ke = new Set,
        Ce = [],
        Se = [];
      f || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        f = !0, u.push(e)
      })({
        appendCss: e => {
          Se.push(e)
        },
        registerClassName: e => {
          ke.add(e)
        },
        registerComposition: e => {
          Ce.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: r,
              composedClassLists: n
            } = e, o = new we(t, n);
            for (var a of r) o.processCssObj(a);
            return o.toCss()
          }({
            localClassNames: Array.from(ke),
            composedClassLists: Ce,
            cssObjs: Se
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: r
            } = e, n = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, a = o[n];
            if (!a) {
              var i = document.createElement("style");
              t.packageName && i.setAttribute("data-package", t.packageName), i.setAttribute("data-file", t.filePath), i.setAttribute("type", "text/css"), a = o[n] = i, document.head.appendChild(i)
            }
            a.innerHTML = r
          })({
            fileScope: e,
            css: t
          }), Se = []
        },
        getIdentOption: () => "short"
      });
      var Ee = r(83919),
        Ae = r(82536),
        Oe = r(62229);
      const xe = (0, Oe.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: Ae.US,
          platformScaleBreakpoints: Ae.Cb,
          locale: "en-US"
        }),
        Pe = () => (0, Oe.useContext)(xe),
        Le = () => {
          const {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: o,
            defaultPlatformScale: a,
            platformScaleRatios: i,
            platformScaleBreakpoints: l,
            locale: s
          } = Pe();
          return {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: o,
            defaultPlatformScale: a,
            platformScaleRatios: i,
            platformScaleBreakpoints: l,
            locale: s
          }
        },
        je = () => {
          const {
            locale: e
          } = Pe();
          return e
        };
      var Re = r(87882);
      const Ie = (e, t) => {
        const r = "more" === t ? Ae.xW.lightHc : Ae.xW.light,
          n = "more" === t ? Ae.xW.darkHc : Ae.xW.dark;
        return "dark" === e ? n : r
      };
      var Me = r(57120);
      const Te = () => Me.X3 ? null : document.body,
        Ne = (0, Oe.forwardRef)((({
          children: e,
          className: t,
          container: r = Te(),
          asChild: o,
          colorScheme: a,
          defaultColorScheme: i,
          contrastMode: l,
          defaultContrastMode: s,
          platformScaleBreakpoints: c,
          platformScaleRatios: u,
          defaultPlatformScale: f,
          platformScale: d,
          locale: h = "en-US"
        }, p) => {
          const m = (0, Oe.useRef)(null),
            v = (0, Re.UP)(m, p),
            g = (0, Oe.useRef)(r),
            {
              ratio: y,
              scale: w
            } = function(e) {
              const t = (0, Oe.useMemo)((() => ({
                  ...Ae.US,
                  ...e.platformScaleRatios
                })), [e.platformScaleRatios]),
                r = (0, Oe.useMemo)((() => ({
                  ...Ae.Cb,
                  ...e.platformScaleBreakpoints
                })), [e.platformScaleBreakpoints]),
                [n, o] = (0, Oe.useState)(e.platformScale || e.defaultPlatformScale),
                a = (0, Oe.useRef)([]),
                i = () => {
                  if (!Me.X3) {
                    for (const {
                        handler: e,
                        matchMedia: t
                      }
                      of a.current) t.removeEventListener("change", e);
                    a.current = []
                  }
                };
              return (0, Oe.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
                if (!Me.X3) {
                  i();
                  for (const e in r) {
                    const t = window.matchMedia(r[e]),
                      n = t => {
                        t.matches && o(e)
                      };
                    t.addEventListener("change", n), t.matches && o(e), a.current.push({
                      handler: n,
                      matchMedia: t
                    })
                  }
                }
              })(), i)), [r, e.platformScale]), {
                scale: n,
                ratio: t[n]
              }
            }({
              platformScaleBreakpoints: c,
              platformScaleRatios: u,
              defaultPlatformScale: f,
              platformScale: d
            }),
            {
              appearanceClass: b,
              otherAppearanceClasses: k,
              providerColor: C,
              providerContrast: S
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark",
              contrastMode: r,
              defaultContrastMode: n = "normal"
            }) {
              const o = (0, Re.Ub)("(prefers-color-scheme: light)"),
                a = (0, Re.Ub)("(prefers-color-scheme: dark)"),
                i = (0, Re.Ub)("(prefers-contrast: more)"),
                l = "system" !== e && e || o && "light" || a && "dark" || t,
                s = r || i && "more" || n,
                c = (0, Oe.useMemo)((() => Ie(l, s)), [l, s]),
                u = (0, Oe.useMemo)((() => ((e, t) => {
                  const r = Ie(e, t);
                  return [Ae.xW.light, Ae.xW.dark, Ae.xW.lightHc, Ae.xW.darkHc].filter((e => e !== r))
                })(l, s)), [l, s]);
              return {
                appearanceClass: c,
                otherAppearanceClasses: u,
                providerColor: l,
                providerContrast: s
              }
            }({
              colorScheme: a,
              defaultColorScheme: i,
              contrastMode: l,
              defaultContrastMode: s
            });
          return ((e, t, r, n, o) => {
            const a = (0, Re.ZC)(o),
              i = (0, Re.ZC)(e.current);
            (0, Oe.useEffect)((() => {
              e.current?.classList.contains(Ae.X6) || e.current?.classList.add(Ae.X6), e.current?.classList.add(r), e.current?.classList.remove(...n), a && o && e.current?.classList.contains(a) ? e.current?.classList.replace(a, o) : a && !o && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : o && e.current?.classList.add(o)
            }), [r, o]), (0, Oe.useEffect)((() => {
              e.current?.style.setProperty(Ae.HZ, t.toString())
            }), [t]), (0, Oe.useEffect)((() => {
              i?.classList.remove(Ae.X6), i?.classList.remove(r), i?.style.removeProperty(Ae.HZ), o && i?.classList.remove(o)
            }), [i])
          })(o ? m : g, y, b, k, t), (0, n.jsx)(xe.Provider, {
            value: {
              locale: h,
              defaultColorScheme: i,
              colorScheme: C,
              defaultContrastMode: s,
              contrastMode: S,
              defaultPlatformScale: f,
              platformScale: w,
              platformScaleRatios: u,
              platformScaleBreakpoints: c
            },
            children: o ? (0, n.jsx)(Ee.DX, {
              ref: v,
              children: e
            }) : e
          })
        }))
    },
    18751: (e, t, r) => {
      function n() {
        return n = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, n.apply(this, arguments)
      }
      r.d(t, {
        A: () => n
      })
    }
  }
]);