try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "460c92e6-3c15-4c4a-8082-5f5ef5e235b7", e._sentryDebugIdIdentifier = "sentry-dbid-460c92e6-3c15-4c4a-8082-5f5ef5e235b7")
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
  [3977], {
    3977(e, s, a) {
      a.r(s);
      var t = a(39793),
        d = a(93082),
        n = a(99225),
        o = a(9566),
        r = a(73255);
      const f = (0, a(13331).withTranslations)(({
        t: e
      }) => {
        const s = (0, n.useParams)(),
          {
            setBreadcrumb: a,
            setNormalLogo: f
          } = (0, r.b)();
        return (0, d.useEffect)(() => (a([{
          href: "/newswire",
          title: e("Newswire")
        }], ""), () => {
          f(!0), a()
        }), []), (0, t.jsx)(o.NewswireArticle, {
          idHash: String(s.articleId)
        })
      });
      a.d(s, ["default", 0, f])
    }
  }
]);