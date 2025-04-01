! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3e23c8d8-373a-4ef5-8ac7-8c4cf2b6b90e", e._sentryDebugIdIdentifier = "sentry-dbid-3e23c8d8-373a-4ef5-8ac7-8c4cf2b6b90e")
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
  [3511], {
    33511: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => f
      });
      var t = s(62229),
        d = s(9623),
        n = s(9566),
        r = s(70241),
        o = s(95966),
        l = s(73855);
      const f = (0, o.withTranslations)((e => {
        let {
          t: a
        } = e;
        const s = (0, d.useParams)(),
          {
            setBreadcrumb: o,
            setNormalLogo: f
          } = (0, r.b)();
        return (0, t.useEffect)((() => (o([{
          href: "/newswire",
          title: a("Newswire")
        }], ""), () => {
          f(!0), o()
        })), []), (0, l.jsx)(n.NewswireArticle, {
          idHash: String(s.articleId)
        })
      }))
    }
  }
]);