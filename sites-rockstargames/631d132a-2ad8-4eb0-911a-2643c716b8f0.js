! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "631d132a-2ad8-4eb0-911a-2643c716b8f0", e._sentryDebugIdIdentifier = "sentry-dbid-631d132a-2ad8-4eb0-911a-2643c716b8f0")
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
  [1827], {
    12470: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => m
      });
      var n = s(62229),
        t = s(85865),
        d = s.n(t),
        o = s(81788),
        r = s(539),
        l = s(95966),
        i = s(36671),
        c = s(87685),
        f = s(82943),
        u = s.n(f),
        g = s(4501),
        b = s(25469),
        y = s(72251),
        p = s(98096);
      const m = (0, o.withIntl)((() => {
        const e = (0, o.useIntl)(),
          a = (0, l.useLocale)(),
          [s, t] = ((0, l.useQueryParams)(), (0, n.useState)({})),
          {
            data: c,
            loading: f
          } = (0, l.useQuery)(u(), {
            variables: s,
            skip: !Object.entries(s).length,
            autoSetLoading: !0
          });
        (0, n.useEffect)((() => {
          t({
            jsonType: "community-resources",
            jsonLocale: a,
            metaUrl: "/community-guidelines/resources",
            locale: a
          })
        }), [a]);
        const {
          content: m
        } = c?.companyInfo ?? "", _ = c?.meta ?? "";
        return (0, p.jsx)(p.Fragment, {
          children: !f && c ? (0, p.jsxs)("div", {
            className: b.A.safetyPageContainerStyles,
            "data-context": "safetyPage",
            children: [(0, p.jsxs)("div", {
              className: b.A.mainContent,
              children: [(0, p.jsx)(g.A, {
                heading: _?.title,
                description: _?.description,
                lastUpdatedDate: e.formatMessage(r.en.resources_last_updated_date)
              }), (0, p.jsx)("div", {
                className: b.A.bodyContent,
                children: (0, p.jsx)(d(), {
                  renderInWrapper: !1,
                  jsx: m,
                  onError: e => {
                    console.error("jsx error in companyinfo", e)
                  }
                })
              })]
            }), (0, p.jsx)(y.A, {
              page: "resources"
            })]
          }) : (0, p.jsx)("div", {
            className: b.A.loading,
            children: (0, p.jsx)(i.A, {})
          })
        })
      }), c.intlMessages)
    }
  }
]);