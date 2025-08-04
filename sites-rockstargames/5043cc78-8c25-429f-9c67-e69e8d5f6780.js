try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5043cc78-8c25-429f-9c67-e69e8d5f6780", e._sentryDebugIdIdentifier = "sentry-dbid-5043cc78-8c25-429f-9c67-e69e8d5f6780")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1411], {
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
    84082: (e, a) => {
      var t;
      ! function() {
        "use strict";
        var s = {}.hasOwnProperty;

        function r() {
          for (var e = "", a = 0; a < arguments.length; a++) {
            var t = arguments[a];
            t && (e = n(e, c(t)))
          }
          return e
        }

        function c(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return r.apply(null, e);
          if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
          var a = "";
          for (var t in e) s.call(e, t) && e[t] && (a = n(a, t));
          return a
        }

        function n(e, a) {
          return a ? e ? e + " " + a : e + a : e
        }
        e.exports ? (r.default = r, e.exports = r) : void 0 === (t = function() {
          return r
        }.apply(a, [])) || (e.exports = t)
      }()
    },
    94267: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        CharacterProfile: () => pe,
        LanguageSelector: () => u,
        Menu: () => ge,
        MenuButton: () => fe,
        ProfileSwitcher: () => _e
      });
      var s = t(62229),
        r = t(61898),
        c = t(78618),
        n = t(81788),
        o = t(18444),
        i = t(2918);
      const l = (0, n.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        d = {
          pillBtn: "rockstargames-sites-rockstargamese34929a5bcdda554c66b47a858ddd966",
          selected: "rockstargames-sites-rockstargamese1ba906f108faeb297753d39a8d21b8b",
          menuStyles: "rockstargames-sites-rockstargamesb641fac428f473cbb4593cd058a01953",
          languageSelector: "rockstargames-sites-rockstargamesa9dd8a9cb7334e205df4ac3b4392916d",
          open: "rockstargames-sites-rockstargamesaa1d94595080f833a35e29fbbe8fd01c",
          linkWrapper: "rockstargames-sites-rockstargamesb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-sites-rockstargamesc64b05a604b1a6be373d35cf01edba2e",
          selectBoxWrapper: "rockstargames-sites-rockstargamesdb1aead5717ba9dae1e272c3b7e6e801",
          selectBox: "rockstargames-sites-rockstargamesfe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-sites-rockstargamesae32febd9789e79c804b2679d25e8a65",
          dropdownContainer: "rockstargames-sites-rockstargamesab0cc073180383d3d5e4bee00eaa311f",
          dropdown: "rockstargames-sites-rockstargamescb93b1e1dbe15862e05455dc78f5ec25"
        },
        m = JSON.parse('{"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        g = e => (0, n.withIntl)(e, m);
      var f = t(70954);
      const u = g((e => {
        let {
          theme: a,
          languageSelectorOpened: t,
          setLanguageSelectorOpened: m,
          location: g,
          parent: u = "element",
          onLanguageChange: _,
          ...k
        } = e;
        const {
          track: p
        } = (0, i.useGtmTrack)(), h = (0, n.useIntl)(), [b] = (0, n.getLocale)(), [v, x] = (0, s.useState)(!1), C = (0, s.useRef)(null), [S, N] = (0, s.useState)(0), M = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, w = e => {
          if (m && m(!1), b.subdomaincom === e || "none" === e) return void(m && m(!1));
          const a = n.locales.find((a => a.subdomaincom === e));
          a && _?.({
            selectedLocale: a,
            track: p,
            parent: u
          })
        };
        return (0, s.useEffect)((() => {
          void 0 !== t && !1 === t && !0 === v && x(!1)
        }), [t]), (0, s.useEffect)((() => {
          C.current && N(C.current.scrollHeight)
        }), [C]), "function" != typeof _ ? null : (0, f.jsxs)(f.Fragment, {
          children: [M && "sc-menu" === a && (0, f.jsx)("div", {
            className: [d.languageSelector, v ? d.open : ""].join(" "),
            "data-theme": a,
            "data-testid": `${u}-language-selector`,
            ...k,
            children: (0, f.jsx)("div", {
              className: d.selectBoxWrapper,
              children: (0, f.jsxs)("select", {
                className: d.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  w(a)
                },
                "aria-label": h.formatMessage(l.language_selector_default),
                "data-testid": `${u}-language-selector-button`,
                children: [(0, f.jsx)("option", {
                  className: d.selectBoxOption,
                  value: "none",
                  "data-testid": `${u}-language-selector-current`,
                  children: n.locales.find((e => e.subdomaincom === b.subdomaincom))?.label ?? (0, f.jsx)(n.FormattedMessage, {
                    ...l.language_selector_default
                  })
                }), n.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, f.jsx)("option", {
                    className: d.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            })
          }), (!M || "sc-menu" !== a) && "footer" !== a && (0, f.jsxs)("div", {
            className: [d.languageSelector, v ? d.open : ""].join(" "),
            "data-theme": a,
            "data-testid": `${u}-language-selector`,
            ...k,
            children: [(0, f.jsxs)("button", {
              onClick: e => {
                e.stopPropagation(), m && m(!v), x(!v)
              },
              "data-testid": `${u}-language-selector-button`,
              type: "button",
              "aria-label": h.formatMessage(l.language_selector_default),
              children: [(0, f.jsx)("i", {}), (0, f.jsx)("span", {
                "data-testid": `${u}-language-selector-current`,
                children: n.locales.find((e => e.subdomaincom === b.subdomaincom))?.label ?? (0, f.jsx)(n.FormattedMessage, {
                  ...l.language_selector_default
                })
              })]
            }), (0, f.jsx)("div", {
              className: d.linkWrapper,
              ref: C,
              style: {
                "--ls-linkWrapper-opened-height": `${S}px`
              },
              children: (0, f.jsx)("div", {
                className: d.links,
                children: n.locales.map((e => {
                  let {
                    subdomaincom: a,
                    label: t
                  } = e;
                  return (0, f.jsx)(o.A, {
                    onClick: e => {
                      e.preventDefault(), w(a)
                    },
                    tabIndex: v ? 0 : -1,
                    "data-testid": `${u}-language-selector-${a}`,
                    children: t
                  }, t)
                }))
              })
            })]
          }), "footer" === a && (0, f.jsxs)("div", {
            className: d.dropdownContainer,
            "data-testid": `${u}-language-selector`,
            ...k,
            children: [(0, f.jsx)(c.Globe, {
              size: "MD",
              label: ""
            }), (0, f.jsx)(r.Dropdown, {
              className: d.dropdown,
              label: h.formatMessage(l.language_selector_default),
              hideLabel: !0,
              placeholder: n.locales.find((e => e.subdomaincom === b.subdomaincom))?.label ?? h.formatMessage(l.language_selector_default),
              onValueChange: e => {
                w(e)
              },
              renderPortal: !1,
              children: n.locales.map((e => {
                let {
                  subdomaincom: a,
                  label: t
                } = e;
                return (0, f.jsx)(r.Option, {
                  label: t,
                  value: a,
                  testId: `${u}-language-selector-${a}`
                }, t)
              }))
            })]
          })]
        })
      }));
      var _ = t(4446),
        k = t(95966);
      const p = (0, k.makeVar)(!1),
        h = e => p(e),
        b = (0, k.makeVar)(-1),
        v = e => b(e),
        x = (0, k.makeVar)(-1),
        C = e => x(e),
        S = (0, k.makeVar)(!0),
        N = e => S(e),
        M = (0, k.makeVar)(!0),
        w = e => M(e),
        y = () => {
          const e = (0, k.useReactiveVar)(p),
            a = (0, k.useReactiveVar)(b),
            t = (0, k.useReactiveVar)(x),
            r = (0, k.useReactiveVar)(S),
            c = (0, k.useReactiveVar)(M);
          return (0, s.useEffect)((() => {
            c || (e && h(!1), r && (N(!1), v(-1)))
          }), [c]), (0, s.useEffect)((() => {
            !e && c && (r || N(!0))
          }), [e, c]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: h,
            activeSubNavId: a,
            setActiveSubNavId: v,
            subNavExtraHeight: t,
            setSubNavExtraHeight: C,
            navOpened: r,
            setAccountNavOpened: N,
            charListHidden: c,
            setCharListHidden: w
          })), [e, a, t, r, c])
        },
        j = (0, n.defineMessages)({
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
      var I = t(54375),
        E = t.n(I),
        L = t(32779);
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
        R = e => {
          let {
            to: a,
            target: t,
            className: s,
            onNavigate: r,
            onClick: c,
            reloadDocument: n,
            children: o,
            ...i
          } = e;
          const l = a?.startsWith("http");
          return (0, f.jsx)("a", {
            href: a,
            className: s,
            onClick: e => {
              c?.(e), l || n || (r ? (e.preventDefault(), r(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            target: t,
            ...i,
            children: o
          })
        },
        O = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: r,
            ga: c,
            dataTestId: o,
            isSubLink: l,
            hasNotifications: d = !1,
            onClickCallback: m = () => {},
            tabIndex: g,
            reloadDocument: u = !1,
            onNavigate: _
          } = e;
          const {
            track: k
          } = (0, i.useGtmTrack)(), p = (0, L.A)(), h = (0, n.useIntl)();
          let b = s;
          r && (b = r.domain === p.currentSite?.site ? r.path : `https://${p.sites[r.domain]}.rockstargames.com${r.path}`);
          const v = {
            ...c,
            link_url: b
          };
          return (0, f.jsxs)(R, {
            className: l ? "rockstargames-sites-rockstargamesc2233d027086d54af877493d7d0700bd" : "rockstargames-sites-rockstargamesf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": o || "menuLink",
            title: a,
            to: b,
            target: t,
            rel: "noreferrer",
            reloadDocument: u,
            tabIndex: g,
            onClick: e => {
              k(v), m(e)
            },
            onNavigate: _,
            children: [a, d && (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesadbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, f.jsx)("span", {
                className: "rockstargames-sites-rockstargamese49e290899be3c888ca5a4b6b13736a1",
                children: h.formatMessage(j.nofications_new)
              })
            })]
          })
        },
        H = e => {
          let {
            id: a,
            text: t,
            target: r,
            href: c,
            location: n,
            ga: o,
            hasNotifications: l = !1,
            dataTestId: d,
            children: m = [],
            activeSubNavId: g,
            setActiveSubNavId: u,
            setSubNavExtraHeight: _,
            reloadDocument: p = !1,
            onClickCallback: h = () => {},
            onNavigate: b
          } = e;
          const {
            windowWidth: v,
            windowHeight: x
          } = (0, k.useWindowResize)(), {
            track: C
          } = (0, i.useGtmTrack)(), {
            navOpen: S
          } = (0, i.useRockstarUserState)(), N = (0, s.useRef)(null), [M, w] = (0, s.useState)(0), [y, j] = (0, s.useState)(0), [I, E] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            g !== a && !1 === I && E(!0), g === a && E(!1)
          }), [g]), (0, s.useEffect)((() => {
            if (!N.current) return;
            w(N?.current?.scrollHeight);
            const e = window.getComputedStyle(N.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [N, v, x]), m.length > 0 ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("button", {
              className: "rockstargames-sites-rockstargamescc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": d || "menuButton",
              title: t,
              tabIndex: S ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), C(o), g === a ? (u(-1), _(0)) : (u(a), _(M + y + y))
              },
              children: [(0, f.jsx)("span", {
                className: "rockstargames-sites-rockstargamesb94730a01d5e9223b69cbc2f20f23bcd",
                children: t
              }), (0, f.jsx)("span", {
                className: "rockstargames-sites-rockstargamesff271a72fe259d74068b4f4d90db08bd"
              })]
            }, t), (0, f.jsx)("nav", {
              className: "rockstargames-sites-rockstargamescbf6e64eadb6f965877129d539aa2dcd",
              ref: N,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${M}px`
              },
              children: m.map((e => (0, s.createElement)(O, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !S ? -1 : 0,
                onNavigate: b
              })))
            })]
          }) : (0, f.jsx)(O, {
            text: t,
            target: r,
            href: c,
            location: n,
            ga: o,
            hasNotifications: l,
            dataTestId: d,
            isSubLink: !1,
            onClickCallback: h,
            tabIndex: S ? 0 : -1,
            reloadDocument: p,
            onNavigate: b
          })
        },
        $ = e => {
          let {
            sc: a,
            location: t,
            onNavigate: r
          } = e;
          const {
            windowWidth: c,
            windowHeight: o
          } = (0, k.useWindowResize)(), l = (0, n.useIntl)(), {
            languageSelectorOpened: d,
            setLanguageSelectorOpened: m,
            activeSubNavId: g,
            setActiveSubNavId: _,
            subNavExtraHeight: p,
            setSubNavExtraHeight: h
          } = y(), {
            setSelectedCharacterTuple: b,
            navOpen: v
          } = (0, i.useRockstarUserState)(), x = (0, k.useLocale)(), C = (0, k.toScLocaleString)(x), [S, N] = (0, s.useState)(""), M = `${a.login}?returnUrl=${S}&lang=${C}`, w = `${a.signup}&returnUrl=${S}&lang=${C}`, I = (0, s.useMemo)((() => (0, L.A)()), []), T = (0, s.useMemo)((() => {
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
            }, P(e)])(l, M, w);
            return e
          }), [l, M, w, I]), [R, O] = (0, s.useState)(0), $ = (0, s.createRef)(), D = () => {
            if ($.current) {
              const {
                current: e
              } = $, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), O(a + e)
              } else O(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            N(e)
          }), [JSON.stringify(t)]), (0, s.useEffect)((() => {
            b(!1)
          }), []), (0, s.useEffect)((() => {
            D(), E()((() => {
              setTimeout(D, 0)
            }), 300)
          }), [c, o]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("nav", {
              className: "rockstargames-sites-rockstargamesf300d66bd02f52ac564238ca6125a091",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: $,
                style: {
                  "--navWrap-max-height": `${p+R}px`
                },
                children: T.map((e => (0, s.createElement)(H, {
                  ...e,
                  activeSubNavId: g,
                  setActiveSubNavId: _,
                  setSubNavExtraHeight: h,
                  onNavigate: r,
                  key: e.text
                })))
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: v ? null : "hidden"
              },
              children: (0, f.jsx)(u, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: d,
                setLanguageSelectorOpened: e => {
                  _(-1), m(e)
                },
                location: t,
                onLanguageChange: n.onLanguageChange
              })
            })]
          })
        };
      var D = t(48539),
        U = t(84105);
      var B = t(84082),
        W = t.n(B);
      const z = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        A = (0, s.forwardRef)((function(e, a) {
          let {
            rank: t,
            className: s,
            alt: r,
            testId: c,
            ...n
          } = e;
          const o = z(t),
            i = (0, U.v6)(n, {
              className: W()("rockstargames-sites-rockstargamesf54750ef62f8600000c94f0caba85986", s),
              "data-testid": c
            });
          return (0, f.jsxs)("div", {
            "data-size": "small",
            ref: a,
            ...i,
            children: [(0, f.jsx)("svg", {
              role: "svg",
              "aria-label": r,
              className: "rockstargames-sites-rockstargamesa3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": z(t),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, f.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: o
              })
            }), (0, f.jsx)("span", {
              "data-testid": "rpCategory:rankValue",
              children: t
            })]
          })
        }));
      let F = null,
        V = null,
        G = "";
      F = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg", V = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", G = "PC Legacy";
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
        return (0, f.jsx)("img", {
          className: "rockstargames-sites-rockstargamesb0ff0045ed0326a46ca1e0867d2050c1",
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
            tabIndex: c
          } = e;
          const o = (0, n.useIntl)(),
            {
              currentCharId: l,
              setCurrentCharId: d
            } = (0, i.useRockstarUserState)(),
            {
              track: m
            } = (0, i.useGtmTrack)(),
            g = (0, s.createRef)(),
            {
              platform: u,
              platformUsername: _,
              mugshotUrl: k,
              stats: p
            } = a,
            [h, b] = (0, s.useState)(k),
            [v] = (0, s.useState)(a.index),
            x = l === a.index;
          return (0, s.useEffect)((() => {
            g.current && r && r(g?.current?.offsetWidth)
          }), [g]), (0, f.jsxs)("button", {
            className: "rockstargames-sites-rockstargamesb26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": x,
            onClick: e => {
              e.stopPropagation(), d(v), m({
                event: "character_selector_select",
                text: K[u] ?? u,
                position: v
              })
            },
            ref: g,
            tabIndex: c,
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesd79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: h,
                alt: o.formatMessage(j.profile_selector_mugshot, {
                  userName: _
                }),
                onError: () => {
                  b(t(5931))
                },
                "data-testid": Q
              })
            }), (0, f.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesed30f2b92b3fc2937e7278409208872f",
              children: [(0, f.jsxs)("div", {
                className: "rockstargames-sites-rockstargamesa6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, f.jsx)(Y, {
                  tagSize: X.large,
                  platform: u
                }), (0, f.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesc3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": q,
                  children: _
                })]
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesf5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, f.jsx)(A, {
                  rank: parseInt(p.overview.rank.value)
                })
              })]
            })]
          })
        },
        ae = {
          pillBtn: "rockstargames-sites-rockstargamesc094ee9992658964204dbc3c55063187",
          selected: "rockstargames-sites-rockstargamesf68f5558f3bacb6ab2f0f6e52b7c4d3d",
          profileDetails: "rockstargames-sites-rockstargamesc7a6cdc85906179aeadfbea13a491277",
          avatar: "rockstargames-sites-rockstargamese1ed133f04d4201de6c787667fe46939",
          avatarPlatform: "rockstargames-sites-rockstargamesb061d8f050dd255669342700ddbe9f94",
          profileStats: "rockstargames-sites-rockstargamesa4a23edaf47f301893d88f6e233907b3",
          scNames: "rockstargames-sites-rockstargamesc6a703613ae9abf4927cf1f023878d9c",
          scTagsNames: "rockstargames-sites-rockstargamesac56f06be77872b6f7ba074189a2ec36",
          scUserName: "rockstargames-sites-rockstargamesa829077ec05e5b83560be13ff3604c8e",
          scCrewName: "rockstargames-sites-rockstargamesc3c644cc20da4e904a7f4e5e3850bf7b",
          scCrewRankBar: "rockstargames-sites-rockstargamescacefbe6235792c328eabdb72c7e812c",
          scCrewRankBarItem: "rockstargames-sites-rockstargamesf9fc60f5d92cda504e6a40d09ec34429",
          scProgress: "rockstargames-sites-rockstargamesb1230619acc50d561a73b55a185e782e",
          scRpLevel: "rockstargames-sites-rockstargamese3dcece76ffe0dcd864d13ada6a4c532",
          scRpIcon: "rockstargames-sites-rockstargamesfd047e239c2b7adafe8729ad8e7ae646",
          scMoney: "rockstargames-sites-rockstargamesffc96f13a79073f795d296415f874263",
          scCash: "rockstargames-sites-rockstargamesf21a08a90936d208b236a20d5893ab50",
          scBank: "rockstargames-sites-rockstargamesee0f3a44274a32b7c03d50d1f8e23578"
        },
        te = "ProfileCard:characterName",
        se = "ProfileCard:avatar",
        re = "ProfileCard:bankValue",
        ce = "ProfileCard:cashValue",
        ne = e => {
          let {
            character: a
          } = e;
          const {
            data: r
          } = (0, i.useRockstarUser)(), {
            track: c
          } = (0, i.useGtmTrack)(), o = (0, n.useIntl)(), [l, d] = (0, s.useState)([]), [m, g] = (0, s.useState)(null), [u, _] = (0, s.useState)(null), [k, p] = (0, s.useState)(!1), [h, b] = (0, s.useState)(-1), [v, x] = (0, s.useState)([]), [C, S] = (0, s.useState)(0), N = t(5931), {
            platform: M
          } = a, [w, y] = (0, s.useState)("0"), [I, E] = (0, s.useState)("0"), L = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), T = () => {
            R((0, f.jsx)("img", {
              src: N,
              alt: o.formatMessage(j.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [P, R] = (0, s.useState)((0, f.jsx)("img", {
            className: ae.avatarImg,
            src: a.mugshotUrl,
            alt: o.formatMessage(j.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: T,
            "data-testid": se
          }));
          (0, s.useEffect)((() => {
            d(r.crews ?? [])
          }), [r.crews]), (0, s.useEffect)((() => {
            R((0, f.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: T,
              "data-testid": se
            })), y(L(a.stats.overview.bank.value)), E(L(a.stats.overview.cash.value)), S(parseInt(a.stats.overview.rank.value))
          }), [a, r.nickname]), (0, s.useEffect)((() => {
            l && l.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), _(e.crewColour), b(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            }))
          }), [l]), (0, s.useEffect)((() => {
            const e = [];
            if (!k && h > -1)
              for (let a = 5; a > h; a -= 1) e.push((0, f.jsx)("div", {
                className: ae.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            x(e)
          }), [h, k, u]);
          const O = e => {
            e.stopPropagation(), c({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, f.jsxs)("div", {
            className: ae.profileDetails,
            onClick: O,
            onKeyUp: O,
            role: "button",
            tabIndex: -1,
            children: [(0, f.jsxs)("div", {
              className: ae.avatar,
              children: [P, (0, f.jsx)("div", {
                className: ae.avatarPlatform,
                "data-platform": M,
                children: (0, f.jsx)(Y, {
                  tagSize: X.large,
                  platform: M
                })
              })]
            }), (0, f.jsxs)("div", {
              className: ae.profileStats,
              children: [(0, f.jsx)("div", {
                className: ae.scNames,
                children: (0, f.jsxs)("div", {
                  className: ae.scTagsNames,
                  children: [(0, f.jsx)("span", {
                    className: ae.scUserName,
                    "data-testid": te,
                    children: a.platformUsername
                  }), m && (0, f.jsxs)("span", {
                    className: ae.scCrewName,
                    "data-arrow-tag": k,
                    children: [m, !k && (0, f.jsx)("div", {
                      className: ae.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, f.jsxs)("div", {
                className: ae.scProgress,
                children: [(0, f.jsx)(A, {
                  rank: C
                }), (0, f.jsxs)("div", {
                  className: ae.scMoney,
                  children: [(0, f.jsxs)("span", {
                    className: ae.scCash,
                    "data-testid": ce,
                    children: ["$", I]
                  }), (0, f.jsxs)("span", {
                    className: ae.scBank,
                    "data-testid": re,
                    children: ["$", w]
                  })]
                })]
              })]
            })]
          })
        },
        oe = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: r = 17,
            slideChangeCallback: c = null,
            slideClickCallback: n = null,
            children: o = [],
            disablePager: i = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, s.createRef)(),
            m = (0, D.ri)(d, !1),
            [g, u] = (0, s.useState)(!1),
            [_, k] = (0, s.useState)(0),
            [p, h] = (0, s.useState)(0),
            [b, v] = (0, s.useState)([r]),
            [x, C] = (0, s.useState)(b[0]),
            [S, N] = (0, s.useState)(252),
            [M, w] = (0, s.useState)(0),
            [y, j] = (0, s.useState)([]),
            [I, E] = (0, s.useState)([]),
            [L, T] = (0, s.useState)(!1),
            P = e => {
              if (!0 === g || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              h(a)
            },
            R = e => {
              if (!0 === g || 0 === p || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > p ? 1 : -1,
                r = Math.abs(p - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === g) return;
                u(!0);
                const e = _ - 1 < 0 ? 0 : _ - 1;
                k(e), C(b[e]), c && c(e)
              })() : (() => {
                if (!0 === g) return;
                u(!0);
                let e = _ + 1 >= b.length ? b.length - 1 : _ + 1;
                e < 0 && (e = 0), k(e), C(b[e]), c && c(e)
              })(), h(0)) : C(b[_] + r * s)
            },
            O = () => {
              !0 !== g && !0 !== l && (u(!0), !0 !== g && (C(b[_]), h(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            o.forEach((() => {
              e.push((0, s.createRef)())
            })), j(e)
          }), [o]), (0, s.useEffect)((() => {
            if (y.length < 1) return;
            N(y[0]?.current?.clientWidth || 0);
            const e = y[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            w(t + a)
          }), [y]), (0, s.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              u(!1)
            }), t)
          }), [g, t]), (0, s.useEffect)((() => {
            v(o.map(((e, a) => (e => {
              let a = 0;
              const t = o.length;
              return 1 === t ? .5 * m - .5 * S - 2 * r + M : (0 === e && (a = r - e * S), e === t - 1 && t > 1 && (a = t * S * -1 + (m - (r - M))), e > 0 && e < t - 1 && (a = e * S * -1 + (.5 * m - .5 * S + .5 * M)), a)
            })(a)))), 1 === o.length ? T(!0) : T(!1)
          }), [d.current, o, m]), (0, s.useEffect)((() => {
            const e = (a = _, o.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            E(e)
          }), [o, _]), (0, s.useEffect)((() => {
            !0 !== i && !0 !== l || C(b[0])
          }), [l, i, b]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesb794a0e12537ad5fd506353133b9d60a",
              ref: d,
              onTouchStart: P,
              onTouchMove: R,
              onTouchEnd: O,
              onMouseDown: P,
              onMouseMove: R,
              onMouseUp: O,
              onClick: () => {
                null !== n && n(_)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": g,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${x}px)`
                },
                children: o.map(((e, a) => (0, f.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesdd4bcd955436c8a6982ee16756f7fd8b",
                  ref: y[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), I.length > 1 && !1 === i && (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamese8e5249dac92a2bc76788d0fe7d7dfb7",
              children: I.map(((e, a) => (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesf64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, a)))
            })]
          })
        },
        ie = {
          pillBtn: "rockstargames-sites-rockstargamesb4f0b55680e047d303f82f34594abd96",
          selected: "rockstargames-sites-rockstargamesed6126bd2f36579f2b8035e7c6579eb7",
          profile: "rockstargames-sites-rockstargamese506a7deb95c0b0c9988325cc857ea9a",
          scProfile: "rockstargames-sites-rockstargamesfb20979fe4aa7955196d74baf7d19379",
          scCharacterSelector: "rockstargames-sites-rockstargamesc3ea8d575c892277f23ad5b589977862",
          scCharacterSelectBtn: "rockstargames-sites-rockstargamesea15428b850bf436adda6f1dd8ac1af9",
          open: "rockstargames-sites-rockstargamesc5ffa3cbaa36329b72b3d928f9739849",
          scCharacterList: "rockstargames-sites-rockstargamesa84bbdd60e615baed0172e6b960c5d32",
          nav: "rockstargames-sites-rockstargamesca9118e28091523e6679a3b95054fe93",
          languageSelector: "rockstargames-sites-rockstargamesb71a5b5521e679bcab20ec6302253996",
          navHeader: "rockstargames-sites-rockstargamesfa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-sites-rockstargamesce91ee6ebb491174a4ccb4be628aaae7"
        },
        le = e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: r,
            refCharacterListDesktop: c,
            menuPadding: o,
            longCharList: l,
            setLongCharList: d,
            isMobileMode: m,
            setIsMobileMode: g,
            location: _,
            onNavigate: p
          } = e;
          const {
            windowWidth: h,
            windowHeight: b
          } = (0, k.useWindowResize)(), v = (0, n.useIntl)(), {
            languageSelectorOpened: x,
            setLanguageSelectorOpened: C,
            activeSubNavId: S,
            setActiveSubNavId: N,
            subNavExtraHeight: M,
            setSubNavExtraHeight: w,
            navOpened: I,
            setScNavOpened: R
          } = y(), [O, $] = (0, s.useState)(""), {
            webSettings: U
          } = (0, k.useRockstarWebSettings)(), {
            track: B
          } = (0, i.useGtmTrack)(), W = (0, k.useRockstarTokenPing)(), {
            data: z,
            loggedIn: A
          } = (0, i.useRockstarUser)(), {
            charactersNeeded: F,
            currentCharId: V,
            hasNotifications: G,
            navOpen: X,
            setCurrentCharId: Z,
            setHasNotifications: Y,
            setSelectedCharacterTuple: J,
            setUserData: K
          } = (0, i.useRockstarUserState)(), [q, Q] = (0, s.useState)(null), [ae, te] = (0, s.useState)(!1), [se, re] = (0, s.useState)(!1), [ce, le] = (0, s.useState)(0), de = (0, s.createRef)(), me = (0, D.ri)(de, !1), ge = (0, s.createRef)(), [fe, ue] = (0, s.useState)(0), [_e, ke] = (0, s.useState)([]), [pe, he] = (0, s.useState)(244), be = (0, s.useRef)(null), ve = (0, s.useMemo)((() => (0, L.A)()), []), xe = (0, s.useMemo)((() => ((e, a, t, s, r) => [{
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
          }])(v, a, z, G, O, window)), [v, a, z, G, O, ve]), Ce = () => {
            re(o + pe * ce < me)
          }, Se = () => {
            if (ge.current) {
              const {
                current: e
              } = ge, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ue(a + e)
              } else ue(a)
            }
          };
          return (0, s.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ve.currentSite?.site === L.C.socialClub && (e = encodeURIComponent("/")), $(e)
          }), [_]), (0, s.useEffect)((() => {
            ke(z?.characters?.[F] ?? [])
          }), [z, F]), (0, s.useEffect)((() => {
            z && K(z)
          }), [z]), (0, s.useEffect)((() => {
            const e = z?.characters?.gtao ?? [];
            if (null !== A && !e.length) return void J(!1);
            if (null == V || !e.length) return;
            const a = e?.[V] ?? e?.[0] ?? null;
            J(!!a?.platform && [a.platform, a.characterSlot])
          }), [V, z, A]), (0, s.useEffect)((() => {
            (async () => {
              if (!z?.id || !X) return;
              const {
                count: e
              } = await (0, k.coreScApiFetch)("notification/count", {
                pingBearer: W
              });
              Y(e > 0)
            })()
          }), [z, X]), (0, s.useEffect)((() => {
            Ce()
          }), [pe]), (0, s.useEffect)((() => {
            r(!0), g(h < 768), g(h < 768 || b < 649)
          }), [h, b]), (0, s.useEffect)((() => {
            let e = _e.length - 1;
            e < 0 && (e = 0), le(e);
            const a = _e.length > 0 ? _e[V] ?? _e[0] : null;
            a && (Q(a), _e.length > 1 ? te(!0) : te(!1), d(_e.length - 1 > 3))
          }), [V, _e]), (0, s.useEffect)((() => {
            Ce()
          }), [ce, m, h, _e]), (0, s.useEffect)((() => {
            Se(), E()((() => {
              setTimeout(Se, 0)
            }), 300)
          }), [h, b]), (0, s.useEffect)((() => {
            const e = U?.currentCharId ?? 0;
            e !== V && Z(Math.max(0, Math.min(e, _e.length - 1)))
          }), [_e, U]), (0, f.jsxs)(f.Fragment, {
            children: [null !== q && "gtao" === F && (0, f.jsxs)("div", {
              className: ie.scProfile,
              ref: be,
              tabIndex: -1,
              "aria-label": v.formatMessage(j.profile_selector_profile_card),
              children: [(0, f.jsx)(ne, {
                s: ie,
                character: q
              }), !0 === ae && (0, f.jsxs)("div", {
                className: ie.scCharacterSelector,
                children: [(0, f.jsx)("button", {
                  className: ie.scCharacterSelectBtn,
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
                  children: (0, f.jsx)("span", {
                    children: (0, f.jsx)(n.FormattedMessage, {
                      ...j.profile_selector_switch_character
                    })
                  })
                }), !m && (0, f.jsx)("div", {
                  className: ie.scCharacterList,
                  "data-long-list": l,
                  "aria-hidden": t,
                  ref: c,
                  children: _e.map((e => (0, f.jsx)(ee, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: he
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), m && (0, f.jsx)("div", {
                  className: ie.scCharacterList,
                  "data-single-item": 2 === _e.length,
                  "data-swiper-disabled": se,
                  "aria-hidden": t,
                  ref: de,
                  children: (0, f.jsx)(oe, {
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
                    children: _e.filter(((e, a) => a !== V)).map((e => (0, s.createElement)(ee, {
                      characterData: e,
                      setMobileCardWidth: he,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, f.jsxs)("nav", {
              className: ie.nav,
              "aria-hidden": !X,
              children: [(0, f.jsx)("button", {
                className: ie.navHeader,
                type: "button",
                "data-opened": I,
                "data-nav-opened": X,
                tabIndex: I ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), I || R(!0)
                },
                "data-testid": "playerButton",
                children: (0, f.jsx)("span", {
                  children: z.nickname
                })
              }), (0, f.jsx)("div", {
                className: ie.navWrap,
                "data-opened": I,
                "data-logged-in": "true",
                ref: ge,
                style: {
                  "--navWrap-max-height": `${fe+M}px`
                },
                children: xe.map(((e, a) => (0, s.createElement)(H, {
                  ...e,
                  id: a,
                  activeSubNavId: S,
                  setActiveSubNavId: N,
                  setSubNavExtraHeight: w,
                  onNavigate: p,
                  key: e.text
                })))
              })]
            }), (0, f.jsx)("div", {
              className: ie.scLanguageSelector,
              style: {
                visibility: X ? null : "hidden"
              },
              children: (0, f.jsx)(u, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: x,
                setLanguageSelectorOpened: C,
                location: _,
                onLanguageChange: n.onLanguageChange
              })
            })]
          })
        },
        de = {
          menu: "rockstargames-sites-rockstargamesc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-sites-rockstargamesc31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-sites-rockstargamesc5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-sites-rockstargamesb8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-sites-rockstargamesff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-sites-rockstargamesb49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-sites-rockstargameseff8c1d4bf675accdb7d952aba0174dc"
        },
        me = (0, k.getConfigForDomain)(),
        ge = g((e => {
          let {
            location: a,
            onNavigate: r
          } = e;
          const {
            windowHeight: c
          } = (0, k.useWindowResize)(), o = (0, n.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: d,
            setActiveSubNavId: m,
            navOpened: g,
            setAccountNavOpened: u,
            charListHidden: p,
            setCharListHidden: h
          } = y(), [b, v] = (0, s.useState)(!1), {
            navHidden: x = !1
          } = (0, k.useState)(), {
            loggedIn: C
          } = (0, i.useRockstarUser)(), {
            currentCharId: S,
            navOpen: N,
            setNavOpen: M,
            userData: w
          } = (0, i.useRockstarUserState)(), {
            track: I
          } = (0, i.useGtmTrack)(), [E, L] = (0, s.useState)(!1), T = (0, s.useRef)(), [P, R] = (0, s.useState)(0), O = (0, s.createRef)(), [H, D] = (0, s.useState)(!1), [U, B] = (0, s.useState)(0), [W, z] = (0, s.useState)(!1), {
            mutateWebSettings: A,
            webSettings: F
          } = (0, k.useRockstarWebSettings)(), V = (0, s.useCallback)((e => {
            h(e), T.current && !0 === e && (T.current.scrollTop = 0)
          }), [T]);
          return (0, s.useEffect)((() => {
            null !== S && F.currentCharId !== S && A({
              key: "currentCharId",
              value: S
            }), !1 === C ? A({
              key: "currentCharId",
              value: null
            }) : C && w && w.accountSynced && I({
              event: "account_synced"
            })
          }), [S, C, w?.accountSynced]), (0, s.useEffect)((() => {
            T.current && (!1 === p && !1 === E && (T.current.style.height = `${T.current.scrollHeight}px`), !0 === p && (T.current.style.height = null))
          }), [p, T, E]), (0, s.useEffect)((() => {
            const e = () => {
                M(!1), V(!0)
              },
              a = a => {
                const t = O?.current && a?.composedPath().includes(O.current);
                N && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }), [O]), (0, s.useEffect)((() => {
            M(!1), V(!0)
          }), [x]), (0, s.useEffect)((() => {
            if (O.current) {
              const {
                current: e
              } = O, a = window.getComputedStyle(e);
              R(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [O]), (0, s.useEffect)((() => {
            z(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            O.current && v(O?.current?.scrollHeight >= c)
          }), [O, c]), (0, s.useEffect)((() => {
            N || (m(-1), d(!1))
          }), [N]), (0, s.useEffect)((() => {
            l && (p || V(!0), g && (u(!1), m(-1)))
          }), [l]), (0, s.useEffect)((() => {
            g && (l && d(!1), p || V(!0))
          }), [g]), void 0 === C ? null : (0, f.jsxs)(_.A, {
            enabled: !!N,
            removeScrollBar: !1,
            children: [(0, f.jsxs)("div", {
              className: [de.menu, N ? de.navOpen : ""].join(" "),
              "data-logged-in": C,
              "data-mac-browser": W,
              "data-scroll-mode": b,
              ref: O,
              "aria-hidden": !N,
              children: [(0, f.jsx)("button", {
                className: de.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  B(a)
                },
                onTouchMove: e => {
                  if (0 === U) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(U - a) > 1 && (B(0), M(!1))
                },
                children: (0, f.jsx)("img", {
                  className: de.dragHandle,
                  src: t(35902),
                  alt: o.formatMessage(j.sc_menu_drag_handle)
                })
              }), C ? (0, f.jsx)(le, {
                sc: me,
                charListHidden: p,
                hideCharacterList: V,
                refCharacterListDesktop: T,
                menuPadding: P,
                longCharList: E,
                setLongCharList: L,
                isMobileMode: H,
                setIsMobileMode: D,
                location: a,
                onNavigate: r
              }) : (0, f.jsx)($, {
                sc: me,
                navOpen: N,
                location: a,
                onNavigate: r
              })]
            }), (0, f.jsx)("div", {
              className: [de.scOverlay, N ? de.navOpen : ""].join(" "),
              "data-logged-in": C
            })]
          })
        })),
        fe = g((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const r = (0, n.useIntl)(),
            {
              data: c,
              loggedIn: o
            } = (0, i.useRockstarUser)(),
            {
              charactersNeeded: l,
              currentCharId: d,
              navOpen: m,
              setNavOpen: g
            } = (0, i.useRockstarUserState)(),
            {
              track: u
            } = (0, i.useGtmTrack)(),
            [_, k] = (0, s.useState)(),
            [p, h] = (0, s.useState)(!1),
            [b, v] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            v(c?.characters?.[l] ?? [])
          }), [c, l]);
          const x = (0, s.useCallback)((e => {
            e.stopPropagation(), g(!m), 1 == !m && a(null), u({
              event: "account_menu_click",
              element_placement: "account menu",
              text: m ? "close" : "open"
            })
          }), [m]);
          return (0, s.useEffect)((() => {
            h(!!b?.[d]?.mugshotUrl)
          }), [b, d]), (0, s.useEffect)((() => {
            k((() => {
              switch (o) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return b?.[d]?.mugshotUrl ?? c?.avatar
              }
            })())
          }), [c, b, d, o]), (0, f.jsxs)("button", {
            className: "rockstargames-sites-rockstargamesee811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": r.formatMessage(m ? j.sc_menu_close : j.sc_menu_open),
            "aria-expanded": m,
            type: "button",
            onClick: x,
            "data-mugshot": p,
            "data-testid": "avatarMenuButtonDesktop",
            "data-logged-in": Boolean(o),
            children: [(0, f.jsx)("img", {
              className: "rockstargames-sites-rockstargamesa917b58ca28b68550a1aa5d99c7eb998",
              src: _,
              alt: c?.nickname || "",
              onError: () => {
                let e = null;
                e = t(p ? 5931 : 73091), k(e)
              }
            }), o && p && (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesc06123ceae7ca4759ec8b1a5197823db",
              children: (0, f.jsx)(Y, {
                platform: b?.[d]?.platform,
                tagSize: X.small
              })
            }), o && (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": b?.[d]?.platform ?? null
            })]
          })
        })),
        ue = {
          pillBtn: "rockstargames-sites-rockstargamesd56685560c26cb74e41c0e7efbff2324",
          selected: "rockstargames-sites-rockstargamesaf2c4e1e0c4a0665c4844045ac59a1a5",
          profile: "rockstargames-sites-rockstargamescc0f17f755cfd87ea1140528dcff6218",
          scCharacterSelector: "rockstargames-sites-rockstargamesad02e9d1ab679ad0544665c4a1463f79",
          scCharacterSelectBtn: "rockstargames-sites-rockstargamesccc058e17b53baa907a8d380400a1b81",
          open: "rockstargames-sites-rockstargamese4d379e3b26def224a6777e254d96718",
          scCharacterList: "rockstargames-sites-rockstargamesa3cb8b5052cdb657b91ccbd293f3ac0f",
          nav: "rockstargames-sites-rockstargamesf4119915eed1b4ec0bd34cd98e2cffef",
          scLanguageSelector: "rockstargames-sites-rockstargamesec69e723cd1f4082f4bc3f5656f21b7c",
          navHeader: "rockstargames-sites-rockstargamesd8efae6b36b65fb512bfff18bc891678",
          navWrap: "rockstargames-sites-rockstargamesa9396b9942eedcf0e129b7f6fd3f69ec"
        },
        _e = e => {
          let {
            charListHidden: a,
            hideCharacterList: t,
            refCharacterListDesktop: r,
            menuPadding: c,
            longCharList: o,
            setLongCharList: l,
            isMobileMode: d
          } = e;
          const m = (0, n.useIntl)(),
            {
              windowWidth: g
            } = (0, k.useWindowResize)(),
            {
              track: u
            } = (0, i.useGtmTrack)(),
            {
              charactersNeeded: _,
              currentCharId: p,
              navOpen: h,
              setCurrentCharId: b,
              setSelectedCharacterTuple: v,
              setUserData: x,
              setCharacterAvatar: C,
              setCharacterPlatform: S
            } = (0, i.useRockstarUserState)(),
            [N, M] = (0, s.useState)(null),
            [w, y] = (0, s.useState)([]),
            [I, E] = (0, s.useState)(!1),
            [L, T] = (0, s.useState)(0),
            [P, R] = (0, s.useState)(244),
            [O, H] = (0, s.useState)(!1),
            $ = (0, s.useRef)(null),
            U = (0, s.createRef)(),
            B = (0, D.ri)(U, !1),
            {
              webSettings: W
            } = (0, k.useRockstarWebSettings)(),
            {
              data: z,
              loggedIn: A
            } = (0, i.useRockstarUser)({
              fetchCharacters: !0
            }),
            F = () => {
              H(c + P * L < B)
            };
          return (0, s.useEffect)((() => {
            F()
          }), [P]), (0, s.useEffect)((() => {
            F()
          }), [L, d, g, w]), (0, s.useEffect)((() => {
            y(z.characters?.[_] ?? [])
          }), [z, _]), (0, s.useEffect)((() => {
            z && x(z)
          }), [z]), (0, s.useEffect)((() => {
            const e = z?.characters?.gtao;
            if (null !== A && !e?.length) return void v(!1);
            if (null == p || !e?.length) return;
            const a = e?.[p] ?? e?.[0] ?? null;
            v(!!a?.platform && [a.platform, a.characterSlot])
          }), [p, z, A]), (0, s.useEffect)((() => {
            let e = w.length - 1;
            e < 0 && (e = 0), T(e);
            const a = w.length > 0 ? w[p] ?? w[0] : null;
            if (a) return M(a), C(a.mugshotUrl), S(a.platform), w.length > 1 ? E(!0) : E(!1), l(w.length - 1 > 3), () => {
              C(""), S("")
            }
          }), [p, w]), (0, s.useEffect)((() => {
            const e = W?.currentCharId ?? 0;
            e !== p && b(Math.max(0, Math.min(e, w.length - 1)))
          }), [w, W]), N && "gtao" === _ ? (0, f.jsxs)("div", {
            className: ue.profile,
            ref: $,
            tabIndex: -1,
            "aria-label": m.formatMessage(j.profile_selector_profile_card),
            children: [(0, f.jsx)(ne, {
              s: ue,
              character: N
            }), !0 === I && (0, f.jsxs)("div", {
              className: ue.scCharacterSelector,
              children: [(0, f.jsx)("button", {
                className: ue.scCharacterSelectBtn,
                "aria-hidden": !h,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const s = !a;
                  t(s), u({
                    event: s ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                "data-list-closed": a,
                children: (0, f.jsx)("span", {
                  children: (0, f.jsx)(n.FormattedMessage, {
                    ...j.profile_selector_switch_character
                  })
                })
              }), !1 === d && (0, f.jsx)("div", {
                className: ue.scCharacterList,
                "data-long-list": o,
                "aria-hidden": a,
                ref: r,
                children: w.map((e => (0, f.jsx)(ee, {
                  tabIndex: a ? -1 : 0,
                  characterData: e,
                  setMobileCardWidth: R
                }, e.mugshotUrl)))
              }), !0 === d && (0, f.jsx)("div", {
                className: ue.scCharacterList,
                "data-single-item": 2 === w.length,
                "data-swiper-disabled": O,
                "aria-hidden": a,
                ref: U,
                children: (0, f.jsx)(oe, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    u({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  disablePager: O,
                  disableSwiper: O,
                  children: w.filter(((e, a) => a !== p)).map((e => (0, s.createElement)(ee, {
                    characterData: e,
                    setMobileCardWidth: R,
                    key: e.mugshotUrl,
                    tabIndex: a ? -1 : 0
                  })))
                })
              })]
            })]
          }) : null
        },
        ke = {
          pillBtn: "rockstargames-sites-rockstargamesc5adbe3b8adfa45115608e536f6e0384",
          selected: "rockstargames-sites-rockstargamesc7c3f92d1fdd021a5cd665583ac79d89",
          scCharacterSelector: "rockstargames-sites-rockstargamesefcb26b13bae0546c71d0b9f88e335a9",
          scCharacterSelectBtn: "rockstargames-sites-rockstargamesd3991df21bf29ec01662910e116a6ff5",
          open: "rockstargames-sites-rockstargamesd815312ad6eebc2c651f8554dc6c0bb7",
          scCharacterList: "rockstargames-sites-rockstargamesdedb11e25dddfe561c538a370f5028e2"
        },
        pe = e => {
          let {
            isMobile: a = !1
          } = e;
          const t = (0, n.useIntl)(),
            {
              track: r
            } = (0, i.useGtmTrack)(),
            [c, o] = (0, s.useState)(null),
            [l, d] = (0, s.useState)(0),
            [m, g] = (0, s.useState)(!1),
            [u, _] = (0, s.useState)(!1),
            p = (0, s.createRef)(),
            [h, b] = (0, s.useState)([]),
            [v, x] = (0, s.useState)(244),
            {
              windowWidth: C
            } = (0, k.useWindowResize)(),
            S = (0, D.ri)(p, !1),
            {
              data: N,
              loggedIn: M
            } = (0, i.useRockstarUser)(),
            {
              charactersNeeded: w,
              currentCharId: I
            } = (0, i.useRockstarUserState)(),
            {
              charListHidden: E,
              setCharListHidden: L
            } = y();
          (0, s.useEffect)((() => {
            let e = h.length - 1;
            e < 0 && (e = 0), d(e);
            const a = h.length > 0 ? h[I] ?? h[0] : null;
            a && (o(a), h.length > 1 ? _(!0) : _(!1))
          }), [I, h]), (0, s.useEffect)((() => {
            b(N?.characters?.[w] ?? [])
          }), [N, w]), (0, s.useEffect)((() => {
            T()
          }), [v, l, a, C, h]);
          const T = () => {
            g(v * l < S)
          };
          return null !== c && "gtao" === w && M ? (0, f.jsxs)("div", {
            tabIndex: -1,
            "aria-label": t.formatMessage(j.profile_selector_profile_card),
            children: [(0, f.jsx)(ne, {
              s: ke,
              character: c
            }), !0 === u && (0, f.jsxs)("div", {
              className: ke.scCharacterSelector,
              children: [(0, f.jsx)("button", {
                className: ke.scCharacterSelectBtn,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const a = !E;
                  L(a), r({
                    event: a ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                "data-list-closed": E,
                children: (0, f.jsx)("span", {
                  children: (0, f.jsx)(n.FormattedMessage, {
                    ...j.profile_selector_switch_character
                  })
                })
              }), !a && (0, f.jsx)("div", {
                className: ke.scCharacterList,
                "aria-hidden": E,
                children: h.map((e => (0, f.jsx)(ee, {
                  tabIndex: E ? -1 : 0,
                  characterData: e,
                  setMobileCardWidth: x
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
              }), a && (0, f.jsx)("div", {
                className: ke.scCharacterList,
                "data-single-item": 2 === h.length,
                "data-swiper-disabled": m,
                "aria-hidden": E,
                ref: p,
                children: (0, f.jsx)(oe, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    r({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  disablePager: m,
                  disableSwiper: m,
                  children: h.filter(((e, a) => a !== I)).map((e => (0, s.createElement)(ee, {
                    characterData: e,
                    setMobileCardWidth: x,
                    key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                    tabIndex: E ? -1 : 0
                  })))
                })
              })]
            })]
          }) : null
        }
    }
  }
]);