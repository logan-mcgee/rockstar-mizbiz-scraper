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
        i: () => c,
        o: () => l
      });
      var a = n(62229),
        o = n(95966),
        r = n(73855);
      const s = (0, o.setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: d
        } = s,
        l = e => {
          let {
            children: t,
            payload: n
          } = e;
          return (0, r.jsx)(d, {
            value: n,
            children: t
          })
        },
        c = () => (0, a.useContext)(s)
    },
    19544: (e, t, n) => {
      n.d(t, {
        C1: () => l,
        S1: () => d,
        XC: () => u,
        jS: () => c,
        qg: () => i,
        z0: () => f
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
        d = e => {
          let {
            alt: t = null,
            mobile: n = null,
            desktop: d = null,
            ariaLabel: l = null,
            sources: c = null,
            prod: i = null
          } = e;
          const f = (0, o.useLocale)(),
            {
              meta: u = {}
            } = (0, r.i)() ?? {},
            [p, g] = (0, a.useState)(i ?? u?.cdn ?? u?.prod ?? !0);
          (0, a.useEffect)((() => {
            g(i ?? u?.cdn ?? u?.prod ?? !0)
          }), [i, u]);
          const b = (0, a.useCallback)((e => {
            const t = null !== c,
              n = e?.previewSrc ?? e ?? null;
            if (null === n || "string" != typeof n) return null;
            if (n.startsWith("http")) return s(n);
            const a = `${t?(0,o.getCdnPrefix)(p):""}${n}`;
            return s(a)
          }), [p, c]);
          return {
            alt: t,
            ariaLabel: l,
            src: {
              mobile: b(c?.[f]?.mobile ?? c?.en_us?.mobile ?? n),
              desktop: b(c?.[f]?.desktop ?? c?.en_us?.desktop ?? d)
            }
          }
        },
        l = e => {
          const t = (0, r.i)() ?? {},
            {
              meta: n = {}
            } = t,
            [d, l] = (0, a.useState)(n?.cdn ?? n?.prod ?? !1);
          return (0, a.useEffect)((() => {
            l(n?.cdn ?? n?.prod ?? !1)
          }), [n]), e ? e?.startsWith("http") ? s(e) : s(`${(0,o.getCdnPrefix)(d)}${e}`) : null
        },
        c = () => {
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
        i = e => e.full_src,
        f = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,o.getCdnPrefix)(!1)}${t}`
        },
        u = e => e.meta.uploads_directory
    },
    16465: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05f9a77c98ced3942631978d7672ad20.svg"
    },
    69308: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/23bdc67ffcc24a66b8fe01ae5c40a7ed.svg"
    }
  }
]);