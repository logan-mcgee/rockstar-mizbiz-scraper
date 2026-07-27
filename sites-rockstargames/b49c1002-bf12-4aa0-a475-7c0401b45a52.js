try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b49c1002-bf12-4aa0-a475-7c0401b45a52", e._sentryDebugIdIdentifier = "sentry-dbid-b49c1002-bf12-4aa0-a475-7c0401b45a52")
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
  [6902], {
    41001(e, a, s) {
      s.r(a);
      var t = s(39793),
        d = s(93082),
        o = s(99225),
        n = s(79947),
        l = s(31879),
        i = s(13331),
        r = s(64081);
      const f = (0, i.withTranslations)(({
        t: e
      }) => {
        const [a] = (0, o.useSearchParams)(), s = (0, o.useNavigate)(), {
          setNormalLogo: i,
          setBreadcrumb: f,
          setTitle: u
        } = (0, r.b)(), {
          videoId: c
        } = (0, o.useParams)(), {
          video: b,
          related: g
        } = (0, l.useVideoData)({
          id: c
        }), y = a.get("resolution") ?? "_auto";
        return (0, d.useEffect)(() => (f([{
          href: "/videos",
          title: e("Videos")
        }]), i(!1), () => {
          i(!0), f()
        }), []), (0, d.useEffect)(() => {
          b && u(`${b.game.title} - ${b.title}`)
        }, [b]), b && c ? (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(l.PlayerWithInfo, {
            resolution: y,
            videoId: c,
            videoChangeCallback: e => {
              s(`../videos/${e}`)
            }
          }), g?.results?.length ? (0, t.jsx)(n.A, {
            vids: g.results,
            title: e("Related Videos")
          }) : ""]
        }) : null
      });
      s.d(a, ["default", 0, f])
    }
  }
]);