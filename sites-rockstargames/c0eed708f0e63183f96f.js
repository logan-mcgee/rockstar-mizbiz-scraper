(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [585], {
    585: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        AccessibilityButton: () => i,
        Breadcrumbs: () => o,
        Credits: () => k,
        FooterNav: () => j,
        FooterStuck: () => x,
        Header: () => F,
        Nav: () => L
      });
      var n = t(9706);
      const i = () => (0, n.jsx)("a", {
        className: "f4b487106fc9db70da5c9e4eca60c874705b",
        href: window.location.pathname.startsWith("gta-online") ? "#main" : "#content",
        children: "Skip to main content"
      });
      var c = t(8976),
        s = t(3657);
      const d = {
          breadcrumbs: "f4b487106fc9db70d66078ecc21fc876edca",
          disabled: "f4b487106fc9db70e864460048fa56b5d5d9",
          links: "f4b487106fc9db70b4b8f1f467f93b7b62e4",
          filter: "f4b487106fc9db70d6a49923db59e647d2ac"
        },
        o = () => {
          const {
            state: {
              breadcrumb: e,
              navHidden: a
            },
            toggleNavOpen: t
          } = (0, s.useRockstarLocalState)(), {
            filter: i = "",
            links: o = []
          } = e;
          return (0, n.jsxs)("div", {
            className: [d.breadcrumbs, a ? d.navHidden : "", o.length ? "" : d.disabled].join(" "),
            role: "navigation",
            title: "Breadcrumbs",
            children: [(0, n.jsx)("div", {
              className: d.links,
              children: o.map((e => (0, n.jsx)(c.A, {
                to: e.href,
                onClick: () => t(!1),
                children: e.title
              }, e.href)))
            }), i ? (0, n.jsx)("div", {
              className: d.filter,
              children: i
            }) : ""]
          })
        };
      var l = t(4859),
        r = t(9929),
        b = t(7807);
      const f = {
          allCredits: "f4b487106fc9db70c07b2ed65fca19c621e0",
          hero: "f4b487106fc9db70e4765147ad7c6364a729",
          logoLeft: "f4b487106fc9db70e78c6fd15fe9a1174cb4",
          logoRight: "f4b487106fc9db70c42998f1e8f170f8838f",
          heroContent: "f4b487106fc9db70a77548a5e07b708620ad",
          logos: "f4b487106fc9db70a0ce72b55890f76a22b5",
          header: "f4b487106fc9db70d938226fd75bfeccc0cc",
          description: "f4b487106fc9db70f4baa7c9e33b6836a685",
          creditContent: "f4b487106fc9db70ac1b38ff6e67b0beefe5",
          credit: "f4b487106fc9db70ff3d94ece3b9ef692ac0",
          name: "f4b487106fc9db70d7f647444651c6fce61b",
          position: "f4b487106fc9db70f290b96e3db8eb329493",
          originalPeople: "f4b487106fc9db70cc9341b097fa77c7994e",
          creditContentOld: "f4b487106fc9db70e266e79c67ec9931cca1",
          creditSection: "f4b487106fc9db70bd995b9c9192e418a156",
          creditSectionInner: "f4b487106fc9db70b2e6df498b9b13e29968"
        },
        m = e => {
          let {
            t: a,
            title: t
          } = e;
          return (0, n.jsx)("div", {
            className: [f.hero, f.heroRdr2].join(" "),
            "data-game": t,
            children: (0, n.jsxs)("div", {
              className: f.heroContent,
              children: [(0, n.jsxs)("div", {
                className: f.logos,
                "data-title": t,
                children: [(0, n.jsx)("div", {
                  className: f.logoLeft
                }), (0, n.jsx)("div", {
                  className: f.logoRight
                })]
              }), (0, n.jsx)("p", {
                className: f.description,
                dangerouslySetInnerHTML: {
                  __html: a(`credits.${t}.desc`)
                },
                "data-title": t
              })]
            })
          })
        },
        g = e => {
          let {
            children: a
          } = e;
          return (0, n.jsx)("div", {
            className: f.header,
            children: a
          })
        },
        v = e => {
          let {
            data: a
          } = e;
          return a ? (0, n.jsxs)("div", {
            className: f.creditContent,
            children: [(0, n.jsx)(g, {
              children: (0, n.jsx)("h1", {
                children: "Credits"
              })
            }), (0, n.jsx)("ul", {
              children: a?.map((e => (0, n.jsxs)("li", {
                children: [(0, n.jsx)("span", {
                  className: f.name,
                  children: e.preferred_name
                }), (0, n.jsx)("span", {
                  className: f.position,
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
            className: f.originalPeople,
            children: [(0, n.jsx)(g, {
              children: (0, n.jsx)("h2", {
                children: "Original Game Credits"
              })
            }), Object.keys(t.pageContent).map((e => {
              const {
                sections: a
              } = t.pageContent[e];
              return (0, n.jsxs)("div", {
                className: f.creditSection,
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
                    className: f.creditSectionInner,
                    children: [(0, n.jsx)("h4", {
                      dangerouslySetInnerHTML: {
                        __html: t
                      }
                    }), (0, n.jsx)("ul", {
                      className: f.creditContentOld,
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
        k = (0, r.withTranslations)((e => {
          let {
            t: a,
            title: t
          } = e;
          const i = "v" === t,
            {
              data: c
            } = (0, l.useQuery)(b.CreditData, {
              variables: {
                needsIfruit: i,
                title: t
              }
            });
          if (!c) return null;
          const {
            creditsForTitle: s,
            creditsIfruit: d
          } = c;
          return (0, n.jsxs)("div", {
            className: f.allCredits,
            "data-title": t,
            children: [(0, n.jsx)(m, {
              title: t,
              t: a
            }), (0, n.jsx)(v, {
              data: s
            }), "v" === t ? (0, n.jsx)(u, {
              data: d
            }) : ""]
          })
        }));
      var h = t(6711);
      const N = {
          siteFooter: "f4b487106fc9db70ecbbc05fd3faa36dba4a",
          links: "f4b487106fc9db70e44b26d66ba891a4d80e",
          companyInfoLinks: "f4b487106fc9db70d0e946a638ab5a428656",
          languageSelector: "f4b487106fc9db70d9cc5285f787ce8e53ae",
          social: "f4b487106fc9db70e6baf472ef8443dc591b",
          showsOver: "f4b487106fc9db70ee46bac0c9bc4ec4f375",
          facebook: "f4b487106fc9db70d2a8143fa921032dabae",
          instagram: "f4b487106fc9db70b2ee25d5c3fb319beb35",
          youtube: "f4b487106fc9db70df0dfd940893eed27b7e",
          twitter: "f4b487106fc9db70d58d5f701d3b06b9ff74",
          twitch: "f4b487106fc9db70d3847882a8850df2d293",
          places: "f4b487106fc9db70d8bee1cef3aca55c2baa"
        },
        j = (0, r.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            host: t
          } = (0, h.useScConfig)(), {
            track: i
          } = (0, h.useGtmTrack)(), {
            state: d,
            toggleNavOpen: o
          } = (0, s.useRockstarLocalState)(), l = () => {
            o(!1)
          };
          return (0, n.jsxs)("footer", {
            role: "navigation",
            title: "Footer",
            className: [N.siteFooter, d.loading ? N.loading : ""].join(" "),
            children: [(0, n.jsx)("div", {
              className: N.languageSelector,
              children: (0, n.jsx)(c.LanguageSelector, {})
            }), (0, n.jsxs)("div", {
              className: N.links,
              children: [(0, n.jsx)(c.A, {
                to: "/contact",
                onClick: l,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Contact",
                children: a("Contact")
              }), (0, n.jsx)(c.A, {
                to: "/careers",
                onClick: l,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Careers",
                children: a("Careers")
              }), (0, n.jsx)(c.A, {
                to: `https://${t}.rockstargames.com/settings/email`,
                onClick: () => {
                  l(), i({
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
              children: [(0, n.jsx)(c.A, {
                to: "/corpinfo",
                onClick: l,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Corporate Info",
                children: a("Corporate")
              }), (0, n.jsx)(c.A, {
                to: "/privacy",
                onClick: l,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Privacy",
                children: a("Privacy")
              }), (0, n.jsx)(c.A, {
                onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Cookie settings",
                children: a("Cookie Settings")
              }), (0, n.jsx)(c.A, {
                to: "/cookies",
                onClick: l,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Cookie policy",
                children: a("Cookie Policy")
              }), (0, n.jsx)(c.A, {
                to: "/legal",
                onClick: l,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Legal",
                children: a("Legal")
              }), (0, n.jsx)(c.A, {
                to: "/ccpa",
                onClick: l,
                "data-gtm-category": "Footer",
                "data-gtm-action": "CCPA Link",
                "data-gtm-label": "View CCPA Info",
                children: a("Do Not Sell My Info")
              })]
            }), (0, n.jsxs)("div", {
              className: N.social,
              children: [(0, n.jsx)(c.A, {
                to: "https://twitch.tv/rockstargames",
                onClick: l,
                target: "_blank",
                className: N.twitch,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitch",
                title: "Twitch"
              }), (0, n.jsx)(c.A, {
                to: "https://instagram.com/rockstargames",
                onClick: l,
                target: "_blank",
                className: N.instagram,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Instagram",
                title: "Instagram"
              }), (0, n.jsx)(c.A, {
                to: "https://twitter.com/rockstargames",
                onClick: l,
                target: "_blank",
                className: N.twitter,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitter",
                title: "Twitter"
              }), (0, n.jsx)(c.A, {
                to: "https://www.youtube.com/rockstargames",
                onClick: l,
                target: "_blank",
                className: N.youtube,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "YouTube",
                title: "YouTube"
              }), (0, n.jsx)(c.A, {
                to: "https://www.facebook.com/rockstargames",
                onClick: l,
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
          showsOver: "f4b487106fc9db70c66421b47ad45455dfb2",
          standalone: "f4b487106fc9db70b3e4d7fbda382c75e905",
          places: "f4b487106fc9db70ae62e3bd463d4ba42fa5"
        },
        x = () => {
          const {
            state: {
              standalone: e
            }
          } = (0, s.useRockstarLocalState)();
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
      var C = t(6026);
      const S = {
          navOpen: "f4b487106fc9db70e029674651c019a50f11",
          nav: "f4b487106fc9db70ab6a2621d310cc5aa5fd",
          navBg: "f4b487106fc9db70be70dc914c76529cea45",
          links: "f4b487106fc9db70cc3f6ea321e1707fa0eb",
          activeLink: "f4b487106fc9db70f838ca03c1c58ff6578c",
          content: "f4b487106fc9db70ff7185c4155fa032f25a",
          searchbox: "f4b487106fc9db70a53d5435910c93787e42"
        },
        y = e => {
          let {
            isActive: a
          } = e;
          return a ? S.activeLink : ""
        },
        w = e => {
          let {
            locale: a,
            t,
            toggleNavOpen: i
          } = e;
          return (0, n.jsxs)("div", {
            className: S.links,
            onClick: () => i(!1),
            onKeyUp: () => i(!1),
            role: "button",
            tabIndex: 0,
            children: [(0, n.jsx)(c.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Newswire",
              to: "/newswire",
              className: y,
              children: t("Newswire")
            }), (0, n.jsx)(c.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Games",
              to: "/games",
              className: y,
              children: t("Games")
            }), (0, n.jsx)(c.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Videos",
              to: "/videos",
              className: y,
              children: t("Videos")
            }), (0, n.jsx)(c.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Downloads",
              to: "/downloads",
              className: y,
              children: t("Downloads")
            }), (0, n.jsx)(c.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Support",
              to: `https://support.rockstargames.com?redirect_lang=${a}`,
              target: "_blank",
              children: t("Support")
            }), (0, n.jsx)(c.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Socialclub",
              to: "https://socialclub.rockstargames.com/",
              target: "_blank",
              children: t("Social Club")
            }), (0, n.jsx)(c.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Launcher",
              to: "https://socialclub.rockstargames.com/rockstar-games-launcher",
              target: "_blank",
              children: t("Launcher")
            }), (0, n.jsx)(c.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Store",
              to: "https://store.rockstargames.com/",
              target: "_blank",
              children: t("Store")
            })]
          })
        },
        L = (0, r.withLocale)((0, r.withTranslations)((e => {
          let {
            locale: a,
            t
          } = e;
          const {
            state: i,
            toggleNavOpen: d
          } = (0, s.useRockstarLocalState)(), o = () => {
            d(!1)
          };
          return (0, C.useEffect)((() => {
            const e = e => {
              27 === e.keyCode && o()
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []), (0, C.useEffect)((() => (window.addEventListener("popstate", o), () => {
            window.removeEventListener("popstate", o)
          })), []), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("nav", {
              role: "navigation",
              title: "Site",
              className: [S.nav, i.navOpen ? S.navOpen : ""].join(" "),
              children: (0, n.jsxs)("div", {
                className: S.content,
                children: [(0, n.jsx)("div", {
                  className: S.searchbox,
                  children: (0, n.jsx)(c.SearchBox, {})
                }), (0, n.jsx)(w, {
                  locale: a,
                  t,
                  toggleNavOpen: d
                })]
              })
            }), (0, n.jsx)("div", {
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
          header: "f4b487106fc9db70c88e3bf2c5a3eea47de1",
          headerHidden: "f4b487106fc9db70d47f3266f70158f40c19",
          standalone: "f4b487106fc9db70de5fe6dbf601131bf572",
          hidden: "f4b487106fc9db70e40a03373925b1f43678",
          logo: "f4b487106fc9db70ac8debfb2b628b833f4c",
          logoBlack: "f4b487106fc9db70f093360455b13454b6bb",
          logoNormal: "f4b487106fc9db70a3664df75f1e5452d7d8",
          active: "f4b487106fc9db70edee6ccaf0d7182160ee",
          signin: "f4b487106fc9db70eb89905202a9ce235483",
          bg: "f4b487106fc9db70b87c9cb79dc665de220b",
          loader: "f4b487106fc9db70bd84e6c23181dcddf241",
          loading: "f4b487106fc9db70bb09144de38feaa10e6d",
          left: "f4b487106fc9db70f03aa693d57989d2268d",
          menuOpener: "f4b487106fc9db70a69f93a42729f8a8c895",
          navOpen: "f4b487106fc9db70c9b3960def8d1c6e2ba0"
        },
        F = () => {
          const {
            state: {
              headerHidden: e,
              loading: a,
              navOpen: t,
              navHidden: i,
              normalLogo: d,
              standalone: l
            },
            setNavHidden: r,
            toggleNavOpen: b
          } = (0, s.useRockstarLocalState)(), {
            navOpen: f,
            setNavOpen: m
          } = (0, h.useRockstarUserState)(), {
            freezeUserShouldSeeMore: g,
            userShouldSeeMore: v
          } = (0, s.useScroll)();
          return (0, C.useEffect)((() => {
            g || f || t || r(v)
          }), [g, t, f, v]), (0, C.useEffect)((() => {
            !0 === f && !0 === t && b()
          }), [f]), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)("header", {
              className: [_.header, e ? _.headerHidden : "", l ? _.standalone : "", t ? _.navOpen : "", a ? _.loading : "", i ? _.hidden : ""].join(" "),
              children: [(0, n.jsxs)("div", {
                className: _.left,
                children: [(0, n.jsx)("div", {
                  className: _.menuOpener,
                  children: (0, n.jsxs)(c.A, {
                    to: "#",
                    onClick: e => {
                      e.preventDefault(), b(), !0 === f && m(!1)
                    },
                    title: "Open Menu",
                    role: "button",
                    children: [(0, n.jsx)("span", {}), (0, n.jsx)("span", {}), (0, n.jsx)("span", {})]
                  })
                }), (0, n.jsx)(o, {})]
              }), (0, n.jsx)("div", {
                className: _.logo,
                children: (0, n.jsxs)(c.A, {
                  "data-gtm-category": "Mega Nav",
                  "data-gtm-action": "Main Nav",
                  "data-gtm-label": "Main Logo",
                  onClick: () => b(!1),
                  to: "/",
                  title: "Home",
                  role: "link",
                  children: [(0, n.jsx)("div", {
                    className: [_.logoNormal, d ? "" : _.active].join(" ")
                  }), (0, n.jsx)("div", {
                    className: [_.logoNormal, d ? _.active : ""].join(" ")
                  })]
                })
              }), (0, n.jsx)("div", {
                className: _.signin,
                children: (0, n.jsx)(h.MenuButton, {})
              }), (0, n.jsx)("div", {
                className: _.bg
              }), (0, n.jsx)("div", {
                className: [_.loader, a ? _.loading : ""].join(" ")
              })]
            }), (0, n.jsx)(L, {})]
          })
        }
    },
    7807: e => {
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
        var c = n[a] || new Set,
          s = new Set,
          d = new Set;
        for (c.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var o = d;
          d = new Set, o.forEach((function(e) {
            s.has(e) || (s.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "CreditData")
    }
  }
]);