try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5705524d-b04b-4643-afa7-1e6ec2b78fdd", e._sentryDebugIdIdentifier = "sentry-dbid-5705524d-b04b-4643-afa7-1e6ec2b78fdd")
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
  [7235, 9908], {
    17235(e, a, n) {
      n.r(a), n.d(a, {
        Actions: () => ea,
        AvatarMenu: () => xe,
        AvatarMenuLanguageLabel: () => _e,
        AvatarMenuSection: () => fe,
        AvatarMenuSectionContent: () => Me,
        AvatarMenuSectionHeader: () => pe,
        AvatarMenuSectionHeaderDropdown: () => be,
        Breakpoint: () => J,
        CallToAction: () => aa,
        Contexts: () => _a,
        Header: () => H,
        Menu: () => Se,
        MenuContent: () => Ye,
        MenuIcon: () => Ue,
        MenuItem: () => Ie,
        MenuLink: () => Fe,
        MenuList: () => Oe,
        MenuSub: () => Ve,
        MenuTrigger: () => Ee,
        MobileMenu: () => se,
        MobileMenuNav: () => ne,
        QuickMenu: () => Ne,
        Root: () => Y,
        Search: () => ra,
        SearchBar: () => la,
        SearchContainer: () => oa,
        SearchError: () => ma,
        SearchFilters: () => ca,
        SearchTarget: () => da,
        SearchTargetDropdown: () => ha,
        SiteTitle: () => Ma
      });
      var t = Object.defineProperty,
        s = (e, a) => () => (a || (e((a = {
          exports: {}
        }).exports, a), e = null), a.exports),
        r = (e, a) => {
          let n = {};
          for (var s in e) t(n, s, {
            get: e[s],
            enumerable: !0
          });
          return a || t(n, Symbol.toStringTag, {
            value: "Module"
          }), n
        },
        i = n(93082),
        o = n(81270),
        l = n(39615),
        c = n(30212),
        d = n(14376),
        u = n(23470),
        h = n(68925),
        m = n(39793),
        v = (n(54446), n(79067)),
        x = n(96883),
        g = n(52457),
        f = n(38957),
        p = n(66760),
        b = n(69669),
        M = n(13517),
        _ = n(88819),
        j = n(3541),
        N = n(68206),
        C = n(41421),
        y = n(81010),
        k = n(29190),
        w = n(69353),
        S = n(32996),
        O = n(4956),
        L = n(1531);
      const I = {
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
      var E = (0, d.YK)({
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
        const e = (0, i.useRef)(null);
        return (0, m.jsx)("button", {
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
          children: (0, m.jsx)(u.A, {
            ...E.accessibility_skip_button
          })
        })
      };

      function z(e) {
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

      function P(e, a) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          a && (t = t.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
          })), n.push.apply(n, t)
        }
        return n
      }

      function D(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {};
          a % 2 ? P(Object(n), !0).forEach(function(a) {
            var t, s, r;
            t = e, s = a, r = n[a], (s = z(s)) in t ? Object.defineProperty(t, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[s] = r
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
          })
        }
        return e
      }

      function T(e, a) {
        var n = {};
        for (var t in e) n[t] = a(e[t], t);
        return n
      }
      var R = (e, a, n) => {
          for (var t of Object.keys(e)) {
            var s;
            if (e[t] !== (null !== (s = a[t]) && void 0 !== s ? s : n[t])) return !1
          }
          return !0
        },
        q = e => {
          var a = a => {
            var n = e.defaultClassName,
              t = D(D({}, e.defaultVariants), a);
            for (var s in t) {
              var r, i = null !== (r = t[s]) && void 0 !== r ? r : e.defaultVariants[s];
              if (null != i) {
                var o = i;
                "boolean" == typeof o && (o = !0 === o ? "true" : "false");
                var l = e.variantClassNames[s][o];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) R(c, t, e.defaultVariants) && (n += " " + d);
            return n
          };
          return a.variants = () => Object.keys(e.variantClassNames), a.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return T(e.variantClassNames, e => T(e, e => e.split(" ")[0]))
            }
          }, a
        },
        B = q({
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
      const H = ({
          children: e
        }) => {
          const {
            simpleMenu: a
          } = (0, i.useContext)(G);
          return (0, m.jsx)("header", {
            className: (0, o.default)(B({
              layout: a ? "simple" : "default"
            }), "ut2qrfa"),
            children: e
          })
        },
        G = (0, i.createContext)({
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
        Y = (Q = ({
          children: e,
          brand: a,
          brandTitle: n,
          mode: t = "default",
          navColorTheme: s = "dark",
          forceSolidBackground: r = !1,
          forceVisibility: c,
          simpleMenu: d = !1,
          locale: u
        }) => {
          const [h, v] = (0, i.useState)(!1), [x, g] = (0, i.useState)(!0), [f, p] = (0, i.useState)(!1), [b, M] = (0, i.useState)(!1), [_, j] = (0, i.useState)(!1), N = (0, i.useRef)(null), C = (0, i.useRef)(null), [y, k] = (0, i.useState)(null), [w, S] = (0, i.useState)(r), O = (0, i.useMemo)(() => "visible" !== c && ("hidden" === c || h), [h, c]);
          (0, i.useEffect)(() => {
            let e = window.scrollY;
            const a = () => {
                const a = window.scrollY > 140,
                  n = window.scrollY > e;
                v(a && n), e = window.scrollY
              },
              n = () => {
                g(0 === window.scrollY)
              };
            return window.addEventListener("scroll", a), window.addEventListener("scroll", n), () => {
              window.removeEventListener("scroll", a), window.removeEventListener("scroll", n)
            }
          }, []), (0, i.useEffect)(() => {
            const e = "data-show-more-content",
              a = C.current,
              n = () => {
                const n = !a?.contains(document.activeElement);
                O && n ? document.body.setAttribute(e, "") : document.body.removeAttribute(e)
              };
            return n(), document.addEventListener("focusin", n), document.addEventListener("focusout", n), () => {
              document.removeEventListener("focusin", n), document.removeEventListener("focusout", n), document.body.removeAttribute(e)
            }
          }, [O, C]), (0, i.useEffect)(() => {
            const e = e => {
              v(e.detail.isHidden)
            };
            return window.addEventListener("header:hideNav", e), () => {
              window.removeEventListener("header:hideNav", e)
            }
          }, []);
          const L = !x || r || w ? "dark" : s;
          return (0, m.jsx)("div", {
            id: "global-nav-root",
            className: "siteHeaderContainer",
            children: (0, m.jsx)("div", {
              ref: k,
              children: y && (0, m.jsx)(l.NP, {
                colorScheme: L,
                defaultColorScheme: L,
                defaultPlatformScale: "desktop",
                container: y,
                locale: u,
                children: (0, m.jsx)(G.Provider, {
                  value: {
                    brand: a,
                    brandTitle: n,
                    isNavHidden: O,
                    containerRef: N,
                    navContentRef: C,
                    simpleMenu: d,
                    setForceBackground: S,
                    avatarMenuOpened: f,
                    setAvatarMenuOpened: p,
                    mainMenuOpened: b,
                    setMainMenuOpened: M,
                    searchBarOpened: _,
                    setSearchBarOpened: j,
                    locale: u
                  },
                  children: (0, m.jsxs)("div", {
                    className: (0, o.default)("ut2qrf1", "ut2qrf0"),
                    ref: N,
                    lang: u,
                    "data-scroll-top": x,
                    "data-color-mode": t,
                    "data-theme": L,
                    "data-force-background": r || w,
                    children: [(0, m.jsx)(A, {}), (0, m.jsx)("div", {
                      className: "ut2qrf2"
                    }), (0, m.jsxs)("div", {
                      ref: C,
                      className: "ut2qrf5",
                      "data-ishidden": O,
                      "data-testid": "globalnav__container",
                      children: [(0, m.jsx)("canvas", {
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
          const [a, n] = (0, i.useState)();
          return (0, i.useEffect)(() => {
            (async () => {
              n(await (async e => await (async e => {
                return {
                  rsLocale: e,
                  locale: e,
                  messages: (a = I[e], {
                    ...a
                  })
                };
                var a
              })(e))(e.locale))
            })()
          }, []), (0, m.jsx)(c.A, {
            locale: a?.locale || "en-US",
            messages: {
              ...a?.messages
            },
            children: a && (0, m.jsx)(Q, {
              ...e
            })
          }, "intl-provider")
        });
      var Q, V = q({
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
        U = q({
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
        F = "_1pgq6b1f",
        Z = r({
          desktop: () => W,
          mobile: () => X
        }),
        W = "dsroxs1",
        X = "dsroxs0";
      const J = ({
          showOn: e,
          ...a
        }) => (0, m.jsx)(f.DX, {
          className: e ? Z[e] : "",
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
        $ = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        };
      var ee = "vkitevd";
      const ae = (0, i.createContext)({
          openedNav: ""
        }),
        ne = ({
          children: e
        }) => {
          const [a, n] = (0, i.useState)("");
          return (0, m.jsx)(ae.Provider, {
            value: {
              openedNav: a
            },
            children: (0, m.jsx)(v.bL, {
              value: a,
              onValueChange: n,
              children: (0, m.jsx)(v.B8, {
                className: "vkitev1",
                children: e
              })
            })
          })
        },
        te = (0, i.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        se = ({
          children: e
        }) => {
          const a = (0, h.A)(),
            [n, t] = (0, i.useState)(!1),
            [s, r] = (0, i.useState)(!1),
            [l, c] = (0, i.useState)(!1),
            {
              brand: d,
              setForceBackground: u,
              simpleMenu: v
            } = (0, i.useContext)(G);
          (0, i.useEffect)(() => {
            n && u(!0)
          }, [n]), (0, i.useEffect)(() => {
            const e = e => {
              const a = e?.target;
              n && a.innerWidth >= 1024 && f()
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [n]);
          const x = {
              show: {
                height: `calc(100dvh - ${(0,b.us)("var(--k8we7i6)","0px")})`,
                paddingBottom: n && d ? "var(--k8we7i0)" : "",
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
            f = () => {
              t(!n), r(!1)
            };
          return v ? null : (0, m.jsx)(te.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                t(!1)
              },
              setHasQuickMenu: c
            },
            children: (0, m.jsxs)(_.bL, {
              open: n,
              onOpenChange: t,
              children: [(0, m.jsx)(J, {
                showOn: "mobile",
                children: (0, m.jsx)(re, {
                  onClick: f,
                  isMenuOpen: n
                })
              }), (0, m.jsx)(M.AnimatePresence, {
                onExitComplete: () => u(!1),
                children: n && (0, m.jsx)(J, {
                  showOn: "mobile",
                  children: (0, m.jsxs)(M.motion.div, {
                    className: "vkiteve",
                    variants: x,
                    animate: "show",
                    initial: "hidden",
                    exit: "hidden",
                    children: [(0, m.jsx)(_.hJ, {
                      className: "vkiteva"
                    }), (0, m.jsx)(_.UC, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => t(!1),
                      children: (0, m.jsxs)(M.motion.div, {
                        className: (0, o.default)((0, g.m)("dark"), "vkitev4", "vkitev7"),
                        variants: x,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, m.jsxs)(j.s6, {
                          children: [(0, m.jsx)(_.hE, {
                            children: a.formatMessage(E.nav_mobilemenu_title)
                          }), (0, m.jsx)(_.VY, {
                            children: a.formatMessage(E.nav_mobilemenu_title)
                          })]
                        }), (0, m.jsx)("div", {
                          className: (0, o.default)(s ? "vkitev9" : "", "vkitev6"),
                          children: (0, m.jsx)(M.motion.div, {
                            className: (0, o.default)("vkitev0", l ? "vkitev8" : ""),
                            children: i.Children.map(e, e => (0, m.jsx)(M.motion.div, {
                              variants: $,
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
        re = ({
          className: e,
          isMenuOpen: a,
          ...n
        }) => {
          const t = (0, h.A)();
          return (0, m.jsx)("div", {
            className: (0, o.default)("vkitevb", e),
            children: (0, m.jsxs)(_.l9, {
              title: t.formatMessage(a ? E.nav_mobilemenu_close : E.nav_mobilemenu_open),
              type: "button",
              className: "vkitevc",
              "data-testid": "hamburgerNav",
              ...n,
              children: [(0, m.jsx)("span", {
                className: ee,
                "data-opened": a
              }), (0, m.jsx)("span", {
                className: ee,
                "data-opened": a
              }), (0, m.jsx)("span", {
                className: ee,
                "data-opened": a
              })]
            })
          })
        },
        ie = (...e) => {
          const a = e.filter(Boolean);
          return a.length <= 1 ? a[0] || null : function(e) {
            for (const n of a) "function" == typeof n ? n(e) : n && (n.current = e)
          }
        },
        oe = ({
          children: e,
          className: a,
          ...n
        }) => {
          const {
            containerRef: t,
            locale: s
          } = (0, i.useContext)(G);
          return (0, m.jsx)(l.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            locale: s,
            children: (0, m.jsx)(k.b, {
              className: (0, o.default)("g1xx1x0 ut2qrf0", a),
              container: t?.current,
              ...n,
              children: e
            })
          })
        };
      var le = "m27a3y7",
        ce = s((e, a) => {
          a.exports = "PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgcng9IjIyIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjE1Ii8+DQo8cGF0aCBkPSJNMjkuMzMzNCAzMC4yNVYyOC40MTY3QzI5LjMzMzQgMjcuNDQ0MiAyOC45NDcxIDI2LjUxMTYgMjguMjU5NSAyNS44MjM5QzI3LjU3MTggMjUuMTM2MyAyNi42MzkyIDI0Ljc1IDI1LjY2NjcgMjQuNzVIMTguMzMzNEMxNy4zNjEgMjQuNzUgMTYuNDI4MyAyNS4xMzYzIDE1Ljc0MDcgMjUuODIzOUMxNS4wNTMxIDI2LjUxMTYgMTQuNjY2NyAyNy40NDQyIDE0LjY2NjcgMjguNDE2N1YzMC4yNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0yMS45OTk5IDIxLjA4MzNDMjQuMDI1IDIxLjA4MzMgMjUuNjY2NiAxOS40NDE3IDI1LjY2NjYgMTcuNDE2N0MyNS42NjY2IDE1LjM5MTYgMjQuMDI1IDEzLjc1IDIxLjk5OTkgMTMuNzVDMTkuOTc0OSAxMy43NSAxOC4zMzMzIDE1LjM5MTYgMTguMzMzMyAxNy40MTY3QzE4LjMzMzMgMTkuNDQxNyAxOS45NzQ5IDIxLjA4MzMgMjEuOTk5OSAyMS4wODMzWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K"
        });
      const de = (0, i.createContext)({
          inAvatarMenu: !1,
          avatarMenuOpenItems: ["open"],
          closeAvatarMenu: () => {}
        }),
        ue = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        he = {
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
        me = {
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
        ve = ({
          children: e,
          className: a
        }) => (0, m.jsx)("div", {
          className: (0, o.default)("m27a3y1", a),
          children: e
        }),
        xe = ({
          avatarIconUrl: e,
          nickname: a,
          isLoggedIn: n,
          children: t,
          onOpenChange: s
        }) => {
          const r = (0, h.A)(),
            o = ce(),
            [l, c] = (0, i.useState)(["open"]),
            {
              isNavHidden: d,
              setAvatarMenuOpened: u,
              mainMenuOpened: v,
              setMainMenuOpened: x
            } = (0, i.useContext)(G),
            [f, p] = (0, i.useState)(!1),
            [b, k] = (0, i.useState)(!1),
            [w, S] = (0, i.useState)(d),
            O = () => {
              p(!1), k(!1)
            };
          w !== d && (S(d), d && O());
          const L = e => {
            c(["open", ...e.filter(e => "open" !== e)])
          };
          return (0, i.useEffect)(() => {
            const e = f || b;
            e && v && x(!1), u(e)
          }, [f, b, v, x, u]), (0, m.jsxs)(de.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: l,
              closeAvatarMenu: O
            },
            children: [(0, m.jsx)(C.bL, {
              open: f,
              onOpenChange: e => {
                s?.(e), p(e)
              },
              modal: !1,
              children: (0, m.jsx)(J, {
                showOn: "desktop",
                children: (0, m.jsxs)(ve, {
                  children: [(0, m.jsx)(C.l9, {
                    asChild: !0,
                    children: (0, m.jsx)(N.IconButton, {
                      size: "SM",
                      label: r.formatMessage(f ? E.avatar_menu_close : E.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: le,
                      "aria-label": r.formatMessage(f ? E.avatar_menu_close : E.avatar_menu_open),
                      "data-testid": "avatarMenuButtonDesktop",
                      "data-logged-in": n,
                      children: e && (0, m.jsx)("img", {
                        className: "m27a3y8",
                        src: e || o,
                        alt: a
                      })
                    })
                  }), (0, m.jsx)(M.AnimatePresence, {
                    children: f && (0, m.jsx)(C.UC, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      onOpenAutoFocus: e => e.preventDefault(),
                      className: (0, g.m)("dark"),
                      children: (0, m.jsx)(M.motion.div, {
                        variants: ue,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, m.jsx)(y.bL, {
                          type: "multiple",
                          value: l,
                          onValueChange: L,
                          children: (0, m.jsx)(Ve, {
                            className: "m27a3y2 _1r3j5az0",
                            children: t
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, m.jsx)(_.bL, {
              open: b,
              onOpenChange: e => {
                s?.(e), k(e)
              },
              children: (0, m.jsx)(J, {
                showOn: "mobile",
                children: (0, m.jsxs)(ve, {
                  children: [(0, m.jsx)(_.l9, {
                    className: le,
                    "aria-label": r.formatMessage(b ? E.avatar_menu_close : E.avatar_menu_open),
                    "data-testid": "avatarMenuButtonMobile",
                    asChild: !0,
                    "data-logged-in": n,
                    children: (0, m.jsx)(N.IconButton, {
                      size: "SM",
                      label: r.formatMessage(f ? E.avatar_menu_close : E.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: le,
                      "aria-label": r.formatMessage(f ? E.avatar_menu_close : E.avatar_menu_open),
                      children: e && (0, m.jsx)("img", {
                        className: "m27a3y8",
                        src: e || o
                      })
                    })
                  }), (0, m.jsx)(M.AnimatePresence, {
                    children: b && (0, m.jsx)(oe, {
                      asChild: !0,
                      children: (0, m.jsxs)(_.UC, {
                        forceMount: !0,
                        className: (0, g.m)("dark"),
                        children: [(0, m.jsxs)(j.s6, {
                          children: [(0, m.jsx)(_.hE, {
                            children: r.formatMessage(E.nav_avatarmenu_title)
                          }), (0, m.jsx)(_.VY, {
                            children: r.formatMessage(E.nav_avatarmenu_title)
                          })]
                        }), (0, m.jsxs)(M.motion.div, {
                          variants: me,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: "m27a3y3",
                          children: [(0, m.jsx)(_.bm, {
                            className: "m27a3y5",
                            "aria-label": r.formatMessage(E.avatar_menu_close),
                            children: (0, m.jsx)("div", {
                              className: "m27a3y6"
                            })
                          }), (0, m.jsx)(y.bL, {
                            type: "multiple",
                            value: l,
                            onValueChange: L,
                            children: (0, m.jsx)(Ve, {
                              className: "m27a3y4 _1r3j5az0",
                              children: t
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
        ge = (0, i.createContext)({
          avatarMenuItemId: ""
        }),
        fe = ({
          children: e,
          value: a
        }) => {
          const n = (0, i.useId)();
          return (0, m.jsx)(ge.Provider, {
            value: {
              avatarMenuItemId: a || n
            },
            children: (0, m.jsx)(y.q7, {
              value: a || n,
              className: "m27a3y9",
              children: e
            })
          })
        },
        pe = ({
          children: e,
          ...a
        }) => (0, m.jsx)(y.Y9, {
          asChild: !0,
          children: (0, m.jsx)("li", {
            className: "m27a3y0",
            children: (0, m.jsx)(y.l9, {
              className: "m27a3ya",
              ...a,
              children: e
            })
          })
        }),
        be = ({
          children: e,
          ...a
        }) => (0, m.jsx)(y.Y9, {
          style: {
            margin: 0
          },
          children: (0, m.jsxs)(y.l9, {
            className: "m27a3yb",
            "data-testid": "header-language-selector-button",
            ...a,
            children: [e, (0, m.jsx)(p.ChevronDown, {
              label: "",
              size: "SM",
              className: "m27a3yc"
            })]
          })
        }),
        Me = ({
          children: e,
          ...a
        }) => {
          const {
            avatarMenuOpenItems: n
          } = (0, i.useContext)(de), {
            avatarMenuItemId: t
          } = (0, i.useContext)(ge), s = n.indexOf(t) >= 0;
          return (0, m.jsx)(y.UC, {
            forceMount: !0,
            asChild: !0,
            ...a,
            children: (0, m.jsx)(M.motion.div, {
              variants: he,
              initial: "closed",
              animate: s ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: e
            })
          })
        },
        _e = ({
          children: e,
          ...a
        }) => (0, m.jsx)("div", {
          className: "m27a3yd",
          ...a,
          children: e
        }),
        je = (0, i.createContext)({
          inQuickMenu: !1
        }),
        Ne = ({
          children: e
        }) => {
          const {
            inMobileMenu: a,
            setHasQuickMenu: n
          } = (0, i.useContext)(te), t = {
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
          }, s = {
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
          }, r = (0, o.default)((0, g.m)("dark"), "_1xtz6n0");
          return (0, i.useEffect)(() => (n?.(!0), () => {
            n?.(!1)
          }), []), a ? (0, m.jsx)(je.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, m.jsx)(v.bL, {
              asChild: !0,
              children: (0, m.jsx)(M.motion.div, {
                variants: t,
                className: r,
                children: i.Children.map(e, e => (0, m.jsx)(M.motion.li, {
                  variants: s,
                  className: "_1xtz6n1",
                  children: e
                }))
              })
            })
          }) : (0, m.jsx)(je.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, m.jsx)(v.bL, {
              asChild: !0,
              children: (0, m.jsx)("div", {
                className: r,
                children: e
              })
            })
          })
        },
        Ce = e => {
          e.preventDefault()
        },
        ye = e => {
          e.nativeEvent.repeat && e.preventDefault()
        },
        ke = (0, i.createContext)({
          inMenu: !1,
          openedNav: "",
          setOpenedNav: e => {}
        }),
        we = (0, i.createContext)({
          isHidden: !1
        }),
        Se = ({
          children: e
        }) => {
          const a = (0, h.A)(),
            [n, t] = (0, i.useState)(""),
            [s, r] = (0, i.useState)(e),
            [o, l] = (0, i.useState)([]),
            c = (0, i.useRef)(null),
            d = (0, i.useRef)(null),
            {
              isNavHidden: u,
              mainMenuOpened: x,
              avatarMenuOpened: g,
              setMainMenuOpened: f
            } = (0, i.useContext)(G),
            {
              inAvatarMenu: p
            } = (0, i.useContext)(de),
            b = (0, i.useCallback)(() => {
              const a = d.current;
              if (!a) return;
              const {
                children: n
              } = a;
              let t = 0;
              const s = Array.from(n).map((e, a) => {
                  const n = e.getBoundingClientRect().top;
                  return 0 === a && (t = n), n
                }),
                o = s.filter(e => e !== t).length,
                c = s.findIndex(e => e > t);
              let u = c;
              if (c > 0 && (u = c - 2), o) {
                const a = [],
                  n = [];
                i.Children.forEach(e, (e, t) => {
                  t < u ? a.push(e) : n.push(e)
                }), a && r(a), n && l(n)
              } else r(e), l([])
            }, [e, d?.current]);
          (0, i.useEffect)(() => {
            const e = new ResizeObserver(b);
            return d?.current && e.observe(d.current), () => {
              d?.current && e.unobserve(d.current)
            }
          }, [e, d?.current]), (0, i.useEffect)(() => {
            t("")
          }, [u]), (0, i.useEffect)(() => {
            const e = () => t("");
            return window.addEventListener("scroll", e), () => {
              window.removeEventListener("scroll", e)
            }
          }, []), (0, i.useEffect)(() => {
            x || "" === n || t("")
          }, [x]), (0, i.useEffect)(() => {
            f("" !== n)
          }, [n, g, x, p]);
          const M = V({
              visibility: "visible"
            }),
            _ = V({
              visibility: "hidden"
            });
          return (0, m.jsx)(ke.Provider, {
            value: {
              inMenu: !0,
              openedNav: n,
              setOpenedNav: t
            },
            children: (0, m.jsx)(J, {
              showOn: "desktop",
              children: (0, m.jsxs)(v.bL, {
                className: "_1pgq6b10",
                value: n,
                onValueChange: t,
                children: [(0, m.jsxs)(Oe, {
                  ref: c,
                  className: M,
                  children: [s, o?.length > 0 && (0, m.jsxs)(Ie, {
                    children: [(0, m.jsx)(Ee, {
                      "data-testid": "navMore",
                      children: a.formatMessage(E.nav_more_dropdown)
                    }), (0, m.jsx)(Ye, {
                      children: (0, m.jsx)(Ve, {
                        children: (0, m.jsx)(Oe, {
                          children: o
                        })
                      })
                    })]
                  })]
                }), (0, m.jsx)("div", {
                  className: "_1pgq6b14",
                  children: (0, m.jsx)(Oe, {
                    ref: d,
                    className: _,
                    "aria-hidden": "true",
                    children: (0, m.jsx)(we.Provider, {
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
        Oe = (0, i.forwardRef)(function({
          children: e,
          className: a,
          ...n
        }, t) {
          return (0, m.jsx)(v.B8, {
            ref: t,
            className: (0, o.default)("_1pgq6b1e", a),
            ...n,
            children: e
          })
        }),
        Le = (0, i.createContext)({
          value: ""
        }),
        Ie = (0, i.forwardRef)(function({
          testId: e,
          children: a,
          ...n
        }, t) {
          const {
            depth: s
          } = (0, i.useContext)(Qe), {
            inMobileMenu: r
          } = (0, i.useContext)(te), l = (0, i.useRef)(null), c = `rsm-${(0,x.B)()}`, d = "_1pgq6b15", u = "_1pgq6b16";
          return (0, m.jsx)(Le.Provider, {
            value: {
              value: c,
              ref: l
            },
            children: (0, m.jsx)(v.q7, {
              value: c,
              ref: ie(t, l),
              className: (0, o.default)({
                [d]: !0,
                [u]: 1 === s && !r
              }),
              "data-testid": e,
              "data-menu-item": s,
              ...n,
              children: a
            })
          })
        }),
        Ee = ({
          children: e,
          ...a
        }) => {
          const {
            inMenu: n
          } = (0, i.useContext)(ke), {
            inAvatarMenu: t
          } = (0, i.useContext)(de), {
            inQuickMenu: s
          } = (0, i.useContext)(je), {
            inMobileMenu: r
          } = (0, i.useContext)(te), {
            inSubMenu: o,
            depth: l
          } = (0, i.useContext)(Qe), c = {
            ...a,
            "data-menu-trigger": !0
          };
          return l > 1 ? (0, m.jsx)(qe, {
            ...c,
            children: e
          }) : t ? (0, m.jsx)(De, {
            ...c,
            children: e
          }) : o ? (0, m.jsx)(Re, {
            ...c,
            children: e
          }) : s ? (0, m.jsx)(Te, {
            ...c,
            children: e
          }) : r ? (0, m.jsx)(Pe, {
            ...c,
            children: e
          }) : n ? (0, m.jsx)(ze, {
            ...c,
            children: e
          }) : void 0
        },
        Ae = e => {
          const a = (0, h.A)();
          return (0, m.jsx)(p.ChevronDown, {
            ...e,
            label: ` - ${a.formatMessage(E.nav_rockstargames_submenu_indicator)}`,
            className: "_1pgq6b1g"
          })
        },
        ze = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...s
          } = e;
          return (0, m.jsxs)(v.l9, {
            onPointerMove: Ce,
            onPointerLeave: Ce,
            onKeyDown: ye,
            onClick: t,
            className: (0, o.default)(F, U({
              context: "mainMenu"
            }), n),
            ...s,
            children: [a, (0, m.jsx)(Ae, {})]
          })
        },
        Pe = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...s
          } = e;
          return (0, m.jsxs)(v.l9, {
            onPointerMove: Ce,
            onPointerLeave: Ce,
            onClick: t,
            className: (0, o.default)(F, U({
              context: "mobileMenu"
            }), n),
            ...s,
            children: [a, (0, m.jsx)(Ae, {
              size: "LG"
            })]
          })
        },
        De = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...s
          } = e;
          return (0, m.jsxs)(v.l9, {
            onPointerMove: Ce,
            onPointerLeave: Ce,
            onClick: t,
            className: (0, o.default)(F, U({
              context: "avatarMenu"
            }), n),
            ...s,
            children: [a, (0, m.jsx)(Ae, {})]
          })
        },
        Te = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...s
          } = e;
          return (0, m.jsxs)(v.l9, {
            onPointerMove: Ce,
            onPointerLeave: Ce,
            onClick: t,
            className: (0, o.default)(F, U({
              context: "quickMenu"
            }), n),
            ...s,
            children: [a, (0, m.jsx)(Ae, {})]
          })
        },
        Re = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...s
          } = e;
          return (0, m.jsxs)(v.l9, {
            onPointerMove: Ce,
            onPointerLeave: Ce,
            onClick: t,
            className: (0, o.default)(F, U({
              context: "subMenu"
            }), n),
            ...s,
            children: [a, (0, m.jsx)(Ae, {})]
          })
        },
        qe = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...s
          } = e;
          return (0, m.jsxs)(v.l9, {
            onPointerMove: Ce,
            onPointerLeave: Ce,
            onClick: t,
            className: (0, o.default)(F, U({
              context: "nestedMenu"
            }), n),
            ...s,
            children: [a, (0, m.jsx)(Ae, {})]
          })
        },
        Be = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        He = {
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
        Ge = {
          enter: {
            opacity: 1,
            zIndex: 101
          },
          exit: {
            opacity: 1,
            zIndex: 100
          }
        },
        Ye = (0, i.forwardRef)(function({
          children: e,
          animationOverride: a,
          ...n
        }, t) {
          const {
            navContentRef: s
          } = (0, i.useContext)(G), {
            inSubMenu: r,
            openedNav: l
          } = (0, i.useContext)(Qe), {
            openedNav: c
          } = (0, i.useContext)(ke), {
            openedNav: d
          } = (0, i.useContext)(ae), {
            value: u,
            ref: h
          } = (0, i.useContext)(Le), {
            inMobileMenu: x
          } = (0, i.useContext)(te), {
            isHidden: f
          } = (0, i.useContext)(we), {
            inAvatarMenu: p
          } = (0, i.useContext)(de), b = (0, i.useRef)(null), _ = [l, c, d].includes(u);
          if ((0, i.useEffect)(() => {
              var e;
              _ && b.current && (e = b.current, document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => e.disabled || e.hidden ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
              }).nextNode())?.focus()
            }, [_]), f) return null;
          const j = "_1pgq6b18 _1r3j5az0 _1pgq6b17",
            N = "_1pgq6b19",
            C = "_1pgq6b1a",
            y = "_1pgq6b1b";
          return (0, m.jsx)(M.AnimatePresence, {
            children: _ && (0, m.jsx)(v.UC, {
              ref: ie(t, b),
              className: (0, o.default)((0, g.m)("dark"), {
                [j]: !x,
                [N]: x,
                [C]: r && !x,
                [y]: p
              }),
              onPointerEnter: Ce,
              onPointerLeave: Ce,
              onPointerDown: Ce,
              onPointerDownOutside: e => {
                r && e.preventDefault()
              },
              style: {
                top: s?.current?.getBoundingClientRect().height,
                left: h?.current?.getBoundingClientRect().left
              },
              ...n,
              asChild: !0,
              forceMount: !0,
              children: (0, m.jsx)(M.motion.div, {
                variants: a || r || x ? He : Be,
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
        Qe = (0, i.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        Ve = (0, i.forwardRef)(function({
          children: e,
          ...a
        }, n) {
          const {
            depth: t
          } = (0, i.useContext)(Qe), {
            openedNav: s
          } = (0, i.useContext)(ae), {
            isNavHidden: r
          } = (0, i.useContext)(G), [o, l] = (0, i.useState)("");
          (0, i.useEffect)(() => {
            l("")
          }, [s, r]);
          const c = t ? t + 1 : 1;
          return (0, m.jsx)(Qe.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: o,
              depth: c
            },
            children: (0, m.jsx)(v.bL, {
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
              children: (0, m.jsx)(M.motion.div, {
                variants: Ge,
                animate: "enter",
                initial: "exit",
                exit: "exit",
                transition: K.quickFade,
                children: e
              })
            })
          })
        }),
        Ue = (0, i.forwardRef)(function({
          className: e,
          ...a
        }, n) {
          return (0, m.jsx)("img", {
            ref: n,
            className: (0, o.default)("_1pgq6b1p", e),
            ...a
          })
        }),
        Fe = ({
          hasNotification: e,
          onClick: a,
          ...n
        }) => {
          const {
            inMenu: t,
            setOpenedNav: s
          } = (0, i.useContext)(ke), {
            inAvatarMenu: r
          } = (0, i.useContext)(de), {
            inQuickMenu: o
          } = (0, i.useContext)(je), {
            inMobileMenu: l
          } = (0, i.useContext)(te), {
            inSubMenu: c,
            depth: d
          } = (0, i.useContext)(Qe), u = {
            ...n,
            onSelect: e => {
              const n = e.currentTarget.getAttribute("href") ?? "";
              if (n === window.location.pathname + window.location.search + window.location.hash || new URL(n, window.location.origin).href === window.location.href) {
                e.preventDefault(), s?.("");
                const a = e.currentTarget.closest('[data-menu-item="0"]')?.querySelector('[data-menu-trigger="true"]');
                document.activeElement?.blur(), setTimeout(() => {
                  a?.focus()
                }, 50)
              }
              a?.(e)
            }
          };
          return d > 1 ? (0, m.jsx)($e, {
            ...u
          }) : r ? (0, m.jsx)(Ke, {
            ...u
          }) : c ? (0, m.jsx)(Je, {
            ...u,
            hasNotification: e
          }) : o ? (0, m.jsx)(Xe, {
            ...u
          }) : l ? (0, m.jsx)(We, {
            ...u
          }) : t ? (0, m.jsx)(Ze, {
            ...u
          }) : void 0
        },
        Ze = (0, i.forwardRef)(function({
          children: e,
          className: a,
          onSelect: n,
          external: t,
          asChild: s,
          ...r
        }, l) {
          const c = (0, h.A)(),
            {
              closeAvatarMenu: d
            } = (0, i.useContext)(de),
            {
              closeMobileMenu: u
            } = (0, i.useContext)(te),
            x = s ? f.DX : "a",
            g = (0, o.default)(U({
              context: "mainMenu"
            }), a);
          return (0, m.jsx)(v.N_, {
            onSelect: e => {
              d?.(), u?.(), n?.(e)
            },
            className: g,
            asChild: !0,
            ...r,
            children: (0, m.jsxs)(x, {
              ref: l,
              children: [(0, m.jsx)(f.xV, {
                children: e
              }), t && (0, m.jsx)(p.ExternalLink, {
                label: c.formatMessage(E.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        We = (0, i.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: t,
          external: s,
          ...r
        }, l) {
          const {
            closeAvatarMenu: c
          } = (0, i.useContext)(de), {
            closeMobileMenu: d
          } = (0, i.useContext)(te), u = (0, o.default)(U({
            context: "mobileMenu"
          }), n), h = a ? f.DX : "a";
          return (0, m.jsx)(v.N_, {
            asChild: !0,
            onSelect: e => {
              c?.(), d?.(), t?.(e)
            },
            ...r,
            children: (0, m.jsxs)(h, {
              ref: l,
              className: u,
              children: [(0, m.jsx)(f.xV, {
                children: e
              }), s && (0, m.jsx)(p.ExternalLink, {
                size: "LG",
                label: "",
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Xe = (0, i.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: t,
          external: s,
          ...r
        }, l) {
          const c = (0, h.A)(),
            {
              closeAvatarMenu: d
            } = (0, i.useContext)(de),
            {
              closeMobileMenu: u
            } = (0, i.useContext)(te),
            x = (0, o.default)(U({
              context: "quickMenu"
            }), n),
            g = a ? f.DX : "a";
          return (0, m.jsx)(v.N_, {
            asChild: !0,
            onSelect: e => {
              d?.(), u?.(), t?.(e)
            },
            ...r,
            children: (0, m.jsxs)(g, {
              ref: l,
              className: x,
              children: [(0, m.jsx)(f.xV, {
                children: e
              }), s && (0, m.jsx)(p.ExternalLink, {
                label: c.formatMessage(E.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Je = (0, i.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: t,
          external: s,
          hasNotification: r,
          ...l
        }, c) {
          const d = (0, h.A)(),
            {
              closeAvatarMenu: u
            } = (0, i.useContext)(de),
            {
              closeMobileMenu: x
            } = (0, i.useContext)(te),
            g = (0, o.default)(U({
              context: "subMenu"
            }), n, r ? ["_1pgq6b1q"] : null),
            b = a ? f.DX : "a";
          return (0, m.jsx)(v.N_, {
            asChild: !0,
            onSelect: e => {
              u?.(), x?.(), t?.(e)
            },
            ...l,
            children: (0, m.jsxs)(b, {
              ref: c,
              className: g,
              children: [(0, m.jsx)(f.xV, {
                children: e
              }), s && (0, m.jsx)(p.ExternalLink, {
                label: d.formatMessage(E.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Ke = (0, i.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: t,
          external: s,
          ...r
        }, l) {
          const c = (0, h.A)(),
            {
              closeAvatarMenu: d
            } = (0, i.useContext)(de),
            {
              closeMobileMenu: u
            } = (0, i.useContext)(te),
            x = (0, o.default)(U({
              context: "avatarMenu"
            }), n),
            g = a ? f.DX : "a";
          return (0, m.jsx)(v.N_, {
            asChild: !0,
            onSelect: e => {
              d?.(), u?.(), t?.(e)
            },
            ...r,
            children: (0, m.jsxs)(g, {
              ref: l,
              className: x,
              children: [(0, m.jsx)(f.xV, {
                children: e
              }), s && (0, m.jsx)(p.ExternalLink, {
                label: c.formatMessage(E.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        $e = (0, i.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: t,
          external: s,
          ...r
        }, l) {
          const c = (0, h.A)(),
            {
              closeAvatarMenu: d
            } = (0, i.useContext)(de),
            {
              closeMobileMenu: u
            } = (0, i.useContext)(te),
            x = (0, o.default)(U({
              context: "nestedMenu"
            }), n),
            g = a ? f.DX : "a";
          return (0, m.jsx)(v.N_, {
            asChild: !0,
            onSelect: e => {
              d?.(), u?.(), t?.(e)
            },
            ...r,
            children: (0, m.jsxs)(g, {
              ref: l,
              className: x,
              children: [(0, m.jsx)(f.xV, {
                children: e
              }), s && (0, m.jsx)(p.ExternalLink, {
                label: c.formatMessage(E.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        ea = ({
          children: e
        }) => (0, m.jsx)("div", {
          className: "ncorez0",
          children: e
        });
      const aa = (0, i.forwardRef)(function({
        children: e,
        dataTestId: a,
        onPress: n,
        ...t
      }, s) {
        const {
          inMobileMenu: r,
          closeMobileMenu: o
        } = (0, i.useContext)(te), l = (0, w.v6)({
          "data-testid": a,
          onPress: e => {
            n?.(e), o()
          },
          appearance: "secondary",
          size: (0, S.Ub)("(min-width: 1024px)") ? "SM" : "LG",
          className: "ey3skr0"
        }, t);
        return (0, m.jsx)("div", {
          className: r ? "ey3skr1" : "ey3skr2",
          children: (0, m.jsx)(N.Button, {
            ref: s,
            fullWidth: r,
            ...l,
            children: e
          })
        })
      });
      var na = "_11eee6m7",
        ta = "_11eee6ml";
      const sa = {
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
        ra = ({
          children: e,
          isSearchPage: a
        }) => {
          const {
            formatMessage: n
          } = (0, h.A)(), {
            isNavHidden: t,
            searchBarOpened: s,
            setSearchBarOpened: r,
            avatarMenuOpened: o
          } = (0, i.useContext)(G);
          (0, i.useEffect)(() => {
            r(a || !1)
          }, []), (0, i.useEffect)(() => {
            r(!1)
          }, [t]), (0, i.useEffect)(() => {
            o && r(!1)
          }, [o]);
          const l = !t && (a || s);
          return (0, m.jsx)(J, {
            showOn: "desktop",
            children: (0, m.jsx)("div", {
              className: "_11eee6m0",
              children: (0, m.jsxs)(C.bL, {
                open: l,
                onOpenChange: r,
                children: [(0, m.jsx)(C.l9, {
                  asChild: !0,
                  children: (0, m.jsx)(N.IconButton, {
                    icon: "Search",
                    appearance: "ghost",
                    size: "SM",
                    label: n(l ? E.search_close_button : E.search_open_button),
                    className: "_11eee6mb",
                    "data-testid": "searchToggle"
                  })
                }), (0, m.jsx)(M.AnimatePresence, {
                  children: l && (0, m.jsx)(O.n, {
                    loop: !a,
                    children: (0, m.jsx)(C.UC, {
                      forceMount: !0,
                      sideOffset: 19,
                      children: (0, m.jsx)(M.motion.div, {
                        initial: "close",
                        animate: "open",
                        exit: "close",
                        variants: sa,
                        "data-testid": "searchBar",
                        className: (0, g.m)("dark"),
                        children: e
                      })
                    })
                  })
                })]
              })
            })
          })
        },
        ia = (0, i.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          searchTarget: "",
          onChange: () => {}
        }),
        oa = (0, i.forwardRef)(function({
          children: e
        }, a) {
          return (0, m.jsx)("div", {
            role: "search",
            ref: a,
            className: "_11eee6m1",
            children: e
          })
        }),
        la = (0, i.forwardRef)(function({
          children: e,
          queryMin: a = 0,
          queryMax: n = 100,
          onSearch: t,
          query: s,
          onQueryChange: r,
          target: l,
          onTargetChange: c,
          isSearchPage: d = !1
        }, u) {
          const {
            formatMessage: v
          } = (0, h.A)(), {
            inMobileMenu: x,
            closeMobileMenu: g
          } = (0, i.useContext)(te), [f, b] = (0, L.i)({
            prop: s,
            onChange: r,
            defaultProp: ""
          }), [_, j] = (0, L.i)({
            prop: l,
            onChange: c,
            defaultProp: ""
          }), [y, k] = (0, i.useState)(!1), [w, S] = (0, i.useState)(!1), {
            setForceBackground: O
          } = (0, i.useContext)(G);
          (0, i.useEffect)(() => (O(!0), () => {
            O(!1)
          }), []);
          const I = (e, a) => {
              t(e, a, g), S(!0)
            },
            A = {
              inSearchMenu: !0,
              searchTarget: _,
              setSearchTarget: e => {
                j(e), f && f.length >= a && I(f, e)
              },
              onChange: r
            },
            z = (0, i.useMemo)(() => x ? (0, m.jsx)(M.AnimatePresence, {
              children: y && (0, m.jsx)(M.motion.div, {
                initial: "close",
                animate: "open",
                exit: "close",
                variants: sa,
                transition: K.springOpen,
                "data-testid": "searchBar",
                children: (0, m.jsx)("div", {
                  className: "_11eee6m9 _11eee6m8",
                  children: e
                })
              })
            }) : (0, m.jsxs)("div", {
              className: "_11eee6m8",
              children: [e, !x && !d && (0, m.jsx)("div", {
                className: "_11eee6md",
                children: (0, m.jsx)(C.bm, {
                  className: "_11eee6me",
                  children: (0, m.jsx)(p.X, {
                    size: "MD",
                    className: "_11eee6mf",
                    label: v(E.search_close_button)
                  })
                })
              })]
            }), [x, y, d, v, e]);
          return (0, m.jsxs)(ia.Provider, {
            value: A,
            children: [(0, m.jsxs)("div", {
              className: (0, o.default)("_11eee6m6", {
                [na]: x
              }),
              "data-testid": "searchBar",
              children: [(0, m.jsx)(N.IconButton, {
                onClick: () => {
                  I(f, _)
                },
                appearance: "ghost",
                icon: "Search",
                size: "LG",
                label: v(w ? E.search_disabled_aria_label : E.search_action)
              }), (0, m.jsx)("div", {
                className: "_11eee6mg",
                children: (0, m.jsx)("input", {
                  className: "_11eee6mh",
                  type: "search",
                  value: f,
                  onChange: e => (e => {
                    b(e), S(!1)
                  })(e.target.value),
                  onKeyUp: e => {
                    "Enter" === e.key && f && _ && I(f, _)
                  },
                  onFocus: () => k(!0),
                  placeholder: v(E.search_placeholder),
                  ref: u,
                  enterKeyHint: "search",
                  maxLength: n,
                  min: a,
                  max: n
                })
              }), x && y && (0, m.jsx)(N.IconButton, {
                onClick: () => k(!1),
                appearance: "ghost",
                icon: "X",
                size: "MD",
                label: v(E.search_close_button)
              })]
            }), z]
          })
        }),
        ca = ({
          children: e
        }) => {
          const {
            formatMessage: a
          } = (0, h.A)();
          return (0, m.jsx)("div", {
            className: "_11eee6mi",
            role: "radiogroup",
            "aria-label": a(E.search_categories),
            children: e
          })
        },
        da = (0, i.forwardRef)(function({
          children: e,
          value: a,
          title: n,
          active: t,
          hasChevron: s,
          ...r
        }, l) {
          const {
            setSearchTarget: c,
            searchTarget: d
          } = (0, i.useContext)(ia), {
            inSearchTargetDropdown: u,
            setRootSearchTarget: h,
            rootSearchTarget: v
          } = (0, i.useContext)(ua), x = t => {
            c?.(t), u && "string" == typeof e && h({
              key: a,
              title: n
            })
          }, g = t || Boolean(d) && (d === a || d === v.key);
          return u ? (0, m.jsx)("button", {
            ref: l,
            type: "button",
            className: (0, o.default)("_11eee6mq", {
              [ta]: g
            }),
            onClick: () => x(a),
            value: a,
            ...r,
            role: "radio",
            "aria-checked": g,
            children: e
          }) : (0, m.jsx)(N.Tag.Root, {
            className: "_11eee6mj",
            color: g ? "monochrome" : "grey",
            size: "LG",
            background: "static",
            onClick: () => x(a),
            hasBorder: !1,
            ...r,
            asChild: !0,
            children: (0, m.jsxs)("button", {
              type: "button",
              ref: l,
              value: a,
              role: "radio",
              "aria-checked": g,
              children: [(0, m.jsx)(N.Tag.Label, {
                asChild: !0,
                children: (0, m.jsx)(N.Body, {
                  size: "MD",
                  appearance: "bold",
                  children: e
                })
              }), s && (0, m.jsx)(N.Tag.Icon, {
                className: "_11eee6mo",
                label: "",
                icon: "ChevronDown"
              })]
            })
          })
        }),
        ua = (0, i.createContext)({
          inSearchTargetDropdown: !1,
          rootSearchTarget: {
            key: "",
            title: ""
          },
          setRootSearchTarget: () => {}
        }),
        ha = ({
          title: e,
          children: a
        }) => {
          const [n, t] = (0, i.useState)(!1), [s, r] = (0, i.useState)({
            key: "",
            title: ""
          }), {
            searchTarget: o
          } = (0, i.useContext)(ia), {
            avatarMenuOpened: l
          } = (0, i.useContext)(G);
          o !== s.key && "" !== s.key && r({
            key: "",
            title: ""
          });
          const c = !l && n;
          return (0, m.jsxs)(C.bL, {
            open: c,
            onOpenChange: t,
            children: [(0, m.jsx)(C.l9, {
              asChild: !0,
              children: (0, m.jsx)(da, {
                value: e,
                title: e,
                active: !!s.key,
                hasChevron: !0,
                children: s.title || e
              })
            }), (0, m.jsx)(ua.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: s,
                setRootSearchTarget: e => {
                  r(a => "function" == typeof e ? e(a) : e), t(!1)
                }
              },
              children: (0, m.jsx)(C.UC, {
                align: "start",
                className: "_11eee6mp _1r3j5az0 _11eee6mn",
                children: a
              })
            })]
          })
        },
        ma = (0, i.forwardRef)(function({
          errorMessage: e
        }, a) {
          return e && (0, m.jsx)("div", {
            ref: a,
            className: "_11eee6m2",
            "aria-live": "polite",
            children: e
          })
        }),
        va = ({
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
          return (0, m.jsx)("a", {
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
      var xa = "_13sb4ht3",
        ga = "_13sb4ht4";
      const fa = () => (0, m.jsx)("div", {
        className: "_13sb4ht2",
        children: (0, m.jsx)("svg", {
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [xa, ga, ""].map((e, a) => (0, m.jsx)("path", {
            className: e,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.61511 10.9978H12.5848C14.3845 10.9978 15.9421 10.4507 15.9421 8.44939C15.9421 6.86148 14.5745 6.52423 13.2595 6.52423H9.56608L8.61511 10.9978ZM24.3357 21.6949H30.6663L24.9533 25.6406L25.8771 31.8581L20.9272 28.1057L14.2842 32.0001L17.3902 25.4102C17.3902 25.4102 13.7775 21.6513 13.7803 21.6513C13.5374 21.3314 13.4563 20.5073 13.4563 20.1527C13.4563 19.7045 13.4849 19.2505 13.5155 18.7669C13.5503 18.2159 13.5875 17.6266 13.5875 16.9637C13.5875 15.3278 12.8632 14.4723 11.0925 14.4723H7.77269L6.32717 21.2249H1.33301L5.30462 2.66675H14.7029C18.1954 2.66675 20.861 3.52407 20.861 7.47735C20.861 10.2601 19.4884 12.2367 16.4605 12.6517V12.7051C17.8843 13.0428 18.4177 14.0037 18.4177 15.7946C18.4177 16.5095 18.3959 17.1369 18.3754 17.7271C18.3572 18.2511 18.34 18.7456 18.34 19.246C18.34 19.8873 18.507 20.9355 18.9277 21.6513H19.6215L23.3316 15.4672L24.3357 21.6949ZM23.5498 22.6019H27.7512L23.9634 25.217L24.6402 29.7765L20.9957 27.0111L16.3688 29.7218L18.4869 25.2341L15.9114 22.5578H20.1458L22.8244 18.093L23.5498 22.6019Z",
            fill: "currentcolor"
          }, e + a))
        })
      });
      var pa = "corzs33";
      const ba = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        Ma = ({
          quickAccessHidden: e,
          children: a,
          href: n,
          onNavigate: t
        }) => {
          const s = (0, h.A)(),
            [r, l] = (0, i.useState)(!1),
            c = (0, i.useRef)(null),
            [d, u] = (0, i.useState)(!1),
            {
              brand: v,
              brandTitle: x,
              isNavHidden: g,
              simpleMenu: f
            } = (0, i.useContext)(G),
            p = n || "/";
          return (0, i.useEffect)(() => {
            l(!1)
          }, [g, e]), (0, i.useEffect)(() => {
            const e = () => {
              const e = c.current?.getBoundingClientRect().width || 0,
                a = c.current?.children;
              Array.from(Array(a?.length)).reduce((e, n, t) => e + a?.item(t)?.getBoundingClientRect().width, 0) + 60 >= e ? u(!1) : u(!0)
            };
            return x ? (e(), window.addEventListener("resize", e)) : (u(!1), window.removeEventListener("resize", e)), () => {
              window.removeEventListener("resize", e)
            }
          }, [x]), (0, m.jsxs)("div", {
            className: "corzs30",
            children: [(0, m.jsx)(J, {
              showOn: "desktop",
              children: (0, m.jsxs)("div", {
                className: "corzs31",
                children: [(0, m.jsxs)("div", {
                  className: pa,
                  children: [!a && (0, m.jsx)(va, {
                    to: p,
                    "aria-label": s.formatMessage(E.nav_rockstargames_home),
                    onNavigate: t,
                    className: "corzs39",
                    children: (0, m.jsx)(fa, {})
                  }), a && (0, m.jsxs)(C.bL, {
                    open: r,
                    onOpenChange: l,
                    children: [(0, m.jsx)(J, {
                      showOn: "desktop",
                      children: (0, m.jsx)(C.l9, {
                        asChild: !0,
                        children: (0, m.jsx)("button", {
                          type: "button",
                          className: "corzs38",
                          "aria-label": s.formatMessage(E.nav_rockstargames_logo),
                          children: (0, m.jsx)(fa, {})
                        })
                      })
                    }), (0, m.jsx)(M.AnimatePresence, {
                      children: r && (0, m.jsx)(J, {
                        showOn: "desktop",
                        children: (0, m.jsx)(C.UC, {
                          forceMount: !0,
                          align: "start",
                          sideOffset: 24,
                          children: (0, m.jsx)(M.motion.div, {
                            className: "corzs3a",
                            variants: ba,
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
                }), (v || x) && (0, m.jsxs)("div", {
                  className: "corzs34",
                  children: [(0, m.jsx)("div", {
                    className: "corzs35"
                  }), v && (0, m.jsx)("div", {
                    className: "corzs36",
                    children: v
                  }), x && (0, m.jsx)(N.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: x
                  })]
                })]
              })
            }), (0, m.jsx)(J, {
              showOn: "mobile",
              children: (0, m.jsxs)("div", {
                className: "corzs32",
                ref: c,
                children: [(0, m.jsx)("div", {
                  className: pa,
                  children: (!v || f) && (0, m.jsx)(va, {
                    to: p,
                    "aria-label": s.formatMessage(E.nav_rockstargames_home),
                    onNavigate: t,
                    className: (0, o.clsx)("corzs39", {
                      corzs3b: d
                    }),
                    tabIndex: d ? -1 : 0,
                    children: (0, m.jsx)(fa, {})
                  })
                }), (v || x) && (0, m.jsxs)("div", {
                  className: (0, o.clsx)("corzs34", {
                    corzs3b: x && !d
                  }),
                  children: [f && (0, m.jsx)("div", {
                    className: "corzs35"
                  }), v && (0, m.jsx)("div", {
                    className: "corzs36",
                    children: v
                  }), x && (0, m.jsx)(N.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: x
                  })]
                })]
              })
            })]
          })
        },
        _a = {
          MenuContext: ke,
          HiddenMenuContext: we,
          SubMenuContext: Qe,
          MobileMenuContext: te,
          GlobalNavigationContext: G
        }
    }
  }
]);