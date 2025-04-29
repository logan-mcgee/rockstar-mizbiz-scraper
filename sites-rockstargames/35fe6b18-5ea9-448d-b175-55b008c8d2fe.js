! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "35fe6b18-5ea9-448d-b175-55b008c8d2fe", e._sentryDebugIdIdentifier = "sentry-dbid-35fe6b18-5ea9-448d-b175-55b008c8d2fe")
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
  [2185], {
    72185: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => i
      });
      var s = t(62229),
        d = t(9623),
        o = t(75881),
        l = t(31879),
        n = t(95966),
        r = t(70241),
        f = t(73855);
      const i = (0, n.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [t] = (0, d.useSearchParams)(), n = (0, d.useNavigate)(), {
          setNormalLogo: i,
          setBreadcrumb: u,
          setTitle: g
        } = (0, r.b)(), {
          videoId: b
        } = (0, d.useParams)(), {
          video: c,
          related: _
        } = (0, l.useVideoData)({
          id: b
        }), y = t.get("resolution") ?? "_auto";
        return (0, s.useEffect)((() => (u([{
          href: "/videos",
          title: a("Videos")
        }]), i(!1), () => {
          i(!0), u()
        })), []), (0, s.useEffect)((() => {
          c && g(`${c.game.title} - ${c.title}`)
        }), [c]), c && b ? (0, f.jsxs)(f.Fragment, {
          children: [(0, f.jsx)(l.PlayerWithInfo, {
            resolution: y,
            videoId: b,
            videoChangeCallback: e => {
              n(`../videos/${e}`)
            }
          }), _?.results?.length ? (0, f.jsx)(o.A, {
            vids: _.results,
            title: a("Related Videos")
          }) : ""]
        }) : null
      }))
    }
  }
]);