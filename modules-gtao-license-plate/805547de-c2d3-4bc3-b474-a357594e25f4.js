! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "805547de-c2d3-4bc3-b474-a357594e25f4", e._sentryDebugIdIdentifier = "sentry-dbid-805547de-c2d3-4bc3-b474-a357594e25f4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [672], {
    85650: (e, a, t) => {
      t.r(a), t.d(a, {
        CharacterCard: () => g,
        LanguageSelector: () => b,
        Menu: () => ne,
        MenuButton: () => ie,
        ProfileSwitcher: () => me
      });
      var s = t(62229),
        c = t(81788);
      const r = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(50702),
                alt: "PC"
              } : {
                src: t(82864),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: t(7166),
                alt: "PS4"
              } : {
                src: t(348),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: t(69743),
                alt: "PS5"
              } : {
                src: t(12541),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(71070),
                alt: "Xbox One"
              } : {
                src: t(17024),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(43777),
                alt: "Xbox Series X|S"
              } : {
                src: t(24963),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        l = e => t(e < 100 ? 15917 : e > 99 && e < 500 ? 89697 : e > 499 && e < 750 ? 58662 : 26563),
        o = (0, c.defineMessages)({
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
            defaultMessage: "Do Not Sell My Information"
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
        }),
        n = {
          pillBtn: "rockstargames-modules-gtao-license-plateb618569985ae824a0ad12179a3fc1d73",
          selected: "rockstargames-modules-gtao-license-platee1a2f9a25bb7f66968281e2bc4e4de88",
          scCharacterCard: "rockstargames-modules-gtao-license-plateb5c76acf3bb09d7897375c618e9b0a12",
          avatar: "rockstargames-modules-gtao-license-plated6d3f262555eafb7d674aaf38e8ddfd6",
          scCharNames: "rockstargames-modules-gtao-license-platecb995eda97ef905857c8d886edcf0897",
          scCharacterStats: "rockstargames-modules-gtao-license-platea68d43553c702327a295c974a9c5e67b",
          scUserName: "rockstargames-modules-gtao-license-platead1b6a52da2116461c0d8b9c63b8ee28",
          scRpLevel: "rockstargames-modules-gtao-license-plateaf42f06ddb8cff176be6fcb31e17271a",
          scRpIcon: "rockstargames-modules-gtao-license-platef9a042c11d2e6a8ed1d5e78f40abd88d"
        },
        i = JSON.parse('{"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","rp_icon":"RP Category","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        d = e => (0, c.withIntl)(e, i);
      var m = t(91029);
      const g = d((e => {
        let {
          characterData: a
        } = e;
        const i = (0, c.useIntl)(),
          {
            platform: d,
            platformUsername: g,
            mugshotUrl: u,
            stats: f
          } = a,
          [p, _] = (0, s.useState)(u),
          h = r(d, "large");
        return (0, m.jsxs)("div", {
          className: n.scCharacterCard,
          children: [(0, m.jsx)("div", {
            className: n.avatar,
            "data-size": "small",
            children: (0, m.jsx)("img", {
              src: p,
              alt: i.formatMessage(o.profile_selector_mugshot, {
                userName: g
              }),
              onError: () => {
                _(t(5931))
              }
            })
          }), (0, m.jsx)("div", {
            className: n.scCharacterStats,
            children: (0, m.jsxs)("div", {
              className: n.scCharNames,
              children: [(0, m.jsx)("img", {
                src: h.src,
                alt: h.alt
              }), (0, m.jsx)("div", {
                className: n.scUserName,
                "data-size": "small",
                children: g
              }), (0, m.jsx)("div", {
                className: n.scRp,
                children: (0, m.jsxs)("div", {
                  className: n.scRpLevel,
                  children: [(0, m.jsx)("img", {
                    className: n.scRpIcon,
                    src: l(f.overview.rank.value),
                    alt: i.formatMessage(o.profile_selector_rp_icon)
                  }), (0, m.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })
          })]
        })
      }));
      var u = t(6400),
        f = t(12363),
        p = t(2918);
      const _ = (0, c.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        h = {
          pillBtn: "rockstargames-modules-gtao-license-platee34929a5bcdda554c66b47a858ddd966",
          selected: "rockstargames-modules-gtao-license-platee1ba906f108faeb297753d39a8d21b8b",
          menuStyles: "rockstargames-modules-gtao-license-plateb641fac428f473cbb4593cd058a01953",
          languageSelector: "rockstargames-modules-gtao-license-platea9dd8a9cb7334e205df4ac3b4392916d",
          open: "rockstargames-modules-gtao-license-plateaa1d94595080f833a35e29fbbe8fd01c",
          linkWrapper: "rockstargames-modules-gtao-license-plateb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-modules-gtao-license-platec64b05a604b1a6be373d35cf01edba2e",
          selectBoxWrapper: "rockstargames-modules-gtao-license-platedb1aead5717ba9dae1e272c3b7e6e801",
          selectBox: "rockstargames-modules-gtao-license-platefe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-modules-gtao-license-plateae32febd9789e79c804b2679d25e8a65"
        },
        b = d((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: r,
            location: l,
            parent: o = "footer",
            onLangChange: n
          } = e;
          const {
            track: i
          } = (0, p.useGtmTrack)(), d = (0, c.useIntl)(), [g, b] = (0, c.getLocale)(), [k, v] = (0, s.useState)(!1), x = (0, s.useRef)(null), [S, C] = (0, s.useState)(0), N = matchMedia("(hover: none) and (pointer: coarse)").matches, M = (0, s.useMemo)((() => (0, u.A)()), []), w = (0, s.useCallback)((e => {
            let a = l.pathname.replace(/^\/|\/$/g, "");
            const t = a.split("/");
            return c.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), M.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${a}${l.search}` : `${window.location.origin}/${e}/${a}${l.search}` : `${window.location.origin}/${a}${l.search}`
          }), [l]), y = e => {
            if (r && r(!1), g.subdomaincom === e || "none" === e) return void(r && r(!1));
            const a = c.locales.find((a => a.subdomaincom === e));
            if (a) {
              const t = w(e);
              i({
                event: "cta_other",
                link_url: t,
                text: e,
                element_placement: o
              }), b(a.iso), window.location.href = t, n?.({
                selectedLocale: a,
                track: i,
                parent: o
              })
            }
          };
          return (0, s.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === k && v(!1)
          }), [t]), (0, s.useEffect)((() => {
            x.current && C(x.current.scrollHeight)
          }), [x]), (0, m.jsxs)("div", {
            className: [h.languageSelector, k ? h.open : ""].join(" "),
            "data-theme": a,
            children: [N && "sc-menu" === a && (0, m.jsx)("div", {
              className: h.selectBoxWrapper,
              children: (0, m.jsxs)("select", {
                className: h.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  y(a)
                },
                "aria-label": d.formatMessage(_.language_selector_default),
                children: [(0, m.jsx)("option", {
                  className: h.selectBoxOption,
                  value: "none",
                  children: (0, m.jsx)(c.FormattedMessage, {
                    ..._.language_selector_default
                  })
                }), c.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, m.jsx)("option", {
                    className: h.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!N || "sc-menu" !== a) && (0, m.jsxs)(m.Fragment, {
              children: [(0, m.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), r && r(!k), v(!k)
                },
                type: "button",
                "aria-label": d.formatMessage(_.language_selector_default),
                children: [(0, m.jsx)("i", {}), (0, m.jsx)("span", {
                  children: (0, m.jsx)(c.FormattedMessage, {
                    ..._.language_selector_default
                  })
                })]
              }), (0, m.jsx)("div", {
                className: h.linkWrapper,
                ref: x,
                style: {
                  "--ls-linkWrapper-opened-height": `${S}px`
                },
                children: (0, m.jsx)("div", {
                  className: h.links,
                  children: c.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, m.jsx)(s.Fragment, {
                      children: (0, m.jsx)(f.A, {
                        to: w(a),
                        onClick: (c = a, () => {
                          y(c)
                        }),
                        tabIndex: k ? 0 : -1,
                        children: t
                      })
                    }, t);
                    var c
                  }))
                })
              })]
            })]
          })
        }));
      var k = t(5402),
        v = t(95966);
      const x = (0, v.makeVar)(!1),
        S = e => x(e),
        C = (0, v.makeVar)(-1),
        N = e => C(e),
        M = (0, v.makeVar)(-1),
        w = e => M(e),
        y = (0, v.makeVar)(!0),
        j = e => y(e),
        I = (0, v.makeVar)(!0),
        L = e => I(e),
        E = () => {
          const e = (0, v.useReactiveVar)(x),
            a = (0, v.useReactiveVar)(C),
            t = (0, v.useReactiveVar)(M),
            c = (0, v.useReactiveVar)(y),
            r = (0, v.useReactiveVar)(I);
          return (0, s.useEffect)((() => {
            r || (e && S(!1), c && (j(!1), N(-1)))
          }), [r]), (0, s.useEffect)((() => {
            !e && r && (c || j(!0))
          }), [e, r]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: S,
            activeSubNavId: a,
            setActiveSubNavId: N,
            subNavExtraHeight: t,
            setSubNavExtraHeight: w,
            navOpened: c,
            setAccountNavOpened: j,
            charListHidden: r,
            setCharListHidden: L
          })), [e, a, t, c, r])
        };
      var T = t(12296),
        P = t.n(T);
      const R = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        O = e => ({
          text: e.formatMessage(o.sc_link_help),
          target: "_self",
          ga: {
            ...R,
            text: o.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(o.sc_link_support),
            location: {
              domain: u.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...R,
              text: o.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(o.sc_link_legal),
            location: {
              domain: u.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...R,
              text: o.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(o.sc_link_privacy_policy),
            location: {
              domain: u.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...R,
              text: o.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(o.sc_link_cookies_policy),
            location: {
              domain: u.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...R,
              text: o.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(o.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...R,
              text: o.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(o.sc_link_do_not_sell_my_information),
            location: {
              domain: u.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...R,
              text: o.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        U = e => {
          let {
            to: a,
            target: t,
            className: s,
            onNavigate: c,
            onClick: r,
            reloadDocument: l,
            children: o,
            ...n
          } = e;
          const i = a?.startsWith("http");
          return (0, m.jsx)("a", {
            href: a,
            className: s,
            onClick: e => {
              r?.(e), i || l || (c ? (e.preventDefault(), c(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            target: t,
            ...n,
            children: o
          })
        },
        $ = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: r,
            ga: l,
            dataTestId: n,
            isSubLink: i,
            hasNotifications: d = !1,
            onClickCallback: g = (() => {}),
            tabIndex: f,
            reloadDocument: _ = !1,
            onNavigate: h
          } = e;
          const {
            track: b
          } = (0, p.useGtmTrack)(), k = (0, u.A)(), v = (0, c.useIntl)();
          let x = s;
          r && (x = r.domain === k.currentSite?.site ? r.path : `https://${k.sites[r.domain]}.rockstargames.com${r.path}`);
          const S = {
            ...l,
            link_url: x
          };
          return (0, m.jsxs)(U, {
            className: i ? "rockstargames-modules-gtao-license-platec2233d027086d54af877493d7d0700bd" : "rockstargames-modules-gtao-license-platef97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": n || "menuLink",
            title: a,
            to: x,
            target: t,
            rel: "noreferrer",
            reloadDocument: _,
            tabIndex: f,
            onClick: e => {
              b(S), g(e)
            },
            onNavigate: h,
            children: [a, d && (0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateadbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, m.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platee49e290899be3c888ca5a4b6b13736a1",
                children: v.formatMessage(o.nofications_new)
              })
            })]
          })
        },
        D = e => {
          let {
            id: a,
            text: t,
            target: c,
            href: r,
            location: l,
            ga: o,
            hasNotifications: n = !1,
            dataTestId: i,
            children: d = [],
            activeSubNavId: g,
            setActiveSubNavId: u,
            setSubNavExtraHeight: f,
            reloadDocument: _ = !1,
            onClickCallback: h = (() => {}),
            onNavigate: b
          } = e;
          const {
            windowWidth: k,
            windowHeight: x
          } = (0, v.useWindowResize)(), {
            track: S
          } = (0, p.useGtmTrack)(), {
            navOpen: C
          } = (0, p.useRockstarUserState)(), N = (0, s.useRef)(null), [M, w] = (0, s.useState)(0), [y, j] = (0, s.useState)(0), [I, L] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            g !== a && !1 === I && L(!0), g === a && L(!1)
          }), [g]), (0, s.useEffect)((() => {
            if (!N.current) return;
            w(N?.current?.scrollHeight);
            const e = window.getComputedStyle(N.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [N, k, x]), d.length > 0 ? (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsxs)("button", {
              className: "rockstargames-modules-gtao-license-platecc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": i || "menuButton",
              title: t,
              tabIndex: C ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), S(o), g === a ? (u(-1), f(0)) : (u(a), f(M + y + y))
              },
              children: [(0, m.jsx)("span", {
                className: "rockstargames-modules-gtao-license-plateb94730a01d5e9223b69cbc2f20f23bcd",
                children: t
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-gtao-license-plateff271a72fe259d74068b4f4d90db08bd"
              })]
            }, t), (0, m.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platecbf6e64eadb6f965877129d539aa2dcd",
              ref: N,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${M}px`
              },
              children: d.map((e => (0, s.createElement)($, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !C ? -1 : 0,
                onNavigate: b
              })))
            })]
          }) : (0, m.jsx)($, {
            text: t,
            target: c,
            href: r,
            location: l,
            ga: o,
            hasNotifications: n,
            dataTestId: i,
            isSubLink: !1,
            onClickCallback: h,
            tabIndex: C ? 0 : -1,
            reloadDocument: _,
            onNavigate: b
          })
        },
        z = e => {
          let {
            sc: a,
            location: t,
            onNavigate: r
          } = e;
          const {
            windowWidth: l,
            windowHeight: n
          } = (0, v.useWindowResize)(), i = (0, c.useIntl)(), {
            languageSelectorOpened: d,
            setLanguageSelectorOpened: g,
            activeSubNavId: f,
            setActiveSubNavId: _,
            subNavExtraHeight: h,
            setSubNavExtraHeight: k
          } = E(), {
            setSelectedCharacterTuple: x,
            navOpen: S
          } = (0, p.useRockstarUserState)(), C = (0, v.useLocale)(), N = (0, v.toScLocaleString)(C), [M, w] = (0, s.useState)(""), y = `${a.login}?returnUrl=${M}&lang=${N}`, j = `${a.signup}&returnUrl=${M}&lang=${N}`, I = (0, s.useMemo)((() => (0, u.A)()), []), L = (0, s.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(o.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: o.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(o.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: o.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, O(e)])(i, y, j);
            return e
          }), [i, y, j, I]), [T, R] = (0, s.useState)(0), U = (0, s.createRef)(), $ = () => {
            if (U.current) {
              const {
                current: e
              } = U, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), R(a + e)
              } else R(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            w(e)
          }), [JSON.stringify(t)]), (0, s.useEffect)((() => {
            x(!1)
          }), []), (0, s.useEffect)((() => {
            $(), P()((() => {
              setTimeout($, 0)
            }), 300)
          }), [l, n]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platef300d66bd02f52ac564238ca6125a091",
              children: (0, m.jsx)("div", {
                className: "rockstargames-modules-gtao-license-plateac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: U,
                style: {
                  "--navWrap-max-height": `${h+T}px`
                },
                children: L.map((e => (0, s.createElement)(D, {
                  ...e,
                  activeSubNavId: f,
                  setActiveSubNavId: _,
                  setSubNavExtraHeight: k,
                  onNavigate: r,
                  key: e.text
                })))
              })
            }), (0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platef30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: S ? null : "hidden"
              },
              children: (0, m.jsx)(b, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: d,
                setLanguageSelectorOpened: e => {
                  _(-1), g(e)
                },
                defaultMessage: "Select a Language",
                location: t
              })
            })]
          })
        };
      var B = t(5315);
      const H = {
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "Xbox One",
          xboxsx: "Xbox Series X|S"
        },
        W = "CharacterButton:characterName",
        A = "CharacterButton:platform",
        F = "CharacterButton:avatar",
        X = "CharacterButton:rankValue",
        V = e => {
          let {
            characterData: a,
            setMobileCardWidth: n,
            tabIndex: i
          } = e;
          const d = (0, c.useIntl)(),
            {
              currentCharId: g,
              setCurrentCharId: u
            } = (0, p.useRockstarUserState)(),
            {
              track: f
            } = (0, p.useGtmTrack)(),
            _ = (0, s.createRef)(),
            {
              platform: h,
              platformUsername: b,
              mugshotUrl: k,
              stats: v
            } = a,
            [x, S] = (0, s.useState)(k),
            [C] = (0, s.useState)(a.index),
            N = r(h, "large"),
            M = g === a.index;
          return (0, s.useEffect)((() => {
            _.current && n && n(_?.current?.offsetWidth)
          }), [_]), (0, m.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-plateb26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": M,
            onClick: e => {
              e.stopPropagation(), u(C), f({
                event: "character_selector_select",
                text: H[h] ?? "",
                position: C
              })
            },
            ref: _,
            tabIndex: i,
            children: [(0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plated79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, m.jsx)("img", {
                src: x,
                alt: d.formatMessage(o.profile_selector_mugshot, {
                  userName: b
                }),
                onError: () => {
                  S(t(5931))
                },
                "data-testid": F
              })
            }), (0, m.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plateed30f2b92b3fc2937e7278409208872f",
              children: [(0, m.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platea6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, m.jsx)("img", {
                  src: N.src,
                  alt: N.alt,
                  "data-testid": A
                }), (0, m.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-platec3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": W,
                  children: b
                })]
              }), (0, m.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platef5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, m.jsxs)("div", {
                  className: "rockstargames-modules-gtao-license-platec9300f34b82bbdffb7006ff32247adff",
                  children: [(0, m.jsx)("img", {
                    className: "rockstargames-modules-gtao-license-platefaa7b2808fb96fa02fd2e99be36df8e6",
                    src: l(parseInt(v.overview.rank.value)),
                    alt: d.formatMessage(o.profile_selector_rp_icon)
                  }), (0, m.jsx)("span", {
                    "data-testid": X,
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        };
      let G = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        J = function(e) {
          return e.pc = "pc", e.ps4 = "ps4", e.ps5 = "ps5", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e
        }({});
      const K = e => {
          let {
            tagSize: a,
            platform: t
          } = e;
          const {
            src: s,
            alt: c
          } = ((e, a) => {
            const t = a === G.small;
            switch (e) {
              case J.pc:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg", alt: "PC"
                };
              case J.ps4:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
                };
              case J.ps5:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
                };
              case J.xboxOne:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
                };
              case J.xboxSeries:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
                };
              default:
                return {
                  src: "", alt: ""
                }
            }
          })(t, a);
          return (0, m.jsx)("img", {
            className: "rockstargames-modules-gtao-license-plateea83a9d30b1ce0442bd3f94257fc0905",
            "data-testid": "platform-tag",
            "data-platform": t,
            "data-tag-size": a,
            src: s,
            alt: c
          })
        },
        Y = {
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
        q = "ProfileCard:characterName",
        Q = "ProfileCard:avatar",
        Z = "ProfileCard:bankValue",
        ee = "ProfileCard:cashValue",
        ae = "ProfileCard:rankValue",
        te = e => {
          let {
            character: a
          } = e;
          const {
            data: r
          } = (0, p.useRockstarUser)(), {
            track: n
          } = (0, p.useGtmTrack)(), i = (0, c.useIntl)(), [d, g] = (0, s.useState)([]), [u, f] = (0, s.useState)(null), [_, h] = (0, s.useState)(null), [b, k] = (0, s.useState)(!1), [v, x] = (0, s.useState)(-1), [S, C] = (0, s.useState)([]), [N, M] = (0, s.useState)(0), w = t(5931), {
            platform: y
          } = a, [j, I] = (0, s.useState)("0"), [L, E] = (0, s.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), P = () => {
            O((0, m.jsx)("img", {
              src: w,
              alt: i.formatMessage(o.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [R, O] = (0, s.useState)((0, m.jsx)("img", {
            className: Y.avatarImg,
            src: a.mugshotUrl,
            alt: i.formatMessage(o.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: P,
            "data-testid": Q
          }));
          (0, s.useEffect)((() => {
            g(r.crews ?? [])
          }), [r.crews]), (0, s.useEffect)((() => {
            O((0, m.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: P,
              "data-testid": Q
            })), I(T(a.stats.overview.bank.value)), E(T(a.stats.overview.cash.value)), M(parseInt(a.stats.overview.rank.value))
          }), [a, r.nickname]), (0, s.useEffect)((() => {
            d && d.forEach((e => {
              !0 === e.isPrimary && (f(e.crewTag), h(e.crewColour), x(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [d]), (0, s.useEffect)((() => {
            const e = [];
            if (!b && v > -1)
              for (let a = 5; a > v; a -= 1) e.push((0, m.jsx)("div", {
                className: Y.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== _ ? _ : ""
                }
              }, `crewrankbar-${a}`));
            C(e)
          }), [v, b, _]);
          const U = e => {
            e.stopPropagation(), n({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, m.jsxs)("div", {
            className: Y.profileDetails,
            onClick: U,
            onKeyUp: U,
            role: "button",
            tabIndex: -1,
            children: [(0, m.jsxs)("div", {
              className: Y.avatar,
              children: [R, (0, m.jsx)("div", {
                className: Y.avatarPlatform,
                "data-platform": a.platform,
                children: (0, m.jsx)(K, {
                  platform: y,
                  tagSize: G.large
                })
              })]
            }), (0, m.jsxs)("div", {
              className: Y.profileStats,
              children: [(0, m.jsx)("div", {
                className: Y.scNames,
                children: (0, m.jsxs)("div", {
                  className: Y.scTagsNames,
                  children: [(0, m.jsx)("span", {
                    className: Y.scUserName,
                    "data-testid": q,
                    children: a.platformUsername
                  }), u && (0, m.jsxs)("span", {
                    className: Y.scCrewName,
                    "data-arrow-tag": b,
                    children: [u, !b && (0, m.jsx)("div", {
                      className: Y.scCrewRankBar,
                      children: S
                    })]
                  })]
                })
              }), (0, m.jsxs)("div", {
                className: Y.scProgress,
                children: [(0, m.jsxs)("div", {
                  className: Y.scRpLevel,
                  children: [(0, m.jsx)("img", {
                    className: Y.scRpIcon,
                    src: l(N),
                    alt: i.formatMessage(o.profile_selector_rp_icon)
                  }), (0, m.jsx)("span", {
                    "data-testid": ae,
                    children: a.stats.overview.rank.value
                  })]
                }), (0, m.jsxs)("div", {
                  className: Y.scMoney,
                  children: [(0, m.jsxs)("span", {
                    className: Y.scCash,
                    "data-testid": ee,
                    children: ["$", L]
                  }), (0, m.jsxs)("span", {
                    className: Y.scBank,
                    "data-testid": Z,
                    children: ["$", j]
                  })]
                })]
              })]
            })]
          })
        },
        se = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: c = 17,
            slideChangeCallback: r = null,
            slideClickCallback: l = null,
            children: o = [],
            disablePager: n = !1,
            disableSwiper: i = !1
          } = e;
          const d = (0, s.createRef)(),
            g = (0, B.ri)(d, !1),
            [u, f] = (0, s.useState)(!1),
            [p, _] = (0, s.useState)(0),
            [h, b] = (0, s.useState)(0),
            [k, v] = (0, s.useState)([c]),
            [x, S] = (0, s.useState)(k[0]),
            [C, N] = (0, s.useState)(252),
            [M, w] = (0, s.useState)(0),
            [y, j] = (0, s.useState)([]),
            [I, L] = (0, s.useState)([]),
            [E, T] = (0, s.useState)(!1),
            P = e => {
              if (!0 === u || !0 === i) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            R = e => {
              if (!0 === u || 0 === h || !0 === i) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > h ? 1 : -1,
                c = Math.abs(h - t);
              c > a ? (s > 0 ? (() => {
                if (!0 === u) return;
                f(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                _(e), S(k[e]), r && r(e)
              })() : (() => {
                if (!0 === u) return;
                f(!0);
                let e = p + 1 >= k.length ? k.length - 1 : p + 1;
                e < 0 && (e = 0), _(e), S(k[e]), r && r(e)
              })(), b(0)) : S(k[p] + c * s)
            },
            O = () => {
              !0 !== u && !0 !== i && (f(!0), !0 !== u && (S(k[p]), b(0)))
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
            !1 !== u && setTimeout((() => {
              f(!1)
            }), t)
          }), [u, t]), (0, s.useEffect)((() => {
            v(o.map(((e, a) => (e => {
              let a = 0;
              const t = o.length;
              return 1 === t ? .5 * g - .5 * C - 2 * c + M : (0 === e && (a = c - e * C), e === t - 1 && t > 1 && (a = t * C * -1 + (g - (c - M))), e > 0 && e < t - 1 && (a = e * C * -1 + (.5 * g - .5 * C + .5 * M)), a)
            })(a)))), 1 === o.length ? T(!0) : T(!1)
          }), [d.current, o, g]), (0, s.useEffect)((() => {
            const e = (a = p, o.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            L(e)
          }), [o, p]), (0, s.useEffect)((() => {
            !0 !== n && !0 !== i || S(k[0])
          }), [i, n, k]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateb794a0e12537ad5fd506353133b9d60a",
              ref: d,
              onTouchStart: P,
              onTouchMove: R,
              onTouchEnd: O,
              onMouseDown: P,
              onMouseMove: R,
              onMouseUp: O,
              onClick: () => {
                null !== l && l(p)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, m.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platec1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": u,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${x}px)`
                },
                children: o.map(((e, a) => (0, m.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-platedd4bcd955436c8a6982ee16756f7fd8b",
                  ref: y[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), I.length > 1 && !1 === n && (0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platee8e5249dac92a2bc76788d0fe7d7dfb7",
              children: I.map(((e, a) => (0, m.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platef64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, a)))
            })]
          })
        },
        ce = {
          pillBtn: "rockstargames-modules-gtao-license-plateb4f0b55680e047d303f82f34594abd96",
          selected: "rockstargames-modules-gtao-license-plateed6126bd2f36579f2b8035e7c6579eb7",
          profile: "rockstargames-modules-gtao-license-platee506a7deb95c0b0c9988325cc857ea9a",
          scCharacterSelector: "rockstargames-modules-gtao-license-platec3ea8d575c892277f23ad5b589977862",
          scCharacterSelectBtn: "rockstargames-modules-gtao-license-plateea15428b850bf436adda6f1dd8ac1af9",
          open: "rockstargames-modules-gtao-license-platec5ffa3cbaa36329b72b3d928f9739849",
          scCharacterList: "rockstargames-modules-gtao-license-platea84bbdd60e615baed0172e6b960c5d32",
          nav: "rockstargames-modules-gtao-license-plateca9118e28091523e6679a3b95054fe93",
          languageSelector: "rockstargames-modules-gtao-license-plateb71a5b5521e679bcab20ec6302253996",
          navHeader: "rockstargames-modules-gtao-license-platefa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-modules-gtao-license-platece91ee6ebb491174a4ccb4be628aaae7"
        },
        re = e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: r,
            refCharacterListDesktop: l,
            menuPadding: n,
            longCharList: i,
            setLongCharList: d,
            isMobileMode: g,
            setIsMobileMode: f,
            location: _,
            onNavigate: h
          } = e;
          const {
            windowWidth: k,
            windowHeight: x
          } = (0, v.useWindowResize)(), S = (0, c.useIntl)(), {
            languageSelectorOpened: C,
            setLanguageSelectorOpened: N,
            activeSubNavId: M,
            setActiveSubNavId: w,
            subNavExtraHeight: y,
            setSubNavExtraHeight: j,
            navOpened: I,
            setScNavOpened: L
          } = E(), [T, U] = (0, s.useState)(""), {
            webSettings: $
          } = (0, v.useRockstarWebSettings)(), {
            track: z
          } = (0, p.useGtmTrack)(), H = (0, v.useRockstarTokenPing)(), {
            data: W,
            loggedIn: A
          } = (0, p.useRockstarUser)(), {
            charactersNeeded: F,
            currentCharId: X,
            hasNotifications: G,
            navOpen: J,
            setCurrentCharId: K,
            setHasNotifications: Y,
            setSelectedCharacterTuple: q,
            setUserData: Q
          } = (0, p.useRockstarUserState)(), [Z, ee] = (0, s.useState)(null), [ae, re] = (0, s.useState)(!1), [le, oe] = (0, s.useState)(!1), [ne, ie] = (0, s.useState)(0), de = (0, s.createRef)(), me = (0, B.ri)(de, !1), ge = (0, s.createRef)(), [ue, fe] = (0, s.useState)(0), [pe, _e] = (0, s.useState)([]), [he, be] = (0, s.useState)(244), ke = (0, s.useRef)(null), ve = (0, s.useMemo)((() => (0, u.A)()), []), xe = (0, s.useMemo)((() => ((e, a, t, s, c) => [{
            text: e.formatMessage(o.sc_link_activity_feed),
            location: {
              domain: u.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...R,
              text: o.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(o.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(o.sc_link_settings),
              location: {
                domain: u.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...R,
                text: o.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(o.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...R,
                text: o.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(o.sc_link_messages),
              location: {
                domain: u.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...R,
                text: o.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(o.sc_link_game_activation),
              location: {
                domain: u.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...R,
                text: o.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(o.sc_link_notifications),
            location: {
              domain: u.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...R,
              text: o.sc_link_notifications.defaultMessage,
              location: {
                domain: u.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(o.sc_link_crews),
            location: {
              domain: u.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...R,
              text: o.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(o.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(o.sc_link_my_friends),
              location: {
                domain: u.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...R,
                text: o.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(o.sc_link_import_friends),
              location: {
                domain: u.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...R,
                text: o.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(o.sc_link_find_friends),
              location: {
                domain: u.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...R,
                text: o.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, O(e), {
            text: e.formatMessage(o.sc_link_log_out),
            href: `${a.logout}?returnUrl=${c}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...R,
              text: o.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(S, a, W, G, T, window)), [S, a, W, G, T, ve]), Se = () => {
            oe(n + he * ne < me)
          }, Ce = () => {
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
            ve.currentSite?.site === u.C.socialClub && (e = encodeURIComponent("/")), U(e)
          }), [_]), (0, s.useEffect)((() => {
            _e(W?.characters?.[F] ?? [])
          }), [W, F]), (0, s.useEffect)((() => {
            W && Q(W)
          }), [W]), (0, s.useEffect)((() => {
            const e = W?.characters?.gtao ?? [];
            if (null !== A && !e.length) return void q(!1);
            if (null == X || !e.length) return;
            const a = e?.[X] ?? e?.[0] ?? null;
            q(!!a?.platform && [a.platform, a.characterSlot])
          }), [X, W, A]), (0, s.useEffect)((() => {
            (async () => {
              if (!W?.id || !J) return;
              const {
                count: e
              } = await (0, v.coreScApiFetch)("notification/count", {
                pingBearer: H
              });
              Y(e > 0)
            })()
          }), [W, J]), (0, s.useEffect)((() => {
            Se()
          }), [he]), (0, s.useEffect)((() => {
            r(!0), f(k < 768), f(k < 768 || x < 649)
          }), [k, x]), (0, s.useEffect)((() => {
            let e = pe.length - 1;
            e < 0 && (e = 0), ie(e);
            const a = pe.length > 0 ? pe[X] ?? pe[0] : null;
            a && (ee(a), pe.length > 1 ? re(!0) : re(!1), d(pe.length - 1 > 3))
          }), [X, pe]), (0, s.useEffect)((() => {
            Se()
          }), [ne, g, k, pe]), (0, s.useEffect)((() => {
            Ce(), P()((() => {
              setTimeout(Ce, 0)
            }), 300)
          }), [k, x]), (0, s.useEffect)((() => {
            const e = $?.currentCharId ?? 0;
            e !== X && K(Math.max(0, Math.min(e, pe.length - 1)))
          }), [pe, $]), (0, m.jsxs)(m.Fragment, {
            children: [null !== Z && "gtao" === F && (0, m.jsxs)("div", {
              className: ce.scProfile,
              ref: ke,
              tabIndex: -1,
              "aria-label": S.formatMessage(o.profile_selector_profile_card),
              children: [(0, m.jsx)(te, {
                s: ce,
                character: Z
              }), !0 === ae && (0, m.jsxs)("div", {
                className: ce.scCharacterSelector,
                children: [(0, m.jsx)("button", {
                  className: ce.scCharacterSelectBtn,
                  "aria-hidden": !J,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    r(a), z({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, m.jsx)("span", {
                    children: (0, m.jsx)(c.FormattedMessage, {
                      ...o.profile_selector_switch_character
                    })
                  })
                }), !g && (0, m.jsx)("div", {
                  className: ce.scCharacterList,
                  "data-long-list": i,
                  "aria-hidden": t,
                  ref: l,
                  children: pe.map((e => (0, m.jsx)(V, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: be
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), g && (0, m.jsx)("div", {
                  className: ce.scCharacterList,
                  "data-single-item": 2 === pe.length,
                  "data-swiper-disabled": le,
                  "aria-hidden": t,
                  ref: de,
                  children: (0, m.jsx)(se, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      z({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: le,
                    disableSwiper: le,
                    children: pe.filter(((e, a) => a !== X)).map((e => (0, s.createElement)(V, {
                      characterData: e,
                      setMobileCardWidth: be,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, m.jsxs)("nav", {
              className: ce.nav,
              "aria-hidden": !J,
              children: [(0, m.jsx)("button", {
                className: ce.navHeader,
                type: "button",
                "data-opened": I,
                "data-nav-opened": J,
                tabIndex: I ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), I || L(!0)
                },
                "data-testid": "playerButton",
                children: (0, m.jsx)("span", {
                  children: W.nickname
                })
              }), (0, m.jsx)("div", {
                className: ce.navWrap,
                "data-opened": I,
                "data-logged-in": "true",
                ref: ge,
                style: {
                  "--navWrap-max-height": `${ue+y}px`
                },
                children: xe.map(((e, a) => (0, s.createElement)(D, {
                  ...e,
                  id: a,
                  activeSubNavId: M,
                  setActiveSubNavId: w,
                  setSubNavExtraHeight: j,
                  onNavigate: h,
                  key: e.text
                })))
              })]
            }), (0, m.jsx)("div", {
              className: ce.scLanguageSelector,
              style: {
                visibility: J ? null : "hidden"
              },
              children: (0, m.jsx)(b, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: C,
                setLanguageSelectorOpened: N,
                location: _
              })
            })]
          })
        },
        le = {
          menu: "rockstargames-modules-gtao-license-platec0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-modules-gtao-license-platec31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-modules-gtao-license-platec5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-modules-gtao-license-plateb8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-modules-gtao-license-plateff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-gtao-license-plateb49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-modules-gtao-license-plateeff8c1d4bf675accdb7d952aba0174dc"
        },
        oe = (0, v.getConfigForDomain)(),
        ne = d((e => {
          let {
            location: a,
            onNavigate: r
          } = e;
          const {
            windowHeight: l
          } = (0, v.useWindowResize)(), n = (0, c.useIntl)(), {
            languageSelectorOpened: i,
            setLanguageSelectorOpened: d,
            setActiveSubNavId: g,
            navOpened: u,
            setAccountNavOpened: f,
            charListHidden: _,
            setCharListHidden: h
          } = E(), [b, x] = (0, s.useState)(!1), {
            navHidden: S = !1
          } = (0, v.useState)(), {
            loggedIn: C
          } = (0, p.useRockstarUser)(), {
            currentCharId: N,
            navOpen: M,
            setNavOpen: w,
            userData: y
          } = (0, p.useRockstarUserState)(), {
            track: j
          } = (0, p.useGtmTrack)(), [I, L] = (0, s.useState)(!1), T = (0, s.useRef)(), [P, R] = (0, s.useState)(0), O = (0, s.createRef)(), [U, $] = (0, s.useState)(!1), [D, B] = (0, s.useState)(0), [H, W] = (0, s.useState)(!1), {
            mutateWebSettings: A,
            webSettings: F
          } = (0, v.useRockstarWebSettings)(), X = (0, s.useCallback)((e => {
            h(e), T.current && !0 === e && (T.current.scrollTop = 0)
          }), [T]);
          return (0, s.useEffect)((() => {
            null !== N && F.currentCharId !== N && A({
              key: "currentCharId",
              value: N
            }), !1 === C ? A({
              key: "currentCharId",
              value: null
            }) : C && !y && j({
              event: "account_synced"
            })
          }), [N, C]), (0, s.useEffect)((() => {
            T.current && (!1 === _ && !1 === I && (T.current.style.height = `${T.current.scrollHeight}px`), !0 === _ && (T.current.style.height = null))
          }), [_, T, I]), (0, s.useEffect)((() => {
            const e = () => {
                w(!1), X(!0)
              },
              a = a => {
                const t = O?.current && a?.composedPath().includes(O.current);
                M && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }), [O]), (0, s.useEffect)((() => {
            w(!1), X(!0)
          }), [S]), (0, s.useEffect)((() => {
            if (O.current) {
              const {
                current: e
              } = O, a = window.getComputedStyle(e);
              R(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [O]), (0, s.useEffect)((() => {
            W(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            O.current && x(O?.current?.scrollHeight >= l)
          }), [O, l]), (0, s.useEffect)((() => {
            M || (g(-1), d(!1))
          }), [M]), (0, s.useEffect)((() => {
            i && (_ || X(!0), u && (f(!1), g(-1)))
          }), [i]), (0, s.useEffect)((() => {
            u && (i && d(!1), _ || X(!0))
          }), [u]), void 0 === C ? null : (0, m.jsxs)(k.A, {
            enabled: !!M,
            removeScrollBar: !1,
            children: [(0, m.jsxs)("div", {
              className: [le.menu, M ? le.navOpen : ""].join(" "),
              "data-logged-in": C,
              "data-mac-browser": H,
              "data-scroll-mode": b,
              ref: O,
              "aria-hidden": !M,
              children: [(0, m.jsx)("button", {
                className: le.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  B(a)
                },
                onTouchMove: e => {
                  if (0 === D) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(D - a) > 1 && (B(0), w(!1))
                },
                children: (0, m.jsx)("img", {
                  className: le.dragHandle,
                  src: t(35902),
                  alt: n.formatMessage(o.sc_menu_drag_handle)
                })
              }), C ? (0, m.jsx)(re, {
                sc: oe,
                charListHidden: _,
                hideCharacterList: X,
                refCharacterListDesktop: T,
                menuPadding: P,
                longCharList: I,
                setLongCharList: L,
                isMobileMode: U,
                setIsMobileMode: $,
                location: a,
                onNavigate: r
              }) : (0, m.jsx)(z, {
                sc: oe,
                navOpen: M,
                location: a,
                onNavigate: r
              })]
            }), (0, m.jsx)("div", {
              className: [le.scOverlay, M ? le.navOpen : ""].join(" "),
              "data-logged-in": C
            })]
          })
        })),
        ie = d((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const r = (0, c.useIntl)(),
            {
              data: l,
              loggedIn: n
            } = (0, p.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: d,
              navOpen: g,
              setNavOpen: u
            } = (0, p.useRockstarUserState)(),
            {
              track: f
            } = (0, p.useGtmTrack)(),
            [_, h] = (0, s.useState)(),
            [b, k] = (0, s.useState)(!1),
            [v, x] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            x(l?.characters?.[i] ?? [])
          }), [l, i]);
          const S = (0, s.useCallback)((e => {
            e.stopPropagation(), u(!g), 1 == !g && a(null), f({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: g ? "close" : "open"
            })
          }), [g]);
          return (0, s.useEffect)((() => {
            k(!!v?.[d]?.mugshotUrl)
          }), [v, d]), (0, s.useEffect)((() => {
            h((() => {
              switch (n) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return v?.[d]?.mugshotUrl ?? l?.avatar
              }
            })())
          }), [l, v, d, n]), _ ? (0, m.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-plateee811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": r.formatMessage(g ? o.sc_menu_close : o.sc_menu_open),
            "aria-expanded": g,
            type: "button",
            onClick: S,
            "data-mugshot": b,
            "data-testid": "avatarMenuButton",
            "data-logged-in": Boolean(n),
            children: [(0, m.jsx)("img", {
              className: "rockstargames-modules-gtao-license-platea917b58ca28b68550a1aa5d99c7eb998",
              src: _,
              alt: l?.nickname || ""
            }), n && (0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platec06123ceae7ca4759ec8b1a5197823db",
              children: (0, m.jsx)(K, {
                platform: v?.[d]?.platform,
                tagSize: G.small
              })
            }), n && (0, m.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platec4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": v?.[d]?.platform ?? null
            })]
          }) : null
        })),
        de = {
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
        me = e => {
          let {
            charListHidden: a,
            hideCharacterList: t,
            refCharacterListDesktop: r,
            menuPadding: l,
            longCharList: n,
            setLongCharList: i,
            isMobileMode: d
          } = e;
          const g = (0, c.useIntl)(),
            {
              windowWidth: u
            } = (0, v.useWindowResize)(),
            {
              track: f
            } = (0, p.useGtmTrack)(),
            {
              charactersNeeded: _,
              currentCharId: h,
              navOpen: b,
              setCurrentCharId: k,
              setSelectedCharacterTuple: x,
              setUserData: S,
              setCharacterAvatar: C,
              setCharacterPlatform: N
            } = (0, p.useRockstarUserState)(),
            [M, w] = (0, s.useState)(null),
            [y, j] = (0, s.useState)([]),
            [I, L] = (0, s.useState)(!1),
            [E, T] = (0, s.useState)(0),
            [P, R] = (0, s.useState)(244),
            [O, U] = (0, s.useState)(!1),
            $ = (0, s.useRef)(null),
            D = (0, s.createRef)(),
            z = (0, B.ri)(D, !1),
            {
              webSettings: H
            } = (0, v.useRockstarWebSettings)(),
            {
              data: W,
              loggedIn: A
            } = (0, p.useRockstarUser)({
              fetchCharacters: !0
            }),
            F = () => {
              U(l + P * E < z)
            };
          return (0, s.useEffect)((() => {
            F()
          }), [P]), (0, s.useEffect)((() => {
            F()
          }), [E, d, u, y]), (0, s.useEffect)((() => {
            j(W.characters?.[_] ?? [])
          }), [W, _]), (0, s.useEffect)((() => {
            W && S(W)
          }), [W]), (0, s.useEffect)((() => {
            const e = W?.characters?.gtao;
            if (null !== A && !e?.length) return void x(!1);
            if (null == h || !e?.length) return;
            const a = e?.[h] ?? e?.[0] ?? null;
            x(!!a?.platform && [a.platform, a.characterSlot])
          }), [h, W, A]), (0, s.useEffect)((() => {
            let e = y.length - 1;
            e < 0 && (e = 0), T(e);
            const a = y.length > 0 ? y[h] ?? y[0] : null;
            if (a) return w(a), C(a.mugshotUrl), N(a.platform), y.length > 1 ? L(!0) : L(!1), i(y.length - 1 > 3), () => {
              C(""), N("")
            }
          }), [h, y]), (0, s.useEffect)((() => {
            const e = H?.currentCharId ?? 0;
            e !== h && k(Math.max(0, Math.min(e, y.length - 1)))
          }), [y, H]), M && "gtao" === _ ? (0, m.jsxs)("div", {
            className: de.profile,
            ref: $,
            tabIndex: -1,
            "aria-label": g.formatMessage(o.profile_selector_profile_card),
            children: [(0, m.jsx)(te, {
              s: de,
              character: M
            }), !0 === I && (0, m.jsxs)("div", {
              className: de.scCharacterSelector,
              children: [(0, m.jsx)("button", {
                className: de.scCharacterSelectBtn,
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
                  children: (0, m.jsx)(c.FormattedMessage, {
                    ...o.profile_selector_switch_character
                  })
                })
              }), !1 === d && (0, m.jsx)("div", {
                className: de.scCharacterList,
                "data-long-list": n,
                "aria-hidden": a,
                ref: r,
                children: y.map((e => (0, m.jsx)(V, {
                  tabIndex: a ? -1 : 0,
                  characterData: e,
                  setMobileCardWidth: R
                }, e.mugshotUrl)))
              }), !0 === d && (0, m.jsx)("div", {
                className: de.scCharacterList,
                "data-single-item": 2 === y.length,
                "data-swiper-disabled": O,
                "aria-hidden": a,
                ref: D,
                children: (0, m.jsx)(se, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    f({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  disablePager: O,
                  disableSwiper: O,
                  children: y.filter(((e, a) => a !== h)).map((e => (0, s.createElement)(V, {
                    characterData: e,
                    setMobileCardWidth: R,
                    key: e.mugshotUrl,
                    tabIndex: a ? -1 : 0
                  })))
                })
              })]
            })]
          }) : null
        }
    },
    35902: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    32810: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    5931: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    50702: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    7166: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    69743: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    71070: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    43777: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    82864: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    348: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    12541: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    17024: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    24963: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    15917: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    89697: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    26563: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    58662: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);