! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "89448846-a7a7-46ef-9193-5fcb29d52733", e._sentryDebugIdIdentifier = "sentry-dbid-89448846-a7a7-46ef-9193-5fcb29d52733")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [1376, 5456], {
    8113: (e, o, t) => {
      t.r(o), t.d(o, {
        default: () => b
      });
      var a = t(9623),
        s = t(9529),
        r = t(270),
        c = t(2918),
        i = t(5966);
      var l = t(1029);
      const n = e => {
        let {
          children: o,
          ...t
        } = e;
        return (0, l.jsx)("span", {
          ...t,
          className: "rockstargames-modules-core-footeracd86b7f5778381df8fac4a3f7489f60",
          children: o
        })
      };
      var d = t(1788);
      const f = (0, d.defineMessages)({
          footer_rockstar_games: {
            id: "footer_rockstar_games",
            defaultMessage: "Rockstar Games"
          },
          footer_locations_new_york: {
            id: "footer_locations_new_york",
            defaultMessage: "New York"
          },
          footer_locations_london: {
            id: "footer_locations_london",
            defaultMessage: "London"
          },
          footer_locations_paris: {
            id: "footer_locations_paris",
            defaultMessage: "Paris"
          },
          footer_locations_bogota: {
            id: "footer_locations_bogota",
            defaultMessage: "Bogotá"
          },
          footer_established_date_roman: {
            id: "footer_established_date_roman",
            defaultMessage: "MCMXCVIII"
          },
          footer_established_date_numerical: {
            id: "footer_established_date_numerical",
            defaultMessage: "1998"
          },
          footer_contact_label_text: {
            id: "footer_contact_label_text",
            defaultMessage: "Contact"
          },
          footer_community_guidelines_label_text: {
            id: "footer_community_guidelines_label_text",
            defaultMessage: "Community Guidelines"
          },
          footer_cookie_policy_label_text: {
            id: "footer_cookie_policy_label_text",
            defaultMessage: "Cookie Policy"
          },
          footer_cookie_settings_label_text: {
            id: "footer_cookie_settings_label_text",
            defaultMessage: "Cookie Settings"
          },
          footer_subscribe: {
            id: "footer_subscribe",
            defaultMessage: "Subscribe"
          },
          footer_corporate: {
            id: "footer_corporate",
            defaultMessage: "Corporate"
          },
          footer_careers: {
            id: "footer_careers",
            defaultMessage: "Careers"
          },
          footer_legal: {
            id: "footer_legal",
            defaultMessage: "Legal"
          },
          footer_donotsellmyinfo: {
            id: "footer_donotsellmyinfo",
            defaultMessage: "Do Not Sell My Info"
          },
          footer_privacy: {
            id: "footer_privacy",
            defaultMessage: "Privacy"
          }
        }),
        _ = JSON.parse('{"en-US":{"footer_careers":"Careers","footer_community_guidelines_label_text":"Community Guidelines","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Cookie Policy","footer_cookie_settings_label_text":"Cookie Settings","footer_corporate":"Corporate","footer_donotsellmyinfo":"Do Not Sell My Info","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"Legal","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_privacy":"Privacy","footer_rockstar_games":"Rockstar Games","footer_subscribe":"Subscribe"}}'),
        m = {
          siteFooter: "rockstargames-modules-core-footerdc7cba777cf6589cf69816c269336f00",
          subscribe: "rockstargames-modules-core-footerbcf27b773b5b1ff535b821ee12e9617f",
          links: "rockstargames-modules-core-footerbc3b6d69483f851dc763cf158d4cdab4",
          companyInfoLinks: "rockstargames-modules-core-footerf853a5b845e59b2b47bfced9acc1007b",
          languageSelector: "rockstargames-modules-core-footerb37b059d7f0363ae1c3ecdcbaa550800",
          social: "rockstargames-modules-core-footerce74f0f639a40e4a7c4a4e8fa02f6863",
          showsOver: "rockstargames-modules-core-footerfad3756f2a2b53d24b20c5038d31c4ea",
          facebook: "rockstargames-modules-core-footere0e1bcda46cda1dd75267cead52480ba",
          instagram: "rockstargames-modules-core-footerd78334a62b571485ce1486cca503b093",
          youtube: "rockstargames-modules-core-footera3569ad44c06400848d0532bac55e45f",
          twitter: "rockstargames-modules-core-footerb40fc281fa4feb0138cf108246128331",
          twitch: "rockstargames-modules-core-footeraabade562127b2d302f9dc3243057eca",
          discord: "rockstargames-modules-core-footerb0694e2043e208c34007295a1fd66056",
          places: "rockstargames-modules-core-footerf78ce296f6d4330685b053726a4ba8ec"
        },
        {
          host: g
        } = (0, i.getConfigForDomain)(),
        b = (0, d.withIntl)((e => {
          let {
            onLangChange: o
          } = e;
          const t = (0, d.useIntl)(),
            i = (0, a.useLocation)(),
            {
              track: _
            } = (0, c.useGtmTrack)(),
            b = (e, o, t, a) => () => {
              _({
                event: e,
                link_url: o,
                text: t,
                element_placement: a
              })
            };
          return (0, l.jsxs)("footer", {
            className: m.siteFooter,
            "data-testid": "footerNav",
            role: "navigation",
            title: "Footer",
            children: [(0, l.jsx)("div", {
              className: m.languageSelector,
              children: (0, l.jsx)(r.LanguageSelector, {
                location: i,
                onLangChange: o
              })
            }), (0, l.jsxs)("div", {
              className: m.links,
              children: [(0, l.jsx)(s.A, {
                "data-testid": "contactButton",
                onClick: b("cta_other", "/contact", "contact", "footer"),
                to: "/contact",
                children: t.formatMessage(f.footer_contact_label_text)
              }), (0, l.jsx)(s.A, {
                "data-testid": "careersLink",
                onClick: b("cta_other", "/careers", "careers", "footer"),
                to: "/careers",
                children: t.formatMessage(f.footer_careers)
              }), (0, l.jsx)(s.A, {
                "data-testid": "communityGuidelinesLink",
                onClick: b("cta_other", "/community-guidelines", "community guidelines", "footer"),
                to: "/community-guidelines",
                children: t.formatMessage(f.footer_community_guidelines_label_text)
              }), (0, l.jsx)(s.A, {
                "data-testid": "subscribeLink",
                className: m.subscribe,
                onClick: b("cta_subscribe_news", `https://${g}.rockstargames.com/settings/email`, "subscribe", "footer"),
                to: `https://${g}.rockstargames.com/settings/email`,
                target: "_blank",
                children: t.formatMessage(f.footer_subscribe)
              })]
            }), (0, l.jsxs)("div", {
              className: m.companyInfoLinks,
              children: [(0, l.jsx)(s.A, {
                "data-testid": "corporateButton",
                onClick: b("cta_other", "/corpinfo", "corporate", "footer"),
                to: "/corpinfo",
                children: t.formatMessage(f.footer_corporate)
              }), (0, l.jsx)(s.A, {
                "data-testid": "privacyButton",
                onClick: b("cta_other", "/privacy", "privacy", "footer"),
                to: "/privacy",
                children: t.formatMessage(f.footer_privacy)
              }), (0, l.jsx)("button", {
                "data-testid": "cookieSettingsButton",
                onClick: ("cta_other", "", "cookie settings", "footer", () => {
                  _({
                    event: "cta_other",
                    link_url: "",
                    text: "cookie settings",
                    element_placement: "footer"
                  }), window.OneTrust?.ToggleInfoDisplay()
                }),
                children: t.formatMessage(f.footer_cookie_settings_label_text)
              }), (0, l.jsx)(s.A, {
                "data-testid": "cookiePolicyButton",
                onClick: b("cta_other", "/cookies", "cookie policy", "footer"),
                to: "/cookies",
                children: t.formatMessage(f.footer_cookie_policy_label_text)
              }), (0, l.jsx)(s.A, {
                "data-testid": "legalButton",
                onClick: b("cta_other", "/legal", "legal", "footer"),
                to: "/legal",
                children: t.formatMessage(f.footer_legal)
              }), (0, l.jsx)(s.A, {
                "data-testid": "ccpaButton",
                onClick: b("cta_other", "/ccpa", "do not sell my info", "footer"),
                to: "/ccpa",
                children: t.formatMessage(f.footer_donotsellmyinfo)
              })]
            }), (0, l.jsxs)("div", {
              className: m.social,
              children: [(0, l.jsx)(s.A, {
                "aria-label": "Rockstar Games X",
                className: m.twitter,
                "data-testid": "twitterLink",
                onClick: b("cta_other", "https://x.com/rockstargames", "twitter", "footer"),
                target: "_blank",
                title: "X",
                to: "https://x.com/rockstargames"
              }), (0, l.jsx)(s.A, {
                "aria-label": "Rockstar Games Instagram",
                className: m.instagram,
                "data-testid": "instagramLink",
                onClick: b("cta_other", 'https://instagram.com/rockstargames"', "instagram", "footer"),
                target: "_blank",
                title: "Instagram",
                to: "https://instagram.com/rockstargames"
              }), (0, l.jsx)(s.A, {
                "aria-label": "Rockstar Games YouTube",
                className: m.youtube,
                "data-testid": "youtubeLink",
                onClick: b("cta_other", "https://www.youtube.com/rockstargames", "youtube", "footer"),
                target: "_blank",
                title: "YouTube",
                to: "https://www.youtube.com/rockstargames"
              }), (0, l.jsx)(s.A, {
                "aria-label": "Rockstar Games Facebook",
                className: m.facebook,
                "data-testid": "facebookLink",
                onClick: b("cta_other", "https://www.facebook.com/rockstargames", "facebook", "footer"),
                target: "_blank",
                title: "Facebook",
                to: "https://www.facebook.com/rockstargames"
              }), (0, l.jsx)(s.A, {
                "aria-label": "Rockstar Games Twitch",
                className: m.twitch,
                "data-testid": "twitchLink",
                onClick: b("cta_other", "https://twitch.tv/rockstargames", "twitch", "footer"),
                target: "_blank",
                title: "Twitch",
                to: "https://twitch.tv/rockstargames"
              }), (0, l.jsx)(s.A, {
                "aria-label": "Rockstar Games Discord",
                className: m.discord,
                "data-testid": "discordLink",
                onClick: b("cta_other", "https://discord.gg/rockstargames", "discord", "footer"),
                target: "_blank",
                title: "Discord",
                to: "https://discord.gg/rockstargames"
              })]
            }), (0, l.jsxs)("section", {
              className: m.showsOver,
              children: [(0, l.jsx)("div", {
                className: m.whatTeamWildcats,
                children: t.formatMessage(f.footer_rockstar_games)
              }), (0, l.jsxs)("div", {
                className: m.places,
                children: [(0, l.jsx)("span", {
                  children: t.formatMessage(f.footer_locations_new_york)
                }), (0, l.jsx)("span", {
                  children: t.formatMessage(f.footer_locations_london)
                }), (0, l.jsx)("span", {
                  children: t.formatMessage(f.footer_locations_paris)
                }), (0, l.jsx)("span", {
                  children: t.formatMessage(f.footer_locations_bogota)
                })]
              }), (0, l.jsxs)("div", {
                className: m.sophomore,
                children: [(0, l.jsx)("span", {
                  "aria-hidden": !0,
                  children: t.formatMessage(f.footer_established_date_roman)
                }), (0, l.jsx)(n, {
                  children: t.formatMessage(f.footer_established_date_numerical)
                })]
              })]
            })]
          })
        }), _)
    }
  }
]);