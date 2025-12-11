try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "d0f5e9d9-2ed0-47e2-87fd-49bc981e606c", e._sentryDebugIdIdentifier = "sentry-dbid-d0f5e9d9-2ed0-47e2-87fd-49bc981e606c")
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
        default: () => r
      });
      var a = t(42295),
        d = t(62229),
        o = t(9623),
        n = t(15221),
        l = t(31879),
        i = t(95966),
        f = t(87790);
      const r = (0, i.withTranslations)(({
        t: e
      }) => {
        const [s] = (0, o.useSearchParams)(), t = (0, o.useNavigate)(), {
          setNormalLogo: i,
          setBreadcrumb: r,
          setTitle: u
        } = (0, f.b)(), {
          videoId: g
        } = (0, o.useParams)(), {
          video: c,
          related: b
        } = (0, l.useVideoData)({
          id: g
        }), y = s.get("resolution") ?? "_auto";
        return (0, d.useEffect)(() => (r([{
          href: "/videos",
          title: e("Videos")
        }]), i(!1), () => {
          i(!0), r()
        }), []), (0, d.useEffect)(() => {
          c && u(`${c.game.title} - ${c.title}`)
        }, [c]), c && g ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(l.PlayerWithInfo, {
            resolution: y,
            videoId: g,
            videoChangeCallback: e => {
              t(`../videos/${e}`)
            }
          }), b?.results?.length ? (0, a.jsx)(n.A, {
            vids: b.results,
            title: e("Related Videos")
          }) : ""]
        }) : null
      })
    }
  }
]);