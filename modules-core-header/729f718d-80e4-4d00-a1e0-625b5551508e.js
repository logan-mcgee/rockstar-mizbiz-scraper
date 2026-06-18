try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "729f718d-80e4-4d00-a1e0-625b5551508e", e._sentryDebugIdIdentifier = "sentry-dbid-729f718d-80e4-4d00-a1e0-625b5551508e")
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
  [1282], {
    11282(e, a, n) {
      n.r(a), n.d(a, {
        Actions: () => sa,
        AvatarMenu: () => be,
        AvatarMenuLanguageLabel: () => ye,
        AvatarMenuSection: () => _e,
        AvatarMenuSectionContent: () => Ce,
        AvatarMenuSectionHeader: () => je,
        AvatarMenuSectionHeaderDropdown: () => Ne,
        Breakpoint: () => ae,
        CallToAction: () => ra,
        Contexts: () => ya,
        Header: () => F,
        Menu: () => Te,
        MenuContent: () => Ze,
        MenuIcon: () => Ke,
        MenuItem: () => ze,
        MenuLink: () => Je,
        MenuList: () => Ee,
        MenuSub: () => We,
        MenuTrigger: () => Pe,
        MobileMenu: () => le,
        MobileMenuNav: () => oe,
        QuickMenu: () => Se,
        Root: () => Z,
        Search: () => ca,
        SearchBar: () => ha,
        SearchContainer: () => ua,
        SearchError: () => xa,
        SearchFilters: () => ma,
        SearchTarget: () => va,
        SearchTargetDropdown: () => fa,
        SiteTitle: () => Ca
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
        o = n(4637),
        i = n(81270),
        l = n(31589),
        c = n(30212),
        d = n(14376),
        u = n(51177),
        h = n(40949),
        m = n(68925);

      function v(e) {
        var a = (0, m.A)(),
          n = a.formatMessage,
          t = a.textComponent,
          s = void 0 === t ? o.Fragment : t,
          r = e.id,
          i = e.description,
          l = e.defaultMessage,
          c = e.values,
          d = e.children,
          u = e.tagName,
          h = void 0 === u ? s : u,
          v = n({
            id: r,
            description: i,
            defaultMessage: l
          }, c, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof d ? d(Array.isArray(v) ? v : [v]) : h ? o.createElement(h, null, v) : o.createElement(o.Fragment, null, v)
      }
      v.displayName = "FormattedMessage";
      var g = o.memo(v, function(e, a) {
        var n = e.values,
          t = (0, u.Tt)(e, ["values"]),
          s = a.values,
          r = (0, u.Tt)(a, ["values"]);
        return (0, h.bN)(s, n) && (0, h.bN)(t, r)
      });
      g.displayName = "MemoizedFormattedMessage";
      const f = g;
      var x = n(39793),
        p = (n(59066), n(33920)),
        b = n(20640),
        M = n(18552),
        _ = n(27937),
        j = n(66760),
        N = n(30740),
        C = (n(21423), n(13517)),
        y = n(80676),
        k = n(19563),
        S = n(47584),
        w = n(46929),
        O = n(58754),
        I = n(34364),
        L = n(59236),
        T = n(31821),
        E = n(39080),
        A = n(80692);
      const z = {
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
      var P = (0, d.YK)({
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
        const e = (0, o.useRef)(null);
        return (0, x.jsx)("button", {
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
          children: (0, x.jsx)(f, {
            ...P.accessibility_skip_button
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

      function q(e, a) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          a && (t = t.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
          })), n.push.apply(n, t)
        }
        return n
      }

      function H(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {};
          a % 2 ? q(Object(n), !0).forEach(function(a) {
            var t, s, r;
            t = e, s = a, r = n[a], (s = D(s)) in t ? Object.defineProperty(t, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[s] = r
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
          })
        }
        return e
      }

      function B(e, a) {
        var n = {};
        for (var t in e) n[t] = a(e[t], t);
        return n
      }
      var G = (e, a, n) => {
          for (var t of Object.keys(e)) {
            var s;
            if (e[t] !== (null !== (s = a[t]) && void 0 !== s ? s : n[t])) return !1
          }
          return !0
        },
        Q = e => {
          var a = a => {
            var n = e.defaultClassName,
              t = H(H({}, e.defaultVariants), a);
            for (var s in t) {
              var r, o = null !== (r = t[s]) && void 0 !== r ? r : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[s][i];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) G(c, t, e.defaultVariants) && (n += " " + d);
            return n
          };
          return a.variants = () => Object.keys(e.variantClassNames), a.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return B(e.variantClassNames, e => B(e, e => e.split(" ")[0]))
            }
          }, a
        },
        Y = Q({
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
      const F = ({
          children: e
        }) => {
          const {
            simpleMenu: a
          } = (0, o.useContext)(V);
          return (0, x.jsx)("header", {
            className: (0, i.default)(Y({
              layout: a ? "simple" : "default"
            }), "ut2qrfa"),
            children: e
          })
        },
        V = (0, o.createContext)({
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
        Z = (U = ({
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
          const [h, m] = (0, o.useState)(!1), [v, g] = (0, o.useState)(!0), [f, p] = (0, o.useState)(!1), [b, M] = (0, o.useState)(!1), [_, j] = (0, o.useState)(!1), N = (0, o.useRef)(null), C = (0, o.useRef)(null), [y, k] = (0, o.useState)(null), [S, w] = (0, o.useState)(r), O = (0, o.useMemo)(() => "visible" !== c && ("hidden" === c || h), [h, c]);
          (0, o.useEffect)(() => {
            let e = window.scrollY;
            const a = () => {
                const a = window.scrollY > 140,
                  n = window.scrollY > e;
                m(a && n), e = window.scrollY
              },
              n = () => {
                g(0 === window.scrollY)
              };
            return window.addEventListener("scroll", a), window.addEventListener("scroll", n), () => {
              window.removeEventListener("scroll", a), window.removeEventListener("scroll", n)
            }
          }, []), (0, o.useEffect)(() => {
            const e = "data-show-more-content",
              a = C.current,
              n = () => {
                const n = !a?.contains(document.activeElement);
                O && n ? document.body.setAttribute(e, "") : document.body.removeAttribute(e)
              };
            return n(), document.addEventListener("focusin", n), document.addEventListener("focusout", n), () => {
              document.removeEventListener("focusin", n), document.removeEventListener("focusout", n), document.body.removeAttribute(e)
            }
          }, [O, C]), (0, o.useEffect)(() => {
            const e = e => {
              m(e.detail.isHidden)
            };
            return window.addEventListener("header:hideNav", e), () => {
              window.removeEventListener("header:hideNav", e)
            }
          }, []);
          const I = !v || r || S ? "dark" : s;
          return (0, x.jsx)("div", {
            id: "global-nav-root",
            className: "siteHeaderContainer",
            children: (0, x.jsx)("div", {
              ref: k,
              children: y && (0, x.jsx)(l.NP, {
                colorScheme: I,
                defaultColorScheme: I,
                defaultPlatformScale: "desktop",
                container: y,
                locale: u,
                children: (0, x.jsx)(V.Provider, {
                  value: {
                    brand: a,
                    brandTitle: n,
                    isNavHidden: O,
                    containerRef: N,
                    navContentRef: C,
                    simpleMenu: d,
                    setForceBackground: w,
                    avatarMenuOpened: f,
                    setAvatarMenuOpened: p,
                    mainMenuOpened: b,
                    setMainMenuOpened: M,
                    searchBarOpened: _,
                    setSearchBarOpened: j,
                    locale: u
                  },
                  children: (0, x.jsxs)("div", {
                    className: (0, i.default)("ut2qrf1", "ut2qrf0"),
                    ref: N,
                    lang: u,
                    "data-scroll-top": v,
                    "data-color-mode": t,
                    "data-theme": I,
                    "data-force-background": r || S,
                    children: [(0, x.jsx)(R, {}), (0, x.jsx)("div", {
                      className: "ut2qrf2"
                    }), (0, x.jsxs)("div", {
                      ref: C,
                      className: "ut2qrf5",
                      "data-ishidden": O,
                      "data-testid": "globalnav__container",
                      children: [(0, x.jsx)("canvas", {
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
          const [a, n] = (0, o.useState)();
          return (0, o.useEffect)(() => {
            (async () => {
              n(await (async e => await (async e => {
                return {
                  rsLocale: e,
                  locale: e,
                  messages: (a = z[e], {
                    ...a
                  })
                };
                var a
              })(e))(e.locale))
            })()
          }, []), (0, x.jsx)(c.A, {
            locale: a?.locale || "en-US",
            messages: {
              ...a?.messages
            },
            children: a && (0, x.jsx)(U, {
              ...e
            })
          }, "intl-provider")
        });
      var U, W = Q({
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
        K = Q({
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
        J = "_1pgq6b1f",
        X = r({
          desktop: () => $,
          mobile: () => ee
        }),
        $ = "dsroxs1",
        ee = "dsroxs0";
      const ae = ({
          showOn: e,
          ...a
        }) => (0, x.jsx)(_.Slot, {
          className: e ? X[e] : "",
          ...a
        }),
        ne = {
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
        te = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        };
      var se = "vkitevd";
      const re = (0, o.createContext)({
          openedNav: ""
        }),
        oe = ({
          children: e
        }) => {
          const [a, n] = (0, o.useState)("");
          return (0, x.jsx)(re.Provider, {
            value: {
              openedNav: a
            },
            children: (0, x.jsx)(p.Root, {
              value: a,
              onValueChange: n,
              children: (0, x.jsx)(p.List, {
                className: "vkitev1",
                children: e
              })
            })
          })
        },
        ie = (0, o.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        le = ({
          children: e
        }) => {
          const a = (0, m.A)(),
            [n, t] = (0, o.useState)(!1),
            [s, r] = (0, o.useState)(!1),
            [l, c] = (0, o.useState)(!1),
            {
              brand: d,
              setForceBackground: u,
              simpleMenu: h
            } = (0, o.useContext)(V);
          (0, o.useEffect)(() => {
            n && u(!0)
          }, [n]), (0, o.useEffect)(() => {
            const e = e => {
              const a = e?.target;
              n && a.innerWidth >= 1024 && g()
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [n]);
          const v = {
              show: {
                height: `calc(100dvh - ${(0,N.us)("var(--k8we7i6)","0px")})`,
                paddingBottom: n && d ? "var(--k8we7i0)" : "",
                transition: {
                  ...ne.hamburgerOpen,
                  delay: .2,
                  staggerChildren: .15
                }
              },
              hidden: {
                height: 0,
                paddingBottom: 0,
                transition: ne.hamburgerClose
              }
            },
            g = () => {
              t(!n), r(!1)
            };
          return h ? null : (0, x.jsx)(ie.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                t(!1)
              },
              setHasQuickMenu: c
            },
            children: (0, x.jsxs)(y.Root, {
              open: n,
              onOpenChange: t,
              children: [(0, x.jsx)(ae, {
                showOn: "mobile",
                children: (0, x.jsx)(ce, {
                  onClick: g,
                  isMenuOpen: n
                })
              }), (0, x.jsx)(C.AnimatePresence, {
                onExitComplete: () => u(!1),
                children: n && (0, x.jsx)(ae, {
                  showOn: "mobile",
                  children: (0, x.jsxs)(C.motion.div, {
                    className: "vkiteve",
                    variants: v,
                    animate: "show",
                    initial: "hidden",
                    exit: "hidden",
                    children: [(0, x.jsx)(y.Overlay, {
                      className: "vkiteva"
                    }), (0, x.jsx)(y.Content, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => t(!1),
                      children: (0, x.jsxs)(C.motion.div, {
                        className: (0, i.default)((0, M.m)("dark"), "vkitev4", "vkitev7"),
                        variants: v,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, x.jsxs)(k.VisuallyHidden, {
                          children: [(0, x.jsx)(y.Title, {
                            children: a.formatMessage(P.nav_mobilemenu_title)
                          }), (0, x.jsx)(y.Description, {
                            children: a.formatMessage(P.nav_mobilemenu_title)
                          })]
                        }), (0, x.jsx)("div", {
                          className: (0, i.default)(s ? "vkitev9" : "", "vkitev6"),
                          children: (0, x.jsx)(C.motion.div, {
                            className: (0, i.default)("vkitev0", l ? "vkitev8" : ""),
                            children: o.Children.map(e, e => (0, x.jsx)(C.motion.div, {
                              variants: te,
                              transition: ne.staggerFade,
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
        ce = ({
          className: e,
          isMenuOpen: a,
          ...n
        }) => {
          const t = (0, m.A)();
          return (0, x.jsx)("div", {
            className: (0, i.default)("vkitevb", e),
            children: (0, x.jsxs)(y.Trigger, {
              title: t.formatMessage(a ? P.nav_mobilemenu_close : P.nav_mobilemenu_open),
              type: "button",
              className: "vkitevc",
              "data-testid": "hamburgerNav",
              ...n,
              children: [(0, x.jsx)("span", {
                className: se,
                "data-opened": a
              }), (0, x.jsx)("span", {
                className: se,
                "data-opened": a
              }), (0, x.jsx)("span", {
                className: se,
                "data-opened": a
              })]
            })
          })
        },
        de = (...e) => {
          const a = e.filter(Boolean);
          return a.length <= 1 ? a[0] || null : function(e) {
            for (const n of a) "function" == typeof n ? n(e) : n && (n.current = e)
          }
        },
        ue = ({
          children: e,
          className: a,
          ...n
        }) => {
          const {
            containerRef: t,
            locale: s
          } = (0, o.useContext)(V);
          return (0, x.jsx)(l.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            locale: s,
            children: (0, x.jsx)(I.Root, {
              className: (0, i.default)("g1xx1x0 ut2qrf0", a),
              container: t?.current,
              ...n,
              children: e
            })
          })
        };
      var he = "m27a3y7",
        me = s((e, a) => {
          a.exports = "PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgcng9IjIyIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjE1Ii8+DQo8cGF0aCBkPSJNMjkuMzMzNCAzMC4yNVYyOC40MTY3QzI5LjMzMzQgMjcuNDQ0MiAyOC45NDcxIDI2LjUxMTYgMjguMjU5NSAyNS44MjM5QzI3LjU3MTggMjUuMTM2MyAyNi42MzkyIDI0Ljc1IDI1LjY2NjcgMjQuNzVIMTguMzMzNEMxNy4zNjEgMjQuNzUgMTYuNDI4MyAyNS4xMzYzIDE1Ljc0MDcgMjUuODIzOUMxNS4wNTMxIDI2LjUxMTYgMTQuNjY2NyAyNy40NDQyIDE0LjY2NjcgMjguNDE2N1YzMC4yNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0yMS45OTk5IDIxLjA4MzNDMjQuMDI1IDIxLjA4MzMgMjUuNjY2NiAxOS40NDE3IDI1LjY2NjYgMTcuNDE2N0MyNS42NjY2IDE1LjM5MTYgMjQuMDI1IDEzLjc1IDIxLjk5OTkgMTMuNzVDMTkuOTc0OSAxMy43NSAxOC4zMzMzIDE1LjM5MTYgMTguMzMzMyAxNy40MTY3QzE4LjMzMzMgMTkuNDQxNyAxOS45NzQ5IDIxLjA4MzMgMjEuOTk5OSAyMS4wODMzWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K"
        });
      const ve = (0, o.createContext)({
          inAvatarMenu: !1,
          avatarMenuOpenItems: ["open"],
          closeAvatarMenu: () => {}
        }),
        ge = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        fe = {
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
        xe = {
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
        }) => (0, x.jsx)("div", {
          className: (0, i.default)("m27a3y1", a),
          children: e
        }),
        be = ({
          avatarIconUrl: e,
          nickname: a,
          isLoggedIn: n,
          children: t,
          onOpenChange: s
        }) => {
          const r = (0, m.A)(),
            i = me(),
            [l, c] = (0, o.useState)(["open"]),
            {
              isNavHidden: d,
              setAvatarMenuOpened: u,
              mainMenuOpened: h,
              setMainMenuOpened: v
            } = (0, o.useContext)(V),
            [g, f] = (0, o.useState)(!1),
            [p, b] = (0, o.useState)(!1),
            [_, j] = (0, o.useState)(d),
            N = () => {
              f(!1), b(!1)
            };
          _ !== d && (j(d), d && N());
          const I = e => {
            c(["open", ...e.filter(e => "open" !== e)])
          };
          return (0, o.useEffect)(() => {
            const e = g || p;
            e && h && v(!1), u(e)
          }, [g, p, h, v, u]), (0, x.jsxs)(ve.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: l,
              closeAvatarMenu: N
            },
            children: [(0, x.jsx)(w.Root, {
              open: g,
              onOpenChange: e => {
                s?.(e), f(e)
              },
              modal: !1,
              children: (0, x.jsx)(ae, {
                showOn: "desktop",
                children: (0, x.jsxs)(pe, {
                  children: [(0, x.jsx)(w.Trigger, {
                    asChild: !0,
                    children: (0, x.jsx)(S.IconButton, {
                      size: "SM",
                      label: r.formatMessage(g ? P.avatar_menu_close : P.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: he,
                      "aria-label": r.formatMessage(g ? P.avatar_menu_close : P.avatar_menu_open),
                      "data-testid": "avatarMenuButtonDesktop",
                      "data-logged-in": n,
                      children: e && (0, x.jsx)("img", {
                        className: "m27a3y8",
                        src: e || i,
                        alt: a
                      })
                    })
                  }), (0, x.jsx)(C.AnimatePresence, {
                    children: g && (0, x.jsx)(w.Content, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      onOpenAutoFocus: e => e.preventDefault(),
                      className: (0, M.m)("dark"),
                      children: (0, x.jsx)(C.motion.div, {
                        variants: ge,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, x.jsx)(O.Root, {
                          type: "multiple",
                          value: l,
                          onValueChange: I,
                          children: (0, x.jsx)(We, {
                            className: "m27a3y2 _1r3j5az0",
                            children: t
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, x.jsx)(y.Root, {
              open: p,
              onOpenChange: e => {
                s?.(e), b(e)
              },
              children: (0, x.jsx)(ae, {
                showOn: "mobile",
                children: (0, x.jsxs)(pe, {
                  children: [(0, x.jsx)(y.Trigger, {
                    className: he,
                    "aria-label": r.formatMessage(p ? P.avatar_menu_close : P.avatar_menu_open),
                    "data-testid": "avatarMenuButtonMobile",
                    asChild: !0,
                    "data-logged-in": n,
                    children: (0, x.jsx)(S.IconButton, {
                      size: "SM",
                      label: r.formatMessage(g ? P.avatar_menu_close : P.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: he,
                      "aria-label": r.formatMessage(g ? P.avatar_menu_close : P.avatar_menu_open),
                      children: e && (0, x.jsx)("img", {
                        className: "m27a3y8",
                        src: e || i
                      })
                    })
                  }), (0, x.jsx)(C.AnimatePresence, {
                    children: p && (0, x.jsx)(ue, {
                      asChild: !0,
                      children: (0, x.jsxs)(y.Content, {
                        forceMount: !0,
                        className: (0, M.m)("dark"),
                        children: [(0, x.jsxs)(k.VisuallyHidden, {
                          children: [(0, x.jsx)(y.Title, {
                            children: r.formatMessage(P.nav_avatarmenu_title)
                          }), (0, x.jsx)(y.Description, {
                            children: r.formatMessage(P.nav_avatarmenu_title)
                          })]
                        }), (0, x.jsxs)(C.motion.div, {
                          variants: xe,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: "m27a3y3",
                          children: [(0, x.jsx)(y.Close, {
                            className: "m27a3y5",
                            "aria-label": r.formatMessage(P.avatar_menu_close),
                            children: (0, x.jsx)("div", {
                              className: "m27a3y6"
                            })
                          }), (0, x.jsx)(O.Root, {
                            type: "multiple",
                            value: l,
                            onValueChange: I,
                            children: (0, x.jsx)(We, {
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
        Me = (0, o.createContext)({
          avatarMenuItemId: ""
        }),
        _e = ({
          children: e,
          value: a
        }) => {
          const n = (0, o.useId)();
          return (0, x.jsx)(Me.Provider, {
            value: {
              avatarMenuItemId: a || n
            },
            children: (0, x.jsx)(O.Item, {
              value: a || n,
              className: "m27a3y9",
              children: e
            })
          })
        },
        je = ({
          children: e,
          ...a
        }) => (0, x.jsx)(O.Header, {
          asChild: !0,
          children: (0, x.jsx)("li", {
            className: "m27a3y0",
            children: (0, x.jsx)(O.Trigger, {
              className: "m27a3ya",
              ...a,
              children: e
            })
          })
        }),
        Ne = ({
          children: e,
          ...a
        }) => (0, x.jsx)(O.Header, {
          style: {
            margin: 0
          },
          children: (0, x.jsxs)(O.Trigger, {
            className: "m27a3yb",
            "data-testid": "header-language-selector-button",
            ...a,
            children: [e, (0, x.jsx)(j.ChevronDown, {
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
          } = (0, o.useContext)(ve), {
            avatarMenuItemId: t
          } = (0, o.useContext)(Me), s = n.indexOf(t) >= 0;
          return (0, x.jsx)(O.Content, {
            forceMount: !0,
            asChild: !0,
            ...a,
            children: (0, x.jsx)(C.motion.div, {
              variants: fe,
              initial: "closed",
              animate: s ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: e
            })
          })
        },
        ye = ({
          children: e,
          ...a
        }) => (0, x.jsx)("div", {
          className: "m27a3yd",
          ...a,
          children: e
        }),
        ke = (0, o.createContext)({
          inQuickMenu: !1
        }),
        Se = ({
          children: e
        }) => {
          const {
            inMobileMenu: a,
            setHasQuickMenu: n
          } = (0, o.useContext)(ie), t = {
            hidden: {
              opacity: 0,
              y: "100%",
              transition: ne.hamburgerClose
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                ...ne.hamburgerOpen,
                staggerChildren: .15,
                delay: ne.hamburgerOpen.duration && .8 * ne.hamburgerOpen.duration,
                delayChildren: .15
              }
            }
          }, s = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: ne.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: ne.staggerFade
            }
          }, r = (0, i.default)((0, M.m)("dark"), "_1xtz6n0");
          return (0, o.useEffect)(() => (n?.(!0), () => {
            n?.(!1)
          }), []), a ? (0, x.jsx)(ke.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, x.jsx)(p.Root, {
              asChild: !0,
              children: (0, x.jsx)(C.motion.div, {
                variants: t,
                className: r,
                children: o.Children.map(e, e => (0, x.jsx)(C.motion.li, {
                  variants: s,
                  className: "_1xtz6n1",
                  children: e
                }))
              })
            })
          }) : (0, x.jsx)(ke.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, x.jsx)(p.Root, {
              asChild: !0,
              children: (0, x.jsx)("div", {
                className: r,
                children: e
              })
            })
          })
        },
        we = e => {
          e.preventDefault()
        },
        Oe = e => {
          e.nativeEvent.repeat && e.preventDefault()
        },
        Ie = (0, o.createContext)({
          inMenu: !1,
          openedNav: "",
          setOpenedNav: e => {}
        }),
        Le = (0, o.createContext)({
          isHidden: !1
        }),
        Te = ({
          children: e
        }) => {
          const a = (0, m.A)(),
            [n, t] = (0, o.useState)(""),
            [s, r] = (0, o.useState)(e),
            [i, l] = (0, o.useState)([]),
            c = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            {
              isNavHidden: u,
              mainMenuOpened: h,
              avatarMenuOpened: v,
              setMainMenuOpened: g
            } = (0, o.useContext)(V),
            {
              inAvatarMenu: f
            } = (0, o.useContext)(ve),
            b = (0, o.useCallback)(() => {
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
                i = s.filter(e => e !== t).length,
                c = s.findIndex(e => e > t);
              let u = c;
              if (c > 0 && (u = c - 2), i) {
                const a = [],
                  n = [];
                o.Children.forEach(e, (e, t) => {
                  t < u ? a.push(e) : n.push(e)
                }), a && r(a), n && l(n)
              } else r(e), l([])
            }, [e, d?.current]);
          (0, o.useEffect)(() => {
            const e = new ResizeObserver(b);
            return d?.current && e.observe(d.current), () => {
              d?.current && e.unobserve(d.current)
            }
          }, [e, d?.current]), (0, o.useEffect)(() => {
            t("")
          }, [u]), (0, o.useEffect)(() => {
            const e = () => t("");
            return window.addEventListener("scroll", e), () => {
              window.removeEventListener("scroll", e)
            }
          }, []), (0, o.useEffect)(() => {
            h || "" === n || t("")
          }, [h]), (0, o.useEffect)(() => {
            g("" !== n)
          }, [n, v, h, f]);
          const M = W({
              visibility: "visible"
            }),
            _ = W({
              visibility: "hidden"
            });
          return (0, x.jsx)(Ie.Provider, {
            value: {
              inMenu: !0,
              openedNav: n,
              setOpenedNav: t
            },
            children: (0, x.jsx)(ae, {
              showOn: "desktop",
              children: (0, x.jsxs)(p.Root, {
                className: "_1pgq6b10",
                value: n,
                onValueChange: t,
                children: [(0, x.jsxs)(Ee, {
                  ref: c,
                  className: M,
                  children: [s, i?.length > 0 && (0, x.jsxs)(ze, {
                    children: [(0, x.jsx)(Pe, {
                      "data-testid": "navMore",
                      children: a.formatMessage(P.nav_more_dropdown)
                    }), (0, x.jsx)(Ze, {
                      children: (0, x.jsx)(We, {
                        children: (0, x.jsx)(Ee, {
                          children: i
                        })
                      })
                    })]
                  })]
                }), (0, x.jsx)("div", {
                  className: "_1pgq6b14",
                  children: (0, x.jsx)(Ee, {
                    ref: d,
                    className: _,
                    "aria-hidden": "true",
                    children: (0, x.jsx)(Le.Provider, {
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
        Ee = (0, o.forwardRef)(function({
          children: e,
          className: a,
          ...n
        }, t) {
          return (0, x.jsx)(p.List, {
            ref: t,
            className: (0, i.default)("_1pgq6b1e", a),
            ...n,
            children: e
          })
        }),
        Ae = (0, o.createContext)({
          value: ""
        }),
        ze = (0, o.forwardRef)(function({
          testId: e,
          children: a,
          ...n
        }, t) {
          const {
            depth: s
          } = (0, o.useContext)(Ue), {
            inMobileMenu: r
          } = (0, o.useContext)(ie), l = (0, o.useRef)(null), c = `rsm-${(0,b.useId)()}`, d = "_1pgq6b15", u = "_1pgq6b16";
          return (0, x.jsx)(Ae.Provider, {
            value: {
              value: c,
              ref: l
            },
            children: (0, x.jsx)(p.Item, {
              value: c,
              ref: de(t, l),
              className: (0, i.default)({
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
        Pe = ({
          children: e,
          ...a
        }) => {
          const {
            inMenu: n
          } = (0, o.useContext)(Ie), {
            inAvatarMenu: t
          } = (0, o.useContext)(ve), {
            inQuickMenu: s
          } = (0, o.useContext)(ke), {
            inMobileMenu: r
          } = (0, o.useContext)(ie), {
            inSubMenu: i,
            depth: l
          } = (0, o.useContext)(Ue), c = {
            ...a,
            "data-menu-trigger": !0
          };
          return l > 1 ? (0, x.jsx)(Qe, {
            ...c,
            children: e
          }) : t ? (0, x.jsx)(He, {
            ...c,
            children: e
          }) : i ? (0, x.jsx)(Ge, {
            ...c,
            children: e
          }) : s ? (0, x.jsx)(Be, {
            ...c,
            children: e
          }) : r ? (0, x.jsx)(qe, {
            ...c,
            children: e
          }) : n ? (0, x.jsx)(De, {
            ...c,
            children: e
          }) : void 0
        },
        Re = e => {
          const a = (0, m.A)();
          return (0, x.jsx)(j.ChevronDown, {
            ...e,
            label: ` - ${a.formatMessage(P.nav_rockstargames_submenu_indicator)}`,
            className: "_1pgq6b1g"
          })
        },
        De = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...s
          } = e;
          return (0, x.jsxs)(p.Trigger, {
            onPointerMove: we,
            onPointerLeave: we,
            onKeyDown: Oe,
            onClick: t,
            className: (0, i.default)(J, K({
              context: "mainMenu"
            }), n),
            ...s,
            children: [a, (0, x.jsx)(Re, {})]
          })
        },
        qe = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...s
          } = e;
          return (0, x.jsxs)(p.Trigger, {
            onPointerMove: we,
            onPointerLeave: we,
            onClick: t,
            className: (0, i.default)(J, K({
              context: "mobileMenu"
            }), n),
            ...s,
            children: [a, (0, x.jsx)(Re, {
              size: "LG"
            })]
          })
        },
        He = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...s
          } = e;
          return (0, x.jsxs)(p.Trigger, {
            onPointerMove: we,
            onPointerLeave: we,
            onClick: t,
            className: (0, i.default)(J, K({
              context: "avatarMenu"
            }), n),
            ...s,
            children: [a, (0, x.jsx)(Re, {})]
          })
        },
        Be = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...s
          } = e;
          return (0, x.jsxs)(p.Trigger, {
            onPointerMove: we,
            onPointerLeave: we,
            onClick: t,
            className: (0, i.default)(J, K({
              context: "quickMenu"
            }), n),
            ...s,
            children: [a, (0, x.jsx)(Re, {})]
          })
        },
        Ge = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...s
          } = e;
          return (0, x.jsxs)(p.Trigger, {
            onPointerMove: we,
            onPointerLeave: we,
            onClick: t,
            className: (0, i.default)(J, K({
              context: "subMenu"
            }), n),
            ...s,
            children: [a, (0, x.jsx)(Re, {})]
          })
        },
        Qe = e => {
          const {
            children: a,
            className: n,
            onClick: t,
            ...s
          } = e;
          return (0, x.jsxs)(p.Trigger, {
            onPointerMove: we,
            onPointerLeave: we,
            onClick: t,
            className: (0, i.default)(J, K({
              context: "nestedMenu"
            }), n),
            ...s,
            children: [a, (0, x.jsx)(Re, {})]
          })
        },
        Ye = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        Fe = {
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
        Ve = {
          enter: {
            opacity: 1,
            zIndex: 101
          },
          exit: {
            opacity: 1,
            zIndex: 100
          }
        },
        Ze = (0, o.forwardRef)(function({
          children: e,
          animationOverride: a,
          ...n
        }, t) {
          const {
            navContentRef: s
          } = (0, o.useContext)(V), {
            inSubMenu: r,
            openedNav: l
          } = (0, o.useContext)(Ue), {
            openedNav: c
          } = (0, o.useContext)(Ie), {
            openedNav: d
          } = (0, o.useContext)(re), {
            value: u,
            ref: h
          } = (0, o.useContext)(Ae), {
            inMobileMenu: m
          } = (0, o.useContext)(ie), {
            isHidden: v
          } = (0, o.useContext)(Le), {
            inAvatarMenu: g
          } = (0, o.useContext)(ve), f = (0, o.useRef)(null), b = [l, c, d].includes(u);
          if ((0, o.useEffect)(() => {
              var e;
              b && f.current && (e = f.current, document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => e.disabled || e.hidden ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
              }).nextNode())?.focus()
            }, [b]), v) return null;
          const _ = "_1pgq6b18 _1r3j5az0 _1pgq6b17",
            j = "_1pgq6b19",
            N = "_1pgq6b1a",
            y = "_1pgq6b1b";
          return (0, x.jsx)(C.AnimatePresence, {
            children: b && (0, x.jsx)(p.Content, {
              ref: de(t, f),
              className: (0, i.default)((0, M.m)("dark"), {
                [_]: !m,
                [j]: m,
                [N]: r && !m,
                [y]: g
              }),
              onPointerEnter: we,
              onPointerLeave: we,
              onPointerDown: we,
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
              children: (0, x.jsx)(C.motion.div, {
                variants: a || r || m ? Fe : Ye,
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: ne.springOpen,
                className: "_1pgq6b1c",
                children: e
              })
            })
          })
        }),
        Ue = (0, o.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        We = (0, o.forwardRef)(function({
          children: e,
          ...a
        }, n) {
          const {
            depth: t
          } = (0, o.useContext)(Ue), {
            openedNav: s
          } = (0, o.useContext)(re), {
            isNavHidden: r
          } = (0, o.useContext)(V), [i, l] = (0, o.useState)("");
          (0, o.useEffect)(() => {
            l("")
          }, [s, r]);
          const c = t ? t + 1 : 1;
          return (0, x.jsx)(Ue.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: i,
              depth: c
            },
            children: (0, x.jsx)(p.Root, {
              ref: n,
              defaultValue: "",
              value: i,
              onValueChange: e => {
                l(e === i ? "" : e)
              },
              orientation: "vertical",
              className: "_1pgq6b1d",
              "data-depth": c,
              ...a,
              asChild: !0,
              children: (0, x.jsx)(C.motion.div, {
                variants: Ve,
                animate: "enter",
                initial: "exit",
                exit: "exit",
                transition: ne.quickFade,
                children: e
              })
            })
          })
        }),
        Ke = (0, o.forwardRef)(function({
          className: e,
          ...a
        }, n) {
          return (0, x.jsx)("img", {
            ref: n,
            className: (0, i.default)("_1pgq6b1p", e),
            ...a
          })
        }),
        Je = ({
          hasNotification: e,
          onClick: a,
          ...n
        }) => {
          const {
            inMenu: t,
            setOpenedNav: s
          } = (0, o.useContext)(Ie), {
            inAvatarMenu: r
          } = (0, o.useContext)(ve), {
            inQuickMenu: i
          } = (0, o.useContext)(ke), {
            inMobileMenu: l
          } = (0, o.useContext)(ie), {
            inSubMenu: c,
            depth: d
          } = (0, o.useContext)(Ue), u = {
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
          return d > 1 ? (0, x.jsx)(ta, {
            ...u
          }) : r ? (0, x.jsx)(na, {
            ...u
          }) : c ? (0, x.jsx)(aa, {
            ...u,
            hasNotification: e
          }) : i ? (0, x.jsx)(ea, {
            ...u
          }) : l ? (0, x.jsx)($e, {
            ...u
          }) : t ? (0, x.jsx)(Xe, {
            ...u
          }) : void 0
        },
        Xe = (0, o.forwardRef)(function({
          children: e,
          className: a,
          onSelect: n,
          external: t,
          asChild: s,
          ...r
        }, l) {
          const c = (0, m.A)(),
            {
              closeAvatarMenu: d
            } = (0, o.useContext)(ve),
            {
              closeMobileMenu: u
            } = (0, o.useContext)(ie),
            h = s ? _.Slot : "a",
            v = (0, i.default)(K({
              context: "mainMenu"
            }), a);
          return (0, x.jsx)(p.Link, {
            onSelect: e => {
              d?.(), u?.(), n?.(e)
            },
            className: v,
            asChild: !0,
            ...r,
            children: (0, x.jsxs)(h, {
              ref: l,
              children: [(0, x.jsx)(_.Slottable, {
                children: e
              }), t && (0, x.jsx)(j.ExternalLink, {
                label: c.formatMessage(P.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        $e = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: t,
          external: s,
          ...r
        }, l) {
          const {
            closeAvatarMenu: c
          } = (0, o.useContext)(ve), {
            closeMobileMenu: d
          } = (0, o.useContext)(ie), u = (0, i.default)(K({
            context: "mobileMenu"
          }), n), h = a ? _.Slot : "a";
          return (0, x.jsx)(p.Link, {
            asChild: !0,
            onSelect: e => {
              c?.(), d?.(), t?.(e)
            },
            ...r,
            children: (0, x.jsxs)(h, {
              ref: l,
              className: u,
              children: [(0, x.jsx)(_.Slottable, {
                children: e
              }), s && (0, x.jsx)(j.ExternalLink, {
                size: "LG",
                label: "",
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        ea = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: t,
          external: s,
          ...r
        }, l) {
          const c = (0, m.A)(),
            {
              closeAvatarMenu: d
            } = (0, o.useContext)(ve),
            {
              closeMobileMenu: u
            } = (0, o.useContext)(ie),
            h = (0, i.default)(K({
              context: "quickMenu"
            }), n),
            v = a ? _.Slot : "a";
          return (0, x.jsx)(p.Link, {
            asChild: !0,
            onSelect: e => {
              d?.(), u?.(), t?.(e)
            },
            ...r,
            children: (0, x.jsxs)(v, {
              ref: l,
              className: h,
              children: [(0, x.jsx)(_.Slottable, {
                children: e
              }), s && (0, x.jsx)(j.ExternalLink, {
                label: c.formatMessage(P.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        aa = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: t,
          external: s,
          hasNotification: r,
          ...l
        }, c) {
          const d = (0, m.A)(),
            {
              closeAvatarMenu: u
            } = (0, o.useContext)(ve),
            {
              closeMobileMenu: h
            } = (0, o.useContext)(ie),
            v = (0, i.default)(K({
              context: "subMenu"
            }), n, r ? ["_1pgq6b1q"] : null),
            g = a ? _.Slot : "a";
          return (0, x.jsx)(p.Link, {
            asChild: !0,
            onSelect: e => {
              u?.(), h?.(), t?.(e)
            },
            ...l,
            children: (0, x.jsxs)(g, {
              ref: c,
              className: v,
              children: [(0, x.jsx)(_.Slottable, {
                children: e
              }), s && (0, x.jsx)(j.ExternalLink, {
                label: d.formatMessage(P.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        na = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: t,
          external: s,
          ...r
        }, l) {
          const c = (0, m.A)(),
            {
              closeAvatarMenu: d
            } = (0, o.useContext)(ve),
            {
              closeMobileMenu: u
            } = (0, o.useContext)(ie),
            h = (0, i.default)(K({
              context: "avatarMenu"
            }), n),
            v = a ? _.Slot : "a";
          return (0, x.jsx)(p.Link, {
            asChild: !0,
            onSelect: e => {
              d?.(), u?.(), t?.(e)
            },
            ...r,
            children: (0, x.jsxs)(v, {
              ref: l,
              className: h,
              children: [(0, x.jsx)(_.Slottable, {
                children: e
              }), s && (0, x.jsx)(j.ExternalLink, {
                label: c.formatMessage(P.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        ta = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: t,
          external: s,
          ...r
        }, l) {
          const c = (0, m.A)(),
            {
              closeAvatarMenu: d
            } = (0, o.useContext)(ve),
            {
              closeMobileMenu: u
            } = (0, o.useContext)(ie),
            h = (0, i.default)(K({
              context: "nestedMenu"
            }), n),
            v = a ? _.Slot : "a";
          return (0, x.jsx)(p.Link, {
            asChild: !0,
            onSelect: e => {
              d?.(), u?.(), t?.(e)
            },
            ...r,
            children: (0, x.jsxs)(v, {
              ref: l,
              className: h,
              children: [(0, x.jsx)(_.Slottable, {
                children: e
              }), s && (0, x.jsx)(j.ExternalLink, {
                label: c.formatMessage(P.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        sa = ({
          children: e
        }) => (0, x.jsx)("div", {
          className: "ncorez0",
          children: e
        });
      const ra = (0, o.forwardRef)(function({
        children: e,
        dataTestId: a,
        onPress: n,
        ...t
      }, s) {
        const {
          inMobileMenu: r,
          closeMobileMenu: i
        } = (0, o.useContext)(ie), l = (0, L.mergeProps)({
          "data-testid": a,
          onPress: e => {
            n?.(e), i()
          },
          appearance: "secondary",
          size: (0, T.Ub)("(min-width: 1024px)") ? "SM" : "LG",
          className: "ey3skr0"
        }, t);
        return (0, x.jsx)("div", {
          className: r ? "ey3skr1" : "ey3skr2",
          children: (0, x.jsx)(S.Button, {
            ref: s,
            fullWidth: r,
            ...l,
            children: e
          })
        })
      });
      var oa = "_11eee6m7",
        ia = "_11eee6ml";
      const la = {
          open: {
            height: "auto",
            overflow: "hidden",
            transition: {
              ...ne.springClose,
              delay: .15
            }
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: ne.springClose
          }
        },
        ca = ({
          children: e,
          isSearchPage: a
        }) => {
          const {
            formatMessage: n
          } = (0, m.A)(), {
            isNavHidden: t,
            searchBarOpened: s,
            setSearchBarOpened: r,
            avatarMenuOpened: i
          } = (0, o.useContext)(V);
          (0, o.useEffect)(() => {
            r(a || !1)
          }, []), (0, o.useEffect)(() => {
            r(!1)
          }, [t]), (0, o.useEffect)(() => {
            i && r(!1)
          }, [i]);
          const l = !t && (a || s);
          return (0, x.jsx)(ae, {
            showOn: "desktop",
            children: (0, x.jsx)("div", {
              className: "_11eee6m0",
              children: (0, x.jsxs)(w.Root, {
                open: l,
                onOpenChange: r,
                children: [(0, x.jsx)(w.Trigger, {
                  asChild: !0,
                  children: (0, x.jsx)(S.IconButton, {
                    icon: "Search",
                    appearance: "ghost",
                    size: "SM",
                    label: n(l ? P.search_close_button : P.search_open_button),
                    className: "_11eee6mb",
                    "data-testid": "searchToggle"
                  })
                }), (0, x.jsx)(C.AnimatePresence, {
                  children: l && (0, x.jsx)(E.FocusScope, {
                    loop: !a,
                    children: (0, x.jsx)(w.Content, {
                      forceMount: !0,
                      sideOffset: 19,
                      children: (0, x.jsx)(C.motion.div, {
                        initial: "close",
                        animate: "open",
                        exit: "close",
                        variants: la,
                        "data-testid": "searchBar",
                        className: (0, M.m)("dark"),
                        children: e
                      })
                    })
                  })
                })]
              })
            })
          })
        },
        da = (0, o.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          searchTarget: "",
          onChange: () => {}
        }),
        ua = (0, o.forwardRef)(function({
          children: e
        }, a) {
          return (0, x.jsx)("div", {
            role: "search",
            ref: a,
            className: "_11eee6m1",
            children: e
          })
        }),
        ha = (0, o.forwardRef)(function({
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
            formatMessage: h
          } = (0, m.A)(), {
            inMobileMenu: v,
            closeMobileMenu: g
          } = (0, o.useContext)(ie), [f, p] = (0, A.useControllableState)({
            prop: s,
            onChange: r,
            defaultProp: ""
          }), [b, M] = (0, A.useControllableState)({
            prop: l,
            onChange: c,
            defaultProp: ""
          }), [_, N] = (0, o.useState)(!1), [y, k] = (0, o.useState)(!1), {
            setForceBackground: O
          } = (0, o.useContext)(V);
          (0, o.useEffect)(() => (O(!0), () => {
            O(!1)
          }), []);
          const I = (e, a) => {
              t(e, a, g), k(!0)
            },
            L = {
              inSearchMenu: !0,
              searchTarget: b,
              setSearchTarget: e => {
                M(e), f && f.length >= a && I(f, e)
              },
              onChange: r
            },
            T = (0, o.useMemo)(() => v ? (0, x.jsx)(C.AnimatePresence, {
              children: _ && (0, x.jsx)(C.motion.div, {
                initial: "close",
                animate: "open",
                exit: "close",
                variants: la,
                transition: ne.springOpen,
                "data-testid": "searchBar",
                children: (0, x.jsx)("div", {
                  className: "_11eee6m9 _11eee6m8",
                  children: e
                })
              })
            }) : (0, x.jsxs)("div", {
              className: "_11eee6m8",
              children: [e, !v && !d && (0, x.jsx)("div", {
                className: "_11eee6md",
                children: (0, x.jsx)(w.Close, {
                  className: "_11eee6me",
                  children: (0, x.jsx)(j.X, {
                    size: "MD",
                    className: "_11eee6mf",
                    label: h(P.search_close_button)
                  })
                })
              })]
            }), [v, _, d, h, e]);
          return (0, x.jsxs)(da.Provider, {
            value: L,
            children: [(0, x.jsxs)("div", {
              className: (0, i.default)("_11eee6m6", {
                [oa]: v
              }),
              "data-testid": "searchBar",
              children: [(0, x.jsx)(S.IconButton, {
                onClick: () => {
                  I(f, b)
                },
                appearance: "ghost",
                icon: "Search",
                size: "LG",
                label: h(y ? P.search_disabled_aria_label : P.search_action)
              }), (0, x.jsx)("div", {
                className: "_11eee6mg",
                children: (0, x.jsx)("input", {
                  className: "_11eee6mh",
                  type: "search",
                  value: f,
                  onChange: e => (e => {
                    p(e), k(!1)
                  })(e.target.value),
                  onKeyUp: e => {
                    "Enter" === e.key && f && b && I(f, b)
                  },
                  onFocus: () => N(!0),
                  placeholder: h(P.search_placeholder),
                  ref: u,
                  enterKeyHint: "search",
                  maxLength: n,
                  min: a,
                  max: n
                })
              }), v && _ && (0, x.jsx)(S.IconButton, {
                onClick: () => N(!1),
                appearance: "ghost",
                icon: "X",
                size: "MD",
                label: h(P.search_close_button)
              })]
            }), T]
          })
        }),
        ma = ({
          children: e
        }) => {
          const {
            formatMessage: a
          } = (0, m.A)();
          return (0, x.jsx)("div", {
            className: "_11eee6mi",
            role: "radiogroup",
            "aria-label": a(P.search_categories),
            children: e
          })
        },
        va = (0, o.forwardRef)(function({
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
          } = (0, o.useContext)(da), {
            inSearchTargetDropdown: u,
            setRootSearchTarget: h,
            rootSearchTarget: m
          } = (0, o.useContext)(ga), v = t => {
            c?.(t), u && "string" == typeof e && h({
              key: a,
              title: n
            })
          }, g = t || Boolean(d) && (d === a || d === m.key);
          return u ? (0, x.jsx)("button", {
            ref: l,
            type: "button",
            className: (0, i.default)("_11eee6mq", {
              [ia]: g
            }),
            onClick: () => v(a),
            value: a,
            ...r,
            role: "radio",
            "aria-checked": g,
            children: e
          }) : (0, x.jsx)(S.Tag.Root, {
            className: "_11eee6mj",
            color: g ? "monochrome" : "grey",
            size: "LG",
            background: "static",
            onClick: () => v(a),
            hasBorder: !1,
            ...r,
            asChild: !0,
            children: (0, x.jsxs)("button", {
              type: "button",
              ref: l,
              value: a,
              role: "radio",
              "aria-checked": g,
              children: [(0, x.jsx)(S.Tag.Label, {
                asChild: !0,
                children: (0, x.jsx)(S.Body, {
                  size: "MD",
                  appearance: "bold",
                  children: e
                })
              }), s && (0, x.jsx)(S.Tag.Icon, {
                className: "_11eee6mo",
                label: "",
                icon: "ChevronDown"
              })]
            })
          })
        }),
        ga = (0, o.createContext)({
          inSearchTargetDropdown: !1,
          rootSearchTarget: {
            key: "",
            title: ""
          },
          setRootSearchTarget: () => {}
        }),
        fa = ({
          title: e,
          children: a
        }) => {
          const [n, t] = (0, o.useState)(!1), [s, r] = (0, o.useState)({
            key: "",
            title: ""
          }), {
            searchTarget: i
          } = (0, o.useContext)(da), {
            avatarMenuOpened: l
          } = (0, o.useContext)(V);
          i !== s.key && "" !== s.key && r({
            key: "",
            title: ""
          });
          const c = !l && n;
          return (0, x.jsxs)(w.Root, {
            open: c,
            onOpenChange: t,
            children: [(0, x.jsx)(w.Trigger, {
              asChild: !0,
              children: (0, x.jsx)(va, {
                value: e,
                title: e,
                active: !!s.key,
                hasChevron: !0,
                children: s.title || e
              })
            }), (0, x.jsx)(ga.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: s,
                setRootSearchTarget: e => {
                  r(a => "function" == typeof e ? e(a) : e), t(!1)
                }
              },
              children: (0, x.jsx)(w.Content, {
                align: "start",
                className: "_11eee6mp _1r3j5az0 _11eee6mn",
                children: a
              })
            })]
          })
        },
        xa = (0, o.forwardRef)(function({
          errorMessage: e
        }, a) {
          return e && (0, x.jsx)("div", {
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
          children: o,
          ...i
        }) => {
          const l = e?.startsWith("http");
          return (0, x.jsx)("a", {
            href: e,
            className: n,
            onClick: a => {
              s?.(a), l || r || (t ? (a.preventDefault(), t(e)) : (a.preventDefault(), window.history.pushState({}, "", e)))
            },
            target: a,
            ...i,
            children: o
          })
        };
      var ba = "_13sb4ht3",
        Ma = "_13sb4ht4";
      const _a = () => (0, x.jsx)("div", {
        className: "_13sb4ht2",
        children: (0, x.jsx)("svg", {
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [ba, Ma, ""].map((e, a) => (0, x.jsx)("path", {
            className: e,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.61511 10.9978H12.5848C14.3845 10.9978 15.9421 10.4507 15.9421 8.44939C15.9421 6.86148 14.5745 6.52423 13.2595 6.52423H9.56608L8.61511 10.9978ZM24.3357 21.6949H30.6663L24.9533 25.6406L25.8771 31.8581L20.9272 28.1057L14.2842 32.0001L17.3902 25.4102C17.3902 25.4102 13.7775 21.6513 13.7803 21.6513C13.5374 21.3314 13.4563 20.5073 13.4563 20.1527C13.4563 19.7045 13.4849 19.2505 13.5155 18.7669C13.5503 18.2159 13.5875 17.6266 13.5875 16.9637C13.5875 15.3278 12.8632 14.4723 11.0925 14.4723H7.77269L6.32717 21.2249H1.33301L5.30462 2.66675H14.7029C18.1954 2.66675 20.861 3.52407 20.861 7.47735C20.861 10.2601 19.4884 12.2367 16.4605 12.6517V12.7051C17.8843 13.0428 18.4177 14.0037 18.4177 15.7946C18.4177 16.5095 18.3959 17.1369 18.3754 17.7271C18.3572 18.2511 18.34 18.7456 18.34 19.246C18.34 19.8873 18.507 20.9355 18.9277 21.6513H19.6215L23.3316 15.4672L24.3357 21.6949ZM23.5498 22.6019H27.7512L23.9634 25.217L24.6402 29.7765L20.9957 27.0111L16.3688 29.7218L18.4869 25.2341L15.9114 22.5578H20.1458L22.8244 18.093L23.5498 22.6019Z",
            fill: "currentcolor"
          }, e + a))
        })
      });
      var ja = "corzs33";
      const Na = {
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
          onNavigate: t
        }) => {
          const s = (0, m.A)(),
            [r, l] = (0, o.useState)(!1),
            c = (0, o.useRef)(null),
            [d, u] = (0, o.useState)(!1),
            {
              brand: h,
              brandTitle: v,
              isNavHidden: g,
              simpleMenu: f
            } = (0, o.useContext)(V),
            p = n || "/";
          return (0, o.useEffect)(() => {
            l(!1)
          }, [g, e]), (0, o.useEffect)(() => {
            const e = () => {
              const e = c.current?.getBoundingClientRect().width || 0,
                a = c.current?.children;
              Array.from(Array(a?.length)).reduce((e, n, t) => e + a?.item(t)?.getBoundingClientRect().width, 0) + 60 >= e ? u(!1) : u(!0)
            };
            return v ? (e(), window.addEventListener("resize", e)) : (u(!1), window.removeEventListener("resize", e)), () => {
              window.removeEventListener("resize", e)
            }
          }, [v]), (0, x.jsxs)("div", {
            className: "corzs30",
            children: [(0, x.jsx)(ae, {
              showOn: "desktop",
              children: (0, x.jsxs)("div", {
                className: "corzs31",
                children: [(0, x.jsxs)("div", {
                  className: ja,
                  children: [!a && (0, x.jsx)(pa, {
                    to: p,
                    "aria-label": s.formatMessage(P.nav_rockstargames_home),
                    onNavigate: t,
                    className: "corzs39",
                    children: (0, x.jsx)(_a, {})
                  }), a && (0, x.jsxs)(w.Root, {
                    open: r,
                    onOpenChange: l,
                    children: [(0, x.jsx)(ae, {
                      showOn: "desktop",
                      children: (0, x.jsx)(w.Trigger, {
                        asChild: !0,
                        children: (0, x.jsx)("button", {
                          type: "button",
                          className: "corzs38",
                          "aria-label": s.formatMessage(P.nav_rockstargames_logo),
                          children: (0, x.jsx)(_a, {})
                        })
                      })
                    }), (0, x.jsx)(C.AnimatePresence, {
                      children: r && (0, x.jsx)(ae, {
                        showOn: "desktop",
                        children: (0, x.jsx)(w.Content, {
                          forceMount: !0,
                          align: "start",
                          sideOffset: 24,
                          children: (0, x.jsx)(C.motion.div, {
                            className: "corzs3a",
                            variants: Na,
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
                }), (h || v) && (0, x.jsxs)("div", {
                  className: "corzs34",
                  children: [(0, x.jsx)("div", {
                    className: "corzs35"
                  }), h && (0, x.jsx)("div", {
                    className: "corzs36",
                    children: h
                  }), v && (0, x.jsx)(S.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: v
                  })]
                })]
              })
            }), (0, x.jsx)(ae, {
              showOn: "mobile",
              children: (0, x.jsxs)("div", {
                className: "corzs32",
                ref: c,
                children: [(0, x.jsx)("div", {
                  className: ja,
                  children: (!h || f) && (0, x.jsx)(pa, {
                    to: p,
                    "aria-label": s.formatMessage(P.nav_rockstargames_home),
                    onNavigate: t,
                    className: (0, i.clsx)("corzs39", {
                      corzs3b: d
                    }),
                    tabIndex: d ? -1 : 0,
                    children: (0, x.jsx)(_a, {})
                  })
                }), (h || v) && (0, x.jsxs)("div", {
                  className: (0, i.clsx)("corzs34", {
                    corzs3b: v && !d
                  }),
                  children: [f && (0, x.jsx)("div", {
                    className: "corzs35"
                  }), h && (0, x.jsx)("div", {
                    className: "corzs36",
                    children: h
                  }), v && (0, x.jsx)(S.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: v
                  })]
                })]
              })
            })]
          })
        },
        ya = {
          MenuContext: Ie,
          HiddenMenuContext: Le,
          SubMenuContext: Ue,
          MobileMenuContext: ie,
          GlobalNavigationContext: V
        }
    }
  }
]);