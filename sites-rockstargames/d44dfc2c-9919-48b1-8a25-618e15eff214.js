try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d44dfc2c-9919-48b1-8a25-618e15eff214", e._sentryDebugIdIdentifier = "sentry-dbid-d44dfc2c-9919-48b1-8a25-618e15eff214")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3615, 4105], {
    9827: (e, a, s) => {
      var n = s(44853);
      a.H = n.createRoot, n.hydrateRoot
    },
    14062: (e, a, s) => {
      var n = s(42295),
        o = s(95966),
        t = s(9827),
        r = s(62229),
        i = s(9623),
        c = s(50078),
        l = s(41263),
        _ = s(57365),
        u = s(81788),
        d = s(2918),
        m = s(20270);
      const p = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg",
        g = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg",
        h = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg";
      var k = s(52542);
      let f = "rockstargames-sites-rockstargamesaf71a274ec221dd5496e00f0129fe119";
      const b = "nav-dropdown",
        y = (e, a, s, n) => ({
          event: e || "nav_click",
          link_url: a,
          text: s,
          element_placement: `Global Nav > ${n}`?.toLowerCase()
        }),
        w = ({
          globalNavigationComponent: e,
          gamesMenuComponent: a,
          link: s,
          gaEvent: t,
          gaBreadCrumb: r
        }) => {
          const c = (0, i.useNavigate)(),
            {
              dispatch: l
            } = (0, o.useRockstarEventDispatcher)(),
            {
              track: _
            } = (0, d.useGtmTrack)(),
            u = e,
            m = a,
            p = `${s?.location?.domain}${s?.location?.path}`,
            g = r ? `${r} > ${s.gaText}` : s.gaText;
          if (!s.location && "nav-no-link" === s.type) {
            const e = e => {
              s.dataTestId && (_(y(t, "", s.gaText, g)), l(s.dataTestId)), s.onClickCallback?.(e)
            };
            return (0, n.jsx)(u.MenuItem, {
              children: (0, n.jsx)(u.MenuLink, {
                asChild: !0,
                children: (0, n.jsx)("button", {
                  onClick: e,
                  "data-testid": s.dataTestId,
                  children: s.text
                })
              })
            }, s.text)
          }
          if ("games-menu" === s.type && m) {
            const e = (e, a, s) => {
              _(y(void 0, s, e, a))
            };
            return (0, n.jsx)(m.GamesMenuItem, {
              onNavigate: c,
              onClick: e,
              dataTestId: s.dataTestId
            }, "games-menu")
          }
          return s.type === b ? (0, n.jsxs)(u.MenuItem, {
            children: [(0, n.jsx)(u.MenuTrigger, {
              "data-testid": s.dataTestId,
              children: s.text
            }), (0, n.jsx)(u.MenuContent, {
              children: (0, n.jsx)(u.MenuSub, {
                children: (0, n.jsx)(u.MenuList, {
                  children: s.children?.map((a => (0, n.jsx)(w, {
                    globalNavigationComponent: e,
                    link: a,
                    gaBreadCrumb: g
                  }, a.text)))
                })
              })
            })]
          }, s.text) : s?.location?.domain || s.isLegacy ? (0, n.jsx)(u.MenuItem, {
            children: (0, n.jsx)(u.MenuLink, {
              external: "nav-external" === s.type,
              active: (0, i.matchPath)(p, location.pathname),
              target: s.target,
              href: p,
              "data-testid": s.dataTestId,
              children: s.text
            })
          }, s.text) : (0, n.jsx)(u.MenuItem, {
            children: (0, n.jsx)(u.MenuLink, {
              external: "nav-external" === s.type,
              active: (0, i.matchPath)(p, location.pathname),
              asChild: !0,
              children: (0, n.jsx)(i.Link, {
                target: s.target,
                to: p,
                onClick: s.onClickCallback,
                "data-testid": s.dataTestId,
                children: s.text
              })
            })
          }, s.text)
        },
        v = ({
          globalNavigationComponent: e
        }) => {
          const a = e,
            {
              charactersNeeded: s
            } = (0, d.useRockstarUserState)(),
            {
              data: o
            } = (0, d.useRockstarUser)();
          return "gtao" !== s || 0 === (o.characters?.gtao ?? []).length ? null : (0, n.jsx)(a.AvatarMenuSection, {
            value: "open",
            children: (0, n.jsx)(m.CharacterProfile, {})
          })
        },
        x = ({
          globalNavigationComponent: e,
          target: a
        }) => {
          const s = e;
          return a.type === b ? (0, n.jsx)(s.SearchTargetDropdown, {
            title: a.text,
            value: a.value,
            children: a.targets.map((a => (0, n.jsx)(x, {
              globalNavigationComponent: e,
              target: a
            }, a.text)))
          }) : (0, n.jsx)(s.SearchTarget, {
            value: a.value,
            title: a.text,
            children: a.text
          })
        },
        j = ({
          globalNavigationComponent: e,
          searchConfig: a,
          onSearch: s,
          getQueryFromUrl: o,
          isSearchPage: t
        }) => {
          const [c, l] = (0, r.useState)(""), [_, u] = (0, r.useState)(a.targets[0].value ?? ""), {
            search: d,
            pathname: m
          } = (0, i.useLocation)(), p = (0, i.useNavigate)(), g = e;
          (0, r.useEffect)((() => {
            if (t && (d || m)) {
              const [e, a] = o();
              l(e), u(a?.value || "")
            }
          }), [o, t, d, m]);
          const h = (e, a, n) => {
            if (!e) return;
            const o = s(e, a);
            o && (n?.(), o.startsWith("http") ? window.location.href = o : p(o))
          };
          return (0, n.jsx)(g.SearchBar, {
            onSearch: h,
            query: c,
            onQueryChange: l,
            target: _,
            onTargetChange: e => {
              h(c, e), u(e)
            },
            queryMin: 3,
            isSearchPage: t,
            children: (0, n.jsx)(g.SearchFilters, {
              children: a.targets.map((a => (0, n.jsx)(x, {
                globalNavigationComponent: e,
                target: a
              }, a.text)))
            })
          })
        },
        S = ({
          brand: e,
          site: a
        }) => (0, n.jsx)("img", {
          className: f,
          src: e,
          alt: a,
          "data-brand": a
        }),
        z = (0, u.withIntl)((({
          navigationData: e,
          globalNavigationComponent: a,
          gamesMenuComponent: s,
          avatarMenuData: t,
          searchConfig: c,
          onSearch: l,
          getQueryFromUrl: m,
          errorMessage: k,
          localisedStrings: f
        }) => {
          const b = a,
            x = (0, o.useLocale)(),
            z = (0, i.useLocation)(),
            {
              loggedIn: M,
              data: R
            } = (0, d.useRockstarUser)(),
            {
              track: C
            } = (0, d.useGtmTrack)(),
            E = (e, a, s, n) => () => {
              C(y(e, n, a, s))
            },
            N = (0, r.useMemo)((() => (0, o.getConfigForDomain)()), []),
            {
              currentCharId: I = 0,
              setSelectedCharacterTuple: L
            } = (0, d.useRockstarUserState)(),
            G = (0, r.useMemo)((() => {
              const a = e.reduce(((e, a) => {
                const s = a.appearancePaths.find((e => (0, i.matchPath)(e, z.pathname)));
                return s && void 0 === e ? {
                  ...a,
                  matchedPath: s
                } : void 0 === e ? void 0 : e
              }), void 0);
              return a
            }), [e, z.pathname]);
          (0, r.useEffect)((() => {
            const e = R?.characters?.gtao ?? [];
            if (null !== M && !e.length) return void L(!1);
            if (null == I || !e.length) return;
            const a = e?.[I] ?? e?.[0] ?? null;
            L(!!a?.platform && [a.platform, a.characterSlot])
          }), [I, R, M]);
          const P = G?.matchedPath.options.isSearchPage || !1,
            T = (0, r.useMemo)((() => u.locales.find((e => e.iso.toLowerCase() === (0, o.toScLocaleString)(x)))?.label), [u.locales]),
            q = (0, r.useMemo)((() => `${(0,o.getBase)()}${z?.pathname}`.replace(/\/\//g, "/")), [z?.pathname]);
          return (0, n.jsx)(b.Root, {
            brand: G?.brand ? (0, n.jsx)(S, {
              brand: G.brand,
              site: G.site
            }) : null,
            children: (0, n.jsxs)(b.Header, {
              children: [(0, n.jsx)(b.SiteTitle, {
                quickAccessHidden: G?.hideQuickAccess,
                href: (0, o.getBase)(),
                children: z.pathname.length > 0 && !G?.hideQuickAccess && (0, n.jsxs)(b.QuickMenu, {
                  children: [(0, n.jsx)(b.MenuItem, {
                    children: (0, n.jsx)(b.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(i.Link, {
                        to: "/",
                        children: [(0, n.jsx)(b.MenuIcon, {
                          src: p,
                          alt: f.quickMenuHome
                        }), f.quickMenuHome]
                      })
                    })
                  }), (0, n.jsx)(b.MenuItem, {
                    children: (0, n.jsx)(b.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(i.Link, {
                        to: "/games",
                        children: [(0, n.jsx)(b.MenuIcon, {
                          src: g,
                          alt: f.quickMenuGames
                        }), f.quickMenuGames]
                      })
                    })
                  }), (0, n.jsx)(b.MenuItem, {
                    children: (0, n.jsx)(b.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(i.Link, {
                        to: "/newswire",
                        children: [(0, n.jsx)(b.MenuIcon, {
                          src: h,
                          alt: f.quickMenuNewswire
                        }), f.quickMenuNewswire]
                      })
                    })
                  })]
                })
              }), (0, n.jsxs)(b.MobileMenu, {
                children: ["careers" !== G.site && (0, n.jsxs)(n.Fragment, {
                  children: [(0, n.jsx)(j, {
                    globalNavigationComponent: a,
                    searchConfig: c,
                    onSearch: l,
                    getQueryFromUrl: m,
                    isSearchPage: P,
                    errorMessage: k
                  }), (0, n.jsx)(b.SearchError, {
                    errorMessage: k
                  })]
                }), (0, n.jsx)(b.MobileMenuNav, {
                  children: G?.links.map((e => (0, n.jsx)(w, {
                    globalNavigationComponent: b,
                    gamesMenuComponent: s,
                    link: e
                  }, e.text)))
                }), G?.cta && (0, n.jsx)(b.CallToAction, {
                  ...G.cta,
                  asChild: !0,
                  onClick: E(G.cta.ga, G.cta.gaText, G.cta.gaText, `${G.cta.location.domain}${G.cta.location.path}`),
                  size: "LG",
                  children: (0, n.jsx)(i.Link, {
                    to: `${G.cta.location.domain}${G.cta.location.path}`,
                    reloadDocument: Boolean(G.cta.location.domain),
                    children: G.cta.text
                  })
                }), !G?.hideQuickAccess && (0, n.jsxs)(b.QuickMenu, {
                  children: [(0, n.jsx)(b.MenuItem, {
                    children: (0, n.jsx)(b.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(i.Link, {
                        to: "/",
                        children: [(0, n.jsx)(b.MenuIcon, {
                          src: p,
                          alt: f.quickMenuHome
                        }), f.quickMenuHome]
                      })
                    })
                  }), (0, n.jsx)(b.MenuItem, {
                    children: (0, n.jsx)(b.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(i.Link, {
                        to: "/games",
                        children: [(0, n.jsx)(b.MenuIcon, {
                          src: g,
                          alt: f.quickMenuGames
                        }), f.quickMenuGames]
                      })
                    })
                  }), (0, n.jsx)(b.MenuItem, {
                    children: (0, n.jsx)(b.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(i.Link, {
                        to: "/newswire",
                        children: [(0, n.jsx)(b.MenuIcon, {
                          src: h,
                          alt: f.quickMenuNewswire
                        }), f.quickMenuNewswire]
                      })
                    })
                  })]
                })]
              }), (0, n.jsx)(b.Menu, {
                children: G?.links.map((e => (0, n.jsx)(w, {
                  globalNavigationComponent: b,
                  gamesMenuComponent: s,
                  link: e
                }, e.text)))
              }), (0, n.jsxs)(b.Actions, {
                children: [(0, n.jsx)(b.Breakpoint, {
                  showOn: "desktop",
                  children: G?.cta && (0, n.jsx)(b.CallToAction, {
                    ...G.cta,
                    asChild: !0,
                    onClick: E(G.cta.ga, G.cta.gaText, G.cta.gaText, `${G.cta.location.domain}${G.cta.location.path}`),
                    children: (0, n.jsx)(i.Link, {
                      to: `${G.cta.location.domain}${G.cta.location.path}`,
                      reloadDocument: Boolean(G.cta.location.domain),
                      children: G.cta.text
                    })
                  })
                }), "careers" !== G.site && (0, n.jsxs)(b.Search, {
                  isSearchPage: P,
                  children: [(0, n.jsx)(b.SearchContainer, {
                    children: (0, n.jsx)(j, {
                      globalNavigationComponent: a,
                      searchConfig: c,
                      onSearch: l,
                      getQueryFromUrl: m,
                      isSearchPage: P,
                      errorMessage: k
                    })
                  }), (0, n.jsx)(b.SearchError, {
                    errorMessage: k
                  })]
                }), (0, n.jsxs)(b.AvatarMenu, {
                  avatarIconUrl: R?.avatar,
                  nickname: R?.nickname,
                  isLoggedIn: M,
                  children: [M && (0, n.jsx)(v, {
                    globalNavigationComponent: a
                  }), (0, n.jsx)(b.AvatarMenuSection, {
                    value: "open",
                    children: (0, n.jsx)(b.AvatarMenuSectionContent, {
                      children: (0, n.jsx)(b.MenuList, {
                        children: M ? (0, n.jsxs)(n.Fragment, {
                          children: [R.nickname && (0, n.jsx)(b.AvatarMenuSectionHeader, {
                            children: R.nickname
                          }), t.loggedInLinks.map((e => (0, n.jsx)(w, {
                            globalNavigationComponent: b,
                            link: e
                          }, e.text))), (0, n.jsx)(w, {
                            globalNavigationComponent: b,
                            link: t.helpItem
                          }), (0, n.jsx)(b.MenuItem, {
                            children: (0, n.jsx)(b.MenuLink, {
                              href: `${N.logout}?returnUrl=${q}`,
                              "data-testid": "logoutButton",
                              children: f.avatarMenuSignOut
                            })
                          })]
                        }) : (0, n.jsxs)(n.Fragment, {
                          children: [(0, n.jsx)(b.MenuItem, {
                            children: (0, n.jsx)(b.MenuLink, {
                              href: `${N.login}?returnUrl=${q}&lang=${(0,o.toScLocaleString)(x)}`,
                              "data-testid": "loginLink",
                              children: f.avatarMenuSignIn
                            })
                          }), (0, n.jsx)(b.MenuItem, {
                            children: (0, n.jsx)(b.MenuLink, {
                              href: `${N.signup}&returnUrl=${q}&lang=${(0,o.toScLocaleString)(x)}`,
                              "data-testid": "signUpLink",
                              children: f.avatarMenuSignUp
                            })
                          }), (0, n.jsx)(w, {
                            globalNavigationComponent: b,
                            link: t.helpItem
                          })]
                        })
                      })
                    })
                  }), (0, n.jsxs)(b.AvatarMenuSection, {
                    children: [(0, n.jsx)(b.AvatarMenuSectionHeaderDropdown, {
                      children: (0, n.jsxs)(b.AvatarMenuLanguageLabel, {
                        children: [(0, n.jsx)(_.Globe, {
                          label: f.avatarMenuSelectLanguage
                        }), (0, n.jsx)("span", {
                          "data-testid": "header-language-current",
                          children: T ?? f.avatarMenuSelectLanguage
                        })]
                      })
                    }), (0, n.jsx)(b.AvatarMenuSectionContent, {
                      children: (0, n.jsx)(b.MenuList, {
                        children: u.locales.map((e => (0, n.jsx)(b.MenuItem, {
                          testId: `header-language-selector-${e.subdomaincom}`,
                          children: (0, n.jsx)(b.MenuLink, {
                            onClick: () => (0, u.onLanguageChange)({
                              selectedLocale: e
                            }),
                            children: e.label
                          })
                        }, e.label)))
                      })
                    })]
                  })]
                })]
              })]
            })
          })
        }), k);
      var M = s(55274),
        R = s.n(M),
        C = s(90);
      const E = "__MFE_GLOBAL_HOOK__",
        N = () => {
          const e = window;
          e[E]?.history || (e[E] = Object.assign(e[E] || {}, {
            history: (0, C.createBrowserHistory)()
          }))
        },
        I = () => {
          const {
            pathname: e
          } = (0, i.useLocation)();
          return (0, r.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        },
        L = (0, r.forwardRef)(((e, a) => {
          const {
            threshold: s,
            callback: n,
            children: o,
            requireUser: t
          } = e, {
            track: i
          } = (0, d.useGtmTrack)(t), [c, l] = (0, r.useState)(a?.current);
          return (0, r.useEffect)((() => {
            a?.current && l(a.current)
          }), [a]), ((e, a, s) => {
            const [n, o] = (0, r.useState)({
              scrollDepths: e,
              scrollY: 0,
              scrollLength: 0
            }), {
              scrollDepths: t,
              scrollY: i,
              scrollLength: c
            } = n;
            (0, r.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && o((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, r.useEffect)((() => {
              o({
                scrollDepths: e,
                scrollY: 0,
                scrollLength: 0
              })
            }), [window.location.pathname]);
            const l = (0, r.useCallback)((() => {
              const e = document.documentElement,
                r = document.body,
                i = s?.scrollTop || e.scrollTop || r.scrollTop,
                c = s?.scrollHeight || e.scrollHeight || r.scrollHeight,
                {
                  clientHeight: _
                } = e,
                u = i / (c - _) * 100;
              if (t) {
                const e = Math.min(...t, c);
                if (u >= e) {
                  const n = t.filter((a => a !== e));
                  0 === n.length && (s ?? window).removeEventListener("scroll", l), a && a({
                    scrollY: e,
                    scrollPercent: u,
                    scrollLength: c * (.01 * e),
                    remainingDepths: n
                  }), o({
                    scrollY: e,
                    scrollDepths: n,
                    scrollLength: c * (.01 * e)
                  })
                }
              } else o({
                ...n,
                scrollY: u
              })
            }), [t, s, a]);
            (0, r.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = s ?? window;
              return e.addEventListener("scroll", l), () => e.removeEventListener("scroll", l)
            }), [l])
          })(s, (({
            scrollY: e,
            scrollLength: a
          }) => {
            i({
              event: "page_scroll",
              scroll_depth: e,
              page_length: `${a}px`
            }), "function" == typeof n && n(e)
          }), c), o
        }));
      L.displayName = "ScrollTracker";
      const G = L;
      var P = s(2765),
        T = s.n(P),
        q = s(63582),
        A = s(4572),
        H = s.n(A);
      const U = ({
          modal: e
        }) => {
          const {
            content: a,
            className: s,
            height: o,
            onClose: t,
            rect: c = {
              left: 0,
              top: 0
            },
            contentStyle: l = {},
            contentClassName: _ = "",
            width: u,
            fadeIn: m = !0,
            cardIds: p,
            activeId: g,
            theme: h,
            title: k,
            gtm: f = {},
            aspectRatio: b = "default",
            cardDimensions: y
          } = e, {
            left: w,
            top: v
          } = c, x = p?.indexOf(g), [j, S] = (0, r.useState)(p?.length || 0), {
            track: z
          } = (0, d.useGtmTrack)(), M = null !== p && (p?.length || 0) > 1 && ("flag_bg" === h || "fob" === y?.size), R = window.location.href.includes("cms5"), [C, E] = (0, i.useSearchParams)(), [N, I] = (0, r.useState)(!1), [L, G] = (0, r.useState)(!1), [P, A] = (0, r.useState)(), U = e => {
            "number" == typeof e && p && e < p.length && e > -1 && E({
              info: p[e].toString()
            })
          }, D = () => {
            const e = "number" == typeof x && x > -1 ? x - 1 : 0;
            U(e), z({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: k?.toLowerCase(),
              position: x
            })
          }, B = () => {
            const e = "number" == typeof x && x > -1 ? x + 1 : 0;
            U(e), z({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: k?.toLowerCase(),
              position: x
            })
          };
          (0, r.useEffect)((() => {
            S(p?.length || 0)
          }), [p?.length]), (0, r.useEffect)((() => {
            null !== x && null !== p && U(x)
          }), [x, p]), (0, r.useEffect)((() => {
            const e = p?.findIndex((e => e === g));
            "number" == typeof e && (G(e <= 0), I(e >= j - 1))
          }), [p, g, j, C]);
          const [F] = (0, r.useState)({
            y: v,
            x: w,
            top: 0,
            left: 0,
            width: u,
            height: o,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: M ? "0" : ""
          }), $ = {
            opacity: 1
          }, O = (0, r.useRef)(null), Q = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, V = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [Y] = (0, r.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: M ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: Q,
              y: Q,
              top: Q,
              left: Q,
              width: Q,
              height: Q,
              border: Q,
              background: {
                delay: .3
              }
            }
          }), [K, J] = (0, r.useState)({
            initial: F,
            shown: Y
          });
          (0, r.useEffect)((() => {
            J({
              initial: F,
              shown: Y
            })
          }), [F, Y]), (0, r.useEffect)((() => {
            const e = e => {
              "function" == typeof t && "Escape" === e.key && (t(), z({
                event: "modal_close",
                element_placement: k?.toLowerCase(),
                ...f
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const W = () => {
              "function" == typeof t && (t(), z({
                event: "modal_close",
                element_placement: k?.toLowerCase(),
                ...f
              }))
            },
            Z = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let s = 0; s < e.children.length; s++) {
                const n = e.children[s];
                if (n.scrollHeight > n.clientHeight) return n;
                const o = Z(n, a - 1);
                if (o) return o
              }
              return null
            },
            X = e => {
              if (ae?.current?.children) {
                let a = null;
                const s = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return P?.queried ? a = P.element : (a = Z(e, 2), A({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += s)
                }
              }
            },
            ee = m ? 0 : 1,
            ae = (0, r.useRef)(null),
            se = (0, n.jsx)(q.motion.button, {
              className: "rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: V,
              onClick: () => {
                W()
              },
              onKeyDown: X,
              onKeyUp: X
            });
          let ne = null;
          return ne = R ? r.Fragment : T(), (0, r.useMemo)((() => (0, n.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": M,
            "data-aspect-ratio": b,
            children: (0, n.jsx)(ne, {
              children: (0, n.jsxs)("div", {
                children: [(0, n.jsx)(q.motion.div, {
                  className: "rockstargames-sites-rockstargamescf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: $,
                  transition: Q,
                  onClick: () => W()
                }), M && (0, n.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, n.jsxs)(q.motion.div, {
                    className: "rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: V,
                    children: [(0, n.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: D,
                      disabled: L,
                      onKeyDown: X,
                      onKeyUp: X
                    }), (0, n.jsxs)("div", {
                      className: "rockstargames-sites-rockstargamese316695281c4c56337307741bda1371f",
                      "data-theme": h,
                      children: [" ", (x ?? 0) + 1, (0, n.jsx)("div", {
                        className: "rockstargames-sites-rockstargamesc1ee424eae15f7b789c86e634df9e28d"
                      }), p?.length, " "]
                    }), (0, n.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: B,
                      disabled: N,
                      onKeyDown: X,
                      onKeyUp: X,
                      "data-autofocus": !0
                    })]
                  }), se]
                }), (0, n.jsx)(q.motion.div, {
                  className: "rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366",
                  ref: O,
                  initial: "initial",
                  animate: "shown",
                  variants: K,
                  transition: Q,
                  style: l,
                  children: (0, n.jsxs)(q.motion.div, {
                    className: H()("rockstargames-sites-rockstargamesa7d77f83f629e9ae93f6934c8ba007b0", s),
                    id: "modal",
                    "data-testid": "modal",
                    role: "dialog",
                    children: [!M && se, (0, n.jsx)(q.motion.div, {
                      className: H()("rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714", _),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: V,
                      ref: ae,
                      children: a
                    }), (0, n.jsx)("button", {
                      className: "rockstargames-sites-rockstargamesea8f15b1bfbda9f3efef89dc0d2ebc89",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [a, x, l])
        },
        D = [null, () => null],
        B = (0, o.setContextItem)({
          context: (0, r.createContext)(D),
          key: "modalContext"
        }),
        F = ({
          children: e
        }) => {
          const [a, s] = (0, r.useState)(D), {
            setBodyIsLocked: t
          } = (0, o.useBodyScrollable)("ModalProvider"), i = (0, r.useMemo)((() => a?.content ? (0, n.jsx)(U, {
            modal: a
          }) : null), [a]), c = () => t(!1);
          return (0, r.useEffect)((() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          })), []), (0, r.useEffect)((() => {
            t(!!i)
          }), [i]), (0, n.jsx)(B.Provider, {
            value: [i, s],
            children: e
          })
        };
      var $ = s(60438),
        O = s(50437),
        Q = s(95342),
        V = s(57386),
        Y = s(87790);
      const K = (e, a = {}) => {
          const s = (0, r.lazy)(e);
          return (0, r.useMemo)((() => (0, n.jsx)(r.Suspense, {
            fallback: "",
            children: (0, n.jsx)(s, {
              ...a
            })
          })), [])
        },
        J = (0, V.A)((() => {
          const {
            setError: e,
            state: a
          } = (0, Y.b)(), {
            error: o
          } = a, {
            pathname: t
          } = (0, i.useLocation)();
          (0, r.useEffect)((() => {
            e()
          }), [t]), (0, r.useEffect)((() => {
            200 !== window?.env?.responseStatusCode && e({
              code: window.env.responseStatusCode
            })
          }), []);
          const c = {
            path: "*",
            element: K((() => Promise.resolve().then(s.bind(s, 34100))), {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          };
          let l = [{
            path: "/",
            element: K((() => Promise.all([s.e(4346), s.e(4084), s.e(7731), s.e(4283), s.e(6695), s.e(6565), s.e(1973), s.e(8850), s.e(7887), s.e(6559)]).then(s.bind(s, 40550))))
          }, {
            path: "/careers-privacy",
            element: K((() => Promise.all([s.e(8835), s.e(4070)]).then(s.bind(s, 64070))))
          }, {
            path: "/ccpa",
            element: K((() => Promise.all([s.e(8835), s.e(4038)]).then(s.bind(s, 4038))))
          }, {
            path: "/community-resources",
            element: K((() => Promise.all([s.e(4283), s.e(6695), s.e(8363), s.e(368)]).then(s.bind(s, 4767))))
          }, {
            path: "/community-resources/guidelines",
            element: K((() => Promise.all([s.e(4346), s.e(4283), s.e(6695), s.e(8363), s.e(6396)]).then(s.bind(s, 62059))))
          }, {
            path: "/community-resources/additional-resources",
            element: K((() => Promise.all([s.e(4346), s.e(4283), s.e(6695), s.e(8363), s.e(3115)]).then(s.bind(s, 7838))))
          }, {
            path: "/community-resources/online-comms-privacy",
            element: K((() => Promise.all([s.e(4346), s.e(4283), s.e(6695), s.e(8363), s.e(9292)]).then(s.bind(s, 76603))))
          }, {
            path: "/community-resources/how-to-report",
            element: K((() => Promise.all([s.e(4346), s.e(4283), s.e(6695), s.e(8363), s.e(6771)]).then(s.bind(s, 42758))))
          }, {
            path: "/conduct",
            element: (0, n.jsx)(i.Navigate, {
              to: "/community-guidelines",
              replace: !0
            })
          }, {
            path: "/contact",
            element: K((() => s.e(8813).then(s.bind(s, 38813))))
          }, {
            path: "/cookies",
            element: K((() => Promise.all([s.e(8835), s.e(4826)]).then(s.bind(s, 54826))))
          }, {
            path: "/corpinfo",
            element: K((() => Promise.all([s.e(8835), s.e(7481)]).then(s.bind(s, 87481))))
          }, {
            path: "/VI",
            element: (0, n.jsx)(i.Navigate, {
              to: "/VI",
              replace: !0
            })
          }, {
            path: "/games",
            element: K((() => Promise.all([s.e(4346), s.e(4283), s.e(6695), s.e(1973), s.e(2200)]).then(s.bind(s, 40807))))
          }, {
            path: "/games/:gameTitlelug",
            element: K((() => Promise.all([s.e(4283), s.e(5701)]).then(s.bind(s, 75701))))
          }, {
            path: "/legal",
            element: K((() => Promise.all([s.e(8835), s.e(8804)]).then(s.bind(s, 38804))))
          }, {
            path: "/gta-v/thankyou",
            element: K((() => s.e(3771).then(s.bind(s, 53771))), {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: K((() => s.e(3549).then(s.bind(s, 73549))))
          }, {
            path: "/community_event",
            element: K((() => Promise.all([s.e(4283), s.e(1542)]).then(s.bind(s, 1542))))
          }, {
            path: "/reddeadredemption2/*",
            element: K((() => s.e(9147).then(s.t.bind(s, 29147, 23))))
          }, {
            path: "/reddeadredemption/*",
            element: K((() => s.e(7538).then(s.t.bind(s, 47538, 23))))
          }, {
            path: "/bully/scholarshipedition",
            element: (0, n.jsx)(i.Navigate, {
              to: "/bully",
              replace: !0
            })
          }, {
            path: "/bully/*",
            element: K((() => s.e(5202).then(s.t.bind(s, 35202, 23))))
          }, {
            path: "/reddeadonline/thankyou",
            element: K((() => s.e(3771).then(s.bind(s, 53771))), {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: K((() => s.e(3137).then(s.t.bind(s, 53137, 23))))
          }, {
            path: "/downloads/*",
            element: K((() => Promise.all([s.e(2973), s.e(1328)]).then(s.bind(s, 31328))))
          }, {
            path: "/reddeadonline/*",
            element: K((() => s.e(3416).then(s.t.bind(s, 33416, 23))))
          }, {
            path: "/gifs/:hashId",
            element: K((() => s.e(1626).then(s.t.bind(s, 41626, 23))))
          }, {
            path: "/gta-v/*",
            element: K((() => s.e(6766).then(s.t.bind(s, 36766, 23))), {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: K((() => s.e(6766).then(s.t.bind(s, 36766, 23))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-plus",
            element: K((() => s.e(981).then(s.bind(s, 40981))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: K((() => s.e(6766).then(s.t.bind(s, 36766, 23))), {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy/*",
            element: K((() => s.e(2405).then(s.t.bind(s, 12405, 23))))
          }, {
            path: "/gtatv/*",
            element: K((() => s.e(8987).then(s.t.bind(s, 88987, 23))))
          }, {
            path: "/manuals",
            element: K((() => Promise.all([s.e(6325), s.e(7131)]).then(s.bind(s, 87131))))
          }, {
            path: "/manuals/music",
            element: K((() => Promise.all([s.e(6325), s.e(2973), s.e(4681)]).then(s.bind(s, 84681))))
          }, {
            path: "/newswire",
            element: K((() => Promise.all([s.e(4346), s.e(4084), s.e(4283), s.e(6695), s.e(6565), s.e(1973), s.e(7887), s.e(7880)]).then(s.bind(s, 47248))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: K((() => s.e(8088).then(s.bind(s, 68088))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: K((() => s.e(8088).then(s.bind(s, 68088))))
          }, {
            path: "/privacy",
            element: K((() => Promise.all([s.e(8835), s.e(7071)]).then(s.bind(s, 97071))))
          }, {
            path: "/refund-policy",
            element: K((() => s.e(3736).then(s.bind(s, 83736))))
          }, {
            path: "/rockstartv/*",
            element: K((() => s.e(8778).then(s.t.bind(s, 78778, 23))))
          }, {
            path: "/screenshot-viewer/*",
            element: K((() => s.e(582).then(s.t.bind(s, 90582, 23))))
          }, {
            path: "/search",
            element: K((() => s.e(2327).then(s.bind(s, 22327))))
          }, {
            path: "/socialclubmaintenance",
            element: K((() => s.e(2320).then(s.bind(s, 22320))))
          }, {
            path: "/south-korean-privacy-addendum",
            element: K((() => Promise.all([s.e(8835), s.e(1622)]).then(s.bind(s, 11622))))
          }, {
            path: "/unsubscribe",
            element: K((() => Promise.all([s.e(4346), s.e(4324)]).then(s.bind(s, 64324))))
          }, {
            path: "/videos",
            element: K((() => Promise.all([s.e(1266), s.e(7731), s.e(8850), s.e(1913), s.e(7182)]).then(s.bind(s, 28330))))
          }, {
            path: "/videos/:videoId",
            element: K((() => Promise.all([s.e(1266), s.e(1913), s.e(6992)]).then(s.bind(s, 56992))))
          }, {
            ...c
          }];
          return isNaN(parseInt(o?.code)) || 200 === o?.code || (l = [c]), (0, i.useRoutes)(l)
        })),
        W = {
          headerHidden: "rockstargames-sites-rockstargamesb6b034f449f546e8024b4fa91ec35516",
          main: "rockstargames-sites-rockstargamesf5a4be65929b33e16434b24a4d701e3e"
        },
        Z = (0, o.withAutoRouteTracking)((({
          headerHidden: e
        }) => (0, n.jsx)("main", {
          role: "main",
          id: "main",
          className: [W.main, e ? W.headerHidden : ""].join(" "),
          children: (0, n.jsx)(J, {})
        })));
      var X = s(66628),
        ee = s(39848),
        ae = s.n(ee);
      N();
      const se = (() => {
          const e = window;
          if (e[E]?.history || N(), e[E]?.history) return e[E].history;
          throw new Error("Browser History has not been initialised")
        })(),
        ne = (0, u.withIntl)((() => {
          const {
            setFooterHidden: e,
            setHeaderHidden: a,
            state: s
          } = (0, Y.b)(), {
            footerHidden: o,
            headerHidden: t
          } = s, [_] = (0, r.useContext)(B), m = (0, i.useLocation)(), {
            data: p
          } = (0, $.Wx)(), {
            hasNotifications: g
          } = (0, d.useRockstarUserState)();
          return (0, r.useEffect)((() => {
            const s = (0, X.Ek)({
                path: m.pathname
              }),
              n = (0, X.UN)({
                path: m.pathname
              });
            e(s), a(n)
          }), [m]), (0, n.jsx)(c.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            children: (0, n.jsx)($.UN, {
              children: (0, n.jsxs)(G, {
                threshold: [25, 50, 75, 90, 100],
                children: [!t && (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsx)(l.NavigationWrapper, {
                    globalNavLoaderComponent: z,
                    globalNavComponent: l,
                    username: p?.nickname,
                    userProfileLink: p?.profile_link,
                    hasNotifications: g
                  })
                }), _, (0, n.jsx)(I, {}), (0, n.jsx)(Z, {
                  headerHidden: t
                }), !o && (0, n.jsx)(ae(), {
                  onLanguageChange: u.onLanguageChange
                })]
              })
            })
          })
        }), k),
        oe = (0, o.withRockstarGraph)((0, o.withReactiveState)((() => {
          const e = (0, o.useBase)(),
            {
              setTitle: a
            } = (0, Y.b)();
          return (0, r.useEffect)((() => {
            window.addEventListener("message", (e => {
              "graph.titleUpdate" === (e.data?.type ?? null) && a(e.data.title)
            }))
          }), []), (0, n.jsx)(O.uU, {
            children: (0, n.jsx)(Q.N2, {
              children: (0, n.jsx)($.iR, {
                children: (0, n.jsx)(R(), {
                  history: se,
                  basename: e,
                  children: (0, n.jsx)(F, {
                    children: (0, n.jsx)(ne, {})
                  })
                })
              })
            })
          })
        }), {
          state: X.wk
        }), {
          env: window?.env?.graphEnv ?? "prod"
        }),
        te = window?.env?.oneTrustId ?? null,
        re = window?.env?.gtmId ?? null;
      (0, o.gtmInit)({
        id: re
      }), (0, o.oneTrustInit)({
        id: te,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, t.H)(e).render((0, n.jsx)(oe, {}))
        }
      })
    },
    34100: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => l
      });
      var n = s(42295),
        o = s(62229),
        t = s(81788),
        r = s(14200),
        i = s(67050);
      const c = (0, t.defineMessages)({
          wasted_error_404_new: {
            id: "wasted_error_404_new",
            description: "Message prompting user that page doesn't exist or another error occurred",
            defaultMessage: "The page you're looking for doesn't exist or another error occurred."
          },
          wasted_home: {
            id: "wasted_home",
            description: "Message prompting user that the home page doesn't exist or another error occurred",
            defaultMessage: "Home"
          }
        }),
        l = ({
          error: e,
          domain: a = ""
        }) => {
          console.error({
            error: e
          });
          const {
            formatMessage: s
          } = (0, t.useIntl)();
          let l = e?.message ?? s(c.wasted_error_404_new);
          l = s(c.wasted_error_404_new);
          const _ = e?.code ?? 398,
            u = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            u && u?.current && u.current.focus()
          }), [u]), (0, n.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, n.jsx)("h3", {
              tabIndex: -1,
              ref: u,
              children: `${l} (${_})`
            }), (0, n.jsx)(r.A, {
              to: "/",
              reloadDocument: !1,
              children: s(c.wasted_home)
            }), "clr" !== a && (0, n.jsx)(i.A, {})]
          })
        }
    },
    52542: e => {
      e.exports = JSON.parse('{"de-DE":{"avatarmenu_logout":"Abmelden","avatarmenu_selectlanguage":"Eine Sprache auswählen","avatarmenu_signin":"Anmelden","avatarmenu_signup":"Registrieren","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Diese Richtlinien beschreiben die Werte, die wir voraussetzen, und die Regeln, die wir anwenden, um sicherzustellen, dass alle Spieler ein faires, respektvolles und sicheres Spielerlebnis haben.","community_guidelines_tile_header":"Community-Richtlinien anschauen","email_settings_cta":"Präferenzen aktualisieren","handshake_icon_alt_text":"Symbol: Händeschütteln","heartbook_icon_alt_text":"Symbol: Buch mit Herz","quickmenu_games":"Spiele","quickmenu_home":"Startseite","quickmenu_newswire":"Newswire","resources_last_updated_date":"18. November 2024","resources_tile_description":"Finde schnell Ressourcen, falls du oder jemand, den du kennst, Probleme hat und Hilfe braucht.","resources_tile_header":"Sicherheitsressourcen anschauen","rockstargames_company_info_br":"Brasilien","rockstargames_company_info_cz":"Tschechische Republik","rockstargames_company_info_de":"Deutschland","rockstargames_company_info_display_for_country":"Seiteninformationen für {country} anzeigen","rockstargames_company_info_es":"Spanien","rockstargames_company_info_fr":"Frankreich","rockstargames_company_info_it":"Italien","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"Südkorea","rockstargames_company_info_mx":"Mexiko","rockstargames_company_info_nl":"Niederlande","rockstargames_company_info_pl":"Polen","rockstargames_company_info_ru":"Russland","rockstargames_company_info_sa":"Saudi-Arabien","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"USA","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"{item} aus {collection} herunterladen","rockstargames_downloads_dimensions_label":"{width} x {height} Pixel.","rockstargames_downloads_go_back":"Zurück","rsg_no_results":"Diese Suche ergab leider keine Treffer.","rsg_total_results_message":"Suche nach {Tab}, gefiltert nach {Query}","safety_get_support_button":"Support kontaktieren","safety_learn_more_button":"Mehr erfahren","support_chat_icon_alt_text":"Symbol: Support-Chat","support_tile_description":"Besuche unsere Kundendienst-Website, wenn du zusätzliche Hilfe mit der Verwaltung deines Kontos oder den Datenschutz- und Privatsphäreeinstellungen benötigst.","support_tile_header":"Brauchst du Hilfe mit deinem Konto?","unsubscribe_error_description":"Diese URL ist eventuell ungültig. Du kannst deine Präferenzen bezüglich E-Mails von Rockstar Games in den Einstellungen deines Kontos ändern.","unsubscribe_error_header":"Fehler beim Abbestellen","unsubscribe_info_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_info_header":"Du hast E-Mails bereits abbestellt","unsubscribe_success_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_success_header":"Erfolgreich abbestellt"},"en-US":{"avatarmenu_logout":"Log Out","avatarmenu_selectlanguage":"Select a Language","avatarmenu_signin":"Sign In","avatarmenu_signup":"Sign Up","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"These guidelines outline the values we uphold and the policies we enforce to ensure player experiences are fair, respectful, and safe.","community_guidelines_tile_header":"Explore Community Guidelines","email_settings_cta":"Update Preferences","handshake_icon_alt_text":"Handshake icon","heartbook_icon_alt_text":"Book with heart icon","quickmenu_games":"Games","quickmenu_home":"Home","quickmenu_newswire":"Newswire","resources_last_updated_date":"November 18, 2024","resources_tile_description":"Quickly find resources if you or someone you know is struggling and in need of help.","resources_tile_header":"Explore Safety Resources","rockstargames_company_info_br":"Brazil","rockstargames_company_info_cz":"Czech Republic","rockstargames_company_info_de":"Germany","rockstargames_company_info_display_for_country":"Display page information for {country}","rockstargames_company_info_es":"Spain","rockstargames_company_info_fr":"France","rockstargames_company_info_it":"Italy","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"South Korea","rockstargames_company_info_mx":"Mexico","rockstargames_company_info_nl":"Netherlands","rockstargames_company_info_pl":"Poland","rockstargames_company_info_ru":"Russian Federation","rockstargames_company_info_sa":"Saudi Arabia","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"United States","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Download {item} {collection}","rockstargames_downloads_dimensions_label":"{width} by {height} pixels.","rockstargames_downloads_go_back":"Go back","rsg_no_results":"Sorry, there were no results.","rsg_total_results_message":"Showing {Tab} filtered by {Query}","safety_get_support_button":"Get Support","safety_learn_more_button":"Learn More","support_chat_icon_alt_text":"Support chat icon","support_tile_description":"For additional assistance with managing your account or data and privacy settings, visit our Customer Support page.","support_tile_header":"Need account assistance?","unsubscribe_error_description":"This URL may be invalid. You can make changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_error_header":"Error Unsubscribing","unsubscribe_info_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_info_header":"You\'re Already Unsubscribed","unsubscribe_success_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_success_header":"Successfully Unsubscribed"},"es-ES":{"avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Selecciona un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","community_guidelines_image_alt_text":"Say sorry, be nice (pide perdón, sé amable)","community_guidelines_tile_description":"Estas directrices resumen los valores que defendemos y las políticas que aplicamos para asegurarnos de que nuestros jugadores disfrutan de una experiencia justa, respetuosa y segura.","community_guidelines_tile_header":"Ver las directrices de la comunidad","email_settings_cta":"Cambiar tus preferencias","handshake_icon_alt_text":"Icono de un apretón de manos","heartbook_icon_alt_text":"Icono de un libro con un corazón","quickmenu_games":"Juegos","quickmenu_home":"Inicio","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 De noviembre de 2024","resources_tile_description":"Encuentra ayuda rápidamente en caso de que tú o alguien que conoces esté pasando por dificultades y necesite apoyo.","resources_tile_header":"Ver los servicios de ayuda","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información para {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federación Rusa","rockstargames_company_info_sa":"Arabia Saudí","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width} por {height} píxeles.","rockstargames_downloads_go_back":"Volver","rsg_no_results":"Lo sentimos, no hay resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Obtén asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Icono de chat de asistencia","support_tile_description":"Si necesitas ayuda adicional para gestionar tu cuenta o tus ajustes de datos o privacidad, visita nuestro sitio web de asistencia técnica.","support_tile_header":"¿Necesitas ayuda con tu cuenta?","unsubscribe_error_description":"Puede que esta URL no sea válida. Puedes cambiar tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_error_header":"Error al cancelar la suscripción","unsubscribe_info_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_info_header":"Ya has cancelado tu suscripción","unsubscribe_success_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_success_header":"Has cancelado tu suscripción con éxito"},"es-MX":{"avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Seleccionar un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","community_guidelines_image_alt_text":"Imagen con el mensaje: Say Sorry, Be Nice","community_guidelines_tile_description":"Estas directrices describen nuestros valores y las políticas que imponemos para asegurar que las experiencias de los jugadores sean justas, respetuosas y seguras.","community_guidelines_tile_header":"Directrices de la comunidad","email_settings_cta":"Actualizar preferencias","handshake_icon_alt_text":"Ícono de un apretón de manos","heartbook_icon_alt_text":"Ícono de un libro con un corazón","quickmenu_games":"Juegos","quickmenu_home":"Inicio","quickmenu_newswire":"Canal de noticias","resources_last_updated_date":"18 de noviembre de 2024","resources_tile_description":"Encuentra recursos rápidamente si tú o alguien que conoces necesita ayuda.","resources_tile_header":"Recursos de seguridad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información de página de {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Rusia","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos de América","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width}x{height} píxeles.","rockstargames_downloads_go_back":"Atrás","rsg_no_results":"Lo lamentamos, pero no se encontraron resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Recibir asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Ícono de chat de soporte","support_tile_description":"Para recibir asistencia adicional de tu cuenta, datos o ajustes de privacidad, visita nuestra página de soporte.","support_tile_header":"Asistencia de tu cuenta","unsubscribe_error_description":"La dirección URL podría ser inválida. Puedes cambiar las preferencias de tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_error_header":"Error al darse de baja","unsubscribe_info_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_info_header":"Ya te encuentras dado de baja.","unsubscribe_success_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_success_header":"Éxito al darse de baja."},"fr-FR":{"avatarmenu_logout":"Se déconnecter","avatarmenu_selectlanguage":"Sélectionner une langue","avatarmenu_signin":"Se connecter","avatarmenu_signup":"S’abonner","community_guidelines_image_alt_text":"Image avec le texte en anglais Say Sorry, Be Nice","community_guidelines_tile_description":"Ces règles décrivent nos valeurs et les politiques que nous faisons appliquer pour assurer à tous les joueurs une expérience juste, respectueuse et sûre.","community_guidelines_tile_header":"Explorez nos Règles de la communauté","email_settings_cta":"Mettre vos préférences à jour","handshake_icon_alt_text":"Icône de poignée de main","heartbook_icon_alt_text":"Icône de livre avec un cœur","quickmenu_games":"Jeux","quickmenu_home":"Accueil","quickmenu_newswire":"Newswire","resources_last_updated_date":"Le 18 novembre 2024","resources_tile_description":"Trouvez rapidement des ressources si vous, ou une personne que vous connaissez, êtes en difficulté et avez besoin d\'aide.","resources_tile_header":"Explorez nos ressources relatives à la sécurité","rockstargames_company_info_br":"le Brésil","rockstargames_company_info_cz":"la République tchèque","rockstargames_company_info_de":"l\'Allemagne","rockstargames_company_info_display_for_country":"Afficher les informations de la page pour {country}","rockstargames_company_info_es":"l\'Espagne","rockstargames_company_info_fr":"la France","rockstargames_company_info_it":"l\'Italie","rockstargames_company_info_jp":"le Japon","rockstargames_company_info_kr":"la Corée du Sud","rockstargames_company_info_mx":"le Mexique","rockstargames_company_info_nl":"les Pays-Bas","rockstargames_company_info_pl":"la Pologne","rockstargames_company_info_ru":"la Fédération de Russie","rockstargames_company_info_sa":"l\'Arabie saoudite","rockstargames_company_info_tw":"Taïwan","rockstargames_company_info_us":"les États-Unis","rockstargames_company_info_zh":"la Chine","rockstargames_downloads_collections_download_text":"Télécharger ({collection} - {item})","rockstargames_downloads_dimensions_label":"{width}x{height} pixels.","rockstargames_downloads_go_back":"Précédent","rsg_no_results":"Désolé, aucun résultat n\'a été trouvé.","rsg_total_results_message":"Résultats : {Tab} Filtres : {Query}","safety_get_support_button":"Obtenir de l\'aide","safety_learn_more_button":"En savoir plus","support_chat_icon_alt_text":"Icône de discussion de l\'assistance","support_tile_description":"Si vous avez besoin d\'aide supplémentaire pour gérer votre compte ou les paramètres de vos données et de votre confidentialité, rendez-vous sur notre page d\'assistance à la clientèle.","support_tile_header":"Besoin d\'aide pour votre compte ?","unsubscribe_error_description":"Cette URL semble non valide. Vous pouvez modifier vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_error_header":"Une erreur est survenue lors du désabonnement","unsubscribe_info_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réabonnez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_info_header":"Vous êtes déjà désabonné(e)","unsubscribe_success_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réabonnez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_success_header":"Votre désabonnement a été pris en compte"},"it-IT":{"avatarmenu_logout":"Esci","avatarmenu_selectlanguage":"Seleziona una lingua","avatarmenu_signin":"Accedi","avatarmenu_signup":"Registrati","community_guidelines_image_alt_text":"Immagine con logo “Say Sorry, Be Nice”.","community_guidelines_tile_description":"Queste linee guida definiscono i valori che sosteniamo e le politiche che applichiamo per assicurare ai giocatori un’esperienza positiva, rispettosa e sicura.","community_guidelines_tile_header":"Scopri le Linee guida della comunità","email_settings_cta":"Aggiorna le preferenze","handshake_icon_alt_text":"Icona della stretta di mano","heartbook_icon_alt_text":"Icona di un libro con un cuore","quickmenu_games":"Giochi","quickmenu_home":"Home","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 Novembre 2024","resources_tile_description":"Trova velocemente le risorse che cerchi se tu o qualcuno che conosci è in difficoltà e ha bisogno di aiuto.","resources_tile_header":"Scopri le risorse per la sicurezza","rockstargames_company_info_br":"Brasile","rockstargames_company_info_cz":"Repubblica Ceca","rockstargames_company_info_de":"Germania","rockstargames_company_info_display_for_country":"Mostra informazioni sulla pagina per il paese seguente: {country}","rockstargames_company_info_es":"Spagna","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Giappone","rockstargames_company_info_kr":"Corea del Sud","rockstargames_company_info_mx":"Messico","rockstargames_company_info_nl":"Paesi Bassi","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federazione Russa","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Stati Uniti","rockstargames_company_info_zh":"Cina","rockstargames_downloads_collections_download_text":"Scarica {item} {collection}","rockstargames_downloads_dimensions_label":"{width} per {height} pixel.","rockstargames_downloads_go_back":"Torna indietro","rsg_no_results":"Spiacente, nessun risultato trovato.","rsg_total_results_message":"Scheda {Tab} filtrata per {Query}","safety_get_support_button":"Chiedi assistenza","safety_learn_more_button":"Altre informazioni","support_chat_icon_alt_text":"Icona della chat di assistenza","support_tile_description":"Per ulteriore assistenza sulla gestione del tuo account o dei tuoi data e sulle impostazioni della privacy, visita la nostra pagina del supporto clienti.","support_tile_header":"Hai bisogno di aiuto con il tuo account?","unsubscribe_error_description":"Questo URL potrebbe non essere valido. Puoi apportare modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_error_header":"Errore nel tentativo di annullamento dell’iscrizione","unsubscribe_info_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_info_header":"Hai già annullato l’iscrizione","unsubscribe_success_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_success_header":"Iscrizione annullata con successo"},"ja-JP":{"avatarmenu_logout":"ログアウト","avatarmenu_selectlanguage":"言語を選択","avatarmenu_signin":"サインイン","avatarmenu_signup":"サインアップ","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"このガイドラインでは、プレイヤーの体験が公平で、尊重され、安全であることを保証するため弊社が強化する方針ならびに、弊社が支持する価値観を説明しています。","community_guidelines_tile_header":"コミュニティガイドラインをチェックする","email_settings_cta":"設定を更新","handshake_icon_alt_text":"握手のアイコン","heartbook_icon_alt_text":"ハートのついた本のアイコン","quickmenu_games":"ゲーム","quickmenu_home":"ホーム","quickmenu_newswire":"Newswire","resources_last_updated_date":"2024年11月18日","resources_tile_description":"あなた自身もしくは知人が困っており、ヘルプが必要な場合の情報を見つける。","resources_tile_header":"安全性に関する情報をチェックする","rockstargames_company_info_br":"ブラジル","rockstargames_company_info_cz":"チェコ","rockstargames_company_info_de":"ドイツ","rockstargames_company_info_display_for_country":"{Country}のページを表示する","rockstargames_company_info_es":"スペイン","rockstargames_company_info_fr":"フランス","rockstargames_company_info_it":"イタリア","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韓国","rockstargames_company_info_mx":"メキシコ","rockstargames_company_info_nl":"オランダ","rockstargames_company_info_pl":"ポーランド","rockstargames_company_info_ru":"ロシア連邦","rockstargames_company_info_sa":"サウジアラビア","rockstargames_company_info_tw":"台湾","rockstargames_company_info_us":"アメリカ","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"ダウンロード {item} {collection}","rockstargames_downloads_dimensions_label":"{width}×{height}ピクセル","rockstargames_downloads_go_back":"戻る","rsg_no_results":"申し訳ありません、結果が見つかりませんでした。","rsg_total_results_message":"{Query}でフィルターした{Tab}を表示中","safety_get_support_button":"サポートを依頼する","safety_learn_more_button":"詳細を見る","support_chat_icon_alt_text":"サポートチャットのアイコン","support_tile_description":"アカウントやデータ、プライバシー設定の管理についての追加アシストはカスタマーサポートページをご覧ください。","support_tile_header":"アカウントアシストが必要ですか？","unsubscribe_error_description":"このURLは無効になっている可能性があります。アカウント設定のページでロックスター・ゲームスのメール受信設定を変更できます。","unsubscribe_error_header":"登録解除時にエラー","unsubscribe_info_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_info_header":"登録解除済みです","unsubscribe_success_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_success_header":"登録解除が完了しました"},"ko-KR":{"avatarmenu_logout":"로그아웃","avatarmenu_selectlanguage":"언어 선택","avatarmenu_signin":"로그인","avatarmenu_signup":"가입","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"공정, 상호 존중, 안전을 바탕으로 한 플레이어 경험을 제공하기 위해 당사에서 추구하는 가치 및 시행하는 정책을 정리한 가이드라인입니다.","community_guidelines_tile_header":"커뮤니티 가이드라인 살펴보기","email_settings_cta":"설정 변경","handshake_icon_alt_text":"악수 모양 아이콘","heartbook_icon_alt_text":"책과 하트 아이콘","quickmenu_games":"게임","quickmenu_home":"홈","quickmenu_newswire":"뉴스와이어","resources_last_updated_date":"2024년 11월 18일","resources_tile_description":"본인 및 주변인에게 도움이 필요하다면 이곳에서 관련 정보를 빠르게 찾아보실 수 있습니다.","resources_tile_header":"안전 관련 정보 살펴보기","rockstargames_company_info_br":"브라질","rockstargames_company_info_cz":"체코 공화국","rockstargames_company_info_de":"독일","rockstargames_company_info_display_for_country":"페이지 내용 표시 - {country}","rockstargames_company_info_es":"스페인","rockstargames_company_info_fr":"프랑스","rockstargames_company_info_it":"이탈리아","rockstargames_company_info_jp":"일본","rockstargames_company_info_kr":"대한민국","rockstargames_company_info_mx":"멕시코","rockstargames_company_info_nl":"네덜란드","rockstargames_company_info_pl":"폴란드","rockstargames_company_info_ru":"러시아 연방","rockstargames_company_info_sa":"사우디 아라비아","rockstargames_company_info_tw":"대만","rockstargames_company_info_us":"미국","rockstargames_company_info_zh":"중국","rockstargames_downloads_collections_download_text":"{collection} {item} 다운로드","rockstargames_downloads_dimensions_label":"{width} x {height} 픽셀입니다.","rockstargames_downloads_go_back":"뒤로가기","rsg_no_results":"죄송합니다, 결과가 없습니다.","rsg_total_results_message":"{Query} 필터를 적용한 {Tab} 보기","safety_get_support_button":"도움 요청하기","safety_learn_more_button":"더 알아보기","support_chat_icon_alt_text":"지원 채팅 아이콘","support_tile_description":"계정, 데이터, 개인 정보 보호 설정을 관리하는 데 추가로 도움이 필요하시다면 저희의 고객 지원 페이지를 방문해주세요.","support_tile_header":"계정 관련 도움이 필요하신가요?","unsubscribe_error_description":"이 URL은 유효하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경할 수 있습니다.","unsubscribe_error_header":"구독 취소 오류","unsubscribe_info_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_info_header":"이미 구독 취소를 하였습니다","unsubscribe_success_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_success_header":"구독 취소 완료"},"pl-PL":{"avatarmenu_logout":"Wyloguj się","avatarmenu_selectlanguage":"Wybierz język","avatarmenu_signin":"Zaloguj się","avatarmenu_signup":"Zarejestruj się","community_guidelines_image_alt_text":"Zachowuj się grzecznie!","community_guidelines_tile_description":"Ten regulamin opisuje wartości, jakimi się kierujemy, jak również zasady, których przestrzegamy, aby zapewnić graczom sprawiedliwe, bezpieczne i pełne szacunku doświadczenia.","community_guidelines_tile_header":"Przeglądaj regulamin społeczności","email_settings_cta":"Aktualizuj swoje preferencje","handshake_icon_alt_text":"Ikona uścisku dłoni","heartbook_icon_alt_text":"Zapisz przy pomocy ikony serca","quickmenu_games":"Gry","quickmenu_home":"Strona główna","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 Listopada 2024","resources_tile_description":"Odszukaj szybko informacje, jeżeli ty lub ktoś, kogo znasz, potrzebuje pomocy.","resources_tile_header":"Przeglądaj informacje dotyczące bezpieczeństwa","rockstargames_company_info_br":"Brazylia","rockstargames_company_info_cz":"Czechy","rockstargames_company_info_de":"Niemcy","rockstargames_company_info_display_for_country":"Pokaż informacje dla:","rockstargames_company_info_es":"Hiszpania","rockstargames_company_info_fr":"Francja","rockstargames_company_info_it":"Włochy","rockstargames_company_info_jp":"Japonia","rockstargames_company_info_kr":"Korea Południowa","rockstargames_company_info_mx":"Meksyk","rockstargames_company_info_nl":"Holandia","rockstargames_company_info_pl":"Polska","rockstargames_company_info_ru":"Rosja","rockstargames_company_info_sa":"Arabia Saudyjska","rockstargames_company_info_tw":"Tajwan","rockstargames_company_info_us":"Stany Zjednoczone","rockstargames_company_info_zh":"Chiny","rockstargames_downloads_collections_download_text":"Pobierz: {item} {collection}","rockstargames_downloads_dimensions_label":"{width} na {height} pikseli.","rockstargames_downloads_go_back":"Wróć","rsg_no_results":"Brak wyników.","rsg_total_results_message":"Wyświetlono: {Tab} filtrowanie: {Query}","safety_get_support_button":"Uzyskaj wsparcie","safety_learn_more_button":"Dowiedz się więcej","support_chat_icon_alt_text":"Ikona kontaku ze wsparciem","support_tile_description":"W celu uzyskania dodatkowej pomocy dotyczącej obsługi konta lub ustawień prywatności odwiedź naszą stronę wsparcia.","support_tile_header":"Potrzebujesz wsparcia dotyczącego konta?","unsubscribe_error_description":"Odnośnik może być nieprawidłowy. Możesz zmienić swoje preferencje mailingowe w menu ustawień konta Rockstar Games.","unsubscribe_error_header":"Błąd podczas rezygnacji","unsubscribe_info_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Zapisz się ponownie lub dokonaj innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_info_header":"Subskrypcja jest już nieaktywna","unsubscribe_success_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Możesz zapisać się ponownie lub dokonać innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_success_header":"Zrezygnowano z subskrypcji"},"pt-BR":{"avatarmenu_logout":"Sair","avatarmenu_selectlanguage":"Selecione um idioma","avatarmenu_signin":"Iniciar sessão","avatarmenu_signup":"Inscrever-se","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Estas regras detalham os valores e políticas que mantêm a experiência de jogo justa, respeitosa e segura.","community_guidelines_tile_header":"Explore as Regras da Comunidade","email_settings_cta":"Atualizar preferências","handshake_icon_alt_text":"Ícone de aperto de mão","heartbook_icon_alt_text":"Ícone de livro com coração","quickmenu_games":"Jogos","quickmenu_home":"Início","quickmenu_newswire":"Boletim","resources_last_updated_date":"18 de novembro de 2024","resources_tile_description":"Encontre recursos rapidamente se você ou alguém que você conhece precisa de ajuda.","resources_tile_header":"Explore os recursos de segurança","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Tcheca","rockstargames_company_info_de":"Alemanha","rockstargames_company_info_display_for_country":"Exibir informações da página para {country}","rockstargames_company_info_es":"Espanha","rockstargames_company_info_fr":"França","rockstargames_company_info_it":"Itália","rockstargames_company_info_jp":"Japão","rockstargames_company_info_kr":"Coreia do Sul","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Baixos","rockstargames_company_info_pl":"Polônia","rockstargames_company_info_ru":"Federação da Rússia","rockstargames_company_info_sa":"Arábia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Baixar {collection} de {item}","rockstargames_downloads_dimensions_label":"{width} x {height} pixels.","rockstargames_downloads_go_back":"Voltar","rsg_no_results":"Nenhum resultado foi encontrado.","rsg_total_results_message":"Mostrando {Tab} com o filtro {Query}","safety_get_support_button":"Acionar suporte","safety_learn_more_button":"Saiba mais","support_chat_icon_alt_text":"Ícone de chat de suporte","support_tile_description":"Para mais ajuda com o gerenciamento da sua conta, dados e configurações de privacidade, acesse a página de suporte.","support_tile_header":"Precisa de ajuda com a sua conta?","unsubscribe_error_description":"Esta URL pode ser inválida. Você pode aplicar mudanças às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_error_header":"Erro ao cancelar inscrição","unsubscribe_info_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_info_header":"Você já cancelou a inscrição","unsubscribe_success_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_success_header":"Inscrição cancelada"},"ru-RU":{"avatarmenu_logout":"Выход","avatarmenu_selectlanguage":"Выбрать язык","avatarmenu_signin":"Войти","avatarmenu_signup":"Регистрация","community_guidelines_image_alt_text":"Надпись Say Sorry, Be Nice","community_guidelines_tile_description":"В этих правилах изложены ценности, которых мы придерживаемся, и политики, которые мы применяем для обеспечения честной, уважительной и безопасной игры для всех.","community_guidelines_tile_header":"Ознакомьтесь с правилами сообщества","email_settings_cta":"Изменить настройки","handshake_icon_alt_text":"Значок рукопожатия","heartbook_icon_alt_text":"Значок книги с сердцем","quickmenu_games":"Игры","quickmenu_home":"Главная страница","quickmenu_newswire":"Новостная лента","resources_last_updated_date":"18 ноября 2024 года","resources_tile_description":"Быстро найдите интернет-ресурсы, если вы или кто-то из ваших знакомых испытывает трудности и нуждается в помощи.","resources_tile_header":"Ознакомьтесь с ресурсами по психологической поддержке","rockstargames_company_info_br":"Бразилии","rockstargames_company_info_cz":"Чехии","rockstargames_company_info_de":"Германии","rockstargames_company_info_display_for_country":"Показать содержимое страницы для {country}","rockstargames_company_info_es":"Испании","rockstargames_company_info_fr":"Франции","rockstargames_company_info_it":"Италии","rockstargames_company_info_jp":"Японии","rockstargames_company_info_kr":"Южной Кореи","rockstargames_company_info_mx":"Мексики","rockstargames_company_info_nl":"Нидерландов","rockstargames_company_info_pl":"Польши","rockstargames_company_info_ru":"России","rockstargames_company_info_sa":"Саудовской Аравии","rockstargames_company_info_tw":"Тайваня","rockstargames_company_info_us":"США","rockstargames_company_info_zh":"Китая","rockstargames_downloads_collections_download_text":"Загрузить: «{item}» из коллекции «{collection}».","rockstargames_downloads_dimensions_label":"{width} на {height} пикселей.","rockstargames_downloads_go_back":"Вернуться","rsg_no_results":"Результаты не найдены.","rsg_total_results_message":"Поиск в категории {Tab} с фильтром «{Query}»","safety_get_support_button":"Обратиться в службу поддержки","safety_learn_more_button":"Подробности","support_chat_icon_alt_text":"Значок службы поддержки","support_tile_description":"Для получения дополнительной помощи по управлению вашей учетной записью или данными и настройками конфиденциальности посетите нашу страницу поддержки клиентов.","support_tile_header":"Нужна помощь с учетной записью?","unsubscribe_error_description":"Возможно, этот адрес недействителен. Вы можете изменить настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_error_header":"Ошибка при отмене подписки","unsubscribe_info_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_info_header":"Вы уже отменили подписку","unsubscribe_success_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_success_header":"Подписка отменена"},"zh-CN":{"avatarmenu_logout":"登出","avatarmenu_selectlanguage":"选择一种语言","avatarmenu_signin":"登录","avatarmenu_signup":"注册","community_guidelines_image_alt_text":"说声对不起，做个好人","community_guidelines_tile_description":"指南中列出了我们秉持的价值观和遵循的政策原则，为玩家营造公平、尊重和安全的游玩体验。","community_guidelines_tile_header":"查看《社区指南》","email_settings_cta":"更新偏好设置","handshake_icon_alt_text":"握手图标","heartbook_icon_alt_text":"书上印着一颗心的图标","quickmenu_games":"游戏","quickmenu_home":"主页","quickmenu_newswire":"新闻专线","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"如果您自己，或者您知道的其他人需要帮助，在这里可以快速找到相关内容。","resources_tile_header":"查看“安全”相关内容","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克","rockstargames_company_info_de":"德国","rockstargames_company_info_display_for_country":"显示{country}的页面信息","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法国","rockstargames_company_info_it":"意大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韩国","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷兰","rockstargames_company_info_pl":"波兰","rockstargames_company_info_ru":"俄罗斯联邦","rockstargames_company_info_sa":"沙特阿拉伯","rockstargames_company_info_tw":"台湾地区","rockstargames_company_info_us":"美国","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"下载 {item} 的 {collection}","rockstargames_downloads_dimensions_label":"{width} X {height} 像素","rockstargames_downloads_go_back":"返回","rsg_no_results":"抱歉，没有搜索结果。","rsg_total_results_message":"按 {filterList} 筛选显示 {type}","safety_get_support_button":"寻求支持","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支持对话图标","support_tile_description":"如果您在管理账户或数据，或者设置隐私选项时需要额外的帮助，请前往客户支持页面。","support_tile_header":"需要账户相关的帮助吗？","unsubscribe_error_description":"此网址可能无效。您可以在账户设置页面更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_error_header":"取消订阅出错","unsubscribe_info_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_info_header":"您已经取消订阅","unsubscribe_success_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_success_header":"取消订阅成功"},"zh-TW":{"avatarmenu_logout":"登出","avatarmenu_selectlanguage":"選擇語言","avatarmenu_signin":"登入","avatarmenu_signup":"註冊","community_guidelines_image_alt_text":"敢於道歉，友善待人","community_guidelines_tile_description":"我們以此守則簡述所遵循的價值觀，以及我們為了確保公平、尊重與安全的玩家體驗所執行的政策。","community_guidelines_tile_header":"探索社群守則","email_settings_cta":"更新偏好設定","handshake_icon_alt_text":"握手圖示","heartbook_icon_alt_text":"書本上有心形的圖示","quickmenu_games":"遊戲","quickmenu_home":"首頁","quickmenu_newswire":"新聞放送","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"若您或您認識的人遭逢困難或需要協助，您可以快速尋找資源。","resources_tile_header":"探索安全資源","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克共和國","rockstargames_company_info_de":"德國","rockstargames_company_info_display_for_country":"顯示頁面資訊：{country}","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法國","rockstargames_company_info_it":"義大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"南韓","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷蘭","rockstargames_company_info_pl":"波蘭","rockstargames_company_info_ru":"俄羅斯聯邦","rockstargames_company_info_sa":"沙烏地阿拉伯","rockstargames_company_info_tw":"台灣","rockstargames_company_info_us":"美國","rockstargames_company_info_zh":"中國","rockstargames_downloads_collections_download_text":"下載「{item}」的「{collection}」","rockstargames_downloads_dimensions_label":"像素：{width} x {height}。","rockstargames_downloads_go_back":"返回","rsg_no_results":"很抱歉，無相符的搜尋結果。","rsg_total_results_message":"正在顯示 {Tab}，搜尋條件為 {Query}","safety_get_support_button":"取得支援","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支援文字對話圖示","support_tile_description":"如需管理您帳戶、資料或隱私權設定的額外協助，請造訪我們的客戶支援頁面。","support_tile_header":"需要帳戶協助？","unsubscribe_error_description":"這個網址可能無效。您可以在帳戶設定頁面變更您的 Rockstar Games 電子郵件偏好設定。","unsubscribe_error_header":"取消訂閱錯誤","unsubscribe_info_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_info_header":"您已經取消訂閱。","unsubscribe_success_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_success_header":"取消訂閱成功"}}')
    },
    57386: (e, a, s) => {
      s.d(a, {
        A: () => c
      });
      var n = s(42295),
        o = s(62229),
        t = s(87592),
        r = s(34100);
      class i extends o.Component {
        constructor(e) {
          super(e), this.state = {
            error: {
              code: null,
              message: null
            }
          }
        }
        componentDidUpdate(e) {
          this.props.error && e.error !== this.props.error && this.setState({
            ...this.state,
            error: this.props.error
          })
        }
        static getDerivedStateFromError(e) {
          const a = {
            message: e?.message ? e.toString() : "Something has gone horribly awry.",
            code: e?.code ?? 399
          };
          return 399 === a.code && ((0, t.captureMessage)("Notorious 399 Error", t.Severity.Error), (0, t.addBreadcrumb)({
            category: "ErrorBoundary",
            message: "E399 triggered",
            data: a
          })), {
            error: a
          }
        }
        render() {
          return null !== this.state.error.code ? (0, n.jsx)(r.default, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const c = (e, a = null) => function(s) {
        return (0, n.jsx)(i, {
          header: a,
          children: (0, n.jsx)(e, {
            ...s
          })
        })
      }
    },
    66628: (e, a, s) => {
      s.d(a, {
        Ek: () => t,
        UN: () => o,
        b$: () => i,
        wk: () => r
      });
      var n = s(95966);
      const o = ({
          path: e
        }) => window.self !== window.top || (["/gifs", "/screenshot-viewer", "/VI", "/videoplayer"].find((a => e.includes(a))) ?? []).length > 0,
        t = ({
          path: e
        }) => (["/gta-online/license-plates", "/VI"].find((a => e.includes(a))) ?? []).length > 0,
        r = (0, n.makeVar)({
          breadcrumb: {
            links: [],
            filter: ""
          },
          error: {
            message: window?.errorFromServer?.message ?? null,
            code: window?.errorFromServer?.code ?? null
          },
          gameSiteNavOpen: !1,
          loading: !1,
          navOpen: !1,
          headerHidden: o({
            path: document.location.pathname
          }),
          footerHidden: t({
            path: document.location.pathname
          }),
          normalLogo: !0,
          search: ""
        }),
        i = () => {
          const e = (0, n.useState)(),
            a = (0, n.useMutateState)();
          return {
            state: e,
            toggleNavOpen: (s = null) => {
              const {
                navOpen: n
              } = e;
              a({
                navOpen: null !== s ? s : !n
              })
            },
            clearError: () => {
              a({
                error: {
                  code: null,
                  message: null
                }
              })
            },
            setBreadcrumb: (s = [], n = "") => {
              a({
                breadcrumb: {
                  ...e.breadcrumb,
                  links: s,
                  filter: n
                }
              })
            },
            setLoading: e => {
              a({
                loading: e
              })
            },
            setNavHidden: e => {
              a({
                navHidden: e
              })
            },
            setNormalLogo: e => {
              a({
                normalLogo: e
              })
            },
            setSearch: e => {
              a({
                search: e
              })
            },
            setTitle: e => {
              const s = "Rockstar Games";
              let n = e;
              e.endsWith(s) || (n = `${e} - ${s}`), document.title = n, a({
                title: n
              })
            },
            setError: ({
              code: e,
              message: s
            } = {}) => {
              a({
                error: {
                  code: e,
                  message: s
                }
              })
            },
            setFooterHidden: e => {
              a({
                footerHidden: e
              })
            },
            setHeaderHidden: e => {
              a({
                headerHidden: e
              })
            },
            updateGameData: ({
              base: s = null,
              navOpen: n = !1
            }) => {
              const o = {
                ...e.gameData
              };
              null !== s && (o.base = s.replace(/\/$/, "")), null !== n && (o.navOpen = n), a({
                gameData: o
              })
            }
          }
        }
    },
    67050: (e, a, s) => {
      s.d(a, {
        A: () => i
      });
      var n = s(42295),
        o = s(62229),
        t = s(9623),
        r = s(95966);
      const i = (0, r.withTranslations)((({
        t: e
      }) => {
        const [a] = (0, o.useState)(""), s = (0, t.useNavigate)(), i = (0, r.useMutateState)();
        return (0, n.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), i({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const a = e.currentTarget.elements.namedItem("q").value;
            s(`/search?q=${a}`)
          },
          role: "search",
          children: [(0, n.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, n.jsx)("input", {
            autoComplete: "off",
            defaultValue: a,
            enterKeyHint: "search",
            name: "q",
            placeholder: e("Search Rockstar Games")
          })]
        })
      }))
    },
    87790: (e, a, s) => {
      s.d(a, {
        b: () => n.b$
      });
      var n = s(66628)
    }
  }
]);