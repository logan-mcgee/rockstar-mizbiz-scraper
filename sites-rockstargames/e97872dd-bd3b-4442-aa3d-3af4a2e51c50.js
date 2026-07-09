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
    38311(e, a, s) {
      s.r(a), s.d(a, {
        default: () => f
      });
      var d = s(39793),
        t = s(93082),
        n = s(36416),
        o = s(9566),
        r = s(18234);
      const f = (0, s(13331).withTranslations)(({
        t: e
      }) => {
        const a = (0, n.useParams)(),
          {
            setBreadcrumb: s,
            setNormalLogo: f
          } = (0, r.b)();
        return (0, t.useEffect)(() => (s([{
          href: "/newswire",
          title: e("Newswire")
        }], ""), () => {
          f(!0), s()
        }), []), (0, d.jsx)(o.NewswireArticle, {
          idHash: String(a.articleId)
        })
      })
    }
  }
]);