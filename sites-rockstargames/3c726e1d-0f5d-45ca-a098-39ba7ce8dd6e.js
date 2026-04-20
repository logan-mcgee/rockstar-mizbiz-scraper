try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3c726e1d-0f5d-45ca-a098-39ba7ce8dd6e", e._sentryDebugIdIdentifier = "sentry-dbid-3c726e1d-0f5d-45ca-a098-39ba7ce8dd6e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [229], {
    2688: (e, a, t) => {
      var n = t(42295),
        s = t(58136),
        o = t(9827),
        r = t(71127),
        i = t(10181),
        c = t(87927),
        l = t(41263),
        _ = t(71617),
        u = t(77053),
        d = t(56990),
        m = t(61874),
        g = t(12310);
      const p = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg",
        h = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg",
        k = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg";
      var f = t(52542),
        b = "var(--_1k6ojor0)";
      const y = "nav-dropdown",
        w = (e, a, t, n) => ({
          event: e || "nav_click",
          link_url: a,
          text: t,
          element_placement: `Global Nav > ${n}`?.toLowerCase()
        }),
        v = ({
          globalNavigationComponent: e,
          gamesMenuComponent: a,
          link: t,
          gaEvent: o,
          gaBreadCrumb: r
        }) => {
          const c = (0, i.useNavigate)(),
            {
              dispatch: l
            } = (0, s.useRockstarEventDispatcher)(),
            {
              track: _
            } = (0, m.useGtmTrack)(),
            u = e,
            d = a,
            g = `${t?.location?.domain||""}${t?.location?.path||""}`,
            p = r ? `${r} > ${t.gaText}` : t.gaText,
            h = e => {
              _(w(o, g, t.gaText, p)), t.onClickCallback?.(e)
            };
          return t.location || "nav-no-link" !== t.type ? "games-menu" === t.type && d ? (0, n.jsx)(d.GamesMenuItem, {
            onNavigate: c,
            onClick: h,
            dataTestId: t.dataTestId
          }, "games-menu") : t.type === y ? (0, n.jsxs)(u.MenuItem, {
            children: [(0, n.jsx)(u.MenuTrigger, {
              "data-testid": t.dataTestId,
              onClick: h,
              children: t.text
            }), (0, n.jsx)(u.MenuContent, {
              children: (0, n.jsx)(u.MenuSub, {
                children: (0, n.jsx)(u.MenuList, {
                  children: t.children?.map(a => (0, n.jsx)(v, {
                    globalNavigationComponent: e,
                    link: a,
                    gaEvent: o,
                    gaBreadCrumb: p
                  }, a.text))
                })
              })
            })]
          }, t.text) : t?.location?.domain || t.isLegacy ? (0, n.jsx)(u.MenuItem, {
            children: (0, n.jsx)(u.MenuLink, {
              onClick: h,
              external: "nav-external" === t.type,
              active: (0, i.matchPath)(g, location.pathname),
              target: t.target,
              href: g,
              "data-testid": t.dataTestId,
              children: t.text
            })
          }, t.text) : (0, n.jsx)(u.MenuItem, {
            children: (0, n.jsx)(u.MenuLink, {
              external: "nav-external" === t.type,
              active: (0, i.matchPath)(g, location.pathname),
              asChild: !0,
              children: (0, n.jsx)(i.Link, {
                target: t.target,
                to: g,
                onClick: h,
                "data-testid": t.dataTestId,
                children: t.text
              })
            })
          }, t.text) : (0, n.jsx)(u.MenuItem, {
            children: (0, n.jsx)(u.MenuLink, {
              asChild: !0,
              children: (0, n.jsx)("button", {
                onClick: e => {
                  _(w(o, "", t.gaText, p)), t.dataTestId && l(t.dataTestId), t.onClickCallback?.(e)
                },
                "data-testid": t.dataTestId,
                children: t.text
              })
            })
          }, t.text)
        },
        x = ({
          globalNavigationComponent: e
        }) => {
          const a = e,
            {
              charactersNeeded: t
            } = (0, m.useRockstarUserState)(),
            {
              data: s
            } = (0, m.useRockstarUser)();
          return "gtao" !== t || 0 === (s.characters?.gtao ?? []).length ? null : (0, n.jsx)(a.AvatarMenuSection, {
            value: "open",
            children: (0, n.jsx)(g.CharacterProfile, {})
          })
        },
        j = ({
          globalNavigationComponent: e,
          target: a
        }) => {
          const t = e;
          return a.type === y ? (0, n.jsx)(t.SearchTargetDropdown, {
            title: a.text,
            value: a.value,
            children: a.targets.map(a => (0, n.jsx)(j, {
              globalNavigationComponent: e,
              target: a
            }, a.text))
          }) : (0, n.jsx)(t.SearchTarget, {
            value: a.value,
            title: a.text,
            children: a.text
          })
        },
        S = ({
          globalNavigationComponent: e,
          searchConfig: a,
          onSearch: t,
          getQueryFromUrl: s,
          isSearchPage: o
        }) => {
          const [c, l] = (0, r.useState)(""), [_, u] = (0, r.useState)(a.targets[0].value ?? ""), {
            search: d,
            pathname: m
          } = (0, i.useLocation)(), g = (0, i.useNavigate)(), p = e;
          (0, r.useEffect)(() => {
            if (o && (d || m)) {
              const [e, a] = s();
              l(e), u(a?.value || "")
            }
          }, [s, o, d, m]);
          const h = (e, a, n) => {
            if (!e) return;
            const s = t(e, a);
            s && (n?.(), s.startsWith("http") ? window.location.assign(s) : g(s))
          };
          return (0, n.jsx)(p.SearchBar, {
            onSearch: h,
            query: c,
            onQueryChange: l,
            target: _,
            onTargetChange: e => {
              h(c, e), u(e)
            },
            queryMin: 3,
            isSearchPage: o,
            children: (0, n.jsx)(p.SearchFilters, {
              children: a.targets.map(a => (0, n.jsx)(j, {
                globalNavigationComponent: e,
                target: a
              }, a.text))
            })
          })
        },
        C = {
          manhunt: "Man Hunt",
          maxpayne: "Max Payne",
          manhunt2: "Man Hunt 2",
          "la-noire": "L.A. NOIRE",
          rdo: "Red dead Online",
          gta: "Grand Theft Auto",
          wildmetal: "Wild Metal",
          maxpayne3: "Max Payne 3",
          "gta-online": "GTA Online",
          gta2: "Grand Theft Auto 2",
          "gta-trilogy": "GTA Trilogy",
          thewarriors: "The Warriors",
          tabletennis: "Table Tennis",
          italianjob: "The Italian Job",
          "gta-iv": "Grand Theft Auto IV",
          rdr2: "Red Dead Redemption 2",
          smugglersrun: "Smuggler's Run",
          midnightclub2: "Midnight Club 2",
          reddeadrevolver: "Red Dead Revolver",
          stateofemergency: "State of Emergency",
          grandtheftauto3: "Grand Theft Auto III",
          vicecity: "Grand Theft Auto: Vice City",
          reddeadredemption: "Red Dead Redemption",
          gtalondon: "Grand Theft Auto: London 1969",
          sanandreas: "Grand Theft Auto: San Andreas",
          midnightclub: "Midnight Club Street Racing",
          midnightclubLA: "Midnight Club: Los Angeles",
          midnightclub3: "Midnight Club 3: Dub Edition",
          "grandtheftauto-gba": "Grand Theft Auto Advance",
          skateanddestroy: "Thrasher: Skate and Destroy",
          maxpayne2: "Max Payne 2: The Fall of Max Payne",
          smugglersrunwarzones: "Smuggler's Run Warzones",
          chinatownwars: "Grand Theft Auto: Chinatown Wars",
          smugglersrun2: "Smuggler's Run 2: Hostile Territory",
          vicecitystories: "Grand Theft Auto: Vice City Stories",
          libertycitystories: "Grand Theft Auto: Liberty City Stories",
          episodesfromlibertycity: "Grand Theft Auto: Episodes from Liberty City"
        },
        z = ({
          brand: e,
          site: a,
          scale: t
        }) => (0, n.jsx)("img", {
          className: "_1k6ojor1",
          src: e,
          alt: C[a] ?? a,
          "data-brand": a,
          style: t ? (0, u.DI)({
            [b]: String(t)
          }) : {}
        }, e),
        M = (0, d.withIntl)(({
          navigationData: e,
          globalNavigationComponent: a,
          gamesMenuComponent: t,
          avatarMenuData: o,
          searchConfig: c,
          onSearch: l,
          getQueryFromUrl: u,
          errorMessage: g,
          localisedStrings: f
        }) => {
          const b = a,
            y = (0, s.useLocale)(),
            j = (0, i.useLocation)(),
            {
              loggedIn: C,
              data: M
            } = (0, m.useRockstarUser)(),
            R = (0, i.useNavigate)(),
            {
              track: T
            } = (0, m.useGtmTrack)(),
            E = (e, a, t, n) => () => {
              T(w(e, n, a, t))
            },
            [I, L] = (0, r.useState)("dark"),
            [N, G] = (0, r.useState)({}),
            P = (A = j.pathname, ["/", "/gta-online/mansions"].includes(A) ? "transparent" : "default");
          var A;
          const q = (e => [/\/account.*/].some(a => new RegExp("^" + a.source).test(e)) ? "visible" : void 0)(j.pathname),
            H = e => ["/"].includes(e);
          (0, r.useLayoutEffect)(() => {
            document.body.setAttribute("data-color-mode", P)
          }, [P]), (0, r.useEffect)(() => {
            const e = e => {
              e.origin === window.origin && "navColorTheme" === e.data.source && e.data.mode ? L(H(j.pathname) ? e.data.mode : "dark") : e.origin === window.origin && "dynamicSlideColors" === e.data.source && e.data.values && G(H(j.pathname) ? e.data.values : {})
            };
            return window.addEventListener("message", e), () => {
              window.removeEventListener("message", e), L("dark")
            }
          }, []);
          const D = (0, r.useMemo)(() => (0, s.getConfigForDomain)(), []),
            {
              currentCharId: B = 0,
              setSelectedCharacterTuple: U
            } = (0, m.useRockstarUserState)(),
            $ = (0, r.useMemo)(() => {
              const a = e.reduce((e, a) => {
                const t = a.appearancePaths.find(e => (0, i.matchPath)(e, j.pathname));
                return t && void 0 === e ? {
                  ...a,
                  matchedPath: t
                } : void 0 === e ? void 0 : e
              }, void 0);
              return a
            }, [e, j.pathname]);
          (0, r.useEffect)(() => {
            const e = M?.characters?.gtao ?? [];
            if (null !== C && !e.length) return void U(!1);
            if (null == B || !e.length) return;
            const a = e?.[B] ?? e?.[0] ?? null;
            U(!!a?.platform && [a.platform, a.characterSlot])
          }, [B, M, C]);
          const F = $?.matchedPath.options.isSearchPage || !1,
            O = (0, r.useMemo)(() => d.locales.find(e => e.iso.toLowerCase() === (0, s.toScLocaleString)(y))?.label, [d.locales]),
            Q = (0, r.useMemo)(() => `${(0,s.getBase)()}${j?.pathname}`.replace(/\/\//g, "/"), [j?.pathname]);
          return (0, n.jsx)(b.Root, {
            brand: $?.brand ? (0, n.jsx)(z, {
              brand: $.brand,
              site: $.site,
              scale: $.brandScale
            }) : null,
            brandTitle: $?.brandTitle,
            mode: P,
            navColorTheme: H(j.pathname) ? I : "dark",
            dynamicSlideStyles: H(j.pathname) ? N : {},
            simpleMenu: $?.simpleMenu,
            forceVisibility: q,
            children: (0, n.jsxs)(b.Header, {
              children: [(0, n.jsx)(b.SiteTitle, {
                quickAccessHidden: $?.hideQuickAccess,
                onNavigate: R,
                children: j.pathname.length > 0 && !$?.hideQuickAccess && (0, n.jsxs)(b.QuickMenu, {
                  children: [(0, n.jsx)(b.MenuItem, {
                    children: (0, n.jsx)(b.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(i.Link, {
                        to: "/",
                        onClick: E("", "home", "", "/"),
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
                        onClick: E("", "games", "", "/games"),
                        children: [(0, n.jsx)(b.MenuIcon, {
                          src: h,
                          alt: f.quickMenuGames
                        }), f.quickMenuGames]
                      })
                    })
                  }), (0, n.jsx)(b.MenuItem, {
                    children: (0, n.jsx)(b.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(i.Link, {
                        to: "/newswire",
                        onClick: E("", "newswire", "", "/newswire"),
                        children: [(0, n.jsx)(b.MenuIcon, {
                          src: k,
                          alt: f.quickMenuNewswire
                        }), f.quickMenuNewswire]
                      })
                    })
                  })]
                })
              }), (0, n.jsxs)(b.MobileMenu, {
                children: [!0 !== $.hideSearch && (0, n.jsxs)(n.Fragment, {
                  children: [(0, n.jsx)(S, {
                    globalNavigationComponent: a,
                    searchConfig: c,
                    onSearch: l,
                    getQueryFromUrl: u,
                    isSearchPage: F,
                    errorMessage: g
                  }), (0, n.jsx)(b.SearchError, {
                    errorMessage: g
                  })]
                }), (0, n.jsx)(b.MobileMenuNav, {
                  children: $?.links.map(e => (0, n.jsx)(v, {
                    globalNavigationComponent: b,
                    gamesMenuComponent: t,
                    link: e
                  }, e.text))
                }), $?.cta && (0, n.jsx)(b.CallToAction, {
                  ...$.cta,
                  asChild: !0,
                  onClick: E($.cta.ga, $.cta.gaText, $.cta.gaText, `${$.cta.location.domain}${$.cta.location.path}`),
                  size: "LG",
                  children: (0, n.jsx)(i.Link, {
                    to: `${$.cta.location.domain}${$.cta.location.path}`,
                    reloadDocument: Boolean($.cta.location.domain),
                    children: $.cta.text
                  })
                }), !$?.hideQuickAccess && (0, n.jsxs)(b.QuickMenu, {
                  children: [(0, n.jsx)(b.MenuItem, {
                    children: (0, n.jsx)(b.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(i.Link, {
                        to: "/",
                        onClick: E("", "home", "Quick Access", "/"),
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
                        onClick: E("", "games", "Quick Access", "/games"),
                        children: [(0, n.jsx)(b.MenuIcon, {
                          src: h,
                          alt: f.quickMenuGames
                        }), f.quickMenuGames]
                      })
                    })
                  }), (0, n.jsx)(b.MenuItem, {
                    children: (0, n.jsx)(b.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(i.Link, {
                        to: "/newswire",
                        onClick: E("", "newswire", "Quick Access", "/newswire"),
                        children: [(0, n.jsx)(b.MenuIcon, {
                          src: k,
                          alt: f.quickMenuNewswire
                        }), f.quickMenuNewswire]
                      })
                    })
                  })]
                })]
              }), (0, n.jsx)(b.Menu, {
                children: $?.links.map(e => (0, n.jsx)(v, {
                  globalNavigationComponent: b,
                  gamesMenuComponent: t,
                  link: e
                }, e.text))
              }), (0, n.jsxs)(b.Actions, {
                children: [(0, n.jsx)(b.Breakpoint, {
                  showOn: "desktop",
                  children: $?.cta && (0, n.jsx)(b.CallToAction, {
                    ...$.cta,
                    asChild: !0,
                    onClick: E($.cta.ga, $.cta.gaText, $.cta.gaText, `${$.cta.location.domain}${$.cta.location.path}`),
                    children: (0, n.jsx)(i.Link, {
                      to: `${$.cta.location.domain}${$.cta.location.path}`,
                      reloadDocument: Boolean($.cta.location.domain),
                      children: $.cta.text
                    })
                  })
                }), !0 !== $.hideSearch && (0, n.jsxs)(b.Search, {
                  isSearchPage: F,
                  children: [(0, n.jsx)(b.SearchContainer, {
                    children: (0, n.jsx)(S, {
                      globalNavigationComponent: a,
                      searchConfig: c,
                      onSearch: l,
                      getQueryFromUrl: u,
                      isSearchPage: F,
                      errorMessage: g
                    })
                  }), (0, n.jsx)(b.SearchError, {
                    errorMessage: g
                  })]
                }), (0, n.jsxs)(b.AvatarMenu, {
                  avatarIconUrl: M?.avatar,
                  nickname: M?.nickname,
                  isLoggedIn: C,
                  onOpenChange: e => {
                    T({
                      event: "account_menu_click",
                      element_placement: "account menu",
                      text: e ? "open" : "close"
                    })
                  },
                  children: [C && (0, n.jsx)(x, {
                    globalNavigationComponent: a
                  }), (0, n.jsx)(b.AvatarMenuSection, {
                    value: "open",
                    children: (0, n.jsx)(b.AvatarMenuSectionContent, {
                      children: (0, n.jsx)(b.MenuList, {
                        children: C ? (0, n.jsxs)(n.Fragment, {
                          children: [M.nickname && (0, n.jsx)(b.AvatarMenuSectionHeader, {
                            children: M.nickname
                          }), o.loggedInLinks.map(e => (0, n.jsx)(v, {
                            globalNavigationComponent: b,
                            link: e,
                            gaEvent: "account_menu_click",
                            gaBreadCrumb: "account menu"
                          }, e.text)), (0, n.jsx)(v, {
                            globalNavigationComponent: b,
                            link: o.helpItem,
                            gaEvent: "account_menu_click",
                            gaBreadCrumb: "account menu"
                          }), (0, n.jsx)(b.MenuItem, {
                            children: (0, n.jsx)(b.MenuLink, {
                              href: `${D.logout}?returnUrl=/`,
                              "data-testid": "logoutButton",
                              "data-logged-in": "true",
                              onClick: E("account_menu_click", "log out", "account menu", `${D.logout}?returnUrl=/`),
                              children: f.avatarMenuSignOut
                            })
                          })]
                        }) : (0, n.jsxs)(n.Fragment, {
                          children: [(0, n.jsx)(b.MenuItem, {
                            children: (0, n.jsx)(b.MenuLink, {
                              href: `${D.login}?returnUrl=${Q}&lang=${(0,s.toScLocaleString)(y)}`,
                              "data-testid": "loginLink",
                              "data-logged-in": "false",
                              onClick: E("account_menu_click", "sign in", "account menu", `${D.login}?returnUrl=${Q}&lang=${(0,s.toScLocaleString)(y)}`),
                              children: f.avatarMenuSignIn
                            })
                          }), (0, n.jsx)(b.MenuItem, {
                            children: (0, n.jsx)(b.MenuLink, {
                              href: `${D.signup}&returnUrl=${Q}&lang=${(0,s.toScLocaleString)(y)}`,
                              "data-testid": "signUpLink",
                              onClick: E("account_menu_click", "sign up", "account menu", `${D.signup}&returnUrl=${Q}&lang=${(0,s.toScLocaleString)(y)}`),
                              children: f.avatarMenuSignUp
                            })
                          }), (0, n.jsx)(v, {
                            globalNavigationComponent: b,
                            link: o.helpItem,
                            gaEvent: "account_menu_click",
                            gaBreadCrumb: "account menu"
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
                          children: O ?? f.avatarMenuSelectLanguage
                        })]
                      })
                    }), (0, n.jsx)(b.AvatarMenuSectionContent, {
                      children: (0, n.jsx)(b.MenuList, {
                        children: d.locales.map(e => (0, n.jsx)(b.MenuItem, {
                          lang: e.iso,
                          testId: `header-language-selector-${e.subdomaincom}`,
                          children: (0, n.jsx)(b.MenuLink, {
                            onClick: () => (0, d.onLanguageChange)({
                              selectedLocale: e
                            }),
                            onKeyDown: a => ((e, a) => {
                              "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), (0, d.onLanguageChange)({
                                selectedLocale: a
                              }))
                            })(a, e),
                            tabIndex: 0,
                            children: e.label
                          })
                        }, e.label))
                      })
                    })]
                  })]
                })]
              })]
            })
          })
        }, f);
      var R = t(6828),
        T = t.n(R),
        E = t(85819);
      const I = "__MFE_GLOBAL_HOOK__",
        L = () => {
          const e = window;
          e[I]?.history || (e[I] = Object.assign(e[I] || {}, {
            history: (0, E.zR)()
          }))
        },
        N = () => {
          const {
            pathname: e
          } = (0, i.useLocation)();
          return (0, r.useEffect)(() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout(() => {
              e.scrollTop = 0
            }, 0)
          }, [e]), null
        },
        G = (e = [], a, t) => {
          const n = (0, r.useRef)(null),
            s = (0, r.useRef)(new Set),
            o = (0, r.useRef)([]),
            i = (0, r.useRef)(0),
            c = (0, r.useRef)(0),
            l = (0, r.useRef)(!1),
            _ = (0, r.useMemo)(() => Array.from(new Set(e.filter(e => e >= 0 && e <= 100))).sort((e, a) => e - a), [e]);
          return (0, r.useEffect)(() => {
            s.current = new Set, o.current = _.slice()
          }, [_]), (0, r.useEffect)(() => {
            n.current = t ?? window
          }, [t]), (0, r.useEffect)(() => {
            const e = n.current;
            if (!e) return;
            const r = () => {
              l.current || (l.current = !0, requestAnimationFrame(() => {
                (() => {
                  const {
                    scrollTop: n,
                    scrollHeight: l,
                    percent: _
                  } = (() => {
                    const e = t,
                      a = document.documentElement,
                      n = document.body,
                      s = e ? e.scrollTop : a.scrollTop || n.scrollTop || window.scrollY || 0,
                      o = e ? e.scrollHeight : a.scrollHeight || n.scrollHeight || 0,
                      r = e ? e.clientHeight : a.clientHeight || window.innerHeight || 0,
                      i = Math.max(1, o - r);
                    return {
                      scrollTop: s,
                      scrollHeight: o,
                      percent: Math.max(0, Math.min(100, s / i * 100))
                    }
                  })();
                  i.current = _, c.current = n;
                  const u = o.current.find(e => _ >= e);
                  if (!u) return;
                  if (s.current.has(u)) return;
                  s.current.add(u), o.current = o.current.filter(e => e !== u);
                  const d = l * (u / 100);
                  a?.({
                    scrollY: u,
                    scrollLength: d
                  }), 0 === o.current.length && e.removeEventListener("scroll", r, {
                    capture: !1
                  })
                })(), l.current = !1
              }))
            };
            return r(), e.addEventListener("scroll", r, {
              passive: !0
            }), () => {
              e.removeEventListener("scroll", r, {
                capture: !1
              })
            }
          }, [a, t, _.join(",")]), {
            scrollY: i.current,
            scrollLength: c.current
          }
        },
        P = ({
          threshold: e,
          trackRef: a,
          children: t
        }) => {
          const {
            track: n
          } = (0, m.useGtmTrack)();
          return G(e, ({
            scrollY: e,
            scrollLength: a
          }) => {
            n({
              event: "page_scroll",
              scroll_depth: e,
              page_length: `${Math.round(a)}px`
            })
          }, a?.current ?? null), t
        };
      var A = t(99101),
        q = t.n(A),
        H = t(48586),
        D = t(1556),
        B = t.n(D);
      const U = ({
          modal: e
        }) => {
          const {
            content: a,
            className: t,
            height: s,
            onClose: o,
            rect: c = {
              left: 0,
              top: 0
            },
            contentStyle: l = {},
            contentClassName: _ = "",
            width: u,
            fadeIn: d = !0,
            cardIds: g,
            activeId: p,
            theme: h,
            title: k,
            gtm: f = {},
            aspectRatio: b = "default",
            cardDimensions: y
          } = e, {
            left: w,
            top: v
          } = c, x = g?.indexOf(p), [j, S] = (0, r.useState)(g?.length || 0), {
            track: C
          } = (0, m.useGtmTrack)(), z = null !== g && (g?.length || 0) > 1 && ("flag_bg" === h || "fob" === y?.size), M = window.location.href.includes("cms5"), [R, T] = (0, i.useSearchParams)(), [E, I] = (0, r.useState)(!1), [L, N] = (0, r.useState)(!1), [G, P] = (0, r.useState)(), A = e => {
            "number" == typeof e && g && e < g.length && e > -1 && T({
              info: g[e].toString()
            })
          }, D = () => {
            const e = "number" == typeof x && x > -1 ? x - 1 : 0;
            A(e), C({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: k?.toLowerCase(),
              position: x
            })
          }, U = () => {
            const e = "number" == typeof x && x > -1 ? x + 1 : 0;
            A(e), C({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: k?.toLowerCase(),
              position: x
            })
          };
          (0, r.useEffect)(() => {
            S(g?.length || 0)
          }, [g?.length]), (0, r.useEffect)(() => {
            null !== x && null !== g && A(x)
          }, [x, g]), (0, r.useEffect)(() => {
            const e = g?.findIndex(e => e === p);
            "number" == typeof e && (N(e <= 0), I(e >= j - 1))
          }, [g, p, j, R]);
          const [$] = (0, r.useState)({
            y: v,
            x: w,
            top: 0,
            left: 0,
            width: u,
            height: s,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: z ? "0" : ""
          }), F = {
            opacity: 1
          }, O = (0, r.useRef)(null), Q = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, V = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [K] = (0, r.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: z ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
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
          }), [W, J] = (0, r.useState)({
            initial: $,
            shown: K
          });
          (0, r.useEffect)(() => {
            J({
              initial: $,
              shown: K
            })
          }, [$, K]), (0, r.useEffect)(() => {
            const e = e => {
              "function" == typeof o && "Escape" === e.key && (o(), C({
                event: "modal_close",
                element_placement: k?.toLowerCase(),
                ...f
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }, []);
          const Y = () => {
              "function" == typeof o && (o(), C({
                event: "modal_close",
                element_placement: k?.toLowerCase(),
                ...f
              }))
            },
            Z = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const n = e.children[t];
                if (n.scrollHeight > n.clientHeight) return n;
                const s = Z(n, a - 1);
                if (s) return s
              }
              return null
            },
            X = e => {
              if (ae?.current?.children) {
                let a;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a;
                      return G?.queried ? a = G.element : (a = Z(e, 2), P({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ee = d ? 0 : 1,
            ae = (0, r.useRef)(null),
            te = (0, n.jsx)(H.motion.button, {
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
                Y()
              },
              onKeyDown: X,
              onKeyUp: X
            }),
            ne = Boolean(k),
            se = M ? r.Fragment : q();
          return (0, r.useMemo)(() => (0, n.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": z,
            "data-aspect-ratio": b,
            children: (0, n.jsx)(se, {
              children: (0, n.jsxs)("div", {
                id: "modal",
                "data-testid": "modal",
                "aria-modal": "true",
                "aria-label": ne ? k : void 0,
                role: "dialog",
                children: [(0, n.jsx)(H.motion.div, {
                  className: "rockstargames-sites-rockstargamescf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: F,
                  transition: Q,
                  onClick: () => Y()
                }), z && (0, n.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, n.jsxs)(H.motion.div, {
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
                      }), g?.length, " "]
                    }), (0, n.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: U,
                      disabled: E,
                      onKeyDown: X,
                      onKeyUp: X,
                      "data-autofocus": !0
                    })]
                  }), te]
                }), (0, n.jsx)(H.motion.div, {
                  className: "rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366",
                  ref: O,
                  initial: "initial",
                  animate: "shown",
                  variants: W,
                  transition: Q,
                  style: l,
                  children: (0, n.jsxs)(H.motion.div, {
                    className: B()("rockstargames-sites-rockstargamesa7d77f83f629e9ae93f6934c8ba007b0", t),
                    children: [!z && te, (0, n.jsx)(H.motion.div, {
                      className: B()("rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714", _),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: V,
                      ref: ae,
                      children: a
                    })]
                  })
                })]
              })
            })
          }), [a, x, l])
        },
        $ = [{}, () => {}],
        F = (0, s.setContextItem)({
          context: (0, r.createContext)($),
          key: "modalContext"
        }),
        O = ({
          children: e
        }) => {
          const [a, t] = (0, r.useState)(), {
            setBodyIsLocked: o
          } = (0, s.useBodyScrollable)("ModalProvider"), i = (0, r.useMemo)(() => a?.content ? (0, n.jsx)(U, {
            modal: a
          }) : null, [a]), c = () => o(!1);
          return (0, r.useEffect)(() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          }), []), (0, r.useEffect)(() => {
            o(!!i)
          }, [i]), (0, n.jsx)(F.Provider, {
            value: [i, t],
            children: e
          })
        };
      var Q = t(78066),
        V = t(50437),
        K = t(95342),
        W = t(57386),
        J = t(87790);
      const Y = (e, a = {}) => {
          const t = (0, r.lazy)(e),
            {
              key: s,
              ...o
            } = a;
          return (0, r.useMemo)(() => (0, n.jsx)(r.Suspense, {
            fallback: "",
            children: (0, n.jsx)(t, {
              ...o
            }, s)
          }), [s])
        },
        Z = (0, W.A)(() => {
          const {
            setError: e,
            state: a
          } = (0, J.b)(), {
            error: s
          } = a, {
            pathname: o
          } = (0, i.useLocation)();
          (0, r.useEffect)(() => {
            e()
          }, [o]), (0, r.useEffect)(() => {
            200 !== window?.env?.responseStatusCode && e({
              code: window.env.responseStatusCode
            })
          }, []);
          const c = {
            path: "*",
            element: Y(() => Promise.resolve().then(t.bind(t, 34100)), {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          };
          let l = [{
            path: "/",
            element: Y(() => t.e(8306).then(t.t.bind(t, 78306, 23)), {
              slug: "homepage",
              key: "homepage"
            })
          }, {
            path: "/account/*",
            element: Y(() => t.e(9311).then(t.t.bind(t, 69311, 23)))
          }, {
            path: "/careers-privacy",
            element: Y(() => Promise.all([t.e(8835), t.e(4070)]).then(t.bind(t, 64070)))
          }, {
            path: "/ccpa",
            element: Y(() => Promise.all([t.e(8835), t.e(4038)]).then(t.bind(t, 4038)))
          }, {
            path: "/community-resources",
            element: Y(() => Promise.all([t.e(3529), t.e(1352), t.e(6720), t.e(6663)]).then(t.bind(t, 77306)))
          }, {
            path: "/community-resources/guidelines",
            element: Y(() => Promise.all([t.e(4346), t.e(3529), t.e(1352), t.e(6720), t.e(6566)]).then(t.bind(t, 90777)))
          }, {
            path: "/community-resources/additional-resources",
            element: Y(() => Promise.all([t.e(4346), t.e(3529), t.e(1352), t.e(6720), t.e(5579)]).then(t.bind(t, 8982)))
          }, {
            path: "/community-resources/online-comms-privacy",
            element: Y(() => Promise.all([t.e(4346), t.e(3529), t.e(1352), t.e(6720), t.e(644)]).then(t.bind(t, 20879)))
          }, {
            path: "/community-resources/how-to-report",
            element: Y(() => Promise.all([t.e(4346), t.e(3529), t.e(1352), t.e(6720), t.e(9339)]).then(t.bind(t, 3686)))
          }, {
            path: "/community-resources/keep-account-safe",
            element: Y(() => Promise.all([t.e(4346), t.e(3529), t.e(1352), t.e(6720), t.e(6547)]).then(t.bind(t, 5118)))
          }, {
            path: "/conduct",
            element: (0, n.jsx)(i.Navigate, {
              to: "/community-guidelines",
              replace: !0
            })
          }, {
            path: "/contact",
            element: Y(() => t.e(8813).then(t.bind(t, 38813)))
          }, {
            path: "/cookies",
            element: Y(() => Promise.all([t.e(8835), t.e(4826)]).then(t.bind(t, 54826)))
          }, {
            path: "/corpinfo",
            element: Y(() => Promise.all([t.e(8835), t.e(7481)]).then(t.bind(t, 87481)))
          }, {
            path: "/VI",
            element: (0, n.jsx)(i.Navigate, {
              to: "/VI",
              replace: !0
            })
          }, {
            path: "/games",
            element: Y(() => Promise.all([t.e(4346), t.e(3529), t.e(1352), t.e(4424), t.e(2200)]).then(t.bind(t, 40807)))
          }, {
            path: "/games/:gameTitlelug",
            element: Y(() => Promise.all([t.e(1798), t.e(1352), t.e(137)]).then(t.bind(t, 40137)))
          }, {
            path: "/legal",
            element: Y(() => Promise.all([t.e(8835), t.e(8804)]).then(t.bind(t, 38804)))
          }, {
            path: "/gta-v/thankyou",
            element: Y(() => t.e(3771).then(t.bind(t, 53771)), {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: Y(() => t.e(3549).then(t.bind(t, 73549)))
          }, {
            path: "/community_event",
            element: Y(() => Promise.all([t.e(1352), t.e(1542)]).then(t.bind(t, 1542)))
          }, {
            path: "/reddeadredemption2/*",
            element: Y(() => t.e(4385).then(t.t.bind(t, 29147, 23)))
          }, {
            path: "/reddeadredemption/*",
            element: Y(() => t.e(7538).then(t.t.bind(t, 47538, 23)))
          }, {
            path: "/bully/scholarshipedition",
            element: (0, n.jsx)(i.Navigate, {
              to: "/bully",
              replace: !0
            })
          }, {
            path: "/bully/*",
            element: Y(() => t.e(5202).then(t.t.bind(t, 35202, 23)))
          }, {
            path: "/reddeadonline/thankyou",
            element: Y(() => t.e(3771).then(t.bind(t, 53771)), {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: Y(() => t.e(3137).then(t.t.bind(t, 53137, 23)))
          }, {
            path: "/downloads/*",
            element: Y(() => Promise.all([t.e(8863), t.e(1328)]).then(t.bind(t, 31328)))
          }, {
            path: "/reddeadonline/*",
            element: Y(() => t.e(3416).then(t.t.bind(t, 33416, 23)))
          }, {
            path: "/gifs/:hashId",
            element: Y(() => t.e(1626).then(t.t.bind(t, 41626, 23)))
          }, {
            path: "/gta-v/*",
            element: Y(() => t.e(6766).then(t.t.bind(t, 36766, 23)), {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: Y(() => t.e(6766).then(t.t.bind(t, 36766, 23)), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-plus",
            element: Y(() => t.e(981).then(t.bind(t, 40981)), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/mansions",
            element: Y(() => t.e(8306).then(t.t.bind(t, 78306, 23)), {
              slug: "/gta-online/mansions",
              key: "gta-online-mansions"
            })
          }, {
            path: "/gta-online/*",
            element: Y(() => t.e(6766).then(t.t.bind(t, 36766, 23)), {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy/*",
            element: Y(() => t.e(2405).then(t.t.bind(t, 12405, 23)))
          }, {
            path: "/gtatv/*",
            element: Y(() => t.e(8987).then(t.t.bind(t, 88987, 23)))
          }, {
            path: "/manuals",
            element: Y(() => Promise.all([t.e(6325), t.e(7131)]).then(t.bind(t, 87131)))
          }, {
            path: "/manuals/music",
            element: Y(() => Promise.all([t.e(6325), t.e(8863), t.e(4681)]).then(t.bind(t, 84681)))
          }, {
            path: "/newswire",
            element: Y(() => Promise.all([t.e(4346), t.e(1798), t.e(3529), t.e(1352), t.e(4424), t.e(7975)]).then(t.bind(t, 86546)))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: Y(() => t.e(8088).then(t.bind(t, 68088)))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: Y(() => t.e(8088).then(t.bind(t, 68088)))
          }, {
            path: "/privacy",
            element: Y(() => Promise.all([t.e(8835), t.e(7071)]).then(t.bind(t, 97071)))
          }, {
            path: "/refund-policy",
            element: Y(() => Promise.all([t.e(2030), t.e(3736)]).then(t.bind(t, 83736)))
          }, {
            path: "/rockstartv/*",
            element: Y(() => t.e(8778).then(t.t.bind(t, 78778, 23)))
          }, {
            path: "/screenshot-viewer/*",
            element: Y(() => t.e(6450).then(t.t.bind(t, 16450, 23)))
          }, {
            path: "/search",
            element: Y(() => Promise.all([t.e(1798), t.e(3529), t.e(2327)]).then(t.bind(t, 22327)))
          }, {
            path: "/socialclubmaintenance",
            element: Y(() => t.e(2320).then(t.bind(t, 22320)))
          }, {
            path: "/south-korean-privacy-addendum",
            element: Y(() => Promise.all([t.e(8835), t.e(1622)]).then(t.bind(t, 11622)))
          }, {
            path: "/unsubscribe",
            element: Y(() => Promise.all([t.e(4346), t.e(4324)]).then(t.bind(t, 64324)))
          }, {
            path: "/videos",
            element: Y(() => Promise.all([t.e(1420), t.e(7731), t.e(5221), t.e(6058)]).then(t.bind(t, 18163)))
          }, {
            path: "/videos/:videoId",
            element: Y(() => Promise.all([t.e(1420), t.e(1879), t.e(5221), t.e(9831)]).then(t.bind(t, 56992)))
          }, {
            ...c
          }];
          return isNaN(parseInt(s?.code)) || 200 === s?.code || (l = [c]), (0, i.useRoutes)(l)
        }),
        X = {
          headerHidden: "rockstargames-sites-rockstargamesb6b034f449f546e8024b4fa91ec35516",
          main: "rockstargames-sites-rockstargamesf5a4be65929b33e16434b24a4d701e3e"
        },
        ee = (0, s.withAutoRouteTracking)(({
          headerHidden: e
        }) => (0, n.jsx)("main", {
          role: "main",
          id: "main",
          className: [X.main, e ? X.headerHidden : ""].join(" "),
          children: (0, n.jsx)(Z, {})
        }));
      var ae = t(66628),
        te = t(39848),
        ne = t.n(te);
      L();
      const se = (() => {
        const e = window;
        if (e[I]?.history || L(), e[I]?.history) return e[I].history;
        throw new Error("Browser History has not been initialised")
      })();
      let oe = /^\/(?:gta-online|gta-v|gta-plus)(?:\/.*)?$/i;
      oe = /^(?!\/gta-online\/mansions\/?$)\/(?:gta-online|gta-v|gta-plus)(?:\/.*)?$/i;
      const re = [{
          regex: oe,
          chars: "gtao",
          crews: "true",
          currentChar: !0
        }],
        ie = (0, d.withIntl)(() => {
          const [{
            iso: e
          }] = (0, d.getLocale)(), {
            setFooterHidden: a,
            setHeaderHidden: t,
            state: s
          } = (0, J.b)(), {
            footerHidden: o,
            headerHidden: _
          } = s, [u] = (0, r.useContext)(F), {
            pathname: g
          } = (0, i.useLocation)(), {
            data: p
          } = (0, Q.Wx)(), {
            setCharactersNeeded: h,
            setCrewsNeeded: k,
            setCurrentCharId: f,
            currentCharId: b
          } = (0, m.useRockstarUserState)();
          return (0, r.useEffect)(() => {
            const e = (0, ae.Ek)({
                path: g
              }),
              n = (0, ae.UN)({
                path: g
              });
            a(e), t(n);
            const s = re.find(e => e.regex.test(g));
            s ? (s.currentChar && void 0 === b && f(0), h(s.chars), k(s.crews)) : (h(null), k(null))
          }, [g]), (0, n.jsx)(c.NP, {
            className: "_1bflk800",
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            locale: e,
            children: (0, n.jsx)(Q.UN, {
              children: (0, n.jsxs)(P, {
                threshold: [25, 50, 75, 90, 100],
                children: [!_ && (0, n.jsx)(l.NavigationWrapper, {
                  globalNavLoaderComponent: M,
                  globalNavComponent: l,
                  username: p?.nickname,
                  userProfileLink: p?.profile_link,
                  hasNotifications: p?.hasNotification
                }), u, (0, n.jsx)(N, {}), (0, n.jsx)(ee, {
                  headerHidden: _
                }), !o && (0, n.jsx)(ne(), {
                  onLanguageChange: d.onLanguageChange
                })]
              })
            })
          })
        }, f),
        ce = (0, s.withRockstarGraph)((0, s.withReactiveState)(() => {
          const e = (0, s.useBase)(),
            {
              setTitle: a
            } = (0, J.b)();
          return (0, r.useEffect)(() => {
            window.addEventListener("message", e => {
              "graph.titleUpdate" === (e.data?.type ?? null) && a(e.data.title)
            })
          }, []), (0, n.jsx)(V.uU, {
            children: (0, n.jsx)(K.N2, {
              children: (0, n.jsx)(Q.iR, {
                children: (0, n.jsx)(T(), {
                  history: se,
                  basename: e,
                  children: (0, n.jsx)(O, {
                    children: (0, n.jsx)(ie, {})
                  })
                })
              })
            })
          })
        }, {
          state: ae.wk
        }), {
          env: window?.env?.graphEnv ?? "prod"
        }),
        le = window?.env?.oneTrustId ?? null,
        _e = window?.env?.gtmId ?? null;
      (0, s.gtmInit)({
        id: _e
      }), (0, s.oneTrustInit)({
        id: le,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, o.H)(e).render((0, n.jsx)(ce, {}))
        }
      })
    },
    34100: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => l
      });
      var n = t(42295),
        s = t(71127),
        o = t(56990),
        r = t(14200),
        i = t(67050);
      const c = (0, o.defineMessages)({
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
            formatMessage: t
          } = (0, o.useIntl)();
          let l = e?.message ?? t(c.wasted_error_404_new);
          l = t(c.wasted_error_404_new);
          const _ = e?.code ?? 398,
            u = (0, s.useRef)(null);
          return (0, s.useEffect)(() => {
            u && u?.current && u.current.focus()
          }, [u]), (0, n.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, n.jsx)("h3", {
              tabIndex: -1,
              ref: u,
              children: `${l} (${_})`
            }), (0, n.jsx)(r.A, {
              to: "/",
              reloadDocument: !1,
              children: t(c.wasted_home)
            }), "clr" !== a && (0, n.jsx)(i.A, {})]
          })
        }
    },
    52542: e => {
      e.exports = JSON.parse('{"de-DE":{"avatarmenu_logout":"Abmelden","avatarmenu_selectlanguage":"Eine Sprache auswählen","avatarmenu_signin":"Anmelden","avatarmenu_signup":"Registrieren","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Diese Richtlinien beschreiben die Werte, die wir voraussetzen, und die Regeln, die wir anwenden, um sicherzustellen, dass alle Spieler ein faires, respektvolles und sicheres Spielerlebnis haben.","community_guidelines_tile_header":"Community-Richtlinien anschauen","email_settings_cta":"Präferenzen aktualisieren","game_screens_alt_text":"{title}-Bildschirm, {id} von {total}","handshake_icon_alt_text":"Symbol: Händeschütteln","heartbook_icon_alt_text":"Symbol: Buch mit Herz","quickmenu_games":"Spiele","quickmenu_home":"Startseite","quickmenu_newswire":"Newswire","resources_last_updated_date":"18. November 2024","resources_tile_description":"Finde schnell Ressourcen, falls du oder jemand, den du kennst, Probleme hat und Hilfe braucht.","resources_tile_header":"Sicherheitsressourcen anschauen","rockstargames_company_info_br":"Brasilien","rockstargames_company_info_cz":"Tschechische Republik","rockstargames_company_info_de":"Deutschland","rockstargames_company_info_display_for_country":"Seiteninformationen für {country} anzeigen","rockstargames_company_info_es":"Spanien","rockstargames_company_info_fr":"Frankreich","rockstargames_company_info_it":"Italien","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"Südkorea","rockstargames_company_info_mx":"Mexiko","rockstargames_company_info_nl":"Niederlande","rockstargames_company_info_pl":"Polen","rockstargames_company_info_ru":"Russland","rockstargames_company_info_sa":"Saudi-Arabien","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"USA","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"{item} aus {collection} herunterladen","rockstargames_downloads_dimensions_label":"{width} x {height} Pixel.","rockstargames_downloads_go_back":"Zurück","rsg_no_results":"Diese Suche ergab leider keine Treffer.","rsg_total_results_message":"Suche nach {Tab}, gefiltert nach {Query}","safety_get_support_button":"Support kontaktieren","safety_learn_more_button":"Mehr erfahren","support_chat_icon_alt_text":"Symbol: Support-Chat","support_tile_description":"Besuche unsere Kundendienst-Website, wenn du zusätzliche Hilfe mit der Verwaltung deines Kontos oder den Datenschutz- und Privatsphäreeinstellungen benötigst.","support_tile_header":"Brauchst du Hilfe mit deinem Konto?","unsubscribe_error_description":"Diese URL ist eventuell ungültig. Du kannst deine Präferenzen bezüglich E-Mails von Rockstar Games in den Einstellungen deines Kontos ändern.","unsubscribe_error_header":"Fehler beim Abbestellen","unsubscribe_info_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_info_header":"Du hast E-Mails bereits abbestellt","unsubscribe_success_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_success_header":"Erfolgreich abbestellt"},"en-US":{"avatarmenu_logout":"Log Out","avatarmenu_selectlanguage":"Select a Language","avatarmenu_signin":"Sign In","avatarmenu_signup":"Sign Up","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"These guidelines outline the values we uphold and the policies we enforce to ensure player experiences are fair, respectful, and safe.","community_guidelines_tile_header":"Explore Community Guidelines","email_settings_cta":"Update Preferences","game_screens_alt_text":"{title} screen, {id} of {total}","handshake_icon_alt_text":"Handshake icon","heartbook_icon_alt_text":"Book with heart icon","quickmenu_games":"Games","quickmenu_home":"Home","quickmenu_newswire":"Newswire","resources_last_updated_date":"November 18, 2024","resources_tile_description":"Quickly find resources if you or someone you know is struggling and in need of help.","resources_tile_header":"Explore Safety Resources","rockstargames_company_info_br":"Brazil","rockstargames_company_info_cz":"Czech Republic","rockstargames_company_info_de":"Germany","rockstargames_company_info_display_for_country":"Display page information for {country}","rockstargames_company_info_es":"Spain","rockstargames_company_info_fr":"France","rockstargames_company_info_it":"Italy","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"South Korea","rockstargames_company_info_mx":"Mexico","rockstargames_company_info_nl":"Netherlands","rockstargames_company_info_pl":"Poland","rockstargames_company_info_ru":"Russian Federation","rockstargames_company_info_sa":"Saudi Arabia","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"United States","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Download {item} {collection}","rockstargames_downloads_dimensions_label":"{width} by {height} pixels.","rockstargames_downloads_go_back":"Go back","rsg_no_results":"Sorry, there were no results.","rsg_total_results_message":"Showing {Tab} filtered by {Query}","safety_get_support_button":"Get Support","safety_learn_more_button":"Learn More","support_chat_icon_alt_text":"Support chat icon","support_tile_description":"For additional assistance with managing your account or data and privacy settings, visit our Customer Support page.","support_tile_header":"Need account assistance?","unsubscribe_error_description":"This URL may be invalid. You can make changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_error_header":"Error Unsubscribing","unsubscribe_info_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_info_header":"You\'re Already Unsubscribed","unsubscribe_success_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_success_header":"Successfully Unsubscribed"},"es-ES":{"avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Selecciona un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","community_guidelines_image_alt_text":"Say sorry, be nice (pide perdón, sé amable)","community_guidelines_tile_description":"Estas directrices resumen los valores que defendemos y las políticas que aplicamos para asegurarnos de que nuestros jugadores disfrutan de una experiencia justa, respetuosa y segura.","community_guidelines_tile_header":"Ver las directrices de la comunidad","email_settings_cta":"Cambiar tus preferencias","game_screens_alt_text":"pantalla de {title}, {id} de {total}","handshake_icon_alt_text":"Icono de un apretón de manos","heartbook_icon_alt_text":"Icono de un libro con un corazón","quickmenu_games":"Juegos","quickmenu_home":"Inicio","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 De noviembre de 2024","resources_tile_description":"Encuentra ayuda rápidamente en caso de que tú o alguien que conoces esté pasando por dificultades y necesite apoyo.","resources_tile_header":"Ver los servicios de ayuda","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información para {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federación Rusa","rockstargames_company_info_sa":"Arabia Saudí","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width} por {height} píxeles.","rockstargames_downloads_go_back":"Volver","rsg_no_results":"Lo sentimos, no hay resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Obtén asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Icono de chat de asistencia","support_tile_description":"Si necesitas ayuda adicional para gestionar tu cuenta o tus ajustes de datos o privacidad, visita nuestro sitio web de asistencia técnica.","support_tile_header":"¿Necesitas ayuda con tu cuenta?","unsubscribe_error_description":"Puede que esta URL no sea válida. Puedes cambiar tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_error_header":"Error al cancelar la suscripción","unsubscribe_info_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_info_header":"Ya has cancelado tu suscripción","unsubscribe_success_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_success_header":"Has cancelado tu suscripción con éxito"},"es-MX":{"avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Seleccionar un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","community_guidelines_image_alt_text":"Imagen con el mensaje: Say Sorry, Be Nice","community_guidelines_tile_description":"Estas directrices describen nuestros valores y las políticas que imponemos para asegurar que las experiencias de los jugadores sean justas, respetuosas y seguras.","community_guidelines_tile_header":"Directrices de la comunidad","email_settings_cta":"Actualizar preferencias","game_screens_alt_text":"pantalla de {title}, {id} de {total}","handshake_icon_alt_text":"Ícono de un apretón de manos","heartbook_icon_alt_text":"Ícono de un libro con un corazón","quickmenu_games":"Juegos","quickmenu_home":"Inicio","quickmenu_newswire":"Canal de noticias","resources_last_updated_date":"18 de noviembre de 2024","resources_tile_description":"Encuentra recursos rápidamente si tú o alguien que conoces necesita ayuda.","resources_tile_header":"Recursos de seguridad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información de página de {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Rusia","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos de América","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width}x{height} píxeles.","rockstargames_downloads_go_back":"Atrás","rsg_no_results":"Lo lamentamos, pero no se encontraron resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Recibir asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Ícono de chat de soporte","support_tile_description":"Para recibir asistencia adicional de tu cuenta, datos o ajustes de privacidad, visita nuestra página de soporte.","support_tile_header":"Asistencia de tu cuenta","unsubscribe_error_description":"La dirección URL podría ser inválida. Puedes cambiar las preferencias de tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_error_header":"Error al darse de baja","unsubscribe_info_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_info_header":"Ya te encuentras dado de baja.","unsubscribe_success_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_success_header":"Éxito al darse de baja."},"fr-FR":{"avatarmenu_logout":"Se déconnecter","avatarmenu_selectlanguage":"Sélectionner une langue","avatarmenu_signin":"Se connecter","avatarmenu_signup":"S’abonner","community_guidelines_image_alt_text":"Image avec le texte en anglais Say Sorry, Be Nice","community_guidelines_tile_description":"Ces règles décrivent nos valeurs et les politiques que nous faisons appliquer pour assurer à tous les joueurs une expérience juste, respectueuse et sûre.","community_guidelines_tile_header":"Explorez nos Règles de la communauté","email_settings_cta":"Mettre vos préférences à jour","game_screens_alt_text":"{title} écran, {id} sur {total}","handshake_icon_alt_text":"Icône de poignée de main","heartbook_icon_alt_text":"Icône de livre avec un cœur","quickmenu_games":"Jeux","quickmenu_home":"Accueil","quickmenu_newswire":"Newswire","resources_last_updated_date":"Le 18 novembre 2024","resources_tile_description":"Trouvez rapidement des ressources si vous, ou une personne que vous connaissez, êtes en difficulté et avez besoin d\'aide.","resources_tile_header":"Explorez nos ressources relatives à la sécurité","rockstargames_company_info_br":"le Brésil","rockstargames_company_info_cz":"la République tchèque","rockstargames_company_info_de":"l\'Allemagne","rockstargames_company_info_display_for_country":"Afficher les informations de la page pour {country}","rockstargames_company_info_es":"l\'Espagne","rockstargames_company_info_fr":"la France","rockstargames_company_info_it":"l\'Italie","rockstargames_company_info_jp":"le Japon","rockstargames_company_info_kr":"la Corée du Sud","rockstargames_company_info_mx":"le Mexique","rockstargames_company_info_nl":"les Pays-Bas","rockstargames_company_info_pl":"la Pologne","rockstargames_company_info_ru":"la Fédération de Russie","rockstargames_company_info_sa":"l\'Arabie saoudite","rockstargames_company_info_tw":"Taïwan","rockstargames_company_info_us":"les États-Unis","rockstargames_company_info_zh":"la Chine","rockstargames_downloads_collections_download_text":"Télécharger ({collection} - {item})","rockstargames_downloads_dimensions_label":"{width}x{height} pixels.","rockstargames_downloads_go_back":"Précédent","rsg_no_results":"Désolé, aucun résultat n\'a été trouvé.","rsg_total_results_message":"Résultats : {Tab} Filtres : {Query}","safety_get_support_button":"Obtenir de l\'aide","safety_learn_more_button":"En savoir plus","support_chat_icon_alt_text":"Icône de discussion de l\'assistance","support_tile_description":"Si vous avez besoin d\'aide supplémentaire pour gérer votre compte ou les paramètres de vos données et de votre confidentialité, rendez-vous sur notre page d\'assistance à la clientèle.","support_tile_header":"Besoin d\'aide pour votre compte ?","unsubscribe_error_description":"Cette URL semble non valide. Vous pouvez modifier vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_error_header":"Une erreur est survenue lors du désabonnement","unsubscribe_info_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réabonnez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_info_header":"Vous êtes déjà désabonné(e)","unsubscribe_success_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réabonnez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_success_header":"Votre désabonnement a été pris en compte"},"it-IT":{"avatarmenu_logout":"Esci","avatarmenu_selectlanguage":"Seleziona una lingua","avatarmenu_signin":"Accedi","avatarmenu_signup":"Registrati","community_guidelines_image_alt_text":"Immagine con logo “Say Sorry, Be Nice”.","community_guidelines_tile_description":"Queste linee guida definiscono i valori che sosteniamo e le politiche che applichiamo per assicurare ai giocatori un’esperienza positiva, rispettosa e sicura.","community_guidelines_tile_header":"Scopri le Linee guida della comunità","email_settings_cta":"Aggiorna le preferenze","game_screens_alt_text":"Schermata {title}, {id} di {total}","handshake_icon_alt_text":"Icona della stretta di mano","heartbook_icon_alt_text":"Icona di un libro con un cuore","quickmenu_games":"Giochi","quickmenu_home":"Home","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 Novembre 2024","resources_tile_description":"Trova velocemente le risorse che cerchi se tu o qualcuno che conosci è in difficoltà e ha bisogno di aiuto.","resources_tile_header":"Scopri le risorse per la sicurezza","rockstargames_company_info_br":"Brasile","rockstargames_company_info_cz":"Repubblica Ceca","rockstargames_company_info_de":"Germania","rockstargames_company_info_display_for_country":"Mostra informazioni sulla pagina per il paese seguente: {country}","rockstargames_company_info_es":"Spagna","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Giappone","rockstargames_company_info_kr":"Corea del Sud","rockstargames_company_info_mx":"Messico","rockstargames_company_info_nl":"Paesi Bassi","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federazione Russa","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Stati Uniti","rockstargames_company_info_zh":"Cina","rockstargames_downloads_collections_download_text":"Scarica {item} {collection}","rockstargames_downloads_dimensions_label":"{width} per {height} pixel.","rockstargames_downloads_go_back":"Torna indietro","rsg_no_results":"Spiacente, nessun risultato trovato.","rsg_total_results_message":"Scheda {Tab} filtrata per {Query}","safety_get_support_button":"Chiedi assistenza","safety_learn_more_button":"Altre informazioni","support_chat_icon_alt_text":"Icona della chat di assistenza","support_tile_description":"Per ulteriore assistenza sulla gestione del tuo account o dei tuoi data e sulle impostazioni della privacy, visita la nostra pagina del supporto clienti.","support_tile_header":"Hai bisogno di aiuto con il tuo account?","unsubscribe_error_description":"Questo URL potrebbe non essere valido. Puoi apportare modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_error_header":"Errore nel tentativo di annullamento dell’iscrizione","unsubscribe_info_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_info_header":"Hai già annullato l’iscrizione","unsubscribe_success_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_success_header":"Iscrizione annullata con successo"},"ja-JP":{"avatarmenu_logout":"ログアウト","avatarmenu_selectlanguage":"言語を選択","avatarmenu_signin":"サインイン","avatarmenu_signup":"サインアップ","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"このガイドラインでは、プレイヤーの体験が公平で、尊重され、安全であることを保証するため弊社が強化する方針ならびに、弊社が支持する価値観を説明しています。","community_guidelines_tile_header":"コミュニティガイドラインをチェックする","email_settings_cta":"設定を更新","game_screens_alt_text":"{title}画面の{id}/{total}","handshake_icon_alt_text":"握手のアイコン","heartbook_icon_alt_text":"ハートのついた本のアイコン","quickmenu_games":"ゲーム","quickmenu_home":"ホーム","quickmenu_newswire":"Newswire","resources_last_updated_date":"2024年11月18日","resources_tile_description":"あなた自身もしくは知人が困っており、ヘルプが必要な場合の情報を見つける。","resources_tile_header":"安全性に関する情報をチェックする","rockstargames_company_info_br":"ブラジル","rockstargames_company_info_cz":"チェコ","rockstargames_company_info_de":"ドイツ","rockstargames_company_info_display_for_country":"{Country}のページを表示する","rockstargames_company_info_es":"スペイン","rockstargames_company_info_fr":"フランス","rockstargames_company_info_it":"イタリア","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韓国","rockstargames_company_info_mx":"メキシコ","rockstargames_company_info_nl":"オランダ","rockstargames_company_info_pl":"ポーランド","rockstargames_company_info_ru":"ロシア連邦","rockstargames_company_info_sa":"サウジアラビア","rockstargames_company_info_tw":"台湾","rockstargames_company_info_us":"アメリカ","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"ダウンロード {item} {collection}","rockstargames_downloads_dimensions_label":"{width}×{height}ピクセル","rockstargames_downloads_go_back":"戻る","rsg_no_results":"申し訳ありません、結果が見つかりませんでした。","rsg_total_results_message":"{Query}でフィルターした{Tab}を表示中","safety_get_support_button":"サポートを依頼する","safety_learn_more_button":"詳細を見る","support_chat_icon_alt_text":"サポートチャットのアイコン","support_tile_description":"アカウントやデータ、プライバシー設定の管理についての追加アシストはカスタマーサポートページをご覧ください。","support_tile_header":"アカウントアシストが必要ですか？","unsubscribe_error_description":"このURLは無効になっている可能性があります。アカウント設定のページでロックスター・ゲームスのメール受信設定を変更できます。","unsubscribe_error_header":"登録解除時にエラー","unsubscribe_info_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_info_header":"登録解除済みです","unsubscribe_success_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_success_header":"登録解除が完了しました"},"ko-KR":{"avatarmenu_logout":"로그아웃","avatarmenu_selectlanguage":"언어 선택","avatarmenu_signin":"로그인","avatarmenu_signup":"가입","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"공정, 상호 존중, 안전을 바탕으로 한 플레이어 경험을 제공하기 위해 당사에서 추구하는 가치 및 시행하는 정책을 정리한 가이드라인입니다.","community_guidelines_tile_header":"커뮤니티 가이드라인 살펴보기","email_settings_cta":"설정 변경","game_screens_alt_text":"{title} 화면, {total}의 {id}","handshake_icon_alt_text":"악수 모양 아이콘","heartbook_icon_alt_text":"책과 하트 아이콘","quickmenu_games":"게임","quickmenu_home":"홈","quickmenu_newswire":"뉴스와이어","resources_last_updated_date":"2024년 11월 18일","resources_tile_description":"본인 및 주변인에게 도움이 필요하다면 이곳에서 관련 정보를 빠르게 찾아보실 수 있습니다.","resources_tile_header":"안전 관련 정보 살펴보기","rockstargames_company_info_br":"브라질","rockstargames_company_info_cz":"체코 공화국","rockstargames_company_info_de":"독일","rockstargames_company_info_display_for_country":"페이지 내용 표시 - {country}","rockstargames_company_info_es":"스페인","rockstargames_company_info_fr":"프랑스","rockstargames_company_info_it":"이탈리아","rockstargames_company_info_jp":"일본","rockstargames_company_info_kr":"대한민국","rockstargames_company_info_mx":"멕시코","rockstargames_company_info_nl":"네덜란드","rockstargames_company_info_pl":"폴란드","rockstargames_company_info_ru":"러시아 연방","rockstargames_company_info_sa":"사우디 아라비아","rockstargames_company_info_tw":"대만","rockstargames_company_info_us":"미국","rockstargames_company_info_zh":"중국","rockstargames_downloads_collections_download_text":"{collection} {item} 다운로드","rockstargames_downloads_dimensions_label":"{width} x {height} 픽셀입니다.","rockstargames_downloads_go_back":"뒤로가기","rsg_no_results":"죄송합니다, 결과가 없습니다.","rsg_total_results_message":"{Query} 필터를 적용한 {Tab} 보기","safety_get_support_button":"도움 요청하기","safety_learn_more_button":"더 알아보기","support_chat_icon_alt_text":"지원 채팅 아이콘","support_tile_description":"계정, 데이터, 개인 정보 보호 설정을 관리하는 데 추가로 도움이 필요하시다면 저희의 고객 지원 페이지를 방문해주세요.","support_tile_header":"계정 관련 도움이 필요하신가요?","unsubscribe_error_description":"이 URL은 유효하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경할 수 있습니다.","unsubscribe_error_header":"구독 취소 오류","unsubscribe_info_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_info_header":"이미 구독 취소를 하였습니다","unsubscribe_success_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_success_header":"구독 취소 완료"},"pl-PL":{"avatarmenu_logout":"Wyloguj się","avatarmenu_selectlanguage":"Wybierz język","avatarmenu_signin":"Zaloguj się","avatarmenu_signup":"Zarejestruj się","community_guidelines_image_alt_text":"Zachowuj się grzecznie!","community_guidelines_tile_description":"Ten regulamin opisuje wartości, jakimi się kierujemy, jak również zasady, których przestrzegamy, aby zapewnić graczom sprawiedliwe, bezpieczne i pełne szacunku doświadczenia.","community_guidelines_tile_header":"Przeglądaj regulamin społeczności","email_settings_cta":"Aktualizuj swoje preferencje","game_screens_alt_text":"Zrzut ekranu z {title}, {id} z {total}","handshake_icon_alt_text":"Ikona uścisku dłoni","heartbook_icon_alt_text":"Zapisz przy pomocy ikony serca","quickmenu_games":"Gry","quickmenu_home":"Strona główna","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 Listopada 2024","resources_tile_description":"Odszukaj szybko informacje, jeżeli ty lub ktoś, kogo znasz, potrzebuje pomocy.","resources_tile_header":"Przeglądaj informacje dotyczące bezpieczeństwa","rockstargames_company_info_br":"Brazylia","rockstargames_company_info_cz":"Czechy","rockstargames_company_info_de":"Niemcy","rockstargames_company_info_display_for_country":"Pokaż informacje dla:","rockstargames_company_info_es":"Hiszpania","rockstargames_company_info_fr":"Francja","rockstargames_company_info_it":"Włochy","rockstargames_company_info_jp":"Japonia","rockstargames_company_info_kr":"Korea Południowa","rockstargames_company_info_mx":"Meksyk","rockstargames_company_info_nl":"Holandia","rockstargames_company_info_pl":"Polska","rockstargames_company_info_ru":"Rosja","rockstargames_company_info_sa":"Arabia Saudyjska","rockstargames_company_info_tw":"Tajwan","rockstargames_company_info_us":"Stany Zjednoczone","rockstargames_company_info_zh":"Chiny","rockstargames_downloads_collections_download_text":"Pobierz: {item} {collection}","rockstargames_downloads_dimensions_label":"{width} na {height} pikseli.","rockstargames_downloads_go_back":"Wróć","rsg_no_results":"Brak wyników.","rsg_total_results_message":"Wyświetlono: {Tab} filtrowanie: {Query}","safety_get_support_button":"Uzyskaj wsparcie","safety_learn_more_button":"Dowiedz się więcej","support_chat_icon_alt_text":"Ikona kontaku ze wsparciem","support_tile_description":"W celu uzyskania dodatkowej pomocy dotyczącej obsługi konta lub ustawień prywatności odwiedź naszą stronę wsparcia.","support_tile_header":"Potrzebujesz wsparcia dotyczącego konta?","unsubscribe_error_description":"Odnośnik może być nieprawidłowy. Możesz zmienić swoje preferencje mailingowe w menu ustawień konta Rockstar Games.","unsubscribe_error_header":"Błąd podczas rezygnacji","unsubscribe_info_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Zapisz się ponownie lub dokonaj innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_info_header":"Subskrypcja jest już nieaktywna","unsubscribe_success_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Możesz zapisać się ponownie lub dokonać innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_success_header":"Zrezygnowano z subskrypcji"},"pt-BR":{"avatarmenu_logout":"Sair","avatarmenu_selectlanguage":"Selecione um idioma","avatarmenu_signin":"Iniciar sessão","avatarmenu_signup":"Inscrever-se","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Estas regras detalham os valores e políticas que mantêm a experiência de jogo justa, respeitosa e segura.","community_guidelines_tile_header":"Explore as Regras da Comunidade","email_settings_cta":"Atualizar preferências","game_screens_alt_text":"Tela de {title}, {id} de {total}","handshake_icon_alt_text":"Ícone de aperto de mão","heartbook_icon_alt_text":"Ícone de livro com coração","quickmenu_games":"Jogos","quickmenu_home":"Início","quickmenu_newswire":"Boletim","resources_last_updated_date":"18 de novembro de 2024","resources_tile_description":"Encontre recursos rapidamente se você ou alguém que você conhece precisa de ajuda.","resources_tile_header":"Explore os recursos de segurança","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Tcheca","rockstargames_company_info_de":"Alemanha","rockstargames_company_info_display_for_country":"Exibir informações da página para {country}","rockstargames_company_info_es":"Espanha","rockstargames_company_info_fr":"França","rockstargames_company_info_it":"Itália","rockstargames_company_info_jp":"Japão","rockstargames_company_info_kr":"Coreia do Sul","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Baixos","rockstargames_company_info_pl":"Polônia","rockstargames_company_info_ru":"Federação da Rússia","rockstargames_company_info_sa":"Arábia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Baixar {collection} de {item}","rockstargames_downloads_dimensions_label":"{width} x {height} pixels.","rockstargames_downloads_go_back":"Voltar","rsg_no_results":"Nenhum resultado foi encontrado.","rsg_total_results_message":"Mostrando {Tab} com o filtro {Query}","safety_get_support_button":"Acionar suporte","safety_learn_more_button":"Saiba mais","support_chat_icon_alt_text":"Ícone de chat de suporte","support_tile_description":"Para mais ajuda com o gerenciamento da sua conta, dados e configurações de privacidade, acesse a página de suporte.","support_tile_header":"Precisa de ajuda com a sua conta?","unsubscribe_error_description":"Esta URL pode ser inválida. Você pode aplicar mudanças às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_error_header":"Erro ao cancelar inscrição","unsubscribe_info_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_info_header":"Você já cancelou a inscrição","unsubscribe_success_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_success_header":"Inscrição cancelada"},"ru-RU":{"avatarmenu_logout":"Выход","avatarmenu_selectlanguage":"Выбрать язык","avatarmenu_signin":"Войти","avatarmenu_signup":"Регистрация","community_guidelines_image_alt_text":"Надпись Say Sorry, Be Nice","community_guidelines_tile_description":"В этих правилах изложены ценности, которых мы придерживаемся, и политики, которые мы применяем для обеспечения честной, уважительной и безопасной игры для всех.","community_guidelines_tile_header":"Ознакомьтесь с правилами сообщества","email_settings_cta":"Изменить настройки","game_screens_alt_text":"{title} экран, {id} из {total}","handshake_icon_alt_text":"Значок рукопожатия","heartbook_icon_alt_text":"Значок книги с сердцем","quickmenu_games":"Игры","quickmenu_home":"Главная страница","quickmenu_newswire":"Новостная лента","resources_last_updated_date":"18 ноября 2024 года","resources_tile_description":"Быстро найдите интернет-ресурсы, если вы или кто-то из ваших знакомых испытывает трудности и нуждается в помощи.","resources_tile_header":"Ознакомьтесь с ресурсами по психологической поддержке","rockstargames_company_info_br":"Бразилии","rockstargames_company_info_cz":"Чехии","rockstargames_company_info_de":"Германии","rockstargames_company_info_display_for_country":"Показать содержимое страницы для {country}","rockstargames_company_info_es":"Испании","rockstargames_company_info_fr":"Франции","rockstargames_company_info_it":"Италии","rockstargames_company_info_jp":"Японии","rockstargames_company_info_kr":"Южной Кореи","rockstargames_company_info_mx":"Мексики","rockstargames_company_info_nl":"Нидерландов","rockstargames_company_info_pl":"Польши","rockstargames_company_info_ru":"России","rockstargames_company_info_sa":"Саудовской Аравии","rockstargames_company_info_tw":"Тайваня","rockstargames_company_info_us":"США","rockstargames_company_info_zh":"Китая","rockstargames_downloads_collections_download_text":"Загрузить: «{item}» из коллекции «{collection}».","rockstargames_downloads_dimensions_label":"{width} на {height} пикселей.","rockstargames_downloads_go_back":"Вернуться","rsg_no_results":"Результаты не найдены.","rsg_total_results_message":"Поиск в категории {Tab} с фильтром «{Query}»","safety_get_support_button":"Обратиться в службу поддержки","safety_learn_more_button":"Подробности","support_chat_icon_alt_text":"Значок службы поддержки","support_tile_description":"Для получения дополнительной помощи по управлению вашей учетной записью или данными и настройками конфиденциальности посетите нашу страницу поддержки клиентов.","support_tile_header":"Нужна помощь с учетной записью?","unsubscribe_error_description":"Возможно, этот адрес недействителен. Вы можете изменить настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_error_header":"Ошибка при отмене подписки","unsubscribe_info_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_info_header":"Вы уже отменили подписку","unsubscribe_success_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_success_header":"Подписка отменена"},"zh-CN":{"avatarmenu_logout":"登出","avatarmenu_selectlanguage":"选择一种语言","avatarmenu_signin":"登录","avatarmenu_signup":"注册","community_guidelines_image_alt_text":"说声对不起，做个好人","community_guidelines_tile_description":"指南中列出了我们秉持的价值观和遵循的政策原则，为玩家营造公平、尊重和安全的游玩体验。","community_guidelines_tile_header":"查看《社区指南》","email_settings_cta":"更新偏好设置","game_screens_alt_text":"{title}画面，{id}（共{total}个）","handshake_icon_alt_text":"握手图标","heartbook_icon_alt_text":"书上印着一颗心的图标","quickmenu_games":"游戏","quickmenu_home":"主页","quickmenu_newswire":"新闻专线","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"如果您自己，或者您知道的其他人需要帮助，在这里可以快速找到相关内容。","resources_tile_header":"查看“安全”相关内容","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克","rockstargames_company_info_de":"德国","rockstargames_company_info_display_for_country":"显示{country}的页面信息","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法国","rockstargames_company_info_it":"意大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韩国","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷兰","rockstargames_company_info_pl":"波兰","rockstargames_company_info_ru":"俄罗斯联邦","rockstargames_company_info_sa":"沙特阿拉伯","rockstargames_company_info_tw":"台湾地区","rockstargames_company_info_us":"美国","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"下载 {item} 的 {collection}","rockstargames_downloads_dimensions_label":"{width} X {height} 像素","rockstargames_downloads_go_back":"返回","rsg_no_results":"抱歉，没有搜索结果。","rsg_total_results_message":"按 {filterList} 筛选显示 {type}","safety_get_support_button":"寻求支持","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支持对话图标","support_tile_description":"如果您在管理账户或数据，或者设置隐私选项时需要额外的帮助，请前往客户支持页面。","support_tile_header":"需要账户相关的帮助吗？","unsubscribe_error_description":"此网址可能无效。您可以在账户设置页面更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_error_header":"取消订阅出错","unsubscribe_info_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_info_header":"您已经取消订阅","unsubscribe_success_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_success_header":"取消订阅成功"},"zh-TW":{"avatarmenu_logout":"登出","avatarmenu_selectlanguage":"選擇語言","avatarmenu_signin":"登入","avatarmenu_signup":"註冊","community_guidelines_image_alt_text":"敢於道歉，友善待人","community_guidelines_tile_description":"我們以此守則簡述所遵循的價值觀，以及我們為了確保公平、尊重與安全的玩家體驗所執行的政策。","community_guidelines_tile_header":"探索社群守則","email_settings_cta":"更新偏好設定","game_screens_alt_text":"第{id} 個 {title} 畫面（共 {total} 個）","handshake_icon_alt_text":"握手圖示","heartbook_icon_alt_text":"書本上有心形的圖示","quickmenu_games":"遊戲","quickmenu_home":"首頁","quickmenu_newswire":"新聞放送","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"若您或您認識的人遭逢困難或需要協助，您可以快速尋找資源。","resources_tile_header":"探索安全資源","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克共和國","rockstargames_company_info_de":"德國","rockstargames_company_info_display_for_country":"顯示頁面資訊：{country}","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法國","rockstargames_company_info_it":"義大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"南韓","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷蘭","rockstargames_company_info_pl":"波蘭","rockstargames_company_info_ru":"俄羅斯聯邦","rockstargames_company_info_sa":"沙烏地阿拉伯","rockstargames_company_info_tw":"台灣","rockstargames_company_info_us":"美國","rockstargames_company_info_zh":"中國","rockstargames_downloads_collections_download_text":"下載「{item}」的「{collection}」","rockstargames_downloads_dimensions_label":"像素：{width} x {height}。","rockstargames_downloads_go_back":"返回","rsg_no_results":"很抱歉，無相符的搜尋結果。","rsg_total_results_message":"正在顯示 {Tab}，搜尋條件為 {Query}","safety_get_support_button":"取得支援","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支援文字對話圖示","support_tile_description":"如需管理您帳戶、資料或隱私權設定的額外協助，請造訪我們的客戶支援頁面。","support_tile_header":"需要帳戶協助？","unsubscribe_error_description":"這個網址可能無效。您可以在帳戶設定頁面變更您的 Rockstar Games 電子郵件偏好設定。","unsubscribe_error_header":"取消訂閱錯誤","unsubscribe_info_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_info_header":"您已經取消訂閱。","unsubscribe_success_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_success_header":"取消訂閱成功"}}')
    },
    57386: (e, a, t) => {
      t.d(a, {
        A: () => c
      });
      var n = t(42295),
        s = t(71127),
        o = t(12304),
        r = t(34100);
      class i extends s.Component {
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
          return {
            error: {
              message: e?.message ? e.toString() : "Something has gone horribly awry.",
              code: e?.code ?? 399
            }
          }
        }
        componentDidCatch(e, a) {
          (0, o.addBreadcrumb)({
            category: "ErrorBoundary",
            message: e.message || "E399 triggered",
            data: {
              error: e,
              errorInfo: a
            }
          }), (0, o.captureMessage)("ErrorBoundary", o.Severity.Error)
        }
        render() {
          return null !== this.state.error.code ? (0, n.jsx)(r.default, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const c = (e, a = null) => {
        const t = t => (0, n.jsx)(i, {
          header: a,
          children: (0, n.jsx)(e, {
            ...t
          })
        });
        return t.displayName = `withSearchbarErrorBoundary(${e.displayName||e.name||"Component"})`, t
      }
    },
    66628: (e, a, t) => {
      t.d(a, {
        Ek: () => o,
        UN: () => s,
        b$: () => i,
        wk: () => r
      });
      var n = t(58136);
      const s = ({
          path: e
        }) => window.self !== window.top || (["/gifs", "/screenshot-viewer", "/VI", "/videoplayer"].find(a => e.includes(a)) ?? []).length > 0,
        o = ({
          path: e
        }) => (["/gta-online/license-plates", "/VI"].find(a => e.includes(a)) ?? []).length > 0,
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
          headerHidden: s({
            path: document.location.pathname
          }),
          footerHidden: o({
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
            toggleNavOpen: (t = null) => {
              const {
                navOpen: n
              } = e;
              a({
                navOpen: null !== t ? t : !n
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
            setBreadcrumb: (t = [], n = "") => {
              a({
                breadcrumb: {
                  ...e.breadcrumb,
                  links: t,
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
              const t = "Rockstar Games";
              let n = e;
              e.endsWith(t) || (n = `${e} - ${t}`), document.title = n, a({
                title: n
              })
            },
            setError: ({
              code: e,
              message: t
            } = {}) => {
              a({
                error: {
                  code: e,
                  message: t
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
              base: t = null,
              navOpen: n = !1
            }) => {
              const s = {
                ...e.gameData
              };
              null !== t && (s.base = t.replace(/\/$/, "")), null !== n && (s.navOpen = n), a({
                gameData: s
              })
            }
          }
        }
    },
    67050: (e, a, t) => {
      t.d(a, {
        A: () => i
      });
      var n = t(42295),
        s = t(71127),
        o = t(10181),
        r = t(58136);
      const i = (0, r.withTranslations)(({
        t: e
      }) => {
        const [a] = (0, s.useState)(""), t = (0, o.useNavigate)(), i = (0, r.useMutateState)();
        return (0, n.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), i({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const a = e.currentTarget.elements.namedItem("q").value;
            t(`/search?q=${a}`)
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
      })
    },
    87790: (e, a, t) => {
      t.d(a, {
        b: () => n.b$
      });
      var n = t(66628)
    }
  }
]);