try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "a437e4cd-bf8d-42e6-9d84-0cd6dadf6e66", e._sentryDebugIdIdentifier = "sentry-dbid-a437e4cd-bf8d-42e6-9d84-0cd6dadf6e66")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9185], {
    97464: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => g
      });
      var t = a(62229),
        r = a(66664),
        d = a(61898),
        n = a(2918),
        o = a(81788),
        l = a(95966),
        c = a(68879),
        i = a(90531),
        u = a(35270),
        _ = a(553),
        m = a(96994),
        f = a(3963),
        p = (a(31777), a(25854));
      const g = (0, o.withIntl)((() => {
        const {
          track: e
        } = (0, n.useGtmTrack)(), s = (0, o.useIntl)(), a = (0, l.useLocale)(), {
          ref: f,
          inView: g
        } = (0, r.useInView)({
          threshold: .6
        }), [h, b] = (0, t.useState)(!1), w = (0, _.r)("hub");
        return (0, t.useEffect)((() => {
          g && !h && (e({
            event: "page_section_impression",
            element_placement: m.A.support_module_header.defaultMessage?.toLowerCase()
          }), b(!0))
        }), [g]), (0, p.jsx)("div", {
          className: "_1ru3mwr0",
          children: (0, p.jsxs)("div", {
            className: (0, c.A)(["_1betujy5 _1betujy4", "_1ru3mwr1"]),
            children: [(0, p.jsxs)("div", {
              className: "_1ru3mwr2",
              children: [(0, p.jsx)(d.Heading, {
                level: 1,
                className: "_1ru3mwr3",
                children: s.formatMessage(m.A.community_resources_header)
              }), (0, p.jsx)(d.Heading, {
                level: 6,
                className: "_1ru3mwr4",
                asChild: !0,
                children: (0, p.jsx)("p", {
                  children: s.formatMessage(m.A.community_resources_description)
                })
              })]
            }), (0, p.jsx)("div", {
              className: "_1ru3mwr5",
              children: w.map(((s, a) => (0, p.jsx)(i.A, {
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
              ref: f,
              children: [(0, p.jsx)("img", {
                className: "_1ru3mwr9",
                alt: s.formatMessage(m.A.support_logo_alt_text),
                src: u
              }), (0, p.jsxs)("div", {
                className: "_1ru3mwra",
                children: [(0, p.jsx)(d.Heading, {
                  level: 6,
                  className: "_1ru3mwr7",
                  children: s.formatMessage(m.A.get_support_card_header)
                }), (0, p.jsx)(d.Body, {
                  size: "SM",
                  className: "_1ru3mwr8",
                  children: s.formatMessage(m.A.support_module_description)
                })]
              }), (0, p.jsx)(d.Button, {
                size: "MD",
                appearance: "secondary",
                onPress: () => {
                  e({
                    event: "cta_support",
                    text: m.A.get_support_cta_text.defaultMessage,
                    link_url: `https://support.rockstargames.com?redirect_lang=${a}`,
                    element_placement: `community resources hub - ${m.A.support_module_header.defaultMessage?.toLowerCase()}`
                  })
                },
                asChild: !0,
                children: (0, p.jsx)("a", {
                  href: `https://support.rockstargames.com?redirect_lang=${a}`,
                  children: s.formatMessage(m.A.get_support_cta_text)
                })
              })]
            })]
          })
        })
      }), f)
    }
  }
]);