try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d0f5e9d9-2ed0-47e2-87fd-49bc981e606c", e._sentryDebugIdIdentifier = "sentry-dbid-d0f5e9d9-2ed0-47e2-87fd-49bc981e606c")
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
    56992: (e, d, s) => {
      s.r(d), s.d(d, {
        default: () => f
      });
      var t = s(42295),
        a = s(62229),
        o = s(9623),
        n = s(15221),
        l = s(31879),
        i = s(95966),
        r = s(87790);
      const f = (0, i.withTranslations)(({
        t: e
      }) => {
        const [d] = (0, o.useSearchParams)(), s = (0, o.useNavigate)(), {
          setNormalLogo: i,
          setBreadcrumb: f,
          setTitle: u
        } = (0, r.b)(), {
          videoId: g
        } = (0, o.useParams)(), {
          video: c,
          related: b
        } = (0, l.useVideoData)({
          id: g
        }), y = d.get("resolution") ?? "_auto";
        return (0, a.useEffect)(() => (f([{
          href: "/videos",
          title: e("Videos")
        }]), i(!1), () => {
          i(!0), f()
        }), []), (0, a.useEffect)(() => {
          c && u(`${c.game.title} - ${c.title}`)
        }, [c]), c && g ? (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(l.PlayerWithInfo, {
            resolution: y,
            videoId: g,
            videoChangeCallback: e => {
              s(`../videos/${e}`)
            }
          }), b?.results?.length ? (0, t.jsx)(n.A, {
            vids: b.results,
            title: e("Related Videos")
          }) : ""]
        }) : null
      })
    }
  }
]);