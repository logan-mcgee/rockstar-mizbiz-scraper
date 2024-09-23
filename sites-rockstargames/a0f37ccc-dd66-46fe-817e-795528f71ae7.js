! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a0f37ccc-dd66-46fe-817e-795528f71ae7", e._sentryDebugIdIdentifier = "sentry-dbid-a0f37ccc-dd66-46fe-817e-795528f71ae7")
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
  [1710], {
    1710: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => f
      });
      var s = t(71403),
        d = t(25076),
        o = t(74460),
        l = t(31879),
        n = t(70396),
        r = t(42756),
        i = t(46632);
      const f = (0, r.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [t] = (0, d.useSearchParams)(), r = (0, d.useNavigate)(), {
          setNormalLogo: f,
          setBreadcrumb: u,
          setTitle: c
        } = (0, n.useRockstarLocalState)(), {
          videoId: g
        } = (0, d.useParams)(), {
          video: b,
          related: _
        } = (0, l.useVideoData)({
          id: g
        }), y = t.get("resolution") ?? "_auto";
        return (0, s.useEffect)((() => (u([{
          href: "/videos",
          title: a("Videos")
        }]), f(!1), () => {
          f(!0), u()
        })), []), (0, s.useEffect)((() => {
          b && c(`${b.game.title} - ${b.title}`)
        }), [b]), b && g ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(l.PlayerWithInfo, {
            resolution: y,
            videoId: g,
            videoChangeCallback: e => {
              r(`../videos/${e}`)
            }
          }), _?.results?.length ? (0, i.jsx)(o.A, {
            vids: _.results,
            title: a("Related Videos")
          }) : ""]
        }) : null
      }))
    }
  }
]);