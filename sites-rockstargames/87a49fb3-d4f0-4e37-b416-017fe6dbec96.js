try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "87a49fb3-d4f0-4e37-b416-017fe6dbec96", e._sentryDebugIdIdentifier = "sentry-dbid-87a49fb3-d4f0-4e37-b416-017fe6dbec96")
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
  [1177, 1899, 4809], {
    94931(e, n, a) {
      var t = a(93082),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, n, a) {
        var t, s = {},
          c = null,
          d = null;
        for (t in void 0 !== a && (c = "" + a), void 0 !== n.key && (c = "" + n.key), void 0 !== n.ref && (d = n.ref), n) o.call(n, t) && !l.hasOwnProperty(t) && (s[t] = n[t]);
        if (e && e.defaultProps)
          for (t in n = e.defaultProps) void 0 === s[t] && (s[t] = n[t]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: d,
          props: s,
          _owner: i.current
        }
      }
      n.Fragment = s, n.jsx = c, n.jsxs = c
    },
    39793(e, n, a) {
      e.exports = a(94931)
    },
    51177(e, n, a) {
      a.d(n, {
        C6: () => r,
        Cl: () => s,
        Tt: () => o,
        YH: () => l,
        fX: () => u,
        gz: () => d,
        sH: () => i
      });
      var t = function(e, n) {
        return t = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, n) {
          e.__proto__ = n
        } || function(e, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
        }, t(e, n)
      };

      function r(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

        function a() {
          this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (a.prototype = n.prototype, new a)
      }
      var s = function() {
        return s = Object.assign || function(e) {
          for (var n, a = 1, t = arguments.length; a < t; a++)
            for (var r in n = arguments[a]) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          return e
        }, s.apply(this, arguments)
      };

      function o(e, n) {
        var a = {};
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (a[t] = e[t]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (t = Object.getOwnPropertySymbols(e); r < t.length; r++) n.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (a[t[r]] = e[t[r]])
        }
        return a
      }

      function i(e, n, a, t) {
        return new(a || (a = Promise))(function(r, s) {
          function o(e) {
            try {
              l(t.next(e))
            } catch (e) {
              s(e)
            }
          }

          function i(e) {
            try {
              l(t.throw(e))
            } catch (e) {
              s(e)
            }
          }

          function l(e) {
            var n;
            e.done ? r(e.value) : (n = e.value, n instanceof a ? n : new a(function(e) {
              e(n)
            })).then(o, i)
          }
          l((t = t.apply(e, n || [])).next())
        })
      }

      function l(e, n) {
        var a, t, r, s = {
            label: 0,
            sent: function() {
              if (1 & r[0]) throw r[1];
              return r[1]
            },
            trys: [],
            ops: []
          },
          o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = i(0), o.throw = i(1), o.return = i(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
          return this
        }), o;

        function i(i) {
          return function(l) {
            return function(i) {
              if (a) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, i[0] && (s = 0)), s;) try {
                if (a = 1, t && (r = 2 & i[0] ? t.return : i[0] ? t.throw || ((r = t.return) && r.call(t), 0) : t.next) && !(r = r.call(t, i[1])).done) return r;
                switch (t = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                  case 0:
                  case 1:
                    r = i;
                    break;
                  case 4:
                    return s.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    s.label++, t = i[1], i = [0];
                    continue;
                  case 7:
                    i = s.ops.pop(), s.trys.pop();
                    continue;
                  default:
                    if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      s = 0;
                      continue
                    }
                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                      s.label = i[1];
                      break
                    }
                    if (6 === i[0] && s.label < r[1]) {
                      s.label = r[1], r = i;
                      break
                    }
                    if (r && s.label < r[2]) {
                      s.label = r[2], s.ops.push(i);
                      break
                    }
                    r[2] && s.ops.pop(), s.trys.pop();
                    continue
                }
                i = n.call(e, s)
              } catch (e) {
                i = [6, e], t = 0
              } finally {
                a = r = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, l])
          }
        }
      }

      function c(e, n) {
        var a = "function" == typeof Symbol && e[Symbol.iterator];
        if (!a) return e;
        var t, r, s = a.call(e),
          o = [];
        try {
          for (;
            (void 0 === n || n-- > 0) && !(t = s.next()).done;) o.push(t.value)
        } catch (e) {
          r = {
            error: e
          }
        } finally {
          try {
            t && !t.done && (a = s.return) && a.call(s)
          } finally {
            if (r) throw r.error
          }
        }
        return o
      }

      function d() {
        for (var e = [], n = 0; n < arguments.length; n++) e = e.concat(c(arguments[n]));
        return e
      }

      function u(e, n, a) {
        if (a || 2 === arguments.length)
          for (var t, r = 0, s = n.length; r < s; r++) !t && r in n || (t || (t = Array.prototype.slice.call(n, 0, r)), t[r] = n[r]);
        return e.concat(t || Array.prototype.slice.call(n))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    },
    17235(e, n, a) {
      a.r(n), a.d(n, {
        Actions: () => en,
        AvatarMenu: () => ve,
        AvatarMenuLanguageLabel: () => Me,
        AvatarMenuSection: () => xe,
        AvatarMenuSectionContent: () => _e,
        AvatarMenuSectionHeader: () => ge,
        AvatarMenuSectionHeaderDropdown: () => be,
        Breakpoint: () => J,
        CallToAction: () => nn,
        Contexts: () => jn,
        Header: () => H,
        Menu: () => Se,
        MenuContent: () => Ge,
        MenuIcon: () => Ue,
        MenuItem: () => Ie,
        MenuLink: () => Fe,
        MenuList: () => Oe,
        MenuSub: () => Ve,
        MenuTrigger: () => Ee,
        MobileMenu: () => re,
        MobileMenuNav: () => ae,
        QuickMenu: () => ye,
        Root: () => G,
        Search: () => sn,
        SearchBar: () => cn,
        SearchContainer: () => ln,
        SearchError: () => fn,
        SearchFilters: () => dn,
        SearchTarget: () => un,
        SearchTargetDropdown: () => mn,
        SiteTitle: () => Mn
      });
      var t = Object.defineProperty,
        r = (e, n) => () => (n || (e((n = {
          exports: {}
        }).exports, n), e = null), n.exports),
        s = (e, n) => {
          let a = {};
          for (var r in e) t(a, r, {
            get: e[r],
            enumerable: !0
          });
          return n || t(a, Symbol.toStringTag, {
            value: "Module"
          }), a
        },
        o = a(93082),
        i = a(81270),
        l = a(39615),
        c = a(30212),
        d = a(14376),
        u = a(23470),
        h = a(68925),
        m = a(39793),
        f = (a(54446), a(79067)),
        v = a(96883),
        p = a(52457),
        x = a(38957),
        g = a(66760),
        b = a(69669),
        _ = a(13517),
        M = a(88819),
        j = a(3541),
        y = a(68206),
        N = a(41421),
        C = a(81010),
        k = a(29190),
        w = a(69353),
        S = a(32996),
        O = a(4956),
        L = a(1531);
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
      const P = () => {
        const e = (0, o.useRef)(null);
        return (0, m.jsx)("button", {
          ref: e,
          className: "_3ge2ci0",
          onClick: () => {
            const n = document.querySelector(".siteHeaderContainer"),
              a = "__spatialNavigation__" in window ? window.__spatialNavigation__ : null;
            if (n && a) {
              a.enableExperimentalAPIs(!0);
              const t = a.findCandidates(n, "down", {
                mode: "all"
              }).filter(a => !n.contains(a) && e.current !== a);
              t.length > 0 && t[0].focus()
            }
          },
          children: (0, m.jsx)(u.A, {
            ...E.accessibility_skip_button
          })
        })
      };

      function A(e) {
        var n = function(e) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var a = n.call(e, "string");
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function z(e, n) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          n && (t = t.filter(function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          })), a.push.apply(a, t)
        }
        return a
      }

      function D(e) {
        for (var n = 1; n < arguments.length; n++) {
          var a = null != arguments[n] ? arguments[n] : {};
          n % 2 ? z(Object(a), !0).forEach(function(n) {
            var t, r, s;
            t = e, r = n, s = a[n], (r = A(r)) in t ? Object.defineProperty(t, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[r] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : z(Object(a)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
          })
        }
        return e
      }

      function T(e, n) {
        var a = {};
        for (var t in e) a[t] = n(e[t], t);
        return a
      }
      var R = (e, n, a) => {
          for (var t of Object.keys(e)) {
            var r;
            if (e[t] !== (null !== (r = n[t]) && void 0 !== r ? r : a[t])) return !1
          }
          return !0
        },
        q = e => {
          var n = n => {
            var a = e.defaultClassName,
              t = D(D({}, e.defaultVariants), n);
            for (var r in t) {
              var s, o = null !== (s = t[r]) && void 0 !== s ? s : e.defaultVariants[r];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[r][i];
                l && (a += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) R(c, t, e.defaultVariants) && (a += " " + d);
            return a
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return T(e.variantClassNames, e => T(e, e => e.split(" ")[0]))
            }
          }, n
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
            simpleMenu: n
          } = (0, o.useContext)(Y);
          return (0, m.jsx)("header", {
            className: (0, i.default)(B({
              layout: n ? "simple" : "default"
            }), "ut2qrfa"),
            children: e
          })
        },
        Y = (0, o.createContext)({
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
        G = (Q = ({
          children: e,
          brand: n,
          brandTitle: a,
          mode: t = "default",
          navColorTheme: r = "dark",
          forceSolidBackground: s = !1,
          forceVisibility: c,
          simpleMenu: d = !1,
          locale: u
        }) => {
          const [h, f] = (0, o.useState)(!1), [v, p] = (0, o.useState)(!0), [x, g] = (0, o.useState)(!1), [b, _] = (0, o.useState)(!1), [M, j] = (0, o.useState)(!1), y = (0, o.useRef)(null), N = (0, o.useRef)(null), [C, k] = (0, o.useState)(null), [w, S] = (0, o.useState)(s), O = (0, o.useMemo)(() => "visible" !== c && ("hidden" === c || h), [h, c]);
          (0, o.useEffect)(() => {
            let e = window.scrollY;
            const n = () => {
                const n = window.scrollY > 140,
                  a = window.scrollY > e;
                f(n && a), e = window.scrollY
              },
              a = () => {
                p(0 === window.scrollY)
              };
            return window.addEventListener("scroll", n), window.addEventListener("scroll", a), () => {
              window.removeEventListener("scroll", n), window.removeEventListener("scroll", a)
            }
          }, []), (0, o.useEffect)(() => {
            const e = "data-show-more-content",
              n = N.current,
              a = () => {
                const a = !n?.contains(document.activeElement);
                O && a ? document.body.setAttribute(e, "") : document.body.removeAttribute(e)
              };
            return a(), document.addEventListener("focusin", a), document.addEventListener("focusout", a), () => {
              document.removeEventListener("focusin", a), document.removeEventListener("focusout", a), document.body.removeAttribute(e)
            }
          }, [O, N]), (0, o.useEffect)(() => {
            const e = e => {
              f(e.detail.isHidden)
            };
            return window.addEventListener("header:hideNav", e), () => {
              window.removeEventListener("header:hideNav", e)
            }
          }, []);
          const L = !v || s || w ? "dark" : r;
          return (0, m.jsx)("div", {
            id: "global-nav-root",
            className: "siteHeaderContainer",
            children: (0, m.jsx)("div", {
              ref: k,
              children: C && (0, m.jsx)(l.NP, {
                colorScheme: L,
                defaultColorScheme: L,
                defaultPlatformScale: "desktop",
                container: C,
                locale: u,
                children: (0, m.jsx)(Y.Provider, {
                  value: {
                    brand: n,
                    brandTitle: a,
                    isNavHidden: O,
                    containerRef: y,
                    navContentRef: N,
                    simpleMenu: d,
                    setForceBackground: S,
                    avatarMenuOpened: x,
                    setAvatarMenuOpened: g,
                    mainMenuOpened: b,
                    setMainMenuOpened: _,
                    searchBarOpened: M,
                    setSearchBarOpened: j,
                    locale: u
                  },
                  children: (0, m.jsxs)("div", {
                    className: (0, i.default)("ut2qrf1", "ut2qrf0"),
                    ref: y,
                    lang: u,
                    "data-scroll-top": v,
                    "data-color-mode": t,
                    "data-theme": L,
                    "data-force-background": s || w,
                    children: [(0, m.jsx)(P, {}), (0, m.jsx)("div", {
                      className: "ut2qrf2"
                    }), (0, m.jsxs)("div", {
                      ref: N,
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
          const [n, a] = (0, o.useState)();
          return (0, o.useEffect)(() => {
            (async () => {
              a(await (async e => await (async e => {
                return {
                  rsLocale: e,
                  locale: e,
                  messages: (n = I[e], {
                    ...n
                  })
                };
                var n
              })(e))(e.locale))
            })()
          }, []), (0, m.jsx)(c.A, {
            locale: n?.locale || "en-US",
            messages: {
              ...n?.messages
            },
            children: n && (0, m.jsx)(Q, {
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
        Z = s({
          desktop: () => W,
          mobile: () => X
        }),
        W = "dsroxs1",
        X = "dsroxs0";
      const J = ({
          showOn: e,
          ...n
        }) => (0, m.jsx)(x.DX, {
          className: e ? Z[e] : "",
          ...n
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
      const ne = (0, o.createContext)({
          openedNav: ""
        }),
        ae = ({
          children: e
        }) => {
          const [n, a] = (0, o.useState)("");
          return (0, m.jsx)(ne.Provider, {
            value: {
              openedNav: n
            },
            children: (0, m.jsx)(f.bL, {
              value: n,
              onValueChange: a,
              children: (0, m.jsx)(f.B8, {
                className: "vkitev1",
                children: e
              })
            })
          })
        },
        te = (0, o.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        re = ({
          children: e
        }) => {
          const n = (0, h.A)(),
            [a, t] = (0, o.useState)(!1),
            [r, s] = (0, o.useState)(!1),
            [l, c] = (0, o.useState)(!1),
            {
              brand: d,
              setForceBackground: u,
              simpleMenu: f
            } = (0, o.useContext)(Y);
          (0, o.useEffect)(() => {
            a && u(!0)
          }, [a]), (0, o.useEffect)(() => {
            const e = e => {
              const n = e?.target;
              a && n.innerWidth >= 1024 && x()
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [a]);
          const v = {
              show: {
                height: `calc(100dvh - ${(0,b.us)("var(--k8we7i6)","0px")})`,
                paddingBottom: a && d ? "var(--k8we7i0)" : "",
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
            x = () => {
              t(!a), s(!1)
            };
          return f ? null : (0, m.jsx)(te.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                t(!1)
              },
              setHasQuickMenu: c
            },
            children: (0, m.jsxs)(M.bL, {
              open: a,
              onOpenChange: t,
              children: [(0, m.jsx)(J, {
                showOn: "mobile",
                children: (0, m.jsx)(se, {
                  onClick: x,
                  isMenuOpen: a
                })
              }), (0, m.jsx)(_.AnimatePresence, {
                onExitComplete: () => u(!1),
                children: a && (0, m.jsx)(J, {
                  showOn: "mobile",
                  children: (0, m.jsxs)(_.motion.div, {
                    className: "vkiteve",
                    variants: v,
                    animate: "show",
                    initial: "hidden",
                    exit: "hidden",
                    children: [(0, m.jsx)(M.hJ, {
                      className: "vkiteva"
                    }), (0, m.jsx)(M.UC, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => t(!1),
                      children: (0, m.jsxs)(_.motion.div, {
                        className: (0, i.default)((0, p.m)("dark"), "vkitev4", "vkitev7"),
                        variants: v,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, m.jsxs)(j.s6, {
                          children: [(0, m.jsx)(M.hE, {
                            children: n.formatMessage(E.nav_mobilemenu_title)
                          }), (0, m.jsx)(M.VY, {
                            children: n.formatMessage(E.nav_mobilemenu_title)
                          })]
                        }), (0, m.jsx)("div", {
                          className: (0, i.default)(r ? "vkitev9" : "", "vkitev6"),
                          children: (0, m.jsx)(_.motion.div, {
                            className: (0, i.default)("vkitev0", l ? "vkitev8" : ""),
                            children: o.Children.map(e, e => (0, m.jsx)(_.motion.div, {
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
        se = ({
          className: e,
          isMenuOpen: n,
          ...a
        }) => {
          const t = (0, h.A)();
          return (0, m.jsx)("div", {
            className: (0, i.default)("vkitevb", e),
            children: (0, m.jsxs)(M.l9, {
              title: t.formatMessage(n ? E.nav_mobilemenu_close : E.nav_mobilemenu_open),
              type: "button",
              className: "vkitevc",
              "data-testid": "hamburgerNav",
              ...a,
              children: [(0, m.jsx)("span", {
                className: ee,
                "data-opened": n
              }), (0, m.jsx)("span", {
                className: ee,
                "data-opened": n
              }), (0, m.jsx)("span", {
                className: ee,
                "data-opened": n
              })]
            })
          })
        },
        oe = (...e) => {
          const n = e.filter(Boolean);
          return n.length <= 1 ? n[0] || null : function(e) {
            for (const a of n) "function" == typeof a ? a(e) : a && (a.current = e)
          }
        },
        ie = ({
          children: e,
          className: n,
          ...a
        }) => {
          const {
            containerRef: t,
            locale: r
          } = (0, o.useContext)(Y);
          return (0, m.jsx)(l.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            locale: r,
            children: (0, m.jsx)(k.b, {
              className: (0, i.default)("g1xx1x0 ut2qrf0", n),
              container: t?.current,
              ...a,
              children: e
            })
          })
        };
      var le = "m27a3y7",
        ce = r((e, n) => {
          n.exports = "PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgcng9IjIyIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjE1Ii8+DQo8cGF0aCBkPSJNMjkuMzMzNCAzMC4yNVYyOC40MTY3QzI5LjMzMzQgMjcuNDQ0MiAyOC45NDcxIDI2LjUxMTYgMjguMjU5NSAyNS44MjM5QzI3LjU3MTggMjUuMTM2MyAyNi42MzkyIDI0Ljc1IDI1LjY2NjcgMjQuNzVIMTguMzMzNEMxNy4zNjEgMjQuNzUgMTYuNDI4MyAyNS4xMzYzIDE1Ljc0MDcgMjUuODIzOUMxNS4wNTMxIDI2LjUxMTYgMTQuNjY2NyAyNy40NDQyIDE0LjY2NjcgMjguNDE2N1YzMC4yNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0yMS45OTk5IDIxLjA4MzNDMjQuMDI1IDIxLjA4MzMgMjUuNjY2NiAxOS40NDE3IDI1LjY2NjYgMTcuNDE2N0MyNS42NjY2IDE1LjM5MTYgMjQuMDI1IDEzLjc1IDIxLjk5OTkgMTMuNzVDMTkuOTc0OSAxMy43NSAxOC4zMzMzIDE1LjM5MTYgMTguMzMzMyAxNy40MTY3QzE4LjMzMzMgMTkuNDQxNyAxOS45NzQ5IDIxLjA4MzMgMjEuOTk5OSAyMS4wODMzWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K"
        });
      const de = (0, o.createContext)({
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
        fe = ({
          children: e,
          className: n
        }) => (0, m.jsx)("div", {
          className: (0, i.default)("m27a3y1", n),
          children: e
        }),
        ve = ({
          avatarIconUrl: e,
          nickname: n,
          isLoggedIn: a,
          children: t,
          onOpenChange: r
        }) => {
          const s = (0, h.A)(),
            i = ce(),
            [l, c] = (0, o.useState)(["open"]),
            {
              isNavHidden: d,
              setAvatarMenuOpened: u,
              mainMenuOpened: f,
              setMainMenuOpened: v
            } = (0, o.useContext)(Y),
            [x, g] = (0, o.useState)(!1),
            [b, k] = (0, o.useState)(!1),
            [w, S] = (0, o.useState)(d),
            O = () => {
              g(!1), k(!1)
            };
          w !== d && (S(d), d && O());
          const L = e => {
            c(["open", ...e.filter(e => "open" !== e)])
          };
          return (0, o.useEffect)(() => {
            const e = x || b;
            e && f && v(!1), u(e)
          }, [x, b, f, v, u]), (0, m.jsxs)(de.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: l,
              closeAvatarMenu: O
            },
            children: [(0, m.jsx)(N.bL, {
              open: x,
              onOpenChange: e => {
                r?.(e), g(e)
              },
              modal: !1,
              children: (0, m.jsx)(J, {
                showOn: "desktop",
                children: (0, m.jsxs)(fe, {
                  children: [(0, m.jsx)(N.l9, {
                    asChild: !0,
                    children: (0, m.jsx)(y.IconButton, {
                      size: "SM",
                      label: s.formatMessage(x ? E.avatar_menu_close : E.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: le,
                      "aria-label": s.formatMessage(x ? E.avatar_menu_close : E.avatar_menu_open),
                      "data-testid": "avatarMenuButtonDesktop",
                      "data-logged-in": a,
                      children: e && (0, m.jsx)("img", {
                        className: "m27a3y8",
                        src: e || i,
                        alt: n
                      })
                    })
                  }), (0, m.jsx)(_.AnimatePresence, {
                    children: x && (0, m.jsx)(N.UC, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      onOpenAutoFocus: e => e.preventDefault(),
                      className: (0, p.m)("dark"),
                      children: (0, m.jsx)(_.motion.div, {
                        variants: ue,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, m.jsx)(C.bL, {
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
            }), (0, m.jsx)(M.bL, {
              open: b,
              onOpenChange: e => {
                r?.(e), k(e)
              },
              children: (0, m.jsx)(J, {
                showOn: "mobile",
                children: (0, m.jsxs)(fe, {
                  children: [(0, m.jsx)(M.l9, {
                    className: le,
                    "aria-label": s.formatMessage(b ? E.avatar_menu_close : E.avatar_menu_open),
                    "data-testid": "avatarMenuButtonMobile",
                    asChild: !0,
                    "data-logged-in": a,
                    children: (0, m.jsx)(y.IconButton, {
                      size: "SM",
                      label: s.formatMessage(x ? E.avatar_menu_close : E.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: le,
                      "aria-label": s.formatMessage(x ? E.avatar_menu_close : E.avatar_menu_open),
                      children: e && (0, m.jsx)("img", {
                        className: "m27a3y8",
                        src: e || i
                      })
                    })
                  }), (0, m.jsx)(_.AnimatePresence, {
                    children: b && (0, m.jsx)(ie, {
                      asChild: !0,
                      children: (0, m.jsxs)(M.UC, {
                        forceMount: !0,
                        className: (0, p.m)("dark"),
                        children: [(0, m.jsxs)(j.s6, {
                          children: [(0, m.jsx)(M.hE, {
                            children: s.formatMessage(E.nav_avatarmenu_title)
                          }), (0, m.jsx)(M.VY, {
                            children: s.formatMessage(E.nav_avatarmenu_title)
                          })]
                        }), (0, m.jsxs)(_.motion.div, {
                          variants: me,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: "m27a3y3",
                          children: [(0, m.jsx)(M.bm, {
                            className: "m27a3y5",
                            "aria-label": s.formatMessage(E.avatar_menu_close),
                            children: (0, m.jsx)("div", {
                              className: "m27a3y6"
                            })
                          }), (0, m.jsx)(C.bL, {
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
        pe = (0, o.createContext)({
          avatarMenuItemId: ""
        }),
        xe = ({
          children: e,
          value: n
        }) => {
          const a = (0, o.useId)();
          return (0, m.jsx)(pe.Provider, {
            value: {
              avatarMenuItemId: n || a
            },
            children: (0, m.jsx)(C.q7, {
              value: n || a,
              className: "m27a3y9",
              children: e
            })
          })
        },
        ge = ({
          children: e,
          ...n
        }) => (0, m.jsx)(C.Y9, {
          asChild: !0,
          children: (0, m.jsx)("li", {
            className: "m27a3y0",
            children: (0, m.jsx)(C.l9, {
              className: "m27a3ya",
              ...n,
              children: e
            })
          })
        }),
        be = ({
          children: e,
          ...n
        }) => (0, m.jsx)(C.Y9, {
          style: {
            margin: 0
          },
          children: (0, m.jsxs)(C.l9, {
            className: "m27a3yb",
            "data-testid": "header-language-selector-button",
            ...n,
            children: [e, (0, m.jsx)(g.ChevronDown, {
              label: "",
              size: "SM",
              className: "m27a3yc"
            })]
          })
        }),
        _e = ({
          children: e,
          ...n
        }) => {
          const {
            avatarMenuOpenItems: a
          } = (0, o.useContext)(de), {
            avatarMenuItemId: t
          } = (0, o.useContext)(pe), r = a.indexOf(t) >= 0;
          return (0, m.jsx)(C.UC, {
            forceMount: !0,
            asChild: !0,
            ...n,
            children: (0, m.jsx)(_.motion.div, {
              variants: he,
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
          ...n
        }) => (0, m.jsx)("div", {
          className: "m27a3yd",
          ...n,
          children: e
        }),
        je = (0, o.createContext)({
          inQuickMenu: !1
        }),
        ye = ({
          children: e
        }) => {
          const {
            inMobileMenu: n,
            setHasQuickMenu: a
          } = (0, o.useContext)(te), t = {
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
          }, r = {
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
          }, s = (0, i.default)((0, p.m)("dark"), "_1xtz6n0");
          return (0, o.useEffect)(() => (a?.(!0), () => {
            a?.(!1)
          }), []), n ? (0, m.jsx)(je.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, m.jsx)(f.bL, {
              asChild: !0,
              children: (0, m.jsx)(_.motion.div, {
                variants: t,
                className: s,
                children: o.Children.map(e, e => (0, m.jsx)(_.motion.li, {
                  variants: r,
                  className: "_1xtz6n1",
                  children: e
                }))
              })
            })
          }) : (0, m.jsx)(je.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, m.jsx)(f.bL, {
              asChild: !0,
              children: (0, m.jsx)("div", {
                className: s,
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
        ke = (0, o.createContext)({
          inMenu: !1,
          openedNav: "",
          setOpenedNav: e => {}
        }),
        we = (0, o.createContext)({
          isHidden: !1
        }),
        Se = ({
          children: e
        }) => {
          const n = (0, h.A)(),
            [a, t] = (0, o.useState)(""),
            [r, s] = (0, o.useState)(e),
            [i, l] = (0, o.useState)([]),
            c = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            {
              isNavHidden: u,
              mainMenuOpened: v,
              avatarMenuOpened: p,
              setMainMenuOpened: x
            } = (0, o.useContext)(Y),
            {
              inAvatarMenu: g
            } = (0, o.useContext)(de),
            b = (0, o.useCallback)(() => {
              const n = d.current;
              if (!n) return;
              const {
                children: a
              } = n;
              let t = 0;
              const r = Array.from(a).map((e, n) => {
                  const a = e.getBoundingClientRect().top;
                  return 0 === n && (t = a), a
                }),
                i = r.filter(e => e !== t).length,
                c = r.findIndex(e => e > t);
              let u = c;
              if (c > 0 && (u = c - 2), i) {
                const n = [],
                  a = [];
                o.Children.forEach(e, (e, t) => {
                  t < u ? n.push(e) : a.push(e)
                }), n && s(n), a && l(a)
              } else s(e), l([])
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
            v || "" === a || t("")
          }, [v]), (0, o.useEffect)(() => {
            x("" !== a)
          }, [a, p, v, g]);
          const _ = V({
              visibility: "visible"
            }),
            M = V({
              visibility: "hidden"
            });
          return (0, m.jsx)(ke.Provider, {
            value: {
              inMenu: !0,
              openedNav: a,
              setOpenedNav: t
            },
            children: (0, m.jsx)(J, {
              showOn: "desktop",
              children: (0, m.jsxs)(f.bL, {
                className: "_1pgq6b10",
                value: a,
                onValueChange: t,
                children: [(0, m.jsxs)(Oe, {
                  ref: c,
                  className: _,
                  children: [r, i?.length > 0 && (0, m.jsxs)(Ie, {
                    children: [(0, m.jsx)(Ee, {
                      "data-testid": "navMore",
                      children: n.formatMessage(E.nav_more_dropdown)
                    }), (0, m.jsx)(Ge, {
                      children: (0, m.jsx)(Ve, {
                        children: (0, m.jsx)(Oe, {
                          children: i
                        })
                      })
                    })]
                  })]
                }), (0, m.jsx)("div", {
                  className: "_1pgq6b14",
                  children: (0, m.jsx)(Oe, {
                    ref: d,
                    className: M,
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
        Oe = (0, o.forwardRef)(function({
          children: e,
          className: n,
          ...a
        }, t) {
          return (0, m.jsx)(f.B8, {
            ref: t,
            className: (0, i.default)("_1pgq6b1e", n),
            ...a,
            children: e
          })
        }),
        Le = (0, o.createContext)({
          value: ""
        }),
        Ie = (0, o.forwardRef)(function({
          testId: e,
          children: n,
          ...a
        }, t) {
          const {
            depth: r
          } = (0, o.useContext)(Qe), {
            inMobileMenu: s
          } = (0, o.useContext)(te), l = (0, o.useRef)(null), c = `rsm-${(0,v.B)()}`, d = "_1pgq6b15", u = "_1pgq6b16";
          return (0, m.jsx)(Le.Provider, {
            value: {
              value: c,
              ref: l
            },
            children: (0, m.jsx)(f.q7, {
              value: c,
              ref: oe(t, l),
              className: (0, i.default)({
                [d]: !0,
                [u]: 1 === r && !s
              }),
              "data-testid": e,
              "data-menu-item": r,
              ...a,
              children: n
            })
          })
        }),
        Ee = ({
          children: e,
          ...n
        }) => {
          const {
            inMenu: a
          } = (0, o.useContext)(ke), {
            inAvatarMenu: t
          } = (0, o.useContext)(de), {
            inQuickMenu: r
          } = (0, o.useContext)(je), {
            inMobileMenu: s
          } = (0, o.useContext)(te), {
            inSubMenu: i,
            depth: l
          } = (0, o.useContext)(Qe), c = {
            ...n,
            "data-menu-trigger": !0
          };
          return l > 1 ? (0, m.jsx)(qe, {
            ...c,
            children: e
          }) : t ? (0, m.jsx)(De, {
            ...c,
            children: e
          }) : i ? (0, m.jsx)(Re, {
            ...c,
            children: e
          }) : r ? (0, m.jsx)(Te, {
            ...c,
            children: e
          }) : s ? (0, m.jsx)(ze, {
            ...c,
            children: e
          }) : a ? (0, m.jsx)(Ae, {
            ...c,
            children: e
          }) : void 0
        },
        Pe = e => {
          const n = (0, h.A)();
          return (0, m.jsx)(g.ChevronDown, {
            ...e,
            label: ` - ${n.formatMessage(E.nav_rockstargames_submenu_indicator)}`,
            className: "_1pgq6b1g"
          })
        },
        Ae = e => {
          const {
            children: n,
            className: a,
            onClick: t,
            ...r
          } = e;
          return (0, m.jsxs)(f.l9, {
            onPointerMove: Ne,
            onPointerLeave: Ne,
            onKeyDown: Ce,
            onClick: t,
            className: (0, i.default)(F, U({
              context: "mainMenu"
            }), a),
            ...r,
            children: [n, (0, m.jsx)(Pe, {})]
          })
        },
        ze = e => {
          const {
            children: n,
            className: a,
            onClick: t,
            ...r
          } = e;
          return (0, m.jsxs)(f.l9, {
            onPointerMove: Ne,
            onPointerLeave: Ne,
            onClick: t,
            className: (0, i.default)(F, U({
              context: "mobileMenu"
            }), a),
            ...r,
            children: [n, (0, m.jsx)(Pe, {
              size: "LG"
            })]
          })
        },
        De = e => {
          const {
            children: n,
            className: a,
            onClick: t,
            ...r
          } = e;
          return (0, m.jsxs)(f.l9, {
            onPointerMove: Ne,
            onPointerLeave: Ne,
            onClick: t,
            className: (0, i.default)(F, U({
              context: "avatarMenu"
            }), a),
            ...r,
            children: [n, (0, m.jsx)(Pe, {})]
          })
        },
        Te = e => {
          const {
            children: n,
            className: a,
            onClick: t,
            ...r
          } = e;
          return (0, m.jsxs)(f.l9, {
            onPointerMove: Ne,
            onPointerLeave: Ne,
            onClick: t,
            className: (0, i.default)(F, U({
              context: "quickMenu"
            }), a),
            ...r,
            children: [n, (0, m.jsx)(Pe, {})]
          })
        },
        Re = e => {
          const {
            children: n,
            className: a,
            onClick: t,
            ...r
          } = e;
          return (0, m.jsxs)(f.l9, {
            onPointerMove: Ne,
            onPointerLeave: Ne,
            onClick: t,
            className: (0, i.default)(F, U({
              context: "subMenu"
            }), a),
            ...r,
            children: [n, (0, m.jsx)(Pe, {})]
          })
        },
        qe = e => {
          const {
            children: n,
            className: a,
            onClick: t,
            ...r
          } = e;
          return (0, m.jsxs)(f.l9, {
            onPointerMove: Ne,
            onPointerLeave: Ne,
            onClick: t,
            className: (0, i.default)(F, U({
              context: "nestedMenu"
            }), a),
            ...r,
            children: [n, (0, m.jsx)(Pe, {})]
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
        Ye = {
          enter: {
            opacity: 1,
            zIndex: 101
          },
          exit: {
            opacity: 1,
            zIndex: 100
          }
        },
        Ge = (0, o.forwardRef)(function({
          children: e,
          animationOverride: n,
          ...a
        }, t) {
          const {
            navContentRef: r
          } = (0, o.useContext)(Y), {
            inSubMenu: s,
            openedNav: l
          } = (0, o.useContext)(Qe), {
            openedNav: c
          } = (0, o.useContext)(ke), {
            openedNav: d
          } = (0, o.useContext)(ne), {
            value: u,
            ref: h
          } = (0, o.useContext)(Le), {
            inMobileMenu: v
          } = (0, o.useContext)(te), {
            isHidden: x
          } = (0, o.useContext)(we), {
            inAvatarMenu: g
          } = (0, o.useContext)(de), b = (0, o.useRef)(null), M = [l, c, d].includes(u);
          if ((0, o.useEffect)(() => {
              var e;
              M && b.current && (e = b.current, document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => e.disabled || e.hidden ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
              }).nextNode())?.focus()
            }, [M]), x) return null;
          const j = "_1pgq6b18 _1r3j5az0 _1pgq6b17",
            y = "_1pgq6b19",
            N = "_1pgq6b1a",
            C = "_1pgq6b1b";
          return (0, m.jsx)(_.AnimatePresence, {
            children: M && (0, m.jsx)(f.UC, {
              ref: oe(t, b),
              className: (0, i.default)((0, p.m)("dark"), {
                [j]: !v,
                [y]: v,
                [N]: s && !v,
                [C]: g
              }),
              onPointerEnter: Ne,
              onPointerLeave: Ne,
              onPointerDown: Ne,
              onPointerDownOutside: e => {
                s && e.preventDefault()
              },
              style: {
                top: r?.current?.getBoundingClientRect().height,
                left: h?.current?.getBoundingClientRect().left
              },
              ...a,
              asChild: !0,
              forceMount: !0,
              children: (0, m.jsx)(_.motion.div, {
                variants: n || s || v ? He : Be,
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
        Qe = (0, o.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        Ve = (0, o.forwardRef)(function({
          children: e,
          ...n
        }, a) {
          const {
            depth: t
          } = (0, o.useContext)(Qe), {
            openedNav: r
          } = (0, o.useContext)(ne), {
            isNavHidden: s
          } = (0, o.useContext)(Y), [i, l] = (0, o.useState)("");
          (0, o.useEffect)(() => {
            l("")
          }, [r, s]);
          const c = t ? t + 1 : 1;
          return (0, m.jsx)(Qe.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: i,
              depth: c
            },
            children: (0, m.jsx)(f.bL, {
              ref: a,
              defaultValue: "",
              value: i,
              onValueChange: e => {
                l(e === i ? "" : e)
              },
              orientation: "vertical",
              className: "_1pgq6b1d",
              "data-depth": c,
              ...n,
              asChild: !0,
              children: (0, m.jsx)(_.motion.div, {
                variants: Ye,
                animate: "enter",
                initial: "exit",
                exit: "exit",
                transition: K.quickFade,
                children: e
              })
            })
          })
        }),
        Ue = (0, o.forwardRef)(function({
          className: e,
          ...n
        }, a) {
          return (0, m.jsx)("img", {
            ref: a,
            className: (0, i.default)("_1pgq6b1p", e),
            ...n
          })
        }),
        Fe = ({
          hasNotification: e,
          onClick: n,
          ...a
        }) => {
          const {
            inMenu: t,
            setOpenedNav: r
          } = (0, o.useContext)(ke), {
            inAvatarMenu: s
          } = (0, o.useContext)(de), {
            inQuickMenu: i
          } = (0, o.useContext)(je), {
            inMobileMenu: l
          } = (0, o.useContext)(te), {
            inSubMenu: c,
            depth: d
          } = (0, o.useContext)(Qe), u = {
            ...a,
            onSelect: e => {
              const a = e.currentTarget.getAttribute("href") ?? "";
              if (a === window.location.pathname + window.location.search + window.location.hash || new URL(a, window.location.origin).href === window.location.href) {
                e.preventDefault(), r?.("");
                const n = e.currentTarget.closest('[data-menu-item="0"]')?.querySelector('[data-menu-trigger="true"]');
                document.activeElement?.blur(), setTimeout(() => {
                  n?.focus()
                }, 50)
              }
              n?.(e)
            }
          };
          return d > 1 ? (0, m.jsx)($e, {
            ...u
          }) : s ? (0, m.jsx)(Ke, {
            ...u
          }) : c ? (0, m.jsx)(Je, {
            ...u,
            hasNotification: e
          }) : i ? (0, m.jsx)(Xe, {
            ...u
          }) : l ? (0, m.jsx)(We, {
            ...u
          }) : t ? (0, m.jsx)(Ze, {
            ...u
          }) : void 0
        },
        Ze = (0, o.forwardRef)(function({
          children: e,
          className: n,
          onSelect: a,
          external: t,
          asChild: r,
          ...s
        }, l) {
          const c = (0, h.A)(),
            {
              closeAvatarMenu: d
            } = (0, o.useContext)(de),
            {
              closeMobileMenu: u
            } = (0, o.useContext)(te),
            v = r ? x.DX : "a",
            p = (0, i.default)(U({
              context: "mainMenu"
            }), n);
          return (0, m.jsx)(f.N_, {
            onSelect: e => {
              d?.(), u?.(), a?.(e)
            },
            className: p,
            asChild: !0,
            ...s,
            children: (0, m.jsxs)(v, {
              ref: l,
              children: [(0, m.jsx)(x.xV, {
                children: e
              }), t && (0, m.jsx)(g.ExternalLink, {
                label: c.formatMessage(E.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        We = (0, o.forwardRef)(function({
          children: e,
          asChild: n,
          className: a,
          onSelect: t,
          external: r,
          ...s
        }, l) {
          const {
            closeAvatarMenu: c
          } = (0, o.useContext)(de), {
            closeMobileMenu: d
          } = (0, o.useContext)(te), u = (0, i.default)(U({
            context: "mobileMenu"
          }), a), h = n ? x.DX : "a";
          return (0, m.jsx)(f.N_, {
            asChild: !0,
            onSelect: e => {
              c?.(), d?.(), t?.(e)
            },
            ...s,
            children: (0, m.jsxs)(h, {
              ref: l,
              className: u,
              children: [(0, m.jsx)(x.xV, {
                children: e
              }), r && (0, m.jsx)(g.ExternalLink, {
                size: "LG",
                label: "",
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Xe = (0, o.forwardRef)(function({
          children: e,
          asChild: n,
          className: a,
          onSelect: t,
          external: r,
          ...s
        }, l) {
          const c = (0, h.A)(),
            {
              closeAvatarMenu: d
            } = (0, o.useContext)(de),
            {
              closeMobileMenu: u
            } = (0, o.useContext)(te),
            v = (0, i.default)(U({
              context: "quickMenu"
            }), a),
            p = n ? x.DX : "a";
          return (0, m.jsx)(f.N_, {
            asChild: !0,
            onSelect: e => {
              d?.(), u?.(), t?.(e)
            },
            ...s,
            children: (0, m.jsxs)(p, {
              ref: l,
              className: v,
              children: [(0, m.jsx)(x.xV, {
                children: e
              }), r && (0, m.jsx)(g.ExternalLink, {
                label: c.formatMessage(E.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Je = (0, o.forwardRef)(function({
          children: e,
          asChild: n,
          className: a,
          onSelect: t,
          external: r,
          hasNotification: s,
          ...l
        }, c) {
          const d = (0, h.A)(),
            {
              closeAvatarMenu: u
            } = (0, o.useContext)(de),
            {
              closeMobileMenu: v
            } = (0, o.useContext)(te),
            p = (0, i.default)(U({
              context: "subMenu"
            }), a, s ? ["_1pgq6b1q"] : null),
            b = n ? x.DX : "a";
          return (0, m.jsx)(f.N_, {
            asChild: !0,
            onSelect: e => {
              u?.(), v?.(), t?.(e)
            },
            ...l,
            children: (0, m.jsxs)(b, {
              ref: c,
              className: p,
              children: [(0, m.jsx)(x.xV, {
                children: e
              }), r && (0, m.jsx)(g.ExternalLink, {
                label: d.formatMessage(E.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Ke = (0, o.forwardRef)(function({
          children: e,
          asChild: n,
          className: a,
          onSelect: t,
          external: r,
          ...s
        }, l) {
          const c = (0, h.A)(),
            {
              closeAvatarMenu: d
            } = (0, o.useContext)(de),
            {
              closeMobileMenu: u
            } = (0, o.useContext)(te),
            v = (0, i.default)(U({
              context: "avatarMenu"
            }), a),
            p = n ? x.DX : "a";
          return (0, m.jsx)(f.N_, {
            asChild: !0,
            onSelect: e => {
              d?.(), u?.(), t?.(e)
            },
            ...s,
            children: (0, m.jsxs)(p, {
              ref: l,
              className: v,
              children: [(0, m.jsx)(x.xV, {
                children: e
              }), r && (0, m.jsx)(g.ExternalLink, {
                label: c.formatMessage(E.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        $e = (0, o.forwardRef)(function({
          children: e,
          asChild: n,
          className: a,
          onSelect: t,
          external: r,
          ...s
        }, l) {
          const c = (0, h.A)(),
            {
              closeAvatarMenu: d
            } = (0, o.useContext)(de),
            {
              closeMobileMenu: u
            } = (0, o.useContext)(te),
            v = (0, i.default)(U({
              context: "nestedMenu"
            }), a),
            p = n ? x.DX : "a";
          return (0, m.jsx)(f.N_, {
            asChild: !0,
            onSelect: e => {
              d?.(), u?.(), t?.(e)
            },
            ...s,
            children: (0, m.jsxs)(p, {
              ref: l,
              className: v,
              children: [(0, m.jsx)(x.xV, {
                children: e
              }), r && (0, m.jsx)(g.ExternalLink, {
                label: c.formatMessage(E.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        en = ({
          children: e
        }) => (0, m.jsx)("div", {
          className: "ncorez0",
          children: e
        });
      const nn = (0, o.forwardRef)(function({
        children: e,
        dataTestId: n,
        onPress: a,
        ...t
      }, r) {
        const {
          inMobileMenu: s,
          closeMobileMenu: i
        } = (0, o.useContext)(te), l = (0, w.v6)({
          "data-testid": n,
          onPress: e => {
            a?.(e), i()
          },
          appearance: "secondary",
          size: (0, S.Ub)("(min-width: 1024px)") ? "SM" : "LG",
          className: "ey3skr0"
        }, t);
        return (0, m.jsx)("div", {
          className: s ? "ey3skr1" : "ey3skr2",
          children: (0, m.jsx)(y.Button, {
            ref: r,
            fullWidth: s,
            ...l,
            children: e
          })
        })
      });
      var an = "_11eee6m7",
        tn = "_11eee6ml";
      const rn = {
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
        sn = ({
          children: e,
          isSearchPage: n
        }) => {
          const {
            formatMessage: a
          } = (0, h.A)(), {
            isNavHidden: t,
            searchBarOpened: r,
            setSearchBarOpened: s,
            avatarMenuOpened: i
          } = (0, o.useContext)(Y);
          (0, o.useEffect)(() => {
            s(n || !1)
          }, []), (0, o.useEffect)(() => {
            s(!1)
          }, [t]), (0, o.useEffect)(() => {
            i && s(!1)
          }, [i]);
          const l = !t && (n || r);
          return (0, m.jsx)(J, {
            showOn: "desktop",
            children: (0, m.jsx)("div", {
              className: "_11eee6m0",
              children: (0, m.jsxs)(N.bL, {
                open: l,
                onOpenChange: s,
                children: [(0, m.jsx)(N.l9, {
                  asChild: !0,
                  children: (0, m.jsx)(y.IconButton, {
                    icon: "Search",
                    appearance: "ghost",
                    size: "SM",
                    label: a(l ? E.search_close_button : E.search_open_button),
                    className: "_11eee6mb",
                    "data-testid": "searchToggle"
                  })
                }), (0, m.jsx)(_.AnimatePresence, {
                  children: l && (0, m.jsx)(O.n, {
                    loop: !n,
                    children: (0, m.jsx)(N.UC, {
                      forceMount: !0,
                      sideOffset: 19,
                      children: (0, m.jsx)(_.motion.div, {
                        initial: "close",
                        animate: "open",
                        exit: "close",
                        variants: rn,
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
        on = (0, o.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          searchTarget: "",
          onChange: () => {}
        }),
        ln = (0, o.forwardRef)(function({
          children: e
        }, n) {
          return (0, m.jsx)("div", {
            role: "search",
            ref: n,
            className: "_11eee6m1",
            children: e
          })
        }),
        cn = (0, o.forwardRef)(function({
          children: e,
          queryMin: n = 0,
          queryMax: a = 100,
          onSearch: t,
          query: r,
          onQueryChange: s,
          target: l,
          onTargetChange: c,
          isSearchPage: d = !1
        }, u) {
          const {
            formatMessage: f
          } = (0, h.A)(), {
            inMobileMenu: v,
            closeMobileMenu: p
          } = (0, o.useContext)(te), [x, b] = (0, L.i)({
            prop: r,
            onChange: s,
            defaultProp: ""
          }), [M, j] = (0, L.i)({
            prop: l,
            onChange: c,
            defaultProp: ""
          }), [C, k] = (0, o.useState)(!1), [w, S] = (0, o.useState)(!1), {
            setForceBackground: O
          } = (0, o.useContext)(Y);
          (0, o.useEffect)(() => (O(!0), () => {
            O(!1)
          }), []);
          const I = (e, n) => {
              t(e, n, p), S(!0)
            },
            P = {
              inSearchMenu: !0,
              searchTarget: M,
              setSearchTarget: e => {
                j(e), x && x.length >= n && I(x, e)
              },
              onChange: s
            },
            A = (0, o.useMemo)(() => v ? (0, m.jsx)(_.AnimatePresence, {
              children: C && (0, m.jsx)(_.motion.div, {
                initial: "close",
                animate: "open",
                exit: "close",
                variants: rn,
                transition: K.springOpen,
                "data-testid": "searchBar",
                children: (0, m.jsx)("div", {
                  className: "_11eee6m9 _11eee6m8",
                  children: e
                })
              })
            }) : (0, m.jsxs)("div", {
              className: "_11eee6m8",
              children: [e, !v && !d && (0, m.jsx)("div", {
                className: "_11eee6md",
                children: (0, m.jsx)(N.bm, {
                  className: "_11eee6me",
                  children: (0, m.jsx)(g.X, {
                    size: "MD",
                    className: "_11eee6mf",
                    label: f(E.search_close_button)
                  })
                })
              })]
            }), [v, C, d, f, e]);
          return (0, m.jsxs)(on.Provider, {
            value: P,
            children: [(0, m.jsxs)("div", {
              className: (0, i.default)("_11eee6m6", {
                [an]: v
              }),
              "data-testid": "searchBar",
              children: [(0, m.jsx)(y.IconButton, {
                onClick: () => {
                  I(x, M)
                },
                appearance: "ghost",
                icon: "Search",
                size: "LG",
                label: f(w ? E.search_disabled_aria_label : E.search_action)
              }), (0, m.jsx)("div", {
                className: "_11eee6mg",
                children: (0, m.jsx)("input", {
                  className: "_11eee6mh",
                  type: "search",
                  value: x,
                  onChange: e => (e => {
                    b(e), S(!1)
                  })(e.target.value),
                  onKeyUp: e => {
                    "Enter" === e.key && x && M && I(x, M)
                  },
                  onFocus: () => k(!0),
                  placeholder: f(E.search_placeholder),
                  ref: u,
                  enterKeyHint: "search",
                  maxLength: a,
                  min: n,
                  max: a
                })
              }), v && C && (0, m.jsx)(y.IconButton, {
                onClick: () => k(!1),
                appearance: "ghost",
                icon: "X",
                size: "MD",
                label: f(E.search_close_button)
              })]
            }), A]
          })
        }),
        dn = ({
          children: e
        }) => {
          const {
            formatMessage: n
          } = (0, h.A)();
          return (0, m.jsx)("div", {
            className: "_11eee6mi",
            role: "radiogroup",
            "aria-label": n(E.search_categories),
            children: e
          })
        },
        un = (0, o.forwardRef)(function({
          children: e,
          value: n,
          title: a,
          active: t,
          hasChevron: r,
          ...s
        }, l) {
          const {
            setSearchTarget: c,
            searchTarget: d
          } = (0, o.useContext)(on), {
            inSearchTargetDropdown: u,
            setRootSearchTarget: h,
            rootSearchTarget: f
          } = (0, o.useContext)(hn), v = t => {
            c?.(t), u && "string" == typeof e && h({
              key: n,
              title: a
            })
          }, p = t || Boolean(d) && (d === n || d === f.key);
          return u ? (0, m.jsx)("button", {
            ref: l,
            type: "button",
            className: (0, i.default)("_11eee6mq", {
              [tn]: p
            }),
            onClick: () => v(n),
            value: n,
            ...s,
            role: "radio",
            "aria-checked": p,
            children: e
          }) : (0, m.jsx)(y.Tag.Root, {
            className: "_11eee6mj",
            color: p ? "monochrome" : "grey",
            size: "LG",
            background: "static",
            onClick: () => v(n),
            hasBorder: !1,
            ...s,
            asChild: !0,
            children: (0, m.jsxs)("button", {
              type: "button",
              ref: l,
              value: n,
              role: "radio",
              "aria-checked": p,
              children: [(0, m.jsx)(y.Tag.Label, {
                asChild: !0,
                children: (0, m.jsx)(y.Body, {
                  size: "MD",
                  appearance: "bold",
                  children: e
                })
              }), r && (0, m.jsx)(y.Tag.Icon, {
                className: "_11eee6mo",
                label: "",
                icon: "ChevronDown"
              })]
            })
          })
        }),
        hn = (0, o.createContext)({
          inSearchTargetDropdown: !1,
          rootSearchTarget: {
            key: "",
            title: ""
          },
          setRootSearchTarget: () => {}
        }),
        mn = ({
          title: e,
          children: n
        }) => {
          const [a, t] = (0, o.useState)(!1), [r, s] = (0, o.useState)({
            key: "",
            title: ""
          }), {
            searchTarget: i
          } = (0, o.useContext)(on), {
            avatarMenuOpened: l
          } = (0, o.useContext)(Y);
          i !== r.key && "" !== r.key && s({
            key: "",
            title: ""
          });
          const c = !l && a;
          return (0, m.jsxs)(N.bL, {
            open: c,
            onOpenChange: t,
            children: [(0, m.jsx)(N.l9, {
              asChild: !0,
              children: (0, m.jsx)(un, {
                value: e,
                title: e,
                active: !!r.key,
                hasChevron: !0,
                children: r.title || e
              })
            }), (0, m.jsx)(hn.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: r,
                setRootSearchTarget: e => {
                  s(n => "function" == typeof e ? e(n) : e), t(!1)
                }
              },
              children: (0, m.jsx)(N.UC, {
                align: "start",
                className: "_11eee6mp _1r3j5az0 _11eee6mn",
                children: n
              })
            })]
          })
        },
        fn = (0, o.forwardRef)(function({
          errorMessage: e
        }, n) {
          return e && (0, m.jsx)("div", {
            ref: n,
            className: "_11eee6m2",
            "aria-live": "polite",
            children: e
          })
        }),
        vn = ({
          to: e,
          target: n,
          className: a,
          onNavigate: t,
          onClick: r,
          reloadDocument: s,
          children: o,
          ...i
        }) => {
          const l = e?.startsWith("http");
          return (0, m.jsx)("a", {
            href: e,
            className: a,
            onClick: n => {
              r?.(n), l || s || (t ? (n.preventDefault(), t(e)) : (n.preventDefault(), window.history.pushState({}, "", e)))
            },
            target: n,
            ...i,
            children: o
          })
        };
      var pn = "_13sb4ht3",
        xn = "_13sb4ht4";
      const gn = () => (0, m.jsx)("div", {
        className: "_13sb4ht2",
        children: (0, m.jsx)("svg", {
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [pn, xn, ""].map((e, n) => (0, m.jsx)("path", {
            className: e,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.61511 10.9978H12.5848C14.3845 10.9978 15.9421 10.4507 15.9421 8.44939C15.9421 6.86148 14.5745 6.52423 13.2595 6.52423H9.56608L8.61511 10.9978ZM24.3357 21.6949H30.6663L24.9533 25.6406L25.8771 31.8581L20.9272 28.1057L14.2842 32.0001L17.3902 25.4102C17.3902 25.4102 13.7775 21.6513 13.7803 21.6513C13.5374 21.3314 13.4563 20.5073 13.4563 20.1527C13.4563 19.7045 13.4849 19.2505 13.5155 18.7669C13.5503 18.2159 13.5875 17.6266 13.5875 16.9637C13.5875 15.3278 12.8632 14.4723 11.0925 14.4723H7.77269L6.32717 21.2249H1.33301L5.30462 2.66675H14.7029C18.1954 2.66675 20.861 3.52407 20.861 7.47735C20.861 10.2601 19.4884 12.2367 16.4605 12.6517V12.7051C17.8843 13.0428 18.4177 14.0037 18.4177 15.7946C18.4177 16.5095 18.3959 17.1369 18.3754 17.7271C18.3572 18.2511 18.34 18.7456 18.34 19.246C18.34 19.8873 18.507 20.9355 18.9277 21.6513H19.6215L23.3316 15.4672L24.3357 21.6949ZM23.5498 22.6019H27.7512L23.9634 25.217L24.6402 29.7765L20.9957 27.0111L16.3688 29.7218L18.4869 25.2341L15.9114 22.5578H20.1458L22.8244 18.093L23.5498 22.6019Z",
            fill: "currentcolor"
          }, e + n))
        })
      });
      var bn = "corzs33";
      const _n = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        Mn = ({
          quickAccessHidden: e,
          children: n,
          href: a,
          onNavigate: t
        }) => {
          const r = (0, h.A)(),
            [s, l] = (0, o.useState)(!1),
            c = (0, o.useRef)(null),
            [d, u] = (0, o.useState)(!1),
            {
              brand: f,
              brandTitle: v,
              isNavHidden: p,
              simpleMenu: x
            } = (0, o.useContext)(Y),
            g = a || "/";
          return (0, o.useEffect)(() => {
            l(!1)
          }, [p, e]), (0, o.useEffect)(() => {
            const e = () => {
              const e = c.current?.getBoundingClientRect().width || 0,
                n = c.current?.children;
              Array.from(Array(n?.length)).reduce((e, a, t) => e + n?.item(t)?.getBoundingClientRect().width, 0) + 60 >= e ? u(!1) : u(!0)
            };
            return v ? (e(), window.addEventListener("resize", e)) : (u(!1), window.removeEventListener("resize", e)), () => {
              window.removeEventListener("resize", e)
            }
          }, [v]), (0, m.jsxs)("div", {
            className: "corzs30",
            children: [(0, m.jsx)(J, {
              showOn: "desktop",
              children: (0, m.jsxs)("div", {
                className: "corzs31",
                children: [(0, m.jsxs)("div", {
                  className: bn,
                  children: [!n && (0, m.jsx)(vn, {
                    to: g,
                    "aria-label": r.formatMessage(E.nav_rockstargames_home),
                    onNavigate: t,
                    className: "corzs39",
                    children: (0, m.jsx)(gn, {})
                  }), n && (0, m.jsxs)(N.bL, {
                    open: s,
                    onOpenChange: l,
                    children: [(0, m.jsx)(J, {
                      showOn: "desktop",
                      children: (0, m.jsx)(N.l9, {
                        asChild: !0,
                        children: (0, m.jsx)("button", {
                          type: "button",
                          className: "corzs38",
                          "aria-label": r.formatMessage(E.nav_rockstargames_logo),
                          children: (0, m.jsx)(gn, {})
                        })
                      })
                    }), (0, m.jsx)(_.AnimatePresence, {
                      children: s && (0, m.jsx)(J, {
                        showOn: "desktop",
                        children: (0, m.jsx)(N.UC, {
                          forceMount: !0,
                          align: "start",
                          sideOffset: 24,
                          children: (0, m.jsx)(_.motion.div, {
                            className: "corzs3a",
                            variants: _n,
                            initial: "closed",
                            animate: "open",
                            exit: "closed",
                            transition: {
                              duration: .2
                            },
                            children: n
                          })
                        })
                      })
                    })]
                  })]
                }), (f || v) && (0, m.jsxs)("div", {
                  className: "corzs34",
                  children: [(0, m.jsx)("div", {
                    className: "corzs35"
                  }), f && (0, m.jsx)("div", {
                    className: "corzs36",
                    children: f
                  }), v && (0, m.jsx)(y.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: v
                  })]
                })]
              })
            }), (0, m.jsx)(J, {
              showOn: "mobile",
              children: (0, m.jsxs)("div", {
                className: "corzs32",
                ref: c,
                children: [(0, m.jsx)("div", {
                  className: bn,
                  children: (!f || x) && (0, m.jsx)(vn, {
                    to: g,
                    "aria-label": r.formatMessage(E.nav_rockstargames_home),
                    onNavigate: t,
                    className: (0, i.clsx)("corzs39", {
                      corzs3b: d
                    }),
                    tabIndex: d ? -1 : 0,
                    children: (0, m.jsx)(gn, {})
                  })
                }), (f || v) && (0, m.jsxs)("div", {
                  className: (0, i.clsx)("corzs34", {
                    corzs3b: v && !d
                  }),
                  children: [x && (0, m.jsx)("div", {
                    className: "corzs35"
                  }), f && (0, m.jsx)("div", {
                    className: "corzs36",
                    children: f
                  }), v && (0, m.jsx)(y.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: v
                  })]
                })]
              })
            })]
          })
        },
        jn = {
          MenuContext: ke,
          HiddenMenuContext: we,
          SubMenuContext: Qe,
          MobileMenuContext: te,
          GlobalNavigationContext: Y
        }
    }
  }
]);