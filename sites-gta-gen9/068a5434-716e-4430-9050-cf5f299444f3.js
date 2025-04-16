! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "068a5434-716e-4430-9050-cf5f299444f3", e._sentryDebugIdIdentifier = "sentry-dbid-068a5434-716e-4430-9050-cf5f299444f3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [9819, 9964], {
    29960: (e, t, n) => {
      n.d(t, {
        i: () => i,
        o: () => d
      });
      var a = n(62229),
        o = n(95966),
        r = n(73855);
      const s = (0, o.setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: l
        } = s,
        d = e => {
          let {
            children: t,
            payload: n
          } = e;
          return (0, r.jsx)(l, {
            value: n,
            children: t
          })
        },
        i = () => (0, a.useContext)(s)
    },
    19544: (e, t, n) => {
      n.d(t, {
        C1: () => d,
        S1: () => l,
        XC: () => f,
        jS: () => i,
        qg: () => c,
        z0: () => u
      });
      var a = n(62229),
        o = n(95966),
        r = n(29960);
      const s = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: n
          } = new URL(e, (0, o.getCdnPrefix)(!0));
          return "/" === n ? null : (t.endsWith(".akamaized.net"), e)
        },
        l = e => {
          let {
            alt: t = null,
            mobile: n = null,
            desktop: l = null,
            ariaLabel: d = null,
            sources: i = null,
            prod: c = null
          } = e;
          const u = (0, o.useLocale)(),
            {
              meta: f = {}
            } = (0, r.i)() ?? {},
            [p, g] = (0, a.useState)(c ?? f?.cdn ?? f?.prod ?? !0);
          (0, a.useEffect)((() => {
            g(c ?? f?.cdn ?? f?.prod ?? !0)
          }), [c, f]);
          const m = (0, a.useCallback)((e => {
            const t = null !== i,
              n = e?.previewSrc ?? e ?? null;
            if (null === n || "string" != typeof n) return null;
            if (n.startsWith("http")) return s(n);
            const a = `${t?(0,o.getCdnPrefix)(p):""}${n}`;
            return s(a)
          }), [p, i]);
          return {
            alt: t,
            ariaLabel: d,
            src: {
              mobile: m(i?.[u]?.mobile ?? i?.en_us?.mobile ?? n),
              desktop: m(i?.[u]?.desktop ?? i?.en_us?.desktop ?? l)
            }
          }
        },
        d = e => {
          const t = (0, r.i)() ?? {},
            {
              meta: n = {}
            } = t,
            [l, d] = (0, a.useState)(n?.cdn ?? n?.prod ?? !1);
          return (0, a.useEffect)((() => {
            d(n?.cdn ?? n?.prod ?? !1)
          }), [n]), e ? e?.startsWith("http") ? s(e) : s(`${(0,o.getCdnPrefix)(l)}${e}`) : null
        },
        i = () => {
          const e = (0, r.i)() ?? {},
            {
              meta: t = {}
            } = e,
            n = (0, a.useMemo)((() => t?.cdn ?? t?.prod ?? !1), [t]);
          return (0, a.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const a = t?.prod ?? n;
            return e ? e?.startsWith("http") ? s(e) : s(`${(0,o.getCdnPrefix)(a)}${e}`) : null
          }), [n])
        },
        c = e => e.full_src,
        u = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,o.getCdnPrefix)(!1)}${t}`
        },
        f = e => e.meta.uploads_directory
    },
    16465: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05f9a77c98ced3942631978d7672ad20.svg"
    },
    69308: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/23bdc67ffcc24a66b8fe01ae5c40a7ed.svg"
    }
  }
]);