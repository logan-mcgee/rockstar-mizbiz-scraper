! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "970e4fd1-2c54-428b-ad87-3ff616210503", e._sentryDebugIdIdentifier = "sentry-dbid-970e4fd1-2c54-428b-ad87-3ff616210503")
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
  [235], {
    6516: (e, t, r) => {
      var n = r(1403),
        l = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, t, r) {
        var n, s = {},
          u = null,
          f = null;
        for (n in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (f = t.ref), t) o.call(t, n) && !d.hasOwnProperty(n) && (s[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === s[n] && (s[n] = t[n]);
        return {
          $$typeof: l,
          type: e,
          key: u,
          ref: f,
          props: s,
          _owner: a.current
        }
      }
      t.jsx = s, t.jsxs = s
    },
    6632: (e, t, r) => {
      e.exports = r(6516)
    },
    881: (e, t, r) => {
      r.d(t, {
        i: () => s,
        o: () => d
      });
      var n = r(1403),
        l = r(6632);
      const o = (0, n.createContext)(),
        {
          Provider: a
        } = o,
        d = e => {
          let {
            children: t,
            payload: r
          } = e;
          return (0, l.jsx)(a, {
            value: r,
            children: t
          })
        },
        s = () => (0, n.useContext)(o)
    },
    8235: (e, t, r) => {
      r.r(t), r.d(t, {
        parse: () => f,
        previewSrc: () => c,
        uploadDir: () => i,
        useGenerateCdnSource: () => u,
        useGetCdnSource: () => s,
        useImageParser: () => d
      });
      var n = r(1403),
        l = r(2756),
        o = r(881);
      const a = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: r
          } = new URL(e, (0, l.getCdnPrefix)(!0));
          return "/" === r ? null : (t.endsWith(".akamaized.net"), e)
        },
        d = e => {
          let {
            alt: t = null,
            mobile: r = null,
            desktop: d = null,
            ariaLabel: s = null,
            sources: u = null,
            prod: f = null
          } = e;
          const c = (0, l.useLocale)(),
            {
              meta: i = {}
            } = (0, o.i)() ?? {},
            [p, _] = (0, n.useState)(f ?? i?.cdn ?? i?.prod ?? !0);
          (0, n.useEffect)((() => {
            _(f ?? i?.cdn ?? i?.prod ?? !0)
          }), [f, i]);
          const b = (0, n.useCallback)((e => {
            const t = null !== u,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return a(r);
            const n = `${t?(0,l.getCdnPrefix)(p):""}${r}`;
            return a(n)
          }), [p, u]);
          return {
            alt: t,
            ariaLabel: s,
            src: {
              mobile: b(u?.[c]?.mobile ?? u?.en_us?.mobile ?? r),
              desktop: b(u?.[c]?.desktop ?? u?.en_us?.desktop ?? d)
            }
          }
        },
        s = e => {
          const {
            meta: t = {}
          } = (0, o.i)() ?? {}, [r, d] = (0, n.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, n.useEffect)((() => {
            d(t?.cdn ?? t?.prod ?? !1)
          }), [t]), null === e ? null : e?.startsWith("http") ? a(e) : a(`${(0,l.getCdnPrefix)(r)}${e}`)
        },
        u = () => {
          const {
            meta: e = {}
          } = (0, o.i)() ?? {}, t = (0, n.useMemo)((() => e?.cdn ?? e?.prod ?? !1), [e]);
          return (0, n.useCallback)((function(e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = r?.prod ?? t;
            return e ? e?.startsWith("http") ? a(e) : a(`${(0,l.getCdnPrefix)(n)}${e}`) : null
          }), [t])
        },
        f = e => e.full_src,
        c = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,l.getCdnPrefix)(!1)}${t}`
        },
        i = e => e.meta.uploads_directory
    }
  }
]);