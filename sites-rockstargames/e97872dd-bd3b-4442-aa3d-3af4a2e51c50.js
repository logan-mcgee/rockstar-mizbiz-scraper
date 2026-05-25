try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e97872dd-bd3b-4442-aa3d-3af4a2e51c50", e._sentryDebugIdIdentifier = "sentry-dbid-e97872dd-bd3b-4442-aa3d-3af4a2e51c50")
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
  [692], {
    38311(e, a, d) {
      d.r(a), d.d(a, {
        default: () => l
      });
      var s = d(39793),
        t = d(93082),
        n = d(36416),
        o = d(9566),
        r = d(18234);
      const l = (0, d(13331).withTranslations)(({
        t: e
      }) => {
        const a = (0, n.useParams)(),
          {
            setBreadcrumb: d,
            setNormalLogo: l
          } = (0, r.b)();
        return (0, t.useEffect)(() => (d([{
          href: "/newswire",
          title: e("Newswire")
        }], ""), () => {
          l(!0), d()
        }), []), (0, s.jsx)(o.NewswireArticle, {
          idHash: String(a.articleId)
        })
      })
    }
  }
]);