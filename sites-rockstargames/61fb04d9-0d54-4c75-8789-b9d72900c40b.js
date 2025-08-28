try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "61fb04d9-0d54-4c75-8789-b9d72900c40b", e._sentryDebugIdIdentifier = "sentry-dbid-61fb04d9-0d54-4c75-8789-b9d72900c40b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "793af7f1166af90e36185780de33260abbd44330",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "793af7f1166af90e36185780de33260abbd44330"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [382], {
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
    51175: (e, a, t) => {
      "use strict";
      t.d(a, {
        v6: () => o
      }), t(51838);
      var s = t(5060);
      const r = new Map;

      function c(e, a) {
        if (e === a) return e;
        const t = r.get(e);
        if (t) return t.forEach((e => e(a))), a;
        const s = r.get(a);
        return s ? (s.forEach((a => a(e))), e) : a
      }

      function n(...e) {
        return (...a) => {
          for (const t of e) "function" == typeof t && t(...a)
        }
      }

      function o(...e) {
        const a = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const r = e[t];
          for (const e in r) {
            const t = a[e],
              o = r[e];
            "function" == typeof t && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? a[e] = n(t, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof o ? "id" === e && t && o ? a.id = c(t, o) : a[e] = void 0 !== o ? o : t : a[e] = (0, s.A)(t, o)
          }
        }
        return a
      }
      var i;
      t(7415), t(52953), t(87090), t(98097), t(76030), t(62670), t(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(i || (i = {})), Symbol.toStringTag
    },
    51838: (e, a, t) => {
      "use strict";
      t.d(a, {
        X: () => s
      });
      const s = "undefined" == typeof window
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
    85302: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        CharacterProfile: () => he,
        LanguageSelector: () => u,
        Menu: () => ue,
        MenuButton: () => _e
      });
      var s = t(62229),
        r = t(15636),
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
          ...p
        } = e;
        const {
          track: k
        } = (0, i.useGtmTrack)(), h = (0, n.useIntl)(), [b] = (0, n.getLocale)(), [v, x] = (0, s.useState)(!1), S = (0, s.useRef)(null), [C, N] = (0, s.useState)(0), y = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, M = e => {
          if (m && m(!1), b.subdomaincom === e || "none" === e) return void(m && m(!1));
          const a = n.locales.find((a => a.subdomaincom === e));
          a && _?.({
            selectedLocale: a,
            track: k,
            parent: u
          })
        };
        return (0, s.useEffect)((() => {
          void 0 !== t && !1 === t && !0 === v && x(!1)
        }), [t]), (0, s.useEffect)((() => {
          S.current && N(S.current.scrollHeight)
        }), [S]), "function" != typeof _ ? null : (0, f.jsxs)(f.Fragment, {
          children: [y && "sc-menu" === a && (0, f.jsx)("div", {
            className: [d.languageSelector, v ? d.open : ""].join(" "),
            "data-theme": a,
            "data-testid": `${u}-language-selector`,
            ...p,
            children: (0, f.jsx)("div", {
              className: d.selectBoxWrapper,
              children: (0, f.jsxs)("select", {
                className: d.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  M(a)
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
          }), (!y || "sc-menu" !== a) && "footer" !== a && (0, f.jsxs)("div", {
            className: [d.languageSelector, v ? d.open : ""].join(" "),
            "data-theme": a,
            "data-testid": `${u}-language-selector`,
            ...p,
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
              ref: S,
              style: {
                "--ls-linkWrapper-opened-height": `${C}px`
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
                      e.preventDefault(), M(a)
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
            ...p,
            children: [(0, f.jsx)(c.Globe, {
              size: "MD",
              label: ""
            }), (0, f.jsx)(r.Dropdown, {
              className: d.dropdown,
              label: h.formatMessage(l.language_selector_default),
              hideLabel: !0,
              placeholder: n.locales.find((e => e.subdomaincom === b.subdomaincom))?.label ?? h.formatMessage(l.language_selector_default),
              onValueChange: e => {
                M(e)
              },
              renderPortal: !0,
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
      var _ = t(69727),
        p = t(95966);
      const k = (0, p.makeVar)(!1),
        h = e => k(e),
        b = (0, p.makeVar)(-1),
        v = e => b(e),
        x = (0, p.makeVar)(-1),
        S = e => x(e),
        C = (0, p.makeVar)(!0),
        N = e => C(e),
        y = (0, p.makeVar)(!0),
        M = e => y(e),
        w = () => {
          const e = (0, p.useReactiveVar)(k),
            a = (0, p.useReactiveVar)(b),
            t = (0, p.useReactiveVar)(x),
            r = (0, p.useReactiveVar)(C),
            c = (0, p.useReactiveVar)(y);
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
            setSubNavExtraHeight: S,
            navOpened: r,
            setAccountNavOpened: N,
            charListHidden: c,
            setCharListHidden: M
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
            track: p
          } = (0, i.useGtmTrack)(), k = (0, L.A)(), h = (0, n.useIntl)();
          let b = s;
          r && (b = r.domain === k.currentSite?.site ? r.path : `https://${k.sites[r.domain]}.rockstargames.com${r.path}`);
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
              p(v), m(e)
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
            reloadDocument: k = !1,
            onClickCallback: h = () => {},
            onNavigate: b
          } = e;
          const {
            windowWidth: v,
            windowHeight: x
          } = (0, p.useWindowResize)(), {
            track: S
          } = (0, i.useGtmTrack)(), {
            navOpen: C
          } = (0, i.useRockstarUserState)(), N = (0, s.useRef)(null), [y, M] = (0, s.useState)(0), [w, j] = (0, s.useState)(0), [I, E] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            g !== a && !1 === I && E(!0), g === a && E(!1)
          }), [g]), (0, s.useEffect)((() => {
            if (!N.current) return;
            M(N?.current?.scrollHeight);
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
              tabIndex: C ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), S(o), g === a ? (u(-1), _(0)) : (u(a), _(y + w + w))
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
                height: I ? 0 : `${y}px`
              },
              children: m.map((e => (0, s.createElement)(O, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !C ? -1 : 0,
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
            tabIndex: C ? 0 : -1,
            reloadDocument: k,
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
          } = (0, p.useWindowResize)(), l = (0, n.useIntl)(), {
            languageSelectorOpened: d,
            setLanguageSelectorOpened: m,
            activeSubNavId: g,
            setActiveSubNavId: _,
            subNavExtraHeight: k,
            setSubNavExtraHeight: h
          } = w(), {
            setSelectedCharacterTuple: b,
            navOpen: v
          } = (0, i.useRockstarUserState)(), x = (0, p.useLocale)(), S = (0, p.toScLocaleString)(x), [C, N] = (0, s.useState)(""), y = `${a.login}?returnUrl=${C}&lang=${S}`, M = `${a.signup}&returnUrl=${C}&lang=${S}`, I = (0, s.useMemo)((() => (0, L.A)()), []), T = (0, s.useMemo)((() => {
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
            }, P(e)])(l, y, M);
            return e
          }), [l, y, M, I]), [R, O] = (0, s.useState)(0), $ = (0, s.createRef)(), B = () => {
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
            B(), E()((() => {
              setTimeout(B, 0)
            }), 300)
          }), [c, o]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("nav", {
              className: "rockstargames-sites-rockstargamesf300d66bd02f52ac564238ca6125a091",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: $,
                style: {
                  "--navWrap-max-height": `${k+R}px`
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
      var B = t(48539),
        D = t(51175);
      var U = t(84082),
        z = t.n(U);
      const A = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        W = (0, s.forwardRef)((function(e, a) {
          let {
            rank: t,
            size: s = "large",
            className: r,
            alt: c,
            testId: n,
            ...o
          } = e;
          const i = A(t),
            l = (0, D.v6)(o, {
              className: z()("rockstargames-sites-rockstargamesf54750ef62f8600000c94f0caba85986", r),
              "data-testid": n
            });
          return (0, f.jsxs)("div", {
            "data-size": s,
            ref: a,
            ...l,
            children: [(0, f.jsx)("svg", {
              role: "svg",
              "aria-label": c,
              className: "rockstargames-sites-rockstargamesa3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": A(t),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, f.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: i
              })
            }), (0, f.jsx)("span", {
              className: "rockstargames-sites-rockstargamesd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: t
            })]
          })
        }));
      var F = t(5060);
      let V = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        X = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const G = e => {
        let {
          tagSize: a,
          platform: t,
          className: s = ""
        } = e;
        const {
          src: r,
          alt: c
        } = ((e, a) => {
          const t = a === V.small;
          switch (e) {
            case X.pc:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case X.pcAlt:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case X.ps4:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case X.ps5:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case X.xboxOne:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case X.xboxSeries:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
              };
            case X.ps:
            case X.np:
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
              };
            case X.xbox:
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
          className: (0, F.A)("rockstargames-sites-rockstargamesb0ff0045ed0326a46ca1e0867d2050c1", s),
          "data-testid": "platform-tag",
          "data-platform": t,
          "data-tag-size": a,
          src: r,
          alt: c
        })
      };
      let Z = {
        characterBtn: "rockstargames-sites-rockstargamesb26daf00eb7def0a82a3c1481316acb0",
        avatar: "rockstargames-sites-rockstargamesd79f37fd31c0943cbf4368215dfc79a0",
        characterBtnStats: "rockstargames-sites-rockstargamesed30f2b92b3fc2937e7278409208872f",
        scCharBtnNames: "rockstargames-sites-rockstargamesa6009feaf97e98d18c6efc2de47ba8b4",
        scUserName: "rockstargames-sites-rockstargamesc3ab062db0e9e0f75e0598eec5022de5",
        scRp: "rockstargames-sites-rockstargamesf5cab6371f4fcd1aa1ce14c0f97d1e7a",
        scRpLevel: "rockstargames-sites-rockstargamesc9300f34b82bbdffb7006ff32247adff",
        scRpIcon: "rockstargames-sites-rockstargamesfaa7b2808fb96fa02fd2e99be36df8e6"
      };
      const J = "CharacterButton:characterName",
        K = "CharacterButton:avatar",
        Y = e => {
          let {
            characterData: a,
            setMobileCardWidth: r,
            tabIndex: c,
            onClick: o = () => {}
          } = e;
          const l = (0, n.useIntl)(),
            {
              currentCharId: d,
              setCurrentCharId: m
            } = (0, i.useRockstarUserState)(),
            g = (0, s.createRef)(),
            {
              platform: u,
              platformUsername: _,
              mugshotUrl: p,
              stats: k
            } = a,
            [h, b] = (0, s.useState)(p),
            v = d === a.index;
          return (0, s.useEffect)((() => {
            g.current && r && r(g?.current?.offsetWidth)
          }), [g]), (0, f.jsxs)("button", {
            className: Z.characterBtn,
            type: "button",
            "aria-hidden": v,
            ref: g,
            tabIndex: c,
            onClick: () => o(-1),
            children: [(0, f.jsx)("div", {
              className: Z.avatarFrame,
              children: (0, f.jsx)("div", {
                className: Z.avatar,
                "data-size": "small",
                children: (0, f.jsx)("img", {
                  className: Z.avatarImg,
                  src: h,
                  alt: l.formatMessage(j.profile_selector_mugshot, {
                    userName: _
                  }),
                  onError: () => {
                    b(t(5931))
                  },
                  "data-testid": K
                })
              })
            }), (0, f.jsxs)("div", {
              className: Z.characterBtnStats,
              children: [(0, f.jsxs)("div", {
                className: Z.scCharBtnNames,
                children: [(0, f.jsx)(G, {
                  tagSize: V.large,
                  platform: u
                }), (0, f.jsx)("div", {
                  className: Z.scUserName,
                  "data-size": "small",
                  "data-testid": J,
                  children: _
                })]
              }), (0, f.jsx)("div", {
                className: Z.scRp,
                children: (0, f.jsx)(W, {
                  size: "small",
                  rank: parseInt(k.overview.rank.value)
                })
              })]
            })]
          })
        };
      let q;
      q = {
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
      };
      const Q = "ProfileCard:characterName",
        ee = "ProfileCard:avatar",
        ae = "ProfileCard:bankValue",
        te = "ProfileCard:cashValue",
        se = e => {
          let {
            character: a
          } = e;
          const {
            data: r
          } = (0, i.useRockstarUser)(), {
            track: c
          } = (0, i.useGtmTrack)(), o = (0, n.useIntl)(), [l, d] = (0, s.useState)([]), [m, g] = (0, s.useState)(null), [u, _] = (0, s.useState)(null), [p, k] = (0, s.useState)(!1), [h, b] = (0, s.useState)(-1), [v, x] = (0, s.useState)([]), [S, C] = (0, s.useState)(0), N = t(5931), {
            platform: y
          } = a, [M, w] = (0, s.useState)("0"), [I, E] = (0, s.useState)("0"), L = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), T = () => {
            R((0, f.jsx)("img", {
              src: N,
              alt: o.formatMessage(j.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [P, R] = (0, s.useState)((0, f.jsx)("img", {
            className: q.avatarImg,
            src: a.mugshotUrl,
            alt: o.formatMessage(j.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: T,
            "data-testid": ee
          }));
          (0, s.useEffect)((() => {
            d(r.crews ?? [])
          }), [r.crews]), (0, s.useEffect)((() => {
            R((0, f.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: T,
              "data-testid": ee
            })), w(L(a.stats.overview.bank.value)), E(L(a.stats.overview.cash.value)), C(parseInt(a.stats.overview.rank.value))
          }), [a, r.nickname]), (0, s.useEffect)((() => {
            l && l.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), _(e.crewColour), b(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [l]), (0, s.useEffect)((() => {
            const e = [];
            if (!p && h > -1)
              for (let a = 5; a > h; a -= 1) e.push((0, f.jsx)("div", {
                className: q.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            x(e)
          }), [h, p, u]);
          const O = e => {
            e.stopPropagation(), c({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, f.jsxs)("div", {
            className: q.profileDetails,
            onClick: O,
            onKeyUp: O,
            role: "button",
            tabIndex: -1,
            children: [(0, f.jsxs)("div", {
              className: q.avatar,
              children: [P, (0, f.jsx)("div", {
                className: q.avatarPlatform,
                "data-platform": y,
                children: (0, f.jsx)(G, {
                  className: q.platformTag,
                  tagSize: V.large,
                  platform: y
                })
              })]
            }), (0, f.jsxs)("div", {
              className: q.profileStats,
              children: [(0, f.jsx)("div", {
                className: q.scNames,
                children: (0, f.jsxs)("div", {
                  className: q.scTagsNames,
                  children: [(0, f.jsx)("span", {
                    className: q.scUserName,
                    "data-testid": Q,
                    children: a.platformUsername
                  }), m && (0, f.jsxs)("span", {
                    className: q.scCrewName,
                    "data-arrow-tag": p,
                    children: [m, !p && (0, f.jsx)("div", {
                      className: q.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, f.jsxs)("div", {
                className: q.scProgress,
                children: [(0, f.jsx)(W, {
                  className: q.scRpLevel,
                  rank: S
                }), (0, f.jsxs)("div", {
                  className: q.scMoney,
                  children: [(0, f.jsxs)("span", {
                    className: q.scCash,
                    "data-testid": te,
                    children: ["$", I]
                  }), (0, f.jsxs)("span", {
                    className: q.scBank,
                    "data-testid": ae,
                    children: ["$", M]
                  })]
                })]
              })]
            })]
          })
        };
      let re = "rockstargames-sites-rockstargamesb794a0e12537ad5fd506353133b9d60a",
        ce = "rockstargames-sites-rockstargamesc1e8d8d5b52081b34283a5ac0d377362",
        ne = "rockstargames-sites-rockstargamesdd4bcd955436c8a6982ee16756f7fd8b",
        oe = "rockstargames-sites-rockstargamese8e5249dac92a2bc76788d0fe7d7dfb7",
        ie = "rockstargames-sites-rockstargamesf64d91c845a3931140b8b2c6a47da81f";
      const le = e => {
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
            m = (0, B.ri)(d, !1),
            [g, u] = (0, s.useState)(!1),
            [_, p] = (0, s.useState)(!1),
            [k, h] = (0, s.useState)(0),
            [b, v] = (0, s.useState)(0),
            [x, S] = (0, s.useState)([r]),
            [C, N] = (0, s.useState)(x[0]),
            [y, M] = (0, s.useState)(252),
            [w, j] = (0, s.useState)(0),
            [I, E] = (0, s.useState)([]),
            [L, T] = (0, s.useState)([]),
            [P, R] = (0, s.useState)(!1),
            O = e => {
              if (!0 === g || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              v(a)
            },
            H = e => {
              if (!0 === g || 0 === b || !0 === l) return;
              p(!0);
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > b ? 1 : -1,
                r = Math.abs(b - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === g) return;
                u(!0);
                const e = k - 1 < 0 ? 0 : k - 1;
                h(e), N(x[e]), c && c(e)
              })() : (() => {
                if (!0 === g) return;
                u(!0);
                let e = k + 1 >= x.length ? x.length - 1 : k + 1;
                e < 0 && (e = 0), h(e), N(x[e]), c && c(e)
              })(), v(0)) : N(x[k] + r * s)
            },
            $ = () => {
              !0 !== g && !0 !== l && (u(!0), !0 !== g && (N(x[k]), v(0)), p(!1))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            o.forEach((() => {
              e.push((0, s.createRef)())
            })), E(e)
          }), [o]), (0, s.useEffect)((() => {
            if (I.length < 1) return;
            M(I[0]?.current?.clientWidth || 0);
            const e = I[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            j(t + a)
          }), [I]), (0, s.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              u(!1)
            }), t)
          }), [g, t]), (0, s.useEffect)((() => {
            S(o.map(((e, a) => (e => {
              let a = 0;
              const t = o.length;
              return 1 === t ? .5 * m - .5 * y - 2 * r + w : (0 === e && (a = r - e * y), e === t - 1 && t > 1 && (a = t * y * -1 + (m - (r - w))), e > 0 && e < t - 1 && (a = e * y * -1 + (.5 * m - .5 * y + .5 * w)), a)
            })(a)))), 1 === o.length ? R(!0) : R(!1)
          }), [d.current, o, m]), (0, s.useEffect)((() => {
            const e = (a = k, o.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            T(e)
          }), [o, k]), (0, s.useEffect)((() => {
            !0 !== i && !0 !== l || N(x[0])
          }), [l, i, x]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              className: re,
              ref: d,
              onTouchStart: O,
              onTouchMove: H,
              onTouchEnd: $,
              onMouseDown: O,
              onMouseMove: H,
              onMouseUp: $,
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, f.jsx)("div", {
                className: ce,
                "data-interaction-blocked": g,
                "data-single-item": P,
                style: {
                  transform: P ? null : `translateX(${C}px)`
                },
                children: o.map(((e, a) => (0, f.jsx)("div", {
                  onClick: () => (e => {
                    null === n || _ || n(e)
                  })(a),
                  className: ne,
                  ref: I[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), L.length > 1 && !1 === i && (0, f.jsx)("div", {
              className: oe,
              children: L.map(((e, a) => (0, f.jsx)("div", {
                className: ie,
                "data-active": e.active
              }, a)))
            })]
          })
        },
        de = {
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
        me = e => {
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
            onNavigate: k
          } = e;
          const {
            windowWidth: h,
            windowHeight: b
          } = (0, p.useWindowResize)(), v = (0, n.useIntl)(), {
            languageSelectorOpened: x,
            setLanguageSelectorOpened: S,
            activeSubNavId: C,
            setActiveSubNavId: N,
            subNavExtraHeight: y,
            setSubNavExtraHeight: M,
            navOpened: I,
            setScNavOpened: R
          } = w(), [O, $] = (0, s.useState)(""), {
            webSettings: D
          } = (0, p.useRockstarWebSettings)(), {
            track: U
          } = (0, i.useGtmTrack)(), z = (0, p.useRockstarTokenPing)(), {
            data: A,
            loggedIn: W
          } = (0, i.useRockstarUser)(), {
            charactersNeeded: F,
            currentCharId: V,
            hasNotifications: X,
            navOpen: G,
            setCurrentCharId: Z,
            setHasNotifications: J,
            setSelectedCharacterTuple: K,
            setUserData: q
          } = (0, i.useRockstarUserState)(), [Q, ee] = (0, s.useState)(null), [ae, te] = (0, s.useState)(!1), [re, ce] = (0, s.useState)(!1), [ne, oe] = (0, s.useState)(0), ie = (0, s.createRef)(), me = (0, B.ri)(ie, !1), ge = (0, s.createRef)(), [fe, ue] = (0, s.useState)(0), [_e, pe] = (0, s.useState)([]), [ke, he] = (0, s.useState)(244), be = (0, s.useRef)(null), ve = (0, s.useMemo)((() => (0, L.A)()), []), xe = (0, s.useMemo)((() => ((e, a, t, s, r) => [{
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
          }])(v, a, A, X, O, window)), [v, a, A, X, O, ve]), Se = () => {
            ce(o + ke * ne < me)
          }, Ce = () => {
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
            pe(A?.characters?.[F] ?? [])
          }), [A, F]), (0, s.useEffect)((() => {
            A && q(A)
          }), [A]), (0, s.useEffect)((() => {
            const e = A?.characters?.gtao ?? [];
            if (null !== W && !e.length) return void K(!1);
            if (null == V || !e.length) return;
            const a = e?.[V] ?? e?.[0] ?? null;
            K(!!a?.platform && [a.platform, a.characterSlot])
          }), [V, A, W]), (0, s.useEffect)((() => {
            (async () => {
              if (!A?.id || !G) return;
              const {
                count: e
              } = await (0, p.coreScApiFetch)("notification/count", {
                pingBearer: z
              });
              J(e > 0)
            })()
          }), [A, G]), (0, s.useEffect)((() => {
            Se()
          }), [ke]), (0, s.useEffect)((() => {
            r(!0), g(h < 768), g(h < 768 || b < 649)
          }), [h, b]), (0, s.useEffect)((() => {
            let e = _e.length - 1;
            e < 0 && (e = 0), oe(e);
            const a = _e.length > 0 ? _e[V] ?? _e[0] : null;
            a && (ee(a), _e.length > 1 ? te(!0) : te(!1), d(_e.length - 1 > 3))
          }), [V, _e]), (0, s.useEffect)((() => {
            Se()
          }), [ne, m, h, _e]), (0, s.useEffect)((() => {
            Ce(), E()((() => {
              setTimeout(Ce, 0)
            }), 300)
          }), [h, b]), (0, s.useEffect)((() => {
            const e = D?.currentCharId ?? 0;
            e !== V && Z(Math.max(0, Math.min(e, _e.length - 1)))
          }), [_e, D]), (0, f.jsxs)(f.Fragment, {
            children: [null !== Q && "gtao" === F && (0, f.jsxs)("div", {
              className: de.scProfile,
              ref: be,
              tabIndex: -1,
              "aria-label": v.formatMessage(j.profile_selector_profile_card),
              children: [(0, f.jsx)(se, {
                s: de,
                character: Q
              }), !0 === ae && (0, f.jsxs)("div", {
                className: de.scCharacterSelector,
                children: [(0, f.jsx)("button", {
                  className: de.scCharacterSelectBtn,
                  "aria-hidden": !G,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    r(a), U({
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
                  className: de.scCharacterList,
                  "data-long-list": l,
                  "aria-hidden": t,
                  ref: c,
                  children: _e.map((e => (0, f.jsx)(Y, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: he
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), m && (0, f.jsx)("div", {
                  className: de.scCharacterList,
                  "data-single-item": 2 === _e.length,
                  "data-swiper-disabled": re,
                  "aria-hidden": t,
                  ref: ie,
                  children: (0, f.jsx)(le, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      U({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: re,
                    disableSwiper: re,
                    children: _e.filter(((e, a) => a !== V)).map((e => (0, s.createElement)(Y, {
                      characterData: e,
                      setMobileCardWidth: he,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, f.jsxs)("nav", {
              className: de.nav,
              "aria-hidden": !G,
              children: [(0, f.jsx)("button", {
                className: de.navHeader,
                type: "button",
                "data-opened": I,
                "data-nav-opened": G,
                tabIndex: I ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), I || R(!0)
                },
                "data-testid": "playerButton",
                children: (0, f.jsx)("span", {
                  className: de.navHeaderText,
                  children: A.nickname
                })
              }), (0, f.jsx)("div", {
                className: de.navWrap,
                "data-opened": I,
                "data-logged-in": "true",
                ref: ge,
                style: {
                  "--navWrap-max-height": `${fe+y}px`
                },
                children: xe.map(((e, a) => (0, s.createElement)(H, {
                  ...e,
                  id: a,
                  activeSubNavId: C,
                  setActiveSubNavId: N,
                  setSubNavExtraHeight: M,
                  onNavigate: k,
                  key: e.text
                })))
              })]
            }), (0, f.jsx)("div", {
              className: de.scLanguageSelector,
              style: {
                visibility: G ? null : "hidden"
              },
              children: (0, f.jsx)(u, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: x,
                setLanguageSelectorOpened: S,
                location: _,
                onLanguageChange: n.onLanguageChange
              })
            })]
          })
        },
        ge = {
          menu: "rockstargames-sites-rockstargamesc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-sites-rockstargamesc31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-sites-rockstargamesc5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-sites-rockstargamesb8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-sites-rockstargamesff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-sites-rockstargamesb49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-sites-rockstargameseff8c1d4bf675accdb7d952aba0174dc"
        },
        fe = (0, p.getConfigForDomain)(),
        ue = g((e => {
          let {
            location: a,
            onNavigate: r
          } = e;
          const {
            windowHeight: c
          } = (0, p.useWindowResize)(), o = (0, n.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: d,
            setActiveSubNavId: m,
            navOpened: g,
            setAccountNavOpened: u,
            charListHidden: k,
            setCharListHidden: h
          } = w(), [b, v] = (0, s.useState)(!1), {
            navHidden: x = !1
          } = (0, p.useState)(), {
            loggedIn: S
          } = (0, i.useRockstarUser)(), {
            currentCharId: C,
            navOpen: N,
            setNavOpen: y,
            userData: M
          } = (0, i.useRockstarUserState)(), {
            track: I
          } = (0, i.useGtmTrack)(), [E, L] = (0, s.useState)(!1), T = (0, s.useRef)(), [P, R] = (0, s.useState)(0), O = (0, s.createRef)(), [H, B] = (0, s.useState)(!1), [D, U] = (0, s.useState)(0), [z, A] = (0, s.useState)(!1), {
            mutateWebSettings: W,
            webSettings: F
          } = (0, p.useRockstarWebSettings)(), V = (0, s.useCallback)((e => {
            h(e), T.current && !0 === e && (T.current.scrollTop = 0)
          }), [T]);
          return (0, s.useEffect)((() => {
            null !== C && F.currentCharId !== C && W({
              key: "currentCharId",
              value: C
            }), !1 === S ? W({
              key: "currentCharId",
              value: null
            }) : S && M && M.accountSynced && I({
              event: "account_synced"
            })
          }), [C, S, M?.accountSynced]), (0, s.useEffect)((() => {
            T.current && (!1 === k && !1 === E && (T.current.style.height = `${T.current.scrollHeight}px`), !0 === k && (T.current.style.height = null))
          }), [k, T, E]), (0, s.useEffect)((() => {
            const e = () => {
                y(!1), V(!0)
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
            y(!1), V(!0)
          }), [x]), (0, s.useEffect)((() => {
            if (O.current) {
              const {
                current: e
              } = O, a = window.getComputedStyle(e);
              R(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [O]), (0, s.useEffect)((() => {
            A(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            O.current && v(O?.current?.scrollHeight >= c)
          }), [O, c]), (0, s.useEffect)((() => {
            N || (m(-1), d(!1))
          }), [N]), (0, s.useEffect)((() => {
            l && (k || V(!0), g && (u(!1), m(-1)))
          }), [l]), (0, s.useEffect)((() => {
            g && (l && d(!1), k || V(!0))
          }), [g]), void 0 === S ? null : (0, f.jsxs)(_.A, {
            enabled: !!N,
            removeScrollBar: !1,
            children: [(0, f.jsxs)("div", {
              className: [ge.menu, N ? ge.navOpen : ""].join(" "),
              "data-logged-in": S,
              "data-mac-browser": z,
              "data-scroll-mode": b,
              ref: O,
              "aria-hidden": !N,
              children: [(0, f.jsx)("button", {
                className: ge.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  U(a)
                },
                onTouchMove: e => {
                  if (0 === D) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(D - a) > 1 && (U(0), y(!1))
                },
                children: (0, f.jsx)("img", {
                  className: ge.dragHandle,
                  src: t(35902),
                  alt: o.formatMessage(j.sc_menu_drag_handle)
                })
              }), S ? (0, f.jsx)(me, {
                sc: fe,
                charListHidden: k,
                hideCharacterList: V,
                refCharacterListDesktop: T,
                menuPadding: P,
                longCharList: E,
                setLongCharList: L,
                isMobileMode: H,
                setIsMobileMode: B,
                location: a,
                onNavigate: r
              }) : (0, f.jsx)($, {
                sc: fe,
                navOpen: N,
                location: a,
                onNavigate: r
              })]
            }), (0, f.jsx)("div", {
              className: [ge.scOverlay, N ? ge.navOpen : ""].join(" "),
              "data-logged-in": S
            })]
          })
        })),
        _e = g((e => {
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
            [_, p] = (0, s.useState)(),
            [k, h] = (0, s.useState)(!1),
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
            p((() => {
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
            "data-mugshot": k,
            "data-testid": "avatarMenuButtonDesktop",
            "data-logged-in": Boolean(o),
            children: [(0, f.jsx)("img", {
              className: "rockstargames-sites-rockstargamesa917b58ca28b68550a1aa5d99c7eb998",
              src: _,
              alt: c?.nickname || "",
              onError: () => {
                let e = null;
                e = t(k ? 5931 : 73091), p(e)
              }
            }), o && k && (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesc06123ceae7ca4759ec8b1a5197823db",
              children: (0, f.jsx)(G, {
                platform: b?.[d]?.platform,
                tagSize: V.small
              })
            }), o && (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": b?.[d]?.platform ?? null
            })]
          })
        }));
      let pe = {
        pillBtn: "rockstargames-sites-rockstargamesc5adbe3b8adfa45115608e536f6e0384",
        selected: "rockstargames-sites-rockstargamesc7c3f92d1fdd021a5cd665583ac79d89",
        scCharacterSelector: "rockstargames-sites-rockstargamesefcb26b13bae0546c71d0b9f88e335a9",
        scCharacterSelectBtn: "rockstargames-sites-rockstargamesd3991df21bf29ec01662910e116a6ff5",
        open: "rockstargames-sites-rockstargamesd815312ad6eebc2c651f8554dc6c0bb7",
        scCharacterList: "rockstargames-sites-rockstargamesdedb11e25dddfe561c538a370f5028e2"
      };
      const ke = {
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
            } = (0, i.useGtmTrack)(),
            [t, r] = (0, s.useState)(null),
            [c, o] = (0, s.useState)(0),
            [l, d] = (0, s.useState)(!1),
            [m, g] = (0, s.useState)(!1),
            u = (0, s.createRef)(),
            [_, k] = (0, s.useState)([]),
            [h, b] = (0, s.useState)(244),
            {
              windowWidth: v
            } = (0, p.useWindowResize)(),
            [x, S] = (0, s.useState)(!1),
            C = (0, B.ri)(u, !1),
            {
              data: N,
              loggedIn: y
            } = (0, i.useRockstarUser)(),
            {
              charactersNeeded: M,
              currentCharId: I,
              setCurrentCharId: E
            } = (0, i.useRockstarUserState)(),
            {
              charListHidden: L,
              setCharListHidden: T
            } = w();
          (0, s.useEffect)((() => {
            void 0 === I && E(0)
          }), [I]), (0, s.useEffect)((() => {
            let e = _.length - 1;
            e < 0 && (e = 0), o(e);
            const a = _.length > 0 ? _[I] ?? _[0] : null;
            a && (r(a), _.length > 1 ? g(!0) : g(!1))
          }), [I, _]), (0, s.useEffect)((() => {
            k(N?.characters?.[M] ?? [])
          }), [N, M]), (0, s.useEffect)((() => {
            P()
          }), [h, c, x, v, _]), (0, s.useEffect)((() => {
            S(v < 1024)
          }), [v]);
          const P = () => {
              d(h * c < C)
            },
            R = e => {
              const t = _.filter(((e, a) => a !== I)).map((e => e));
              E(t[e].index), a({
                event: "character_selector_select",
                text: ke[t[e].platform],
                position: t[e].index
              })
            };
          return null !== t && "gtao" === M && y ? (0, f.jsxs)("div", {
            tabIndex: -1,
            "aria-label": e.formatMessage(j.profile_selector_profile_card),
            children: [(0, f.jsx)(se, {
              s: pe,
              character: t
            }), !0 === m && (0, f.jsxs)("div", {
              className: pe.scCharacterSelector,
              children: [(0, f.jsx)("button", {
                className: pe.scCharacterSelectBtn,
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
                children: (0, f.jsx)("span", {
                  className: pe.scCharacterBtnText,
                  children: (0, f.jsx)(n.FormattedMessage, {
                    ...j.profile_selector_switch_character
                  })
                })
              }), !x && (0, f.jsx)("div", {
                className: pe.scCharacterList,
                "aria-hidden": L,
                children: _.filter(((e, a) => a !== I)).map(((e, a) => (0, f.jsx)(Y, {
                  tabIndex: L ? -1 : 0,
                  onClick: () => R(a),
                  characterData: e,
                  setMobileCardWidth: b
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
              }), x && (0, f.jsx)("div", {
                className: pe.scCharacterList,
                "data-single-item": 2 === _.length,
                "data-swiper-disabled": l,
                "aria-hidden": L,
                ref: u,
                children: (0, f.jsx)(le, {
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
                  disablePager: l,
                  disableSwiper: l,
                  children: _.filter(((e, a) => a !== I)).map((e => (0, s.createElement)(Y, {
                    characterData: e,
                    setMobileCardWidth: b,
                    key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                    tabIndex: L ? -1 : 0
                  })))
                })
              })]
            })]
          }) : null
        }
    }
  }
]);