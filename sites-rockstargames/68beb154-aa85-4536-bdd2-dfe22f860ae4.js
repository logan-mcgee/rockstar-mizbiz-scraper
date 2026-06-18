try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "68beb154-aa85-4536-bdd2-dfe22f860ae4", e._sentryDebugIdIdentifier = "sentry-dbid-68beb154-aa85-4536-bdd2-dfe22f860ae4")
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
  [5739], {
    72604(e, s, t) {
      t.r(s), t.d(s, {
        default: () => f
      });
      var a = t(39793),
        d = t(93082),
        o = t(36416),
        n = t(29941),
        l = t(31879),
        i = t(13331),
        r = t(18234);
      const f = (0, i.withTranslations)(({
        t: e
      }) => {
        const [s] = (0, o.useSearchParams)(), t = (0, o.useNavigate)(), {
          setNormalLogo: i,
          setBreadcrumb: f,
          setTitle: b
        } = (0, r.b)(), {
          videoId: u
        } = (0, o.useParams)(), {
          video: g,
          related: c
        } = (0, l.useVideoData)({
          id: u
        }), y = s.get("resolution") ?? "_auto";
        return (0, d.useEffect)(() => (f([{
          href: "/videos",
          title: e("Videos")
        }]), i(!1), () => {
          i(!0), f()
        }), []), (0, d.useEffect)(() => {
          g && b(`${g.game.title} - ${g.title}`)
        }, [g]), g && u ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(l.PlayerWithInfo, {
            resolution: y,
            videoId: u,
            videoChangeCallback: e => {
              t(`../videos/${e}`)
            }
          }), c?.results?.length ? (0, a.jsx)(n.A, {
            vids: c.results,
            title: e("Related Videos")
          }) : ""]
        }) : null
      })
    }
  }
]);