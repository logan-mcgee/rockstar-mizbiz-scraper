! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b916f542-a971-417d-90ae-c1b546f60e62", e._sentryDebugIdIdentifier = "sentry-dbid-b916f542-a971-417d-90ae-c1b546f60e62")
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
  [235], {
    9807: (e, t, a) => {
      "use strict";
      a.d(t, {
        UT: () => s.UT,
        hp: () => q,
        RX: () => G,
        IT: () => x,
        qs: () => r.q,
        e9: () => E,
        Es: () => P,
        bD: () => T,
        J0: () => w,
        my: () => $
      });
      var s = a(1796),
        r = a(9409),
        n = a(1403),
        i = a(555),
        o = a(2296),
        c = a(9998),
        l = a(7637),
        d = a(4252),
        u = a.n(d),
        m = a(7679);
      const _ = (e, t) => {
        const a = (0, r.q)(m.Hg),
          s = {
            autoSetError: !0,
            autoSetLoading: !1,
            setTitleDataPath: "meta.title",
            ...t,
            variables: {
              locale: a,
              ...t?.variables
            }
          },
          {
            data: i,
            loading: o,
            error: c,
            ...d
          } = (0, l.I)(e, s);
        return (0, n.useEffect)((() => {
          if (i && s.setTitleDataPath) {
            const e = u().get(i, s.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [i]), (0, n.useEffect)((() => (s.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: o
        }), () => {
          s.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [o]), (0, n.useEffect)((() => {
          if (s.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: o,
          error: c,
          data: i,
          ...d
        }
      };
      var g = a(6632);
      const p = (0, n.createContext)((() => ({
          data: null
        }))),
        f = new Promise((e => {
          e()
        })),
        h = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new i.D)
        },
        b = [() => f, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new o.R(h))
        }],
        k = (0, n.createContext)((() => b)),
        v = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, g.jsx)(k.Provider, {
            value: c.n,
            children: (0, g.jsx)(p.Provider, {
              value: _,
              children: t
            })
          })
        }),
        x = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, n.useContext)(p)(e, t)),
        y = (window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, n.useContext)(k)(e)), (0, n.createContext)({})),
        w = () => (0, n.useContext)(y);
      var j = a(5019);
      const C = "graph-token-context",
        S = {
          token: (0, s.UT)(null),
          tokenPing: (0, s.UT)("tokenPing"),
          tokenPingExpires: (0, s.UT)(100)
        },
        N = window?.[C] ?? (window[C] = (0, n.createContext)(S)),
        M = e => {
          let {
            children: t,
            token: a,
            tokenPing: s,
            tokenPingExpires: r
          } = e;
          return (0, g.jsx)(N.Provider, {
            value: {
              token: a,
              tokenPing: s,
              tokenPingExpires: r
            },
            children: t
          })
        },
        T = () => {
          const {
            token: e,
            tokenPing: t,
            tokenPingExpires: a
          } = (0, n.useContext)(N);
          return [e, t, a]
        },
        E = () => {
          const [e] = T();
          return (0, r.q)(e)
        },
        P = () => {
          const [e, t, a] = T();
          return () => (async e => {
            let {
              url: t,
              token: a,
              tokenPingExpires: s
            } = e;
            const r = t?.();
            try {
              const e = s?.() ?? 0,
                t = a?.() ?? null,
                n = (e => {
                  const t = Date.now() / 1e3;
                  return Math.ceil(e - t)
                })(e) > 0;
              if (!1 === t) return {
                bearerToken: t
              };
              if (n && t) return {
                bearerToken: t
              };
              const i = await fetch(r, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                o = await i.json(),
                {
                  tokenExpiresTime: c = null
                } = o;
              return null !== c && s?.(c), a(o.bearerToken ?? null), o
            } catch (e) {
              return a(!1), !1
            }
          })({
            url: t,
            token: e,
            tokenPingExpires: a
          })
        };
      var I = a(8102);
      var z = a(6375),
        O = a(8793),
        R = a.n(O);
      var A = a(7249),
        L = a(9961);
      const D = (0, A.ez)({
          sha256: L.sc
        }),
        B = e => {
          let {
            children: t,
            graphOptions: a,
            typePolicies: s
          } = e;
          const r = (e => {
            let {
              graphOptions: t,
              typePolicies: a = {}
            } = e;
            const s = t?.env ? G(t?.env) : t?.uri,
              r = {
                ...t,
                uri: s
              },
              [c] = (0, n.useState)(new i.D({
                typePolicies: a
              })),
              l = D.concat((e => {
                let {
                  token: t
                } = e;
                return (0, I.o)(((e, a) => {
                  let {
                    headers: s
                  } = a;
                  const r = t?.() ?? null;
                  return r ? {
                    headers: {
                      ...s,
                      authorization: `Bearer ${r}`
                    }
                  } : null
                }))
              })({
                token: t?.token
              }).concat((e => (0, z.$)({
                ...e,
                fetch: R()
              }))(r)));
            return new o.R({
              cache: c,
              link: l
            })
          })({
            graphOptions: a,
            typePolicies: s
          });
          return (0, g.jsx)(M, {
            token: a?.token,
            tokenPing: a?.tokenPing,
            tokenPingExpires: a?.tokenPingExpires,
            children: (0, g.jsx)(j.X, {
              client: r,
              children: (0, g.jsx)(v, {
                children: t
              })
            })
          })
        },
        q = e => {
          const t = "__makevars__";
          return window?.[t] || (window[t] = {}), window?.[t]?.[e] || (window[t][e] = {}), ((e, t) => (a, r) => {
            const n = window?.[e]?.[t]?.[a] ?? (0, s.UT)(r);
            return window[e][t][a] = n, n
          })(t, e)
        },
        F = q("graph-with-rs-graph"),
        $ = (e, t) => {
          let {
            env: a = "prod",
            typePolicies: s,
            token: r = F("token", null),
            tokenPingExpires: n = F("tokenPingExpires", null),
            tokenPing: i = F("token", null)
          } = t;
          return function(t) {
            return (0, g.jsx)(B, {
              typePolicies: s,
              graphOptions: {
                env: a,
                useGETForQueries: !0,
                token: r,
                tokenPing: i,
                tokenPingExpires: n
              },
              children: (0, g.jsx)(e, {
                ...t
              })
            })
          }
        },
        G = (q("graph-hoc"), e => {
          if (/^https{0,1}:\/\//.test(e)) return e;
          let t = "";
          switch (e) {
            case "prod":
              t = "graph";
              break;
            case "prod-int":
              t = "graph-int";
              break;
            default:
              t = `${e}-graph`
          }
          return `https://${t}.rockstargames.com?origin=${document.location.origin}`
        })
    },
    7679: (e, t, a) => {
      "use strict";
      a.d(t, {
        Hg: () => r
      });
      var s = a(1796);
      const r = (0, s.UT)(document.documentElement.lang),
        n = window?.env,
        i = ((0, s.UT)({
          media: n?.cdn?.media,
          videos: n?.cdn?.videos
        }), document.currentScript),
        o = i?.src ? new URL(i.src).origin : "";
      let c = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${o}/`;
      c.endsWith("/") || (c = `${c}/`), (0, s.UT)(c)
    },
    7905: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => Ri
      });
      var s = {};
      a.r(s), a.d(s, {
        W1: () => Kr,
        IU: () => Zr
      });
      var r = a(6717),
        n = a(1403),
        i = a(9807),
        o = a(4277),
        c = a(4255);
      const l = (0, i.hp)("@rockstargames/modules-core-sc-user"),
        d = l("navOpenReactive", !1),
        u = e => d(e),
        m = l("jumpScMenuFocusReactive", !1),
        _ = e => m(e),
        g = l("hasNotificationsReactive", !1),
        p = e => g(e),
        f = l("currentCharIdReactive", (0, o._h)()?.currentCharId),
        h = e => f(e),
        b = l("selectedCharacterTupleReactive", null),
        k = e => b(e),
        v = l("rockstarIdReactive", null),
        x = l("charactersNeededReactive", null),
        y = e => x(e),
        w = l("userDataReactive", null),
        j = e => w(e),
        C = () => {
          const e = (0, i.qs)(x),
            t = (0, i.qs)(f),
            a = (0, i.qs)(d),
            s = (0, i.qs)(g),
            r = (0, i.qs)(b);
          return {
            charactersNeeded: e,
            currentCharId: t,
            hasNotifications: s,
            navOpen: a,
            userData: (0, i.qs)(w),
            selectedCharacterTuple: r,
            jumpScMenuFocus: (0, i.qs)(m),
            setCharactersNeeded: y,
            setCurrentCharId: h,
            setHasNotifications: p,
            setNavOpen: u,
            setSelectedCharacterTuple: k,
            setUserData: j,
            setJumpScMenuFocus: _
          }
        };
      var S = a(6377),
        N = a.n(S);
      const M = (0, o.S0)(),
        T = (0, i.UT)(M),
        {
          graphEnv: E
        } = (0, o.S0)(),
        P = (0, i.RX)(E),
        I = () => {
          const e = (0, i.e9)(),
            [t, a] = (0, n.useState)({
              id: null,
              avatar: "",
              profile_link: "",
              nickname: "",
              crews: [],
              characters: {
                gtao: []
              }
            }),
            [s, r] = (0, n.useState)(!0),
            [l, , d] = (0, i.bD)(),
            u = (0, i.Es)(),
            {
              refetch: m
            } = (0, i.IT)(c.userData, {
              skip: !0,
              context: {
                uri: P
              }
            }),
            [_, g] = (0, n.useState)(null),
            [p, f] = (0, n.useState)(!1),
            [h, b] = (0, n.useState)(!1);
          return (0, n.useEffect)((() => {
            (async () => {
              const s = null === e ? null : !!e;
              if (s && !p) {
                r(!0), f(!0);
                const e = await m(),
                  s = e?.data?.user?.id,
                  n = await (async e => {
                    let {
                      pingBearer: t,
                      rockstarId: a
                    } = e;
                    const {
                      crews: s
                    } = await (0, o.Ax)("crew/forMember", {
                      pingBearer: t,
                      query: {
                        userId: a
                      }
                    });
                    return s
                  })({
                    pingBearer: u,
                    rockstarId: s
                  }),
                  i = await (async e => {
                    let {
                      pingBearer: t,
                      nickname: a,
                      rockstarId: s
                    } = e;
                    const r = [],
                      n = await (0, o.Ax)("profile/playedplatforms?game=gtav", {
                        pingBearer: t
                      });
                    if (await (n?.platforms?.reduce((async (e, a) => {
                        if (await e, ["ps3", "xbox", "xbox360"].includes(a)) return;
                        const s = await (0, o.Ax)(`games/gtao/characters?platform=${a}`, {
                          pingBearer: t
                        });
                        s?.status && s?.result?.map((e => {
                          const {
                            stats: t
                          } = e, {
                            overview: s
                          } = t, {
                            rank: n
                          } = s;
                          if ("0" === n.value) return;
                          const i = ["ps4", "ps5"].includes(a) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                          return r.push({
                            ...e,
                            mugshotUrl: i,
                            platform: a
                          }), e
                        }))
                      }), Promise.resolve())), !r.length) return r;
                    const {
                      status: i,
                      accounts: c
                    } = await (0, o.Ax)(`profile/getprofile?nickname=${a}&maxFriends=0`, {
                      pingBearer: t
                    });
                    return i && c.length ? (c.forEach((e => {
                      const {
                        rockstarAccount: t,
                        linkedAccounts: n
                      } = e;
                      if (t?.rockstarId !== s) return;
                      const i = a;
                      let o = "",
                        c = "";
                      n?.map((e => ("xbl" === e?.onlineService ? o = e.userName : "np" === e?.onlineService && (c = e.userName), e))), r.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), r.map(((e, t) => (e.platformUsername = i, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = c || i), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = o || i), e)))
                    })), r) : r
                  })({
                    pingBearer: u,
                    nickname: e?.data?.user?.nickname,
                    rockstarId: s
                  }),
                  c = {
                    ...t,
                    ...e?.data?.user,
                    crews: n,
                    characters: {
                      gtao: i
                    }
                  };
                r(!1), a(c), g(!0), v(s)
              }
              if (!1 === s && !h) {
                try {
                  await (async e => {
                    let {
                      token: t,
                      tokenPingExpires: a
                    } = e;
                    const s = {
                        method: "POST",
                        body: `fingerprint=${await N().get().then((e=>e))}`,
                        credentials: "include",
                        headers: {
                          "X-Requested-With": "XMLHttpRequest",
                          "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                        }
                      },
                      r = await fetch(T().silentCheck, s);
                    if (200 !== r.status) return void t(!1);
                    const n = await r.json(),
                      i = `${T().gateway}?code=${n}`,
                      o = await fetch(i, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: c,
                        tokenExpiresTime: l
                      } = await o.json();
                    return t(c), a(l), c
                  })({
                    token: l,
                    tokenPingExpires: d
                  })
                } catch (e) {}
                b(!0)
              }!1 === s && h && (f(!0), g(!1), r(!1)), null === e && u()
            })()
          }), [e, p, h]), {
            data: t,
            loading: s,
            loggedIn: _
          }
        };
      var z = a(6632);
      const O = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        R = "user-context",
        A = window?.[R] ?? (window[R] = (0, n.createContext)(O)),
        L = e => {
          let {
            children: t
          } = e;
          const a = I(),
            s = (0, n.useMemo)((() => ({
              ...a,
              hasProvider: !0
            })), [a]);
          return (0, z.jsx)(A.Provider, {
            value: s,
            children: t
          })
        },
        D = () => (0, n.useContext)(A);
      a(714);
      var B = a(6279),
        q = a(9779),
        F = a(5111);
      const $ = (0, n.createContext)(void 0),
        G = e => {
          let {
            checkUser: t,
            children: a
          } = e;
          const s = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, a] = (0, n.useState)([]), [s, r] = (0, n.useState)([]), [i, o] = (0, n.useState)(null), {
                data: c,
                loggedIn: l
              } = D(), {
                currentCharId: d
              } = C(), u = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
                return (0, n.useMemo)((() => {
                  const s = e?.characters?.[a];
                  return "1" === (s?.[t]?.stats?.overview?.hasGtaPlus?.value ?? "0")
                }), [e, a, t])
              }(c, d), m = (0, F.bn)(), _ = (e, s) => {
                const r = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = s ?? {};
                    (0, B.A)({
                      ...e,
                      ...t
                    }), r.push(e)
                  }
                })), a([...t, ...r])
              };
              (0, n.useEffect)((() => {
                if (c && null !== l) {
                  const e = g(c);
                  s.length && e && _(s, e), o(e)
                } else e || s.length && _(s)
              }), [c, l, s]), (0, n.useEffect)((() => {
                const e = s.filter((e => -1 === t.indexOf(e)));
                r(e)
              }), [t]);
              const g = e => {
                const t = [],
                  a = [],
                  s = [];
                return Object.keys(e.characters).forEach((r => {
                  e.characters[r].length && (a.push(r), e.characters[r].forEach((e => {
                    "gtao" === r && (s.includes(e.platform) || s.push(e.platform)), t.includes(e.platform) || t.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: l ?? !1,
                  gta_plus_active: l ? Boolean(u) : void 0,
                  platforms_played: t.length ? t.join("|").toUpperCase() : void 0,
                  games_played: a.length ? a.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: s.length ? s.join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  if (null === l || !c || !i) {
                    const t = [...s];
                    return t.push({
                      ...e
                    }), r(t)
                  }
                  return (0, B.A)({
                    ...e,
                    ...i
                  })
                }
              }
            }(t),
            r = (0, n.useMemo)((() => s), [s, t]);
          return (0, z.jsx)($.Provider, {
            value: r,
            children: a
          })
        },
        U = {
          track: () => null
        },
        H = () => (0, n.useContext)($) ?? U;
      var X = a(6454),
        V = a(3963);
      const W = (0, n.createContext)({
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
        Y = e => {
          let {
            navData: t,
            location: a,
            onNavigate: s,
            routeOptions: i,
            children: o,
            searchConfig: c
          } = e;
          const [l, d] = (0, n.useState)(null), [u, m] = (0, n.useMemo)((() => (0, r.getLocale)()), []), {
            hash: _
          } = a, {
            data: g
          } = D(), p = (0, V.A)(), f = (0, n.useMemo)((() => {
            const e = {
              ...a,
              ...window.location
            };
            return {
              navigationData: t,
              onNavigate: s,
              environment: p,
              location: e,
              locale: u,
              rockstarUser: g,
              openedDropdown: l,
              setOpenedDropdown: d,
              routeOptions: i,
              searchConfig: c
            }
          }), [t, u, JSON.stringify(a), p, l, i, g]);
          return (0, n.useEffect)((() => {
            m(u.iso);
            const e = () => d(null);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", e)
            }
          }), []), (0, n.useEffect)((() => {
            const e = _?.replace("#", "");
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
          }), [_]), (0, z.jsx)(W.Provider, {
            value: f,
            children: o
          })
        },
        K = () => {
          const e = (0, n.useContext)(W);
          if (void 0 === e) throw new Error("useDomainEnvironment must be used within a Navigation Provider");
          return e.environment
        },
        J = () => {
          const e = (0, n.useContext)(W);
          if (void 0 === e) throw new Error("useRockstarUserProfile must be used within a Navigation Provider");
          return e.rockstarUser
        },
        Q = () => {
          const e = (0, n.useContext)(W);
          if (void 0 === e) throw new Error("useOpenDropdown must be used within a Navigation Provider");
          const {
            openedDropdown: t,
            setOpenedDropdown: a
          } = e;
          return [t, e => {
            a(e === t ? null : e)
          }]
        },
        Z = () => {
          const e = (0, n.useContext)(W);
          if (void 0 === e) throw new Error("useSearchConfig must be used within a Navigation Provider");
          return e.searchConfig
        },
        ee = () => {
          const e = (0, n.useContext)(W);
          if (void 0 === e) throw new Error("useRouteOptions must be used within a Navigation Provider");
          return e.routeOptions
        },
        te = () => {
          const e = (0, n.useContext)(W);
          if (void 0 === e) throw new Error("useWindowLocation must be used within a Navigation Provider");
          return e.location
        },
        ae = () => {
          const e = (0, n.useContext)(W);
          if (void 0 === e) throw new Error("useOnNavigate must be used within a Navigation Provider");
          return e.onNavigate
        };
      var se = a(6040);
      let re, ne, ie, oe, ce, le, de, ue, me, _e, ge, pe, fe, he, be = () => re || "undefined" != typeof window && (re = window.gsap) && re.registerPlugin && re,
        ke = 1,
        ve = [],
        xe = [],
        ye = [],
        we = Date.now,
        je = (e, t) => t,
        Ce = (e, t) => ~ye.indexOf(e) && ye[ye.indexOf(e) + 1][t],
        Se = e => !!~ge.indexOf(e),
        Ne = (e, t, a, s, r) => e.addEventListener(t, a, {
          passive: !s,
          capture: !!r
        }),
        Me = (e, t, a, s) => e.removeEventListener(t, a, !!s),
        Te = "scrollLeft",
        Ee = "scrollTop",
        Pe = () => pe && pe.isPressed || xe.cache++,
        Ie = (e, t) => {
          let a = s => {
            if (s || 0 === s) {
              ke && (oe.history.scrollRestoration = "manual");
              let t = pe && pe.isPressed;
              s = a.v = Math.round(s) || (pe && pe.iOS ? 1 : 0), e(s), a.cacheID = xe.cache, t && je("ss", s)
            } else(t || xe.cache !== a.cacheID || je("ref")) && (a.cacheID = xe.cache, a.v = e());
            return a.v + a.offset
          };
          return a.offset = 0, e && a
        },
        ze = {
          s: Te,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: Ie((function(e) {
            return arguments.length ? oe.scrollTo(e, Oe.sc()) : oe.pageXOffset || ce[Te] || le[Te] || de[Te] || 0
          }))
        },
        Oe = {
          s: Ee,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: ze,
          sc: Ie((function(e) {
            return arguments.length ? oe.scrollTo(ze.sc(), e) : oe.pageYOffset || ce[Ee] || le[Ee] || de[Ee] || 0
          }))
        },
        Re = (e, t) => (t && t._ctx && t._ctx.selector || re.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== re.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        Ae = (e, t) => {
          let {
            s: a,
            sc: s
          } = t;
          Se(e) && (e = ce.scrollingElement || le);
          let r = xe.indexOf(e),
            n = s === Oe.sc ? 1 : 2;
          !~r && (r = xe.push(e) - 1), xe[r + n] || Ne(e, "scroll", Pe);
          let i = xe[r + n],
            o = i || (xe[r + n] = Ie(Ce(e, a), !0) || (Se(e) ? s : Ie((function(t) {
              return arguments.length ? e[a] = t : e[a]
            }))));
          return o.target = e, i || (o.smooth = "smooth" === re.getProperty(e, "scrollBehavior")), o
        },
        Le = (e, t, a) => {
          let s = e,
            r = e,
            n = we(),
            i = n,
            o = t || 50,
            c = Math.max(500, 3 * o),
            l = (e, t) => {
              let c = we();
              t || c - n > o ? (r = s, s = e, i = n, n = c) : a ? s += e : s = r + (e - r) / (c - i) * (n - i)
            };
          return {
            update: l,
            reset: () => {
              r = s = a ? 0 : s, i = n = 0
            },
            getVelocity: e => {
              let t = i,
                o = r,
                d = we();
              return (e || 0 === e) && e !== s && l(e), n === i || d - i > c ? 0 : (s + (a ? o : -o)) / ((a ? d : n) - t) * 1e3
            }
          }
        },
        De = (e, t) => (t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        Be = e => {
          let t = Math.max(...e),
            a = Math.min(...e);
          return Math.abs(t) >= Math.abs(a) ? t : a
        },
        qe = () => {
          _e = re.core.globals().ScrollTrigger, _e && _e.core && (() => {
            let e = _e.core,
              t = e.bridge || {},
              a = e._scrollers,
              s = e._proxies;
            a.push(...xe), s.push(...ye), xe = a, ye = s, je = (e, a) => t[e](a)
          })()
        },
        Fe = e => (re = e || be(), re && "undefined" != typeof document && document.body && (oe = window, ce = document, le = ce.documentElement, de = ce.body, ge = [oe, ce, le, de], ie = re.utils.clamp, he = re.core.context || function() {}, me = "onpointerenter" in de ? "pointer" : "mouse", ue = $e.isTouch = oe.matchMedia && oe.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in oe || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, fe = $e.eventTypes = ("ontouchstart" in le ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in le ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => ke = 0), 500), qe(), ne = 1), ne);
      ze.op = Oe, xe.cache = 0;
      class $e {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          ne || Fe(re) || console.warn("Please gsap.registerPlugin(Observer)"), _e || qe();
          let {
            tolerance: t,
            dragMinimum: a,
            type: s,
            target: r,
            lineHeight: n,
            debounce: i,
            preventDefault: o,
            onStop: c,
            onStopDelay: l,
            ignore: d,
            wheelSpeed: u,
            event: m,
            onDragStart: _,
            onDragEnd: g,
            onDrag: p,
            onPress: f,
            onRelease: h,
            onRight: b,
            onLeft: k,
            onUp: v,
            onDown: x,
            onChangeX: y,
            onChangeY: w,
            onChange: j,
            onToggleX: C,
            onToggleY: S,
            onHover: N,
            onHoverEnd: M,
            onMove: T,
            ignoreCheck: E,
            isNormalizer: P,
            onGestureStart: I,
            onGestureEnd: z,
            onWheel: O,
            onEnable: R,
            onDisable: A,
            onClick: L,
            scrollSpeed: D,
            capture: B,
            allowClicks: q,
            lockAxis: F,
            onLockAxis: $
          } = e;
          this.target = r = Re(r) || le, this.vars = e, d && (d = re.utils.toArray(d)), t = t || 1e-9, a = a || 0, u = u || 1, D = D || 1, s = s || "wheel,touch,pointer", i = !1 !== i, n || (n = parseFloat(oe.getComputedStyle(de).lineHeight) || 22);
          let G, U, H, X, V, W, Y, K = this,
            J = 0,
            Q = 0,
            Z = Ae(r, ze),
            ee = Ae(r, Oe),
            te = Z(),
            ae = ee(),
            se = ~s.indexOf("touch") && !~s.indexOf("pointer") && "pointerdown" === fe[0],
            ie = Se(r),
            ge = r.ownerDocument || ce,
            be = [0, 0, 0],
            ke = [0, 0, 0],
            xe = 0,
            ye = () => xe = we(),
            je = (e, t) => (K.event = e) && d && ~d.indexOf(e.target) || t && se && "touch" !== e.pointerType || E && E(e, t),
            Ce = () => {
              let e = K.deltaX = Be(be),
                a = K.deltaY = Be(ke),
                s = Math.abs(e) >= t,
                r = Math.abs(a) >= t;
              j && (s || r) && j(K, e, a, be, ke), s && (b && K.deltaX > 0 && b(K), k && K.deltaX < 0 && k(K), y && y(K), C && K.deltaX < 0 != J < 0 && C(K), J = K.deltaX, be[0] = be[1] = be[2] = 0), r && (x && K.deltaY > 0 && x(K), v && K.deltaY < 0 && v(K), w && w(K), S && K.deltaY < 0 != Q < 0 && S(K), Q = K.deltaY, ke[0] = ke[1] = ke[2] = 0), (X || H) && (T && T(K), H && (p(K), H = !1), X = !1), W && !(W = !1) && $ && $(K), V && (O(K), V = !1), G = 0
            },
            Te = (e, t, a) => {
              be[a] += e, ke[a] += t, K._vx.update(e), K._vy.update(t), i ? G || (G = requestAnimationFrame(Ce)) : Ce()
            },
            Ee = (e, t) => {
              F && !Y && (K.axis = Y = Math.abs(e) > Math.abs(t) ? "x" : "y", W = !0), "y" !== Y && (be[2] += e, K._vx.update(e, !0)), "x" !== Y && (ke[2] += t, K._vy.update(t, !0)), i ? G || (G = requestAnimationFrame(Ce)) : Ce()
            },
            Ie = e => {
              if (je(e, 1)) return;
              let t = (e = De(e, o)).clientX,
                s = e.clientY,
                r = t - K.x,
                n = s - K.y,
                i = K.isDragging;
              K.x = t, K.y = s, (i || Math.abs(K.startX - t) >= a || Math.abs(K.startY - s) >= a) && (p && (H = !0), i || (K.isDragging = !0), Ee(r, n), i || _ && _(K))
            },
            $e = K.onPress = e => {
              je(e, 1) || e && e.button || (K.axis = Y = null, U.pause(), K.isPressed = !0, e = De(e), J = Q = 0, K.startX = K.x = e.clientX, K.startY = K.y = e.clientY, K._vx.reset(), K._vy.reset(), Ne(P ? r : ge, fe[1], Ie, o, !0), K.deltaX = K.deltaY = 0, f && f(K))
            },
            Ge = K.onRelease = e => {
              if (je(e, 1)) return;
              Me(P ? r : ge, fe[1], Ie, !0);
              let t = !isNaN(K.y - K.startY),
                a = K.isDragging && (Math.abs(K.x - K.startX) > 3 || Math.abs(K.y - K.startY) > 3),
                s = De(e);
              !a && t && (K._vx.reset(), K._vy.reset(), o && q && re.delayedCall(.08, (() => {
                if (we() - xe > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (ge.createEvent) {
                  let t = ge.createEvent("MouseEvents");
                  t.initMouseEvent("click", !0, !0, oe, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                }
              }))), K.isDragging = K.isGesturing = K.isPressed = !1, c && !P && U.restart(!0), g && a && g(K), h && h(K, a)
            },
            Ue = e => e.touches && e.touches.length > 1 && (K.isGesturing = !0) && I(e, K.isDragging),
            He = () => (K.isGesturing = !1) || z(K),
            Xe = e => {
              if (je(e)) return;
              let t = Z(),
                a = ee();
              Te((t - te) * D, (a - ae) * D, 1), te = t, ae = a, c && U.restart(!0)
            },
            Ve = e => {
              if (je(e)) return;
              e = De(e, o), O && (V = !0);
              let t = (1 === e.deltaMode ? n : 2 === e.deltaMode ? oe.innerHeight : 1) * u;
              Te(e.deltaX * t, e.deltaY * t, 0), c && !P && U.restart(!0)
            },
            We = e => {
              if (je(e)) return;
              let t = e.clientX,
                a = e.clientY,
                s = t - K.x,
                r = a - K.y;
              K.x = t, K.y = a, X = !0, (s || r) && Ee(s, r)
            },
            Ye = e => {
              K.event = e, N(K)
            },
            Ke = e => {
              K.event = e, M(K)
            },
            Je = e => je(e) || De(e, o) && L(K);
          U = K._dc = re.delayedCall(l || .25, (() => {
            K._vx.reset(), K._vy.reset(), U.pause(), c && c(K)
          })).pause(), K.deltaX = K.deltaY = 0, K._vx = Le(0, 50, !0), K._vy = Le(0, 50, !0), K.scrollX = Z, K.scrollY = ee, K.isDragging = K.isGesturing = K.isPressed = !1, he(this), K.enable = e => (K.isEnabled || (Ne(ie ? ge : r, "scroll", Pe), s.indexOf("scroll") >= 0 && Ne(ie ? ge : r, "scroll", Xe, o, B), s.indexOf("wheel") >= 0 && Ne(r, "wheel", Ve, o, B), (s.indexOf("touch") >= 0 && ue || s.indexOf("pointer") >= 0) && (Ne(r, fe[0], $e, o, B), Ne(ge, fe[2], Ge), Ne(ge, fe[3], Ge), q && Ne(r, "click", ye, !1, !0), L && Ne(r, "click", Je), I && Ne(ge, "gesturestart", Ue), z && Ne(ge, "gestureend", He), N && Ne(r, me + "enter", Ye), M && Ne(r, me + "leave", Ke), T && Ne(r, me + "move", We)), K.isEnabled = !0, e && e.type && $e(e), R && R(K)), K), K.disable = () => {
            K.isEnabled && (ve.filter((e => e !== K && Se(e.target))).length || Me(ie ? ge : r, "scroll", Pe), K.isPressed && (K._vx.reset(), K._vy.reset(), Me(P ? r : ge, fe[1], Ie, !0)), Me(ie ? ge : r, "scroll", Xe, B), Me(r, "wheel", Ve, B), Me(r, fe[0], $e, B), Me(ge, fe[2], Ge), Me(ge, fe[3], Ge), Me(r, "click", ye, !0), Me(r, "click", Je), Me(ge, "gesturestart", Ue), Me(ge, "gestureend", He), Me(r, me + "enter", Ye), Me(r, me + "leave", Ke), Me(r, me + "move", We), K.isEnabled = K.isPressed = K.isDragging = !1, A && A(K))
          }, K.kill = K.revert = () => {
            K.disable();
            let e = ve.indexOf(K);
            e >= 0 && ve.splice(e, 1), pe === K && (pe = 0)
          }, ve.push(K), P && Se(r) && (pe = K), K.enable(m)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      $e.version = "3.12.2", $e.create = e => new $e(e), $e.register = Fe, $e.getAll = () => ve.slice(), $e.getById = e => ve.filter((t => t.vars.id === e))[0], be() && re.registerPlugin($e);
      let Ge, Ue, He, Xe, Ve, We, Ye, Ke, Je, Qe, Ze, et, tt, at, st, rt, nt, it, ot, ct, lt, dt, ut, mt, _t, gt, pt, ft, ht, bt, kt, vt, xt, yt, wt, jt, Ct = 1,
        St = Date.now,
        Nt = St(),
        Mt = 0,
        Tt = 0,
        Et = (e, t, a) => {
          let s = Ut(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return a["_" + t + "Clamp"] = s, s ? e.substr(6, e.length - 7) : e
        },
        Pt = (e, t) => !t || Ut(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        It = () => Tt && requestAnimationFrame(It),
        zt = () => at = 1,
        Ot = () => at = 0,
        Rt = e => e,
        At = e => Math.round(1e5 * e) / 1e5 || 0,
        Lt = () => "undefined" != typeof window,
        Dt = () => Ge || Lt() && (Ge = window.gsap) && Ge.registerPlugin && Ge,
        Bt = e => !!~Ye.indexOf(e),
        qt = e => ("Height" === e ? kt : He["inner" + e]) || Ve["client" + e] || We["client" + e],
        Ft = e => Ce(e, "getBoundingClientRect") || (Bt(e) ? () => (Za.width = He.innerWidth, Za.height = kt, Za) : () => _a(e)),
        $t = (e, t) => {
          let {
            s: a,
            d2: s,
            d: r,
            a: n
          } = t;
          return Math.max(0, (a = "scroll" + s) && (n = Ce(e, a)) ? n() - Ft(e)()[r] : Bt(e) ? (Ve[a] || We[a]) - qt(s) : e[a] - e["offset" + s])
        },
        Gt = (e, t) => {
          for (let a = 0; a < ot.length; a += 3)(!t || ~t.indexOf(ot[a + 1])) && e(ot[a], ot[a + 1], ot[a + 2])
        },
        Ut = e => "string" == typeof e,
        Ht = e => "function" == typeof e,
        Xt = e => "number" == typeof e,
        Vt = e => "object" == typeof e,
        Wt = (e, t, a) => e && e.progress(t ? 0 : 1) && a && e.pause(),
        Yt = (e, t) => {
          if (e.enabled) {
            let a = t(e);
            a && a.totalTime && (e.callbackAnimation = a)
          }
        },
        Kt = Math.abs,
        Jt = "left",
        Qt = "right",
        Zt = "bottom",
        ea = "width",
        ta = "height",
        aa = "Right",
        sa = "Left",
        ra = "Top",
        na = "Bottom",
        ia = "padding",
        oa = "margin",
        ca = "Width",
        la = "Height",
        da = "px",
        ua = e => He.getComputedStyle(e),
        ma = (e, t) => {
          for (let a in t) a in e || (e[a] = t[a]);
          return e
        },
        _a = (e, t) => {
          let a = t && "matrix(1, 0, 0, 1, 0, 0)" !== ua(e)[st] && Ge.to(e, {
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
            s = e.getBoundingClientRect();
          return a && a.progress(0).kill(), s
        },
        ga = (e, t) => {
          let {
            d2: a
          } = t;
          return e["offset" + a] || e["client" + a] || 0
        },
        pa = e => {
          let t, a = [],
            s = e.labels,
            r = e.duration();
          for (t in s) a.push(s[t] / r);
          return a
        },
        fa = e => {
          let t = Ge.utils.snap(e),
            a = Array.isArray(e) && e.slice(0).sort(((e, t) => e - t));
          return a ? function(e, s) {
            let r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001;
            if (!s) return t(e);
            if (s > 0) {
              for (e -= n, r = 0; r < a.length; r++)
                if (a[r] >= e) return a[r];
              return a[r - 1]
            }
            for (r = a.length, e += n; r--;)
              if (a[r] <= e) return a[r];
            return a[0]
          } : function(a, s) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001,
              n = t(a);
            return !s || Math.abs(n - a) < r || n - a < 0 == s < 0 ? n : t(s < 0 ? a - e : a + e)
          }
        },
        ha = (e, t, a, s) => a.split(",").forEach((a => e(t, a, s))),
        ba = (e, t, a, s, r) => e.addEventListener(t, a, {
          passive: !s,
          capture: !!r
        }),
        ka = (e, t, a, s) => e.removeEventListener(t, a, !!s),
        va = (e, t, a) => {
          (a = a && a.wheelHandler) && (e(t, "wheel", a), e(t, "touchmove", a))
        },
        xa = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        ya = {
          toggleActions: "play",
          anticipatePin: 0
        },
        wa = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        ja = (e, t) => {
          if (Ut(e)) {
            let a = e.indexOf("="),
              s = ~a ? +(e.charAt(a - 1) + 1) * parseFloat(e.substr(a + 1)) : 0;
            ~a && (e.indexOf("%") > a && (s *= t / 100), e = e.substr(0, a - 1)), e = s + (e in wa ? wa[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        Ca = (e, t, a, s, r, n, i, o) => {
          let {
            startColor: c,
            endColor: l,
            fontSize: d,
            indent: u,
            fontWeight: m
          } = r, _ = Xe.createElement("div"), g = Bt(a) || "fixed" === Ce(a, "pinType"), p = -1 !== e.indexOf("scroller"), f = g ? We : a, h = -1 !== e.indexOf("start"), b = h ? c : l, k = "border-color:" + b + ";font-size:" + d + ";color:" + b + ";font-weight:" + m + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return k += "position:" + ((p || o) && g ? "fixed;" : "absolute;"), (p || o || !g) && (k += (s === Oe ? Qt : Zt) + ":" + (n + parseFloat(u)) + "px;"), i && (k += "box-sizing:border-box;text-align:left;width:" + i.offsetWidth + "px;"), _._isStart = h, _.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), _.style.cssText = k, _.innerText = t || 0 === t ? e + "-" + t : e, f.children[0] ? f.insertBefore(_, f.children[0]) : f.appendChild(_), _._offset = _["offset" + s.op.d2], Sa(_, 0, s, h), _
        },
        Sa = (e, t, a, s) => {
          let r = {
              display: "block"
            },
            n = a[s ? "os2" : "p2"],
            i = a[s ? "p2" : "os2"];
          e._isFlipped = s, r[a.a + "Percent"] = s ? -100 : 0, r[a.a] = s ? "1px" : 0, r["border" + n + ca] = 1, r["border" + i + ca] = 0, r[a.p] = t + "px", Ge.set(e, r)
        },
        Na = [],
        Ma = {},
        Ta = () => St() - Mt > 34 && (xt || (xt = requestAnimationFrame(Xa))),
        Ea = () => {
          (!ut || !ut.isPressed || ut.startX > We.clientWidth) && (xe.cache++, ut ? xt || (xt = requestAnimationFrame(Xa)) : Xa(), Mt || Aa("scrollStart"), Mt = St())
        },
        Pa = () => {
          gt = He.innerWidth, _t = He.innerHeight
        },
        Ia = () => {
          xe.cache++, !tt && !dt && !Xe.fullscreenElement && !Xe.webkitFullscreenElement && (!mt || gt !== He.innerWidth || Math.abs(He.innerHeight - _t) > .25 * He.innerHeight) && Ke.restart(!0)
        },
        za = {},
        Oa = [],
        Ra = () => ka(is, "scrollEnd", Ra) || Ga(!0),
        Aa = e => za[e] && za[e].map((e => e())) || Oa,
        La = [],
        Da = e => {
          for (let t = 0; t < La.length; t += 5)(!e || La[t + 4] && La[t + 4].query === e) && (La[t].style.cssText = La[t + 1], La[t].getBBox && La[t].setAttribute("transform", La[t + 2] || ""), La[t + 3].uncache = 1)
        },
        Ba = (e, t) => {
          let a;
          for (rt = 0; rt < Na.length; rt++) a = Na[rt], !a || t && a._ctx !== t || (e ? a.kill(1) : a.revert(!0, !0));
          t && Da(t), t || Aa("revert")
        },
        qa = (e, t) => {
          xe.cache++, (t || !yt) && xe.forEach((e => Ht(e) && e.cacheID++ && (e.rec = 0))), Ut(e) && (He.history.scrollRestoration = ht = e)
        },
        Fa = 0,
        $a = () => {
          We.appendChild(bt), kt = bt.offsetHeight || He.innerHeight, We.removeChild(bt)
        },
        Ga = (e, t) => {
          if (Mt && !e) return void ba(is, "scrollEnd", Ra);
          $a(), yt = is.isRefreshing = !0, xe.forEach((e => Ht(e) && ++e.cacheID && (e.rec = e())));
          let a = Aa("refreshInit");
          ct && is.sort(), t || Ba(), xe.forEach((e => {
            Ht(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), Na.slice(0).forEach((e => e.refresh())), Na.forEach(((e, t) => {
            if (e._subPinOffset && e.pin) {
              let t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                a = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - a), e.refresh()
            }
          })), Na.forEach((e => {
            let t = $t(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > t) && e.setPositions(e.start, Math.max(e.start + 1, t), !0)
          })), a.forEach((e => e && e.render && e.render(-1))), xe.forEach((e => {
            Ht(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), qa(ht, 1), Ke.pause(), Fa++, yt = 2, Xa(2), Na.forEach((e => Ht(e.vars.onRefresh) && e.vars.onRefresh(e))), yt = is.isRefreshing = !1, Aa("refresh")
        },
        Ua = 0,
        Ha = 1,
        Xa = e => {
          if (!yt || 2 === e) {
            is.isUpdating = !0, jt && jt.update(0);
            let e = Na.length,
              t = St(),
              a = t - Nt >= 50,
              s = e && Na[0].scroll();
            if (Ha = Ua > s ? -1 : 1, yt || (Ua = s), a && (Mt && !at && t - Mt > 200 && (Mt = 0, Aa("scrollEnd")), Ze = Nt, Nt = t), Ha < 0) {
              for (rt = e; rt-- > 0;) Na[rt] && Na[rt].update(0, a);
              Ha = 1
            } else
              for (rt = 0; rt < e; rt++) Na[rt] && Na[rt].update(0, a);
            is.isUpdating = !1
          }
          xt = 0
        },
        Va = [Jt, "top", Zt, Qt, oa + na, oa + aa, oa + ra, oa + sa, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Wa = Va.concat([ea, ta, "boxSizing", "max" + ca, "max" + la, "position", oa, ia, ia + ra, ia + aa, ia + na, ia + sa]),
        Ya = (e, t, a, s) => {
          if (!e._gsap.swappedIn) {
            let r, n = Va.length,
              i = t.style,
              o = e.style;
            for (; n--;) r = Va[n], i[r] = a[r];
            i.position = "absolute" === a.position ? "absolute" : "relative", "inline" === a.display && (i.display = "inline-block"), o[Zt] = o[Qt] = "auto", i.flexBasis = a.flexBasis || "auto", i.overflow = "visible", i.boxSizing = "border-box", i[ea] = ga(e, ze) + da, i[ta] = ga(e, Oe) + da, i[ia] = o[oa] = o.top = o[Jt] = "0", Ja(s), o[ea] = o["max" + ca] = a[ea], o[ta] = o["max" + la] = a[ta], o[ia] = a[ia], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        Ka = /([A-Z])/g,
        Ja = e => {
          if (e) {
            let t, a, s = e.t.style,
              r = e.length,
              n = 0;
            for ((e.t._gsap || Ge.core.getCache(e.t)).uncache = 1; n < r; n += 2) a = e[n + 1], t = e[n], a ? s[t] = a : s[t] && s.removeProperty(t.replace(Ka, "-$1").toLowerCase())
          }
        },
        Qa = e => {
          let t = Wa.length,
            a = e.style,
            s = [],
            r = 0;
          for (; r < t; r++) s.push(Wa[r], a[Wa[r]]);
          return s.t = e, s
        },
        Za = {
          left: 0,
          top: 0
        },
        es = (e, t, a, s, r, n, i, o, c, l, d, u, m, _) => {
          Ht(e) && (e = e(o)), Ut(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? ja("0" + e.substr(3), a) : 0));
          let g, p, f, h = m ? m.time() : 0;
          if (m && m.seek(0), isNaN(e) || (e = +e), Xt(e)) m && (e = Ge.utils.mapRange(m.scrollTrigger.start, m.scrollTrigger.end, 0, u, e)), i && Sa(i, a, s, !0);
          else {
            Ht(t) && (t = t(o));
            let n, d, u, m, _ = (e || "0").split(" ");
            f = Re(t, o) || We, n = _a(f) || {}, n && (n.left || n.top) || "none" !== ua(f).display || (m = f.style.display, f.style.display = "block", n = _a(f), m ? f.style.display = m : f.style.removeProperty("display")), d = ja(_[0], n[s.d]), u = ja(_[1] || "0", a), e = n[s.p] - c[s.p] - l + d + r - u, i && Sa(i, u, s, a - u < 20 || i._isStart && u > 20), a -= a - u
          }
          if (_ && (o[_] = e || -.001, e < 0 && (e = 0)), n) {
            let t = e + a,
              r = n._isStart;
            g = "scroll" + s.d2, Sa(n, t, s, r && t > 20 || !r && (d ? Math.max(We[g], Ve[g]) : n.parentNode[g]) <= t + 1), d && (c = _a(i), d && (n.style[s.op.p] = c[s.op.p] - s.op.m - n._offset + da))
          }
          return m && f && (g = _a(f), m.seek(u), p = _a(f), m._caScrollDist = g[s.p] - p[s.p], e = e / m._caScrollDist * u), m && m.seek(h), m ? e : Math.round(e)
        },
        ts = /(webkit|moz|length|cssText|inset)/i,
        as = (e, t, a, s) => {
          if (e.parentNode !== t) {
            let r, n, i = e.style;
            if (t === We) {
              for (r in e._stOrig = i.cssText, n = ua(e), n) + r || ts.test(r) || !n[r] || "string" != typeof i[r] || "0" === r || (i[r] = n[r]);
              i.top = a, i.left = s
            } else i.cssText = e._stOrig;
            Ge.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        ss = (e, t, a) => {
          let s = t,
            r = s;
          return t => {
            let n = Math.round(e());
            return n !== s && n !== r && Math.abs(n - s) > 3 && Math.abs(n - r) > 3 && (t = n, a && a()), r = s, s = t, t
          }
        },
        rs = (e, t, a) => {
          let s = {};
          s[t.p] = "+=" + a, Ge.set(e, s)
        },
        ns = (e, t) => {
          let a = Ae(e, t),
            s = "_scroll" + t.p2,
            r = (t, n, i, o, c) => {
              let l = r.tween,
                d = n.onComplete,
                u = {};
              i = i || a();
              let m = ss(a, i, (() => {
                l.kill(), r.tween = 0
              }));
              return c = o && c || 0, o = o || t - i, l && l.kill(), n[s] = t, n.modifiers = u, u[s] = () => m(i + o * l.ratio + c * l.ratio * l.ratio), n.onUpdate = () => {
                xe.cache++, Xa()
              }, n.onComplete = () => {
                r.tween = 0, d && d.call(l)
              }, l = r.tween = Ge.to(e, n), l
            };
          return e[s] = a, a.wheelHandler = () => r.tween && r.tween.kill() && (r.tween = 0), ba(e, "wheel", a.wheelHandler), is.isTouch && ba(e, "touchmove", a.wheelHandler), r
        };
      class is {
        constructor(e, t) {
          Ue || is.register(Ge) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), ft(this), this.init(e, t)
        }
        init(e, t) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Tt) return void(this.update = this.refresh = this.kill = Rt);
          e = ma(Ut(e) || Xt(e) || e.nodeType ? {
            trigger: e
          } : e, ya);
          let a, s, r, n, i, o, c, l, d, u, m, _, g, p, f, h, b, k, v, x, y, w, j, C, S, N, M, T, E, P, I, z, O, R, A, L, D, B, q, {
              onUpdate: F,
              toggleClass: $,
              id: G,
              onToggle: U,
              onRefresh: H,
              scrub: X,
              trigger: V,
              pin: W,
              pinSpacing: Y,
              invalidateOnRefresh: K,
              anticipatePin: J,
              onScrubComplete: Q,
              onSnapComplete: Z,
              once: ee,
              snap: te,
              pinReparent: ae,
              pinSpacer: se,
              containerAnimation: re,
              fastScrollEnd: ne,
              preventOverlaps: ie
            } = e,
            oe = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? ze : Oe,
            ce = !X && 0 !== X,
            le = Re(e.scroller || He),
            de = Ge.core.getCache(le),
            ue = Bt(le),
            me = "fixed" === ("pinType" in e ? e.pinType : Ce(le, "pinType") || ue && "fixed"),
            _e = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            ge = ce && e.toggleActions.split(" "),
            pe = "markers" in e ? e.markers : ya.markers,
            fe = ue ? 0 : parseFloat(ua(le)["border" + oe.p2 + ca]) || 0,
            he = this,
            be = e.onRefreshInit && (() => e.onRefreshInit(he)),
            ke = ((e, t, a) => {
              let {
                d: s,
                d2: r,
                a: n
              } = a;
              return (n = Ce(e, "getBoundingClientRect")) ? () => n()[s] : () => (t ? qt(r) : e["client" + r]) || 0
            })(le, ue, oe),
            ve = ((e, t) => !t || ~ye.indexOf(e) ? Ft(e) : () => Za)(le, ue),
            we = 0,
            je = 0,
            Se = 0,
            Ne = Ae(le, oe);
          var Me;
          if (he._startClamp = he._endClamp = !1, he._dir = oe, J *= 45, he.scroller = le, he.scroll = re ? re.time.bind(re) : Ne, n = Ne(), he.vars = e, t = t || e.animation, "refreshPriority" in e && (ct = 1, -9999 === e.refreshPriority && (jt = he)), de.tweenScroll = de.tweenScroll || {
              top: ns(le, Oe),
              left: ns(le, ze)
            }, he.tweenTo = a = de.tweenScroll[oe.p], he.scrubDuration = e => {
              O = Xt(e) && e, O ? z ? z.duration(e) : z = Ge.to(t, {
                ease: "expo",
                totalProgress: "+=0",
                duration: O,
                paused: !0,
                onComplete: () => Q && Q(he)
              }) : (z && z.progress(1).kill(), z = 0)
            }, t && (t.vars.lazy = !1, t._initted && !he.isReverted || !1 !== t.vars.immediateRender && !1 !== e.immediateRender && t.duration() && t.render(0, !0, !0), he.animation = t.pause(), t.scrollTrigger = he, he.scrubDuration(X), P = 0, G || (G = t.vars.id)), te && (Vt(te) && !te.push || (te = {
              snapTo: te
            }), "scrollBehavior" in We.style && Ge.set(ue ? [We, Ve] : le, {
              scrollBehavior: "auto"
            }), xe.forEach((e => Ht(e) && e.target === (ue ? Xe.scrollingElement || Ve : le) && (e.smooth = !1))), r = Ht(te.snapTo) ? te.snapTo : "labels" === te.snapTo ? (e => t => Ge.utils.snap(pa(e), t))(t) : "labelsDirectional" === te.snapTo ? (Me = t, (e, t) => fa(pa(Me))(e, t.direction)) : !1 !== te.directional ? (e, t) => fa(te.snapTo)(e, St() - je < 500 ? 0 : t.direction) : Ge.utils.snap(te.snapTo), R = te.duration || {
              min: .1,
              max: 2
            }, R = Vt(R) ? Qe(R.min, R.max) : Qe(R, R), A = Ge.delayedCall(te.delay || O / 2 || .1, (() => {
              let e = Ne(),
                s = St() - je < 500,
                n = a.tween;
              if (!(s || Math.abs(he.getVelocity()) < 10) || n || at || we === e) he.isActive && we !== e && A.restart(!0);
              else {
                let i = (e - o) / p,
                  l = t && !ce ? t.totalProgress() : i,
                  d = s ? 0 : (l - I) / (St() - Ze) * 1e3 || 0,
                  u = Ge.utils.clamp(-i, 1 - i, Kt(d / 2) * d / .185),
                  m = i + (!1 === te.inertia ? 0 : u),
                  _ = Qe(0, 1, r(m, he)),
                  g = Math.round(o + _ * p),
                  {
                    onStart: f,
                    onInterrupt: h,
                    onComplete: b
                  } = te;
                if (e <= c && e >= o && g !== e) {
                  if (n && !n._initted && n.data <= Kt(g - e)) return;
                  !1 === te.inertia && (u = _ - i), a(g, {
                    duration: R(Kt(.185 * Math.max(Kt(m - l), Kt(_ - l)) / d / .05 || 0)),
                    ease: te.ease || "power3",
                    data: Kt(g - e),
                    onInterrupt: () => A.restart(!0) && h && h(he),
                    onComplete: () => {
                      he.update(), we = Ne(), P = I = t && !ce ? t.totalProgress() : he.progress, Z && Z(he), b && b(he)
                    }
                  }, e, u * p, g - e - u * p), f && f(he, a.tween)
                }
              }
            })).pause()), G && (Ma[G] = he), V = he.trigger = Re(V || !0 !== W && W), q = V && V._gsap && V._gsap.stRevert, q && (q = q(he)), W = !0 === W ? V : Re(W), Ut($) && ($ = {
              targets: V,
              className: $
            }), W && (!1 === Y || Y === oa || (Y = !(!Y && W.parentNode && W.parentNode.style && "flex" === ua(W.parentNode).display) && ia), he.pin = W, s = Ge.core.getCache(W), s.spacer ? f = s.pinState : (se && (se = Re(se), se && !se.nodeType && (se = se.current || se.nativeElement), s.spacerIsNative = !!se, se && (s.spacerState = Qa(se))), s.spacer = k = se || Xe.createElement("div"), k.classList.add("pin-spacer"), G && k.classList.add("pin-spacer-" + G), s.pinState = f = Qa(W)), !1 !== e.force3D && Ge.set(W, {
              force3D: !0
            }), he.spacer = k = s.spacer, E = ua(W), C = E[Y + oe.os2], x = Ge.getProperty(W), y = Ge.quickSetter(W, oe.a, da), Ya(W, k, E), b = Qa(W)), pe) {
            _ = Vt(pe) ? ma(pe, xa) : xa, u = Ca("scroller-start", G, le, oe, _, 0), m = Ca("scroller-end", G, le, oe, _, 0, u), v = u["offset" + oe.op.d2];
            let e = Re(Ce(le, "content") || le);
            l = this.markerStart = Ca("start", G, e, oe, _, v, 0, re), d = this.markerEnd = Ca("end", G, e, oe, _, v, 0, re), re && (B = Ge.quickSetter([l, d], oe.a, da)), me || ye.length && !0 === Ce(le, "fixedMarkers") || ((e => {
              let t = ua(e).position;
              e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
            })(ue ? We : le), Ge.set([u, m], {
              force3D: !0
            }), N = Ge.quickSetter(u, oe.a, da), T = Ge.quickSetter(m, oe.a, da))
          }
          if (re) {
            let e = re.vars.onUpdate,
              t = re.vars.onUpdateParams;
            re.eventCallback("onUpdate", (() => {
              he.update(0, 0, 1), e && e.apply(re, t || [])
            }))
          }
          if (he.previous = () => Na[Na.indexOf(he) - 1], he.next = () => Na[Na.indexOf(he) + 1], he.revert = (e, a) => {
              if (!a) return he.kill(!0);
              let s = !1 !== e || !he.enabled,
                r = tt;
              s !== he.isReverted && (s && (L = Math.max(Ne(), he.scroll.rec || 0), Se = he.progress, D = t && t.progress()), l && [l, d, u, m].forEach((e => e.style.display = s ? "none" : "block")), s && (tt = he, he.update(s)), !W || ae && he.isActive || (s ? ((e, t, a) => {
                Ja(a);
                let s = e._gsap;
                if (s.spacerIsNative) Ja(s.spacerState);
                else if (e._gsap.swappedIn) {
                  let a = t.parentNode;
                  a && (a.insertBefore(e, t), a.removeChild(t))
                }
                e._gsap.swappedIn = !1
              })(W, k, f) : Ya(W, k, ua(W), S)), s || he.update(s), tt = r, he.isReverted = s)
            }, he.refresh = (s, r, _, v) => {
              if ((tt || !he.enabled) && !r) return;
              if (W && s && Mt) return void ba(is, "scrollEnd", Ra);
              !yt && be && be(he), tt = he, a.tween && !_ && (a.tween.kill(), a.tween = 0), z && z.pause(), K && t && t.revert({
                kill: !1
              }).invalidate(), he.isReverted || he.revert(!0, !0), he._subPinOffset = !1;
              let y, C, N, T, E, P, I, O, R, B, q, F, $, G = ke(),
                U = ve(),
                X = re ? re.duration() : $t(le, oe),
                J = p <= .01,
                Q = 0,
                Z = v || 0,
                ee = Vt(_) ? _.end : e.end,
                te = e.endTrigger || V,
                se = Vt(_) ? _.start : e.start || (0 !== e.start && V ? W ? "0 0" : "0 100%" : 0),
                ne = he.pinnedContainer = e.pinnedContainer && Re(e.pinnedContainer, he),
                ie = V && Math.max(0, Na.indexOf(he)) || 0,
                de = ie;
              for (pe && Vt(_) && (F = Ge.getProperty(u, oe.p), $ = Ge.getProperty(m, oe.p)); de--;) P = Na[de], P.end || P.refresh(0, 1) || (tt = he), I = P.pin, !I || I !== V && I !== W && I !== ne || P.isReverted || (B || (B = []), B.unshift(P), P.revert(!0, !0)), P !== Na[de] && (ie--, de--);
              for (Ht(se) && (se = se(he)), se = Et(se, "start", he), o = es(se, V, G, oe, Ne(), l, u, he, U, fe, me, X, re, he._startClamp && "_startClamp") || (W ? -.001 : 0), Ht(ee) && (ee = ee(he)), Ut(ee) && !ee.indexOf("+=") && (~ee.indexOf(" ") ? ee = (Ut(se) ? se.split(" ")[0] : "") + ee : (Q = ja(ee.substr(2), G), ee = Ut(se) ? se : (re ? Ge.utils.mapRange(0, re.duration(), re.scrollTrigger.start, re.scrollTrigger.end, o) : o) + Q, te = V)), ee = Et(ee, "end", he), c = Math.max(o, es(ee || (te ? "100% 0" : X), te, G, oe, Ne() + Q, d, m, he, U, fe, me, X, re, he._endClamp && "_endClamp")) || -.001, Q = 0, de = ie; de--;) P = Na[de], I = P.pin, I && P.start - P._pinPush <= o && !re && P.end > 0 && (y = P.end - (he._startClamp ? Math.max(0, P.start) : P.start), (I === V && P.start - P._pinPush < o || I === ne) && isNaN(se) && (Q += y * (1 - P.progress)), I === W && (Z += y));
              if (o += Q, c += Q, he._startClamp && (he._startClamp += Q), he._endClamp && !yt && (he._endClamp = c || -.001, c = Math.min(c, $t(le, oe))), p = c - o || (o -= .01) && .001, J && (Se = Ge.utils.clamp(0, 1, Ge.utils.normalize(o, c, L))), he._pinPush = Z, l && Q && (y = {}, y[oe.a] = "+=" + Q, ne && (y[oe.p] = "-=" + Ne()), Ge.set([l, d], y)), W) y = ua(W), T = oe === Oe, N = Ne(), w = parseFloat(x(oe.a)) + Z, !X && c > 1 && (q = (ue ? Xe.scrollingElement || Ve : le).style, q = {
                style: q,
                value: q["overflow" + oe.a.toUpperCase()]
              }, ue && "scroll" !== ua(We)["overflow" + oe.a.toUpperCase()] && (q.style["overflow" + oe.a.toUpperCase()] = "scroll")), Ya(W, k, y), b = Qa(W), C = _a(W, !0), O = me && Ae(le, T ? ze : Oe)(), Y && (S = [Y + oe.os2, p + Z + da], S.t = k, de = Y === ia ? ga(W, oe) + p + Z : 0, de && S.push(oe.d, de + da), Ja(S), ne && Na.forEach((e => {
                e.pin === ne && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), me && Ne(L)), me && (E = {
                top: C.top + (T ? N - o : O) + da,
                left: C.left + (T ? O : N - o) + da,
                boxSizing: "border-box",
                position: "fixed"
              }, E[ea] = E["max" + ca] = Math.ceil(C.width) + da, E[ta] = E["max" + la] = Math.ceil(C.height) + da, E[oa] = E[oa + ra] = E[oa + aa] = E[oa + na] = E[oa + sa] = "0", E[ia] = y[ia], E[ia + ra] = y[ia + ra], E[ia + aa] = y[ia + aa], E[ia + na] = y[ia + na], E[ia + sa] = y[ia + sa], h = ((e, t, a) => {
                let s, r = [],
                  n = e.length,
                  i = a ? 8 : 0;
                for (; i < n; i += 2) s = e[i], r.push(s, s in t ? t[s] : e[i + 1]);
                return r.t = e.t, r
              })(f, E, ae), yt && Ne(0)), t ? (R = t._initted, lt(1), t.render(t.duration(), !0, !0), j = x(oe.a) - w + p + Z, M = Math.abs(p - j) > 1, me && M && h.splice(h.length - 2, 2), t.render(0, !0, !0), R || t.invalidate(!0), t.parent || t.totalTime(t.totalTime()), lt(0)) : j = p, q && (q.value ? q.style["overflow" + oe.a.toUpperCase()] = q.value : q.style.removeProperty("overflow-" + oe.a));
              else if (V && Ne() && !re)
                for (C = V.parentNode; C && C !== We;) C._pinOffset && (o -= C._pinOffset, c -= C._pinOffset), C = C.parentNode;
              B && B.forEach((e => e.revert(!1, !0))), he.start = o, he.end = c, n = i = yt ? L : Ne(), re || yt || (n < L && Ne(L), he.scroll.rec = 0), he.revert(!1, !0), je = St(), A && (we = -1, A.restart(!0)), tt = 0, t && ce && (t._initted || D) && t.progress() !== D && t.progress(D || 0, !0).render(t.time(), !0, !0), (J || Se !== he.progress || re) && (t && !ce && t.totalProgress(re && o < -.001 && !Se ? Ge.utils.normalize(o, c, 0) : Se, !0), he.progress = J || (n - o) / p === Se ? 0 : Se), W && Y && (k._pinOffset = Math.round(he.progress * j)), z && z.invalidate(), isNaN(F) || (F -= Ge.getProperty(u, oe.p), $ -= Ge.getProperty(m, oe.p), rs(u, oe, F), rs(l, oe, F - (v || 0)), rs(m, oe, $), rs(d, oe, $ - (v || 0))), J && !yt && he.update(), !H || yt || g || (g = !0, H(he), g = !1)
            }, he.getVelocity = () => (Ne() - i) / (St() - Ze) * 1e3 || 0, he.endAnimation = () => {
              Wt(he.callbackAnimation), t && (z ? z.progress(1) : t.paused() ? ce || Wt(t, he.direction < 0, 1) : Wt(t, t.reversed()))
            }, he.labelToScroll = e => t && t.labels && (o || he.refresh() || o) + t.labels[e] / t.duration() * p || 0, he.getTrailing = e => {
              let t = Na.indexOf(he),
                a = he.direction > 0 ? Na.slice(0, t).reverse() : Na.slice(t + 1);
              return (Ut(e) ? a.filter((t => t.vars.preventOverlaps === e)) : a).filter((e => he.direction > 0 ? e.end <= o : e.start >= c))
            }, he.update = (e, s, r) => {
              if (re && !r && !e) return;
              let l, d, m, _, g, f, v, x, S = !0 === yt ? L : he.scroll(),
                E = e ? 0 : (S - o) / p,
                O = E < 0 ? 0 : E > 1 ? 1 : E || 0,
                R = he.progress;
              if (s && (i = n, n = re ? Ne() : S, te && (I = P, P = t && !ce ? t.totalProgress() : O)), J && !O && W && !tt && !Ct && Mt && o < S + (S - i) / (St() - Ze) * J && (O = 1e-4), O !== R && he.enabled) {
                if (l = he.isActive = !!O && O < 1, d = !!R && R < 1, f = l !== d, g = f || !!O != !!R, he.direction = O > R ? 1 : -1, he.progress = O, g && !tt && (m = O && !R ? 0 : 1 === O ? 1 : 1 === R ? 2 : 3, ce && (_ = !f && "none" !== ge[m + 1] && ge[m + 1] || ge[m], x = t && ("complete" === _ || "reset" === _ || _ in t))), ie && (f || x) && (x || X || !t) && (Ht(ie) ? ie(he) : he.getTrailing(ie).forEach((e => e.endAnimation()))), ce || (!z || tt || Ct ? t && t.totalProgress(O, !(!tt || !je && !e)) : (z._dp._time - z._start !== z._time && z.render(z._dp._time - z._start), z.resetTo ? z.resetTo("totalProgress", O, t._tTime / t._tDur) : (z.vars.totalProgress = O, z.invalidate().restart()))), W)
                  if (e && Y && (k.style[Y + oe.os2] = C), me) {
                    if (g) {
                      if (v = !e && O > R && c + 1 > S && S + 1 >= $t(le, oe), ae)
                        if (e || !l && !v) as(W, k);
                        else {
                          let e = _a(W, !0),
                            t = S - o;
                          as(W, We, e.top + (oe === Oe ? t : 0) + da, e.left + (oe === Oe ? 0 : t) + da)
                        } Ja(l || v ? h : b), M && O < 1 && l || y(w + (1 !== O || v ? 0 : j))
                    }
                  } else y(At(w + j * O));
                te && !a.tween && !tt && !Ct && A.restart(!0), $ && (f || ee && O && (O < 1 || !vt)) && Je($.targets).forEach((e => e.classList[l || ee ? "add" : "remove"]($.className))), F && !ce && !e && F(he), g && !tt ? (ce && (x && ("complete" === _ ? t.pause().totalProgress(1) : "reset" === _ ? t.restart(!0).pause() : "restart" === _ ? t.restart(!0) : t[_]()), F && F(he)), !f && vt || (U && f && Yt(he, U), _e[m] && Yt(he, _e[m]), ee && (1 === O ? he.kill(!1, 1) : _e[m] = 0), f || (m = 1 === O ? 1 : 3, _e[m] && Yt(he, _e[m]))), ne && !l && Math.abs(he.getVelocity()) > (Xt(ne) ? ne : 2500) && (Wt(he.callbackAnimation), z ? z.progress(1) : Wt(t, "reverse" === _ ? 1 : !O, 1))) : ce && F && !tt && F(he)
              }
              if (T) {
                let e = re ? S / re.duration() * (re._caScrollDist || 0) : S;
                N(e + (u._isFlipped ? 1 : 0)), T(e)
              }
              B && B(-S / re.duration() * (re._caScrollDist || 0))
            }, he.enable = (e, t) => {
              he.enabled || (he.enabled = !0, ba(le, "resize", Ia), ue || ba(le, "scroll", Ea), be && ba(is, "refreshInit", be), !1 !== e && (he.progress = Se = 0, n = i = we = Ne()), !1 !== t && he.refresh())
            }, he.getTween = e => e && a ? a.tween : z, he.setPositions = (e, t, a, s) => {
              if (re) {
                let a = re.scrollTrigger,
                  s = re.duration(),
                  r = a.end - a.start;
                e = a.start + r * e / s, t = a.start + r * t / s
              }
              he.refresh(!1, !1, {
                start: Pt(e, a && !!he._startClamp),
                end: Pt(t, a && !!he._endClamp)
              }, s), he.update()
            }, he.adjustPinSpacing = e => {
              if (S && e) {
                let t = S.indexOf(oe.d) + 1;
                S[t] = parseFloat(S[t]) + e + da, S[1] = parseFloat(S[1]) + e + da, Ja(S)
              }
            }, he.disable = (e, t) => {
              if (he.enabled && (!1 !== e && he.revert(!0, !0), he.enabled = he.isActive = !1, t || z && z.pause(), L = 0, s && (s.uncache = 1), be && ka(is, "refreshInit", be), A && (A.pause(), a.tween && a.tween.kill() && (a.tween = 0)), !ue)) {
                let e = Na.length;
                for (; e--;)
                  if (Na[e].scroller === le && Na[e] !== he) return;
                ka(le, "resize", Ia), ue || ka(le, "scroll", Ea)
              }
            }, he.kill = (a, r) => {
              he.disable(a, r), z && !r && z.kill(), G && delete Ma[G];
              let n = Na.indexOf(he);
              n >= 0 && Na.splice(n, 1), n === rt && Ha > 0 && rt--, n = 0, Na.forEach((e => e.scroller === he.scroller && (n = 1))), n || yt || (he.scroll.rec = 0), t && (t.scrollTrigger = null, a && t.revert({
                kill: !1
              }), r || t.kill()), l && [l, d, u, m].forEach((e => e.parentNode && e.parentNode.removeChild(e))), jt === he && (jt = 0), W && (s && (s.uncache = 1), n = 0, Na.forEach((e => e.pin === W && n++)), n || (s.spacer = 0)), e.onKill && e.onKill(he)
            }, Na.push(he), he.enable(!1, !1), q && q(he), t && t.add && !p) {
            let e = he.update;
            he.update = () => {
              he.update = e, o || c || he.refresh()
            }, Ge.delayedCall(.01, he.update), p = .01, o = c = 0
          } else he.refresh();
          W && (() => {
            if (wt !== Fa) {
              let e = wt = Fa;
              requestAnimationFrame((() => e === Fa && Ga(!0)))
            }
          })()
        }
        static register(e) {
          return Ue || (Ge = e || Dt(), Lt() && window.document && is.enable(), Ue = Tt), Ue
        }
        static defaults(e) {
          if (e)
            for (let t in e) ya[t] = e[t];
          return ya
        }
        static disable(e, t) {
          Tt = 0, Na.forEach((a => a[t ? "kill" : "disable"](e))), ka(He, "wheel", Ea), ka(Xe, "scroll", Ea), clearInterval(et), ka(Xe, "touchcancel", Rt), ka(We, "touchstart", Rt), ha(ka, Xe, "pointerdown,touchstart,mousedown", zt), ha(ka, Xe, "pointerup,touchend,mouseup", Ot), Ke.kill(), Gt(ka);
          for (let e = 0; e < xe.length; e += 3) va(ka, xe[e], xe[e + 1]), va(ka, xe[e], xe[e + 2])
        }
        static enable() {
          if (He = window, Xe = document, Ve = Xe.documentElement, We = Xe.body, Ge && (Je = Ge.utils.toArray, Qe = Ge.utils.clamp, ft = Ge.core.context || Rt, lt = Ge.core.suppressOverwrites || Rt, ht = He.history.scrollRestoration || "auto", Ua = He.pageYOffset, Ge.core.globals("ScrollTrigger", is), We)) {
            Tt = 1, bt = document.createElement("div"), bt.style.height = "100vh", bt.style.position = "absolute", $a(), It(), $e.register(Ge), is.isTouch = $e.isTouch, pt = $e.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ba(He, "wheel", Ea), Ye = [He, Xe, Ve, We], Ge.matchMedia ? (is.matchMedia = e => {
              let t, a = Ge.matchMedia();
              for (t in e) a.add(t, e[t]);
              return a
            }, Ge.addEventListener("matchMediaInit", (() => Ba())), Ge.addEventListener("matchMediaRevert", (() => Da())), Ge.addEventListener("matchMedia", (() => {
              Ga(0, 1), Aa("matchMedia")
            })), Ge.matchMedia("(orientation: portrait)", (() => (Pa(), Pa)))) : console.warn("Requires GSAP 3.11.0 or later"), Pa(), ba(Xe, "scroll", Ea);
            let e, t, a = We.style,
              s = a.borderTopStyle,
              r = Ge.core.Animation.prototype;
            for (r.revert || Object.defineProperty(r, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), a.borderTopStyle = "solid", e = _a(We), Oe.m = Math.round(e.top + Oe.sc()) || 0, ze.m = Math.round(e.left + ze.sc()) || 0, s ? a.borderTopStyle = s : a.removeProperty("border-top-style"), et = setInterval(Ta, 250), Ge.delayedCall(.5, (() => Ct = 0)), ba(Xe, "touchcancel", Rt), ba(We, "touchstart", Rt), ha(ba, Xe, "pointerdown,touchstart,mousedown", zt), ha(ba, Xe, "pointerup,touchend,mouseup", Ot), st = Ge.utils.checkPrefix("transform"), Wa.push(st), Ue = St(), Ke = Ge.delayedCall(.2, Ga).pause(), ot = [Xe, "visibilitychange", () => {
                let e = He.innerWidth,
                  t = He.innerHeight;
                Xe.hidden ? (nt = e, it = t) : nt === e && it === t || Ia()
              }, Xe, "DOMContentLoaded", Ga, He, "load", Ga, He, "resize", Ia], Gt(ba), Na.forEach((e => e.enable(0, 1))), t = 0; t < xe.length; t += 3) va(ka, xe[t], xe[t + 1]), va(ka, xe[t], xe[t + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (vt = !!e.limitCallbacks);
          let t = e.syncInterval;
          t && clearInterval(et) || (et = t) && setInterval(Ta, t), "ignoreMobileResize" in e && (mt = 1 === is.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Gt(ka) || Gt(ba, e.autoRefreshEvents || "none"), dt = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, t) {
          let a = Re(e),
            s = xe.indexOf(a),
            r = Bt(a);
          ~s && xe.splice(s, r ? 6 : 2), t && (r ? ye.unshift(He, t, We, t, Ve, t) : ye.unshift(a, t))
        }
        static clearMatchMedia(e) {
          Na.forEach((t => t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)))
        }
        static isInViewport(e, t, a) {
          let s = (Ut(e) ? Re(e) : e).getBoundingClientRect(),
            r = s[a ? ea : ta] * t || 0;
          return a ? s.right - r > 0 && s.left + r < He.innerWidth : s.bottom - r > 0 && s.top + r < He.innerHeight
        }
        static positionInViewport(e, t, a) {
          Ut(e) && (e = Re(e));
          let s = e.getBoundingClientRect(),
            r = s[a ? ea : ta],
            n = null == t ? r / 2 : t in wa ? wa[t] * r : ~t.indexOf("%") ? parseFloat(t) * r / 100 : parseFloat(t) || 0;
          return a ? (s.left + n) / He.innerWidth : (s.top + n) / He.innerHeight
        }
        static killAll(e) {
          if (Na.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = za.killAll || [];
            za = {}, e.forEach((e => e()))
          }
        }
      }
      is.version = "3.12.2", is.saveStyles = e => e ? Je(e).forEach((e => {
        if (e && e.style) {
          let t = La.indexOf(e);
          t >= 0 && La.splice(t, 5), La.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Ge.core.getCache(e), ft())
        }
      })) : La, is.revert = (e, t) => Ba(!e, t), is.create = (e, t) => new is(e, t), is.refresh = e => e ? Ia() : (Ue || is.register()) && Ga(!0), is.update = e => ++xe.cache && Xa(!0 === e ? 2 : 0), is.clearScrollMemory = qa, is.maxScroll = (e, t) => $t(e, t ? ze : Oe), is.getScrollFunc = (e, t) => Ae(Re(e), t ? ze : Oe), is.getById = e => Ma[e], is.getAll = () => Na.filter((e => "ScrollSmoother" !== e.vars.id)), is.isScrolling = () => !!Mt, is.snapDirectional = fa, is.addEventListener = (e, t) => {
        let a = za[e] || (za[e] = []);
        ~a.indexOf(t) || a.push(t)
      }, is.removeEventListener = (e, t) => {
        let a = za[e],
          s = a && a.indexOf(t);
        s >= 0 && a.splice(s, 1)
      }, is.batch = (e, t) => {
        let a, s = [],
          r = {},
          n = t.interval || .016,
          i = t.batchMax || 1e9,
          o = (e, t) => {
            let a = [],
              s = [],
              r = Ge.delayedCall(n, (() => {
                t(a, s), a = [], s = []
              })).pause();
            return e => {
              a.length || r.restart(!0), a.push(e.trigger), s.push(e), i <= a.length && r.progress(1)
            }
          };
        for (a in t) r[a] = "on" === a.substr(0, 2) && Ht(t[a]) && "onRefreshInit" !== a ? o(0, t[a]) : t[a];
        return Ht(i) && (i = i(), ba(is, "refresh", (() => i = t.batchMax()))), Je(e).forEach((e => {
          let t = {};
          for (a in r) t[a] = r[a];
          t.trigger = e, s.push(is.create(t))
        })), s
      };
      let os, cs = (e, t, a, s) => (t > s ? e(s) : t < 0 && e(0), a > s ? (s - t) / (a - t) : a < 0 ? t / (t - a) : 1),
        ls = (e, t) => {
          !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + ($e.isTouch ? " pinch-zoom" : "") : "none", e === Ve && ls(We, t)
        },
        ds = {
          auto: 1,
          scroll: 1
        },
        us = e => {
          let t, {
              event: a,
              target: s,
              axis: r
            } = e,
            n = (a.changedTouches ? a.changedTouches[0] : a).target,
            i = n._gsap || Ge.core.getCache(n),
            o = St();
          if (!i._isScrollT || o - i._isScrollT > 2e3) {
            for (; n && n !== We && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !ds[(t = ua(n)).overflowY] && !ds[t.overflowX]);) n = n.parentNode;
            i._isScroll = n && n !== s && !Bt(n) && (ds[(t = ua(n)).overflowY] || ds[t.overflowX]), i._isScrollT = o
          }(i._isScroll || "x" === r) && (a.stopPropagation(), a._gsapAllow = !0)
        },
        ms = (e, t, a, s) => $e.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: s = s && us,
          onPress: s,
          onDrag: s,
          onScroll: s,
          onEnable: () => a && ba(Xe, $e.eventTypes[0], gs, !1, !0),
          onDisable: () => ka(Xe, $e.eventTypes[0], gs, !0)
        }),
        _s = /(input|label|select|textarea)/i,
        gs = e => {
          let t = _s.test(e.target.tagName);
          (t || os) && (e._gsapAllow = !0, os = t)
        };
      is.sort = e => Na.sort(e || ((e, t) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0)))), is.observe = e => new $e(e), is.normalizeScroll = e => {
        if (void 0 === e) return ut;
        if (!0 === e && ut) return ut.enable();
        if (!1 === e) return ut && ut.kill();
        let t = e instanceof $e ? e : (e => {
          Vt(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let t, a, s, r, n, i, o, c, {
              normalizeScrollX: l,
              momentum: d,
              allowNestedScroll: u,
              onRelease: m
            } = e,
            _ = Re(e.target) || Ve,
            g = Ge.core.globals().ScrollSmoother,
            p = g && g.get(),
            f = pt && (e.content && Re(e.content) || p && !1 !== e.content && !p.smooth() && p.content()),
            h = Ae(_, Oe),
            b = Ae(_, ze),
            k = 1,
            v = ($e.isTouch && He.visualViewport ? He.visualViewport.scale * He.visualViewport.width : He.outerWidth) / He.innerWidth,
            x = 0,
            y = Ht(d) ? () => d(t) : () => d || 2.8,
            w = ms(_, e.type, !0, u),
            j = () => r = !1,
            C = Rt,
            S = Rt,
            N = () => {
              a = $t(_, Oe), S = Qe(pt ? 1 : 0, a), l && (C = Qe(0, $t(_, ze))), s = Fa
            },
            M = () => {
              f._gsap.y = At(parseFloat(f._gsap.y) + h.offset) + "px", f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(f._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0
            },
            T = () => {
              N(), n.isActive() && n.vars.scrollY > a && (h() > a ? n.progress(1) && h(a) : n.resetTo("scrollY", a))
            };
          return f && Ge.set(f, {
            y: "+=0"
          }), e.ignoreCheck = e => pt && "touchmove" === e.type && (() => {
            if (r) {
              requestAnimationFrame(j);
              let e = At(t.deltaY / 2),
                a = S(h.v - e);
              if (f && a !== h.v + h.offset) {
                h.offset = a - h.v;
                let e = At((parseFloat(f && f._gsap.y) || 0) - h.offset);
                f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", f._gsap.y = e + "px", h.cacheID = xe.cache, Xa()
              }
              return !0
            }
            h.offset && M(), r = !0
          })() || k > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            r = !1;
            let e = k;
            k = At((He.visualViewport && He.visualViewport.scale || 1) / v), n.pause(), e !== k && ls(_, k > 1.01 || !l && "x"), i = b(), o = h(), N(), s = Fa
          }, e.onRelease = e.onGestureStart = (e, t) => {
            if (h.offset && M(), t) {
              xe.cache++;
              let t, s, r = y();
              l && (t = b(), s = t + .05 * r * -e.velocityX / .227, r *= cs(b, t, s, $t(_, ze)), n.vars.scrollX = C(s)), t = h(), s = t + .05 * r * -e.velocityY / .227, r *= cs(h, t, s, $t(_, Oe)), n.vars.scrollY = S(s), n.invalidate().duration(r).play(.01), (pt && n.vars.scrollY >= a || t >= a - 1) && Ge.to({}, {
                onUpdate: T,
                duration: r
              })
            } else c.restart(!0);
            m && m(e)
          }, e.onWheel = () => {
            n._ts && n.pause(), St() - x > 1e3 && (s = 0, x = St())
          }, e.onChange = (e, t, a, r, n) => {
            if (Fa !== s && N(), t && l && b(C(r[2] === t ? i + (e.startX - e.x) : b() + t - r[1])), a) {
              h.offset && M();
              let t = n[2] === a,
                s = t ? o + e.startY - e.y : h() + a - n[1],
                r = S(s);
              t && s !== r && (o += r - s), h(r)
            }(a || t) && Xa()
          }, e.onEnable = () => {
            ls(_, !l && "x"), is.addEventListener("refresh", T), ba(He, "resize", T), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = b.smooth = !1), w.enable()
          }, e.onDisable = () => {
            ls(_, !0), ka(He, "resize", T), is.removeEventListener("refresh", T), w.kill()
          }, e.lockAxis = !1 !== e.lockAxis, t = new $e(e), t.iOS = pt, pt && !h() && h(1), pt && Ge.ticker.add(Rt), c = t._dc, n = Ge.to(t, {
            ease: "power4",
            paused: !0,
            scrollX: l ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: ss(h, h(), (() => n.pause()))
            },
            onUpdate: Xa,
            onComplete: c.vars.onComplete
          }), t
        })(e);
        return ut && ut.target === t.target && ut.kill(), Bt(t.target) && (ut = t), t
      }, is.core = {
        _getVelocityProp: Le,
        _inputObserver: ms,
        _scrollers: xe,
        _proxies: ye,
        bridge: {
          ss: () => {
            Mt || Aa("scrollStart"), Mt = St()
          },
          ref: () => tt
        }
      }, Dt() && Ge.registerPlugin(is);
      let ps, fs, hs, bs, ks, vs, xs, ys, ws, js, Cs, Ss, Ns, Ms, Ts, Es, Ps = () => "undefined" != typeof window,
        Is = () => ps || Ps() && (ps = window.gsap) && ps.registerPlugin && ps,
        zs = e => js.maxScroll(e || hs);
      class Os {
        constructor(e) {
          fs || Os.register(ps) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, Cs && Cs.kill(), Cs = this, Ts(this);
          let t, a, s, r, n, i, o, c, l, d, u, m, _, g, p, {
              smoothTouch: f,
              onUpdate: h,
              onStop: b,
              smooth: k,
              onFocusIn: v,
              normalizeScroll: x,
              wholePixels: y
            } = e,
            w = this,
            j = e.effectsPrefix || "",
            C = js.getScrollFunc(hs),
            S = 1 === js.isTouch ? !0 === f ? .8 : parseFloat(f) || 0 : 0 === k || !1 === k ? 0 : parseFloat(k) || .8,
            N = S && +e.speed || 1,
            M = 0,
            T = 0,
            E = 1,
            P = Ns(0),
            I = () => P.update(-M),
            z = {
              y: 0
            },
            O = () => t.style.overflow = "visible",
            R = e => {
              e.update();
              let t = e.getTween();
              t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), g = !1, e.animation.progress(e.progress, !0)
            },
            A = (e, a) => {
              (e !== M && !d || a) && (y && (e = Math.round(e)), S && (t.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", t._gsap.y = e + "px"), T = e - M, M = e, js.isUpdating || Os.isRefreshing || js.update())
            },
            L = function(e) {
              return arguments.length ? (e < 0 && (e = 0), z.y = -e, g = !0, d ? M = -e : A(-e), js.isRefreshing ? r.update() : C(e / N), this) : -M
            },
            D = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!js.isRefreshing) {
                let e = zs(a) * N;
                e < -M && L(e), Es.restart(!0)
              }
            })),
            B = e => {
              a.scrollTop = 0, e.target.contains && e.target.contains(a) || v && !1 === v(this, e) || (js.isInViewport(e.target) || e.target === p || this.scrollTo(e.target, !1, "center center"), p = e.target)
            },
            q = (e, t) => {
              if (e < t.start) return e;
              let a = isNaN(t.ratio) ? 1 : t.ratio,
                s = t.end - t.start,
                r = e - t.start,
                n = t.offset || 0,
                i = t.pins || [],
                o = i.offset || 0,
                c = t._startClamp && t.start <= 0 || t.pins && t.pins.offset ? 0 : t._endClamp && t.end === zs() ? 1 : .5;
              return i.forEach((t => {
                s -= t.distance, t.nativeStart <= e && (r -= t.distance)
              })), o && (r *= (s - o / a) / s), e + (r - n * c) / a - r
            },
            F = (e, t, a) => {
              a || (e.pins.length = e.pins.offset = 0);
              let s, r, n, i, o, c, l, d, u = e.pins,
                m = e.markers;
              for (l = 0; l < t.length; l++)
                if (d = t[l], e.trigger && d.trigger && e !== d && (d.trigger === e.trigger || d.pinnedContainer === e.trigger || e.trigger.contains(d.trigger)) && (o = d._startNative || d._startClamp || d.start, c = d._endNative || d._endClamp || d.end, n = q(o, e), i = d.pin && c > 0 ? n + (c - o) : q(c, e), d.setPositions(n, i, !0, (d._startClamp ? Math.max(0, n) : n) - o), d.markerStart && m.push(ps.quickSetter([d.markerStart, d.markerEnd], "y", "px")), d.pin && d.end > 0 && !a)) {
                  if (s = d.end - d.start, r = e._startClamp && d.start < 0, r) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void F(e, t);
                    s += d.start, u.offset = -d.start
                  }
                  u.push({
                    start: d.start,
                    nativeStart: o,
                    end: d.end,
                    distance: s,
                    trig: d
                  }), e.setPositions(e.start, e.end + (r ? -d.start : s), !0)
                }
            },
            $ = (e, t) => {
              n.forEach((a => F(a, e, t)))
            },
            G = () => {
              O(), requestAnimationFrame(O), n && (js.getAll().forEach((e => {
                e._startNative = e.start, e._endNative = e.end
              })), n.forEach((e => {
                let t = e._startClamp || e.start,
                  a = e.autoSpeed ? Math.min(zs(), e.end) : t + Math.abs((e.end - t) / e.ratio),
                  s = a - e.end;
                if (t -= s / 2, a -= s / 2, t > a) {
                  let e = t;
                  t = a, a = e
                }
                e._startClamp && t < 0 ? (a = e.ratio < 0 ? zs() : e.end / e.ratio, s = a - e.end, t = 0) : (e.ratio < 0 || e._endClamp && a >= zs()) && (a = zs(), t = e.ratio < 0 || e.ratio > 1 ? 0 : a - (a - e.start) / e.ratio, s = (a - t) * e.ratio - (e.end - e.start)), e.offset = s || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(t, a, !0)
              })), $(js.sort())), P.reset()
            },
            U = () => js.addEventListener("refresh", G),
            H = () => n && n.forEach((e => e.vars.onRefresh(e))),
            X = () => (n && n.forEach((e => e.vars.onRefreshInit(e))), H),
            V = (e, t, a, s) => () => {
              let r = "function" == typeof t ? t(a, s) : t;
              r || 0 === r || (r = s.getAttribute("data-" + j + e) || ("speed" === e ? 1 : 0)), s.setAttribute("data-" + j + e, r);
              let n = "clamp(" === (r + "").substr(0, 6);
              return {
                clamp: n,
                value: n ? r.substr(6, r.length - 7) : r
              }
            },
            W = (e, t, s, r, i) => {
              i = ("function" == typeof i ? i(r, e) : i) || 0;
              let o, c, l, d, u, m, _ = V("speed", t, r, e),
                g = V("lag", s, r, e),
                p = ps.getProperty(e, "y"),
                f = e._gsap,
                h = [],
                b = () => {
                  t = _(), s = parseFloat(g().value), o = parseFloat(t.value) || 1, l = "auto" === t.value, u = l || c && c._startClamp && c.start <= 0 || h.offset ? 0 : c && c._endClamp && c.end === zs() ? 1 : .5, d && d.kill(), d = s && ps.to(e, {
                    ease: Ss,
                    overwrite: !1,
                    y: "+=0",
                    duration: s
                  }), c && (c.ratio = o, c.autoSpeed = l)
                },
                k = () => {
                  f.y = p + "px", f.renderTransform(1), b()
                },
                v = [],
                x = 0,
                y = t => {
                  if (l) {
                    k();
                    let a = ((e, t) => {
                      let a, s, r = e.parentNode || ks,
                        n = e.getBoundingClientRect(),
                        i = r.getBoundingClientRect(),
                        o = i.top - n.top,
                        c = i.bottom - n.bottom,
                        l = (Math.abs(o) > Math.abs(c) ? o : c) / (1 - t),
                        d = -l * t;
                      return l > 0 && (a = i.height / (hs.innerHeight + i.height), s = .5 === a ? 2 * i.height : 2 * Math.min(i.height, Math.abs(-l * a / (2 * a - 1))) * (t || 1), d += t ? -s * t : -s / 2, l += s), {
                        change: l,
                        offset: d
                      }
                    })(e, ws(0, 1, -t.start / (t.end - t.start)));
                    x = a.change, m = a.offset
                  } else m = h.offset || 0, x = (t.end - t.start - m) * (1 - o);
                  h.forEach((e => x -= e.distance * (1 - o))), t.offset = x || .001, t.vars.onUpdate(t), d && d.progress(1)
                };
              return b(), (1 !== o || l || d) && (c = js.create({
                trigger: l ? e.parentNode : e,
                start: () => t.clamp ? "clamp(top bottom+=" + i + ")" : "top bottom+=" + i,
                end: () => t.value < 0 ? "max" : t.clamp ? "clamp(bottom top-=" + i + ")" : "bottom top-=" + i,
                scroller: a,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: k,
                onRefresh: y,
                onKill: e => {
                  let t = n.indexOf(e);
                  t >= 0 && n.splice(t, 1), k()
                },
                onUpdate: e => {
                  let t, a, s, r = p + x * (e.progress - u),
                    n = h.length,
                    i = 0;
                  if (e.offset) {
                    if (n) {
                      for (a = -M, s = e.end; n--;) {
                        if (t = h[n], t.trig.isActive || a >= t.start && a <= t.end) return void(d && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), d.resetTo("y", parseFloat(f.y), -T, !0), E && d.progress(1)));
                        a > t.end && (i += t.distance), s -= t.distance
                      }
                      r = p + i + x * ((ps.utils.clamp(e.start, e.end, a) - e.start - i) / (s - e.start) - u)
                    }
                    v.length && !l && v.forEach((e => e(r - i))), o = r + m, r = Math.round(1e5 * o) / 1e5 || 0, d ? (d.resetTo("y", r, -T, !0), E && d.progress(1)) : (f.y = r + "px", f.renderTransform(1))
                  }
                  var o
                }
              }), y(c), ps.core.getCache(c.trigger).stRevert = X, c.startY = p, c.pins = h, c.markers = v, c.ratio = o, c.autoSpeed = l, e.style.willChange = "transform"), c
            };

          function Y() {
            return s = t.clientHeight, t.style.overflow = "visible", vs.style.height = hs.innerHeight + (s - hs.innerHeight) / N + "px", s - hs.innerHeight
          }
          U(), js.addEventListener("killAll", U), ps.delayedCall(.5, (() => E = 0)), this.scrollTop = L, this.scrollTo = (e, t, a) => {
            let s = ps.utils.clamp(0, zs(), isNaN(e) ? this.offset(e, a) : +e);
            t ? d ? ps.to(this, {
              duration: S,
              scrollTop: s,
              overwrite: "auto",
              ease: Ss
            }) : C(s) : L(s)
          }, this.offset = (e, t) => {
            let a, s = (e = ys(e)[0]).style.cssText,
              r = js.create({
                trigger: e,
                start: t || "top top"
              });
            return n && (E ? js.refresh() : $([r], !0)), a = r.start / N, r.kill(!1), e.style.cssText = s, ps.core.getCache(e).uncache = 1, a
          }, this.content = function(e) {
            if (arguments.length) {
              let a = ys(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || vs.children[0];
              return a !== t && (t = a, l = t.getAttribute("style") || "", D && D.observe(t), ps.set(t, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), S || ps.set(t, {
                clearProps: "transform"
              })), this
            }
            return t
          }, this.wrapper = function(e) {
            return arguments.length ? (a = ys(e || "#smooth-wrapper")[0] || (e => {
              let t = bs.querySelector(".ScrollSmoother-wrapper");
              return t || (t = bs.createElement("div"), t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t
            })(t), c = a.getAttribute("style") || "", Y(), ps.set(a, S ? {
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
            if (n || (n = []), !e) return n.slice(0);
            (e = ys(e)).forEach((e => {
              let t = n.length;
              for (; t--;) n[t].trigger === e && n[t].kill()
            })), t = t || {};
            let a, s, {
                speed: r,
                lag: i,
                effectsPadding: o
              } = t,
              c = [];
            for (a = 0; a < e.length; a++) s = W(e[a], r, i, a, o), s && c.push(s);
            return n.push(...c), c
          }, this.sections = (e, t) => {
            if (i || (i = []), !e) return i.slice(0);
            let a = ys(e).map((e => js.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: t => {
                e.style.opacity = t.isActive ? "1" : "0", e.style.pointerEvents = t.isActive ? "all" : "none"
              }
            })));
            return t && t.add ? i.push(...a) : i = a.slice(0), a
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => A(e || 0 === e ? e : M), this.getVelocity = () => P.getVelocity(-M), js.scrollerProxy(a, {
            scrollTop: L,
            scrollHeight: () => Y() && vs.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!S,
            content: t,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: hs.innerWidth,
              height: hs.innerHeight
            })
          }), js.defaults({
            scroller: a
          });
          let K = js.getAll().filter((e => e.scroller === hs || e.scroller === a));
          K.forEach((e => e.revert(!0, !0))), r = js.create({
            animation: ps.fromTo(z, {
              y: 0
            }, {
              y: () => -Y(),
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function() {
                if (this._dur) {
                  let e = g;
                  e && (R(r), z.y = M), A(z.y, e), I(), h && !d && h(w)
                }
              }
            }),
            onRefreshInit: e => {
              if (Os.isRefreshing) return;
              if (Os.isRefreshing = !0, n) {
                let e = js.getAll().filter((e => !!e.pin));
                n.forEach((t => {
                  t.vars.pinnedContainer || e.forEach((e => {
                    if (e.pin.contains(t.trigger)) {
                      let a = t.vars;
                      a.pinnedContainer = e.pin, t.vars = null, t.init(a, t.animation)
                    }
                  }))
                }))
              }
              let t = e.getTween();
              _ = t && t._end > t._dp._time, m = M, z.y = 0, S && (1 === js.isTouch && (a.style.position = "absolute"), a.scrollTop = 0, 1 === js.isTouch && (a.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, Y() / N), _ || R(e), z.y = -C() * N, A(z.y), E || e.animation.progress(ps.utils.clamp(0, 1, m / N / -e.end)), _ && (e.progress -= .001, e.update()), Os.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: hs,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => Y() / N,
            onScrubComplete: () => {
              P.reset(), b && b(this)
            },
            scrub: S || !0
          }), this.smooth = function(t) {
            return arguments.length && (S = t || 0, N = S && +e.speed || 1, r.scrubDuration(t)), r.getTween() ? r.getTween().duration() : 0
          }, r.getTween() && (r.getTween().vars.ease = e.ease || Ss), this.scrollTrigger = r, e.effects && this.effects(!0 === e.effects ? "[data-" + j + "speed], [data-" + j + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), K.forEach((e => {
            e.vars.scroller = a, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, t) {
            return arguments.length ? (!!d !== e && (e ? (r.getTween() && r.getTween().pause(), C(-M / N), P.reset(), u = js.normalizeScroll(), u && u.disable(), d = js.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => L(-M)
            }), d.nested = Ms(ks, "wheel,touch,scroll", !0, !1 !== t)) : (d.nested.kill(), d.kill(), d = 0, u && u.enable(), r.progress = (-M / N - r.start) / (r.end - r.start), R(r))), this) : !!d
          }, this.kill = this.revert = () => {
            this.paused(!1), R(r), r.kill();
            let e = (n || []).concat(i || []),
              s = e.length;
            for (; s--;) e[s].kill();
            js.scrollerProxy(a), js.removeEventListener("killAll", U), js.removeEventListener("refresh", G), a.style.cssText = c, t.style.cssText = l;
            let d = js.defaults({});
            d && d.scroller === a && js.defaults({
              scroller: hs
            }), this.normalizer && js.normalizeScroll(!1), clearInterval(o), Cs = null, D && D.disconnect(), vs.style.removeProperty("height"), hs.removeEventListener("focusin", B)
          }, this.refresh = (e, t) => r.refresh(e, t), x && (this.normalizer = js.normalizeScroll(!0 === x ? {
            debounce: !0,
            content: !S && t
          } : x)), js.config(e), "overscrollBehavior" in hs.getComputedStyle(vs) && ps.set([vs, ks], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in hs.getComputedStyle(vs) && ps.set([vs, ks], {
            scrollBehavior: "auto"
          }), hs.addEventListener("focusin", B), o = setInterval(I, 250), "loading" === bs.readyState || requestAnimationFrame((() => js.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return fs || (ps = e || Is(), Ps() && window.document && (hs = window, bs = document, ks = bs.documentElement, vs = bs.body), ps && (ys = ps.utils.toArray, ws = ps.utils.clamp, Ss = ps.parseEase("expo"), Ts = ps.core.context || function() {}, js = ps.core.globals().ScrollTrigger, ps.core.globals("ScrollSmoother", Os), vs && js && (Es = ps.delayedCall(.2, (() => js.isRefreshing || Cs && Cs.refresh())).pause(), xs = [hs, bs, ks, vs], Ns = js.core._getVelocityProp, Ms = js.core._inputObserver, Os.refresh = js.refresh, fs = 1))), fs
        }
      }
      Os.version = "3.12.2", Os.create = e => Cs && e && Cs.content() === ys(e.content)[0] ? Cs : new Os(e), Os.get = () => Cs, Is() && ps.registerPlugin(Os);
      let Rs, As, Ls, Ds, Bs, qs, Fs, $s, Gs = () => "undefined" != typeof window,
        Us = () => Rs || Gs() && (Rs = window.gsap) && Rs.registerPlugin && Rs,
        Hs = e => "string" == typeof e,
        Xs = e => "function" == typeof e,
        Vs = (e, t) => {
          let a = "x" === t ? "Width" : "Height",
            s = "scroll" + a,
            r = "client" + a;
          return e === Ls || e === Ds || e === Bs ? Math.max(Ds[s], Bs[s]) - (Ls["inner" + a] || Ds[r] || Bs[r]) : e[s] - e["offset" + a]
        },
        Ws = (e, t) => {
          let a = "scroll" + ("x" === t ? "Left" : "Top");
          return e === Ls && (null != e.pageXOffset ? a = "page" + t.toUpperCase() + "Offset" : e = null != Ds[a] ? Ds : Bs), () => e[a]
        },
        Ys = (e, t) => {
          if (!(e = qs(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
          };
          let a = e.getBoundingClientRect(),
            s = !t || t === Ls || t === Bs,
            r = s ? {
              top: Ds.clientTop - (Ls.pageYOffset || Ds.scrollTop || Bs.scrollTop || 0),
              left: Ds.clientLeft - (Ls.pageXOffset || Ds.scrollLeft || Bs.scrollLeft || 0)
            } : t.getBoundingClientRect(),
            n = {
              x: a.left - r.left,
              y: a.top - r.top
            };
          return !s && t && (n.x += Ws(t, "x")(), n.y += Ws(t, "y")()), n
        },
        Ks = (e, t, a, s, r) => isNaN(e) || "object" == typeof e ? Hs(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + s - r : "max" === e ? Vs(t, a) - r : Math.min(Vs(t, a), Ys(e, t)[a] - r) : parseFloat(e) - r,
        Js = () => {
          Rs = Us(), Gs() && Rs && "undefined" != typeof document && document.body && (Ls = window, Bs = document.body, Ds = document.documentElement, qs = Rs.utils.toArray, Rs.config({
            autoKillThreshold: 7
          }), Fs = Rs.config(), As = 1)
        };
      const Qs = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register(e) {
          Rs = e, Js()
        },
        init(e, t, a, s, r) {
          As || Js();
          let n = this,
            i = Rs.getProperty(e, "scrollSnapType");
          n.isWin = e === Ls, n.target = e, n.tween = a, t = ((e, t, a, s) => {
            if (Xs(e) && (e = e(t, a, s)), "object" != typeof e) return Hs(e) && "max" !== e && "=" !== e.charAt(1) ? {
              x: e,
              y: e
            } : {
              y: e
            };
            if (e.nodeType) return {
              y: e,
              x: e
            }; {
              let r, n = {};
              for (r in e) n[r] = "onAutoKill" !== r && Xs(e[r]) ? e[r](t, a, s) : e[r];
              return n
            }
          })(t, s, e, r), n.vars = t, n.autoKill = !!t.autoKill, n.getX = Ws(e, "x"), n.getY = Ws(e, "y"), n.x = n.xPrev = n.getX(), n.y = n.yPrev = n.getY(), $s || ($s = Rs.core.globals().ScrollTrigger), "smooth" === Rs.getProperty(e, "scrollBehavior") && Rs.set(e, {
            scrollBehavior: "auto"
          }), i && "none" !== i && (n.snap = 1, n.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != t.x ? (n.add(n, "x", n.x, Ks(t.x, e, "x", n.x, t.offsetX || 0), s, r), n._props.push("scrollTo_x")) : n.skipX = 1, null != t.y ? (n.add(n, "y", n.y, Ks(t.y, e, "y", n.y, t.offsetY || 0), s, r), n._props.push("scrollTo_y")) : n.skipY = 1
        },
        render(e, t) {
          let a, s, r, n, i, o = t._pt,
            {
              target: c,
              tween: l,
              autoKill: d,
              xPrev: u,
              yPrev: m,
              isWin: _,
              snap: g,
              snapInline: p
            } = t;
          for (; o;) o.r(e, o.d), o = o._next;
          a = _ || !t.skipX ? t.getX() : u, s = _ || !t.skipY ? t.getY() : m, r = s - m, n = a - u, i = Fs.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), d && (!t.skipX && (n > i || n < -i) && a < Vs(c, "x") && (t.skipX = 1), !t.skipY && (r > i || r < -i) && s < Vs(c, "y") && (t.skipY = 1), t.skipX && t.skipY && (l.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(l, t.vars.onAutoKillParams || []))), _ ? Ls.scrollTo(t.skipX ? a : t.x, t.skipY ? s : t.y) : (t.skipY || (c.scrollTop = t.y), t.skipX || (c.scrollLeft = t.x)), !g || 1 !== e && 0 !== e || (s = c.scrollTop, a = c.scrollLeft, p ? c.style.scrollSnapType = p : c.style.removeProperty("scroll-snap-type"), c.scrollTop = s + 1, c.scrollLeft = a + 1, c.scrollTop = s, c.scrollLeft = a), t.xPrev = t.x, t.yPrev = t.y, $s && $s.update()
        },
        kill(e) {
          let t = "scrollTo" === e;
          (t || "scrollTo_x" === e) && (this.skipX = 1), (t || "scrollTo_y" === e) && (this.skipY = 1)
        }
      };
      Qs.max = Vs, Qs.getOffset = Ys, Qs.buildGetter = Ws, Us() && Rs.registerPlugin(Qs);
      const Zs = e => {
          const t = J(),
            a = (e, s) => s?.requiresAuth && !t.nickname ? e : [...e, {
              ...s,
              ...s.children ? {
                children: s.children.reduce(a, [])
              } : []
            }];
          return (0, n.useMemo)((() => e.reduce(a, [])), [e, t.nickname])
        },
        er = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"Okay","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_error_generic_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscríbete","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Comprueba tu correo","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del jugador","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmer votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’abonner","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","pl_card_badge_content_complete":"Completa","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認する","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter na Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать мою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"訂閱","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        tr = (e, t) => {
          switch (e) {
            case "pc":
              return "small" === t ? {
                src: a(9544),
                alt: "PC"
              } : {
                src: a(5710),
                alt: "PC"
              };
            case "ps4":
              return "small" === t ? {
                src: a(5636),
                alt: "PS4"
              } : {
                src: a(8318),
                alt: "PS4"
              };
            case "ps5":
              return "small" === t ? {
                src: a(357),
                alt: "PS5"
              } : {
                src: a(2047),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === t ? {
                src: a(7976),
                alt: "Xbox One"
              } : {
                src: a(350),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === t ? {
                src: a(4923),
                alt: "Xbox Series X|S"
              } : {
                src: a(9825),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        ar = e => a(e < 100 ? 6399 : e > 99 && e < 500 ? 2627 : e > 499 && e < 750 ? 3864 : 6425),
        sr = (0, r.defineMessages)({
          sc_link_activity_feed: {
            id: "sc_link_activity_feed",
            defaultMessage: "Activity Feed"
          },
          sc_link_account: {
            id: "sc_link_account",
            defaultMessage: "Account"
          },
          sc_link_view_my_profile: {
            id: "sc_link_view_my_profile",
            defaultMessage: "View My Profile"
          },
          sc_link_messages: {
            id: "sc_link_messages",
            defaultMessage: "Messages"
          },
          sc_link_game_activation: {
            id: "sc_link_game_activation",
            defaultMessage: "Game Activation"
          },
          sc_link_notifications: {
            id: "sc_link_notifications",
            defaultMessage: "Notifications"
          },
          sc_link_crews: {
            id: "sc_link_crews",
            defaultMessage: "Crews"
          },
          sc_link_friends: {
            id: "sc_link_friends",
            defaultMessage: "Friends"
          },
          sc_link_my_friends: {
            id: "sc_link_my_friends",
            defaultMessage: "My Friends"
          },
          sc_link_import_friends: {
            id: "sc_link_import_friends",
            defaultMessage: "Import Friends"
          },
          sc_link_find_friends: {
            id: "sc_link_find_friends",
            defaultMessage: "Find Friends"
          },
          sc_link_settings: {
            id: "sc_link_settings",
            defaultMessage: "Settings"
          },
          sc_link_help: {
            id: "sc_link_help",
            defaultMessage: "Help"
          },
          sc_link_support: {
            id: "sc_link_support",
            defaultMessage: "Support"
          },
          sc_link_legal: {
            id: "sc_link_legal",
            defaultMessage: "Legal"
          },
          sc_link_privacy_policy: {
            id: "sc_link_privacy_policy",
            defaultMessage: "Privacy Policy"
          },
          sc_link_cookies_policy: {
            id: "sc_link_cookies_policy",
            defaultMessage: "Cookies Policy"
          },
          sc_link_cookies_settings: {
            id: "sc_link_cookies_settings",
            defaultMessage: "Cookies Settings"
          },
          sc_link_do_not_sell_my_information: {
            id: "sc_link_do_not_sell_my_information",
            defaultMessage: "Do Not Sell My Information"
          },
          sc_link_log_out: {
            id: "sc_link_log_out",
            defaultMessage: "Log Out"
          },
          sc_link_sign_in: {
            id: "sc_link_sign_in",
            defaultMessage: "Sign In"
          },
          sc_link_join_social_club: {
            id: "sc_link_join_social_club",
            defaultMessage: "Sign Up"
          },
          profile_selector_switch_character: {
            id: "profile_selector_switch_character",
            defaultMessage: "Switch Character"
          },
          profile_selector_profile_card: {
            id: "profile_selector_profile_card",
            defaultMessage: "Profile Card"
          },
          profile_selector_mugshot: {
            id: "profile_selector_mugshot",
            defaultMessage: "{userName} mugshot"
          },
          profile_selector_rp_icon: {
            id: "profile_selector_rp_icon",
            defaultMessage: "RP Category"
          },
          sc_menu_drag_handle: {
            id: "sc_menu_drag_handle",
            defaultMessage: "Drag Menu Handle"
          },
          sc_menu_open: {
            id: "sc_menu_open",
            defaultMessage: "Open player menu"
          },
          sc_menu_close: {
            id: "sc_menu_close",
            defaultMessage: "Close player menu"
          },
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          },
          nofications_new: {
            id: "nofications_new",
            defaultMessage: "New notifications"
          }
        }),
        rr = {
          pillBtn: "rockstargames-modules-core-headere4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-modules-core-headereb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-modules-core-headerdf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-modules-core-headerc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-modules-core-headere79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-modules-core-headerc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-modules-core-headereabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-modules-core-headerb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-modules-core-headerf1e0bcba6214698c490b8201bbd850b7"
        };
      (0, r.withIntl)((e => {
        let {
          characterData: t
        } = e;
        const s = (0, r.useIntl)(),
          {
            platform: i,
            platformUsername: o,
            mugshotUrl: c,
            stats: l
          } = t,
          [d, u] = (0, n.useState)(c),
          m = tr(i, "large");
        return (0, z.jsxs)("div", {
          className: rr.scCharacterCard,
          children: [(0, z.jsx)("div", {
            className: rr.scAvatar,
            "data-size": "small",
            children: (0, z.jsx)("img", {
              src: d,
              alt: s.formatMessage(sr.profile_selector_mugshot, {
                userName: o
              }),
              onError: () => {
                u(a(8989))
              }
            })
          }), (0, z.jsx)("div", {
            className: rr.scCharacterStats,
            children: (0, z.jsxs)("div", {
              className: rr.scCharNames,
              children: [(0, z.jsx)("img", {
                src: m.src,
                alt: m.alt
              }), (0, z.jsx)("div", {
                className: rr.scUserName,
                "data-size": "small",
                children: o
              }), (0, z.jsx)("div", {
                className: rr.scRp,
                children: (0, z.jsxs)("div", {
                  className: rr.scRpLevel,
                  children: [(0, z.jsx)("img", {
                    className: rr.scRpIcon,
                    src: ar(l.overview.rank.value),
                    alt: s.formatMessage(sr.profile_selector_rp_icon)
                  }), (0, z.jsx)("span", {
                    children: t.stats.overview.rank.value
                  })]
                })
              })]
            })
          })]
        })
      }), er);
      var nr = a(7460);
      const ir = (0, i.hp)("@rockstargames/components/profile-switcher"),
        or = ir("languageSelectorOpenedReactive", !1),
        cr = e => or(e),
        lr = ir("activeSubNavIdReactive", -1),
        dr = e => lr(e),
        ur = ir("subNavExtraHeightReactive", -1),
        mr = e => ur(e),
        _r = ir("scNavOpenedReactive", !0),
        gr = e => _r(e),
        pr = ir("charListHiddenReactive", !0),
        fr = e => pr(e),
        hr = () => {
          const e = (0, i.qs)(or),
            t = (0, i.qs)(lr),
            a = (0, i.qs)(ur),
            s = (0, i.qs)(_r),
            r = (0, i.qs)(pr);
          return (0, n.useEffect)((() => {
            r || (e && cr(!1), s && (gr(!1), dr(-1)))
          }), [r]), (0, n.useEffect)((() => {
            !e && r && (s || gr(!0))
          }), [e, r]), (0, n.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: cr,
            activeSubNavId: t,
            setActiveSubNavId: dr,
            subNavExtraHeight: a,
            setSubNavExtraHeight: mr,
            scNavOpened: s,
            setScNavOpened: gr,
            charListHidden: r,
            setCharListHidden: fr
          })), [e, t, a, s, r])
        };
      var br = a(4963),
        kr = a.n(br);
      const vr = (0, r.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        xr = (0, r.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        yr = "rockstargames-modules-core-headerff481c537a56a6fcdb1be85dfbc8944e",
        wr = (0, r.withIntl)((e => {
          let {
            children: t,
            to: a = "#",
            alt: s = "",
            autoBlank: i = !1,
            onClick: o = (() => {}),
            focused: c = !1,
            ...l
          } = e;
          const d = (0, n.useRef)(null),
            u = (0, r.useIntl)(),
            m = !/^(https?|mailto):/i.test(a),
            _ = /^#/.test(a),
            g = l?.target ?? (i ? "_blank" : "_self");
          let {
            ...p
          } = l, f = "";
          if ("aria-label" in p && p["aria-label"] && (f = "_blank" === g ? `${p["aria-label"]} ${u.formatMessage(xr.aria_label_open_new_window)}` : p["aria-label"]), (0, n.useEffect)((() => {
              c && d?.current && d.current.focus()
            }), [d?.current, c]), _) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${a.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), o && o(e)
            };
            return (0, z.jsxs)("a", {
              title: s,
              href: a,
              onClick: e,
              ...p,
              "aria-label": f,
              ref: d,
              children: [t, "_blank" === g && !f && (0, z.jsx)("span", {
                className: yr,
                children: u.formatMessage(xr.aria_label_open_new_window)
              })]
            })
          }
          if (m) return (0, z.jsxs)(q.NavLink, {
            title: s,
            to: a,
            onClick: o,
            ...p,
            "aria-label": f,
            ref: d,
            children: [t, "_blank" === g && !f && (0, z.jsx)("span", {
              className: yr,
              children: u.formatMessage(xr.aria_label_open_new_window)
            })]
          });
          const h = Object.keys(p).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, t) => ({
            ...e,
            [t]: l[t]
          })), {});
          return "function" == typeof h?.className && delete h.className, (0, z.jsxs)("a", {
            href: a,
            title: s,
            onClick: o,
            target: g,
            ...h,
            "aria-label": f,
            ref: d,
            children: [t, "_blank" === g && !f && (0, z.jsx)("span", {
              className: yr,
              children: u.formatMessage(xr.aria_label_open_new_window)
            })]
          })
        }), er),
        jr = {
          pillBtn: "rockstargames-modules-core-headercb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-modules-core-headerc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-modules-core-headerfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-modules-core-headerb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-modules-core-headeredc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-modules-core-headerc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-modules-core-headerc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-modules-core-headere3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-modules-core-headerc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-modules-core-headerbcccd1077d13d7fe1585655e5c5f8363"
        },
        Cr = (0, r.withIntl)((e => {
          let {
            theme: t,
            languageSelectorOpened: a,
            setLanguageSelectorOpened: s,
            location: i,
            parent: o = "footer"
          } = e;
          const {
            track: c
          } = H(), l = (0, r.useIntl)(), [d, u] = (0, r.getLocale)(), [m, _] = (0, n.useState)(!1), g = (0, n.useMemo)((() => (0, V.A)()), []), p = (0, n.useCallback)((e => {
            let t = i.pathname.replace(/^\/|\/$/g, "");
            const a = t.split("/");
            return r.locales.map((e => e.subdomaincom)).includes(a[0]) && (t = a.slice(1).join("/")), g.currentSite?.site === V.C.www ? "en" === e ? `${window.location.origin}/${t}${i.search}` : `${window.location.origin}/${e}/${t}${i.search}` : `${window.location.origin}/${t}${i.search}`
          }), [i]), f = (0, n.useRef)(null), [h, b] = (0, n.useState)(0), k = matchMedia("(hover: none) and (pointer: coarse)").matches, v = e => {
            if (s && s(!1), d.subdomaincom === e || "none" === e) return void(s && s(!1));
            const t = r.locales.find((t => t.subdomaincom === e));
            if (t) {
              const a = p(e);
              c({
                event: "cta_other",
                link_url: a,
                text: e,
                element_placement: o
              }), u(t.iso), window.location.href = a
            }
          };
          return (0, n.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === m && _(!1)
          }), [a]), (0, n.useEffect)((() => {
            f.current && b(f.current.scrollHeight)
          }), [f]), (0, z.jsxs)("div", {
            className: [jr.languageSelector, m ? jr.open : ""].join(" "),
            "data-theme": t,
            children: [k && "sc-menu" === t && (0, z.jsx)("div", {
              className: jr.selectBoxWrapper,
              children: (0, z.jsxs)("select", {
                className: jr.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const t = e.currentTarget.value;
                  v(t)
                },
                "aria-label": l.formatMessage(vr.language_selector_default),
                children: [(0, z.jsx)("option", {
                  className: jr.selectBoxOption,
                  value: "none",
                  children: (0, z.jsx)(r.FormattedMessage, {
                    ...vr.language_selector_default
                  })
                }), r.locales.map((e => {
                  let {
                    label: t,
                    subdomaincom: a
                  } = e;
                  return (0, z.jsx)("option", {
                    className: jr.selectBoxOption,
                    value: a,
                    children: t
                  }, `mobile-${a}`)
                }))]
              })
            }), (!k || "sc-menu" !== t) && (0, z.jsxs)(z.Fragment, {
              children: [(0, z.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!m), _(!m)
                },
                type: "button",
                "aria-label": l.formatMessage(vr.language_selector_default),
                children: [(0, z.jsx)("i", {}), (0, z.jsx)("span", {
                  children: (0, z.jsx)(r.FormattedMessage, {
                    ...vr.language_selector_default
                  })
                })]
              }), (0, z.jsx)("div", {
                className: jr.linkWrapper,
                ref: f,
                style: {
                  "--ls-linkWrapper-opened-height": `${h}px`
                },
                children: (0, z.jsx)("div", {
                  className: jr.links,
                  children: r.locales.map((e => {
                    let {
                      subdomaincom: t,
                      label: a
                    } = e;
                    return (0, z.jsx)(wr, {
                      to: p(t),
                      onClick: (s = t, () => {
                        v(s)
                      }),
                      tabIndex: m ? 0 : -1,
                      children: a
                    }, `desktop-${t}`);
                    var s
                  }))
                })
              })]
            })]
          })
        }), er),
        Sr = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Nr = e => ({
          text: e.formatMessage(sr.sc_link_help),
          target: "_self",
          ga: {
            ...Sr,
            text: sr.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(sr.sc_link_support),
            location: {
              domain: V.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Sr,
              text: sr.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(sr.sc_link_legal),
            location: {
              domain: V.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Sr,
              text: sr.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(sr.sc_link_privacy_policy),
            location: {
              domain: V.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Sr,
              text: sr.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(sr.sc_link_cookies_policy),
            location: {
              domain: V.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Sr,
              text: sr.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(sr.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Sr,
              text: sr.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(sr.sc_link_do_not_sell_my_information),
            location: {
              domain: V.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Sr,
              text: sr.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Mr = e => {
          let {
            to: t,
            target: a,
            className: s,
            onNavigate: r,
            onClick: n,
            reloadDocument: i,
            children: o,
            ...c
          } = e;
          const l = t?.startsWith("http");
          return (0, z.jsx)("a", {
            href: t,
            className: s,
            onClick: e => {
              n?.(e), l || i || (r ? (e.preventDefault(), r(t)) : (e.preventDefault(), window.history.pushState({}, "", t)))
            },
            target: a,
            ...c,
            children: o
          })
        },
        Tr = e => {
          let {
            text: t,
            target: a,
            href: s,
            location: n,
            ga: i,
            dataTestId: o,
            isSubLink: c,
            hasNotifications: l = !1,
            onClickCallback: d = (() => {}),
            tabIndex: u,
            reloadDocument: m = !1,
            onNavigate: _
          } = e;
          const {
            track: g
          } = H(), p = (0, V.A)(), f = (0, r.useIntl)();
          let h = s;
          n && (h = n.domain === p.currentSite?.site ? n.path : `https://${p.sites[n.domain]}.rockstargames.com${n.path}`);
          const b = {
            ...i,
            link_url: h
          };
          return (0, z.jsxs)(Mr, {
            className: c ? "rockstargames-modules-core-headerfdaa918acc06706cbe191dedd40974af" : "rockstargames-modules-core-headercbc80932118c48d8ec14448d8913d068",
            "data-testid": o || "menuLink",
            title: t,
            to: h,
            target: a,
            rel: "noreferrer",
            reloadDocument: m,
            tabIndex: u,
            onClick: e => {
              g(b), d(e)
            },
            onNavigate: _,
            children: [t, l && (0, z.jsx)("div", {
              className: "rockstargames-modules-core-headera2d268c9fb03a7271b47de447d663da9",
              children: (0, z.jsx)("span", {
                className: "rockstargames-modules-core-headercf5a6b05c52c6c4faf3236055d4670c3",
                children: f.formatMessage(sr.nofications_new)
              })
            })]
          })
        },
        Er = e => {
          let {
            id: t,
            text: a,
            target: s,
            href: r,
            location: i,
            ga: c,
            hasNotifications: l = !1,
            dataTestId: d,
            children: u = [],
            activeSubNavId: m,
            setActiveSubNavId: _,
            setSubNavExtraHeight: g,
            reloadDocument: p = !1,
            onClickCallback: f = (() => {}),
            onNavigate: h
          } = e;
          const {
            windowWidth: b,
            windowHeight: k
          } = (0, o.G4)(), {
            track: v
          } = H(), {
            navOpen: x
          } = C(), y = (0, n.useRef)(null), [w, j] = (0, n.useState)(0), [S, N] = (0, n.useState)(0), [M, T] = (0, n.useState)(!0);
          return (0, n.useEffect)((() => {
            m !== t && !1 === M && T(!0), m === t && T(!1)
          }), [m]), (0, n.useEffect)((() => {
            if (!y.current) return;
            j(y?.current?.scrollHeight);
            const e = window.getComputedStyle(y.current);
            if (e) {
              let t = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(t) && (t = 0), N(t)
            }
          }), [y, b, k]), u.length > 0 ? (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsxs)("button", {
              className: "rockstargames-modules-core-headeraf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": d || "menuButton",
              title: a,
              tabIndex: x ? 0 : -1,
              "data-children-hidden": M,
              onClick: e => {
                e.stopPropagation(), v(c), m === t ? (_(-1), g(0)) : (_(t), g(w + S + S))
              },
              children: [(0, z.jsx)("span", {
                className: "rockstargames-modules-core-headerfd722aa4f6d05656ee6e37f952bd13d0",
                children: a
              }), (0, z.jsx)("span", {
                className: "rockstargames-modules-core-headerbe674f27adc299eab348b49f71429b71"
              })]
            }, a), (0, z.jsx)("nav", {
              className: "rockstargames-modules-core-headerff1911053a3515534dd825554a85909e",
              ref: y,
              "aria-hidden": M,
              style: {
                height: M ? 0 : `${w}px`
              },
              children: u.map((e => (0, n.createElement)(Tr, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: M || !x ? -1 : 0,
                onNavigate: h
              })))
            })]
          }) : (0, z.jsx)(Tr, {
            text: a,
            target: s,
            href: r,
            location: i,
            ga: c,
            hasNotifications: l,
            dataTestId: d,
            isSubLink: !1,
            onClickCallback: f,
            tabIndex: x ? 0 : -1,
            reloadDocument: p,
            onNavigate: h
          })
        },
        Pr = e => {
          let {
            sc: t,
            location: a,
            onNavigate: s
          } = e;
          const {
            windowWidth: i,
            windowHeight: c
          } = (0, o.G4)(), l = (0, r.useIntl)(), {
            languageSelectorOpened: d,
            setLanguageSelectorOpened: u,
            activeSubNavId: m,
            setActiveSubNavId: _,
            subNavExtraHeight: g,
            setSubNavExtraHeight: p
          } = hr(), {
            setSelectedCharacterTuple: f,
            navOpen: h
          } = C(), b = (0, o.Ym)(), k = (0, o.tI)(b), [v, x] = (0, n.useState)(""), y = `${t.login}?returnUrl=${v}&lang=${k}`, w = `${t.signup}&returnUrl=${v}&lang=${k}`, j = (0, n.useMemo)((() => (0, V.A)()), []), S = (0, n.useMemo)((() => {
            const e = ((e, t, a) => [{
              text: e.formatMessage(sr.sc_link_sign_in),
              href: t,
              ga: {
                event: "cta_login",
                text: sr.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(sr.sc_link_join_social_club),
              href: a,
              ga: {
                event: "cta_signup",
                text: sr.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Nr(e)])(l, y, w);
            return e
          }), [l, y, w, j]), [N, M] = (0, n.useState)(0), T = (0, n.createRef)(), E = () => {
            if (T.current) {
              const {
                current: e
              } = T, t = e?.scrollHeight, a = window.getComputedStyle(e);
              if (a) {
                let e = 16 * parseInt(a.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), M(t + e)
              } else M(t)
            }
          };
          return (0, n.useEffect)((() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            x(e)
          }), [JSON.stringify(a)]), (0, n.useEffect)((() => {
            f(!1)
          }), []), (0, n.useEffect)((() => {
            E(), kr()((() => {
              setTimeout(E, 0)
            }), 300)
          }), [i, c]), (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)("nav", {
              className: "rockstargames-modules-core-headerb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, z.jsx)("div", {
                className: "rockstargames-modules-core-headerc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: T,
                style: {
                  "--scNavWrap-max-height": `${g+N}px`
                },
                children: S.map((e => (0, n.createElement)(Er, {
                  ...e,
                  activeSubNavId: m,
                  setActiveSubNavId: _,
                  setSubNavExtraHeight: p,
                  onNavigate: s,
                  key: e.text
                })))
              })
            }), (0, z.jsx)("div", {
              className: "rockstargames-modules-core-headera6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: h ? null : "hidden"
              },
              children: (0, z.jsx)(Cr, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: d,
                setLanguageSelectorOpened: e => {
                  _(-1), u(e)
                },
                defaultMessage: "Select a Language",
                location: a
              })
            })]
          })
        },
        Ir = {
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "Xbox One",
          xboxsx: "Xbox Series X|S"
        },
        zr = "CharacterButton:characterName",
        Or = "CharacterButton:platform",
        Rr = "CharacterButton:avatar",
        Ar = "CharacterButton:rankValue",
        Lr = e => {
          let {
            characterData: t,
            setMobileCardWidth: s,
            tabIndex: i
          } = e;
          const o = (0, r.useIntl)(),
            {
              currentCharId: c,
              setCurrentCharId: l
            } = C(),
            {
              track: d
            } = H(),
            u = (0, n.createRef)(),
            {
              platform: m,
              platformUsername: _,
              mugshotUrl: g,
              stats: p
            } = t,
            [f, h] = (0, n.useState)(g),
            [b] = (0, n.useState)(t.index),
            k = tr(m, "large"),
            v = c === t.index;
          return (0, n.useEffect)((() => {
            u.current && s && s(u?.current?.offsetWidth)
          }), [u]), (0, z.jsxs)("button", {
            className: "rockstargames-modules-core-headerd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": v,
            onClick: e => {
              e.stopPropagation(), l(b), d({
                event: "character_selector_select",
                text: Ir[m] ?? "",
                position: b
              })
            },
            ref: u,
            tabIndex: i,
            children: [(0, z.jsx)("div", {
              className: "rockstargames-modules-core-headerbbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, z.jsx)("img", {
                src: f,
                alt: o.formatMessage(sr.profile_selector_mugshot, {
                  userName: _
                }),
                onError: () => {
                  h(a(8989))
                },
                "data-testid": Rr
              })
            }), (0, z.jsxs)("div", {
              className: "rockstargames-modules-core-headerc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, z.jsxs)("div", {
                className: "rockstargames-modules-core-headere9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, z.jsx)("img", {
                  src: k.src,
                  alt: k.alt,
                  "data-testid": Or
                }), (0, z.jsx)("div", {
                  className: "rockstargames-modules-core-headerb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  "data-testid": zr,
                  children: _
                })]
              }), (0, z.jsx)("div", {
                className: "rockstargames-modules-core-headera5e3df42966a50f3dd88bbcb57536617",
                children: (0, z.jsxs)("div", {
                  className: "rockstargames-modules-core-headera6776312350028898320ba59145a39be",
                  children: [(0, z.jsx)("img", {
                    className: "rockstargames-modules-core-headerb266652910ad34c0e8e097b212a958f0",
                    src: ar(parseInt(p.overview.rank.value)),
                    alt: o.formatMessage(sr.profile_selector_rp_icon)
                  }), (0, z.jsx)("span", {
                    "data-testid": Ar,
                    children: t.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Dr = {
          pillBtn: "rockstargames-modules-core-headerd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-modules-core-headerbc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-modules-core-headerb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-modules-core-headerc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-modules-core-headera8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-modules-core-headerc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-modules-core-headerda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-modules-core-headerd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-modules-core-headerd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-modules-core-headerb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-modules-core-headera581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-modules-core-headerbdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-modules-core-headerdc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-modules-core-headerb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-modules-core-headerf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-modules-core-headerf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-modules-core-headerb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-modules-core-headerec696aafed90a7a4c69dc53da0a5bb36"
        },
        Br = "ProfileCard:characterName",
        qr = "ProfileCard:avatar",
        Fr = "ProfileCard:bankValue",
        $r = "ProfileCard:cashValue",
        Gr = "ProfileCard:rankValue",
        Ur = e => {
          let {
            character: t,
            platformTag: s
          } = e;
          const {
            data: i
          } = D(), {
            track: o
          } = H(), c = (0, r.useIntl)(), [l, d] = (0, n.useState)([]), [u, m] = (0, n.useState)(null), [_, g] = (0, n.useState)(null), [p, f] = (0, n.useState)(!1), [h, b] = (0, n.useState)(-1), [k, v] = (0, n.useState)([]), [x, y] = (0, n.useState)(0), w = a(8989), [j, C] = (0, n.useState)("0"), [S, N] = (0, n.useState)("0"), M = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), T = () => {
            P((0, z.jsx)("img", {
              src: w,
              alt: c.formatMessage(sr.profile_selector_mugshot, {
                userName: i.nickname
              })
            }))
          }, [E, P] = (0, n.useState)((0, z.jsx)("img", {
            className: Dr.scAvatarImg,
            src: t.mugshotUrl,
            alt: c.formatMessage(sr.profile_selector_mugshot, {
              userName: i.nickname
            }),
            onError: T,
            "data-testid": qr
          }));
          (0, n.useEffect)((() => {
            d(i.crews ?? [])
          }), [i.crews]), (0, n.useEffect)((() => {
            P((0, z.jsx)("img", {
              src: t.mugshotUrl,
              alt: i.nickname,
              onError: T,
              "data-testid": qr
            })), C(M(t.stats.overview.bank.value)), N(M(t.stats.overview.cash.value)), y(parseInt(t.stats.overview.rank.value))
          }), [t, i.nickname]), (0, n.useEffect)((() => {
            l && l.forEach((e => {
              !0 === e.isPrimary && (m(e.crewTag), g(e.crewColour), b(e.rankOrder), f(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && f(!0))
            }))
          }), [l]), (0, n.useEffect)((() => {
            const e = [];
            if (!p && h > -1)
              for (let t = 5; t > h; t -= 1) e.push((0, z.jsx)("div", {
                className: Dr.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== _ ? _ : ""
                }
              }, `crewrankbar-${t}`));
            v(e)
          }), [h, p, _]);
          const I = e => {
            e.stopPropagation(), o({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, z.jsxs)("div", {
            className: Dr.scProfileDetails,
            onClick: I,
            onKeyUp: I,
            role: "button",
            tabIndex: -1,
            children: [(0, z.jsxs)("div", {
              className: Dr.scAvatar,
              children: [E, (0, z.jsx)("div", {
                className: Dr.scAvatarPlatform,
                "data-platform": t.platform,
                children: (0, z.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, z.jsxs)("div", {
              className: Dr.scProfileStats,
              children: [(0, z.jsx)("div", {
                className: Dr.scNames,
                children: (0, z.jsxs)("div", {
                  className: Dr.scTagsNames,
                  children: [(0, z.jsx)("span", {
                    className: Dr.scUserName,
                    "data-testid": Br,
                    children: t.platformUsername
                  }), u && (0, z.jsxs)("span", {
                    className: Dr.scCrewName,
                    "data-arrow-tag": p,
                    children: [u, !p && (0, z.jsx)("div", {
                      className: Dr.scCrewRankBar,
                      children: k
                    })]
                  })]
                })
              }), (0, z.jsxs)("div", {
                className: Dr.scProgress,
                children: [(0, z.jsxs)("div", {
                  className: Dr.scRpLevel,
                  children: [(0, z.jsx)("img", {
                    className: Dr.scRpIcon,
                    src: ar(x),
                    alt: c.formatMessage(sr.profile_selector_rp_icon)
                  }), (0, z.jsx)("span", {
                    "data-testid": Gr,
                    children: t.stats.overview.rank.value
                  })]
                }), (0, z.jsxs)("div", {
                  className: Dr.scMoney,
                  children: [(0, z.jsxs)("span", {
                    className: Dr.scCash,
                    "data-testid": $r,
                    children: ["$", S]
                  }), (0, z.jsxs)("span", {
                    className: Dr.scBank,
                    "data-testid": Fr,
                    children: ["$", j]
                  })]
                })]
              })]
            })]
          })
        },
        Hr = (e, t) => {
          const [a, s] = (0, n.useState)(0);
          return (0, n.useEffect)((() => {
            if (e.current) {
              const {
                current: a
              } = e, r = a.getBoundingClientRect(), {
                width: n
              } = r;
              let i = n;
              if (!0 === t) {
                const e = window.getComputedStyle(a);
                i += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(i)
            }
          }), [e]), a
        },
        Xr = e => {
          let {
            dragThreshold: t = 80,
            interactionDelay: a = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: r = null,
            slideClickCallback: i = null,
            children: o = [],
            disablePager: c = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, n.createRef)(),
            u = Hr(d, !1),
            [m, _] = (0, n.useState)(!1),
            [g, p] = (0, n.useState)(0),
            [f, h] = (0, n.useState)(0),
            [b, k] = (0, n.useState)([s]),
            [v, x] = (0, n.useState)(b[0]),
            [y, w] = (0, n.useState)(252),
            [j, C] = (0, n.useState)(0),
            [S, N] = (0, n.useState)([]),
            [M, T] = (0, n.useState)([]),
            [E, P] = (0, n.useState)(!1),
            I = e => {
              if (!0 === m || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              h(t)
            },
            O = e => {
              if (!0 === m || 0 === f || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = a > f ? 1 : -1,
                n = Math.abs(f - a);
              n > t ? (s > 0 ? (() => {
                if (!0 === m) return;
                _(!0);
                const e = g - 1 < 0 ? 0 : g - 1;
                p(e), x(b[e]), r && r(e)
              })() : (() => {
                if (!0 === m) return;
                _(!0);
                let e = g + 1 >= b.length ? b.length - 1 : g + 1;
                e < 0 && (e = 0), p(e), x(b[e]), r && r(e)
              })(), h(0)) : x(b[g] + n * s)
            },
            R = () => {
              !0 !== m && !0 !== l && (_(!0), !0 !== m && (x(b[g]), h(0)))
            };
          return (0, n.useEffect)((() => {
            const e = [];
            o.forEach((() => {
              e.push((0, n.createRef)())
            })), N(e)
          }), [o]), (0, n.useEffect)((() => {
            if (S.length < 1) return;
            w(S[0]?.current?.clientWidth || 0);
            const e = S[0]?.current.firstChild,
              t = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              a = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            C(a + t)
          }), [S]), (0, n.useEffect)((() => {
            !1 !== m && setTimeout((() => {
              _(!1)
            }), a)
          }), [m, a]), (0, n.useEffect)((() => {
            k(o.map(((e, t) => (e => {
              let t = 0;
              const a = o.length;
              return 1 === a ? .5 * u - .5 * y - 2 * s + j : (0 === e && (t = s - e * y), e === a - 1 && a > 1 && (t = a * y * -1 + (u - (s - j))), e > 0 && e < a - 1 && (t = e * y * -1 + (.5 * u - .5 * y + .5 * j)), t)
            })(t)))), 1 === o.length ? P(!0) : P(!1)
          }), [d.current, o, u]), (0, n.useEffect)((() => {
            const e = (t = g, o.map(((e, a) => {
              const s = {
                active: !1
              };
              return a === t && (s.active = !0), s
            })));
            var t;
            T(e)
          }), [o, g]), (0, n.useEffect)((() => {
            !0 !== c && !0 !== l || x(b[0])
          }), [l, c, b]), (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)("div", {
              className: "rockstargames-modules-core-headerab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: I,
              onTouchMove: O,
              onTouchEnd: R,
              onMouseDown: I,
              onMouseMove: O,
              onMouseUp: R,
              onClick: () => {
                null !== i && i(g)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, z.jsx)("div", {
                className: "rockstargames-modules-core-headera93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": m,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${v}px)`
                },
                children: o.map(((e, t) => (0, z.jsx)("div", {
                  className: "rockstargames-modules-core-headerc013369a930e076d1729d086fb51903e",
                  ref: S[t],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), M.length > 1 && !1 === c && (0, z.jsx)("div", {
              className: "rockstargames-modules-core-headerda8cfef07bf44e9a44839e2723ec61bb",
              children: M.map((e => (0, z.jsx)("div", {
                className: "rockstargames-modules-core-headerfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        Vr = {
          pillBtn: "rockstargames-modules-core-headeraa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-modules-core-headerd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-modules-core-headerdde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-modules-core-headerc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-modules-core-headera4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-modules-core-headerb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-modules-core-headera1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-modules-core-headera326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-modules-core-headerd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-modules-core-headerbb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-modules-core-headera7f1e2d78519eaf099bd43c6ad07abc9"
        },
        Wr = (0, o.JG)((e => {
          let {
            sc: t,
            charListHidden: a,
            hideCharacterList: s,
            refCharacterListDesktop: c,
            menuPadding: l,
            longCharList: d,
            setLongCharList: u,
            isMobileMode: m,
            setIsMobileMode: _,
            location: g,
            onNavigate: p
          } = e;
          const {
            windowWidth: f,
            windowHeight: h
          } = (0, o.G4)(), b = (0, r.useIntl)(), {
            languageSelectorOpened: k,
            setLanguageSelectorOpened: v,
            activeSubNavId: x,
            setActiveSubNavId: y,
            subNavExtraHeight: w,
            setSubNavExtraHeight: j,
            scNavOpened: S,
            setScNavOpened: N
          } = hr(), [M, T] = (0, n.useState)(""), {
            lsSettings: E
          } = (0, o.L$)(), {
            track: P
          } = H(), I = (0, i.Es)(), {
            data: O,
            loggedIn: R
          } = D(), {
            charactersNeeded: A,
            currentCharId: L,
            hasNotifications: B,
            navOpen: q,
            setCurrentCharId: F,
            setHasNotifications: $,
            setSelectedCharacterTuple: G,
            setUserData: U
          } = C(), [X, W] = (0, n.useState)(null), [Y, K] = (0, n.useState)(null), [J, Q] = (0, n.useState)(!1), [Z, ee] = (0, n.useState)(!1), [te, ae] = (0, n.useState)(0), se = (0, n.createRef)(), re = Hr(se, !1), ne = (0, n.createRef)(), [ie, oe] = (0, n.useState)(0), [ce, le] = (0, n.useState)([]), [de, ue] = (0, n.useState)(244), me = (0, n.useRef)(null), _e = (0, n.useMemo)((() => (0, V.A)()), []), ge = (0, n.useMemo)((() => ((e, t, a, s, r) => [{
            text: e.formatMessage(sr.sc_link_activity_feed),
            location: {
              domain: V.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Sr,
              text: sr.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(sr.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(sr.sc_link_settings),
              location: {
                domain: V.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...Sr,
                text: sr.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(sr.sc_link_view_my_profile),
              href: a.profile_link,
              target: "_self",
              ga: {
                ...Sr,
                text: sr.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(sr.sc_link_messages),
              location: {
                domain: V.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...Sr,
                text: sr.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(sr.sc_link_game_activation),
              location: {
                domain: V.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...Sr,
                text: sr.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(sr.sc_link_notifications),
            location: {
              domain: V.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...Sr,
              text: sr.sc_link_notifications.defaultMessage,
              location: {
                domain: V.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(sr.sc_link_crews),
            location: {
              domain: V.C.socialClub,
              path: `/member/${a.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...Sr,
              text: sr.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(sr.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(sr.sc_link_my_friends),
              location: {
                domain: V.C.socialClub,
                path: `/member/${a.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...Sr,
                text: sr.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(sr.sc_link_import_friends),
              location: {
                domain: V.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...Sr,
                text: sr.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(sr.sc_link_find_friends),
              location: {
                domain: V.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...Sr,
                text: sr.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, Nr(e), {
            text: e.formatMessage(sr.sc_link_log_out),
            href: `${t.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...Sr,
              text: sr.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(b, t, O, B, M, window)), [b, t, O, B, M, _e]), pe = () => {
            ee(l + de * te < re)
          }, fe = () => {
            if (ne.current) {
              const {
                current: e
              } = ne, t = e?.scrollHeight, a = window.getComputedStyle(e);
              if (a) {
                let e = 16 * parseInt(a.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), oe(t + e)
              } else oe(t)
            }
          };
          return (0, n.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            _e.currentSite?.site === V.C.socialClub && (e = encodeURIComponent("/")), T(e)
          }), [g]), (0, n.useEffect)((() => {
            le(O.characters[A] ?? [])
          }), [O, A]), (0, n.useEffect)((() => {
            O && U(O)
          }), [O]), (0, n.useEffect)((() => {
            const e = O?.characters.gtao;
            if (null !== R && !e.length) return void G(!1);
            if (null == L || !e.length) return;
            const t = e?.[L] ?? e?.[0] ?? null;
            G(!!t?.platform && [t.platform, t.characterSlot])
          }), [L, O, R]), (0, n.useEffect)((() => {
            (async () => {
              if (!O?.id) return;
              const {
                count: e
              } = await (0, o.Ax)("notification/count", {
                pingBearer: I
              });
              $(e > 0)
            })()
          }), [O]), (0, n.useEffect)((() => {
            pe()
          }), [de]), (0, n.useEffect)((() => {
            s(!0), _(f < 768), _(f < 768 || h < 649)
          }), [f, h]), (0, n.useEffect)((() => {
            let e = ce.length - 1;
            e < 0 && (e = 0), ae(e);
            const t = ce.length > 0 ? ce[L] ?? ce[0] : null;
            if (!t) return;
            const a = null !== t ? tr(t.platform, "large") : null;
            K(a), W(t), ce.length > 1 ? Q(!0) : Q(!1), u(ce.length - 1 > 3)
          }), [L, ce]), (0, n.useEffect)((() => {
            pe()
          }), [te, m, f, ce]), (0, n.useEffect)((() => {
            fe(), kr()((() => {
              setTimeout(fe, 0)
            }), 300)
          }), [f, h]), (0, n.useEffect)((() => {
            const e = E?.currentCharId ?? 0;
            e !== L && F(Math.max(0, Math.min(e, ce.length - 1)))
          }), [ce, E]), (0, z.jsxs)(z.Fragment, {
            children: [null !== X && "gtao" === A && (0, z.jsxs)("div", {
              className: Vr.scProfile,
              ref: me,
              tabIndex: -1,
              "aria-label": b.formatMessage(sr.profile_selector_profile_card),
              children: [(0, z.jsx)(Ur, {
                s: Vr,
                character: X,
                platformTag: Y
              }), !0 === J && (0, z.jsxs)("div", {
                className: Vr.scCharacterSelector,
                children: [(0, z.jsx)("button", {
                  className: Vr.scCharacterSelectBtn,
                  "aria-hidden": !q,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const t = !a;
                    s(t), P({
                      event: t ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, z.jsx)("span", {
                    children: (0, z.jsx)(r.FormattedMessage, {
                      ...sr.profile_selector_switch_character
                    })
                  })
                }), !1 === m && (0, z.jsx)("div", {
                  className: Vr.scCharacterList,
                  "data-long-list": d,
                  "aria-hidden": a,
                  ref: c,
                  children: ce.map((e => (0, z.jsx)(Lr, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ue
                  }, e.mugshotUrl)))
                }), !0 === m && (0, z.jsx)("div", {
                  className: Vr.scCharacterList,
                  "data-single-item": 2 === ce.length,
                  "data-swiper-disabled": Z,
                  "aria-hidden": a,
                  ref: se,
                  children: (0, z.jsx)(Xr, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      P({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: Z,
                    disableSwiper: Z,
                    children: ce.filter(((e, t) => t !== L)).map((e => (0, n.createElement)(Lr, {
                      characterData: e,
                      setMobileCardWidth: ue,
                      key: e.mugshotUrl,
                      tabIndex: a ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, z.jsxs)("nav", {
              className: Vr.scNav,
              "aria-hidden": !q,
              children: [(0, z.jsx)("button", {
                className: Vr.scNavHeader,
                type: "button",
                "data-opened": S,
                "data-nav-opened": q,
                tabIndex: S ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), S || N(!0)
                },
                "data-testid": "playerButton",
                children: (0, z.jsx)("span", {
                  children: O.nickname
                })
              }), (0, z.jsx)("div", {
                className: Vr.scNavWrap,
                "data-opened": S,
                "data-logged-in": "true",
                ref: ne,
                style: {
                  "--scNavWrap-max-height": `${ie+w}px`
                },
                children: ge.map(((e, t) => (0, n.createElement)(Er, {
                  ...e,
                  id: t,
                  activeSubNavId: x,
                  setActiveSubNavId: y,
                  setSubNavExtraHeight: j,
                  onNavigate: p,
                  key: e.text
                })))
              })]
            }), (0, z.jsx)("div", {
              className: Vr.scLanguageSelector,
              style: {
                visibility: q ? null : "hidden"
              },
              children: (0, z.jsx)(Cr, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: k,
                setLanguageSelectorOpened: v,
                location: g
              })
            })]
          })
        })),
        Yr = {
          scMenu: "rockstargames-modules-core-headerebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-modules-core-headerf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-modules-core-headere3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-modules-core-headerff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-modules-core-headerba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-modules-core-headerd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-modules-core-headerd8e443f5d0d9171449f5f1042f80aa17"
        },
        Kr = (0, r.withIntl)((e => {
          let {
            location: t,
            onNavigate: s
          } = e;
          const {
            windowHeight: c
          } = (0, o.G4)(), l = (0, r.useIntl)(), {
            languageSelectorOpened: d,
            setLanguageSelectorOpened: u,
            setActiveSubNavId: m,
            scNavOpened: _,
            setScNavOpened: g,
            charListHidden: p,
            setCharListHidden: f
          } = hr(), [h, b] = (0, n.useState)(!1), {
            navHidden: k = !1
          } = (0, i.J0)(), {
            loggedIn: v
          } = D(), {
            currentCharId: x,
            navOpen: y,
            setNavOpen: w,
            userData: j
          } = C(), {
            track: S
          } = H(), [N, M] = (0, n.useState)(!1), E = (0, i.qs)(T), P = (0, n.useRef)(), [I, O] = (0, n.useState)(0), R = (0, n.createRef)(), [A, L] = (0, n.useState)(!1), [B, q] = (0, n.useState)(0), [F, $] = (0, n.useState)(!1), {
            mutateLSSettings: G,
            lsSettings: U
          } = (0, o.L$)(), X = (0, n.useCallback)((e => {
            f(e), P.current && !0 === e && (P.current.scrollTop = 0)
          }), [P]);
          return (0, n.useEffect)((() => {
            null !== x && U.currentCharId !== x && G({
              key: "currentCharId",
              value: x
            }), !1 === v ? G({
              key: "currentCharId",
              value: null
            }) : v && !j && S({
              event: "account_synced"
            })
          }), [x, v]), (0, n.useEffect)((() => {
            P.current && (!1 === p && !1 === N && (P.current.style.height = `${P.current.scrollHeight}px`), !0 === p && (P.current.style.height = null))
          }), [p, P, N]), (0, n.useEffect)((() => {
            const e = () => {
                w(!1), X(!0)
              },
              t = t => {
                const a = R?.current && t?.composedPath().includes(R.current);
                y && !a && e()
              },
              a = t => {
                "Escape" === t.code && e()
              };
            return document.addEventListener("click", t), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", t), document.removeEventListener("keyup", a)
            }
          }), [R]), (0, n.useEffect)((() => {
            w(!1), X(!0)
          }), [k]), (0, n.useEffect)((() => {
            if (R.current) {
              const {
                current: e
              } = R, t = window.getComputedStyle(e);
              O(parseInt(t.paddingRight, 10) + parseInt(t.paddingLeft, 10))
            }
          }), [R]), (0, n.useEffect)((() => {
            $(window.navigator.userAgent.includes("Mac"))
          }), []), (0, n.useEffect)((() => {
            R.current && b(R?.current?.scrollHeight >= c)
          }), [R, c]), (0, n.useEffect)((() => {
            y || (m(-1), u(!1))
          }), [y]), (0, n.useEffect)((() => {
            d && (p || X(!0), _ && (g(!1), m(-1)))
          }), [d]), (0, n.useEffect)((() => {
            _ && (d && u(!1), p || X(!0))
          }), [_]), null === v ? null : (0, z.jsxs)(nr.RemoveScroll, {
            enabled: !!y,
            removeScrollBar: !1,
            children: [(0, z.jsxs)("div", {
              className: [Yr.scMenu, y ? Yr.navOpen : ""].join(" "),
              "data-logged-in": v,
              "data-mac-browser": F,
              "data-scroll-mode": h,
              ref: R,
              "aria-hidden": !y,
              children: [(0, z.jsx)("button", {
                className: Yr.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  q(t)
                },
                onTouchMove: e => {
                  if (0 === B) return;
                  const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(B - t) > 1 && (q(0), w(!1))
                },
                children: (0, z.jsx)("img", {
                  className: Yr.dragHandle,
                  src: a(8128),
                  alt: l.formatMessage(sr.sc_menu_drag_handle)
                })
              }), v ? (0, z.jsx)(Wr, {
                sc: E,
                charListHidden: p,
                hideCharacterList: X,
                refCharacterListDesktop: P,
                menuPadding: I,
                longCharList: N,
                setLongCharList: M,
                isMobileMode: A,
                setIsMobileMode: L,
                location: t,
                onNavigate: s
              }) : (0, z.jsx)(Pr, {
                sc: E,
                navOpen: y,
                location: t,
                onNavigate: s
              })]
            }), (0, z.jsx)("div", {
              className: [Yr.scOverlay, y ? Yr.navOpen : ""].join(" "),
              "data-logged-in": v
            })]
          })
        }), er),
        Jr = a(8989),
        Qr = a(1764),
        Zr = (0, r.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: t
          } = e;
          const a = (0, r.useIntl)(),
            {
              data: s
            } = D(),
            {
              charactersNeeded: i,
              currentCharId: o,
              navOpen: c,
              setNavOpen: l
            } = C(),
            {
              track: d
            } = H(),
            [u, m] = (0, n.useState)(null),
            [_, g] = (0, n.useState)(!1),
            [p, f] = (0, n.useState)(null),
            [h, b] = (0, n.useState)(!1),
            [k, v] = (0, n.useState)([]);
          (0, n.useEffect)((() => {
            v(s.characters[i] ?? [])
          }), [s, i]);
          const x = (0, n.useCallback)((e => {
            e.stopPropagation(), l(!c), 1 == !c && t(null), d({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: c ? "close" : "open"
            })
          }), [c]);
          return (0, n.useEffect)((() => {
            const e = s?.id ?? !1,
              t = e ? (k?.[o]?.mugshotUrl ?? s?.avatar) || Jr : Qr,
              a = tr(k?.[o]?.platform, "small") ?? null;
            f(a), m(t), g(e), b(!!k?.[o]?.mugshotUrl)
          }), [s, k, o, Jr, Qr]), (0, z.jsxs)("button", {
            className: "rockstargames-modules-core-headerdc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": h,
            "aria-label": a.formatMessage(c ? sr.sc_menu_close : sr.sc_menu_open),
            "aria-expanded": c,
            type: "button",
            onClick: x,
            "data-testid": "avaterMenuButton",
            "data-logged-in": Boolean(_),
            children: [(0, z.jsx)("img", {
              className: "rockstargames-modules-core-headerce75eaa6d65692d36b60d31f3f660ff0",
              src: u || "",
              onError: () => {
                m(Jr)
              },
              alt: s?.nickname || ""
            }), _ && null !== p && (0, z.jsx)("img", {
              className: "rockstargames-modules-core-headeraaf21e74a659089f743bb160bdf95046",
              src: p.src,
              alt: p.alt
            }), _ && (0, z.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-headercf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": k?.[o]?.platform ?? null
            })]
          })
        }), er),
        en = (e, t, a, s) => ({
          event: e || "nav_click",
          link_url: t,
          text: a,
          element_placement: `Global Nav > ${s}`
        }),
        tn = () => {
          const e = K(),
            t = (() => {
              const e = (0, n.useContext)(W);
              if (void 0 === e) throw new Error("useNavigationLocale must be used within a Navigation Provider");
              return e.locale
            })(),
            a = J();
          return s => {
            if (!s.path) return s.domain;
            const n = [
                ["username", a.nickname]
              ],
              i = ((e, t) => t.reduce(((e, t) => {
                let [a, s] = t;
                return e.replaceAll(`{${a}}`, s)
              }), e))(s.path, n),
              o = "www" === s.domain && "www" !== e.currentSite.site ? ((e, t) => {
                if (!t || t.iso === r.englishLocale.iso) return e;
                const a = t.subdomaincom;
                return "/" === e[0] ? a + e : `${a}/${e}`
              })(i, t) : i;
            return s.domain + o
          }
        },
        an = "nav-internal",
        sn = "nav-external",
        rn = "nav-dropdown",
        nn = "nav-no-link",
        on = "games-menu",
        cn = (0, r.defineMessages)({
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
        ln = e => {
          let {
            children: t,
            location: a,
            className: s,
            isLegacy: i,
            label: o,
            type: c,
            target: l,
            gaEvent: d,
            gaText: u,
            gaBreadCrumb: m,
            dataTestId: _,
            onClick: g,
            ...p
          } = e;
          const f = (0, r.useIntl)(),
            {
              track: h
            } = H(),
            b = tn(),
            {
              dispatch: k
            } = (0, F.OH)(),
            v = ae(),
            x = (0, n.useMemo)((() => {
              const e = {};
              return "_blank" === l && (e["aria-label"] = f.formatMessage(cn.nav_opens_in_new_window, {
                text: o
              }), e.rel = "noopener"), e
            }), [o, l]);
          if (!a && c === nn && _) {
            const e = () => {
              h(en(d, "", u, m)), k(_)
            };
            return (0, z.jsx)("button", {
              type: "button",
              className: s,
              onClick: () => e(),
              "data-testid": _,
              ...p,
              ...x,
              children: t
            })
          }
          if (!a) return null;
          const y = b(a),
            w = Boolean(c === sn || i || document.documentElement.classList.contains("legacyPage"));
          return (0, z.jsx)(Mr, {
            className: s,
            target: l,
            to: y,
            onClick: () => (g?.(), void h(en(d, y.toString(), u, m))),
            onNavigate: v,
            reloadDocument: w,
            "data-testid": _,
            ...p,
            ...x,
            children: t
          })
        },
        dn = {
          callToAction: "rockstargames-modules-core-headere9df0daa394681a64cb95b18d99d59ee",
          highlight: "rockstargames-modules-core-headere548209dceae4a244a9073e79dbfb639"
        },
        un = e => {
          let {
            children: t,
            dataTestId: a,
            location: s,
            variant: r,
            gaEvent: n,
            gaText: i,
            target: o,
            onClick: c
          } = e;
          return (0, z.jsx)("div", {
            className: dn.callToActionContainer,
            children: (0, z.jsx)(ln, {
              className: [dn.callToAction, r ? dn[r] : ""].join(" "),
              dataTestId: a,
              location: s,
              gaEvent: n,
              gaText: i,
              gaBreadCrumb: i,
              onClick: c,
              target: o,
              children: t
            })
          })
        };
      var mn = a(3181);
      const _n = {
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
        gn = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        },
        pn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        fn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg",
        hn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
        bn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg",
        kn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg",
        vn = {
          pillBtn: "rockstargames-modules-core-headerb8d9a9b6b711eda564c164fd605226e9",
          selected: "rockstargames-modules-core-headerbfc003aa6b50e2a13f79fdb1230bba6b",
          pillButton: "rockstargames-modules-core-headerdb826c4a25391fa2bf7cd01acb728969"
        },
        xn = e => {
          let {
            children: t,
            selected: a,
            ...s
          } = e;
          return (0, z.jsx)("button", {
            type: "button",
            className: [vn.pillButton, a ? vn.selected : ""].join(" "),
            ...s,
            children: t
          })
        };
      var yn = a(8588);
      const wn = {
          pillBtn: "rockstargames-modules-core-headerd02fb29148f9e5cf1dc7263bdc68a180",
          selected: "rockstargames-modules-core-headerdf2f40ffeae371a8ed597bc4cf4e3065",
          subMenu: "rockstargames-modules-core-headera8d1baeeee7e4978f4d6630573dc6705",
          fadeIn: "rockstargames-modules-core-headerfa46fbe148e700fcfc59a3b854089551"
        },
        jn = {
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
        Cn = e => {
          let {
            openerRef: t,
            isOpen: a,
            isMobile: s,
            children: r
          } = e;
          const [i, o] = (0, n.useState)(null), {
            styles: c,
            attributes: l,
            forceUpdate: d
          } = (0, yn.usePopper)(t, i, {
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
                altAxis: !s
              }
            }]
          });
          return (0, n.useEffect)((() => {
            d && d()
          }), [t, a, s]), (0, z.jsx)(mn.motion.div, {
            initial: "exit",
            animate: a ? "enter" : "exit",
            transition: _n.quickFade,
            variants: jn,
            className: [wn.subMenu].join(" "),
            style: {
              ...c.popper
            },
            ref: o,
            ...l.popper,
            children: r
          })
        },
        Sn = e => {
          let {
            children: t,
            ...a
          } = e;
          return (0, z.jsx)("button", {
            type: "button",
            className: "rockstargames-modules-core-headerf8e4f5aa11530c99bc59254d0e3b726f",
            ...a,
            children: t
          })
        },
        Nn = {
          backgroundElevation: "rockstargames-modules-core-headere3e1656dc3afbc56769f47474f898839",
          backgroundOverlay: "rockstargames-modules-core-headerdafa3d68cbab86ca8350e993f7ae1e67",
          backgroundVisible: "rockstargames-modules-core-headerb3cad1024c04771348aa4c87238f6a38"
        },
        Mn = e => {
          let {
            children: t,
            isOpen: a,
            onClose: s,
            visible: r
          } = e;
          return a ? (0, z.jsxs)("div", {
            className: Nn.backgroundElevation,
            onClick: s,
            "data-testid": "background-elevation",
            children: [(0, z.jsx)("div", {
              className: [Nn.backgroundOverlay, r ? Nn.backgroundVisible : ""].join(" "),
              "data-testid": "background-overlay"
            }), t]
          }) : null
        },
        Tn = e => {
          let {
            target: t,
            selected: a,
            selectedTarget: s,
            onClick: i,
            isMobile: o,
            ...c
          } = e;
          const l = (0, r.useIntl)(),
            [d, u] = (0, n.useState)(!1),
            [m, _] = (0, n.useState)(null);
          return t.type === rn ? (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)("div", {
              ref: _,
              children: (0, z.jsxs)(xn, {
                "aria-label": l.formatMessage(cn.search_target_aria_label, {
                  target: s && t?.targets?.indexOf(s) >= 0 ? s.text : t.text
                }),
                selected: a,
                onClick: () => u(!d),
                ...c,
                children: [s && t?.targets?.indexOf(s) >= 0 ? s.text : t.text, (0, z.jsx)("img", {
                  src: hn,
                  alt: ""
                })]
              }, t.gaText)
            }), (0, z.jsx)(Mn, {
              isOpen: d,
              onClose: () => u(!1),
              children: (0, z.jsx)(Cn, {
                isOpen: d,
                openerRef: m,
                isMobile: o,
                children: t.targets?.map((e => (0, z.jsx)(Sn, {
                  "aria-label": l.formatMessage(cn.search_target_aria_label, {
                    target: e.text
                  }),
                  onClick: () => i(e),
                  children: e.text
                }, e.gaText)))
              })
            })]
          }) : (0, z.jsx)(xn, {
            "aria-label": l.formatMessage(cn.search_target_aria_label, {
              target: t.text
            }),
            selected: a,
            onClick: () => i(t),
            ...c,
            children: t.text
          }, t.tab)
        },
        En = {
          secondaryNavigationSlide: "rockstargames-modules-core-headerf6fc2b20d51c3d1f068919e44f503819",
          secondaryNavigationOverlay: "rockstargames-modules-core-headere8890e7bb2245601fc43e19517793c90",
          open: "rockstargames-modules-core-headerac5c4821fc7f4d820e27c87ca5763a95"
        },
        Pn = e => {
          let {
            children: t,
            isOpen: a,
            onMouseClick: s,
            onEscapeKey: r,
            onMouseAway: i,
            style: o
          } = e;
          const c = a ? [En.open] : [],
            l = e => {
              "Escape" === e.key && r?.()
            };
          return (0, n.useEffect)((() => (a ? window.addEventListener("keyup", l) : window.removeEventListener("keyup", l), () => window.removeEventListener("keyup", l))), [l, a]), a ? (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)("div", {
              className: [En.secondaryNavigationOverlay, ...c].join(" "),
              onClick: s,
              onMouseEnter: i,
              style: {
                ...o
              },
              "data-testid": "navigation-overlay"
            }), t && (0, z.jsx)("div", {
              className: [En.secondaryNavigationSlide, ...c].join(" "),
              children: t
            })]
          }) : null
        },
        In = e => {
          let {
            handleSearch: t,
            handleSearchKeypress: a,
            handleSearchTargetSelect: s,
            setIsSearchOpen: i,
            setSearchQuery: o,
            isSearchOpen: c,
            searchQuery: l,
            selectedTarget: d,
            selectedTargetIndex: u,
            isSearchPage: m,
            searchError: _,
            maxSearchLength: g
          } = e;
          const p = (0, r.useIntl)(),
            f = Z(),
            h = (0, n.useRef)(null),
            b = () => {
              i(), m || o(""), h?.current?.focus()
            },
            k = () => {
              m || i()
            };
          return (0, n.useEffect)((() => {
            c ? h?.current?.focus() : h?.current?.blur()
          }), [c]), (0, z.jsxs)("div", {
            children: [(0, z.jsx)("button", {
              className: "rockstargames-modules-core-headerd3d3a934569b86f84a4d8c868461549e",
              type: "button",
              onClick: b,
              "data-testid": "searchToggle",
              children: (0, z.jsx)("img", {
                src: pn,
                alt: p.formatMessage(c ? cn.search_close_button : cn.search_open_button)
              })
            }), (0, z.jsx)(mn.AnimatePresence, {
              children: c && (0, z.jsxs)("div", {
                children: [(0, z.jsx)(Pn, {
                  isOpen: !m,
                  onEscapeKey: k,
                  onMouseClick: k
                }), (0, z.jsxs)(mn.motion.div, {
                  className: "rockstargames-modules-core-headerad9b809fb40f6155d2d3b15a5f9df4f4",
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
                    transition: _n.springClose
                  },
                  transition: _n.springOpen,
                  "data-testid": "searchBar",
                  children: [(0, z.jsxs)(mn.motion.div, {
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
                    className: "rockstargames-modules-core-headerbe09031df4507f03bb7bdeb6195c5f29",
                    children: [(0, z.jsx)("div", {
                      className: "rockstargames-modules-core-headera1b928fc4a63134f949057268812580b",
                      children: (0, z.jsx)("button", {
                        type: "button",
                        onClick: t,
                        children: (0, z.jsx)("img", {
                          src: pn,
                          alt: p.formatMessage(cn.search_action)
                        })
                      })
                    }), (0, z.jsx)("div", {
                      className: "rockstargames-modules-core-headerd89c69f9af4ce3e0b04396b7b645c305",
                      children: (0, z.jsx)("input", {
                        type: "textfield",
                        value: l,
                        onChange: e => o(e.target.value),
                        onKeyUp: a,
                        placeholder: p.formatMessage(cn.search_placeholder),
                        ref: h,
                        enterKeyHint: "search",
                        maxLength: g
                      })
                    }), (0, z.jsx)("div", {
                      className: "rockstargames-modules-core-headeref9d7381de1dfc0e419fe26496f6bb10",
                      children: f.targets.map(((e, t) => (0, z.jsx)(Tn, {
                        target: e,
                        onClick: e => s(e, t),
                        selected: u === t,
                        selectedTarget: d
                      }, e.tab)))
                    }), !m && (0, z.jsx)("div", {
                      className: "rockstargames-modules-core-headerc502ebf1218c3f01d4b998a2fb196302",
                      children: (0, z.jsx)("button", {
                        type: "button",
                        onClick: b,
                        children: (0, z.jsx)("img", {
                          src: fn,
                          alt: p.formatMessage(cn.search_close_button)
                        })
                      })
                    })]
                  }), _ && (0, z.jsx)("div", {
                    className: "rockstargames-modules-core-headerf6cbf92aa4707cfb191850f81a93a723",
                    "aria-live": "polite",
                    children: _
                  })]
                })]
              })
            })]
          })
        },
        zn = {
          search: "rockstargames-modules-core-headerccbd4bd9a5c089e742a8cc85af739eaf",
          targetsOuter: "rockstargames-modules-core-headerbd5a01f0bab310312520ddb13cf27c1b",
          hasScroll: "rockstargames-modules-core-headerde90c6afb3598c25a9915cf8705f1906",
          targets: "rockstargames-modules-core-headerc77891b2ad5087f44ab59c5a9f5db9a5",
          errorMessage: "rockstargames-modules-core-headera79d2b5947b1fba1cad8ad257ce29b72"
        },
        On = e => {
          let {
            handleSearch: t,
            handleSearchKeypress: a,
            handleSearchTargetSelect: s,
            setIsSearchOpen: i,
            setSearchQuery: o,
            isSearchOpen: c,
            searchQuery: l,
            selectedTarget: d,
            selectedTargetIndex: u,
            isSearchPage: m,
            searchError: _,
            maxSearchLength: g
          } = e;
          const p = (0, r.useIntl)(),
            f = Z(),
            h = (0, n.useRef)(null),
            [b, k] = (0, n.useState)(!1);
          return (0, n.useEffect)((() => {
            let e, t, a = !1;
            const s = s => {
                h && h.current && (s.preventDefault(), a = !0, e = s.pageX - h.current.offsetLeft, t = h.current.scrollLeft)
              },
              r = () => {
                a = !1
              },
              n = s => {
                if (a && (s.preventDefault(), h && h.current)) {
                  const a = s.pageX - h.current.offsetLeft - e;
                  h.current.scrollLeft = t - a
                }
              },
              i = () => {
                if (h && h.current) {
                  const e = h.current.scrollLeft;
                  k(e > 20)
                }
              };
            if (h && h.current) {
              const e = h.current;
              e.addEventListener("mousedown", s), e.addEventListener("mouseup", r), e.addEventListener("mouseleave", r), e.addEventListener("mousemove", n), e.addEventListener("scroll", i)
            }
            return () => {
              h && h.current && (h.current.removeEventListener("mousedown", s), h.current.removeEventListener("mouseup", r), h.current.removeEventListener("mouseleave", r), h.current.removeEventListener("mousemove", n), h.current.removeEventListener("scroll", i))
            }
          })), (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsxs)(mn.motion.div, {
              className: zn.search,
              variants: gn,
              transition: _n.staggerFade,
              "data-testid": "searchBar",
              children: [(0, z.jsx)("button", {
                type: "button",
                onClick: () => c ? t() : i(!0),
                children: (0, z.jsx)("img", {
                  src: pn,
                  alt: p.formatMessage(cn.search_action)
                })
              }), (0, z.jsx)("input", {
                type: "text",
                value: l,
                onChange: e => o(e.target.value),
                onFocus: () => i(!0),
                onKeyUp: a,
                placeholder: p.formatMessage(cn.search_placeholder),
                enterKeyHint: "search",
                maxLength: g
              }), c && !m && (0, z.jsx)("button", {
                type: "button",
                onClick: () => i(!1),
                children: (0, z.jsx)("img", {
                  src: fn,
                  alt: p.formatMessage(cn.search_close_button)
                })
              })]
            }), c && (0, z.jsxs)("div", {
              className: [zn.targetsOuter, b ? zn.hasScroll : ""].join(" "),
              children: [(0, z.jsx)("div", {
                className: zn.targets,
                ref: h,
                children: f.targets.map(((e, t) => (0, z.jsx)(Tn, {
                  target: e,
                  selected: u === t,
                  selectedTarget: d,
                  onClick: e => s(e, t),
                  isMobile: !0
                }, e.tab)))
              }), _ && (0, z.jsx)("div", {
                className: zn.errorMessage,
                "aria-live": "polite",
                children: _
              })]
            })]
          })
        };
      var Rn = a(4252),
        An = a.n(Rn);
      const Ln = "global-nav-search",
        Dn = e => {
          let {
            ...t
          } = e;
          const {
            windowWidth: a
          } = (0, o.G4)(), {
            pathname: s,
            search: i
          } = te(), c = Z(), [l, d] = (0, n.useState)(""), [u, m] = Q(), [_, g] = (0, n.useState)(0), [p, f] = (0, n.useState)(c.targets[0]), [h, b] = (0, n.useState)(""), k = (() => {
            const e = tn(),
              t = ae();
            return (a, s) => {
              const r = new URLSearchParams(s.params),
                n = s.path?.replace("{term}", a);
              r.forEach(((e, t) => {
                "{query}" === e && r.set(t, a)
              }));
              const i = r.toString() ? `?${r.toString()}` : "",
                o = {
                  domain: s.domain,
                  path: n + i
                },
                c = e(o);
              c ? o.domain ? window.location.href = c : t ? t(c) : window.history.pushState({}, "", c) : console.error(`No search url could be constructed from ${s.domain} and ${s.path}`)
            }
          })(), {
            isSearchPage: v,
            forceSearch: x
          } = ee(), y = (0, r.useIntl)(), w = a < 1024, j = v && x || u === Ln, C = e => {
            if ("" === l) return !1;
            e.length > p.searchOptions.max && d(e.substring(0, p.searchOptions.max));
            const t = p.searchOptions.validationFunction?.(e);
            return e.split(/\s+/).every((e => e.length < p.searchOptions.min)) ? (b(y.formatMessage(cn.nav_search_error_too_short, {
              count: p.searchOptions.min
            })), !1) : t ? (b(y.formatMessage(cn.nav_search_error_invalid_chars, {
              invalidChars: [...new Set(t)].join(", ")
            })), !1) : (b(""), !0)
          }, S = () => {
            C(l) && k(l, p.location)
          }, N = (e, t) => {
            let a;
            const s = new URLSearchParams(e);
            return new URLSearchParams(t).forEach(((e, t) => {
              const r = s.get(t);
              "{query}" === e && r ? (a = !0, d(r), C(r)) : a = r === e && !1 !== a
            })), a
          }, M = (e, t) => {
            if (!t) return !1;
            const a = e.split(/[/?]+/),
              s = t.split(/[/?]+/),
              r = s.every(((e, t) => e === a[t] || "{term}" === e || "" === e));
            if (r) {
              const e = s.findIndex((e => "{term}" === e));
              return e && d(a[e]), !0
            }
            return !1
          };
          (0, n.useEffect)((() => {
            v || (g(0), f(c.targets[0]));
            const e = c.targets.findIndex((e => {
              if ("" === e.type && e.location) {
                if (e.location.path && s.startsWith(e.location.path) && N(i, e.location.params)) return f(e), !0;
                if (!e.location.params && M(s, e.location.path)) return f(e), !0
              }
              if ("nav-dropdown" === e.type) {
                const t = e.targets?.findIndex((e => {
                  if ("" === e.type) {
                    if (e.location.path && s.startsWith(e.location.path) && N(i, e.location.params)) return f(e), !0;
                    if (M(s, e.location.path)) return f(e), !0
                  }
                  return !1
                }));
                return !An().isNil(t) && t >= 0
              }
            }));
            g(e)
          }), [s, i, v]);
          const T = {
            handleSearch: S,
            handleSearchKeypress: e => {
              b(""), "Enter" === e.key && S()
            },
            handleSearchTargetSelect: (e, t) => {
              f(e), g(t), C(l) && k(l, e.location)
            },
            setIsSearchOpen: () => m(Ln),
            setSearchQuery: d,
            isSearchOpen: j,
            searchQuery: l,
            selectedTarget: p,
            selectedTargetIndex: _,
            isSearchPage: v,
            searchError: h,
            maxSearchLength: p.searchOptions.max
          };
          return w ? (0, z.jsx)(On, {
            ...T,
            ...t
          }) : (0, z.jsx)(In, {
            ...T
          })
        },
        {
          W1: Bn,
          IU: qn
        } = s,
        Fn = e => {
          let {
            cta: t,
            includeSearch: a = !0,
            isMobile: s
          } = e;
          const r = te(),
            n = ae(),
            [, i] = Q();
          return (0, z.jsxs)("div", {
            className: "rockstargames-modules-core-headerb7b6b3be0a8d4afcbc8f50430e5cb905",
            "data-testid": "actions",
            children: [t && (0, z.jsx)("div", {
              children: (0, z.jsx)(un, {
                variant: t.variant,
                location: t.location,
                dataTestId: t.dataTestId,
                gaEvent: t.ga,
                gaText: t.text,
                target: t.target,
                children: t.text
              })
            }), a && (0, z.jsx)(Dn, {}), (0, z.jsxs)("div", {
              children: [(0, z.jsx)(qn, {
                setOtherHeaderDropdowns: i
              }), !s && (0, z.jsx)(Bn, {
                location: r,
                onNavigate: n
              })]
            })]
          })
        },
        $n = {
          navigationItem: "rockstargames-modules-core-headerde510cddad921e05d8ab74b8ee602c7a",
          active: "rockstargames-modules-core-headerae5a3144360aa90ab2075ed298bce8db"
        },
        Gn = e => e.replace(/\?.*$/, ""),
        Un = (e, t) => e === t,
        Hn = e => {
          const {
            pathname: t,
            hostname: a
          } = te();
          return e && e.length ? e.map((e => {
            let {
              domain: s,
              path: r,
              additionalPathMatches: n
            } = e;
            if (s !== a && "" !== s) return null;
            let i = Gn(r || "");
            const o = Un(i, Gn(t));
            let c;
            return n && (c = Un(n, Gn(t))), Boolean(o || c)
          })) : []
        },
        Xn = e => {
          let {
            text: t,
            type: a,
            location: s,
            isLegacy: r,
            gaText: n,
            gaBreadCrumb: i,
            dataTestId: o,
            target: c,
            ...l
          } = e;
          const [d] = Hn(s ? [{
            domain: s?.domain,
            path: s?.path,
            end: "nav-internal" === a,
            additionalPathMatches: s?.additionalPathMatches
          }] : []), u = a === sn;
          return (0, z.jsxs)(ln, {
            className: [$n.navigationItem, d ? $n.active : ""].join(" "),
            location: s,
            isLegacy: r,
            type: a,
            target: c,
            gaText: n,
            gaBreadCrumb: i,
            dataTestId: o,
            label: t,
            ...l,
            children: [t, u && (0, z.jsx)("img", {
              alt: "",
              src: bn
            })]
          })
        },
        Vn = {
          navigationDropdownButton: "rockstargames-modules-core-headerceb5c57ca2c950a325546840322e405e",
          open: "rockstargames-modules-core-headerbe48a27093835ade1313fc60f3aa6fb7",
          active: "rockstargames-modules-core-headerf6b26d932cc23077b324c419a3b21a1b"
        },
        Wn = e => {
          let {
            text: t,
            isOpen: a,
            onClick: s,
            buttonRef: r,
            navChildren: i,
            gaText: o,
            gaBreadCrumb: c,
            dataTestId: l
          } = e;
          const {
            track: d
          } = H(), u = (0, n.useCallback)((() => {
            d(en(void 0, "", o, c)), s()
          }), [o, c, a, s]), m = (0, n.useMemo)((() => {
            if (!i) return;
            const e = (t, a) => {
              let s;
              return s = a.children ? a.children.reduce(e, []) : a?.location ? [a.location] : [], [...t, ...s]
            };
            return i.reduce(e, [])
          }), [i]), _ = Hn(m), g = _?.some(Boolean);
          return (0, z.jsx)("div", {
            className: Vn.navigationDropdown,
            ref: r,
            children: (0, z.jsxs)("button", {
              className: [Vn.navigationDropdownButton, g ? Vn.active : "", a ? Vn.open : ""].join(" "),
              type: "button",
              "data-testid": l || "navDropdown",
              onClick: u,
              children: [t, (0, z.jsx)("img", {
                src: hn,
                alt: ""
              })]
            })
          })
        },
        Yn = {
          img: "rockstargames-modules-core-headere3f505a2281df28eb1acdf2d586e7fbd",
          wide: "rockstargames-modules-core-headerc3a6d60e0087f92bbf7062fe2f36e200"
        };
      (0, o.pT)(a(3202));
      const Kn = e => {
          let {
            isWideCard: t = !1,
            size: s = 640,
            title: r,
            titleSlug: i
          } = e;
          const {
            isMobile: c
          } = (0, o.G4)(), l = (0, n.useMemo)((() => {
            let e = "";
            return t && (e = c ? a(7426)(`./${i}/mobile.png`) : a(5392)(`./${i}/desktop.png`)), e || (e = a(2781)(`./${i}.jpg`), e += `?im=Resize=${s}`), e
          }), [c, i]), [d] = (0, o.OG)(l);
          return (0, z.jsx)("div", {
            role: "img",
            "aria-label": r,
            className: [Yn.img, d ? Yn.startAnimation : "", t ? Yn.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${l})`
            }
          })
        },
        Jn = e => {
          let {
            title: t,
            titleSlug: a,
            location: s,
            gaText: r,
            gaBreadCrumb: n,
            dataTestId: i,
            ...o
          } = e;
          return (0, z.jsx)("div", {
            className: "rockstargames-modules-core-headerc257b74e850e759f3776e2a9794a88d9",
            children: (0, z.jsx)(ln, {
              location: s,
              gaText: r,
              gaBreadCrumb: n,
              dataTestId: i,
              ...o,
              children: (0, z.jsx)(Kn, {
                title: t,
                titleSlug: a
              })
            })
          }, t)
        },
        Qn = (e, t) => {
          const a = t.currentSite?.site === V.C.www ? "" : `https://${t.sites[V.C.www]}.rockstargames.com`;
          return {
            viewAllLocation: {
              domain: a,
              path: "/games"
            },
            games: [{
              titleSlug: "gta-v",
              text: e.formatMessage(cn.games_menu_gta_v),
              gaText: "Grand Theft Auto V",
              location: {
                domain: a,
                path: "/gta-v"
              },
              dataTestId: "gtav"
            }, {
              titleSlug: "gta-online",
              text: e.formatMessage(cn.games_menu_gta_online),
              gaText: "Grand Theft Auto Online",
              location: {
                domain: a,
                path: "/gta-online"
              },
              dataTestId: "gtao"
            }, {
              titleSlug: "reddeadredemption2",
              text: e.formatMessage(cn.games_menu_rdr_2),
              gaText: "Red Dead Redemption 2",
              location: {
                domain: a,
                path: "/reddeadredemption2"
              },
              dataTestId: "rdr2"
            }, {
              titleSlug: "reddeadredemption",
              text: e.formatMessage(cn.games_menu_rdr),
              gaText: "Red Dead Redemption",
              location: {
                domain: a,
                path: "/reddeadredemption"
              },
              dataTestId: "rdr"
            }, {
              titleSlug: "reddeadonline",
              text: e.formatMessage(cn.games_menu_rdr_online),
              gaText: "Red Dead Online",
              location: {
                domain: a,
                path: "/reddeadonline"
              },
              dataTestId: "rdo"
            }]
          }
        },
        Zn = () => {
          const e = (0, r.useIntl)(),
            t = K(),
            {
              viewAllLocation: a,
              games: s
            } = Qn(e, t);
          return (0, z.jsxs)("div", {
            className: "rockstargames-modules-core-headerb54d90008d9d5c9d2ca9961f28875a08",
            "data-testid": "gamesMenu",
            children: [(0, z.jsxs)("div", {
              className: "rockstargames-modules-core-headere238bd1f756892d9f47e901d6061cd4e",
              children: [(0, z.jsx)("div", {
                children: (0, z.jsx)("h2", {
                  className: "rockstargames-modules-core-headerf34a41f6769f56fbd103bc4bb78a5637",
                  children: e.formatMessage(cn.games_menu_featured)
                })
              }), (0, z.jsx)("div", {
                children: (0, z.jsxs)(ln, {
                  className: "rockstargames-modules-core-headere1980ba81f5cfd6bfbbd99a1592ca05b",
                  gaText: cn.games_menu_view_all.defaultMessage,
                  gaBreadCrumb: `Games > ${cn.games_menu_view_all.defaultMessage}`,
                  location: a,
                  children: [e.formatMessage(cn.games_menu_view_all), (0, z.jsx)("img", {
                    src: kn,
                    alt: e.formatMessage(cn.nav_view_all_games)
                  })]
                })
              })]
            }), (0, z.jsx)("div", {
              className: "rockstargames-modules-core-headerbd0033e7b183f9c1f971345fe0a865c1",
              children: s.map((e => (0, z.jsx)(Jn, {
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
        ei = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerf740c23dddb77c3fe69455d16e8339a0",
          nested: "rockstargames-modules-core-headerc8a5c0c5e7fd8bb4d7a440518ded88ce",
          subMenuDropdownButton: "rockstargames-modules-core-headercfc4966c1a8ded510368cee52389e99b",
          open: "rockstargames-modules-core-headercf2f41f3fd15eb8c1d69a8e823e02a05",
          openChevron: "rockstargames-modules-core-headere74b54f8d0744e050fdd627922dfe8fa",
          subMenuDropdownItems: "rockstargames-modules-core-headerd6787475896107163589e10d6424c63b"
        },
        ti = {
          subMenuItem: "rockstargames-modules-core-headerf9a5ae89fefa081ca3983bd7aeb89d3a",
          nested: "rockstargames-modules-core-headercec6bea81e25d4118f96b17d08dff5b6"
        },
        ai = {
          navigationLink: "rockstargames-modules-core-headerbe56f4a73c40b9eaeddb54f4c546bed7",
          active: "rockstargames-modules-core-headerd03b669696d87b8e688481ed3838f396"
        },
        si = e => [ai.navigationLink, e ? ai.active : ""].join(" "),
        ri = e => {
          let {
            text: t,
            type: a,
            location: s,
            className: r,
            isLegacy: n,
            target: i,
            nested: o,
            gaText: c,
            gaBreadCrumb: l,
            dataTestId: d,
            ...u
          } = e;
          const m = a === sn,
            _ = s ? [{
              ...s,
              end: a === an
            }] : [],
            [g] = Hn(_);
          return (0, z.jsxs)(ln, {
            className: [si(Boolean(g)), ti.subMenuItem, o ? ti.nested : "", r].join(" "),
            location: s,
            isLegacy: n,
            type: a,
            target: i,
            gaText: c,
            gaBreadCrumb: l,
            dataTestId: d,
            label: t,
            "data-ui-name": "sub-menu-item",
            ...u,
            children: [t, m && (0, z.jsx)("img", {
              alt: "",
              src: bn
            })]
          })
        },
        ni = "nav-dropdown",
        ii = e => {
          let {
            text: t,
            navChildren: a,
            gaText: s,
            gaBreadCrumb: r,
            nested: i,
            dataTestId: o,
            subMenuId: c,
            toggleOpen: l,
            isOpen: d,
            ...u
          } = e;
          const [m] = Q(), {
            track: _
          } = H(), g = (0, n.useRef)(null), [p, f] = (0, n.useState)(null);
          (0, n.useEffect)((() => {
            null === m && l(null)
          }), [m]);
          const h = e => {
              _(en(void 0, "", s, r)), l(e ? c : null)
            },
            b = e => {
              "ArrowLeft" === e.code && (h(!1), g?.current?.focus())
            };
          return (0, z.jsxs)("div", {
            className: [ei.subMenuDropdownContainer, i ? ei.nested : ""].join(" "),
            ...u,
            "data-ui-name": "sub-menu-item",
            children: [(0, z.jsxs)("button", {
              type: "button",
              className: [ei.subMenuDropdownButton, i ? ei.nested : "", d ? ei.open : ""].join(" "),
              onClick: () => h(!d),
              onKeyUp: e => {
                "Enter" === e.code && h(!0), "ArrowRight" === e.code && h(!0), "ArrowLeft" === e.code && h(!1)
              },
              ref: g,
              "data-testid": o,
              children: [t, (0, z.jsx)("img", {
                src: hn,
                className: ei.openChevron,
                alt: ""
              })]
            }), (0, z.jsx)(mn.AnimatePresence, {
              children: d && a && (0, z.jsx)(mn.motion.div, {
                className: ei.subMenuDropdownItems,
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
                transition: _n.springOpen,
                children: a.map((e => e.type === ni ? (0, z.jsx)(ii, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.gaText,
                  gaBreadCrumb: `${r} > ${e.gaText}`,
                  nested: !0,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: p === `desktop-submenu-${e.gaText}`,
                  toggleOpen: f
                }, e.gaText) : (0, z.jsx)(ri, {
                  text: e.text,
                  type: e.type,
                  location: e.location,
                  gaText: e.gaText,
                  gaBreadCrumb: `${r} > ${e.gaText}`,
                  onKeyUp: b,
                  isLegacy: e.isLegacy,
                  dataTestId: e.dataTestId,
                  nested: !0
                }, e.gaText)))
              })
            })]
          })
        },
        oi = ii,
        ci = {
          show: {
            height: "auto",
            zIndex: 101,
            display: "block",
            visibility: "visible",
            transition: {
              ..._n.springOpen
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
              ..._n.springClose
            }
          }
        },
        li = e => {
          let {
            text: t,
            gaText: a,
            type: s,
            location: r,
            navChildren: i,
            isLegacy: o,
            target: c,
            gaBreadCrumb: l,
            navKey: d,
            isHidden: u,
            dataTestId: m,
            ..._
          } = e;
          const [g, p] = (0, n.useState)(null), f = te(), [h, b] = Q(), [k, v] = (0, n.useState)(null), x = h === d, y = {
            ...x ? {
              visibility: "visible",
              display: "block"
            } : {
              visibility: "hidden",
              display: "none"
            }
          };
          (0, n.useEffect)((() => {
            b(null)
          }), [f.pathname, f.key]);
          const w = l ? `${l} > ${a}` : a ?? t;
          return s === rn ? (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)(Wn, {
              text: t,
              gaText: a,
              gaBreadCrumb: w,
              onClick: () => b(d),
              isOpen: x,
              buttonRef: u ? void 0 : p,
              navChildren: i,
              dataTestId: m,
              ..._
            }), !u && (0, z.jsxs)(z.Fragment, {
              children: [(0, z.jsx)(Pn, {
                isOpen: x,
                onMouseClick: () => b(null),
                onEscapeKey: () => b(null)
              }), (0, z.jsx)(Cn, {
                isOpen: x,
                openerRef: g,
                children: i?.map((e => e.type === rn ? (0, z.jsx)(oi, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.text,
                  gaBreadCrumb: `${w} > ${e.gaText}`,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: k === `desktop-submenu-${e.gaText}`,
                  toggleOpen: v
                }, `desktop-submenu-${e.text}`) : (0, z.jsx)(ri, {
                  location: e.location,
                  text: e.text,
                  type: e.type,
                  isLegacy: e.isLegacy,
                  target: e.target,
                  gaText: e.gaText,
                  gaBreadCrumb: `${w} > ${e.gaText}`,
                  dataTestId: e.dataTestId
                }, e.text)))
              })]
            })]
          }) : s === on ? (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)(Wn, {
              text: t,
              gaText: t,
              gaBreadCrumb: l ? `${l} > ${a}` : a,
              onClick: () => b(d),
              isOpen: x,
              dataTestId: m,
              ..._
            }), !u && (0, z.jsx)(Pn, {
              isOpen: !0,
              onMouseClick: () => b(null),
              onEscapeKey: () => b(null),
              style: y,
              children: (0, z.jsx)(mn.motion.div, {
                initial: "hidden",
                animate: x ? "show" : "hidden",
                variants: ci,
                children: (0, z.jsx)(Zn, {})
              })
            })]
          }) : r || s === nn ? (0, z.jsx)(Xn, {
            location: r,
            type: s,
            text: t,
            isLegacy: o,
            target: c,
            gaText: a,
            gaBreadCrumb: l ? `${l} > ${a}` : a,
            dataTestId: m,
            ..._
          }) : null
        },
        di = e => {
          let {
            links: t
          } = e;
          const a = (0, r.useIntl)(),
            [s, i] = (0, n.useState)(t),
            [o, c] = (0, n.useState)([]),
            l = (0, n.useRef)(null),
            d = (0, n.useRef)(null),
            u = (0, n.useCallback)((() => {
              const e = d.current;
              if (!e || !t.length) return;
              const {
                children: a
              } = e;
              let s = 0;
              const r = Array.from(a).map(((e, t) => {
                  const a = e.getBoundingClientRect().top;
                  return 0 === t && (s = a), a
                })),
                n = r.filter((e => e !== s)).length,
                o = r.findIndex((e => e > s));
              let l = o;
              o > 0 && (l = o - 1), n ? (i(t.slice(0, l)), c(t.slice(l))) : (i(t), c([]))
            }), [t, d?.current]);
          (0, n.useEffect)((() => {
            const e = new ResizeObserver(u);
            return d?.current && e.observe(d.current), () => {
              d?.current && e.unobserve(d.current)
            }
          }), [t, d?.current]);
          const m = (0, n.useMemo)((() => (0, z.jsx)("ul", {
            ref: d,
            className: "rockstargames-modules-core-headercab9e913179cb8972810a9e3c8f0e2d5",
            "aria-hidden": "true",
            children: t.map((e => (0, z.jsx)("li", {
              children: (0, z.jsx)(li, {
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
          return 0 === t.length ? null : (0, z.jsxs)("nav", {
            className: "rockstargames-modules-core-headercde7b3da7fed3efda54d7b135fca7cda",
            children: [(0, z.jsxs)("ul", {
              ref: l,
              children: [s.map((e => (0, z.jsx)("li", {
                children: (0, z.jsx)(li, {
                  text: e.text,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  navKey: e.text,
                  dataTestId: e?.dataTestId
                })
              }, `desktop-nav-link-${e.text}`))), o.length > 0 && (0, z.jsx)("li", {
                children: (0, z.jsx)(li, {
                  text: a.formatMessage(cn.nav_more_dropdown),
                  type: rn,
                  navChildren: o,
                  navKey: "more",
                  dataTestId: "navMore"
                })
              })]
            }), m]
          })
        },
        ui = () => (0, z.jsx)("div", {
          className: "rockstargames-modules-core-headerfa8f78cd04b8631f260036160a2a58b3"
        }),
        mi = {
          quickAccess: "rockstargames-modules-core-headere93164a141768ce42dff5c30e9dccee7",
          link: "rockstargames-modules-core-headerc5b43f7258f8fbba257c53cbfeb25379"
        },
        _i = () => {
          const {
            windowWidth: e
          } = (0, o.G4)(), t = K(), a = t.currentSite?.site === V.C.www ? "" : `https://${t.sites[V.C.www]}.rockstargames.com`, s = e < 1024, n = {
            hidden: {
              y: "100%",
              transition: _n.hamburgerClose
            },
            show: {
              y: 0,
              transition: {
                ..._n.hamburgerOpen,
                staggerChildren: .1,
                delayChildren: .6 * _n.hamburgerOpen.duration
              }
            }
          }, i = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: _n.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: _n.staggerFade
            }
          }, c = (0, r.useIntl)(), l = {
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
          }, d = "Quick Access";
          return (0, z.jsxs)(mn.motion.ul, {
            className: mi.quickAccess,
            variants: s ? n : gn,
            initial: "hidden",
            animate: "show",
            exit: "hidden",
            transition: s ? null : _n.quickFade,
            children: [(0, z.jsx)(mn.motion.li, {
              variants: s ? i : null,
              children: (0, z.jsxs)(ln, {
                location: l.home,
                className: [si(), mi.link].join(" "),
                gaText: cn.nav_quick_access_home.defaultMessage,
                gaBreadCrumb: `${d} > ${cn.nav_quick_access_home.defaultMessage}`,
                children: [(0, z.jsx)("img", {
                  alt: "Rockstar Games",
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg"
                }), (0, z.jsx)(r.FormattedMessage, {
                  ...cn.nav_quick_access_home
                })]
              })
            }), (0, z.jsx)(mn.motion.li, {
              variants: s ? i : null,
              children: (0, z.jsxs)(ln, {
                location: l.games,
                className: [si(), mi.link].join(" "),
                gaText: cn.nav_quick_access_games.defaultMessage,
                gaBreadCrumb: `${d} > ${cn.nav_quick_access_games.defaultMessage}`,
                children: [(0, z.jsx)("img", {
                  alt: c.formatMessage(cn.nav_quick_access_games),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg"
                }), (0, z.jsx)(r.FormattedMessage, {
                  ...cn.nav_quick_access_games
                })]
              })
            }), (0, z.jsx)(mn.motion.li, {
              variants: s ? i : null,
              children: (0, z.jsxs)(ln, {
                location: l.newswire,
                className: [si(), mi.link].join(" "),
                gaText: cn.nav_quick_access_newswire.defaultMessage,
                gaBreadCrumb: `${d} > ${cn.nav_quick_access_newswire.defaultMessage}`,
                children: [(0, z.jsx)("img", {
                  alt: c.formatMessage(cn.nav_quick_access_newswire),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg"
                }), (0, z.jsx)(r.FormattedMessage, {
                  ...cn.nav_quick_access_newswire
                })]
              })
            })]
          })
        },
        gi = "quick-access-menu",
        pi = e => {
          let {
            site: t,
            brand: a,
            hideRockstarBrand: s,
            hideQuickAccess: i
          } = e;
          const c = (0, r.useIntl)(),
            {
              windowWidth: l
            } = (0, o.G4)(),
            [d, u] = (0, n.useState)(null),
            [m, _] = (0, n.useState)(null),
            [g, p] = Q(),
            f = K(),
            h = g === gi,
            b = i ? cn.nav_rockstargames_home : cn.nav_rockstargames_logo,
            k = {
              domain: f.currentSite?.site === V.C.www ? "" : `https://${f.sites[V.C.www]}.rockstargames.com`,
              path: "/"
            },
            v = l < 1024,
            {
              styles: x,
              attributes: y,
              forceUpdate: w
            } = (0, yn.usePopper)(d, m, {
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
          return (0, n.useEffect)((() => {
            w?.()
          }), [d, h]), (0, z.jsxs)("div", {
            className: "rockstargames-modules-core-headerd99d9f9afe861a7a77014389aef54a38",
            children: [!s && (0, z.jsxs)("div", {
              className: "rockstargames-modules-core-headerb2086bd4056dbe09919cbaf83995492a",
              children: [(v || i) && (0, z.jsx)(ln, {
                location: k,
                gaText: cn.nav_rockstargames_home.defaultMessage,
                gaBreadCrumb: cn.nav_rockstargames_home.defaultMessage,
                "aria-label": c.formatMessage(b),
                children: (0, z.jsx)(ui, {})
              }), !v && !i && (0, z.jsx)("button", {
                type: "button",
                className: "rockstargames-modules-core-headerce398256dbceaf786d9b15bd158f95c4",
                onClick: () => p(gi),
                "aria-label": c.formatMessage(b),
                ref: u,
                children: (0, z.jsx)(ui, {})
              }), h && !i && (0, z.jsxs)(z.Fragment, {
                children: [(0, z.jsx)(Pn, {
                  isOpen: h,
                  onEscapeKey: () => p(null),
                  onMouseClick: () => p(null)
                }), (0, z.jsx)("div", {
                  className: "rockstargames-modules-core-headere7fda99032abe461d1f7d21a312ff144",
                  style: {
                    ...x.popper
                  },
                  ref: _,
                  ...y.popper,
                  children: (0, z.jsx)(_i, {})
                })]
              })]
            }), a && (0, z.jsxs)(z.Fragment, {
              children: [!s && (0, z.jsx)("div", {
                className: "rockstargames-modules-core-headerba2ee4c1504443a7a7e661976275dd57"
              }), (0, z.jsx)("div", {
                className: "rockstargames-modules-core-headerf5af9e8fa3cfb477893fc0db94d1c940",
                children: (0, z.jsx)("img", {
                  className: "rockstargames-modules-core-headerba5dc385815ad688312f1b356d25ee34",
                  "data-brand": t,
                  alt: t,
                  src: a
                })
              })]
            })]
          })
        },
        fi = {
          header: "rockstargames-modules-core-headerba168721a02b6fec362956476eae196b",
          fluid: "rockstargames-modules-core-headerb02f12ae3c6aeaec9dc5e71808fd8d81",
          fixed: "rockstargames-modules-core-headerac860decbfc491dada043566ce5dd225",
          title: "rockstargames-modules-core-headere0fa111cf931d00ad6cf3d451df325b8",
          quickAccessWrapper: "rockstargames-modules-core-headerb109f17ebaf1169bdc4ad5dbd4b5923f"
        },
        hi = e => {
          let {
            headerRef: t,
            data: a
          } = e;
          const s = (0, n.useMemo)((() => {
              const {
                currentSite: e
              } = (0, V.A)();
              if (e?.site === V.C.socialClub) return {
                zIndex: 8600
              }
            }), []),
            r = Zs(a.links);
          return (0, z.jsxs)("header", {
            ref: t,
            className: [fi.header, fi.fixed].join(" "),
            style: s,
            children: [(0, z.jsx)("div", {
              className: fi.title,
              children: (0, z.jsx)(pi, {
                site: a.site,
                brand: a.brand,
                hideQuickAccess: a.hideQuickAccess || !1
              })
            }), (0, z.jsx)("div", {
              className: fi.fluid,
              children: (0, z.jsx)(di, {
                links: r
              })
            }), (0, z.jsx)("div", {
              className: fi.fixed,
              children: (0, z.jsx)(Fn, {
                cta: a.cta,
                includeSearch: !a.hideSearch
              })
            })]
          })
        },
        bi = {
          hamburger: "rockstargames-modules-core-headerc54bfcb61531ce2347a368419b15099e",
          open: "rockstargames-modules-core-headerca0f613e9539e6de1ff5596e4622998d"
        },
        ki = e => {
          let {
            toggle: t,
            isMenuOpen: a
          } = e;
          const {
            track: s
          } = H();
          return (0, z.jsx)("div", {
            className: [bi.hamburger, a ? bi.open : ""].join(" "),
            children: (0, z.jsxs)("button", {
              onClick: () => {
                s({
                  event: a ? "nav_close" : "nav_open",
                  element_placement: "Global Nav"
                }), t?.()
              },
              title: "Open Menu",
              type: "button",
              children: [(0, z.jsx)("span", {}), (0, z.jsx)("span", {}), (0, z.jsx)("span", {})]
            })
          })
        },
        vi = {
          header: "rockstargames-modules-core-headerfb82b02e2df2877785d54800828cef99",
          title: "rockstargames-modules-core-headerecb8c10e74ddea7487d8ad244a4e48bb",
          nav: "rockstargames-modules-core-headercb7410572f399324b7b5fb184713f54c",
          fullMenuOpen: "rockstargames-modules-core-headera1d75062757b35018da79ce56eb15b3e",
          navContainer: "rockstargames-modules-core-headerb0351e9b5d17dc841b86cf8eb2486b86",
          searchOpen: "rockstargames-modules-core-headerfe3b91c539d7997a462c90d5c831fecc",
          overlay: "rockstargames-modules-core-headerf64de5781babd0a51e092b77226aceb0"
        };
      var xi = a(821);
      const yi = e => {
          let {
            text: t
          } = e;
          const {
            isMobile: a
          } = (0, o.G4)(), s = (0, r.useIntl)(), i = K(), {
            viewAllLocation: c,
            games: l
          } = Qn(s, i), [d, u] = (0, n.useState)(2.5);
          return (0, n.useEffect)((() => {
            u(a ? 2.5 : 3.5)
          }), [a]), (0, z.jsxs)("div", {
            className: "rockstargames-modules-core-headeraa2723b31994eccf90bdaddb160c6327",
            "data-testid": "gamesMenu",
            children: [(0, z.jsxs)("div", {
              className: "rockstargames-modules-core-headerc0ff6234ad827ad0253e0a41285a57b4",
              children: [(0, z.jsx)("h2", {
                children: t
              }), (0, z.jsxs)(ln, {
                gaText: cn.nav_view_all_games.defaultMessage,
                gaBreadCrumb: `Games > ${cn.nav_view_all_games.defaultMessage}`,
                location: c,
                className: ai.navigationLink,
                children: [(0, z.jsx)(r.FormattedMessage, {
                  ...cn.nav_view_all_games
                }), (0, z.jsx)("img", {
                  src: kn,
                  alt: s.formatMessage(cn.nav_view_all_games)
                })]
              })]
            }), (0, z.jsx)(xi.RC, {
              className: "rockstargames-modules-core-headerf7e74e3a912223c8415039d7d12a0094",
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: d,
              speed: 700,
              children: l.map((e => (0, z.jsx)(xi.qr, {
                className: "rockstargames-modules-core-headerd4ae0014e8dd232a33aa354b013838cb",
                children: (0, z.jsx)(Jn, {
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
        wi = e => {
          let {
            children: t,
            isOpen: a
          } = e;
          return (0, z.jsx)(mn.AnimatePresence, {
            children: a && (0, z.jsx)(mn.motion.div, {
              className: "rockstargames-modules-core-headerde84fd256683e1fde32a8139797fdab4",
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
              transition: _n.springOpen,
              children: t
            })
          })
        },
        ji = {
          subMenuDropdownContainer: "rockstargames-modules-core-headere05030d75a722d52b62cf6ff22d8a613",
          subMenuDropdownButton: "rockstargames-modules-core-headered88c65cedc74b192d1843334efb9060",
          open: "rockstargames-modules-core-headerc6e5a40e69aeb21630aab61bfefbcb78",
          subMenuDropdownItems: "rockstargames-modules-core-headere575c1fd5458576d4db484c7735b3e00"
        },
        Ci = {},
        Si = e => {
          let {
            text: t,
            dataTestId: a,
            type: s,
            target: r,
            location: n,
            className: i,
            gaText: o,
            gaBreadCrumb: c,
            isLegacy: l,
            onClick: d,
            ...u
          } = e;
          const [m] = Hn(n ? [n] : []), _ = s === sn;
          return (0, z.jsxs)(ln, {
            className: [si(Boolean(m)), Ci.subMenuItem, i].join(" "),
            dataTestId: a,
            location: n,
            type: s,
            target: r,
            gaText: o,
            gaBreadCrumb: c,
            onClick: d,
            isLegacy: l,
            label: t,
            ...u,
            children: [t, _ && (0, z.jsx)("img", {
              alt: "",
              src: bn
            })]
          })
        },
        Ni = e => {
          let {
            text: t,
            dataTestId: a,
            navChildren: s,
            gaText: r,
            gaBreadCrumb: n,
            onClick: i,
            isSubMenuOpen: o,
            toggleMenuOpen: c,
            ...l
          } = e;
          const {
            track: d
          } = H();
          return (0, z.jsxs)("div", {
            className: ji.subMenuDropdownContainer,
            ...l,
            children: [(0, z.jsxs)("button", {
              type: "button",
              "data-testid": a,
              className: [ji.subMenuDropdownButton, o ? ji.open : ""].join(" "),
              onClick: () => {
                d(en(void 0, "", r, n)), c()
              },
              children: [t, (0, z.jsx)("img", {
                src: hn,
                alt: ""
              })]
            }), (0, z.jsx)(mn.AnimatePresence, {
              children: o && (0, z.jsx)(mn.motion.div, {
                className: ji.subMenuDropdownItems,
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
                transition: _n.springOpen,
                children: s.map((e => (0, z.jsx)(Si, {
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
        Mi = e => {
          let {
            dataTestId: t,
            type: a,
            target: s,
            location: r,
            navChildren: i,
            gaBreadCrumb: o,
            onClick: c,
            isOpen: l,
            setIsOpen: d,
            text: u,
            gaText: m,
            ..._
          } = e;
          const [g, p] = (0, n.useState)(null), [f] = Hn(r ? [r] : []), h = o ? `${o} > ${m}` : m;
          if (a === rn) return (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)(Wn, {
              text: u,
              dataTestId: t,
              gaText: m,
              gaBreadCrumb: h,
              onClick: () => d(),
              isOpen: l,
              ..._
            }), (0, z.jsx)(wi, {
              isOpen: l,
              children: i?.map(((e, t) => e.type === rn ? (0, z.jsx)(Ni, {
                text: e.text,
                dataTestId: e.dataTestId,
                navChildren: e.children || [],
                gaText: e.gaText,
                gaBreadCrumb: `${h} > ${e.gaText}`,
                onClick: c,
                isSubMenuOpen: g === t,
                toggleMenuOpen: () => p(g !== t ? t : null)
              }, e.gaText) : (0, z.jsx)(Si, {
                location: e.location,
                dataTestId: e.dataTestId,
                target: e.target,
                text: e.text,
                type: e.type,
                gaText: e.gaText,
                gaBreadCrumb: `${h} > ${e.gaText}`,
                onClick: c
              }, e.gaText)))
            })]
          });
          if (a === on) return (0, z.jsx)(yi, {
            text: u
          });
          const b = a === sn;
          return (0, z.jsxs)(ln, {
            location: r,
            dataTestId: t,
            type: a,
            target: s,
            gaText: m,
            gaBreadCrumb: h,
            className: [si(Boolean(f)), f ? "rockstargames-modules-core-headerbb3a29ff840b8e147b4b428a8cb12c36" : ""].join(" "),
            label: u,
            ..._,
            children: [u, b && (0, z.jsx)("img", {
              alt: "",
              src: bn
            })]
          })
        },
        Ti = e => {
          let {
            links: t,
            cta: a,
            onClick: s
          } = e;
          const [r, i] = (0, n.useState)(null);
          return (0, z.jsx)("div", {
            className: "rockstargames-modules-core-headerb0cbec02b8ccfcde2face285e09cf904",
            children: (0, z.jsxs)("ul", {
              children: [t.map(((e, t) => (0, z.jsx)(mn.motion.li, {
                variants: gn,
                transition: _n.staggerFade,
                children: (0, z.jsx)(Mi, {
                  text: e.text,
                  gaText: e.gaText,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  onClick: s,
                  isOpen: r === t,
                  setIsOpen: () => i(r !== t ? t : null)
                })
              }, e.text))), a && (0, z.jsx)(mn.motion.li, {
                className: "rockstargames-modules-core-headera0ca12fb49ead359e156725dd9e79c04",
                variants: gn,
                transition: _n.staggerFade,
                children: (0, z.jsx)(un, {
                  variant: a.variant,
                  dataTestId: a.dataTestId,
                  location: a.location,
                  gaEvent: a.ga,
                  gaText: a.gaText,
                  onClick: s,
                  children: a.text
                })
              })]
            })
          })
        },
        {
          W1: Ei
        } = s,
        Pi = e => {
          let {
            headerRef: t,
            data: a
          } = e;
          const [s, r] = (0, n.useState)(!1), [i, c] = (0, n.useState)(!1), {
            isSearchPage: l,
            forceSearch: d
          } = ee(), u = te(), {
            pathname: m,
            hash: _,
            search: g
          } = u, p = ae(), {
            currentSite: f
          } = K(), h = Zs(a.links), {
            setBodyIsLocked: b
          } = (0, o.bJ)("HeaderMobile"), k = {
            show: {
              height: "auto",
              paddingBottom: s && a.brand ? "var(--global-navigation-height)" : "",
              transition: {
                ..._n.hamburgerOpen,
                staggerChildren: .05
              }
            },
            hidden: {
              height: 0,
              paddingBottom: 0,
              transition: _n.hamburgerClose
            }
          };
          return (0, n.useEffect)((() => {
            b(!!s)
          }), [s]), (0, n.useEffect)((() => {
            c(!1), r(!1)
          }), [m, _, g]), (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsxs)("header", {
              ref: t,
              className: vi.header,
              children: [(0, z.jsx)(ki, {
                toggle: () => {
                  r(!s), c(!1)
                },
                isMenuOpen: s
              }), (0, z.jsx)("div", {
                className: vi.title,
                children: (0, z.jsx)(pi, {
                  site: a.site,
                  brand: a.brand,
                  hideRockstarBrand: !!a.brand
                })
              }), (0, z.jsx)("div", {
                children: (0, z.jsx)(Fn, {
                  includeSearch: !1,
                  isMobile: !0
                })
              })]
            }), (0, z.jsx)(mn.AnimatePresence, {
              children: (s || i || l && f?.site === V.C.www) && (0, z.jsxs)(z.Fragment, {
                children: [(0, z.jsxs)(mn.motion.nav, {
                  className: [vi.nav, s && a.brand ? vi.paddingBottom : "", s ? vi.fullMenuOpen : ""].join(" "),
                  variants: k,
                  animate: "show",
                  initial: "hidden",
                  exit: "hidden",
                  children: [!a.hideSearch && (0, z.jsx)(Dn, {
                    isSearchOpen: i || l && d,
                    setIsSearchOpen: c
                  }), s && (0, z.jsx)("div", {
                    className: [vi.navContainer, i ? vi.searchOpen : ""].join(" "),
                    children: (0, z.jsx)(Ti, {
                      links: h,
                      cta: a.cta,
                      onClick: () => {
                        r(!1), c(!1)
                      }
                    })
                  })]
                }), s && a.brand && !a.hideQuickAccess && (0, z.jsx)(_i, {}), !l && (0, z.jsx)(mn.motion.div, {
                  className: vi.overlay,
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  exit: {
                    opacity: 0,
                    transition: _n.hamburgerClose
                  },
                  transition: _n.hamburgerOpen
                })]
              })
            }), (0, z.jsx)(Ei, {
              location: u,
              onNavigate: p
            })]
          })
        };
      a(6649);
      const Ii = () => {
          const e = (0, n.useRef)(null),
            t = "__spatialNavigation__" in window ? window.__spatialNavigation__ : null;
          return (0, n.useEffect)((() => {
            t && t.enableExperimentalAPIs(!0)
          }), []), (0, z.jsx)("button", {
            ref: e,
            className: "rockstargames-modules-core-headera2c2d6266e7d0b8578c3d4233b860fd1",
            onClick: () => {
              const a = document.querySelector("header");
              if (t && a) {
                let s = t.findCandidates(a, "down", {
                  mode: "all"
                }).filter((t => !a.contains(t) && e.current !== t));
                s.length > 0 && s[0].focus()
              }
            },
            children: (0, z.jsx)(r.FormattedMessage, {
              ...cn.accessibility_skip_button
            })
          })
        },
        zi = {
          pillBtn: "rockstargames-modules-core-headerbf04d62610dccd3de9cdc1bccf4228fd",
          selected: "rockstargames-modules-core-headere421859f9cdc4683a6d00d44cf01e92e",
          globalNavigationRoot: "rockstargames-modules-core-headercbf9895f81110bad4f8cf856f1f6e982",
          large: "rockstargames-modules-core-headerd032f5b9582517bc0947b67624a9c474",
          badge: "rockstargames-modules-core-headere007358b76ec1c2d67c045d4fc369264",
          globalNavigationSpacer: "rockstargames-modules-core-headerac60529f4d807a42281a5057148ad498",
          globalNavigationSearchSpacer: "rockstargames-modules-core-headerf0d13e5f13742ed9e8d9eb35db349f19"
        };
      se.gsap.registerPlugin(is, Os, Qs);
      const Oi = () => {
          const {
            windowWidth: e
          } = (0, o.G4)(), t = (() => {
            const e = (0, n.useContext)(W);
            if (void 0 === e) throw new Error("useNavigationData must be used within a Navigation Provider");
            return e.navigationData
          })(), {
            isSearchPage: a,
            forceSearch: s
          } = ee(), r = e < 1024, [i, c] = (0, n.useState)(!1), l = (0, n.useRef)(null), d = (0, n.useRef)(null);
          (0, n.useEffect)((() => {
            c(!0)
          }), []);
          const u = (0, n.useCallback)((e => {
            const t = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
            e.direction === l?.current || t ? t && e?.animation?.pause() : -1 === e.direction ? e.animation?.reverse() : e.animation?.play();
            const a = "data-show-more-content";
            1 === e.direction ? document.body.setAttribute(a, "") : document.body.removeAttribute(a), l.current = e.direction
          }), []);
          (0, n.useEffect)((() => {
            const e = se.gsap.context((() => {
              d?.current && se.gsap.set(d.current, {
                paused: !0,
                scrollTrigger: {
                  onUpdate: e => {
                    u(e)
                  },
                  start: "140px",
                  end: 999999999
                }
              })
            }));
            return () => e.revert()
          }), [d?.current]);
          const m = r ? (0, z.jsx)(Pi, {
            headerRef: d,
            data: t
          }) : (0, z.jsx)(hi, {
            headerRef: d,
            data: t
          });
          return (0, z.jsxs)("div", {
            className: zi.globalNavigationRoot,
            "data-header-initialized": i,
            children: [(0, z.jsx)(Ii, {}), (0, z.jsx)("div", {
              className: [zi.globalNavigationSpacer, a && s ? zi.globalNavigationSearchSpacer : ""].join(" ")
            }), m]
          })
        },
        Ri = e => {
          let {
            navData: t,
            searchConfig: a,
            routeOptions: s,
            location: n,
            onNavigate: i
          } = e;
          const {
            hasProvider: c
          } = D(), [{
            iso: l
          }] = (0, r.getLocale)();
          return c ? (0, z.jsx)(o.uU, {
            children: (0, z.jsx)(r.IntlProvider, {
              locales: X,
              lang: l,
              children: (0, z.jsx)(G, {
                children: (0, z.jsx)(Y, {
                  navData: t,
                  location: n,
                  onNavigate: i,
                  searchConfig: a,
                  routeOptions: s,
                  children: (0, z.jsx)(Oi, {})
                })
              })
            })
          }) : (0, z.jsx)(o.uU, {
            children: (0, z.jsx)(r.IntlProvider, {
              locales: X,
              lang: l,
              children: (0, z.jsx)(L, {
                children: (0, z.jsx)(G, {
                  children: (0, z.jsx)(Y, {
                    navData: t,
                    location: n,
                    onNavigate: i,
                    searchConfig: a,
                    routeOptions: s,
                    children: (0, z.jsx)(Oi, {})
                  })
                })
              })
            })
          })
        }
    },
    1534: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => _
      });
      var s = a(9961),
        r = a(7327),
        n = a.n(r),
        i = a(4252),
        o = a.n(i),
        c = a(5866),
        l = a(5691);
      const {
        apiHost: d
      } = (0, c.A)(), u = (0, l.t)(document.documentElement.lang), m = {}, _ = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: a = {},
          query: r = null,
          pingBearer: i,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: _ = null
          } = await (i?.()) ?? {}, g = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let p = `${d}/${e}`;
          if (null === r || o().isEmpty(r) || (p += `?${new URLSearchParams(r)}`), !_ && c) return null;
          _ && (g.Authorization = `Bearer ${_}`);
          const f = {
              headers: g
            },
            h = n().all([f, t, a]),
            b = JSON.stringify({
              ...h,
              url: p
            }),
            k = await (0, s.sc)(b);
          if (l) {
            if (m[k]?.response) return m[k].response;
            if (m[k]?.loading) return {
              error: null,
              result: null
            };
            m[k] = {
              loading: !0
            }
          }
          const v = await fetch(p, h),
            x = await v.json();
          return l && (m[k] = {
            response: x,
            loading: !1
          }), x
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    5866: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => o
      });
      const s = window?.env?.sc,
        r = window?.env?.marketing,
        n = e => {
          let {
            apiHost: t,
            authHost: a,
            clientId: n,
            graphEnv: i,
            scHost: o,
            hostname: c,
            cdnBase: l,
            key: d,
            marketingAuthTLD: u
          } = e;
          const m = s?.apiHost ?? t,
            _ = s?.authHost ?? a,
            g = s?.cdnBase ?? l,
            p = s?.clientId ?? n,
            f = r?.marketingAuthTLD ?? u,
            h = s?.scHost ?? o;
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: s?.graphEnv ?? i,
            host: h,
            hostname: c,
            cdnBase: g,
            key: d,
            clientId: p,
            authHost: _,
            login: `https://${_}.rockstargames.com/connect/authorize/${p}`,
            silentCheck: `https://${_}.rockstargames.com/connect/cors/check/${p}`,
            signup: `https://${_}.rockstargames.com/create/?cid=${p}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/auth/ping-bearer.json`
          }
        },
        i = [n({
          key: "prod",
          clientId: "rsg",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), n({
          key: "sc-prod",
          clientId: "socialclub",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        o = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = i.find((t => {
              let {
                key: a
              } = t;
              return a === e
            })) ?? null;
            if (t) return t
          }
          return i.find((e => {
            let {
              hostname: t
            } = e;
            return new RegExp(t).test(document.location.hostname)
          })) || i[0]
        }
    },
    5691: (e, t, a) => {
      "use strict";
      a.d(t, {
        t: () => s
      });
      const s = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    6279: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(714),
        r = a.n(s);
      const n = (0, a(3963).A)(),
        i = n?.id,
        o = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        c = e => {
          const t = {
            ...e,
            environment: i,
            display_type: o
          };
          r().dataLayer({
            dataLayer: t
          })
        }
    },
    5111: (e, t, a) => {
      "use strict";
      a.d(t, {
        bn: () => m,
        Ym: () => n,
        OG: () => o,
        OH: () => l
      });
      var s = a(9807),
        r = a(7679);
      const n = () => (0, s.qs)(r.Hg);
      var i = a(1403);
      const o = e => {
        const [t, a] = (0, i.useState)(null), [s, r] = (0, i.useState)(null), [n, o] = (0, i.useState)({});
        return (0, i.useLayoutEffect)((() => {
          let t = new Image,
            s = !1;
          return t.addEventListener("load", (() => {
            o({
              width: t.width,
              height: t.height
            }), t = null, s || a(!0)
          })), t.addEventListener("error", (() => {
            t = null, s || (a(!1), r(!0))
          })), t.src = e, () => {
            s = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, n]
      };
      a(9779), a(1534), a(4277);
      const c = "__RS_CUSTOM_EVENTS__";
      window[c] || (window[c] = {});
      const l = () => {
        const e = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          const a = (e => `rsCustomEvent:${e}`)(e),
            s = new CustomEvent(a, {
              detail: t
            });
          window[c][a] || (window[c][a] = {
            eventQueue: [],
            subscribers: []
          }), window[c][a].eventQueue.push(s), window[c][a].subscribers.forEach((e => {
            e(s.detail)
          }))
        };
        return (0, i.useMemo)((() => ({
          dispatch: e
        })), [])
      };
      a(9269), a(6269);
      var d = a(4369),
        u = a(1977);
      const m = () => {
        const [e, t] = (0, i.useState)(!1), {
          deviceMemory: a
        } = (0, d.XB)(), {
          effectiveConnectionType: s
        } = (0, d.M5)(), {
          numberOfLogicalProcessors: r
        } = (0, d.xV)(), {
          saveData: n
        } = (0, d.zp)(), o = (() => {
          const [e, t] = (0, i.useState)(!1);
          return (0, i.useEffect)((() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              a = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", a), () => {
              e.removeEventListener("change", a)
            }
          }), []), e
        })(), c = () => {
          const i = (() => {
            const e = e => !1 === e;
            if (o) return !1;
            if (u.n8 || u.lT || u.w || u.UX) return !1;
            const t = "Safari" === u.C0,
              i = "Firefox" === u.C0,
              c = s && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(s),
              l = r && r >= 4,
              d = a && a >= 4;
            return !(e(!n) || e(c) || e(l) || !t && !i && e(d))
          })();
          i !== e && t(i)
        };
        return (0, i.useEffect)((() => (c(), window.addEventListener("online", c), window.addEventListener("offline", c), window.addEventListener("devicememory", c), () => {
          window.removeEventListener("online", c), window.removeEventListener("offline", c), window.removeEventListener("devicememory", c)
        })), [a, s, e, r, n, o]), e
      }
    },
    4277: (e, t, a) => {
      "use strict";
      a.d(t, {
        uU: () => M,
        Ax: () => p.A,
        S0: () => f.A,
        pT: () => d,
        _h: () => v,
        tI: () => h.t,
        bJ: () => g,
        Ym: () => u.Ym,
        OG: () => u.OG,
        L$: () => y,
        G4: () => T,
        JG: () => o
      }), a(6279);
      var s = a(6632),
        r = a(9807);
      a(7679);
      var n = a(1403);
      a(4252);
      var i = a(313);
      const o = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return a => ((e, t, a) => {
          const n = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
            const {
              data: t
            } = (0, r.IT)(i.Translations, {
              variables: {
                config: e
              }
            });
            return t ? e => t?.translations.find((t => t.key === e))?.value ?? e : null
          }(a);
          return n ? (0, s.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, a, t)
      };
      class c {
        constructor(e, t, a) {
          let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = a, this.alias = s
        }
      }
      const l = Object.freeze({
        pc: new c("pc", "PC", 8),
        ps: new c("ps", "PlayStation", 3),
        ps3: new c("ps3", "PlayStation 3", 2),
        ps4: new c("ps4", "PlayStation 4", 11),
        ps5: new c("ps5", "PlayStation 5", 20),
        xbox: new c("xbox", "Xbox", 4),
        xbox360: new c("xbox360", "Xbox 360", 1),
        xboxone: new c("xboxone", "Xbox One", 12),
        xboxsx: new c("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
        switch: new c("switch", "Nintendo Switch™", 18),
        nintendoswitch: new c("nintendoswitch", "Nintendo Switch™", 18),
        applestore: new c("applestore", "App Store", 102),
        googleplay: new c("googleplay", "Google Play", 1023),
        appStore: new c("app_store", "App Store", 102),
        googlePlay: new c("ggle_play", "Google Play", 1023)
      });
      Object.freeze(Object.values(l));
      const d = e => e.keys().forEach(e);
      var u = a(5111);
      const m = (0, r.hp)("@rockstargames/utils")("bodyIsScrollableReactive", {}),
        _ = "data-disallow-body-scroll",
        g = e => {
          const t = (0, r.qs)(m),
            a = Object.values(t).some((e => !!e));
          return (0, n.useEffect)((() => {
            a ? document.documentElement.setAttribute(_, "true") : document.documentElement.removeAttribute(_)
          }), [a]), {
            bodyShouldLock: a,
            setBodyIsLocked: a => (e => m(e))({
              ...t,
              [e]: a
            })
          }
        };
      var p = a(1534),
        f = a(5866),
        h = a(5691);
      const b = "rockstar-games-web";
      let k;
      try {
        const e = window.localStorage.getItem(b);
        k = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        k = {}
      }
      const v = (0, r.UT)(k),
        x = e => {
          let {
            key: t,
            value: a
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const s = {
            ...v() ?? {}
          };
          return s[t] = a, null === a && delete s[t], window.localStorage.setItem(b, JSON.stringify(s)), v(s), s
        },
        y = () => ({
          lsSettings: (0, r.qs)(v),
          settingsReactive: v,
          mutateLSSettings: x
        });
      a(9269);
      const w = {
          xxs: {
            min: 0,
            max: 479
          },
          xs: {
            min: 480,
            max: 767
          },
          sm: {
            min: 768,
            max: 991
          },
          md: {
            min: 992,
            max: 1199
          },
          lg: {
            min: 1200,
            max: 1439
          },
          xl: {
            min: 1440,
            max: 1919
          },
          xxl: {
            min: 1920,
            max: 99999
          }
        },
        j = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            a = w;
          return Object.keys(w).map((t => {
            const {
              min: s,
              max: r
            } = w[t], n = e >= s && e <= r, i = e >= s;
            a[t] = {
              activeExact: n,
              activeMin: i,
              min: s,
              max: r
            }
          })), {
            isMobile: e < w.sm.min,
            isTablet: e < w.md.max,
            breakpoints: a,
            windowWidth: e,
            windowHeight: t
          }
        },
        C = (0, n.createContext)(j()),
        {
          Consumer: S
        } = C,
        N = (0, r.UT)(j()),
        M = e => {
          let {
            children: t
          } = e;
          const a = (0, r.qs)(N);
          return (0, n.useEffect)((() => {
            const e = () => {
              N(j())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, s.jsx)(C.Provider, {
            value: a,
            children: t
          })
        },
        T = () => (0, n.useContext)(C);
      a(6269)
    },
    9269: (e, t, a) => {
      "use strict";
      var s = a(1403);
      a(6632);
      const r = (0, s.createContext)(),
        {
          Consumer: n
        } = r
    },
    6269: (e, t, a) => {
      "use strict";
      var s = a(9807);
      a(1403), a(6632), (0, s.UT)(!1)
    },
    4255: e => {
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
          var s = e.type;
          "NamedType" === s.kind && t.add(s.name.value)
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
      var s = {};

      function r(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.userData = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [r(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var n = s[t] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var s = r(e, t);
          s && a.definitions.push(s)
        })), a
      }(t, "userData")
    },
    313: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Translations"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "config"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "translations"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "config"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "config"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "value"
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
          end: 144
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && t.add(s.name.value)
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
        body: "query Translations($locale: String!, $config: String!) {\n    translations(locale: $locale, config: $config) {\n        key\n        value\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.Translations = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [r(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var n = s[t] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var s = r(e, t);
          s && a.definitions.push(s)
        })), a
      }(t, "Translations")
    },
    3202: (e, t, a) => {
      var s = {
        "./GTAOnline.jpg": 46,
        "./GTATrilogy.jpg": 8679,
        "./IV.jpg": 7723,
        "./V.jpg": 5007,
        "./VI/desktop.png": 4699,
        "./VI/mobile.png": 7821,
        "./agent.jpg": 5682,
        "./beaterator.jpg": 5024,
        "./bully-scholarshipedition.jpg": 8910,
        "./bully.jpg": 8205,
        "./chinatownwars.jpg": 8057,
        "./episodesfromlibertycity.jpg": 7955,
        "./grandtheftauto-gba.jpg": 9826,
        "./grandtheftauto3.jpg": 3686,
        "./gta-online.jpg": 4747,
        "./gta-v.jpg": 4342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 2217,
        "./gtacomplete.jpg": 3970,
        "./gtalondon.jpg": 3201,
        "./italianjob.jpg": 5595,
        "./lanoire-vr-case-files.jpg": 7743,
        "./lanoire.jpg": 1451,
        "./lanoire_2.jpg": 7680,
        "./libertycitystories.jpg": 6766,
        "./manhunt.jpg": 1490,
        "./manhunt2.jpg": 5010,
        "./maxpayne.jpg": 5006,
        "./maxpayne2.jpg": 7126,
        "./maxpayne3.jpg": 5651,
        "./midnightclub.jpg": 7741,
        "./midnightclub2.jpg": 5171,
        "./midnightclub3.jpg": 2006,
        "./midnightclubLA-complete.jpg": 9550,
        "./midnightclubLA.jpg": 6204,
        "./oni.jpg": 4417,
        "./rdr-goty.jpg": 6647,
        "./reddeadonline.jpg": 1271,
        "./reddeadredemption.jpg": 1789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 3195,
        "./rockstar-games-collection-edition-1.jpg": 3564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 1748,
        "./smugglersrun.jpg": 499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 9528,
        "./stateofemergency.jpg": 5582,
        "./tabletennis.jpg": 724,
        "./theballadofgaytony.jpg": 4786,
        "./thelostanddamned.jpg": 4540,
        "./thewarriors.jpg": 173,
        "./undeadnightmare.jpg": 1919,
        "./vicecity.jpg": 1527,
        "./vicecitystories.jpg": 3048,
        "./wildmetal.jpg": 1652
      };

      function r(e) {
        var t = n(e);
        return a(t)
      }

      function n(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 3202
    },
    2781: (e, t, a) => {
      var s = {
        "./GTAOnline.jpg": 46,
        "./GTATrilogy.jpg": 8679,
        "./IV.jpg": 7723,
        "./V.jpg": 5007,
        "./agent.jpg": 5682,
        "./beaterator.jpg": 5024,
        "./bully-scholarshipedition.jpg": 8910,
        "./bully.jpg": 8205,
        "./chinatownwars.jpg": 8057,
        "./episodesfromlibertycity.jpg": 7955,
        "./grandtheftauto-gba.jpg": 9826,
        "./grandtheftauto3.jpg": 3686,
        "./gta-online.jpg": 4747,
        "./gta-v.jpg": 4342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 2217,
        "./gtacomplete.jpg": 3970,
        "./gtalondon.jpg": 3201,
        "./italianjob.jpg": 5595,
        "./lanoire-vr-case-files.jpg": 7743,
        "./lanoire.jpg": 1451,
        "./lanoire_2.jpg": 7680,
        "./libertycitystories.jpg": 6766,
        "./manhunt.jpg": 1490,
        "./manhunt2.jpg": 5010,
        "./maxpayne.jpg": 5006,
        "./maxpayne2.jpg": 7126,
        "./maxpayne3.jpg": 5651,
        "./midnightclub.jpg": 7741,
        "./midnightclub2.jpg": 5171,
        "./midnightclub3.jpg": 2006,
        "./midnightclubLA-complete.jpg": 9550,
        "./midnightclubLA.jpg": 6204,
        "./oni.jpg": 4417,
        "./rdr-goty.jpg": 6647,
        "./reddeadonline.jpg": 1271,
        "./reddeadredemption.jpg": 1789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 3195,
        "./rockstar-games-collection-edition-1.jpg": 3564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 1748,
        "./smugglersrun.jpg": 499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 9528,
        "./stateofemergency.jpg": 5582,
        "./tabletennis.jpg": 724,
        "./theballadofgaytony.jpg": 4786,
        "./thelostanddamned.jpg": 4540,
        "./thewarriors.jpg": 173,
        "./undeadnightmare.jpg": 1919,
        "./vicecity.jpg": 1527,
        "./vicecitystories.jpg": 3048,
        "./wildmetal.jpg": 1652
      };

      function r(e) {
        var t = n(e);
        return a(t)
      }

      function n(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 2781
    },
    5392: (e, t, a) => {
      var s = {
        "./VI/desktop.png": 4699
      };

      function r(e) {
        var t = n(e);
        return a(t)
      }

      function n(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 5392
    },
    7426: (e, t, a) => {
      var s = {
        "./VI/mobile.png": 7821
      };

      function r(e) {
        var t = n(e);
        return a(t)
      }

      function n(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 7426
    },
    8128: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    1764: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    8989: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    9544: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    5636: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    357: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    7976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    4923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    5710: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    8318: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    2047: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    350: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    9825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    6399: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    2627: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    6425: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    3864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    },
    46: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    8679: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    7723: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    5007: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    4699: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    7821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    5682: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    5024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    8910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    8205: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    8057: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    7955: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    9826: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    3686: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    4747: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    4342: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    4019: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    2217: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    3970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    3201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    5595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    7743: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    1451: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    7680: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    6766: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    1490: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    5010: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    5006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    7126: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    5651: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    7741: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    5171: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    2006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    9550: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    6204: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    4417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    6647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    1271: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    1789: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    7891: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    3195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    3564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    9655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    1748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    499: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    7737: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    9528: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    5582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    4786: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    4540: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    1919: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    1527: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    3048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    1652: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    473: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    8269: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    2759: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    8882: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);