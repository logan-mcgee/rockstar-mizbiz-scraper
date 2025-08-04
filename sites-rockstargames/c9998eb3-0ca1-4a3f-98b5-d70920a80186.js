try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "c9998eb3-0ca1-4a3f-98b5-d70920a80186", e._sentryDebugIdIdentifier = "sentry-dbid-c9998eb3-0ca1-4a3f-98b5-d70920a80186")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8136], {
    5755: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => f
      });
      var d = a(62229),
        t = a(9623),
        n = a(9566),
        o = a(33918),
        r = a(95966),
        l = a(70954);
      const f = (0, r.withTranslations)((e => {
        let {
          t: s
        } = e;
        const a = (0, t.useParams)(),
          {
            setBreadcrumb: r,
            setNormalLogo: f
          } = (0, o.b)();
        return (0, d.useEffect)((() => (r([{
          href: "/newswire",
          title: s("Newswire")
        }], ""), () => {
          f(!0), r()
        })), []), (0, l.jsx)(n.NewswireArticle, {
          idHash: String(a.articleId)
        })
      }))
    }
  }
]);