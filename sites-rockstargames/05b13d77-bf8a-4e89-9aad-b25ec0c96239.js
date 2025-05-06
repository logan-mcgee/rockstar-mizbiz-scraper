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
        c = s.n(r),
        i = s(34365),
        f = s(51451),
        u = s(39006),
        b = s(52542),
        g = s(73855);
      const y = (0, n.withIntl)((() => {
        const e = (0, n.useIntl)(),
          a = (0, o.useLocale)(),
          [s, r] = ((0, o.useQueryParams)(), (0, t.useState)({})),
          {
            data: b,
            loading: y
          } = (0, o.useQuery)(c(), {
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
        } = b?.companyInfo ?? "", m = b?.meta ?? "";
        return (0, g.jsx)(g.Fragment, {
          children: !y && b ? (0, g.jsxs)("div", {
            className: f.A.safetyPageContainerStyles,
            "data-context": "safetyPage",
            children: [(0, g.jsxs)("div", {
              className: f.A.mainContent,
              children: [(0, g.jsx)(i.A, {
                heading: m?.title,
                description: m?.description,
                lastUpdatedDate: e.formatMessage(d.A.resources_last_updated_date)
              }), (0, g.jsx)("div", {
                className: f.A.bodyContent,
                children: (0, g.jsx)("span", {
                  dangerouslySetInnerHTML: {
                    __html: _
                  }
                })
              })]
            }), (0, g.jsx)(u.A, {
              page: "resources"
            })]
          }) : (0, g.jsx)("div", {
            className: f.A.loading,
            children: (0, g.jsx)(l.A, {})
          })
        })
      }), b)
    }
  }
]);