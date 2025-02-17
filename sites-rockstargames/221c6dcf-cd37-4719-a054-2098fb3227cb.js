! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "221c6dcf-cd37-4719-a054-2098fb3227cb", e._sentryDebugIdIdentifier = "sentry-dbid-221c6dcf-cd37-4719-a054-2098fb3227cb")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [672], {
    85650: (e, a, s) => {
      s.r(a), s.d(a, {
        CharacterCard: () => g,
        LanguageSelector: () => h,
        Menu: () => ie,
        MenuButton: () => le,
        ProfileSwitcher: () => me
      });
      var t = s(62229),
        r = s(81788);
      const c = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: s(50702),
                alt: "PC"
              } : {
                src: s(82864),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: s(7166),
                alt: "PS4"
              } : {
                src: s(348),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: s(69743),
                alt: "PS5"
              } : {
                src: s(12541),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: s(71070),
                alt: "Xbox One"
              } : {
                src: s(17024),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: s(43777),
                alt: "Xbox Series X|S"
              } : {
                src: s(24963),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        o = e => s(e < 100 ? 15917 : e > 99 && e < 500 ? 89697 : e > 499 && e < 750 ? 58662 : 26563),
        n = (0, r.defineMessages)({
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
        i = {
          pillBtn: "rockstargames-sites-rockstargamesb618569985ae824a0ad12179a3fc1d73",
          selected: "rockstargames-sites-rockstargamese1a2f9a25bb7f66968281e2bc4e4de88",
          scCharacterCard: "rockstargames-sites-rockstargamesb5c76acf3bb09d7897375c618e9b0a12",
          avatar: "rockstargames-sites-rockstargamesd6d3f262555eafb7d674aaf38e8ddfd6",
          scCharNames: "rockstargames-sites-rockstargamescb995eda97ef905857c8d886edcf0897",
          scCharacterStats: "rockstargames-sites-rockstargamesa68d43553c702327a295c974a9c5e67b",
          scUserName: "rockstargames-sites-rockstargamesad1b6a52da2116461c0d8b9c63b8ee28",
          scRpLevel: "rockstargames-sites-rockstargamesaf42f06ddb8cff176be6fcb31e17271a",
          scRpIcon: "rockstargames-sites-rockstargamesf9a042c11d2e6a8ed1d5e78f40abd88d"
        },
        l = JSON.parse('{"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","rp_icon":"RP Category","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        d = e => (0, r.withIntl)(e, l);
      var m = s(91029);
      const g = d((e => {
        let {
          characterData: a
        } = e;
        const l = (0, r.useIntl)(),
          {
            platform: d,
            platformUsername: g,
            mugshotUrl: f,
            stats: u
          } = a,
          [_, k] = (0, t.useState)(f),
          p = c(d, "large");
        return (0, m.jsxs)("div", {
          className: i.scCharacterCard,
          children: [(0, m.jsx)("div", {
            className: i.avatar,
            "data-size": "small",
            children: (0, m.jsx)("img", {
              src: _,
              alt: l.formatMessage(n.profile_selector_mugshot, {
                userName: g
              }),
              onError: () => {
                k(s(5931))
              }
            })
          }), (0, m.jsx)("div", {
            className: i.scCharacterStats,
            children: (0, m.jsxs)("div", {
              className: i.scCharNames,
              children: [(0, m.jsx)("img", {
                src: p.src,
                alt: p.alt
              }), (0, m.jsx)("div", {
                className: i.scUserName,
                "data-size": "small",
                children: g
              }), (0, m.jsx)("div", {
                className: i.scRp,
                children: (0, m.jsxs)("div", {
                  className: i.scRpLevel,
                  children: [(0, m.jsx)("img", {
                    className: i.scRpIcon,
                    src: o(u.overview.rank.value),
                    alt: l.formatMessage(n.profile_selector_rp_icon)
                  }), (0, m.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })
          })]
        })
      }));
      var f = s(6400),
        u = s(12363),
        _ = s(2918);
      const k = (0, r.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        p = {
          pillBtn: "rockstargames-sites-rockstargamese34929a5bcdda554c66b47a858ddd966",
          selected: "rockstargames-sites-rockstargamese1ba906f108faeb297753d39a8d21b8b",
          menuStyles: "rockstargames-sites-rockstargamesb641fac428f473cbb4593cd058a01953",
          languageSelector: "rockstargames-sites-rockstargamesa9dd8a9cb7334e205df4ac3b4392916d",
          open: "rockstargames-sites-rockstargamesaa1d94595080f833a35e29fbbe8fd01c",
          linkWrapper: "rockstargames-sites-rockstargamesb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-sites-rockstargamesc64b05a604b1a6be373d35cf01edba2e",
          selectBoxWrapper: "rockstargames-sites-rockstargamesdb1aead5717ba9dae1e272c3b7e6e801",
          selectBox: "rockstargames-sites-rockstargamesfe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-sites-rockstargamesae32febd9789e79c804b2679d25e8a65"
        },
        h = d((e => {
          let {
            theme: a,
            languageSelectorOpened: s,
            setLanguageSelectorOpened: c,
            location: o,
            parent: n = "footer",
            onLangChange: i
          } = e;
          const {
            track: l
          } = (0, _.useGtmTrack)(), d = (0, r.useIntl)(), [g, h] = (0, r.getLocale)(), [b, v] = (0, t.useState)(!1), x = (0, t.useRef)(null), [S, C] = (0, t.useState)(0), N = matchMedia("(hover: none) and (pointer: coarse)").matches, M = (0, t.useMemo)((() => (0, f.A)()), []), w = (0, t.useCallback)((e => {
            let a = o.pathname.replace(/^\/|\/$/g, "");
            const s = a.split("/");
            return r.locales.map((e => e.subdomaincom)).includes(s[0]) && (a = s.slice(1).join("/")), M.currentSite?.site === f.C.www ? "en" === e ? `${window.location.origin}/${a}${o.search}` : `${window.location.origin}/${e}/${a}${o.search}` : `${window.location.origin}/${a}${o.search}`
          }), [o]), y = e => {
            if (c && c(!1), g.subdomaincom === e || "none" === e) return void(c && c(!1));
            const a = r.locales.find((a => a.subdomaincom === e));
            if (a) {
              const s = w(e);
              l({
                event: "cta_other",
                link_url: s,
                text: e,
                element_placement: n
              }), h(a.iso), window.location.href = s, i?.({
                selectedLocale: a,
                track: l,
                parent: n
              })
            }
          };
          return (0, t.useEffect)((() => {
            void 0 !== s && !1 === s && !0 === b && v(!1)
          }), [s]), (0, t.useEffect)((() => {
            x.current && C(x.current.scrollHeight)
          }), [x]), (0, m.jsxs)("div", {
            className: [p.languageSelector, b ? p.open : ""].join(" "),
            "data-theme": a,
            children: [N && "sc-menu" === a && (0, m.jsx)("div", {
              className: p.selectBoxWrapper,
              children: (0, m.jsxs)("select", {
                className: p.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  y(a)
                },
                "aria-label": d.formatMessage(k.language_selector_default),
                children: [(0, m.jsx)("option", {
                  className: p.selectBoxOption,
                  value: "none",
                  children: (0, m.jsx)(r.FormattedMessage, {
                    ...k.language_selector_default
                  })
                }), r.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: s
                  } = e;
                  return (0, m.jsx)("option", {
                    className: p.selectBoxOption,
                    value: s,
                    children: a
                  }, `mobile-${s}`)
                }))]
              })
            }), (!N || "sc-menu" !== a) && (0, m.jsxs)(m.Fragment, {
              children: [(0, m.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), c && c(!b), v(!b)
                },
                type: "button",
                "aria-label": d.formatMessage(k.language_selector_default),
                children: [(0, m.jsx)("i", {}), (0, m.jsx)("span", {
                  children: (0, m.jsx)(r.FormattedMessage, {
                    ...k.language_selector_default
                  })
                })]
              }), (0, m.jsx)("div", {
                className: p.linkWrapper,
                ref: x,
                style: {
                  "--ls-linkWrapper-opened-height": `${S}px`
                },
                children: (0, m.jsx)("div", {
                  className: p.links,
                  children: r.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: s
                    } = e;
                    return (0, m.jsx)(t.Fragment, {
                      children: (0, m.jsx)(u.A, {
                        to: w(a),
                        onClick: (r = a, () => {
                          y(r)
                        }),
                        tabIndex: b ? 0 : -1,
                        children: s
                      })
                    }, s);
                    var r
                  }))
                })
              })]
            })]
          })
        }));
      var b = s(1597),
        v = s(95966);
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
            s = (0, v.useReactiveVar)(M),
            r = (0, v.useReactiveVar)(y),
            c = (0, v.useReactiveVar)(I);
          return (0, t.useEffect)((() => {
            c || (e && S(!1), r && (j(!1), N(-1)))
          }), [c]), (0, t.useEffect)((() => {
            !e && c && (r || j(!0))
          }), [e, c]), (0, t.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: S,
            activeSubNavId: a,
            setActiveSubNavId: N,
            subNavExtraHeight: s,
            setSubNavExtraHeight: w,
            navOpened: r,
            setAccountNavOpened: j,
            charListHidden: c,
            setCharListHidden: L
          })), [e, a, s, r, c])
        };
      var T = s(12296),
        P = s.n(T);
      const R = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        O = e => ({
          text: e.formatMessage(n.sc_link_help),
          target: "_self",
          ga: {
            ...R,
            text: n.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(n.sc_link_support),
            location: {
              domain: f.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...R,
              text: n.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(n.sc_link_legal),
            location: {
              domain: f.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...R,
              text: n.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(n.sc_link_privacy_policy),
            location: {
              domain: f.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...R,
              text: n.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(n.sc_link_cookies_policy),
            location: {
              domain: f.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...R,
              text: n.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(n.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...R,
              text: n.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(n.sc_link_do_not_sell_my_information),
            location: {
              domain: f.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...R,
              text: n.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        U = e => {
          let {
            to: a,
            target: s,
            className: t,
            onNavigate: r,
            onClick: c,
            reloadDocument: o,
            children: n,
            ...i
          } = e;
          const l = a?.startsWith("http");
          return (0, m.jsx)("a", {
            href: a,
            className: t,
            onClick: e => {
              c?.(e), l || o || (r ? (e.preventDefault(), r(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            target: s,
            ...i,
            children: n
          })
        },
        $ = e => {
          let {
            text: a,
            target: s,
            href: t,
            location: c,
            ga: o,
            dataTestId: i,
            isSubLink: l,
            hasNotifications: d = !1,
            onClickCallback: g = (() => {}),
            tabIndex: u,
            reloadDocument: k = !1,
            onNavigate: p
          } = e;
          const {
            track: h
          } = (0, _.useGtmTrack)(), b = (0, f.A)(), v = (0, r.useIntl)();
          let x = t;
          c && (x = c.domain === b.currentSite?.site ? c.path : `https://${b.sites[c.domain]}.rockstargames.com${c.path}`);
          const S = {
            ...o,
            link_url: x
          };
          return (0, m.jsxs)(U, {
            className: l ? "rockstargames-sites-rockstargamesc2233d027086d54af877493d7d0700bd" : "rockstargames-sites-rockstargamesf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": i || "menuLink",
            title: a,
            to: x,
            target: s,
            rel: "noreferrer",
            reloadDocument: k,
            tabIndex: u,
            onClick: e => {
              h(S), g(e)
            },
            onNavigate: p,
            children: [a, d && (0, m.jsx)("div", {
              className: "rockstargames-sites-rockstargamesadbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, m.jsx)("span", {
                className: "rockstargames-sites-rockstargamese49e290899be3c888ca5a4b6b13736a1",
                children: v.formatMessage(n.nofications_new)
              })
            })]
          })
        },
        D = e => {
          let {
            id: a,
            text: s,
            target: r,
            href: c,
            location: o,
            ga: n,
            hasNotifications: i = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: g,
            setActiveSubNavId: f,
            setSubNavExtraHeight: u,
            reloadDocument: k = !1,
            onClickCallback: p = (() => {}),
            onNavigate: h
          } = e;
          const {
            windowWidth: b,
            windowHeight: x
          } = (0, v.useWindowResize)(), {
            track: S
          } = (0, _.useGtmTrack)(), {
            navOpen: C
          } = (0, _.useRockstarUserState)(), N = (0, t.useRef)(null), [M, w] = (0, t.useState)(0), [y, j] = (0, t.useState)(0), [I, L] = (0, t.useState)(!0);
          return (0, t.useEffect)((() => {
            g !== a && !1 === I && L(!0), g === a && L(!1)
          }), [g]), (0, t.useEffect)((() => {
            if (!N.current) return;
            w(N?.current?.scrollHeight);
            const e = window.getComputedStyle(N.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [N, b, x]), d.length > 0 ? (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsxs)("button", {
              className: "rockstargames-sites-rockstargamescc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": l || "menuButton",
              title: s,
              tabIndex: C ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), S(n), g === a ? (f(-1), u(0)) : (f(a), u(M + y + y))
              },
              children: [(0, m.jsx)("span", {
                className: "rockstargames-sites-rockstargamesb94730a01d5e9223b69cbc2f20f23bcd",
                children: s
              }), (0, m.jsx)("span", {
                className: "rockstargames-sites-rockstargamesff271a72fe259d74068b4f4d90db08bd"
              })]
            }, s), (0, m.jsx)("nav", {
              className: "rockstargames-sites-rockstargamescbf6e64eadb6f965877129d539aa2dcd",
              ref: N,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${M}px`
              },
              children: d.map((e => (0, t.createElement)($, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !C ? -1 : 0,
                onNavigate: h
              })))
            })]
          }) : (0, m.jsx)($, {
            text: s,
            target: r,
            href: c,
            location: o,
            ga: n,
            hasNotifications: i,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: C ? 0 : -1,
            reloadDocument: k,
            onNavigate: h
          })
        },
        z = e => {
          let {
            sc: a,
            location: s,
            onNavigate: c
          } = e;
          const {
            windowWidth: o,
            windowHeight: i
          } = (0, v.useWindowResize)(), l = (0, r.useIntl)(), {
            languageSelectorOpened: d,
            setLanguageSelectorOpened: g,
            activeSubNavId: u,
            setActiveSubNavId: k,
            subNavExtraHeight: p,
            setSubNavExtraHeight: b
          } = E(), {
            setSelectedCharacterTuple: x,
            navOpen: S
          } = (0, _.useRockstarUserState)(), C = (0, v.useLocale)(), N = (0, v.toScLocaleString)(C), [M, w] = (0, t.useState)(""), y = `${a.login}?returnUrl=${M}&lang=${N}`, j = `${a.signup}&returnUrl=${M}&lang=${N}`, I = (0, t.useMemo)((() => (0, f.A)()), []), L = (0, t.useMemo)((() => {
            const e = ((e, a, s) => [{
              text: e.formatMessage(n.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: n.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(n.sc_link_join_social_club),
              href: s,
              ga: {
                event: "cta_signup",
                text: n.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, O(e)])(l, y, j);
            return e
          }), [l, y, j, I]), [T, R] = (0, t.useState)(0), U = (0, t.createRef)(), $ = () => {
            if (U.current) {
              const {
                current: e
              } = U, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), R(a + e)
              } else R(a)
            }
          };
          return (0, t.useEffect)((() => {
            const e = encodeURIComponent(`${s.pathname}${s.search}`);
            w(e)
          }), [JSON.stringify(s)]), (0, t.useEffect)((() => {
            x(!1)
          }), []), (0, t.useEffect)((() => {
            $(), P()((() => {
              setTimeout($, 0)
            }), 300)
          }), [o, i]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("nav", {
              className: "rockstargames-sites-rockstargamesf300d66bd02f52ac564238ca6125a091",
              children: (0, m.jsx)("div", {
                className: "rockstargames-sites-rockstargamesac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: U,
                style: {
                  "--navWrap-max-height": `${p+T}px`
                },
                children: L.map((e => (0, t.createElement)(D, {
                  ...e,
                  activeSubNavId: u,
                  setActiveSubNavId: k,
                  setSubNavExtraHeight: b,
                  onNavigate: c,
                  key: e.text
                })))
              })
            }), (0, m.jsx)("div", {
              className: "rockstargames-sites-rockstargamesf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: S ? null : "hidden"
              },
              children: (0, m.jsx)(h, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: d,
                setLanguageSelectorOpened: e => {
                  k(-1), g(e)
                },
                defaultMessage: "Select a Language",
                location: s
              })
            })]
          })
        };
      var B = s(5315);
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
            setMobileCardWidth: i,
            tabIndex: l
          } = e;
          const d = (0, r.useIntl)(),
            {
              currentCharId: g,
              setCurrentCharId: f
            } = (0, _.useRockstarUserState)(),
            {
              track: u
            } = (0, _.useGtmTrack)(),
            k = (0, t.createRef)(),
            {
              platform: p,
              platformUsername: h,
              mugshotUrl: b,
              stats: v
            } = a,
            [x, S] = (0, t.useState)(b),
            [C] = (0, t.useState)(a.index),
            N = c(p, "large"),
            M = g === a.index;
          return (0, t.useEffect)((() => {
            k.current && i && i(k?.current?.offsetWidth)
          }), [k]), (0, m.jsxs)("button", {
            className: "rockstargames-sites-rockstargamesb26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": M,
            onClick: e => {
              e.stopPropagation(), f(C), u({
                event: "character_selector_select",
                text: H[p] ?? "",
                position: C
              })
            },
            ref: k,
            tabIndex: l,
            children: [(0, m.jsx)("div", {
              className: "rockstargames-sites-rockstargamesd79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, m.jsx)("img", {
                src: x,
                alt: d.formatMessage(n.profile_selector_mugshot, {
                  userName: h
                }),
                onError: () => {
                  S(s(5931))
                },
                "data-testid": F
              })
            }), (0, m.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesed30f2b92b3fc2937e7278409208872f",
              children: [(0, m.jsxs)("div", {
                className: "rockstargames-sites-rockstargamesa6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, m.jsx)("img", {
                  src: N.src,
                  alt: N.alt,
                  "data-testid": A
                }), (0, m.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesc3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": W,
                  children: h
                })]
              }), (0, m.jsx)("div", {
                className: "rockstargames-sites-rockstargamesf5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, m.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesc9300f34b82bbdffb7006ff32247adff",
                  children: [(0, m.jsx)("img", {
                    className: "rockstargames-sites-rockstargamesfaa7b2808fb96fa02fd2e99be36df8e6",
                    src: o(parseInt(v.overview.rank.value)),
                    alt: d.formatMessage(n.profile_selector_rp_icon)
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
            platform: s
          } = e;
          const {
            src: t,
            alt: r
          } = ((e, a) => {
            const s = a === G.small;
            switch (e) {
              case J.pc:
                return {
                  src: s ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg", alt: "PC"
                };
              case J.ps4:
                return {
                  src: s ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
                };
              case J.ps5:
                return {
                  src: s ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
                };
              case J.xboxOne:
                return {
                  src: s ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
                };
              case J.xboxSeries:
                return {
                  src: s ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
                };
              default:
                return {
                  src: "", alt: ""
                }
            }
          })(s, a);
          return (0, m.jsx)("img", {
            className: "rockstargames-sites-rockstargamesea83a9d30b1ce0442bd3f94257fc0905",
            "data-testid": "platform-tag",
            "data-platform": s,
            "data-tag-size": a,
            src: t,
            alt: r
          })
        },
        Y = {
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
        q = "ProfileCard:characterName",
        Q = "ProfileCard:avatar",
        Z = "ProfileCard:bankValue",
        ee = "ProfileCard:cashValue",
        ae = "ProfileCard:rankValue",
        se = e => {
          let {
            character: a
          } = e;
          const {
            data: c
          } = (0, _.useRockstarUser)(), {
            track: i
          } = (0, _.useGtmTrack)(), l = (0, r.useIntl)(), [d, g] = (0, t.useState)([]), [f, u] = (0, t.useState)(null), [k, p] = (0, t.useState)(null), [h, b] = (0, t.useState)(!1), [v, x] = (0, t.useState)(-1), [S, C] = (0, t.useState)([]), [N, M] = (0, t.useState)(0), w = s(5931), {
            platform: y
          } = a, [j, I] = (0, t.useState)("0"), [L, E] = (0, t.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), P = () => {
            O((0, m.jsx)("img", {
              src: w,
              alt: l.formatMessage(n.profile_selector_mugshot, {
                userName: c.nickname
              })
            }))
          }, [R, O] = (0, t.useState)((0, m.jsx)("img", {
            className: Y.avatarImg,
            src: a.mugshotUrl,
            alt: l.formatMessage(n.profile_selector_mugshot, {
              userName: c.nickname
            }),
            onError: P,
            "data-testid": Q
          }));
          (0, t.useEffect)((() => {
            g(c.crews ?? [])
          }), [c.crews]), (0, t.useEffect)((() => {
            O((0, m.jsx)("img", {
              src: a.mugshotUrl,
              alt: c.nickname,
              onError: P,
              "data-testid": Q
            })), I(T(a.stats.overview.bank.value)), E(T(a.stats.overview.cash.value)), M(parseInt(a.stats.overview.rank.value))
          }), [a, c.nickname]), (0, t.useEffect)((() => {
            d && d.forEach((e => {
              !0 === e.isPrimary && (u(e.crewTag), p(e.crewColour), x(e.rankOrder), b(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && b(!0))
            }))
          }), [d]), (0, t.useEffect)((() => {
            const e = [];
            if (!h && v > -1)
              for (let a = 5; a > v; a -= 1) e.push((0, m.jsx)("div", {
                className: Y.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== k ? k : ""
                }
              }, `crewrankbar-${a}`));
            C(e)
          }), [v, h, k]);
          const U = e => {
            e.stopPropagation(), i({
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
                  }), f && (0, m.jsxs)("span", {
                    className: Y.scCrewName,
                    "data-arrow-tag": h,
                    children: [f, !h && (0, m.jsx)("div", {
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
                    src: o(N),
                    alt: l.formatMessage(n.profile_selector_rp_icon)
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
        te = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: s = 1e3,
            mobileGutterWidth: r = 17,
            slideChangeCallback: c = null,
            slideClickCallback: o = null,
            children: n = [],
            disablePager: i = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, t.createRef)(),
            g = (0, B.ri)(d, !1),
            [f, u] = (0, t.useState)(!1),
            [_, k] = (0, t.useState)(0),
            [p, h] = (0, t.useState)(0),
            [b, v] = (0, t.useState)([r]),
            [x, S] = (0, t.useState)(b[0]),
            [C, N] = (0, t.useState)(252),
            [M, w] = (0, t.useState)(0),
            [y, j] = (0, t.useState)([]),
            [I, L] = (0, t.useState)([]),
            [E, T] = (0, t.useState)(!1),
            P = e => {
              if (!0 === f || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              h(a)
            },
            R = e => {
              if (!0 === f || 0 === p || !0 === l) return;
              const s = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                t = s > p ? 1 : -1,
                r = Math.abs(p - s);
              r > a ? (t > 0 ? (() => {
                if (!0 === f) return;
                u(!0);
                const e = _ - 1 < 0 ? 0 : _ - 1;
                k(e), S(b[e]), c && c(e)
              })() : (() => {
                if (!0 === f) return;
                u(!0);
                let e = _ + 1 >= b.length ? b.length - 1 : _ + 1;
                e < 0 && (e = 0), k(e), S(b[e]), c && c(e)
              })(), h(0)) : S(b[_] + r * t)
            },
            O = () => {
              !0 !== f && !0 !== l && (u(!0), !0 !== f && (S(b[_]), h(0)))
            };
          return (0, t.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, t.createRef)())
            })), j(e)
          }), [n]), (0, t.useEffect)((() => {
            if (y.length < 1) return;
            N(y[0]?.current?.clientWidth || 0);
            const e = y[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              s = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            w(s + a)
          }), [y]), (0, t.useEffect)((() => {
            !1 !== f && setTimeout((() => {
              u(!1)
            }), s)
          }), [f, s]), (0, t.useEffect)((() => {
            v(n.map(((e, a) => (e => {
              let a = 0;
              const s = n.length;
              return 1 === s ? .5 * g - .5 * C - 2 * r + M : (0 === e && (a = r - e * C), e === s - 1 && s > 1 && (a = s * C * -1 + (g - (r - M))), e > 0 && e < s - 1 && (a = e * C * -1 + (.5 * g - .5 * C + .5 * M)), a)
            })(a)))), 1 === n.length ? T(!0) : T(!1)
          }), [d.current, n, g]), (0, t.useEffect)((() => {
            const e = (a = _, n.map(((e, s) => {
              const t = {
                active: !1
              };
              return s === a && (t.active = !0), t
            })));
            var a;
            L(e)
          }), [n, _]), (0, t.useEffect)((() => {
            !0 !== i && !0 !== l || S(b[0])
          }), [l, i, b]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("div", {
              className: "rockstargames-sites-rockstargamesb794a0e12537ad5fd506353133b9d60a",
              ref: d,
              onTouchStart: P,
              onTouchMove: R,
              onTouchEnd: O,
              onMouseDown: P,
              onMouseMove: R,
              onMouseUp: O,
              onClick: () => {
                null !== o && o(_)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, m.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": f,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${x}px)`
                },
                children: n.map(((e, a) => (0, m.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesdd4bcd955436c8a6982ee16756f7fd8b",
                  ref: y[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), I.length > 1 && !1 === i && (0, m.jsx)("div", {
              className: "rockstargames-sites-rockstargamese8e5249dac92a2bc76788d0fe7d7dfb7",
              children: I.map(((e, a) => (0, m.jsx)("div", {
                className: "rockstargames-sites-rockstargamesf64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, a)))
            })]
          })
        },
        re = {
          pillBtn: "rockstargames-sites-rockstargamesb4f0b55680e047d303f82f34594abd96",
          selected: "rockstargames-sites-rockstargamesed6126bd2f36579f2b8035e7c6579eb7",
          profile: "rockstargames-sites-rockstargamese506a7deb95c0b0c9988325cc857ea9a",
          scCharacterSelector: "rockstargames-sites-rockstargamesc3ea8d575c892277f23ad5b589977862",
          scCharacterSelectBtn: "rockstargames-sites-rockstargamesea15428b850bf436adda6f1dd8ac1af9",
          open: "rockstargames-sites-rockstargamesc5ffa3cbaa36329b72b3d928f9739849",
          scCharacterList: "rockstargames-sites-rockstargamesa84bbdd60e615baed0172e6b960c5d32",
          nav: "rockstargames-sites-rockstargamesca9118e28091523e6679a3b95054fe93",
          languageSelector: "rockstargames-sites-rockstargamesb71a5b5521e679bcab20ec6302253996",
          navHeader: "rockstargames-sites-rockstargamesfa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-sites-rockstargamesce91ee6ebb491174a4ccb4be628aaae7"
        },
        ce = e => {
          let {
            sc: a,
            charListHidden: s,
            hideCharacterList: c,
            refCharacterListDesktop: o,
            menuPadding: i,
            longCharList: l,
            setLongCharList: d,
            isMobileMode: g,
            setIsMobileMode: u,
            location: k,
            onNavigate: p
          } = e;
          const {
            windowWidth: b,
            windowHeight: x
          } = (0, v.useWindowResize)(), S = (0, r.useIntl)(), {
            languageSelectorOpened: C,
            setLanguageSelectorOpened: N,
            activeSubNavId: M,
            setActiveSubNavId: w,
            subNavExtraHeight: y,
            setSubNavExtraHeight: j,
            navOpened: I,
            setScNavOpened: L
          } = E(), [T, U] = (0, t.useState)(""), {
            webSettings: $
          } = (0, v.useRockstarWebSettings)(), {
            track: z
          } = (0, _.useGtmTrack)(), H = (0, v.useRockstarTokenPing)(), {
            data: W,
            loggedIn: A
          } = (0, _.useRockstarUser)(), {
            charactersNeeded: F,
            currentCharId: X,
            hasNotifications: G,
            navOpen: J,
            setCurrentCharId: K,
            setHasNotifications: Y,
            setSelectedCharacterTuple: q,
            setUserData: Q
          } = (0, _.useRockstarUserState)(), [Z, ee] = (0, t.useState)(null), [ae, ce] = (0, t.useState)(!1), [oe, ne] = (0, t.useState)(!1), [ie, le] = (0, t.useState)(0), de = (0, t.createRef)(), me = (0, B.ri)(de, !1), ge = (0, t.createRef)(), [fe, ue] = (0, t.useState)(0), [_e, ke] = (0, t.useState)([]), [pe, he] = (0, t.useState)(244), be = (0, t.useRef)(null), ve = (0, t.useMemo)((() => (0, f.A)()), []), xe = (0, t.useMemo)((() => ((e, a, s, t, r) => [{
            text: e.formatMessage(n.sc_link_activity_feed),
            location: {
              domain: f.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...R,
              text: n.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(n.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(n.sc_link_settings),
              location: {
                domain: f.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...R,
                text: n.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(n.sc_link_view_my_profile),
              href: s.profile_link,
              target: "_self",
              ga: {
                ...R,
                text: n.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(n.sc_link_messages),
              location: {
                domain: f.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...R,
                text: n.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(n.sc_link_game_activation),
              location: {
                domain: f.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...R,
                text: n.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(n.sc_link_notifications),
            location: {
              domain: f.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: t,
            ga: {
              ...R,
              text: n.sc_link_notifications.defaultMessage,
              location: {
                domain: f.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(n.sc_link_crews),
            location: {
              domain: f.C.socialClub,
              path: `/member/${s.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...R,
              text: n.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(n.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(n.sc_link_my_friends),
              location: {
                domain: f.C.socialClub,
                path: `/member/${s.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...R,
                text: n.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(n.sc_link_import_friends),
              location: {
                domain: f.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...R,
                text: n.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(n.sc_link_find_friends),
              location: {
                domain: f.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...R,
                text: n.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, O(e), {
            text: e.formatMessage(n.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...R,
              text: n.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(S, a, W, G, T, window)), [S, a, W, G, T, ve]), Se = () => {
            ne(i + pe * ie < me)
          }, Ce = () => {
            if (ge.current) {
              const {
                current: e
              } = ge, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ue(a + e)
              } else ue(a)
            }
          };
          return (0, t.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ve.currentSite?.site === f.C.socialClub && (e = encodeURIComponent("/")), U(e)
          }), [k]), (0, t.useEffect)((() => {
            ke(W?.characters?.[F] ?? [])
          }), [W, F]), (0, t.useEffect)((() => {
            W && Q(W)
          }), [W]), (0, t.useEffect)((() => {
            const e = W?.characters?.gtao ?? [];
            if (null !== A && !e.length) return void q(!1);
            if (null == X || !e.length) return;
            const a = e?.[X] ?? e?.[0] ?? null;
            q(!!a?.platform && [a.platform, a.characterSlot])
          }), [X, W, A]), (0, t.useEffect)((() => {
            (async () => {
              if (!W?.id || !J) return;
              const {
                count: e
              } = await (0, v.coreScApiFetch)("notification/count", {
                pingBearer: H
              });
              Y(e > 0)
            })()
          }), [W, J]), (0, t.useEffect)((() => {
            Se()
          }), [pe]), (0, t.useEffect)((() => {
            c(!0), u(b < 768), u(b < 768 || x < 649)
          }), [b, x]), (0, t.useEffect)((() => {
            let e = _e.length - 1;
            e < 0 && (e = 0), le(e);
            const a = _e.length > 0 ? _e[X] ?? _e[0] : null;
            a && (ee(a), _e.length > 1 ? ce(!0) : ce(!1), d(_e.length - 1 > 3))
          }), [X, _e]), (0, t.useEffect)((() => {
            Se()
          }), [ie, g, b, _e]), (0, t.useEffect)((() => {
            Ce(), P()((() => {
              setTimeout(Ce, 0)
            }), 300)
          }), [b, x]), (0, t.useEffect)((() => {
            const e = $?.currentCharId ?? 0;
            e !== X && K(Math.max(0, Math.min(e, _e.length - 1)))
          }), [_e, $]), (0, m.jsxs)(m.Fragment, {
            children: [null !== Z && "gtao" === F && (0, m.jsxs)("div", {
              className: re.scProfile,
              ref: be,
              tabIndex: -1,
              "aria-label": S.formatMessage(n.profile_selector_profile_card),
              children: [(0, m.jsx)(se, {
                s: re,
                character: Z
              }), !0 === ae && (0, m.jsxs)("div", {
                className: re.scCharacterSelector,
                children: [(0, m.jsx)("button", {
                  className: re.scCharacterSelectBtn,
                  "aria-hidden": !J,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !s;
                    c(a), z({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": s,
                  children: (0, m.jsx)("span", {
                    children: (0, m.jsx)(r.FormattedMessage, {
                      ...n.profile_selector_switch_character
                    })
                  })
                }), !g && (0, m.jsx)("div", {
                  className: re.scCharacterList,
                  "data-long-list": l,
                  "aria-hidden": s,
                  ref: o,
                  children: _e.map((e => (0, m.jsx)(V, {
                    tabIndex: s ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: he
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), g && (0, m.jsx)("div", {
                  className: re.scCharacterList,
                  "data-single-item": 2 === _e.length,
                  "data-swiper-disabled": oe,
                  "aria-hidden": s,
                  ref: de,
                  children: (0, m.jsx)(te, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      z({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: oe,
                    disableSwiper: oe,
                    children: _e.filter(((e, a) => a !== X)).map((e => (0, t.createElement)(V, {
                      characterData: e,
                      setMobileCardWidth: he,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: s ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, m.jsxs)("nav", {
              className: re.nav,
              "aria-hidden": !J,
              children: [(0, m.jsx)("button", {
                className: re.navHeader,
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
                className: re.navWrap,
                "data-opened": I,
                "data-logged-in": "true",
                ref: ge,
                style: {
                  "--navWrap-max-height": `${fe+y}px`
                },
                children: xe.map(((e, a) => (0, t.createElement)(D, {
                  ...e,
                  id: a,
                  activeSubNavId: M,
                  setActiveSubNavId: w,
                  setSubNavExtraHeight: j,
                  onNavigate: p,
                  key: e.text
                })))
              })]
            }), (0, m.jsx)("div", {
              className: re.scLanguageSelector,
              style: {
                visibility: J ? null : "hidden"
              },
              children: (0, m.jsx)(h, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: C,
                setLanguageSelectorOpened: N,
                location: k
              })
            })]
          })
        },
        oe = {
          menu: "rockstargames-sites-rockstargamesc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-sites-rockstargamesc31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-sites-rockstargamesc5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-sites-rockstargamesb8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-sites-rockstargamesff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-sites-rockstargamesb49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-sites-rockstargameseff8c1d4bf675accdb7d952aba0174dc"
        },
        ne = (0, v.getConfigForDomain)(),
        ie = d((e => {
          let {
            location: a,
            onNavigate: c
          } = e;
          const {
            windowHeight: o
          } = (0, v.useWindowResize)(), i = (0, r.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: d,
            setActiveSubNavId: g,
            navOpened: f,
            setAccountNavOpened: u,
            charListHidden: k,
            setCharListHidden: p
          } = E(), [h, x] = (0, t.useState)(!1), {
            navHidden: S = !1
          } = (0, v.useState)(), {
            loggedIn: C
          } = (0, _.useRockstarUser)(), {
            currentCharId: N,
            navOpen: M,
            setNavOpen: w,
            userData: y
          } = (0, _.useRockstarUserState)(), {
            track: j
          } = (0, _.useGtmTrack)(), [I, L] = (0, t.useState)(!1), T = (0, t.useRef)(), [P, R] = (0, t.useState)(0), O = (0, t.createRef)(), [U, $] = (0, t.useState)(!1), [D, B] = (0, t.useState)(0), [H, W] = (0, t.useState)(!1), {
            mutateWebSettings: A,
            webSettings: F
          } = (0, v.useRockstarWebSettings)(), X = (0, t.useCallback)((e => {
            p(e), T.current && !0 === e && (T.current.scrollTop = 0)
          }), [T]);
          return (0, t.useEffect)((() => {
            null !== N && F.currentCharId !== N && A({
              key: "currentCharId",
              value: N
            }), !1 === C ? A({
              key: "currentCharId",
              value: null
            }) : C && !y && j({
              event: "account_synced"
            })
          }), [N, C]), (0, t.useEffect)((() => {
            T.current && (!1 === k && !1 === I && (T.current.style.height = `${T.current.scrollHeight}px`), !0 === k && (T.current.style.height = null))
          }), [k, T, I]), (0, t.useEffect)((() => {
            const e = () => {
                w(!1), X(!0)
              },
              a = a => {
                const s = O?.current && a?.composedPath().includes(O.current);
                M && !s && e()
              },
              s = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", s), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", s)
            }
          }), [O]), (0, t.useEffect)((() => {
            w(!1), X(!0)
          }), [S]), (0, t.useEffect)((() => {
            if (O.current) {
              const {
                current: e
              } = O, a = window.getComputedStyle(e);
              R(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [O]), (0, t.useEffect)((() => {
            W(window.navigator.userAgent.includes("Mac"))
          }), []), (0, t.useEffect)((() => {
            O.current && x(O?.current?.scrollHeight >= o)
          }), [O, o]), (0, t.useEffect)((() => {
            M || (g(-1), d(!1))
          }), [M]), (0, t.useEffect)((() => {
            l && (k || X(!0), f && (u(!1), g(-1)))
          }), [l]), (0, t.useEffect)((() => {
            f && (l && d(!1), k || X(!0))
          }), [f]), void 0 === C ? null : (0, m.jsxs)(b.A, {
            enabled: !!M,
            removeScrollBar: !1,
            children: [(0, m.jsxs)("div", {
              className: [oe.menu, M ? oe.navOpen : ""].join(" "),
              "data-logged-in": C,
              "data-mac-browser": H,
              "data-scroll-mode": h,
              ref: O,
              "aria-hidden": !M,
              children: [(0, m.jsx)("button", {
                className: oe.dragHandleBtn,
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
                  className: oe.dragHandle,
                  src: s(35902),
                  alt: i.formatMessage(n.sc_menu_drag_handle)
                })
              }), C ? (0, m.jsx)(ce, {
                sc: ne,
                charListHidden: k,
                hideCharacterList: X,
                refCharacterListDesktop: T,
                menuPadding: P,
                longCharList: I,
                setLongCharList: L,
                isMobileMode: U,
                setIsMobileMode: $,
                location: a,
                onNavigate: c
              }) : (0, m.jsx)(z, {
                sc: ne,
                navOpen: M,
                location: a,
                onNavigate: c
              })]
            }), (0, m.jsx)("div", {
              className: [oe.scOverlay, M ? oe.navOpen : ""].join(" "),
              "data-logged-in": C
            })]
          })
        })),
        le = d((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const c = (0, r.useIntl)(),
            {
              data: o,
              loggedIn: i
            } = (0, _.useRockstarUser)(),
            {
              charactersNeeded: l,
              currentCharId: d,
              navOpen: g,
              setNavOpen: f
            } = (0, _.useRockstarUserState)(),
            {
              track: u
            } = (0, _.useGtmTrack)(),
            [k, p] = (0, t.useState)(),
            [h, b] = (0, t.useState)(!1),
            [v, x] = (0, t.useState)([]);
          (0, t.useEffect)((() => {
            x(o?.characters?.[l] ?? [])
          }), [o, l]);
          const S = (0, t.useCallback)((e => {
            e.stopPropagation(), f(!g), 1 == !g && a(null), u({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: g ? "close" : "open"
            })
          }), [g]);
          return (0, t.useEffect)((() => {
            b(!!v?.[d]?.mugshotUrl)
          }), [v, d]), (0, t.useEffect)((() => {
            p((() => {
              switch (i) {
                case void 0:
                  return s(5931);
                case !1:
                  return s(32810);
                case !0:
                  return v?.[d]?.mugshotUrl ?? o?.avatar
              }
            })())
          }), [o, v, d, i]), k ? (0, m.jsxs)("button", {
            className: "rockstargames-sites-rockstargamesee811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": c.formatMessage(g ? n.sc_menu_close : n.sc_menu_open),
            "aria-expanded": g,
            type: "button",
            onClick: S,
            "data-mugshot": h,
            "data-testid": "avatarMenuButton",
            "data-logged-in": Boolean(i),
            children: [(0, m.jsx)("img", {
              className: "rockstargames-sites-rockstargamesa917b58ca28b68550a1aa5d99c7eb998",
              src: k,
              alt: o?.nickname || ""
            }), i && (0, m.jsx)("div", {
              className: "rockstargames-sites-rockstargamesc06123ceae7ca4759ec8b1a5197823db",
              children: (0, m.jsx)(K, {
                platform: v?.[d]?.platform,
                tagSize: G.small
              })
            }), i && (0, m.jsx)("div", {
              className: "rockstargames-sites-rockstargamesc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": v?.[d]?.platform ?? null
            })]
          }) : null
        })),
        de = {
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
        me = e => {
          let {
            charListHidden: a,
            hideCharacterList: s,
            refCharacterListDesktop: c,
            menuPadding: o,
            longCharList: i,
            setLongCharList: l,
            isMobileMode: d
          } = e;
          const g = (0, r.useIntl)(),
            {
              windowWidth: f
            } = (0, v.useWindowResize)(),
            {
              track: u
            } = (0, _.useGtmTrack)(),
            {
              charactersNeeded: k,
              currentCharId: p,
              navOpen: h,
              setCurrentCharId: b,
              setSelectedCharacterTuple: x,
              setUserData: S,
              setCharacterAvatar: C,
              setCharacterPlatform: N
            } = (0, _.useRockstarUserState)(),
            [M, w] = (0, t.useState)(null),
            [y, j] = (0, t.useState)([]),
            [I, L] = (0, t.useState)(!1),
            [E, T] = (0, t.useState)(0),
            [P, R] = (0, t.useState)(244),
            [O, U] = (0, t.useState)(!1),
            $ = (0, t.useRef)(null),
            D = (0, t.createRef)(),
            z = (0, B.ri)(D, !1),
            {
              webSettings: H
            } = (0, v.useRockstarWebSettings)(),
            {
              data: W,
              loggedIn: A
            } = (0, _.useRockstarUser)({
              fetchCharacters: !0
            }),
            F = () => {
              U(o + P * E < z)
            };
          return (0, t.useEffect)((() => {
            F()
          }), [P]), (0, t.useEffect)((() => {
            F()
          }), [E, d, f, y]), (0, t.useEffect)((() => {
            j(W.characters?.[k] ?? [])
          }), [W, k]), (0, t.useEffect)((() => {
            W && S(W)
          }), [W]), (0, t.useEffect)((() => {
            const e = W?.characters?.gtao;
            if (null !== A && !e?.length) return void x(!1);
            if (null == p || !e?.length) return;
            const a = e?.[p] ?? e?.[0] ?? null;
            x(!!a?.platform && [a.platform, a.characterSlot])
          }), [p, W, A]), (0, t.useEffect)((() => {
            let e = y.length - 1;
            e < 0 && (e = 0), T(e);
            const a = y.length > 0 ? y[p] ?? y[0] : null;
            if (a) return w(a), C(a.mugshotUrl), N(a.platform), y.length > 1 ? L(!0) : L(!1), l(y.length - 1 > 3), () => {
              C(""), N("")
            }
          }), [p, y]), (0, t.useEffect)((() => {
            const e = H?.currentCharId ?? 0;
            e !== p && b(Math.max(0, Math.min(e, y.length - 1)))
          }), [y, H]), M && "gtao" === k ? (0, m.jsxs)("div", {
            className: de.profile,
            ref: $,
            tabIndex: -1,
            "aria-label": g.formatMessage(n.profile_selector_profile_card),
            children: [(0, m.jsx)(se, {
              s: de,
              character: M
            }), !0 === I && (0, m.jsxs)("div", {
              className: de.scCharacterSelector,
              children: [(0, m.jsx)("button", {
                className: de.scCharacterSelectBtn,
                "aria-hidden": !h,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const t = !a;
                  s(t), u({
                    event: t ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                "data-list-closed": a,
                children: (0, m.jsx)("span", {
                  children: (0, m.jsx)(r.FormattedMessage, {
                    ...n.profile_selector_switch_character
                  })
                })
              }), !1 === d && (0, m.jsx)("div", {
                className: de.scCharacterList,
                "data-long-list": i,
                "aria-hidden": a,
                ref: c,
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
                children: (0, m.jsx)(te, {
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
                  children: y.filter(((e, a) => a !== p)).map((e => (0, t.createElement)(V, {
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