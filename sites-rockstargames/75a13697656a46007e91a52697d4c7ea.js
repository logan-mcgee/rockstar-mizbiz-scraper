(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [97], {
    2581: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => n
      });
      var s = t(8976),
        i = t(3657);
      const r = {
        breadcrumbs: "rockstargames-sites-rockstargamesc90ab7e2d9702e1e823580125ae83856",
        disabled: "rockstargames-sites-rockstargamesd0624dc88a8c5ca33e6b5fb04b6ea9f4",
        links: "rockstargames-sites-rockstargamesd76052c10bb8fdce136cc402afe3f750",
        filter: "rockstargames-sites-rockstargamesd039e1de72c486f4e273d5b796149dcf"
      };
      var c = t(3705);
      const n = () => {
        const {
          state: {
            breadcrumb: e,
            navHidden: a
          },
          toggleNavOpen: t
        } = (0, i.useRockstarLocalState)(), {
          filter: n = "",
          links: o = []
        } = e;
        return (0, c.jsxs)("div", {
          className: [r.breadcrumbs, a ? r.navHidden : "", o.length ? "" : r.disabled].join(" "),
          role: "navigation",
          title: "Breadcrumbs",
          children: [(0, c.jsx)("div", {
            className: r.links,
            children: o.map((e => (0, c.jsx)(s.A, {
              to: e.href,
              onClick: () => t(!1),
              children: e.title
            }, e.href)))
          }), n ? (0, c.jsx)("div", {
            className: r.filter,
            children: n
          }) : ""]
        })
      }
    },
    4172: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => m
      });
      var s = t(279),
        i = t(8976),
        r = t(6711),
        c = t(3657),
        n = t(2581),
        o = t(1957);
      const d = {
        header: "rockstargames-sites-rockstargamesd2dbf5efb1484f71a302d2b217900031",
        headerHidden: "rockstargames-sites-rockstargamesc32405cfc6e0c3c08c43ee85898a64ee",
        standalone: "rockstargames-sites-rockstargamese4752f6f345f04882afa2f7ba60d4b52",
        hidden: "rockstargames-sites-rockstargamesb2ab827765a02fdf1b867452f1f0839f",
        logo: "rockstargames-sites-rockstargamesaac66bb6b0e78833c471045bc3dc872d",
        logoBlack: "rockstargames-sites-rockstargamese1f18112d96aaeea32e02eb2f0c5d30a",
        logoNormal: "rockstargames-sites-rockstargamesf2fe38f8b4ae03c3bdd3a0081153e273",
        active: "rockstargames-sites-rockstargamesbbcd9809b7442e70d3e2c5b1c474a840",
        signin: "rockstargames-sites-rockstargamesa796b2b174f6bea965239bf931b69b19",
        bg: "rockstargames-sites-rockstargamesbe773665368f1c07f2edd5c2a13867e8",
        loader: "rockstargames-sites-rockstargamesd5b6519effe3a4ae1c092533107daec0",
        loading: "rockstargames-sites-rockstargamesadbffde25c632b8627ac75a410c4bb09",
        left: "rockstargames-sites-rockstargamesf48c98f58d842511fec736cf1da18543",
        menuOpener: "rockstargames-sites-rockstargamese39263331666b45e97de2069f1ea218e",
        navOpen: "rockstargames-sites-rockstargamesfb35bc6b1f4f342810aeaa65982fcf94"
      };
      var l = t(3705);
      const m = () => {
        const {
          state: {
            headerHidden: e,
            loading: a,
            navOpen: t,
            navHidden: m,
            normalLogo: g,
            standalone: k
          },
          setNavHidden: f,
          toggleNavOpen: b
        } = (0, c.useRockstarLocalState)(), {
          navOpen: u,
          setNavOpen: v
        } = (0, r.useRockstarUserState)(), {
          freezeUserShouldSeeMore: h,
          userShouldSeeMore: N
        } = (0, c.useScroll)();
        return (0, s.useEffect)((() => {
          h || u || t || f(N)
        }), [h, t, u, N]), (0, s.useEffect)((() => {
          !0 === u && !0 === t && b()
        }), [u]), (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsxs)("header", {
            className: [d.header, e ? d.headerHidden : "", k ? d.standalone : "", t ? d.navOpen : "", a ? d.loading : "", m ? d.hidden : ""].join(" "),
            "data-testid": "headerBar",
            children: [(0, l.jsxs)("div", {
              className: d.left,
              children: [(0, l.jsx)("div", {
                className: d.menuOpener,
                children: (0, l.jsxs)(i.A, {
                  to: "#",
                  onClick: e => {
                    e.preventDefault(), b(), !0 === u && v(!1)
                  },
                  title: "Open Menu",
                  role: "button",
                  "data-testid": "openNavButton",
                  children: [(0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {})]
                })
              }), (0, l.jsx)(n.Z, {})]
            }), (0, l.jsx)("div", {
              className: d.logo,
              children: (0, l.jsxs)(i.A, {
                "data-gtm-category": "Mega Nav",
                "data-gtm-action": "Main Nav",
                "data-gtm-label": "Main Logo",
                "data-testid": "homeButton",
                onClick: () => b(!1),
                to: "/",
                title: "Home",
                role: "link",
                children: [(0, l.jsx)("div", {
                  className: [d.logoNormal, g ? "" : d.active].join(" ")
                }), (0, l.jsx)("div", {
                  className: [d.logoNormal, g ? d.active : ""].join(" ")
                })]
              })
            }), (0, l.jsx)("div", {
              className: d.signin,
              children: (0, l.jsx)(r.MenuButton, {})
            }), (0, l.jsx)("div", {
              className: d.bg
            }), (0, l.jsx)("div", {
              className: [d.loader, a ? d.loading : ""].join(" ")
            })]
          }), (0, l.jsx)(o.Z, {})]
        })
      }
    },
    1957: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => m
      });
      var s = t(279),
        i = t(8976),
        r = t(9929),
        c = t(3657);
      const n = {
        navOpen: "rockstargames-sites-rockstargamesf4d030ad7c017d6c53519057c0689bc0",
        nav: "rockstargames-sites-rockstargamese164223fc0618098d0fa76f053b6b59b",
        navBg: "rockstargames-sites-rockstargamesa5ae6c39b7508cde9ec042684752db3f",
        links: "rockstargames-sites-rockstargamesfef6702786d66922413b85e4c7200f56",
        activeLink: "rockstargames-sites-rockstargamesf68a3dccd3ec8f47385c88b9a7e25f84",
        content: "rockstargames-sites-rockstargameseac080290fd8ab9ffccc83da9aecd201",
        searchbox: "rockstargames-sites-rockstargamesa57c9419cdcf587ec0f298b73c1da8d9"
      };
      var o = t(3705);
      const d = e => {
          let {
            isActive: a
          } = e;
          return a ? n.activeLink : ""
        },
        l = e => {
          let {
            locale: a,
            t,
            toggleNavOpen: s
          } = e;
          return (0, o.jsxs)("div", {
            className: n.links,
            onClick: () => s(!1),
            onKeyUp: () => s(!1),
            role: "button",
            tabIndex: 0,
            children: [(0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Newswire",
              "data-testid": "newswireButton",
              to: "/newswire",
              className: d,
              children: t("Newswire")
            }), (0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Games",
              "data-testid": "gamesButton",
              to: "/games",
              className: d,
              children: t("Games")
            }), (0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Videos",
              "data-testid": "videosButton",
              to: "/videos",
              className: d,
              children: t("Videos")
            }), (0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Downloads",
              "data-testid": "downloadsButton",
              to: "/downloads",
              className: d,
              children: t("Downloads")
            }), (0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Support",
              "data-testid": "supportLink",
              to: `https://support.rockstargames.com?redirect_lang=${a}`,
              target: "_blank",
              children: t("Support")
            }), (0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Socialclub",
              "data-testid": "socialclubLink",
              to: "https://socialclub.rockstargames.com/",
              target: "_blank",
              children: t("Social Club")
            }), (0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Launcher",
              "data-testid": "launcherLink",
              to: "https://socialclub.rockstargames.com/rockstar-games-launcher",
              target: "_blank",
              children: t("Launcher")
            }), (0, o.jsx)(i.A, {
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
        m = (0, r.withLocale)((0, r.withTranslations)((e => {
          let {
            locale: a,
            t
          } = e;
          const {
            state: r,
            toggleNavOpen: d
          } = (0, c.useRockstarLocalState)(), m = () => {
            d(!1)
          };
          return (0, s.useEffect)((() => {
            const e = e => {
              27 === e.keyCode && m()
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []), (0, s.useEffect)((() => (window.addEventListener("popstate", m), () => {
            window.removeEventListener("popstate", m)
          })), []), (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("nav", {
              role: "navigation",
              title: "Site",
              "data-testid": "navSidebar",
              className: [n.nav, r.navOpen ? n.navOpen : ""].join(" "),
              children: (0, o.jsxs)("div", {
                className: n.content,
                children: [(0, o.jsx)("div", {
                  className: n.searchbox,
                  children: (0, o.jsx)(i.SearchBox, {})
                }), (0, o.jsx)(l, {
                  locale: a,
                  t,
                  toggleNavOpen: d
                })]
              })
            }), (0, o.jsx)("div", {
              "aria-label": "Close nav",
              className: n.navBg,
              "data-testid": "closeNavButton",
              onClick: () => m(),
              onKeyUp: () => m(),
              role: "button",
              tabIndex: 0
            })]
          })
        })))
    },
    9097: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        AccessibilityButton: () => i,
        Breadcrumbs: () => r.Z,
        Credits: () => f,
        FooterNav: () => p,
        FooterStuck: () => x,
        Header: () => C.Z,
        Nav: () => S.Z
      });
      var s = t(3705);
      const i = () => (0, s.jsx)("a", {
        className: "rockstargames-sites-rockstargamescf7ea2d9c4f82e278e44b867b529e56e",
        href: window.location.pathname.startsWith("gta-online") ? "#main" : "#content",
        children: "Skip to main content"
      });
      var r = t(2581),
        c = t(4859),
        n = t(9929),
        o = t(8139);
      const d = {
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
        l = e => {
          let {
            t: a,
            title: t
          } = e;
          return (0, s.jsx)("div", {
            className: [d.hero, d.heroRdr2].join(" "),
            "data-game": t,
            children: (0, s.jsxs)("div", {
              className: d.heroContent,
              children: [(0, s.jsxs)("div", {
                className: d.logos,
                "data-title": t,
                children: [(0, s.jsx)("div", {
                  className: d.logoLeft
                }), (0, s.jsx)("div", {
                  className: d.logoRight
                })]
              }), (0, s.jsx)("p", {
                className: d.description,
                dangerouslySetInnerHTML: {
                  __html: a(`credits.${t}.desc`)
                },
                "data-title": t
              })]
            })
          })
        },
        m = e => {
          let {
            children: a
          } = e;
          return (0, s.jsx)("div", {
            className: d.header,
            children: a
          })
        },
        g = e => {
          let {
            data: a
          } = e;
          return a ? (0, s.jsxs)("div", {
            className: d.creditContent,
            children: [(0, s.jsx)(m, {
              children: (0, s.jsx)("h1", {
                children: "Credits"
              })
            }), (0, s.jsx)("ul", {
              children: a?.map((e => (0, s.jsxs)("li", {
                children: [(0, s.jsx)("span", {
                  className: d.name,
                  children: e.preferred_name
                }), (0, s.jsx)("span", {
                  className: d.position,
                  children: `${e?.business_title?.replace('"',"").trim()}, ${e.division}`
                })]
              }, JSON.stringify(e))))
            })]
          }) : null
        },
        k = e => {
          let {
            data: a
          } = e;
          if (!a) return null;
          const t = a[0]?.static_json;
          return (0, s.jsxs)("div", {
            className: d.originalPeople,
            children: [(0, s.jsx)(m, {
              children: (0, s.jsx)("h2", {
                children: "Original Game Credits"
              })
            }), Object.keys(t.pageContent).map((e => {
              const {
                sections: a
              } = t.pageContent[e];
              return (0, s.jsxs)("div", {
                className: d.creditSection,
                children: [(0, s.jsx)("h3", {
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
                  return (0, s.jsxs)("div", {
                    className: d.creditSectionInner,
                    children: [(0, s.jsx)("h4", {
                      dangerouslySetInnerHTML: {
                        __html: t
                      }
                    }), (0, s.jsx)("ul", {
                      className: d.creditContentOld,
                      children: a.map((e => (0, s.jsx)("li", {
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
        f = (0, n.withTranslations)((e => {
          let {
            t: a,
            title: t
          } = e;
          const i = "v" === t,
            {
              data: r
            } = (0, c.useQuery)(o.CreditData, {
              variables: {
                needsIfruit: i,
                title: t
              }
            });
          if (!r) return null;
          const {
            creditsForTitle: n,
            creditsIfruit: m
          } = r;
          return (0, s.jsxs)("div", {
            className: d.allCredits,
            "data-title": t,
            children: [(0, s.jsx)(l, {
              title: t,
              t: a
            }), (0, s.jsx)(g, {
              data: n
            }), "v" === t ? (0, s.jsx)(k, {
              data: m
            }) : ""]
          })
        }));
      var b = t(8976),
        u = t(3111),
        v = t(6711),
        h = t(3657);
      const N = {
          siteFooter: "rockstargames-sites-rockstargamesb09dd7fc17f8fe2828d82a908d4c76a9",
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
        p = (0, n.withTranslations)((e => {
          let {
            t: a
          } = e;
          const t = (0, c.useBase)(),
            {
              host: i
            } = (0, v.useScConfig)(),
            {
              track: r
            } = (0, v.useGtmTrack)(),
            {
              state: n,
              toggleNavOpen: o
            } = (0, h.useRockstarLocalState)(),
            d = () => {
              o(!1)
            };
          return (0, s.jsxs)("footer", {
            role: "navigation",
            title: "Footer",
            className: [N.siteFooter, n.loading ? N.loading : ""].join(" "),
            "data-testid": "footerNav",
            children: [(0, s.jsx)("div", {
              className: N.languageSelector,
              children: (0, s.jsx)(b.LanguageSelector, {
                defaultMessage: u.components.language_selector_default
              })
            }), (0, s.jsxs)("div", {
              className: N.links,
              children: [(0, s.jsx)(b.A, {
                to: "/contact",
                onClick: d,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Contact",
                "data-testid": "contactButton",
                children: a("Contact")
              }), (0, s.jsx)(b.A, {
                to: `${document.location.origin}${t}careers`,
                onClick: d,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Careers",
                "data-testid": "careersLink",
                children: a("Careers")
              }), (0, s.jsx)(b.A, {
                to: `https://${i}.rockstargames.com/settings/email`,
                onClick: () => {
                  d(), r({
                    event: "cta_subscribe_news",
                    event_category: "cta",
                    event_action: "subscribe_news",
                    event_label: "site footer",
                    text: a("Subscribe").toLowerCase(),
                    link_url: `https://${i}.rockstargames.com/settings/email`
                  })
                },
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Club",
                "data-gtm-label": "Manage Subscription Account",
                "data-testid": "subscribeLink",
                children: a("Subscribe")
              })]
            }), (0, s.jsxs)("div", {
              className: N.companyInfoLinks,
              children: [(0, s.jsx)(b.A, {
                to: "/corpinfo",
                onClick: d,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Corporate Info",
                "data-testid": "coporateButton",
                children: a("Corporate")
              }), (0, s.jsx)(b.A, {
                to: "/privacy",
                onClick: d,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Privacy",
                "data-testid": "privacyButton",
                children: a("Privacy")
              }), (0, s.jsx)(b.A, {
                onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Cookie settings",
                "data-testid": "cookieSettingsButton",
                children: a("Cookie Settings")
              }), (0, s.jsx)(b.A, {
                to: "/cookies",
                onClick: d,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Cookie policy",
                "data-testid": "cookiePolicyButton",
                children: a("Cookie Policy")
              }), (0, s.jsx)(b.A, {
                to: "/legal",
                onClick: d,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Link Click",
                "data-gtm-label": "Legal",
                "data-testid": "legalButton",
                children: a("Legal")
              }), (0, s.jsx)(b.A, {
                to: "/ccpa",
                onClick: d,
                "data-gtm-category": "Footer",
                "data-gtm-action": "CCPA Link",
                "data-gtm-label": "View CCPA Info",
                "data-testid": "ccpaButton",
                children: a("Do Not Sell My Info")
              })]
            }), (0, s.jsxs)("div", {
              className: N.social,
              children: [(0, s.jsx)(b.A, {
                to: "https://twitch.tv/rockstargames",
                onClick: d,
                target: "_blank",
                className: N.twitch,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitch",
                title: "Twitch",
                "data-testid": "twitchLink"
              }), (0, s.jsx)(b.A, {
                to: "https://instagram.com/rockstargames",
                onClick: d,
                target: "_blank",
                className: N.instagram,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Instagram",
                title: "Instagram",
                "data-testid": "instagramLink"
              }), (0, s.jsx)(b.A, {
                to: "https://twitter.com/rockstargames",
                onClick: d,
                target: "_blank",
                className: N.twitter,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitter",
                title: "Twitter",
                "data-testid": "twitterLink"
              }), (0, s.jsx)(b.A, {
                to: "https://www.youtube.com/rockstargames",
                onClick: d,
                target: "_blank",
                className: N.youtube,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "YouTube",
                title: "YouTube",
                "data-testid": "youtubeLink"
              }), (0, s.jsx)(b.A, {
                to: "https://www.facebook.com/rockstargames",
                onClick: d,
                target: "_blank",
                className: N.facebook,
                "data-gtm-category": "Footer",
                "data-gtm-action": " Social Click",
                "data-gtm-label": "Facebook",
                title: "Facebook",
                "data-testid": "facebookLink"
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
          } = (0, h.useRockstarLocalState)();
          return (0, s.jsxs)("footer", {
            className: [j.showsOver, e && j.standalone].join(" "),
            children: [(0, s.jsx)("div", {
              className: j.whatTeamWildcats,
              children: "Rockstar Games"
            }), (0, s.jsxs)("div", {
              className: j.places,
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
              className: j.sophomore,
              children: "MCMXCVIII"
            })]
          })
        };
      var C = t(4172),
        S = t(1957)
    },
    8139: e => {
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
        var r = s[a] || new Set,
          c = new Set,
          n = new Set;
        for (r.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var o = n;
          n = new Set, o.forEach((function(e) {
            c.has(e) || (c.add(e), (s[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "CreditData")
    }
  }
]);