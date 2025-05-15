! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8e2e733c-02fe-44c3-98f1-77ba992fbbb3", e._sentryDebugIdIdentifier = "sentry-dbid-8e2e733c-02fe-44c3-98f1-77ba992fbbb3")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [3310], {
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
        LanguageSelector: () => g,
        Menu: () => ue,
        MenuButton: () => me,
        ProfileSwitcher: () => _e
      });
      var s = t(71127),
        r = t(82522),
        o = t(23299),
        c = t(81788),
        n = t(61814),
        l = t(2918);
      const i = (0, c.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        d = {
          pillBtn: "rockstargames-modules-core-footere34929a5bcdda554c66b47a858ddd966",
          selected: "rockstargames-modules-core-footere1ba906f108faeb297753d39a8d21b8b",
          menuStyles: "rockstargames-modules-core-footerb641fac428f473cbb4593cd058a01953",
          languageSelector: "rockstargames-modules-core-footera9dd8a9cb7334e205df4ac3b4392916d",
          open: "rockstargames-modules-core-footeraa1d94595080f833a35e29fbbe8fd01c",
          linkWrapper: "rockstargames-modules-core-footerb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-modules-core-footerc64b05a604b1a6be373d35cf01edba2e",
          selectBoxWrapper: "rockstargames-modules-core-footerdb1aead5717ba9dae1e272c3b7e6e801",
          selectBox: "rockstargames-modules-core-footerfe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-modules-core-footerae32febd9789e79c804b2679d25e8a65",
          dropdownContainer: "rockstargames-modules-core-footerab0cc073180383d3d5e4bee00eaa311f",
          dropdown: "rockstargames-modules-core-footercb93b1e1dbe15862e05455dc78f5ec25"
        },
        f = JSON.parse('{"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        u = e => (0, c.withIntl)(e, f);
      var m = t(25854);
      const g = u((e => {
        let {
          theme: a,
          languageSelectorOpened: t,
          setLanguageSelectorOpened: f,
          location: u,
          parent: g = "element",
          onLanguageChange: _,
          ...p
        } = e;
        const {
          track: h
        } = (0, l.useGtmTrack)(), b = (0, c.useIntl)(), [k] = (0, c.getLocale)(), [v, x] = (0, s.useState)(!1), C = (0, s.useRef)(null), [S, M] = (0, s.useState)(0), y = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, N = e => {
          if (f && f(!1), k.subdomaincom === e || "none" === e) return void(f && f(!1));
          const a = c.locales.find((a => a.subdomaincom === e));
          a && _?.({
            selectedLocale: a,
            track: h,
            parent: g
          })
        };
        return (0, s.useEffect)((() => {
          void 0 !== t && !1 === t && !0 === v && x(!1)
        }), [t]), (0, s.useEffect)((() => {
          C.current && M(C.current.scrollHeight)
        }), [C]), "function" != typeof _ ? null : (0, m.jsxs)(m.Fragment, {
          children: [y && "sc-menu" === a && (0, m.jsx)("div", {
            className: [d.languageSelector, v ? d.open : ""].join(" "),
            "data-theme": a,
            "data-testid": `${g}-language-selector`,
            ...p,
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
                "data-testid": `${g}-language-selector-button`,
                children: [(0, m.jsx)("option", {
                  className: d.selectBoxOption,
                  value: "none",
                  "data-testid": `${g}-language-selector-current`,
                  children: c.locales.find((e => e.subdomaincom === k.subdomaincom))?.label ?? (0, m.jsx)(c.FormattedMessage, {
                    ...i.language_selector_default
                  })
                }), c.locales.map((e => {
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
            "data-testid": `${g}-language-selector`,
            ...p,
            children: [(0, m.jsxs)("button", {
              onClick: e => {
                e.stopPropagation(), f && f(!v), x(!v)
              },
              "data-testid": `${g}-language-selector-button`,
              type: "button",
              "aria-label": b.formatMessage(i.language_selector_default),
              children: [(0, m.jsx)("i", {}), (0, m.jsx)("span", {
                "data-testid": `${g}-language-selector-current`,
                children: c.locales.find((e => e.subdomaincom === k.subdomaincom))?.label ?? (0, m.jsx)(c.FormattedMessage, {
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
                children: c.locales.map((e => {
                  let {
                    subdomaincom: a,
                    label: t
                  } = e;
                  return (0, m.jsx)(n.A, {
                    onClick: e => {
                      e.preventDefault(), N(a)
                    },
                    tabIndex: v ? 0 : -1,
                    "data-testid": `${g}-language-selector-${a}`,
                    children: t
                  }, t)
                }))
              })
            })]
          }), "footer" === a && (0, m.jsxs)("div", {
            className: d.dropdownContainer,
            "data-testid": `${g}-language-selector`,
            ...p,
            children: [(0, m.jsx)(o.Globe, {
              size: "MD",
              label: ""
            }), (0, m.jsx)(r.Dropdown, {
              className: d.dropdown,
              label: b.formatMessage(i.language_selector_default),
              hideLabel: !0,
              placeholder: c.locales.find((e => e.subdomaincom === k.subdomaincom))?.label ?? b.formatMessage(i.language_selector_default),
              onValueChange: e => {
                N(e)
              },
              renderPortal: !1,
              children: c.locales.map((e => {
                let {
                  subdomaincom: a,
                  label: t
                } = e;
                return (0, m.jsx)(r.Option, {
                  label: t,
                  value: a,
                  testId: `${g}-language-selector-${a}`
                }, t)
              }))
            })]
          })]
        })
      }));
      var _ = t(53575),
        p = t(95966);
      const h = (0, p.makeVar)(!1),
        b = e => h(e),
        k = (0, p.makeVar)(-1),
        v = e => k(e),
        x = (0, p.makeVar)(-1),
        C = e => x(e),
        S = (0, p.makeVar)(!0),
        M = e => S(e),
        y = (0, p.makeVar)(!0),
        N = e => y(e),
        w = () => {
          const e = (0, p.useReactiveVar)(h),
            a = (0, p.useReactiveVar)(k),
            t = (0, p.useReactiveVar)(x),
            r = (0, p.useReactiveVar)(S),
            o = (0, p.useReactiveVar)(y);
          return (0, s.useEffect)((() => {
            o || (e && b(!1), r && (M(!1), v(-1)))
          }), [o]), (0, s.useEffect)((() => {
            !e && o && (r || M(!0))
          }), [e, o]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: b,
            activeSubNavId: a,
            setActiveSubNavId: v,
            subNavExtraHeight: t,
            setSubNavExtraHeight: C,
            navOpened: r,
            setAccountNavOpened: M,
            charListHidden: o,
            setCharListHidden: N
          })), [e, a, t, r, o])
        },
        j = (0, c.defineMessages)({
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
            onNavigate: r,
            onClick: o,
            reloadDocument: c,
            children: n,
            ...l
          } = e;
          const i = a?.startsWith("http");
          return (0, m.jsx)("a", {
            href: a,
            className: s,
            onClick: e => {
              o?.(e), i || c || (r ? (e.preventDefault(), r(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            target: t,
            ...l,
            children: n
          })
        },
        R = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: r,
            ga: o,
            dataTestId: n,
            isSubLink: i,
            hasNotifications: d = !1,
            onClickCallback: f = () => {},
            tabIndex: u,
            reloadDocument: g = !1,
            onNavigate: _
          } = e;
          const {
            track: p
          } = (0, l.useGtmTrack)(), h = (0, L.A)(), b = (0, c.useIntl)();
          let k = s;
          r && (k = r.domain === h.currentSite?.site ? r.path : `https://${h.sites[r.domain]}.rockstargames.com${r.path}`);
          const v = {
            ...o,
            link_url: k
          };
          return (0, m.jsxs)(O, {
            className: i ? "rockstargames-modules-core-footerc2233d027086d54af877493d7d0700bd" : "rockstargames-modules-core-footerf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": n || "menuLink",
            title: a,
            to: k,
            target: t,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: u,
            onClick: e => {
              p(v), f(e)
            },
            onNavigate: _,
            children: [a, d && (0, m.jsx)("div", {
              className: "rockstargames-modules-core-footeradbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, m.jsx)("span", {
                className: "rockstargames-modules-core-footere49e290899be3c888ca5a4b6b13736a1",
                children: b.formatMessage(j.nofications_new)
              })
            })]
          })
        },
        H = e => {
          let {
            id: a,
            text: t,
            target: r,
            href: o,
            location: c,
            ga: n,
            hasNotifications: i = !1,
            dataTestId: d,
            children: f = [],
            activeSubNavId: u,
            setActiveSubNavId: g,
            setSubNavExtraHeight: _,
            reloadDocument: h = !1,
            onClickCallback: b = () => {},
            onNavigate: k
          } = e;
          const {
            windowWidth: v,
            windowHeight: x
          } = (0, p.useWindowResize)(), {
            track: C
          } = (0, l.useGtmTrack)(), {
            navOpen: S
          } = (0, l.useRockstarUserState)(), M = (0, s.useRef)(null), [y, N] = (0, s.useState)(0), [w, j] = (0, s.useState)(0), [I, E] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            u !== a && !1 === I && E(!0), u === a && E(!1)
          }), [u]), (0, s.useEffect)((() => {
            if (!M.current) return;
            N(M?.current?.scrollHeight);
            const e = window.getComputedStyle(M.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [M, v, x]), f.length > 0 ? (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsxs)("button", {
              className: "rockstargames-modules-core-footercc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": d || "menuButton",
              title: t,
              tabIndex: S ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), C(n), u === a ? (g(-1), _(0)) : (g(a), _(y + w + w))
              },
              children: [(0, m.jsx)("span", {
                className: "rockstargames-modules-core-footerb94730a01d5e9223b69cbc2f20f23bcd",
                children: t
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-core-footerff271a72fe259d74068b4f4d90db08bd"
              })]
            }, t), (0, m.jsx)("nav", {
              className: "rockstargames-modules-core-footercbf6e64eadb6f965877129d539aa2dcd",
              ref: M,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${y}px`
              },
              children: f.map((e => (0, s.createElement)(R, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !S ? -1 : 0,
                onNavigate: k
              })))
            })]
          }) : (0, m.jsx)(R, {
            text: t,
            target: r,
            href: o,
            location: c,
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
        D = e => {
          let {
            sc: a,
            location: t,
            onNavigate: r
          } = e;
          const {
            windowWidth: o,
            windowHeight: n
          } = (0, p.useWindowResize)(), i = (0, c.useIntl)(), {
            languageSelectorOpened: d,
            setLanguageSelectorOpened: f,
            activeSubNavId: u,
            setActiveSubNavId: _,
            subNavExtraHeight: h,
            setSubNavExtraHeight: b
          } = w(), {
            setSelectedCharacterTuple: k,
            navOpen: v
          } = (0, l.useRockstarUserState)(), x = (0, p.useLocale)(), C = (0, p.toScLocaleString)(x), [S, M] = (0, s.useState)(""), y = `${a.login}?returnUrl=${S}&lang=${C}`, N = `${a.signup}&returnUrl=${S}&lang=${C}`, I = (0, s.useMemo)((() => (0, L.A)()), []), T = (0, s.useMemo)((() => {
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
          }), [i, y, N, I]), [O, R] = (0, s.useState)(0), D = (0, s.createRef)(), $ = () => {
            if (D.current) {
              const {
                current: e
              } = D, a = e?.scrollHeight, t = window.getComputedStyle(e);
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
            $(), E()((() => {
              setTimeout($, 0)
            }), 300)
          }), [o, n]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("nav", {
              className: "rockstargames-modules-core-footerf300d66bd02f52ac564238ca6125a091",
              children: (0, m.jsx)("div", {
                className: "rockstargames-modules-core-footerac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: D,
                style: {
                  "--navWrap-max-height": `${h+O}px`
                },
                children: T.map((e => (0, s.createElement)(H, {
                  ...e,
                  activeSubNavId: u,
                  setActiveSubNavId: _,
                  setSubNavExtraHeight: b,
                  onNavigate: r,
                  key: e.text
                })))
              })
            }), (0, m.jsx)("div", {
              className: "rockstargames-modules-core-footerf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: v ? null : "hidden"
              },
              children: (0, m.jsx)(g, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: d,
                setLanguageSelectorOpened: e => {
                  _(-1), f(e)
                },
                location: t,
                onLanguageChange: c.onLanguageChange
              })
            })]
          })
        };
      var $ = t(98397),
        U = t(38763);
      var B = t(89704),
        A = t.n(B);
      const z = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        W = (0, s.forwardRef)((function(e, a) {
          let {
            rank: t,
            className: s,
            alt: r,
            testId: o,
            ...c
          } = e;
          const n = z(t),
            l = (0, U.v6)(c, {
              className: A()("rockstargames-modules-core-footerf54750ef62f8600000c94f0caba85986", s),
              "data-testid": o
            });
          return (0, m.jsxs)("div", {
            "data-size": "small",
            ref: a,
            ...l,
            children: [(0, m.jsx)("svg", {
              role: "svg",
              "aria-label": r,
              className: "rockstargames-modules-core-footera3beb1e9c88e2938879ea4df25b63eb1",
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
          alt: r
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
          className: "rockstargames-modules-core-footerb0ff0045ed0326a46ca1e0867d2050c1",
          "data-testid": "platform-tag",
          "data-platform": t,
          "data-tag-size": a,
          src: s,
          alt: r
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
            setMobileCardWidth: r,
            tabIndex: o
          } = e;
          const n = (0, c.useIntl)(),
            {
              currentCharId: i,
              setCurrentCharId: d
            } = (0, l.useRockstarUserState)(),
            {
              track: f
            } = (0, l.useGtmTrack)(),
            u = (0, s.createRef)(),
            {
              platform: g,
              platformUsername: _,
              mugshotUrl: p,
              stats: h
            } = a,
            [b, k] = (0, s.useState)(p),
            [v] = (0, s.useState)(a.index),
            x = i === a.index;
          return (0, s.useEffect)((() => {
            u.current && r && r(u?.current?.offsetWidth)
          }), [u]), (0, m.jsxs)("button", {
            className: "rockstargames-modules-core-footerb26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": x,
            onClick: e => {
              e.stopPropagation(), d(v), f({
                event: "character_selector_select",
                text: K[g] ?? g,
                position: v
              })
            },
            ref: u,
            tabIndex: o,
            children: [(0, m.jsx)("div", {
              className: "rockstargames-modules-core-footerd79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, m.jsx)("img", {
                src: b,
                alt: n.formatMessage(j.profile_selector_mugshot, {
                  userName: _
                }),
                onError: () => {
                  k(t(5931))
                },
                "data-testid": Q
              })
            }), (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-footered30f2b92b3fc2937e7278409208872f",
              children: [(0, m.jsxs)("div", {
                className: "rockstargames-modules-core-footera6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, m.jsx)(Y, {
                  tagSize: X.large,
                  platform: g
                }), (0, m.jsx)("div", {
                  className: "rockstargames-modules-core-footerc3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": q,
                  children: _
                })]
              }), (0, m.jsx)("div", {
                className: "rockstargames-modules-core-footerf5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, m.jsx)(W, {
                  rank: parseInt(h.overview.rank.value)
                })
              })]
            })]
          })
        },
        ae = {
          pillBtn: "rockstargames-modules-core-footerc094ee9992658964204dbc3c55063187",
          selected: "rockstargames-modules-core-footerf68f5558f3bacb6ab2f0f6e52b7c4d3d",
          profileDetails: "rockstargames-modules-core-footerc7a6cdc85906179aeadfbea13a491277",
          avatar: "rockstargames-modules-core-footere1ed133f04d4201de6c787667fe46939",
          avatarPlatform: "rockstargames-modules-core-footerb061d8f050dd255669342700ddbe9f94",
          profileStats: "rockstargames-modules-core-footera4a23edaf47f301893d88f6e233907b3",
          scNames: "rockstargames-modules-core-footerc6a703613ae9abf4927cf1f023878d9c",
          scTagsNames: "rockstargames-modules-core-footerac56f06be77872b6f7ba074189a2ec36",
          scUserName: "rockstargames-modules-core-footera829077ec05e5b83560be13ff3604c8e",
          scCrewName: "rockstargames-modules-core-footerc3c644cc20da4e904a7f4e5e3850bf7b",
          scCrewRankBar: "rockstargames-modules-core-footercacefbe6235792c328eabdb72c7e812c",
          scCrewRankBarItem: "rockstargames-modules-core-footerf9fc60f5d92cda504e6a40d09ec34429",
          scProgress: "rockstargames-modules-core-footerb1230619acc50d561a73b55a185e782e",
          scRpLevel: "rockstargames-modules-core-footere3dcece76ffe0dcd864d13ada6a4c532",
          scRpIcon: "rockstargames-modules-core-footerfd047e239c2b7adafe8729ad8e7ae646",
          scMoney: "rockstargames-modules-core-footerffc96f13a79073f795d296415f874263",
          scCash: "rockstargames-modules-core-footerf21a08a90936d208b236a20d5893ab50",
          scBank: "rockstargames-modules-core-footeree0f3a44274a32b7c03d50d1f8e23578"
        },
        te = "ProfileCard:characterName",
        se = "ProfileCard:avatar",
        re = "ProfileCard:bankValue",
        oe = "ProfileCard:cashValue",
        ce = e => {
          let {
            character: a
          } = e;
          const {
            data: r
          } = (0, l.useRockstarUser)(), {
            track: o
          } = (0, l.useGtmTrack)(), n = (0, c.useIntl)(), [i, d] = (0, s.useState)([]), [f, u] = (0, s.useState)(null), [g, _] = (0, s.useState)(null), [p, h] = (0, s.useState)(!1), [b, k] = (0, s.useState)(-1), [v, x] = (0, s.useState)([]), [C, S] = (0, s.useState)(0), M = t(5931), {
            platform: y
          } = a, [N, w] = (0, s.useState)("0"), [I, E] = (0, s.useState)("0"), L = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), T = () => {
            O((0, m.jsx)("img", {
              src: M,
              alt: n.formatMessage(j.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [P, O] = (0, s.useState)((0, m.jsx)("img", {
            className: ae.avatarImg,
            src: a.mugshotUrl,
            alt: n.formatMessage(j.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: T,
            "data-testid": se
          }));
          (0, s.useEffect)((() => {
            d(r.crews ?? [])
          }), [r.crews]), (0, s.useEffect)((() => {
            O((0, m.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: T,
              "data-testid": se
            })), w(L(a.stats.overview.bank.value)), E(L(a.stats.overview.cash.value)), S(parseInt(a.stats.overview.rank.value))
          }), [a, r.nickname]), (0, s.useEffect)((() => {
            i && i.forEach((e => {
              !0 === e.isPrimary && (u(e.crewTag), _(e.crewColour), k(e.rankOrder), h(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && h(!0))
            }))
          }), [i]), (0, s.useEffect)((() => {
            const e = [];
            if (!p && b > -1)
              for (let a = 5; a > b; a -= 1) e.push((0, m.jsx)("div", {
                className: ae.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== g ? g : ""
                }
              }, `crewrankbar-${a}`));
            x(e)
          }), [b, p, g]);
          const R = e => {
            e.stopPropagation(), o({
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
                  }), f && (0, m.jsxs)("span", {
                    className: ae.scCrewName,
                    "data-arrow-tag": p,
                    children: [f, !p && (0, m.jsx)("div", {
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
                    "data-testid": oe,
                    children: ["$", I]
                  }), (0, m.jsxs)("span", {
                    className: ae.scBank,
                    "data-testid": re,
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
            mobileGutterWidth: r = 17,
            slideChangeCallback: o = null,
            slideClickCallback: c = null,
            children: n = [],
            disablePager: l = !1,
            disableSwiper: i = !1
          } = e;
          const d = (0, s.createRef)(),
            f = (0, $.ri)(d, !1),
            [u, g] = (0, s.useState)(!1),
            [_, p] = (0, s.useState)(0),
            [h, b] = (0, s.useState)(0),
            [k, v] = (0, s.useState)([r]),
            [x, C] = (0, s.useState)(k[0]),
            [S, M] = (0, s.useState)(252),
            [y, N] = (0, s.useState)(0),
            [w, j] = (0, s.useState)([]),
            [I, E] = (0, s.useState)([]),
            [L, T] = (0, s.useState)(!1),
            P = e => {
              if (!0 === u || !0 === i) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            O = e => {
              if (!0 === u || 0 === h || !0 === i) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > h ? 1 : -1,
                r = Math.abs(h - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === u) return;
                g(!0);
                const e = _ - 1 < 0 ? 0 : _ - 1;
                p(e), C(k[e]), o && o(e)
              })() : (() => {
                if (!0 === u) return;
                g(!0);
                let e = _ + 1 >= k.length ? k.length - 1 : _ + 1;
                e < 0 && (e = 0), p(e), C(k[e]), o && o(e)
              })(), b(0)) : C(k[_] + r * s)
            },
            R = () => {
              !0 !== u && !0 !== i && (g(!0), !0 !== u && (C(k[_]), b(0)))
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
            !1 !== u && setTimeout((() => {
              g(!1)
            }), t)
          }), [u, t]), (0, s.useEffect)((() => {
            v(n.map(((e, a) => (e => {
              let a = 0;
              const t = n.length;
              return 1 === t ? .5 * f - .5 * S - 2 * r + y : (0 === e && (a = r - e * S), e === t - 1 && t > 1 && (a = t * S * -1 + (f - (r - y))), e > 0 && e < t - 1 && (a = e * S * -1 + (.5 * f - .5 * S + .5 * y)), a)
            })(a)))), 1 === n.length ? T(!0) : T(!1)
          }), [d.current, n, f]), (0, s.useEffect)((() => {
            const e = (a = _, n.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            E(e)
          }), [n, _]), (0, s.useEffect)((() => {
            !0 !== l && !0 !== i || C(k[0])
          }), [i, l, k]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("div", {
              className: "rockstargames-modules-core-footerb794a0e12537ad5fd506353133b9d60a",
              ref: d,
              onTouchStart: P,
              onTouchMove: O,
              onTouchEnd: R,
              onMouseDown: P,
              onMouseMove: O,
              onMouseUp: R,
              onClick: () => {
                null !== c && c(_)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, m.jsx)("div", {
                className: "rockstargames-modules-core-footerc1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": u,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${x}px)`
                },
                children: n.map(((e, a) => (0, m.jsx)("div", {
                  className: "rockstargames-modules-core-footerdd4bcd955436c8a6982ee16756f7fd8b",
                  ref: w[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), I.length > 1 && !1 === l && (0, m.jsx)("div", {
              className: "rockstargames-modules-core-footere8e5249dac92a2bc76788d0fe7d7dfb7",
              children: I.map(((e, a) => (0, m.jsx)("div", {
                className: "rockstargames-modules-core-footerf64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, a)))
            })]
          })
        },
        le = {
          pillBtn: "rockstargames-modules-core-footerb4f0b55680e047d303f82f34594abd96",
          selected: "rockstargames-modules-core-footered6126bd2f36579f2b8035e7c6579eb7",
          profile: "rockstargames-modules-core-footere506a7deb95c0b0c9988325cc857ea9a",
          scProfile: "rockstargames-modules-core-footerfb20979fe4aa7955196d74baf7d19379",
          scCharacterSelector: "rockstargames-modules-core-footerc3ea8d575c892277f23ad5b589977862",
          scCharacterSelectBtn: "rockstargames-modules-core-footerea15428b850bf436adda6f1dd8ac1af9",
          open: "rockstargames-modules-core-footerc5ffa3cbaa36329b72b3d928f9739849",
          scCharacterList: "rockstargames-modules-core-footera84bbdd60e615baed0172e6b960c5d32",
          nav: "rockstargames-modules-core-footerca9118e28091523e6679a3b95054fe93",
          languageSelector: "rockstargames-modules-core-footerb71a5b5521e679bcab20ec6302253996",
          navHeader: "rockstargames-modules-core-footerfa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-modules-core-footerce91ee6ebb491174a4ccb4be628aaae7"
        },
        ie = e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: r,
            refCharacterListDesktop: o,
            menuPadding: n,
            longCharList: i,
            setLongCharList: d,
            isMobileMode: f,
            setIsMobileMode: u,
            location: _,
            onNavigate: h
          } = e;
          const {
            windowWidth: b,
            windowHeight: k
          } = (0, p.useWindowResize)(), v = (0, c.useIntl)(), {
            languageSelectorOpened: x,
            setLanguageSelectorOpened: C,
            activeSubNavId: S,
            setActiveSubNavId: M,
            subNavExtraHeight: y,
            setSubNavExtraHeight: N,
            navOpened: I,
            setScNavOpened: O
          } = w(), [R, D] = (0, s.useState)(""), {
            webSettings: U
          } = (0, p.useRockstarWebSettings)(), {
            track: B
          } = (0, l.useGtmTrack)(), A = (0, p.useRockstarTokenPing)(), {
            data: z,
            loggedIn: W
          } = (0, l.useRockstarUser)(), {
            charactersNeeded: F,
            currentCharId: G,
            hasNotifications: V,
            navOpen: X,
            setCurrentCharId: Z,
            setHasNotifications: Y,
            setSelectedCharacterTuple: J,
            setUserData: K
          } = (0, l.useRockstarUserState)(), [q, Q] = (0, s.useState)(null), [ae, te] = (0, s.useState)(!1), [se, re] = (0, s.useState)(!1), [oe, ie] = (0, s.useState)(0), de = (0, s.createRef)(), fe = (0, $.ri)(de, !1), ue = (0, s.createRef)(), [me, ge] = (0, s.useState)(0), [_e, pe] = (0, s.useState)([]), [he, be] = (0, s.useState)(244), ke = (0, s.useRef)(null), ve = (0, s.useMemo)((() => (0, L.A)()), []), xe = (0, s.useMemo)((() => ((e, a, t, s, r) => [{
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
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...T,
              text: j.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(v, a, z, V, R, window)), [v, a, z, V, R, ve]), Ce = () => {
            re(n + he * oe < fe)
          }, Se = () => {
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
          return (0, s.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ve.currentSite?.site === L.C.socialClub && (e = encodeURIComponent("/")), D(e)
          }), [_]), (0, s.useEffect)((() => {
            pe(z?.characters?.[F] ?? [])
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
              } = await (0, p.coreScApiFetch)("notification/count", {
                pingBearer: A
              });
              Y(e > 0)
            })()
          }), [z, X]), (0, s.useEffect)((() => {
            Ce()
          }), [he]), (0, s.useEffect)((() => {
            r(!0), u(b < 768), u(b < 768 || k < 649)
          }), [b, k]), (0, s.useEffect)((() => {
            let e = _e.length - 1;
            e < 0 && (e = 0), ie(e);
            const a = _e.length > 0 ? _e[G] ?? _e[0] : null;
            a && (Q(a), _e.length > 1 ? te(!0) : te(!1), d(_e.length - 1 > 3))
          }), [G, _e]), (0, s.useEffect)((() => {
            Ce()
          }), [oe, f, b, _e]), (0, s.useEffect)((() => {
            Se(), E()((() => {
              setTimeout(Se, 0)
            }), 300)
          }), [b, k]), (0, s.useEffect)((() => {
            const e = U?.currentCharId ?? 0;
            e !== G && Z(Math.max(0, Math.min(e, _e.length - 1)))
          }), [_e, U]), (0, m.jsxs)(m.Fragment, {
            children: [null !== q && "gtao" === F && (0, m.jsxs)("div", {
              className: le.scProfile,
              ref: ke,
              tabIndex: -1,
              "aria-label": v.formatMessage(j.profile_selector_profile_card),
              children: [(0, m.jsx)(ce, {
                s: le,
                character: q
              }), !0 === ae && (0, m.jsxs)("div", {
                className: le.scCharacterSelector,
                children: [(0, m.jsx)("button", {
                  className: le.scCharacterSelectBtn,
                  "aria-hidden": !X,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    r(a), B({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, m.jsx)("span", {
                    children: (0, m.jsx)(c.FormattedMessage, {
                      ...j.profile_selector_switch_character
                    })
                  })
                }), !f && (0, m.jsx)("div", {
                  className: le.scCharacterList,
                  "data-long-list": i,
                  "aria-hidden": t,
                  ref: o,
                  children: _e.map((e => (0, m.jsx)(ee, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: be
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), f && (0, m.jsx)("div", {
                  className: le.scCharacterList,
                  "data-single-item": 2 === _e.length,
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
                    children: _e.filter(((e, a) => a !== G)).map((e => (0, s.createElement)(ee, {
                      characterData: e,
                      setMobileCardWidth: be,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, m.jsxs)("nav", {
              className: le.nav,
              "aria-hidden": !X,
              children: [(0, m.jsx)("button", {
                className: le.navHeader,
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
                className: le.navWrap,
                "data-opened": I,
                "data-logged-in": "true",
                ref: ue,
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
              className: le.scLanguageSelector,
              style: {
                visibility: X ? null : "hidden"
              },
              children: (0, m.jsx)(g, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: x,
                setLanguageSelectorOpened: C,
                location: _,
                onLanguageChange: c.onLanguageChange
              })
            })]
          })
        },
        de = {
          menu: "rockstargames-modules-core-footerc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-modules-core-footerc31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-modules-core-footerc5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-modules-core-footerb8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-modules-core-footerff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-core-footerb49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-modules-core-footereff8c1d4bf675accdb7d952aba0174dc"
        },
        fe = (0, p.getConfigForDomain)(),
        ue = u((e => {
          let {
            location: a,
            onNavigate: r
          } = e;
          const {
            windowHeight: o
          } = (0, p.useWindowResize)(), n = (0, c.useIntl)(), {
            languageSelectorOpened: i,
            setLanguageSelectorOpened: d,
            setActiveSubNavId: f,
            navOpened: u,
            setAccountNavOpened: g,
            charListHidden: h,
            setCharListHidden: b
          } = w(), [k, v] = (0, s.useState)(!1), {
            navHidden: x = !1
          } = (0, p.useState)(), {
            loggedIn: C
          } = (0, l.useRockstarUser)(), {
            currentCharId: S,
            navOpen: M,
            setNavOpen: y,
            userData: N
          } = (0, l.useRockstarUserState)(), {
            track: I
          } = (0, l.useGtmTrack)(), [E, L] = (0, s.useState)(!1), T = (0, s.useRef)(), [P, O] = (0, s.useState)(0), R = (0, s.createRef)(), [H, $] = (0, s.useState)(!1), [U, B] = (0, s.useState)(0), [A, z] = (0, s.useState)(!1), {
            mutateWebSettings: W,
            webSettings: F
          } = (0, p.useRockstarWebSettings)(), G = (0, s.useCallback)((e => {
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
            R.current && v(R?.current?.scrollHeight >= o)
          }), [R, o]), (0, s.useEffect)((() => {
            M || (f(-1), d(!1))
          }), [M]), (0, s.useEffect)((() => {
            i && (h || G(!0), u && (g(!1), f(-1)))
          }), [i]), (0, s.useEffect)((() => {
            u && (i && d(!1), h || G(!0))
          }), [u]), void 0 === C ? null : (0, m.jsxs)(_.A, {
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
                sc: fe,
                charListHidden: h,
                hideCharacterList: G,
                refCharacterListDesktop: T,
                menuPadding: P,
                longCharList: E,
                setLongCharList: L,
                isMobileMode: H,
                setIsMobileMode: $,
                location: a,
                onNavigate: r
              }) : (0, m.jsx)(D, {
                sc: fe,
                navOpen: M,
                location: a,
                onNavigate: r
              })]
            }), (0, m.jsx)("div", {
              className: [de.scOverlay, M ? de.navOpen : ""].join(" "),
              "data-logged-in": C
            })]
          })
        })),
        me = u((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const r = (0, c.useIntl)(),
            {
              data: o,
              loggedIn: n
            } = (0, l.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: d,
              navOpen: f,
              setNavOpen: u
            } = (0, l.useRockstarUserState)(),
            {
              track: g
            } = (0, l.useGtmTrack)(),
            [_, p] = (0, s.useState)(),
            [h, b] = (0, s.useState)(!1),
            [k, v] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            v(o?.characters?.[i] ?? [])
          }), [o, i]);
          const x = (0, s.useCallback)((e => {
            e.stopPropagation(), u(!f), 1 == !f && a(null), g({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: f ? "close" : "open"
            })
          }), [f]);
          return (0, s.useEffect)((() => {
            b(!!k?.[d]?.mugshotUrl)
          }), [k, d]), (0, s.useEffect)((() => {
            p((() => {
              switch (n) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return k?.[d]?.mugshotUrl ?? o?.avatar
              }
            })())
          }), [o, k, d, n]), (0, m.jsxs)("button", {
            className: "rockstargames-modules-core-footeree811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": r.formatMessage(f ? j.sc_menu_close : j.sc_menu_open),
            "aria-expanded": f,
            type: "button",
            onClick: x,
            "data-mugshot": h,
            "data-testid": "avatarMenuButton",
            "data-logged-in": Boolean(n),
            children: [(0, m.jsx)("img", {
              className: "rockstargames-modules-core-footera917b58ca28b68550a1aa5d99c7eb998",
              src: _,
              alt: o?.nickname || "",
              onError: () => {
                let e = null;
                e = t(h ? 5931 : 73091), p(e)
              }
            }), n && h && (0, m.jsx)("div", {
              className: "rockstargames-modules-core-footerc06123ceae7ca4759ec8b1a5197823db",
              children: (0, m.jsx)(Y, {
                platform: k?.[d]?.platform,
                tagSize: X.small
              })
            }), n && (0, m.jsx)("div", {
              className: "rockstargames-modules-core-footerc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": k?.[d]?.platform ?? null
            })]
          })
        })),
        ge = {
          pillBtn: "rockstargames-modules-core-footerd56685560c26cb74e41c0e7efbff2324",
          selected: "rockstargames-modules-core-footeraf2c4e1e0c4a0665c4844045ac59a1a5",
          profile: "rockstargames-modules-core-footercc0f17f755cfd87ea1140528dcff6218",
          scCharacterSelector: "rockstargames-modules-core-footerad02e9d1ab679ad0544665c4a1463f79",
          scCharacterSelectBtn: "rockstargames-modules-core-footerccc058e17b53baa907a8d380400a1b81",
          open: "rockstargames-modules-core-footere4d379e3b26def224a6777e254d96718",
          scCharacterList: "rockstargames-modules-core-footera3cb8b5052cdb657b91ccbd293f3ac0f",
          nav: "rockstargames-modules-core-footerf4119915eed1b4ec0bd34cd98e2cffef",
          scLanguageSelector: "rockstargames-modules-core-footerec69e723cd1f4082f4bc3f5656f21b7c",
          navHeader: "rockstargames-modules-core-footerd8efae6b36b65fb512bfff18bc891678",
          navWrap: "rockstargames-modules-core-footera9396b9942eedcf0e129b7f6fd3f69ec"
        },
        _e = e => {
          let {
            charListHidden: a,
            hideCharacterList: t,
            refCharacterListDesktop: r,
            menuPadding: o,
            longCharList: n,
            setLongCharList: i,
            isMobileMode: d
          } = e;
          const f = (0, c.useIntl)(),
            {
              windowWidth: u
            } = (0, p.useWindowResize)(),
            {
              track: g
            } = (0, l.useGtmTrack)(),
            {
              charactersNeeded: _,
              currentCharId: h,
              navOpen: b,
              setCurrentCharId: k,
              setSelectedCharacterTuple: v,
              setUserData: x,
              setCharacterAvatar: C,
              setCharacterPlatform: S
            } = (0, l.useRockstarUserState)(),
            [M, y] = (0, s.useState)(null),
            [N, w] = (0, s.useState)([]),
            [I, E] = (0, s.useState)(!1),
            [L, T] = (0, s.useState)(0),
            [P, O] = (0, s.useState)(244),
            [R, H] = (0, s.useState)(!1),
            D = (0, s.useRef)(null),
            U = (0, s.createRef)(),
            B = (0, $.ri)(U, !1),
            {
              webSettings: A
            } = (0, p.useRockstarWebSettings)(),
            {
              data: z,
              loggedIn: W
            } = (0, l.useRockstarUser)({
              fetchCharacters: !0
            }),
            F = () => {
              H(o + P * L < B)
            };
          return (0, s.useEffect)((() => {
            F()
          }), [P]), (0, s.useEffect)((() => {
            F()
          }), [L, d, u, N]), (0, s.useEffect)((() => {
            w(z.characters?.[_] ?? [])
          }), [z, _]), (0, s.useEffect)((() => {
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
          }), [N, A]), M && "gtao" === _ ? (0, m.jsxs)("div", {
            className: ge.profile,
            ref: D,
            tabIndex: -1,
            "aria-label": f.formatMessage(j.profile_selector_profile_card),
            children: [(0, m.jsx)(ce, {
              s: ge,
              character: M
            }), !0 === I && (0, m.jsxs)("div", {
              className: ge.scCharacterSelector,
              children: [(0, m.jsx)("button", {
                className: ge.scCharacterSelectBtn,
                "aria-hidden": !b,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const s = !a;
                  t(s), g({
                    event: s ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                "data-list-closed": a,
                children: (0, m.jsx)("span", {
                  children: (0, m.jsx)(c.FormattedMessage, {
                    ...j.profile_selector_switch_character
                  })
                })
              }), !1 === d && (0, m.jsx)("div", {
                className: ge.scCharacterList,
                "data-long-list": n,
                "aria-hidden": a,
                ref: r,
                children: N.map((e => (0, m.jsx)(ee, {
                  tabIndex: a ? -1 : 0,
                  characterData: e,
                  setMobileCardWidth: O
                }, e.mugshotUrl)))
              }), !0 === d && (0, m.jsx)("div", {
                className: ge.scCharacterList,
                "data-single-item": 2 === N.length,
                "data-swiper-disabled": R,
                "aria-hidden": a,
                ref: U,
                children: (0, m.jsx)(ne, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    g({
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

        function r() {
          for (var e = "", a = 0; a < arguments.length; a++) {
            var t = arguments[a];
            t && (e = c(e, o(t)))
          }
          return e
        }

        function o(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return r.apply(null, e);
          if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
          var a = "";
          for (var t in e) s.call(e, t) && e[t] && (a = c(a, t));
          return a
        }

        function c(e, a) {
          return a ? e ? e + " " + a : e + a : e
        }
        e.exports ? (r.default = r, e.exports = r) : void 0 === (t = function() {
          return r
        }.apply(a, [])) || (e.exports = t)
      }()
    }
  }
]);