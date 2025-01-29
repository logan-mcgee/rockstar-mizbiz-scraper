! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0f3c9a0c-5429-4e8b-8ac8-88d612d85465", e._sentryDebugIdIdentifier = "sentry-dbid-0f3c9a0c-5429-4e8b-8ac8-88d612d85465")
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
  [8144], {
    68144: (e, a, s) => {
      s.r(a), s.d(a, {
        CharacterCard: () => m,
        LanguageSelector: () => p,
        Menu: () => te,
        MenuButton: () => ne,
        ProfileSwitcher: () => oe
      });
      var t = s(62229),
        r = s(81788);
      const c = JSON.parse('{"us":{"rp_icon":"RP Category","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        n = (e, a) => {
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
        i = e => s(e < 100 ? 15917 : e > 99 && e < 500 ? 89697 : e > 499 && e < 750 ? 58662 : 26563),
        o = (0, r.defineMessages)({
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
        l = {
          pillBtn: "rockstargames-sites-rockstargamesb618569985ae824a0ad12179a3fc1d73",
          selected: "rockstargames-sites-rockstargamese1a2f9a25bb7f66968281e2bc4e4de88",
          scCharacterCard: "rockstargames-sites-rockstargamesb5c76acf3bb09d7897375c618e9b0a12",
          avatar: "rockstargames-sites-rockstargamesd6d3f262555eafb7d674aaf38e8ddfd6",
          scCharNames: "rockstargames-sites-rockstargamescb995eda97ef905857c8d886edcf0897",
          scCharacterStats: "rockstargames-sites-rockstargamesa68d43553c702327a295c974a9c5e67b",
          scUserName: "rockstargames-sites-rockstargamesad1b6a52da2116461c0d8b9c63b8ee28",
          scRpLevel: "rockstargames-sites-rockstargamesaf42f06ddb8cff176be6fcb31e17271a",
          scRpIcon: "rockstargames-sites-rockstargamesf9a042c11d2e6a8ed1d5e78f40abd88d"
        };
      var d = s(98096);
      const m = (0, r.withIntl)((e => {
        let {
          characterData: a
        } = e;
        const c = (0, r.useIntl)(),
          {
            platform: m,
            platformUsername: g,
            mugshotUrl: f,
            stats: u
          } = a,
          [_, k] = (0, t.useState)(f),
          p = n(m, "large");
        return (0, d.jsxs)("div", {
          className: l.scCharacterCard,
          children: [(0, d.jsx)("div", {
            className: l.avatar,
            "data-size": "small",
            children: (0, d.jsx)("img", {
              src: _,
              alt: c.formatMessage(o.profile_selector_mugshot, {
                userName: g
              }),
              onError: () => {
                k(s(5931))
              }
            })
          }), (0, d.jsx)("div", {
            className: l.scCharacterStats,
            children: (0, d.jsxs)("div", {
              className: l.scCharNames,
              children: [(0, d.jsx)("img", {
                src: p.src,
                alt: p.alt
              }), (0, d.jsx)("div", {
                className: l.scUserName,
                "data-size": "small",
                children: g
              }), (0, d.jsx)("div", {
                className: l.scRp,
                children: (0, d.jsxs)("div", {
                  className: l.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: l.scRpIcon,
                    src: i(u.overview.rank.value),
                    alt: c.formatMessage(o.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })
          })]
        })
      }), c);
      var g = s(89950),
        f = s(2918),
        u = s(15138);
      const _ = (0, r.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        k = {
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
        p = (0, r.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: s,
            setLanguageSelectorOpened: c,
            location: n,
            parent: i = "footer"
          } = e;
          const {
            track: o
          } = (0, f.useGtmTrack)(), l = (0, r.useIntl)(), [m, p] = (0, r.getLocale)(), [h, b] = (0, t.useState)(!1), v = (0, t.useMemo)((() => (0, u.A)()), []), x = (0, t.useCallback)((e => {
            let a = n.pathname.replace(/^\/|\/$/g, "");
            const s = a.split("/");
            return r.locales.map((e => e.subdomaincom)).includes(s[0]) && (a = s.slice(1).join("/")), v.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${a}${n.search}` : `${window.location.origin}/${e}/${a}${n.search}` : `${window.location.origin}/${a}${n.search}`
          }), [n]), S = (0, t.useRef)(null), [C, N] = (0, t.useState)(0), M = matchMedia("(hover: none) and (pointer: coarse)").matches, w = e => {
            if (c && c(!1), m.subdomaincom === e || "none" === e) return void(c && c(!1));
            const a = r.locales.find((a => a.subdomaincom === e));
            if (a) {
              const s = x(e);
              o({
                event: "cta_other",
                link_url: s,
                text: e,
                element_placement: i
              }), p(a.iso), window.location.href = s
            }
          };
          return (0, t.useEffect)((() => {
            void 0 !== s && !1 === s && !0 === h && b(!1)
          }), [s]), (0, t.useEffect)((() => {
            S.current && N(S.current.scrollHeight)
          }), [S]), (0, d.jsxs)("div", {
            className: [k.languageSelector, h ? k.open : ""].join(" "),
            "data-theme": a,
            children: [M && "sc-menu" === a && (0, d.jsx)("div", {
              className: k.selectBoxWrapper,
              children: (0, d.jsxs)("select", {
                className: k.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  w(a)
                },
                "aria-label": l.formatMessage(_.language_selector_default),
                children: [(0, d.jsx)("option", {
                  className: k.selectBoxOption,
                  value: "none",
                  children: (0, d.jsx)(r.FormattedMessage, {
                    ..._.language_selector_default
                  })
                }), r.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: s
                  } = e;
                  return (0, d.jsx)("option", {
                    className: k.selectBoxOption,
                    value: s,
                    children: a
                  }, `mobile-${s}`)
                }))]
              })
            }), (!M || "sc-menu" !== a) && (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), c && c(!h), b(!h)
                },
                type: "button",
                "aria-label": l.formatMessage(_.language_selector_default),
                children: [(0, d.jsx)("i", {}), (0, d.jsx)("span", {
                  children: (0, d.jsx)(r.FormattedMessage, {
                    ..._.language_selector_default
                  })
                })]
              }), (0, d.jsx)("div", {
                className: k.linkWrapper,
                ref: S,
                style: {
                  "--ls-linkWrapper-opened-height": `${C}px`
                },
                children: (0, d.jsx)("div", {
                  className: k.links,
                  children: r.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: s
                    } = e;
                    return (0, d.jsx)(g.A, {
                      to: x(a),
                      onClick: (t = a, () => {
                        w(t)
                      }),
                      tabIndex: h ? 0 : -1,
                      children: s
                    }, `desktop-${a}`);
                    var t
                  }))
                })
              })]
            })]
          })
        }), c);
      var h = s(64147),
        b = s(95966);
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
            s = (0, b.useReactiveVar)(N),
            r = (0, b.useReactiveVar)(w),
            c = (0, b.useReactiveVar)(j);
          return (0, t.useEffect)((() => {
            c || (e && x(!1), r && (y(!1), C(-1)))
          }), [c]), (0, t.useEffect)((() => {
            !e && c && (r || y(!0))
          }), [e, c]), (0, t.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: x,
            activeSubNavId: a,
            setActiveSubNavId: C,
            subNavExtraHeight: s,
            setSubNavExtraHeight: M,
            navOpened: r,
            setScNavOpened: y,
            charListHidden: c,
            setCharListHidden: I
          })), [e, a, s, r, c])
        };
      var E = s(45757),
        T = s.n(E);
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
        O = e => {
          let {
            to: a,
            target: s,
            className: t,
            onNavigate: r,
            onClick: c,
            reloadDocument: n,
            children: i,
            ...o
          } = e;
          const l = a?.startsWith("http");
          return (0, d.jsx)("a", {
            href: a,
            className: t,
            onClick: e => {
              c?.(e), l || n || (r ? (e.preventDefault(), r(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            target: s,
            ...o,
            children: i
          })
        },
        U = e => {
          let {
            text: a,
            target: s,
            href: t,
            location: c,
            ga: n,
            dataTestId: i,
            isSubLink: l,
            hasNotifications: m = !1,
            onClickCallback: g = (() => {}),
            tabIndex: _,
            reloadDocument: k = !1,
            onNavigate: p
          } = e;
          const {
            track: h
          } = (0, f.useGtmTrack)(), b = (0, u.A)(), v = (0, r.useIntl)();
          let x = t;
          c && (x = c.domain === b.currentSite?.site ? c.path : `https://${b.sites[c.domain]}.rockstargames.com${c.path}`);
          const S = {
            ...n,
            link_url: x
          };
          return (0, d.jsxs)(O, {
            className: l ? "rockstargames-sites-rockstargamesc2233d027086d54af877493d7d0700bd" : "rockstargames-sites-rockstargamesf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": i || "menuLink",
            title: a,
            to: x,
            target: s,
            rel: "noreferrer",
            reloadDocument: k,
            tabIndex: _,
            onClick: e => {
              h(S), g(e)
            },
            onNavigate: p,
            children: [a, m && (0, d.jsx)("div", {
              className: "rockstargames-sites-rockstargamesf5178077f8a32e83d71d4e80b551903d",
              children: (0, d.jsx)("span", {
                className: "rockstargames-sites-rockstargamese49e290899be3c888ca5a4b6b13736a1",
                children: v.formatMessage(o.nofications_new)
              })
            })]
          })
        },
        B = e => {
          let {
            id: a,
            text: s,
            target: r,
            href: c,
            location: n,
            ga: i,
            hasNotifications: o = !1,
            dataTestId: l,
            children: m = [],
            activeSubNavId: g,
            setActiveSubNavId: u,
            setSubNavExtraHeight: _,
            reloadDocument: k = !1,
            onClickCallback: p = (() => {}),
            onNavigate: h
          } = e;
          const {
            windowWidth: v,
            windowHeight: x
          } = (0, b.useWindowResize)(), {
            track: S
          } = (0, f.useGtmTrack)(), {
            navOpen: C
          } = (0, f.useRockstarUserState)(), N = (0, t.useRef)(null), [M, w] = (0, t.useState)(0), [y, j] = (0, t.useState)(0), [I, L] = (0, t.useState)(!0);
          return (0, t.useEffect)((() => {
            g !== a && !1 === I && L(!0), g === a && L(!1)
          }), [g]), (0, t.useEffect)((() => {
            if (!N.current) return;
            w(N?.current?.scrollHeight);
            const e = window.getComputedStyle(N.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [N, v, x]), m.length > 0 ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("button", {
              className: "rockstargames-sites-rockstargamesab99be57ff98f572ec19be5191046577",
              type: "button",
              "data-testid": l || "menuButton",
              title: s,
              tabIndex: C ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), S(i), g === a ? (u(-1), _(0)) : (u(a), _(M + y + y))
              },
              children: [(0, d.jsx)("span", {
                className: "rockstargames-sites-rockstargamese5caaa3aab68c5526a84b01ef0db0a8a",
                children: s
              }), (0, d.jsx)("span", {
                className: "rockstargames-sites-rockstargamesbb9e4df34c9ecbe29c9886426e64ed12"
              })]
            }, s), (0, d.jsx)("nav", {
              className: "rockstargames-sites-rockstargamese482683a0cb805002f8bd41b8ef81537",
              ref: N,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${M}px`
              },
              children: m.map((e => (0, t.createElement)(U, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !C ? -1 : 0,
                onNavigate: h
              })))
            })]
          }) : (0, d.jsx)(U, {
            text: s,
            target: r,
            href: c,
            location: n,
            ga: i,
            hasNotifications: o,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: C ? 0 : -1,
            reloadDocument: k,
            onNavigate: h
          })
        },
        H = e => {
          let {
            sc: a,
            location: s,
            onNavigate: c
          } = e;
          const {
            windowWidth: n,
            windowHeight: i
          } = (0, b.useWindowResize)(), l = (0, r.useIntl)(), {
            languageSelectorOpened: m,
            setLanguageSelectorOpened: g,
            activeSubNavId: _,
            setActiveSubNavId: k,
            subNavExtraHeight: h,
            setSubNavExtraHeight: v
          } = L(), {
            setSelectedCharacterTuple: x,
            navOpen: S
          } = (0, f.useRockstarUserState)(), C = (0, b.useLocale)(), N = (0, b.toScLocaleString)(C), [M, w] = (0, t.useState)(""), y = `${a.login}?returnUrl=${M}&lang=${N}`, j = `${a.signup}&returnUrl=${M}&lang=${N}`, I = (0, t.useMemo)((() => (0, u.A)()), []), E = (0, t.useMemo)((() => {
            const e = ((e, a, s) => [{
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
              href: s,
              ga: {
                event: "cta_signup",
                text: o.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, P(e)])(l, y, j);
            return e
          }), [l, y, j, I]), [R, O] = (0, t.useState)(0), U = (0, t.createRef)(), H = () => {
            if (U.current) {
              const {
                current: e
              } = U, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), O(a + e)
              } else O(a)
            }
          };
          return (0, t.useEffect)((() => {
            const e = encodeURIComponent(`${s.pathname}${s.search}`);
            w(e)
          }), [JSON.stringify(s)]), (0, t.useEffect)((() => {
            x(!1)
          }), []), (0, t.useEffect)((() => {
            H(), T()((() => {
              setTimeout(H, 0)
            }), 300)
          }), [n, i]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("nav", {
              className: "rockstargames-sites-rockstargamesf300d66bd02f52ac564238ca6125a091",
              children: (0, d.jsx)("div", {
                className: "rockstargames-sites-rockstargamesac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: U,
                style: {
                  "--navWrap-max-height": `${h+R}px`
                },
                children: E.map((e => (0, t.createElement)(B, {
                  ...e,
                  activeSubNavId: _,
                  setActiveSubNavId: k,
                  setSubNavExtraHeight: v,
                  onNavigate: c,
                  key: e.text
                })))
              })
            }), (0, d.jsx)("div", {
              className: "rockstargames-sites-rockstargamesf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: S ? null : "hidden"
              },
              children: (0, d.jsx)(p, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: m,
                setLanguageSelectorOpened: e => {
                  k(-1), g(e)
                },
                defaultMessage: "Select a Language",
                location: s
              })
            })]
          })
        };
      var D = s(86082);
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
            setMobileCardWidth: c,
            tabIndex: l
          } = e;
          const m = (0, r.useIntl)(),
            {
              currentCharId: g,
              setCurrentCharId: u
            } = (0, f.useRockstarUserState)(),
            {
              track: _
            } = (0, f.useGtmTrack)(),
            k = (0, t.createRef)(),
            {
              platform: p,
              platformUsername: h,
              mugshotUrl: b,
              stats: v
            } = a,
            [x, S] = (0, t.useState)(b),
            [C] = (0, t.useState)(a.index),
            N = n(p, "large"),
            M = g === a.index;
          return (0, t.useEffect)((() => {
            k.current && c && c(k?.current?.offsetWidth)
          }), [k]), (0, d.jsxs)("button", {
            className: "rockstargames-sites-rockstargamesb26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": M,
            onClick: e => {
              e.stopPropagation(), u(C), _({
                event: "character_selector_select",
                text: $[p] ?? "",
                position: C
              })
            },
            ref: k,
            tabIndex: l,
            children: [(0, d.jsx)("div", {
              className: "rockstargames-sites-rockstargamesd79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, d.jsx)("img", {
                src: x,
                alt: m.formatMessage(o.profile_selector_mugshot, {
                  userName: h
                }),
                onError: () => {
                  S(s(5931))
                },
                "data-testid": F
              })
            }), (0, d.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesed30f2b92b3fc2937e7278409208872f",
              children: [(0, d.jsxs)("div", {
                className: "rockstargames-sites-rockstargamesa6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, d.jsx)("img", {
                  src: N.src,
                  alt: N.alt,
                  "data-testid": A
                }), (0, d.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesc3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": W,
                  children: h
                })]
              }), (0, d.jsx)("div", {
                className: "rockstargames-sites-rockstargamesf5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, d.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesc9300f34b82bbdffb7006ff32247adff",
                  children: [(0, d.jsx)("img", {
                    className: "rockstargames-sites-rockstargamesfaa7b2808fb96fa02fd2e99be36df8e6",
                    src: i(parseInt(v.overview.rank.value)),
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
        G = "ProfileCard:characterName",
        J = "ProfileCard:avatar",
        K = "ProfileCard:bankValue",
        Y = "ProfileCard:cashValue",
        q = "ProfileCard:rankValue",
        Q = e => {
          let {
            character: a,
            platformTag: c
          } = e;
          const {
            data: n
          } = (0, f.useRockstarUser)(), {
            track: l
          } = (0, f.useGtmTrack)(), m = (0, r.useIntl)(), [g, u] = (0, t.useState)([]), [_, k] = (0, t.useState)(null), [p, h] = (0, t.useState)(null), [b, v] = (0, t.useState)(!1), [x, S] = (0, t.useState)(-1), [C, N] = (0, t.useState)([]), [M, w] = (0, t.useState)(0), y = s(5931), [j, I] = (0, t.useState)("0"), [L, E] = (0, t.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), R = () => {
            O((0, d.jsx)("img", {
              src: y,
              alt: m.formatMessage(o.profile_selector_mugshot, {
                userName: n.nickname
              })
            }))
          }, [P, O] = (0, t.useState)((0, d.jsx)("img", {
            className: X.avatarImg,
            src: a.mugshotUrl,
            alt: m.formatMessage(o.profile_selector_mugshot, {
              userName: n.nickname
            }),
            onError: R,
            "data-testid": J
          }));
          (0, t.useEffect)((() => {
            u(n.crews ?? [])
          }), [n.crews]), (0, t.useEffect)((() => {
            O((0, d.jsx)("img", {
              src: a.mugshotUrl,
              alt: n.nickname,
              onError: R,
              "data-testid": J
            })), I(T(a.stats.overview.bank.value)), E(T(a.stats.overview.cash.value)), w(parseInt(a.stats.overview.rank.value))
          }), [a, n.nickname]), (0, t.useEffect)((() => {
            g && g.forEach((e => {
              !0 === e.isPrimary && (k(e.crewTag), h(e.crewColour), S(e.rankOrder), v(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && v(!0))
            }))
          }), [g]), (0, t.useEffect)((() => {
            const e = [];
            if (!b && x > -1)
              for (let a = 5; a > x; a -= 1) e.push((0, d.jsx)("div", {
                className: X.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== p ? p : ""
                }
              }, `crewrankbar-${a}`));
            N(e)
          }), [x, b, p]);
          const U = e => {
            e.stopPropagation(), l({
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
                  src: c.src,
                  alt: c.alt
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
                  }), _ && (0, d.jsxs)("span", {
                    className: X.scCrewName,
                    "data-arrow-tag": b,
                    children: [_, !b && (0, d.jsx)("div", {
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
                    src: i(M),
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
            interactionDelay: s = 1e3,
            mobileGutterWidth: r = 17,
            slideChangeCallback: c = null,
            slideClickCallback: n = null,
            children: i = [],
            disablePager: o = !1,
            disableSwiper: l = !1
          } = e;
          const m = (0, t.createRef)(),
            g = (0, D.ri)(m, !1),
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
            R = e => {
              if (!0 === f || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              h(a)
            },
            P = e => {
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
            i.forEach((() => {
              e.push((0, t.createRef)())
            })), j(e)
          }), [i]), (0, t.useEffect)((() => {
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
            v(i.map(((e, a) => (e => {
              let a = 0;
              const s = i.length;
              return 1 === s ? .5 * g - .5 * C - 2 * r + M : (0 === e && (a = r - e * C), e === s - 1 && s > 1 && (a = s * C * -1 + (g - (r - M))), e > 0 && e < s - 1 && (a = e * C * -1 + (.5 * g - .5 * C + .5 * M)), a)
            })(a)))), 1 === i.length ? T(!0) : T(!1)
          }), [m.current, i, g]), (0, t.useEffect)((() => {
            const e = (a = _, i.map(((e, s) => {
              const t = {
                active: !1
              };
              return s === a && (t.active = !0), t
            })));
            var a;
            L(e)
          }), [i, _]), (0, t.useEffect)((() => {
            !0 !== o && !0 !== l || S(b[0])
          }), [l, o, b]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("div", {
              className: "rockstargames-sites-rockstargamesb794a0e12537ad5fd506353133b9d60a",
              ref: m,
              onTouchStart: R,
              onTouchMove: P,
              onTouchEnd: O,
              onMouseDown: R,
              onMouseMove: P,
              onMouseUp: O,
              onClick: () => {
                null !== n && n(_)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, d.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": f,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${x}px)`
                },
                children: i.map(((e, a) => (0, d.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesdd4bcd955436c8a6982ee16756f7fd8b",
                  ref: y[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), I.length > 1 && !1 === o && (0, d.jsx)("div", {
              className: "rockstargames-sites-rockstargamese8e5249dac92a2bc76788d0fe7d7dfb7",
              children: I.map((e => (0, d.jsx)("div", {
                className: "rockstargames-sites-rockstargamesf64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        ee = {
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
        ae = e => {
          let {
            sc: a,
            charListHidden: s,
            hideCharacterList: c,
            refCharacterListDesktop: i,
            menuPadding: l,
            longCharList: m,
            setLongCharList: g,
            isMobileMode: _,
            setIsMobileMode: k,
            location: h,
            onNavigate: v
          } = e;
          const {
            windowWidth: x,
            windowHeight: S
          } = (0, b.useWindowResize)(), C = (0, r.useIntl)(), {
            languageSelectorOpened: N,
            setLanguageSelectorOpened: M,
            activeSubNavId: w,
            setActiveSubNavId: y,
            subNavExtraHeight: j,
            setSubNavExtraHeight: I,
            navOpened: E,
            setScNavOpened: O
          } = L(), [U, H] = (0, t.useState)(""), {
            lsSettings: $
          } = (0, b.useRockstarWebLSSettings)(), {
            track: W
          } = (0, f.useGtmTrack)(), A = (0, b.useRockstarTokenPing)(), {
            data: F,
            loggedIn: z
          } = (0, f.useRockstarUser)(), {
            charactersNeeded: X,
            currentCharId: G,
            hasNotifications: J,
            navOpen: K,
            setCurrentCharId: Y,
            setHasNotifications: q,
            setSelectedCharacterTuple: ae,
            setUserData: se
          } = (0, f.useRockstarUserState)(), [te, re] = (0, t.useState)(null), [ce, ne] = (0, t.useState)(null), [ie, oe] = (0, t.useState)(!1), [le, de] = (0, t.useState)(!1), [me, ge] = (0, t.useState)(0), fe = (0, t.createRef)(), ue = (0, D.ri)(fe, !1), _e = (0, t.createRef)(), [ke, pe] = (0, t.useState)(0), [he, be] = (0, t.useState)([]), [ve, xe] = (0, t.useState)(244), Se = (0, t.useRef)(null), Ce = (0, t.useMemo)((() => (0, u.A)()), []), Ne = (0, t.useMemo)((() => ((e, a, s, t, r) => [{
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
              href: s.profile_link,
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
            hasNotifications: t,
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
              path: `/member/${s.nickname}/crews`
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
                path: `/member/${s.nickname}/friends`
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
          }, P(e), {
            text: e.formatMessage(o.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...R,
              text: o.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(C, a, F, J, U, window)), [C, a, F, J, U, Ce]), Me = () => {
            de(l + ve * me < ue)
          }, we = () => {
            if (_e.current) {
              const {
                current: e
              } = _e, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), pe(a + e)
              } else pe(a)
            }
          };
          return (0, t.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            Ce.currentSite?.site === u.C.socialClub && (e = encodeURIComponent("/")), H(e)
          }), [h]), (0, t.useEffect)((() => {
            be(F.characters[X] ?? [])
          }), [F, X]), (0, t.useEffect)((() => {
            F && se(F)
          }), [F]), (0, t.useEffect)((() => {
            const e = F?.characters.gtao;
            if (null !== z && !e.length) return void ae(!1);
            if (null == G || !e.length) return;
            const a = e?.[G] ?? e?.[0] ?? null;
            ae(!!a?.platform && [a.platform, a.characterSlot])
          }), [G, F, z]), (0, t.useEffect)((() => {
            (async () => {
              if (!F?.id) return;
              const {
                count: e
              } = await (0, b.coreScApiFetch)("notification/count", {
                pingBearer: A
              });
              q(e > 0)
            })()
          }), [F]), (0, t.useEffect)((() => {
            Me()
          }), [ve]), (0, t.useEffect)((() => {
            c(!0), k(x < 768), k(x < 768 || S < 649)
          }), [x, S]), (0, t.useEffect)((() => {
            let e = he.length - 1;
            e < 0 && (e = 0), ge(e);
            const a = he.length > 0 ? he[G] ?? he[0] : null;
            if (!a) return;
            const s = null !== a ? n(a.platform, "large") : null;
            ne(s), re(a), he.length > 1 ? oe(!0) : oe(!1), g(he.length - 1 > 3)
          }), [G, he]), (0, t.useEffect)((() => {
            Me()
          }), [me, _, x, he]), (0, t.useEffect)((() => {
            we(), T()((() => {
              setTimeout(we, 0)
            }), 300)
          }), [x, S]), (0, t.useEffect)((() => {
            const e = $?.currentCharId ?? 0;
            e !== G && Y(Math.max(0, Math.min(e, he.length - 1)))
          }), [he, $]), (0, d.jsxs)(d.Fragment, {
            children: [null !== te && "gtao" === X && (0, d.jsxs)("div", {
              className: ee.scProfile,
              ref: Se,
              tabIndex: -1,
              "aria-label": C.formatMessage(o.profile_selector_profile_card),
              children: [(0, d.jsx)(Q, {
                s: ee,
                character: te,
                platformTag: ce
              }), !0 === ie && (0, d.jsxs)("div", {
                className: ee.scCharacterSelector,
                children: [(0, d.jsx)("button", {
                  className: ee.scCharacterSelectBtn,
                  "aria-hidden": !K,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !s;
                    c(a), W({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": s,
                  children: (0, d.jsx)("span", {
                    children: (0, d.jsx)(r.FormattedMessage, {
                      ...o.profile_selector_switch_character
                    })
                  })
                }), !1 === _ && (0, d.jsx)("div", {
                  className: ee.scCharacterList,
                  "data-long-list": m,
                  "aria-hidden": s,
                  ref: i,
                  children: he.map((e => (0, d.jsx)(V, {
                    tabIndex: s ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: xe
                  }, e.mugshotUrl)))
                }), !0 === _ && (0, d.jsx)("div", {
                  className: ee.scCharacterList,
                  "data-single-item": 2 === he.length,
                  "data-swiper-disabled": le,
                  "aria-hidden": s,
                  ref: fe,
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
                    disablePager: le,
                    disableSwiper: le,
                    children: he.filter(((e, a) => a !== G)).map((e => (0, t.createElement)(V, {
                      characterData: e,
                      setMobileCardWidth: xe,
                      key: e.mugshotUrl,
                      tabIndex: s ? -1 : 0
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
                ref: _e,
                style: {
                  "--navWrap-max-height": `${ke+j}px`
                },
                children: Ne.map(((e, a) => (0, t.createElement)(B, {
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
              children: (0, d.jsx)(p, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: N,
                setLanguageSelectorOpened: M,
                location: h
              })
            })]
          })
        },
        se = {
          menu: "rockstargames-sites-rockstargamesc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-sites-rockstargamesc31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-sites-rockstargamesc5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-sites-rockstargamesb8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-sites-rockstargamesff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-sites-rockstargamesb49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-sites-rockstargameseff8c1d4bf675accdb7d952aba0174dc"
        },
        te = (0, r.withIntl)((e => {
          let {
            location: a,
            onNavigate: c
          } = e;
          const {
            windowHeight: n
          } = (0, b.useWindowResize)(), i = (0, r.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: m,
            setActiveSubNavId: g,
            navOpened: u,
            setScNavOpened: _,
            charListHidden: k,
            setCharListHidden: p
          } = L(), [v, x] = (0, t.useState)(!1), {
            navHidden: S = !1
          } = (0, b.useState)(), {
            loggedIn: C
          } = (0, f.useRockstarUser)(), {
            currentCharId: N,
            navOpen: M,
            setNavOpen: w,
            userData: y
          } = (0, f.useRockstarUserState)(), {
            track: j
          } = (0, f.useGtmTrack)(), [I, E] = (0, t.useState)(!1), T = (0, b.useReactiveVar)(f.scConfig), R = (0, t.useRef)(), [P, O] = (0, t.useState)(0), U = (0, t.createRef)(), [B, D] = (0, t.useState)(!1), [$, W] = (0, t.useState)(0), [A, F] = (0, t.useState)(!1), {
            mutateLSSettings: z,
            lsSettings: V
          } = (0, b.useRockstarWebLSSettings)(), X = (0, t.useCallback)((e => {
            p(e), R.current && !0 === e && (R.current.scrollTop = 0)
          }), [R]);
          return (0, t.useEffect)((() => {
            null !== N && V.currentCharId !== N && z({
              key: "currentCharId",
              value: N
            }), !1 === C ? z({
              key: "currentCharId",
              value: null
            }) : C && !y && j({
              event: "account_synced"
            })
          }), [N, C]), (0, t.useEffect)((() => {
            R.current && (!1 === k && !1 === I && (R.current.style.height = `${R.current.scrollHeight}px`), !0 === k && (R.current.style.height = null))
          }), [k, R, I]), (0, t.useEffect)((() => {
            const e = () => {
                w(!1), X(!0)
              },
              a = a => {
                const s = U?.current && a?.composedPath().includes(U.current);
                M && !s && e()
              },
              s = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", s), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", s)
            }
          }), [U]), (0, t.useEffect)((() => {
            w(!1), X(!0)
          }), [S]), (0, t.useEffect)((() => {
            if (U.current) {
              const {
                current: e
              } = U, a = window.getComputedStyle(e);
              O(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [U]), (0, t.useEffect)((() => {
            F(window.navigator.userAgent.includes("Mac"))
          }), []), (0, t.useEffect)((() => {
            U.current && x(U?.current?.scrollHeight >= n)
          }), [U, n]), (0, t.useEffect)((() => {
            M || (g(-1), m(!1))
          }), [M]), (0, t.useEffect)((() => {
            l && (k || X(!0), u && (_(!1), g(-1)))
          }), [l]), (0, t.useEffect)((() => {
            u && (l && m(!1), k || X(!0))
          }), [u]), null === C ? null : (0, d.jsxs)(h.A, {
            enabled: !!M,
            removeScrollBar: !1,
            children: [(0, d.jsxs)("div", {
              className: [se.menu, M ? se.navOpen : ""].join(" "),
              "data-logged-in": C,
              "data-mac-browser": A,
              "data-scroll-mode": v,
              ref: U,
              "aria-hidden": !M,
              children: [(0, d.jsx)("button", {
                className: se.dragHandleBtn,
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
                  className: se.dragHandle,
                  src: s(35902),
                  alt: i.formatMessage(o.sc_menu_drag_handle)
                })
              }), C ? (0, d.jsx)(ae, {
                sc: T,
                charListHidden: k,
                hideCharacterList: X,
                refCharacterListDesktop: R,
                menuPadding: P,
                longCharList: I,
                setLongCharList: E,
                isMobileMode: B,
                setIsMobileMode: D,
                location: a,
                onNavigate: c
              }) : (0, d.jsx)(H, {
                sc: T,
                navOpen: M,
                location: a,
                onNavigate: c
              })]
            }), (0, d.jsx)("div", {
              className: [se.scOverlay, M ? se.navOpen : ""].join(" "),
              "data-logged-in": C
            })]
          })
        }), c),
        re = s(5931),
        ce = s(32810),
        ne = (0, r.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const s = (0, r.useIntl)(),
            {
              data: c
            } = (0, f.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: l,
              navOpen: m,
              setNavOpen: g
            } = (0, f.useRockstarUserState)(),
            {
              track: u
            } = (0, f.useGtmTrack)(),
            [_, k] = (0, t.useState)(null),
            [p, h] = (0, t.useState)(!1),
            [b, v] = (0, t.useState)(null),
            [x, S] = (0, t.useState)(!1),
            [C, N] = (0, t.useState)([]);
          (0, t.useEffect)((() => {
            N(c.characters[i] ?? [])
          }), [c, i]);
          const M = (0, t.useCallback)((e => {
            e.stopPropagation(), g(!m), 1 == !m && a(null), u({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: m ? "close" : "open"
            })
          }), [m]);
          return (0, t.useEffect)((() => {
            const e = c?.id ?? !1,
              a = e ? (C?.[l]?.mugshotUrl ?? c?.avatar) || re : ce,
              s = n(C?.[l]?.platform, "small") ?? null;
            v(s), k(a), h(e), S(!!C?.[l]?.mugshotUrl)
          }), [c, C, l, re, ce]), _ ? (0, d.jsxs)("button", {
            className: "rockstargames-sites-rockstargamesee811a1fa8b17eb47afb419dd08ffb03",
            "data-img-set": x,
            "aria-label": s.formatMessage(m ? o.sc_menu_close : o.sc_menu_open),
            "aria-expanded": m,
            type: "button",
            onClick: M,
            "data-testid": "avatarMenuButton",
            "data-logged-in": Boolean(p),
            children: [(0, d.jsx)("img", {
              className: "rockstargames-sites-rockstargamesa917b58ca28b68550a1aa5d99c7eb998",
              src: _ || "",
              onError: () => {
                k(re)
              },
              alt: c?.nickname || ""
            }), p && null !== b && (0, d.jsx)("img", {
              className: "rockstargames-sites-rockstargamesc06123ceae7ca4759ec8b1a5197823db",
              src: b.src,
              alt: b.alt
            }), p && (0, d.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-rockstargamesc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": C?.[l]?.platform ?? null
            })]
          }) : null
        }), c),
        ie = {
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
        oe = e => {
          let {
            charListHidden: a,
            hideCharacterList: s,
            refCharacterListDesktop: c,
            menuPadding: i,
            longCharList: l,
            setLongCharList: m,
            isMobileMode: g
          } = e;
          const u = (0, r.useIntl)(),
            {
              windowWidth: _
            } = (0, b.useWindowResize)(),
            {
              track: k
            } = (0, f.useGtmTrack)(),
            {
              charactersNeeded: p,
              currentCharId: h,
              navOpen: v,
              setCurrentCharId: x,
              setSelectedCharacterTuple: S,
              setUserData: C,
              setCharacterAvatar: N,
              setCharacterPlatform: M
            } = (0, f.useRockstarUserState)(),
            [w, y] = (0, t.useState)(null),
            [j, I] = (0, t.useState)([]),
            [L, E] = (0, t.useState)(!1),
            [T, R] = (0, t.useState)(0),
            [P, O] = (0, t.useState)(244),
            [U, B] = (0, t.useState)(!1),
            [H, $] = (0, t.useState)(null),
            W = (0, t.useRef)(null),
            A = (0, t.createRef)(),
            F = (0, D.ri)(A, !1),
            {
              lsSettings: z
            } = (0, b.useRockstarWebLSSettings)(),
            {
              data: X,
              loggedIn: G
            } = (0, f.useRockstarUser)({
              fetchCharacters: !0
            }),
            J = () => {
              B(i + P * T < F)
            };
          return (0, t.useEffect)((() => {
            J()
          }), [P]), (0, t.useEffect)((() => {
            J()
          }), [T, g, _, j]), (0, t.useEffect)((() => {
            I(X.characters?.[p] ?? [])
          }), [X, p]), (0, t.useEffect)((() => {
            X && C(X)
          }), [X]), (0, t.useEffect)((() => {
            const e = X?.characters?.gtao;
            if (null !== G && !e?.length) return void S(!1);
            if (null == h || !e?.length) return;
            const a = e?.[h] ?? e?.[0] ?? null;
            S(!!a?.platform && [a.platform, a.characterSlot])
          }), [h, X, G]), (0, t.useEffect)((() => {
            let e = j.length - 1;
            e < 0 && (e = 0), R(e);
            const a = j.length > 0 ? j[h] ?? j[0] : null;
            if (!a) return;
            const s = null !== a ? n(a.platform, "large") : null;
            return $(s), y(a), N(a.mugshotUrl), M(a.platform), j.length > 1 ? E(!0) : E(!1), m(j.length - 1 > 3), () => {
              N(""), M("")
            }
          }), [h, j]), (0, t.useEffect)((() => {
            const e = z?.currentCharId ?? 0;
            e !== h && x(Math.max(0, Math.min(e, j.length - 1)))
          }), [j, z]), w && "gtao" === p ? (0, d.jsxs)("div", {
            className: ie.profile,
            ref: W,
            tabIndex: -1,
            "aria-label": u.formatMessage(o.profile_selector_profile_card),
            children: [(0, d.jsx)(Q, {
              s: ie,
              character: w,
              platformTag: H
            }), !0 === L && (0, d.jsxs)("div", {
              className: ie.scCharacterSelector,
              children: [(0, d.jsx)("button", {
                className: ie.scCharacterSelectBtn,
                "aria-hidden": !v,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const t = !a;
                  s(t), k({
                    event: t ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                "data-list-closed": a,
                children: (0, d.jsx)("span", {
                  children: (0, d.jsx)(r.FormattedMessage, {
                    ...o.profile_selector_switch_character
                  })
                })
              }), !1 === g && (0, d.jsx)("div", {
                className: ie.scCharacterList,
                "data-long-list": l,
                "aria-hidden": a,
                ref: c,
                children: j.map((e => (0, d.jsx)(V, {
                  tabIndex: a ? -1 : 0,
                  characterData: e,
                  setMobileCardWidth: O
                }, e.mugshotUrl)))
              }), !0 === g && (0, d.jsx)("div", {
                className: ie.scCharacterList,
                "data-single-item": 2 === j.length,
                "data-swiper-disabled": U,
                "aria-hidden": a,
                ref: A,
                children: (0, d.jsx)(Z, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    k({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  disablePager: U,
                  disableSwiper: U,
                  children: j.filter(((e, a) => a !== h)).map((e => (0, t.createElement)(V, {
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