(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [296], {
    9296: (a, e, t) => {
      "use strict";
      t.r(e), t.d(e, {
        AccessibilityButton: () => c,
        Breadcrumbs: () => o,
        Credits: () => u,
        FooterNav: () => j,
        FooterStuck: () => x,
        Header: () => F,
        Nav: () => L
      });
      var s = t(9817);
      const c = () => (0, s.jsx)("a", {
        className: "@rockstargames-sites-rockstargames-2f41663b9c098a92da5c9e4eca60c874705b",
        href: window.location.pathname.startsWith("gta-online") ? "#main" : "#content",
        children: "Skip to main content"
      });
      var r = t(8976),
        i = t(3657);
      const n = {
          breadcrumbs: "@rockstargames-sites-rockstargames-2f41663b9c098a92d66078ecc21fc876edca",
          disabled: "@rockstargames-sites-rockstargames-2f41663b9c098a92e864460048fa56b5d5d9",
          links: "@rockstargames-sites-rockstargames-2f41663b9c098a92b4b8f1f467f93b7b62e4",
          filter: "@rockstargames-sites-rockstargames-2f41663b9c098a92d6a49923db59e647d2ac"
        },
        o = () => {
          const {
            state: {
              breadcrumb: a,
              navHidden: e
            },
            toggleNavOpen: t
          } = (0, i.useRockstarLocalState)(), {
            filter: c = "",
            links: o = []
          } = a;
          return (0, s.jsxs)("div", {
            className: [n.breadcrumbs, e ? n.navHidden : "", o.length ? "" : n.disabled].join(" "),
            role: "navigation",
            title: "Breadcrumbs",
            children: [(0, s.jsx)("div", {
              className: n.links,
              children: o.map((a => (0, s.jsx)(r.A, {
                to: a.href,
                onClick: () => t(!1),
                children: a.title
              }, a.href)))
            }), c ? (0, s.jsx)("div", {
              className: n.filter,
              children: c
            }) : ""]
          })
        };
      var l = t(4859),
        d = t(9929),
        m = t(545);
      const g = {
          allCredits: "@rockstargames-sites-rockstargames-2f41663b9c098a92c07b2ed65fca19c621e0",
          hero: "@rockstargames-sites-rockstargames-2f41663b9c098a92e4765147ad7c6364a729",
          logoLeft: "@rockstargames-sites-rockstargames-2f41663b9c098a92e78c6fd15fe9a1174cb4",
          logoRight: "@rockstargames-sites-rockstargames-2f41663b9c098a92c42998f1e8f170f8838f",
          heroContent: "@rockstargames-sites-rockstargames-2f41663b9c098a92a77548a5e07b708620ad",
          logos: "@rockstargames-sites-rockstargames-2f41663b9c098a92a0ce72b55890f76a22b5",
          header: "@rockstargames-sites-rockstargames-2f41663b9c098a92d938226fd75bfeccc0cc",
          description: "@rockstargames-sites-rockstargames-2f41663b9c098a92f4baa7c9e33b6836a685",
          creditContent: "@rockstargames-sites-rockstargames-2f41663b9c098a92ac1b38ff6e67b0beefe5",
          credit: "@rockstargames-sites-rockstargames-2f41663b9c098a92ff3d94ece3b9ef692ac0",
          name: "@rockstargames-sites-rockstargames-2f41663b9c098a92d7f647444651c6fce61b",
          position: "@rockstargames-sites-rockstargames-2f41663b9c098a92f290b96e3db8eb329493",
          originalPeople: "@rockstargames-sites-rockstargames-2f41663b9c098a92cc9341b097fa77c7994e",
          creditContentOld: "@rockstargames-sites-rockstargames-2f41663b9c098a92e266e79c67ec9931cca1",
          creditSection: "@rockstargames-sites-rockstargames-2f41663b9c098a92bd995b9c9192e418a156",
          creditSectionInner: "@rockstargames-sites-rockstargames-2f41663b9c098a92b2e6df498b9b13e29968"
        },
        k = a => {
          let {
            t: e,
            title: t
          } = a;
          return (0, s.jsx)("div", {
            className: [g.hero, g.heroRdr2].join(" "),
            "data-game": t,
            children: (0, s.jsxs)("div", {
              className: g.heroContent,
              children: [(0, s.jsxs)("div", {
                className: g.logos,
                "data-title": t,
                children: [(0, s.jsx)("div", {
                  className: g.logoLeft
                }), (0, s.jsx)("div", {
                  className: g.logoRight
                })]
              }), (0, s.jsx)("p", {
                className: g.description,
                dangerouslySetInnerHTML: {
                  __html: e(`credits.${t}.desc`)
                },
                "data-title": t
              })]
            })
          })
        },
        b = a => {
          let {
            children: e
          } = a;
          return (0, s.jsx)("div", {
            className: g.header,
            children: e
          })
        },
        f = a => {
          let {
            data: e
          } = a;
          return e ? (0, s.jsxs)("div", {
            className: g.creditContent,
            children: [(0, s.jsx)(b, {
              children: (0, s.jsx)("h1", {
                children: "Credits"
              })
            }), (0, s.jsx)("ul", {
              children: e?.map((a => (0, s.jsxs)("li", {
                children: [(0, s.jsx)("span", {
                  className: g.name,
                  children: a.preferred_name
                }), (0, s.jsx)("span", {
                  className: g.position,
                  children: `${a?.business_title?.replace('"',"").trim()}, ${a.division}`
                })]
              }, JSON.stringify(a))))
            })]
          }) : null
        },
        v = a => {
          let {
            data: e
          } = a;
          if (!e) return null;
          const t = e[0]?.static_json;
          return (0, s.jsxs)("div", {
            className: g.originalPeople,
            children: [(0, s.jsx)(b, {
              children: (0, s.jsx)("h2", {
                children: "Original Game Credits"
              })
            }), Object.keys(t.pageContent).map((a => {
              const {
                sections: e
              } = t.pageContent[a];
              return (0, s.jsxs)("div", {
                className: g.creditSection,
                children: [(0, s.jsx)("h3", {
                  children: (c = a, t.scrollerData.find((a => {
                    let {
                      eventName: e
                    } = a;
                    return e === c
                  }))?.title ?? "")
                }), e.map((a => {
                  let {
                    content: e,
                    title: t
                  } = a;
                  return (0, s.jsxs)("div", {
                    className: g.creditSectionInner,
                    children: [(0, s.jsx)("h4", {
                      dangerouslySetInnerHTML: {
                        __html: t
                      }
                    }), (0, s.jsx)("ul", {
                      className: g.creditContentOld,
                      children: e.map((a => (0, s.jsx)("li", {
                        dangerouslySetInnerHTML: {
                          __html: a
                        }
                      }, a)))
                    })]
                  }, t)
                }))]
              }, a);
              var c
            }))]
          })
        },
        u = (0, d.withTranslations)((a => {
          let {
            t: e,
            title: t
          } = a;
          const c = "v" === t,
            {
              data: r
            } = (0, l.useQuery)(m.CreditData, {
              variables: {
                needsIfruit: c,
                title: t
              }
            });
          if (!r) return null;
          const {
            creditsForTitle: i,
            creditsIfruit: n
          } = r;
          return (0, s.jsxs)("div", {
            className: g.allCredits,
            "data-title": t,
            children: [(0, s.jsx)(k, {
              title: t,
              t: e
            }), (0, s.jsx)(f, {
              data: i
            }), "v" === t ? (0, s.jsx)(v, {
              data: n
            }) : ""]
          })
        }));
      var h = t(6711);
      const N = {
          siteFooter: "@rockstargames-sites-rockstargames-2f41663b9c098a92ecbbc05fd3faa36dba4a",
          links: "@rockstargames-sites-rockstargames-2f41663b9c098a92e44b26d66ba891a4d80e",
          companyInfoLinks: "@rockstargames-sites-rockstargames-2f41663b9c098a92d0e946a638ab5a428656",
          languageSelector: "@rockstargames-sites-rockstargames-2f41663b9c098a92d9cc5285f787ce8e53ae",
          social: "@rockstargames-sites-rockstargames-2f41663b9c098a92e6baf472ef8443dc591b",
          showsOver: "@rockstargames-sites-rockstargames-2f41663b9c098a92ee46bac0c9bc4ec4f375",
          facebook: "@rockstargames-sites-rockstargames-2f41663b9c098a92d2a8143fa921032dabae",
          instagram: "@rockstargames-sites-rockstargames-2f41663b9c098a92b2ee25d5c3fb319beb35",
          youtube: "@rockstargames-sites-rockstargames-2f41663b9c098a92df0dfd940893eed27b7e",
          twitter: "@rockstargames-sites-rockstargames-2f41663b9c098a92d58d5f701d3b06b9ff74",
          twitch: "@rockstargames-sites-rockstargames-2f41663b9c098a92d3847882a8850df2d293",
          places: "@rockstargames-sites-rockstargames-2f41663b9c098a92d8bee1cef3aca55c2baa"
        },
        j = (0, d.withTranslations)((a => {
          let {
            t: e
          } = a;
          const t = (0, l.useBase)(),
            {
              host: c
            } = (0, h.useScConfig)(),
            {
              track: n
            } = (0, h.useGtmTrack)(),
            {
              state: o,
              toggleNavOpen: d
            } = (0, i.useRockstarLocalState)(),
            m = () => {
              d(!1)
            };
          return (0, s.jsxs)("footer", {
            role: "navigation",
            title: "Footer",
            className: [N.siteFooter, o.loading ? N.loading : ""].join(" "),
            children: [(0, s.jsx)("div", {
              className: N.languageSelector,
              children: (0, s.jsx)(r.LanguageSelector, {})
            }), (0, s.jsxs)("div", {
              className: N.links,
              children: [(0, s.jsx)(r.A, {
                to: "/contact",
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Contact",
                children: e("Contact")
              }), (0, s.jsx)(r.A, {
                to: `${document.location.origin}${t}careers`,
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Careers",
                children: e("Careers")
              }), (0, s.jsx)(r.A, {
                to: `https://${c}.rockstargames.com/settings/email`,
                onClick: () => {
                  m(), n({
                    event: "cta_subscribe_news",
                    event_category: "cta",
                    event_action: "subscribe_news",
                    event_label: "site footer",
                    text: e("Subscribe").toLowerCase(),
                    link_url: `https://${c}.rockstargames.com/settings/email`
                  })
                },
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Club",
                "data-gtm-label": "Manage Subscription Account",
                children: e("Subscribe")
              })]
            }), (0, s.jsxs)("div", {
              className: N.companyInfoLinks,
              children: [(0, s.jsx)(r.A, {
                to: "/corpinfo",
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Corporate Info",
                children: e("Corporate")
              }), (0, s.jsx)(r.A, {
                to: "/privacy",
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Privacy",
                children: e("Privacy")
              }), (0, s.jsx)(r.A, {
                onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Cookie settings",
                children: e("Cookie Settings")
              }), (0, s.jsx)(r.A, {
                to: "/cookies",
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Cookie policy",
                children: e("Cookie Policy")
              }), (0, s.jsx)(r.A, {
                to: "/legal",
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Legal",
                children: e("Legal")
              }), (0, s.jsx)(r.A, {
                to: "/ccpa",
                onClick: m,
                "data-gtm-category": "Footer",
                "data-gtm-action": "CCPA Link",
                "data-gtm-label": "View CCPA Info",
                children: e("Do Not Sell My Info")
              })]
            }), (0, s.jsxs)("div", {
              className: N.social,
              children: [(0, s.jsx)(r.A, {
                to: "https://twitch.tv/rockstargames",
                onClick: m,
                target: "_blank",
                className: N.twitch,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitch",
                title: "Twitch"
              }), (0, s.jsx)(r.A, {
                to: "https://instagram.com/rockstargames",
                onClick: m,
                target: "_blank",
                className: N.instagram,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Instagram",
                title: "Instagram"
              }), (0, s.jsx)(r.A, {
                to: "https://twitter.com/rockstargames",
                onClick: m,
                target: "_blank",
                className: N.twitter,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitter",
                title: "Twitter"
              }), (0, s.jsx)(r.A, {
                to: "https://www.youtube.com/rockstargames",
                onClick: m,
                target: "_blank",
                className: N.youtube,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "YouTube",
                title: "YouTube"
              }), (0, s.jsx)(r.A, {
                to: "https://www.facebook.com/rockstargames",
                onClick: m,
                target: "_blank",
                className: N.facebook,
                "data-gtm-category": "Footer",
                "data-gtm-action": " Social Click",
                "data-gtm-label": "Facebook",
                title: "Facebook"
              })]
            }), (0, s.jsxs)("section", {
              className: N.showsOver,
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
            })]
          })
        })),
        p = {
          showsOver: "@rockstargames-sites-rockstargames-2f41663b9c098a92c66421b47ad45455dfb2",
          standalone: "@rockstargames-sites-rockstargames-2f41663b9c098a92b3e4d7fbda382c75e905",
          places: "@rockstargames-sites-rockstargames-2f41663b9c098a92ae62e3bd463d4ba42fa5"
        },
        x = () => {
          const {
            state: {
              standalone: a
            }
          } = (0, i.useRockstarLocalState)();
          return (0, s.jsxs)("footer", {
            className: [p.showsOver, a && p.standalone].join(" "),
            children: [(0, s.jsx)("div", {
              className: p.whatTeamWildcats,
              children: "Rockstar Games"
            }), (0, s.jsxs)("div", {
              className: p.places,
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
              className: p.sophomore,
              children: "MCMXCVIII"
            })]
          })
        };
      var C = t(289);
      const S = {
          navOpen: "@rockstargames-sites-rockstargames-2f41663b9c098a92e029674651c019a50f11",
          nav: "@rockstargames-sites-rockstargames-2f41663b9c098a92ab6a2621d310cc5aa5fd",
          navBg: "@rockstargames-sites-rockstargames-2f41663b9c098a92be70dc914c76529cea45",
          links: "@rockstargames-sites-rockstargames-2f41663b9c098a92cc3f6ea321e1707fa0eb",
          activeLink: "@rockstargames-sites-rockstargames-2f41663b9c098a92f838ca03c1c58ff6578c",
          content: "@rockstargames-sites-rockstargames-2f41663b9c098a92ff7185c4155fa032f25a",
          searchbox: "@rockstargames-sites-rockstargames-2f41663b9c098a92a53d5435910c93787e42"
        },
        y = a => {
          let {
            isActive: e
          } = a;
          return e ? S.activeLink : ""
        },
        w = a => {
          let {
            locale: e,
            t,
            toggleNavOpen: c
          } = a;
          return (0, s.jsxs)("div", {
            className: S.links,
            onClick: () => c(!1),
            onKeyUp: () => c(!1),
            role: "button",
            tabIndex: 0,
            children: [(0, s.jsx)(r.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Newswire",
              to: "/newswire",
              className: y,
              children: t("Newswire")
            }), (0, s.jsx)(r.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Games",
              to: "/games",
              className: y,
              children: t("Games")
            }), (0, s.jsx)(r.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Videos",
              to: "/videos",
              className: y,
              children: t("Videos")
            }), (0, s.jsx)(r.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Downloads",
              to: "/downloads",
              className: y,
              children: t("Downloads")
            }), (0, s.jsx)(r.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Support",
              to: `https://support.rockstargames.com?redirect_lang=${e}`,
              target: "_blank",
              children: t("Support")
            }), (0, s.jsx)(r.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Socialclub",
              to: "https://socialclub.rockstargames.com/",
              target: "_blank",
              children: t("Social Club")
            }), (0, s.jsx)(r.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Launcher",
              to: "https://socialclub.rockstargames.com/rockstar-games-launcher",
              target: "_blank",
              children: t("Launcher")
            }), (0, s.jsx)(r.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Store",
              to: "https://store.rockstargames.com/",
              target: "_blank",
              children: t("Store")
            })]
          })
        },
        L = (0, d.withLocale)((0, d.withTranslations)((a => {
          let {
            locale: e,
            t
          } = a;
          const {
            state: c,
            toggleNavOpen: n
          } = (0, i.useRockstarLocalState)(), o = () => {
            n(!1)
          };
          return (0, C.useEffect)((() => {
            const a = a => {
              27 === a.keyCode && o()
            };
            return document.addEventListener("keydown", a, !1), () => document.removeEventListener("keydown", a, !1)
          }), []), (0, C.useEffect)((() => (window.addEventListener("popstate", o), () => {
            window.removeEventListener("popstate", o)
          })), []), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("nav", {
              role: "navigation",
              title: "Site",
              className: [S.nav, c.navOpen ? S.navOpen : ""].join(" "),
              children: (0, s.jsxs)("div", {
                className: S.content,
                children: [(0, s.jsx)("div", {
                  className: S.searchbox,
                  children: (0, s.jsx)(r.SearchBox, {})
                }), (0, s.jsx)(w, {
                  locale: e,
                  t,
                  toggleNavOpen: n
                })]
              })
            }), (0, s.jsx)("div", {
              "aria-label": "Close nav",
              className: S.navBg,
              onClick: () => o(),
              onKeyUp: () => o(),
              role: "button",
              tabIndex: 0
            })]
          })
        }))),
        _ = {
          header: "@rockstargames-sites-rockstargames-2f41663b9c098a92c88e3bf2c5a3eea47de1",
          headerHidden: "@rockstargames-sites-rockstargames-2f41663b9c098a92d47f3266f70158f40c19",
          standalone: "@rockstargames-sites-rockstargames-2f41663b9c098a92de5fe6dbf601131bf572",
          hidden: "@rockstargames-sites-rockstargames-2f41663b9c098a92e40a03373925b1f43678",
          logo: "@rockstargames-sites-rockstargames-2f41663b9c098a92ac8debfb2b628b833f4c",
          logoBlack: "@rockstargames-sites-rockstargames-2f41663b9c098a92f093360455b13454b6bb",
          logoNormal: "@rockstargames-sites-rockstargames-2f41663b9c098a92a3664df75f1e5452d7d8",
          active: "@rockstargames-sites-rockstargames-2f41663b9c098a92edee6ccaf0d7182160ee",
          signin: "@rockstargames-sites-rockstargames-2f41663b9c098a92eb89905202a9ce235483",
          bg: "@rockstargames-sites-rockstargames-2f41663b9c098a92b87c9cb79dc665de220b",
          loader: "@rockstargames-sites-rockstargames-2f41663b9c098a92bd84e6c23181dcddf241",
          loading: "@rockstargames-sites-rockstargames-2f41663b9c098a92bb09144de38feaa10e6d",
          left: "@rockstargames-sites-rockstargames-2f41663b9c098a92f03aa693d57989d2268d",
          menuOpener: "@rockstargames-sites-rockstargames-2f41663b9c098a92a69f93a42729f8a8c895",
          navOpen: "@rockstargames-sites-rockstargames-2f41663b9c098a92c9b3960def8d1c6e2ba0"
        },
        F = () => {
          const {
            state: {
              headerHidden: a,
              loading: e,
              navOpen: t,
              navHidden: c,
              normalLogo: n,
              standalone: l
            },
            setNavHidden: d,
            toggleNavOpen: m
          } = (0, i.useRockstarLocalState)(), {
            navOpen: g,
            setNavOpen: k
          } = (0, h.useRockstarUserState)(), {
            freezeUserShouldSeeMore: b,
            userShouldSeeMore: f
          } = (0, i.useScroll)();
          return (0, C.useEffect)((() => {
            b || g || t || d(f)
          }), [b, t, g, f]), (0, C.useEffect)((() => {
            !0 === g && !0 === t && m()
          }), [g]), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("header", {
              className: [_.header, a ? _.headerHidden : "", l ? _.standalone : "", t ? _.navOpen : "", e ? _.loading : "", c ? _.hidden : ""].join(" "),
              children: [(0, s.jsxs)("div", {
                className: _.left,
                children: [(0, s.jsx)("div", {
                  className: _.menuOpener,
                  children: (0, s.jsxs)(r.A, {
                    to: "#",
                    onClick: a => {
                      a.preventDefault(), m(), !0 === g && k(!1)
                    },
                    title: "Open Menu",
                    role: "button",
                    children: [(0, s.jsx)("span", {}), (0, s.jsx)("span", {}), (0, s.jsx)("span", {})]
                  })
                }), (0, s.jsx)(o, {})]
              }), (0, s.jsx)("div", {
                className: _.logo,
                children: (0, s.jsxs)(r.A, {
                  "data-gtm-category": "Mega Nav",
                  "data-gtm-action": "Main Nav",
                  "data-gtm-label": "Main Logo",
                  onClick: () => m(!1),
                  to: "/",
                  title: "Home",
                  role: "link",
                  children: [(0, s.jsx)("div", {
                    className: [_.logoNormal, n ? "" : _.active].join(" ")
                  }), (0, s.jsx)("div", {
                    className: [_.logoNormal, n ? _.active : ""].join(" ")
                  })]
                })
              }), (0, s.jsx)("div", {
                className: _.signin,
                children: (0, s.jsx)(h.MenuButton, {})
              }), (0, s.jsx)("div", {
                className: _.bg
              }), (0, s.jsx)("div", {
                className: [_.loader, e ? _.loading : ""].join(" ")
              })]
            }), (0, s.jsx)(L, {})]
          })
        }
    },
    545: a => {
      var e = {
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

      function t(a, e) {
        if ("FragmentSpread" === a.kind) e.add(a.name.value);
        else if ("VariableDefinition" === a.kind) {
          var s = a.type;
          "NamedType" === s.kind && e.add(s.name.value)
        }
        a.selectionSet && a.selectionSet.selections.forEach((function(a) {
          t(a, e)
        })), a.variableDefinitions && a.variableDefinitions.forEach((function(a) {
          t(a, e)
        })), a.definitions && a.definitions.forEach((function(a) {
          t(a, e)
        }))
      }
      e.loc.source = {
        body: "query CreditData(\n    $cache: Boolean = true\n    $title: String!\n    $needsIfruit: Boolean!\n) {\n    creditsForTitle(title: $title) {\n        business_title\n        division\n        preferred_name\n    }\n    creditsIfruit @include(if: $needsIfruit) {\n        static_json\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function c(a, e) {
        for (var t = 0; t < a.definitions.length; t++) {
          var s = a.definitions[t];
          if (s.name && s.name.value == e) return s
        }
      }
      e.definitions.forEach((function(a) {
        if (a.name) {
          var e = new Set;
          t(a, e), s[a.name.value] = e
        }
      })), a.exports = e, a.exports.CreditData = function(a, e) {
        var t = {
          kind: a.kind,
          definitions: [c(a, e)]
        };
        a.hasOwnProperty("loc") && (t.loc = a.loc);
        var r = s[e] || new Set,
          i = new Set,
          n = new Set;
        for (r.forEach((function(a) {
            n.add(a)
          })); n.size > 0;) {
          var o = n;
          n = new Set, o.forEach((function(a) {
            i.has(a) || (i.add(a), (s[a] || new Set).forEach((function(a) {
              n.add(a)
            })))
          }))
        }
        return i.forEach((function(e) {
          var s = c(a, e);
          s && t.definitions.push(s)
        })), t
      }(e, "CreditData")
    }
  }
]);
//# sourceMappingURL=f2ccde4410c67f200bdf.js.map