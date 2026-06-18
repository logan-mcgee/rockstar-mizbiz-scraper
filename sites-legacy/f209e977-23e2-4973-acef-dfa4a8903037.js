try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f209e977-23e2-4973-acef-dfa4a8903037", e._sentryDebugIdIdentifier = "sentry-dbid-f209e977-23e2-4973-acef-dfa4a8903037")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [4315], {
    5643(e, a, d) {
      var t = d(84017);
      a.H = t.createRoot, t.hydrateRoot
    },
    54315(e, a, d) {
      var t = d(39793),
        r = d(36416),
        o = d(13331),
        i = d(35246),
        l = d(46775),
        n = d(82199),
        s = d(5643),
        c = d(6757),
        _ = d(42909);
      const p = JSON.parse('{"de-DE":{"highlights_title_std":"Features","legacy_header_cta_label_reddeadredemption":"Jetzt kaufen"},"en-US":{"highlights_title_std":"Features","legacy_header_cta_label_reddeadredemption":"Buy Now"},"es-ES":{"highlights_title_std":"Características","legacy_header_cta_label_reddeadredemption":"Cómpralo ya"},"es-MX":{"highlights_title_std":"Características","legacy_header_cta_label_reddeadredemption":"Comprar ahora"},"fr-FR":{"highlights_title_std":"À la une","legacy_header_cta_label_reddeadredemption":"Acheter maintenant"},"it-IT":{"highlights_title_std":"Caratteristiche","legacy_header_cta_label_reddeadredemption":"Acquista ora"},"ja-JP":{"highlights_title_std":"フィーチャー","legacy_header_cta_label_reddeadredemption":"今すぐ購入"},"ko-KR":{"highlights_title_std":"특징","legacy_header_cta_label_reddeadredemption":"지금 구입"},"pl-PL":{"highlights_title_std":"Funkcje","legacy_header_cta_label_reddeadredemption":"Kup teraz"},"pt-BR":{"highlights_title_std":"Destaques","legacy_header_cta_label_reddeadredemption":"Compre já"},"ru-RU":{"highlights_title_std":"Возможности","legacy_header_cta_label_reddeadredemption":"Купить"},"zh-CN":{"highlights_title_std":"特色内容","legacy_header_cta_label_reddeadredemption":"马上购买"},"zh-TW":{"highlights_title_std":"內容","legacy_header_cta_label_reddeadredemption":"馬上購買"}}'),
        m = (0, o.makeVar)(null),
        g = window?.env?.graphEnv ?? "prod",
        h = JSON.parse('{"meta":{"url":"/reddeadredemption","title":"Red Dead Redemption","description":"Red Dead Redemption 2023","keywords":null,"image":null,"uploads_directory":"/tina-modules/reddeadredemption"},"content":[{"key":"key_91b20a4e-0b42-4dac-8b14-55f392e345c7","_template":"gen9.TinaWrapper","content":[{"key":"key_9813d514-ebbd-4b10-9fe4-a72a91ddeb5b","_template":"legacy.LegacyPageTemplate","hero":{"name":"Hero","type":"legacy","animated":true,"content":{"brands":[{"brand":"rdr1"}],"title":"Test Title","description":"This is a fake body text for testing.","legalText":"Here is some tiny legal text.","ctaGroup":{"expandingButton":{"label":"Subscribe","buttons":[{"key":"key_8c55c91a-e984-4fc8-88e8-ffe3d04d2a4d","platform":"questionmark","href":"https://rockstargames.com","text":"Some text to see how this object renders"}]},"ctas":{"buttons":[{"label":"Hello!","href":"https://rockstargames.com"}]}}},"images":{"background":{"mobile":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810109636,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Mobile-ImportExport-B2R01-jpg","hashed_filename":"c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","prod":false,"created_by":794},"desktop":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810180189,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Desktop-ImportExport-B2R01-jpg","hashed_filename":"3260edfc5529d512178571a323262d237f0412d5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","prod":false,"created_by":794}},"foreground":{"mobile":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810324145,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Mobile-ImportExport-B2R01-png","hashed_filename":"40e5e5dd3a4acf7a0442073561c3b22926e12873.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","prod":false,"created_by":794}},"desktop":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810265634,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Desktop-ImprtExport-B2R01-png","hashed_filename":"73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","prod":false,"created_by":794}}}}}}]}]}').content[0].content[0],
        f = (0, _.withIntl)(() => {
          const [e] = (0, l.h)(), a = (0, o.getBase)();
          return (0, t.jsx)(o.ResizeProvider, {
            children: (0, t.jsx)(o.ScrollProvider, {
              children: (0, t.jsx)(r.BrowserRouter, {
                basename: a,
                children: (0, t.jsx)(n.GtmProvider, {
                  children: (0, t.jsxs)(i.A, {
                    threshold: [25, 50, 75, 90, 100],
                    children: [e, (0, t.jsx)(c.A, {
                      ...h
                    })]
                  })
                })
              })
            })
          })
        }, p),
        b = (0, o.withReactiveState)(() => (0, t.jsx)(l.Z, {
          children: (0, t.jsx)(f, {})
        }), {
          state: m
        }),
        u = (0, o.withRockstarGraph)(b, {
          env: g
        }),
        y = document.createElement("div");
      document.body.appendChild(y), (0, s.H)(y).render((0, t.jsx)(u, {}))
    }
  }
]);