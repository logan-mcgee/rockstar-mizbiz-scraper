(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [296], {
    9296: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        AccessibilityButton: () => r,
        Breadcrumbs: () => c,
        Credits: () => p,
        FooterNav: () => y,
        FooterStuck: () => j,
        Header: () => L,
        Nav: () => W
      });
      var s = t(9817);
      const r = () => (0, s.jsx)("a", {
        className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593da5c9e4eca60c874705b",
        href: window.location.pathname.startsWith("gta-online") ? "#main" : "#content",
        children: "Skip to main content"
      });
      var o = t(8976),
        n = t(3657);
      const i = {
          breadcrumbs: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d66078ecc21fc876edca",
          disabled: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e864460048fa56b5d5d9",
          links: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b4b8f1f467f93b7b62e4",
          filter: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d6a49923db59e647d2ac"
        },
        c = () => {
          const {
            state: {
              breadcrumb: e,
              navHidden: a
            },
            toggleNavOpen: t
          } = (0, n.useRockstarLocalState)(), {
            filter: r = "",
            links: c = []
          } = e;
          return (0, s.jsxs)("div", {
            className: [i.breadcrumbs, a ? i.navHidden : "", c.length ? "" : i.disabled].join(" "),
            role: "navigation",
            title: "Breadcrumbs",
            children: [(0, s.jsx)("div", {
              className: i.links,
              children: c.map((e => (0, s.jsx)(o.A, {
                to: e.href,
                onClick: () => t(!1),
                children: e.title
              }, e.href)))
            }), r ? (0, s.jsx)("div", {
              className: i.filter,
              children: r
            }) : ""]
          })
        };
      var d = t(4859),
        l = t(9929),
        m = t(545);
      const k = {
          allCredits: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c07b2ed65fca19c621e0",
          hero: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e4765147ad7c6364a729",
          logoLeft: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e78c6fd15fe9a1174cb4",
          logoRight: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c42998f1e8f170f8838f",
          heroContent: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a77548a5e07b708620ad",
          logos: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a0ce72b55890f76a22b5",
          header: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d938226fd75bfeccc0cc",
          description: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f4baa7c9e33b6836a685",
          creditContent: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ac1b38ff6e67b0beefe5",
          credit: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ff3d94ece3b9ef692ac0",
          name: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d7f647444651c6fce61b",
          position: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f290b96e3db8eb329493",
          originalPeople: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593cc9341b097fa77c7994e",
          creditContentOld: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e266e79c67ec9931cca1",
          creditSection: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593bd995b9c9192e418a156",
          creditSectionInner: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b2e6df498b9b13e29968"
        },
        g = e => {
          let {
            t: a,
            title: t
          } = e;
          return (0, s.jsx)("div", {
            className: [k.hero, k.heroRdr2].join(" "),
            "data-game": t,
            children: (0, s.jsxs)("div", {
              className: k.heroContent,
              children: [(0, s.jsxs)("div", {
                className: k.logos,
                "data-title": t,
                children: [(0, s.jsx)("div", {
                  className: k.logoLeft
                }), (0, s.jsx)("div", {
                  className: k.logoRight
                })]
              }), (0, s.jsx)("p", {
                className: k.description,
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
          return (0, s.jsx)("div", {
            className: k.header,
            children: a
          })
        },
        b = e => {
          let {
            data: a
          } = e;
          return a ? (0, s.jsxs)("div", {
            className: k.creditContent,
            children: [(0, s.jsx)(f, {
              children: (0, s.jsx)("h1", {
                children: "Credits"
              })
            }), (0, s.jsx)("ul", {
              children: a?.map((e => (0, s.jsxs)("li", {
                children: [(0, s.jsx)("span", {
                  className: k.name,
                  children: e.preferred_name
                }), (0, s.jsx)("span", {
                  className: k.position,
                  children: `${e?.business_title?.replace('"',"").trim()}, ${e.division}`
                })]
              }, JSON.stringify(e))))
            })]
          }) : null
        },
        v = e => {
          let {
            data: a
          } = e;
          if (!a) return null;
          const t = a[0]?.static_json;
          return (0, s.jsxs)("div", {
            className: k.originalPeople,
            children: [(0, s.jsx)(f, {
              children: (0, s.jsx)("h2", {
                children: "Original Game Credits"
              })
            }), Object.keys(t.pageContent).map((e => {
              const {
                sections: a
              } = t.pageContent[e];
              return (0, s.jsxs)("div", {
                className: k.creditSection,
                children: [(0, s.jsx)("h3", {
                  children: (r = e, t.scrollerData.find((e => {
                    let {
                      eventName: a
                    } = e;
                    return a === r
                  }))?.title ?? "")
                }), a.map((e => {
                  let {
                    content: a,
                    title: t
                  } = e;
                  return (0, s.jsxs)("div", {
                    className: k.creditSectionInner,
                    children: [(0, s.jsx)("h4", {
                      dangerouslySetInnerHTML: {
                        __html: t
                      }
                    }), (0, s.jsx)("ul", {
                      className: k.creditContentOld,
                      children: a.map((e => (0, s.jsx)("li", {
                        dangerouslySetInnerHTML: {
                          __html: e
                        }
                      }, e)))
                    })]
                  }, t)
                }))]
              }, e);
              var r
            }))]
          })
        },
        p = (0, l.withTranslations)((e => {
          let {
            t: a,
            title: t
          } = e;
          const r = "v" === t,
            {
              data: o
            } = (0, d.useQuery)(m.CreditData, {
              variables: {
                needsIfruit: r,
                title: t
              }
            });
          if (!o) return null;
          const {
            creditsForTitle: n,
            creditsIfruit: i
          } = o;
          return (0, s.jsxs)("div", {
            className: k.allCredits,
            "data-title": t,
            children: [(0, s.jsx)(g, {
              title: t,
              t: a
            }), (0, s.jsx)(b, {
              data: n
            }), "v" === t ? (0, s.jsx)(v, {
              data: i
            }) : ""]
          })
        }));
      var h = t(6711);
      const u = {
          siteFooter: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ecbbc05fd3faa36dba4a",
          links: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e44b26d66ba891a4d80e",
          companyInfoLinks: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d0e946a638ab5a428656",
          languageSelector: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d9cc5285f787ce8e53ae",
          social: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e6baf472ef8443dc591b",
          showsOver: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ee46bac0c9bc4ec4f375",
          facebook: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d2a8143fa921032dabae",
          instagram: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b2ee25d5c3fb319beb35",
          youtube: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593df0dfd940893eed27b7e",
          twitter: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d58d5f701d3b06b9ff74",
          twitch: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d3847882a8850df2d293",
          places: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d8bee1cef3aca55c2baa"
        },
        y = (0, l.withTranslations)((e => {
          let {
            t: a
          } = e;
          const t = (0, d.useBase)(),
            {
              host: r
            } = (0, h.useScConfig)(),
            {
              track: i
            } = (0, h.useGtmTrack)(),
            {
              state: c,
              toggleNavOpen: l
            } = (0, n.useRockstarLocalState)(),
            m = () => {
              l(!1)
            };
          return (0, s.jsxs)("footer", {
            role: "navigation",
            title: "Footer",
            className: [u.siteFooter, c.loading ? u.loading : ""].join(" "),
            children: [(0, s.jsx)("div", {
              className: u.languageSelector,
              children: (0, s.jsx)(o.LanguageSelector, {})
            }), (0, s.jsxs)("div", {
              className: u.links,
              children: [(0, s.jsx)(o.A, {
                to: "/contact",
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Contact",
                children: a("Contact")
              }), (0, s.jsx)(o.A, {
                to: `${document.location.origin}${t}careers`,
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Careers",
                children: a("Careers")
              }), (0, s.jsx)(o.A, {
                to: `https://${r}.rockstargames.com/settings/email`,
                onClick: () => {
                  m(), i({
                    event: "cta_subscribe_news",
                    event_category: "cta",
                    event_action: "subscribe_news",
                    event_label: "site footer",
                    text: a("Subscribe").toLowerCase(),
                    link_url: `https://${r}.rockstargames.com/settings/email`
                  })
                },
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Club",
                "data-gtm-label": "Manage Subscription Account",
                children: a("Subscribe")
              })]
            }), (0, s.jsxs)("div", {
              className: u.companyInfoLinks,
              children: [(0, s.jsx)(o.A, {
                to: "/corpinfo",
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Corporate Info",
                children: a("Corporate")
              }), (0, s.jsx)(o.A, {
                to: "/privacy",
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Privacy",
                children: a("Privacy")
              }), (0, s.jsx)(o.A, {
                onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Cookie settings",
                children: a("Cookie Settings")
              }), (0, s.jsx)(o.A, {
                to: "/cookies",
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Cookie policy",
                children: a("Cookie Policy")
              }), (0, s.jsx)(o.A, {
                to: "/legal",
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Legal",
                children: a("Legal")
              }), (0, s.jsx)(o.A, {
                to: "/ccpa",
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "CCPA Link",
                "data-gtm-label": "View CCPA Info",
                children: a("Do Not Sell My Info")
              })]
            }), (0, s.jsxs)("div", {
              className: u.social,
              children: [(0, s.jsx)(o.A, {
                to: "https://twitch.tv/rockstargames",
                onClick: m,
                target: "_blank",
                className: u.twitch,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitch",
                title: "Twitch"
              }), (0, s.jsx)(o.A, {
                to: "https://instagram.com/rockstargames",
                onClick: m,
                target: "_blank",
                className: u.instagram,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Instagram",
                title: "Instagram"
              }), (0, s.jsx)(o.A, {
                to: "https://twitter.com/rockstargames",
                onClick: m,
                target: "_blank",
                className: u.twitter,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitter",
                title: "Twitter"
              }), (0, s.jsx)(o.A, {
                to: "https://www.youtube.com/rockstargames",
                onClick: m,
                target: "_blank",
                className: u.youtube,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "YouTube",
                title: "YouTube"
              }), (0, s.jsx)(o.A, {
                to: "https://www.facebook.com/rockstargames",
                onClick: m,
                target: "_blank",
                className: u.facebook,
                "data-gtm-category": "Footer",
                "data-gtm-action": " Social Click",
                "data-gtm-label": "Facebook",
                title: "Facebook"
              })]
            }), (0, s.jsxs)("section", {
              className: u.showsOver,
              children: [(0, s.jsx)("div", {
                className: u.whatTeamWildcats,
                children: "Rockstar Games"
              }), (0, s.jsxs)("div", {
                className: u.places,
                children: [(0, s.jsx)("span", {
                  children: "New York"
                }), (0, s.jsx)("span", {
                  children: "London"
                }), (0, s.jsx)("span", {
                  children: "Paris"
                }), (0, s.jsx)("span", {
                  children: "Bogotá"
                })]
              }), (0, s.jsx)("div", {
                className: u.sophomore,
                children: "MCMXCVIII"
              })]
            })]
          })
        })),
        N = {
          showsOver: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c66421b47ad45455dfb2",
          standalone: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b3e4d7fbda382c75e905",
          places: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ae62e3bd463d4ba42fa5"
        },
        j = () => {
          const {
            state: {
              standalone: e
            }
          } = (0, n.useRockstarLocalState)();
          return (0, s.jsxs)("footer", {
            className: [N.showsOver, e && N.standalone].join(" "),
            children: [(0, s.jsx)("div", {
              className: N.whatTeamWildcats,
              children: "Rockstar Games"
            }), (0, s.jsxs)("div", {
              className: N.places,
              children: [(0, s.jsx)("span", {
                children: "New York"
              }), (0, s.jsx)("span", {
                children: "London"
              }), (0, s.jsx)("span", {
                children: "Paris"
              }), (0, s.jsx)("span", {
                children: "Bogotá"
              })]
            }), (0, s.jsx)("div", {
              className: N.sophomore,
              children: "MCMXCVIII"
            })]
          })
        };
      var x = t(289);
      const C = {
          navOpen: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e029674651c019a50f11",
          nav: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ab6a2621d310cc5aa5fd",
          navBg: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593be70dc914c76529cea45",
          links: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593cc3f6ea321e1707fa0eb",
          activeLink: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f838ca03c1c58ff6578c",
          content: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ff7185c4155fa032f25a",
          searchbox: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a53d5435910c93787e42"
        },
        S = e => {
          let {
            isActive: a
          } = e;
          return a ? C.activeLink : ""
        },
        U = e => {
          let {
            locale: a,
            t,
            toggleNavOpen: r
          } = e;
          return (0, s.jsxs)("div", {
            className: C.links,
            onClick: () => r(!1),
            onKeyUp: () => r(!1),
            role: "button",
            tabIndex: 0,
            children: [(0, s.jsx)(o.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Newswire",
              to: "/newswire",
              className: S,
              children: t("Newswire")
            }), (0, s.jsx)(o.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Games",
              to: "/games",
              className: S,
              children: t("Games")
            }), (0, s.jsx)(o.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Videos",
              to: "/videos",
              className: S,
              children: t("Videos")
            }), (0, s.jsx)(o.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Downloads",
              to: "/downloads",
              className: S,
              children: t("Downloads")
            }), (0, s.jsx)(o.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Support",
              to: `https://support.rockstargames.com?redirect_lang=${a}`,
              target: "_blank",
              children: t("Support")
            }), (0, s.jsx)(o.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Socialclub",
              to: "https://socialclub.rockstargames.com/",
              target: "_blank",
              children: t("Social Club")
            }), (0, s.jsx)(o.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Launcher",
              to: "https://socialclub.rockstargames.com/rockstar-games-launcher",
              target: "_blank",
              children: t("Launcher")
            }), (0, s.jsx)(o.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Store",
              to: "https://store.rockstargames.com/",
              target: "_blank",
              children: t("Store")
            })]
          })
        },
        W = (0, l.withLocale)((0, l.withTranslations)((e => {
          let {
            locale: a,
            t
          } = e;
          const {
            state: r,
            toggleNavOpen: i
          } = (0, n.useRockstarLocalState)(), c = () => {
            i(!1)
          };
          return (0, x.useEffect)((() => {
            const e = e => {
              27 === e.keyCode && c()
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []), (0, x.useEffect)((() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          })), []), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("nav", {
              role: "navigation",
              title: "Site",
              className: [C.nav, r.navOpen ? C.navOpen : ""].join(" "),
              children: (0, s.jsxs)("div", {
                className: C.content,
                children: [(0, s.jsx)("div", {
                  className: C.searchbox,
                  children: (0, s.jsx)(o.SearchBox, {})
                }), (0, s.jsx)(U, {
                  locale: a,
                  t,
                  toggleNavOpen: i
                })]
              })
            }), (0, s.jsx)("div", {
              "aria-label": "Close nav",
              className: C.navBg,
              onClick: () => c(),
              onKeyUp: () => c(),
              role: "button",
              tabIndex: 0
            })]
          })
        }))),
        w = {
          header: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c88e3bf2c5a3eea47de1",
          headerHidden: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d47f3266f70158f40c19",
          standalone: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593de5fe6dbf601131bf572",
          hidden: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e40a03373925b1f43678",
          logo: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ac8debfb2b628b833f4c",
          logoBlack: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f093360455b13454b6bb",
          logoNormal: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a3664df75f1e5452d7d8",
          active: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593edee6ccaf0d7182160ee",
          signin: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593eb89905202a9ce235483",
          bg: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b87c9cb79dc665de220b",
          loader: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593bd84e6c23181dcddf241",
          loading: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593bb09144de38feaa10e6d",
          left: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f03aa693d57989d2268d",
          menuOpener: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a69f93a42729f8a8c895",
          navOpen: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c9b3960def8d1c6e2ba0"
        },
        L = () => {
          const {
            state: {
              headerHidden: e,
              loading: a,
              navOpen: t,
              navHidden: r,
              normalLogo: i,
              standalone: d
            },
            setNavHidden: l,
            toggleNavOpen: m
          } = (0, n.useRockstarLocalState)(), {
            navOpen: k,
            setNavOpen: g
          } = (0, h.useRockstarUserState)(), {
            freezeUserShouldSeeMore: f,
            userShouldSeeMore: b
          } = (0, n.useScroll)();
          return (0, x.useEffect)((() => {
            f || k || t || l(b)
          }), [f, t, k, b]), (0, x.useEffect)((() => {
            !0 === k && !0 === t && m()
          }), [k]), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("header", {
              className: [w.header, e ? w.headerHidden : "", d ? w.standalone : "", t ? w.navOpen : "", a ? w.loading : "", r ? w.hidden : ""].join(" "),
              children: [(0, s.jsxs)("div", {
                className: w.left,
                children: [(0, s.jsx)("div", {
                  className: w.menuOpener,
                  children: (0, s.jsxs)(o.A, {
                    to: "#",
                    onClick: e => {
                      e.preventDefault(), m(), !0 === k && g(!1)
                    },
                    title: "Open Menu",
                    role: "button",
                    children: [(0, s.jsx)("span", {}), (0, s.jsx)("span", {}), (0, s.jsx)("span", {})]
                  })
                }), (0, s.jsx)(c, {})]
              }), (0, s.jsx)("div", {
                className: w.logo,
                children: (0, s.jsxs)(o.A, {
                  "data-gtm-category": "Mega Nav",
                  "data-gtm-action": "Main Nav",
                  "data-gtm-label": "Main Logo",
                  onClick: () => m(!1),
                  to: "/",
                  title: "Home",
                  role: "link",
                  children: [(0, s.jsx)("div", {
                    className: [w.logoNormal, i ? "" : w.active].join(" ")
                  }), (0, s.jsx)("div", {
                    className: [w.logoNormal, i ? w.active : ""].join(" ")
                  })]
                })
              }), (0, s.jsx)("div", {
                className: w.signin,
                children: (0, s.jsx)(h.MenuButton, {})
              }), (0, s.jsx)("div", {
                className: w.bg
              }), (0, s.jsx)("div", {
                className: [w.loader, a ? w.loading : ""].join(" ")
              })]
            }), (0, s.jsx)(W, {})]
          })
        }
    },
    545: e => {
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
        var o = s[a] || new Set,
          n = new Set,
          i = new Set;
        for (o.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "CreditData")
    }
  }
]);
//# sourceMappingURL=1c2c0aabcaa64f1166b1.js.map