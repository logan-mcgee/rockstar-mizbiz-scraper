! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3ddea359-6fcc-4016-8111-903cebc66bd2", e._sentryDebugIdIdentifier = "sentry-dbid-3ddea359-6fcc-4016-8111-903cebc66bd2")
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
  [6669], {
    97464: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => p
      });
      var t = s(62229),
        r = s(66664),
        d = s(61898),
        l = s(2918),
        o = s(81788),
        n = s(95966),
        c = s(68879),
        i = s(90531),
        u = s(35270),
        _ = s(553),
        m = s(96994),
        f = s(3963),
        g = (s(84809), s(25854));
      const p = (0, o.withIntl)((() => {
        const {
          track: e
        } = (0, l.useGtmTrack)(), a = (0, o.useIntl)(), s = (0, n.useLocale)(), {
          ref: f,
          inView: p
        } = (0, r.useInView)({
          threshold: .6
        }), [b, h] = (0, t.useState)(!1), y = (0, _.r)("hub");
        return (0, t.useEffect)((() => {
          p && !b && (e({
            event: "page_section_impression",
            element_placement: m.A.support_module_header.defaultMessage
          }), h(!0))
        }), [p]), (0, g.jsx)("div", {
          className: "_1ru3mwr0",
          children: (0, g.jsxs)("div", {
            className: (0, c.A)(["_1betujy5 _1betujy4", "_1ru3mwr1"]),
            children: [(0, g.jsxs)("div", {
              className: "_1ru3mwr2",
              children: [(0, g.jsx)(d.Heading, {
                level: 1,
                className: "_1ru3mwr3",
                children: a.formatMessage(m.A.community_resources_header)
              }), (0, g.jsx)(d.Heading, {
                level: 6,
                className: "_1ru3mwr4",
                asChild: !0,
                children: (0, g.jsx)("p", {
                  children: a.formatMessage(m.A.community_resources_description)
                })
              })]
            }), (0, g.jsx)("div", {
              className: "_1ru3mwr5",
              children: y.map(((a, s) => (0, g.jsx)(i.A, {
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
              }, `${a.header}-articleCard`)))
            }), (0, g.jsxs)("div", {
              className: "_1ru3mwr6",
              ref: f,
              children: [(0, g.jsx)("img", {
                className: "_1ru3mwr9",
                alt: a.formatMessage(m.A.support_logo_alt_text),
                src: u
              }), (0, g.jsxs)("div", {
                className: "_1ru3mwra",
                children: [(0, g.jsx)(d.Heading, {
                  level: 6,
                  className: "_1ru3mwr7",
                  children: a.formatMessage(m.A.get_support_card_header)
                }), (0, g.jsx)(d.Body, {
                  size: "SM",
                  className: "_1ru3mwr8",
                  children: a.formatMessage(m.A.support_module_description)
                })]
              }), (0, g.jsx)(d.Button, {
                size: "MD",
                appearance: "secondary",
                onPress: () => {
                  e({
                    event: "cta_support",
                    text: m.A.get_support_cta_text.defaultMessage,
                    link_url: `https://support.rockstargames.com?redirect_lang=${s}`,
                    element_placement: `community resources hub - ${m.A.support_module_header.defaultMessage}`
                  })
                },
                asChild: !0,
                children: (0, g.jsx)("a", {
                  href: `https://support.rockstargames.com?redirect_lang=${s}`,
                  children: a.formatMessage(m.A.get_support_cta_text)
                })
              })]
            })]
          })
        })
      }), f)
    }
  }
]);