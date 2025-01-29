! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2eb7c006-15a2-4ded-97ee-5244da4d833b", e._sentryDebugIdIdentifier = "sentry-dbid-2eb7c006-15a2-4ded-97ee-5244da4d833b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1885, 2429, 4810], {
    34327: (e, a, o) => {
      "use strict";
      o.d(a, {
        A: () => i
      });
      var t = o(62229),
        s = o(9623),
        r = o(95966);
      var n = o(98096);
      const i = (0, r.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [o] = (0, t.useState)(""), i = (0, s.useNavigate)(), c = (0, r.useMutateState)();
        return (0, n.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-rockstargamesc9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), c({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const a = e.currentTarget.elements.namedItem("q").value;
            i(`/search?q=${a}`)
          },
          role: "search",
          children: [(0, n.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, n.jsx)("input", {
            autoComplete: "off",
            defaultValue: o,
            enterKeyHint: "search",
            name: "q",
            placeholder: a("Search Rockstar Games")
          })]
        })
      }))
    },
    83843: (e, a, o) => {
      "use strict";
      o.d(a, {
        A: () => s
      });
      var t = o(98096);
      const s = e => {
        let {
          children: a,
          ...o
        } = e;
        return (0, t.jsx)("span", {
          ...o,
          className: "rockstargames-sites-rockstargamesacd86b7f5778381df8fac4a3f7489f60",
          children: a
        })
      }
    },
    93179: (e, a, o) => {
      "use strict";
      o.d(a, {
        A: () => i
      });
      var t = o(62229),
        s = o(23375),
        r = o(98096);
      class n extends t.Component {
        constructor(e) {
          super(e), this.state = {
            error: {
              code: null,
              message: null
            }
          }
        }
        componentDidUpdate(e) {
          this.props.error && e.error !== this.props.error && this.setState({
            ...this.state,
            error: this.props.error
          })
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e?.message ? e.toString() : "Something has gone horribly awry.",
              code: e?.code ?? 399
            }
          }
        }
        render() {
          return null !== this.state.error.code ? (0, r.jsx)(s.default, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const i = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(o) {
          return (0, r.jsx)(n, {
            header: a,
            children: (0, r.jsx)(e, {
              ...o
            })
          })
        }
      }
    },
    23375: (e, a, o) => {
      "use strict";
      o.r(a), o.d(a, {
        default: () => c
      });
      var t = o(62229),
        s = o(95966),
        r = o(89950),
        n = o(34327);
      var i = o(98096);
      const c = (0, s.withTranslations)((e => {
        let {
          error: a,
          t: o,
          domain: s = ""
        } = e;
        console.error({
          error: a
        });
        let c = a?.message ?? o("error-404-new");
        c = o("error-404-new");
        const l = a?.code ?? 398,
          _ = (0, t.useRef)(null);
        return (0, t.useEffect)((() => {
          _ && _?.current && _.current.focus()
        }), [_]), (0, i.jsxs)("div", {
          className: "rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e",
          children: [(0, i.jsx)("h3", {
            tabIndex: -1,
            ref: _,
            children: `${c} (${l})`
          }), (0, i.jsx)(r.A, {
            to: "/",
            children: o("Home")
          }), "clr" !== s && (0, i.jsx)(n.A, {})]
        })
      }))
    },
    26657: (e, a, o) => {
      "use strict";
      o.d(a, {
        A: () => r
      });
      var t = o(95966);
      const s = (0, t.getScConfigForOrigin)(),
        r = (0, t.makeVar)(s)
    },
    95230: (e, a, o) => {
      "use strict";
      o.d(a, {
        F: () => s
      });
      var t = o(62229);
      const s = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
        return (0, t.useMemo)((() => {
          const t = e?.characters?.[o];
          return "1" === (t?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
        }), [e, o, a])
      }
    },
    38854: (e, a, o) => {
      "use strict";
      o.d(a, {
        A: () => h,
        K: () => f
      });
      var t = o(95966);
      const s = (0, t.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, t.makeVar)(null)
        }),
        r = e => s(e),
        n = (0, t.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, t.makeVar)(!1)
        }),
        i = e => n(e),
        c = (0, t.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, t.makeVar)(!1)
        }),
        l = e => c(e),
        _ = (0, t.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, t.makeVar)((0, t.lsSettingsReactive)()?.currentCharId)
        }),
        m = e => _(e),
        d = (0, t.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, t.makeVar)(null)
        }),
        u = e => d(e),
        f = (0, t.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, t.makeVar)(null)
        }),
        g = (0, t.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, t.makeVar)(null)
        }),
        p = e => g(e),
        k = (0, t.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, t.makeVar)(null)
        }),
        b = e => k(e),
        h = () => {
          const e = (0, t.useReactiveVar)(g),
            a = (0, t.useReactiveVar)(_),
            o = (0, t.useReactiveVar)(s),
            f = (0, t.useReactiveVar)(c),
            h = (0, t.useReactiveVar)(d);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: f,
            navOpen: o,
            userData: (0, t.useReactiveVar)(k),
            selectedCharacterTuple: h,
            jumpScMenuFocus: (0, t.useReactiveVar)(n),
            setCharactersNeeded: p,
            setCurrentCharId: m,
            setHasNotifications: l,
            setNavOpen: r,
            setSelectedCharacterTuple: u,
            setUserData: b,
            setJumpScMenuFocus: i
          }
        }
    },
    25327: (e, a, o) => {
      "use strict";
      o.r(a), o.d(a, {
        GtmProvider: () => t.UN,
        RockstarUserProvider: () => t.iR,
        scConfig: () => i.A,
        useGtmTrack: () => t.h,
        useIsUserGtaPlus: () => s.F,
        useRockstarUser: () => t.Wx,
        useRockstarUserState: () => r.A,
        useScConfig: () => c
      });
      var t = o(61147),
        s = o(95230),
        r = o(38854),
        n = o(95966),
        i = o(26657);
      const c = () => (0, n.useReactiveVar)(i.A)
    },
    61147: (e, a, o) => {
      "use strict";
      o.d(a, {
        UN: () => v,
        iR: () => p,
        h: () => R,
        Wx: () => k
      });
      var t = o(62229),
        s = o(95966),
        r = o(38854);
      var n = o(8384),
        i = o.n(n),
        c = o(26657);
      var l = o(83428);
      const {
        graphEnv: _
      } = (0, s.getScConfigForOrigin)(), m = (0, s.getUriForGraphEnv)(_), d = () => {
        const e = (0, s.useRockstarToken)(),
          [a, o] = (0, t.useState)({
            id: null,
            avatar: "",
            profile_link: "",
            nickname: "",
            crews: [],
            characters: {
              gtao: []
            }
          }),
          [n, _] = (0, t.useState)(!0),
          [d, u] = (0, s.useRockstarTokenReactive)(),
          f = (0, s.useRockstarTokenPing)(),
          {
            refetch: g
          } = (0, s.useQuery)(l.userData, {
            skip: !0,
            context: {
              uri: m
            }
          }),
          [p, k] = (0, t.useState)(null),
          [b, h] = (0, t.useState)(!1),
          [y, w] = (0, t.useState)(!1);
        return (0, t.useEffect)((() => {
          (async () => {
            const t = null === e ? null : !!e;
            if (t && !b) {
              _(!0), h(!0);
              const e = await g(),
                t = e?.data?.user?.id,
                n = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: o
                  } = e;
                  const {
                    crews: t
                  } = await (0, s.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: o
                    }
                  });
                  return t
                })({
                  pingBearer: f,
                  rockstarId: t
                }),
                i = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: o,
                    rockstarId: t
                  } = e;
                  const r = [],
                    n = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  if (await (n?.platforms?.reduce((async (e, o) => {
                      if (await e, ["ps3", "xbox", "xbox360"].includes(o)) return;
                      const t = await (0, s.coreScApiFetch)(`games/gtao/characters?platform=${o}`, {
                        pingBearer: a
                      });
                      t?.status && t?.result?.map((e => {
                        const {
                          stats: a
                        } = e, {
                          overview: t
                        } = a, {
                          rank: s
                        } = t;
                        if ("0" === s.value) return;
                        const n = ["ps4", "ps5"].includes(o) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return r.push({
                          ...e,
                          mugshotUrl: n,
                          platform: o
                        }), e
                      }))
                    }), Promise.resolve())), !r.length) return r;
                  const {
                    status: i,
                    accounts: c
                  } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${o}&maxFriends=0`, {
                    pingBearer: a
                  });
                  return i && c.length ? (c.forEach((e => {
                    const {
                      rockstarAccount: a,
                      linkedAccounts: s
                    } = e;
                    if (a?.rockstarId !== t) return;
                    const n = o;
                    let i = "",
                      c = "";
                    s?.map((e => ("xbl" === e?.onlineService ? i = e.userName : "np" === e?.onlineService && (c = e.userName), e))), r.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), r.map(((e, a) => (e.platformUsername = n, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = c || n), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = i || n), e)))
                  })), r) : r
                })({
                  pingBearer: f,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: t
                }),
                c = {
                  ...a,
                  ...e?.data?.user,
                  crews: n,
                  characters: {
                    gtao: i
                  }
                };
              _(!1), o(c), k(!0), (0, r.K)(t)
            }
            if (!1 === t && !y) {
              try {
                await (async e => {
                  let {
                    token: a,
                    tokenPingExpires: o
                  } = e;
                  const t = {
                      method: "POST",
                      body: `fingerprint=${await i().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    },
                    s = await fetch((0, c.A)().silentCheck, t);
                  if (200 !== s.status) return void a(!1);
                  const r = await s.json(),
                    n = `${(0,c.A)().gateway}?code=${r}`,
                    l = await fetch(n, {
                      credentials: "include"
                    }),
                    {
                      bearerToken: _,
                      tokenExpiresTime: m
                    } = await l.json();
                  return a(_), o(m), _
                })({
                  token: d,
                  tokenPingExpires: u
                })
              } catch (e) {}
              w(!0)
            }!1 === t && y && (h(!0), k(!1), _(!1)), null === e && f()
          })()
        }), [e, b, y]), {
          data: a,
          loading: n,
          loggedIn: p
        }
      };
      var u = o(98096);
      const f = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        g = (0, s.setContextItem)({
          context: (0, t.createContext)(f),
          key: "userContext"
        }),
        p = e => {
          let {
            children: a
          } = e;
          const o = d(),
            s = (0, t.useMemo)((() => ({
              ...o,
              hasProvider: !0
            })), [o]);
          return (0, u.jsx)(g.Provider, {
            value: s,
            children: a
          })
        },
        k = () => (0, t.useContext)(g);
      var b = o(25327),
        h = o(95230),
        y = o(86082);
      const w = (0, s.setContextItem)({
          context: (0, t.createContext)(void 0),
          key: "gtmContext22"
        }),
        v = e => {
          let {
            checkUser: a,
            children: o
          } = e;
          const r = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, o] = (0, t.useState)([]), [r, n] = (0, t.useState)([]), [i, c] = (0, t.useState)(null), {
                data: l,
                loggedIn: _
              } = (0, b.useRockstarUser)(), {
                currentCharId: m
              } = (0, b.useRockstarUserState)(), d = (0, h.F)(l, m), u = (0, y.bn)(), f = (e, t) => {
                const r = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = t ?? {};
                    (0, s.track)({
                      ...e,
                      ...a
                    }), r.push(e)
                  }
                })), o([...a, ...r])
              };
              (0, t.useEffect)((() => {
                if (l && null !== _) {
                  const e = g(l);
                  r.length && e && f(r, e), c(e)
                } else e || r.length && f(r)
              }), [l, _, r]), (0, t.useEffect)((() => {
                const e = r.filter((e => -1 === a.indexOf(e)));
                n(e)
              }), [a]);
              const g = e => {
                const a = [],
                  o = [],
                  t = [];
                return Object.keys(e.characters).forEach((s => {
                  e.characters[s].length && (o.push(s), e.characters[s].forEach((e => {
                    "gtao" === s && (t.includes(e.platform) || t.push(e.platform)), a.includes(e.platform) || a.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: _ ?? !1,
                  gta_plus_active: _ ? Boolean(d) : void 0,
                  platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
                  games_played: o.length ? o.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: t.length ? t.join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: u
                }
              };
              return {
                track: e => {
                  if (null === _ || !l || !i) {
                    const a = [...r];
                    return a.push({
                      ...e
                    }), n(a)
                  }
                  return (0, s.track)({
                    ...e,
                    ...i
                  })
                }
              }
            }(a),
            n = (0, t.useMemo)((() => r), [r, a]);
          return (0, u.jsx)(w.Provider, {
            value: n,
            children: o
          })
        },
        x = {
          track: () => null
        },
        R = () => (0, t.useContext)(w) ?? x
    },
    58548: (e, a, o) => {
      "use strict";
      o.r(a), o(18791), o(78345), o(28782), o(5395), o(75078), o(99299), o(80274), o(17792), o(34053), o(95972), o(73651), o(41360), o(16198), o(33209), o(78925), o(66007), o(11132), o(90739), o(73270);
      var t = o(95966),
        s = o(28074),
        r = o(62229),
        n = o(9623),
        i = o(87927),
        c = o(41263),
        l = o.n(c),
        _ = o(55274),
        m = o.n(_),
        d = o(90);
      const u = "__MFE_GLOBAL_HOOK__",
        f = () => {
          const e = window;
          e[u]?.history || (e[u] = Object.assign(e[u] || {}, {
            history: (0, d.createBrowserHistory)()
          }))
        },
        g = () => {
          const {
            pathname: e
          } = (0, n.useLocation)();
          return (0, r.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        };
      var p = o(2918);
      const k = (0, r.forwardRef)(((e, a) => {
        const {
          threshold: o,
          callback: t,
          children: s,
          requireUser: n
        } = e, {
          track: i
        } = (0, p.useGtmTrack)(n), [c, l] = (0, r.useState)(a?.current);
        return (0, r.useEffect)((() => {
          a?.current && l(a.current)
        }), [a]), ((e, a, o) => {
          const [t, s] = (0, r.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: n,
            scrollY: i
          } = t;
          (0, r.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && s((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, r.useEffect)((() => {
            s({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const c = (0, r.useCallback)((() => {
            const e = document.documentElement,
              r = document.body,
              i = o?.scrollTop || e.scrollTop || r.scrollTop,
              l = o?.scrollHeight || e.scrollHeight || r.scrollHeight,
              {
                clientHeight: _
              } = e,
              m = i / (l - _) * 100;
            if (n) {
              const e = Math.min(...n, l);
              if (m >= e) {
                const t = n.filter((a => a !== e));
                0 === t.length && (o ?? window).removeEventListener("scroll", c), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: t
                }), s({
                  scrollY: e,
                  scrollDepths: t
                })
              }
            } else s({
              ...t,
              scrollY: m
            })
          }), [n, o, a]);
          (0, r.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = o ?? window;
            return e.addEventListener("scroll", c), () => e.removeEventListener("scroll", c)
          }), [c])
        })(o, (e => {
          let {
            scrollY: a
          } = e;
          i({
            event: "page_scroll",
            scroll_depth: a
          }), "function" == typeof t && t(a)
        }), c), s
      }));
      k.displayName = "ScrollTracker";
      const b = k;
      var h = o(95945),
        y = o.n(h),
        w = o(63582);
      var v = o(98096);
      const x = e => {
          let {
            modal: a
          } = e;
          const {
            content: o,
            className: s,
            height: i,
            onClose: c,
            rect: l = {
              left: 0,
              top: 0
            },
            contentStyle: _ = {},
            contentClassName: m = "",
            width: d,
            fadeIn: u = !0,
            cardIds: f,
            activeId: g,
            theme: k,
            title: b,
            gtm: h = {},
            aspectRatio: x = "default",
            cardDimensions: R
          } = a, {
            left: C,
            top: j
          } = l, S = f?.indexOf(g), [N, I] = (0, r.useState)(f?.length || 0), {
            track: M
          } = (0, p.useGtmTrack)(), G = null !== f && (f?.length || 0) > 1 && ("flag_bg" === k || "fob" === R?.size), P = window.location.href.includes("cms5"), [z, E] = (0, n.useSearchParams)(), [A, D] = (0, r.useState)(!1), [L, V] = (0, r.useState)(!1), [B, T] = (0, r.useState)(), U = e => {
            "number" == typeof e && f && e < f.length && e > -1 && E({
              info: f[e].toString()
            })
          }, F = () => {
            const e = S > -1 ? S - 1 : 0;
            U(e), M({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: b,
              position: S
            })
          }, H = () => {
            const e = S > -1 ? S + 1 : 0;
            U(e), M({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: b,
              position: S
            })
          };
          (0, r.useEffect)((() => {
            I(f?.length || 0)
          }), [f?.length]), (0, r.useEffect)((() => {
            null !== S && null !== f && U(S)
          }), [S, f]), (0, r.useEffect)((() => {
            const e = f?.findIndex((e => e === g));
            "number" == typeof e && (V(e <= 0), D(e >= N - 1))
          }), [f, g, N]);
          const [O] = (0, r.useState)({
            y: j,
            x: C,
            top: 0,
            left: 0,
            width: d,
            height: i,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: G ? "0" : ""
          }), Y = {
            opacity: 1
          }, q = (0, r.useRef)(null), X = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, K = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [$] = (0, r.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: G ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: X,
              y: X,
              top: X,
              left: X,
              width: X,
              height: X,
              border: X,
              background: {
                delay: .3
              }
            }
          }), [J, W] = (0, r.useState)({
            initial: O,
            shown: $
          });
          (0, r.useEffect)((() => {
            W({
              initial: O,
              shown: $
            })
          }), [O, $]), (0, r.useEffect)((() => {
            const e = e => {
              "function" == typeof c && "Escape" === e.key && (c(), M({
                event: "modal_close",
                element_placement: b,
                ...h
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const Z = () => {
              "function" == typeof c && (c(), M({
                event: "modal_close",
                element_placement: b,
                ...h
              }))
            },
            Q = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let o = 0; o < e.children.length; o++) {
                const t = e.children[o];
                if (t.scrollHeight > t.clientHeight) return t;
                const s = Q(t, a - 1);
                if (s) return s
              }
              return null
            },
            ee = e => {
              if (oe?.current?.children) {
                let a = null;
                const o = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return B?.queried ? a = B.element : (a = Q(e, 2), T({
                        queried: !0,
                        element: a
                      })), a
                    })(oe.current), e.preventDefault(), a && (a.scrollTop += o)
                }
              }
            },
            ae = u ? 0 : 1,
            oe = (0, r.useRef)(null),
            te = (0, v.jsx)(w.motion.button, {
              className: "rockstargames-sites-rockstargamesf462dceb5efde1dd4885f34f45132e3d",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: K,
              onClick: () => {
                Z()
              },
              onKeyDown: ee,
              onKeyUp: ee
            });
          let se = null;
          return se = P ? r.Fragment : y(), (0, r.useMemo)((() => (0, v.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": G,
            "data-aspect-ratio": x,
            children: (0, v.jsx)(se, {
              children: (0, v.jsxs)("div", {
                children: [(0, v.jsx)(w.motion.div, {
                  className: "rockstargames-sites-rockstargamescf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: Y,
                  transition: X,
                  onClick: () => Z()
                }), G && (0, v.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, v.jsxs)(w.motion.div, {
                    className: "rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: K,
                    children: [(0, v.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: F,
                      disabled: L,
                      onKeyDown: ee,
                      onKeyUp: ee
                    }), (0, v.jsxs)("div", {
                      className: "rockstargames-sites-rockstargamese316695281c4c56337307741bda1371f",
                      "data-theme": k,
                      children: [" ", S + 1, (0, v.jsx)("div", {
                        className: "rockstargames-sites-rockstargamesc1ee424eae15f7b789c86e634df9e28d"
                      }), f?.length, " "]
                    }), (0, v.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: H,
                      disabled: A,
                      onKeyDown: ee,
                      onKeyUp: ee,
                      "data-autofocus": !0
                    })]
                  }), te]
                }), (0, v.jsx)(w.motion.div, {
                  className: "rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366",
                  ref: q,
                  initial: "initial",
                  animate: "shown",
                  variants: J,
                  transition: X,
                  style: _,
                  children: (0, v.jsxs)(w.motion.div, {
                    className: (0, t.classList)("rockstargames-sites-rockstargamesa7d77f83f629e9ae93f6934c8ba007b0", s),
                    children: [!G && te, (0, v.jsx)(w.motion.div, {
                      className: (0, t.classList)("rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714", m),
                      initial: {
                        opacity: ae
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: K,
                      ref: oe,
                      children: o
                    }), (0, v.jsx)("button", {
                      className: "rockstargames-sites-rockstargamesea8f15b1bfbda9f3efef89dc0d2ebc89",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [o, S, _])
        },
        R = [null, () => null],
        C = (0, t.setContextItem)({
          context: (0, r.createContext)(R),
          key: "modalContext"
        }),
        j = e => {
          let {
            children: a
          } = e;
          const [o, s] = (0, r.useState)(R), {
            setBodyIsLocked: n
          } = (0, t.useBodyScrollable)("ModalProvider"), i = (0, r.useMemo)((() => o?.content ? (0, v.jsx)(x, {
            modal: o
          }) : null), [o]), c = () => n(!1);
          return (0, r.useEffect)((() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          })), []), (0, r.useEffect)((() => {
            n(!!i)
          }), [i]), (0, v.jsx)(C.Provider, {
            value: [i, s],
            children: a
          })
        };
      var S = o(87685),
        N = o(81788),
        I = o(61147),
        M = o(36450),
        G = o(46941);
      const P = e => {
        let {
          navigationData: a,
          searchConfig: o,
          globalNavigationComponent: t
        } = e;
        const s = (0, n.useLocation)(),
          i = (0, n.useNavigate)(),
          c = t,
          l = e => {
            e?.startsWith("http") ? window.location.href = e : i(e)
          },
          _ = (0, r.useMemo)((() => a.reduce(((e, a) => a.appearancePaths ? [...e, ...a.appearancePaths.map((e => ({
            element: (0, v.jsx)(c, {
              navData: a,
              location: s,
              onNavigate: l,
              searchConfig: o,
              routeOptions: e.options
            }),
            path: e.path
          })))] : e), [])), [s, a, o]);
        return (0, n.useRoutes)(_)
      };
      var z = o(26454),
        E = o(89950),
        A = o(20270),
        D = o(83843),
        L = o(74829);
      const V = (0, N.defineMessages)({
          footer_rockstar_games: {
            id: "footer_rockstar_games",
            defaultMessage: "Rockstar Games"
          },
          footer_locations_new_york: {
            id: "footer_locations_new_york",
            defaultMessage: "New York"
          },
          footer_locations_london: {
            id: "footer_locations_london",
            defaultMessage: "London"
          },
          footer_locations_paris: {
            id: "footer_locations_paris",
            defaultMessage: "Paris"
          },
          footer_locations_bogota: {
            id: "footer_locations_bogota",
            defaultMessage: "Bogotá"
          },
          footer_established_date_roman: {
            id: "footer_established_date_roman",
            defaultMessage: "MCMXCVIII"
          },
          footer_established_date_numerical: {
            id: "footer_established_date_numerical",
            defaultMessage: "1998"
          },
          footer_contact_label_text: {
            id: "footer_contact_label_text",
            defaultMessage: "Contact"
          },
          footer_community_guidelines_label_text: {
            id: "footer_community_guidelines_label_text",
            defaultMessage: "Community Guidelines"
          },
          footer_cookie_policy_label_text: {
            id: "footer_cookie_policy_label_text",
            defaultMessage: "Cookie Policy"
          },
          footer_cookie_settings_label_text: {
            id: "footer_cookie_settings_label_text",
            defaultMessage: "Cookie Settings"
          }
        }),
        B = {
          siteFooter: "rockstargames-sites-rockstargamesa8c91f6cdd6ed710f54ef0ad7e588773",
          subscribe: "rockstargames-sites-rockstargamese330deff8ef3f9f2f6b8c2308bb53b63",
          links: "rockstargames-sites-rockstargamesc61f1de53a1ffb9f1a961f3af9797895",
          companyInfoLinks: "rockstargames-sites-rockstargameseef28fbb768138a3072504f2bb719bfc",
          languageSelector: "rockstargames-sites-rockstargamesbf889a6f435c839fa3994c71fa75f57e",
          social: "rockstargames-sites-rockstargamesebab0b2abb7d8221cb45bc23cae2551b",
          showsOver: "rockstargames-sites-rockstargamesc3b70ecefe653c09aaa6eca983fa184d",
          facebook: "rockstargames-sites-rockstargamesa08ac886dafbcd579150efd7b3e28dae",
          instagram: "rockstargames-sites-rockstargamesc0dcc6c9835912c5ebc1846d1a79c514",
          youtube: "rockstargames-sites-rockstargamesef408481db63837e808ce4631bef6538",
          twitter: "rockstargames-sites-rockstargamesf60a0b2f01cec43e5e3b77a9a088a548",
          twitch: "rockstargames-sites-rockstargamesb1ae41cebf45977a5433d562cb2c3241",
          places: "rockstargames-sites-rockstargamese63e196fc5310d845bde211ca951f184"
        },
        T = (0, t.withTranslations)((e => {
          let {
            t: a
          } = e;
          const o = (0, N.useIntl)(),
            t = (0, n.useLocation)(),
            {
              host: s
            } = (0, p.useScConfig)(),
            {
              track: r
            } = (0, p.useGtmTrack)(),
            {
              state: i,
              toggleNavOpen: c
            } = (0, L.b)(),
            l = (e, a, o, t) => () => {
              c(!1), r({
                event: e,
                link_url: a,
                text: o,
                element_placement: t
              })
            };
          return (0, v.jsxs)("footer", {
            className: [B.siteFooter, i.loading ? B.loading : ""].join(" "),
            "data-testid": "footerNav",
            role: "navigation",
            title: "Footer",
            children: [(0, v.jsx)("div", {
              className: B.languageSelector,
              children: (0, v.jsx)(A.LanguageSelector, {
                location: t
              })
            }), (0, v.jsxs)("div", {
              className: B.links,
              children: [(0, v.jsx)(E.A, {
                "data-testid": "contactButton",
                onClick: l("cta_other", "/contact", "contact", "footer"),
                to: "/contact",
                children: o.formatMessage(V.footer_contact_label_text)
              }), (0, v.jsx)(E.A, {
                "data-testid": "careersLink",
                onClick: l("cta_other", "/careers", "careers", "footer"),
                to: "/careers",
                children: a("Careers")
              }), (0, v.jsx)(E.A, {
                "data-testid": "communityGuidelinesLink",
                onClick: l("cta_other", "/community-guidelines", "community guidelines", "footer"),
                to: "/community-guidelines",
                children: o.formatMessage(V.footer_community_guidelines_label_text)
              }), (0, v.jsx)(E.A, {
                "data-testid": "subscribeLink",
                className: B.subscribe,
                onClick: l("cta_subscribe_news", `https://${s}.rockstargames.com/settings/email`, "subscribe", "footer"),
                to: `https://${s}.rockstargames.com/settings/email`,
                target: "_blank",
                children: a("Subscribe")
              })]
            }), (0, v.jsxs)("div", {
              className: B.companyInfoLinks,
              children: [(0, v.jsx)(E.A, {
                "data-testid": "corporateButton",
                onClick: l("cta_other", "/corpinfo", "corporate", "footer"),
                to: "/corpinfo",
                children: a("Corporate")
              }), (0, v.jsx)(E.A, {
                "data-testid": "privacyButton",
                onClick: l("cta_other", "/privacy", "privacy", "footer"),
                to: "/privacy",
                children: a("Privacy")
              }), (0, v.jsx)("button", {
                "data-testid": "cookieSettingsButton",
                onClick: ("cta_other", "", "cookie settings", "footer", () => {
                  r({
                    event: "cta_other",
                    link_url: "",
                    text: "cookie settings",
                    element_placement: "footer"
                  }), window.OneTrust?.ToggleInfoDisplay()
                }),
                children: o.formatMessage(V.footer_cookie_settings_label_text)
              }), (0, v.jsx)(E.A, {
                "data-testid": "cookiePolicyButton",
                onClick: l("cta_other", "/cookies", "cookie policy", "footer"),
                to: "/cookies",
                children: o.formatMessage(V.footer_cookie_policy_label_text)
              }), (0, v.jsx)(E.A, {
                "data-testid": "legalButton",
                onClick: l("cta_other", "/legal", "legal", "footer"),
                to: "/legal",
                children: a("Legal")
              }), (0, v.jsx)(E.A, {
                "data-testid": "ccpaButton",
                onClick: l("cta_other", "/ccpa", "do not sell my info", "footer"),
                to: "/ccpa",
                children: a("Do Not Sell My Info")
              })]
            }), (0, v.jsxs)("div", {
              className: B.social,
              children: [(0, v.jsx)(E.A, {
                "aria-label": "Rockstar Games X",
                className: B.twitter,
                "data-testid": "twitterLink",
                onClick: l("cta_other", "https://x.com/rockstargames", "twitter", "footer"),
                target: "_blank",
                title: "X",
                to: "https://x.com/rockstargames"
              }), (0, v.jsx)(E.A, {
                "aria-label": "Rockstar Games Instagram",
                className: B.instagram,
                "data-testid": "instagramLink",
                onClick: l("cta_other", 'https://instagram.com/rockstargames"', "instagram", "footer"),
                target: "_blank",
                title: "Instagram",
                to: "https://instagram.com/rockstargames"
              }), (0, v.jsx)(E.A, {
                "aria-label": "Rockstar Games YouTube",
                className: B.youtube,
                "data-testid": "youtubeLink",
                onClick: l("cta_other", "https://www.youtube.com/rockstargames", "youtube", "footer"),
                target: "_blank",
                title: "YouTube",
                to: "https://www.youtube.com/rockstargames"
              }), (0, v.jsx)(E.A, {
                "aria-label": "Rockstar Games Facebook",
                className: B.facebook,
                "data-testid": "facebookLink",
                onClick: l("cta_other", "https://www.facebook.com/rockstargames", "facebook", "footer"),
                target: "_blank",
                title: "Facebook",
                to: "https://www.facebook.com/rockstargames"
              }), (0, v.jsx)(E.A, {
                "aria-label": "Rockstar Games Twitch",
                className: B.twitch,
                "data-testid": "twitchLink",
                onClick: l("cta_other", "https://twitch.tv/rockstargames", "twitch", "footer"),
                target: "_blank",
                title: "Twitch",
                to: "https://twitch.tv/rockstargames"
              })]
            }), (0, v.jsxs)("section", {
              className: B.showsOver,
              children: [(0, v.jsx)("div", {
                className: B.whatTeamWildcats,
                children: o.formatMessage(V.footer_rockstar_games)
              }), (0, v.jsxs)("div", {
                className: B.places,
                children: [(0, v.jsx)("span", {
                  children: o.formatMessage(V.footer_locations_new_york)
                }), (0, v.jsx)("span", {
                  children: o.formatMessage(V.footer_locations_london)
                }), (0, v.jsx)("span", {
                  children: o.formatMessage(V.footer_locations_paris)
                }), (0, v.jsx)("span", {
                  children: o.formatMessage(V.footer_locations_bogota)
                })]
              }), (0, v.jsxs)("div", {
                className: B.sophomore,
                children: [(0, v.jsx)("span", {
                  "aria-hidden": !0,
                  children: o.formatMessage(V.footer_established_date_roman)
                }), (0, v.jsx)(D.A, {
                  children: o.formatMessage(V.footer_established_date_numerical)
                })]
              })]
            })]
          })
        }));
      var U = o(93179);
      const F = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const o = (0, r.lazy)(e);
          return (0, r.useMemo)((() => (0, v.jsx)(r.Suspense, {
            fallback: "",
            children: (0, v.jsx)(o, {
              ...a
            })
          })), [])
        },
        H = (0, U.A)((() => {
          const {
            setError: e,
            state: a
          } = (0, L.b)(), {
            error: t
          } = a, {
            pathname: s
          } = (0, n.useLocation)();
          (0, r.useEffect)((() => {
            e()
          }), [s]), (0, r.useEffect)((() => {
            200 !== window?.env?.responseStatusCode && e({
              code: window.env.responseStatusCode
            })
          }), []);
          const i = {
            path: "*",
            element: F((() => Promise.resolve().then(o.bind(o, 23375))), {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          };
          let c = [{
            path: "/",
            element: F((() => Promise.all([o.e(4099), o.e(7712), o.e(7851), o.e(7896), o.e(9739), o.e(1e3), o.e(2500)]).then(o.bind(o, 42500))))
          }, {
            path: "/careers-privacy",
            element: F((() => Promise.all([o.e(5865), o.e(3756), o.e(3497)]).then(o.bind(o, 33497))))
          }, {
            path: "/ccpa",
            element: F((() => Promise.all([o.e(5865), o.e(3756), o.e(5677)]).then(o.bind(o, 65677))))
          }, {
            path: "/community-guidelines",
            element: F((() => Promise.all([o.e(4099), o.e(5865), o.e(7896), o.e(6124), o.e(2178)]).then(o.bind(o, 43227))))
          }, {
            path: "/community-guidelines/resources",
            element: F((() => Promise.all([o.e(4099), o.e(5865), o.e(7896), o.e(6124), o.e(1827)]).then(o.bind(o, 12470))))
          }, {
            path: "/conduct",
            element: (0, v.jsx)(n.Navigate, {
              to: "/community-guidelines",
              replace: !0
            })
          }, {
            path: "/contact",
            element: F((() => o.e(4739).then(o.bind(o, 74739))))
          }, {
            path: "/cookies",
            element: F((() => Promise.all([o.e(5865), o.e(3756), o.e(1695)]).then(o.bind(o, 61695))))
          }, {
            path: "/corpinfo",
            element: F((() => Promise.all([o.e(5865), o.e(3756), o.e(9194)]).then(o.bind(o, 29194))))
          }, {
            path: "/VI",
            element: F((() => o.e(3326).then(o.t.bind(o, 43326, 23))), {
              footer: (0, v.jsx)(T, {})
            })
          }, {
            path: "/games",
            element: F((() => Promise.all([o.e(4099), o.e(7851), o.e(7896), o.e(9739), o.e(3565)]).then(o.bind(o, 43565))))
          }, {
            path: "/games/:gameTitlelug",
            element: F((() => Promise.all([o.e(7851), o.e(7467)]).then(o.bind(o, 7467))))
          }, {
            path: "/legal",
            element: F((() => Promise.all([o.e(5865), o.e(3756), o.e(989)]).then(o.bind(o, 989))))
          }, {
            path: "/gta-v/thankyou",
            element: F((() => o.e(4979).then(o.bind(o, 54979))), {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: F((() => o.e(2027).then(o.bind(o, 72027))))
          }, {
            path: "/community_event",
            element: F((() => Promise.all([o.e(7851), o.e(267)]).then(o.bind(o, 80267))))
          }, {
            path: "/reddeadredemption2/*",
            element: F((() => o.e(9147).then(o.t.bind(o, 29147, 23))))
          }, {
            path: "/reddeadredemption/*",
            element: F((() => o.e(7538).then(o.t.bind(o, 47538, 23))))
          }, {
            path: "/bully/scholarshipedition",
            element: (0, v.jsx)(n.Navigate, {
              to: "/bully",
              replace: !0
            })
          }, {
            path: "/bully/*",
            element: F((() => o.e(5202).then(o.t.bind(o, 35202, 23))))
          }, {
            path: "/reddeadonline/thankyou",
            element: F((() => o.e(4979).then(o.bind(o, 54979))), {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: F((() => o.e(3137).then(o.t.bind(o, 53137, 23))))
          }, {
            path: "/downloads/*",
            element: F((() => Promise.all([o.e(2973), o.e(3108)]).then(o.bind(o, 73108))))
          }, {
            path: "/reddeadonline/*",
            element: F((() => o.e(3416).then(o.t.bind(o, 33416, 23))))
          }, {
            path: "/gifs/:hashId",
            element: F((() => o.e(1626).then(o.t.bind(o, 41626, 23))))
          }, {
            path: "/gta-v/*",
            element: F((() => o.e(6766).then(o.t.bind(o, 36766, 23))), {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: F((() => o.e(6766).then(o.t.bind(o, 36766, 23))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-plus",
            element: F((() => o.e(7882).then(o.bind(o, 27882))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: F((() => o.e(6766).then(o.t.bind(o, 36766, 23))), {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy/*",
            element: F((() => o.e(2405).then(o.t.bind(o, 12405, 23))))
          }, {
            path: "/gtatv/*",
            element: F((() => o.e(8987).then(o.t.bind(o, 88987, 23))))
          }, {
            path: "/manuals",
            element: F((() => Promise.all([o.e(764), o.e(5462)]).then(o.bind(o, 5462))))
          }, {
            path: "/manuals/music",
            element: F((() => Promise.all([o.e(764), o.e(2973), o.e(4908)]).then(o.bind(o, 74908))))
          }, {
            path: "/newswire",
            element: F((() => Promise.all([o.e(4099), o.e(7851), o.e(7896), o.e(9739), o.e(1e3), o.e(360)]).then(o.bind(o, 360))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: F((() => o.e(7091).then(o.bind(o, 37091))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: F((() => o.e(7091).then(o.bind(o, 37091))))
          }, {
            path: "/privacy",
            element: F((() => Promise.all([o.e(5865), o.e(3756), o.e(726)]).then(o.bind(o, 80726))))
          }, {
            path: "/rockstartv/*",
            element: F((() => o.e(8778).then(o.t.bind(o, 78778, 23))))
          }, {
            path: "/screenshot-viewer/*",
            element: F((() => o.e(582).then(o.t.bind(o, 90582, 23))))
          }, {
            path: "/search",
            element: F((() => o.e(9192).then(o.bind(o, 49192))))
          }, {
            path: "/socialclubmaintenance",
            element: F((() => o.e(1814).then(o.bind(o, 71814))))
          }, {
            path: "/south-korean-privacy-addendum",
            element: F((() => Promise.all([o.e(5865), o.e(3756), o.e(2741)]).then(o.bind(o, 2741))))
          }, {
            path: "/unsubscribe",
            element: F((() => Promise.all([o.e(4099), o.e(4956)]).then(o.bind(o, 24956))))
          }, {
            path: "/videos",
            element: F((() => Promise.all([o.e(1266), o.e(7712), o.e(8438)]).then(o.bind(o, 78438))))
          }, {
            path: "/videos/:videoId",
            element: F((() => Promise.all([o.e(1266), o.e(1813)]).then(o.bind(o, 21813))))
          }, {
            ...i
          }];
          return isNaN(parseInt(t?.code)) || 200 === t?.code || (c = [i]), (0, n.useRoutes)(c)
        })),
        O = {
          main: "rockstargames-sites-rockstargamesf5a4be65929b33e16434b24a4d701e3e",
          headerHidden: "rockstargames-sites-rockstargamesb6b034f449f546e8024b4fa91ec35516"
        },
        Y = (0, t.withAutoRouteTracking)((e => {
          let {
            headerHidden: a
          } = e;
          return (0, v.jsx)("main", {
            role: "main",
            id: "main",
            className: [O.main, a ? O.headerHidden : ""].join(" "),
            children: (0, v.jsx)(H, {})
          })
        }));
      var q = o(65059);
      const X = {
        ...S.intlMessages,
        ...z
      };
      f();
      const K = (() => {
          const e = window;
          if (e[u]?.history || f(), e[u]?.history) return e[u].history;
          throw new Error("Browser History has not been initialised")
        })(),
        $ = () => {
          const {
            setFooterHidden: e,
            setHeaderHidden: a,
            state: o
          } = (0, L.b)(), {
            footerHidden: t,
            headerHidden: s
          } = o, [_] = (0, r.useContext)(C), [{
            iso: m
          }] = (0, N.getLocale)(), d = (0, n.useLocation)();
          return (0, r.useEffect)((() => {
            const o = (0, q.Ek)({
                path: d.pathname
              }),
              t = (0, q.UN)({
                path: d.pathname
              });
            e(o), a(t)
          }), [d]), (0, v.jsx)(N.IntlProvider, {
            locales: X,
            lang: m,
            children: (0, v.jsx)(i.NP, {
              colorScheme: "dark",
              defaultColorScheme: "dark",
              defaultContrastMode: "normal",
              defaultPlatformScale: "desktop",
              children: (0, v.jsx)(I.UN, {
                children: (0, v.jsxs)(b, {
                  threshold: [25, 50, 75, 90, 100],
                  children: [!s && (0, v.jsx)(c.NavigationWrapper, {
                    globalNavLoaderComponent: P,
                    globalNavComponent: l()
                  }), _, (0, v.jsx)(g, {}), (0, v.jsx)(Y, {
                    headerHidden: s
                  }), !t && (0, v.jsx)(T, {})]
                })
              })
            })
          })
        },
        J = (0, t.withRockstarGraph)((0, t.withReactiveState)((() => {
          const e = (0, t.useBase)(),
            {
              setTitle: a
            } = (0, L.b)();
          return (0, r.useEffect)((() => {
            window.addEventListener("message", (e => {
              "graph.titleUpdate" === (e.data?.type ?? null) && a(e.data.title)
            }))
          }), []), (0, v.jsx)(M.uU, {
            children: (0, v.jsx)(G.N2, {
              children: (0, v.jsx)(I.iR, {
                children: (0, v.jsx)(m(), {
                  history: K,
                  basename: e,
                  children: (0, v.jsx)(j, {
                    children: (0, v.jsx)($, {})
                  })
                })
              })
            })
          })
        }), {
          state: q.wk
        }), {
          env: window?.env?.graphEnv ?? "prod"
        }),
        W = window?.env?.oneTrustId ?? null,
        Z = window?.env?.gtmId ?? null;
      (0, t.gtmInit)({
        id: Z
      }), (0, t.oneTrustInit)({
        id: W,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, s.H)(e).render((0, v.jsx)(J, {}))
        }
      })
    },
    74829: (e, a, o) => {
      "use strict";
      o.d(a, {
        b: () => t.b$
      });
      var t = o(65059)
    },
    65059: (e, a, o) => {
      "use strict";
      o.d(a, {
        Ek: () => r,
        UN: () => s,
        b$: () => i,
        wk: () => n
      });
      var t = o(95966);
      const s = e => {
          let {
            path: a
          } = e;
          return window.self !== window.top || (["/gifs", "/screenshot-viewer", "/VI", "/videoplayer"].find((e => a.includes(e))) ?? []).length > 0
        },
        r = e => {
          let {
            path: a
          } = e;
          return (["/gta-online/license-plates", "/VI"].find((e => a.includes(e))) ?? []).length > 0
        },
        n = (0, t.makeVar)({
          breadcrumb: {
            links: [],
            filter: ""
          },
          error: {
            message: window?.errorFromServer?.message ?? null,
            code: window?.errorFromServer?.code ?? null
          },
          gameSiteNavOpen: !1,
          loading: !1,
          navOpen: !1,
          headerHidden: s({
            path: document.location.pathname
          }),
          footerHidden: r({
            path: document.location.pathname
          }),
          normalLogo: !0,
          search: ""
        }),
        i = () => {
          const e = (0, t.useState)(),
            a = (0, t.useMutateState)();
          return {
            state: e,
            toggleNavOpen: function() {
              let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              const {
                navOpen: t
              } = e;
              a({
                navOpen: null !== o ? o : !t
              })
            },
            clearError: () => {
              a({
                error: {
                  code: null,
                  message: null
                }
              })
            },
            setBreadcrumb: function() {
              let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              a({
                breadcrumb: {
                  ...e.breadcrumb,
                  links: o,
                  filter: t
                }
              })
            },
            setLoading: e => {
              a({
                loading: e
              })
            },
            setNavHidden: e => {
              a({
                navHidden: e
              })
            },
            setNormalLogo: e => {
              a({
                normalLogo: e
              })
            },
            setSearch: e => {
              a({
                search: e
              })
            },
            setTitle: e => {
              const o = "Rockstar Games";
              let t = e;
              e.endsWith(o) || (t = `${e} - ${o}`), document.title = t, a({
                title: t
              })
            },
            setError: function() {
              let {
                code: e,
                message: o
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              a({
                error: {
                  code: e,
                  message: o
                }
              })
            },
            setFooterHidden: e => {
              a({
                footerHidden: e
              })
            },
            setHeaderHidden: e => {
              a({
                headerHidden: e
              })
            },
            updateGameData: o => {
              let {
                base: t = null,
                navOpen: s = !1
              } = o;
              const r = {
                ...e.gameData
              };
              null !== t && (r.base = t.replace(/\/$/, "")), null !== s && (r.navOpen = s), a({
                gameData: r
              })
            }
          }
        }
    },
    83428: e => {
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

      function o(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          o(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          o(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          o(e, a)
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

      function s(e, a) {
        for (var o = 0; o < e.definitions.length; o++) {
          var t = e.definitions[o];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          o(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.userData = function(e, a) {
        var o = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (o.loc = e.loc);
        var r = t[a] || new Set,
          n = new Set,
          i = new Set;
        for (r.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (t[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var t = s(e, a);
          t && o.definitions.push(t)
        })), o
      }(a, "userData")
    },
    26454: e => {
      "use strict";
      e.exports = JSON.parse('{"us":{"footer_community_guidelines_label_text":"Community Guidelines","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Cookie Policy","footer_cookie_settings_label_text":"Cookie Settings","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community Guidelines","rockstargames_company_info_br":"Brazil","rockstargames_company_info_cz":"Czech Republic","rockstargames_company_info_de":"Germany","rockstargames_company_info_display_for_country":"Display page information for {country}","rockstargames_company_info_es":"Spain","rockstargames_company_info_fr":"France","rockstargames_company_info_it":"Italy","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"South Korea","rockstargames_company_info_mx":"Mexico","rockstargames_company_info_nl":"Netherlands","rockstargames_company_info_pl":"Poland","rockstargames_company_info_ru":"Russian Federation","rockstargames_company_info_sa":"Saudi Arabia","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"United States","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Download {item} {collection}","rockstargames_downloads_dimensions_label":"{width} by {height} pixels.","rockstargames_downloads_go_back":"Go back","email_settings_cta":"Update Preferences","unsubscribe_error_description":"This URL may be invalid. You can make changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_error_header":"Error Unsubscribing","unsubscribe_info_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_info_header":"You\'re Already Unsubscribed","unsubscribe_success_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_success_header":"Successfully Unsubscribed"},"de":{"footer_community_guidelines_label_text":"Community-Richtlinien","footer_contact_label_text":"Kontakt","footer_cookie_policy_label_text":"Cookie-Richtlinie","footer_cookie_settings_label_text":"Cookie-Einstellungen","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community-Richtlinien","rockstargames_company_info_br":"Brasilien","rockstargames_company_info_cz":"Tschechische Republik","rockstargames_company_info_de":"Deutschland","rockstargames_company_info_display_for_country":"Seiteninformationen für {country} anzeigen","rockstargames_company_info_es":"Spanien","rockstargames_company_info_fr":"Frankreich","rockstargames_company_info_it":"Italien","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"Südkorea","rockstargames_company_info_mx":"Mexiko","rockstargames_company_info_nl":"Niederlande","rockstargames_company_info_pl":"Polen","rockstargames_company_info_ru":"Russland","rockstargames_company_info_sa":"Saudi-Arabien","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"USA","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"{item} aus {collection} herunterladen","rockstargames_downloads_dimensions_label":"{width} x {height} Pixel.","rockstargames_downloads_go_back":"Zurück","email_settings_cta":"Präferenzen aktualisieren","unsubscribe_error_description":"Diese URL ist eventuell ungültig. Du kannst deine Präferenzen bezüglich E-Mails von Rockstar Games in den Einstellungen deines Kontos ändern.","unsubscribe_error_header":"Fehler beim Abbestellen","unsubscribe_info_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_info_header":"Du hast E-Mails bereits abbestellt","unsubscribe_success_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_success_header":"Erfolgreich abbestellt"},"es":{"footer_community_guidelines_label_text":"Directrices de la comunidad","footer_contact_label_text":"Contacto","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Ajustes de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nueva York","footer_locations_paris":"París","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"¡Pide perdón, respeta a los demás!","community_guidelines_hero_title":"Directrices de la comunidad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información para {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federación Rusa","rockstargames_company_info_sa":"Arabia Saudí","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width} por {height} píxeles.","rockstargames_downloads_go_back":"Volver","email_settings_cta":"Cambiar tus preferencias","unsubscribe_error_description":"Puede que esta URL no sea válida. Puedes cambiar tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_error_header":"Error al cancelar la suscripción","unsubscribe_info_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_info_header":"Ya has cancelado tu suscripción","unsubscribe_success_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_success_header":"Has cancelado tu suscripción con éxito"},"mx":{"footer_community_guidelines_label_text":"Directrices de la comunidad","footer_contact_label_text":"Contacto","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Configuración de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Directrices de la comunidad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información de página de {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Rusia","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos de América","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width}x{height} píxeles.","rockstargames_downloads_go_back":"Atrás","email_settings_cta":"Actualizar preferencias","unsubscribe_error_description":"La dirección URL podría ser inválida. Puedes cambiar las preferencias de tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_error_header":"Error al darse de baja","unsubscribe_info_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_info_header":"Ya te encuentras dado de baja.","unsubscribe_success_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_success_header":"Éxito al darse de baja."},"fr":{"footer_community_guidelines_label_text":"Règles de la communauté","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Politique en matière de cookies","footer_cookie_settings_label_text":"Paramètres des cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londres","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Règles de la communauté","rockstargames_company_info_br":"le Brésil","rockstargames_company_info_cz":"la République tchèque","rockstargames_company_info_de":"l\'Allemagne","rockstargames_company_info_display_for_country":"Afficher les informations de la page pour {country}","rockstargames_company_info_es":"l\'Espagne","rockstargames_company_info_fr":"la France","rockstargames_company_info_it":"l\'Italie","rockstargames_company_info_jp":"le Japon","rockstargames_company_info_kr":"la Corée du Sud","rockstargames_company_info_mx":"le Mexique","rockstargames_company_info_nl":"les Pays-Bas","rockstargames_company_info_pl":"la Pologne","rockstargames_company_info_ru":"la Fédération de Russie","rockstargames_company_info_sa":"l\'Arabie saoudite","rockstargames_company_info_tw":"Taïwan","rockstargames_company_info_us":"les États-Unis","rockstargames_company_info_zh":"la Chine","rockstargames_downloads_collections_download_text":"Télécharger ({collection} - {item})","rockstargames_downloads_dimensions_label":"{width}x{height} pixels.","rockstargames_downloads_go_back":"Précédent","email_settings_cta":"Mettre vos préférences à jour","unsubscribe_error_description":"Cette URL semble non valide. Vous pouvez modifier vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_error_header":"Une erreur est survenue lors de la désinscription","unsubscribe_info_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réinscrivez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_info_header":"Vous êtes déjà désinscrit(e)","unsubscribe_success_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réinscrivez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_success_header":"Votre désinscription a été prise en compte"},"it":{"footer_community_guidelines_label_text":"Linee guida della comunità","footer_contact_label_text":"Contattaci","footer_cookie_policy_label_text":"Politica sui cookie","footer_cookie_settings_label_text":"Impostazioni dei cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londra","footer_locations_new_york":"New York","footer_locations_paris":"Parigi","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Linee guida della comunità","rockstargames_company_info_br":"Brasile","rockstargames_company_info_cz":"Repubblica Ceca","rockstargames_company_info_de":"Germania","rockstargames_company_info_display_for_country":"Mostra informazioni sulla pagina per il paese seguente: {country}","rockstargames_company_info_es":"Spagna","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Giappone","rockstargames_company_info_kr":"Corea del Sud","rockstargames_company_info_mx":"Messico","rockstargames_company_info_nl":"Paesi Bassi","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federazione Russa","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Stati Uniti","rockstargames_company_info_zh":"Cina","rockstargames_downloads_collections_download_text":"Scarica {item} {collection}","rockstargames_downloads_dimensions_label":"{width} per {height} pixel.","rockstargames_downloads_go_back":"Torna indietro","email_settings_cta":"Aggiorna le preferenze","unsubscribe_error_description":"Questo URL potrebbe non essere valido. Puoi apportare modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_error_header":"Errore nel tentativo di annullamento dell’iscrizione","unsubscribe_info_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_info_header":"Hai già annullato l’iscrizione","unsubscribe_success_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_success_header":"Iscrizione annullata con successo"},"jp":{"footer_community_guidelines_label_text":"コミュニティガイドライン","footer_contact_label_text":"お問い合せ","footer_cookie_policy_label_text":"クッキーポリシー","footer_cookie_settings_label_text":"クッキー設定","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"コミュニティガイドライン","rockstargames_company_info_br":"ブラジル","rockstargames_company_info_cz":"チェコ","rockstargames_company_info_de":"ドイツ","rockstargames_company_info_display_for_country":"{country}のページを表示する","rockstargames_company_info_es":"スペイン","rockstargames_company_info_fr":"フランス","rockstargames_company_info_it":"イタリア","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韓国","rockstargames_company_info_mx":"メキシコ","rockstargames_company_info_nl":"オランダ","rockstargames_company_info_pl":"ポーランド","rockstargames_company_info_ru":"ロシア連邦","rockstargames_company_info_sa":"サウジアラビア","rockstargames_company_info_tw":"台湾","rockstargames_company_info_us":"アメリカ","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"ダウンロード {item} {collection}","rockstargames_downloads_dimensions_label":"{width}×{height}ピクセル","rockstargames_downloads_go_back":"戻る","email_settings_cta":"設定を更新","unsubscribe_error_description":"このURLは無効になっている可能性があります。アカウント設定のページでロックスター・ゲームスのメール受信設定を変更できます。","unsubscribe_error_header":"登録解除時にエラー","unsubscribe_info_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_info_header":"登録解除済みです","unsubscribe_success_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_success_header":"登録解除が完了しました"},"kr":{"footer_community_guidelines_label_text":"커뮤니티 가이드라인","footer_contact_label_text":"문의","footer_cookie_policy_label_text":"쿠키 정책","footer_cookie_settings_label_text":"쿠키 설정","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"커뮤니티 가이드라인","rockstargames_company_info_br":"브라질","rockstargames_company_info_cz":"체코 공화국","rockstargames_company_info_de":"독일","rockstargames_company_info_display_for_country":"페이지 내용 표시 - {country}","rockstargames_company_info_es":"스페인","rockstargames_company_info_fr":"프랑스","rockstargames_company_info_it":"이탈리아","rockstargames_company_info_jp":"일본","rockstargames_company_info_kr":"대한민국","rockstargames_company_info_mx":"멕시코","rockstargames_company_info_nl":"네덜란드","rockstargames_company_info_pl":"폴란드","rockstargames_company_info_ru":"러시아 연방","rockstargames_company_info_sa":"사우디 아라비아","rockstargames_company_info_tw":"대만","rockstargames_company_info_us":"미국","rockstargames_company_info_zh":"중국","rockstargames_downloads_collections_download_text":"{collection} {item} 다운로드","rockstargames_downloads_dimensions_label":"{width} x {height} 픽셀입니다.","rockstargames_downloads_go_back":"뒤로가기","email_settings_cta":"설정 변경","unsubscribe_error_description":"이 URL은 유효하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경할 수 있습니다.","unsubscribe_error_header":"구독 취소 오류","unsubscribe_info_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_info_header":"이미 구독 취소를 하였습니다","unsubscribe_success_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_success_header":"구독 취소 완료"},"pl":{"footer_community_guidelines_label_text":"Regulamin społeczności","footer_contact_label_text":"Kontakt","footer_cookie_policy_label_text":"Polityka plików cookie","footer_cookie_settings_label_text":"Ustawienia plików cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londyn","footer_locations_new_york":"Nowy Jork","footer_locations_paris":"Paryż","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Zachowuj się grzecznie!","community_guidelines_hero_title":"Regulamin społeczności","rockstargames_company_info_br":"Brazylia","rockstargames_company_info_cz":"Czechy","rockstargames_company_info_de":"Niemcy","rockstargames_company_info_display_for_country":"Pokaż informacje dla:","rockstargames_company_info_es":"Hiszpania","rockstargames_company_info_fr":"Francja","rockstargames_company_info_it":"Włochy","rockstargames_company_info_jp":"Japonia","rockstargames_company_info_kr":"Korea Południowa","rockstargames_company_info_mx":"Meksyk","rockstargames_company_info_nl":"Holandia","rockstargames_company_info_pl":"Polska","rockstargames_company_info_ru":"Rosja","rockstargames_company_info_sa":"Arabia Saudyjska","rockstargames_company_info_tw":"Tajwan","rockstargames_company_info_us":"Stany Zjednoczone","rockstargames_company_info_zh":"Chiny","rockstargames_downloads_collections_download_text":"Pobierz: {item} {collection}","rockstargames_downloads_dimensions_label":"{width} na {height} pikseli.","rockstargames_downloads_go_back":"Wróć","email_settings_cta":"Aktualizuj swoje preferencje","unsubscribe_error_description":"Odnośnik może być nieprawidłowy. Możesz zmienić swoje preferencje mailingowe w menu ustawień konta Rockstar Games.","unsubscribe_error_header":"Błąd podczas rezygnacji","unsubscribe_info_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Możesz zapisać się ponownie lub dokonać innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_info_header":"Subskrypcja jest już nieaktywna","unsubscribe_success_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Zapisz się ponownie lub dokonaj innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_success_header":"Zrezygnowano z subskrypcji"},"br":{"footer_community_guidelines_label_text":"Diretrizes da Comunidade","footer_contact_label_text":"Entre em contato","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Configurações de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nova York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Diretrizes da Comunidade","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Tcheca","rockstargames_company_info_de":"Alemanha","rockstargames_company_info_display_for_country":"Exibir informações da página para {country}","rockstargames_company_info_es":"Espanha","rockstargames_company_info_fr":"França","rockstargames_company_info_it":"Itália","rockstargames_company_info_jp":"Japão","rockstargames_company_info_kr":"Coreia do Sul","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Baixos","rockstargames_company_info_pl":"Polônia","rockstargames_company_info_ru":"Federação da Rússia","rockstargames_company_info_sa":"Arábia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Baixar {collection} de {item}","rockstargames_downloads_dimensions_label":"{width} x {height} pixels.","rockstargames_downloads_go_back":"Voltar","email_settings_cta":"Atualizar preferências","unsubscribe_error_description":"Esta URL pode ser inválida. Você pode aplicar mudanças às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_error_header":"Erro ao cancelar inscrição","unsubscribe_info_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_info_header":"Você já cancelou a inscrição","unsubscribe_success_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_success_header":"Inscrição cancelada"},"ru":{"footer_community_guidelines_label_text":"Правила сообщества","footer_contact_label_text":"Связаться с нами","footer_cookie_policy_label_text":"Политика использования файлов Cookie","footer_cookie_settings_label_text":"Настройки файлов Cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Богота","footer_locations_london":"Лондон","footer_locations_new_york":"Нью-Йорк","footer_locations_paris":"Париж","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Правила сообщества","rockstargames_company_info_br":"Бразилии","rockstargames_company_info_cz":"Чехии","rockstargames_company_info_de":"Германии","rockstargames_company_info_display_for_country":"Показать содержимое страницы для {country}","rockstargames_company_info_es":"Испании","rockstargames_company_info_fr":"Франции","rockstargames_company_info_it":"Италии","rockstargames_company_info_jp":"Японии","rockstargames_company_info_kr":"Южной Кореи","rockstargames_company_info_mx":"Мексики","rockstargames_company_info_nl":"Нидерландов","rockstargames_company_info_pl":"Польши","rockstargames_company_info_ru":"России","rockstargames_company_info_sa":"Саудовской Аравии","rockstargames_company_info_tw":"Тайваня","rockstargames_company_info_us":"США","rockstargames_company_info_zh":"Китая","rockstargames_downloads_collections_download_text":"Загрузить: «{item}» из коллекции «{collection}».","rockstargames_downloads_dimensions_label":"{width} на {height} пикселей.","rockstargames_downloads_go_back":"Вернуться","email_settings_cta":"Изменить настройки","unsubscribe_error_description":"Возможно, этот адрес недействителен. Вы можете изменить настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_error_header":"Ошибка при отмене подписки","unsubscribe_info_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_info_header":"Вы уже отменили подписку","unsubscribe_success_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_success_header":"Подписка отменена"},"hans":{"footer_community_guidelines_label_text":"社区指南","footer_contact_label_text":"联系我们","footer_cookie_policy_label_text":"Cookie 政策","footer_cookie_settings_label_text":"Cookie 设置","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"伦敦","footer_locations_new_york":"纽约","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"说声对不起，做个好人！","community_guidelines_hero_title":"社区指南","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克","rockstargames_company_info_de":"德国","rockstargames_company_info_display_for_country":"显示{country}的页面信息","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法国","rockstargames_company_info_it":"意大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韩国","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷兰","rockstargames_company_info_pl":"波兰","rockstargames_company_info_ru":"俄罗斯联邦","rockstargames_company_info_sa":"沙特阿拉伯","rockstargames_company_info_tw":"台湾地区","rockstargames_company_info_us":"美国","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"下载 {item} 的 {collection}","rockstargames_downloads_dimensions_label":"{width} X {height} 像素","rockstargames_downloads_go_back":"返回","email_settings_cta":"更新偏好设置","unsubscribe_error_description":"此网址可能无效。您可以在账户设置页面更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_error_header":"取消订阅出错","unsubscribe_info_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_info_header":"您已经取消订阅","unsubscribe_success_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_success_header":"取消订阅成功"},"tw":{"footer_community_guidelines_label_text":"社群守則","footer_contact_label_text":"聯絡方式","footer_cookie_policy_label_text":"Cookie 政策","footer_cookie_settings_label_text":"Cookie 設定","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"倫敦","footer_locations_new_york":"紐約","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","community_guidelines_hero_aria_label":"敢於道歉，友善待人！","community_guidelines_hero_title":"社群守則","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克共和國","rockstargames_company_info_de":"德國","rockstargames_company_info_display_for_country":"顯示頁面資訊：{country}","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法國","rockstargames_company_info_it":"義大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"南韓","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷蘭","rockstargames_company_info_pl":"波蘭","rockstargames_company_info_ru":"俄羅斯聯邦","rockstargames_company_info_sa":"沙烏地阿拉伯","rockstargames_company_info_tw":"台灣","rockstargames_company_info_us":"美國","rockstargames_company_info_zh":"中國","rockstargames_downloads_collections_download_text":"下載「{item}」的「{collection}」","rockstargames_downloads_dimensions_label":"像素：{width} x {height}。","rockstargames_downloads_go_back":"返回","email_settings_cta":"更新偏好設定","unsubscribe_error_description":"這個網址可能無效。您可以在帳戶設定頁面變更您的 Rockstar Games 電子郵件偏好設定。","unsubscribe_error_header":"取消訂閱錯誤","unsubscribe_info_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_info_header":"您已經取消訂閱。","unsubscribe_success_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_success_header":"取消訂閱成功"}}')
    }
  }
]);