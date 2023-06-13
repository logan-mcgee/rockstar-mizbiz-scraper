(self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [680, 408], {
    851: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => r
      });
      var s = t(859);
      const c = (0, t(929).getScConfigForOrigin)(),
        r = (0, s.makeVar)(c)
    },
    932: (e, a, t) => {
      "use strict";
      t.d(a, {
        R: () => m,
        Z: () => p
      });
      var s = t(859);
      const c = (0, s.makeVar)(!1),
        r = e => c(e),
        n = (0, s.makeVar)(!1),
        i = e => n(e),
        o = (0, s.makeVar)(null),
        l = e => o(e),
        d = (0, s.makeVar)(null),
        u = e => d(e),
        m = (0, s.makeVar)(null),
        b = (0, s.makeVar)(null),
        f = e => b(e),
        h = (0, s.makeVar)(null),
        g = e => h(e),
        p = () => {
          const e = (0, s.useReactiveVar)(b),
            a = (0, s.useReactiveVar)(o),
            t = (0, s.useReactiveVar)(c),
            m = (0, s.useReactiveVar)(n),
            p = (0, s.useReactiveVar)(d);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: m,
            navOpen: t,
            userData: (0, s.useReactiveVar)(h),
            selectedCharacterTuple: p,
            setCharactersNeeded: f,
            setCurrentCharId: l,
            setHasNotifications: i,
            setNavOpen: r,
            setSelectedCharacterTuple: u,
            setUserData: g
          }
        }
    },
    680: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Menu: () => C,
        MenuButton: () => E,
        scConfig: () => l.Z,
        useGtmTrack: () => r,
        useRockstarUser: () => n.useRockstarUser,
        useRockstarUserState: () => i.Z,
        useRpCategory: () => g,
        useScConfig: () => d
      });
      var s = t(822),
        c = t(331);
      const r = () => {
        const [e, a] = (0, s.useState)([]), [t, r] = (0, s.useState)(null), {
          data: i,
          loggedIn: o
        } = (0, n.useRockstarUser)();
        (0, s.useEffect)((() => {
          if (i && null !== o) {
            const t = l(i);
            e.length && t && (e.forEach((e => {
              (0, c.track)({
                ...e,
                ...t
              })
            })), a([])), r(t)
          }
        }), [i, o, e]);
        const l = e => {
          const a = [],
            t = [],
            s = [];
          return Object.keys(e.characters).forEach((c => {
            e.characters[c].length && (t.push(c), e.characters[c].forEach((e => {
              "gtao" === c && (s.includes(e.platform) || s.push(e.platform)), a.includes(e.platform) || a.push(e.platform)
            })))
          })), {
            member_id: e.id ?? void 0,
            login_state: o ?? !1,
            platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
            games_played: t.length ? t.join("|").toUpperCase() : void 0,
            gtao_platforms_played: s.length ? s.join("|").toUpperCase() : void 0
          }
        };
        return {
          track: s => {
            if (null === o || !i || !t) {
              const t = [...e];
              return t.push({
                ...s
              }), a(t)
            }
            return (0, c.track)({
              ...s,
              ...t
            })
          }
        }
      };
      var n = t(408),
        i = t(932),
        o = t(859),
        l = t(851);
      const d = () => (0, o.useReactiveVar)(l.Z);
      var u = t(929);
      var m = t(706);
      const b = e => {
          let {
            text: a,
            target: t,
            href: s,
            analytics: c,
            hasNotifications: n = !1
          } = e;
          const {
            track: i
          } = r();
          return (0, m.jsxs)("a", {
            className: "_52bd8c97e5b56b1bf1f57df4d89347d3a5a4",
            title: a,
            href: s,
            target: t,
            rel: "noreferrer",
            onClick: () => {
              i({
                ...c,
                event_label: a.toLowerCase(),
                text: a.toLowerCase(),
                link_url: s
              })
            },
            children: [a, n && (0, m.jsx)("span", {
              className: "_52bd8c97e5b56b1bdfdd843dadc8fe0cc756"
            })]
          }, a)
        },
        f = (0, u.withTranslations)((e => {
          let {
            sc: a,
            t
          } = e;
          const {
            setSelectedCharacterTuple: c
          } = (0, i.Z)(), r = (0, u.useLocale)(), n = (0, u.toScLocaleString)(r), o = `${document.location.pathname}${document.location.search}`, l = `${a.login}?returnUrl=${o}&lang=${n}`, d = `${a.signup}&returnUrl=${o}&lang=${n}`, f = [{
            text: t("Sign In"),
            href: l,
            analytics: {
              event_action: "login",
              event_category: "cta",
              event: "cta_login"
            }
          }, {
            text: t("Join Social Club"),
            href: d,
            analytics: {
              event_action: "register",
              event_category: "cta",
              event: "cta_signup"
            }
          }];
          return (0, s.useEffect)((() => {
            c(!1)
          }), []), (0, m.jsx)("nav", {
            className: "_52bd8c97e5b56b1bb7294b05abb682e53b6c",
            "aria-label": "sc menu",
            title: t("Social Club"),
            children: (0, m.jsx)("div", {
              className: "_52bd8c97e5b56b1bc09cf59bedf70da20f41",
              "data-logged-in": "false",
              children: f.map((e => (0, s.createElement)(b, {
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
        g = e => t(e < 100 ? 910 : e > 99 && e < 500 ? 185 : e > 499 && e < 750 ? 60 : 981),
        p = (0, u.withTranslations)((e => {
          let {
            characterData: a
          } = e;
          const {
            currentCharId: c,
            setCurrentCharId: n
          } = (0, i.Z)(), {
            track: o
          } = r(), l = (0, s.createRef)(), {
            platform: d,
            platformUsername: u,
            mugshotUrl: b,
            stats: f
          } = a, [p, v] = (0, s.useState)(b), [k] = (0, s.useState)(a.index), _ = h(d, "large"), x = c === a.index;
          return (0, m.jsxs)("button", {
            className: "_52bd8c97e5b56b1bdee06086788899b4002f",
            type: "button",
            "aria-hidden": x,
            onClick: e => {
              e.stopPropagation(), n(k);
              let a = "";
              "pc" === d ? a = "PC" : "ps4" === d ? a = "PS4" : "ps5" === d ? a = "PS5" : "xboxone" === d ? a = "Xbox One" : "xboxsx" === d && (a = "Xbox Series X|S"), o({
                event: "character_selector_select",
                event_category: "character_selector",
                event_action: "select",
                event_label: a,
                position: k
              })
            },
            ref: l,
            children: [(0, m.jsx)("div", {
              className: "_52bd8c97e5b56b1bff6279c9ff9b88f1f1f6",
              "data-size": "small",
              children: (0, m.jsx)("img", {
                src: p,
                alt: u,
                onError: () => {
                  v(t(493))
                }
              })
            }), (0, m.jsxs)("div", {
              className: "_52bd8c97e5b56b1bdb0c1a05fff15a2418f2",
              children: [(0, m.jsxs)("div", {
                className: "_52bd8c97e5b56b1bfd06288478a14cd32f05",
                children: [(0, m.jsx)("img", {
                  src: _.src,
                  alt: _.alt
                }), (0, m.jsx)("div", {
                  className: "_52bd8c97e5b56b1be176d7a04bacf4e0d725",
                  "data-size": "small",
                  children: u
                })]
              }), (0, m.jsx)("div", {
                className: "_52bd8c97e5b56b1bc08f37e001f1b148b046",
                children: (0, m.jsxs)("div", {
                  className: "_52bd8c97e5b56b1bf4e32f1fa3917b84d463",
                  children: [(0, m.jsx)("img", {
                    className: "_52bd8c97e5b56b1bf519c818d4a8d1520bfe",
                    src: g(f.overview.rank.value),
                    alt: "RP Category"
                  }), (0, m.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        })),
        v = {
          scNavWrapper: "_52bd8c97e5b56b1bc3de120a19e6aafa6a68",
          rpLevel: "_52bd8c97e5b56b1ba2e820529d46c5f70e84",
          rpIcon: "_52bd8c97e5b56b1baf0e82b0e5d21b75663d",
          scProfileDetails: "_52bd8c97e5b56b1bc1282f49e4228a2879de",
          scAvatar: "_52bd8c97e5b56b1bcf0c4dbbcd8335929278",
          scAvatarPlatform: "_52bd8c97e5b56b1bc525dacab0321297baef",
          scProfileStats: "_52bd8c97e5b56b1bb99e82fade4d0e6ee847",
          scNames: "_52bd8c97e5b56b1bd1c87934eb071ff85281",
          scTagsNames: "_52bd8c97e5b56b1bd92a6e128c9fe3167010",
          scUserName: "_52bd8c97e5b56b1bbd8f666c94e4ab99427e",
          scCrewName: "_52bd8c97e5b56b1ba3366651dd3b56c45d56",
          scCrewRankBar: "_52bd8c97e5b56b1bdc7ce2270b1c04168b20",
          scCrewRankBarItem: "_52bd8c97e5b56b1bc0f3bee37355ef121582",
          scProgress: "_52bd8c97e5b56b1bb3232d788aa7f1095ffe",
          scRpLevel: "_52bd8c97e5b56b1baeca1876088169a80360",
          scRpIcon: "_52bd8c97e5b56b1bf3226c91d969e7ea84f3",
          scMoney: "_52bd8c97e5b56b1bf1091a6533945fd2eee3",
          scCash: "_52bd8c97e5b56b1bcc969e3d73b7e5134a6f",
          scBank: "_52bd8c97e5b56b1be575e510309d38665272"
        },
        k = (0, u.withTranslations)((e => {
          let {
            character: a,
            platformTag: c
          } = e;
          const {
            data: i
          } = (0, n.useRockstarUser)(), {
            track: o
          } = r(), [l, d] = (0, s.useState)([]), [u, b] = (0, s.useState)(null), [f, h] = (0, s.useState)(null), [p, k] = (0, s.useState)(!1), [_, x] = (0, s.useState)(-1), [S, N] = (0, s.useState)([]), [w, C] = (0, s.useState)(0), j = t(493), [y, E] = (0, s.useState)("0"), [R, I] = (0, s.useState)("0"), P = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), T = () => {
            L((0, m.jsx)("img", {
              src: j,
              alt: i.nickname
            }))
          }, [U, L] = (0, s.useState)((0, m.jsx)("img", {
            className: v.scAvatarImg,
            src: a.mugshotUrl,
            alt: i.nickname,
            onError: T
          }));
          (0, s.useEffect)((() => {
            d(i.crews ?? [])
          }), [i]), (0, s.useEffect)((() => {
            L((0, m.jsx)("img", {
              src: a.mugshotUrl,
              alt: i.nickname,
              onError: T
            })), E(P(a.stats.overview.bank.value)), I(P(a.stats.overview.cash.value)), C(a.stats.overview.rank.value)
          }), [a, i]), (0, s.useEffect)((() => {
            l && l.forEach((e => {
              !0 === e.isPrimary && (b(e.crewTag), h(e.crewColour), x(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [l]), (0, s.useEffect)((() => {
            const e = [];
            if (!p && _ > -1)
              for (let a = 5; a > _; a -= 1) e.push((0, m.jsx)("div", {
                className: v.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${a}`));
            N(e)
          }), [_, p, f]);
          const D = e => {
            e.stopPropagation(), o({
              event: "character_selector_profile_click",
              event_category: "character_selector",
              event_action: "profile_click",
              event_label: c.alt,
              link_url: void 0
            })
          };
          return (0, m.jsxs)("div", {
            className: v.scProfileDetails,
            onClick: D,
            onKeyUp: D,
            role: "button",
            tabIndex: 0,
            children: [(0, m.jsxs)("div", {
              className: v.scAvatar,
              children: [U, (0, m.jsx)("div", {
                className: v.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, m.jsx)("img", {
                  src: c.src,
                  alt: c.alt
                })
              })]
            }), (0, m.jsxs)("div", {
              className: v.scProfileStats,
              children: [(0, m.jsx)("div", {
                className: v.scNames,
                children: (0, m.jsxs)("div", {
                  className: v.scTagsNames,
                  children: [(0, m.jsx)("span", {
                    className: v.scUserName,
                    children: a.platformUsername
                  }), u && (0, m.jsxs)("span", {
                    className: v.scCrewName,
                    "data-arrow-tag": p,
                    children: [u, !p && (0, m.jsx)("div", {
                      className: v.scCrewRankBar,
                      children: S
                    })]
                  })]
                })
              }), (0, m.jsxs)("div", {
                className: v.scProgress,
                children: [(0, m.jsxs)("div", {
                  className: v.scRpLevel,
                  children: [(0, m.jsx)("img", {
                    className: v.scRpIcon,
                    src: g(w),
                    alt: "RP Category"
                  }), (0, m.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, m.jsxs)("div", {
                  className: v.scMoney,
                  children: [(0, m.jsxs)("span", {
                    className: v.scBank,
                    children: ["$", y]
                  }), (0, m.jsxs)("span", {
                    className: v.scCash,
                    children: ["$", R]
                  })]
                })]
              })]
            })]
          })
        })),
        _ = (e, a) => {
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
        x = e => {
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
          const d = (0, s.createRef)(),
            u = _(d, !1),
            [b, f] = (0, s.useState)(!1),
            [h, g] = (0, s.useState)(0),
            [p, v] = (0, s.useState)(0),
            [k, x] = (0, s.useState)([c]),
            [S, N] = (0, s.useState)(k[0]),
            [w, C] = (0, s.useState)(252),
            [j, y] = (0, s.useState)(0),
            [E, R] = (0, s.useState)([]),
            [I, P] = (0, s.useState)([]),
            [T, U] = (0, s.useState)(!1),
            L = e => {
              if (!0 === b || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              v(a)
            },
            D = e => {
              if (!0 === b || 0 === p || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > p ? 1 : -1,
                c = Math.abs(p - t);
              c > a ? (s > 0 ? (() => {
                if (!0 === b) return;
                f(!0);
                const e = h - 1 < 0 ? 0 : h - 1;
                g(e), N(k[e]), r && r(e)
              })() : (() => {
                if (!0 === b) return;
                f(!0);
                let e = h + 1 >= k.length ? k.length - 1 : h + 1;
                e < 0 && (e = 0), g(e), N(k[e]), r && r(e)
              })(), v(0)) : N(k[h] + c * s)
            },
            M = () => {
              !0 !== b && !0 !== l && (f(!0), !0 !== b && (N(k[h]), v(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, s.createRef)())
            })), R(e)
          }), [i]), (0, s.useEffect)((() => {
            if (E.length < 1) return;
            C(E[0]?.current?.clientWidth || 0);
            const e = E[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            y(t + a)
          }), [E]), (0, s.useEffect)((() => {
            !1 !== b && setTimeout((() => {
              f(!1)
            }), t)
          }), [b, t]), (0, s.useEffect)((() => {
            x(i.map(((e, a) => (e => {
              let a = 0;
              const t = i.length;
              return 1 === t ? .5 * u - .5 * w - 2 * c + j : (0 === e && (a = c - e * w), e === t - 1 && t > 1 && (a = t * w * -1 + (u - (c - j))), e > 0 && e < t - 1 && (a = e * w * -1 + (.5 * u - .5 * w + .5 * j)), a)
            })(a)))), 1 === i.length ? U(!0) : U(!1)
          }), [d.current, i, u]), (0, s.useEffect)((() => {
            const e = (a = h, i.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            P(e)
          }), [i, h]), (0, s.useEffect)((() => {
            !0 !== o && !0 !== l || N(k[0])
          }), [l, o, k]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("div", {
              className: "_52bd8c97e5b56b1bbc373b520fbdca8d2f0f",
              ref: d,
              onTouchStart: L,
              onTouchMove: D,
              onTouchEnd: M,
              onMouseDown: L,
              onMouseMove: D,
              onMouseUp: M,
              onClick: () => {
                null !== n && n(h)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, m.jsx)("div", {
                className: "_52bd8c97e5b56b1bb996a7ad30d05022b3d6",
                "data-interaction-blocked": b,
                "data-single-item": T,
                style: {
                  transform: T ? null : `translateX(${S}px)`
                },
                children: i.map(((e, a) => (0, m.jsx)("div", {
                  className: "_52bd8c97e5b56b1beaede6f31bdcb7819f48",
                  ref: E[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), I.length > 1 && !1 === o && (0, m.jsx)("div", {
              className: "_52bd8c97e5b56b1bb27bbf1bb846c8fd855b",
              children: I.map((e => (0, m.jsx)("div", {
                className: "_52bd8c97e5b56b1baf5997d414baf32e73b3",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        S = {
          scNavWrapper: "_52bd8c97e5b56b1bb37a25bc6761bd882dab",
          rpLevel: "_52bd8c97e5b56b1bde9cbe40526987515089",
          rpIcon: "_52bd8c97e5b56b1bc26aa647a6b6ed6ce54f",
          scProfile: "_52bd8c97e5b56b1baa422ee77017648494c4",
          scCharacterSelector: "_52bd8c97e5b56b1ba43958d6263ec45d37c8",
          scCharacterSelectBtn: "_52bd8c97e5b56b1bba70cc2e07922955d3eb",
          open: "_52bd8c97e5b56b1be220b500bf382530bec5",
          scCharacterList: "_52bd8c97e5b56b1bab26bb433acbeec7eedf",
          scNav: "_52bd8c97e5b56b1bdcf1528386921ba96c80",
          scNavHeader: "_52bd8c97e5b56b1bce29cf42c14f31f963f7",
          scNavWrap: "_52bd8c97e5b56b1bc866301c326745076636"
        },
        N = (0, u.withTranslations)((e => {
          let {
            sc: a,
            t: c,
            charListHidden: l,
            hideCharacterList: d,
            refCharacterListDesktop: f,
            menuPadding: g,
            longCharList: v,
            setLongCharList: N,
            isMobileMode: w,
            setIsMobileMode: C
          } = e;
          const {
            lsSettings: j
          } = (0, u.useRockstarWebLSSettings)(), {
            track: y
          } = r(), E = (0, o.useRockstarTokenPing)(), {
            data: R,
            loggedIn: I
          } = (0, n.useRockstarUser)(), {
            charactersNeeded: P,
            currentCharId: T,
            hasNotifications: U,
            navOpen: L,
            setCurrentCharId: D,
            setHasNotifications: M,
            setSelectedCharacterTuple: $,
            setUserData: O
          } = (0, i.Z)(), [F, B] = (0, s.useState)(null), [z, X] = (0, s.useState)(null), [H, V] = (0, s.useState)(!1), [A, W] = (0, s.useState)(!1), [Z, q] = (0, s.useState)(0), [G, K] = (0, s.useState)(0), [Q, J] = (0, s.useState)(0), Y = (0, s.createRef)(), ee = _(Y, !1), ae = (0, s.createRef)(), [te, se] = (0, s.useState)(0), [ce, re] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            re(R.characters[P] ?? [])
          }), [R, P]), (0, s.useEffect)((() => {
            R && O(R)
          }), [R]), (0, s.useEffect)((() => {
            const e = R?.characters.gtao;
            if (null !== I && !e.length) return void $(!1);
            if (null == T || !e.length) return;
            const a = e?.[T] ?? e?.[0] ?? null;
            $(!!a?.platform && [a.platform, a.characterSlot])
          }), [T, R, I]), (0, s.useEffect)((() => {
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
              M(a > 0 || e.total > 0)
            })()
          }), [R]);
          const ne = {
              event_action: "click",
              event_category: "account_menu",
              event: "account_menu_click",
              environment: ""
            },
            ie = [{
              text: c("View My Profile"),
              href: R.profile_link,
              target: "_blank",
              analytics: ne
            }, {
              text: c("Settings"),
              href: `https://${a.host}.rockstargames.com/settings`,
              target: "_blank",
              analytics: ne
            }, {
              text: c("Crews"),
              href: `https://${a.host}.rockstargames.com/member/${R.nickname}/crews`,
              target: "_blank",
              analytics: ne
            }, {
              text: c("Friends"),
              href: `https://${a.host}.rockstargames.com/member/${R.nickname}/friends`,
              target: "_blank",
              analytics: ne
            }, {
              text: c("Notifications"),
              href: `https://${a.host}.rockstargames.com/notifications`,
              target: "_blank",
              hasNotifications: U,
              analytics: ne
            }, {
              text: c("Log Out"),
              href: `${a.logout}?returnUrl=${document.location.pathname}${document.location.search}`,
              target: "_self",
              analytics: ne
            }],
            oe = () => {
              if (ae.current) {
                const {
                  current: e
                } = ae, a = e?.scrollHeight;
                se(a)
              }
            };
          return (0, s.useEffect)((() => {
            const e = () => {
              K(window.innerWidth), J(window.innerHeight), window.innerWidth < 768 || window.innerHeight < 649 ? C(!0) : C(!1), d(!0)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, s.useEffect)((() => {
            let e = ce.length - 1;
            e < 0 && (e = 0), q(e);
            const a = ce.length > 0 ? ce[T] ?? ce[0] : null;
            if (!a) return;
            const t = null !== a ? h(a.platform, "large") : null;
            X(t), B(a), ce.length > 1 ? V(!0) : V(!1), N(ce.length - 1 > 3)
          }), [T, ce]), (0, s.useEffect)((() => {
            W(g + 0 * Z < ee)
          }), [Z, w, G, ce]), (0, s.useEffect)((() => {
            oe(), setTimeout(oe, 1e3)
          }), [ae, G, Q]), (0, s.useEffect)((() => {
            const e = j?.currentCharId ?? 0;
            D(Math.max(0, Math.min(e, ce.length - 1)))
          }), [ce, j]), (0, m.jsxs)(m.Fragment, {
            children: [null !== F && "gtao" === P && (0, m.jsxs)("div", {
              className: S.scProfile,
              children: [(0, m.jsx)(k, {
                s: S,
                character: F,
                platformTag: z
              }), !0 === H && (0, m.jsxs)("div", {
                className: S.scCharacterSelector,
                children: [(0, m.jsx)("button", {
                  className: S.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !l;
                    d(a), y({
                      event: !0 === a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": l,
                  children: (0, m.jsx)("span", {
                    children: c("Switch Character")
                  })
                }), !1 === w && (0, m.jsx)("div", {
                  className: S.scCharacterList,
                  "data-long-list": v,
                  "aria-hidden": l,
                  ref: f,
                  children: ce.map((e => (0, m.jsx)(p, {
                    characterData: e
                  }, e.mugshotUrl)))
                }), !0 === w && (0, m.jsx)("div", {
                  className: S.scCharacterList,
                  "data-single-item": 2 === ce.length,
                  "data-swiper-disabled": A,
                  "aria-hidden": l,
                  ref: Y,
                  children: (0, m.jsx)(x, {
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
                    disablePager: A,
                    disableSwiper: A,
                    children: ce.filter(((e, a) => a !== T)).map((e => (0, s.createElement)(p, {
                      characterData: e,
                      key: e.mugshotUrl
                    })))
                  })
                })]
              })]
            }), (0, m.jsxs)("nav", {
              className: S.scNav,
              children: [(0, m.jsxs)("button", {
                className: S.scNavHeader,
                type: "button",
                "data-opened": l,
                "data-nav-opened": L,
                onClick: e => {
                  e.stopPropagation(), !1 === l && d(!0)
                },
                children: [(0, m.jsx)("span", {
                  children: R.nickname
                }), (0, m.jsx)("img", {
                  src: t(456),
                  alt: "Social Club"
                })]
              }), (0, m.jsx)("div", {
                className: S.scNavWrap,
                "data-opened": l,
                "data-logged-in": "true",
                ref: ae,
                style: {
                  maxHeight: `${te}px`
                },
                children: ie.map((e => (0, s.createElement)(b, {
                  ...e,
                  key: e.text
                })))
              })]
            })]
          })
        })),
        w = {
          scNavWrapper: "_52bd8c97e5b56b1bd7bac12a82ffc52818c3",
          rpLevel: "_52bd8c97e5b56b1be2e5c1bfb71e9ff95838",
          rpIcon: "_52bd8c97e5b56b1bcd60c6f857f6da4611af",
          scMenu: "_52bd8c97e5b56b1bfb9966f65cb155635c74",
          navOpen: "_52bd8c97e5b56b1bff3d86ee58e3e40e9424",
          dragHandle: "_52bd8c97e5b56b1bdc573b70b5fa74fbc251",
          dragHandleBtn: "_52bd8c97e5b56b1bcbaf32fb58cd4992ca4e",
          scOverlay: "_52bd8c97e5b56b1bd6934ce9e7a8c717c2f5"
        },
        C = (0, u.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBodyIsScrollable: c
          } = (0, u.useBodyScrollable)(), {
            navHidden: r = !1
          } = (0, o.useState)(), {
            loggedIn: d
          } = (0, n.useRockstarUser)(), {
            currentCharId: b,
            navOpen: h,
            setNavOpen: g
          } = (0, i.Z)(), [p, v] = (0, s.useState)(!0), [k, _] = (0, s.useState)(!1), x = (0, o.useReactiveVar)(l.Z), S = (0, s.useRef)(), [C, j] = (0, s.useState)(0), y = (0, s.createRef)(), [E, R] = (0, s.useState)(!1), [I, P] = (0, s.useState)(0), [T, U] = (0, s.useState)(!1), {
            mutateLSSettings: L
          } = (0, u.useRockstarWebLSSettings)(), D = (0, s.useCallback)((e => {
            v(e), S.current && !0 === e && (S.current.scrollTop = 0)
          }), [S]);
          return (0, s.useEffect)((() => {
            null !== b && L({
              key: "currentCharId",
              value: b
            }), !1 === d && L({
              key: "currentCharId",
              value: null
            })
          }), [b, d]), (0, s.useEffect)((() => {
            S.current && (!1 === p && !1 === k && (S.current.style.height = `${S.current.scrollHeight}px`), !0 === p && (S.current.style.height = null))
          }), [p, S, k]), (0, s.useEffect)((() => {
            const e = () => {
              g(!1), D(!0)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, s.useEffect)((() => {
            g(!1), D(!0)
          }), [r]), (0, s.useEffect)((() => {
            if (y.current) {
              const {
                current: e
              } = y, a = window.getComputedStyle(e);
              j(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [y]), (0, s.useEffect)((() => {
            c(!E || !h)
          }), [h, E]), (0, s.useEffect)((() => {
            U(window.navigator.userAgent.includes("Mac"))
          }), []), null === d ? null : (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsxs)("div", {
              className: [w.scMenu, h ? w.navOpen : ""].join(" "),
              "data-logged-in": d,
              "data-mac-browser": T,
              ref: y,
              children: [(0, m.jsx)("button", {
                className: w.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  P(a)
                },
                onTouchMove: e => {
                  if (0 === I) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(I - a) > 1 && (P(0), g(!1))
                },
                children: (0, m.jsx)("img", {
                  className: w.dragHandle,
                  src: t(762),
                  alt: a("Drag Menu Handle")
                })
              }), d ? (0, m.jsx)(N, {
                sc: x,
                charListHidden: p,
                hideCharacterList: D,
                refCharacterListDesktop: S,
                menuPadding: C,
                longCharList: k,
                setLongCharList: _,
                isMobileMode: E,
                setIsMobileMode: R
              }) : (0, m.jsx)(f, {
                sc: x,
                navOpen: h
              })]
            }), (0, m.jsx)("div", {
              className: [w.scOverlay, h ? w.navOpen : ""].join(" "),
              "data-logged-in": d
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
            navOpen: c,
            setNavOpen: o
          } = (0, i.Z)(), {
            track: l
          } = r(), [d, u] = (0, s.useState)(null), [b, f] = (0, s.useState)(!1), [g, p] = (0, s.useState)(null), [v, k] = (0, s.useState)(!1), [_, x] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            x(e.characters[a] ?? [])
          }), [e, a]);
          const S = (0, s.useCallback)((e => {
            e.stopPropagation(), o(!c), l({
              event_action: "click",
              event_category: "account_menu",
              event: "account_menu_click",
              event_label: c ? "close" : "open",
              text: c ? "close" : "open"
            })
          }), [c]);
          return (0, s.useEffect)((() => {
            const a = e?.id ?? !1,
              s = a ? (_?.[t]?.mugshotUrl ?? e?.avatar) || j : y,
              c = h(_?.[t]?.platform, "small") ?? null;
            p(c), u(s), f(a), k(!!_?.[t]?.mugshotUrl)
          }), [e, _, t, j, y]), (0, m.jsxs)("button", {
            className: "_52bd8c97e5b56b1bf60d175890a158a2eeca",
            "data-img-set": v,
            "aria-label": "Toggle Social Club Menu",
            type: "button",
            onClick: e => S(e),
            children: [(0, m.jsx)("img", {
              className: "_52bd8c97e5b56b1ba9651d22866bf58ca4bd",
              src: d || "",
              onError: () => {
                u(j)
              },
              alt: e?.nickname || ""
            }), b && null !== g && (0, m.jsx)("img", {
              className: "_52bd8c97e5b56b1be8c699c608f17bc081aa",
              src: g.src,
              alt: g.alt
            }), b && (0, m.jsx)("div", {
              className: "_52bd8c97e5b56b1bacba28aeab3965a49753",
              "data-platform": _?.[a]?.[t]?.platform ?? null
            })]
          })
        }))
    },
    408: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        RockstarUserProvider: () => p,
        useRockstarUser: () => v
      });
      var s = t(822),
        c = t(859),
        r = t(929),
        n = t(217),
        i = t(932);
      var o = t(989),
        l = t.n(o),
        d = t(851);
      const {
        graphEnv: u
      } = (0, r.getScConfigForOrigin)(), m = (0, c.uriForGraphEnv)(u), b = () => {
        const e = (0, c.useRockstarToken)(),
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
          [b, , f] = (0, c.useRockstarTokenReactive)(),
          h = (0, c.useRockstarTokenPing)(),
          {
            refetch: g
          } = (0, c.useQuery)(n.userData, {
            skip: !0,
            context: {
              uri: m
            }
          }),
          [p, v] = (0, s.useState)(null),
          [k, _] = (0, s.useState)(!1),
          [x, S] = (0, s.useState)(!1);
        return (0, s.useEffect)((() => {
          (async () => {
            const s = null === e ? null : !!e;
            if (s && !k) {
              u(!0), _(!0);
              const e = await g(),
                s = e?.data?.user?.id,
                c = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: t
                  } = e;
                  const {
                    crews: s
                  } = await (0, r.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: t
                    }
                  });
                  return s
                })({
                  pingBearer: h,
                  rockstarId: s
                }),
                n = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: t,
                    rockstarId: s
                  } = e;
                  const c = [],
                    n = await (0, r.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  if (await (n?.platforms?.reduce((async (e, t) => {
                      if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                      const s = await (0, r.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                        pingBearer: a
                      });
                      s?.status && s?.result?.map((e => {
                        const {
                          activeCharacter: a,
                          stats: s
                        } = e, {
                          overview: r
                        } = s, {
                          rank: n
                        } = r;
                        if ("0" === n.value || !a) return;
                        const i = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return c.push({
                          ...e,
                          platform: t,
                          mugshotUrl: i
                        }), e
                      }))
                    }), Promise.resolve())), !c.length) return c;
                  const {
                    status: i,
                    accounts: o
                  } = await (0, r.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                    pingBearer: a
                  });
                  return i && o.length ? (o.forEach((e => {
                    const {
                      rockstarAccount: a,
                      linkedAccounts: r
                    } = e;
                    if (a?.rockstarId !== s) return;
                    const n = t;
                    let i = "",
                      o = "";
                    r?.map((e => ("xbl" === e?.onlineService ? i = e.userName : "np" === e?.onlineService && (o = e.userName), e))), c.map(((e, a) => (e.platformUsername = n, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = o || n), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = i || n), e)))
                  })), c) : c
                })({
                  pingBearer: h,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: s
                }),
                o = {
                  ...a,
                  ...e?.data?.user,
                  crews: c,
                  characters: {
                    gtao: n
                  }
                };
              u(!1), t(o), v(!0), (0, i.R)(s)
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
                c = await fetch((0, d.Z)().silentCheck, s);
              if (200 !== c.status) return void a(!1);
              const r = await c.json(),
                n = `${(0,d.Z)().gateway}?code=${r}`,
                i = await fetch(n, {
                  credentials: "include"
                }),
                {
                  bearerToken: o,
                  tokenExpiresTime: u
                } = await i.json();
              return a(o), t(u), o
            })({
              token: b,
              tokenPingExpires: f
            }), S(!0)), !1 === s && x && (_(!0), v(!1), u(!1)), null === e && h()
          })()
        }), [e, k, x]), {
          data: a,
          loading: o,
          loggedIn: p
        }
      };
      var f = t(706);
      const h = {
          data: null,
          characters: {
            gtao: []
          },
          loggedIn: !0
        },
        g = (0, s.createContext)(h),
        p = e => {
          let {
            children: a
          } = e;
          const t = b(),
            c = (0, s.useMemo)((() => ({
              ...t
            })), [t]);
          return (0, f.jsx)(g.Provider, {
            value: c,
            children: a
          })
        },
        v = () => (0, s.useContext)(g)
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

      function c(e, a) {
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
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          i = new Set;
        for (r.forEach((function(e) {
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
          var s = c(e, a);
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