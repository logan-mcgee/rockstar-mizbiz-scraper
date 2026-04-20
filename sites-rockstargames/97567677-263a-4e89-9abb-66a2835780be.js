try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "97567677-263a-4e89-9abb-66a2835780be", e._sentryDebugIdIdentifier = "sentry-dbid-97567677-263a-4e89-9abb-66a2835780be")
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
  [1027, 2295, 6423], {
    9738: (e, t, n) => {
      var r = n(56130),
        o = n(28593),
        i = n(22909),
        a = Math.max,
        f = Math.min;
      e.exports = function(e, t, n) {
        var u, s, l, c, d, p, y = 0,
          v = !1,
          g = !1,
          b = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function _(t) {
          var n = u,
            r = s;
          return u = s = void 0, y = t, c = e.apply(r, n)
        }

        function m(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || g && e - y >= l
        }

        function h() {
          var e = o();
          if (m(e)) return w(e);
          d = setTimeout(h, function(e) {
            var n = t - (e - p);
            return g ? f(n, l - (e - y)) : n
          }(e))
        }

        function w(e) {
          return d = void 0, b && u ? _(e) : (u = s = void 0, c)
        }

        function x() {
          var e = o(),
            n = m(e);
          if (u = arguments, s = this, p = e, n) {
            if (void 0 === d) return function(e) {
              return y = e, d = setTimeout(h, t), v ? _(e) : c
            }(p);
            if (g) return clearTimeout(d), d = setTimeout(h, t), _(p)
          }
          return void 0 === d && (d = setTimeout(h, t)), c
        }
        return t = i(t) || 0, r(n) && (v = !!n.leading, l = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, t) : l, b = "trailing" in n ? !!n.trailing : b), x.cancel = function() {
          void 0 !== d && clearTimeout(d), y = 0, u = p = s = d = void 0
        }, x.flush = function() {
          return void 0 === d ? c : w(o())
        }, x
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
    22909: (e, t, n) => {
      var r = n(87625),
        o = n(56130),
        i = n(25733),
        a = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
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
        return n || u.test(e) ? s(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
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
    33834: (e, t, n) => {
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
    42295: (e, t, n) => {
      "use strict";
      e.exports = n(69245)
    },
    53985: (e, t, n) => {
      "use strict";
      n.d(t, {
        v6: () => i.v
      }), n(77680);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o, i = n(33834);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag
    },
    69245: (e, t, n) => {
      "use strict";
      var r = n(71127),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        f = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, t, n) {
        var r, i = {},
          s = null,
          l = null;
        for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (l = t.ref), t) a.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: l,
          props: i,
          _owner: f.current
        }
      }
      t.Fragment = i, t.jsx = s, t.jsxs = s
    },
    72056: (e, t, n) => {
      "use strict";
      var r;
      n.d(t, {
        DX: () => c,
        TL: () => l
      });
      var o = n(71127),
        i = n(95362),
        a = n(42295),
        f = Symbol.for("react.lazy"),
        u = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function s(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === f && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function l(e) {
        const t = d(e),
          n = o.forwardRef((e, n) => {
            let {
              children: r,
              ...i
            } = e;
            s(r) && "function" == typeof u && (r = u(r._payload));
            const f = o.Children.toArray(r),
              l = f.find(y);
            if (l) {
              const e = l.props.children,
                r = f.map(t => t === l ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
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
      var c = l("Slot");

      function d(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (s(n) && "function" == typeof u && (n = u(n._payload)), o.isValidElement(n)) {
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
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    75888: e => {
      var t = Math.ceil,
        n = Math.max;
      e.exports = function(e, r, o, i) {
        for (var a = -1, f = n(t((r - e) / (o || 1)), 0), u = Array(f); f--;) u[i ? f : ++a] = e, e += o;
        return u
      }
    },
    77680: (e, t, n) => {
      "use strict";
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
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
      e.exports = function(e, t, n, u) {
        if (!a(e)) return e;
        for (var s = -1, l = (t = o(t, e)).length, c = l - 1, d = e; null != d && ++s < l;) {
          var p = f(t[s]),
            y = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (s != c) {
            var v = d[p];
            void 0 === (y = u ? u(v, p, d) : void 0) && (y = a(v) ? v : i(t[s + 1]) ? [] : {})
          }
          r(d, p, y), d = d[p]
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