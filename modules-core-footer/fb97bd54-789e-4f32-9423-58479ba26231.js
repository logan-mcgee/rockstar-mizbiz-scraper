try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fb97bd54-789e-4f32-9423-58479ba26231", e._sentryDebugIdIdentifier = "sentry-dbid-fb97bd54-789e-4f32-9423-58479ba26231")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [8267], {
    88986(e, a, t) {
      t.r(a), t.d(a, {
        CharacterProfile: () => K,
        LanguageSelector: () => ne,
        Menu: () => be,
        MenuButton: () => ve
      });
      var s = {};
      t.r(s), t.d(s, {
        scCharacterBtnIcon: () => V,
        scCharacterBtnText: () => q,
        scCharacterList: () => G,
        scCharacterSelectBtn: () => X,
        scCharacterSelector: () => Z
      });
      var o = t(39793),
        n = t(4637),
        i = t(42909),
        l = t(66760),
        r = t(82199),
        c = t(13331),
        _ = t(85997);
      const d = (0, i.defineMessages)({
          sc_link_account: {
            id: "sc_link_account",
            description: "A button that opens the account drop-down.",
            defaultMessage: "Account"
          },
          sc_link_view_my_profile: {
            id: "sc_link_view_my_profile",
            description: "A link to the social club profile page.",
            defaultMessage: "View My Profile"
          },
          sc_link_game_activation: {
            id: "sc_link_game_activation",
            description: "A link to the social club game activation page.",
            defaultMessage: "Game Activation"
          },
          sc_link_notifications: {
            id: "sc_link_notifications",
            description: "A link to the social club notifications page.",
            defaultMessage: "Notifications"
          },
          sc_link_crews: {
            id: "sc_link_crews",
            description: "A link to the social club crews page.",
            defaultMessage: "Crews"
          },
          sc_link_friends: {
            id: "sc_link_friends",
            description: "A button that openes the friends drop-down.",
            defaultMessage: "Friends"
          },
          sc_link_my_friends: {
            id: "sc_link_my_friends",
            description: "A link to the social club friends page.",
            defaultMessage: "My Friends"
          },
          sc_link_import_friends: {
            id: "sc_link_import_friends",
            description: "A link to the social club import friends page.",
            defaultMessage: "Import Friends"
          },
          sc_link_find_friends: {
            id: "sc_link_find_friends",
            description: "A link to the social club find friends page.",
            defaultMessage: "Find Friends"
          },
          www_link_manage_account: {
            id: "www_link_manage_account",
            description: "A link to the rsgweb account settings page.",
            defaultMessage: "Manage Account"
          },
          sc_link_help: {
            id: "sc_link_help",
            description: "A link to the social club find help page.",
            defaultMessage: "Help"
          },
          sc_link_support: {
            id: "sc_link_support",
            description: "A link to the social club find support page.",
            defaultMessage: "Support"
          },
          sc_link_legal: {
            id: "sc_link_legal",
            description: "A link to the social club find legal page.",
            defaultMessage: "Legal"
          },
          sc_link_privacy_policy: {
            id: "sc_link_privacy_policy",
            description: "A link to the social club find privacy policy page.",
            defaultMessage: "Privacy Policy"
          },
          sc_link_cookies_policy: {
            id: "sc_link_cookies_policy",
            description: "A link to the social club find cookies policy page.",
            defaultMessage: "Cookies Policy"
          },
          sc_link_cookies_settings: {
            id: "sc_link_cookies_settings",
            description: "A link to the social club find cookies settings page.",
            defaultMessage: "Cookies Settings"
          },
          sc_link_do_not_sell_my_information: {
            id: "sc_link_do_not_sell_my_information",
            description: "A link to the social club find do not sell my information page.",
            defaultMessage: "Do Not Sell or Share My Personal Information"
          },
          sc_link_log_out: {
            id: "sc_link_log_out",
            description: "A link to log out of social club.",
            defaultMessage: "Log Out"
          },
          sc_link_sign_in: {
            id: "sc_link_sign_in",
            description: "A link to log in to social club.",
            defaultMessage: "Sign In"
          },
          sc_link_join_social_club: {
            id: "sc_link_join_social_club",
            description: "A link to join social club.",
            defaultMessage: "Sign Up"
          },
          profile_selector_switch_character: {
            id: "profile_selector_switch_character",
            description: "A top level button that opens up the list that shows what characters you have to choose from.",
            defaultMessage: "Switch Character"
          },
          profile_selector_profile_card: {
            id: "profile_selector_profile_card",
            description: "An aria-label description of the card that displays the users mugshot, username and stats.",
            defaultMessage: "Profile Card"
          },
          profile_selector_mugshot: {
            id: "profile_selector_mugshot",
            description: "The alt attribute for the player characters mugshot.",
            defaultMessage: "{userName} mugshot"
          },
          profile_silhouette_mugshot: {
            id: "profile_silhouette_mugshot",
            description: "The alt attribute for the silhouette characters mugshot.",
            defaultMessage: "Silhouette mugshot"
          },
          profile_selector_rp_icon: {
            id: "profile_selector_rp_icon",
            description: "The alt attribute for the players RP score.",
            defaultMessage: "RP Category"
          },
          sc_menu_drag_handle: {
            id: "sc_menu_drag_handle",
            description: "The alt attribute for icon for the drag handle image.",
            defaultMessage: "Drag Menu Handle"
          },
          sc_menu_open: {
            id: "sc_menu_open",
            description: "The open aria-label for button that allow users to open/close the menu.",
            defaultMessage: "Open player menu"
          },
          sc_menu_close: {
            id: "sc_menu_close",
            description: "The close aria-label for button that allow users to open/close the menu.",
            defaultMessage: "Close player menu"
          },
          language_selector_default: {
            id: "language_selector_default",
            description: "The default option for the language selector.",
            defaultMessage: "Select a Language"
          },
          nofications_new: {
            id: "nofications_new",
            description: "Aria label for new notifications icon.",
            defaultMessage: "New notifications"
          }
        }),
        u = (0, c.makeVar)(!1),
        g = e => u(e),
        p = (0, c.makeVar)(-1),
        m = e => p(e),
        f = (0, c.makeVar)(-1),
        h = e => f(e),
        k = (0, c.makeVar)(!0),
        b = e => k(e),
        v = (0, c.makeVar)(!0),
        w = e => v(e),
        y = () => {
          const e = (0, c.useReactiveVar)(u),
            a = (0, c.useReactiveVar)(p),
            t = (0, c.useReactiveVar)(f),
            s = (0, c.useReactiveVar)(k),
            o = (0, c.useReactiveVar)(v);
          return (0, n.useEffect)(() => {
            o || (e && g(!1), s && (b(!1), m(-1)))
          }, [o]), (0, n.useEffect)(() => {
            !e && o && (s || b(!0))
          }, [e, o]), (0, n.useMemo)(() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: g,
            activeSubNavId: a,
            setActiveSubNavId: m,
            subNavExtraHeight: t,
            setSubNavExtraHeight: h,
            navOpened: s,
            setAccountNavOpened: b,
            charListHidden: o,
            setCharListHidden: w
          }), [e, a, t, s, o])
        };
      var x = t(90067);
      var C = t(4921);
      var j = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const S = ({
        tagSize: e,
        platform: a,
        className: t = ""
      }) => {
        const {
          src: s,
          alt: n
        } = ((e, a) => {
          const t = "small" === a;
          switch (e) {
            case "pc":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case "pcalt":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case "ps4":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case "ps5":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case "xboxone":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case "xboxsx":
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
              };
            case "ps":
            case "np":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
              };
            case "xbl":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        })(a, e);
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)("img", {
            className: (0, C.A)("rockstargames-modules-core-footerb0ff0045ed0326a46ca1e0867d2050c1", t),
            "data-testid": "platform-tag",
            "data-platform": a,
            "data-tag-size": e,
            src: s,
            alt: "",
            "aria-hidden": !0
          }), (0, o.jsx)(x.s6, {
            children: n
          })]
        })
      };
      var N = t(27859);
      const M = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b482619a" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        I = (0, n.forwardRef)(function({
          rank: e,
          size: a = "large",
          className: t,
          alt: s,
          testId: n,
          ...i
        }, l) {
          const r = M(e),
            c = (0, N.v6)(i, {
              className: (0, C.A)("rockstargames-modules-core-footerf54750ef62f8600000c94f0caba85986", t),
              "data-testid": n
            });
          return (0, o.jsxs)("div", {
            "data-size": a,
            ref: l,
            ...c,
            children: [(0, o.jsx)("svg", {
              role: "svg",
              "aria-label": s,
              className: "rockstargames-modules-core-footera3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": M(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, o.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: r
              })
            }), (0, o.jsx)("span", {
              className: "rockstargames-modules-core-footerd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        }),
        E = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f368af6d2c11a28d31d2818e72150f5b.jpg";
      var P = t(46966),
        L = "var(--ay40go1)";
      const A = "ProfileCard:characterName",
        z = "ProfileCard:avatar",
        T = "ProfileCard:bankValue",
        D = "ProfileCard:cashValue",
        R = ({
          character: e
        }) => {
          const {
            data: a
          } = (0, r.useRockstarUser)(), {
            track: s
          } = (0, r.useGtmTrack)(), l = (0, i.useIntl)(), [c, _] = (0, n.useState)([]), [u, g] = (0, n.useState)(null), [p, m] = (0, n.useState)(null), [f, h] = (0, n.useState)(!1), [k, b] = (0, n.useState)(-1), [v, w] = (0, n.useState)([]), [y, x] = (0, n.useState)(0), C = t(5931), {
            platform: N
          } = e, [M, R] = (0, n.useState)("0"), [$, F] = (0, n.useState)("0"), H = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), B = () => {
            U((0, o.jsx)("img", {
              src: C,
              alt: l.formatMessage(d.profile_selector_mugshot, {
                userName: a.nickname
              })
            }))
          }, [O, U] = (0, n.useState)((0, o.jsx)("img", {
            className: "ay40go3",
            src: e.mugshotUrl,
            alt: l.formatMessage(d.profile_selector_mugshot, {
              userName: a.nickname
            }),
            onError: B,
            "data-testid": z
          }));
          (0, n.useEffect)(() => {
            _(a.crews ?? [])
          }, [a.crews]), (0, n.useEffect)(() => {
            U((0, o.jsx)("img", {
              src: e.mugshotUrl,
              alt: a.nickname,
              onError: B,
              "data-testid": z
            })), R(H(e.stats.overview.bank.value)), F(H(e.stats.overview.cash.value)), x(parseInt(e.stats.overview.rank.value))
          }, [e, a.nickname]), (0, n.useEffect)(() => {
            c && c.forEach(e => {
              !0 === e.isPrimary && (g(e.crewTag), m(e.crewColour), b(e.rankOrder), h(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && h(!0))
            })
          }, [c]), (0, n.useEffect)(() => {
            const e = [];
            if (!f && k > -1)
              for (let a = 5; a > k; a -= 1) e.push((0, o.jsx)("div", {
                className: "ay40goc",
                style: {
                  backgroundColor: null !== p ? p : ""
                }
              }, `crewrankbar-${a}`));
            w(e)
          }, [k, f, p]);
          const W = e => {
            e.stopPropagation(), s({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, o.jsxs)("div", {
            className: "ay40go0",
            onClick: W,
            onKeyUp: W,
            role: "button",
            tabIndex: -1,
            children: [(0, o.jsxs)("div", {
              className: "ay40go2",
              style: (0, P.DI)({
                [L]: `url(${E})`
              }),
              children: [O, (0, o.jsx)("div", {
                className: "ay40go4",
                "data-platform": N,
                children: (0, o.jsx)(S, {
                  className: "ay40go5",
                  tagSize: j.large,
                  platform: N
                })
              })]
            }), (0, o.jsxs)("div", {
              className: "ay40go6",
              children: [(0, o.jsx)("div", {
                className: "ay40go7",
                children: (0, o.jsxs)("div", {
                  className: "ay40go8",
                  children: [(0, o.jsx)("span", {
                    className: "ay40go9",
                    "data-testid": A,
                    children: e.platformUsername
                  }), u && (0, o.jsxs)("span", {
                    className: "ay40goa",
                    "data-arrow-tag": f,
                    children: [u, !f && (0, o.jsx)("div", {
                      className: "ay40gob",
                      children: v
                    })]
                  })]
                })
              }), (0, o.jsxs)("div", {
                className: "ay40god",
                children: [(0, o.jsx)(I, {
                  className: "ay40goe",
                  rank: y
                }), (0, o.jsxs)("div", {
                  className: "ay40gof",
                  children: [(0, o.jsxs)("span", {
                    className: "ay40gog",
                    "data-testid": D,
                    children: ["$", $]
                  }), (0, o.jsxs)("span", {
                    className: "ay40goh",
                    "data-testid": T,
                    children: ["$", M]
                  })]
                })]
              })]
            })]
          })
        };
      var $ = "var(--hcgjf92)";
      const F = "CharacterButton:characterName",
        H = "CharacterButton:avatar",
        B = ({
          characterData: e,
          setMobileCardWidth: a,
          tabIndex: s,
          onClick: l = () => {}
        }) => {
          const c = (0, i.useIntl)(),
            {
              currentCharId: _,
              setCurrentCharId: u
            } = (0, r.useRockstarUserState)(),
            g = (0, n.createRef)(),
            {
              platform: p,
              platformUsername: m,
              mugshotUrl: f,
              stats: h
            } = e,
            [k, b] = (0, n.useState)(f),
            v = _ === e.index;
          return (0, n.useEffect)(() => {
            g.current && a && a(g?.current?.offsetWidth)
          }, [g]), (0, o.jsxs)("button", {
            className: "hcgjf90",
            type: "button",
            "aria-hidden": v,
            ref: g,
            tabIndex: s,
            onClick: () => l(-1),
            children: [(0, o.jsx)("div", {
              className: "hcgjf91",
              "aria-hidden": "true",
              children: (0, o.jsx)("div", {
                className: "hcgjf93",
                "data-size": "small",
                style: (0, P.DI)({
                  [$]: `url(${E})`
                }),
                children: (0, o.jsx)("img", {
                  className: "hcgjf94",
                  src: k,
                  alt: c.formatMessage(d.profile_selector_mugshot, {
                    userName: m
                  }),
                  onError: () => {
                    b(t(5931))
                  },
                  "data-testid": H
                })
              })
            }), (0, o.jsxs)("div", {
              className: "hcgjf95",
              children: [(0, o.jsxs)("div", {
                className: "hcgjf96",
                children: [(0, o.jsx)(S, {
                  tagSize: j.large,
                  platform: p
                }), (0, o.jsx)("div", {
                  className: "hcgjf97",
                  "data-size": "small",
                  "data-testid": F,
                  children: m
                })]
              }), (0, o.jsxs)("div", {
                className: "hcgjf98",
                children: [(0, o.jsx)("span", {
                  className: "hcgjf99",
                  children: "RP"
                }), (0, o.jsx)(I, {
                  size: "small",
                  rank: parseInt(h.overview.rank.value)
                })]
              })]
            })]
          })
        },
        O = ({
          dragThreshold: e = 80,
          interactionDelay: a = 1e3,
          mobileGutterWidth: t = 17,
          slideChangeCallback: s = null,
          slideClickCallback: i = null,
          children: l = [],
          disablePager: r = !1,
          disableSwiper: c = !1
        }) => {
          const d = (0, n.createRef)(),
            u = (0, _.ri)(d, !1),
            [g, p] = (0, n.useState)(!1),
            [m, f] = (0, n.useState)(!1),
            [h, k] = (0, n.useState)(0),
            [b, v] = (0, n.useState)(0),
            [w, y] = (0, n.useState)([t]),
            [x, C] = (0, n.useState)(w[0]),
            [j, S] = (0, n.useState)(252),
            [N, M] = (0, n.useState)(0),
            [I, E] = (0, n.useState)([]),
            [P, L] = (0, n.useState)([]),
            [A, z] = (0, n.useState)(!1),
            T = e => {
              if (!0 === g || !0 === c) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              v(a)
            },
            D = a => {
              if (!0 === g || 0 === b || !0 === c) return;
              f(!0);
              const t = void 0 !== a.changedTouches ? a.changedTouches[0].screenX : a.screenX,
                o = t > b ? 1 : -1,
                n = Math.abs(b - t);
              n > e ? (o > 0 ? (() => {
                if (!0 === g) return;
                p(!0);
                const e = h - 1 < 0 ? 0 : h - 1;
                k(e), C(w[e]), s && s(e)
              })() : (() => {
                if (!0 === g) return;
                p(!0);
                let e = h + 1 >= w.length ? w.length - 1 : h + 1;
                e < 0 && (e = 0), k(e), C(w[e]), s && s(e)
              })(), v(0)) : C(w[h] + n * o)
            },
            R = () => {
              !0 !== g && !0 !== c && (p(!0), !0 !== g && (C(w[h]), v(0)), f(!1))
            };
          return (0, n.useEffect)(() => {
            const e = [];
            l.forEach(() => {
              e.push((0, n.createRef)())
            }), E(e)
          }, [l]), (0, n.useEffect)(() => {
            if (I.length < 1) return;
            S(I[0]?.current?.clientWidth || 0);
            const e = I[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            M(t + a)
          }, [I]), (0, n.useEffect)(() => {
            !1 !== g && setTimeout(() => {
              p(!1)
            }, a)
          }, [g, a]), (0, n.useEffect)(() => {
            y(l.map((e, a) => (e => {
              let a = 0;
              const s = l.length;
              return 1 === s ? .5 * u - .5 * j - 2 * t + N : (0 === e && (a = t - e * j), e === s - 1 && s > 1 && (a = s * j * -1 + (u - (t - N))), e > 0 && e < s - 1 && (a = e * j * -1 + (.5 * u - .5 * j + .5 * N)), a)
            })(a))), 1 === l.length ? z(!0) : z(!1)
          }, [d.current, l, u]), (0, n.useEffect)(() => {
            const e = (a = h, l.map((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            }));
            var a;
            L(e)
          }, [l, h]), (0, n.useEffect)(() => {
            !0 !== r && !0 !== c || C(w[0])
          }, [c, r, w]), (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("div", {
              className: "_1kqw7r10",
              ref: d,
              onTouchStart: T,
              onTouchMove: D,
              onTouchEnd: R,
              onMouseDown: T,
              onMouseMove: D,
              onMouseUp: R,
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, o.jsx)("div", {
                className: "_1kqw7r13",
                "data-interaction-blocked": g,
                "data-single-item": A,
                style: {
                  transform: A ? null : `translateX(${x}px)`
                },
                children: l.map((e, a) => (0, o.jsx)("div", {
                  onClick: () => (e => {
                    null === i || m || i(e)
                  })(a),
                  className: "_1kqw7r12",
                  ref: I[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`))
              })
            }), P.length > 1 && !1 === r && (0, o.jsx)("div", {
              className: "_1kqw7r14",
              children: P.map((e, a) => (0, o.jsx)("div", {
                className: "_1kqw7r15",
                "data-active": e.active
              }, a))
            })]
          })
        },
        U = JSON.parse('{"de-DE":{"language_selector_default":"Eine Sprache auswählen","language_selector_option_de_de":"Deutsch","language_selector_option_en_us":"Englisch – (English)","language_selector_option_es_es":"Spanisch – (Español)","language_selector_option_es_mx":"Lateinamerikanisches Spanisch – (Español Latinoamérica)","language_selector_option_fr_fr":"Französisch – (Français)","language_selector_option_it_it":"Italienisch – (Italiano)","language_selector_option_ja_jp":"Japanisch – (日本語)","language_selector_option_ko_kr":"Koreanisch – (한국어)","language_selector_option_pl_pl":"Polnisch – (Polski)","language_selector_option_pt_br":"Brasilianisches Portugiesisch – (Português do Brasil)","language_selector_option_ru_ru":"Russisch – (Русский)","language_selector_option_zh_hans":"Vereinfachtes Chinesisch – (简体中文)","language_selector_option_zh_tw":"Traditionelles Chinesisch – (繁體中文)","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","sc_link_account":"Konto","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine personenbezogenen Daten nicht verkaufen oder weitergeben","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","www_link_manage_account":"Konto verwalten"},"en-US":{"language_selector_default":"Select a Language","language_selector_option_de_de":"German - (Deutsch)","language_selector_option_en_us":"English","language_selector_option_es_es":"Spanish - (Español)","language_selector_option_es_mx":"Spanish Latin America - (Español Latinoamérica)","language_selector_option_fr_fr":"French - (Français)","language_selector_option_it_it":"Italian - (Italiano)","language_selector_option_ja_jp":"Japanese - (日本語)","language_selector_option_ko_kr":"Korean - (한국어)","language_selector_option_pl_pl":"Polish - (Polski)","language_selector_option_pt_br":"Português do Brasil - (Português do Brasil)","language_selector_option_ru_ru":"Russian - (Русский)","language_selector_option_zh_hans":"Chinese Simplified - (简体中文)","language_selector_option_zh_tw":"Chinese Traditional - (繁體中文)","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","www_link_manage_account":"Manage Account"},"es-ES":{"language_selector_default":"Selecciona un idioma","language_selector_option_de_de":"Alemán - (Deutsch)","language_selector_option_en_us":"Inglés (English)","language_selector_option_es_es":"Español - (España)","language_selector_option_es_mx":"Español - (Latinoamérica)","language_selector_option_fr_fr":"Francés - (Français)","language_selector_option_it_it":"Italiano","language_selector_option_ja_jp":"Japonés - (日本語)","language_selector_option_ko_kr":"Coreano - (한국어)","language_selector_option_pl_pl":"Polaco - (Polski)","language_selector_option_pt_br":"Portugués brasileño - (Português do Brasil)","language_selector_option_ru_ru":"Ruso - (Русский)","language_selector_option_zh_hans":"Chino simplificado - (简体中文)","language_selector_option_zh_tw":"Chino tradicional - (繁體中文)","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","www_link_manage_account":"Gestionar cuenta"},"es-MX":{"language_selector_default":"Seleccionar un idioma","language_selector_option_de_de":"Alemán - (Deutsch)","language_selector_option_en_us":"Inglés - (English)","language_selector_option_es_es":"Español (España)","language_selector_option_es_mx":"Español (Latinoamérica)","language_selector_option_fr_fr":"Francés - (Français)","language_selector_option_it_it":"Italiano","language_selector_option_ja_jp":"Japonés - (日本語)","language_selector_option_ko_kr":"Coreano - (한국어)","language_selector_option_pl_pl":"Polaco - (Polski)","language_selector_option_pt_br":"Portugués de Brasil - (Português do Brasil)","language_selector_option_ru_ru":"Ruso - (Русский)","language_selector_option_zh_hans":"Chino simplificado - (简体中文)","language_selector_option_zh_tw":"Chino tradicional - (繁體中文)","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de una silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del jugador","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del jugador","www_link_manage_account":"Administrar cuenta"},"fr-FR":{"language_selector_default":"Sélectionner une langue","language_selector_option_de_de":"Allemand - (Deutsch)","language_selector_option_en_us":"Anglais - (English)","language_selector_option_es_es":"Espagnol - (Español)","language_selector_option_es_mx":"Espagnol d’Amérique latine - (Español Latinoamérica)","language_selector_option_fr_fr":"Français","language_selector_option_it_it":"Italien - (Italiano)","language_selector_option_ja_jp":"Japonais - (日本語)","language_selector_option_ko_kr":"Coréen - (한국어)","language_selector_option_pl_pl":"Polonais - (Polski)","language_selector_option_pt_br":"Portugais brésilien - (Português do Brasil)","language_selector_option_ru_ru":"Russe - (Русский)","language_selector_option_zh_hans":"Chinois simplifié - (简体中文)","language_selector_option_zh_tw":"Chinois traditionnel - (繁體中文)","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","profile_silhouette_mugshot":"Photo d\'identité : silhouette","sc_link_account":"Compte","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre ni partager mes données personnelles","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’abonner","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","www_link_manage_account":"Gérer le compte"},"it-IT":{"language_selector_default":"Seleziona una lingua","language_selector_option_de_de":"Tedesco - (Deutsch)","language_selector_option_en_us":"Inglese - (English)","language_selector_option_es_es":"Spagnolo - (Español)","language_selector_option_es_mx":"Spagnolo (America Latina) - (Español Latinoamérica)","language_selector_option_fr_fr":"Francese - (Français)","language_selector_option_it_it":"Italiano","language_selector_option_ja_jp":"Giapponese - (日本語)","language_selector_option_ko_kr":"Coreano - (한국어)","language_selector_option_pl_pl":"Polacco - (Polski)","language_selector_option_pt_br":"Portoghese (Brasile) - (Português do Brasil)","language_selector_option_ru_ru":"Russo - (Русский)","language_selector_option_zh_hans":"Chinese semplificato - (简体中文)","language_selector_option_zh_tw":"Cinese tradizionale - (繁體中文)","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","profile_silhouette_mugshot":"Foto segnaletica silhouette","sc_link_account":"Account","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere o condividere i miei dati personali","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","www_link_manage_account":"Impostazioni account"},"ja-JP":{"language_selector_default":"言語を選択","language_selector_option_de_de":"ドイツ語 - (Deutsch)","language_selector_option_en_us":"英語 - (English)","language_selector_option_es_es":"スペイン語 - (Español)","language_selector_option_es_mx":"スペイン語(ラテンアメリカ) - (Español Latinoamérica)","language_selector_option_fr_fr":"フランス語 - (Français)","language_selector_option_it_it":"イタリア語 - (Italiano)","language_selector_option_ja_jp":"日本語","language_selector_option_ko_kr":"韓国語 - (한국어)","language_selector_option_pl_pl":"ポーランド語 - (Polski)","language_selector_option_pt_br":"ポルトガル語(ブラジル) - (Português do Brasil)","language_selector_option_ru_ru":"ロシア語 - (Русский)","language_selector_option_zh_hans":"簡体字中国語 - (简体中文)","language_selector_option_zh_tw":"繁体字中国語 - (繁體中文)","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","profile_silhouette_mugshot":"シルエット顔写真","sc_link_account":"アカウント","sc_link_cookies_policy":"Cookieポリシー","sc_link_cookies_settings":"Cookie設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を共有もしくは売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","www_link_manage_account":"アカウントを管理する"},"ko-KR":{"language_selector_default":"언어 선택","language_selector_option_de_de":"독일어 - (Deutsch)","language_selector_option_en_us":"영어 - (English)","language_selector_option_es_es":"스페인어 - (Español)","language_selector_option_es_mx":"라틴 아메리카 스페인어 - (Español Latinoamérica)","language_selector_option_fr_fr":"프랑스어 - (Français)","language_selector_option_it_it":"이탈리아어 - (Italiano)","language_selector_option_ja_jp":"일본어 - (日本語)","language_selector_option_ko_kr":"한국어","language_selector_option_pl_pl":"폴란드어 - (Polski)","language_selector_option_pt_br":"브라질 포르투갈어 - (Português do Brasil)","language_selector_option_ru_ru":"러시아어 - (Русский)","language_selector_option_zh_hans":"중국어 간체 - (简体中文)","language_selector_option_zh_tw":"중국어 번체 - (繁體中文)","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","profile_silhouette_mugshot":"실루엣 머그샷","sc_link_account":"계정","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 또는 공유 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","www_link_manage_account":"계정 관리"},"pl-PL":{"language_selector_default":"Wybierz język","language_selector_option_de_de":"Niemiecki - (Deutsch)","language_selector_option_en_us":"Angielski - (English)","language_selector_option_es_es":"Hiszpański - (Español)","language_selector_option_es_mx":"Hiszpański (Ameryka Łacińska) - (Español Latinoamérica)","language_selector_option_fr_fr":"Francuski - (Français)","language_selector_option_it_it":"Włoski - (Italiano)","language_selector_option_ja_jp":"Japoński - (日本語)","language_selector_option_ko_kr":"Koreański - (한국어)","language_selector_option_pl_pl":"Polski","language_selector_option_pt_br":"Portugalski (Brazylia) - (Português do Brasil)","language_selector_option_ru_ru":"Rosyjski - (Русский)","language_selector_option_zh_hans":"Chiński uproszczony - (简体中文)","language_selector_option_zh_tw":"Chiński tradycyjny - (繁體中文)","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","profile_silhouette_mugshot":"Zdjęcie sylwetki","sc_link_account":"Konto","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży i udostępniania moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","www_link_manage_account":"Zarządzanie kontem"},"pt-BR":{"language_selector_default":"Selecione um idioma","language_selector_option_de_de":"Alemão - (Deutsch)","language_selector_option_en_us":"Inglês - (English)","language_selector_option_es_es":"Espanhol (Espanha) - (Español España)","language_selector_option_es_mx":"Espanhol (América Latina) - (Español Latinoamérica)","language_selector_option_fr_fr":"Francês - (Français)","language_selector_option_it_it":"Italiano - (Italiano)","language_selector_option_ja_jp":"Japonês - (日本語)","language_selector_option_ko_kr":"Coreano - (한국어)","language_selector_option_pl_pl":"Polonês - (Polski)","language_selector_option_pt_br":"Português do Brasil","language_selector_option_ru_ru":"Russo - (Русский)","language_selector_option_zh_hans":"Chinês Simplificado - (简体中文)","language_selector_option_zh_tw":"Chinês Tradicional - (繁體中文)","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","profile_silhouette_mugshot":"Foto da silhueta","sc_link_account":"Conta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não compartilhem minhas informações pessoais","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","www_link_manage_account":"Gerenciar conta"},"ru-RU":{"language_selector_default":"Выбрать язык","language_selector_option_de_de":"Немецкий - (Deutsch)","language_selector_option_en_us":"Английский","language_selector_option_es_es":"Испанский - (Español)","language_selector_option_es_mx":"Латиноамериканский испанский - (Español Latinoamérica)","language_selector_option_fr_fr":"Французский - (Français)","language_selector_option_it_it":"Итальянский - (Italiano)","language_selector_option_ja_jp":"Японский - (日本語)","language_selector_option_ko_kr":"Корейский - (한국어)","language_selector_option_pl_pl":"Польский - (Polski)","language_selector_option_pt_br":"Бразильский португальский - (Português do Brasil)","language_selector_option_ru_ru":"Русский","language_selector_option_zh_hans":"Китайский (упрощенный) - (简体中文)","language_selector_option_zh_tw":"Китайский (традиционный) - (繁體中文)","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","profile_silhouette_mugshot":"Силуэт игрока","sc_link_account":"Учетная запись","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать и разглашать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","www_link_manage_account":"Настройки"},"zh-CN":{"language_selector_default":"选择一种语言","language_selector_option_de_de":"德语 - (Deutsch)","language_selector_option_en_us":"英语 - (English)","language_selector_option_es_es":"西班牙语 - (Español)","language_selector_option_es_mx":"西班牙语（拉丁美洲）- (Español Latinoamérica)","language_selector_option_fr_fr":"法语 - (Français)","language_selector_option_it_it":"意大利语 - (Italiano)","language_selector_option_ja_jp":"日语 - (日本語)","language_selector_option_ko_kr":"韩语 - (한국어)","language_selector_option_pl_pl":"波兰语 - (Polski)","language_selector_option_pt_br":"葡萄牙语（巴西）- (Português do Brasil)","language_selector_option_ru_ru":"俄语 - (Русский)","language_selector_option_zh_hans":"简体中文","language_selector_option_zh_tw":"繁体中文 - (繁體中文)","nofications_new":"新通知","profile_selector_mugshot":"{userName}面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","profile_silhouette_mugshot":"剪影面部照片","sc_link_account":"账户","sc_link_cookies_policy":"Cookie政策","sc_link_cookies_settings":"Cookie设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售或分享我的个人信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","www_link_manage_account":"管理账户"},"zh-TW":{"language_selector_default":"選擇語言","language_selector_option_de_de":"德文 / Deutsch","language_selector_option_en_us":"英文 / English","language_selector_option_es_es":"西班牙文 / Español","language_selector_option_es_mx":"西班牙文（拉丁美洲）/ Español Latinoamérica","language_selector_option_fr_fr":"法文 / Français","language_selector_option_it_it":"意大利文 / Italiano","language_selector_option_ja_jp":"日文 / 日本語","language_selector_option_ko_kr":"韓文 / 한국어","language_selector_option_pl_pl":"波蘭文 / Polski","language_selector_option_pt_br":"葡萄牙文（巴西）/ Português do Brasil","language_selector_option_ru_ru":"俄文 / Русский","language_selector_option_zh_hans":"簡體中文 / 简体中文","language_selector_option_zh_tw":"繁體中文","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","profile_silhouette_mugshot":"罪犯檔案照剪影","sc_link_account":"帳戶","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售或分享我的個人資訊","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"訂閱","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","www_link_manage_account":"管理帳戶"}}'),
        W = e => (0, i.withIntl)(e, U);
      var V = "_1v7oejd3",
        q = "_1v7oejd2",
        G = "_1v7oejd4",
        X = "_1v7oejd1",
        Z = "_1v7oejd0";
      const J = {
          pcalt: "PC ENHANCED",
          pc: "PC LEGACY",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        K = W(() => {
          const e = (0, i.useIntl)(),
            {
              track: a
            } = (0, r.useGtmTrack)(),
            [t, u] = (0, n.useState)(null),
            [g, p] = (0, n.useState)(0),
            [m, f] = (0, n.useState)(!1),
            [h, k] = (0, n.useState)(!1),
            b = (0, n.createRef)(),
            [v, w] = (0, n.useState)([]),
            [x, C] = (0, n.useState)(244),
            {
              windowWidth: j
            } = (0, c.useWindowResize)(),
            [S, N] = (0, n.useState)(!1),
            M = (0, _.ri)(b, !1),
            {
              data: I,
              loggedIn: E
            } = (0, r.useRockstarUser)(),
            {
              charactersNeeded: P,
              currentCharId: L,
              setCurrentCharId: A
            } = (0, r.useRockstarUserState)(),
            {
              charListHidden: z,
              setCharListHidden: T
            } = y();
          (0, n.useEffect)(() => {
            void 0 === L && A(0)
          }, [L]), (0, n.useEffect)(() => {
            let e = v.length - 1;
            e < 0 && (e = 0), p(e);
            const a = v.length > 0 ? v[L] ?? v[0] : null;
            a && (u(a), v.length > 1 ? k(!0) : k(!1))
          }, [L, v]), (0, n.useEffect)(() => {
            w(I?.characters?.[P] ?? [])
          }, [I, P]), (0, n.useEffect)(() => {
            D()
          }, [x, g, S, j, v]), (0, n.useEffect)(() => {
            N(j < 1024)
          }, [j]);
          const D = () => {
              f(x * g < M)
            },
            $ = e => {
              const t = v.filter((e, a) => a !== L).map(e => e);
              A(t[e].index), a({
                event: "character_selector_select",
                text: J[t[e].platform],
                position: t[e].index
              })
            };
          return null !== t && "gtao" === P && E ? (0, o.jsxs)("div", {
            tabIndex: -1,
            "aria-label": e.formatMessage(d.profile_selector_profile_card),
            children: [(0, o.jsx)(R, {
              s,
              character: t
            }), !0 === h && (0, o.jsxs)("div", {
              className: Z,
              children: [(0, o.jsxs)("button", {
                className: X,
                "data-list-closed": z,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const t = !z;
                  T(t), a({
                    event: t ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                children: [(0, o.jsx)("span", {
                  className: q,
                  children: (0, o.jsx)(i.FormattedMessage, {
                    ...d.profile_selector_switch_character
                  })
                }), (0, o.jsx)(l.ChevronDown, {
                  className: V,
                  label: ""
                })]
              }), !S && (0, o.jsx)("div", {
                className: G,
                "aria-hidden": z,
                children: v.filter((e, a) => a !== L).map((e, a) => (0, o.jsx)(B, {
                  tabIndex: z ? -1 : 0,
                  onClick: () => $(a),
                  characterData: e,
                  setMobileCardWidth: C
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
              }), S && (0, o.jsx)("div", {
                className: G,
                "data-single-item": 2 === v.length,
                "data-swiper-disabled": m,
                "aria-hidden": z,
                ref: b,
                children: (0, o.jsx)(O, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    a({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  slideClickCallback: $,
                  disablePager: m,
                  disableSwiper: m,
                  children: v.filter((e, a) => a !== L).map(e => (0, n.createElement)(B, {
                    characterData: e,
                    setMobileCardWidth: C,
                    key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                    tabIndex: z ? -1 : 0
                  }))
                })
              })]
            })]
          }) : null
        });
      var Y = t(59897),
        Q = t(83720),
        ee = t(44514),
        ae = t.n(ee);
      const te = (0, i.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            description: "The default option for the language selector.",
            defaultMessage: "Select a Language"
          },
          language_selector_option_en_us: {
            id: "language_selector_option_en_us",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "English"
          },
          language_selector_option_de_de: {
            id: "language_selector_option_de_de",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "German - (Deutsch)"
          },
          language_selector_option_es_es: {
            id: "language_selector_option_es_es",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Spanish - (Español)"
          },
          language_selector_option_es_mx: {
            id: "language_selector_option_es_mx",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Spanish Latin America - (Español Latinoamérica)"
          },
          language_selector_option_fr_fr: {
            id: "language_selector_option_fr_fr",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "French - (Français)"
          },
          language_selector_option_it_it: {
            id: "language_selector_option_it_it",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Italian - (Italiano)"
          },
          language_selector_option_ja_jp: {
            id: "language_selector_option_ja_jp",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Japanese - (日本語)"
          },
          language_selector_option_ko_kr: {
            id: "language_selector_option_ko_kr",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Korean - (한국어)"
          },
          language_selector_option_pl_pl: {
            id: "language_selector_option_pl_pl",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Polish - (Polski)"
          },
          language_selector_option_pt_br: {
            id: "language_selector_option_pt_br",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Português do Brasil - (Português do Brasil)"
          },
          language_selector_option_ru_ru: {
            id: "language_selector_option_ru_ru",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Russian - (Русский)"
          },
          language_selector_option_zh_tw: {
            id: "language_selector_option_zh_tw",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Chinese Traditional - (繁體中文)"
          },
          language_selector_option_zh_hans: {
            id: "language_selector_option_zh_hans",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Chinese Simplified - (简体中文)"
          }
        }),
        se = {
          dropdown: "rockstargames-modules-core-footercb93b1e1dbe15862e05455dc78f5ec25",
          dropdownContainer: "rockstargames-modules-core-footerab0cc073180383d3d5e4bee00eaa311f",
          dropdownViewport: "rockstargames-modules-core-footerce182a54e9bc22320f811d2a1117ccd4",
          languageSelector: "rockstargames-modules-core-footera9dd8a9cb7334e205df4ac3b4392916d",
          linkWrapper: "rockstargames-modules-core-footerb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-modules-core-footerc64b05a604b1a6be373d35cf01edba2e",
          menuStyles: "rockstargames-modules-core-footerb641fac428f473cbb4593cd058a01953",
          open: "rockstargames-modules-core-footeraa1d94595080f833a35e29fbbe8fd01c",
          pillBtn: "rockstargames-modules-core-footere34929a5bcdda554c66b47a858ddd966",
          selectBox: "rockstargames-modules-core-footerfe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-modules-core-footerae32febd9789e79c804b2679d25e8a65",
          selectBoxWrapper: "rockstargames-modules-core-footerdb1aead5717ba9dae1e272c3b7e6e801",
          selected: "rockstargames-modules-core-footere1ba906f108faeb297753d39a8d21b8b"
        };
      var oe = t(84173);
      const ne = W(({
        theme: e,
        languageSelectorOpened: a,
        setLanguageSelectorOpened: t,
        location: s,
        parent: c = "element",
        onLanguageChange: _,
        ...d
      }) => {
        const {
          track: u
        } = (0, r.useGtmTrack)(), {
          formatMessage: g
        } = (0, i.useIntl)(), [p] = (0, i.getLocale)(), [m, f] = (0, n.useState)(!1), h = (0, n.useRef)(null), k = (0, n.useRef)(null), [b, v] = (0, n.useState)(0), w = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, y = e => {
          if (t && t(!1), p.subdomaincom === e || "none" === e) return void(t && t(!1));
          const a = i.locales.find(a => a.subdomaincom === e);
          a && _?.({
            selectedLocale: a,
            track: u,
            parent: c
          })
        };
        return (0, n.useEffect)(() => {
          void 0 !== a && !1 === a && !0 === m && f(!1)
        }, [a]), (0, n.useEffect)(() => {
          k.current && v(k.current.scrollHeight)
        }, [k]), "function" != typeof _ ? null : (0, o.jsxs)(o.Fragment, {
          children: [w && "sc-menu" === e && (0, o.jsx)("div", {
            className: [se.languageSelector, m ? se.open : ""].join(" "),
            "data-theme": e,
            "data-testid": `${c}-language-selector`,
            ...d,
            children: (0, o.jsx)("div", {
              className: se.selectBoxWrapper,
              children: (0, o.jsxs)("select", {
                className: se.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  y(a)
                },
                "aria-label": g(te.language_selector_default),
                "data-testid": `${c}-language-selector-button`,
                children: [(0, o.jsx)("option", {
                  className: se.selectBoxOption,
                  value: "none",
                  "data-testid": `${c}-language-selector-current`,
                  children: i.locales.find(e => e.subdomaincom === p.subdomaincom)?.label ?? (0, o.jsx)(i.FormattedMessage, {
                    ...te.language_selector_default
                  })
                }), i.locales.map(({
                  label: e,
                  subdomaincom: a,
                  iso: t,
                  posix: s
                }) => {
                  const n = te[`language_selector_option_${s}`],
                    i = n ? g(n) : e;
                  return (0, o.jsxs)("option", {
                    className: se.selectBoxOption,
                    value: a,
                    "aria-labelledby": `foot_lang_${t}`,
                    children: [(0, o.jsx)(oe.s6, {
                      id: `foot_lang_${t}`,
                      children: i
                    }), e]
                  }, `mobile-${a}`)
                })]
              })
            })
          }), (!w || "sc-menu" !== e) && "footer" !== e && (0, o.jsx)(ae(), {
            active: m,
            focusTrapOptions: {
              onDeactivate: () => f(!1),
              clickOutsideDeactivates: !0,
              onActivate: () => {
                const e = h?.current?.querySelectorAll("a[aria-selected=true]");
                if (e?.length) {
                  const a = [...e].filter(e => e.checkVisibility());
                  a?.[0]?.focus()
                }
              }
            },
            children: (0, o.jsxs)("div", {
              className: [se.languageSelector, m ? se.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${c}-language-selector`,
              ...d,
              children: [(0, o.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), t && t(!m), f(!m)
                },
                "data-testid": `${c}-language-selector-button`,
                id: `${c}-language-selector-button`,
                type: "button",
                "aria-label": g(te.language_selector_default),
                children: [(0, o.jsx)("i", {}), (0, o.jsx)("span", {
                  "data-testid": `${c}-language-selector-current`,
                  children: i.locales.find(e => e.subdomaincom === p.subdomaincom)?.label ?? (0, o.jsx)(i.FormattedMessage, {
                    ...te.language_selector_default
                  })
                })]
              }), (0, o.jsx)("div", {
                className: se.linkWrapper,
                ref: k,
                style: {
                  "--ls-linkWrapper-opened-height": `${b}px`
                },
                children: (0, o.jsx)("div", {
                  className: se.links,
                  ref: h,
                  role: "listbox",
                  "aria-label": g(te.language_selector_default),
                  children: i.locales.map(({
                    subdomaincom: e,
                    label: a,
                    iso: t,
                    posix: s
                  }) => {
                    const n = te[`language_selector_option_${s}`],
                      i = n ? g(n) : a;
                    return (0, o.jsxs)(Q.A, {
                      onClick: a => {
                        a.preventDefault(), y(e)
                      },
                      tabIndex: m ? 0 : -1,
                      "data-testid": `${c}-language-selector-${e}`,
                      role: "option",
                      "aria-selected": p.subdomaincom === e,
                      "aria-labelledby": `foot_lang_${t}`,
                      children: [(0, o.jsx)(oe.s6, {
                        id: `foot_lang_${t}`,
                        children: i
                      }), a]
                    }, a)
                  })
                })
              })]
            })
          }), "footer" === e && (0, o.jsxs)("div", {
            className: se.dropdownContainer,
            "data-testid": `${c}-language-selector`,
            ...d,
            children: [(0, o.jsx)(l.Globe, {
              size: "MD",
              label: ""
            }), (0, o.jsxs)(Y.Dropdown.Root, {
              className: se.dropdown,
              onValueChange: e => {
                y(e)
              },
              defaultValue: i.locales.find(e => e.subdomaincom === p.subdomaincom)?.subdomaincom,
              children: [(0, o.jsx)(Y.Dropdown.Label, {
                hideVisually: !0,
                children: g(te.language_selector_default)
              }), (0, o.jsxs)(Y.Dropdown.Trigger, {
                children: [(0, o.jsx)(Y.Dropdown.TriggerText, {
                  placeholder: g(te.language_selector_default)
                }), (0, o.jsx)(Y.Dropdown.TriggerIcon, {})]
              }), (0, o.jsx)(Y.Dropdown.Portal, {
                children: (0, o.jsx)(Y.Dropdown.Content, {
                  style: {
                    zIndex: 1
                  },
                  children: (0, o.jsxs)(Y.ScrollArea.Root, {
                    children: [(0, o.jsx)(Y.ScrollArea.Viewport, {
                      className: se.dropdownViewport,
                      children: i.locales.map(({
                        subdomaincom: e,
                        label: a,
                        iso: t,
                        posix: s
                      }) => {
                        const n = te[`language_selector_option_${s}`],
                          i = n ? g(n) : a;
                        return (0, o.jsx)(Y.Dropdown.Option, {
                          value: e,
                          testId: `${c}-language-selector-${e}`,
                          "aria-labelledby": `foot_lang_${t}`,
                          children: (0, o.jsxs)(Y.Dropdown.OptionText, {
                            children: [i !== a && (0, o.jsx)(oe.s6, {
                              id: `foot_lang_${t}`,
                              children: i
                            }), a]
                          })
                        }, a)
                      })
                    }), (0, o.jsx)(Y.ScrollArea.Scrollbar, {
                      orientation: "vertical",
                      children: (0, o.jsx)(Y.ScrollArea.Thumb, {})
                    })]
                  })
                })
              })]
            })]
          })]
        })
      });
      var ie = t(35328),
        le = t(79098),
        re = t(47279);
      const ce = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        _e = e => ({
          text: e.formatMessage(d.sc_link_help),
          target: "_self",
          ga: {
            ...ce,
            text: d.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(d.sc_link_support),
            location: {
              domain: re.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...ce,
              text: d.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(d.sc_link_legal),
            location: {
              domain: re.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...ce,
              text: d.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(d.sc_link_privacy_policy),
            location: {
              domain: re.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...ce,
              text: d.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(d.sc_link_cookies_policy),
            location: {
              domain: re.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...ce,
              text: d.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(d.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...ce,
              text: d.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(d.sc_link_do_not_sell_my_information),
            location: {
              domain: re.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...ce,
              text: d.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        de = ({
          to: e,
          target: a,
          className: t,
          onNavigate: s,
          onClick: n,
          reloadDocument: i,
          children: l,
          ...r
        }) => {
          const c = e?.startsWith("http");
          return (0, o.jsx)("a", {
            href: e,
            className: t,
            onClick: a => {
              n?.(a), c || i || (s ? (a.preventDefault(), s(e)) : (a.preventDefault(), window.history.pushState({}, "", e)))
            },
            target: a,
            ...r,
            children: l
          })
        },
        ue = ({
          text: e,
          target: a,
          href: t,
          location: s,
          ga: n,
          dataTestId: l,
          isSubLink: c,
          hasNotifications: _ = !1,
          onClickCallback: u = () => {},
          tabIndex: g,
          reloadDocument: p = !1,
          onNavigate: m
        }) => {
          const {
            track: f
          } = (0, r.useGtmTrack)(), h = (0, re.A)(), k = (0, i.useIntl)();
          let b = t;
          s && (b = s.domain === h.currentSite?.site ? s.path : `https://${h.sites[s.domain]}.rockstargames.com${s.path}`);
          const v = {
            ...n,
            link_url: b
          };
          return (0, o.jsxs)(de, {
            className: c ? "rockstargames-modules-core-footerc2233d027086d54af877493d7d0700bd" : "rockstargames-modules-core-footerf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": l || "menuLink",
            title: e,
            to: b,
            target: a,
            rel: "noreferrer",
            reloadDocument: p,
            tabIndex: g,
            onClick: e => {
              f(v), u(e)
            },
            onNavigate: m,
            children: [e, _ && (0, o.jsx)("div", {
              className: "rockstargames-modules-core-footeradbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, o.jsx)("span", {
                className: "rockstargames-modules-core-footere49e290899be3c888ca5a4b6b13736a1",
                children: k.formatMessage(d.nofications_new)
              })
            })]
          })
        },
        ge = ({
          id: e,
          text: a,
          target: t,
          href: s,
          location: i,
          ga: l,
          hasNotifications: _ = !1,
          dataTestId: d,
          children: u = [],
          activeSubNavId: g,
          setActiveSubNavId: p,
          setSubNavExtraHeight: m,
          reloadDocument: f = !1,
          onClickCallback: h = () => {},
          onNavigate: k
        }) => {
          const {
            windowWidth: b,
            windowHeight: v
          } = (0, c.useWindowResize)(), {
            track: w
          } = (0, r.useGtmTrack)(), {
            navOpen: y
          } = (0, r.useRockstarUserState)(), x = (0, n.useRef)(null), [C, j] = (0, n.useState)(0), [S, N] = (0, n.useState)(0), [M, I] = (0, n.useState)(!0);
          return (0, n.useEffect)(() => {
            g !== e && !1 === M && I(!0), g === e && I(!1)
          }, [g]), (0, n.useEffect)(() => {
            if (!x.current) return;
            j(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), N(a)
            }
          }, [x, b, v]), u.length > 0 ? (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)("button", {
              className: "rockstargames-modules-core-footercc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": d || "menuButton",
              title: a,
              tabIndex: y ? 0 : -1,
              "data-children-hidden": M,
              onClick: a => {
                a.stopPropagation(), w(l), g === e ? (p(-1), m(0)) : (p(e), m(C + S + S))
              },
              children: [(0, o.jsx)("span", {
                className: "rockstargames-modules-core-footerb94730a01d5e9223b69cbc2f20f23bcd",
                children: a
              }), (0, o.jsx)("span", {
                className: "rockstargames-modules-core-footerff271a72fe259d74068b4f4d90db08bd"
              })]
            }, a), (0, o.jsx)("nav", {
              className: "rockstargames-modules-core-footercbf6e64eadb6f965877129d539aa2dcd",
              ref: x,
              "aria-hidden": M,
              style: {
                height: M ? 0 : `${C}px`
              },
              children: u.map(e => (0, n.createElement)(ue, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: M || !y ? -1 : 0,
                onNavigate: k
              }))
            })]
          }) : (0, o.jsx)(ue, {
            text: a,
            target: t,
            href: s,
            location: i,
            ga: l,
            hasNotifications: _,
            dataTestId: d,
            isSubLink: !1,
            onClickCallback: h,
            tabIndex: y ? 0 : -1,
            reloadDocument: f,
            onNavigate: k
          })
        },
        pe = ({
          sc: e,
          location: a,
          onNavigate: t
        }) => {
          const {
            windowWidth: s,
            windowHeight: l
          } = (0, c.useWindowResize)(), _ = (0, i.useIntl)(), {
            languageSelectorOpened: u,
            setLanguageSelectorOpened: g,
            activeSubNavId: p,
            setActiveSubNavId: m,
            subNavExtraHeight: f,
            setSubNavExtraHeight: h
          } = y(), {
            setSelectedCharacterTuple: k,
            navOpen: b
          } = (0, r.useRockstarUserState)(), v = (0, c.useLocale)(), w = (0, c.toScLocaleString)(v), [x, C] = (0, n.useState)(""), j = `${e.login}?returnUrl=${x}&lang=${w}`, S = `${e.signup}&returnUrl=${x}&lang=${w}`, N = (0, n.useMemo)(() => (0, re.A)(), []), M = (0, n.useMemo)(() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(d.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: d.sc_link_sign_in.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(d.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: d.sc_link_join_social_club.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "signUpLink"
            }, _e(e)])(_, j, S);
            return e
          }, [_, j, S, N]), [I, E] = (0, n.useState)(0), P = (0, n.createRef)(), L = () => {
            if (P.current) {
              const {
                current: e
              } = P, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), E(a + e)
              } else E(a)
            }
          };
          return (0, n.useEffect)(() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            C(e)
          }, [JSON.stringify(a)]), (0, n.useEffect)(() => {
            k(!1)
          }, []), (0, n.useEffect)(() => {
            L(), (0, le.A)(() => {
              setTimeout(L, 0)
            }, 300)
          }, [s, l]), (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("nav", {
              className: "rockstargames-modules-core-footerf300d66bd02f52ac564238ca6125a091",
              children: (0, o.jsx)("div", {
                className: "rockstargames-modules-core-footerac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: P,
                style: {
                  "--navWrap-max-height": `${f+I}px`
                },
                children: M.map(e => (0, n.createElement)(ge, {
                  ...e,
                  activeSubNavId: p,
                  setActiveSubNavId: m,
                  setSubNavExtraHeight: h,
                  onNavigate: t,
                  key: e.text
                }))
              })
            }), (0, o.jsx)("div", {
              className: "rockstargames-modules-core-footerf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: b ? null : "hidden"
              },
              children: (0, o.jsx)(ne, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: u,
                setLanguageSelectorOpened: e => {
                  m(-1), g(e)
                },
                location: a,
                onLanguageChange: i.onLanguageChange
              })
            })]
          })
        },
        me = {
          languageSelector: "rockstargames-modules-core-footerb71a5b5521e679bcab20ec6302253996",
          nav: "rockstargames-modules-core-footerca9118e28091523e6679a3b95054fe93",
          navHeader: "rockstargames-modules-core-footerfa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-modules-core-footerce91ee6ebb491174a4ccb4be628aaae7",
          open: "rockstargames-modules-core-footerc5ffa3cbaa36329b72b3d928f9739849",
          pillBtn: "rockstargames-modules-core-footerb4f0b55680e047d303f82f34594abd96",
          profile: "rockstargames-modules-core-footere506a7deb95c0b0c9988325cc857ea9a",
          scCharacterList: "rockstargames-modules-core-footera84bbdd60e615baed0172e6b960c5d32",
          scCharacterSelectBtn: "rockstargames-modules-core-footerea15428b850bf436adda6f1dd8ac1af9",
          scCharacterSelector: "rockstargames-modules-core-footerc3ea8d575c892277f23ad5b589977862",
          scProfile: "rockstargames-modules-core-footerfb20979fe4aa7955196d74baf7d19379",
          selected: "rockstargames-modules-core-footered6126bd2f36579f2b8035e7c6579eb7"
        },
        fe = ({
          sc: e,
          charListHidden: a,
          hideCharacterList: t,
          refCharacterListDesktop: s,
          menuPadding: l,
          longCharList: u,
          setLongCharList: g,
          isMobileMode: p,
          setIsMobileMode: m,
          location: f,
          onNavigate: h
        }) => {
          const {
            windowWidth: k,
            windowHeight: b
          } = (0, c.useWindowResize)(), v = (0, i.useIntl)(), {
            languageSelectorOpened: w,
            setLanguageSelectorOpened: x,
            activeSubNavId: C,
            setActiveSubNavId: j,
            subNavExtraHeight: S,
            setSubNavExtraHeight: N,
            navOpened: M,
            setAccountNavOpened: I
          } = y(), [E, P] = (0, n.useState)(""), {
            webSettings: L
          } = (0, c.useRockstarWebSettings)(), {
            track: A
          } = (0, r.useGtmTrack)(), z = (0, c.useRockstarTokenPing)(), {
            data: T,
            setData: D,
            loggedIn: $
          } = (0, r.useRockstarUser)(), {
            charactersNeeded: F,
            currentCharId: H,
            navOpen: U,
            setCurrentCharId: W,
            setSelectedCharacterTuple: V,
            setUserData: q
          } = (0, r.useRockstarUserState)(), [G, X] = (0, n.useState)(null), [Z, J] = (0, n.useState)(!1), [K, Y] = (0, n.useState)(!1), [Q, ee] = (0, n.useState)(0), ae = (0, n.createRef)(), te = (0, _.ri)(ae, !1), se = (0, n.createRef)(), [oe, ie] = (0, n.useState)(0), [de, ue] = (0, n.useState)([]), [pe, fe] = (0, n.useState)(244), he = (0, n.useRef)(null), ke = (0, n.useMemo)(() => (0, re.A)(), []), be = (0, n.useMemo)(() => ((e, a, t, s, o) => [{
            text: e.formatMessage(d.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(d.www_link_manage_account),
              location: {
                domain: re.C.www,
                path: "/account"
              },
              target: "_self",
              ga: {
                ...ce,
                text: d.www_link_manage_account.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(d.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...ce,
                text: d.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(d.sc_link_game_activation),
              location: {
                domain: re.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...ce,
                text: d.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(d.sc_link_notifications),
            location: {
              domain: re.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...ce,
              text: d.sc_link_notifications.defaultMessage,
              location: {
                domain: re.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(d.sc_link_crews),
            location: {
              domain: re.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...ce,
              text: d.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(d.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(d.sc_link_my_friends),
              location: {
                domain: re.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...ce,
                text: d.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(d.sc_link_import_friends),
              location: {
                domain: re.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...ce,
                text: d.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(d.sc_link_find_friends),
              location: {
                domain: re.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...ce,
                text: d.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, _e(e), {
            text: e.formatMessage(d.sc_link_log_out),
            href: `${a.logout}?returnUrl=${o}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...ce,
              text: d.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(v, e, T, T.hasNotification, E), [v, e, T, E, ke]), ve = () => {
            Y(l + pe * Q < te)
          }, we = () => {
            if (se.current) {
              const {
                current: e
              } = se, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ie(a + e)
              } else ie(a)
            }
          };
          return (0, n.useEffect)(() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ke.currentSite?.site === re.C.socialClub && (e = encodeURIComponent("/")), P(e)
          }, [f]), (0, n.useEffect)(() => {
            ue(T?.characters?.[F] ?? [])
          }, [T, F]), (0, n.useEffect)(() => {
            T && q(T)
          }, [T]), (0, n.useEffect)(() => {
            const e = T?.characters?.gtao ?? [];
            if (null !== $ && !e.length) return void V(!1);
            if (null == H || !e.length) return;
            const a = e?.[H] ?? e?.[0] ?? null;
            V(!!a?.platform && [a.platform, a.characterSlot])
          }, [H, T, $]), (0, n.useEffect)(() => {
            (async () => {
              if (!T?.id || !U) return;
              const e = await (0, r.fetchUnreadNotificationCount)({
                pingBearer: z
              });
              let a = !1;
              e?.count && (a = e.count > 0), D(e => ({
                ...e,
                hasNotification: a
              }))
            })()
          }, [T, U]), (0, n.useEffect)(() => {
            ve()
          }, [pe]), (0, n.useEffect)(() => {
            t(!0), m(k < 768), m(k < 768 || b < 649)
          }, [k, b]), (0, n.useEffect)(() => {
            let e = de.length - 1;
            e < 0 && (e = 0), ee(e);
            const a = de.length > 0 ? de[H] ?? de[0] : null;
            a && (X(a), de.length > 1 ? J(!0) : J(!1), g(de.length - 1 > 3))
          }, [H, de]), (0, n.useEffect)(() => {
            ve()
          }, [Q, p, k, de]), (0, n.useEffect)(() => {
            we(), (0, le.A)(() => {
              setTimeout(we, 0)
            }, 300)
          }, [k, b]), (0, n.useEffect)(() => {
            const e = L?.currentCharId ?? 0;
            e !== H && W(Math.max(0, Math.min(e, de.length - 1)))
          }, [de, L]), (0, o.jsxs)(o.Fragment, {
            children: [null !== G && "gtao" === F && (0, o.jsxs)("div", {
              className: me.scProfile,
              ref: he,
              tabIndex: -1,
              "aria-label": v.formatMessage(d.profile_selector_profile_card),
              children: [(0, o.jsx)(R, {
                s: me,
                character: G
              }), !0 === Z && (0, o.jsxs)("div", {
                className: me.scCharacterSelector,
                children: [(0, o.jsx)("button", {
                  className: me.scCharacterSelectBtn,
                  "aria-hidden": !U,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const s = !a;
                    t(s), A({
                      event: s ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, o.jsx)("span", {
                    children: (0, o.jsx)(i.FormattedMessage, {
                      ...d.profile_selector_switch_character
                    })
                  })
                }), !p && (0, o.jsx)("div", {
                  className: me.scCharacterList,
                  "data-long-list": u,
                  "aria-hidden": a,
                  ref: s,
                  children: de.map(e => (0, o.jsx)(B, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: fe
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
                }), p && (0, o.jsx)("div", {
                  className: me.scCharacterList,
                  "data-single-item": 2 === de.length,
                  "data-swiper-disabled": K,
                  "aria-hidden": a,
                  ref: ae,
                  children: (0, o.jsx)(O, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      A({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: K,
                    disableSwiper: K,
                    children: de.filter((e, a) => a !== H).map(e => (0, n.createElement)(B, {
                      characterData: e,
                      setMobileCardWidth: fe,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: a ? -1 : 0
                    }))
                  })
                })]
              })]
            }), (0, o.jsxs)("nav", {
              className: me.nav,
              "aria-hidden": !U,
              children: [(0, o.jsx)("button", {
                className: me.navHeader,
                type: "button",
                "data-opened": M,
                "data-nav-opened": U,
                tabIndex: M ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), M || I(!0)
                },
                "data-testid": "playerButton",
                children: (0, o.jsx)("span", {
                  className: me.navHeaderText,
                  children: T.nickname
                })
              }), (0, o.jsx)("div", {
                className: me.navWrap,
                "data-opened": M,
                "data-logged-in": "true",
                ref: se,
                style: {
                  "--navWrap-max-height": `${oe+S}px`
                },
                children: be.map((e, a) => (0, n.createElement)(ge, {
                  ...e,
                  id: a,
                  activeSubNavId: C,
                  setActiveSubNavId: j,
                  setSubNavExtraHeight: N,
                  onNavigate: h,
                  key: e.text
                }))
              })]
            }), (0, o.jsx)("div", {
              className: me.scLanguageSelector,
              style: {
                visibility: U ? null : "hidden"
              },
              children: (0, o.jsx)(ne, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: w,
                setLanguageSelectorOpened: x,
                location: f,
                onLanguageChange: i.onLanguageChange
              })
            })]
          })
        },
        he = {
          dragHandle: "rockstargames-modules-core-footerff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-core-footerb49ca12d5334ed642d4359aa44105834",
          menu: "rockstargames-modules-core-footerc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          navOpen: "rockstargames-modules-core-footerb8b5590986941337aa51e2eb7ff12f78",
          pillBtn: "rockstargames-modules-core-footerc31a4663e3c088e8d1095331ba8cafc8",
          scOverlay: "rockstargames-modules-core-footereff8c1d4bf675accdb7d952aba0174dc",
          selected: "rockstargames-modules-core-footerc5f6868e76307ee73276f140c2f988df"
        },
        ke = (0, c.getConfigForDomain)(),
        be = W(({
          location: e,
          onNavigate: a
        }) => {
          const {
            windowHeight: s
          } = (0, c.useWindowResize)(), l = (0, i.useIntl)(), {
            languageSelectorOpened: _,
            setLanguageSelectorOpened: u,
            setActiveSubNavId: g,
            navOpened: p,
            setAccountNavOpened: m,
            charListHidden: f,
            setCharListHidden: h
          } = y(), [k, b] = (0, n.useState)(!1), {
            navHidden: v = !1
          } = (0, c.useState)(), {
            loggedIn: w
          } = (0, r.useRockstarUser)(), {
            currentCharId: x,
            navOpen: C,
            setNavOpen: j,
            userData: S
          } = (0, r.useRockstarUserState)(), {
            track: N
          } = (0, r.useGtmTrack)(), [M, I] = (0, n.useState)(!1), E = (0, n.useRef)(), [P, L] = (0, n.useState)(0), A = (0, n.createRef)(), [z, T] = (0, n.useState)(!1), [D, R] = (0, n.useState)(0), [$, F] = (0, n.useState)(!1), {
            mutateWebSettings: H,
            webSettings: B
          } = (0, c.useRockstarWebSettings)(), O = (0, n.useCallback)(e => {
            h(e), E.current && !0 === e && (E.current.scrollTop = 0)
          }, [E]);
          return (0, n.useEffect)(() => {
            null !== x && B.currentCharId !== x && H({
              key: "currentCharId",
              value: x
            }), !1 === w ? H({
              key: "currentCharId",
              value: null
            }) : w && S && S?.accountSynced && N({
              event: "account_synced"
            })
          }, [x, w, S?.accountSynced]), (0, n.useEffect)(() => {
            E.current && (!1 === f && !1 === M && (E.current.style.height = `${E.current.scrollHeight}px`), !0 === f && (E.current.style.height = null))
          }, [f, E, M]), (0, n.useEffect)(() => {
            const e = () => {
                j(!1), O(!0)
              },
              a = a => {
                const t = A?.current && a?.composedPath().includes(A.current);
                C && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }, [A]), (0, n.useEffect)(() => {
            j(!1), O(!0)
          }, [v]), (0, n.useEffect)(() => {
            if (A.current) {
              const {
                current: e
              } = A, a = window.getComputedStyle(e);
              L(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }, [A]), (0, n.useEffect)(() => {
            F(window.navigator.userAgent.includes("Mac"))
          }, []), (0, n.useEffect)(() => {
            A.current && b(A?.current?.scrollHeight >= s)
          }, [A, s]), (0, n.useEffect)(() => {
            C || (g(-1), u(!1))
          }, [C]), (0, n.useEffect)(() => {
            _ && (f || O(!0), p && (m(!1), g(-1)))
          }, [_]), (0, n.useEffect)(() => {
            p && (_ && u(!1), f || O(!0))
          }, [p]), void 0 === w ? null : (0, o.jsxs)(ie.A, {
            enabled: !!C,
            removeScrollBar: !1,
            children: [(0, o.jsxs)("div", {
              className: [he.menu, C ? he.navOpen : ""].join(" "),
              "data-logged-in": w,
              "data-mac-browser": $,
              "data-scroll-mode": k,
              ref: A,
              "aria-hidden": !C,
              children: [(0, o.jsx)("button", {
                className: he.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  R(a)
                },
                onTouchMove: e => {
                  if (0 === D) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(D - a) > 1 && (R(0), j(!1))
                },
                children: (0, o.jsx)("img", {
                  className: he.dragHandle,
                  src: t(35902),
                  alt: l.formatMessage(d.sc_menu_drag_handle)
                })
              }), w ? (0, o.jsx)(fe, {
                sc: ke,
                charListHidden: f,
                hideCharacterList: O,
                refCharacterListDesktop: E,
                menuPadding: P,
                longCharList: M,
                setLongCharList: I,
                isMobileMode: z,
                setIsMobileMode: T,
                location: e,
                onNavigate: a
              }) : (0, o.jsx)(pe, {
                sc: ke,
                navOpen: C,
                location: e,
                onNavigate: a
              })]
            }), (0, o.jsx)("div", {
              className: [he.scOverlay, C ? he.navOpen : ""].join(" "),
              "data-logged-in": w
            })]
          })
        }),
        ve = W(({
          setOtherHeaderDropdowns: e
        }) => {
          const a = (0, i.useIntl)(),
            {
              data: s,
              loggedIn: l
            } = (0, r.useRockstarUser)(),
            {
              charactersNeeded: c,
              currentCharId: _,
              navOpen: u,
              setNavOpen: g
            } = (0, r.useRockstarUserState)(),
            {
              track: p
            } = (0, r.useGtmTrack)(),
            [m, f] = (0, n.useState)(),
            [h, k] = (0, n.useState)(!1),
            [b, v] = (0, n.useState)([]);
          (0, n.useEffect)(() => {
            v(s?.characters?.[c] ?? [])
          }, [s, c]);
          const w = (0, n.useCallback)(a => {
            a.stopPropagation(), g(!u), 1 == !u && e(null), p({
              event: "account_menu_click",
              element_placement: "account menu",
              text: u ? "close" : "open"
            })
          }, [u]);
          return (0, n.useEffect)(() => {
            k(!!b?.[_]?.mugshotUrl)
          }, [b, _]), (0, n.useEffect)(() => {
            f((() => {
              switch (l) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return b?.[_]?.mugshotUrl ?? s?.avatar
              }
            })())
          }, [s, b, _, l]), (0, o.jsxs)("button", {
            className: "rockstargames-modules-core-footeree811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": a.formatMessage(u ? d.sc_menu_close : d.sc_menu_open),
            "aria-expanded": u,
            type: "button",
            onClick: w,
            "data-mugshot": h,
            "data-testid": "avatarMenuButtonDesktop",
            "data-logged-in": Boolean(l),
            children: [(0, o.jsx)("img", {
              className: "rockstargames-modules-core-footera917b58ca28b68550a1aa5d99c7eb998",
              src: m,
              alt: s?.nickname || "",
              onError: () => {
                let e = t(73091);
                h && (e = t(5931)), f(e)
              }
            }), l && h && (0, o.jsx)("div", {
              className: "rockstargames-modules-core-footerc06123ceae7ca4759ec8b1a5197823db",
              children: (0, o.jsx)(S, {
                platform: b?.[_]?.platform,
                tagSize: j.small
              })
            }), l && (0, o.jsx)("div", {
              className: "rockstargames-modules-core-footerc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": b?.[_]?.platform ?? null
            })]
          })
        })
    },
    35902(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    32810(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    73091(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f97af80b5511804c9842052dacb20f2a.png"
    },
    5931(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    }
  }
]);