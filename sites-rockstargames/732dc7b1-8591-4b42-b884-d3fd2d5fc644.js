! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "732dc7b1-8591-4b42-b884-d3fd2d5fc644", e._sentryDebugIdIdentifier = "sentry-dbid-732dc7b1-8591-4b42-b884-d3fd2d5fc644")
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
  [8179], {
    17341: (e, n, t) => {
      var r = t(54357);
      e.exports = function(e, n, t) {
        var o = null == e ? void 0 : r(e, n);
        return void 0 === o ? t : o
      }
    },
    28793: (e, n, t) => {},
    25181: (e, n, t) => {
      "use strict";
      t.d(n, {
        v6: () => a
      }), t(28793);
      var r = t(5060);
      const o = new Map;

      function i(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach((e => e(n))), n;
        const r = o.get(n);
        return r ? (r.forEach((n => n(e))), e) : n
      }

      function l(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function a(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              a = o[e];
            "function" == typeof t && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = l(t, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof a ? "id" === e && t && a ? n.id = i(t, a) : n[e] = void 0 !== a ? a : t : n[e] = (0, r.A)(t, a)
          }
        }
        return n
      }
      var s;
      t(55136), t(29276), t(22241), t(90614), t(8237), t(17341), t(80098),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(s || (s = {})), Symbol.toStringTag
    },
    11735: (e, n, t) => {
      "use strict";
      t.d(n, {
        DX: () => l,
        xV: () => s
      });
      var r = t(62229);

      function o(...e) {
        return n => e.forEach((e => function(e, n) {
          "function" == typeof e ? e(n) : null != e && (e.current = n)
        }(e, n)))
      }
      var i = t(73855),
        l = r.forwardRef(((e, n) => {
          const {
            children: t,
            ...o
          } = e, l = r.Children.toArray(t), s = l.find(d);
          if (s) {
            const e = s.props.children,
              t = l.map((n => n === s ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n));
            return (0, i.jsx)(a, {
              ...o,
              ref: n,
              children: r.isValidElement(e) ? r.cloneElement(e, void 0, t) : null
            })
          }
          return (0, i.jsx)(a, {
            ...o,
            ref: n,
            children: t
          })
        }));
      l.displayName = "Slot";
      var a = r.forwardRef(((e, n) => {
        const {
          children: t,
          ...i
        } = e;
        if (r.isValidElement(t)) {
          const e = function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(t);
          return r.cloneElement(t, {
            ...c(i, t.props),
            ref: n ? o(n, e) : e
          })
        }
        return r.Children.count(t) > 1 ? r.Children.only(null) : null
      }));
      a.displayName = "SlotClone";
      var s = ({
        children: e
      }) => (0, i.jsx)(i.Fragment, {
        children: e
      });

      function d(e) {
        return r.isValidElement(e) && e.type === s
      }

      function c(e, n) {
        const t = {
          ...n
        };
        for (const r in n) {
          const o = e[r],
            i = n[r];
          /^on[A-Z]/.test(r) ? o && i ? t[r] = (...e) => {
            i(...e), o(...e)
          } : o && (t[r] = o) : "style" === r ? t[r] = {
            ...o,
            ...i
          } : "className" === r && (t[r] = [o, i].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...t
        }
      }
    }
  }
]);