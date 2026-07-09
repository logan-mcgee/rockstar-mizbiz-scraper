try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2efa7bca-e1fb-4c1f-9932-ac9dcfba2210", e._sentryDebugIdIdentifier = "sentry-dbid-2efa7bca-e1fb-4c1f-9932-ac9dcfba2210")
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
  [687], {
    93482(e, a, s) {
      s.r(a), s.d(a, {
        default: () => p
      });
      var t = s(39793),
        r = s(93082),
        d = s(42285),
        n = s(86805),
        o = s(82199),
        l = s(42909),
        c = s(13331),
        i = s(81270),
        u = s(8157),
        f = s(35270),
        m = s(39620),
        _ = s(88335),
        g = s(3963);
      s(98166);
      const p = (0, l.withIntl)(() => {
        const {
          track: e
        } = (0, o.useGtmTrack)(), a = (0, l.useIntl)(), s = (0, c.useLocale)(), {
          ref: g,
          inView: p
        } = (0, d.useInView)({
          threshold: .6
        }), [b, h] = (0, r.useState)(!1), w = (0, m.r)("hub");
        return (0, r.useEffect)(() => {
          p && !b && (e({
            event: "page_section_impression",
            element_placement: _.A.support_module_header.defaultMessage?.toLowerCase()
          }), h(!0))
        }, [p]), (0, t.jsx)("div", {
          className: "_1ru3mwr0",
          children: (0, t.jsxs)("div", {
            className: (0, i.default)(["_1betujy6 _1betujy5", "_1ru3mwr1"]),
            children: [(0, t.jsxs)("div", {
              className: "_1ru3mwr2",
              children: [(0, t.jsx)(n.Heading, {
                level: 1,
                className: "_1ru3mwr3",
                testId: "community-resource-header",
                children: a.formatMessage(_.A.community_resources_header)
              }), (0, t.jsx)(n.Heading, {
                level: 6,
                className: "_1ru3mwr4",
                asChild: !0,
                children: (0, t.jsx)("p", {
                  children: a.formatMessage(_.A.community_resources_description)
                })
              })]
            }), (0, t.jsx)("div", {
              className: "_1ru3mwr5",
              children: w.map((a, s) => (0, t.jsx)(u.A, {
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
              ref: g,
              children: [(0, t.jsx)("img", {
                className: "_1ru3mwr9",
                alt: a.formatMessage(_.A.support_logo_alt_text),
                src: f
              }), (0, t.jsxs)("div", {
                className: "_1ru3mwra",
                children: [(0, t.jsx)(n.Heading, {
                  level: 6,
                  className: "_1ru3mwr7",
                  children: a.formatMessage(_.A.get_support_card_header)
                }), (0, t.jsx)(n.Body, {
                  size: "SM",
                  className: "_1ru3mwr8",
                  children: a.formatMessage(_.A.support_module_description)
                })]
              }), (0, t.jsx)(n.Button, {
                size: "LG",
                appearance: "secondary",
                onPress: () => {
                  e({
                    event: "cta_support",
                    text: _.A.get_support_cta_text.defaultMessage,
                    link_url: `https://support.rockstargames.com?redirect_lang=${s}`,
                    element_placement: `community resources hub - ${_.A.support_module_header.defaultMessage?.toLowerCase()}`
                  })
                },
                iconRight: "ExternalLink",
                asChild: !0,
                children: (0, t.jsx)("a", {
                  href: `https://support.rockstargames.com?redirect_lang=${s}`,
                  target: "_blank",
                  children: a.formatMessage(_.A.get_support_cta_text)
                })
              })]
            })]
          })
        })
      }, g)
    }
  }
]);