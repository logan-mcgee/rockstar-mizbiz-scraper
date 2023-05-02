"use strict";
(self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [77], {
    77: (e, a, t) => {
      t.r(a), t.d(a, {
        Menu: () => C,
        MenuButton: () => w,
        haultUserPing: () => y.q,
        scConfig: () => n.Z,
        useGtmTrack: () => s.Z,
        useRockstarUser: () => c.useRockstarUser,
        useRpCategory: () => h,
        useScConfig: () => o
      });
      var s = t(94),
        c = t(675),
        r = t(859),
        n = t(36);
      const o = () => (0, r.useReactiveVar)(n.Z);
      var l = t(822),
        i = t(929);
      var d = t(322);
      const m = e => {
          let {
            text: a,
            target: t,
            href: c,
            analytics: r,
            hasNotification: n = !1
          } = e;
          const {
            track: o
          } = (0, s.Z)();
          return (0, d.jsxs)("a", {
            className: "f1f57df4d89347d3a5a4",
            title: a,
            href: c,
            target: t,
            rel: "noreferrer",
            onClick: () => {
              o({
                ...r,
                event_label: a.toLowerCase(),
                text: a.toLowerCase(),
                link_url: c
              })
            },
            children: [a, !0 === n && (0, d.jsx)("span", {
              className: "dfdd843dadc8fe0cc756"
            })]
          }, a)
        },
        u = (0, i.withTranslations)((e => {
          let {
            sc: a,
            t
          } = e;
          const s = (0, i.useLocale)(),
            c = (0, i.toScLocaleString)(s),
            r = `${document.location.pathname}${document.location.search}`,
            n = `${a.login}?returnUrl=${r}&lang=${c}`,
            o = `${a.signup}&returnUrl=${r}&lang=${c}`,
            u = [{
              text: t("Sign In"),
              href: n,
              analytics: {
                event_action: "login",
                event_category: "cta",
                event: "cta_login"
              }
            }, {
              text: t("Join Social Club"),
              href: o,
              analytics: {
                event_action: "register",
                event_category: "cta",
                event: "cta_signup"
              }
            }];
          return (0, d.jsx)("nav", {
            className: "b7294b05abb682e53b6c",
            "aria-label": "sc menu",
            title: t("Social Club"),
            children: (0, d.jsx)("div", {
              className: "c09cf59bedf70da20f41",
              "data-logged-in": "false",
              children: u.map((e => (0, l.createElement)(m, {
                ...e,
                key: e.text
              })))
            })
          })
        })),
        f = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(48),
                alt: "PC"
              } : {
                src: t(816),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: t(466),
                alt: "PS4"
              } : {
                src: t(848),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: t(175),
                alt: "PS5"
              } : {
                src: t(731),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(733),
                alt: "Xbox One"
              } : {
                src: t(3),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(647),
                alt: "Xbox Series X|S"
              } : {
                src: t(748),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        h = e => t(e < 100 ? 910 : e > 99 && e < 500 ? 185 : e > 499 && e < 750 ? 60 : 981),
        g = (e, a) => {
          const [t, s] = (0, l.useState)(0);
          return (0, l.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, c = t.getBoundingClientRect(), {
                width: r
              } = c;
              let n = r;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                n += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(n)
            }
          }), [e]), t
        },
        p = (0, i.withTranslations)((e => {
          let {
            characterData: a,
            setCurrentCharId: r,
            currentCharId: n
          } = e;
          const {
            track: o
          } = (0, s.Z)(), {
            setMobbileCardWidth: i
          } = (0, c.useRockstarUser)(), m = (0, l.createRef)(), u = g(m, !0), {
            platform: p,
            platformUsername: b,
            mugshotUrl: v,
            stats: x
          } = a, [k, _] = (0, l.useState)(v), [S] = (0, l.useState)(a.characterId), C = f(p, "large"), N = n === S;
          return (0, l.useEffect)((() => {
            i(u)
          }), [u]), (0, d.jsxs)("button", {
            className: "dee06086788899b4002f",
            type: "button",
            "aria-hidden": N,
            onClick: e => {
              e.stopPropagation(), r(S);
              let a = "";
              "pc" === p ? a = "PC" : "ps4" === p ? a = "PS4" : "ps5" === p ? a = "PS5" : "xboxone" === p ? a = "Xbox One" : "xboxsx" === p && (a = "Xbox Series X|S"), o({
                event: "character_selector_select",
                event_category: "character_selector",
                event_action: "select",
                event_label: a,
                position: S
              })
            },
            ref: m,
            children: [(0, d.jsx)("div", {
              className: "ff6279c9ff9b88f1f1f6",
              "data-size": "small",
              children: (0, d.jsx)("img", {
                src: k,
                alt: b,
                onError: () => {
                  _(t(493))
                }
              })
            }), (0, d.jsxs)("div", {
              className: "db0c1a05fff15a2418f2",
              children: [(0, d.jsxs)("div", {
                className: "fd06288478a14cd32f05",
                children: [(0, d.jsx)("img", {
                  src: C.src,
                  alt: C.alt
                }), (0, d.jsx)("div", {
                  className: "e176d7a04bacf4e0d725",
                  "data-size": "small",
                  children: b
                })]
              }), (0, d.jsx)("div", {
                className: "c08f37e001f1b148b046",
                children: (0, d.jsxs)("div", {
                  className: "f4e32f1fa3917b84d463",
                  children: [(0, d.jsx)("img", {
                    className: "f519c818d4a8d1520bfe",
                    src: h(x.overview.rank.value),
                    alt: "RP Category"
                  }), (0, d.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        })),
        b = {
          scNavWrapper: "c3de120a19e6aafa6a68",
          rpLevel: "a2e820529d46c5f70e84",
          rpIcon: "af0e82b0e5d21b75663d",
          scProfileDetails: "c1282f49e4228a2879de",
          scAvatar: "cf0c4dbbcd8335929278",
          scAvatarPlatform: "c525dacab0321297baef",
          scProfileStats: "b99e82fade4d0e6ee847",
          scNames: "d1c87934eb071ff85281",
          scTagsNames: "d92a6e128c9fe3167010",
          scUserName: "bd8f666c94e4ab99427e",
          scCrewName: "a3366651dd3b56c45d56",
          scCrewRankBar: "dc7ce2270b1c04168b20",
          scCrewRankBarItem: "c0f3bee37355ef121582",
          scProgress: "b3232d788aa7f1095ffe",
          scRpLevel: "aeca1876088169a80360",
          scRpIcon: "f3226c91d969e7ea84f3",
          scMoney: "f1091a6533945fd2eee3",
          scCash: "cc969e3d73b7e5134a6f",
          scBank: "e575e510309d38665272"
        },
        v = (0, i.withTranslations)((e => {
          let {
            user: a,
            character: c,
            platformTag: r,
            crews: n
          } = e;
          const {
            track: o
          } = (0, s.Z)(), [i, m] = (0, l.useState)(null), [u, f] = (0, l.useState)(null), [g, p] = (0, l.useState)(!1), [v, x] = (0, l.useState)(-1), [k, _] = (0, l.useState)([]), [S, C] = (0, l.useState)(0), N = t(493), [j, w] = (0, l.useState)("0"), [y, E] = (0, l.useState)("0"), L = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), P = () => {
            R((0, d.jsx)("img", {
              src: N,
              alt: a.nickname
            }))
          }, [I, R] = (0, l.useState)((0, d.jsx)("img", {
            className: b.scAvatarImg,
            src: c.mugshotUrl,
            alt: a.nickname,
            onError: P
          }));
          (0, l.useEffect)((() => {
            R((0, d.jsx)("img", {
              src: c.mugshotUrl,
              alt: a.nickname,
              onError: P
            })), w(L(c.stats.overview.bank.value)), E(L(c.stats.overview.cash.value)), C(c.stats.overview.rank.value)
          }), [c, a]), (0, l.useEffect)((() => {
            n && n.forEach((e => {
              !0 === e.isPrimary && (m(e.crewTag), f(e.crewColour), x(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            }))
          }), [n]), (0, l.useEffect)((() => {
            const e = [];
            if (!g && v > -1)
              for (let a = 5; a > v; a -= 1) e.push((0, d.jsx)("div", {
                className: b.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            _(e)
          }), [v, g, u]);
          const T = e => {
            e.stopPropagation(), o({
              event: "character_selector_profile_click",
              event_category: "character_selector",
              event_action: "profile_click",
              event_label: r.alt,
              link_url: void 0
            })
          };
          return (0, d.jsxs)("div", {
            className: b.scProfileDetails,
            onClick: T,
            onKeyUp: T,
            role: "button",
            tabIndex: 0,
            children: [(0, d.jsxs)("div", {
              className: b.scAvatar,
              children: [I, (0, d.jsx)("div", {
                className: b.scAvatarPlatform,
                "data-platform": c.platform,
                children: (0, d.jsx)("img", {
                  src: r.src,
                  alt: r.alt
                })
              })]
            }), (0, d.jsxs)("div", {
              className: b.scProfileStats,
              children: [(0, d.jsx)("div", {
                className: b.scNames,
                children: (0, d.jsxs)("div", {
                  className: b.scTagsNames,
                  children: [(0, d.jsx)("span", {
                    className: b.scUserName,
                    children: c.platformUsername
                  }), i && (0, d.jsxs)("span", {
                    className: b.scCrewName,
                    "data-arrow-tag": g,
                    children: [i, !g && (0, d.jsx)("div", {
                      className: b.scCrewRankBar,
                      children: k
                    })]
                  })]
                })
              }), (0, d.jsxs)("div", {
                className: b.scProgress,
                children: [(0, d.jsxs)("div", {
                  className: b.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: b.scRpIcon,
                    src: h(S),
                    alt: "RP Category"
                  }), (0, d.jsx)("span", {
                    children: c.stats.overview.rank.value
                  })]
                }), (0, d.jsxs)("div", {
                  className: b.scMoney,
                  children: [(0, d.jsxs)("span", {
                    className: b.scBank,
                    children: ["$", j]
                  }), (0, d.jsxs)("span", {
                    className: b.scCash,
                    children: ["$", y]
                  })]
                })]
              })]
            })]
          })
        })),
        x = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: c = null,
            slideClickCallback: r = null,
            children: n = [],
            disablePager: o = !1,
            disableSwiper: i = !1
          } = e;
          const m = (0, l.createRef)(),
            u = g(m, !1),
            [f, h] = (0, l.useState)(!1),
            [p, b] = (0, l.useState)(0),
            [v, x] = (0, l.useState)(0),
            [k, _] = (0, l.useState)([s]),
            [S, C] = (0, l.useState)(k[0]),
            [N, j] = (0, l.useState)(252),
            [w, y] = (0, l.useState)(0),
            [E, L] = (0, l.useState)([]),
            [P, I] = (0, l.useState)([]),
            [R, T] = (0, l.useState)(!1),
            M = e => {
              if (!0 === f || !0 === i) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              x(a)
            },
            U = e => {
              if (!0 === f || 0 === v || !0 === i) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > v ? 1 : -1,
                r = Math.abs(v - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === f) return;
                h(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                b(e), C(k[e]), c && c(e)
              })() : (() => {
                if (!0 === f) return;
                h(!0);
                let e = p + 1 >= k.length ? k.length - 1 : p + 1;
                e < 0 && (e = 0), b(e), C(k[e]), c && c(e)
              })(), x(0)) : C(k[p] + r * s)
            },
            $ = () => {
              !0 !== f && !0 !== i && (h(!0), !0 !== f && (C(k[p]), x(0)))
            };
          return (0, l.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, l.createRef)())
            })), L(e)
          }), [n]), (0, l.useEffect)((() => {
            if (E.length < 1) return;
            j(E[0]?.current?.clientWidth || 0);
            const e = E[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            y(t + a)
          }), [E]), (0, l.useEffect)((() => {
            !1 !== f && setTimeout((() => {
              h(!1)
            }), t)
          }), [f, t]), (0, l.useEffect)((() => {
            _(n.map(((e, a) => (e => {
              let a = 0;
              const t = n.length;
              return 1 === t ? .5 * u - .5 * N - 2 * s + w : (0 === e && (a = s - e * N), e === t - 1 && t > 1 && (a = t * N * -1 + (u - (s - w))), e > 0 && e < t - 1 && (a = e * N * -1 + (.5 * u - .5 * N + .5 * w)), a)
            })(a)))), 1 === n.length ? T(!0) : T(!1)
          }), [m.current, n, u]), (0, l.useEffect)((() => {
            const e = (a = p, n.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            I(e)
          }), [n, p]), (0, l.useEffect)((() => {
            !0 !== o && !0 !== i || C(k[0])
          }), [i, o, k]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("div", {
              className: "bc373b520fbdca8d2f0f",
              ref: m,
              onTouchStart: M,
              onTouchMove: U,
              onTouchEnd: $,
              onMouseDown: M,
              onMouseMove: U,
              onMouseUp: $,
              onClick: () => {
                null !== r && r(p)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, d.jsx)("div", {
                className: "b996a7ad30d05022b3d6",
                "data-interaction-blocked": f,
                "data-single-item": R,
                style: {
                  transform: R ? null : `translateX(${S}px)`
                },
                children: n.map(((e, a) => (0, d.jsx)("div", {
                  className: "eaede6f31bdcb7819f48",
                  ref: E[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), P.length > 1 && !1 === o && (0, d.jsx)("div", {
              className: "b27bbf1bb846c8fd855b",
              children: P.map((e => (0, d.jsx)("div", {
                className: "af5997d414baf32e73b3",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        k = {
          scNavWrapper: "b37a25bc6761bd882dab",
          rpLevel: "de9cbe40526987515089",
          rpIcon: "c26aa647a6b6ed6ce54f",
          scProfile: "aa422ee77017648494c4",
          scCharacterSelector: "a43958d6263ec45d37c8",
          scCharacterSelectBtn: "ba70cc2e07922955d3eb",
          open: "e220b500bf382530bec5",
          scCharacterList: "ab26bb433acbeec7eedf",
          scNav: "dcf1528386921ba96c80",
          scNavHeader: "ce29cf42c14f31f963f7",
          scNavWrap: "c866301c326745076636"
        },
        _ = (0, i.withTranslations)((e => {
          let {
            sc: a,
            t: r,
            user: n,
            charListHidden: o,
            hideCharacterList: u,
            refCharacterListDesktop: h,
            menuPadding: b,
            longCharList: _,
            setLongCharList: S,
            isMobileMode: C,
            setIsMobileMode: N
          } = e;
          const {
            lsSettings: j,
            mutateLSSettings: w
          } = (0, i.useRockstarWebLSSettings)(), {
            track: y
          } = (0, s.Z)(), {
            currentCharId: E,
            hasNotification: L,
            setCurrentCharId: P,
            characters: I,
            crews: R,
            mobileCardWidth: T,
            charactersNeeded: M,
            navOpen: U
          } = (0, c.useRockstarUser)(), [$, z] = (0, l.useState)(null), [O, X] = (0, l.useState)(null), [H, D] = (0, l.useState)(!1), [W, B] = (0, l.useState)(!1), [Z, A] = (0, l.useState)(0), [F, G] = (0, l.useState)(0), [V, K] = (0, l.useState)(0), Y = (0, l.createRef)(), q = g(Y, !1), J = (0, l.createRef)(), [Q, ee] = (0, l.useState)(0), ae = e => {
            if (0 === e.length) return e;
            const a = e.map(((e, a) => ({
              ...e,
              characterId: a
            })));
            return a
          }, [te, se] = (0, l.useState)(ae(I?.gtao ?? [])), ce = {
            event_action: "click",
            event_category: "account_menu",
            event: "account_menu_click",
            environment: ""
          }, re = [{
            text: r("View My Profile"),
            href: n.profile_link,
            target: "_blank",
            analytics: ce
          }, {
            text: r("Settings"),
            href: `https://${a.host}.rockstargames.com/settings`,
            target: "_blank",
            analytics: ce
          }, {
            text: r("Crews"),
            href: `https://${a.host}.rockstargames.com/member/${n.nickname}/crews`,
            target: "_blank",
            analytics: ce
          }, {
            text: r("Friends"),
            href: `https://${a.host}.rockstargames.com/member/${n.nickname}/friends`,
            target: "_blank",
            analytics: ce
          }, {
            text: r("Notifications"),
            href: `https://${a.host}.rockstargames.com/notifications`,
            target: "_blank",
            hasNotification: L,
            analytics: ce
          }, {
            text: r("Log Out"),
            href: `${a.logout}?returnUrl=${document.location.pathname}${document.location.search}`,
            target: "_self",
            analytics: ce
          }], ne = () => {
            if (J.current) {
              const {
                current: e
              } = J, a = e?.scrollHeight;
              ee(a)
            }
          };
          return (0, l.useEffect)((() => {
            const e = () => {
              G(window.innerWidth), K(window.innerHeight), window.innerWidth < 768 || window.innerHeight < 649 ? N(!0) : N(!1), u(!0)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, l.useEffect)((() => {
            let e = te.length - 1;
            e < 0 && (e = 0), A(e);
            const a = te.length > 0 ? te[E] ?? te[0] : null;
            if (!a) return;
            const t = null !== a ? f(a.platform, "large") : null;
            X(t), z(a), te.length > 1 ? D(!0) : D(!1), S(te.length - 1 > 3)
          }), [E, te]), (0, l.useEffect)((() => {
            se(ae(I?.gtao ?? []))
          }), [I]), (0, l.useEffect)((() => {
            B(b + T * Z < q)
          }), [Z, C, F, te]), (0, l.useEffect)((() => {
            ne(), setTimeout(ne, 1e3)
          }), [J, F, V]), (0, l.useEffect)((() => {
            P(j?.currentCharId ?? 0)
          }), [j]), (0, l.useEffect)((() => {
            null !== E && w({
              key: "currentCharId",
              value: E
            })
          }), [E]), (0, d.jsxs)(d.Fragment, {
            children: [null !== $ && "gtao" === M && (0, d.jsxs)("div", {
              className: k.scProfile,
              children: [(0, d.jsx)(v, {
                s: k,
                user: n,
                character: $,
                platformTag: O,
                crews: R
              }), !0 === H && (0, d.jsxs)("div", {
                className: k.scCharacterSelector,
                children: [(0, d.jsx)("button", {
                  className: k.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !o;
                    u(a), y({
                      event: !0 === a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": o,
                  children: (0, d.jsx)("span", {
                    children: r("Switch Character")
                  })
                }), !1 === C && (0, d.jsx)("div", {
                  className: k.scCharacterList,
                  "data-long-list": _,
                  "aria-hidden": o,
                  ref: h,
                  children: te.map(((e, a) => (0, d.jsx)(p, {
                    user: n,
                    characterData: e,
                    setCurrentCharId: P,
                    currentCharId: E,
                    characterId: a
                  }, e.mugshotUrl)))
                }), !0 === C && (0, d.jsx)("div", {
                  className: k.scCharacterList,
                  "data-single-item": 2 === te.length,
                  "data-swiper-disabled": W,
                  "aria-hidden": o,
                  ref: Y,
                  children: (0, d.jsx)(x, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      y({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: W,
                    disableSwiper: W,
                    children: te.filter(((e, a) => a !== E)).map((e => (0, l.createElement)(p, {
                      user: n,
                      characterData: e,
                      setCurrentCharId: P,
                      currentCharId: E,
                      key: e.mugshotUrl
                    })))
                  })
                })]
              })]
            }), (0, d.jsxs)("nav", {
              className: k.scNav,
              children: [(0, d.jsxs)("button", {
                className: k.scNavHeader,
                type: "button",
                "data-opened": o,
                "data-nav-opened": U,
                onClick: e => {
                  e.stopPropagation(), !1 === o && u(!0)
                },
                children: [(0, d.jsx)("span", {
                  children: n.nickname
                }), (0, d.jsx)("img", {
                  src: t(456),
                  alt: "Social Club"
                })]
              }), (0, d.jsx)("div", {
                className: k.scNavWrap,
                "data-opened": o,
                "data-logged-in": "true",
                ref: J,
                style: {
                  maxHeight: `${Q}px`
                },
                children: re.map((e => (0, l.createElement)(m, {
                  ...e,
                  key: e.text
                })))
              })]
            })]
          })
        })),
        S = {
          scNavWrapper: "d7bac12a82ffc52818c3",
          rpLevel: "e2e5c1bfb71e9ff95838",
          rpIcon: "cd60c6f857f6da4611af",
          scMenu: "fb9966f65cb155635c74",
          navOpen: "ff3d86ee58e3e40e9424",
          dragHandle: "dc573b70b5fa74fbc251",
          dragHandleBtn: "cbaf32fb58cd4992ca4e",
          scOverlay: "d6934ce9e7a8c717c2f5"
        },
        C = (0, i.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            navHidden: s = !1
          } = (0, r.useState)(), o = (0, c.useRockstarUser)(), [i, m] = (0, l.useState)(!0), [f, h] = (0, l.useState)(!1), [g, p] = (0, l.useState)(null), b = (0, r.useReactiveVar)(n.Z), {
            navOpen: v,
            setNavOpen: x
          } = o, k = o?.data, C = void 0 !== k, N = (0, l.useRef)(), [j, w] = (0, l.useState)(0), y = (0, l.createRef)(), [E, L] = (0, l.useState)(!1), [P, I] = (0, l.useState)(0), [R, T] = (0, l.useState)(!1), M = (0, l.useCallback)((e => {
            m(e), N.current && !0 === e && (N.current.scrollTop = 0)
          }), [N]);
          (0, l.useEffect)((() => {
            N.current && (!1 === i && !1 === f && (N.current.style.height = `${N.current.scrollHeight}px`), !0 === i && (N.current.style.height = null))
          }), [i, N, f]), (0, l.useEffect)((() => {
            p(!!k && k.user)
          }), [k]), (0, l.useEffect)((() => {
            const e = () => {
              x(!1), M(!0)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, l.useEffect)((() => {
            x(!1), M(!0)
          }), [s]), (0, l.useEffect)((() => {
            if (y.current) {
              const {
                current: e
              } = y, a = window.getComputedStyle(e);
              w(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [y]);
          const [U, $] = (0, l.useState)(!1);
          return (0, l.useEffect)((() => {
            !0 === E && (!0 === v ? (document.body.style.overflowY = "hidden", $(!0)) : U && ($(!1), document.body.style.overflowY = "auto"))
          }), [v, E]), (0, l.useEffect)((() => {
            T(window.navigator.userAgent.includes("Mac"))
          }), []), null === g ? null : (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("div", {
              className: [S.scMenu, v ? S.navOpen : ""].join(" "),
              "data-logged-in": C,
              "data-mac-browser": R,
              ref: y,
              children: [(0, d.jsx)("button", {
                className: S.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  I(a)
                },
                onTouchMove: e => {
                  if (0 === P) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(P - a) > 1 && (I(0), x(!1))
                },
                children: (0, d.jsx)("img", {
                  className: S.dragHandle,
                  src: t(762),
                  alt: a("Drag Menu Handle")
                })
              }), C ? (0, d.jsx)(_, {
                user: g,
                sc: b,
                charListHidden: i,
                hideCharacterList: M,
                refCharacterListDesktop: N,
                menuPadding: j,
                longCharList: f,
                setLongCharList: h,
                isMobileMode: E,
                setIsMobileMode: L
              }) : (0, d.jsx)(u, {
                sc: b,
                navOpen: v
              })]
            }), (0, d.jsx)("div", {
              className: [S.scOverlay, v ? S.navOpen : ""].join(" "),
              "data-logged-in": C
            })]
          })
        })),
        N = t(493),
        j = t(916),
        w = (0, i.withTranslations)((() => {
          const {
            data: e,
            characters: a,
            setNavOpen: t,
            navOpen: r,
            currentCharId: n,
            charactersNeeded: o
          } = (0, c.useRockstarUser)(), {
            track: i
          } = (0, s.Z)(), [m, u] = (0, l.useState)(null), [h, g] = (0, l.useState)(!1), [p, b] = (0, l.useState)(null), [v, x] = (0, l.useState)(!1), k = (0, l.useCallback)((e => {
            e.stopPropagation(), t(!r), i({
              event_action: "click",
              event_category: "account_menu",
              event: "account_menu_click",
              event_label: r ? "close" : "open",
              text: r ? "close" : "open"
            })
          }), [r]);
          return (0, l.useEffect)((() => {
            const t = e?.user?.id ?? !1,
              s = a?.[o]?.[n]?.mugshotUrl ?? e?.user?.avatar ?? (t ? N : j),
              c = f(a?.[o]?.[n]?.platform, "small") ?? null;
            b(c), u(s), g(t), x(!!a?.[o]?.[n]?.mugshotUrl)
          }), [e, o, a, n, N, j]), (0, d.jsxs)("button", {
            className: "f60d175890a158a2eeca",
            "data-img-set": v,
            "aria-label": "Toggle Social Club Menu",
            type: "button",
            onClick: e => k(e),
            children: [(0, d.jsx)("img", {
              className: "a9651d22866bf58ca4bd",
              src: m || "",
              onError: () => {
                u(N)
              },
              alt: e?.user?.nickname || ""
            }), h && null !== p && (0, d.jsx)("img", {
              className: "e8c699c608f17bc081aa",
              src: p.src,
              alt: p.alt
            }), h && (0, d.jsx)("div", {
              className: "acba28aeab3965a49753",
              "data-platform": a?.[o]?.[n]?.platform ?? null
            })]
          })
        }));
      var y = t(337)
    },
    456: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/04f91124ddca6945134c.svg"
    },
    762: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/cfb657cdc749132fc8fd.svg"
    },
    916: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/61ed3b631437f6495d9c.svg"
    },
    493: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/8a7ecf45a9551607393f.png"
    },
    48: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/72b01a5fe559550897c7.svg"
    },
    466: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/16fc79e538f405dac692.svg"
    },
    175: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3056dd100cdc9af4c8f8.svg"
    },
    733: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b9049c3fc2e23432cd99.svg"
    },
    647: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b38c704a4f0f93dbaa71.svg"
    },
    816: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e18cbaeff16e28472704.svg"
    },
    848: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/73fac91764a07506aa44.svg"
    },
    731: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/ffdc38b81812447f1a52.svg"
    },
    3: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e06e7d21fd0c72e7b049.svg"
    },
    748: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/eaef99f273a784a715fc.svg"
    },
    910: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c56e571a937094f77aba.svg"
    },
    185: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/dc0ee5af18bf15f7ce11.svg"
    },
    981: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/55e4ef9f3127c7c76d92.svg"
    },
    60: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/83bc0bb48baad355b5f3.svg"
    }
  }
]);