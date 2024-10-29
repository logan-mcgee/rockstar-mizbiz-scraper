! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "41aded15-e17b-4ca2-9744-9b837fe5d0e8", e._sentryDebugIdIdentifier = "sentry-dbid-41aded15-e17b-4ca2-9744-9b837fe5d0e8")
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
  [5678], {
    75678: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => b
      });
      var s = d(71403),
        t = d(25076),
        f = d(78722),
        n = d.n(f),
        o = d(70396),
        r = d(42756),
        l = d(46632);
      const b = (0, r.withTranslations)((e => {
        let {
          t: a
        } = e;
        const d = (0, t.useParams)(),
          {
            setBreadcrumb: f,
            setNormalLogo: r
          } = (0, o.useRockstarLocalState)();
        return (0, s.useEffect)((() => (f([{
          href: "/newswire",
          title: a("Newswire")
        }], ""), () => {
          r(!0), f()
        })), []), (0, l.jsx)(n(), {
          idHash: String(d.articleId)
        })
      }))
    }
  }
]);