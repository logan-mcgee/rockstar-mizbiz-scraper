try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "08b8b478-8da0-4518-a41b-85468e45727a", e._sentryDebugIdIdentifier = "sentry-dbid-08b8b478-8da0-4518-a41b-85468e45727a")
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
    68088: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => l
      });
      var t = s(42295),
        d = s(71127),
        n = s(10181),
        o = s(9566),
        r = s(87790);
      const l = (0, s(58136).withTranslations)(({
        t: e
      }) => {
        const a = (0, n.useParams)(),
          {
            setBreadcrumb: s,
            setNormalLogo: l
          } = (0, r.b)();
        return (0, d.useEffect)(() => (s([{
          href: "/newswire",
          title: e("Newswire")
        }], ""), () => {
          l(!0), s()
        }), []), (0, t.jsx)(o.NewswireArticle, {
          idHash: String(a.articleId)
        })
      })
    }
  }
]);