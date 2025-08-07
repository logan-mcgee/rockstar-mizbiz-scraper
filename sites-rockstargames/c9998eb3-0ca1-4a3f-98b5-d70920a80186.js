try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "c9998eb3-0ca1-4a3f-98b5-d70920a80186", e._sentryDebugIdIdentifier = "sentry-dbid-c9998eb3-0ca1-4a3f-98b5-d70920a80186")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8136], {
    5755: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => l
      });
      var t = a(62229),
        d = a(9623),
        n = a(9566),
        f = a(33918),
        o = a(95966),
        r = a(70954);
      const l = (0, o.withTranslations)((e => {
        let {
          t: s
        } = e;
        const a = (0, d.useParams)(),
          {
            setBreadcrumb: o,
            setNormalLogo: l
          } = (0, f.b)();
        return (0, t.useEffect)((() => (o([{
          href: "/newswire",
          title: s("Newswire")
        }], ""), () => {
          l(!0), o()
        })), []), (0, r.jsx)(n.NewswireArticle, {
          idHash: String(a.articleId)
        })
      }))
    }
  }
]);