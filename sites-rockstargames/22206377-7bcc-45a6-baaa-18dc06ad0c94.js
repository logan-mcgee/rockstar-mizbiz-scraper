! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "22206377-7bcc-45a6-baaa-18dc06ad0c94", e._sentryDebugIdIdentifier = "sentry-dbid-22206377-7bcc-45a6-baaa-18dc06ad0c94")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8841], {
    38841: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => i
      });
      var d = t(62229),
        s = t(9623),
        l = t(9566),
        o = t(92951),
        n = t(95966),
        r = t(25854);
      const i = (0, n.withTranslations)((e => {
        let {
          t: a
        } = e;
        const t = (0, s.useParams)(),
          {
            setBreadcrumb: n,
            setNormalLogo: i
          } = (0, o.b)();
        return (0, d.useEffect)((() => (n([{
          href: "/newswire",
          title: a("Newswire")
        }], ""), () => {
          i(!0), n()
        })), []), (0, r.jsx)(l.NewswireArticle, {
          idHash: String(t.articleId)
        })
      }))
    }
  }
]);