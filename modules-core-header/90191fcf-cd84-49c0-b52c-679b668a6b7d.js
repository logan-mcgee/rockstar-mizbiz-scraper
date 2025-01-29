! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "90191fcf-cd84-49c0-b52c-679b668a6b7d", e._sentryDebugIdIdentifier = "sentry-dbid-90191fcf-cd84-49c0-b52c-679b668a6b7d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [948, 901, 429, 810], {
    901: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => s
      });
      var r = a(8096);
      const s = e => {
        let {
          to: t,
          target: a,
          className: s,
          onNavigate: o,
          onClick: n,
          reloadDocument: i,
          children: c,
          ...l
        } = e;
        const d = t?.startsWith("http");
        return (0, r.jsx)("a", {
          href: t,
          className: s,
          onClick: e => {
            n?.(e), d || i || (o ? (e.preventDefault(), o(t)) : (e.preventDefault(), window.history.pushState({}, "", t)))
          },
          target: a,
          ...l,
          children: c
        })
      }
    },
    6657: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var r = a(5966);
      const s = (0, r.getScConfigForOrigin)(),
        o = (0, r.makeVar)(s)
    },
    5230: (e, t, a) => {
      "use strict";
      a.d(t, {
        F: () => s
      });
      var r = a(2229);
      const s = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
        return (0, r.useMemo)((() => {
          const r = e?.characters?.[a];
          return "1" === (r?.[t]?.stats?.overview?.hasGtaPlus?.value ?? "0")
        }), [e, a, t])
      }
    },
    8854: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => x,
        K: () => p
      });
      var r = a(5966);
      const s = (0, r.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, r.makeVar)(null)
        }),
        o = e => s(e),
        n = (0, r.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, r.makeVar)(!1)
        }),
        i = e => n(e),
        c = (0, r.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, r.makeVar)(!1)
        }),
        l = e => c(e),
        d = (0, r.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, r.makeVar)((0, r.lsSettingsReactive)()?.currentCharId)
        }),
        m = e => d(e),
        u = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        g = e => u(e),
        p = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        h = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(null)
        }),
        f = e => h(e),
        b = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        v = e => b(e),
        x = () => {
          const e = (0, r.useReactiveVar)(h),
            t = (0, r.useReactiveVar)(d),
            a = (0, r.useReactiveVar)(s),
            p = (0, r.useReactiveVar)(c),
            x = (0, r.useReactiveVar)(u);
          return {
            charactersNeeded: e,
            currentCharId: t,
            hasNotifications: p,
            navOpen: a,
            userData: (0, r.useReactiveVar)(b),
            selectedCharacterTuple: x,
            jumpScMenuFocus: (0, r.useReactiveVar)(n),
            setCharactersNeeded: f,
            setCurrentCharId: m,
            setHasNotifications: l,
            setNavOpen: o,
            setSelectedCharacterTuple: g,
            setUserData: v,
            setJumpScMenuFocus: i
          }
        }
    },
    5327: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        scConfig: () => i.A,
        useGtmTrack: () => r.h,
        useIsUserGtaPlus: () => s.F,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => o.A,
        useScConfig: () => c
      });
      var r = a(1147),
        s = a(5230),
        o = a(8854),
        n = a(5966),
        i = a(6657);
      const c = () => (0, n.useReactiveVar)(i.A)
    },
    1147: (e, t, a) => {
      "use strict";
      a.d(t, {
        UN: () => y,
        iR: () => f,
        h: () => j,
        Wx: () => b
      });
      var r = a(2229),
        s = a(5966),
        o = a(8854);
      var n = a(8384),
        i = a.n(n),
        c = a(6657);
      var l = a(3428);
      const {
        graphEnv: d
      } = (0, s.getScConfigForOrigin)(), m = (0, s.getUriForGraphEnv)(d), u = () => {
        const e = (0, s.useRockstarToken)(),
          [t, a] = (0, r.useState)({
            id: null,
            avatar: "",
            profile_link: "",
            nickname: "",
            crews: [],
            characters: {
              gtao: []
            }
          }),
          [n, d] = (0, r.useState)(!0),
          [u, g] = (0, s.useRockstarTokenReactive)(),
          p = (0, s.useRockstarTokenPing)(),
          {
            refetch: h
          } = (0, s.useQuery)(l.userData, {
            skip: !0,
            context: {
              uri: m
            }
          }),
          [f, b] = (0, r.useState)(null),
          [v, x] = (0, r.useState)(!1),
          [k, _] = (0, r.useState)(!1);
        return (0, r.useEffect)((() => {
          (async () => {
            const r = null === e ? null : !!e;
            if (r && !v) {
              d(!0), x(!0);
              const e = await h(),
                r = e?.data?.user?.id,
                n = await (async e => {
                  let {
                    pingBearer: t,
                    rockstarId: a
                  } = e;
                  const {
                    crews: r
                  } = await (0, s.coreScApiFetch)("crew/forMember", {
                    pingBearer: t,
                    query: {
                      userId: a
                    }
                  });
                  return r
                })({
                  pingBearer: p,
                  rockstarId: r
                }),
                i = await (async e => {
                  let {
                    pingBearer: t,
                    nickname: a,
                    rockstarId: r
                  } = e;
                  const o = [],
                    n = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  if (await (n?.platforms?.reduce((async (e, a) => {
                      if (await e, ["ps3", "xbox", "xbox360"].includes(a)) return;
                      const r = await (0, s.coreScApiFetch)(`games/gtao/characters?platform=${a}`, {
                        pingBearer: t
                      });
                      r?.status && r?.result?.map((e => {
                        const {
                          stats: t
                        } = e, {
                          overview: r
                        } = t, {
                          rank: s
                        } = r;
                        if ("0" === s.value) return;
                        const n = ["ps4", "ps5"].includes(a) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return o.push({
                          ...e,
                          mugshotUrl: n,
                          platform: a
                        }), e
                      }))
                    }), Promise.resolve())), !o.length) return o;
                  const {
                    status: i,
                    accounts: c
                  } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${a}&maxFriends=0`, {
                    pingBearer: t
                  });
                  return i && c.length ? (c.forEach((e => {
                    const {
                      rockstarAccount: t,
                      linkedAccounts: s
                    } = e;
                    if (t?.rockstarId !== r) return;
                    const n = a;
                    let i = "",
                      c = "";
                    s?.map((e => ("xbl" === e?.onlineService ? i = e.userName : "np" === e?.onlineService && (c = e.userName), e))), o.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), o.map(((e, t) => (e.platformUsername = n, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = c || n), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = i || n), e)))
                  })), o) : o
                })({
                  pingBearer: p,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: r
                }),
                c = {
                  ...t,
                  ...e?.data?.user,
                  crews: n,
                  characters: {
                    gtao: i
                  }
                };
              d(!1), a(c), b(!0), (0, o.K)(r)
            }
            if (!1 === r && !k) {
              try {
                await (async e => {
                  let {
                    token: t,
                    tokenPingExpires: a
                  } = e;
                  const r = {
                      method: "POST",
                      body: `fingerprint=${await i().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    },
                    s = await fetch((0, c.A)().silentCheck, r);
                  if (200 !== s.status) return void t(!1);
                  const o = await s.json(),
                    n = `${(0,c.A)().gateway}?code=${o}`,
                    l = await fetch(n, {
                      credentials: "include"
                    }),
                    {
                      bearerToken: d,
                      tokenExpiresTime: m
                    } = await l.json();
                  return t(d), a(m), d
                })({
                  token: u,
                  tokenPingExpires: g
                })
              } catch (e) {}
              _(!0)
            }!1 === r && k && (x(!0), b(!1), d(!1)), null === e && p()
          })()
        }), [e, v, k]), {
          data: t,
          loading: n,
          loggedIn: f
        }
      };
      var g = a(8096);
      const p = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        h = (0, s.setContextItem)({
          context: (0, r.createContext)(p),
          key: "userContext"
        }),
        f = e => {
          let {
            children: t
          } = e;
          const a = u(),
            s = (0, r.useMemo)((() => ({
              ...a,
              hasProvider: !0
            })), [a]);
          return (0, g.jsx)(h.Provider, {
            value: s,
            children: t
          })
        },
        b = () => (0, r.useContext)(h);
      var v = a(5327),
        x = a(5230),
        k = a(6082);
      const _ = (0, s.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        y = e => {
          let {
            checkUser: t,
            children: a
          } = e;
          const o = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, a] = (0, r.useState)([]), [o, n] = (0, r.useState)([]), [i, c] = (0, r.useState)(null), {
                data: l,
                loggedIn: d
              } = (0, v.useRockstarUser)(), {
                currentCharId: m
              } = (0, v.useRockstarUserState)(), u = (0, x.F)(l, m), g = (0, k.bn)(), p = (e, r) => {
                const o = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = r ?? {};
                    (0, s.track)({
                      ...e,
                      ...t
                    }), o.push(e)
                  }
                })), a([...t, ...o])
              };
              (0, r.useEffect)((() => {
                if (l && null !== d) {
                  const e = h(l);
                  o.length && e && p(o, e), c(e)
                } else e || o.length && p(o)
              }), [l, d, o]), (0, r.useEffect)((() => {
                const e = o.filter((e => -1 === t.indexOf(e)));
                n(e)
              }), [t]);
              const h = e => {
                const t = [],
                  a = [],
                  r = [];
                return Object.keys(e.characters).forEach((s => {
                  e.characters[s].length && (a.push(s), e.characters[s].forEach((e => {
                    "gtao" === s && (r.includes(e.platform) || r.push(e.platform)), t.includes(e.platform) || t.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: d ?? !1,
                  gta_plus_active: d ? Boolean(u) : void 0,
                  platforms_played: t.length ? t.join("|").toUpperCase() : void 0,
                  games_played: a.length ? a.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: r.length ? r.join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: g
                }
              };
              return {
                track: e => {
                  if (null === d || !l || !i) {
                    const t = [...o];
                    return t.push({
                      ...e
                    }), n(t)
                  }
                  return (0, s.track)({
                    ...e,
                    ...i
                  })
                }
              }
            }(t),
            n = (0, r.useMemo)((() => o), [o, t]);
          return (0, g.jsx)(_.Provider, {
            value: n,
            children: a
          })
        },
        w = {
          track: () => null
        },
        j = () => (0, r.useContext)(_) ?? w
    },
    9396: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => eo
      });
      var r = a(1788),
        s = a(2918),
        o = a(1147),
        n = a(5966),
        i = a(2229);
      var c = a(8096);
      class l extends i.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-headerd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, c.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, c.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      var d = a(6454),
        m = a(5138);
      const u = (0, i.createContext)({
          environment: {
            id: "",
            sites: {
              www: "",
              socialClub: "",
              support: "",
              store: ""
            },
            cookieIdentifier: ""
          },
          navigationData: {
            site: "",
            brand: "rockstar",
            links: [],
            appearancePaths: ["/*"]
          },
          location: window.location,
          onNavigate: () => {},
          locale: "",
          rockstarUser: {
            id: 0,
            avatar: "",
            profile_link: "",
            nickname: "",
            crews: [],
            characters: {
              gtao: []
            }
          },
          openedDropdown: null,
          setOpenedDropdown: () => {},
          routeOptions: {
            isSearchPage: !1,
            forceSearch: !1
          },
          searchConfig: {
            targets: []
          }
        }),
        g = e => {
          let {
            navData: t,
            location: a,
            onNavigate: o,
            routeOptions: n,
            children: l,
            searchConfig: d
          } = e;
          const [g, p] = (0, i.useState)(null), [h, f] = (0, i.useMemo)((() => (0, r.getLocale)()), []), {
            hash: b
          } = a, {
            data: v
          } = (0, s.useRockstarUser)(), x = (0, m.A)(), k = (0, i.useMemo)((() => {
            const e = {
              ...a,
              ...window.location
            };
            return {
              navigationData: t,
              onNavigate: o,
              environment: x,
              location: e,
              locale: h,
              rockstarUser: v,
              openedDropdown: g,
              setOpenedDropdown: p,
              routeOptions: n,
              searchConfig: d
            }
          }), [t, h, JSON.stringify(a), x, g, n, v]);
          return (0, i.useEffect)((() => {
            f(h.iso);
            const e = () => p(null);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", e)
            }
          }), []), (0, i.useEffect)((() => {
            const e = b?.replace("#", "");
            if (!e) return () => {};
            const t = setInterval((() => {
                const a = document.getElementById(e);
                a && (clearInterval(t), window.scrollTo({
                  top: a.offsetTop,
                  behavior: "smooth"
                }))
              }), 200),
              a = setTimeout((() => clearInterval(t)), 1e4);
            return () => {
              clearTimeout(a), clearInterval(t)
            }
          }), [b]), (0, c.jsx)(u.Provider, {
            value: k,
            children: l
          })
        },
        p = () => {
          const e = (0, i.useContext)(u);
          if (void 0 === e) throw new Error("useDomainEnvironment must be used within a Navigation Provider");
          return e.environment
        },
        h = () => {
          const e = (0, i.useContext)(u);
          if (void 0 === e) throw new Error("useRockstarUserProfile must be used within a Navigation Provider");
          return e.rockstarUser
        },
        f = () => {
          const e = (0, i.useContext)(u);
          if (void 0 === e) throw new Error("useOpenDropdown must be used within a Navigation Provider");
          const {
            openedDropdown: t,
            setOpenedDropdown: a
          } = e;
          return [t, e => {
            a(e === t ? null : e)
          }]
        },
        b = () => {
          const e = (0, i.useContext)(u);
          if (void 0 === e) throw new Error("useSearchConfig must be used within a Navigation Provider");
          return e.searchConfig
        },
        v = () => {
          const e = (0, i.useContext)(u);
          if (void 0 === e) throw new Error("useRouteOptions must be used within a Navigation Provider");
          return e.routeOptions
        },
        x = () => {
          const e = (0, i.useContext)(u);
          if (void 0 === e) throw new Error("useWindowLocation must be used within a Navigation Provider");
          return e.location
        },
        k = () => {
          const e = (0, i.useContext)(u);
          if (void 0 === e) throw new Error("useOnNavigate must be used within a Navigation Provider");
          return e.onNavigate
        };
      var _ = a(3581);
      let y, w, j, T, C, S, M, N, E, O, I, P, R, A, z = () => y || "undefined" != typeof window && (y = window.gsap) && y.registerPlugin && y,
        D = 1,
        B = [],
        L = [],
        F = [],
        U = Date.now,
        V = (e, t) => t,
        $ = (e, t) => ~F.indexOf(e) && F[F.indexOf(e) + 1][t],
        q = e => !!~I.indexOf(e),
        Y = (e, t, a, r, s) => e.addEventListener(t, a, {
          passive: !r,
          capture: !!s
        }),
        X = (e, t, a, r) => e.removeEventListener(t, a, !!r),
        W = "scrollLeft",
        G = "scrollTop",
        H = () => P && P.isPressed || L.cache++,
        K = (e, t) => {
          let a = r => {
            if (r || 0 === r) {
              D && (T.history.scrollRestoration = "manual");
              let t = P && P.isPressed;
              r = a.v = Math.round(r) || (P && P.iOS ? 1 : 0), e(r), a.cacheID = L.cache, t && V("ss", r)
            } else(t || L.cache !== a.cacheID || V("ref")) && (a.cacheID = L.cache, a.v = e());
            return a.v + a.offset
          };
          return a.offset = 0, e && a
        },
        Q = {
          s: W,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: K((function(e) {
            return arguments.length ? T.scrollTo(e, J.sc()) : T.pageXOffset || C[W] || S[W] || M[W] || 0
          }))
        },
        J = {
          s: G,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: Q,
          sc: K((function(e) {
            return arguments.length ? T.scrollTo(Q.sc(), e) : T.pageYOffset || C[G] || S[G] || M[G] || 0
          }))
        },
        Z = (e, t) => (t && t._ctx && t._ctx.selector || y.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== y.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        ee = (e, t) => {
          let {
            s: a,
            sc: r
          } = t;
          q(e) && (e = C.scrollingElement || S);
          let s = L.indexOf(e),
            o = r === J.sc ? 1 : 2;
          !~s && (s = L.push(e) - 1), L[s + o] || Y(e, "scroll", H);
          let n = L[s + o],
            i = n || (L[s + o] = K($(e, a), !0) || (q(e) ? r : K((function(t) {
              return arguments.length ? e[a] = t : e[a]
            }))));
          return i.target = e, n || (i.smooth = "smooth" === y.getProperty(e, "scrollBehavior")), i
        },
        te = (e, t, a) => {
          let r = e,
            s = e,
            o = U(),
            n = o,
            i = t || 50,
            c = Math.max(500, 3 * i),
            l = (e, t) => {
              let c = U();
              t || c - o > i ? (s = r, r = e, n = o, o = c) : a ? r += e : r = s + (e - s) / (c - n) * (o - n)
            };
          return {
            update: l,
            reset: () => {
              s = r = a ? 0 : r, n = o = 0
            },
            getVelocity: e => {
              let t = n,
                i = s,
                d = U();
              return (e || 0 === e) && e !== r && l(e), o === n || d - n > c ? 0 : (r + (a ? i : -i)) / ((a ? d : o) - t) * 1e3
            }
          }
        },
        ae = (e, t) => (t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        re = e => {
          let t = Math.max(...e),
            a = Math.min(...e);
          return Math.abs(t) >= Math.abs(a) ? t : a
        },
        se = () => {
          O = y.core.globals().ScrollTrigger, O && O.core && (() => {
            let e = O.core,
              t = e.bridge || {},
              a = e._scrollers,
              r = e._proxies;
            a.push(...L), r.push(...F), L = a, F = r, V = (e, a) => t[e](a)
          })()
        },
        oe = e => (y = e || z(), y && "undefined" != typeof document && document.body && (T = window, C = document, S = C.documentElement, M = C.body, I = [T, C, S, M], j = y.utils.clamp, A = y.core.context || function() {}, E = "onpointerenter" in M ? "pointer" : "mouse", N = ne.isTouch = T.matchMedia && T.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in T || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, R = ne.eventTypes = ("ontouchstart" in S ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in S ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => D = 0), 500), se(), w = 1), w);
      Q.op = J, L.cache = 0;
      class ne {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          w || oe(y) || console.warn("Please gsap.registerPlugin(Observer)"), O || se();
          let {
            tolerance: t,
            dragMinimum: a,
            type: r,
            target: s,
            lineHeight: o,
            debounce: n,
            preventDefault: i,
            onStop: c,
            onStopDelay: l,
            ignore: d,
            wheelSpeed: m,
            event: u,
            onDragStart: g,
            onDragEnd: p,
            onDrag: h,
            onPress: f,
            onRelease: b,
            onRight: v,
            onLeft: x,
            onUp: k,
            onDown: _,
            onChangeX: j,
            onChangeY: I,
            onChange: z,
            onToggleX: D,
            onToggleY: L,
            onHover: F,
            onHoverEnd: V,
            onMove: $,
            ignoreCheck: W,
            isNormalizer: G,
            onGestureStart: K,
            onGestureEnd: ne,
            onWheel: ie,
            onEnable: ce,
            onDisable: le,
            onClick: de,
            scrollSpeed: me,
            capture: ue,
            allowClicks: ge,
            lockAxis: pe,
            onLockAxis: he
          } = e;
          this.target = s = Z(s) || S, this.vars = e, d && (d = y.utils.toArray(d)), t = t || 1e-9, a = a || 0, m = m || 1, me = me || 1, r = r || "wheel,touch,pointer", n = !1 !== n, o || (o = parseFloat(T.getComputedStyle(M).lineHeight) || 22);
          let fe, be, ve, xe, ke, _e, ye, we = this,
            je = 0,
            Te = 0,
            Ce = ee(s, Q),
            Se = ee(s, J),
            Me = Ce(),
            Ne = Se(),
            Ee = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === R[0],
            Oe = q(s),
            Ie = s.ownerDocument || C,
            Pe = [0, 0, 0],
            Re = [0, 0, 0],
            Ae = 0,
            ze = () => Ae = U(),
            De = (e, t) => (we.event = e) && d && ~d.indexOf(e.target) || t && Ee && "touch" !== e.pointerType || W && W(e, t),
            Be = () => {
              let e = we.deltaX = re(Pe),
                a = we.deltaY = re(Re),
                r = Math.abs(e) >= t,
                s = Math.abs(a) >= t;
              z && (r || s) && z(we, e, a, Pe, Re), r && (v && we.deltaX > 0 && v(we), x && we.deltaX < 0 && x(we), j && j(we), D && we.deltaX < 0 != je < 0 && D(we), je = we.deltaX, Pe[0] = Pe[1] = Pe[2] = 0), s && (_ && we.deltaY > 0 && _(we), k && we.deltaY < 0 && k(we), I && I(we), L && we.deltaY < 0 != Te < 0 && L(we), Te = we.deltaY, Re[0] = Re[1] = Re[2] = 0), (xe || ve) && ($ && $(we), ve && (h(we), ve = !1), xe = !1), _e && !(_e = !1) && he && he(we), ke && (ie(we), ke = !1), fe = 0
            },
            Le = (e, t, a) => {
              Pe[a] += e, Re[a] += t, we._vx.update(e), we._vy.update(t), n ? fe || (fe = requestAnimationFrame(Be)) : Be()
            },
            Fe = (e, t) => {
              pe && !ye && (we.axis = ye = Math.abs(e) > Math.abs(t) ? "x" : "y", _e = !0), "y" !== ye && (Pe[2] += e, we._vx.update(e, !0)), "x" !== ye && (Re[2] += t, we._vy.update(t, !0)), n ? fe || (fe = requestAnimationFrame(Be)) : Be()
            },
            Ue = e => {
              if (De(e, 1)) return;
              let t = (e = ae(e, i)).clientX,
                r = e.clientY,
                s = t - we.x,
                o = r - we.y,
                n = we.isDragging;
              we.x = t, we.y = r, (n || Math.abs(we.startX - t) >= a || Math.abs(we.startY - r) >= a) && (h && (ve = !0), n || (we.isDragging = !0), Fe(s, o), n || g && g(we))
            },
            Ve = we.onPress = e => {
              De(e, 1) || e && e.button || (we.axis = ye = null, be.pause(), we.isPressed = !0, e = ae(e), je = Te = 0, we.startX = we.x = e.clientX, we.startY = we.y = e.clientY, we._vx.reset(), we._vy.reset(), Y(G ? s : Ie, R[1], Ue, i, !0), we.deltaX = we.deltaY = 0, f && f(we))
            },
            $e = we.onRelease = e => {
              if (De(e, 1)) return;
              X(G ? s : Ie, R[1], Ue, !0);
              let t = !isNaN(we.y - we.startY),
                a = we.isDragging && (Math.abs(we.x - we.startX) > 3 || Math.abs(we.y - we.startY) > 3),
                r = ae(e);
              !a && t && (we._vx.reset(), we._vy.reset(), i && ge && y.delayedCall(.08, (() => {
                if (U() - Ae > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (Ie.createEvent) {
                  let t = Ie.createEvent("MouseEvents");
                  t.initMouseEvent("click", !0, !0, T, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                }
              }))), we.isDragging = we.isGesturing = we.isPressed = !1, c && !G && be.restart(!0), p && a && p(we), b && b(we, a)
            },
            qe = e => e.touches && e.touches.length > 1 && (we.isGesturing = !0) && K(e, we.isDragging),
            Ye = () => (we.isGesturing = !1) || ne(we),
            Xe = e => {
              if (De(e)) return;
              let t = Ce(),
                a = Se();
              Le((t - Me) * me, (a - Ne) * me, 1), Me = t, Ne = a, c && be.restart(!0)
            },
            We = e => {
              if (De(e)) return;
              e = ae(e, i), ie && (ke = !0);
              let t = (1 === e.deltaMode ? o : 2 === e.deltaMode ? T.innerHeight : 1) * m;
              Le(e.deltaX * t, e.deltaY * t, 0), c && !G && be.restart(!0)
            },
            Ge = e => {
              if (De(e)) return;
              let t = e.clientX,
                a = e.clientY,
                r = t - we.x,
                s = a - we.y;
              we.x = t, we.y = a, xe = !0, (r || s) && Fe(r, s)
            },
            He = e => {
              we.event = e, F(we)
            },
            Ke = e => {
              we.event = e, V(we)
            },
            Qe = e => De(e) || ae(e, i) && de(we);
          be = we._dc = y.delayedCall(l || .25, (() => {
            we._vx.reset(), we._vy.reset(), be.pause(), c && c(we)
          })).pause(), we.deltaX = we.deltaY = 0, we._vx = te(0, 50, !0), we._vy = te(0, 50, !0), we.scrollX = Ce, we.scrollY = Se, we.isDragging = we.isGesturing = we.isPressed = !1, A(this), we.enable = e => (we.isEnabled || (Y(Oe ? Ie : s, "scroll", H), r.indexOf("scroll") >= 0 && Y(Oe ? Ie : s, "scroll", Xe, i, ue), r.indexOf("wheel") >= 0 && Y(s, "wheel", We, i, ue), (r.indexOf("touch") >= 0 && N || r.indexOf("pointer") >= 0) && (Y(s, R[0], Ve, i, ue), Y(Ie, R[2], $e), Y(Ie, R[3], $e), ge && Y(s, "click", ze, !1, !0), de && Y(s, "click", Qe), K && Y(Ie, "gesturestart", qe), ne && Y(Ie, "gestureend", Ye), F && Y(s, E + "enter", He), V && Y(s, E + "leave", Ke), $ && Y(s, E + "move", Ge)), we.isEnabled = !0, e && e.type && Ve(e), ce && ce(we)), we), we.disable = () => {
            we.isEnabled && (B.filter((e => e !== we && q(e.target))).length || X(Oe ? Ie : s, "scroll", H), we.isPressed && (we._vx.reset(), we._vy.reset(), X(G ? s : Ie, R[1], Ue, !0)), X(Oe ? Ie : s, "scroll", Xe, ue), X(s, "wheel", We, ue), X(s, R[0], Ve, ue), X(Ie, R[2], $e), X(Ie, R[3], $e), X(s, "click", ze, !0), X(s, "click", Qe), X(Ie, "gesturestart", qe), X(Ie, "gestureend", Ye), X(s, E + "enter", He), X(s, E + "leave", Ke), X(s, E + "move", Ge), we.isEnabled = we.isPressed = we.isDragging = !1, le && le(we))
          }, we.kill = we.revert = () => {
            we.disable();
            let e = B.indexOf(we);
            e >= 0 && B.splice(e, 1), P === we && (P = 0)
          }, B.push(we), G && q(s) && (P = we), we.enable(u)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      ne.version = "3.12.2", ne.create = e => new ne(e), ne.register = oe, ne.getAll = () => B.slice(), ne.getById = e => B.filter((t => t.vars.id === e))[0], z() && y.registerPlugin(ne);
      let ie, ce, le, de, me, ue, ge, pe, he, fe, be, ve, xe, ke, _e, ye, we, je, Te, Ce, Se, Me, Ne, Ee, Oe, Ie, Pe, Re, Ae, ze, De, Be, Le, Fe, Ue, Ve, $e = 1,
        qe = Date.now,
        Ye = qe(),
        Xe = 0,
        We = 0,
        Ge = (e, t, a) => {
          let r = ct(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return a["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
        },
        He = (e, t) => !t || ct(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        Ke = () => We && requestAnimationFrame(Ke),
        Qe = () => ke = 1,
        Je = () => ke = 0,
        Ze = e => e,
        et = e => Math.round(1e5 * e) / 1e5 || 0,
        tt = () => "undefined" != typeof window,
        at = () => ie || tt() && (ie = window.gsap) && ie.registerPlugin && ie,
        rt = e => !!~ge.indexOf(e),
        st = e => ("Height" === e ? De : le["inner" + e]) || me["client" + e] || ue["client" + e],
        ot = e => $(e, "getBoundingClientRect") || (rt(e) ? () => (ba.width = le.innerWidth, ba.height = De, ba) : () => Ot(e)),
        nt = (e, t) => {
          let {
            s: a,
            d2: r,
            d: s,
            a: o
          } = t;
          return Math.max(0, (a = "scroll" + r) && (o = $(e, a)) ? o() - ot(e)()[s] : rt(e) ? (me[a] || ue[a]) - st(r) : e[a] - e["offset" + r])
        },
        it = (e, t) => {
          for (let a = 0; a < Te.length; a += 3)(!t || ~t.indexOf(Te[a + 1])) && e(Te[a], Te[a + 1], Te[a + 2])
        },
        ct = e => "string" == typeof e,
        lt = e => "function" == typeof e,
        dt = e => "number" == typeof e,
        mt = e => "object" == typeof e,
        ut = (e, t, a) => e && e.progress(t ? 0 : 1) && a && e.pause(),
        gt = (e, t) => {
          if (e.enabled) {
            let a = t(e);
            a && a.totalTime && (e.callbackAnimation = a)
          }
        },
        pt = Math.abs,
        ht = "left",
        ft = "right",
        bt = "bottom",
        vt = "width",
        xt = "height",
        kt = "Right",
        _t = "Left",
        yt = "Top",
        wt = "Bottom",
        jt = "padding",
        Tt = "margin",
        Ct = "Width",
        St = "Height",
        Mt = "px",
        Nt = e => le.getComputedStyle(e),
        Et = (e, t) => {
          for (let a in t) a in e || (e[a] = t[a]);
          return e
        },
        Ot = (e, t) => {
          let a = t && "matrix(1, 0, 0, 1, 0, 0)" !== Nt(e)[_e] && ie.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0
            }).progress(1),
            r = e.getBoundingClientRect();
          return a && a.progress(0).kill(), r
        },
        It = (e, t) => {
          let {
            d2: a
          } = t;
          return e["offset" + a] || e["client" + a] || 0
        },
        Pt = e => {
          let t, a = [],
            r = e.labels,
            s = e.duration();
          for (t in r) a.push(r[t] / s);
          return a
        },
        Rt = e => {
          let t = ie.utils.snap(e),
            a = Array.isArray(e) && e.slice(0).sort(((e, t) => e - t));
          return a ? function(e, r) {
            let s, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001;
            if (!r) return t(e);
            if (r > 0) {
              for (e -= o, s = 0; s < a.length; s++)
                if (a[s] >= e) return a[s];
              return a[s - 1]
            }
            for (s = a.length, e += o; s--;)
              if (a[s] <= e) return a[s];
            return a[0]
          } : function(a, r) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001,
              o = t(a);
            return !r || Math.abs(o - a) < s || o - a < 0 == r < 0 ? o : t(r < 0 ? a - e : a + e)
          }
        },
        At = (e, t, a, r) => a.split(",").forEach((a => e(t, a, r))),
        zt = (e, t, a, r, s) => e.addEventListener(t, a, {
          passive: !r,
          capture: !!s
        }),
        Dt = (e, t, a, r) => e.removeEventListener(t, a, !!r),
        Bt = (e, t, a) => {
          (a = a && a.wheelHandler) && (e(t, "wheel", a), e(t, "touchmove", a))
        },
        Lt = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        Ft = {
          toggleActions: "play",
          anticipatePin: 0
        },
        Ut = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        Vt = (e, t) => {
          if (ct(e)) {
            let a = e.indexOf("="),
              r = ~a ? +(e.charAt(a - 1) + 1) * parseFloat(e.substr(a + 1)) : 0;
            ~a && (e.indexOf("%") > a && (r *= t / 100), e = e.substr(0, a - 1)), e = r + (e in Ut ? Ut[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        $t = (e, t, a, r, s, o, n, i) => {
          let {
            startColor: c,
            endColor: l,
            fontSize: d,
            indent: m,
            fontWeight: u
          } = s, g = de.createElement("div"), p = rt(a) || "fixed" === $(a, "pinType"), h = -1 !== e.indexOf("scroller"), f = p ? ue : a, b = -1 !== e.indexOf("start"), v = b ? c : l, x = "border-color:" + v + ";font-size:" + d + ";color:" + v + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return x += "position:" + ((h || i) && p ? "fixed;" : "absolute;"), (h || i || !p) && (x += (r === J ? ft : bt) + ":" + (o + parseFloat(m)) + "px;"), n && (x += "box-sizing:border-box;text-align:left;width:" + n.offsetWidth + "px;"), g._isStart = b, g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), g.style.cssText = x, g.innerText = t || 0 === t ? e + "-" + t : e, f.children[0] ? f.insertBefore(g, f.children[0]) : f.appendChild(g), g._offset = g["offset" + r.op.d2], qt(g, 0, r, b), g
        },
        qt = (e, t, a, r) => {
          let s = {
              display: "block"
            },
            o = a[r ? "os2" : "p2"],
            n = a[r ? "p2" : "os2"];
          e._isFlipped = r, s[a.a + "Percent"] = r ? -100 : 0, s[a.a] = r ? "1px" : 0, s["border" + o + Ct] = 1, s["border" + n + Ct] = 0, s[a.p] = t + "px", ie.set(e, s)
        },
        Yt = [],
        Xt = {},
        Wt = () => qe() - Xe > 34 && (Le || (Le = requestAnimationFrame(da))),
        Gt = () => {
          (!Ne || !Ne.isPressed || Ne.startX > ue.clientWidth) && (L.cache++, Ne ? Le || (Le = requestAnimationFrame(da)) : da(), Xe || ea("scrollStart"), Xe = qe())
        },
        Ht = () => {
          Ie = le.innerWidth, Oe = le.innerHeight
        },
        Kt = () => {
          L.cache++, !xe && !Me && !de.fullscreenElement && !de.webkitFullscreenElement && (!Ee || Ie !== le.innerWidth || Math.abs(le.innerHeight - Oe) > .25 * le.innerHeight) && pe.restart(!0)
        },
        Qt = {},
        Jt = [],
        Zt = () => Dt(ja, "scrollEnd", Zt) || ia(!0),
        ea = e => Qt[e] && Qt[e].map((e => e())) || Jt,
        ta = [],
        aa = e => {
          for (let t = 0; t < ta.length; t += 5)(!e || ta[t + 4] && ta[t + 4].query === e) && (ta[t].style.cssText = ta[t + 1], ta[t].getBBox && ta[t].setAttribute("transform", ta[t + 2] || ""), ta[t + 3].uncache = 1)
        },
        ra = (e, t) => {
          let a;
          for (ye = 0; ye < Yt.length; ye++) a = Yt[ye], !a || t && a._ctx !== t || (e ? a.kill(1) : a.revert(!0, !0));
          t && aa(t), t || ea("revert")
        },
        sa = (e, t) => {
          L.cache++, (t || !Fe) && L.forEach((e => lt(e) && e.cacheID++ && (e.rec = 0))), ct(e) && (le.history.scrollRestoration = Ae = e)
        },
        oa = 0,
        na = () => {
          ue.appendChild(ze), De = ze.offsetHeight || le.innerHeight, ue.removeChild(ze)
        },
        ia = (e, t) => {
          if (Xe && !e) return void zt(ja, "scrollEnd", Zt);
          na(), Fe = ja.isRefreshing = !0, L.forEach((e => lt(e) && ++e.cacheID && (e.rec = e())));
          let a = ea("refreshInit");
          Ce && ja.sort(), t || ra(), L.forEach((e => {
            lt(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), Yt.slice(0).forEach((e => e.refresh())), Yt.forEach(((e, t) => {
            if (e._subPinOffset && e.pin) {
              let t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                a = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - a), e.refresh()
            }
          })), Yt.forEach((e => {
            let t = nt(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > t) && e.setPositions(e.start, Math.max(e.start + 1, t), !0)
          })), a.forEach((e => e && e.render && e.render(-1))), L.forEach((e => {
            lt(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), sa(Ae, 1), pe.pause(), oa++, Fe = 2, da(2), Yt.forEach((e => lt(e.vars.onRefresh) && e.vars.onRefresh(e))), Fe = ja.isRefreshing = !1, ea("refresh")
        },
        ca = 0,
        la = 1,
        da = e => {
          if (!Fe || 2 === e) {
            ja.isUpdating = !0, Ve && Ve.update(0);
            let e = Yt.length,
              t = qe(),
              a = t - Ye >= 50,
              r = e && Yt[0].scroll();
            if (la = ca > r ? -1 : 1, Fe || (ca = r), a && (Xe && !ke && t - Xe > 200 && (Xe = 0, ea("scrollEnd")), be = Ye, Ye = t), la < 0) {
              for (ye = e; ye-- > 0;) Yt[ye] && Yt[ye].update(0, a);
              la = 1
            } else
              for (ye = 0; ye < e; ye++) Yt[ye] && Yt[ye].update(0, a);
            ja.isUpdating = !1
          }
          Le = 0
        },
        ma = [ht, "top", bt, ft, Tt + wt, Tt + kt, Tt + yt, Tt + _t, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        ua = ma.concat([vt, xt, "boxSizing", "max" + Ct, "max" + St, "position", Tt, jt, jt + yt, jt + kt, jt + wt, jt + _t]),
        ga = (e, t, a, r) => {
          if (!e._gsap.swappedIn) {
            let s, o = ma.length,
              n = t.style,
              i = e.style;
            for (; o--;) s = ma[o], n[s] = a[s];
            n.position = "absolute" === a.position ? "absolute" : "relative", "inline" === a.display && (n.display = "inline-block"), i[bt] = i[ft] = "auto", n.flexBasis = a.flexBasis || "auto", n.overflow = "visible", n.boxSizing = "border-box", n[vt] = It(e, Q) + Mt, n[xt] = It(e, J) + Mt, n[jt] = i[Tt] = i.top = i[ht] = "0", ha(r), i[vt] = i["max" + Ct] = a[vt], i[xt] = i["max" + St] = a[xt], i[jt] = a[jt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        pa = /([A-Z])/g,
        ha = e => {
          if (e) {
            let t, a, r = e.t.style,
              s = e.length,
              o = 0;
            for ((e.t._gsap || ie.core.getCache(e.t)).uncache = 1; o < s; o += 2) a = e[o + 1], t = e[o], a ? r[t] = a : r[t] && r.removeProperty(t.replace(pa, "-$1").toLowerCase())
          }
        },
        fa = e => {
          let t = ua.length,
            a = e.style,
            r = [],
            s = 0;
          for (; s < t; s++) r.push(ua[s], a[ua[s]]);
          return r.t = e, r
        },
        ba = {
          left: 0,
          top: 0
        },
        va = (e, t, a, r, s, o, n, i, c, l, d, m, u, g) => {
          lt(e) && (e = e(i)), ct(e) && "max" === e.substr(0, 3) && (e = m + ("=" === e.charAt(4) ? Vt("0" + e.substr(3), a) : 0));
          let p, h, f, b = u ? u.time() : 0;
          if (u && u.seek(0), isNaN(e) || (e = +e), dt(e)) u && (e = ie.utils.mapRange(u.scrollTrigger.start, u.scrollTrigger.end, 0, m, e)), n && qt(n, a, r, !0);
          else {
            lt(t) && (t = t(i));
            let o, d, m, u, g = (e || "0").split(" ");
            f = Z(t, i) || ue, o = Ot(f) || {}, o && (o.left || o.top) || "none" !== Nt(f).display || (u = f.style.display, f.style.display = "block", o = Ot(f), u ? f.style.display = u : f.style.removeProperty("display")), d = Vt(g[0], o[r.d]), m = Vt(g[1] || "0", a), e = o[r.p] - c[r.p] - l + d + s - m, n && qt(n, m, r, a - m < 20 || n._isStart && m > 20), a -= a - m
          }
          if (g && (i[g] = e || -.001, e < 0 && (e = 0)), o) {
            let t = e + a,
              s = o._isStart;
            p = "scroll" + r.d2, qt(o, t, r, s && t > 20 || !s && (d ? Math.max(ue[p], me[p]) : o.parentNode[p]) <= t + 1), d && (c = Ot(n), d && (o.style[r.op.p] = c[r.op.p] - r.op.m - o._offset + Mt))
          }
          return u && f && (p = Ot(f), u.seek(m), h = Ot(f), u._caScrollDist = p[r.p] - h[r.p], e = e / u._caScrollDist * m), u && u.seek(b), u ? e : Math.round(e)
        },
        xa = /(webkit|moz|length|cssText|inset)/i,
        ka = (e, t, a, r) => {
          if (e.parentNode !== t) {
            let s, o, n = e.style;
            if (t === ue) {
              for (s in e._stOrig = n.cssText, o = Nt(e), o) + s || xa.test(s) || !o[s] || "string" != typeof n[s] || "0" === s || (n[s] = o[s]);
              n.top = a, n.left = r
            } else n.cssText = e._stOrig;
            ie.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        _a = (e, t, a) => {
          let r = t,
            s = r;
          return t => {
            let o = Math.round(e());
            return o !== r && o !== s && Math.abs(o - r) > 3 && Math.abs(o - s) > 3 && (t = o, a && a()), s = r, r = t, t
          }
        },
        ya = (e, t, a) => {
          let r = {};
          r[t.p] = "+=" + a, ie.set(e, r)
        },
        wa = (e, t) => {
          let a = ee(e, t),
            r = "_scroll" + t.p2,
            s = (t, o, n, i, c) => {
              let l = s.tween,
                d = o.onComplete,
                m = {};
              n = n || a();
              let u = _a(a, n, (() => {
                l.kill(), s.tween = 0
              }));
              return c = i && c || 0, i = i || t - n, l && l.kill(), o[r] = t, o.modifiers = m, m[r] = () => u(n + i * l.ratio + c * l.ratio * l.ratio), o.onUpdate = () => {
                L.cache++, da()
              }, o.onComplete = () => {
                s.tween = 0, d && d.call(l)
              }, l = s.tween = ie.to(e, o), l
            };
          return e[r] = a, a.wheelHandler = () => s.tween && s.tween.kill() && (s.tween = 0), zt(e, "wheel", a.wheelHandler), ja.isTouch && zt(e, "touchmove", a.wheelHandler), s
        };
      class ja {
        constructor(e, t) {
          ce || ja.register(ie) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Re(this), this.init(e, t)
        }
        init(e, t) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !We) return void(this.update = this.refresh = this.kill = Ze);
          e = Et(ct(e) || dt(e) || e.nodeType ? {
            trigger: e
          } : e, Ft);
          let a, r, s, o, n, i, c, l, d, m, u, g, p, h, f, b, v, x, k, _, y, w, j, T, C, S, M, N, E, O, I, P, R, A, z, D, B, U, V, {
              onUpdate: q,
              toggleClass: Y,
              id: X,
              onToggle: W,
              onRefresh: G,
              scrub: H,
              trigger: K,
              pin: te,
              pinSpacing: ae,
              invalidateOnRefresh: re,
              anticipatePin: se,
              onScrubComplete: oe,
              onSnapComplete: ne,
              once: ce,
              snap: ge,
              pinReparent: pe,
              pinSpacer: ve,
              containerAnimation: _e,
              fastScrollEnd: we,
              preventOverlaps: je
            } = e,
            Te = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? Q : J,
            Me = !H && 0 !== H,
            Ne = Z(e.scroller || le),
            Ee = ie.core.getCache(Ne),
            Oe = rt(Ne),
            Ie = "fixed" === ("pinType" in e ? e.pinType : $(Ne, "pinType") || Oe && "fixed"),
            Pe = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            Re = Me && e.toggleActions.split(" "),
            Ae = "markers" in e ? e.markers : Ft.markers,
            ze = Oe ? 0 : parseFloat(Nt(Ne)["border" + Te.p2 + Ct]) || 0,
            De = this,
            Le = e.onRefreshInit && (() => e.onRefreshInit(De)),
            Ye = ((e, t, a) => {
              let {
                d: r,
                d2: s,
                a: o
              } = a;
              return (o = $(e, "getBoundingClientRect")) ? () => o()[r] : () => (t ? st(s) : e["client" + s]) || 0
            })(Ne, Oe, Te),
            Ke = ((e, t) => !t || ~F.indexOf(e) ? ot(e) : () => ba)(Ne, Oe),
            Qe = 0,
            Je = 0,
            tt = 0,
            at = ee(Ne, Te);
          var it;
          if (De._startClamp = De._endClamp = !1, De._dir = Te, se *= 45, De.scroller = Ne, De.scroll = _e ? _e.time.bind(_e) : at, o = at(), De.vars = e, t = t || e.animation, "refreshPriority" in e && (Ce = 1, -9999 === e.refreshPriority && (Ve = De)), Ee.tweenScroll = Ee.tweenScroll || {
              top: wa(Ne, J),
              left: wa(Ne, Q)
            }, De.tweenTo = a = Ee.tweenScroll[Te.p], De.scrubDuration = e => {
              R = dt(e) && e, R ? P ? P.duration(e) : P = ie.to(t, {
                ease: "expo",
                totalProgress: "+=0",
                duration: R,
                paused: !0,
                onComplete: () => oe && oe(De)
              }) : (P && P.progress(1).kill(), P = 0)
            }, t && (t.vars.lazy = !1, t._initted && !De.isReverted || !1 !== t.vars.immediateRender && !1 !== e.immediateRender && t.duration() && t.render(0, !0, !0), De.animation = t.pause(), t.scrollTrigger = De, De.scrubDuration(H), O = 0, X || (X = t.vars.id)), ge && (mt(ge) && !ge.push || (ge = {
              snapTo: ge
            }), "scrollBehavior" in ue.style && ie.set(Oe ? [ue, me] : Ne, {
              scrollBehavior: "auto"
            }), L.forEach((e => lt(e) && e.target === (Oe ? de.scrollingElement || me : Ne) && (e.smooth = !1))), s = lt(ge.snapTo) ? ge.snapTo : "labels" === ge.snapTo ? (e => t => ie.utils.snap(Pt(e), t))(t) : "labelsDirectional" === ge.snapTo ? (it = t, (e, t) => Rt(Pt(it))(e, t.direction)) : !1 !== ge.directional ? (e, t) => Rt(ge.snapTo)(e, qe() - Je < 500 ? 0 : t.direction) : ie.utils.snap(ge.snapTo), A = ge.duration || {
              min: .1,
              max: 2
            }, A = mt(A) ? fe(A.min, A.max) : fe(A, A), z = ie.delayedCall(ge.delay || R / 2 || .1, (() => {
              let e = at(),
                r = qe() - Je < 500,
                o = a.tween;
              if (!(r || Math.abs(De.getVelocity()) < 10) || o || ke || Qe === e) De.isActive && Qe !== e && z.restart(!0);
              else {
                let n = (e - i) / h,
                  l = t && !Me ? t.totalProgress() : n,
                  d = r ? 0 : (l - I) / (qe() - be) * 1e3 || 0,
                  m = ie.utils.clamp(-n, 1 - n, pt(d / 2) * d / .185),
                  u = n + (!1 === ge.inertia ? 0 : m),
                  g = fe(0, 1, s(u, De)),
                  p = Math.round(i + g * h),
                  {
                    onStart: f,
                    onInterrupt: b,
                    onComplete: v
                  } = ge;
                if (e <= c && e >= i && p !== e) {
                  if (o && !o._initted && o.data <= pt(p - e)) return;
                  !1 === ge.inertia && (m = g - n), a(p, {
                    duration: A(pt(.185 * Math.max(pt(u - l), pt(g - l)) / d / .05 || 0)),
                    ease: ge.ease || "power3",
                    data: pt(p - e),
                    onInterrupt: () => z.restart(!0) && b && b(De),
                    onComplete: () => {
                      De.update(), Qe = at(), O = I = t && !Me ? t.totalProgress() : De.progress, ne && ne(De), v && v(De)
                    }
                  }, e, m * h, p - e - m * h), f && f(De, a.tween)
                }
              }
            })).pause()), X && (Xt[X] = De), K = De.trigger = Z(K || !0 !== te && te), V = K && K._gsap && K._gsap.stRevert, V && (V = V(De)), te = !0 === te ? K : Z(te), ct(Y) && (Y = {
              targets: K,
              className: Y
            }), te && (!1 === ae || ae === Tt || (ae = !(!ae && te.parentNode && te.parentNode.style && "flex" === Nt(te.parentNode).display) && jt), De.pin = te, r = ie.core.getCache(te), r.spacer ? f = r.pinState : (ve && (ve = Z(ve), ve && !ve.nodeType && (ve = ve.current || ve.nativeElement), r.spacerIsNative = !!ve, ve && (r.spacerState = fa(ve))), r.spacer = x = ve || de.createElement("div"), x.classList.add("pin-spacer"), X && x.classList.add("pin-spacer-" + X), r.pinState = f = fa(te)), !1 !== e.force3D && ie.set(te, {
              force3D: !0
            }), De.spacer = x = r.spacer, E = Nt(te), T = E[ae + Te.os2], _ = ie.getProperty(te), y = ie.quickSetter(te, Te.a, Mt), ga(te, x, E), v = fa(te)), Ae) {
            g = mt(Ae) ? Et(Ae, Lt) : Lt, m = $t("scroller-start", X, Ne, Te, g, 0), u = $t("scroller-end", X, Ne, Te, g, 0, m), k = m["offset" + Te.op.d2];
            let e = Z($(Ne, "content") || Ne);
            l = this.markerStart = $t("start", X, e, Te, g, k, 0, _e), d = this.markerEnd = $t("end", X, e, Te, g, k, 0, _e), _e && (U = ie.quickSetter([l, d], Te.a, Mt)), Ie || F.length && !0 === $(Ne, "fixedMarkers") || ((e => {
              let t = Nt(e).position;
              e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
            })(Oe ? ue : Ne), ie.set([m, u], {
              force3D: !0
            }), S = ie.quickSetter(m, Te.a, Mt), N = ie.quickSetter(u, Te.a, Mt))
          }
          if (_e) {
            let e = _e.vars.onUpdate,
              t = _e.vars.onUpdateParams;
            _e.eventCallback("onUpdate", (() => {
              De.update(0, 0, 1), e && e.apply(_e, t || [])
            }))
          }
          if (De.previous = () => Yt[Yt.indexOf(De) - 1], De.next = () => Yt[Yt.indexOf(De) + 1], De.revert = (e, a) => {
              if (!a) return De.kill(!0);
              let r = !1 !== e || !De.enabled,
                s = xe;
              r !== De.isReverted && (r && (D = Math.max(at(), De.scroll.rec || 0), tt = De.progress, B = t && t.progress()), l && [l, d, m, u].forEach((e => e.style.display = r ? "none" : "block")), r && (xe = De, De.update(r)), !te || pe && De.isActive || (r ? ((e, t, a) => {
                ha(a);
                let r = e._gsap;
                if (r.spacerIsNative) ha(r.spacerState);
                else if (e._gsap.swappedIn) {
                  let a = t.parentNode;
                  a && (a.insertBefore(e, t), a.removeChild(t))
                }
                e._gsap.swappedIn = !1
              })(te, x, f) : ga(te, x, Nt(te), C)), r || De.update(r), xe = s, De.isReverted = r)
            }, De.refresh = (r, s, g, k) => {
              if ((xe || !De.enabled) && !s) return;
              if (te && r && Xe) return void zt(ja, "scrollEnd", Zt);
              !Fe && Le && Le(De), xe = De, a.tween && !g && (a.tween.kill(), a.tween = 0), P && P.pause(), re && t && t.revert({
                kill: !1
              }).invalidate(), De.isReverted || De.revert(!0, !0), De._subPinOffset = !1;
              let y, T, S, N, E, O, I, R, A, L, F, U, V, $ = Ye(),
                q = Ke(),
                Y = _e ? _e.duration() : nt(Ne, Te),
                X = h <= .01,
                W = 0,
                H = k || 0,
                se = mt(g) ? g.end : e.end,
                oe = e.endTrigger || K,
                ne = mt(g) ? g.start : e.start || (0 !== e.start && K ? te ? "0 0" : "0 100%" : 0),
                ce = De.pinnedContainer = e.pinnedContainer && Z(e.pinnedContainer, De),
                le = K && Math.max(0, Yt.indexOf(De)) || 0,
                ge = le;
              for (Ae && mt(g) && (U = ie.getProperty(m, Te.p), V = ie.getProperty(u, Te.p)); ge--;) O = Yt[ge], O.end || O.refresh(0, 1) || (xe = De), I = O.pin, !I || I !== K && I !== te && I !== ce || O.isReverted || (L || (L = []), L.unshift(O), O.revert(!0, !0)), O !== Yt[ge] && (le--, ge--);
              for (lt(ne) && (ne = ne(De)), ne = Ge(ne, "start", De), i = va(ne, K, $, Te, at(), l, m, De, q, ze, Ie, Y, _e, De._startClamp && "_startClamp") || (te ? -.001 : 0), lt(se) && (se = se(De)), ct(se) && !se.indexOf("+=") && (~se.indexOf(" ") ? se = (ct(ne) ? ne.split(" ")[0] : "") + se : (W = Vt(se.substr(2), $), se = ct(ne) ? ne : (_e ? ie.utils.mapRange(0, _e.duration(), _e.scrollTrigger.start, _e.scrollTrigger.end, i) : i) + W, oe = K)), se = Ge(se, "end", De), c = Math.max(i, va(se || (oe ? "100% 0" : Y), oe, $, Te, at() + W, d, u, De, q, ze, Ie, Y, _e, De._endClamp && "_endClamp")) || -.001, W = 0, ge = le; ge--;) O = Yt[ge], I = O.pin, I && O.start - O._pinPush <= i && !_e && O.end > 0 && (y = O.end - (De._startClamp ? Math.max(0, O.start) : O.start), (I === K && O.start - O._pinPush < i || I === ce) && isNaN(ne) && (W += y * (1 - O.progress)), I === te && (H += y));
              if (i += W, c += W, De._startClamp && (De._startClamp += W), De._endClamp && !Fe && (De._endClamp = c || -.001, c = Math.min(c, nt(Ne, Te))), h = c - i || (i -= .01) && .001, X && (tt = ie.utils.clamp(0, 1, ie.utils.normalize(i, c, D))), De._pinPush = H, l && W && (y = {}, y[Te.a] = "+=" + W, ce && (y[Te.p] = "-=" + at()), ie.set([l, d], y)), te) y = Nt(te), N = Te === J, S = at(), w = parseFloat(_(Te.a)) + H, !Y && c > 1 && (F = (Oe ? de.scrollingElement || me : Ne).style, F = {
                style: F,
                value: F["overflow" + Te.a.toUpperCase()]
              }, Oe && "scroll" !== Nt(ue)["overflow" + Te.a.toUpperCase()] && (F.style["overflow" + Te.a.toUpperCase()] = "scroll")), ga(te, x, y), v = fa(te), T = Ot(te, !0), R = Ie && ee(Ne, N ? Q : J)(), ae && (C = [ae + Te.os2, h + H + Mt], C.t = x, ge = ae === jt ? It(te, Te) + h + H : 0, ge && C.push(Te.d, ge + Mt), ha(C), ce && Yt.forEach((e => {
                e.pin === ce && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), Ie && at(D)), Ie && (E = {
                top: T.top + (N ? S - i : R) + Mt,
                left: T.left + (N ? R : S - i) + Mt,
                boxSizing: "border-box",
                position: "fixed"
              }, E[vt] = E["max" + Ct] = Math.ceil(T.width) + Mt, E[xt] = E["max" + St] = Math.ceil(T.height) + Mt, E[Tt] = E[Tt + yt] = E[Tt + kt] = E[Tt + wt] = E[Tt + _t] = "0", E[jt] = y[jt], E[jt + yt] = y[jt + yt], E[jt + kt] = y[jt + kt], E[jt + wt] = y[jt + wt], E[jt + _t] = y[jt + _t], b = ((e, t, a) => {
                let r, s = [],
                  o = e.length,
                  n = a ? 8 : 0;
                for (; n < o; n += 2) r = e[n], s.push(r, r in t ? t[r] : e[n + 1]);
                return s.t = e.t, s
              })(f, E, pe), Fe && at(0)), t ? (A = t._initted, Se(1), t.render(t.duration(), !0, !0), j = _(Te.a) - w + h + H, M = Math.abs(h - j) > 1, Ie && M && b.splice(b.length - 2, 2), t.render(0, !0, !0), A || t.invalidate(!0), t.parent || t.totalTime(t.totalTime()), Se(0)) : j = h, F && (F.value ? F.style["overflow" + Te.a.toUpperCase()] = F.value : F.style.removeProperty("overflow-" + Te.a));
              else if (K && at() && !_e)
                for (T = K.parentNode; T && T !== ue;) T._pinOffset && (i -= T._pinOffset, c -= T._pinOffset), T = T.parentNode;
              L && L.forEach((e => e.revert(!1, !0))), De.start = i, De.end = c, o = n = Fe ? D : at(), _e || Fe || (o < D && at(D), De.scroll.rec = 0), De.revert(!1, !0), Je = qe(), z && (Qe = -1, z.restart(!0)), xe = 0, t && Me && (t._initted || B) && t.progress() !== B && t.progress(B || 0, !0).render(t.time(), !0, !0), (X || tt !== De.progress || _e) && (t && !Me && t.totalProgress(_e && i < -.001 && !tt ? ie.utils.normalize(i, c, 0) : tt, !0), De.progress = X || (o - i) / h === tt ? 0 : tt), te && ae && (x._pinOffset = Math.round(De.progress * j)), P && P.invalidate(), isNaN(U) || (U -= ie.getProperty(m, Te.p), V -= ie.getProperty(u, Te.p), ya(m, Te, U), ya(l, Te, U - (k || 0)), ya(u, Te, V), ya(d, Te, V - (k || 0))), X && !Fe && De.update(), !G || Fe || p || (p = !0, G(De), p = !1)
            }, De.getVelocity = () => (at() - n) / (qe() - be) * 1e3 || 0, De.endAnimation = () => {
              ut(De.callbackAnimation), t && (P ? P.progress(1) : t.paused() ? Me || ut(t, De.direction < 0, 1) : ut(t, t.reversed()))
            }, De.labelToScroll = e => t && t.labels && (i || De.refresh() || i) + t.labels[e] / t.duration() * h || 0, De.getTrailing = e => {
              let t = Yt.indexOf(De),
                a = De.direction > 0 ? Yt.slice(0, t).reverse() : Yt.slice(t + 1);
              return (ct(e) ? a.filter((t => t.vars.preventOverlaps === e)) : a).filter((e => De.direction > 0 ? e.end <= i : e.start >= c))
            }, De.update = (e, r, s) => {
              if (_e && !s && !e) return;
              let l, d, u, g, p, f, k, _, C = !0 === Fe ? D : De.scroll(),
                E = e ? 0 : (C - i) / h,
                R = E < 0 ? 0 : E > 1 ? 1 : E || 0,
                A = De.progress;
              if (r && (n = o, o = _e ? at() : C, ge && (I = O, O = t && !Me ? t.totalProgress() : R)), se && !R && te && !xe && !$e && Xe && i < C + (C - n) / (qe() - be) * se && (R = 1e-4), R !== A && De.enabled) {
                if (l = De.isActive = !!R && R < 1, d = !!A && A < 1, f = l !== d, p = f || !!R != !!A, De.direction = R > A ? 1 : -1, De.progress = R, p && !xe && (u = R && !A ? 0 : 1 === R ? 1 : 1 === A ? 2 : 3, Me && (g = !f && "none" !== Re[u + 1] && Re[u + 1] || Re[u], _ = t && ("complete" === g || "reset" === g || g in t))), je && (f || _) && (_ || H || !t) && (lt(je) ? je(De) : De.getTrailing(je).forEach((e => e.endAnimation()))), Me || (!P || xe || $e ? t && t.totalProgress(R, !(!xe || !Je && !e)) : (P._dp._time - P._start !== P._time && P.render(P._dp._time - P._start), P.resetTo ? P.resetTo("totalProgress", R, t._tTime / t._tDur) : (P.vars.totalProgress = R, P.invalidate().restart()))), te)
                  if (e && ae && (x.style[ae + Te.os2] = T), Ie) {
                    if (p) {
                      if (k = !e && R > A && c + 1 > C && C + 1 >= nt(Ne, Te), pe)
                        if (e || !l && !k) ka(te, x);
                        else {
                          let e = Ot(te, !0),
                            t = C - i;
                          ka(te, ue, e.top + (Te === J ? t : 0) + Mt, e.left + (Te === J ? 0 : t) + Mt)
                        } ha(l || k ? b : v), M && R < 1 && l || y(w + (1 !== R || k ? 0 : j))
                    }
                  } else y(et(w + j * R));
                ge && !a.tween && !xe && !$e && z.restart(!0), Y && (f || ce && R && (R < 1 || !Be)) && he(Y.targets).forEach((e => e.classList[l || ce ? "add" : "remove"](Y.className))), q && !Me && !e && q(De), p && !xe ? (Me && (_ && ("complete" === g ? t.pause().totalProgress(1) : "reset" === g ? t.restart(!0).pause() : "restart" === g ? t.restart(!0) : t[g]()), q && q(De)), !f && Be || (W && f && gt(De, W), Pe[u] && gt(De, Pe[u]), ce && (1 === R ? De.kill(!1, 1) : Pe[u] = 0), f || (u = 1 === R ? 1 : 3, Pe[u] && gt(De, Pe[u]))), we && !l && Math.abs(De.getVelocity()) > (dt(we) ? we : 2500) && (ut(De.callbackAnimation), P ? P.progress(1) : ut(t, "reverse" === g ? 1 : !R, 1))) : Me && q && !xe && q(De)
              }
              if (N) {
                let e = _e ? C / _e.duration() * (_e._caScrollDist || 0) : C;
                S(e + (m._isFlipped ? 1 : 0)), N(e)
              }
              U && U(-C / _e.duration() * (_e._caScrollDist || 0))
            }, De.enable = (e, t) => {
              De.enabled || (De.enabled = !0, zt(Ne, "resize", Kt), Oe || zt(Ne, "scroll", Gt), Le && zt(ja, "refreshInit", Le), !1 !== e && (De.progress = tt = 0, o = n = Qe = at()), !1 !== t && De.refresh())
            }, De.getTween = e => e && a ? a.tween : P, De.setPositions = (e, t, a, r) => {
              if (_e) {
                let a = _e.scrollTrigger,
                  r = _e.duration(),
                  s = a.end - a.start;
                e = a.start + s * e / r, t = a.start + s * t / r
              }
              De.refresh(!1, !1, {
                start: He(e, a && !!De._startClamp),
                end: He(t, a && !!De._endClamp)
              }, r), De.update()
            }, De.adjustPinSpacing = e => {
              if (C && e) {
                let t = C.indexOf(Te.d) + 1;
                C[t] = parseFloat(C[t]) + e + Mt, C[1] = parseFloat(C[1]) + e + Mt, ha(C)
              }
            }, De.disable = (e, t) => {
              if (De.enabled && (!1 !== e && De.revert(!0, !0), De.enabled = De.isActive = !1, t || P && P.pause(), D = 0, r && (r.uncache = 1), Le && Dt(ja, "refreshInit", Le), z && (z.pause(), a.tween && a.tween.kill() && (a.tween = 0)), !Oe)) {
                let e = Yt.length;
                for (; e--;)
                  if (Yt[e].scroller === Ne && Yt[e] !== De) return;
                Dt(Ne, "resize", Kt), Oe || Dt(Ne, "scroll", Gt)
              }
            }, De.kill = (a, s) => {
              De.disable(a, s), P && !s && P.kill(), X && delete Xt[X];
              let o = Yt.indexOf(De);
              o >= 0 && Yt.splice(o, 1), o === ye && la > 0 && ye--, o = 0, Yt.forEach((e => e.scroller === De.scroller && (o = 1))), o || Fe || (De.scroll.rec = 0), t && (t.scrollTrigger = null, a && t.revert({
                kill: !1
              }), s || t.kill()), l && [l, d, m, u].forEach((e => e.parentNode && e.parentNode.removeChild(e))), Ve === De && (Ve = 0), te && (r && (r.uncache = 1), o = 0, Yt.forEach((e => e.pin === te && o++)), o || (r.spacer = 0)), e.onKill && e.onKill(De)
            }, Yt.push(De), De.enable(!1, !1), V && V(De), t && t.add && !h) {
            let e = De.update;
            De.update = () => {
              De.update = e, i || c || De.refresh()
            }, ie.delayedCall(.01, De.update), h = .01, i = c = 0
          } else De.refresh();
          te && (() => {
            if (Ue !== oa) {
              let e = Ue = oa;
              requestAnimationFrame((() => e === oa && ia(!0)))
            }
          })()
        }
        static register(e) {
          return ce || (ie = e || at(), tt() && window.document && ja.enable(), ce = We), ce
        }
        static defaults(e) {
          if (e)
            for (let t in e) Ft[t] = e[t];
          return Ft
        }
        static disable(e, t) {
          We = 0, Yt.forEach((a => a[t ? "kill" : "disable"](e))), Dt(le, "wheel", Gt), Dt(de, "scroll", Gt), clearInterval(ve), Dt(de, "touchcancel", Ze), Dt(ue, "touchstart", Ze), At(Dt, de, "pointerdown,touchstart,mousedown", Qe), At(Dt, de, "pointerup,touchend,mouseup", Je), pe.kill(), it(Dt);
          for (let e = 0; e < L.length; e += 3) Bt(Dt, L[e], L[e + 1]), Bt(Dt, L[e], L[e + 2])
        }
        static enable() {
          if (le = window, de = document, me = de.documentElement, ue = de.body, ie && (he = ie.utils.toArray, fe = ie.utils.clamp, Re = ie.core.context || Ze, Se = ie.core.suppressOverwrites || Ze, Ae = le.history.scrollRestoration || "auto", ca = le.pageYOffset, ie.core.globals("ScrollTrigger", ja), ue)) {
            We = 1, ze = document.createElement("div"), ze.style.height = "100vh", ze.style.position = "absolute", na(), Ke(), ne.register(ie), ja.isTouch = ne.isTouch, Pe = ne.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), zt(le, "wheel", Gt), ge = [le, de, me, ue], ie.matchMedia ? (ja.matchMedia = e => {
              let t, a = ie.matchMedia();
              for (t in e) a.add(t, e[t]);
              return a
            }, ie.addEventListener("matchMediaInit", (() => ra())), ie.addEventListener("matchMediaRevert", (() => aa())), ie.addEventListener("matchMedia", (() => {
              ia(0, 1), ea("matchMedia")
            })), ie.matchMedia("(orientation: portrait)", (() => (Ht(), Ht)))) : console.warn("Requires GSAP 3.11.0 or later"), Ht(), zt(de, "scroll", Gt);
            let e, t, a = ue.style,
              r = a.borderTopStyle,
              s = ie.core.Animation.prototype;
            for (s.revert || Object.defineProperty(s, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), a.borderTopStyle = "solid", e = Ot(ue), J.m = Math.round(e.top + J.sc()) || 0, Q.m = Math.round(e.left + Q.sc()) || 0, r ? a.borderTopStyle = r : a.removeProperty("border-top-style"), ve = setInterval(Wt, 250), ie.delayedCall(.5, (() => $e = 0)), zt(de, "touchcancel", Ze), zt(ue, "touchstart", Ze), At(zt, de, "pointerdown,touchstart,mousedown", Qe), At(zt, de, "pointerup,touchend,mouseup", Je), _e = ie.utils.checkPrefix("transform"), ua.push(_e), ce = qe(), pe = ie.delayedCall(.2, ia).pause(), Te = [de, "visibilitychange", () => {
                let e = le.innerWidth,
                  t = le.innerHeight;
                de.hidden ? (we = e, je = t) : we === e && je === t || Kt()
              }, de, "DOMContentLoaded", ia, le, "load", ia, le, "resize", Kt], it(zt), Yt.forEach((e => e.enable(0, 1))), t = 0; t < L.length; t += 3) Bt(Dt, L[t], L[t + 1]), Bt(Dt, L[t], L[t + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (Be = !!e.limitCallbacks);
          let t = e.syncInterval;
          t && clearInterval(ve) || (ve = t) && setInterval(Wt, t), "ignoreMobileResize" in e && (Ee = 1 === ja.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (it(Dt) || it(zt, e.autoRefreshEvents || "none"), Me = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, t) {
          let a = Z(e),
            r = L.indexOf(a),
            s = rt(a);
          ~r && L.splice(r, s ? 6 : 2), t && (s ? F.unshift(le, t, ue, t, me, t) : F.unshift(a, t))
        }
        static clearMatchMedia(e) {
          Yt.forEach((t => t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)))
        }
        static isInViewport(e, t, a) {
          let r = (ct(e) ? Z(e) : e).getBoundingClientRect(),
            s = r[a ? vt : xt] * t || 0;
          return a ? r.right - s > 0 && r.left + s < le.innerWidth : r.bottom - s > 0 && r.top + s < le.innerHeight
        }
        static positionInViewport(e, t, a) {
          ct(e) && (e = Z(e));
          let r = e.getBoundingClientRect(),
            s = r[a ? vt : xt],
            o = null == t ? s / 2 : t in Ut ? Ut[t] * s : ~t.indexOf("%") ? parseFloat(t) * s / 100 : parseFloat(t) || 0;
          return a ? (r.left + o) / le.innerWidth : (r.top + o) / le.innerHeight
        }
        static killAll(e) {
          if (Yt.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = Qt.killAll || [];
            Qt = {}, e.forEach((e => e()))
          }
        }
      }
      ja.version = "3.12.2", ja.saveStyles = e => e ? he(e).forEach((e => {
        if (e && e.style) {
          let t = ta.indexOf(e);
          t >= 0 && ta.splice(t, 5), ta.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), ie.core.getCache(e), Re())
        }
      })) : ta, ja.revert = (e, t) => ra(!e, t), ja.create = (e, t) => new ja(e, t), ja.refresh = e => e ? Kt() : (ce || ja.register()) && ia(!0), ja.update = e => ++L.cache && da(!0 === e ? 2 : 0), ja.clearScrollMemory = sa, ja.maxScroll = (e, t) => nt(e, t ? Q : J), ja.getScrollFunc = (e, t) => ee(Z(e), t ? Q : J), ja.getById = e => Xt[e], ja.getAll = () => Yt.filter((e => "ScrollSmoother" !== e.vars.id)), ja.isScrolling = () => !!Xe, ja.snapDirectional = Rt, ja.addEventListener = (e, t) => {
        let a = Qt[e] || (Qt[e] = []);
        ~a.indexOf(t) || a.push(t)
      }, ja.removeEventListener = (e, t) => {
        let a = Qt[e],
          r = a && a.indexOf(t);
        r >= 0 && a.splice(r, 1)
      }, ja.batch = (e, t) => {
        let a, r = [],
          s = {},
          o = t.interval || .016,
          n = t.batchMax || 1e9,
          i = (e, t) => {
            let a = [],
              r = [],
              s = ie.delayedCall(o, (() => {
                t(a, r), a = [], r = []
              })).pause();
            return e => {
              a.length || s.restart(!0), a.push(e.trigger), r.push(e), n <= a.length && s.progress(1)
            }
          };
        for (a in t) s[a] = "on" === a.substr(0, 2) && lt(t[a]) && "onRefreshInit" !== a ? i(0, t[a]) : t[a];
        return lt(n) && (n = n(), zt(ja, "refresh", (() => n = t.batchMax()))), he(e).forEach((e => {
          let t = {};
          for (a in s) t[a] = s[a];
          t.trigger = e, r.push(ja.create(t))
        })), r
      };
      let Ta, Ca = (e, t, a, r) => (t > r ? e(r) : t < 0 && e(0), a > r ? (r - t) / (a - t) : a < 0 ? t / (t - a) : 1),
        Sa = (e, t) => {
          !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (ne.isTouch ? " pinch-zoom" : "") : "none", e === me && Sa(ue, t)
        },
        Ma = {
          auto: 1,
          scroll: 1
        },
        Na = e => {
          let t, {
              event: a,
              target: r,
              axis: s
            } = e,
            o = (a.changedTouches ? a.changedTouches[0] : a).target,
            n = o._gsap || ie.core.getCache(o),
            i = qe();
          if (!n._isScrollT || i - n._isScrollT > 2e3) {
            for (; o && o !== ue && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !Ma[(t = Nt(o)).overflowY] && !Ma[t.overflowX]);) o = o.parentNode;
            n._isScroll = o && o !== r && !rt(o) && (Ma[(t = Nt(o)).overflowY] || Ma[t.overflowX]), n._isScrollT = i
          }(n._isScroll || "x" === s) && (a.stopPropagation(), a._gsapAllow = !0)
        },
        Ea = (e, t, a, r) => ne.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: r = r && Na,
          onPress: r,
          onDrag: r,
          onScroll: r,
          onEnable: () => a && zt(de, ne.eventTypes[0], Ia, !1, !0),
          onDisable: () => Dt(de, ne.eventTypes[0], Ia, !0)
        }),
        Oa = /(input|label|select|textarea)/i,
        Ia = e => {
          let t = Oa.test(e.target.tagName);
          (t || Ta) && (e._gsapAllow = !0, Ta = t)
        };
      ja.sort = e => Yt.sort(e || ((e, t) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0)))), ja.observe = e => new ne(e), ja.normalizeScroll = e => {
        if (void 0 === e) return Ne;
        if (!0 === e && Ne) return Ne.enable();
        if (!1 === e) return Ne && Ne.kill();
        let t = e instanceof ne ? e : (e => {
          mt(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let t, a, r, s, o, n, i, c, {
              normalizeScrollX: l,
              momentum: d,
              allowNestedScroll: m,
              onRelease: u
            } = e,
            g = Z(e.target) || me,
            p = ie.core.globals().ScrollSmoother,
            h = p && p.get(),
            f = Pe && (e.content && Z(e.content) || h && !1 !== e.content && !h.smooth() && h.content()),
            b = ee(g, J),
            v = ee(g, Q),
            x = 1,
            k = (ne.isTouch && le.visualViewport ? le.visualViewport.scale * le.visualViewport.width : le.outerWidth) / le.innerWidth,
            _ = 0,
            y = lt(d) ? () => d(t) : () => d || 2.8,
            w = Ea(g, e.type, !0, m),
            j = () => s = !1,
            T = Ze,
            C = Ze,
            S = () => {
              a = nt(g, J), C = fe(Pe ? 1 : 0, a), l && (T = fe(0, nt(g, Q))), r = oa
            },
            M = () => {
              f._gsap.y = et(parseFloat(f._gsap.y) + b.offset) + "px", f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(f._gsap.y) + ", 0, 1)", b.offset = b.cacheID = 0
            },
            N = () => {
              S(), o.isActive() && o.vars.scrollY > a && (b() > a ? o.progress(1) && b(a) : o.resetTo("scrollY", a))
            };
          return f && ie.set(f, {
            y: "+=0"
          }), e.ignoreCheck = e => Pe && "touchmove" === e.type && (() => {
            if (s) {
              requestAnimationFrame(j);
              let e = et(t.deltaY / 2),
                a = C(b.v - e);
              if (f && a !== b.v + b.offset) {
                b.offset = a - b.v;
                let e = et((parseFloat(f && f._gsap.y) || 0) - b.offset);
                f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", f._gsap.y = e + "px", b.cacheID = L.cache, da()
              }
              return !0
            }
            b.offset && M(), s = !0
          })() || x > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            s = !1;
            let e = x;
            x = et((le.visualViewport && le.visualViewport.scale || 1) / k), o.pause(), e !== x && Sa(g, x > 1.01 || !l && "x"), n = v(), i = b(), S(), r = oa
          }, e.onRelease = e.onGestureStart = (e, t) => {
            if (b.offset && M(), t) {
              L.cache++;
              let t, r, s = y();
              l && (t = v(), r = t + .05 * s * -e.velocityX / .227, s *= Ca(v, t, r, nt(g, Q)), o.vars.scrollX = T(r)), t = b(), r = t + .05 * s * -e.velocityY / .227, s *= Ca(b, t, r, nt(g, J)), o.vars.scrollY = C(r), o.invalidate().duration(s).play(.01), (Pe && o.vars.scrollY >= a || t >= a - 1) && ie.to({}, {
                onUpdate: N,
                duration: s
              })
            } else c.restart(!0);
            u && u(e)
          }, e.onWheel = () => {
            o._ts && o.pause(), qe() - _ > 1e3 && (r = 0, _ = qe())
          }, e.onChange = (e, t, a, s, o) => {
            if (oa !== r && S(), t && l && v(T(s[2] === t ? n + (e.startX - e.x) : v() + t - s[1])), a) {
              b.offset && M();
              let t = o[2] === a,
                r = t ? i + e.startY - e.y : b() + a - o[1],
                s = C(r);
              t && r !== s && (i += s - r), b(s)
            }(a || t) && da()
          }, e.onEnable = () => {
            Sa(g, !l && "x"), ja.addEventListener("refresh", N), zt(le, "resize", N), b.smooth && (b.target.style.scrollBehavior = "auto", b.smooth = v.smooth = !1), w.enable()
          }, e.onDisable = () => {
            Sa(g, !0), Dt(le, "resize", N), ja.removeEventListener("refresh", N), w.kill()
          }, e.lockAxis = !1 !== e.lockAxis, t = new ne(e), t.iOS = Pe, Pe && !b() && b(1), Pe && ie.ticker.add(Ze), c = t._dc, o = ie.to(t, {
            ease: "power4",
            paused: !0,
            scrollX: l ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: _a(b, b(), (() => o.pause()))
            },
            onUpdate: da,
            onComplete: c.vars.onComplete
          }), t
        })(e);
        return Ne && Ne.target === t.target && Ne.kill(), rt(t.target) && (Ne = t), t
      }, ja.core = {
        _getVelocityProp: te,
        _inputObserver: Ea,
        _scrollers: L,
        _proxies: F,
        bridge: {
          ss: () => {
            Xe || ea("scrollStart"), Xe = qe()
          },
          ref: () => xe
        }
      }, at() && ie.registerPlugin(ja);
      let Pa, Ra, Aa, za, Da, Ba, La, Fa, Ua, Va, $a, qa, Ya, Xa, Wa, Ga, Ha = () => "undefined" != typeof window,
        Ka = () => Pa || Ha() && (Pa = window.gsap) && Pa.registerPlugin && Pa,
        Qa = e => Va.maxScroll(e || Aa);
      class Ja {
        constructor(e) {
          Ra || Ja.register(Pa) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, $a && $a.kill(), $a = this, Wa(this);
          let t, a, r, s, o, n, i, c, l, d, m, u, g, p, h, {
              smoothTouch: f,
              onUpdate: b,
              onStop: v,
              smooth: x,
              onFocusIn: k,
              normalizeScroll: _,
              wholePixels: y
            } = e,
            w = this,
            j = e.effectsPrefix || "",
            T = Va.getScrollFunc(Aa),
            C = 1 === Va.isTouch ? !0 === f ? .8 : parseFloat(f) || 0 : 0 === x || !1 === x ? 0 : parseFloat(x) || .8,
            S = C && +e.speed || 1,
            M = 0,
            N = 0,
            E = 1,
            O = Ya(0),
            I = () => O.update(-M),
            P = {
              y: 0
            },
            R = () => t.style.overflow = "visible",
            A = e => {
              e.update();
              let t = e.getTween();
              t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), p = !1, e.animation.progress(e.progress, !0)
            },
            z = (e, a) => {
              (e !== M && !d || a) && (y && (e = Math.round(e)), C && (t.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", t._gsap.y = e + "px"), N = e - M, M = e, Va.isUpdating || Ja.isRefreshing || Va.update())
            },
            D = function(e) {
              return arguments.length ? (e < 0 && (e = 0), P.y = -e, p = !0, d ? M = -e : z(-e), Va.isRefreshing ? s.update() : T(e / S), this) : -M
            },
            B = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!Va.isRefreshing) {
                let e = Qa(a) * S;
                e < -M && D(e), Ga.restart(!0)
              }
            })),
            L = e => {
              a.scrollTop = 0, e.target.contains && e.target.contains(a) || k && !1 === k(this, e) || (Va.isInViewport(e.target) || e.target === h || this.scrollTo(e.target, !1, "center center"), h = e.target)
            },
            F = (e, t) => {
              if (e < t.start) return e;
              let a = isNaN(t.ratio) ? 1 : t.ratio,
                r = t.end - t.start,
                s = e - t.start,
                o = t.offset || 0,
                n = t.pins || [],
                i = n.offset || 0,
                c = t._startClamp && t.start <= 0 || t.pins && t.pins.offset ? 0 : t._endClamp && t.end === Qa() ? 1 : .5;
              return n.forEach((t => {
                r -= t.distance, t.nativeStart <= e && (s -= t.distance)
              })), i && (s *= (r - i / a) / r), e + (s - o * c) / a - s
            },
            U = (e, t, a) => {
              a || (e.pins.length = e.pins.offset = 0);
              let r, s, o, n, i, c, l, d, m = e.pins,
                u = e.markers;
              for (l = 0; l < t.length; l++)
                if (d = t[l], e.trigger && d.trigger && e !== d && (d.trigger === e.trigger || d.pinnedContainer === e.trigger || e.trigger.contains(d.trigger)) && (i = d._startNative || d._startClamp || d.start, c = d._endNative || d._endClamp || d.end, o = F(i, e), n = d.pin && c > 0 ? o + (c - i) : F(c, e), d.setPositions(o, n, !0, (d._startClamp ? Math.max(0, o) : o) - i), d.markerStart && u.push(Pa.quickSetter([d.markerStart, d.markerEnd], "y", "px")), d.pin && d.end > 0 && !a)) {
                  if (r = d.end - d.start, s = e._startClamp && d.start < 0, s) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void U(e, t);
                    r += d.start, m.offset = -d.start
                  }
                  m.push({
                    start: d.start,
                    nativeStart: i,
                    end: d.end,
                    distance: r,
                    trig: d
                  }), e.setPositions(e.start, e.end + (s ? -d.start : r), !0)
                }
            },
            V = (e, t) => {
              o.forEach((a => U(a, e, t)))
            },
            $ = () => {
              R(), requestAnimationFrame(R), o && (Va.getAll().forEach((e => {
                e._startNative = e.start, e._endNative = e.end
              })), o.forEach((e => {
                let t = e._startClamp || e.start,
                  a = e.autoSpeed ? Math.min(Qa(), e.end) : t + Math.abs((e.end - t) / e.ratio),
                  r = a - e.end;
                if (t -= r / 2, a -= r / 2, t > a) {
                  let e = t;
                  t = a, a = e
                }
                e._startClamp && t < 0 ? (a = e.ratio < 0 ? Qa() : e.end / e.ratio, r = a - e.end, t = 0) : (e.ratio < 0 || e._endClamp && a >= Qa()) && (a = Qa(), t = e.ratio < 0 || e.ratio > 1 ? 0 : a - (a - e.start) / e.ratio, r = (a - t) * e.ratio - (e.end - e.start)), e.offset = r || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(t, a, !0)
              })), V(Va.sort())), O.reset()
            },
            q = () => Va.addEventListener("refresh", $),
            Y = () => o && o.forEach((e => e.vars.onRefresh(e))),
            X = () => (o && o.forEach((e => e.vars.onRefreshInit(e))), Y),
            W = (e, t, a, r) => () => {
              let s = "function" == typeof t ? t(a, r) : t;
              s || 0 === s || (s = r.getAttribute("data-" + j + e) || ("speed" === e ? 1 : 0)), r.setAttribute("data-" + j + e, s);
              let o = "clamp(" === (s + "").substr(0, 6);
              return {
                clamp: o,
                value: o ? s.substr(6, s.length - 7) : s
              }
            },
            G = (e, t, r, s, n) => {
              n = ("function" == typeof n ? n(s, e) : n) || 0;
              let i, c, l, d, m, u, g = W("speed", t, s, e),
                p = W("lag", r, s, e),
                h = Pa.getProperty(e, "y"),
                f = e._gsap,
                b = [],
                v = () => {
                  t = g(), r = parseFloat(p().value), i = parseFloat(t.value) || 1, l = "auto" === t.value, m = l || c && c._startClamp && c.start <= 0 || b.offset ? 0 : c && c._endClamp && c.end === Qa() ? 1 : .5, d && d.kill(), d = r && Pa.to(e, {
                    ease: qa,
                    overwrite: !1,
                    y: "+=0",
                    duration: r
                  }), c && (c.ratio = i, c.autoSpeed = l)
                },
                x = () => {
                  f.y = h + "px", f.renderTransform(1), v()
                },
                k = [],
                _ = 0,
                y = t => {
                  if (l) {
                    x();
                    let a = ((e, t) => {
                      let a, r, s = e.parentNode || Da,
                        o = e.getBoundingClientRect(),
                        n = s.getBoundingClientRect(),
                        i = n.top - o.top,
                        c = n.bottom - o.bottom,
                        l = (Math.abs(i) > Math.abs(c) ? i : c) / (1 - t),
                        d = -l * t;
                      return l > 0 && (a = n.height / (Aa.innerHeight + n.height), r = .5 === a ? 2 * n.height : 2 * Math.min(n.height, Math.abs(-l * a / (2 * a - 1))) * (t || 1), d += t ? -r * t : -r / 2, l += r), {
                        change: l,
                        offset: d
                      }
                    })(e, Ua(0, 1, -t.start / (t.end - t.start)));
                    _ = a.change, u = a.offset
                  } else u = b.offset || 0, _ = (t.end - t.start - u) * (1 - i);
                  b.forEach((e => _ -= e.distance * (1 - i))), t.offset = _ || .001, t.vars.onUpdate(t), d && d.progress(1)
                };
              return v(), (1 !== i || l || d) && (c = Va.create({
                trigger: l ? e.parentNode : e,
                start: () => t.clamp ? "clamp(top bottom+=" + n + ")" : "top bottom+=" + n,
                end: () => t.value < 0 ? "max" : t.clamp ? "clamp(bottom top-=" + n + ")" : "bottom top-=" + n,
                scroller: a,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: x,
                onRefresh: y,
                onKill: e => {
                  let t = o.indexOf(e);
                  t >= 0 && o.splice(t, 1), x()
                },
                onUpdate: e => {
                  let t, a, r, s = h + _ * (e.progress - m),
                    o = b.length,
                    n = 0;
                  if (e.offset) {
                    if (o) {
                      for (a = -M, r = e.end; o--;) {
                        if (t = b[o], t.trig.isActive || a >= t.start && a <= t.end) return void(d && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), d.resetTo("y", parseFloat(f.y), -N, !0), E && d.progress(1)));
                        a > t.end && (n += t.distance), r -= t.distance
                      }
                      s = h + n + _ * ((Pa.utils.clamp(e.start, e.end, a) - e.start - n) / (r - e.start) - m)
                    }
                    k.length && !l && k.forEach((e => e(s - n))), i = s + u, s = Math.round(1e5 * i) / 1e5 || 0, d ? (d.resetTo("y", s, -N, !0), E && d.progress(1)) : (f.y = s + "px", f.renderTransform(1))
                  }
                  var i
                }
              }), y(c), Pa.core.getCache(c.trigger).stRevert = X, c.startY = h, c.pins = b, c.markers = k, c.ratio = i, c.autoSpeed = l, e.style.willChange = "transform"), c
            };

          function H() {
            return r = t.clientHeight, t.style.overflow = "visible", Ba.style.height = Aa.innerHeight + (r - Aa.innerHeight) / S + "px", r - Aa.innerHeight
          }
          q(), Va.addEventListener("killAll", q), Pa.delayedCall(.5, (() => E = 0)), this.scrollTop = D, this.scrollTo = (e, t, a) => {
            let r = Pa.utils.clamp(0, Qa(), isNaN(e) ? this.offset(e, a) : +e);
            t ? d ? Pa.to(this, {
              duration: C,
              scrollTop: r,
              overwrite: "auto",
              ease: qa
            }) : T(r) : D(r)
          }, this.offset = (e, t) => {
            let a, r = (e = Fa(e)[0]).style.cssText,
              s = Va.create({
                trigger: e,
                start: t || "top top"
              });
            return o && (E ? Va.refresh() : V([s], !0)), a = s.start / S, s.kill(!1), e.style.cssText = r, Pa.core.getCache(e).uncache = 1, a
          }, this.content = function(e) {
            if (arguments.length) {
              let a = Fa(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || Ba.children[0];
              return a !== t && (t = a, l = t.getAttribute("style") || "", B && B.observe(t), Pa.set(t, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), C || Pa.set(t, {
                clearProps: "transform"
              })), this
            }
            return t
          }, this.wrapper = function(e) {
            return arguments.length ? (a = Fa(e || "#smooth-wrapper")[0] || (e => {
              let t = za.querySelector(".ScrollSmoother-wrapper");
              return t || (t = za.createElement("div"), t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t
            })(t), c = a.getAttribute("style") || "", H(), Pa.set(a, C ? {
              overflow: "hidden",
              position: "fixed",
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            } : {
              overflow: "visible",
              position: "relative",
              width: "100%",
              height: "auto",
              top: "auto",
              bottom: "auto",
              left: "auto",
              right: "auto"
            }), this) : a
          }, this.effects = (e, t) => {
            if (o || (o = []), !e) return o.slice(0);
            (e = Fa(e)).forEach((e => {
              let t = o.length;
              for (; t--;) o[t].trigger === e && o[t].kill()
            })), t = t || {};
            let a, r, {
                speed: s,
                lag: n,
                effectsPadding: i
              } = t,
              c = [];
            for (a = 0; a < e.length; a++) r = G(e[a], s, n, a, i), r && c.push(r);
            return o.push(...c), c
          }, this.sections = (e, t) => {
            if (n || (n = []), !e) return n.slice(0);
            let a = Fa(e).map((e => Va.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: t => {
                e.style.opacity = t.isActive ? "1" : "0", e.style.pointerEvents = t.isActive ? "all" : "none"
              }
            })));
            return t && t.add ? n.push(...a) : n = a.slice(0), a
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => z(e || 0 === e ? e : M), this.getVelocity = () => O.getVelocity(-M), Va.scrollerProxy(a, {
            scrollTop: D,
            scrollHeight: () => H() && Ba.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!C,
            content: t,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: Aa.innerWidth,
              height: Aa.innerHeight
            })
          }), Va.defaults({
            scroller: a
          });
          let K = Va.getAll().filter((e => e.scroller === Aa || e.scroller === a));
          K.forEach((e => e.revert(!0, !0))), s = Va.create({
            animation: Pa.fromTo(P, {
              y: 0
            }, {
              y: () => -H(),
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function() {
                if (this._dur) {
                  let e = p;
                  e && (A(s), P.y = M), z(P.y, e), I(), b && !d && b(w)
                }
              }
            }),
            onRefreshInit: e => {
              if (Ja.isRefreshing) return;
              if (Ja.isRefreshing = !0, o) {
                let e = Va.getAll().filter((e => !!e.pin));
                o.forEach((t => {
                  t.vars.pinnedContainer || e.forEach((e => {
                    if (e.pin.contains(t.trigger)) {
                      let a = t.vars;
                      a.pinnedContainer = e.pin, t.vars = null, t.init(a, t.animation)
                    }
                  }))
                }))
              }
              let t = e.getTween();
              g = t && t._end > t._dp._time, u = M, P.y = 0, C && (1 === Va.isTouch && (a.style.position = "absolute"), a.scrollTop = 0, 1 === Va.isTouch && (a.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, H() / S), g || A(e), P.y = -T() * S, z(P.y), E || e.animation.progress(Pa.utils.clamp(0, 1, u / S / -e.end)), g && (e.progress -= .001, e.update()), Ja.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: Aa,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => H() / S,
            onScrubComplete: () => {
              O.reset(), v && v(this)
            },
            scrub: C || !0
          }), this.smooth = function(t) {
            return arguments.length && (C = t || 0, S = C && +e.speed || 1, s.scrubDuration(t)), s.getTween() ? s.getTween().duration() : 0
          }, s.getTween() && (s.getTween().vars.ease = e.ease || qa), this.scrollTrigger = s, e.effects && this.effects(!0 === e.effects ? "[data-" + j + "speed], [data-" + j + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), K.forEach((e => {
            e.vars.scroller = a, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, t) {
            return arguments.length ? (!!d !== e && (e ? (s.getTween() && s.getTween().pause(), T(-M / S), O.reset(), m = Va.normalizeScroll(), m && m.disable(), d = Va.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => D(-M)
            }), d.nested = Xa(Da, "wheel,touch,scroll", !0, !1 !== t)) : (d.nested.kill(), d.kill(), d = 0, m && m.enable(), s.progress = (-M / S - s.start) / (s.end - s.start), A(s))), this) : !!d
          }, this.kill = this.revert = () => {
            this.paused(!1), A(s), s.kill();
            let e = (o || []).concat(n || []),
              r = e.length;
            for (; r--;) e[r].kill();
            Va.scrollerProxy(a), Va.removeEventListener("killAll", q), Va.removeEventListener("refresh", $), a.style.cssText = c, t.style.cssText = l;
            let d = Va.defaults({});
            d && d.scroller === a && Va.defaults({
              scroller: Aa
            }), this.normalizer && Va.normalizeScroll(!1), clearInterval(i), $a = null, B && B.disconnect(), Ba.style.removeProperty("height"), Aa.removeEventListener("focusin", L)
          }, this.refresh = (e, t) => s.refresh(e, t), _ && (this.normalizer = Va.normalizeScroll(!0 === _ ? {
            debounce: !0,
            content: !C && t
          } : _)), Va.config(e), "overscrollBehavior" in Aa.getComputedStyle(Ba) && Pa.set([Ba, Da], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in Aa.getComputedStyle(Ba) && Pa.set([Ba, Da], {
            scrollBehavior: "auto"
          }), Aa.addEventListener("focusin", L), i = setInterval(I, 250), "loading" === za.readyState || requestAnimationFrame((() => Va.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return Ra || (Pa = e || Ka(), Ha() && window.document && (Aa = window, za = document, Da = za.documentElement, Ba = za.body), Pa && (Fa = Pa.utils.toArray, Ua = Pa.utils.clamp, qa = Pa.parseEase("expo"), Wa = Pa.core.context || function() {}, Va = Pa.core.globals().ScrollTrigger, Pa.core.globals("ScrollSmoother", Ja), Ba && Va && (Ga = Pa.delayedCall(.2, (() => Va.isRefreshing || $a && $a.refresh())).pause(), La = [Aa, za, Da, Ba], Ya = Va.core._getVelocityProp, Xa = Va.core._inputObserver, Ja.refresh = Va.refresh, Ra = 1))), Ra
        }
      }
      Ja.version = "3.12.2", Ja.create = e => $a && e && $a.content() === Fa(e.content)[0] ? $a : new Ja(e), Ja.get = () => $a, Ka() && Pa.registerPlugin(Ja);
      let Za, er, tr, ar, rr, sr, or, nr, ir = () => "undefined" != typeof window,
        cr = () => Za || ir() && (Za = window.gsap) && Za.registerPlugin && Za,
        lr = e => "string" == typeof e,
        dr = e => "function" == typeof e,
        mr = (e, t) => {
          let a = "x" === t ? "Width" : "Height",
            r = "scroll" + a,
            s = "client" + a;
          return e === tr || e === ar || e === rr ? Math.max(ar[r], rr[r]) - (tr["inner" + a] || ar[s] || rr[s]) : e[r] - e["offset" + a]
        },
        ur = (e, t) => {
          let a = "scroll" + ("x" === t ? "Left" : "Top");
          return e === tr && (null != e.pageXOffset ? a = "page" + t.toUpperCase() + "Offset" : e = null != ar[a] ? ar : rr), () => e[a]
        },
        gr = (e, t) => {
          if (!(e = sr(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
          };
          let a = e.getBoundingClientRect(),
            r = !t || t === tr || t === rr,
            s = r ? {
              top: ar.clientTop - (tr.pageYOffset || ar.scrollTop || rr.scrollTop || 0),
              left: ar.clientLeft - (tr.pageXOffset || ar.scrollLeft || rr.scrollLeft || 0)
            } : t.getBoundingClientRect(),
            o = {
              x: a.left - s.left,
              y: a.top - s.top
            };
          return !r && t && (o.x += ur(t, "x")(), o.y += ur(t, "y")()), o
        },
        pr = (e, t, a, r, s) => isNaN(e) || "object" == typeof e ? lr(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + r - s : "max" === e ? mr(t, a) - s : Math.min(mr(t, a), gr(e, t)[a] - s) : parseFloat(e) - s,
        hr = () => {
          Za = cr(), ir() && Za && "undefined" != typeof document && document.body && (tr = window, rr = document.body, ar = document.documentElement, sr = Za.utils.toArray, Za.config({
            autoKillThreshold: 7
          }), or = Za.config(), er = 1)
        };
      const fr = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register(e) {
          Za = e, hr()
        },
        init(e, t, a, r, s) {
          er || hr();
          let o = this,
            n = Za.getProperty(e, "scrollSnapType");
          o.isWin = e === tr, o.target = e, o.tween = a, t = ((e, t, a, r) => {
            if (dr(e) && (e = e(t, a, r)), "object" != typeof e) return lr(e) && "max" !== e && "=" !== e.charAt(1) ? {
              x: e,
              y: e
            } : {
              y: e
            };
            if (e.nodeType) return {
              y: e,
              x: e
            }; {
              let s, o = {};
              for (s in e) o[s] = "onAutoKill" !== s && dr(e[s]) ? e[s](t, a, r) : e[s];
              return o
            }
          })(t, r, e, s), o.vars = t, o.autoKill = !!t.autoKill, o.getX = ur(e, "x"), o.getY = ur(e, "y"), o.x = o.xPrev = o.getX(), o.y = o.yPrev = o.getY(), nr || (nr = Za.core.globals().ScrollTrigger), "smooth" === Za.getProperty(e, "scrollBehavior") && Za.set(e, {
            scrollBehavior: "auto"
          }), n && "none" !== n && (o.snap = 1, o.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != t.x ? (o.add(o, "x", o.x, pr(t.x, e, "x", o.x, t.offsetX || 0), r, s), o._props.push("scrollTo_x")) : o.skipX = 1, null != t.y ? (o.add(o, "y", o.y, pr(t.y, e, "y", o.y, t.offsetY || 0), r, s), o._props.push("scrollTo_y")) : o.skipY = 1
        },
        render(e, t) {
          let a, r, s, o, n, i = t._pt,
            {
              target: c,
              tween: l,
              autoKill: d,
              xPrev: m,
              yPrev: u,
              isWin: g,
              snap: p,
              snapInline: h
            } = t;
          for (; i;) i.r(e, i.d), i = i._next;
          a = g || !t.skipX ? t.getX() : m, r = g || !t.skipY ? t.getY() : u, s = r - u, o = a - m, n = or.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), d && (!t.skipX && (o > n || o < -n) && a < mr(c, "x") && (t.skipX = 1), !t.skipY && (s > n || s < -n) && r < mr(c, "y") && (t.skipY = 1), t.skipX && t.skipY && (l.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(l, t.vars.onAutoKillParams || []))), g ? tr.scrollTo(t.skipX ? a : t.x, t.skipY ? r : t.y) : (t.skipY || (c.scrollTop = t.y), t.skipX || (c.scrollLeft = t.x)), !p || 1 !== e && 0 !== e || (r = c.scrollTop, a = c.scrollLeft, h ? c.style.scrollSnapType = h : c.style.removeProperty("scroll-snap-type"), c.scrollTop = r + 1, c.scrollLeft = a + 1, c.scrollTop = r, c.scrollLeft = a), t.xPrev = t.x, t.yPrev = t.y, nr && nr.update()
        },
        kill(e) {
          let t = "scrollTo" === e;
          (t || "scrollTo_x" === e) && (this.skipX = 1), (t || "scrollTo_y" === e) && (this.skipY = 1)
        }
      };
      fr.max = mr, fr.getOffset = gr, fr.buildGetter = ur, cr() && Za.registerPlugin(fr);
      const br = e => {
        const t = h(),
          a = (e, r) => r?.requiresAuth && !t.nickname ? e : [...e, {
            ...r,
            ...r.children ? {
              children: r.children.reduce(a, [])
            } : []
          }];
        return (0, i.useMemo)((() => e.reduce(a, [])), [e, t.nickname])
      };
      var vr = a(270),
        xr = a(901);
      const kr = (e, t, a, r) => ({
          event: e || "nav_click",
          link_url: t,
          text: a,
          element_placement: `Global Nav > ${r}`
        }),
        _r = () => {
          const e = p(),
            t = (() => {
              const e = (0, i.useContext)(u);
              if (void 0 === e) throw new Error("useNavigationLocale must be used within a Navigation Provider");
              return e.locale
            })(),
            a = h();
          return s => {
            if (!s.path) return s.domain;
            const o = [
                ["username", a.nickname]
              ],
              n = ((e, t) => t.reduce(((e, t) => {
                let [a, r] = t;
                return e.replaceAll(`{${a}}`, r)
              }), e))(s.path, o),
              i = "www" === s.domain && "www" !== e.currentSite.site ? ((e, t) => {
                if (!t || t.iso === r.englishLocale.iso) return e;
                const a = t.subdomaincom;
                return "/" === e[0] ? a + e : `${a}/${e}`
              })(n, t) : n;
            return s.domain + i
          }
        },
        yr = "nav-internal",
        wr = "nav-external",
        jr = "nav-dropdown",
        Tr = "nav-no-link",
        Cr = "games-menu",
        Sr = (0, r.defineMessages)({
          nav_rockstargames_home: {
            id: "nav_rockstargames_home",
            defaultMessage: "Rockstar Games Home"
          },
          nav_rockstargames_logo: {
            id: "nav_rockstargames_logo",
            defaultMessage: "Click to open menu"
          },
          games_menu_featured: {
            id: "games_menu_featured",
            defaultMessage: "Featured Games"
          },
          games_menu_view_all: {
            id: "games_menu_view_all",
            defaultMessage: "View All"
          },
          games_menu_gta_v: {
            id: "games_menu_gta_v",
            defaultMessage: "Grand Theft Auto V"
          },
          games_menu_gta_online: {
            id: "games_menu_gta_online",
            defaultMessage: "Grand Theft Auto Online"
          },
          games_menu_gta_trilogy: {
            id: "games_menu_gta_trilogy",
            defaultMessage: "Grand Theft Auto: The Trilogy"
          },
          games_menu_rdr_2: {
            id: "games_menu_rdr_2",
            defaultMessage: "Red Dead Redemption 2"
          },
          games_menu_rdr_online: {
            id: "games_menu_rdr_online",
            defaultMessage: "Red Dead Online"
          },
          games_menu_rdr: {
            id: "games_menu_rdr",
            defaultMessage: "Red Dead Redemption"
          },
          search_action: {
            id: "search_action",
            defaultMessage: "Search"
          },
          search_open_button: {
            id: "search_open_button",
            defaultMessage: "Open Search"
          },
          search_close_button: {
            id: "search_close_button",
            defaultMessage: "Close Search"
          },
          search_placeholder: {
            id: "search_placeholder",
            defaultMessage: "Search Rockstar Games..."
          },
          search_target_aria_label: {
            id: "search_target_aria_label",
            defaultMessage: "Search {target}"
          },
          nav_view_all_games: {
            id: "nav_view_all_games",
            defaultMessage: "View All"
          },
          nav_quick_access_home: {
            id: "nav_quick_access_home",
            defaultMessage: "Home"
          },
          nav_quick_access_games: {
            id: "nav_quick_access_games",
            defaultMessage: "Games"
          },
          nav_quick_access_newswire: {
            id: "nav_quick_access_newswire",
            defaultMessage: "Newswire"
          },
          nav_more_dropdown: {
            id: "nav_more_dropdown",
            defaultMessage: "More"
          },
          quick_access_title: {
            id: "quick_access_title",
            defaultMessage: "Rockstar Games"
          },
          nav_search_error_too_short: {
            id: "nav_search_error_too_short",
            defaultMessage: "Your search query is too short. Queries must be at least {count} characters long."
          },
          nav_search_error_invalid_chars: {
            id: "nav_search_error_too_short_invalid_chars",
            defaultMessage: "Your search query contains invalid characters ({invalidChars}). Remove these and try again."
          },
          nav_opens_in_new_window: {
            id: "nav_opens_in_new_window",
            defaultMessage: "{text} (Link opens in new window)"
          },
          accessibility_skip_button: {
            id: "accessibility_skip_button",
            defaultMessage: "Skip the Menu"
          }
        }),
        Mr = e => {
          let {
            children: t,
            location: a,
            className: o,
            isLegacy: l,
            label: d,
            type: m,
            target: u,
            gaEvent: g,
            gaText: p,
            gaBreadCrumb: h,
            dataTestId: f,
            onClick: b,
            ...v
          } = e;
          const x = (0, r.useIntl)(),
            {
              track: _
            } = (0, s.useGtmTrack)(),
            y = _r(),
            {
              dispatch: w
            } = (0, n.useRockstarEventDispatcher)(),
            j = k(),
            T = (0, i.useMemo)((() => {
              const e = {};
              return "_blank" === u && (e["aria-label"] = x.formatMessage(Sr.nav_opens_in_new_window, {
                text: d
              }), e.rel = "noopener"), e
            }), [d, u]);
          if (!a && m === Tr && f) {
            const e = () => {
              _(kr(g, "", p, h)), w(f)
            };
            return (0, c.jsx)("button", {
              type: "button",
              className: o,
              onClick: () => e(),
              "data-testid": f,
              ...v,
              ...T,
              children: t
            })
          }
          if (!a) return null;
          const C = y(a),
            S = Boolean(m === wr || l || document.documentElement.classList.contains("legacyPage"));
          return (0, c.jsx)(xr.A, {
            className: o,
            target: u,
            to: C,
            onClick: () => (b?.(), void _(kr(g, C.toString(), p, h))),
            onNavigate: j,
            reloadDocument: S,
            "data-testid": f,
            ...v,
            ...T,
            children: t
          })
        },
        Nr = {
          callToAction: "rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770",
          highlight: "rockstargames-modules-core-headerd468a02858ad85269a394854bce5e316"
        },
        Er = e => {
          let {
            children: t,
            dataTestId: a,
            location: r,
            variant: s,
            gaEvent: o,
            gaText: n,
            target: i,
            onClick: l
          } = e;
          return (0, c.jsx)("div", {
            className: Nr.callToActionContainer,
            children: (0, c.jsx)(Mr, {
              className: [Nr.callToAction, s ? Nr[s] : ""].join(" "),
              dataTestId: a,
              location: r,
              gaEvent: o,
              gaText: n,
              gaBreadCrumb: n,
              onClick: l,
              target: i,
              children: t
            })
          })
        };
      var Or = a(3582);
      const Ir = {
          quickFade: {
            duration: .1
          },
          staggerFade: {
            ease: "easeOut",
            duration: .4
          },
          springOpen: {
            type: "spring",
            stiffness: 300,
            damping: 35
          },
          springClose: {
            type: "spring",
            stiffness: 400,
            damping: 40
          },
          hamburgerOpen: {
            type: "spring",
            duration: .6,
            bounce: 0
          },
          hamburgerClose: {
            type: "spring",
            duration: .4,
            bounce: 0
          }
        },
        Pr = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        },
        Rr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        Ar = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg",
        zr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
        Dr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg",
        Br = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg",
        Lr = {
          pillBtn: "rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac",
          selected: "rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e",
          pillButton: "rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f"
        },
        Fr = e => {
          let {
            children: t,
            selected: a,
            ...r
          } = e;
          return (0, c.jsx)("button", {
            type: "button",
            className: [Lr.pillButton, a ? Lr.selected : ""].join(" "),
            ...r,
            children: t
          })
        };
      var Ur = a(5971);
      const Vr = {
          pillBtn: "rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513",
          selected: "rockstargames-modules-core-headerdc9de673c49d945b85a20bf5e859500a",
          subMenu: "rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7",
          fadeIn: "rockstargames-modules-core-headerae886af8e4ee1f3fa82f58141f31dccb"
        },
        $r = {
          enter: {
            opacity: 1,
            zIndex: 101,
            visibility: "visible"
          },
          exit: {
            opacity: 0,
            zIndex: 100,
            transitionEnd: {
              visibility: "hidden"
            }
          }
        },
        qr = e => {
          let {
            openerRef: t,
            isOpen: a,
            isMobile: r,
            children: s
          } = e;
          const [o, n] = (0, i.useState)(null), {
            styles: l,
            attributes: d,
            forceUpdate: m
          } = (0, Ur.usePopper)(t, o, {
            placement: "bottom-start",
            modifiers: [{
              name: "offset",
              enabled: !0,
              options: {
                offset: [0, 4]
              }
            }, {
              name: "preventOverflow",
              options: {
                padding: 8,
                altAxis: !r
              }
            }]
          });
          return (0, i.useEffect)((() => {
            Promise.resolve().then(m)
          }), [t, a, r]), (0, c.jsx)(Or.motion.div, {
            initial: "exit",
            animate: a ? "enter" : "exit",
            transition: Ir.quickFade,
            variants: $r,
            className: [Vr.subMenu].join(" "),
            style: {
              ...l.popper
            },
            ref: n,
            ...d.popper,
            children: s
          })
        },
        Yr = e => {
          let {
            children: t,
            ...a
          } = e;
          return (0, c.jsx)("button", {
            type: "button",
            className: "rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13",
            ...a,
            children: t
          })
        },
        Xr = {
          backgroundElevation: "rockstargames-modules-core-headerddaf896d4deca83f6d4a43dde2449ed6",
          backgroundOverlay: "rockstargames-modules-core-headere39052a22cbfec8136c7f57d9e910820",
          backgroundVisible: "rockstargames-modules-core-headerdd3818dff0e6f7bd2777880270cbdabb"
        },
        Wr = e => {
          let {
            children: t,
            isOpen: a,
            onClose: r,
            visible: s
          } = e;
          return a ? (0, c.jsxs)("div", {
            className: [Xr.backgroundElevation].join(" "),
            onClick: r,
            children: [(0, c.jsx)("div", {
              className: [Xr.backgroundOverlay, s ? Xr.backgroundVisible : ""].join(" ")
            }), t]
          }) : null
        },
        Gr = e => {
          let {
            target: t,
            selected: a,
            selectedTarget: s,
            onClick: o,
            isMobile: n,
            ...l
          } = e;
          const d = (0, r.useIntl)(),
            [m, u] = (0, i.useState)(!1),
            [g, p] = (0, i.useState)(null);
          return t.type === jr ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("div", {
              ref: p,
              children: (0, c.jsxs)(Fr, {
                "aria-label": d.formatMessage(Sr.search_target_aria_label, {
                  target: s && t?.targets?.indexOf(s) >= 0 ? s.text : t.text
                }),
                selected: a,
                onClick: () => u(!m),
                ...l,
                children: [s && t?.targets?.indexOf(s) >= 0 ? s.text : t.text, (0, c.jsx)("img", {
                  src: zr,
                  alt: ""
                })]
              }, t.gaText)
            }), (0, c.jsx)(Wr, {
              isOpen: m,
              onClose: () => u(!1),
              children: (0, c.jsx)(qr, {
                isOpen: m,
                openerRef: g,
                isMobile: n,
                children: t.targets?.map((e => (0, c.jsx)(Yr, {
                  "aria-label": d.formatMessage(Sr.search_target_aria_label, {
                    target: e.text
                  }),
                  onClick: () => o(e),
                  children: e.text
                }, e.gaText)))
              })
            })]
          }) : (0, c.jsx)(Fr, {
            "aria-label": d.formatMessage(Sr.search_target_aria_label, {
              target: t.text
            }),
            selected: a,
            onClick: () => o(t),
            ...l,
            children: t.text
          }, t.tab)
        },
        Hr = {
          secondaryNavigationSlide: "rockstargames-modules-core-headerbf9f9a25ea6f9aa44b4b2ab52512e335",
          secondaryNavigationOverlay: "rockstargames-modules-core-headerbbd3cc8e4460000b11ca8ef9b0eee345",
          open: "rockstargames-modules-core-headerb5c4f53ad11e76bbf9b1324c766560ad"
        },
        Kr = e => {
          let {
            children: t,
            isOpen: a,
            onMouseClick: r,
            onEscapeKey: s,
            onMouseAway: o,
            style: n
          } = e;
          const l = a ? [Hr.open] : [],
            d = e => {
              "Escape" === e.key && s?.()
            };
          return (0, i.useEffect)((() => (a ? window.addEventListener("keyup", d) : window.removeEventListener("keyup", d), () => window.removeEventListener("keyup", d))), [d, a]), a ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("div", {
              className: [Hr.secondaryNavigationOverlay, ...l].join(" "),
              onClick: r,
              onMouseEnter: o,
              style: n
            }), t && (0, c.jsx)("div", {
              className: [Hr.secondaryNavigationSlide, ...l].join(" "),
              children: t
            })]
          }) : null
        },
        Qr = e => {
          let {
            handleSearch: t,
            handleSearchKeypress: a,
            handleSearchTargetSelect: s,
            setIsSearchOpen: o,
            setSearchQuery: n,
            isSearchOpen: l,
            searchQuery: d,
            selectedTarget: m,
            selectedTargetIndex: u,
            isSearchPage: g,
            searchError: p,
            maxSearchLength: h
          } = e;
          const f = (0, r.useIntl)(),
            v = b(),
            x = (0, i.useRef)(null),
            k = () => {
              o(), g || n(""), x?.current?.focus()
            },
            _ = () => {
              g || o()
            };
          return (0, i.useEffect)((() => {
            l ? x?.current?.focus() : x?.current?.blur()
          }), [l]), (0, c.jsxs)("div", {
            children: [(0, c.jsx)("button", {
              className: "rockstargames-modules-core-headerb14c9a28c3b2b3a58eb8a465f480fd60",
              type: "button",
              onClick: k,
              "data-testid": "searchToggle",
              children: (0, c.jsx)("img", {
                src: Rr,
                alt: f.formatMessage(l ? Sr.search_close_button : Sr.search_open_button)
              })
            }), (0, c.jsx)(Or.AnimatePresence, {
              children: l && (0, c.jsxs)("div", {
                children: [(0, c.jsx)(Kr, {
                  isOpen: !g,
                  onEscapeKey: _,
                  onMouseClick: _
                }), (0, c.jsxs)(Or.motion.div, {
                  className: "rockstargames-modules-core-headerce9e8c7dd9562ae75b9543b27f740642",
                  initial: {
                    height: 0,
                    overflow: "hidden"
                  },
                  animate: {
                    height: "auto",
                    overflow: "initial"
                  },
                  exit: {
                    height: 0,
                    overflow: "hidden",
                    transition: Ir.springClose
                  },
                  transition: Ir.springOpen,
                  "data-testid": "searchBar",
                  children: [(0, c.jsxs)(Or.motion.div, {
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    exit: {
                      opacity: 0,
                      transition: {
                        duration: .1,
                        ease: "easeOut"
                      }
                    },
                    transition: {
                      duration: .3,
                      ease: "easeIn",
                      delay: .1
                    },
                    className: "rockstargames-modules-core-headerb6ffd9ebe8ffa3ac0f4e248ca522036b",
                    children: [(0, c.jsx)("div", {
                      className: "rockstargames-modules-core-headerdeb8b97cd5fbb70486ad3c025601d43d",
                      children: (0, c.jsx)("button", {
                        type: "button",
                        onClick: t,
                        children: (0, c.jsx)("img", {
                          src: Rr,
                          alt: f.formatMessage(Sr.search_action)
                        })
                      })
                    }), (0, c.jsx)("div", {
                      className: "rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f",
                      children: (0, c.jsx)("input", {
                        type: "textfield",
                        value: d,
                        onChange: e => n(e.target.value),
                        onKeyUp: a,
                        placeholder: f.formatMessage(Sr.search_placeholder),
                        ref: x,
                        enterKeyHint: "search",
                        maxLength: h
                      })
                    }), (0, c.jsx)("div", {
                      className: "rockstargames-modules-core-headerf1bedf210587b5186fca4d243f05a1aa",
                      children: v.targets.map(((e, t) => (0, c.jsx)(Gr, {
                        target: e,
                        onClick: e => s(e, t),
                        selected: u === t,
                        selectedTarget: m
                      }, e.tab)))
                    }), !g && (0, c.jsx)("div", {
                      className: "rockstargames-modules-core-headerea7dbbd5e60585f29ab22be3d18988fd",
                      children: (0, c.jsx)("button", {
                        type: "button",
                        onClick: k,
                        children: (0, c.jsx)("img", {
                          src: Ar,
                          alt: f.formatMessage(Sr.search_close_button)
                        })
                      })
                    })]
                  }), p && (0, c.jsx)("div", {
                    className: "rockstargames-modules-core-headerc3e3363c5e7b53755b9c9afcc262ccb6",
                    "aria-live": "polite",
                    children: p
                  })]
                })]
              })
            })]
          })
        },
        Jr = {
          search: "rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1",
          targetsOuter: "rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd",
          hasScroll: "rockstargames-modules-core-headere3fe68b0501338fe7b3cbed75b1773c8",
          targets: "rockstargames-modules-core-headerc11370021ff4c9655878886a3a69c746",
          errorMessage: "rockstargames-modules-core-headerbf16fe605728a09b0a5c269d57371bfa"
        },
        Zr = e => {
          let {
            handleSearch: t,
            handleSearchKeypress: a,
            handleSearchTargetSelect: s,
            setIsSearchOpen: o,
            setSearchQuery: n,
            isSearchOpen: l,
            searchQuery: d,
            selectedTarget: m,
            selectedTargetIndex: u,
            isSearchPage: g,
            searchError: p,
            maxSearchLength: h
          } = e;
          const f = (0, r.useIntl)(),
            v = b(),
            x = (0, i.useRef)(null),
            [k, _] = (0, i.useState)(!1);
          return (0, i.useEffect)((() => {
            let e, t, a = !1;
            const r = r => {
                x && x.current && (r.preventDefault(), a = !0, e = r.pageX - x.current.offsetLeft, t = x.current.scrollLeft)
              },
              s = () => {
                a = !1
              },
              o = r => {
                if (a && (r.preventDefault(), x && x.current)) {
                  const a = r.pageX - x.current.offsetLeft - e;
                  x.current.scrollLeft = t - a
                }
              },
              n = () => {
                if (x && x.current) {
                  const e = x.current.scrollLeft;
                  _(e > 20)
                }
              };
            if (x && x.current) {
              const e = x.current;
              e.addEventListener("mousedown", r), e.addEventListener("mouseup", s), e.addEventListener("mouseleave", s), e.addEventListener("mousemove", o), e.addEventListener("scroll", n)
            }
            return () => {
              x && x.current && (x.current.removeEventListener("mousedown", r), x.current.removeEventListener("mouseup", s), x.current.removeEventListener("mouseleave", s), x.current.removeEventListener("mousemove", o), x.current.removeEventListener("scroll", n))
            }
          })), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)(Or.motion.div, {
              className: Jr.search,
              variants: Pr,
              transition: Ir.staggerFade,
              "data-testid": "searchBar",
              children: [(0, c.jsx)("button", {
                type: "button",
                onClick: () => l ? t() : o(!0),
                children: (0, c.jsx)("img", {
                  src: Rr,
                  alt: f.formatMessage(Sr.search_action)
                })
              }), (0, c.jsx)("input", {
                type: "text",
                value: d,
                onChange: e => n(e.target.value),
                onFocus: () => o(!0),
                onKeyUp: a,
                placeholder: f.formatMessage(Sr.search_placeholder),
                enterKeyHint: "search",
                maxLength: h
              }), l && !g && (0, c.jsx)("button", {
                type: "button",
                onClick: () => o(!1),
                children: (0, c.jsx)("img", {
                  src: Ar,
                  alt: f.formatMessage(Sr.search_close_button)
                })
              })]
            }), l && (0, c.jsxs)("div", {
              className: [Jr.targetsOuter, k ? Jr.hasScroll : ""].join(" "),
              children: [(0, c.jsx)("div", {
                className: Jr.targets,
                ref: x,
                children: v.targets.map(((e, t) => (0, c.jsx)(Gr, {
                  target: e,
                  selected: u === t,
                  selectedTarget: m,
                  onClick: e => s(e, t),
                  isMobile: !0
                }, e.tab)))
              }), p && (0, c.jsx)("div", {
                className: Jr.errorMessage,
                "aria-live": "polite",
                children: p
              })]
            })]
          })
        };
      var es = a(6188),
        ts = a.n(es);
      const as = "global-nav-search",
        rs = e => {
          let {
            ...t
          } = e;
          const {
            windowWidth: a
          } = (0, n.useWindowResize)(), {
            pathname: s,
            search: o
          } = x(), l = b(), [d, m] = (0, i.useState)(""), [u, g] = f(), [p, h] = (0, i.useState)(0), [_, y] = (0, i.useState)(l.targets[0]), [w, j] = (0, i.useState)(""), T = (() => {
            const e = _r(),
              t = k();
            return (a, r) => {
              const s = new URLSearchParams(r.params),
                o = r.path?.replace("{term}", a);
              s.forEach(((e, t) => {
                "{query}" === e && s.set(t, a)
              }));
              const n = s.toString() ? `?${s.toString()}` : "",
                i = {
                  domain: r.domain,
                  path: o + n
                },
                c = e(i);
              c ? i.domain ? window.location.href = c : t ? t(c) : window.history.pushState({}, "", c) : console.error(`No search url could be constructed from ${r.domain} and ${r.path}`)
            }
          })(), {
            isSearchPage: C,
            forceSearch: S
          } = v(), M = (0, r.useIntl)(), N = a < 1024, E = C && S || u === as, O = e => {
            if ("" === d) return !1;
            e.length > _.searchOptions.max && m(e.substring(0, _.searchOptions.max));
            const t = _.searchOptions.validationFunction?.(e);
            return e.split(/\s+/).every((e => e.length < _.searchOptions.min)) ? (j(M.formatMessage(Sr.nav_search_error_too_short, {
              count: _.searchOptions.min
            })), !1) : t ? (j(M.formatMessage(Sr.nav_search_error_invalid_chars, {
              invalidChars: [...new Set(t)].join(", ")
            })), !1) : (j(""), !0)
          }, I = () => {
            O(d) && T(d, _.location)
          }, P = (e, t) => {
            let a;
            const r = new URLSearchParams(e);
            return new URLSearchParams(t).forEach(((e, t) => {
              const s = r.get(t);
              "{query}" === e && s ? (a = !0, m(s), O(s)) : a = s === e && !1 !== a
            })), a
          }, R = (e, t) => {
            if (!t) return !1;
            const a = e.split(/[/?]+/),
              r = t.split(/[/?]+/);
            if (r.every(((e, t) => e === a[t] || "{term}" === e || "" === e))) {
              const e = r.findIndex((e => "{term}" === e));
              return e && m(a[e]), !0
            }
            return !1
          };
          (0, i.useEffect)((() => {
            C || (h(0), y(l.targets[0]));
            const e = l.targets.findIndex((e => {
              if ("" === e.type && e.location) {
                if (e.location.path && s.startsWith(e.location.path) && P(o, e.location.params)) return y(e), !0;
                if (!e.location.params && R(s, e.location.path)) return y(e), !0
              }
              if ("nav-dropdown" === e.type) {
                const t = e.targets?.findIndex((e => {
                  if ("" === e.type) {
                    if (e.location.path && s.startsWith(e.location.path) && P(o, e.location.params)) return y(e), !0;
                    if (R(s, e.location.path)) return y(e), !0
                  }
                  return !1
                }));
                return !ts().isNil(t) && t >= 0
              }
            }));
            h(e)
          }), [s, o, C]);
          const A = {
            handleSearch: I,
            handleSearchKeypress: e => {
              j(""), "Enter" === e.key && I()
            },
            handleSearchTargetSelect: (e, t) => {
              y(e), h(t), O(d) && T(d, e.location)
            },
            setIsSearchOpen: () => g(as),
            setSearchQuery: m,
            isSearchOpen: E,
            searchQuery: d,
            selectedTarget: _,
            selectedTargetIndex: p,
            isSearchPage: C,
            searchError: w,
            maxSearchLength: _.searchOptions.max
          };
          return N ? (0, c.jsx)(Zr, {
            ...A,
            ...t
          }) : (0, c.jsx)(Qr, {
            ...A
          })
        },
        ss = e => {
          let {
            cta: t,
            includeSearch: a = !0,
            isMobile: r
          } = e;
          const s = x(),
            o = k(),
            [, n] = f();
          return (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-headerb5fce2c3384850553a25768f9fdbc74c",
            "data-testid": "actions",
            children: [t && (0, c.jsx)("div", {
              children: (0, c.jsx)(Er, {
                variant: t.variant,
                location: t.location,
                dataTestId: t.dataTestId,
                gaEvent: t.ga,
                gaText: t.text,
                target: t.target,
                children: t.text
              })
            }), a && (0, c.jsx)(rs, {}), (0, c.jsxs)("div", {
              children: [(0, c.jsx)(vr.MenuButton, {
                setOtherHeaderDropdowns: n
              }), !r && (0, c.jsx)(vr.Menu, {
                location: s,
                onNavigate: o
              })]
            })]
          })
        },
        os = {
          navigationItem: "rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558",
          active: "rockstargames-modules-core-headere6b2077f3b2a8ad9b1402ed6e0c25f95"
        },
        ns = e => e.replace(/\?.*$/, ""),
        is = (e, t) => e === t,
        cs = e => {
          const {
            pathname: t,
            hostname: a
          } = x();
          return e && e.length ? e.map((e => {
            let {
              domain: r,
              path: s,
              additionalPathMatches: o
            } = e;
            if (r !== a && "" !== r) return null;
            const n = ns(s || ""),
              i = is(n, ns(t));
            let c;
            return o && (c = is(o, ns(t))), Boolean(i || c)
          })) : []
        },
        ls = e => {
          let {
            text: t,
            type: a,
            location: r,
            isLegacy: s,
            gaText: o,
            gaBreadCrumb: n,
            dataTestId: i,
            target: l,
            ...d
          } = e;
          const [m] = cs(r ? [{
            domain: r?.domain,
            path: r?.path,
            end: "nav-internal" === a,
            additionalPathMatches: r?.additionalPathMatches
          }] : []), u = a === wr;
          return (0, c.jsxs)(Mr, {
            className: [os.navigationItem, m ? os.active : ""].join(" "),
            location: r,
            isLegacy: s,
            type: a,
            target: l,
            gaText: o,
            gaBreadCrumb: n,
            dataTestId: i,
            label: t,
            ...d,
            children: [t, u && (0, c.jsx)("img", {
              alt: "",
              src: Dr
            })]
          })
        },
        ds = {
          navigationDropdownButton: "rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b",
          open: "rockstargames-modules-core-headere981dceef9b773c1a38070cf53b88f91",
          active: "rockstargames-modules-core-headere0aebf0d85eeab7cf262811136363f68"
        },
        ms = e => {
          let {
            text: t,
            isOpen: a,
            onClick: r,
            buttonRef: o,
            navChildren: n,
            gaText: l,
            gaBreadCrumb: d,
            dataTestId: m
          } = e;
          const {
            track: u
          } = (0, s.useGtmTrack)(), g = (0, i.useCallback)((() => {
            u(kr(void 0, "", l, d)), r()
          }), [l, d, a, r]), p = (0, i.useMemo)((() => {
            if (!n) return;
            const e = (t, a) => {
              let r;
              return r = a.children ? a.children.reduce(e, []) : a?.location ? [a.location] : [], [...t, ...r]
            };
            return n.reduce(e, [])
          }), [n]), h = cs(p), f = h?.some(Boolean);
          return (0, c.jsx)("div", {
            className: ds.navigationDropdown,
            ref: o,
            children: (0, c.jsxs)("button", {
              className: [ds.navigationDropdownButton, f ? ds.active : "", a ? ds.open : ""].join(" "),
              type: "button",
              "data-testid": m || "navDropdown",
              onClick: g,
              children: [t, (0, c.jsx)("img", {
                src: zr,
                alt: ""
              })]
            })
          })
        },
        us = {
          img: "rockstargames-modules-core-headerd87037fda2ea106061c7a614036a89df",
          wide: "rockstargames-modules-core-headerdc444c089b89129c0a39bc61845d531f"
        };
      (0, n.importAll)(a(6751));
      const gs = e => {
          let {
            isWideCard: t = !1,
            size: r = 640,
            title: s,
            titleSlug: o
          } = e;
          const {
            isMobile: l
          } = (0, n.useWindowResize)(), d = (0, i.useMemo)((() => {
            let e = "";
            return t && (e = l ? a(5877)(`./${o}/mobile.png`) : a(5889)(`./${o}/desktop.png`)), e || (e = a(9294)(`./${o}.jpg`), e += `?im=Resize=${r}`), e
          }), [l, o]), [m] = (0, n.usePreloadImg)(d);
          return (0, c.jsx)("div", {
            role: "img",
            "aria-label": s,
            className: [us.img, m ? us.startAnimation : "", t ? us.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${d})`
            }
          })
        },
        ps = e => {
          let {
            title: t,
            titleSlug: a,
            location: r,
            gaText: s,
            gaBreadCrumb: o,
            dataTestId: n,
            ...i
          } = e;
          return (0, c.jsx)("div", {
            className: "rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7",
            children: (0, c.jsx)(Mr, {
              location: r,
              gaText: s,
              gaBreadCrumb: o,
              dataTestId: n,
              ...i,
              children: (0, c.jsx)(gs, {
                title: t,
                titleSlug: a
              })
            })
          }, t)
        },
        hs = (e, t) => {
          const a = t.currentSite?.site === m.C.www ? "" : `https://${t.sites[m.C.www]}.rockstargames.com`;
          return {
            viewAllLocation: {
              domain: a,
              path: "/games"
            },
            games: [{
              titleSlug: "gta-v",
              text: e.formatMessage(Sr.games_menu_gta_v),
              gaText: "Grand Theft Auto V",
              location: {
                domain: a,
                path: "/gta-v"
              },
              dataTestId: "gtav"
            }, {
              titleSlug: "gta-online",
              text: e.formatMessage(Sr.games_menu_gta_online),
              gaText: "Grand Theft Auto Online",
              location: {
                domain: a,
                path: "/gta-online"
              },
              dataTestId: "gtao"
            }, {
              titleSlug: "reddeadredemption2",
              text: e.formatMessage(Sr.games_menu_rdr_2),
              gaText: "Red Dead Redemption 2",
              location: {
                domain: a,
                path: "/reddeadredemption2"
              },
              dataTestId: "rdr2"
            }, {
              titleSlug: "reddeadredemption",
              text: e.formatMessage(Sr.games_menu_rdr),
              gaText: "Red Dead Redemption",
              location: {
                domain: a,
                path: "/reddeadredemption"
              },
              dataTestId: "rdr"
            }, {
              titleSlug: "reddeadonline",
              text: e.formatMessage(Sr.games_menu_rdr_online),
              gaText: "Red Dead Online",
              location: {
                domain: a,
                path: "/reddeadonline"
              },
              dataTestId: "rdo"
            }]
          }
        },
        fs = () => {
          const e = (0, r.useIntl)(),
            t = p(),
            {
              viewAllLocation: a,
              games: s
            } = hs(e, t);
          return (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-headerc44e1e859a7c882c94e4ab6659292df1",
            "data-testid": "gamesMenu",
            children: [(0, c.jsxs)("div", {
              className: "rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31",
              children: [(0, c.jsx)("div", {
                children: (0, c.jsx)("h2", {
                  className: "rockstargames-modules-core-headerdf107c2f64cafbee316afb5bf5d6c994",
                  children: e.formatMessage(Sr.games_menu_featured)
                })
              }), (0, c.jsx)("div", {
                children: (0, c.jsxs)(Mr, {
                  className: "rockstargames-modules-core-headera9c20e94d8cd00159778729b0c3eb095",
                  gaText: Sr.games_menu_view_all.defaultMessage,
                  gaBreadCrumb: `Games > ${Sr.games_menu_view_all.defaultMessage}`,
                  location: a,
                  children: [e.formatMessage(Sr.games_menu_view_all), (0, c.jsx)("img", {
                    src: Br,
                    alt: e.formatMessage(Sr.nav_view_all_games)
                  })]
                })
              })]
            }), (0, c.jsx)("div", {
              className: "rockstargames-modules-core-headerca5189f6c9b4274473d2cf9a8ace7bb0",
              children: s.map((e => (0, c.jsx)(ps, {
                title: e.text,
                titleSlug: e.titleSlug,
                gaText: e.gaText,
                gaBreadCrumb: `Games > ${e.gaText}`,
                location: e.location,
                dataTestId: e.dataTestId
              }, e.titleSlug)))
            })]
          })
        },
        bs = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerbe98900eb9861a339ca26cd5c23795c2",
          nested: "rockstargames-modules-core-headerb83b9fbed333ffb6cc89eb40ce1f258e",
          subMenuDropdownButton: "rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8",
          open: "rockstargames-modules-core-headerb232c7352afb473e20d474f81db87a11",
          openChevron: "rockstargames-modules-core-headerb78556b7ba42b398bc55bf4720f9eee5",
          subMenuDropdownItems: "rockstargames-modules-core-headerf54f4c00ab7b5e6ab645951063e44b9e"
        },
        vs = {
          subMenuItem: "rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5",
          nested: "rockstargames-modules-core-headera81cbcdbdd397a2a286c23049697987b"
        },
        xs = {
          navigationLink: "rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641",
          active: "rockstargames-modules-core-headerab8c1da57859a4347bb7cd9722832fb9"
        },
        ks = e => [xs.navigationLink, e ? xs.active : ""].join(" "),
        _s = e => {
          let {
            text: t,
            type: a,
            location: r,
            className: s,
            isLegacy: o,
            target: n,
            nested: i,
            gaText: l,
            gaBreadCrumb: d,
            dataTestId: m,
            ...u
          } = e;
          const g = a === wr,
            p = r ? [{
              ...r,
              end: a === yr
            }] : [],
            [h] = cs(p);
          return (0, c.jsxs)(Mr, {
            className: [ks(Boolean(h)), vs.subMenuItem, i ? vs.nested : "", s].join(" "),
            location: r,
            isLegacy: o,
            type: a,
            target: n,
            gaText: l,
            gaBreadCrumb: d,
            dataTestId: m,
            label: t,
            "data-ui-name": "sub-menu-item",
            ...u,
            children: [t, g && (0, c.jsx)("img", {
              alt: "",
              src: Dr
            })]
          })
        },
        ys = "nav-dropdown",
        ws = e => {
          let {
            text: t,
            navChildren: a,
            gaText: r,
            gaBreadCrumb: o,
            nested: n,
            dataTestId: l,
            subMenuId: d,
            toggleOpen: m,
            isOpen: u,
            ...g
          } = e;
          const [p] = f(), {
            track: h
          } = (0, s.useGtmTrack)(), b = (0, i.useRef)(null), [v, x] = (0, i.useState)(null);
          (0, i.useEffect)((() => {
            null === p && m(null)
          }), [p]);
          const k = e => {
              h(kr(void 0, "", r, o)), m(e ? d : null)
            },
            _ = e => {
              "ArrowLeft" === e.code && (k(!1), b?.current?.focus())
            };
          return (0, c.jsxs)("div", {
            className: [bs.subMenuDropdownContainer, n ? bs.nested : ""].join(" "),
            ...g,
            "data-ui-name": "sub-menu-item",
            children: [(0, c.jsxs)("button", {
              type: "button",
              className: [bs.subMenuDropdownButton, n ? bs.nested : "", u ? bs.open : ""].join(" "),
              onClick: () => k(!u),
              onKeyUp: e => {
                "Enter" === e.code && k(!0), "ArrowRight" === e.code && k(!0), "ArrowLeft" === e.code && k(!1)
              },
              ref: b,
              "data-testid": l,
              children: [t, (0, c.jsx)("img", {
                src: zr,
                className: bs.openChevron,
                alt: ""
              })]
            }), (0, c.jsx)(Or.AnimatePresence, {
              children: u && a && (0, c.jsx)(Or.motion.div, {
                className: bs.subMenuDropdownItems,
                variants: {
                  open: {
                    height: "auto",
                    opacity: 1,
                    marginBottom: "revert-layer"
                  },
                  closed: {
                    height: 0,
                    opacity: 0,
                    marginBottom: "auto"
                  }
                },
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: Ir.springOpen,
                children: a.map((e => e.type === ys ? (0, c.jsx)(ws, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.gaText,
                  gaBreadCrumb: `${o} > ${e.gaText}`,
                  nested: !0,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: v === `desktop-submenu-${e.gaText}`,
                  toggleOpen: x
                }, e.gaText) : (0, c.jsx)(_s, {
                  text: e.text,
                  type: e.type,
                  location: e.location,
                  gaText: e.gaText,
                  gaBreadCrumb: `${o} > ${e.gaText}`,
                  onKeyUp: _,
                  isLegacy: e.isLegacy,
                  dataTestId: e.dataTestId,
                  nested: !0
                }, e.gaText)))
              })
            })]
          })
        },
        js = ws,
        Ts = {
          show: {
            height: "auto",
            zIndex: 101,
            display: "block",
            visibility: "visible",
            transition: {
              ...Ir.springOpen
            }
          },
          hidden: {
            height: 0,
            zIndex: 100,
            overflow: "hidden",
            transitionEnd: {
              visibility: "hidden",
              display: "none"
            },
            transition: {
              ...Ir.springClose
            }
          }
        },
        Cs = e => {
          let {
            text: t,
            gaText: a,
            type: r,
            location: s,
            navChildren: o,
            isLegacy: n,
            target: l,
            gaBreadCrumb: d,
            navKey: m,
            isHidden: u,
            dataTestId: g,
            ...p
          } = e;
          const [h, b] = (0, i.useState)(null), v = x(), [k, _] = f(), [y, w] = (0, i.useState)(null), j = k === m, T = {
            ...j ? {
              visibility: "visible",
              display: "block"
            } : {
              visibility: "hidden",
              display: "none"
            }
          };
          (0, i.useEffect)((() => {
            _(null)
          }), [v.pathname, v.key]);
          const C = d ? `${d} > ${a}` : a ?? t;
          return r === jr ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(ms, {
              text: t,
              gaText: a,
              gaBreadCrumb: C,
              onClick: () => _(m),
              isOpen: j,
              buttonRef: u ? void 0 : b,
              navChildren: o,
              dataTestId: g,
              ...p
            }), !u && (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)(Kr, {
                isOpen: j,
                onMouseClick: () => _(null),
                onEscapeKey: () => _(null)
              }), (0, c.jsx)(qr, {
                isOpen: j,
                openerRef: h,
                children: o?.map((e => e.type === jr ? (0, c.jsx)(js, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.text,
                  gaBreadCrumb: `${C} > ${e.gaText}`,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: y === `desktop-submenu-${e.gaText}`,
                  toggleOpen: w
                }, `desktop-submenu-${e.text}`) : (0, c.jsx)(_s, {
                  location: e.location,
                  text: e.text,
                  type: e.type,
                  isLegacy: e.isLegacy,
                  target: e.target,
                  gaText: e.gaText,
                  gaBreadCrumb: `${C} > ${e.gaText}`,
                  dataTestId: e.dataTestId
                }, e.text)))
              })]
            })]
          }) : r === Cr ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(ms, {
              text: t,
              gaText: t,
              gaBreadCrumb: d ? `${d} > ${a}` : a,
              onClick: () => _(m),
              isOpen: j,
              dataTestId: g,
              ...p
            }), !u && (0, c.jsx)(Kr, {
              isOpen: !0,
              onMouseClick: () => _(null),
              onEscapeKey: () => _(null),
              style: T,
              children: (0, c.jsx)(Or.motion.div, {
                initial: "hidden",
                animate: j ? "show" : "hidden",
                variants: Ts,
                children: (0, c.jsx)(fs, {})
              })
            })]
          }) : s || r === Tr ? (0, c.jsx)(ls, {
            location: s,
            type: r,
            text: t,
            isLegacy: n,
            target: l,
            gaText: a,
            gaBreadCrumb: d ? `${d} > ${a}` : a,
            dataTestId: g,
            ...p
          }) : null
        },
        Ss = e => {
          let {
            links: t
          } = e;
          const a = (0, r.useIntl)(),
            [s, o] = (0, i.useState)(t),
            [n, l] = (0, i.useState)([]),
            d = (0, i.useRef)(null),
            m = (0, i.useRef)(null),
            u = (0, i.useCallback)((() => {
              const e = m.current;
              if (!e || !t.length) return;
              const {
                children: a
              } = e;
              let r = 0;
              const s = Array.from(a).map(((e, t) => {
                  const a = e.getBoundingClientRect().top;
                  return 0 === t && (r = a), a
                })),
                n = s.filter((e => e !== r)).length,
                i = s.findIndex((e => e > r));
              let c = i;
              i > 0 && (c = i - 1), n ? (o(t.slice(0, c)), l(t.slice(c))) : (o(t), l([]))
            }), [t, m?.current]);
          (0, i.useEffect)((() => {
            const e = new ResizeObserver(u);
            return m?.current && e.observe(m.current), () => {
              m?.current && e.unobserve(m.current)
            }
          }), [t, m?.current]);
          const g = (0, i.useMemo)((() => (0, c.jsx)("ul", {
            ref: m,
            className: "rockstargames-modules-core-headerdc3da34691ab5b1e333e3d37858767f0",
            "aria-hidden": "true",
            children: t.map((e => (0, c.jsx)("li", {
              children: (0, c.jsx)(Cs, {
                text: e.text,
                type: e.type,
                target: e.target,
                location: e.location,
                navChildren: e.children,
                navKey: e.text,
                isHidden: !0
              })
            }, `desktop-main-dropdown-hidden-${e.text}`)))
          })), [t]);
          return 0 === t.length ? null : (0, c.jsxs)("nav", {
            className: "rockstargames-modules-core-headere92969b01c7ecc3f45b726efcdd54e73",
            children: [(0, c.jsxs)("ul", {
              ref: d,
              children: [s.map((e => (0, c.jsx)("li", {
                children: (0, c.jsx)(Cs, {
                  text: e.text,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  navKey: e.text,
                  dataTestId: e?.dataTestId
                })
              }, e.text))), n.length > 0 && (0, c.jsx)("li", {
                children: (0, c.jsx)(Cs, {
                  text: a.formatMessage(Sr.nav_more_dropdown),
                  type: jr,
                  navChildren: n,
                  navKey: "more",
                  dataTestId: "navMore"
                })
              })]
            }), g]
          })
        },
        Ms = () => (0, c.jsx)("div", {
          className: "rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a"
        }),
        Ns = {
          quickAccess: "rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a",
          link: "rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876"
        },
        Es = () => {
          const {
            windowWidth: e
          } = (0, n.useWindowResize)(), t = p(), a = t.currentSite?.site === m.C.www ? "" : `https://${t.sites[m.C.www]}.rockstargames.com`, s = e < 1024, o = {
            hidden: {
              y: "100%",
              transition: Ir.hamburgerClose
            },
            show: {
              y: 0,
              transition: {
                ...Ir.hamburgerOpen,
                staggerChildren: .1,
                delayChildren: .6 * Ir.hamburgerOpen.duration
              }
            }
          }, i = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: Ir.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: Ir.staggerFade
            }
          }, l = (0, r.useIntl)(), d = {
            home: {
              domain: a,
              path: "/"
            },
            games: {
              domain: a,
              path: "/games"
            },
            newswire: {
              domain: a,
              path: "/newswire"
            }
          }, u = "Quick Access";
          return (0, c.jsxs)(Or.motion.ul, {
            className: Ns.quickAccess,
            variants: s ? o : Pr,
            initial: "hidden",
            animate: "show",
            exit: "hidden",
            transition: s ? null : Ir.quickFade,
            children: [(0, c.jsx)(Or.motion.li, {
              variants: s ? i : null,
              children: (0, c.jsxs)(Mr, {
                location: d.home,
                className: [ks(), Ns.link].join(" "),
                gaText: Sr.nav_quick_access_home.defaultMessage,
                gaBreadCrumb: `${u} > ${Sr.nav_quick_access_home.defaultMessage}`,
                children: [(0, c.jsx)("img", {
                  alt: "Rockstar Games",
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg"
                }), (0, c.jsx)(r.FormattedMessage, {
                  ...Sr.nav_quick_access_home
                })]
              })
            }), (0, c.jsx)(Or.motion.li, {
              variants: s ? i : null,
              children: (0, c.jsxs)(Mr, {
                location: d.games,
                className: [ks(), Ns.link].join(" "),
                gaText: Sr.nav_quick_access_games.defaultMessage,
                gaBreadCrumb: `${u} > ${Sr.nav_quick_access_games.defaultMessage}`,
                children: [(0, c.jsx)("img", {
                  alt: l.formatMessage(Sr.nav_quick_access_games),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg"
                }), (0, c.jsx)(r.FormattedMessage, {
                  ...Sr.nav_quick_access_games
                })]
              })
            }), (0, c.jsx)(Or.motion.li, {
              variants: s ? i : null,
              children: (0, c.jsxs)(Mr, {
                location: d.newswire,
                className: [ks(), Ns.link].join(" "),
                gaText: Sr.nav_quick_access_newswire.defaultMessage,
                gaBreadCrumb: `${u} > ${Sr.nav_quick_access_newswire.defaultMessage}`,
                children: [(0, c.jsx)("img", {
                  alt: l.formatMessage(Sr.nav_quick_access_newswire),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg"
                }), (0, c.jsx)(r.FormattedMessage, {
                  ...Sr.nav_quick_access_newswire
                })]
              })
            })]
          })
        },
        Os = "quick-access-menu",
        Is = e => {
          let {
            site: t,
            brand: a,
            hideRockstarBrand: s,
            hideQuickAccess: o
          } = e;
          const l = (0, r.useIntl)(),
            {
              windowWidth: d
            } = (0, n.useWindowResize)(),
            [u, g] = (0, i.useState)(null),
            [h, b] = (0, i.useState)(null),
            [v, x] = f(),
            k = p(),
            _ = v === Os,
            y = o ? Sr.nav_rockstargames_home : Sr.nav_rockstargames_logo,
            w = {
              domain: k.currentSite?.site === m.C.www ? "" : `https://${k.sites[m.C.www]}.rockstargames.com`,
              path: "/"
            },
            j = d < 1024,
            {
              styles: T,
              attributes: C,
              forceUpdate: S
            } = (0, Ur.usePopper)(u, h, {
              placement: "bottom-start",
              modifiers: [{
                name: "offset",
                enabled: !0,
                options: {
                  offset: [0, 30]
                }
              }, {
                name: "preventOverflow",
                options: {
                  padding: 8,
                  altAxis: !0
                }
              }]
            });
          return (0, i.useEffect)((() => {
            Promise.resolve().then(S)
          }), [u, _]), (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-headercc10478657fa254e4e3449bce7c07d2d",
            children: [!s && (0, c.jsxs)("div", {
              className: "rockstargames-modules-core-headerd6ca505694953416f6cfd919ef1904e1",
              children: [(j || o) && (0, c.jsx)(Mr, {
                location: w,
                gaText: Sr.nav_rockstargames_home.defaultMessage,
                gaBreadCrumb: Sr.nav_rockstargames_home.defaultMessage,
                "aria-label": l.formatMessage(y),
                children: (0, c.jsx)(Ms, {})
              }), !j && !o && (0, c.jsx)("button", {
                type: "button",
                className: "rockstargames-modules-core-headera8caa9bacc7f74ef9bd86698de9ff08c",
                onClick: () => x(Os),
                "aria-label": l.formatMessage(y),
                ref: g,
                children: (0, c.jsx)(Ms, {})
              }), _ && !o && (0, c.jsxs)(c.Fragment, {
                children: [(0, c.jsx)(Kr, {
                  isOpen: _,
                  onEscapeKey: () => x(null),
                  onMouseClick: () => x(null)
                }), (0, c.jsx)("div", {
                  className: "rockstargames-modules-core-headerd6bd4cea9554313294cb18d1478da1ca",
                  style: {
                    ...T.popper
                  },
                  ref: b,
                  ...C.popper,
                  children: (0, c.jsx)(Es, {})
                })]
              })]
            }), a && (0, c.jsxs)(c.Fragment, {
              children: [!s && (0, c.jsx)("div", {
                className: "rockstargames-modules-core-headerc2788a414e74cc6eecfa96c0dc4ffac8"
              }), (0, c.jsx)("div", {
                className: "rockstargames-modules-core-headeref547bd473dcff449cc4d72700b35e3a",
                children: (0, c.jsx)("img", {
                  className: "rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e",
                  "data-brand": t,
                  alt: t,
                  src: a
                })
              })]
            })]
          })
        },
        Ps = {
          header: "rockstargames-modules-core-headerb9149341b2c77373002bd1b206231069",
          fluid: "rockstargames-modules-core-headerec46a8779f24ebce8cd66175dfa225f8",
          fixed: "rockstargames-modules-core-headere7388ff62f2c8d2f6ecfc70019310faa",
          title: "rockstargames-modules-core-headerbc99b8e4243957f58ee357454d77a14b",
          quickAccessWrapper: "rockstargames-modules-core-headera949a457f9b9536c84492c22ad8ab91e"
        },
        Rs = e => {
          let {
            headerRef: t,
            data: a
          } = e;
          const r = (0, i.useMemo)((() => {
              const {
                currentSite: e
              } = (0, m.A)();
              if (e?.site === m.C.socialClub) return {
                zIndex: 8600
              }
            }), []),
            s = br(a.links);
          return (0, c.jsxs)("header", {
            ref: t,
            className: [Ps.header, Ps.fixed].join(" "),
            style: r,
            children: [(0, c.jsx)("div", {
              className: Ps.title,
              children: (0, c.jsx)(Is, {
                site: a.site,
                brand: a.brand,
                hideQuickAccess: a.hideQuickAccess || !1
              })
            }), (0, c.jsx)("div", {
              className: Ps.fluid,
              children: (0, c.jsx)(Ss, {
                links: s
              })
            }), (0, c.jsx)("div", {
              className: Ps.fixed,
              children: (0, c.jsx)(ss, {
                cta: a.cta,
                includeSearch: !a.hideSearch
              })
            })]
          })
        },
        As = {
          hamburger: "rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052",
          open: "rockstargames-modules-core-headerbd080f06ee310dbeb7602106d104aa1b"
        },
        zs = e => {
          let {
            toggle: t,
            isMenuOpen: a
          } = e;
          const {
            track: r
          } = (0, s.useGtmTrack)();
          return (0, c.jsx)("div", {
            className: [As.hamburger, a ? As.open : ""].join(" "),
            children: (0, c.jsxs)("button", {
              onClick: () => {
                r({
                  event: a ? "nav_close" : "nav_open",
                  element_placement: "Global Nav"
                }), t?.()
              },
              title: "Open Menu",
              type: "button",
              children: [(0, c.jsx)("span", {}), (0, c.jsx)("span", {}), (0, c.jsx)("span", {})]
            })
          })
        },
        Ds = {
          header: "rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3",
          title: "rockstargames-modules-core-headerb77426232e2ade0dcb72f4d2764215e8",
          nav: "rockstargames-modules-core-headerd6629e9cc98efe8997d0620a9275c627",
          fullMenuOpen: "rockstargames-modules-core-headeraa4c60d9207e8327ebc788a3e1d56d5b",
          navContainer: "rockstargames-modules-core-headerc5b9f47efbb73b2dfd9c68013ca5bed4",
          searchOpen: "rockstargames-modules-core-headerba19960a101d69f671900a795029cf7b",
          overlay: "rockstargames-modules-core-headerff8c8312206e01ca7503d1914e699e1d"
        };
      var Bs = a(2654);
      const Ls = e => {
          let {
            text: t
          } = e;
          const {
            isMobile: a
          } = (0, n.useWindowResize)(), s = (0, r.useIntl)(), o = p(), {
            viewAllLocation: l,
            games: d
          } = hs(s, o), [m, u] = (0, i.useState)(2.5);
          return (0, i.useEffect)((() => {
            u(a ? 2.5 : 3.5)
          }), [a]), (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d",
            "data-testid": "gamesMenu",
            children: [(0, c.jsxs)("div", {
              className: "rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764",
              children: [(0, c.jsx)("h2", {
                children: t
              }), (0, c.jsxs)(Mr, {
                gaText: Sr.nav_view_all_games.defaultMessage,
                gaBreadCrumb: `Games > ${Sr.nav_view_all_games.defaultMessage}`,
                location: l,
                className: xs.navigationLink,
                children: [(0, c.jsx)(r.FormattedMessage, {
                  ...Sr.nav_view_all_games
                }), (0, c.jsx)("img", {
                  src: Br,
                  alt: s.formatMessage(Sr.nav_view_all_games)
                })]
              })]
            }), (0, c.jsx)(Bs.RC, {
              className: "rockstargames-modules-core-headerc916087398dcb2ac0d81fc2541342f98",
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: m,
              speed: 700,
              children: d.map((e => (0, c.jsx)(Bs.qr, {
                className: "rockstargames-modules-core-headerfb650180ffb26ef3af920b51a6e292b1",
                children: (0, c.jsx)(ps, {
                  titleSlug: e.titleSlug,
                  title: e.text,
                  gaText: e.gaText,
                  gaBreadCrumb: `Games > ${e.gaText}`,
                  location: e.location,
                  dataTestId: e.dataTestId
                })
              }, e.gaText)))
            })]
          })
        },
        Fs = e => {
          let {
            children: t,
            isOpen: a
          } = e;
          return (0, c.jsx)(Or.AnimatePresence, {
            children: a && (0, c.jsx)(Or.motion.div, {
              className: "rockstargames-modules-core-headerad11bebe60eb9c08d9bb91f941f50d2a",
              variants: {
                open: {
                  height: "auto",
                  opacity: 1
                },
                closed: {
                  height: 0,
                  opacity: 0
                }
              },
              animate: "open",
              initial: "closed",
              exit: "closed",
              transition: Ir.springOpen,
              children: t
            })
          })
        },
        Us = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerc02f6922f08136a6e751eed320862016",
          subMenuDropdownButton: "rockstargames-modules-core-headerf24a7f458786bb57d5a3bc334c6355fc",
          open: "rockstargames-modules-core-headerbb4494f77dcd9ffda130e4e916bdb05d",
          subMenuDropdownItems: "rockstargames-modules-core-headerbf4e902d509c225732afae50338dd4c0"
        },
        Vs = {},
        $s = e => {
          let {
            text: t,
            dataTestId: a,
            type: r,
            target: s,
            location: o,
            className: n,
            gaText: i,
            gaBreadCrumb: l,
            isLegacy: d,
            onClick: m,
            ...u
          } = e;
          const [g] = cs(o ? [o] : []), p = r === wr;
          return (0, c.jsxs)(Mr, {
            className: [ks(Boolean(g)), Vs.subMenuItem, n].join(" "),
            dataTestId: a,
            location: o,
            type: r,
            target: s,
            gaText: i,
            gaBreadCrumb: l,
            onClick: m,
            isLegacy: d,
            label: t,
            ...u,
            children: [t, p && (0, c.jsx)("img", {
              alt: "",
              src: Dr
            })]
          })
        },
        qs = e => {
          let {
            text: t,
            dataTestId: a,
            navChildren: r,
            gaText: o,
            gaBreadCrumb: n,
            onClick: i,
            isSubMenuOpen: l,
            toggleMenuOpen: d,
            ...m
          } = e;
          const {
            track: u
          } = (0, s.useGtmTrack)();
          return (0, c.jsxs)("div", {
            className: Us.subMenuDropdownContainer,
            ...m,
            children: [(0, c.jsxs)("button", {
              type: "button",
              "data-testid": a,
              className: [Us.subMenuDropdownButton, l ? Us.open : ""].join(" "),
              onClick: () => {
                u(kr(void 0, "", o, n)), d()
              },
              children: [t, (0, c.jsx)("img", {
                src: zr,
                alt: ""
              })]
            }), (0, c.jsx)(Or.AnimatePresence, {
              children: l && (0, c.jsx)(Or.motion.div, {
                className: Us.subMenuDropdownItems,
                variants: {
                  open: {
                    height: "auto",
                    opacity: 1
                  },
                  closed: {
                    height: 0,
                    opacity: 0
                  }
                },
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: Ir.springOpen,
                children: r.map((e => (0, c.jsx)($s, {
                  text: e.text,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  location: e.location,
                  gaText: e.gaText,
                  gaBreadCrumb: `${n} > ${e.gaText}`,
                  onClick: i,
                  isLegacy: e.isLegacy
                }, e.gaText)))
              })
            })]
          })
        },
        Ys = e => {
          let {
            dataTestId: t,
            type: a,
            target: r,
            location: s,
            navChildren: o,
            gaBreadCrumb: n,
            onClick: l,
            isOpen: d,
            setIsOpen: m,
            text: u,
            gaText: g,
            ...p
          } = e;
          const [h, f] = (0, i.useState)(null), [b] = cs(s ? [s] : []), v = n ? `${n} > ${g}` : g;
          if (a === jr) return (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(ms, {
              text: u,
              dataTestId: t,
              gaText: g,
              gaBreadCrumb: v,
              onClick: () => m(),
              isOpen: d,
              ...p
            }), (0, c.jsx)(Fs, {
              isOpen: d,
              children: o?.map(((e, t) => e.type === jr ? (0, c.jsx)(qs, {
                text: e.text,
                dataTestId: e.dataTestId,
                navChildren: e.children || [],
                gaText: e.gaText,
                gaBreadCrumb: `${v} > ${e.gaText}`,
                onClick: l,
                isSubMenuOpen: h === t,
                toggleMenuOpen: () => f(h !== t ? t : null)
              }, e.gaText) : (0, c.jsx)($s, {
                location: e.location,
                dataTestId: e.dataTestId,
                target: e.target,
                text: e.text,
                type: e.type,
                gaText: e.gaText,
                gaBreadCrumb: `${v} > ${e.gaText}`,
                onClick: l
              }, e.gaText)))
            })]
          });
          if (a === Cr) return (0, c.jsx)(Ls, {
            text: u
          });
          const x = a === wr;
          return (0, c.jsxs)(Mr, {
            location: s,
            dataTestId: t,
            type: a,
            target: r,
            gaText: g,
            gaBreadCrumb: v,
            className: [ks(Boolean(b)), b ? "rockstargames-modules-core-headerf6daff7a849e2826ed2d1f41b9941956" : ""].join(" "),
            label: u,
            ...p,
            children: [u, x && (0, c.jsx)("img", {
              alt: "",
              src: Dr
            })]
          })
        },
        Xs = e => {
          let {
            links: t,
            cta: a,
            onClick: r
          } = e;
          const [s, o] = (0, i.useState)(null);
          return (0, c.jsx)("div", {
            className: "rockstargames-modules-core-headerb6afa349a14125fd2210278a4b958ebb",
            children: (0, c.jsxs)("ul", {
              children: [t.map(((e, t) => (0, c.jsx)(Or.motion.li, {
                variants: Pr,
                transition: Ir.staggerFade,
                children: (0, c.jsx)(Ys, {
                  text: e.text,
                  gaText: e.gaText,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  onClick: r,
                  isOpen: s === t,
                  setIsOpen: () => o(s !== t ? t : null)
                })
              }, e.text))), a && (0, c.jsx)(Or.motion.li, {
                className: "rockstargames-modules-core-headerc22ed7fb01d7e65a14a7913a0459a4e3",
                variants: Pr,
                transition: Ir.staggerFade,
                children: (0, c.jsx)(Er, {
                  variant: a.variant,
                  dataTestId: a.dataTestId,
                  location: a.location,
                  gaEvent: a.ga,
                  gaText: a.gaText,
                  onClick: r,
                  children: a.text
                })
              })]
            })
          })
        },
        Ws = e => {
          let {
            headerRef: t,
            data: a
          } = e;
          const [r, s] = (0, i.useState)(!1), [o, l] = (0, i.useState)(!1), {
            isSearchPage: d,
            forceSearch: u
          } = v(), g = x(), {
            pathname: h,
            hash: f,
            search: b
          } = g, _ = k(), {
            currentSite: y
          } = p(), w = br(a.links), {
            setBodyIsLocked: j
          } = (0, n.useBodyScrollable)("HeaderMobile"), T = {
            show: {
              height: "auto",
              paddingBottom: r && a.brand ? "var(--global-navigation-height)" : "",
              transition: {
                ...Ir.hamburgerOpen,
                staggerChildren: .05
              }
            },
            hidden: {
              height: 0,
              paddingBottom: 0,
              transition: Ir.hamburgerClose
            }
          };
          return (0, i.useEffect)((() => {
            j(!!r)
          }), [r]), (0, i.useEffect)((() => {
            l(!1), s(!1)
          }), [h, f, b]), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("header", {
              ref: t,
              className: Ds.header,
              children: [(0, c.jsx)(zs, {
                toggle: () => {
                  s(!r), l(!1)
                },
                isMenuOpen: r
              }), (0, c.jsx)("div", {
                className: Ds.title,
                children: (0, c.jsx)(Is, {
                  site: a.site,
                  brand: a.brand,
                  hideRockstarBrand: !!a.brand
                })
              }), (0, c.jsx)("div", {
                children: (0, c.jsx)(ss, {
                  includeSearch: !1,
                  isMobile: !0
                })
              })]
            }), (0, c.jsx)(Or.AnimatePresence, {
              children: (r || o || d && y?.site === m.C.www) && (0, c.jsxs)(c.Fragment, {
                children: [(0, c.jsxs)(Or.motion.nav, {
                  className: [Ds.nav, r && a.brand ? Ds.paddingBottom : "", r ? Ds.fullMenuOpen : ""].join(" "),
                  variants: T,
                  animate: "show",
                  initial: "hidden",
                  exit: "hidden",
                  children: [!a.hideSearch && (0, c.jsx)(rs, {
                    isSearchOpen: o || d && u,
                    setIsSearchOpen: l
                  }), r && (0, c.jsx)("div", {
                    className: [Ds.navContainer, o ? Ds.searchOpen : ""].join(" "),
                    children: (0, c.jsx)(Xs, {
                      links: w,
                      cta: a.cta,
                      onClick: () => {
                        s(!1), l(!1)
                      }
                    })
                  })]
                }), r && a.brand && !a.hideQuickAccess && (0, c.jsx)(Es, {}), !d && (0, c.jsx)(Or.motion.div, {
                  className: Ds.overlay,
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  exit: {
                    opacity: 0,
                    transition: Ir.hamburgerClose
                  },
                  transition: Ir.hamburgerOpen
                })]
              })
            }), (0, c.jsx)(vr.Menu, {
              location: g,
              onNavigate: _
            })]
          })
        };
      a(9952);
      const Gs = () => {
          const e = (0, i.useRef)(null),
            t = "__spatialNavigation__" in window ? window.__spatialNavigation__ : null;
          return (0, i.useEffect)((() => {
            t && t.enableExperimentalAPIs(!0)
          }), []), (0, c.jsx)("button", {
            ref: e,
            className: "rockstargames-modules-core-headere0e27fbcd7bb62793ad72aa4562e8b53",
            onClick: () => {
              const a = document.querySelector("header");
              if (t && a) {
                const r = t.findCandidates(a).filter((t => !a.contains(t) && e.current !== t));
                r.length > 0 && r[0].focus()
              }
            },
            children: (0, c.jsx)(r.FormattedMessage, {
              ...Sr.accessibility_skip_button
            })
          })
        },
        Hs = {
          pillBtn: "rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e",
          selected: "rockstargames-modules-core-headere3891b1e9b084d58f6e1afb5fa14ab12",
          globalNavigationRoot: "rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b",
          large: "rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79",
          badge: "rockstargames-modules-core-headerab6bac3e7cd6aeeec5fe34375b77b1a2",
          globalNavigationSpacer: "rockstargames-modules-core-headerd45d3098c677dd2ec79f50475413ab8e",
          globalNavigationSearchSpacer: "rockstargames-modules-core-headere22f06c8b88ebe362a876f197dca5953"
        };
      _.gsap.registerPlugin(ja, Ja, fr);
      const Ks = () => {
          const e = (0, n.useScroll)(),
            t = e?.freezeUserShouldSeeMore,
            {
              windowWidth: a
            } = (0, n.useWindowResize)(),
            r = (() => {
              const e = (0, i.useContext)(u);
              if (void 0 === e) throw new Error("useNavigationData must be used within a Navigation Provider");
              return e.navigationData
            })(),
            {
              isSearchPage: s,
              forceSearch: o
            } = v(),
            l = a < 1024,
            [d, m] = (0, i.useState)(!1),
            g = (0, i.useRef)(null),
            p = (0, i.useRef)(null);
          (0, i.useEffect)((() => {
            m(!0)
          }), []);
          const h = (0, i.useCallback)((e => {
            if (t) return;
            const a = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
            e.direction === g?.current || a ? a && e?.animation?.pause() : -1 === e.direction ? e.animation?.reverse() : e.animation?.play();
            const r = "data-show-more-content";
            1 === e.direction ? document.body.setAttribute(r, "") : document.body.removeAttribute(r), g.current = e.direction
          }), [t]);
          (0, i.useEffect)((() => {
            const e = _.gsap.context((() => {
              p?.current && _.gsap.set(p.current, {
                paused: !0,
                scrollTrigger: {
                  onUpdate: e => {
                    h(e)
                  },
                  start: "140px",
                  end: 999999999
                }
              })
            }));
            return () => e.revert()
          }), [t, p?.current]);
          const f = (0, i.useMemo)((() => l ? (0, c.jsx)(Ws, {
            headerRef: p,
            data: r
          }) : (0, c.jsx)(Rs, {
            headerRef: p,
            data: r
          })), [r, l]);
          return (0, c.jsxs)("div", {
            className: Hs.globalNavigationRoot,
            "data-header-initialized": d,
            children: [(0, c.jsx)(Gs, {}), (0, c.jsx)("div", {
              className: [Hs.globalNavigationSpacer, s && o ? Hs.globalNavigationSearchSpacer : ""].join(" ")
            }), f]
          })
        },
        {
          graphEnv: Qs
        } = (0, n.getScConfigForOrigin)(),
        Js = e => {
          let {
            navData: t,
            searchConfig: a,
            routeOptions: s,
            location: i,
            onNavigate: l
          } = e;
          const [{
            iso: m
          }] = (0, r.getLocale)();
          return (0, c.jsx)(n.ResizeProvider, {
            children: (0, c.jsx)(r.IntlProvider, {
              locales: d,
              lang: m,
              children: (0, c.jsx)(o.UN, {
                children: (0, c.jsx)(g, {
                  navData: t,
                  location: i,
                  onNavigate: l,
                  searchConfig: a,
                  routeOptions: s,
                  children: (0, c.jsx)(Ks, {})
                })
              })
            })
          })
        },
        Zs = (0, n.withRockstarGraph)((e => {
          let {
            navData: t,
            searchConfig: a,
            routeOptions: s,
            location: i,
            onNavigate: l
          } = e;
          const [{
            iso: m
          }] = (0, r.getLocale)();
          return (0, c.jsx)(n.ResizeProvider, {
            children: (0, c.jsx)(r.IntlProvider, {
              locales: d,
              lang: m,
              children: (0, c.jsx)(o.iR, {
                children: (0, c.jsx)(o.UN, {
                  children: (0, c.jsx)(g, {
                    navData: t,
                    location: i,
                    onNavigate: l,
                    searchConfig: a,
                    routeOptions: s,
                    children: (0, c.jsx)(Ks, {})
                  })
                })
              })
            })
          })
        }), {
          env: Qs
        }),
        eo = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(r) {
            return (0, c.jsx)(l, {
              header: t,
              hidden: a,
              children: (0, c.jsx)(e, {
                ...r
              })
            })
          }
        }((e => {
          let {
            ...t
          } = e;
          const {
            hasProvider: a
          } = (0, s.useRockstarUser)();
          return a ? (0, c.jsx)(Js, {
            ...t
          }) : (0, c.jsx)(Zs, {
            ...t
          })
        }), null, !0)
    },
    3428: e => {
      var t = {
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

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && t.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query userData {\n    user: userData {\n        id\n        avatar\n        nickname\n        profile_link\n        isAMinor\n        bearer_token_expired\n        agegate_pass @client\n        logged_in @client\n        subscribed\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function s(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var r = e.definitions[a];
          if (r.name && r.name.value == t) return r
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), r[e.name.value] = t
        }
      })), e.exports = t, e.exports.userData = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [s(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var o = r[t] || new Set,
          n = new Set,
          i = new Set;
        for (o.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (r[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var r = s(e, t);
          r && a.definitions.push(r)
        })), a
      }(t, "userData")
    },
    6751: (e, t, a) => {
      var r = {
        "./GTAOnline.jpg": 111,
        "./GTATrilogy.jpg": 4752,
        "./IV.jpg": 3483,
        "./V.jpg": 8754,
        "./VI/desktop.png": 3660,
        "./VI/mobile.png": 6048,
        "./agent.jpg": 8323,
        "./beaterator.jpg": 3587,
        "./bully-scholarshipedition.jpg": 7181,
        "./bully.jpg": 5332,
        "./chinatownwars.jpg": 4596,
        "./episodesfromlibertycity.jpg": 8518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 2787,
        "./gta-online.jpg": 6788,
        "./gta-v.jpg": 3143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 9942,
        "./gtacomplete.jpg": 4923,
        "./gtalondon.jpg": 5256,
        "./italianjob.jpg": 2043,
        "./lanoire-vr-case-files.jpg": 2014,
        "./lanoire.jpg": 9414,
        "./lanoire_2.jpg": 2461,
        "./libertycitystories.jpg": 9273,
        "./manhunt.jpg": 5903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 7321,
        "./maxpayne2.jpg": 3095,
        "./maxpayne3.jpg": 7258,
        "./midnightclub.jpg": 2602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 9655,
        "./midnightclubLA-complete.jpg": 3839,
        "./midnightclubLA.jpg": 9795,
        "./oni.jpg": 4808,
        "./rdr-goty.jpg": 9552,
        "./reddeadonline.jpg": 3534,
        "./reddeadredemption.jpg": 7064,
        "./reddeadredemption2.jpg": 1248,
        "./reddeadrevolver.jpg": 9114,
        "./rockstar-games-collection-edition-1.jpg": 3573,
        "./sanandreas.jpg": 4724,
        "./skateanddestroy.jpg": 377,
        "./smugglersrun.jpg": 3564,
        "./smugglersrun2.jpg": 2844,
        "./smugglersrunwarzones.jpg": 4715,
        "./stateofemergency.jpg": 8005,
        "./tabletennis.jpg": 4141,
        "./theballadofgaytony.jpg": 4825,
        "./thelostanddamned.jpg": 2591,
        "./thewarriors.jpg": 6148,
        "./undeadnightmare.jpg": 2830,
        "./vicecity.jpg": 1480,
        "./vicecitystories.jpg": 3250,
        "./wildmetal.jpg": 5613
      };

      function s(e) {
        var t = o(e);
        return a(t)
      }

      function o(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = o, e.exports = s, s.id = 6751
    },
    9294: (e, t, a) => {
      var r = {
        "./GTAOnline.jpg": 111,
        "./GTATrilogy.jpg": 4752,
        "./IV.jpg": 3483,
        "./V.jpg": 8754,
        "./agent.jpg": 8323,
        "./beaterator.jpg": 3587,
        "./bully-scholarshipedition.jpg": 7181,
        "./bully.jpg": 5332,
        "./chinatownwars.jpg": 4596,
        "./episodesfromlibertycity.jpg": 8518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 2787,
        "./gta-online.jpg": 6788,
        "./gta-v.jpg": 3143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 9942,
        "./gtacomplete.jpg": 4923,
        "./gtalondon.jpg": 5256,
        "./italianjob.jpg": 2043,
        "./lanoire-vr-case-files.jpg": 2014,
        "./lanoire.jpg": 9414,
        "./lanoire_2.jpg": 2461,
        "./libertycitystories.jpg": 9273,
        "./manhunt.jpg": 5903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 7321,
        "./maxpayne2.jpg": 3095,
        "./maxpayne3.jpg": 7258,
        "./midnightclub.jpg": 2602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 9655,
        "./midnightclubLA-complete.jpg": 3839,
        "./midnightclubLA.jpg": 9795,
        "./oni.jpg": 4808,
        "./rdr-goty.jpg": 9552,
        "./reddeadonline.jpg": 3534,
        "./reddeadredemption.jpg": 7064,
        "./reddeadredemption2.jpg": 1248,
        "./reddeadrevolver.jpg": 9114,
        "./rockstar-games-collection-edition-1.jpg": 3573,
        "./sanandreas.jpg": 4724,
        "./skateanddestroy.jpg": 377,
        "./smugglersrun.jpg": 3564,
        "./smugglersrun2.jpg": 2844,
        "./smugglersrunwarzones.jpg": 4715,
        "./stateofemergency.jpg": 8005,
        "./tabletennis.jpg": 4141,
        "./theballadofgaytony.jpg": 4825,
        "./thelostanddamned.jpg": 2591,
        "./thewarriors.jpg": 6148,
        "./undeadnightmare.jpg": 2830,
        "./vicecity.jpg": 1480,
        "./vicecitystories.jpg": 3250,
        "./wildmetal.jpg": 5613
      };

      function s(e) {
        var t = o(e);
        return a(t)
      }

      function o(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = o, e.exports = s, s.id = 9294
    },
    5889: (e, t, a) => {
      var r = {
        "./VI/desktop.png": 3660
      };

      function s(e) {
        var t = o(e);
        return a(t)
      }

      function o(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = o, e.exports = s, s.id = 5889
    },
    5877: (e, t, a) => {
      var r = {
        "./VI/mobile.png": 6048
      };

      function s(e) {
        var t = o(e);
        return a(t)
      }

      function o(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = o, e.exports = s, s.id = 5877
    },
    111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    4752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    3483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    8754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    3660: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    6048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    8323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    3587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    7181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    5332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    4596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    8518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    2787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    6788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    3143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    9942: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    4923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    5256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    2043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    2014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    9414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    2461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    9273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    5903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    3933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    7321: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    3095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    7258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    2602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    3818: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    9655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    3839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    9795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    4808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    9552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    3534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    7064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    1248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    9114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    3573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    4724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    3564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    2844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    4715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    8005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    4141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    4825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    2591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    6148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    2830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    1480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    3250: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    5613: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    }
  }
]);