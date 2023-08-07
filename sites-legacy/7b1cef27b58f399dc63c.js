"use strict";
(self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [831], {
    5831: (e, a, d) => {
      d.r(a);
      var t = d(6780),
        r = d(8976),
        o = d(8008),
        n = d(4859),
        i = d(9929),
        s = d(1968),
        l = d(1570),
        c = d(1458),
        p = (d(7842), d(170)),
        m = d(7259),
        b = d(6160);
      const f = (0, n.makeVar)(null),
        u = window?.env?.graphEnv ?? "prod",
        {
          pingBearer: g
        } = (0, i.getScConfigForOrigin)(),
        _ = JSON.parse('{"meta":{"url":"/reddeadredemption","title":"Red Dead Redemption","description":"Red Dead Redemption 2023","keywords":null,"image":null,"uploads_directory":"/tina-modules/reddeadredemption"},"content":[{"key":"key_91b20a4e-0b42-4dac-8b14-55f392e345c7","_template":"gen9.TinaWrapper","content":[{"key":"key_9813d514-ebbd-4b10-9fe4-a72a91ddeb5b","_template":"legacy.LegacyPageTemplate","hero":{"name":"Hero","type":"legacy","animated":true,"content":{"brands":[{"brand":"rdr1"}],"title":"Test Title","description":"This is a fake body text for testing.","legalText":"Here is some tiny legal text.","ctaGroup":{"expandingButton":{"label":"Subscribe","buttons":[{"key":"key_8c55c91a-e984-4fc8-88e8-ffe3d04d2a4d","platform":"questionmark","href":"https://rockstargames.com","text":"Some text to see how this object renders"}]},"ctas":{"buttons":[{"label":"Hello!","href":"https://rockstargames.com"}]}}},"images":{"background":{"mobile":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810109636,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Mobile-ImportExport-B2R01-jpg","hashed_filename":"c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","prod":false,"created_by":794},"desktop":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810180189,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Desktop-ImportExport-B2R01-jpg","hashed_filename":"3260edfc5529d512178571a323262d237f0412d5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","prod":false,"created_by":794}},"foreground":{"mobile":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810324145,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Mobile-ImportExport-B2R01-png","hashed_filename":"40e5e5dd3a4acf7a0442073561c3b22926e12873.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","prod":false,"created_by":794}},"desktop":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810265634,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Desktop-ImprtExport-B2R01-png","hashed_filename":"73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","prod":false,"created_by":794}}}}}}]}]}').content[0].content[0],
        k = () => {
          const [e] = (0, o.useModal)(), a = (0, n.useBase)();
          return (0, b.jsx)(i.ResizeProvider, {
            children: (0, b.jsx)(s.ScrollProvider, {
              children: (0, b.jsx)(t.BrowserRouter, {
                basename: a,
                children: (0, b.jsx)(c.GtmProvider, {
                  children: (0, b.jsx)(l.IntlProvider, {
                    children: (0, b.jsxs)(r.ScrollTracker, {
                      threshold: [25, 50, 75, 90, 100],
                      children: [e, (0, b.jsx)(m.Z, {
                        ..._
                      })]
                    })
                  })
                })
              })
            })
          })
        },
        y = (0, n.withReactiveState)((() => (0, b.jsx)(o.ModalProvider, {
          children: (0, b.jsx)(k, {})
        })), {
          state: f
        }),
        h = (0, n.withRockstarGraph)(y, {
          env: u,
          token: (0, n.makeVar)(null),
          tokenPing: g,
          tokenPingExpires: (0, n.makeVar)(null),
          typePolicies: {}
        }),
        x = document.createElement("div");
      document.body.appendChild(x), (0, p.s)(x).render((0, b.jsx)(h, {}))
    },
    170: (e, a, d) => {
      var t = d(2280);
      a.s = t.createRoot, t.hydrateRoot
    }
  }
]);