try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "68beb154-aa85-4536-bdd2-dfe22f860ae4", e._sentryDebugIdIdentifier = "sentry-dbid-68beb154-aa85-4536-bdd2-dfe22f860ae4")
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
    72604(e, a, s) {
      s.r(a), s.d(a, {
        default: () => f
      });
      var t = s(39793),
        d = s(93082),
        o = s(36416),
        n = s(29941),
        l = s(31879),
        i = s(13331),
        r = s(18234);
      const f = (0, i.withTranslations)(({
        t: e
      }) => {
        const [a] = (0, o.useSearchParams)(), s = (0, o.useNavigate)(), {
          setNormalLogo: i,
          setBreadcrumb: f,
          setTitle: u
        } = (0, r.b)(), {
          videoId: b
        } = (0, o.useParams)(), {
          video: g,
          related: c
        } = (0, l.useVideoData)({
          id: b
        }), y = a.get("resolution") ?? "_auto";
        return (0, d.useEffect)(() => (f([{
          href: "/videos",
          title: e("Videos")
        }]), i(!1), () => {
          i(!0), f()
        }), []), (0, d.useEffect)(() => {
          g && u(`${g.game.title} - ${g.title}`)
        }, [g]), g && b ? (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(l.PlayerWithInfo, {
            resolution: y,
            videoId: b,
            videoChangeCallback: e => {
              s(`../videos/${e}`)
            }
          }), c?.results?.length ? (0, t.jsx)(n.A, {
            vids: c.results,
            title: e("Related Videos")
          }) : ""]
        }) : null
      })
    }
  }
]);