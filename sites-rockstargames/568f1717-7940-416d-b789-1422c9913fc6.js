try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "568f1717-7940-416d-b789-1422c9913fc6", e._sentryDebugIdIdentifier = "sentry-dbid-568f1717-7940-416d-b789-1422c9913fc6")
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
  [1177, 5504], {
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
    5656(e, n, a) {
      a.r(n), a.d(n, {
        Actions: () => $e,
        AvatarMenu: () => fe,
        AvatarMenuLanguageLabel: () => Me,
        AvatarMenuSection: () => pe,
        AvatarMenuSectionContent: () => be,
        AvatarMenuSectionHeader: () => xe,
        AvatarMenuSectionHeaderDropdown: () => ge,
        Breakpoint: () => X,
        CallToAction: () => en,
        Contexts: () => _n,
        Header: () => B,
        Menu: () => we,
        MenuContent: () => Ge,
        MenuIcon: () => Ue,
        MenuItem: () => Ie,
        MenuLink: () => Ve,
        MenuList: () => Se,
        MenuSub: () => Qe,
        MenuTrigger: () => Le,
        MobileMenu: () => te,
        MobileMenuNav: () => ne,
        QuickMenu: () => je,
        Root: () => G,
        Search: () => rn,
        SearchBar: () => ln,
        SearchContainer: () => on,
        SearchError: () => mn,
        SearchFilters: () => cn,
        SearchTarget: () => dn,
        SearchTargetDropdown: () => hn,
        SiteTitle: () => Mn
      });
      var t = a(93082),
        r = a(81270),
        s = a(39615),
        o = a(30212),
        i = a(14376),
        l = a(23470),
        c = a(68925),
        d = a(39793),
        u = (a(54446), a(79067)),
        h = a(96883),
        m = a(52457),
        f = a(38957),
        v = a(66760),
        p = a(13517),
        x = a(88819),
        g = a(3541),
        b = a(68206),
        M = a(41421),
        _ = a(81010),
        j = a(29190),
        y = a(69353),
        N = a(28528),
        C = a(4956),
        k = a(1531),
        w = Object.defineProperty,
        S = (e, n) => () => (n || (e((n = {
          exports: {}
        }).exports, n), e = null), n.exports),
        O = (e, n) => {
          let a = {};
          for (var t in e) w(a, t, {
            get: e[t],
            enumerable: !0
          });
          return n || w(a, Symbol.toStringTag, {
            value: "Module"
          }), a
        };
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
      var L = (0, i.YK)({
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
      const E = () => {
        const e = (0, t.useRef)(null);
        return (0, d.jsx)("button", {
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
          children: (0, d.jsx)(l.A, {
            ...L.accessibility_skip_button
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

      function P(e, n) {
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
          n % 2 ? P(Object(a), !0).forEach(function(n) {
            var t, r, s;
            t = e, r = n, s = a[n], (r = A(r)) in t ? Object.defineProperty(t, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[r] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : P(Object(a)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
          })
        }
        return e
      }

      function z(e, n) {
        var a = {};
        for (var t in e) a[t] = n(e[t], t);
        return a
      }
      var T = (e, n, a) => {
          for (var t of Object.keys(e)) {
            var r;
            if (e[t] !== (null !== (r = n[t]) && void 0 !== r ? r : a[t])) return !1
          }
          return !0
        },
        R = e => {
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
            for (var [c, d] of e.compoundVariants) T(c, t, e.defaultVariants) && (a += " " + d);
            return a
          };
          return n.variants = () => Object.keys(e.variantClassNames), n.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return z(e.variantClassNames, e => z(e, e => e.split(" ")[0]))
            }
          }, n
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
            simpleMenu: n
          } = (0, t.useContext)(H);
          return (0, d.jsx)("header", {
            className: (0, r.default)(q({
              layout: n ? "simple" : "default"
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
          brand: n,
          brandTitle: a,
          mode: o = "default",
          navColorTheme: i = "dark",
          forceSolidBackground: l = !1,
          forceVisibility: c,
          simpleMenu: u = !1,
          locale: h
        }) => {
          const [m, f] = (0, t.useState)(!1), [v, p] = (0, t.useState)(!0), [x, g] = (0, t.useState)(!1), [b, M] = (0, t.useState)(!1), [_, j] = (0, t.useState)(!1), y = (0, t.useRef)(null), N = (0, t.useRef)(null), [C, k] = (0, t.useState)(null), [w, S] = (0, t.useState)(l), O = (0, t.useMemo)(() => "visible" !== c && ("hidden" === c || m), [m, c]);
          (0, t.useEffect)(() => {
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
          }, []), (0, t.useEffect)(() => {
            const e = "data-show-more-content";
            return O ? document.body.setAttribute(e, "") : document.body.removeAttribute(e), () => {
              document.body.removeAttribute(e)
            }
          }, [O]), (0, t.useEffect)(() => {
            const e = e => {
              f(e.detail.isHidden)
            };
            return window.addEventListener("header:hideNav", e), () => {
              window.removeEventListener("header:hideNav", e)
            }
          }, []);
          const I = !v || l || w ? "dark" : i;
          return (0, d.jsx)("div", {
            id: "global-nav-root",
            className: "siteHeaderContainer",
            children: (0, d.jsx)("div", {
              ref: k,
              children: C && (0, d.jsx)(s.NP, {
                colorScheme: I,
                defaultColorScheme: I,
                defaultPlatformScale: "desktop",
                container: C,
                locale: h,
                children: (0, d.jsx)(H.Provider, {
                  value: {
                    brand: n,
                    brandTitle: a,
                    isNavHidden: O,
                    containerRef: y,
                    navContentRef: N,
                    simpleMenu: u,
                    setForceBackground: S,
                    avatarMenuOpened: x,
                    setAvatarMenuOpened: g,
                    mainMenuOpened: b,
                    setMainMenuOpened: M,
                    searchBarOpened: _,
                    setSearchBarOpened: j,
                    locale: h
                  },
                  children: (0, d.jsxs)("div", {
                    className: (0, r.default)("ut2qrf1", "ut2qrf0"),
                    ref: y,
                    lang: h,
                    "data-scroll-top": v,
                    "data-color-mode": o,
                    "data-theme": I,
                    "data-force-background": l || w,
                    children: [(0, d.jsx)(E, {}), (0, d.jsx)("div", {
                      className: "ut2qrf2"
                    }), (0, d.jsxs)("div", {
                      ref: N,
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
          const [n, a] = (0, t.useState)();
          return (0, t.useEffect)(() => {
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
          }, []), (0, d.jsx)(o.A, {
            locale: n?.locale || "en-US",
            messages: {
              ...n?.messages
            },
            children: n && (0, d.jsx)(Y, {
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
        U = R({
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
        V = "_1pgq6b1f",
        W = O({
          desktop: () => F,
          mobile: () => Z
        }),
        F = "dsroxs1",
        Z = "dsroxs0";
      const X = ({
          showOn: e,
          ...n
        }) => (0, d.jsx)(f.DX, {
          className: e ? W[e] : "",
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
        ne = ({
          children: e
        }) => {
          const [n, a] = (0, t.useState)("");
          return (0, d.jsx)(ee.Provider, {
            value: {
              openedNav: n
            },
            children: (0, d.jsx)(u.bL, {
              value: n,
              onValueChange: a,
              children: (0, d.jsx)(u.B8, {
                className: "vkitev1",
                children: e
              })
            })
          })
        },
        ae = (0, t.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        te = ({
          children: e
        }) => {
          const n = (0, c.A)(),
            [a, s] = (0, t.useState)(!1),
            [o, i] = (0, t.useState)(!1),
            [l, u] = (0, t.useState)(!1),
            {
              brand: h,
              setForceBackground: f,
              simpleMenu: v
            } = (0, t.useContext)(H);
          (0, t.useEffect)(() => {
            a && f(!0)
          }, [a]), (0, t.useEffect)(() => {
            const e = e => {
              const n = e?.target;
              a && n.innerWidth >= 1024 && M()
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [a]);
          const b = {
              show: {
                height: "100dvh",
                paddingBottom: a && h ? "var(--k8we7i0)" : "",
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
              s(!a), i(!1)
            };
          return v ? null : (0, d.jsx)(ae.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                s(!1)
              },
              setHasQuickMenu: u
            },
            children: (0, d.jsxs)(x.bL, {
              open: a,
              onOpenChange: s,
              children: [(0, d.jsx)(X, {
                showOn: "mobile",
                children: (0, d.jsx)(re, {
                  onClick: M,
                  isMenuOpen: a
                })
              }), (0, d.jsx)(p.AnimatePresence, {
                onExitComplete: () => f(!1),
                children: a && (0, d.jsx)(X, {
                  showOn: "mobile",
                  children: (0, d.jsxs)(p.motion.div, {
                    className: "vkiteve",
                    variants: b,
                    animate: "show",
                    initial: "hidden",
                    exit: "hidden",
                    children: [(0, d.jsx)(x.hJ, {
                      className: "vkiteva"
                    }), (0, d.jsx)(x.UC, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => s(!1),
                      children: (0, d.jsxs)(p.motion.div, {
                        className: (0, r.default)((0, m.m)("dark"), "vkitev4", "vkitev7"),
                        variants: b,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, d.jsxs)(g.s6, {
                          children: [(0, d.jsx)(x.hE, {
                            children: n.formatMessage(L.nav_mobilemenu_title)
                          }), (0, d.jsx)(x.VY, {
                            children: n.formatMessage(L.nav_mobilemenu_title)
                          })]
                        }), (0, d.jsx)("div", {
                          className: (0, r.default)(o ? "vkitev9" : "", "vkitev6"),
                          children: (0, d.jsx)(p.motion.div, {
                            className: (0, r.default)("vkitev0", l ? "vkitev8" : ""),
                            children: t.Children.map(e, e => (0, d.jsx)(p.motion.div, {
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
        re = ({
          className: e,
          isMenuOpen: n,
          ...a
        }) => {
          const t = (0, c.A)();
          return (0, d.jsx)("div", {
            className: (0, r.default)("vkitevb", e),
            children: (0, d.jsxs)(x.l9, {
              title: t.formatMessage(n ? L.nav_mobilemenu_close : L.nav_mobilemenu_open),
              type: "button",
              className: "vkitevc",
              "data-testid": "hamburgerNav",
              ...a,
              children: [(0, d.jsx)("span", {
                className: $,
                "data-opened": n
              }), (0, d.jsx)("span", {
                className: $,
                "data-opened": n
              }), (0, d.jsx)("span", {
                className: $,
                "data-opened": n
              })]
            })
          })
        },
        se = (...e) => {
          const n = e.filter(Boolean);
          return n.length <= 1 ? n[0] || null : function(e) {
            for (const a of n) "function" == typeof a ? a(e) : a && (a.current = e)
          }
        },
        oe = ({
          children: e,
          className: n,
          ...a
        }) => {
          const {
            containerRef: o,
            locale: i
          } = (0, t.useContext)(H);
          return (0, d.jsx)(s.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            locale: i,
            children: (0, d.jsx)(j.b, {
              className: (0, r.default)("g1xx1x0 ut2qrf0", n),
              container: o?.current,
              ...a,
              children: e
            })
          })
        };
      var ie = "m27a3y7",
        le = S((e, n) => {
          n.exports = "PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ0IiBoZWlnaHQ9IjQ0IiByeD0iMjIiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMTUiLz4KPHBhdGggZD0iTTI5LjMzMzQgMzAuMjVWMjguNDE2N0MyOS4zMzM0IDI3LjQ0NDIgMjguOTQ3MSAyNi41MTE2IDI4LjI1OTUgMjUuODIzOUMyNy41NzE4IDI1LjEzNjMgMjYuNjM5MiAyNC43NSAyNS42NjY3IDI0Ljc1SDE4LjMzMzRDMTcuMzYxIDI0Ljc1IDE2LjQyODMgMjUuMTM2MyAxNS43NDA3IDI1LjgyMzlDMTUuMDUzMSAyNi41MTE2IDE0LjY2NjcgMjcuNDQ0MiAxNC42NjY3IDI4LjQxNjdWMzAuMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMS45OTk5IDIxLjA4MzNDMjQuMDI1IDIxLjA4MzMgMjUuNjY2NiAxOS40NDE3IDI1LjY2NjYgMTcuNDE2N0MyNS42NjY2IDE1LjM5MTYgMjQuMDI1IDEzLjc1IDIxLjk5OTkgMTMuNzVDMTkuOTc0OSAxMy43NSAxOC4zMzMzIDE1LjM5MTYgMTguMzMzMyAxNy40MTY3QzE4LjMzMzMgMTkuNDQxNyAxOS45NzQ5IDIxLjA4MzMgMjEuOTk5OSAyMS4wODMzWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
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
          className: n
        }) => (0, d.jsx)("div", {
          className: (0, r.default)("m27a3y1", n),
          children: e
        }),
        fe = ({
          avatarIconUrl: e,
          nickname: n,
          isLoggedIn: a,
          children: r,
          onOpenChange: s
        }) => {
          const o = (0, c.A)(),
            i = le(),
            [l, u] = (0, t.useState)(["open"]),
            {
              isNavHidden: h,
              setAvatarMenuOpened: f,
              mainMenuOpened: v,
              setMainMenuOpened: j
            } = (0, t.useContext)(H),
            [y, N] = (0, t.useState)(!1),
            [C, k] = (0, t.useState)(!1),
            [w, S] = (0, t.useState)(h),
            O = () => {
              N(!1), k(!1)
            };
          w !== h && (S(h), h && O());
          const I = e => {
            u(["open", ...e.filter(e => "open" !== e)])
          };
          return (0, t.useEffect)(() => {
            const e = y || C;
            e && v && j(!1), f(e)
          }, [y, C, v, j, f]), (0, d.jsxs)(ce.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: l,
              closeAvatarMenu: O
            },
            children: [(0, d.jsx)(M.bL, {
              open: y,
              onOpenChange: e => {
                s?.(e), N(e)
              },
              modal: !1,
              children: (0, d.jsx)(X, {
                showOn: "desktop",
                children: (0, d.jsxs)(me, {
                  children: [(0, d.jsx)(M.l9, {
                    asChild: !0,
                    children: (0, d.jsx)(b.IconButton, {
                      size: "SM",
                      label: o.formatMessage(y ? L.avatar_menu_close : L.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: ie,
                      "aria-label": o.formatMessage(y ? L.avatar_menu_close : L.avatar_menu_open),
                      "data-testid": "avatarMenuButtonDesktop",
                      "data-logged-in": a,
                      children: e && (0, d.jsx)("img", {
                        className: "m27a3y8",
                        src: e || i,
                        alt: n
                      })
                    })
                  }), (0, d.jsx)(p.AnimatePresence, {
                    children: y && (0, d.jsx)(M.UC, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      onOpenAutoFocus: e => e.preventDefault(),
                      className: (0, m.m)("dark"),
                      children: (0, d.jsx)(p.motion.div, {
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
                          onValueChange: I,
                          children: (0, d.jsx)(Qe, {
                            className: "m27a3y2 _1r3j5az0",
                            children: r
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, d.jsx)(x.bL, {
              open: C,
              onOpenChange: e => {
                s?.(e), k(e)
              },
              children: (0, d.jsx)(X, {
                showOn: "mobile",
                children: (0, d.jsxs)(me, {
                  children: [(0, d.jsx)(x.l9, {
                    className: ie,
                    "aria-label": o.formatMessage(C ? L.avatar_menu_close : L.avatar_menu_open),
                    "data-testid": "avatarMenuButtonMobile",
                    asChild: !0,
                    "data-logged-in": a,
                    children: (0, d.jsx)(b.IconButton, {
                      size: "SM",
                      label: o.formatMessage(y ? L.avatar_menu_close : L.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: ie,
                      "aria-label": o.formatMessage(y ? L.avatar_menu_close : L.avatar_menu_open),
                      children: e && (0, d.jsx)("img", {
                        className: "m27a3y8",
                        src: e || i
                      })
                    })
                  }), (0, d.jsx)(p.AnimatePresence, {
                    children: C && (0, d.jsx)(oe, {
                      asChild: !0,
                      children: (0, d.jsxs)(x.UC, {
                        forceMount: !0,
                        className: (0, m.m)("dark"),
                        children: [(0, d.jsxs)(g.s6, {
                          children: [(0, d.jsx)(x.hE, {
                            children: o.formatMessage(L.nav_avatarmenu_title)
                          }), (0, d.jsx)(x.VY, {
                            children: o.formatMessage(L.nav_avatarmenu_title)
                          })]
                        }), (0, d.jsxs)(p.motion.div, {
                          variants: he,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: "m27a3y3",
                          children: [(0, d.jsx)(x.bm, {
                            className: "m27a3y5",
                            "aria-label": o.formatMessage(L.avatar_menu_close),
                            children: (0, d.jsx)("div", {
                              className: "m27a3y6"
                            })
                          }), (0, d.jsx)(_.bL, {
                            type: "multiple",
                            value: l,
                            onValueChange: I,
                            children: (0, d.jsx)(Qe, {
                              className: "m27a3y4 _1r3j5az0",
                              children: r
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
        ve = (0, t.createContext)({
          avatarMenuItemId: ""
        }),
        pe = ({
          children: e,
          value: n
        }) => {
          const a = (0, t.useId)();
          return (0, d.jsx)(ve.Provider, {
            value: {
              avatarMenuItemId: n || a
            },
            children: (0, d.jsx)(_.q7, {
              value: n || a,
              className: "m27a3y9",
              children: e
            })
          })
        },
        xe = ({
          children: e,
          ...n
        }) => (0, d.jsx)(_.Y9, {
          asChild: !0,
          children: (0, d.jsx)("li", {
            className: "m27a3y0",
            children: (0, d.jsx)(_.l9, {
              className: "m27a3ya",
              ...n,
              children: e
            })
          })
        }),
        ge = ({
          children: e,
          ...n
        }) => (0, d.jsx)(_.Y9, {
          style: {
            margin: 0
          },
          children: (0, d.jsxs)(_.l9, {
            className: "m27a3yb",
            "data-testid": "header-language-selector-button",
            ...n,
            children: [e, (0, d.jsx)(v.ChevronDown, {
              label: "",
              size: "SM",
              className: "m27a3yc"
            })]
          })
        }),
        be = ({
          children: e,
          ...n
        }) => {
          const {
            avatarMenuOpenItems: a
          } = (0, t.useContext)(ce), {
            avatarMenuItemId: r
          } = (0, t.useContext)(ve), s = a.indexOf(r) >= 0;
          return (0, d.jsx)(_.UC, {
            forceMount: !0,
            asChild: !0,
            ...n,
            children: (0, d.jsx)(p.motion.div, {
              variants: ue,
              initial: "closed",
              animate: s ? "open" : "closed",
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
        }) => (0, d.jsx)("div", {
          className: "m27a3yd",
          ...n,
          children: e
        }),
        _e = (0, t.createContext)({
          inQuickMenu: !1
        }),
        je = ({
          children: e
        }) => {
          const {
            inMobileMenu: n,
            setHasQuickMenu: a
          } = (0, t.useContext)(ae), s = {
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
          }, o = {
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
          }, i = (0, r.default)((0, m.m)("dark"), "_1xtz6n0");
          return (0, t.useEffect)(() => (a?.(!0), () => {
            a?.(!1)
          }), []), n ? (0, d.jsx)(_e.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, d.jsx)(u.bL, {
              asChild: !0,
              children: (0, d.jsx)(p.motion.div, {
                variants: s,
                className: i,
                children: t.Children.map(e, e => (0, d.jsx)(p.motion.li, {
                  variants: o,
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
                className: i,
                children: e
              })
            })
          })
        },
        ye = e => {
          e.preventDefault()
        },
        Ne = e => {
          e.nativeEvent.repeat && e.preventDefault()
        },
        Ce = (0, t.createContext)({
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
          const n = (0, c.A)(),
            [a, r] = (0, t.useState)(""),
            [s, o] = (0, t.useState)(e),
            [i, l] = (0, t.useState)([]),
            h = (0, t.useRef)(null),
            m = (0, t.useRef)(null),
            {
              isNavHidden: f,
              mainMenuOpened: v,
              avatarMenuOpened: p,
              setMainMenuOpened: x
            } = (0, t.useContext)(H),
            {
              inAvatarMenu: g
            } = (0, t.useContext)(ce),
            b = (0, t.useCallback)(() => {
              const n = m.current;
              if (!n) return;
              const {
                children: a
              } = n;
              let r = 0;
              const s = Array.from(a).map((e, n) => {
                  const a = e.getBoundingClientRect().top;
                  return 0 === n && (r = a), a
                }),
                i = s.filter(e => e !== r).length,
                c = s.findIndex(e => e > r);
              let d = c;
              if (c > 0 && (d = c - 2), i) {
                const n = [],
                  a = [];
                t.Children.forEach(e, (e, t) => {
                  t < d ? n.push(e) : a.push(e)
                }), n && o(n), a && l(a)
              } else o(e), l([])
            }, [e, m?.current]);
          (0, t.useEffect)(() => {
            const e = new ResizeObserver(b);
            return m?.current && e.observe(m.current), () => {
              m?.current && e.unobserve(m.current)
            }
          }, [e, m?.current]), (0, t.useEffect)(() => {
            r("")
          }, [f]), (0, t.useEffect)(() => {
            const e = () => r("");
            return window.addEventListener("scroll", e), () => {
              window.removeEventListener("scroll", e)
            }
          }, []), (0, t.useEffect)(() => {
            v || "" === a || r("")
          }, [v]), (0, t.useEffect)(() => {
            x("" !== a)
          }, [a, p, v, g]);
          const M = Q({
              visibility: "visible"
            }),
            _ = Q({
              visibility: "hidden"
            });
          return (0, d.jsx)(Ce.Provider, {
            value: {
              inMenu: !0,
              openedNav: a,
              setOpenedNav: r
            },
            children: (0, d.jsx)(X, {
              showOn: "desktop",
              children: (0, d.jsxs)(u.bL, {
                className: "_1pgq6b10",
                value: a,
                onValueChange: r,
                children: [(0, d.jsxs)(Se, {
                  ref: h,
                  className: M,
                  children: [s, i?.length > 0 && (0, d.jsxs)(Ie, {
                    children: [(0, d.jsx)(Le, {
                      "data-testid": "navMore",
                      children: n.formatMessage(L.nav_more_dropdown)
                    }), (0, d.jsx)(Ge, {
                      children: (0, d.jsx)(Qe, {
                        children: (0, d.jsx)(Se, {
                          children: i
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
          className: n,
          ...a
        }, t) {
          return (0, d.jsx)(u.B8, {
            ref: t,
            className: (0, r.default)("_1pgq6b1e", n),
            ...a,
            children: e
          })
        }),
        Oe = (0, t.createContext)({
          value: ""
        }),
        Ie = (0, t.forwardRef)(function({
          testId: e,
          children: n,
          ...a
        }, s) {
          const {
            depth: o
          } = (0, t.useContext)(Ye), {
            inMobileMenu: i
          } = (0, t.useContext)(ae), l = (0, t.useRef)(null), c = `rsm-${(0,h.B)()}`, m = "_1pgq6b15", f = "_1pgq6b16";
          return (0, d.jsx)(Oe.Provider, {
            value: {
              value: c,
              ref: l
            },
            children: (0, d.jsx)(u.q7, {
              value: c,
              ref: se(s, l),
              className: (0, r.default)({
                [m]: !0,
                [f]: 1 === o && !i
              }),
              "data-testid": e,
              "data-menu-item": o,
              ...a,
              children: n
            })
          })
        }),
        Le = ({
          children: e,
          ...n
        }) => {
          const {
            inMenu: a
          } = (0, t.useContext)(Ce), {
            inAvatarMenu: r
          } = (0, t.useContext)(ce), {
            inQuickMenu: s
          } = (0, t.useContext)(_e), {
            inMobileMenu: o
          } = (0, t.useContext)(ae), {
            inSubMenu: i,
            depth: l
          } = (0, t.useContext)(Ye), c = {
            ...n,
            "data-menu-trigger": !0
          };
          return l > 1 ? (0, d.jsx)(Re, {
            ...c,
            children: e
          }) : r ? (0, d.jsx)(De, {
            ...c,
            children: e
          }) : i ? (0, d.jsx)(Te, {
            ...c,
            children: e
          }) : s ? (0, d.jsx)(ze, {
            ...c,
            children: e
          }) : o ? (0, d.jsx)(Pe, {
            ...c,
            children: e
          }) : a ? (0, d.jsx)(Ae, {
            ...c,
            children: e
          }) : void 0
        },
        Ee = e => {
          const n = (0, c.A)();
          return (0, d.jsx)(v.ChevronDown, {
            ...e,
            label: ` - ${n.formatMessage(L.nav_rockstargames_submenu_indicator)}`,
            className: "_1pgq6b1g"
          })
        },
        Ae = e => {
          const {
            children: n,
            className: a,
            onClick: t,
            ...s
          } = e;
          return (0, d.jsxs)(u.l9, {
            onPointerMove: ye,
            onPointerLeave: ye,
            onKeyDown: Ne,
            onClick: t,
            className: (0, r.default)(V, U({
              context: "mainMenu"
            }), a),
            ...s,
            children: [n, (0, d.jsx)(Ee, {})]
          })
        },
        Pe = e => {
          const {
            children: n,
            className: a,
            onClick: t,
            ...s
          } = e;
          return (0, d.jsxs)(u.l9, {
            onPointerMove: ye,
            onPointerLeave: ye,
            onClick: t,
            className: (0, r.default)(V, U({
              context: "mobileMenu"
            }), a),
            ...s,
            children: [n, (0, d.jsx)(Ee, {
              size: "LG"
            })]
          })
        },
        De = e => {
          const {
            children: n,
            className: a,
            onClick: t,
            ...s
          } = e;
          return (0, d.jsxs)(u.l9, {
            onPointerMove: ye,
            onPointerLeave: ye,
            onClick: t,
            className: (0, r.default)(V, U({
              context: "avatarMenu"
            }), a),
            ...s,
            children: [n, (0, d.jsx)(Ee, {})]
          })
        },
        ze = e => {
          const {
            children: n,
            className: a,
            onClick: t,
            ...s
          } = e;
          return (0, d.jsxs)(u.l9, {
            onPointerMove: ye,
            onPointerLeave: ye,
            onClick: t,
            className: (0, r.default)(V, U({
              context: "quickMenu"
            }), a),
            ...s,
            children: [n, (0, d.jsx)(Ee, {})]
          })
        },
        Te = e => {
          const {
            children: n,
            className: a,
            onClick: t,
            ...s
          } = e;
          return (0, d.jsxs)(u.l9, {
            onPointerMove: ye,
            onPointerLeave: ye,
            onClick: t,
            className: (0, r.default)(V, U({
              context: "subMenu"
            }), a),
            ...s,
            children: [n, (0, d.jsx)(Ee, {})]
          })
        },
        Re = e => {
          const {
            children: n,
            className: a,
            onClick: t,
            ...s
          } = e;
          return (0, d.jsxs)(u.l9, {
            onPointerMove: ye,
            onPointerLeave: ye,
            onClick: t,
            className: (0, r.default)(V, U({
              context: "nestedMenu"
            }), a),
            ...s,
            children: [n, (0, d.jsx)(Ee, {})]
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
          animationOverride: n,
          ...a
        }, s) {
          const {
            navContentRef: o
          } = (0, t.useContext)(H), {
            inSubMenu: i,
            openedNav: l
          } = (0, t.useContext)(Ye), {
            openedNav: c
          } = (0, t.useContext)(Ce), {
            openedNav: h
          } = (0, t.useContext)(ee), {
            value: f,
            ref: v
          } = (0, t.useContext)(Oe), {
            inMobileMenu: x
          } = (0, t.useContext)(ae), {
            isHidden: g
          } = (0, t.useContext)(ke), {
            inAvatarMenu: b
          } = (0, t.useContext)(ce), M = (0, t.useRef)(null), _ = [l, c, h].includes(f);
          if ((0, t.useEffect)(() => {
              var e;
              _ && M.current && (e = M.current, document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => e.disabled || e.hidden ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
              }).nextNode())?.focus()
            }, [_]), g) return null;
          const j = "_1pgq6b18 _1r3j5az0 _1pgq6b17",
            y = "_1pgq6b19",
            N = "_1pgq6b1a",
            C = "_1pgq6b1b";
          return (0, d.jsx)(p.AnimatePresence, {
            children: _ && (0, d.jsx)(u.UC, {
              ref: se(s, M),
              className: (0, r.default)((0, m.m)("dark"), {
                [j]: !x,
                [y]: x,
                [N]: i && !x,
                [C]: b
              }),
              onPointerEnter: ye,
              onPointerLeave: ye,
              onPointerDown: ye,
              onPointerDownOutside: e => {
                i && e.preventDefault()
              },
              style: {
                top: o?.current?.getBoundingClientRect().height,
                left: v?.current?.getBoundingClientRect().left
              },
              ...a,
              asChild: !0,
              forceMount: !0,
              children: (0, d.jsx)(p.motion.div, {
                variants: n || i || x ? Be : qe,
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
          ...n
        }, a) {
          const {
            depth: r
          } = (0, t.useContext)(Ye), {
            openedNav: s
          } = (0, t.useContext)(ee), {
            isNavHidden: o
          } = (0, t.useContext)(H), [i, l] = (0, t.useState)("");
          (0, t.useEffect)(() => {
            l("")
          }, [s, o]);
          const c = r ? r + 1 : 1;
          return (0, d.jsx)(Ye.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: i,
              depth: c
            },
            children: (0, d.jsx)(u.bL, {
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
              children: (0, d.jsx)(p.motion.div, {
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
        Ue = (0, t.forwardRef)(function({
          className: e,
          ...n
        }, a) {
          return (0, d.jsx)("img", {
            ref: a,
            className: (0, r.default)("_1pgq6b1p", e),
            ...n
          })
        }),
        Ve = ({
          hasNotification: e,
          onClick: n,
          ...a
        }) => {
          const {
            inMenu: r,
            setOpenedNav: s
          } = (0, t.useContext)(Ce), {
            inAvatarMenu: o
          } = (0, t.useContext)(ce), {
            inQuickMenu: i
          } = (0, t.useContext)(_e), {
            inMobileMenu: l
          } = (0, t.useContext)(ae), {
            inSubMenu: c,
            depth: u
          } = (0, t.useContext)(Ye), h = {
            ...a,
            onSelect: e => {
              const a = e.currentTarget.getAttribute("href") ?? "";
              if (a === window.location.pathname + window.location.search + window.location.hash || new URL(a, window.location.origin).href === window.location.href) {
                e.preventDefault(), s?.("");
                const n = e.currentTarget.closest('[data-menu-item="0"]')?.querySelector('[data-menu-trigger="true"]');
                document.activeElement?.blur(), setTimeout(() => {
                  n?.focus()
                }, 50)
              }
              n?.(e)
            }
          };
          return u > 1 ? (0, d.jsx)(Je, {
            ...h
          }) : o ? (0, d.jsx)(Ke, {
            ...h
          }) : c ? (0, d.jsx)(Xe, {
            ...h,
            hasNotification: e
          }) : i ? (0, d.jsx)(Ze, {
            ...h
          }) : l ? (0, d.jsx)(Fe, {
            ...h
          }) : r ? (0, d.jsx)(We, {
            ...h
          }) : void 0
        },
        We = (0, t.forwardRef)(function({
          children: e,
          className: n,
          onSelect: a,
          external: s,
          asChild: o,
          ...i
        }, l) {
          const h = (0, c.A)(),
            {
              closeAvatarMenu: m
            } = (0, t.useContext)(ce),
            {
              closeMobileMenu: p
            } = (0, t.useContext)(ae),
            x = o ? f.DX : "a",
            g = (0, r.default)(U({
              context: "mainMenu"
            }), n);
          return (0, d.jsx)(u.N_, {
            onSelect: e => {
              m?.(), p?.(), a?.(e)
            },
            className: g,
            asChild: !0,
            ...i,
            children: (0, d.jsxs)(x, {
              ref: l,
              children: [(0, d.jsx)(f.xV, {
                children: e
              }), s && (0, d.jsx)(v.ExternalLink, {
                label: h.formatMessage(L.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Fe = (0, t.forwardRef)(function({
          children: e,
          asChild: n,
          className: a,
          onSelect: s,
          external: o,
          ...i
        }, l) {
          const {
            closeAvatarMenu: c
          } = (0, t.useContext)(ce), {
            closeMobileMenu: h
          } = (0, t.useContext)(ae), m = (0, r.default)(U({
            context: "mobileMenu"
          }), a), p = n ? f.DX : "a";
          return (0, d.jsx)(u.N_, {
            asChild: !0,
            onSelect: e => {
              c?.(), h?.(), s?.(e)
            },
            ...i,
            children: (0, d.jsxs)(p, {
              ref: l,
              className: m,
              children: [(0, d.jsx)(f.xV, {
                children: e
              }), o && (0, d.jsx)(v.ExternalLink, {
                size: "LG",
                label: "",
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Ze = (0, t.forwardRef)(function({
          children: e,
          asChild: n,
          className: a,
          onSelect: s,
          external: o,
          ...i
        }, l) {
          const h = (0, c.A)(),
            {
              closeAvatarMenu: m
            } = (0, t.useContext)(ce),
            {
              closeMobileMenu: p
            } = (0, t.useContext)(ae),
            x = (0, r.default)(U({
              context: "quickMenu"
            }), a),
            g = n ? f.DX : "a";
          return (0, d.jsx)(u.N_, {
            asChild: !0,
            onSelect: e => {
              m?.(), p?.(), s?.(e)
            },
            ...i,
            children: (0, d.jsxs)(g, {
              ref: l,
              className: x,
              children: [(0, d.jsx)(f.xV, {
                children: e
              }), o && (0, d.jsx)(v.ExternalLink, {
                label: h.formatMessage(L.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Xe = (0, t.forwardRef)(function({
          children: e,
          asChild: n,
          className: a,
          onSelect: s,
          external: o,
          hasNotification: i,
          ...l
        }, h) {
          const m = (0, c.A)(),
            {
              closeAvatarMenu: p
            } = (0, t.useContext)(ce),
            {
              closeMobileMenu: x
            } = (0, t.useContext)(ae),
            g = (0, r.default)(U({
              context: "subMenu"
            }), a, i ? ["_1pgq6b1q"] : null),
            b = n ? f.DX : "a";
          return (0, d.jsx)(u.N_, {
            asChild: !0,
            onSelect: e => {
              p?.(), x?.(), s?.(e)
            },
            ...l,
            children: (0, d.jsxs)(b, {
              ref: h,
              className: g,
              children: [(0, d.jsx)(f.xV, {
                children: e
              }), o && (0, d.jsx)(v.ExternalLink, {
                label: m.formatMessage(L.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Ke = (0, t.forwardRef)(function({
          children: e,
          asChild: n,
          className: a,
          onSelect: s,
          external: o,
          ...i
        }, l) {
          const h = (0, c.A)(),
            {
              closeAvatarMenu: m
            } = (0, t.useContext)(ce),
            {
              closeMobileMenu: p
            } = (0, t.useContext)(ae),
            x = (0, r.default)(U({
              context: "avatarMenu"
            }), a),
            g = n ? f.DX : "a";
          return (0, d.jsx)(u.N_, {
            asChild: !0,
            onSelect: e => {
              m?.(), p?.(), s?.(e)
            },
            ...i,
            children: (0, d.jsxs)(g, {
              ref: l,
              className: x,
              children: [(0, d.jsx)(f.xV, {
                children: e
              }), o && (0, d.jsx)(v.ExternalLink, {
                label: h.formatMessage(L.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Je = (0, t.forwardRef)(function({
          children: e,
          asChild: n,
          className: a,
          onSelect: s,
          external: o,
          ...i
        }, l) {
          const h = (0, c.A)(),
            {
              closeAvatarMenu: m
            } = (0, t.useContext)(ce),
            {
              closeMobileMenu: p
            } = (0, t.useContext)(ae),
            x = (0, r.default)(U({
              context: "nestedMenu"
            }), a),
            g = n ? f.DX : "a";
          return (0, d.jsx)(u.N_, {
            asChild: !0,
            onSelect: e => {
              m?.(), p?.(), s?.(e)
            },
            ...i,
            children: (0, d.jsxs)(g, {
              ref: l,
              className: x,
              children: [(0, d.jsx)(f.xV, {
                children: e
              }), o && (0, d.jsx)(v.ExternalLink, {
                label: h.formatMessage(L.nav_rockstargames_external_link),
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
      const en = (0, t.forwardRef)(function({
        children: e,
        dataTestId: n,
        onPress: a,
        ...r
      }, s) {
        const {
          inMobileMenu: o,
          closeMobileMenu: i
        } = (0, t.useContext)(ae), l = (0, y.v6)({
          "data-testid": n,
          onPress: e => {
            a?.(e), i()
          },
          appearance: "secondary",
          size: (0, N.Ub)("(min-width: 1024px)") ? "SM" : "MD",
          className: "ey3skr0"
        }, r);
        return (0, d.jsx)("div", {
          className: o ? "ey3skr1" : "ey3skr2",
          children: (0, d.jsx)(b.Button, {
            ref: s,
            fullWidth: o,
            ...l,
            children: e
          })
        })
      });
      var nn = "_11eee6m7",
        an = "_11eee6ml";
      const tn = {
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
        rn = ({
          children: e,
          isSearchPage: n
        }) => {
          const {
            formatMessage: a
          } = (0, c.A)(), {
            isNavHidden: r,
            searchBarOpened: s,
            setSearchBarOpened: o,
            avatarMenuOpened: i
          } = (0, t.useContext)(H);
          (0, t.useEffect)(() => {
            o(n || !1)
          }, []), (0, t.useEffect)(() => {
            o(!1)
          }, [r]), (0, t.useEffect)(() => {
            i && o(!1)
          }, [i]);
          const l = !r && (n || s);
          return (0, d.jsx)(X, {
            showOn: "desktop",
            children: (0, d.jsx)("div", {
              className: "_11eee6m0",
              children: (0, d.jsxs)(M.bL, {
                open: l,
                onOpenChange: o,
                children: [(0, d.jsx)(M.l9, {
                  asChild: !0,
                  children: (0, d.jsx)(b.IconButton, {
                    icon: "Search",
                    appearance: "ghost",
                    size: "SM",
                    label: a(l ? L.search_close_button : L.search_open_button),
                    className: "_11eee6mb",
                    "data-testid": "searchToggle"
                  })
                }), (0, d.jsx)(p.AnimatePresence, {
                  children: l && (0, d.jsx)(C.n, {
                    loop: !n,
                    children: (0, d.jsx)(M.UC, {
                      forceMount: !0,
                      sideOffset: 19,
                      children: (0, d.jsx)(p.motion.div, {
                        initial: "close",
                        animate: "open",
                        exit: "close",
                        variants: tn,
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
        sn = (0, t.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          searchTarget: "",
          onChange: () => {}
        }),
        on = (0, t.forwardRef)(function({
          children: e
        }, n) {
          return (0, d.jsx)("div", {
            role: "search",
            ref: n,
            className: "_11eee6m1",
            children: e
          })
        }),
        ln = (0, t.forwardRef)(function({
          children: e,
          queryMin: n = 0,
          queryMax: a = 100,
          onSearch: s,
          query: o,
          onQueryChange: i,
          target: l,
          onTargetChange: u,
          isSearchPage: h = !1
        }, m) {
          const {
            formatMessage: f
          } = (0, c.A)(), {
            inMobileMenu: x,
            closeMobileMenu: g
          } = (0, t.useContext)(ae), [_, j] = (0, k.i)({
            prop: o,
            onChange: i,
            defaultProp: ""
          }), [y, N] = (0, k.i)({
            prop: l,
            onChange: u,
            defaultProp: ""
          }), [C, w] = (0, t.useState)(!1), [S, O] = (0, t.useState)(!1), {
            setForceBackground: I
          } = (0, t.useContext)(H);
          (0, t.useEffect)(() => (I(!0), () => {
            I(!1)
          }), []);
          const E = (e, n) => {
              s(e, n, g), O(!0)
            },
            A = {
              inSearchMenu: !0,
              searchTarget: y,
              setSearchTarget: e => {
                N(e), _ && _.length >= n && E(_, e)
              },
              onChange: i
            },
            P = (0, t.useMemo)(() => x ? (0, d.jsx)(p.AnimatePresence, {
              children: C && (0, d.jsx)(p.motion.div, {
                initial: "close",
                animate: "open",
                exit: "close",
                variants: tn,
                transition: K.springOpen,
                "data-testid": "searchBar",
                children: (0, d.jsx)("div", {
                  className: "_11eee6m9 _11eee6m8",
                  children: e
                })
              })
            }) : (0, d.jsxs)("div", {
              className: "_11eee6m8",
              children: [e, !x && !h && (0, d.jsx)("div", {
                className: "_11eee6md",
                children: (0, d.jsx)(M.bm, {
                  className: "_11eee6me",
                  children: (0, d.jsx)(v.X, {
                    size: "MD",
                    className: "_11eee6mf",
                    label: f(L.search_close_button)
                  })
                })
              })]
            }), [x, C, h, f, e]);
          return (0, d.jsxs)(sn.Provider, {
            value: A,
            children: [(0, d.jsxs)("div", {
              className: (0, r.default)("_11eee6m6", {
                [nn]: x
              }),
              "data-testid": "searchBar",
              children: [(0, d.jsx)(b.IconButton, {
                onClick: () => {
                  E(_, y)
                },
                appearance: "ghost",
                icon: "Search",
                size: "LG",
                label: f(S ? L.search_disabled_aria_label : L.search_action)
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
                    "Enter" === e.key && _ && y && E(_, y)
                  },
                  onFocus: () => w(!0),
                  placeholder: f(L.search_placeholder),
                  ref: m,
                  enterKeyHint: "search",
                  maxLength: a,
                  min: n,
                  max: a
                })
              }), x && C && (0, d.jsx)(b.IconButton, {
                onClick: () => w(!1),
                appearance: "ghost",
                icon: "X",
                size: "MD",
                label: f(L.search_close_button)
              })]
            }), P]
          })
        }),
        cn = ({
          children: e
        }) => {
          const {
            formatMessage: n
          } = (0, c.A)();
          return (0, d.jsx)("div", {
            className: "_11eee6mi",
            role: "radiogroup",
            "aria-label": n(L.search_categories),
            children: e
          })
        },
        dn = (0, t.forwardRef)(function({
          children: e,
          value: n,
          title: a,
          active: s,
          hasChevron: o,
          ...i
        }, l) {
          const {
            setSearchTarget: c,
            searchTarget: u
          } = (0, t.useContext)(sn), {
            inSearchTargetDropdown: h,
            setRootSearchTarget: m,
            rootSearchTarget: f
          } = (0, t.useContext)(un), v = t => {
            c?.(t), h && "string" == typeof e && m({
              key: n,
              title: a
            })
          }, p = s || Boolean(u) && (u === n || u === f.key);
          return h ? (0, d.jsx)("button", {
            ref: l,
            type: "button",
            className: (0, r.default)("_11eee6mq", {
              [an]: p
            }),
            onClick: () => v(n),
            value: n,
            ...i,
            role: "radio",
            "aria-checked": p,
            children: e
          }) : (0, d.jsx)(b.Tag.Root, {
            className: "_11eee6mj",
            color: p ? "monochrome" : "grey",
            size: "LG",
            background: "static",
            onClick: () => v(n),
            hasBorder: !1,
            ...i,
            asChild: !0,
            children: (0, d.jsxs)("button", {
              type: "button",
              ref: l,
              value: n,
              role: "radio",
              "aria-checked": p,
              children: [(0, d.jsx)(b.Tag.Label, {
                asChild: !0,
                children: (0, d.jsx)(b.Body, {
                  size: "MD",
                  appearance: "bold",
                  children: e
                })
              }), o && (0, d.jsx)(b.Tag.Icon, {
                className: "_11eee6mo",
                label: "",
                icon: "ChevronDown"
              })]
            })
          })
        }),
        un = (0, t.createContext)({
          inSearchTargetDropdown: !1,
          rootSearchTarget: {
            key: "",
            title: ""
          },
          setRootSearchTarget: () => {}
        }),
        hn = ({
          title: e,
          children: n
        }) => {
          const [a, r] = (0, t.useState)(!1), [s, o] = (0, t.useState)({
            key: "",
            title: ""
          }), {
            searchTarget: i
          } = (0, t.useContext)(sn), {
            avatarMenuOpened: l
          } = (0, t.useContext)(H);
          i !== s.key && "" !== s.key && o({
            key: "",
            title: ""
          });
          const c = !l && a;
          return (0, d.jsxs)(M.bL, {
            open: c,
            onOpenChange: r,
            children: [(0, d.jsx)(M.l9, {
              asChild: !0,
              children: (0, d.jsx)(dn, {
                value: e,
                title: e,
                active: !!s.key,
                hasChevron: !0,
                children: s.title || e
              })
            }), (0, d.jsx)(un.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: s,
                setRootSearchTarget: e => {
                  o(n => "function" == typeof e ? e(n) : e), r(!1)
                }
              },
              children: (0, d.jsx)(M.UC, {
                align: "start",
                className: "_11eee6mp _1r3j5az0 _11eee6mn",
                children: n
              })
            })]
          })
        },
        mn = (0, t.forwardRef)(function({
          errorMessage: e
        }, n) {
          return e && (0, d.jsx)("div", {
            ref: n,
            className: "_11eee6m2",
            "aria-live": "polite",
            children: e
          })
        }),
        fn = ({
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
          return (0, d.jsx)("a", {
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
      var vn = "_13sb4ht3",
        pn = "_13sb4ht4";
      const xn = () => (0, d.jsx)("div", {
        className: "_13sb4ht2",
        children: (0, d.jsx)("svg", {
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [vn, pn, ""].map((e, n) => (0, d.jsx)("path", {
            className: e,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.61511 10.9978H12.5848C14.3845 10.9978 15.9421 10.4507 15.9421 8.44939C15.9421 6.86148 14.5745 6.52423 13.2595 6.52423H9.56608L8.61511 10.9978ZM24.3357 21.6949H30.6663L24.9533 25.6406L25.8771 31.8581L20.9272 28.1057L14.2842 32.0001L17.3902 25.4102C17.3902 25.4102 13.7775 21.6513 13.7803 21.6513C13.5374 21.3314 13.4563 20.5073 13.4563 20.1527C13.4563 19.7045 13.4849 19.2505 13.5155 18.7669C13.5503 18.2159 13.5875 17.6266 13.5875 16.9637C13.5875 15.3278 12.8632 14.4723 11.0925 14.4723H7.77269L6.32717 21.2249H1.33301L5.30462 2.66675H14.7029C18.1954 2.66675 20.861 3.52407 20.861 7.47735C20.861 10.2601 19.4884 12.2367 16.4605 12.6517V12.7051C17.8843 13.0428 18.4177 14.0037 18.4177 15.7946C18.4177 16.5095 18.3959 17.1369 18.3754 17.7271C18.3572 18.2511 18.34 18.7456 18.34 19.246C18.34 19.8873 18.507 20.9355 18.9277 21.6513H19.6215L23.3316 15.4672L24.3357 21.6949ZM23.5498 22.6019H27.7512L23.9634 25.217L24.6402 29.7765L20.9957 27.0111L16.3688 29.7218L18.4869 25.2341L15.9114 22.5578H20.1458L22.8244 18.093L23.5498 22.6019Z",
            fill: "currentcolor"
          }, e + n))
        })
      });
      var gn = "corzs33";
      const bn = {
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
          onNavigate: s
        }) => {
          const o = (0, c.A)(),
            [i, l] = (0, t.useState)(!1),
            u = (0, t.useRef)(null),
            [h, m] = (0, t.useState)(!1),
            {
              brand: f,
              brandTitle: v,
              isNavHidden: x,
              simpleMenu: g
            } = (0, t.useContext)(H),
            _ = a || "/";
          return (0, t.useEffect)(() => {
            l(!1)
          }, [x, e]), (0, t.useEffect)(() => {
            const e = () => {
              const e = u.current?.getBoundingClientRect().width || 0,
                n = u.current?.children;
              Array.from(Array(n?.length)).reduce((e, a, t) => e + n?.item(t)?.getBoundingClientRect().width, 0) + 60 >= e ? m(!1) : m(!0)
            };
            return v ? (e(), window.addEventListener("resize", e)) : (m(!1), window.removeEventListener("resize", e)), () => {
              window.removeEventListener("resize", e)
            }
          }, [v]), (0, d.jsxs)("div", {
            className: "corzs30",
            children: [(0, d.jsx)(X, {
              showOn: "desktop",
              children: (0, d.jsxs)("div", {
                className: "corzs31",
                children: [(0, d.jsxs)("div", {
                  className: gn,
                  children: [!n && (0, d.jsx)(fn, {
                    to: _,
                    "aria-label": o.formatMessage(L.nav_rockstargames_home),
                    onNavigate: s,
                    className: "corzs39",
                    children: (0, d.jsx)(xn, {})
                  }), n && (0, d.jsxs)(M.bL, {
                    open: i,
                    onOpenChange: l,
                    children: [(0, d.jsx)(X, {
                      showOn: "desktop",
                      children: (0, d.jsx)(M.l9, {
                        asChild: !0,
                        children: (0, d.jsx)("button", {
                          type: "button",
                          className: "corzs38",
                          "aria-label": o.formatMessage(L.nav_rockstargames_logo),
                          children: (0, d.jsx)(xn, {})
                        })
                      })
                    }), (0, d.jsx)(p.AnimatePresence, {
                      children: i && (0, d.jsx)(X, {
                        showOn: "desktop",
                        children: (0, d.jsx)(M.UC, {
                          forceMount: !0,
                          align: "start",
                          sideOffset: 24,
                          children: (0, d.jsx)(p.motion.div, {
                            className: "corzs3a",
                            variants: bn,
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
                }), (f || v) && (0, d.jsxs)("div", {
                  className: "corzs34",
                  children: [(0, d.jsx)("div", {
                    className: "corzs35"
                  }), f && (0, d.jsx)("div", {
                    className: "corzs36",
                    children: f
                  }), v && (0, d.jsx)(b.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: v
                  })]
                })]
              })
            }), (0, d.jsx)(X, {
              showOn: "mobile",
              children: (0, d.jsxs)("div", {
                className: "corzs32",
                ref: u,
                children: [(0, d.jsx)("div", {
                  className: gn,
                  children: (!f || g) && (0, d.jsx)(fn, {
                    to: _,
                    "aria-label": o.formatMessage(L.nav_rockstargames_home),
                    onNavigate: s,
                    className: (0, r.clsx)("corzs39", {
                      corzs3b: h
                    }),
                    children: (0, d.jsx)(xn, {})
                  })
                }), (f || v) && (0, d.jsxs)("div", {
                  className: (0, r.clsx)("corzs34", {
                    corzs3b: v && !h
                  }),
                  children: [g && (0, d.jsx)("div", {
                    className: "corzs35"
                  }), f && (0, d.jsx)("div", {
                    className: "corzs36",
                    children: f
                  }), v && (0, d.jsx)(b.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: v
                  })]
                })]
              })
            })]
          })
        },
        _n = {
          MenuContext: Ce,
          HiddenMenuContext: ke,
          SubMenuContext: Ye,
          MobileMenuContext: ae,
          GlobalNavigationContext: H
        }
    }
  }
]);