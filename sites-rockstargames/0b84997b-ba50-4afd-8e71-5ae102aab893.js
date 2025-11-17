try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0b84997b-ba50-4afd-8e71-5ae102aab893", e._sentryDebugIdIdentifier = "sentry-dbid-0b84997b-ba50-4afd-8e71-5ae102aab893")
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
    77306: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => h
      });
      var t = s(42295),
        r = s(62229),
        d = s(61128),
        n = s(39978),
        o = s(2918),
        l = s(81788),
        c = s(95966),
        i = s(4572),
        u = s.n(i),
        _ = s(61989),
        m = s(35270),
        f = s(45184),
        p = s(61611),
        g = s(3963);
      s(89091);
      const h = (0, l.withIntl)(() => {
        const {
          track: e
        } = (0, o.useGtmTrack)(), a = (0, l.useIntl)(), s = (0, c.useLocale)(), {
          ref: i,
          inView: g
        } = (0, d.useInView)({
          threshold: .6
        }), [h, b] = (0, r.useState)(!1), w = (0, f.r)("hub");
        return (0, r.useEffect)(() => {
          g && !h && (e({
            event: "page_section_impression",
            element_placement: p.A.support_module_header.defaultMessage?.toLowerCase()
          }), b(!0))
        }, [g]), (0, t.jsx)("div", {
          className: "_1ru3mwr0",
          children: (0, t.jsxs)("div", {
            className: u()(["_1betujy6 _1betujy5", "_1ru3mwr1"]),
            children: [(0, t.jsxs)("div", {
              className: "_1ru3mwr2",
              children: [(0, t.jsx)(n.Heading, {
                level: 1,
                className: "_1ru3mwr3",
                children: a.formatMessage(p.A.community_resources_header)
              }), (0, t.jsx)(n.Heading, {
                level: 6,
                className: "_1ru3mwr4",
                asChild: !0,
                children: (0, t.jsx)("p", {
                  children: a.formatMessage(p.A.community_resources_description)
                })
              })]
            }), (0, t.jsx)("div", {
              className: "_1ru3mwr5",
              children: w.map((a, s) => (0, t.jsx)(_.A, {
                cardData: a,
                type: "article",
                onCardClick: () => ((a, s) => {
                  e({
                    event: a.trackingData?.event,
                    card_name: a.trackingData?.header.toLowerCase(),
                    card_id: s + 1,
                    element_placement: "community resources hub",
                    link_url: a.button.to,
                    text: a.trackingData?.buttonText.toLowerCase()
                  })
                })(a, s)
              }, `${a.header}-articleCard`))
            }), (0, t.jsxs)("div", {
              className: "_1ru3mwr6",
              ref: i,
              children: [(0, t.jsx)("img", {
                className: "_1ru3mwr9",
                alt: a.formatMessage(p.A.support_logo_alt_text),
                src: m
              }), (0, t.jsxs)("div", {
                className: "_1ru3mwra",
                children: [(0, t.jsx)(n.Heading, {
                  level: 6,
                  className: "_1ru3mwr7",
                  children: a.formatMessage(p.A.get_support_card_header)
                }), (0, t.jsx)(n.Body, {
                  size: "SM",
                  className: "_1ru3mwr8",
                  children: a.formatMessage(p.A.support_module_description)
                })]
              }), (0, t.jsx)(n.Button, {
                size: "MD",
                appearance: "secondary",
                onPress: () => {
                  e({
                    event: "cta_support",
                    text: p.A.get_support_cta_text.defaultMessage,
                    link_url: `https://support.rockstargames.com?redirect_lang=${s}`,
                    element_placement: `community resources hub - ${p.A.support_module_header.defaultMessage?.toLowerCase()}`
                  })
                },
                asChild: !0,
                children: (0, t.jsx)("a", {
                  href: `https://support.rockstargames.com?redirect_lang=${s}`,
                  children: a.formatMessage(p.A.get_support_cta_text)
                })
              })]
            })]
          })
        })
      }, g)
    }
  }
]);