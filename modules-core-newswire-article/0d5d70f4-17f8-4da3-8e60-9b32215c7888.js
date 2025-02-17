! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0d5d70f4-17f8-4da3-8e60-9b32215c7888", e._sentryDebugIdIdentifier = "sentry-dbid-0d5d70f4-17f8-4da3-8e60-9b32215c7888")
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
  [672], {
    85650: (e, a, t) => {
      t.r(a), t.d(a, {
        CharacterCard: () => f,
        LanguageSelector: () => b,
        Menu: () => ie,
        MenuButton: () => le,
        ProfileSwitcher: () => me
      });
      var s = t(62229),
        r = t(81788);
      const c = (e, a) => {
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
        n = e => t(e < 100 ? 15917 : e > 99 && e < 500 ? 89697 : e > 499 && e < 750 ? 58662 : 26563),
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
        i = {
          pillBtn: "rockstargames-modules-core-newswire-articleb618569985ae824a0ad12179a3fc1d73",
          selected: "rockstargames-modules-core-newswire-articlee1a2f9a25bb7f66968281e2bc4e4de88",
          scCharacterCard: "rockstargames-modules-core-newswire-articleb5c76acf3bb09d7897375c618e9b0a12",
          avatar: "rockstargames-modules-core-newswire-articled6d3f262555eafb7d674aaf38e8ddfd6",
          scCharNames: "rockstargames-modules-core-newswire-articlecb995eda97ef905857c8d886edcf0897",
          scCharacterStats: "rockstargames-modules-core-newswire-articlea68d43553c702327a295c974a9c5e67b",
          scUserName: "rockstargames-modules-core-newswire-articlead1b6a52da2116461c0d8b9c63b8ee28",
          scRpLevel: "rockstargames-modules-core-newswire-articleaf42f06ddb8cff176be6fcb31e17271a",
          scRpIcon: "rockstargames-modules-core-newswire-articlef9a042c11d2e6a8ed1d5e78f40abd88d"
        },
        l = JSON.parse('{"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","rp_icon":"RP Category","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        d = e => (0, r.withIntl)(e, l);
      var m = t(91029);
      const f = d((e => {
        let {
          characterData: a
        } = e;
        const l = (0, r.useIntl)(),
          {
            platform: d,
            platformUsername: f,
            mugshotUrl: u,
            stats: g
          } = a,
          [_, p] = (0, s.useState)(u),
          h = c(d, "large");
        return (0, m.jsxs)("div", {
          className: i.scCharacterCard,
          children: [(0, m.jsx)("div", {
            className: i.avatar,
            "data-size": "small",
            children: (0, m.jsx)("img", {
              src: _,
              alt: l.formatMessage(o.profile_selector_mugshot, {
                userName: f
              }),
              onError: () => {
                p(t(5931))
              }
            })
          }), (0, m.jsx)("div", {
            className: i.scCharacterStats,
            children: (0, m.jsxs)("div", {
              className: i.scCharNames,
              children: [(0, m.jsx)("img", {
                src: h.src,
                alt: h.alt
              }), (0, m.jsx)("div", {
                className: i.scUserName,
                "data-size": "small",
                children: f
              }), (0, m.jsx)("div", {
                className: i.scRp,
                children: (0, m.jsxs)("div", {
                  className: i.scRpLevel,
                  children: [(0, m.jsx)("img", {
                    className: i.scRpIcon,
                    src: n(g.overview.rank.value),
                    alt: l.formatMessage(o.profile_selector_rp_icon)
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
        g = t(12363),
        _ = t(97652);
      const p = (0, r.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        h = {
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
        b = d((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: c,
            location: n,
            parent: o = "footer",
            onLangChange: i
          } = e;
          const {
            track: l
          } = (0, _.h)(), d = (0, r.useIntl)(), [f, b] = (0, r.getLocale)(), [k, w] = (0, s.useState)(!1), v = (0, s.useRef)(null), [x, S] = (0, s.useState)(0), C = matchMedia("(hover: none) and (pointer: coarse)").matches, N = (0, s.useMemo)((() => (0, u.A)()), []), M = (0, s.useCallback)((e => {
            let a = n.pathname.replace(/^\/|\/$/g, "");
            const t = a.split("/");
            return r.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), N.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${a}${n.search}` : `${window.location.origin}/${e}/${a}${n.search}` : `${window.location.origin}/${a}${n.search}`
          }), [n]), y = e => {
            if (c && c(!1), f.subdomaincom === e || "none" === e) return void(c && c(!1));
            const a = r.locales.find((a => a.subdomaincom === e));
            if (a) {
              const t = M(e);
              l({
                event: "cta_other",
                link_url: t,
                text: e,
                element_placement: o
              }), b(a.iso), window.location.href = t, i?.({
                selectedLocale: a,
                track: l,
                parent: o
              })
            }
          };
          return (0, s.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === k && w(!1)
          }), [t]), (0, s.useEffect)((() => {
            v.current && S(v.current.scrollHeight)
          }), [v]), (0, m.jsxs)("div", {
            className: [h.languageSelector, k ? h.open : ""].join(" "),
            "data-theme": a,
            children: [C && "sc-menu" === a && (0, m.jsx)("div", {
              className: h.selectBoxWrapper,
              children: (0, m.jsxs)("select", {
                className: h.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  y(a)
                },
                "aria-label": d.formatMessage(p.language_selector_default),
                children: [(0, m.jsx)("option", {
                  className: h.selectBoxOption,
                  value: "none",
                  children: (0, m.jsx)(r.FormattedMessage, {
                    ...p.language_selector_default
                  })
                }), r.locales.map((e => {
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
            }), (!C || "sc-menu" !== a) && (0, m.jsxs)(m.Fragment, {
              children: [(0, m.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), c && c(!k), w(!k)
                },
                type: "button",
                "aria-label": d.formatMessage(p.language_selector_default),
                children: [(0, m.jsx)("i", {}), (0, m.jsx)("span", {
                  children: (0, m.jsx)(r.FormattedMessage, {
                    ...p.language_selector_default
                  })
                })]
              }), (0, m.jsx)("div", {
                className: h.linkWrapper,
                ref: v,
                style: {
                  "--ls-linkWrapper-opened-height": `${x}px`
                },
                children: (0, m.jsx)("div", {
                  className: h.links,
                  children: r.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, m.jsx)(s.Fragment, {
                      children: (0, m.jsx)(g.A, {
                        to: M(a),
                        onClick: (r = a, () => {
                          y(r)
                        }),
                        tabIndex: k ? 0 : -1,
                        children: t
                      })
                    }, t);
                    var r
                  }))
                })
              })]
            })]
          })
        }));
      var k = t(1597),
        w = t(95966);
      const v = (0, w.makeVar)(!1),
        x = e => v(e),
        S = (0, w.makeVar)(-1),
        C = e => S(e),
        N = (0, w.makeVar)(-1),
        M = e => N(e),
        y = (0, w.makeVar)(!0),
        j = e => y(e),
        I = (0, w.makeVar)(!0),
        L = e => I(e),
        E = () => {
          const e = (0, w.useReactiveVar)(v),
            a = (0, w.useReactiveVar)(S),
            t = (0, w.useReactiveVar)(N),
            r = (0, w.useReactiveVar)(y),
            c = (0, w.useReactiveVar)(I);
          return (0, s.useEffect)((() => {
            c || (e && x(!1), r && (j(!1), C(-1)))
          }), [c]), (0, s.useEffect)((() => {
            !e && c && (r || j(!0))
          }), [e, c]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: x,
            activeSubNavId: a,
            setActiveSubNavId: C,
            subNavExtraHeight: t,
            setSubNavExtraHeight: M,
            navOpened: r,
            setAccountNavOpened: j,
            charListHidden: c,
            setCharListHidden: L
          })), [e, a, t, r, c])
        };
      var P = t(12296),
        T = t.n(P);
      const O = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        $ = e => ({
          text: e.formatMessage(o.sc_link_help),
          target: "_self",
          ga: {
            ...O,
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
              ...O,
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
              ...O,
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
              ...O,
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
              ...O,
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
              ...O,
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
              ...O,
              text: o.sc_link_do_not_sell_my_information.defaultMessage
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
          return (0, m.jsx)("a", {
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
        D = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: c,
            ga: n,
            dataTestId: i,
            isSubLink: l,
            hasNotifications: d = !1,
            onClickCallback: f = (() => {}),
            tabIndex: g,
            reloadDocument: p = !1,
            onNavigate: h
          } = e;
          const {
            track: b
          } = (0, _.h)(), k = (0, u.A)(), w = (0, r.useIntl)();
          let v = s;
          c && (v = c.domain === k.currentSite?.site ? c.path : `https://${k.sites[c.domain]}.rockstargames.com${c.path}`);
          const x = {
            ...n,
            link_url: v
          };
          return (0, m.jsxs)(R, {
            className: l ? "rockstargames-modules-core-newswire-articlec2233d027086d54af877493d7d0700bd" : "rockstargames-modules-core-newswire-articlef97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": i || "menuLink",
            title: a,
            to: v,
            target: t,
            rel: "noreferrer",
            reloadDocument: p,
            tabIndex: g,
            onClick: e => {
              b(x), f(e)
            },
            onNavigate: h,
            children: [a, d && (0, m.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleadbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlee49e290899be3c888ca5a4b6b13736a1",
                children: w.formatMessage(o.nofications_new)
              })
            })]
          })
        },
        z = e => {
          let {
            id: a,
            text: t,
            target: r,
            href: c,
            location: n,
            ga: o,
            hasNotifications: i = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: f,
            setActiveSubNavId: u,
            setSubNavExtraHeight: g,
            reloadDocument: p = !1,
            onClickCallback: h = (() => {}),
            onNavigate: b
          } = e;
          const {
            windowWidth: k,
            windowHeight: v
          } = (0, w.useWindowResize)(), {
            track: x
          } = (0, _.h)(), {
            navOpen: S
          } = (0, _.F$)(), C = (0, s.useRef)(null), [N, M] = (0, s.useState)(0), [y, j] = (0, s.useState)(0), [I, L] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            f !== a && !1 === I && L(!0), f === a && L(!1)
          }), [f]), (0, s.useEffect)((() => {
            if (!C.current) return;
            M(C?.current?.scrollHeight);
            const e = window.getComputedStyle(C.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [C, k, v]), d.length > 0 ? (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsxs)("button", {
              className: "rockstargames-modules-core-newswire-articlecc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: S ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), x(o), f === a ? (u(-1), g(0)) : (u(a), g(N + y + y))
              },
              children: [(0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleb94730a01d5e9223b69cbc2f20f23bcd",
                children: t
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleff271a72fe259d74068b4f4d90db08bd"
              })]
            }, t), (0, m.jsx)("nav", {
              className: "rockstargames-modules-core-newswire-articlecbf6e64eadb6f965877129d539aa2dcd",
              ref: C,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${N}px`
              },
              children: d.map((e => (0, s.createElement)(D, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !S ? -1 : 0,
                onNavigate: b
              })))
            })]
          }) : (0, m.jsx)(D, {
            text: t,
            target: r,
            href: c,
            location: n,
            ga: o,
            hasNotifications: i,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: h,
            tabIndex: S ? 0 : -1,
            reloadDocument: p,
            onNavigate: b
          })
        },
        B = e => {
          let {
            sc: a,
            location: t,
            onNavigate: c
          } = e;
          const {
            windowWidth: n,
            windowHeight: i
          } = (0, w.useWindowResize)(), l = (0, r.useIntl)(), {
            languageSelectorOpened: d,
            setLanguageSelectorOpened: f,
            activeSubNavId: g,
            setActiveSubNavId: p,
            subNavExtraHeight: h,
            setSubNavExtraHeight: k
          } = E(), {
            setSelectedCharacterTuple: v,
            navOpen: x
          } = (0, _.F$)(), S = (0, w.useLocale)(), C = (0, w.toScLocaleString)(S), [N, M] = (0, s.useState)(""), y = `${a.login}?returnUrl=${N}&lang=${C}`, j = `${a.signup}&returnUrl=${N}&lang=${C}`, I = (0, s.useMemo)((() => (0, u.A)()), []), L = (0, s.useMemo)((() => {
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
            }, $(e)])(l, y, j);
            return e
          }), [l, y, j, I]), [P, O] = (0, s.useState)(0), R = (0, s.createRef)(), D = () => {
            if (R.current) {
              const {
                current: e
              } = R, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), O(a + e)
              } else O(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            M(e)
          }), [JSON.stringify(t)]), (0, s.useEffect)((() => {
            v(!1)
          }), []), (0, s.useEffect)((() => {
            D(), T()((() => {
              setTimeout(D, 0)
            }), 300)
          }), [n, i]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("nav", {
              className: "rockstargames-modules-core-newswire-articlef300d66bd02f52ac564238ca6125a091",
              children: (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articleac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: R,
                style: {
                  "--navWrap-max-height": `${h+P}px`
                },
                children: L.map((e => (0, s.createElement)(z, {
                  ...e,
                  activeSubNavId: g,
                  setActiveSubNavId: p,
                  setSubNavExtraHeight: k,
                  onNavigate: c,
                  key: e.text
                })))
              })
            }), (0, m.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlef30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: x ? null : "hidden"
              },
              children: (0, m.jsx)(b, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: d,
                setLanguageSelectorOpened: e => {
                  p(-1), f(e)
                },
                defaultMessage: "Select a Language",
                location: t
              })
            })]
          })
        };
      var H = t(5315);
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
        X = "CharacterButton:rankValue",
        V = e => {
          let {
            characterData: a,
            setMobileCardWidth: i,
            tabIndex: l
          } = e;
          const d = (0, r.useIntl)(),
            {
              currentCharId: f,
              setCurrentCharId: u
            } = (0, _.F$)(),
            {
              track: g
            } = (0, _.h)(),
            p = (0, s.createRef)(),
            {
              platform: h,
              platformUsername: b,
              mugshotUrl: k,
              stats: w
            } = a,
            [v, x] = (0, s.useState)(k),
            [S] = (0, s.useState)(a.index),
            C = c(h, "large"),
            N = f === a.index;
          return (0, s.useEffect)((() => {
            p.current && i && i(p?.current?.offsetWidth)
          }), [p]), (0, m.jsxs)("button", {
            className: "rockstargames-modules-core-newswire-articleb26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": N,
            onClick: e => {
              e.stopPropagation(), u(S), g({
                event: "character_selector_select",
                text: W[h] ?? "",
                position: S
              })
            },
            ref: p,
            tabIndex: l,
            children: [(0, m.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articled79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, m.jsx)("img", {
                src: v,
                alt: d.formatMessage(o.profile_selector_mugshot, {
                  userName: b
                }),
                onError: () => {
                  x(t(5931))
                },
                "data-testid": A
              })
            }), (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleed30f2b92b3fc2937e7278409208872f",
              children: [(0, m.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlea6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, m.jsx)("img", {
                  src: C.src,
                  alt: C.alt,
                  "data-testid": U
                }), (0, m.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlec3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": F,
                  children: b
                })]
              }), (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlef5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, m.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articlec9300f34b82bbdffb7006ff32247adff",
                  children: [(0, m.jsx)("img", {
                    className: "rockstargames-modules-core-newswire-articlefaa7b2808fb96fa02fd2e99be36df8e6",
                    src: n(parseInt(w.overview.rank.value)),
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
            alt: r
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
            className: "rockstargames-modules-core-newswire-articleea83a9d30b1ce0442bd3f94257fc0905",
            "data-testid": "platform-tag",
            "data-platform": t,
            "data-tag-size": a,
            src: s,
            alt: r
          })
        },
        Y = {
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
            data: c
          } = (0, _.Wx)(), {
            track: i
          } = (0, _.h)(), l = (0, r.useIntl)(), [d, f] = (0, s.useState)([]), [u, g] = (0, s.useState)(null), [p, h] = (0, s.useState)(null), [b, k] = (0, s.useState)(!1), [w, v] = (0, s.useState)(-1), [x, S] = (0, s.useState)([]), [C, N] = (0, s.useState)(0), M = t(5931), {
            platform: y
          } = a, [j, I] = (0, s.useState)("0"), [L, E] = (0, s.useState)("0"), P = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), T = () => {
            $((0, m.jsx)("img", {
              src: M,
              alt: l.formatMessage(o.profile_selector_mugshot, {
                userName: c.nickname
              })
            }))
          }, [O, $] = (0, s.useState)((0, m.jsx)("img", {
            className: Y.avatarImg,
            src: a.mugshotUrl,
            alt: l.formatMessage(o.profile_selector_mugshot, {
              userName: c.nickname
            }),
            onError: T,
            "data-testid": Q
          }));
          (0, s.useEffect)((() => {
            f(c.crews ?? [])
          }), [c.crews]), (0, s.useEffect)((() => {
            $((0, m.jsx)("img", {
              src: a.mugshotUrl,
              alt: c.nickname,
              onError: T,
              "data-testid": Q
            })), I(P(a.stats.overview.bank.value)), E(P(a.stats.overview.cash.value)), N(parseInt(a.stats.overview.rank.value))
          }), [a, c.nickname]), (0, s.useEffect)((() => {
            d && d.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), h(e.crewColour), v(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [d]), (0, s.useEffect)((() => {
            const e = [];
            if (!b && w > -1)
              for (let a = 5; a > w; a -= 1) e.push((0, m.jsx)("div", {
                className: Y.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== p ? p : ""
                }
              }, `crewrankbar-${a}`));
            S(e)
          }), [w, b, p]);
          const R = e => {
            e.stopPropagation(), i({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, m.jsxs)("div", {
            className: Y.profileDetails,
            onClick: R,
            onKeyUp: R,
            role: "button",
            tabIndex: -1,
            children: [(0, m.jsxs)("div", {
              className: Y.avatar,
              children: [O, (0, m.jsx)("div", {
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
                      children: x
                    })]
                  })]
                })
              }), (0, m.jsxs)("div", {
                className: Y.scProgress,
                children: [(0, m.jsxs)("div", {
                  className: Y.scRpLevel,
                  children: [(0, m.jsx)("img", {
                    className: Y.scRpIcon,
                    src: n(C),
                    alt: l.formatMessage(o.profile_selector_rp_icon)
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
            mobileGutterWidth: r = 17,
            slideChangeCallback: c = null,
            slideClickCallback: n = null,
            children: o = [],
            disablePager: i = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, s.createRef)(),
            f = (0, H.ri)(d, !1),
            [u, g] = (0, s.useState)(!1),
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
              if (!0 === u || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            O = e => {
              if (!0 === u || 0 === h || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > h ? 1 : -1,
                r = Math.abs(h - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === u) return;
                g(!0);
                const e = _ - 1 < 0 ? 0 : _ - 1;
                p(e), x(k[e]), c && c(e)
              })() : (() => {
                if (!0 === u) return;
                g(!0);
                let e = _ + 1 >= k.length ? k.length - 1 : _ + 1;
                e < 0 && (e = 0), p(e), x(k[e]), c && c(e)
              })(), b(0)) : x(k[_] + r * s)
            },
            $ = () => {
              !0 !== u && !0 !== l && (g(!0), !0 !== u && (x(k[_]), b(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            o.forEach((() => {
              e.push((0, s.createRef)())
            })), j(e)
          }), [o]), (0, s.useEffect)((() => {
            if (y.length < 1) return;
            C(y[0]?.current?.clientWidth || 0);
            const e = y[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            M(t + a)
          }), [y]), (0, s.useEffect)((() => {
            !1 !== u && setTimeout((() => {
              g(!1)
            }), t)
          }), [u, t]), (0, s.useEffect)((() => {
            w(o.map(((e, a) => (e => {
              let a = 0;
              const t = o.length;
              return 1 === t ? .5 * f - .5 * S - 2 * r + N : (0 === e && (a = r - e * S), e === t - 1 && t > 1 && (a = t * S * -1 + (f - (r - N))), e > 0 && e < t - 1 && (a = e * S * -1 + (.5 * f - .5 * S + .5 * N)), a)
            })(a)))), 1 === o.length ? P(!0) : P(!1)
          }), [d.current, o, f]), (0, s.useEffect)((() => {
            const e = (a = _, o.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            L(e)
          }), [o, _]), (0, s.useEffect)((() => {
            !0 !== i && !0 !== l || x(k[0])
          }), [l, i, k]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb794a0e12537ad5fd506353133b9d60a",
              ref: d,
              onTouchStart: T,
              onTouchMove: O,
              onTouchEnd: $,
              onMouseDown: T,
              onMouseMove: O,
              onMouseUp: $,
              onClick: () => {
                null !== n && n(_)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": u,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${v}px)`
                },
                children: o.map(((e, a) => (0, m.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articledd4bcd955436c8a6982ee16756f7fd8b",
                  ref: y[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), I.length > 1 && !1 === i && (0, m.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlee8e5249dac92a2bc76788d0fe7d7dfb7",
              children: I.map(((e, a) => (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlef64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, a)))
            })]
          })
        },
        re = {
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
        ce = e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: c,
            refCharacterListDesktop: n,
            menuPadding: i,
            longCharList: l,
            setLongCharList: d,
            isMobileMode: f,
            setIsMobileMode: g,
            location: p,
            onNavigate: h
          } = e;
          const {
            windowWidth: k,
            windowHeight: v
          } = (0, w.useWindowResize)(), x = (0, r.useIntl)(), {
            languageSelectorOpened: S,
            setLanguageSelectorOpened: C,
            activeSubNavId: N,
            setActiveSubNavId: M,
            subNavExtraHeight: y,
            setSubNavExtraHeight: j,
            navOpened: I,
            setScNavOpened: L
          } = E(), [P, R] = (0, s.useState)(""), {
            webSettings: D
          } = (0, w.useRockstarWebSettings)(), {
            track: B
          } = (0, _.h)(), W = (0, w.useRockstarTokenPing)(), {
            data: F,
            loggedIn: U
          } = (0, _.Wx)(), {
            charactersNeeded: A,
            currentCharId: X,
            hasNotifications: G,
            navOpen: J,
            setCurrentCharId: K,
            setHasNotifications: Y,
            setSelectedCharacterTuple: q,
            setUserData: Q
          } = (0, _.F$)(), [Z, ee] = (0, s.useState)(null), [ae, ce] = (0, s.useState)(!1), [ne, oe] = (0, s.useState)(!1), [ie, le] = (0, s.useState)(0), de = (0, s.createRef)(), me = (0, H.ri)(de, !1), fe = (0, s.createRef)(), [ue, ge] = (0, s.useState)(0), [_e, pe] = (0, s.useState)([]), [he, be] = (0, s.useState)(244), ke = (0, s.useRef)(null), we = (0, s.useMemo)((() => (0, u.A)()), []), ve = (0, s.useMemo)((() => ((e, a, t, s, r) => [{
            text: e.formatMessage(o.sc_link_activity_feed),
            location: {
              domain: u.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...O,
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
                ...O,
                text: o.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(o.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...O,
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
                ...O,
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
                ...O,
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
              ...O,
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
              ...O,
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
                ...O,
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
                ...O,
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
                ...O,
                text: o.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, $(e), {
            text: e.formatMessage(o.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...O,
              text: o.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(x, a, F, G, P, window)), [x, a, F, G, P, we]), xe = () => {
            oe(i + he * ie < me)
          }, Se = () => {
            if (fe.current) {
              const {
                current: e
              } = fe, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ge(a + e)
              } else ge(a)
            }
          };
          return (0, s.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            we.currentSite?.site === u.C.socialClub && (e = encodeURIComponent("/")), R(e)
          }), [p]), (0, s.useEffect)((() => {
            pe(F?.characters?.[A] ?? [])
          }), [F, A]), (0, s.useEffect)((() => {
            F && Q(F)
          }), [F]), (0, s.useEffect)((() => {
            const e = F?.characters?.gtao ?? [];
            if (null !== U && !e.length) return void q(!1);
            if (null == X || !e.length) return;
            const a = e?.[X] ?? e?.[0] ?? null;
            q(!!a?.platform && [a.platform, a.characterSlot])
          }), [X, F, U]), (0, s.useEffect)((() => {
            (async () => {
              if (!F?.id || !J) return;
              const {
                count: e
              } = await (0, w.coreScApiFetch)("notification/count", {
                pingBearer: W
              });
              Y(e > 0)
            })()
          }), [F, J]), (0, s.useEffect)((() => {
            xe()
          }), [he]), (0, s.useEffect)((() => {
            c(!0), g(k < 768), g(k < 768 || v < 649)
          }), [k, v]), (0, s.useEffect)((() => {
            let e = _e.length - 1;
            e < 0 && (e = 0), le(e);
            const a = _e.length > 0 ? _e[X] ?? _e[0] : null;
            a && (ee(a), _e.length > 1 ? ce(!0) : ce(!1), d(_e.length - 1 > 3))
          }), [X, _e]), (0, s.useEffect)((() => {
            xe()
          }), [ie, f, k, _e]), (0, s.useEffect)((() => {
            Se(), T()((() => {
              setTimeout(Se, 0)
            }), 300)
          }), [k, v]), (0, s.useEffect)((() => {
            const e = D?.currentCharId ?? 0;
            e !== X && K(Math.max(0, Math.min(e, _e.length - 1)))
          }), [_e, D]), (0, m.jsxs)(m.Fragment, {
            children: [null !== Z && "gtao" === A && (0, m.jsxs)("div", {
              className: re.scProfile,
              ref: ke,
              tabIndex: -1,
              "aria-label": x.formatMessage(o.profile_selector_profile_card),
              children: [(0, m.jsx)(te, {
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
                    const a = !t;
                    c(a), B({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, m.jsx)("span", {
                    children: (0, m.jsx)(r.FormattedMessage, {
                      ...o.profile_selector_switch_character
                    })
                  })
                }), !f && (0, m.jsx)("div", {
                  className: re.scCharacterList,
                  "data-long-list": l,
                  "aria-hidden": t,
                  ref: n,
                  children: _e.map((e => (0, m.jsx)(V, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: be
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), f && (0, m.jsx)("div", {
                  className: re.scCharacterList,
                  "data-single-item": 2 === _e.length,
                  "data-swiper-disabled": ne,
                  "aria-hidden": t,
                  ref: de,
                  children: (0, m.jsx)(se, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      B({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: ne,
                    disableSwiper: ne,
                    children: _e.filter(((e, a) => a !== X)).map((e => (0, s.createElement)(V, {
                      characterData: e,
                      setMobileCardWidth: be,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: t ? -1 : 0
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
                  children: F.nickname
                })
              }), (0, m.jsx)("div", {
                className: re.navWrap,
                "data-opened": I,
                "data-logged-in": "true",
                ref: fe,
                style: {
                  "--navWrap-max-height": `${ue+y}px`
                },
                children: ve.map(((e, a) => (0, s.createElement)(z, {
                  ...e,
                  id: a,
                  activeSubNavId: N,
                  setActiveSubNavId: M,
                  setSubNavExtraHeight: j,
                  onNavigate: h,
                  key: e.text
                })))
              })]
            }), (0, m.jsx)("div", {
              className: re.scLanguageSelector,
              style: {
                visibility: J ? null : "hidden"
              },
              children: (0, m.jsx)(b, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: S,
                setLanguageSelectorOpened: C,
                location: p
              })
            })]
          })
        },
        ne = {
          menu: "rockstargames-modules-core-newswire-articlec0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-modules-core-newswire-articlec31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-modules-core-newswire-articlec5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-modules-core-newswire-articleb8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-modules-core-newswire-articleff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-core-newswire-articleb49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-modules-core-newswire-articleeff8c1d4bf675accdb7d952aba0174dc"
        },
        oe = (0, w.getConfigForDomain)(),
        ie = d((e => {
          let {
            location: a,
            onNavigate: c
          } = e;
          const {
            windowHeight: n
          } = (0, w.useWindowResize)(), i = (0, r.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: d,
            setActiveSubNavId: f,
            navOpened: u,
            setAccountNavOpened: g,
            charListHidden: p,
            setCharListHidden: h
          } = E(), [b, v] = (0, s.useState)(!1), {
            navHidden: x = !1
          } = (0, w.useState)(), {
            loggedIn: S
          } = (0, _.Wx)(), {
            currentCharId: C,
            navOpen: N,
            setNavOpen: M,
            userData: y
          } = (0, _.F$)(), {
            track: j
          } = (0, _.h)(), [I, L] = (0, s.useState)(!1), P = (0, s.useRef)(), [T, O] = (0, s.useState)(0), $ = (0, s.createRef)(), [R, D] = (0, s.useState)(!1), [z, H] = (0, s.useState)(0), [W, F] = (0, s.useState)(!1), {
            mutateWebSettings: U,
            webSettings: A
          } = (0, w.useRockstarWebSettings)(), X = (0, s.useCallback)((e => {
            h(e), P.current && !0 === e && (P.current.scrollTop = 0)
          }), [P]);
          return (0, s.useEffect)((() => {
            null !== C && A.currentCharId !== C && U({
              key: "currentCharId",
              value: C
            }), !1 === S ? U({
              key: "currentCharId",
              value: null
            }) : S && !y && j({
              event: "account_synced"
            })
          }), [C, S]), (0, s.useEffect)((() => {
            P.current && (!1 === p && !1 === I && (P.current.style.height = `${P.current.scrollHeight}px`), !0 === p && (P.current.style.height = null))
          }), [p, P, I]), (0, s.useEffect)((() => {
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
              O(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [$]), (0, s.useEffect)((() => {
            F(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            $.current && v($?.current?.scrollHeight >= n)
          }), [$, n]), (0, s.useEffect)((() => {
            N || (f(-1), d(!1))
          }), [N]), (0, s.useEffect)((() => {
            l && (p || X(!0), u && (g(!1), f(-1)))
          }), [l]), (0, s.useEffect)((() => {
            u && (l && d(!1), p || X(!0))
          }), [u]), void 0 === S ? null : (0, m.jsxs)(k.A, {
            enabled: !!N,
            removeScrollBar: !1,
            children: [(0, m.jsxs)("div", {
              className: [ne.menu, N ? ne.navOpen : ""].join(" "),
              "data-logged-in": S,
              "data-mac-browser": W,
              "data-scroll-mode": b,
              ref: $,
              "aria-hidden": !N,
              children: [(0, m.jsx)("button", {
                className: ne.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  H(a)
                },
                onTouchMove: e => {
                  if (0 === z) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(z - a) > 1 && (H(0), M(!1))
                },
                children: (0, m.jsx)("img", {
                  className: ne.dragHandle,
                  src: t(35902),
                  alt: i.formatMessage(o.sc_menu_drag_handle)
                })
              }), S ? (0, m.jsx)(ce, {
                sc: oe,
                charListHidden: p,
                hideCharacterList: X,
                refCharacterListDesktop: P,
                menuPadding: T,
                longCharList: I,
                setLongCharList: L,
                isMobileMode: R,
                setIsMobileMode: D,
                location: a,
                onNavigate: c
              }) : (0, m.jsx)(B, {
                sc: oe,
                navOpen: N,
                location: a,
                onNavigate: c
              })]
            }), (0, m.jsx)("div", {
              className: [ne.scOverlay, N ? ne.navOpen : ""].join(" "),
              "data-logged-in": S
            })]
          })
        })),
        le = d((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const c = (0, r.useIntl)(),
            {
              data: n,
              loggedIn: i
            } = (0, _.Wx)(),
            {
              charactersNeeded: l,
              currentCharId: d,
              navOpen: f,
              setNavOpen: u
            } = (0, _.F$)(),
            {
              track: g
            } = (0, _.h)(),
            [p, h] = (0, s.useState)(),
            [b, k] = (0, s.useState)(!1),
            [w, v] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            v(n?.characters?.[l] ?? [])
          }), [n, l]);
          const x = (0, s.useCallback)((e => {
            e.stopPropagation(), u(!f), 1 == !f && a(null), g({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: f ? "close" : "open"
            })
          }), [f]);
          return (0, s.useEffect)((() => {
            k(!!w?.[d]?.mugshotUrl)
          }), [w, d]), (0, s.useEffect)((() => {
            h((() => {
              switch (i) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return w?.[d]?.mugshotUrl ?? n?.avatar
              }
            })())
          }), [n, w, d, i]), p ? (0, m.jsxs)("button", {
            className: "rockstargames-modules-core-newswire-articleee811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": c.formatMessage(f ? o.sc_menu_close : o.sc_menu_open),
            "aria-expanded": f,
            type: "button",
            onClick: x,
            "data-mugshot": b,
            "data-testid": "avatarMenuButton",
            "data-logged-in": Boolean(i),
            children: [(0, m.jsx)("img", {
              className: "rockstargames-modules-core-newswire-articlea917b58ca28b68550a1aa5d99c7eb998",
              src: p,
              alt: n?.nickname || ""
            }), i && (0, m.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlec06123ceae7ca4759ec8b1a5197823db",
              children: (0, m.jsx)(K, {
                platform: w?.[d]?.platform,
                tagSize: G.small
              })
            }), i && (0, m.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlec4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": w?.[d]?.platform ?? null
            })]
          }) : null
        })),
        de = {
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
        me = e => {
          let {
            charListHidden: a,
            hideCharacterList: t,
            refCharacterListDesktop: c,
            menuPadding: n,
            longCharList: i,
            setLongCharList: l,
            isMobileMode: d
          } = e;
          const f = (0, r.useIntl)(),
            {
              windowWidth: u
            } = (0, w.useWindowResize)(),
            {
              track: g
            } = (0, _.h)(),
            {
              charactersNeeded: p,
              currentCharId: h,
              navOpen: b,
              setCurrentCharId: k,
              setSelectedCharacterTuple: v,
              setUserData: x,
              setCharacterAvatar: S,
              setCharacterPlatform: C
            } = (0, _.F$)(),
            [N, M] = (0, s.useState)(null),
            [y, j] = (0, s.useState)([]),
            [I, L] = (0, s.useState)(!1),
            [E, P] = (0, s.useState)(0),
            [T, O] = (0, s.useState)(244),
            [$, R] = (0, s.useState)(!1),
            D = (0, s.useRef)(null),
            z = (0, s.createRef)(),
            B = (0, H.ri)(z, !1),
            {
              webSettings: W
            } = (0, w.useRockstarWebSettings)(),
            {
              data: F,
              loggedIn: U
            } = (0, _.Wx)({
              fetchCharacters: !0
            }),
            A = () => {
              R(n + T * E < B)
            };
          return (0, s.useEffect)((() => {
            A()
          }), [T]), (0, s.useEffect)((() => {
            A()
          }), [E, d, u, y]), (0, s.useEffect)((() => {
            j(F.characters?.[p] ?? [])
          }), [F, p]), (0, s.useEffect)((() => {
            F && x(F)
          }), [F]), (0, s.useEffect)((() => {
            const e = F?.characters?.gtao;
            if (null !== U && !e?.length) return void v(!1);
            if (null == h || !e?.length) return;
            const a = e?.[h] ?? e?.[0] ?? null;
            v(!!a?.platform && [a.platform, a.characterSlot])
          }), [h, F, U]), (0, s.useEffect)((() => {
            let e = y.length - 1;
            e < 0 && (e = 0), P(e);
            const a = y.length > 0 ? y[h] ?? y[0] : null;
            if (a) return M(a), S(a.mugshotUrl), C(a.platform), y.length > 1 ? L(!0) : L(!1), l(y.length - 1 > 3), () => {
              S(""), C("")
            }
          }), [h, y]), (0, s.useEffect)((() => {
            const e = W?.currentCharId ?? 0;
            e !== h && k(Math.max(0, Math.min(e, y.length - 1)))
          }), [y, W]), N && "gtao" === p ? (0, m.jsxs)("div", {
            className: de.profile,
            ref: D,
            tabIndex: -1,
            "aria-label": f.formatMessage(o.profile_selector_profile_card),
            children: [(0, m.jsx)(te, {
              s: de,
              character: N
            }), !0 === I && (0, m.jsxs)("div", {
              className: de.scCharacterSelector,
              children: [(0, m.jsx)("button", {
                className: de.scCharacterSelectBtn,
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
                  children: (0, m.jsx)(r.FormattedMessage, {
                    ...o.profile_selector_switch_character
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
                  setMobileCardWidth: O
                }, e.mugshotUrl)))
              }), !0 === d && (0, m.jsx)("div", {
                className: de.scCharacterList,
                "data-single-item": 2 === y.length,
                "data-swiper-disabled": $,
                "aria-hidden": a,
                ref: z,
                children: (0, m.jsx)(se, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    g({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  disablePager: $,
                  disableSwiper: $,
                  children: y.filter(((e, a) => a !== h)).map((e => (0, s.createElement)(V, {
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