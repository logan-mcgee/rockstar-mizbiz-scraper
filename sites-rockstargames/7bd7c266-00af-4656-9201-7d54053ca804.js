try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7bd7c266-00af-4656-9201-7d54053ca804", e._sentryDebugIdIdentifier = "sentry-dbid-7bd7c266-00af-4656-9201-7d54053ca804")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
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
        CharacterProfile: () => he,
        LanguageSelector: () => f,
        Menu: () => ge,
        MenuButton: () => ue
      });
      var s = t(42295),
        r = t(62229),
        c = t(86695),
        o = t(57365),
        n = t(81788),
        i = t(14200),
        l = t(2918);
      const d = (0, n.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            description: "The default option for the language selector.",
            defaultMessage: "Select a Language"
          }
        }),
        m = {
          dropdown: "rockstargames-sites-rockstargamescb93b1e1dbe15862e05455dc78f5ec25",
          dropdownContainer: "rockstargames-sites-rockstargamesab0cc073180383d3d5e4bee00eaa311f",
          languageSelector: "rockstargames-sites-rockstargamesa9dd8a9cb7334e205df4ac3b4392916d",
          linkWrapper: "rockstargames-sites-rockstargamesb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-sites-rockstargamesc64b05a604b1a6be373d35cf01edba2e",
          menuStyles: "rockstargames-sites-rockstargamesb641fac428f473cbb4593cd058a01953",
          open: "rockstargames-sites-rockstargamesaa1d94595080f833a35e29fbbe8fd01c",
          pillBtn: "rockstargames-sites-rockstargamese34929a5bcdda554c66b47a858ddd966",
          selectBox: "rockstargames-sites-rockstargamesfe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-sites-rockstargamesae32febd9789e79c804b2679d25e8a65",
          selectBoxWrapper: "rockstargames-sites-rockstargamesdb1aead5717ba9dae1e272c3b7e6e801",
          selected: "rockstargames-sites-rockstargamese1ba906f108faeb297753d39a8d21b8b"
        },
        g = JSON.parse('{"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        u = e => (0, n.withIntl)(e, g),
        f = u((({
          theme: e,
          languageSelectorOpened: a,
          setLanguageSelectorOpened: t,
          location: g,
          parent: u = "element",
          onLanguageChange: f,
          ...p
        }) => {
          const {
            track: h
          } = (0, l.useGtmTrack)(), k = (0, n.useIntl)(), [_] = (0, n.getLocale)(), [b, v] = (0, r.useState)(!1), x = (0, r.useRef)(null), [C, S] = (0, r.useState)(0), w = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, N = e => {
            if (t && t(!1), _.subdomaincom === e || "none" === e) return void(t && t(!1));
            const a = n.locales.find((a => a.subdomaincom === e));
            a && f?.({
              selectedLocale: a,
              track: h,
              parent: u
            })
          };
          return (0, r.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === b && v(!1)
          }), [a]), (0, r.useEffect)((() => {
            x.current && S(x.current.scrollHeight)
          }), [x]), "function" != typeof f ? null : (0, s.jsxs)(s.Fragment, {
            children: [w && "sc-menu" === e && (0, s.jsx)("div", {
              className: [m.languageSelector, b ? m.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${u}-language-selector`,
              ...p,
              children: (0, s.jsx)("div", {
                className: m.selectBoxWrapper,
                children: (0, s.jsxs)("select", {
                  className: m.selectBox,
                  onClick: e => e.stopPropagation(),
                  onChange: e => {
                    const a = e.currentTarget.value;
                    N(a)
                  },
                  "aria-label": k.formatMessage(d.language_selector_default),
                  "data-testid": `${u}-language-selector-button`,
                  children: [(0, s.jsx)("option", {
                    className: m.selectBoxOption,
                    value: "none",
                    "data-testid": `${u}-language-selector-current`,
                    children: n.locales.find((e => e.subdomaincom === _.subdomaincom))?.label ?? (0, s.jsx)(n.FormattedMessage, {
                      ...d.language_selector_default
                    })
                  }), n.locales.map((({
                    label: e,
                    subdomaincom: a
                  }) => (0, s.jsx)("option", {
                    className: m.selectBoxOption,
                    value: a,
                    children: e
                  }, `mobile-${a}`)))]
                })
              })
            }), (!w || "sc-menu" !== e) && "footer" !== e && (0, s.jsxs)("div", {
              className: [m.languageSelector, b ? m.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${u}-language-selector`,
              ...p,
              children: [(0, s.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), t && t(!b), v(!b)
                },
                "data-testid": `${u}-language-selector-button`,
                type: "button",
                "aria-label": k.formatMessage(d.language_selector_default),
                children: [(0, s.jsx)("i", {}), (0, s.jsx)("span", {
                  "data-testid": `${u}-language-selector-current`,
                  children: n.locales.find((e => e.subdomaincom === _.subdomaincom))?.label ?? (0, s.jsx)(n.FormattedMessage, {
                    ...d.language_selector_default
                  })
                })]
              }), (0, s.jsx)("div", {
                className: m.linkWrapper,
                ref: x,
                style: {
                  "--ls-linkWrapper-opened-height": `${C}px`
                },
                children: (0, s.jsx)("div", {
                  className: m.links,
                  children: n.locales.map((({
                    subdomaincom: e,
                    label: a
                  }) => (0, s.jsx)(i.A, {
                    onClick: a => {
                      a.preventDefault(), N(e)
                    },
                    tabIndex: b ? 0 : -1,
                    "data-testid": `${u}-language-selector-${e}`,
                    children: a
                  }, a)))
                })
              })]
            }), "footer" === e && (0, s.jsxs)("div", {
              className: m.dropdownContainer,
              "data-testid": `${u}-language-selector`,
              ...p,
              children: [(0, s.jsx)(o.Globe, {
                size: "MD",
                label: ""
              }), (0, s.jsxs)(c.Dropdown.Root, {
                className: m.dropdown,
                onValueChange: e => {
                  N(e)
                },
                defaultValue: n.locales.find((e => e.subdomaincom === _.subdomaincom))?.subdomaincom,
                children: [(0, s.jsxs)(c.Dropdown.Trigger, {
                  children: [(0, s.jsx)(c.Dropdown.TriggerText, {
                    placeholder: k.formatMessage(d.language_selector_default)
                  }), (0, s.jsx)(c.Dropdown.TriggerIcon, {})]
                }), (0, s.jsx)(c.Dropdown.Portal, {
                  children: (0, s.jsx)(c.Dropdown.Content, {
                    children: (0, s.jsx)(c.Dropdown.ScrollArea, {
                      children: n.locales.map((({
                        subdomaincom: e,
                        label: a
                      }) => (0, s.jsx)(c.Dropdown.Option, {
                        value: e,
                        testId: `${u}-language-selector-${e}`,
                        children: (0, s.jsx)(c.Dropdown.OptionText, {
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
      const k = (0, h.makeVar)(!1),
        _ = e => k(e),
        b = (0, h.makeVar)(-1),
        v = e => b(e),
        x = (0, h.makeVar)(-1),
        C = e => x(e),
        S = (0, h.makeVar)(!0),
        w = e => S(e),
        N = (0, h.makeVar)(!0),
        y = e => N(e),
        M = () => {
          const e = (0, h.useReactiveVar)(k),
            a = (0, h.useReactiveVar)(b),
            t = (0, h.useReactiveVar)(x),
            s = (0, h.useReactiveVar)(S),
            c = (0, h.useReactiveVar)(N);
          return (0, r.useEffect)((() => {
            c || (e && _(!1), s && (w(!1), v(-1)))
          }), [c]), (0, r.useEffect)((() => {
            !e && c && (s || w(!0))
          }), [e, c]), (0, r.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: _,
            activeSubNavId: a,
            setActiveSubNavId: v,
            subNavExtraHeight: t,
            setSubNavExtraHeight: C,
            navOpened: s,
            setAccountNavOpened: w,
            charListHidden: c,
            setCharListHidden: y
          })), [e, a, t, s, c])
        },
        j = (0, n.defineMessages)({
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
        T = t(79867);
      const L = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        P = e => ({
          text: e.formatMessage(j.sc_link_help),
          target: "_self",
          ga: {
            ...L,
            text: j.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(j.sc_link_support),
            location: {
              domain: T.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...L,
              text: j.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(j.sc_link_legal),
            location: {
              domain: T.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...L,
              text: j.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(j.sc_link_privacy_policy),
            location: {
              domain: T.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...L,
              text: j.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(j.sc_link_cookies_policy),
            location: {
              domain: T.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...L,
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
              ...L,
              text: j.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(j.sc_link_do_not_sell_my_information),
            location: {
              domain: T.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...L,
              text: j.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        R = ({
          to: e,
          target: a,
          className: t,
          onNavigate: r,
          onClick: c,
          reloadDocument: o,
          children: n,
          ...i
        }) => {
          const l = e?.startsWith("http");
          return (0, s.jsx)("a", {
            href: e,
            className: t,
            onClick: a => {
              c?.(a), l || o || (r ? (a.preventDefault(), r(e)) : (a.preventDefault(), window.history.pushState({}, "", e)))
            },
            target: a,
            ...i,
            children: n
          })
        },
        O = ({
          text: e,
          target: a,
          href: t,
          location: r,
          ga: c,
          dataTestId: o,
          isSubLink: i,
          hasNotifications: d = !1,
          onClickCallback: m = () => {},
          tabIndex: g,
          reloadDocument: u = !1,
          onNavigate: f
        }) => {
          const {
            track: p
          } = (0, l.useGtmTrack)(), h = (0, T.A)(), k = (0, n.useIntl)();
          let _ = t;
          r && (_ = r.domain === h.currentSite?.site ? r.path : `https://${h.sites[r.domain]}.rockstargames.com${r.path}`);
          const b = {
            ...c,
            link_url: _
          };
          return (0, s.jsxs)(R, {
            className: i ? "rockstargames-sites-rockstargamesc2233d027086d54af877493d7d0700bd" : "rockstargames-sites-rockstargamesf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": o || "menuLink",
            title: e,
            to: _,
            target: a,
            rel: "noreferrer",
            reloadDocument: u,
            tabIndex: g,
            onClick: e => {
              p(b), m(e)
            },
            onNavigate: f,
            children: [e, d && (0, s.jsx)("div", {
              className: "rockstargames-sites-rockstargamesadbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, s.jsx)("span", {
                className: "rockstargames-sites-rockstargamese49e290899be3c888ca5a4b6b13736a1",
                children: k.formatMessage(j.nofications_new)
              })
            })]
          })
        },
        D = ({
          id: e,
          text: a,
          target: t,
          href: c,
          location: o,
          ga: n,
          hasNotifications: i = !1,
          dataTestId: d,
          children: m = [],
          activeSubNavId: g,
          setActiveSubNavId: u,
          setSubNavExtraHeight: f,
          reloadDocument: p = !1,
          onClickCallback: k = () => {},
          onNavigate: _
        }) => {
          const {
            windowWidth: b,
            windowHeight: v
          } = (0, h.useWindowResize)(), {
            track: x
          } = (0, l.useGtmTrack)(), {
            navOpen: C
          } = (0, l.useRockstarUserState)(), S = (0, r.useRef)(null), [w, N] = (0, r.useState)(0), [y, M] = (0, r.useState)(0), [j, I] = (0, r.useState)(!0);
          return (0, r.useEffect)((() => {
            g !== e && !1 === j && I(!0), g === e && I(!1)
          }), [g]), (0, r.useEffect)((() => {
            if (!S.current) return;
            N(S?.current?.scrollHeight);
            const e = window.getComputedStyle(S.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), M(a)
            }
          }), [S, b, v]), m.length > 0 ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)("button", {
              className: "rockstargames-sites-rockstargamescc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": d || "menuButton",
              title: a,
              tabIndex: C ? 0 : -1,
              "data-children-hidden": j,
              onClick: a => {
                a.stopPropagation(), x(n), g === e ? (u(-1), f(0)) : (u(e), f(w + y + y))
              },
              children: [(0, s.jsx)("span", {
                className: "rockstargames-sites-rockstargamesb94730a01d5e9223b69cbc2f20f23bcd",
                children: a
              }), (0, s.jsx)("span", {
                className: "rockstargames-sites-rockstargamesff271a72fe259d74068b4f4d90db08bd"
              })]
            }, a), (0, s.jsx)("nav", {
              className: "rockstargames-sites-rockstargamescbf6e64eadb6f965877129d539aa2dcd",
              ref: S,
              "aria-hidden": j,
              style: {
                height: j ? 0 : `${w}px`
              },
              children: m.map((e => (0, r.createElement)(O, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: j || !C ? -1 : 0,
                onNavigate: _
              })))
            })]
          }) : (0, s.jsx)(O, {
            text: a,
            target: t,
            href: c,
            location: o,
            ga: n,
            hasNotifications: i,
            dataTestId: d,
            isSubLink: !1,
            onClickCallback: k,
            tabIndex: C ? 0 : -1,
            reloadDocument: p,
            onNavigate: _
          })
        },
        H = ({
          sc: e,
          location: a,
          onNavigate: t
        }) => {
          const {
            windowWidth: c,
            windowHeight: o
          } = (0, h.useWindowResize)(), i = (0, n.useIntl)(), {
            languageSelectorOpened: d,
            setLanguageSelectorOpened: m,
            activeSubNavId: g,
            setActiveSubNavId: u,
            subNavExtraHeight: p,
            setSubNavExtraHeight: k
          } = M(), {
            setSelectedCharacterTuple: _,
            navOpen: b
          } = (0, l.useRockstarUserState)(), v = (0, h.useLocale)(), x = (0, h.toScLocaleString)(v), [C, S] = (0, r.useState)(""), w = `${e.login}?returnUrl=${C}&lang=${x}`, N = `${e.signup}&returnUrl=${C}&lang=${x}`, y = (0, r.useMemo)((() => (0, T.A)()), []), I = (0, r.useMemo)((() => {
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
            }, P(e)])(i, w, N);
            return e
          }), [i, w, N, y]), [L, R] = (0, r.useState)(0), O = (0, r.createRef)(), H = () => {
            if (O.current) {
              const {
                current: e
              } = O, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), R(a + e)
              } else R(a)
            }
          };
          return (0, r.useEffect)((() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            S(e)
          }), [JSON.stringify(a)]), (0, r.useEffect)((() => {
            _(!1)
          }), []), (0, r.useEffect)((() => {
            H(), E()((() => {
              setTimeout(H, 0)
            }), 300)
          }), [c, o]), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("nav", {
              className: "rockstargames-sites-rockstargamesf300d66bd02f52ac564238ca6125a091",
              children: (0, s.jsx)("div", {
                className: "rockstargames-sites-rockstargamesac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: O,
                style: {
                  "--navWrap-max-height": `${p+L}px`
                },
                children: I.map((e => (0, r.createElement)(D, {
                  ...e,
                  activeSubNavId: g,
                  setActiveSubNavId: u,
                  setSubNavExtraHeight: k,
                  onNavigate: t,
                  key: e.text
                })))
              })
            }), (0, s.jsx)("div", {
              className: "rockstargames-sites-rockstargamesf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: b ? null : "hidden"
              },
              children: (0, s.jsx)(f, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: d,
                setLanguageSelectorOpened: e => {
                  u(-1), m(e)
                },
                location: a,
                onLanguageChange: n.onLanguageChange
              })
            })]
          })
        };
      var $ = t(72148),
        A = t(68791);
      var B = t(4572),
        U = t.n(B);
      const z = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        W = (0, r.forwardRef)((function({
          rank: e,
          size: a = "large",
          className: t,
          alt: r,
          testId: c,
          ...o
        }, n) {
          const i = z(e),
            l = (0, A.v6)(o, {
              className: U()("rockstargames-sites-rockstargamesf54750ef62f8600000c94f0caba85986", t),
              "data-testid": c
            });
          return (0, s.jsxs)("div", {
            "data-size": a,
            ref: n,
            ...l,
            children: [(0, s.jsx)("svg", {
              role: "svg",
              "aria-label": r,
              className: "rockstargames-sites-rockstargamesa3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": z(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: i
              })
            }), (0, s.jsx)("span", {
              className: "rockstargames-sites-rockstargamesd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        }));
      var F = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const V = ({
        tagSize: e,
        platform: a,
        className: t = ""
      }) => {
        const {
          src: r,
          alt: c
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
          className: U()("rockstargames-sites-rockstargamesb0ff0045ed0326a46ca1e0867d2050c1", t),
          "data-testid": "platform-tag",
          "data-platform": a,
          "data-tag-size": e,
          src: r,
          alt: c
        })
      };
      let X = {
        avatar: "rockstargames-sites-rockstargamesd79f37fd31c0943cbf4368215dfc79a0",
        characterBtn: "rockstargames-sites-rockstargamesb26daf00eb7def0a82a3c1481316acb0",
        characterBtnStats: "rockstargames-sites-rockstargamesed30f2b92b3fc2937e7278409208872f",
        scCharBtnNames: "rockstargames-sites-rockstargamesa6009feaf97e98d18c6efc2de47ba8b4",
        scRp: "rockstargames-sites-rockstargamesf5cab6371f4fcd1aa1ce14c0f97d1e7a",
        scRpIcon: "rockstargames-sites-rockstargamesfaa7b2808fb96fa02fd2e99be36df8e6",
        scRpLevel: "rockstargames-sites-rockstargamesc9300f34b82bbdffb7006ff32247adff",
        scUserName: "rockstargames-sites-rockstargamesc3ab062db0e9e0f75e0598eec5022de5"
      };
      const G = "CharacterButton:characterName",
        Z = "CharacterButton:avatar",
        J = ({
          characterData: e,
          setMobileCardWidth: a,
          tabIndex: c,
          onClick: o = () => {}
        }) => {
          const i = (0, n.useIntl)(),
            {
              currentCharId: d,
              setCurrentCharId: m
            } = (0, l.useRockstarUserState)(),
            g = (0, r.createRef)(),
            {
              platform: u,
              platformUsername: f,
              mugshotUrl: p,
              stats: h
            } = e,
            [k, _] = (0, r.useState)(p),
            b = d === e.index;
          return (0, r.useEffect)((() => {
            g.current && a && a(g?.current?.offsetWidth)
          }), [g]), (0, s.jsxs)("button", {
            className: X.characterBtn,
            type: "button",
            "aria-hidden": b,
            ref: g,
            tabIndex: c,
            onClick: () => o(-1),
            children: [(0, s.jsx)("div", {
              className: X.avatarFrame,
              children: (0, s.jsx)("div", {
                className: X.avatar,
                "data-size": "small",
                children: (0, s.jsx)("img", {
                  className: X.avatarImg,
                  src: k,
                  alt: i.formatMessage(j.profile_selector_mugshot, {
                    userName: f
                  }),
                  onError: () => {
                    _(t(5931))
                  },
                  "data-testid": Z
                })
              })
            }), (0, s.jsxs)("div", {
              className: X.characterBtnStats,
              children: [(0, s.jsxs)("div", {
                className: X.scCharBtnNames,
                children: [(0, s.jsx)(V, {
                  tagSize: F.large,
                  platform: u
                }), (0, s.jsx)("div", {
                  className: X.scUserName,
                  "data-size": "small",
                  "data-testid": G,
                  children: f
                })]
              }), (0, s.jsx)("div", {
                className: X.scRp,
                children: (0, s.jsx)(W, {
                  size: "small",
                  rank: parseInt(h.overview.rank.value)
                })
              })]
            })]
          })
        };
      let K;
      K = {
        avatar: "rockstargames-sites-rockstargamese1ed133f04d4201de6c787667fe46939",
        avatarPlatform: "rockstargames-sites-rockstargamesb061d8f050dd255669342700ddbe9f94",
        pillBtn: "rockstargames-sites-rockstargamesc094ee9992658964204dbc3c55063187",
        profileDetails: "rockstargames-sites-rockstargamesc7a6cdc85906179aeadfbea13a491277",
        profileStats: "rockstargames-sites-rockstargamesa4a23edaf47f301893d88f6e233907b3",
        scBank: "rockstargames-sites-rockstargamesee0f3a44274a32b7c03d50d1f8e23578",
        scCash: "rockstargames-sites-rockstargamesf21a08a90936d208b236a20d5893ab50",
        scCrewName: "rockstargames-sites-rockstargamesc3c644cc20da4e904a7f4e5e3850bf7b",
        scCrewRankBar: "rockstargames-sites-rockstargamescacefbe6235792c328eabdb72c7e812c",
        scCrewRankBarItem: "rockstargames-sites-rockstargamesf9fc60f5d92cda504e6a40d09ec34429",
        scMoney: "rockstargames-sites-rockstargamesffc96f13a79073f795d296415f874263",
        scNames: "rockstargames-sites-rockstargamesc6a703613ae9abf4927cf1f023878d9c",
        scProgress: "rockstargames-sites-rockstargamesb1230619acc50d561a73b55a185e782e",
        scRpIcon: "rockstargames-sites-rockstargamesfd047e239c2b7adafe8729ad8e7ae646",
        scRpLevel: "rockstargames-sites-rockstargamese3dcece76ffe0dcd864d13ada6a4c532",
        scTagsNames: "rockstargames-sites-rockstargamesac56f06be77872b6f7ba074189a2ec36",
        scUserName: "rockstargames-sites-rockstargamesa829077ec05e5b83560be13ff3604c8e",
        selected: "rockstargames-sites-rockstargamesf68f5558f3bacb6ab2f0f6e52b7c4d3d"
      };
      const Y = "ProfileCard:characterName",
        q = "ProfileCard:avatar",
        Q = "ProfileCard:bankValue",
        ee = "ProfileCard:cashValue",
        ae = ({
          character: e
        }) => {
          const {
            data: a
          } = (0, l.useRockstarUser)(), {
            track: c
          } = (0, l.useGtmTrack)(), o = (0, n.useIntl)(), [i, d] = (0, r.useState)([]), [m, g] = (0, r.useState)(null), [u, f] = (0, r.useState)(null), [p, h] = (0, r.useState)(!1), [k, _] = (0, r.useState)(-1), [b, v] = (0, r.useState)([]), [x, C] = (0, r.useState)(0), S = t(5931), {
            platform: w
          } = e, [N, y] = (0, r.useState)("0"), [M, I] = (0, r.useState)("0"), E = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), T = () => {
            P((0, s.jsx)("img", {
              src: S,
              alt: o.formatMessage(j.profile_selector_mugshot, {
                userName: a.nickname
              })
            }))
          }, [L, P] = (0, r.useState)((0, s.jsx)("img", {
            className: K.avatarImg,
            src: e.mugshotUrl,
            alt: o.formatMessage(j.profile_selector_mugshot, {
              userName: a.nickname
            }),
            onError: T,
            "data-testid": q
          }));
          (0, r.useEffect)((() => {
            d(a.crews ?? [])
          }), [a.crews]), (0, r.useEffect)((() => {
            P((0, s.jsx)("img", {
              src: e.mugshotUrl,
              alt: a.nickname,
              onError: T,
              "data-testid": q
            })), y(E(e.stats.overview.bank.value)), I(E(e.stats.overview.cash.value)), C(parseInt(e.stats.overview.rank.value))
          }), [e, a.nickname]), (0, r.useEffect)((() => {
            i && i.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), f(e.crewColour), _(e.rankOrder), h(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && h(!0))
            }))
          }), [i]), (0, r.useEffect)((() => {
            const e = [];
            if (!p && k > -1)
              for (let a = 5; a > k; a -= 1) e.push((0, s.jsx)("div", {
                className: K.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            v(e)
          }), [k, p, u]);
          const R = e => {
            e.stopPropagation(), c({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, s.jsxs)("div", {
            className: K.profileDetails,
            onClick: R,
            onKeyUp: R,
            role: "button",
            tabIndex: -1,
            children: [(0, s.jsxs)("div", {
              className: K.avatar,
              children: [L, (0, s.jsx)("div", {
                className: K.avatarPlatform,
                "data-platform": w,
                children: (0, s.jsx)(V, {
                  className: K.platformTag,
                  tagSize: F.large,
                  platform: w
                })
              })]
            }), (0, s.jsxs)("div", {
              className: K.profileStats,
              children: [(0, s.jsx)("div", {
                className: K.scNames,
                children: (0, s.jsxs)("div", {
                  className: K.scTagsNames,
                  children: [(0, s.jsx)("span", {
                    className: K.scUserName,
                    "data-testid": Y,
                    children: e.platformUsername
                  }), m && (0, s.jsxs)("span", {
                    className: K.scCrewName,
                    "data-arrow-tag": p,
                    children: [m, !p && (0, s.jsx)("div", {
                      className: K.scCrewRankBar,
                      children: b
                    })]
                  })]
                })
              }), (0, s.jsxs)("div", {
                className: K.scProgress,
                children: [(0, s.jsx)(W, {
                  className: K.scRpLevel,
                  rank: x
                }), (0, s.jsxs)("div", {
                  className: K.scMoney,
                  children: [(0, s.jsxs)("span", {
                    className: K.scCash,
                    "data-testid": ee,
                    children: ["$", M]
                  }), (0, s.jsxs)("span", {
                    className: K.scBank,
                    "data-testid": Q,
                    children: ["$", N]
                  })]
                })]
              })]
            })]
          })
        };
      let te = "rockstargames-sites-rockstargamesb794a0e12537ad5fd506353133b9d60a",
        se = "rockstargames-sites-rockstargamesdd4bcd955436c8a6982ee16756f7fd8b",
        re = "rockstargames-sites-rockstargamesc1e8d8d5b52081b34283a5ac0d377362",
        ce = "rockstargames-sites-rockstargamese8e5249dac92a2bc76788d0fe7d7dfb7",
        oe = "rockstargames-sites-rockstargamesf64d91c845a3931140b8b2c6a47da81f";
      const ne = ({
          dragThreshold: e = 80,
          interactionDelay: a = 1e3,
          mobileGutterWidth: t = 17,
          slideChangeCallback: c = null,
          slideClickCallback: o = null,
          children: n = [],
          disablePager: i = !1,
          disableSwiper: l = !1
        }) => {
          const d = (0, r.createRef)(),
            m = (0, $.ri)(d, !1),
            [g, u] = (0, r.useState)(!1),
            [f, p] = (0, r.useState)(!1),
            [h, k] = (0, r.useState)(0),
            [_, b] = (0, r.useState)(0),
            [v, x] = (0, r.useState)([t]),
            [C, S] = (0, r.useState)(v[0]),
            [w, N] = (0, r.useState)(252),
            [y, M] = (0, r.useState)(0),
            [j, I] = (0, r.useState)([]),
            [E, T] = (0, r.useState)([]),
            [L, P] = (0, r.useState)(!1),
            R = e => {
              if (!0 === g || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            O = a => {
              if (!0 === g || 0 === _ || !0 === l) return;
              p(!0);
              const t = void 0 !== a.changedTouches ? a.changedTouches[0].screenX : a.screenX,
                s = t > _ ? 1 : -1,
                r = Math.abs(_ - t);
              r > e ? (s > 0 ? (() => {
                if (!0 === g) return;
                u(!0);
                const e = h - 1 < 0 ? 0 : h - 1;
                k(e), S(v[e]), c && c(e)
              })() : (() => {
                if (!0 === g) return;
                u(!0);
                let e = h + 1 >= v.length ? v.length - 1 : h + 1;
                e < 0 && (e = 0), k(e), S(v[e]), c && c(e)
              })(), b(0)) : S(v[h] + r * s)
            },
            D = () => {
              !0 !== g && !0 !== l && (u(!0), !0 !== g && (S(v[h]), b(0)), p(!1))
            };
          return (0, r.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, r.createRef)())
            })), I(e)
          }), [n]), (0, r.useEffect)((() => {
            if (j.length < 1) return;
            N(j[0]?.current?.clientWidth || 0);
            const e = j[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            M(t + a)
          }), [j]), (0, r.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              u(!1)
            }), a)
          }), [g, a]), (0, r.useEffect)((() => {
            x(n.map(((e, a) => (e => {
              let a = 0;
              const s = n.length;
              return 1 === s ? .5 * m - .5 * w - 2 * t + y : (0 === e && (a = t - e * w), e === s - 1 && s > 1 && (a = s * w * -1 + (m - (t - y))), e > 0 && e < s - 1 && (a = e * w * -1 + (.5 * m - .5 * w + .5 * y)), a)
            })(a)))), 1 === n.length ? P(!0) : P(!1)
          }), [d.current, n, m]), (0, r.useEffect)((() => {
            const e = (a = h, n.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            T(e)
          }), [n, h]), (0, r.useEffect)((() => {
            !0 !== i && !0 !== l || S(v[0])
          }), [l, i, v]), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("div", {
              className: te,
              ref: d,
              onTouchStart: R,
              onTouchMove: O,
              onTouchEnd: D,
              onMouseDown: R,
              onMouseMove: O,
              onMouseUp: D,
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, s.jsx)("div", {
                className: re,
                "data-interaction-blocked": g,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${C}px)`
                },
                children: n.map(((e, a) => (0, s.jsx)("div", {
                  onClick: () => (e => {
                    null === o || f || o(e)
                  })(a),
                  className: se,
                  ref: j[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), E.length > 1 && !1 === i && (0, s.jsx)("div", {
              className: ce,
              children: E.map(((e, a) => (0, s.jsx)("div", {
                className: oe,
                "data-active": e.active
              }, a)))
            })]
          })
        },
        ie = {
          languageSelector: "rockstargames-sites-rockstargamesb71a5b5521e679bcab20ec6302253996",
          nav: "rockstargames-sites-rockstargamesca9118e28091523e6679a3b95054fe93",
          navHeader: "rockstargames-sites-rockstargamesfa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-sites-rockstargamesce91ee6ebb491174a4ccb4be628aaae7",
          open: "rockstargames-sites-rockstargamesc5ffa3cbaa36329b72b3d928f9739849",
          pillBtn: "rockstargames-sites-rockstargamesb4f0b55680e047d303f82f34594abd96",
          profile: "rockstargames-sites-rockstargamese506a7deb95c0b0c9988325cc857ea9a",
          scCharacterList: "rockstargames-sites-rockstargamesa84bbdd60e615baed0172e6b960c5d32",
          scCharacterSelectBtn: "rockstargames-sites-rockstargamesea15428b850bf436adda6f1dd8ac1af9",
          scCharacterSelector: "rockstargames-sites-rockstargamesc3ea8d575c892277f23ad5b589977862",
          scProfile: "rockstargames-sites-rockstargamesfb20979fe4aa7955196d74baf7d19379",
          selected: "rockstargames-sites-rockstargamesed6126bd2f36579f2b8035e7c6579eb7"
        },
        le = ({
          sc: e,
          charListHidden: a,
          hideCharacterList: t,
          refCharacterListDesktop: c,
          menuPadding: o,
          longCharList: i,
          setLongCharList: d,
          isMobileMode: m,
          setIsMobileMode: g,
          location: u,
          onNavigate: p
        }) => {
          const {
            windowWidth: k,
            windowHeight: _
          } = (0, h.useWindowResize)(), b = (0, n.useIntl)(), {
            languageSelectorOpened: v,
            setLanguageSelectorOpened: x,
            activeSubNavId: C,
            setActiveSubNavId: S,
            subNavExtraHeight: w,
            setSubNavExtraHeight: N,
            navOpened: y,
            setScNavOpened: I
          } = M(), [R, O] = (0, r.useState)(""), {
            webSettings: H
          } = (0, h.useRockstarWebSettings)(), {
            track: A
          } = (0, l.useGtmTrack)(), B = (0, h.useRockstarTokenPing)(), {
            data: U,
            loggedIn: z
          } = (0, l.useRockstarUser)(), {
            charactersNeeded: W,
            currentCharId: F,
            hasNotifications: V,
            navOpen: X,
            setCurrentCharId: G,
            setHasNotifications: Z,
            setSelectedCharacterTuple: K,
            setUserData: Y
          } = (0, l.useRockstarUserState)(), [q, Q] = (0, r.useState)(null), [ee, te] = (0, r.useState)(!1), [se, re] = (0, r.useState)(!1), [ce, oe] = (0, r.useState)(0), le = (0, r.createRef)(), de = (0, $.ri)(le, !1), me = (0, r.createRef)(), [ge, ue] = (0, r.useState)(0), [fe, pe] = (0, r.useState)([]), [he, ke] = (0, r.useState)(244), _e = (0, r.useRef)(null), be = (0, r.useMemo)((() => (0, T.A)()), []), ve = (0, r.useMemo)((() => ((e, a, t, s, r) => [{
            text: e.formatMessage(j.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(j.sc_link_settings),
              location: {
                domain: T.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...L,
                text: j.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(j.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...L,
                text: j.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(j.sc_link_game_activation),
              location: {
                domain: T.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...L,
                text: j.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(j.sc_link_notifications),
            location: {
              domain: T.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...L,
              text: j.sc_link_notifications.defaultMessage,
              location: {
                domain: T.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(j.sc_link_crews),
            location: {
              domain: T.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...L,
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
                domain: T.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...L,
                text: j.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(j.sc_link_import_friends),
              location: {
                domain: T.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...L,
                text: j.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(j.sc_link_find_friends),
              location: {
                domain: T.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...L,
                text: j.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, P(e), {
            text: e.formatMessage(j.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...L,
              text: j.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(b, e, U, V, R, window)), [b, e, U, V, R, be]), xe = () => {
            re(o + he * ce < de)
          }, Ce = () => {
            if (me.current) {
              const {
                current: e
              } = me, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ue(a + e)
              } else ue(a)
            }
          };
          return (0, r.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            be.currentSite?.site === T.C.socialClub && (e = encodeURIComponent("/")), O(e)
          }), [u]), (0, r.useEffect)((() => {
            pe(U?.characters?.[W] ?? [])
          }), [U, W]), (0, r.useEffect)((() => {
            U && Y(U)
          }), [U]), (0, r.useEffect)((() => {
            const e = U?.characters?.gtao ?? [];
            if (null !== z && !e.length) return void K(!1);
            if (null == F || !e.length) return;
            const a = e?.[F] ?? e?.[0] ?? null;
            K(!!a?.platform && [a.platform, a.characterSlot])
          }), [F, U, z]), (0, r.useEffect)((() => {
            (async () => {
              if (!U?.id || !X) return;
              const {
                count: e
              } = await (0, h.coreScApiFetch)("notification/count", {
                pingBearer: B
              });
              Z(e > 0)
            })()
          }), [U, X]), (0, r.useEffect)((() => {
            xe()
          }), [he]), (0, r.useEffect)((() => {
            t(!0), g(k < 768), g(k < 768 || _ < 649)
          }), [k, _]), (0, r.useEffect)((() => {
            let e = fe.length - 1;
            e < 0 && (e = 0), oe(e);
            const a = fe.length > 0 ? fe[F] ?? fe[0] : null;
            a && (Q(a), fe.length > 1 ? te(!0) : te(!1), d(fe.length - 1 > 3))
          }), [F, fe]), (0, r.useEffect)((() => {
            xe()
          }), [ce, m, k, fe]), (0, r.useEffect)((() => {
            Ce(), E()((() => {
              setTimeout(Ce, 0)
            }), 300)
          }), [k, _]), (0, r.useEffect)((() => {
            const e = H?.currentCharId ?? 0;
            e !== F && G(Math.max(0, Math.min(e, fe.length - 1)))
          }), [fe, H]), (0, s.jsxs)(s.Fragment, {
            children: [null !== q && "gtao" === W && (0, s.jsxs)("div", {
              className: ie.scProfile,
              ref: _e,
              tabIndex: -1,
              "aria-label": b.formatMessage(j.profile_selector_profile_card),
              children: [(0, s.jsx)(ae, {
                s: ie,
                character: q
              }), !0 === ee && (0, s.jsxs)("div", {
                className: ie.scCharacterSelector,
                children: [(0, s.jsx)("button", {
                  className: ie.scCharacterSelectBtn,
                  "aria-hidden": !X,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const s = !a;
                    t(s), A({
                      event: s ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, s.jsx)("span", {
                    children: (0, s.jsx)(n.FormattedMessage, {
                      ...j.profile_selector_switch_character
                    })
                  })
                }), !m && (0, s.jsx)("div", {
                  className: ie.scCharacterList,
                  "data-long-list": i,
                  "aria-hidden": a,
                  ref: c,
                  children: fe.map((e => (0, s.jsx)(J, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ke
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), m && (0, s.jsx)("div", {
                  className: ie.scCharacterList,
                  "data-single-item": 2 === fe.length,
                  "data-swiper-disabled": se,
                  "aria-hidden": a,
                  ref: le,
                  children: (0, s.jsx)(ne, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      A({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: se,
                    disableSwiper: se,
                    children: fe.filter(((e, a) => a !== F)).map((e => (0, r.createElement)(J, {
                      characterData: e,
                      setMobileCardWidth: ke,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: a ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, s.jsxs)("nav", {
              className: ie.nav,
              "aria-hidden": !X,
              children: [(0, s.jsx)("button", {
                className: ie.navHeader,
                type: "button",
                "data-opened": y,
                "data-nav-opened": X,
                tabIndex: y ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), y || I(!0)
                },
                "data-testid": "playerButton",
                children: (0, s.jsx)("span", {
                  className: ie.navHeaderText,
                  children: U.nickname
                })
              }), (0, s.jsx)("div", {
                className: ie.navWrap,
                "data-opened": y,
                "data-logged-in": "true",
                ref: me,
                style: {
                  "--navWrap-max-height": `${ge+w}px`
                },
                children: ve.map(((e, a) => (0, r.createElement)(D, {
                  ...e,
                  id: a,
                  activeSubNavId: C,
                  setActiveSubNavId: S,
                  setSubNavExtraHeight: N,
                  onNavigate: p,
                  key: e.text
                })))
              })]
            }), (0, s.jsx)("div", {
              className: ie.scLanguageSelector,
              style: {
                visibility: X ? null : "hidden"
              },
              children: (0, s.jsx)(f, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: v,
                setLanguageSelectorOpened: x,
                location: u,
                onLanguageChange: n.onLanguageChange
              })
            })]
          })
        },
        de = {
          dragHandle: "rockstargames-sites-rockstargamesff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-sites-rockstargamesb49ca12d5334ed642d4359aa44105834",
          menu: "rockstargames-sites-rockstargamesc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          navOpen: "rockstargames-sites-rockstargamesb8b5590986941337aa51e2eb7ff12f78",
          pillBtn: "rockstargames-sites-rockstargamesc31a4663e3c088e8d1095331ba8cafc8",
          scOverlay: "rockstargames-sites-rockstargameseff8c1d4bf675accdb7d952aba0174dc",
          selected: "rockstargames-sites-rockstargamesc5f6868e76307ee73276f140c2f988df"
        },
        me = (0, h.getConfigForDomain)(),
        ge = u((({
          location: e,
          onNavigate: a
        }) => {
          const {
            windowHeight: c
          } = (0, h.useWindowResize)(), o = (0, n.useIntl)(), {
            languageSelectorOpened: i,
            setLanguageSelectorOpened: d,
            setActiveSubNavId: m,
            navOpened: g,
            setAccountNavOpened: u,
            charListHidden: f,
            setCharListHidden: k
          } = M(), [_, b] = (0, r.useState)(!1), {
            navHidden: v = !1
          } = (0, h.useState)(), {
            loggedIn: x
          } = (0, l.useRockstarUser)(), {
            currentCharId: C,
            navOpen: S,
            setNavOpen: w,
            userData: N
          } = (0, l.useRockstarUserState)(), {
            track: y
          } = (0, l.useGtmTrack)(), [I, E] = (0, r.useState)(!1), T = (0, r.useRef)(), [L, P] = (0, r.useState)(0), R = (0, r.createRef)(), [O, D] = (0, r.useState)(!1), [$, A] = (0, r.useState)(0), [B, U] = (0, r.useState)(!1), {
            mutateWebSettings: z,
            webSettings: W
          } = (0, h.useRockstarWebSettings)(), F = (0, r.useCallback)((e => {
            k(e), T.current && !0 === e && (T.current.scrollTop = 0)
          }), [T]);
          return (0, r.useEffect)((() => {
            null !== C && W.currentCharId !== C && z({
              key: "currentCharId",
              value: C
            }), !1 === x ? z({
              key: "currentCharId",
              value: null
            }) : x && N && N?.accountSynced && y({
              event: "account_synced"
            })
          }), [C, x, N?.accountSynced]), (0, r.useEffect)((() => {
            T.current && (!1 === f && !1 === I && (T.current.style.height = `${T.current.scrollHeight}px`), !0 === f && (T.current.style.height = null))
          }), [f, T, I]), (0, r.useEffect)((() => {
            const e = () => {
                w(!1), F(!0)
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
          }), [R]), (0, r.useEffect)((() => {
            w(!1), F(!0)
          }), [v]), (0, r.useEffect)((() => {
            if (R.current) {
              const {
                current: e
              } = R, a = window.getComputedStyle(e);
              P(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [R]), (0, r.useEffect)((() => {
            U(window.navigator.userAgent.includes("Mac"))
          }), []), (0, r.useEffect)((() => {
            R.current && b(R?.current?.scrollHeight >= c)
          }), [R, c]), (0, r.useEffect)((() => {
            S || (m(-1), d(!1))
          }), [S]), (0, r.useEffect)((() => {
            i && (f || F(!0), g && (u(!1), m(-1)))
          }), [i]), (0, r.useEffect)((() => {
            g && (i && d(!1), f || F(!0))
          }), [g]), void 0 === x ? null : (0, s.jsxs)(p.A, {
            enabled: !!S,
            removeScrollBar: !1,
            children: [(0, s.jsxs)("div", {
              className: [de.menu, S ? de.navOpen : ""].join(" "),
              "data-logged-in": x,
              "data-mac-browser": B,
              "data-scroll-mode": _,
              ref: R,
              "aria-hidden": !S,
              children: [(0, s.jsx)("button", {
                className: de.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  A(a)
                },
                onTouchMove: e => {
                  if (0 === $) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs($ - a) > 1 && (A(0), w(!1))
                },
                children: (0, s.jsx)("img", {
                  className: de.dragHandle,
                  src: t(35902),
                  alt: o.formatMessage(j.sc_menu_drag_handle)
                })
              }), x ? (0, s.jsx)(le, {
                sc: me,
                charListHidden: f,
                hideCharacterList: F,
                refCharacterListDesktop: T,
                menuPadding: L,
                longCharList: I,
                setLongCharList: E,
                isMobileMode: O,
                setIsMobileMode: D,
                location: e,
                onNavigate: a
              }) : (0, s.jsx)(H, {
                sc: me,
                navOpen: S,
                location: e,
                onNavigate: a
              })]
            }), (0, s.jsx)("div", {
              className: [de.scOverlay, S ? de.navOpen : ""].join(" "),
              "data-logged-in": x
            })]
          })
        })),
        ue = u((({
          setOtherHeaderDropdowns: e
        }) => {
          const a = (0, n.useIntl)(),
            {
              data: c,
              loggedIn: o
            } = (0, l.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: d,
              navOpen: m,
              setNavOpen: g
            } = (0, l.useRockstarUserState)(),
            {
              track: u
            } = (0, l.useGtmTrack)(),
            [f, p] = (0, r.useState)(),
            [h, k] = (0, r.useState)(!1),
            [_, b] = (0, r.useState)([]);
          (0, r.useEffect)((() => {
            b(c?.characters?.[i] ?? [])
          }), [c, i]);
          const v = (0, r.useCallback)((a => {
            a.stopPropagation(), g(!m), 1 == !m && e(null), u({
              event: "account_menu_click",
              element_placement: "account menu",
              text: m ? "close" : "open"
            })
          }), [m]);
          return (0, r.useEffect)((() => {
            k(!!_?.[d]?.mugshotUrl)
          }), [_, d]), (0, r.useEffect)((() => {
            p((() => {
              switch (o) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return _?.[d]?.mugshotUrl ?? c?.avatar
              }
            })())
          }), [c, _, d, o]), (0, s.jsxs)("button", {
            className: "rockstargames-sites-rockstargamesee811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": a.formatMessage(m ? j.sc_menu_close : j.sc_menu_open),
            "aria-expanded": m,
            type: "button",
            onClick: v,
            "data-mugshot": h,
            "data-testid": "avatarMenuButtonDesktop",
            "data-logged-in": Boolean(o),
            children: [(0, s.jsx)("img", {
              className: "rockstargames-sites-rockstargamesa917b58ca28b68550a1aa5d99c7eb998",
              src: f,
              alt: c?.nickname || "",
              onError: () => {
                let e = null;
                e = t(h ? 5931 : 73091), p(e)
              }
            }), o && h && (0, s.jsx)("div", {
              className: "rockstargames-sites-rockstargamesc06123ceae7ca4759ec8b1a5197823db",
              children: (0, s.jsx)(V, {
                platform: _?.[d]?.platform,
                tagSize: F.small
              })
            }), o && (0, s.jsx)("div", {
              className: "rockstargames-sites-rockstargamesc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": _?.[d]?.platform ?? null
            })]
          })
        }));
      let fe = {
        open: "rockstargames-sites-rockstargamesd815312ad6eebc2c651f8554dc6c0bb7",
        pillBtn: "rockstargames-sites-rockstargamesc5adbe3b8adfa45115608e536f6e0384",
        scCharacterList: "rockstargames-sites-rockstargamesdedb11e25dddfe561c538a370f5028e2",
        scCharacterSelectBtn: "rockstargames-sites-rockstargamesd3991df21bf29ec01662910e116a6ff5",
        scCharacterSelector: "rockstargames-sites-rockstargamesefcb26b13bae0546c71d0b9f88e335a9",
        selected: "rockstargames-sites-rockstargamesc7c3f92d1fdd021a5cd665583ac79d89"
      };
      const pe = {
          pcalt: "PC ENHANCED",
          pc: "PC LEGACY",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        he = () => {
          const e = (0, n.useIntl)(),
            {
              track: a
            } = (0, l.useGtmTrack)(),
            [t, c] = (0, r.useState)(null),
            [o, i] = (0, r.useState)(0),
            [d, m] = (0, r.useState)(!1),
            [g, u] = (0, r.useState)(!1),
            f = (0, r.createRef)(),
            [p, k] = (0, r.useState)([]),
            [_, b] = (0, r.useState)(244),
            {
              windowWidth: v
            } = (0, h.useWindowResize)(),
            [x, C] = (0, r.useState)(!1),
            S = (0, $.ri)(f, !1),
            {
              data: w,
              loggedIn: N
            } = (0, l.useRockstarUser)(),
            {
              charactersNeeded: y,
              currentCharId: I,
              setCurrentCharId: E
            } = (0, l.useRockstarUserState)(),
            {
              charListHidden: T,
              setCharListHidden: L
            } = M();
          (0, r.useEffect)((() => {
            void 0 === I && E(0)
          }), [I]), (0, r.useEffect)((() => {
            let e = p.length - 1;
            e < 0 && (e = 0), i(e);
            const a = p.length > 0 ? p[I] ?? p[0] : null;
            a && (c(a), p.length > 1 ? u(!0) : u(!1))
          }), [I, p]), (0, r.useEffect)((() => {
            k(w?.characters?.[y] ?? [])
          }), [w, y]), (0, r.useEffect)((() => {
            P()
          }), [_, o, x, v, p]), (0, r.useEffect)((() => {
            C(v < 1024)
          }), [v]);
          const P = () => {
              m(_ * o < S)
            },
            R = e => {
              const t = p.filter(((e, a) => a !== I)).map((e => e));
              E(t[e].index), a({
                event: "character_selector_select",
                text: pe[t[e].platform],
                position: t[e].index
              })
            };
          return null !== t && "gtao" === y && N ? (0, s.jsxs)("div", {
            tabIndex: -1,
            "aria-label": e.formatMessage(j.profile_selector_profile_card),
            children: [(0, s.jsx)(ae, {
              s: fe,
              character: t
            }), !0 === g && (0, s.jsxs)("div", {
              className: fe.scCharacterSelector,
              children: [(0, s.jsx)("button", {
                className: fe.scCharacterSelectBtn,
                "data-list-closed": T,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const t = !T;
                  L(t), a({
                    event: t ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                children: (0, s.jsx)("span", {
                  className: fe.scCharacterBtnText,
                  children: (0, s.jsx)(n.FormattedMessage, {
                    ...j.profile_selector_switch_character
                  })
                })
              }), !x && (0, s.jsx)("div", {
                className: fe.scCharacterList,
                "aria-hidden": T,
                children: p.filter(((e, a) => a !== I)).map(((e, a) => (0, s.jsx)(J, {
                  tabIndex: T ? -1 : 0,
                  onClick: () => R(a),
                  characterData: e,
                  setMobileCardWidth: b
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
              }), x && (0, s.jsx)("div", {
                className: fe.scCharacterList,
                "data-single-item": 2 === p.length,
                "data-swiper-disabled": d,
                "aria-hidden": T,
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
                  children: p.filter(((e, a) => a !== I)).map((e => (0, r.createElement)(J, {
                    characterData: e,
                    setMobileCardWidth: b,
                    key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                    tabIndex: T ? -1 : 0
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
        A: () => c,
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
        r = [{
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
        c = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = r.findIndex((a => Object.entries(a.sites).findIndex((([a, s]) => s === t && (e = {
            site: a,
            subDomain: s
          }, !0))) >= 0)), c = r[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...c,
            currentSite: e
          }
        }
    }
  }
]);