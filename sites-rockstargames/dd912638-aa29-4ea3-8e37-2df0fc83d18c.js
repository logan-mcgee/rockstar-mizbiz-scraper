! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "dd912638-aa29-4ea3-8e37-2df0fc83d18c", e._sentryDebugIdIdentifier = "sentry-dbid-dd912638-aa29-4ea3-8e37-2df0fc83d18c")
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
  [2141], {
    17341: (e, n, t) => {
      var r = t(54357);
      e.exports = function(e, n, t) {
        var o = null == e ? void 0 : r(e, n);
        return void 0 === o ? t : o
      }
    },
    575: (e, n, t) => {
      "use strict";
      t.d(n, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    95983: (e, n, t) => {
      "use strict";
      t.d(n, {
        X3: () => r.X,
        bZ: () => f,
        v6: () => l
      });
      var r = t(575),
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

      function l(...e) {
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
      const c = /^(on.*)$/,
        d = /^(onPress.*)$/;

      function f(e, {
        onPress: n
      } = {
        onPress: !0
      }) {
        const t = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (d.test(o) ? n ? t[o] = e[o] : r[o] = e[o] : c.test(o) ? t[o] = e[o] : r[o] = e[o]);
        return {
          events: t,
          others: r
        }
      }
      var u;
      t(55136), t(29276), t(22241), t(90614), t(8237), t(17341), t(80098),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(u || (u = {})), Symbol.toStringTag
    },
    11735: (e, n, t) => {
      "use strict";
      t.d(n, {
        DX: () => a,
        xV: () => l
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
          } = e, a = r.Children.toArray(t), l = a.find(c);
          if (l) {
            const e = l.props.children,
              t = a.map((n => n === l ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n));
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
            ...d(s, t.props),
            ref: n ? o(n, e) : e
          })
        }
        return r.Children.count(t) > 1 ? r.Children.only(null) : null
      }));
      i.displayName = "SlotClone";
      var l = ({
        children: e
      }) => (0, s.jsx)(s.Fragment, {
        children: e
      });

      function c(e) {
        return r.isValidElement(e) && e.type === l
      }

      function d(e, n) {
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