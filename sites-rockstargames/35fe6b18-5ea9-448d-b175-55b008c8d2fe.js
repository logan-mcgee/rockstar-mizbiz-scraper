! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "35fe6b18-5ea9-448d-b175-55b008c8d2fe", e._sentryDebugIdIdentifier = "sentry-dbid-35fe6b18-5ea9-448d-b175-55b008c8d2fe")
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
    72185: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => f
      });
      var s = a(62229),
        d = a(9623),
        o = a(75881),
        l = a(31879),
        n = a(95966),
        r = a(70241),
        i = a(73855);
      const f = (0, n.withTranslations)((e => {
        let {
          t
        } = e;
        const [a] = (0, d.useSearchParams)(), n = (0, d.useNavigate)(), {
          setNormalLogo: f,
          setBreadcrumb: b,
          setTitle: c
        } = (0, r.b)(), {
          videoId: u
        } = (0, d.useParams)(), {
          video: g,
          related: _
        } = (0, l.useVideoData)({
          id: u
        }), y = a.get("resolution") ?? "_auto";
        return (0, s.useEffect)((() => (b([{
          href: "/videos",
          title: t("Videos")
        }]), f(!1), () => {
          f(!0), b()
        })), []), (0, s.useEffect)((() => {
          g && c(`${g.game.title} - ${g.title}`)
        }), [g]), g && u ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(l.PlayerWithInfo, {
            resolution: y,
            videoId: u,
            videoChangeCallback: e => {
              n(`../videos/${e}`)
            }
          }), _?.results?.length ? (0, i.jsx)(o.A, {
            vids: _.results,
            title: t("Related Videos")
          }) : ""]
        }) : null
      }))
    }
  }
]);