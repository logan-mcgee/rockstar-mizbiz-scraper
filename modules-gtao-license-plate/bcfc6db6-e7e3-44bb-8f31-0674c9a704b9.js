try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bcfc6db6-e7e3-44bb-8f31-0674c9a704b9", e._sentryDebugIdIdentifier = "sentry-dbid-bcfc6db6-e7e3-44bb-8f31-0674c9a704b9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e75daf86583d2f46160d46d6e78dabbc975e828b",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e75daf86583d2f46160d46d6e78dabbc975e828b"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [8801], {
    5931: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    32810: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    35902: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    67293: (e, a, t) => {
      t.r(a), t.d(a, {
        CharacterProfile: () => pe,
        LanguageSelector: () => f,
        Menu: () => ue,
        MenuButton: () => me
      });
      var s = t(42295),
        c = t(62229),
        o = t(8479),
        n = t(96311),
        l = t(81788),
        r = t(14200),
        i = t(2918);
      const d = (0, l.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            description: "The default option for the language selector.",
            defaultMessage: "Select a Language"
          }
        }),
        u = {
          dropdown: "rockstargames-modules-gtao-license-platecb93b1e1dbe15862e05455dc78f5ec25",
          dropdownContainer: "rockstargames-modules-gtao-license-plateab0cc073180383d3d5e4bee00eaa311f",
          languageSelector: "rockstargames-modules-gtao-license-platea9dd8a9cb7334e205df4ac3b4392916d",
          linkWrapper: "rockstargames-modules-gtao-license-plateb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-modules-gtao-license-platec64b05a604b1a6be373d35cf01edba2e",
          menuStyles: "rockstargames-modules-gtao-license-plateb641fac428f473cbb4593cd058a01953",
          open: "rockstargames-modules-gtao-license-plateaa1d94595080f833a35e29fbbe8fd01c",
          pillBtn: "rockstargames-modules-gtao-license-platee34929a5bcdda554c66b47a858ddd966",
          selectBox: "rockstargames-modules-gtao-license-platefe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-modules-gtao-license-plateae32febd9789e79c804b2679d25e8a65",
          selectBoxWrapper: "rockstargames-modules-gtao-license-platedb1aead5717ba9dae1e272c3b7e6e801",
          selected: "rockstargames-modules-gtao-license-platee1ba906f108faeb297753d39a8d21b8b"
        },
        m = JSON.parse('{"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        g = e => (0, l.withIntl)(e, m),
        f = g((({
          theme: e,
          languageSelectorOpened: a,
          setLanguageSelectorOpened: t,
          location: m,
          parent: g = "element",
          onLanguageChange: f,
          ...p
        }) => {
          const {
            track: h
          } = (0, i.useGtmTrack)(), _ = (0, l.useIntl)(), [b] = (0, l.getLocale)(), [k, v] = (0, c.useState)(!1), x = (0, c.useRef)(null), [C, S] = (0, c.useState)(0), N = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, w = e => {
            if (t && t(!1), b.subdomaincom === e || "none" === e) return void(t && t(!1));
            const a = l.locales.find((a => a.subdomaincom === e));
            a && f?.({
              selectedLocale: a,
              track: h,
              parent: g
            })
          };
          return (0, c.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === k && v(!1)
          }), [a]), (0, c.useEffect)((() => {
            x.current && S(x.current.scrollHeight)
          }), [x]), "function" != typeof f ? null : (0, s.jsxs)(s.Fragment, {
            children: [N && "sc-menu" === e && (0, s.jsx)("div", {
              className: [u.languageSelector, k ? u.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${g}-language-selector`,
              ...p,
              children: (0, s.jsx)("div", {
                className: u.selectBoxWrapper,
                children: (0, s.jsxs)("select", {
                  className: u.selectBox,
                  onClick: e => e.stopPropagation(),
                  onChange: e => {
                    const a = e.currentTarget.value;
                    w(a)
                  },
                  "aria-label": _.formatMessage(d.language_selector_default),
                  "data-testid": `${g}-language-selector-button`,
                  children: [(0, s.jsx)("option", {
                    className: u.selectBoxOption,
                    value: "none",
                    "data-testid": `${g}-language-selector-current`,
                    children: l.locales.find((e => e.subdomaincom === b.subdomaincom))?.label ?? (0, s.jsx)(l.FormattedMessage, {
                      ...d.language_selector_default
                    })
                  }), l.locales.map((({
                    label: e,
                    subdomaincom: a
                  }) => (0, s.jsx)("option", {
                    className: u.selectBoxOption,
                    value: a,
                    children: e
                  }, `mobile-${a}`)))]
                })
              })
            }), (!N || "sc-menu" !== e) && "footer" !== e && (0, s.jsxs)("div", {
              className: [u.languageSelector, k ? u.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${g}-language-selector`,
              ...p,
              children: [(0, s.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), t && t(!k), v(!k)
                },
                "data-testid": `${g}-language-selector-button`,
                type: "button",
                "aria-label": _.formatMessage(d.language_selector_default),
                children: [(0, s.jsx)("i", {}), (0, s.jsx)("span", {
                  "data-testid": `${g}-language-selector-current`,
                  children: l.locales.find((e => e.subdomaincom === b.subdomaincom))?.label ?? (0, s.jsx)(l.FormattedMessage, {
                    ...d.language_selector_default
                  })
                })]
              }), (0, s.jsx)("div", {
                className: u.linkWrapper,
                ref: x,
                style: {
                  "--ls-linkWrapper-opened-height": `${C}px`
                },
                children: (0, s.jsx)("div", {
                  className: u.links,
                  children: l.locales.map((({
                    subdomaincom: e,
                    label: a
                  }) => (0, s.jsx)(r.A, {
                    onClick: a => {
                      a.preventDefault(), w(e)
                    },
                    tabIndex: k ? 0 : -1,
                    "data-testid": `${g}-language-selector-${e}`,
                    children: a
                  }, a)))
                })
              })]
            }), "footer" === e && (0, s.jsxs)("div", {
              className: u.dropdownContainer,
              "data-testid": `${g}-language-selector`,
              ...p,
              children: [(0, s.jsx)(n.qz, {
                size: "MD",
                label: ""
              }), (0, s.jsxs)(o.ms.bL, {
                className: u.dropdown,
                onValueChange: e => {
                  w(e)
                },
                defaultValue: l.locales.find((e => e.subdomaincom === b.subdomaincom))?.subdomaincom,
                children: [(0, s.jsxs)(o.ms.l9, {
                  children: [(0, s.jsx)(o.ms.OE, {
                    placeholder: _.formatMessage(d.language_selector_default)
                  }), (0, s.jsx)(o.ms.if, {})]
                }), (0, s.jsx)(o.ms.ZL, {
                  children: (0, s.jsx)(o.ms.UC, {
                    children: (0, s.jsx)(o.ms.FK, {
                      children: l.locales.map((({
                        subdomaincom: e,
                        label: a
                      }) => (0, s.jsx)(o.ms.c$, {
                        value: e,
                        testId: `${g}-language-selector-${e}`,
                        children: (0, s.jsx)(o.ms.JP, {
                          children: a
                        })
                      }, a)))
                    })
                  })
                })]
              })]
            })]
          })
        }));
      var p = t(97359),
        h = t(95966);
      const _ = (0, h.makeVar)(!1),
        b = e => _(e),
        k = (0, h.makeVar)(-1),
        v = e => k(e),
        x = (0, h.makeVar)(-1),
        C = e => x(e),
        S = (0, h.makeVar)(!0),
        N = e => S(e),
        w = (0, h.makeVar)(!0),
        y = e => w(e),
        M = () => {
          const e = (0, h.useReactiveVar)(_),
            a = (0, h.useReactiveVar)(k),
            t = (0, h.useReactiveVar)(x),
            s = (0, h.useReactiveVar)(S),
            o = (0, h.useReactiveVar)(w);
          return (0, c.useEffect)((() => {
            o || (e && b(!1), s && (N(!1), v(-1)))
          }), [o]), (0, c.useEffect)((() => {
            !e && o && (s || N(!0))
          }), [e, o]), (0, c.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: b,
            activeSubNavId: a,
            setActiveSubNavId: v,
            subNavExtraHeight: t,
            setSubNavExtraHeight: C,
            navOpened: s,
            setAccountNavOpened: N,
            charListHidden: o,
            setCharListHidden: y
          })), [e, a, t, s, o])
        },
        j = (0, l.defineMessages)({
          sc_link_account: {
            id: "sc_link_account",
            description: "A button that opens the account drop-down.",
            defaultMessage: "Account"
          },
          sc_link_view_my_profile: {
            id: "sc_link_view_my_profile",
            description: "A link to the social club profile page.",
            defaultMessage: "View My Profile"
          },
          sc_link_game_activation: {
            id: "sc_link_game_activation",
            description: "A link to the social club game activation page.",
            defaultMessage: "Game Activation"
          },
          sc_link_notifications: {
            id: "sc_link_notifications",
            description: "A link to the social club notifications page.",
            defaultMessage: "Notifications"
          },
          sc_link_crews: {
            id: "sc_link_crews",
            description: "A link to the social club crews page.",
            defaultMessage: "Crews"
          },
          sc_link_friends: {
            id: "sc_link_friends",
            description: "A button that openes the friends drop-down.",
            defaultMessage: "Friends"
          },
          sc_link_my_friends: {
            id: "sc_link_my_friends",
            description: "A link to the social club friends page.",
            defaultMessage: "My Friends"
          },
          sc_link_import_friends: {
            id: "sc_link_import_friends",
            description: "A link to the social club import friends page.",
            defaultMessage: "Import Friends"
          },
          sc_link_find_friends: {
            id: "sc_link_find_friends",
            description: "A link to the social club find friends page.",
            defaultMessage: "Find Friends"
          },
          sc_link_settings: {
            id: "sc_link_settings",
            description: "A link to the social club find settings page.",
            defaultMessage: "Settings"
          },
          sc_link_help: {
            id: "sc_link_help",
            description: "A link to the social club find help page.",
            defaultMessage: "Help"
          },
          sc_link_support: {
            id: "sc_link_support",
            description: "A link to the social club find support page.",
            defaultMessage: "Support"
          },
          sc_link_legal: {
            id: "sc_link_legal",
            description: "A link to the social club find legal page.",
            defaultMessage: "Legal"
          },
          sc_link_privacy_policy: {
            id: "sc_link_privacy_policy",
            description: "A link to the social club find privacy policy page.",
            defaultMessage: "Privacy Policy"
          },
          sc_link_cookies_policy: {
            id: "sc_link_cookies_policy",
            description: "A link to the social club find cookies policy page.",
            defaultMessage: "Cookies Policy"
          },
          sc_link_cookies_settings: {
            id: "sc_link_cookies_settings",
            description: "A link to the social club find cookies settings page.",
            defaultMessage: "Cookies Settings"
          },
          sc_link_do_not_sell_my_information: {
            id: "sc_link_do_not_sell_my_information",
            description: "A link to the social club find do not sell my information page.",
            defaultMessage: "Do Not Sell or Share My Personal Information"
          },
          sc_link_log_out: {
            id: "sc_link_log_out",
            description: "A link to log out of social club.",
            defaultMessage: "Log Out"
          },
          sc_link_sign_in: {
            id: "sc_link_sign_in",
            description: "A link to log in to social club.",
            defaultMessage: "Sign In"
          },
          sc_link_join_social_club: {
            id: "sc_link_join_social_club",
            description: "A link to join social club.",
            defaultMessage: "Sign Up"
          },
          profile_selector_switch_character: {
            id: "profile_selector_switch_character",
            description: "A top level button that opens up the list that shows what characters you have to choose from.",
            defaultMessage: "Switch Character"
          },
          profile_selector_profile_card: {
            id: "profile_selector_profile_card",
            description: "An aria-label description of the card that displays the users mugshot, username and stats.",
            defaultMessage: "Profile Card"
          },
          profile_selector_mugshot: {
            id: "profile_selector_mugshot",
            description: "The alt attribute for the player characters mugshot.",
            defaultMessage: "{userName} mugshot"
          },
          profile_silhouette_mugshot: {
            id: "profile_silhouette_mugshot",
            description: "The alt attribute for the silhouette characters mugshot.",
            defaultMessage: "Silhouette mugshot"
          },
          profile_selector_rp_icon: {
            id: "profile_selector_rp_icon",
            description: "The alt attribute for the players RP score.",
            defaultMessage: "RP Category"
          },
          sc_menu_drag_handle: {
            id: "sc_menu_drag_handle",
            description: "The alt attribute for icon for the drag handle image.",
            defaultMessage: "Drag Menu Handle"
          },
          sc_menu_open: {
            id: "sc_menu_open",
            description: "The open aria-label for button that allow users to open/close the menu.",
            defaultMessage: "Open player menu"
          },
          sc_menu_close: {
            id: "sc_menu_close",
            description: "The close aria-label for button that allow users to open/close the menu.",
            defaultMessage: "Close player menu"
          },
          language_selector_default: {
            id: "language_selector_default",
            description: "The default option for the language selector.",
            defaultMessage: "Select a Language"
          },
          nofications_new: {
            id: "nofications_new",
            description: "Aria label for new notifications icon.",
            defaultMessage: "New notifications"
          }
        });
      var I = t(9738),
        E = t.n(I),
        L = t(79867);
      const T = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        P = e => ({
          text: e.formatMessage(j.sc_link_help),
          target: "_self",
          ga: {
            ...T,
            text: j.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(j.sc_link_support),
            location: {
              domain: L.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...T,
              text: j.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(j.sc_link_legal),
            location: {
              domain: L.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...T,
              text: j.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(j.sc_link_privacy_policy),
            location: {
              domain: L.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...T,
              text: j.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(j.sc_link_cookies_policy),
            location: {
              domain: L.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...T,
              text: j.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(j.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...T,
              text: j.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(j.sc_link_do_not_sell_my_information),
            location: {
              domain: L.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...T,
              text: j.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        R = ({
          to: e,
          target: a,
          className: t,
          onNavigate: c,
          onClick: o,
          reloadDocument: n,
          children: l,
          ...r
        }) => {
          const i = e?.startsWith("http");
          return (0, s.jsx)("a", {
            href: e,
            className: t,
            onClick: a => {
              o?.(a), i || n || (c ? (a.preventDefault(), c(e)) : (a.preventDefault(), window.history.pushState({}, "", e)))
            },
            target: a,
            ...r,
            children: l
          })
        },
        H = ({
          text: e,
          target: a,
          href: t,
          location: c,
          ga: o,
          dataTestId: n,
          isSubLink: r,
          hasNotifications: d = !1,
          onClickCallback: u = () => {},
          tabIndex: m,
          reloadDocument: g = !1,
          onNavigate: f
        }) => {
          const {
            track: p
          } = (0, i.useGtmTrack)(), h = (0, L.A)(), _ = (0, l.useIntl)();
          let b = t;
          c && (b = c.domain === h.currentSite?.site ? c.path : `https://${h.sites[c.domain]}.rockstargames.com${c.path}`);
          const k = {
            ...o,
            link_url: b
          };
          return (0, s.jsxs)(R, {
            className: r ? "rockstargames-modules-gtao-license-platec2233d027086d54af877493d7d0700bd" : "rockstargames-modules-gtao-license-platef97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": n || "menuLink",
            title: e,
            to: b,
            target: a,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: m,
            onClick: e => {
              p(k), u(e)
            },
            onNavigate: f,
            children: [e, d && (0, s.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateadbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, s.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platee49e290899be3c888ca5a4b6b13736a1",
                children: _.formatMessage(j.nofications_new)
              })
            })]
          })
        },
        O = ({
          id: e,
          text: a,
          target: t,
          href: o,
          location: n,
          ga: l,
          hasNotifications: r = !1,
          dataTestId: d,
          children: u = [],
          activeSubNavId: m,
          setActiveSubNavId: g,
          setSubNavExtraHeight: f,
          reloadDocument: p = !1,
          onClickCallback: _ = () => {},
          onNavigate: b
        }) => {
          const {
            windowWidth: k,
            windowHeight: v
          } = (0, h.useWindowResize)(), {
            track: x
          } = (0, i.useGtmTrack)(), {
            navOpen: C
          } = (0, i.useRockstarUserState)(), S = (0, c.useRef)(null), [N, w] = (0, c.useState)(0), [y, M] = (0, c.useState)(0), [j, I] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            m !== e && !1 === j && I(!0), m === e && I(!1)
          }), [m]), (0, c.useEffect)((() => {
            if (!S.current) return;
            w(S?.current?.scrollHeight);
            const e = window.getComputedStyle(S.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), M(a)
            }
          }), [S, k, v]), u.length > 0 ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("button", {
              className: "rockstargames-modules-gtao-license-platecc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": d || "menuButton",
              title: a,
              tabIndex: C ? 0 : -1,
              "data-children-hidden": j,
              onClick: a => {
                a.stopPropagation(), x(l), m === e ? (g(-1), f(0)) : (g(e), f(N + y + y))
              },
              children: [(0, s.jsx)("span", {
                className: "rockstargames-modules-gtao-license-plateb94730a01d5e9223b69cbc2f20f23bcd",
                children: a
              }), (0, s.jsx)("span", {
                className: "rockstargames-modules-gtao-license-plateff271a72fe259d74068b4f4d90db08bd"
              })]
            }, a), (0, s.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platecbf6e64eadb6f965877129d539aa2dcd",
              ref: S,
              "aria-hidden": j,
              style: {
                height: j ? 0 : `${N}px`
              },
              children: u.map((e => (0, c.createElement)(H, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: j || !C ? -1 : 0,
                onNavigate: b
              })))
            })]
          }) : (0, s.jsx)(H, {
            text: a,
            target: t,
            href: o,
            location: n,
            ga: l,
            hasNotifications: r,
            dataTestId: d,
            isSubLink: !1,
            onClickCallback: _,
            tabIndex: C ? 0 : -1,
            reloadDocument: p,
            onNavigate: b
          })
        },
        $ = ({
          sc: e,
          location: a,
          onNavigate: t
        }) => {
          const {
            windowWidth: o,
            windowHeight: n
          } = (0, h.useWindowResize)(), r = (0, l.useIntl)(), {
            languageSelectorOpened: d,
            setLanguageSelectorOpened: u,
            activeSubNavId: m,
            setActiveSubNavId: g,
            subNavExtraHeight: p,
            setSubNavExtraHeight: _
          } = M(), {
            setSelectedCharacterTuple: b,
            navOpen: k
          } = (0, i.useRockstarUserState)(), v = (0, h.useLocale)(), x = (0, h.toScLocaleString)(v), [C, S] = (0, c.useState)(""), N = `${e.login}?returnUrl=${C}&lang=${x}`, w = `${e.signup}&returnUrl=${C}&lang=${x}`, y = (0, c.useMemo)((() => (0, L.A)()), []), I = (0, c.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(j.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: j.sc_link_sign_in.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(j.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: j.sc_link_join_social_club.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "signUpLink"
            }, P(e)])(r, N, w);
            return e
          }), [r, N, w, y]), [T, R] = (0, c.useState)(0), H = (0, c.createRef)(), $ = () => {
            if (H.current) {
              const {
                current: e
              } = H, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), R(a + e)
              } else R(a)
            }
          };
          return (0, c.useEffect)((() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            S(e)
          }), [JSON.stringify(a)]), (0, c.useEffect)((() => {
            b(!1)
          }), []), (0, c.useEffect)((() => {
            $(), E()((() => {
              setTimeout($, 0)
            }), 300)
          }), [o, n]), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platef300d66bd02f52ac564238ca6125a091",
              children: (0, s.jsx)("div", {
                className: "rockstargames-modules-gtao-license-plateac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: H,
                style: {
                  "--navWrap-max-height": `${p+T}px`
                },
                children: I.map((e => (0, c.createElement)(O, {
                  ...e,
                  activeSubNavId: m,
                  setActiveSubNavId: g,
                  setSubNavExtraHeight: _,
                  onNavigate: t,
                  key: e.text
                })))
              })
            }), (0, s.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platef30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: k ? null : "hidden"
              },
              children: (0, s.jsx)(f, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: d,
                setLanguageSelectorOpened: e => {
                  g(-1), u(e)
                },
                location: a,
                onLanguageChange: l.onLanguageChange
              })
            })]
          })
        };
      var A = t(72148),
        B = t(68791);
      var D = t(10439);
      const U = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        z = (0, c.forwardRef)((function({
          rank: e,
          size: a = "large",
          className: t,
          alt: c,
          testId: o,
          ...n
        }, l) {
          const r = U(e),
            i = (0, B.v6)(n, {
              className: (0, D.A)("rockstargames-modules-gtao-license-platef54750ef62f8600000c94f0caba85986", t),
              "data-testid": o
            });
          return (0, s.jsxs)("div", {
            "data-size": a,
            ref: l,
            ...i,
            children: [(0, s.jsx)("svg", {
              role: "svg",
              "aria-label": c,
              className: "rockstargames-modules-gtao-license-platea3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": U(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: r
              })
            }), (0, s.jsx)("span", {
              className: "rockstargames-modules-gtao-license-plated9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        }));
      var W = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const F = ({
        tagSize: e,
        platform: a,
        className: t = ""
      }) => {
        const {
          src: c,
          alt: o
        } = ((e, a) => {
          const t = "small" === a;
          switch (e) {
            case "pc":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case "pcalt":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case "ps4":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case "ps5":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case "xboxone":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case "xboxsx":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
              };
            case "ps":
            case "np":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
              };
            case "xbl":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        })(a, e);
        return (0, s.jsx)("img", {
          className: (0, D.A)("rockstargames-modules-gtao-license-plateb0ff0045ed0326a46ca1e0867d2050c1", t),
          "data-testid": "platform-tag",
          "data-platform": a,
          "data-tag-size": e,
          src: c,
          alt: o
        })
      };
      let V = {
        avatar: "rockstargames-modules-gtao-license-plated79f37fd31c0943cbf4368215dfc79a0",
        characterBtn: "rockstargames-modules-gtao-license-plateb26daf00eb7def0a82a3c1481316acb0",
        characterBtnStats: "rockstargames-modules-gtao-license-plateed30f2b92b3fc2937e7278409208872f",
        scCharBtnNames: "rockstargames-modules-gtao-license-platea6009feaf97e98d18c6efc2de47ba8b4",
        scRp: "rockstargames-modules-gtao-license-platef5cab6371f4fcd1aa1ce14c0f97d1e7a",
        scRpIcon: "rockstargames-modules-gtao-license-platefaa7b2808fb96fa02fd2e99be36df8e6",
        scRpLevel: "rockstargames-modules-gtao-license-platec9300f34b82bbdffb7006ff32247adff",
        scUserName: "rockstargames-modules-gtao-license-platec3ab062db0e9e0f75e0598eec5022de5"
      };
      const X = "CharacterButton:characterName",
        G = "CharacterButton:avatar",
        Z = ({
          characterData: e,
          setMobileCardWidth: a,
          tabIndex: o,
          onClick: n = () => {}
        }) => {
          const r = (0, l.useIntl)(),
            {
              currentCharId: d,
              setCurrentCharId: u
            } = (0, i.useRockstarUserState)(),
            m = (0, c.createRef)(),
            {
              platform: g,
              platformUsername: f,
              mugshotUrl: p,
              stats: h
            } = e,
            [_, b] = (0, c.useState)(p),
            k = d === e.index;
          return (0, c.useEffect)((() => {
            m.current && a && a(m?.current?.offsetWidth)
          }), [m]), (0, s.jsxs)("button", {
            className: V.characterBtn,
            type: "button",
            "aria-hidden": k,
            ref: m,
            tabIndex: o,
            onClick: () => n(-1),
            children: [(0, s.jsx)("div", {
              className: V.avatarFrame,
              children: (0, s.jsx)("div", {
                className: V.avatar,
                "data-size": "small",
                children: (0, s.jsx)("img", {
                  className: V.avatarImg,
                  src: _,
                  alt: r.formatMessage(j.profile_selector_mugshot, {
                    userName: f
                  }),
                  onError: () => {
                    b(t(5931))
                  },
                  "data-testid": G
                })
              })
            }), (0, s.jsxs)("div", {
              className: V.characterBtnStats,
              children: [(0, s.jsxs)("div", {
                className: V.scCharBtnNames,
                children: [(0, s.jsx)(F, {
                  tagSize: W.large,
                  platform: g
                }), (0, s.jsx)("div", {
                  className: V.scUserName,
                  "data-size": "small",
                  "data-testid": X,
                  children: f
                })]
              }), (0, s.jsx)("div", {
                className: V.scRp,
                children: (0, s.jsx)(z, {
                  size: "small",
                  rank: parseInt(h.overview.rank.value)
                })
              })]
            })]
          })
        };
      let J;
      J = {
        avatar: "rockstargames-modules-gtao-license-platee1ed133f04d4201de6c787667fe46939",
        avatarPlatform: "rockstargames-modules-gtao-license-plateb061d8f050dd255669342700ddbe9f94",
        pillBtn: "rockstargames-modules-gtao-license-platec094ee9992658964204dbc3c55063187",
        profileDetails: "rockstargames-modules-gtao-license-platec7a6cdc85906179aeadfbea13a491277",
        profileStats: "rockstargames-modules-gtao-license-platea4a23edaf47f301893d88f6e233907b3",
        scBank: "rockstargames-modules-gtao-license-plateee0f3a44274a32b7c03d50d1f8e23578",
        scCash: "rockstargames-modules-gtao-license-platef21a08a90936d208b236a20d5893ab50",
        scCrewName: "rockstargames-modules-gtao-license-platec3c644cc20da4e904a7f4e5e3850bf7b",
        scCrewRankBar: "rockstargames-modules-gtao-license-platecacefbe6235792c328eabdb72c7e812c",
        scCrewRankBarItem: "rockstargames-modules-gtao-license-platef9fc60f5d92cda504e6a40d09ec34429",
        scMoney: "rockstargames-modules-gtao-license-plateffc96f13a79073f795d296415f874263",
        scNames: "rockstargames-modules-gtao-license-platec6a703613ae9abf4927cf1f023878d9c",
        scProgress: "rockstargames-modules-gtao-license-plateb1230619acc50d561a73b55a185e782e",
        scRpIcon: "rockstargames-modules-gtao-license-platefd047e239c2b7adafe8729ad8e7ae646",
        scRpLevel: "rockstargames-modules-gtao-license-platee3dcece76ffe0dcd864d13ada6a4c532",
        scTagsNames: "rockstargames-modules-gtao-license-plateac56f06be77872b6f7ba074189a2ec36",
        scUserName: "rockstargames-modules-gtao-license-platea829077ec05e5b83560be13ff3604c8e",
        selected: "rockstargames-modules-gtao-license-platef68f5558f3bacb6ab2f0f6e52b7c4d3d"
      };
      const K = "ProfileCard:characterName",
        Y = "ProfileCard:avatar",
        q = "ProfileCard:bankValue",
        Q = "ProfileCard:cashValue",
        ee = ({
          character: e
        }) => {
          const {
            data: a
          } = (0, i.useRockstarUser)(), {
            track: o
          } = (0, i.useGtmTrack)(), n = (0, l.useIntl)(), [r, d] = (0, c.useState)([]), [u, m] = (0, c.useState)(null), [g, f] = (0, c.useState)(null), [p, h] = (0, c.useState)(!1), [_, b] = (0, c.useState)(-1), [k, v] = (0, c.useState)([]), [x, C] = (0, c.useState)(0), S = t(5931), {
            platform: N
          } = e, [w, y] = (0, c.useState)("0"), [M, I] = (0, c.useState)("0"), E = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), L = () => {
            P((0, s.jsx)("img", {
              src: S,
              alt: n.formatMessage(j.profile_selector_mugshot, {
                userName: a.nickname
              })
            }))
          }, [T, P] = (0, c.useState)((0, s.jsx)("img", {
            className: J.avatarImg,
            src: e.mugshotUrl,
            alt: n.formatMessage(j.profile_selector_mugshot, {
              userName: a.nickname
            }),
            onError: L,
            "data-testid": Y
          }));
          (0, c.useEffect)((() => {
            d(a.crews ?? [])
          }), [a.crews]), (0, c.useEffect)((() => {
            P((0, s.jsx)("img", {
              src: e.mugshotUrl,
              alt: a.nickname,
              onError: L,
              "data-testid": Y
            })), y(E(e.stats.overview.bank.value)), I(E(e.stats.overview.cash.value)), C(parseInt(e.stats.overview.rank.value))
          }), [e, a.nickname]), (0, c.useEffect)((() => {
            r && r.forEach((e => {
              !0 === e.isPrimary && (m(e.crewTag), f(e.crewColour), b(e.rankOrder), h(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && h(!0))
            }))
          }), [r]), (0, c.useEffect)((() => {
            const e = [];
            if (!p && _ > -1)
              for (let a = 5; a > _; a -= 1) e.push((0, s.jsx)("div", {
                className: J.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== g ? g : ""
                }
              }, `crewrankbar-${a}`));
            v(e)
          }), [_, p, g]);
          const R = e => {
            e.stopPropagation(), o({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, s.jsxs)("div", {
            className: J.profileDetails,
            onClick: R,
            onKeyUp: R,
            role: "button",
            tabIndex: -1,
            children: [(0, s.jsxs)("div", {
              className: J.avatar,
              children: [T, (0, s.jsx)("div", {
                className: J.avatarPlatform,
                "data-platform": N,
                children: (0, s.jsx)(F, {
                  className: J.platformTag,
                  tagSize: W.large,
                  platform: N
                })
              })]
            }), (0, s.jsxs)("div", {
              className: J.profileStats,
              children: [(0, s.jsx)("div", {
                className: J.scNames,
                children: (0, s.jsxs)("div", {
                  className: J.scTagsNames,
                  children: [(0, s.jsx)("span", {
                    className: J.scUserName,
                    "data-testid": K,
                    children: e.platformUsername
                  }), u && (0, s.jsxs)("span", {
                    className: J.scCrewName,
                    "data-arrow-tag": p,
                    children: [u, !p && (0, s.jsx)("div", {
                      className: J.scCrewRankBar,
                      children: k
                    })]
                  })]
                })
              }), (0, s.jsxs)("div", {
                className: J.scProgress,
                children: [(0, s.jsx)(z, {
                  className: J.scRpLevel,
                  rank: x
                }), (0, s.jsxs)("div", {
                  className: J.scMoney,
                  children: [(0, s.jsxs)("span", {
                    className: J.scCash,
                    "data-testid": Q,
                    children: ["$", M]
                  }), (0, s.jsxs)("span", {
                    className: J.scBank,
                    "data-testid": q,
                    children: ["$", w]
                  })]
                })]
              })]
            })]
          })
        };
      let ae = "rockstargames-modules-gtao-license-plateb794a0e12537ad5fd506353133b9d60a",
        te = "rockstargames-modules-gtao-license-platedd4bcd955436c8a6982ee16756f7fd8b",
        se = "rockstargames-modules-gtao-license-platec1e8d8d5b52081b34283a5ac0d377362",
        ce = "rockstargames-modules-gtao-license-platee8e5249dac92a2bc76788d0fe7d7dfb7",
        oe = "rockstargames-modules-gtao-license-platef64d91c845a3931140b8b2c6a47da81f";
      const ne = ({
          dragThreshold: e = 80,
          interactionDelay: a = 1e3,
          mobileGutterWidth: t = 17,
          slideChangeCallback: o = null,
          slideClickCallback: n = null,
          children: l = [],
          disablePager: r = !1,
          disableSwiper: i = !1
        }) => {
          const d = (0, c.createRef)(),
            u = (0, A.ri)(d, !1),
            [m, g] = (0, c.useState)(!1),
            [f, p] = (0, c.useState)(!1),
            [h, _] = (0, c.useState)(0),
            [b, k] = (0, c.useState)(0),
            [v, x] = (0, c.useState)([t]),
            [C, S] = (0, c.useState)(v[0]),
            [N, w] = (0, c.useState)(252),
            [y, M] = (0, c.useState)(0),
            [j, I] = (0, c.useState)([]),
            [E, L] = (0, c.useState)([]),
            [T, P] = (0, c.useState)(!1),
            R = e => {
              if (!0 === m || !0 === i) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              k(a)
            },
            H = a => {
              if (!0 === m || 0 === b || !0 === i) return;
              p(!0);
              const t = void 0 !== a.changedTouches ? a.changedTouches[0].screenX : a.screenX,
                s = t > b ? 1 : -1,
                c = Math.abs(b - t);
              c > e ? (s > 0 ? (() => {
                if (!0 === m) return;
                g(!0);
                const e = h - 1 < 0 ? 0 : h - 1;
                _(e), S(v[e]), o && o(e)
              })() : (() => {
                if (!0 === m) return;
                g(!0);
                let e = h + 1 >= v.length ? v.length - 1 : h + 1;
                e < 0 && (e = 0), _(e), S(v[e]), o && o(e)
              })(), k(0)) : S(v[h] + c * s)
            },
            O = () => {
              !0 !== m && !0 !== i && (g(!0), !0 !== m && (S(v[h]), k(0)), p(!1))
            };
          return (0, c.useEffect)((() => {
            const e = [];
            l.forEach((() => {
              e.push((0, c.createRef)())
            })), I(e)
          }), [l]), (0, c.useEffect)((() => {
            if (j.length < 1) return;
            w(j[0]?.current?.clientWidth || 0);
            const e = j[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            M(t + a)
          }), [j]), (0, c.useEffect)((() => {
            !1 !== m && setTimeout((() => {
              g(!1)
            }), a)
          }), [m, a]), (0, c.useEffect)((() => {
            x(l.map(((e, a) => (e => {
              let a = 0;
              const s = l.length;
              return 1 === s ? .5 * u - .5 * N - 2 * t + y : (0 === e && (a = t - e * N), e === s - 1 && s > 1 && (a = s * N * -1 + (u - (t - y))), e > 0 && e < s - 1 && (a = e * N * -1 + (.5 * u - .5 * N + .5 * y)), a)
            })(a)))), 1 === l.length ? P(!0) : P(!1)
          }), [d.current, l, u]), (0, c.useEffect)((() => {
            const e = (a = h, l.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            L(e)
          }), [l, h]), (0, c.useEffect)((() => {
            !0 !== r && !0 !== i || S(v[0])
          }), [i, r, v]), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("div", {
              className: ae,
              ref: d,
              onTouchStart: R,
              onTouchMove: H,
              onTouchEnd: O,
              onMouseDown: R,
              onMouseMove: H,
              onMouseUp: O,
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, s.jsx)("div", {
                className: se,
                "data-interaction-blocked": m,
                "data-single-item": T,
                style: {
                  transform: T ? null : `translateX(${C}px)`
                },
                children: l.map(((e, a) => (0, s.jsx)("div", {
                  onClick: () => (e => {
                    null === n || f || n(e)
                  })(a),
                  className: te,
                  ref: j[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), E.length > 1 && !1 === r && (0, s.jsx)("div", {
              className: ce,
              children: E.map(((e, a) => (0, s.jsx)("div", {
                className: oe,
                "data-active": e.active
              }, a)))
            })]
          })
        },
        le = {
          languageSelector: "rockstargames-modules-gtao-license-plateb71a5b5521e679bcab20ec6302253996",
          nav: "rockstargames-modules-gtao-license-plateca9118e28091523e6679a3b95054fe93",
          navHeader: "rockstargames-modules-gtao-license-platefa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-modules-gtao-license-platece91ee6ebb491174a4ccb4be628aaae7",
          open: "rockstargames-modules-gtao-license-platec5ffa3cbaa36329b72b3d928f9739849",
          pillBtn: "rockstargames-modules-gtao-license-plateb4f0b55680e047d303f82f34594abd96",
          profile: "rockstargames-modules-gtao-license-platee506a7deb95c0b0c9988325cc857ea9a",
          scCharacterList: "rockstargames-modules-gtao-license-platea84bbdd60e615baed0172e6b960c5d32",
          scCharacterSelectBtn: "rockstargames-modules-gtao-license-plateea15428b850bf436adda6f1dd8ac1af9",
          scCharacterSelector: "rockstargames-modules-gtao-license-platec3ea8d575c892277f23ad5b589977862",
          scProfile: "rockstargames-modules-gtao-license-platefb20979fe4aa7955196d74baf7d19379",
          selected: "rockstargames-modules-gtao-license-plateed6126bd2f36579f2b8035e7c6579eb7"
        },
        re = ({
          sc: e,
          charListHidden: a,
          hideCharacterList: t,
          refCharacterListDesktop: o,
          menuPadding: n,
          longCharList: r,
          setLongCharList: d,
          isMobileMode: u,
          setIsMobileMode: m,
          location: g,
          onNavigate: p
        }) => {
          const {
            windowWidth: _,
            windowHeight: b
          } = (0, h.useWindowResize)(), k = (0, l.useIntl)(), {
            languageSelectorOpened: v,
            setLanguageSelectorOpened: x,
            activeSubNavId: C,
            setActiveSubNavId: S,
            subNavExtraHeight: N,
            setSubNavExtraHeight: w,
            navOpened: y,
            setScNavOpened: I
          } = M(), [R, H] = (0, c.useState)(""), {
            webSettings: $
          } = (0, h.useRockstarWebSettings)(), {
            track: B
          } = (0, i.useGtmTrack)(), D = (0, h.useRockstarTokenPing)(), {
            data: U,
            loggedIn: z
          } = (0, i.useRockstarUser)(), {
            charactersNeeded: W,
            currentCharId: F,
            hasNotifications: V,
            navOpen: X,
            setCurrentCharId: G,
            setHasNotifications: J,
            setSelectedCharacterTuple: K,
            setUserData: Y
          } = (0, i.useRockstarUserState)(), [q, Q] = (0, c.useState)(null), [ae, te] = (0, c.useState)(!1), [se, ce] = (0, c.useState)(!1), [oe, re] = (0, c.useState)(0), ie = (0, c.createRef)(), de = (0, A.ri)(ie, !1), ue = (0, c.createRef)(), [me, ge] = (0, c.useState)(0), [fe, pe] = (0, c.useState)([]), [he, _e] = (0, c.useState)(244), be = (0, c.useRef)(null), ke = (0, c.useMemo)((() => (0, L.A)()), []), ve = (0, c.useMemo)((() => ((e, a, t, s, c) => [{
            text: e.formatMessage(j.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(j.sc_link_settings),
              location: {
                domain: L.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...T,
                text: j.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(j.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...T,
                text: j.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(j.sc_link_game_activation),
              location: {
                domain: L.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...T,
                text: j.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(j.sc_link_notifications),
            location: {
              domain: L.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...T,
              text: j.sc_link_notifications.defaultMessage,
              location: {
                domain: L.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(j.sc_link_crews),
            location: {
              domain: L.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...T,
              text: j.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(j.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(j.sc_link_my_friends),
              location: {
                domain: L.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...T,
                text: j.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(j.sc_link_import_friends),
              location: {
                domain: L.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...T,
                text: j.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(j.sc_link_find_friends),
              location: {
                domain: L.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...T,
                text: j.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, P(e), {
            text: e.formatMessage(j.sc_link_log_out),
            href: `${a.logout}?returnUrl=${c}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...T,
              text: j.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(k, e, U, V, R, window)), [k, e, U, V, R, ke]), xe = () => {
            ce(n + he * oe < de)
          }, Ce = () => {
            if (ue.current) {
              const {
                current: e
              } = ue, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ge(a + e)
              } else ge(a)
            }
          };
          return (0, c.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ke.currentSite?.site === L.C.socialClub && (e = encodeURIComponent("/")), H(e)
          }), [g]), (0, c.useEffect)((() => {
            pe(U?.characters?.[W] ?? [])
          }), [U, W]), (0, c.useEffect)((() => {
            U && Y(U)
          }), [U]), (0, c.useEffect)((() => {
            const e = U?.characters?.gtao ?? [];
            if (null !== z && !e.length) return void K(!1);
            if (null == F || !e.length) return;
            const a = e?.[F] ?? e?.[0] ?? null;
            K(!!a?.platform && [a.platform, a.characterSlot])
          }), [F, U, z]), (0, c.useEffect)((() => {
            (async () => {
              if (!U?.id || !X) return;
              const {
                count: e
              } = await (0, h.coreScApiFetch)("notification/count", {
                pingBearer: D
              });
              J(e > 0)
            })()
          }), [U, X]), (0, c.useEffect)((() => {
            xe()
          }), [he]), (0, c.useEffect)((() => {
            t(!0), m(_ < 768), m(_ < 768 || b < 649)
          }), [_, b]), (0, c.useEffect)((() => {
            let e = fe.length - 1;
            e < 0 && (e = 0), re(e);
            const a = fe.length > 0 ? fe[F] ?? fe[0] : null;
            a && (Q(a), fe.length > 1 ? te(!0) : te(!1), d(fe.length - 1 > 3))
          }), [F, fe]), (0, c.useEffect)((() => {
            xe()
          }), [oe, u, _, fe]), (0, c.useEffect)((() => {
            Ce(), E()((() => {
              setTimeout(Ce, 0)
            }), 300)
          }), [_, b]), (0, c.useEffect)((() => {
            const e = $?.currentCharId ?? 0;
            e !== F && G(Math.max(0, Math.min(e, fe.length - 1)))
          }), [fe, $]), (0, s.jsxs)(s.Fragment, {
            children: [null !== q && "gtao" === W && (0, s.jsxs)("div", {
              className: le.scProfile,
              ref: be,
              tabIndex: -1,
              "aria-label": k.formatMessage(j.profile_selector_profile_card),
              children: [(0, s.jsx)(ee, {
                s: le,
                character: q
              }), !0 === ae && (0, s.jsxs)("div", {
                className: le.scCharacterSelector,
                children: [(0, s.jsx)("button", {
                  className: le.scCharacterSelectBtn,
                  "aria-hidden": !X,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const s = !a;
                    t(s), B({
                      event: s ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, s.jsx)("span", {
                    children: (0, s.jsx)(l.FormattedMessage, {
                      ...j.profile_selector_switch_character
                    })
                  })
                }), !u && (0, s.jsx)("div", {
                  className: le.scCharacterList,
                  "data-long-list": r,
                  "aria-hidden": a,
                  ref: o,
                  children: fe.map((e => (0, s.jsx)(Z, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: _e
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), u && (0, s.jsx)("div", {
                  className: le.scCharacterList,
                  "data-single-item": 2 === fe.length,
                  "data-swiper-disabled": se,
                  "aria-hidden": a,
                  ref: ie,
                  children: (0, s.jsx)(ne, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      B({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: se,
                    disableSwiper: se,
                    children: fe.filter(((e, a) => a !== F)).map((e => (0, c.createElement)(Z, {
                      characterData: e,
                      setMobileCardWidth: _e,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: a ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, s.jsxs)("nav", {
              className: le.nav,
              "aria-hidden": !X,
              children: [(0, s.jsx)("button", {
                className: le.navHeader,
                type: "button",
                "data-opened": y,
                "data-nav-opened": X,
                tabIndex: y ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), y || I(!0)
                },
                "data-testid": "playerButton",
                children: (0, s.jsx)("span", {
                  className: le.navHeaderText,
                  children: U.nickname
                })
              }), (0, s.jsx)("div", {
                className: le.navWrap,
                "data-opened": y,
                "data-logged-in": "true",
                ref: ue,
                style: {
                  "--navWrap-max-height": `${me+N}px`
                },
                children: ve.map(((e, a) => (0, c.createElement)(O, {
                  ...e,
                  id: a,
                  activeSubNavId: C,
                  setActiveSubNavId: S,
                  setSubNavExtraHeight: w,
                  onNavigate: p,
                  key: e.text
                })))
              })]
            }), (0, s.jsx)("div", {
              className: le.scLanguageSelector,
              style: {
                visibility: X ? null : "hidden"
              },
              children: (0, s.jsx)(f, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: v,
                setLanguageSelectorOpened: x,
                location: g,
                onLanguageChange: l.onLanguageChange
              })
            })]
          })
        },
        ie = {
          dragHandle: "rockstargames-modules-gtao-license-plateff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-gtao-license-plateb49ca12d5334ed642d4359aa44105834",
          menu: "rockstargames-modules-gtao-license-platec0a7178c1cd96d7fb7a2e4ebab0c01bb",
          navOpen: "rockstargames-modules-gtao-license-plateb8b5590986941337aa51e2eb7ff12f78",
          pillBtn: "rockstargames-modules-gtao-license-platec31a4663e3c088e8d1095331ba8cafc8",
          scOverlay: "rockstargames-modules-gtao-license-plateeff8c1d4bf675accdb7d952aba0174dc",
          selected: "rockstargames-modules-gtao-license-platec5f6868e76307ee73276f140c2f988df"
        },
        de = (0, h.getConfigForDomain)(),
        ue = g((({
          location: e,
          onNavigate: a
        }) => {
          const {
            windowHeight: o
          } = (0, h.useWindowResize)(), n = (0, l.useIntl)(), {
            languageSelectorOpened: r,
            setLanguageSelectorOpened: d,
            setActiveSubNavId: u,
            navOpened: m,
            setAccountNavOpened: g,
            charListHidden: f,
            setCharListHidden: _
          } = M(), [b, k] = (0, c.useState)(!1), {
            navHidden: v = !1
          } = (0, h.useState)(), {
            loggedIn: x
          } = (0, i.useRockstarUser)(), {
            currentCharId: C,
            navOpen: S,
            setNavOpen: N,
            userData: w
          } = (0, i.useRockstarUserState)(), {
            track: y
          } = (0, i.useGtmTrack)(), [I, E] = (0, c.useState)(!1), L = (0, c.useRef)(), [T, P] = (0, c.useState)(0), R = (0, c.createRef)(), [H, O] = (0, c.useState)(!1), [A, B] = (0, c.useState)(0), [D, U] = (0, c.useState)(!1), {
            mutateWebSettings: z,
            webSettings: W
          } = (0, h.useRockstarWebSettings)(), F = (0, c.useCallback)((e => {
            _(e), L.current && !0 === e && (L.current.scrollTop = 0)
          }), [L]);
          return (0, c.useEffect)((() => {
            null !== C && W.currentCharId !== C && z({
              key: "currentCharId",
              value: C
            }), !1 === x ? z({
              key: "currentCharId",
              value: null
            }) : x && w && w?.accountSynced && y({
              event: "account_synced"
            })
          }), [C, x, w?.accountSynced]), (0, c.useEffect)((() => {
            L.current && (!1 === f && !1 === I && (L.current.style.height = `${L.current.scrollHeight}px`), !0 === f && (L.current.style.height = null))
          }), [f, L, I]), (0, c.useEffect)((() => {
            const e = () => {
                N(!1), F(!0)
              },
              a = a => {
                const t = R?.current && a?.composedPath().includes(R.current);
                S && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }), [R]), (0, c.useEffect)((() => {
            N(!1), F(!0)
          }), [v]), (0, c.useEffect)((() => {
            if (R.current) {
              const {
                current: e
              } = R, a = window.getComputedStyle(e);
              P(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [R]), (0, c.useEffect)((() => {
            U(window.navigator.userAgent.includes("Mac"))
          }), []), (0, c.useEffect)((() => {
            R.current && k(R?.current?.scrollHeight >= o)
          }), [R, o]), (0, c.useEffect)((() => {
            S || (u(-1), d(!1))
          }), [S]), (0, c.useEffect)((() => {
            r && (f || F(!0), m && (g(!1), u(-1)))
          }), [r]), (0, c.useEffect)((() => {
            m && (r && d(!1), f || F(!0))
          }), [m]), void 0 === x ? null : (0, s.jsxs)(p.A, {
            enabled: !!S,
            removeScrollBar: !1,
            children: [(0, s.jsxs)("div", {
              className: [ie.menu, S ? ie.navOpen : ""].join(" "),
              "data-logged-in": x,
              "data-mac-browser": D,
              "data-scroll-mode": b,
              ref: R,
              "aria-hidden": !S,
              children: [(0, s.jsx)("button", {
                className: ie.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  B(a)
                },
                onTouchMove: e => {
                  if (0 === A) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(A - a) > 1 && (B(0), N(!1))
                },
                children: (0, s.jsx)("img", {
                  className: ie.dragHandle,
                  src: t(35902),
                  alt: n.formatMessage(j.sc_menu_drag_handle)
                })
              }), x ? (0, s.jsx)(re, {
                sc: de,
                charListHidden: f,
                hideCharacterList: F,
                refCharacterListDesktop: L,
                menuPadding: T,
                longCharList: I,
                setLongCharList: E,
                isMobileMode: H,
                setIsMobileMode: O,
                location: e,
                onNavigate: a
              }) : (0, s.jsx)($, {
                sc: de,
                navOpen: S,
                location: e,
                onNavigate: a
              })]
            }), (0, s.jsx)("div", {
              className: [ie.scOverlay, S ? ie.navOpen : ""].join(" "),
              "data-logged-in": x
            })]
          })
        })),
        me = g((({
          setOtherHeaderDropdowns: e
        }) => {
          const a = (0, l.useIntl)(),
            {
              data: o,
              loggedIn: n
            } = (0, i.useRockstarUser)(),
            {
              charactersNeeded: r,
              currentCharId: d,
              navOpen: u,
              setNavOpen: m
            } = (0, i.useRockstarUserState)(),
            {
              track: g
            } = (0, i.useGtmTrack)(),
            [f, p] = (0, c.useState)(),
            [h, _] = (0, c.useState)(!1),
            [b, k] = (0, c.useState)([]);
          (0, c.useEffect)((() => {
            k(o?.characters?.[r] ?? [])
          }), [o, r]);
          const v = (0, c.useCallback)((a => {
            a.stopPropagation(), m(!u), 1 == !u && e(null), g({
              event: "account_menu_click",
              element_placement: "account menu",
              text: u ? "close" : "open"
            })
          }), [u]);
          return (0, c.useEffect)((() => {
            _(!!b?.[d]?.mugshotUrl)
          }), [b, d]), (0, c.useEffect)((() => {
            p((() => {
              switch (n) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return b?.[d]?.mugshotUrl ?? o?.avatar
              }
            })())
          }), [o, b, d, n]), (0, s.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-plateee811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": a.formatMessage(u ? j.sc_menu_close : j.sc_menu_open),
            "aria-expanded": u,
            type: "button",
            onClick: v,
            "data-mugshot": h,
            "data-testid": "avatarMenuButtonDesktop",
            "data-logged-in": Boolean(n),
            children: [(0, s.jsx)("img", {
              className: "rockstargames-modules-gtao-license-platea917b58ca28b68550a1aa5d99c7eb998",
              src: f,
              alt: o?.nickname || "",
              onError: () => {
                let e = null;
                e = t(h ? 5931 : 73091), p(e)
              }
            }), n && h && (0, s.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platec06123ceae7ca4759ec8b1a5197823db",
              children: (0, s.jsx)(F, {
                platform: b?.[d]?.platform,
                tagSize: W.small
              })
            }), n && (0, s.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platec4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": b?.[d]?.platform ?? null
            })]
          })
        }));
      let ge = {
        open: "rockstargames-modules-gtao-license-plated815312ad6eebc2c651f8554dc6c0bb7",
        pillBtn: "rockstargames-modules-gtao-license-platec5adbe3b8adfa45115608e536f6e0384",
        scCharacterList: "rockstargames-modules-gtao-license-platededb11e25dddfe561c538a370f5028e2",
        scCharacterSelectBtn: "rockstargames-modules-gtao-license-plated3991df21bf29ec01662910e116a6ff5",
        scCharacterSelector: "rockstargames-modules-gtao-license-plateefcb26b13bae0546c71d0b9f88e335a9",
        selected: "rockstargames-modules-gtao-license-platec7c3f92d1fdd021a5cd665583ac79d89"
      };
      const fe = {
          pcalt: "PC ENHANCED",
          pc: "PC LEGACY",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        pe = () => {
          const e = (0, l.useIntl)(),
            {
              track: a
            } = (0, i.useGtmTrack)(),
            [t, o] = (0, c.useState)(null),
            [n, r] = (0, c.useState)(0),
            [d, u] = (0, c.useState)(!1),
            [m, g] = (0, c.useState)(!1),
            f = (0, c.createRef)(),
            [p, _] = (0, c.useState)([]),
            [b, k] = (0, c.useState)(244),
            {
              windowWidth: v
            } = (0, h.useWindowResize)(),
            [x, C] = (0, c.useState)(!1),
            S = (0, A.ri)(f, !1),
            {
              data: N,
              loggedIn: w
            } = (0, i.useRockstarUser)(),
            {
              charactersNeeded: y,
              currentCharId: I,
              setCurrentCharId: E
            } = (0, i.useRockstarUserState)(),
            {
              charListHidden: L,
              setCharListHidden: T
            } = M();
          (0, c.useEffect)((() => {
            void 0 === I && E(0)
          }), [I]), (0, c.useEffect)((() => {
            let e = p.length - 1;
            e < 0 && (e = 0), r(e);
            const a = p.length > 0 ? p[I] ?? p[0] : null;
            a && (o(a), p.length > 1 ? g(!0) : g(!1))
          }), [I, p]), (0, c.useEffect)((() => {
            _(N?.characters?.[y] ?? [])
          }), [N, y]), (0, c.useEffect)((() => {
            P()
          }), [b, n, x, v, p]), (0, c.useEffect)((() => {
            C(v < 1024)
          }), [v]);
          const P = () => {
              u(b * n < S)
            },
            R = e => {
              const t = p.filter(((e, a) => a !== I)).map((e => e));
              E(t[e].index), a({
                event: "character_selector_select",
                text: fe[t[e].platform],
                position: t[e].index
              })
            };
          return null !== t && "gtao" === y && w ? (0, s.jsxs)("div", {
            tabIndex: -1,
            "aria-label": e.formatMessage(j.profile_selector_profile_card),
            children: [(0, s.jsx)(ee, {
              s: ge,
              character: t
            }), !0 === m && (0, s.jsxs)("div", {
              className: ge.scCharacterSelector,
              children: [(0, s.jsx)("button", {
                className: ge.scCharacterSelectBtn,
                "data-list-closed": L,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const t = !L;
                  T(t), a({
                    event: t ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                children: (0, s.jsx)("span", {
                  className: ge.scCharacterBtnText,
                  children: (0, s.jsx)(l.FormattedMessage, {
                    ...j.profile_selector_switch_character
                  })
                })
              }), !x && (0, s.jsx)("div", {
                className: ge.scCharacterList,
                "aria-hidden": L,
                children: p.filter(((e, a) => a !== I)).map(((e, a) => (0, s.jsx)(Z, {
                  tabIndex: L ? -1 : 0,
                  onClick: () => R(a),
                  characterData: e,
                  setMobileCardWidth: k
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
              }), x && (0, s.jsx)("div", {
                className: ge.scCharacterList,
                "data-single-item": 2 === p.length,
                "data-swiper-disabled": d,
                "aria-hidden": L,
                ref: f,
                children: (0, s.jsx)(ne, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    a({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  slideClickCallback: R,
                  disablePager: d,
                  disableSwiper: d,
                  children: p.filter(((e, a) => a !== I)).map((e => (0, c.createElement)(Z, {
                    characterData: e,
                    setMobileCardWidth: k,
                    key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                    tabIndex: L ? -1 : 0
                  })))
                })
              })]
            })]
          }) : null
        }
    },
    73091: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f97af80b5511804c9842052dacb20f2a.png"
    },
    79867: (e, a, t) => {
      t.d(a, {
        A: () => o,
        C: () => s
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        c = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        o = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = c.findIndex((a => Object.entries(a.sites).findIndex((([a, s]) => s === t && (e = {
            site: a,
            subDomain: s
          }, !0))) >= 0)), o = c[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...o,
            currentSite: e
          }
        }
    }
  }
]);