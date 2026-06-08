try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "13570902-6b18-4828-8e72-4b8b26aaa10a", e._sentryDebugIdIdentifier = "sentry-dbid-13570902-6b18-4828-8e72-4b8b26aaa10a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [8566], {
    28566(e, a, n) {
      n.r(a), n.d(a, {
        Actions: () => ta,
        AvatarMenu: () => xe,
        AvatarMenuLanguageLabel: () => Ne,
        AvatarMenuSection: () => be,
        AvatarMenuSectionContent: () => Ce,
        AvatarMenuSectionHeader: () => je,
        AvatarMenuSectionHeaderDropdown: () => _e,
        Breakpoint: () => ee,
        CallToAction: () => sa,
        Contexts: () => Na,
        Header: () => Y,
        Menu: () => Le,
        MenuContent: () => Ve,
        MenuIcon: () => Ze,
        MenuItem: () => Ee,
        MenuLink: () => Ke,
        MenuList: () => Ae,
        MenuSub: () => Ue,
        MenuTrigger: () => ze,
        MobileMenu: () => oe,
        MobileMenuNav: () => re,
        QuickMenu: () => ke,
        Root: () => V,
        Search: () => la,
        SearchBar: () => ua,
        SearchContainer: () => da,
        SearchError: () => fa,
        SearchFilters: () => ha,
        SearchTarget: () => ma,
        SearchTargetDropdown: () => ga,
        SiteTitle: () => Ca
      });
      var t = n(4637),
        s = n(81270),
        r = n(31589),
        i = n(30212),
        o = n(14376),
        l = n(51177),
        c = n(40949),
        d = n(68925);

      function u(e) {
        var a = (0, d.A)(),
          n = a.formatMessage,
          s = a.textComponent,
          r = void 0 === s ? t.Fragment : s,
          i = e.id,
          o = e.description,
          l = e.defaultMessage,
          c = e.values,
          u = e.children,
          h = e.tagName,
          m = void 0 === h ? r : h,
          v = n({
            id: i,
            description: o,
            defaultMessage: l
          }, c, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof u ? u(Array.isArray(v) ? v : [v]) : m ? t.createElement(m, null, v) : t.createElement(t.Fragment, null, v)
      }
      u.displayName = "FormattedMessage";
      var h = t.memo(u, function(e, a) {
        var n = e.values,
          t = (0, l.Tt)(e, ["values"]),
          s = a.values,
          r = (0, l.Tt)(a, ["values"]);
        return (0, c.bN)(s, n) && (0, c.bN)(t, r)
      });
      h.displayName = "MemoizedFormattedMessage";
      const m = h;
      var v = n(39793),
        g = (n(59066), n(33920)),
        f = n(20640),
        p = n(18552),
        x = n(27937),
        M = n(66760),
        b = n(13517),
        j = n(80676),
        _ = n(19563),
        C = n(47584),
        N = n(46929),
        y = n(58754),
        k = n(34364),
        S = n(59236),
        w = n(31821),
        O = n(39080),
        I = n(80692),
        L = Object.defineProperty,
        A = (e, a) => () => (a || (e((a = {
          exports: {}
        }).exports, a), e = null), a.exports),
        T = (e, a) => {
          let n = {};
          for (var t in e) L(n, t, {
            get: e[t],
            enumerable: !0
          });
          return a || L(n, Symbol.toStringTag, {
            value: "Module"
          }), n
        };
      const E = {
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
      var z = (0, o.YK)({
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
      const R = () => {
        const e = (0, t.useRef)(null);
        return (0, v.jsx)("button", {
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
          children: (0, v.jsx)(m, {
            ...z.accessibility_skip_button
          })
        })
      };

      function D(e) {
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

      function q(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {};
          a % 2 ? P(Object(n), !0).forEach(function(a) {
            var t, s, r;
            t = e, s = a, r = n[a], (s = D(s)) in t ? Object.defineProperty(t, s, {
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

      function H(e, a) {
        var n = {};
        for (var t in e) n[t] = a(e[t], t);
        return n
      }
      var B = (e, a, n) => {
          for (var t of Object.keys(e)) {
            var s;
            if (e[t] !== (null !== (s = a[t]) && void 0 !== s ? s : n[t])) return !1
          }
          return !0
        },
        G = e => {
          var a = a => {
            var n = e.defaultClassName,
              t = q(q({}, e.defaultVariants), a);
            for (var s in t) {
              var r, i = null !== (r = t[s]) && void 0 !== r ? r : e.defaultVariants[s];
              if (null != i) {
                var o = i;
                "boolean" == typeof o && (o = !0 === o ? "true" : "false");
                var l = e.variantClassNames[s][o];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) B(c, t, e.defaultVariants) && (n += " " + d);
            return n
          };
          return a.variants = () => Object.keys(e.variantClassNames), a.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return H(e.variantClassNames, e => H(e, e => e.split(" ")[0]))
            }
          }, a
        },
        Q = G({
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
      const Y = ({
          children: e
        }) => {
          const {
            simpleMenu: a
          } = (0, t.useContext)(F);
          return (0, v.jsx)("header", {
            className: (0, s.default)(Q({
              layout: a ? "simple" : "default"
            }), "ut2qrfa"),
            children: e
          })
        },
        F = (0, t.createContext)({
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
        V = (W = ({
          children: e,
          brand: a,
          brandTitle: n,
          mode: i = "default",
          navColorTheme: o = "dark",
          forceSolidBackground: l = !1,
          forceVisibility: c,
          simpleMenu: d = !1,
          locale: u
        }) => {
          const [h, m] = (0, t.useState)(!1), [g, f] = (0, t.useState)(!0), [p, x] = (0, t.useState)(!1), [M, b] = (0, t.useState)(!1), [j, _] = (0, t.useState)(!1), C = (0, t.useRef)(null), N = (0, t.useRef)(null), [y, k] = (0, t.useState)(null), [S, w] = (0, t.useState)(l), O = (0, t.useMemo)(() => "visible" !== c && ("hidden" === c || h), [h, c]);
          (0, t.useEffect)(() => {
            let e = window.scrollY;
            const a = () => {
                const a = window.scrollY > 140,
                  n = window.scrollY > e;
                m(a && n), e = window.scrollY
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
              m(e.detail.isHidden)
            };
            return window.addEventListener("header:hideNav", e), () => {
              window.removeEventListener("header:hideNav", e)
            }
          }, []);
          const I = !g || l || S ? "dark" : o;
          return (0, v.jsx)("div", {
            id: "global-nav-root",
            className: "siteHeaderContainer",
            children: (0, v.jsx)("div", {
              ref: k,
              children: y && (0, v.jsx)(r.NP, {
                colorScheme: I,
                defaultColorScheme: I,
                defaultPlatformScale: "desktop",
                container: y,
                locale: u,
                children: (0, v.jsx)(F.Provider, {
                  value: {
                    brand: a,
                    brandTitle: n,
                    isNavHidden: O,
                    containerRef: C,
                    navContentRef: N,
                    simpleMenu: d,
                    setForceBackground: w,
                    avatarMenuOpened: p,
                    setAvatarMenuOpened: x,
                    mainMenuOpened: M,
                    setMainMenuOpened: b,
                    searchBarOpened: j,
                    setSearchBarOpened: _,
                    locale: u
                  },
                  children: (0, v.jsxs)("div", {
                    className: (0, s.default)("ut2qrf1", "ut2qrf0"),
                    ref: C,
                    lang: u,
                    "data-scroll-top": g,
                    "data-color-mode": i,
                    "data-theme": I,
                    "data-force-background": l || S,
                    children: [(0, v.jsx)(R, {}), (0, v.jsx)("div", {
                      className: "ut2qrf2"
                    }), (0, v.jsxs)("div", {
                      ref: N,
                      className: "ut2qrf5",
                      "data-ishidden": O,
                      "data-testid": "globalnav__container",
                      children: [(0, v.jsx)("canvas", {
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
                  messages: (a = E[e], {
                    ...a
                  })
                };
                var a
              })(e))(e.locale))
            })()
          }, []), (0, v.jsx)(i.A, {
            locale: a?.locale || "en-US",
            messages: {
              ...a?.messages
            },
            children: a && (0, v.jsx)(W, {
              ...e
            })
          }, "intl-provider")
        });
      var W, U = G({
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
        Z = G({
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
        K = "_1pgq6b1f",
        J = T({
          desktop: () => X,
          mobile: () => $
        }),
        X = "dsroxs1",
        $ = "dsroxs0";
      const ee = ({
          showOn: e,
          ...a
        }) => (0, v.jsx)(x.Slot, {
          className: e ? J[e] : "",
          ...a
        }),
        ae = {
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
        ne = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        };
      var te = "vkitevd";
      const se = (0, t.createContext)({
          openedNav: ""
        }),
        re = ({
          children: e
        }) => {
          const [a, n] = (0, t.useState)("");
          return (0, v.jsx)(se.Provider, {
            value: {
              openedNav: a
            },
            children: (0, v.jsx)(g.Root, {
              value: a,
              onValueChange: n,
              children: (0, v.jsx)(g.List, {
                className: "vkitev1",
                children: e
              })
            })
          })
        },
        ie = (0, t.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        oe = ({
          children: e
        }) => {
          const a = (0, d.A)(),
            [n, r] = (0, t.useState)(!1),
            [i, o] = (0, t.useState)(!1),
            [l, c] = (0, t.useState)(!1),
            {
              brand: u,
              setForceBackground: h,
              simpleMenu: m
            } = (0, t.useContext)(F);
          (0, t.useEffect)(() => {
            n && h(!0)
          }, [n]), (0, t.useEffect)(() => {
            const e = e => {
              const a = e?.target;
              n && a.innerWidth >= 1024 && f()
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [n]);
          const g = {
              show: {
                height: "100dvh",
                paddingBottom: n && u ? "var(--k8we7i0)" : "",
                transition: {
                  ...ae.hamburgerOpen,
                  delay: .2,
                  staggerChildren: .15
                }
              },
              hidden: {
                height: 0,
                paddingBottom: 0,
                transition: ae.hamburgerClose
              }
            },
            f = () => {
              r(!n), o(!1)
            };
          return m ? null : (0, v.jsx)(ie.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                r(!1)
              },
              setHasQuickMenu: c
            },
            children: (0, v.jsxs)(j.Root, {
              open: n,
              onOpenChange: r,
              children: [(0, v.jsx)(ee, {
                showOn: "mobile",
                children: (0, v.jsx)(le, {
                  onClick: f,
                  isMenuOpen: n
                })
              }), (0, v.jsx)(b.AnimatePresence, {
                onExitComplete: () => h(!1),
                children: n && (0, v.jsx)(ee, {
                  showOn: "mobile",
                  children: (0, v.jsxs)(b.motion.div, {
                    className: "vkiteve",
                    variants: g,
                    animate: "show",
                    initial: "hidden",
                    exit: "hidden",
                    children: [(0, v.jsx)(j.Overlay, {
                      className: "vkiteva"
                    }), (0, v.jsx)(j.Content, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => r(!1),
                      children: (0, v.jsxs)(b.motion.div, {
                        className: (0, s.default)((0, p.m)("dark"), "vkitev4", "vkitev7"),
                        variants: g,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, v.jsxs)(_.VisuallyHidden, {
                          children: [(0, v.jsx)(j.Title, {
                            children: a.formatMessage(z.nav_mobilemenu_title)
                          }), (0, v.jsx)(j.Description, {
                            children: a.formatMessage(z.nav_mobilemenu_title)
                          })]
                        }), (0, v.jsx)("div", {
                          className: (0, s.default)(i ? "vkitev9" : "", "vkitev6"),
                          children: (0, v.jsx)(b.motion.div, {
                            className: (0, s.default)("vkitev0", l ? "vkitev8" : ""),
                            children: t.Children.map(e, e => (0, v.jsx)(b.motion.div, {
                              variants: ne,
                              transition: ae.staggerFade,
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
        le = ({
          className: e,
          isMenuOpen: a,
          ...n
        }) => {
          const t = (0, d.A)();
          return (0, v.jsx)("div", {
            className: (0, s.default)("vkitevb", e),
            children: (0, v.jsxs)(j.Trigger, {
              title: t.formatMessage(a ? z.nav_mobilemenu_close : z.nav_mobilemenu_open),
              type: "button",
              className: "vkitevc",
              "data-testid": "hamburgerNav",
              ...n,
              children: [(0, v.jsx)("span", {
                className: te,
                "data-opened": a
              }), (0, v.jsx)("span", {
                className: te,
                "data-opened": a
              }), (0, v.jsx)("span", {
                className: te,
                "data-opened": a
              })]
            })
          })
        },
        ce = (...e) => {
          const a = e.filter(Boolean);
          return a.length <= 1 ? a[0] || null : function(e) {
            for (const n of a) "function" == typeof n ? n(e) : n && (n.current = e)
          }
        },
        de = ({
          children: e,
          className: a,
          ...n
        }) => {
          const {
            containerRef: i,
            locale: o
          } = (0, t.useContext)(F);
          return (0, v.jsx)(r.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            locale: o,
            children: (0, v.jsx)(k.Root, {
              className: (0, s.default)("g1xx1x0 ut2qrf0", a),
              container: i?.current,
              ...n,
              children: e
            })
          })
        };
      var ue = "m27a3y7",
        he = A((e, a) => {
          a.exports = "PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ0IiBoZWlnaHQ9IjQ0IiByeD0iMjIiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMTUiLz4KPHBhdGggZD0iTTI5LjMzMzQgMzAuMjVWMjguNDE2N0MyOS4zMzM0IDI3LjQ0NDIgMjguOTQ3MSAyNi41MTE2IDI4LjI1OTUgMjUuODIzOUMyNy41NzE4IDI1LjEzNjMgMjYuNjM5MiAyNC43NSAyNS42NjY3IDI0Ljc1SDE4LjMzMzRDMTcuMzYxIDI0Ljc1IDE2LjQyODMgMjUuMTM2MyAxNS43NDA3IDI1LjgyMzlDMTUuMDUzMSAyNi41MTE2IDE0LjY2NjcgMjcuNDQ0MiAxNC42NjY3IDI4LjQxNjdWMzAuMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMS45OTk5IDIxLjA4MzNDMjQuMDI1IDIxLjA4MzMgMjUuNjY2NiAxOS40NDE3IDI1LjY2NjYgMTcuNDE2N0MyNS42NjY2IDE1LjM5MTYgMjQuMDI1IDEzLjc1IDIxLjk5OTkgMTMuNzVDMTkuOTc0OSAxMy43NSAxOC4zMzMzIDE1LjM5MTYgMTguMzMzMyAxNy40MTY3QzE4LjMzMzMgMTkuNDQxNyAxOS45NzQ5IDIxLjA4MzMgMjEuOTk5OSAyMS4wODMzWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
        });
      const me = (0, t.createContext)({
          inAvatarMenu: !1,
          avatarMenuOpenItems: ["open"],
          closeAvatarMenu: () => {}
        }),
        ve = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        ge = {
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
        fe = {
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
        pe = ({
          children: e,
          className: a
        }) => (0, v.jsx)("div", {
          className: (0, s.default)("m27a3y1", a),
          children: e
        }),
        xe = ({
          avatarIconUrl: e,
          nickname: a,
          isLoggedIn: n,
          children: s,
          onOpenChange: r
        }) => {
          const i = (0, d.A)(),
            o = he(),
            [l, c] = (0, t.useState)(["open"]),
            {
              isNavHidden: u,
              setAvatarMenuOpened: h,
              mainMenuOpened: m,
              setMainMenuOpened: g
            } = (0, t.useContext)(F),
            [f, x] = (0, t.useState)(!1),
            [M, k] = (0, t.useState)(!1),
            [S, w] = (0, t.useState)(u),
            O = () => {
              x(!1), k(!1)
            };
          S !== u && (w(u), u && O());
          const I = e => {
            c(["open", ...e.filter(e => "open" !== e)])
          };
          return (0, t.useEffect)(() => {
            const e = f || M;
            e && m && g(!1), h(e)
          }, [f, M, m, g, h]), (0, v.jsxs)(me.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: l,
              closeAvatarMenu: O
            },
            children: [(0, v.jsx)(N.Root, {
              open: f,
              onOpenChange: e => {
                r?.(e), x(e)
              },
              modal: !1,
              children: (0, v.jsx)(ee, {
                showOn: "desktop",
                children: (0, v.jsxs)(pe, {
                  children: [(0, v.jsx)(N.Trigger, {
                    asChild: !0,
                    children: (0, v.jsx)(C.IconButton, {
                      size: "SM",
                      label: i.formatMessage(f ? z.avatar_menu_close : z.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: ue,
                      "aria-label": i.formatMessage(f ? z.avatar_menu_close : z.avatar_menu_open),
                      "data-testid": "avatarMenuButtonDesktop",
                      "data-logged-in": n,
                      children: e && (0, v.jsx)("img", {
                        className: "m27a3y8",
                        src: e || o,
                        alt: a
                      })
                    })
                  }), (0, v.jsx)(b.AnimatePresence, {
                    children: f && (0, v.jsx)(N.Content, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      onOpenAutoFocus: e => e.preventDefault(),
                      className: (0, p.m)("dark"),
                      children: (0, v.jsx)(b.motion.div, {
                        variants: ve,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, v.jsx)(y.Root, {
                          type: "multiple",
                          value: l,
                          onValueChange: I,
                          children: (0, v.jsx)(Ue, {
                            className: "m27a3y2 _1r3j5az0",
                            children: s
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, v.jsx)(j.Root, {
              open: M,
              onOpenChange: e => {
                r?.(e), k(e)
              },
              children: (0, v.jsx)(ee, {
                showOn: "mobile",
                children: (0, v.jsxs)(pe, {
                  children: [(0, v.jsx)(j.Trigger, {
                    className: ue,
                    "aria-label": i.formatMessage(M ? z.avatar_menu_close : z.avatar_menu_open),
                    "data-testid": "avatarMenuButtonMobile",
                    asChild: !0,
                    "data-logged-in": n,
                    children: (0, v.jsx)(C.IconButton, {
                      size: "SM",
                      label: i.formatMessage(f ? z.avatar_menu_close : z.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: ue,
                      "aria-label": i.formatMessage(f ? z.avatar_menu_close : z.avatar_menu_open),
                      children: e && (0, v.jsx)("img", {
                        className: "m27a3y8",
                        src: e || o
                      })
                    })
                  }), (0, v.jsx)(b.AnimatePresence, {
                    children: M && (0, v.jsx)(de, {
                      asChild: !0,
                      children: (0, v.jsxs)(j.Content, {
                        forceMount: !0,
                        className: (0, p.m)("dark"),
                        children: [(0, v.jsxs)(_.VisuallyHidden, {
                          children: [(0, v.jsx)(j.Title, {
                            children: i.formatMessage(z.nav_avatarmenu_title)
                          }), (0, v.jsx)(j.Description, {
                            children: i.formatMessage(z.nav_avatarmenu_title)
                          })]
                        }), (0, v.jsxs)(b.motion.div, {
                          variants: fe,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: "m27a3y3",
                          children: [(0, v.jsx)(j.Close, {
                            className: "m27a3y5",
                            "aria-label": i.formatMessage(z.avatar_menu_close),
                            children: (0, v.jsx)("div", {
                              className: "m27a3y6"
                            })
                          }), (0, v.jsx)(y.Root, {
                            type: "multiple",
                            value: l,
                            onValueChange: I,
                            children: (0, v.jsx)(Ue, {
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
        Me = (0, t.createContext)({
          avatarMenuItemId: ""
        }),
        be = ({
          children: e,
          value: a
        }) => {
          const n = (0, t.useId)();
          return (0, v.jsx)(Me.Provider, {
            value: {
              avatarMenuItemId: a || n
            },
            children: (0, v.jsx)(y.Item, {
              value: a || n,
              className: "m27a3y9",
              children: e
            })
          })
        },
        je = ({
          children: e,
          ...a
        }) => (0, v.jsx)(y.Header, {
          asChild: !0,
          children: (0, v.jsx)("li", {
            className: "m27a3y0",
            children: (0, v.jsx)(y.Trigger, {
              className: "m27a3ya",
              ...a,
              children: e
            })
          })
        }),
        _e = ({
          children: e,
          ...a
        }) => (0, v.jsx)(y.Header, {
          style: {
            margin: 0
          },
          children: (0, v.jsxs)(y.Trigger, {
            className: "m27a3yb",
            "data-testid": "header-language-selector-button",
            ...a,
            children: [e, (0, v.jsx)(M.ChevronDown, {
              label: "",
              size: "SM",
              className: "m27a3yc"
            })]
          })
        }),
        Ce = ({
          children: e,
          ...a
        }) => {
          const {
            avatarMenuOpenItems: n
          } = (0, t.useContext)(me), {
            avatarMenuItemId: s
          } = (0, t.useContext)(Me), r = n.indexOf(s) >= 0;
          return (0, v.jsx)(y.Content, {
            forceMount: !0,
            asChild: !0,
            ...a,
            children: (0, v.jsx)(b.motion.div, {
              variants: ge,
              initial: "closed",
              animate: r ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: e
            })
          })
        },
        Ne = ({
          children: e,
          ...a
        }) => (0, v.jsx)("div", {
          className: "m27a3yd",
          ...a,
          children: e
        }),
        ye = (0, t.createContext)({
          inQuickMenu: !1
        }),
        ke = ({
          children: e
        }) => {
          const {
            inMobileMenu: a,
            setHasQuickMenu: n
          } = (0, t.useContext)(ie), r = {
            hidden: {
              opacity: 0,
              y: "100%",
              transition: ae.hamburgerClose
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                ...ae.hamburgerOpen,
                staggerChildren: .15,
                delay: ae.hamburgerOpen.duration && .8 * ae.hamburgerOpen.duration,
                delayChildren: .15
              }
            }
          }, i = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: ae.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: ae.staggerFade
            }
          }, o = (0, s.default)((0, p.m)("dark"), "_1xtz6n0");
          return (0, t.useEffect)(() => (n?.(!0), () => {
            n?.(!1)
          }), []), a ? (0, v.jsx)(ye.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, v.jsx)(g.Root, {
              asChild: !0,
              children: (0, v.jsx)(b.motion.div, {
                variants: r,
                className: o,
                children: t.Children.map(e, e => (0, v.jsx)(b.motion.li, {
                  variants: i,
                  className: "_1xtz6n1",
                  children: e
                }))
              })
            })
          }) : (0, v.jsx)(ye.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, v.jsx)(g.Root, {
              asChild: !0,
              children: (0, v.jsx)("div", {
                className: o,
                children: e
              })
            })
          })
        },
        Se = e => {
          e.preventDefault()
        },
        we = e => {
          e.nativeEvent.repeat && e.preventDefault()
        },
        Oe = (0, t.createContext)({
          inMenu: !1,
          openedNav: "",
          setOpenedNav: e => {}
        }),
        Ie = (0, t.createContext)({
          isHidden: !1
        }),
        Le = ({
          children: e
        }) => {
          const a = (0, d.A)(),
            [n, s] = (0, t.useState)(""),
            [r, i] = (0, t.useState)(e),
            [o, l] = (0, t.useState)([]),
            c = (0, t.useRef)(null),
            u = (0, t.useRef)(null),
            {
              isNavHidden: h,
              mainMenuOpened: m,
              avatarMenuOpened: f,
              setMainMenuOpened: p
            } = (0, t.useContext)(F),
            {
              inAvatarMenu: x
            } = (0, t.useContext)(me),
            M = (0, t.useCallback)(() => {
              const a = u.current;
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
            }, [e, u?.current]);
          (0, t.useEffect)(() => {
            const e = new ResizeObserver(M);
            return u?.current && e.observe(u.current), () => {
              u?.current && e.unobserve(u.current)
            }
          }, [e, u?.current]), (0, t.useEffect)(() => {
            s("")
          }, [h]), (0, t.useEffect)(() => {
            const e = () => s("");
            return window.addEventListener("scroll", e), () => {
              window.removeEventListener("scroll", e)
            }
          }, []), (0, t.useEffect)(() => {
            m || "" === n || s("")
          }, [m]), (0, t.useEffect)(() => {
            p("" !== n)
          }, [n, f, m, x]);
          const b = U({
              visibility: "visible"
            }),
            j = U({
              visibility: "hidden"
            });
          return (0, v.jsx)(Oe.Provider, {
            value: {
              inMenu: !0,
              openedNav: n,
              setOpenedNav: s
            },
            children: (0, v.jsx)(ee, {
              showOn: "desktop",
              children: (0, v.jsxs)(g.Root, {
                className: "_1pgq6b10",
                value: n,
                onValueChange: s,
                children: [(0, v.jsxs)(Ae, {
                  ref: c,
                  className: b,
                  children: [r, o?.length > 0 && (0, v.jsxs)(Ee, {
                    children: [(0, v.jsx)(ze, {
                      "data-testid": "navMore",
                      children: a.formatMessage(z.nav_more_dropdown)
                    }), (0, v.jsx)(Ve, {
                      children: (0, v.jsx)(Ue, {
                        children: (0, v.jsx)(Ae, {
                          children: o
                        })
                      })
                    })]
                  })]
                }), (0, v.jsx)("div", {
                  className: "_1pgq6b14",
                  children: (0, v.jsx)(Ae, {
                    ref: u,
                    className: j,
                    "aria-hidden": "true",
                    children: (0, v.jsx)(Ie.Provider, {
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
        Ae = (0, t.forwardRef)(function({
          children: e,
          className: a,
          ...n
        }, t) {
          return (0, v.jsx)(g.List, {
            ref: t,
            className: (0, s.default)("_1pgq6b1e", a),
            ...n,
            children: e
          })
        }),
        Te = (0, t.createContext)({
          value: ""
        }),
        Ee = (0, t.forwardRef)(function({
          testId: e,
          children: a,
          ...n
        }, r) {
          const {
            depth: i
          } = (0, t.useContext)(We), {
            inMobileMenu: o
          } = (0, t.useContext)(ie), l = (0, t.useRef)(null), c = `rsm-${(0,f.useId)()}`, d = "_1pgq6b15", u = "_1pgq6b16";
          return (0, v.jsx)(Te.Provider, {
            value: {
              value: c,
              ref: l
            },
            children: (0, v.jsx)(g.Item, {
              value: c,
              ref: ce(r, l),
              className: (0, s.default)({
                [d]: !0,
                [u]: 1 === i && !o
              }),
              "data-testid": e,
              "data-menu-item": i,
              ...n,
              children: a
            })
          })
        }),
        ze = ({
          children: e,
          ...a
        }) => {
          const {
            inMenu: n
          } = (0, t.useContext)(Oe), {
            inAvatarMenu: s
          } = (0, t.useContext)(me), {
            inQuickMenu: r
          } = (0, t.useContext)(ye), {
            inMobileMenu: i
          } = (0, t.useContext)(ie), {
            inSubMenu: o,
            depth: l
          } = (0, t.useContext)(We), c = {
            ...a,
            "data-menu-trigger": !0
          };
          return l > 1 ? (0, v.jsx)(Ge, {
            ...c,
            children: e
          }) : s ? (0, v.jsx)(qe, {
            ...c,
            children: e
          }) : o ? (0, v.jsx)(Be, {
            ...c,
            children: e
          }) : r ? (0, v.jsx)(He, {
            ...c,
            children: e
          }) : i ? (0, v.jsx)(Pe, {
            ...c,
            children: e
          }) : n ? (0, v.jsx)(De, {
            ...c,
            children: e
          }) : void 0
        },
        Re = e => {
          const a = (0, d.A)();
          return (0, v.jsx)(M.ChevronDown, {
            ...e,
            label: ` - ${a.formatMessage(z.nav_rockstargames_submenu_indicator)}`,
            className: "_1pgq6b1g"
          })
        },
        De = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...r
          } = e;
          return (0, v.jsxs)(g.Trigger, {
            onPointerMove: Se,
            onPointerLeave: Se,
            onKeyDown: we,
            onClick: t,
            className: (0, s.default)(K, Z({
              context: "mainMenu"
            }), n),
            ...r,
            children: [a, (0, v.jsx)(Re, {})]
          })
        },
        Pe = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...r
          } = e;
          return (0, v.jsxs)(g.Trigger, {
            onPointerMove: Se,
            onPointerLeave: Se,
            onClick: t,
            className: (0, s.default)(K, Z({
              context: "mobileMenu"
            }), n),
            ...r,
            children: [a, (0, v.jsx)(Re, {
              size: "LG"
            })]
          })
        },
        qe = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...r
          } = e;
          return (0, v.jsxs)(g.Trigger, {
            onPointerMove: Se,
            onPointerLeave: Se,
            onClick: t,
            className: (0, s.default)(K, Z({
              context: "avatarMenu"
            }), n),
            ...r,
            children: [a, (0, v.jsx)(Re, {})]
          })
        },
        He = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...r
          } = e;
          return (0, v.jsxs)(g.Trigger, {
            onPointerMove: Se,
            onPointerLeave: Se,
            onClick: t,
            className: (0, s.default)(K, Z({
              context: "quickMenu"
            }), n),
            ...r,
            children: [a, (0, v.jsx)(Re, {})]
          })
        },
        Be = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...r
          } = e;
          return (0, v.jsxs)(g.Trigger, {
            onPointerMove: Se,
            onPointerLeave: Se,
            onClick: t,
            className: (0, s.default)(K, Z({
              context: "subMenu"
            }), n),
            ...r,
            children: [a, (0, v.jsx)(Re, {})]
          })
        },
        Ge = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...r
          } = e;
          return (0, v.jsxs)(g.Trigger, {
            onPointerMove: Se,
            onPointerLeave: Se,
            onClick: t,
            className: (0, s.default)(K, Z({
              context: "nestedMenu"
            }), n),
            ...r,
            children: [a, (0, v.jsx)(Re, {})]
          })
        },
        Qe = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        Ye = {
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
        Fe = {
          enter: {
            opacity: 1,
            zIndex: 101
          },
          exit: {
            opacity: 1,
            zIndex: 100
          }
        },
        Ve = (0, t.forwardRef)(function({
          children: e,
          animationOverride: a,
          ...n
        }, r) {
          const {
            navContentRef: i
          } = (0, t.useContext)(F), {
            inSubMenu: o,
            openedNav: l
          } = (0, t.useContext)(We), {
            openedNav: c
          } = (0, t.useContext)(Oe), {
            openedNav: d
          } = (0, t.useContext)(se), {
            value: u,
            ref: h
          } = (0, t.useContext)(Te), {
            inMobileMenu: m
          } = (0, t.useContext)(ie), {
            isHidden: f
          } = (0, t.useContext)(Ie), {
            inAvatarMenu: x
          } = (0, t.useContext)(me), M = (0, t.useRef)(null), j = [l, c, d].includes(u);
          if ((0, t.useEffect)(() => {
              var e;
              j && M.current && (e = M.current, document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => e.disabled || e.hidden ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
              }).nextNode())?.focus()
            }, [j]), f) return null;
          const _ = "_1pgq6b18 _1r3j5az0 _1pgq6b17",
            C = "_1pgq6b19",
            N = "_1pgq6b1a",
            y = "_1pgq6b1b";
          return (0, v.jsx)(b.AnimatePresence, {
            children: j && (0, v.jsx)(g.Content, {
              ref: ce(r, M),
              className: (0, s.default)((0, p.m)("dark"), {
                [_]: !m,
                [C]: m,
                [N]: o && !m,
                [y]: x
              }),
              onPointerEnter: Se,
              onPointerLeave: Se,
              onPointerDown: Se,
              onPointerDownOutside: e => {
                o && e.preventDefault()
              },
              style: {
                top: i?.current?.getBoundingClientRect().height,
                left: h?.current?.getBoundingClientRect().left
              },
              ...n,
              asChild: !0,
              forceMount: !0,
              children: (0, v.jsx)(b.motion.div, {
                variants: a || o || m ? Ye : Qe,
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: ae.springOpen,
                className: "_1pgq6b1c",
                children: e
              })
            })
          })
        }),
        We = (0, t.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        Ue = (0, t.forwardRef)(function({
          children: e,
          ...a
        }, n) {
          const {
            depth: s
          } = (0, t.useContext)(We), {
            openedNav: r
          } = (0, t.useContext)(se), {
            isNavHidden: i
          } = (0, t.useContext)(F), [o, l] = (0, t.useState)("");
          (0, t.useEffect)(() => {
            l("")
          }, [r, i]);
          const c = s ? s + 1 : 1;
          return (0, v.jsx)(We.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: o,
              depth: c
            },
            children: (0, v.jsx)(g.Root, {
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
              children: (0, v.jsx)(b.motion.div, {
                variants: Fe,
                animate: "enter",
                initial: "exit",
                exit: "exit",
                transition: ae.quickFade,
                children: e
              })
            })
          })
        }),
        Ze = (0, t.forwardRef)(function({
          className: e,
          ...a
        }, n) {
          return (0, v.jsx)("img", {
            ref: n,
            className: (0, s.default)("_1pgq6b1p", e),
            ...a
          })
        }),
        Ke = ({
          hasNotification: e,
          onClick: a,
          ...n
        }) => {
          const {
            inMenu: s,
            setOpenedNav: r
          } = (0, t.useContext)(Oe), {
            inAvatarMenu: i
          } = (0, t.useContext)(me), {
            inQuickMenu: o
          } = (0, t.useContext)(ye), {
            inMobileMenu: l
          } = (0, t.useContext)(ie), {
            inSubMenu: c,
            depth: d
          } = (0, t.useContext)(We), u = {
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
          return d > 1 ? (0, v.jsx)(na, {
            ...u
          }) : i ? (0, v.jsx)(aa, {
            ...u
          }) : c ? (0, v.jsx)(ea, {
            ...u,
            hasNotification: e
          }) : o ? (0, v.jsx)($e, {
            ...u
          }) : l ? (0, v.jsx)(Xe, {
            ...u
          }) : s ? (0, v.jsx)(Je, {
            ...u
          }) : void 0
        },
        Je = (0, t.forwardRef)(function({
          children: e,
          className: a,
          onSelect: n,
          external: r,
          asChild: i,
          ...o
        }, l) {
          const c = (0, d.A)(),
            {
              closeAvatarMenu: u
            } = (0, t.useContext)(me),
            {
              closeMobileMenu: h
            } = (0, t.useContext)(ie),
            m = i ? x.Slot : "a",
            f = (0, s.default)(Z({
              context: "mainMenu"
            }), a);
          return (0, v.jsx)(g.Link, {
            onSelect: e => {
              u?.(), h?.(), n?.(e)
            },
            className: f,
            asChild: !0,
            ...o,
            children: (0, v.jsxs)(m, {
              ref: l,
              children: [(0, v.jsx)(x.Slottable, {
                children: e
              }), r && (0, v.jsx)(M.ExternalLink, {
                label: c.formatMessage(z.nav_rockstargames_external_link),
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
          ...o
        }, l) {
          const {
            closeAvatarMenu: c
          } = (0, t.useContext)(me), {
            closeMobileMenu: d
          } = (0, t.useContext)(ie), u = (0, s.default)(Z({
            context: "mobileMenu"
          }), n), h = a ? x.Slot : "a";
          return (0, v.jsx)(g.Link, {
            asChild: !0,
            onSelect: e => {
              c?.(), d?.(), r?.(e)
            },
            ...o,
            children: (0, v.jsxs)(h, {
              ref: l,
              className: u,
              children: [(0, v.jsx)(x.Slottable, {
                children: e
              }), i && (0, v.jsx)(M.ExternalLink, {
                size: "LG",
                label: "",
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        $e = (0, t.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: i,
          ...o
        }, l) {
          const c = (0, d.A)(),
            {
              closeAvatarMenu: u
            } = (0, t.useContext)(me),
            {
              closeMobileMenu: h
            } = (0, t.useContext)(ie),
            m = (0, s.default)(Z({
              context: "quickMenu"
            }), n),
            f = a ? x.Slot : "a";
          return (0, v.jsx)(g.Link, {
            asChild: !0,
            onSelect: e => {
              u?.(), h?.(), r?.(e)
            },
            ...o,
            children: (0, v.jsxs)(f, {
              ref: l,
              className: m,
              children: [(0, v.jsx)(x.Slottable, {
                children: e
              }), i && (0, v.jsx)(M.ExternalLink, {
                label: c.formatMessage(z.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        ea = (0, t.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: i,
          hasNotification: o,
          ...l
        }, c) {
          const u = (0, d.A)(),
            {
              closeAvatarMenu: h
            } = (0, t.useContext)(me),
            {
              closeMobileMenu: m
            } = (0, t.useContext)(ie),
            f = (0, s.default)(Z({
              context: "subMenu"
            }), n, o ? ["_1pgq6b1q"] : null),
            p = a ? x.Slot : "a";
          return (0, v.jsx)(g.Link, {
            asChild: !0,
            onSelect: e => {
              h?.(), m?.(), r?.(e)
            },
            ...l,
            children: (0, v.jsxs)(p, {
              ref: c,
              className: f,
              children: [(0, v.jsx)(x.Slottable, {
                children: e
              }), i && (0, v.jsx)(M.ExternalLink, {
                label: u.formatMessage(z.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        aa = (0, t.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: i,
          ...o
        }, l) {
          const c = (0, d.A)(),
            {
              closeAvatarMenu: u
            } = (0, t.useContext)(me),
            {
              closeMobileMenu: h
            } = (0, t.useContext)(ie),
            m = (0, s.default)(Z({
              context: "avatarMenu"
            }), n),
            f = a ? x.Slot : "a";
          return (0, v.jsx)(g.Link, {
            asChild: !0,
            onSelect: e => {
              u?.(), h?.(), r?.(e)
            },
            ...o,
            children: (0, v.jsxs)(f, {
              ref: l,
              className: m,
              children: [(0, v.jsx)(x.Slottable, {
                children: e
              }), i && (0, v.jsx)(M.ExternalLink, {
                label: c.formatMessage(z.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        na = (0, t.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: i,
          ...o
        }, l) {
          const c = (0, d.A)(),
            {
              closeAvatarMenu: u
            } = (0, t.useContext)(me),
            {
              closeMobileMenu: h
            } = (0, t.useContext)(ie),
            m = (0, s.default)(Z({
              context: "nestedMenu"
            }), n),
            f = a ? x.Slot : "a";
          return (0, v.jsx)(g.Link, {
            asChild: !0,
            onSelect: e => {
              u?.(), h?.(), r?.(e)
            },
            ...o,
            children: (0, v.jsxs)(f, {
              ref: l,
              className: m,
              children: [(0, v.jsx)(x.Slottable, {
                children: e
              }), i && (0, v.jsx)(M.ExternalLink, {
                label: c.formatMessage(z.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        ta = ({
          children: e
        }) => (0, v.jsx)("div", {
          className: "ncorez0",
          children: e
        });
      const sa = (0, t.forwardRef)(function({
        children: e,
        dataTestId: a,
        onPress: n,
        ...s
      }, r) {
        const {
          inMobileMenu: i,
          closeMobileMenu: o
        } = (0, t.useContext)(ie), l = (0, S.mergeProps)({
          "data-testid": a,
          onPress: e => {
            n?.(e), o()
          },
          appearance: "secondary",
          size: (0, w.Ub)("(min-width: 1024px)") ? "SM" : "MD",
          className: "ey3skr0"
        }, s);
        return (0, v.jsx)("div", {
          className: i ? "ey3skr1" : "ey3skr2",
          children: (0, v.jsx)(C.Button, {
            ref: r,
            fullWidth: i,
            ...l,
            children: e
          })
        })
      });
      var ra = "_11eee6m7",
        ia = "_11eee6ml";
      const oa = {
          open: {
            height: "auto",
            overflow: "hidden",
            transition: {
              ...ae.springClose,
              delay: .15
            }
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: ae.springClose
          }
        },
        la = ({
          children: e,
          isSearchPage: a
        }) => {
          const {
            formatMessage: n
          } = (0, d.A)(), {
            isNavHidden: s,
            searchBarOpened: r,
            setSearchBarOpened: i,
            avatarMenuOpened: o
          } = (0, t.useContext)(F);
          (0, t.useEffect)(() => {
            i(a || !1)
          }, []), (0, t.useEffect)(() => {
            i(!1)
          }, [s]), (0, t.useEffect)(() => {
            o && i(!1)
          }, [o]);
          const l = !s && (a || r);
          return (0, v.jsx)(ee, {
            showOn: "desktop",
            children: (0, v.jsx)("div", {
              className: "_11eee6m0",
              children: (0, v.jsxs)(N.Root, {
                open: l,
                onOpenChange: i,
                children: [(0, v.jsx)(N.Trigger, {
                  asChild: !0,
                  children: (0, v.jsx)(C.IconButton, {
                    icon: "Search",
                    appearance: "ghost",
                    size: "SM",
                    label: n(l ? z.search_close_button : z.search_open_button),
                    className: "_11eee6mb",
                    "data-testid": "searchToggle"
                  })
                }), (0, v.jsx)(b.AnimatePresence, {
                  children: l && (0, v.jsx)(O.FocusScope, {
                    loop: !a,
                    children: (0, v.jsx)(N.Content, {
                      forceMount: !0,
                      sideOffset: 19,
                      children: (0, v.jsx)(b.motion.div, {
                        initial: "close",
                        animate: "open",
                        exit: "close",
                        variants: oa,
                        "data-testid": "searchBar",
                        className: (0, p.m)("dark"),
                        children: e
                      })
                    })
                  })
                })]
              })
            })
          })
        },
        ca = (0, t.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          searchTarget: "",
          onChange: () => {}
        }),
        da = (0, t.forwardRef)(function({
          children: e
        }, a) {
          return (0, v.jsx)("div", {
            role: "search",
            ref: a,
            className: "_11eee6m1",
            children: e
          })
        }),
        ua = (0, t.forwardRef)(function({
          children: e,
          queryMin: a = 0,
          queryMax: n = 100,
          onSearch: r,
          query: i,
          onQueryChange: o,
          target: l,
          onTargetChange: c,
          isSearchPage: u = !1
        }, h) {
          const {
            formatMessage: m
          } = (0, d.A)(), {
            inMobileMenu: g,
            closeMobileMenu: f
          } = (0, t.useContext)(ie), [p, x] = (0, I.useControllableState)({
            prop: i,
            onChange: o,
            defaultProp: ""
          }), [j, _] = (0, I.useControllableState)({
            prop: l,
            onChange: c,
            defaultProp: ""
          }), [y, k] = (0, t.useState)(!1), [S, w] = (0, t.useState)(!1), {
            setForceBackground: O
          } = (0, t.useContext)(F);
          (0, t.useEffect)(() => (O(!0), () => {
            O(!1)
          }), []);
          const L = (e, a) => {
              r(e, a, f), w(!0)
            },
            A = {
              inSearchMenu: !0,
              searchTarget: j,
              setSearchTarget: e => {
                _(e), p && p.length >= a && L(p, e)
              },
              onChange: o
            },
            T = (0, t.useMemo)(() => g ? (0, v.jsx)(b.AnimatePresence, {
              children: y && (0, v.jsx)(b.motion.div, {
                initial: "close",
                animate: "open",
                exit: "close",
                variants: oa,
                transition: ae.springOpen,
                "data-testid": "searchBar",
                children: (0, v.jsx)("div", {
                  className: "_11eee6m9 _11eee6m8",
                  children: e
                })
              })
            }) : (0, v.jsxs)("div", {
              className: "_11eee6m8",
              children: [e, !g && !u && (0, v.jsx)("div", {
                className: "_11eee6md",
                children: (0, v.jsx)(N.Close, {
                  className: "_11eee6me",
                  children: (0, v.jsx)(M.X, {
                    size: "MD",
                    className: "_11eee6mf",
                    label: m(z.search_close_button)
                  })
                })
              })]
            }), [g, y, u, m, e]);
          return (0, v.jsxs)(ca.Provider, {
            value: A,
            children: [(0, v.jsxs)("div", {
              className: (0, s.default)("_11eee6m6", {
                [ra]: g
              }),
              "data-testid": "searchBar",
              children: [(0, v.jsx)(C.IconButton, {
                onClick: () => {
                  L(p, j)
                },
                appearance: "ghost",
                icon: "Search",
                size: "LG",
                label: m(S ? z.search_disabled_aria_label : z.search_action)
              }), (0, v.jsx)("div", {
                className: "_11eee6mg",
                children: (0, v.jsx)("input", {
                  className: "_11eee6mh",
                  type: "search",
                  value: p,
                  onChange: e => (e => {
                    x(e), w(!1)
                  })(e.target.value),
                  onKeyUp: e => {
                    "Enter" === e.key && p && j && L(p, j)
                  },
                  onFocus: () => k(!0),
                  placeholder: m(z.search_placeholder),
                  ref: h,
                  enterKeyHint: "search",
                  maxLength: n,
                  min: a,
                  max: n
                })
              }), g && y && (0, v.jsx)(C.IconButton, {
                onClick: () => k(!1),
                appearance: "ghost",
                icon: "X",
                size: "MD",
                label: m(z.search_close_button)
              })]
            }), T]
          })
        }),
        ha = ({
          children: e
        }) => {
          const {
            formatMessage: a
          } = (0, d.A)();
          return (0, v.jsx)("div", {
            className: "_11eee6mi",
            role: "radiogroup",
            "aria-label": a(z.search_categories),
            children: e
          })
        },
        ma = (0, t.forwardRef)(function({
          children: e,
          value: a,
          title: n,
          active: r,
          hasChevron: i,
          ...o
        }, l) {
          const {
            setSearchTarget: c,
            searchTarget: d
          } = (0, t.useContext)(ca), {
            inSearchTargetDropdown: u,
            setRootSearchTarget: h,
            rootSearchTarget: m
          } = (0, t.useContext)(va), g = t => {
            c?.(t), u && "string" == typeof e && h({
              key: a,
              title: n
            })
          }, f = r || Boolean(d) && (d === a || d === m.key);
          return u ? (0, v.jsx)("button", {
            ref: l,
            type: "button",
            className: (0, s.default)("_11eee6mq", {
              [ia]: f
            }),
            onClick: () => g(a),
            value: a,
            ...o,
            role: "radio",
            "aria-checked": f,
            children: e
          }) : (0, v.jsx)(C.Tag.Root, {
            className: "_11eee6mj",
            color: f ? "monochrome" : "grey",
            size: "LG",
            background: "static",
            onClick: () => g(a),
            hasBorder: !1,
            ...o,
            asChild: !0,
            children: (0, v.jsxs)("button", {
              type: "button",
              ref: l,
              value: a,
              role: "radio",
              "aria-checked": f,
              children: [(0, v.jsx)(C.Tag.Label, {
                asChild: !0,
                children: (0, v.jsx)(C.Body, {
                  size: "MD",
                  appearance: "bold",
                  children: e
                })
              }), i && (0, v.jsx)(C.Tag.Icon, {
                className: "_11eee6mo",
                label: "",
                icon: "ChevronDown"
              })]
            })
          })
        }),
        va = (0, t.createContext)({
          inSearchTargetDropdown: !1,
          rootSearchTarget: {
            key: "",
            title: ""
          },
          setRootSearchTarget: () => {}
        }),
        ga = ({
          title: e,
          children: a
        }) => {
          const [n, s] = (0, t.useState)(!1), [r, i] = (0, t.useState)({
            key: "",
            title: ""
          }), {
            searchTarget: o
          } = (0, t.useContext)(ca), {
            avatarMenuOpened: l
          } = (0, t.useContext)(F);
          o !== r.key && "" !== r.key && i({
            key: "",
            title: ""
          });
          const c = !l && n;
          return (0, v.jsxs)(N.Root, {
            open: c,
            onOpenChange: s,
            children: [(0, v.jsx)(N.Trigger, {
              asChild: !0,
              children: (0, v.jsx)(ma, {
                value: e,
                title: e,
                active: !!r.key,
                hasChevron: !0,
                children: r.title || e
              })
            }), (0, v.jsx)(va.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: r,
                setRootSearchTarget: e => {
                  i(a => "function" == typeof e ? e(a) : e), s(!1)
                }
              },
              children: (0, v.jsx)(N.Content, {
                align: "start",
                className: "_11eee6mp _1r3j5az0 _11eee6mn",
                children: a
              })
            })]
          })
        },
        fa = (0, t.forwardRef)(function({
          errorMessage: e
        }, a) {
          return e && (0, v.jsx)("div", {
            ref: a,
            className: "_11eee6m2",
            "aria-live": "polite",
            children: e
          })
        }),
        pa = ({
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
          return (0, v.jsx)("a", {
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
        Ma = "_13sb4ht4";
      const ba = () => (0, v.jsx)("div", {
        className: "_13sb4ht2",
        children: (0, v.jsx)("svg", {
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [xa, Ma, ""].map((e, a) => (0, v.jsx)("path", {
            className: e,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.61511 10.9978H12.5848C14.3845 10.9978 15.9421 10.4507 15.9421 8.44939C15.9421 6.86148 14.5745 6.52423 13.2595 6.52423H9.56608L8.61511 10.9978ZM24.3357 21.6949H30.6663L24.9533 25.6406L25.8771 31.8581L20.9272 28.1057L14.2842 32.0001L17.3902 25.4102C17.3902 25.4102 13.7775 21.6513 13.7803 21.6513C13.5374 21.3314 13.4563 20.5073 13.4563 20.1527C13.4563 19.7045 13.4849 19.2505 13.5155 18.7669C13.5503 18.2159 13.5875 17.6266 13.5875 16.9637C13.5875 15.3278 12.8632 14.4723 11.0925 14.4723H7.77269L6.32717 21.2249H1.33301L5.30462 2.66675H14.7029C18.1954 2.66675 20.861 3.52407 20.861 7.47735C20.861 10.2601 19.4884 12.2367 16.4605 12.6517V12.7051C17.8843 13.0428 18.4177 14.0037 18.4177 15.7946C18.4177 16.5095 18.3959 17.1369 18.3754 17.7271C18.3572 18.2511 18.34 18.7456 18.34 19.246C18.34 19.8873 18.507 20.9355 18.9277 21.6513H19.6215L23.3316 15.4672L24.3357 21.6949ZM23.5498 22.6019H27.7512L23.9634 25.217L24.6402 29.7765L20.9957 27.0111L16.3688 29.7218L18.4869 25.2341L15.9114 22.5578H20.1458L22.8244 18.093L23.5498 22.6019Z",
            fill: "currentcolor"
          }, e + a))
        })
      });
      var ja = "corzs33";
      const _a = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        Ca = ({
          quickAccessHidden: e,
          children: a,
          href: n,
          onNavigate: r
        }) => {
          const i = (0, d.A)(),
            [o, l] = (0, t.useState)(!1),
            c = (0, t.useRef)(null),
            [u, h] = (0, t.useState)(!1),
            {
              brand: m,
              brandTitle: g,
              isNavHidden: f,
              simpleMenu: p
            } = (0, t.useContext)(F),
            x = n || "/";
          return (0, t.useEffect)(() => {
            l(!1)
          }, [f, e]), (0, t.useEffect)(() => {
            const e = () => {
              const e = c.current?.getBoundingClientRect().width || 0,
                a = c.current?.children;
              Array.from(Array(a?.length)).reduce((e, n, t) => e + a?.item(t)?.getBoundingClientRect().width, 0) + 60 >= e ? h(!1) : h(!0)
            };
            return g ? (e(), window.addEventListener("resize", e)) : (h(!1), window.removeEventListener("resize", e)), () => {
              window.removeEventListener("resize", e)
            }
          }, [g]), (0, v.jsxs)("div", {
            className: "corzs30",
            children: [(0, v.jsx)(ee, {
              showOn: "desktop",
              children: (0, v.jsxs)("div", {
                className: "corzs31",
                children: [(0, v.jsxs)("div", {
                  className: ja,
                  children: [!a && (0, v.jsx)(pa, {
                    to: x,
                    "aria-label": i.formatMessage(z.nav_rockstargames_home),
                    onNavigate: r,
                    className: "corzs39",
                    children: (0, v.jsx)(ba, {})
                  }), a && (0, v.jsxs)(N.Root, {
                    open: o,
                    onOpenChange: l,
                    children: [(0, v.jsx)(ee, {
                      showOn: "desktop",
                      children: (0, v.jsx)(N.Trigger, {
                        asChild: !0,
                        children: (0, v.jsx)("button", {
                          type: "button",
                          className: "corzs38",
                          "aria-label": i.formatMessage(z.nav_rockstargames_logo),
                          children: (0, v.jsx)(ba, {})
                        })
                      })
                    }), (0, v.jsx)(b.AnimatePresence, {
                      children: o && (0, v.jsx)(ee, {
                        showOn: "desktop",
                        children: (0, v.jsx)(N.Content, {
                          forceMount: !0,
                          align: "start",
                          sideOffset: 24,
                          children: (0, v.jsx)(b.motion.div, {
                            className: "corzs3a",
                            variants: _a,
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
                }), (m || g) && (0, v.jsxs)("div", {
                  className: "corzs34",
                  children: [(0, v.jsx)("div", {
                    className: "corzs35"
                  }), m && (0, v.jsx)("div", {
                    className: "corzs36",
                    children: m
                  }), g && (0, v.jsx)(C.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: g
                  })]
                })]
              })
            }), (0, v.jsx)(ee, {
              showOn: "mobile",
              children: (0, v.jsxs)("div", {
                className: "corzs32",
                ref: c,
                children: [(0, v.jsx)("div", {
                  className: ja,
                  children: (!m || p) && (0, v.jsx)(pa, {
                    to: x,
                    "aria-label": i.formatMessage(z.nav_rockstargames_home),
                    onNavigate: r,
                    className: (0, s.clsx)("corzs39", {
                      corzs3b: u
                    }),
                    children: (0, v.jsx)(ba, {})
                  })
                }), (m || g) && (0, v.jsxs)("div", {
                  className: (0, s.clsx)("corzs34", {
                    corzs3b: g && !u
                  }),
                  children: [p && (0, v.jsx)("div", {
                    className: "corzs35"
                  }), m && (0, v.jsx)("div", {
                    className: "corzs36",
                    children: m
                  }), g && (0, v.jsx)(C.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: g
                  })]
                })]
              })
            })]
          })
        },
        Na = {
          MenuContext: Oe,
          HiddenMenuContext: Ie,
          SubMenuContext: We,
          MobileMenuContext: ie,
          GlobalNavigationContext: F
        }
    }
  }
]);