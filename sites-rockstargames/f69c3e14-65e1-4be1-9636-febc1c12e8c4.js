try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "f69c3e14-65e1-4be1-9636-febc1c12e8c4", e._sentryDebugIdIdentifier = "sentry-dbid-f69c3e14-65e1-4be1-9636-febc1c12e8c4")
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
  [7867], {
    61996(e, s, a) {
      a.r(s), a.d(s, {
        default: () => g
      });
      var t = a(42295),
        r = a(71127),
        d = a(21352),
        n = a(38882),
        o = a(82199),
        l = a(42909),
        c = a(13331),
        i = a(1556),
        u = a(61045),
        m = a(35270),
        _ = a(45184),
        f = a(61611),
        p = a(3963);
      a(16643);
      const g = (0, l.withIntl)(() => {
        const {
          track: e
        } = (0, o.useGtmTrack)(), s = (0, l.useIntl)(), a = (0, c.useLocale)(), {
          ref: p,
          inView: g
        } = (0, d.useInView)({
          threshold: .6
        }), [b, h] = (0, r.useState)(!1), w = (0, _.r)("hub");
        return (0, r.useEffect)(() => {
          g && !b && (e({
            event: "page_section_impression",
            element_placement: f.A.support_module_header.defaultMessage?.toLowerCase()
          }), h(!0))
        }, [g]), (0, t.jsx)("div", {
          className: "_1ru3mwr0",
          children: (0, t.jsxs)("div", {
            className: (0, i.default)(["_1betujy6 _1betujy5", "_1ru3mwr1"]),
            children: [(0, t.jsxs)("div", {
              className: "_1ru3mwr2",
              children: [(0, t.jsx)(n.Heading, {
                level: 1,
                className: "_1ru3mwr3",
                testId: "community-resource-header",
                children: s.formatMessage(f.A.community_resources_header)
              }), (0, t.jsx)(n.Heading, {
                level: 6,
                className: "_1ru3mwr4",
                asChild: !0,
                children: (0, t.jsx)("p", {
                  children: s.formatMessage(f.A.community_resources_description)
                })
              })]
            }), (0, t.jsx)("div", {
              className: "_1ru3mwr5",
              children: w.map((s, a) => (0, t.jsx)(u.A, {
                cardData: s,
                type: "article",
                onCardClick: () => ((s, a) => {
                  e({
                    event: s.trackingData?.event,
                    card_name: s.trackingData?.header.toLowerCase(),
                    card_id: a + 1,
                    element_placement: "community resources hub",
                    link_url: s.button.to,
                    text: s.trackingData?.buttonText.toLowerCase()
                  })
                })(s, a)
              }, `${s.header}-articleCard`))
            }), (0, t.jsxs)("div", {
              className: "_1ru3mwr6",
              ref: p,
              children: [(0, t.jsx)("img", {
                className: "_1ru3mwr9",
                alt: s.formatMessage(f.A.support_logo_alt_text),
                src: m
              }), (0, t.jsxs)("div", {
                className: "_1ru3mwra",
                children: [(0, t.jsx)(n.Heading, {
                  level: 6,
                  className: "_1ru3mwr7",
                  children: s.formatMessage(f.A.get_support_card_header)
                }), (0, t.jsx)(n.Body, {
                  size: "SM",
                  className: "_1ru3mwr8",
                  children: s.formatMessage(f.A.support_module_description)
                })]
              }), (0, t.jsx)(n.Button, {
                size: "MD",
                appearance: "secondary",
                onPress: () => {
                  e({
                    event: "cta_support",
                    text: f.A.get_support_cta_text.defaultMessage,
                    link_url: `https://support.rockstargames.com?redirect_lang=${a}`,
                    element_placement: `community resources hub - ${f.A.support_module_header.defaultMessage?.toLowerCase()}`
                  })
                },
                asChild: !0,
                children: (0, t.jsx)("a", {
                  href: `https://support.rockstargames.com?redirect_lang=${a}`,
                  children: s.formatMessage(f.A.get_support_cta_text)
                })
              })]
            })]
          })
        })
      }, p)
    }
  }
]);