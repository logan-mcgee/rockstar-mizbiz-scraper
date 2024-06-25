! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "05dfdbfa-7a98-4262-b4f2-ce28cc554caf", e._sentryDebugIdIdentifier = "sentry-dbid-05dfdbfa-7a98-4262-b4f2-ce28cc554caf")
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
        Breadcrumbs: () => n,
        Credits: () => u,
        FooterNav: () => _,
        FooterStuck: () => x,
        Nav: () => L
      });
      var s = t(9860),
        i = t(3061);
      const o = {
        breadcrumbs: "rockstargames-sites-rockstargamesc90ab7e2d9702e1e823580125ae83856",
        disabled: "rockstargames-sites-rockstargamesd0624dc88a8c5ca33e6b5fb04b6ea9f4",
        links: "rockstargames-sites-rockstargamesd76052c10bb8fdce136cc402afe3f750",
        filter: "rockstargames-sites-rockstargamesd039e1de72c486f4e273d5b796149dcf"
      };
      var r = t(95240);
      const n = () => {
        const {
          state: {
            breadcrumb: e,
            navHidden: a
          },
          toggleNavOpen: t
        } = (0, i.useRockstarLocalState)(), {
          filter: n = "",
          links: c = []
        } = e;
        return (0, r.jsxs)("div", {
          className: [o.breadcrumbs, a ? o.navHidden : "", c.length ? "" : o.disabled].join(" "),
          role: "navigation",
          title: "Breadcrumbs",
          children: [(0, r.jsx)("div", {
            className: o.links,
            children: c.map((e => (0, r.jsx)(s.A, {
              to: e.href,
              onClick: () => t(!1),
              children: e.title
            }, e.href)))
          }), n ? (0, r.jsx)("div", {
            className: o.filter,
            children: n
          }) : ""]
        })
      };
      var c = t(33052),
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
          return (0, r.jsx)("div", {
            className: [m.hero, m.heroRdr2].join(" "),
            "data-game": t,
            children: (0, r.jsxs)("div", {
              className: m.heroContent,
              children: [(0, r.jsxs)("div", {
                className: m.logos,
                "data-title": t,
                children: [(0, r.jsx)("div", {
                  className: m.logoLeft
                }), (0, r.jsx)("div", {
                  className: m.logoRight
                })]
              }), (0, r.jsx)("p", {
                className: m.description,
                dangerouslySetInnerHTML: {
                  __html: a(`credits.${t}.desc`)
                },
                "data-title": t
              })]
            })
          })
        },
        k = e => {
          let {
            children: a
          } = e;
          return (0, r.jsx)("div", {
            className: m.header,
            children: a
          })
        },
        f = e => {
          let {
            data: a
          } = e;
          return a ? (0, r.jsxs)("div", {
            className: m.creditContent,
            children: [(0, r.jsx)(k, {
              children: (0, r.jsx)("h1", {
                children: "Credits"
              })
            }), (0, r.jsx)("ul", {
              children: a?.map((e => (0, r.jsxs)("li", {
                children: [(0, r.jsx)("span", {
                  className: m.name,
                  children: e.preferred_name
                }), (0, r.jsx)("span", {
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
          return (0, r.jsxs)("div", {
            className: m.originalPeople,
            children: [(0, r.jsx)(k, {
              children: (0, r.jsx)("h2", {
                children: "Original Game Credits"
              })
            }), Object.keys(t.pageContent).map((e => {
              const {
                sections: a
              } = t.pageContent[e];
              return (0, r.jsxs)("div", {
                className: m.creditSection,
                children: [(0, r.jsx)("h3", {
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
                  return (0, r.jsxs)("div", {
                    className: m.creditSectionInner,
                    children: [(0, r.jsx)("h4", {
                      dangerouslySetInnerHTML: {
                        __html: t
                      }
                    }), (0, r.jsx)("ul", {
                      className: m.creditContentOld,
                      children: a.map((e => (0, r.jsx)("li", {
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
              data: i
            } = (0, c.useQuery)(l.CreditData, {
              variables: {
                needsIfruit: s,
                title: t
              }
            });
          if (!i) return null;
          const {
            creditsForTitle: o,
            creditsIfruit: n
          } = i;
          return (0, r.jsxs)("div", {
            className: m.allCredits,
            "data-title": t,
            children: [(0, r.jsx)(g, {
              title: t,
              t: a
            }), (0, r.jsx)(f, {
              data: o
            }), "v" === t ? (0, r.jsx)(b, {
              data: n
            }) : ""]
          })
        }));
      var v = t(42836),
        h = t(41272);
      const p = (0, h.defineMessages)({
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
        N = {
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
        _ = (0, d.withTranslations)((e => {
          let {
            t: a
          } = e;
          const t = (0, h.useIntl)(),
            {
              host: o
            } = ((0, c.useBase)(), (0, v.useScConfig)()),
            {
              track: n
            } = (0, v.useGtmTrack)(),
            {
              state: d,
              toggleNavOpen: l
            } = (0, i.useRockstarLocalState)(),
            m = () => {
              l(!1)
            };
          return (0, r.jsxs)("footer", {
            className: [N.siteFooter, d.loading ? N.loading : ""].join(" "),
            "data-testid": "footerNav",
            role: "navigation",
            title: "Footer",
            children: [(0, r.jsx)("div", {
              className: N.languageSelector,
              children: (0, r.jsx)(s.LanguageSelector, {})
            }), (0, r.jsxs)("div", {
              className: N.links,
              children: [(0, r.jsx)(s.A, {
                "data-gtm-action": "Link Click",
                "data-gtm-category": "Footer",
                "data-gtm-label": "Contact",
                "data-testid": "contactButton",
                onClick: () => {
                  m()
                },
                to: "/contact",
                children: a("Contact")
              }), (0, r.jsx)(s.A, {
                "aria-label": a("Careers"),
                "data-gtm-action": "Link Click",
                "data-gtm-category": "Footer",
                "data-gtm-label": "Careers",
                "data-testid": "careersLink",
                onClick: () => {
                  m()
                },
                to: "/careers",
                children: a("Careers")
              }), (0, r.jsx)(s.A, {
                to: "/community-guidelines",
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Community Guidelines",
                "data-testid": "communityGuidelinesLink",
                children: a("Community Guidelines")
              }), (0, r.jsx)(s.A, {
                className: N.subscribe,
                to: `https://${o}.rockstargames.com/settings/email`,
                onClick: () => {
                  m(), n({
                    event_action: "subscribe_news",
                    event_category: "cta",
                    event_label: "site footer",
                    event: "cta_subscribe_news",
                    link_url: `https://${o}.rockstargames.com/settings/email`,
                    text: a("Subscribe").toLowerCase()
                  })
                },
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Club",
                "data-gtm-label": "Manage Subscription Account",
                "data-testid": "subscribeLink",
                target: "_blank",
                children: a("Subscribe")
              })]
            }), (0, r.jsxs)("div", {
              className: N.companyInfoLinks,
              children: [(0, r.jsx)(s.A, {
                "data-gtm-action": "Link Click",
                "data-gtm-category": "Footer",
                "data-gtm-label": "Corporate Info",
                "data-testid": "corporateButton",
                onClick: () => {
                  m()
                },
                to: "/corpinfo",
                children: a("Corporate")
              }), (0, r.jsx)(s.A, {
                "data-gtm-action": "Link Click",
                "data-gtm-category": "Footer",
                "data-gtm-label": "Privacy",
                "data-testid": "privacyButton",
                onClick: () => {
                  m()
                },
                to: "/privacy",
                children: a("Privacy")
              }), (0, r.jsx)(s.A, {
                "data-gtm-action": "Link Click",
                "data-gtm-category": "Footer",
                "data-gtm-label": "Cookie settings",
                "data-testid": "cookieSettingsButton",
                onClick: () => {
                  window.OneTrust?.ToggleInfoDisplay()
                },
                to: "#",
                children: a("Cookie Settings")
              }), (0, r.jsx)(s.A, {
                "data-gtm-action": "Link Click",
                "data-gtm-category": "Footer",
                "data-gtm-label": "Cookie policy",
                "data-testid": "cookiePolicyButton",
                onClick: () => {
                  m()
                },
                to: "/cookies",
                children: a("Cookie Policy")
              }), (0, r.jsx)(s.A, {
                "data-gtm-action": "Link Click",
                "data-gtm-category": "Footer",
                "data-gtm-label": "Legal",
                "data-testid": "legalButton",
                onClick: () => {
                  m()
                },
                to: "/legal",
                children: a("Legal")
              }), (0, r.jsx)(s.A, {
                "data-gtm-action": "CCPA Link",
                "data-gtm-category": "Footer",
                "data-gtm-label": "View CCPA Info",
                "data-testid": "ccpaButton",
                onClick: () => {
                  m()
                },
                to: "/ccpa",
                children: a("Do Not Sell My Info")
              })]
            }), (0, r.jsxs)("div", {
              className: N.social,
              children: [(0, r.jsx)(s.A, {
                "aria-label": "Rockstar Games X (opens in a new window)",
                className: N.twitter,
                "data-gtm-action": "Social Click",
                "data-gtm-category": "Footer",
                "data-gtm-label": "X",
                "data-testid": "twitterLink",
                onClick: () => {
                  m()
                },
                target: "_blank",
                title: "X",
                to: "https://x.com/rockstargames"
              }), (0, r.jsx)(s.A, {
                "aria-label": "Rockstar Games Instagram (opens in a new window)",
                className: N.instagram,
                "data-gtm-action": "Social Click",
                "data-gtm-category": "Footer",
                "data-gtm-label": "Instagram",
                "data-testid": "instagramLink",
                onClick: () => {
                  m()
                },
                target: "_blank",
                title: "Instagram",
                to: "https://instagram.com/rockstargames"
              }), (0, r.jsx)(s.A, {
                "aria-label": "Rockstar Games YouTube (opens in a new window)",
                className: N.youtube,
                "data-gtm-action": "Social Click",
                "data-gtm-category": "Footer",
                "data-gtm-label": "YouTube",
                "data-testid": "youtubeLink",
                onClick: () => {
                  m()
                },
                target: "_blank",
                title: "YouTube",
                to: "https://www.youtube.com/rockstargames"
              }), (0, r.jsx)(s.A, {
                "aria-label": "Rockstar Games Facebook (opens in a new window)",
                className: N.facebook,
                "data-gtm-action": "Social Click",
                "data-gtm-category": "Footer",
                "data-gtm-label": "Facebook",
                "data-testid": "facebookLink",
                onClick: () => {
                  m()
                },
                target: "_blank",
                title: "Facebook",
                to: "https://www.facebook.com/rockstargames"
              }), (0, r.jsx)(s.A, {
                "aria-label": "Rockstar Games Twitch (opens in a new window)",
                className: N.twitch,
                "data-gtm-action": "Social Click",
                "data-gtm-category": "Footer",
                "data-gtm-label": "Twitch",
                "data-testid": "twitchLink",
                onClick: () => {
                  m()
                },
                target: "_blank",
                title: "Twitch",
                to: "https://twitch.tv/rockstargames"
              })]
            }), (0, r.jsxs)("section", {
              className: N.showsOver,
              children: [(0, r.jsx)("div", {
                className: N.whatTeamWildcats,
                children: t.formatMessage(p.footer_rockstar_games)
              }), (0, r.jsxs)("div", {
                className: N.places,
                children: [(0, r.jsx)("span", {
                  children: t.formatMessage(p.footer_locations_new_york)
                }), (0, r.jsx)("span", {
                  children: t.formatMessage(p.footer_locations_london)
                }), (0, r.jsx)("span", {
                  children: t.formatMessage(p.footer_locations_paris)
                }), (0, r.jsx)("span", {
                  children: t.formatMessage(p.footer_locations_bogota)
                })]
              }), (0, r.jsxs)("div", {
                className: N.sophomore,
                children: [(0, r.jsx)("span", {
                  "aria-hidden": !0,
                  children: t.formatMessage(p.footer_established_date_roman)
                }), (0, r.jsx)(s.VisuallyHidden, {
                  children: t.formatMessage(p.footer_established_date_numerical)
                })]
              })]
            })]
          })
        })),
        j = {
          showsOver: "rockstargames-sites-rockstargamesb7aea9dbcc6eb1c65bdfebffb4b54191",
          standalone: "rockstargames-sites-rockstargamesa774c32c11812cb72771a2bc436774ee",
          places: "rockstargames-sites-rockstargamese15ec1ee22e9df0619d7e972457de5bf"
        },
        x = () => {
          const {
            state: {
              standalone: e
            }
          } = (0, i.useRockstarLocalState)();
          return (0, r.jsxs)("footer", {
            className: [j.showsOver, e && j.standalone].join(" "),
            children: [(0, r.jsx)("div", {
              className: j.whatTeamWildcats,
              children: "Rockstar Games"
            }), (0, r.jsxs)("div", {
              className: j.places,
              children: [(0, r.jsx)("span", {
                children: "New York"
              }), (0, r.jsx)("span", {
                children: "London"
              }), (0, r.jsx)("span", {
                children: "Paris"
              }), (0, r.jsx)("span", {
                children: "Bogotá"
              })]
            }), (0, r.jsx)("div", {
              className: j.sophomore,
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
            toggleNavOpen: i
          } = e;
          return (0, r.jsxs)("div", {
            className: y.links,
            onClick: () => i(!1),
            onKeyUp: () => i(!1),
            role: "button",
            tabIndex: 0,
            children: [(0, r.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Newswire",
              "data-testid": "newswireButton",
              to: "/newswire",
              className: C,
              children: t("Newswire")
            }), (0, r.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Games",
              "data-testid": "gamesButton",
              to: "/games",
              className: C,
              children: t("Games")
            }), (0, r.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Videos",
              "data-testid": "videosButton",
              to: "/videos",
              className: C,
              children: t("Videos")
            }), (0, r.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Downloads",
              "data-testid": "downloadsButton",
              to: "/downloads",
              className: C,
              children: t("Downloads")
            }), (0, r.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Support",
              "data-testid": "supportLink",
              to: `https://support.rockstargames.com?redirect_lang=${a}`,
              target: "_blank",
              children: t("Support")
            }), (0, r.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Socialclub",
              "data-testid": "socialclubLink",
              to: "https://socialclub.rockstargames.com/",
              target: "_blank",
              children: t("Social Club")
            }), (0, r.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Launcher",
              "data-testid": "launcherLink",
              to: "https://socialclub.rockstargames.com/rockstar-games-launcher",
              target: "_blank",
              children: t("Launcher")
            }), (0, r.jsx)(s.A, {
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
            state: o,
            toggleNavOpen: n
          } = (0, i.useRockstarLocalState)(), c = () => {
            n(!1)
          };
          return (0, w.useEffect)((() => {
            const e = e => {
              27 === e.keyCode && c()
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []), (0, w.useEffect)((() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          })), []), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("nav", {
              role: "navigation",
              title: "Site",
              "data-testid": "navSidebar",
              className: [y.nav, o.navOpen ? y.navOpen : ""].join(" "),
              children: (0, r.jsxs)("div", {
                className: y.content,
                children: [(0, r.jsx)("div", {
                  className: y.searchbox,
                  children: (0, r.jsx)(s.SearchBox, {})
                }), (0, r.jsx)(S, {
                  locale: a,
                  t,
                  toggleNavOpen: n
                })]
              })
            }), (0, r.jsx)("div", {
              "aria-label": "Close nav",
              className: y.navBg,
              "data-testid": "closeNavButton",
              onClick: () => c(),
              onKeyUp: () => c(),
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

      function i(e, a) {
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
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var o = s[a] || new Set,
          r = new Set,
          n = new Set;
        for (o.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var c = n;
          n = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "CreditData")
    }
  }
]);