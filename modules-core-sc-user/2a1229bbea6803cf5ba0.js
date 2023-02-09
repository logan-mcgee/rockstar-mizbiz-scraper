"use strict";
(self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [76], {
    76: (e, t, a) => {
      a.r(t), a.d(t, {
        Menu: () => j,
        MenuButton: () => y,
        OldMenu: () => I,
        scConfig: () => o.Z,
        useGtmTrack: () => n,
        useRockstarUser: () => r.useRockstarUser,
        useRpCategory: () => h,
        useScConfig: () => i
      });
      var s = a(822),
        c = a(331),
        r = a(580);
      const n = () => {
        const {
          data: e
        } = (0, r.useRockstarUser)();
        return {
          track: (0, s.useCallback)((t => {
            const a = {
              ...t,
              member_id: e?.user?.id ?? null
            };
            (0, c.track)(a)
          }), [e])
        }
      };
      var l = a(859),
        o = a(50);
      const i = () => (0, l.useReactiveVar)(o.Z);
      var u = a(929);
      var d = a(668);
      const f = e => {
          let {
            text: t,
            target: a,
            href: s,
            analytics: c,
            hasNotification: r = !1
          } = e;
          const {
            track: l
          } = n();
          return (0, d.jsxs)("a", {
            className: "f1f57df4d89347d3a5a4",
            title: t,
            href: s,
            target: a,
            rel: "noreferrer",
            onClick: () => {
              l({
                ...c,
                event_label: t.toLowerCase(),
                text: t.toLowerCase(),
                link_url: s
              })
            },
            children: [t, !0 === r && (0, d.jsx)("span", {
              className: "dfdd843dadc8fe0cc756"
            })]
          }, t)
        },
        m = (0, u.withTranslations)((e => {
          let {
            sc: t,
            t: a
          } = e;
          const c = (0, u.useLocale)(),
            r = (0, u.toScLocaleString)(c),
            n = `${document.location.pathname}${document.location.search}`,
            l = `${t.login}?returnUrl=${n}&lang=${r}`,
            o = `${t.signup}&returnUrl=${n}&lang=${r}`,
            i = [{
              text: a("Sign In"),
              href: l,
              analytics: {
                event_action: "login",
                event_category: "cta",
                event: "cta_login"
              }
            }, {
              text: a("Join Social Club"),
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
            title: a("Social Club"),
            children: (0, d.jsx)("div", {
              className: "c09cf59bedf70da20f41",
              "data-logged-in": "false",
              children: i.map((e => (0, s.createElement)(f, {
                ...e,
                key: e.text
              })))
            })
          })
        })),
        g = (e, t) => {
          switch (e) {
            case "pc":
              return "small" === t ? {
                src: a(48),
                alt: "PC"
              } : {
                src: a(816),
                alt: "PC"
              };
            case "ps4":
              return "small" === t ? {
                src: a(466),
                alt: "PS4"
              } : {
                src: a(848),
                alt: "PS4"
              };
            case "ps5":
              return "small" === t ? {
                src: a(175),
                alt: "PS5"
              } : {
                src: a(731),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === t ? {
                src: a(733),
                alt: "Xbox One"
              } : {
                src: a(3),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === t ? {
                src: a(647),
                alt: "Xbox Series X|S"
              } : {
                src: a(748),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        h = e => a(e < 100 ? 910 : e > 99 && e < 500 ? 185 : e > 499 && e < 750 ? 60 : 981),
        v = (e, t) => {
          const [a, c] = (0, s.useState)(0);
          return (0, s.useEffect)((() => {
            if (e.current) {
              const {
                current: a
              } = e, s = a.getBoundingClientRect(), {
                width: r
              } = s;
              let n = r;
              if (!0 === t) {
                const e = window.getComputedStyle(a);
                n += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              c(n)
            }
          }), [e]), a
        },
        b = (0, u.withTranslations)((e => {
          let {
            characterData: t,
            setCurrentCharId: c,
            currentCharId: l,
            user: o
          } = e;
          const {
            track: i
          } = n(), {
            setMobbileCardWidth: u
          } = (0, r.useRockstarUser)(), f = (0, s.createRef)(), m = v(f, !0), {
            platform: b,
            mugshotUrl: p,
            stats: x
          } = t, [k, _] = (0, s.useState)(p), [C] = (0, s.useState)(t.characterId), S = g(b, "large"), j = l === C;
          return (0, s.useEffect)((() => {
            u(m)
          }), [m]), (0, d.jsxs)("button", {
            className: "dee06086788899b4002f",
            type: "button",
            "aria-hidden": j,
            onClick: e => {
              e.stopPropagation(), c(C);
              let t = "";
              "pc" === b ? t = "PC" : "ps4" === b ? t = "PS4" : "ps5" === b ? t = "PS5" : "xboxone" === b ? t = "Xbox One" : "xboxsx" === b && (t = "Xbox Series X|S"), i({
                event: "character_selector_select",
                event_category: "character_selector",
                event_action: "select",
                event_label: t,
                position: C
              })
            },
            ref: f,
            children: [(0, d.jsx)("div", {
              className: "ff6279c9ff9b88f1f1f6",
              "data-size": "small",
              children: (0, d.jsx)("img", {
                src: k,
                alt: o.nickname,
                onError: () => {
                  _(a(493))
                }
              })
            }), (0, d.jsxs)("div", {
              className: "db0c1a05fff15a2418f2",
              children: [(0, d.jsxs)("div", {
                className: "fd06288478a14cd32f05",
                children: [(0, d.jsx)("img", {
                  src: S.src,
                  alt: S.alt
                }), (0, d.jsx)("div", {
                  className: "e176d7a04bacf4e0d725",
                  "data-size": "small",
                  children: o.nickname
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
                    children: t.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        })),
        p = {
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
        x = (0, u.withTranslations)((e => {
          let {
            user: t,
            character: c,
            platformTag: r,
            crews: l
          } = e;
          const {
            track: o
          } = n(), [i, u] = (0, s.useState)(null), [f, m] = (0, s.useState)(null), [g, v] = (0, s.useState)(!1), [b, x] = (0, s.useState)(-1), [k, _] = (0, s.useState)([]), [C, S] = (0, s.useState)(0), j = a(493), [N, w] = (0, s.useState)("0"), [y, L] = (0, s.useState)("0"), $ = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), E = () => {
            P((0, d.jsx)("img", {
              src: j,
              alt: t.nickname
            }))
          }, [I, P] = (0, s.useState)((0, d.jsx)("img", {
            className: p.scAvatarImg,
            src: c.mugshotUrl,
            alt: t.nickname,
            onError: E
          }));
          (0, s.useEffect)((() => {
            P((0, d.jsx)("img", {
              src: c.mugshotUrl,
              alt: t.nickname,
              onError: E
            })), w($(c.stats.overview.bank.value)), L($(c.stats.overview.cash.value)), S(c.stats.overview.rank.value)
          }), [c, t]), (0, s.useEffect)((() => {
            l && l.forEach((e => {
              !0 === e.isPrimary && (u(e.crewTag), m(e.crewColour), x(e.rankOrder), v(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && v(!0))
            }))
          }), [l]), (0, s.useEffect)((() => {
            const e = [];
            if (!g && b > -1)
              for (let t = 5; t > b; t -= 1) e.push((0, d.jsx)("div", {
                className: p.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${t}`));
            _(e)
          }), [b, g, f]);
          const M = e => {
            e.stopPropagation(), o({
              event: "character_selector_profile_click",
              event_category: "character_selector",
              event_action: "profile_click",
              event_label: r.alt,
              link_url: void 0
            })
          };
          return (0, d.jsxs)("div", {
            className: p.scProfileDetails,
            onClick: M,
            onKeyUp: M,
            role: "button",
            tabIndex: 0,
            children: [(0, d.jsxs)("div", {
              className: p.scAvatar,
              children: [I, (0, d.jsx)("div", {
                className: p.scAvatarPlatform,
                "data-platform": c.platform,
                children: (0, d.jsx)("img", {
                  src: r.src,
                  alt: r.alt
                })
              })]
            }), (0, d.jsxs)("div", {
              className: p.scProfileStats,
              children: [(0, d.jsx)("div", {
                className: p.scNames,
                children: (0, d.jsxs)("div", {
                  className: p.scTagsNames,
                  children: [(0, d.jsx)("span", {
                    className: p.scUserName,
                    children: t.nickname
                  }), i && (0, d.jsxs)("span", {
                    className: p.scCrewName,
                    "data-arrow-tag": g,
                    children: [i, !g && (0, d.jsx)("div", {
                      className: p.scCrewRankBar,
                      children: k
                    })]
                  })]
                })
              }), (0, d.jsxs)("div", {
                className: p.scProgress,
                children: [(0, d.jsxs)("div", {
                  className: p.scRpLevel,
                  children: [(0, d.jsx)("img", {
                    className: p.scRpIcon,
                    src: h(C),
                    alt: "RP Category"
                  }), (0, d.jsx)("span", {
                    children: c.stats.overview.rank.value
                  })]
                }), (0, d.jsxs)("div", {
                  className: p.scMoney,
                  children: [(0, d.jsxs)("span", {
                    className: p.scBank,
                    children: ["$", N]
                  }), (0, d.jsxs)("span", {
                    className: p.scCash,
                    children: ["$", y]
                  })]
                })]
              })]
            })]
          })
        })),
        k = e => {
          let {
            dragThreshold: t = 80,
            interactionDelay: a = 1e3,
            mobileGutterWidth: c = 17,
            slideChangeCallback: r = null,
            slideClickCallback: n = null,
            children: l = [],
            disablePager: o = !1,
            disableSwiper: i = !1
          } = e;
          const u = (0, s.createRef)(),
            f = v(u, !1),
            [m, g] = (0, s.useState)(!1),
            [h, b] = (0, s.useState)(0),
            [p, x] = (0, s.useState)(0),
            [k, _] = (0, s.useState)([c]),
            [C, S] = (0, s.useState)(k[0]),
            [j, N] = (0, s.useState)(252),
            [w, y] = (0, s.useState)(0),
            [L, $] = (0, s.useState)([]),
            [E, I] = (0, s.useState)([]),
            [P, M] = (0, s.useState)(!1),
            R = e => {
              if (!0 === m || !0 === i) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              x(t)
            },
            T = e => {
              if (!0 === m || 0 === p || !0 === i) return;
              const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = a > p ? 1 : -1,
                c = Math.abs(p - a);
              c > t ? (s > 0 ? (() => {
                if (!0 === m) return;
                g(!0);
                const e = h - 1 < 0 ? 0 : h - 1;
                b(e), S(k[e]), r && r(e)
              })() : (() => {
                if (!0 === m) return;
                g(!0);
                let e = h + 1 >= k.length ? k.length - 1 : h + 1;
                e < 0 && (e = 0), b(e), S(k[e]), r && r(e)
              })(), x(0)) : S(k[h] + c * s)
            },
            U = () => {
              !0 !== m && !0 !== i && (g(!0), !0 !== m && (S(k[h]), x(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            l.forEach((() => {
              e.push((0, s.createRef)())
            })), $(e)
          }), [l]), (0, s.useEffect)((() => {
            if (L.length < 1) return;
            N(L[0]?.current?.clientWidth || 0);
            const e = L[0]?.current.firstChild,
              t = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              a = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            y(a + t)
          }), [L]), (0, s.useEffect)((() => {
            !1 !== m && setTimeout((() => {
              g(!1)
            }), a)
          }), [m, a]), (0, s.useEffect)((() => {
            _(l.map(((e, t) => (e => {
              let t = 0;
              const a = l.length;
              return 1 === a ? .5 * f - .5 * j - 2 * c + w : (0 === e && (t = c - e * j), e === a - 1 && a > 1 && (t = a * j * -1 + (f - (c - w))), e > 0 && e < a - 1 && (t = e * j * -1 + (.5 * f - .5 * j + .5 * w)), t)
            })(t)))), 1 === l.length ? M(!0) : M(!1)
          }), [u.current, l, f]), (0, s.useEffect)((() => {
            const e = (t = h, l.map(((e, a) => {
              const s = {
                active: !1
              };
              return a === t && (s.active = !0), s
            })));
            var t;
            I(e)
          }), [l, h]), (0, s.useEffect)((() => {
            !0 !== o && !0 !== i || S(k[0])
          }), [i, o, k]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("div", {
              className: "bc373b520fbdca8d2f0f",
              ref: u,
              onTouchStart: R,
              onTouchMove: T,
              onTouchEnd: U,
              onMouseDown: R,
              onMouseMove: T,
              onMouseUp: U,
              onClick: () => {
                null !== n && n(h)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, d.jsx)("div", {
                className: "b996a7ad30d05022b3d6",
                "data-interaction-blocked": m,
                "data-single-item": P,
                style: {
                  transform: P ? null : `translateX(${C}px)`
                },
                children: l.map(((e, t) => (0, d.jsx)("div", {
                  className: "eaede6f31bdcb7819f48",
                  ref: L[t],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), E.length > 1 && !1 === o && (0, d.jsx)("div", {
              className: "b27bbf1bb846c8fd855b",
              children: E.map((e => (0, d.jsx)("div", {
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
        C = (0, u.withTranslations)((e => {
          let {
            sc: t,
            t: c,
            user: l,
            charListHidden: o,
            hideCharacterList: i,
            refCharacterListDesktop: m,
            menuPadding: h,
            longCharList: p,
            setLongCharList: C,
            isMobileMode: S,
            setIsMobileMode: j
          } = e;
          const {
            lsSettings: N,
            mutateLSSettings: w
          } = (0, u.useRockstarWebLSSettings)(), {
            track: y
          } = n(), {
            currentCharId: L,
            hasNotification: $,
            setCurrentCharId: E,
            characters: I,
            crews: P,
            mobileCardWidth: M,
            charactersNeeded: R,
            navOpen: T
          } = (0, r.useRockstarUser)(), [U, O] = (0, s.useState)(null), [X, H] = (0, s.useState)(null), [D, W] = (0, s.useState)(!1), [B, F] = (0, s.useState)(!1), [V, A] = (0, s.useState)(0), [z, J] = (0, s.useState)(0), [Z, q] = (0, s.useState)(0), G = (0, s.createRef)(), K = v(G, !1), Y = (0, s.createRef)(), [Q, ee] = (0, s.useState)(0), te = e => {
            if (0 === e.length) return e;
            const t = e.map(((e, t) => ({
              ...e,
              characterId: t
            })));
            return t
          }, [ae, se] = (0, s.useState)(te(I?.gtao ?? [])), ce = {
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
            href: `https://${t.host}.rockstargames.com/settings`,
            target: "_blank",
            analytics: ce
          }, {
            text: c("Crews"),
            href: `https://${t.host}.rockstargames.com/member/${l.nickname}/crews`,
            target: "_blank",
            analytics: ce
          }, {
            text: c("Friends"),
            href: `https://${t.host}.rockstargames.com/member/${l.nickname}/friends`,
            target: "_blank",
            analytics: ce
          }, {
            text: c("Notifications"),
            href: `https://${t.host}.rockstargames.com/notifications`,
            target: "_blank",
            hasNotification: $,
            analytics: ce
          }, {
            text: c("Log Out"),
            href: `${t.logout}?returnUrl=${document.location.pathname}${document.location.search}`,
            target: "_self",
            analytics: ce
          }], ne = () => {
            if (Y.current) {
              const {
                current: e
              } = Y, t = e?.scrollHeight;
              ee(t)
            }
          };
          return (0, s.useEffect)((() => {
            const e = () => {
              J(window.innerWidth), q(window.innerHeight), window.innerWidth < 768 || window.innerHeight < 649 ? j(!0) : j(!1), i(!0)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, s.useEffect)((() => {
            let e = ae.length - 1;
            e < 0 && (e = 0), A(e);
            const t = ae.length > 0 ? ae[L] ?? ae[0] : null;
            if (!t) return;
            const a = null !== t ? g(t.platform, "large") : null;
            H(a), O(t), ae.length > 1 ? W(!0) : W(!1), C(ae.length - 1 > 3)
          }), [L, ae]), (0, s.useEffect)((() => {
            se(te(I?.gtao ?? []))
          }), [I]), (0, s.useEffect)((() => {
            F(h + M * V < K)
          }), [V, S, z, ae]), (0, s.useEffect)((() => {
            ne(), setTimeout(ne, 1e3)
          }), [Y, z, Z]), (0, s.useEffect)((() => {
            E(N?.currentCharId ?? 0)
          }), [N]), (0, s.useEffect)((() => {
            null !== L && w({
              key: "currentCharId",
              value: L
            })
          }), [L]), (0, d.jsxs)(d.Fragment, {
            children: [null !== U && "gtao" === R && (0, d.jsxs)("div", {
              className: _.scProfile,
              children: [(0, d.jsx)(x, {
                s: _,
                user: l,
                character: U,
                platformTag: X,
                crews: P
              }), !0 === D && (0, d.jsxs)("div", {
                className: _.scCharacterSelector,
                children: [(0, d.jsx)("button", {
                  className: _.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const t = !o;
                    i(t), y({
                      event: !0 === t ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === t ? "open" : "close",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": o,
                  children: (0, d.jsx)("span", {
                    children: c("Switch Character")
                  })
                }), !1 === S && (0, d.jsx)("div", {
                  className: _.scCharacterList,
                  "data-long-list": p,
                  "aria-hidden": o,
                  ref: m,
                  children: ae.map(((e, t) => (0, d.jsx)(b, {
                    user: l,
                    characterData: e,
                    setCurrentCharId: E,
                    currentCharId: L,
                    characterId: t
                  }, e.mugshotUrl)))
                }), !0 === S && (0, d.jsx)("div", {
                  className: _.scCharacterList,
                  "data-single-item": 2 === ae.length,
                  "data-swiper-disabled": B,
                  "aria-hidden": o,
                  ref: G,
                  children: (0, d.jsx)(k, {
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
                    children: ae.filter(((e, t) => t !== L)).map((e => (0, s.createElement)(b, {
                      user: l,
                      characterData: e,
                      setCurrentCharId: E,
                      currentCharId: L,
                      key: e.mugshotUrl
                    })))
                  })
                })]
              })]
            }), (0, d.jsxs)("nav", {
              className: _.scNav,
              children: [(0, d.jsxs)("button", {
                className: _.scNavHeader,
                type: "button",
                "data-opened": o,
                "data-nav-opened": T,
                onClick: e => {
                  e.stopPropagation(), !1 === o && i(!0)
                },
                children: [(0, d.jsx)("span", {
                  children: l.nickname
                }), (0, d.jsx)("img", {
                  src: a(456),
                  alt: "Social Club"
                })]
              }), (0, d.jsx)("div", {
                className: _.scNavWrap,
                "data-opened": o,
                "data-logged-in": "true",
                ref: Y,
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
        j = (0, u.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            navHidden: c = !1
          } = (0, l.useState)(), n = (0, r.useRockstarUser)(), [i, u] = (0, s.useState)(!0), [f, g] = (0, s.useState)(!1), [h, v] = (0, s.useState)(null), b = (0, l.useReactiveVar)(o.Z), {
            navOpen: p,
            setNavOpen: x
          } = n, k = n?.data, _ = void 0 !== k, j = (0, s.useRef)(), [N, w] = (0, s.useState)(0), y = (0, s.createRef)(), [L, $] = (0, s.useState)(!1), [E, I] = (0, s.useState)(0), [P, M] = (0, s.useState)(!1), R = (0, s.useCallback)((e => {
            u(e), j.current && !0 === e && (j.current.scrollTop = 0)
          }), [j]);
          return (0, s.useEffect)((() => {
            j.current && (!1 === i && !1 === f && (j.current.style.height = `${j.current.scrollHeight}px`), !0 === i && (j.current.style.height = null))
          }), [i, j, f]), (0, s.useEffect)((() => {
            v(!!k && k.user)
          }), [k]), (0, s.useEffect)((() => {
            const e = () => {
              x(!1), R(!0)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, s.useEffect)((() => {
            x(!1), R(!0)
          }), [c]), (0, s.useEffect)((() => {
            if (y.current) {
              const {
                current: e
              } = y, t = window.getComputedStyle(e);
              w(parseInt(t.paddingRight, 10) + parseInt(t.paddingLeft, 10))
            }
          }), [y]), (0, s.useEffect)((() => {
            document.body.style.overflowY = !0 === p && !0 === L ? "hidden" : "auto"
          }), [p, L]), (0, s.useEffect)((() => {
            M(window.navigator.userAgent.includes("Mac"))
          }), []), null === h ? null : (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("div", {
              className: [S.scMenu, p ? S.navOpen : ""].join(" "),
              "data-logged-in": _,
              "data-mac-browser": P,
              ref: y,
              children: [(0, d.jsx)("button", {
                className: S.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  I(t)
                },
                onTouchMove: e => {
                  if (0 === E) return;
                  const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(E - t) > 1 && (I(0), x(!1))
                },
                children: (0, d.jsx)("img", {
                  className: S.dragHandle,
                  src: a(762),
                  alt: t("Drag Menu Handle")
                })
              }), _ ? (0, d.jsx)(C, {
                user: h,
                sc: b,
                charListHidden: i,
                hideCharacterList: R,
                refCharacterListDesktop: j,
                menuPadding: N,
                longCharList: f,
                setLongCharList: g,
                isMobileMode: L,
                setIsMobileMode: $
              }) : (0, d.jsx)(m, {
                sc: b,
                navOpen: p
              })]
            }), (0, d.jsx)("div", {
              className: [S.scOverlay, p ? S.navOpen : ""].join(" "),
              "data-logged-in": _
            })]
          })
        })),
        N = a(493),
        w = a(916),
        y = (0, u.withTranslations)((() => {
          const {
            data: e,
            characters: t,
            setNavOpen: a,
            navOpen: c,
            currentCharId: l,
            charactersNeeded: o
          } = (0, r.useRockstarUser)(), {
            track: i
          } = n(), [u, f] = (0, s.useState)(null), [m, h] = (0, s.useState)(!1), [v, b] = (0, s.useState)(null), [p, x] = (0, s.useState)(!1), k = (0, s.useCallback)((e => {
            e.stopPropagation(), a(!c), i({
              event_action: "click",
              event_category: "account_menu",
              event: "account_menu_click",
              event_label: c ? "close" : "open",
              text: c ? "close" : "open"
            })
          }), [c]);
          return (0, s.useEffect)((() => {
            const a = e?.user?.id ?? !1,
              s = t?.[o]?.[l]?.mugshotUrl ?? e?.user?.avatar ?? (a ? N : w),
              c = g(t?.[o]?.[l]?.platform, "small") ?? null;
            b(c), f(s), h(a), x(!!t?.[o]?.[l]?.mugshotUrl)
          }), [e, o, t, l, N, w]), (0, d.jsxs)("button", {
            className: "f60d175890a158a2eeca",
            "data-img-set": p,
            "aria-label": "Toggle Social Club Menu",
            type: "button",
            onClick: e => k(e),
            children: [(0, d.jsx)("img", {
              className: "a9651d22866bf58ca4bd",
              src: u || "",
              onError: () => {
                f(N)
              },
              alt: e?.user?.nickname || ""
            }), m && null !== v && (0, d.jsx)("img", {
              className: "e8c699c608f17bc081aa",
              src: v.src,
              alt: v.alt
            }), m && (0, d.jsx)("div", {
              className: "acba28aeab3965a49753",
              "data-platform": t?.[o]?.[l]?.platform ?? null
            })]
          })
        })),
        L = {
          scMenu: "d9df13e6f2c2e538bf9a",
          opener: "e5ac5ae8ee36599f8b50",
          loggedOut: "b20587acf5fb4f24ff38",
          glNav: "da2df14f41a84f0ff4ff",
          navOpen: "dccfedbd3fa6491d20de"
        },
        $ = e => {
          let {
            sc: t,
            t: a
          } = e;
          const s = (0, u.useLocale)(),
            c = (0, u.toScLocaleString)(s),
            {
              track: r
            } = n(),
            l = `${document.location.pathname}${document.location.search}`,
            o = `${t.login}?returnUrl=${l}&lang=${c}`,
            i = `${t.signup}&returnUrl=${l}&lang=${c}`;
          return (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("a", {
              title: a("Sign In"),
              href: o,
              onClick: () => {
                r({
                  event_action: "login",
                  event_category: "cta",
                  event: "cta_login",
                  event_label: "sc menu",
                  text: a("Sign In").toLowerCase(),
                  link_url: o
                })
              },
              children: a("Sign In")
            }), (0, d.jsx)("a", {
              title: a("Join Social Club"),
              href: i,
              onClick: () => {
                r({
                  event_action: "register",
                  event_category: "cta",
                  event: "cta_signup",
                  event_label: "sc menu",
                  text: a("Join Social Club").toLowerCase(),
                  link_url: i
                })
              },
              children: a("Join Social Club")
            })]
          })
        },
        E = e => {
          let {
            sc: t,
            t: a,
            user: s
          } = e;
          const {
            track: c
          } = n();
          return (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("a", {
              className: [L.icon, L.icon_profile].join(" "),
              href: `${s.profile_link}`,
              target: "_blank",
              rel: "noreferrer",
              title: a("View My Profile"),
              onClick: () => {
                c({
                  event_action: "click",
                  event_category: "account_menu",
                  event: "account_menu_click",
                  event_label: "sc menu",
                  text: a("View My Profile").toLowerCase()
                })
              },
              children: a("View My Profile")
            }), (0, d.jsx)("a", {
              className: [L.icon, L.icon_settings].join(" "),
              href: `https://${t.host}.rockstargames.com/settings`,
              target: "_blank",
              rel: "noreferrer",
              title: a("Settings"),
              onClick: () => {
                c({
                  event_action: "click",
                  event_category: "account_menu",
                  event: "account_menu_click",
                  event_label: "sc menu",
                  text: a("Settings").toLowerCase()
                })
              },
              children: a("Settings")
            }), (0, d.jsx)("a", {
              className: [L.icon, L.icon_messages].join(" "),
              href: `https://${t.host}.rockstargames.com/message`,
              target: "_blank",
              rel: "noreferrer",
              title: a("Messages"),
              onClick: () => {
                c({
                  event_action: "click",
                  event_category: "account_menu",
                  event: "account_menu_click",
                  event_label: "sc menu",
                  text: a("Messages").toLowerCase()
                })
              },
              children: a("Messages")
            }), (0, d.jsx)("a", {
              className: [L.icon, L.icon_notifications].join(" "),
              href: `https://${t.host}.rockstargames.com/notifications`,
              target: "_blank",
              rel: "noreferrer",
              title: a("Notifications"),
              onClick: () => {
                c({
                  event_action: "click",
                  event_category: "account_menu",
                  event: "account_menu_click",
                  event_label: "sc menu",
                  text: a("Notifications").toLowerCase()
                })
              },
              children: a("Notifications")
            }), (0, d.jsx)("a", {
              className: [L.icon, L.icon_friends].join(" "),
              href: `https://${t.host}.rockstargames.com/member/${s.nickname}/friends`,
              target: "_blank",
              rel: "noreferrer",
              title: a("Friend Requests"),
              onClick: () => {
                c({
                  event_action: "click",
                  event_category: "account_menu",
                  event: "account_menu_click",
                  event_label: "sc menu",
                  text: a("Friend Requests").toLowerCase()
                })
              },
              children: a("Friend Requests")
            }), (0, d.jsx)("a", {
              className: [L.icon, L.icon_crews].join(" "),
              href: `https://${t.host}.rockstargames.com/member/${s.nickname}/crews`,
              target: "_blank",
              rel: "noreferrer",
              title: a("Crew Invites"),
              onClick: () => {
                c({
                  event_action: "click",
                  event_category: "account_menu",
                  event: "account_menu_click",
                  event_label: "sc menu",
                  text: a("Crew Invites").toLowerCase()
                })
              },
              children: a("Crew Invites")
            }), (0, d.jsx)("a", {
              href: `${t.logout}?returnUrl=${document.location.pathname}${document.location.search}`,
              className: [L.icon, L.icon_logout].join(" "),
              title: a("Log Out"),
              onClick: () => {
                c({
                  event_action: "click",
                  event_category: "account_menu",
                  event: "account_menu_click",
                  event_label: "sc menu",
                  text: a("Log Out").toLowerCase(),
                  link_url: `${t.logout}?returnUrl=${document.location.pathname}${document.location.search}`
                })
              },
              children: a("Log Out")
            })]
          })
        },
        I = (0, u.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            navHidden: a = !1
          } = (0, l.useState)(), {
            data: c
          } = (0, r.useRockstarUser)(), [n, i] = (0, s.useState)(null), [u, f] = (0, s.useState)(!1), [m, g] = (0, s.useState)(u), h = (0, l.useReactiveVar)(o.Z);
          return (0, s.useEffect)((() => {
            i(!!c && c.user)
          }), [c]), (0, s.useEffect)((() => {
            const e = () => {
              f(!1), g(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, s.useEffect)((() => {
            a ? (g(u), f(!1)) : (f(m), g(!1))
          }), [a]), null === n ? null : (0, d.jsxs)("div", {
            className: [L.scMenu, n.logged_in ? L.loggedIn : L.loggedOut, a ? L.navHidden : ""].join(" "),
            children: [(0, d.jsx)("button", {
              onClick: e => {
                e.stopPropagation(), e.preventDefault(), f(!u)
              },
              className: L.opener,
              style: n.logged_in ? {
                backgroundImage: `url(${n.avatar})`
              } : {},
              "aria-label": "Toggle Social Club Menu",
              type: "submit"
            }), (0, d.jsx)("nav", {
              className: [L.glNav, u ? L.navOpen : ""].join(" "),
              role: "navigation",
              title: "Social Club",
              children: n.logged_in ? (0, d.jsx)(E, {
                user: n,
                sc: h,
                t
              }) : (0, d.jsx)($, {
                sc: h,
                t
              })
            })]
          })
        }))
    },
    456: (e, t, a) => {
      e.exports = a.p + "img/04f91124ddca6945134c.svg"
    },
    762: (e, t, a) => {
      e.exports = a.p + "img/cfb657cdc749132fc8fd.svg"
    },
    916: (e, t, a) => {
      e.exports = a.p + "img/61ed3b631437f6495d9c.svg"
    },
    493: (e, t, a) => {
      e.exports = a.p + "img/8a7ecf45a9551607393f.png"
    },
    48: (e, t, a) => {
      e.exports = a.p + "img/72b01a5fe559550897c7.svg"
    },
    466: (e, t, a) => {
      e.exports = a.p + "img/16fc79e538f405dac692.svg"
    },
    175: (e, t, a) => {
      e.exports = a.p + "img/3056dd100cdc9af4c8f8.svg"
    },
    733: (e, t, a) => {
      e.exports = a.p + "img/b9049c3fc2e23432cd99.svg"
    },
    647: (e, t, a) => {
      e.exports = a.p + "img/b38c704a4f0f93dbaa71.svg"
    },
    816: (e, t, a) => {
      e.exports = a.p + "img/e18cbaeff16e28472704.svg"
    },
    848: (e, t, a) => {
      e.exports = a.p + "img/73fac91764a07506aa44.svg"
    },
    731: (e, t, a) => {
      e.exports = a.p + "img/ffdc38b81812447f1a52.svg"
    },
    3: (e, t, a) => {
      e.exports = a.p + "img/e06e7d21fd0c72e7b049.svg"
    },
    748: (e, t, a) => {
      e.exports = a.p + "img/eaef99f273a784a715fc.svg"
    },
    910: (e, t, a) => {
      e.exports = a.p + "img/c56e571a937094f77aba.svg"
    },
    185: (e, t, a) => {
      e.exports = a.p + "img/dc0ee5af18bf15f7ce11.svg"
    },
    981: (e, t, a) => {
      e.exports = a.p + "img/55e4ef9f3127c7c76d92.svg"
    },
    60: (e, t, a) => {
      e.exports = a.p + "img/83bc0bb48baad355b5f3.svg"
    }
  }
]);