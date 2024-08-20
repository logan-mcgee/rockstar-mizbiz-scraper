! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b4d1d198-1e39-4bc8-9007-292162b00255", e._sentryDebugIdIdentifier = "sentry-dbid-b4d1d198-1e39-4bc8-9007-292162b00255")
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
  [8712], {
    42341: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => m
      });
      var i = s(96717),
        t = s(71403),
        n = s(40207),
        o = s(13963),
        c = s(20066);
      const r = (0, i.defineMessages)({
        language_selector_default: {
          id: "language_selector_default",
          defaultMessage: "Select a Language"
        }
      });
      var l = s(60285);
      const _ = {
        pillBtn: "rockstargames-sites-rockstargamescb792ef8796eaa09f8b5c1ee0230fcd7",
        selected: "rockstargames-sites-rockstargamesc951b9f5173e8a37be389854c40995ee",
        scMenuStyles: "rockstargames-sites-rockstargamesfa91a55e22ad688cba0bc1210eaf4726",
        languageSelector: "rockstargames-sites-rockstargamesb631f2ce92e4a89f8eddebd32e8ed30a",
        open: "rockstargames-sites-rockstargamesedc598921a872174190475d0ad016d15",
        linkWrapper: "rockstargames-sites-rockstargamesc4b7087d1fcbaad6967e61b84160ff79",
        links: "rockstargames-sites-rockstargamesc7d345d5c7e567e0ee75b792d5bdfb88",
        selectBoxWrapper: "rockstargames-sites-rockstargamese3e55a10507405de05ae92006ec0d02b",
        selectBox: "rockstargames-sites-rockstargamesc646a2bff16ec3003b027857488cd612",
        selectBoxOption: "rockstargames-sites-rockstargamesbcccd1077d13d7fe1585655e5c5f8363"
      };
      var d = s(46632);
      const m = (0, i.withIntl)((e => {
        let {
          theme: a,
          languageSelectorOpened: s,
          setLanguageSelectorOpened: c,
          location: m,
          parent: k = "footer"
        } = e;
        const {
          track: g
        } = (0, n.useGtmTrack)(), f = (0, i.useIntl)(), [u, p] = (0, i.getLocale)(), [b, h] = (0, t.useState)(!1), v = (0, t.useMemo)((() => (0, o.A)()), []), w = (0, t.useCallback)((e => {
          let a = m.pathname;
          const s = a.split("/");
          return i.locales.map((e => e.subdomaincom)).includes(s[0]) && (a = s.slice(1).join("/")), v.currentSite?.site === o.C.www ? "en" === e ? `${window.location.origin}${a}${m.search}` : `${window.location.origin}/${e}${a}${m.search}` : `${window.location.origin}${a}${m.search}`
        }), [m]), y = (0, t.useRef)(null), [j, N] = (0, t.useState)(0), x = matchMedia("(hover: none) and (pointer: coarse)").matches, C = e => {
          if (c && c(!1), u.subdomaincom === e || "none" === e) return void(c && c(!1));
          const a = i.locales.find((a => a.subdomaincom === e));
          if (a) {
            const s = w(e);
            g({
              event: "cta_other",
              link_url: s,
              text: e,
              element_placement: k
            }), p(a.iso), window.location.href = s
          }
        };
        return (0, t.useEffect)((() => {
          void 0 !== s && !1 === s && !0 === b && h(!1)
        }), [s]), (0, t.useEffect)((() => {
          y.current && N(y.current.scrollHeight)
        }), [y]), (0, d.jsxs)("div", {
          className: [_.languageSelector, b ? _.open : ""].join(" "),
          "data-theme": a,
          children: [x && "sc-menu" === a && (0, d.jsx)("div", {
            className: _.selectBoxWrapper,
            children: (0, d.jsxs)("select", {
              className: _.selectBox,
              onClick: e => e.stopPropagation(),
              onChange: e => {
                const a = e.currentTarget.value;
                C(a)
              },
              "aria-label": f.formatMessage(r.language_selector_default),
              children: [(0, d.jsx)("option", {
                className: _.selectBoxOption,
                value: "none",
                children: (0, d.jsx)(i.FormattedMessage, {
                  ...r.language_selector_default
                })
              }), i.locales.map((e => {
                let {
                  label: a,
                  subdomaincom: s
                } = e;
                return (0, d.jsx)("option", {
                  className: _.selectBoxOption,
                  value: s,
                  children: a
                }, `mobile-${s}`)
              }))]
            })
          }), (!x || "sc-menu" !== a) && (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("button", {
              onClick: e => {
                e.stopPropagation(), c && c(!b), h(!b)
              },
              type: "button",
              "aria-label": f.formatMessage(r.language_selector_default),
              children: [(0, d.jsx)("i", {}), (0, d.jsx)("span", {
                children: (0, d.jsx)(i.FormattedMessage, {
                  ...r.language_selector_default
                })
              })]
            }), (0, d.jsx)("div", {
              className: _.linkWrapper,
              ref: y,
              style: {
                "--ls-linkWrapper-opened-height": `${j}px`
              },
              children: (0, d.jsx)("div", {
                className: _.links,
                children: i.locales.map((e => {
                  let {
                    subdomaincom: a,
                    label: s
                  } = e;
                  return (0, d.jsx)(l.A, {
                    to: w(a),
                    onClick: (i = a, () => {
                      C(i)
                    }),
                    tabIndex: b ? 0 : -1,
                    children: s
                  }, `desktop-${a}`);
                  var i
                }))
              })
            })]
          })]
        })
      }), c)
    },
    37017: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => r
      });
      var i = s(71403),
        t = s(89779),
        n = s(58407),
        o = s(42756);
      var c = s(46632);
      const r = (0, o.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [s] = (0, i.useState)(""), o = (0, t.useNavigate)(), r = (0, n.useMutateState)();
        return (0, c.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-rockstargamesb82052ce07e004075e77261c373bfc50",
          onSubmit: e => {
            e.preventDefault(), r({
              navOpen: !1
            }), document.activeElement?.blur(), o(`/search?q=${e.target.q.value}`)
          },
          role: "search",
          children: [(0, c.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, c.jsx)("input", {
            autoComplete: "off",
            defaultValue: s,
            enterKeyHint: "search",
            name: "q",
            placeholder: a("Search Rockstar Games")
          })]
        })
      }))
    },
    26039: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => t
      });
      var i = s(46632);
      const t = e => {
        let {
          children: a,
          ...s
        } = e;
        return (0, i.jsx)("span", {
          ...s,
          className: "rockstargames-sites-rockstargamesf7f61ab4bc6dd2a49f80662ead7d8a51",
          children: a
        })
      }
    },
    60285: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => _
      });
      var i = s(71403),
        t = s(96717),
        n = s(20066);
      const o = (0, t.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var c = s(89779);
      const r = "rockstargames-sites-rockstargamesff481c537a56a6fcdb1be85dfbc8944e";
      var l = s(46632);
      const _ = (0, t.withIntl)((e => {
        let {
          children: a,
          to: s = "#",
          alt: n = "",
          autoBlank: _ = !1,
          onClick: d = (() => {}),
          focused: m = !1,
          ...k
        } = e;
        const g = (0, i.useRef)(null),
          f = (0, t.useIntl)(),
          u = !/^(https?|mailto):/i.test(s),
          p = /^#/.test(s),
          b = k?.target ?? (_ ? "_blank" : "_self");
        let {
          ...h
        } = k, v = "";
        if ("aria-label" in h && h["aria-label"] && (v = "_blank" === b ? `${h["aria-label"]} ${f.formatMessage(o.aria_label_open_new_window)}` : h["aria-label"]), (0, i.useEffect)((() => {
            m && g?.current && g.current.focus()
          }), [g?.current, m]), p) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${s.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), d && d(e)
          };
          return (0, l.jsxs)("a", {
            title: n,
            href: s,
            onClick: e,
            ...h,
            "aria-label": v,
            ref: g,
            children: [a, "_blank" === b && !v && (0, l.jsx)("span", {
              className: r,
              children: f.formatMessage(o.aria_label_open_new_window)
            })]
          })
        }
        if (u) return (0, l.jsxs)(c.NavLink, {
          title: n,
          to: s,
          onClick: d,
          ...h,
          "aria-label": v,
          ref: g,
          children: [a, "_blank" === b && !v && (0, l.jsx)("span", {
            className: r,
            children: f.formatMessage(o.aria_label_open_new_window)
          })]
        });
        const w = Object.keys(h).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
          ...e,
          [a]: k[a]
        })), {});
        return "function" == typeof w?.className && delete w.className, (0, l.jsxs)("a", {
          href: s,
          title: n,
          onClick: d,
          target: b,
          ...w,
          "aria-label": v,
          ref: g,
          children: [a, "_blank" === b && !v && (0, l.jsx)("span", {
            className: r,
            children: f.formatMessage(o.aria_label_open_new_window)
          })]
        })
      }), n)
    },
    13963: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => n,
        C: () => i
      });
      const i = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        t = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        n = () => {
          let e;
          const {
            location: a
          } = window, s = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), i = t.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [i, t] = a;
            return t === s && (e = {
              site: i,
              subDomain: t
            }, !0)
          })) >= 0)), n = t[i >= 0 ? i : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    },
    18712: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        Breadcrumbs: () => c,
        Credits: () => u,
        FooterNav: () => N,
        FooterStuck: () => C,
        Nav: () => L
      });
      var i = s(60285),
        t = s(70396);
      const n = {
        breadcrumbs: "rockstargames-sites-rockstargamesc90ab7e2d9702e1e823580125ae83856",
        disabled: "rockstargames-sites-rockstargamesd0624dc88a8c5ca33e6b5fb04b6ea9f4",
        links: "rockstargames-sites-rockstargamesd76052c10bb8fdce136cc402afe3f750",
        filter: "rockstargames-sites-rockstargamesd039e1de72c486f4e273d5b796149dcf"
      };
      var o = s(46632);
      const c = () => {
        const {
          state: {
            breadcrumb: e,
            navHidden: a
          },
          toggleNavOpen: s
        } = (0, t.useRockstarLocalState)(), {
          filter: c = "",
          links: r = []
        } = e;
        return (0, o.jsxs)("div", {
          className: [n.breadcrumbs, a ? n.navHidden : "", r.length ? "" : n.disabled].join(" "),
          role: "navigation",
          title: "Breadcrumbs",
          children: [(0, o.jsx)("div", {
            className: n.links,
            children: r.map((e => (0, o.jsx)(i.A, {
              to: e.href,
              onClick: () => s(!1),
              children: e.title
            }, e.href)))
          }), c ? (0, o.jsx)("div", {
            className: n.filter,
            children: c
          }) : ""]
        })
      };
      var r = s(58407),
        l = s(42756),
        _ = s(69175);
      const d = {
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
        m = e => {
          let {
            t: a,
            title: s
          } = e;
          return (0, o.jsx)("div", {
            className: [d.hero, d.heroRdr2].join(" "),
            "data-game": s,
            children: (0, o.jsxs)("div", {
              className: d.heroContent,
              children: [(0, o.jsxs)("div", {
                className: d.logos,
                "data-title": s,
                children: [(0, o.jsx)("div", {
                  className: d.logoLeft
                }), (0, o.jsx)("div", {
                  className: d.logoRight
                })]
              }), (0, o.jsx)("p", {
                className: d.description,
                dangerouslySetInnerHTML: {
                  __html: a(`credits.${s}.desc`)
                },
                "data-title": s
              })]
            })
          })
        },
        k = e => {
          let {
            children: a
          } = e;
          return (0, o.jsx)("div", {
            className: d.header,
            children: a
          })
        },
        g = e => {
          let {
            data: a
          } = e;
          return a ? (0, o.jsxs)("div", {
            className: d.creditContent,
            children: [(0, o.jsx)(k, {
              children: (0, o.jsx)("h1", {
                children: "Credits"
              })
            }), (0, o.jsx)("ul", {
              children: a?.map((e => (0, o.jsxs)("li", {
                children: [(0, o.jsx)("span", {
                  className: d.name,
                  children: e.preferred_name
                }), (0, o.jsx)("span", {
                  className: d.position,
                  children: `${e?.business_title?.replace('"',"").trim()}, ${e.division}`
                })]
              }, JSON.stringify(e))))
            })]
          }) : null
        },
        f = e => {
          let {
            data: a
          } = e;
          if (!a) return null;
          const s = a[0]?.static_json;
          return (0, o.jsxs)("div", {
            className: d.originalPeople,
            children: [(0, o.jsx)(k, {
              children: (0, o.jsx)("h2", {
                children: "Original Game Credits"
              })
            }), Object.keys(s.pageContent).map((e => {
              const {
                sections: a
              } = s.pageContent[e];
              return (0, o.jsxs)("div", {
                className: d.creditSection,
                children: [(0, o.jsx)("h3", {
                  children: (i = e, s.scrollerData.find((e => {
                    let {
                      eventName: a
                    } = e;
                    return a === i
                  }))?.title ?? "")
                }), a.map((e => {
                  let {
                    content: a,
                    title: s
                  } = e;
                  return (0, o.jsxs)("div", {
                    className: d.creditSectionInner,
                    children: [(0, o.jsx)("h4", {
                      dangerouslySetInnerHTML: {
                        __html: s
                      }
                    }), (0, o.jsx)("ul", {
                      className: d.creditContentOld,
                      children: a.map((e => (0, o.jsx)("li", {
                        dangerouslySetInnerHTML: {
                          __html: e
                        }
                      }, e)))
                    })]
                  }, s)
                }))]
              }, e);
              var i
            }))]
          })
        },
        u = (0, l.withTranslations)((e => {
          let {
            t: a,
            title: s
          } = e;
          const i = "v" === s,
            {
              data: t
            } = (0, r.useQuery)(_.CreditData, {
              variables: {
                needsIfruit: i,
                title: s
              }
            });
          if (!t) return null;
          const {
            creditsForTitle: n,
            creditsIfruit: c
          } = t;
          return (0, o.jsxs)("div", {
            className: d.allCredits,
            "data-title": s,
            children: [(0, o.jsx)(m, {
              title: s,
              t: a
            }), (0, o.jsx)(g, {
              data: n
            }), "v" === s ? (0, o.jsx)(f, {
              data: c
            }) : ""]
          })
        }));
      var p = s(25076),
        b = s(42341),
        h = s(40207),
        v = s(26039),
        w = s(96717);
      const y = (0, w.defineMessages)({
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
        j = {
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
        N = (0, l.withTranslations)((e => {
          let {
            t: a
          } = e;
          const s = (0, w.useIntl)(),
            n = (0, p.useLocation)(),
            {
              host: c
            } = (0, h.useScConfig)(),
            {
              track: r
            } = (0, h.useGtmTrack)(),
            {
              state: l,
              toggleNavOpen: _
            } = (0, t.useRockstarLocalState)(),
            d = (e, a, s, i) => () => {
              _(!1), r({
                event: e,
                link_url: a,
                text: s,
                element_placement: i
              })
            };
          return (0, o.jsxs)("footer", {
            className: [j.siteFooter, l.loading ? j.loading : ""].join(" "),
            "data-testid": "footerNav",
            role: "navigation",
            title: "Footer",
            children: [(0, o.jsx)("div", {
              className: j.languageSelector,
              children: (0, o.jsx)(b.A, {
                location: n
              })
            }), (0, o.jsxs)("div", {
              className: j.links,
              children: [(0, o.jsx)(i.A, {
                "data-testid": "contactButton",
                onClick: d("cta_other", "/contact", "contact", "footer"),
                to: "/contact",
                children: a("Contact")
              }), (0, o.jsx)(i.A, {
                "data-testid": "careersLink",
                onClick: d("cta_other", "/careers", "careers", "footer"),
                to: "/careers",
                children: a("Careers")
              }), (0, o.jsx)(i.A, {
                "data-testid": "communityGuidelinesLink",
                onClick: d("cta_other", "/community-guidelines", "community guidelines", "footer"),
                to: "/community-guidelines",
                children: a("Community Guidelines")
              }), (0, o.jsx)(i.A, {
                "data-testid": "subscribeLink",
                className: j.subscribe,
                onClick: d("cta_subscribe_news", `https://${c}.rockstargames.com/settings/email`, "subscribe", "footer"),
                to: `https://${c}.rockstargames.com/settings/email`,
                target: "_blank",
                children: a("Subscribe")
              })]
            }), (0, o.jsxs)("div", {
              className: j.companyInfoLinks,
              children: [(0, o.jsx)(i.A, {
                "data-testid": "corporateButton",
                onClick: d("cta_other", "/corpinfo", "corporate", "footer"),
                to: "/corpinfo",
                children: a("Corporate")
              }), (0, o.jsx)(i.A, {
                "data-testid": "privacyButton",
                onClick: d("cta_other", "/privacy", "privacy", "footer"),
                to: "/privacy",
                children: a("Privacy")
              }), (0, o.jsx)("button", {
                "data-testid": "cookieSettingsButton",
                onClick: ("cta_other", "", "cookie settings", "footer", () => {
                  r({
                    event: "cta_other",
                    link_url: "",
                    text: "cookie settings",
                    element_placement: "footer"
                  }), window.OneTrust?.ToggleInfoDisplay()
                }),
                children: a("Cookie Settings")
              }), (0, o.jsx)(i.A, {
                "data-testid": "cookiePolicyButton",
                onClick: d("cta_other", "/cookies", "cookie policy", "footer"),
                to: "/cookies",
                children: a("Cookie Policy")
              }), (0, o.jsx)(i.A, {
                "data-testid": "legalButton",
                onClick: d("cta_other", "/legal", "legal", "footer"),
                to: "/legal",
                children: a("Legal")
              }), (0, o.jsx)(i.A, {
                "data-testid": "ccpaButton",
                onClick: d("cta_other", "/ccpa", "do not sell my info", "footer"),
                to: "/ccpa",
                children: a("Do Not Sell My Info")
              })]
            }), (0, o.jsxs)("div", {
              className: j.social,
              children: [(0, o.jsx)(i.A, {
                "aria-label": "Rockstar Games X",
                className: j.twitter,
                "data-testid": "twitterLink",
                onClick: d("cta_other", "https://x.com/rockstargames", "twitter", "footer"),
                target: "_blank",
                title: "X",
                to: "https://x.com/rockstargames"
              }), (0, o.jsx)(i.A, {
                "aria-label": "Rockstar Games Instagram",
                className: j.instagram,
                "data-testid": "instagramLink",
                onClick: d("cta_other", 'https://instagram.com/rockstargames"', "instagram", "footer"),
                target: "_blank",
                title: "Instagram",
                to: "https://instagram.com/rockstargames"
              }), (0, o.jsx)(i.A, {
                "aria-label": "Rockstar Games YouTube",
                className: j.youtube,
                "data-testid": "youtubeLink",
                onClick: d("cta_other", "https://www.youtube.com/rockstargames", "youtube", "footer"),
                target: "_blank",
                title: "YouTube",
                to: "https://www.youtube.com/rockstargames"
              }), (0, o.jsx)(i.A, {
                "aria-label": "Rockstar Games Facebook",
                className: j.facebook,
                "data-testid": "facebookLink",
                onClick: d("cta_other", "https://www.facebook.com/rockstargames", "facebook", "footer"),
                target: "_blank",
                title: "Facebook",
                to: "https://www.facebook.com/rockstargames"
              }), (0, o.jsx)(i.A, {
                "aria-label": "Rockstar Games Twitch",
                className: j.twitch,
                "data-testid": "twitchLink",
                onClick: d("cta_other", "https://twitch.tv/rockstargames", "twitch", "footer"),
                target: "_blank",
                title: "Twitch",
                to: "https://twitch.tv/rockstargames"
              })]
            }), (0, o.jsxs)("section", {
              className: j.showsOver,
              children: [(0, o.jsx)("div", {
                className: j.whatTeamWildcats,
                children: s.formatMessage(y.footer_rockstar_games)
              }), (0, o.jsxs)("div", {
                className: j.places,
                children: [(0, o.jsx)("span", {
                  children: s.formatMessage(y.footer_locations_new_york)
                }), (0, o.jsx)("span", {
                  children: s.formatMessage(y.footer_locations_london)
                }), (0, o.jsx)("span", {
                  children: s.formatMessage(y.footer_locations_paris)
                }), (0, o.jsx)("span", {
                  children: s.formatMessage(y.footer_locations_bogota)
                })]
              }), (0, o.jsxs)("div", {
                className: j.sophomore,
                children: [(0, o.jsx)("span", {
                  "aria-hidden": !0,
                  children: s.formatMessage(y.footer_established_date_roman)
                }), (0, o.jsx)(v.A, {
                  children: s.formatMessage(y.footer_established_date_numerical)
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
        C = () => {
          const {
            state: {
              standalone: e
            }
          } = (0, t.useRockstarLocalState)();
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
      var S = s(71403),
        A = s(37017);
      const M = {
          navOpen: "rockstargames-sites-rockstargamesf4d030ad7c017d6c53519057c0689bc0",
          nav: "rockstargames-sites-rockstargamese164223fc0618098d0fa76f053b6b59b",
          navBg: "rockstargames-sites-rockstargamesa5ae6c39b7508cde9ec042684752db3f",
          links: "rockstargames-sites-rockstargamesfef6702786d66922413b85e4c7200f56",
          activeLink: "rockstargames-sites-rockstargamesf68a3dccd3ec8f47385c88b9a7e25f84",
          content: "rockstargames-sites-rockstargameseac080290fd8ab9ffccc83da9aecd201",
          searchbox: "rockstargames-sites-rockstargamesa57c9419cdcf587ec0f298b73c1da8d9"
        },
        P = e => {
          let {
            isActive: a
          } = e;
          return a ? M.activeLink : ""
        },
        I = e => {
          let {
            locale: a,
            t: s,
            toggleNavOpen: t
          } = e;
          return (0, o.jsxs)("div", {
            className: M.links,
            onClick: () => t(!1),
            onKeyUp: () => t(!1),
            role: "button",
            tabIndex: 0,
            children: [(0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Newswire",
              "data-testid": "newswireButton",
              to: "/newswire",
              className: P,
              children: s("Newswire")
            }), (0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Games",
              "data-testid": "gamesButton",
              to: "/games",
              className: P,
              children: s("Games")
            }), (0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Videos",
              "data-testid": "videosButton",
              to: "/videos",
              className: P,
              children: s("Videos")
            }), (0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Downloads",
              "data-testid": "downloadsButton",
              to: "/downloads",
              className: P,
              children: s("Downloads")
            }), (0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Support",
              "data-testid": "supportLink",
              to: `https://support.rockstargames.com?redirect_lang=${a}`,
              target: "_blank",
              children: s("Support")
            }), (0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Socialclub",
              "data-testid": "socialclubLink",
              to: "https://socialclub.rockstargames.com/",
              target: "_blank",
              children: s("Social Club")
            }), (0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Launcher",
              "data-testid": "launcherLink",
              to: "https://socialclub.rockstargames.com/rockstar-games-launcher",
              target: "_blank",
              children: s("Launcher")
            }), (0, o.jsx)(i.A, {
              "data-gtm-category": "Site Nav",
              "data-gtm-action": "Main Nav Click",
              "data-gtm-label": "Store",
              "data-testid": "storeLink",
              to: "https://store.rockstargames.com/",
              target: "_blank",
              children: s("Store")
            })]
          })
        },
        L = (0, l.withLocale)((0, l.withTranslations)((e => {
          let {
            locale: a,
            t: s
          } = e;
          const {
            state: i,
            toggleNavOpen: n
          } = (0, t.useRockstarLocalState)(), c = () => {
            n(!1)
          };
          return (0, S.useEffect)((() => {
            const e = e => {
              27 === e.keyCode && c()
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []), (0, S.useEffect)((() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          })), []), (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("nav", {
              role: "navigation",
              title: "Site",
              "data-testid": "navSidebar",
              className: [M.nav, i.navOpen ? M.navOpen : ""].join(" "),
              children: (0, o.jsxs)("div", {
                className: M.content,
                children: [(0, o.jsx)("div", {
                  className: M.searchbox,
                  children: (0, o.jsx)(A.A, {})
                }), (0, o.jsx)(I, {
                  locale: a,
                  t: s,
                  toggleNavOpen: n
                })]
              })
            }), (0, o.jsx)("div", {
              "aria-label": "Close nav",
              className: M.navBg,
              "data-testid": "closeNavButton",
              onClick: () => c(),
              onKeyUp: () => c(),
              role: "button",
              tabIndex: 0
            })]
          })
        })))
    },
    69175: e => {
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
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
      var i = {};

      function t(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var i = e.definitions[s];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.CreditData = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var n = i[a] || new Set,
          o = new Set,
          c = new Set;
        for (n.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var r = c;
          c = new Set, r.forEach((function(e) {
            o.has(e) || (o.add(e), (i[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var i = t(e, a);
          i && s.definitions.push(i)
        })), s
      }(a, "CreditData")
    },
    20066: e => {
      "use strict";
      e.exports = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del reproductor","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del reproductor","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","components_ratings_link_alt":"レーティング:{rating}レーティングについての詳細はこちらをクリックしてください","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}')
    }
  }
]);