! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3c183427-d0f8-4df1-bd09-1fd26903f5ad", e._sentryDebugIdIdentifier = "sentry-dbid-3c183427-d0f8-4df1-bd09-1fd26903f5ad")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [2846], {
    12846: (e, a, d) => {
      d.r(a);
      var t = d(25076),
        o = d(61651),
        r = d(93665),
        n = d(58407),
        i = d(42756),
        s = d(42158),
        l = d(96717),
        c = d(63902),
        p = d(52757),
        f = (d(83142), d(80594), d(91045), d(18118), d(813), d(92306), d(74035), d(21535), d(43474), d(88863), d(17240), d(76277), d(95911), d(88372), d(20442), d(26266), d(33719), d(95938), d(45669), d(31190)),
        m = d(84828),
        b = d(46632);
      const g = (0, n.makeVar)(null),
        u = window?.env?.graphEnv ?? "prod",
        {
          pingBearer: _
        } = (0, i.getScConfigForOrigin)(),
        y = JSON.parse('{"meta":{"url":"/reddeadredemption","title":"Red Dead Redemption","description":"Red Dead Redemption 2023","keywords":null,"image":null,"uploads_directory":"/tina-modules/reddeadredemption"},"content":[{"key":"key_91b20a4e-0b42-4dac-8b14-55f392e345c7","_template":"gen9.TinaWrapper","content":[{"key":"key_9813d514-ebbd-4b10-9fe4-a72a91ddeb5b","_template":"legacy.LegacyPageTemplate","hero":{"name":"Hero","type":"legacy","animated":true,"content":{"brands":[{"brand":"rdr1"}],"title":"Test Title","description":"This is a fake body text for testing.","legalText":"Here is some tiny legal text.","ctaGroup":{"expandingButton":{"label":"Subscribe","buttons":[{"key":"key_8c55c91a-e984-4fc8-88e8-ffe3d04d2a4d","platform":"questionmark","href":"https://rockstargames.com","text":"Some text to see how this object renders"}]},"ctas":{"buttons":[{"label":"Hello!","href":"https://rockstargames.com"}]}}},"images":{"background":{"mobile":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810109636,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Mobile-ImportExport-B2R01-jpg","hashed_filename":"c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","prod":false,"created_by":794},"desktop":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810180189,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Desktop-ImportExport-B2R01-jpg","hashed_filename":"3260edfc5529d512178571a323262d237f0412d5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","prod":false,"created_by":794}},"foreground":{"mobile":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810324145,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Mobile-ImportExport-B2R01-png","hashed_filename":"40e5e5dd3a4acf7a0442073561c3b22926e12873.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","prod":false,"created_by":794}},"desktop":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810265634,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Desktop-ImprtExport-B2R01-png","hashed_filename":"73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","prod":false,"created_by":794}}}}}}]}]}').content[0].content[0],
        k = () => {
          const [e] = (0, r.h)(), a = (0, n.useBase)(), d = (0, i.useLocale)();
          return (0, b.jsx)(i.ResizeProvider, {
            children: (0, b.jsx)(s.ScrollProvider, {
              children: (0, b.jsx)(t.BrowserRouter, {
                basename: a,
                children: (0, b.jsx)(p.GtmProvider, {
                  children: (0, b.jsx)(l.IntlProvider, {
                    locales: c.intlMessages,
                    lang: d,
                    children: (0, b.jsxs)(o.A, {
                      threshold: [25, 50, 75, 90, 100],
                      children: [e, (0, b.jsx)(m.A, {
                        ...y
                      })]
                    })
                  })
                })
              })
            })
          })
        },
        h = (0, n.withReactiveState)((() => (0, b.jsx)(r.Z, {
          children: (0, b.jsx)(k, {})
        })), {
          state: g
        }),
        w = (0, n.withRockstarGraph)(h, {
          env: u,
          token: (0, n.makeVar)(null),
          tokenPing: _,
          tokenPingExpires: (0, n.makeVar)(null),
          typePolicies: {}
        }),
        v = document.createElement("div");
      document.body.appendChild(v), (0, f.H)(v).render((0, b.jsx)(w, {}))
    }
  }
]);