try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "33ac4e6d-619d-405f-adff-0ed1173b15db", e._sentryDebugIdIdentifier = "sentry-dbid-33ac4e6d-619d-405f-adff-0ed1173b15db")
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
  [4708], {
    68993(e, a, n) {
      n.d(a, {
        A: () => i
      });
      var o = n(39793),
        t = n(93082),
        s = n(36416),
        r = n(13331);
      const i = (0, r.withTranslations)(({
        t: e
      }) => {
        const [a] = (0, t.useState)(""), n = (0, s.useNavigate)(), i = (0, r.useMutateState)();
        return (0, o.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), i({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const a = e.currentTarget.elements.namedItem("q").value;
            n(`/search?q=${a}`)
          },
          role: "search",
          children: [(0, o.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, o.jsx)("input", {
            autoComplete: "off",
            defaultValue: a,
            enterKeyHint: "search",
            name: "q",
            placeholder: e("Search Rockstar Games")
          })]
        })
      })
    },
    47590(e, a, n) {
      n.d(a, {
        A: () => l
      });
      var o = n(39793),
        t = n(93082),
        s = n(11215),
        r = n(60982);
      class i extends t.Component {
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
              message: e?.message ?? "Something has gone horribly awry.",
              code: e?.code ?? 399
            }
          }
        }
        componentDidCatch(e, a) {
          (0, s.addBreadcrumb)({
            category: "ErrorBoundary",
            message: e.message || "E399 triggered",
            data: {
              error: e,
              errorInfo: a
            }
          }), (0, s.captureMessage)(`ErrorBoundary - ${e.name} ${e.message}`, {
            level: s.Severity.Error,
            fingerprint: "ChunkLoadError" === e.name ? ["chunkloaderror"] : []
          })
        }
        render() {
          return null !== this.state.error.code ? (0, o.jsx)(r.default, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const l = (e, a = null) => {
        const n = n => (0, o.jsx)(i, {
          header: a,
          children: (0, o.jsx)(e, {
            ...n
          })
        });
        return n.displayName = `withSearchbarErrorBoundary(${e.displayName||e.name||"Component"})`, n
      }
    },
    60982(e, a, n) {
      n.r(a), n.d(a, {
        default: () => _
      });
      var o = n(39793),
        t = n(93082),
        s = n(42909),
        r = n(38044),
        i = n(68993);
      const l = (0, s.defineMessages)({
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
        _ = ({
          error: e,
          domain: a = ""
        }) => {
          console.error({
            error: e
          });
          const {
            formatMessage: n
          } = (0, s.useIntl)();
          let _ = e?.message ?? n(l.wasted_error_404_new);
          _ = n(l.wasted_error_404_new);
          const c = e?.code ?? 398,
            u = (0, t.useRef)(null);
          return (0, t.useEffect)(() => {
            u && u?.current && u.current.focus()
          }, [u]), (0, o.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, o.jsx)("h3", {
              tabIndex: -1,
              ref: u,
              children: `${_} (${c})`
            }), (0, o.jsx)(r.A, {
              to: "/",
              reloadDocument: !1,
              children: n(l.wasted_home)
            }), "clr" !== a && (0, o.jsx)(i.A, {})]
          })
        }
    },
    23207(e, a, n) {
      var o = n(39793),
        t = n(13331),
        s = n(5643),
        r = n(93082),
        i = n(36416),
        l = n(38498),
        _ = n(37116),
        c = n(41263),
        u = n(52920),
        g = n(7364),
        d = n(42909),
        m = n(82199),
        p = n(76923);
      const h = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg",
        b = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg",
        k = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg";
      var f = n(52542),
        y = "var(--_1k6ojor0)",
        v = n(85524);
      const w = "nav-dropdown",
        x = (e, a, n, o) => ({
          event: e || "nav_click",
          link_url: a,
          text: n,
          element_placement: `Global Nav > ${o}`?.toLowerCase()
        }),
        j = ({
          globalNavigationComponent: e,
          gamesMenuComponent: a,
          link: n,
          gaEvent: s,
          gaBreadCrumb: r
        }) => {
          const l = (0, i.useNavigate)(),
            {
              dispatch: _
            } = (0, t.useRockstarEventDispatcher)(),
            {
              track: c
            } = (0, m.useGtmTrack)(),
            u = e,
            g = a,
            d = `${n?.location?.domain||""}${n?.location?.path||""}`,
            p = r ? `${r} > ${n.gaText}` : n.gaText,
            h = e => {
              c(x(s, d, n.gaText, p)), n.onClickCallback?.(e)
            };
          return n.location || "nav-no-link" !== n.type ? "games-menu" === n.type && g ? (0, o.jsx)(g.GamesMenuItem, {
            onNavigate: l,
            onClick: h,
            dataTestId: n.dataTestId
          }, "games-menu") : n.type === w ? (0, o.jsxs)(u.MenuItem, {
            children: [(0, o.jsx)(u.MenuTrigger, {
              "data-testid": n.dataTestId,
              onClick: h,
              children: n.text
            }), (0, o.jsx)(u.MenuContent, {
              children: (0, o.jsx)(u.MenuSub, {
                children: (0, o.jsx)(u.MenuList, {
                  children: n.children?.map(a => (0, o.jsx)(j, {
                    globalNavigationComponent: e,
                    link: a,
                    gaEvent: s,
                    gaBreadCrumb: p
                  }, a.text))
                })
              })
            })]
          }, n.text) : n?.location?.domain || n.isLegacy ? (0, o.jsx)(u.MenuItem, {
            children: (0, o.jsx)(u.MenuLink, {
              onClick: h,
              external: "nav-external" === n.type,
              active: (0, i.matchPath)(d, location.pathname),
              target: n.target,
              href: d,
              "data-testid": n.dataTestId,
              children: n.text
            })
          }, n.text) : (0, o.jsx)(u.MenuItem, {
            children: (0, o.jsx)(u.MenuLink, {
              external: "nav-external" === n.type,
              active: (0, i.matchPath)(d, location.pathname),
              asChild: !0,
              children: (0, o.jsx)(i.Link, {
                target: n.target,
                to: d,
                onClick: h,
                "data-testid": n.dataTestId,
                children: n.text
              })
            })
          }, n.text) : (0, o.jsx)(u.MenuItem, {
            children: (0, o.jsx)(u.MenuLink, {
              asChild: !0,
              children: (0, o.jsx)("button", {
                onClick: e => {
                  c(x(s, "", n.gaText, p)), n.dataTestId && _(n.dataTestId), n.onClickCallback?.(e)
                },
                "data-testid": n.dataTestId,
                children: n.text
              })
            })
          }, n.text)
        },
        S = ({
          globalNavigationComponent: e
        }) => {
          const a = e,
            {
              charactersNeeded: n
            } = (0, m.useRockstarUserState)(),
            {
              data: t
            } = (0, m.useRockstarUser)();
          return "gtao" !== n || 0 === (t.characters?.gtao ?? []).length ? null : (0, o.jsx)(a.AvatarMenuSection, {
            value: "open",
            children: (0, o.jsx)(p.CharacterProfile, {})
          })
        },
        C = ({
          globalNavigationComponent: e,
          target: a
        }) => {
          const n = e;
          return a.type === w ? (0, o.jsx)(n.SearchTargetDropdown, {
            title: a.text,
            value: a.value,
            children: a.targets.map(a => (0, o.jsx)(C, {
              globalNavigationComponent: e,
              target: a
            }, a.text))
          }) : (0, o.jsx)(n.SearchTarget, {
            value: a.value,
            title: a.text,
            children: a.text
          })
        },
        M = ({
          globalNavigationComponent: e,
          searchConfig: a,
          onSearch: n,
          getQueryFromUrl: t,
          isSearchPage: s
        }) => {
          const [l, _] = (0, r.useState)(""), [c, u] = (0, r.useState)(a.targets[0].value ?? ""), {
            search: g,
            pathname: d
          } = (0, i.useLocation)(), m = (0, i.useNavigate)(), p = e;
          (0, r.useEffect)(() => {
            if (s && (g || d)) {
              const [e, a] = t();
              _(e), u(a?.value || "")
            }
          }, [t, s, g, d]);
          const h = (e, a, o) => {
            if (!e) return;
            const t = n(e, a);
            t && (o?.(), t.startsWith("http") ? window.location.assign(t) : m(t))
          };
          return (0, o.jsx)(p.SearchBar, {
            onSearch: h,
            query: l,
            onQueryChange: _,
            target: c,
            onTargetChange: e => {
              h(l, e), u(e)
            },
            queryMin: 3,
            isSearchPage: s,
            children: (0, o.jsx)(p.SearchFilters, {
              children: a.targets.map(a => (0, o.jsx)(C, {
                globalNavigationComponent: e,
                target: a
              }, a.text))
            })
          })
        },
        z = {
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
        E = ({
          brand: e,
          site: a,
          scale: n
        }) => (0, o.jsx)("img", {
          className: "_1k6ojor1",
          src: e,
          alt: z[a] ?? a,
          "data-brand": a,
          style: n ? (0, g.DI)({
            [y]: String(n)
          }) : {}
        }, e),
        R = (0, d.withIntl)(({
          navigationData: e,
          globalNavigationComponent: a,
          gamesMenuComponent: n,
          avatarMenuData: s,
          searchConfig: l,
          onSearch: _,
          getQueryFromUrl: c,
          errorMessage: g,
          localisedStrings: p
        }) => {
          const f = a,
            y = (0, t.useLocale)(),
            [w] = (0, d.getLocale)(),
            C = (0, i.useLocation)(),
            z = (0, d.useIntl)(),
            {
              loggedIn: R,
              data: L
            } = (0, m.useRockstarUser)(),
            I = (0, i.useNavigate)(),
            {
              track: P
            } = (0, m.useGtmTrack)(),
            [T, N] = (0, r.useState)(!1),
            A = (e, a, n, o) => () => {
              P(x(e, o, a, n))
            },
            [G, q] = (0, r.useState)("dark"),
            D = (B = C.pathname, ["/", "/gta-online/mansions"].includes(B) ? "transparent" : "default");
          var B;
          const H = (e => [/\/account.*/].some(a => new RegExp("^" + a.source).test(e)) ? "visible" : void 0)(C.pathname),
            F = e => ["/"].includes(e);
          (0, r.useEffect)(() => {
            L && R && !T && L?.accountSynced && (N(!0), P({
              event: "account_synced"
            }))
          }, [L?.accountSynced, R]), (0, r.useLayoutEffect)(() => {
            document.body.setAttribute("data-color-mode", D)
          }, [D]), (0, r.useEffect)(() => {
            const e = e => {
              e.origin === window.origin && "navColorTheme" === e.data.source && e.data.mode && q(F(C.pathname) ? e.data.mode : "dark")
            };
            return window.addEventListener("message", e), () => {
              window.removeEventListener("message", e), q("dark")
            }
          }, []);
          const U = (0, r.useMemo)(() => (0, t.getConfigForDomain)(), []),
            {
              currentCharId: $ = 0,
              setSelectedCharacterTuple: O
            } = (0, m.useRockstarUserState)(),
            Q = (0, r.useMemo)(() => {
              const a = e.reduce((e, a) => {
                const n = a.appearancePaths.find(e => (0, i.matchPath)(e, C.pathname));
                return n && void 0 === e ? {
                  ...a,
                  matchedPath: n
                } : void 0 === e ? void 0 : e
              }, void 0);
              return a
            }, [e, C.pathname]);
          (0, r.useEffect)(() => {
            const e = L?.characters?.gtao ?? [];
            if (null !== R && !e.length) return void O(!1);
            if (null == $ || !e.length) return;
            const a = e?.[$] ?? e?.[0] ?? null;
            O(!!a?.platform && [a.platform, a.characterSlot])
          }, [$, L, R]);
          const V = Q?.matchedPath.options.isSearchPage || !1,
            J = (0, r.useMemo)(() => d.locales.find(e => e.iso.toLowerCase() === (0, t.toScLocaleString)(y))?.label, [d.locales]),
            K = (0, r.useMemo)(() => `${(0,t.getBase)()}${C?.pathname}`.replace(/\/\//g, "/"), [C?.pathname]);
          return (0, o.jsx)(f.Root, {
            brand: Q?.brand ? (0, o.jsx)(E, {
              brand: Q.brand,
              site: Q.site,
              scale: Q.brandScale
            }) : null,
            brandTitle: Q?.brandTitle,
            mode: D,
            navColorTheme: F(C.pathname) ? G : "dark",
            simpleMenu: Q?.simpleMenu,
            forceVisibility: H,
            locale: w.iso,
            children: (0, o.jsxs)(f.Header, {
              children: [(0, o.jsx)(f.SiteTitle, {
                quickAccessHidden: Q?.hideQuickAccess,
                onNavigate: I,
                children: C.pathname.length > 0 && !Q?.hideQuickAccess && (0, o.jsxs)(f.QuickMenu, {
                  children: [(0, o.jsx)(f.MenuItem, {
                    children: (0, o.jsx)(f.MenuLink, {
                      asChild: !0,
                      children: (0, o.jsxs)(i.Link, {
                        to: "/",
                        onClick: A("", "home", "", "/"),
                        children: [(0, o.jsx)(f.MenuIcon, {
                          src: h,
                          alt: p.quickMenuHome
                        }), p.quickMenuHome]
                      })
                    })
                  }), (0, o.jsx)(f.MenuItem, {
                    children: (0, o.jsx)(f.MenuLink, {
                      asChild: !0,
                      children: (0, o.jsxs)(i.Link, {
                        to: "/games",
                        onClick: A("", "games", "", "/games"),
                        children: [(0, o.jsx)(f.MenuIcon, {
                          src: b,
                          alt: p.quickMenuGames
                        }), p.quickMenuGames]
                      })
                    })
                  }), (0, o.jsx)(f.MenuItem, {
                    children: (0, o.jsx)(f.MenuLink, {
                      asChild: !0,
                      children: (0, o.jsxs)(i.Link, {
                        to: "/newswire",
                        onClick: A("", "newswire", "", "/newswire"),
                        children: [(0, o.jsx)(f.MenuIcon, {
                          src: k,
                          alt: p.quickMenuNewswire
                        }), p.quickMenuNewswire]
                      })
                    })
                  })]
                })
              }), (0, o.jsxs)(f.MobileMenu, {
                children: [!0 !== Q.hideSearch && (0, o.jsxs)(o.Fragment, {
                  children: [(0, o.jsx)(M, {
                    globalNavigationComponent: a,
                    searchConfig: l,
                    onSearch: _,
                    getQueryFromUrl: c,
                    isSearchPage: V,
                    errorMessage: g
                  }), (0, o.jsx)(f.SearchError, {
                    errorMessage: g
                  })]
                }), (0, o.jsx)(f.MobileMenuNav, {
                  children: Q?.links.map(e => (0, o.jsx)(j, {
                    globalNavigationComponent: f,
                    gamesMenuComponent: n,
                    link: e
                  }, e.text))
                }), Q?.cta && (0, o.jsx)(f.CallToAction, {
                  ...Q.cta,
                  asChild: !0,
                  onClick: A(Q.cta.ga, Q.cta.gaText, Q.cta.gaText, `${Q.cta.location.domain}${Q.cta.location.path}`),
                  size: "LG",
                  children: (0, o.jsx)(i.Link, {
                    to: `${Q.cta.location.domain}${Q.cta.location.path}`,
                    reloadDocument: Boolean(Q.cta.location.domain),
                    children: Q.cta.text
                  })
                }), !Q?.hideQuickAccess && (0, o.jsxs)(f.QuickMenu, {
                  children: [(0, o.jsx)(f.MenuItem, {
                    children: (0, o.jsx)(f.MenuLink, {
                      asChild: !0,
                      children: (0, o.jsxs)(i.Link, {
                        to: "/",
                        onClick: A("", "home", "Quick Access", "/"),
                        children: [(0, o.jsx)(f.MenuIcon, {
                          src: h,
                          alt: p.quickMenuHome
                        }), p.quickMenuHome]
                      })
                    })
                  }), (0, o.jsx)(f.MenuItem, {
                    children: (0, o.jsx)(f.MenuLink, {
                      asChild: !0,
                      children: (0, o.jsxs)(i.Link, {
                        to: "/games",
                        onClick: A("", "games", "Quick Access", "/games"),
                        children: [(0, o.jsx)(f.MenuIcon, {
                          src: b,
                          alt: p.quickMenuGames
                        }), p.quickMenuGames]
                      })
                    })
                  }), (0, o.jsx)(f.MenuItem, {
                    children: (0, o.jsx)(f.MenuLink, {
                      asChild: !0,
                      children: (0, o.jsxs)(i.Link, {
                        to: "/newswire",
                        onClick: A("", "newswire", "Quick Access", "/newswire"),
                        children: [(0, o.jsx)(f.MenuIcon, {
                          src: k,
                          alt: p.quickMenuNewswire
                        }), p.quickMenuNewswire]
                      })
                    })
                  })]
                })]
              }), (0, o.jsx)(f.Menu, {
                children: Q?.links.map(e => (0, o.jsx)(j, {
                  globalNavigationComponent: f,
                  gamesMenuComponent: n,
                  link: e
                }, e.text))
              }), (0, o.jsxs)(f.Actions, {
                children: [(0, o.jsx)(f.Breakpoint, {
                  showOn: "desktop",
                  children: Q?.cta && (0, o.jsx)(f.CallToAction, {
                    ...Q.cta,
                    asChild: !0,
                    onClick: A(Q.cta.ga, Q.cta.gaText, Q.cta.gaText, `${Q.cta.location.domain}${Q.cta.location.path}`),
                    children: (0, o.jsx)(i.Link, {
                      to: `${Q.cta.location.domain}${Q.cta.location.path}`,
                      reloadDocument: Boolean(Q.cta.location.domain),
                      children: Q.cta.text
                    })
                  })
                }), !0 !== Q.hideSearch && (0, o.jsxs)(f.Search, {
                  isSearchPage: V,
                  children: [(0, o.jsx)(f.SearchContainer, {
                    children: (0, o.jsx)(M, {
                      globalNavigationComponent: a,
                      searchConfig: l,
                      onSearch: _,
                      getQueryFromUrl: c,
                      isSearchPage: V,
                      errorMessage: g
                    })
                  }), (0, o.jsx)(f.SearchError, {
                    errorMessage: g
                  })]
                }), (0, o.jsxs)(f.AvatarMenu, {
                  avatarIconUrl: L?.avatar,
                  nickname: L?.nickname,
                  isLoggedIn: R,
                  onOpenChange: e => {
                    P({
                      event: "account_menu_click",
                      element_placement: "account menu",
                      text: e ? "open" : "close"
                    })
                  },
                  children: [R && (0, o.jsx)(S, {
                    globalNavigationComponent: a
                  }), (0, o.jsx)(f.AvatarMenuSection, {
                    value: "open",
                    children: (0, o.jsx)(f.AvatarMenuSectionContent, {
                      children: (0, o.jsx)(f.MenuList, {
                        children: R ? (0, o.jsxs)(o.Fragment, {
                          children: [L.nickname && (0, o.jsx)(f.AvatarMenuSectionHeader, {
                            children: L.nickname
                          }), s.loggedInLinks.map(e => (0, o.jsx)(j, {
                            globalNavigationComponent: f,
                            link: e,
                            gaEvent: "account_menu_click",
                            gaBreadCrumb: "account menu"
                          }, e.text)), (0, o.jsx)(j, {
                            globalNavigationComponent: f,
                            link: s.helpItem,
                            gaEvent: "account_menu_click",
                            gaBreadCrumb: "account menu"
                          }), (0, o.jsx)(f.MenuItem, {
                            children: (0, o.jsx)(f.MenuLink, {
                              href: `${U.logout}?returnUrl=/`,
                              "data-testid": "logoutButton",
                              "data-logged-in": "true",
                              onClick: A("account_menu_click", "log out", "account menu", `${U.logout}?returnUrl=/`),
                              children: p.avatarMenuSignOut
                            })
                          })]
                        }) : (0, o.jsxs)(o.Fragment, {
                          children: [(0, o.jsx)(f.MenuItem, {
                            children: (0, o.jsx)(f.MenuLink, {
                              href: `${U.login}?returnUrl=${K}&lang=${(0,t.toScLocaleString)(y)}`,
                              "data-testid": "loginLink",
                              "data-logged-in": "false",
                              onClick: A("account_menu_click", "sign in", "account menu", `${U.login}?returnUrl=${K}&lang=${(0,t.toScLocaleString)(y)}`),
                              children: p.avatarMenuSignIn
                            })
                          }), (0, o.jsx)(f.MenuItem, {
                            children: (0, o.jsx)(f.MenuLink, {
                              href: `${U.signup}&returnUrl=${K}&lang=${(0,t.toScLocaleString)(y)}`,
                              "data-testid": "signUpLink",
                              onClick: A("account_menu_click", "sign up", "account menu", `${U.signup}&returnUrl=${K}&lang=${(0,t.toScLocaleString)(y)}`),
                              children: p.avatarMenuSignUp
                            })
                          }), (0, o.jsx)(j, {
                            globalNavigationComponent: f,
                            link: s.helpItem,
                            gaEvent: "account_menu_click",
                            gaBreadCrumb: "account menu"
                          })]
                        })
                      })
                    })
                  }), (0, o.jsxs)(f.AvatarMenuSection, {
                    children: [(0, o.jsx)(f.AvatarMenuSectionHeaderDropdown, {
                      children: (0, o.jsxs)(f.AvatarMenuLanguageLabel, {
                        children: [(0, o.jsx)(u.Globe, {
                          label: p.avatarMenuSelectLanguage
                        }), (0, o.jsx)("span", {
                          "data-testid": "header-language-current",
                          children: J ?? p.avatarMenuSelectLanguage
                        })]
                      })
                    }), (0, o.jsx)(f.AvatarMenuSectionContent, {
                      children: (0, o.jsx)(f.MenuList, {
                        children: d.locales.map(e => {
                          const a = v.A[`global_nav_language_selector_option_${e.posix}`],
                            n = a ? z.formatMessage(a) : e.label;
                          return (0, o.jsx)(f.MenuItem, {
                            testId: `header-language-selector-${e.subdomaincom}`,
                            children: (0, o.jsx)(f.MenuLink, {
                              onClick: () => (0, d.onLanguageChange)({
                                selectedLocale: e
                              }),
                              onKeyDown: a => ((e, a) => {
                                "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), (0, d.onLanguageChange)({
                                  selectedLocale: a
                                }))
                              })(a, e),
                              tabIndex: 0,
                              "aria-label": n,
                              children: e.label
                            })
                          }, e.label)
                        })
                      })
                    })]
                  })]
                })]
              })]
            })
          })
        }, f);
      var L = n(90327),
        I = n(10622);
      const P = "__MFE_GLOBAL_HOOK__",
        T = () => {
          const e = window;
          e[P]?.history || (e[P] = Object.assign(e[P] || {}, {
            history: (0, I.zR)()
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
        A = (e = [], a, n) => {
          const o = (0, r.useRef)(null),
            t = (0, r.useRef)(new Set),
            s = (0, r.useRef)([]),
            i = (0, r.useRef)(0),
            l = (0, r.useRef)(0),
            _ = (0, r.useRef)(!1),
            c = (0, r.useMemo)(() => Array.from(new Set(e.filter(e => e >= 0 && e <= 100))).sort((e, a) => e - a), [e]);
          return (0, r.useEffect)(() => {
            t.current = new Set, s.current = c.slice()
          }, [c]), (0, r.useEffect)(() => {
            o.current = n ?? window
          }, [n]), (0, r.useEffect)(() => {
            const e = o.current;
            if (!e) return;
            const r = () => {
              _.current || (_.current = !0, requestAnimationFrame(() => {
                (() => {
                  const {
                    scrollTop: o,
                    scrollHeight: _,
                    percent: c
                  } = (() => {
                    const e = n,
                      a = document.documentElement,
                      o = document.body,
                      t = e ? e.scrollTop : a.scrollTop || o.scrollTop || window.scrollY || 0,
                      s = e ? e.scrollHeight : a.scrollHeight || o.scrollHeight || 0,
                      r = e ? e.clientHeight : a.clientHeight || window.innerHeight || 0,
                      i = Math.max(1, s - r);
                    return {
                      scrollTop: t,
                      scrollHeight: s,
                      percent: Math.max(0, Math.min(100, t / i * 100))
                    }
                  })();
                  i.current = c, l.current = o;
                  const u = s.current.find(e => c >= e);
                  if (!u) return;
                  if (t.current.has(u)) return;
                  t.current.add(u), s.current = s.current.filter(e => e !== u);
                  const g = _ * (u / 100);
                  a?.({
                    scrollY: u,
                    scrollLength: g
                  }), 0 === s.current.length && e.removeEventListener("scroll", r, {
                    capture: !1
                  })
                })(), _.current = !1
              }))
            };
            return r(), e.addEventListener("scroll", r, {
              passive: !0
            }), () => {
              e.removeEventListener("scroll", r, {
                capture: !1
              })
            }
          }, [a, n, c.join(",")]), {
            scrollY: i.current,
            scrollLength: l.current
          }
        },
        G = ({
          threshold: e,
          trackRef: a,
          children: n
        }) => {
          const {
            track: o
          } = (0, m.useGtmTrack)();
          return A(e, ({
            scrollY: e,
            scrollLength: a
          }) => {
            o({
              event: "page_scroll",
              scroll_depth: e,
              page_length: `${Math.round(a)}px`
            })
          }, a?.current ?? null), n
        };
      var q = n(79955),
        D = n.n(q),
        B = n(13517);
      const H = (0, d.defineMessages)({
        modal_pagination_group_sr_only_label: {
          id: "modal_pagination_group_sr_only_label",
          description: "Aria label describing modal pagination in list",
          defaultMessage: "Now showing {index} of {total}"
        }
      });
      var F = n(81270);
      const U = ({
          current: e = 0,
          total: a = 0,
          announcer: n
        }) => (0, o.jsx)("p", {
          className: "rockstargames-sites-rockstargamesec4533199609400e6361d508929048f7",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: n(e, a)
        }),
        $ = {
          ease: [.77, 0, .175, 1],
          duration: .5
        },
        O = {
          ease: "easeIn",
          duration: .3,
          delay: .5
        },
        Q = {
          opacity: 1
        },
        V = ({
          modal: e
        }) => {
          const {
            content: a,
            className: n,
            height: t,
            onClose: s,
            rect: l = {
              left: 0,
              top: 0
            },
            contentStyle: _ = {},
            contentClassName: c = "",
            width: u,
            fadeIn: g = !0,
            cardIds: p,
            activeId: h,
            theme: b,
            title: k,
            gtm: f = {},
            aspectRatio: y = "default",
            cardDimensions: v
          } = e, w = (0, r.useRef)(null), {
            left: x,
            top: j
          } = l, S = p?.indexOf(h), {
            track: C
          } = (0, m.useGtmTrack)(), {
            formatMessage: M
          } = (0, d.useIntl)(), z = null !== p && (p?.length || 0) > 1 && ("flag_bg" === b || "fob" === v?.size), E = window.location.href.includes("cms5"), [, R] = (0, i.useSearchParams)(), [L, I] = (0, r.useState)(!1), [P, T] = (0, r.useState)(!1), [N, A] = (0, r.useState)(), G = (0, r.useCallback)(e => {
            "number" == typeof e && p && e < p.length && e > -1 && R({
              info: p[e].toString()
            })
          }, [p, R]), q = (0, r.useCallback)(() => {
            const e = "number" == typeof S && S > -1 ? S - 1 : 0;
            G(e), C({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: k?.toLowerCase(),
              position: S
            })
          }, [S, G, k, C]), V = (0, r.useCallback)(() => {
            const e = "number" == typeof S && S > -1 ? S + 1 : 0;
            G(e), C({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: k?.toLowerCase(),
              position: S
            })
          }, [S, G, k, C]);
          (0, r.useEffect)(() => {
            const e = p?.findIndex(e => e === h);
            "number" == typeof e && (T(e <= 0), I(e >= (p?.length || 0) - 1))
          }, [p, h]);
          const J = (0, r.useRef)(null),
            K = (0, r.useMemo)(() => ({
              initial: {
                y: j,
                x,
                top: 0,
                left: 0,
                width: u,
                height: t,
                border: "0px solid transparent",
                background: "transparent",
                marginTop: z ? "0" : ""
              },
              shown: {
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
                  x: $,
                  y: $,
                  top: $,
                  left: $,
                  width: $,
                  height: $,
                  border: $,
                  background: {
                    delay: .3
                  }
                }
              }
            }), [j, x, u, t, z]);
          (0, r.useEffect)(() => {
            const e = e => {
              "function" == typeof s && "Escape" === e.key && (s(), C({
                event: "modal_close",
                element_placement: k?.toLowerCase(),
                ...f
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }, [f, s, k, C]);
          const W = (0, r.useCallback)(() => {
              "function" == typeof s && (s(), C({
                event: "modal_close",
                element_placement: k?.toLowerCase(),
                ...f
              }))
            }, [f, s, k, C]),
            Y = (0, r.useCallback)((e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let n = 0; n < e.children.length; n++) {
                const o = e.children[n];
                if (o.scrollHeight > o.clientHeight) return o;
                const t = Y(o, a - 1);
                if (t) return t
              }
              return null
            }, []),
            Z = (0, r.useCallback)(e => {
              let a;
              return N?.queried ? a = N.element : (a = Y(e, 2), A({
                queried: !0,
                element: a
              })), a
            }, [N?.element, N?.queried, Y]),
            X = (0, r.useCallback)(e => {
              if (w?.current?.children) {
                let a;
                const n = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = Z(w.current), e.preventDefault(), a && (a.scrollTop += n)
                }
              }
            }, [Z]),
            ee = g ? 0 : 1,
            ae = (0, r.useMemo)(() => (0, o.jsx)(B.motion.button, {
              className: "rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: O,
              onClick: () => {
                W()
              },
              onKeyDown: X,
              onKeyUp: X
            }), [X, W]),
            ne = Boolean(k),
            oe = E ? r.Fragment : D(),
            te = S ?? 0,
            se = p?.length,
            re = (0, r.useCallback)((e, a) => M(H.modal_pagination_group_sr_only_label, {
              index: `${e+1}`,
              total: `${a}`
            }), [M]);
          return (0, r.useMemo)(() => (0, o.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": z,
            "data-aspect-ratio": y,
            children: (0, o.jsx)(oe, {
              children: (0, o.jsxs)("div", {
                id: "modal",
                "data-testid": "modal",
                "aria-modal": "true",
                "aria-label": ne ? k : void 0,
                children: [(0, o.jsx)(B.motion.div, {
                  className: "rockstargames-sites-rockstargamescf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: Q,
                  transition: $,
                  onClick: () => W()
                }), z && (0, o.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, o.jsx)(U, {
                    current: te,
                    total: se,
                    announcer: re
                  }), (0, o.jsxs)(B.motion.div, {
                    className: "rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: O,
                    children: [(0, o.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: q,
                      disabled: P,
                      onKeyDown: X,
                      onKeyUp: X
                    }), (0, o.jsxs)("div", {
                      className: "rockstargames-sites-rockstargamese316695281c4c56337307741bda1371f",
                      "data-theme": b,
                      children: [" ", te + 1, (0, o.jsx)("div", {
                        className: "rockstargames-sites-rockstargamesc1ee424eae15f7b789c86e634df9e28d"
                      }), se, " "]
                    }), (0, o.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: V,
                      disabled: L,
                      onKeyDown: X,
                      onKeyUp: X,
                      "data-autofocus": !0
                    })]
                  }), ae]
                }), (0, o.jsx)(B.motion.div, {
                  className: "rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366",
                  ref: J,
                  initial: {
                    ...K.initial,
                    opacity: 0
                  },
                  animate: {
                    ...K.shown,
                    opacity: 1
                  },
                  transition: {
                    ...$,
                    opacity: {
                      duration: .2,
                      delay: .15
                    }
                  },
                  style: _,
                  children: (0, o.jsxs)(B.motion.div, {
                    className: (0, F.default)("rockstargames-sites-rockstargamesa7d77f83f629e9ae93f6934c8ba007b0", n),
                    children: [!z && ae, (0, o.jsx)(B.motion.div, {
                      className: (0, F.default)("rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714", c),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: O,
                      ref: w,
                      children: a
                    })]
                  })
                })]
              })
            })
          }), [z, y, oe, ne, k, te, se, re, q, P, X, b, V, L, ae, K.initial, K.shown, _, n, c, ee, a, W])
        },
        J = [{}, () => {}],
        K = (0, t.setContextItem)({
          context: (0, r.createContext)(J),
          key: "modalContext"
        }),
        W = ({
          children: e
        }) => {
          const [a, n] = (0, r.useState)(), {
            setBodyIsLocked: s
          } = (0, t.useBodyScrollable)("ModalProvider"), i = (0, r.useMemo)(() => a?.content ? (0, o.jsx)(V, {
            modal: a
          }) : null, [a]), l = (0, r.useCallback)(() => s(!1), [s]), _ = Boolean(a?.content);
          return (0, r.useEffect)(() => (window.addEventListener("popstate", l), () => {
            window.removeEventListener("popstate", l)
          }), [l]), (0, r.useEffect)(() => {
            s(_)
          }, [_]), (0, o.jsx)(K.Provider, {
            value: [i, n],
            children: e
          })
        };
      var Y = n(73357),
        Z = n(25633),
        X = n(17714),
        ee = n(98415),
        ae = n(47590),
        ne = n(18234);
      const oe = (e, a = {}) => {
          const n = (0, r.lazy)(e),
            {
              key: t,
              ...s
            } = a;
          return (0, r.useMemo)(() => (0, o.jsx)(r.Suspense, {
            fallback: "",
            children: (0, o.jsx)(n, {
              ...s
            }, t)
          }), [t])
        },
        te = (0, ae.A)(() => {
          const {
            setError: e,
            state: a
          } = (0, ne.b)(), {
            error: t
          } = a, {
            pathname: s
          } = (0, i.useLocation)();
          (0, r.useEffect)(() => {
            e()
          }, [s]), (0, r.useEffect)(() => {
            200 !== window?.env?.responseStatusCode && e({
              code: window.env.responseStatusCode
            })
          }, []);
          const l = {
            path: "*",
            element: oe(() => Promise.resolve().then(n.bind(n, 60982)), {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          };
          let _ = [{
            path: "/",
            element: oe(() => n.e(4459).then(n.bind(n, 4459)), {
              slug: "homepage",
              key: "homepage"
            })
          }, {
            path: "/account/*",
            element: oe(() => n.e(9311).then(n.t.bind(n, 69311, 23)))
          }, {
            path: "/careers-privacy",
            element: oe(() => Promise.all([n.e(2891), n.e(9546)]).then(n.bind(n, 99546)))
          }, {
            path: "/ccpa",
            element: oe(() => Promise.all([n.e(2891), n.e(2786)]).then(n.bind(n, 52786)))
          }, {
            path: "/community-resources",
            element: oe(() => Promise.all([n.e(6805), n.e(2285), n.e(9740), n.e(687)]).then(n.bind(n, 93482)))
          }, {
            path: "/community-resources/guidelines",
            element: oe(() => Promise.all([n.e(7821), n.e(6805), n.e(2285), n.e(9740), n.e(4168)]).then(n.bind(n, 87435)))
          }, {
            path: "/community-resources/additional-resources",
            element: oe(() => Promise.all([n.e(7821), n.e(6805), n.e(2285), n.e(9740), n.e(7819)]).then(n.bind(n, 82742)))
          }, {
            path: "/community-resources/online-comms-privacy",
            element: oe(() => Promise.all([n.e(7821), n.e(6805), n.e(2285), n.e(9740), n.e(2338)]).then(n.bind(n, 1473)))
          }, {
            path: "/community-resources/how-to-report",
            element: oe(() => Promise.all([n.e(7821), n.e(6805), n.e(2285), n.e(9740), n.e(1655)]).then(n.bind(n, 96546)))
          }, {
            path: "/community-resources/keep-account-safe",
            element: oe(() => Promise.all([n.e(7821), n.e(6805), n.e(2285), n.e(9740), n.e(8498)]).then(n.bind(n, 26385)))
          }, {
            path: "/conduct",
            element: (0, o.jsx)(i.Navigate, {
              to: "/community-guidelines",
              replace: !0
            })
          }, {
            path: "/contact",
            element: oe(() => n.e(2308).then(n.bind(n, 52308)))
          }, {
            path: "/cookies",
            element: oe(() => Promise.all([n.e(2891), n.e(8566)]).then(n.bind(n, 78566)))
          }, {
            path: "/corpinfo",
            element: oe(() => Promise.all([n.e(2891), n.e(5013)]).then(n.bind(n, 55013)))
          }, {
            path: "/VI",
            element: (0, o.jsx)(i.Navigate, {
              to: "/VI",
              replace: !0
            })
          }, {
            path: "/games",
            element: oe(() => Promise.all([n.e(5985), n.e(7821), n.e(2285), n.e(3673), n.e(8256), n.e(9803)]).then(n.bind(n, 39026)))
          }, {
            path: "/games/:gameTitlelug",
            element: oe(() => Promise.all([n.e(1946), n.e(6805), n.e(2285), n.e(5486)]).then(n.bind(n, 25486)))
          }, {
            path: "/legal",
            element: oe(() => Promise.all([n.e(2891), n.e(9768)]).then(n.bind(n, 29768)))
          }, {
            path: "/gta-v/thankyou",
            element: oe(() => n.e(586).then(n.bind(n, 90586)), {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: oe(() => n.e(7380).then(n.bind(n, 57380)))
          }, {
            path: "/community_event",
            element: oe(() => Promise.all([n.e(2285), n.e(387)]).then(n.bind(n, 20387)))
          }, {
            path: "/reddeadredemption2/*",
            element: oe(() => n.e(9147).then(n.t.bind(n, 29147, 23)))
          }, {
            path: "/reddeadredemption/*",
            element: oe(() => n.e(7538).then(n.t.bind(n, 47538, 23)))
          }, {
            path: "/bully/scholarshipedition",
            element: (0, o.jsx)(i.Navigate, {
              to: "/bully",
              replace: !0
            })
          }, {
            path: "/bully/*",
            element: oe(() => n.e(5202).then(n.t.bind(n, 35202, 23)))
          }, {
            path: "/reddeadonline/thankyou",
            element: oe(() => n.e(586).then(n.bind(n, 90586)), {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: oe(() => n.e(3137).then(n.t.bind(n, 53137, 23)))
          }, {
            path: "/downloads/*",
            element: oe(() => Promise.all([n.e(1681), n.e(890)]).then(n.bind(n, 890)))
          }, {
            path: "/reddeadonline/*",
            element: oe(() => n.e(3416).then(n.t.bind(n, 33416, 23)))
          }, {
            path: "/gifs/:hashId",
            element: oe(() => n.e(1626).then(n.t.bind(n, 41626, 23)))
          }, {
            path: "/gta-v/*",
            element: oe(() => n.e(6766).then(n.t.bind(n, 36766, 23)), {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: oe(() => n.e(6766).then(n.t.bind(n, 36766, 23)), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-plus",
            element: oe(() => n.e(3163).then(n.bind(n, 68401)), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/mansions",
            element: oe(() => n.e(4459).then(n.bind(n, 4459)), {
              slug: "/gta-online/mansions",
              key: "gta-online-mansions"
            })
          }, {
            path: "/gta-online/*",
            element: oe(() => n.e(6766).then(n.t.bind(n, 36766, 23)), {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy/*",
            element: oe(() => n.e(2405).then(n.t.bind(n, 12405, 23)))
          }, {
            path: "/gtatv/*",
            element: oe(() => n.e(8987).then(n.t.bind(n, 88987, 23)))
          }, {
            path: "/manuals",
            element: oe(() => Promise.all([n.e(6153), n.e(575)]).then(n.bind(n, 50575)))
          }, {
            path: "/manuals/music",
            element: oe(() => Promise.all([n.e(6153), n.e(1681), n.e(6827)]).then(n.bind(n, 6827)))
          }, {
            path: "/newswire",
            element: oe(() => Promise.all([n.e(5985), n.e(7821), n.e(1946), n.e(2285), n.e(3673), n.e(8256), n.e(7136)]).then(n.bind(n, 99595)))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: oe(() => n.e(692).then(n.bind(n, 38311)))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: oe(() => n.e(692).then(n.bind(n, 38311)))
          }, {
            path: "/privacy",
            element: oe(() => Promise.all([n.e(2891), n.e(4379)]).then(n.bind(n, 84379)))
          }, {
            path: "/refund-policy",
            element: oe(() => Promise.all([n.e(7301), n.e(2448)]).then(n.bind(n, 32448)))
          }, {
            path: "/rockstartv/*",
            element: oe(() => n.e(8778).then(n.t.bind(n, 78778, 23)))
          }, {
            path: "/screenshot-viewer/*",
            element: oe(() => n.e(4103).then(n.bind(n, 24103)))
          }, {
            path: "/search",
            element: oe(() => Promise.all([n.e(1946), n.e(6805), n.e(6479)]).then(n.bind(n, 6479)))
          }, {
            path: "/socialclubmaintenance",
            element: oe(() => n.e(7477).then(n.bind(n, 37477)))
          }, {
            path: "/south-korean-privacy-addendum",
            element: oe(() => Promise.all([n.e(2891), n.e(3730)]).then(n.bind(n, 53730)))
          }, {
            path: "/unsubscribe",
            element: oe(() => Promise.all([n.e(5985), n.e(7821), n.e(4560)]).then(n.bind(n, 84560)))
          }, {
            path: "/videos",
            element: oe(() => Promise.all([n.e(3600), n.e(6038), n.e(9941), n.e(5686)]).then(n.bind(n, 94483)))
          }, {
            path: "/videos/:videoId",
            element: oe(() => Promise.all([n.e(3600), n.e(1879), n.e(9941), n.e(5739)]).then(n.bind(n, 72604)))
          }, {
            ...l
          }];
          return isNaN(parseInt(t?.code)) || 200 === t?.code || (_ = [l]), (0, i.useRoutes)(_)
        }),
        se = {
          headerHidden: "rockstargames-sites-rockstargamesb6b034f449f546e8024b4fa91ec35516",
          main: "rockstargames-sites-rockstargamesf5a4be65929b33e16434b24a4d701e3e"
        },
        re = (0, t.withAutoRouteTracking)(({
          headerHidden: e
        }) => {
          const {
            pathname: a
          } = (0, ee.useLocation)(), n = (0, r.useRef)(null), [t, s] = (0, r.useState)(!1);
          return (0, r.useEffect)(() => {
            s(!0), t && n.current?.focus()
          }, [a]), (0, o.jsx)("main", {
            role: "main",
            id: "main",
            tabIndex: -1,
            ref: n,
            className: [se.main, e ? se.headerHidden : ""].join(" "),
            children: (0, o.jsx)(te, {})
          })
        });
      var ie = n(79784),
        le = n(39848),
        _e = n.n(le);
      T();
      const ce = (() => {
        const e = window;
        if (e[P]?.history || T(), e[P]?.history) return e[P].history;
        throw new Error("Browser History has not been initialised")
      })();
      let ue = /^\/(?:gta-online|gta-v|gta-plus)(?:\/.*)?$/i;
      ue = /^(?!\/gta-online\/mansions\/?$)\/(?:gta-online|gta-v|gta-plus)(?:\/.*)?$/i;
      const ge = [{
          regex: ue,
          chars: "gtao",
          crews: "true",
          currentChar: !0
        }],
        de = (0, d.withIntl)(() => {
          const [{
            iso: e
          }] = (0, d.getLocale)(), {
            setFooterHidden: a,
            setHeaderHidden: n,
            state: t
          } = (0, ne.b)(), {
            footerHidden: s,
            headerHidden: u
          } = t, [g] = (0, r.useContext)(K), {
            pathname: p
          } = (0, i.useLocation)(), {
            data: h
          } = (0, Y.Wx)(), {
            setCharactersNeeded: b,
            setCrewsNeeded: k,
            setCurrentCharId: f,
            currentCharId: y
          } = (0, m.useRockstarUserState)();
          return (0, r.useEffect)(() => {
            const e = (0, ie.Ek)({
                path: p
              }),
              o = (0, ie.UN)({
                path: p
              });
            a(e), n(o)
          }, [p]), (0, r.useEffect)(() => {
            const e = ge.find(e => e.regex.test(p));
            e ? (e.currentChar && void 0 === y && f(0), b(e.chars), k(e.crews)) : (b(null), k(null))
          }, [p, y, b, k, f]), (0, o.jsx)(l.NP, {
            className: "_1bflk800",
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            locale: e,
            children: (0, o.jsx)(Y.UN, {
              children: (0, o.jsxs)(G, {
                threshold: [25, 50, 75, 90, 100],
                children: [(0, o.jsx)(c.Banner, {
                  locale: e,
                  site: "www"
                }), !u && (0, o.jsx)(c.NavigationWrapper, {
                  globalNavLoaderComponent: R,
                  globalNavComponent: _,
                  username: h?.nickname,
                  userProfileLink: h?.profile_link,
                  hasNotifications: h?.hasNotification
                }), g, (0, o.jsx)(N, {}), (0, o.jsx)(re, {
                  headerHidden: u
                }), !s && (0, o.jsx)(_e(), {
                  onLanguageChange: d.onLanguageChange
                })]
              })
            })
          })
        }, f),
        me = (0, t.withRockstarGraph)((0, t.withReactiveState)(() => {
          const e = (0, t.useBase)(),
            {
              setTitle: a
            } = (0, ne.b)();
          return (0, r.useEffect)(() => {
            const e = e => {
              e.origin === `https://${window.env?.marketing?.marketingAuthTLD}` && "graph.titleUpdate" === (e.data?.type ?? null) && a(e.data.title)
            };
            return window.addEventListener("message", e), () => window.removeEventListener("message", e)
          }, [a]), (0, o.jsx)(Z.uU, {
            children: (0, o.jsx)(X.N2, {
              children: (0, o.jsx)(Y.iR, {
                children: (0, o.jsx)(L.default, {
                  history: ce,
                  basename: e,
                  children: (0, o.jsx)(W, {
                    children: (0, o.jsx)(de, {})
                  })
                })
              })
            })
          })
        }, {
          state: ie.wk
        }), {
          env: window?.env?.graphEnv ?? "prod"
        }),
        pe = window?.env?.oneTrustId ?? null,
        he = window?.env?.gtmId ?? null;
      (0, t.gtmInit)({
        id: he
      }), (0, t.oneTrustInit)({
        id: pe,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, s.H)(e).render((0, o.jsx)(me, {}))
        }
      })
    },
    18234(e, a, n) {
      n.d(a, {
        b: () => o.b$
      });
      var o = n(79784)
    },
    79784(e, a, n) {
      n.d(a, {
        Ek: () => s,
        UN: () => t,
        b$: () => i,
        wk: () => r
      });
      var o = n(13331);
      const t = ({
          path: e
        }) => window.self !== window.top || (["/gifs", "/screenshot-viewer", "/VI", "/videoplayer"].find(a => e.includes(a)) ?? []).length > 0,
        s = ({
          path: e
        }) => (["/gta-online/license-plates", "/VI"].find(a => e.includes(a)) ?? []).length > 0,
        r = (0, o.makeVar)({
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
          headerHidden: t({
            path: document.location.pathname
          }),
          footerHidden: s({
            path: document.location.pathname
          }),
          normalLogo: !0,
          search: ""
        }),
        i = () => {
          const e = (0, o.useState)(),
            a = (0, o.useMutateState)();
          return {
            state: e,
            toggleNavOpen: (n = null) => {
              const {
                navOpen: o
              } = e;
              a({
                navOpen: null !== n ? n : !o
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
            setBreadcrumb: (n = [], o = "") => {
              a({
                breadcrumb: {
                  ...e.breadcrumb,
                  links: n,
                  filter: o
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
              const n = "Rockstar Games";
              let o = e;
              e.endsWith(n) || (o = `${e} - ${n}`), document.title = o, a({
                title: o
              })
            },
            setError: ({
              code: e,
              message: n
            } = {}) => {
              a({
                error: {
                  code: e,
                  message: n
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
              base: n = null,
              navOpen: o = !1
            }) => {
              const t = {
                ...e.gameData
              };
              null !== n && (t.base = n.replace(/\/$/, "")), null !== o && (t.navOpen = o), a({
                gameData: t
              })
            }
          }
        }
    },
    85524(e, a, n) {
      n.d(a, {
        A: () => o
      });
      const o = (0, n(42909).defineMessages)({
        rsg_total_results_message: {
          id: "rsg_total_results_message",
          description: "Text for how many search results were found in a category",
          defaultMessage: "Showing {Tab} filtered by {Query}"
        },
        rsg_no_results: {
          id: "rsg_no_results",
          description: "Text for no search results found",
          defaultMessage: "Sorry, there were no results."
        },
        resources_tile_header: {
          id: "resources_tile_header",
          description: "Header for resources tile",
          defaultMessage: "Explore Safety Resources"
        },
        resources_tile_description: {
          id: "resources_tile_description",
          description: "Description for resources tile",
          defaultMessage: "Quickly find resources if you or someone you know is struggling and in need of help."
        },
        safety_learn_more_button: {
          id: "safety_learn_more_button",
          description: "Text for learn more button.",
          defaultMessage: "Learn More"
        },
        community_guidelines_tile_header: {
          id: "community_guidelines_tile_header",
          description: "Header for community guideliens tile",
          defaultMessage: "Explore Community Guidelines"
        },
        community_guidelines_tile_description: {
          id: "community_guidelines_tile_description",
          description: "Description for community guidelines tile",
          defaultMessage: "These guidelines outline the values we uphold and the policies we enforce to ensure player experiences are fair, respectful, and safe."
        },
        support_tile_header: {
          id: "support_tile_header",
          description: "Header for support tile",
          defaultMessage: "Need account assistance?"
        },
        support_tile_description: {
          id: "support_tile_description",
          description: "Description for support tile",
          defaultMessage: "For additional assistance with managing your account or data and privacy settings, visit our Customer Support page."
        },
        safety_get_support_button: {
          id: "safety_get_support_button",
          description: "Text for get support button.",
          defaultMessage: "Get Support"
        },
        community_guidelines_image_alt_text: {
          id: "community_guidelines_image_alt_text",
          description: "Alt text for the image in community guidelines",
          defaultMessage: "Say Sorry, Be Nice"
        },
        handshake_icon_alt_text: {
          id: "handshake_icon_alt_text",
          description: "Alt text for image icon - handshake",
          defaultMessage: "Handshake icon"
        },
        heartbook_icon_alt_text: {
          id: "heartbook_icon_alt_text",
          description: "Alt text for image icon - book with heart",
          defaultMessage: "Book with heart icon"
        },
        support_chat_icon_alt_text: {
          id: "support_chat_icon_alt_text",
          description: "Alt text for image icon - support chat",
          defaultMessage: "Support chat icon"
        },
        resources_last_updated_date: {
          id: "resources_last_updated_date",
          description: "Last updated date text for resources page",
          defaultMessage: "November 18, 2024"
        },
        avatarmenu_logout: {
          id: "avatarmenu_logout",
          description: "A link to log out of social club.",
          defaultMessage: "Log Out"
        },
        avatarmenu_signin: {
          id: "avatarmenu_signin",
          description: "A link to log in to social club.",
          defaultMessage: "Sign In"
        },
        avatarmenu_signup: {
          id: "avatarmenu_signup",
          description: "A link to join social club.",
          defaultMessage: "Sign Up"
        },
        avatarmenu_selectlanguage: {
          id: "avatarmenu_selectlanguage",
          description: "A dropdown header for the language selector",
          defaultMessage: "Select a Language"
        },
        quickmenu_home: {
          id: "quickmenu_home",
          description: "A link to the home page on rsgweb",
          defaultMessage: "Home"
        },
        quickmenu_games: {
          id: "quickmenu_games",
          description: "A link to the games page on rsgweb",
          defaultMessage: "Games"
        },
        quickmenu_newswire: {
          id: "quickmenu_newswire",
          description: "A link to the newswire page on rsgweb",
          defaultMessage: "Newswire"
        },
        game_screens_alt_text: {
          id: "game_screens_alt_text",
          description: "Alt text for images in the Screens section of Games pages",
          defaultMessage: "{title} screen, {id} of {total}"
        },
        global_nav_language_selector_option_en_us: {
          id: "global_nav_language_selector_option_en_us",
          description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
          defaultMessage: "English"
        },
        global_nav_language_selector_option_de_de: {
          id: "global_nav_language_selector_option_de_de",
          description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
          defaultMessage: "German - (Deutsch)"
        },
        global_nav_language_selector_option_es_es: {
          id: "global_nav_language_selector_option_es_es",
          description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
          defaultMessage: "Spanish - (Español)"
        },
        global_nav_language_selector_option_es_mx: {
          id: "global_nav_language_selector_option_es_mx",
          description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
          defaultMessage: "Spanish Latin America - (Español Latinoamérica)"
        },
        global_nav_language_selector_option_fr_fr: {
          id: "global_nav_language_selector_option_fr_fr",
          description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
          defaultMessage: "French - (Français)"
        },
        global_nav_language_selector_option_it_it: {
          id: "global_nav_language_selector_option_it_it",
          description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
          defaultMessage: "Italian - (Italiano)"
        },
        global_nav_language_selector_option_ja_jp: {
          id: "global_nav_language_selector_option_ja_jp",
          description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
          defaultMessage: "Japanese - (日本語)"
        },
        global_nav_language_selector_option_ko_kr: {
          id: "global_nav_language_selector_option_ko_kr",
          description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
          defaultMessage: "Korean - (한국어)"
        },
        global_nav_language_selector_option_pl_pl: {
          id: "global_nav_language_selector_option_pl_pl",
          description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
          defaultMessage: "Polish - (Polski)"
        },
        global_nav_language_selector_option_pt_br: {
          id: "global_nav_language_selector_option_pt_br",
          description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
          defaultMessage: "Português do Brasil - (Português do Brasil)"
        },
        global_nav_language_selector_option_ru_ru: {
          id: "global_nav_language_selector_option_ru_ru",
          description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
          defaultMessage: "Russian - (Русский)"
        },
        global_nav_language_selector_option_zh_tw: {
          id: "global_nav_language_selector_option_zh_tw",
          description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
          defaultMessage: "Chinese Traditional - (繁體中文)"
        },
        global_nav_language_selector_option_zh_hans: {
          id: "global_nav_language_selector_option_zh_hans",
          description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
          defaultMessage: "Chinese Simplified - (简体中文)"
        },
        games_page_buy_cta: {
          id: "games_page_buy_cta",
          description: "Text for the button that links to the store for the game.",
          defaultMessage: "BUY NOW"
        },
        games_page_external_link: {
          id: "games_page_external_link",
          description: "Text that notifies a screen reader that the link is an external link.",
          defaultMessage: "(Opens in new tab)"
        }
      })
    },
    52542(e) {
      e.exports = JSON.parse('{"de-DE":{"avatarmenu_logout":"Abmelden","avatarmenu_selectlanguage":"Eine Sprache auswählen","avatarmenu_signin":"Anmelden","avatarmenu_signup":"Registrieren","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Diese Richtlinien beschreiben die Werte, die wir voraussetzen, und die Regeln, die wir anwenden, um sicherzustellen, dass alle Spieler ein faires, respektvolles und sicheres Spielerlebnis haben.","community_guidelines_tile_header":"Community-Richtlinien anschauen","email_settings_cta":"Präferenzen aktualisieren","game_screens_alt_text":"{title}-Bildschirm, {id} von {total}","global_nav_language_selector_option_de_de":"Deutsch","global_nav_language_selector_option_en_us":"Englisch – (English)","global_nav_language_selector_option_es_es":"Spanisch – (Español)","global_nav_language_selector_option_es_mx":"Lateinamerikanisches Spanisch – (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"Französisch – (Français)","global_nav_language_selector_option_it_it":"Italienisch – (Italiano)","global_nav_language_selector_option_ja_jp":"Japanisch – (日本語)","global_nav_language_selector_option_ko_kr":"Koreanisch – (한국어)","global_nav_language_selector_option_pl_pl":"Polnisch – (Polski)","global_nav_language_selector_option_pt_br":"Brasilianisches Portugiesisch – (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Russisch – (Русский)","global_nav_language_selector_option_zh_hans":"Vereinfachtes Chinesisch – (简体中文)","global_nav_language_selector_option_zh_tw":"Traditionelles Chinesisch – (繁體中文)","handshake_icon_alt_text":"Symbol: Händeschütteln","heartbook_icon_alt_text":"Symbol: Buch mit Herz","quickmenu_games":"Spiele","quickmenu_home":"Startseite","quickmenu_newswire":"Newswire","resources_last_updated_date":"18. November 2024","resources_tile_description":"Finde schnell Ressourcen, falls du oder jemand, den du kennst, Probleme hat und Hilfe braucht.","resources_tile_header":"Sicherheitsressourcen anschauen","rockstargames_company_info_br":"Brasilien","rockstargames_company_info_cz":"Tschechische Republik","rockstargames_company_info_de":"Deutschland","rockstargames_company_info_display_for_country":"Seiteninformationen für {country} anzeigen","rockstargames_company_info_es":"Spanien","rockstargames_company_info_fr":"Frankreich","rockstargames_company_info_it":"Italien","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"Südkorea","rockstargames_company_info_mx":"Mexiko","rockstargames_company_info_nl":"Niederlande","rockstargames_company_info_pl":"Polen","rockstargames_company_info_ru":"Russland","rockstargames_company_info_sa":"Saudi-Arabien","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"USA","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"{item} aus {collection} herunterladen","rockstargames_downloads_dimensions_label":"{width} x {height} Pixel.","rockstargames_downloads_go_back":"Zurück","rsg_no_results":"Diese Suche ergab leider keine Treffer.","rsg_total_results_message":"Suche nach {Tab}, gefiltert nach {Query}","safety_get_support_button":"Support kontaktieren","safety_learn_more_button":"Mehr erfahren","support_chat_icon_alt_text":"Symbol: Support-Chat","support_tile_description":"Besuche unsere Kundendienst-Website, wenn du zusätzliche Hilfe mit der Verwaltung deines Kontos oder den Datenschutz- und Privatsphäreeinstellungen benötigst.","support_tile_header":"Brauchst du Hilfe mit deinem Konto?","unsubscribe_error_description":"Diese URL ist eventuell ungültig. Du kannst deine Präferenzen bezüglich E-Mails von Rockstar Games in den Einstellungen deines Kontos ändern.","unsubscribe_error_header":"Fehler beim Abbestellen","unsubscribe_info_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_info_header":"Du hast E-Mails bereits abbestellt","unsubscribe_success_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_success_header":"Erfolgreich abbestellt"},"en-US":{"avatarmenu_logout":"Log Out","avatarmenu_selectlanguage":"Select a Language","avatarmenu_signin":"Sign In","avatarmenu_signup":"Sign Up","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"These guidelines outline the values we uphold and the policies we enforce to ensure player experiences are fair, respectful, and safe.","community_guidelines_tile_header":"Explore Community Guidelines","email_settings_cta":"Update Preferences","game_screens_alt_text":"{title} screen, {id} of {total}","games_page_buy_cta":"BUY NOW","games_page_external_link":"(Opens in new tab)","global_nav_language_selector_option_de_de":"German - (Deutsch)","global_nav_language_selector_option_en_us":"English","global_nav_language_selector_option_es_es":"Spanish - (Español)","global_nav_language_selector_option_es_mx":"Spanish Latin America - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"French - (Français)","global_nav_language_selector_option_it_it":"Italian - (Italiano)","global_nav_language_selector_option_ja_jp":"Japanese - (日本語)","global_nav_language_selector_option_ko_kr":"Korean - (한국어)","global_nav_language_selector_option_pl_pl":"Polish - (Polski)","global_nav_language_selector_option_pt_br":"Português do Brasil - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Russian - (Русский)","global_nav_language_selector_option_zh_hans":"Chinese Simplified - (简体中文)","global_nav_language_selector_option_zh_tw":"Chinese Traditional - (繁體中文)","handshake_icon_alt_text":"Handshake icon","heartbook_icon_alt_text":"Book with heart icon","quickmenu_games":"Games","quickmenu_home":"Home","quickmenu_newswire":"Newswire","resources_last_updated_date":"November 18, 2024","resources_tile_description":"Quickly find resources if you or someone you know is struggling and in need of help.","resources_tile_header":"Explore Safety Resources","rockstargames_company_info_br":"Brazil","rockstargames_company_info_cz":"Czech Republic","rockstargames_company_info_de":"Germany","rockstargames_company_info_display_for_country":"Display page information for {country}","rockstargames_company_info_es":"Spain","rockstargames_company_info_fr":"France","rockstargames_company_info_it":"Italy","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"South Korea","rockstargames_company_info_mx":"Mexico","rockstargames_company_info_nl":"Netherlands","rockstargames_company_info_pl":"Poland","rockstargames_company_info_ru":"Russian Federation","rockstargames_company_info_sa":"Saudi Arabia","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"United States","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Download {item} {collection}","rockstargames_downloads_dimensions_label":"{width} by {height} pixels.","rockstargames_downloads_go_back":"Go back","rsg_no_results":"Sorry, there were no results.","rsg_total_results_message":"Showing {Tab} filtered by {Query}","safety_get_support_button":"Get Support","safety_learn_more_button":"Learn More","support_chat_icon_alt_text":"Support chat icon","support_tile_description":"For additional assistance with managing your account or data and privacy settings, visit our Customer Support page.","support_tile_header":"Need account assistance?","unsubscribe_error_description":"This URL may be invalid. You can make changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_error_header":"Error Unsubscribing","unsubscribe_info_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_info_header":"You\'re Already Unsubscribed","unsubscribe_success_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_success_header":"Successfully Unsubscribed"},"es-ES":{"avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Selecciona un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","community_guidelines_image_alt_text":"Say sorry, be nice (pide perdón, sé amable)","community_guidelines_tile_description":"Estas directrices resumen los valores que defendemos y las políticas que aplicamos para asegurarnos de que nuestros jugadores disfrutan de una experiencia justa, respetuosa y segura.","community_guidelines_tile_header":"Ver las directrices de la comunidad","email_settings_cta":"Cambiar tus preferencias","game_screens_alt_text":"pantalla de {title}, {id} de {total}","global_nav_language_selector_option_de_de":"Alemán - (Deutsch)","global_nav_language_selector_option_en_us":"Inglés (English)","global_nav_language_selector_option_es_es":"Español - (España)","global_nav_language_selector_option_es_mx":"Español - (Latinoamérica)","global_nav_language_selector_option_fr_fr":"Francés - (Français)","global_nav_language_selector_option_it_it":"Italiano","global_nav_language_selector_option_ja_jp":"Japonés - (日本語)","global_nav_language_selector_option_ko_kr":"Coreano - (한국어)","global_nav_language_selector_option_pl_pl":"Polaco - (Polski)","global_nav_language_selector_option_pt_br":"Portugués brasileño - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Ruso - (Русский)","global_nav_language_selector_option_zh_hans":"Chino simplificado - (简体中文)","global_nav_language_selector_option_zh_tw":"Chino tradicional - (繁體中文)","handshake_icon_alt_text":"Icono de un apretón de manos","heartbook_icon_alt_text":"Icono de un libro con un corazón","quickmenu_games":"Juegos","quickmenu_home":"Inicio","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 De noviembre de 2024","resources_tile_description":"Encuentra ayuda rápidamente en caso de que tú o alguien que conoces esté pasando por dificultades y necesite apoyo.","resources_tile_header":"Ver los servicios de ayuda","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información para {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federación Rusa","rockstargames_company_info_sa":"Arabia Saudí","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width} por {height} píxeles.","rockstargames_downloads_go_back":"Volver","rsg_no_results":"Lo sentimos, no hay resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Obtén asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Icono de chat de asistencia","support_tile_description":"Si necesitas ayuda adicional para gestionar tu cuenta o tus ajustes de datos o privacidad, visita nuestro sitio web de asistencia técnica.","support_tile_header":"¿Necesitas ayuda con tu cuenta?","unsubscribe_error_description":"Puede que esta URL no sea válida. Puedes cambiar tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_error_header":"Error al cancelar la suscripción","unsubscribe_info_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_info_header":"Ya has cancelado tu suscripción","unsubscribe_success_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_success_header":"Has cancelado tu suscripción con éxito"},"es-MX":{"avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Seleccionar un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","community_guidelines_image_alt_text":"Imagen con el mensaje: Say Sorry, Be Nice","community_guidelines_tile_description":"Estas directrices describen nuestros valores y las políticas que imponemos para asegurar que las experiencias de los jugadores sean justas, respetuosas y seguras.","community_guidelines_tile_header":"Directrices de la comunidad","email_settings_cta":"Actualizar preferencias","game_screens_alt_text":"pantalla de {title}, {id} de {total}","global_nav_language_selector_option_de_de":"Alemán - (Deutsch)","global_nav_language_selector_option_en_us":"Inglés - (English)","global_nav_language_selector_option_es_es":"Español (España)","global_nav_language_selector_option_es_mx":"Español (Latinoamérica)","global_nav_language_selector_option_fr_fr":"Francés - (Français)","global_nav_language_selector_option_it_it":"Italiano","global_nav_language_selector_option_ja_jp":"Japonés - (日本語)","global_nav_language_selector_option_ko_kr":"Coreano - (한국어)","global_nav_language_selector_option_pl_pl":"Polaco - (Polski)","global_nav_language_selector_option_pt_br":"Portugués de Brasil - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Ruso - (Русский)","global_nav_language_selector_option_zh_hans":"Chino simplificado - (简体中文)","global_nav_language_selector_option_zh_tw":"Chino tradicional - (繁體中文)","handshake_icon_alt_text":"Ícono de un apretón de manos","heartbook_icon_alt_text":"Ícono de un libro con un corazón","quickmenu_games":"Juegos","quickmenu_home":"Inicio","quickmenu_newswire":"Canal de noticias","resources_last_updated_date":"18 de noviembre de 2024","resources_tile_description":"Encuentra recursos rápidamente si tú o alguien que conoces necesita ayuda.","resources_tile_header":"Recursos de seguridad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información de página de {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Rusia","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos de América","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width}x{height} píxeles.","rockstargames_downloads_go_back":"Atrás","rsg_no_results":"Lo lamentamos, pero no se encontraron resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Recibir asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Ícono de chat de soporte","support_tile_description":"Para recibir asistencia adicional en relación con tu cuenta, datos o ajustes de privacidad, visita nuestra página de soporte.","support_tile_header":"Asistencia para tu cuenta","unsubscribe_error_description":"La dirección URL podría ser inválida. Puedes cambiar las preferencias de tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_error_header":"Error al darse de baja","unsubscribe_info_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_info_header":"Ya te has dado de baja.","unsubscribe_success_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_success_header":"Éxito al darse de baja"},"fr-FR":{"avatarmenu_logout":"Se déconnecter","avatarmenu_selectlanguage":"Sélectionner une langue","avatarmenu_signin":"Se connecter","avatarmenu_signup":"S’abonner","community_guidelines_image_alt_text":"Image avec le texte en anglais Say Sorry, Be Nice","community_guidelines_tile_description":"Ces règles décrivent nos valeurs et les politiques que nous faisons appliquer pour assurer à tous les joueurs une expérience juste, respectueuse et sûre.","community_guidelines_tile_header":"Explorez nos Règles de la communauté","email_settings_cta":"Mettre vos préférences à jour","game_screens_alt_text":"{title} écran, {id} sur {total}","global_nav_language_selector_option_de_de":"Allemand - (Deutsch)","global_nav_language_selector_option_en_us":"Anglais - (English)","global_nav_language_selector_option_es_es":"Espagnol - (Español)","global_nav_language_selector_option_es_mx":"Espagnol d’Amérique latine - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"Français","global_nav_language_selector_option_it_it":"Italien - (Italiano)","global_nav_language_selector_option_ja_jp":"Japonais - (日本語)","global_nav_language_selector_option_ko_kr":"Coréen - (한국어)","global_nav_language_selector_option_pl_pl":"Polonais - (Polski)","global_nav_language_selector_option_pt_br":"Portugais brésilien - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Russe - (Русский)","global_nav_language_selector_option_zh_hans":"Chinois simplifié - (简体中文)","global_nav_language_selector_option_zh_tw":"Chinois traditionnel - (繁體中文)","handshake_icon_alt_text":"Icône de poignée de main","heartbook_icon_alt_text":"Icône de livre avec un cœur","quickmenu_games":"Jeux","quickmenu_home":"Accueil","quickmenu_newswire":"Newswire","resources_last_updated_date":"Le 18 novembre 2024","resources_tile_description":"Trouvez rapidement des ressources si vous, ou une personne que vous connaissez, êtes en difficulté et avez besoin d\'aide.","resources_tile_header":"Explorez nos ressources relatives à la sécurité","rockstargames_company_info_br":"le Brésil","rockstargames_company_info_cz":"la République tchèque","rockstargames_company_info_de":"l\'Allemagne","rockstargames_company_info_display_for_country":"Afficher les informations de la page pour {country}","rockstargames_company_info_es":"l\'Espagne","rockstargames_company_info_fr":"la France","rockstargames_company_info_it":"l\'Italie","rockstargames_company_info_jp":"le Japon","rockstargames_company_info_kr":"la Corée du Sud","rockstargames_company_info_mx":"le Mexique","rockstargames_company_info_nl":"les Pays-Bas","rockstargames_company_info_pl":"la Pologne","rockstargames_company_info_ru":"la Fédération de Russie","rockstargames_company_info_sa":"l\'Arabie saoudite","rockstargames_company_info_tw":"Taïwan","rockstargames_company_info_us":"les États-Unis","rockstargames_company_info_zh":"la Chine","rockstargames_downloads_collections_download_text":"Télécharger ({collection} - {item})","rockstargames_downloads_dimensions_label":"{width}x{height} pixels.","rockstargames_downloads_go_back":"Précédent","rsg_no_results":"Désolé, aucun résultat n\'a été trouvé.","rsg_total_results_message":"Résultats : {Tab} Filtres : {Query}","safety_get_support_button":"Obtenir de l\'aide","safety_learn_more_button":"En savoir plus","support_chat_icon_alt_text":"Icône de discussion de l\'assistance","support_tile_description":"Si vous avez besoin d\'aide supplémentaire pour gérer votre compte ou les paramètres de vos données et de votre confidentialité, rendez-vous sur notre page d\'assistance à la clientèle.","support_tile_header":"Besoin d\'aide pour votre compte ?","unsubscribe_error_description":"Cette URL semble non valide. Vous pouvez modifier vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_error_header":"Une erreur est survenue lors du désabonnement","unsubscribe_info_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réabonnez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_info_header":"Vous êtes déjà désabonné(e)","unsubscribe_success_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réabonnez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_success_header":"Votre désabonnement a été pris en compte"},"it-IT":{"avatarmenu_logout":"Esci","avatarmenu_selectlanguage":"Seleziona una lingua","avatarmenu_signin":"Accedi","avatarmenu_signup":"Registrati","community_guidelines_image_alt_text":"Immagine con logo “Say Sorry, Be Nice”.","community_guidelines_tile_description":"Queste linee guida definiscono i valori che sosteniamo e le politiche che applichiamo per assicurare ai giocatori un’esperienza positiva, rispettosa e sicura.","community_guidelines_tile_header":"Scopri le Linee guida della comunità","email_settings_cta":"Aggiorna le preferenze","game_screens_alt_text":"Schermata {title}, {id} di {total}","global_nav_language_selector_option_de_de":"Tedesco - (Deutsch)","global_nav_language_selector_option_en_us":"Inglese - (English)","global_nav_language_selector_option_es_es":"Spagnolo - (Español)","global_nav_language_selector_option_es_mx":"Spagnolo (America Latina) - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"Francese - (Français)","global_nav_language_selector_option_it_it":"Italiano","global_nav_language_selector_option_ja_jp":"Giapponese - (日本語)","global_nav_language_selector_option_ko_kr":"Coreano - (한국어)","global_nav_language_selector_option_pl_pl":"Polacco - (Polski)","global_nav_language_selector_option_pt_br":"Portoghese (Brasile) - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Russo - (Русский)","global_nav_language_selector_option_zh_hans":"Chinese semplificato - (简体中文)","global_nav_language_selector_option_zh_tw":"Cinese tradizionale - (繁體中文)","handshake_icon_alt_text":"Icona della stretta di mano","heartbook_icon_alt_text":"Icona di un libro con un cuore","quickmenu_games":"Giochi","quickmenu_home":"Home","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 Novembre 2024","resources_tile_description":"Trova velocemente le risorse che cerchi se tu o qualcuno che conosci è in difficoltà e ha bisogno di aiuto.","resources_tile_header":"Scopri le risorse per la sicurezza","rockstargames_company_info_br":"Brasile","rockstargames_company_info_cz":"Repubblica Ceca","rockstargames_company_info_de":"Germania","rockstargames_company_info_display_for_country":"Mostra informazioni sulla pagina per il paese seguente: {country}","rockstargames_company_info_es":"Spagna","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Giappone","rockstargames_company_info_kr":"Corea del Sud","rockstargames_company_info_mx":"Messico","rockstargames_company_info_nl":"Paesi Bassi","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federazione Russa","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Stati Uniti","rockstargames_company_info_zh":"Cina","rockstargames_downloads_collections_download_text":"Scarica {item} {collection}","rockstargames_downloads_dimensions_label":"{width} per {height} pixel.","rockstargames_downloads_go_back":"Torna indietro","rsg_no_results":"Spiacente, nessun risultato trovato.","rsg_total_results_message":"Scheda {Tab} filtrata per {Query}","safety_get_support_button":"Chiedi assistenza","safety_learn_more_button":"Altre informazioni","support_chat_icon_alt_text":"Icona della chat di assistenza","support_tile_description":"Per ulteriore assistenza sulla gestione del tuo account o dei tuoi data e sulle impostazioni della privacy, visita la nostra pagina del supporto clienti.","support_tile_header":"Hai bisogno di aiuto con il tuo account?","unsubscribe_error_description":"Questo URL potrebbe non essere valido. Puoi apportare modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_error_header":"Errore nel tentativo di annullamento dell’iscrizione","unsubscribe_info_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_info_header":"Hai già annullato l’iscrizione","unsubscribe_success_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_success_header":"Iscrizione annullata con successo"},"ja-JP":{"avatarmenu_logout":"ログアウト","avatarmenu_selectlanguage":"言語を選択","avatarmenu_signin":"サインイン","avatarmenu_signup":"サインアップ","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"このガイドラインでは、プレイヤーの体験が公平で、尊重され、安全であることを保証するため弊社が強化する方針ならびに、弊社が支持する価値観を説明しています。","community_guidelines_tile_header":"コミュニティガイドラインをチェックする","email_settings_cta":"設定を更新","game_screens_alt_text":"{title}画面の{id}/{total}","global_nav_language_selector_option_de_de":"ドイツ語 - (Deutsch)","global_nav_language_selector_option_en_us":"英語 - (English)","global_nav_language_selector_option_es_es":"スペイン語 - (Español)","global_nav_language_selector_option_es_mx":"スペイン語(ラテンアメリカ) - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"フランス語 - (Français)","global_nav_language_selector_option_it_it":"イタリア語 - (Italiano)","global_nav_language_selector_option_ja_jp":"日本語","global_nav_language_selector_option_ko_kr":"韓国語 - (한국어)","global_nav_language_selector_option_pl_pl":"ポーランド語 - (Polski)","global_nav_language_selector_option_pt_br":"ポルトガル語(ブラジル) - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"ロシア語 - (Русский)","global_nav_language_selector_option_zh_hans":"簡体字中国語 - (简体中文)","global_nav_language_selector_option_zh_tw":"繁体字中国語 - (繁體中文)","handshake_icon_alt_text":"握手のアイコン","heartbook_icon_alt_text":"ハートのついた本のアイコン","quickmenu_games":"ゲーム","quickmenu_home":"ホーム","quickmenu_newswire":"Newswire","resources_last_updated_date":"2024年11月18日","resources_tile_description":"あなた自身もしくは知人が困っており、ヘルプが必要な場合の情報を見つける。","resources_tile_header":"安全性に関する情報をチェックする","rockstargames_company_info_br":"ブラジル","rockstargames_company_info_cz":"チェコ","rockstargames_company_info_de":"ドイツ","rockstargames_company_info_display_for_country":"{Country}のページを表示する","rockstargames_company_info_es":"スペイン","rockstargames_company_info_fr":"フランス","rockstargames_company_info_it":"イタリア","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韓国","rockstargames_company_info_mx":"メキシコ","rockstargames_company_info_nl":"オランダ","rockstargames_company_info_pl":"ポーランド","rockstargames_company_info_ru":"ロシア連邦","rockstargames_company_info_sa":"サウジアラビア","rockstargames_company_info_tw":"台湾","rockstargames_company_info_us":"アメリカ","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"ダウンロード {item} {collection}","rockstargames_downloads_dimensions_label":"{width}×{height}ピクセル","rockstargames_downloads_go_back":"戻る","rsg_no_results":"申し訳ありません、結果が見つかりませんでした。","rsg_total_results_message":"{Query}でフィルターした{Tab}を表示中","safety_get_support_button":"サポートを依頼する","safety_learn_more_button":"詳細を見る","support_chat_icon_alt_text":"サポートチャットのアイコン","support_tile_description":"アカウントやデータ、プライバシー設定の管理についての追加アシストはカスタマーサポートページをご覧ください。","support_tile_header":"アカウントアシストが必要ですか？","unsubscribe_error_description":"このURLは無効になっている可能性があります。アカウント設定のページでロックスター・ゲームスのメール受信設定を変更できます。","unsubscribe_error_header":"登録解除時にエラー","unsubscribe_info_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_info_header":"登録解除済みです","unsubscribe_success_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_success_header":"登録解除が完了しました"},"ko-KR":{"avatarmenu_logout":"로그아웃","avatarmenu_selectlanguage":"언어 선택","avatarmenu_signin":"로그인","avatarmenu_signup":"가입","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"공정, 상호 존중, 안전을 바탕으로 한 플레이어 경험을 제공하기 위해 당사에서 추구하는 가치 및 시행하는 정책을 정리한 가이드라인입니다.","community_guidelines_tile_header":"커뮤니티 가이드라인 살펴보기","email_settings_cta":"설정 변경","game_screens_alt_text":"{title} 화면, {total}의 {id}","global_nav_language_selector_option_de_de":"독일어 - (Deutsch)","global_nav_language_selector_option_en_us":"영어 - (English)","global_nav_language_selector_option_es_es":"스페인어 - (Español)","global_nav_language_selector_option_es_mx":"라틴 아메리카 스페인어 - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"프랑스어 - (Français)","global_nav_language_selector_option_it_it":"이탈리아어 - (Italiano)","global_nav_language_selector_option_ja_jp":"일본어 - (日本語)","global_nav_language_selector_option_ko_kr":"한국어","global_nav_language_selector_option_pl_pl":"폴란드어 - (Polski)","global_nav_language_selector_option_pt_br":"브라질 포르투갈어 - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"러시아어 - (Русский)","global_nav_language_selector_option_zh_hans":"중국어 간체 - (简体中文)","global_nav_language_selector_option_zh_tw":"중국어 번체 - (繁體中文)","handshake_icon_alt_text":"악수 모양 아이콘","heartbook_icon_alt_text":"책과 하트 아이콘","quickmenu_games":"게임","quickmenu_home":"홈","quickmenu_newswire":"뉴스와이어","resources_last_updated_date":"2024년 11월 18일","resources_tile_description":"본인 및 주변인에게 도움이 필요하다면 이곳에서 관련 정보를 빠르게 찾아보실 수 있습니다.","resources_tile_header":"안전 관련 정보 살펴보기","rockstargames_company_info_br":"브라질","rockstargames_company_info_cz":"체코 공화국","rockstargames_company_info_de":"독일","rockstargames_company_info_display_for_country":"페이지 내용 표시 - {country}","rockstargames_company_info_es":"스페인","rockstargames_company_info_fr":"프랑스","rockstargames_company_info_it":"이탈리아","rockstargames_company_info_jp":"일본","rockstargames_company_info_kr":"대한민국","rockstargames_company_info_mx":"멕시코","rockstargames_company_info_nl":"네덜란드","rockstargames_company_info_pl":"폴란드","rockstargames_company_info_ru":"러시아 연방","rockstargames_company_info_sa":"사우디 아라비아","rockstargames_company_info_tw":"대만","rockstargames_company_info_us":"미국","rockstargames_company_info_zh":"중국","rockstargames_downloads_collections_download_text":"{collection} {item} 다운로드","rockstargames_downloads_dimensions_label":"{width} x {height} 픽셀입니다.","rockstargames_downloads_go_back":"뒤로가기","rsg_no_results":"죄송합니다, 결과가 없습니다.","rsg_total_results_message":"{Query} 필터를 적용한 {Tab} 보기","safety_get_support_button":"도움 요청하기","safety_learn_more_button":"더 알아보기","support_chat_icon_alt_text":"지원 채팅 아이콘","support_tile_description":"계정, 데이터, 개인 정보 보호 설정을 관리하는 데 추가로 도움이 필요하시다면 저희의 고객 지원 페이지를 방문해주세요.","support_tile_header":"계정 관련 도움이 필요하신가요?","unsubscribe_error_description":"이 URL은 유효하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경할 수 있습니다.","unsubscribe_error_header":"구독 취소 오류","unsubscribe_info_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_info_header":"이미 구독 취소를 하였습니다","unsubscribe_success_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_success_header":"구독 취소 완료"},"pl-PL":{"avatarmenu_logout":"Wyloguj się","avatarmenu_selectlanguage":"Wybierz język","avatarmenu_signin":"Zaloguj się","avatarmenu_signup":"Zarejestruj się","community_guidelines_image_alt_text":"Zachowuj się grzecznie!","community_guidelines_tile_description":"Ten regulamin opisuje wartości, jakimi się kierujemy, jak również zasady, których przestrzegamy, aby zapewnić graczom sprawiedliwe, bezpieczne i pełne szacunku doświadczenia.","community_guidelines_tile_header":"Przeglądaj regulamin społeczności","email_settings_cta":"Aktualizuj swoje preferencje","game_screens_alt_text":"Zrzut ekranu z {title}, {id} z {total}","global_nav_language_selector_option_de_de":"Niemiecki - (Deutsch)","global_nav_language_selector_option_en_us":"Angielski - (English)","global_nav_language_selector_option_es_es":"Hiszpański - (Español)","global_nav_language_selector_option_es_mx":"Hiszpański (Ameryka Łacińska) - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"Francuski - (Français)","global_nav_language_selector_option_it_it":"Włoski - (Italiano)","global_nav_language_selector_option_ja_jp":"Japoński - (日本語)","global_nav_language_selector_option_ko_kr":"Koreański - (한국어)","global_nav_language_selector_option_pl_pl":"Polski","global_nav_language_selector_option_pt_br":"Portugalski (Brazylia) - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Rosyjski - (Русский)","global_nav_language_selector_option_zh_hans":"Chiński uproszczony - (简体中文)","global_nav_language_selector_option_zh_tw":"Chiński tradycyjny - (繁體中文)","handshake_icon_alt_text":"Ikona uścisku dłoni","heartbook_icon_alt_text":"Zapisz przy pomocy ikony serca","quickmenu_games":"Gry","quickmenu_home":"Strona główna","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 Listopada 2024","resources_tile_description":"Odszukaj szybko informacje, jeżeli ty lub ktoś, kogo znasz, potrzebuje pomocy.","resources_tile_header":"Przeglądaj informacje dotyczące bezpieczeństwa","rockstargames_company_info_br":"Brazylia","rockstargames_company_info_cz":"Czechy","rockstargames_company_info_de":"Niemcy","rockstargames_company_info_display_for_country":"Pokaż informacje dla:","rockstargames_company_info_es":"Hiszpania","rockstargames_company_info_fr":"Francja","rockstargames_company_info_it":"Włochy","rockstargames_company_info_jp":"Japonia","rockstargames_company_info_kr":"Korea Południowa","rockstargames_company_info_mx":"Meksyk","rockstargames_company_info_nl":"Holandia","rockstargames_company_info_pl":"Polska","rockstargames_company_info_ru":"Rosja","rockstargames_company_info_sa":"Arabia Saudyjska","rockstargames_company_info_tw":"Tajwan","rockstargames_company_info_us":"Stany Zjednoczone","rockstargames_company_info_zh":"Chiny","rockstargames_downloads_collections_download_text":"Pobierz: {item} {collection}","rockstargames_downloads_dimensions_label":"{width} na {height} pikseli.","rockstargames_downloads_go_back":"Wróć","rsg_no_results":"Brak wyników.","rsg_total_results_message":"Wyświetlono: {Tab} filtrowanie: {Query}","safety_get_support_button":"Uzyskaj wsparcie","safety_learn_more_button":"Dowiedz się więcej","support_chat_icon_alt_text":"Ikona kontaku ze wsparciem","support_tile_description":"W celu uzyskania dodatkowej pomocy dotyczącej obsługi konta lub ustawień prywatności odwiedź naszą stronę wsparcia.","support_tile_header":"Potrzebujesz wsparcia dotyczącego konta?","unsubscribe_error_description":"Odnośnik może być nieprawidłowy. Możesz zmienić swoje preferencje mailingowe w menu ustawień konta Rockstar Games.","unsubscribe_error_header":"Błąd podczas rezygnacji","unsubscribe_info_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Zapisz się ponownie lub dokonaj innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_info_header":"Subskrypcja jest już nieaktywna","unsubscribe_success_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Możesz zapisać się ponownie lub dokonać innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_success_header":"Zrezygnowano z subskrypcji"},"pt-BR":{"avatarmenu_logout":"Sair","avatarmenu_selectlanguage":"Selecione um idioma","avatarmenu_signin":"Iniciar sessão","avatarmenu_signup":"Inscrever-se","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Estas regras detalham os valores e políticas que mantêm a experiência de jogo justa, respeitosa e segura.","community_guidelines_tile_header":"Explore as Regras da Comunidade","email_settings_cta":"Atualizar preferências","game_screens_alt_text":"Tela de {title}, {id} de {total}","global_nav_language_selector_option_de_de":"Alemão - (Deutsch)","global_nav_language_selector_option_en_us":"Inglês - (English)","global_nav_language_selector_option_es_es":"Espanhol (Espanha) - (Español España)","global_nav_language_selector_option_es_mx":"Espanhol (América Latina) - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"Francês - (Français)","global_nav_language_selector_option_it_it":"Italiano - (Italiano)","global_nav_language_selector_option_ja_jp":"Japonês - (日本語)","global_nav_language_selector_option_ko_kr":"Coreano - (한국어)","global_nav_language_selector_option_pl_pl":"Polonês - (Polski)","global_nav_language_selector_option_pt_br":"Português do Brasil","global_nav_language_selector_option_ru_ru":"Russo - (Русский)","global_nav_language_selector_option_zh_hans":"Chinês Simplificado - (简体中文)","global_nav_language_selector_option_zh_tw":"Chinês Tradicional - (繁體中文)","handshake_icon_alt_text":"Ícone de aperto de mão","heartbook_icon_alt_text":"Ícone de livro com coração","quickmenu_games":"Jogos","quickmenu_home":"Início","quickmenu_newswire":"Boletim","resources_last_updated_date":"18 de novembro de 2024","resources_tile_description":"Encontre recursos rapidamente se você ou alguém que você conhece precisa de ajuda.","resources_tile_header":"Explore os recursos de segurança","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Tcheca","rockstargames_company_info_de":"Alemanha","rockstargames_company_info_display_for_country":"Exibir informações da página para {country}","rockstargames_company_info_es":"Espanha","rockstargames_company_info_fr":"França","rockstargames_company_info_it":"Itália","rockstargames_company_info_jp":"Japão","rockstargames_company_info_kr":"Coreia do Sul","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Baixos","rockstargames_company_info_pl":"Polônia","rockstargames_company_info_ru":"Federação da Rússia","rockstargames_company_info_sa":"Arábia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Baixar {collection} de {item}","rockstargames_downloads_dimensions_label":"{width} x {height} pixels.","rockstargames_downloads_go_back":"Voltar","rsg_no_results":"Nenhum resultado foi encontrado.","rsg_total_results_message":"Mostrando {Tab} com o filtro {Query}","safety_get_support_button":"Acionar suporte","safety_learn_more_button":"Saiba mais","support_chat_icon_alt_text":"Ícone de chat de suporte","support_tile_description":"Para mais ajuda com o gerenciamento da sua conta, dados e configurações de privacidade, acesse a página de suporte.","support_tile_header":"Precisa de ajuda com a sua conta?","unsubscribe_error_description":"Esta URL pode ser inválida. Você pode aplicar mudanças às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_error_header":"Erro ao cancelar inscrição","unsubscribe_info_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_info_header":"Você já cancelou a inscrição","unsubscribe_success_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_success_header":"Inscrição cancelada"},"ru-RU":{"avatarmenu_logout":"Выход","avatarmenu_selectlanguage":"Выбрать язык","avatarmenu_signin":"Войти","avatarmenu_signup":"Регистрация","community_guidelines_image_alt_text":"Надпись Say Sorry, Be Nice","community_guidelines_tile_description":"В этих правилах изложены ценности, которых мы придерживаемся, и политики, которые мы применяем для обеспечения честной, уважительной и безопасной игры для всех.","community_guidelines_tile_header":"Ознакомьтесь с правилами сообщества","email_settings_cta":"Изменить настройки","game_screens_alt_text":"{title} экран, {id} из {total}","global_nav_language_selector_option_de_de":"Немецкий - (Deutsch)","global_nav_language_selector_option_en_us":"Английский","global_nav_language_selector_option_es_es":"Испанский - (Español)","global_nav_language_selector_option_es_mx":"Латиноамериканский испанский - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"Французский - (Français)","global_nav_language_selector_option_it_it":"Итальянский - (Italiano)","global_nav_language_selector_option_ja_jp":"Японский - (日本語)","global_nav_language_selector_option_ko_kr":"Корейский - (한국어)","global_nav_language_selector_option_pl_pl":"Польский - (Polski)","global_nav_language_selector_option_pt_br":"Бразильский португальский - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Русский","global_nav_language_selector_option_zh_hans":"Китайский (упрощенный) - (简体中文)","global_nav_language_selector_option_zh_tw":"Китайский (традиционный) - (繁體中文)","handshake_icon_alt_text":"Значок рукопожатия","heartbook_icon_alt_text":"Значок книги с сердцем","quickmenu_games":"Игры","quickmenu_home":"Главная страница","quickmenu_newswire":"Новостная лента","resources_last_updated_date":"18 ноября 2024 года","resources_tile_description":"Быстро найдите интернет-ресурсы, если вы или кто-то из ваших знакомых испытывает трудности и нуждается в помощи.","resources_tile_header":"Ознакомьтесь с ресурсами по психологической поддержке","rockstargames_company_info_br":"Бразилии","rockstargames_company_info_cz":"Чехии","rockstargames_company_info_de":"Германии","rockstargames_company_info_display_for_country":"Показать содержимое страницы для {country}","rockstargames_company_info_es":"Испании","rockstargames_company_info_fr":"Франции","rockstargames_company_info_it":"Италии","rockstargames_company_info_jp":"Японии","rockstargames_company_info_kr":"Южной Кореи","rockstargames_company_info_mx":"Мексики","rockstargames_company_info_nl":"Нидерландов","rockstargames_company_info_pl":"Польши","rockstargames_company_info_ru":"России","rockstargames_company_info_sa":"Саудовской Аравии","rockstargames_company_info_tw":"Тайваня","rockstargames_company_info_us":"США","rockstargames_company_info_zh":"Китая","rockstargames_downloads_collections_download_text":"Загрузить: «{item}» из коллекции «{collection}».","rockstargames_downloads_dimensions_label":"{width} на {height} пикселей.","rockstargames_downloads_go_back":"Вернуться","rsg_no_results":"Результаты не найдены.","rsg_total_results_message":"Поиск в категории {Tab} с фильтром «{Query}»","safety_get_support_button":"Обратиться в службу поддержки","safety_learn_more_button":"Подробности","support_chat_icon_alt_text":"Значок службы поддержки","support_tile_description":"Для получения дополнительной помощи по управлению вашей учетной записью или данными и настройками конфиденциальности посетите нашу страницу поддержки клиентов.","support_tile_header":"Нужна помощь с учетной записью?","unsubscribe_error_description":"Возможно, этот адрес недействителен. Вы можете изменить настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_error_header":"Ошибка при отмене подписки","unsubscribe_info_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_info_header":"Вы уже отменили подписку","unsubscribe_success_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_success_header":"Подписка отменена"},"zh-CN":{"avatarmenu_logout":"登出","avatarmenu_selectlanguage":"选择一种语言","avatarmenu_signin":"登录","avatarmenu_signup":"注册","community_guidelines_image_alt_text":"说声对不起，做个好人","community_guidelines_tile_description":"指南中列出了我们秉持的价值观和遵循的政策原则，为玩家营造公平、尊重和安全的游玩体验。","community_guidelines_tile_header":"查看《社区指南》","email_settings_cta":"更新偏好设置","game_screens_alt_text":"{title}画面，{id}（共{total}个）","global_nav_language_selector_option_de_de":"德语 - (Deutsch)","global_nav_language_selector_option_en_us":"英语 - (English)","global_nav_language_selector_option_es_es":"西班牙语 - (Español)","global_nav_language_selector_option_es_mx":"西班牙语（拉丁美洲）- (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"法语 - (Français)","global_nav_language_selector_option_it_it":"意大利语 - (Italiano)","global_nav_language_selector_option_ja_jp":"日语 - (日本語)","global_nav_language_selector_option_ko_kr":"韩语 - (한국어)","global_nav_language_selector_option_pl_pl":"波兰语 - (Polski)","global_nav_language_selector_option_pt_br":"葡萄牙语（巴西）- (Português do Brasil)","global_nav_language_selector_option_ru_ru":"俄语 - (Русский)","global_nav_language_selector_option_zh_hans":"简体中文","global_nav_language_selector_option_zh_tw":"繁体中文 - (繁體中文)","handshake_icon_alt_text":"握手图标","heartbook_icon_alt_text":"书上印着一颗心的图标","quickmenu_games":"游戏","quickmenu_home":"主页","quickmenu_newswire":"新闻专线","resources_last_updated_date":"2024年11月18日","resources_tile_description":"如果您自己，或者您知道的其他人需要帮助，在这里可以快速找到相关内容。","resources_tile_header":"查看“安全”相关内容","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克","rockstargames_company_info_de":"德国","rockstargames_company_info_display_for_country":"显示{country}的页面信息","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法国","rockstargames_company_info_it":"意大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韩国","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷兰","rockstargames_company_info_pl":"波兰","rockstargames_company_info_ru":"俄罗斯联邦","rockstargames_company_info_sa":"沙特阿拉伯","rockstargames_company_info_tw":"台湾地区","rockstargames_company_info_us":"美国","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"下载{item}的{collection}","rockstargames_downloads_dimensions_label":"{width} X {height} 像素","rockstargames_downloads_go_back":"返回","rsg_no_results":"抱歉，没有搜索结果。","rsg_total_results_message":"按{Query}筛选显示{Tab}","safety_get_support_button":"寻求支持","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支持对话图标","support_tile_description":"如果您在管理账户或数据，或者设置隐私选项时需要额外的帮助，请前往客户支持页面。","support_tile_header":"需要账户相关的帮助吗？","unsubscribe_error_description":"此网址可能无效。您可以在账户设置页面更改您的Rockstar Games邮件偏好设置。","unsubscribe_error_header":"取消订阅出错","unsubscribe_info_description":"您将不会收到更多Rockstar Games营销邮件。您可以在账户设置页面重新订阅或更改您的Rockstar Games邮件偏好设置。","unsubscribe_info_header":"您已经取消订阅","unsubscribe_success_description":"您将不会收到更多Rockstar Games营销邮件。您可以在账户设置页面重新订阅或更改您的Rockstar Games邮件偏好设置。","unsubscribe_success_header":"取消订阅成功"},"zh-TW":{"avatarmenu_logout":"登出","avatarmenu_selectlanguage":"選擇語言","avatarmenu_signin":"登入","avatarmenu_signup":"註冊","community_guidelines_image_alt_text":"敢於道歉，友善待人","community_guidelines_tile_description":"我們以此守則簡述所遵循的價值觀，以及我們為了確保公平、尊重與安全的玩家體驗所執行的政策。","community_guidelines_tile_header":"探索社群守則","email_settings_cta":"更新偏好設定","game_screens_alt_text":"第{id} 個 {title} 畫面（共 {total} 個）","global_nav_language_selector_option_de_de":"德文 / Deutsch","global_nav_language_selector_option_en_us":"英文 / English","global_nav_language_selector_option_es_es":"西班牙文 / Español","global_nav_language_selector_option_es_mx":"西班牙文（拉丁美洲）/ Español Latinoamérica","global_nav_language_selector_option_fr_fr":"法文 / Français","global_nav_language_selector_option_it_it":"意大利文 / Italiano","global_nav_language_selector_option_ja_jp":"日文 / 日本語","global_nav_language_selector_option_ko_kr":"韓文 / 한국어","global_nav_language_selector_option_pl_pl":"波蘭文 / Polski","global_nav_language_selector_option_pt_br":"葡萄牙文（巴西）/ Português do Brasil","global_nav_language_selector_option_ru_ru":"俄文 / Русский","global_nav_language_selector_option_zh_hans":"簡體中文 / 简体中文","global_nav_language_selector_option_zh_tw":"繁體中文","handshake_icon_alt_text":"握手圖示","heartbook_icon_alt_text":"書本上有心形的圖示","quickmenu_games":"遊戲","quickmenu_home":"首頁","quickmenu_newswire":"新聞放送","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"若您或您認識的人遭逢困難或需要協助，您可以快速尋找資源。","resources_tile_header":"探索安全資源","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克共和國","rockstargames_company_info_de":"德國","rockstargames_company_info_display_for_country":"顯示頁面資訊：{country}","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法國","rockstargames_company_info_it":"義大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"南韓","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷蘭","rockstargames_company_info_pl":"波蘭","rockstargames_company_info_ru":"俄羅斯聯邦","rockstargames_company_info_sa":"沙烏地阿拉伯","rockstargames_company_info_tw":"台灣","rockstargames_company_info_us":"美國","rockstargames_company_info_zh":"中國","rockstargames_downloads_collections_download_text":"下載「{item}」的「{collection}」","rockstargames_downloads_dimensions_label":"像素：{width} x {height}。","rockstargames_downloads_go_back":"返回","rsg_no_results":"很抱歉，無相符的搜尋結果。","rsg_total_results_message":"正在顯示 {Tab}，搜尋條件為 {Query}","safety_get_support_button":"取得支援","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支援文字對話圖示","support_tile_description":"如需管理您帳戶、資料或隱私權設定的額外協助，請造訪我們的客戶支援頁面。","support_tile_header":"需要帳戶協助？","unsubscribe_error_description":"這個網址可能無效。您可以在帳戶設定頁面變更您的 Rockstar Games 電子郵件偏好設定。","unsubscribe_error_header":"取消訂閱錯誤","unsubscribe_info_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_info_header":"您已經取消訂閱。","unsubscribe_success_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_success_header":"取消訂閱成功"}}')
    }
  }
]);