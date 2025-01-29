! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "46831499-2cd2-40c0-87fb-5227cf6f9fa5", e._sentryDebugIdIdentifier = "sentry-dbid-46831499-2cd2-40c0-87fb-5227cf6f9fa5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [8144], {
    68144: (e, a, t) => {
      t.r(a), t.d(a, {
        CharacterCard: () => m,
        LanguageSelector: () => h,
        Menu: () => se,
        MenuButton: () => ne,
        ProfileSwitcher: () => ie
      });
      var s = t(62229),
        r = t(81788);
      const c = JSON.parse('{"us":{"rp_icon":"RP Category","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        n = (e, a) => {
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
        i = (0, r.defineMessages)({
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
        o = {
          pillBtn: "rockstargames-modules-core-newswire-articleb618569985ae824a0ad12179a3fc1d73",
          selected: "rockstargames-modules-core-newswire-articlee1a2f9a25bb7f66968281e2bc4e4de88",
          scCharacterCard: "rockstargames-modules-core-newswire-articleb5c76acf3bb09d7897375c618e9b0a12",
          avatar: "rockstargames-modules-core-newswire-articled6d3f262555eafb7d674aaf38e8ddfd6",
          scCharNames: "rockstargames-modules-core-newswire-articlecb995eda97ef905857c8d886edcf0897",
          scCharacterStats: "rockstargames-modules-core-newswire-articlea68d43553c702327a295c974a9c5e67b",
          scUserName: "rockstargames-modules-core-newswire-articlead1b6a52da2116461c0d8b9c63b8ee28",
          scRpLevel: "rockstargames-modules-core-newswire-articleaf42f06ddb8cff176be6fcb31e17271a",
          scRpIcon: "rockstargames-modules-core-newswire-articlef9a042c11d2e6a8ed1d5e78f40abd88d"
        };
      var d = t(98096);
      const m = (0, r.withIntl)((e => {
        let {
          characterData: a
        } = e;
        const c = (0, r.useIntl)(),
          {
            platform: m,
            platformUsername: u,
            mugshotUrl: f,
            stats: g
          } = a,
          [_, p] = (0, s.useState)(f),
          h = n(m, "large");
        return (0, d.jsxs)("div", {
          className: o.scCharacterCard,
          children: [(0, d.jsx)("div", {
            className: o.avatar,
            "data-size": "small",
            children: (0, d.jsx)("img", {
              src: _,
              alt: c.formatMessage(i.profile_selector_mugshot, {
                userName: u
              }),
              onError: () => {
                p(t(5931))
              }
            })
          }), (0, d.jsx)("div", {
            className: o.scCharacterStats,
            children: (0, d.jsxs)("div", {
              className: o.scCharNames,
              children: [(0, d.jsx)("img", {
                src: h.src,
                alt: h.alt
              }), (0, d.jsx)("div", {
                className: o.scUserName,
                "data-size": "small",
                children: u
              }), (0, d.jsx)("div", {
                className: o.scRp,
                children: (0, d.jsxs)("div", {
                  className: o.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: o.scRpIcon,
                    src: l(g.overview.rank.value),
                    alt: c.formatMessage(i.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })
          })]
        })
      }), c);
      var u = t(89950),
        f = t(93075),
        g = t(15138);
      const _ = (0, r.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        p = {
          pillBtn: "rockstargames-modules-core-newswire-articlee34929a5bcdda554c66b47a858ddd966",
          selected: "rockstargames-modules-core-newswire-articlee1ba906f108faeb297753d39a8d21b8b",
          menuStyles: "rockstargames-modules-core-newswire-articleb641fac428f473cbb4593cd058a01953",
          languageSelector: "rockstargames-modules-core-newswire-articlea9dd8a9cb7334e205df4ac3b4392916d",
          open: "rockstargames-modules-core-newswire-articleaa1d94595080f833a35e29fbbe8fd01c",
          linkWrapper: "rockstargames-modules-core-newswire-articleb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-modules-core-newswire-articlec64b05a604b1a6be373d35cf01edba2e",
          selectBoxWrapper: "rockstargames-modules-core-newswire-articledb1aead5717ba9dae1e272c3b7e6e801",
          selectBox: "rockstargames-modules-core-newswire-articlefe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-modules-core-newswire-articleae32febd9789e79c804b2679d25e8a65"
        },
        h = (0, r.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: c,
            location: n,
            parent: l = "footer"
          } = e;
          const {
            track: i
          } = (0, f.h)(), o = (0, r.useIntl)(), [m, h] = (0, r.getLocale)(), [b, k] = (0, s.useState)(!1), w = (0, s.useMemo)((() => (0, g.A)()), []), v = (0, s.useCallback)((e => {
            let a = n.pathname.replace(/^\/|\/$/g, "");
            const t = a.split("/");
            return r.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), w.currentSite?.site === g.C.www ? "en" === e ? `${window.location.origin}/${a}${n.search}` : `${window.location.origin}/${e}/${a}${n.search}` : `${window.location.origin}/${a}${n.search}`
          }), [n]), x = (0, s.useRef)(null), [S, C] = (0, s.useState)(0), N = matchMedia("(hover: none) and (pointer: coarse)").matches, M = e => {
            if (c && c(!1), m.subdomaincom === e || "none" === e) return void(c && c(!1));
            const a = r.locales.find((a => a.subdomaincom === e));
            if (a) {
              const t = v(e);
              i({
                event: "cta_other",
                link_url: t,
                text: e,
                element_placement: l
              }), h(a.iso), window.location.href = t
            }
          };
          return (0, s.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === b && k(!1)
          }), [t]), (0, s.useEffect)((() => {
            x.current && C(x.current.scrollHeight)
          }), [x]), (0, d.jsxs)("div", {
            className: [p.languageSelector, b ? p.open : ""].join(" "),
            "data-theme": a,
            children: [N && "sc-menu" === a && (0, d.jsx)("div", {
              className: p.selectBoxWrapper,
              children: (0, d.jsxs)("select", {
                className: p.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  M(a)
                },
                "aria-label": o.formatMessage(_.language_selector_default),
                children: [(0, d.jsx)("option", {
                  className: p.selectBoxOption,
                  value: "none",
                  children: (0, d.jsx)(r.FormattedMessage, {
                    ..._.language_selector_default
                  })
                }), r.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, d.jsx)("option", {
                    className: p.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!N || "sc-menu" !== a) && (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), c && c(!b), k(!b)
                },
                type: "button",
                "aria-label": o.formatMessage(_.language_selector_default),
                children: [(0, d.jsx)("i", {}), (0, d.jsx)("span", {
                  children: (0, d.jsx)(r.FormattedMessage, {
                    ..._.language_selector_default
                  })
                })]
              }), (0, d.jsx)("div", {
                className: p.linkWrapper,
                ref: x,
                style: {
                  "--ls-linkWrapper-opened-height": `${S}px`
                },
                children: (0, d.jsx)("div", {
                  className: p.links,
                  children: r.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, d.jsx)(u.A, {
                      to: v(a),
                      onClick: (s = a, () => {
                        M(s)
                      }),
                      tabIndex: b ? 0 : -1,
                      children: t
                    }, `desktop-${a}`);
                    var s
                  }))
                })
              })]
            })]
          })
        }), c);
      var b = t(64147),
        k = t(95966);
      const w = (0, k.makeVar)(!1),
        v = e => w(e),
        x = (0, k.makeVar)(-1),
        S = e => x(e),
        C = (0, k.makeVar)(-1),
        N = e => C(e),
        M = (0, k.makeVar)(!0),
        y = e => M(e),
        j = (0, k.makeVar)(!0),
        I = e => j(e),
        L = () => {
          const e = (0, k.useReactiveVar)(w),
            a = (0, k.useReactiveVar)(x),
            t = (0, k.useReactiveVar)(C),
            r = (0, k.useReactiveVar)(M),
            c = (0, k.useReactiveVar)(j);
          return (0, s.useEffect)((() => {
            c || (e && v(!1), r && (y(!1), S(-1)))
          }), [c]), (0, s.useEffect)((() => {
            !e && c && (r || y(!0))
          }), [e, c]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: v,
            activeSubNavId: a,
            setActiveSubNavId: S,
            subNavExtraHeight: t,
            setSubNavExtraHeight: N,
            navOpened: r,
            setScNavOpened: y,
            charListHidden: c,
            setCharListHidden: I
          })), [e, a, t, r, c])
        };
      var E = t(45757),
        P = t.n(E);
      const T = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        O = e => ({
          text: e.formatMessage(i.sc_link_help),
          target: "_self",
          ga: {
            ...T,
            text: i.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(i.sc_link_support),
            location: {
              domain: g.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...T,
              text: i.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(i.sc_link_legal),
            location: {
              domain: g.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...T,
              text: i.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(i.sc_link_privacy_policy),
            location: {
              domain: g.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...T,
              text: i.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(i.sc_link_cookies_policy),
            location: {
              domain: g.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...T,
              text: i.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(i.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...T,
              text: i.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(i.sc_link_do_not_sell_my_information),
            location: {
              domain: g.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...T,
              text: i.sc_link_do_not_sell_my_information.defaultMessage
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
            children: l,
            ...i
          } = e;
          const o = a?.startsWith("http");
          return (0, d.jsx)("a", {
            href: a,
            className: s,
            onClick: e => {
              c?.(e), o || n || (r ? (e.preventDefault(), r(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            target: t,
            ...i,
            children: l
          })
        },
        $ = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: c,
            ga: n,
            dataTestId: l,
            isSubLink: o,
            hasNotifications: m = !1,
            onClickCallback: u = (() => {}),
            tabIndex: _,
            reloadDocument: p = !1,
            onNavigate: h
          } = e;
          const {
            track: b
          } = (0, f.h)(), k = (0, g.A)(), w = (0, r.useIntl)();
          let v = s;
          c && (v = c.domain === k.currentSite?.site ? c.path : `https://${k.sites[c.domain]}.rockstargames.com${c.path}`);
          const x = {
            ...n,
            link_url: v
          };
          return (0, d.jsxs)(R, {
            className: o ? "rockstargames-modules-core-newswire-articlec2233d027086d54af877493d7d0700bd" : "rockstargames-modules-core-newswire-articlef97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": l || "menuLink",
            title: a,
            to: v,
            target: t,
            rel: "noreferrer",
            reloadDocument: p,
            tabIndex: _,
            onClick: e => {
              b(x), u(e)
            },
            onNavigate: h,
            children: [a, m && (0, d.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlef5178077f8a32e83d71d4e80b551903d",
              children: (0, d.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlee49e290899be3c888ca5a4b6b13736a1",
                children: w.formatMessage(i.nofications_new)
              })
            })]
          })
        },
        B = e => {
          let {
            id: a,
            text: t,
            target: r,
            href: c,
            location: n,
            ga: l,
            hasNotifications: i = !1,
            dataTestId: o,
            children: m = [],
            activeSubNavId: u,
            setActiveSubNavId: g,
            setSubNavExtraHeight: _,
            reloadDocument: p = !1,
            onClickCallback: h = (() => {}),
            onNavigate: b
          } = e;
          const {
            windowWidth: w,
            windowHeight: v
          } = (0, k.useWindowResize)(), {
            track: x
          } = (0, f.h)(), {
            navOpen: S
          } = (0, f.F$)(), C = (0, s.useRef)(null), [N, M] = (0, s.useState)(0), [y, j] = (0, s.useState)(0), [I, L] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            u !== a && !1 === I && L(!0), u === a && L(!1)
          }), [u]), (0, s.useEffect)((() => {
            if (!C.current) return;
            M(C?.current?.scrollHeight);
            const e = window.getComputedStyle(C.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [C, w, v]), m.length > 0 ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("button", {
              className: "rockstargames-modules-core-newswire-articleab99be57ff98f572ec19be5191046577",
              type: "button",
              "data-testid": o || "menuButton",
              title: t,
              tabIndex: S ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), x(l), u === a ? (g(-1), _(0)) : (g(a), _(N + y + y))
              },
              children: [(0, d.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlee5caaa3aab68c5526a84b01ef0db0a8a",
                children: t
              }), (0, d.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlebb9e4df34c9ecbe29c9886426e64ed12"
              })]
            }, t), (0, d.jsx)("nav", {
              className: "rockstargames-modules-core-newswire-articlee482683a0cb805002f8bd41b8ef81537",
              ref: C,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${N}px`
              },
              children: m.map((e => (0, s.createElement)($, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !S ? -1 : 0,
                onNavigate: b
              })))
            })]
          }) : (0, d.jsx)($, {
            text: t,
            target: r,
            href: c,
            location: n,
            ga: l,
            hasNotifications: i,
            dataTestId: o,
            isSubLink: !1,
            onClickCallback: h,
            tabIndex: S ? 0 : -1,
            reloadDocument: p,
            onNavigate: b
          })
        },
        H = e => {
          let {
            sc: a,
            location: t,
            onNavigate: c
          } = e;
          const {
            windowWidth: n,
            windowHeight: l
          } = (0, k.useWindowResize)(), o = (0, r.useIntl)(), {
            languageSelectorOpened: m,
            setLanguageSelectorOpened: u,
            activeSubNavId: _,
            setActiveSubNavId: p,
            subNavExtraHeight: b,
            setSubNavExtraHeight: w
          } = L(), {
            setSelectedCharacterTuple: v,
            navOpen: x
          } = (0, f.F$)(), S = (0, k.useLocale)(), C = (0, k.toScLocaleString)(S), [N, M] = (0, s.useState)(""), y = `${a.login}?returnUrl=${N}&lang=${C}`, j = `${a.signup}&returnUrl=${N}&lang=${C}`, I = (0, s.useMemo)((() => (0, g.A)()), []), E = (0, s.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(i.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: i.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(i.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: i.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, O(e)])(o, y, j);
            return e
          }), [o, y, j, I]), [T, R] = (0, s.useState)(0), $ = (0, s.createRef)(), H = () => {
            if ($.current) {
              const {
                current: e
              } = $, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), R(a + e)
              } else R(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            M(e)
          }), [JSON.stringify(t)]), (0, s.useEffect)((() => {
            v(!1)
          }), []), (0, s.useEffect)((() => {
            H(), P()((() => {
              setTimeout(H, 0)
            }), 300)
          }), [n, l]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("nav", {
              className: "rockstargames-modules-core-newswire-articlef300d66bd02f52ac564238ca6125a091",
              children: (0, d.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articleac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: $,
                style: {
                  "--navWrap-max-height": `${b+T}px`
                },
                children: E.map((e => (0, s.createElement)(B, {
                  ...e,
                  activeSubNavId: _,
                  setActiveSubNavId: p,
                  setSubNavExtraHeight: w,
                  onNavigate: c,
                  key: e.text
                })))
              })
            }), (0, d.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlef30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: x ? null : "hidden"
              },
              children: (0, d.jsx)(h, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: m,
                setLanguageSelectorOpened: e => {
                  p(-1), u(e)
                },
                defaultMessage: "Select a Language",
                location: t
              })
            })]
          })
        };
      var D = t(86082);
      const W = {
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "Xbox One",
          xboxsx: "Xbox Series X|S"
        },
        F = "CharacterButton:characterName",
        U = "CharacterButton:platform",
        A = "CharacterButton:avatar",
        z = "CharacterButton:rankValue",
        V = e => {
          let {
            characterData: a,
            setMobileCardWidth: c,
            tabIndex: o
          } = e;
          const m = (0, r.useIntl)(),
            {
              currentCharId: u,
              setCurrentCharId: g
            } = (0, f.F$)(),
            {
              track: _
            } = (0, f.h)(),
            p = (0, s.createRef)(),
            {
              platform: h,
              platformUsername: b,
              mugshotUrl: k,
              stats: w
            } = a,
            [v, x] = (0, s.useState)(k),
            [S] = (0, s.useState)(a.index),
            C = n(h, "large"),
            N = u === a.index;
          return (0, s.useEffect)((() => {
            p.current && c && c(p?.current?.offsetWidth)
          }), [p]), (0, d.jsxs)("button", {
            className: "rockstargames-modules-core-newswire-articleb26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": N,
            onClick: e => {
              e.stopPropagation(), g(S), _({
                event: "character_selector_select",
                text: W[h] ?? "",
                position: S
              })
            },
            ref: p,
            tabIndex: o,
            children: [(0, d.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articled79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, d.jsx)("img", {
                src: v,
                alt: m.formatMessage(i.profile_selector_mugshot, {
                  userName: b
                }),
                onError: () => {
                  x(t(5931))
                },
                "data-testid": A
              })
            }), (0, d.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleed30f2b92b3fc2937e7278409208872f",
              children: [(0, d.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlea6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, d.jsx)("img", {
                  src: C.src,
                  alt: C.alt,
                  "data-testid": U
                }), (0, d.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlec3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": F,
                  children: b
                })]
              }), (0, d.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlef5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, d.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articlec9300f34b82bbdffb7006ff32247adff",
                  children: [(0, d.jsx)("img", {
                    className: "rockstargames-modules-core-newswire-articlefaa7b2808fb96fa02fd2e99be36df8e6",
                    src: l(parseInt(w.overview.rank.value)),
                    alt: m.formatMessage(i.profile_selector_rp_icon)
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
          pillBtn: "rockstargames-modules-core-newswire-articlec094ee9992658964204dbc3c55063187",
          selected: "rockstargames-modules-core-newswire-articlef68f5558f3bacb6ab2f0f6e52b7c4d3d",
          profileDetails: "rockstargames-modules-core-newswire-articlec7a6cdc85906179aeadfbea13a491277",
          avatar: "rockstargames-modules-core-newswire-articlee1ed133f04d4201de6c787667fe46939",
          avatarPlatform: "rockstargames-modules-core-newswire-articleb061d8f050dd255669342700ddbe9f94",
          profileStats: "rockstargames-modules-core-newswire-articlea4a23edaf47f301893d88f6e233907b3",
          scNames: "rockstargames-modules-core-newswire-articlec6a703613ae9abf4927cf1f023878d9c",
          scTagsNames: "rockstargames-modules-core-newswire-articleac56f06be77872b6f7ba074189a2ec36",
          scUserName: "rockstargames-modules-core-newswire-articlea829077ec05e5b83560be13ff3604c8e",
          scCrewName: "rockstargames-modules-core-newswire-articlec3c644cc20da4e904a7f4e5e3850bf7b",
          scCrewRankBar: "rockstargames-modules-core-newswire-articlecacefbe6235792c328eabdb72c7e812c",
          scCrewRankBarItem: "rockstargames-modules-core-newswire-articlef9fc60f5d92cda504e6a40d09ec34429",
          scProgress: "rockstargames-modules-core-newswire-articleb1230619acc50d561a73b55a185e782e",
          scRpLevel: "rockstargames-modules-core-newswire-articlee3dcece76ffe0dcd864d13ada6a4c532",
          scRpIcon: "rockstargames-modules-core-newswire-articlefd047e239c2b7adafe8729ad8e7ae646",
          scMoney: "rockstargames-modules-core-newswire-articleffc96f13a79073f795d296415f874263",
          scCash: "rockstargames-modules-core-newswire-articlef21a08a90936d208b236a20d5893ab50",
          scBank: "rockstargames-modules-core-newswire-articleee0f3a44274a32b7c03d50d1f8e23578"
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
          } = (0, f.Wx)(), {
            track: o
          } = (0, f.h)(), m = (0, r.useIntl)(), [u, g] = (0, s.useState)([]), [_, p] = (0, s.useState)(null), [h, b] = (0, s.useState)(null), [k, w] = (0, s.useState)(!1), [v, x] = (0, s.useState)(-1), [S, C] = (0, s.useState)([]), [N, M] = (0, s.useState)(0), y = t(5931), [j, I] = (0, s.useState)("0"), [L, E] = (0, s.useState)("0"), P = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), T = () => {
            R((0, d.jsx)("img", {
              src: y,
              alt: m.formatMessage(i.profile_selector_mugshot, {
                userName: n.nickname
              })
            }))
          }, [O, R] = (0, s.useState)((0, d.jsx)("img", {
            className: X.avatarImg,
            src: a.mugshotUrl,
            alt: m.formatMessage(i.profile_selector_mugshot, {
              userName: n.nickname
            }),
            onError: T,
            "data-testid": J
          }));
          (0, s.useEffect)((() => {
            g(n.crews ?? [])
          }), [n.crews]), (0, s.useEffect)((() => {
            R((0, d.jsx)("img", {
              src: a.mugshotUrl,
              alt: n.nickname,
              onError: T,
              "data-testid": J
            })), I(P(a.stats.overview.bank.value)), E(P(a.stats.overview.cash.value)), M(parseInt(a.stats.overview.rank.value))
          }), [a, n.nickname]), (0, s.useEffect)((() => {
            u && u.forEach((e => {
              !0 === e.isPrimary && (p(e.crewTag), b(e.crewColour), x(e.rankOrder), w(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && w(!0))
            }))
          }), [u]), (0, s.useEffect)((() => {
            const e = [];
            if (!k && v > -1)
              for (let a = 5; a > v; a -= 1) e.push((0, d.jsx)("div", {
                className: X.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== h ? h : ""
                }
              }, `crewrankbar-${a}`));
            C(e)
          }), [v, k, h]);
          const $ = e => {
            e.stopPropagation(), o({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, d.jsxs)("div", {
            className: X.profileDetails,
            onClick: $,
            onKeyUp: $,
            role: "button",
            tabIndex: -1,
            children: [(0, d.jsxs)("div", {
              className: X.avatar,
              children: [O, (0, d.jsx)("div", {
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
                    "data-arrow-tag": k,
                    children: [_, !k && (0, d.jsx)("div", {
                      className: X.scCrewRankBar,
                      children: S
                    })]
                  })]
                })
              }), (0, d.jsxs)("div", {
                className: X.scProgress,
                children: [(0, d.jsxs)("div", {
                  className: X.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: X.scRpIcon,
                    src: l(N),
                    alt: m.formatMessage(i.profile_selector_rp_icon)
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
            mobileGutterWidth: r = 17,
            slideChangeCallback: c = null,
            slideClickCallback: n = null,
            children: l = [],
            disablePager: i = !1,
            disableSwiper: o = !1
          } = e;
          const m = (0, s.createRef)(),
            u = (0, D.ri)(m, !1),
            [f, g] = (0, s.useState)(!1),
            [_, p] = (0, s.useState)(0),
            [h, b] = (0, s.useState)(0),
            [k, w] = (0, s.useState)([r]),
            [v, x] = (0, s.useState)(k[0]),
            [S, C] = (0, s.useState)(252),
            [N, M] = (0, s.useState)(0),
            [y, j] = (0, s.useState)([]),
            [I, L] = (0, s.useState)([]),
            [E, P] = (0, s.useState)(!1),
            T = e => {
              if (!0 === f || !0 === o) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            O = e => {
              if (!0 === f || 0 === h || !0 === o) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > h ? 1 : -1,
                r = Math.abs(h - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === f) return;
                g(!0);
                const e = _ - 1 < 0 ? 0 : _ - 1;
                p(e), x(k[e]), c && c(e)
              })() : (() => {
                if (!0 === f) return;
                g(!0);
                let e = _ + 1 >= k.length ? k.length - 1 : _ + 1;
                e < 0 && (e = 0), p(e), x(k[e]), c && c(e)
              })(), b(0)) : x(k[_] + r * s)
            },
            R = () => {
              !0 !== f && !0 !== o && (g(!0), !0 !== f && (x(k[_]), b(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            l.forEach((() => {
              e.push((0, s.createRef)())
            })), j(e)
          }), [l]), (0, s.useEffect)((() => {
            if (y.length < 1) return;
            C(y[0]?.current?.clientWidth || 0);
            const e = y[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            M(t + a)
          }), [y]), (0, s.useEffect)((() => {
            !1 !== f && setTimeout((() => {
              g(!1)
            }), t)
          }), [f, t]), (0, s.useEffect)((() => {
            w(l.map(((e, a) => (e => {
              let a = 0;
              const t = l.length;
              return 1 === t ? .5 * u - .5 * S - 2 * r + N : (0 === e && (a = r - e * S), e === t - 1 && t > 1 && (a = t * S * -1 + (u - (r - N))), e > 0 && e < t - 1 && (a = e * S * -1 + (.5 * u - .5 * S + .5 * N)), a)
            })(a)))), 1 === l.length ? P(!0) : P(!1)
          }), [m.current, l, u]), (0, s.useEffect)((() => {
            const e = (a = _, l.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            L(e)
          }), [l, _]), (0, s.useEffect)((() => {
            !0 !== i && !0 !== o || x(k[0])
          }), [o, i, k]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb794a0e12537ad5fd506353133b9d60a",
              ref: m,
              onTouchStart: T,
              onTouchMove: O,
              onTouchEnd: R,
              onMouseDown: T,
              onMouseMove: O,
              onMouseUp: R,
              onClick: () => {
                null !== n && n(_)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, d.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": f,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${v}px)`
                },
                children: l.map(((e, a) => (0, d.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articledd4bcd955436c8a6982ee16756f7fd8b",
                  ref: y[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), I.length > 1 && !1 === i && (0, d.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlee8e5249dac92a2bc76788d0fe7d7dfb7",
              children: I.map((e => (0, d.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlef64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        ee = {
          pillBtn: "rockstargames-modules-core-newswire-articleb4f0b55680e047d303f82f34594abd96",
          selected: "rockstargames-modules-core-newswire-articleed6126bd2f36579f2b8035e7c6579eb7",
          profile: "rockstargames-modules-core-newswire-articlee506a7deb95c0b0c9988325cc857ea9a",
          scCharacterSelector: "rockstargames-modules-core-newswire-articlec3ea8d575c892277f23ad5b589977862",
          scCharacterSelectBtn: "rockstargames-modules-core-newswire-articleea15428b850bf436adda6f1dd8ac1af9",
          open: "rockstargames-modules-core-newswire-articlec5ffa3cbaa36329b72b3d928f9739849",
          scCharacterList: "rockstargames-modules-core-newswire-articlea84bbdd60e615baed0172e6b960c5d32",
          nav: "rockstargames-modules-core-newswire-articleca9118e28091523e6679a3b95054fe93",
          languageSelector: "rockstargames-modules-core-newswire-articleb71a5b5521e679bcab20ec6302253996",
          navHeader: "rockstargames-modules-core-newswire-articlefa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-modules-core-newswire-articlece91ee6ebb491174a4ccb4be628aaae7"
        },
        ae = e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: c,
            refCharacterListDesktop: l,
            menuPadding: o,
            longCharList: m,
            setLongCharList: u,
            isMobileMode: _,
            setIsMobileMode: p,
            location: b,
            onNavigate: w
          } = e;
          const {
            windowWidth: v,
            windowHeight: x
          } = (0, k.useWindowResize)(), S = (0, r.useIntl)(), {
            languageSelectorOpened: C,
            setLanguageSelectorOpened: N,
            activeSubNavId: M,
            setActiveSubNavId: y,
            subNavExtraHeight: j,
            setSubNavExtraHeight: I,
            navOpened: E,
            setScNavOpened: R
          } = L(), [$, H] = (0, s.useState)(""), {
            lsSettings: W
          } = (0, k.useRockstarWebLSSettings)(), {
            track: F
          } = (0, f.h)(), U = (0, k.useRockstarTokenPing)(), {
            data: A,
            loggedIn: z
          } = (0, f.Wx)(), {
            charactersNeeded: X,
            currentCharId: G,
            hasNotifications: J,
            navOpen: K,
            setCurrentCharId: Y,
            setHasNotifications: q,
            setSelectedCharacterTuple: ae,
            setUserData: te
          } = (0, f.F$)(), [se, re] = (0, s.useState)(null), [ce, ne] = (0, s.useState)(null), [le, ie] = (0, s.useState)(!1), [oe, de] = (0, s.useState)(!1), [me, ue] = (0, s.useState)(0), fe = (0, s.createRef)(), ge = (0, D.ri)(fe, !1), _e = (0, s.createRef)(), [pe, he] = (0, s.useState)(0), [be, ke] = (0, s.useState)([]), [we, ve] = (0, s.useState)(244), xe = (0, s.useRef)(null), Se = (0, s.useMemo)((() => (0, g.A)()), []), Ce = (0, s.useMemo)((() => ((e, a, t, s, r) => [{
            text: e.formatMessage(i.sc_link_activity_feed),
            location: {
              domain: g.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...T,
              text: i.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(i.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(i.sc_link_settings),
              location: {
                domain: g.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...T,
                text: i.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(i.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...T,
                text: i.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(i.sc_link_messages),
              location: {
                domain: g.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...T,
                text: i.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(i.sc_link_game_activation),
              location: {
                domain: g.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...T,
                text: i.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(i.sc_link_notifications),
            location: {
              domain: g.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...T,
              text: i.sc_link_notifications.defaultMessage,
              location: {
                domain: g.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(i.sc_link_crews),
            location: {
              domain: g.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...T,
              text: i.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(i.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(i.sc_link_my_friends),
              location: {
                domain: g.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...T,
                text: i.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(i.sc_link_import_friends),
              location: {
                domain: g.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...T,
                text: i.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(i.sc_link_find_friends),
              location: {
                domain: g.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...T,
                text: i.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, O(e), {
            text: e.formatMessage(i.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...T,
              text: i.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(S, a, A, J, $, window)), [S, a, A, J, $, Se]), Ne = () => {
            de(o + we * me < ge)
          }, Me = () => {
            if (_e.current) {
              const {
                current: e
              } = _e, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), he(a + e)
              } else he(a)
            }
          };
          return (0, s.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            Se.currentSite?.site === g.C.socialClub && (e = encodeURIComponent("/")), H(e)
          }), [b]), (0, s.useEffect)((() => {
            ke(A.characters[X] ?? [])
          }), [A, X]), (0, s.useEffect)((() => {
            A && te(A)
          }), [A]), (0, s.useEffect)((() => {
            const e = A?.characters.gtao;
            if (null !== z && !e.length) return void ae(!1);
            if (null == G || !e.length) return;
            const a = e?.[G] ?? e?.[0] ?? null;
            ae(!!a?.platform && [a.platform, a.characterSlot])
          }), [G, A, z]), (0, s.useEffect)((() => {
            (async () => {
              if (!A?.id) return;
              const {
                count: e
              } = await (0, k.coreScApiFetch)("notification/count", {
                pingBearer: U
              });
              q(e > 0)
            })()
          }), [A]), (0, s.useEffect)((() => {
            Ne()
          }), [we]), (0, s.useEffect)((() => {
            c(!0), p(v < 768), p(v < 768 || x < 649)
          }), [v, x]), (0, s.useEffect)((() => {
            let e = be.length - 1;
            e < 0 && (e = 0), ue(e);
            const a = be.length > 0 ? be[G] ?? be[0] : null;
            if (!a) return;
            const t = null !== a ? n(a.platform, "large") : null;
            ne(t), re(a), be.length > 1 ? ie(!0) : ie(!1), u(be.length - 1 > 3)
          }), [G, be]), (0, s.useEffect)((() => {
            Ne()
          }), [me, _, v, be]), (0, s.useEffect)((() => {
            Me(), P()((() => {
              setTimeout(Me, 0)
            }), 300)
          }), [v, x]), (0, s.useEffect)((() => {
            const e = W?.currentCharId ?? 0;
            e !== G && Y(Math.max(0, Math.min(e, be.length - 1)))
          }), [be, W]), (0, d.jsxs)(d.Fragment, {
            children: [null !== se && "gtao" === X && (0, d.jsxs)("div", {
              className: ee.scProfile,
              ref: xe,
              tabIndex: -1,
              "aria-label": S.formatMessage(i.profile_selector_profile_card),
              children: [(0, d.jsx)(Q, {
                s: ee,
                character: se,
                platformTag: ce
              }), !0 === le && (0, d.jsxs)("div", {
                className: ee.scCharacterSelector,
                children: [(0, d.jsx)("button", {
                  className: ee.scCharacterSelectBtn,
                  "aria-hidden": !K,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    c(a), F({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, d.jsx)("span", {
                    children: (0, d.jsx)(r.FormattedMessage, {
                      ...i.profile_selector_switch_character
                    })
                  })
                }), !1 === _ && (0, d.jsx)("div", {
                  className: ee.scCharacterList,
                  "data-long-list": m,
                  "aria-hidden": t,
                  ref: l,
                  children: be.map((e => (0, d.jsx)(V, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ve
                  }, e.mugshotUrl)))
                }), !0 === _ && (0, d.jsx)("div", {
                  className: ee.scCharacterList,
                  "data-single-item": 2 === be.length,
                  "data-swiper-disabled": oe,
                  "aria-hidden": t,
                  ref: fe,
                  children: (0, d.jsx)(Z, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      F({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: oe,
                    disableSwiper: oe,
                    children: be.filter(((e, a) => a !== G)).map((e => (0, s.createElement)(V, {
                      characterData: e,
                      setMobileCardWidth: ve,
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
                  e.stopPropagation(), E || R(!0)
                },
                "data-testid": "playerButton",
                children: (0, d.jsx)("span", {
                  children: A.nickname
                })
              }), (0, d.jsx)("div", {
                className: ee.navWrap,
                "data-opened": E,
                "data-logged-in": "true",
                ref: _e,
                style: {
                  "--navWrap-max-height": `${pe+j}px`
                },
                children: Ce.map(((e, a) => (0, s.createElement)(B, {
                  ...e,
                  id: a,
                  activeSubNavId: M,
                  setActiveSubNavId: y,
                  setSubNavExtraHeight: I,
                  onNavigate: w,
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
                languageSelectorOpened: C,
                setLanguageSelectorOpened: N,
                location: b
              })
            })]
          })
        },
        te = {
          menu: "rockstargames-modules-core-newswire-articlec0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-modules-core-newswire-articlec31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-modules-core-newswire-articlec5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-modules-core-newswire-articleb8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-modules-core-newswire-articleff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-core-newswire-articleb49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-modules-core-newswire-articleeff8c1d4bf675accdb7d952aba0174dc"
        },
        se = (0, r.withIntl)((e => {
          let {
            location: a,
            onNavigate: c
          } = e;
          const {
            windowHeight: n
          } = (0, k.useWindowResize)(), l = (0, r.useIntl)(), {
            languageSelectorOpened: o,
            setLanguageSelectorOpened: m,
            setActiveSubNavId: u,
            navOpened: g,
            setScNavOpened: _,
            charListHidden: p,
            setCharListHidden: h
          } = L(), [w, v] = (0, s.useState)(!1), {
            navHidden: x = !1
          } = (0, k.useState)(), {
            loggedIn: S
          } = (0, f.Wx)(), {
            currentCharId: C,
            navOpen: N,
            setNavOpen: M,
            userData: y
          } = (0, f.F$)(), {
            track: j
          } = (0, f.h)(), [I, E] = (0, s.useState)(!1), P = (0, k.useReactiveVar)(f.Tz), T = (0, s.useRef)(), [O, R] = (0, s.useState)(0), $ = (0, s.createRef)(), [B, D] = (0, s.useState)(!1), [W, F] = (0, s.useState)(0), [U, A] = (0, s.useState)(!1), {
            mutateLSSettings: z,
            lsSettings: V
          } = (0, k.useRockstarWebLSSettings)(), X = (0, s.useCallback)((e => {
            h(e), T.current && !0 === e && (T.current.scrollTop = 0)
          }), [T]);
          return (0, s.useEffect)((() => {
            null !== C && V.currentCharId !== C && z({
              key: "currentCharId",
              value: C
            }), !1 === S ? z({
              key: "currentCharId",
              value: null
            }) : S && !y && j({
              event: "account_synced"
            })
          }), [C, S]), (0, s.useEffect)((() => {
            T.current && (!1 === p && !1 === I && (T.current.style.height = `${T.current.scrollHeight}px`), !0 === p && (T.current.style.height = null))
          }), [p, T, I]), (0, s.useEffect)((() => {
            const e = () => {
                M(!1), X(!0)
              },
              a = a => {
                const t = $?.current && a?.composedPath().includes($.current);
                N && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }), [$]), (0, s.useEffect)((() => {
            M(!1), X(!0)
          }), [x]), (0, s.useEffect)((() => {
            if ($.current) {
              const {
                current: e
              } = $, a = window.getComputedStyle(e);
              R(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [$]), (0, s.useEffect)((() => {
            A(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            $.current && v($?.current?.scrollHeight >= n)
          }), [$, n]), (0, s.useEffect)((() => {
            N || (u(-1), m(!1))
          }), [N]), (0, s.useEffect)((() => {
            o && (p || X(!0), g && (_(!1), u(-1)))
          }), [o]), (0, s.useEffect)((() => {
            g && (o && m(!1), p || X(!0))
          }), [g]), null === S ? null : (0, d.jsxs)(b.A, {
            enabled: !!N,
            removeScrollBar: !1,
            children: [(0, d.jsxs)("div", {
              className: [te.menu, N ? te.navOpen : ""].join(" "),
              "data-logged-in": S,
              "data-mac-browser": U,
              "data-scroll-mode": w,
              ref: $,
              "aria-hidden": !N,
              children: [(0, d.jsx)("button", {
                className: te.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  F(a)
                },
                onTouchMove: e => {
                  if (0 === W) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(W - a) > 1 && (F(0), M(!1))
                },
                children: (0, d.jsx)("img", {
                  className: te.dragHandle,
                  src: t(35902),
                  alt: l.formatMessage(i.sc_menu_drag_handle)
                })
              }), S ? (0, d.jsx)(ae, {
                sc: P,
                charListHidden: p,
                hideCharacterList: X,
                refCharacterListDesktop: T,
                menuPadding: O,
                longCharList: I,
                setLongCharList: E,
                isMobileMode: B,
                setIsMobileMode: D,
                location: a,
                onNavigate: c
              }) : (0, d.jsx)(H, {
                sc: P,
                navOpen: N,
                location: a,
                onNavigate: c
              })]
            }), (0, d.jsx)("div", {
              className: [te.scOverlay, N ? te.navOpen : ""].join(" "),
              "data-logged-in": S
            })]
          })
        }), c),
        re = t(5931),
        ce = t(32810),
        ne = (0, r.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, r.useIntl)(),
            {
              data: c
            } = (0, f.Wx)(),
            {
              charactersNeeded: l,
              currentCharId: o,
              navOpen: m,
              setNavOpen: u
            } = (0, f.F$)(),
            {
              track: g
            } = (0, f.h)(),
            [_, p] = (0, s.useState)(null),
            [h, b] = (0, s.useState)(!1),
            [k, w] = (0, s.useState)(null),
            [v, x] = (0, s.useState)(!1),
            [S, C] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            C(c.characters[l] ?? [])
          }), [c, l]);
          const N = (0, s.useCallback)((e => {
            e.stopPropagation(), u(!m), 1 == !m && a(null), g({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: m ? "close" : "open"
            })
          }), [m]);
          return (0, s.useEffect)((() => {
            const e = c?.id ?? !1,
              a = e ? (S?.[o]?.mugshotUrl ?? c?.avatar) || re : ce,
              t = n(S?.[o]?.platform, "small") ?? null;
            w(t), p(a), b(e), x(!!S?.[o]?.mugshotUrl)
          }), [c, S, o, re, ce]), _ ? (0, d.jsxs)("button", {
            className: "rockstargames-modules-core-newswire-articleee811a1fa8b17eb47afb419dd08ffb03",
            "data-img-set": v,
            "aria-label": t.formatMessage(m ? i.sc_menu_close : i.sc_menu_open),
            "aria-expanded": m,
            type: "button",
            onClick: N,
            "data-testid": "avatarMenuButton",
            "data-logged-in": Boolean(h),
            children: [(0, d.jsx)("img", {
              className: "rockstargames-modules-core-newswire-articlea917b58ca28b68550a1aa5d99c7eb998",
              src: _ || "",
              onError: () => {
                p(re)
              },
              alt: c?.nickname || ""
            }), h && null !== k && (0, d.jsx)("img", {
              className: "rockstargames-modules-core-newswire-articlec06123ceae7ca4759ec8b1a5197823db",
              src: k.src,
              alt: k.alt
            }), h && (0, d.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-newswire-articlec4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": S?.[o]?.platform ?? null
            })]
          }) : null
        }), c),
        le = {
          pillBtn: "rockstargames-modules-core-newswire-articled56685560c26cb74e41c0e7efbff2324",
          selected: "rockstargames-modules-core-newswire-articleaf2c4e1e0c4a0665c4844045ac59a1a5",
          profile: "rockstargames-modules-core-newswire-articlecc0f17f755cfd87ea1140528dcff6218",
          scCharacterSelector: "rockstargames-modules-core-newswire-articlead02e9d1ab679ad0544665c4a1463f79",
          scCharacterSelectBtn: "rockstargames-modules-core-newswire-articleccc058e17b53baa907a8d380400a1b81",
          open: "rockstargames-modules-core-newswire-articlee4d379e3b26def224a6777e254d96718",
          scCharacterList: "rockstargames-modules-core-newswire-articlea3cb8b5052cdb657b91ccbd293f3ac0f",
          nav: "rockstargames-modules-core-newswire-articlef4119915eed1b4ec0bd34cd98e2cffef",
          scLanguageSelector: "rockstargames-modules-core-newswire-articleec69e723cd1f4082f4bc3f5656f21b7c",
          navHeader: "rockstargames-modules-core-newswire-articled8efae6b36b65fb512bfff18bc891678",
          navWrap: "rockstargames-modules-core-newswire-articlea9396b9942eedcf0e129b7f6fd3f69ec"
        },
        ie = e => {
          let {
            charListHidden: a,
            hideCharacterList: t,
            refCharacterListDesktop: c,
            menuPadding: l,
            longCharList: o,
            setLongCharList: m,
            isMobileMode: u
          } = e;
          const g = (0, r.useIntl)(),
            {
              windowWidth: _
            } = (0, k.useWindowResize)(),
            {
              track: p
            } = (0, f.h)(),
            {
              charactersNeeded: h,
              currentCharId: b,
              navOpen: w,
              setCurrentCharId: v,
              setSelectedCharacterTuple: x,
              setUserData: S,
              setCharacterAvatar: C,
              setCharacterPlatform: N
            } = (0, f.F$)(),
            [M, y] = (0, s.useState)(null),
            [j, I] = (0, s.useState)([]),
            [L, E] = (0, s.useState)(!1),
            [P, T] = (0, s.useState)(0),
            [O, R] = (0, s.useState)(244),
            [$, B] = (0, s.useState)(!1),
            [H, W] = (0, s.useState)(null),
            F = (0, s.useRef)(null),
            U = (0, s.createRef)(),
            A = (0, D.ri)(U, !1),
            {
              lsSettings: z
            } = (0, k.useRockstarWebLSSettings)(),
            {
              data: X,
              loggedIn: G
            } = (0, f.Wx)({
              fetchCharacters: !0
            }),
            J = () => {
              B(l + O * P < A)
            };
          return (0, s.useEffect)((() => {
            J()
          }), [O]), (0, s.useEffect)((() => {
            J()
          }), [P, u, _, j]), (0, s.useEffect)((() => {
            I(X.characters?.[h] ?? [])
          }), [X, h]), (0, s.useEffect)((() => {
            X && S(X)
          }), [X]), (0, s.useEffect)((() => {
            const e = X?.characters?.gtao;
            if (null !== G && !e?.length) return void x(!1);
            if (null == b || !e?.length) return;
            const a = e?.[b] ?? e?.[0] ?? null;
            x(!!a?.platform && [a.platform, a.characterSlot])
          }), [b, X, G]), (0, s.useEffect)((() => {
            let e = j.length - 1;
            e < 0 && (e = 0), T(e);
            const a = j.length > 0 ? j[b] ?? j[0] : null;
            if (!a) return;
            const t = null !== a ? n(a.platform, "large") : null;
            return W(t), y(a), C(a.mugshotUrl), N(a.platform), j.length > 1 ? E(!0) : E(!1), m(j.length - 1 > 3), () => {
              C(""), N("")
            }
          }), [b, j]), (0, s.useEffect)((() => {
            const e = z?.currentCharId ?? 0;
            e !== b && v(Math.max(0, Math.min(e, j.length - 1)))
          }), [j, z]), M && "gtao" === h ? (0, d.jsxs)("div", {
            className: le.profile,
            ref: F,
            tabIndex: -1,
            "aria-label": g.formatMessage(i.profile_selector_profile_card),
            children: [(0, d.jsx)(Q, {
              s: le,
              character: M,
              platformTag: H
            }), !0 === L && (0, d.jsxs)("div", {
              className: le.scCharacterSelector,
              children: [(0, d.jsx)("button", {
                className: le.scCharacterSelectBtn,
                "aria-hidden": !w,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const s = !a;
                  t(s), p({
                    event: s ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                "data-list-closed": a,
                children: (0, d.jsx)("span", {
                  children: (0, d.jsx)(r.FormattedMessage, {
                    ...i.profile_selector_switch_character
                  })
                })
              }), !1 === u && (0, d.jsx)("div", {
                className: le.scCharacterList,
                "data-long-list": o,
                "aria-hidden": a,
                ref: c,
                children: j.map((e => (0, d.jsx)(V, {
                  tabIndex: a ? -1 : 0,
                  characterData: e,
                  setMobileCardWidth: R
                }, e.mugshotUrl)))
              }), !0 === u && (0, d.jsx)("div", {
                className: le.scCharacterList,
                "data-single-item": 2 === j.length,
                "data-swiper-disabled": $,
                "aria-hidden": a,
                ref: U,
                children: (0, d.jsx)(Z, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    p({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  disablePager: $,
                  disableSwiper: $,
                  children: j.filter(((e, a) => a !== b)).map((e => (0, s.createElement)(V, {
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