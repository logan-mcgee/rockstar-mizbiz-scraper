try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "49978237-d3b5-4102-8c57-f081d4fe2a34", e._sentryDebugIdIdentifier = "sentry-dbid-49978237-d3b5-4102-8c57-f081d4fe2a34")
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
  [5386], {
    7637(e, a, s) {
      s.r(a);
      var t = s(39793),
        d = s(93082),
        o = s(99225),
        n = s(59215),
        l = s(31879),
        i = s(13331),
        r = s(51693);
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
          video: g,
          related: b
        } = (0, l.useVideoData)({
          id: c
        }), y = a.get("resolution") ?? "_auto";
        return (0, d.useEffect)(() => (f([{
          href: "/videos",
          title: e("Videos")
        }]), i(!1), () => {
          i(!0), f()
        }), []), (0, d.useEffect)(() => {
          g && u(`${g.game.title} - ${g.title}`)
        }, [g]), g && c ? (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(l.PlayerWithInfo, {
            resolution: y,
            videoId: c,
            videoChangeCallback: e => {
              s(`../videos/${e}`)
            }
          }), b?.results?.length ? (0, t.jsx)(n.A, {
            vids: b.results,
            title: e("Related Videos")
          }) : ""]
        }) : null
      });
      s.d(a, ["default", 0, f])
    }
  }
]);