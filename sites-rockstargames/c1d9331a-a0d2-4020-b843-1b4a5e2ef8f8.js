try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c1d9331a-a0d2-4020-b843-1b4a5e2ef8f8", e._sentryDebugIdIdentifier = "sentry-dbid-c1d9331a-a0d2-4020-b843-1b4a5e2ef8f8")
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
        default: () => f
      });
      var t = s(42295),
        d = s(62229),
        n = s(9623),
        o = s(9566),
        r = s(87790);
      const f = (0, s(95966).withTranslations)(({
        t: e
      }) => {
        const a = (0, n.useParams)(),
          {
            setBreadcrumb: s,
            setNormalLogo: f
          } = (0, r.b)();
        return (0, d.useEffect)(() => (s([{
          href: "/newswire",
          title: e("Newswire")
        }], ""), () => {
          f(!0), s()
        }), []), (0, t.jsx)(o.NewswireArticle, {
          idHash: String(a.articleId)
        })
      })
    }
  }
]);