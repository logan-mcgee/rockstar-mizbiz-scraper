! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b50174fd-803a-4c25-b70c-c79e190d2a09", e._sentryDebugIdIdentifier = "sentry-dbid-b50174fd-803a-4c25-b70c-c79e190d2a09")
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
  [6567], {
    37544: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => g
      });
      var s = t(62229),
        d = t(81788),
        n = t(57771),
        o = t(95966),
        l = t(1225),
        r = t(82943),
        i = t.n(r),
        c = t(39034),
        f = t(85164),
        u = t(17268),
        b = t(52542),
        y = t(25854);
      const g = (0, d.withIntl)((() => {
        const e = (0, d.useIntl)(),
          a = (0, o.useLocale)(),
          [t, r] = ((0, o.useQueryParams)(), (0, s.useState)({})),
          {
            data: b,
            loading: g
          } = (0, o.useQuery)(i(), {
            variables: t,
            skip: !Object.entries(t).length,
            autoSetLoading: !0
          });
        (0, s.useEffect)((() => {
          r({
            jsonType: "community-resources",
            jsonLocale: a,
            metaUrl: "/community-guidelines/resources",
            locale: a
          })
        }), [a]);
        const {
          content: _
        } = b?.companyInfo ?? "", p = b?.meta ?? "";
        return (0, y.jsx)(y.Fragment, {
          children: !g && b ? (0, y.jsxs)("div", {
            className: f.A.safetyPageContainerStyles,
            "data-context": "safetyPage",
            children: [(0, y.jsxs)("div", {
              className: f.A.mainContent,
              children: [(0, y.jsx)(c.A, {
                heading: p?.title,
                description: p?.description,
                lastUpdatedDate: e.formatMessage(n.A.resources_last_updated_date)
              }), (0, y.jsx)("div", {
                className: f.A.bodyContent,
                children: (0, y.jsx)("span", {
                  dangerouslySetInnerHTML: {
                    __html: _
                  }
                })
              })]
            }), (0, y.jsx)(u.A, {
              page: "resources"
            })]
          }) : (0, y.jsx)("div", {
            className: f.A.loading,
            children: (0, y.jsx)(l.A, {})
          })
        })
      }), b)
    }
  }
]);