try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "d0424695-6185-4b26-b085-1992a70654ce", e._sentryDebugIdIdentifier = "sentry-dbid-d0424695-6185-4b26-b085-1992a70654ce")
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
  [8088], {
    68088: (e, s, d) => {
      d.r(s), d.d(s, {
        default: () => f
      });
      var a = d(42295),
        t = d(62229),
        n = d(9623),
        o = d(9566),
        r = d(87790);
      const f = (0, d(95966).withTranslations)((({
        t: e
      }) => {
        const s = (0, n.useParams)(),
          {
            setBreadcrumb: d,
            setNormalLogo: f
          } = (0, r.b)();
        return (0, t.useEffect)((() => (d([{
          href: "/newswire",
          title: e("Newswire")
        }], ""), () => {
          f(!0), d()
        })), []), (0, a.jsx)(o.NewswireArticle, {
          idHash: String(s.articleId)
        })
      }))
    }
  }
]);