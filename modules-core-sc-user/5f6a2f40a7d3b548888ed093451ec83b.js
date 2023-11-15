(self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [523], {
    404: (e, a, s) => {
      "use strict";
      s.d(a, {
        Z: () => c
      });
      var t = s(859);
      const r = (0, s(929).getScConfigForOrigin)(),
        c = (0, t.makeVar)(r)
    },
    523: (e, a, s) => {
      "use strict";
      s.d(a, {
        Z: () => n
      });
      var t = s(927),
        r = s(331),
        c = s(349);
      const n = function() {
        let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const [a, s] = (0, t.useState)([]), [n, o] = (0, t.useState)([]), [i, l] = (0, t.useState)(null), {
          data: d,
          loggedIn: u
        } = (0, c.useRockstarUser)(), m = (e, t) => {
          const c = [];
          e.forEach((e => {
            if (-1 === a.indexOf(e)) {
              const a = t ?? {};
              (0, r.track)({
                ...e,
                ...a
              }), c.push(e)
            }
          })), s([...a, ...c])
        };
        (0, t.useEffect)((() => {
          if (d && null !== u) {
            const e = f(d);
            n.length && e && m(n, e), l(e)
          } else e || n.length && m(n)
        }), [d, u, n]), (0, t.useEffect)((() => {
          const e = n.filter((e => -1 === a.indexOf(e)));
          o(e)
        }), [a]);
        const f = e => {
          const a = [],
            s = [],
            t = [];
          return Object.keys(e.characters).forEach((r => {
            e.characters[r].length && (s.push(r), e.characters[r].forEach((e => {
              "gtao" === r && (t.includes(e.platform) || t.push(e.platform)), a.includes(e.platform) || a.push(e.platform)
            })))
          })), {
            member_id: e.id ?? void 0,
            login_state: u ?? !1,
            platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
            games_played: s.length ? s.join("|").toUpperCase() : void 0,
            gtao_platforms_played: t.length ? t.join("|").toUpperCase() : void 0
          }
        };
        return {
          track: e => {
            if (null === u || !d || !i) {
              const a = [...n];
              return a.push({
                ...e
              }), o(a)
            }
            return (0, r.track)({
              ...e,
              ...i
            })
          }
        }
      }
    },
    489: (e, a, s) => {
      "use strict";
      s.d(a, {
        R: () => h,
        Z: () => x
      });
      var t = s(859);
      const r = (0, t.makeVarNamespace)("@rockstargames/modules-core-sc-user"),
        c = r("navOpenReactive", !1),
        n = e => c(e),
        o = r("jumpScMenuFocusReactive", !1),
        i = e => o(e),
        l = r("hasNotificationsReactive", !1),
        d = e => l(e),
        u = r("currentCharIdReactive", null),
        m = e => u(e),
        f = r("selectedCharacterTupleReactive", null),
        g = e => f(e),
        h = r(null),
        p = r("charactersNeededReactive", null),
        k = e => p(e),
        b = r("userDataReactive", null),
        v = e => b(e),
        x = () => {
          const e = (0, t.useReactiveVar)(p),
            a = (0, t.useReactiveVar)(u),
            s = (0, t.useReactiveVar)(c),
            r = (0, t.useReactiveVar)(l),
            h = (0, t.useReactiveVar)(f);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: r,
            navOpen: s,
            userData: (0, t.useReactiveVar)(b),
            selectedCharacterTuple: h,
            jumpScMenuFocus: (0, t.useReactiveVar)(o),
            setCharactersNeeded: k,
            setCurrentCharId: m,
            setHasNotifications: d,
            setNavOpen: n,
            setSelectedCharacterTuple: g,
            setUserData: v,
            setJumpScMenuFocus: i
          }
        }
    },
    349: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        CharacterCard: () => g,
        CustomSwiper: () => p,
        Menu: () => y,
        MenuButton: () => I,
        scConfig: () => n.Z,
        useGtmTrack: () => t.useGtmTrack,
        useRockstarUser: () => t.useRockstarUser,
        useRockstarUserState: () => r.Z,
        useRpCategory: () => u,
        useScConfig: () => o
      });
      var t = s(427),
        r = s(489),
        c = s(859),
        n = s(404);
      const o = () => (0, c.useReactiveVar)(n.Z);
      var i = s(927),
        l = s(929);
      const d = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: s(48),
                alt: "PC"
              } : {
                src: s(816),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: s(466),
                alt: "PS4"
              } : {
                src: s(848),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: s(347),
                alt: "PS5"
              } : {
                src: s(731),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: s(733),
                alt: "Xbox One"
              } : {
                src: s(3),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: s(647),
                alt: "Xbox Series X|S"
              } : {
                src: s(748),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        u = e => s(e < 100 ? 910 : e > 99 && e < 500 ? 185 : e > 499 && e < 750 ? 60 : 981),
        m = {
          scNavWrapper: "rockstargames-modules-core-sc-usercb30924cce6c92323e8310df1bc39e5b",
          rpLevel: "rockstargames-modules-core-sc-usera4638e476b6e83afb4fbfedd8c9dcdbe",
          rpIcon: "rockstargames-modules-core-sc-userb7c3eebf7393c19cb3e468bfb79514d6",
          scCharacterCard: "rockstargames-modules-core-sc-userc075b0c8f42b52f35496d18022645ca3",
          scAvatar: "rockstargames-modules-core-sc-userb61b60a22b2e4f7115121d272b157a21",
          scCharNames: "rockstargames-modules-core-sc-userd9fc9a8eaa6673ce31b7db9bebbfbb9f",
          scCharacterStats: "rockstargames-modules-core-sc-userab43a8b68c7a834997be92b71f6e0b72",
          scUserName: "rockstargames-modules-core-sc-userb9a3dc9f5dfb5cd75d8fa91691a48f75",
          scRpLevel: "rockstargames-modules-core-sc-userd965754529ec1a52206ae4d9e99a6784",
          scRpIcon: "rockstargames-modules-core-sc-userd05e939b63ac48dfc1ecd122bbb860b1"
        };
      var f = s(705);
      const g = (0, l.withTranslations)((e => {
          let {
            characterData: a
          } = e;
          const {
            platform: t,
            platformUsername: r,
            mugshotUrl: c,
            stats: n
          } = a, [o, l] = (0, i.useState)(c), g = d(t, "large");
          return (0, f.jsxs)("div", {
            className: m.scCharacterCard,
            children: [(0, f.jsx)("div", {
              className: m.scAvatar,
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: o,
                alt: r,
                onError: () => {
                  l(s(493))
                }
              })
            }), (0, f.jsx)("div", {
              className: m.scCharacterStats,
              children: (0, f.jsxs)("div", {
                className: m.scCharNames,
                children: [(0, f.jsx)("img", {
                  src: g.src,
                  alt: g.alt
                }), (0, f.jsx)("div", {
                  className: m.scUserName,
                  "data-size": "small",
                  children: r
                }), (0, f.jsx)("div", {
                  className: m.scRp,
                  children: (0, f.jsxs)("div", {
                    className: m.scRpLevel,
                    children: [(0, f.jsx)("img", {
                      className: m.scRpIcon,
                      src: u(n.overview.rank.value),
                      alt: "RP Category"
                    }), (0, f.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        })),
        h = (e, a) => {
          const [s, t] = (0, i.useState)(0);
          return (0, i.useEffect)((() => {
            if (e.current) {
              const {
                current: s
              } = e, r = s.getBoundingClientRect(), {
                width: c
              } = r;
              let n = c;
              if (!0 === a) {
                const e = window.getComputedStyle(s);
                n += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              t(n)
            }
          }), [e]), s
        },
        p = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: s = 1e3,
            mobileGutterWidth: t = 17,
            slideChangeCallback: r = null,
            slideClickCallback: c = null,
            children: n = [],
            disablePager: o = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, i.createRef)(),
            u = h(d, !1),
            [m, g] = (0, i.useState)(!1),
            [p, k] = (0, i.useState)(0),
            [b, v] = (0, i.useState)(0),
            [x, S] = (0, i.useState)([t]),
            [N, _] = (0, i.useState)(x[0]),
            [C, w] = (0, i.useState)(252),
            [j, y] = (0, i.useState)(0),
            [E, R] = (0, i.useState)([]),
            [I, T] = (0, i.useState)([]),
            [P, L] = (0, i.useState)(!1),
            U = e => {
              if (!0 === m || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              v(a)
            },
            M = e => {
              if (!0 === m || 0 === b || !0 === l) return;
              const s = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                t = s > b ? 1 : -1,
                c = Math.abs(b - s);
              c > a ? (t > 0 ? (() => {
                if (!0 === m) return;
                g(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                k(e), _(x[e]), r && r(e)
              })() : (() => {
                if (!0 === m) return;
                g(!0);
                let e = p + 1 >= x.length ? x.length - 1 : p + 1;
                e < 0 && (e = 0), k(e), _(x[e]), r && r(e)
              })(), v(0)) : _(x[p] + c * t)
            },
            $ = () => {
              !0 !== m && !0 !== l && (g(!0), !0 !== m && (_(x[p]), v(0)))
            };
          return (0, i.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, i.createRef)())
            })), R(e)
          }), [n]), (0, i.useEffect)((() => {
            if (E.length < 1) return;
            w(E[0]?.current?.clientWidth || 0);
            const e = E[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              s = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            y(s + a)
          }), [E]), (0, i.useEffect)((() => {
            !1 !== m && setTimeout((() => {
              g(!1)
            }), s)
          }), [m, s]), (0, i.useEffect)((() => {
            S(n.map(((e, a) => (e => {
              let a = 0;
              const s = n.length;
              return 1 === s ? .5 * u - .5 * C - 2 * t + j : (0 === e && (a = t - e * C), e === s - 1 && s > 1 && (a = s * C * -1 + (u - (t - j))), e > 0 && e < s - 1 && (a = e * C * -1 + (.5 * u - .5 * C + .5 * j)), a)
            })(a)))), 1 === n.length ? L(!0) : L(!1)
          }), [d.current, n, u]), (0, i.useEffect)((() => {
            const e = (a = p, n.map(((e, s) => {
              const t = {
                active: !1
              };
              return s === a && (t.active = !0), t
            })));
            var a;
            T(e)
          }), [n, p]), (0, i.useEffect)((() => {
            !0 !== o && !0 !== l || _(x[0])
          }), [l, o, x]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              className: "rockstargames-modules-core-sc-userc398af4f7b1dad2f4504c1315197dfde",
              ref: d,
              onTouchStart: U,
              onTouchMove: M,
              onTouchEnd: $,
              onMouseDown: U,
              onMouseMove: M,
              onMouseUp: $,
              onClick: () => {
                null !== c && c(p)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, f.jsx)("div", {
                className: "rockstargames-modules-core-sc-userddee2937f9ebb04ebf9213678c99d781",
                "data-interaction-blocked": m,
                "data-single-item": P,
                style: {
                  transform: P ? null : `translateX(${N}px)`
                },
                children: n.map(((e, a) => (0, f.jsx)("div", {
                  className: "rockstargames-modules-core-sc-userb416d892f223ee06116744608e5b830a",
                  ref: E[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), I.length > 1 && !1 === o && (0, f.jsx)("div", {
              className: "rockstargames-modules-core-sc-userf1db49062d9f3389b6c845fd547b81ae",
              children: I.map((e => (0, f.jsx)("div", {
                className: "rockstargames-modules-core-sc-userfe65d2a1e9d728e940c3fd3135f940d6",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        };
      var k = s(837),
        b = s(523);
      const v = e => {
          let {
            text: a,
            target: s,
            href: t,
            ga: r,
            hasNotifications: c = !1,
            dataTestId: n
          } = e;
          const {
            track: o
          } = (0, b.Z)();
          return (0, f.jsxs)("a", {
            className: "rockstargames-modules-core-sc-userf27d66d85b6196696c12045bda143ddf",
            "data-testid": n || "menuLink",
            title: a,
            href: t,
            target: s,
            rel: "noreferrer",
            onClick: () => {
              o(r)
            },
            children: [a, c && (0, f.jsx)("span", {
              className: "rockstargames-modules-core-sc-userde8875f8300bfbae777bb4880251af5b"
            })]
          }, a)
        },
        x = (0, l.withTranslations)((e => {
          let {
            sc: a,
            t: s
          } = e;
          const {
            setSelectedCharacterTuple: t
          } = (0, r.Z)(), c = (0, l.useLocale)(), n = (0, l.toScLocaleString)(c), [o, d] = (0, i.useState)(""), u = (0, k.useLocation)(), m = `${a.login}?returnUrl=${o}&lang=${n}`, g = `${a.signup}&returnUrl=${o}&lang=${n}`, h = [{
            text: s("Sign In"),
            href: m,
            ga: {
              event: "account_menu_click",
              text: "Sign In",
              link_url: m,
              element_placement: "Account Menu"
            },
            dataTestId: "loginLink"
          }, {
            text: s("Join Social Club"),
            href: g,
            ga: {
              event: "account_menu_click",
              text: "Join Social Club",
              link_url: g,
              element_placement: "Account Menu"
            },
            dataTestId: "signUpLink"
          }];
          return (0, i.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            d(e)
          }), [u]), (0, i.useEffect)((() => {
            t(!1)
          }), []), (0, f.jsx)("nav", {
            className: "rockstargames-modules-core-sc-userf8985f6fa7cd383077674fd23eb44efb",
            "aria-label": "sc menu",
            title: s("Social Club"),
            children: (0, f.jsx)("div", {
              className: "rockstargames-modules-core-sc-userd0e856d31e743c29723984e61861d5b4",
              "data-logged-in": "false",
              children: h.map((e => (0, i.createElement)(v, {
                ...e,
                key: e.text
              })))
            })
          })
        })),
        S = (0, l.withTranslations)((e => {
          let {
            characterData: a,
            setMobileCardWidth: t
          } = e;
          const {
            currentCharId: c,
            setCurrentCharId: n
          } = (0, r.Z)(), {
            track: o
          } = (0, b.Z)(), l = (0, i.createRef)(), {
            platform: m,
            platformUsername: g,
            mugshotUrl: h,
            stats: p
          } = a, [k, v] = (0, i.useState)(h), [x] = (0, i.useState)(a.index), S = d(m, "large"), N = c === a.index;
          return (0, i.useEffect)((() => {
            l.current && t && t(l.current.offsetWidth)
          }), [l]), (0, f.jsxs)("button", {
            className: "rockstargames-modules-core-sc-usere79afb53a12f26edf4f73db6f707bb5a",
            type: "button",
            "aria-hidden": N,
            onClick: e => {
              e.stopPropagation(), n(x);
              let a = "";
              "pc" === m ? a = "PC" : "ps4" === m ? a = "PS4" : "ps5" === m ? a = "PS5" : "xboxone" === m ? a = "Xbox One" : "xboxsx" === m && (a = "Xbox Series X|S"), o({
                event: "character_selector_select",
                event_category: "character_selector",
                event_action: "select",
                event_label: a,
                position: x
              })
            },
            ref: l,
            children: [(0, f.jsx)("div", {
              className: "rockstargames-modules-core-sc-userbd832bca31f333f7fd7502e9e0b7d057",
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: k,
                alt: g,
                onError: () => {
                  v(s(493))
                }
              })
            }), (0, f.jsxs)("div", {
              className: "rockstargames-modules-core-sc-useredc7b4303cf935f942112cabec74e0c1",
              children: [(0, f.jsxs)("div", {
                className: "rockstargames-modules-core-sc-usered4208b1045ca5fc94db61cd56f5bc72",
                children: [(0, f.jsx)("img", {
                  src: S.src,
                  alt: S.alt
                }), (0, f.jsx)("div", {
                  className: "rockstargames-modules-core-sc-usera4eed546ab025a61df57438382db2178",
                  "data-size": "small",
                  children: g
                })]
              }), (0, f.jsx)("div", {
                className: "rockstargames-modules-core-sc-usereca9396a38b1215463d8c78b6c189573",
                children: (0, f.jsxs)("div", {
                  className: "rockstargames-modules-core-sc-userc30fdefc89a0a49cfd63a1fc0aff4c11",
                  children: [(0, f.jsx)("img", {
                    className: "rockstargames-modules-core-sc-userb80750a1f27666fd4552ec17fed74e5c",
                    src: u(p.overview.rank.value),
                    alt: "RP Category"
                  }), (0, f.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        })),
        N = {
          scNavWrapper: "rockstargames-modules-core-sc-useraf61bc6afc510a84ebb3cb97678ef5e1",
          rpLevel: "rockstargames-modules-core-sc-usera03c53f0290ae8fa2dbbcf6df2cf1c07",
          rpIcon: "rockstargames-modules-core-sc-userd48aca77c14cb46a0d093ffb67e9290d",
          scProfileDetails: "rockstargames-modules-core-sc-userb6ebb9ba50ea6577a090de1b9773c882",
          scAvatar: "rockstargames-modules-core-sc-usera7e9964e6642fc1ce377c3c39e23f653",
          scAvatarPlatform: "rockstargames-modules-core-sc-userf402cfe6919bd1019216b6697fccdcae",
          scProfileStats: "rockstargames-modules-core-sc-userb157054fe0df897a75ccbf674d1af744",
          scNames: "rockstargames-modules-core-sc-userd5e39732d1362a4f6329f29853552826",
          scTagsNames: "rockstargames-modules-core-sc-usercbb864a4e3a2fff3cf46dbee3dc478dd",
          scUserName: "rockstargames-modules-core-sc-usera9d6a40eb6477cb4534e2da7ac0455e9",
          scCrewName: "rockstargames-modules-core-sc-userd84ef3c26d6dcbe0908eb900e6133c53",
          scCrewRankBar: "rockstargames-modules-core-sc-userdb0c8ea9775a0341683f9dcfacae80cb",
          scCrewRankBarItem: "rockstargames-modules-core-sc-userf0bcea88cec2baea7ec17f4f0baaa0b5",
          scProgress: "rockstargames-modules-core-sc-usercb97e72940e160440ee846792240bd5d",
          scRpLevel: "rockstargames-modules-core-sc-useraa760927ec430e63b6c1a465a191ab2d",
          scRpIcon: "rockstargames-modules-core-sc-useraeb99052cefbe999e65a768345a72b4c",
          scMoney: "rockstargames-modules-core-sc-usered9247de7a4227e7652200c6c970781d",
          scCash: "rockstargames-modules-core-sc-userf67cbf3669aa6efaadd90d9e7183c766",
          scBank: "rockstargames-modules-core-sc-usere68113009324b6067a330989176ee559"
        },
        _ = (0, l.withTranslations)((e => {
          let {
            character: a,
            platformTag: r
          } = e;
          const {
            data: c
          } = (0, t.useRockstarUser)(), {
            track: n
          } = (0, b.Z)(), [o, l] = (0, i.useState)([]), [d, m] = (0, i.useState)(null), [g, h] = (0, i.useState)(null), [p, k] = (0, i.useState)(!1), [v, x] = (0, i.useState)(-1), [S, _] = (0, i.useState)([]), [C, w] = (0, i.useState)(0), j = s(493), [y, E] = (0, i.useState)("0"), [R, I] = (0, i.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), P = () => {
            U((0, f.jsx)("img", {
              src: j,
              alt: c.nickname
            }))
          }, [L, U] = (0, i.useState)((0, f.jsx)("img", {
            className: N.scAvatarImg,
            src: a.mugshotUrl,
            alt: c.nickname,
            onError: P
          }));
          (0, i.useEffect)((() => {
            l(c.crews ?? [])
          }), [c]), (0, i.useEffect)((() => {
            U((0, f.jsx)("img", {
              src: a.mugshotUrl,
              alt: c.nickname,
              onError: P
            })), E(T(a.stats.overview.bank.value)), I(T(a.stats.overview.cash.value)), w(a.stats.overview.rank.value)
          }), [a, c]), (0, i.useEffect)((() => {
            o && o.forEach((e => {
              !0 === e.isPrimary && (m(e.crewTag), h(e.crewColour), x(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [o]), (0, i.useEffect)((() => {
            const e = [];
            if (!p && v > -1)
              for (let a = 5; a > v; a -= 1) e.push((0, f.jsx)("div", {
                className: N.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== g ? g : ""
                }
              }, `crewrankbar-${a}`));
            _(e)
          }), [v, p, g]);
          const M = e => {
            e.stopPropagation(), n({
              event: "character_selector_profile_click",
              event_category: "character_selector",
              event_action: "profile_click",
              event_label: r.alt,
              link_url: void 0
            })
          };
          return (0, f.jsxs)("div", {
            className: N.scProfileDetails,
            onClick: M,
            onKeyUp: M,
            role: "button",
            tabIndex: -1,
            children: [(0, f.jsxs)("div", {
              className: N.scAvatar,
              children: [L, (0, f.jsx)("div", {
                className: N.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, f.jsx)("img", {
                  src: r.src,
                  alt: r.alt
                })
              })]
            }), (0, f.jsxs)("div", {
              className: N.scProfileStats,
              children: [(0, f.jsx)("div", {
                className: N.scNames,
                children: (0, f.jsxs)("div", {
                  className: N.scTagsNames,
                  children: [(0, f.jsx)("span", {
                    className: N.scUserName,
                    children: a.platformUsername
                  }), d && (0, f.jsxs)("span", {
                    className: N.scCrewName,
                    "data-arrow-tag": p,
                    children: [d, !p && (0, f.jsx)("div", {
                      className: N.scCrewRankBar,
                      children: S
                    })]
                  })]
                })
              }), (0, f.jsxs)("div", {
                className: N.scProgress,
                children: [(0, f.jsxs)("div", {
                  className: N.scRpLevel,
                  children: [(0, f.jsx)("img", {
                    className: N.scRpIcon,
                    src: u(C),
                    alt: "RP Category"
                  }), (0, f.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, f.jsxs)("div", {
                  className: N.scMoney,
                  children: [(0, f.jsxs)("span", {
                    className: N.scBank,
                    children: ["$", y]
                  }), (0, f.jsxs)("span", {
                    className: N.scCash,
                    children: ["$", R]
                  })]
                })]
              })]
            })]
          })
        })),
        C = {
          scNavWrapper: "rockstargames-modules-core-sc-userfb3fa132e4cb3ad6a2e864b8a0fafb19",
          rpLevel: "rockstargames-modules-core-sc-usere283d167a121dcd7dd1e91b010c24da2",
          rpIcon: "rockstargames-modules-core-sc-userc9017ef04f67659ba72c178ee1b541b1",
          scProfile: "rockstargames-modules-core-sc-usera44f6ec973f0bc0de46c5eb1ddd39af6",
          scCharacterSelector: "rockstargames-modules-core-sc-userc620914d3dafee8d6a1119b9e67fd753",
          scCharacterSelectBtn: "rockstargames-modules-core-sc-usere7397c9aebc333ce1e17ce95ebe2cefc",
          open: "rockstargames-modules-core-sc-userc788092561239c9d37668da7e5f52c0d",
          scCharacterList: "rockstargames-modules-core-sc-usera64ae59e99d8b01202be0b41b9c5160c",
          scNav: "rockstargames-modules-core-sc-usere40a5aee8b25debb2889645196fb551a",
          scNavHeader: "rockstargames-modules-core-sc-usere182592d17415eaa95870bef4d32a697",
          scNavWrap: "rockstargames-modules-core-sc-userf85dbb3799a6551a04f2e784f2efe48a"
        },
        w = (0, l.withTranslations)((e => {
          let {
            sc: a,
            t: n,
            charListHidden: o,
            hideCharacterList: u,
            refCharacterListDesktop: m,
            menuPadding: g,
            longCharList: x,
            setLongCharList: N,
            isMobileMode: w,
            setIsMobileMode: j
          } = e;
          const [y, E] = (0, i.useState)(""), R = (0, k.useLocation)(), {
            lsSettings: I
          } = (0, l.useRockstarWebLSSettings)(), {
            track: T
          } = (0, b.Z)(), P = (0, c.useRockstarTokenPing)(), {
            data: L,
            loggedIn: U
          } = (0, t.useRockstarUser)(), {
            charactersNeeded: M,
            currentCharId: $,
            hasNotifications: D,
            navOpen: O,
            setCurrentCharId: F,
            setHasNotifications: B,
            setSelectedCharacterTuple: z,
            setUserData: A
          } = (0, r.Z)(), [X, Z] = (0, i.useState)(null), [H, W] = (0, i.useState)(null), [V, G] = (0, i.useState)(!1), [q, J] = (0, i.useState)(!1), [K, Q] = (0, i.useState)(0), [Y, ee] = (0, i.useState)(0), [ae, se] = (0, i.useState)(0), te = (0, i.createRef)(), re = h(te, !1), ce = (0, i.createRef)(), [ne, oe] = (0, i.useState)(0), [ie, le] = (0, i.useState)([]), [de, ue] = (0, i.useState)(244);
          (0, i.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            E(e)
          }), [R]), (0, i.useEffect)((() => {
            le(L.characters[M] ?? [])
          }), [L, M]), (0, i.useEffect)((() => {
            L && A(L)
          }), [L]), (0, i.useEffect)((() => {
            const e = L?.characters.gtao;
            if (null !== U && !e.length) return void z(!1);
            if (null == $ || !e.length) return;
            const a = e?.[$] ?? e?.[0] ?? null;
            z(!!a?.platform && [a.platform, a.characterSlot])
          }), [$, L, U]), (0, i.useEffect)((() => {
            (async () => {
              if (!L?.id) return;
              const {
                rockstarAccountList: e
              } = await (0, l.coreScApiFetch)("friends/getInvites", {
                pingBearer: P
              }), {
                count: a
              } = await (0, l.coreScApiFetch)("notification/count", {
                pingBearer: P
              });
              B(a > 0 || e.total > 0)
            })()
          }), [L]);
          const me = {
              event: "account_menu_click",
              element_placement: "Account Menu"
            },
            fe = [{
              text: n("View My Profile"),
              href: L.profile_link,
              target: "_blank",
              ga: {
                ...me,
                text: "View My Profile",
                link_url: L.profile_link
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: n("Settings"),
              href: `https://${a.host}.rockstargames.com/settings`,
              target: "_blank",
              ga: {
                ...me,
                text: "View My Profile",
                link_url: `https://${a.host}.rockstargames.com/settings`
              },
              dataTestId: "settingsLink"
            }, {
              text: n("Crews"),
              href: `https://${a.host}.rockstargames.com/member/${L.nickname}/crews`,
              target: "_blank",
              ga: {
                ...me,
                text: "Crews",
                link_url: `https://${a.host}.rockstargames.com/member/${L.nickname}/crews`
              },
              dataTestId: "crewsLink"
            }, {
              text: n("Friends"),
              href: `https://${a.host}.rockstargames.com/member/${L.nickname}/friends`,
              target: "_blank",
              ga: {
                ...me,
                text: "Friends",
                link_url: `https://${a.host}.rockstargames.com/member/${L.nickname}/friends`
              },
              dataTestId: "friendsLink"
            }, {
              text: n("Notifications"),
              href: `https://${a.host}.rockstargames.com/notifications`,
              target: "_blank",
              hasNotifications: D,
              ga: {
                ...me,
                text: "Notifications",
                link_url: `https://${a.host}.rockstargames.com/notifications`
              },
              dataTestId: "notificationsLink"
            }, {
              text: n("Log Out"),
              href: `${a.logout}?returnUrl=${y}`,
              target: "_self",
              ga: {
                ...me,
                text: "Log Out",
                link_url: `${a.logout}?returnUrl=${y}`
              },
              dataTestId: "logoutButton"
            }],
            ge = () => {
              J(g + de * K < re)
            };
          (0, i.useEffect)((() => {
            ge()
          }), [de]);
          const he = () => {
            if (ce.current) {
              const {
                current: e
              } = ce, a = e?.scrollHeight;
              oe(a)
            }
          };
          return (0, i.useEffect)((() => {
            const e = () => {
              ee(window.innerWidth), se(window.innerHeight), window.innerWidth < 768 || window.innerHeight < 649 ? j(!0) : j(!1), u(!0)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, i.useEffect)((() => {
            let e = ie.length - 1;
            e < 0 && (e = 0), Q(e);
            const a = ie.length > 0 ? ie[$] ?? ie[0] : null;
            if (!a) return;
            const s = null !== a ? d(a.platform, "large") : null;
            W(s), Z(a), ie.length > 1 ? G(!0) : G(!1), N(ie.length - 1 > 3)
          }), [$, ie]), (0, i.useEffect)((() => {
            ge()
          }), [K, w, Y, ie]), (0, i.useEffect)((() => {
            he(), setTimeout(he, 1e3)
          }), [ce, Y, ae]), (0, i.useEffect)((() => {
            const e = I?.currentCharId ?? 0;
            F(Math.max(0, Math.min(e, ie.length - 1)))
          }), [ie, I]), (0, f.jsxs)(f.Fragment, {
            children: [null !== X && "gtao" === M && (0, f.jsxs)("div", {
              className: C.scProfile,
              tabIndex: -1,
              "aria-label": "Profile Card",
              children: [(0, f.jsx)(_, {
                s: C,
                character: X,
                platformTag: H
              }), !0 === V && (0, f.jsxs)("div", {
                className: C.scCharacterSelector,
                children: [(0, f.jsx)("button", {
                  className: C.scCharacterSelectBtn,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !o;
                    u(a), T({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": o,
                  children: (0, f.jsx)("span", {
                    children: n("Switch Character")
                  })
                }), !1 === w && (0, f.jsx)("div", {
                  className: C.scCharacterList,
                  "data-long-list": x,
                  "aria-hidden": o,
                  ref: m,
                  children: ie.map((e => (0, f.jsx)(S, {
                    characterData: e
                  }, e.mugshotUrl)))
                }), !0 === w && (0, f.jsx)("div", {
                  className: C.scCharacterList,
                  "data-single-item": 2 === ie.length,
                  "data-swiper-disabled": q,
                  "aria-hidden": o,
                  ref: te,
                  children: (0, f.jsx)(p, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      T({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: q,
                    disableSwiper: q,
                    children: ie.filter(((e, a) => a !== $)).map((e => (0, i.createElement)(S, {
                      characterData: e,
                      setMobileCardWidth: ue,
                      key: e.mugshotUrl
                    })))
                  })
                })]
              })]
            }), (0, f.jsxs)("nav", {
              className: C.scNav,
              "aria-hidden": !O,
              children: [(0, f.jsxs)("button", {
                className: C.scNavHeader,
                type: "button",
                "data-opened": o,
                "data-nav-opened": O,
                onClick: e => {
                  e.stopPropagation(), !1 === o && u(!0)
                },
                children: [(0, f.jsx)("span", {
                  children: L.nickname
                }), (0, f.jsx)("img", {
                  src: s(27),
                  alt: "Social Club"
                })]
              }), (0, f.jsx)("div", {
                className: C.scNavWrap,
                "data-opened": o,
                "data-logged-in": "true",
                ref: ce,
                style: {
                  maxHeight: `${ne}px`
                },
                children: fe.map((e => (0, i.createElement)(v, {
                  ...e,
                  key: e.text
                })))
              })]
            })]
          })
        })),
        j = {
          scNavWrapper: "rockstargames-modules-core-sc-usera59917b0ff5917b1def5bc64b7fab574",
          rpLevel: "rockstargames-modules-core-sc-userb9695ff3606df901dbb3185e59e34aab",
          rpIcon: "rockstargames-modules-core-sc-userd9efb8ef4f29fce650453fed0d122d20",
          scMenu: "rockstargames-modules-core-sc-useraf1b106635eeb0fdd2e068a316f615e1",
          navOpen: "rockstargames-modules-core-sc-userdf15d90dfde9c745a280e0f15f362bde",
          dragHandle: "rockstargames-modules-core-sc-userad3431a33b5da0f24ecd3aba3ae91ce5",
          dragHandleBtn: "rockstargames-modules-core-sc-userd02d85a9d8fac907f50e9daf3f7a097b",
          scOverlay: "rockstargames-modules-core-sc-userbeffe0cf7cc9845fbd5d64085ac3ab48"
        },
        y = (0, l.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBodyIsScrollable: o
          } = (0, l.useBodyScrollable)(), {
            navHidden: d = !1
          } = (0, c.useState)(), {
            loggedIn: u
          } = (0, t.useRockstarUser)(), {
            currentCharId: m,
            navOpen: g,
            setNavOpen: h
          } = (0, r.Z)(), [p, k] = (0, i.useState)(!0), [b, v] = (0, i.useState)(!1), S = (0, c.useReactiveVar)(n.Z), N = (0, i.useRef)(), [_, C] = (0, i.useState)(0), y = (0, i.createRef)(), [E, R] = (0, i.useState)(!1), [I, T] = (0, i.useState)(0), [P, L] = (0, i.useState)(!1), {
            mutateLSSettings: U
          } = (0, l.useRockstarWebLSSettings)(), M = (0, i.useCallback)((e => {
            k(e), N.current && !0 === e && (N.current.scrollTop = 0)
          }), [N]);
          return (0, i.useEffect)((() => {
            null !== m && U({
              key: "currentCharId",
              value: m
            }), !1 === u && U({
              key: "currentCharId",
              value: null
            })
          }), [m, u]), (0, i.useEffect)((() => {
            N.current && (!1 === p && !1 === b && (N.current.style.height = `${N.current.scrollHeight}px`), !0 === p && (N.current.style.height = null))
          }), [p, N, b]), (0, i.useEffect)((() => {
            const e = () => {
              h(!1), M(!0)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, i.useEffect)((() => {
            h(!1), M(!0)
          }), [d]), (0, i.useEffect)((() => {
            if (y.current) {
              const {
                current: e
              } = y, a = window.getComputedStyle(e);
              C(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [y]), (0, i.useEffect)((() => {
            o(!E || !g)
          }), [g, E]), (0, i.useEffect)((() => {
            L(window.navigator.userAgent.includes("Mac"))
          }), []), null === u ? null : (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("div", {
              className: [j.scMenu, g ? j.navOpen : ""].join(" "),
              "data-logged-in": u,
              "data-mac-browser": P,
              ref: y,
              "aria-hidden": !g,
              children: [(0, f.jsx)("button", {
                className: j.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  T(a)
                },
                onTouchMove: e => {
                  if (0 === I) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(I - a) > 1 && (T(0), h(!1))
                },
                children: (0, f.jsx)("img", {
                  className: j.dragHandle,
                  src: s(762),
                  alt: a("Drag Menu Handle")
                })
              }), u ? (0, f.jsx)(w, {
                sc: S,
                charListHidden: p,
                hideCharacterList: M,
                refCharacterListDesktop: N,
                menuPadding: _,
                longCharList: b,
                setLongCharList: v,
                isMobileMode: E,
                setIsMobileMode: R
              }) : (0, f.jsx)(x, {
                sc: S,
                navOpen: g
              })]
            }), (0, f.jsx)("div", {
              className: [j.scOverlay, g ? j.navOpen : ""].join(" "),
              "data-logged-in": u
            })]
          })
        })),
        E = s(493),
        R = s(916),
        I = () => {
          const {
            data: e
          } = (0, t.useRockstarUser)(), {
            charactersNeeded: a,
            currentCharId: s,
            navOpen: c,
            setNavOpen: n
          } = (0, r.Z)(), {
            track: o
          } = (0, b.Z)(), [l, u] = (0, i.useState)(null), [m, g] = (0, i.useState)(!1), [h, p] = (0, i.useState)(null), [k, v] = (0, i.useState)(!1), [x, S] = (0, i.useState)([]);
          (0, i.useEffect)((() => {
            S(e.characters[a] ?? [])
          }), [e, a]);
          const N = (0, i.useCallback)((e => {
            e.stopPropagation(), n(!c), o({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: c ? "close" : "open"
            })
          }), [c]);
          return (0, i.useEffect)((() => {
            const a = e?.id ?? !1,
              t = a ? (x?.[s]?.mugshotUrl ?? e?.avatar) || E : R,
              r = d(x?.[s]?.platform, "small") ?? null;
            p(r), u(t), g(a), v(!!x?.[s]?.mugshotUrl)
          }), [e, x, s, E, R]), (0, f.jsxs)("button", {
            className: "rockstargames-modules-core-sc-userb7e61bf88f326c5289ff0fcce83a5fde",
            "data-img-set": k,
            "aria-label": "Toggle Social Club Menu",
            type: "button",
            onClick: e => N(e),
            "data-testid": "avaterMenuButton",
            children: [(0, f.jsx)("img", {
              className: "rockstargames-modules-core-sc-userf36fced6b1bdef94aed4143aa5dde7c5",
              src: l || "",
              onError: () => {
                u(E)
              },
              alt: e?.nickname || ""
            }), m && null !== h && (0, f.jsx)("img", {
              className: "rockstargames-modules-core-sc-usercb5c8ffc4960bfa5ef6e726be339ecc4",
              src: h.src,
              alt: h.alt
            }), m && (0, f.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-sc-userfb40b51b4cb22e52251265054c13e04e",
              "data-platform": x?.[a]?.[s]?.platform ?? null
            })]
          })
        }
    },
    427: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        GtmProvider: () => N,
        RockstarUserProvider: () => b,
        useGtmTrack: () => C,
        useRockstarUser: () => v
      });
      var t = s(927),
        r = s(859),
        c = s(929),
        n = s(244),
        o = s(489);
      var i = s(348),
        l = s.n(i),
        d = s(404);
      const {
        graphEnv: u
      } = (0, c.getScConfigForOrigin)(), m = (0, r.uriForGraphEnv)(u), f = () => {
        const e = (0, r.useRockstarToken)(),
          [a, s] = (0, t.useState)({
            id: null,
            avatar: "",
            profile_link: "",
            nickname: "",
            crews: [],
            characters: {
              gtao: []
            }
          }),
          [i, u] = (0, t.useState)(!0),
          [f, , g] = (0, r.useRockstarTokenReactive)(),
          h = (0, r.useRockstarTokenPing)(),
          {
            refetch: p
          } = (0, r.useQuery)(n.userData, {
            skip: !0,
            context: {
              uri: m
            }
          }),
          [k, b] = (0, t.useState)(null),
          [v, x] = (0, t.useState)(!1),
          [S, N] = (0, t.useState)(!1);
        return (0, t.useEffect)((() => {
          (async () => {
            const t = null === e ? null : !!e;
            if (t && !v) {
              u(!0), x(!0);
              const e = await p(),
                t = e?.data?.user?.id,
                r = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: s
                  } = e;
                  const {
                    crews: t
                  } = await (0, c.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: s
                    }
                  });
                  return t
                })({
                  pingBearer: h,
                  rockstarId: t
                }),
                n = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: s,
                    rockstarId: t
                  } = e;
                  const r = [],
                    n = await (0, c.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  if (await (n?.platforms?.reduce((async (e, s) => {
                      if (await e, ["ps3", "xbox", "xbox360"].includes(s)) return;
                      const t = await (0, c.coreScApiFetch)(`games/gtao/characters?platform=${s}`, {
                        pingBearer: a
                      });
                      t?.status && t?.result?.map((e => {
                        const {
                          stats: a
                        } = e, {
                          overview: t
                        } = a, {
                          rank: c
                        } = t;
                        if ("0" === c.value) return;
                        const n = ["ps4", "ps5"].includes(s) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return r.push({
                          ...e,
                          platform: s,
                          mugshotUrl: n
                        }), e
                      }))
                    }), Promise.resolve())), !r.length) return r;
                  const {
                    status: o,
                    accounts: i
                  } = await (0, c.coreScApiFetch)(`profile/getprofile?nickname=${s}&maxFriends=0`, {
                    pingBearer: a
                  });
                  return o && i.length ? (i.forEach((e => {
                    const {
                      rockstarAccount: a,
                      linkedAccounts: c
                    } = e;
                    if (a?.rockstarId !== t) return;
                    const n = s;
                    let o = "",
                      i = "";
                    c?.map((e => ("xbl" === e?.onlineService ? o = e.userName : "np" === e?.onlineService && (i = e.userName), e))), r.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), r.map(((e, a) => (e.platformUsername = n, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = i || n), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = o || n), e)))
                  })), r) : r
                })({
                  pingBearer: h,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: t
                }),
                i = {
                  ...a,
                  ...e?.data?.user,
                  crews: r,
                  characters: {
                    gtao: n
                  }
                };
              u(!1), s(i), b(!0), (0, o.R)(t)
            }
            if (!1 === t && !S) {
              try {
                await (async e => {
                  let {
                    token: a,
                    tokenPingExpires: s
                  } = e;
                  const t = {
                      method: "POST",
                      body: `fingerprint=${await l().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    },
                    r = await fetch((0, d.Z)().silentCheck, t);
                  if (200 !== r.status) return void a(!1);
                  const c = await r.json(),
                    n = `${(0,d.Z)().gateway}?code=${c}`,
                    o = await fetch(n, {
                      credentials: "include"
                    }),
                    {
                      bearerToken: i,
                      tokenExpiresTime: u
                    } = await o.json();
                  return a(i), s(u), i
                })({
                  token: f,
                  tokenPingExpires: g
                })
              } catch (e) {}
              N(!0)
            }!1 === t && S && (x(!0), b(!1), u(!1)), null === e && h()
          })()
        }), [e, v, S]), {
          data: a,
          loading: i,
          loggedIn: k
        }
      };
      var g = s(705);
      const h = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        p = "user-context",
        k = window?.[p] ?? (window[p] = (0, t.createContext)(h)),
        b = e => {
          let {
            children: a
          } = e;
          const s = f(),
            r = (0, t.useMemo)((() => ({
              ...s,
              hasProvider: !0
            })), [s]);
          return (0, g.jsx)(k.Provider, {
            value: r,
            children: a
          })
        },
        v = () => (0, t.useContext)(k);
      var x = s(523);
      const S = (0, t.createContext)(void 0),
        N = e => {
          let {
            checkUser: a,
            children: s
          } = e;
          const r = (0, x.Z)(a),
            c = (0, t.useMemo)((() => r), [r, a]);
          return (0, g.jsx)(S.Provider, {
            value: c,
            children: s
          })
        },
        _ = {
          track: () => null
        },
        C = () => (0, t.useContext)(S) ?? _
    },
    244: e => {
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
                    value: "isAMinor"
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
          end: 230
        }
      };

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "query userData {\n    user: userData {\n        id\n        avatar\n        nickname\n        profile_link\n        isAMinor\n        bearer_token_expired\n        agegate_pass @client\n        logged_in @client\n        subscribed\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.userData = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var c = t[a] || new Set,
          n = new Set,
          o = new Set;
        for (c.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var i = o;
          o = new Set, i.forEach((function(e) {
            n.has(e) || (n.add(e), (t[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }(a, "userData")
    },
    27: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f6beb89662d43c000c8c20dad9160aad.svg"
    },
    762: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    48: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    347: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    733: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    816: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    848: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    731: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    3: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    185: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    981: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    60: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);