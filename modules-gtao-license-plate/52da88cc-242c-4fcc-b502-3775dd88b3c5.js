! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "52da88cc-242c-4fcc-b502-3775dd88b3c5", e._sentryDebugIdIdentifier = "sentry-dbid-52da88cc-242c-4fcc-b502-3775dd88b3c5")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [9785], {
    5931: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    32810: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    35902: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    73091: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f97af80b5511804c9842052dacb20f2a.png"
    },
    76261: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        LanguageSelector: () => f,
        Menu: () => ge,
        MenuButton: () => me,
        ProfileSwitcher: () => pe
      });
      var s = t(62229),
        c = t(51658),
        r = t(23299),
        l = t(81788),
        n = t(14341),
        o = t(2918);
      const i = (0, l.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        d = {
          pillBtn: "rockstargames-modules-gtao-license-platee34929a5bcdda554c66b47a858ddd966",
          selected: "rockstargames-modules-gtao-license-platee1ba906f108faeb297753d39a8d21b8b",
          menuStyles: "rockstargames-modules-gtao-license-plateb641fac428f473cbb4593cd058a01953",
          languageSelector: "rockstargames-modules-gtao-license-platea9dd8a9cb7334e205df4ac3b4392916d",
          open: "rockstargames-modules-gtao-license-plateaa1d94595080f833a35e29fbbe8fd01c",
          linkWrapper: "rockstargames-modules-gtao-license-plateb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-modules-gtao-license-platec64b05a604b1a6be373d35cf01edba2e",
          selectBoxWrapper: "rockstargames-modules-gtao-license-platedb1aead5717ba9dae1e272c3b7e6e801",
          selectBox: "rockstargames-modules-gtao-license-platefe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-modules-gtao-license-plateae32febd9789e79c804b2679d25e8a65",
          dropdownContainer: "rockstargames-modules-gtao-license-plateab0cc073180383d3d5e4bee00eaa311f",
          dropdown: "rockstargames-modules-gtao-license-platecb93b1e1dbe15862e05455dc78f5ec25"
        },
        u = JSON.parse('{"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        g = e => (0, l.withIntl)(e, u);
      var m = t(25854);
      const f = g((e => {
        let {
          theme: a,
          languageSelectorOpened: t,
          setLanguageSelectorOpened: u,
          location: g,
          parent: f = "element",
          onLanguageChange: p,
          ..._
        } = e;
        const {
          track: h
        } = (0, o.useGtmTrack)(), b = (0, l.useIntl)(), [k] = (0, l.getLocale)(), [v, x] = (0, s.useState)(!1), C = (0, s.useRef)(null), [S, M] = (0, s.useState)(0), y = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, N = e => {
          if (u && u(!1), k.subdomaincom === e || "none" === e) return void(u && u(!1));
          const a = l.locales.find((a => a.subdomaincom === e));
          a && p?.({
            selectedLocale: a,
            track: h,
            parent: f
          })
        };
        return (0, s.useEffect)((() => {
          void 0 !== t && !1 === t && !0 === v && x(!1)
        }), [t]), (0, s.useEffect)((() => {
          C.current && M(C.current.scrollHeight)
        }), [C]), "function" != typeof p ? null : (0, m.jsxs)(m.Fragment, {
          children: [y && "sc-menu" === a && (0, m.jsx)("div", {
            className: [d.languageSelector, v ? d.open : ""].join(" "),
            "data-theme": a,
            "data-testid": `${f}-language-selector`,
            ..._,
            children: (0, m.jsx)("div", {
              className: d.selectBoxWrapper,
              children: (0, m.jsxs)("select", {
                className: d.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  N(a)
                },
                "aria-label": b.formatMessage(i.language_selector_default),
                "data-testid": `${f}-language-selector-button`,
                children: [(0, m.jsx)("option", {
                  className: d.selectBoxOption,
                  value: "none",
                  "data-testid": `${f}-language-selector-current`,
                  children: l.locales.find((e => e.subdomaincom === k.subdomaincom))?.label ?? (0, m.jsx)(l.FormattedMessage, {
                    ...i.language_selector_default
                  })
                }), l.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, m.jsx)("option", {
                    className: d.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            })
          }), (!y || "sc-menu" !== a) && "footer" !== a && (0, m.jsxs)("div", {
            className: [d.languageSelector, v ? d.open : ""].join(" "),
            "data-theme": a,
            "data-testid": `${f}-language-selector`,
            ..._,
            children: [(0, m.jsxs)("button", {
              onClick: e => {
                e.stopPropagation(), u && u(!v), x(!v)
              },
              "data-testid": `${f}-language-selector-button`,
              type: "button",
              "aria-label": b.formatMessage(i.language_selector_default),
              children: [(0, m.jsx)("i", {}), (0, m.jsx)("span", {
                "data-testid": `${f}-language-selector-current`,
                children: l.locales.find((e => e.subdomaincom === k.subdomaincom))?.label ?? (0, m.jsx)(l.FormattedMessage, {
                  ...i.language_selector_default
                })
              })]
            }), (0, m.jsx)("div", {
              className: d.linkWrapper,
              ref: C,
              style: {
                "--ls-linkWrapper-opened-height": `${S}px`
              },
              children: (0, m.jsx)("div", {
                className: d.links,
                children: l.locales.map((e => {
                  let {
                    subdomaincom: a,
                    label: t
                  } = e;
                  return (0, m.jsx)(n.A, {
                    onClick: e => {
                      e.preventDefault(), N(a)
                    },
                    tabIndex: v ? 0 : -1,
                    "data-testid": `${f}-language-selector-${a}`,
                    children: t
                  }, t)
                }))
              })
            })]
          }), "footer" === a && (0, m.jsxs)("div", {
            className: d.dropdownContainer,
            "data-testid": `${f}-language-selector`,
            ..._,
            children: [(0, m.jsx)(r.Globe, {
              size: "MD",
              label: ""
            }), (0, m.jsx)(c.ms, {
              className: d.dropdown,
              label: b.formatMessage(i.language_selector_default),
              hideLabel: !0,
              placeholder: l.locales.find((e => e.subdomaincom === k.subdomaincom))?.label ?? b.formatMessage(i.language_selector_default),
              onValueChange: e => {
                N(e)
              },
              renderPortal: !1,
              children: l.locales.map((e => {
                let {
                  subdomaincom: a,
                  label: t
                } = e;
                return (0, m.jsx)(c.c$, {
                  label: t,
                  value: a,
                  testId: `${f}-language-selector-${a}`
                }, t)
              }))
            })]
          })]
        })
      }));
      var p = t(53575),
        _ = t(95966);
      const h = (0, _.makeVar)(!1),
        b = e => h(e),
        k = (0, _.makeVar)(-1),
        v = e => k(e),
        x = (0, _.makeVar)(-1),
        C = e => x(e),
        S = (0, _.makeVar)(!0),
        M = e => S(e),
        y = (0, _.makeVar)(!0),
        N = e => y(e),
        w = () => {
          const e = (0, _.useReactiveVar)(h),
            a = (0, _.useReactiveVar)(k),
            t = (0, _.useReactiveVar)(x),
            c = (0, _.useReactiveVar)(S),
            r = (0, _.useReactiveVar)(y);
          return (0, s.useEffect)((() => {
            r || (e && b(!1), c && (M(!1), v(-1)))
          }), [r]), (0, s.useEffect)((() => {
            !e && r && (c || M(!0))
          }), [e, r]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: b,
            activeSubNavId: a,
            setActiveSubNavId: v,
            subNavExtraHeight: t,
            setSubNavExtraHeight: C,
            navOpened: c,
            setAccountNavOpened: M,
            charListHidden: r,
            setCharListHidden: N
          })), [e, a, t, c, r])
        },
        j = (0, l.defineMessages)({
          sc_link_activity_feed: {
            id: "sc_link_activity_feed",
            defaultMessage: "Activity Feed"
          },
          sc_link_account: {
            id: "sc_link_account",
            defaultMessage: "Account"
          },
          sc_link_view_my_profile: {
            id: "sc_link_view_my_profile",
            defaultMessage: "View My Profile"
          },
          sc_link_messages: {
            id: "sc_link_messages",
            defaultMessage: "Messages"
          },
          sc_link_game_activation: {
            id: "sc_link_game_activation",
            defaultMessage: "Game Activation"
          },
          sc_link_notifications: {
            id: "sc_link_notifications",
            defaultMessage: "Notifications"
          },
          sc_link_crews: {
            id: "sc_link_crews",
            defaultMessage: "Crews"
          },
          sc_link_friends: {
            id: "sc_link_friends",
            defaultMessage: "Friends"
          },
          sc_link_my_friends: {
            id: "sc_link_my_friends",
            defaultMessage: "My Friends"
          },
          sc_link_import_friends: {
            id: "sc_link_import_friends",
            defaultMessage: "Import Friends"
          },
          sc_link_find_friends: {
            id: "sc_link_find_friends",
            defaultMessage: "Find Friends"
          },
          sc_link_settings: {
            id: "sc_link_settings",
            defaultMessage: "Settings"
          },
          sc_link_help: {
            id: "sc_link_help",
            defaultMessage: "Help"
          },
          sc_link_support: {
            id: "sc_link_support",
            defaultMessage: "Support"
          },
          sc_link_legal: {
            id: "sc_link_legal",
            defaultMessage: "Legal"
          },
          sc_link_privacy_policy: {
            id: "sc_link_privacy_policy",
            defaultMessage: "Privacy Policy"
          },
          sc_link_cookies_policy: {
            id: "sc_link_cookies_policy",
            defaultMessage: "Cookies Policy"
          },
          sc_link_cookies_settings: {
            id: "sc_link_cookies_settings",
            defaultMessage: "Cookies Settings"
          },
          sc_link_do_not_sell_my_information: {
            id: "sc_link_do_not_sell_my_information",
            defaultMessage: "Do Not Sell or Share My Personal Information"
          },
          sc_link_log_out: {
            id: "sc_link_log_out",
            defaultMessage: "Log Out"
          },
          sc_link_sign_in: {
            id: "sc_link_sign_in",
            defaultMessage: "Sign In"
          },
          sc_link_join_social_club: {
            id: "sc_link_join_social_club",
            defaultMessage: "Sign Up"
          },
          profile_selector_switch_character: {
            id: "profile_selector_switch_character",
            defaultMessage: "Switch Character"
          },
          profile_selector_profile_card: {
            id: "profile_selector_profile_card",
            defaultMessage: "Profile Card"
          },
          profile_selector_mugshot: {
            id: "profile_selector_mugshot",
            defaultMessage: "{userName} mugshot"
          },
          profile_silhouette_mugshot: {
            id: "profile_silhouette_mugshot",
            defaultMessage: "Silhouette mugshot"
          },
          profile_selector_rp_icon: {
            id: "profile_selector_rp_icon",
            defaultMessage: "RP Category"
          },
          sc_menu_drag_handle: {
            id: "sc_menu_drag_handle",
            defaultMessage: "Drag Menu Handle"
          },
          sc_menu_open: {
            id: "sc_menu_open",
            defaultMessage: "Open player menu"
          },
          sc_menu_close: {
            id: "sc_menu_close",
            defaultMessage: "Close player menu"
          },
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          },
          nofications_new: {
            id: "nofications_new",
            defaultMessage: "New notifications"
          }
        });
      var I = t(1571),
        E = t.n(I),
        L = t(40148);
      const T = {
          event: "account_menu_click",
          element_placement: "Account Menu"
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
        O = e => {
          let {
            to: a,
            target: t,
            className: s,
            onNavigate: c,
            onClick: r,
            reloadDocument: l,
            children: n,
            ...o
          } = e;
          const i = a?.startsWith("http");
          return (0, m.jsx)("a", {
            href: a,
            className: s,
            onClick: e => {
              r?.(e), i || l || (c ? (e.preventDefault(), c(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            target: t,
            ...o,
            children: n
          })
        },
        R = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: c,
            ga: r,
            dataTestId: n,
            isSubLink: i,
            hasNotifications: d = !1,
            onClickCallback: u = () => {},
            tabIndex: g,
            reloadDocument: f = !1,
            onNavigate: p
          } = e;
          const {
            track: _
          } = (0, o.useGtmTrack)(), h = (0, L.A)(), b = (0, l.useIntl)();
          let k = s;
          c && (k = c.domain === h.currentSite?.site ? c.path : `https://${h.sites[c.domain]}.rockstargames.com${c.path}`);
          const v = {
            ...r,
            link_url: k
          };
          return (0, m.jsxs)(O, {
            className: i ? "rockstargames-modules-gtao-license-platec2233d027086d54af877493d7d0700bd" : "rockstargames-modules-gtao-license-platef97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": n || "menuLink",
            title: a,
            to: k,
            target: t,
            rel: "noreferrer",
            reloadDocument: f,
            tabIndex: g,
            onClick: e => {
              _(v), u(e)
            },
            onNavigate: p,
            children: [a, d && (0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateadbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, m.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platee49e290899be3c888ca5a4b6b13736a1",
                children: b.formatMessage(j.nofications_new)
              })
            })]
          })
        },
        H = e => {
          let {
            id: a,
            text: t,
            target: c,
            href: r,
            location: l,
            ga: n,
            hasNotifications: i = !1,
            dataTestId: d,
            children: u = [],
            activeSubNavId: g,
            setActiveSubNavId: f,
            setSubNavExtraHeight: p,
            reloadDocument: h = !1,
            onClickCallback: b = () => {},
            onNavigate: k
          } = e;
          const {
            windowWidth: v,
            windowHeight: x
          } = (0, _.useWindowResize)(), {
            track: C
          } = (0, o.useGtmTrack)(), {
            navOpen: S
          } = (0, o.useRockstarUserState)(), M = (0, s.useRef)(null), [y, N] = (0, s.useState)(0), [w, j] = (0, s.useState)(0), [I, E] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            g !== a && !1 === I && E(!0), g === a && E(!1)
          }), [g]), (0, s.useEffect)((() => {
            if (!M.current) return;
            N(M?.current?.scrollHeight);
            const e = window.getComputedStyle(M.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [M, v, x]), u.length > 0 ? (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsxs)("button", {
              className: "rockstargames-modules-gtao-license-platecc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": d || "menuButton",
              title: t,
              tabIndex: S ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), C(n), g === a ? (f(-1), p(0)) : (f(a), p(y + w + w))
              },
              children: [(0, m.jsx)("span", {
                className: "rockstargames-modules-gtao-license-plateb94730a01d5e9223b69cbc2f20f23bcd",
                children: t
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-gtao-license-plateff271a72fe259d74068b4f4d90db08bd"
              })]
            }, t), (0, m.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platecbf6e64eadb6f965877129d539aa2dcd",
              ref: M,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${y}px`
              },
              children: u.map((e => (0, s.createElement)(R, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !S ? -1 : 0,
                onNavigate: k
              })))
            })]
          }) : (0, m.jsx)(R, {
            text: t,
            target: c,
            href: r,
            location: l,
            ga: n,
            hasNotifications: i,
            dataTestId: d,
            isSubLink: !1,
            onClickCallback: b,
            tabIndex: S ? 0 : -1,
            reloadDocument: h,
            onNavigate: k
          })
        },
        $ = e => {
          let {
            sc: a,
            location: t,
            onNavigate: c
          } = e;
          const {
            windowWidth: r,
            windowHeight: n
          } = (0, _.useWindowResize)(), i = (0, l.useIntl)(), {
            languageSelectorOpened: d,
            setLanguageSelectorOpened: u,
            activeSubNavId: g,
            setActiveSubNavId: p,
            subNavExtraHeight: h,
            setSubNavExtraHeight: b
          } = w(), {
            setSelectedCharacterTuple: k,
            navOpen: v
          } = (0, o.useRockstarUserState)(), x = (0, _.useLocale)(), C = (0, _.toScLocaleString)(x), [S, M] = (0, s.useState)(""), y = `${a.login}?returnUrl=${S}&lang=${C}`, N = `${a.signup}&returnUrl=${S}&lang=${C}`, I = (0, s.useMemo)((() => (0, L.A)()), []), T = (0, s.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(j.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: j.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(j.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: j.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, P(e)])(i, y, N);
            return e
          }), [i, y, N, I]), [O, R] = (0, s.useState)(0), $ = (0, s.createRef)(), D = () => {
            if ($.current) {
              const {
                current: e
              } = $, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), R(a + e)
              } else R(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            M(e)
          }), [JSON.stringify(t)]), (0, s.useEffect)((() => {
            k(!1)
          }), []), (0, s.useEffect)((() => {
            D(), E()((() => {
              setTimeout(D, 0)
            }), 300)
          }), [r, n]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platef300d66bd02f52ac564238ca6125a091",
              children: (0, m.jsx)("div", {
                className: "rockstargames-modules-gtao-license-plateac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: $,
                style: {
                  "--navWrap-max-height": `${h+O}px`
                },
                children: T.map((e => (0, s.createElement)(H, {
                  ...e,
                  activeSubNavId: g,
                  setActiveSubNavId: p,
                  setSubNavExtraHeight: b,
                  onNavigate: c,
                  key: e.text
                })))
              })
            }), (0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platef30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: v ? null : "hidden"
              },
              children: (0, m.jsx)(f, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: d,
                setLanguageSelectorOpened: e => {
                  p(-1), u(e)
                },
                location: t,
                onLanguageChange: l.onLanguageChange
              })
            })]
          })
        };
      var D = t(98397),
        U = t(38763);
      var B = t(89704),
        A = t.n(B);
      const z = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        W = (0, s.forwardRef)((function(e, a) {
          let {
            rank: t,
            className: s,
            alt: c,
            testId: r,
            ...l
          } = e;
          const n = z(t),
            o = (0, U.v6)(l, {
              className: A()("rockstargames-modules-gtao-license-platef54750ef62f8600000c94f0caba85986", s),
              "data-testid": r
            });
          return (0, m.jsxs)("div", {
            "data-size": "small",
            ref: a,
            ...o,
            children: [(0, m.jsx)("svg", {
              role: "svg",
              "aria-label": c,
              className: "rockstargames-modules-gtao-license-platea3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": z(t),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, m.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: n
              })
            }), (0, m.jsx)("span", {
              "data-testid": "rpCategory:rankValue",
              children: t
            })]
          })
        }));
      let F = null,
        G = null,
        V = "";
      F = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg", G = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", V = "PC Legacy";
      let X = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        Z = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const Y = e => {
        let {
          tagSize: a,
          platform: t
        } = e;
        const {
          src: s,
          alt: c
        } = ((e, a) => {
          const t = a === X.small;
          switch (e) {
            case Z.pc:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case Z.pcAlt:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case Z.ps4:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case Z.ps5:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case Z.xboxOne:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case Z.xboxSeries:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
              };
            case Z.ps:
            case Z.np:
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
              };
            case Z.xbox:
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        })(t, a);
        return (0, m.jsx)("img", {
          className: "rockstargames-modules-gtao-license-plateb0ff0045ed0326a46ca1e0867d2050c1",
          "data-testid": "platform-tag",
          "data-platform": t,
          "data-tag-size": a,
          src: s,
          alt: c
        })
      };
      let J = "";
      J = "PC LEGACY";
      const K = {
          pcalt: "PC ENHANCED",
          pc: "PC LEGACY",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        q = "CharacterButton:characterName",
        Q = "CharacterButton:avatar",
        ee = e => {
          let {
            characterData: a,
            setMobileCardWidth: c,
            tabIndex: r
          } = e;
          const n = (0, l.useIntl)(),
            {
              currentCharId: i,
              setCurrentCharId: d
            } = (0, o.useRockstarUserState)(),
            {
              track: u
            } = (0, o.useGtmTrack)(),
            g = (0, s.createRef)(),
            {
              platform: f,
              platformUsername: p,
              mugshotUrl: _,
              stats: h
            } = a,
            [b, k] = (0, s.useState)(_),
            [v] = (0, s.useState)(a.index),
            x = i === a.index;
          return (0, s.useEffect)((() => {
            g.current && c && c(g?.current?.offsetWidth)
          }), [g]), (0, m.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-plateb26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": x,
            onClick: e => {
              e.stopPropagation(), d(v), u({
                event: "character_selector_select",
                text: K[f] ?? f,
                position: v
              })
            },
            ref: g,
            tabIndex: r,
            children: [(0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plated79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, m.jsx)("img", {
                src: b,
                alt: n.formatMessage(j.profile_selector_mugshot, {
                  userName: p
                }),
                onError: () => {
                  k(t(5931))
                },
                "data-testid": Q
              })
            }), (0, m.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plateed30f2b92b3fc2937e7278409208872f",
              children: [(0, m.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platea6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, m.jsx)(Y, {
                  tagSize: X.large,
                  platform: f
                }), (0, m.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-platec3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": q,
                  children: p
                })]
              }), (0, m.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platef5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, m.jsx)(W, {
                  rank: parseInt(h.overview.rank.value)
                })
              })]
            })]
          })
        },
        ae = {
          pillBtn: "rockstargames-modules-gtao-license-platec094ee9992658964204dbc3c55063187",
          selected: "rockstargames-modules-gtao-license-platef68f5558f3bacb6ab2f0f6e52b7c4d3d",
          profileDetails: "rockstargames-modules-gtao-license-platec7a6cdc85906179aeadfbea13a491277",
          avatar: "rockstargames-modules-gtao-license-platee1ed133f04d4201de6c787667fe46939",
          avatarPlatform: "rockstargames-modules-gtao-license-plateb061d8f050dd255669342700ddbe9f94",
          profileStats: "rockstargames-modules-gtao-license-platea4a23edaf47f301893d88f6e233907b3",
          scNames: "rockstargames-modules-gtao-license-platec6a703613ae9abf4927cf1f023878d9c",
          scTagsNames: "rockstargames-modules-gtao-license-plateac56f06be77872b6f7ba074189a2ec36",
          scUserName: "rockstargames-modules-gtao-license-platea829077ec05e5b83560be13ff3604c8e",
          scCrewName: "rockstargames-modules-gtao-license-platec3c644cc20da4e904a7f4e5e3850bf7b",
          scCrewRankBar: "rockstargames-modules-gtao-license-platecacefbe6235792c328eabdb72c7e812c",
          scCrewRankBarItem: "rockstargames-modules-gtao-license-platef9fc60f5d92cda504e6a40d09ec34429",
          scProgress: "rockstargames-modules-gtao-license-plateb1230619acc50d561a73b55a185e782e",
          scRpLevel: "rockstargames-modules-gtao-license-platee3dcece76ffe0dcd864d13ada6a4c532",
          scRpIcon: "rockstargames-modules-gtao-license-platefd047e239c2b7adafe8729ad8e7ae646",
          scMoney: "rockstargames-modules-gtao-license-plateffc96f13a79073f795d296415f874263",
          scCash: "rockstargames-modules-gtao-license-platef21a08a90936d208b236a20d5893ab50",
          scBank: "rockstargames-modules-gtao-license-plateee0f3a44274a32b7c03d50d1f8e23578"
        },
        te = "ProfileCard:characterName",
        se = "ProfileCard:avatar",
        ce = "ProfileCard:bankValue",
        re = "ProfileCard:cashValue",
        le = e => {
          let {
            character: a
          } = e;
          const {
            data: c
          } = (0, o.useRockstarUser)(), {
            track: r
          } = (0, o.useGtmTrack)(), n = (0, l.useIntl)(), [i, d] = (0, s.useState)([]), [u, g] = (0, s.useState)(null), [f, p] = (0, s.useState)(null), [_, h] = (0, s.useState)(!1), [b, k] = (0, s.useState)(-1), [v, x] = (0, s.useState)([]), [C, S] = (0, s.useState)(0), M = t(5931), {
            platform: y
          } = a, [N, w] = (0, s.useState)("0"), [I, E] = (0, s.useState)("0"), L = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), T = () => {
            O((0, m.jsx)("img", {
              src: M,
              alt: n.formatMessage(j.profile_selector_mugshot, {
                userName: c.nickname
              })
            }))
          }, [P, O] = (0, s.useState)((0, m.jsx)("img", {
            className: ae.avatarImg,
            src: a.mugshotUrl,
            alt: n.formatMessage(j.profile_selector_mugshot, {
              userName: c.nickname
            }),
            onError: T,
            "data-testid": se
          }));
          (0, s.useEffect)((() => {
            d(c.crews ?? [])
          }), [c.crews]), (0, s.useEffect)((() => {
            O((0, m.jsx)("img", {
              src: a.mugshotUrl,
              alt: c.nickname,
              onError: T,
              "data-testid": se
            })), w(L(a.stats.overview.bank.value)), E(L(a.stats.overview.cash.value)), S(parseInt(a.stats.overview.rank.value))
          }), [a, c.nickname]), (0, s.useEffect)((() => {
            i && i.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), p(e.crewColour), k(e.rankOrder), h(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && h(!0))
            }))
          }), [i]), (0, s.useEffect)((() => {
            const e = [];
            if (!_ && b > -1)
              for (let a = 5; a > b; a -= 1) e.push((0, m.jsx)("div", {
                className: ae.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${a}`));
            x(e)
          }), [b, _, f]);
          const R = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, m.jsxs)("div", {
            className: ae.profileDetails,
            onClick: R,
            onKeyUp: R,
            role: "button",
            tabIndex: -1,
            children: [(0, m.jsxs)("div", {
              className: ae.avatar,
              children: [P, (0, m.jsx)("div", {
                className: ae.avatarPlatform,
                "data-platform": y,
                children: (0, m.jsx)(Y, {
                  tagSize: X.large,
                  platform: y
                })
              })]
            }), (0, m.jsxs)("div", {
              className: ae.profileStats,
              children: [(0, m.jsx)("div", {
                className: ae.scNames,
                children: (0, m.jsxs)("div", {
                  className: ae.scTagsNames,
                  children: [(0, m.jsx)("span", {
                    className: ae.scUserName,
                    "data-testid": te,
                    children: a.platformUsername
                  }), u && (0, m.jsxs)("span", {
                    className: ae.scCrewName,
                    "data-arrow-tag": _,
                    children: [u, !_ && (0, m.jsx)("div", {
                      className: ae.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, m.jsxs)("div", {
                className: ae.scProgress,
                children: [(0, m.jsx)(W, {
                  rank: C
                }), (0, m.jsxs)("div", {
                  className: ae.scMoney,
                  children: [(0, m.jsxs)("span", {
                    className: ae.scCash,
                    "data-testid": re,
                    children: ["$", I]
                  }), (0, m.jsxs)("span", {
                    className: ae.scBank,
                    "data-testid": ce,
                    children: ["$", N]
                  })]
                })]
              })]
            })]
          })
        },
        ne = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: c = 17,
            slideChangeCallback: r = null,
            slideClickCallback: l = null,
            children: n = [],
            disablePager: o = !1,
            disableSwiper: i = !1
          } = e;
          const d = (0, s.createRef)(),
            u = (0, D.ri)(d, !1),
            [g, f] = (0, s.useState)(!1),
            [p, _] = (0, s.useState)(0),
            [h, b] = (0, s.useState)(0),
            [k, v] = (0, s.useState)([c]),
            [x, C] = (0, s.useState)(k[0]),
            [S, M] = (0, s.useState)(252),
            [y, N] = (0, s.useState)(0),
            [w, j] = (0, s.useState)([]),
            [I, E] = (0, s.useState)([]),
            [L, T] = (0, s.useState)(!1),
            P = e => {
              if (!0 === g || !0 === i) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            O = e => {
              if (!0 === g || 0 === h || !0 === i) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > h ? 1 : -1,
                c = Math.abs(h - t);
              c > a ? (s > 0 ? (() => {
                if (!0 === g) return;
                f(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                _(e), C(k[e]), r && r(e)
              })() : (() => {
                if (!0 === g) return;
                f(!0);
                let e = p + 1 >= k.length ? k.length - 1 : p + 1;
                e < 0 && (e = 0), _(e), C(k[e]), r && r(e)
              })(), b(0)) : C(k[p] + c * s)
            },
            R = () => {
              !0 !== g && !0 !== i && (f(!0), !0 !== g && (C(k[p]), b(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, s.createRef)())
            })), j(e)
          }), [n]), (0, s.useEffect)((() => {
            if (w.length < 1) return;
            M(w[0]?.current?.clientWidth || 0);
            const e = w[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            N(t + a)
          }), [w]), (0, s.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              f(!1)
            }), t)
          }), [g, t]), (0, s.useEffect)((() => {
            v(n.map(((e, a) => (e => {
              let a = 0;
              const t = n.length;
              return 1 === t ? .5 * u - .5 * S - 2 * c + y : (0 === e && (a = c - e * S), e === t - 1 && t > 1 && (a = t * S * -1 + (u - (c - y))), e > 0 && e < t - 1 && (a = e * S * -1 + (.5 * u - .5 * S + .5 * y)), a)
            })(a)))), 1 === n.length ? T(!0) : T(!1)
          }), [d.current, n, u]), (0, s.useEffect)((() => {
            const e = (a = p, n.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            E(e)
          }), [n, p]), (0, s.useEffect)((() => {
            !0 !== o && !0 !== i || C(k[0])
          }), [i, o, k]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateb794a0e12537ad5fd506353133b9d60a",
              ref: d,
              onTouchStart: P,
              onTouchMove: O,
              onTouchEnd: R,
              onMouseDown: P,
              onMouseMove: O,
              onMouseUp: R,
              onClick: () => {
                null !== l && l(p)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, m.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platec1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": g,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${x}px)`
                },
                children: n.map(((e, a) => (0, m.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-platedd4bcd955436c8a6982ee16756f7fd8b",
                  ref: w[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), I.length > 1 && !1 === o && (0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platee8e5249dac92a2bc76788d0fe7d7dfb7",
              children: I.map(((e, a) => (0, m.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platef64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, a)))
            })]
          })
        },
        oe = {
          pillBtn: "rockstargames-modules-gtao-license-plateb4f0b55680e047d303f82f34594abd96",
          selected: "rockstargames-modules-gtao-license-plateed6126bd2f36579f2b8035e7c6579eb7",
          profile: "rockstargames-modules-gtao-license-platee506a7deb95c0b0c9988325cc857ea9a",
          scProfile: "rockstargames-modules-gtao-license-platefb20979fe4aa7955196d74baf7d19379",
          scCharacterSelector: "rockstargames-modules-gtao-license-platec3ea8d575c892277f23ad5b589977862",
          scCharacterSelectBtn: "rockstargames-modules-gtao-license-plateea15428b850bf436adda6f1dd8ac1af9",
          open: "rockstargames-modules-gtao-license-platec5ffa3cbaa36329b72b3d928f9739849",
          scCharacterList: "rockstargames-modules-gtao-license-platea84bbdd60e615baed0172e6b960c5d32",
          nav: "rockstargames-modules-gtao-license-plateca9118e28091523e6679a3b95054fe93",
          languageSelector: "rockstargames-modules-gtao-license-plateb71a5b5521e679bcab20ec6302253996",
          navHeader: "rockstargames-modules-gtao-license-platefa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-modules-gtao-license-platece91ee6ebb491174a4ccb4be628aaae7"
        },
        ie = e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: c,
            refCharacterListDesktop: r,
            menuPadding: n,
            longCharList: i,
            setLongCharList: d,
            isMobileMode: u,
            setIsMobileMode: g,
            location: p,
            onNavigate: h
          } = e;
          const {
            windowWidth: b,
            windowHeight: k
          } = (0, _.useWindowResize)(), v = (0, l.useIntl)(), {
            languageSelectorOpened: x,
            setLanguageSelectorOpened: C,
            activeSubNavId: S,
            setActiveSubNavId: M,
            subNavExtraHeight: y,
            setSubNavExtraHeight: N,
            navOpened: I,
            setScNavOpened: O
          } = w(), [R, $] = (0, s.useState)(""), {
            webSettings: U
          } = (0, _.useRockstarWebSettings)(), {
            track: B
          } = (0, o.useGtmTrack)(), A = (0, _.useRockstarTokenPing)(), {
            data: z,
            loggedIn: W
          } = (0, o.useRockstarUser)(), {
            charactersNeeded: F,
            currentCharId: G,
            hasNotifications: V,
            navOpen: X,
            setCurrentCharId: Z,
            setHasNotifications: Y,
            setSelectedCharacterTuple: J,
            setUserData: K
          } = (0, o.useRockstarUserState)(), [q, Q] = (0, s.useState)(null), [ae, te] = (0, s.useState)(!1), [se, ce] = (0, s.useState)(!1), [re, ie] = (0, s.useState)(0), de = (0, s.createRef)(), ue = (0, D.ri)(de, !1), ge = (0, s.createRef)(), [me, fe] = (0, s.useState)(0), [pe, _e] = (0, s.useState)([]), [he, be] = (0, s.useState)(244), ke = (0, s.useRef)(null), ve = (0, s.useMemo)((() => (0, L.A)()), []), xe = (0, s.useMemo)((() => ((e, a, t, s, c) => [{
            text: e.formatMessage(j.sc_link_activity_feed),
            location: {
              domain: L.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...T,
              text: j.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
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
              text: e.formatMessage(j.sc_link_messages),
              location: {
                domain: L.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...T,
                text: j.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
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
          }])(v, a, z, V, R, window)), [v, a, z, V, R, ve]), Ce = () => {
            ce(n + he * re < ue)
          }, Se = () => {
            if (ge.current) {
              const {
                current: e
              } = ge, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), fe(a + e)
              } else fe(a)
            }
          };
          return (0, s.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ve.currentSite?.site === L.C.socialClub && (e = encodeURIComponent("/")), $(e)
          }), [p]), (0, s.useEffect)((() => {
            _e(z?.characters?.[F] ?? [])
          }), [z, F]), (0, s.useEffect)((() => {
            z && K(z)
          }), [z]), (0, s.useEffect)((() => {
            const e = z?.characters?.gtao ?? [];
            if (null !== W && !e.length) return void J(!1);
            if (null == G || !e.length) return;
            const a = e?.[G] ?? e?.[0] ?? null;
            J(!!a?.platform && [a.platform, a.characterSlot])
          }), [G, z, W]), (0, s.useEffect)((() => {
            (async () => {
              if (!z?.id || !X) return;
              const {
                count: e
              } = await (0, _.coreScApiFetch)("notification/count", {
                pingBearer: A
              });
              Y(e > 0)
            })()
          }), [z, X]), (0, s.useEffect)((() => {
            Ce()
          }), [he]), (0, s.useEffect)((() => {
            c(!0), g(b < 768), g(b < 768 || k < 649)
          }), [b, k]), (0, s.useEffect)((() => {
            let e = pe.length - 1;
            e < 0 && (e = 0), ie(e);
            const a = pe.length > 0 ? pe[G] ?? pe[0] : null;
            a && (Q(a), pe.length > 1 ? te(!0) : te(!1), d(pe.length - 1 > 3))
          }), [G, pe]), (0, s.useEffect)((() => {
            Ce()
          }), [re, u, b, pe]), (0, s.useEffect)((() => {
            Se(), E()((() => {
              setTimeout(Se, 0)
            }), 300)
          }), [b, k]), (0, s.useEffect)((() => {
            const e = U?.currentCharId ?? 0;
            e !== G && Z(Math.max(0, Math.min(e, pe.length - 1)))
          }), [pe, U]), (0, m.jsxs)(m.Fragment, {
            children: [null !== q && "gtao" === F && (0, m.jsxs)("div", {
              className: oe.scProfile,
              ref: ke,
              tabIndex: -1,
              "aria-label": v.formatMessage(j.profile_selector_profile_card),
              children: [(0, m.jsx)(le, {
                s: oe,
                character: q
              }), !0 === ae && (0, m.jsxs)("div", {
                className: oe.scCharacterSelector,
                children: [(0, m.jsx)("button", {
                  className: oe.scCharacterSelectBtn,
                  "aria-hidden": !X,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    c(a), B({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, m.jsx)("span", {
                    children: (0, m.jsx)(l.FormattedMessage, {
                      ...j.profile_selector_switch_character
                    })
                  })
                }), !u && (0, m.jsx)("div", {
                  className: oe.scCharacterList,
                  "data-long-list": i,
                  "aria-hidden": t,
                  ref: r,
                  children: pe.map((e => (0, m.jsx)(ee, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: be
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), u && (0, m.jsx)("div", {
                  className: oe.scCharacterList,
                  "data-single-item": 2 === pe.length,
                  "data-swiper-disabled": se,
                  "aria-hidden": t,
                  ref: de,
                  children: (0, m.jsx)(ne, {
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
                    children: pe.filter(((e, a) => a !== G)).map((e => (0, s.createElement)(ee, {
                      characterData: e,
                      setMobileCardWidth: be,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, m.jsxs)("nav", {
              className: oe.nav,
              "aria-hidden": !X,
              children: [(0, m.jsx)("button", {
                className: oe.navHeader,
                type: "button",
                "data-opened": I,
                "data-nav-opened": X,
                tabIndex: I ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), I || O(!0)
                },
                "data-testid": "playerButton",
                children: (0, m.jsx)("span", {
                  children: z.nickname
                })
              }), (0, m.jsx)("div", {
                className: oe.navWrap,
                "data-opened": I,
                "data-logged-in": "true",
                ref: ge,
                style: {
                  "--navWrap-max-height": `${me+y}px`
                },
                children: xe.map(((e, a) => (0, s.createElement)(H, {
                  ...e,
                  id: a,
                  activeSubNavId: S,
                  setActiveSubNavId: M,
                  setSubNavExtraHeight: N,
                  onNavigate: h,
                  key: e.text
                })))
              })]
            }), (0, m.jsx)("div", {
              className: oe.scLanguageSelector,
              style: {
                visibility: X ? null : "hidden"
              },
              children: (0, m.jsx)(f, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: x,
                setLanguageSelectorOpened: C,
                location: p,
                onLanguageChange: l.onLanguageChange
              })
            })]
          })
        },
        de = {
          menu: "rockstargames-modules-gtao-license-platec0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-modules-gtao-license-platec31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-modules-gtao-license-platec5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-modules-gtao-license-plateb8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-modules-gtao-license-plateff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-gtao-license-plateb49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-modules-gtao-license-plateeff8c1d4bf675accdb7d952aba0174dc"
        },
        ue = (0, _.getConfigForDomain)(),
        ge = g((e => {
          let {
            location: a,
            onNavigate: c
          } = e;
          const {
            windowHeight: r
          } = (0, _.useWindowResize)(), n = (0, l.useIntl)(), {
            languageSelectorOpened: i,
            setLanguageSelectorOpened: d,
            setActiveSubNavId: u,
            navOpened: g,
            setAccountNavOpened: f,
            charListHidden: h,
            setCharListHidden: b
          } = w(), [k, v] = (0, s.useState)(!1), {
            navHidden: x = !1
          } = (0, _.useState)(), {
            loggedIn: C
          } = (0, o.useRockstarUser)(), {
            currentCharId: S,
            navOpen: M,
            setNavOpen: y,
            userData: N
          } = (0, o.useRockstarUserState)(), {
            track: I
          } = (0, o.useGtmTrack)(), [E, L] = (0, s.useState)(!1), T = (0, s.useRef)(), [P, O] = (0, s.useState)(0), R = (0, s.createRef)(), [H, D] = (0, s.useState)(!1), [U, B] = (0, s.useState)(0), [A, z] = (0, s.useState)(!1), {
            mutateWebSettings: W,
            webSettings: F
          } = (0, _.useRockstarWebSettings)(), G = (0, s.useCallback)((e => {
            b(e), T.current && !0 === e && (T.current.scrollTop = 0)
          }), [T]);
          return (0, s.useEffect)((() => {
            null !== S && F.currentCharId !== S && W({
              key: "currentCharId",
              value: S
            }), !1 === C ? W({
              key: "currentCharId",
              value: null
            }) : C && N && N.accountSynced && I({
              event: "account_synced"
            })
          }), [S, C, N?.accountSynced]), (0, s.useEffect)((() => {
            T.current && (!1 === h && !1 === E && (T.current.style.height = `${T.current.scrollHeight}px`), !0 === h && (T.current.style.height = null))
          }), [h, T, E]), (0, s.useEffect)((() => {
            const e = () => {
                y(!1), G(!0)
              },
              a = a => {
                const t = R?.current && a?.composedPath().includes(R.current);
                M && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }), [R]), (0, s.useEffect)((() => {
            y(!1), G(!0)
          }), [x]), (0, s.useEffect)((() => {
            if (R.current) {
              const {
                current: e
              } = R, a = window.getComputedStyle(e);
              O(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [R]), (0, s.useEffect)((() => {
            z(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            R.current && v(R?.current?.scrollHeight >= r)
          }), [R, r]), (0, s.useEffect)((() => {
            M || (u(-1), d(!1))
          }), [M]), (0, s.useEffect)((() => {
            i && (h || G(!0), g && (f(!1), u(-1)))
          }), [i]), (0, s.useEffect)((() => {
            g && (i && d(!1), h || G(!0))
          }), [g]), void 0 === C ? null : (0, m.jsxs)(p.A, {
            enabled: !!M,
            removeScrollBar: !1,
            children: [(0, m.jsxs)("div", {
              className: [de.menu, M ? de.navOpen : ""].join(" "),
              "data-logged-in": C,
              "data-mac-browser": A,
              "data-scroll-mode": k,
              ref: R,
              "aria-hidden": !M,
              children: [(0, m.jsx)("button", {
                className: de.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  B(a)
                },
                onTouchMove: e => {
                  if (0 === U) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(U - a) > 1 && (B(0), y(!1))
                },
                children: (0, m.jsx)("img", {
                  className: de.dragHandle,
                  src: t(35902),
                  alt: n.formatMessage(j.sc_menu_drag_handle)
                })
              }), C ? (0, m.jsx)(ie, {
                sc: ue,
                charListHidden: h,
                hideCharacterList: G,
                refCharacterListDesktop: T,
                menuPadding: P,
                longCharList: E,
                setLongCharList: L,
                isMobileMode: H,
                setIsMobileMode: D,
                location: a,
                onNavigate: c
              }) : (0, m.jsx)($, {
                sc: ue,
                navOpen: M,
                location: a,
                onNavigate: c
              })]
            }), (0, m.jsx)("div", {
              className: [de.scOverlay, M ? de.navOpen : ""].join(" "),
              "data-logged-in": C
            })]
          })
        })),
        me = g((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const c = (0, l.useIntl)(),
            {
              data: r,
              loggedIn: n
            } = (0, o.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: d,
              navOpen: u,
              setNavOpen: g
            } = (0, o.useRockstarUserState)(),
            {
              track: f
            } = (0, o.useGtmTrack)(),
            [p, _] = (0, s.useState)(),
            [h, b] = (0, s.useState)(!1),
            [k, v] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            v(r?.characters?.[i] ?? [])
          }), [r, i]);
          const x = (0, s.useCallback)((e => {
            e.stopPropagation(), g(!u), 1 == !u && a(null), f({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: u ? "close" : "open"
            })
          }), [u]);
          return (0, s.useEffect)((() => {
            b(!!k?.[d]?.mugshotUrl)
          }), [k, d]), (0, s.useEffect)((() => {
            _((() => {
              switch (n) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return k?.[d]?.mugshotUrl ?? r?.avatar
              }
            })())
          }), [r, k, d, n]), (0, m.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-plateee811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": c.formatMessage(u ? j.sc_menu_close : j.sc_menu_open),
            "aria-expanded": u,
            type: "button",
            onClick: x,
            "data-mugshot": h,
            "data-testid": "avatarMenuButton",
            "data-logged-in": Boolean(n),
            children: [(0, m.jsx)("img", {
              className: "rockstargames-modules-gtao-license-platea917b58ca28b68550a1aa5d99c7eb998",
              src: p,
              alt: r?.nickname || "",
              onError: () => {
                let e = null;
                e = t(h ? 5931 : 73091), _(e)
              }
            }), n && h && (0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platec06123ceae7ca4759ec8b1a5197823db",
              children: (0, m.jsx)(Y, {
                platform: k?.[d]?.platform,
                tagSize: X.small
              })
            }), n && (0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platec4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": k?.[d]?.platform ?? null
            })]
          })
        })),
        fe = {
          pillBtn: "rockstargames-modules-gtao-license-plated56685560c26cb74e41c0e7efbff2324",
          selected: "rockstargames-modules-gtao-license-plateaf2c4e1e0c4a0665c4844045ac59a1a5",
          profile: "rockstargames-modules-gtao-license-platecc0f17f755cfd87ea1140528dcff6218",
          scCharacterSelector: "rockstargames-modules-gtao-license-platead02e9d1ab679ad0544665c4a1463f79",
          scCharacterSelectBtn: "rockstargames-modules-gtao-license-plateccc058e17b53baa907a8d380400a1b81",
          open: "rockstargames-modules-gtao-license-platee4d379e3b26def224a6777e254d96718",
          scCharacterList: "rockstargames-modules-gtao-license-platea3cb8b5052cdb657b91ccbd293f3ac0f",
          nav: "rockstargames-modules-gtao-license-platef4119915eed1b4ec0bd34cd98e2cffef",
          scLanguageSelector: "rockstargames-modules-gtao-license-plateec69e723cd1f4082f4bc3f5656f21b7c",
          navHeader: "rockstargames-modules-gtao-license-plated8efae6b36b65fb512bfff18bc891678",
          navWrap: "rockstargames-modules-gtao-license-platea9396b9942eedcf0e129b7f6fd3f69ec"
        },
        pe = e => {
          let {
            charListHidden: a,
            hideCharacterList: t,
            refCharacterListDesktop: c,
            menuPadding: r,
            longCharList: n,
            setLongCharList: i,
            isMobileMode: d
          } = e;
          const u = (0, l.useIntl)(),
            {
              windowWidth: g
            } = (0, _.useWindowResize)(),
            {
              track: f
            } = (0, o.useGtmTrack)(),
            {
              charactersNeeded: p,
              currentCharId: h,
              navOpen: b,
              setCurrentCharId: k,
              setSelectedCharacterTuple: v,
              setUserData: x,
              setCharacterAvatar: C,
              setCharacterPlatform: S
            } = (0, o.useRockstarUserState)(),
            [M, y] = (0, s.useState)(null),
            [N, w] = (0, s.useState)([]),
            [I, E] = (0, s.useState)(!1),
            [L, T] = (0, s.useState)(0),
            [P, O] = (0, s.useState)(244),
            [R, H] = (0, s.useState)(!1),
            $ = (0, s.useRef)(null),
            U = (0, s.createRef)(),
            B = (0, D.ri)(U, !1),
            {
              webSettings: A
            } = (0, _.useRockstarWebSettings)(),
            {
              data: z,
              loggedIn: W
            } = (0, o.useRockstarUser)({
              fetchCharacters: !0
            }),
            F = () => {
              H(r + P * L < B)
            };
          return (0, s.useEffect)((() => {
            F()
          }), [P]), (0, s.useEffect)((() => {
            F()
          }), [L, d, g, N]), (0, s.useEffect)((() => {
            w(z.characters?.[p] ?? [])
          }), [z, p]), (0, s.useEffect)((() => {
            z && x(z)
          }), [z]), (0, s.useEffect)((() => {
            const e = z?.characters?.gtao;
            if (null !== W && !e?.length) return void v(!1);
            if (null == h || !e?.length) return;
            const a = e?.[h] ?? e?.[0] ?? null;
            v(!!a?.platform && [a.platform, a.characterSlot])
          }), [h, z, W]), (0, s.useEffect)((() => {
            let e = N.length - 1;
            e < 0 && (e = 0), T(e);
            const a = N.length > 0 ? N[h] ?? N[0] : null;
            if (a) return y(a), C(a.mugshotUrl), S(a.platform), N.length > 1 ? E(!0) : E(!1), i(N.length - 1 > 3), () => {
              C(""), S("")
            }
          }), [h, N]), (0, s.useEffect)((() => {
            const e = A?.currentCharId ?? 0;
            e !== h && k(Math.max(0, Math.min(e, N.length - 1)))
          }), [N, A]), M && "gtao" === p ? (0, m.jsxs)("div", {
            className: fe.profile,
            ref: $,
            tabIndex: -1,
            "aria-label": u.formatMessage(j.profile_selector_profile_card),
            children: [(0, m.jsx)(le, {
              s: fe,
              character: M
            }), !0 === I && (0, m.jsxs)("div", {
              className: fe.scCharacterSelector,
              children: [(0, m.jsx)("button", {
                className: fe.scCharacterSelectBtn,
                "aria-hidden": !b,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const s = !a;
                  t(s), f({
                    event: s ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                "data-list-closed": a,
                children: (0, m.jsx)("span", {
                  children: (0, m.jsx)(l.FormattedMessage, {
                    ...j.profile_selector_switch_character
                  })
                })
              }), !1 === d && (0, m.jsx)("div", {
                className: fe.scCharacterList,
                "data-long-list": n,
                "aria-hidden": a,
                ref: c,
                children: N.map((e => (0, m.jsx)(ee, {
                  tabIndex: a ? -1 : 0,
                  characterData: e,
                  setMobileCardWidth: O
                }, e.mugshotUrl)))
              }), !0 === d && (0, m.jsx)("div", {
                className: fe.scCharacterList,
                "data-single-item": 2 === N.length,
                "data-swiper-disabled": R,
                "aria-hidden": a,
                ref: U,
                children: (0, m.jsx)(ne, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    f({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  disablePager: R,
                  disableSwiper: R,
                  children: N.filter(((e, a) => a !== h)).map((e => (0, s.createElement)(ee, {
                    characterData: e,
                    setMobileCardWidth: O,
                    key: e.mugshotUrl,
                    tabIndex: a ? -1 : 0
                  })))
                })
              })]
            })]
          }) : null
        }
    },
    89704: (e, a) => {
      var t;
      ! function() {
        "use strict";
        var s = {}.hasOwnProperty;

        function c() {
          for (var e = "", a = 0; a < arguments.length; a++) {
            var t = arguments[a];
            t && (e = l(e, r(t)))
          }
          return e
        }

        function r(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return c.apply(null, e);
          if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
          var a = "";
          for (var t in e) s.call(e, t) && e[t] && (a = l(a, t));
          return a
        }

        function l(e, a) {
          return a ? e ? e + " " + a : e + a : e
        }
        e.exports ? (c.default = c, e.exports = c) : void 0 === (t = function() {
          return c
        }.apply(a, [])) || (e.exports = t)
      }()
    }
  }
]);