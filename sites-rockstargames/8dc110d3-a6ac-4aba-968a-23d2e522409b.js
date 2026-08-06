try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8dc110d3-a6ac-4aba-968a-23d2e522409b", e._sentryDebugIdIdentifier = "sentry-dbid-8dc110d3-a6ac-4aba-968a-23d2e522409b")
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
  [6471], {
    96471(e, a, d) {
      d.r(a);
      var s = d(39793),
        t = d(93082),
        n = d(99225),
        o = d(9566),
        r = d(64081);
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
      });
      d.d(a, ["default", 0, l])
    }
  }
]);