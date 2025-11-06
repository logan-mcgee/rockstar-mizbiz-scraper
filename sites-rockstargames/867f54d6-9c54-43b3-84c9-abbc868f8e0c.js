try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "867f54d6-9c54-43b3-84c9-abbc868f8e0c", e._sentryDebugIdIdentifier = "sentry-dbid-867f54d6-9c54-43b3-84c9-abbc868f8e0c")
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
  [9831], {
    56992: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => f
      });
      var a = t(42295),
        d = t(62229),
        o = t(9623),
        n = t(15221),
        l = t(31879),
        i = t(95966),
        r = t(87790);
      const f = (0, i.withTranslations)((({
        t: e
      }) => {
        const [s] = (0, o.useSearchParams)(), t = (0, o.useNavigate)(), {
          setNormalLogo: i,
          setBreadcrumb: f,
          setTitle: c
        } = (0, r.b)(), {
          videoId: u
        } = (0, o.useParams)(), {
          video: g,
          related: b
        } = (0, l.useVideoData)({
          id: u
        }), y = s.get("resolution") ?? "_auto";
        return (0, d.useEffect)((() => (f([{
          href: "/videos",
          title: e("Videos")
        }]), i(!1), () => {
          i(!0), f()
        })), []), (0, d.useEffect)((() => {
          g && c(`${g.game.title} - ${g.title}`)
        }), [g]), g && u ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(l.PlayerWithInfo, {
            resolution: y,
            videoId: u,
            videoChangeCallback: e => {
              t(`../videos/${e}`)
            }
          }), b?.results?.length ? (0, a.jsx)(n.A, {
            vids: b.results,
            title: e("Related Videos")
          }) : ""]
        }) : null
      }))
    }
  }
]);