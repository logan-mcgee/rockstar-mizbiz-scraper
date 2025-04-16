! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "171a0972-b800-4c2d-938f-a547e01497b6", e._sentryDebugIdIdentifier = "sentry-dbid-171a0972-b800-4c2d-938f-a547e01497b6")
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
  [5954], {
    51838: (e, n, t) => {},
    81542: (e, n, t) => {
      t.d(n, {
        bZ: () => f,
        v6: () => l
      }), t(51838);
      var r = t(5060);
      const o = new Map;

      function s(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach((e => e(n))), n;
        const r = o.get(n);
        return r ? (r.forEach((n => n(e))), e) : n
      }

      function a(...e) {
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
            "function" == typeof t && "function" == typeof l && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = a(t, l) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof l ? "id" === e && t && l ? n.id = s(t, l) : n[e] = void 0 !== l ? l : t : n[e] = (0, r.A)(t, l)
          }
        }
        return n
      }
      const i = /^(on.*)$/,
        c = /^(onPress.*)$/;

      function f(e, {
        onPress: n
      } = {
        onPress: !0
      }) {
        const t = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (c.test(o) ? n ? t[o] = e[o] : r[o] = e[o] : i.test(o) ? t[o] = e[o] : r[o] = e[o]);
        return {
          events: t,
          others: r
        }
      }
      var d;
      t(55136), t(29276), t(22241), t(90614), t(8237), t(80098),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(d || (d = {})), Symbol.toStringTag
    },
    11735: (e, n, t) => {
      t.d(n, {
        DX: () => a,
        xV: () => i
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
          } = e, a = r.Children.toArray(t), i = a.find(c);
          if (i) {
            const e = i.props.children,
              t = a.map((n => n === i ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n));
            return (0, s.jsx)(l, {
              ...o,
              ref: n,
              children: r.isValidElement(e) ? r.cloneElement(e, void 0, t) : null
            })
          }
          return (0, s.jsx)(l, {
            ...o,
            ref: n,
            children: t
          })
        }));
      a.displayName = "Slot";
      var l = r.forwardRef(((e, n) => {
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
      l.displayName = "SlotClone";
      var i = ({
        children: e
      }) => (0, s.jsx)(s.Fragment, {
        children: e
      });

      function c(e) {
        return r.isValidElement(e) && e.type === i
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