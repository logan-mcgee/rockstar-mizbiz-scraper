try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fa51db42-2756-4215-8cca-ad4245a7ea36", e._sentryDebugIdIdentifier = "sentry-dbid-fa51db42-2756-4215-8cca-ad4245a7ea36")
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
    56992(e, a, s) {
      s.r(a), s.d(a, {
        default: () => f
      });
      var t = s(42295),
        d = s(71127),
        o = s(10181),
        n = s(15221),
        l = s(31879),
        i = s(13331),
        r = s(87790);
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
          video: c,
          related: g
        } = (0, l.useVideoData)({
          id: b
        }), y = a.get("resolution") ?? "_auto";
        return (0, d.useEffect)(() => (f([{
          href: "/videos",
          title: e("Videos")
        }]), i(!1), () => {
          i(!0), f()
        }), []), (0, d.useEffect)(() => {
          c && u(`${c.game.title} - ${c.title}`)
        }, [c]), c && b ? (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(l.PlayerWithInfo, {
            resolution: y,
            videoId: b,
            videoChangeCallback: e => {
              s(`../videos/${e}`)
            }
          }), g?.results?.length ? (0, t.jsx)(n.A, {
            vids: g.results,
            title: e("Related Videos")
          }) : ""]
        }) : null
      })
    }
  }
]);