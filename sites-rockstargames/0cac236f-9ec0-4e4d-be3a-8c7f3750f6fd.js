! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0cac236f-9ec0-4e4d-be3a-8c7f3750f6fd", e._sentryDebugIdIdentifier = "sentry-dbid-0cac236f-9ec0-4e4d-be3a-8c7f3750f6fd")
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
  [9612], {
    17341: (e, n, t) => {
      var r = t(54357);
      e.exports = function(e, n, t) {
        var o = null == e ? void 0 : r(e, n);
        return void 0 === o ? t : o
      }
    },
    11018: (e, n, t) => {},
    60016: (e, n, t) => {
      "use strict";
      t.d(n, {
        v6: () => l
      }), t(11018);
      var r = t(5060);
      const o = new Map;

      function a(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach((e => e(n))), n;
        const r = o.get(n);
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
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              l = o[e];
            "function" == typeof t && "function" == typeof l && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = i(t, l) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof l ? "id" === e && t && l ? n.id = a(t, l) : n[e] = void 0 !== l ? l : t : n[e] = (0, r.A)(t, l)
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
        DX: () => i,
        xV: () => s
      });
      var r = t(62229);

      function o(...e) {
        return n => e.forEach((e => function(e, n) {
          "function" == typeof e ? e(n) : null != e && (e.current = n)
        }(e, n)))
      }
      var a = t(73855),
        i = r.forwardRef(((e, n) => {
          const {
            children: t,
            ...o
          } = e, i = r.Children.toArray(t), s = i.find(c);
          if (s) {
            const e = s.props.children,
              t = i.map((n => n === s ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n));
            return (0, a.jsx)(l, {
              ...o,
              ref: n,
              children: r.isValidElement(e) ? r.cloneElement(e, void 0, t) : null
            })
          }
          return (0, a.jsx)(l, {
            ...o,
            ref: n,
            children: t
          })
        }));
      i.displayName = "Slot";
      var l = r.forwardRef(((e, n) => {
        const {
          children: t,
          ...a
        } = e;
        if (r.isValidElement(t)) {
          const e = function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(t);
          return r.cloneElement(t, {
            ...f(a, t.props),
            ref: n ? o(n, e) : e
          })
        }
        return r.Children.count(t) > 1 ? r.Children.only(null) : null
      }));
      l.displayName = "SlotClone";
      var s = ({
        children: e
      }) => (0, a.jsx)(a.Fragment, {
        children: e
      });

      function c(e) {
        return r.isValidElement(e) && e.type === s
      }

      function f(e, n) {
        const t = {
          ...n
        };
        for (const r in n) {
          const o = e[r],
            a = n[r];
          /^on[A-Z]/.test(r) ? o && a ? t[r] = (...e) => {
            a(...e), o(...e)
          } : o && (t[r] = o) : "style" === r ? t[r] = {
            ...o,
            ...a
          } : "className" === r && (t[r] = [o, a].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...t
        }
      }
    }
  }
]);