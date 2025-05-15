! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a8878d93-2461-4374-a13a-6f85a8068f91", e._sentryDebugIdIdentifier = "sentry-dbid-a8878d93-2461-4374-a13a-6f85a8068f91")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [6352, 7542], {
    15900: (e, t, a) => {
      a.d(t, {
        UN: () => d,
        iR: () => k,
        h: () => g,
        Wx: () => _
      });
      var r = a(71127),
        s = a(95966),
        n = a(80763),
        o = a(98397);
      const i = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var l = a(25854);
      const c = (0, s.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        d = e => {
          let {
            checkUser: t,
            children: a
          } = e;
          const d = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, a] = (0, r.useState)([]), [l, c] = (0, r.useState)([]), [d, u] = (0, r.useState)(null), {
                data: g,
                loggedIn: h
              } = (0, n.useRockstarUser)(), {
                hasGtaPlus: p
              } = g ?? {}, m = (0, o.bn)(), f = (e, r) => {
                const n = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = r ?? {};
                    (0, s.track)({
                      ...e,
                      ...t
                    }), n.push(e)
                  }
                })), a([...t, ...n])
              };
              (0, r.useEffect)((() => {
                if (g && null !== h) {
                  const e = v(g);
                  l.length && e && f(l, e), u(e)
                } else e || l.length && f(l)
              }), [g, h, l]), (0, r.useEffect)((() => {
                const e = l.filter((e => -1 === t.indexOf(e)));
                c(e)
              }), [t]);
              const v = e => {
                const t = [],
                  a = [],
                  r = [],
                  s = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [n, o] = e;
                  o.length && o.forEach((e => {
                    const o = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === n) {
                      a.includes(o) || a.push(o), r.includes(o) || "1" !== e.stats?.overview?.hasGtaPlus?.value || r.push(o);
                      const t = `${n}_${e.platform}`;
                      s.includes(t) || s.push(t)
                    }
                    t.includes(o) || t.push(o)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [a, r] = e;
                  s.push(`${a}_${r}`), t.includes(r) || t.push(r)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: h ?? !1,
                  gta_plus_active: !!h && Boolean(p),
                  platforms_played: t.length ? t.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  if (void 0 === h || !g || !d) {
                    const t = [...l];
                    return t.push({
                      ...e
                    }), c(t)
                  }
                  return (0, s.track)({
                    ...e,
                    ...d
                  })
                }
              }
            }(t),
            u = (0, r.useMemo)((() => d), [d, t]);
          return (0, l.jsx)(c.Provider, {
            value: u,
            children: a
          })
        },
        u = {
          track: () => null
        },
        g = () => (0, r.useContext)(c) ?? u;
      var h = a(84904);
      var p = a(93830),
        m = a.n(p);
      var f = a(4895),
        v = a(71256);
      const b = e => {
          let {
            privateToken: t
          } = e;
          const {
            charactersNeeded: a,
            crewsNeeded: n,
            currentCharId: o
          } = (0, h.A)(), i = (0, s.useRockstarToken)(), [l, c] = (0, r.useState)(), [d] = (0, s.useRockstarTokenReactive)(), u = (0, s.useRockstarTokenPing)(), [g, p] = (0, r.useState)(), [b, x] = (0, r.useState)(!1), y = void 0 === g, [k, _] = (0, r.useState)(1);
          return (0, r.useEffect)((() => {
            "gtao" !== a || l?.characters?.gtao || (c({
              ...l,
              accountSynced: !1
            }), _((e => e + 1)))
          }), [a, l?.characters?.gtao]), (0, r.useEffect)((() => {
            n && !l?.crews && (c({
              ...l,
              accountSynced: !1
            }), _((e => e + 1)))
          }), [n, l?.crews]), (0, r.useEffect)((() => {
            0 === k && c({
              ...l,
              accountSynced: !0
            })
          }), [k]), (0, r.useEffect)((() => {
            t && d(t)
          }), [t]), (0, r.useEffect)((() => {
            "" !== i || u()
          }), [i]), (0, r.useEffect)((() => {
            if ("" === i) return;
            const e = !!i;
            if (e || b || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: t
                    } = e;
                    const {
                      gateway: a,
                      silentCheck: r
                    } = (0, s.getConfigForDomain)(), n = {
                      method: "POST",
                      body: `fingerprint=${await m().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, o = await fetch(r, n);
                    if (200 !== o.status) return void t(!1);
                    const i = `${a}?code=${await o.json()}`,
                      l = await fetch(i, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: c
                      } = await l.json();
                    return t(c), c
                  })({
                    token: d
                  })
                } catch (e) {}
              })(), x(!0)), !e && b && p(!1), e) {
              const e = (e => {
                let {
                  bearerToken: t
                } = e;
                const a = (0, f.s)(t),
                  {
                    host: r
                  } = (0, s.getConfigForDomain)(),
                  n = parseInt(a.nameid),
                  o = a["scAuth.Nickname"],
                  i = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  l = new Date(a["scAuth.MemberSince"]),
                  c = new Date,
                  d = (0, v.M)(c, l) < 12,
                  u = (new Date).getTime() / 1e3;
                return {
                  id: n,
                  nonExpiredToken: (a?.exp ?? 0) - u > 0,
                  avatar: a["scAuth.AvatarUrl"],
                  bearer_token_expired: a.exp > Date.now(),
                  isAMinor: i,
                  isNewAccount: d,
                  nickname: o,
                  profile_link: `https://${r}.rockstargames.com/member/${o}?id=${n}`
                }
              })({
                bearerToken: i
              });
              c({
                ...l,
                ...e
              })
            }
          }), [i, b]), (0, r.useEffect)((() => {
            (async () => {
              if (g && l && n && !l?.crews) {
                const e = await (async e => {
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
                  pingBearer: u,
                  rockstarId: l.id
                });
                c({
                  ...l,
                  crews: e
                }), _((e => e - 1))
              }
            })()
          }), [l?.nickname, n, g]), (0, r.useEffect)((() => {
            (async () => {
              if (!g || !l || l?.gamesPlayed) return;
              const e = await (async e => {
                let {
                  pingBearer: t
                } = e;
                const {
                  all: a
                } = await (0, s.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: t
                });
                return a
              })({
                pingBearer: u
              });
              c({
                ...l,
                gamesPlayed: e
              }), _((e => e - 1))
            })()
          }), [l?.nickname, g]), (0, r.useEffect)((() => {
            (async () => {
              if (g && l && "gtao" === a && !l?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: t
                } = await (async e => {
                  let {
                    pingBearer: t,
                    nickname: a,
                    rockstarId: r
                  } = e;
                  const n = [],
                    o = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  await (o?.platforms?.reduce((async (e, a) => {
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
                      const o = ["ps4", "ps5"].includes(a) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return n.push({
                        ...e,
                        mugshotUrl: o,
                        platform: a
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: i,
                    accounts: l
                  } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${a}&maxFriends=0`, {
                    pingBearer: t
                  });
                  if (!i || !l.length) return {
                    gtaoCharacters: n,
                    linkedAccounts: []
                  };
                  const c = l[0],
                    {
                      rockstarAccount: d,
                      linkedAccounts: u
                    } = c;
                  if (d?.rockstarId !== r) return {
                    gtaoCharacters: n,
                    linkedAccounts: []
                  };
                  if (!n.length) return {
                    gtaoCharacters: n,
                    linkedAccounts: c.linkedAccounts
                  };
                  const g = a;
                  let h = "",
                    p = "";
                  return u?.map((e => ("xbl" === e?.onlineService ? h = e.userName : "np" === e?.onlineService && (p = e.userName), e))), n.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), n.map(((e, t) => (e.platformUsername = g, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = p || g), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = h || g), e))), {
                    gtaoCharacters: n,
                    linkedAccounts: u
                  }
                })({
                  pingBearer: u,
                  nickname: l.nickname,
                  rockstarId: l.id
                });
                c({
                  ...l,
                  characters: {
                    ...l.characters,
                    gtao: e
                  },
                  linkedAccounts: t,
                  hasGtaPlus: "1" === e?.[o]?.stats?.overview?.hasGtaPlus?.value
                }), _((e => e - 1))
              }
            })()
          }), [a, l?.nickname, g]), (0, r.useEffect)((() => {
            l?.id && l?.nonExpiredToken && (p(!0), (0, h.K)(l.id))
          }), [JSON.stringify(l)]), {
            data: l,
            loggedIn: g,
            loading: y
          }
        },
        x = {},
        y = (0, s.setContextItem)({
          context: (0, r.createContext)(x),
          key: "userContext"
        }),
        k = e => {
          let {
            children: t,
            privateToken: a
          } = e;
          const s = b({
              privateToken: a
            }),
            n = (0, r.useMemo)((() => ({
              ...s,
              privateToken: a,
              hasProvider: !0
            })), [s]);
          return (0, l.jsx)(y.Provider, {
            value: n,
            children: t
          })
        },
        _ = () => (0, r.useContext)(y)
    },
    79296: (e, t, a) => {
      a.d(t, {
        A: () => cn
      });
      var r = a(71127),
        s = a(81788),
        n = a(2918),
        o = a(95966),
        i = a(15900),
        l = a(50257),
        c = a(40148);
      const d = s.locales.map((e => e.subdomaincom)).filter((e => "en" !== e)),
        u = d.length ? `(?:/(?:${d.join("|")}))?` : "";

      function g(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const a = "/" === e ? "" : e.replace(/\/+$/, "");
        return new RegExp(`^${u}${a}${t?"/?$":"(?:/.*)?$"}`)
      }
      const h = {
          [c.C.www]: [g("/", !0), g("/games"), g("/downloads"), g("/gta-v"), g("/gta-online"), g("/gta-plus"), g("/reddeadonline"), g("/reddeadredemption2"), g("/reddeadredemption"), g("/GTATrilogy"), g("/newswire")]
        },
        p = {
          [c.C.www]: [g("/careers"), g("/videos")]
        },
        m = {
          [c.C.www]: [g("/reddeadredemption2/restricted-content/agegate", !0), g("/newswire/article/3928aaa9471o3a"), g("/corpinfo"), g("/privacy"), g("/legal"), g("/ccpa"), g("/cookies"), g("/contact"), g("/gta-online/license-plates", !0), g("/VI")]
        };
      var f = a(25854);
      const v = (0, r.createContext)({
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
        b = e => {
          let {
            navData: t,
            location: a,
            onNavigate: o,
            routeOptions: i,
            children: l,
            searchConfig: d
          } = e;
          const [u, g] = (0, r.useState)(null), [h, p] = (0, r.useMemo)((() => (0, s.getLocale)()), []), {
            hash: m
          } = a, {
            data: b
          } = (0, n.useRockstarUser)(), x = (0, c.A)(), y = (0, r.useMemo)((() => {
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
              rockstarUser: b,
              openedDropdown: u,
              setOpenedDropdown: g,
              routeOptions: i,
              searchConfig: d
            }
          }), [t, h, JSON.stringify(a), x, u, i, b]);
          return (0, r.useEffect)((() => {
            p(h.iso);
            const e = () => g(null);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", e)
            }
          }), []), (0, r.useEffect)((() => {
            const e = m?.replace("#", "");
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
          }), [m]), (0, f.jsx)(v.Provider, {
            value: y,
            children: l
          })
        },
        x = () => {
          const e = (0, r.useContext)(v);
          if (void 0 === e) throw new Error("useDomainEnvironment must be used within a Navigation Provider");
          return e.environment
        },
        y = () => {
          const e = (0, r.useContext)(v);
          if (void 0 === e) throw new Error("useRockstarUserProfile must be used within a Navigation Provider");
          return e.rockstarUser
        },
        k = () => {
          const e = (0, r.useContext)(v);
          if (void 0 === e) throw new Error("useOpenDropdown must be used within a Navigation Provider");
          const {
            openedDropdown: t,
            setOpenedDropdown: a
          } = e;
          return [t, e => {
            a(e === t ? null : e)
          }]
        },
        _ = () => {
          const e = (0, r.useContext)(v);
          if (void 0 === e) throw new Error("useSearchConfig must be used within a Navigation Provider");
          return e.searchConfig
        },
        w = () => {
          const e = (0, r.useContext)(v);
          if (void 0 === e) throw new Error("useRouteOptions must be used within a Navigation Provider");
          return e.routeOptions
        },
        T = () => {
          const e = (0, r.useContext)(v);
          if (void 0 === e) throw new Error("useWindowLocation must be used within a Navigation Provider");
          return e.location
        },
        C = () => {
          const e = (0, r.useContext)(v);
          if (void 0 === e) throw new Error("useOnNavigate must be used within a Navigation Provider");
          return e.onNavigate
        },
        S = () => {
          const {
            pathname: e
          } = T(), {
            currentSite: t
          } = (0, c.A)();
          return (0, r.useMemo)((() => ((e, t) => t ? m[t]?.find((t => t.test(e))) ? "none" : p[t]?.find((t => t.test(e))) ? "small" : h[t]?.find((t => t.test(e))) ? "fullscreen" : "none" : "none")(e, t?.site)), [e, t])
        };
      class j extends r.Component {
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, f.jsxs)("div", {
            className: "rockstargames-modules-core-headerd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, f.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, f.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      var M = a(52542),
        E = a(13581);
      let N, I, O, P, R, A, B, L, D, F, $, z, U, V, q = () => N || "undefined" != typeof window && (N = window.gsap) && N.registerPlugin && N,
        X = 1,
        Y = [],
        G = [],
        H = [],
        W = Date.now,
        K = (e, t) => t,
        Q = (e, t) => ~H.indexOf(e) && H[H.indexOf(e) + 1][t],
        J = e => !!~$.indexOf(e),
        Z = (e, t, a, r, s) => e.addEventListener(t, a, {
          passive: !r,
          capture: !!s
        }),
        ee = (e, t, a, r) => e.removeEventListener(t, a, !!r),
        te = "scrollLeft",
        ae = "scrollTop",
        re = () => z && z.isPressed || G.cache++,
        se = (e, t) => {
          let a = r => {
            if (r || 0 === r) {
              X && (P.history.scrollRestoration = "manual");
              let t = z && z.isPressed;
              r = a.v = Math.round(r) || (z && z.iOS ? 1 : 0), e(r), a.cacheID = G.cache, t && K("ss", r)
            } else(t || G.cache !== a.cacheID || K("ref")) && (a.cacheID = G.cache, a.v = e());
            return a.v + a.offset
          };
          return a.offset = 0, e && a
        },
        ne = {
          s: te,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: se((function(e) {
            return arguments.length ? P.scrollTo(e, oe.sc()) : P.pageXOffset || R[te] || A[te] || B[te] || 0
          }))
        },
        oe = {
          s: ae,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: ne,
          sc: se((function(e) {
            return arguments.length ? P.scrollTo(ne.sc(), e) : P.pageYOffset || R[ae] || A[ae] || B[ae] || 0
          }))
        },
        ie = (e, t) => (t && t._ctx && t._ctx.selector || N.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== N.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        le = (e, t) => {
          let {
            s: a,
            sc: r
          } = t;
          J(e) && (e = R.scrollingElement || A);
          let s = G.indexOf(e),
            n = r === oe.sc ? 1 : 2;
          !~s && (s = G.push(e) - 1), G[s + n] || Z(e, "scroll", re);
          let o = G[s + n],
            i = o || (G[s + n] = se(Q(e, a), !0) || (J(e) ? r : se((function(t) {
              return arguments.length ? e[a] = t : e[a]
            }))));
          return i.target = e, o || (i.smooth = "smooth" === N.getProperty(e, "scrollBehavior")), i
        },
        ce = (e, t, a) => {
          let r = e,
            s = e,
            n = W(),
            o = n,
            i = t || 50,
            l = Math.max(500, 3 * i),
            c = (e, t) => {
              let l = W();
              t || l - n > i ? (s = r, r = e, o = n, n = l) : a ? r += e : r = s + (e - s) / (l - o) * (n - o)
            };
          return {
            update: c,
            reset: () => {
              s = r = a ? 0 : r, o = n = 0
            },
            getVelocity: e => {
              let t = o,
                i = s,
                d = W();
              return (e || 0 === e) && e !== r && c(e), n === o || d - o > l ? 0 : (r + (a ? i : -i)) / ((a ? d : n) - t) * 1e3
            }
          }
        },
        de = (e, t) => (t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        ue = e => {
          let t = Math.max(...e),
            a = Math.min(...e);
          return Math.abs(t) >= Math.abs(a) ? t : a
        },
        ge = () => {
          F = N.core.globals().ScrollTrigger, F && F.core && (() => {
            let e = F.core,
              t = e.bridge || {},
              a = e._scrollers,
              r = e._proxies;
            a.push(...G), r.push(...H), G = a, H = r, K = (e, a) => t[e](a)
          })()
        },
        he = e => (N = e || q(), N && "undefined" != typeof document && document.body && (P = window, R = document, A = R.documentElement, B = R.body, $ = [P, R, A, B], O = N.utils.clamp, V = N.core.context || function() {}, D = "onpointerenter" in B ? "pointer" : "mouse", L = pe.isTouch = P.matchMedia && P.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in P || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, U = pe.eventTypes = ("ontouchstart" in A ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in A ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => X = 0), 500), ge(), I = 1), I);
      ne.op = oe, G.cache = 0;
      class pe {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          I || he(N) || console.warn("Please gsap.registerPlugin(Observer)"), F || ge();
          let {
            tolerance: t,
            dragMinimum: a,
            type: r,
            target: s,
            lineHeight: n,
            debounce: o,
            preventDefault: i,
            onStop: l,
            onStopDelay: c,
            ignore: d,
            wheelSpeed: u,
            event: g,
            onDragStart: h,
            onDragEnd: p,
            onDrag: m,
            onPress: f,
            onRelease: v,
            onRight: b,
            onLeft: x,
            onUp: y,
            onDown: k,
            onChangeX: _,
            onChangeY: w,
            onChange: T,
            onToggleX: C,
            onToggleY: S,
            onHover: j,
            onHoverEnd: M,
            onMove: E,
            ignoreCheck: O,
            isNormalizer: $,
            onGestureStart: q,
            onGestureEnd: X,
            onWheel: G,
            onEnable: H,
            onDisable: K,
            onClick: Q,
            scrollSpeed: te,
            capture: ae,
            allowClicks: se,
            lockAxis: pe,
            onLockAxis: me
          } = e;
          this.target = s = ie(s) || A, this.vars = e, d && (d = N.utils.toArray(d)), t = t || 1e-9, a = a || 0, u = u || 1, te = te || 1, r = r || "wheel,touch,pointer", o = !1 !== o, n || (n = parseFloat(P.getComputedStyle(B).lineHeight) || 22);
          let fe, ve, be, xe, ye, ke, _e, we = this,
            Te = 0,
            Ce = 0,
            Se = le(s, ne),
            je = le(s, oe),
            Me = Se(),
            Ee = je(),
            Ne = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === U[0],
            Ie = J(s),
            Oe = s.ownerDocument || R,
            Pe = [0, 0, 0],
            Re = [0, 0, 0],
            Ae = 0,
            Be = () => Ae = W(),
            Le = (e, t) => (we.event = e) && d && ~d.indexOf(e.target) || t && Ne && "touch" !== e.pointerType || O && O(e, t),
            De = () => {
              let e = we.deltaX = ue(Pe),
                a = we.deltaY = ue(Re),
                r = Math.abs(e) >= t,
                s = Math.abs(a) >= t;
              T && (r || s) && T(we, e, a, Pe, Re), r && (b && we.deltaX > 0 && b(we), x && we.deltaX < 0 && x(we), _ && _(we), C && we.deltaX < 0 != Te < 0 && C(we), Te = we.deltaX, Pe[0] = Pe[1] = Pe[2] = 0), s && (k && we.deltaY > 0 && k(we), y && we.deltaY < 0 && y(we), w && w(we), S && we.deltaY < 0 != Ce < 0 && S(we), Ce = we.deltaY, Re[0] = Re[1] = Re[2] = 0), (xe || be) && (E && E(we), be && (m(we), be = !1), xe = !1), ke && !(ke = !1) && me && me(we), ye && (G(we), ye = !1), fe = 0
            },
            Fe = (e, t, a) => {
              Pe[a] += e, Re[a] += t, we._vx.update(e), we._vy.update(t), o ? fe || (fe = requestAnimationFrame(De)) : De()
            },
            $e = (e, t) => {
              pe && !_e && (we.axis = _e = Math.abs(e) > Math.abs(t) ? "x" : "y", ke = !0), "y" !== _e && (Pe[2] += e, we._vx.update(e, !0)), "x" !== _e && (Re[2] += t, we._vy.update(t, !0)), o ? fe || (fe = requestAnimationFrame(De)) : De()
            },
            ze = e => {
              if (Le(e, 1)) return;
              let t = (e = de(e, i)).clientX,
                r = e.clientY,
                s = t - we.x,
                n = r - we.y,
                o = we.isDragging;
              we.x = t, we.y = r, (o || Math.abs(we.startX - t) >= a || Math.abs(we.startY - r) >= a) && (m && (be = !0), o || (we.isDragging = !0), $e(s, n), o || h && h(we))
            },
            Ue = we.onPress = e => {
              Le(e, 1) || e && e.button || (we.axis = _e = null, ve.pause(), we.isPressed = !0, e = de(e), Te = Ce = 0, we.startX = we.x = e.clientX, we.startY = we.y = e.clientY, we._vx.reset(), we._vy.reset(), Z($ ? s : Oe, U[1], ze, i, !0), we.deltaX = we.deltaY = 0, f && f(we))
            },
            Ve = we.onRelease = e => {
              if (Le(e, 1)) return;
              ee($ ? s : Oe, U[1], ze, !0);
              let t = !isNaN(we.y - we.startY),
                a = we.isDragging && (Math.abs(we.x - we.startX) > 3 || Math.abs(we.y - we.startY) > 3),
                r = de(e);
              !a && t && (we._vx.reset(), we._vy.reset(), i && se && N.delayedCall(.08, (() => {
                if (W() - Ae > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (Oe.createEvent) {
                  let t = Oe.createEvent("MouseEvents");
                  t.initMouseEvent("click", !0, !0, P, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                }
              }))), we.isDragging = we.isGesturing = we.isPressed = !1, l && !$ && ve.restart(!0), p && a && p(we), v && v(we, a)
            },
            qe = e => e.touches && e.touches.length > 1 && (we.isGesturing = !0) && q(e, we.isDragging),
            Xe = () => (we.isGesturing = !1) || X(we),
            Ye = e => {
              if (Le(e)) return;
              let t = Se(),
                a = je();
              Fe((t - Me) * te, (a - Ee) * te, 1), Me = t, Ee = a, l && ve.restart(!0)
            },
            Ge = e => {
              if (Le(e)) return;
              e = de(e, i), G && (ye = !0);
              let t = (1 === e.deltaMode ? n : 2 === e.deltaMode ? P.innerHeight : 1) * u;
              Fe(e.deltaX * t, e.deltaY * t, 0), l && !$ && ve.restart(!0)
            },
            He = e => {
              if (Le(e)) return;
              let t = e.clientX,
                a = e.clientY,
                r = t - we.x,
                s = a - we.y;
              we.x = t, we.y = a, xe = !0, (r || s) && $e(r, s)
            },
            We = e => {
              we.event = e, j(we)
            },
            Ke = e => {
              we.event = e, M(we)
            },
            Qe = e => Le(e) || de(e, i) && Q(we);
          ve = we._dc = N.delayedCall(c || .25, (() => {
            we._vx.reset(), we._vy.reset(), ve.pause(), l && l(we)
          })).pause(), we.deltaX = we.deltaY = 0, we._vx = ce(0, 50, !0), we._vy = ce(0, 50, !0), we.scrollX = Se, we.scrollY = je, we.isDragging = we.isGesturing = we.isPressed = !1, V(this), we.enable = e => (we.isEnabled || (Z(Ie ? Oe : s, "scroll", re), r.indexOf("scroll") >= 0 && Z(Ie ? Oe : s, "scroll", Ye, i, ae), r.indexOf("wheel") >= 0 && Z(s, "wheel", Ge, i, ae), (r.indexOf("touch") >= 0 && L || r.indexOf("pointer") >= 0) && (Z(s, U[0], Ue, i, ae), Z(Oe, U[2], Ve), Z(Oe, U[3], Ve), se && Z(s, "click", Be, !1, !0), Q && Z(s, "click", Qe), q && Z(Oe, "gesturestart", qe), X && Z(Oe, "gestureend", Xe), j && Z(s, D + "enter", We), M && Z(s, D + "leave", Ke), E && Z(s, D + "move", He)), we.isEnabled = !0, e && e.type && Ue(e), H && H(we)), we), we.disable = () => {
            we.isEnabled && (Y.filter((e => e !== we && J(e.target))).length || ee(Ie ? Oe : s, "scroll", re), we.isPressed && (we._vx.reset(), we._vy.reset(), ee($ ? s : Oe, U[1], ze, !0)), ee(Ie ? Oe : s, "scroll", Ye, ae), ee(s, "wheel", Ge, ae), ee(s, U[0], Ue, ae), ee(Oe, U[2], Ve), ee(Oe, U[3], Ve), ee(s, "click", Be, !0), ee(s, "click", Qe), ee(Oe, "gesturestart", qe), ee(Oe, "gestureend", Xe), ee(s, D + "enter", We), ee(s, D + "leave", Ke), ee(s, D + "move", He), we.isEnabled = we.isPressed = we.isDragging = !1, K && K(we))
          }, we.kill = we.revert = () => {
            we.disable();
            let e = Y.indexOf(we);
            e >= 0 && Y.splice(e, 1), z === we && (z = 0)
          }, Y.push(we), $ && J(s) && (z = we), we.enable(g)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      pe.version = "3.12.2", pe.create = e => new pe(e), pe.register = he, pe.getAll = () => Y.slice(), pe.getById = e => Y.filter((t => t.vars.id === e))[0], q() && N.registerPlugin(pe);
      let me, fe, ve, be, xe, ye, ke, _e, we, Te, Ce, Se, je, Me, Ee, Ne, Ie, Oe, Pe, Re, Ae, Be, Le, De, Fe, $e, ze, Ue, Ve, qe, Xe, Ye, Ge, He, We, Ke, Qe = 1,
        Je = Date.now,
        Ze = Je(),
        et = 0,
        tt = 0,
        at = (e, t, a) => {
          let r = ft(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return a["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
        },
        rt = (e, t) => !t || ft(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        st = () => tt && requestAnimationFrame(st),
        nt = () => Me = 1,
        ot = () => Me = 0,
        it = e => e,
        lt = e => Math.round(1e5 * e) / 1e5 || 0,
        ct = () => "undefined" != typeof window,
        dt = () => me || ct() && (me = window.gsap) && me.registerPlugin && me,
        ut = e => !!~ke.indexOf(e),
        gt = e => ("Height" === e ? Xe : ve["inner" + e]) || xe["client" + e] || ye["client" + e],
        ht = e => Q(e, "getBoundingClientRect") || (ut(e) ? () => (Ca.width = ve.innerWidth, Ca.height = Xe, Ca) : () => Ft(e)),
        pt = (e, t) => {
          let {
            s: a,
            d2: r,
            d: s,
            a: n
          } = t;
          return Math.max(0, (a = "scroll" + r) && (n = Q(e, a)) ? n() - ht(e)()[s] : ut(e) ? (xe[a] || ye[a]) - gt(r) : e[a] - e["offset" + r])
        },
        mt = (e, t) => {
          for (let a = 0; a < Pe.length; a += 3)(!t || ~t.indexOf(Pe[a + 1])) && e(Pe[a], Pe[a + 1], Pe[a + 2])
        },
        ft = e => "string" == typeof e,
        vt = e => "function" == typeof e,
        bt = e => "number" == typeof e,
        xt = e => "object" == typeof e,
        yt = (e, t, a) => e && e.progress(t ? 0 : 1) && a && e.pause(),
        kt = (e, t) => {
          if (e.enabled) {
            let a = t(e);
            a && a.totalTime && (e.callbackAnimation = a)
          }
        },
        _t = Math.abs,
        wt = "left",
        Tt = "right",
        Ct = "bottom",
        St = "width",
        jt = "height",
        Mt = "Right",
        Et = "Left",
        Nt = "Top",
        It = "Bottom",
        Ot = "padding",
        Pt = "margin",
        Rt = "Width",
        At = "Height",
        Bt = "px",
        Lt = e => ve.getComputedStyle(e),
        Dt = (e, t) => {
          for (let a in t) a in e || (e[a] = t[a]);
          return e
        },
        Ft = (e, t) => {
          let a = t && "matrix(1, 0, 0, 1, 0, 0)" !== Lt(e)[Ee] && me.to(e, {
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
        $t = (e, t) => {
          let {
            d2: a
          } = t;
          return e["offset" + a] || e["client" + a] || 0
        },
        zt = e => {
          let t, a = [],
            r = e.labels,
            s = e.duration();
          for (t in r) a.push(r[t] / s);
          return a
        },
        Ut = e => {
          let t = me.utils.snap(e),
            a = Array.isArray(e) && e.slice(0).sort(((e, t) => e - t));
          return a ? function(e, r) {
            let s, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001;
            if (!r) return t(e);
            if (r > 0) {
              for (e -= n, s = 0; s < a.length; s++)
                if (a[s] >= e) return a[s];
              return a[s - 1]
            }
            for (s = a.length, e += n; s--;)
              if (a[s] <= e) return a[s];
            return a[0]
          } : function(a, r) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001,
              n = t(a);
            return !r || Math.abs(n - a) < s || n - a < 0 == r < 0 ? n : t(r < 0 ? a - e : a + e)
          }
        },
        Vt = (e, t, a, r) => a.split(",").forEach((a => e(t, a, r))),
        qt = (e, t, a, r, s) => e.addEventListener(t, a, {
          passive: !r,
          capture: !!s
        }),
        Xt = (e, t, a, r) => e.removeEventListener(t, a, !!r),
        Yt = (e, t, a) => {
          (a = a && a.wheelHandler) && (e(t, "wheel", a), e(t, "touchmove", a))
        },
        Gt = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        Ht = {
          toggleActions: "play",
          anticipatePin: 0
        },
        Wt = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        Kt = (e, t) => {
          if (ft(e)) {
            let a = e.indexOf("="),
              r = ~a ? +(e.charAt(a - 1) + 1) * parseFloat(e.substr(a + 1)) : 0;
            ~a && (e.indexOf("%") > a && (r *= t / 100), e = e.substr(0, a - 1)), e = r + (e in Wt ? Wt[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        Qt = (e, t, a, r, s, n, o, i) => {
          let {
            startColor: l,
            endColor: c,
            fontSize: d,
            indent: u,
            fontWeight: g
          } = s, h = be.createElement("div"), p = ut(a) || "fixed" === Q(a, "pinType"), m = -1 !== e.indexOf("scroller"), f = p ? ye : a, v = -1 !== e.indexOf("start"), b = v ? l : c, x = "border-color:" + b + ";font-size:" + d + ";color:" + b + ";font-weight:" + g + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return x += "position:" + ((m || i) && p ? "fixed;" : "absolute;"), (m || i || !p) && (x += (r === oe ? Tt : Ct) + ":" + (n + parseFloat(u)) + "px;"), o && (x += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), h._isStart = v, h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), h.style.cssText = x, h.innerText = t || 0 === t ? e + "-" + t : e, f.children[0] ? f.insertBefore(h, f.children[0]) : f.appendChild(h), h._offset = h["offset" + r.op.d2], Jt(h, 0, r, v), h
        },
        Jt = (e, t, a, r) => {
          let s = {
              display: "block"
            },
            n = a[r ? "os2" : "p2"],
            o = a[r ? "p2" : "os2"];
          e._isFlipped = r, s[a.a + "Percent"] = r ? -100 : 0, s[a.a] = r ? "1px" : 0, s["border" + n + Rt] = 1, s["border" + o + Rt] = 0, s[a.p] = t + "px", me.set(e, s)
        },
        Zt = [],
        ea = {},
        ta = () => Je() - et > 34 && (Ge || (Ge = requestAnimationFrame(ba))),
        aa = () => {
          (!Le || !Le.isPressed || Le.startX > ye.clientWidth) && (G.cache++, Le ? Ge || (Ge = requestAnimationFrame(ba)) : ba(), et || la("scrollStart"), et = Je())
        },
        ra = () => {
          $e = ve.innerWidth, Fe = ve.innerHeight
        },
        sa = () => {
          G.cache++, !je && !Be && !be.fullscreenElement && !be.webkitFullscreenElement && (!De || $e !== ve.innerWidth || Math.abs(ve.innerHeight - Fe) > .25 * ve.innerHeight) && _e.restart(!0)
        },
        na = {},
        oa = [],
        ia = () => Xt(Oa, "scrollEnd", ia) || ma(!0),
        la = e => na[e] && na[e].map((e => e())) || oa,
        ca = [],
        da = e => {
          for (let t = 0; t < ca.length; t += 5)(!e || ca[t + 4] && ca[t + 4].query === e) && (ca[t].style.cssText = ca[t + 1], ca[t].getBBox && ca[t].setAttribute("transform", ca[t + 2] || ""), ca[t + 3].uncache = 1)
        },
        ua = (e, t) => {
          let a;
          for (Ne = 0; Ne < Zt.length; Ne++) a = Zt[Ne], !a || t && a._ctx !== t || (e ? a.kill(1) : a.revert(!0, !0));
          t && da(t), t || la("revert")
        },
        ga = (e, t) => {
          G.cache++, (t || !He) && G.forEach((e => vt(e) && e.cacheID++ && (e.rec = 0))), ft(e) && (ve.history.scrollRestoration = Ve = e)
        },
        ha = 0,
        pa = () => {
          ye.appendChild(qe), Xe = qe.offsetHeight || ve.innerHeight, ye.removeChild(qe)
        },
        ma = (e, t) => {
          if (et && !e) return void qt(Oa, "scrollEnd", ia);
          pa(), He = Oa.isRefreshing = !0, G.forEach((e => vt(e) && ++e.cacheID && (e.rec = e())));
          let a = la("refreshInit");
          Re && Oa.sort(), t || ua(), G.forEach((e => {
            vt(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), Zt.slice(0).forEach((e => e.refresh())), Zt.forEach(((e, t) => {
            if (e._subPinOffset && e.pin) {
              let t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                a = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - a), e.refresh()
            }
          })), Zt.forEach((e => {
            let t = pt(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > t) && e.setPositions(e.start, Math.max(e.start + 1, t), !0)
          })), a.forEach((e => e && e.render && e.render(-1))), G.forEach((e => {
            vt(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), ga(Ve, 1), _e.pause(), ha++, He = 2, ba(2), Zt.forEach((e => vt(e.vars.onRefresh) && e.vars.onRefresh(e))), He = Oa.isRefreshing = !1, la("refresh")
        },
        fa = 0,
        va = 1,
        ba = e => {
          if (!He || 2 === e) {
            Oa.isUpdating = !0, Ke && Ke.update(0);
            let e = Zt.length,
              t = Je(),
              a = t - Ze >= 50,
              r = e && Zt[0].scroll();
            if (va = fa > r ? -1 : 1, He || (fa = r), a && (et && !Me && t - et > 200 && (et = 0, la("scrollEnd")), Ce = Ze, Ze = t), va < 0) {
              for (Ne = e; Ne-- > 0;) Zt[Ne] && Zt[Ne].update(0, a);
              va = 1
            } else
              for (Ne = 0; Ne < e; Ne++) Zt[Ne] && Zt[Ne].update(0, a);
            Oa.isUpdating = !1
          }
          Ge = 0
        },
        xa = [wt, "top", Ct, Tt, Pt + It, Pt + Mt, Pt + Nt, Pt + Et, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        ya = xa.concat([St, jt, "boxSizing", "max" + Rt, "max" + At, "position", Pt, Ot, Ot + Nt, Ot + Mt, Ot + It, Ot + Et]),
        ka = (e, t, a, r) => {
          if (!e._gsap.swappedIn) {
            let s, n = xa.length,
              o = t.style,
              i = e.style;
            for (; n--;) s = xa[n], o[s] = a[s];
            o.position = "absolute" === a.position ? "absolute" : "relative", "inline" === a.display && (o.display = "inline-block"), i[Ct] = i[Tt] = "auto", o.flexBasis = a.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[St] = $t(e, ne) + Bt, o[jt] = $t(e, oe) + Bt, o[Ot] = i[Pt] = i.top = i[wt] = "0", wa(r), i[St] = i["max" + Rt] = a[St], i[jt] = i["max" + At] = a[jt], i[Ot] = a[Ot], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        _a = /([A-Z])/g,
        wa = e => {
          if (e) {
            let t, a, r = e.t.style,
              s = e.length,
              n = 0;
            for ((e.t._gsap || me.core.getCache(e.t)).uncache = 1; n < s; n += 2) a = e[n + 1], t = e[n], a ? r[t] = a : r[t] && r.removeProperty(t.replace(_a, "-$1").toLowerCase())
          }
        },
        Ta = e => {
          let t = ya.length,
            a = e.style,
            r = [],
            s = 0;
          for (; s < t; s++) r.push(ya[s], a[ya[s]]);
          return r.t = e, r
        },
        Ca = {
          left: 0,
          top: 0
        },
        Sa = (e, t, a, r, s, n, o, i, l, c, d, u, g, h) => {
          vt(e) && (e = e(i)), ft(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? Kt("0" + e.substr(3), a) : 0));
          let p, m, f, v = g ? g.time() : 0;
          if (g && g.seek(0), isNaN(e) || (e = +e), bt(e)) g && (e = me.utils.mapRange(g.scrollTrigger.start, g.scrollTrigger.end, 0, u, e)), o && Jt(o, a, r, !0);
          else {
            vt(t) && (t = t(i));
            let n, d, u, g, h = (e || "0").split(" ");
            f = ie(t, i) || ye, n = Ft(f) || {}, n && (n.left || n.top) || "none" !== Lt(f).display || (g = f.style.display, f.style.display = "block", n = Ft(f), g ? f.style.display = g : f.style.removeProperty("display")), d = Kt(h[0], n[r.d]), u = Kt(h[1] || "0", a), e = n[r.p] - l[r.p] - c + d + s - u, o && Jt(o, u, r, a - u < 20 || o._isStart && u > 20), a -= a - u
          }
          if (h && (i[h] = e || -.001, e < 0 && (e = 0)), n) {
            let t = e + a,
              s = n._isStart;
            p = "scroll" + r.d2, Jt(n, t, r, s && t > 20 || !s && (d ? Math.max(ye[p], xe[p]) : n.parentNode[p]) <= t + 1), d && (l = Ft(o), d && (n.style[r.op.p] = l[r.op.p] - r.op.m - n._offset + Bt))
          }
          return g && f && (p = Ft(f), g.seek(u), m = Ft(f), g._caScrollDist = p[r.p] - m[r.p], e = e / g._caScrollDist * u), g && g.seek(v), g ? e : Math.round(e)
        },
        ja = /(webkit|moz|length|cssText|inset)/i,
        Ma = (e, t, a, r) => {
          if (e.parentNode !== t) {
            let s, n, o = e.style;
            if (t === ye) {
              for (s in e._stOrig = o.cssText, n = Lt(e), n) + s || ja.test(s) || !n[s] || "string" != typeof o[s] || "0" === s || (o[s] = n[s]);
              o.top = a, o.left = r
            } else o.cssText = e._stOrig;
            me.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        Ea = (e, t, a) => {
          let r = t,
            s = r;
          return t => {
            let n = Math.round(e());
            return n !== r && n !== s && Math.abs(n - r) > 3 && Math.abs(n - s) > 3 && (t = n, a && a()), s = r, r = t, t
          }
        },
        Na = (e, t, a) => {
          let r = {};
          r[t.p] = "+=" + a, me.set(e, r)
        },
        Ia = (e, t) => {
          let a = le(e, t),
            r = "_scroll" + t.p2,
            s = (t, n, o, i, l) => {
              let c = s.tween,
                d = n.onComplete,
                u = {};
              o = o || a();
              let g = Ea(a, o, (() => {
                c.kill(), s.tween = 0
              }));
              return l = i && l || 0, i = i || t - o, c && c.kill(), n[r] = t, n.modifiers = u, u[r] = () => g(o + i * c.ratio + l * c.ratio * c.ratio), n.onUpdate = () => {
                G.cache++, ba()
              }, n.onComplete = () => {
                s.tween = 0, d && d.call(c)
              }, c = s.tween = me.to(e, n), c
            };
          return e[r] = a, a.wheelHandler = () => s.tween && s.tween.kill() && (s.tween = 0), qt(e, "wheel", a.wheelHandler), Oa.isTouch && qt(e, "touchmove", a.wheelHandler), s
        };
      class Oa {
        constructor(e, t) {
          fe || Oa.register(me) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ue(this), this.init(e, t)
        }
        init(e, t) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !tt) return void(this.update = this.refresh = this.kill = it);
          e = Dt(ft(e) || bt(e) || e.nodeType ? {
            trigger: e
          } : e, Ht);
          let a, r, s, n, o, i, l, c, d, u, g, h, p, m, f, v, b, x, y, k, _, w, T, C, S, j, M, E, N, I, O, P, R, A, B, L, D, F, $, {
              onUpdate: z,
              toggleClass: U,
              id: V,
              onToggle: q,
              onRefresh: X,
              scrub: Y,
              trigger: W,
              pin: K,
              pinSpacing: J,
              invalidateOnRefresh: Z,
              anticipatePin: ee,
              onScrubComplete: te,
              onSnapComplete: ae,
              once: re,
              snap: se,
              pinReparent: ce,
              pinSpacer: de,
              containerAnimation: ue,
              fastScrollEnd: ge,
              preventOverlaps: he
            } = e,
            pe = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? ne : oe,
            fe = !Y && 0 !== Y,
            ke = ie(e.scroller || ve),
            _e = me.core.getCache(ke),
            Se = ut(ke),
            Ee = "fixed" === ("pinType" in e ? e.pinType : Q(ke, "pinType") || Se && "fixed"),
            Ie = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            Oe = fe && e.toggleActions.split(" "),
            Pe = "markers" in e ? e.markers : Ht.markers,
            Be = Se ? 0 : parseFloat(Lt(ke)["border" + pe.p2 + Rt]) || 0,
            Le = this,
            De = e.onRefreshInit && (() => e.onRefreshInit(Le)),
            Fe = ((e, t, a) => {
              let {
                d: r,
                d2: s,
                a: n
              } = a;
              return (n = Q(e, "getBoundingClientRect")) ? () => n()[r] : () => (t ? gt(s) : e["client" + s]) || 0
            })(ke, Se, pe),
            $e = ((e, t) => !t || ~H.indexOf(e) ? ht(e) : () => Ca)(ke, Se),
            ze = 0,
            Ue = 0,
            Ve = 0,
            qe = le(ke, pe);
          var Xe;
          if (Le._startClamp = Le._endClamp = !1, Le._dir = pe, ee *= 45, Le.scroller = ke, Le.scroll = ue ? ue.time.bind(ue) : qe, n = qe(), Le.vars = e, t = t || e.animation, "refreshPriority" in e && (Re = 1, -9999 === e.refreshPriority && (Ke = Le)), _e.tweenScroll = _e.tweenScroll || {
              top: Ia(ke, oe),
              left: Ia(ke, ne)
            }, Le.tweenTo = a = _e.tweenScroll[pe.p], Le.scrubDuration = e => {
              R = bt(e) && e, R ? P ? P.duration(e) : P = me.to(t, {
                ease: "expo",
                totalProgress: "+=0",
                duration: R,
                paused: !0,
                onComplete: () => te && te(Le)
              }) : (P && P.progress(1).kill(), P = 0)
            }, t && (t.vars.lazy = !1, t._initted && !Le.isReverted || !1 !== t.vars.immediateRender && !1 !== e.immediateRender && t.duration() && t.render(0, !0, !0), Le.animation = t.pause(), t.scrollTrigger = Le, Le.scrubDuration(Y), I = 0, V || (V = t.vars.id)), se && (xt(se) && !se.push || (se = {
              snapTo: se
            }), "scrollBehavior" in ye.style && me.set(Se ? [ye, xe] : ke, {
              scrollBehavior: "auto"
            }), G.forEach((e => vt(e) && e.target === (Se ? be.scrollingElement || xe : ke) && (e.smooth = !1))), s = vt(se.snapTo) ? se.snapTo : "labels" === se.snapTo ? (e => t => me.utils.snap(zt(e), t))(t) : "labelsDirectional" === se.snapTo ? (Xe = t, (e, t) => Ut(zt(Xe))(e, t.direction)) : !1 !== se.directional ? (e, t) => Ut(se.snapTo)(e, Je() - Ue < 500 ? 0 : t.direction) : me.utils.snap(se.snapTo), A = se.duration || {
              min: .1,
              max: 2
            }, A = xt(A) ? Te(A.min, A.max) : Te(A, A), B = me.delayedCall(se.delay || R / 2 || .1, (() => {
              let e = qe(),
                r = Je() - Ue < 500,
                n = a.tween;
              if (!(r || Math.abs(Le.getVelocity()) < 10) || n || Me || ze === e) Le.isActive && ze !== e && B.restart(!0);
              else {
                let o = (e - i) / m,
                  c = t && !fe ? t.totalProgress() : o,
                  d = r ? 0 : (c - O) / (Je() - Ce) * 1e3 || 0,
                  u = me.utils.clamp(-o, 1 - o, _t(d / 2) * d / .185),
                  g = o + (!1 === se.inertia ? 0 : u),
                  h = Te(0, 1, s(g, Le)),
                  p = Math.round(i + h * m),
                  {
                    onStart: f,
                    onInterrupt: v,
                    onComplete: b
                  } = se;
                if (e <= l && e >= i && p !== e) {
                  if (n && !n._initted && n.data <= _t(p - e)) return;
                  !1 === se.inertia && (u = h - o), a(p, {
                    duration: A(_t(.185 * Math.max(_t(g - c), _t(h - c)) / d / .05 || 0)),
                    ease: se.ease || "power3",
                    data: _t(p - e),
                    onInterrupt: () => B.restart(!0) && v && v(Le),
                    onComplete: () => {
                      Le.update(), ze = qe(), I = O = t && !fe ? t.totalProgress() : Le.progress, ae && ae(Le), b && b(Le)
                    }
                  }, e, u * m, p - e - u * m), f && f(Le, a.tween)
                }
              }
            })).pause()), V && (ea[V] = Le), W = Le.trigger = ie(W || !0 !== K && K), $ = W && W._gsap && W._gsap.stRevert, $ && ($ = $(Le)), K = !0 === K ? W : ie(K), ft(U) && (U = {
              targets: W,
              className: U
            }), K && (!1 === J || J === Pt || (J = !(!J && K.parentNode && K.parentNode.style && "flex" === Lt(K.parentNode).display) && Ot), Le.pin = K, r = me.core.getCache(K), r.spacer ? f = r.pinState : (de && (de = ie(de), de && !de.nodeType && (de = de.current || de.nativeElement), r.spacerIsNative = !!de, de && (r.spacerState = Ta(de))), r.spacer = x = de || be.createElement("div"), x.classList.add("pin-spacer"), V && x.classList.add("pin-spacer-" + V), r.pinState = f = Ta(K)), !1 !== e.force3D && me.set(K, {
              force3D: !0
            }), Le.spacer = x = r.spacer, N = Lt(K), C = N[J + pe.os2], k = me.getProperty(K), _ = me.quickSetter(K, pe.a, Bt), ka(K, x, N), b = Ta(K)), Pe) {
            h = xt(Pe) ? Dt(Pe, Gt) : Gt, u = Qt("scroller-start", V, ke, pe, h, 0), g = Qt("scroller-end", V, ke, pe, h, 0, u), y = u["offset" + pe.op.d2];
            let e = ie(Q(ke, "content") || ke);
            c = this.markerStart = Qt("start", V, e, pe, h, y, 0, ue), d = this.markerEnd = Qt("end", V, e, pe, h, y, 0, ue), ue && (F = me.quickSetter([c, d], pe.a, Bt)), Ee || H.length && !0 === Q(ke, "fixedMarkers") || ((e => {
              let t = Lt(e).position;
              e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
            })(Se ? ye : ke), me.set([u, g], {
              force3D: !0
            }), j = me.quickSetter(u, pe.a, Bt), E = me.quickSetter(g, pe.a, Bt))
          }
          if (ue) {
            let e = ue.vars.onUpdate,
              t = ue.vars.onUpdateParams;
            ue.eventCallback("onUpdate", (() => {
              Le.update(0, 0, 1), e && e.apply(ue, t || [])
            }))
          }
          if (Le.previous = () => Zt[Zt.indexOf(Le) - 1], Le.next = () => Zt[Zt.indexOf(Le) + 1], Le.revert = (e, a) => {
              if (!a) return Le.kill(!0);
              let r = !1 !== e || !Le.enabled,
                s = je;
              r !== Le.isReverted && (r && (L = Math.max(qe(), Le.scroll.rec || 0), Ve = Le.progress, D = t && t.progress()), c && [c, d, u, g].forEach((e => e.style.display = r ? "none" : "block")), r && (je = Le, Le.update(r)), !K || ce && Le.isActive || (r ? ((e, t, a) => {
                wa(a);
                let r = e._gsap;
                if (r.spacerIsNative) wa(r.spacerState);
                else if (e._gsap.swappedIn) {
                  let a = t.parentNode;
                  a && (a.insertBefore(e, t), a.removeChild(t))
                }
                e._gsap.swappedIn = !1
              })(K, x, f) : ka(K, x, Lt(K), S)), r || Le.update(r), je = s, Le.isReverted = r)
            }, Le.refresh = (r, s, h, y) => {
              if ((je || !Le.enabled) && !s) return;
              if (K && r && et) return void qt(Oa, "scrollEnd", ia);
              !He && De && De(Le), je = Le, a.tween && !h && (a.tween.kill(), a.tween = 0), P && P.pause(), Z && t && t.revert({
                kill: !1
              }).invalidate(), Le.isReverted || Le.revert(!0, !0), Le._subPinOffset = !1;
              let _, C, j, E, N, I, O, R, A, F, $, z, U, V = Fe(),
                q = $e(),
                Y = ue ? ue.duration() : pt(ke, pe),
                G = m <= .01,
                H = 0,
                Q = y || 0,
                ee = xt(h) ? h.end : e.end,
                te = e.endTrigger || W,
                ae = xt(h) ? h.start : e.start || (0 !== e.start && W ? K ? "0 0" : "0 100%" : 0),
                re = Le.pinnedContainer = e.pinnedContainer && ie(e.pinnedContainer, Le),
                se = W && Math.max(0, Zt.indexOf(Le)) || 0,
                de = se;
              for (Pe && xt(h) && (z = me.getProperty(u, pe.p), U = me.getProperty(g, pe.p)); de--;) I = Zt[de], I.end || I.refresh(0, 1) || (je = Le), O = I.pin, !O || O !== W && O !== K && O !== re || I.isReverted || (F || (F = []), F.unshift(I), I.revert(!0, !0)), I !== Zt[de] && (se--, de--);
              for (vt(ae) && (ae = ae(Le)), ae = at(ae, "start", Le), i = Sa(ae, W, V, pe, qe(), c, u, Le, q, Be, Ee, Y, ue, Le._startClamp && "_startClamp") || (K ? -.001 : 0), vt(ee) && (ee = ee(Le)), ft(ee) && !ee.indexOf("+=") && (~ee.indexOf(" ") ? ee = (ft(ae) ? ae.split(" ")[0] : "") + ee : (H = Kt(ee.substr(2), V), ee = ft(ae) ? ae : (ue ? me.utils.mapRange(0, ue.duration(), ue.scrollTrigger.start, ue.scrollTrigger.end, i) : i) + H, te = W)), ee = at(ee, "end", Le), l = Math.max(i, Sa(ee || (te ? "100% 0" : Y), te, V, pe, qe() + H, d, g, Le, q, Be, Ee, Y, ue, Le._endClamp && "_endClamp")) || -.001, H = 0, de = se; de--;) I = Zt[de], O = I.pin, O && I.start - I._pinPush <= i && !ue && I.end > 0 && (_ = I.end - (Le._startClamp ? Math.max(0, I.start) : I.start), (O === W && I.start - I._pinPush < i || O === re) && isNaN(ae) && (H += _ * (1 - I.progress)), O === K && (Q += _));
              if (i += H, l += H, Le._startClamp && (Le._startClamp += H), Le._endClamp && !He && (Le._endClamp = l || -.001, l = Math.min(l, pt(ke, pe))), m = l - i || (i -= .01) && .001, G && (Ve = me.utils.clamp(0, 1, me.utils.normalize(i, l, L))), Le._pinPush = Q, c && H && (_ = {}, _[pe.a] = "+=" + H, re && (_[pe.p] = "-=" + qe()), me.set([c, d], _)), K) _ = Lt(K), E = pe === oe, j = qe(), w = parseFloat(k(pe.a)) + Q, !Y && l > 1 && ($ = (Se ? be.scrollingElement || xe : ke).style, $ = {
                style: $,
                value: $["overflow" + pe.a.toUpperCase()]
              }, Se && "scroll" !== Lt(ye)["overflow" + pe.a.toUpperCase()] && ($.style["overflow" + pe.a.toUpperCase()] = "scroll")), ka(K, x, _), b = Ta(K), C = Ft(K, !0), R = Ee && le(ke, E ? ne : oe)(), J && (S = [J + pe.os2, m + Q + Bt], S.t = x, de = J === Ot ? $t(K, pe) + m + Q : 0, de && S.push(pe.d, de + Bt), wa(S), re && Zt.forEach((e => {
                e.pin === re && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), Ee && qe(L)), Ee && (N = {
                top: C.top + (E ? j - i : R) + Bt,
                left: C.left + (E ? R : j - i) + Bt,
                boxSizing: "border-box",
                position: "fixed"
              }, N[St] = N["max" + Rt] = Math.ceil(C.width) + Bt, N[jt] = N["max" + At] = Math.ceil(C.height) + Bt, N[Pt] = N[Pt + Nt] = N[Pt + Mt] = N[Pt + It] = N[Pt + Et] = "0", N[Ot] = _[Ot], N[Ot + Nt] = _[Ot + Nt], N[Ot + Mt] = _[Ot + Mt], N[Ot + It] = _[Ot + It], N[Ot + Et] = _[Ot + Et], v = ((e, t, a) => {
                let r, s = [],
                  n = e.length,
                  o = a ? 8 : 0;
                for (; o < n; o += 2) r = e[o], s.push(r, r in t ? t[r] : e[o + 1]);
                return s.t = e.t, s
              })(f, N, ce), He && qe(0)), t ? (A = t._initted, Ae(1), t.render(t.duration(), !0, !0), T = k(pe.a) - w + m + Q, M = Math.abs(m - T) > 1, Ee && M && v.splice(v.length - 2, 2), t.render(0, !0, !0), A || t.invalidate(!0), t.parent || t.totalTime(t.totalTime()), Ae(0)) : T = m, $ && ($.value ? $.style["overflow" + pe.a.toUpperCase()] = $.value : $.style.removeProperty("overflow-" + pe.a));
              else if (W && qe() && !ue)
                for (C = W.parentNode; C && C !== ye;) C._pinOffset && (i -= C._pinOffset, l -= C._pinOffset), C = C.parentNode;
              F && F.forEach((e => e.revert(!1, !0))), Le.start = i, Le.end = l, n = o = He ? L : qe(), ue || He || (n < L && qe(L), Le.scroll.rec = 0), Le.revert(!1, !0), Ue = Je(), B && (ze = -1, B.restart(!0)), je = 0, t && fe && (t._initted || D) && t.progress() !== D && t.progress(D || 0, !0).render(t.time(), !0, !0), (G || Ve !== Le.progress || ue) && (t && !fe && t.totalProgress(ue && i < -.001 && !Ve ? me.utils.normalize(i, l, 0) : Ve, !0), Le.progress = G || (n - i) / m === Ve ? 0 : Ve), K && J && (x._pinOffset = Math.round(Le.progress * T)), P && P.invalidate(), isNaN(z) || (z -= me.getProperty(u, pe.p), U -= me.getProperty(g, pe.p), Na(u, pe, z), Na(c, pe, z - (y || 0)), Na(g, pe, U), Na(d, pe, U - (y || 0))), G && !He && Le.update(), !X || He || p || (p = !0, X(Le), p = !1)
            }, Le.getVelocity = () => (qe() - o) / (Je() - Ce) * 1e3 || 0, Le.endAnimation = () => {
              yt(Le.callbackAnimation), t && (P ? P.progress(1) : t.paused() ? fe || yt(t, Le.direction < 0, 1) : yt(t, t.reversed()))
            }, Le.labelToScroll = e => t && t.labels && (i || Le.refresh() || i) + t.labels[e] / t.duration() * m || 0, Le.getTrailing = e => {
              let t = Zt.indexOf(Le),
                a = Le.direction > 0 ? Zt.slice(0, t).reverse() : Zt.slice(t + 1);
              return (ft(e) ? a.filter((t => t.vars.preventOverlaps === e)) : a).filter((e => Le.direction > 0 ? e.end <= i : e.start >= l))
            }, Le.update = (e, r, s) => {
              if (ue && !s && !e) return;
              let c, d, g, h, p, f, y, k, S = !0 === He ? L : Le.scroll(),
                N = e ? 0 : (S - i) / m,
                R = N < 0 ? 0 : N > 1 ? 1 : N || 0,
                A = Le.progress;
              if (r && (o = n, n = ue ? qe() : S, se && (O = I, I = t && !fe ? t.totalProgress() : R)), ee && !R && K && !je && !Qe && et && i < S + (S - o) / (Je() - Ce) * ee && (R = 1e-4), R !== A && Le.enabled) {
                if (c = Le.isActive = !!R && R < 1, d = !!A && A < 1, f = c !== d, p = f || !!R != !!A, Le.direction = R > A ? 1 : -1, Le.progress = R, p && !je && (g = R && !A ? 0 : 1 === R ? 1 : 1 === A ? 2 : 3, fe && (h = !f && "none" !== Oe[g + 1] && Oe[g + 1] || Oe[g], k = t && ("complete" === h || "reset" === h || h in t))), he && (f || k) && (k || Y || !t) && (vt(he) ? he(Le) : Le.getTrailing(he).forEach((e => e.endAnimation()))), fe || (!P || je || Qe ? t && t.totalProgress(R, !(!je || !Ue && !e)) : (P._dp._time - P._start !== P._time && P.render(P._dp._time - P._start), P.resetTo ? P.resetTo("totalProgress", R, t._tTime / t._tDur) : (P.vars.totalProgress = R, P.invalidate().restart()))), K)
                  if (e && J && (x.style[J + pe.os2] = C), Ee) {
                    if (p) {
                      if (y = !e && R > A && l + 1 > S && S + 1 >= pt(ke, pe), ce)
                        if (e || !c && !y) Ma(K, x);
                        else {
                          let e = Ft(K, !0),
                            t = S - i;
                          Ma(K, ye, e.top + (pe === oe ? t : 0) + Bt, e.left + (pe === oe ? 0 : t) + Bt)
                        } wa(c || y ? v : b), M && R < 1 && c || _(w + (1 !== R || y ? 0 : T))
                    }
                  } else _(lt(w + T * R));
                se && !a.tween && !je && !Qe && B.restart(!0), U && (f || re && R && (R < 1 || !Ye)) && we(U.targets).forEach((e => e.classList[c || re ? "add" : "remove"](U.className))), z && !fe && !e && z(Le), p && !je ? (fe && (k && ("complete" === h ? t.pause().totalProgress(1) : "reset" === h ? t.restart(!0).pause() : "restart" === h ? t.restart(!0) : t[h]()), z && z(Le)), !f && Ye || (q && f && kt(Le, q), Ie[g] && kt(Le, Ie[g]), re && (1 === R ? Le.kill(!1, 1) : Ie[g] = 0), f || (g = 1 === R ? 1 : 3, Ie[g] && kt(Le, Ie[g]))), ge && !c && Math.abs(Le.getVelocity()) > (bt(ge) ? ge : 2500) && (yt(Le.callbackAnimation), P ? P.progress(1) : yt(t, "reverse" === h ? 1 : !R, 1))) : fe && z && !je && z(Le)
              }
              if (E) {
                let e = ue ? S / ue.duration() * (ue._caScrollDist || 0) : S;
                j(e + (u._isFlipped ? 1 : 0)), E(e)
              }
              F && F(-S / ue.duration() * (ue._caScrollDist || 0))
            }, Le.enable = (e, t) => {
              Le.enabled || (Le.enabled = !0, qt(ke, "resize", sa), Se || qt(ke, "scroll", aa), De && qt(Oa, "refreshInit", De), !1 !== e && (Le.progress = Ve = 0, n = o = ze = qe()), !1 !== t && Le.refresh())
            }, Le.getTween = e => e && a ? a.tween : P, Le.setPositions = (e, t, a, r) => {
              if (ue) {
                let a = ue.scrollTrigger,
                  r = ue.duration(),
                  s = a.end - a.start;
                e = a.start + s * e / r, t = a.start + s * t / r
              }
              Le.refresh(!1, !1, {
                start: rt(e, a && !!Le._startClamp),
                end: rt(t, a && !!Le._endClamp)
              }, r), Le.update()
            }, Le.adjustPinSpacing = e => {
              if (S && e) {
                let t = S.indexOf(pe.d) + 1;
                S[t] = parseFloat(S[t]) + e + Bt, S[1] = parseFloat(S[1]) + e + Bt, wa(S)
              }
            }, Le.disable = (e, t) => {
              if (Le.enabled && (!1 !== e && Le.revert(!0, !0), Le.enabled = Le.isActive = !1, t || P && P.pause(), L = 0, r && (r.uncache = 1), De && Xt(Oa, "refreshInit", De), B && (B.pause(), a.tween && a.tween.kill() && (a.tween = 0)), !Se)) {
                let e = Zt.length;
                for (; e--;)
                  if (Zt[e].scroller === ke && Zt[e] !== Le) return;
                Xt(ke, "resize", sa), Se || Xt(ke, "scroll", aa)
              }
            }, Le.kill = (a, s) => {
              Le.disable(a, s), P && !s && P.kill(), V && delete ea[V];
              let n = Zt.indexOf(Le);
              n >= 0 && Zt.splice(n, 1), n === Ne && va > 0 && Ne--, n = 0, Zt.forEach((e => e.scroller === Le.scroller && (n = 1))), n || He || (Le.scroll.rec = 0), t && (t.scrollTrigger = null, a && t.revert({
                kill: !1
              }), s || t.kill()), c && [c, d, u, g].forEach((e => e.parentNode && e.parentNode.removeChild(e))), Ke === Le && (Ke = 0), K && (r && (r.uncache = 1), n = 0, Zt.forEach((e => e.pin === K && n++)), n || (r.spacer = 0)), e.onKill && e.onKill(Le)
            }, Zt.push(Le), Le.enable(!1, !1), $ && $(Le), t && t.add && !m) {
            let e = Le.update;
            Le.update = () => {
              Le.update = e, i || l || Le.refresh()
            }, me.delayedCall(.01, Le.update), m = .01, i = l = 0
          } else Le.refresh();
          K && (() => {
            if (We !== ha) {
              let e = We = ha;
              requestAnimationFrame((() => e === ha && ma(!0)))
            }
          })()
        }
        static register(e) {
          return fe || (me = e || dt(), ct() && window.document && Oa.enable(), fe = tt), fe
        }
        static defaults(e) {
          if (e)
            for (let t in e) Ht[t] = e[t];
          return Ht
        }
        static disable(e, t) {
          tt = 0, Zt.forEach((a => a[t ? "kill" : "disable"](e))), Xt(ve, "wheel", aa), Xt(be, "scroll", aa), clearInterval(Se), Xt(be, "touchcancel", it), Xt(ye, "touchstart", it), Vt(Xt, be, "pointerdown,touchstart,mousedown", nt), Vt(Xt, be, "pointerup,touchend,mouseup", ot), _e.kill(), mt(Xt);
          for (let e = 0; e < G.length; e += 3) Yt(Xt, G[e], G[e + 1]), Yt(Xt, G[e], G[e + 2])
        }
        static enable() {
          if (ve = window, be = document, xe = be.documentElement, ye = be.body, me && (we = me.utils.toArray, Te = me.utils.clamp, Ue = me.core.context || it, Ae = me.core.suppressOverwrites || it, Ve = ve.history.scrollRestoration || "auto", fa = ve.pageYOffset, me.core.globals("ScrollTrigger", Oa), ye)) {
            tt = 1, qe = document.createElement("div"), qe.style.height = "100vh", qe.style.position = "absolute", pa(), st(), pe.register(me), Oa.isTouch = pe.isTouch, ze = pe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), qt(ve, "wheel", aa), ke = [ve, be, xe, ye], me.matchMedia ? (Oa.matchMedia = e => {
              let t, a = me.matchMedia();
              for (t in e) a.add(t, e[t]);
              return a
            }, me.addEventListener("matchMediaInit", (() => ua())), me.addEventListener("matchMediaRevert", (() => da())), me.addEventListener("matchMedia", (() => {
              ma(0, 1), la("matchMedia")
            })), me.matchMedia("(orientation: portrait)", (() => (ra(), ra)))) : console.warn("Requires GSAP 3.11.0 or later"), ra(), qt(be, "scroll", aa);
            let e, t, a = ye.style,
              r = a.borderTopStyle,
              s = me.core.Animation.prototype;
            for (s.revert || Object.defineProperty(s, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), a.borderTopStyle = "solid", e = Ft(ye), oe.m = Math.round(e.top + oe.sc()) || 0, ne.m = Math.round(e.left + ne.sc()) || 0, r ? a.borderTopStyle = r : a.removeProperty("border-top-style"), Se = setInterval(ta, 250), me.delayedCall(.5, (() => Qe = 0)), qt(be, "touchcancel", it), qt(ye, "touchstart", it), Vt(qt, be, "pointerdown,touchstart,mousedown", nt), Vt(qt, be, "pointerup,touchend,mouseup", ot), Ee = me.utils.checkPrefix("transform"), ya.push(Ee), fe = Je(), _e = me.delayedCall(.2, ma).pause(), Pe = [be, "visibilitychange", () => {
                let e = ve.innerWidth,
                  t = ve.innerHeight;
                be.hidden ? (Ie = e, Oe = t) : Ie === e && Oe === t || sa()
              }, be, "DOMContentLoaded", ma, ve, "load", ma, ve, "resize", sa], mt(qt), Zt.forEach((e => e.enable(0, 1))), t = 0; t < G.length; t += 3) Yt(Xt, G[t], G[t + 1]), Yt(Xt, G[t], G[t + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (Ye = !!e.limitCallbacks);
          let t = e.syncInterval;
          t && clearInterval(Se) || (Se = t) && setInterval(ta, t), "ignoreMobileResize" in e && (De = 1 === Oa.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (mt(Xt) || mt(qt, e.autoRefreshEvents || "none"), Be = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, t) {
          let a = ie(e),
            r = G.indexOf(a),
            s = ut(a);
          ~r && G.splice(r, s ? 6 : 2), t && (s ? H.unshift(ve, t, ye, t, xe, t) : H.unshift(a, t))
        }
        static clearMatchMedia(e) {
          Zt.forEach((t => t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)))
        }
        static isInViewport(e, t, a) {
          let r = (ft(e) ? ie(e) : e).getBoundingClientRect(),
            s = r[a ? St : jt] * t || 0;
          return a ? r.right - s > 0 && r.left + s < ve.innerWidth : r.bottom - s > 0 && r.top + s < ve.innerHeight
        }
        static positionInViewport(e, t, a) {
          ft(e) && (e = ie(e));
          let r = e.getBoundingClientRect(),
            s = r[a ? St : jt],
            n = null == t ? s / 2 : t in Wt ? Wt[t] * s : ~t.indexOf("%") ? parseFloat(t) * s / 100 : parseFloat(t) || 0;
          return a ? (r.left + n) / ve.innerWidth : (r.top + n) / ve.innerHeight
        }
        static killAll(e) {
          if (Zt.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = na.killAll || [];
            na = {}, e.forEach((e => e()))
          }
        }
      }
      Oa.version = "3.12.2", Oa.saveStyles = e => e ? we(e).forEach((e => {
        if (e && e.style) {
          let t = ca.indexOf(e);
          t >= 0 && ca.splice(t, 5), ca.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), me.core.getCache(e), Ue())
        }
      })) : ca, Oa.revert = (e, t) => ua(!e, t), Oa.create = (e, t) => new Oa(e, t), Oa.refresh = e => e ? sa() : (fe || Oa.register()) && ma(!0), Oa.update = e => ++G.cache && ba(!0 === e ? 2 : 0), Oa.clearScrollMemory = ga, Oa.maxScroll = (e, t) => pt(e, t ? ne : oe), Oa.getScrollFunc = (e, t) => le(ie(e), t ? ne : oe), Oa.getById = e => ea[e], Oa.getAll = () => Zt.filter((e => "ScrollSmoother" !== e.vars.id)), Oa.isScrolling = () => !!et, Oa.snapDirectional = Ut, Oa.addEventListener = (e, t) => {
        let a = na[e] || (na[e] = []);
        ~a.indexOf(t) || a.push(t)
      }, Oa.removeEventListener = (e, t) => {
        let a = na[e],
          r = a && a.indexOf(t);
        r >= 0 && a.splice(r, 1)
      }, Oa.batch = (e, t) => {
        let a, r = [],
          s = {},
          n = t.interval || .016,
          o = t.batchMax || 1e9,
          i = (e, t) => {
            let a = [],
              r = [],
              s = me.delayedCall(n, (() => {
                t(a, r), a = [], r = []
              })).pause();
            return e => {
              a.length || s.restart(!0), a.push(e.trigger), r.push(e), o <= a.length && s.progress(1)
            }
          };
        for (a in t) s[a] = "on" === a.substr(0, 2) && vt(t[a]) && "onRefreshInit" !== a ? i(0, t[a]) : t[a];
        return vt(o) && (o = o(), qt(Oa, "refresh", (() => o = t.batchMax()))), we(e).forEach((e => {
          let t = {};
          for (a in s) t[a] = s[a];
          t.trigger = e, r.push(Oa.create(t))
        })), r
      };
      let Pa, Ra = (e, t, a, r) => (t > r ? e(r) : t < 0 && e(0), a > r ? (r - t) / (a - t) : a < 0 ? t / (t - a) : 1),
        Aa = (e, t) => {
          !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (pe.isTouch ? " pinch-zoom" : "") : "none", e === xe && Aa(ye, t)
        },
        Ba = {
          auto: 1,
          scroll: 1
        },
        La = e => {
          let t, {
              event: a,
              target: r,
              axis: s
            } = e,
            n = (a.changedTouches ? a.changedTouches[0] : a).target,
            o = n._gsap || me.core.getCache(n),
            i = Je();
          if (!o._isScrollT || i - o._isScrollT > 2e3) {
            for (; n && n !== ye && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !Ba[(t = Lt(n)).overflowY] && !Ba[t.overflowX]);) n = n.parentNode;
            o._isScroll = n && n !== r && !ut(n) && (Ba[(t = Lt(n)).overflowY] || Ba[t.overflowX]), o._isScrollT = i
          }(o._isScroll || "x" === s) && (a.stopPropagation(), a._gsapAllow = !0)
        },
        Da = (e, t, a, r) => pe.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: r = r && La,
          onPress: r,
          onDrag: r,
          onScroll: r,
          onEnable: () => a && qt(be, pe.eventTypes[0], $a, !1, !0),
          onDisable: () => Xt(be, pe.eventTypes[0], $a, !0)
        }),
        Fa = /(input|label|select|textarea)/i,
        $a = e => {
          let t = Fa.test(e.target.tagName);
          (t || Pa) && (e._gsapAllow = !0, Pa = t)
        };
      Oa.sort = e => Zt.sort(e || ((e, t) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0)))), Oa.observe = e => new pe(e), Oa.normalizeScroll = e => {
        if (void 0 === e) return Le;
        if (!0 === e && Le) return Le.enable();
        if (!1 === e) return Le && Le.kill();
        let t = e instanceof pe ? e : (e => {
          xt(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let t, a, r, s, n, o, i, l, {
              normalizeScrollX: c,
              momentum: d,
              allowNestedScroll: u,
              onRelease: g
            } = e,
            h = ie(e.target) || xe,
            p = me.core.globals().ScrollSmoother,
            m = p && p.get(),
            f = ze && (e.content && ie(e.content) || m && !1 !== e.content && !m.smooth() && m.content()),
            v = le(h, oe),
            b = le(h, ne),
            x = 1,
            y = (pe.isTouch && ve.visualViewport ? ve.visualViewport.scale * ve.visualViewport.width : ve.outerWidth) / ve.innerWidth,
            k = 0,
            _ = vt(d) ? () => d(t) : () => d || 2.8,
            w = Da(h, e.type, !0, u),
            T = () => s = !1,
            C = it,
            S = it,
            j = () => {
              a = pt(h, oe), S = Te(ze ? 1 : 0, a), c && (C = Te(0, pt(h, ne))), r = ha
            },
            M = () => {
              f._gsap.y = lt(parseFloat(f._gsap.y) + v.offset) + "px", f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(f._gsap.y) + ", 0, 1)", v.offset = v.cacheID = 0
            },
            E = () => {
              j(), n.isActive() && n.vars.scrollY > a && (v() > a ? n.progress(1) && v(a) : n.resetTo("scrollY", a))
            };
          return f && me.set(f, {
            y: "+=0"
          }), e.ignoreCheck = e => ze && "touchmove" === e.type && (() => {
            if (s) {
              requestAnimationFrame(T);
              let e = lt(t.deltaY / 2),
                a = S(v.v - e);
              if (f && a !== v.v + v.offset) {
                v.offset = a - v.v;
                let e = lt((parseFloat(f && f._gsap.y) || 0) - v.offset);
                f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", f._gsap.y = e + "px", v.cacheID = G.cache, ba()
              }
              return !0
            }
            v.offset && M(), s = !0
          })() || x > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            s = !1;
            let e = x;
            x = lt((ve.visualViewport && ve.visualViewport.scale || 1) / y), n.pause(), e !== x && Aa(h, x > 1.01 || !c && "x"), o = b(), i = v(), j(), r = ha
          }, e.onRelease = e.onGestureStart = (e, t) => {
            if (v.offset && M(), t) {
              G.cache++;
              let t, r, s = _();
              c && (t = b(), r = t + .05 * s * -e.velocityX / .227, s *= Ra(b, t, r, pt(h, ne)), n.vars.scrollX = C(r)), t = v(), r = t + .05 * s * -e.velocityY / .227, s *= Ra(v, t, r, pt(h, oe)), n.vars.scrollY = S(r), n.invalidate().duration(s).play(.01), (ze && n.vars.scrollY >= a || t >= a - 1) && me.to({}, {
                onUpdate: E,
                duration: s
              })
            } else l.restart(!0);
            g && g(e)
          }, e.onWheel = () => {
            n._ts && n.pause(), Je() - k > 1e3 && (r = 0, k = Je())
          }, e.onChange = (e, t, a, s, n) => {
            if (ha !== r && j(), t && c && b(C(s[2] === t ? o + (e.startX - e.x) : b() + t - s[1])), a) {
              v.offset && M();
              let t = n[2] === a,
                r = t ? i + e.startY - e.y : v() + a - n[1],
                s = S(r);
              t && r !== s && (i += s - r), v(s)
            }(a || t) && ba()
          }, e.onEnable = () => {
            Aa(h, !c && "x"), Oa.addEventListener("refresh", E), qt(ve, "resize", E), v.smooth && (v.target.style.scrollBehavior = "auto", v.smooth = b.smooth = !1), w.enable()
          }, e.onDisable = () => {
            Aa(h, !0), Xt(ve, "resize", E), Oa.removeEventListener("refresh", E), w.kill()
          }, e.lockAxis = !1 !== e.lockAxis, t = new pe(e), t.iOS = ze, ze && !v() && v(1), ze && me.ticker.add(it), l = t._dc, n = me.to(t, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: Ea(v, v(), (() => n.pause()))
            },
            onUpdate: ba,
            onComplete: l.vars.onComplete
          }), t
        })(e);
        return Le && Le.target === t.target && Le.kill(), ut(t.target) && (Le = t), t
      }, Oa.core = {
        _getVelocityProp: ce,
        _inputObserver: Da,
        _scrollers: G,
        _proxies: H,
        bridge: {
          ss: () => {
            et || la("scrollStart"), et = Je()
          },
          ref: () => je
        }
      }, dt() && me.registerPlugin(Oa);
      let za, Ua, Va, qa, Xa, Ya, Ga, Ha, Wa, Ka, Qa, Ja, Za, er, tr, ar, rr = () => "undefined" != typeof window,
        sr = () => za || rr() && (za = window.gsap) && za.registerPlugin && za,
        nr = e => Ka.maxScroll(e || Va);
      class or {
        constructor(e) {
          Ua || or.register(za) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, Qa && Qa.kill(), Qa = this, tr(this);
          let t, a, r, s, n, o, i, l, c, d, u, g, h, p, m, {
              smoothTouch: f,
              onUpdate: v,
              onStop: b,
              smooth: x,
              onFocusIn: y,
              normalizeScroll: k,
              wholePixels: _
            } = e,
            w = this,
            T = e.effectsPrefix || "",
            C = Ka.getScrollFunc(Va),
            S = 1 === Ka.isTouch ? !0 === f ? .8 : parseFloat(f) || 0 : 0 === x || !1 === x ? 0 : parseFloat(x) || .8,
            j = S && +e.speed || 1,
            M = 0,
            E = 0,
            N = 1,
            I = Za(0),
            O = () => I.update(-M),
            P = {
              y: 0
            },
            R = () => t.style.overflow = "visible",
            A = e => {
              e.update();
              let t = e.getTween();
              t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), p = !1, e.animation.progress(e.progress, !0)
            },
            B = (e, a) => {
              (e !== M && !d || a) && (_ && (e = Math.round(e)), S && (t.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", t._gsap.y = e + "px"), E = e - M, M = e, Ka.isUpdating || or.isRefreshing || Ka.update())
            },
            L = function(e) {
              return arguments.length ? (e < 0 && (e = 0), P.y = -e, p = !0, d ? M = -e : B(-e), Ka.isRefreshing ? s.update() : C(e / j), this) : -M
            },
            D = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!Ka.isRefreshing) {
                let e = nr(a) * j;
                e < -M && L(e), ar.restart(!0)
              }
            })),
            F = e => {
              a.scrollTop = 0, e.target.contains && e.target.contains(a) || y && !1 === y(this, e) || (Ka.isInViewport(e.target) || e.target === m || this.scrollTo(e.target, !1, "center center"), m = e.target)
            },
            $ = (e, t) => {
              if (e < t.start) return e;
              let a = isNaN(t.ratio) ? 1 : t.ratio,
                r = t.end - t.start,
                s = e - t.start,
                n = t.offset || 0,
                o = t.pins || [],
                i = o.offset || 0,
                l = t._startClamp && t.start <= 0 || t.pins && t.pins.offset ? 0 : t._endClamp && t.end === nr() ? 1 : .5;
              return o.forEach((t => {
                r -= t.distance, t.nativeStart <= e && (s -= t.distance)
              })), i && (s *= (r - i / a) / r), e + (s - n * l) / a - s
            },
            z = (e, t, a) => {
              a || (e.pins.length = e.pins.offset = 0);
              let r, s, n, o, i, l, c, d, u = e.pins,
                g = e.markers;
              for (c = 0; c < t.length; c++)
                if (d = t[c], e.trigger && d.trigger && e !== d && (d.trigger === e.trigger || d.pinnedContainer === e.trigger || e.trigger.contains(d.trigger)) && (i = d._startNative || d._startClamp || d.start, l = d._endNative || d._endClamp || d.end, n = $(i, e), o = d.pin && l > 0 ? n + (l - i) : $(l, e), d.setPositions(n, o, !0, (d._startClamp ? Math.max(0, n) : n) - i), d.markerStart && g.push(za.quickSetter([d.markerStart, d.markerEnd], "y", "px")), d.pin && d.end > 0 && !a)) {
                  if (r = d.end - d.start, s = e._startClamp && d.start < 0, s) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void z(e, t);
                    r += d.start, u.offset = -d.start
                  }
                  u.push({
                    start: d.start,
                    nativeStart: i,
                    end: d.end,
                    distance: r,
                    trig: d
                  }), e.setPositions(e.start, e.end + (s ? -d.start : r), !0)
                }
            },
            U = (e, t) => {
              n.forEach((a => z(a, e, t)))
            },
            V = () => {
              R(), requestAnimationFrame(R), n && (Ka.getAll().forEach((e => {
                e._startNative = e.start, e._endNative = e.end
              })), n.forEach((e => {
                let t = e._startClamp || e.start,
                  a = e.autoSpeed ? Math.min(nr(), e.end) : t + Math.abs((e.end - t) / e.ratio),
                  r = a - e.end;
                if (t -= r / 2, a -= r / 2, t > a) {
                  let e = t;
                  t = a, a = e
                }
                e._startClamp && t < 0 ? (a = e.ratio < 0 ? nr() : e.end / e.ratio, r = a - e.end, t = 0) : (e.ratio < 0 || e._endClamp && a >= nr()) && (a = nr(), t = e.ratio < 0 || e.ratio > 1 ? 0 : a - (a - e.start) / e.ratio, r = (a - t) * e.ratio - (e.end - e.start)), e.offset = r || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(t, a, !0)
              })), U(Ka.sort())), I.reset()
            },
            q = () => Ka.addEventListener("refresh", V),
            X = () => n && n.forEach((e => e.vars.onRefresh(e))),
            Y = () => (n && n.forEach((e => e.vars.onRefreshInit(e))), X),
            G = (e, t, a, r) => () => {
              let s = "function" == typeof t ? t(a, r) : t;
              s || 0 === s || (s = r.getAttribute("data-" + T + e) || ("speed" === e ? 1 : 0)), r.setAttribute("data-" + T + e, s);
              let n = "clamp(" === (s + "").substr(0, 6);
              return {
                clamp: n,
                value: n ? s.substr(6, s.length - 7) : s
              }
            },
            H = (e, t, r, s, o) => {
              o = ("function" == typeof o ? o(s, e) : o) || 0;
              let i, l, c, d, u, g, h = G("speed", t, s, e),
                p = G("lag", r, s, e),
                m = za.getProperty(e, "y"),
                f = e._gsap,
                v = [],
                b = () => {
                  t = h(), r = parseFloat(p().value), i = parseFloat(t.value) || 1, c = "auto" === t.value, u = c || l && l._startClamp && l.start <= 0 || v.offset ? 0 : l && l._endClamp && l.end === nr() ? 1 : .5, d && d.kill(), d = r && za.to(e, {
                    ease: Ja,
                    overwrite: !1,
                    y: "+=0",
                    duration: r
                  }), l && (l.ratio = i, l.autoSpeed = c)
                },
                x = () => {
                  f.y = m + "px", f.renderTransform(1), b()
                },
                y = [],
                k = 0,
                _ = t => {
                  if (c) {
                    x();
                    let a = ((e, t) => {
                      let a, r, s = e.parentNode || Xa,
                        n = e.getBoundingClientRect(),
                        o = s.getBoundingClientRect(),
                        i = o.top - n.top,
                        l = o.bottom - n.bottom,
                        c = (Math.abs(i) > Math.abs(l) ? i : l) / (1 - t),
                        d = -c * t;
                      return c > 0 && (a = o.height / (Va.innerHeight + o.height), r = .5 === a ? 2 * o.height : 2 * Math.min(o.height, Math.abs(-c * a / (2 * a - 1))) * (t || 1), d += t ? -r * t : -r / 2, c += r), {
                        change: c,
                        offset: d
                      }
                    })(e, Wa(0, 1, -t.start / (t.end - t.start)));
                    k = a.change, g = a.offset
                  } else g = v.offset || 0, k = (t.end - t.start - g) * (1 - i);
                  v.forEach((e => k -= e.distance * (1 - i))), t.offset = k || .001, t.vars.onUpdate(t), d && d.progress(1)
                };
              return b(), (1 !== i || c || d) && (l = Ka.create({
                trigger: c ? e.parentNode : e,
                start: () => t.clamp ? "clamp(top bottom+=" + o + ")" : "top bottom+=" + o,
                end: () => t.value < 0 ? "max" : t.clamp ? "clamp(bottom top-=" + o + ")" : "bottom top-=" + o,
                scroller: a,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: x,
                onRefresh: _,
                onKill: e => {
                  let t = n.indexOf(e);
                  t >= 0 && n.splice(t, 1), x()
                },
                onUpdate: e => {
                  let t, a, r, s = m + k * (e.progress - u),
                    n = v.length,
                    o = 0;
                  if (e.offset) {
                    if (n) {
                      for (a = -M, r = e.end; n--;) {
                        if (t = v[n], t.trig.isActive || a >= t.start && a <= t.end) return void(d && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), d.resetTo("y", parseFloat(f.y), -E, !0), N && d.progress(1)));
                        a > t.end && (o += t.distance), r -= t.distance
                      }
                      s = m + o + k * ((za.utils.clamp(e.start, e.end, a) - e.start - o) / (r - e.start) - u)
                    }
                    y.length && !c && y.forEach((e => e(s - o))), i = s + g, s = Math.round(1e5 * i) / 1e5 || 0, d ? (d.resetTo("y", s, -E, !0), N && d.progress(1)) : (f.y = s + "px", f.renderTransform(1))
                  }
                  var i
                }
              }), _(l), za.core.getCache(l.trigger).stRevert = Y, l.startY = m, l.pins = v, l.markers = y, l.ratio = i, l.autoSpeed = c, e.style.willChange = "transform"), l
            };

          function W() {
            return r = t.clientHeight, t.style.overflow = "visible", Ya.style.height = Va.innerHeight + (r - Va.innerHeight) / j + "px", r - Va.innerHeight
          }
          q(), Ka.addEventListener("killAll", q), za.delayedCall(.5, (() => N = 0)), this.scrollTop = L, this.scrollTo = (e, t, a) => {
            let r = za.utils.clamp(0, nr(), isNaN(e) ? this.offset(e, a) : +e);
            t ? d ? za.to(this, {
              duration: S,
              scrollTop: r,
              overwrite: "auto",
              ease: Ja
            }) : C(r) : L(r)
          }, this.offset = (e, t) => {
            let a, r = (e = Ha(e)[0]).style.cssText,
              s = Ka.create({
                trigger: e,
                start: t || "top top"
              });
            return n && (N ? Ka.refresh() : U([s], !0)), a = s.start / j, s.kill(!1), e.style.cssText = r, za.core.getCache(e).uncache = 1, a
          }, this.content = function(e) {
            if (arguments.length) {
              let a = Ha(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || Ya.children[0];
              return a !== t && (t = a, c = t.getAttribute("style") || "", D && D.observe(t), za.set(t, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), S || za.set(t, {
                clearProps: "transform"
              })), this
            }
            return t
          }, this.wrapper = function(e) {
            return arguments.length ? (a = Ha(e || "#smooth-wrapper")[0] || (e => {
              let t = qa.querySelector(".ScrollSmoother-wrapper");
              return t || (t = qa.createElement("div"), t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t
            })(t), l = a.getAttribute("style") || "", W(), za.set(a, S ? {
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
            (e = Ha(e)).forEach((e => {
              let t = n.length;
              for (; t--;) n[t].trigger === e && n[t].kill()
            })), t = t || {};
            let a, r, {
                speed: s,
                lag: o,
                effectsPadding: i
              } = t,
              l = [];
            for (a = 0; a < e.length; a++) r = H(e[a], s, o, a, i), r && l.push(r);
            return n.push(...l), l
          }, this.sections = (e, t) => {
            if (o || (o = []), !e) return o.slice(0);
            let a = Ha(e).map((e => Ka.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: t => {
                e.style.opacity = t.isActive ? "1" : "0", e.style.pointerEvents = t.isActive ? "all" : "none"
              }
            })));
            return t && t.add ? o.push(...a) : o = a.slice(0), a
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => B(e || 0 === e ? e : M), this.getVelocity = () => I.getVelocity(-M), Ka.scrollerProxy(a, {
            scrollTop: L,
            scrollHeight: () => W() && Ya.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!S,
            content: t,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: Va.innerWidth,
              height: Va.innerHeight
            })
          }), Ka.defaults({
            scroller: a
          });
          let K = Ka.getAll().filter((e => e.scroller === Va || e.scroller === a));
          K.forEach((e => e.revert(!0, !0))), s = Ka.create({
            animation: za.fromTo(P, {
              y: 0
            }, {
              y: () => -W(),
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function() {
                if (this._dur) {
                  let e = p;
                  e && (A(s), P.y = M), B(P.y, e), O(), v && !d && v(w)
                }
              }
            }),
            onRefreshInit: e => {
              if (or.isRefreshing) return;
              if (or.isRefreshing = !0, n) {
                let e = Ka.getAll().filter((e => !!e.pin));
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
              h = t && t._end > t._dp._time, g = M, P.y = 0, S && (1 === Ka.isTouch && (a.style.position = "absolute"), a.scrollTop = 0, 1 === Ka.isTouch && (a.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, W() / j), h || A(e), P.y = -C() * j, B(P.y), N || e.animation.progress(za.utils.clamp(0, 1, g / j / -e.end)), h && (e.progress -= .001, e.update()), or.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: Va,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => W() / j,
            onScrubComplete: () => {
              I.reset(), b && b(this)
            },
            scrub: S || !0
          }), this.smooth = function(t) {
            return arguments.length && (S = t || 0, j = S && +e.speed || 1, s.scrubDuration(t)), s.getTween() ? s.getTween().duration() : 0
          }, s.getTween() && (s.getTween().vars.ease = e.ease || Ja), this.scrollTrigger = s, e.effects && this.effects(!0 === e.effects ? "[data-" + T + "speed], [data-" + T + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), K.forEach((e => {
            e.vars.scroller = a, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, t) {
            return arguments.length ? (!!d !== e && (e ? (s.getTween() && s.getTween().pause(), C(-M / j), I.reset(), u = Ka.normalizeScroll(), u && u.disable(), d = Ka.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => L(-M)
            }), d.nested = er(Xa, "wheel,touch,scroll", !0, !1 !== t)) : (d.nested.kill(), d.kill(), d = 0, u && u.enable(), s.progress = (-M / j - s.start) / (s.end - s.start), A(s))), this) : !!d
          }, this.kill = this.revert = () => {
            this.paused(!1), A(s), s.kill();
            let e = (n || []).concat(o || []),
              r = e.length;
            for (; r--;) e[r].kill();
            Ka.scrollerProxy(a), Ka.removeEventListener("killAll", q), Ka.removeEventListener("refresh", V), a.style.cssText = l, t.style.cssText = c;
            let d = Ka.defaults({});
            d && d.scroller === a && Ka.defaults({
              scroller: Va
            }), this.normalizer && Ka.normalizeScroll(!1), clearInterval(i), Qa = null, D && D.disconnect(), Ya.style.removeProperty("height"), Va.removeEventListener("focusin", F)
          }, this.refresh = (e, t) => s.refresh(e, t), k && (this.normalizer = Ka.normalizeScroll(!0 === k ? {
            debounce: !0,
            content: !S && t
          } : k)), Ka.config(e), "overscrollBehavior" in Va.getComputedStyle(Ya) && za.set([Ya, Xa], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in Va.getComputedStyle(Ya) && za.set([Ya, Xa], {
            scrollBehavior: "auto"
          }), Va.addEventListener("focusin", F), i = setInterval(O, 250), "loading" === qa.readyState || requestAnimationFrame((() => Ka.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return Ua || (za = e || sr(), rr() && window.document && (Va = window, qa = document, Xa = qa.documentElement, Ya = qa.body), za && (Ha = za.utils.toArray, Wa = za.utils.clamp, Ja = za.parseEase("expo"), tr = za.core.context || function() {}, Ka = za.core.globals().ScrollTrigger, za.core.globals("ScrollSmoother", or), Ya && Ka && (ar = za.delayedCall(.2, (() => Ka.isRefreshing || Qa && Qa.refresh())).pause(), Ga = [Va, qa, Xa, Ya], Za = Ka.core._getVelocityProp, er = Ka.core._inputObserver, or.refresh = Ka.refresh, Ua = 1))), Ua
        }
      }
      or.version = "3.12.2", or.create = e => Qa && e && Qa.content() === Ha(e.content)[0] ? Qa : new or(e), or.get = () => Qa, sr() && za.registerPlugin(or);
      let ir, lr, cr, dr, ur, gr, hr, pr, mr = () => "undefined" != typeof window,
        fr = () => ir || mr() && (ir = window.gsap) && ir.registerPlugin && ir,
        vr = e => "string" == typeof e,
        br = e => "function" == typeof e,
        xr = (e, t) => {
          let a = "x" === t ? "Width" : "Height",
            r = "scroll" + a,
            s = "client" + a;
          return e === cr || e === dr || e === ur ? Math.max(dr[r], ur[r]) - (cr["inner" + a] || dr[s] || ur[s]) : e[r] - e["offset" + a]
        },
        yr = (e, t) => {
          let a = "scroll" + ("x" === t ? "Left" : "Top");
          return e === cr && (null != e.pageXOffset ? a = "page" + t.toUpperCase() + "Offset" : e = null != dr[a] ? dr : ur), () => e[a]
        },
        kr = (e, t) => {
          if (!(e = gr(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
          };
          let a = e.getBoundingClientRect(),
            r = !t || t === cr || t === ur,
            s = r ? {
              top: dr.clientTop - (cr.pageYOffset || dr.scrollTop || ur.scrollTop || 0),
              left: dr.clientLeft - (cr.pageXOffset || dr.scrollLeft || ur.scrollLeft || 0)
            } : t.getBoundingClientRect(),
            n = {
              x: a.left - s.left,
              y: a.top - s.top
            };
          return !r && t && (n.x += yr(t, "x")(), n.y += yr(t, "y")()), n
        },
        _r = (e, t, a, r, s) => isNaN(e) || "object" == typeof e ? vr(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + r - s : "max" === e ? xr(t, a) - s : Math.min(xr(t, a), kr(e, t)[a] - s) : parseFloat(e) - s,
        wr = () => {
          ir = fr(), mr() && ir && "undefined" != typeof document && document.body && (cr = window, ur = document.body, dr = document.documentElement, gr = ir.utils.toArray, ir.config({
            autoKillThreshold: 7
          }), hr = ir.config(), lr = 1)
        };
      const Tr = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register(e) {
          ir = e, wr()
        },
        init(e, t, a, r, s) {
          lr || wr();
          let n = this,
            o = ir.getProperty(e, "scrollSnapType");
          n.isWin = e === cr, n.target = e, n.tween = a, t = ((e, t, a, r) => {
            if (br(e) && (e = e(t, a, r)), "object" != typeof e) return vr(e) && "max" !== e && "=" !== e.charAt(1) ? {
              x: e,
              y: e
            } : {
              y: e
            };
            if (e.nodeType) return {
              y: e,
              x: e
            }; {
              let s, n = {};
              for (s in e) n[s] = "onAutoKill" !== s && br(e[s]) ? e[s](t, a, r) : e[s];
              return n
            }
          })(t, r, e, s), n.vars = t, n.autoKill = !!t.autoKill, n.getX = yr(e, "x"), n.getY = yr(e, "y"), n.x = n.xPrev = n.getX(), n.y = n.yPrev = n.getY(), pr || (pr = ir.core.globals().ScrollTrigger), "smooth" === ir.getProperty(e, "scrollBehavior") && ir.set(e, {
            scrollBehavior: "auto"
          }), o && "none" !== o && (n.snap = 1, n.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != t.x ? (n.add(n, "x", n.x, _r(t.x, e, "x", n.x, t.offsetX || 0), r, s), n._props.push("scrollTo_x")) : n.skipX = 1, null != t.y ? (n.add(n, "y", n.y, _r(t.y, e, "y", n.y, t.offsetY || 0), r, s), n._props.push("scrollTo_y")) : n.skipY = 1
        },
        render(e, t) {
          let a, r, s, n, o, i = t._pt,
            {
              target: l,
              tween: c,
              autoKill: d,
              xPrev: u,
              yPrev: g,
              isWin: h,
              snap: p,
              snapInline: m
            } = t;
          for (; i;) i.r(e, i.d), i = i._next;
          a = h || !t.skipX ? t.getX() : u, r = h || !t.skipY ? t.getY() : g, s = r - g, n = a - u, o = hr.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), d && (!t.skipX && (n > o || n < -o) && a < xr(l, "x") && (t.skipX = 1), !t.skipY && (s > o || s < -o) && r < xr(l, "y") && (t.skipY = 1), t.skipX && t.skipY && (c.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(c, t.vars.onAutoKillParams || []))), h ? cr.scrollTo(t.skipX ? a : t.x, t.skipY ? r : t.y) : (t.skipY || (l.scrollTop = t.y), t.skipX || (l.scrollLeft = t.x)), !p || 1 !== e && 0 !== e || (r = l.scrollTop, a = l.scrollLeft, m ? l.style.scrollSnapType = m : l.style.removeProperty("scroll-snap-type"), l.scrollTop = r + 1, l.scrollLeft = a + 1, l.scrollTop = r, l.scrollLeft = a), t.xPrev = t.x, t.yPrev = t.y, pr && pr.update()
        },
        kill(e) {
          let t = "scrollTo" === e;
          (t || "scrollTo_x" === e) && (this.skipX = 1), (t || "scrollTo_y" === e) && (this.skipY = 1)
        }
      };
      Tr.max = xr, Tr.getOffset = kr, Tr.buildGetter = yr, fr() && ir.registerPlugin(Tr);
      const Cr = e => {
        const t = y(),
          a = (e, r) => r?.requiresAuth && !t?.nickname ? e : [...e, {
            ...r,
            ...r.children ? {
              children: r.children.reduce(a, [])
            } : []
          }];
        return (0, r.useMemo)((() => e.reduce(a, [])), [e, t?.nickname])
      };
      var Sr = a(20270),
        jr = a(25459);
      const Mr = (e, t, a, r) => ({
          event: e || "nav_click",
          link_url: t,
          text: a,
          element_placement: `Global Nav > ${r}`
        }),
        Er = () => {
          const e = x(),
            t = (() => {
              const e = (0, r.useContext)(v);
              if (void 0 === e) throw new Error("useNavigationLocale must be used within a Navigation Provider");
              return e.locale
            })(),
            a = y();
          return r => {
            if (!r.path) return r.domain;
            const n = [
                ["username", a?.nickname]
              ],
              o = ((e, t) => t.reduce(((e, t) => {
                let [a, r] = t;
                return e.replaceAll(`{${a}}`, r)
              }), e))(r.path, n),
              i = "www" === r.domain && "www" !== e.currentSite.site ? ((e, t) => {
                if (!t || t.iso === s.englishLocale.iso) return e;
                const a = t.subdomaincom;
                return "/" === e[0] ? a + e : `${a}/${e}`
              })(o, t) : o;
            return r.domain + i
          }
        },
        Nr = "nav-internal",
        Ir = "nav-external",
        Or = "nav-dropdown",
        Pr = "nav-no-link",
        Rr = "games-menu",
        Ar = (0, s.defineMessages)({
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
          games_menu_vi: {
            id: "games_menu_vi",
            defaultMessage: "Grand Theft Auto VI"
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
        Br = e => {
          let {
            children: t,
            location: a,
            className: i,
            isLegacy: l,
            label: c,
            type: d,
            target: u,
            gaEvent: g,
            gaText: h,
            gaBreadCrumb: p,
            dataTestId: m,
            onClick: v,
            ...b
          } = e;
          const x = (0, s.useIntl)(),
            {
              track: y
            } = (0, n.useGtmTrack)(),
            k = Er(),
            {
              dispatch: _
            } = (0, o.useRockstarEventDispatcher)(),
            w = C(),
            T = (0, r.useMemo)((() => {
              const e = {};
              return "_blank" === u && (e["aria-label"] = x.formatMessage(Ar.nav_opens_in_new_window, {
                text: c
              }), e.rel = "noopener"), e
            }), [c, u]);
          if (!a && d === Pr && m) {
            const e = () => {
              y(Mr(g, "", h, p)), _(m)
            };
            return (0, f.jsx)("button", {
              type: "button",
              className: i,
              onClick: () => e(),
              "data-testid": m,
              ...b,
              ...T,
              children: t
            })
          }
          if (!a) return null;
          const S = k(a),
            j = Boolean(d === Ir || l || document.documentElement.classList.contains("legacyPage"));
          return (0, f.jsx)(jr.A, {
            className: i,
            target: u,
            to: S,
            onClick: () => (v?.(), void y(Mr(g, S.toString(), h, p))),
            onNavigate: w,
            reloadDocument: j,
            "data-testid": m,
            ...b,
            ...T,
            children: t
          })
        },
        Lr = {
          callToAction: "rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770",
          highlight: "rockstargames-modules-core-headerd468a02858ad85269a394854bce5e316"
        },
        Dr = e => {
          let {
            children: t,
            dataTestId: a,
            location: r,
            variant: s,
            gaEvent: n,
            gaText: o,
            target: i,
            onClick: l
          } = e;
          return (0, f.jsx)("div", {
            className: Lr.callToActionContainer,
            children: (0, f.jsx)(Br, {
              className: [Lr.callToAction, s ? Lr[s] : ""].join(" "),
              dataTestId: a,
              location: r,
              gaEvent: n,
              gaText: o,
              gaBreadCrumb: o,
              onClick: l,
              target: i,
              children: t
            })
          })
        };
      var Fr = a(63582);
      const $r = {
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
        zr = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        },
        Ur = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        Vr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg",
        qr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
        Xr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg",
        Yr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg",
        Gr = {
          pillBtn: "rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac",
          selected: "rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e",
          pillButton: "rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f"
        },
        Hr = e => {
          let {
            children: t,
            selected: a,
            ...r
          } = e;
          return (0, f.jsx)("button", {
            type: "button",
            className: [Gr.pillButton, a ? Gr.selected : ""].join(" "),
            ...r,
            children: t
          })
        };
      var Wr = a(75971);
      const Kr = {
          pillBtn: "rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513",
          selected: "rockstargames-modules-core-headerdc9de673c49d945b85a20bf5e859500a",
          subMenu: "rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7",
          fadeIn: "rockstargames-modules-core-headerae886af8e4ee1f3fa82f58141f31dccb"
        },
        Qr = {
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
        Jr = e => {
          let {
            openerRef: t,
            isOpen: a,
            isMobile: s,
            children: n
          } = e;
          const [o, i] = (0, r.useState)(null), {
            styles: l,
            attributes: c,
            forceUpdate: d
          } = (0, Wr.usePopper)(t, o, {
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
          return (0, r.useEffect)((() => {
            Promise.resolve().then(d)
          }), [t, a, s]), (0, f.jsx)(Fr.motion.div, {
            initial: "exit",
            animate: a ? "enter" : "exit",
            transition: $r.quickFade,
            variants: Qr,
            className: [Kr.subMenu].join(" "),
            style: {
              ...l.popper
            },
            ref: i,
            ...c.popper,
            children: n
          })
        },
        Zr = e => {
          let {
            children: t,
            ...a
          } = e;
          return (0, f.jsx)("button", {
            type: "button",
            className: "rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13",
            ...a,
            children: t
          })
        },
        es = {
          backgroundElevation: "rockstargames-modules-core-headerddaf896d4deca83f6d4a43dde2449ed6",
          backgroundOverlay: "rockstargames-modules-core-headere39052a22cbfec8136c7f57d9e910820",
          backgroundVisible: "rockstargames-modules-core-headerdd3818dff0e6f7bd2777880270cbdabb"
        },
        ts = e => {
          let {
            children: t,
            isOpen: a,
            onClose: r,
            visible: s
          } = e;
          return a ? (0, f.jsxs)("div", {
            className: [es.backgroundElevation].join(" "),
            onClick: r,
            children: [(0, f.jsx)("div", {
              className: [es.backgroundOverlay, s ? es.backgroundVisible : ""].join(" ")
            }), t]
          }) : null
        },
        as = e => {
          let {
            target: t,
            selected: a,
            selectedTarget: n,
            onClick: o,
            isMobile: i,
            ...l
          } = e;
          const c = (0, s.useIntl)(),
            [d, u] = (0, r.useState)(!1),
            [g, h] = (0, r.useState)(null);
          return t.type === Or ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              ref: h,
              children: (0, f.jsxs)(Hr, {
                "aria-label": c.formatMessage(Ar.search_target_aria_label, {
                  target: n && t?.targets?.indexOf(n) >= 0 ? n.text : t.text
                }),
                selected: a,
                onClick: () => u(!d),
                ...l,
                children: [n && t?.targets?.indexOf(n) >= 0 ? n.text : t.text, (0, f.jsx)("img", {
                  src: qr,
                  alt: ""
                })]
              }, t.gaText)
            }), (0, f.jsx)(ts, {
              isOpen: d,
              onClose: () => u(!1),
              children: (0, f.jsx)(Jr, {
                isOpen: d,
                openerRef: g,
                isMobile: i,
                children: t.targets?.map((e => (0, f.jsx)(Zr, {
                  "aria-label": c.formatMessage(Ar.search_target_aria_label, {
                    target: e.text
                  }),
                  onClick: () => o(e),
                  children: e.text
                }, e.gaText)))
              })
            })]
          }) : (0, f.jsx)(Hr, {
            "aria-label": c.formatMessage(Ar.search_target_aria_label, {
              target: t.text
            }),
            selected: a,
            onClick: () => o(t),
            ...l,
            children: t.text
          }, t.tab)
        },
        rs = {
          secondaryNavigationSlide: "rockstargames-modules-core-headerbf9f9a25ea6f9aa44b4b2ab52512e335",
          secondaryNavigationOverlay: "rockstargames-modules-core-headerbbd3cc8e4460000b11ca8ef9b0eee345",
          open: "rockstargames-modules-core-headerb5c4f53ad11e76bbf9b1324c766560ad"
        },
        ss = e => {
          let {
            children: t,
            isOpen: a,
            onMouseClick: s,
            onEscapeKey: n,
            onMouseAway: o,
            style: i
          } = e;
          const l = a ? [rs.open] : [],
            c = e => {
              "Escape" === e.key && n?.()
            };
          return (0, r.useEffect)((() => (a ? window.addEventListener("keyup", c) : window.removeEventListener("keyup", c), () => window.removeEventListener("keyup", c))), [c, a]), a ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              className: [rs.secondaryNavigationOverlay, ...l].join(" "),
              onClick: s,
              onMouseEnter: o,
              style: i
            }), t && (0, f.jsx)("div", {
              className: [rs.secondaryNavigationSlide, ...l].join(" "),
              children: t
            })]
          }) : null
        },
        ns = e => {
          let {
            handleSearch: t,
            handleSearchKeypress: a,
            handleSearchTargetSelect: n,
            setIsSearchOpen: o,
            setSearchQuery: i,
            isSearchOpen: l,
            searchQuery: c,
            selectedTarget: d,
            selectedTargetIndex: u,
            isSearchPage: g,
            searchError: h,
            maxSearchLength: p
          } = e;
          const m = (0, s.useIntl)(),
            v = _(),
            b = (0, r.useRef)(null),
            x = () => {
              o(), g || i(""), b?.current?.focus()
            },
            y = () => {
              g || o()
            };
          return (0, r.useEffect)((() => {
            l ? b?.current?.focus() : b?.current?.blur()
          }), [l]), (0, f.jsxs)("div", {
            children: [(0, f.jsx)("button", {
              className: "rockstargames-modules-core-headerb14c9a28c3b2b3a58eb8a465f480fd60",
              type: "button",
              onClick: x,
              "data-testid": "searchToggle",
              children: (0, f.jsx)("img", {
                src: Ur,
                alt: m.formatMessage(l ? Ar.search_close_button : Ar.search_open_button)
              })
            }), (0, f.jsx)(Fr.AnimatePresence, {
              children: l && (0, f.jsxs)("div", {
                children: [(0, f.jsx)(ss, {
                  isOpen: !g,
                  onEscapeKey: y,
                  onMouseClick: y
                }), (0, f.jsxs)(Fr.motion.div, {
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
                    transition: $r.springClose
                  },
                  transition: $r.springOpen,
                  "data-testid": "searchBar",
                  children: [(0, f.jsxs)(Fr.motion.div, {
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
                    children: [(0, f.jsx)("div", {
                      className: "rockstargames-modules-core-headerdeb8b97cd5fbb70486ad3c025601d43d",
                      children: (0, f.jsx)("button", {
                        type: "button",
                        onClick: t,
                        children: (0, f.jsx)("img", {
                          src: Ur,
                          alt: m.formatMessage(Ar.search_action)
                        })
                      })
                    }), (0, f.jsx)("div", {
                      className: "rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f",
                      children: (0, f.jsx)("input", {
                        type: "textfield",
                        value: c,
                        onChange: e => i(e.target.value),
                        onKeyUp: a,
                        placeholder: m.formatMessage(Ar.search_placeholder),
                        ref: b,
                        enterKeyHint: "search",
                        maxLength: p
                      })
                    }), (0, f.jsx)("div", {
                      className: "rockstargames-modules-core-headerf1bedf210587b5186fca4d243f05a1aa",
                      children: v.targets.map(((e, t) => (0, f.jsx)(as, {
                        target: e,
                        onClick: e => n(e, t),
                        selected: u === t,
                        selectedTarget: d
                      }, e.tab)))
                    }), !g && (0, f.jsx)("div", {
                      className: "rockstargames-modules-core-headerea7dbbd5e60585f29ab22be3d18988fd",
                      children: (0, f.jsx)("button", {
                        type: "button",
                        onClick: x,
                        children: (0, f.jsx)("img", {
                          src: Vr,
                          alt: m.formatMessage(Ar.search_close_button)
                        })
                      })
                    })]
                  }), h && (0, f.jsx)("div", {
                    className: "rockstargames-modules-core-headerc3e3363c5e7b53755b9c9afcc262ccb6",
                    "aria-live": "polite",
                    children: h
                  })]
                })]
              })
            })]
          })
        },
        os = {
          search: "rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1",
          targetsOuter: "rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd",
          hasScroll: "rockstargames-modules-core-headere3fe68b0501338fe7b3cbed75b1773c8",
          targets: "rockstargames-modules-core-headerc11370021ff4c9655878886a3a69c746",
          errorMessage: "rockstargames-modules-core-headerbf16fe605728a09b0a5c269d57371bfa"
        },
        is = e => {
          let {
            handleSearch: t,
            handleSearchKeypress: a,
            handleSearchTargetSelect: n,
            setIsSearchOpen: o,
            setSearchQuery: i,
            isSearchOpen: l,
            searchQuery: c,
            selectedTarget: d,
            selectedTargetIndex: u,
            isSearchPage: g,
            searchError: h,
            maxSearchLength: p
          } = e;
          const m = (0, s.useIntl)(),
            v = _(),
            b = (0, r.useRef)(null),
            [x, y] = (0, r.useState)(!1);
          return (0, r.useEffect)((() => {
            let e, t, a = !1;
            const r = r => {
                b && b.current && (r.preventDefault(), a = !0, e = r.pageX - b.current.offsetLeft, t = b.current.scrollLeft)
              },
              s = () => {
                a = !1
              },
              n = r => {
                if (a && (r.preventDefault(), b && b.current)) {
                  const a = r.pageX - b.current.offsetLeft - e;
                  b.current.scrollLeft = t - a
                }
              },
              o = () => {
                if (b && b.current) {
                  const e = b.current.scrollLeft;
                  y(e > 20)
                }
              };
            if (b && b.current) {
              const e = b.current;
              e.addEventListener("mousedown", r), e.addEventListener("mouseup", s), e.addEventListener("mouseleave", s), e.addEventListener("mousemove", n), e.addEventListener("scroll", o)
            }
            return () => {
              b && b.current && (b.current.removeEventListener("mousedown", r), b.current.removeEventListener("mouseup", s), b.current.removeEventListener("mouseleave", s), b.current.removeEventListener("mousemove", n), b.current.removeEventListener("scroll", o))
            }
          })), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)(Fr.motion.div, {
              className: os.search,
              variants: zr,
              transition: $r.staggerFade,
              "data-testid": "searchBar",
              children: [(0, f.jsx)("button", {
                type: "button",
                onClick: () => l ? t() : o(!0),
                children: (0, f.jsx)("img", {
                  src: Ur,
                  alt: m.formatMessage(Ar.search_action)
                })
              }), (0, f.jsx)("input", {
                type: "text",
                value: c,
                onChange: e => i(e.target.value),
                onFocus: () => o(!0),
                onKeyUp: a,
                placeholder: m.formatMessage(Ar.search_placeholder),
                enterKeyHint: "search",
                maxLength: p
              }), l && !g && (0, f.jsx)("button", {
                type: "button",
                onClick: () => o(!1),
                children: (0, f.jsx)("img", {
                  src: Vr,
                  alt: m.formatMessage(Ar.search_close_button)
                })
              })]
            }), l && (0, f.jsxs)("div", {
              className: [os.targetsOuter, x ? os.hasScroll : ""].join(" "),
              children: [(0, f.jsx)("div", {
                className: os.targets,
                ref: b,
                children: v.targets.map(((e, t) => (0, f.jsx)(as, {
                  target: e,
                  selected: u === t,
                  selectedTarget: d,
                  onClick: e => n(e, t),
                  isMobile: !0
                }, e.tab)))
              }), h && (0, f.jsx)("div", {
                className: os.errorMessage,
                "aria-live": "polite",
                children: h
              })]
            })]
          })
        };
      var ls = a(16188),
        cs = a.n(ls);
      const ds = "global-nav-search",
        us = e => {
          let {
            ...t
          } = e;
          const {
            windowWidth: a
          } = (0, o.useWindowResize)(), {
            pathname: n,
            search: i
          } = T(), l = _(), [c, d] = (0, r.useState)(""), [u, g] = k(), [h, p] = (0, r.useState)(0), [m, v] = (0, r.useState)(l.targets[0]), [b, x] = (0, r.useState)(""), y = (() => {
            const e = Er(),
              t = C();
            return (a, r) => {
              const s = new URLSearchParams(r.params),
                n = r.path?.replace("{term}", a);
              s.forEach(((e, t) => {
                "{query}" === e && s.set(t, a)
              }));
              const o = s.toString() ? `?${s.toString()}` : "",
                i = {
                  domain: r.domain,
                  path: n + o
                },
                l = e(i);
              l ? i.domain ? window.location.href = l : t ? t(l) : window.history.pushState({}, "", l) : console.error(`No search url could be constructed from ${r.domain} and ${r.path}`)
            }
          })(), {
            isSearchPage: S,
            forceSearch: j
          } = w(), M = (0, s.useIntl)(), E = a < 1024, N = S && j || u === ds, I = e => {
            if ("" === c) return !1;
            e.length > m.searchOptions.max && d(e.substring(0, m.searchOptions.max));
            const t = m.searchOptions.validationFunction?.(e);
            return e.split(/\s+/).every((e => e.length < m.searchOptions.min)) ? (x(M.formatMessage(Ar.nav_search_error_too_short, {
              count: m.searchOptions.min
            })), !1) : t ? (x(M.formatMessage(Ar.nav_search_error_invalid_chars, {
              invalidChars: [...new Set(t)].join(", ")
            })), !1) : (x(""), !0)
          }, O = () => {
            I(c) && y(c, m.location)
          }, P = (e, t) => {
            let a;
            const r = new URLSearchParams(e);
            return new URLSearchParams(t).forEach(((e, t) => {
              const s = r.get(t);
              "{query}" === e && s ? (a = !0, d(s), I(s)) : a = s === e && !1 !== a
            })), a
          }, R = (e, t) => {
            if (!t) return !1;
            const a = e.split(/[/?]+/),
              r = t.split(/[/?]+/);
            if (r.every(((e, t) => e === a[t] || "{term}" === e || "" === e))) {
              const e = r.findIndex((e => "{term}" === e));
              return e && d(a[e]), !0
            }
            return !1
          };
          (0, r.useEffect)((() => {
            S || (p(0), v(l.targets[0]));
            const e = l.targets.findIndex((e => {
              if ("" === e.type && e.location) {
                if (e.location.path && n.startsWith(e.location.path) && P(i, e.location.params)) return v(e), !0;
                if (!e.location.params && R(n, e.location.path)) return v(e), !0
              }
              if ("nav-dropdown" === e.type) {
                const t = e.targets?.findIndex((e => {
                  if ("" === e.type) {
                    if (e.location.path && n.startsWith(e.location.path) && P(i, e.location.params)) return v(e), !0;
                    if (R(n, e.location.path)) return v(e), !0
                  }
                  return !1
                }));
                return !cs().isNil(t) && t >= 0
              }
            }));
            p(e)
          }), [n, i, S]);
          const A = {
            handleSearch: O,
            handleSearchKeypress: e => {
              x(""), "Enter" === e.key && O()
            },
            handleSearchTargetSelect: (e, t) => {
              v(e), p(t), I(c) && y(c, e.location)
            },
            setIsSearchOpen: () => g(ds),
            setSearchQuery: d,
            isSearchOpen: N,
            searchQuery: c,
            selectedTarget: m,
            selectedTargetIndex: h,
            isSearchPage: S,
            searchError: b,
            maxSearchLength: m.searchOptions.max
          };
          return E ? (0, f.jsx)(is, {
            ...A,
            ...t
          }) : (0, f.jsx)(ns, {
            ...A
          })
        },
        gs = e => {
          let {
            cta: t,
            includeSearch: a = !0,
            isMobile: r
          } = e;
          const s = T(),
            n = C(),
            [, o] = k();
          return (0, f.jsxs)("div", {
            className: "rockstargames-modules-core-headerb5fce2c3384850553a25768f9fdbc74c",
            "data-testid": "actions",
            children: [t && (0, f.jsx)("div", {
              children: (0, f.jsx)(Dr, {
                variant: t.variant,
                location: t.location,
                dataTestId: t.dataTestId,
                gaEvent: t.ga,
                gaText: t.text,
                target: t.target,
                children: t.text
              })
            }), a && (0, f.jsx)(us, {}), (0, f.jsxs)("div", {
              children: [(0, f.jsx)(Sr.MenuButton, {
                setOtherHeaderDropdowns: o
              }), !r && (0, f.jsx)(Sr.Menu, {
                location: s,
                onNavigate: n
              })]
            })]
          })
        },
        hs = {
          navigationItem: "rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558",
          active: "rockstargames-modules-core-headere6b2077f3b2a8ad9b1402ed6e0c25f95"
        },
        ps = e => e.replace(/\?.*$/, ""),
        ms = (e, t) => e === t,
        fs = e => {
          const {
            pathname: t,
            hostname: a
          } = T();
          return e && e.length ? e.map((e => {
            let {
              domain: r,
              path: s,
              additionalPathMatches: n
            } = e;
            if (r !== a && "" !== r) return null;
            const o = ps(s || ""),
              i = ms(o, ps(t));
            let l;
            return n && (l = ms(n, ps(t))), Boolean(i || l)
          })) : []
        },
        vs = e => {
          let {
            text: t,
            type: a,
            location: r,
            isLegacy: s,
            gaText: n,
            gaBreadCrumb: o,
            dataTestId: i,
            target: l,
            ...c
          } = e;
          const [d] = fs(r ? [{
            domain: r?.domain,
            path: r?.path,
            end: "nav-internal" === a,
            additionalPathMatches: r?.additionalPathMatches
          }] : []), u = a === Ir;
          return (0, f.jsxs)(Br, {
            className: [hs.navigationItem, d ? hs.active : ""].join(" "),
            location: r,
            isLegacy: s,
            type: a,
            target: l,
            gaText: n,
            gaBreadCrumb: o,
            dataTestId: i,
            label: t,
            ...c,
            children: [t, u && (0, f.jsx)("img", {
              alt: "",
              src: Xr
            })]
          })
        },
        bs = {
          navigationDropdownButton: "rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b",
          open: "rockstargames-modules-core-headere981dceef9b773c1a38070cf53b88f91",
          active: "rockstargames-modules-core-headere0aebf0d85eeab7cf262811136363f68"
        },
        xs = e => {
          let {
            text: t,
            isOpen: a,
            onClick: s,
            buttonRef: o,
            navChildren: i,
            gaText: l,
            gaBreadCrumb: c,
            dataTestId: d
          } = e;
          const {
            track: u
          } = (0, n.useGtmTrack)(), g = (0, r.useCallback)((() => {
            u(Mr(void 0, "", l, c)), s()
          }), [l, c, a, s]), h = (0, r.useMemo)((() => {
            if (!i) return;
            const e = (t, a) => {
              let r;
              return r = a.children ? a.children.reduce(e, []) : a?.location ? [a.location] : [], [...t, ...r]
            };
            return i.reduce(e, [])
          }), [i]), p = fs(h), m = p?.some(Boolean);
          return (0, f.jsx)("div", {
            className: bs.navigationDropdown,
            ref: o,
            children: (0, f.jsxs)("button", {
              className: [bs.navigationDropdownButton, m ? bs.active : "", a ? bs.open : ""].join(" "),
              type: "button",
              "data-testid": d || "navDropdown",
              onClick: g,
              children: [t, (0, f.jsx)("img", {
                src: qr,
                alt: ""
              })]
            })
          })
        };
      var ys = a(82023);
      const ks = e => {
          let {
            title: t,
            titleSlug: a,
            location: r,
            gaText: s,
            gaBreadCrumb: n,
            dataTestId: o,
            ...i
          } = e;
          return (0, f.jsx)("div", {
            className: "rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7",
            children: (0, f.jsx)(Br, {
              location: r,
              gaText: s,
              gaBreadCrumb: n,
              dataTestId: o,
              ...i,
              children: (0, f.jsx)(ys.A, {
                title: t,
                titleSlug: a
              })
            })
          }, t)
        },
        _s = (e, t) => {
          const a = t.currentSite?.site === c.C.www ? "" : `https://${t.sites[c.C.www]}.rockstargames.com`;
          return {
            viewAllLocation: {
              domain: a,
              path: "/games"
            },
            games: [{
              titleSlug: "VI",
              text: e.formatMessage(Ar.games_menu_vi),
              gaText: "Grand Theft Auto VI",
              location: {
                domain: a,
                path: "/VI"
              },
              isLegacy: !0,
              dataTestId: "VI"
            }, {
              titleSlug: "gta-v",
              text: e.formatMessage(Ar.games_menu_gta_v),
              gaText: "Grand Theft Auto V",
              location: {
                domain: a,
                path: "/gta-v"
              },
              dataTestId: "gtav"
            }, {
              titleSlug: "gta-online",
              text: e.formatMessage(Ar.games_menu_gta_online),
              gaText: "Grand Theft Auto Online",
              location: {
                domain: a,
                path: "/gta-online"
              },
              dataTestId: "gtao"
            }, {
              titleSlug: "reddeadredemption2",
              text: e.formatMessage(Ar.games_menu_rdr_2),
              gaText: "Red Dead Redemption 2",
              location: {
                domain: a,
                path: "/reddeadredemption2"
              },
              dataTestId: "rdr2"
            }, {
              titleSlug: "reddeadredemption",
              text: e.formatMessage(Ar.games_menu_rdr),
              gaText: "Red Dead Redemption",
              location: {
                domain: a,
                path: "/reddeadredemption"
              },
              dataTestId: "rdr"
            }]
          }
        },
        ws = () => {
          const e = (0, s.useIntl)(),
            t = x(),
            {
              viewAllLocation: a,
              games: r
            } = _s(e, t);
          return (0, f.jsxs)("div", {
            className: "rockstargames-modules-core-headerc44e1e859a7c882c94e4ab6659292df1",
            "data-testid": "gamesMenu",
            children: [(0, f.jsxs)("div", {
              className: "rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31",
              children: [(0, f.jsx)("div", {
                children: (0, f.jsx)("h2", {
                  className: "rockstargames-modules-core-headerdf107c2f64cafbee316afb5bf5d6c994",
                  children: e.formatMessage(Ar.games_menu_featured)
                })
              }), (0, f.jsx)("div", {
                children: (0, f.jsxs)(Br, {
                  className: "rockstargames-modules-core-headera9c20e94d8cd00159778729b0c3eb095",
                  gaText: Ar.games_menu_view_all.defaultMessage,
                  gaBreadCrumb: `Games > ${Ar.games_menu_view_all.defaultMessage}`,
                  location: a,
                  children: [e.formatMessage(Ar.games_menu_view_all), (0, f.jsx)("img", {
                    src: Yr,
                    alt: e.formatMessage(Ar.nav_view_all_games)
                  })]
                })
              })]
            }), (0, f.jsx)("div", {
              className: "rockstargames-modules-core-headerca5189f6c9b4274473d2cf9a8ace7bb0",
              children: r.map((e => (0, f.jsx)(ks, {
                title: e.text,
                titleSlug: e.titleSlug,
                gaText: e.gaText,
                gaBreadCrumb: `Games > ${e.gaText}`,
                location: e.location,
                dataTestId: e.dataTestId,
                isLegacy: e.isLegacy
              }, e.titleSlug)))
            })]
          })
        },
        Ts = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerbe98900eb9861a339ca26cd5c23795c2",
          nested: "rockstargames-modules-core-headerb83b9fbed333ffb6cc89eb40ce1f258e",
          subMenuDropdownButton: "rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8",
          open: "rockstargames-modules-core-headerb232c7352afb473e20d474f81db87a11",
          openChevron: "rockstargames-modules-core-headerb78556b7ba42b398bc55bf4720f9eee5",
          subMenuDropdownItems: "rockstargames-modules-core-headerf54f4c00ab7b5e6ab645951063e44b9e"
        },
        Cs = {
          subMenuItem: "rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5",
          nested: "rockstargames-modules-core-headera81cbcdbdd397a2a286c23049697987b"
        },
        Ss = {
          navigationLink: "rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641",
          active: "rockstargames-modules-core-headerab8c1da57859a4347bb7cd9722832fb9"
        },
        js = e => [Ss.navigationLink, e ? Ss.active : ""].join(" "),
        Ms = e => {
          let {
            text: t,
            type: a,
            location: r,
            className: s,
            isLegacy: n,
            target: o,
            nested: i,
            gaText: l,
            gaBreadCrumb: c,
            dataTestId: d,
            ...u
          } = e;
          const g = a === Ir,
            h = r ? [{
              ...r,
              end: a === Nr
            }] : [],
            [p] = fs(h);
          return (0, f.jsxs)(Br, {
            className: [js(Boolean(p)), Cs.subMenuItem, i ? Cs.nested : "", s].join(" "),
            location: r,
            isLegacy: n,
            type: a,
            target: o,
            gaText: l,
            gaBreadCrumb: c,
            dataTestId: d,
            label: t,
            "data-ui-name": "sub-menu-item",
            ...u,
            children: [t, g && (0, f.jsx)("img", {
              alt: "",
              src: Xr
            })]
          })
        },
        Es = "nav-dropdown",
        Ns = e => {
          let {
            text: t,
            navChildren: a,
            gaText: s,
            gaBreadCrumb: o,
            nested: i,
            dataTestId: l,
            subMenuId: c,
            toggleOpen: d,
            isOpen: u,
            ...g
          } = e;
          const [h] = k(), {
            track: p
          } = (0, n.useGtmTrack)(), m = (0, r.useRef)(null), [v, b] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            null === h && d(null)
          }), [h]);
          const x = e => {
              p(Mr(void 0, "", s, o)), d(e ? c : null)
            },
            y = e => {
              "ArrowLeft" === e.code && (x(!1), m?.current?.focus())
            };
          return (0, f.jsxs)("div", {
            className: [Ts.subMenuDropdownContainer, i ? Ts.nested : ""].join(" "),
            ...g,
            "data-ui-name": "sub-menu-item",
            children: [(0, f.jsxs)("button", {
              type: "button",
              className: [Ts.subMenuDropdownButton, i ? Ts.nested : "", u ? Ts.open : ""].join(" "),
              onClick: () => x(!u),
              onKeyUp: e => {
                "Enter" === e.code && x(!0), "ArrowRight" === e.code && x(!0), "ArrowLeft" === e.code && x(!1)
              },
              ref: m,
              "data-testid": l,
              children: [t, (0, f.jsx)("img", {
                src: qr,
                className: Ts.openChevron,
                alt: ""
              })]
            }), (0, f.jsx)(Fr.AnimatePresence, {
              children: u && a && (0, f.jsx)(Fr.motion.div, {
                className: Ts.subMenuDropdownItems,
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
                transition: $r.springOpen,
                children: a.map((e => e.type === Es ? (0, f.jsx)(Ns, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.gaText,
                  gaBreadCrumb: `${o} > ${e.gaText}`,
                  nested: !0,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: v === `desktop-submenu-${e.gaText}`,
                  toggleOpen: b
                }, e.gaText) : (0, f.jsx)(Ms, {
                  text: e.text,
                  type: e.type,
                  location: e.location,
                  gaText: e.gaText,
                  gaBreadCrumb: `${o} > ${e.gaText}`,
                  onKeyUp: y,
                  isLegacy: e.isLegacy,
                  dataTestId: e.dataTestId,
                  nested: !0
                }, e.gaText)))
              })
            })]
          })
        },
        Is = Ns,
        Os = {
          show: {
            height: "auto",
            zIndex: 101,
            display: "block",
            visibility: "visible",
            transition: {
              ...$r.springOpen
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
              ...$r.springClose
            }
          }
        },
        Ps = e => {
          let {
            text: t,
            gaText: a,
            type: s,
            location: n,
            navChildren: o,
            isLegacy: i,
            target: l,
            gaBreadCrumb: c,
            navKey: d,
            isHidden: u,
            dataTestId: g,
            ...h
          } = e;
          const [p, m] = (0, r.useState)(null), v = T(), [b, x] = k(), [y, _] = (0, r.useState)(null), w = b === d, C = {
            ...w ? {
              visibility: "visible",
              display: "block"
            } : {
              visibility: "hidden",
              display: "none"
            }
          };
          (0, r.useEffect)((() => {
            x(null)
          }), [v.pathname, v.key]);
          const S = c ? `${c} > ${a}` : a ?? t;
          return s === Or ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)(xs, {
              text: t,
              gaText: a,
              gaBreadCrumb: S,
              onClick: () => x(d),
              isOpen: w,
              buttonRef: u ? void 0 : m,
              navChildren: o,
              dataTestId: g,
              ...h
            }), !u && (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(ss, {
                isOpen: w,
                onMouseClick: () => x(null),
                onEscapeKey: () => x(null)
              }), (0, f.jsx)(Jr, {
                isOpen: w,
                openerRef: p,
                children: o?.map((e => e.type === Or ? (0, f.jsx)(Is, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.text,
                  gaBreadCrumb: `${S} > ${e.gaText}`,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: y === `desktop-submenu-${e.gaText}`,
                  toggleOpen: _
                }, `desktop-submenu-${e.text}`) : (0, f.jsx)(Ms, {
                  location: e.location,
                  text: e.text,
                  type: e.type,
                  isLegacy: e.isLegacy,
                  target: e.target,
                  gaText: e.gaText,
                  gaBreadCrumb: `${S} > ${e.gaText}`,
                  dataTestId: e.dataTestId
                }, e.text)))
              })]
            })]
          }) : s === Rr ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)(xs, {
              text: t,
              gaText: t,
              gaBreadCrumb: c ? `${c} > ${a}` : a,
              onClick: () => x(d),
              isOpen: w,
              dataTestId: g,
              ...h
            }), !u && (0, f.jsx)(ss, {
              isOpen: !0,
              onMouseClick: () => x(null),
              onEscapeKey: () => x(null),
              style: C,
              children: (0, f.jsx)(Fr.motion.div, {
                initial: "hidden",
                animate: w ? "show" : "hidden",
                variants: Os,
                children: (0, f.jsx)(ws, {})
              })
            })]
          }) : n || s === Pr ? (0, f.jsx)(vs, {
            location: n,
            type: s,
            text: t,
            isLegacy: i,
            target: l,
            gaText: a,
            gaBreadCrumb: c ? `${c} > ${a}` : a,
            dataTestId: g,
            ...h
          }) : null
        },
        Rs = e => {
          let {
            links: t
          } = e;
          const a = (0, s.useIntl)(),
            [n, o] = (0, r.useState)(t),
            [i, l] = (0, r.useState)([]),
            c = (0, r.useRef)(null),
            d = (0, r.useRef)(null),
            u = (0, r.useCallback)((() => {
              const e = d.current;
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
            }), [t, d?.current]);
          (0, r.useEffect)((() => {
            const e = new ResizeObserver(u);
            return d?.current && e.observe(d.current), () => {
              d?.current && e.unobserve(d.current)
            }
          }), [t, d?.current]);
          const g = (0, r.useMemo)((() => (0, f.jsx)("ul", {
            ref: d,
            className: "rockstargames-modules-core-headerdc3da34691ab5b1e333e3d37858767f0",
            "aria-hidden": "true",
            children: t.map((e => (0, f.jsx)("li", {
              children: (0, f.jsx)(Ps, {
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
          return 0 === t.length ? null : (0, f.jsxs)("nav", {
            className: "rockstargames-modules-core-headere92969b01c7ecc3f45b726efcdd54e73",
            children: [(0, f.jsxs)("ul", {
              ref: c,
              children: [n.map((e => (0, f.jsx)("li", {
                children: (0, f.jsx)(Ps, {
                  text: e.text,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  navKey: e.text,
                  dataTestId: e?.dataTestId
                })
              }, e.text))), i.length > 0 && (0, f.jsx)("li", {
                children: (0, f.jsx)(Ps, {
                  text: a.formatMessage(Ar.nav_more_dropdown),
                  type: Or,
                  navChildren: i,
                  navKey: "more",
                  dataTestId: "navMore"
                })
              })]
            }), g]
          })
        },
        As = () => (0, f.jsx)("div", {
          className: "rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a"
        }),
        Bs = {
          quickAccess: "rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a",
          link: "rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876"
        },
        Ls = () => {
          const {
            windowWidth: e
          } = (0, o.useWindowResize)(), t = x(), a = t.currentSite?.site === c.C.www ? "" : `https://${t.sites[c.C.www]}.rockstargames.com`, r = e < 1024, n = {
            hidden: {
              y: "100%",
              transition: $r.hamburgerClose
            },
            show: {
              y: 0,
              transition: {
                ...$r.hamburgerOpen,
                staggerChildren: .1,
                delayChildren: .6 * $r.hamburgerOpen.duration
              }
            }
          }, i = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: $r.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: $r.staggerFade
            }
          }, l = (0, s.useIntl)(), d = {
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
          return (0, f.jsxs)(Fr.motion.ul, {
            className: Bs.quickAccess,
            variants: r ? n : zr,
            initial: "hidden",
            animate: "show",
            exit: "hidden",
            transition: r ? null : $r.quickFade,
            children: [(0, f.jsx)(Fr.motion.li, {
              variants: r ? i : null,
              children: (0, f.jsxs)(Br, {
                location: d.home,
                className: [js(), Bs.link].join(" "),
                gaText: Ar.nav_quick_access_home.defaultMessage,
                gaBreadCrumb: `${u} > ${Ar.nav_quick_access_home.defaultMessage}`,
                children: [(0, f.jsx)("img", {
                  alt: "Rockstar Games",
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg"
                }), (0, f.jsx)(s.FormattedMessage, {
                  ...Ar.nav_quick_access_home
                })]
              })
            }), (0, f.jsx)(Fr.motion.li, {
              variants: r ? i : null,
              children: (0, f.jsxs)(Br, {
                location: d.games,
                className: [js(), Bs.link].join(" "),
                gaText: Ar.nav_quick_access_games.defaultMessage,
                gaBreadCrumb: `${u} > ${Ar.nav_quick_access_games.defaultMessage}`,
                children: [(0, f.jsx)("img", {
                  alt: l.formatMessage(Ar.nav_quick_access_games),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg"
                }), (0, f.jsx)(s.FormattedMessage, {
                  ...Ar.nav_quick_access_games
                })]
              })
            }), (0, f.jsx)(Fr.motion.li, {
              variants: r ? i : null,
              children: (0, f.jsxs)(Br, {
                location: d.newswire,
                className: [js(), Bs.link].join(" "),
                gaText: Ar.nav_quick_access_newswire.defaultMessage,
                gaBreadCrumb: `${u} > ${Ar.nav_quick_access_newswire.defaultMessage}`,
                children: [(0, f.jsx)("img", {
                  alt: l.formatMessage(Ar.nav_quick_access_newswire),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg"
                }), (0, f.jsx)(s.FormattedMessage, {
                  ...Ar.nav_quick_access_newswire
                })]
              })
            })]
          })
        },
        Ds = "quick-access-menu",
        Fs = e => {
          let {
            site: t,
            brand: a,
            hideRockstarBrand: n,
            hideQuickAccess: i
          } = e;
          const l = (0, s.useIntl)(),
            {
              windowWidth: d
            } = (0, o.useWindowResize)(),
            [u, g] = (0, r.useState)(null),
            [h, p] = (0, r.useState)(null),
            [m, v] = k(),
            b = x(),
            y = m === Ds,
            _ = i ? Ar.nav_rockstargames_home : Ar.nav_rockstargames_logo,
            w = {
              domain: b.currentSite?.site === c.C.www ? "" : `https://${b.sites[c.C.www]}.rockstargames.com`,
              path: "/"
            },
            T = d < 1024,
            {
              styles: C,
              attributes: S,
              forceUpdate: j
            } = (0, Wr.usePopper)(u, h, {
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
          return (0, r.useEffect)((() => {
            Promise.resolve().then(j)
          }), [u, y]), (0, f.jsxs)("div", {
            className: "rockstargames-modules-core-headercc10478657fa254e4e3449bce7c07d2d",
            children: [!n && (0, f.jsxs)("div", {
              className: "rockstargames-modules-core-headerd6ca505694953416f6cfd919ef1904e1",
              children: [(T || i) && (0, f.jsx)(Br, {
                location: w,
                gaText: Ar.nav_rockstargames_home.defaultMessage,
                gaBreadCrumb: Ar.nav_rockstargames_home.defaultMessage,
                "aria-label": l.formatMessage(_),
                children: (0, f.jsx)(As, {})
              }), !T && !i && (0, f.jsx)("button", {
                type: "button",
                className: "rockstargames-modules-core-headera8caa9bacc7f74ef9bd86698de9ff08c",
                onClick: () => v(Ds),
                "aria-label": l.formatMessage(_),
                ref: g,
                children: (0, f.jsx)(As, {})
              }), y && !i && (0, f.jsxs)(f.Fragment, {
                children: [(0, f.jsx)(ss, {
                  isOpen: y,
                  onEscapeKey: () => v(null),
                  onMouseClick: () => v(null)
                }), (0, f.jsx)("div", {
                  className: "rockstargames-modules-core-headerd6bd4cea9554313294cb18d1478da1ca",
                  style: {
                    ...C.popper
                  },
                  ref: p,
                  ...S.popper,
                  children: (0, f.jsx)(Ls, {})
                })]
              })]
            }), a && (0, f.jsxs)(f.Fragment, {
              children: [!n && (0, f.jsx)("div", {
                className: "rockstargames-modules-core-headerc2788a414e74cc6eecfa96c0dc4ffac8"
              }), (0, f.jsx)("div", {
                className: "rockstargames-modules-core-headeref547bd473dcff449cc4d72700b35e3a",
                children: (0, f.jsx)("img", {
                  className: "rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e",
                  "data-brand": t,
                  alt: t,
                  src: a
                })
              })]
            })]
          })
        },
        $s = {
          header: "rockstargames-modules-core-headerb9149341b2c77373002bd1b206231069",
          fluid: "rockstargames-modules-core-headerec46a8779f24ebce8cd66175dfa225f8",
          fixed: "rockstargames-modules-core-headere7388ff62f2c8d2f6ecfc70019310faa",
          title: "rockstargames-modules-core-headerbc99b8e4243957f58ee357454d77a14b",
          quickAccessWrapper: "rockstargames-modules-core-headera949a457f9b9536c84492c22ad8ab91e"
        },
        zs = e => {
          let {
            headerRef: t,
            data: a
          } = e;
          const s = (0, r.useMemo)((() => {
              const {
                currentSite: e
              } = (0, c.A)();
              if (e?.site === c.C.socialClub) return {
                zIndex: 8600
              }
            }), []),
            n = Cr(a.links);
          return (0, f.jsxs)("header", {
            ref: t,
            className: [$s.header, $s.fixed].join(" "),
            style: s,
            children: [(0, f.jsx)("div", {
              className: $s.title,
              children: (0, f.jsx)(Fs, {
                site: a.site,
                brand: a.brand,
                hideQuickAccess: a.hideQuickAccess || !1
              })
            }), (0, f.jsx)("div", {
              className: $s.fluid,
              children: (0, f.jsx)(Rs, {
                links: n
              })
            }), (0, f.jsx)("div", {
              className: $s.fixed,
              children: (0, f.jsx)(gs, {
                cta: a.cta,
                includeSearch: !a.hideSearch
              })
            })]
          })
        },
        Us = {
          hamburger: "rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052",
          open: "rockstargames-modules-core-headerbd080f06ee310dbeb7602106d104aa1b"
        },
        Vs = e => {
          let {
            toggle: t,
            isMenuOpen: a
          } = e;
          const {
            track: r
          } = (0, n.useGtmTrack)();
          return (0, f.jsx)("div", {
            className: [Us.hamburger, a ? Us.open : ""].join(" "),
            children: (0, f.jsxs)("button", {
              onClick: () => {
                r({
                  event: a ? "nav_close" : "nav_open",
                  element_placement: "Global Nav"
                }), t?.()
              },
              title: "Open Menu",
              type: "button",
              children: [(0, f.jsx)("span", {}), (0, f.jsx)("span", {}), (0, f.jsx)("span", {})]
            })
          })
        },
        qs = {
          header: "rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3",
          title: "rockstargames-modules-core-headerb77426232e2ade0dcb72f4d2764215e8",
          nav: "rockstargames-modules-core-headerd6629e9cc98efe8997d0620a9275c627",
          fullMenuOpen: "rockstargames-modules-core-headeraa4c60d9207e8327ebc788a3e1d56d5b",
          navContainer: "rockstargames-modules-core-headerc5b9f47efbb73b2dfd9c68013ca5bed4",
          searchOpen: "rockstargames-modules-core-headerba19960a101d69f671900a795029cf7b",
          overlay: "rockstargames-modules-core-headerff8c8312206e01ca7503d1914e699e1d"
        };
      var Xs = a(79112);
      const Ys = e => {
          let {
            text: t
          } = e;
          const {
            isMobile: a
          } = (0, o.useWindowResize)(), n = (0, s.useIntl)(), i = x(), {
            viewAllLocation: l,
            games: c
          } = _s(n, i), [d, u] = (0, r.useState)(2.5);
          return (0, r.useEffect)((() => {
            u(a ? 2.5 : 3.5)
          }), [a]), (0, f.jsxs)("div", {
            className: "rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d",
            "data-testid": "gamesMenu",
            children: [(0, f.jsxs)("div", {
              className: "rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764",
              children: [(0, f.jsx)("h2", {
                children: t
              }), (0, f.jsxs)(Br, {
                gaText: Ar.nav_view_all_games.defaultMessage,
                gaBreadCrumb: `Games > ${Ar.nav_view_all_games.defaultMessage}`,
                location: l,
                className: Ss.navigationLink,
                children: [(0, f.jsx)(s.FormattedMessage, {
                  ...Ar.nav_view_all_games
                }), (0, f.jsx)("img", {
                  src: Yr,
                  alt: n.formatMessage(Ar.nav_view_all_games)
                })]
              })]
            }), (0, f.jsx)(Xs.RC, {
              className: "rockstargames-modules-core-headerc916087398dcb2ac0d81fc2541342f98",
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: d,
              speed: 700,
              children: c.map((e => (0, f.jsx)(Xs.qr, {
                className: "rockstargames-modules-core-headerfb650180ffb26ef3af920b51a6e292b1",
                children: (0, f.jsx)(ks, {
                  titleSlug: e.titleSlug,
                  title: e.text,
                  gaText: e.gaText,
                  gaBreadCrumb: `Games > ${e.gaText}`,
                  location: e.location,
                  dataTestId: e.dataTestId,
                  isLegacy: e.isLegacy
                })
              }, e.gaText)))
            })]
          })
        },
        Gs = e => {
          let {
            children: t,
            isOpen: a
          } = e;
          return (0, f.jsx)(Fr.AnimatePresence, {
            children: a && (0, f.jsx)(Fr.motion.div, {
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
              transition: $r.springOpen,
              children: t
            })
          })
        },
        Hs = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerc02f6922f08136a6e751eed320862016",
          subMenuDropdownButton: "rockstargames-modules-core-headerf24a7f458786bb57d5a3bc334c6355fc",
          open: "rockstargames-modules-core-headerbb4494f77dcd9ffda130e4e916bdb05d",
          subMenuDropdownItems: "rockstargames-modules-core-headerbf4e902d509c225732afae50338dd4c0"
        },
        Ws = {},
        Ks = e => {
          let {
            text: t,
            dataTestId: a,
            type: r,
            target: s,
            location: n,
            className: o,
            gaText: i,
            gaBreadCrumb: l,
            isLegacy: c,
            onClick: d,
            ...u
          } = e;
          const [g] = fs(n ? [n] : []), h = r === Ir;
          return (0, f.jsxs)(Br, {
            className: [js(Boolean(g)), Ws.subMenuItem, o].join(" "),
            dataTestId: a,
            location: n,
            type: r,
            target: s,
            gaText: i,
            gaBreadCrumb: l,
            onClick: d,
            isLegacy: c,
            label: t,
            ...u,
            children: [t, h && (0, f.jsx)("img", {
              alt: "",
              src: Xr
            })]
          })
        },
        Qs = e => {
          let {
            text: t,
            dataTestId: a,
            navChildren: r,
            gaText: s,
            gaBreadCrumb: o,
            onClick: i,
            isSubMenuOpen: l,
            toggleMenuOpen: c,
            ...d
          } = e;
          const {
            track: u
          } = (0, n.useGtmTrack)();
          return (0, f.jsxs)("div", {
            className: Hs.subMenuDropdownContainer,
            ...d,
            children: [(0, f.jsxs)("button", {
              type: "button",
              "data-testid": a,
              className: [Hs.subMenuDropdownButton, l ? Hs.open : ""].join(" "),
              onClick: () => {
                u(Mr(void 0, "", s, o)), c()
              },
              children: [t, (0, f.jsx)("img", {
                src: qr,
                alt: ""
              })]
            }), (0, f.jsx)(Fr.AnimatePresence, {
              children: l && (0, f.jsx)(Fr.motion.div, {
                className: Hs.subMenuDropdownItems,
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
                transition: $r.springOpen,
                children: r.map((e => (0, f.jsx)(Ks, {
                  text: e.text,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  location: e.location,
                  gaText: e.gaText,
                  gaBreadCrumb: `${o} > ${e.gaText}`,
                  onClick: i,
                  isLegacy: e.isLegacy
                }, e.gaText)))
              })
            })]
          })
        },
        Js = e => {
          let {
            dataTestId: t,
            type: a,
            target: s,
            location: n,
            navChildren: o,
            gaBreadCrumb: i,
            onClick: l,
            isOpen: c,
            setIsOpen: d,
            text: u,
            gaText: g,
            ...h
          } = e;
          const [p, m] = (0, r.useState)(null), [v] = fs(n ? [n] : []), b = i ? `${i} > ${g}` : g;
          if (a === Or) return (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)(xs, {
              text: u,
              dataTestId: t,
              gaText: g,
              gaBreadCrumb: b,
              onClick: () => d(),
              isOpen: c,
              ...h
            }), (0, f.jsx)(Gs, {
              isOpen: c,
              children: o?.map(((e, t) => e.type === Or ? (0, f.jsx)(Qs, {
                text: e.text,
                dataTestId: e.dataTestId,
                navChildren: e.children || [],
                gaText: e.gaText,
                gaBreadCrumb: `${b} > ${e.gaText}`,
                onClick: l,
                isSubMenuOpen: p === t,
                toggleMenuOpen: () => m(p !== t ? t : null)
              }, e.gaText) : (0, f.jsx)(Ks, {
                location: e.location,
                dataTestId: e.dataTestId,
                target: e.target,
                text: e.text,
                type: e.type,
                gaText: e.gaText,
                gaBreadCrumb: `${b} > ${e.gaText}`,
                onClick: l
              }, e.gaText)))
            })]
          });
          if (a === Rr) return (0, f.jsx)(Ys, {
            text: u
          });
          const x = a === Ir;
          return (0, f.jsxs)(Br, {
            location: n,
            dataTestId: t,
            type: a,
            target: s,
            gaText: g,
            gaBreadCrumb: b,
            className: [js(Boolean(v)), v ? "rockstargames-modules-core-headerf6daff7a849e2826ed2d1f41b9941956" : ""].join(" "),
            label: u,
            ...h,
            children: [u, x && (0, f.jsx)("img", {
              alt: "",
              src: Xr
            })]
          })
        },
        Zs = e => {
          let {
            links: t,
            cta: a,
            onClick: s
          } = e;
          const [n, o] = (0, r.useState)(null);
          return (0, f.jsx)("div", {
            className: "rockstargames-modules-core-headerb6afa349a14125fd2210278a4b958ebb",
            children: (0, f.jsxs)("ul", {
              children: [t.map(((e, t) => (0, f.jsx)(Fr.motion.li, {
                variants: zr,
                transition: $r.staggerFade,
                children: (0, f.jsx)(Js, {
                  text: e.text,
                  gaText: e.gaText,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  onClick: s,
                  isOpen: n === t,
                  setIsOpen: () => o(n !== t ? t : null)
                })
              }, e.text))), a && (0, f.jsx)(Fr.motion.li, {
                className: "rockstargames-modules-core-headerc22ed7fb01d7e65a14a7913a0459a4e3",
                variants: zr,
                transition: $r.staggerFade,
                children: (0, f.jsx)(Dr, {
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
        en = e => {
          let {
            headerRef: t,
            data: a
          } = e;
          const [s, n] = (0, r.useState)(!1), [i, l] = (0, r.useState)(!1), {
            isSearchPage: d,
            forceSearch: u
          } = w(), g = T(), {
            pathname: h,
            hash: p,
            search: m
          } = g, v = C(), {
            currentSite: b
          } = x(), y = Cr(a.links), {
            setBodyIsLocked: k
          } = (0, o.useBodyScrollable)("HeaderMobile"), _ = {
            show: {
              height: "auto",
              paddingBottom: s && a.brand ? "var(--global-navigation-height)" : "",
              transition: {
                ...$r.hamburgerOpen,
                staggerChildren: .05
              }
            },
            hidden: {
              height: 0,
              paddingBottom: 0,
              transition: $r.hamburgerClose
            }
          };
          return (0, r.useEffect)((() => {
            k(!!s)
          }), [s]), (0, r.useEffect)((() => {
            l(!1), n(!1)
          }), [h, p, m]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("header", {
              ref: t,
              className: qs.header,
              children: [(0, f.jsx)(Vs, {
                toggle: () => {
                  n(!s), l(!1)
                },
                isMenuOpen: s
              }), (0, f.jsx)("div", {
                className: qs.title,
                children: (0, f.jsx)(Fs, {
                  site: a.site,
                  brand: a.brand,
                  hideRockstarBrand: !!a.brand
                })
              }), (0, f.jsx)("div", {
                children: (0, f.jsx)(gs, {
                  includeSearch: !1,
                  isMobile: !0
                })
              })]
            }), (0, f.jsx)(Fr.AnimatePresence, {
              children: (s || i || d && b?.site === c.C.www) && (0, f.jsxs)(f.Fragment, {
                children: [(0, f.jsxs)(Fr.motion.nav, {
                  className: [qs.nav, s && a.brand ? qs.paddingBottom : "", s ? qs.fullMenuOpen : ""].join(" "),
                  variants: _,
                  animate: "show",
                  initial: "hidden",
                  exit: "hidden",
                  children: [!a.hideSearch && (0, f.jsx)(us, {
                    isSearchOpen: i || d && u,
                    setIsSearchOpen: l
                  }), s && (0, f.jsx)("div", {
                    className: [qs.navContainer, i ? qs.searchOpen : ""].join(" "),
                    children: (0, f.jsx)(Zs, {
                      links: y,
                      cta: a.cta,
                      onClick: () => {
                        n(!1), l(!1)
                      }
                    })
                  })]
                }), s && a.brand && !a.hideQuickAccess && (0, f.jsx)(Ls, {}), !d && (0, f.jsx)(Fr.motion.div, {
                  className: qs.overlay,
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  exit: {
                    opacity: 0,
                    transition: $r.hamburgerClose
                  },
                  transition: $r.hamburgerOpen
                })]
              })
            }), (0, f.jsx)(Sr.Menu, {
              location: g,
              onNavigate: v
            })]
          })
        };
      a(79952);
      const tn = () => {
          const e = (0, r.useRef)(null),
            t = "__spatialNavigation__" in window ? window.__spatialNavigation__ : null;
          return (0, r.useEffect)((() => {
            t && t.enableExperimentalAPIs(!0)
          }), []), (0, f.jsx)("button", {
            ref: e,
            className: "rockstargames-modules-core-headere0e27fbcd7bb62793ad72aa4562e8b53",
            onClick: () => {
              const a = document.querySelector("header");
              if (t && a) {
                const r = t.findCandidates(a, "down", {
                  mode: "all"
                });
                if (r !== a) {
                  const t = r.filter((t => {
                    if (a.contains(t) || e.current === t) return !1;
                    const r = t.getAttribute("tabindex"),
                      s = null === r || parseInt(r, 10) >= 0,
                      n = null !== t.offsetParent && "hidden" !== getComputedStyle(t).visibility;
                    return s && n
                  }));
                  t.length > 0 && t[0].focus()
                }
              }
            },
            children: (0, f.jsx)(s.FormattedMessage, {
              ...Ar.accessibility_skip_button
            })
          })
        },
        an = {
          pillBtn: "rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e",
          selected: "rockstargames-modules-core-headere3891b1e9b084d58f6e1afb5fa14ab12",
          globalNavigationRoot: "rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b",
          large: "rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79",
          badge: "rockstargames-modules-core-headerab6bac3e7cd6aeeec5fe34375b77b1a2",
          globalNavigationSpacer: "rockstargames-modules-core-headerd45d3098c677dd2ec79f50475413ab8e",
          globalNavigationSearchSpacer: "rockstargames-modules-core-headere22f06c8b88ebe362a876f197dca5953"
        };
      E.gsap.registerPlugin(Oa, or, Tr);
      const rn = () => {
          const e = (0, r.useRef)(null),
            t = (0, o.useScroll)(),
            a = t?.freezeUserShouldSeeMore,
            {
              windowWidth: s
            } = (0, o.useWindowResize)(),
            n = (() => {
              const e = (0, r.useContext)(v);
              if (void 0 === e) throw new Error("useNavigationData must be used within a Navigation Provider");
              return e.navigationData
            })(),
            i = T(),
            {
              isSearchPage: l,
              forceSearch: c
            } = w(),
            d = s < 1024,
            [u, g] = (0, r.useState)(!1),
            h = (0, r.useRef)(null),
            p = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            g(!0)
          }), []), (0, r.useEffect)((() => {
            const t = "data-show-more-content";
            document.body.removeAttribute(t), e?.current?.removeAttribute(t)
          }), [i.pathname]);
          const m = (0, r.useCallback)((t => {
            if (a) return;
            const r = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
            t.direction === h?.current || r ? r && t?.animation?.pause() : -1 === t.direction ? t.animation?.reverse() : t.animation?.play();
            const s = "data-show-more-content";
            1 === t.direction ? (document.body.setAttribute(s, ""), e?.current?.setAttribute(s, "")) : (document.body.removeAttribute(s), e?.current?.removeAttribute(s)), h.current = t.direction
          }), [a]);
          (0, r.useEffect)((() => {
            const e = E.gsap.context((() => {
              p?.current && E.gsap.set(p.current, {
                paused: !0,
                scrollTrigger: {
                  onUpdate: e => {
                    m(e)
                  },
                  start: "140px",
                  end: 999999999
                }
              })
            }));
            return () => e.revert()
          }), [a, p?.current]);
          const b = (0, r.useMemo)((() => d ? (0, f.jsx)(en, {
            headerRef: p,
            data: n
          }) : (0, f.jsx)(zs, {
            headerRef: p,
            data: n
          })), [n, d]);
          return (0, f.jsxs)("div", {
            className: an.globalNavigationRoot,
            "data-header-initialized": u,
            ref: e,
            children: [(0, f.jsx)(tn, {}), (0, f.jsx)("div", {
              className: [an.globalNavigationSpacer, l && c ? an.globalNavigationSearchSpacer : ""].join(" ")
            }), b]
          })
        },
        sn = () => {
          const e = document.getElementById("main");
          e && (e.style.marginTop = "var(--promo-banner-height, 0px)")
        },
        {
          graphEnv: nn
        } = (0, o.getConfigForDomain)(),
        on = e => {
          let {
            navData: t,
            searchConfig: a,
            routeOptions: n,
            location: c,
            onNavigate: d
          } = e;
          const [{
            iso: u
          }] = (0, s.getLocale)(), g = S();
          return (0, r.useEffect)((() => {
            sn()
          }), []), (0, f.jsxs)("div", {
            className: "siteHeaderContainer",
            children: [void 0 !== l.Banner ? (0, f.jsx)(l.Banner, {
              type: g,
              locale: u
            }) : null, (0, f.jsx)(o.ResizeProvider, {
              children: (0, f.jsx)(i.UN, {
                children: (0, f.jsx)(b, {
                  navData: t,
                  location: c,
                  onNavigate: d,
                  searchConfig: a,
                  routeOptions: n,
                  children: (0, f.jsx)(rn, {})
                })
              })
            })]
          })
        },
        ln = (0, o.withRockstarGraph)((e => {
          let {
            navData: t,
            searchConfig: a,
            routeOptions: n,
            location: c,
            onNavigate: d,
            privateToken: u
          } = e;
          const [{
            iso: g
          }] = (0, s.getLocale)(), h = S();
          return (0, r.useEffect)((() => {
            sn()
          }), []), (0, f.jsxs)("div", {
            className: "siteHeaderContainer",
            children: [void 0 !== l.Banner ? (0, f.jsx)(l.Banner, {
              type: h,
              locale: g
            }) : null, (0, f.jsx)(o.ResizeProvider, {
              children: (0, f.jsx)(i.iR, {
                privateToken: u,
                children: (0, f.jsx)(i.UN, {
                  children: (0, f.jsx)(b, {
                    navData: t,
                    location: c,
                    onNavigate: d,
                    searchConfig: a,
                    routeOptions: n,
                    children: (0, f.jsx)(rn, {})
                  })
                })
              })
            })]
          })
        }), {
          env: nn
        }),
        cn = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(r) {
            return (0, f.jsx)(j, {
              header: t,
              hidden: a,
              children: (0, f.jsx)(e, {
                ...r
              })
            })
          }
        }((0, s.withIntl)((e => {
          let {
            ...t
          } = e;
          const {
            hasProvider: a
          } = (0, n.useRockstarUser)();
          return a ? (0, f.jsx)(on, {
            ...t
          }) : (0, f.jsx)(ln, {
            ...t
          })
        }), M), null, !0)
    },
    80763: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        useGtmTrack: () => r.h,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => s.A
      });
      var r = a(15900),
        s = a(84904)
    },
    84904: (e, t, a) => {
      a.d(t, {
        A: () => k,
        K: () => p
      });
      var r = a(95966);
      const s = (0, r.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, r.makeVar)(null)
        }),
        n = e => s(e),
        o = (0, r.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, r.makeVar)(!1)
        }),
        i = e => o(e),
        l = (0, r.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, r.makeVar)(!1)
        }),
        c = e => l(e),
        d = (0, r.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, r.makeVar)((0, r.webSettingsReactive)()?.currentCharId)
        }),
        u = e => d(e),
        g = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        h = e => g(e),
        p = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        m = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        f = e => m(e),
        v = (0, r.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        b = e => v(e),
        x = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        y = e => x(e),
        k = () => {
          const e = (0, r.useReactiveVar)(m),
            t = (0, r.useReactiveVar)(v),
            a = (0, r.useReactiveVar)(d),
            p = (0, r.useReactiveVar)(s),
            k = (0, r.useReactiveVar)(l),
            _ = (0, r.useReactiveVar)(g);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: k,
            navOpen: p,
            userData: (0, r.useReactiveVar)(x),
            selectedCharacterTuple: _,
            jumpScMenuFocus: (0, r.useReactiveVar)(o),
            setCharactersNeeded: f,
            setCrewsNeeded: b,
            setCurrentCharId: u,
            setHasNotifications: c,
            setNavOpen: n,
            setSelectedCharacterTuple: h,
            setUserData: y,
            setJumpScMenuFocus: i
          }
        }
    }
  }
]);