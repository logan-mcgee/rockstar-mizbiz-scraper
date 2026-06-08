try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e48d64f4-9d60-4f44-b556-8f5352863c58", e._sentryDebugIdIdentifier = "sentry-dbid-e48d64f4-9d60-4f44-b556-8f5352863c58")
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
  [6797], {
    43599(e) {
      var t = Math.ceil,
        n = Math.max;
      e.exports = function(e, r, o, i) {
        for (var a = -1, s = n(t((r - e) / (o || 1)), 0), d = Array(s); s--;) d[i ? s : ++a] = e, e += o;
        return d
      }
    },
    62314(e, t, n) {
      var r = n(87147),
        o = n(71025),
        i = n(15313),
        a = n(36373),
        s = n(30285);
      e.exports = function(e, t, n, d) {
        if (!a(e)) return e;
        for (var f = -1, l = (t = o(t, e)).length, u = l - 1, c = e; null != c && ++f < l;) {
          var p = s(t[f]),
            y = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (f != u) {
            var v = c[p];
            void 0 === (y = d ? d(v, p, c) : void 0) && (y = a(v) ? v : i(t[f + 1]) ? [] : {})
          }
          r(c, p, y), c = c[p]
        }
        return e
      }
    },
    56792(e, t, n) {
      var r = n(41856),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e
      }
    },
    55276(e, t, n) {
      var r = n(43599),
        o = n(34856),
        i = n(27872);
      e.exports = function(e) {
        return function(t, n, a) {
          return a && "number" != typeof a && o(t, n, a) && (n = a = void 0), t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n), a = void 0 === a ? t < n ? 1 : -1 : i(a), r(t, n, a, e)
        }
      }
    },
    41856(e) {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    74143(e, t, n) {
      var r = n(5559);
      e.exports = function(e) {
        return r(e, 5)
      }
    },
    54389(e, t, n) {
      var r = n(36373),
        o = n(42308),
        i = n(73894),
        a = Math.max,
        s = Math.min;
      e.exports = function(e, t, n) {
        var d, f, l, u, c, p, y = 0,
          v = !1,
          g = !1,
          m = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function h(t) {
          var n = d,
            r = f;
          return d = f = void 0, y = t, u = e.apply(r, n)
        }

        function w(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || g && e - y >= l
        }

        function b() {
          var e = o();
          if (w(e)) return x(e);
          c = setTimeout(b, function(e) {
            var n = t - (e - p);
            return g ? s(n, l - (e - y)) : n
          }(e))
        }

        function x(e) {
          return c = void 0, m && d ? h(e) : (d = f = void 0, u)
        }

        function _() {
          var e = o(),
            n = w(e);
          if (d = arguments, f = this, p = e, n) {
            if (void 0 === c) return function(e) {
              return y = e, c = setTimeout(b, t), v ? h(e) : u
            }(p);
            if (g) return clearTimeout(c), c = setTimeout(b, t), h(p)
          }
          return void 0 === c && (c = setTimeout(b, t)), u
        }
        return t = i(t) || 0, r(n) && (v = !!n.leading, l = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, t) : l, m = "trailing" in n ? !!n.trailing : m), _.cancel = function() {
          void 0 !== c && clearTimeout(c), y = 0, d = p = f = c = void 0
        }, _.flush = function() {
          return void 0 === c ? u : x(o())
        }, _
      }
    },
    73892(e, t, n) {
      var r = n(69526);
      e.exports = function(e, t, n) {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o
      }
    },
    42308(e, t, n) {
      var r = n(84373);
      e.exports = function() {
        return r.Date.now()
      }
    },
    68309(e, t, n) {
      var r = n(55276)();
      e.exports = r
    },
    88584(e, t, n) {
      var r = n(62314);
      e.exports = function(e, t, n, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : r(e, t, n, o)
      }
    },
    27872(e, t, n) {
      var r = n(73894),
        o = 1 / 0;
      e.exports = function(e) {
        return e ? (e = r(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    73894(e, t, n) {
      var r = n(56792),
        o = n(36373),
        i = n(69570),
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        f = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = s.test(e);
        return n || d.test(e) ? f(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
      }
    },
    45457(e, t, n) {
      "use strict";
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    69353(e, t, n) {
      "use strict";
      n.d(t, {
        X3: () => r.X,
        fi: () => i,
        IO: () => d,
        VW: () => c,
        v6: () => a.v,
        cJ: () => u
      });
      var r = n(45457);
      const o = e => e - .02,
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
      var a = n(51423);
      const s = "__FOUNDRY_ACCENT__",
        d = (e, t) => r.X ? t() : (window[s] || (window[s] = new Map), window[s].has(e) || window[s].set(e, t()), window[s].get(e));
      n(68309);
      var f, l = n(15963);

      function u(e, ...t) {
        return l(e, ...t)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const c = (...e) => e.filter(e => e).join(" ")
    },
    51423(e, t, n) {
      "use strict";
      n.d(t, {
        v: () => s
      });
      var r = n(81270);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.clsx)(n, s)
          }
        }
        return t
      }
    },
    50446(e, t, n) {
      "use strict";
      n.d(t, {
        s: () => a,
        t: () => i
      });
      var r = n(93082);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function i(...e) {
        return t => {
          let n = !1;
          const r = e.map(e => {
            const r = o(e, t);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              const n = r[t];
              "function" == typeof n ? n() : o(e[t], null)
            }
          }
        }
      }

      function a(...e) {
        return r.useCallback(i(...e), e)
      }
    },
    20972(e, t, n) {
      "use strict";
      n.d(t, {
        sG: () => a
      });
      var r = n(93082),
        o = (n(84017), n(38957)),
        i = n(39793),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, o.TL)(`Primitive.${t}`),
            a = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
                ...a,
                ref: r
              })
            });
          return a.displayName = `Primitive.${t}`, {
            ...e,
            [t]: a
          }
        }, {})
    },
    38957(e, t, n) {
      "use strict";
      var r;
      n.d(t, {
        DX: () => u,
        TL: () => l,
        xV: () => v
      });
      var o = n(93082),
        i = n(50446),
        a = n(39793),
        s = Symbol.for("react.lazy"),
        d = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function f(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function l(e) {
        const t = c(e),
          n = o.forwardRef((e, n) => {
            let {
              children: r,
              ...i
            } = e;
            f(r) && "function" == typeof d && (r = d(r._payload));
            const s = o.Children.toArray(r),
              l = s.find(g);
            if (l) {
              const e = l.props.children,
                r = s.map(t => t === l ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var u = l("Slot");

      function c(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (f(n) && "function" == typeof d && (n = d(n._payload)), o.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== o.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), o.cloneElement(n, a)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function y(e) {
        const t = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = p, t
      }
      var v = y("Slottable");

      function g(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    3541(e, t, n) {
      "use strict";
      n.d(t, {
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
        s = r.forwardRef((e, t) => (0, i.jsx)(o.sG.span, {
          ...e,
          ref: t,
          style: {
            ...a,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var d = s
    }
  }
]);