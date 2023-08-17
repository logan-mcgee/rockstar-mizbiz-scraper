(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [247], {
    247: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        AccessibilityButton: () => i,
        Breadcrumbs: () => l,
        Credits: () => k,
        FooterNav: () => j,
        FooterStuck: () => x,
        Header: () => F,
        Nav: () => w
      });
      var n = t(6160);
      const i = () => (0, n.jsx)("a", {
        className: "_7185b668a703e593da5c9e4eca60c874705b",
        href: window.location.pathname.startsWith("gta-online") ? "#main" : "#content",
        children: "Skip to main content"
      });
      var s = t(8976),
        c = t(3657);
      const o = {
          breadcrumbs: "_7185b668a703e593d66078ecc21fc876edca",
          disabled: "_7185b668a703e593e864460048fa56b5d5d9",
          links: "_7185b668a703e593b4b8f1f467f93b7b62e4",
          filter: "_7185b668a703e593d6a49923db59e647d2ac"
        },
        l = () => {
          const {
            state: {
              breadcrumb: e,
              navHidden: a
            },
            toggleNavOpen: t
          } = (0, c.useRockstarLocalState)(), {
            filter: i = "",
            links: l = []
          } = e;
          return (0, n.jsxs)("div", {
            className: [o.breadcrumbs, a ? o.navHidden : "", l.length ? "" : o.disabled].join(" "),
            role: "navigation",
            title: "Breadcrumbs",
            children: [(0, n.jsx)("div", {
              className: o.links,
              children: l.map((e => (0, n.jsx)(s.A, {
                to: e.href,
                onClick: () => t(!1),
                children: e.title
              }, e.href)))
            }), i ? (0, n.jsx)("div", {
              className: o.filter,
              children: i
            }) : ""]
          })
        };
      var r = t(4859),
        d = t(9929),
        m = t(545);
      const b = {
          allCredits: "_7185b668a703e593c07b2ed65fca19c621e0",
          hero: "_7185b668a703e593e4765147ad7c6364a729",
          logoLeft: "_7185b668a703e593e78c6fd15fe9a1174cb4",
          logoRight: "_7185b668a703e593c42998f1e8f170f8838f",
          heroContent: "_7185b668a703e593a77548a5e07b708620ad",
          logos: "_7185b668a703e593a0ce72b55890f76a22b5",
          header: "_7185b668a703e593d938226fd75bfeccc0cc",
          description: "_7185b668a703e593f4baa7c9e33b6836a685",
          creditContent: "_7185b668a703e593ac1b38ff6e67b0beefe5",
          credit: "_7185b668a703e593ff3d94ece3b9ef692ac0",
          name: "_7185b668a703e593d7f647444651c6fce61b",
          position: "_7185b668a703e593f290b96e3db8eb329493",
          originalPeople: "_7185b668a703e593cc9341b097fa77c7994e",
          creditContentOld: "_7185b668a703e593e266e79c67ec9931cca1",
          creditSection: "_7185b668a703e593bd995b9c9192e418a156",
          creditSectionInner: "_7185b668a703e593b2e6df498b9b13e29968"
        },
        g = e => {
          let {
            t: a,
            title: t
          } = e;
          return (0, n.jsx)("div", {
            className: [b.hero, b.heroRdr2].join(" "),
            "data-game": t,
            children: (0, n.jsxs)("div", {
              className: b.heroContent,
              children: [(0, n.jsxs)("div", {
                className: b.logos,
                "data-title": t,
                children: [(0, n.jsx)("div", {
                  className: b.logoLeft
                }), (0, n.jsx)("div", {
                  className: b.logoRight
                })]
              }), (0, n.jsx)("p", {
                className: b.description,
                dangerouslySetInnerHTML: {
                  __html: a(`credits.${t}.desc`)
                },
                "data-title": t
              })]
            })
          })
        },
        v = e => {
          let {
            children: a
          } = e;
          return (0, n.jsx)("div", {
            className: b.header,
            children: a
          })
        },
        f = e => {
          let {
            data: a
          } = e;
          return a ? (0, n.jsxs)("div", {
            className: b.creditContent,
            children: [(0, n.jsx)(v, {
              children: (0, n.jsx)("h1", {
                children: "Credits"
              })
            }), (0, n.jsx)("ul", {
              children: a?.map((e => (0, n.jsxs)("li", {
                children: [(0, n.jsx)("span", {
                  className: b.name,
                  children: e.preferred_name
                }), (0, n.jsx)("span", {
                  className: b.position,
                  children: `${e?.business_title?.replace('"',"").trim()}, ${e.division}`
                })]
              }, JSON.stringify(e))))
            })]
          }) : null
        },
        u = e => {
          let {
            data: a
          } = e;
          if (!a) return null;
          const t = a[0]?.static_json;
          return (0, n.jsxs)("div", {
            className: b.originalPeople,
            children: [(0, n.jsx)(v, {
              children: (0, n.jsx)("h2", {
                children: "Original Game Credits"
              })
            }), Object.keys(t.pageContent).map((e => {
              const {
                sections: a
              } = t.pageContent[e];
              return (0, n.jsxs)("div", {
                className: b.creditSection,
                children: [(0, n.jsx)("h3", {
                  children: (i = e, t.scrollerData.find((e => {
                    let {
                      eventName: a
                    } = e;
                    return a === i
                  }))?.title ?? "")
                }), a.map((e => {
                  let {
                    content: a,
                    title: t
                  } = e;
                  return (0, n.jsxs)("div", {
                    className: b.creditSectionInner,
                    children: [(0, n.jsx)("h4", {
                      dangerouslySetInnerHTML: {
                        __html: t
                      }
                    }), (0, n.jsx)("ul", {
                      className: b.creditContentOld,
                      children: a.map((e => (0, n.jsx)("li", {
                        dangerouslySetInnerHTML: {
                          __html: e
                        }
                      }, e)))
                    })]
                  }, t)
                }))]
              }, e);
              var i
            }))]
          })
        },
        k = (0, d.withTranslations)((e => {
          let {
            t: a,
            title: t
          } = e;
          const i = "v" === t,
            {
              data: s
            } = (0, r.useQuery)(m.CreditData, {
              variables: {
                needsIfruit: i,
                title: t
              }
            });
          if (!s) return null;
          const {
            creditsForTitle: c,
            creditsIfruit: o
          } = s;
          return (0, n.jsxs)("div", {
            className: b.allCredits,
            "data-title": t,
            children: [(0, n.jsx)(g, {
              title: t,
              t: a
            }), (0, n.jsx)(f, {
              data: c
            }), "v" === t ? (0, n.jsx)(u, {
              data: o
            }) : ""]
          })
        }));
      var h = t(6711);
      const N = {
          siteFooter: "_7185b668a703e593ecbbc05fd3faa36dba4a",
          links: "_7185b668a703e593e44b26d66ba891a4d80e",
          companyInfoLinks: "_7185b668a703e593d0e946a638ab5a428656",
          languageSelector: "_7185b668a703e593d9cc5285f787ce8e53ae",
          social: "_7185b668a703e593e6baf472ef8443dc591b",
          showsOver: "_7185b668a703e593ee46bac0c9bc4ec4f375",
          facebook: "_7185b668a703e593d2a8143fa921032dabae",
          instagram: "_7185b668a703e593b2ee25d5c3fb319beb35",
          youtube: "_7185b668a703e593df0dfd940893eed27b7e",
          twitter: "_7185b668a703e593d58d5f701d3b06b9ff74",
          twitch: "_7185b668a703e593d3847882a8850df2d293",
          places: "_7185b668a703e593d8bee1cef3aca55c2baa"
        },
        j = (0, d.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            host: t
          } = (0, h.useScConfig)(), {
            track: i
          } = (0, h.useGtmTrack)(), {
            state: o,
            toggleNavOpen: l
          } = (0, c.useRockstarLocalState)(), r = () => {
            l(!1)
          };
          return (0, n.jsxs)("footer", {
            role: "navigation",
            title: "Footer",
            className: [N.siteFooter, o.loading ? N.loading : ""].join(" "),
            children: [(0, n.jsx)("div", {
              className: N.languageSelector,
              children: (0, n.jsx)(s.LanguageSelector, {})
            }), (0, n.jsxs)("div", {
              className: N.links,
              children: [(0, n.jsx)(s.A, {
                to: "/contact",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Contact",
                children: a("Contact")
              }), (0, n.jsx)(s.A, {
                to: "/careers",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Careers",
                children: a("Careers")
              }), (0, n.jsx)(s.A, {
                to: `https://${t}.rockstargames.com/settings/email`,
                onClick: () => {
                  r(), i({
                    event: "cta_subscribe_news",
                    event_category: "cta",
                    event_action: "subscribe_news",
                    event_label: "site footer",
                    text: a("Subscribe").toLowerCase(),
                    link_url: `https://${t}.rockstargames.com/settings/email`
                  })
                },
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Club",
                "data-gtm-label": "Manage Subscription Account",
                children: a("Subscribe")
              })]
            }), (0, n.jsxs)("div", {
              className: N.companyInfoLinks,
              children: [(0, n.jsx)(s.A, {
                to: "/corpinfo",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Corporate Info",
                children: a("Corporate")
              }), (0, n.jsx)(s.A, {
                to: "/privacy",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Privacy",
                children: a("Privacy")
              }), (0, n.jsx)(s.A, {
                onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Cookie settings",
                children: a("Cookie Settings")
              }), (0, n.jsx)(s.A, {
                to: "/cookies",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Cookie policy",
                children: a("Cookie Policy")
              }), (0, n.jsx)(s.A, {
                to: "/legal",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Legal",
                children: a("Legal")
              }), (0, n.jsx)(s.A, {
                to: "/ccpa",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "CCPA Link",
                "data-gtm-label": "View CCPA Info",
                children: a("Do Not Sell My Info")
              })]
            }), (0, n.jsxs)("div", {
              className: N.social,
              children: [(0, n.jsx)(s.A, {
                to: "https://twitch.tv/rockstargames",
                onClick: r,
                target: "_blank",
                className: N.twitch,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitch",
                title: "Twitch"
              }), (0, n.jsx)(s.A, {
                to: "https://instagram.com/rockstargames",
                onClick: r,
                target: "_blank",
                className: N.instagram,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Instagram",
                title: "Instagram"
              }), (0, n.jsx)(s.A, {
                to: "https://twitter.com/rockstargames",
                onClick: r,
                target: "_blank",
                className: N.twitter,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitter",
                title: "Twitter"
              }), (0, n.jsx)(s.A, {
                to: "https://www.youtube.com/rockstargames",
                onClick: r,
                target: "_blank",
                className: N.youtube,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "YouTube",
                title: "YouTube"
              }), (0, n.jsx)(s.A, {
                to: "https://www.facebook.com/rockstargames",
                onClick: r,
                target: "_blank",
                className: N.facebook,
                "data-gtm-category": "Footer",
                "data-gtm-action": " Social Click",
                "data-gtm-label": "Facebook",
                title: "Facebook"
              })]
            }), (0, n.jsxs)("section", {
              className: N.showsOver,
              children: [(0, n.jsx)("div", {
                className: N.whatTeamWildcats,
                children: "Rockstar Games"
              }), (0, n.jsxs)("div", {
                className: N.places,
                children: [(0, n.jsx)("span", {
                  children: "New York"
                }), (0, n.jsx)("span", {
                  children: "London"
                }), (0, n.jsx)("span", {
                  children: "Paris"
                }), (0, n.jsx)("span", {
                  children: "Bogotá"
                })]
              }), (0, n.jsx)("div", {
                className: N.sophomore,
                children: "MCMXCVIII"
              })]
            })]
          })
        })),
        p = {
          showsOver: "_7185b668a703e593c66421b47ad45455dfb2",
          standalone: "_7185b668a703e593b3e4d7fbda382c75e905",
          places: "_7185b668a703e593ae62e3bd463d4ba42fa5"
        },
        x = () => {
          const {
            state: {
              standalone: e
            }
          } = (0, c.useRockstarLocalState)();
          return (0, n.jsxs)("footer", {
            className: [p.showsOver, e && p.standalone].join(" "),
            children: [(0, n.jsx)("div", {
              className: p.whatTeamWildcats,
              children: "Rockstar Games"
            }), (0, n.jsxs)("div", {
              className: p.places,
              children: [(0, n.jsx)("span", {
                children: "New York"
              }), (0, n.jsx)("span", {
                children: "London"
              }), (0, n.jsx)("span", {
                children: "Paris"
              }), (0, n.jsx)("span", {
                children: "Bogotá"
              })]
            }), (0, n.jsx)("div", {
              className: p.sophomore,
              children: "MCMXCVIII"
            })]
          })
        };
      var _ = t(6035);
      const C = {
          navOpen: "_7185b668a703e593e029674651c019a50f11",
          nav: "_7185b668a703e593ab6a2621d310cc5aa5fd",
          navBg: "_7185b668a703e593be70dc914c76529cea45",
          links: "_7185b668a703e593cc3f6ea321e1707fa0eb",
          activeLink: "_7185b668a703e593f838ca03c1c58ff6578c",
          content: "_7185b668a703e593ff7185c4155fa032f25a",
          searchbox: "_7185b668a703e593a53d5435910c93787e42"
        },
        S = e => {
          let {
            isActive: a
          } = e;
          return a ? C.activeLink : ""
        },
        y = e => {
          let {
            locale: a,
            t,
            toggleNavOpen: i
          } = e;
          return (0, n.jsxs)("div", {
            className: C.links,
            onClick: () => i(!1),
            onKeyUp: () => i(!1),
            role: "button",
            tabIndex: 0,
            children: [(0, n.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Newswire",
              to: "/newswire",
              className: S,
              children: t("Newswire")
            }), (0, n.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Games",
              to: "/games",
              className: S,
              children: t("Games")
            }), (0, n.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Videos",
              to: "/videos",
              className: S,
              children: t("Videos")
            }), (0, n.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Downloads",
              to: "/downloads",
              className: S,
              children: t("Downloads")
            }), (0, n.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Support",
              to: `https://support.rockstargames.com?redirect_lang=${a}`,
              target: "_blank",
              children: t("Support")
            }), (0, n.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Socialclub",
              to: "https://socialclub.rockstargames.com/",
              target: "_blank",
              children: t("Social Club")
            }), (0, n.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Launcher",
              to: "https://socialclub.rockstargames.com/rockstar-games-launcher",
              target: "_blank",
              children: t("Launcher")
            }), (0, n.jsx)(s.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Store",
              to: "https://store.rockstargames.com/",
              target: "_blank",
              children: t("Store")
            })]
          })
        },
        w = (0, d.withLocale)((0, d.withTranslations)((e => {
          let {
            locale: a,
            t
          } = e;
          const {
            state: i,
            toggleNavOpen: o
          } = (0, c.useRockstarLocalState)(), l = () => {
            o(!1)
          };
          return (0, _.useEffect)((() => {
            const e = e => {
              27 === e.keyCode && l()
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []), (0, _.useEffect)((() => (window.addEventListener("popstate", l), () => {
            window.removeEventListener("popstate", l)
          })), []), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("nav", {
              role: "navigation",
              title: "Site",
              className: [C.nav, i.navOpen ? C.navOpen : ""].join(" "),
              children: (0, n.jsxs)("div", {
                className: C.content,
                children: [(0, n.jsx)("div", {
                  className: C.searchbox,
                  children: (0, n.jsx)(s.SearchBox, {})
                }), (0, n.jsx)(y, {
                  locale: a,
                  t,
                  toggleNavOpen: o
                })]
              })
            }), (0, n.jsx)("div", {
              "aria-label": "Close nav",
              className: C.navBg,
              onClick: () => l(),
              onKeyUp: () => l(),
              role: "button",
              tabIndex: 0
            })]
          })
        }))),
        L = {
          header: "_7185b668a703e593c88e3bf2c5a3eea47de1",
          headerHidden: "_7185b668a703e593d47f3266f70158f40c19",
          standalone: "_7185b668a703e593de5fe6dbf601131bf572",
          hidden: "_7185b668a703e593e40a03373925b1f43678",
          logo: "_7185b668a703e593ac8debfb2b628b833f4c",
          logoBlack: "_7185b668a703e593f093360455b13454b6bb",
          logoNormal: "_7185b668a703e593a3664df75f1e5452d7d8",
          active: "_7185b668a703e593edee6ccaf0d7182160ee",
          signin: "_7185b668a703e593eb89905202a9ce235483",
          bg: "_7185b668a703e593b87c9cb79dc665de220b",
          loader: "_7185b668a703e593bd84e6c23181dcddf241",
          loading: "_7185b668a703e593bb09144de38feaa10e6d",
          left: "_7185b668a703e593f03aa693d57989d2268d",
          menuOpener: "_7185b668a703e593a69f93a42729f8a8c895",
          navOpen: "_7185b668a703e593c9b3960def8d1c6e2ba0"
        },
        F = () => {
          const {
            state: {
              headerHidden: e,
              loading: a,
              navOpen: t,
              navHidden: i,
              normalLogo: o,
              standalone: r
            },
            setNavHidden: d,
            toggleNavOpen: m
          } = (0, c.useRockstarLocalState)(), {
            navOpen: b,
            setNavOpen: g
          } = (0, h.useRockstarUserState)(), {
            freezeUserShouldSeeMore: v,
            userShouldSeeMore: f
          } = (0, c.useScroll)();
          return (0, _.useEffect)((() => {
            v || b || t || d(f)
          }), [v, t, b, f]), (0, _.useEffect)((() => {
            !0 === b && !0 === t && m()
          }), [b]), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)("header", {
              className: [L.header, e ? L.headerHidden : "", r ? L.standalone : "", t ? L.navOpen : "", a ? L.loading : "", i ? L.hidden : ""].join(" "),
              children: [(0, n.jsxs)("div", {
                className: L.left,
                children: [(0, n.jsx)("div", {
                  className: L.menuOpener,
                  children: (0, n.jsxs)(s.A, {
                    to: "#",
                    onClick: e => {
                      e.preventDefault(), m(), !0 === b && g(!1)
                    },
                    title: "Open Menu",
                    role: "button",
                    children: [(0, n.jsx)("span", {}), (0, n.jsx)("span", {}), (0, n.jsx)("span", {})]
                  })
                }), (0, n.jsx)(l, {})]
              }), (0, n.jsx)("div", {
                className: L.logo,
                children: (0, n.jsxs)(s.A, {
                  "data-gtm-category": "Mega Nav",
                  "data-gtm-action": "Main Nav",
                  "data-gtm-label": "Main Logo",
                  onClick: () => m(!1),
                  to: "/",
                  title: "Home",
                  role: "link",
                  children: [(0, n.jsx)("div", {
                    className: [L.logoNormal, o ? "" : L.active].join(" ")
                  }), (0, n.jsx)("div", {
                    className: [L.logoNormal, o ? L.active : ""].join(" ")
                  })]
                })
              }), (0, n.jsx)("div", {
                className: L.signin,
                children: (0, n.jsx)(h.MenuButton, {})
              }), (0, n.jsx)("div", {
                className: L.bg
              }), (0, n.jsx)("div", {
                className: [L.loader, a ? L.loading : ""].join(" ")
              })]
            }), (0, n.jsx)(w, {})]
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
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
      var n = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.CreditData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = n[a] || new Set,
          c = new Set,
          o = new Set;
        for (s.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            c.has(e) || (c.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "CreditData")
    }
  }
]);