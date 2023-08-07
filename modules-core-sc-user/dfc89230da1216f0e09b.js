(self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [239], {
    845: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => r
      });
      var s = t(859);
      const c = (0, t(929).getScConfigForOrigin)(),
        r = (0, s.makeVar)(c)
    },
    239: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => n
      });
      var s = t(932),
        c = t(331),
        r = t(732);
      const n = function() {
        let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const [a, t] = (0, s.useState)([]), [n, i] = (0, s.useState)([]), [o, l] = (0, s.useState)(null), {
          data: d,
          loggedIn: u
        } = (0, r.useRockstarUser)(), m = (e, s) => {
          const r = [];
          e.forEach((e => {
            if (-1 === a.indexOf(e)) {
              const a = s ?? {};
              (0, c.track)({
                ...e,
                ...a
              }), r.push(e)
            }
          })), t([...a, ...r])
        };
        (0, s.useEffect)((() => {
          if (d && null !== u) {
            const e = b(d);
            n.length && e && m(n, e), l(e)
          } else e || n.length && m(n)
        }), [d, u, n]), (0, s.useEffect)((() => {
          const e = n.filter((e => -1 === a.indexOf(e)));
          i(e)
        }), [a]);
        const b = e => {
          const a = [],
            t = [],
            s = [];
          return Object.keys(e.characters).forEach((c => {
            e.characters[c].length && (t.push(c), e.characters[c].forEach((e => {
              "gtao" === c && (s.includes(e.platform) || s.push(e.platform)), a.includes(e.platform) || a.push(e.platform)
            })))
          })), {
            member_id: e.id ?? void 0,
            login_state: u ?? !1,
            platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
            games_played: t.length ? t.join("|").toUpperCase() : void 0,
            gtao_platforms_played: s.length ? s.join("|").toUpperCase() : void 0
          }
        };
        return {
          track: e => {
            if (null === u || !d || !o) {
              const a = [...n];
              return a.push({
                ...e
              }), i(a)
            }
            return (0, c.track)({
              ...e,
              ...o
            })
          }
        }
      }
    },
    67: (e, a, t) => {
      "use strict";
      t.d(a, {
        R: () => f,
        Z: () => k
      });
      var s = t(859);
      const c = (0, s.makeVar)(!1),
        r = e => c(e),
        n = (0, s.makeVar)(!1),
        i = e => n(e),
        o = (0, s.makeVar)(!1),
        l = e => o(e),
        d = (0, s.makeVar)(null),
        u = e => d(e),
        m = (0, s.makeVar)(null),
        b = e => m(e),
        f = (0, s.makeVar)(null),
        h = (0, s.makeVar)(null),
        g = e => h(e),
        p = (0, s.makeVar)(null),
        v = e => p(e),
        k = () => {
          const e = (0, s.useReactiveVar)(h),
            a = (0, s.useReactiveVar)(d),
            t = (0, s.useReactiveVar)(c),
            f = (0, s.useReactiveVar)(o),
            k = (0, s.useReactiveVar)(m);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: f,
            navOpen: t,
            userData: (0, s.useReactiveVar)(p),
            selectedCharacterTuple: k,
            jumpScMenuFocus: (0, s.useReactiveVar)(n),
            setCharactersNeeded: g,
            setCurrentCharId: u,
            setHasNotifications: l,
            setNavOpen: r,
            setSelectedCharacterTuple: b,
            setUserData: v,
            setJumpScMenuFocus: i
          }
        }
    },
    732: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Menu: () => C,
        MenuButton: () => y,
        scConfig: () => n.Z,
        useGtmTrack: () => s.useGtmTrack,
        useRockstarUser: () => s.useRockstarUser,
        useRockstarUserState: () => c.Z,
        useRpCategory: () => h,
        useScConfig: () => i
      });
      var s = t(59),
        c = t(67),
        r = t(859),
        n = t(845);
      const i = () => (0, r.useReactiveVar)(n.Z);
      var o = t(932),
        l = t(929),
        d = t(239);
      var u = t(160);
      const m = e => {
          let {
            text: a,
            target: t,
            href: s,
            analytics: c,
            hasNotifications: r = !1
          } = e;
          const {
            track: n
          } = (0, d.Z)();
          return (0, u.jsxs)("a", {
            className: "_52bd8c97e5b56b1bf1f57df4d89347d3a5a4",
            title: a,
            href: s,
            target: t,
            rel: "noreferrer",
            onClick: () => {
              n({
                ...c,
                event_label: a.toLowerCase(),
                text: a.toLowerCase(),
                link_url: s
              })
            },
            children: [a, r && (0, u.jsx)("span", {
              className: "_52bd8c97e5b56b1bdfdd843dadc8fe0cc756"
            })]
          }, a)
        },
        b = (0, l.withTranslations)((e => {
          let {
            sc: a,
            t
          } = e;
          const {
            setSelectedCharacterTuple: s
          } = (0, c.Z)(), r = (0, l.useLocale)(), n = (0, l.toScLocaleString)(r), i = `${document.location.pathname}${document.location.search}`, d = `${a.login}?returnUrl=${i}&lang=${n}`, b = `${a.signup}&returnUrl=${i}&lang=${n}`, f = [{
            text: t("Sign In"),
            href: d,
            analytics: {
              event_action: "login",
              event_category: "cta",
              event: "cta_login"
            }
          }, {
            text: t("Join Social Club"),
            href: b,
            analytics: {
              event_action: "register",
              event_category: "cta",
              event: "cta_signup"
            }
          }];
          return (0, o.useEffect)((() => {
            s(!1)
          }), []), (0, u.jsx)("nav", {
            className: "_52bd8c97e5b56b1bb7294b05abb682e53b6c",
            "aria-label": "sc menu",
            title: t("Social Club"),
            children: (0, u.jsx)("div", {
              className: "_52bd8c97e5b56b1bc09cf59bedf70da20f41",
              "data-logged-in": "false",
              children: f.map((e => (0, o.createElement)(m, {
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
        g = (0, l.withTranslations)((e => {
          let {
            characterData: a,
            setMobileCardWidth: s
          } = e;
          const {
            currentCharId: r,
            setCurrentCharId: n
          } = (0, c.Z)(), {
            track: i
          } = (0, d.Z)(), l = (0, o.createRef)(), {
            platform: m,
            platformUsername: b,
            mugshotUrl: g,
            stats: p
          } = a, [v, k] = (0, o.useState)(g), [_] = (0, o.useState)(a.index), x = f(m, "large"), S = r === a.index;
          return (0, o.useEffect)((() => {
            l.current && s && s(l.current.offsetWidth)
          }), [l]), (0, u.jsxs)("button", {
            className: "_52bd8c97e5b56b1bdee06086788899b4002f",
            type: "button",
            "aria-hidden": S,
            onClick: e => {
              e.stopPropagation(), n(_);
              let a = "";
              "pc" === m ? a = "PC" : "ps4" === m ? a = "PS4" : "ps5" === m ? a = "PS5" : "xboxone" === m ? a = "Xbox One" : "xboxsx" === m && (a = "Xbox Series X|S"), i({
                event: "character_selector_select",
                event_category: "character_selector",
                event_action: "select",
                event_label: a,
                position: _
              })
            },
            ref: l,
            children: [(0, u.jsx)("div", {
              className: "_52bd8c97e5b56b1bff6279c9ff9b88f1f1f6",
              "data-size": "small",
              children: (0, u.jsx)("img", {
                src: v,
                alt: b,
                onError: () => {
                  k(t(493))
                }
              })
            }), (0, u.jsxs)("div", {
              className: "_52bd8c97e5b56b1bdb0c1a05fff15a2418f2",
              children: [(0, u.jsxs)("div", {
                className: "_52bd8c97e5b56b1bfd06288478a14cd32f05",
                children: [(0, u.jsx)("img", {
                  src: x.src,
                  alt: x.alt
                }), (0, u.jsx)("div", {
                  className: "_52bd8c97e5b56b1be176d7a04bacf4e0d725",
                  "data-size": "small",
                  children: b
                })]
              }), (0, u.jsx)("div", {
                className: "_52bd8c97e5b56b1bc08f37e001f1b148b046",
                children: (0, u.jsxs)("div", {
                  className: "_52bd8c97e5b56b1bf4e32f1fa3917b84d463",
                  children: [(0, u.jsx)("img", {
                    className: "_52bd8c97e5b56b1bf519c818d4a8d1520bfe",
                    src: h(p.overview.rank.value),
                    alt: "RP Category"
                  }), (0, u.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        })),
        p = {
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
        v = (0, l.withTranslations)((e => {
          let {
            character: a,
            platformTag: c
          } = e;
          const {
            data: r
          } = (0, s.useRockstarUser)(), {
            track: n
          } = (0, d.Z)(), [i, l] = (0, o.useState)([]), [m, b] = (0, o.useState)(null), [f, g] = (0, o.useState)(null), [v, k] = (0, o.useState)(!1), [_, x] = (0, o.useState)(-1), [S, N] = (0, o.useState)([]), [C, w] = (0, o.useState)(0), j = t(493), [y, E] = (0, o.useState)("0"), [R, P] = (0, o.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), I = () => {
            L((0, u.jsx)("img", {
              src: j,
              alt: r.nickname
            }))
          }, [U, L] = (0, o.useState)((0, u.jsx)("img", {
            className: p.scAvatarImg,
            src: a.mugshotUrl,
            alt: r.nickname,
            onError: I
          }));
          (0, o.useEffect)((() => {
            l(r.crews ?? [])
          }), [r]), (0, o.useEffect)((() => {
            L((0, u.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: I
            })), E(T(a.stats.overview.bank.value)), P(T(a.stats.overview.cash.value)), w(a.stats.overview.rank.value)
          }), [a, r]), (0, o.useEffect)((() => {
            i && i.forEach((e => {
              !0 === e.isPrimary && (b(e.crewTag), g(e.crewColour), x(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [i]), (0, o.useEffect)((() => {
            const e = [];
            if (!v && _ > -1)
              for (let a = 5; a > _; a -= 1) e.push((0, u.jsx)("div", {
                className: p.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${a}`));
            N(e)
          }), [_, v, f]);
          const M = e => {
            e.stopPropagation(), n({
              event: "character_selector_profile_click",
              event_category: "character_selector",
              event_action: "profile_click",
              event_label: c.alt,
              link_url: void 0
            })
          };
          return (0, u.jsxs)("div", {
            className: p.scProfileDetails,
            onClick: M,
            onKeyUp: M,
            role: "button",
            tabIndex: -1,
            children: [(0, u.jsxs)("div", {
              className: p.scAvatar,
              children: [U, (0, u.jsx)("div", {
                className: p.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, u.jsx)("img", {
                  src: c.src,
                  alt: c.alt
                })
              })]
            }), (0, u.jsxs)("div", {
              className: p.scProfileStats,
              children: [(0, u.jsx)("div", {
                className: p.scNames,
                children: (0, u.jsxs)("div", {
                  className: p.scTagsNames,
                  children: [(0, u.jsx)("span", {
                    className: p.scUserName,
                    children: a.platformUsername
                  }), m && (0, u.jsxs)("span", {
                    className: p.scCrewName,
                    "data-arrow-tag": v,
                    children: [m, !v && (0, u.jsx)("div", {
                      className: p.scCrewRankBar,
                      children: S
                    })]
                  })]
                })
              }), (0, u.jsxs)("div", {
                className: p.scProgress,
                children: [(0, u.jsxs)("div", {
                  className: p.scRpLevel,
                  children: [(0, u.jsx)("img", {
                    className: p.scRpIcon,
                    src: h(C),
                    alt: "RP Category"
                  }), (0, u.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, u.jsxs)("div", {
                  className: p.scMoney,
                  children: [(0, u.jsxs)("span", {
                    className: p.scBank,
                    children: ["$", y]
                  }), (0, u.jsxs)("span", {
                    className: p.scCash,
                    children: ["$", R]
                  })]
                })]
              })]
            })]
          })
        })),
        k = (e, a) => {
          const [t, s] = (0, o.useState)(0);
          return (0, o.useEffect)((() => {
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
        _ = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: c = null,
            slideClickCallback: r = null,
            children: n = [],
            disablePager: i = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, o.createRef)(),
            m = k(d, !1),
            [b, f] = (0, o.useState)(!1),
            [h, g] = (0, o.useState)(0),
            [p, v] = (0, o.useState)(0),
            [_, x] = (0, o.useState)([s]),
            [S, N] = (0, o.useState)(_[0]),
            [C, w] = (0, o.useState)(252),
            [j, y] = (0, o.useState)(0),
            [E, R] = (0, o.useState)([]),
            [P, T] = (0, o.useState)([]),
            [I, U] = (0, o.useState)(!1),
            L = e => {
              if (!0 === b || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              v(a)
            },
            M = e => {
              if (!0 === b || 0 === p || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > p ? 1 : -1,
                r = Math.abs(p - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === b) return;
                f(!0);
                const e = h - 1 < 0 ? 0 : h - 1;
                g(e), N(_[e]), c && c(e)
              })() : (() => {
                if (!0 === b) return;
                f(!0);
                let e = h + 1 >= _.length ? _.length - 1 : h + 1;
                e < 0 && (e = 0), g(e), N(_[e]), c && c(e)
              })(), v(0)) : N(_[h] + r * s)
            },
            D = () => {
              !0 !== b && !0 !== l && (f(!0), !0 !== b && (N(_[h]), v(0)))
            };
          return (0, o.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, o.createRef)())
            })), R(e)
          }), [n]), (0, o.useEffect)((() => {
            if (E.length < 1) return;
            w(E[0]?.current?.clientWidth || 0);
            const e = E[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            y(t + a)
          }), [E]), (0, o.useEffect)((() => {
            !1 !== b && setTimeout((() => {
              f(!1)
            }), t)
          }), [b, t]), (0, o.useEffect)((() => {
            x(n.map(((e, a) => (e => {
              let a = 0;
              const t = n.length;
              return 1 === t ? .5 * m - .5 * C - 2 * s + j : (0 === e && (a = s - e * C), e === t - 1 && t > 1 && (a = t * C * -1 + (m - (s - j))), e > 0 && e < t - 1 && (a = e * C * -1 + (.5 * m - .5 * C + .5 * j)), a)
            })(a)))), 1 === n.length ? U(!0) : U(!1)
          }), [d.current, n, m]), (0, o.useEffect)((() => {
            const e = (a = h, n.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            T(e)
          }), [n, h]), (0, o.useEffect)((() => {
            !0 !== i && !0 !== l || N(_[0])
          }), [l, i, _]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("div", {
              className: "_52bd8c97e5b56b1bbc373b520fbdca8d2f0f",
              ref: d,
              onTouchStart: L,
              onTouchMove: M,
              onTouchEnd: D,
              onMouseDown: L,
              onMouseMove: M,
              onMouseUp: D,
              onClick: () => {
                null !== r && r(h)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, u.jsx)("div", {
                className: "_52bd8c97e5b56b1bb996a7ad30d05022b3d6",
                "data-interaction-blocked": b,
                "data-single-item": I,
                style: {
                  transform: I ? null : `translateX(${S}px)`
                },
                children: n.map(((e, a) => (0, u.jsx)("div", {
                  className: "_52bd8c97e5b56b1beaede6f31bdcb7819f48",
                  ref: E[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), P.length > 1 && !1 === i && (0, u.jsx)("div", {
              className: "_52bd8c97e5b56b1bb27bbf1bb846c8fd855b",
              children: P.map((e => (0, u.jsx)("div", {
                className: "_52bd8c97e5b56b1baf5997d414baf32e73b3",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        x = {
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
        S = (0, l.withTranslations)((e => {
          let {
            sc: a,
            t: n,
            charListHidden: i,
            hideCharacterList: b,
            refCharacterListDesktop: h,
            menuPadding: p,
            longCharList: S,
            setLongCharList: N,
            isMobileMode: C,
            setIsMobileMode: w
          } = e;
          const {
            lsSettings: j
          } = (0, l.useRockstarWebLSSettings)(), {
            track: y
          } = (0, d.Z)(), E = (0, r.useRockstarTokenPing)(), {
            data: R,
            loggedIn: P
          } = (0, s.useRockstarUser)(), {
            charactersNeeded: T,
            currentCharId: I,
            hasNotifications: U,
            navOpen: L,
            setCurrentCharId: M,
            setHasNotifications: D,
            setSelectedCharacterTuple: O,
            setUserData: $
          } = (0, c.Z)(), [F, B] = (0, o.useState)(null), [z, V] = (0, o.useState)(null), [X, Z] = (0, o.useState)(!1), [H, W] = (0, o.useState)(!1), [A, G] = (0, o.useState)(0), [q, J] = (0, o.useState)(0), [K, Q] = (0, o.useState)(0), Y = (0, o.createRef)(), ee = k(Y, !1), ae = (0, o.createRef)(), [te, se] = (0, o.useState)(0), [ce, re] = (0, o.useState)([]), [ne, ie] = (0, o.useState)(244);
          (0, o.useEffect)((() => {
            re(R.characters[T] ?? [])
          }), [R, T]), (0, o.useEffect)((() => {
            R && $(R)
          }), [R]), (0, o.useEffect)((() => {
            const e = R?.characters.gtao;
            if (null !== P && !e.length) return void O(!1);
            if (null == I || !e.length) return;
            const a = e?.[I] ?? e?.[0] ?? null;
            O(!!a?.platform && [a.platform, a.characterSlot])
          }), [I, R, P]), (0, o.useEffect)((() => {
            (async () => {
              if (!R?.id) return;
              const {
                rockstarAccountList: e
              } = await (0, l.coreScApiFetch)("friends/getInvites", {
                pingBearer: E
              }), {
                count: a
              } = await (0, l.coreScApiFetch)("notification/count", {
                pingBearer: E
              });
              D(a > 0 || e.total > 0)
            })()
          }), [R]);
          const oe = {
              event_action: "click",
              event_category: "account_menu",
              event: "account_menu_click",
              environment: ""
            },
            le = [{
              text: n("View My Profile"),
              href: R.profile_link,
              target: "_blank",
              analytics: oe
            }, {
              text: n("Settings"),
              href: `https://${a.host}.rockstargames.com/settings`,
              target: "_blank",
              analytics: oe
            }, {
              text: n("Crews"),
              href: `https://${a.host}.rockstargames.com/member/${R.nickname}/crews`,
              target: "_blank",
              analytics: oe
            }, {
              text: n("Friends"),
              href: `https://${a.host}.rockstargames.com/member/${R.nickname}/friends`,
              target: "_blank",
              analytics: oe
            }, {
              text: n("Notifications"),
              href: `https://${a.host}.rockstargames.com/notifications`,
              target: "_blank",
              hasNotifications: U,
              analytics: oe
            }, {
              text: n("Log Out"),
              href: `${a.logout}?returnUrl=${document.location.pathname}${document.location.search}`,
              target: "_self",
              analytics: oe
            }],
            de = () => {
              W(p + ne * A < ee)
            };
          (0, o.useEffect)((() => {
            de()
          }), [ne]);
          const ue = () => {
            if (ae.current) {
              const {
                current: e
              } = ae, a = e?.scrollHeight;
              se(a)
            }
          };
          return (0, o.useEffect)((() => {
            const e = () => {
              J(window.innerWidth), Q(window.innerHeight), window.innerWidth < 768 || window.innerHeight < 649 ? w(!0) : w(!1), b(!0)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, o.useEffect)((() => {
            let e = ce.length - 1;
            e < 0 && (e = 0), G(e);
            const a = ce.length > 0 ? ce[I] ?? ce[0] : null;
            if (!a) return;
            const t = null !== a ? f(a.platform, "large") : null;
            V(t), B(a), ce.length > 1 ? Z(!0) : Z(!1), N(ce.length - 1 > 3)
          }), [I, ce]), (0, o.useEffect)((() => {
            de()
          }), [A, C, q, ce]), (0, o.useEffect)((() => {
            ue(), setTimeout(ue, 1e3)
          }), [ae, q, K]), (0, o.useEffect)((() => {
            const e = j?.currentCharId ?? 0;
            M(Math.max(0, Math.min(e, ce.length - 1)))
          }), [ce, j]), (0, u.jsxs)(u.Fragment, {
            children: [null !== F && "gtao" === T && (0, u.jsxs)("div", {
              className: x.scProfile,
              tabIndex: -1,
              "aria-label": "Profile Card",
              children: [(0, u.jsx)(v, {
                s: x,
                character: F,
                platformTag: z
              }), !0 === X && (0, u.jsxs)("div", {
                className: x.scCharacterSelector,
                children: [(0, u.jsx)("button", {
                  className: x.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !i;
                    b(a), y({
                      event: !0 === a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": i,
                  children: (0, u.jsx)("span", {
                    children: n("Switch Character")
                  })
                }), !1 === C && (0, u.jsx)("div", {
                  className: x.scCharacterList,
                  "data-long-list": S,
                  "aria-hidden": i,
                  ref: h,
                  children: ce.map((e => (0, u.jsx)(g, {
                    characterData: e
                  }, e.mugshotUrl)))
                }), !0 === C && (0, u.jsx)("div", {
                  className: x.scCharacterList,
                  "data-single-item": 2 === ce.length,
                  "data-swiper-disabled": H,
                  "aria-hidden": i,
                  ref: Y,
                  children: (0, u.jsx)(_, {
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
                    disablePager: H,
                    disableSwiper: H,
                    children: ce.filter(((e, a) => a !== I)).map((e => (0, o.createElement)(g, {
                      characterData: e,
                      setMobileCardWidth: ie,
                      key: e.mugshotUrl
                    })))
                  })
                })]
              })]
            }), (0, u.jsxs)("nav", {
              className: x.scNav,
              "aria-hidden": !L,
              children: [(0, u.jsxs)("button", {
                className: x.scNavHeader,
                type: "button",
                "data-opened": i,
                "data-nav-opened": L,
                onClick: e => {
                  e.stopPropagation(), !1 === i && b(!0)
                },
                children: [(0, u.jsx)("span", {
                  children: R.nickname
                }), (0, u.jsx)("img", {
                  src: t(456),
                  alt: "Social Club"
                })]
              }), (0, u.jsx)("div", {
                className: x.scNavWrap,
                "data-opened": i,
                "data-logged-in": "true",
                ref: ae,
                style: {
                  maxHeight: `${te}px`
                },
                children: le.map((e => (0, o.createElement)(m, {
                  ...e,
                  key: e.text
                })))
              })]
            })]
          })
        })),
        N = {
          scNavWrapper: "_52bd8c97e5b56b1bd7bac12a82ffc52818c3",
          rpLevel: "_52bd8c97e5b56b1be2e5c1bfb71e9ff95838",
          rpIcon: "_52bd8c97e5b56b1bcd60c6f857f6da4611af",
          scMenu: "_52bd8c97e5b56b1bfb9966f65cb155635c74",
          navOpen: "_52bd8c97e5b56b1bff3d86ee58e3e40e9424",
          dragHandle: "_52bd8c97e5b56b1bdc573b70b5fa74fbc251",
          dragHandleBtn: "_52bd8c97e5b56b1bcbaf32fb58cd4992ca4e",
          scOverlay: "_52bd8c97e5b56b1bd6934ce9e7a8c717c2f5"
        },
        C = (0, l.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBodyIsScrollable: i
          } = (0, l.useBodyScrollable)(), {
            navHidden: d = !1
          } = (0, r.useState)(), {
            loggedIn: m
          } = (0, s.useRockstarUser)(), {
            currentCharId: f,
            navOpen: h,
            setNavOpen: g
          } = (0, c.Z)(), [p, v] = (0, o.useState)(!0), [k, _] = (0, o.useState)(!1), x = (0, r.useReactiveVar)(n.Z), C = (0, o.useRef)(), [w, j] = (0, o.useState)(0), y = (0, o.createRef)(), [E, R] = (0, o.useState)(!1), [P, T] = (0, o.useState)(0), [I, U] = (0, o.useState)(!1), {
            mutateLSSettings: L
          } = (0, l.useRockstarWebLSSettings)(), M = (0, o.useCallback)((e => {
            v(e), C.current && !0 === e && (C.current.scrollTop = 0)
          }), [C]);
          return (0, o.useEffect)((() => {
            null !== f && L({
              key: "currentCharId",
              value: f
            }), !1 === m && L({
              key: "currentCharId",
              value: null
            })
          }), [f, m]), (0, o.useEffect)((() => {
            C.current && (!1 === p && !1 === k && (C.current.style.height = `${C.current.scrollHeight}px`), !0 === p && (C.current.style.height = null))
          }), [p, C, k]), (0, o.useEffect)((() => {
            const e = () => {
              g(!1), M(!0)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, o.useEffect)((() => {
            g(!1), M(!0)
          }), [d]), (0, o.useEffect)((() => {
            if (y.current) {
              const {
                current: e
              } = y, a = window.getComputedStyle(e);
              j(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [y]), (0, o.useEffect)((() => {
            i(!E || !h)
          }), [h, E]), (0, o.useEffect)((() => {
            U(window.navigator.userAgent.includes("Mac"))
          }), []), null === m ? null : (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsxs)("div", {
              className: [N.scMenu, h ? N.navOpen : ""].join(" "),
              "data-logged-in": m,
              "data-mac-browser": I,
              ref: y,
              "aria-hidden": !h,
              children: [(0, u.jsx)("button", {
                className: N.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  T(a)
                },
                onTouchMove: e => {
                  if (0 === P) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(P - a) > 1 && (T(0), g(!1))
                },
                children: (0, u.jsx)("img", {
                  className: N.dragHandle,
                  src: t(762),
                  alt: a("Drag Menu Handle")
                })
              }), m ? (0, u.jsx)(S, {
                sc: x,
                charListHidden: p,
                hideCharacterList: M,
                refCharacterListDesktop: C,
                menuPadding: w,
                longCharList: k,
                setLongCharList: _,
                isMobileMode: E,
                setIsMobileMode: R
              }) : (0, u.jsx)(b, {
                sc: x,
                navOpen: h
              })]
            }), (0, u.jsx)("div", {
              className: [N.scOverlay, h ? N.navOpen : ""].join(" "),
              "data-logged-in": m
            })]
          })
        })),
        w = t(493),
        j = t(916),
        y = (0, l.withTranslations)((() => {
          const {
            data: e
          } = (0, s.useRockstarUser)(), {
            charactersNeeded: a,
            currentCharId: t,
            navOpen: r,
            setNavOpen: n
          } = (0, c.Z)(), {
            track: i
          } = (0, d.Z)(), [l, m] = (0, o.useState)(null), [b, h] = (0, o.useState)(!1), [g, p] = (0, o.useState)(null), [v, k] = (0, o.useState)(!1), [_, x] = (0, o.useState)([]);
          (0, o.useEffect)((() => {
            x(e.characters[a] ?? [])
          }), [e, a]);
          const S = (0, o.useCallback)((e => {
            e.stopPropagation(), n(!r), i({
              event_action: "click",
              event_category: "account_menu",
              event: "account_menu_click",
              event_label: r ? "close" : "open",
              text: r ? "close" : "open"
            })
          }), [r]);
          return (0, o.useEffect)((() => {
            const a = e?.id ?? !1,
              s = a ? (_?.[t]?.mugshotUrl ?? e?.avatar) || w : j,
              c = f(_?.[t]?.platform, "small") ?? null;
            p(c), m(s), h(a), k(!!_?.[t]?.mugshotUrl)
          }), [e, _, t, w, j]), (0, u.jsxs)("button", {
            className: "_52bd8c97e5b56b1bf60d175890a158a2eeca",
            "data-img-set": v,
            "aria-label": "Toggle Social Club Menu",
            type: "button",
            onClick: e => S(e),
            children: [(0, u.jsx)("img", {
              className: "_52bd8c97e5b56b1ba9651d22866bf58ca4bd",
              src: l || "",
              onError: () => {
                m(w)
              },
              alt: e?.nickname || ""
            }), b && null !== g && (0, u.jsx)("img", {
              className: "_52bd8c97e5b56b1be8c699c608f17bc081aa",
              src: g.src,
              alt: g.alt
            }), b && (0, u.jsx)("div", {
              className: "_52bd8c97e5b56b1bacba28aeab3965a49753",
              "data-platform": _?.[a]?.[t]?.platform ?? null
            })]
          })
        }))
    },
    59: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        GtmProvider: () => x,
        RockstarUserProvider: () => p,
        useGtmTrack: () => S,
        useRockstarUser: () => v
      });
      var s = t(932),
        c = t(859),
        r = t(929),
        n = t(938),
        i = t(67);
      var o = t(339),
        l = t.n(o),
        d = t(845);
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
                    r?.map((e => ("xbl" === e?.onlineService ? i = e.userName : "np" === e?.onlineService && (o = e.userName), e))), c.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), c.map(((e, a) => (e.platformUsername = n, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = o || n), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = i || n), e)))
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
      var f = t(160);
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
        v = () => (0, s.useContext)(g);
      var k = t(239);
      const _ = (0, s.createContext)(void 0),
        x = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const c = (0, k.Z)(a),
            r = (0, s.useMemo)((() => c), [c, a]);
          return (0, f.jsx)(_.Provider, {
            value: r,
            children: t
          })
        },
        S = () => (0, s.useContext)(_)
    },
    938: e => {
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