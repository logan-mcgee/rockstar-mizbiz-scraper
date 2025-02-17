! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "29ad02f2-1a42-4a60-bbc1-8a8783758a87", e._sentryDebugIdIdentifier = "sentry-dbid-29ad02f2-1a42-4a60-bbc1-8a8783758a87")
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
  [899, 6546, 4165], {
    36205: (e, a, o) => {
      o.d(a, {
        A: () => i
      });
      var t = o(62229),
        s = o(9623),
        r = o(95966);
      var n = o(91029);
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
    74381: (e, a, o) => {
      o.d(a, {
        A: () => s
      });
      var t = o(91029);
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
    3025: (e, a, o) => {
      o.d(a, {
        A: () => i
      });
      var t = o(62229),
        s = o(74309),
        r = o(91029);
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
    74309: (e, a, o) => {
      o.r(a), o.d(a, {
        default: () => c
      });
      var t = o(62229),
        s = o(95966),
        r = o(12363),
        n = o(36205);
      var i = o(91029);
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
        const _ = a?.code ?? 398,
          l = (0, t.useRef)(null);
        return (0, t.useEffect)((() => {
          l && l?.current && l.current.focus()
        }), [l]), (0, i.jsxs)("div", {
          className: "rockstargames-sites-rockstargamesd0635ab9b06be2bdd2967e49648afe4e",
          children: [(0, i.jsx)("h3", {
            tabIndex: -1,
            ref: l,
            children: `${c} (${_})`
          }), (0, i.jsx)(r.A, {
            to: "/",
            children: o("Home")
          }), "clr" !== s && (0, i.jsx)(n.A, {})]
        })
      }))
    },
    18372: (e, a, o) => {
      o.d(a, {
        A: () => w,
        K: () => p
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
        _ = e => c(e),
        l = (0, t.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, t.makeVar)((0, t.webSettingsReactive)()?.currentCharId)
        }),
        d = e => l(e),
        m = (0, t.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, t.makeVar)(null)
        }),
        u = e => m(e),
        p = (0, t.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, t.makeVar)(null)
        }),
        g = (0, t.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, t.makeVar)(!1)
        }),
        f = e => g(e),
        k = (0, t.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, t.makeVar)(!1)
        }),
        h = e => k(e),
        b = (0, t.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, t.makeVar)(null)
        }),
        y = e => b(e),
        w = () => {
          const e = (0, t.useReactiveVar)(g),
            a = (0, t.useReactiveVar)(k),
            o = (0, t.useReactiveVar)(l),
            p = (0, t.useReactiveVar)(s),
            w = (0, t.useReactiveVar)(c),
            x = (0, t.useReactiveVar)(m);
          return {
            charactersNeeded: e,
            crewsNeeded: a,
            currentCharId: o,
            hasNotifications: w,
            navOpen: p,
            userData: (0, t.useReactiveVar)(b),
            selectedCharacterTuple: x,
            jumpScMenuFocus: (0, t.useReactiveVar)(n),
            setCharactersNeeded: f,
            setCrewsNeeded: h,
            setCurrentCharId: d,
            setHasNotifications: _,
            setNavOpen: r,
            setSelectedCharacterTuple: u,
            setUserData: y,
            setJumpScMenuFocus: i
          }
        }
    },
    7607: (e, a, o) => {
      o.r(a), o.d(a, {
        GtmProvider: () => t.UN,
        RockstarUserProvider: () => t.iR,
        useGtmTrack: () => t.h,
        useRockstarUser: () => t.Wx,
        useRockstarUserState: () => s.A
      });
      var t = o(92596),
        s = o(18372)
    },
    92596: (e, a, o) => {
      o.d(a, {
        UN: () => _,
        iR: () => y,
        h: () => d,
        Wx: () => w
      });
      var t = o(62229),
        s = o(95966),
        r = o(7607),
        n = o(5315);
      var i = o(91029);
      const c = (0, s.setContextItem)({
          context: (0, t.createContext)(void 0),
          key: "gtmContext22"
        }),
        _ = e => {
          let {
            checkUser: a,
            children: o
          } = e;
          const _ = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, o] = (0, t.useState)([]), [i, c] = (0, t.useState)([]), [_, l] = (0, t.useState)(null), {
                data: d,
                loggedIn: m
              } = (0, r.useRockstarUser)(), {
                hasGtaPlus: u
              } = d ?? {}, p = (0, n.bn)(), g = (e, t) => {
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
                if (d && null !== m) {
                  const e = f(d);
                  i.length && e && g(i, e), l(e)
                } else e || i.length && g(i)
              }), [d, m, i]), (0, t.useEffect)((() => {
                const e = i.filter((e => -1 === a.indexOf(e)));
                c(e)
              }), [a]);
              const f = e => {
                const a = [],
                  o = [],
                  t = [];
                return Object.keys(e?.characters ?? []).forEach((s => {
                  e.characters[s].length && (o.push(s), e.characters[s].forEach((e => {
                    "gtao" === s && (t.includes(e.platform) || t.push(e.platform)), a.includes(e.platform) || a.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: m ?? !1,
                  gta_plus_active: m ? Boolean(u) : void 0,
                  platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
                  games_played: o.length ? o.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: t.length ? t.join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: p
                }
              };
              return {
                track: e => {
                  if (void 0 === m || !d || !_) {
                    const a = [...i];
                    return a.push({
                      ...e
                    }), c(a)
                  }
                  return (0, s.track)({
                    ...e,
                    ..._
                  })
                }
              }
            }(a),
            l = (0, t.useMemo)((() => _), [_, a]);
          return (0, i.jsx)(c.Provider, {
            value: l,
            children: o
          })
        },
        l = {
          track: () => null
        },
        d = () => (0, t.useContext)(c) ?? l;
      var m = o(18372);
      var u = o(43425),
        p = o.n(u);
      var g = o(29830),
        f = o(48004);
      const k = () => {
          const {
            charactersNeeded: e,
            crewsNeeded: a,
            currentCharId: o
          } = (0, m.A)(), r = (0, s.useRockstarToken)(), [n, i] = (0, t.useState)(), [c, _] = (0, s.useRockstarTokenReactive)(), l = (0, s.useRockstarTokenPing)(), [d, u] = (0, t.useState)(), [k, h] = (0, t.useState)(!1), [b, y] = (0, t.useState)(), w = void 0 === d;
          return (0, t.useEffect)((() => {
            e && y("1" === n?.characters?.[e]?.[o]?.stats?.overview?.hasGtaPlus?.value)
          }), [e, o, n]), (0, t.useEffect)((() => {
            i({
              ...n,
              hasGtaPlus: b
            })
          }), [b]), (0, t.useEffect)((() => {
            if (null === r) return void l();
            const e = !!r;
            if (e || k || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: a,
                      tokenPingExpires: o
                    } = e;
                    const {
                      gateway: t,
                      silentCheck: r
                    } = (0, s.getConfigForDomain)(), n = {
                      method: "POST",
                      body: `fingerprint=${await p().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, i = await fetch(r, n);
                    if (200 !== i.status) return void a(!1);
                    const c = `${t}?code=${await i.json()}`,
                      _ = await fetch(c, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: l,
                        tokenExpiresTime: d
                      } = await _.json();
                    return a(l), o(d), l
                  })({
                    token: c,
                    tokenPingExpires: _
                  })
                } catch (e) {}
              })(), h(!0)), !e && k && u(!1), e) {
              const a = (e => {
                let {
                  bearerToken: a
                } = e;
                const o = (0, g.s)(a),
                  {
                    host: t
                  } = (0, s.getConfigForDomain)(),
                  r = parseInt(o.nameid),
                  n = o["scAuth.Nickname"],
                  i = "True" === (o?.["scAuth.IsAMinor"] ?? "True"),
                  c = new Date(o["scAuth.MemberSince"]),
                  _ = new Date,
                  l = (0, f.M)(_, c) < 12;
                return {
                  id: r,
                  avatar: o["scAuth.AvatarUrl"],
                  bearer_token_expired: o.exp > Date.now(),
                  isAMinor: i,
                  isNewAccount: l,
                  nickname: n,
                  profile_link: `https://${t}.rockstargames.com/member/${n}?id=${r}`
                }
              })({
                bearerToken: r
              });
              i({
                ...n,
                ...a
              }), u(e), (0, m.K)(a.id)
            }
          }), [r, k]), (0, t.useEffect)((() => {
            (async () => {
              if (d && n && a && !n?.crews) {
                const e = await (async e => {
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
                  pingBearer: l,
                  rockstarId: n.id
                });
                i({
                  ...n,
                  crews: e
                })
              }
            })()
          }), [n, a, d]), (0, t.useEffect)((() => {
            (async () => {
              if (d && n && "gtao" === e && !n?.characters?.gtao) {
                const e = await (async e => {
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
                  pingBearer: l,
                  nickname: n.nickname,
                  rockstarId: n.id
                });
                i({
                  ...n,
                  characters: {
                    ...n.characters,
                    gtao: e
                  }
                })
              }
            })()
          }), [e, n, d]), {
            data: n,
            loggedIn: d,
            loading: w
          }
        },
        h = {},
        b = (0, s.setContextItem)({
          context: (0, t.createContext)(h),
          key: "userContext"
        }),
        y = e => {
          let {
            children: a
          } = e;
          const o = k(),
            s = (0, t.useMemo)((() => ({
              ...o,
              hasProvider: !0
            })), [o]);
          return (0, i.jsx)(b.Provider, {
            value: s,
            children: a
          })
        },
        w = () => (0, t.useContext)(b)
    },
    21736: (e, a, o) => {
      o.r(a), o(11138), o(10206), o(75177), o(34554), o(87065), o(15222), o(77655), o(8075), o(13950), o(66699), o(15980), o(28681), o(62563), o(11416), o(86670), o(47934), o(42555), o(17982), o(63761);
      var t = o(95966),
        s = o(14070),
        r = o(62229),
        n = o(9623),
        i = o(60188),
        c = o(41263),
        _ = o.n(c),
        l = o(91029);
      const d = e => {
        let {
          navigationData: a,
          searchConfig: o,
          globalNavigationComponent: t
        } = e;
        const s = (0, n.useLocation)(),
          i = (0, n.useNavigate)(),
          c = t,
          _ = e => {
            e?.startsWith("http") ? window.location.href = e : i(e)
          },
          d = (0, r.useMemo)((() => a.reduce(((e, a) => a.appearancePaths ? [...e, ...a.appearancePaths.map((e => ({
            element: (0, l.jsx)(c, {
              navData: a,
              location: s,
              onNavigate: _,
              searchConfig: o,
              routeOptions: e.options
            }),
            path: e.path
          })))] : e), [])), [s, a, o]);
        return (0, n.useRoutes)(d)
      };
      var m = o(55274),
        u = o.n(m),
        p = o(90);
      const g = "__MFE_GLOBAL_HOOK__",
        f = () => {
          const e = window;
          e[g]?.history || (e[g] = Object.assign(e[g] || {}, {
            history: (0, p.createBrowserHistory)()
          }))
        },
        k = () => {
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
      var h = o(2918);
      const b = (0, r.forwardRef)(((e, a) => {
        const {
          threshold: o,
          callback: t,
          children: s,
          requireUser: n
        } = e, {
          track: i
        } = (0, h.useGtmTrack)(n), [c, _] = (0, r.useState)(a?.current);
        return (0, r.useEffect)((() => {
          a?.current && _(a.current)
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
              _ = o?.scrollHeight || e.scrollHeight || r.scrollHeight,
              {
                clientHeight: l
              } = e,
              d = i / (_ - l) * 100;
            if (n) {
              const e = Math.min(...n, _);
              if (d >= e) {
                const t = n.filter((a => a !== e));
                0 === t.length && (o ?? window).removeEventListener("scroll", c), a && a({
                  scrollY: e,
                  scrollPercent: d,
                  remainingDepths: t
                }), s({
                  scrollY: e,
                  scrollDepths: t
                })
              }
            } else s({
              ...t,
              scrollY: d
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
      b.displayName = "ScrollTracker";
      const y = b;
      var w = o(95945),
        x = o.n(w),
        v = o(63582);
      const j = e => {
          let {
            modal: a
          } = e;
          const {
            content: o,
            className: s,
            height: i,
            onClose: c,
            rect: _ = {
              left: 0,
              top: 0
            },
            contentStyle: d = {},
            contentClassName: m = "",
            width: u,
            fadeIn: p = !0,
            cardIds: g,
            activeId: f,
            theme: k,
            title: b,
            gtm: y = {},
            aspectRatio: w = "default",
            cardDimensions: j
          } = a, {
            left: R,
            top: C
          } = _, S = g?.indexOf(f), [z, I] = (0, r.useState)(g?.length || 0), {
            track: N
          } = (0, h.useGtmTrack)(), M = null !== g && (g?.length || 0) > 1 && ("flag_bg" === k || "fob" === j?.size), P = window.location.href.includes("cms5"), [, E] = (0, n.useSearchParams)(), [G, T] = (0, r.useState)(!1), [A, B] = (0, r.useState)(!1), [L, D] = (0, r.useState)(), V = e => {
            "number" == typeof e && g && e < g.length && e > -1 && E({
              info: g[e].toString()
            })
          }, U = () => {
            const e = "number" == typeof S && S > -1 ? S - 1 : 0;
            V(e), N({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: b,
              position: S
            })
          }, H = () => {
            const e = "number" == typeof S && S > -1 ? S + 1 : 0;
            V(e), N({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: b,
              position: S
            })
          };
          (0, r.useEffect)((() => {
            I(g?.length || 0)
          }), [g?.length]), (0, r.useEffect)((() => {
            null !== S && null !== g && V(S)
          }), [S, g]), (0, r.useEffect)((() => {
            const e = g?.findIndex((e => e === f));
            "number" == typeof e && (B(e <= 0), T(e >= z - 1))
          }), [g, f, z]);
          const [F] = (0, r.useState)({
            y: C,
            x: R,
            top: 0,
            left: 0,
            width: u,
            height: i,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: M ? "0" : ""
          }), O = {
            opacity: 1
          }, q = (0, r.useRef)(null), Y = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, K = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [X] = (0, r.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: M ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: Y,
              y: Y,
              top: Y,
              left: Y,
              width: Y,
              height: Y,
              border: Y,
              background: {
                delay: .3
              }
            }
          }), [$, Q] = (0, r.useState)({
            initial: F,
            shown: X
          });
          (0, r.useEffect)((() => {
            Q({
              initial: F,
              shown: X
            })
          }), [F, X]), (0, r.useEffect)((() => {
            const e = e => {
              "function" == typeof c && "Escape" === e.key && (c(), N({
                event: "modal_close",
                element_placement: b,
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const W = () => {
              "function" == typeof c && (c(), N({
                event: "modal_close",
                element_placement: b,
                ...y
              }))
            },
            J = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let o = 0; o < e.children.length; o++) {
                const t = e.children[o];
                if (t.scrollHeight > t.clientHeight) return t;
                const s = J(t, a - 1);
                if (s) return s
              }
              return null
            },
            Z = e => {
              if (ae?.current?.children) {
                let a = null;
                const o = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return L?.queried ? a = L.element : (a = J(e, 2), D({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += o)
                }
              }
            },
            ee = p ? 0 : 1,
            ae = (0, r.useRef)(null),
            oe = (0, l.jsx)(v.motion.button, {
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
                W()
              },
              onKeyDown: Z,
              onKeyUp: Z
            });
          let te = null;
          return te = P ? r.Fragment : x(), (0, r.useMemo)((() => (0, l.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": M,
            "data-aspect-ratio": w,
            children: (0, l.jsx)(te, {
              children: (0, l.jsxs)("div", {
                children: [(0, l.jsx)(v.motion.div, {
                  className: "rockstargames-sites-rockstargamescf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: O,
                  transition: Y,
                  onClick: () => W()
                }), M && (0, l.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, l.jsxs)(v.motion.div, {
                    className: "rockstargames-sites-rockstargamesdbb0055ba799f28f1a2e41026b8781e8",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: K,
                    children: [(0, l.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: U,
                      disabled: A,
                      onKeyDown: Z,
                      onKeyUp: Z
                    }), (0, l.jsxs)("div", {
                      className: "rockstargames-sites-rockstargamese316695281c4c56337307741bda1371f",
                      "data-theme": k,
                      children: [" ", (S ?? 0) + 1, (0, l.jsx)("div", {
                        className: "rockstargames-sites-rockstargamesc1ee424eae15f7b789c86e634df9e28d"
                      }), g?.length, " "]
                    }), (0, l.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: H,
                      disabled: G,
                      onKeyDown: Z,
                      onKeyUp: Z,
                      "data-autofocus": !0
                    })]
                  }), oe]
                }), (0, l.jsx)(v.motion.div, {
                  className: "rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366",
                  ref: q,
                  initial: "initial",
                  animate: "shown",
                  variants: $,
                  transition: Y,
                  style: d,
                  children: (0, l.jsxs)(v.motion.div, {
                    className: (0, t.classList)("rockstargames-sites-rockstargamesa7d77f83f629e9ae93f6934c8ba007b0", s),
                    children: [!M && oe, (0, l.jsx)(v.motion.div, {
                      className: (0, t.classList)("rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714", m),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: K,
                      ref: ae,
                      children: o
                    }), (0, l.jsx)("button", {
                      className: "rockstargames-sites-rockstargamesea8f15b1bfbda9f3efef89dc0d2ebc89",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [o, S, d])
        },
        R = [null, () => null],
        C = (0, t.setContextItem)({
          context: (0, r.createContext)(R),
          key: "modalContext"
        }),
        S = e => {
          let {
            children: a
          } = e;
          const [o, s] = (0, r.useState)(R), {
            setBodyIsLocked: n
          } = (0, t.useBodyScrollable)("ModalProvider"), i = (0, r.useMemo)((() => o?.content ? (0, l.jsx)(j, {
            modal: o
          }) : null), [o]), c = () => n(!1);
          return (0, r.useEffect)((() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          })), []), (0, r.useEffect)((() => {
            n(!!i)
          }), [i]), (0, l.jsx)(C.Provider, {
            value: [i, s],
            children: a
          })
        };
      var z = o(92596),
        I = o(60028),
        N = o(37059),
        M = o(81788),
        P = o(3025),
        E = o(49323),
        G = o(12363),
        T = o(20270),
        A = o(74381);
      const B = (0, M.defineMessages)({
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
        L = {
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
          discord: "rockstargames-sites-rockstargameseb570cd3754d94d79cbf70158fa06fec",
          places: "rockstargames-sites-rockstargamese63e196fc5310d845bde211ca951f184"
        },
        D = (0, t.withTranslations)((e => {
          let {
            t: a
          } = e;
          const o = (0, M.useIntl)(),
            s = (0, n.useLocation)(),
            {
              host: r
            } = (0, t.getConfigForDomain)(),
            {
              track: i
            } = (0, h.useGtmTrack)(),
            {
              state: c,
              toggleNavOpen: _
            } = (0, E.b)(),
            d = (e, a, o, t) => () => {
              _(!1), i({
                event: e,
                link_url: a,
                text: o,
                element_placement: t
              })
            };
          return (0, l.jsxs)("footer", {
            className: [L.siteFooter, c.loading ? L.loading : ""].join(" "),
            "data-testid": "footerNav",
            role: "navigation",
            title: "Footer",
            children: [(0, l.jsx)("div", {
              className: L.languageSelector,
              children: (0, l.jsx)(T.LanguageSelector, {
                location: s
              })
            }), (0, l.jsxs)("div", {
              className: L.links,
              children: [(0, l.jsx)(G.A, {
                "data-testid": "contactButton",
                onClick: d("cta_other", "/contact", "contact", "footer"),
                to: "/contact",
                children: o.formatMessage(B.footer_contact_label_text)
              }), (0, l.jsx)(G.A, {
                "data-testid": "careersLink",
                onClick: d("cta_other", "/careers", "careers", "footer"),
                to: "/careers",
                children: a("Careers")
              }), (0, l.jsx)(G.A, {
                "data-testid": "communityGuidelinesLink",
                onClick: d("cta_other", "/community-guidelines", "community guidelines", "footer"),
                to: "/community-guidelines",
                children: o.formatMessage(B.footer_community_guidelines_label_text)
              }), (0, l.jsx)(G.A, {
                "data-testid": "subscribeLink",
                className: L.subscribe,
                onClick: d("cta_subscribe_news", `https://${r}.rockstargames.com/settings/email`, "subscribe", "footer"),
                to: `https://${r}.rockstargames.com/settings/email`,
                target: "_blank",
                children: a("Subscribe")
              })]
            }), (0, l.jsxs)("div", {
              className: L.companyInfoLinks,
              children: [(0, l.jsx)(G.A, {
                "data-testid": "corporateButton",
                onClick: d("cta_other", "/corpinfo", "corporate", "footer"),
                to: "/corpinfo",
                children: a("Corporate")
              }), (0, l.jsx)(G.A, {
                "data-testid": "privacyButton",
                onClick: d("cta_other", "/privacy", "privacy", "footer"),
                to: "/privacy",
                children: a("Privacy")
              }), (0, l.jsx)("button", {
                "data-testid": "cookieSettingsButton",
                onClick: ("cta_other", "", "cookie settings", "footer", () => {
                  i({
                    event: "cta_other",
                    link_url: "",
                    text: "cookie settings",
                    element_placement: "footer"
                  }), window.OneTrust?.ToggleInfoDisplay()
                }),
                children: o.formatMessage(B.footer_cookie_settings_label_text)
              }), (0, l.jsx)(G.A, {
                "data-testid": "cookiePolicyButton",
                onClick: d("cta_other", "/cookies", "cookie policy", "footer"),
                to: "/cookies",
                children: o.formatMessage(B.footer_cookie_policy_label_text)
              }), (0, l.jsx)(G.A, {
                "data-testid": "legalButton",
                onClick: d("cta_other", "/legal", "legal", "footer"),
                to: "/legal",
                children: a("Legal")
              }), (0, l.jsx)(G.A, {
                "data-testid": "ccpaButton",
                onClick: d("cta_other", "/ccpa", "do not sell my info", "footer"),
                to: "/ccpa",
                children: a("Do Not Sell My Info")
              })]
            }), (0, l.jsxs)("div", {
              className: L.social,
              children: [(0, l.jsx)(G.A, {
                "aria-label": "Rockstar Games X",
                className: L.twitter,
                "data-testid": "twitterLink",
                onClick: d("cta_other", "https://x.com/rockstargames", "twitter", "footer"),
                target: "_blank",
                title: "X",
                to: "https://x.com/rockstargames"
              }), (0, l.jsx)(G.A, {
                "aria-label": "Rockstar Games Instagram",
                className: L.instagram,
                "data-testid": "instagramLink",
                onClick: d("cta_other", 'https://instagram.com/rockstargames"', "instagram", "footer"),
                target: "_blank",
                title: "Instagram",
                to: "https://instagram.com/rockstargames"
              }), (0, l.jsx)(G.A, {
                "aria-label": "Rockstar Games YouTube",
                className: L.youtube,
                "data-testid": "youtubeLink",
                onClick: d("cta_other", "https://www.youtube.com/rockstargames", "youtube", "footer"),
                target: "_blank",
                title: "YouTube",
                to: "https://www.youtube.com/rockstargames"
              }), (0, l.jsx)(G.A, {
                "aria-label": "Rockstar Games Facebook",
                className: L.facebook,
                "data-testid": "facebookLink",
                onClick: d("cta_other", "https://www.facebook.com/rockstargames", "facebook", "footer"),
                target: "_blank",
                title: "Facebook",
                to: "https://www.facebook.com/rockstargames"
              }), (0, l.jsx)(G.A, {
                "aria-label": "Rockstar Games Twitch",
                className: L.twitch,
                "data-testid": "twitchLink",
                onClick: d("cta_other", "https://twitch.tv/rockstargames", "twitch", "footer"),
                target: "_blank",
                title: "Twitch",
                to: "https://twitch.tv/rockstargames"
              }), (0, l.jsx)(G.A, {
                "aria-label": "Rockstar Games Discord",
                className: L.discord,
                "data-testid": "discordLink",
                onClick: d("cta_other", "https://discord.gg/rockstargames", "discord", "footer"),
                target: "_blank",
                title: "Discord",
                to: "https://discord.gg/rockstargames"
              })]
            }), (0, l.jsxs)("section", {
              className: L.showsOver,
              children: [(0, l.jsx)("div", {
                className: L.whatTeamWildcats,
                children: o.formatMessage(B.footer_rockstar_games)
              }), (0, l.jsxs)("div", {
                className: L.places,
                children: [(0, l.jsx)("span", {
                  children: o.formatMessage(B.footer_locations_new_york)
                }), (0, l.jsx)("span", {
                  children: o.formatMessage(B.footer_locations_london)
                }), (0, l.jsx)("span", {
                  children: o.formatMessage(B.footer_locations_paris)
                }), (0, l.jsx)("span", {
                  children: o.formatMessage(B.footer_locations_bogota)
                })]
              }), (0, l.jsxs)("div", {
                className: L.sophomore,
                children: [(0, l.jsx)("span", {
                  "aria-hidden": !0,
                  children: o.formatMessage(B.footer_established_date_roman)
                }), (0, l.jsx)(A.A, {
                  children: o.formatMessage(B.footer_established_date_numerical)
                })]
              })]
            })]
          })
        })),
        V = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const o = (0, r.lazy)(e);
          return (0, r.useMemo)((() => (0, l.jsx)(r.Suspense, {
            fallback: "",
            children: (0, l.jsx)(o, {
              ...a
            })
          })), [])
        },
        U = (0, P.A)((() => {
          const {
            setError: e,
            state: a
          } = (0, E.b)(), {
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
            element: V((() => Promise.resolve().then(o.bind(o, 74309))), {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          };
          let c = [{
            path: "/",
            element: V((() => Promise.all([o.e(3112), o.e(5409), o.e(7851), o.e(8506), o.e(1885), o.e(176), o.e(6958)]).then(o.bind(o, 86958))))
          }, {
            path: "/careers-privacy",
            element: V((() => Promise.all([o.e(2285), o.e(4771)]).then(o.bind(o, 44771))))
          }, {
            path: "/ccpa",
            element: V((() => Promise.all([o.e(2285), o.e(4499)]).then(o.bind(o, 24499))))
          }, {
            path: "/community-guidelines",
            element: V((() => Promise.all([o.e(3112), o.e(8506), o.e(9031), o.e(8077)]).then(o.bind(o, 45992))))
          }, {
            path: "/community-guidelines/resources",
            element: V((() => Promise.all([o.e(3112), o.e(8506), o.e(9031), o.e(9379)]).then(o.bind(o, 80964))))
          }, {
            path: "/conduct",
            element: (0, l.jsx)(n.Navigate, {
              to: "/community-guidelines",
              replace: !0
            })
          }, {
            path: "/contact",
            element: V((() => o.e(1325).then(o.bind(o, 71325))))
          }, {
            path: "/cookies",
            element: V((() => Promise.all([o.e(2285), o.e(2749)]).then(o.bind(o, 32749))))
          }, {
            path: "/corpinfo",
            element: V((() => Promise.all([o.e(2285), o.e(7912)]).then(o.bind(o, 97912))))
          }, {
            path: "/VI",
            element: V((() => o.e(3326).then(o.t.bind(o, 43326, 23))), {
              footer: (0, l.jsx)(D, {})
            })
          }, {
            path: "/games",
            element: V((() => Promise.all([o.e(3112), o.e(7851), o.e(8506), o.e(1885), o.e(8817)]).then(o.bind(o, 48817))))
          }, {
            path: "/games/:gameTitlelug",
            element: V((() => Promise.all([o.e(7851), o.e(6850)]).then(o.bind(o, 36850))))
          }, {
            path: "/legal",
            element: V((() => Promise.all([o.e(2285), o.e(3891)]).then(o.bind(o, 23891))))
          }, {
            path: "/gta-v/thankyou",
            element: V((() => o.e(8165).then(o.bind(o, 88165))), {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: V((() => o.e(9053).then(o.bind(o, 89053))))
          }, {
            path: "/community_event",
            element: V((() => Promise.all([o.e(7851), o.e(8853)]).then(o.bind(o, 88853))))
          }, {
            path: "/reddeadredemption2/*",
            element: V((() => o.e(9147).then(o.t.bind(o, 29147, 23))))
          }, {
            path: "/reddeadredemption/*",
            element: V((() => o.e(7538).then(o.t.bind(o, 47538, 23))))
          }, {
            path: "/bully/scholarshipedition",
            element: (0, l.jsx)(n.Navigate, {
              to: "/bully",
              replace: !0
            })
          }, {
            path: "/bully/*",
            element: V((() => o.e(5202).then(o.t.bind(o, 35202, 23))))
          }, {
            path: "/reddeadonline/thankyou",
            element: V((() => o.e(8165).then(o.bind(o, 88165))), {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: V((() => o.e(3137).then(o.t.bind(o, 53137, 23))))
          }, {
            path: "/downloads/*",
            element: V((() => Promise.all([o.e(2973), o.e(1739)]).then(o.bind(o, 91739))))
          }, {
            path: "/reddeadonline/*",
            element: V((() => o.e(3416).then(o.t.bind(o, 33416, 23))))
          }, {
            path: "/gifs/:hashId",
            element: V((() => o.e(1626).then(o.t.bind(o, 41626, 23))))
          }, {
            path: "/gta-v/*",
            element: V((() => o.e(6766).then(o.t.bind(o, 36766, 23))), {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: V((() => o.e(6766).then(o.t.bind(o, 36766, 23))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-plus",
            element: V((() => o.e(2828).then(o.bind(o, 72828))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: V((() => o.e(6766).then(o.t.bind(o, 36766, 23))), {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy/*",
            element: V((() => o.e(2405).then(o.t.bind(o, 12405, 23))))
          }, {
            path: "/gtatv/*",
            element: V((() => o.e(8987).then(o.t.bind(o, 88987, 23))))
          }, {
            path: "/manuals",
            element: V((() => Promise.all([o.e(4466), o.e(324)]).then(o.bind(o, 30324))))
          }, {
            path: "/manuals/music",
            element: V((() => Promise.all([o.e(4466), o.e(2973), o.e(541)]).then(o.bind(o, 30541))))
          }, {
            path: "/newswire",
            element: V((() => Promise.all([o.e(3112), o.e(7851), o.e(8506), o.e(1885), o.e(176), o.e(5976)]).then(o.bind(o, 95976))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: V((() => o.e(8781).then(o.bind(o, 88781))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: V((() => o.e(8781).then(o.bind(o, 88781))))
          }, {
            path: "/privacy",
            element: V((() => Promise.all([o.e(2285), o.e(9572)]).then(o.bind(o, 99572))))
          }, {
            path: "/refund-policy",
            element: V((() => o.e(6773).then(o.bind(o, 26773))))
          }, {
            path: "/rockstartv/*",
            element: V((() => o.e(8778).then(o.t.bind(o, 78778, 23))))
          }, {
            path: "/screenshot-viewer/*",
            element: V((() => o.e(582).then(o.t.bind(o, 90582, 23))))
          }, {
            path: "/search",
            element: V((() => o.e(7992).then(o.bind(o, 77992))))
          }, {
            path: "/socialclubmaintenance",
            element: V((() => o.e(4680).then(o.bind(o, 54680))))
          }, {
            path: "/south-korean-privacy-addendum",
            element: V((() => Promise.all([o.e(2285), o.e(8595)]).then(o.bind(o, 8595))))
          }, {
            path: "/unsubscribe",
            element: V((() => Promise.all([o.e(3112), o.e(3701)]).then(o.bind(o, 83701))))
          }, {
            path: "/videos",
            element: V((() => Promise.all([o.e(1278), o.e(5409), o.e(7094)]).then(o.bind(o, 17094))))
          }, {
            path: "/videos/:videoId",
            element: V((() => Promise.all([o.e(1278), o.e(6039)]).then(o.bind(o, 46039))))
          }, {
            ...i
          }];
          return isNaN(parseInt(t?.code)) || 200 === t?.code || (c = [i]), (0, n.useRoutes)(c)
        })),
        H = {
          main: "rockstargames-sites-rockstargamesf5a4be65929b33e16434b24a4d701e3e",
          headerHidden: "rockstargames-sites-rockstargamesb6b034f449f546e8024b4fa91ec35516"
        },
        F = (0, t.withAutoRouteTracking)((e => {
          let {
            headerHidden: a
          } = e;
          return (0, l.jsx)("main", {
            role: "main",
            id: "main",
            className: [H.main, a ? H.headerHidden : ""].join(" "),
            children: (0, l.jsx)(U, {})
          })
        }));
      var O = o(253),
        q = o(52542);
      f();
      const Y = (() => {
          const e = window;
          if (e[g]?.history || f(), e[g]?.history) return e[g].history;
          throw new Error("Browser History has not been initialised")
        })(),
        K = (0, M.withIntl)((() => {
          const {
            setFooterHidden: e,
            setHeaderHidden: a,
            state: o
          } = (0, E.b)(), {
            footerHidden: t,
            headerHidden: s
          } = o, [m] = (0, r.useContext)(C), u = (0, n.useLocation)();
          return (0, r.useEffect)((() => {
            const o = (0, O.Ek)({
                path: u.pathname
              }),
              t = (0, O.UN)({
                path: u.pathname
              });
            e(o), a(t)
          }), [u]), (0, l.jsx)(i.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            children: (0, l.jsx)(z.UN, {
              children: (0, l.jsxs)(y, {
                threshold: [25, 50, 75, 90, 100],
                children: [!s && (0, l.jsx)(c.NavigationWrapper, {
                  globalNavLoaderComponent: d,
                  globalNavComponent: _()
                }), m, (0, l.jsx)(k, {}), (0, l.jsx)(F, {
                  headerHidden: s
                }), !t && (0, l.jsx)(D, {})]
              })
            })
          })
        }), q),
        X = (0, t.withRockstarGraph)((0, t.withReactiveState)((() => {
          const e = (0, t.useBase)(),
            {
              setTitle: a
            } = (0, E.b)();
          return (0, r.useEffect)((() => {
            window.addEventListener("message", (e => {
              "graph.titleUpdate" === (e.data?.type ?? null) && a(e.data.title)
            }))
          }), []), (0, l.jsx)(I.uU, {
            children: (0, l.jsx)(N.N2, {
              children: (0, l.jsx)(z.iR, {
                children: (0, l.jsx)(u(), {
                  history: Y,
                  basename: e,
                  children: (0, l.jsx)(S, {
                    children: (0, l.jsx)(K, {})
                  })
                })
              })
            })
          })
        }), {
          state: O.wk
        }), {
          env: window?.env?.graphEnv ?? "prod"
        }),
        $ = window?.env?.oneTrustId ?? null,
        Q = window?.env?.gtmId ?? null;
      (0, t.gtmInit)({
        id: Q
      }), (0, t.oneTrustInit)({
        id: $,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, s.H)(e).render((0, l.jsx)(X, {}))
        }
      })
    },
    49323: (e, a, o) => {
      o.d(a, {
        b: () => t.b$
      });
      var t = o(253)
    },
    253: (e, a, o) => {
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
    52542: e => {
      e.exports = JSON.parse('{"de-DE":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community-Richtlinien","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Diese Richtlinien beschreiben die Werte, die wir voraussetzen, und die Regeln, die wir anwenden, um sicherzustellen, dass alle Spieler ein faires, respektvolles und sicheres Spielerlebnis haben.","community_guidelines_tile_header":"Community-Richtlinien anschauen","email_settings_cta":"Präferenzen aktualisieren","footer_community_guidelines_label_text":"Community-Richtlinien","footer_contact_label_text":"Kontakt","footer_cookie_policy_label_text":"Cookie-Richtlinie","footer_cookie_settings_label_text":"Cookie-Einstellungen","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Symbol: Händeschütteln","heartbook_icon_alt_text":"Symbol: Buch mit Herz","resources_last_updated_date":"18. November 2024","resources_tile_description":"Finde schnell Ressourcen, falls du oder jemand, den du kennst, Probleme hat und Hilfe braucht.","resources_tile_header":"Sicherheitsressourcen anschauen","rockstargames_company_info_br":"Brasilien","rockstargames_company_info_cz":"Tschechische Republik","rockstargames_company_info_de":"Deutschland","rockstargames_company_info_display_for_country":"Seiteninformationen für {country} anzeigen","rockstargames_company_info_es":"Spanien","rockstargames_company_info_fr":"Frankreich","rockstargames_company_info_it":"Italien","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"Südkorea","rockstargames_company_info_mx":"Mexiko","rockstargames_company_info_nl":"Niederlande","rockstargames_company_info_pl":"Polen","rockstargames_company_info_ru":"Russland","rockstargames_company_info_sa":"Saudi-Arabien","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"USA","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"{item} aus {collection} herunterladen","rockstargames_downloads_dimensions_label":"{width} x {height} Pixel.","rockstargames_downloads_go_back":"Zurück","rsg_no_results":"Diese Suche ergab leider keine Treffer.","rsg_total_results_message":"Suche nach {Tab}, gefiltert nach {Query}","safety_get_support_button":"Support kontaktieren","safety_learn_more_button":"Mehr erfahren","support_chat_icon_alt_text":"Symbol: Support-Chat","support_tile_description":"Besuche unsere Kundendienst-Website, wenn du zusätzliche Hilfe mit der Verwaltung deines Kontos oder den Datenschutz- und Privatsphäreeinstellungen benötigst.","support_tile_header":"Brauchst du Hilfe mit deinem Konto?","unsubscribe_error_description":"Diese URL ist eventuell ungültig. Du kannst deine Präferenzen bezüglich E-Mails von Rockstar Games in den Einstellungen deines Kontos ändern.","unsubscribe_error_header":"Fehler beim Abbestellen","unsubscribe_info_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_info_header":"Du hast E-Mails bereits abbestellt","unsubscribe_success_description":"Du wirst keine zusätzlichen Marketing-E-Mails von Rockstar Games erhalten. Du kannst dich in den Einstellungen deines Kontos wieder registrieren oder deine Präferenzen bezüglich E-Mails von Rockstar Games ändern.","unsubscribe_success_header":"Erfolgreich abbestellt"},"en-US":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Community Guidelines","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"These guidelines outline the values we uphold and the policies we enforce to ensure player experiences are fair, respectful, and safe.","community_guidelines_tile_header":"Explore Community Guidelines","email_settings_cta":"Update Preferences","footer_community_guidelines_label_text":"Community Guidelines","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Cookie Policy","footer_cookie_settings_label_text":"Cookie Settings","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Handshake icon","heartbook_icon_alt_text":"Book with heart icon","resources_last_updated_date":"November 18, 2024","resources_tile_description":"Quickly find resources if you or someone you know is struggling and in need of help.","resources_tile_header":"Explore Safety Resources","rockstargames_company_info_br":"Brazil","rockstargames_company_info_cz":"Czech Republic","rockstargames_company_info_de":"Germany","rockstargames_company_info_display_for_country":"Display page information for {country}","rockstargames_company_info_es":"Spain","rockstargames_company_info_fr":"France","rockstargames_company_info_it":"Italy","rockstargames_company_info_jp":"Japan","rockstargames_company_info_kr":"South Korea","rockstargames_company_info_mx":"Mexico","rockstargames_company_info_nl":"Netherlands","rockstargames_company_info_pl":"Poland","rockstargames_company_info_ru":"Russian Federation","rockstargames_company_info_sa":"Saudi Arabia","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"United States","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Download {item} {collection}","rockstargames_downloads_dimensions_label":"{width} by {height} pixels.","rockstargames_downloads_go_back":"Go back","rsg_no_results":"Sorry, there were no results.","rsg_total_results_message":"Showing {Tab} filtered by {Query}","safety_get_support_button":"Get Support","safety_learn_more_button":"Learn More","support_chat_icon_alt_text":"Support chat icon","support_tile_description":"For additional assistance with managing your account or data and privacy settings, visit our Customer Support page.","support_tile_header":"Need account assistance?","unsubscribe_error_description":"This URL may be invalid. You can make changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_error_header":"Error Unsubscribing","unsubscribe_info_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_info_header":"You\'re Already Unsubscribed","unsubscribe_success_description":"You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page.","unsubscribe_success_header":"Successfully Unsubscribed"},"es-ES":{"community_guidelines_hero_aria_label":"¡Pide perdón, respeta a los demás!","community_guidelines_hero_title":"Directrices de la comunidad","community_guidelines_image_alt_text":"Say sorry, be nice (pide perdón, sé amable)","community_guidelines_tile_description":"Estas directrices resumen los valores que defendemos y las políticas que aplicamos para asegurarnos de que nuestros jugadores disfrutan de una experiencia justa, respetuosa y segura.","community_guidelines_tile_header":"Ver las directrices de la comunidad","email_settings_cta":"Cambiar tus preferencias","footer_community_guidelines_label_text":"Directrices de la comunidad","footer_contact_label_text":"Contacto","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Ajustes de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nueva York","footer_locations_paris":"París","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Icono de un apretón de manos","heartbook_icon_alt_text":"Icono de un libro con un corazón","resources_last_updated_date":"18 de noviembre de 2024","resources_tile_description":"Encuentra ayuda rápidamente en caso de que tú o alguien que conoces esté pasando por dificultades y necesite apoyo.","resources_tile_header":"Ver los servicios de ayuda","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información para {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federación Rusa","rockstargames_company_info_sa":"Arabia Saudí","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width} por {height} píxeles.","rockstargames_downloads_go_back":"Volver","rsg_no_results":"Lo sentimos, no hay resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Obtén asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Icono de chat de asistencia","support_tile_description":"Si necesitas ayuda adicional para gestionar tu cuenta o tus ajustes de datos o privacidad, visita nuestro sitio web de asistencia técnica.","support_tile_header":"¿Necesitas ayuda con tu cuenta?","unsubscribe_error_description":"Puede que esta URL no sea válida. Puedes cambiar tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_error_header":"Error al cancelar la suscripción","unsubscribe_info_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_info_header":"Ya has cancelado tu suscripción","unsubscribe_success_description":"Ya no recibirás más correos electrónicos comerciales de Rockstar Games. Vuelve a suscribirte o cambia tus preferencias de correos electrónicos de Rockstar Games en la página de Ajustes de tu cuenta.","unsubscribe_success_header":"Has cancelado tu suscripción con éxito"},"es-MX":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Directrices de la comunidad","community_guidelines_image_alt_text":"Imagen con el mensaje: Say Sorry, Be Nice","community_guidelines_tile_description":"Estas directrices describen nuestros valores y las políticas que imponemos para asegurar que las experiencias de los jugadores sean justas, respetuosas y seguras.","community_guidelines_tile_header":"Directrices de la comunidad","email_settings_cta":"Actualizar preferencias","footer_community_guidelines_label_text":"Directrices de la comunidad","footer_contact_label_text":"Contacto","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Configuración de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Ícono de un apretón de manos","heartbook_icon_alt_text":"Ícono de un libro con un corazón","resources_last_updated_date":"18 de noviembre de 2024","resources_tile_description":"Encuentra recursos rápidamente si tú o alguien que conoces necesita ayuda.","resources_tile_header":"Recursos de seguridad","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Checa","rockstargames_company_info_de":"Alemania","rockstargames_company_info_display_for_country":"Mostrar información de página de {country}","rockstargames_company_info_es":"España","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Japón","rockstargames_company_info_kr":"Corea del Sur","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Bajos","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Rusia","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwán","rockstargames_company_info_us":"Estados Unidos de América","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Descargar {item} {collection}","rockstargames_downloads_dimensions_label":"{width}x{height} píxeles.","rockstargames_downloads_go_back":"Atrás","rsg_no_results":"Lo lamentamos, pero no se encontraron resultados.","rsg_total_results_message":"Mostrando {Tab} filtrado por {Query}","safety_get_support_button":"Recibir asistencia","safety_learn_more_button":"Más información","support_chat_icon_alt_text":"Ícono de chat de soporte","support_tile_description":"Para recibir asistencia adicional de tu cuenta, datos o ajustes de privacidad, visita nuestra página de soporte.","support_tile_header":"Asistencia de tu cuenta","unsubscribe_error_description":"La dirección URL podría ser inválida. Puedes cambiar las preferencias de tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_error_header":"Error al darse de baja","unsubscribe_info_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_info_header":"Ya te encuentras dado de baja.","unsubscribe_success_description":"No recibirás más correos de publicidad de Rockstar Games. Puedes suscribirte de nuevo o hacer cambios adicionales a tu correo de Rockstar Games en la página de configuración de cuenta.","unsubscribe_success_header":"Éxito al darse de baja."},"fr-FR":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Règles de la communauté","community_guidelines_image_alt_text":"Image avec le texte en anglais Say Sorry, Be Nice","community_guidelines_tile_description":"Ces règles décrivent nos valeurs et les politiques que nous faisons appliquer pour assurer à tous les joueurs une expérience juste, respectueuse et sûre.","community_guidelines_tile_header":"Explorez nos Règles de la communauté","email_settings_cta":"Mettre vos préférences à jour","footer_community_guidelines_label_text":"Règles de la communauté","footer_contact_label_text":"Contact","footer_cookie_policy_label_text":"Politique en matière de cookies","footer_cookie_settings_label_text":"Paramètres des cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londres","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Icône de poignée de main","heartbook_icon_alt_text":"Icône de livre avec un cœur","resources_last_updated_date":"Le 18 novembre 2024","resources_tile_description":"Trouvez rapidement des ressources si vous, ou une personne que vous connaissez, êtes en difficulté et avez besoin d\'aide.","resources_tile_header":"Explorez nos ressources relatives à la sécurité","rockstargames_company_info_br":"le Brésil","rockstargames_company_info_cz":"la République tchèque","rockstargames_company_info_de":"l\'Allemagne","rockstargames_company_info_display_for_country":"Afficher les informations de la page pour {country}","rockstargames_company_info_es":"l\'Espagne","rockstargames_company_info_fr":"la France","rockstargames_company_info_it":"l\'Italie","rockstargames_company_info_jp":"le Japon","rockstargames_company_info_kr":"la Corée du Sud","rockstargames_company_info_mx":"le Mexique","rockstargames_company_info_nl":"les Pays-Bas","rockstargames_company_info_pl":"la Pologne","rockstargames_company_info_ru":"la Fédération de Russie","rockstargames_company_info_sa":"l\'Arabie saoudite","rockstargames_company_info_tw":"Taïwan","rockstargames_company_info_us":"les États-Unis","rockstargames_company_info_zh":"la Chine","rockstargames_downloads_collections_download_text":"Télécharger ({collection} - {item})","rockstargames_downloads_dimensions_label":"{width}x{height} pixels.","rockstargames_downloads_go_back":"Précédent","rsg_no_results":"Désolé, aucun résultat n\'a été trouvé.","rsg_total_results_message":"Résultats : {Tab} Filtres : {Query}","safety_get_support_button":"Obtenir de l\'aide","safety_learn_more_button":"En savoir plus","support_chat_icon_alt_text":"Icône de discussion de l\'assistance","support_tile_description":"Si vous avez besoin d\'aide supplémentaire pour gérer votre compte ou les paramètres de vos données et de votre confidentialité, rendez-vous sur notre page d\'assistance à la clientèle.","support_tile_header":"Besoin d\'aide pour votre compte ?","unsubscribe_error_description":"Cette URL semble non valide. Vous pouvez modifier vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_error_header":"Une erreur est survenue lors de la désinscription","unsubscribe_info_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réinscrivez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_info_header":"Vous êtes déjà désinscrit(e)","unsubscribe_success_description":"Vous ne recevrez plus d\'e-mails publicitaires de la part de Rockstar Games. Réinscrivez-vous, ou effectuez d\'autres changements relatifs à vos préférences concernant les e-mails de Rockstar Games sur la page des paramètres de votre compte.","unsubscribe_success_header":"Votre désinscription a été prise en compte"},"it-IT":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Linee guida della comunità","community_guidelines_image_alt_text":"Immagine con logo “Say Sorry, Be Nice”.","community_guidelines_tile_description":"Queste linee guida definiscono i valori che sosteniamo e le politiche che applichiamo per assicurare ai giocatori un’esperienza positiva, rispettosa e sicura.","community_guidelines_tile_header":"Scopri le Linee guida della comunità","email_settings_cta":"Aggiorna le preferenze","footer_community_guidelines_label_text":"Linee guida della comunità","footer_contact_label_text":"Contattaci","footer_cookie_policy_label_text":"Politica sui cookie","footer_cookie_settings_label_text":"Impostazioni dei cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londra","footer_locations_new_york":"New York","footer_locations_paris":"Parigi","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Icona della stretta di mano","heartbook_icon_alt_text":"Icona di un libro con un cuore","resources_last_updated_date":"18 novembre 2024","resources_tile_description":"Trova velocemente le risorse che cerchi se tu o qualcuno che conosci è in difficoltà e ha bisogno di aiuto.","resources_tile_header":"Scopri le risorse per la sicurezza","rockstargames_company_info_br":"Brasile","rockstargames_company_info_cz":"Repubblica Ceca","rockstargames_company_info_de":"Germania","rockstargames_company_info_display_for_country":"Mostra informazioni sulla pagina per il paese seguente: {country}","rockstargames_company_info_es":"Spagna","rockstargames_company_info_fr":"Francia","rockstargames_company_info_it":"Italia","rockstargames_company_info_jp":"Giappone","rockstargames_company_info_kr":"Corea del Sud","rockstargames_company_info_mx":"Messico","rockstargames_company_info_nl":"Paesi Bassi","rockstargames_company_info_pl":"Polonia","rockstargames_company_info_ru":"Federazione Russa","rockstargames_company_info_sa":"Arabia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Stati Uniti","rockstargames_company_info_zh":"Cina","rockstargames_downloads_collections_download_text":"Scarica {item} {collection}","rockstargames_downloads_dimensions_label":"{width} per {height} pixel.","rockstargames_downloads_go_back":"Torna indietro","rsg_no_results":"Spiacente, nessun risultato trovato.","rsg_total_results_message":"Scheda {Tab} filtrata per {Query}","safety_get_support_button":"Chiedi assistenza","safety_learn_more_button":"Altre informazioni","support_chat_icon_alt_text":"Icona della chat di assistenza","support_tile_description":"Per ulteriore assistenza sulla gestione del tuo account o dei tuoi data e sulle impostazioni della privacy, visita la nostra pagina del supporto clienti.","support_tile_header":"Hai bisogno di aiuto con il tuo account?","unsubscribe_error_description":"Questo URL potrebbe non essere valido. Puoi apportare modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_error_header":"Errore nel tentativo di annullamento dell’iscrizione","unsubscribe_info_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_info_header":"Hai già annullato l’iscrizione","unsubscribe_success_description":"Non riceverai più email promozionali da Rockstar Games. Puoi riabilitare le email o apportare altre modifiche alle preferenze relative alle email di Rockstar Games nella pagina delle impostazioni dell’account.","unsubscribe_success_header":"Iscrizione annullata con successo"},"ja-JP":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"コミュニティガイドライン","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"このガイドラインでは、プレイヤーの体験が公平で、尊重され、安全であることを保証するため弊社が強化する方針ならびに、弊社が支持する価値観を説明しています。","community_guidelines_tile_header":"コミュニティガイドラインをチェックする","email_settings_cta":"設定を更新","footer_community_guidelines_label_text":"コミュニティガイドライン","footer_contact_label_text":"お問い合せ","footer_cookie_policy_label_text":"クッキーポリシー","footer_cookie_settings_label_text":"クッキー設定","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"握手のアイコン","heartbook_icon_alt_text":"ハートのついた本のアイコン","resources_last_updated_date":"2024年11月18日","resources_tile_description":"あなた自身もしくは知人が困っており、ヘルプが必要な場合の情報を見つける。","resources_tile_header":"安全性に関する情報をチェックする","rockstargames_company_info_br":"ブラジル","rockstargames_company_info_cz":"チェコ","rockstargames_company_info_de":"ドイツ","rockstargames_company_info_display_for_country":"{country}のページを表示する","rockstargames_company_info_es":"スペイン","rockstargames_company_info_fr":"フランス","rockstargames_company_info_it":"イタリア","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韓国","rockstargames_company_info_mx":"メキシコ","rockstargames_company_info_nl":"オランダ","rockstargames_company_info_pl":"ポーランド","rockstargames_company_info_ru":"ロシア連邦","rockstargames_company_info_sa":"サウジアラビア","rockstargames_company_info_tw":"台湾","rockstargames_company_info_us":"アメリカ","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"ダウンロード {item} {collection}","rockstargames_downloads_dimensions_label":"{width}×{height}ピクセル","rockstargames_downloads_go_back":"戻る","rsg_no_results":"申し訳ありません、結果が見つかりませんでした。","rsg_total_results_message":"{Query}でフィルターした{Tab}を表示中","safety_get_support_button":"サポートを依頼する","safety_learn_more_button":"詳細を見る","support_chat_icon_alt_text":"サポートチャットのアイコン","support_tile_description":"アカウントやデータ、プライバシー設定の管理についての追加アシストはカスタマーサポートページをご覧ください。","support_tile_header":"アカウントアシストが必要ですか？","unsubscribe_error_description":"このURLは無効になっている可能性があります。アカウント設定のページでロックスター・ゲームスのメール受信設定を変更できます。","unsubscribe_error_header":"登録解除時にエラー","unsubscribe_info_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_info_header":"登録解除済みです","unsubscribe_success_description":"今後はロックスター・ゲームスからマーケティングのメールを受信しません。アカウント設定のページでロックスター・ゲームスのメール受信設定をさらに変更したり、再登録ができます。","unsubscribe_success_header":"登録解除が完了しました"},"ko-KR":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"커뮤니티 가이드라인","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"공정, 상호 존중, 안전을 바탕으로 한 플레이어 경험을 제공하기 위해 당사에서 추구하는 가치 및 시행하는 정책을 정리한 가이드라인입니다.","community_guidelines_tile_header":"커뮤니티 가이드라인 살펴보기","email_settings_cta":"설정 변경","footer_community_guidelines_label_text":"커뮤니티 가이드라인","footer_contact_label_text":"문의","footer_cookie_policy_label_text":"쿠키 정책","footer_cookie_settings_label_text":"쿠키 설정","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"London","footer_locations_new_york":"New York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"악수 모양 아이콘","heartbook_icon_alt_text":"책과 하트 아이콘","resources_last_updated_date":"2024년 11월 18일","resources_tile_description":"본인 및 주변인에게 도움이 필요하다면 이곳에서 관련 정보를 빠르게 찾아보실 수 있습니다.","resources_tile_header":"안전 관련 정보 살펴보기","rockstargames_company_info_br":"브라질","rockstargames_company_info_cz":"체코 공화국","rockstargames_company_info_de":"독일","rockstargames_company_info_display_for_country":"페이지 내용 표시 - {country}","rockstargames_company_info_es":"스페인","rockstargames_company_info_fr":"프랑스","rockstargames_company_info_it":"이탈리아","rockstargames_company_info_jp":"일본","rockstargames_company_info_kr":"대한민국","rockstargames_company_info_mx":"멕시코","rockstargames_company_info_nl":"네덜란드","rockstargames_company_info_pl":"폴란드","rockstargames_company_info_ru":"러시아 연방","rockstargames_company_info_sa":"사우디 아라비아","rockstargames_company_info_tw":"대만","rockstargames_company_info_us":"미국","rockstargames_company_info_zh":"중국","rockstargames_downloads_collections_download_text":"{collection} {item} 다운로드","rockstargames_downloads_dimensions_label":"{width} x {height} 픽셀입니다.","rockstargames_downloads_go_back":"뒤로가기","rsg_no_results":"죄송합니다, 결과가 없습니다.","rsg_total_results_message":"{Query} 필터를 적용한 {Tab} 보기","safety_get_support_button":"도움 요청하기","safety_learn_more_button":"더 알아보기","support_chat_icon_alt_text":"지원 채팅 아이콘","support_tile_description":"계정, 데이터, 개인 정보 보호 설정을 관리하는 데 추가로 도움이 필요하시다면 저희의 고객 지원 페이지를 방문해주세요.","support_tile_header":"계정 관련 도움이 필요하신가요?","unsubscribe_error_description":"이 URL은 유효하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일 설정을 변경할 수 있습니다.","unsubscribe_error_header":"구독 취소 오류","unsubscribe_info_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_info_header":"이미 구독 취소를 하였습니다","unsubscribe_success_description":"더 이상 Rockstar Games로부터 마케팅 이메일을 수신하지 않습니다. 계정 설정 페이지에서 Rockstar Games 이메일을 다시 구독하거나 설정을 변경할 수 있습니다.","unsubscribe_success_header":"구독 취소 완료"},"pl-PL":{"community_guidelines_hero_aria_label":"Zachowuj się grzecznie!","community_guidelines_hero_title":"Regulamin społeczności","community_guidelines_image_alt_text":"Zachowuj się grzecznie!","community_guidelines_tile_description":"Ten regulamin opisuje wartości, jakimi się kierujemy, jak również zasady, których przestrzegamy, aby zapewnić graczom sprawiedliwe, bezpieczne i pełne szacunku doświadczenia.","community_guidelines_tile_header":"Przeglądaj regulamin społeczności","email_settings_cta":"Aktualizuj swoje preferencje","footer_community_guidelines_label_text":"Regulamin społeczności","footer_contact_label_text":"Kontakt","footer_cookie_policy_label_text":"Polityka plików cookie","footer_cookie_settings_label_text":"Ustawienia plików cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogota","footer_locations_london":"Londyn","footer_locations_new_york":"Nowy Jork","footer_locations_paris":"Paryż","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Ikona uścisku dłoni","heartbook_icon_alt_text":"Zapisz przy pomocy ikony serca","resources_last_updated_date":"18 listopada 2024","resources_tile_description":"Odszukaj szybko informacje, jeżeli ty lub ktoś, kogo znasz, potrzebuje pomocy.","resources_tile_header":"Przeglądaj informacje dotyczące bezpieczeństwa","rockstargames_company_info_br":"Brazylia","rockstargames_company_info_cz":"Czechy","rockstargames_company_info_de":"Niemcy","rockstargames_company_info_display_for_country":"Pokaż informacje dla:","rockstargames_company_info_es":"Hiszpania","rockstargames_company_info_fr":"Francja","rockstargames_company_info_it":"Włochy","rockstargames_company_info_jp":"Japonia","rockstargames_company_info_kr":"Korea Południowa","rockstargames_company_info_mx":"Meksyk","rockstargames_company_info_nl":"Holandia","rockstargames_company_info_pl":"Polska","rockstargames_company_info_ru":"Rosja","rockstargames_company_info_sa":"Arabia Saudyjska","rockstargames_company_info_tw":"Tajwan","rockstargames_company_info_us":"Stany Zjednoczone","rockstargames_company_info_zh":"Chiny","rockstargames_downloads_collections_download_text":"Pobierz: {item} {collection}","rockstargames_downloads_dimensions_label":"{width} na {height} pikseli.","rockstargames_downloads_go_back":"Wróć","rsg_no_results":"Brak wyników.","rsg_total_results_message":"Wyświetlono: {Tab} filtrowanie: {Query}","safety_get_support_button":"Uzyskaj wsparcie","safety_learn_more_button":"Dowiedz się więcej","support_chat_icon_alt_text":"Ikona kontaku ze wsparciem","support_tile_description":"W celu uzyskania dodatkowej pomocy dotyczącej obsługi konta lub ustawień prywatności odwiedź naszą stronę wsparcia.","support_tile_header":"Potrzebujesz wsparcia dotyczącego konta?","unsubscribe_error_description":"Odnośnik może być nieprawidłowy. Możesz zmienić swoje preferencje mailingowe w menu ustawień konta Rockstar Games.","unsubscribe_error_header":"Błąd podczas rezygnacji","unsubscribe_info_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Możesz zapisać się ponownie lub dokonać innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_info_header":"Subskrypcja jest już nieaktywna","unsubscribe_success_description":"Nie będziesz już otrzymywać wiadomości promocyjnych od Rockstar Games. Zapisz się ponownie lub dokonaj innych zmian preferencji mailingowych w menu ustawień konta Rockstar Games.","unsubscribe_success_header":"Zrezygnowano z subskrypcji"},"pt-BR":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Diretrizes da Comunidade","community_guidelines_image_alt_text":"Say Sorry, Be Nice","community_guidelines_tile_description":"Estas regras detalham os valores e políticas que mantêm a experiência de jogo justa, respeitosa e segura.","community_guidelines_tile_header":"Explore as Regras da Comunidade","email_settings_cta":"Atualizar preferências","footer_community_guidelines_label_text":"Diretrizes da Comunidade","footer_contact_label_text":"Entre em contato","footer_cookie_policy_label_text":"Política de cookies","footer_cookie_settings_label_text":"Configurações de cookies","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Bogotá","footer_locations_london":"Londres","footer_locations_new_york":"Nova York","footer_locations_paris":"Paris","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Ícone de aperto de mão","heartbook_icon_alt_text":"Ícone de livro com coração","resources_last_updated_date":"18 de novembro de 2024","resources_tile_description":"Encontre recursos rapidamente se você ou alguém que você conhece precisa de ajuda.","resources_tile_header":"Explore os recursos de segurança","rockstargames_company_info_br":"Brasil","rockstargames_company_info_cz":"República Tcheca","rockstargames_company_info_de":"Alemanha","rockstargames_company_info_display_for_country":"Exibir informações da página para {country}","rockstargames_company_info_es":"Espanha","rockstargames_company_info_fr":"França","rockstargames_company_info_it":"Itália","rockstargames_company_info_jp":"Japão","rockstargames_company_info_kr":"Coreia do Sul","rockstargames_company_info_mx":"México","rockstargames_company_info_nl":"Países Baixos","rockstargames_company_info_pl":"Polônia","rockstargames_company_info_ru":"Federação da Rússia","rockstargames_company_info_sa":"Arábia Saudita","rockstargames_company_info_tw":"Taiwan","rockstargames_company_info_us":"Estados Unidos","rockstargames_company_info_zh":"China","rockstargames_downloads_collections_download_text":"Baixar {collection} de {item}","rockstargames_downloads_dimensions_label":"{width} x {height} pixels.","rockstargames_downloads_go_back":"Voltar","rsg_no_results":"Nenhum resultado foi encontrado.","rsg_total_results_message":"Mostrando {Tab} com o filtro {Query}","safety_get_support_button":"Acionar suporte","safety_learn_more_button":"Saiba mais","support_chat_icon_alt_text":"Ícone de chat de suporte","support_tile_description":"Para mais ajuda com o gerenciamento da sua conta, dados e configurações de privacidade, acesse a página de suporte.","support_tile_header":"Precisa de ajuda com a sua conta?","unsubscribe_error_description":"Esta URL pode ser inválida. Você pode aplicar mudanças às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_error_header":"Erro ao cancelar inscrição","unsubscribe_info_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_info_header":"Você já cancelou a inscrição","unsubscribe_success_description":"Você não receberá mais e-mails de marketing da Rockstar Games. Escolha receber e-mails de marketing novamente ou aplique mudanças adicionais às suas preferências de e-mail da Rockstar Games na página de Configurações da conta.","unsubscribe_success_header":"Inscrição cancelada"},"ru-RU":{"community_guidelines_hero_aria_label":"Say Sorry, Be Nice!","community_guidelines_hero_title":"Правила сообщества","community_guidelines_image_alt_text":"Надпись Say Sorry, Be Nice","community_guidelines_tile_description":"В этих правилах изложены ценности, которых мы придерживаемся, и политики, которые мы применяем для обеспечения честной, уважительной и безопасной игры для всех.","community_guidelines_tile_header":"Ознакомьтесь с правилами сообщества","email_settings_cta":"Изменить настройки","footer_community_guidelines_label_text":"Правила сообщества","footer_contact_label_text":"Связаться с нами","footer_cookie_policy_label_text":"Политика использования файлов Cookie","footer_cookie_settings_label_text":"Настройки файлов Cookie","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"Богота","footer_locations_london":"Лондон","footer_locations_new_york":"Нью-Йорк","footer_locations_paris":"Париж","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"Значок рукопожатия","heartbook_icon_alt_text":"Значок книги с сердцем","resources_last_updated_date":"18 ноября 2024 года","resources_tile_description":"Быстро найдите интернет-ресурсы, если вы или кто-то из ваших знакомых испытывает трудности и нуждается в помощи.","resources_tile_header":"Ознакомьтесь с ресурсами по психологической поддержке","rockstargames_company_info_br":"Бразилии","rockstargames_company_info_cz":"Чехии","rockstargames_company_info_de":"Германии","rockstargames_company_info_display_for_country":"Показать содержимое страницы для {country}","rockstargames_company_info_es":"Испании","rockstargames_company_info_fr":"Франции","rockstargames_company_info_it":"Италии","rockstargames_company_info_jp":"Японии","rockstargames_company_info_kr":"Южной Кореи","rockstargames_company_info_mx":"Мексики","rockstargames_company_info_nl":"Нидерландов","rockstargames_company_info_pl":"Польши","rockstargames_company_info_ru":"России","rockstargames_company_info_sa":"Саудовской Аравии","rockstargames_company_info_tw":"Тайваня","rockstargames_company_info_us":"США","rockstargames_company_info_zh":"Китая","rockstargames_downloads_collections_download_text":"Загрузить: «{item}» из коллекции «{collection}».","rockstargames_downloads_dimensions_label":"{width} на {height} пикселей.","rockstargames_downloads_go_back":"Вернуться","rsg_no_results":"Результаты не найдены.","rsg_total_results_message":"Поиск в категории {Tab} с фильтром «{Query}»","safety_get_support_button":"Обратиться в службу поддержки","safety_learn_more_button":"Подробности","support_chat_icon_alt_text":"Значок службы поддержки","support_tile_description":"Для получения дополнительной помощи по управлению вашей учетной записью или данными и настройками конфиденциальности посетите нашу страницу поддержки клиентов.","support_tile_header":"Нужна помощь с учетной записью?","unsubscribe_error_description":"Возможно, этот адрес недействителен. Вы можете изменить настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_error_header":"Ошибка при отмене подписки","unsubscribe_info_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_info_header":"Вы уже отменили подписку","unsubscribe_success_description":"Вы больше не будете получать никаких рекламных писем от Rockstar Games. Подпишитесь заново или внесите другие изменения в настройки электронной почты Rockstar Games на странице настроек учетной записи.","unsubscribe_success_header":"Подписка отменена"},"zh-CN":{"community_guidelines_hero_aria_label":"说声对不起，做个好人！","community_guidelines_hero_title":"社区指南","community_guidelines_image_alt_text":"说声对不起，做个好人","community_guidelines_tile_description":"指南中列出了我们秉持的价值观和遵循的政策原则，为玩家营造公平、尊重和安全的游玩体验。","community_guidelines_tile_header":"查看社区指南","email_settings_cta":"更新偏好设置","footer_community_guidelines_label_text":"社区指南","footer_contact_label_text":"联系我们","footer_cookie_policy_label_text":"Cookie 政策","footer_cookie_settings_label_text":"Cookie 设置","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"伦敦","footer_locations_new_york":"纽约","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"握手图标","heartbook_icon_alt_text":"书上印着一颗心的图标","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"如果您自己，或者您知道的其他人需要帮助，在这里可以快速找到相关内容。","resources_tile_header":"查看“安全”相关内容","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克","rockstargames_company_info_de":"德国","rockstargames_company_info_display_for_country":"显示{country}的页面信息","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法国","rockstargames_company_info_it":"意大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"韩国","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷兰","rockstargames_company_info_pl":"波兰","rockstargames_company_info_ru":"俄罗斯联邦","rockstargames_company_info_sa":"沙特阿拉伯","rockstargames_company_info_tw":"台湾地区","rockstargames_company_info_us":"美国","rockstargames_company_info_zh":"中国","rockstargames_downloads_collections_download_text":"下载 {item} 的 {collection}","rockstargames_downloads_dimensions_label":"{width} X {height} 像素","rockstargames_downloads_go_back":"返回","rsg_no_results":"抱歉，没有搜索结果。","rsg_total_results_message":"按 {filterList} 筛选显示 {type}","safety_get_support_button":"寻求支持","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支持对话图标","support_tile_description":"如果您在管理账户或数据，或者设置隐私选项时需要额外的帮助，请前往客户支持页面。","support_tile_header":"需要账户相关的帮助吗？","unsubscribe_error_description":"此网址可能无效。您可以在账户设置页面更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_error_header":"取消订阅出错","unsubscribe_info_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_info_header":"您已经取消订阅","unsubscribe_success_description":"您将不会收到更多 Rockstar Games 营销邮件。您可以在账户设置页面重新订阅或更改您的 Rockstar Games 邮件偏好设置。","unsubscribe_success_header":"取消订阅成功"},"zh-TW":{"community_guidelines_hero_aria_label":"敢於道歉，友善待人！","community_guidelines_hero_title":"社群守則","community_guidelines_image_alt_text":"敢於道歉，友善待人","community_guidelines_tile_description":"我們以此守則簡述所遵循的價值觀，以及我們為了確保公平、尊重與安全的玩家體驗所執行的政策。","community_guidelines_tile_header":"探索社群守則","email_settings_cta":"更新偏好設定","footer_community_guidelines_label_text":"社群守則","footer_contact_label_text":"聯絡方式","footer_cookie_policy_label_text":"Cookie 政策","footer_cookie_settings_label_text":"Cookie 設定","footer_established_date_numerical":"1998","footer_established_date_roman":"MCMXCVIII","footer_locations_bogota":"波哥大","footer_locations_london":"倫敦","footer_locations_new_york":"紐約","footer_locations_paris":"巴黎","footer_rockstar_games":"Rockstar Games","handshake_icon_alt_text":"握手圖示","heartbook_icon_alt_text":"書本上有心形的圖示","resources_last_updated_date":"2024 年 11 月 18 日","resources_tile_description":"若您或您認識的人遭逢困難或需要協助，您可以快速尋找資源。","resources_tile_header":"探索安全資源","rockstargames_company_info_br":"巴西","rockstargames_company_info_cz":"捷克共和國","rockstargames_company_info_de":"德國","rockstargames_company_info_display_for_country":"顯示頁面資訊：{country}","rockstargames_company_info_es":"西班牙","rockstargames_company_info_fr":"法國","rockstargames_company_info_it":"義大利","rockstargames_company_info_jp":"日本","rockstargames_company_info_kr":"南韓","rockstargames_company_info_mx":"墨西哥","rockstargames_company_info_nl":"荷蘭","rockstargames_company_info_pl":"波蘭","rockstargames_company_info_ru":"俄羅斯聯邦","rockstargames_company_info_sa":"沙烏地阿拉伯","rockstargames_company_info_tw":"台灣","rockstargames_company_info_us":"美國","rockstargames_company_info_zh":"中國","rockstargames_downloads_collections_download_text":"下載「{item}」的「{collection}」","rockstargames_downloads_dimensions_label":"像素：{width} x {height}。","rockstargames_downloads_go_back":"返回","rsg_no_results":"很抱歉，無相符的搜尋結果。","rsg_total_results_message":"正在顯示 {Tab}，搜尋條件為 {Query}","safety_get_support_button":"取得支援","safety_learn_more_button":"了解更多","support_chat_icon_alt_text":"支援文字對話圖示","support_tile_description":"如需管理您帳戶、資料或隱私權設定的額外協助，請造訪我們的客戶支援頁面。","support_tile_header":"需要帳戶協助？","unsubscribe_error_description":"這個網址可能無效。您可以在帳戶設定頁面變更您的 Rockstar Games 電子郵件偏好設定。","unsubscribe_error_header":"取消訂閱錯誤","unsubscribe_info_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_info_header":"您已經取消訂閱。","unsubscribe_success_description":"您將不會收到任何其他來自 Rockstar Games 的行銷電子郵件。在帳戶設定頁面重新訂閱，或為您的 Rockstar Games 電子郵件偏好設定進行其他變更。","unsubscribe_success_header":"取消訂閱成功"}}')
    }
  }
]);