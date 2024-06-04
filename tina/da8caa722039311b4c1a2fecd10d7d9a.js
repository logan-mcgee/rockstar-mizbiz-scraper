! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4f938397-f5a0-44a5-8923-9a857bcdca82", e._sentryDebugIdIdentifier = "sentry-dbid-4f938397-f5a0-44a5-8923-9a857bcdca82")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [544, 240], {
    9576: (e, t, n) => {
      var r = n(1664),
        a = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, n) {
        var r, l = {},
          u = null,
          f = null;
        for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (f = t.ref), t) o.call(t, r) && !d.hasOwnProperty(r) && (l[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === l[r] && (l[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: u,
          ref: f,
          props: l,
          _owner: s.current
        }
      }
      t.Fragment = l, t.jsx = u, t.jsxs = u
    },
    5240: (e, t, n) => {
      e.exports = n(9576)
    },
    508: (e, t, n) => {
      n.d(t, {
        Q: () => d,
        m: () => s
      });
      var r = n(1664),
        a = n(5240);
      const l = (0, r.createContext)(),
        {
          Provider: o
        } = l,
        s = e => {
          let {
            children: t,
            payload: n
          } = e;
          return (0, a.jsx)(o, {
            value: n,
            children: t
          })
        },
        d = () => (0, r.useContext)(l)
    },
    3924: (e, t, n) => {
      n.r(t), n.d(t, {
        parse: () => f,
        previewSrc: () => i,
        uploadDir: () => c,
        useGenerateCdnSource: () => u,
        useGetCdnSource: () => d,
        useImageParser: () => s
      });
      var r = n(1664),
        a = n(5792),
        l = n(508);
      const o = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: n
          } = new URL(e, (0, a.getCdnPrefix)(!0));
          return "/" === n ? null : (t.endsWith(".akamaized.net"), e)
        },
        s = e => {
          let {
            alt: t = null,
            mobile: n = null,
            desktop: s = null,
            ariaLabel: d = null,
            sources: u = null,
            prod: f = null
          } = e;
          const i = (0, a.useLocale)(),
            {
              meta: c = {}
            } = (0, l.Q)() ?? {},
            [p, b] = (0, r.useState)(f ?? c?.cdn ?? c?.prod ?? !0);
          (0, r.useEffect)((() => {
            b(f ?? c?.cdn ?? c?.prod ?? !0)
          }), [f, c]);
          const _ = (0, r.useCallback)((e => {
            const t = null !== u,
              n = e?.previewSrc ?? e ?? null;
            if (null === n || "string" != typeof n) return null;
            if (n.startsWith("http")) return o(n);
            const r = `${t?(0,a.getCdnPrefix)(p):""}${n}`;
            return o(r)
          }), [p, u]);
          return {
            alt: t,
            ariaLabel: d,
            src: {
              mobile: _(u?.[i]?.mobile ?? u?.en_us?.mobile ?? n),
              desktop: _(u?.[i]?.desktop ?? u?.en_us?.desktop ?? s)
            }
          }
        },
        d = e => {
          const {
            meta: t = {}
          } = (0, l.Q)() ?? {}, [n, s] = (0, r.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, r.useEffect)((() => {
            s(t?.cdn ?? t?.prod ?? !1)
          }), [t]), null === e ? null : e?.startsWith("http") ? o(e) : o(`${(0,a.getCdnPrefix)(n)}${e}`)
        },
        u = () => {
          const {
            meta: e = {}
          } = (0, l.Q)() ?? {}, t = (0, r.useMemo)((() => e?.cdn ?? e?.prod ?? !1), [e]);
          return (0, r.useCallback)((function(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const r = n?.prod ?? t;
            return e ? e?.startsWith("http") ? o(e) : o(`${(0,a.getCdnPrefix)(r)}${e}`) : null
          }), [t])
        },
        f = e => e.full_src,
        i = e => {
          const t = e?.previewSrc ?? e;
          return t?.startsWith("http") ? t : `${(0,a.getCdnPrefix)(!1)}${t}`
        },
        c = e => e.meta.uploads_directory
    }
  }
]);