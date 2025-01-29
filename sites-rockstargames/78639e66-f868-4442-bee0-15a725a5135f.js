! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "78639e66-f868-4442-bee0-15a725a5135f", e._sentryDebugIdIdentifier = "sentry-dbid-78639e66-f868-4442-bee0-15a725a5135f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7091], {
    37091: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => l
      });
      var t = s(62229),
        d = s(9623),
        n = s(9566),
        r = s(74829),
        f = s(95966),
        o = s(98096);
      const l = (0, f.withTranslations)((e => {
        let {
          t: a
        } = e;
        const s = (0, d.useParams)(),
          {
            setBreadcrumb: f,
            setNormalLogo: l
          } = (0, r.b)();
        return (0, t.useEffect)((() => (f([{
          href: "/newswire",
          title: a("Newswire")
        }], ""), () => {
          l(!0), f()
        })), []), (0, o.jsx)(n.NewswireArticle, {
          idHash: String(s.articleId)
        })
      }))
    }
  }
]);