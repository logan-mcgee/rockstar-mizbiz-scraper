! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c615f1cd-556f-4db2-8491-67e5cdcdf9d5", e._sentryDebugIdIdentifier = "sentry-dbid-c615f1cd-556f-4db2-8491-67e5cdcdf9d5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [104], {
    20104: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Breadcrumbs: () => c,
        Credits: () => u,
        FooterNav: () => N,
        FooterStuck: () => j,
        Nav: () => L
      });
      var s = t(9860),
        r = t(3061);
      const i = {
        breadcrumbs: "rockstargames-sites-rockstargamesc90ab7e2d9702e1e823580125ae83856",
        disabled: "rockstargames-sites-rockstargamesd0624dc88a8c5ca33e6b5fb04b6ea9f4",
        links: "rockstargames-sites-rockstargamesd76052c10bb8fdce136cc402afe3f750",
        filter: "rockstargames-sites-rockstargamesd039e1de72c486f4e273d5b796149dcf"
      };
      var o = t(95240);
      const c = () => {
        const {
          state: {
            breadcrumb: e,
            navHidden: a
          },
          toggleNavOpen: t
        } = (0, r.useRockstarLocalState)(), {
          filter: c = "",
          links: n = []
        } = e;
        return (0, o.jsxs)("div", {
          className: [i.breadcrumbs, a ? i.navHidden : "", n.length ? "" : i.disabled].join(" "),
          role: "navigation",
          title: "Breadcrumbs",
          children: [(0, o.jsx)("div", {
            className: i.links,
            children: n.map((e => (0, o.jsx)(s.A, {
              to: e.href,
              onClick: () => t(!1),
              children: e.title
            }, e.href)))
          }), c ? (0, o.jsx)("div", {
            className: i.filter,
            children: c
          }) : ""]
        })
      };
      var n = t(33052),
        d = t(45792),
        l = t(83888);
      const m = {
          pillBtn: "rockstargames-sites-rockstargamesfda4d2bca53039660f62c17d7fd7c0be",
          selected: "rockstargames-sites-rockstargamesae965e085473c207e9a10acc9a738de8",
          allCredits: "rockstargames-sites-rockstargamesd44f4cd5799ef5a32e7845fd16d4b850",
          hero: "rockstargames-sites-rockstargamesea0f134055b31ee8bd57f66171b24c25",
          logoLeft: "rockstargames-sites-rockstargamesb8b2665e20837e9d1531b85b0c36a1a3",
          logoRight: "rockstargames-sites-rockstargamese48432108cee6098c5f8444df6c50548",
          heroContent: "rockstargames-sites-rockstargamese0116d16749fa6aeb274346c2040ab67",
          logos: "rockstargames-sites-rockstargamesfdbb15829817568c0c2e3199fc245f1d",
          header: "rockstargames-sites-rockstargamesb0eeea201eaf58749c7100a6d1ebf7c0",
          description: "rockstargames-sites-rockstargamesf252c1294611de36b909a5c794c91262",
          creditContent: "rockstargames-sites-rockstargamesee7dfe680a170c24e12daa53d713f559",
          credit: "rockstargames-sites-rockstargamesc4b996811025113be22562b69586bd28",
          name: "rockstargames-sites-rockstargamesf83aebec46890445f8f9e32da5f87dcf",
          position: "rockstargames-sites-rockstargamese0f2feb6e0f00bac73012396b7cc88b1",
          originalPeople: "rockstargames-sites-rockstargamescb86b5c3e7f4d56ebea3f1cdfcf1d005",
          creditContentOld: "rockstargames-sites-rockstargamesacfe2b29bfae063a113593e32bd50874",
          creditSection: "rockstargames-sites-rockstargamese262f76846296cfec08d0d76a4c8801b",
          creditSectionInner: "rockstargames-sites-rockstargamesbe8350e3adcd5f871a61505541dd920f"
        },
        g = e => {
          let {
            t: a,
            title: t
          } = e;
          return (0, o.jsx)("div", {
            className: [m.hero, m.heroRdr2].join(" "),
            "data-game": t,
            children: (0, o.jsxs)("div", {
              className: m.heroContent,
              children: [(0, o.jsxs)("div", {
                className: m.logos,
                "data-title": t,
                children: [(0, o.jsx)("div", {
                  className: m.logoLeft
                }), (0, o.jsx)("div", {
                  className: m.logoRight
                })]
              }), (0, o.jsx)("p", {
                className: m.description,
                dangerouslySetInnerHTML: {
                  __html: a(`credits.${t}.desc`)
                },
                "data-title": t
              })]
            })
          })
        },
        f = e => {
          let {
            children: a
          } = e;
          return (0, o.jsx)("div", {
            className: m.header,
            children: a
          })
        },
        k = e => {
          let {
            data: a
          } = e;
          return a ? (0, o.jsxs)("div", {
            className: m.creditContent,
            children: [(0, o.jsx)(f, {
              children: (0, o.jsx)("h1", {
                children: "Credits"
              })
            }), (0, o.jsx)("ul", {
              children: a?.map((e => (0, o.jsxs)("li", {
                children: [(0, o.jsx)("span", {
                  className: m.name,
                  children: e.preferred_name
                }), (0, o.jsx)("span", {
                  className: m.position,
                  children: `${e?.business_title?.replace('"',"").trim()}, ${e.division}`
                })]
              }, JSON.stringify(e))))
            })]
          }) : null
        },
        b = e => {
          let {
            data: a
          } = e;
          if (!a) return null;
          const t = a[0]?.static_json;
          return (0, o.jsxs)("div", {
            className: m.originalPeople,
            children: [(0, o.jsx)(f, {
              children: (0, o.jsx)("h2", {
                children: "Original Game Credits"
              })
            }), Object.keys(t.pageContent).map((e => {
              const {
                sections: a
              } = t.pageContent[e];
              return (0, o.jsxs)("div", {
                className: m.creditSection,
                children: [(0, o.jsx)("h3", {
                  children: (s = e, t.scrollerData.find((e => {
                    let {
                      eventName: a
                    } = e;
                    return a === s
                  }))?.title ?? "")
                }), a.map((e => {
                  let {
                    content: a,
                    title: t
                  } = e;
                  return (0, o.jsxs)("div", {
                    className: m.creditSectionInner,
                    children: [(0, o.jsx)("h4", {
                      dangerouslySetInnerHTML: {
                        __html: t
                      }
                    }), (0, o.jsx)("ul", {
                      className: m.creditContentOld,
                      children: a.map((e => (0, o.jsx)("li", {
                        dangerouslySetInnerHTML: {
                          __html: e
                        }
                      }, e)))
                    })]
                  }, t)
                }))]
              }, e);
              var s
            }))]
          })
        },
        u = (0, d.withTranslations)((e => {
          let {
            t: a,
            title: t
          } = e;
          const s = "v" === t,
            {
              data: r
            } = (0, n.useQuery)(l.CreditData, {
              variables: {
                needsIfruit: s,
                title: t
              }
            });
          if (!r) return null;
          const {
            creditsForTitle: i,
            creditsIfruit: c
          } = r;
          return (0, o.jsxs)("div", {
            className: m.allCredits,
            "data-title": t,
            children: [(0, o.jsx)(g, {
              title: t,
              t: a
            }), (0, o.jsx)(k, {
              data: i
            }), "v" === t ? (0, o.jsx)(b, {
              data: c
            }) : ""]
          })
        }));
      var h = t(42836),
        v = t(41272);
      const p = (0, v.defineMessages)({
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
          }
        }),
        _ = {
          siteFooter: "rockstargames-sites-rockstargamesb09dd7fc17f8fe2828d82a908d4c76a9",
          subscribe: "rockstargames-sites-rockstargamesfdd719ae056828c8d6e0ab71b95026f4",
          links: "rockstargames-sites-rockstargamese2dc9e7d2ed91f615f39a77bfac250ff",
          companyInfoLinks: "rockstargames-sites-rockstargamesc21db3bc5f9a4dc9a2ff06df01efc758",
          languageSelector: "rockstargames-sites-rockstargamesa32f976108d7a8491bcbb000f2450d1a",
          social: "rockstargames-sites-rockstargamesc959853ce1f81d4be07f28591c92503c",
          showsOver: "rockstargames-sites-rockstargamesa9bb0bfaf10e8ebdb8661d786df67495",
          facebook: "rockstargames-sites-rockstargamesbdc8b41577615151078edf78304154aa",
          instagram: "rockstargames-sites-rockstargamescd4bf392354cdf321691d5c849da8e01",
          youtube: "rockstargames-sites-rockstargamesb7cf279144176613f73c2876aac3ed23",
          twitter: "rockstargames-sites-rockstargamesb659954dea320fdfdd3944fcb0a89e8d",
          twitch: "rockstargames-sites-rockstargamesa694ea3b701e1fcb06893f6f174f5d33",
          places: "rockstargames-sites-rockstargamese7ffce03c46b70f8b7b4675e284c5970"
        },
        N = (0, d.withTranslations)((e => {
          let {
            t: a
          } = e;
          const t = (0, v.useIntl)(),
            {
              host: i
            } = ((0, n.useBase)(), (0, h.useScConfig)()),
            {
              track: c
            } = (0, h.useGtmTrack)(),
            {
              state: d,
              toggleNavOpen: l
            } = (0, r.useRockstarLocalState)(),
            m = (e, a, t, s) => () => {
              l(!1), c({
                event: e,
                link_url: a,
                text: t,
                element_placement: s
              })
            };
          return (0, o.jsxs)("footer", {
            className: [_.siteFooter, d.loading ? _.loading : ""].join(" "),
            "data-testid": "footerNav",
            role: "navigation",
            title: "Footer",
            children: [(0, o.jsx)("div", {
              className: _.languageSelector,
              children: (0, o.jsx)(s.LanguageSelector, {})
            }), (0, o.jsxs)("div", {
              className: _.links,
              children: [(0, o.jsx)(s.A, {
                "data-testid": "contactButton",
                onClick: m("cta_other", "/contact", "contact", "footer"),
                to: "/contact",
                children: a("Contact")
              }), (0, o.jsx)(s.A, {
                "data-testid": "careersLink",
                onClick: m("cta_other", "/careers", "careers", "footer"),
                to: "/careers",
                children: a("Careers")
              }), (0, o.jsx)(s.A, {
                "data-testid": "communityGuidelinesLink",
                onClick: m("cta_other", "/community-guidelines", "community guidelines", "footer"),
                to: "/community-guidelines",
                children: a("Community Guidelines")
              }), (0, o.jsx)(s.A, {
                "data-testid": "subscribeLink",
                className: _.subscribe,
                onClick: m("cta_subscribe_news", `https://${i}.rockstargames.com/settings/email`, "subscribe", "footer"),
                to: `https://${i}.rockstargames.com/settings/email`,
                target: "_blank",
                children: a("Subscribe")
              })]
            }), (0, o.jsxs)("div", {
              className: _.companyInfoLinks,
              children: [(0, o.jsx)(s.A, {
                "data-testid": "corporateButton",
                onClick: m("cta_other", "/corpinfo", "corporate", "footer"),
                to: "/corpinfo",
                children: a("Corporate")
              }), (0, o.jsx)(s.A, {
                "data-testid": "privacyButton",
                onClick: m("cta_other", "/privacy", "privacy", "footer"),
                to: "/privacy",
                children: a("Privacy")
              }), (0, o.jsx)(s.A, {
                "data-testid": "cookieSettingsButton",
                onClick: ("cta_other", "", "cookie settings", "footer", () => {
                  c({
                    event: "cta_other",
                    link_url: "",
                    text: "cookie settings",
                    element_placement: "footer"
                  }), window.OneTrust?.ToggleInfoDisplay()
                }),
                to: "#",
                children: a("Cookie Settings")
              }), (0, o.jsx)(s.A, {
                "data-testid": "cookiePolicyButton",
                onClick: m("cta_other", "/cookies", "cookie policy", "footer"),
                to: "/cookies",
                children: a("Cookie Policy")
              }), (0, o.jsx)(s.A, {
                "data-testid": "legalButton",
                onClick: m("cta_other", "/legal", "legal", "footer"),
                to: "/legal",
                children: a("Legal")
              }), (0, o.jsx)(s.A, {
                "data-testid": "ccpaButton",
                onClick: m("cta_other", "/ccpa", "do not sell my info", "footer"),
                to: "/ccpa",
                children: a("Do Not Sell My Info")
              })]
            }), (0, o.jsxs)("div", {
              className: _.social,
              children: [(0, o.jsx)(s.A, {
                "aria-label": "Rockstar Games X",
                className: _.twitter,
                "data-testid": "twitterLink",
                onClick: m("cta_other", "https://x.com/rockstargames", "twitter", "footer"),
                target: "_blank",
                title: "X",
                to: "https://x.com/rockstargames"
              }), (0, o.jsx)(s.A, {
                "aria-label": "Rockstar Games Instagram",
                className: _.instagram,
                "data-testid": "instagramLink",
                onClick: m("cta_other", 'https://instagram.com/rockstargames"', "instagram", "footer"),
                target: "_blank",
                title: "Instagram",
                to: "https://instagram.com/rockstargames"
              }), (0, o.jsx)(s.A, {
                "aria-label": "Rockstar Games YouTube",
                className: _.youtube,
                "data-testid": "youtubeLink",
                onClick: m("cta_other", "https://www.youtube.com/rockstargames", "youtube", "footer"),
                target: "_blank",
                title: "YouTube",
                to: "https://www.youtube.com/rockstargames"
              }), (0, o.jsx)(s.A, {
                "aria-label": "Rockstar Games Facebook",
                className: _.facebook,
                "data-testid": "facebookLink",
                onClick: m("cta_other", "https://www.facebook.com/rockstargames", "facebook", "footer"),
                target: "_blank",
                title: "Facebook",
                to: "https://www.facebook.com/rockstargames"
              }), (0, o.jsx)(s.A, {
                "aria-label": "Rockstar Games Twitch",
                className: _.twitch,
                "data-testid": "twitchLink",
                onClick: m("cta_other", "https://twitch.tv/rockstargames", "twitch", "footer"),
                target: "_blank",
                title: "Twitch",
                to: "https://twitch.tv/rockstargames"
              })]
            }), (0, o.jsxs)("section", {
              className: _.showsOver,
              children: [(0, o.jsx)("div", {
                className: _.whatTeamWildcats,
                children: t.formatMessage(p.footer_rockstar_games)
              }), (0, o.jsxs)("div", {
                className: _.places,
                children: [(0, o.jsx)("span", {
                  children: t.formatMessage(p.footer_locations_new_york)
                }), (0, o.jsx)("span", {
                  children: t.formatMessage(p.footer_locations_london)
                }), (0, o.jsx)("span", {
                  children: t.formatMessage(p.footer_locations_paris)
                }), (0, o.jsx)("span", {
                  children: t.formatMessage(p.footer_locations_bogota)
                })]
              }), (0, o.jsxs)("div", {
                className: _.sophomore,
                children: [(0, o.jsx)("span", {
                  "aria-hidden": !0,
                  children: t.formatMessage(p.footer_established_date_roman)
                }), (0, o.jsx)(s.VisuallyHidden, {
                  children: t.formatMessage(p.footer_established_date_numerical)
                })]
              })]
            })]
          })
        })),
        x = {
          showsOver: "rockstargames-sites-rockstargamesb7aea9dbcc6eb1c65bdfebffb4b54191",
          standalone: "rockstargames-sites-rockstargamesa774c32c11812cb72771a2bc436774ee",
          places: "rockstargames-sites-rockstargamese15ec1ee22e9df0619d7e972457de5bf"
        },
        j = () => {
          const {
            state: {
              standalone: e
            }
          } = (0, r.useRockstarLocalState)();
          return (0, o.jsxs)("footer", {
            className: [x.showsOver, e && x.standalone].join(" "),
            children: [(0, o.jsx)("div", {
              className: x.whatTeamWildcats,
              children: "Rockstar Games"
            }), (0, o.jsxs)("div", {
              className: x.places,
              children: [(0, o.jsx)("span", {
                children: "New York"
              }), (0, o.jsx)("span", {
                children: "London"
              }), (0, o.jsx)("span", {
                children: "Paris"
              }), (0, o.jsx)("span", {
                children: "Bogotá"
              })]
            }), (0, o.jsx)("div", {
              className: x.sophomore,
              children: "MCMXCVIII"
            })]
          })
        };
      var w = t(51664);
      const y = {
          navOpen: "rockstargames-sites-rockstargamesf4d030ad7c017d6c53519057c0689bc0",
          nav: "rockstargames-sites-rockstargamese164223fc0618098d0fa76f053b6b59b",
          navBg: "rockstargames-sites-rockstargamesa5ae6c39b7508cde9ec042684752db3f",
          links: "rockstargames-sites-rockstargamesfef6702786d66922413b85e4c7200f56",
          activeLink: "rockstargames-sites-rockstargamesf68a3dccd3ec8f47385c88b9a7e25f84",
          content: "rockstargames-sites-rockstargameseac080290fd8ab9ffccc83da9aecd201",
          searchbox: "rockstargames-sites-rockstargamesa57c9419cdcf587ec0f298b73c1da8d9"
        },
        C = e => {
          let {
            isActive: a
          } = e;
          return a ? y.activeLink : ""
        },
        S = e => {
          let {
            locale: a,
            t,
            toggleNavOpen: r
          } = e;
          return (0, o.jsxs)("div", {
            className: y.links,
            onClick: () => r(!1),
            onKeyUp: () => r(!1),
            role: "button",
            tabIndex: 0,
            children: [(0, o.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Newswire",
              "data-testid": "newswireButton",
              to: "/newswire",
              className: C,
              children: t("Newswire")
            }), (0, o.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Games",
              "data-testid": "gamesButton",
              to: "/games",
              className: C,
              children: t("Games")
            }), (0, o.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Videos",
              "data-testid": "videosButton",
              to: "/videos",
              className: C,
              children: t("Videos")
            }), (0, o.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Downloads",
              "data-testid": "downloadsButton",
              to: "/downloads",
              className: C,
              children: t("Downloads")
            }), (0, o.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Support",
              "data-testid": "supportLink",
              to: `https://support.rockstargames.com?redirect_lang=${a}`,
              target: "_blank",
              children: t("Support")
            }), (0, o.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Socialclub",
              "data-testid": "socialclubLink",
              to: "https://socialclub.rockstargames.com/",
              target: "_blank",
              children: t("Social Club")
            }), (0, o.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Launcher",
              "data-testid": "launcherLink",
              to: "https://socialclub.rockstargames.com/rockstar-games-launcher",
              target: "_blank",
              children: t("Launcher")
            }), (0, o.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Store",
              "data-testid": "storeLink",
              to: "https://store.rockstargames.com/",
              target: "_blank",
              children: t("Store")
            })]
          })
        },
        L = (0, d.withLocale)((0, d.withTranslations)((e => {
          let {
            locale: a,
            t
          } = e;
          const {
            state: i,
            toggleNavOpen: c
          } = (0, r.useRockstarLocalState)(), n = () => {
            c(!1)
          };
          return (0, w.useEffect)((() => {
            const e = e => {
              27 === e.keyCode && n()
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []), (0, w.useEffect)((() => (window.addEventListener("popstate", n), () => {
            window.removeEventListener("popstate", n)
          })), []), (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("nav", {
              role: "navigation",
              title: "Site",
              "data-testid": "navSidebar",
              className: [y.nav, i.navOpen ? y.navOpen : ""].join(" "),
              children: (0, o.jsxs)("div", {
                className: y.content,
                children: [(0, o.jsx)("div", {
                  className: y.searchbox,
                  children: (0, o.jsx)(s.SearchBox, {})
                }), (0, o.jsx)(S, {
                  locale: a,
                  t,
                  toggleNavOpen: c
                })]
              })
            }), (0, o.jsx)("div", {
              "aria-label": "Close nav",
              className: y.navBg,
              "data-testid": "closeNavButton",
              onClick: () => n(),
              onKeyUp: () => n(),
              role: "button",
              tabIndex: 0
            })]
          })
        })))
    },
    83888: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "CreditData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "title"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "needsIfruit"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "creditsForTitle"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "title"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "title"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "business_title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "division"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "preferred_name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "creditsIfruit"
              },
              arguments: [],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "needsIfruit"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "static_json"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 277
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query CreditData(\n    $cache: Boolean = true\n    $title: String!\n    $needsIfruit: Boolean!\n) {\n    creditsForTitle(title: $title) {\n        business_title\n        division\n        preferred_name\n    }\n    creditsIfruit @include(if: $needsIfruit) {\n        static_json\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.CreditData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          o = new Set,
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var n = c;
          c = new Set, n.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "CreditData")
    }
  }
]);