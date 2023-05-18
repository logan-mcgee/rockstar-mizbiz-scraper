(self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [958, 330], {
    973: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => c
      });
      var s = t(859);
      const r = (0, t(929).getScConfigForOrigin)(),
        c = (0, s.makeVar)(r)
    },
    963: (e, a, t) => {
      "use strict";
      t.d(a, {
        R: () => m,
        Z: () => h
      });
      var s = t(859);
      const r = (0, s.makeVar)(!1),
        c = e => r(e),
        n = (0, s.makeVar)(!1),
        i = e => n(e),
        o = (0, s.makeVar)(null),
        l = e => o(e),
        d = (0, s.makeVar)(null),
        u = e => d(e),
        m = (0, s.makeVar)(null),
        f = (0, s.makeVar)(null),
        g = e => f(e),
        h = () => {
          const e = (0, s.useReactiveVar)(f),
            a = (0, s.useReactiveVar)(o),
            t = (0, s.useReactiveVar)(r);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: (0, s.useReactiveVar)(n),
            navOpen: t,
            selectedCharacterTuple: (0, s.useReactiveVar)(d),
            setCharactersNeeded: g,
            setCurrentCharId: l,
            setHasNotifications: i,
            setNavOpen: c,
            setSelectedCharacterTuple: u
          }
        }
    },
    958: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Menu: () => C,
        MenuButton: () => E,
        scConfig: () => o.Z,
        useGtmTrack: () => c,
        useRockstarUser: () => n.useRockstarUser,
        useRockstarUserState: () => r.Z,
        useRpCategory: () => p,
        useScConfig: () => l
      });
      var s = t(331),
        r = t(963);
      const c = () => ({
        track: e => {
          const a = {
            ...e,
            member_id: (0, r.R)()
          };
          (0, s.track)(a)
        }
      });
      var n = t(330),
        i = t(859),
        o = t(973);
      const l = () => (0, i.useReactiveVar)(o.Z);
      var d = t(822),
        u = t(929);
      var m = t(706);
      const f = e => {
          let {
            text: a,
            target: t,
            href: s,
            analytics: r,
            hasNotifications: n = !1
          } = e;
          const {
            track: i
          } = c();
          return (0, m.jsxs)("a", {
            className: "f1f57df4d89347d3a5a4",
            title: a,
            href: s,
            target: t,
            rel: "noreferrer",
            onClick: () => {
              i({
                ...r,
                event_label: a.toLowerCase(),
                text: a.toLowerCase(),
                link_url: s
              })
            },
            children: [a, n && (0, m.jsx)("span", {
              className: "dfdd843dadc8fe0cc756"
            })]
          }, a)
        },
        g = (0, u.withTranslations)((e => {
          let {
            sc: a,
            t
          } = e;
          const s = (0, u.useLocale)(),
            r = (0, u.toScLocaleString)(s),
            c = `${document.location.pathname}${document.location.search}`,
            n = `${a.login}?returnUrl=${c}&lang=${r}`,
            i = `${a.signup}&returnUrl=${c}&lang=${r}`,
            o = [{
              text: t("Sign In"),
              href: n,
              analytics: {
                event_action: "login",
                event_category: "cta",
                event: "cta_login"
              }
            }, {
              text: t("Join Social Club"),
              href: i,
              analytics: {
                event_action: "register",
                event_category: "cta",
                event: "cta_signup"
              }
            }];
          return (0, m.jsx)("nav", {
            className: "b7294b05abb682e53b6c",
            "aria-label": "sc menu",
            title: t("Social Club"),
            children: (0, m.jsx)("div", {
              className: "c09cf59bedf70da20f41",
              "data-logged-in": "false",
              children: o.map((e => (0, d.createElement)(f, {
                ...e,
                key: e.text
              })))
            })
          })
        })),
        h = (e, a) => {
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
        p = e => t(e < 100 ? 910 : e > 99 && e < 500 ? 185 : e > 499 && e < 750 ? 60 : 981),
        v = (0, u.withTranslations)((e => {
          let {
            characterData: a
          } = e;
          const {
            currentCharId: s,
            setCurrentCharId: n
          } = (0, r.Z)(), {
            track: i
          } = c(), o = (0, d.createRef)(), {
            platform: l,
            platformUsername: u,
            mugshotUrl: f,
            stats: g
          } = a, [v, k] = (0, d.useState)(f), [b] = (0, d.useState)(a.index), x = h(l, "large"), S = s === a.index;
          return (0, m.jsxs)("button", {
            className: "dee06086788899b4002f",
            type: "button",
            "aria-hidden": S,
            onClick: e => {
              e.stopPropagation(), n(b);
              let a = "";
              "pc" === l ? a = "PC" : "ps4" === l ? a = "PS4" : "ps5" === l ? a = "PS5" : "xboxone" === l ? a = "Xbox One" : "xboxsx" === l && (a = "Xbox Series X|S"), i({
                event: "character_selector_select",
                event_category: "character_selector",
                event_action: "select",
                event_label: a,
                position: b
              })
            },
            ref: o,
            children: [(0, m.jsx)("div", {
              className: "ff6279c9ff9b88f1f1f6",
              "data-size": "small",
              children: (0, m.jsx)("img", {
                src: v,
                alt: u,
                onError: () => {
                  k(t(493))
                }
              })
            }), (0, m.jsxs)("div", {
              className: "db0c1a05fff15a2418f2",
              children: [(0, m.jsxs)("div", {
                className: "fd06288478a14cd32f05",
                children: [(0, m.jsx)("img", {
                  src: x.src,
                  alt: x.alt
                }), (0, m.jsx)("div", {
                  className: "e176d7a04bacf4e0d725",
                  "data-size": "small",
                  children: u
                })]
              }), (0, m.jsx)("div", {
                className: "c08f37e001f1b148b046",
                children: (0, m.jsxs)("div", {
                  className: "f4e32f1fa3917b84d463",
                  children: [(0, m.jsx)("img", {
                    className: "f519c818d4a8d1520bfe",
                    src: p(g.overview.rank.value),
                    alt: "RP Category"
                  }), (0, m.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        })),
        k = {
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
        b = (0, u.withTranslations)((e => {
          let {
            character: a,
            platformTag: s
          } = e;
          const {
            data: r
          } = (0, n.useRockstarUser)(), {
            track: i
          } = c(), [o, l] = (0, d.useState)([]), [u, f] = (0, d.useState)(null), [g, h] = (0, d.useState)(null), [v, b] = (0, d.useState)(!1), [x, S] = (0, d.useState)(-1), [_, N] = (0, d.useState)([]), [w, C] = (0, d.useState)(0), j = t(493), [y, E] = (0, d.useState)("0"), [R, P] = (0, d.useState)("0"), I = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), T = () => {
            U((0, m.jsx)("img", {
              src: j,
              alt: r.nickname
            }))
          }, [L, U] = (0, d.useState)((0, m.jsx)("img", {
            className: k.scAvatarImg,
            src: a.mugshotUrl,
            alt: r.nickname,
            onError: T
          }));
          (0, d.useEffect)((() => {
            l(r.crews ?? [])
          }), [r]), (0, d.useEffect)((() => {
            U((0, m.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: T
            })), E(I(a.stats.overview.bank.value)), P(I(a.stats.overview.cash.value)), C(a.stats.overview.rank.value)
          }), [a, r]), (0, d.useEffect)((() => {
            o && o.forEach((e => {
              !0 === e.isPrimary && (f(e.crewTag), h(e.crewColour), S(e.rankOrder), b(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && b(!0))
            }))
          }), [o]), (0, d.useEffect)((() => {
            const e = [];
            if (!v && x > -1)
              for (let a = 5; a > x; a -= 1) e.push((0, m.jsx)("div", {
                className: k.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== g ? g : ""
                }
              }, `crewrankbar-${a}`));
            N(e)
          }), [x, v, g]);
          const M = e => {
            e.stopPropagation(), i({
              event: "character_selector_profile_click",
              event_category: "character_selector",
              event_action: "profile_click",
              event_label: s.alt,
              link_url: void 0
            })
          };
          return (0, m.jsxs)("div", {
            className: k.scProfileDetails,
            onClick: M,
            onKeyUp: M,
            role: "button",
            tabIndex: 0,
            children: [(0, m.jsxs)("div", {
              className: k.scAvatar,
              children: [L, (0, m.jsx)("div", {
                className: k.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, m.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, m.jsxs)("div", {
              className: k.scProfileStats,
              children: [(0, m.jsx)("div", {
                className: k.scNames,
                children: (0, m.jsxs)("div", {
                  className: k.scTagsNames,
                  children: [(0, m.jsx)("span", {
                    className: k.scUserName,
                    children: a.platformUsername
                  }), u && (0, m.jsxs)("span", {
                    className: k.scCrewName,
                    "data-arrow-tag": v,
                    children: [u, !v && (0, m.jsx)("div", {
                      className: k.scCrewRankBar,
                      children: _
                    })]
                  })]
                })
              }), (0, m.jsxs)("div", {
                className: k.scProgress,
                children: [(0, m.jsxs)("div", {
                  className: k.scRpLevel,
                  children: [(0, m.jsx)("img", {
                    className: k.scRpIcon,
                    src: p(w),
                    alt: "RP Category"
                  }), (0, m.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, m.jsxs)("div", {
                  className: k.scMoney,
                  children: [(0, m.jsxs)("span", {
                    className: k.scBank,
                    children: ["$", y]
                  }), (0, m.jsxs)("span", {
                    className: k.scCash,
                    children: ["$", R]
                  })]
                })]
              })]
            })]
          })
        })),
        x = (e, a) => {
          const [t, s] = (0, d.useState)(0);
          return (0, d.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, r = t.getBoundingClientRect(), {
                width: c
              } = r;
              let n = c;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                n += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(n)
            }
          }), [e]), t
        },
        S = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: r = null,
            slideClickCallback: c = null,
            children: n = [],
            disablePager: i = !1,
            disableSwiper: o = !1
          } = e;
          const l = (0, d.createRef)(),
            u = x(l, !1),
            [f, g] = (0, d.useState)(!1),
            [h, p] = (0, d.useState)(0),
            [v, k] = (0, d.useState)(0),
            [b, S] = (0, d.useState)([s]),
            [_, N] = (0, d.useState)(b[0]),
            [w, C] = (0, d.useState)(252),
            [j, y] = (0, d.useState)(0),
            [E, R] = (0, d.useState)([]),
            [P, I] = (0, d.useState)([]),
            [T, L] = (0, d.useState)(!1),
            U = e => {
              if (!0 === f || !0 === o) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              k(a)
            },
            M = e => {
              if (!0 === f || 0 === v || !0 === o) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > v ? 1 : -1,
                c = Math.abs(v - t);
              c > a ? (s > 0 ? (() => {
                if (!0 === f) return;
                g(!0);
                const e = h - 1 < 0 ? 0 : h - 1;
                p(e), N(b[e]), r && r(e)
              })() : (() => {
                if (!0 === f) return;
                g(!0);
                let e = h + 1 >= b.length ? b.length - 1 : h + 1;
                e < 0 && (e = 0), p(e), N(b[e]), r && r(e)
              })(), k(0)) : N(b[h] + c * s)
            },
            $ = () => {
              !0 !== f && !0 !== o && (g(!0), !0 !== f && (N(b[h]), k(0)))
            };
          return (0, d.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, d.createRef)())
            })), R(e)
          }), [n]), (0, d.useEffect)((() => {
            if (E.length < 1) return;
            C(E[0]?.current?.clientWidth || 0);
            const e = E[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            y(t + a)
          }), [E]), (0, d.useEffect)((() => {
            !1 !== f && setTimeout((() => {
              g(!1)
            }), t)
          }), [f, t]), (0, d.useEffect)((() => {
            S(n.map(((e, a) => (e => {
              let a = 0;
              const t = n.length;
              return 1 === t ? .5 * u - .5 * w - 2 * s + j : (0 === e && (a = s - e * w), e === t - 1 && t > 1 && (a = t * w * -1 + (u - (s - j))), e > 0 && e < t - 1 && (a = e * w * -1 + (.5 * u - .5 * w + .5 * j)), a)
            })(a)))), 1 === n.length ? L(!0) : L(!1)
          }), [l.current, n, u]), (0, d.useEffect)((() => {
            const e = (a = h, n.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            I(e)
          }), [n, h]), (0, d.useEffect)((() => {
            !0 !== i && !0 !== o || N(b[0])
          }), [o, i, b]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("div", {
              className: "bc373b520fbdca8d2f0f",
              ref: l,
              onTouchStart: U,
              onTouchMove: M,
              onTouchEnd: $,
              onMouseDown: U,
              onMouseMove: M,
              onMouseUp: $,
              onClick: () => {
                null !== c && c(h)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, m.jsx)("div", {
                className: "b996a7ad30d05022b3d6",
                "data-interaction-blocked": f,
                "data-single-item": T,
                style: {
                  transform: T ? null : `translateX(${_}px)`
                },
                children: n.map(((e, a) => (0, m.jsx)("div", {
                  className: "eaede6f31bdcb7819f48",
                  ref: E[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), P.length > 1 && !1 === i && (0, m.jsx)("div", {
              className: "b27bbf1bb846c8fd855b",
              children: P.map((e => (0, m.jsx)("div", {
                className: "af5997d414baf32e73b3",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        _ = {
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
        N = (0, u.withTranslations)((e => {
          let {
            sc: a,
            t: s,
            charListHidden: o,
            hideCharacterList: l,
            refCharacterListDesktop: g,
            menuPadding: p,
            longCharList: k,
            setLongCharList: N,
            isMobileMode: w,
            setIsMobileMode: C
          } = e;
          const {
            lsSettings: j
          } = (0, u.useRockstarWebLSSettings)(), {
            track: y
          } = c(), E = (0, i.useRockstarTokenPing)(), {
            data: R,
            loggedIn: P
          } = (0, n.useRockstarUser)(), {
            charactersNeeded: I,
            currentCharId: T,
            hasNotifications: L,
            navOpen: U,
            setCurrentCharId: M,
            setHasNotifications: $,
            setSelectedCharacterTuple: D
          } = (0, r.Z)(), [O, B] = (0, d.useState)(null), [z, F] = (0, d.useState)(null), [X, H] = (0, d.useState)(!1), [V, A] = (0, d.useState)(!1), [W, Z] = (0, d.useState)(0), [q, G] = (0, d.useState)(0), [K, Q] = (0, d.useState)(0), J = (0, d.createRef)(), Y = x(J, !1), ee = (0, d.createRef)(), [ae, te] = (0, d.useState)(0), [se, re] = (0, d.useState)([]);
          (0, d.useEffect)((() => {
            re(R.characters[I] ?? [])
          }), [R, I]), (0, d.useEffect)((() => {
            const e = R?.characters.gtao;
            if (null !== P && !e.length) return void D(!1);
            if (null == T || !e.length) return;
            const a = e?.[T] ?? e?.[0] ?? null;
            D(!!a?.platform && [a.platform, a.characterSlot])
          }), [T, R, P]), (0, d.useEffect)((() => {
            (async () => {
              if (!R?.id) return;
              const {
                rockstarAccountList: e
              } = await (0, u.coreScApiFetch)("friends/getInvites", {
                pingBearer: E
              }), {
                count: a
              } = await (0, u.coreScApiFetch)("notification/count", {
                pingBearer: E
              });
              $(a > 0 || e.total > 0)
            })()
          }), [R]);
          const ce = {
              event_action: "click",
              event_category: "account_menu",
              event: "account_menu_click",
              environment: ""
            },
            ne = [{
              text: s("View My Profile"),
              href: R.profile_link,
              target: "_blank",
              analytics: ce
            }, {
              text: s("Settings"),
              href: `https://${a.host}.rockstargames.com/settings`,
              target: "_blank",
              analytics: ce
            }, {
              text: s("Crews"),
              href: `https://${a.host}.rockstargames.com/member/${R.nickname}/crews`,
              target: "_blank",
              analytics: ce
            }, {
              text: s("Friends"),
              href: `https://${a.host}.rockstargames.com/member/${R.nickname}/friends`,
              target: "_blank",
              analytics: ce
            }, {
              text: s("Notifications"),
              href: `https://${a.host}.rockstargames.com/notifications`,
              target: "_blank",
              hasNotifications: L,
              analytics: ce
            }, {
              text: s("Log Out"),
              href: `${a.logout}?returnUrl=${document.location.pathname}${document.location.search}`,
              target: "_self",
              analytics: ce
            }],
            ie = () => {
              if (ee.current) {
                const {
                  current: e
                } = ee, a = e?.scrollHeight;
                te(a)
              }
            };
          return (0, d.useEffect)((() => {
            const e = () => {
              G(window.innerWidth), Q(window.innerHeight), window.innerWidth < 768 || window.innerHeight < 649 ? C(!0) : C(!1), l(!0)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, d.useEffect)((() => {
            let e = se.length - 1;
            e < 0 && (e = 0), Z(e);
            const a = se.length > 0 ? se[T] ?? se[0] : null;
            if (!a) return;
            const t = null !== a ? h(a.platform, "large") : null;
            F(t), B(a), se.length > 1 ? H(!0) : H(!1), N(se.length - 1 > 3)
          }), [T, se]), (0, d.useEffect)((() => {
            A(p + 0 * W < Y)
          }), [W, w, q, se]), (0, d.useEffect)((() => {
            ie(), setTimeout(ie, 1e3)
          }), [ee, q, K]), (0, d.useEffect)((() => {
            const e = j?.currentCharId ?? 0;
            M(Math.max(0, Math.min(e, se.length - 1)))
          }), [se, j]), (0, m.jsxs)(m.Fragment, {
            children: [null !== O && "gtao" === I && (0, m.jsxs)("div", {
              className: _.scProfile,
              children: [(0, m.jsx)(b, {
                s: _,
                character: O,
                platformTag: z
              }), !0 === X && (0, m.jsxs)("div", {
                className: _.scCharacterSelector,
                children: [(0, m.jsx)("button", {
                  className: _.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !o;
                    l(a), y({
                      event: !0 === a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": o,
                  children: (0, m.jsx)("span", {
                    children: s("Switch Character")
                  })
                }), !1 === w && (0, m.jsx)("div", {
                  className: _.scCharacterList,
                  "data-long-list": k,
                  "aria-hidden": o,
                  ref: g,
                  children: se.map((e => (0, m.jsx)(v, {
                    characterData: e
                  }, e.mugshotUrl)))
                }), !0 === w && (0, m.jsx)("div", {
                  className: _.scCharacterList,
                  "data-single-item": 2 === se.length,
                  "data-swiper-disabled": V,
                  "aria-hidden": o,
                  ref: J,
                  children: (0, m.jsx)(S, {
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
                    disablePager: V,
                    disableSwiper: V,
                    children: se.filter(((e, a) => a !== T)).map((e => (0, d.createElement)(v, {
                      characterData: e,
                      key: e.mugshotUrl
                    })))
                  })
                })]
              })]
            }), (0, m.jsxs)("nav", {
              className: _.scNav,
              children: [(0, m.jsxs)("button", {
                className: _.scNavHeader,
                type: "button",
                "data-opened": o,
                "data-nav-opened": U,
                onClick: e => {
                  e.stopPropagation(), !1 === o && l(!0)
                },
                children: [(0, m.jsx)("span", {
                  children: R.nickname
                }), (0, m.jsx)("img", {
                  src: t(456),
                  alt: "Social Club"
                })]
              }), (0, m.jsx)("div", {
                className: _.scNavWrap,
                "data-opened": o,
                "data-logged-in": "true",
                ref: ee,
                style: {
                  maxHeight: `${ae}px`
                },
                children: ne.map((e => (0, d.createElement)(f, {
                  ...e,
                  key: e.text
                })))
              })]
            })]
          })
        })),
        w = {
          scNavWrapper: "d7bac12a82ffc52818c3",
          rpLevel: "e2e5c1bfb71e9ff95838",
          rpIcon: "cd60c6f857f6da4611af",
          scMenu: "fb9966f65cb155635c74",
          navOpen: "ff3d86ee58e3e40e9424",
          dragHandle: "dc573b70b5fa74fbc251",
          dragHandleBtn: "cbaf32fb58cd4992ca4e",
          scOverlay: "d6934ce9e7a8c717c2f5"
        },
        C = (0, u.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBodyIsScrollable: s
          } = (0, u.useBodyScrollable)(), {
            navHidden: c = !1
          } = (0, i.useState)(), {
            data: l,
            loggedIn: f
          } = (0, n.useRockstarUser)(), {
            currentCharId: h,
            navOpen: p,
            setNavOpen: v
          } = (0, r.Z)(), [k, b] = (0, d.useState)(!0), [x, S] = (0, d.useState)(!1), [_, C] = (0, d.useState)(null), j = (0, i.useReactiveVar)(o.Z), y = (0, d.useRef)(), [E, R] = (0, d.useState)(0), P = (0, d.createRef)(), [I, T] = (0, d.useState)(!1), [L, U] = (0, d.useState)(0), [M, $] = (0, d.useState)(!1), {
            mutateLSSettings: D
          } = (0, u.useRockstarWebLSSettings)(), O = (0, d.useCallback)((e => {
            b(e), y.current && !0 === e && (y.current.scrollTop = 0)
          }), [y]);
          return (0, d.useEffect)((() => {
            null !== h && D({
              key: "currentCharId",
              value: h
            }), !1 === f && D({
              key: "currentCharId",
              value: null
            })
          }), [h, f]), (0, d.useEffect)((() => {
            y.current && (!1 === k && !1 === x && (y.current.style.height = `${y.current.scrollHeight}px`), !0 === k && (y.current.style.height = null))
          }), [k, y, x]), (0, d.useEffect)((() => {
            C(l || !1)
          }), [l]), (0, d.useEffect)((() => {
            const e = () => {
              v(!1), O(!0)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, d.useEffect)((() => {
            v(!1), O(!0)
          }), [c]), (0, d.useEffect)((() => {
            if (P.current) {
              const {
                current: e
              } = P, a = window.getComputedStyle(e);
              R(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [P]), (0, d.useEffect)((() => {
            s(!I || !p)
          }), [p, I]), (0, d.useEffect)((() => {
            $(window.navigator.userAgent.includes("Mac"))
          }), []), null === _ ? null : (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsxs)("div", {
              className: [w.scMenu, p ? w.navOpen : ""].join(" "),
              "data-logged-in": f,
              "data-mac-browser": M,
              ref: P,
              children: [(0, m.jsx)("button", {
                className: w.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  U(a)
                },
                onTouchMove: e => {
                  if (0 === L) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(L - a) > 1 && (U(0), v(!1))
                },
                children: (0, m.jsx)("img", {
                  className: w.dragHandle,
                  src: t(762),
                  alt: a("Drag Menu Handle")
                })
              }), f ? (0, m.jsx)(N, {
                sc: j,
                charListHidden: k,
                hideCharacterList: O,
                refCharacterListDesktop: y,
                menuPadding: E,
                longCharList: x,
                setLongCharList: S,
                isMobileMode: I,
                setIsMobileMode: T
              }) : (0, m.jsx)(g, {
                sc: j,
                navOpen: p
              })]
            }), (0, m.jsx)("div", {
              className: [w.scOverlay, p ? w.navOpen : ""].join(" "),
              "data-logged-in": f
            })]
          })
        })),
        j = t(493),
        y = t(916),
        E = (0, u.withTranslations)((() => {
          const {
            data: e
          } = (0, n.useRockstarUser)(), {
            charactersNeeded: a,
            currentCharId: t,
            navOpen: s,
            setNavOpen: i
          } = (0, r.Z)(), {
            track: o
          } = c(), [l, u] = (0, d.useState)(null), [f, g] = (0, d.useState)(!1), [p, v] = (0, d.useState)(null), [k, b] = (0, d.useState)(!1), [x, S] = (0, d.useState)([]);
          (0, d.useEffect)((() => {
            S(e.characters[a] ?? [])
          }), [e, a]);
          const _ = (0, d.useCallback)((e => {
            e.stopPropagation(), i(!s), o({
              event_action: "click",
              event_category: "account_menu",
              event: "account_menu_click",
              event_label: s ? "close" : "open",
              text: s ? "close" : "open"
            })
          }), [s]);
          return (0, d.useEffect)((() => {
            const a = e?.id ?? !1,
              s = a ? (x?.[t]?.mugshotUrl ?? e?.avatar) || j : y,
              r = h(x?.[t]?.platform, "small") ?? null;
            v(r), u(s), g(a), b(!!x?.[t]?.mugshotUrl)
          }), [e, x, t, j, y]), (0, m.jsxs)("button", {
            className: "f60d175890a158a2eeca",
            "data-img-set": k,
            "aria-label": "Toggle Social Club Menu",
            type: "button",
            onClick: e => _(e),
            children: [(0, m.jsx)("img", {
              className: "a9651d22866bf58ca4bd",
              src: l || "",
              onError: () => {
                u(j)
              },
              alt: e?.nickname || ""
            }), f && null !== p && (0, m.jsx)("img", {
              className: "e8c699c608f17bc081aa",
              src: p.src,
              alt: p.alt
            }), f && (0, m.jsx)("div", {
              className: "acba28aeab3965a49753",
              "data-platform": x?.[a]?.[t]?.platform ?? null
            })]
          })
        }))
    },
    330: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        RockstarUserProvider: () => h,
        useRockstarUser: () => p
      });
      var s = t(822),
        r = t(859),
        c = t(217),
        n = t(963),
        i = t(929);
      var o = t(989),
        l = t.n(o),
        d = t(973);
      const u = () => {
        const e = (0, r.useRockstarToken)(),
          [a, t] = (0, s.useState)({
            id: null,
            avatar: "",
            profile_link: "",
            nickname: "",
            crews: [],
            characters: {
              gtao: []
            }
          }),
          [o, u] = (0, s.useState)(!0),
          [m, , f] = (0, r.useRockstarTokenReactive)(),
          g = (0, r.useRockstarTokenPing)(),
          {
            refetch: h
          } = (0, r.useQuery)(c.userData, {
            skip: !0
          }),
          [p, v] = (0, s.useState)(null),
          [k, b] = (0, s.useState)(!1),
          [x, S] = (0, s.useState)(!1);
        return (0, s.useEffect)((() => {
          (async () => {
            const s = null === e ? null : !!e;
            if (s && !k) {
              u(!0), b(!0);
              const e = await h(),
                s = e?.data?.user?.id,
                r = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: t
                  } = e;
                  const {
                    crews: s
                  } = await (0, i.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: t
                    }
                  });
                  return s
                })({
                  pingBearer: g,
                  rockstarId: s
                }),
                c = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: t,
                    rockstarId: s
                  } = e;
                  const r = [],
                    c = await (0, i.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  if (await (c?.platforms?.reduce((async (e, t) => {
                      if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                      const s = await (0, i.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                        pingBearer: a
                      });
                      s?.status && s?.result?.map((e => {
                        const {
                          activeCharacter: a,
                          stats: s
                        } = e, {
                          overview: c
                        } = s, {
                          rank: n
                        } = c;
                        if ("0" === n.value || !a) return;
                        const i = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return r.push({
                          ...e,
                          platform: t,
                          mugshotUrl: i
                        }), e
                      }))
                    }), Promise.resolve())), !r.length) return r;
                  const {
                    status: n,
                    accounts: o
                  } = await (0, i.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                    pingBearer: a
                  });
                  return n && o.length ? (o.forEach((e => {
                    const {
                      rockstarAccount: a,
                      linkedAccounts: c
                    } = e;
                    if (a?.rockstarId !== s) return;
                    const n = t;
                    let i = "",
                      o = "";
                    c?.map((e => ("xbl" === e?.onlineService ? i = e.userName : "np" === e?.onlineService && (o = e.userName), e))), r.map(((e, a) => (e.platformUsername = n, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = o || n), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = i || n), e)))
                  })), r) : r
                })({
                  pingBearer: g,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: s
                }),
                o = {
                  ...a,
                  ...e?.data?.user,
                  crews: r,
                  characters: {
                    gtao: c
                  }
                };
              u(!1), t(o), v(!0), (0, n.R)(s)
            }!1 !== s || x || (await (async e => {
              let {
                token: a,
                tokenPingExpires: t
              } = e;
              const s = {
                  method: "POST",
                  body: `fingerprint=${await l().get().then((e=>e))}`,
                  credentials: "include",
                  headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                  }
                },
                r = await fetch((0, d.Z)().silentCheck, s);
              if (200 !== r.status) return void a(!1);
              const c = await r.json(),
                n = `${(0,d.Z)().gateway}?code=${c}`,
                i = await fetch(n, {
                  credentials: "include"
                }),
                {
                  bearerToken: o,
                  tokenExpiresTime: u
                } = await i.json();
              return a(o), t(u), o
            })({
              token: m,
              tokenPingExpires: f
            }), S(!0)), !1 === s && x && (b(!0), v(!1), u(!1)), null === e && g()
          })()
        }), [e, k, x]), {
          data: a,
          loading: o,
          loggedIn: p
        }
      };
      var m = t(706);
      const f = {
          data: null,
          characters: {
            gtao: []
          },
          loggedIn: !0
        },
        g = (0, s.createContext)(f),
        h = e => {
          let {
            children: a
          } = e;
          const t = u(),
            r = (0, s.useMemo)((() => ({
              ...t
            })), [t]);
          return (0, m.jsx)(g.Provider, {
            value: r,
            children: a
          })
        },
        p = () => (0, s.useContext)(g)
    },
    217: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "userData"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "user"
              },
              name: {
                kind: "Name",
                value: "userData"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "avatar"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "nickname"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "profile_link"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "dob"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "bearer_token_expired"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "agegate_pass"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "client"
                    },
                    arguments: []
                  }]
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "logged_in"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "client"
                    },
                    arguments: []
                  }]
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 206
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query userData {\n    user: userData {\n        id\n        avatar\n        nickname\n        profile_link\n        dob\n        bearer_token_expired\n        agegate_pass @client\n        logged_in @client\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.userData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var c = s[a] || new Set,
          n = new Set,
          i = new Set;
        for (c.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var o = i;
          i = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "userData")
    },
    456: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/04f91124ddca6945134c.svg"
    },
    762: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/cfb657cdc749132fc8fd.svg"
    },
    916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/61ed3b631437f6495d9c.svg"
    },
    493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/8a7ecf45a9551607393f.png"
    },
    48: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/72b01a5fe559550897c7.svg"
    },
    466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/16fc79e538f405dac692.svg"
    },
    175: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3056dd100cdc9af4c8f8.svg"
    },
    733: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b9049c3fc2e23432cd99.svg"
    },
    647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b38c704a4f0f93dbaa71.svg"
    },
    816: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e18cbaeff16e28472704.svg"
    },
    848: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/73fac91764a07506aa44.svg"
    },
    731: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/ffdc38b81812447f1a52.svg"
    },
    3: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e06e7d21fd0c72e7b049.svg"
    },
    748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/eaef99f273a784a715fc.svg"
    },
    910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c56e571a937094f77aba.svg"
    },
    185: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/dc0ee5af18bf15f7ce11.svg"
    },
    981: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/55e4ef9f3127c7c76d92.svg"
    },
    60: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/83bc0bb48baad355b5f3.svg"
    }
  }
]);