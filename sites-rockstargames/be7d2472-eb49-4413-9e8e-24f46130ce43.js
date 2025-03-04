! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "be7d2472-eb49-4413-9e8e-24f46130ce43", e._sentryDebugIdIdentifier = "sentry-dbid-be7d2472-eb49-4413-9e8e-24f46130ce43")
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
  [8077], {
    45992: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => b
      });
      var t = s(62229),
        n = s(81788),
        d = s(95966),
        o = s(9137),
        i = s(39183),
        l = s(82943),
        r = s.n(l),
        c = s(9830),
        m = s(79345),
        g = s(21932);
      var f = s(52542),
        u = s(91029);
      const b = (0, n.withIntl)((() => {
        const e = (0, n.useIntl)(),
          a = (0, d.useLocale)(),
          [s, l] = ((0, d.useQueryParams)(), (0, t.useState)({})),
          {
            data: f,
            loading: b
          } = (0, d.useQuery)(r(), {
            variables: s,
            skip: !Object.entries(s).length,
            autoSetLoading: !0
          });
        (0, t.useEffect)((() => {
          l({
            jsonType: "community-guidelines",
            jsonLocale: a,
            metaUrl: "/community-guidelines",
            locale: a
          })
        }), [a]);
        const {
          content: y
        } = f?.companyInfo ?? "", _ = f?.meta ?? "";
        return (0, u.jsx)(u.Fragment, {
          children: !b && f ? (0, u.jsxs)("div", {
            className: g.A.safetyPageContainerStyles,
            "data-context": "safetyPage",
            children: [(0, u.jsxs)("div", {
              className: g.A.mainContent,
              children: [(0, u.jsx)(c.A, {
                heading: _?.title,
                description: _?.description
              }), (0, u.jsx)("div", {
                className: "rockstargames-sites-rockstargamesa2528e5e73ca386e983044e5a393ede0",
                style: {
                  "--community-guidelines-img-desktop": "url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72b457b42c3becc6e865b1087b44be46.svg)",
                  "--community-guidelines-img-mobile": "url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0bd156f6c18d0106ca44d072d26154ba.svg)"
                },
                "aria-label": e.formatMessage(i.A.community_guidelines_image_alt_text)
              }), (0, u.jsx)("div", {
                className: g.A.bodyContent,
                children: (0, u.jsx)("span", {
                  dangerouslySetInnerHTML: {
                    __html: y
                  }
                })
              })]
            }), (0, u.jsx)(m.A, {
              page: "community-guidelines"
            })]
          }) : (0, u.jsx)("div", {
            className: g.A.loading,
            children: (0, u.jsx)(o.A, {})
          })
        })
      }), f)
    }
  }
]);