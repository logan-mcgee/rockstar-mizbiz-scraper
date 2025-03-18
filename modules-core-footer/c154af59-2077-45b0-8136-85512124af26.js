! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "c154af59-2077-45b0-8136-85512124af26", e._sentryDebugIdIdentifier = "sentry-dbid-c154af59-2077-45b0-8136-85512124af26")
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
  [1376, 6629], {
    38113: (e, o, t) => {
      t.r(o), t.d(o, {
        default: () => u
      });
      var a = t(9623),
        s = t(96711),
        n = t(29529);
      var r = t(91029);
      const c = e => {
        let {
          children: o,
          ...t
        } = e;
        return (0, r.jsx)("span", {
          ...t,
          className: "rockstargames-modules-core-footeracd86b7f5778381df8fac4a3f7489f60",
          children: o
        })
      };
      var i = t(20270),
        l = t(2918),
        f = t(95966),
        d = t(81788);
      const m = (0, d.defineMessages)({
          footer_rockstar_games: {
            id: "footer_rockstar_games",
            defaultMessage: "Rockstar Games"
          },
          footer_section_contact_us: {
            id: "footer_section_contact_us",
            defaultMessage: "Contact Us"
          },
          footer_section_company_info: {
            id: "footer_section_company_info",
            defaultMessage: "Company Info"
          },
          footer_section_social_icons: {
            id: "footer_section_social_icons",
            defaultMessage: "Social Media"
          },
          footer_section_organization_info: {
            id: "footer_section_organization_info",
            defaultMessage: "Organization Info"
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
            defaultMessage: "Do Not Sell or Share My Personal Information"
          },
          footer_privacy: {
            id: "footer_privacy",
            defaultMessage: "Privacy"
          }
        }),
        _ = JSON.parse('{"en-US":{"footer_careers":"Careers","footer_community_guidelines_label_text":"Community Guidelines","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Cookie Policy","footer_cookie_settings_label_text":"Cookie Settings","footer_corporate":"Corporate","footer_donotsellmyinfo":"Do Not Sell or Share My Personal Information","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"Legal","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_privacy":"Privacy","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"Company Info","footer_section_contact_us":"Contact Us","footer_section_organization_info":"Organization Info","footer_section_social_icons":"Social Media","footer_subscribe":"Subscribe"}}'),
        g = {
          pillBtn: "rockstargames-modules-core-footerc3fe63f31b69138642a2826c7f92be54",
          selected: "rockstargames-modules-core-footerfd0264e741af69a6696c0723a8ed1875",
          siteFooter: "rockstargames-modules-core-footerdc7cba777cf6589cf69816c269336f00",
          listElement: "rockstargames-modules-core-footere8f1f37193e0a1bbf8c7ce706437b2c6",
          siteFooterFirstRow: "rockstargames-modules-core-footerbde93fdc93e6f33c7a2c70006f456584",
          contactUsLinks: "rockstargames-modules-core-footerb5c24f103b44da188f8ba7091f2311c4",
          contactUsLinksListElement: "rockstargames-modules-core-footerf7236aa9d59194028c9a9dfa66f2a6ef",
          contactUsLinksListItemElementContent: "rockstargames-modules-core-footerf37482c5332dc1534d66c900fe9940d0",
          siteFooterSecondRow: "rockstargames-modules-core-footerb558515ca5ee01f23cce973848c4dc6f",
          companyInfoLinks: "rockstargames-modules-core-footerf853a5b845e59b2b47bfced9acc1007b",
          companyInfoLinksListElement: "rockstargames-modules-core-footerfcbf7f59cd576b97bd48cbe031927b52",
          companyInfoLinksListItemContent: "rockstargames-modules-core-footerc4a6ef30e36443c3593a46273a961911",
          socialIconLinks: "rockstargames-modules-core-footera3603e0dfe32e5e459646d5050e69da1",
          socialIconLinksListElement: "rockstargames-modules-core-footerabd430e51ed1a4ea694cb383af9418f6",
          siteFooterThirdRow: "rockstargames-modules-core-footerd698977b857336c125cdfcb3b7654d5d",
          additionalInfoLocationsListElement: "rockstargames-modules-core-footerf21eb2a6c202cb30e8b192c4bda3731d",
          additionalInfoEstablishedDate: "rockstargames-modules-core-footerd0a638805e7b844a609f1e8bfbf5fc5f",
          additionalInfoOrganization: "rockstargames-modules-core-footeraf4cfb9cce056156d3e4a4c7c270769d"
        },
        {
          host: k
        } = (0, f.getConfigForDomain)(),
        b = e => {
          let {
            linkBase: o,
            onLanguageChange: t,
            ...f
          } = e;
          const _ = (0, d.useIntl)(),
            b = (0, a.useLocation)(),
            {
              track: u
            } = (0, l.useGtmTrack)(),
            h = (e, o, t, a) => () => {
              u({
                event: e,
                link_url: o,
                text: t,
                element_placement: a
              })
            };
          return (0, r.jsxs)("footer", {
            className: g.siteFooter,
            "data-testid": "footer-nav",
            role: "navigation",
            title: "Footer",
            ...f,
            children: [(0, r.jsxs)("div", {
              className: g.siteFooterFirstRow,
              children: [(0, r.jsx)("nav", {
                "aria-label": _.formatMessage(m.footer_section_contact_us),
                className: g.contactUsLinks,
                children: (0, r.jsxs)("ul", {
                  className: g.contactUsLinksListElement,
                  children: [(0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.contactUsLinksListItemElementContent,
                      "data-testid": "footer-contact-link",
                      onClick: h("cta_other", "/contact", "contact", "footer"),
                      to: `${o}/contact`,
                      children: _.formatMessage(m.footer_contact_label_text)
                    })
                  }), (0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.contactUsLinksListItemElementContent,
                      "data-testid": "footer-careers-link",
                      onClick: h("cta_other", "/careers", "careers", "footer"),
                      to: `${o}/careers`,
                      children: _.formatMessage(m.footer_careers)
                    })
                  }), (0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.contactUsLinksListItemElementContent,
                      "data-testid": "footer-community-guidelines-link",
                      onClick: h("cta_other", "/community-guidelines", "community guidelines", "footer"),
                      to: `${o}/community-guidelines`,
                      children: _.formatMessage(m.footer_community_guidelines_label_text)
                    })
                  }), (0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.contactUsLinksListItemElementContent,
                      "data-testid": "footer-subscribe-link",
                      onClick: h("cta_subscribe_news", `https://${k}.rockstargames.com/settings/email`, "subscribe", "footer"),
                      target: "_blank",
                      to: `https://${k}.rockstargames.com/settings/email`,
                      children: _.formatMessage(m.footer_subscribe)
                    })
                  })]
                })
              }), (0, r.jsx)(i.LanguageSelector, {
                theme: "footer",
                location: b,
                onLanguageChange: t
              })]
            }), (0, r.jsxs)("div", {
              className: g.siteFooterSecondRow,
              children: [(0, r.jsx)("nav", {
                "aria-label": _.formatMessage(m.footer_section_company_info),
                className: g.companyInfoLinks,
                children: (0, r.jsxs)("ul", {
                  className: g.companyInfoLinksListElement,
                  children: [(0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.companyInfoLinksListItemContent,
                      "data-testid": "footer-corporate-link",
                      onClick: h("cta_other", "/corpinfo", "corporate", "footer"),
                      to: `${o}/corpinfo`,
                      children: _.formatMessage(m.footer_corporate)
                    })
                  }), (0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.companyInfoLinksListItemContent,
                      "data-testid": "footer-privacy-link",
                      onClick: h("cta_other", "/privacy", "privacy", "footer"),
                      to: `${o}/privacy`,
                      children: _.formatMessage(m.footer_privacy)
                    })
                  }), (0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)("button", {
                      className: g.companyInfoLinksListItemContent,
                      "data-testid": "footer-cookie-settings-button",
                      onClick: ("cta_other", "", "cookie settings", "footer", () => {
                        u({
                          event: "cta_other",
                          link_url: "",
                          text: "cookie settings",
                          element_placement: "footer"
                        }), window.OneTrust?.ToggleInfoDisplay()
                      }),
                      children: _.formatMessage(m.footer_cookie_settings_label_text)
                    })
                  }), (0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.companyInfoLinksListItemContent,
                      "data-testid": "footer-cookie-policy-link",
                      onClick: h("cta_other", "/cookies", "cookie policy", "footer"),
                      to: `${o}/cookies`,
                      children: _.formatMessage(m.footer_cookie_policy_label_text)
                    })
                  }), (0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.companyInfoLinksListItemContent,
                      "data-testid": "footer-legal-link",
                      onClick: h("cta_other", "/legal", "legal", "footer"),
                      to: `${o}/legal`,
                      children: _.formatMessage(m.footer_legal)
                    })
                  }), (0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.companyInfoLinksListItemContent,
                      "data-testid": "footer-ccpa-link",
                      onClick: h("cta_other", "/ccpa", "do not sell my info", "footer"),
                      to: `${o}/ccpa`,
                      children: _.formatMessage(m.footer_donotsellmyinfo)
                    })
                  })]
                })
              }), (0, r.jsx)("nav", {
                "aria-label": _.formatMessage(m.footer_section_social_icons),
                className: g.socialIconLinks,
                children: (0, r.jsxs)("ul", {
                  className: g.socialIconLinksListElement,
                  children: [(0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.linksListItemElementContent,
                      "aria-label": "Rockstar Games X",
                      "data-testid": "twitter-link",
                      onClick: h("cta_other", "https://x.com/rockstargames", "twitter", "footer"),
                      target: "_blank",
                      title: "X",
                      to: "https://x.com/rockstargames",
                      children: (0, r.jsx)(s.IconButton, {
                        appearance: "ghost",
                        icon: "Twitter",
                        size: "MD",
                        label: "Rockstar Games X"
                      })
                    })
                  }), (0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.linksListItemElementContent,
                      "aria-label": "Rockstar Games Instagram",
                      "data-testid": "instagram-link",
                      onClick: h("cta_other", 'https://instagram.com/rockstargames"', "instagram", "footer"),
                      target: "_blank",
                      title: "Instagram",
                      to: "https://instagram.com/rockstargames",
                      children: (0, r.jsx)(s.IconButton, {
                        appearance: "ghost",
                        icon: "Instagram",
                        size: "MD",
                        label: "Rockstar Games Instagram"
                      })
                    })
                  }), (0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.linksListItemElementContent,
                      "aria-label": "Rockstar Games YouTube",
                      "data-testid": "youtube-link",
                      onClick: h("cta_other", "https://www.youtube.com/rockstargames", "youtube", "footer"),
                      target: "_blank",
                      title: "YouTube",
                      to: "https://www.youtube.com/rockstargames",
                      children: (0, r.jsx)(s.IconButton, {
                        appearance: "ghost",
                        icon: "Youtube",
                        size: "MD",
                        label: "Rockstar Games YouTube"
                      })
                    })
                  }), (0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.linksListItemElementContent,
                      "aria-label": "Rockstar Games Facebook",
                      "data-testid": "facebook-link",
                      onClick: h("cta_other", "https://www.facebook.com/rockstargames", "facebook", "footer"),
                      target: "_blank",
                      title: "Facebook",
                      to: "https://www.facebook.com/rockstargames",
                      children: (0, r.jsx)(s.IconButton, {
                        appearance: "ghost",
                        icon: "Facebook",
                        size: "MD",
                        label: "Rockstar Games Facebook"
                      })
                    })
                  }), (0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.linksListItemElementContent,
                      "aria-label": "Rockstar Games Twitch",
                      "data-testid": "twitch-link",
                      onClick: h("cta_other", "https://twitch.tv/rockstargames", "twitch", "footer"),
                      target: "_blank",
                      title: "Twitch",
                      to: "https://twitch.tv/rockstargames",
                      children: (0, r.jsx)(s.IconButton, {
                        appearance: "ghost",
                        icon: "Twitch",
                        size: "MD",
                        label: "Rockstar Games Twitch"
                      })
                    })
                  }), (0, r.jsx)("li", {
                    className: g.listElement,
                    children: (0, r.jsx)(n.A, {
                      className: g.linksListItemElementContent,
                      "aria-label": "Rockstar Games Discord",
                      "data-testid": "discord-link",
                      onClick: h("cta_other", "https://discord.gg/rockstargames", "discord", "footer"),
                      target: "_blank",
                      title: "Discord",
                      to: "https://discord.gg/rockstargames",
                      children: (0, r.jsx)(s.IconButton, {
                        appearance: "ghost",
                        icon: "Discord",
                        size: "MD",
                        label: "Rockstar Games Discord"
                      })
                    })
                  })]
                })
              })]
            }), (0, r.jsxs)("section", {
              "aria-label": _.formatMessage(m.footer_section_organization_info),
              className: g.siteFooterThirdRow,
              children: [(0, r.jsx)("span", {
                className: g.additionalInfoOrganization,
                children: _.formatMessage(m.footer_rockstar_games)
              }), (0, r.jsxs)("ul", {
                className: g.additionalInfoLocationsListElement,
                children: [(0, r.jsx)("li", {
                  className: g.listElement,
                  children: (0, r.jsx)("span", {
                    children: _.formatMessage(m.footer_locations_new_york)
                  })
                }), (0, r.jsx)("li", {
                  className: g.listElement,
                  children: (0, r.jsx)("span", {
                    children: _.formatMessage(m.footer_locations_london)
                  })
                }), (0, r.jsx)("li", {
                  className: g.listElement,
                  children: (0, r.jsx)("span", {
                    children: _.formatMessage(m.footer_locations_paris)
                  })
                }), (0, r.jsx)("li", {
                  className: g.listElement,
                  children: (0, r.jsx)("span", {
                    children: _.formatMessage(m.footer_locations_bogota)
                  })
                })]
              }), (0, r.jsxs)("span", {
                className: g.additionalInfoEstablishedDate,
                children: [(0, r.jsx)("span", {
                  children: _.formatMessage(m.footer_established_date_roman)
                }), (0, r.jsx)(c, {
                  children: _.formatMessage(m.footer_established_date_numerical)
                })]
              })]
            })]
          })
        },
        u = (0, d.withIntl)((e => {
          let {
            includeBrowserRouter: o = !1,
            linkBase: t = "",
            onLanguageChange: s,
            ...n
          } = e;
          return o ? (0, r.jsx)(a.BrowserRouter, {
            children: (0, r.jsx)(b, {
              linkBase: t,
              onLanguageChange: s,
              ...n
            })
          }) : (0, r.jsx)(b, {
            linkBase: t,
            onLanguageChange: s,
            ...n
          })
        }), _)
    }
  }
]);