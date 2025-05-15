! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      o = (new e.Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "2bd22bba-14d1-4c80-ad4f-c98c8df55a05", e._sentryDebugIdIdentifier = "sentry-dbid-2bd22bba-14d1-4c80-ad4f-c98c8df55a05")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [749, 7371], {
    29896: (e, o, t) => {
      t.r(o), t.d(o, {
        default: () => x
      });
      var a = t(71127),
        s = t(9623),
        r = t(12176),
        i = t(82522),
        n = t(61814);
      var l = t(25854);
      const c = e => {
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
      var d = t(20270),
        f = t(2918),
        _ = t(95966),
        m = t(81788);
      const g = (0, m.defineMessages)({
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
        b = JSON.parse('{"en-US":{"footer_careers":"Careers","footer_community_guidelines_label_text":"Community Guidelines","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Cookie Policy","footer_cookie_settings_label_text":"Cookie Settings","footer_corporate":"Corporate","footer_donotsellmyinfo":"Do Not Sell or Share My Personal Information","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_legal":"Legal","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_privacy":"Privacy","footer_rockstar_games":"Rockstar Games","footer_section_company_info":"Company Info","footer_section_contact_us":"Contact Us","footer_section_organization_info":"Organization Info","footer_section_social_icons":"Social Media","footer_subscribe":"Subscribe"}}'),
        u = {
          pillBtn: "rockstargames-modules-core-footerc3fe63f31b69138642a2826c7f92be54",
          selected: "rockstargames-modules-core-footerfd0264e741af69a6696c0723a8ed1875",
          siteFooter: "rockstargames-modules-core-footerdc7cba777cf6589cf69816c269336f00",
          siteFooterFirstRow: "rockstargames-modules-core-footerbde93fdc93e6f33c7a2c70006f456584",
          contactUsLinks: "rockstargames-modules-core-footerb5c24f103b44da188f8ba7091f2311c4",
          siteFooterSecondRow: "rockstargames-modules-core-footerb558515ca5ee01f23cce973848c4dc6f",
          companyInfoLinks: "rockstargames-modules-core-footerf853a5b845e59b2b47bfced9acc1007b",
          companyInfoLinksListElement: "rockstargames-modules-core-footerfcbf7f59cd576b97bd48cbe031927b52",
          socialIconLinks: "rockstargames-modules-core-footera3603e0dfe32e5e459646d5050e69da1",
          socialIconLinksListElement: "rockstargames-modules-core-footerabd430e51ed1a4ea694cb383af9418f6",
          siteFooterThirdRow: "rockstargames-modules-core-footerd698977b857336c125cdfcb3b7654d5d",
          additionalInfoLocationsListElement: "rockstargames-modules-core-footerf21eb2a6c202cb30e8b192c4bda3731d",
          additionalInfoEstablishedDate: "rockstargames-modules-core-footerd0a638805e7b844a609f1e8bfbf5fc5f",
          additionalInfoOrganization: "rockstargames-modules-core-footeraf4cfb9cce056156d3e4a4c7c270769d"
        },
        {
          host: k
        } = (0, _.getConfigForDomain)(),
        h = e => {
          let {
            linkBase: o,
            onLanguageChange: t,
            ...a
          } = e;
          const r = (0, m.useIntl)(),
            _ = (0, s.useLocation)(),
            {
              track: b
            } = (0, f.useGtmTrack)(),
            h = (e, o, t, a) => () => {
              b({
                event: e,
                link_url: o,
                text: t,
                element_placement: a
              })
            };
          return (0, l.jsxs)("footer", {
            className: u.siteFooter,
            "data-testid": "footer-nav",
            role: "navigation",
            title: "Footer",
            ...a,
            children: [(0, l.jsxs)("div", {
              className: u.siteFooterFirstRow,
              children: [(0, l.jsx)("nav", {
                "aria-label": r.formatMessage(g.footer_section_contact_us),
                className: u.contactUsLinks,
                children: (0, l.jsxs)("ul", {
                  children: [(0, l.jsx)("li", {
                    children: (0, l.jsx)(n.A, {
                      "data-testid": "footer-contact-link",
                      onClick: h("cta_other", "/contact", "contact", "footer"),
                      to: `${o}/contact`,
                      children: r.formatMessage(g.footer_contact_label_text)
                    })
                  }), (0, l.jsx)("li", {
                    children: (0, l.jsx)(n.A, {
                      "data-testid": "footer-careers-link",
                      onClick: h("cta_other", "/careers", "careers", "footer"),
                      to: `${o}/careers`,
                      children: r.formatMessage(g.footer_careers)
                    })
                  }), (0, l.jsx)("li", {
                    children: (0, l.jsx)(n.A, {
                      "data-testid": "footer-community-guidelines-link",
                      onClick: h("cta_other", "/community-guidelines", "community guidelines", "footer"),
                      to: `${o}/community-guidelines`,
                      children: r.formatMessage(g.footer_community_guidelines_label_text)
                    })
                  }), (0, l.jsx)("li", {
                    children: (0, l.jsx)(n.A, {
                      "data-testid": "footer-subscribe-link",
                      onClick: h("cta_subscribe_news", `https://${k}.rockstargames.com/settings/email`, "subscribe", "footer"),
                      target: "_blank",
                      to: `https://${k}.rockstargames.com/settings/email`,
                      children: r.formatMessage(g.footer_subscribe)
                    })
                  })]
                })
              }), (0, l.jsx)(d.LanguageSelector, {
                theme: "footer",
                location: _,
                onLanguageChange: t,
                parent: "footer"
              })]
            }), (0, l.jsxs)("div", {
              className: u.siteFooterSecondRow,
              children: [(0, l.jsx)("nav", {
                "aria-label": r.formatMessage(g.footer_section_company_info),
                className: u.companyInfoLinks,
                children: (0, l.jsxs)("ul", {
                  className: u.companyInfoLinksListElement,
                  children: [(0, l.jsx)("li", {
                    children: (0, l.jsx)(n.A, {
                      "data-testid": "footer-corporate-link",
                      onClick: h("cta_other", "/corpinfo", "corporate", "footer"),
                      to: `${o}/corpinfo`,
                      children: r.formatMessage(g.footer_corporate)
                    })
                  }), (0, l.jsx)("li", {
                    children: (0, l.jsx)(n.A, {
                      "data-testid": "footer-privacy-link",
                      onClick: h("cta_other", "/privacy", "privacy", "footer"),
                      to: `${o}/privacy`,
                      children: r.formatMessage(g.footer_privacy)
                    })
                  }), (0, l.jsx)("li", {
                    children: (0, l.jsx)("button", {
                      "data-testid": "footer-cookie-settings-button",
                      onClick: () => {
                        b({
                          event: "cta_other",
                          link_url: "",
                          text: "cookie settings",
                          element_placement: "footer"
                        }), window.OneTrust?.ToggleInfoDisplay()
                      },
                      children: r.formatMessage(g.footer_cookie_settings_label_text)
                    })
                  }), (0, l.jsx)("li", {
                    children: (0, l.jsx)(n.A, {
                      "data-testid": "footer-cookie-policy-link",
                      onClick: h("cta_other", "/cookies", "cookie policy", "footer"),
                      to: `${o}/cookies`,
                      children: r.formatMessage(g.footer_cookie_policy_label_text)
                    })
                  }), (0, l.jsx)("li", {
                    children: (0, l.jsx)(n.A, {
                      "data-testid": "footer-legal-link",
                      onClick: h("cta_other", "/legal", "legal", "footer"),
                      to: `${o}/legal`,
                      children: r.formatMessage(g.footer_legal)
                    })
                  }), (0, l.jsx)("li", {
                    children: (0, l.jsx)(n.A, {
                      "data-testid": "footer-ccpa-link",
                      onClick: h("cta_other", "/ccpa", "do not sell my info", "footer"),
                      to: `${o}/ccpa`,
                      children: r.formatMessage(g.footer_donotsellmyinfo)
                    })
                  })]
                })
              }), (0, l.jsx)("nav", {
                "aria-label": r.formatMessage(g.footer_section_social_icons),
                className: u.socialIconLinks,
                children: (0, l.jsxs)("ul", {
                  className: u.socialIconLinksListElement,
                  children: [(0, l.jsx)("li", {
                    children: (0, l.jsx)(i.IconButton, {
                      appearance: "ghost",
                      icon: "Twitter",
                      size: "MD",
                      label: "Rockstar Games X",
                      asChild: !0,
                      children: (0, l.jsx)(n.A, {
                        className: u.linksListItemElementContent,
                        "aria-label": "Rockstar Games X",
                        "data-testid": "twitter-link",
                        onClick: h("cta_other", "https://x.com/rockstargames", "twitter", "footer"),
                        target: "_blank",
                        title: "X",
                        to: "https://x.com/rockstargames"
                      })
                    })
                  }), (0, l.jsx)("li", {
                    children: (0, l.jsx)(i.IconButton, {
                      appearance: "ghost",
                      icon: "Instagram",
                      size: "MD",
                      label: "Rockstar Games Instagram",
                      asChild: !0,
                      children: (0, l.jsx)(n.A, {
                        className: u.linksListItemElementContent,
                        "aria-label": "Rockstar Games Instagram",
                        "data-testid": "instagram-link",
                        onClick: h("cta_other", 'https://instagram.com/rockstargames"', "instagram", "footer"),
                        target: "_blank",
                        title: "Instagram",
                        to: "https://instagram.com/rockstargames"
                      })
                    })
                  }), (0, l.jsx)("li", {
                    children: (0, l.jsx)(i.IconButton, {
                      appearance: "ghost",
                      icon: "Youtube",
                      size: "MD",
                      label: "Rockstar Games YouTube",
                      asChild: !0,
                      children: (0, l.jsx)(n.A, {
                        className: u.linksListItemElementContent,
                        "aria-label": "Rockstar Games YouTube",
                        "data-testid": "youtube-link",
                        onClick: h("cta_other", "https://www.youtube.com/rockstargames", "youtube", "footer"),
                        target: "_blank",
                        title: "YouTube",
                        to: "https://www.youtube.com/rockstargames"
                      })
                    })
                  }), (0, l.jsx)("li", {
                    children: (0, l.jsx)(i.IconButton, {
                      appearance: "ghost",
                      icon: "Facebook",
                      size: "MD",
                      label: "Rockstar Games Facebook",
                      asChild: !0,
                      children: (0, l.jsx)(n.A, {
                        className: u.linksListItemElementContent,
                        "aria-label": "Rockstar Games Facebook",
                        "data-testid": "facebook-link",
                        onClick: h("cta_other", "https://www.facebook.com/rockstargames", "facebook", "footer"),
                        target: "_blank",
                        title: "Facebook",
                        to: "https://www.facebook.com/rockstargames"
                      })
                    })
                  }), (0, l.jsx)("li", {
                    children: (0, l.jsx)(i.IconButton, {
                      appearance: "ghost",
                      icon: "Twitch",
                      size: "MD",
                      label: "Rockstar Games Twitch",
                      asChild: !0,
                      children: (0, l.jsx)(n.A, {
                        className: u.linksListItemElementContent,
                        "aria-label": "Rockstar Games Twitch",
                        "data-testid": "twitch-link",
                        onClick: h("cta_other", "https://twitch.tv/rockstargames", "twitch", "footer"),
                        target: "_blank",
                        title: "Twitch",
                        to: "https://twitch.tv/rockstargames"
                      })
                    })
                  }), (0, l.jsx)("li", {
                    children: (0, l.jsx)(i.IconButton, {
                      appearance: "ghost",
                      icon: "Discord",
                      size: "MD",
                      label: "Rockstar Games Discord",
                      asChild: !0,
                      children: (0, l.jsx)(n.A, {
                        className: u.linksListItemElementContent,
                        "aria-label": "Rockstar Games Discord",
                        "data-testid": "discord-link",
                        onClick: h("cta_other", "https://discord.gg/rockstargames", "discord", "footer"),
                        target: "_blank",
                        title: "Discord",
                        to: "https://discord.gg/rockstargames"
                      })
                    })
                  })]
                })
              })]
            }), (0, l.jsxs)("section", {
              "aria-label": r.formatMessage(g.footer_section_organization_info),
              className: u.siteFooterThirdRow,
              children: [(0, l.jsx)(i.Text, {
                children: r.formatMessage(g.footer_rockstar_games)
              }), (0, l.jsxs)("ul", {
                className: u.additionalInfoLocationsListElement,
                children: [(0, l.jsx)("li", {
                  children: (0, l.jsx)(i.Text, {
                    children: r.formatMessage(g.footer_locations_new_york)
                  })
                }), (0, l.jsx)("li", {
                  children: (0, l.jsx)(i.Text, {
                    children: r.formatMessage(g.footer_locations_london)
                  })
                }), (0, l.jsx)("li", {
                  children: (0, l.jsx)(i.Text, {
                    children: r.formatMessage(g.footer_locations_paris)
                  })
                }), (0, l.jsx)("li", {
                  children: (0, l.jsx)(i.Text, {
                    children: r.formatMessage(g.footer_locations_bogota)
                  })
                })]
              }), (0, l.jsxs)("span", {
                className: u.additionalInfoEstablishedDate,
                children: [(0, l.jsx)("span", {
                  children: r.formatMessage(g.footer_established_date_roman)
                }), (0, l.jsx)(c, {
                  children: r.formatMessage(g.footer_established_date_numerical)
                })]
              })]
            })]
          })
        },
        p = e => {
          let {
            tokenWrapperEl: o,
            includeBrowserRouter: t = !1,
            linkBase: a = "",
            onLanguageChange: i,
            ...n
          } = e;
          return t ? (0, l.jsx)(r.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            container: o,
            children: (0, l.jsx)(r.NP, {
              colorScheme: "dark",
              defaultColorScheme: "dark",
              defaultContrastMode: "normal",
              defaultPlatformScale: "desktop",
              container: o,
              children: (0, l.jsx)(s.BrowserRouter, {
                children: (0, l.jsx)(h, {
                  linkBase: a,
                  onLanguageChange: i,
                  ...n
                })
              })
            })
          }) : (0, l.jsx)(h, {
            linkBase: a,
            onLanguageChange: i,
            ...n
          })
        },
        x = (0, m.withIntl)((e => {
          const [o, t] = (0, a.useState)(null);
          return (0, l.jsx)("div", {
            className: "siteFooterContainer",
            children: (0, l.jsx)("div", {
              ref: t,
              children: o && (0, l.jsx)(p, {
                ...e,
                tokenWrapperEl: o
              })
            })
          })
        }), b)
    }
  }
]);