try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "683d811e-8f6a-4679-a35f-35f07d69976b", e._sentryDebugIdIdentifier = "sentry-dbid-683d811e-8f6a-4679-a35f-35f07d69976b")
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
  [8850], {
    59043(e, t, s) {
      s.r(t);
      var a = s(39793),
        d = s(93082),
        o = s(99225),
        n = s(35048),
        l = s(31879),
        i = s(13331),
        r = s(73255);
      const f = (0, i.withTranslations)(({
        t: e
      }) => {
        const t = "site",
          [s] = (0, o.useSearchParams)(),
          i = (0, o.useNavigate)(),
          {
            setNormalLogo: f,
            setBreadcrumb: u,
            setTitle: g
          } = (0, r.b)(),
          {
            videoId: c
          } = (0, o.useParams)(),
          {
            video: b,
            related: y
          } = (0, l.useVideoData)({
            id: c,
            context: t
          }),
          h = s.get("resolution") ?? "_auto";
        return (0, d.useEffect)(() => (u([{
          href: "/videos",
          title: e("Videos")
        }]), f(!1), () => {
          f(!0), u()
        }), []), (0, d.useEffect)(() => {
          b && g(`${b.game.title} - ${b.title}`)
        }, [b]), b && c ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(l.PlayerWithInfo, {
            context: t,
            resolution: h,
            videoId: c,
            videoChangeCallback: e => {
              i(`../videos/${e}`)
            }
          }), y?.results?.length ? (0, a.jsx)(n.A, {
            vids: y.results,
            title: e("Related Videos")
          }) : ""]
        }) : null
      });
      s.d(t, ["default", 0, f])
    }
  }
]);