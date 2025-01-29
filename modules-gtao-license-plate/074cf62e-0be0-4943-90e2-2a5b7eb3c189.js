! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "074cf62e-0be0-4943-90e2-2a5b7eb3c189", e._sentryDebugIdIdentifier = "sentry-dbid-074cf62e-0be0-4943-90e2-2a5b7eb3c189")
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
  [144], {
    8144: (e, a, t) => {
      t.r(a), t.d(a, {
        CharacterCard: () => m,
        LanguageSelector: () => h,
        Menu: () => se,
        MenuButton: () => re,
        ProfileSwitcher: () => oe
      });
      var s = t(2229),
        c = t(1788);
      const l = JSON.parse('{"us":{"rp_icon":"RP Category","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        r = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(702),
                alt: "PC"
              } : {
                src: t(2864),
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
                src: t(2124),
                alt: "PS5"
              } : {
                src: t(2541),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(1070),
                alt: "Xbox One"
              } : {
                src: t(7024),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(3777),
                alt: "Xbox Series X|S"
              } : {
                src: t(4963),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        n = e => t(e < 100 ? 5917 : e > 99 && e < 500 ? 9697 : e > 499 && e < 750 ? 8662 : 6563),
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
        i = {
          pillBtn: "rockstargames-modules-gtao-license-plateb618569985ae824a0ad12179a3fc1d73",
          selected: "rockstargames-modules-gtao-license-platee1a2f9a25bb7f66968281e2bc4e4de88",
          scCharacterCard: "rockstargames-modules-gtao-license-plateb5c76acf3bb09d7897375c618e9b0a12",
          avatar: "rockstargames-modules-gtao-license-plated6d3f262555eafb7d674aaf38e8ddfd6",
          scCharNames: "rockstargames-modules-gtao-license-platecb995eda97ef905857c8d886edcf0897",
          scCharacterStats: "rockstargames-modules-gtao-license-platea68d43553c702327a295c974a9c5e67b",
          scUserName: "rockstargames-modules-gtao-license-platead1b6a52da2116461c0d8b9c63b8ee28",
          scRpLevel: "rockstargames-modules-gtao-license-plateaf42f06ddb8cff176be6fcb31e17271a",
          scRpIcon: "rockstargames-modules-gtao-license-platef9a042c11d2e6a8ed1d5e78f40abd88d"
        };
      var d = t(8096);
      const m = (0, c.withIntl)((e => {
        let {
          characterData: a
        } = e;
        const l = (0, c.useIntl)(),
          {
            platform: m,
            platformUsername: u,
            mugshotUrl: g,
            stats: f
          } = a,
          [p, _] = (0, s.useState)(g),
          h = r(m, "large");
        return (0, d.jsxs)("div", {
          className: i.scCharacterCard,
          children: [(0, d.jsx)("div", {
            className: i.avatar,
            "data-size": "small",
            children: (0, d.jsx)("img", {
              src: p,
              alt: l.formatMessage(o.profile_selector_mugshot, {
                userName: u
              }),
              onError: () => {
                _(t(5931))
              }
            })
          }), (0, d.jsx)("div", {
            className: i.scCharacterStats,
            children: (0, d.jsxs)("div", {
              className: i.scCharNames,
              children: [(0, d.jsx)("img", {
                src: h.src,
                alt: h.alt
              }), (0, d.jsx)("div", {
                className: i.scUserName,
                "data-size": "small",
                children: u
              }), (0, d.jsx)("div", {
                className: i.scRp,
                children: (0, d.jsxs)("div", {
                  className: i.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: i.scRpIcon,
                    src: n(f.overview.rank.value),
                    alt: l.formatMessage(o.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })
          })]
        })
      }), l);
      var u = t(9950),
        g = t(2918),
        f = t(5138);
      const p = (0, c.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        _ = {
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
        h = (0, c.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: l,
            location: r,
            parent: n = "footer"
          } = e;
          const {
            track: o
          } = (0, g.useGtmTrack)(), i = (0, c.useIntl)(), [m, h] = (0, c.getLocale)(), [k, b] = (0, s.useState)(!1), v = (0, s.useMemo)((() => (0, f.A)()), []), x = (0, s.useCallback)((e => {
            let a = r.pathname.replace(/^\/|\/$/g, "");
            const t = a.split("/");
            return c.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), v.currentSite?.site === f.C.www ? "en" === e ? `${window.location.origin}/${a}${r.search}` : `${window.location.origin}/${e}/${a}${r.search}` : `${window.location.origin}/${a}${r.search}`
          }), [r]), S = (0, s.useRef)(null), [C, N] = (0, s.useState)(0), M = matchMedia("(hover: none) and (pointer: coarse)").matches, w = e => {
            if (l && l(!1), m.subdomaincom === e || "none" === e) return void(l && l(!1));
            const a = c.locales.find((a => a.subdomaincom === e));
            if (a) {
              const t = x(e);
              o({
                event: "cta_other",
                link_url: t,
                text: e,
                element_placement: n
              }), h(a.iso), window.location.href = t
            }
          };
          return (0, s.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === k && b(!1)
          }), [t]), (0, s.useEffect)((() => {
            S.current && N(S.current.scrollHeight)
          }), [S]), (0, d.jsxs)("div", {
            className: [_.languageSelector, k ? _.open : ""].join(" "),
            "data-theme": a,
            children: [M && "sc-menu" === a && (0, d.jsx)("div", {
              className: _.selectBoxWrapper,
              children: (0, d.jsxs)("select", {
                className: _.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  w(a)
                },
                "aria-label": i.formatMessage(p.language_selector_default),
                children: [(0, d.jsx)("option", {
                  className: _.selectBoxOption,
                  value: "none",
                  children: (0, d.jsx)(c.FormattedMessage, {
                    ...p.language_selector_default
                  })
                }), c.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, d.jsx)("option", {
                    className: _.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!M || "sc-menu" !== a) && (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), l && l(!k), b(!k)
                },
                type: "button",
                "aria-label": i.formatMessage(p.language_selector_default),
                children: [(0, d.jsx)("i", {}), (0, d.jsx)("span", {
                  children: (0, d.jsx)(c.FormattedMessage, {
                    ...p.language_selector_default
                  })
                })]
              }), (0, d.jsx)("div", {
                className: _.linkWrapper,
                ref: S,
                style: {
                  "--ls-linkWrapper-opened-height": `${C}px`
                },
                children: (0, d.jsx)("div", {
                  className: _.links,
                  children: c.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, d.jsx)(u.A, {
                      to: x(a),
                      onClick: (s = a, () => {
                        w(s)
                      }),
                      tabIndex: k ? 0 : -1,
                      children: t
                    }, `desktop-${a}`);
                    var s
                  }))
                })
              })]
            })]
          })
        }), l);
      var k = t(6448),
        b = t(5966);
      const v = (0, b.makeVar)(!1),
        x = e => v(e),
        S = (0, b.makeVar)(-1),
        C = e => S(e),
        N = (0, b.makeVar)(-1),
        M = e => N(e),
        w = (0, b.makeVar)(!0),
        y = e => w(e),
        j = (0, b.makeVar)(!0),
        I = e => j(e),
        L = () => {
          const e = (0, b.useReactiveVar)(v),
            a = (0, b.useReactiveVar)(S),
            t = (0, b.useReactiveVar)(N),
            c = (0, b.useReactiveVar)(w),
            l = (0, b.useReactiveVar)(j);
          return (0, s.useEffect)((() => {
            l || (e && x(!1), c && (y(!1), C(-1)))
          }), [l]), (0, s.useEffect)((() => {
            !e && l && (c || y(!0))
          }), [e, l]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: x,
            activeSubNavId: a,
            setActiveSubNavId: C,
            subNavExtraHeight: t,
            setSubNavExtraHeight: M,
            navOpened: c,
            setScNavOpened: y,
            charListHidden: l,
            setCharListHidden: I
          })), [e, a, t, c, l])
        };
      var E = t(5757),
        T = t.n(E);
      const R = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        P = e => ({
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
              domain: f.C.support,
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
              domain: f.C.www,
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
              domain: f.C.www,
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
              domain: f.C.www,
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
              domain: f.C.www,
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
        O = e => {
          let {
            to: a,
            target: t,
            className: s,
            onNavigate: c,
            onClick: l,
            reloadDocument: r,
            children: n,
            ...o
          } = e;
          const i = a?.startsWith("http");
          return (0, d.jsx)("a", {
            href: a,
            className: s,
            onClick: e => {
              l?.(e), i || r || (c ? (e.preventDefault(), c(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            target: t,
            ...o,
            children: n
          })
        },
        U = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: l,
            ga: r,
            dataTestId: n,
            isSubLink: i,
            hasNotifications: m = !1,
            onClickCallback: u = (() => {}),
            tabIndex: p,
            reloadDocument: _ = !1,
            onNavigate: h
          } = e;
          const {
            track: k
          } = (0, g.useGtmTrack)(), b = (0, f.A)(), v = (0, c.useIntl)();
          let x = s;
          l && (x = l.domain === b.currentSite?.site ? l.path : `https://${b.sites[l.domain]}.rockstargames.com${l.path}`);
          const S = {
            ...r,
            link_url: x
          };
          return (0, d.jsxs)(O, {
            className: i ? "rockstargames-modules-gtao-license-platec2233d027086d54af877493d7d0700bd" : "rockstargames-modules-gtao-license-platef97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": n || "menuLink",
            title: a,
            to: x,
            target: t,
            rel: "noreferrer",
            reloadDocument: _,
            tabIndex: p,
            onClick: e => {
              k(S), u(e)
            },
            onNavigate: h,
            children: [a, m && (0, d.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platef5178077f8a32e83d71d4e80b551903d",
              children: (0, d.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platee49e290899be3c888ca5a4b6b13736a1",
                children: v.formatMessage(o.nofications_new)
              })
            })]
          })
        },
        B = e => {
          let {
            id: a,
            text: t,
            target: c,
            href: l,
            location: r,
            ga: n,
            hasNotifications: o = !1,
            dataTestId: i,
            children: m = [],
            activeSubNavId: u,
            setActiveSubNavId: f,
            setSubNavExtraHeight: p,
            reloadDocument: _ = !1,
            onClickCallback: h = (() => {}),
            onNavigate: k
          } = e;
          const {
            windowWidth: v,
            windowHeight: x
          } = (0, b.useWindowResize)(), {
            track: S
          } = (0, g.useGtmTrack)(), {
            navOpen: C
          } = (0, g.useRockstarUserState)(), N = (0, s.useRef)(null), [M, w] = (0, s.useState)(0), [y, j] = (0, s.useState)(0), [I, L] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            u !== a && !1 === I && L(!0), u === a && L(!1)
          }), [u]), (0, s.useEffect)((() => {
            if (!N.current) return;
            w(N?.current?.scrollHeight);
            const e = window.getComputedStyle(N.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [N, v, x]), m.length > 0 ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("button", {
              className: "rockstargames-modules-gtao-license-plateab99be57ff98f572ec19be5191046577",
              type: "button",
              "data-testid": i || "menuButton",
              title: t,
              tabIndex: C ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), S(n), u === a ? (f(-1), p(0)) : (f(a), p(M + y + y))
              },
              children: [(0, d.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platee5caaa3aab68c5526a84b01ef0db0a8a",
                children: t
              }), (0, d.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platebb9e4df34c9ecbe29c9886426e64ed12"
              })]
            }, t), (0, d.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platee482683a0cb805002f8bd41b8ef81537",
              ref: N,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${M}px`
              },
              children: m.map((e => (0, s.createElement)(U, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !C ? -1 : 0,
                onNavigate: k
              })))
            })]
          }) : (0, d.jsx)(U, {
            text: t,
            target: c,
            href: l,
            location: r,
            ga: n,
            hasNotifications: o,
            dataTestId: i,
            isSubLink: !1,
            onClickCallback: h,
            tabIndex: C ? 0 : -1,
            reloadDocument: _,
            onNavigate: k
          })
        },
        H = e => {
          let {
            sc: a,
            location: t,
            onNavigate: l
          } = e;
          const {
            windowWidth: r,
            windowHeight: n
          } = (0, b.useWindowResize)(), i = (0, c.useIntl)(), {
            languageSelectorOpened: m,
            setLanguageSelectorOpened: u,
            activeSubNavId: p,
            setActiveSubNavId: _,
            subNavExtraHeight: k,
            setSubNavExtraHeight: v
          } = L(), {
            setSelectedCharacterTuple: x,
            navOpen: S
          } = (0, g.useRockstarUserState)(), C = (0, b.useLocale)(), N = (0, b.toScLocaleString)(C), [M, w] = (0, s.useState)(""), y = `${a.login}?returnUrl=${M}&lang=${N}`, j = `${a.signup}&returnUrl=${M}&lang=${N}`, I = (0, s.useMemo)((() => (0, f.A)()), []), E = (0, s.useMemo)((() => {
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
            }, P(e)])(i, y, j);
            return e
          }), [i, y, j, I]), [R, O] = (0, s.useState)(0), U = (0, s.createRef)(), H = () => {
            if (U.current) {
              const {
                current: e
              } = U, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), O(a + e)
              } else O(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            w(e)
          }), [JSON.stringify(t)]), (0, s.useEffect)((() => {
            x(!1)
          }), []), (0, s.useEffect)((() => {
            H(), T()((() => {
              setTimeout(H, 0)
            }), 300)
          }), [r, n]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platef300d66bd02f52ac564238ca6125a091",
              children: (0, d.jsx)("div", {
                className: "rockstargames-modules-gtao-license-plateac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: U,
                style: {
                  "--navWrap-max-height": `${k+R}px`
                },
                children: E.map((e => (0, s.createElement)(B, {
                  ...e,
                  activeSubNavId: p,
                  setActiveSubNavId: _,
                  setSubNavExtraHeight: v,
                  onNavigate: l,
                  key: e.text
                })))
              })
            }), (0, d.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platef30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: S ? null : "hidden"
              },
              children: (0, d.jsx)(h, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: m,
                setLanguageSelectorOpened: e => {
                  _(-1), u(e)
                },
                defaultMessage: "Select a Language",
                location: t
              })
            })]
          })
        };
      var D = t(6082);
      const $ = {
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "Xbox One",
          xboxsx: "Xbox Series X|S"
        },
        W = "CharacterButton:characterName",
        A = "CharacterButton:platform",
        F = "CharacterButton:avatar",
        z = "CharacterButton:rankValue",
        V = e => {
          let {
            characterData: a,
            setMobileCardWidth: l,
            tabIndex: i
          } = e;
          const m = (0, c.useIntl)(),
            {
              currentCharId: u,
              setCurrentCharId: f
            } = (0, g.useRockstarUserState)(),
            {
              track: p
            } = (0, g.useGtmTrack)(),
            _ = (0, s.createRef)(),
            {
              platform: h,
              platformUsername: k,
              mugshotUrl: b,
              stats: v
            } = a,
            [x, S] = (0, s.useState)(b),
            [C] = (0, s.useState)(a.index),
            N = r(h, "large"),
            M = u === a.index;
          return (0, s.useEffect)((() => {
            _.current && l && l(_?.current?.offsetWidth)
          }), [_]), (0, d.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-plateb26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": M,
            onClick: e => {
              e.stopPropagation(), f(C), p({
                event: "character_selector_select",
                text: $[h] ?? "",
                position: C
              })
            },
            ref: _,
            tabIndex: i,
            children: [(0, d.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plated79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, d.jsx)("img", {
                src: x,
                alt: m.formatMessage(o.profile_selector_mugshot, {
                  userName: k
                }),
                onError: () => {
                  S(t(5931))
                },
                "data-testid": F
              })
            }), (0, d.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plateed30f2b92b3fc2937e7278409208872f",
              children: [(0, d.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platea6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, d.jsx)("img", {
                  src: N.src,
                  alt: N.alt,
                  "data-testid": A
                }), (0, d.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-platec3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": W,
                  children: k
                })]
              }), (0, d.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platef5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, d.jsxs)("div", {
                  className: "rockstargames-modules-gtao-license-platec9300f34b82bbdffb7006ff32247adff",
                  children: [(0, d.jsx)("img", {
                    className: "rockstargames-modules-gtao-license-platefaa7b2808fb96fa02fd2e99be36df8e6",
                    src: n(parseInt(v.overview.rank.value)),
                    alt: m.formatMessage(o.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    "data-testid": z,
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        X = {
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
        G = "ProfileCard:characterName",
        J = "ProfileCard:avatar",
        K = "ProfileCard:bankValue",
        Y = "ProfileCard:cashValue",
        q = "ProfileCard:rankValue",
        Q = e => {
          let {
            character: a,
            platformTag: l
          } = e;
          const {
            data: r
          } = (0, g.useRockstarUser)(), {
            track: i
          } = (0, g.useGtmTrack)(), m = (0, c.useIntl)(), [u, f] = (0, s.useState)([]), [p, _] = (0, s.useState)(null), [h, k] = (0, s.useState)(null), [b, v] = (0, s.useState)(!1), [x, S] = (0, s.useState)(-1), [C, N] = (0, s.useState)([]), [M, w] = (0, s.useState)(0), y = t(5931), [j, I] = (0, s.useState)("0"), [L, E] = (0, s.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), R = () => {
            O((0, d.jsx)("img", {
              src: y,
              alt: m.formatMessage(o.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [P, O] = (0, s.useState)((0, d.jsx)("img", {
            className: X.avatarImg,
            src: a.mugshotUrl,
            alt: m.formatMessage(o.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: R,
            "data-testid": J
          }));
          (0, s.useEffect)((() => {
            f(r.crews ?? [])
          }), [r.crews]), (0, s.useEffect)((() => {
            O((0, d.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: R,
              "data-testid": J
            })), I(T(a.stats.overview.bank.value)), E(T(a.stats.overview.cash.value)), w(parseInt(a.stats.overview.rank.value))
          }), [a, r.nickname]), (0, s.useEffect)((() => {
            u && u.forEach((e => {
              !0 === e.isPrimary && (_(e.crewTag), k(e.crewColour), S(e.rankOrder), v(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && v(!0))
            }))
          }), [u]), (0, s.useEffect)((() => {
            const e = [];
            if (!b && x > -1)
              for (let a = 5; a > x; a -= 1) e.push((0, d.jsx)("div", {
                className: X.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== h ? h : ""
                }
              }, `crewrankbar-${a}`));
            N(e)
          }), [x, b, h]);
          const U = e => {
            e.stopPropagation(), i({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, d.jsxs)("div", {
            className: X.profileDetails,
            onClick: U,
            onKeyUp: U,
            role: "button",
            tabIndex: -1,
            children: [(0, d.jsxs)("div", {
              className: X.avatar,
              children: [P, (0, d.jsx)("div", {
                className: X.avatarPlatform,
                "data-platform": a.platform,
                children: (0, d.jsx)("img", {
                  src: l.src,
                  alt: l.alt
                })
              })]
            }), (0, d.jsxs)("div", {
              className: X.profileStats,
              children: [(0, d.jsx)("div", {
                className: X.scNames,
                children: (0, d.jsxs)("div", {
                  className: X.scTagsNames,
                  children: [(0, d.jsx)("span", {
                    className: X.scUserName,
                    "data-testid": G,
                    children: a.platformUsername
                  }), p && (0, d.jsxs)("span", {
                    className: X.scCrewName,
                    "data-arrow-tag": b,
                    children: [p, !b && (0, d.jsx)("div", {
                      className: X.scCrewRankBar,
                      children: C
                    })]
                  })]
                })
              }), (0, d.jsxs)("div", {
                className: X.scProgress,
                children: [(0, d.jsxs)("div", {
                  className: X.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: X.scRpIcon,
                    src: n(M),
                    alt: m.formatMessage(o.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    "data-testid": q,
                    children: a.stats.overview.rank.value
                  })]
                }), (0, d.jsxs)("div", {
                  className: X.scMoney,
                  children: [(0, d.jsxs)("span", {
                    className: X.scCash,
                    "data-testid": Y,
                    children: ["$", L]
                  }), (0, d.jsxs)("span", {
                    className: X.scBank,
                    "data-testid": K,
                    children: ["$", j]
                  })]
                })]
              })]
            })]
          })
        },
        Z = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: c = 17,
            slideChangeCallback: l = null,
            slideClickCallback: r = null,
            children: n = [],
            disablePager: o = !1,
            disableSwiper: i = !1
          } = e;
          const m = (0, s.createRef)(),
            u = (0, D.ri)(m, !1),
            [g, f] = (0, s.useState)(!1),
            [p, _] = (0, s.useState)(0),
            [h, k] = (0, s.useState)(0),
            [b, v] = (0, s.useState)([c]),
            [x, S] = (0, s.useState)(b[0]),
            [C, N] = (0, s.useState)(252),
            [M, w] = (0, s.useState)(0),
            [y, j] = (0, s.useState)([]),
            [I, L] = (0, s.useState)([]),
            [E, T] = (0, s.useState)(!1),
            R = e => {
              if (!0 === g || !0 === i) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              k(a)
            },
            P = e => {
              if (!0 === g || 0 === h || !0 === i) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > h ? 1 : -1,
                c = Math.abs(h - t);
              c > a ? (s > 0 ? (() => {
                if (!0 === g) return;
                f(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                _(e), S(b[e]), l && l(e)
              })() : (() => {
                if (!0 === g) return;
                f(!0);
                let e = p + 1 >= b.length ? b.length - 1 : p + 1;
                e < 0 && (e = 0), _(e), S(b[e]), l && l(e)
              })(), k(0)) : S(b[p] + c * s)
            },
            O = () => {
              !0 !== g && !0 !== i && (f(!0), !0 !== g && (S(b[p]), k(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, s.createRef)())
            })), j(e)
          }), [n]), (0, s.useEffect)((() => {
            if (y.length < 1) return;
            N(y[0]?.current?.clientWidth || 0);
            const e = y[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            w(t + a)
          }), [y]), (0, s.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              f(!1)
            }), t)
          }), [g, t]), (0, s.useEffect)((() => {
            v(n.map(((e, a) => (e => {
              let a = 0;
              const t = n.length;
              return 1 === t ? .5 * u - .5 * C - 2 * c + M : (0 === e && (a = c - e * C), e === t - 1 && t > 1 && (a = t * C * -1 + (u - (c - M))), e > 0 && e < t - 1 && (a = e * C * -1 + (.5 * u - .5 * C + .5 * M)), a)
            })(a)))), 1 === n.length ? T(!0) : T(!1)
          }), [m.current, n, u]), (0, s.useEffect)((() => {
            const e = (a = p, n.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            L(e)
          }), [n, p]), (0, s.useEffect)((() => {
            !0 !== o && !0 !== i || S(b[0])
          }), [i, o, b]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateb794a0e12537ad5fd506353133b9d60a",
              ref: m,
              onTouchStart: R,
              onTouchMove: P,
              onTouchEnd: O,
              onMouseDown: R,
              onMouseMove: P,
              onMouseUp: O,
              onClick: () => {
                null !== r && r(p)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, d.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platec1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": g,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${x}px)`
                },
                children: n.map(((e, a) => (0, d.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-platedd4bcd955436c8a6982ee16756f7fd8b",
                  ref: y[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), I.length > 1 && !1 === o && (0, d.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platee8e5249dac92a2bc76788d0fe7d7dfb7",
              children: I.map((e => (0, d.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platef64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        ee = {
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
        ae = e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: l,
            refCharacterListDesktop: n,
            menuPadding: i,
            longCharList: m,
            setLongCharList: u,
            isMobileMode: p,
            setIsMobileMode: _,
            location: k,
            onNavigate: v
          } = e;
          const {
            windowWidth: x,
            windowHeight: S
          } = (0, b.useWindowResize)(), C = (0, c.useIntl)(), {
            languageSelectorOpened: N,
            setLanguageSelectorOpened: M,
            activeSubNavId: w,
            setActiveSubNavId: y,
            subNavExtraHeight: j,
            setSubNavExtraHeight: I,
            navOpened: E,
            setScNavOpened: O
          } = L(), [U, H] = (0, s.useState)(""), {
            lsSettings: $
          } = (0, b.useRockstarWebLSSettings)(), {
            track: W
          } = (0, g.useGtmTrack)(), A = (0, b.useRockstarTokenPing)(), {
            data: F,
            loggedIn: z
          } = (0, g.useRockstarUser)(), {
            charactersNeeded: X,
            currentCharId: G,
            hasNotifications: J,
            navOpen: K,
            setCurrentCharId: Y,
            setHasNotifications: q,
            setSelectedCharacterTuple: ae,
            setUserData: te
          } = (0, g.useRockstarUserState)(), [se, ce] = (0, s.useState)(null), [le, re] = (0, s.useState)(null), [ne, oe] = (0, s.useState)(!1), [ie, de] = (0, s.useState)(!1), [me, ue] = (0, s.useState)(0), ge = (0, s.createRef)(), fe = (0, D.ri)(ge, !1), pe = (0, s.createRef)(), [_e, he] = (0, s.useState)(0), [ke, be] = (0, s.useState)([]), [ve, xe] = (0, s.useState)(244), Se = (0, s.useRef)(null), Ce = (0, s.useMemo)((() => (0, f.A)()), []), Ne = (0, s.useMemo)((() => ((e, a, t, s, c) => [{
            text: e.formatMessage(o.sc_link_activity_feed),
            location: {
              domain: f.C.socialClub,
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
                domain: f.C.socialClub,
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
                domain: f.C.socialClub,
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
                domain: f.C.socialClub,
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
              domain: f.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...R,
              text: o.sc_link_notifications.defaultMessage,
              location: {
                domain: f.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(o.sc_link_crews),
            location: {
              domain: f.C.socialClub,
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
                domain: f.C.socialClub,
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
                domain: f.C.socialClub,
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
                domain: f.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...R,
                text: o.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, P(e), {
            text: e.formatMessage(o.sc_link_log_out),
            href: `${a.logout}?returnUrl=${c}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...R,
              text: o.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(C, a, F, J, U, window)), [C, a, F, J, U, Ce]), Me = () => {
            de(i + ve * me < fe)
          }, we = () => {
            if (pe.current) {
              const {
                current: e
              } = pe, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), he(a + e)
              } else he(a)
            }
          };
          return (0, s.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            Ce.currentSite?.site === f.C.socialClub && (e = encodeURIComponent("/")), H(e)
          }), [k]), (0, s.useEffect)((() => {
            be(F.characters[X] ?? [])
          }), [F, X]), (0, s.useEffect)((() => {
            F && te(F)
          }), [F]), (0, s.useEffect)((() => {
            const e = F?.characters.gtao;
            if (null !== z && !e.length) return void ae(!1);
            if (null == G || !e.length) return;
            const a = e?.[G] ?? e?.[0] ?? null;
            ae(!!a?.platform && [a.platform, a.characterSlot])
          }), [G, F, z]), (0, s.useEffect)((() => {
            (async () => {
              if (!F?.id) return;
              const {
                count: e
              } = await (0, b.coreScApiFetch)("notification/count", {
                pingBearer: A
              });
              q(e > 0)
            })()
          }), [F]), (0, s.useEffect)((() => {
            Me()
          }), [ve]), (0, s.useEffect)((() => {
            l(!0), _(x < 768), _(x < 768 || S < 649)
          }), [x, S]), (0, s.useEffect)((() => {
            let e = ke.length - 1;
            e < 0 && (e = 0), ue(e);
            const a = ke.length > 0 ? ke[G] ?? ke[0] : null;
            if (!a) return;
            const t = null !== a ? r(a.platform, "large") : null;
            re(t), ce(a), ke.length > 1 ? oe(!0) : oe(!1), u(ke.length - 1 > 3)
          }), [G, ke]), (0, s.useEffect)((() => {
            Me()
          }), [me, p, x, ke]), (0, s.useEffect)((() => {
            we(), T()((() => {
              setTimeout(we, 0)
            }), 300)
          }), [x, S]), (0, s.useEffect)((() => {
            const e = $?.currentCharId ?? 0;
            e !== G && Y(Math.max(0, Math.min(e, ke.length - 1)))
          }), [ke, $]), (0, d.jsxs)(d.Fragment, {
            children: [null !== se && "gtao" === X && (0, d.jsxs)("div", {
              className: ee.scProfile,
              ref: Se,
              tabIndex: -1,
              "aria-label": C.formatMessage(o.profile_selector_profile_card),
              children: [(0, d.jsx)(Q, {
                s: ee,
                character: se,
                platformTag: le
              }), !0 === ne && (0, d.jsxs)("div", {
                className: ee.scCharacterSelector,
                children: [(0, d.jsx)("button", {
                  className: ee.scCharacterSelectBtn,
                  "aria-hidden": !K,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    l(a), W({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, d.jsx)("span", {
                    children: (0, d.jsx)(c.FormattedMessage, {
                      ...o.profile_selector_switch_character
                    })
                  })
                }), !1 === p && (0, d.jsx)("div", {
                  className: ee.scCharacterList,
                  "data-long-list": m,
                  "aria-hidden": t,
                  ref: n,
                  children: ke.map((e => (0, d.jsx)(V, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: xe
                  }, e.mugshotUrl)))
                }), !0 === p && (0, d.jsx)("div", {
                  className: ee.scCharacterList,
                  "data-single-item": 2 === ke.length,
                  "data-swiper-disabled": ie,
                  "aria-hidden": t,
                  ref: ge,
                  children: (0, d.jsx)(Z, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      W({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: ie,
                    disableSwiper: ie,
                    children: ke.filter(((e, a) => a !== G)).map((e => (0, s.createElement)(V, {
                      characterData: e,
                      setMobileCardWidth: xe,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, d.jsxs)("nav", {
              className: ee.nav,
              "aria-hidden": !K,
              children: [(0, d.jsx)("button", {
                className: ee.navHeader,
                type: "button",
                "data-opened": E,
                "data-nav-opened": K,
                tabIndex: E ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), E || O(!0)
                },
                "data-testid": "playerButton",
                children: (0, d.jsx)("span", {
                  children: F.nickname
                })
              }), (0, d.jsx)("div", {
                className: ee.navWrap,
                "data-opened": E,
                "data-logged-in": "true",
                ref: pe,
                style: {
                  "--navWrap-max-height": `${_e+j}px`
                },
                children: Ne.map(((e, a) => (0, s.createElement)(B, {
                  ...e,
                  id: a,
                  activeSubNavId: w,
                  setActiveSubNavId: y,
                  setSubNavExtraHeight: I,
                  onNavigate: v,
                  key: e.text
                })))
              })]
            }), (0, d.jsx)("div", {
              className: ee.scLanguageSelector,
              style: {
                visibility: K ? null : "hidden"
              },
              children: (0, d.jsx)(h, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: N,
                setLanguageSelectorOpened: M,
                location: k
              })
            })]
          })
        },
        te = {
          menu: "rockstargames-modules-gtao-license-platec0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-modules-gtao-license-platec31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-modules-gtao-license-platec5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-modules-gtao-license-plateb8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-modules-gtao-license-plateff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-gtao-license-plateb49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-modules-gtao-license-plateeff8c1d4bf675accdb7d952aba0174dc"
        },
        se = (0, c.withIntl)((e => {
          let {
            location: a,
            onNavigate: l
          } = e;
          const {
            windowHeight: r
          } = (0, b.useWindowResize)(), n = (0, c.useIntl)(), {
            languageSelectorOpened: i,
            setLanguageSelectorOpened: m,
            setActiveSubNavId: u,
            navOpened: f,
            setScNavOpened: p,
            charListHidden: _,
            setCharListHidden: h
          } = L(), [v, x] = (0, s.useState)(!1), {
            navHidden: S = !1
          } = (0, b.useState)(), {
            loggedIn: C
          } = (0, g.useRockstarUser)(), {
            currentCharId: N,
            navOpen: M,
            setNavOpen: w,
            userData: y
          } = (0, g.useRockstarUserState)(), {
            track: j
          } = (0, g.useGtmTrack)(), [I, E] = (0, s.useState)(!1), T = (0, b.useReactiveVar)(g.scConfig), R = (0, s.useRef)(), [P, O] = (0, s.useState)(0), U = (0, s.createRef)(), [B, D] = (0, s.useState)(!1), [$, W] = (0, s.useState)(0), [A, F] = (0, s.useState)(!1), {
            mutateLSSettings: z,
            lsSettings: V
          } = (0, b.useRockstarWebLSSettings)(), X = (0, s.useCallback)((e => {
            h(e), R.current && !0 === e && (R.current.scrollTop = 0)
          }), [R]);
          return (0, s.useEffect)((() => {
            null !== N && V.currentCharId !== N && z({
              key: "currentCharId",
              value: N
            }), !1 === C ? z({
              key: "currentCharId",
              value: null
            }) : C && !y && j({
              event: "account_synced"
            })
          }), [N, C]), (0, s.useEffect)((() => {
            R.current && (!1 === _ && !1 === I && (R.current.style.height = `${R.current.scrollHeight}px`), !0 === _ && (R.current.style.height = null))
          }), [_, R, I]), (0, s.useEffect)((() => {
            const e = () => {
                w(!1), X(!0)
              },
              a = a => {
                const t = U?.current && a?.composedPath().includes(U.current);
                M && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }), [U]), (0, s.useEffect)((() => {
            w(!1), X(!0)
          }), [S]), (0, s.useEffect)((() => {
            if (U.current) {
              const {
                current: e
              } = U, a = window.getComputedStyle(e);
              O(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [U]), (0, s.useEffect)((() => {
            F(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            U.current && x(U?.current?.scrollHeight >= r)
          }), [U, r]), (0, s.useEffect)((() => {
            M || (u(-1), m(!1))
          }), [M]), (0, s.useEffect)((() => {
            i && (_ || X(!0), f && (p(!1), u(-1)))
          }), [i]), (0, s.useEffect)((() => {
            f && (i && m(!1), _ || X(!0))
          }), [f]), null === C ? null : (0, d.jsxs)(k.A, {
            enabled: !!M,
            removeScrollBar: !1,
            children: [(0, d.jsxs)("div", {
              className: [te.menu, M ? te.navOpen : ""].join(" "),
              "data-logged-in": C,
              "data-mac-browser": A,
              "data-scroll-mode": v,
              ref: U,
              "aria-hidden": !M,
              children: [(0, d.jsx)("button", {
                className: te.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  W(a)
                },
                onTouchMove: e => {
                  if (0 === $) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs($ - a) > 1 && (W(0), w(!1))
                },
                children: (0, d.jsx)("img", {
                  className: te.dragHandle,
                  src: t(5902),
                  alt: n.formatMessage(o.sc_menu_drag_handle)
                })
              }), C ? (0, d.jsx)(ae, {
                sc: T,
                charListHidden: _,
                hideCharacterList: X,
                refCharacterListDesktop: R,
                menuPadding: P,
                longCharList: I,
                setLongCharList: E,
                isMobileMode: B,
                setIsMobileMode: D,
                location: a,
                onNavigate: l
              }) : (0, d.jsx)(H, {
                sc: T,
                navOpen: M,
                location: a,
                onNavigate: l
              })]
            }), (0, d.jsx)("div", {
              className: [te.scOverlay, M ? te.navOpen : ""].join(" "),
              "data-logged-in": C
            })]
          })
        }), l),
        ce = t(5931),
        le = t(2810),
        re = (0, c.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, c.useIntl)(),
            {
              data: l
            } = (0, g.useRockstarUser)(),
            {
              charactersNeeded: n,
              currentCharId: i,
              navOpen: m,
              setNavOpen: u
            } = (0, g.useRockstarUserState)(),
            {
              track: f
            } = (0, g.useGtmTrack)(),
            [p, _] = (0, s.useState)(null),
            [h, k] = (0, s.useState)(!1),
            [b, v] = (0, s.useState)(null),
            [x, S] = (0, s.useState)(!1),
            [C, N] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            N(l.characters[n] ?? [])
          }), [l, n]);
          const M = (0, s.useCallback)((e => {
            e.stopPropagation(), u(!m), 1 == !m && a(null), f({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: m ? "close" : "open"
            })
          }), [m]);
          return (0, s.useEffect)((() => {
            const e = l?.id ?? !1,
              a = e ? (C?.[i]?.mugshotUrl ?? l?.avatar) || ce : le,
              t = r(C?.[i]?.platform, "small") ?? null;
            v(t), _(a), k(e), S(!!C?.[i]?.mugshotUrl)
          }), [l, C, i, ce, le]), p ? (0, d.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-plateee811a1fa8b17eb47afb419dd08ffb03",
            "data-img-set": x,
            "aria-label": t.formatMessage(m ? o.sc_menu_close : o.sc_menu_open),
            "aria-expanded": m,
            type: "button",
            onClick: M,
            "data-testid": "avatarMenuButton",
            "data-logged-in": Boolean(h),
            children: [(0, d.jsx)("img", {
              className: "rockstargames-modules-gtao-license-platea917b58ca28b68550a1aa5d99c7eb998",
              src: p || "",
              onError: () => {
                _(ce)
              },
              alt: l?.nickname || ""
            }), h && null !== b && (0, d.jsx)("img", {
              className: "rockstargames-modules-gtao-license-platec06123ceae7ca4759ec8b1a5197823db",
              src: b.src,
              alt: b.alt
            }), h && (0, d.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-gtao-license-platec4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": C?.[i]?.platform ?? null
            })]
          }) : null
        }), l),
        ne = {
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
        oe = e => {
          let {
            charListHidden: a,
            hideCharacterList: t,
            refCharacterListDesktop: l,
            menuPadding: n,
            longCharList: i,
            setLongCharList: m,
            isMobileMode: u
          } = e;
          const f = (0, c.useIntl)(),
            {
              windowWidth: p
            } = (0, b.useWindowResize)(),
            {
              track: _
            } = (0, g.useGtmTrack)(),
            {
              charactersNeeded: h,
              currentCharId: k,
              navOpen: v,
              setCurrentCharId: x,
              setSelectedCharacterTuple: S,
              setUserData: C,
              setCharacterAvatar: N,
              setCharacterPlatform: M
            } = (0, g.useRockstarUserState)(),
            [w, y] = (0, s.useState)(null),
            [j, I] = (0, s.useState)([]),
            [L, E] = (0, s.useState)(!1),
            [T, R] = (0, s.useState)(0),
            [P, O] = (0, s.useState)(244),
            [U, B] = (0, s.useState)(!1),
            [H, $] = (0, s.useState)(null),
            W = (0, s.useRef)(null),
            A = (0, s.createRef)(),
            F = (0, D.ri)(A, !1),
            {
              lsSettings: z
            } = (0, b.useRockstarWebLSSettings)(),
            {
              data: X,
              loggedIn: G
            } = (0, g.useRockstarUser)({
              fetchCharacters: !0
            }),
            J = () => {
              B(n + P * T < F)
            };
          return (0, s.useEffect)((() => {
            J()
          }), [P]), (0, s.useEffect)((() => {
            J()
          }), [T, u, p, j]), (0, s.useEffect)((() => {
            I(X.characters?.[h] ?? [])
          }), [X, h]), (0, s.useEffect)((() => {
            X && C(X)
          }), [X]), (0, s.useEffect)((() => {
            const e = X?.characters?.gtao;
            if (null !== G && !e?.length) return void S(!1);
            if (null == k || !e?.length) return;
            const a = e?.[k] ?? e?.[0] ?? null;
            S(!!a?.platform && [a.platform, a.characterSlot])
          }), [k, X, G]), (0, s.useEffect)((() => {
            let e = j.length - 1;
            e < 0 && (e = 0), R(e);
            const a = j.length > 0 ? j[k] ?? j[0] : null;
            if (!a) return;
            const t = null !== a ? r(a.platform, "large") : null;
            return $(t), y(a), N(a.mugshotUrl), M(a.platform), j.length > 1 ? E(!0) : E(!1), m(j.length - 1 > 3), () => {
              N(""), M("")
            }
          }), [k, j]), (0, s.useEffect)((() => {
            const e = z?.currentCharId ?? 0;
            e !== k && x(Math.max(0, Math.min(e, j.length - 1)))
          }), [j, z]), w && "gtao" === h ? (0, d.jsxs)("div", {
            className: ne.profile,
            ref: W,
            tabIndex: -1,
            "aria-label": f.formatMessage(o.profile_selector_profile_card),
            children: [(0, d.jsx)(Q, {
              s: ne,
              character: w,
              platformTag: H
            }), !0 === L && (0, d.jsxs)("div", {
              className: ne.scCharacterSelector,
              children: [(0, d.jsx)("button", {
                className: ne.scCharacterSelectBtn,
                "aria-hidden": !v,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const s = !a;
                  t(s), _({
                    event: s ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                "data-list-closed": a,
                children: (0, d.jsx)("span", {
                  children: (0, d.jsx)(c.FormattedMessage, {
                    ...o.profile_selector_switch_character
                  })
                })
              }), !1 === u && (0, d.jsx)("div", {
                className: ne.scCharacterList,
                "data-long-list": i,
                "aria-hidden": a,
                ref: l,
                children: j.map((e => (0, d.jsx)(V, {
                  tabIndex: a ? -1 : 0,
                  characterData: e,
                  setMobileCardWidth: O
                }, e.mugshotUrl)))
              }), !0 === u && (0, d.jsx)("div", {
                className: ne.scCharacterList,
                "data-single-item": 2 === j.length,
                "data-swiper-disabled": U,
                "aria-hidden": a,
                ref: A,
                children: (0, d.jsx)(Z, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    _({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  disablePager: U,
                  disableSwiper: U,
                  children: j.filter(((e, a) => a !== k)).map((e => (0, s.createElement)(V, {
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
    5902: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    2810: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    5931: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    702: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    7166: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    2124: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    1070: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    3777: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    2864: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    348: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    2541: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    7024: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    4963: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    5917: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    9697: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    6563: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    8662: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);