try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "c59820e1-95b8-47a5-adcd-41379b184dbd", e._sentryDebugIdIdentifier = "sentry-dbid-c59820e1-95b8-47a5-adcd-41379b184dbd")
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
  [886], {
    77306: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => h
      });
      var t = a(42295),
        r = a(62229),
        d = a(61128),
        n = a(327),
        o = a(2918),
        l = a(81788),
        c = a(95966),
        i = a(4572),
        u = a.n(i),
        _ = a(61989),
        m = a(35270),
        f = a(45184),
        p = a(61611),
        g = a(3963);
      a(89091);
      const h = (0, l.withIntl)((() => {
        const {
          track: e
        } = (0, o.useGtmTrack)(), s = (0, l.useIntl)(), a = (0, c.useLocale)(), {
          ref: i,
          inView: g
        } = (0, d.useInView)({
          threshold: .6
        }), [h, b] = (0, r.useState)(!1), w = (0, f.r)("hub");
        return (0, r.useEffect)((() => {
          g && !h && (e({
            event: "page_section_impression",
            element_placement: p.A.support_module_header.defaultMessage?.toLowerCase()
          }), b(!0))
        }), [g]), (0, t.jsx)("div", {
          className: "_1ru3mwr0",
          children: (0, t.jsxs)("div", {
            className: u()(["_1betujy6 _1betujy5", "_1ru3mwr1"]),
            children: [(0, t.jsxs)("div", {
              className: "_1ru3mwr2",
              children: [(0, t.jsx)(n.Heading, {
                level: 1,
                className: "_1ru3mwr3",
                children: s.formatMessage(p.A.community_resources_header)
              }), (0, t.jsx)(n.Heading, {
                level: 6,
                className: "_1ru3mwr4",
                asChild: !0,
                children: (0, t.jsx)("p", {
                  children: s.formatMessage(p.A.community_resources_description)
                })
              })]
            }), (0, t.jsx)("div", {
              className: "_1ru3mwr5",
              children: w.map(((s, a) => (0, t.jsx)(_.A, {
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
            }), (0, t.jsxs)("div", {
              className: "_1ru3mwr6",
              ref: i,
              children: [(0, t.jsx)("img", {
                className: "_1ru3mwr9",
                alt: s.formatMessage(p.A.support_logo_alt_text),
                src: m
              }), (0, t.jsxs)("div", {
                className: "_1ru3mwra",
                children: [(0, t.jsx)(n.Heading, {
                  level: 6,
                  className: "_1ru3mwr7",
                  children: s.formatMessage(p.A.get_support_card_header)
                }), (0, t.jsx)(n.Body, {
                  size: "SM",
                  className: "_1ru3mwr8",
                  children: s.formatMessage(p.A.support_module_description)
                })]
              }), (0, t.jsx)(n.Button, {
                size: "MD",
                appearance: "secondary",
                onPress: () => {
                  e({
                    event: "cta_support",
                    text: p.A.get_support_cta_text.defaultMessage,
                    link_url: `https://support.rockstargames.com?redirect_lang=${a}`,
                    element_placement: `community resources hub - ${p.A.support_module_header.defaultMessage?.toLowerCase()}`
                  })
                },
                asChild: !0,
                children: (0, t.jsx)("a", {
                  href: `https://support.rockstargames.com?redirect_lang=${a}`,
                  children: s.formatMessage(p.A.get_support_cta_text)
                })
              })]
            })]
          })
        })
      }), g)
    }
  }
]);