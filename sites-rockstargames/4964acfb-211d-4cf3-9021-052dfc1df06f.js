try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4964acfb-211d-4cf3-9021-052dfc1df06f", e._sentryDebugIdIdentifier = "sentry-dbid-4964acfb-211d-4cf3-9021-052dfc1df06f")
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
  [6561], {
    36346(e, a, t) {
      t.d(a, {
        A: () => r
      });
      var n = t(39793),
        o = t(93082),
        s = t(99225),
        i = t(13331);
      const r = (0, i.withTranslations)(({
        t: e
      }) => {
        const [a] = (0, o.useState)(""), t = (0, s.useNavigate)(), r = (0, i.useMutateState)();
        return (0, n.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), r({
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
    29019(e, a, t) {
      var n = t(39793),
        o = t(93082),
        s = t(11215),
        i = t(64317);
      class r extends o.Component {
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
          return null !== this.state.error.code ? (0, n.jsx)(i.default, {
            error: this.state.error
          }) : this.props.children
        }
      }
      t.d(a, ["A", 0, (e, a = null) => {
        const t = t => (0, n.jsx)(r, {
          header: a,
          children: (0, n.jsx)(e, {
            ...t
          })
        });
        return t.displayName = `withSearchbarErrorBoundary(${e.displayName||e.name||"Component"})`, t
      }])
    },
    64317(e, a, t) {
      t.r(a), t.d(a, {
        default: () => _
      });
      var n = t(39793),
        o = t(93082),
        s = t(42909),
        i = t(48478),
        r = t(36346);
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
            formatMessage: t
          } = (0, s.useIntl)();
          let _ = e?.message ?? t(l.wasted_error_404_new);
          _ = t(l.wasted_error_404_new);
          const c = e?.code ?? 398,
            u = (0, o.useRef)(null);
          return (0, o.useEffect)(() => {
            u && u?.current && u.current.focus()
          }, [u]), (0, n.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, n.jsx)("h3", {
              tabIndex: -1,
              ref: u,
              children: `${_} (${c})`
            }), (0, n.jsx)(i.A, {
              to: "/",
              reloadDocument: !1,
              children: t(l.wasted_home)
            }), "clr" !== a && (0, n.jsx)(r.A, {})]
          })
        }
    },
    40026(e, a, t) {
      var n = t(39793),
        o = t(13331),
        s = t(5643),
        i = t(93082),
        r = t(99225),
        l = t(92782),
        _ = t(37116),
        c = t(41263),
        u = t(20357),
        g = t(21152),
        d = t(42909),
        p = t(82199),
        m = t(76923);
      const h = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg",
        b = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg",
        v = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg";
      var f = t(52542),
        k = "var(--_1k6ojor0)",
        y = t(84465);
      const x = "nav-dropdown",
        w = (e, a, t, n) => ({
          event: e || "nav_click",
          link_url: a,
          text: t,
          element_placement: `Global Nav > ${n}`?.toLowerCase()
        }),
        j = ({
          globalNavigationComponent: e,
          gamesMenuComponent: a,
          link: t,
          gaEvent: s,
          gaBreadCrumb: i
        }) => {
          const l = (0, r.useNavigate)(),
            {
              dispatch: _
            } = (0, o.useRockstarEventDispatcher)(),
            {
              track: c
            } = (0, p.useGtmTrack)(),
            u = e,
            g = a,
            d = `${t?.location?.domain||""}${t?.location?.path||""}`,
            m = i ? `${i} > ${t.gaText}` : t.gaText,
            h = e => {
              c(w(s, d, t.gaText, m)), t.onClickCallback?.(e)
            };
          return t.location || "nav-no-link" !== t.type ? "games-menu" === t.type && g ? (0, n.jsx)(g.GamesMenuItem, {
            onNavigate: l,
            onClick: h,
            dataTestId: t.dataTestId
          }, "games-menu") : t.type === x ? (0, n.jsxs)(u.MenuItem, {
            children: [(0, n.jsx)(u.MenuTrigger, {
              "data-testid": t.dataTestId,
              onClick: h,
              children: t.text
            }), (0, n.jsx)(u.MenuContent, {
              children: (0, n.jsx)(u.MenuSub, {
                children: (0, n.jsx)(u.MenuList, {
                  children: t.children?.map(a => (0, n.jsx)(j, {
                    globalNavigationComponent: e,
                    link: a,
                    gaEvent: s,
                    gaBreadCrumb: m
                  }, a.text))
                })
              })
            })]
          }, t.text) : t?.location?.domain || t.isLegacy ? (0, n.jsx)(u.MenuItem, {
            children: (0, n.jsx)(u.MenuLink, {
              onClick: h,
              external: "nav-external" === t.type,
              active: (0, r.matchPath)(d, location.pathname),
              target: t.target,
              href: d,
              "data-testid": t.dataTestId,
              children: t.text
            })
          }, t.text) : (0, n.jsx)(u.MenuItem, {
            children: (0, n.jsx)(u.MenuLink, {
              external: "nav-external" === t.type,
              active: (0, r.matchPath)(d, location.pathname),
              asChild: !0,
              children: (0, n.jsx)(r.Link, {
                target: t.target,
                to: d,
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
                  c(w(s, "", t.gaText, m)), t.dataTestId && _(t.dataTestId), t.onClickCallback?.(e)
                },
                "data-testid": t.dataTestId,
                children: t.text
              })
            })
          }, t.text)
        },
        S = ({
          globalNavigationComponent: e
        }) => {
          const a = e,
            {
              charactersNeeded: t
            } = (0, p.useRockstarUserState)(),
            {
              data: o
            } = (0, p.useRockstarUser)();
          return "gtao" !== t || 0 === (o.characters?.gtao ?? []).length ? null : (0, n.jsx)(a.AvatarMenuSection, {
            value: "open",
            children: (0, n.jsx)(m.CharacterProfile, {})
          })
        },
        C = ({
          globalNavigationComponent: e,
          target: a
        }) => {
          const t = e;
          return a.type === x ? (0, n.jsx)(t.SearchTargetDropdown, {
            title: a.text,
            value: a.value,
            children: a.targets.map(a => (0, n.jsx)(C, {
              globalNavigationComponent: e,
              target: a
            }, a.text))
          }) : (0, n.jsx)(t.SearchTarget, {
            value: a.value,
            title: a.text,
            children: a.text
          })
        },
        M = ({
          globalNavigationComponent: e,
          searchConfig: a,
          onSearch: t,
          getQueryFromUrl: o,
          isSearchPage: s
        }) => {
          const [l, _] = (0, i.useState)(""), [c, u] = (0, i.useState)(a.targets[0].value ?? ""), {
            search: g,
            pathname: d
          } = (0, r.useLocation)(), p = (0, r.useNavigate)(), m = e;
          (0, i.useEffect)(() => {
            if (s && (g || d)) {
              const [e, a] = o();
              _(e), u(a?.value || "")
            }
          }, [o, s, g, d]);
          const h = (e, a, n) => {
            if (!e) return;
            const o = t(e, a);
            o && (n?.(), o.startsWith("http") ? window.location.assign(o) : p(o))
          };
          return (0, n.jsx)(m.SearchBar, {
            onSearch: h,
            query: l,
            onQueryChange: _,
            target: c,
            onTargetChange: e => {
              h(l, e), u(e)
            },
            queryMin: 3,
            isSearchPage: s,
            children: (0, n.jsx)(m.SearchFilters, {
              children: a.targets.map(a => (0, n.jsx)(C, {
                globalNavigationComponent: e,
                target: a
              }, a.text))
            })
          })
        },
        E = {
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
        L = ({
          brand: e,
          site: a,
          scale: t
        }) => (0, n.jsx)("img", {
          className: "_1k6ojor1",
          src: e,
          alt: E[a] ?? a,
          "data-brand": a,
          style: t ? (0, g.DI)({
            [k]: String(t)
          }) : {}
        }, e),
        I = (0, d.withIntl)(({
          navigationData: e,
          globalNavigationComponent: a,
          gamesMenuComponent: t,
          avatarMenuData: s,
          searchConfig: l,
          onSearch: _,
          getQueryFromUrl: c,
          errorMessage: g,
          localisedStrings: m
        }) => {
          const f = a,
            k = (0, o.useLocale)(),
            [x] = (0, d.getLocale)(),
            C = (0, r.useLocation)(),
            E = (0, d.useIntl)(),
            {
              loggedIn: I,
              data: T
            } = (0, p.useRockstarUser)(),
            z = (0, r.useNavigate)(),
            {
              track: P
            } = (0, p.useGtmTrack)(),
            [N, A] = (0, i.useState)(!1),
            q = (e, a, t, n) => () => {
              P(w(e, n, a, t))
            },
            [R, D] = (0, i.useState)("dark"),
            B = (H = C.pathname, ["/", "/gta-online/mansions"].includes(H) ? "transparent" : "default");
          var H;
          const $ = (e => [/\/account.*/].some(a => new RegExp("^" + a.source).test(e)) ? "visible" : void 0)(C.pathname),
            F = e => ["/"].includes(e);
          (0, i.useEffect)(() => {
            T && I && !N && T?.accountSynced && (A(!0), P({
              event: "account_synced"
            }))
          }, [T?.accountSynced, I]), (0, i.useEffect)(() => {
            (() => {
              const e = document.getElementById("navigation-gradient"),
                a = e?.getContext("2d");
              a && e && (a.fillStyle = "#000", a.fillRect(0, 0, e.width, e.height))
            })()
          }, [C?.pathname]), (0, i.useLayoutEffect)(() => {
            document.body.setAttribute("data-color-mode", B)
          }, [B]), (0, i.useEffect)(() => {
            const e = e => {
              e.origin === window.origin && "navColorTheme" === e.data.source && e.data.mode && D(F(C.pathname) ? e.data.mode : "dark")
            };
            return window.addEventListener("message", e), () => {
              window.removeEventListener("message", e), D("dark")
            }
          }, []);
          const G = (0, i.useMemo)(() => (0, o.getConfigForDomain)(), []),
            {
              currentCharId: O = 0,
              setSelectedCharacterTuple: U
            } = (0, p.useRockstarUserState)(),
            Q = (0, i.useMemo)(() => {
              const a = e.reduce((e, a) => {
                const t = a.appearancePaths.find(e => (0, r.matchPath)(e, C.pathname));
                return t && void 0 === e ? {
                  ...a,
                  matchedPath: t
                } : void 0 === e ? void 0 : e
              }, void 0);
              return a
            }, [e, C.pathname]);
          (0, i.useEffect)(() => {
            const e = T?.characters?.gtao ?? [];
            if (null !== I && !e.length) return void U(!1);
            if (null == O || !e.length) return;
            const a = e?.[O] ?? e?.[0] ?? null;
            U(!!a?.platform && [a.platform, a.characterSlot])
          }, [O, T, I]);
          const K = Q?.matchedPath.options.isSearchPage || !1,
            W = (0, i.useMemo)(() => d.locales.find(e => e.iso.toLowerCase() === (0, o.toScLocaleString)(k))?.label, [d.locales]),
            J = (0, i.useMemo)(() => `${(0,o.getBase)()}${C?.pathname}`.replace(/\/\//g, "/"), [C?.pathname]);
          return (0, n.jsx)(f.Root, {
            brand: Q?.brand ? (0, n.jsx)(L, {
              brand: Q.brand,
              site: Q.site,
              scale: Q.brandScale
            }) : null,
            brandTitle: Q?.brandTitle,
            mode: B,
            navColorTheme: F(C.pathname) ? R : "dark",
            simpleMenu: Q?.simpleMenu,
            forceVisibility: $,
            locale: x.iso,
            children: (0, n.jsxs)(f.Header, {
              children: [(0, n.jsx)(f.SiteTitle, {
                quickAccessHidden: Q?.hideQuickAccess,
                onNavigate: z,
                children: C.pathname.length > 0 && !Q?.hideQuickAccess && (0, n.jsxs)(f.QuickMenu, {
                  children: [(0, n.jsx)(f.MenuItem, {
                    children: (0, n.jsx)(f.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(r.Link, {
                        to: "/",
                        onClick: q("", "home", "", "/"),
                        children: [(0, n.jsx)(f.MenuIcon, {
                          src: h,
                          alt: "",
                          "aria-hidden": !0
                        }), m.quickMenuHome]
                      })
                    })
                  }), (0, n.jsx)(f.MenuItem, {
                    children: (0, n.jsx)(f.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(r.Link, {
                        to: "/games",
                        onClick: q("", "games", "", "/games"),
                        children: [(0, n.jsx)(f.MenuIcon, {
                          src: b,
                          alt: "",
                          "aria-hidden": !0
                        }), m.quickMenuGames]
                      })
                    })
                  }), (0, n.jsx)(f.MenuItem, {
                    children: (0, n.jsx)(f.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(r.Link, {
                        to: "/newswire",
                        onClick: q("", "newswire", "", "/newswire"),
                        children: [(0, n.jsx)(f.MenuIcon, {
                          src: v,
                          alt: "",
                          "aria-hidden": !0
                        }), m.quickMenuNewswire]
                      })
                    })
                  })]
                })
              }), (0, n.jsxs)(f.MobileMenu, {
                children: [!0 !== Q.hideSearch && (0, n.jsxs)(n.Fragment, {
                  children: [(0, n.jsx)(M, {
                    globalNavigationComponent: a,
                    searchConfig: l,
                    onSearch: _,
                    getQueryFromUrl: c,
                    isSearchPage: K,
                    errorMessage: g
                  }), (0, n.jsx)(f.SearchError, {
                    errorMessage: g
                  })]
                }), (0, n.jsx)(f.MobileMenuNav, {
                  children: Q?.links.map(e => (0, n.jsx)(j, {
                    globalNavigationComponent: f,
                    gamesMenuComponent: t,
                    link: e
                  }, e.text))
                }), Q?.cta && (0, n.jsx)(f.CallToAction, {
                  ...Q.cta,
                  asChild: !0,
                  onClick: q(Q.cta.ga, Q.cta.gaText, Q.cta.gaText, `${Q.cta.location.domain}${Q.cta.location.path}`),
                  size: "LG",
                  children: (0, n.jsx)(r.Link, {
                    to: `${Q.cta.location.domain}${Q.cta.location.path}`,
                    reloadDocument: Boolean(Q.cta.location.domain),
                    children: Q.cta.text
                  })
                }), !Q?.hideQuickAccess && (0, n.jsxs)(f.QuickMenu, {
                  children: [(0, n.jsx)(f.MenuItem, {
                    children: (0, n.jsx)(f.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(r.Link, {
                        to: "/",
                        onClick: q("", "home", "Quick Access", "/"),
                        children: [(0, n.jsx)(f.MenuIcon, {
                          src: h,
                          alt: "",
                          "aria-hidden": !0
                        }), m.quickMenuHome]
                      })
                    })
                  }), (0, n.jsx)(f.MenuItem, {
                    children: (0, n.jsx)(f.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(r.Link, {
                        to: "/games",
                        onClick: q("", "games", "Quick Access", "/games"),
                        children: [(0, n.jsx)(f.MenuIcon, {
                          src: b,
                          alt: "",
                          "aria-hidden": !0
                        }), m.quickMenuGames]
                      })
                    })
                  }), (0, n.jsx)(f.MenuItem, {
                    children: (0, n.jsx)(f.MenuLink, {
                      asChild: !0,
                      children: (0, n.jsxs)(r.Link, {
                        to: "/newswire",
                        onClick: q("", "newswire", "Quick Access", "/newswire"),
                        children: [(0, n.jsx)(f.MenuIcon, {
                          src: v,
                          alt: "",
                          "aria-hidden": !0
                        }), m.quickMenuNewswire]
                      })
                    })
                  })]
                })]
              }), (0, n.jsx)(f.Menu, {
                children: Q?.links.map(e => (0, n.jsx)(j, {
                  globalNavigationComponent: f,
                  gamesMenuComponent: t,
                  link: e
                }, e.text))
              }), (0, n.jsxs)(f.Actions, {
                children: [(0, n.jsx)(f.Breakpoint, {
                  showOn: "desktop",
                  children: Q?.cta && (0, n.jsx)(f.CallToAction, {
                    ...Q.cta,
                    asChild: !0,
                    onClick: q(Q.cta.ga, Q.cta.gaText, Q.cta.gaText, `${Q.cta.location.domain}${Q.cta.location.path}`),
                    children: (0, n.jsx)(r.Link, {
                      to: `${Q.cta.location.domain}${Q.cta.location.path}`,
                      reloadDocument: Boolean(Q.cta.location.domain),
                      children: Q.cta.text
                    })
                  })
                }), !0 !== Q.hideSearch && (0, n.jsxs)(f.Search, {
                  isSearchPage: K,
                  children: [(0, n.jsx)(f.SearchContainer, {
                    children: (0, n.jsx)(M, {
                      globalNavigationComponent: a,
                      searchConfig: l,
                      onSearch: _,
                      getQueryFromUrl: c,
                      isSearchPage: K,
                      errorMessage: g
                    })
                  }), (0, n.jsx)(f.SearchError, {
                    errorMessage: g
                  })]
                }), (0, n.jsxs)(f.AvatarMenu, {
                  avatarIconUrl: T?.avatar,
                  nickname: T?.nickname,
                  isLoggedIn: I,
                  onOpenChange: e => {
                    P({
                      event: "account_menu_click",
                      element_placement: "account menu",
                      text: e ? "open" : "close"
                    })
                  },
                  children: [I && (0, n.jsx)(S, {
                    globalNavigationComponent: a
                  }), (0, n.jsx)(f.AvatarMenuSection, {
                    value: "open",
                    children: (0, n.jsx)(f.AvatarMenuSectionContent, {
                      children: (0, n.jsx)(f.MenuList, {
                        children: I ? (0, n.jsxs)(n.Fragment, {
                          children: [T.nickname && (0, n.jsx)(f.AvatarMenuSectionHeader, {
                            children: T.nickname
                          }), s.loggedInLinks.map(e => (0, n.jsx)(j, {
                            globalNavigationComponent: f,
                            link: e,
                            gaEvent: "account_menu_click",
                            gaBreadCrumb: "account menu"
                          }, e.text)), (0, n.jsx)(j, {
                            globalNavigationComponent: f,
                            link: s.helpItem,
                            gaEvent: "account_menu_click",
                            gaBreadCrumb: "account menu"
                          }), (0, n.jsx)(f.MenuItem, {
                            children: (0, n.jsx)(f.MenuLink, {
                              href: `${G.logout}?returnUrl=/`,
                              "data-testid": "logoutButton",
                              "data-logged-in": "true",
                              onClick: q("account_menu_click", "log out", "account menu", `${G.logout}?returnUrl=/`),
                              children: m.avatarMenuSignOut
                            })
                          })]
                        }) : (0, n.jsxs)(n.Fragment, {
                          children: [(0, n.jsx)(f.MenuItem, {
                            children: (0, n.jsx)(f.MenuLink, {
                              href: `${G.login}?returnUrl=${J}&lang=${(0,o.toScLocaleString)(k)}`,
                              "data-testid": "loginLink",
                              "data-logged-in": "false",
                              onClick: q("account_menu_click", "sign in", "account menu", `${G.login}?returnUrl=${J}&lang=${(0,o.toScLocaleString)(k)}`),
                              children: m.avatarMenuSignIn
                            })
                          }), (0, n.jsx)(f.MenuItem, {
                            children: (0, n.jsx)(f.MenuLink, {
                              href: `${G.signup}&returnUrl=${J}&lang=${(0,o.toScLocaleString)(k)}`,
                              "data-testid": "signUpLink",
                              onClick: q("account_menu_click", "sign up", "account menu", `${G.signup}&returnUrl=${J}&lang=${(0,o.toScLocaleString)(k)}`),
                              children: m.avatarMenuSignUp
                            })
                          }), (0, n.jsx)(j, {
                            globalNavigationComponent: f,
                            link: s.helpItem,
                            gaEvent: "account_menu_click",
                            gaBreadCrumb: "account menu"
                          })]
                        })
                      })
                    })
                  }), (0, n.jsxs)(f.AvatarMenuSection, {
                    children: [(0, n.jsx)(f.AvatarMenuSectionHeaderDropdown, {
                      children: (0, n.jsxs)(f.AvatarMenuLanguageLabel, {
                        children: [(0, n.jsx)(u.Globe, {
                          label: m.avatarMenuSelectLanguage
                        }), (0, n.jsx)("span", {
                          "data-testid": "header-language-current",
                          children: W ?? m.avatarMenuSelectLanguage
                        })]
                      })
                    }), (0, n.jsx)(f.AvatarMenuSectionContent, {
                      children: (0, n.jsx)(f.MenuList, {
                        children: d.locales.map(e => {
                          const a = y.A[`global_nav_language_selector_option_${e.posix}`],
                            t = a ? E.formatMessage(a) : e.label;
                          return (0, n.jsx)(f.MenuItem, {
                            testId: `header-language-selector-${e.subdomaincom}`,
                            children: (0, n.jsx)(f.MenuLink, {
                              onClick: () => (0, d.onLanguageChange)({
                                selectedLocale: e
                              }),
                              onKeyDown: a => ((e, a) => {
                                "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), (0, d.onLanguageChange)({
                                  selectedLocale: a
                                }))
                              })(a, e),
                              tabIndex: 0,
                              "aria-label": t,
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
      var T = t(90327),
        z = t(10622);
      const P = "__MFE_GLOBAL_HOOK__",
        N = () => {
          const e = window;
          e[P]?.history || (e[P] = Object.assign(e[P] || {}, {
            history: (0, z.zR)()
          }))
        },
        A = () => {
          const {
            pathname: e
          } = (0, r.useLocation)();
          return (0, i.useEffect)(() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout(() => {
              e.scrollTop = 0
            }, 0)
          }, [e]), null
        },
        q = (e = [], a, t) => {
          const n = (0, i.useRef)(null),
            o = (0, i.useRef)(new Set),
            s = (0, i.useRef)([]),
            r = (0, i.useRef)(0),
            l = (0, i.useRef)(0),
            _ = (0, i.useRef)(!1),
            c = (0, i.useMemo)(() => Array.from(new Set(e.filter(e => e >= 0 && e <= 100))).sort((e, a) => e - a), [e]);
          return (0, i.useEffect)(() => {
            o.current = new Set, s.current = c.slice()
          }, [c]), (0, i.useEffect)(() => {
            n.current = t ?? window
          }, [t]), (0, i.useEffect)(() => {
            const e = n.current;
            if (!e) return;
            const i = () => {
              _.current || (_.current = !0, requestAnimationFrame(() => {
                (() => {
                  const {
                    scrollTop: n,
                    scrollHeight: _,
                    percent: c
                  } = (() => {
                    const e = t,
                      a = document.documentElement,
                      n = document.body,
                      o = e ? e.scrollTop : a.scrollTop || n.scrollTop || window.scrollY || 0,
                      s = e ? e.scrollHeight : a.scrollHeight || n.scrollHeight || 0,
                      i = e ? e.clientHeight : a.clientHeight || window.innerHeight || 0,
                      r = Math.max(1, s - i);
                    return {
                      scrollTop: o,
                      scrollHeight: s,
                      percent: Math.max(0, Math.min(100, o / r * 100))
                    }
                  })();
                  r.current = c, l.current = n;
                  const u = s.current.find(e => c >= e);
                  if (!u) return;
                  if (o.current.has(u)) return;
                  o.current.add(u), s.current = s.current.filter(e => e !== u);
                  const g = _ * (u / 100);
                  a?.({
                    scrollY: u,
                    scrollLength: g
                  }), 0 === s.current.length && e.removeEventListener("scroll", i, {
                    capture: !1
                  })
                })(), _.current = !1
              }))
            };
            return i(), e.addEventListener("scroll", i, {
              passive: !0
            }), () => {
              e.removeEventListener("scroll", i, {
                capture: !1
              })
            }
          }, [a, t, c.join(",")]), {
            scrollY: r.current,
            scrollLength: l.current
          }
        },
        R = ({
          threshold: e,
          trackRef: a,
          children: t
        }) => {
          const {
            track: n
          } = (0, p.useGtmTrack)();
          return q(e, ({
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
      var D = t(79955),
        B = t.n(D),
        H = t(88447);
      const $ = (0, d.defineMessages)({
        modal_pagination_group_sr_only_label: {
          id: "modal_pagination_group_sr_only_label",
          description: "Aria label describing modal pagination in list",
          defaultMessage: "Now showing {index} of {total}"
        }
      });
      var F = t(81270);
      const G = ({
          current: e = 0,
          total: a = 0,
          announcer: t
        }) => (0, n.jsx)("p", {
          className: "rockstargames-sites-rockstargamesec4533199609400e6361d508929048f7",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: t(e, a)
        }),
        O = {
          ease: [.77, 0, .175, 1],
          duration: .5
        },
        U = {
          ease: "easeIn",
          duration: .3,
          delay: .5
        },
        Q = {
          opacity: 1
        },
        K = ({
          modal: e
        }) => {
          const {
            content: a,
            className: t,
            height: o,
            onClose: s,
            rect: l = {
              left: 0,
              top: 0
            },
            contentStyle: _ = {},
            contentClassName: c = "",
            width: u,
            fadeIn: g = !0,
            cardIds: m,
            activeId: h,
            theme: b,
            title: v,
            gtm: f = {},
            aspectRatio: k = "default",
            cardDimensions: y
          } = e, x = (0, i.useRef)(null), {
            left: w,
            top: j
          } = l, S = m?.indexOf(h), {
            track: C
          } = (0, p.useGtmTrack)(), {
            formatMessage: M
          } = (0, d.useIntl)(), E = null !== m && (m?.length || 0) > 1 && ("flag_bg" === b || "fob" === y?.size), L = window.location.href.includes("cms5"), [, I] = (0, r.useSearchParams)(), [T, z] = (0, i.useState)(!1), [P, N] = (0, i.useState)(!1), [A, q] = (0, i.useState)(), R = (0, i.useCallback)(e => {
            "number" == typeof e && m && e < m.length && e > -1 && I({
              info: m[e].toString()
            })
          }, [m, I]), D = (0, i.useCallback)(() => {
            const e = "number" == typeof S && S > -1 ? S - 1 : 0;
            R(e), C({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: v?.toLowerCase(),
              position: S
            })
          }, [S, R, v, C]), K = (0, i.useCallback)(() => {
            const e = "number" == typeof S && S > -1 ? S + 1 : 0;
            R(e), C({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: v?.toLowerCase(),
              position: S
            })
          }, [S, R, v, C]);
          (0, i.useEffect)(() => {
            const e = m?.findIndex(e => e === h);
            "number" == typeof e && (N(e <= 0), z(e >= (m?.length || 0) - 1))
          }, [m, h]);
          const W = (0, i.useRef)(null),
            J = (0, i.useMemo)(() => ({
              initial: {
                y: j,
                x: w,
                top: 0,
                left: 0,
                width: u,
                height: o,
                border: "0px solid transparent",
                background: "transparent",
                marginTop: E ? "0" : ""
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
                marginTop: E ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
                transition: {
                  x: O,
                  y: O,
                  top: O,
                  left: O,
                  width: O,
                  height: O,
                  border: O,
                  background: {
                    delay: .3
                  }
                }
              }
            }), [j, w, u, o, E]);
          (0, i.useEffect)(() => {
            const e = e => {
              "function" == typeof s && "Escape" === e.key && (s(), C({
                event: "modal_close",
                element_placement: v?.toLowerCase(),
                ...f
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }, [f, s, v, C]);
          const V = (0, i.useCallback)(() => {
              "function" == typeof s && (s(), C({
                event: "modal_close",
                element_placement: v?.toLowerCase(),
                ...f
              }))
            }, [f, s, v, C]),
            Y = (0, i.useCallback)((e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const n = e.children[t];
                if (n.scrollHeight > n.clientHeight) return n;
                const o = Y(n, a - 1);
                if (o) return o
              }
              return null
            }, []),
            Z = (0, i.useCallback)(e => {
              let a;
              return A?.queried ? a = A.element : (a = Y(e, 2), q({
                queried: !0,
                element: a
              })), a
            }, [A?.element, A?.queried, Y]),
            X = (0, i.useCallback)(e => {
              if (x?.current?.children) {
                let a;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = Z(x.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            }, [Z]),
            ee = g ? 0 : 1,
            ae = (0, i.useMemo)(() => (0, n.jsx)(H.motion.button, {
              className: "rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: U,
              onClick: () => {
                V()
              },
              onKeyDown: X,
              onKeyUp: X
            }), [X, V]),
            te = Boolean(v),
            ne = L ? i.Fragment : B(),
            oe = S ?? 0,
            se = m?.length,
            ie = (0, i.useCallback)((e, a) => M($.modal_pagination_group_sr_only_label, {
              index: `${e+1}`,
              total: `${a}`
            }), [M]);
          return (0, i.useMemo)(() => (0, n.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": E,
            "data-aspect-ratio": k,
            children: (0, n.jsx)(ne, {
              children: (0, n.jsxs)("div", {
                id: "modal",
                "data-testid": "modal",
                "aria-modal": "true",
                "aria-label": te ? v : void 0,
                children: [(0, n.jsx)(H.motion.div, {
                  className: "rockstargames-sites-rockstargamescf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: Q,
                  transition: O,
                  onClick: () => V()
                }), E && (0, n.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, n.jsx)(G, {
                    current: oe,
                    total: se,
                    announcer: ie
                  }), (0, n.jsxs)(H.motion.div, {
                    className: "rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: U,
                    children: [(0, n.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: D,
                      disabled: P,
                      onKeyDown: X,
                      onKeyUp: X
                    }), (0, n.jsxs)("div", {
                      className: "rockstargames-sites-rockstargamese316695281c4c56337307741bda1371f",
                      "data-theme": b,
                      children: [" ", oe + 1, (0, n.jsx)("div", {
                        className: "rockstargames-sites-rockstargamesc1ee424eae15f7b789c86e634df9e28d"
                      }), se, " "]
                    }), (0, n.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: K,
                      disabled: T,
                      onKeyDown: X,
                      onKeyUp: X,
                      "data-autofocus": !0
                    })]
                  }), ae]
                }), (0, n.jsx)(H.motion.div, {
                  className: "rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366",
                  ref: W,
                  initial: {
                    ...J.initial,
                    opacity: 0
                  },
                  animate: {
                    ...J.shown,
                    opacity: 1
                  },
                  transition: {
                    ...O,
                    opacity: {
                      duration: .2,
                      delay: .15
                    }
                  },
                  style: _,
                  children: (0, n.jsxs)(H.motion.div, {
                    className: (0, F.default)("rockstargames-sites-rockstargamesa7d77f83f629e9ae93f6934c8ba007b0", t),
                    children: [!E && ae, (0, n.jsx)(H.motion.div, {
                      className: (0, F.default)("rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714", c),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: U,
                      ref: x,
                      children: a
                    })]
                  })
                })]
              })
            })
          }), [E, k, ne, te, v, oe, se, ie, D, P, X, b, K, T, ae, J.initial, J.shown, _, t, c, ee, a, V])
        },
        W = [{}, () => {}],
        J = (0, o.setContextItem)({
          context: (0, i.createContext)(W),
          key: "modalContext"
        }),
        V = ({
          children: e
        }) => {
          const [a, t] = (0, i.useState)(), {
            setBodyIsLocked: s
          } = (0, o.useBodyScrollable)("ModalProvider"), r = (0, i.useMemo)(() => a?.content ? (0, n.jsx)(K, {
            modal: a
          }) : null, [a]), l = (0, i.useCallback)(() => s(!1), [s]), _ = Boolean(a?.content);
          return (0, i.useEffect)(() => (window.addEventListener("popstate", l), () => {
            window.removeEventListener("popstate", l)
          }), [l]), (0, i.useEffect)(() => {
            s(_)
          }, [_]), (0, n.jsx)(J.Provider, {
            value: [r, t],
            children: e
          })
        };
      var Y = t(57141),
        Z = t(53634),
        X = t(12509),
        ee = t(84136),
        ae = t(29019),
        te = t(51693);
      const ne = (e, a = {}) => {
          const t = (0, i.lazy)(e),
            {
              key: o,
              ...s
            } = a;
          return (0, i.useMemo)(() => (0, n.jsx)(i.Suspense, {
            fallback: "",
            children: (0, n.jsx)(t, {
              ...s
            }, o)
          }), [o])
        },
        oe = (0, ae.A)(() => {
          const {
            setError: e,
            state: a
          } = (0, te.b)(), {
            error: o
          } = a, {
            pathname: s
          } = (0, r.useLocation)();
          (0, i.useEffect)(() => {
            e()
          }, [s]), (0, i.useEffect)(() => {
            200 !== window?.env?.responseStatusCode && e({
              code: window.env.responseStatusCode
            })
          }, []);
          const l = {
            path: "*",
            element: ne(() => Promise.resolve().then(t.bind(t, 64317)), {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          };
          let _ = [{
            path: "/",
            element: ne(() => t.e(4459).then(t.bind(t, 4459)), {
              slug: "homepage",
              key: "homepage"
            })
          }, {
            path: "/account/*",
            element: ne(() => t.e(9311).then(t.t.bind(t, 69311, 23)))
          }, {
            path: "/careers-privacy",
            element: ne(() => Promise.all([t.e(7125), t.e(617)]).then(t.bind(t, 50617)))
          }, {
            path: "/ccpa",
            element: ne(() => Promise.all([t.e(7125), t.e(6445)]).then(t.bind(t, 6445)))
          }, {
            path: "/community-resources",
            element: ne(() => Promise.all([t.e(3841), t.e(2285), t.e(5886), t.e(8033)]).then(t.bind(t, 9886)))
          }, {
            path: "/community-resources/guidelines",
            element: ne(() => Promise.all([t.e(7821), t.e(3841), t.e(2285), t.e(5886), t.e(5412)]).then(t.bind(t, 6321)))
          }, {
            path: "/community-resources/additional-resources",
            element: ne(() => Promise.all([t.e(7821), t.e(3841), t.e(2285), t.e(5886), t.e(7778)]).then(t.bind(t, 71515)))
          }, {
            path: "/community-resources/online-comms-privacy",
            element: ne(() => Promise.all([t.e(7821), t.e(3841), t.e(2285), t.e(5886), t.e(9101)]).then(t.bind(t, 64090)))
          }, {
            path: "/community-resources/how-to-report",
            element: ne(() => Promise.all([t.e(7821), t.e(3841), t.e(2285), t.e(5886), t.e(5795)]).then(t.bind(t, 40892)))
          }, {
            path: "/community-resources/keep-account-safe",
            element: ne(() => Promise.all([t.e(7821), t.e(3841), t.e(2285), t.e(5886), t.e(1337)]).then(t.bind(t, 10118)))
          }, {
            path: "/conduct",
            element: (0, n.jsx)(r.Navigate, {
              to: "/community-guidelines",
              replace: !0
            })
          }, {
            path: "/contact",
            element: ne(() => t.e(7228).then(t.bind(t, 87228)))
          }, {
            path: "/cookies",
            element: ne(() => Promise.all([t.e(7125), t.e(7039)]).then(t.bind(t, 87039)))
          }, {
            path: "/corpinfo",
            element: ne(() => Promise.all([t.e(7125), t.e(4842)]).then(t.bind(t, 24842)))
          }, {
            path: "/VI",
            element: (0, n.jsx)(r.Navigate, {
              to: "/VI",
              replace: !0
            })
          }, {
            path: "/games",
            element: ne(() => Promise.all([t.e(5985), t.e(7821), t.e(2285), t.e(9360), t.e(2091), t.e(8325)]).then(t.bind(t, 27150)))
          }, {
            path: "/games/:gameTitlelug",
            element: ne(() => Promise.all([t.e(6696), t.e(3841), t.e(2285), t.e(90)]).then(t.bind(t, 50090)))
          }, {
            path: "/legal",
            element: ne(() => Promise.all([t.e(7125), t.e(2301)]).then(t.bind(t, 82301)))
          }, {
            path: "/gta-v/thankyou",
            element: ne(() => t.e(1036).then(t.bind(t, 1036)), {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: ne(() => t.e(2532).then(t.bind(t, 92532)))
          }, {
            path: "/community_event",
            element: ne(() => Promise.all([t.e(2285), t.e(7301), t.e(6499)]).then(t.bind(t, 86499)))
          }, {
            path: "/reddeadredemption2/*",
            element: ne(() => t.e(9147).then(t.t.bind(t, 29147, 23)))
          }, {
            path: "/reddeadredemption/*",
            element: ne(() => t.e(7538).then(t.t.bind(t, 47538, 23)))
          }, {
            path: "/bully/scholarshipedition",
            element: (0, n.jsx)(r.Navigate, {
              to: "/bully",
              replace: !0
            })
          }, {
            path: "/bully/*",
            element: ne(() => t.e(5202).then(t.t.bind(t, 35202, 23)))
          }, {
            path: "/reddeadonline/thankyou",
            element: ne(() => t.e(1036).then(t.bind(t, 1036)), {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: ne(() => t.e(3137).then(t.t.bind(t, 53137, 23)))
          }, {
            path: "/downloads/*",
            element: ne(() => Promise.all([t.e(1681), t.e(2393)]).then(t.bind(t, 52393)))
          }, {
            path: "/reddeadonline/*",
            element: ne(() => t.e(3416).then(t.t.bind(t, 33416, 23)))
          }, {
            path: "/gifs/:hashId",
            element: ne(() => t.e(1626).then(t.t.bind(t, 41626, 23)))
          }, {
            path: "/gta-v/*",
            element: ne(() => t.e(6766).then(t.t.bind(t, 36766, 23)), {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: ne(() => t.e(6766).then(t.t.bind(t, 36766, 23)), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-plus",
            element: ne(() => t.e(2090).then(t.bind(t, 2090)), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/mansions",
            element: ne(() => t.e(4459).then(t.bind(t, 4459)), {
              slug: "/gta-online/mansions",
              key: "gta-online-mansions"
            })
          }, {
            path: "/gta-online/*",
            element: ne(() => t.e(6766).then(t.t.bind(t, 36766, 23)), {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy/*",
            element: ne(() => t.e(2405).then(t.t.bind(t, 12405, 23)))
          }, {
            path: "/gtatv/*",
            element: ne(() => t.e(8987).then(t.t.bind(t, 88987, 23)))
          }, {
            path: "/manuals",
            element: ne(() => Promise.all([t.e(9475), t.e(8577)]).then(t.bind(t, 18577)))
          }, {
            path: "/manuals/music",
            element: ne(() => Promise.all([t.e(9475), t.e(1681), t.e(7543)]).then(t.bind(t, 97543)))
          }, {
            path: "/newswire",
            element: ne(() => Promise.all([t.e(5985), t.e(7821), t.e(6696), t.e(2285), t.e(9360), t.e(2091), t.e(6056)]).then(t.bind(t, 18891)))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: ne(() => t.e(4579).then(t.bind(t, 64579)))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: ne(() => t.e(4579).then(t.bind(t, 64579)))
          }, {
            path: "/privacy",
            element: ne(() => Promise.all([t.e(7125), t.e(998)]).then(t.bind(t, 90998)))
          }, {
            path: "/refund-policy",
            element: ne(() => Promise.all([t.e(7301), t.e(4e3)]).then(t.bind(t, 94e3)))
          }, {
            path: "/rockstartv/*",
            element: ne(() => t.e(8778).then(t.t.bind(t, 78778, 23)))
          }, {
            path: "/screenshot-viewer/*",
            element: ne(() => t.e(4103).then(t.bind(t, 24103)))
          }, {
            path: "/search",
            element: ne(() => Promise.all([t.e(6696), t.e(3841), t.e(355)]).then(t.bind(t, 355)))
          }, {
            path: "/socialclubmaintenance",
            element: ne(() => t.e(2273).then(t.bind(t, 52273)))
          }, {
            path: "/south-korean-privacy-addendum",
            element: ne(() => Promise.all([t.e(7125), t.e(4725)]).then(t.bind(t, 4725)))
          }, {
            path: "/unsubscribe",
            element: ne(() => Promise.all([t.e(5985), t.e(7821), t.e(596)]).then(t.bind(t, 30596)))
          }, {
            path: "/videos",
            element: ne(() => Promise.all([t.e(1018), t.e(6038), t.e(9215), t.e(7395)]).then(t.bind(t, 12718)))
          }, {
            path: "/videos/:videoId",
            element: ne(() => Promise.all([t.e(1018), t.e(1879), t.e(9215), t.e(5386)]).then(t.bind(t, 7637)))
          }, {
            ...l
          }];
          return isNaN(parseInt(o?.code)) || 200 === o?.code || (_ = [l]), (0, r.useRoutes)(_)
        }),
        se = {
          headerHidden: "rockstargames-sites-rockstargamesb6b034f449f546e8024b4fa91ec35516",
          main: "rockstargames-sites-rockstargamesf5a4be65929b33e16434b24a4d701e3e"
        },
        ie = (0, o.withAutoRouteTracking)(({
          headerHidden: e
        }) => {
          const {
            pathname: a
          } = (0, ee.useLocation)(), t = (0, i.useRef)(null), [o, s] = (0, i.useState)(!1);
          return (0, i.useEffect)(() => {
            s(!0), o && t.current?.focus()
          }, [a]), (0, n.jsx)("main", {
            role: "main",
            id: "main",
            tabIndex: -1,
            ref: t,
            className: [se.main, e ? se.headerHidden : ""].join(" "),
            children: (0, n.jsx)(oe, {})
          })
        });
      var re = t(34467),
        le = t(39848),
        _e = t.n(le);
      N();
      const ce = (() => {
        const e = window;
        if (e[P]?.history || N(), e[P]?.history) return e[P].history;
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
            setHeaderHidden: t,
            state: o
          } = (0, te.b)(), {
            footerHidden: s,
            headerHidden: u
          } = o, [g] = (0, i.useContext)(J), {
            pathname: m
          } = (0, r.useLocation)(), {
            data: h
          } = (0, Y.Wx)(), {
            setCharactersNeeded: b,
            setCrewsNeeded: v,
            setCurrentCharId: f,
            currentCharId: k
          } = (0, p.useRockstarUserState)();
          return (0, i.useEffect)(() => {
            const e = (0, re.Ek)({
                path: m
              }),
              n = (0, re.UN)({
                path: m
              });
            a(e), t(n)
          }, [m]), (0, i.useEffect)(() => {
            const e = ge.find(e => e.regex.test(m));
            e ? (e.currentChar && void 0 === k && f(0), b(e.chars), v(e.crews)) : (b(null), v(null))
          }, [m, k, b, v, f]), (0, n.jsx)(l.NP, {
            className: "_1bflk800",
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            locale: e,
            children: (0, n.jsx)(Y.UN, {
              children: (0, n.jsxs)(R, {
                threshold: [25, 50, 75, 90, 100],
                children: [(0, n.jsx)(c.Banner, {
                  locale: e,
                  site: "www"
                }), !u && (0, n.jsx)(c.NavigationWrapper, {
                  globalNavLoaderComponent: I,
                  globalNavComponent: _,
                  username: h?.nickname,
                  userProfileLink: h?.profile_link,
                  hasNotifications: h?.hasNotification
                }), g, (0, n.jsx)(A, {}), (0, n.jsx)(ie, {
                  headerHidden: u
                }), !s && (0, n.jsx)(_e(), {
                  onLanguageChange: d.onLanguageChange
                })]
              })
            })
          })
        }, f),
        pe = (0, o.withRockstarGraph)((0, o.withReactiveState)(() => {
          const e = (0, o.useBase)(),
            {
              setTitle: a
            } = (0, te.b)();
          return (0, i.useEffect)(() => {
            const e = e => {
              e.origin === `https://${window.env?.marketing?.marketingAuthTLD}` && "graph.titleUpdate" === (e.data?.type ?? null) && a(e.data.title)
            };
            return window.addEventListener("message", e), () => window.removeEventListener("message", e)
          }, [a]), (0, n.jsx)(Z.uU, {
            children: (0, n.jsx)(X.N2, {
              children: (0, n.jsx)(Y.iR, {
                children: (0, n.jsx)(T.default, {
                  history: ce,
                  basename: e,
                  children: (0, n.jsx)(V, {
                    children: (0, n.jsx)(de, {})
                  })
                })
              })
            })
          })
        }, {
          state: re.wk
        }), {
          env: window?.env?.graphEnv ?? "prod"
        }),
        me = window?.env?.oneTrustId ?? null,
        he = window?.env?.gtmId ?? null;
      (0, o.gtmInit)({
        id: he
      }), (0, o.oneTrustInit)({
        id: me,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, s.H)(e).render((0, n.jsx)(pe, {}))
        }
      })
    },
    51693(e, a, t) {
      t.d(a, {
        b: () => n.b$
      });
      var n = t(34467)
    },
    34467(e, a, t) {
      var n = t(13331);
      const o = ({
          path: e
        }) => window.self !== window.top || (["/gifs", "/screenshot-viewer", "/VI", "/videoplayer"].find(a => e.includes(a)) ?? []).length > 0,
        s = ({
          path: e
        }) => (["/gta-online/license-plates", "/VI"].find(a => e.includes(a)) ?? []).length > 0,
        i = (0, n.makeVar)({
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
          footerHidden: s({
            path: document.location.pathname
          }),
          normalLogo: !0,
          search: ""
        });
      t.d(a, ["Ek", 0, s, "UN", 0, o, "b$", 0, () => {
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
            const o = {
              ...e.gameData
            };
            null !== t && (o.base = t.replace(/\/$/, "")), null !== n && (o.navOpen = n), a({
              gameData: o
            })
          }
        }
      }, "wk", 0, i])
    },
    84465(e, a, t) {
      const n = (0, t(42909).defineMessages)({
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
      });
      t.d(a, ["A", 0, n])
    },
    52542(e) {
      e.exports = JSON.parse('{"de-DE":{"avatarmenu_logout":"Abmelden","avatarmenu_selectlanguage":"Eine Sprache auswählen","avatarmenu_signin":"Anmelden","avatarmenu_signup":"Registrieren","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Diese Richtlinien beschreiben die Werte, die wir voraussetzen, und die Regeln, die wir anwenden, um sicherzustellen, dass alle Spieler ein faires, respektvolles und sicheres Spielerlebnis haben.","community_guidelines_tile_header":"Community-Richtlinien anschauen","game_screens_alt_text":"{title}-Bildschirm, {id} von {total}","games_page_buy_cta":"JETZT KAUFEN","games_page_external_link":"(wird in einem neuen Tab geöffnet)","global_nav_language_selector_option_de_de":"Deutsch","global_nav_language_selector_option_en_us":"Englisch – (English)","global_nav_language_selector_option_es_es":"Spanisch – (Español)","global_nav_language_selector_option_es_mx":"Lateinamerikanisches Spanisch – (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"Französisch – (Français)","global_nav_language_selector_option_it_it":"Italienisch – (Italiano)","global_nav_language_selector_option_ja_jp":"Japanisch – (日本語)","global_nav_language_selector_option_ko_kr":"Koreanisch – (한국어)","global_nav_language_selector_option_pl_pl":"Polnisch – (Polski)","global_nav_language_selector_option_pt_br":"Brasilianisches Portugiesisch – (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Russisch – (Русский)","global_nav_language_selector_option_zh_hans":"Vereinfachtes Chinesisch – (简体中文)","global_nav_language_selector_option_zh_tw":"Traditionelles Chinesisch – (繁體中文)","handshake_icon_alt_text":"Symbol: Händeschütteln","heartbook_icon_alt_text":"Symbol: Buch mit Herz","quickmenu_games":"Spiele","quickmenu_home":"Startseite","quickmenu_newswire":"Newswire","resources_last_updated_date":"18. November 2024","resources_tile_description":"Finde schnell Ressourcen, falls du oder jemand, den du kennst, Probleme hat und Hilfe braucht.","resources_tile_header":"Sicherheitsressourcen anschauen","rsg_no_results":"Diese Suche ergab leider keine Treffer.","rsg_total_results_message":"Suche nach {Tab}, gefiltert nach {Query}","safety_get_support_button":"Support kontaktieren","safety_learn_more_button":"Mehr erfahren","support_chat_icon_alt_text":"Symbol: Support-Chat","support_tile_description":"Besuche unsere Kundendienst-Website, wenn du zusätzliche Hilfe mit der Verwaltung deines Kontos oder den Datenschutz- und Privatsphäreeinstellungen benötigst.","support_tile_header":"Brauchst du Hilfe mit deinem Konto?"},"en-US":{"avatarmenu_logout":"Log Out","avatarmenu_selectlanguage":"Select a Language","avatarmenu_signin":"Sign In","avatarmenu_signup":"Sign Up","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"These guidelines outline the values we uphold and the policies we enforce to ensure player experiences are fair, respectful, and safe.","community_guidelines_tile_header":"Explore Community Guidelines","game_screens_alt_text":"{title} screen, {id} of {total}","games_page_buy_cta":"BUY NOW","games_page_external_link":"(Opens in new tab)","global_nav_language_selector_option_de_de":"German - (Deutsch)","global_nav_language_selector_option_en_us":"English","global_nav_language_selector_option_es_es":"Spanish - (Español)","global_nav_language_selector_option_es_mx":"Spanish Latin America - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"French - (Français)","global_nav_language_selector_option_it_it":"Italian - (Italiano)","global_nav_language_selector_option_ja_jp":"Japanese - (日本語)","global_nav_language_selector_option_ko_kr":"Korean - (한국어)","global_nav_language_selector_option_pl_pl":"Polish - (Polski)","global_nav_language_selector_option_pt_br":"Português do Brasil - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Russian - (Русский)","global_nav_language_selector_option_zh_hans":"Chinese Simplified - (简体中文)","global_nav_language_selector_option_zh_tw":"Chinese Traditional - (繁體中文)","handshake_icon_alt_text":"Handshake icon","heartbook_icon_alt_text":"Book with heart icon","quickmenu_games":"Games","quickmenu_home":"Home","quickmenu_newswire":"Newswire","resources_last_updated_date":"November 18, 2024","resources_tile_description":"Quickly find resources if you or someone you know is struggling and in need of help.","resources_tile_header":"Explore Safety Resources","rsg_no_results":"Sorry, there were no results.","rsg_total_results_message":"Showing {Tab} filtered by {Query}","safety_get_support_button":"Get Support","safety_learn_more_button":"Learn More","support_chat_icon_alt_text":"Support chat icon","support_tile_description":"For additional assistance with managing your account or data and privacy settings, visit our Customer Support page.","support_tile_header":"Need account assistance?"},"es-ES":{"avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Selecciona un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","community_guidelines_image_alt_text":"Say sorry, be nice (pide perdón, sé amable)","community_guidelines_tile_description":"Estas directrices resumen los valores que defendemos y las políticas que aplicamos para asegurarnos de que nuestros jugadores disfrutan de una experiencia justa, respetuosa y segura.","community_guidelines_tile_header":"Ver las directrices de la comunidad","game_screens_alt_text":"pantalla de {title}, {id} de {total}","games_page_buy_cta":"COMPRAR AHORA","games_page_external_link":"(Se abre en una pestaña nueva)","global_nav_language_selector_option_de_de":"Alemán - (Deutsch)","global_nav_language_selector_option_en_us":"Inglés (English)","global_nav_language_selector_option_es_es":"Español - (España)","global_nav_language_selector_option_es_mx":"Español - (Latinoamérica)","global_nav_language_selector_option_fr_fr":"Francés - (Français)","global_nav_language_selector_option_it_it":"Italiano","global_nav_language_selector_option_ja_jp":"Japonés - (日本語)","global_nav_language_selector_option_ko_kr":"Coreano - (한국어)","global_nav_language_selector_option_pl_pl":"Polaco - (Polski)","global_nav_language_selector_option_pt_br":"Portugués brasileño - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Ruso - (Русский)","global_nav_language_selector_option_zh_hans":"Chino simplificado - (简体中文)","global_nav_language_selector_option_zh_tw":"Chino tradicional - (繁體中文)","handshake_icon_alt_text":"Icono de un apretón de manos","heartbook_icon_alt_text":"Icono de un libro con un corazón","quickmenu_games":"Juegos","quickmenu_home":"Inicio","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 De noviembre de 2024","resources_tile_description":"Encuentra ayuda rápidamente en caso de que tú o alguien que conoces esté pasando por dificultades y necesite apoyo.","resources_tile_header":"Ver los servicios de ayuda","rsg_no_results":"Lo sentimos, no hay resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Obtén asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Icono de chat de asistencia","support_tile_description":"Si necesitas ayuda adicional para gestionar tu cuenta o tus ajustes de datos o privacidad, visita nuestro sitio web de asistencia técnica.","support_tile_header":"¿Necesitas ayuda con tu cuenta?"},"es-MX":{"avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Seleccionar un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","community_guidelines_image_alt_text":"Imagen con el mensaje: Say Sorry, Be Nice","community_guidelines_tile_description":"Estas directrices describen nuestros valores y las políticas que imponemos para asegurar que las experiencias de los jugadores sean justas, respetuosas y seguras.","community_guidelines_tile_header":"Directrices de la comunidad","game_screens_alt_text":"pantalla de {title}, {id} de {total}","games_page_buy_cta":"COMPRAR AHORA","games_page_external_link":"(Se abre en una pestaña nueva)","global_nav_language_selector_option_de_de":"Alemán - (Deutsch)","global_nav_language_selector_option_en_us":"Inglés - (English)","global_nav_language_selector_option_es_es":"Español (España)","global_nav_language_selector_option_es_mx":"Español (Latinoamérica)","global_nav_language_selector_option_fr_fr":"Francés - (Français)","global_nav_language_selector_option_it_it":"Italiano","global_nav_language_selector_option_ja_jp":"Japonés - (日本語)","global_nav_language_selector_option_ko_kr":"Coreano - (한국어)","global_nav_language_selector_option_pl_pl":"Polaco - (Polski)","global_nav_language_selector_option_pt_br":"Portugués de Brasil - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Ruso - (Русский)","global_nav_language_selector_option_zh_hans":"Chino simplificado - (简体中文)","global_nav_language_selector_option_zh_tw":"Chino tradicional - (繁體中文)","handshake_icon_alt_text":"Ícono de un apretón de manos","heartbook_icon_alt_text":"Ícono de un libro con un corazón","quickmenu_games":"Juegos","quickmenu_home":"Inicio","quickmenu_newswire":"Canal de noticias","resources_last_updated_date":"18 de noviembre de 2024","resources_tile_description":"Encuentra recursos rápidamente si tú o alguien que conoces necesita ayuda.","resources_tile_header":"Recursos de seguridad","rsg_no_results":"Lo lamentamos, pero no se encontraron resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Recibir asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Ícono de chat de soporte","support_tile_description":"Para recibir asistencia adicional en relación con tu cuenta, datos o ajustes de privacidad, visita nuestra página de soporte.","support_tile_header":"Asistencia para tu cuenta"},"fr-FR":{"avatarmenu_logout":"Se déconnecter","avatarmenu_selectlanguage":"Sélectionner une langue","avatarmenu_signin":"Se connecter","avatarmenu_signup":"S’abonner","community_guidelines_image_alt_text":"Image avec le texte en anglais Say Sorry, Be Nice","community_guidelines_tile_description":"Ces règles décrivent nos valeurs et les politiques que nous faisons appliquer pour assurer à tous les joueurs une expérience juste, respectueuse et sûre.","community_guidelines_tile_header":"Explorez nos Règles de la communauté","game_screens_alt_text":"{title} écran, {id} sur {total}","games_page_buy_cta":"ACHETER MAINTENANT","games_page_external_link":"(s\'ouvre dans un nouvel onglet)","global_nav_language_selector_option_de_de":"Allemand - (Deutsch)","global_nav_language_selector_option_en_us":"Anglais - (English)","global_nav_language_selector_option_es_es":"Espagnol - (Español)","global_nav_language_selector_option_es_mx":"Espagnol d’Amérique latine - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"Français","global_nav_language_selector_option_it_it":"Italien - (Italiano)","global_nav_language_selector_option_ja_jp":"Japonais - (日本語)","global_nav_language_selector_option_ko_kr":"Coréen - (한국어)","global_nav_language_selector_option_pl_pl":"Polonais - (Polski)","global_nav_language_selector_option_pt_br":"Portugais brésilien - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Russe - (Русский)","global_nav_language_selector_option_zh_hans":"Chinois simplifié - (简体中文)","global_nav_language_selector_option_zh_tw":"Chinois traditionnel - (繁體中文)","handshake_icon_alt_text":"Icône de poignée de main","heartbook_icon_alt_text":"Icône de livre avec un cœur","quickmenu_games":"Jeux","quickmenu_home":"Accueil","quickmenu_newswire":"Newswire","resources_last_updated_date":"Le 18 novembre 2024","resources_tile_description":"Trouvez rapidement des ressources si vous, ou une personne que vous connaissez, êtes en difficulté et avez besoin d\'aide.","resources_tile_header":"Explorez nos ressources relatives à la sécurité","rsg_no_results":"Désolé, aucun résultat n\'a été trouvé.","rsg_total_results_message":"Résultats : {Tab} Filtres : {Query}","safety_get_support_button":"Obtenir de l\'aide","safety_learn_more_button":"En savoir plus","support_chat_icon_alt_text":"Icône de discussion de l\'assistance","support_tile_description":"Si vous avez besoin d\'aide supplémentaire pour gérer votre compte ou les paramètres de vos données et de votre confidentialité, rendez-vous sur notre page d\'assistance à la clientèle.","support_tile_header":"Besoin d\'aide pour votre compte ?"},"it-IT":{"avatarmenu_logout":"Esci","avatarmenu_selectlanguage":"Seleziona una lingua","avatarmenu_signin":"Accedi","avatarmenu_signup":"Registrati","community_guidelines_image_alt_text":"Immagine con logo “Say Sorry, Be Nice”.","community_guidelines_tile_description":"Queste linee guida definiscono i valori che sosteniamo e le politiche che applichiamo per assicurare ai giocatori un’esperienza positiva, rispettosa e sicura.","community_guidelines_tile_header":"Scopri le Linee guida della comunità","game_screens_alt_text":"Schermata {title}, {id} di {total}","games_page_buy_cta":"COMPRA ORA","games_page_external_link":"(Apri in una nuova scheda)","global_nav_language_selector_option_de_de":"Tedesco - (Deutsch)","global_nav_language_selector_option_en_us":"Inglese - (English)","global_nav_language_selector_option_es_es":"Spagnolo - (Español)","global_nav_language_selector_option_es_mx":"Spagnolo (America Latina) - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"Francese - (Français)","global_nav_language_selector_option_it_it":"Italiano","global_nav_language_selector_option_ja_jp":"Giapponese - (日本語)","global_nav_language_selector_option_ko_kr":"Coreano - (한국어)","global_nav_language_selector_option_pl_pl":"Polacco - (Polski)","global_nav_language_selector_option_pt_br":"Portoghese (Brasile) - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Russo - (Русский)","global_nav_language_selector_option_zh_hans":"Chinese semplificato - (简体中文)","global_nav_language_selector_option_zh_tw":"Cinese tradizionale - (繁體中文)","handshake_icon_alt_text":"Icona della stretta di mano","heartbook_icon_alt_text":"Icona di un libro con un cuore","quickmenu_games":"Giochi","quickmenu_home":"Home","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 Novembre 2024","resources_tile_description":"Trova velocemente le risorse che cerchi se tu o qualcuno che conosci è in difficoltà e ha bisogno di aiuto.","resources_tile_header":"Scopri le risorse per la sicurezza","rsg_no_results":"Spiacente, nessun risultato trovato.","rsg_total_results_message":"Scheda {Tab} filtrata per {Query}","safety_get_support_button":"Chiedi assistenza","safety_learn_more_button":"Altre informazioni","support_chat_icon_alt_text":"Icona della chat di assistenza","support_tile_description":"Per ulteriore assistenza sulla gestione del tuo account o dei tuoi data e sulle impostazioni della privacy, visita la nostra pagina del supporto clienti.","support_tile_header":"Hai bisogno di aiuto con il tuo account?"},"ja-JP":{"avatarmenu_logout":"ログアウト","avatarmenu_selectlanguage":"言語を選択","avatarmenu_signin":"サインイン","avatarmenu_signup":"サインアップ","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"このガイドラインでは、プレイヤーの体験が公平で、尊重され、安全であることを保証するため弊社が強化する方針ならびに、弊社が支持する価値観を説明しています。","community_guidelines_tile_header":"コミュニティガイドラインをチェックする","game_screens_alt_text":"{title}画面の{id}/{total}","games_page_buy_cta":"今すぐ購入","games_page_external_link":"(新しいタブで開く)","global_nav_language_selector_option_de_de":"ドイツ語 - (Deutsch)","global_nav_language_selector_option_en_us":"英語 - (English)","global_nav_language_selector_option_es_es":"スペイン語 - (Español)","global_nav_language_selector_option_es_mx":"スペイン語(ラテンアメリカ) - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"フランス語 - (Français)","global_nav_language_selector_option_it_it":"イタリア語 - (Italiano)","global_nav_language_selector_option_ja_jp":"日本語","global_nav_language_selector_option_ko_kr":"韓国語 - (한국어)","global_nav_language_selector_option_pl_pl":"ポーランド語 - (Polski)","global_nav_language_selector_option_pt_br":"ポルトガル語(ブラジル) - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"ロシア語 - (Русский)","global_nav_language_selector_option_zh_hans":"簡体字中国語 - (简体中文)","global_nav_language_selector_option_zh_tw":"繁体字中国語 - (繁體中文)","handshake_icon_alt_text":"握手のアイコン","heartbook_icon_alt_text":"ハートのついた本のアイコン","quickmenu_games":"ゲーム","quickmenu_home":"ホーム","quickmenu_newswire":"Newswire","resources_last_updated_date":"2024年11月18日","resources_tile_description":"あなた自身もしくは知人が困っており、ヘルプが必要な場合の情報を見つける。","resources_tile_header":"安全性に関する情報をチェックする","rsg_no_results":"申し訳ありません、結果が見つかりませんでした。","rsg_total_results_message":"{Query}でフィルターした{Tab}を表示中","safety_get_support_button":"サポートを依頼する","safety_learn_more_button":"詳細を見る","support_chat_icon_alt_text":"サポートチャットのアイコン","support_tile_description":"アカウントやデータ、プライバシー設定の管理についての追加アシストはカスタマーサポートページをご覧ください。","support_tile_header":"アカウントアシストが必要ですか？"},"ko-KR":{"avatarmenu_logout":"로그아웃","avatarmenu_selectlanguage":"언어 선택","avatarmenu_signin":"로그인","avatarmenu_signup":"가입","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"공정, 상호 존중, 안전을 바탕으로 한 플레이어 경험을 제공하기 위해 당사에서 추구하는 가치 및 시행하는 정책을 정리한 가이드라인입니다.","community_guidelines_tile_header":"커뮤니티 가이드라인 살펴보기","game_screens_alt_text":"{title} 화면, {total}의 {id}","games_page_buy_cta":"지금 구매","games_page_external_link":"(새 탭에서 열기)","global_nav_language_selector_option_de_de":"독일어 - (Deutsch)","global_nav_language_selector_option_en_us":"영어 - (English)","global_nav_language_selector_option_es_es":"스페인어 - (Español)","global_nav_language_selector_option_es_mx":"라틴 아메리카 스페인어 - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"프랑스어 - (Français)","global_nav_language_selector_option_it_it":"이탈리아어 - (Italiano)","global_nav_language_selector_option_ja_jp":"일본어 - (日本語)","global_nav_language_selector_option_ko_kr":"한국어","global_nav_language_selector_option_pl_pl":"폴란드어 - (Polski)","global_nav_language_selector_option_pt_br":"브라질 포르투갈어 - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"러시아어 - (Русский)","global_nav_language_selector_option_zh_hans":"중국어 간체 - (简体中文)","global_nav_language_selector_option_zh_tw":"중국어 번체 - (繁體中文)","handshake_icon_alt_text":"악수 모양 아이콘","heartbook_icon_alt_text":"책과 하트 아이콘","quickmenu_games":"게임","quickmenu_home":"홈","quickmenu_newswire":"뉴스와이어","resources_last_updated_date":"2024년 11월 18일","resources_tile_description":"본인 및 주변인에게 도움이 필요하다면 이곳에서 관련 정보를 빠르게 찾아보실 수 있습니다.","resources_tile_header":"안전 관련 정보 살펴보기","rsg_no_results":"죄송합니다, 결과가 없습니다.","rsg_total_results_message":"{Query} 필터를 적용한 {Tab} 보기","safety_get_support_button":"도움 요청하기","safety_learn_more_button":"더 알아보기","support_chat_icon_alt_text":"지원 채팅 아이콘","support_tile_description":"계정, 데이터, 개인 정보 보호 설정을 관리하는 데 추가로 도움이 필요하시다면 저희의 고객 지원 페이지를 방문해주세요.","support_tile_header":"계정 관련 도움이 필요하신가요?"},"pl-PL":{"avatarmenu_logout":"Wyloguj się","avatarmenu_selectlanguage":"Wybierz język","avatarmenu_signin":"Zaloguj się","avatarmenu_signup":"Zarejestruj się","community_guidelines_image_alt_text":"Zachowuj się grzecznie!","community_guidelines_tile_description":"Ten regulamin opisuje wartości, jakimi się kierujemy, jak również zasady, których przestrzegamy, aby zapewnić graczom sprawiedliwe, bezpieczne i pełne szacunku doświadczenia.","community_guidelines_tile_header":"Przeglądaj regulamin społeczności","game_screens_alt_text":"Zrzut ekranu z {title}, {id} z {total}","games_page_buy_cta":"KUP TERAZ","games_page_external_link":"(Otwórz w nowej karcie)","global_nav_language_selector_option_de_de":"Niemiecki - (Deutsch)","global_nav_language_selector_option_en_us":"Angielski - (English)","global_nav_language_selector_option_es_es":"Hiszpański - (Español)","global_nav_language_selector_option_es_mx":"Hiszpański (Ameryka Łacińska) - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"Francuski - (Français)","global_nav_language_selector_option_it_it":"Włoski - (Italiano)","global_nav_language_selector_option_ja_jp":"Japoński - (日本語)","global_nav_language_selector_option_ko_kr":"Koreański - (한국어)","global_nav_language_selector_option_pl_pl":"Polski","global_nav_language_selector_option_pt_br":"Portugalski (Brazylia) - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Rosyjski - (Русский)","global_nav_language_selector_option_zh_hans":"Chiński uproszczony - (简体中文)","global_nav_language_selector_option_zh_tw":"Chiński tradycyjny - (繁體中文)","handshake_icon_alt_text":"Ikona uścisku dłoni","heartbook_icon_alt_text":"Zapisz przy pomocy ikony serca","quickmenu_games":"Gry","quickmenu_home":"Strona główna","quickmenu_newswire":"Newswire","resources_last_updated_date":"18 Listopada 2024","resources_tile_description":"Odszukaj szybko informacje, jeżeli ty lub ktoś, kogo znasz, potrzebuje pomocy.","resources_tile_header":"Przeglądaj informacje dotyczące bezpieczeństwa","rsg_no_results":"Brak wyników.","rsg_total_results_message":"Wyświetlono: {Tab} filtrowanie: {Query}","safety_get_support_button":"Uzyskaj wsparcie","safety_learn_more_button":"Dowiedz się więcej","support_chat_icon_alt_text":"Ikona kontaku ze wsparciem","support_tile_description":"W celu uzyskania dodatkowej pomocy dotyczącej obsługi konta lub ustawień prywatności odwiedź naszą stronę wsparcia.","support_tile_header":"Potrzebujesz wsparcia dotyczącego konta?"},"pt-BR":{"avatarmenu_logout":"Sair","avatarmenu_selectlanguage":"Selecione um idioma","avatarmenu_signin":"Iniciar sessão","avatarmenu_signup":"Inscrever-se","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Estas regras detalham os valores e políticas que mantêm a experiência de jogo justa, respeitosa e segura.","community_guidelines_tile_header":"Explore as Regras da Comunidade","game_screens_alt_text":"Tela de {title}, {id} de {total}","games_page_buy_cta":"COMPRE JÁ","games_page_external_link":"(Abre em uma nova aba)","global_nav_language_selector_option_de_de":"Alemão - (Deutsch)","global_nav_language_selector_option_en_us":"Inglês - (English)","global_nav_language_selector_option_es_es":"Espanhol (Espanha) - (Español España)","global_nav_language_selector_option_es_mx":"Espanhol (América Latina) - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"Francês - (Français)","global_nav_language_selector_option_it_it":"Italiano - (Italiano)","global_nav_language_selector_option_ja_jp":"Japonês - (日本語)","global_nav_language_selector_option_ko_kr":"Coreano - (한국어)","global_nav_language_selector_option_pl_pl":"Polonês - (Polski)","global_nav_language_selector_option_pt_br":"Português do Brasil","global_nav_language_selector_option_ru_ru":"Russo - (Русский)","global_nav_language_selector_option_zh_hans":"Chinês Simplificado - (简体中文)","global_nav_language_selector_option_zh_tw":"Chinês Tradicional - (繁體中文)","handshake_icon_alt_text":"Ícone de aperto de mão","heartbook_icon_alt_text":"Ícone de livro com coração","quickmenu_games":"Jogos","quickmenu_home":"Início","quickmenu_newswire":"Boletim","resources_last_updated_date":"18 de novembro de 2024","resources_tile_description":"Encontre recursos rapidamente se você ou alguém que você conhece precisa de ajuda.","resources_tile_header":"Explore os recursos de segurança","rsg_no_results":"Nenhum resultado foi encontrado.","rsg_total_results_message":"Mostrando {Tab} com o filtro {Query}","safety_get_support_button":"Acionar suporte","safety_learn_more_button":"Saiba mais","support_chat_icon_alt_text":"Ícone de chat de suporte","support_tile_description":"Para mais ajuda com o gerenciamento da sua conta, dados e configurações de privacidade, acesse a página de suporte.","support_tile_header":"Precisa de ajuda com a sua conta?"},"ru-RU":{"avatarmenu_logout":"Выход","avatarmenu_selectlanguage":"Выбрать язык","avatarmenu_signin":"Войти","avatarmenu_signup":"Регистрация","community_guidelines_image_alt_text":"Надпись Say Sorry, Be Nice","community_guidelines_tile_description":"В этих правилах изложены ценности, которых мы придерживаемся, и политики, которые мы применяем для обеспечения честной, уважительной и безопасной игры для всех.","community_guidelines_tile_header":"Ознакомьтесь с правилами сообщества","game_screens_alt_text":"{title} экран, {id} из {total}","games_page_buy_cta":"КУПИТЬ","games_page_external_link":"(Откроется в новом окне)","global_nav_language_selector_option_de_de":"Немецкий - (Deutsch)","global_nav_language_selector_option_en_us":"Английский","global_nav_language_selector_option_es_es":"Испанский - (Español)","global_nav_language_selector_option_es_mx":"Латиноамериканский испанский - (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"Французский - (Français)","global_nav_language_selector_option_it_it":"Итальянский - (Italiano)","global_nav_language_selector_option_ja_jp":"Японский - (日本語)","global_nav_language_selector_option_ko_kr":"Корейский - (한국어)","global_nav_language_selector_option_pl_pl":"Польский - (Polski)","global_nav_language_selector_option_pt_br":"Бразильский португальский - (Português do Brasil)","global_nav_language_selector_option_ru_ru":"Русский","global_nav_language_selector_option_zh_hans":"Китайский (упрощенный) - (简体中文)","global_nav_language_selector_option_zh_tw":"Китайский (традиционный) - (繁體中文)","handshake_icon_alt_text":"Значок рукопожатия","heartbook_icon_alt_text":"Значок книги с сердцем","quickmenu_games":"Игры","quickmenu_home":"Главная страница","quickmenu_newswire":"Новостная лента","resources_last_updated_date":"18 ноября 2024 года","resources_tile_description":"Быстро найдите интернет-ресурсы, если вы или кто-то из ваших знакомых испытывает трудности и нуждается в помощи.","resources_tile_header":"Ознакомьтесь с ресурсами по психологической поддержке","rsg_no_results":"Результаты не найдены.","rsg_total_results_message":"Поиск в категории {Tab} с фильтром «{Query}»","safety_get_support_button":"Обратиться в службу поддержки","safety_learn_more_button":"Подробности","support_chat_icon_alt_text":"Значок службы поддержки","support_tile_description":"Для получения дополнительной помощи по управлению вашей учетной записью или данными и настройками конфиденциальности посетите нашу страницу поддержки клиентов.","support_tile_header":"Нужна помощь с учетной записью?"},"zh-CN":{"avatarmenu_logout":"登出","avatarmenu_selectlanguage":"选择一种语言","avatarmenu_signin":"登录","avatarmenu_signup":"注册","community_guidelines_image_alt_text":"说声对不起，做个好人","community_guidelines_tile_description":"指南中列出了我们秉持的价值观和遵循的政策原则，为玩家营造公平、尊重和安全的游玩体验。","community_guidelines_tile_header":"查看《社区指南》","game_screens_alt_text":"{title}画面，{id}（共{total}个）","games_page_buy_cta":"马上购买","games_page_external_link":"（在新标签页中打开）","global_nav_language_selector_option_de_de":"德语 - (Deutsch)","global_nav_language_selector_option_en_us":"英语 - (English)","global_nav_language_selector_option_es_es":"西班牙语 - (Español)","global_nav_language_selector_option_es_mx":"西班牙语（拉丁美洲）- (Español Latinoamérica)","global_nav_language_selector_option_fr_fr":"法语 - (Français)","global_nav_language_selector_option_it_it":"意大利语 - (Italiano)","global_nav_language_selector_option_ja_jp":"日语 - (日本語)","global_nav_language_selector_option_ko_kr":"韩语 - (한국어)","global_nav_language_selector_option_pl_pl":"波兰语 - (Polski)","global_nav_language_selector_option_pt_br":"葡萄牙语（巴西）- (Português do Brasil)","global_nav_language_selector_option_ru_ru":"俄语 - (Русский)","global_nav_language_selector_option_zh_hans":"简体中文","global_nav_language_selector_option_zh_tw":"繁体中文 - (繁體中文)","handshake_icon_alt_text":"握手图标","heartbook_icon_alt_text":"书上印着一颗心的图标","quickmenu_games":"游戏","quickmenu_home":"主页","quickmenu_newswire":"新闻专线","resources_last_updated_date":"2024年11月18日","resources_tile_description":"如果您自己，或者您知道的其他人需要帮助，在这里可以快速找到相关内容。","resources_tile_header":"查看“安全”相关内容","rsg_no_results":"抱歉，没有搜索结果。","rsg_total_results_message":"按{Query}筛选显示{Tab}","safety_get_support_button":"寻求支持","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支持对话图标","support_tile_description":"如果您在管理账户或数据，或者设置隐私选项时需要额外的帮助，请前往客户支持页面。","support_tile_header":"需要账户相关的帮助吗？"},"zh-TW":{"avatarmenu_logout":"登出","avatarmenu_selectlanguage":"選擇語言","avatarmenu_signin":"登入","avatarmenu_signup":"註冊","community_guidelines_image_alt_text":"敢於道歉，友善待人","community_guidelines_tile_description":"我們以此守則簡述所遵循的價值觀，以及我們為了確保公平、尊重與安全的玩家體驗所執行的政策。","community_guidelines_tile_header":"探索社群守則","game_screens_alt_text":"第{id} 個 {title} 畫面（共 {total} 個）","games_page_buy_cta":"馬上購買","games_page_external_link":"（在新分頁開啟）","global_nav_language_selector_option_de_de":"德文 / Deutsch","global_nav_language_selector_option_en_us":"英文 / English","global_nav_language_selector_option_es_es":"西班牙文 / Español","global_nav_language_selector_option_es_mx":"西班牙文（拉丁美洲）/ Español Latinoamérica","global_nav_language_selector_option_fr_fr":"法文 / Français","global_nav_language_selector_option_it_it":"意大利文 / Italiano","global_nav_language_selector_option_ja_jp":"日文 / 日本語","global_nav_language_selector_option_ko_kr":"韓文 / 한국어","global_nav_language_selector_option_pl_pl":"波蘭文 / Polski","global_nav_language_selector_option_pt_br":"葡萄牙文（巴西）/ Português do Brasil","global_nav_language_selector_option_ru_ru":"俄文 / Русский","global_nav_language_selector_option_zh_hans":"簡體中文 / 简体中文","global_nav_language_selector_option_zh_tw":"繁體中文","handshake_icon_alt_text":"握手圖示","heartbook_icon_alt_text":"書本上有心形的圖示","quickmenu_games":"遊戲","quickmenu_home":"首頁","quickmenu_newswire":"新聞放送","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"若您或您認識的人遭逢困難或需要協助，您可以快速尋找資源。","resources_tile_header":"探索安全資源","rsg_no_results":"很抱歉，無相符的搜尋結果。","rsg_total_results_message":"正在顯示 {Tab}，搜尋條件為 {Query}","safety_get_support_button":"取得支援","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支援文字對話圖示","support_tile_description":"如需管理您帳戶、資料或隱私權設定的額外協助，請造訪我們的客戶支援頁面。","support_tile_header":"需要帳戶協助？"}}')
    }
  }
]);