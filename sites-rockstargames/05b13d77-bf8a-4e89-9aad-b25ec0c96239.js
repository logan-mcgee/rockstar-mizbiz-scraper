! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "05b13d77-bf8a-4e89-9aad-b25ec0c96239", e._sentryDebugIdIdentifier = "sentry-dbid-05b13d77-bf8a-4e89-9aad-b25ec0c96239")
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
  [1794], {
    81794: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => y
      });
      var t = s(62229),
        n = s(81788),
        d = s(87893),
        o = s(95966),
        l = s(23066),
        r = s(82943),
        i = s.n(r),
        c = s(34365),
        f = s(51451),
        u = s(39006),
        g = s(52542),
        b = s(73855);
      const y = (0, n.withIntl)((() => {
        const e = (0, n.useIntl)(),
          a = (0, o.useLocale)(),
          [s, r] = ((0, o.useQueryParams)(), (0, t.useState)({})),
          {
            data: g,
            loading: y
          } = (0, o.useQuery)(i(), {
            variables: s,
            skip: !Object.entries(s).length,
            autoSetLoading: !0
          });
        (0, t.useEffect)((() => {
          r({
            jsonType: "community-resources",
            jsonLocale: a,
            metaUrl: "/community-guidelines/resources",
            locale: a
          })
        }), [a]);
        const {
          content: _
        } = g?.companyInfo ?? "", m = g?.meta ?? "";
        return (0, b.jsx)(b.Fragment, {
          children: !y && g ? (0, b.jsxs)("div", {
            className: f.A.safetyPageContainerStyles,
            "data-context": "safetyPage",
            children: [(0, b.jsxs)("div", {
              className: f.A.mainContent,
              children: [(0, b.jsx)(c.A, {
                heading: m?.title,
                description: m?.description,
                lastUpdatedDate: e.formatMessage(d.A.resources_last_updated_date)
              }), (0, b.jsx)("div", {
                className: f.A.bodyContent,
                children: (0, b.jsx)("span", {
                  dangerouslySetInnerHTML: {
                    __html: _
                  }
                })
              })]
            }), (0, b.jsx)(u.A, {
              page: "resources"
            })]
          }) : (0, b.jsx)("div", {
            className: f.A.loading,
            children: (0, b.jsx)(l.A, {})
          })
        })
      }), g)
    }
  }
]);