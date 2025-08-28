try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "17ed8f7e-31bf-4b65-9edf-ffd6c5c93878", e._sentryDebugIdIdentifier = "sentry-dbid-17ed8f7e-31bf-4b65-9edf-ffd6c5c93878")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "793af7f1166af90e36185780de33260abbd44330",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "793af7f1166af90e36185780de33260abbd44330"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9614], {
    99174: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => g
      });
      var t = a(62229),
        r = a(66664),
        d = a(15636),
        n = a(2918),
        o = a(81788),
        l = a(95966),
        i = a(5060),
        c = a(44341),
        u = a(35270),
        f = a(42896),
        _ = a(20155),
        m = a(3963),
        p = (a(34196), a(70954));
      const g = (0, o.withIntl)((() => {
        const {
          track: e
        } = (0, n.useGtmTrack)(), s = (0, o.useIntl)(), a = (0, l.useLocale)(), {
          ref: m,
          inView: g
        } = (0, r.useInView)({
          threshold: .6
        }), [h, b] = (0, t.useState)(!1), w = (0, f.r)("hub");
        return (0, t.useEffect)((() => {
          g && !h && (e({
            event: "page_section_impression",
            element_placement: _.A.support_module_header.defaultMessage?.toLowerCase()
          }), b(!0))
        }), [g]), (0, p.jsx)("div", {
          className: "_1ru3mwr0",
          children: (0, p.jsxs)("div", {
            className: (0, i.A)(["_1betujy6 _1betujy5", "_1ru3mwr1"]),
            children: [(0, p.jsxs)("div", {
              className: "_1ru3mwr2",
              children: [(0, p.jsx)(d.Heading, {
                level: 1,
                className: "_1ru3mwr3",
                children: s.formatMessage(_.A.community_resources_header)
              }), (0, p.jsx)(d.Heading, {
                level: 6,
                className: "_1ru3mwr4",
                asChild: !0,
                children: (0, p.jsx)("p", {
                  children: s.formatMessage(_.A.community_resources_description)
                })
              })]
            }), (0, p.jsx)("div", {
              className: "_1ru3mwr5",
              children: w.map(((s, a) => (0, p.jsx)(c.A, {
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
              }, `${s.header}-articleCard`)))
            }), (0, p.jsxs)("div", {
              className: "_1ru3mwr6",
              ref: m,
              children: [(0, p.jsx)("img", {
                className: "_1ru3mwr9",
                alt: s.formatMessage(_.A.support_logo_alt_text),
                src: u
              }), (0, p.jsxs)("div", {
                className: "_1ru3mwra",
                children: [(0, p.jsx)(d.Heading, {
                  level: 6,
                  className: "_1ru3mwr7",
                  children: s.formatMessage(_.A.get_support_card_header)
                }), (0, p.jsx)(d.Body, {
                  size: "SM",
                  className: "_1ru3mwr8",
                  children: s.formatMessage(_.A.support_module_description)
                })]
              }), (0, p.jsx)(d.Button, {
                size: "MD",
                appearance: "secondary",
                onPress: () => {
                  e({
                    event: "cta_support",
                    text: _.A.get_support_cta_text.defaultMessage,
                    link_url: `https://support.rockstargames.com?redirect_lang=${a}`,
                    element_placement: `community resources hub - ${_.A.support_module_header.defaultMessage?.toLowerCase()}`
                  })
                },
                asChild: !0,
                children: (0, p.jsx)("a", {
                  href: `https://support.rockstargames.com?redirect_lang=${a}`,
                  children: s.formatMessage(_.A.get_support_cta_text)
                })
              })]
            })]
          })
        })
      }), m)
    }
  }
]);