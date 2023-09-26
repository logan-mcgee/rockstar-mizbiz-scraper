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
        r = t(641);
      const n = function() {
        let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const [a, t] = (0, s.useState)([]), [n, i] = (0, s.useState)([]), [o, l] = (0, s.useState)(null), {
          data: d,
          loggedIn: u
        } = (0, r.useRockstarUser)(), f = (e, s) => {
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
            const e = m(d);
            n.length && e && f(n, e), l(e)
          } else e || n.length && f(n)
        }), [d, u, n]), (0, s.useEffect)((() => {
          const e = n.filter((e => -1 === a.indexOf(e)));
          i(e)
        }), [a]);
        const m = e => {
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
        R: () => h,
        Z: () => b
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
        f = (0, s.makeVar)(null),
        m = e => f(e),
        h = (0, s.makeVar)(null),
        g = (0, s.makeVar)(null),
        p = e => g(e),
        v = (0, s.makeVar)(null),
        k = e => v(e),
        b = () => {
          const e = (0, s.useReactiveVar)(g),
            a = (0, s.useReactiveVar)(d),
            t = (0, s.useReactiveVar)(c),
            h = (0, s.useReactiveVar)(o),
            b = (0, s.useReactiveVar)(f);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: h,
            navOpen: t,
            userData: (0, s.useReactiveVar)(v),
            selectedCharacterTuple: b,
            jumpScMenuFocus: (0, s.useReactiveVar)(n),
            setCharactersNeeded: p,
            setCurrentCharId: u,
            setHasNotifications: l,
            setNavOpen: r,
            setSelectedCharacterTuple: m,
            setUserData: k,
            setJumpScMenuFocus: i
          }
        }
    },
    641: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        CharacterCard: () => h,
        CustomSwiper: () => p,
        Menu: () => y,
        MenuButton: () => I,
        scConfig: () => n.Z,
        useGtmTrack: () => s.useGtmTrack,
        useRockstarUser: () => s.useRockstarUser,
        useRockstarUserState: () => c.Z,
        useRpCategory: () => u,
        useScConfig: () => i
      });
      var s = t(59),
        c = t(67),
        r = t(859),
        n = t(845);
      const i = () => (0, r.useReactiveVar)(n.Z);
      var o = t(932),
        l = t(929);
      const d = (e, a) => {
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
        u = e => t(e < 100 ? 910 : e > 99 && e < 500 ? 185 : e > 499 && e < 750 ? 60 : 981),
        f = {
          scNavWrapper: "_74c6ed1e7c68394fd99faffaf09d46b82728",
          rpLevel: "_74c6ed1e7c68394fa0e38a208ff8ee338697",
          rpIcon: "_74c6ed1e7c68394feab2f609d85003a63aa2",
          scCharacterCard: "_74c6ed1e7c68394fcc0005a878cdead0fb1e",
          scAvatar: "_74c6ed1e7c68394fb7b0de57c53188d27aeb",
          scCharNames: "_74c6ed1e7c68394fd15a3876595b91c9ef1a",
          scCharacterStats: "_74c6ed1e7c68394fd805d85e29467da5a5d7",
          scUserName: "_74c6ed1e7c68394fa5ceaff82fdc9eb5fedb",
          scRpLevel: "_74c6ed1e7c68394fd77b2864e1058707b04b",
          scRpIcon: "_74c6ed1e7c68394ff6250ac9808f8bfd0329"
        };
      var m = t(160);
      const h = (0, l.withTranslations)((e => {
          let {
            characterData: a
          } = e;
          const {
            platform: s,
            platformUsername: c,
            mugshotUrl: r,
            stats: n
          } = a, [i, l] = (0, o.useState)(r), h = d(s, "large");
          return (0, m.jsxs)("div", {
            className: f.scCharacterCard,
            children: [(0, m.jsx)("div", {
              className: f.scAvatar,
              "data-size": "small",
              children: (0, m.jsx)("img", {
                src: i,
                alt: c,
                onError: () => {
                  l(t(493))
                }
              })
            }), (0, m.jsx)("div", {
              className: f.scCharacterStats,
              children: (0, m.jsxs)("div", {
                className: f.scCharNames,
                children: [(0, m.jsx)("img", {
                  src: h.src,
                  alt: h.alt
                }), (0, m.jsx)("div", {
                  className: f.scUserName,
                  "data-size": "small",
                  children: c
                }), (0, m.jsx)("div", {
                  className: f.scRp,
                  children: (0, m.jsxs)("div", {
                    className: f.scRpLevel,
                    children: [(0, m.jsx)("img", {
                      className: f.scRpIcon,
                      src: u(n.overview.rank.value),
                      alt: "RP Category"
                    }), (0, m.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        })),
        g = (e, a) => {
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
        p = e => {
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
            u = g(d, !1),
            [f, h] = (0, o.useState)(!1),
            [p, v] = (0, o.useState)(0),
            [k, b] = (0, o.useState)(0),
            [_, x] = (0, o.useState)([s]),
            [S, N] = (0, o.useState)(_[0]),
            [C, w] = (0, o.useState)(252),
            [j, y] = (0, o.useState)(0),
            [E, R] = (0, o.useState)([]),
            [I, P] = (0, o.useState)([]),
            [U, T] = (0, o.useState)(!1),
            L = e => {
              if (!0 === f || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            M = e => {
              if (!0 === f || 0 === k || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > k ? 1 : -1,
                r = Math.abs(k - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === f) return;
                h(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                v(e), N(_[e]), c && c(e)
              })() : (() => {
                if (!0 === f) return;
                h(!0);
                let e = p + 1 >= _.length ? _.length - 1 : p + 1;
                e < 0 && (e = 0), v(e), N(_[e]), c && c(e)
              })(), b(0)) : N(_[p] + r * s)
            },
            D = () => {
              !0 !== f && !0 !== l && (h(!0), !0 !== f && (N(_[p]), b(0)))
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
            !1 !== f && setTimeout((() => {
              h(!1)
            }), t)
          }), [f, t]), (0, o.useEffect)((() => {
            x(n.map(((e, a) => (e => {
              let a = 0;
              const t = n.length;
              return 1 === t ? .5 * u - .5 * C - 2 * s + j : (0 === e && (a = s - e * C), e === t - 1 && t > 1 && (a = t * C * -1 + (u - (s - j))), e > 0 && e < t - 1 && (a = e * C * -1 + (.5 * u - .5 * C + .5 * j)), a)
            })(a)))), 1 === n.length ? T(!0) : T(!1)
          }), [d.current, n, u]), (0, o.useEffect)((() => {
            const e = (a = p, n.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            P(e)
          }), [n, p]), (0, o.useEffect)((() => {
            !0 !== i && !0 !== l || N(_[0])
          }), [l, i, _]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("div", {
              className: "_74c6ed1e7c68394fbc373b520fbdca8d2f0f",
              ref: d,
              onTouchStart: L,
              onTouchMove: M,
              onTouchEnd: D,
              onMouseDown: L,
              onMouseMove: M,
              onMouseUp: D,
              onClick: () => {
                null !== r && r(p)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, m.jsx)("div", {
                className: "_74c6ed1e7c68394fb996a7ad30d05022b3d6",
                "data-interaction-blocked": f,
                "data-single-item": U,
                style: {
                  transform: U ? null : `translateX(${S}px)`
                },
                children: n.map(((e, a) => (0, m.jsx)("div", {
                  className: "_74c6ed1e7c68394feaede6f31bdcb7819f48",
                  ref: E[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), I.length > 1 && !1 === i && (0, m.jsx)("div", {
              className: "_74c6ed1e7c68394fb27bbf1bb846c8fd855b",
              children: I.map((e => (0, m.jsx)("div", {
                className: "_74c6ed1e7c68394faf5997d414baf32e73b3",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        };
      var v = t(430),
        k = t(239);
      const b = e => {
          let {
            text: a,
            target: t,
            href: s,
            analytics: c,
            hasNotifications: r = !1
          } = e;
          const {
            track: n
          } = (0, k.Z)();
          return (0, m.jsxs)("a", {
            className: "_74c6ed1e7c68394ff1f57df4d89347d3a5a4",
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
            children: [a, r && (0, m.jsx)("span", {
              className: "_74c6ed1e7c68394fdfdd843dadc8fe0cc756"
            })]
          }, a)
        },
        _ = (0, l.withTranslations)((e => {
          let {
            sc: a,
            t
          } = e;
          const {
            setSelectedCharacterTuple: s
          } = (0, c.Z)(), r = (0, l.useLocale)(), n = (0, l.toScLocaleString)(r), [i, d] = (0, o.useState)(""), u = (0, v.useLocation)(), f = `${a.login}?returnUrl=${i}&lang=${n}`, h = `${a.signup}&returnUrl=${i}&lang=${n}`, g = [{
            text: t("Sign In"),
            href: f,
            analytics: {
              event_action: "login",
              event_category: "cta",
              event: "cta_login"
            }
          }, {
            text: t("Join Social Club"),
            href: h,
            analytics: {
              event_action: "register",
              event_category: "cta",
              event: "cta_signup"
            }
          }];
          return (0, o.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            d(e)
          }), [u]), (0, o.useEffect)((() => {
            s(!1)
          }), []), (0, m.jsx)("nav", {
            className: "_74c6ed1e7c68394fb7294b05abb682e53b6c",
            "aria-label": "sc menu",
            title: t("Social Club"),
            children: (0, m.jsx)("div", {
              className: "_74c6ed1e7c68394fc09cf59bedf70da20f41",
              "data-logged-in": "false",
              children: g.map((e => (0, o.createElement)(b, {
                ...e,
                key: e.text
              })))
            })
          })
        })),
        x = (0, l.withTranslations)((e => {
          let {
            characterData: a,
            setMobileCardWidth: s
          } = e;
          const {
            currentCharId: r,
            setCurrentCharId: n
          } = (0, c.Z)(), {
            track: i
          } = (0, k.Z)(), l = (0, o.createRef)(), {
            platform: f,
            platformUsername: h,
            mugshotUrl: g,
            stats: p
          } = a, [v, b] = (0, o.useState)(g), [_] = (0, o.useState)(a.index), x = d(f, "large"), S = r === a.index;
          return (0, o.useEffect)((() => {
            l.current && s && s(l.current.offsetWidth)
          }), [l]), (0, m.jsxs)("button", {
            className: "_74c6ed1e7c68394fdee06086788899b4002f",
            type: "button",
            "aria-hidden": S,
            onClick: e => {
              e.stopPropagation(), n(_);
              let a = "";
              "pc" === f ? a = "PC" : "ps4" === f ? a = "PS4" : "ps5" === f ? a = "PS5" : "xboxone" === f ? a = "Xbox One" : "xboxsx" === f && (a = "Xbox Series X|S"), i({
                event: "character_selector_select",
                event_category: "character_selector",
                event_action: "select",
                event_label: a,
                position: _
              })
            },
            ref: l,
            children: [(0, m.jsx)("div", {
              className: "_74c6ed1e7c68394fff6279c9ff9b88f1f1f6",
              "data-size": "small",
              children: (0, m.jsx)("img", {
                src: v,
                alt: h,
                onError: () => {
                  b(t(493))
                }
              })
            }), (0, m.jsxs)("div", {
              className: "_74c6ed1e7c68394fdb0c1a05fff15a2418f2",
              children: [(0, m.jsxs)("div", {
                className: "_74c6ed1e7c68394ffd06288478a14cd32f05",
                children: [(0, m.jsx)("img", {
                  src: x.src,
                  alt: x.alt
                }), (0, m.jsx)("div", {
                  className: "_74c6ed1e7c68394fe176d7a04bacf4e0d725",
                  "data-size": "small",
                  children: h
                })]
              }), (0, m.jsx)("div", {
                className: "_74c6ed1e7c68394fc08f37e001f1b148b046",
                children: (0, m.jsxs)("div", {
                  className: "_74c6ed1e7c68394ff4e32f1fa3917b84d463",
                  children: [(0, m.jsx)("img", {
                    className: "_74c6ed1e7c68394ff519c818d4a8d1520bfe",
                    src: u(p.overview.rank.value),
                    alt: "RP Category"
                  }), (0, m.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        })),
        S = {
          scNavWrapper: "_74c6ed1e7c68394fc3de120a19e6aafa6a68",
          rpLevel: "_74c6ed1e7c68394fa2e820529d46c5f70e84",
          rpIcon: "_74c6ed1e7c68394faf0e82b0e5d21b75663d",
          scProfileDetails: "_74c6ed1e7c68394fc1282f49e4228a2879de",
          scAvatar: "_74c6ed1e7c68394fcf0c4dbbcd8335929278",
          scAvatarPlatform: "_74c6ed1e7c68394fc525dacab0321297baef",
          scProfileStats: "_74c6ed1e7c68394fb99e82fade4d0e6ee847",
          scNames: "_74c6ed1e7c68394fd1c87934eb071ff85281",
          scTagsNames: "_74c6ed1e7c68394fd92a6e128c9fe3167010",
          scUserName: "_74c6ed1e7c68394fbd8f666c94e4ab99427e",
          scCrewName: "_74c6ed1e7c68394fa3366651dd3b56c45d56",
          scCrewRankBar: "_74c6ed1e7c68394fdc7ce2270b1c04168b20",
          scCrewRankBarItem: "_74c6ed1e7c68394fc0f3bee37355ef121582",
          scProgress: "_74c6ed1e7c68394fb3232d788aa7f1095ffe",
          scRpLevel: "_74c6ed1e7c68394faeca1876088169a80360",
          scRpIcon: "_74c6ed1e7c68394ff3226c91d969e7ea84f3",
          scMoney: "_74c6ed1e7c68394ff1091a6533945fd2eee3",
          scCash: "_74c6ed1e7c68394fcc969e3d73b7e5134a6f",
          scBank: "_74c6ed1e7c68394fe575e510309d38665272"
        },
        N = (0, l.withTranslations)((e => {
          let {
            character: a,
            platformTag: c
          } = e;
          const {
            data: r
          } = (0, s.useRockstarUser)(), {
            track: n
          } = (0, k.Z)(), [i, l] = (0, o.useState)([]), [d, f] = (0, o.useState)(null), [h, g] = (0, o.useState)(null), [p, v] = (0, o.useState)(!1), [b, _] = (0, o.useState)(-1), [x, N] = (0, o.useState)([]), [C, w] = (0, o.useState)(0), j = t(493), [y, E] = (0, o.useState)("0"), [R, I] = (0, o.useState)("0"), P = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), U = () => {
            L((0, m.jsx)("img", {
              src: j,
              alt: r.nickname
            }))
          }, [T, L] = (0, o.useState)((0, m.jsx)("img", {
            className: S.scAvatarImg,
            src: a.mugshotUrl,
            alt: r.nickname,
            onError: U
          }));
          (0, o.useEffect)((() => {
            l(r.crews ?? [])
          }), [r]), (0, o.useEffect)((() => {
            L((0, m.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: U
            })), E(P(a.stats.overview.bank.value)), I(P(a.stats.overview.cash.value)), w(a.stats.overview.rank.value)
          }), [a, r]), (0, o.useEffect)((() => {
            i && i.forEach((e => {
              !0 === e.isPrimary && (f(e.crewTag), g(e.crewColour), _(e.rankOrder), v(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && v(!0))
            }))
          }), [i]), (0, o.useEffect)((() => {
            const e = [];
            if (!p && b > -1)
              for (let a = 5; a > b; a -= 1) e.push((0, m.jsx)("div", {
                className: S.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== h ? h : ""
                }
              }, `crewrankbar-${a}`));
            N(e)
          }), [b, p, h]);
          const M = e => {
            e.stopPropagation(), n({
              event: "character_selector_profile_click",
              event_category: "character_selector",
              event_action: "profile_click",
              event_label: c.alt,
              link_url: void 0
            })
          };
          return (0, m.jsxs)("div", {
            className: S.scProfileDetails,
            onClick: M,
            onKeyUp: M,
            role: "button",
            tabIndex: -1,
            children: [(0, m.jsxs)("div", {
              className: S.scAvatar,
              children: [T, (0, m.jsx)("div", {
                className: S.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, m.jsx)("img", {
                  src: c.src,
                  alt: c.alt
                })
              })]
            }), (0, m.jsxs)("div", {
              className: S.scProfileStats,
              children: [(0, m.jsx)("div", {
                className: S.scNames,
                children: (0, m.jsxs)("div", {
                  className: S.scTagsNames,
                  children: [(0, m.jsx)("span", {
                    className: S.scUserName,
                    children: a.platformUsername
                  }), d && (0, m.jsxs)("span", {
                    className: S.scCrewName,
                    "data-arrow-tag": p,
                    children: [d, !p && (0, m.jsx)("div", {
                      className: S.scCrewRankBar,
                      children: x
                    })]
                  })]
                })
              }), (0, m.jsxs)("div", {
                className: S.scProgress,
                children: [(0, m.jsxs)("div", {
                  className: S.scRpLevel,
                  children: [(0, m.jsx)("img", {
                    className: S.scRpIcon,
                    src: u(C),
                    alt: "RP Category"
                  }), (0, m.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, m.jsxs)("div", {
                  className: S.scMoney,
                  children: [(0, m.jsxs)("span", {
                    className: S.scBank,
                    children: ["$", y]
                  }), (0, m.jsxs)("span", {
                    className: S.scCash,
                    children: ["$", R]
                  })]
                })]
              })]
            })]
          })
        })),
        C = {
          scNavWrapper: "_74c6ed1e7c68394fb37a25bc6761bd882dab",
          rpLevel: "_74c6ed1e7c68394fde9cbe40526987515089",
          rpIcon: "_74c6ed1e7c68394fc26aa647a6b6ed6ce54f",
          scProfile: "_74c6ed1e7c68394faa422ee77017648494c4",
          scCharacterSelector: "_74c6ed1e7c68394fa43958d6263ec45d37c8",
          scCharacterSelectBtn: "_74c6ed1e7c68394fba70cc2e07922955d3eb",
          open: "_74c6ed1e7c68394fe220b500bf382530bec5",
          scCharacterList: "_74c6ed1e7c68394fab26bb433acbeec7eedf",
          scNav: "_74c6ed1e7c68394fdcf1528386921ba96c80",
          scNavHeader: "_74c6ed1e7c68394fce29cf42c14f31f963f7",
          scNavWrap: "_74c6ed1e7c68394fc866301c326745076636"
        },
        w = (0, l.withTranslations)((e => {
          let {
            sc: a,
            t: n,
            charListHidden: i,
            hideCharacterList: u,
            refCharacterListDesktop: f,
            menuPadding: h,
            longCharList: _,
            setLongCharList: S,
            isMobileMode: w,
            setIsMobileMode: j
          } = e;
          const [y, E] = (0, o.useState)(""), R = (0, v.useLocation)(), {
            lsSettings: I
          } = (0, l.useRockstarWebLSSettings)(), {
            track: P
          } = (0, k.Z)(), U = (0, r.useRockstarTokenPing)(), {
            data: T,
            loggedIn: L
          } = (0, s.useRockstarUser)(), {
            charactersNeeded: M,
            currentCharId: D,
            hasNotifications: $,
            navOpen: O,
            setCurrentCharId: F,
            setHasNotifications: z,
            setSelectedCharacterTuple: B,
            setUserData: V
          } = (0, c.Z)(), [X, Z] = (0, o.useState)(null), [H, A] = (0, o.useState)(null), [W, G] = (0, o.useState)(!1), [q, J] = (0, o.useState)(!1), [K, Q] = (0, o.useState)(0), [Y, ee] = (0, o.useState)(0), [ae, te] = (0, o.useState)(0), se = (0, o.createRef)(), ce = g(se, !1), re = (0, o.createRef)(), [ne, ie] = (0, o.useState)(0), [oe, le] = (0, o.useState)([]), [de, ue] = (0, o.useState)(244);
          (0, o.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            E(e)
          }), [R]), (0, o.useEffect)((() => {
            le(T.characters[M] ?? [])
          }), [T, M]), (0, o.useEffect)((() => {
            T && V(T)
          }), [T]), (0, o.useEffect)((() => {
            const e = T?.characters.gtao;
            if (null !== L && !e.length) return void B(!1);
            if (null == D || !e.length) return;
            const a = e?.[D] ?? e?.[0] ?? null;
            B(!!a?.platform && [a.platform, a.characterSlot])
          }), [D, T, L]), (0, o.useEffect)((() => {
            (async () => {
              if (!T?.id) return;
              const {
                rockstarAccountList: e
              } = await (0, l.coreScApiFetch)("friends/getInvites", {
                pingBearer: U
              }), {
                count: a
              } = await (0, l.coreScApiFetch)("notification/count", {
                pingBearer: U
              });
              z(a > 0 || e.total > 0)
            })()
          }), [T]);
          const fe = {
              event_action: "click",
              event_category: "account_menu",
              event: "account_menu_click",
              environment: ""
            },
            me = [{
              text: n("View My Profile"),
              href: T.profile_link,
              target: "_blank",
              analytics: fe
            }, {
              text: n("Settings"),
              href: `https://${a.host}.rockstargames.com/settings`,
              target: "_blank",
              analytics: fe
            }, {
              text: n("Crews"),
              href: `https://${a.host}.rockstargames.com/member/${T.nickname}/crews`,
              target: "_blank",
              analytics: fe
            }, {
              text: n("Friends"),
              href: `https://${a.host}.rockstargames.com/member/${T.nickname}/friends`,
              target: "_blank",
              analytics: fe
            }, {
              text: n("Notifications"),
              href: `https://${a.host}.rockstargames.com/notifications`,
              target: "_blank",
              hasNotifications: $,
              analytics: fe
            }, {
              text: n("Log Out"),
              href: `${a.logout}?returnUrl=${y}`,
              target: "_self",
              analytics: fe
            }],
            he = () => {
              J(h + de * K < ce)
            };
          (0, o.useEffect)((() => {
            he()
          }), [de]);
          const ge = () => {
            if (re.current) {
              const {
                current: e
              } = re, a = e?.scrollHeight;
              ie(a)
            }
          };
          return (0, o.useEffect)((() => {
            const e = () => {
              ee(window.innerWidth), te(window.innerHeight), window.innerWidth < 768 || window.innerHeight < 649 ? j(!0) : j(!1), u(!0)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, o.useEffect)((() => {
            let e = oe.length - 1;
            e < 0 && (e = 0), Q(e);
            const a = oe.length > 0 ? oe[D] ?? oe[0] : null;
            if (!a) return;
            const t = null !== a ? d(a.platform, "large") : null;
            A(t), Z(a), oe.length > 1 ? G(!0) : G(!1), S(oe.length - 1 > 3)
          }), [D, oe]), (0, o.useEffect)((() => {
            he()
          }), [K, w, Y, oe]), (0, o.useEffect)((() => {
            ge(), setTimeout(ge, 1e3)
          }), [re, Y, ae]), (0, o.useEffect)((() => {
            const e = I?.currentCharId ?? 0;
            F(Math.max(0, Math.min(e, oe.length - 1)))
          }), [oe, I]), (0, m.jsxs)(m.Fragment, {
            children: [null !== X && "gtao" === M && (0, m.jsxs)("div", {
              className: C.scProfile,
              tabIndex: -1,
              "aria-label": "Profile Card",
              children: [(0, m.jsx)(N, {
                s: C,
                character: X,
                platformTag: H
              }), !0 === W && (0, m.jsxs)("div", {
                className: C.scCharacterSelector,
                children: [(0, m.jsx)("button", {
                  className: C.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !i;
                    u(a), P({
                      event: !0 === a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": i,
                  children: (0, m.jsx)("span", {
                    children: n("Switch Character")
                  })
                }), !1 === w && (0, m.jsx)("div", {
                  className: C.scCharacterList,
                  "data-long-list": _,
                  "aria-hidden": i,
                  ref: f,
                  children: oe.map((e => (0, m.jsx)(x, {
                    characterData: e
                  }, e.mugshotUrl)))
                }), !0 === w && (0, m.jsx)("div", {
                  className: C.scCharacterList,
                  "data-single-item": 2 === oe.length,
                  "data-swiper-disabled": q,
                  "aria-hidden": i,
                  ref: se,
                  children: (0, m.jsx)(p, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      P({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: q,
                    disableSwiper: q,
                    children: oe.filter(((e, a) => a !== D)).map((e => (0, o.createElement)(x, {
                      characterData: e,
                      setMobileCardWidth: ue,
                      key: e.mugshotUrl
                    })))
                  })
                })]
              })]
            }), (0, m.jsxs)("nav", {
              className: C.scNav,
              "aria-hidden": !O,
              children: [(0, m.jsxs)("button", {
                className: C.scNavHeader,
                type: "button",
                "data-opened": i,
                "data-nav-opened": O,
                onClick: e => {
                  e.stopPropagation(), !1 === i && u(!0)
                },
                children: [(0, m.jsx)("span", {
                  children: T.nickname
                }), (0, m.jsx)("img", {
                  src: t(456),
                  alt: "Social Club"
                })]
              }), (0, m.jsx)("div", {
                className: C.scNavWrap,
                "data-opened": i,
                "data-logged-in": "true",
                ref: re,
                style: {
                  maxHeight: `${ne}px`
                },
                children: me.map((e => (0, o.createElement)(b, {
                  ...e,
                  key: e.text
                })))
              })]
            })]
          })
        })),
        j = {
          scNavWrapper: "_74c6ed1e7c68394fd7bac12a82ffc52818c3",
          rpLevel: "_74c6ed1e7c68394fe2e5c1bfb71e9ff95838",
          rpIcon: "_74c6ed1e7c68394fcd60c6f857f6da4611af",
          scMenu: "_74c6ed1e7c68394ffb9966f65cb155635c74",
          navOpen: "_74c6ed1e7c68394fff3d86ee58e3e40e9424",
          dragHandle: "_74c6ed1e7c68394fdc573b70b5fa74fbc251",
          dragHandleBtn: "_74c6ed1e7c68394fcbaf32fb58cd4992ca4e",
          scOverlay: "_74c6ed1e7c68394fd6934ce9e7a8c717c2f5"
        },
        y = (0, l.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBodyIsScrollable: i
          } = (0, l.useBodyScrollable)(), {
            navHidden: d = !1
          } = (0, r.useState)(), {
            loggedIn: u
          } = (0, s.useRockstarUser)(), {
            currentCharId: f,
            navOpen: h,
            setNavOpen: g
          } = (0, c.Z)(), [p, v] = (0, o.useState)(!0), [k, b] = (0, o.useState)(!1), x = (0, r.useReactiveVar)(n.Z), S = (0, o.useRef)(), [N, C] = (0, o.useState)(0), y = (0, o.createRef)(), [E, R] = (0, o.useState)(!1), [I, P] = (0, o.useState)(0), [U, T] = (0, o.useState)(!1), {
            mutateLSSettings: L
          } = (0, l.useRockstarWebLSSettings)(), M = (0, o.useCallback)((e => {
            v(e), S.current && !0 === e && (S.current.scrollTop = 0)
          }), [S]);
          return (0, o.useEffect)((() => {
            null !== f && L({
              key: "currentCharId",
              value: f
            }), !1 === u && L({
              key: "currentCharId",
              value: null
            })
          }), [f, u]), (0, o.useEffect)((() => {
            S.current && (!1 === p && !1 === k && (S.current.style.height = `${S.current.scrollHeight}px`), !0 === p && (S.current.style.height = null))
          }), [p, S, k]), (0, o.useEffect)((() => {
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
              C(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [y]), (0, o.useEffect)((() => {
            i(!E || !h)
          }), [h, E]), (0, o.useEffect)((() => {
            T(window.navigator.userAgent.includes("Mac"))
          }), []), null === u ? null : (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsxs)("div", {
              className: [j.scMenu, h ? j.navOpen : ""].join(" "),
              "data-logged-in": u,
              "data-mac-browser": U,
              ref: y,
              "aria-hidden": !h,
              children: [(0, m.jsx)("button", {
                className: j.dragHandleBtn,
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
                  className: j.dragHandle,
                  src: t(762),
                  alt: a("Drag Menu Handle")
                })
              }), u ? (0, m.jsx)(w, {
                sc: x,
                charListHidden: p,
                hideCharacterList: M,
                refCharacterListDesktop: S,
                menuPadding: N,
                longCharList: k,
                setLongCharList: b,
                isMobileMode: E,
                setIsMobileMode: R
              }) : (0, m.jsx)(_, {
                sc: x,
                navOpen: h
              })]
            }), (0, m.jsx)("div", {
              className: [j.scOverlay, h ? j.navOpen : ""].join(" "),
              "data-logged-in": u
            })]
          })
        })),
        E = t(493),
        R = t(916),
        I = (0, l.withTranslations)((() => {
          const {
            data: e
          } = (0, s.useRockstarUser)(), {
            charactersNeeded: a,
            currentCharId: t,
            navOpen: r,
            setNavOpen: n
          } = (0, c.Z)(), {
            track: i
          } = (0, k.Z)(), [l, u] = (0, o.useState)(null), [f, h] = (0, o.useState)(!1), [g, p] = (0, o.useState)(null), [v, b] = (0, o.useState)(!1), [_, x] = (0, o.useState)([]);
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
              s = a ? (_?.[t]?.mugshotUrl ?? e?.avatar) || E : R,
              c = d(_?.[t]?.platform, "small") ?? null;
            p(c), u(s), h(a), b(!!_?.[t]?.mugshotUrl)
          }), [e, _, t, E, R]), (0, m.jsxs)("button", {
            className: "_74c6ed1e7c68394ff60d175890a158a2eeca",
            "data-img-set": v,
            "aria-label": "Toggle Social Club Menu",
            type: "button",
            onClick: e => S(e),
            children: [(0, m.jsx)("img", {
              className: "_74c6ed1e7c68394fa9651d22866bf58ca4bd",
              src: l || "",
              onError: () => {
                u(E)
              },
              alt: e?.nickname || ""
            }), f && null !== g && (0, m.jsx)("img", {
              className: "_74c6ed1e7c68394fe8c699c608f17bc081aa",
              src: g.src,
              alt: g.alt
            }), f && (0, m.jsx)("div", {
              className: "_74c6ed1e7c68394facba28aeab3965a49753",
              "data-platform": _?.[a]?.[t]?.platform ?? null
            })]
          })
        }))
    },
    59: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        GtmProvider: () => x,
        RockstarUserProvider: () => v,
        useGtmTrack: () => N,
        useRockstarUser: () => k
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
      } = (0, r.getScConfigForOrigin)(), f = (0, c.uriForGraphEnv)(u), m = () => {
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
          [m, , h] = (0, c.useRockstarTokenReactive)(),
          g = (0, c.useRockstarTokenPing)(),
          {
            refetch: p
          } = (0, c.useQuery)(n.userData, {
            skip: !0,
            context: {
              uri: f
            }
          }),
          [v, k] = (0, s.useState)(null),
          [b, _] = (0, s.useState)(!1),
          [x, S] = (0, s.useState)(!1);
        return (0, s.useEffect)((() => {
          (async () => {
            const s = null === e ? null : !!e;
            if (s && !b) {
              u(!0), _(!0);
              const e = await p(),
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
                  pingBearer: g,
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
                        if ("0" === n.value) return;
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
                  pingBearer: g,
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
              u(!1), t(o), k(!0), (0, i.R)(s)
            }
            if (!1 === s && !x) {
              try {
                await (async e => {
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
                  token: m,
                  tokenPingExpires: h
                })
              } catch (e) {}
              S(!0)
            }!1 === s && x && (_(!0), k(!1), u(!1)), null === e && g()
          })()
        }), [e, b, x]), {
          data: a,
          loading: o,
          loggedIn: v
        }
      };
      var h = t(160);
      const g = {
          data: null,
          characters: {
            gtao: []
          },
          loggedIn: !0,
          hasProvider: !1
        },
        p = (0, s.createContext)(g),
        v = e => {
          let {
            children: a
          } = e;
          const t = m(),
            c = (0, s.useMemo)((() => ({
              ...t,
              hasProvider: !0
            })), [t]);
          return (0, h.jsx)(p.Provider, {
            value: c,
            children: a
          })
        },
        k = () => (0, s.useContext)(p);
      var b = t(239);
      const _ = (0, s.createContext)(void 0),
        x = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const c = (0, b.Z)(a),
            r = (0, s.useMemo)((() => c), [c, a]);
          return (0, h.jsx)(_.Provider, {
            value: r,
            children: t
          })
        },
        S = {
          track: () => null
        },
        N = () => (0, s.useContext)(_) ?? S
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
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "subscribed"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 225
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
        body: "query userData {\n    user: userData {\n        id\n        avatar\n        nickname\n        profile_link\n        dob\n        bearer_token_expired\n        agegate_pass @client\n        logged_in @client\n        subscribed\n    }\n}\n",
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
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/04f91124ddca6945134c.svg"
    },
    762: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/cfb657cdc749132fc8fd.svg"
    },
    916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/61ed3b631437f6495d9c.svg"
    },
    493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8a7ecf45a9551607393f.png"
    },
    48: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/72b01a5fe559550897c7.svg"
    },
    466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/16fc79e538f405dac692.svg"
    },
    175: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3056dd100cdc9af4c8f8.svg"
    },
    733: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/b9049c3fc2e23432cd99.svg"
    },
    647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/b38c704a4f0f93dbaa71.svg"
    },
    816: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e18cbaeff16e28472704.svg"
    },
    848: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/73fac91764a07506aa44.svg"
    },
    731: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ffdc38b81812447f1a52.svg"
    },
    3: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e06e7d21fd0c72e7b049.svg"
    },
    748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/eaef99f273a784a715fc.svg"
    },
    910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c56e571a937094f77aba.svg"
    },
    185: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/dc0ee5af18bf15f7ce11.svg"
    },
    981: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/55e4ef9f3127c7c76d92.svg"
    },
    60: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/83bc0bb48baad355b5f3.svg"
    }
  }
]);
//# sourceMappingURL=eb873e9525631b995075.js.map