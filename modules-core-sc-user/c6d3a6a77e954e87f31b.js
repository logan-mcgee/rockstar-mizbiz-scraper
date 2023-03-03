"use strict";
(self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [570], {
    570: (e, a, t) => {
      t.r(a), t.d(a, {
        Menu: () => j,
        MenuButton: () => y,
        scConfig: () => o.Z,
        useGtmTrack: () => n,
        useRockstarUser: () => r.useRockstarUser,
        useRpCategory: () => g,
        useScConfig: () => i
      });
      var s = t(822),
        c = t(331),
        r = t(580);
      const n = () => {
        const {
          data: e
        } = (0, r.useRockstarUser)();
        return {
          track: (0, s.useCallback)((a => {
            const t = {
              ...a,
              member_id: e?.user?.id ?? null
            };
            (0, c.track)(t)
          }), [e])
        }
      };
      var l = t(859),
        o = t(50);
      const i = () => (0, l.useReactiveVar)(o.Z);
      var d = t(929);
      var u = t(668);
      const f = e => {
          let {
            text: a,
            target: t,
            href: s,
            analytics: c,
            hasNotification: r = !1
          } = e;
          const {
            track: l
          } = n();
          return (0, u.jsxs)("a", {
            className: "f1f57df4d89347d3a5a4",
            title: a,
            href: s,
            target: t,
            rel: "noreferrer",
            onClick: () => {
              l({
                ...c,
                event_label: a.toLowerCase(),
                text: a.toLowerCase(),
                link_url: s
              })
            },
            children: [a, !0 === r && (0, u.jsx)("span", {
              className: "dfdd843dadc8fe0cc756"
            })]
          }, a)
        },
        h = (0, d.withTranslations)((e => {
          let {
            sc: a,
            t
          } = e;
          const c = (0, d.useLocale)(),
            r = (0, d.toScLocaleString)(c),
            n = `${document.location.pathname}${document.location.search}`,
            l = `${a.login}?returnUrl=${n}&lang=${r}`,
            o = `${a.signup}&returnUrl=${n}&lang=${r}`,
            i = [{
              text: t("Sign In"),
              href: l,
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
          return (0, u.jsx)("nav", {
            className: "b7294b05abb682e53b6c",
            "aria-label": "sc menu",
            title: t("Social Club"),
            children: (0, u.jsx)("div", {
              className: "c09cf59bedf70da20f41",
              "data-logged-in": "false",
              children: i.map((e => (0, s.createElement)(f, {
                ...e,
                key: e.text
              })))
            })
          })
        })),
        m = (e, a) => {
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
        g = e => t(e < 100 ? 910 : e > 99 && e < 500 ? 185 : e > 499 && e < 750 ? 60 : 981),
        p = (e, a) => {
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
        b = (0, d.withTranslations)((e => {
          let {
            characterData: a,
            setCurrentCharId: c,
            currentCharId: l
          } = e;
          const {
            track: o
          } = n(), {
            setMobbileCardWidth: i
          } = (0, r.useRockstarUser)(), d = (0, s.createRef)(), f = p(d, !0), {
            platform: h,
            platformUsername: b,
            mugshotUrl: v,
            stats: x
          } = a, [S, k] = (0, s.useState)(v), [C] = (0, s.useState)(a.characterId), N = m(h, "large"), j = l === C;
          return (0, s.useEffect)((() => {
            i(f)
          }), [f]), (0, u.jsxs)("button", {
            className: "dee06086788899b4002f",
            type: "button",
            "aria-hidden": j,
            onClick: e => {
              e.stopPropagation(), c(C);
              let a = "";
              "pc" === h ? a = "PC" : "ps4" === h ? a = "PS4" : "ps5" === h ? a = "PS5" : "xboxone" === h ? a = "Xbox One" : "xboxsx" === h && (a = "Xbox Series X|S"), o({
                event: "character_selector_select",
                event_category: "character_selector",
                event_action: "select",
                event_label: a,
                position: C
              })
            },
            ref: d,
            children: [(0, u.jsx)("div", {
              className: "ff6279c9ff9b88f1f1f6",
              "data-size": "small",
              children: (0, u.jsx)("img", {
                src: S,
                alt: b,
                onError: () => {
                  k(t(493))
                }
              })
            }), (0, u.jsxs)("div", {
              className: "db0c1a05fff15a2418f2",
              children: [(0, u.jsxs)("div", {
                className: "fd06288478a14cd32f05",
                children: [(0, u.jsx)("img", {
                  src: N.src,
                  alt: N.alt
                }), (0, u.jsx)("div", {
                  className: "e176d7a04bacf4e0d725",
                  "data-size": "small",
                  children: b
                })]
              }), (0, u.jsx)("div", {
                className: "c08f37e001f1b148b046",
                children: (0, u.jsxs)("div", {
                  className: "f4e32f1fa3917b84d463",
                  children: [(0, u.jsx)("img", {
                    className: "f519c818d4a8d1520bfe",
                    src: g(x.overview.rank.value),
                    alt: "RP Category"
                  }), (0, u.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        })),
        v = {
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
        x = (0, d.withTranslations)((e => {
          let {
            user: a,
            character: c,
            platformTag: r,
            crews: l
          } = e;
          const {
            track: o
          } = n(), [i, d] = (0, s.useState)(null), [f, h] = (0, s.useState)(null), [m, p] = (0, s.useState)(!1), [b, x] = (0, s.useState)(-1), [S, k] = (0, s.useState)([]), [C, N] = (0, s.useState)(0), j = t(493), [w, _] = (0, s.useState)("0"), [y, E] = (0, s.useState)("0"), L = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), P = () => {
            R((0, u.jsx)("img", {
              src: j,
              alt: a.nickname
            }))
          }, [I, R] = (0, s.useState)((0, u.jsx)("img", {
            className: v.scAvatarImg,
            src: c.mugshotUrl,
            alt: a.nickname,
            onError: P
          }));
          (0, s.useEffect)((() => {
            R((0, u.jsx)("img", {
              src: c.mugshotUrl,
              alt: a.nickname,
              onError: P
            })), _(L(c.stats.overview.bank.value)), E(L(c.stats.overview.cash.value)), N(c.stats.overview.rank.value)
          }), [c, a]), (0, s.useEffect)((() => {
            l && l.forEach((e => {
              !0 === e.isPrimary && (d(e.crewTag), h(e.crewColour), x(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            }))
          }), [l]), (0, s.useEffect)((() => {
            const e = [];
            if (!m && b > -1)
              for (let a = 5; a > b; a -= 1) e.push((0, u.jsx)("div", {
                className: v.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${a}`));
            k(e)
          }), [b, m, f]);
          const T = e => {
            e.stopPropagation(), o({
              event: "character_selector_profile_click",
              event_category: "character_selector",
              event_action: "profile_click",
              event_label: r.alt,
              link_url: void 0
            })
          };
          return (0, u.jsxs)("div", {
            className: v.scProfileDetails,
            onClick: T,
            onKeyUp: T,
            role: "button",
            tabIndex: 0,
            children: [(0, u.jsxs)("div", {
              className: v.scAvatar,
              children: [I, (0, u.jsx)("div", {
                className: v.scAvatarPlatform,
                "data-platform": c.platform,
                children: (0, u.jsx)("img", {
                  src: r.src,
                  alt: r.alt
                })
              })]
            }), (0, u.jsxs)("div", {
              className: v.scProfileStats,
              children: [(0, u.jsx)("div", {
                className: v.scNames,
                children: (0, u.jsxs)("div", {
                  className: v.scTagsNames,
                  children: [(0, u.jsx)("span", {
                    className: v.scUserName,
                    children: c.platformUsername
                  }), i && (0, u.jsxs)("span", {
                    className: v.scCrewName,
                    "data-arrow-tag": m,
                    children: [i, !m && (0, u.jsx)("div", {
                      className: v.scCrewRankBar,
                      children: S
                    })]
                  })]
                })
              }), (0, u.jsxs)("div", {
                className: v.scProgress,
                children: [(0, u.jsxs)("div", {
                  className: v.scRpLevel,
                  children: [(0, u.jsx)("img", {
                    className: v.scRpIcon,
                    src: g(C),
                    alt: "RP Category"
                  }), (0, u.jsx)("span", {
                    children: c.stats.overview.rank.value
                  })]
                }), (0, u.jsxs)("div", {
                  className: v.scMoney,
                  children: [(0, u.jsxs)("span", {
                    className: v.scBank,
                    children: ["$", w]
                  }), (0, u.jsxs)("span", {
                    className: v.scCash,
                    children: ["$", y]
                  })]
                })]
              })]
            })]
          })
        })),
        S = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: c = 17,
            slideChangeCallback: r = null,
            slideClickCallback: n = null,
            children: l = [],
            disablePager: o = !1,
            disableSwiper: i = !1
          } = e;
          const d = (0, s.createRef)(),
            f = p(d, !1),
            [h, m] = (0, s.useState)(!1),
            [g, b] = (0, s.useState)(0),
            [v, x] = (0, s.useState)(0),
            [S, k] = (0, s.useState)([c]),
            [C, N] = (0, s.useState)(S[0]),
            [j, w] = (0, s.useState)(252),
            [_, y] = (0, s.useState)(0),
            [E, L] = (0, s.useState)([]),
            [P, I] = (0, s.useState)([]),
            [R, T] = (0, s.useState)(!1),
            M = e => {
              if (!0 === h || !0 === i) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              x(a)
            },
            U = e => {
              if (!0 === h || 0 === v || !0 === i) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > v ? 1 : -1,
                c = Math.abs(v - t);
              c > a ? (s > 0 ? (() => {
                if (!0 === h) return;
                m(!0);
                const e = g - 1 < 0 ? 0 : g - 1;
                b(e), N(S[e]), r && r(e)
              })() : (() => {
                if (!0 === h) return;
                m(!0);
                let e = g + 1 >= S.length ? S.length - 1 : g + 1;
                e < 0 && (e = 0), b(e), N(S[e]), r && r(e)
              })(), x(0)) : N(S[g] + c * s)
            },
            $ = () => {
              !0 !== h && !0 !== i && (m(!0), !0 !== h && (N(S[g]), x(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            l.forEach((() => {
              e.push((0, s.createRef)())
            })), L(e)
          }), [l]), (0, s.useEffect)((() => {
            if (E.length < 1) return;
            w(E[0]?.current?.clientWidth || 0);
            const e = E[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            y(t + a)
          }), [E]), (0, s.useEffect)((() => {
            !1 !== h && setTimeout((() => {
              m(!1)
            }), t)
          }), [h, t]), (0, s.useEffect)((() => {
            k(l.map(((e, a) => (e => {
              let a = 0;
              const t = l.length;
              return 1 === t ? .5 * f - .5 * j - 2 * c + _ : (0 === e && (a = c - e * j), e === t - 1 && t > 1 && (a = t * j * -1 + (f - (c - _))), e > 0 && e < t - 1 && (a = e * j * -1 + (.5 * f - .5 * j + .5 * _)), a)
            })(a)))), 1 === l.length ? T(!0) : T(!1)
          }), [d.current, l, f]), (0, s.useEffect)((() => {
            const e = (a = g, l.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            I(e)
          }), [l, g]), (0, s.useEffect)((() => {
            !0 !== o && !0 !== i || N(S[0])
          }), [i, o, S]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("div", {
              className: "bc373b520fbdca8d2f0f",
              ref: d,
              onTouchStart: M,
              onTouchMove: U,
              onTouchEnd: $,
              onMouseDown: M,
              onMouseMove: U,
              onMouseUp: $,
              onClick: () => {
                null !== n && n(g)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, u.jsx)("div", {
                className: "b996a7ad30d05022b3d6",
                "data-interaction-blocked": h,
                "data-single-item": R,
                style: {
                  transform: R ? null : `translateX(${C}px)`
                },
                children: l.map(((e, a) => (0, u.jsx)("div", {
                  className: "eaede6f31bdcb7819f48",
                  ref: E[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), P.length > 1 && !1 === o && (0, u.jsx)("div", {
              className: "b27bbf1bb846c8fd855b",
              children: P.map((e => (0, u.jsx)("div", {
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
        C = (0, d.withTranslations)((e => {
          let {
            sc: a,
            t: c,
            user: l,
            charListHidden: o,
            hideCharacterList: i,
            refCharacterListDesktop: h,
            menuPadding: g,
            longCharList: v,
            setLongCharList: C,
            isMobileMode: N,
            setIsMobileMode: j
          } = e;
          const {
            lsSettings: w,
            mutateLSSettings: _
          } = (0, d.useRockstarWebLSSettings)(), {
            track: y
          } = n(), {
            currentCharId: E,
            hasNotification: L,
            setCurrentCharId: P,
            characters: I,
            crews: R,
            mobileCardWidth: T,
            charactersNeeded: M,
            navOpen: U
          } = (0, r.useRockstarUser)(), [$, O] = (0, s.useState)(null), [X, H] = (0, s.useState)(null), [D, W] = (0, s.useState)(!1), [B, A] = (0, s.useState)(!1), [F, z] = (0, s.useState)(0), [G, V] = (0, s.useState)(0), [Z, K] = (0, s.useState)(0), J = (0, s.createRef)(), Y = p(J, !1), q = (0, s.createRef)(), [Q, ee] = (0, s.useState)(0), ae = e => {
            if (0 === e.length) return e;
            const a = e.map(((e, a) => ({
              ...e,
              characterId: a
            })));
            return a
          }, [te, se] = (0, s.useState)(ae(I?.gtao ?? [])), ce = {
            event_action: "click",
            event_category: "account_menu",
            event: "account_menu_click",
            environment: ""
          }, re = [{
            text: c("View My Profile"),
            href: l.profile_link,
            target: "_blank",
            analytics: ce
          }, {
            text: c("Settings"),
            href: `https://${a.host}.rockstargames.com/settings`,
            target: "_blank",
            analytics: ce
          }, {
            text: c("Crews"),
            href: `https://${a.host}.rockstargames.com/member/${l.nickname}/crews`,
            target: "_blank",
            analytics: ce
          }, {
            text: c("Friends"),
            href: `https://${a.host}.rockstargames.com/member/${l.nickname}/friends`,
            target: "_blank",
            analytics: ce
          }, {
            text: c("Notifications"),
            href: `https://${a.host}.rockstargames.com/notifications`,
            target: "_blank",
            hasNotification: L,
            analytics: ce
          }, {
            text: c("Log Out"),
            href: `${a.logout}?returnUrl=${document.location.pathname}${document.location.search}`,
            target: "_self",
            analytics: ce
          }], ne = () => {
            if (q.current) {
              const {
                current: e
              } = q, a = e?.scrollHeight;
              ee(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = () => {
              V(window.innerWidth), K(window.innerHeight), window.innerWidth < 768 || window.innerHeight < 649 ? j(!0) : j(!1), i(!0)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, s.useEffect)((() => {
            let e = te.length - 1;
            e < 0 && (e = 0), z(e);
            const a = te.length > 0 ? te[E] ?? te[0] : null;
            if (!a) return;
            const t = null !== a ? m(a.platform, "large") : null;
            H(t), O(a), te.length > 1 ? W(!0) : W(!1), C(te.length - 1 > 3)
          }), [E, te]), (0, s.useEffect)((() => {
            se(ae(I?.gtao ?? []))
          }), [I]), (0, s.useEffect)((() => {
            A(g + T * F < Y)
          }), [F, N, G, te]), (0, s.useEffect)((() => {
            ne(), setTimeout(ne, 1e3)
          }), [q, G, Z]), (0, s.useEffect)((() => {
            P(w?.currentCharId ?? 0)
          }), [w]), (0, s.useEffect)((() => {
            null !== E && _({
              key: "currentCharId",
              value: E
            })
          }), [E]), (0, u.jsxs)(u.Fragment, {
            children: [null !== $ && "gtao" === M && (0, u.jsxs)("div", {
              className: k.scProfile,
              children: [(0, u.jsx)(x, {
                s: k,
                user: l,
                character: $,
                platformTag: X,
                crews: R
              }), !0 === D && (0, u.jsxs)("div", {
                className: k.scCharacterSelector,
                children: [(0, u.jsx)("button", {
                  className: k.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !o;
                    i(a), y({
                      event: !0 === a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": o,
                  children: (0, u.jsx)("span", {
                    children: c("Switch Character")
                  })
                }), !1 === N && (0, u.jsx)("div", {
                  className: k.scCharacterList,
                  "data-long-list": v,
                  "aria-hidden": o,
                  ref: h,
                  children: te.map(((e, a) => (0, u.jsx)(b, {
                    user: l,
                    characterData: e,
                    setCurrentCharId: P,
                    currentCharId: E,
                    characterId: a
                  }, e.mugshotUrl)))
                }), !0 === N && (0, u.jsx)("div", {
                  className: k.scCharacterList,
                  "data-single-item": 2 === te.length,
                  "data-swiper-disabled": B,
                  "aria-hidden": o,
                  ref: J,
                  children: (0, u.jsx)(S, {
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
                    disablePager: B,
                    disableSwiper: B,
                    children: te.filter(((e, a) => a !== E)).map((e => (0, s.createElement)(b, {
                      user: l,
                      characterData: e,
                      setCurrentCharId: P,
                      currentCharId: E,
                      key: e.mugshotUrl
                    })))
                  })
                })]
              })]
            }), (0, u.jsxs)("nav", {
              className: k.scNav,
              children: [(0, u.jsxs)("button", {
                className: k.scNavHeader,
                type: "button",
                "data-opened": o,
                "data-nav-opened": U,
                onClick: e => {
                  e.stopPropagation(), !1 === o && i(!0)
                },
                children: [(0, u.jsx)("span", {
                  children: l.nickname
                }), (0, u.jsx)("img", {
                  src: t(456),
                  alt: "Social Club"
                })]
              }), (0, u.jsx)("div", {
                className: k.scNavWrap,
                "data-opened": o,
                "data-logged-in": "true",
                ref: q,
                style: {
                  maxHeight: `${Q}px`
                },
                children: re.map((e => (0, s.createElement)(f, {
                  ...e,
                  key: e.text
                })))
              })]
            })]
          })
        })),
        N = {
          scNavWrapper: "d7bac12a82ffc52818c3",
          rpLevel: "e2e5c1bfb71e9ff95838",
          rpIcon: "cd60c6f857f6da4611af",
          scMenu: "fb9966f65cb155635c74",
          navOpen: "ff3d86ee58e3e40e9424",
          dragHandle: "dc573b70b5fa74fbc251",
          dragHandleBtn: "cbaf32fb58cd4992ca4e",
          scOverlay: "d6934ce9e7a8c717c2f5"
        },
        j = (0, d.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            navHidden: c = !1
          } = (0, l.useState)(), n = (0, r.useRockstarUser)(), [i, d] = (0, s.useState)(!0), [f, m] = (0, s.useState)(!1), [g, p] = (0, s.useState)(null), b = (0, l.useReactiveVar)(o.Z), {
            navOpen: v,
            setNavOpen: x
          } = n, S = n?.data, k = void 0 !== S, j = (0, s.useRef)(), [w, _] = (0, s.useState)(0), y = (0, s.createRef)(), [E, L] = (0, s.useState)(!1), [P, I] = (0, s.useState)(0), [R, T] = (0, s.useState)(!1), M = (0, s.useCallback)((e => {
            d(e), j.current && !0 === e && (j.current.scrollTop = 0)
          }), [j]);
          return (0, s.useEffect)((() => {
            j.current && (!1 === i && !1 === f && (j.current.style.height = `${j.current.scrollHeight}px`), !0 === i && (j.current.style.height = null))
          }), [i, j, f]), (0, s.useEffect)((() => {
            p(!!S && S.user)
          }), [S]), (0, s.useEffect)((() => {
            const e = () => {
              x(!1), M(!0)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, s.useEffect)((() => {
            x(!1), M(!0)
          }), [c]), (0, s.useEffect)((() => {
            if (y.current) {
              const {
                current: e
              } = y, a = window.getComputedStyle(e);
              _(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [y]), (0, s.useEffect)((() => {
            document.body.style.overflowY = !0 === v && !0 === E ? "hidden" : "auto"
          }), [v, E]), (0, s.useEffect)((() => {
            T(window.navigator.userAgent.includes("Mac"))
          }), []), null === g ? null : (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsxs)("div", {
              className: [N.scMenu, v ? N.navOpen : ""].join(" "),
              "data-logged-in": k,
              "data-mac-browser": R,
              ref: y,
              children: [(0, u.jsx)("button", {
                className: N.dragHandleBtn,
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
                children: (0, u.jsx)("img", {
                  className: N.dragHandle,
                  src: t(762),
                  alt: a("Drag Menu Handle")
                })
              }), k ? (0, u.jsx)(C, {
                user: g,
                sc: b,
                charListHidden: i,
                hideCharacterList: M,
                refCharacterListDesktop: j,
                menuPadding: w,
                longCharList: f,
                setLongCharList: m,
                isMobileMode: E,
                setIsMobileMode: L
              }) : (0, u.jsx)(h, {
                sc: b,
                navOpen: v
              })]
            }), (0, u.jsx)("div", {
              className: [N.scOverlay, v ? N.navOpen : ""].join(" "),
              "data-logged-in": k
            })]
          })
        })),
        w = t(493),
        _ = t(916),
        y = (0, d.withTranslations)((() => {
          const {
            data: e,
            characters: a,
            setNavOpen: t,
            navOpen: c,
            currentCharId: l,
            charactersNeeded: o
          } = (0, r.useRockstarUser)(), {
            track: i
          } = n(), [d, f] = (0, s.useState)(null), [h, g] = (0, s.useState)(!1), [p, b] = (0, s.useState)(null), [v, x] = (0, s.useState)(!1), S = (0, s.useCallback)((e => {
            e.stopPropagation(), t(!c), i({
              event_action: "click",
              event_category: "account_menu",
              event: "account_menu_click",
              event_label: c ? "close" : "open",
              text: c ? "close" : "open"
            })
          }), [c]);
          return (0, s.useEffect)((() => {
            const t = e?.user?.id ?? !1,
              s = a?.[o]?.[l]?.mugshotUrl ?? e?.user?.avatar ?? (t ? w : _),
              c = m(a?.[o]?.[l]?.platform, "small") ?? null;
            b(c), f(s), g(t), x(!!a?.[o]?.[l]?.mugshotUrl)
          }), [e, o, a, l, w, _]), (0, u.jsxs)("button", {
            className: "f60d175890a158a2eeca",
            "data-img-set": v,
            "aria-label": "Toggle Social Club Menu",
            type: "button",
            onClick: e => S(e),
            children: [(0, u.jsx)("img", {
              className: "a9651d22866bf58ca4bd",
              src: d || "",
              onError: () => {
                f(w)
              },
              alt: e?.user?.nickname || ""
            }), h && null !== p && (0, u.jsx)("img", {
              className: "e8c699c608f17bc081aa",
              src: p.src,
              alt: p.alt
            }), h && (0, u.jsx)("div", {
              className: "acba28aeab3965a49753",
              "data-platform": a?.[o]?.[l]?.platform ?? null
            })]
          })
        }))
    },
    456: (e, a, t) => {
      e.exports = t.p + "img/04f91124ddca6945134c.svg"
    },
    762: (e, a, t) => {
      e.exports = t.p + "img/cfb657cdc749132fc8fd.svg"
    },
    916: (e, a, t) => {
      e.exports = t.p + "img/61ed3b631437f6495d9c.svg"
    },
    493: (e, a, t) => {
      e.exports = t.p + "img/8a7ecf45a9551607393f.png"
    },
    48: (e, a, t) => {
      e.exports = t.p + "img/72b01a5fe559550897c7.svg"
    },
    466: (e, a, t) => {
      e.exports = t.p + "img/16fc79e538f405dac692.svg"
    },
    175: (e, a, t) => {
      e.exports = t.p + "img/3056dd100cdc9af4c8f8.svg"
    },
    733: (e, a, t) => {
      e.exports = t.p + "img/b9049c3fc2e23432cd99.svg"
    },
    647: (e, a, t) => {
      e.exports = t.p + "img/b38c704a4f0f93dbaa71.svg"
    },
    816: (e, a, t) => {
      e.exports = t.p + "img/e18cbaeff16e28472704.svg"
    },
    848: (e, a, t) => {
      e.exports = t.p + "img/73fac91764a07506aa44.svg"
    },
    731: (e, a, t) => {
      e.exports = t.p + "img/ffdc38b81812447f1a52.svg"
    },
    3: (e, a, t) => {
      e.exports = t.p + "img/e06e7d21fd0c72e7b049.svg"
    },
    748: (e, a, t) => {
      e.exports = t.p + "img/eaef99f273a784a715fc.svg"
    },
    910: (e, a, t) => {
      e.exports = t.p + "img/c56e571a937094f77aba.svg"
    },
    185: (e, a, t) => {
      e.exports = t.p + "img/dc0ee5af18bf15f7ce11.svg"
    },
    981: (e, a, t) => {
      e.exports = t.p + "img/55e4ef9f3127c7c76d92.svg"
    },
    60: (e, a, t) => {
      e.exports = t.p + "img/83bc0bb48baad355b5f3.svg"
    }
  }
]);