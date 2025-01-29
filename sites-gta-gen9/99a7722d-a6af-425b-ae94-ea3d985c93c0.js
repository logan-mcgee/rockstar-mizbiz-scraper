! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "99a7722d-a6af-425b-ae94-ea3d985c93c0", e._sentryDebugIdIdentifier = "sentry-dbid-99a7722d-a6af-425b-ae94-ea3d985c93c0")
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
  [1680], {
    64600: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => Me
      });
      var s = t(62229),
        n = t(9623),
        c = t(62665),
        r = t(22738),
        i = t(95966),
        o = t(2918),
        l = t(36671),
        d = t(81788),
        g = t(539),
        m = t(92440),
        u = t(14818),
        f = t(98096);
      const _ = e => {
          let {
            legalText: a
          } = e;
          return (0, f.jsx)("div", {
            dangerouslySetInnerHTML: {
              __html: a
            }
          })
        },
        b = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        p = e => {
          let {
            s: a,
            content: t,
            refLanding: s,
            loggedIn: n,
            addClaim: c,
            signin: r,
            landingSlide: i
          } = e;
          return (0, f.jsxs)("div", {
            className: [a.contentContainer, a[i], a.landingSlide].join(" "),
            ref: s,
            children: [(0, f.jsx)("img", {
              src: t.introScreen.image.sources.mobile || b,
              className: a.moduleImageMobile,
              alt: t.introScreen.image.alt
            }), (0, f.jsxs)("div", {
              className: a.topContent,
              children: [(0, f.jsx)("div", {
                className: a.textContent,
                children: (0, f.jsxs)("div", {
                  className: a.alert,
                  children: [(0, f.jsx)("div", {
                    className: a.badge,
                    children: t.introScreen.tag
                  }), (0, f.jsxs)("div", {
                    className: a.alertText,
                    children: [(0, f.jsx)("h2", {
                      children: t.introScreen.headline
                    }), (0, f.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: t.introScreen.body
                      }
                    })]
                  })]
                })
              }), (0, f.jsx)("div", {
                className: a.btnContainer,
                children: (0, f.jsx)(u.A, {
                  text: n ? t.introScreen.btnText.loggedIn : t.introScreen.btnText.loggedOut,
                  onClick: n ? c : r
                })
              })]
            }), (0, f.jsx)("div", {
              className: a.bottomContent,
              children: (0, f.jsx)("div", {
                className: a.legal,
                children: (0, f.jsx)(_, {
                  legalText: t.legalText
                })
              })
            })]
          })
        };
      var h = t(24162),
        k = t(7545);
      const x = JSON.parse('{"us":{"rp_icon":"RP Category","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        v = (e, a) => {
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
        S = e => t(e < 100 ? 15917 : e > 99 && e < 500 ? 89697 : e > 499 && e < 750 ? 58662 : 26563),
        N = (0, d.defineMessages)({
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
        C = {
          pillBtn: "rockstargames-sites-gta-gen9b618569985ae824a0ad12179a3fc1d73",
          selected: "rockstargames-sites-gta-gen9e1a2f9a25bb7f66968281e2bc4e4de88",
          scCharacterCard: "rockstargames-sites-gta-gen9b5c76acf3bb09d7897375c618e9b0a12",
          avatar: "rockstargames-sites-gta-gen9d6d3f262555eafb7d674aaf38e8ddfd6",
          scCharNames: "rockstargames-sites-gta-gen9cb995eda97ef905857c8d886edcf0897",
          scCharacterStats: "rockstargames-sites-gta-gen9a68d43553c702327a295c974a9c5e67b",
          scUserName: "rockstargames-sites-gta-gen9ad1b6a52da2116461c0d8b9c63b8ee28",
          scRpLevel: "rockstargames-sites-gta-gen9af42f06ddb8cff176be6fcb31e17271a",
          scRpIcon: "rockstargames-sites-gta-gen9f9a042c11d2e6a8ed1d5e78f40abd88d"
        },
        j = (0, d.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const n = (0, d.useIntl)(),
            {
              platform: c,
              platformUsername: r,
              mugshotUrl: i,
              stats: o
            } = a,
            [l, g] = (0, s.useState)(i),
            m = v(c, "large");
          return (0, f.jsxs)("div", {
            className: C.scCharacterCard,
            children: [(0, f.jsx)("div", {
              className: C.avatar,
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: l,
                alt: n.formatMessage(N.profile_selector_mugshot, {
                  userName: r
                }),
                onError: () => {
                  g(t(5931))
                }
              })
            }), (0, f.jsx)("div", {
              className: C.scCharacterStats,
              children: (0, f.jsxs)("div", {
                className: C.scCharNames,
                children: [(0, f.jsx)("img", {
                  src: m.src,
                  alt: m.alt
                }), (0, f.jsx)("div", {
                  className: C.scUserName,
                  "data-size": "small",
                  children: r
                }), (0, f.jsx)("div", {
                  className: C.scRp,
                  children: (0, f.jsxs)("div", {
                    className: C.scRpLevel,
                    children: [(0, f.jsx)("img", {
                      className: C.scRpIcon,
                      src: S(o.overview.rank.value),
                      alt: n.formatMessage(N.profile_selector_rp_icon)
                    }), (0, f.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), x);
      var w = t(89950),
        y = t(15138);
      const M = (0, d.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        I = {
          pillBtn: "rockstargames-sites-gta-gen9e34929a5bcdda554c66b47a858ddd966",
          selected: "rockstargames-sites-gta-gen9e1ba906f108faeb297753d39a8d21b8b",
          menuStyles: "rockstargames-sites-gta-gen9b641fac428f473cbb4593cd058a01953",
          languageSelector: "rockstargames-sites-gta-gen9a9dd8a9cb7334e205df4ac3b4392916d",
          open: "rockstargames-sites-gta-gen9aa1d94595080f833a35e29fbbe8fd01c",
          linkWrapper: "rockstargames-sites-gta-gen9b4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-sites-gta-gen9c64b05a604b1a6be373d35cf01edba2e",
          selectBoxWrapper: "rockstargames-sites-gta-gen9db1aead5717ba9dae1e272c3b7e6e801",
          selectBox: "rockstargames-sites-gta-gen9fe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-sites-gta-gen9ae32febd9789e79c804b2679d25e8a65"
        },
        T = (0, d.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: n,
            location: c,
            parent: r = "footer"
          } = e;
          const {
            track: i
          } = (0, o.useGtmTrack)(), l = (0, d.useIntl)(), [g, m] = (0, d.getLocale)(), [u, _] = (0, s.useState)(!1), b = (0, s.useMemo)((() => (0, y.A)()), []), p = (0, s.useCallback)((e => {
            let a = c.pathname.replace(/^\/|\/$/g, "");
            const t = a.split("/");
            return d.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), b.currentSite?.site === y.C.www ? "en" === e ? `${window.location.origin}/${a}${c.search}` : `${window.location.origin}/${e}/${a}${c.search}` : `${window.location.origin}/${a}${c.search}`
          }), [c]), h = (0, s.useRef)(null), [k, x] = (0, s.useState)(0), v = matchMedia("(hover: none) and (pointer: coarse)").matches, S = e => {
            if (n && n(!1), g.subdomaincom === e || "none" === e) return void(n && n(!1));
            const a = d.locales.find((a => a.subdomaincom === e));
            if (a) {
              const t = p(e);
              i({
                event: "cta_other",
                link_url: t,
                text: e,
                element_placement: r
              }), m(a.iso), window.location.href = t
            }
          };
          return (0, s.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === u && _(!1)
          }), [t]), (0, s.useEffect)((() => {
            h.current && x(h.current.scrollHeight)
          }), [h]), (0, f.jsxs)("div", {
            className: [I.languageSelector, u ? I.open : ""].join(" "),
            "data-theme": a,
            children: [v && "sc-menu" === a && (0, f.jsx)("div", {
              className: I.selectBoxWrapper,
              children: (0, f.jsxs)("select", {
                className: I.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  S(a)
                },
                "aria-label": l.formatMessage(M.language_selector_default),
                children: [(0, f.jsx)("option", {
                  className: I.selectBoxOption,
                  value: "none",
                  children: (0, f.jsx)(d.FormattedMessage, {
                    ...M.language_selector_default
                  })
                }), d.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, f.jsx)("option", {
                    className: I.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!v || "sc-menu" !== a) && (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), n && n(!u), _(!u)
                },
                type: "button",
                "aria-label": l.formatMessage(M.language_selector_default),
                children: [(0, f.jsx)("i", {}), (0, f.jsx)("span", {
                  children: (0, f.jsx)(d.FormattedMessage, {
                    ...M.language_selector_default
                  })
                })]
              }), (0, f.jsx)("div", {
                className: I.linkWrapper,
                ref: h,
                style: {
                  "--ls-linkWrapper-opened-height": `${k}px`
                },
                children: (0, f.jsx)("div", {
                  className: I.links,
                  children: d.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, f.jsx)(w.A, {
                      to: p(a),
                      onClick: (s = a, () => {
                        S(s)
                      }),
                      tabIndex: u ? 0 : -1,
                      children: t
                    }, `desktop-${a}`);
                    var s
                  }))
                })
              })]
            })]
          })
        }), x);
      var E = t(64147);
      const L = (0, i.makeVar)(!1),
        R = e => L(e),
        P = (0, i.makeVar)(-1),
        O = e => P(e),
        $ = (0, i.makeVar)(-1),
        H = e => $(e),
        U = (0, i.makeVar)(!0),
        B = e => U(e),
        A = (0, i.makeVar)(!0),
        W = e => A(e),
        D = () => {
          const e = (0, i.useReactiveVar)(L),
            a = (0, i.useReactiveVar)(P),
            t = (0, i.useReactiveVar)($),
            n = (0, i.useReactiveVar)(U),
            c = (0, i.useReactiveVar)(A);
          return (0, s.useEffect)((() => {
            c || (e && R(!1), n && (B(!1), O(-1)))
          }), [c]), (0, s.useEffect)((() => {
            !e && c && (n || B(!0))
          }), [e, c]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: R,
            activeSubNavId: a,
            setActiveSubNavId: O,
            subNavExtraHeight: t,
            setSubNavExtraHeight: H,
            navOpened: n,
            setScNavOpened: B,
            charListHidden: c,
            setCharListHidden: W
          })), [e, a, t, n, c])
        };
      var F = t(45757),
        z = t.n(F);
      const V = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        X = e => ({
          text: e.formatMessage(N.sc_link_help),
          target: "_self",
          ga: {
            ...V,
            text: N.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(N.sc_link_support),
            location: {
              domain: y.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(N.sc_link_legal),
            location: {
              domain: y.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(N.sc_link_privacy_policy),
            location: {
              domain: y.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(N.sc_link_cookies_policy),
            location: {
              domain: y.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(N.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(N.sc_link_do_not_sell_my_information),
            location: {
              domain: y.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        G = e => {
          let {
            to: a,
            target: t,
            className: s,
            onNavigate: n,
            onClick: c,
            reloadDocument: r,
            children: i,
            ...o
          } = e;
          const l = a?.startsWith("http");
          return (0, f.jsx)("a", {
            href: a,
            className: s,
            onClick: e => {
              c?.(e), l || r || (n ? (e.preventDefault(), n(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            target: t,
            ...o,
            children: i
          })
        },
        q = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: n,
            ga: c,
            dataTestId: r,
            isSubLink: i,
            hasNotifications: l = !1,
            onClickCallback: g = (() => {}),
            tabIndex: m,
            reloadDocument: u = !1,
            onNavigate: _
          } = e;
          const {
            track: b
          } = (0, o.useGtmTrack)(), p = (0, y.A)(), h = (0, d.useIntl)();
          let k = s;
          n && (k = n.domain === p.currentSite?.site ? n.path : `https://${p.sites[n.domain]}.rockstargames.com${n.path}`);
          const x = {
            ...c,
            link_url: k
          };
          return (0, f.jsxs)(G, {
            className: i ? "rockstargames-sites-gta-gen9c2233d027086d54af877493d7d0700bd" : "rockstargames-sites-gta-gen9f97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": r || "menuLink",
            title: a,
            to: k,
            target: t,
            rel: "noreferrer",
            reloadDocument: u,
            tabIndex: m,
            onClick: e => {
              b(x), g(e)
            },
            onNavigate: _,
            children: [a, l && (0, f.jsx)("div", {
              className: "rockstargames-sites-gta-gen9f5178077f8a32e83d71d4e80b551903d",
              children: (0, f.jsx)("span", {
                className: "rockstargames-sites-gta-gen9e49e290899be3c888ca5a4b6b13736a1",
                children: h.formatMessage(N.nofications_new)
              })
            })]
          })
        },
        Y = e => {
          let {
            id: a,
            text: t,
            target: n,
            href: c,
            location: r,
            ga: l,
            hasNotifications: d = !1,
            dataTestId: g,
            children: m = [],
            activeSubNavId: u,
            setActiveSubNavId: _,
            setSubNavExtraHeight: b,
            reloadDocument: p = !1,
            onClickCallback: h = (() => {}),
            onNavigate: k
          } = e;
          const {
            windowWidth: x,
            windowHeight: v
          } = (0, i.useWindowResize)(), {
            track: S
          } = (0, o.useGtmTrack)(), {
            navOpen: N
          } = (0, o.useRockstarUserState)(), C = (0, s.useRef)(null), [j, w] = (0, s.useState)(0), [y, M] = (0, s.useState)(0), [I, T] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            u !== a && !1 === I && T(!0), u === a && T(!1)
          }), [u]), (0, s.useEffect)((() => {
            if (!C.current) return;
            w(C?.current?.scrollHeight);
            const e = window.getComputedStyle(C.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), M(a)
            }
          }), [C, x, v]), m.length > 0 ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("button", {
              className: "rockstargames-sites-gta-gen9ab99be57ff98f572ec19be5191046577",
              type: "button",
              "data-testid": g || "menuButton",
              title: t,
              tabIndex: N ? 0 : -1,
              "data-children-hidden": I,
              onClick: e => {
                e.stopPropagation(), S(l), u === a ? (_(-1), b(0)) : (_(a), b(j + y + y))
              },
              children: [(0, f.jsx)("span", {
                className: "rockstargames-sites-gta-gen9e5caaa3aab68c5526a84b01ef0db0a8a",
                children: t
              }), (0, f.jsx)("span", {
                className: "rockstargames-sites-gta-gen9bb9e4df34c9ecbe29c9886426e64ed12"
              })]
            }, t), (0, f.jsx)("nav", {
              className: "rockstargames-sites-gta-gen9e482683a0cb805002f8bd41b8ef81537",
              ref: C,
              "aria-hidden": I,
              style: {
                height: I ? 0 : `${j}px`
              },
              children: m.map((e => (0, s.createElement)(q, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: I || !N ? -1 : 0,
                onNavigate: k
              })))
            })]
          }) : (0, f.jsx)(q, {
            text: t,
            target: n,
            href: c,
            location: r,
            ga: l,
            hasNotifications: d,
            dataTestId: g,
            isSubLink: !1,
            onClickCallback: h,
            tabIndex: N ? 0 : -1,
            reloadDocument: p,
            onNavigate: k
          })
        },
        J = e => {
          let {
            sc: a,
            location: t,
            onNavigate: n
          } = e;
          const {
            windowWidth: c,
            windowHeight: r
          } = (0, i.useWindowResize)(), l = (0, d.useIntl)(), {
            languageSelectorOpened: g,
            setLanguageSelectorOpened: m,
            activeSubNavId: u,
            setActiveSubNavId: _,
            subNavExtraHeight: b,
            setSubNavExtraHeight: p
          } = D(), {
            setSelectedCharacterTuple: h,
            navOpen: k
          } = (0, o.useRockstarUserState)(), x = (0, i.useLocale)(), v = (0, i.toScLocaleString)(x), [S, C] = (0, s.useState)(""), j = `${a.login}?returnUrl=${S}&lang=${v}`, w = `${a.signup}&returnUrl=${S}&lang=${v}`, M = (0, s.useMemo)((() => (0, y.A)()), []), I = (0, s.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(N.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: N.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(N.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: N.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, X(e)])(l, j, w);
            return e
          }), [l, j, w, M]), [E, L] = (0, s.useState)(0), R = (0, s.createRef)(), P = () => {
            if (R.current) {
              const {
                current: e
              } = R, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), L(a + e)
              } else L(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            C(e)
          }), [JSON.stringify(t)]), (0, s.useEffect)((() => {
            h(!1)
          }), []), (0, s.useEffect)((() => {
            P(), z()((() => {
              setTimeout(P, 0)
            }), 300)
          }), [c, r]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("nav", {
              className: "rockstargames-sites-gta-gen9f300d66bd02f52ac564238ca6125a091",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-gta-gen9ac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: R,
                style: {
                  "--navWrap-max-height": `${b+E}px`
                },
                children: I.map((e => (0, s.createElement)(Y, {
                  ...e,
                  activeSubNavId: u,
                  setActiveSubNavId: _,
                  setSubNavExtraHeight: p,
                  onNavigate: n,
                  key: e.text
                })))
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-gta-gen9f30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: k ? null : "hidden"
              },
              children: (0, f.jsx)(T, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: g,
                setLanguageSelectorOpened: e => {
                  _(-1), m(e)
                },
                defaultMessage: "Select a Language",
                location: t
              })
            })]
          })
        };
      var K = t(86082);
      const Q = {
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "Xbox One",
          xboxsx: "Xbox Series X|S"
        },
        Z = "CharacterButton:characterName",
        ee = "CharacterButton:platform",
        ae = "CharacterButton:avatar",
        te = "CharacterButton:rankValue",
        se = e => {
          let {
            characterData: a,
            setMobileCardWidth: n,
            tabIndex: c
          } = e;
          const r = (0, d.useIntl)(),
            {
              currentCharId: i,
              setCurrentCharId: l
            } = (0, o.useRockstarUserState)(),
            {
              track: g
            } = (0, o.useGtmTrack)(),
            m = (0, s.createRef)(),
            {
              platform: u,
              platformUsername: _,
              mugshotUrl: b,
              stats: p
            } = a,
            [h, k] = (0, s.useState)(b),
            [x] = (0, s.useState)(a.index),
            C = v(u, "large"),
            j = i === a.index;
          return (0, s.useEffect)((() => {
            m.current && n && n(m?.current?.offsetWidth)
          }), [m]), (0, f.jsxs)("button", {
            className: "rockstargames-sites-gta-gen9b26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": j,
            onClick: e => {
              e.stopPropagation(), l(x), g({
                event: "character_selector_select",
                text: Q[u] ?? "",
                position: x
              })
            },
            ref: m,
            tabIndex: c,
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: h,
                alt: r.formatMessage(N.profile_selector_mugshot, {
                  userName: _
                }),
                onError: () => {
                  k(t(5931))
                },
                "data-testid": ae
              })
            }), (0, f.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9ed30f2b92b3fc2937e7278409208872f",
              children: [(0, f.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9a6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, f.jsx)("img", {
                  src: C.src,
                  alt: C.alt,
                  "data-testid": ee
                }), (0, f.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": Z,
                  children: _
                })]
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, f.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9c9300f34b82bbdffb7006ff32247adff",
                  children: [(0, f.jsx)("img", {
                    className: "rockstargames-sites-gta-gen9faa7b2808fb96fa02fd2e99be36df8e6",
                    src: S(parseInt(p.overview.rank.value)),
                    alt: r.formatMessage(N.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    "data-testid": te,
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        ne = {
          pillBtn: "rockstargames-sites-gta-gen9c094ee9992658964204dbc3c55063187",
          selected: "rockstargames-sites-gta-gen9f68f5558f3bacb6ab2f0f6e52b7c4d3d",
          profileDetails: "rockstargames-sites-gta-gen9c7a6cdc85906179aeadfbea13a491277",
          avatar: "rockstargames-sites-gta-gen9e1ed133f04d4201de6c787667fe46939",
          avatarPlatform: "rockstargames-sites-gta-gen9b061d8f050dd255669342700ddbe9f94",
          profileStats: "rockstargames-sites-gta-gen9a4a23edaf47f301893d88f6e233907b3",
          scNames: "rockstargames-sites-gta-gen9c6a703613ae9abf4927cf1f023878d9c",
          scTagsNames: "rockstargames-sites-gta-gen9ac56f06be77872b6f7ba074189a2ec36",
          scUserName: "rockstargames-sites-gta-gen9a829077ec05e5b83560be13ff3604c8e",
          scCrewName: "rockstargames-sites-gta-gen9c3c644cc20da4e904a7f4e5e3850bf7b",
          scCrewRankBar: "rockstargames-sites-gta-gen9cacefbe6235792c328eabdb72c7e812c",
          scCrewRankBarItem: "rockstargames-sites-gta-gen9f9fc60f5d92cda504e6a40d09ec34429",
          scProgress: "rockstargames-sites-gta-gen9b1230619acc50d561a73b55a185e782e",
          scRpLevel: "rockstargames-sites-gta-gen9e3dcece76ffe0dcd864d13ada6a4c532",
          scRpIcon: "rockstargames-sites-gta-gen9fd047e239c2b7adafe8729ad8e7ae646",
          scMoney: "rockstargames-sites-gta-gen9ffc96f13a79073f795d296415f874263",
          scCash: "rockstargames-sites-gta-gen9f21a08a90936d208b236a20d5893ab50",
          scBank: "rockstargames-sites-gta-gen9ee0f3a44274a32b7c03d50d1f8e23578"
        },
        ce = "ProfileCard:characterName",
        re = "ProfileCard:avatar",
        ie = "ProfileCard:bankValue",
        oe = "ProfileCard:cashValue",
        le = "ProfileCard:rankValue",
        de = e => {
          let {
            character: a,
            platformTag: n
          } = e;
          const {
            data: c
          } = (0, o.useRockstarUser)(), {
            track: r
          } = (0, o.useGtmTrack)(), i = (0, d.useIntl)(), [l, g] = (0, s.useState)([]), [m, u] = (0, s.useState)(null), [_, b] = (0, s.useState)(null), [p, h] = (0, s.useState)(!1), [k, x] = (0, s.useState)(-1), [v, C] = (0, s.useState)([]), [j, w] = (0, s.useState)(0), y = t(5931), [M, I] = (0, s.useState)("0"), [T, E] = (0, s.useState)("0"), L = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), R = () => {
            O((0, f.jsx)("img", {
              src: y,
              alt: i.formatMessage(N.profile_selector_mugshot, {
                userName: c.nickname
              })
            }))
          }, [P, O] = (0, s.useState)((0, f.jsx)("img", {
            className: ne.avatarImg,
            src: a.mugshotUrl,
            alt: i.formatMessage(N.profile_selector_mugshot, {
              userName: c.nickname
            }),
            onError: R,
            "data-testid": re
          }));
          (0, s.useEffect)((() => {
            g(c.crews ?? [])
          }), [c.crews]), (0, s.useEffect)((() => {
            O((0, f.jsx)("img", {
              src: a.mugshotUrl,
              alt: c.nickname,
              onError: R,
              "data-testid": re
            })), I(L(a.stats.overview.bank.value)), E(L(a.stats.overview.cash.value)), w(parseInt(a.stats.overview.rank.value))
          }), [a, c.nickname]), (0, s.useEffect)((() => {
            l && l.forEach((e => {
              !0 === e.isPrimary && (u(e.crewTag), b(e.crewColour), x(e.rankOrder), h(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && h(!0))
            }))
          }), [l]), (0, s.useEffect)((() => {
            const e = [];
            if (!p && k > -1)
              for (let a = 5; a > k; a -= 1) e.push((0, f.jsx)("div", {
                className: ne.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== _ ? _ : ""
                }
              }, `crewrankbar-${a}`));
            C(e)
          }), [k, p, _]);
          const $ = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, f.jsxs)("div", {
            className: ne.profileDetails,
            onClick: $,
            onKeyUp: $,
            role: "button",
            tabIndex: -1,
            children: [(0, f.jsxs)("div", {
              className: ne.avatar,
              children: [P, (0, f.jsx)("div", {
                className: ne.avatarPlatform,
                "data-platform": a.platform,
                children: (0, f.jsx)("img", {
                  src: n.src,
                  alt: n.alt
                })
              })]
            }), (0, f.jsxs)("div", {
              className: ne.profileStats,
              children: [(0, f.jsx)("div", {
                className: ne.scNames,
                children: (0, f.jsxs)("div", {
                  className: ne.scTagsNames,
                  children: [(0, f.jsx)("span", {
                    className: ne.scUserName,
                    "data-testid": ce,
                    children: a.platformUsername
                  }), m && (0, f.jsxs)("span", {
                    className: ne.scCrewName,
                    "data-arrow-tag": p,
                    children: [m, !p && (0, f.jsx)("div", {
                      className: ne.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, f.jsxs)("div", {
                className: ne.scProgress,
                children: [(0, f.jsxs)("div", {
                  className: ne.scRpLevel,
                  children: [(0, f.jsx)("img", {
                    className: ne.scRpIcon,
                    src: S(j),
                    alt: i.formatMessage(N.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    "data-testid": le,
                    children: a.stats.overview.rank.value
                  })]
                }), (0, f.jsxs)("div", {
                  className: ne.scMoney,
                  children: [(0, f.jsxs)("span", {
                    className: ne.scCash,
                    "data-testid": oe,
                    children: ["$", T]
                  }), (0, f.jsxs)("span", {
                    className: ne.scBank,
                    "data-testid": ie,
                    children: ["$", M]
                  })]
                })]
              })]
            })]
          })
        },
        ge = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: n = 17,
            slideChangeCallback: c = null,
            slideClickCallback: r = null,
            children: i = [],
            disablePager: o = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, s.createRef)(),
            g = (0, K.ri)(d, !1),
            [m, u] = (0, s.useState)(!1),
            [_, b] = (0, s.useState)(0),
            [p, h] = (0, s.useState)(0),
            [k, x] = (0, s.useState)([n]),
            [v, S] = (0, s.useState)(k[0]),
            [N, C] = (0, s.useState)(252),
            [j, w] = (0, s.useState)(0),
            [y, M] = (0, s.useState)([]),
            [I, T] = (0, s.useState)([]),
            [E, L] = (0, s.useState)(!1),
            R = e => {
              if (!0 === m || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              h(a)
            },
            P = e => {
              if (!0 === m || 0 === p || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > p ? 1 : -1,
                n = Math.abs(p - t);
              n > a ? (s > 0 ? (() => {
                if (!0 === m) return;
                u(!0);
                const e = _ - 1 < 0 ? 0 : _ - 1;
                b(e), S(k[e]), c && c(e)
              })() : (() => {
                if (!0 === m) return;
                u(!0);
                let e = _ + 1 >= k.length ? k.length - 1 : _ + 1;
                e < 0 && (e = 0), b(e), S(k[e]), c && c(e)
              })(), h(0)) : S(k[_] + n * s)
            },
            O = () => {
              !0 !== m && !0 !== l && (u(!0), !0 !== m && (S(k[_]), h(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, s.createRef)())
            })), M(e)
          }), [i]), (0, s.useEffect)((() => {
            if (y.length < 1) return;
            C(y[0]?.current?.clientWidth || 0);
            const e = y[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            w(t + a)
          }), [y]), (0, s.useEffect)((() => {
            !1 !== m && setTimeout((() => {
              u(!1)
            }), t)
          }), [m, t]), (0, s.useEffect)((() => {
            x(i.map(((e, a) => (e => {
              let a = 0;
              const t = i.length;
              return 1 === t ? .5 * g - .5 * N - 2 * n + j : (0 === e && (a = n - e * N), e === t - 1 && t > 1 && (a = t * N * -1 + (g - (n - j))), e > 0 && e < t - 1 && (a = e * N * -1 + (.5 * g - .5 * N + .5 * j)), a)
            })(a)))), 1 === i.length ? L(!0) : L(!1)
          }), [d.current, i, g]), (0, s.useEffect)((() => {
            const e = (a = _, i.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            T(e)
          }), [i, _]), (0, s.useEffect)((() => {
            !0 !== o && !0 !== l || S(k[0])
          }), [l, o, k]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-gta-gen9b794a0e12537ad5fd506353133b9d60a",
              ref: d,
              onTouchStart: R,
              onTouchMove: P,
              onTouchEnd: O,
              onMouseDown: R,
              onMouseMove: P,
              onMouseUp: O,
              onClick: () => {
                null !== r && r(_)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": m,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${v}px)`
                },
                children: i.map(((e, a) => (0, f.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9dd4bcd955436c8a6982ee16756f7fd8b",
                  ref: y[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), I.length > 1 && !1 === o && (0, f.jsx)("div", {
              className: "rockstargames-sites-gta-gen9e8e5249dac92a2bc76788d0fe7d7dfb7",
              children: I.map((e => (0, f.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        me = {
          pillBtn: "rockstargames-sites-gta-gen9b4f0b55680e047d303f82f34594abd96",
          selected: "rockstargames-sites-gta-gen9ed6126bd2f36579f2b8035e7c6579eb7",
          profile: "rockstargames-sites-gta-gen9e506a7deb95c0b0c9988325cc857ea9a",
          scCharacterSelector: "rockstargames-sites-gta-gen9c3ea8d575c892277f23ad5b589977862",
          scCharacterSelectBtn: "rockstargames-sites-gta-gen9ea15428b850bf436adda6f1dd8ac1af9",
          open: "rockstargames-sites-gta-gen9c5ffa3cbaa36329b72b3d928f9739849",
          scCharacterList: "rockstargames-sites-gta-gen9a84bbdd60e615baed0172e6b960c5d32",
          nav: "rockstargames-sites-gta-gen9ca9118e28091523e6679a3b95054fe93",
          languageSelector: "rockstargames-sites-gta-gen9b71a5b5521e679bcab20ec6302253996",
          navHeader: "rockstargames-sites-gta-gen9fa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-sites-gta-gen9ce91ee6ebb491174a4ccb4be628aaae7"
        },
        ue = e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: n,
            refCharacterListDesktop: c,
            menuPadding: r,
            longCharList: l,
            setLongCharList: g,
            isMobileMode: m,
            setIsMobileMode: u,
            location: _,
            onNavigate: b
          } = e;
          const {
            windowWidth: p,
            windowHeight: h
          } = (0, i.useWindowResize)(), k = (0, d.useIntl)(), {
            languageSelectorOpened: x,
            setLanguageSelectorOpened: S,
            activeSubNavId: C,
            setActiveSubNavId: j,
            subNavExtraHeight: w,
            setSubNavExtraHeight: M,
            navOpened: I,
            setScNavOpened: E
          } = D(), [L, R] = (0, s.useState)(""), {
            lsSettings: P
          } = (0, i.useRockstarWebLSSettings)(), {
            track: O
          } = (0, o.useGtmTrack)(), $ = (0, i.useRockstarTokenPing)(), {
            data: H,
            loggedIn: U
          } = (0, o.useRockstarUser)(), {
            charactersNeeded: B,
            currentCharId: A,
            hasNotifications: W,
            navOpen: F,
            setCurrentCharId: G,
            setHasNotifications: q,
            setSelectedCharacterTuple: J,
            setUserData: Q
          } = (0, o.useRockstarUserState)(), [Z, ee] = (0, s.useState)(null), [ae, te] = (0, s.useState)(null), [ne, ce] = (0, s.useState)(!1), [re, ie] = (0, s.useState)(!1), [oe, le] = (0, s.useState)(0), ue = (0, s.createRef)(), fe = (0, K.ri)(ue, !1), _e = (0, s.createRef)(), [be, pe] = (0, s.useState)(0), [he, ke] = (0, s.useState)([]), [xe, ve] = (0, s.useState)(244), Se = (0, s.useRef)(null), Ne = (0, s.useMemo)((() => (0, y.A)()), []), Ce = (0, s.useMemo)((() => ((e, a, t, s, n) => [{
            text: e.formatMessage(N.sc_link_activity_feed),
            location: {
              domain: y.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(N.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(N.sc_link_settings),
              location: {
                domain: y.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(N.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(N.sc_link_messages),
              location: {
                domain: y.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(N.sc_link_game_activation),
              location: {
                domain: y.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(N.sc_link_notifications),
            location: {
              domain: y.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...V,
              text: N.sc_link_notifications.defaultMessage,
              location: {
                domain: y.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(N.sc_link_crews),
            location: {
              domain: y.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(N.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(N.sc_link_my_friends),
              location: {
                domain: y.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(N.sc_link_import_friends),
              location: {
                domain: y.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(N.sc_link_find_friends),
              location: {
                domain: y.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, X(e), {
            text: e.formatMessage(N.sc_link_log_out),
            href: `${a.logout}?returnUrl=${n}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...V,
              text: N.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(k, a, H, W, L, window)), [k, a, H, W, L, Ne]), je = () => {
            ie(r + xe * oe < fe)
          }, we = () => {
            if (_e.current) {
              const {
                current: e
              } = _e, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), pe(a + e)
              } else pe(a)
            }
          };
          return (0, s.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            Ne.currentSite?.site === y.C.socialClub && (e = encodeURIComponent("/")), R(e)
          }), [_]), (0, s.useEffect)((() => {
            ke(H.characters[B] ?? [])
          }), [H, B]), (0, s.useEffect)((() => {
            H && Q(H)
          }), [H]), (0, s.useEffect)((() => {
            const e = H?.characters.gtao;
            if (null !== U && !e.length) return void J(!1);
            if (null == A || !e.length) return;
            const a = e?.[A] ?? e?.[0] ?? null;
            J(!!a?.platform && [a.platform, a.characterSlot])
          }), [A, H, U]), (0, s.useEffect)((() => {
            (async () => {
              if (!H?.id) return;
              const {
                count: e
              } = await (0, i.coreScApiFetch)("notification/count", {
                pingBearer: $
              });
              q(e > 0)
            })()
          }), [H]), (0, s.useEffect)((() => {
            je()
          }), [xe]), (0, s.useEffect)((() => {
            n(!0), u(p < 768), u(p < 768 || h < 649)
          }), [p, h]), (0, s.useEffect)((() => {
            let e = he.length - 1;
            e < 0 && (e = 0), le(e);
            const a = he.length > 0 ? he[A] ?? he[0] : null;
            if (!a) return;
            const t = null !== a ? v(a.platform, "large") : null;
            te(t), ee(a), he.length > 1 ? ce(!0) : ce(!1), g(he.length - 1 > 3)
          }), [A, he]), (0, s.useEffect)((() => {
            je()
          }), [oe, m, p, he]), (0, s.useEffect)((() => {
            we(), z()((() => {
              setTimeout(we, 0)
            }), 300)
          }), [p, h]), (0, s.useEffect)((() => {
            const e = P?.currentCharId ?? 0;
            e !== A && G(Math.max(0, Math.min(e, he.length - 1)))
          }), [he, P]), (0, f.jsxs)(f.Fragment, {
            children: [null !== Z && "gtao" === B && (0, f.jsxs)("div", {
              className: me.scProfile,
              ref: Se,
              tabIndex: -1,
              "aria-label": k.formatMessage(N.profile_selector_profile_card),
              children: [(0, f.jsx)(de, {
                s: me,
                character: Z,
                platformTag: ae
              }), !0 === ne && (0, f.jsxs)("div", {
                className: me.scCharacterSelector,
                children: [(0, f.jsx)("button", {
                  className: me.scCharacterSelectBtn,
                  "aria-hidden": !F,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    n(a), O({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, f.jsx)("span", {
                    children: (0, f.jsx)(d.FormattedMessage, {
                      ...N.profile_selector_switch_character
                    })
                  })
                }), !1 === m && (0, f.jsx)("div", {
                  className: me.scCharacterList,
                  "data-long-list": l,
                  "aria-hidden": t,
                  ref: c,
                  children: he.map((e => (0, f.jsx)(se, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ve
                  }, e.mugshotUrl)))
                }), !0 === m && (0, f.jsx)("div", {
                  className: me.scCharacterList,
                  "data-single-item": 2 === he.length,
                  "data-swiper-disabled": re,
                  "aria-hidden": t,
                  ref: ue,
                  children: (0, f.jsx)(ge, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      O({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: re,
                    disableSwiper: re,
                    children: he.filter(((e, a) => a !== A)).map((e => (0, s.createElement)(se, {
                      characterData: e,
                      setMobileCardWidth: ve,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, f.jsxs)("nav", {
              className: me.nav,
              "aria-hidden": !F,
              children: [(0, f.jsx)("button", {
                className: me.navHeader,
                type: "button",
                "data-opened": I,
                "data-nav-opened": F,
                tabIndex: I ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), I || E(!0)
                },
                "data-testid": "playerButton",
                children: (0, f.jsx)("span", {
                  children: H.nickname
                })
              }), (0, f.jsx)("div", {
                className: me.navWrap,
                "data-opened": I,
                "data-logged-in": "true",
                ref: _e,
                style: {
                  "--navWrap-max-height": `${be+w}px`
                },
                children: Ce.map(((e, a) => (0, s.createElement)(Y, {
                  ...e,
                  id: a,
                  activeSubNavId: C,
                  setActiveSubNavId: j,
                  setSubNavExtraHeight: M,
                  onNavigate: b,
                  key: e.text
                })))
              })]
            }), (0, f.jsx)("div", {
              className: me.scLanguageSelector,
              style: {
                visibility: F ? null : "hidden"
              },
              children: (0, f.jsx)(T, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: x,
                setLanguageSelectorOpened: S,
                location: _
              })
            })]
          })
        },
        fe = {
          menu: "rockstargames-sites-gta-gen9c0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-sites-gta-gen9c31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-sites-gta-gen9c5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-sites-gta-gen9b8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-sites-gta-gen9ff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-sites-gta-gen9b49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-sites-gta-gen9eff8c1d4bf675accdb7d952aba0174dc"
        },
        _e = ((0, d.withIntl)((e => {
          let {
            location: a,
            onNavigate: n
          } = e;
          const {
            windowHeight: c
          } = (0, i.useWindowResize)(), r = (0, d.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: g,
            setActiveSubNavId: m,
            navOpened: u,
            setScNavOpened: _,
            charListHidden: b,
            setCharListHidden: p
          } = D(), [h, k] = (0, s.useState)(!1), {
            navHidden: x = !1
          } = (0, i.useState)(), {
            loggedIn: v
          } = (0, o.useRockstarUser)(), {
            currentCharId: S,
            navOpen: C,
            setNavOpen: j,
            userData: w
          } = (0, o.useRockstarUserState)(), {
            track: y
          } = (0, o.useGtmTrack)(), [M, I] = (0, s.useState)(!1), T = (0, i.useReactiveVar)(o.scConfig), L = (0, s.useRef)(), [R, P] = (0, s.useState)(0), O = (0, s.createRef)(), [$, H] = (0, s.useState)(!1), [U, B] = (0, s.useState)(0), [A, W] = (0, s.useState)(!1), {
            mutateLSSettings: F,
            lsSettings: z
          } = (0, i.useRockstarWebLSSettings)(), V = (0, s.useCallback)((e => {
            p(e), L.current && !0 === e && (L.current.scrollTop = 0)
          }), [L]);
          return (0, s.useEffect)((() => {
            null !== S && z.currentCharId !== S && F({
              key: "currentCharId",
              value: S
            }), !1 === v ? F({
              key: "currentCharId",
              value: null
            }) : v && !w && y({
              event: "account_synced"
            })
          }), [S, v]), (0, s.useEffect)((() => {
            L.current && (!1 === b && !1 === M && (L.current.style.height = `${L.current.scrollHeight}px`), !0 === b && (L.current.style.height = null))
          }), [b, L, M]), (0, s.useEffect)((() => {
            const e = () => {
                j(!1), V(!0)
              },
              a = a => {
                const t = O?.current && a?.composedPath().includes(O.current);
                C && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }), [O]), (0, s.useEffect)((() => {
            j(!1), V(!0)
          }), [x]), (0, s.useEffect)((() => {
            if (O.current) {
              const {
                current: e
              } = O, a = window.getComputedStyle(e);
              P(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [O]), (0, s.useEffect)((() => {
            W(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            O.current && k(O?.current?.scrollHeight >= c)
          }), [O, c]), (0, s.useEffect)((() => {
            C || (m(-1), g(!1))
          }), [C]), (0, s.useEffect)((() => {
            l && (b || V(!0), u && (_(!1), m(-1)))
          }), [l]), (0, s.useEffect)((() => {
            u && (l && g(!1), b || V(!0))
          }), [u]), null === v ? null : (0, f.jsxs)(E.A, {
            enabled: !!C,
            removeScrollBar: !1,
            children: [(0, f.jsxs)("div", {
              className: [fe.menu, C ? fe.navOpen : ""].join(" "),
              "data-logged-in": v,
              "data-mac-browser": A,
              "data-scroll-mode": h,
              ref: O,
              "aria-hidden": !C,
              children: [(0, f.jsx)("button", {
                className: fe.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  B(a)
                },
                onTouchMove: e => {
                  if (0 === U) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(U - a) > 1 && (B(0), j(!1))
                },
                children: (0, f.jsx)("img", {
                  className: fe.dragHandle,
                  src: t(35902),
                  alt: r.formatMessage(N.sc_menu_drag_handle)
                })
              }), v ? (0, f.jsx)(ue, {
                sc: T,
                charListHidden: b,
                hideCharacterList: V,
                refCharacterListDesktop: L,
                menuPadding: R,
                longCharList: M,
                setLongCharList: I,
                isMobileMode: $,
                setIsMobileMode: H,
                location: a,
                onNavigate: n
              }) : (0, f.jsx)(J, {
                sc: T,
                navOpen: C,
                location: a,
                onNavigate: n
              })]
            }), (0, f.jsx)("div", {
              className: [fe.scOverlay, C ? fe.navOpen : ""].join(" "),
              "data-logged-in": v
            })]
          })
        }), x), "rockstargames-sites-gta-gen9ee811a1fa8b17eb47afb419dd08ffb03"),
        be = t(5931),
        pe = t(32810),
        he = ((0, d.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, d.useIntl)(),
            {
              data: n
            } = (0, o.useRockstarUser)(),
            {
              charactersNeeded: c,
              currentCharId: r,
              navOpen: i,
              setNavOpen: l
            } = (0, o.useRockstarUserState)(),
            {
              track: g
            } = (0, o.useGtmTrack)(),
            [m, u] = (0, s.useState)(null),
            [_, b] = (0, s.useState)(!1),
            [p, h] = (0, s.useState)(null),
            [k, x] = (0, s.useState)(!1),
            [S, C] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            C(n.characters[c] ?? [])
          }), [n, c]);
          const j = (0, s.useCallback)((e => {
            e.stopPropagation(), l(!i), 1 == !i && a(null), g({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: i ? "close" : "open"
            })
          }), [i]);
          return (0, s.useEffect)((() => {
            const e = n?.id ?? !1,
              a = e ? (S?.[r]?.mugshotUrl ?? n?.avatar) || be : pe,
              t = v(S?.[r]?.platform, "small") ?? null;
            h(t), u(a), b(e), x(!!S?.[r]?.mugshotUrl)
          }), [n, S, r, be, pe]), m ? (0, f.jsxs)("button", {
            className: _e,
            "data-img-set": k,
            "aria-label": t.formatMessage(i ? N.sc_menu_close : N.sc_menu_open),
            "aria-expanded": i,
            type: "button",
            onClick: j,
            "data-testid": "avatarMenuButton",
            "data-logged-in": Boolean(_),
            children: [(0, f.jsx)("img", {
              className: "rockstargames-sites-gta-gen9a917b58ca28b68550a1aa5d99c7eb998",
              src: m || "",
              onError: () => {
                u(be)
              },
              alt: n?.nickname || ""
            }), _ && null !== p && (0, f.jsx)("img", {
              className: "rockstargames-sites-gta-gen9c06123ceae7ca4759ec8b1a5197823db",
              src: p.src,
              alt: p.alt
            }), _ && (0, f.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-gta-gen9c4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": S?.[r]?.platform ?? null
            })]
          }) : null
        }), x), e => {
          let {
            s: a,
            content: t,
            refSuccess: n,
            successSlide: c,
            characterList: r,
            linkAccountUrl: i,
            linkMoreAccounts: o,
            linkAccountBtn: l
          } = e;
          const d = (0, s.createRef)(),
            g = (0, s.createRef)(),
            m = (0, s.createRef)(),
            [u, b] = (0, s.useState)(),
            [p, x] = (0, s.useState)(!1),
            [v, S] = (0, s.useState)(),
            [N, C] = (0, s.useState)(!1),
            [y, M] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            const e = () => {
              d?.current && x(d?.current?.scrollWidth > d?.current?.offsetWidth)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [d]), (0, s.useEffect)((() => {
            b({
              nextEl: g?.current,
              prevEl: m?.current
            })
          }), [m?.current, g?.current]), (0, f.jsxs)("div", {
            className: [a.contentContainer, a[c], a.successSlide].join(" "),
            "data-type": "long",
            ref: n,
            children: [(0, f.jsxs)("div", {
              className: a.topContent,
              children: [(0, f.jsxs)("div", {
                className: a.alert,
                children: [(0, f.jsx)("div", {
                  className: a.successAlert
                }), (0, f.jsxs)("div", {
                  className: a.alertText,
                  children: [(0, f.jsx)("h3", {
                    children: t.successScreen.headline
                  }), (0, f.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: t.successScreen.body
                    }
                  })]
                })]
              }), (0, f.jsxs)("div", {
                className: a.swiperWrap,
                children: [(0, f.jsx)("div", {
                  className: a.swiperContainer,
                  ref: d,
                  children: (0, f.jsxs)(h.RC, {
                    releaseOnEdges: !0,
                    touchReleaseOnEdges: !0,
                    loop: !1,
                    grabCursor: p,
                    slidesPerView: "auto",
                    speed: 700,
                    slidesOffsetAfter: 100,
                    navigation: u,
                    modules: [k.Vx, k.Jq],
                    onInit: e => {
                      S(e)
                    },
                    onSlideChange: e => {
                      C(e?.isEnd), M(e?.isBeginning)
                    },
                    children: [r.map((e => (0, f.jsx)(h.qr, {
                      tabIndex: "0",
                      children: (0, s.createElement)(j, {
                        characterData: e,
                        key: e.mugshotUrl
                      })
                    }, e.mugshotUrl))), (0, f.jsx)(h.qr, {
                      children: (0, f.jsx)(w.A, {
                        className: [a.linkMore, r.length > 0 ? a.withIcon : ""].join(" "),
                        to: i,
                        onClick: o,
                        children: (0, f.jsx)("div", {
                          className: a.btnText,
                          children: l
                        })
                      })
                    }, "linkMore")]
                  })
                }), (0, f.jsx)("button", {
                  className: a.swiperBtnPrev,
                  "aria-label": "Previous Character",
                  type: "button",
                  ref: m,
                  onClick: () => {
                    v?.slidePrev()
                  },
                  disabled: y,
                  "data-hidden": !p
                }), (0, f.jsx)("button", {
                  className: a.swiperBtnNext,
                  "aria-label": "Next Character",
                  type: "button",
                  ref: g,
                  onClick: () => {
                    v?.slideNext()
                  },
                  disabled: N,
                  "data-hidden": !p
                })]
              })]
            }), (0, f.jsx)("div", {
              className: a.legal,
              children: (0, f.jsx)(_, {
                legalText: t.legalText
              })
            })]
          })
        });
      var ke = t(3453);
      const xe = e => {
          let {
            s: a,
            content: t,
            unlinkedSlide: s,
            refUnlinked: n,
            linkConsoleText: c,
            platformLogin: r,
            giftId: i
          } = e;
          return (0, f.jsxs)("div", {
            className: [a.contentContainer, a[s], a.unlinkedSlide, a.textContent].join(" "),
            ref: n,
            children: [(0, f.jsx)("div", {
              className: a.textContent,
              children: (0, f.jsxs)("div", {
                className: a.platformButtonContainer,
                children: [(0, f.jsx)("div", {
                  className: a.errorAlert
                }), (0, f.jsx)("h3", {
                  children: t.unlinkedScreen.headline
                }), (0, f.jsx)(ke.A, {
                  variant: "secondary",
                  buttonText: c,
                  platformsAndLinks: [{
                    href: r("np"),
                    key: "ps",
                    platform: "ps",
                    translated: !0
                  }, {
                    href: r("xbox"),
                    key: "xbox",
                    platform: "xbox",
                    translated: !0
                  }],
                  trackingType: "link_account",
                  trackingParent: "WOC",
                  target: "_self",
                  trackingOId: i,
                  children: (0, f.jsx)("div", {
                    className: a.alert,
                    children: (0, f.jsx)("div", {
                      className: a.alertText,
                      children: (0, f.jsx)("div", {
                        dangerouslySetInnerHTML: {
                          __html: t.unlinkedScreen.body
                        }
                      })
                    })
                  })
                })]
              })
            }), (0, f.jsx)("div", {
              className: a.legal,
              children: (0, f.jsx)(_, {
                legalText: t.legalText
              })
            })]
          })
        },
        ve = e => {
          let {
            s: a,
            errorSlide: t,
            content: s,
            refError: n
          } = e;
          return (0, f.jsxs)("div", {
            className: [a.contentContainer, a[t], a.errorSlide, a.textContent].join(" "),
            ref: n,
            children: [(0, f.jsxs)("div", {
              className: a.textContent,
              children: [(0, f.jsxs)("div", {
                className: a.alert,
                children: [(0, f.jsx)("div", {
                  className: a.errorAlert
                }), (0, f.jsx)("div", {
                  className: a.alertText,
                  children: (0, f.jsx)("h3", {
                    children: s.errorScreen.headline
                  })
                })]
              }), (0, f.jsx)(u.A, {
                text: s.errorScreen.btnText,
                onClick: () => window.location.reload()
              })]
            }), (0, f.jsx)("div", {
              className: a.legal,
              children: (0, f.jsx)(_, {
                legalText: s.legalText
              })
            })]
          })
        };
      var Se = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e.disabled = "disabled", e
      }(Se || {});
      const Ne = {
          pillBtn: "rockstargames-sites-gta-gen9d00777e4f5cd743e631c6c55037e895d",
          selected: "rockstargames-sites-gta-gen9b58430ad013dcff6fef7da7166cc691f",
          interestTrackerWrapper: "rockstargames-sites-gta-gen9d2b8c4d79af33709f68b37001ab7be39",
          interestTracker: "rockstargames-sites-gta-gen9db2a4f7b1cfeb4aeca1410a7cd445b8f",
          loader: "rockstargames-sites-gta-gen9d8c578c46f36662f7652cc76eac7da9b",
          moduleImage: "rockstargames-sites-gta-gen9befb0ce557a2dd74f4835661fb577844",
          mobileImgContainer: "rockstargames-sites-gta-gen9c0fc20e5997ec0175e466407b77f13ea",
          moduleImageMobile: "rockstargames-sites-gta-gen9be574bc57f2a974b9acfab41bf011e87",
          slideContainer: "rockstargames-sites-gta-gen9ebe07d21ea2d2a2e3c9c8abd04d3eb7c",
          contentContainer: "rockstargames-sites-gta-gen9ffc948e8cbe4f2137ab4e2772eb1195d",
          landingSlide: "rockstargames-sites-gta-gen9c25099ec278fe51b5b3c1874dbf7f177",
          textContent: "rockstargames-sites-gta-gen9a8602b1bf8cb8b652a23bdd9757d227e",
          successSlide: "rockstargames-sites-gta-gen9ba550c3a58739708ed4e9ba1d5cc9284",
          unlinkedSlide: "rockstargames-sites-gta-gen9fed30d7e2c15a2e8588bfcb1947d415d",
          platformButtonContainer: "rockstargames-sites-gta-gen9cac0eb7158ec985ab3ee6372a2bd7672",
          errorSlide: "rockstargames-sites-gta-gen9c55d286bddb7bc024ba481baa3f25282",
          btnContainer: "rockstargames-sites-gta-gen9f4b714d7985247039d190db0652b8ceb",
          topContent: "rockstargames-sites-gta-gen9de05099174e82770aeae6cd301329294",
          bottomContent: "rockstargames-sites-gta-gen9a01ac7c10f297d8150a9b802bedb72af",
          legal: "rockstargames-sites-gta-gen9c2720597abb7fa1a9af5cd99d8c40a54",
          faq: "rockstargames-sites-gta-gen9f56f546a21ace49c216e9a67228efb66",
          faqLink: "rockstargames-sites-gta-gen9f11c7041488926e7c7f25fc224f98947",
          badge: "rockstargames-sites-gta-gen9bcac1dcfa5b088eab1e65fc68e8c85a3",
          hidden: "rockstargames-sites-gta-gen9de0d2e1871164ef762659167bbd6529a",
          visible: "rockstargames-sites-gta-gen9b344d81cd5eafc49a6b22f62e6e7f76f",
          onScreen: "rockstargames-sites-gta-gen9ae620b51e3ff54bcb035a20296ee980c",
          offScreen: "rockstargames-sites-gta-gen9c5da19bfed6924ef3a54c7b6950850dd",
          alert: "rockstargames-sites-gta-gen9d18a7942f6ffe1c595090c27db4ed3cf",
          alertText: "rockstargames-sites-gta-gen9cbddf3c3597e3da9c2cb9388de7ea8f8",
          errorAlert: "rockstargames-sites-gta-gen9d3d7cc42ef277206a733e4cb57942870",
          successAlert: "rockstargames-sites-gta-gen9d0d2bcc799b1f77be3797b44c90a217d",
          linkMore: "rockstargames-sites-gta-gen9e3f0330500235638f50be4a36b2e498a",
          withIcon: "rockstargames-sites-gta-gen9b1c731df00d3a0b945adcfb95b5e026e",
          btnText: "rockstargames-sites-gta-gen9ea24dcc72092b2111a1bc9b420d3595e",
          swiperContainer: "rockstargames-sites-gta-gen9ba3a5dd56ead99e725ea9031a0105852",
          swiperWrap: "rockstargames-sites-gta-gen9ce299e602293eb072f2aa29f92ade94d",
          swiperButton: "rockstargames-sites-gta-gen9becae27bc56d3d7ce5e33da63b298355",
          swiperBtnPrev: "rockstargames-sites-gta-gen9c2a3afc2e5783cecd9f1096c3cfdf61b",
          swiperBtnNext: "rockstargames-sites-gta-gen9ee20a3331aa9cb5857d0c4d7a18b4aaf",
          spinner: "rockstargames-sites-gta-gen9c596ce72795db40bd64a752fcff020f2"
        },
        {
          host: Ce,
          login: je,
          authHost: we,
          clientId: ye
        } = (0, i.getScConfigForOrigin)(),
        Me = e => {
          let {
            giftId: a,
            location: t = "gtaplus_site",
            introScreen: u,
            errorScreen: _,
            unlinkedScreen: h,
            successScreen: k,
            jumpLinkId: x,
            legalText: v
          } = e;
          const S = (0, i.useLocale)(),
            N = {
              errorScreen: {
                btnText: _?.errorButton || "",
                headline: _?.errorHeadline || ""
              },
              introScreen: {
                body: u?.introContent || "",
                btnText: {
                  loggedIn: u?.btnTextLoggedIn || "",
                  loggedOut: u?.btnTextLoggedOut || ""
                },
                headline: u?.introHeadline || "",
                image: {
                  alt: u?.image?.alt || u?.introHeadline || "",
                  sources: {
                    desktop: (0, m.useGetCdnSource)(u?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, m.useGetCdnSource)(u?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: u?.tag || ""
              },
              legalText: v,
              successScreen: {
                body: k?.successContent || "",
                headline: k?.successHeadline || ""
              },
              unlinkedScreen: {
                body: h?.unlinkedContent || "",
                btnText: h?.unlinkedButtonText || "",
                headline: h?.unlinkedHeadline || ""
              }
            },
            [C] = (0, n.useSearchParams)(),
            j = (0, i.useRockstarToken)(),
            {
              data: w,
              loggedIn: y
            } = (0, o.useRockstarUser)(),
            M = (0, i.useRockstarTokenPing)(),
            I = `https://${Ce}.rockstargames.com/settings/linkedaccounts`,
            T = (0, i.toScLocaleString)(S),
            E = (0, d.useIntl)(),
            {
              track: L
            } = (0, o.useGtmTrack)(),
            {
              ref: R,
              inView: P
            } = (0, r.useInView)({
              threshold: .6
            }),
            O = 1280,
            $ = (0, s.createRef)(),
            H = (0, s.createRef)(),
            U = (0, s.createRef)(),
            B = (0, s.createRef)(),
            A = (0, s.createRef)(),
            [W, D] = (0, s.useState)(),
            [F, z] = (0, s.useState)([]),
            [V, X] = (0, s.useState)(!1),
            [G, q] = (0, s.useState)(),
            [Y, J] = (0, s.useState)("hidden"),
            [K, Q] = (0, s.useState)("hidden"),
            [Z, ee] = (0, s.useState)("hidden"),
            [ae, te] = (0, s.useState)("hidden"),
            [se, ne] = (0, s.useState)(!1),
            [ce, re] = (0, s.useState)(Se.disabled),
            [ie, oe] = (0, s.useState)(Se.landing),
            [le, de] = (0, s.useState)(0),
            [ge, me] = (0, s.useState)(0),
            [ue, fe] = (0, s.useState)(0),
            [_e, be] = (0, s.useState)(0),
            [pe, ke] = (0, s.useState)(0),
            [Me, Ie] = (0, s.useState)(!1),
            [Te, Ee] = (0, s.useState)(N.introScreen.image.sources.mobile || b),
            [Le, Re] = (0, s.useState)(!1),
            Pe = `${document.location.pathname}${document.location.search}#${x}`,
            Oe = (0, i.usePrevious)(G),
            $e = (0, i.usePrevious)(y),
            He = () => {
              $.current && me($?.current?.scrollHeight), H.current && fe(H?.current?.scrollHeight), U.current && be(U?.current?.scrollHeight), B.current && ke(B?.current?.scrollHeight)
            },
            Ue = (e, a) => {
              e === Se.landing && (e => {
                oe(Se.landing), e && de(ge), Q("onScreen"), J("hidden"), te("hidden"), ee("hidden")
              })(a), e === Se.success && (e => {
                oe(Se.success), e && de(ue), Q("offScreen"), J("visible"), setTimeout((() => {
                  Q("hidden"), te("hidden")
                }), 300), setTimeout((() => {
                  J("onScreen")
                }), 100)
              })(a), e === Se.error && (e => {
                oe(Se.error), e && de(_e), Q("offScreen"), setTimeout((() => {
                  Q("hidden")
                }), 300), setTimeout((() => {
                  te("onScreen")
                }), 100)
              })(a), e === Se.unlinked && (e => {
                oe(Se.unlinked), e && de(pe), Q("offScreen"), ee("visible"), setTimeout((() => {
                  Q("hidden"), te("hidden")
                }), 300), setTimeout((() => {
                  ee("onScreen")
                }), 100)
              })(a)
            },
            Be = () => {
              "disabled" === ce ? (async () => {
                const e = {
                  giftUId: a,
                  location: t,
                  utmCampaign: C.get("utm_campaign"),
                  utmContent: C.get("utm_content"),
                  utmMedium: C.get("utm_medium"),
                  utmSource: C.get("utm_source")
                };
                if (F.length > 0) {
                  const {
                    status: a
                  } = await (0, i.coreScApiFetch)("marketing/engagement/claim/create", {
                    fetchOptions: {
                      method: "POST"
                    },
                    pingBearer: M,
                    query: e
                  }) ?? [];
                  Ue(a ? Se.success : Se.error, !1)
                } else Ue(W ? Se.unlinked : Se.landing, !1)
              })() : "success" === ce ? Ue(Se.success, !1) : "error" === ce ? Ue(Se.error, !1) : "unlinked" === ce && Ue(Se.unlinked, !1)
            };
          return (0, s.useEffect)((() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== t ? Ee(N.introScreen.image.sources.mobile || b) : Ee(N.introScreen.image.sources.desktop || b)
              },
              a = () => {
                He(), window.innerWidth <= O && !V && (X(!0), Ue(ie, !0)), window.innerWidth > O && V && X(!1), e()
              };
            return X(window.innerWidth <= O), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }), [ie, V, $, B, U, H]), (0, s.useEffect)((() => {
            ie === Se.success && le !== ue ? de(ue) : ie === Se.error && le !== _e ? de(_e) : ie === Se.landing && le !== ge ? de(ge) : ie === Se.unlinked && le !== pe && de(pe)
          }), [_e, ue, le, pe, ge]), (0, s.useEffect)((() => {
            Le || (Re(!0), He(), Me && ie === Se.success && de(H?.current?.scrollHeight || 0))
          }), [$, B, U, H]), (0, s.useEffect)((() => {
            const e = w?.characters?.gtao;
            z(e || [])
          }), [w]), (0, s.useEffect)((() => {
            "boolean" != typeof Oe && "boolean" != typeof $e || G && y && (async () => {
              const {
                result: e
              } = await (0, i.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: M,
                query: {
                  giftUId: a
                }
              });
              D(e), q(!1)
            })()
          }), [G, y]), (0, s.useEffect)((() => {
            "boolean" == typeof y ? y ? q(!0) : (q(!1), Q("onScreen")) : q(!0)
          }), [y]), (0, s.useEffect)((() => {
            W && F.length > 0 ? (Ie(!0), Ue(Se.success, !0)) : W && 0 === F.length ? Ue(Se.unlinked, !0) : "boolean" != typeof W && W || Ue(Se.landing, !0)
          }), [W]), (0, s.useEffect)((() => {
            if (P && !se) {
              if (null === y) return;
              L({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: y ? "signed in" : "signed out"
              }), ne(!0)
            }
          }), [P, y]), (0, s.useEffect)((() => {
            "onScreen" === Y && L({
              element_placement: "WOC",
              event: "alert_update",
              o_id: a,
              text: "Almost there!"
            })
          }), [Y]), (0, s.useEffect)((() => {
            "onScreen" === Z && L({
              element_placement: "WOC",
              event: "alert_error",
              o_id: a,
              text: "No Qualifying Character Found"
            })
          }), [Z]), (0, s.useEffect)((() => {
            "onScreen" === ae && L({
              element_placement: "event_label",
              event: "alert_error",
              o_id: a,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }), [ae]), (0, s.useEffect)((() => {
            Be()
          }), [ce]), (0, f.jsxs)(f.Fragment, {
            children: [!1, (0, f.jsx)("div", {
              className: Ne.interestTrackerWrapper,
              children: (0, f.jsxs)(c.motion.div, {
                className: [Ne.interestTracker, G && Ne.loader].join(" "),
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  margin: "-20%",
                  once: !0
                },
                transition: {
                  duration: .4,
                  ease: "easeIn"
                },
                "data-context": "interestTracker",
                ref: R,
                id: x || "",
                children: [(0, f.jsx)("div", {
                  className: Ne.moduleImage,
                  style: {
                    "--engagement-image": `url(${Te})`
                  }
                }), (0, f.jsx)("div", {
                  className: [Ne.slideContainer, G ? Ne.loader : ""].join(" "),
                  ref: A,
                  "data-dev-mode": "disabled",
                  style: {
                    "--engagement-height": 0 === le ? "200%" : `${le}px`,
                    height: 0 !== le && V ? `${le}px` : "auto"
                  },
                  children: G ? (0, f.jsx)("div", {
                    className: Ne.spinner,
                    children: (0, f.jsx)(l.A, {
                      type: "SPINNING"
                    })
                  }) : (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(p, {
                      s: Ne,
                      content: N,
                      refLanding: $,
                      loggedIn: y,
                      addClaim: async () => {
                        L({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: a,
                          text: "claim now",
                          section_layout: y ? "signed in" : "signed out"
                        }), Be()
                      },
                      signin: () => {
                        const e = `${je}?returnUrl=${encodeURIComponent(Pe)}&lang=${T}`;
                        L({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: e,
                          text: "claim now",
                          section_layout: y ? "signed in" : "signed out"
                        }), window.location.href = e
                      },
                      landingSlide: K
                    }), (0, f.jsx)(he, {
                      s: Ne,
                      content: N,
                      refSuccess: H,
                      successSlide: Y,
                      characterList: F,
                      linkAccountUrl: I,
                      linkMoreAccounts: () => {
                        L({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: I,
                          text: g.oY.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: (0, f.jsx)(d.FormattedMessage, {
                        ...g.oY.engagement_link_account
                      })
                    }), (0, f.jsx)(xe, {
                      s: Ne,
                      content: N,
                      unlinkedSlide: Z,
                      refUnlinked: B,
                      linkConsoleText: E.formatMessage(g.oY.engagement_link_console_account),
                      platformLogin: e => `https://${we}.rockstargames.com/tpa/${e}/link/?cid=${ye}&lang=${T}&returnUrl=${encodeURIComponent(Pe)}&accessToken=${j}`,
                      giftId: a
                    }), (0, f.jsx)(ve, {
                      s: Ne,
                      errorSlide: ae,
                      content: N,
                      refError: U
                    })]
                  })
                })]
              })
            })]
          })
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