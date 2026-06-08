try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f34b0697-cbba-46b3-aa20-9c9030fd919c", e._sentryDebugIdIdentifier = "sentry-dbid-f34b0697-cbba-46b3-aa20-9c9030fd919c")
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
  [2472, 5656], {
    5656(e, a, n) {
      n.r(a), n.d(a, {
        Actions: () => $e,
        AvatarMenu: () => ve,
        AvatarMenuLanguageLabel: () => Me,
        AvatarMenuSection: () => fe,
        AvatarMenuSectionContent: () => be,
        AvatarMenuSectionHeader: () => ge,
        AvatarMenuSectionHeaderDropdown: () => pe,
        Breakpoint: () => X,
        CallToAction: () => ea,
        Contexts: () => Ma,
        Header: () => B,
        Menu: () => we,
        MenuContent: () => Ge,
        MenuIcon: () => Ve,
        MenuItem: () => Le,
        MenuLink: () => Ue,
        MenuList: () => Se,
        MenuSub: () => Qe,
        MenuTrigger: () => Ie,
        MobileMenu: () => te,
        MobileMenuNav: () => ae,
        QuickMenu: () => je,
        Root: () => G,
        Search: () => sa,
        SearchBar: () => oa,
        SearchContainer: () => ia,
        SearchError: () => ha,
        SearchFilters: () => la,
        SearchTarget: () => ca,
        SearchTargetDropdown: () => ua,
        SiteTitle: () => ba
      });
      var t = n(93082),
        s = n(81270),
        r = n(39615),
        i = n(30212),
        o = n(14376),
        l = n(23470),
        c = n(68925),
        d = n(39793),
        u = (n(54446), n(79067)),
        h = n(96883),
        m = n(52457),
        v = n(38957),
        x = n(66760),
        f = n(13517),
        g = n(88819),
        p = n(3541),
        b = n(68206),
        M = n(41421),
        _ = n(81010),
        j = n(29190),
        N = n(69353),
        C = n(28528),
        y = n(4956),
        k = n(1531),
        w = Object.defineProperty,
        S = (e, a) => () => (a || (e((a = {
          exports: {}
        }).exports, a), e = null), a.exports),
        O = (e, a) => {
          let n = {};
          for (var t in e) w(n, t, {
            get: e[t],
            enumerable: !0
          });
          return a || w(n, Symbol.toStringTag, {
            value: "Module"
          }), n
        };
      const L = {
        "en-US": {
          accessibility_skip_button: "Skip the Menu",
          avatar_menu_close: "Close Player Menu",
          avatar_menu_open: "Open Player Menu",
          nav_avatarmenu_title: "Avatar menu",
          nav_mobilemenu_close: "Close menu",
          nav_mobilemenu_open: "Open menu",
          nav_mobilemenu_title: "Navigation menu",
          nav_more_dropdown: "More",
          nav_rockstargames_external_link: "External",
          nav_rockstargames_home: "Rockstar Games Home",
          nav_rockstargames_logo: "Click to open menu",
          nav_rockstargames_submenu_indicator: "Sub Menu",
          nav_search_error_too_short: "Your search query is too short. Queries must be at least {count} characters long.",
          nav_search_error_too_short_invalid_chars: "Your search query contains invalid characters ({invalidChars}). Remove these and try again.",
          search_action: "Search",
          search_categories: "Search Categories",
          search_close_button: "Close Search",
          search_disabled_aria_label: "Already searched current query. Please enter a new query.",
          search_open_button: "Open Search",
          search_placeholder: "Search Rockstar Games..."
        },
        "de-DE": {},
        "es-ES": {},
        "es-MX": {},
        "fr-FR": {},
        "it-IT": {},
        "ja-JP": {},
        "ko-KR": {},
        "pl-PL": {},
        "pt-BR": {},
        "ru-RU": {},
        "zh-TW": {},
        "zh-CN": {}
      };
      var I = (0, o.YK)({
        nav_rockstargames_home: {
          id: "nav_rockstargames_home",
          description: "Global navigation, Rockstar Games Home",
          defaultMessage: "Rockstar Games Home"
        },
        nav_rockstargames_logo: {
          id: "nav_rockstargames_logo",
          description: "Global navigation, Rockstar Games Logo that opens the Quick Access Menu",
          defaultMessage: "Click to open menu"
        },
        nav_rockstargames_external_link: {
          id: "nav_rockstargames_external_link",
          description: "Label for an external link.",
          defaultMessage: "External"
        },
        nav_rockstargames_submenu_indicator: {
          id: "nav_rockstargames_submenu_indicator",
          description: "Label for chevron icon, indicating trigger has a sub menu",
          defaultMessage: "Sub Menu"
        },
        nav_mobilemenu_open: {
          id: "nav_mobilemenu_open",
          description: "Global navigation, Hamburger menu opens the Mobile Menu",
          defaultMessage: "Open menu"
        },
        nav_mobilemenu_close: {
          id: "nav_mobilemenu_close",
          description: "Global navigation, Hamburger menu closes the Mobile Menu",
          defaultMessage: "Close menu"
        },
        nav_mobilemenu_title: {
          id: "nav_mobilemenu_title",
          description: "Mobile Menu, Accessible title for the mobile menu",
          defaultMessage: "Navigation menu"
        },
        nav_avatarmenu_title: {
          id: "nav_avatarmenu_title",
          description: "Avatar Menu, Accessible title for the avatar menu",
          defaultMessage: "Avatar menu"
        },
        search_action: {
          id: "search_action",
          description: "Global navigation search, Search action used on buttons and aria-labels",
          defaultMessage: "Search"
        },
        search_categories: {
          id: "search_categories",
          description: "Global navigation search categories aria label",
          defaultMessage: "Search Categories"
        },
        search_open_button: {
          id: "search_open_button",
          description: "Global navigation search, Button label for opening search input",
          defaultMessage: "Open Search"
        },
        search_close_button: {
          id: "search_close_button",
          description: "Global navigation search, Button label for closing search input",
          defaultMessage: "Close Search"
        },
        search_placeholder: {
          id: "search_placeholder",
          description: "Global navigation search, Placeholder text within search input",
          defaultMessage: "Search Rockstar Games..."
        },
        search_disabled_aria_label: {
          id: "search_disabled_aria_label",
          description: "Global navigation search, label when icon button is disabled",
          defaultMessage: "Already searched current query. Please enter a new query."
        },
        nav_more_dropdown: {
          id: "nav_more_dropdown",
          description: "Global navigation More, Overflow for small screens More text link",
          defaultMessage: "More"
        },
        accessibility_skip_button: {
          id: "accessibility_skip_button",
          description: "Message for A11Y asking the user if they want to skip the navigation and go straight to the content.",
          defaultMessage: "Skip the Menu"
        },
        avatar_menu_open: {
          id: "avatar_menu_open",
          description: "Global navigation player menu, Button label for opening search input",
          defaultMessage: "Open Player Menu"
        },
        avatar_menu_close: {
          id: "avatar_menu_close",
          description: "Global navigation player menu, Button label for closing search input",
          defaultMessage: "Close Player Menu"
        },
        nav_search_error_too_short: {
          id: "nav_search_error_too_short",
          description: "Message under search box telling user their query is too short",
          defaultMessage: "Your search query is too short. Queries must be at least {count} characters long."
        },
        nav_search_error_invalid_chars: {
          id: "nav_search_error_too_short_invalid_chars",
          description: "Message under search box telling user their query contains invalid characters",
          defaultMessage: "Your search query contains invalid characters ({invalidChars}). Remove these and try again."
        }
      });
      const A = () => {
        const e = (0, t.useRef)(null);
        return (0, d.jsx)("button", {
          ref: e,
          className: "_3ge2ci0",
          onClick: () => {
            const a = document.querySelector(".siteHeaderContainer"),
              n = "__spatialNavigation__" in window ? window.__spatialNavigation__ : null;
            if (a && n) {
              n.enableExperimentalAPIs(!0);
              const t = n.findCandidates(a, "down", {
                mode: "all"
              }).filter(n => !a.contains(n) && e.current !== n);
              t.length > 0 && t[0].focus()
            }
          },
          children: (0, d.jsx)(l.A, {
            ...I.accessibility_skip_button
          })
        })
      };

      function E(e) {
        var a = function(e) {
          if ("object" != typeof e || !e) return e;
          var a = e[Symbol.toPrimitive];
          if (void 0 !== a) {
            var n = a.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof a ? a : String(a)
      }

      function D(e, a) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          a && (t = t.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
          })), n.push.apply(n, t)
        }
        return n
      }

      function z(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {};
          a % 2 ? D(Object(n), !0).forEach(function(a) {
            var t, s, r;
            t = e, s = a, r = n[a], (s = E(s)) in t ? Object.defineProperty(t, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[s] = r
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
          })
        }
        return e
      }

      function P(e, a) {
        var n = {};
        for (var t in e) n[t] = a(e[t], t);
        return n
      }
      var T = (e, a, n) => {
          for (var t of Object.keys(e)) {
            var s;
            if (e[t] !== (null !== (s = a[t]) && void 0 !== s ? s : n[t])) return !1
          }
          return !0
        },
        R = e => {
          var a = a => {
            var n = e.defaultClassName,
              t = z(z({}, e.defaultVariants), a);
            for (var s in t) {
              var r, i = null !== (r = t[s]) && void 0 !== r ? r : e.defaultVariants[s];
              if (null != i) {
                var o = i;
                "boolean" == typeof o && (o = !0 === o ? "true" : "false");
                var l = e.variantClassNames[s][o];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) T(c, t, e.defaultVariants) && (n += " " + d);
            return n
          };
          return a.variants = () => Object.keys(e.variantClassNames), a.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return P(e.variantClassNames, e => P(e, e => e.split(" ")[0]))
            }
          }, a
        },
        q = R({
          defaultClassName: "ut2qrf6",
          variantClassNames: {
            layout: {
              default: "ut2qrf7",
              simple: "ut2qrf8"
            }
          },
          defaultVariants: {
            layout: "default"
          },
          compoundVariants: []
        });
      const B = ({
          children: e
        }) => {
          const {
            simpleMenu: a
          } = (0, t.useContext)(H);
          return (0, d.jsx)("header", {
            className: (0, s.default)(q({
              layout: a ? "simple" : "default"
            }), "ut2qrfa"),
            children: e
          })
        },
        H = (0, t.createContext)({
          brand: void 0,
          brandTitle: void 0,
          isNavHidden: !1,
          containerRef: null,
          navContentRef: null,
          mainMenuOpened: !1,
          avatarMenuOpened: !1,
          searchBarOpened: !1,
          simpleMenu: !1,
          setForceBackground: () => {},
          setAvatarMenuOpened: () => {},
          setMainMenuOpened: () => {},
          setSearchBarOpened: () => {},
          locale: "en-US"
        }),
        G = (Y = ({
          children: e,
          brand: a,
          brandTitle: n,
          mode: i = "default",
          navColorTheme: o = "dark",
          forceSolidBackground: l = !1,
          forceVisibility: c,
          simpleMenu: u = !1,
          locale: h
        }) => {
          const [m, v] = (0, t.useState)(!1), [x, f] = (0, t.useState)(!0), [g, p] = (0, t.useState)(!1), [b, M] = (0, t.useState)(!1), [_, j] = (0, t.useState)(!1), N = (0, t.useRef)(null), C = (0, t.useRef)(null), [y, k] = (0, t.useState)(null), [w, S] = (0, t.useState)(l), O = (0, t.useMemo)(() => "visible" !== c && ("hidden" === c || m), [m, c]);
          (0, t.useEffect)(() => {
            let e = window.scrollY;
            const a = () => {
                const a = window.scrollY > 140,
                  n = window.scrollY > e;
                v(a && n), e = window.scrollY
              },
              n = () => {
                f(0 === window.scrollY)
              };
            return window.addEventListener("scroll", a), window.addEventListener("scroll", n), () => {
              window.removeEventListener("scroll", a), window.removeEventListener("scroll", n)
            }
          }, []), (0, t.useEffect)(() => {
            const e = "data-show-more-content";
            return O ? document.body.setAttribute(e, "") : document.body.removeAttribute(e), () => {
              document.body.removeAttribute(e)
            }
          }, [O]), (0, t.useEffect)(() => {
            const e = e => {
              v(e.detail.isHidden)
            };
            return window.addEventListener("header:hideNav", e), () => {
              window.removeEventListener("header:hideNav", e)
            }
          }, []);
          const L = !x || l || w ? "dark" : o;
          return (0, d.jsx)("div", {
            id: "global-nav-root",
            className: "siteHeaderContainer",
            children: (0, d.jsx)("div", {
              ref: k,
              children: y && (0, d.jsx)(r.NP, {
                colorScheme: L,
                defaultColorScheme: L,
                defaultPlatformScale: "desktop",
                container: y,
                locale: h,
                children: (0, d.jsx)(H.Provider, {
                  value: {
                    brand: a,
                    brandTitle: n,
                    isNavHidden: O,
                    containerRef: N,
                    navContentRef: C,
                    simpleMenu: u,
                    setForceBackground: S,
                    avatarMenuOpened: g,
                    setAvatarMenuOpened: p,
                    mainMenuOpened: b,
                    setMainMenuOpened: M,
                    searchBarOpened: _,
                    setSearchBarOpened: j,
                    locale: h
                  },
                  children: (0, d.jsxs)("div", {
                    className: (0, s.default)("ut2qrf1", "ut2qrf0"),
                    ref: N,
                    lang: h,
                    "data-scroll-top": x,
                    "data-color-mode": i,
                    "data-theme": L,
                    "data-force-background": l || w,
                    children: [(0, d.jsx)(A, {}), (0, d.jsx)("div", {
                      className: "ut2qrf2"
                    }), (0, d.jsxs)("div", {
                      ref: C,
                      className: "ut2qrf5",
                      "data-ishidden": O,
                      "data-testid": "globalnav__container",
                      children: [(0, d.jsx)("canvas", {
                        id: "navigation-gradient",
                        className: "ut2qrf4"
                      }), e]
                    })]
                  })
                })
              })
            })
          })
        }, e => {
          const [a, n] = (0, t.useState)();
          return (0, t.useEffect)(() => {
            (async () => {
              n(await (async e => await (async e => {
                return {
                  rsLocale: e,
                  locale: e,
                  messages: (a = L[e], {
                    ...a
                  })
                };
                var a
              })(e))(e.locale))
            })()
          }, []), (0, d.jsx)(i.A, {
            locale: a?.locale || "en-US",
            messages: {
              ...a?.messages
            },
            children: a && (0, d.jsx)(Y, {
              ...e
            })
          }, "intl-provider")
        });
      var Y, Q = R({
          defaultClassName: "_1pgq6b11",
          variantClassNames: {
            visibility: {
              visible: "_1pgq6b12",
              hidden: "_1pgq6b13"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        V = R({
          defaultClassName: "_1pgq6b1i",
          variantClassNames: {
            context: {
              mainMenu: "_1pgq6b1j",
              mobileMenu: "_1pgq6b1k",
              avatarMenu: "_1pgq6b1l",
              quickMenu: "_1pgq6b1m",
              subMenu: "_1pgq6b1n",
              nestedMenu: "_1pgq6b1o"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        U = "_1pgq6b1f",
        W = O({
          desktop: () => F,
          mobile: () => Z
        }),
        F = "dsroxs1",
        Z = "dsroxs0";
      const X = ({
          showOn: e,
          ...a
        }) => (0, d.jsx)(v.DX, {
          className: e ? W[e] : "",
          ...a
        }),
        K = {
          quickFade: {
            duration: .1
          },
          staggerFade: {
            ease: "easeOut",
            duration: .4
          },
          springOpen: {
            type: "spring",
            stiffness: 300,
            damping: 35
          },
          springClose: {
            type: "spring",
            stiffness: 400,
            damping: 40
          },
          hamburgerOpen: {
            type: "spring",
            duration: .6,
            bounce: 0
          },
          hamburgerClose: {
            type: "spring",
            duration: .4,
            bounce: 0
          }
        },
        J = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        };
      var $ = "vkitevd";
      const ee = (0, t.createContext)({
          openedNav: ""
        }),
        ae = ({
          children: e
        }) => {
          const [a, n] = (0, t.useState)("");
          return (0, d.jsx)(ee.Provider, {
            value: {
              openedNav: a
            },
            children: (0, d.jsx)(u.bL, {
              value: a,
              onValueChange: n,
              children: (0, d.jsx)(u.B8, {
                className: "vkitev1",
                children: e
              })
            })
          })
        },
        ne = (0, t.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        te = ({
          children: e
        }) => {
          const a = (0, c.A)(),
            [n, r] = (0, t.useState)(!1),
            [i, o] = (0, t.useState)(!1),
            [l, u] = (0, t.useState)(!1),
            {
              brand: h,
              setForceBackground: v,
              simpleMenu: x
            } = (0, t.useContext)(H);
          (0, t.useEffect)(() => {
            n && v(!0)
          }, [n]), (0, t.useEffect)(() => {
            const e = e => {
              const a = e?.target;
              n && a.innerWidth >= 1024 && M()
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [n]);
          const b = {
              show: {
                height: "100dvh",
                paddingBottom: n && h ? "var(--k8we7i0)" : "",
                transition: {
                  ...K.hamburgerOpen,
                  delay: .2,
                  staggerChildren: .15
                }
              },
              hidden: {
                height: 0,
                paddingBottom: 0,
                transition: K.hamburgerClose
              }
            },
            M = () => {
              r(!n), o(!1)
            };
          return x ? null : (0, d.jsx)(ne.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                r(!1)
              },
              setHasQuickMenu: u
            },
            children: (0, d.jsxs)(g.bL, {
              open: n,
              onOpenChange: r,
              children: [(0, d.jsx)(X, {
                showOn: "mobile",
                children: (0, d.jsx)(se, {
                  onClick: M,
                  isMenuOpen: n
                })
              }), (0, d.jsx)(f.AnimatePresence, {
                onExitComplete: () => v(!1),
                children: n && (0, d.jsx)(X, {
                  showOn: "mobile",
                  children: (0, d.jsxs)(f.motion.div, {
                    className: "vkiteve",
                    variants: b,
                    animate: "show",
                    initial: "hidden",
                    exit: "hidden",
                    children: [(0, d.jsx)(g.hJ, {
                      className: "vkiteva"
                    }), (0, d.jsx)(g.UC, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => r(!1),
                      children: (0, d.jsxs)(f.motion.div, {
                        className: (0, s.default)((0, m.m)("dark"), "vkitev4", "vkitev7"),
                        variants: b,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, d.jsxs)(p.s6, {
                          children: [(0, d.jsx)(g.hE, {
                            children: a.formatMessage(I.nav_mobilemenu_title)
                          }), (0, d.jsx)(g.VY, {
                            children: a.formatMessage(I.nav_mobilemenu_title)
                          })]
                        }), (0, d.jsx)("div", {
                          className: (0, s.default)(i ? "vkitev9" : "", "vkitev6"),
                          children: (0, d.jsx)(f.motion.div, {
                            className: (0, s.default)("vkitev0", l ? "vkitev8" : ""),
                            children: t.Children.map(e, e => (0, d.jsx)(f.motion.div, {
                              variants: J,
                              transition: K.staggerFade,
                              children: e
                            }))
                          })
                        })]
                      })
                    })]
                  })
                })
              })]
            })
          })
        },
        se = ({
          className: e,
          isMenuOpen: a,
          ...n
        }) => {
          const t = (0, c.A)();
          return (0, d.jsx)("div", {
            className: (0, s.default)("vkitevb", e),
            children: (0, d.jsxs)(g.l9, {
              title: t.formatMessage(a ? I.nav_mobilemenu_close : I.nav_mobilemenu_open),
              type: "button",
              className: "vkitevc",
              "data-testid": "hamburgerNav",
              ...n,
              children: [(0, d.jsx)("span", {
                className: $,
                "data-opened": a
              }), (0, d.jsx)("span", {
                className: $,
                "data-opened": a
              }), (0, d.jsx)("span", {
                className: $,
                "data-opened": a
              })]
            })
          })
        },
        re = (...e) => {
          const a = e.filter(Boolean);
          return a.length <= 1 ? a[0] || null : function(e) {
            for (const n of a) "function" == typeof n ? n(e) : n && (n.current = e)
          }
        },
        ie = ({
          children: e,
          className: a,
          ...n
        }) => {
          const {
            containerRef: i,
            locale: o
          } = (0, t.useContext)(H);
          return (0, d.jsx)(r.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            locale: o,
            children: (0, d.jsx)(j.b, {
              className: (0, s.default)("g1xx1x0 ut2qrf0", a),
              container: i?.current,
              ...n,
              children: e
            })
          })
        };
      var oe = "m27a3y7",
        le = S((e, a) => {
          a.exports = "PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ0IiBoZWlnaHQ9IjQ0IiByeD0iMjIiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMTUiLz4KPHBhdGggZD0iTTI5LjMzMzQgMzAuMjVWMjguNDE2N0MyOS4zMzM0IDI3LjQ0NDIgMjguOTQ3MSAyNi41MTE2IDI4LjI1OTUgMjUuODIzOUMyNy41NzE4IDI1LjEzNjMgMjYuNjM5MiAyNC43NSAyNS42NjY3IDI0Ljc1SDE4LjMzMzRDMTcuMzYxIDI0Ljc1IDE2LjQyODMgMjUuMTM2MyAxNS43NDA3IDI1LjgyMzlDMTUuMDUzMSAyNi41MTE2IDE0LjY2NjcgMjcuNDQ0MiAxNC42NjY3IDI4LjQxNjdWMzAuMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMS45OTk5IDIxLjA4MzNDMjQuMDI1IDIxLjA4MzMgMjUuNjY2NiAxOS40NDE3IDI1LjY2NjYgMTcuNDE2N0MyNS42NjY2IDE1LjM5MTYgMjQuMDI1IDEzLjc1IDIxLjk5OTkgMTMuNzVDMTkuOTc0OSAxMy43NSAxOC4zMzMzIDE1LjM5MTYgMTguMzMzMyAxNy40MTY3QzE4LjMzMzMgMTkuNDQxNyAxOS45NzQ5IDIxLjA4MzMgMjEuOTk5OSAyMS4wODMzWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
        });
      const ce = (0, t.createContext)({
          inAvatarMenu: !1,
          avatarMenuOpenItems: ["open"],
          closeAvatarMenu: () => {}
        }),
        de = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        ue = {
          open: {
            height: "auto",
            width: "100%",
            opacity: 1,
            marginBottom: "revert-layer",
            display: "block"
          },
          closed: {
            height: 0,
            width: "100%",
            opacity: 0,
            marginBottom: "auto",
            transitionEnd: {
              display: "none"
            }
          }
        },
        he = {
          open: {
            transform: "translateY(0%)",
            display: "block"
          },
          closed: {
            transform: "translateY(100%)",
            transitionEnd: {
              display: "none"
            }
          }
        },
        me = ({
          children: e,
          className: a
        }) => (0, d.jsx)("div", {
          className: (0, s.default)("m27a3y1", a),
          children: e
        }),
        ve = ({
          avatarIconUrl: e,
          nickname: a,
          isLoggedIn: n,
          children: s,
          onOpenChange: r
        }) => {
          const i = (0, c.A)(),
            o = le(),
            [l, u] = (0, t.useState)(["open"]),
            {
              isNavHidden: h,
              setAvatarMenuOpened: v,
              mainMenuOpened: x,
              setMainMenuOpened: j
            } = (0, t.useContext)(H),
            [N, C] = (0, t.useState)(!1),
            [y, k] = (0, t.useState)(!1),
            [w, S] = (0, t.useState)(h),
            O = () => {
              C(!1), k(!1)
            };
          w !== h && (S(h), h && O());
          const L = e => {
            u(["open", ...e.filter(e => "open" !== e)])
          };
          return (0, t.useEffect)(() => {
            const e = N || y;
            e && x && j(!1), v(e)
          }, [N, y, x, j, v]), (0, d.jsxs)(ce.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: l,
              closeAvatarMenu: O
            },
            children: [(0, d.jsx)(M.bL, {
              open: N,
              onOpenChange: e => {
                r?.(e), C(e)
              },
              modal: !1,
              children: (0, d.jsx)(X, {
                showOn: "desktop",
                children: (0, d.jsxs)(me, {
                  children: [(0, d.jsx)(M.l9, {
                    asChild: !0,
                    children: (0, d.jsx)(b.IconButton, {
                      size: "SM",
                      label: i.formatMessage(N ? I.avatar_menu_close : I.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: oe,
                      "aria-label": i.formatMessage(N ? I.avatar_menu_close : I.avatar_menu_open),
                      "data-testid": "avatarMenuButtonDesktop",
                      "data-logged-in": n,
                      children: e && (0, d.jsx)("img", {
                        className: "m27a3y8",
                        src: e || o,
                        alt: a
                      })
                    })
                  }), (0, d.jsx)(f.AnimatePresence, {
                    children: N && (0, d.jsx)(M.UC, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      onOpenAutoFocus: e => e.preventDefault(),
                      className: (0, m.m)("dark"),
                      children: (0, d.jsx)(f.motion.div, {
                        variants: de,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, d.jsx)(_.bL, {
                          type: "multiple",
                          value: l,
                          onValueChange: L,
                          children: (0, d.jsx)(Qe, {
                            className: "m27a3y2 _1r3j5az0",
                            children: s
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, d.jsx)(g.bL, {
              open: y,
              onOpenChange: e => {
                r?.(e), k(e)
              },
              children: (0, d.jsx)(X, {
                showOn: "mobile",
                children: (0, d.jsxs)(me, {
                  children: [(0, d.jsx)(g.l9, {
                    className: oe,
                    "aria-label": i.formatMessage(y ? I.avatar_menu_close : I.avatar_menu_open),
                    "data-testid": "avatarMenuButtonMobile",
                    asChild: !0,
                    "data-logged-in": n,
                    children: (0, d.jsx)(b.IconButton, {
                      size: "SM",
                      label: i.formatMessage(N ? I.avatar_menu_close : I.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: oe,
                      "aria-label": i.formatMessage(N ? I.avatar_menu_close : I.avatar_menu_open),
                      children: e && (0, d.jsx)("img", {
                        className: "m27a3y8",
                        src: e || o
                      })
                    })
                  }), (0, d.jsx)(f.AnimatePresence, {
                    children: y && (0, d.jsx)(ie, {
                      asChild: !0,
                      children: (0, d.jsxs)(g.UC, {
                        forceMount: !0,
                        className: (0, m.m)("dark"),
                        children: [(0, d.jsxs)(p.s6, {
                          children: [(0, d.jsx)(g.hE, {
                            children: i.formatMessage(I.nav_avatarmenu_title)
                          }), (0, d.jsx)(g.VY, {
                            children: i.formatMessage(I.nav_avatarmenu_title)
                          })]
                        }), (0, d.jsxs)(f.motion.div, {
                          variants: he,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: "m27a3y3",
                          children: [(0, d.jsx)(g.bm, {
                            className: "m27a3y5",
                            "aria-label": i.formatMessage(I.avatar_menu_close),
                            children: (0, d.jsx)("div", {
                              className: "m27a3y6"
                            })
                          }), (0, d.jsx)(_.bL, {
                            type: "multiple",
                            value: l,
                            onValueChange: L,
                            children: (0, d.jsx)(Qe, {
                              className: "m27a3y4 _1r3j5az0",
                              children: s
                            })
                          })]
                        })]
                      })
                    })
                  })]
                })
              })
            })]
          })
        },
        xe = (0, t.createContext)({
          avatarMenuItemId: ""
        }),
        fe = ({
          children: e,
          value: a
        }) => {
          const n = (0, t.useId)();
          return (0, d.jsx)(xe.Provider, {
            value: {
              avatarMenuItemId: a || n
            },
            children: (0, d.jsx)(_.q7, {
              value: a || n,
              className: "m27a3y9",
              children: e
            })
          })
        },
        ge = ({
          children: e,
          ...a
        }) => (0, d.jsx)(_.Y9, {
          asChild: !0,
          children: (0, d.jsx)("li", {
            className: "m27a3y0",
            children: (0, d.jsx)(_.l9, {
              className: "m27a3ya",
              ...a,
              children: e
            })
          })
        }),
        pe = ({
          children: e,
          ...a
        }) => (0, d.jsx)(_.Y9, {
          style: {
            margin: 0
          },
          children: (0, d.jsxs)(_.l9, {
            className: "m27a3yb",
            "data-testid": "header-language-selector-button",
            ...a,
            children: [e, (0, d.jsx)(x.ChevronDown, {
              label: "",
              size: "SM",
              className: "m27a3yc"
            })]
          })
        }),
        be = ({
          children: e,
          ...a
        }) => {
          const {
            avatarMenuOpenItems: n
          } = (0, t.useContext)(ce), {
            avatarMenuItemId: s
          } = (0, t.useContext)(xe), r = n.indexOf(s) >= 0;
          return (0, d.jsx)(_.UC, {
            forceMount: !0,
            asChild: !0,
            ...a,
            children: (0, d.jsx)(f.motion.div, {
              variants: ue,
              initial: "closed",
              animate: r ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: e
            })
          })
        },
        Me = ({
          children: e,
          ...a
        }) => (0, d.jsx)("div", {
          className: "m27a3yd",
          ...a,
          children: e
        }),
        _e = (0, t.createContext)({
          inQuickMenu: !1
        }),
        je = ({
          children: e
        }) => {
          const {
            inMobileMenu: a,
            setHasQuickMenu: n
          } = (0, t.useContext)(ne), r = {
            hidden: {
              opacity: 0,
              y: "100%",
              transition: K.hamburgerClose
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                ...K.hamburgerOpen,
                staggerChildren: .15,
                delay: K.hamburgerOpen.duration && .8 * K.hamburgerOpen.duration,
                delayChildren: .15
              }
            }
          }, i = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: K.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: K.staggerFade
            }
          }, o = (0, s.default)((0, m.m)("dark"), "_1xtz6n0");
          return (0, t.useEffect)(() => (n?.(!0), () => {
            n?.(!1)
          }), []), a ? (0, d.jsx)(_e.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, d.jsx)(u.bL, {
              asChild: !0,
              children: (0, d.jsx)(f.motion.div, {
                variants: r,
                className: o,
                children: t.Children.map(e, e => (0, d.jsx)(f.motion.li, {
                  variants: i,
                  className: "_1xtz6n1",
                  children: e
                }))
              })
            })
          }) : (0, d.jsx)(_e.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, d.jsx)(u.bL, {
              asChild: !0,
              children: (0, d.jsx)("div", {
                className: o,
                children: e
              })
            })
          })
        },
        Ne = e => {
          e.preventDefault()
        },
        Ce = e => {
          e.nativeEvent.repeat && e.preventDefault()
        },
        ye = (0, t.createContext)({
          inMenu: !1,
          openedNav: "",
          setOpenedNav: e => {}
        }),
        ke = (0, t.createContext)({
          isHidden: !1
        }),
        we = ({
          children: e
        }) => {
          const a = (0, c.A)(),
            [n, s] = (0, t.useState)(""),
            [r, i] = (0, t.useState)(e),
            [o, l] = (0, t.useState)([]),
            h = (0, t.useRef)(null),
            m = (0, t.useRef)(null),
            {
              isNavHidden: v,
              mainMenuOpened: x,
              avatarMenuOpened: f,
              setMainMenuOpened: g
            } = (0, t.useContext)(H),
            {
              inAvatarMenu: p
            } = (0, t.useContext)(ce),
            b = (0, t.useCallback)(() => {
              const a = m.current;
              if (!a) return;
              const {
                children: n
              } = a;
              let s = 0;
              const r = Array.from(n).map((e, a) => {
                  const n = e.getBoundingClientRect().top;
                  return 0 === a && (s = n), n
                }),
                o = r.filter(e => e !== s).length,
                c = r.findIndex(e => e > s);
              let d = c;
              if (c > 0 && (d = c - 2), o) {
                const a = [],
                  n = [];
                t.Children.forEach(e, (e, t) => {
                  t < d ? a.push(e) : n.push(e)
                }), a && i(a), n && l(n)
              } else i(e), l([])
            }, [e, m?.current]);
          (0, t.useEffect)(() => {
            const e = new ResizeObserver(b);
            return m?.current && e.observe(m.current), () => {
              m?.current && e.unobserve(m.current)
            }
          }, [e, m?.current]), (0, t.useEffect)(() => {
            s("")
          }, [v]), (0, t.useEffect)(() => {
            const e = () => s("");
            return window.addEventListener("scroll", e), () => {
              window.removeEventListener("scroll", e)
            }
          }, []), (0, t.useEffect)(() => {
            x || "" === n || s("")
          }, [x]), (0, t.useEffect)(() => {
            g("" !== n)
          }, [n, f, x, p]);
          const M = Q({
              visibility: "visible"
            }),
            _ = Q({
              visibility: "hidden"
            });
          return (0, d.jsx)(ye.Provider, {
            value: {
              inMenu: !0,
              openedNav: n,
              setOpenedNav: s
            },
            children: (0, d.jsx)(X, {
              showOn: "desktop",
              children: (0, d.jsxs)(u.bL, {
                className: "_1pgq6b10",
                value: n,
                onValueChange: s,
                children: [(0, d.jsxs)(Se, {
                  ref: h,
                  className: M,
                  children: [r, o?.length > 0 && (0, d.jsxs)(Le, {
                    children: [(0, d.jsx)(Ie, {
                      "data-testid": "navMore",
                      children: a.formatMessage(I.nav_more_dropdown)
                    }), (0, d.jsx)(Ge, {
                      children: (0, d.jsx)(Qe, {
                        children: (0, d.jsx)(Se, {
                          children: o
                        })
                      })
                    })]
                  })]
                }), (0, d.jsx)("div", {
                  className: "_1pgq6b14",
                  children: (0, d.jsx)(Se, {
                    ref: m,
                    className: _,
                    "aria-hidden": "true",
                    children: (0, d.jsx)(ke.Provider, {
                      value: {
                        isHidden: !0
                      },
                      children: e
                    })
                  })
                })]
              })
            })
          })
        },
        Se = (0, t.forwardRef)(function({
          children: e,
          className: a,
          ...n
        }, t) {
          return (0, d.jsx)(u.B8, {
            ref: t,
            className: (0, s.default)("_1pgq6b1e", a),
            ...n,
            children: e
          })
        }),
        Oe = (0, t.createContext)({
          value: ""
        }),
        Le = (0, t.forwardRef)(function({
          testId: e,
          children: a,
          ...n
        }, r) {
          const {
            depth: i
          } = (0, t.useContext)(Ye), {
            inMobileMenu: o
          } = (0, t.useContext)(ne), l = (0, t.useRef)(null), c = `rsm-${(0,h.B)()}`, m = "_1pgq6b15", v = "_1pgq6b16";
          return (0, d.jsx)(Oe.Provider, {
            value: {
              value: c,
              ref: l
            },
            children: (0, d.jsx)(u.q7, {
              value: c,
              ref: re(r, l),
              className: (0, s.default)({
                [m]: !0,
                [v]: 1 === i && !o
              }),
              "data-testid": e,
              "data-menu-item": i,
              ...n,
              children: a
            })
          })
        }),
        Ie = ({
          children: e,
          ...a
        }) => {
          const {
            inMenu: n
          } = (0, t.useContext)(ye), {
            inAvatarMenu: s
          } = (0, t.useContext)(ce), {
            inQuickMenu: r
          } = (0, t.useContext)(_e), {
            inMobileMenu: i
          } = (0, t.useContext)(ne), {
            inSubMenu: o,
            depth: l
          } = (0, t.useContext)(Ye), c = {
            ...a,
            "data-menu-trigger": !0
          };
          return l > 1 ? (0, d.jsx)(Re, {
            ...c,
            children: e
          }) : s ? (0, d.jsx)(ze, {
            ...c,
            children: e
          }) : o ? (0, d.jsx)(Te, {
            ...c,
            children: e
          }) : r ? (0, d.jsx)(Pe, {
            ...c,
            children: e
          }) : i ? (0, d.jsx)(De, {
            ...c,
            children: e
          }) : n ? (0, d.jsx)(Ee, {
            ...c,
            children: e
          }) : void 0
        },
        Ae = e => {
          const a = (0, c.A)();
          return (0, d.jsx)(x.ChevronDown, {
            ...e,
            label: ` - ${a.formatMessage(I.nav_rockstargames_submenu_indicator)}`,
            className: "_1pgq6b1g"
          })
        },
        Ee = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...r
          } = e;
          return (0, d.jsxs)(u.l9, {
            onPointerMove: Ne,
            onPointerLeave: Ne,
            onKeyDown: Ce,
            onClick: t,
            className: (0, s.default)(U, V({
              context: "mainMenu"
            }), n),
            ...r,
            children: [a, (0, d.jsx)(Ae, {})]
          })
        },
        De = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...r
          } = e;
          return (0, d.jsxs)(u.l9, {
            onPointerMove: Ne,
            onPointerLeave: Ne,
            onClick: t,
            className: (0, s.default)(U, V({
              context: "mobileMenu"
            }), n),
            ...r,
            children: [a, (0, d.jsx)(Ae, {
              size: "LG"
            })]
          })
        },
        ze = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...r
          } = e;
          return (0, d.jsxs)(u.l9, {
            onPointerMove: Ne,
            onPointerLeave: Ne,
            onClick: t,
            className: (0, s.default)(U, V({
              context: "avatarMenu"
            }), n),
            ...r,
            children: [a, (0, d.jsx)(Ae, {})]
          })
        },
        Pe = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...r
          } = e;
          return (0, d.jsxs)(u.l9, {
            onPointerMove: Ne,
            onPointerLeave: Ne,
            onClick: t,
            className: (0, s.default)(U, V({
              context: "quickMenu"
            }), n),
            ...r,
            children: [a, (0, d.jsx)(Ae, {})]
          })
        },
        Te = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...r
          } = e;
          return (0, d.jsxs)(u.l9, {
            onPointerMove: Ne,
            onPointerLeave: Ne,
            onClick: t,
            className: (0, s.default)(U, V({
              context: "subMenu"
            }), n),
            ...r,
            children: [a, (0, d.jsx)(Ae, {})]
          })
        },
        Re = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...r
          } = e;
          return (0, d.jsxs)(u.l9, {
            onPointerMove: Ne,
            onPointerLeave: Ne,
            onClick: t,
            className: (0, s.default)(U, V({
              context: "nestedMenu"
            }), n),
            ...r,
            children: [a, (0, d.jsx)(Ae, {})]
          })
        },
        qe = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        Be = {
          open: {
            height: "auto",
            opacity: 1,
            marginBottom: "revert-layer"
          },
          closed: {
            height: 0,
            opacity: 0,
            marginBottom: "auto"
          }
        },
        He = {
          enter: {
            opacity: 1,
            zIndex: 101
          },
          exit: {
            opacity: 1,
            zIndex: 100
          }
        },
        Ge = (0, t.forwardRef)(function({
          children: e,
          animationOverride: a,
          ...n
        }, r) {
          const {
            navContentRef: i
          } = (0, t.useContext)(H), {
            inSubMenu: o,
            openedNav: l
          } = (0, t.useContext)(Ye), {
            openedNav: c
          } = (0, t.useContext)(ye), {
            openedNav: h
          } = (0, t.useContext)(ee), {
            value: v,
            ref: x
          } = (0, t.useContext)(Oe), {
            inMobileMenu: g
          } = (0, t.useContext)(ne), {
            isHidden: p
          } = (0, t.useContext)(ke), {
            inAvatarMenu: b
          } = (0, t.useContext)(ce), M = (0, t.useRef)(null), _ = [l, c, h].includes(v);
          if ((0, t.useEffect)(() => {
              var e;
              _ && M.current && (e = M.current, document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => e.disabled || e.hidden ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
              }).nextNode())?.focus()
            }, [_]), p) return null;
          const j = "_1pgq6b18 _1r3j5az0 _1pgq6b17",
            N = "_1pgq6b19",
            C = "_1pgq6b1a",
            y = "_1pgq6b1b";
          return (0, d.jsx)(f.AnimatePresence, {
            children: _ && (0, d.jsx)(u.UC, {
              ref: re(r, M),
              className: (0, s.default)((0, m.m)("dark"), {
                [j]: !g,
                [N]: g,
                [C]: o && !g,
                [y]: b
              }),
              onPointerEnter: Ne,
              onPointerLeave: Ne,
              onPointerDown: Ne,
              onPointerDownOutside: e => {
                o && e.preventDefault()
              },
              style: {
                top: i?.current?.getBoundingClientRect().height,
                left: x?.current?.getBoundingClientRect().left
              },
              ...n,
              asChild: !0,
              forceMount: !0,
              children: (0, d.jsx)(f.motion.div, {
                variants: a || o || g ? Be : qe,
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: K.springOpen,
                className: "_1pgq6b1c",
                children: e
              })
            })
          })
        }),
        Ye = (0, t.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        Qe = (0, t.forwardRef)(function({
          children: e,
          ...a
        }, n) {
          const {
            depth: s
          } = (0, t.useContext)(Ye), {
            openedNav: r
          } = (0, t.useContext)(ee), {
            isNavHidden: i
          } = (0, t.useContext)(H), [o, l] = (0, t.useState)("");
          (0, t.useEffect)(() => {
            l("")
          }, [r, i]);
          const c = s ? s + 1 : 1;
          return (0, d.jsx)(Ye.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: o,
              depth: c
            },
            children: (0, d.jsx)(u.bL, {
              ref: n,
              defaultValue: "",
              value: o,
              onValueChange: e => {
                l(e === o ? "" : e)
              },
              orientation: "vertical",
              className: "_1pgq6b1d",
              "data-depth": c,
              ...a,
              asChild: !0,
              children: (0, d.jsx)(f.motion.div, {
                variants: He,
                animate: "enter",
                initial: "exit",
                exit: "exit",
                transition: K.quickFade,
                children: e
              })
            })
          })
        }),
        Ve = (0, t.forwardRef)(function({
          className: e,
          ...a
        }, n) {
          return (0, d.jsx)("img", {
            ref: n,
            className: (0, s.default)("_1pgq6b1p", e),
            ...a
          })
        }),
        Ue = ({
          hasNotification: e,
          onClick: a,
          ...n
        }) => {
          const {
            inMenu: s,
            setOpenedNav: r
          } = (0, t.useContext)(ye), {
            inAvatarMenu: i
          } = (0, t.useContext)(ce), {
            inQuickMenu: o
          } = (0, t.useContext)(_e), {
            inMobileMenu: l
          } = (0, t.useContext)(ne), {
            inSubMenu: c,
            depth: u
          } = (0, t.useContext)(Ye), h = {
            ...n,
            onSelect: e => {
              const n = e.currentTarget.getAttribute("href") ?? "";
              if (n === window.location.pathname + window.location.search + window.location.hash || new URL(n, window.location.origin).href === window.location.href) {
                e.preventDefault(), r?.("");
                const a = e.currentTarget.closest('[data-menu-item="0"]')?.querySelector('[data-menu-trigger="true"]');
                document.activeElement?.blur(), setTimeout(() => {
                  a?.focus()
                }, 50)
              }
              a?.(e)
            }
          };
          return u > 1 ? (0, d.jsx)(Je, {
            ...h
          }) : i ? (0, d.jsx)(Ke, {
            ...h
          }) : c ? (0, d.jsx)(Xe, {
            ...h,
            hasNotification: e
          }) : o ? (0, d.jsx)(Ze, {
            ...h
          }) : l ? (0, d.jsx)(Fe, {
            ...h
          }) : s ? (0, d.jsx)(We, {
            ...h
          }) : void 0
        },
        We = (0, t.forwardRef)(function({
          children: e,
          className: a,
          onSelect: n,
          external: r,
          asChild: i,
          ...o
        }, l) {
          const h = (0, c.A)(),
            {
              closeAvatarMenu: m
            } = (0, t.useContext)(ce),
            {
              closeMobileMenu: f
            } = (0, t.useContext)(ne),
            g = i ? v.DX : "a",
            p = (0, s.default)(V({
              context: "mainMenu"
            }), a);
          return (0, d.jsx)(u.N_, {
            onSelect: e => {
              m?.(), f?.(), n?.(e)
            },
            className: p,
            asChild: !0,
            ...o,
            children: (0, d.jsxs)(g, {
              ref: l,
              children: [(0, d.jsx)(v.xV, {
                children: e
              }), r && (0, d.jsx)(x.ExternalLink, {
                label: h.formatMessage(I.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Fe = (0, t.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: i,
          ...o
        }, l) {
          const {
            closeAvatarMenu: c
          } = (0, t.useContext)(ce), {
            closeMobileMenu: h
          } = (0, t.useContext)(ne), m = (0, s.default)(V({
            context: "mobileMenu"
          }), n), f = a ? v.DX : "a";
          return (0, d.jsx)(u.N_, {
            asChild: !0,
            onSelect: e => {
              c?.(), h?.(), r?.(e)
            },
            ...o,
            children: (0, d.jsxs)(f, {
              ref: l,
              className: m,
              children: [(0, d.jsx)(v.xV, {
                children: e
              }), i && (0, d.jsx)(x.ExternalLink, {
                size: "LG",
                label: "",
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Ze = (0, t.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: i,
          ...o
        }, l) {
          const h = (0, c.A)(),
            {
              closeAvatarMenu: m
            } = (0, t.useContext)(ce),
            {
              closeMobileMenu: f
            } = (0, t.useContext)(ne),
            g = (0, s.default)(V({
              context: "quickMenu"
            }), n),
            p = a ? v.DX : "a";
          return (0, d.jsx)(u.N_, {
            asChild: !0,
            onSelect: e => {
              m?.(), f?.(), r?.(e)
            },
            ...o,
            children: (0, d.jsxs)(p, {
              ref: l,
              className: g,
              children: [(0, d.jsx)(v.xV, {
                children: e
              }), i && (0, d.jsx)(x.ExternalLink, {
                label: h.formatMessage(I.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Xe = (0, t.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: i,
          hasNotification: o,
          ...l
        }, h) {
          const m = (0, c.A)(),
            {
              closeAvatarMenu: f
            } = (0, t.useContext)(ce),
            {
              closeMobileMenu: g
            } = (0, t.useContext)(ne),
            p = (0, s.default)(V({
              context: "subMenu"
            }), n, o ? ["_1pgq6b1q"] : null),
            b = a ? v.DX : "a";
          return (0, d.jsx)(u.N_, {
            asChild: !0,
            onSelect: e => {
              f?.(), g?.(), r?.(e)
            },
            ...l,
            children: (0, d.jsxs)(b, {
              ref: h,
              className: p,
              children: [(0, d.jsx)(v.xV, {
                children: e
              }), i && (0, d.jsx)(x.ExternalLink, {
                label: m.formatMessage(I.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Ke = (0, t.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: i,
          ...o
        }, l) {
          const h = (0, c.A)(),
            {
              closeAvatarMenu: m
            } = (0, t.useContext)(ce),
            {
              closeMobileMenu: f
            } = (0, t.useContext)(ne),
            g = (0, s.default)(V({
              context: "avatarMenu"
            }), n),
            p = a ? v.DX : "a";
          return (0, d.jsx)(u.N_, {
            asChild: !0,
            onSelect: e => {
              m?.(), f?.(), r?.(e)
            },
            ...o,
            children: (0, d.jsxs)(p, {
              ref: l,
              className: g,
              children: [(0, d.jsx)(v.xV, {
                children: e
              }), i && (0, d.jsx)(x.ExternalLink, {
                label: h.formatMessage(I.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Je = (0, t.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: i,
          ...o
        }, l) {
          const h = (0, c.A)(),
            {
              closeAvatarMenu: m
            } = (0, t.useContext)(ce),
            {
              closeMobileMenu: f
            } = (0, t.useContext)(ne),
            g = (0, s.default)(V({
              context: "nestedMenu"
            }), n),
            p = a ? v.DX : "a";
          return (0, d.jsx)(u.N_, {
            asChild: !0,
            onSelect: e => {
              m?.(), f?.(), r?.(e)
            },
            ...o,
            children: (0, d.jsxs)(p, {
              ref: l,
              className: g,
              children: [(0, d.jsx)(v.xV, {
                children: e
              }), i && (0, d.jsx)(x.ExternalLink, {
                label: h.formatMessage(I.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        $e = ({
          children: e
        }) => (0, d.jsx)("div", {
          className: "ncorez0",
          children: e
        });
      const ea = (0, t.forwardRef)(function({
        children: e,
        dataTestId: a,
        onPress: n,
        ...s
      }, r) {
        const {
          inMobileMenu: i,
          closeMobileMenu: o
        } = (0, t.useContext)(ne), l = (0, N.v6)({
          "data-testid": a,
          onPress: e => {
            n?.(e), o()
          },
          appearance: "secondary",
          size: (0, C.Ub)("(min-width: 1024px)") ? "SM" : "MD",
          className: "ey3skr0"
        }, s);
        return (0, d.jsx)("div", {
          className: i ? "ey3skr1" : "ey3skr2",
          children: (0, d.jsx)(b.Button, {
            ref: r,
            fullWidth: i,
            ...l,
            children: e
          })
        })
      });
      var aa = "_11eee6m7",
        na = "_11eee6ml";
      const ta = {
          open: {
            height: "auto",
            overflow: "hidden",
            transition: {
              ...K.springClose,
              delay: .15
            }
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: K.springClose
          }
        },
        sa = ({
          children: e,
          isSearchPage: a
        }) => {
          const {
            formatMessage: n
          } = (0, c.A)(), {
            isNavHidden: s,
            searchBarOpened: r,
            setSearchBarOpened: i,
            avatarMenuOpened: o
          } = (0, t.useContext)(H);
          (0, t.useEffect)(() => {
            i(a || !1)
          }, []), (0, t.useEffect)(() => {
            i(!1)
          }, [s]), (0, t.useEffect)(() => {
            o && i(!1)
          }, [o]);
          const l = !s && (a || r);
          return (0, d.jsx)(X, {
            showOn: "desktop",
            children: (0, d.jsx)("div", {
              className: "_11eee6m0",
              children: (0, d.jsxs)(M.bL, {
                open: l,
                onOpenChange: i,
                children: [(0, d.jsx)(M.l9, {
                  asChild: !0,
                  children: (0, d.jsx)(b.IconButton, {
                    icon: "Search",
                    appearance: "ghost",
                    size: "SM",
                    label: n(l ? I.search_close_button : I.search_open_button),
                    className: "_11eee6mb",
                    "data-testid": "searchToggle"
                  })
                }), (0, d.jsx)(f.AnimatePresence, {
                  children: l && (0, d.jsx)(y.n, {
                    loop: !a,
                    children: (0, d.jsx)(M.UC, {
                      forceMount: !0,
                      sideOffset: 19,
                      children: (0, d.jsx)(f.motion.div, {
                        initial: "close",
                        animate: "open",
                        exit: "close",
                        variants: ta,
                        "data-testid": "searchBar",
                        className: (0, m.m)("dark"),
                        children: e
                      })
                    })
                  })
                })]
              })
            })
          })
        },
        ra = (0, t.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          searchTarget: "",
          onChange: () => {}
        }),
        ia = (0, t.forwardRef)(function({
          children: e
        }, a) {
          return (0, d.jsx)("div", {
            role: "search",
            ref: a,
            className: "_11eee6m1",
            children: e
          })
        }),
        oa = (0, t.forwardRef)(function({
          children: e,
          queryMin: a = 0,
          queryMax: n = 100,
          onSearch: r,
          query: i,
          onQueryChange: o,
          target: l,
          onTargetChange: u,
          isSearchPage: h = !1
        }, m) {
          const {
            formatMessage: v
          } = (0, c.A)(), {
            inMobileMenu: g,
            closeMobileMenu: p
          } = (0, t.useContext)(ne), [_, j] = (0, k.i)({
            prop: i,
            onChange: o,
            defaultProp: ""
          }), [N, C] = (0, k.i)({
            prop: l,
            onChange: u,
            defaultProp: ""
          }), [y, w] = (0, t.useState)(!1), [S, O] = (0, t.useState)(!1), {
            setForceBackground: L
          } = (0, t.useContext)(H);
          (0, t.useEffect)(() => (L(!0), () => {
            L(!1)
          }), []);
          const A = (e, a) => {
              r(e, a, p), O(!0)
            },
            E = {
              inSearchMenu: !0,
              searchTarget: N,
              setSearchTarget: e => {
                C(e), _ && _.length >= a && A(_, e)
              },
              onChange: o
            },
            D = (0, t.useMemo)(() => g ? (0, d.jsx)(f.AnimatePresence, {
              children: y && (0, d.jsx)(f.motion.div, {
                initial: "close",
                animate: "open",
                exit: "close",
                variants: ta,
                transition: K.springOpen,
                "data-testid": "searchBar",
                children: (0, d.jsx)("div", {
                  className: "_11eee6m9 _11eee6m8",
                  children: e
                })
              })
            }) : (0, d.jsxs)("div", {
              className: "_11eee6m8",
              children: [e, !g && !h && (0, d.jsx)("div", {
                className: "_11eee6md",
                children: (0, d.jsx)(M.bm, {
                  className: "_11eee6me",
                  children: (0, d.jsx)(x.X, {
                    size: "MD",
                    className: "_11eee6mf",
                    label: v(I.search_close_button)
                  })
                })
              })]
            }), [g, y, h, v, e]);
          return (0, d.jsxs)(ra.Provider, {
            value: E,
            children: [(0, d.jsxs)("div", {
              className: (0, s.default)("_11eee6m6", {
                [aa]: g
              }),
              "data-testid": "searchBar",
              children: [(0, d.jsx)(b.IconButton, {
                onClick: () => {
                  A(_, N)
                },
                appearance: "ghost",
                icon: "Search",
                size: "LG",
                label: v(S ? I.search_disabled_aria_label : I.search_action)
              }), (0, d.jsx)("div", {
                className: "_11eee6mg",
                children: (0, d.jsx)("input", {
                  className: "_11eee6mh",
                  type: "search",
                  value: _,
                  onChange: e => (e => {
                    j(e), O(!1)
                  })(e.target.value),
                  onKeyUp: e => {
                    "Enter" === e.key && _ && N && A(_, N)
                  },
                  onFocus: () => w(!0),
                  placeholder: v(I.search_placeholder),
                  ref: m,
                  enterKeyHint: "search",
                  maxLength: n,
                  min: a,
                  max: n
                })
              }), g && y && (0, d.jsx)(b.IconButton, {
                onClick: () => w(!1),
                appearance: "ghost",
                icon: "X",
                size: "MD",
                label: v(I.search_close_button)
              })]
            }), D]
          })
        }),
        la = ({
          children: e
        }) => {
          const {
            formatMessage: a
          } = (0, c.A)();
          return (0, d.jsx)("div", {
            className: "_11eee6mi",
            role: "radiogroup",
            "aria-label": a(I.search_categories),
            children: e
          })
        },
        ca = (0, t.forwardRef)(function({
          children: e,
          value: a,
          title: n,
          active: r,
          hasChevron: i,
          ...o
        }, l) {
          const {
            setSearchTarget: c,
            searchTarget: u
          } = (0, t.useContext)(ra), {
            inSearchTargetDropdown: h,
            setRootSearchTarget: m,
            rootSearchTarget: v
          } = (0, t.useContext)(da), x = t => {
            c?.(t), h && "string" == typeof e && m({
              key: a,
              title: n
            })
          }, f = r || Boolean(u) && (u === a || u === v.key);
          return h ? (0, d.jsx)("button", {
            ref: l,
            type: "button",
            className: (0, s.default)("_11eee6mq", {
              [na]: f
            }),
            onClick: () => x(a),
            value: a,
            ...o,
            role: "radio",
            "aria-checked": f,
            children: e
          }) : (0, d.jsx)(b.Tag.Root, {
            className: "_11eee6mj",
            color: f ? "monochrome" : "grey",
            size: "LG",
            background: "static",
            onClick: () => x(a),
            hasBorder: !1,
            ...o,
            asChild: !0,
            children: (0, d.jsxs)("button", {
              type: "button",
              ref: l,
              value: a,
              role: "radio",
              "aria-checked": f,
              children: [(0, d.jsx)(b.Tag.Label, {
                asChild: !0,
                children: (0, d.jsx)(b.Body, {
                  size: "MD",
                  appearance: "bold",
                  children: e
                })
              }), i && (0, d.jsx)(b.Tag.Icon, {
                className: "_11eee6mo",
                label: "",
                icon: "ChevronDown"
              })]
            })
          })
        }),
        da = (0, t.createContext)({
          inSearchTargetDropdown: !1,
          rootSearchTarget: {
            key: "",
            title: ""
          },
          setRootSearchTarget: () => {}
        }),
        ua = ({
          title: e,
          children: a
        }) => {
          const [n, s] = (0, t.useState)(!1), [r, i] = (0, t.useState)({
            key: "",
            title: ""
          }), {
            searchTarget: o
          } = (0, t.useContext)(ra), {
            avatarMenuOpened: l
          } = (0, t.useContext)(H);
          o !== r.key && "" !== r.key && i({
            key: "",
            title: ""
          });
          const c = !l && n;
          return (0, d.jsxs)(M.bL, {
            open: c,
            onOpenChange: s,
            children: [(0, d.jsx)(M.l9, {
              asChild: !0,
              children: (0, d.jsx)(ca, {
                value: e,
                title: e,
                active: !!r.key,
                hasChevron: !0,
                children: r.title || e
              })
            }), (0, d.jsx)(da.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: r,
                setRootSearchTarget: e => {
                  i(a => "function" == typeof e ? e(a) : e), s(!1)
                }
              },
              children: (0, d.jsx)(M.UC, {
                align: "start",
                className: "_11eee6mp _1r3j5az0 _11eee6mn",
                children: a
              })
            })]
          })
        },
        ha = (0, t.forwardRef)(function({
          errorMessage: e
        }, a) {
          return e && (0, d.jsx)("div", {
            ref: a,
            className: "_11eee6m2",
            "aria-live": "polite",
            children: e
          })
        }),
        ma = ({
          to: e,
          target: a,
          className: n,
          onNavigate: t,
          onClick: s,
          reloadDocument: r,
          children: i,
          ...o
        }) => {
          const l = e?.startsWith("http");
          return (0, d.jsx)("a", {
            href: e,
            className: n,
            onClick: a => {
              s?.(a), l || r || (t ? (a.preventDefault(), t(e)) : (a.preventDefault(), window.history.pushState({}, "", e)))
            },
            target: a,
            ...o,
            children: i
          })
        };
      var va = "_13sb4ht3",
        xa = "_13sb4ht4";
      const fa = () => (0, d.jsx)("div", {
        className: "_13sb4ht2",
        children: (0, d.jsx)("svg", {
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [va, xa, ""].map((e, a) => (0, d.jsx)("path", {
            className: e,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.61511 10.9978H12.5848C14.3845 10.9978 15.9421 10.4507 15.9421 8.44939C15.9421 6.86148 14.5745 6.52423 13.2595 6.52423H9.56608L8.61511 10.9978ZM24.3357 21.6949H30.6663L24.9533 25.6406L25.8771 31.8581L20.9272 28.1057L14.2842 32.0001L17.3902 25.4102C17.3902 25.4102 13.7775 21.6513 13.7803 21.6513C13.5374 21.3314 13.4563 20.5073 13.4563 20.1527C13.4563 19.7045 13.4849 19.2505 13.5155 18.7669C13.5503 18.2159 13.5875 17.6266 13.5875 16.9637C13.5875 15.3278 12.8632 14.4723 11.0925 14.4723H7.77269L6.32717 21.2249H1.33301L5.30462 2.66675H14.7029C18.1954 2.66675 20.861 3.52407 20.861 7.47735C20.861 10.2601 19.4884 12.2367 16.4605 12.6517V12.7051C17.8843 13.0428 18.4177 14.0037 18.4177 15.7946C18.4177 16.5095 18.3959 17.1369 18.3754 17.7271C18.3572 18.2511 18.34 18.7456 18.34 19.246C18.34 19.8873 18.507 20.9355 18.9277 21.6513H19.6215L23.3316 15.4672L24.3357 21.6949ZM23.5498 22.6019H27.7512L23.9634 25.217L24.6402 29.7765L20.9957 27.0111L16.3688 29.7218L18.4869 25.2341L15.9114 22.5578H20.1458L22.8244 18.093L23.5498 22.6019Z",
            fill: "currentcolor"
          }, e + a))
        })
      });
      var ga = "corzs33";
      const pa = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        ba = ({
          quickAccessHidden: e,
          children: a,
          href: n,
          onNavigate: r
        }) => {
          const i = (0, c.A)(),
            [o, l] = (0, t.useState)(!1),
            u = (0, t.useRef)(null),
            [h, m] = (0, t.useState)(!1),
            {
              brand: v,
              brandTitle: x,
              isNavHidden: g,
              simpleMenu: p
            } = (0, t.useContext)(H),
            _ = n || "/";
          return (0, t.useEffect)(() => {
            l(!1)
          }, [g, e]), (0, t.useEffect)(() => {
            const e = () => {
              const e = u.current?.getBoundingClientRect().width || 0,
                a = u.current?.children;
              Array.from(Array(a?.length)).reduce((e, n, t) => e + a?.item(t)?.getBoundingClientRect().width, 0) + 60 >= e ? m(!1) : m(!0)
            };
            return x ? (e(), window.addEventListener("resize", e)) : (m(!1), window.removeEventListener("resize", e)), () => {
              window.removeEventListener("resize", e)
            }
          }, [x]), (0, d.jsxs)("div", {
            className: "corzs30",
            children: [(0, d.jsx)(X, {
              showOn: "desktop",
              children: (0, d.jsxs)("div", {
                className: "corzs31",
                children: [(0, d.jsxs)("div", {
                  className: ga,
                  children: [!a && (0, d.jsx)(ma, {
                    to: _,
                    "aria-label": i.formatMessage(I.nav_rockstargames_home),
                    onNavigate: r,
                    className: "corzs39",
                    children: (0, d.jsx)(fa, {})
                  }), a && (0, d.jsxs)(M.bL, {
                    open: o,
                    onOpenChange: l,
                    children: [(0, d.jsx)(X, {
                      showOn: "desktop",
                      children: (0, d.jsx)(M.l9, {
                        asChild: !0,
                        children: (0, d.jsx)("button", {
                          type: "button",
                          className: "corzs38",
                          "aria-label": i.formatMessage(I.nav_rockstargames_logo),
                          children: (0, d.jsx)(fa, {})
                        })
                      })
                    }), (0, d.jsx)(f.AnimatePresence, {
                      children: o && (0, d.jsx)(X, {
                        showOn: "desktop",
                        children: (0, d.jsx)(M.UC, {
                          forceMount: !0,
                          align: "start",
                          sideOffset: 24,
                          children: (0, d.jsx)(f.motion.div, {
                            className: "corzs3a",
                            variants: pa,
                            initial: "closed",
                            animate: "open",
                            exit: "closed",
                            transition: {
                              duration: .2
                            },
                            children: a
                          })
                        })
                      })
                    })]
                  })]
                }), (v || x) && (0, d.jsxs)("div", {
                  className: "corzs34",
                  children: [(0, d.jsx)("div", {
                    className: "corzs35"
                  }), v && (0, d.jsx)("div", {
                    className: "corzs36",
                    children: v
                  }), x && (0, d.jsx)(b.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: x
                  })]
                })]
              })
            }), (0, d.jsx)(X, {
              showOn: "mobile",
              children: (0, d.jsxs)("div", {
                className: "corzs32",
                ref: u,
                children: [(0, d.jsx)("div", {
                  className: ga,
                  children: (!v || p) && (0, d.jsx)(ma, {
                    to: _,
                    "aria-label": i.formatMessage(I.nav_rockstargames_home),
                    onNavigate: r,
                    className: (0, s.clsx)("corzs39", {
                      corzs3b: h
                    }),
                    children: (0, d.jsx)(fa, {})
                  })
                }), (v || x) && (0, d.jsxs)("div", {
                  className: (0, s.clsx)("corzs34", {
                    corzs3b: x && !h
                  }),
                  children: [p && (0, d.jsx)("div", {
                    className: "corzs35"
                  }), v && (0, d.jsx)("div", {
                    className: "corzs36",
                    children: v
                  }), x && (0, d.jsx)(b.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: x
                  })]
                })]
              })
            })]
          })
        },
        Ma = {
          MenuContext: ye,
          HiddenMenuContext: ke,
          SubMenuContext: Ye,
          MobileMenuContext: ne,
          GlobalNavigationContext: H
        }
    }
  }
]);