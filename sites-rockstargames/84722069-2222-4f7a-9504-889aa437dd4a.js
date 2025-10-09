try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "84722069-2222-4f7a-9504-889aa437dd4a", e._sentryDebugIdIdentifier = "sentry-dbid-84722069-2222-4f7a-9504-889aa437dd4a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7880], {
    29625: (e, s, a) => {
      a.d(s, {
        A: () => o
      });
      var t = a(42295),
        d = a(14200);
      const n = {
          button: "rockstargames-sites-rockstargamesbc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-rockstargamesa3e6439dcaa4870840298d683db4831c"
        },
        o = ({
          className: e = "",
          children: s,
          context: a = "",
          to: o,
          onClick: r,
          target: i = "_self",
          ...l
        }) => {
          const c = [n.button, n[a], e].join(" ");
          return o ? (0, t.jsx)(d.A, {
            ...l,
            to: o,
            className: c,
            onClick: r,
            target: i,
            children: s
          }) : (0, t.jsx)("button", {
            ...l,
            type: "button",
            className: c,
            onClick: r,
            children: s
          })
        }
    },
    47248: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => l
      });
      var t = a(42295),
        d = a(62229),
        n = a(7607),
        o = a(95966),
        r = a(87790),
        i = a(1973);
      const l = (0, o.withTranslations)((({
        t: e
      }) => {
        const {
          setBreadcrumb: s,
          setNormalLogo: a
        } = (0, r.b)();
        return (0, d.useEffect)((() => (s([{
          href: "/newswire",
          title: e("Newswire")
        }], ""), () => {
          a(!0), s()
        })), []), (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("div", {
            className: "rockstargames-sites-rockstargamesfd4f6875c71d228cd0e8c766e33bca79",
            "data-testid": "newswire-list",
            children: (0, t.jsx)(n.A, {
              section: "Newswire",
              t: e
            })
          }), (0, t.jsx)(i.A, {})]
        })
      }))
    }
  }
]);