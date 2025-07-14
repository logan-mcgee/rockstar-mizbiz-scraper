try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "8c3c3d3c-8254-47e6-905d-34cfd76eaac6", e._sentryDebugIdIdentifier = "sentry-dbid-8c3c3d3c-8254-47e6-905d-34cfd76eaac6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8841], {
    38841: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => i
      });
      var t = a(62229),
        d = a(9623),
        n = a(9566),
        o = a(92951),
        r = a(95966),
        l = a(25854);
      const i = (0, r.withTranslations)((e => {
        let {
          t: s
        } = e;
        const a = (0, d.useParams)(),
          {
            setBreadcrumb: r,
            setNormalLogo: i
          } = (0, o.b)();
        return (0, t.useEffect)((() => (r([{
          href: "/newswire",
          title: s("Newswire")
        }], ""), () => {
          i(!0), r()
        })), []), (0, l.jsx)(n.NewswireArticle, {
          idHash: String(a.articleId)
        })
      }))
    }
  }
]);