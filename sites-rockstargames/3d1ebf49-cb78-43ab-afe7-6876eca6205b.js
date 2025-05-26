! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3d1ebf49-cb78-43ab-afe7-6876eca6205b", e._sentryDebugIdIdentifier = "sentry-dbid-3d1ebf49-cb78-43ab-afe7-6876eca6205b")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1279], {
    94610: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => m
      });
      var s = t(62229),
        d = t(81788),
        n = t(95966),
        o = t(1225),
        l = t(57771),
        i = t(82943),
        r = t.n(i),
        c = t(39034),
        u = t(17268),
        b = t(85164);
      var f = t(52542),
        g = t(25854);
      const m = (0, d.withIntl)((() => {
        const e = (0, d.useIntl)(),
          a = (0, n.useLocale)(),
          [t, i] = ((0, n.useQueryParams)(), (0, s.useState)({})),
          {
            data: f,
            loading: m
          } = (0, n.useQuery)(r(), {
            variables: t,
            skip: !Object.entries(t).length,
            autoSetLoading: !0
          });
        (0, s.useEffect)((() => {
          i({
            jsonType: "community-guidelines",
            jsonLocale: a,
            metaUrl: "/community-guidelines",
            locale: a
          })
        }), [a]);
        const {
          content: y
        } = f?.companyInfo ?? "", _ = f?.meta ?? "";
        return (0, g.jsx)(g.Fragment, {
          children: !m && f ? (0, g.jsxs)("div", {
            className: b.A.safetyPageContainerStyles,
            "data-context": "safetyPage",
            children: [(0, g.jsxs)("div", {
              className: b.A.mainContent,
              children: [(0, g.jsx)(c.A, {
                heading: _?.title,
                description: _?.description
              }), (0, g.jsx)("div", {
                className: "rockstargames-sites-rockstargamesa2528e5e73ca386e983044e5a393ede0",
                style: {
                  "--community-guidelines-img-desktop": "url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72b457b42c3becc6e865b1087b44be46.svg)",
                  "--community-guidelines-img-mobile": "url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0bd156f6c18d0106ca44d072d26154ba.svg)"
                },
                "aria-label": e.formatMessage(l.A.community_guidelines_image_alt_text)
              }), (0, g.jsx)("div", {
                className: b.A.bodyContent,
                children: (0, g.jsx)("span", {
                  dangerouslySetInnerHTML: {
                    __html: y
                  }
                })
              })]
            }), (0, g.jsx)(u.A, {
              page: "community-guidelines"
            })]
          }) : (0, g.jsx)("div", {
            className: b.A.loading,
            children: (0, g.jsx)(o.A, {})
          })
        })
      }), f)
    }
  }
]);