(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [170], {
    8170: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Breadcrumbs: () => o,
        Credits: () => f,
        FooterNav: () => C,
        FooterStuck: () => w,
        Header: () => O,
        Nav: () => F
      });
      var n = t(8976),
        i = t(3657);
      const s = {
        breadcrumbs: "d66078ecc21fc876edca",
        disabled: "e864460048fa56b5d5d9",
        links: "b4b8f1f467f93b7b62e4",
        filter: "d6a49923db59e647d2ac"
      };
      var c = t(5668);
      const o = () => {
        const {
          state: {
            breadcrumb: e,
            navHidden: a
          },
          toggleNavOpen: t
        } = (0, i.useRockstarLocalState)(), {
          filter: o = "",
          links: l = []
        } = e;
        return (0, c.jsxs)("div", {
          className: [s.breadcrumbs, a ? s.navHidden : "", l.length ? "" : s.disabled].join(" "),
          role: "navigation",
          title: "Breadcrumbs",
          children: [(0, c.jsx)("div", {
            className: s.links,
            children: l.map((e => (0, c.jsx)(n.A, {
              to: e.href,
              onClick: () => t(!1),
              children: e.title
            }, e.href)))
          }), o ? (0, c.jsx)("div", {
            className: s.filter,
            children: o
          }) : ""]
        })
      };
      var l = t(4859),
        r = t(3872);
      const d = {
          allCredits: "c07b2ed65fca19c621e0",
          hero: "e4765147ad7c6364a729",
          logoLeft: "e78c6fd15fe9a1174cb4",
          logoRight: "c42998f1e8f170f8838f",
          heroContent: "a77548a5e07b708620ad",
          logos: "a0ce72b55890f76a22b5",
          header: "d938226fd75bfeccc0cc",
          description: "f4baa7c9e33b6836a685",
          creditContent: "ac1b38ff6e67b0beefe5",
          credit: "ff3d94ece3b9ef692ac0",
          name: "d7f647444651c6fce61b",
          position: "f290b96e3db8eb329493",
          originalPeople: "cc9341b097fa77c7994e",
          creditContentOld: "e266e79c67ec9931cca1",
          creditSection: "bd995b9c9192e418a156",
          creditSectionInner: "b2e6df498b9b13e29968"
        },
        m = e => {
          let {
            title: a
          } = e;
          return (0, c.jsx)("div", {
            className: [d.hero, d.heroRdr2].join(" "),
            children: (0, c.jsxs)("div", {
              className: d.heroContent,
              children: [(0, c.jsxs)("div", {
                className: d.logos,
                "data-title": a,
                children: [(0, c.jsx)("div", {
                  className: d.logoLeft
                }), (0, c.jsx)("div", {
                  className: d.logoRight
                })]
              }), "v" === a ? (0, c.jsx)("p", {
                className: d.description,
                children: "Grand Theft Auto V and Grand Theft Auto Online represent the combined efforts of our global team over many years. We want to acknowledge and thank everyone who has contributed to these games, from their original launch in 2013 all the way through to present day."
              }) : ""]
            })
          })
        },
        g = e => {
          let {
            children: a
          } = e;
          return (0, c.jsx)("div", {
            className: d.header,
            children: a
          })
        },
        b = e => {
          let {
            data: a
          } = e;
          return a ? (0, c.jsxs)("div", {
            className: d.creditContent,
            children: [(0, c.jsx)(g, {
              children: (0, c.jsx)("h1", {
                children: "Credits"
              })
            }), (0, c.jsx)("ul", {
              children: a?.map((e => (0, c.jsxs)("li", {
                children: [(0, c.jsx)("span", {
                  className: d.name,
                  children: e.preferred_name
                }), (0, c.jsx)("span", {
                  className: d.position,
                  children: `${e?.business_title?.replace('"',"").trim()}, ${e.division}`
                })]
              }, JSON.stringify(e))))
            })]
          }) : null
        },
        h = e => {
          let {
            data: a
          } = e;
          if (!a) return null;
          const t = a[0]?.static_json;
          return (0, c.jsxs)("div", {
            className: d.originalPeople,
            children: [(0, c.jsx)(g, {
              children: (0, c.jsx)("h2", {
                children: "Original Game Credits"
              })
            }), Object.keys(t.pageContent).map((e => {
              const {
                sections: a
              } = t.pageContent[e];
              return (0, c.jsxs)("div", {
                className: d.creditSection,
                children: [(0, c.jsx)("h3", {
                  children: (n = e, t.scrollerData.find((e => {
                    let {
                      eventName: a
                    } = e;
                    return a === n
                  }))?.title ?? "")
                }), a.map((e => {
                  let {
                    content: a,
                    title: t
                  } = e;
                  return (0, c.jsxs)("div", {
                    className: d.creditSectionInner,
                    children: [(0, c.jsx)("h4", {
                      dangerouslySetInnerHTML: {
                        __html: t
                      }
                    }), (0, c.jsx)("ul", {
                      className: d.creditContentOld,
                      children: a.map((e => (0, c.jsx)("li", {
                        dangerouslySetInnerHTML: {
                          __html: e
                        }
                      }, e)))
                    })]
                  }, t)
                }))]
              }, e);
              var n
            }))]
          })
        },
        f = e => {
          let {
            title: a
          } = e;
          const {
            data: t
          } = (0, l.useQuery)(r.CreditData, {
            variables: {
              title: a
            }
          });
          if (!t) return null;
          const {
            creditsForTitle: n,
            creditsIfruit: i
          } = t;
          return (0, c.jsxs)("div", {
            className: d.allCredits,
            "data-title": a,
            children: [(0, c.jsx)(m, {
              title: a
            }), (0, c.jsx)(b, {
              data: n
            }), "v" === a ? (0, c.jsx)(h, {
              data: i
            }) : ""]
          })
        };
      var u = t(9929),
        v = t(6711),
        k = t(6026),
        x = t(9976);
      const j = {
          languageSelector: "ab2e3bf0a18721c0132d",
          open: "c899ada4ccfb1e0b6a40",
          linkWrapper: "e1dd165b83c3c26f374f",
          links: "ca45261b340ce8994f8a"
        },
        p = (0, u.withTranslations)((e => {
          let {
            t: a
          } = e;
          const t = (0, x.useLocation)(),
            [i, s] = (0, k.useState)(!1),
            o = [{
              base: "",
              text: a("English")
            }, {
              base: "/de",
              text: a("Deutsch")
            }, {
              base: "/fr",
              text: a("Français")
            }, {
              base: "/it",
              text: a("Italiano")
            }, {
              base: "/jp",
              text: a("日本語")
            }, {
              base: "/ru",
              text: a("Pусский")
            }, {
              base: "/es",
              text: a("Español (España)")
            }, {
              base: "/mx",
              text: a("Español (México)")
            }, {
              base: "/br",
              text: a("Português")
            }, {
              base: "/kr",
              text: a("한국어")
            }, {
              base: "/zh",
              text: a("中文（简体）")
            }, {
              base: "/tw",
              text: a("中文（繁體）")
            }, {
              base: "/pl",
              text: a("Polski")
            }];
          return (0, c.jsxs)("div", {
            className: [j.languageSelector, i ? j.open : ""].join(" "),
            children: [(0, c.jsxs)("button", {
              onClick: () => s(!i),
              type: "button",
              children: [(0, c.jsx)("i", {}), (0, c.jsx)("span", {
                children: a("current-language")
              })]
            }), (0, c.jsx)("div", {
              className: j.linkWrapper,
              children: (0, c.jsx)("div", {
                className: j.links,
                children: o.map((e => {
                  let {
                    base: a,
                    text: i
                  } = e;
                  return (0, c.jsx)(n.A, {
                    to: `${window.location.origin}${a}${t.pathname}${t.search}`,
                    children: i
                  }, i)
                }))
              })
            })]
          })
        })),
        N = {
          siteFooter: "ecbbc05fd3faa36dba4a",
          links: "e44b26d66ba891a4d80e",
          companyInfoLinks: "d0e946a638ab5a428656",
          languageSelector: "d9cc5285f787ce8e53ae",
          social: "e6baf472ef8443dc591b",
          showsOver: "ee46bac0c9bc4ec4f375",
          facebook: "d2a8143fa921032dabae",
          instagram: "b2ee25d5c3fb319beb35",
          youtube: "df0dfd940893eed27b7e",
          twitter: "d58d5f701d3b06b9ff74",
          twitch: "d3847882a8850df2d293",
          places: "d8bee1cef3aca55c2baa"
        },
        C = (0, u.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            host: t
          } = (0, v.useScConfig)(), {
            track: s
          } = (0, v.useGtmTrack)(), {
            state: o,
            toggleNavOpen: l
          } = (0, i.useRockstarLocalState)(), r = () => {
            l(!1)
          };
          return (0, c.jsxs)("footer", {
            role: "navigation",
            title: "Footer",
            className: [N.siteFooter, o.loading ? N.loading : ""].join(" "),
            children: [(0, c.jsx)("div", {
              className: N.languageSelector,
              children: (0, c.jsx)(p, {})
            }), (0, c.jsxs)("div", {
              className: N.links,
              children: [(0, c.jsx)(n.A, {
                to: "/contact",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Contact",
                children: a("Contact")
              }), (0, c.jsx)(n.A, {
                to: "/careers",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Careers",
                children: a("Careers")
              }), (0, c.jsx)(n.A, {
                to: `https://${t}.rockstargames.com/settings/email`,
                onClick: () => {
                  r(), s({
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
            }), (0, c.jsxs)("div", {
              className: N.companyInfoLinks,
              children: [(0, c.jsx)(n.A, {
                to: "/corpinfo",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Corporate Info",
                children: a("Corporate")
              }), (0, c.jsx)(n.A, {
                to: "/privacy",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Privacy",
                children: a("Privacy")
              }), (0, c.jsx)(n.A, {
                onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Cookie settings",
                children: a("Cookie Settings")
              }), (0, c.jsx)(n.A, {
                to: "/cookies",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Cookie policy",
                children: a("Cookie Policy")
              }), (0, c.jsx)(n.A, {
                to: "/legal",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Legal",
                children: a("Legal")
              }), (0, c.jsx)(n.A, {
                to: "/ccpa",
                onClick: r,
                "data-gtm-category": "Footer",
                "data-gtm-action": "CCPA Link",
                "data-gtm-label": "View CCPA Info",
                children: a("Do Not Sell My Info")
              })]
            }), (0, c.jsxs)("div", {
              className: N.social,
              children: [(0, c.jsx)(n.A, {
                to: "https://twitch.tv/rockstargames",
                onClick: r,
                target: "_blank",
                className: N.twitch,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitch",
                title: "Twitch"
              }), (0, c.jsx)(n.A, {
                to: "https://instagram.com/rockstargames",
                onClick: r,
                target: "_blank",
                className: N.instagram,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Instagram",
                title: "Instagram"
              }), (0, c.jsx)(n.A, {
                to: "https://twitter.com/rockstargames",
                onClick: r,
                target: "_blank",
                className: N.twitter,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitter",
                title: "Twitter"
              }), (0, c.jsx)(n.A, {
                to: "https://www.youtube.com/rockstargames",
                onClick: r,
                target: "_blank",
                className: N.youtube,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "YouTube",
                title: "YouTube"
              }), (0, c.jsx)(n.A, {
                to: "https://www.facebook.com/rockstargames",
                onClick: r,
                target: "_blank",
                className: N.facebook,
                "data-gtm-category": "Footer",
                "data-gtm-action": " Social Click",
                "data-gtm-label": "Facebook",
                title: "Facebook"
              })]
            }), (0, c.jsxs)("section", {
              className: N.showsOver,
              children: [(0, c.jsx)("div", {
                className: N.whatTeamWildcats,
                children: "Rockstar Games"
              }), (0, c.jsxs)("div", {
                className: N.places,
                children: [(0, c.jsx)("span", {
                  children: "New York"
                }), (0, c.jsx)("span", {
                  children: "London"
                }), (0, c.jsx)("span", {
                  children: "Paris"
                }), (0, c.jsx)("span", {
                  children: "Bogotá"
                })]
              }), (0, c.jsx)("div", {
                className: N.sophomore,
                children: "MCMXCVIII"
              })]
            })]
          })
        })),
        S = {
          showsOver: "c66421b47ad45455dfb2",
          standalone: "b3e4d7fbda382c75e905",
          places: "ae62e3bd463d4ba42fa5"
        },
        w = () => {
          const {
            state: {
              standalone: e
            }
          } = (0, i.useRockstarLocalState)();
          return (0, c.jsxs)("footer", {
            className: [S.showsOver, e && S.standalone].join(" "),
            children: [(0, c.jsx)("div", {
              className: S.whatTeamWildcats,
              children: "Rockstar Games"
            }), (0, c.jsxs)("div", {
              className: S.places,
              children: [(0, c.jsx)("span", {
                children: "New York"
              }), (0, c.jsx)("span", {
                children: "London"
              }), (0, c.jsx)("span", {
                children: "Paris"
              }), (0, c.jsx)("span", {
                children: "Bogotá"
              })]
            }), (0, c.jsx)("div", {
              className: S.sophomore,
              children: "MCMXCVIII"
            })]
          })
        },
        y = {
          navOpen: "e029674651c019a50f11",
          nav: "ab6a2621d310cc5aa5fd",
          navBg: "be70dc914c76529cea45",
          links: "cc3f6ea321e1707fa0eb",
          activeLink: "f838ca03c1c58ff6578c",
          content: "ff7185c4155fa032f25a",
          searchbox: "a53d5435910c93787e42"
        },
        L = e => {
          let {
            isActive: a
          } = e;
          return a ? y.activeLink : ""
        },
        _ = e => {
          let {
            locale: a,
            t,
            toggleNavOpen: i
          } = e;
          return (0, c.jsxs)("div", {
            className: y.links,
            onClick: () => i(!1),
            onKeyUp: () => i(!1),
            role: "button",
            tabIndex: 0,
            children: [(0, c.jsx)(n.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Newswire",
              to: "/newswire",
              className: L,
              children: t("Newswire")
            }), (0, c.jsx)(n.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Games",
              to: "/games",
              className: L,
              children: t("Games")
            }), (0, c.jsx)(n.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Videos",
              to: "/videos",
              className: L,
              children: t("Videos")
            }), (0, c.jsx)(n.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Downloads",
              to: "/downloads",
              className: L,
              children: t("Downloads")
            }), (0, c.jsx)(n.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Support",
              to: `https://support.rockstargames.com?redirect_lang=${a}`,
              target: "_blank",
              children: t("Support")
            }), (0, c.jsx)(n.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Socialclub",
              to: "https://socialclub.rockstargames.com/",
              target: "_blank",
              children: t("Social Club")
            }), (0, c.jsx)(n.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Launcher",
              to: "https://socialclub.rockstargames.com/rockstar-games-launcher",
              target: "_blank",
              children: t("Launcher")
            }), (0, c.jsx)(n.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Store",
              to: "https://store.rockstargames.com/",
              target: "_blank",
              children: t("Store")
            })]
          })
        },
        F = (0, u.withLocale)((0, u.withTranslations)((e => {
          let {
            locale: a,
            t
          } = e;
          const {
            state: s,
            toggleNavOpen: o
          } = (0, i.useRockstarLocalState)(), l = () => {
            o(!1)
          };
          return (0, k.useEffect)((() => {
            const e = e => {
              27 === e.keyCode && l()
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []), (0, k.useEffect)((() => (window.addEventListener("popstate", l), () => {
            window.removeEventListener("popstate", l)
          })), []), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("nav", {
              role: "navigation",
              title: "Site",
              className: [y.nav, s.navOpen ? y.navOpen : ""].join(" "),
              children: (0, c.jsxs)("div", {
                className: y.content,
                children: [(0, c.jsx)("div", {
                  className: y.searchbox,
                  children: (0, c.jsx)(n.SearchBox, {})
                }), (0, c.jsx)(_, {
                  locale: a,
                  t,
                  toggleNavOpen: o
                })]
              })
            }), (0, c.jsx)("div", {
              "aria-label": "Close nav",
              className: y.navBg,
              onClick: () => l(),
              onKeyUp: () => l(),
              role: "button",
              tabIndex: 0
            })]
          })
        }))),
        A = {
          header: "c88e3bf2c5a3eea47de1",
          headerHidden: "d47f3266f70158f40c19",
          standalone: "de5fe6dbf601131bf572",
          hidden: "e40a03373925b1f43678",
          logo: "ac8debfb2b628b833f4c",
          logoBlack: "f093360455b13454b6bb",
          logoNormal: "a3664df75f1e5452d7d8",
          active: "edee6ccaf0d7182160ee",
          signin: "eb89905202a9ce235483",
          bg: "b87c9cb79dc665de220b",
          loader: "bd84e6c23181dcddf241",
          loading: "bb09144de38feaa10e6d",
          left: "f03aa693d57989d2268d",
          menuOpener: "a69f93a42729f8a8c895",
          navOpen: "c9b3960def8d1c6e2ba0"
        },
        O = () => {
          const {
            state: {
              headerHidden: e,
              loading: a,
              navOpen: t,
              navHidden: s,
              normalLogo: l,
              standalone: r
            },
            setNavHidden: d,
            toggleNavOpen: m
          } = (0, i.useRockstarLocalState)(), {
            navOpen: g,
            setNavOpen: b
          } = (0, v.useRockstarUser)();
          let h = (0, c.jsx)(v.OldMenu, {});
          h = (0, c.jsx)(v.MenuButton, {});
          const {
            freezeUserShouldSeeMore: f,
            userShouldSeeMore: u
          } = (0, i.useScroll)();
          return (0, k.useEffect)((() => {
            f || g || t || d(u)
          }), [f, t, g, u]), (0, k.useEffect)((() => {
            !0 === g && !0 === t && m()
          }), [g]), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("header", {
              className: [A.header, e ? A.headerHidden : "", r ? A.standalone : "", t ? A.navOpen : "", a ? A.loading : "", s ? A.hidden : ""].join(" "),
              children: [(0, c.jsxs)("div", {
                className: A.left,
                children: [(0, c.jsx)("div", {
                  className: A.menuOpener,
                  children: (0, c.jsxs)(n.A, {
                    to: "#",
                    onClick: e => {
                      e.preventDefault(), m(), !0 === g && b(!1)
                    },
                    title: "Open Menu",
                    role: "button",
                    children: [(0, c.jsx)("span", {}), (0, c.jsx)("span", {}), (0, c.jsx)("span", {})]
                  })
                }), (0, c.jsx)(o, {})]
              }), (0, c.jsx)("div", {
                className: A.logo,
                children: (0, c.jsxs)(n.A, {
                  "data-gtm-category": "Mega Nav",
                  "data-gtm-action": "Main Nav",
                  "data-gtm-label": "Main Logo",
                  onClick: () => m(!1),
                  to: "/",
                  title: "Home",
                  role: "link",
                  children: [(0, c.jsx)("div", {
                    className: [A.logoNormal, l ? "" : A.active].join(" ")
                  }), (0, c.jsx)("div", {
                    className: [A.logoNormal, l ? A.active : ""].join(" ")
                  })]
                })
              }), (0, c.jsx)("div", {
                className: A.signin,
                children: h
              }), (0, c.jsx)("div", {
                className: A.bg
              }), (0, c.jsx)("div", {
                className: [A.loader, a ? A.loading : ""].join(" ")
              })]
            }), (0, c.jsx)(F, {})]
          })
        }
    },
    3872: e => {
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
              directives: [],
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
          end: 214
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
        body: "query CreditData($cache: Boolean = true, $title: String!) {\n    creditsForTitle(title: $title) {\n        business_title\n        division\n        preferred_name\n    }\n    creditsIfruit {\n        static_json\n    }\n}\n",
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