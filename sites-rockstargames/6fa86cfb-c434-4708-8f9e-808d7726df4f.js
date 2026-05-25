try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "6fa86cfb-c434-4708-8f9e-808d7726df4f", t._sentryDebugIdIdentifier = "sentry-dbid-6fa86cfb-c434-4708-8f9e-808d7726df4f")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [2379], {
    43599(t) {
      var e = Math.ceil,
        n = Math.max;
      t.exports = function(t, r, o, i) {
        for (var a = -1, s = n(e((r - t) / (o || 1)), 0), d = Array(s); s--;) d[i ? s : ++a] = t, t += o;
        return d
      }
    },
    62314(t, e, n) {
      var r = n(87147),
        o = n(71025),
        i = n(15313),
        a = n(36373),
        s = n(30285);
      t.exports = function(t, e, n, d) {
        if (!a(t)) return t;
        for (var f = -1, l = (e = o(e, t)).length, u = l - 1, c = t; null != c && ++f < l;) {
          var p = s(e[f]),
            y = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
          if (f != u) {
            var v = c[p];
            void 0 === (y = d ? d(v, p, c) : void 0) && (y = a(v) ? v : i(e[f + 1]) ? [] : {})
          }
          r(c, p, y), c = c[p]
        }
        return t
      }
    },
    56792(t, e, n) {
      var r = n(41856),
        o = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, r(t) + 1).replace(o, "") : t
      }
    },
    55276(t, e, n) {
      var r = n(43599),
        o = n(34856),
        i = n(27872);
      t.exports = function(t) {
        return function(e, n, a) {
          return a && "number" != typeof a && o(e, n, a) && (n = a = void 0), e = i(e), void 0 === n ? (n = e, e = 0) : n = i(n), a = void 0 === a ? e < n ? 1 : -1 : i(a), r(e, n, a, t)
        }
      }
    },
    41856(t) {
      var e = /\s/;
      t.exports = function(t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)););
        return n
      }
    },
    74143(t, e, n) {
      var r = n(5559);
      t.exports = function(t) {
        return r(t, 5)
      }
    },
    54389(t, e, n) {
      var r = n(36373),
        o = n(42308),
        i = n(73894),
        a = Math.max,
        s = Math.min;
      t.exports = function(t, e, n) {
        var d, f, l, u, c, p, y = 0,
          v = !1,
          g = !1,
          m = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function h(e) {
          var n = d,
            r = f;
          return d = f = void 0, y = e, u = t.apply(r, n)
        }

        function w(t) {
          var n = t - p;
          return void 0 === p || n >= e || n < 0 || g && t - y >= l
        }

        function b() {
          var t = o();
          if (w(t)) return x(t);
          c = setTimeout(b, function(t) {
            var n = e - (t - p);
            return g ? s(n, l - (t - y)) : n
          }(t))
        }

        function x(t) {
          return c = void 0, m && d ? h(t) : (d = f = void 0, u)
        }

        function _() {
          var t = o(),
            n = w(t);
          if (d = arguments, f = this, p = t, n) {
            if (void 0 === c) return function(t) {
              return y = t, c = setTimeout(b, e), v ? h(t) : u
            }(p);
            if (g) return clearTimeout(c), c = setTimeout(b, e), h(p)
          }
          return void 0 === c && (c = setTimeout(b, e)), u
        }
        return e = i(e) || 0, r(n) && (v = !!n.leading, l = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : l, m = "trailing" in n ? !!n.trailing : m), _.cancel = function() {
          void 0 !== c && clearTimeout(c), y = 0, d = p = f = c = void 0
        }, _.flush = function() {
          return void 0 === c ? u : x(o())
        }, _
      }
    },
    73892(t, e, n) {
      var r = n(69526);
      t.exports = function(t, e, n) {
        var o = null == t ? void 0 : r(t, e);
        return void 0 === o ? n : o
      }
    },
    42308(t, e, n) {
      var r = n(84373);
      t.exports = function() {
        return r.Date.now()
      }
    },
    68309(t, e, n) {
      var r = n(55276)();
      t.exports = r
    },
    88584(t, e, n) {
      var r = n(62314);
      t.exports = function(t, e, n, o) {
        return o = "function" == typeof o ? o : void 0, null == t ? t : r(t, e, n, o)
      }
    },
    27872(t, e, n) {
      var r = n(73894),
        o = 1 / 0;
      t.exports = function(t) {
        return t ? (t = r(t)) === o || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
      }
    },
    73894(t, e, n) {
      var r = n(56792),
        o = n(36373),
        i = n(69570),
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        f = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return NaN;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var n = s.test(t);
        return n || d.test(t) ? f(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t
      }
    },
    83503(t, e, n) {
      "use strict";
      n.d(e, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    35959(t, e, n) {
      "use strict";
      n.d(e, {
        X3: () => r.X,
        fi: () => i,
        IO: () => d,
        VW: () => c,
        v6: () => a.v,
        cJ: () => u
      });
      var r = n(83503);
      const o = t => t - .02,
        i = {
          mobile: `(min-width: 0px) and (max-width: ${o(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${o(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${o(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${o(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var a = n(72965);
      const s = "__FOUNDRY_ACCENT__",
        d = (t, e) => r.X ? e() : (window[s] || (window[s] = new Map), window[s].has(t) || window[s].set(t, e()), window[s].get(t));
      n(68309);
      var f, l = n(15963);

      function u(t, ...e) {
        return l(t, ...e)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(t) {
          t.Pending = "pending", t.Fulfilled = "fulfilled", t.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const c = (...t) => t.filter(t => t).join(" ")
    },
    72965(t, e, n) {
      "use strict";
      n.d(e, {
        v: () => s
      });
      var r = n(81270);
      const o = new Map;

      function i(t, e) {
        if (t === e) return t;
        const n = o.get(t);
        if (n) return n.forEach(t => t(e)), e;
        const r = o.get(e);
        return r ? (r.forEach(e => e(t)), t) : e
      }

      function a(...t) {
        return (...e) => {
          for (const n of t) "function" == typeof n && n(...e)
        }
      }

      function s(...t) {
        const e = {
          ...t[0]
        };
        for (let n = 1; n < t.length; n++) {
          const o = t[n];
          for (const t in o) {
            const n = e[t],
              s = o[t];
            "function" == typeof n && "function" == typeof s && "o" === t[0] && "n" === t[1] && t.charCodeAt(2) >= 65 && t.charCodeAt(2) <= 90 ? e[t] = a(n, s) : "className" !== t && "UNSAFE_className" !== t || "string" != typeof n || "string" != typeof s ? "id" === t && n && s ? e.id = i(n, s) : e[t] = void 0 !== s ? s : n : e[t] = (0, r.clsx)(n, s)
          }
        }
        return e
      }
    },
    50446(t, e, n) {
      "use strict";
      n.d(e, {
        s: () => a,
        t: () => i
      });
      var r = n(93082);

      function o(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e)
      }

      function i(...t) {
        return e => {
          let n = !1;
          const r = t.map(t => {
            const r = o(t, e);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let e = 0; e < r.length; e++) {
              const n = r[e];
              "function" == typeof n ? n() : o(t[e], null)
            }
          }
        }
      }

      function a(...t) {
        return r.useCallback(i(...t), t)
      }
    },
    20972(t, e, n) {
      "use strict";
      n.d(e, {
        sG: () => a
      });
      var r = n(93082),
        o = (n(84017), n(38957)),
        i = n(39793),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((t, e) => {
          const n = (0, o.TL)(`Primitive.${e}`),
            a = r.forwardRef((t, r) => {
              const {
                asChild: o,
                ...a
              } = t, s = o ? n : e;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
                ...a,
                ref: r
              })
            });
          return a.displayName = `Primitive.${e}`, {
            ...t,
            [e]: a
          }
        }, {})
    },
    38957(t, e, n) {
      "use strict";
      var r;
      n.d(e, {
        DX: () => u,
        TL: () => l,
        xV: () => v
      });
      var o = n(93082),
        i = n(50446),
        a = n(39793),
        s = Symbol.for("react.lazy"),
        d = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function f(t) {
        return null != t && "object" == typeof t && "$$typeof" in t && t.$$typeof === s && "_payload" in t && "object" == typeof(e = t._payload) && null !== e && "then" in e;
        var e
      }

      function l(t) {
        const e = c(t),
          n = o.forwardRef((t, n) => {
            let {
              children: r,
              ...i
            } = t;
            f(r) && "function" == typeof d && (r = d(r._payload));
            const s = o.Children.toArray(r),
              l = s.find(g);
            if (l) {
              const t = l.props.children,
                r = s.map(e => e === l ? o.Children.count(t) > 1 ? o.Children.only(null) : o.isValidElement(t) ? t.props.children : null : e);
              return (0, a.jsx)(e, {
                ...i,
                ref: n,
                children: o.isValidElement(t) ? o.cloneElement(t, void 0, r) : null
              })
            }
            return (0, a.jsx)(e, {
              ...i,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${t}.Slot`, n
      }
      var u = l("Slot");

      function c(t) {
        const e = o.forwardRef((t, e) => {
          let {
            children: n,
            ...r
          } = t;
          if (f(n) && "function" == typeof d && (n = d(n._payload)), o.isValidElement(n)) {
            const t = function(t) {
                let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
                  n = e && "isReactWarning" in e && e.isReactWarning;
                return n ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref)
              }(n),
              a = function(t, e) {
                const n = {
                  ...e
                };
                for (const r in e) {
                  const o = t[r],
                    i = e[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...t) => {
                    const e = i(...t);
                    return o(...t), e
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...t,
                  ...n
                }
              }(r, n.props);
            return n.type !== o.Fragment && (a.ref = e ? (0, i.t)(e, t) : t), o.cloneElement(n, a)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        });
        return e.displayName = `${t}.SlotClone`, e
      }
      var p = Symbol("radix.slottable");

      function y(t) {
        const e = ({
          children: t
        }) => (0, a.jsx)(a.Fragment, {
          children: t
        });
        return e.displayName = `${t}.Slottable`, e.__radixId = p, e
      }
      var v = y("Slottable");

      function g(t) {
        return o.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === p
      }
    },
    3541(t, e, n) {
      "use strict";
      n.d(e, {
        bL: () => d,
        s6: () => s
      });
      var r = n(93082),
        o = n(20972),
        i = n(39793),
        a = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        s = r.forwardRef((t, e) => (0, i.jsx)(o.sG.span, {
          ...t,
          ref: e,
          style: {
            ...a,
            ...t.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var d = s
    }
  }
]);