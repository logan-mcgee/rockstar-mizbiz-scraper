try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "02a33eae-5b4f-4792-9df7-74b7d039b341", e._sentryDebugIdIdentifier = "sentry-dbid-02a33eae-5b4f-4792-9df7-74b7d039b341")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [3891], {
    4408: (e, t, n) => {
      "use strict";
      n.d(t, {
        DX: () => u,
        xV: () => g,
        s6: () => w
      });
      var r = n(71127),
        o = n.t(r, 2),
        i = n(95362),
        a = n(42295),
        f = Symbol.for("react.lazy"),
        d = o[" use ".trim().toString()];

      function s(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === f && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function l(e) {
        const t = c(e),
          n = r.forwardRef((e, n) => {
            let {
              children: o,
              ...i
            } = e;
            s(o) && "function" == typeof d && (o = d(o._payload));
            const f = r.Children.toArray(o),
              l = f.find(v);
            if (l) {
              const e = l.props.children,
                o = f.map(t => t === l ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: o
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var u = l("Slot");

      function c(e) {
        const t = r.forwardRef((e, t) => {
          let {
            children: n,
            ...o
          } = e;
          if (s(n) && "function" == typeof d && (n = d(n._payload)), r.isValidElement(n)) {
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
              }(o, n.props);
            return n.type !== r.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), r.cloneElement(n, a)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
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
      var g = y("Slottable");

      function v(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
      n(18429);
      var h = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = l(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, f = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(f, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {}),
        m = Object.freeze({
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
        b = r.forwardRef((e, t) => (0, a.jsx)(h.span, {
          ...e,
          ref: t,
          style: {
            ...m,
            ...e.style
          }
        }));
      b.displayName = "VisuallyHidden";
      const w = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? b : r.Fragment;
        return (0, a.jsx)(n, {
          ...t
        })
      }
    },
    9738: (e, t, n) => {
      var r = n(56130),
        o = n(28593),
        i = n(22909),
        a = Math.max,
        f = Math.min;
      e.exports = function(e, t, n) {
        var d, s, l, u, c, p, y = 0,
          g = !1,
          v = !1,
          h = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function m(t) {
          var n = d,
            r = s;
          return d = s = void 0, y = t, u = e.apply(r, n)
        }

        function b(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || v && e - y >= l
        }

        function w() {
          var e = o();
          if (b(e)) return x(e);
          c = setTimeout(w, function(e) {
            var n = t - (e - p);
            return v ? f(n, l - (e - y)) : n
          }(e))
        }

        function x(e) {
          return c = void 0, h && d ? m(e) : (d = s = void 0, u)
        }

        function _() {
          var e = o(),
            n = b(e);
          if (d = arguments, s = this, p = e, n) {
            if (void 0 === c) return function(e) {
              return y = e, c = setTimeout(w, t), g ? m(e) : u
            }(p);
            if (v) return clearTimeout(c), c = setTimeout(w, t), m(p)
          }
          return void 0 === c && (c = setTimeout(w, t)), u
        }
        return t = i(t) || 0, r(n) && (g = !!n.leading, l = (v = "maxWait" in n) ? a(i(n.maxWait) || 0, t) : l, h = "trailing" in n ? !!n.trailing : h), _.cancel = function() {
          void 0 !== c && clearTimeout(c), y = 0, d = p = s = c = void 0
        }, _.flush = function() {
          return void 0 === c ? u : x(o())
        }, _
      }
    },
    10533: (e, t, n) => {
      var r = n(86601);
      e.exports = function(e, t, n, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : r(e, t, n, o)
      }
    },
    10613: (e, t, n) => {
      var r = n(23117);
      e.exports = function(e, t, n) {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o
      }
    },
    17328: (e, t, n) => {
      "use strict";
      n.d(t, {
        fi: () => o,
        v6: () => a.v
      }), n(60211);
      const r = e => e - .02,
        o = {
          mobile: `(min-width: 0px) and (max-width: ${r(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${r(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${r(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${r(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var i, a = n(51105);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(i || (i = {})), Symbol.toStringTag
    },
    22909: (e, t, n) => {
      var r = n(87625),
        o = n(56130),
        i = n(25733),
        a = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        s = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = f.test(e);
        return n || d.test(e) ? s(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
      }
    },
    28593: (e, t, n) => {
      var r = n(15036);
      e.exports = function() {
        return r.Date.now()
      }
    },
    31454: (e, t, n) => {
      var r = n(49192);
      e.exports = function(e) {
        return r(e, 5)
      }
    },
    51105: (e, t, n) => {
      "use strict";
      n.d(t, {
        v: () => f
      });
      var r = n(1556);
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

      function f(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              f = o[e];
            "function" == typeof n && "function" == typeof f && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, f) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof f ? "id" === e && n && f ? t.id = i(n, f) : t[e] = void 0 !== f ? f : n : t[e] = (0, r.clsx)(n, f)
          }
        }
        return t
      }
    },
    60211: (e, t, n) => {
      "use strict";
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    75888: e => {
      var t = Math.ceil,
        n = Math.max;
      e.exports = function(e, r, o, i) {
        for (var a = -1, f = n(t((r - e) / (o || 1)), 0), d = Array(f); f--;) d[i ? f : ++a] = e, e += o;
        return d
      }
    },
    85531: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    86601: (e, t, n) => {
      var r = n(56312),
        o = n(78328),
        i = n(21574),
        a = n(56130),
        f = n(81966);
      e.exports = function(e, t, n, d) {
        if (!a(e)) return e;
        for (var s = -1, l = (t = o(t, e)).length, u = l - 1, c = e; null != c && ++s < l;) {
          var p = f(t[s]),
            y = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (s != u) {
            var g = c[p];
            void 0 === (y = d ? d(g, p, c) : void 0) && (y = a(g) ? g : i(t[s + 1]) ? [] : {})
          }
          r(c, p, y), c = c[p]
        }
        return e
      }
    },
    87625: (e, t, n) => {
      var r = n(85531),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e
      }
    },
    95187: (e, t, n) => {
      var r = n(22909),
        o = 1 / 0;
      e.exports = function(e) {
        return e ? (e = r(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    95362: (e, t, n) => {
      "use strict";
      n.d(t, {
        s: () => a,
        t: () => i
      });
      var r = n(71127);

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
    98312: (e, t, n) => {
      var r = n(99335)();
      e.exports = r
    },
    99335: (e, t, n) => {
      var r = n(75888),
        o = n(4661),
        i = n(95187);
      e.exports = function(e) {
        return function(t, n, a) {
          return a && "number" != typeof a && o(t, n, a) && (n = a = void 0), t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n), a = void 0 === a ? t < n ? 1 : -1 : i(a), r(t, n, a, e)
        }
      }
    }
  }
]);