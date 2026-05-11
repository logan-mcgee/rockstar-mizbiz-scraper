try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "a25c4544-5a78-4dff-b284-66ffe7590098", t._sentryDebugIdIdentifier = "sentry-dbid-a25c4544-5a78-4dff-b284-66ffe7590098")
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
  [4719], {
    75888(t) {
      var e = Math.ceil,
        n = Math.max;
      t.exports = function(t, r, o, i) {
        for (var a = -1, s = n(e((r - t) / (o || 1)), 0), f = Array(s); s--;) f[i ? s : ++a] = t, t += o;
        return f
      }
    },
    86601(t, e, n) {
      var r = n(56312),
        o = n(78328),
        i = n(21574),
        a = n(56130),
        s = n(81966);
      t.exports = function(t, e, n, f) {
        if (!a(t)) return t;
        for (var d = -1, l = (e = o(e, t)).length, u = l - 1, c = t; null != c && ++d < l;) {
          var p = s(e[d]),
            y = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
          if (d != u) {
            var v = c[p];
            void 0 === (y = f ? f(v, p, c) : void 0) && (y = a(v) ? v : i(e[d + 1]) ? [] : {})
          }
          r(c, p, y), c = c[p]
        }
        return t
      }
    },
    87625(t, e, n) {
      var r = n(85531),
        o = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, r(t) + 1).replace(o, "") : t
      }
    },
    99335(t, e, n) {
      var r = n(75888),
        o = n(4661),
        i = n(95187);
      t.exports = function(t) {
        return function(e, n, a) {
          return a && "number" != typeof a && o(e, n, a) && (n = a = void 0), e = i(e), void 0 === n ? (n = e, e = 0) : n = i(n), a = void 0 === a ? e < n ? 1 : -1 : i(a), r(e, n, a, t)
        }
      }
    },
    85531(t) {
      var e = /\s/;
      t.exports = function(t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)););
        return n
      }
    },
    31454(t, e, n) {
      var r = n(49192);
      t.exports = function(t) {
        return r(t, 5)
      }
    },
    9738(t, e, n) {
      var r = n(56130),
        o = n(28593),
        i = n(22909),
        a = Math.max,
        s = Math.min;
      t.exports = function(t, e, n) {
        var f, d, l, u, c, p, y = 0,
          v = !1,
          g = !1,
          m = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function h(e) {
          var n = f,
            r = d;
          return f = d = void 0, y = e, u = t.apply(r, n)
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
          return c = void 0, m && f ? h(t) : (f = d = void 0, u)
        }

        function _() {
          var t = o(),
            n = w(t);
          if (f = arguments, d = this, p = t, n) {
            if (void 0 === c) return function(t) {
              return y = t, c = setTimeout(b, e), v ? h(t) : u
            }(p);
            if (g) return clearTimeout(c), c = setTimeout(b, e), h(p)
          }
          return void 0 === c && (c = setTimeout(b, e)), u
        }
        return e = i(e) || 0, r(n) && (v = !!n.leading, l = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : l, m = "trailing" in n ? !!n.trailing : m), _.cancel = function() {
          void 0 !== c && clearTimeout(c), y = 0, f = p = d = c = void 0
        }, _.flush = function() {
          return void 0 === c ? u : x(o())
        }, _
      }
    },
    10613(t, e, n) {
      var r = n(23117);
      t.exports = function(t, e, n) {
        var o = null == t ? void 0 : r(t, e);
        return void 0 === o ? n : o
      }
    },
    28593(t, e, n) {
      var r = n(15036);
      t.exports = function() {
        return r.Date.now()
      }
    },
    98312(t, e, n) {
      var r = n(99335)();
      t.exports = r
    },
    10533(t, e, n) {
      var r = n(86601);
      t.exports = function(t, e, n, o) {
        return o = "function" == typeof o ? o : void 0, null == t ? t : r(t, e, n, o)
      }
    },
    95187(t, e, n) {
      var r = n(22909),
        o = 1 / 0;
      t.exports = function(t) {
        return t ? (t = r(t)) === o || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
      }
    },
    22909(t, e, n) {
      var r = n(87625),
        o = n(56130),
        i = n(25733),
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
        d = parseInt;
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
        return n || f.test(t) ? d(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t
      }
    },
    60211(t, e, n) {
      "use strict";
      n.d(e, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    75523(t, e, n) {
      "use strict";
      n.d(e, {
        X3: () => r.X,
        fi: () => i,
        IO: () => f,
        VW: () => c,
        v6: () => a.v,
        cJ: () => u
      });
      var r = n(60211);
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
      var a = n(51105);
      const s = "__FOUNDRY_ACCENT__",
        f = (t, e) => r.X ? e() : (window[s] || (window[s] = new Map), window[s].has(t) || window[s].set(t, e()), window[s].get(t));
      n(98312);
      var d, l = n(41972);

      function u(t, ...e) {
        return l(t, ...e)
      }
      n(56265), n(31454), n(10533), n(10613), n(9738),
        function(t) {
          t.Pending = "pending", t.Fulfilled = "fulfilled", t.Rejected = "rejected"
        }(d || (d = {})), Symbol.toStringTag;
      const c = (...t) => t.filter(t => t).join(" ")
    },
    51105(t, e, n) {
      "use strict";
      n.d(e, {
        v: () => s
      });
      var r = n(1556);
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
    95362(t, e, n) {
      "use strict";
      n.d(e, {
        s: () => a,
        t: () => i
      });
      var r = n(71127);

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
    39447(t, e, n) {
      "use strict";
      var r;
      n.d(e, {
        DX: () => u,
        TL: () => l,
        xV: () => v
      });
      var o = n(71127),
        i = n(95362),
        a = n(42295),
        s = Symbol.for("react.lazy"),
        f = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function d(t) {
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
            d(r) && "function" == typeof f && (r = f(r._payload));
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
          if (d(n) && "function" == typeof f && (n = f(n._payload)), o.isValidElement(n)) {
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
    48989(t, e, n) {
      "use strict";
      n.d(e, {
        bL: () => d,
        s6: () => f
      });
      var r = n(71127),
        o = (n(18429), n(39447)),
        i = n(42295),
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
        }, {}),
        s = Object.freeze({
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
        f = r.forwardRef((t, e) => (0, i.jsx)(a.span, {
          ...t,
          ref: e,
          style: {
            ...s,
            ...t.style
          }
        }));
      f.displayName = "VisuallyHidden";
      var d = f
    }
  }
]);