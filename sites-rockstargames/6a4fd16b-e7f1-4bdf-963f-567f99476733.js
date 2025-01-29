! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6a4fd16b-e7f1-4bdf-963f-567f99476733", e._sentryDebugIdIdentifier = "sentry-dbid-6a4fd16b-e7f1-4bdf-963f-567f99476733")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [2178], {
    43227: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => p
      });
      var n = s(62229),
        t = s(85865),
        d = s.n(t),
        o = s(81788),
        i = s(539),
        r = s(95966),
        l = s(36671),
        c = s(87685),
        f = s(82943),
        m = s.n(f),
        g = s(4501),
        u = s(72251),
        b = s(25469);
      var y = s(98096);
      const p = (0, o.withIntl)((() => {
        const e = (0, o.useIntl)(),
          a = (0, r.useLocale)(),
          [s, t] = ((0, r.useQueryParams)(), (0, n.useState)({})),
          {
            data: c,
            loading: f
          } = (0, r.useQuery)(m(), {
            variables: s,
            skip: !Object.entries(s).length,
            autoSetLoading: !0
          });
        (0, n.useEffect)((() => {
          t({
            jsonType: "community-guidelines",
            jsonLocale: a,
            metaUrl: "/community-guidelines",
            locale: a
          })
        }), [a]);
        const {
          content: p
        } = c?.companyInfo ?? "", _ = c?.meta ?? "";
        return (0, y.jsx)(y.Fragment, {
          children: !f && c ? (0, y.jsxs)("div", {
            className: b.A.safetyPageContainerStyles,
            "data-context": "safetyPage",
            children: [(0, y.jsxs)("div", {
              className: b.A.mainContent,
              children: [(0, y.jsx)(g.A, {
                heading: _?.title,
                description: _?.description
              }), (0, y.jsx)("div", {
                className: "rockstargames-sites-rockstargamesa2528e5e73ca386e983044e5a393ede0",
                style: {
                  "--community-guidelines-img-desktop": "url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72b457b42c3becc6e865b1087b44be46.svg)",
                  "--community-guidelines-img-mobile": "url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0bd156f6c18d0106ca44d072d26154ba.svg)"
                },
                "aria-label": e.formatMessage(i.en.community_guidelines_image_alt_text)
              }), (0, y.jsx)("div", {
                className: b.A.bodyContent,
                children: (0, y.jsx)(d(), {
                  renderInWrapper: !1,
                  jsx: p,
                  onError: e => {
                    console.error("jsx error in companyinfo", e)
                  }
                })
              })]
            }), (0, y.jsx)(u.A, {
              page: "community-guidelines"
            })]
          }) : (0, y.jsx)("div", {
            className: b.A.loading,
            children: (0, y.jsx)(l.A, {})
          })
        })
      }), c.intlMessages)
    }
  }
]);