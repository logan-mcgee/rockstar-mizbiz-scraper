! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bba831d1-d8dc-4b95-977f-477084c008ca", e._sentryDebugIdIdentifier = "sentry-dbid-bba831d1-d8dc-4b95-977f-477084c008ca")
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
  [3321], {
    17341: (e, n, t) => {
      var r = t(54357);
      e.exports = function(e, n, t) {
        var o = null == e ? void 0 : r(e, n);
        return void 0 === o ? t : o
      }
    },
    92413: (e, n, t) => {
      "use strict";
      t.d(n, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    49291: (e, n, t) => {
      "use strict";
      t.d(n, {
        X3: () => r.X,
        AK: () => m,
        bZ: () => d,
        v6: () => c
      });
      var r = t(92413),
        o = t(5060);
      const s = new Map;

      function a(e, n) {
        if (e === n) return e;
        const t = s.get(e);
        if (t) return t.forEach((e => e(n))), n;
        const r = s.get(n);
        return r ? (r.forEach((n => n(e))), e) : n
      }

      function i(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function c(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const r = e[t];
          for (const e in r) {
            const t = n[e],
              s = r[e];
            "function" == typeof t && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = i(t, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof s ? "id" === e && t && s ? n.id = a(t, s) : n[e] = void 0 !== s ? s : t : n[e] = (0, o.A)(t, s)
          }
        }
        return n
      }
      const l = /^(on.*)$/,
        f = /^(onPress.*)$/;

      function d(e, {
        onPress: n
      } = {
        onPress: !0
      }) {
        const t = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (f.test(o) ? n ? t[o] = e[o] : r[o] = e[o] : l.test(o) ? t[o] = e[o] : r[o] = e[o]);
        return {
          events: t,
          others: r
        }
      }
      var u;

      function p(e) {
        return e
      }
      t(55136), t(29276), t(22241), t(90614), t(8237), t(17341), t(80098),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(u || (u = {})), Symbol.toStringTag;
      const {
        cbrt: g,
        sqrt: y,
        PI: b
      } = Math, h = (e, n, t, r, o) => {
        const s = n + t * e,
          a = s ** 2 + r;
        if (a > 0) {
          const e = y(a);
          return g(s + e) + g(s - e) - o
        }
        const i = g(y(s * s - a)),
          c = s ? Math.atan(y(-a) / s) : -b / 2;
        let l;
        return l = t < 0 ? (s > 0 ? 2 * b : b) - c : o < 0 ? (s > 0 ? 2 * b : -3 * b) + c : (s > 0 ? 0 : b) + c, 2 * i * Math.cos(l / 3) - o
      }, w = (e, n, t, r) => ((n * e + 3 * t) * e + r) * e;

      function m(e, n, t, r) {
        if (!(0 <= e && e <= 1 && 0 <= t && t <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === n && t === r) return p;
        const o = 6 * (3 * e - 3 * t + 1),
          s = 6 * (t - 2 * e),
          a = 3 * e,
          i = o * o,
          c = s * s,
          l = s / o,
          f = 3 * s * a / i - c * s / (i * o),
          d = 2 * a / o - c / i,
          u = d * d * d,
          g = 3 / o,
          y = 3 * n - 3 * r + 1,
          b = r - 2 * n,
          m = 3 * n,
          _ = o ? h : p;
        return e => 0 === e || 1 === e ? e : w(_(e, f, g, u, l), y, b, m)
      }
    },
    11735: (e, n, t) => {
      "use strict";
      t.d(n, {
        DX: () => a,
        xV: () => c
      });
      var r = t(62229);

      function o(...e) {
        return n => e.forEach((e => function(e, n) {
          "function" == typeof e ? e(n) : null != e && (e.current = n)
        }(e, n)))
      }
      var s = t(73855),
        a = r.forwardRef(((e, n) => {
          const {
            children: t,
            ...o
          } = e, a = r.Children.toArray(t), c = a.find(l);
          if (c) {
            const e = c.props.children,
              t = a.map((n => n === c ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n));
            return (0, s.jsx)(i, {
              ...o,
              ref: n,
              children: r.isValidElement(e) ? r.cloneElement(e, void 0, t) : null
            })
          }
          return (0, s.jsx)(i, {
            ...o,
            ref: n,
            children: t
          })
        }));
      a.displayName = "Slot";
      var i = r.forwardRef(((e, n) => {
        const {
          children: t,
          ...s
        } = e;
        if (r.isValidElement(t)) {
          const e = function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(t);
          return r.cloneElement(t, {
            ...f(s, t.props),
            ref: n ? o(n, e) : e
          })
        }
        return r.Children.count(t) > 1 ? r.Children.only(null) : null
      }));
      i.displayName = "SlotClone";
      var c = ({
        children: e
      }) => (0, s.jsx)(s.Fragment, {
        children: e
      });

      function l(e) {
        return r.isValidElement(e) && e.type === c
      }

      function f(e, n) {
        const t = {
          ...n
        };
        for (const r in n) {
          const o = e[r],
            s = n[r];
          /^on[A-Z]/.test(r) ? o && s ? t[r] = (...e) => {
            s(...e), o(...e)
          } : o && (t[r] = o) : "style" === r ? t[r] = {
            ...o,
            ...s
          } : "className" === r && (t[r] = [o, s].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...t
        }
      }
    }
  }
]);