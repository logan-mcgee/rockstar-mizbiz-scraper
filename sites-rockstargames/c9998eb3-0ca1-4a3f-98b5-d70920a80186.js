try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c9998eb3-0ca1-4a3f-98b5-d70920a80186", e._sentryDebugIdIdentifier = "sentry-dbid-c9998eb3-0ca1-4a3f-98b5-d70920a80186")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "793af7f1166af90e36185780de33260abbd44330",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "793af7f1166af90e36185780de33260abbd44330"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8136], {
    5755: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => l
      });
      var t = s(62229),
        d = s(9623),
        n = s(9566),
        o = s(33918),
        r = s(95966),
        f = s(70954);
      const l = (0, r.withTranslations)((e => {
        let {
          t: a
        } = e;
        const s = (0, d.useParams)(),
          {
            setBreadcrumb: r,
            setNormalLogo: l
          } = (0, o.b)();
        return (0, t.useEffect)((() => (r([{
          href: "/newswire",
          title: a("Newswire")
        }], ""), () => {
          l(!0), r()
        })), []), (0, f.jsx)(n.NewswireArticle, {
          idHash: String(s.articleId)
        })
      }))
    }
  }
]);