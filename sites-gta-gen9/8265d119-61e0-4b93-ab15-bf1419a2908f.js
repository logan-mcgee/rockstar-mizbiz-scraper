! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8265d119-61e0-4b93-ab15-bf1419a2908f", e._sentryDebugIdIdentifier = "sentry-dbid-8265d119-61e0-4b93-ab15-bf1419a2908f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [6503], {
    42341: (e, a, t) => {
      t.d(a, {
        A: () => f
      });
      var s = t(96717),
        c = t(71403),
        r = t(40207),
        n = t(13963),
        i = t(20066);
      const o = (0, s.defineMessages)({
        language_selector_default: {
          id: "language_selector_default",
          defaultMessage: "Select a Language"
        }
      });
      var l = t(60285);
      const d = {
        pillBtn: "rockstargames-sites-gta-gen9cb792ef8796eaa09f8b5c1ee0230fcd7",
        selected: "rockstargames-sites-gta-gen9c951b9f5173e8a37be389854c40995ee",
        scMenuStyles: "rockstargames-sites-gta-gen9fa91a55e22ad688cba0bc1210eaf4726",
        languageSelector: "rockstargames-sites-gta-gen9b631f2ce92e4a89f8eddebd32e8ed30a",
        open: "rockstargames-sites-gta-gen9edc598921a872174190475d0ad016d15",
        linkWrapper: "rockstargames-sites-gta-gen9c4b7087d1fcbaad6967e61b84160ff79",
        links: "rockstargames-sites-gta-gen9c7d345d5c7e567e0ee75b792d5bdfb88",
        selectBoxWrapper: "rockstargames-sites-gta-gen9e3e55a10507405de05ae92006ec0d02b",
        selectBox: "rockstargames-sites-gta-gen9c646a2bff16ec3003b027857488cd612",
        selectBoxOption: "rockstargames-sites-gta-gen9bcccd1077d13d7fe1585655e5c5f8363"
      };
      var g = t(46632);
      const f = (0, s.withIntl)((e => {
        let {
          theme: a,
          languageSelectorOpened: t,
          setLanguageSelectorOpened: i,
          location: f,
          parent: m = "footer"
        } = e;
        const {
          track: u
        } = (0, r.useGtmTrack)(), _ = (0, s.useIntl)(), [p, h] = (0, s.getLocale)(), [b, k] = (0, c.useState)(!1), v = (0, c.useMemo)((() => (0, n.A)()), []), x = (0, c.useCallback)((e => {
          let a = f.pathname;
          const t = a.split("/");
          return s.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), v.currentSite?.site === n.C.www ? "en" === e ? `${window.location.origin}${a}${f.search}` : `${window.location.origin}/${e}${a}${f.search}` : `${window.location.origin}${a}${f.search}`
        }), [f]), N = (0, c.useRef)(null), [S, w] = (0, c.useState)(0), M = matchMedia("(hover: none) and (pointer: coarse)").matches, C = e => {
          if (i && i(!1), p.subdomaincom === e || "none" === e) return void(i && i(!1));
          const a = s.locales.find((a => a.subdomaincom === e));
          if (a) {
            const t = x(e);
            u({
              event: "cta_other",
              link_url: t,
              text: e,
              element_placement: m
            }), h(a.iso), window.location.href = t
          }
        };
        return (0, c.useEffect)((() => {
          void 0 !== t && !1 === t && !0 === b && k(!1)
        }), [t]), (0, c.useEffect)((() => {
          N.current && w(N.current.scrollHeight)
        }), [N]), (0, g.jsxs)("div", {
          className: [d.languageSelector, b ? d.open : ""].join(" "),
          "data-theme": a,
          children: [M && "sc-menu" === a && (0, g.jsx)("div", {
            className: d.selectBoxWrapper,
            children: (0, g.jsxs)("select", {
              className: d.selectBox,
              onClick: e => e.stopPropagation(),
              onChange: e => {
                const a = e.currentTarget.value;
                C(a)
              },
              "aria-label": _.formatMessage(o.language_selector_default),
              children: [(0, g.jsx)("option", {
                className: d.selectBoxOption,
                value: "none",
                children: (0, g.jsx)(s.FormattedMessage, {
                  ...o.language_selector_default
                })
              }), s.locales.map((e => {
                let {
                  label: a,
                  subdomaincom: t
                } = e;
                return (0, g.jsx)("option", {
                  className: d.selectBoxOption,
                  value: t,
                  children: a
                }, `mobile-${t}`)
              }))]
            })
          }), (!M || "sc-menu" !== a) && (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsxs)("button", {
              onClick: e => {
                e.stopPropagation(), i && i(!b), k(!b)
              },
              type: "button",
              "aria-label": _.formatMessage(o.language_selector_default),
              children: [(0, g.jsx)("i", {}), (0, g.jsx)("span", {
                children: (0, g.jsx)(s.FormattedMessage, {
                  ...o.language_selector_default
                })
              })]
            }), (0, g.jsx)("div", {
              className: d.linkWrapper,
              ref: N,
              style: {
                "--ls-linkWrapper-opened-height": `${S}px`
              },
              children: (0, g.jsx)("div", {
                className: d.links,
                children: s.locales.map((e => {
                  let {
                    subdomaincom: a,
                    label: t
                  } = e;
                  return (0, g.jsx)(l.A, {
                    to: x(a),
                    onClick: (s = a, () => {
                      C(s)
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
      }), i)
    },
    86503: (e, a, t) => {
      t.r(a), t.d(a, {
        CharacterCard: () => g,
        Menu: () => G,
        MenuButton: () => J
      });
      var s = t(71403),
        c = t(96717),
        r = t(20066);
      const n = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(89544),
                alt: "PC"
              } : {
                src: t(45710),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: t(65636),
                alt: "PS4"
              } : {
                src: t(8318),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: t(20357),
                alt: "PS5"
              } : {
                src: t(52047),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(17976),
                alt: "Xbox One"
              } : {
                src: t(60350),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(84923),
                alt: "Xbox Series X|S"
              } : {
                src: t(89825),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        i = e => t(e < 100 ? 36399 : e > 99 && e < 500 ? 92627 : e > 499 && e < 750 ? 43864 : 76425),
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
        l = {
          pillBtn: "rockstargames-sites-gta-gen9e4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-sites-gta-gen9eb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-sites-gta-gen9df279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-sites-gta-gen9c1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-sites-gta-gen9e79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-sites-gta-gen9c721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-sites-gta-gen9eabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-sites-gta-gen9b1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-sites-gta-gen9f1e0bcba6214698c490b8201bbd850b7"
        };
      var d = t(46632);
      const g = (0, c.withIntl)((e => {
        let {
          characterData: a
        } = e;
        const r = (0, c.useIntl)(),
          {
            platform: g,
            platformUsername: f,
            mugshotUrl: m,
            stats: u
          } = a,
          [_, p] = (0, s.useState)(m),
          h = n(g, "large");
        return (0, d.jsxs)("div", {
          className: l.scCharacterCard,
          children: [(0, d.jsx)("div", {
            className: l.scAvatar,
            "data-size": "small",
            children: (0, d.jsx)("img", {
              src: _,
              alt: r.formatMessage(o.profile_selector_mugshot, {
                userName: f
              }),
              onError: () => {
                p(t(58989))
              }
            })
          }), (0, d.jsx)("div", {
            className: l.scCharacterStats,
            children: (0, d.jsxs)("div", {
              className: l.scCharNames,
              children: [(0, d.jsx)("img", {
                src: h.src,
                alt: h.alt
              }), (0, d.jsx)("div", {
                className: l.scUserName,
                "data-size": "small",
                children: f
              }), (0, d.jsx)("div", {
                className: l.scRp,
                children: (0, d.jsxs)("div", {
                  className: l.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: l.scRpIcon,
                    src: i(u.overview.rank.value),
                    alt: r.formatMessage(o.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })
          })]
        })
      }), r);
      var f = t(90250),
        m = t(42756),
        u = t(58407),
        _ = t(40207);
      const p = (0, u.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        h = p("languageSelectorOpenedReactive", !1),
        b = e => h(e),
        k = p("activeSubNavIdReactive", -1),
        v = e => k(e),
        x = p("subNavExtraHeightReactive", -1),
        N = e => x(e),
        S = p("scNavOpenedReactive", !0),
        w = e => S(e),
        M = p("charListHiddenReactive", !0),
        C = e => M(e),
        y = () => {
          const e = (0, u.useReactiveVar)(h),
            a = (0, u.useReactiveVar)(k),
            t = (0, u.useReactiveVar)(x),
            c = (0, u.useReactiveVar)(S),
            r = (0, u.useReactiveVar)(M);
          return (0, s.useEffect)((() => {
            r || (e && b(!1), c && (w(!1), v(-1)))
          }), [r]), (0, s.useEffect)((() => {
            !e && r && (c || w(!0))
          }), [e, r]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: b,
            activeSubNavId: a,
            setActiveSubNavId: v,
            subNavExtraHeight: t,
            setSubNavExtraHeight: N,
            scNavOpened: c,
            setScNavOpened: w,
            charListHidden: r,
            setCharListHidden: C
          })), [e, a, t, c, r])
        };
      var j = t(14963),
        I = t.n(j),
        E = t(42341),
        L = t(13963);
      const T = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        R = e => ({
          text: e.formatMessage(o.sc_link_help),
          target: "_self",
          ga: {
            ...T,
            text: o.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(o.sc_link_support),
            location: {
              domain: L.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...T,
              text: o.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(o.sc_link_legal),
            location: {
              domain: L.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...T,
              text: o.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(o.sc_link_privacy_policy),
            location: {
              domain: L.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...T,
              text: o.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(o.sc_link_cookies_policy),
            location: {
              domain: L.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...T,
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
              ...T,
              text: o.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(o.sc_link_do_not_sell_my_information),
            location: {
              domain: L.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...T,
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
            onClick: r,
            reloadDocument: n,
            children: i,
            ...o
          } = e;
          const l = a?.startsWith("http");
          return (0, d.jsx)("a", {
            href: a,
            className: s,
            onClick: e => {
              r?.(e), l || n || (c ? (e.preventDefault(), c(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            ...o,
            children: i
          })
        },
        P = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: r,
            ga: n,
            dataTestId: i,
            isSubLink: l,
            hasNotifications: g = !1,
            onClickCallback: f = (() => {}),
            tabIndex: m,
            reloadDocument: u = !1,
            onNavigate: p
          } = e;
          const {
            track: h
          } = (0, _.useGtmTrack)(), b = (0, L.A)(), k = (0, c.useIntl)();
          let v = s;
          r && (v = r.domain === b.currentSite?.site ? r.path : `https://${b.sites[r.domain]}.rockstargames.com${r.path}`);
          const x = {
            ...n,
            link_url: v
          };
          return (0, d.jsxs)(O, {
            className: l ? "rockstargames-sites-gta-gen9fdaa918acc06706cbe191dedd40974af" : "rockstargames-sites-gta-gen9cbc80932118c48d8ec14448d8913d068",
            "data-testid": i || "menuLink",
            title: a,
            to: v,
            target: t,
            rel: "noreferrer",
            reloadDocument: u,
            tabIndex: m,
            onClick: e => {
              h(x), f(e)
            },
            onNavigate: p,
            children: [a, g && (0, d.jsx)("div", {
              className: "rockstargames-sites-gta-gen9a2d268c9fb03a7271b47de447d663da9",
              children: (0, d.jsx)("span", {
                className: "rockstargames-sites-gta-gen9cf5a6b05c52c6c4faf3236055d4670c3",
                children: k.formatMessage(o.nofications_new)
              })
            })]
          })
        },
        U = e => {
          let {
            id: a,
            text: t,
            target: c,
            href: r,
            location: n,
            ga: i,
            hasNotifications: o = !1,
            dataTestId: l,
            children: g = [],
            activeSubNavId: f,
            setActiveSubNavId: u,
            setSubNavExtraHeight: p,
            reloadDocument: h = !1,
            onClickCallback: b = (() => {}),
            onNavigate: k
          } = e;
          const {
            windowWidth: v,
            windowHeight: x
          } = (0, m.useWindowResize)(), {
            track: N
          } = (0, _.useGtmTrack)(), {
            navOpen: S
          } = (0, _.useRockstarUserState)(), w = (0, s.useRef)(null), [M, C] = (0, s.useState)(0), [y, j] = (0, s.useState)(0), [I, E] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            f !== a && !1 === I && E(!0), f === a && E(!1)
          }), [f]), (0, s.useEffect)((() => {
            if (!w.current) return;
            C(w?.current?.scrollHeight);
            const e = window.getComputedStyle(w.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [w, v, x]), g.length > 0 ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("button", {
              className: "rockstargames-sites-gta-gen9af10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: S ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), N(i), f === a ? (u(-1), p(0)) : (u(a), p(M + y + y))
              },
              children: [(0, d.jsx)("span", {
                className: "rockstargames-sites-gta-gen9fd722aa4f6d05656ee6e37f952bd13d0",
                children: t
              }), (0, d.jsx)("span", {
                className: "rockstargames-sites-gta-gen9be674f27adc299eab348b49f71429b71"
              })]
            }, t), (0, d.jsx)("nav", {
              className: "rockstargames-sites-gta-gen9ff1911053a3515534dd825554a85909e",
              ref: w,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${M}px`
              },
              children: g.map((e => (0, s.createElement)(P, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !S ? -1 : 0,
                onNavigate: k
              })))
            })]
          }) : (0, d.jsx)(P, {
            text: t,
            target: c,
            href: r,
            location: n,
            ga: i,
            hasNotifications: o,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: b,
            tabIndex: S ? 0 : -1,
            reloadDocument: h,
            onNavigate: k
          })
        },
        H = e => {
          let {
            sc: a,
            location: t,
            onNavigate: r
          } = e;
          const {
            windowWidth: n,
            windowHeight: i
          } = (0, m.useWindowResize)(), l = (0, c.useIntl)(), {
            languageSelectorOpened: g,
            setLanguageSelectorOpened: f,
            activeSubNavId: u,
            setActiveSubNavId: p,
            subNavExtraHeight: h,
            setSubNavExtraHeight: b
          } = y(), {
            setSelectedCharacterTuple: k,
            navOpen: v
          } = (0, _.useRockstarUserState)(), x = (0, m.useLocale)(), N = (0, m.toScLocaleString)(x), [S, w] = (0, s.useState)(""), M = `${a.login}?returnUrl=${S}&lang=${N}`, C = `${a.signup}&returnUrl=${S}&lang=${N}`, j = (0, s.useMemo)((() => (0, L.A)()), []), T = (0, s.useMemo)((() => {
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
            }, R(e)])(l, M, C);
            return e
          }), [l, M, C, j]), [O, P] = (0, s.useState)(0), H = (0, s.createRef)(), $ = () => {
            if (H.current) {
              const {
                current: e
              } = H, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), P(a + e)
              } else P(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            w(e)
          }), [JSON.stringify(t)]), (0, s.useEffect)((() => {
            k(!1)
          }), []), (0, s.useEffect)((() => {
            $(), I()((() => {
              setTimeout($, 0)
            }), 300)
          }), [n, i]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("nav", {
              className: "rockstargames-sites-gta-gen9b1552e1f97b08ee4337f78fa4486ffac",
              children: (0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: H,
                style: {
                  "--scNavWrap-max-height": `${h+O}px`
                },
                children: T.map((e => (0, s.createElement)(U, {
                  ...e,
                  activeSubNavId: u,
                  setActiveSubNavId: p,
                  setSubNavExtraHeight: b,
                  onNavigate: r,
                  key: e.text
                })))
              })
            }), (0, d.jsx)("div", {
              className: "rockstargames-sites-gta-gen9a6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: v ? null : "hidden"
              },
              children: (0, d.jsx)(E.A, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: g,
                setLanguageSelectorOpened: e => {
                  p(-1), f(e)
                },
                defaultMessage: "Select a Language",
                location: t
              })
            })]
          })
        },
        $ = e => {
          let {
            characterData: a,
            setMobileCardWidth: r,
            tabIndex: l
          } = e;
          const g = (0, c.useIntl)(),
            {
              currentCharId: f,
              setCurrentCharId: m
            } = (0, _.useRockstarUserState)(),
            {
              track: u
            } = (0, _.useGtmTrack)(),
            p = (0, s.createRef)(),
            {
              platform: h,
              platformUsername: b,
              mugshotUrl: k,
              stats: v
            } = a,
            [x, N] = (0, s.useState)(k),
            [S] = (0, s.useState)(a.index),
            w = n(h, "large"),
            M = f === a.index;
          return (0, s.useEffect)((() => {
            p.current && r && r(p?.current?.offsetWidth)
          }), [p]), (0, d.jsxs)("button", {
            className: "rockstargames-sites-gta-gen9d76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": M,
            onClick: e => {
              e.stopPropagation(), m(S);
              let a = "";
              "pc" === h ? a = "PC" : "ps4" === h ? a = "PS4" : "ps5" === h ? a = "PS5" : "xboxone" === h ? a = "Xbox One" : "xboxsx" === h && (a = "Xbox Series X|S"), u({
                event: "character_selector_select",
                text: a,
                position: S
              })
            },
            ref: p,
            tabIndex: l,
            children: [(0, d.jsx)("div", {
              className: "rockstargames-sites-gta-gen9bbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, d.jsx)("img", {
                src: x,
                alt: g.formatMessage(o.profile_selector_mugshot, {
                  userName: b
                }),
                onError: () => {
                  N(t(58989))
                }
              })
            }), (0, d.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, d.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9e9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, d.jsx)("img", {
                  src: w.src,
                  alt: w.alt
                }), (0, d.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9b3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: b
                })]
              }), (0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9a5e3df42966a50f3dd88bbcb57536617",
                children: (0, d.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9a6776312350028898320ba59145a39be",
                  children: [(0, d.jsx)("img", {
                    className: "rockstargames-sites-gta-gen9b266652910ad34c0e8e097b212a958f0",
                    src: i(v.overview.rank.value),
                    alt: g.formatMessage(o.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        A = {
          pillBtn: "rockstargames-sites-gta-gen9d9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-sites-gta-gen9bc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-sites-gta-gen9b954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-sites-gta-gen9c15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-sites-gta-gen9a8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-sites-gta-gen9c91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-sites-gta-gen9da83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-sites-gta-gen9d7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-sites-gta-gen9d5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-sites-gta-gen9b7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-sites-gta-gen9a581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-sites-gta-gen9bdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-sites-gta-gen9dc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-sites-gta-gen9b2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-sites-gta-gen9f17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-sites-gta-gen9f14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-sites-gta-gen9b3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-sites-gta-gen9ec696aafed90a7a4c69dc53da0a5bb36"
        },
        B = e => {
          let {
            character: a,
            platformTag: r
          } = e;
          const {
            data: n
          } = (0, _.useRockstarUser)(), {
            track: l
          } = (0, _.useGtmTrack)(), g = (0, c.useIntl)(), [f, m] = (0, s.useState)([]), [u, p] = (0, s.useState)(null), [h, b] = (0, s.useState)(null), [k, v] = (0, s.useState)(!1), [x, N] = (0, s.useState)(-1), [S, w] = (0, s.useState)([]), [M, C] = (0, s.useState)(0), y = t(58989), [j, I] = (0, s.useState)("0"), [E, L] = (0, s.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), R = () => {
            P((0, d.jsx)("img", {
              src: y,
              alt: g.formatMessage(o.profile_selector_mugshot, {
                userName: n.nickname
              })
            }))
          }, [O, P] = (0, s.useState)((0, d.jsx)("img", {
            className: A.scAvatarImg,
            src: a.mugshotUrl,
            alt: g.formatMessage(o.profile_selector_mugshot, {
              userName: n.nickname
            }),
            onError: R
          }));
          (0, s.useEffect)((() => {
            m(n.crews ?? [])
          }), [n]), (0, s.useEffect)((() => {
            P((0, d.jsx)("img", {
              src: a.mugshotUrl,
              alt: n.nickname,
              onError: R
            })), I(T(a.stats.overview.bank.value)), L(T(a.stats.overview.cash.value)), C(parseInt(a.stats.overview.rank.value))
          }), [a, n]), (0, s.useEffect)((() => {
            f && f.forEach((e => {
              !0 === e.isPrimary && (p(e.crewTag), b(e.crewColour), N(e.rankOrder), v(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && v(!0))
            }))
          }), [f]), (0, s.useEffect)((() => {
            const e = [];
            if (!k && x > -1)
              for (let a = 5; a > x; a -= 1) e.push((0, d.jsx)("div", {
                className: A.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== h ? h : ""
                }
              }, `crewrankbar-${a}`));
            w(e)
          }), [x, k, h]);
          const U = e => {
            e.stopPropagation(), l({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, d.jsxs)("div", {
            className: A.scProfileDetails,
            onClick: U,
            onKeyUp: U,
            role: "button",
            tabIndex: -1,
            children: [(0, d.jsxs)("div", {
              className: A.scAvatar,
              children: [O, (0, d.jsx)("div", {
                className: A.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, d.jsx)("img", {
                  src: r.src,
                  alt: r.alt
                })
              })]
            }), (0, d.jsxs)("div", {
              className: A.scProfileStats,
              children: [(0, d.jsx)("div", {
                className: A.scNames,
                children: (0, d.jsxs)("div", {
                  className: A.scTagsNames,
                  children: [(0, d.jsx)("span", {
                    className: A.scUserName,
                    children: a.platformUsername
                  }), u && (0, d.jsxs)("span", {
                    className: A.scCrewName,
                    "data-arrow-tag": k,
                    children: [u, !k && (0, d.jsx)("div", {
                      className: A.scCrewRankBar,
                      children: S
                    })]
                  })]
                })
              }), (0, d.jsxs)("div", {
                className: A.scProgress,
                children: [(0, d.jsxs)("div", {
                  className: A.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: A.scRpIcon,
                    src: i(M),
                    alt: g.formatMessage(o.profile_selector_rp_icon)
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, d.jsxs)("div", {
                  className: A.scMoney,
                  children: [(0, d.jsxs)("span", {
                    className: A.scCash,
                    children: ["$", E]
                  }), (0, d.jsxs)("span", {
                    className: A.scBank,
                    children: ["$", j]
                  })]
                })]
              })]
            })]
          })
        },
        D = (e, a) => {
          const [t, c] = (0, s.useState)(0);
          return (0, s.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, s = t.getBoundingClientRect(), {
                width: r
              } = s;
              let n = r;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                n += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              c(n)
            }
          }), [e]), t
        },
        W = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: c = 17,
            slideChangeCallback: r = null,
            slideClickCallback: n = null,
            children: i = [],
            disablePager: o = !1,
            disableSwiper: l = !1
          } = e;
          const g = (0, s.createRef)(),
            f = D(g, !1),
            [m, u] = (0, s.useState)(!1),
            [_, p] = (0, s.useState)(0),
            [h, b] = (0, s.useState)(0),
            [k, v] = (0, s.useState)([c]),
            [x, N] = (0, s.useState)(k[0]),
            [S, w] = (0, s.useState)(252),
            [M, C] = (0, s.useState)(0),
            [y, j] = (0, s.useState)([]),
            [I, E] = (0, s.useState)([]),
            [L, T] = (0, s.useState)(!1),
            R = e => {
              if (!0 === m || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            O = e => {
              if (!0 === m || 0 === h || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > h ? 1 : -1,
                c = Math.abs(h - t);
              c > a ? (s > 0 ? (() => {
                if (!0 === m) return;
                u(!0);
                const e = _ - 1 < 0 ? 0 : _ - 1;
                p(e), N(k[e]), r && r(e)
              })() : (() => {
                if (!0 === m) return;
                u(!0);
                let e = _ + 1 >= k.length ? k.length - 1 : _ + 1;
                e < 0 && (e = 0), p(e), N(k[e]), r && r(e)
              })(), b(0)) : N(k[_] + c * s)
            },
            P = () => {
              !0 !== m && !0 !== l && (u(!0), !0 !== m && (N(k[_]), b(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, s.createRef)())
            })), j(e)
          }), [i]), (0, s.useEffect)((() => {
            if (y.length < 1) return;
            w(y[0]?.current?.clientWidth || 0);
            const e = y[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            C(t + a)
          }), [y]), (0, s.useEffect)((() => {
            !1 !== m && setTimeout((() => {
              u(!1)
            }), t)
          }), [m, t]), (0, s.useEffect)((() => {
            v(i.map(((e, a) => (e => {
              let a = 0;
              const t = i.length;
              return 1 === t ? .5 * f - .5 * S - 2 * c + M : (0 === e && (a = c - e * S), e === t - 1 && t > 1 && (a = t * S * -1 + (f - (c - M))), e > 0 && e < t - 1 && (a = e * S * -1 + (.5 * f - .5 * S + .5 * M)), a)
            })(a)))), 1 === i.length ? T(!0) : T(!1)
          }), [g.current, i, f]), (0, s.useEffect)((() => {
            const e = (a = _, i.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            E(e)
          }), [i, _]), (0, s.useEffect)((() => {
            !0 !== o && !0 !== l || N(k[0])
          }), [l, o, k]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("div", {
              className: "rockstargames-sites-gta-gen9ab70c3f9c67ecd69d19216a5f4de5049",
              ref: g,
              onTouchStart: R,
              onTouchMove: O,
              onTouchEnd: P,
              onMouseDown: R,
              onMouseMove: O,
              onMouseUp: P,
              onClick: () => {
                null !== n && n(_)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9a93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": m,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${x}px)`
                },
                children: i.map(((e, a) => (0, d.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c013369a930e076d1729d086fb51903e",
                  ref: y[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), I.length > 1 && !1 === o && (0, d.jsx)("div", {
              className: "rockstargames-sites-gta-gen9da8cfef07bf44e9a44839e2723ec61bb",
              children: I.map((e => (0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9fe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        z = {
          pillBtn: "rockstargames-sites-gta-gen9aa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-sites-gta-gen9d402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-sites-gta-gen9dde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-sites-gta-gen9c47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-sites-gta-gen9a4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-sites-gta-gen9b1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-sites-gta-gen9a1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-sites-gta-gen9a326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-sites-gta-gen9d19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-sites-gta-gen9bb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-sites-gta-gen9a7f1e2d78519eaf099bd43c6ad07abc9"
        },
        F = (0, m.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: r,
            refCharacterListDesktop: i,
            menuPadding: l,
            longCharList: g,
            setLongCharList: f,
            isMobileMode: p,
            setIsMobileMode: h,
            location: b,
            onNavigate: k
          } = e;
          const {
            windowWidth: v,
            windowHeight: x
          } = (0, m.useWindowResize)(), N = (0, c.useIntl)(), {
            languageSelectorOpened: S,
            setLanguageSelectorOpened: w,
            activeSubNavId: M,
            setActiveSubNavId: C,
            subNavExtraHeight: j,
            setSubNavExtraHeight: O,
            scNavOpened: P,
            setScNavOpened: H
          } = y(), [A, F] = (0, s.useState)(""), {
            lsSettings: X
          } = (0, m.useRockstarWebLSSettings)(), {
            track: G
          } = (0, _.useGtmTrack)(), V = (0, u.useRockstarTokenPing)(), {
            data: K,
            loggedIn: J
          } = (0, _.useRockstarUser)(), {
            charactersNeeded: Y,
            currentCharId: q,
            hasNotifications: Q,
            navOpen: Z,
            setCurrentCharId: ee,
            setHasNotifications: ae,
            setSelectedCharacterTuple: te,
            setUserData: se
          } = (0, _.useRockstarUserState)(), [ce, re] = (0, s.useState)(null), [ne, ie] = (0, s.useState)(null), [oe, le] = (0, s.useState)(!1), [de, ge] = (0, s.useState)(!1), [fe, me] = (0, s.useState)(0), ue = (0, s.createRef)(), _e = D(ue, !1), pe = (0, s.createRef)(), [he, be] = (0, s.useState)(0), [ke, ve] = (0, s.useState)([]), [xe, Ne] = (0, s.useState)(244), Se = (0, s.useRef)(null), we = (0, s.useMemo)((() => (0, L.A)()), []), Me = (0, s.useMemo)((() => ((e, a, t, s, c) => [{
            text: e.formatMessage(o.sc_link_activity_feed),
            location: {
              domain: L.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...T,
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
                domain: L.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...T,
                text: o.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(o.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...T,
                text: o.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(o.sc_link_messages),
              location: {
                domain: L.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...T,
                text: o.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(o.sc_link_game_activation),
              location: {
                domain: L.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...T,
                text: o.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(o.sc_link_notifications),
            location: {
              domain: L.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...T,
              text: o.sc_link_notifications.defaultMessage,
              location: {
                domain: L.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(o.sc_link_crews),
            location: {
              domain: L.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...T,
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
                domain: L.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...T,
                text: o.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(o.sc_link_import_friends),
              location: {
                domain: L.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...T,
                text: o.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(o.sc_link_find_friends),
              location: {
                domain: L.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...T,
                text: o.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, R(e), {
            text: e.formatMessage(o.sc_link_log_out),
            href: `${a.logout}?returnUrl=${c}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...T,
              text: o.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(N, a, K, Q, A, window)), [N, a, K, Q, A, we]), Ce = () => {
            ge(l + xe * fe < _e)
          }, ye = () => {
            if (pe.current) {
              const {
                current: e
              } = pe, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), be(a + e)
              } else be(a)
            }
          };
          return (0, s.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            we.currentSite?.site === L.C.socialClub && (e = encodeURIComponent("/")), F(e)
          }), [b]), (0, s.useEffect)((() => {
            ve(K.characters[Y] ?? [])
          }), [K, Y]), (0, s.useEffect)((() => {
            K && se(K)
          }), [K]), (0, s.useEffect)((() => {
            const e = K?.characters.gtao;
            if (null !== J && !e.length) return void te(!1);
            if (null == q || !e.length) return;
            const a = e?.[q] ?? e?.[0] ?? null;
            te(!!a?.platform && [a.platform, a.characterSlot])
          }), [q, K, J]), (0, s.useEffect)((() => {
            (async () => {
              if (!K?.id) return;
              const {
                count: e
              } = await (0, m.coreScApiFetch)("notification/count", {
                pingBearer: V
              });
              ae(e > 0)
            })()
          }), [K]), (0, s.useEffect)((() => {
            Ce()
          }), [xe]), (0, s.useEffect)((() => {
            r(!0), h(v < 768), h(v < 768 || x < 649)
          }), [v, x]), (0, s.useEffect)((() => {
            let e = ke.length - 1;
            e < 0 && (e = 0), me(e);
            const a = ke.length > 0 ? ke[q] ?? ke[0] : null;
            if (!a) return;
            const t = null !== a ? n(a.platform, "large") : null;
            ie(t), re(a), ke.length > 1 ? le(!0) : le(!1), f(ke.length - 1 > 3)
          }), [q, ke]), (0, s.useEffect)((() => {
            Ce()
          }), [fe, p, v, ke]), (0, s.useEffect)((() => {
            ye(), I()((() => {
              setTimeout(ye, 0)
            }), 300)
          }), [v, x]), (0, s.useEffect)((() => {
            const e = X?.currentCharId ?? 0;
            e !== q && ee(Math.max(0, Math.min(e, ke.length - 1)))
          }), [ke, X]), (0, d.jsxs)(d.Fragment, {
            children: [null !== ce && "gtao" === Y && (0, d.jsxs)("div", {
              className: z.scProfile,
              ref: Se,
              tabIndex: -1,
              "aria-label": N.formatMessage(o.profile_selector_profile_card),
              children: [(0, d.jsx)(B, {
                s: z,
                character: ce,
                platformTag: ne
              }), !0 === oe && (0, d.jsxs)("div", {
                className: z.scCharacterSelector,
                children: [(0, d.jsx)("button", {
                  className: z.scCharacterSelectBtn,
                  "aria-hidden": !Z,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    r(a), G({
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
                  className: z.scCharacterList,
                  "data-long-list": g,
                  "aria-hidden": t,
                  ref: i,
                  children: ke.map((e => (0, d.jsx)($, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: Ne
                  }, e.mugshotUrl)))
                }), !0 === p && (0, d.jsx)("div", {
                  className: z.scCharacterList,
                  "data-single-item": 2 === ke.length,
                  "data-swiper-disabled": de,
                  "aria-hidden": t,
                  ref: ue,
                  children: (0, d.jsx)(W, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      G({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: de,
                    disableSwiper: de,
                    children: ke.filter(((e, a) => a !== q)).map((e => (0, s.createElement)($, {
                      characterData: e,
                      setMobileCardWidth: Ne,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, d.jsxs)("nav", {
              className: z.scNav,
              "aria-hidden": !Z,
              children: [(0, d.jsx)("button", {
                className: z.scNavHeader,
                type: "button",
                "data-opened": P,
                "data-nav-opened": Z,
                tabIndex: P ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), P || H(!0)
                },
                "data-testid": "playerButton",
                children: (0, d.jsx)("span", {
                  children: K.nickname
                })
              }), (0, d.jsx)("div", {
                className: z.scNavWrap,
                "data-opened": P,
                "data-logged-in": "true",
                ref: pe,
                style: {
                  "--scNavWrap-max-height": `${he+j}px`
                },
                children: Me.map(((e, a) => (0, s.createElement)(U, {
                  ...e,
                  id: a,
                  activeSubNavId: M,
                  setActiveSubNavId: C,
                  setSubNavExtraHeight: O,
                  onNavigate: k,
                  key: e.text
                })))
              })]
            }), (0, d.jsx)("div", {
              className: z.scLanguageSelector,
              style: {
                visibility: Z ? null : "hidden"
              },
              children: (0, d.jsx)(E.A, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: S,
                setLanguageSelectorOpened: w,
                location: b
              })
            })]
          })
        })),
        X = {
          scMenu: "rockstargames-sites-gta-gen9ebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-sites-gta-gen9f333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-sites-gta-gen9e3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-sites-gta-gen9ff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-sites-gta-gen9ba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-sites-gta-gen9d362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-sites-gta-gen9d8e443f5d0d9171449f5f1042f80aa17"
        },
        G = (0, c.withIntl)((e => {
          let {
            location: a,
            onNavigate: r
          } = e;
          const {
            windowHeight: n
          } = (0, m.useWindowResize)(), i = (0, c.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: g,
            setActiveSubNavId: p,
            scNavOpened: h,
            setScNavOpened: b,
            charListHidden: k,
            setCharListHidden: v
          } = y(), [x, N] = (0, s.useState)(!1), {
            navHidden: S = !1
          } = (0, u.useState)(), {
            loggedIn: w
          } = (0, _.useRockstarUser)(), {
            currentCharId: M,
            navOpen: C,
            setNavOpen: j,
            userData: I
          } = (0, _.useRockstarUserState)(), {
            track: E
          } = (0, _.useGtmTrack)(), [L, T] = (0, s.useState)(!1), R = (0, u.useReactiveVar)(_.scConfig), O = (0, s.useRef)(), [P, U] = (0, s.useState)(0), $ = (0, s.createRef)(), [A, B] = (0, s.useState)(!1), [D, W] = (0, s.useState)(0), [z, G] = (0, s.useState)(!1), {
            mutateLSSettings: V,
            lsSettings: K
          } = (0, m.useRockstarWebLSSettings)(), J = (0, s.useCallback)((e => {
            v(e), O.current && !0 === e && (O.current.scrollTop = 0)
          }), [O]);
          return (0, s.useEffect)((() => {
            null !== M && K.currentCharId !== M && V({
              key: "currentCharId",
              value: M
            }), !1 === w ? V({
              key: "currentCharId",
              value: null
            }) : w && !I && E({
              event: "account_synced"
            })
          }), [M, w]), (0, s.useEffect)((() => {
            O.current && (!1 === k && !1 === L && (O.current.style.height = `${O.current.scrollHeight}px`), !0 === k && (O.current.style.height = null))
          }), [k, O, L]), (0, s.useEffect)((() => {
            const e = () => {
                j(!1), J(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, s.useEffect)((() => {
            j(!1), J(!0)
          }), [S]), (0, s.useEffect)((() => {
            if ($.current) {
              const {
                current: e
              } = $, a = window.getComputedStyle(e);
              U(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [$]), (0, s.useEffect)((() => {
            G(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            $.current && N($?.current?.scrollHeight >= n)
          }), [$, n]), (0, s.useEffect)((() => {
            C || (p(-1), g(!1))
          }), [C]), (0, s.useEffect)((() => {
            l && (k || J(!0), h && (b(!1), p(-1)))
          }), [l]), (0, s.useEffect)((() => {
            h && (l && g(!1), k || J(!0))
          }), [h]), null === w ? null : (0, d.jsxs)(f.A, {
            enabled: !!C,
            removeScrollBar: !1,
            children: [(0, d.jsxs)("div", {
              className: [X.scMenu, C ? X.navOpen : ""].join(" "),
              "data-logged-in": w,
              "data-mac-browser": z,
              "data-scroll-mode": x,
              ref: $,
              "aria-hidden": !C,
              children: [(0, d.jsx)("button", {
                className: X.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  W(a)
                },
                onTouchMove: e => {
                  if (0 === D) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(D - a) > 1 && (W(0), j(!1))
                },
                children: (0, d.jsx)("img", {
                  className: X.dragHandle,
                  src: t(68128),
                  alt: i.formatMessage(o.sc_menu_drag_handle)
                })
              }), w ? (0, d.jsx)(F, {
                sc: R,
                charListHidden: k,
                hideCharacterList: J,
                refCharacterListDesktop: O,
                menuPadding: P,
                longCharList: L,
                setLongCharList: T,
                isMobileMode: A,
                setIsMobileMode: B,
                location: a,
                onNavigate: r
              }) : (0, d.jsx)(H, {
                sc: R,
                navOpen: C,
                location: a,
                onNavigate: r
              })]
            }), (0, d.jsx)("div", {
              className: [X.scOverlay, C ? X.navOpen : ""].join(" "),
              "data-logged-in": w
            })]
          })
        }), r),
        V = t(58989),
        K = t(81764),
        J = (0, c.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, c.useIntl)(),
            {
              data: r
            } = (0, _.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: l,
              navOpen: g,
              setNavOpen: f
            } = (0, _.useRockstarUserState)(),
            {
              track: m
            } = (0, _.useGtmTrack)(),
            [u, p] = (0, s.useState)(null),
            [h, b] = (0, s.useState)(!1),
            [k, v] = (0, s.useState)(null),
            [x, N] = (0, s.useState)(!1),
            [S, w] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            w(r.characters[i] ?? [])
          }), [r, i]);
          const M = (0, s.useCallback)((e => {
            e.stopPropagation(), f(!g), 1 == !g && a(null), m({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: g ? "close" : "open"
            })
          }), [g]);
          return (0, s.useEffect)((() => {
            const e = r?.id ?? !1,
              a = e ? (S?.[l]?.mugshotUrl ?? r?.avatar) || V : K,
              t = n(S?.[l]?.platform, "small") ?? null;
            v(t), p(a), b(e), N(!!S?.[l]?.mugshotUrl)
          }), [r, S, l, V, K]), (0, d.jsxs)("button", {
            className: "rockstargames-sites-gta-gen9dc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": x,
            "aria-label": t.formatMessage(g ? o.sc_menu_close : o.sc_menu_open),
            "aria-expanded": g,
            type: "button",
            onClick: M,
            "data-testid": "avaterMenuButton",
            "data-logged-in": Boolean(h),
            children: [(0, d.jsx)("img", {
              className: "rockstargames-sites-gta-gen9ce75eaa6d65692d36b60d31f3f660ff0",
              src: u || "",
              onError: () => {
                p(V)
              },
              alt: r?.nickname || ""
            }), h && null !== k && (0, d.jsx)("img", {
              className: "rockstargames-sites-gta-gen9aaf21e74a659089f743bb160bdf95046",
              src: k.src,
              alt: k.alt
            }), h && (0, d.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-gta-gen9cf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": S?.[l]?.platform ?? null
            })]
          })
        }), r)
    },
    13963: (e, a, t) => {
      t.d(a, {
        A: () => r,
        C: () => s
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        c = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        r = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = c.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [s, c] = a;
            return c === t && (e = {
              site: s,
              subDomain: c
            }, !0)
          })) >= 0)), r = c[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    68128: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    81764: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    58989: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    89544: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    65636: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    20357: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    17976: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    84923: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    45710: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    8318: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    52047: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    60350: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    89825: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    36399: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    92627: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    76425: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    43864: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);