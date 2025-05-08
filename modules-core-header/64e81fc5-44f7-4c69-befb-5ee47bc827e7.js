! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "64e81fc5-44f7-4c69-befb-5ee47bc827e7", e._sentryDebugIdIdentifier = "sentry-dbid-64e81fc5-44f7-4c69-befb-5ee47bc827e7")
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
  [1118, 7344], {
    4066: (e, a, n) => {
      n.d(a, {
        A: () => w,
        K: () => f
      });
      var r = n(95966);
      const t = (0, r.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, r.makeVar)(null)
        }),
        o = e => t(e),
        i = (0, r.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, r.makeVar)(!1)
        }),
        s = e => i(e),
        d = (0, r.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, r.makeVar)(!1)
        }),
        l = e => d(e),
        c = (0, r.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, r.makeVar)((0, r.webSettingsReactive)()?.currentCharId)
        }),
        A = e => c(e),
        m = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        g = e => m(e),
        f = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        h = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        p = e => h(e),
        u = (0, r.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        C = e => u(e),
        b = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        v = e => b(e),
        w = () => {
          const e = (0, r.useReactiveVar)(h),
            a = (0, r.useReactiveVar)(u),
            n = (0, r.useReactiveVar)(c),
            f = (0, r.useReactiveVar)(t),
            w = (0, r.useReactiveVar)(d),
            x = (0, r.useReactiveVar)(m);
          return {
            charactersNeeded: e,
            crewsNeeded: a,
            currentCharId: n,
            hasNotifications: w,
            navOpen: f,
            userData: (0, r.useReactiveVar)(b),
            selectedCharacterTuple: x,
            jumpScMenuFocus: (0, r.useReactiveVar)(i),
            setCharactersNeeded: p,
            setCrewsNeeded: C,
            setCurrentCharId: A,
            setHasNotifications: l,
            setNavOpen: o,
            setSelectedCharacterTuple: g,
            setUserData: v,
            setJumpScMenuFocus: s
          }
        }
    },
    66369: (e, a, n) => {
      n.r(a), n.d(a, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        useGtmTrack: () => r.h,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => t.A
      });
      var r = n(85712),
        t = n(4066)
    },
    85712: (e, a, n) => {
      n.d(a, {
        UN: () => c,
        iR: () => w,
        h: () => m,
        Wx: () => x
      });
      var r = n(62229),
        t = n(95966),
        o = n(66369),
        i = n(40296);
      const s = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var d = n(73855);
      const l = (0, t.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        c = e => {
          let {
            checkUser: a,
            children: n
          } = e;
          const c = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, n] = (0, r.useState)([]), [d, l] = (0, r.useState)([]), [c, A] = (0, r.useState)(null), {
                data: m,
                loggedIn: g
              } = (0, o.useRockstarUser)(), {
                hasGtaPlus: f
              } = m ?? {}, h = (0, i.bn)(), p = (e, r) => {
                const o = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = r ?? {};
                    (0, t.track)({
                      ...e,
                      ...a
                    }), o.push(e)
                  }
                })), n([...a, ...o])
              };
              (0, r.useEffect)((() => {
                if (m && null !== g) {
                  const e = u(m);
                  d.length && e && p(d, e), A(e)
                } else e || d.length && p(d)
              }), [m, g, d]), (0, r.useEffect)((() => {
                const e = d.filter((e => -1 === a.indexOf(e)));
                l(e)
              }), [a]);
              const u = e => {
                const a = [],
                  n = [],
                  r = [],
                  t = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [o, i] = e;
                  i.length && i.forEach((e => {
                    const i = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === o) {
                      n.includes(i) || n.push(i), r.includes(i) || "1" !== e.stats?.overview?.hasGtaPlus?.value || r.push(i);
                      const a = `${o}_${e.platform}`;
                      t.includes(a) || t.push(a)
                    }
                    a.includes(i) || a.push(i)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [n, r] = e;
                  t.push(`${n}_${r}`), a.includes(r) || a.push(r)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: g ?? !1,
                  gta_plus_active: !!g && Boolean(f),
                  platforms_played: a.length ? a.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: t.length ? t.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: n.length ? n.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: h
                }
              };
              return {
                track: e => {
                  if (void 0 === g || !m || !c) {
                    const a = [...d];
                    return a.push({
                      ...e
                    }), l(a)
                  }
                  return (0, t.track)({
                    ...e,
                    ...c
                  })
                }
              }
            }(a),
            A = (0, r.useMemo)((() => c), [c, a]);
          return (0, d.jsx)(l.Provider, {
            value: A,
            children: n
          })
        },
        A = {
          track: () => null
        },
        m = () => (0, r.useContext)(l) ?? A;
      var g = n(4066);
      var f = n(17531),
        h = n.n(f);
      var p = n(37240),
        u = n(35422);
      const C = e => {
          let {
            privateToken: a
          } = e;
          const {
            charactersNeeded: n,
            crewsNeeded: o,
            currentCharId: i
          } = (0, g.A)(), s = (0, t.useRockstarToken)(), [d, l] = (0, r.useState)(), [c] = (0, t.useRockstarTokenReactive)(), A = (0, t.useRockstarTokenPing)(), [m, f] = (0, r.useState)(), [C, b] = (0, r.useState)(!1), v = void 0 === m, [w, x] = (0, r.useState)(1);
          return (0, r.useEffect)((() => {
            "gtao" !== n || d?.characters?.gtao || (l({
              ...d,
              accountSynced: !1
            }), x((e => e + 1)))
          }), [n, d?.characters?.gtao]), (0, r.useEffect)((() => {
            o && !d?.crews && (l({
              ...d,
              accountSynced: !1
            }), x((e => e + 1)))
          }), [o, d?.crews]), (0, r.useEffect)((() => {
            0 === w && l({
              ...d,
              accountSynced: !0
            })
          }), [w]), (0, r.useEffect)((() => {
            a && c(a)
          }), [a]), (0, r.useEffect)((() => {
            "" !== s || A()
          }), [s]), (0, r.useEffect)((() => {
            if ("" === s) return;
            const e = !!s;
            if (e || C || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: a
                    } = e;
                    const {
                      gateway: n,
                      silentCheck: r
                    } = (0, t.getConfigForDomain)(), o = {
                      method: "POST",
                      body: `fingerprint=${await h().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, i = await fetch(r, o);
                    if (200 !== i.status) return void a(!1);
                    const s = `${n}?code=${await i.json()}`,
                      d = await fetch(s, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: l
                      } = await d.json();
                    return a(l), l
                  })({
                    token: c
                  })
                } catch (e) {}
              })(), b(!0)), !e && C && f(!1), e) {
              const e = (e => {
                let {
                  bearerToken: a
                } = e;
                const n = (0, p.s)(a),
                  {
                    host: r
                  } = (0, t.getConfigForDomain)(),
                  o = parseInt(n.nameid),
                  i = n["scAuth.Nickname"],
                  s = "True" === (n?.["scAuth.IsAMinor"] ?? "True"),
                  d = new Date(n["scAuth.MemberSince"]),
                  l = new Date,
                  c = (0, u.M)(l, d) < 12,
                  A = (new Date).getTime() / 1e3;
                return {
                  id: o,
                  nonExpiredToken: (n?.exp ?? 0) - A > 0,
                  avatar: n["scAuth.AvatarUrl"],
                  bearer_token_expired: n.exp > Date.now(),
                  isAMinor: s,
                  isNewAccount: c,
                  nickname: i,
                  profile_link: `https://${r}.rockstargames.com/member/${i}?id=${o}`
                }
              })({
                bearerToken: s
              });
              l({
                ...d,
                ...e
              })
            }
          }), [s, C]), (0, r.useEffect)((() => {
            (async () => {
              if (m && d && o && !d?.crews) {
                const e = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: n
                  } = e;
                  const {
                    crews: r
                  } = await (0, t.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: n
                    }
                  });
                  return r
                })({
                  pingBearer: A,
                  rockstarId: d.id
                });
                l({
                  ...d,
                  crews: e
                }), x((e => e - 1))
              }
            })()
          }), [d?.nickname, o, m]), (0, r.useEffect)((() => {
            (async () => {
              if (!m || !d || d?.gamesPlayed) return;
              const e = await (async e => {
                let {
                  pingBearer: a
                } = e;
                const {
                  all: n
                } = await (0, t.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: a
                });
                return n
              })({
                pingBearer: A
              });
              l({
                ...d,
                gamesPlayed: e
              }), x((e => e - 1))
            })()
          }), [d?.nickname, m]), (0, r.useEffect)((() => {
            (async () => {
              if (m && d && "gtao" === n && !d?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: a
                } = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: n,
                    rockstarId: r
                  } = e;
                  const o = [],
                    i = await (0, t.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  await (i?.platforms?.reduce((async (e, n) => {
                    if (await e, ["ps3", "xbox", "xbox360"].includes(n)) return;
                    const r = await (0, t.coreScApiFetch)(`games/gtao/characters?platform=${n}`, {
                      pingBearer: a
                    });
                    r?.status && r?.result?.map((e => {
                      const {
                        stats: a
                      } = e, {
                        overview: r
                      } = a, {
                        rank: t
                      } = r;
                      if ("0" === t.value) return;
                      const i = ["ps4", "ps5"].includes(n) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return o.push({
                        ...e,
                        mugshotUrl: i,
                        platform: n
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: s,
                    accounts: d
                  } = await (0, t.coreScApiFetch)(`profile/getprofile?nickname=${n}&maxFriends=0`, {
                    pingBearer: a
                  });
                  if (!s || !d.length) return {
                    gtaoCharacters: o,
                    linkedAccounts: []
                  };
                  const l = d[0],
                    {
                      rockstarAccount: c,
                      linkedAccounts: A
                    } = l;
                  if (c?.rockstarId !== r) return {
                    gtaoCharacters: o,
                    linkedAccounts: []
                  };
                  if (!o.length) return {
                    gtaoCharacters: o,
                    linkedAccounts: l.linkedAccounts
                  };
                  const m = n;
                  let g = "",
                    f = "";
                  return A?.map((e => ("xbl" === e?.onlineService ? g = e.userName : "np" === e?.onlineService && (f = e.userName), e))), o.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), o.map(((e, a) => (e.platformUsername = m, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = f || m), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = g || m), e))), {
                    gtaoCharacters: o,
                    linkedAccounts: A
                  }
                })({
                  pingBearer: A,
                  nickname: d.nickname,
                  rockstarId: d.id
                });
                l({
                  ...d,
                  characters: {
                    ...d.characters,
                    gtao: e
                  },
                  linkedAccounts: a,
                  hasGtaPlus: "1" === e?.[i]?.stats?.overview?.hasGtaPlus?.value
                }), x((e => e - 1))
              }
            })()
          }), [n, d?.nickname, m]), (0, r.useEffect)((() => {
            d?.id && d?.nonExpiredToken && (f(!0), (0, g.K)(d.id))
          }), [JSON.stringify(d)]), {
            data: d,
            loggedIn: m,
            loading: v
          }
        },
        b = {},
        v = (0, t.setContextItem)({
          context: (0, r.createContext)(b),
          key: "userContext"
        }),
        w = e => {
          let {
            children: a,
            privateToken: n
          } = e;
          const t = C({
              privateToken: n
            }),
            o = (0, r.useMemo)((() => ({
              ...t,
              privateToken: n,
              hasProvider: !0
            })), [t]);
          return (0, d.jsx)(v.Provider, {
            value: o,
            children: a
          })
        },
        x = () => (0, r.useContext)(v)
    },
    39082: (e, a, n) => {
      n.d(a, {
        A: () => Qi
      });
      var r = n(62229),
        t = n(81788),
        o = n(2918),
        i = n(95966),
        s = n(85712),
        d = n(50257),
        l = n(30062);
      const c = t.locales.map((e => e.subdomaincom)).filter((e => "en" !== e)),
        A = c.length ? `(?:/(?:${c.join("|")}))?` : "";

      function m(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = "/" === e ? "" : e.replace(/\/+$/, "");
        return new RegExp(`^${A}${n}${a?"/?$":"(?:/.*)?$"}`)
      }
      const g = {
          [l.C.www]: [m("/", !0), m("/games"), m("/downloads"), m("/gta-v"), m("/gta-online"), m("/gta-plus"), m("/reddeadonline"), m("/reddeadredemption2"), m("/reddeadredemption"), m("/GTATrilogy"), m("/newswire")]
        },
        f = {
          [l.C.www]: [m("/careers"), m("/videos")]
        },
        h = {
          [l.C.www]: [m("/reddeadredemption2/restricted-content/agegate", !0), m("/newswire/article/3928aaa9471o3a"), m("/corpinfo"), m("/privacy"), m("/legal"), m("/ccpa"), m("/cookies"), m("/contact"), m("/gta-online/license-plates", !0), m("/VI")]
        };
      var p = n(73855);
      const u = (0, r.createContext)({
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
        C = e => {
          let {
            navData: a,
            location: n,
            onNavigate: i,
            routeOptions: s,
            children: d,
            searchConfig: c
          } = e;
          const [A, m] = (0, r.useState)(null), [g, f] = (0, r.useMemo)((() => (0, t.getLocale)()), []), {
            hash: h
          } = n, {
            data: C
          } = (0, o.useRockstarUser)(), b = (0, l.A)(), v = (0, r.useMemo)((() => {
            const e = {
              ...n,
              ...window.location
            };
            return {
              navigationData: a,
              onNavigate: i,
              environment: b,
              location: e,
              locale: g,
              rockstarUser: C,
              openedDropdown: A,
              setOpenedDropdown: m,
              routeOptions: s,
              searchConfig: c
            }
          }), [a, g, JSON.stringify(n), b, A, s, C]);
          return (0, r.useEffect)((() => {
            f(g.iso);
            const e = () => m(null);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", e)
            }
          }), []), (0, r.useEffect)((() => {
            const e = h?.replace("#", "");
            if (!e) return () => {};
            const a = setInterval((() => {
                const n = document.getElementById(e);
                n && (clearInterval(a), window.scrollTo({
                  top: n.offsetTop,
                  behavior: "smooth"
                }))
              }), 200),
              n = setTimeout((() => clearInterval(a)), 1e4);
            return () => {
              clearTimeout(n), clearInterval(a)
            }
          }), [h]), (0, p.jsx)(u.Provider, {
            value: v,
            children: d
          })
        },
        b = () => {
          const e = (0, r.useContext)(u);
          if (void 0 === e) throw new Error("useDomainEnvironment must be used within a Navigation Provider");
          return e.environment
        },
        v = () => {
          const e = (0, r.useContext)(u);
          if (void 0 === e) throw new Error("useRockstarUserProfile must be used within a Navigation Provider");
          return e.rockstarUser
        },
        w = () => {
          const e = (0, r.useContext)(u);
          if (void 0 === e) throw new Error("useOpenDropdown must be used within a Navigation Provider");
          const {
            openedDropdown: a,
            setOpenedDropdown: n
          } = e;
          return [a, e => {
            n(e === a ? null : e)
          }]
        },
        x = () => {
          const e = (0, r.useContext)(u);
          if (void 0 === e) throw new Error("useSearchConfig must be used within a Navigation Provider");
          return e.searchConfig
        },
        y = () => {
          const e = (0, r.useContext)(u);
          if (void 0 === e) throw new Error("useRouteOptions must be used within a Navigation Provider");
          return e.routeOptions
        },
        k = () => {
          const e = (0, r.useContext)(u);
          if (void 0 === e) throw new Error("useWindowLocation must be used within a Navigation Provider");
          return e.location
        },
        B = () => {
          const e = (0, r.useContext)(u);
          if (void 0 === e) throw new Error("useOnNavigate must be used within a Navigation Provider");
          return e.onNavigate
        },
        I = () => {
          const {
            pathname: e
          } = k(), {
            currentSite: a
          } = (0, l.A)();
          return (0, r.useMemo)((() => ((e, a) => a ? h[a]?.find((a => a.test(e))) ? "none" : f[a]?.find((a => a.test(e))) ? "small" : g[a]?.find((a => a.test(e))) ? "fullscreen" : "none" : "none")(e, a?.site)), [e, a])
        };
      var H = n(53178),
        S = n.n(H),
        z = n(27835),
        D = n.n(z),
        R = n(17529),
        N = n.n(R),
        _ = n(72162),
        T = n.n(_),
        F = n(82510),
        E = n.n(F),
        M = n(90675),
        j = n.n(M),
        P = n(39460),
        G = {};
      G.styleTagTransform = j(), G.setAttributes = T(), G.insert = N().bind(null, "head"), G.domAPI = D(), G.insertStyleElement = E(), S()(P.A, G);
      const O = P.A && P.A.locals ? P.A.locals : void 0;
      class L extends r.Component {
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, p.jsxs)("div", {
            className: O.errorMsg,
            children: [(0, p.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, p.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      var W = n(52542),
        J = n(13581);
      let U, Q, K, q, Y, $, V, X, Z, ee, ae, ne, re, te, oe = () => U || "undefined" != typeof window && (U = window.gsap) && U.registerPlugin && U,
        ie = 1,
        se = [],
        de = [],
        le = [],
        ce = Date.now,
        Ae = (e, a) => a,
        me = (e, a) => ~le.indexOf(e) && le[le.indexOf(e) + 1][a],
        ge = e => !!~ae.indexOf(e),
        fe = (e, a, n, r, t) => e.addEventListener(a, n, {
          passive: !r,
          capture: !!t
        }),
        he = (e, a, n, r) => e.removeEventListener(a, n, !!r),
        pe = "scrollLeft",
        ue = "scrollTop",
        Ce = () => ne && ne.isPressed || de.cache++,
        be = (e, a) => {
          let n = r => {
            if (r || 0 === r) {
              ie && (q.history.scrollRestoration = "manual");
              let a = ne && ne.isPressed;
              r = n.v = Math.round(r) || (ne && ne.iOS ? 1 : 0), e(r), n.cacheID = de.cache, a && Ae("ss", r)
            } else(a || de.cache !== n.cacheID || Ae("ref")) && (n.cacheID = de.cache, n.v = e());
            return n.v + n.offset
          };
          return n.offset = 0, e && n
        },
        ve = {
          s: pe,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: be((function(e) {
            return arguments.length ? q.scrollTo(e, we.sc()) : q.pageXOffset || Y[pe] || $[pe] || V[pe] || 0
          }))
        },
        we = {
          s: ue,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: ve,
          sc: be((function(e) {
            return arguments.length ? q.scrollTo(ve.sc(), e) : q.pageYOffset || Y[ue] || $[ue] || V[ue] || 0
          }))
        },
        xe = (e, a) => (a && a._ctx && a._ctx.selector || U.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== U.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        ye = (e, a) => {
          let {
            s: n,
            sc: r
          } = a;
          ge(e) && (e = Y.scrollingElement || $);
          let t = de.indexOf(e),
            o = r === we.sc ? 1 : 2;
          !~t && (t = de.push(e) - 1), de[t + o] || fe(e, "scroll", Ce);
          let i = de[t + o],
            s = i || (de[t + o] = be(me(e, n), !0) || (ge(e) ? r : be((function(a) {
              return arguments.length ? e[n] = a : e[n]
            }))));
          return s.target = e, i || (s.smooth = "smooth" === U.getProperty(e, "scrollBehavior")), s
        },
        ke = (e, a, n) => {
          let r = e,
            t = e,
            o = ce(),
            i = o,
            s = a || 50,
            d = Math.max(500, 3 * s),
            l = (e, a) => {
              let d = ce();
              a || d - o > s ? (t = r, r = e, i = o, o = d) : n ? r += e : r = t + (e - t) / (d - i) * (o - i)
            };
          return {
            update: l,
            reset: () => {
              t = r = n ? 0 : r, i = o = 0
            },
            getVelocity: e => {
              let a = i,
                s = t,
                c = ce();
              return (e || 0 === e) && e !== r && l(e), o === i || c - i > d ? 0 : (r + (n ? s : -s)) / ((n ? c : o) - a) * 1e3
            }
          }
        },
        Be = (e, a) => (a && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        Ie = e => {
          let a = Math.max(...e),
            n = Math.min(...e);
          return Math.abs(a) >= Math.abs(n) ? a : n
        },
        He = () => {
          ee = U.core.globals().ScrollTrigger, ee && ee.core && (() => {
            let e = ee.core,
              a = e.bridge || {},
              n = e._scrollers,
              r = e._proxies;
            n.push(...de), r.push(...le), de = n, le = r, Ae = (e, n) => a[e](n)
          })()
        },
        Se = e => (U = e || oe(), U && "undefined" != typeof document && document.body && (q = window, Y = document, $ = Y.documentElement, V = Y.body, ae = [q, Y, $, V], K = U.utils.clamp, te = U.core.context || function() {}, Z = "onpointerenter" in V ? "pointer" : "mouse", X = ze.isTouch = q.matchMedia && q.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in q || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, re = ze.eventTypes = ("ontouchstart" in $ ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in $ ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => ie = 0), 500), He(), Q = 1), Q);
      ve.op = we, de.cache = 0;
      class ze {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          Q || Se(U) || console.warn("Please gsap.registerPlugin(Observer)"), ee || He();
          let {
            tolerance: a,
            dragMinimum: n,
            type: r,
            target: t,
            lineHeight: o,
            debounce: i,
            preventDefault: s,
            onStop: d,
            onStopDelay: l,
            ignore: c,
            wheelSpeed: A,
            event: m,
            onDragStart: g,
            onDragEnd: f,
            onDrag: h,
            onPress: p,
            onRelease: u,
            onRight: C,
            onLeft: b,
            onUp: v,
            onDown: w,
            onChangeX: x,
            onChangeY: y,
            onChange: k,
            onToggleX: B,
            onToggleY: I,
            onHover: H,
            onHoverEnd: S,
            onMove: z,
            ignoreCheck: D,
            isNormalizer: R,
            onGestureStart: N,
            onGestureEnd: _,
            onWheel: T,
            onEnable: F,
            onDisable: E,
            onClick: M,
            scrollSpeed: j,
            capture: P,
            allowClicks: G,
            lockAxis: O,
            onLockAxis: L
          } = e;
          this.target = t = xe(t) || $, this.vars = e, c && (c = U.utils.toArray(c)), a = a || 1e-9, n = n || 0, A = A || 1, j = j || 1, r = r || "wheel,touch,pointer", i = !1 !== i, o || (o = parseFloat(q.getComputedStyle(V).lineHeight) || 22);
          let W, J, K, ae, oe, ie, de, le = this,
            Ae = 0,
            me = 0,
            pe = ye(t, ve),
            ue = ye(t, we),
            be = pe(),
            ze = ue(),
            De = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === re[0],
            Re = ge(t),
            Ne = t.ownerDocument || Y,
            _e = [0, 0, 0],
            Te = [0, 0, 0],
            Fe = 0,
            Ee = () => Fe = ce(),
            Me = (e, a) => (le.event = e) && c && ~c.indexOf(e.target) || a && De && "touch" !== e.pointerType || D && D(e, a),
            je = () => {
              let e = le.deltaX = Ie(_e),
                n = le.deltaY = Ie(Te),
                r = Math.abs(e) >= a,
                t = Math.abs(n) >= a;
              k && (r || t) && k(le, e, n, _e, Te), r && (C && le.deltaX > 0 && C(le), b && le.deltaX < 0 && b(le), x && x(le), B && le.deltaX < 0 != Ae < 0 && B(le), Ae = le.deltaX, _e[0] = _e[1] = _e[2] = 0), t && (w && le.deltaY > 0 && w(le), v && le.deltaY < 0 && v(le), y && y(le), I && le.deltaY < 0 != me < 0 && I(le), me = le.deltaY, Te[0] = Te[1] = Te[2] = 0), (ae || K) && (z && z(le), K && (h(le), K = !1), ae = !1), ie && !(ie = !1) && L && L(le), oe && (T(le), oe = !1), W = 0
            },
            Pe = (e, a, n) => {
              _e[n] += e, Te[n] += a, le._vx.update(e), le._vy.update(a), i ? W || (W = requestAnimationFrame(je)) : je()
            },
            Ge = (e, a) => {
              O && !de && (le.axis = de = Math.abs(e) > Math.abs(a) ? "x" : "y", ie = !0), "y" !== de && (_e[2] += e, le._vx.update(e, !0)), "x" !== de && (Te[2] += a, le._vy.update(a, !0)), i ? W || (W = requestAnimationFrame(je)) : je()
            },
            Oe = e => {
              if (Me(e, 1)) return;
              let a = (e = Be(e, s)).clientX,
                r = e.clientY,
                t = a - le.x,
                o = r - le.y,
                i = le.isDragging;
              le.x = a, le.y = r, (i || Math.abs(le.startX - a) >= n || Math.abs(le.startY - r) >= n) && (h && (K = !0), i || (le.isDragging = !0), Ge(t, o), i || g && g(le))
            },
            Le = le.onPress = e => {
              Me(e, 1) || e && e.button || (le.axis = de = null, J.pause(), le.isPressed = !0, e = Be(e), Ae = me = 0, le.startX = le.x = e.clientX, le.startY = le.y = e.clientY, le._vx.reset(), le._vy.reset(), fe(R ? t : Ne, re[1], Oe, s, !0), le.deltaX = le.deltaY = 0, p && p(le))
            },
            We = le.onRelease = e => {
              if (Me(e, 1)) return;
              he(R ? t : Ne, re[1], Oe, !0);
              let a = !isNaN(le.y - le.startY),
                n = le.isDragging && (Math.abs(le.x - le.startX) > 3 || Math.abs(le.y - le.startY) > 3),
                r = Be(e);
              !n && a && (le._vx.reset(), le._vy.reset(), s && G && U.delayedCall(.08, (() => {
                if (ce() - Fe > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (Ne.createEvent) {
                  let a = Ne.createEvent("MouseEvents");
                  a.initMouseEvent("click", !0, !0, q, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(a)
                }
              }))), le.isDragging = le.isGesturing = le.isPressed = !1, d && !R && J.restart(!0), f && n && f(le), u && u(le, n)
            },
            Je = e => e.touches && e.touches.length > 1 && (le.isGesturing = !0) && N(e, le.isDragging),
            Ue = () => (le.isGesturing = !1) || _(le),
            Qe = e => {
              if (Me(e)) return;
              let a = pe(),
                n = ue();
              Pe((a - be) * j, (n - ze) * j, 1), be = a, ze = n, d && J.restart(!0)
            },
            Ke = e => {
              if (Me(e)) return;
              e = Be(e, s), T && (oe = !0);
              let a = (1 === e.deltaMode ? o : 2 === e.deltaMode ? q.innerHeight : 1) * A;
              Pe(e.deltaX * a, e.deltaY * a, 0), d && !R && J.restart(!0)
            },
            qe = e => {
              if (Me(e)) return;
              let a = e.clientX,
                n = e.clientY,
                r = a - le.x,
                t = n - le.y;
              le.x = a, le.y = n, ae = !0, (r || t) && Ge(r, t)
            },
            Ye = e => {
              le.event = e, H(le)
            },
            $e = e => {
              le.event = e, S(le)
            },
            Ve = e => Me(e) || Be(e, s) && M(le);
          J = le._dc = U.delayedCall(l || .25, (() => {
            le._vx.reset(), le._vy.reset(), J.pause(), d && d(le)
          })).pause(), le.deltaX = le.deltaY = 0, le._vx = ke(0, 50, !0), le._vy = ke(0, 50, !0), le.scrollX = pe, le.scrollY = ue, le.isDragging = le.isGesturing = le.isPressed = !1, te(this), le.enable = e => (le.isEnabled || (fe(Re ? Ne : t, "scroll", Ce), r.indexOf("scroll") >= 0 && fe(Re ? Ne : t, "scroll", Qe, s, P), r.indexOf("wheel") >= 0 && fe(t, "wheel", Ke, s, P), (r.indexOf("touch") >= 0 && X || r.indexOf("pointer") >= 0) && (fe(t, re[0], Le, s, P), fe(Ne, re[2], We), fe(Ne, re[3], We), G && fe(t, "click", Ee, !1, !0), M && fe(t, "click", Ve), N && fe(Ne, "gesturestart", Je), _ && fe(Ne, "gestureend", Ue), H && fe(t, Z + "enter", Ye), S && fe(t, Z + "leave", $e), z && fe(t, Z + "move", qe)), le.isEnabled = !0, e && e.type && Le(e), F && F(le)), le), le.disable = () => {
            le.isEnabled && (se.filter((e => e !== le && ge(e.target))).length || he(Re ? Ne : t, "scroll", Ce), le.isPressed && (le._vx.reset(), le._vy.reset(), he(R ? t : Ne, re[1], Oe, !0)), he(Re ? Ne : t, "scroll", Qe, P), he(t, "wheel", Ke, P), he(t, re[0], Le, P), he(Ne, re[2], We), he(Ne, re[3], We), he(t, "click", Ee, !0), he(t, "click", Ve), he(Ne, "gesturestart", Je), he(Ne, "gestureend", Ue), he(t, Z + "enter", Ye), he(t, Z + "leave", $e), he(t, Z + "move", qe), le.isEnabled = le.isPressed = le.isDragging = !1, E && E(le))
          }, le.kill = le.revert = () => {
            le.disable();
            let e = se.indexOf(le);
            e >= 0 && se.splice(e, 1), ne === le && (ne = 0)
          }, se.push(le), R && ge(t) && (ne = le), le.enable(m)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      ze.version = "3.12.2", ze.create = e => new ze(e), ze.register = Se, ze.getAll = () => se.slice(), ze.getById = e => se.filter((a => a.vars.id === e))[0], oe() && U.registerPlugin(ze);
      let De, Re, Ne, _e, Te, Fe, Ee, Me, je, Pe, Ge, Oe, Le, We, Je, Ue, Qe, Ke, qe, Ye, $e, Ve, Xe, Ze, ea, aa, na, ra, ta, oa, ia, sa, da, la, ca, Aa, ma = 1,
        ga = Date.now,
        fa = ga(),
        ha = 0,
        pa = 0,
        ua = (e, a, n) => {
          let r = Ra(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return n["_" + a + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
        },
        Ca = (e, a) => !a || Ra(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        ba = () => pa && requestAnimationFrame(ba),
        va = () => We = 1,
        wa = () => We = 0,
        xa = e => e,
        ya = e => Math.round(1e5 * e) / 1e5 || 0,
        ka = () => "undefined" != typeof window,
        Ba = () => De || ka() && (De = window.gsap) && De.registerPlugin && De,
        Ia = e => !!~Ee.indexOf(e),
        Ha = e => ("Height" === e ? ia : Ne["inner" + e]) || Te["client" + e] || Fe["client" + e],
        Sa = e => me(e, "getBoundingClientRect") || (Ia(e) ? () => (On.width = Ne.innerWidth, On.height = ia, On) : () => en(e)),
        za = (e, a) => {
          let {
            s: n,
            d2: r,
            d: t,
            a: o
          } = a;
          return Math.max(0, (n = "scroll" + r) && (o = me(e, n)) ? o() - Sa(e)()[t] : Ia(e) ? (Te[n] || Fe[n]) - Ha(r) : e[n] - e["offset" + r])
        },
        Da = (e, a) => {
          for (let n = 0; n < qe.length; n += 3)(!a || ~a.indexOf(qe[n + 1])) && e(qe[n], qe[n + 1], qe[n + 2])
        },
        Ra = e => "string" == typeof e,
        Na = e => "function" == typeof e,
        _a = e => "number" == typeof e,
        Ta = e => "object" == typeof e,
        Fa = (e, a, n) => e && e.progress(a ? 0 : 1) && n && e.pause(),
        Ea = (e, a) => {
          if (e.enabled) {
            let n = a(e);
            n && n.totalTime && (e.callbackAnimation = n)
          }
        },
        Ma = Math.abs,
        ja = "left",
        Pa = "right",
        Ga = "bottom",
        Oa = "width",
        La = "height",
        Wa = "Right",
        Ja = "Left",
        Ua = "Top",
        Qa = "Bottom",
        Ka = "padding",
        qa = "margin",
        Ya = "Width",
        $a = "Height",
        Va = "px",
        Xa = e => Ne.getComputedStyle(e),
        Za = (e, a) => {
          for (let n in a) n in e || (e[n] = a[n]);
          return e
        },
        en = (e, a) => {
          let n = a && "matrix(1, 0, 0, 1, 0, 0)" !== Xa(e)[Je] && De.to(e, {
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
          return n && n.progress(0).kill(), r
        },
        an = (e, a) => {
          let {
            d2: n
          } = a;
          return e["offset" + n] || e["client" + n] || 0
        },
        nn = e => {
          let a, n = [],
            r = e.labels,
            t = e.duration();
          for (a in r) n.push(r[a] / t);
          return n
        },
        rn = e => {
          let a = De.utils.snap(e),
            n = Array.isArray(e) && e.slice(0).sort(((e, a) => e - a));
          return n ? function(e, r) {
            let t, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001;
            if (!r) return a(e);
            if (r > 0) {
              for (e -= o, t = 0; t < n.length; t++)
                if (n[t] >= e) return n[t];
              return n[t - 1]
            }
            for (t = n.length, e += o; t--;)
              if (n[t] <= e) return n[t];
            return n[0]
          } : function(n, r) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001,
              o = a(n);
            return !r || Math.abs(o - n) < t || o - n < 0 == r < 0 ? o : a(r < 0 ? n - e : n + e)
          }
        },
        tn = (e, a, n, r) => n.split(",").forEach((n => e(a, n, r))),
        on = (e, a, n, r, t) => e.addEventListener(a, n, {
          passive: !r,
          capture: !!t
        }),
        sn = (e, a, n, r) => e.removeEventListener(a, n, !!r),
        dn = (e, a, n) => {
          (n = n && n.wheelHandler) && (e(a, "wheel", n), e(a, "touchmove", n))
        },
        ln = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        cn = {
          toggleActions: "play",
          anticipatePin: 0
        },
        An = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        mn = (e, a) => {
          if (Ra(e)) {
            let n = e.indexOf("="),
              r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
            ~n && (e.indexOf("%") > n && (r *= a / 100), e = e.substr(0, n - 1)), e = r + (e in An ? An[e] * a : ~e.indexOf("%") ? parseFloat(e) * a / 100 : parseFloat(e) || 0)
          }
          return e
        },
        gn = (e, a, n, r, t, o, i, s) => {
          let {
            startColor: d,
            endColor: l,
            fontSize: c,
            indent: A,
            fontWeight: m
          } = t, g = _e.createElement("div"), f = Ia(n) || "fixed" === me(n, "pinType"), h = -1 !== e.indexOf("scroller"), p = f ? Fe : n, u = -1 !== e.indexOf("start"), C = u ? d : l, b = "border-color:" + C + ";font-size:" + c + ";color:" + C + ";font-weight:" + m + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((h || s) && f ? "fixed;" : "absolute;"), (h || s || !f) && (b += (r === we ? Pa : Ga) + ":" + (o + parseFloat(A)) + "px;"), i && (b += "box-sizing:border-box;text-align:left;width:" + i.offsetWidth + "px;"), g._isStart = u, g.setAttribute("class", "gsap-marker-" + e + (a ? " marker-" + a : "")), g.style.cssText = b, g.innerText = a || 0 === a ? e + "-" + a : e, p.children[0] ? p.insertBefore(g, p.children[0]) : p.appendChild(g), g._offset = g["offset" + r.op.d2], fn(g, 0, r, u), g
        },
        fn = (e, a, n, r) => {
          let t = {
              display: "block"
            },
            o = n[r ? "os2" : "p2"],
            i = n[r ? "p2" : "os2"];
          e._isFlipped = r, t[n.a + "Percent"] = r ? -100 : 0, t[n.a] = r ? "1px" : 0, t["border" + o + Ya] = 1, t["border" + i + Ya] = 0, t[n.p] = a + "px", De.set(e, t)
        },
        hn = [],
        pn = {},
        un = () => ga() - ha > 34 && (da || (da = requestAnimationFrame(Tn))),
        Cn = () => {
          (!Xe || !Xe.isPressed || Xe.startX > Fe.clientWidth) && (de.cache++, Xe ? da || (da = requestAnimationFrame(Tn)) : Tn(), ha || kn("scrollStart"), ha = ga())
        },
        bn = () => {
          aa = Ne.innerWidth, ea = Ne.innerHeight
        },
        vn = () => {
          de.cache++, !Le && !Ve && !_e.fullscreenElement && !_e.webkitFullscreenElement && (!Ze || aa !== Ne.innerWidth || Math.abs(Ne.innerHeight - ea) > .25 * Ne.innerHeight) && Me.restart(!0)
        },
        wn = {},
        xn = [],
        yn = () => sn(qn, "scrollEnd", yn) || Rn(!0),
        kn = e => wn[e] && wn[e].map((e => e())) || xn,
        Bn = [],
        In = e => {
          for (let a = 0; a < Bn.length; a += 5)(!e || Bn[a + 4] && Bn[a + 4].query === e) && (Bn[a].style.cssText = Bn[a + 1], Bn[a].getBBox && Bn[a].setAttribute("transform", Bn[a + 2] || ""), Bn[a + 3].uncache = 1)
        },
        Hn = (e, a) => {
          let n;
          for (Ue = 0; Ue < hn.length; Ue++) n = hn[Ue], !n || a && n._ctx !== a || (e ? n.kill(1) : n.revert(!0, !0));
          a && In(a), a || kn("revert")
        },
        Sn = (e, a) => {
          de.cache++, (a || !la) && de.forEach((e => Na(e) && e.cacheID++ && (e.rec = 0))), Ra(e) && (Ne.history.scrollRestoration = ta = e)
        },
        zn = 0,
        Dn = () => {
          Fe.appendChild(oa), ia = oa.offsetHeight || Ne.innerHeight, Fe.removeChild(oa)
        },
        Rn = (e, a) => {
          if (ha && !e) return void on(qn, "scrollEnd", yn);
          Dn(), la = qn.isRefreshing = !0, de.forEach((e => Na(e) && ++e.cacheID && (e.rec = e())));
          let n = kn("refreshInit");
          Ye && qn.sort(), a || Hn(), de.forEach((e => {
            Na(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), hn.slice(0).forEach((e => e.refresh())), hn.forEach(((e, a) => {
            if (e._subPinOffset && e.pin) {
              let a = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                n = e.pin[a];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[a] - n), e.refresh()
            }
          })), hn.forEach((e => {
            let a = za(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > a) && e.setPositions(e.start, Math.max(e.start + 1, a), !0)
          })), n.forEach((e => e && e.render && e.render(-1))), de.forEach((e => {
            Na(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), Sn(ta, 1), Me.pause(), zn++, la = 2, Tn(2), hn.forEach((e => Na(e.vars.onRefresh) && e.vars.onRefresh(e))), la = qn.isRefreshing = !1, kn("refresh")
        },
        Nn = 0,
        _n = 1,
        Tn = e => {
          if (!la || 2 === e) {
            qn.isUpdating = !0, Aa && Aa.update(0);
            let e = hn.length,
              a = ga(),
              n = a - fa >= 50,
              r = e && hn[0].scroll();
            if (_n = Nn > r ? -1 : 1, la || (Nn = r), n && (ha && !We && a - ha > 200 && (ha = 0, kn("scrollEnd")), Ge = fa, fa = a), _n < 0) {
              for (Ue = e; Ue-- > 0;) hn[Ue] && hn[Ue].update(0, n);
              _n = 1
            } else
              for (Ue = 0; Ue < e; Ue++) hn[Ue] && hn[Ue].update(0, n);
            qn.isUpdating = !1
          }
          da = 0
        },
        Fn = [ja, "top", Ga, Pa, qa + Qa, qa + Wa, qa + Ua, qa + Ja, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        En = Fn.concat([Oa, La, "boxSizing", "max" + Ya, "max" + $a, "position", qa, Ka, Ka + Ua, Ka + Wa, Ka + Qa, Ka + Ja]),
        Mn = (e, a, n, r) => {
          if (!e._gsap.swappedIn) {
            let t, o = Fn.length,
              i = a.style,
              s = e.style;
            for (; o--;) t = Fn[o], i[t] = n[t];
            i.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (i.display = "inline-block"), s[Ga] = s[Pa] = "auto", i.flexBasis = n.flexBasis || "auto", i.overflow = "visible", i.boxSizing = "border-box", i[Oa] = an(e, ve) + Va, i[La] = an(e, we) + Va, i[Ka] = s[qa] = s.top = s[ja] = "0", Pn(r), s[Oa] = s["max" + Ya] = n[Oa], s[La] = s["max" + $a] = n[La], s[Ka] = n[Ka], e.parentNode !== a && (e.parentNode.insertBefore(a, e), a.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        jn = /([A-Z])/g,
        Pn = e => {
          if (e) {
            let a, n, r = e.t.style,
              t = e.length,
              o = 0;
            for ((e.t._gsap || De.core.getCache(e.t)).uncache = 1; o < t; o += 2) n = e[o + 1], a = e[o], n ? r[a] = n : r[a] && r.removeProperty(a.replace(jn, "-$1").toLowerCase())
          }
        },
        Gn = e => {
          let a = En.length,
            n = e.style,
            r = [],
            t = 0;
          for (; t < a; t++) r.push(En[t], n[En[t]]);
          return r.t = e, r
        },
        On = {
          left: 0,
          top: 0
        },
        Ln = (e, a, n, r, t, o, i, s, d, l, c, A, m, g) => {
          Na(e) && (e = e(s)), Ra(e) && "max" === e.substr(0, 3) && (e = A + ("=" === e.charAt(4) ? mn("0" + e.substr(3), n) : 0));
          let f, h, p, u = m ? m.time() : 0;
          if (m && m.seek(0), isNaN(e) || (e = +e), _a(e)) m && (e = De.utils.mapRange(m.scrollTrigger.start, m.scrollTrigger.end, 0, A, e)), i && fn(i, n, r, !0);
          else {
            Na(a) && (a = a(s));
            let o, c, A, m, g = (e || "0").split(" ");
            p = xe(a, s) || Fe, o = en(p) || {}, o && (o.left || o.top) || "none" !== Xa(p).display || (m = p.style.display, p.style.display = "block", o = en(p), m ? p.style.display = m : p.style.removeProperty("display")), c = mn(g[0], o[r.d]), A = mn(g[1] || "0", n), e = o[r.p] - d[r.p] - l + c + t - A, i && fn(i, A, r, n - A < 20 || i._isStart && A > 20), n -= n - A
          }
          if (g && (s[g] = e || -.001, e < 0 && (e = 0)), o) {
            let a = e + n,
              t = o._isStart;
            f = "scroll" + r.d2, fn(o, a, r, t && a > 20 || !t && (c ? Math.max(Fe[f], Te[f]) : o.parentNode[f]) <= a + 1), c && (d = en(i), c && (o.style[r.op.p] = d[r.op.p] - r.op.m - o._offset + Va))
          }
          return m && p && (f = en(p), m.seek(A), h = en(p), m._caScrollDist = f[r.p] - h[r.p], e = e / m._caScrollDist * A), m && m.seek(u), m ? e : Math.round(e)
        },
        Wn = /(webkit|moz|length|cssText|inset)/i,
        Jn = (e, a, n, r) => {
          if (e.parentNode !== a) {
            let t, o, i = e.style;
            if (a === Fe) {
              for (t in e._stOrig = i.cssText, o = Xa(e), o) + t || Wn.test(t) || !o[t] || "string" != typeof i[t] || "0" === t || (i[t] = o[t]);
              i.top = n, i.left = r
            } else i.cssText = e._stOrig;
            De.core.getCache(e).uncache = 1, a.appendChild(e)
          }
        },
        Un = (e, a, n) => {
          let r = a,
            t = r;
          return a => {
            let o = Math.round(e());
            return o !== r && o !== t && Math.abs(o - r) > 3 && Math.abs(o - t) > 3 && (a = o, n && n()), t = r, r = a, a
          }
        },
        Qn = (e, a, n) => {
          let r = {};
          r[a.p] = "+=" + n, De.set(e, r)
        },
        Kn = (e, a) => {
          let n = ye(e, a),
            r = "_scroll" + a.p2,
            t = (a, o, i, s, d) => {
              let l = t.tween,
                c = o.onComplete,
                A = {};
              i = i || n();
              let m = Un(n, i, (() => {
                l.kill(), t.tween = 0
              }));
              return d = s && d || 0, s = s || a - i, l && l.kill(), o[r] = a, o.modifiers = A, A[r] = () => m(i + s * l.ratio + d * l.ratio * l.ratio), o.onUpdate = () => {
                de.cache++, Tn()
              }, o.onComplete = () => {
                t.tween = 0, c && c.call(l)
              }, l = t.tween = De.to(e, o), l
            };
          return e[r] = n, n.wheelHandler = () => t.tween && t.tween.kill() && (t.tween = 0), on(e, "wheel", n.wheelHandler), qn.isTouch && on(e, "touchmove", n.wheelHandler), t
        };
      class qn {
        constructor(e, a) {
          Re || qn.register(De) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), ra(this), this.init(e, a)
        }
        init(e, a) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !pa) return void(this.update = this.refresh = this.kill = xa);
          e = Za(Ra(e) || _a(e) || e.nodeType ? {
            trigger: e
          } : e, cn);
          let n, r, t, o, i, s, d, l, c, A, m, g, f, h, p, u, C, b, v, w, x, y, k, B, I, H, S, z, D, R, N, _, T, F, E, M, j, P, G, {
              onUpdate: O,
              toggleClass: L,
              id: W,
              onToggle: J,
              onRefresh: U,
              scrub: Q,
              trigger: K,
              pin: q,
              pinSpacing: Y,
              invalidateOnRefresh: $,
              anticipatePin: V,
              onScrubComplete: X,
              onSnapComplete: Z,
              once: ee,
              snap: ae,
              pinReparent: ne,
              pinSpacer: re,
              containerAnimation: te,
              fastScrollEnd: oe,
              preventOverlaps: ie
            } = e,
            se = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? ve : we,
            ce = !Q && 0 !== Q,
            Ae = xe(e.scroller || Ne),
            ge = De.core.getCache(Ae),
            fe = Ia(Ae),
            he = "fixed" === ("pinType" in e ? e.pinType : me(Ae, "pinType") || fe && "fixed"),
            pe = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            ue = ce && e.toggleActions.split(" "),
            Ce = "markers" in e ? e.markers : cn.markers,
            be = fe ? 0 : parseFloat(Xa(Ae)["border" + se.p2 + Ya]) || 0,
            ke = this,
            Be = e.onRefreshInit && (() => e.onRefreshInit(ke)),
            Ie = ((e, a, n) => {
              let {
                d: r,
                d2: t,
                a: o
              } = n;
              return (o = me(e, "getBoundingClientRect")) ? () => o()[r] : () => (a ? Ha(t) : e["client" + t]) || 0
            })(Ae, fe, se),
            He = ((e, a) => !a || ~le.indexOf(e) ? Sa(e) : () => On)(Ae, fe),
            Se = 0,
            ze = 0,
            Re = 0,
            Ee = ye(Ae, se);
          var Me;
          if (ke._startClamp = ke._endClamp = !1, ke._dir = se, V *= 45, ke.scroller = Ae, ke.scroll = te ? te.time.bind(te) : Ee, o = Ee(), ke.vars = e, a = a || e.animation, "refreshPriority" in e && (Ye = 1, -9999 === e.refreshPriority && (Aa = ke)), ge.tweenScroll = ge.tweenScroll || {
              top: Kn(Ae, we),
              left: Kn(Ae, ve)
            }, ke.tweenTo = n = ge.tweenScroll[se.p], ke.scrubDuration = e => {
              T = _a(e) && e, T ? _ ? _.duration(e) : _ = De.to(a, {
                ease: "expo",
                totalProgress: "+=0",
                duration: T,
                paused: !0,
                onComplete: () => X && X(ke)
              }) : (_ && _.progress(1).kill(), _ = 0)
            }, a && (a.vars.lazy = !1, a._initted && !ke.isReverted || !1 !== a.vars.immediateRender && !1 !== e.immediateRender && a.duration() && a.render(0, !0, !0), ke.animation = a.pause(), a.scrollTrigger = ke, ke.scrubDuration(Q), R = 0, W || (W = a.vars.id)), ae && (Ta(ae) && !ae.push || (ae = {
              snapTo: ae
            }), "scrollBehavior" in Fe.style && De.set(fe ? [Fe, Te] : Ae, {
              scrollBehavior: "auto"
            }), de.forEach((e => Na(e) && e.target === (fe ? _e.scrollingElement || Te : Ae) && (e.smooth = !1))), t = Na(ae.snapTo) ? ae.snapTo : "labels" === ae.snapTo ? (e => a => De.utils.snap(nn(e), a))(a) : "labelsDirectional" === ae.snapTo ? (Me = a, (e, a) => rn(nn(Me))(e, a.direction)) : !1 !== ae.directional ? (e, a) => rn(ae.snapTo)(e, ga() - ze < 500 ? 0 : a.direction) : De.utils.snap(ae.snapTo), F = ae.duration || {
              min: .1,
              max: 2
            }, F = Ta(F) ? Pe(F.min, F.max) : Pe(F, F), E = De.delayedCall(ae.delay || T / 2 || .1, (() => {
              let e = Ee(),
                r = ga() - ze < 500,
                o = n.tween;
              if (!(r || Math.abs(ke.getVelocity()) < 10) || o || We || Se === e) ke.isActive && Se !== e && E.restart(!0);
              else {
                let i = (e - s) / h,
                  l = a && !ce ? a.totalProgress() : i,
                  c = r ? 0 : (l - N) / (ga() - Ge) * 1e3 || 0,
                  A = De.utils.clamp(-i, 1 - i, Ma(c / 2) * c / .185),
                  m = i + (!1 === ae.inertia ? 0 : A),
                  g = Pe(0, 1, t(m, ke)),
                  f = Math.round(s + g * h),
                  {
                    onStart: p,
                    onInterrupt: u,
                    onComplete: C
                  } = ae;
                if (e <= d && e >= s && f !== e) {
                  if (o && !o._initted && o.data <= Ma(f - e)) return;
                  !1 === ae.inertia && (A = g - i), n(f, {
                    duration: F(Ma(.185 * Math.max(Ma(m - l), Ma(g - l)) / c / .05 || 0)),
                    ease: ae.ease || "power3",
                    data: Ma(f - e),
                    onInterrupt: () => E.restart(!0) && u && u(ke),
                    onComplete: () => {
                      ke.update(), Se = Ee(), R = N = a && !ce ? a.totalProgress() : ke.progress, Z && Z(ke), C && C(ke)
                    }
                  }, e, A * h, f - e - A * h), p && p(ke, n.tween)
                }
              }
            })).pause()), W && (pn[W] = ke), K = ke.trigger = xe(K || !0 !== q && q), G = K && K._gsap && K._gsap.stRevert, G && (G = G(ke)), q = !0 === q ? K : xe(q), Ra(L) && (L = {
              targets: K,
              className: L
            }), q && (!1 === Y || Y === qa || (Y = !(!Y && q.parentNode && q.parentNode.style && "flex" === Xa(q.parentNode).display) && Ka), ke.pin = q, r = De.core.getCache(q), r.spacer ? p = r.pinState : (re && (re = xe(re), re && !re.nodeType && (re = re.current || re.nativeElement), r.spacerIsNative = !!re, re && (r.spacerState = Gn(re))), r.spacer = b = re || _e.createElement("div"), b.classList.add("pin-spacer"), W && b.classList.add("pin-spacer-" + W), r.pinState = p = Gn(q)), !1 !== e.force3D && De.set(q, {
              force3D: !0
            }), ke.spacer = b = r.spacer, D = Xa(q), B = D[Y + se.os2], w = De.getProperty(q), x = De.quickSetter(q, se.a, Va), Mn(q, b, D), C = Gn(q)), Ce) {
            g = Ta(Ce) ? Za(Ce, ln) : ln, A = gn("scroller-start", W, Ae, se, g, 0), m = gn("scroller-end", W, Ae, se, g, 0, A), v = A["offset" + se.op.d2];
            let e = xe(me(Ae, "content") || Ae);
            l = this.markerStart = gn("start", W, e, se, g, v, 0, te), c = this.markerEnd = gn("end", W, e, se, g, v, 0, te), te && (P = De.quickSetter([l, c], se.a, Va)), he || le.length && !0 === me(Ae, "fixedMarkers") || ((e => {
              let a = Xa(e).position;
              e.style.position = "absolute" === a || "fixed" === a ? a : "relative"
            })(fe ? Fe : Ae), De.set([A, m], {
              force3D: !0
            }), H = De.quickSetter(A, se.a, Va), z = De.quickSetter(m, se.a, Va))
          }
          if (te) {
            let e = te.vars.onUpdate,
              a = te.vars.onUpdateParams;
            te.eventCallback("onUpdate", (() => {
              ke.update(0, 0, 1), e && e.apply(te, a || [])
            }))
          }
          if (ke.previous = () => hn[hn.indexOf(ke) - 1], ke.next = () => hn[hn.indexOf(ke) + 1], ke.revert = (e, n) => {
              if (!n) return ke.kill(!0);
              let r = !1 !== e || !ke.enabled,
                t = Le;
              r !== ke.isReverted && (r && (M = Math.max(Ee(), ke.scroll.rec || 0), Re = ke.progress, j = a && a.progress()), l && [l, c, A, m].forEach((e => e.style.display = r ? "none" : "block")), r && (Le = ke, ke.update(r)), !q || ne && ke.isActive || (r ? ((e, a, n) => {
                Pn(n);
                let r = e._gsap;
                if (r.spacerIsNative) Pn(r.spacerState);
                else if (e._gsap.swappedIn) {
                  let n = a.parentNode;
                  n && (n.insertBefore(e, a), n.removeChild(a))
                }
                e._gsap.swappedIn = !1
              })(q, b, p) : Mn(q, b, Xa(q), I)), r || ke.update(r), Le = t, ke.isReverted = r)
            }, ke.refresh = (r, t, g, v) => {
              if ((Le || !ke.enabled) && !t) return;
              if (q && r && ha) return void on(qn, "scrollEnd", yn);
              !la && Be && Be(ke), Le = ke, n.tween && !g && (n.tween.kill(), n.tween = 0), _ && _.pause(), $ && a && a.revert({
                kill: !1
              }).invalidate(), ke.isReverted || ke.revert(!0, !0), ke._subPinOffset = !1;
              let x, B, H, z, D, R, N, T, F, P, G, O, L, W = Ie(),
                J = He(),
                Q = te ? te.duration() : za(Ae, se),
                V = h <= .01,
                X = 0,
                Z = v || 0,
                ee = Ta(g) ? g.end : e.end,
                ae = e.endTrigger || K,
                re = Ta(g) ? g.start : e.start || (0 !== e.start && K ? q ? "0 0" : "0 100%" : 0),
                oe = ke.pinnedContainer = e.pinnedContainer && xe(e.pinnedContainer, ke),
                ie = K && Math.max(0, hn.indexOf(ke)) || 0,
                de = ie;
              for (Ce && Ta(g) && (O = De.getProperty(A, se.p), L = De.getProperty(m, se.p)); de--;) R = hn[de], R.end || R.refresh(0, 1) || (Le = ke), N = R.pin, !N || N !== K && N !== q && N !== oe || R.isReverted || (P || (P = []), P.unshift(R), R.revert(!0, !0)), R !== hn[de] && (ie--, de--);
              for (Na(re) && (re = re(ke)), re = ua(re, "start", ke), s = Ln(re, K, W, se, Ee(), l, A, ke, J, be, he, Q, te, ke._startClamp && "_startClamp") || (q ? -.001 : 0), Na(ee) && (ee = ee(ke)), Ra(ee) && !ee.indexOf("+=") && (~ee.indexOf(" ") ? ee = (Ra(re) ? re.split(" ")[0] : "") + ee : (X = mn(ee.substr(2), W), ee = Ra(re) ? re : (te ? De.utils.mapRange(0, te.duration(), te.scrollTrigger.start, te.scrollTrigger.end, s) : s) + X, ae = K)), ee = ua(ee, "end", ke), d = Math.max(s, Ln(ee || (ae ? "100% 0" : Q), ae, W, se, Ee() + X, c, m, ke, J, be, he, Q, te, ke._endClamp && "_endClamp")) || -.001, X = 0, de = ie; de--;) R = hn[de], N = R.pin, N && R.start - R._pinPush <= s && !te && R.end > 0 && (x = R.end - (ke._startClamp ? Math.max(0, R.start) : R.start), (N === K && R.start - R._pinPush < s || N === oe) && isNaN(re) && (X += x * (1 - R.progress)), N === q && (Z += x));
              if (s += X, d += X, ke._startClamp && (ke._startClamp += X), ke._endClamp && !la && (ke._endClamp = d || -.001, d = Math.min(d, za(Ae, se))), h = d - s || (s -= .01) && .001, V && (Re = De.utils.clamp(0, 1, De.utils.normalize(s, d, M))), ke._pinPush = Z, l && X && (x = {}, x[se.a] = "+=" + X, oe && (x[se.p] = "-=" + Ee()), De.set([l, c], x)), q) x = Xa(q), z = se === we, H = Ee(), y = parseFloat(w(se.a)) + Z, !Q && d > 1 && (G = (fe ? _e.scrollingElement || Te : Ae).style, G = {
                style: G,
                value: G["overflow" + se.a.toUpperCase()]
              }, fe && "scroll" !== Xa(Fe)["overflow" + se.a.toUpperCase()] && (G.style["overflow" + se.a.toUpperCase()] = "scroll")), Mn(q, b, x), C = Gn(q), B = en(q, !0), T = he && ye(Ae, z ? ve : we)(), Y && (I = [Y + se.os2, h + Z + Va], I.t = b, de = Y === Ka ? an(q, se) + h + Z : 0, de && I.push(se.d, de + Va), Pn(I), oe && hn.forEach((e => {
                e.pin === oe && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), he && Ee(M)), he && (D = {
                top: B.top + (z ? H - s : T) + Va,
                left: B.left + (z ? T : H - s) + Va,
                boxSizing: "border-box",
                position: "fixed"
              }, D[Oa] = D["max" + Ya] = Math.ceil(B.width) + Va, D[La] = D["max" + $a] = Math.ceil(B.height) + Va, D[qa] = D[qa + Ua] = D[qa + Wa] = D[qa + Qa] = D[qa + Ja] = "0", D[Ka] = x[Ka], D[Ka + Ua] = x[Ka + Ua], D[Ka + Wa] = x[Ka + Wa], D[Ka + Qa] = x[Ka + Qa], D[Ka + Ja] = x[Ka + Ja], u = ((e, a, n) => {
                let r, t = [],
                  o = e.length,
                  i = n ? 8 : 0;
                for (; i < o; i += 2) r = e[i], t.push(r, r in a ? a[r] : e[i + 1]);
                return t.t = e.t, t
              })(p, D, ne), la && Ee(0)), a ? (F = a._initted, $e(1), a.render(a.duration(), !0, !0), k = w(se.a) - y + h + Z, S = Math.abs(h - k) > 1, he && S && u.splice(u.length - 2, 2), a.render(0, !0, !0), F || a.invalidate(!0), a.parent || a.totalTime(a.totalTime()), $e(0)) : k = h, G && (G.value ? G.style["overflow" + se.a.toUpperCase()] = G.value : G.style.removeProperty("overflow-" + se.a));
              else if (K && Ee() && !te)
                for (B = K.parentNode; B && B !== Fe;) B._pinOffset && (s -= B._pinOffset, d -= B._pinOffset), B = B.parentNode;
              P && P.forEach((e => e.revert(!1, !0))), ke.start = s, ke.end = d, o = i = la ? M : Ee(), te || la || (o < M && Ee(M), ke.scroll.rec = 0), ke.revert(!1, !0), ze = ga(), E && (Se = -1, E.restart(!0)), Le = 0, a && ce && (a._initted || j) && a.progress() !== j && a.progress(j || 0, !0).render(a.time(), !0, !0), (V || Re !== ke.progress || te) && (a && !ce && a.totalProgress(te && s < -.001 && !Re ? De.utils.normalize(s, d, 0) : Re, !0), ke.progress = V || (o - s) / h === Re ? 0 : Re), q && Y && (b._pinOffset = Math.round(ke.progress * k)), _ && _.invalidate(), isNaN(O) || (O -= De.getProperty(A, se.p), L -= De.getProperty(m, se.p), Qn(A, se, O), Qn(l, se, O - (v || 0)), Qn(m, se, L), Qn(c, se, L - (v || 0))), V && !la && ke.update(), !U || la || f || (f = !0, U(ke), f = !1)
            }, ke.getVelocity = () => (Ee() - i) / (ga() - Ge) * 1e3 || 0, ke.endAnimation = () => {
              Fa(ke.callbackAnimation), a && (_ ? _.progress(1) : a.paused() ? ce || Fa(a, ke.direction < 0, 1) : Fa(a, a.reversed()))
            }, ke.labelToScroll = e => a && a.labels && (s || ke.refresh() || s) + a.labels[e] / a.duration() * h || 0, ke.getTrailing = e => {
              let a = hn.indexOf(ke),
                n = ke.direction > 0 ? hn.slice(0, a).reverse() : hn.slice(a + 1);
              return (Ra(e) ? n.filter((a => a.vars.preventOverlaps === e)) : n).filter((e => ke.direction > 0 ? e.end <= s : e.start >= d))
            }, ke.update = (e, r, t) => {
              if (te && !t && !e) return;
              let l, c, m, g, f, p, v, w, I = !0 === la ? M : ke.scroll(),
                D = e ? 0 : (I - s) / h,
                T = D < 0 ? 0 : D > 1 ? 1 : D || 0,
                F = ke.progress;
              if (r && (i = o, o = te ? Ee() : I, ae && (N = R, R = a && !ce ? a.totalProgress() : T)), V && !T && q && !Le && !ma && ha && s < I + (I - i) / (ga() - Ge) * V && (T = 1e-4), T !== F && ke.enabled) {
                if (l = ke.isActive = !!T && T < 1, c = !!F && F < 1, p = l !== c, f = p || !!T != !!F, ke.direction = T > F ? 1 : -1, ke.progress = T, f && !Le && (m = T && !F ? 0 : 1 === T ? 1 : 1 === F ? 2 : 3, ce && (g = !p && "none" !== ue[m + 1] && ue[m + 1] || ue[m], w = a && ("complete" === g || "reset" === g || g in a))), ie && (p || w) && (w || Q || !a) && (Na(ie) ? ie(ke) : ke.getTrailing(ie).forEach((e => e.endAnimation()))), ce || (!_ || Le || ma ? a && a.totalProgress(T, !(!Le || !ze && !e)) : (_._dp._time - _._start !== _._time && _.render(_._dp._time - _._start), _.resetTo ? _.resetTo("totalProgress", T, a._tTime / a._tDur) : (_.vars.totalProgress = T, _.invalidate().restart()))), q)
                  if (e && Y && (b.style[Y + se.os2] = B), he) {
                    if (f) {
                      if (v = !e && T > F && d + 1 > I && I + 1 >= za(Ae, se), ne)
                        if (e || !l && !v) Jn(q, b);
                        else {
                          let e = en(q, !0),
                            a = I - s;
                          Jn(q, Fe, e.top + (se === we ? a : 0) + Va, e.left + (se === we ? 0 : a) + Va)
                        } Pn(l || v ? u : C), S && T < 1 && l || x(y + (1 !== T || v ? 0 : k))
                    }
                  } else x(ya(y + k * T));
                ae && !n.tween && !Le && !ma && E.restart(!0), L && (p || ee && T && (T < 1 || !sa)) && je(L.targets).forEach((e => e.classList[l || ee ? "add" : "remove"](L.className))), O && !ce && !e && O(ke), f && !Le ? (ce && (w && ("complete" === g ? a.pause().totalProgress(1) : "reset" === g ? a.restart(!0).pause() : "restart" === g ? a.restart(!0) : a[g]()), O && O(ke)), !p && sa || (J && p && Ea(ke, J), pe[m] && Ea(ke, pe[m]), ee && (1 === T ? ke.kill(!1, 1) : pe[m] = 0), p || (m = 1 === T ? 1 : 3, pe[m] && Ea(ke, pe[m]))), oe && !l && Math.abs(ke.getVelocity()) > (_a(oe) ? oe : 2500) && (Fa(ke.callbackAnimation), _ ? _.progress(1) : Fa(a, "reverse" === g ? 1 : !T, 1))) : ce && O && !Le && O(ke)
              }
              if (z) {
                let e = te ? I / te.duration() * (te._caScrollDist || 0) : I;
                H(e + (A._isFlipped ? 1 : 0)), z(e)
              }
              P && P(-I / te.duration() * (te._caScrollDist || 0))
            }, ke.enable = (e, a) => {
              ke.enabled || (ke.enabled = !0, on(Ae, "resize", vn), fe || on(Ae, "scroll", Cn), Be && on(qn, "refreshInit", Be), !1 !== e && (ke.progress = Re = 0, o = i = Se = Ee()), !1 !== a && ke.refresh())
            }, ke.getTween = e => e && n ? n.tween : _, ke.setPositions = (e, a, n, r) => {
              if (te) {
                let n = te.scrollTrigger,
                  r = te.duration(),
                  t = n.end - n.start;
                e = n.start + t * e / r, a = n.start + t * a / r
              }
              ke.refresh(!1, !1, {
                start: Ca(e, n && !!ke._startClamp),
                end: Ca(a, n && !!ke._endClamp)
              }, r), ke.update()
            }, ke.adjustPinSpacing = e => {
              if (I && e) {
                let a = I.indexOf(se.d) + 1;
                I[a] = parseFloat(I[a]) + e + Va, I[1] = parseFloat(I[1]) + e + Va, Pn(I)
              }
            }, ke.disable = (e, a) => {
              if (ke.enabled && (!1 !== e && ke.revert(!0, !0), ke.enabled = ke.isActive = !1, a || _ && _.pause(), M = 0, r && (r.uncache = 1), Be && sn(qn, "refreshInit", Be), E && (E.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !fe)) {
                let e = hn.length;
                for (; e--;)
                  if (hn[e].scroller === Ae && hn[e] !== ke) return;
                sn(Ae, "resize", vn), fe || sn(Ae, "scroll", Cn)
              }
            }, ke.kill = (n, t) => {
              ke.disable(n, t), _ && !t && _.kill(), W && delete pn[W];
              let o = hn.indexOf(ke);
              o >= 0 && hn.splice(o, 1), o === Ue && _n > 0 && Ue--, o = 0, hn.forEach((e => e.scroller === ke.scroller && (o = 1))), o || la || (ke.scroll.rec = 0), a && (a.scrollTrigger = null, n && a.revert({
                kill: !1
              }), t || a.kill()), l && [l, c, A, m].forEach((e => e.parentNode && e.parentNode.removeChild(e))), Aa === ke && (Aa = 0), q && (r && (r.uncache = 1), o = 0, hn.forEach((e => e.pin === q && o++)), o || (r.spacer = 0)), e.onKill && e.onKill(ke)
            }, hn.push(ke), ke.enable(!1, !1), G && G(ke), a && a.add && !h) {
            let e = ke.update;
            ke.update = () => {
              ke.update = e, s || d || ke.refresh()
            }, De.delayedCall(.01, ke.update), h = .01, s = d = 0
          } else ke.refresh();
          q && (() => {
            if (ca !== zn) {
              let e = ca = zn;
              requestAnimationFrame((() => e === zn && Rn(!0)))
            }
          })()
        }
        static register(e) {
          return Re || (De = e || Ba(), ka() && window.document && qn.enable(), Re = pa), Re
        }
        static defaults(e) {
          if (e)
            for (let a in e) cn[a] = e[a];
          return cn
        }
        static disable(e, a) {
          pa = 0, hn.forEach((n => n[a ? "kill" : "disable"](e))), sn(Ne, "wheel", Cn), sn(_e, "scroll", Cn), clearInterval(Oe), sn(_e, "touchcancel", xa), sn(Fe, "touchstart", xa), tn(sn, _e, "pointerdown,touchstart,mousedown", va), tn(sn, _e, "pointerup,touchend,mouseup", wa), Me.kill(), Da(sn);
          for (let e = 0; e < de.length; e += 3) dn(sn, de[e], de[e + 1]), dn(sn, de[e], de[e + 2])
        }
        static enable() {
          if (Ne = window, _e = document, Te = _e.documentElement, Fe = _e.body, De && (je = De.utils.toArray, Pe = De.utils.clamp, ra = De.core.context || xa, $e = De.core.suppressOverwrites || xa, ta = Ne.history.scrollRestoration || "auto", Nn = Ne.pageYOffset, De.core.globals("ScrollTrigger", qn), Fe)) {
            pa = 1, oa = document.createElement("div"), oa.style.height = "100vh", oa.style.position = "absolute", Dn(), ba(), ze.register(De), qn.isTouch = ze.isTouch, na = ze.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), on(Ne, "wheel", Cn), Ee = [Ne, _e, Te, Fe], De.matchMedia ? (qn.matchMedia = e => {
              let a, n = De.matchMedia();
              for (a in e) n.add(a, e[a]);
              return n
            }, De.addEventListener("matchMediaInit", (() => Hn())), De.addEventListener("matchMediaRevert", (() => In())), De.addEventListener("matchMedia", (() => {
              Rn(0, 1), kn("matchMedia")
            })), De.matchMedia("(orientation: portrait)", (() => (bn(), bn)))) : console.warn("Requires GSAP 3.11.0 or later"), bn(), on(_e, "scroll", Cn);
            let e, a, n = Fe.style,
              r = n.borderTopStyle,
              t = De.core.Animation.prototype;
            for (t.revert || Object.defineProperty(t, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), n.borderTopStyle = "solid", e = en(Fe), we.m = Math.round(e.top + we.sc()) || 0, ve.m = Math.round(e.left + ve.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), Oe = setInterval(un, 250), De.delayedCall(.5, (() => ma = 0)), on(_e, "touchcancel", xa), on(Fe, "touchstart", xa), tn(on, _e, "pointerdown,touchstart,mousedown", va), tn(on, _e, "pointerup,touchend,mouseup", wa), Je = De.utils.checkPrefix("transform"), En.push(Je), Re = ga(), Me = De.delayedCall(.2, Rn).pause(), qe = [_e, "visibilitychange", () => {
                let e = Ne.innerWidth,
                  a = Ne.innerHeight;
                _e.hidden ? (Qe = e, Ke = a) : Qe === e && Ke === a || vn()
              }, _e, "DOMContentLoaded", Rn, Ne, "load", Rn, Ne, "resize", vn], Da(on), hn.forEach((e => e.enable(0, 1))), a = 0; a < de.length; a += 3) dn(sn, de[a], de[a + 1]), dn(sn, de[a], de[a + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (sa = !!e.limitCallbacks);
          let a = e.syncInterval;
          a && clearInterval(Oe) || (Oe = a) && setInterval(un, a), "ignoreMobileResize" in e && (Ze = 1 === qn.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Da(sn) || Da(on, e.autoRefreshEvents || "none"), Ve = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, a) {
          let n = xe(e),
            r = de.indexOf(n),
            t = Ia(n);
          ~r && de.splice(r, t ? 6 : 2), a && (t ? le.unshift(Ne, a, Fe, a, Te, a) : le.unshift(n, a))
        }
        static clearMatchMedia(e) {
          hn.forEach((a => a._ctx && a._ctx.query === e && a._ctx.kill(!0, !0)))
        }
        static isInViewport(e, a, n) {
          let r = (Ra(e) ? xe(e) : e).getBoundingClientRect(),
            t = r[n ? Oa : La] * a || 0;
          return n ? r.right - t > 0 && r.left + t < Ne.innerWidth : r.bottom - t > 0 && r.top + t < Ne.innerHeight
        }
        static positionInViewport(e, a, n) {
          Ra(e) && (e = xe(e));
          let r = e.getBoundingClientRect(),
            t = r[n ? Oa : La],
            o = null == a ? t / 2 : a in An ? An[a] * t : ~a.indexOf("%") ? parseFloat(a) * t / 100 : parseFloat(a) || 0;
          return n ? (r.left + o) / Ne.innerWidth : (r.top + o) / Ne.innerHeight
        }
        static killAll(e) {
          if (hn.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = wn.killAll || [];
            wn = {}, e.forEach((e => e()))
          }
        }
      }
      qn.version = "3.12.2", qn.saveStyles = e => e ? je(e).forEach((e => {
        if (e && e.style) {
          let a = Bn.indexOf(e);
          a >= 0 && Bn.splice(a, 5), Bn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), De.core.getCache(e), ra())
        }
      })) : Bn, qn.revert = (e, a) => Hn(!e, a), qn.create = (e, a) => new qn(e, a), qn.refresh = e => e ? vn() : (Re || qn.register()) && Rn(!0), qn.update = e => ++de.cache && Tn(!0 === e ? 2 : 0), qn.clearScrollMemory = Sn, qn.maxScroll = (e, a) => za(e, a ? ve : we), qn.getScrollFunc = (e, a) => ye(xe(e), a ? ve : we), qn.getById = e => pn[e], qn.getAll = () => hn.filter((e => "ScrollSmoother" !== e.vars.id)), qn.isScrolling = () => !!ha, qn.snapDirectional = rn, qn.addEventListener = (e, a) => {
        let n = wn[e] || (wn[e] = []);
        ~n.indexOf(a) || n.push(a)
      }, qn.removeEventListener = (e, a) => {
        let n = wn[e],
          r = n && n.indexOf(a);
        r >= 0 && n.splice(r, 1)
      }, qn.batch = (e, a) => {
        let n, r = [],
          t = {},
          o = a.interval || .016,
          i = a.batchMax || 1e9,
          s = (e, a) => {
            let n = [],
              r = [],
              t = De.delayedCall(o, (() => {
                a(n, r), n = [], r = []
              })).pause();
            return e => {
              n.length || t.restart(!0), n.push(e.trigger), r.push(e), i <= n.length && t.progress(1)
            }
          };
        for (n in a) t[n] = "on" === n.substr(0, 2) && Na(a[n]) && "onRefreshInit" !== n ? s(0, a[n]) : a[n];
        return Na(i) && (i = i(), on(qn, "refresh", (() => i = a.batchMax()))), je(e).forEach((e => {
          let a = {};
          for (n in t) a[n] = t[n];
          a.trigger = e, r.push(qn.create(a))
        })), r
      };
      let Yn, $n = (e, a, n, r) => (a > r ? e(r) : a < 0 && e(0), n > r ? (r - a) / (n - a) : n < 0 ? a / (a - n) : 1),
        Vn = (e, a) => {
          !0 === a ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === a ? "auto" : a ? "pan-" + a + (ze.isTouch ? " pinch-zoom" : "") : "none", e === Te && Vn(Fe, a)
        },
        Xn = {
          auto: 1,
          scroll: 1
        },
        Zn = e => {
          let a, {
              event: n,
              target: r,
              axis: t
            } = e,
            o = (n.changedTouches ? n.changedTouches[0] : n).target,
            i = o._gsap || De.core.getCache(o),
            s = ga();
          if (!i._isScrollT || s - i._isScrollT > 2e3) {
            for (; o && o !== Fe && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !Xn[(a = Xa(o)).overflowY] && !Xn[a.overflowX]);) o = o.parentNode;
            i._isScroll = o && o !== r && !Ia(o) && (Xn[(a = Xa(o)).overflowY] || Xn[a.overflowX]), i._isScrollT = s
          }(i._isScroll || "x" === t) && (n.stopPropagation(), n._gsapAllow = !0)
        },
        er = (e, a, n, r) => ze.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: a,
          onWheel: r = r && Zn,
          onPress: r,
          onDrag: r,
          onScroll: r,
          onEnable: () => n && on(_e, ze.eventTypes[0], nr, !1, !0),
          onDisable: () => sn(_e, ze.eventTypes[0], nr, !0)
        }),
        ar = /(input|label|select|textarea)/i,
        nr = e => {
          let a = ar.test(e.target.tagName);
          (a || Yn) && (e._gsapAllow = !0, Yn = a)
        };
      qn.sort = e => hn.sort(e || ((e, a) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (a.start + -1e6 * (a.vars.refreshPriority || 0)))), qn.observe = e => new ze(e), qn.normalizeScroll = e => {
        if (void 0 === e) return Xe;
        if (!0 === e && Xe) return Xe.enable();
        if (!1 === e) return Xe && Xe.kill();
        let a = e instanceof ze ? e : (e => {
          Ta(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let a, n, r, t, o, i, s, d, {
              normalizeScrollX: l,
              momentum: c,
              allowNestedScroll: A,
              onRelease: m
            } = e,
            g = xe(e.target) || Te,
            f = De.core.globals().ScrollSmoother,
            h = f && f.get(),
            p = na && (e.content && xe(e.content) || h && !1 !== e.content && !h.smooth() && h.content()),
            u = ye(g, we),
            C = ye(g, ve),
            b = 1,
            v = (ze.isTouch && Ne.visualViewport ? Ne.visualViewport.scale * Ne.visualViewport.width : Ne.outerWidth) / Ne.innerWidth,
            w = 0,
            x = Na(c) ? () => c(a) : () => c || 2.8,
            y = er(g, e.type, !0, A),
            k = () => t = !1,
            B = xa,
            I = xa,
            H = () => {
              n = za(g, we), I = Pe(na ? 1 : 0, n), l && (B = Pe(0, za(g, ve))), r = zn
            },
            S = () => {
              p._gsap.y = ya(parseFloat(p._gsap.y) + u.offset) + "px", p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)", u.offset = u.cacheID = 0
            },
            z = () => {
              H(), o.isActive() && o.vars.scrollY > n && (u() > n ? o.progress(1) && u(n) : o.resetTo("scrollY", n))
            };
          return p && De.set(p, {
            y: "+=0"
          }), e.ignoreCheck = e => na && "touchmove" === e.type && (() => {
            if (t) {
              requestAnimationFrame(k);
              let e = ya(a.deltaY / 2),
                n = I(u.v - e);
              if (p && n !== u.v + u.offset) {
                u.offset = n - u.v;
                let e = ya((parseFloat(p && p._gsap.y) || 0) - u.offset);
                p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", p._gsap.y = e + "px", u.cacheID = de.cache, Tn()
              }
              return !0
            }
            u.offset && S(), t = !0
          })() || b > 1.05 && "touchstart" !== e.type || a.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            t = !1;
            let e = b;
            b = ya((Ne.visualViewport && Ne.visualViewport.scale || 1) / v), o.pause(), e !== b && Vn(g, b > 1.01 || !l && "x"), i = C(), s = u(), H(), r = zn
          }, e.onRelease = e.onGestureStart = (e, a) => {
            if (u.offset && S(), a) {
              de.cache++;
              let a, r, t = x();
              l && (a = C(), r = a + .05 * t * -e.velocityX / .227, t *= $n(C, a, r, za(g, ve)), o.vars.scrollX = B(r)), a = u(), r = a + .05 * t * -e.velocityY / .227, t *= $n(u, a, r, za(g, we)), o.vars.scrollY = I(r), o.invalidate().duration(t).play(.01), (na && o.vars.scrollY >= n || a >= n - 1) && De.to({}, {
                onUpdate: z,
                duration: t
              })
            } else d.restart(!0);
            m && m(e)
          }, e.onWheel = () => {
            o._ts && o.pause(), ga() - w > 1e3 && (r = 0, w = ga())
          }, e.onChange = (e, a, n, t, o) => {
            if (zn !== r && H(), a && l && C(B(t[2] === a ? i + (e.startX - e.x) : C() + a - t[1])), n) {
              u.offset && S();
              let a = o[2] === n,
                r = a ? s + e.startY - e.y : u() + n - o[1],
                t = I(r);
              a && r !== t && (s += t - r), u(t)
            }(n || a) && Tn()
          }, e.onEnable = () => {
            Vn(g, !l && "x"), qn.addEventListener("refresh", z), on(Ne, "resize", z), u.smooth && (u.target.style.scrollBehavior = "auto", u.smooth = C.smooth = !1), y.enable()
          }, e.onDisable = () => {
            Vn(g, !0), sn(Ne, "resize", z), qn.removeEventListener("refresh", z), y.kill()
          }, e.lockAxis = !1 !== e.lockAxis, a = new ze(e), a.iOS = na, na && !u() && u(1), na && De.ticker.add(xa), d = a._dc, o = De.to(a, {
            ease: "power4",
            paused: !0,
            scrollX: l ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: Un(u, u(), (() => o.pause()))
            },
            onUpdate: Tn,
            onComplete: d.vars.onComplete
          }), a
        })(e);
        return Xe && Xe.target === a.target && Xe.kill(), Ia(a.target) && (Xe = a), a
      }, qn.core = {
        _getVelocityProp: ke,
        _inputObserver: er,
        _scrollers: de,
        _proxies: le,
        bridge: {
          ss: () => {
            ha || kn("scrollStart"), ha = ga()
          },
          ref: () => Le
        }
      }, Ba() && De.registerPlugin(qn);
      let rr, tr, or, ir, sr, dr, lr, cr, Ar, mr, gr, fr, hr, pr, ur, Cr, br = () => "undefined" != typeof window,
        vr = () => rr || br() && (rr = window.gsap) && rr.registerPlugin && rr,
        wr = e => mr.maxScroll(e || or);
      class xr {
        constructor(e) {
          tr || xr.register(rr) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, gr && gr.kill(), gr = this, ur(this);
          let a, n, r, t, o, i, s, d, l, c, A, m, g, f, h, {
              smoothTouch: p,
              onUpdate: u,
              onStop: C,
              smooth: b,
              onFocusIn: v,
              normalizeScroll: w,
              wholePixels: x
            } = e,
            y = this,
            k = e.effectsPrefix || "",
            B = mr.getScrollFunc(or),
            I = 1 === mr.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === b || !1 === b ? 0 : parseFloat(b) || .8,
            H = I && +e.speed || 1,
            S = 0,
            z = 0,
            D = 1,
            R = hr(0),
            N = () => R.update(-S),
            _ = {
              y: 0
            },
            T = () => a.style.overflow = "visible",
            F = e => {
              e.update();
              let a = e.getTween();
              a && (a.pause(), a._time = a._dur, a._tTime = a._tDur), f = !1, e.animation.progress(e.progress, !0)
            },
            E = (e, n) => {
              (e !== S && !c || n) && (x && (e = Math.round(e)), I && (a.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", a._gsap.y = e + "px"), z = e - S, S = e, mr.isUpdating || xr.isRefreshing || mr.update())
            },
            M = function(e) {
              return arguments.length ? (e < 0 && (e = 0), _.y = -e, f = !0, c ? S = -e : E(-e), mr.isRefreshing ? t.update() : B(e / H), this) : -S
            },
            j = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!mr.isRefreshing) {
                let e = wr(n) * H;
                e < -S && M(e), Cr.restart(!0)
              }
            })),
            P = e => {
              n.scrollTop = 0, e.target.contains && e.target.contains(n) || v && !1 === v(this, e) || (mr.isInViewport(e.target) || e.target === h || this.scrollTo(e.target, !1, "center center"), h = e.target)
            },
            G = (e, a) => {
              if (e < a.start) return e;
              let n = isNaN(a.ratio) ? 1 : a.ratio,
                r = a.end - a.start,
                t = e - a.start,
                o = a.offset || 0,
                i = a.pins || [],
                s = i.offset || 0,
                d = a._startClamp && a.start <= 0 || a.pins && a.pins.offset ? 0 : a._endClamp && a.end === wr() ? 1 : .5;
              return i.forEach((a => {
                r -= a.distance, a.nativeStart <= e && (t -= a.distance)
              })), s && (t *= (r - s / n) / r), e + (t - o * d) / n - t
            },
            O = (e, a, n) => {
              n || (e.pins.length = e.pins.offset = 0);
              let r, t, o, i, s, d, l, c, A = e.pins,
                m = e.markers;
              for (l = 0; l < a.length; l++)
                if (c = a[l], e.trigger && c.trigger && e !== c && (c.trigger === e.trigger || c.pinnedContainer === e.trigger || e.trigger.contains(c.trigger)) && (s = c._startNative || c._startClamp || c.start, d = c._endNative || c._endClamp || c.end, o = G(s, e), i = c.pin && d > 0 ? o + (d - s) : G(d, e), c.setPositions(o, i, !0, (c._startClamp ? Math.max(0, o) : o) - s), c.markerStart && m.push(rr.quickSetter([c.markerStart, c.markerEnd], "y", "px")), c.pin && c.end > 0 && !n)) {
                  if (r = c.end - c.start, t = e._startClamp && c.start < 0, t) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void O(e, a);
                    r += c.start, A.offset = -c.start
                  }
                  A.push({
                    start: c.start,
                    nativeStart: s,
                    end: c.end,
                    distance: r,
                    trig: c
                  }), e.setPositions(e.start, e.end + (t ? -c.start : r), !0)
                }
            },
            L = (e, a) => {
              o.forEach((n => O(n, e, a)))
            },
            W = () => {
              T(), requestAnimationFrame(T), o && (mr.getAll().forEach((e => {
                e._startNative = e.start, e._endNative = e.end
              })), o.forEach((e => {
                let a = e._startClamp || e.start,
                  n = e.autoSpeed ? Math.min(wr(), e.end) : a + Math.abs((e.end - a) / e.ratio),
                  r = n - e.end;
                if (a -= r / 2, n -= r / 2, a > n) {
                  let e = a;
                  a = n, n = e
                }
                e._startClamp && a < 0 ? (n = e.ratio < 0 ? wr() : e.end / e.ratio, r = n - e.end, a = 0) : (e.ratio < 0 || e._endClamp && n >= wr()) && (n = wr(), a = e.ratio < 0 || e.ratio > 1 ? 0 : n - (n - e.start) / e.ratio, r = (n - a) * e.ratio - (e.end - e.start)), e.offset = r || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(a, n, !0)
              })), L(mr.sort())), R.reset()
            },
            J = () => mr.addEventListener("refresh", W),
            U = () => o && o.forEach((e => e.vars.onRefresh(e))),
            Q = () => (o && o.forEach((e => e.vars.onRefreshInit(e))), U),
            K = (e, a, n, r) => () => {
              let t = "function" == typeof a ? a(n, r) : a;
              t || 0 === t || (t = r.getAttribute("data-" + k + e) || ("speed" === e ? 1 : 0)), r.setAttribute("data-" + k + e, t);
              let o = "clamp(" === (t + "").substr(0, 6);
              return {
                clamp: o,
                value: o ? t.substr(6, t.length - 7) : t
              }
            },
            q = (e, a, r, t, i) => {
              i = ("function" == typeof i ? i(t, e) : i) || 0;
              let s, d, l, c, A, m, g = K("speed", a, t, e),
                f = K("lag", r, t, e),
                h = rr.getProperty(e, "y"),
                p = e._gsap,
                u = [],
                C = () => {
                  a = g(), r = parseFloat(f().value), s = parseFloat(a.value) || 1, l = "auto" === a.value, A = l || d && d._startClamp && d.start <= 0 || u.offset ? 0 : d && d._endClamp && d.end === wr() ? 1 : .5, c && c.kill(), c = r && rr.to(e, {
                    ease: fr,
                    overwrite: !1,
                    y: "+=0",
                    duration: r
                  }), d && (d.ratio = s, d.autoSpeed = l)
                },
                b = () => {
                  p.y = h + "px", p.renderTransform(1), C()
                },
                v = [],
                w = 0,
                x = a => {
                  if (l) {
                    b();
                    let n = ((e, a) => {
                      let n, r, t = e.parentNode || sr,
                        o = e.getBoundingClientRect(),
                        i = t.getBoundingClientRect(),
                        s = i.top - o.top,
                        d = i.bottom - o.bottom,
                        l = (Math.abs(s) > Math.abs(d) ? s : d) / (1 - a),
                        c = -l * a;
                      return l > 0 && (n = i.height / (or.innerHeight + i.height), r = .5 === n ? 2 * i.height : 2 * Math.min(i.height, Math.abs(-l * n / (2 * n - 1))) * (a || 1), c += a ? -r * a : -r / 2, l += r), {
                        change: l,
                        offset: c
                      }
                    })(e, Ar(0, 1, -a.start / (a.end - a.start)));
                    w = n.change, m = n.offset
                  } else m = u.offset || 0, w = (a.end - a.start - m) * (1 - s);
                  u.forEach((e => w -= e.distance * (1 - s))), a.offset = w || .001, a.vars.onUpdate(a), c && c.progress(1)
                };
              return C(), (1 !== s || l || c) && (d = mr.create({
                trigger: l ? e.parentNode : e,
                start: () => a.clamp ? "clamp(top bottom+=" + i + ")" : "top bottom+=" + i,
                end: () => a.value < 0 ? "max" : a.clamp ? "clamp(bottom top-=" + i + ")" : "bottom top-=" + i,
                scroller: n,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: b,
                onRefresh: x,
                onKill: e => {
                  let a = o.indexOf(e);
                  a >= 0 && o.splice(a, 1), b()
                },
                onUpdate: e => {
                  let a, n, r, t = h + w * (e.progress - A),
                    o = u.length,
                    i = 0;
                  if (e.offset) {
                    if (o) {
                      for (n = -S, r = e.end; o--;) {
                        if (a = u[o], a.trig.isActive || n >= a.start && n <= a.end) return void(c && (a.trig.progress += a.trig.direction < 0 ? .001 : -.001, a.trig.update(0, 0, 1), c.resetTo("y", parseFloat(p.y), -z, !0), D && c.progress(1)));
                        n > a.end && (i += a.distance), r -= a.distance
                      }
                      t = h + i + w * ((rr.utils.clamp(e.start, e.end, n) - e.start - i) / (r - e.start) - A)
                    }
                    v.length && !l && v.forEach((e => e(t - i))), s = t + m, t = Math.round(1e5 * s) / 1e5 || 0, c ? (c.resetTo("y", t, -z, !0), D && c.progress(1)) : (p.y = t + "px", p.renderTransform(1))
                  }
                  var s
                }
              }), x(d), rr.core.getCache(d.trigger).stRevert = Q, d.startY = h, d.pins = u, d.markers = v, d.ratio = s, d.autoSpeed = l, e.style.willChange = "transform"), d
            };

          function Y() {
            return r = a.clientHeight, a.style.overflow = "visible", dr.style.height = or.innerHeight + (r - or.innerHeight) / H + "px", r - or.innerHeight
          }
          J(), mr.addEventListener("killAll", J), rr.delayedCall(.5, (() => D = 0)), this.scrollTop = M, this.scrollTo = (e, a, n) => {
            let r = rr.utils.clamp(0, wr(), isNaN(e) ? this.offset(e, n) : +e);
            a ? c ? rr.to(this, {
              duration: I,
              scrollTop: r,
              overwrite: "auto",
              ease: fr
            }) : B(r) : M(r)
          }, this.offset = (e, a) => {
            let n, r = (e = cr(e)[0]).style.cssText,
              t = mr.create({
                trigger: e,
                start: a || "top top"
              });
            return o && (D ? mr.refresh() : L([t], !0)), n = t.start / H, t.kill(!1), e.style.cssText = r, rr.core.getCache(e).uncache = 1, n
          }, this.content = function(e) {
            if (arguments.length) {
              let n = cr(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || dr.children[0];
              return n !== a && (a = n, l = a.getAttribute("style") || "", j && j.observe(a), rr.set(a, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), I || rr.set(a, {
                clearProps: "transform"
              })), this
            }
            return a
          }, this.wrapper = function(e) {
            return arguments.length ? (n = cr(e || "#smooth-wrapper")[0] || (e => {
              let a = ir.querySelector(".ScrollSmoother-wrapper");
              return a || (a = ir.createElement("div"), a.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(a, e), a.appendChild(e)), a
            })(a), d = n.getAttribute("style") || "", Y(), rr.set(n, I ? {
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
            }), this) : n
          }, this.effects = (e, a) => {
            if (o || (o = []), !e) return o.slice(0);
            (e = cr(e)).forEach((e => {
              let a = o.length;
              for (; a--;) o[a].trigger === e && o[a].kill()
            })), a = a || {};
            let n, r, {
                speed: t,
                lag: i,
                effectsPadding: s
              } = a,
              d = [];
            for (n = 0; n < e.length; n++) r = q(e[n], t, i, n, s), r && d.push(r);
            return o.push(...d), d
          }, this.sections = (e, a) => {
            if (i || (i = []), !e) return i.slice(0);
            let n = cr(e).map((e => mr.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: a => {
                e.style.opacity = a.isActive ? "1" : "0", e.style.pointerEvents = a.isActive ? "all" : "none"
              }
            })));
            return a && a.add ? i.push(...n) : i = n.slice(0), n
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => E(e || 0 === e ? e : S), this.getVelocity = () => R.getVelocity(-S), mr.scrollerProxy(n, {
            scrollTop: M,
            scrollHeight: () => Y() && dr.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!I,
            content: a,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: or.innerWidth,
              height: or.innerHeight
            })
          }), mr.defaults({
            scroller: n
          });
          let $ = mr.getAll().filter((e => e.scroller === or || e.scroller === n));
          $.forEach((e => e.revert(!0, !0))), t = mr.create({
            animation: rr.fromTo(_, {
              y: 0
            }, {
              y: () => -Y(),
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function() {
                if (this._dur) {
                  let e = f;
                  e && (F(t), _.y = S), E(_.y, e), N(), u && !c && u(y)
                }
              }
            }),
            onRefreshInit: e => {
              if (xr.isRefreshing) return;
              if (xr.isRefreshing = !0, o) {
                let e = mr.getAll().filter((e => !!e.pin));
                o.forEach((a => {
                  a.vars.pinnedContainer || e.forEach((e => {
                    if (e.pin.contains(a.trigger)) {
                      let n = a.vars;
                      n.pinnedContainer = e.pin, a.vars = null, a.init(n, a.animation)
                    }
                  }))
                }))
              }
              let a = e.getTween();
              g = a && a._end > a._dp._time, m = S, _.y = 0, I && (1 === mr.isTouch && (n.style.position = "absolute"), n.scrollTop = 0, 1 === mr.isTouch && (n.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, Y() / H), g || F(e), _.y = -B() * H, E(_.y), D || e.animation.progress(rr.utils.clamp(0, 1, m / H / -e.end)), g && (e.progress -= .001, e.update()), xr.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: or,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => Y() / H,
            onScrubComplete: () => {
              R.reset(), C && C(this)
            },
            scrub: I || !0
          }), this.smooth = function(a) {
            return arguments.length && (I = a || 0, H = I && +e.speed || 1, t.scrubDuration(a)), t.getTween() ? t.getTween().duration() : 0
          }, t.getTween() && (t.getTween().vars.ease = e.ease || fr), this.scrollTrigger = t, e.effects && this.effects(!0 === e.effects ? "[data-" + k + "speed], [data-" + k + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), $.forEach((e => {
            e.vars.scroller = n, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, a) {
            return arguments.length ? (!!c !== e && (e ? (t.getTween() && t.getTween().pause(), B(-S / H), R.reset(), A = mr.normalizeScroll(), A && A.disable(), c = mr.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => M(-S)
            }), c.nested = pr(sr, "wheel,touch,scroll", !0, !1 !== a)) : (c.nested.kill(), c.kill(), c = 0, A && A.enable(), t.progress = (-S / H - t.start) / (t.end - t.start), F(t))), this) : !!c
          }, this.kill = this.revert = () => {
            this.paused(!1), F(t), t.kill();
            let e = (o || []).concat(i || []),
              r = e.length;
            for (; r--;) e[r].kill();
            mr.scrollerProxy(n), mr.removeEventListener("killAll", J), mr.removeEventListener("refresh", W), n.style.cssText = d, a.style.cssText = l;
            let c = mr.defaults({});
            c && c.scroller === n && mr.defaults({
              scroller: or
            }), this.normalizer && mr.normalizeScroll(!1), clearInterval(s), gr = null, j && j.disconnect(), dr.style.removeProperty("height"), or.removeEventListener("focusin", P)
          }, this.refresh = (e, a) => t.refresh(e, a), w && (this.normalizer = mr.normalizeScroll(!0 === w ? {
            debounce: !0,
            content: !I && a
          } : w)), mr.config(e), "overscrollBehavior" in or.getComputedStyle(dr) && rr.set([dr, sr], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in or.getComputedStyle(dr) && rr.set([dr, sr], {
            scrollBehavior: "auto"
          }), or.addEventListener("focusin", P), s = setInterval(N, 250), "loading" === ir.readyState || requestAnimationFrame((() => mr.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return tr || (rr = e || vr(), br() && window.document && (or = window, ir = document, sr = ir.documentElement, dr = ir.body), rr && (cr = rr.utils.toArray, Ar = rr.utils.clamp, fr = rr.parseEase("expo"), ur = rr.core.context || function() {}, mr = rr.core.globals().ScrollTrigger, rr.core.globals("ScrollSmoother", xr), dr && mr && (Cr = rr.delayedCall(.2, (() => mr.isRefreshing || gr && gr.refresh())).pause(), lr = [or, ir, sr, dr], hr = mr.core._getVelocityProp, pr = mr.core._inputObserver, xr.refresh = mr.refresh, tr = 1))), tr
        }
      }
      xr.version = "3.12.2", xr.create = e => gr && e && gr.content() === cr(e.content)[0] ? gr : new xr(e), xr.get = () => gr, vr() && rr.registerPlugin(xr);
      let yr, kr, Br, Ir, Hr, Sr, zr, Dr, Rr = () => "undefined" != typeof window,
        Nr = () => yr || Rr() && (yr = window.gsap) && yr.registerPlugin && yr,
        _r = e => "string" == typeof e,
        Tr = e => "function" == typeof e,
        Fr = (e, a) => {
          let n = "x" === a ? "Width" : "Height",
            r = "scroll" + n,
            t = "client" + n;
          return e === Br || e === Ir || e === Hr ? Math.max(Ir[r], Hr[r]) - (Br["inner" + n] || Ir[t] || Hr[t]) : e[r] - e["offset" + n]
        },
        Er = (e, a) => {
          let n = "scroll" + ("x" === a ? "Left" : "Top");
          return e === Br && (null != e.pageXOffset ? n = "page" + a.toUpperCase() + "Offset" : e = null != Ir[n] ? Ir : Hr), () => e[n]
        },
        Mr = (e, a) => {
          if (!(e = Sr(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
          };
          let n = e.getBoundingClientRect(),
            r = !a || a === Br || a === Hr,
            t = r ? {
              top: Ir.clientTop - (Br.pageYOffset || Ir.scrollTop || Hr.scrollTop || 0),
              left: Ir.clientLeft - (Br.pageXOffset || Ir.scrollLeft || Hr.scrollLeft || 0)
            } : a.getBoundingClientRect(),
            o = {
              x: n.left - t.left,
              y: n.top - t.top
            };
          return !r && a && (o.x += Er(a, "x")(), o.y += Er(a, "y")()), o
        },
        jr = (e, a, n, r, t) => isNaN(e) || "object" == typeof e ? _r(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + r - t : "max" === e ? Fr(a, n) - t : Math.min(Fr(a, n), Mr(e, a)[n] - t) : parseFloat(e) - t,
        Pr = () => {
          yr = Nr(), Rr() && yr && "undefined" != typeof document && document.body && (Br = window, Hr = document.body, Ir = document.documentElement, Sr = yr.utils.toArray, yr.config({
            autoKillThreshold: 7
          }), zr = yr.config(), kr = 1)
        };
      const Gr = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register(e) {
          yr = e, Pr()
        },
        init(e, a, n, r, t) {
          kr || Pr();
          let o = this,
            i = yr.getProperty(e, "scrollSnapType");
          o.isWin = e === Br, o.target = e, o.tween = n, a = ((e, a, n, r) => {
            if (Tr(e) && (e = e(a, n, r)), "object" != typeof e) return _r(e) && "max" !== e && "=" !== e.charAt(1) ? {
              x: e,
              y: e
            } : {
              y: e
            };
            if (e.nodeType) return {
              y: e,
              x: e
            }; {
              let t, o = {};
              for (t in e) o[t] = "onAutoKill" !== t && Tr(e[t]) ? e[t](a, n, r) : e[t];
              return o
            }
          })(a, r, e, t), o.vars = a, o.autoKill = !!a.autoKill, o.getX = Er(e, "x"), o.getY = Er(e, "y"), o.x = o.xPrev = o.getX(), o.y = o.yPrev = o.getY(), Dr || (Dr = yr.core.globals().ScrollTrigger), "smooth" === yr.getProperty(e, "scrollBehavior") && yr.set(e, {
            scrollBehavior: "auto"
          }), i && "none" !== i && (o.snap = 1, o.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != a.x ? (o.add(o, "x", o.x, jr(a.x, e, "x", o.x, a.offsetX || 0), r, t), o._props.push("scrollTo_x")) : o.skipX = 1, null != a.y ? (o.add(o, "y", o.y, jr(a.y, e, "y", o.y, a.offsetY || 0), r, t), o._props.push("scrollTo_y")) : o.skipY = 1
        },
        render(e, a) {
          let n, r, t, o, i, s = a._pt,
            {
              target: d,
              tween: l,
              autoKill: c,
              xPrev: A,
              yPrev: m,
              isWin: g,
              snap: f,
              snapInline: h
            } = a;
          for (; s;) s.r(e, s.d), s = s._next;
          n = g || !a.skipX ? a.getX() : A, r = g || !a.skipY ? a.getY() : m, t = r - m, o = n - A, i = zr.autoKillThreshold, a.x < 0 && (a.x = 0), a.y < 0 && (a.y = 0), c && (!a.skipX && (o > i || o < -i) && n < Fr(d, "x") && (a.skipX = 1), !a.skipY && (t > i || t < -i) && r < Fr(d, "y") && (a.skipY = 1), a.skipX && a.skipY && (l.kill(), a.vars.onAutoKill && a.vars.onAutoKill.apply(l, a.vars.onAutoKillParams || []))), g ? Br.scrollTo(a.skipX ? n : a.x, a.skipY ? r : a.y) : (a.skipY || (d.scrollTop = a.y), a.skipX || (d.scrollLeft = a.x)), !f || 1 !== e && 0 !== e || (r = d.scrollTop, n = d.scrollLeft, h ? d.style.scrollSnapType = h : d.style.removeProperty("scroll-snap-type"), d.scrollTop = r + 1, d.scrollLeft = n + 1, d.scrollTop = r, d.scrollLeft = n), a.xPrev = a.x, a.yPrev = a.y, Dr && Dr.update()
        },
        kill(e) {
          let a = "scrollTo" === e;
          (a || "scrollTo_x" === e) && (this.skipX = 1), (a || "scrollTo_y" === e) && (this.skipY = 1)
        }
      };
      Gr.max = Fr, Gr.getOffset = Mr, Gr.buildGetter = Er, Nr() && yr.registerPlugin(Gr);
      const Or = e => {
        const a = v(),
          n = (e, r) => r?.requiresAuth && !a?.nickname ? e : [...e, {
            ...r,
            ...r.children ? {
              children: r.children.reduce(n, [])
            } : []
          }];
        return (0, r.useMemo)((() => e.reduce(n, [])), [e, a?.nickname])
      };
      var Lr = n(20270),
        Wr = n(35449);
      const Jr = (e, a, n, r) => ({
          event: e || "nav_click",
          link_url: a,
          text: n,
          element_placement: `Global Nav > ${r}`
        }),
        Ur = () => {
          const e = b(),
            a = (() => {
              const e = (0, r.useContext)(u);
              if (void 0 === e) throw new Error("useNavigationLocale must be used within a Navigation Provider");
              return e.locale
            })(),
            n = v();
          return r => {
            if (!r.path) return r.domain;
            const o = [
                ["username", n?.nickname]
              ],
              i = ((e, a) => a.reduce(((e, a) => {
                let [n, r] = a;
                return e.replaceAll(`{${n}}`, r)
              }), e))(r.path, o),
              s = "www" === r.domain && "www" !== e.currentSite.site ? ((e, a) => {
                if (!a || a.iso === t.englishLocale.iso) return e;
                const n = a.subdomaincom;
                return "/" === e[0] ? n + e : `${n}/${e}`
              })(i, a) : i;
            return r.domain + s
          }
        },
        Qr = "nav-internal",
        Kr = "nav-external",
        qr = "nav-dropdown",
        Yr = "nav-no-link",
        $r = "games-menu",
        Vr = (0, t.defineMessages)({
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
        Xr = e => {
          let {
            children: a,
            location: n,
            className: s,
            isLegacy: d,
            label: l,
            type: c,
            target: A,
            gaEvent: m,
            gaText: g,
            gaBreadCrumb: f,
            dataTestId: h,
            onClick: u,
            ...C
          } = e;
          const b = (0, t.useIntl)(),
            {
              track: v
            } = (0, o.useGtmTrack)(),
            w = Ur(),
            {
              dispatch: x
            } = (0, i.useRockstarEventDispatcher)(),
            y = B(),
            k = (0, r.useMemo)((() => {
              const e = {};
              return "_blank" === A && (e["aria-label"] = b.formatMessage(Vr.nav_opens_in_new_window, {
                text: l
              }), e.rel = "noopener"), e
            }), [l, A]);
          if (!n && c === Yr && h) {
            const e = () => {
              v(Jr(m, "", g, f)), x(h)
            };
            return (0, p.jsx)("button", {
              type: "button",
              className: s,
              onClick: () => e(),
              "data-testid": h,
              ...C,
              ...k,
              children: a
            })
          }
          if (!n) return null;
          const I = w(n),
            H = Boolean(c === Kr || d || document.documentElement.classList.contains("legacyPage"));
          return (0, p.jsx)(Wr.A, {
            className: s,
            target: A,
            to: I,
            onClick: () => (u?.(), void v(Jr(m, I.toString(), g, f))),
            onNavigate: y,
            reloadDocument: H,
            "data-testid": h,
            ...C,
            ...k,
            children: a
          })
        };
      var Zr = n(59229),
        et = {};
      et.styleTagTransform = j(), et.setAttributes = T(), et.insert = N().bind(null, "head"), et.domAPI = D(), et.insertStyleElement = E(), S()(Zr.A, et);
      const at = Zr.A && Zr.A.locals ? Zr.A.locals : void 0,
        nt = e => {
          let {
            children: a,
            dataTestId: n,
            location: r,
            variant: t,
            gaEvent: o,
            gaText: i,
            target: s,
            onClick: d
          } = e;
          return (0, p.jsx)("div", {
            className: at.callToActionContainer,
            children: (0, p.jsx)(Xr, {
              className: [at.callToAction, t ? at[t] : ""].join(" "),
              dataTestId: n,
              location: r,
              gaEvent: o,
              gaText: i,
              gaBreadCrumb: i,
              onClick: d,
              target: s,
              children: a
            })
          })
        };
      var rt = n(63582);
      const tt = {
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
        ot = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        },
        it = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        st = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg",
        dt = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
        lt = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg",
        ct = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg";
      var At = n(82363),
        mt = {};
      mt.styleTagTransform = j(), mt.setAttributes = T(), mt.insert = N().bind(null, "head"), mt.domAPI = D(), mt.insertStyleElement = E(), S()(At.A, mt);
      const gt = At.A && At.A.locals ? At.A.locals : void 0,
        ft = e => {
          let {
            children: a,
            selected: n,
            ...r
          } = e;
          return (0, p.jsx)("button", {
            type: "button",
            className: [gt.pillButton, n ? gt.selected : ""].join(" "),
            ...r,
            children: a
          })
        };
      var ht = n(75971),
        pt = n(14907),
        ut = {};
      ut.styleTagTransform = j(), ut.setAttributes = T(), ut.insert = N().bind(null, "head"), ut.domAPI = D(), ut.insertStyleElement = E(), S()(pt.A, ut);
      const Ct = pt.A && pt.A.locals ? pt.A.locals : void 0,
        bt = {
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
        vt = e => {
          let {
            openerRef: a,
            isOpen: n,
            isMobile: t,
            children: o
          } = e;
          const [i, s] = (0, r.useState)(null), {
            styles: d,
            attributes: l,
            forceUpdate: c
          } = (0, ht.usePopper)(a, i, {
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
                altAxis: !t
              }
            }]
          });
          return (0, r.useEffect)((() => {
            Promise.resolve().then(c)
          }), [a, n, t]), (0, p.jsx)(rt.motion.div, {
            initial: "exit",
            animate: n ? "enter" : "exit",
            transition: tt.quickFade,
            variants: bt,
            className: [Ct.subMenu].join(" "),
            style: {
              ...d.popper
            },
            ref: s,
            ...l.popper,
            children: o
          })
        };
      var wt = n(82370),
        xt = {};
      xt.styleTagTransform = j(), xt.setAttributes = T(), xt.insert = N().bind(null, "head"), xt.domAPI = D(), xt.insertStyleElement = E(), S()(wt.A, xt);
      const yt = wt.A && wt.A.locals ? wt.A.locals : void 0,
        kt = e => {
          let {
            children: a,
            ...n
          } = e;
          return (0, p.jsx)("button", {
            type: "button",
            className: yt.subMenuButton,
            ...n,
            children: a
          })
        };
      var Bt = n(39014),
        It = {};
      It.styleTagTransform = j(), It.setAttributes = T(), It.insert = N().bind(null, "head"), It.domAPI = D(), It.insertStyleElement = E(), S()(Bt.A, It);
      const Ht = Bt.A && Bt.A.locals ? Bt.A.locals : void 0,
        St = e => {
          let {
            children: a,
            isOpen: n,
            onClose: r,
            visible: t
          } = e;
          return n ? (0, p.jsxs)("div", {
            className: [Ht.backgroundElevation].join(" "),
            onClick: r,
            children: [(0, p.jsx)("div", {
              className: [Ht.backgroundOverlay, t ? Ht.backgroundVisible : ""].join(" ")
            }), a]
          }) : null
        },
        zt = e => {
          let {
            target: a,
            selected: n,
            selectedTarget: o,
            onClick: i,
            isMobile: s,
            ...d
          } = e;
          const l = (0, t.useIntl)(),
            [c, A] = (0, r.useState)(!1),
            [m, g] = (0, r.useState)(null);
          return a.type === qr ? (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)("div", {
              ref: g,
              children: (0, p.jsxs)(ft, {
                "aria-label": l.formatMessage(Vr.search_target_aria_label, {
                  target: o && a?.targets?.indexOf(o) >= 0 ? o.text : a.text
                }),
                selected: n,
                onClick: () => A(!c),
                ...d,
                children: [o && a?.targets?.indexOf(o) >= 0 ? o.text : a.text, (0, p.jsx)("img", {
                  src: dt,
                  alt: ""
                })]
              }, a.gaText)
            }), (0, p.jsx)(St, {
              isOpen: c,
              onClose: () => A(!1),
              children: (0, p.jsx)(vt, {
                isOpen: c,
                openerRef: m,
                isMobile: s,
                children: a.targets?.map((e => (0, p.jsx)(kt, {
                  "aria-label": l.formatMessage(Vr.search_target_aria_label, {
                    target: e.text
                  }),
                  onClick: () => i(e),
                  children: e.text
                }, e.gaText)))
              })
            })]
          }) : (0, p.jsx)(ft, {
            "aria-label": l.formatMessage(Vr.search_target_aria_label, {
              target: a.text
            }),
            selected: n,
            onClick: () => i(a),
            ...d,
            children: a.text
          }, a.tab)
        };
      var Dt = n(64735),
        Rt = {};
      Rt.styleTagTransform = j(), Rt.setAttributes = T(), Rt.insert = N().bind(null, "head"), Rt.domAPI = D(), Rt.insertStyleElement = E(), S()(Dt.A, Rt);
      const Nt = Dt.A && Dt.A.locals ? Dt.A.locals : void 0;
      var _t = n(31867),
        Tt = {};
      Tt.styleTagTransform = j(), Tt.setAttributes = T(), Tt.insert = N().bind(null, "head"), Tt.domAPI = D(), Tt.insertStyleElement = E(), S()(_t.A, Tt);
      const Ft = _t.A && _t.A.locals ? _t.A.locals : void 0,
        Et = e => {
          let {
            children: a,
            isOpen: n,
            onMouseClick: t,
            onEscapeKey: o,
            onMouseAway: i,
            style: s
          } = e;
          const d = n ? [Ft.open] : [],
            l = e => {
              "Escape" === e.key && o?.()
            };
          return (0, r.useEffect)((() => (n ? window.addEventListener("keyup", l) : window.removeEventListener("keyup", l), () => window.removeEventListener("keyup", l))), [l, n]), n ? (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)("div", {
              className: [Ft.secondaryNavigationOverlay, ...d].join(" "),
              onClick: t,
              onMouseEnter: i,
              style: s
            }), a && (0, p.jsx)("div", {
              className: [Ft.secondaryNavigationSlide, ...d].join(" "),
              children: a
            })]
          }) : null
        },
        Mt = e => {
          let {
            handleSearch: a,
            handleSearchKeypress: n,
            handleSearchTargetSelect: o,
            setIsSearchOpen: i,
            setSearchQuery: s,
            isSearchOpen: d,
            searchQuery: l,
            selectedTarget: c,
            selectedTargetIndex: A,
            isSearchPage: m,
            searchError: g,
            maxSearchLength: f
          } = e;
          const h = (0, t.useIntl)(),
            u = x(),
            C = (0, r.useRef)(null),
            b = () => {
              i(), m || s(""), C?.current?.focus()
            },
            v = () => {
              m || i()
            };
          return (0, r.useEffect)((() => {
            d ? C?.current?.focus() : C?.current?.blur()
          }), [d]), (0, p.jsxs)("div", {
            children: [(0, p.jsx)("button", {
              className: Nt.searchToggleButton,
              type: "button",
              onClick: b,
              "data-testid": "searchToggle",
              children: (0, p.jsx)("img", {
                src: it,
                alt: h.formatMessage(d ? Vr.search_close_button : Vr.search_open_button)
              })
            }), (0, p.jsx)(rt.AnimatePresence, {
              children: d && (0, p.jsxs)("div", {
                children: [(0, p.jsx)(Et, {
                  isOpen: !m,
                  onEscapeKey: v,
                  onMouseClick: v
                }), (0, p.jsxs)(rt.motion.div, {
                  className: Nt.searchPopup,
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
                    transition: tt.springClose
                  },
                  transition: tt.springOpen,
                  "data-testid": "searchBar",
                  children: [(0, p.jsxs)(rt.motion.div, {
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
                    className: Nt.searchQuery,
                    children: [(0, p.jsx)("div", {
                      className: Nt.searchIcon,
                      children: (0, p.jsx)("button", {
                        type: "button",
                        onClick: a,
                        children: (0, p.jsx)("img", {
                          src: it,
                          alt: h.formatMessage(Vr.search_action)
                        })
                      })
                    }), (0, p.jsx)("div", {
                      className: Nt.searchField,
                      children: (0, p.jsx)("input", {
                        type: "textfield",
                        value: l,
                        onChange: e => s(e.target.value),
                        onKeyUp: n,
                        placeholder: h.formatMessage(Vr.search_placeholder),
                        ref: C,
                        enterKeyHint: "search",
                        maxLength: f
                      })
                    }), (0, p.jsx)("div", {
                      className: Nt.targets,
                      children: u.targets.map(((e, a) => (0, p.jsx)(zt, {
                        target: e,
                        onClick: e => o(e, a),
                        selected: A === a,
                        selectedTarget: c
                      }, e.tab)))
                    }), !m && (0, p.jsx)("div", {
                      className: Nt.closeIcon,
                      children: (0, p.jsx)("button", {
                        type: "button",
                        onClick: b,
                        children: (0, p.jsx)("img", {
                          src: st,
                          alt: h.formatMessage(Vr.search_close_button)
                        })
                      })
                    })]
                  }), g && (0, p.jsx)("div", {
                    className: Nt.errorMessage,
                    "aria-live": "polite",
                    children: g
                  })]
                })]
              })
            })]
          })
        };
      var jt = n(39715),
        Pt = {};
      Pt.styleTagTransform = j(), Pt.setAttributes = T(), Pt.insert = N().bind(null, "head"), Pt.domAPI = D(), Pt.insertStyleElement = E(), S()(jt.A, Pt);
      const Gt = jt.A && jt.A.locals ? jt.A.locals : void 0,
        Ot = e => {
          let {
            handleSearch: a,
            handleSearchKeypress: n,
            handleSearchTargetSelect: o,
            setIsSearchOpen: i,
            setSearchQuery: s,
            isSearchOpen: d,
            searchQuery: l,
            selectedTarget: c,
            selectedTargetIndex: A,
            isSearchPage: m,
            searchError: g,
            maxSearchLength: f
          } = e;
          const h = (0, t.useIntl)(),
            u = x(),
            C = (0, r.useRef)(null),
            [b, v] = (0, r.useState)(!1);
          return (0, r.useEffect)((() => {
            let e, a, n = !1;
            const r = r => {
                C && C.current && (r.preventDefault(), n = !0, e = r.pageX - C.current.offsetLeft, a = C.current.scrollLeft)
              },
              t = () => {
                n = !1
              },
              o = r => {
                if (n && (r.preventDefault(), C && C.current)) {
                  const n = r.pageX - C.current.offsetLeft - e;
                  C.current.scrollLeft = a - n
                }
              },
              i = () => {
                if (C && C.current) {
                  const e = C.current.scrollLeft;
                  v(e > 20)
                }
              };
            if (C && C.current) {
              const e = C.current;
              e.addEventListener("mousedown", r), e.addEventListener("mouseup", t), e.addEventListener("mouseleave", t), e.addEventListener("mousemove", o), e.addEventListener("scroll", i)
            }
            return () => {
              C && C.current && (C.current.removeEventListener("mousedown", r), C.current.removeEventListener("mouseup", t), C.current.removeEventListener("mouseleave", t), C.current.removeEventListener("mousemove", o), C.current.removeEventListener("scroll", i))
            }
          })), (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsxs)(rt.motion.div, {
              className: Gt.search,
              variants: ot,
              transition: tt.staggerFade,
              "data-testid": "searchBar",
              children: [(0, p.jsx)("button", {
                type: "button",
                onClick: () => d ? a() : i(!0),
                children: (0, p.jsx)("img", {
                  src: it,
                  alt: h.formatMessage(Vr.search_action)
                })
              }), (0, p.jsx)("input", {
                type: "text",
                value: l,
                onChange: e => s(e.target.value),
                onFocus: () => i(!0),
                onKeyUp: n,
                placeholder: h.formatMessage(Vr.search_placeholder),
                enterKeyHint: "search",
                maxLength: f
              }), d && !m && (0, p.jsx)("button", {
                type: "button",
                onClick: () => i(!1),
                children: (0, p.jsx)("img", {
                  src: st,
                  alt: h.formatMessage(Vr.search_close_button)
                })
              })]
            }), d && (0, p.jsxs)("div", {
              className: [Gt.targetsOuter, b ? Gt.hasScroll : ""].join(" "),
              children: [(0, p.jsx)("div", {
                className: Gt.targets,
                ref: C,
                children: u.targets.map(((e, a) => (0, p.jsx)(zt, {
                  target: e,
                  selected: A === a,
                  selectedTarget: c,
                  onClick: e => o(e, a),
                  isMobile: !0
                }, e.tab)))
              }), g && (0, p.jsx)("div", {
                className: Gt.errorMessage,
                "aria-live": "polite",
                children: g
              })]
            })]
          })
        };
      var Lt = n(16188),
        Wt = n.n(Lt);
      const Jt = "global-nav-search",
        Ut = e => {
          let {
            ...a
          } = e;
          const {
            windowWidth: n
          } = (0, i.useWindowResize)(), {
            pathname: o,
            search: s
          } = k(), d = x(), [l, c] = (0, r.useState)(""), [A, m] = w(), [g, f] = (0, r.useState)(0), [h, u] = (0, r.useState)(d.targets[0]), [C, b] = (0, r.useState)(""), v = (() => {
            const e = Ur(),
              a = B();
            return (n, r) => {
              const t = new URLSearchParams(r.params),
                o = r.path?.replace("{term}", n);
              t.forEach(((e, a) => {
                "{query}" === e && t.set(a, n)
              }));
              const i = t.toString() ? `?${t.toString()}` : "",
                s = {
                  domain: r.domain,
                  path: o + i
                },
                d = e(s);
              d ? s.domain ? window.location.href = d : a ? a(d) : window.history.pushState({}, "", d) : console.error(`No search url could be constructed from ${r.domain} and ${r.path}`)
            }
          })(), {
            isSearchPage: I,
            forceSearch: H
          } = y(), S = (0, t.useIntl)(), z = n < 1024, D = I && H || A === Jt, R = e => {
            if ("" === l) return !1;
            e.length > h.searchOptions.max && c(e.substring(0, h.searchOptions.max));
            const a = h.searchOptions.validationFunction?.(e);
            return e.split(/\s+/).every((e => e.length < h.searchOptions.min)) ? (b(S.formatMessage(Vr.nav_search_error_too_short, {
              count: h.searchOptions.min
            })), !1) : a ? (b(S.formatMessage(Vr.nav_search_error_invalid_chars, {
              invalidChars: [...new Set(a)].join(", ")
            })), !1) : (b(""), !0)
          }, N = () => {
            R(l) && v(l, h.location)
          }, _ = (e, a) => {
            let n;
            const r = new URLSearchParams(e);
            return new URLSearchParams(a).forEach(((e, a) => {
              const t = r.get(a);
              "{query}" === e && t ? (n = !0, c(t), R(t)) : n = t === e && !1 !== n
            })), n
          }, T = (e, a) => {
            if (!a) return !1;
            const n = e.split(/[/?]+/),
              r = a.split(/[/?]+/);
            if (r.every(((e, a) => e === n[a] || "{term}" === e || "" === e))) {
              const e = r.findIndex((e => "{term}" === e));
              return e && c(n[e]), !0
            }
            return !1
          };
          (0, r.useEffect)((() => {
            I || (f(0), u(d.targets[0]));
            const e = d.targets.findIndex((e => {
              if ("" === e.type && e.location) {
                if (e.location.path && o.startsWith(e.location.path) && _(s, e.location.params)) return u(e), !0;
                if (!e.location.params && T(o, e.location.path)) return u(e), !0
              }
              if ("nav-dropdown" === e.type) {
                const a = e.targets?.findIndex((e => {
                  if ("" === e.type) {
                    if (e.location.path && o.startsWith(e.location.path) && _(s, e.location.params)) return u(e), !0;
                    if (T(o, e.location.path)) return u(e), !0
                  }
                  return !1
                }));
                return !Wt().isNil(a) && a >= 0
              }
            }));
            f(e)
          }), [o, s, I]);
          const F = {
            handleSearch: N,
            handleSearchKeypress: e => {
              b(""), "Enter" === e.key && N()
            },
            handleSearchTargetSelect: (e, a) => {
              u(e), f(a), R(l) && v(l, e.location)
            },
            setIsSearchOpen: () => m(Jt),
            setSearchQuery: c,
            isSearchOpen: D,
            searchQuery: l,
            selectedTarget: h,
            selectedTargetIndex: g,
            isSearchPage: I,
            searchError: C,
            maxSearchLength: h.searchOptions.max
          };
          return z ? (0, p.jsx)(Ot, {
            ...F,
            ...a
          }) : (0, p.jsx)(Mt, {
            ...F
          })
        };
      var Qt = n(6958),
        Kt = {};
      Kt.styleTagTransform = j(), Kt.setAttributes = T(), Kt.insert = N().bind(null, "head"), Kt.domAPI = D(), Kt.insertStyleElement = E(), S()(Qt.A, Kt);
      const qt = Qt.A && Qt.A.locals ? Qt.A.locals : void 0,
        Yt = e => {
          let {
            cta: a,
            includeSearch: n = !0,
            isMobile: r
          } = e;
          const t = k(),
            o = B(),
            [, i] = w();
          return (0, p.jsxs)("div", {
            className: qt.actions,
            "data-testid": "actions",
            children: [a && (0, p.jsx)("div", {
              children: (0, p.jsx)(nt, {
                variant: a.variant,
                location: a.location,
                dataTestId: a.dataTestId,
                gaEvent: a.ga,
                gaText: a.text,
                target: a.target,
                children: a.text
              })
            }), n && (0, p.jsx)(Ut, {}), (0, p.jsxs)("div", {
              children: [(0, p.jsx)(Lr.MenuButton, {
                setOtherHeaderDropdowns: i
              }), !r && (0, p.jsx)(Lr.Menu, {
                location: t,
                onNavigate: o
              })]
            })]
          })
        };
      var $t = n(73343),
        Vt = {};
      Vt.styleTagTransform = j(), Vt.setAttributes = T(), Vt.insert = N().bind(null, "head"), Vt.domAPI = D(), Vt.insertStyleElement = E(), S()($t.A, Vt);
      const Xt = $t.A && $t.A.locals ? $t.A.locals : void 0,
        Zt = e => e.replace(/\?.*$/, ""),
        eo = (e, a) => e === a,
        ao = e => {
          const {
            pathname: a,
            hostname: n
          } = k();
          return e && e.length ? e.map((e => {
            let {
              domain: r,
              path: t,
              additionalPathMatches: o
            } = e;
            if (r !== n && "" !== r) return null;
            const i = Zt(t || ""),
              s = eo(i, Zt(a));
            let d;
            return o && (d = eo(o, Zt(a))), Boolean(s || d)
          })) : []
        },
        no = e => {
          let {
            text: a,
            type: n,
            location: r,
            isLegacy: t,
            gaText: o,
            gaBreadCrumb: i,
            dataTestId: s,
            target: d,
            ...l
          } = e;
          const [c] = ao(r ? [{
            domain: r?.domain,
            path: r?.path,
            end: "nav-internal" === n,
            additionalPathMatches: r?.additionalPathMatches
          }] : []), A = n === Kr;
          return (0, p.jsxs)(Xr, {
            className: [Xt.navigationItem, c ? Xt.active : ""].join(" "),
            location: r,
            isLegacy: t,
            type: n,
            target: d,
            gaText: o,
            gaBreadCrumb: i,
            dataTestId: s,
            label: a,
            ...l,
            children: [a, A && (0, p.jsx)("img", {
              alt: "",
              src: lt
            })]
          })
        };
      var ro = n(9581),
        to = {};
      to.styleTagTransform = j(), to.setAttributes = T(), to.insert = N().bind(null, "head"), to.domAPI = D(), to.insertStyleElement = E(), S()(ro.A, to);
      const oo = ro.A && ro.A.locals ? ro.A.locals : void 0,
        io = e => {
          let {
            text: a,
            isOpen: n,
            onClick: t,
            buttonRef: i,
            navChildren: s,
            gaText: d,
            gaBreadCrumb: l,
            dataTestId: c
          } = e;
          const {
            track: A
          } = (0, o.useGtmTrack)(), m = (0, r.useCallback)((() => {
            A(Jr(void 0, "", d, l)), t()
          }), [d, l, n, t]), g = (0, r.useMemo)((() => {
            if (!s) return;
            const e = (a, n) => {
              let r;
              return r = n.children ? n.children.reduce(e, []) : n?.location ? [n.location] : [], [...a, ...r]
            };
            return s.reduce(e, [])
          }), [s]), f = ao(g), h = f?.some(Boolean);
          return (0, p.jsx)("div", {
            className: oo.navigationDropdown,
            ref: i,
            children: (0, p.jsxs)("button", {
              className: [oo.navigationDropdownButton, h ? oo.active : "", n ? oo.open : ""].join(" "),
              type: "button",
              "data-testid": c || "navDropdown",
              onClick: m,
              children: [a, (0, p.jsx)("img", {
                src: dt,
                alt: ""
              })]
            })
          })
        };
      var so = n(92824),
        lo = n(8851),
        co = {};
      co.styleTagTransform = j(), co.setAttributes = T(), co.insert = N().bind(null, "head"), co.domAPI = D(), co.insertStyleElement = E(), S()(lo.A, co);
      const Ao = lo.A && lo.A.locals ? lo.A.locals : void 0,
        mo = e => {
          let {
            title: a,
            titleSlug: n,
            location: r,
            gaText: t,
            gaBreadCrumb: o,
            dataTestId: i,
            ...s
          } = e;
          return (0, p.jsx)("div", {
            className: Ao.gameCard,
            children: (0, p.jsx)(Xr, {
              location: r,
              gaText: t,
              gaBreadCrumb: o,
              dataTestId: i,
              ...s,
              children: (0, p.jsx)(so.A, {
                title: a,
                titleSlug: n
              })
            })
          }, a)
        };
      var go = n(78686),
        fo = {};
      fo.styleTagTransform = j(), fo.setAttributes = T(), fo.insert = N().bind(null, "head"), fo.domAPI = D(), fo.insertStyleElement = E(), S()(go.A, fo);
      const ho = go.A && go.A.locals ? go.A.locals : void 0,
        po = (e, a) => {
          const n = a.currentSite?.site === l.C.www ? "" : `https://${a.sites[l.C.www]}.rockstargames.com`;
          return {
            viewAllLocation: {
              domain: n,
              path: "/games"
            },
            games: [{
              titleSlug: "VI",
              text: e.formatMessage(Vr.games_menu_vi),
              gaText: "Grand Theft Auto VI",
              location: {
                domain: n,
                path: "/VI"
              },
              dataTestId: "VI"
            }, {
              titleSlug: "gta-v",
              text: e.formatMessage(Vr.games_menu_gta_v),
              gaText: "Grand Theft Auto V",
              location: {
                domain: n,
                path: "/gta-v"
              },
              dataTestId: "gtav"
            }, {
              titleSlug: "gta-online",
              text: e.formatMessage(Vr.games_menu_gta_online),
              gaText: "Grand Theft Auto Online",
              location: {
                domain: n,
                path: "/gta-online"
              },
              dataTestId: "gtao"
            }, {
              titleSlug: "reddeadredemption2",
              text: e.formatMessage(Vr.games_menu_rdr_2),
              gaText: "Red Dead Redemption 2",
              location: {
                domain: n,
                path: "/reddeadredemption2"
              },
              dataTestId: "rdr2"
            }, {
              titleSlug: "reddeadredemption",
              text: e.formatMessage(Vr.games_menu_rdr),
              gaText: "Red Dead Redemption",
              location: {
                domain: n,
                path: "/reddeadredemption"
              },
              dataTestId: "rdr"
            }]
          }
        },
        uo = () => {
          const e = (0, t.useIntl)(),
            a = b(),
            {
              viewAllLocation: n,
              games: r
            } = po(e, a);
          return (0, p.jsxs)("div", {
            className: ho.gamesMenu,
            "data-testid": "gamesMenu",
            children: [(0, p.jsxs)("div", {
              className: ho.titleBar,
              children: [(0, p.jsx)("div", {
                children: (0, p.jsx)("h2", {
                  className: ho.menuTitle,
                  children: e.formatMessage(Vr.games_menu_featured)
                })
              }), (0, p.jsx)("div", {
                children: (0, p.jsxs)(Xr, {
                  className: ho.viewAllLink,
                  gaText: Vr.games_menu_view_all.defaultMessage,
                  gaBreadCrumb: `Games > ${Vr.games_menu_view_all.defaultMessage}`,
                  location: n,
                  children: [e.formatMessage(Vr.games_menu_view_all), (0, p.jsx)("img", {
                    src: ct,
                    alt: e.formatMessage(Vr.nav_view_all_games)
                  })]
                })
              })]
            }), (0, p.jsx)("div", {
              className: ho.gameCards,
              children: r.map((e => (0, p.jsx)(mo, {
                title: e.text,
                titleSlug: e.titleSlug,
                gaText: e.gaText,
                gaBreadCrumb: `Games > ${e.gaText}`,
                location: e.location,
                dataTestId: e.dataTestId
              }, e.titleSlug)))
            })]
          })
        };
      var Co = n(51543),
        bo = {};
      bo.styleTagTransform = j(), bo.setAttributes = T(), bo.insert = N().bind(null, "head"), bo.domAPI = D(), bo.insertStyleElement = E(), S()(Co.A, bo);
      const vo = Co.A && Co.A.locals ? Co.A.locals : void 0;
      var wo = n(82853),
        xo = {};
      xo.styleTagTransform = j(), xo.setAttributes = T(), xo.insert = N().bind(null, "head"), xo.domAPI = D(), xo.insertStyleElement = E(), S()(wo.A, xo);
      const yo = wo.A && wo.A.locals ? wo.A.locals : void 0;
      var ko = n(77482),
        Bo = {};
      Bo.styleTagTransform = j(), Bo.setAttributes = T(), Bo.insert = N().bind(null, "head"), Bo.domAPI = D(), Bo.insertStyleElement = E(), S()(ko.A, Bo);
      const Io = ko.A && ko.A.locals ? ko.A.locals : void 0,
        Ho = e => [Io.navigationLink, e ? Io.active : ""].join(" "),
        So = e => {
          let {
            text: a,
            type: n,
            location: r,
            className: t,
            isLegacy: o,
            target: i,
            nested: s,
            gaText: d,
            gaBreadCrumb: l,
            dataTestId: c,
            ...A
          } = e;
          const m = n === Kr,
            g = r ? [{
              ...r,
              end: n === Qr
            }] : [],
            [f] = ao(g);
          return (0, p.jsxs)(Xr, {
            className: [Ho(Boolean(f)), yo.subMenuItem, s ? yo.nested : "", t].join(" "),
            location: r,
            isLegacy: o,
            type: n,
            target: i,
            gaText: d,
            gaBreadCrumb: l,
            dataTestId: c,
            label: a,
            "data-ui-name": "sub-menu-item",
            ...A,
            children: [a, m && (0, p.jsx)("img", {
              alt: "",
              src: lt
            })]
          })
        },
        zo = "nav-dropdown",
        Do = e => {
          let {
            text: a,
            navChildren: n,
            gaText: t,
            gaBreadCrumb: i,
            nested: s,
            dataTestId: d,
            subMenuId: l,
            toggleOpen: c,
            isOpen: A,
            ...m
          } = e;
          const [g] = w(), {
            track: f
          } = (0, o.useGtmTrack)(), h = (0, r.useRef)(null), [u, C] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            null === g && c(null)
          }), [g]);
          const b = e => {
              f(Jr(void 0, "", t, i)), c(e ? l : null)
            },
            v = e => {
              "ArrowLeft" === e.code && (b(!1), h?.current?.focus())
            };
          return (0, p.jsxs)("div", {
            className: [vo.subMenuDropdownContainer, s ? vo.nested : ""].join(" "),
            ...m,
            "data-ui-name": "sub-menu-item",
            children: [(0, p.jsxs)("button", {
              type: "button",
              className: [vo.subMenuDropdownButton, s ? vo.nested : "", A ? vo.open : ""].join(" "),
              onClick: () => b(!A),
              onKeyUp: e => {
                "Enter" === e.code && b(!0), "ArrowRight" === e.code && b(!0), "ArrowLeft" === e.code && b(!1)
              },
              ref: h,
              "data-testid": d,
              children: [a, (0, p.jsx)("img", {
                src: dt,
                className: vo.openChevron,
                alt: ""
              })]
            }), (0, p.jsx)(rt.AnimatePresence, {
              children: A && n && (0, p.jsx)(rt.motion.div, {
                className: vo.subMenuDropdownItems,
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
                transition: tt.springOpen,
                children: n.map((e => e.type === zo ? (0, p.jsx)(Do, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.gaText,
                  gaBreadCrumb: `${i} > ${e.gaText}`,
                  nested: !0,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: u === `desktop-submenu-${e.gaText}`,
                  toggleOpen: C
                }, e.gaText) : (0, p.jsx)(So, {
                  text: e.text,
                  type: e.type,
                  location: e.location,
                  gaText: e.gaText,
                  gaBreadCrumb: `${i} > ${e.gaText}`,
                  onKeyUp: v,
                  isLegacy: e.isLegacy,
                  dataTestId: e.dataTestId,
                  nested: !0
                }, e.gaText)))
              })
            })]
          })
        },
        Ro = Do,
        No = {
          show: {
            height: "auto",
            zIndex: 101,
            display: "block",
            visibility: "visible",
            transition: {
              ...tt.springOpen
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
              ...tt.springClose
            }
          }
        },
        _o = e => {
          let {
            text: a,
            gaText: n,
            type: t,
            location: o,
            navChildren: i,
            isLegacy: s,
            target: d,
            gaBreadCrumb: l,
            navKey: c,
            isHidden: A,
            dataTestId: m,
            ...g
          } = e;
          const [f, h] = (0, r.useState)(null), u = k(), [C, b] = w(), [v, x] = (0, r.useState)(null), y = C === c, B = {
            ...y ? {
              visibility: "visible",
              display: "block"
            } : {
              visibility: "hidden",
              display: "none"
            }
          };
          (0, r.useEffect)((() => {
            b(null)
          }), [u.pathname, u.key]);
          const I = l ? `${l} > ${n}` : n ?? a;
          return t === qr ? (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(io, {
              text: a,
              gaText: n,
              gaBreadCrumb: I,
              onClick: () => b(c),
              isOpen: y,
              buttonRef: A ? void 0 : h,
              navChildren: i,
              dataTestId: m,
              ...g
            }), !A && (0, p.jsxs)(p.Fragment, {
              children: [(0, p.jsx)(Et, {
                isOpen: y,
                onMouseClick: () => b(null),
                onEscapeKey: () => b(null)
              }), (0, p.jsx)(vt, {
                isOpen: y,
                openerRef: f,
                children: i?.map((e => e.type === qr ? (0, p.jsx)(Ro, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.text,
                  gaBreadCrumb: `${I} > ${e.gaText}`,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: v === `desktop-submenu-${e.gaText}`,
                  toggleOpen: x
                }, `desktop-submenu-${e.text}`) : (0, p.jsx)(So, {
                  location: e.location,
                  text: e.text,
                  type: e.type,
                  isLegacy: e.isLegacy,
                  target: e.target,
                  gaText: e.gaText,
                  gaBreadCrumb: `${I} > ${e.gaText}`,
                  dataTestId: e.dataTestId
                }, e.text)))
              })]
            })]
          }) : t === $r ? (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(io, {
              text: a,
              gaText: a,
              gaBreadCrumb: l ? `${l} > ${n}` : n,
              onClick: () => b(c),
              isOpen: y,
              dataTestId: m,
              ...g
            }), !A && (0, p.jsx)(Et, {
              isOpen: !0,
              onMouseClick: () => b(null),
              onEscapeKey: () => b(null),
              style: B,
              children: (0, p.jsx)(rt.motion.div, {
                initial: "hidden",
                animate: y ? "show" : "hidden",
                variants: No,
                children: (0, p.jsx)(uo, {})
              })
            })]
          }) : o || t === Yr ? (0, p.jsx)(no, {
            location: o,
            type: t,
            text: a,
            isLegacy: s,
            target: d,
            gaText: n,
            gaBreadCrumb: l ? `${l} > ${n}` : n,
            dataTestId: m,
            ...g
          }) : null
        };
      var To = n(95768),
        Fo = {};
      Fo.styleTagTransform = j(), Fo.setAttributes = T(), Fo.insert = N().bind(null, "head"), Fo.domAPI = D(), Fo.insertStyleElement = E(), S()(To.A, Fo);
      const Eo = To.A && To.A.locals ? To.A.locals : void 0,
        Mo = e => {
          let {
            links: a
          } = e;
          const n = (0, t.useIntl)(),
            [o, i] = (0, r.useState)(a),
            [s, d] = (0, r.useState)([]),
            l = (0, r.useRef)(null),
            c = (0, r.useRef)(null),
            A = (0, r.useCallback)((() => {
              const e = c.current;
              if (!e || !a.length) return;
              const {
                children: n
              } = e;
              let r = 0;
              const t = Array.from(n).map(((e, a) => {
                  const n = e.getBoundingClientRect().top;
                  return 0 === a && (r = n), n
                })),
                o = t.filter((e => e !== r)).length,
                s = t.findIndex((e => e > r));
              let l = s;
              s > 0 && (l = s - 1), o ? (i(a.slice(0, l)), d(a.slice(l))) : (i(a), d([]))
            }), [a, c?.current]);
          (0, r.useEffect)((() => {
            const e = new ResizeObserver(A);
            return c?.current && e.observe(c.current), () => {
              c?.current && e.unobserve(c.current)
            }
          }), [a, c?.current]);
          const m = (0, r.useMemo)((() => (0, p.jsx)("ul", {
            ref: c,
            className: Eo.ulHidden,
            "aria-hidden": "true",
            children: a.map((e => (0, p.jsx)("li", {
              children: (0, p.jsx)(_o, {
                text: e.text,
                type: e.type,
                target: e.target,
                location: e.location,
                navChildren: e.children,
                navKey: e.text,
                isHidden: !0
              })
            }, `desktop-main-dropdown-hidden-${e.text}`)))
          })), [a]);
          return 0 === a.length ? null : (0, p.jsxs)("nav", {
            className: Eo.navigation,
            children: [(0, p.jsxs)("ul", {
              ref: l,
              children: [o.map((e => (0, p.jsx)("li", {
                children: (0, p.jsx)(_o, {
                  text: e.text,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  navKey: e.text,
                  dataTestId: e?.dataTestId
                })
              }, e.text))), s.length > 0 && (0, p.jsx)("li", {
                children: (0, p.jsx)(_o, {
                  text: n.formatMessage(Vr.nav_more_dropdown),
                  type: qr,
                  navChildren: s,
                  navKey: "more",
                  dataTestId: "navMore"
                })
              })]
            }), m]
          })
        };
      var jo = n(87704),
        Po = {};
      Po.styleTagTransform = j(), Po.setAttributes = T(), Po.insert = N().bind(null, "head"), Po.domAPI = D(), Po.insertStyleElement = E(), S()(jo.A, Po);
      const Go = jo.A && jo.A.locals ? jo.A.locals : void 0,
        Oo = () => (0, p.jsx)("div", {
          className: Go.rockstarLogo
        });
      var Lo = n(62323),
        Wo = {};
      Wo.styleTagTransform = j(), Wo.setAttributes = T(), Wo.insert = N().bind(null, "head"), Wo.domAPI = D(), Wo.insertStyleElement = E(), S()(Lo.A, Wo);
      const Jo = Lo.A && Lo.A.locals ? Lo.A.locals : void 0,
        Uo = () => {
          const {
            windowWidth: e
          } = (0, i.useWindowResize)(), a = b(), n = a.currentSite?.site === l.C.www ? "" : `https://${a.sites[l.C.www]}.rockstargames.com`, r = e < 1024, o = {
            hidden: {
              y: "100%",
              transition: tt.hamburgerClose
            },
            show: {
              y: 0,
              transition: {
                ...tt.hamburgerOpen,
                staggerChildren: .1,
                delayChildren: .6 * tt.hamburgerOpen.duration
              }
            }
          }, s = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: tt.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: tt.staggerFade
            }
          }, d = (0, t.useIntl)(), c = {
            home: {
              domain: n,
              path: "/"
            },
            games: {
              domain: n,
              path: "/games"
            },
            newswire: {
              domain: n,
              path: "/newswire"
            }
          }, A = "Quick Access";
          return (0, p.jsxs)(rt.motion.ul, {
            className: Jo.quickAccess,
            variants: r ? o : ot,
            initial: "hidden",
            animate: "show",
            exit: "hidden",
            transition: r ? null : tt.quickFade,
            children: [(0, p.jsx)(rt.motion.li, {
              variants: r ? s : null,
              children: (0, p.jsxs)(Xr, {
                location: c.home,
                className: [Ho(), Jo.link].join(" "),
                gaText: Vr.nav_quick_access_home.defaultMessage,
                gaBreadCrumb: `${A} > ${Vr.nav_quick_access_home.defaultMessage}`,
                children: [(0, p.jsx)("img", {
                  alt: "Rockstar Games",
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg"
                }), (0, p.jsx)(t.FormattedMessage, {
                  ...Vr.nav_quick_access_home
                })]
              })
            }), (0, p.jsx)(rt.motion.li, {
              variants: r ? s : null,
              children: (0, p.jsxs)(Xr, {
                location: c.games,
                className: [Ho(), Jo.link].join(" "),
                gaText: Vr.nav_quick_access_games.defaultMessage,
                gaBreadCrumb: `${A} > ${Vr.nav_quick_access_games.defaultMessage}`,
                children: [(0, p.jsx)("img", {
                  alt: d.formatMessage(Vr.nav_quick_access_games),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg"
                }), (0, p.jsx)(t.FormattedMessage, {
                  ...Vr.nav_quick_access_games
                })]
              })
            }), (0, p.jsx)(rt.motion.li, {
              variants: r ? s : null,
              children: (0, p.jsxs)(Xr, {
                location: c.newswire,
                className: [Ho(), Jo.link].join(" "),
                gaText: Vr.nav_quick_access_newswire.defaultMessage,
                gaBreadCrumb: `${A} > ${Vr.nav_quick_access_newswire.defaultMessage}`,
                children: [(0, p.jsx)("img", {
                  alt: d.formatMessage(Vr.nav_quick_access_newswire),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg"
                }), (0, p.jsx)(t.FormattedMessage, {
                  ...Vr.nav_quick_access_newswire
                })]
              })
            })]
          })
        };
      var Qo = n(72733),
        Ko = {};
      Ko.styleTagTransform = j(), Ko.setAttributes = T(), Ko.insert = N().bind(null, "head"), Ko.domAPI = D(), Ko.insertStyleElement = E(), S()(Qo.A, Ko);
      const qo = Qo.A && Qo.A.locals ? Qo.A.locals : void 0,
        Yo = "quick-access-menu",
        $o = e => {
          let {
            site: a,
            brand: n,
            hideRockstarBrand: o,
            hideQuickAccess: s
          } = e;
          const d = (0, t.useIntl)(),
            {
              windowWidth: c
            } = (0, i.useWindowResize)(),
            [A, m] = (0, r.useState)(null),
            [g, f] = (0, r.useState)(null),
            [h, u] = w(),
            C = b(),
            v = h === Yo,
            x = s ? Vr.nav_rockstargames_home : Vr.nav_rockstargames_logo,
            y = {
              domain: C.currentSite?.site === l.C.www ? "" : `https://${C.sites[l.C.www]}.rockstargames.com`,
              path: "/"
            },
            k = c < 1024,
            {
              styles: B,
              attributes: I,
              forceUpdate: H
            } = (0, ht.usePopper)(A, g, {
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
            Promise.resolve().then(H)
          }), [A, v]), (0, p.jsxs)("div", {
            className: qo.siteTitle,
            children: [!o && (0, p.jsxs)("div", {
              className: qo.rockstar,
              children: [(k || s) && (0, p.jsx)(Xr, {
                location: y,
                gaText: Vr.nav_rockstargames_home.defaultMessage,
                gaBreadCrumb: Vr.nav_rockstargames_home.defaultMessage,
                "aria-label": d.formatMessage(x),
                children: (0, p.jsx)(Oo, {})
              }), !k && !s && (0, p.jsx)("button", {
                type: "button",
                className: qo.quickAccessButton,
                onClick: () => u(Yo),
                "aria-label": d.formatMessage(x),
                ref: m,
                children: (0, p.jsx)(Oo, {})
              }), v && !s && (0, p.jsxs)(p.Fragment, {
                children: [(0, p.jsx)(Et, {
                  isOpen: v,
                  onEscapeKey: () => u(null),
                  onMouseClick: () => u(null)
                }), (0, p.jsx)("div", {
                  className: qo.quickAccessContainer,
                  style: {
                    ...B.popper
                  },
                  ref: f,
                  ...I.popper,
                  children: (0, p.jsx)(Uo, {})
                })]
              })]
            }), n && (0, p.jsxs)(p.Fragment, {
              children: [!o && (0, p.jsx)("div", {
                className: qo.divider
              }), (0, p.jsx)("div", {
                className: qo.brand,
                children: (0, p.jsx)("img", {
                  className: qo.brandLogo,
                  "data-brand": a,
                  alt: a,
                  src: n
                })
              })]
            })]
          })
        };
      var Vo = n(94595),
        Xo = {};
      Xo.styleTagTransform = j(), Xo.setAttributes = T(), Xo.insert = N().bind(null, "head"), Xo.domAPI = D(), Xo.insertStyleElement = E(), S()(Vo.A, Xo);
      const Zo = Vo.A && Vo.A.locals ? Vo.A.locals : void 0,
        ei = e => {
          let {
            headerRef: a,
            data: n
          } = e;
          const t = (0, r.useMemo)((() => {
              const {
                currentSite: e
              } = (0, l.A)();
              if (e?.site === l.C.socialClub) return {
                zIndex: 8600
              }
            }), []),
            o = Or(n.links);
          return (0, p.jsxs)("header", {
            ref: a,
            className: [Zo.header, Zo.fixed].join(" "),
            style: t,
            children: [(0, p.jsx)("div", {
              className: Zo.title,
              children: (0, p.jsx)($o, {
                site: n.site,
                brand: n.brand,
                hideQuickAccess: n.hideQuickAccess || !1
              })
            }), (0, p.jsx)("div", {
              className: Zo.fluid,
              children: (0, p.jsx)(Mo, {
                links: o
              })
            }), (0, p.jsx)("div", {
              className: Zo.fixed,
              children: (0, p.jsx)(Yt, {
                cta: n.cta,
                includeSearch: !n.hideSearch
              })
            })]
          })
        };
      var ai = n(58865),
        ni = {};
      ni.styleTagTransform = j(), ni.setAttributes = T(), ni.insert = N().bind(null, "head"), ni.domAPI = D(), ni.insertStyleElement = E(), S()(ai.A, ni);
      const ri = ai.A && ai.A.locals ? ai.A.locals : void 0,
        ti = e => {
          let {
            toggle: a,
            isMenuOpen: n
          } = e;
          const {
            track: r
          } = (0, o.useGtmTrack)();
          return (0, p.jsx)("div", {
            className: [ri.hamburger, n ? ri.open : ""].join(" "),
            children: (0, p.jsxs)("button", {
              onClick: () => {
                r({
                  event: n ? "nav_close" : "nav_open",
                  element_placement: "Global Nav"
                }), a?.()
              },
              title: "Open Menu",
              type: "button",
              children: [(0, p.jsx)("span", {}), (0, p.jsx)("span", {}), (0, p.jsx)("span", {})]
            })
          })
        };
      var oi = n(84481),
        ii = {};
      ii.styleTagTransform = j(), ii.setAttributes = T(), ii.insert = N().bind(null, "head"), ii.domAPI = D(), ii.insertStyleElement = E(), S()(oi.A, ii);
      const si = oi.A && oi.A.locals ? oi.A.locals : void 0;
      var di = n(11040),
        li = n(19836),
        ci = {};
      ci.styleTagTransform = j(), ci.setAttributes = T(), ci.insert = N().bind(null, "head"), ci.domAPI = D(), ci.insertStyleElement = E(), S()(li.A, ci);
      const Ai = li.A && li.A.locals ? li.A.locals : void 0,
        mi = e => {
          let {
            text: a
          } = e;
          const {
            isMobile: n
          } = (0, i.useWindowResize)(), o = (0, t.useIntl)(), s = b(), {
            viewAllLocation: d,
            games: l
          } = po(o, s), [c, A] = (0, r.useState)(2.5);
          return (0, r.useEffect)((() => {
            A(n ? 2.5 : 3.5)
          }), [n]), (0, p.jsxs)("div", {
            className: Ai.gamesMenuMobile,
            "data-testid": "gamesMenu",
            children: [(0, p.jsxs)("div", {
              className: Ai.header,
              children: [(0, p.jsx)("h2", {
                children: a
              }), (0, p.jsxs)(Xr, {
                gaText: Vr.nav_view_all_games.defaultMessage,
                gaBreadCrumb: `Games > ${Vr.nav_view_all_games.defaultMessage}`,
                location: d,
                className: Io.navigationLink,
                children: [(0, p.jsx)(t.FormattedMessage, {
                  ...Vr.nav_view_all_games
                }), (0, p.jsx)("img", {
                  src: ct,
                  alt: o.formatMessage(Vr.nav_view_all_games)
                })]
              })]
            }), (0, p.jsx)(di.RC, {
              className: Ai.slider,
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: c,
              speed: 700,
              children: l.map((e => (0, p.jsx)(di.qr, {
                className: Ai.slide,
                children: (0, p.jsx)(mo, {
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
        };
      var gi = n(15801),
        fi = {};
      fi.styleTagTransform = j(), fi.setAttributes = T(), fi.insert = N().bind(null, "head"), fi.domAPI = D(), fi.insertStyleElement = E(), S()(gi.A, fi);
      const hi = gi.A && gi.A.locals ? gi.A.locals : void 0,
        pi = e => {
          let {
            children: a,
            isOpen: n
          } = e;
          return (0, p.jsx)(rt.AnimatePresence, {
            children: n && (0, p.jsx)(rt.motion.div, {
              className: hi.subMenu,
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
              transition: tt.springOpen,
              children: a
            })
          })
        };
      var ui = n(59303),
        Ci = {};
      Ci.styleTagTransform = j(), Ci.setAttributes = T(), Ci.insert = N().bind(null, "head"), Ci.domAPI = D(), Ci.insertStyleElement = E(), S()(ui.A, Ci);
      const bi = ui.A && ui.A.locals ? ui.A.locals : void 0;
      var vi = n(56257),
        wi = {};
      wi.styleTagTransform = j(), wi.setAttributes = T(), wi.insert = N().bind(null, "head"), wi.domAPI = D(), wi.insertStyleElement = E(), S()(vi.A, wi);
      const xi = vi.A && vi.A.locals ? vi.A.locals : void 0,
        yi = e => {
          let {
            text: a,
            dataTestId: n,
            type: r,
            target: t,
            location: o,
            className: i,
            gaText: s,
            gaBreadCrumb: d,
            isLegacy: l,
            onClick: c,
            ...A
          } = e;
          const [m] = ao(o ? [o] : []), g = r === Kr;
          return (0, p.jsxs)(Xr, {
            className: [Ho(Boolean(m)), xi.subMenuItem, i].join(" "),
            dataTestId: n,
            location: o,
            type: r,
            target: t,
            gaText: s,
            gaBreadCrumb: d,
            onClick: c,
            isLegacy: l,
            label: a,
            ...A,
            children: [a, g && (0, p.jsx)("img", {
              alt: "",
              src: lt
            })]
          })
        },
        ki = e => {
          let {
            text: a,
            dataTestId: n,
            navChildren: r,
            gaText: t,
            gaBreadCrumb: i,
            onClick: s,
            isSubMenuOpen: d,
            toggleMenuOpen: l,
            ...c
          } = e;
          const {
            track: A
          } = (0, o.useGtmTrack)();
          return (0, p.jsxs)("div", {
            className: bi.subMenuDropdownContainer,
            ...c,
            children: [(0, p.jsxs)("button", {
              type: "button",
              "data-testid": n,
              className: [bi.subMenuDropdownButton, d ? bi.open : ""].join(" "),
              onClick: () => {
                A(Jr(void 0, "", t, i)), l()
              },
              children: [a, (0, p.jsx)("img", {
                src: dt,
                alt: ""
              })]
            }), (0, p.jsx)(rt.AnimatePresence, {
              children: d && (0, p.jsx)(rt.motion.div, {
                className: bi.subMenuDropdownItems,
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
                transition: tt.springOpen,
                children: r.map((e => (0, p.jsx)(yi, {
                  text: e.text,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  location: e.location,
                  gaText: e.gaText,
                  gaBreadCrumb: `${i} > ${e.gaText}`,
                  onClick: s,
                  isLegacy: e.isLegacy
                }, e.gaText)))
              })
            })]
          })
        };
      var Bi = n(27869),
        Ii = {};
      Ii.styleTagTransform = j(), Ii.setAttributes = T(), Ii.insert = N().bind(null, "head"), Ii.domAPI = D(), Ii.insertStyleElement = E(), S()(Bi.A, Ii);
      const Hi = Bi.A && Bi.A.locals ? Bi.A.locals : void 0,
        Si = e => {
          let {
            dataTestId: a,
            type: n,
            target: t,
            location: o,
            navChildren: i,
            gaBreadCrumb: s,
            onClick: d,
            isOpen: l,
            setIsOpen: c,
            text: A,
            gaText: m,
            ...g
          } = e;
          const [f, h] = (0, r.useState)(null), [u] = ao(o ? [o] : []), C = s ? `${s} > ${m}` : m;
          if (n === qr) return (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(io, {
              text: A,
              dataTestId: a,
              gaText: m,
              gaBreadCrumb: C,
              onClick: () => c(),
              isOpen: l,
              ...g
            }), (0, p.jsx)(pi, {
              isOpen: l,
              children: i?.map(((e, a) => e.type === qr ? (0, p.jsx)(ki, {
                text: e.text,
                dataTestId: e.dataTestId,
                navChildren: e.children || [],
                gaText: e.gaText,
                gaBreadCrumb: `${C} > ${e.gaText}`,
                onClick: d,
                isSubMenuOpen: f === a,
                toggleMenuOpen: () => h(f !== a ? a : null)
              }, e.gaText) : (0, p.jsx)(yi, {
                location: e.location,
                dataTestId: e.dataTestId,
                target: e.target,
                text: e.text,
                type: e.type,
                gaText: e.gaText,
                gaBreadCrumb: `${C} > ${e.gaText}`,
                onClick: d
              }, e.gaText)))
            })]
          });
          if (n === $r) return (0, p.jsx)(mi, {
            text: A
          });
          const b = n === Kr;
          return (0, p.jsxs)(Xr, {
            location: o,
            dataTestId: a,
            type: n,
            target: t,
            gaText: m,
            gaBreadCrumb: C,
            className: [Ho(Boolean(u)), u ? Hi.active : ""].join(" "),
            label: A,
            ...g,
            children: [A, b && (0, p.jsx)("img", {
              alt: "",
              src: lt
            })]
          })
        };
      var zi = n(27230),
        Di = {};
      Di.styleTagTransform = j(), Di.setAttributes = T(), Di.insert = N().bind(null, "head"), Di.domAPI = D(), Di.insertStyleElement = E(), S()(zi.A, Di);
      const Ri = zi.A && zi.A.locals ? zi.A.locals : void 0,
        Ni = e => {
          let {
            links: a,
            cta: n,
            onClick: t
          } = e;
          const [o, i] = (0, r.useState)(null);
          return (0, p.jsx)("div", {
            className: Ri.navigation,
            children: (0, p.jsxs)("ul", {
              children: [a.map(((e, a) => (0, p.jsx)(rt.motion.li, {
                variants: ot,
                transition: tt.staggerFade,
                children: (0, p.jsx)(Si, {
                  text: e.text,
                  gaText: e.gaText,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  onClick: t,
                  isOpen: o === a,
                  setIsOpen: () => i(o !== a ? a : null)
                })
              }, e.text))), n && (0, p.jsx)(rt.motion.li, {
                className: Ri.cta,
                variants: ot,
                transition: tt.staggerFade,
                children: (0, p.jsx)(nt, {
                  variant: n.variant,
                  dataTestId: n.dataTestId,
                  location: n.location,
                  gaEvent: n.ga,
                  gaText: n.gaText,
                  onClick: t,
                  children: n.text
                })
              })]
            })
          })
        },
        _i = e => {
          let {
            headerRef: a,
            data: n
          } = e;
          const [t, o] = (0, r.useState)(!1), [s, d] = (0, r.useState)(!1), {
            isSearchPage: c,
            forceSearch: A
          } = y(), m = k(), {
            pathname: g,
            hash: f,
            search: h
          } = m, u = B(), {
            currentSite: C
          } = b(), v = Or(n.links), {
            setBodyIsLocked: w
          } = (0, i.useBodyScrollable)("HeaderMobile"), x = {
            show: {
              height: "auto",
              paddingBottom: t && n.brand ? "var(--global-navigation-height)" : "",
              transition: {
                ...tt.hamburgerOpen,
                staggerChildren: .05
              }
            },
            hidden: {
              height: 0,
              paddingBottom: 0,
              transition: tt.hamburgerClose
            }
          };
          return (0, r.useEffect)((() => {
            w(!!t)
          }), [t]), (0, r.useEffect)((() => {
            d(!1), o(!1)
          }), [g, f, h]), (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsxs)("header", {
              ref: a,
              className: si.header,
              children: [(0, p.jsx)(ti, {
                toggle: () => {
                  o(!t), d(!1)
                },
                isMenuOpen: t
              }), (0, p.jsx)("div", {
                className: si.title,
                children: (0, p.jsx)($o, {
                  site: n.site,
                  brand: n.brand,
                  hideRockstarBrand: !!n.brand
                })
              }), (0, p.jsx)("div", {
                children: (0, p.jsx)(Yt, {
                  includeSearch: !1,
                  isMobile: !0
                })
              })]
            }), (0, p.jsx)(rt.AnimatePresence, {
              children: (t || s || c && C?.site === l.C.www) && (0, p.jsxs)(p.Fragment, {
                children: [(0, p.jsxs)(rt.motion.nav, {
                  className: [si.nav, t && n.brand ? si.paddingBottom : "", t ? si.fullMenuOpen : ""].join(" "),
                  variants: x,
                  animate: "show",
                  initial: "hidden",
                  exit: "hidden",
                  children: [!n.hideSearch && (0, p.jsx)(Ut, {
                    isSearchOpen: s || c && A,
                    setIsSearchOpen: d
                  }), t && (0, p.jsx)("div", {
                    className: [si.navContainer, s ? si.searchOpen : ""].join(" "),
                    children: (0, p.jsx)(Ni, {
                      links: v,
                      cta: n.cta,
                      onClick: () => {
                        o(!1), d(!1)
                      }
                    })
                  })]
                }), t && n.brand && !n.hideQuickAccess && (0, p.jsx)(Uo, {}), !c && (0, p.jsx)(rt.motion.div, {
                  className: si.overlay,
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  exit: {
                    opacity: 0,
                    transition: tt.hamburgerClose
                  },
                  transition: tt.hamburgerOpen
                })]
              })
            }), (0, p.jsx)(Lr.Menu, {
              location: m,
              onNavigate: u
            })]
          })
        };
      n(79952);
      var Ti = n(48886),
        Fi = {};
      Fi.styleTagTransform = j(), Fi.setAttributes = T(), Fi.insert = N().bind(null, "head"), Fi.domAPI = D(), Fi.insertStyleElement = E(), S()(Ti.A, Fi);
      const Ei = Ti.A && Ti.A.locals ? Ti.A.locals : void 0,
        Mi = () => {
          const e = (0, r.useRef)(null),
            a = "__spatialNavigation__" in window ? window.__spatialNavigation__ : null;
          return (0, r.useEffect)((() => {
            a && a.enableExperimentalAPIs(!0)
          }), []), (0, p.jsx)("button", {
            ref: e,
            className: Ei.accessibility,
            onClick: () => {
              const n = document.querySelector("header");
              if (a && n) {
                const r = a.findCandidates(n, "down", {
                  mode: "all"
                });
                if (r !== n) {
                  const a = r.filter((a => {
                    if (n.contains(a) || e.current === a) return !1;
                    const r = a.getAttribute("tabindex"),
                      t = null === r || parseInt(r, 10) >= 0,
                      o = null !== a.offsetParent && "hidden" !== getComputedStyle(a).visibility;
                    return t && o
                  }));
                  a.length > 0 && a[0].focus()
                }
              }
            },
            children: (0, p.jsx)(t.FormattedMessage, {
              ...Vr.accessibility_skip_button
            })
          })
        };
      var ji = n(13527),
        Pi = {};
      Pi.styleTagTransform = j(), Pi.setAttributes = T(), Pi.insert = N().bind(null, "head"), Pi.domAPI = D(), Pi.insertStyleElement = E(), S()(ji.A, Pi);
      const Gi = ji.A && ji.A.locals ? ji.A.locals : void 0;
      J.gsap.registerPlugin(qn, xr, Gr);
      const Oi = () => {
          const e = (0, r.useRef)(null),
            a = (0, i.useScroll)(),
            n = a?.freezeUserShouldSeeMore,
            {
              windowWidth: t
            } = (0, i.useWindowResize)(),
            o = (() => {
              const e = (0, r.useContext)(u);
              if (void 0 === e) throw new Error("useNavigationData must be used within a Navigation Provider");
              return e.navigationData
            })(),
            {
              isSearchPage: s,
              forceSearch: d
            } = y(),
            l = t < 1024,
            [c, A] = (0, r.useState)(!1),
            m = (0, r.useRef)(null),
            g = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            A(!0)
          }), []);
          const f = (0, r.useCallback)((a => {
            if (n) return;
            const r = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
            a.direction === m?.current || r ? r && a?.animation?.pause() : -1 === a.direction ? a.animation?.reverse() : a.animation?.play();
            const t = "data-show-more-content";
            1 === a.direction ? (document.body.setAttribute(t, ""), e?.current?.setAttribute(t, "")) : (document.body.removeAttribute(t), e?.current?.removeAttribute(t)), m.current = a.direction
          }), [n]);
          (0, r.useEffect)((() => {
            const e = J.gsap.context((() => {
              g?.current && J.gsap.set(g.current, {
                paused: !0,
                scrollTrigger: {
                  onUpdate: e => {
                    f(e)
                  },
                  start: "140px",
                  end: 999999999
                }
              })
            }));
            return () => e.revert()
          }), [n, g?.current]);
          const h = (0, r.useMemo)((() => l ? (0, p.jsx)(_i, {
            headerRef: g,
            data: o
          }) : (0, p.jsx)(ei, {
            headerRef: g,
            data: o
          })), [o, l]);
          return (0, p.jsxs)("div", {
            className: Gi.globalNavigationRoot,
            "data-header-initialized": c,
            ref: e,
            children: [(0, p.jsx)(Mi, {}), (0, p.jsx)("div", {
              className: [Gi.globalNavigationSpacer, s && d ? Gi.globalNavigationSearchSpacer : ""].join(" ")
            }), h]
          })
        },
        Li = () => {
          const e = document.getElementById("main");
          e && (e.style.marginTop = "var(--promo-banner-height, 0px)")
        },
        {
          graphEnv: Wi
        } = (0, i.getConfigForDomain)(),
        Ji = e => {
          let {
            navData: a,
            searchConfig: n,
            routeOptions: o,
            location: l,
            onNavigate: c
          } = e;
          const [{
            iso: A
          }] = (0, t.getLocale)(), m = I();
          return (0, r.useEffect)((() => {
            Li()
          }), []), (0, p.jsxs)("div", {
            className: "siteHeaderContainer",
            children: [void 0 !== d.Banner ? (0, p.jsx)(d.Banner, {
              type: m,
              locale: A
            }) : null, (0, p.jsx)(i.ResizeProvider, {
              children: (0, p.jsx)(s.UN, {
                children: (0, p.jsx)(C, {
                  navData: a,
                  location: l,
                  onNavigate: c,
                  searchConfig: n,
                  routeOptions: o,
                  children: (0, p.jsx)(Oi, {})
                })
              })
            })]
          })
        },
        Ui = (0, i.withRockstarGraph)((e => {
          let {
            navData: a,
            searchConfig: n,
            routeOptions: o,
            location: l,
            onNavigate: c,
            privateToken: A
          } = e;
          const [{
            iso: m
          }] = (0, t.getLocale)(), g = I();
          return (0, r.useEffect)((() => {
            Li()
          }), []), (0, p.jsxs)("div", {
            className: "siteHeaderContainer",
            children: [void 0 !== d.Banner ? (0, p.jsx)(d.Banner, {
              type: g,
              locale: m
            }) : null, (0, p.jsx)(i.ResizeProvider, {
              children: (0, p.jsx)(s.iR, {
                privateToken: A,
                children: (0, p.jsx)(s.UN, {
                  children: (0, p.jsx)(C, {
                    navData: a,
                    location: l,
                    onNavigate: c,
                    searchConfig: n,
                    routeOptions: o,
                    children: (0, p.jsx)(Oi, {})
                  })
                })
              })
            })]
          })
        }), {
          env: Wi
        }),
        Qi = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(r) {
            return (0, p.jsx)(L, {
              header: a,
              hidden: n,
              children: (0, p.jsx)(e, {
                ...r
              })
            })
          }
        }((0, t.withIntl)((e => {
          let {
            ...a
          } = e;
          const {
            hasProvider: n
          } = (0, o.useRockstarUser)();
          return n ? (0, p.jsx)(Ji, {
            ...a
          }) : (0, p.jsx)(Ui, {
            ...a
          })
        }), W), null, !0)
    },
    39460: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerd5c408a8b618087ef4bb452f96526b2b{grid-gap:1rem;align-content:center;background:#000;color:#fff;display:grid;grid-auto-rows:max-content;height:100%;justify-items:center;padding:.5rem}.siteHeaderContainer .rockstargames-modules-core-headerd5c408a8b618087ef4bb452f96526b2b h1{color:#fff}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/error/ErrorBoundarySimple/index.less"],
        names: [],
        mappings: "AAAA,wFAQI,aAAA,CAFA,oBAAA,CAHA,eAAA,CACA,UAAA,CACA,YAAA,CAIA,0BAAA,CARA,WAAA,CAMA,oBAAA,CALA,aAQJ,CAVA,2FAWQ,UAER",
        sourcesContent: [".errorMsg {\n    height: 100%;\n    padding: 0.5rem;\n    background: black;\n    color: white;\n    display: grid;\n    align-content: center;\n    justify-items: center;\n    grid-gap: 1rem;\n    grid-auto-rows: max-content;\n    h1 {\n        color: white;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        errorMsg: "rockstargames-modules-core-headerd5c408a8b618087ef4bb452f96526b2b"
      };
      const s = i
    },
    48886: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headere0e27fbcd7bb62793ad72aa4562e8b53{background:#fff;border:1px solid #fff;border-radius:4px;box-shadow:none;cursor:pointer;font-weight:700;left:0;letter-spacing:0;margin:var(--rem-1);opacity:0;padding:var(--rem-05);pointer-events:none;position:absolute;text-transform:uppercase;top:calc(-100% + var(--rem-2));transition:transform .3s ease-in-out,opacity .3s ease-in-out;z-index:999}.siteHeaderContainer .rockstargames-modules-core-headere0e27fbcd7bb62793ad72aa4562e8b53:focus{border:1px solid #fff;color:#000;left:0;opacity:1;pointer-events:auto;top:0;transform:translateY(calc(100% - var(--rem-2)));z-index:9999}", "", {
        version: 3,
        sources: ["webpack://./src/components/AccessibilityButton/index.less"],
        names: [],
        mappings: "AAAA,wFACI,eAAA,CACA,qBAAA,CACA,iBAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CASA,MAAA,CARA,gBAAA,CAEA,mBAAA,CACA,SAAA,CAFA,qBAAA,CAGA,mBAAA,CAEA,iBAAA,CAKA,wBAAA,CAJA,8BAAA,CAKA,4DAAA,CAHA,WAEJ,CAKI,8FAOI,qBAAA,CADA,UAAA,CAHA,MAAA,CAEA,SAAA,CAGA,mBAAA,CANA,KAAA,CADA,+CAAA,CAGA,YACR",
        sourcesContent: [".accessibility {\n    background: white;\n    border: solid 1px white;\n    border-radius: 4px;\n    box-shadow: none;\n    cursor: pointer;\n    font-weight: bold;\n    letter-spacing: 0;\n    padding: var(--rem-05);\n    margin: var(--rem-1);\n    opacity: 0;\n    pointer-events: none;\n\n    position: absolute;\n    top: calc(-100% + var(--rem-2));\n    left: 0;\n    z-index: 999;\n\n    text-transform: uppercase;\n    transition:\n        transform 0.3s ease-in-out,\n        opacity 0.3s ease-in-out;\n\n    &:focus {\n        transform: translateY(calc(100% - var(--rem-2)));\n        top: 0;\n        left: 0;\n        z-index: 9999;\n        opacity: 1;\n        color: black;\n        border: solid 1px white;\n        pointer-events: auto;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        accessibility: "rockstargames-modules-core-headere0e27fbcd7bb62793ad72aa4562e8b53"
      };
      const s = i
    },
    6958: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerb5fce2c3384850553a25768f9fdbc74c{align-items:center;display:flex;gap:var(--rem-15);justify-content:flex-end}.siteHeaderContainer .rockstargames-modules-core-headerb5fce2c3384850553a25768f9fdbc74c>div{align-items:center;display:flex;height:var(--global-navigation-height)}", "", {
        version: 3,
        sources: ["webpack://./src/components/Actions/actions.less"],
        names: [],
        mappings: "AAAA,wFAGI,kBAAA,CAFA,YAAA,CAGA,iBAAA,CAFA,wBAGJ,CACI,4FAEI,kBAAA,CADA,YAAA,CAEA,sCACR",
        sourcesContent: [".actions {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: var(--rem-15);\n\n    & > div {\n        display: flex;\n        align-items: center;\n        height: var(--global-navigation-height);\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        actions: "rockstargames-modules-core-headerb5fce2c3384850553a25768f9fdbc74c"
      };
      const s = i
    },
    39014: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerddaf896d4deca83f6d4a43dde2449ed6{display:block;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:999}.siteHeaderContainer .rockstargames-modules-core-headere39052a22cbfec8136c7f57d9e910820{height:100vh;left:0;position:absolute;top:var(--global-navigation-height);width:100%}.siteHeaderContainer .rockstargames-modules-core-headerdd3818dff0e6f7bd2777880270cbdabb{background:var(--black-65);filter:blur(5px)}", "", {
        version: 3,
        sources: ["webpack://./src/components/BackgroundOverlay/index.less"],
        names: [],
        mappings: "AAAA,wFACI,aAAA,CAMA,YAAA,CAFA,MAAA,CAHA,cAAA,CAEA,KAAA,CAEA,WAAA,CAHA,WAKJ,CAEA,wFAEI,YAAA,CACA,MAAA,CAFA,iBAAA,CAGA,mCAAA,CACA,UAAJ,CAGA,wFACI,0BAAA,CACA,gBADJ",
        sourcesContent: [".backgroundElevation {\n    display: block;\n    position: fixed;\n    z-index: 999;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\n.backgroundOverlay {\n    position: absolute;\n    height: 100vh;\n    left: 0;\n    top: var(--global-navigation-height);\n    width: 100%;\n}\n\n.backgroundVisible {\n    background: var(--black-65);\n    filter: blur(5px);\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        backgroundElevation: "rockstargames-modules-core-headerddaf896d4deca83f6d4a43dde2449ed6",
        backgroundOverlay: "rockstargames-modules-core-headere39052a22cbfec8136c7f57d9e910820",
        backgroundVisible: "rockstargames-modules-core-headerdd3818dff0e6f7bd2777880270cbdabb"
      };
      const s = i
    },
    59229: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770{align-items:center;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);background:var(--black-65);border:1px solid var(--white-100);border-radius:var(--border-radius-sm);color:var(--white-100);display:flex;font-family:var(--font-family-body);font-size:calc(var(--base-rem-size) * .75);font-style:normal;font-weight:700;gap:10px;justify-content:center;line-height:100%;padding:var(--rem-05) var(--rem-075);text-align:center;text-decoration:none;text-transform:uppercase;transition:all .3s ease-in;white-space:nowrap}.siteHeaderContainer .rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770:hover{background-color:var(--white-100);color:var(--black-200)}.siteHeaderContainer .rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770.rockstargames-modules-core-headerd468a02858ad85269a394854bce5e316{background-color:#fcaf17;border:1px solid transparent;color:var(--black-200)}.siteHeaderContainer .rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770.rockstargames-modules-core-headerd468a02858ad85269a394854bce5e316:hover{background-color:#e19808;border:1px solid #e19808}@media screen and (max-width:1023px){.siteHeaderContainer .rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770{font-size:var(--base-rem-size);padding:var(--base-rem-size)}}", "", {
        version: 3,
        sources: ["webpack://./src/components/CallToAction/index.less"],
        names: [],
        mappings: "AAAA,wFAmBI,kBAAA,CAOA,kCAAA,CAAA,0BAAA,CADA,0BAAA,CADA,iCAAA,CADA,qCAAA,CAlBA,sBAAA,CAWA,YAAA,CATA,mCAAA,CACA,0CAAA,CACA,iBAAA,CAEA,eAAA,CASA,QAAA,CAFA,sBAAA,CAJA,gBAAA,CAGA,oCAAA,CAXA,iBAAA,CAOA,oBAAA,CADA,wBAAA,CASA,0BAAA,CAXA,kBAWJ,CAOI,8FAEI,iCAAA,CADA,sBAJR,CAQI,0JAEI,wBAAA,CACA,4BAAA,CAFA,sBAJR,CAQQ,gKACI,wBAAA,CACA,wBANZ,CAUI,qCAAA,wFAEI,8BAAA,CADA,4BANN,CACF",
        sourcesContent: [".callToAction {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: calc(var(--base-rem-size) * 0.75);\n    font-style: normal;\n    white-space: nowrap;\n    font-weight: 700;\n    text-transform: uppercase;\n    text-decoration: none;\n    line-height: 100%;\n\n    display: flex;\n    padding: var(--rem-05) var(--rem-075);\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    transition: all 0.3s ease-in;\n\n    border-radius: var(--border-radius-sm);\n    border: 1px solid var(--white-100);\n    background: var(--black-65);\n    backdrop-filter: blur(25px);\n\n    &:hover {\n        color: var(--black-200);\n        background-color: var(--white-100);\n    }\n\n    &.highlight {\n        color: var(--black-200);\n        background-color: #fcaf17;\n        border: 1px solid transparent;\n\n        &:hover {\n            background-color: #e19808;\n            border: 1px solid #e19808;\n        }\n    }\n\n    @media screen and (max-width: 1023px) {\n        padding: var(--base-rem-size);\n        font-size: var(--base-rem-size);\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        callToAction: "rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770",
        highlight: "rockstargames-modules-core-headerd468a02858ad85269a394854bce5e316"
      };
      const s = i
    },
    8851: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7{border:1px solid var(--border-color);border-radius:4px;box-shadow:0 0 40px -25px transparent;flex-grow:1;overflow:hidden;transition:transform .3s cubic-bezier(0,0,.5,1),box-shadow .3s cubic-bezier(0,0,.5,1)}.siteHeaderContainer .rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7:hover{box-shadow:0 30px 40px -25px #000;transform:scale(1.025)}@media screen and (min-width:1024px){.siteHeaderContainer .rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7{width:20%}}.siteHeaderContainer .rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7 a{aspect-ratio:.81/1;display:block}.siteHeaderContainer .rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7 img{display:block;width:100%}", "", {
        version: 3,
        sources: ["webpack://./src/components/GamesCard/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,wFAEI,oCAAA,CACA,iBAAA,CCsqBA,qCAAA,CDxqBA,WAAA,CAGA,eAAA,CCkqBA,qFDloBJ,CCuoBI,8FAEI,iCAAA,CADA,sBDpoBR,CAjCI,qCAAA,wFACI,SAoCN,CACF,CA7CA,0FAaQ,kBAAA,CADA,aAqCR,CAjDA,4FAkBQ,aAAA,CADA,UAoCR",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.gameCard {\n    flex-grow: 1;\n    border: 1px solid var(--border-color);\n    border-radius: 4px;\n    overflow: hidden;\n    .cardHover();\n\n    @media screen and (min-width: 1024px) {\n        width: 20%;\n    }\n\n    a {\n        display: block;\n        aspect-ratio: 0.81/1;\n    }\n\n    img {\n        width: 100%;\n        display: block;\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        gameCard: "rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7"
      };
      const s = i
    },
    78686: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerd434f9fba21c660252bfc301b9e76c24{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.siteHeaderContainer .rockstargames-modules-core-headerd434f9fba21c660252bfc301b9e76c24 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headerd434f9fba21c660252bfc301b9e76c24:focus,.siteHeaderContainer .rockstargames-modules-core-headerd434f9fba21c660252bfc301b9e76c24:hover{background-color:var(--white-40);outline:none}.siteHeaderContainer .rockstargames-modules-core-headerd434f9fba21c660252bfc301b9e76c24.rockstargames-modules-core-headerb73f53fe62cee8016c25e0fbde20b58b{background:var(--white-100);color:var(--black-200)}.siteHeaderContainer .rockstargames-modules-core-headerd434f9fba21c660252bfc301b9e76c24.rockstargames-modules-core-headerb73f53fe62cee8016c25e0fbde20b58b img{filter:invert()}.siteHeaderContainer .rockstargames-modules-core-headerc44e1e859a7c882c94e4ab6659292df1{align-items:center;border-bottom:1px solid var(--blacks-border-color);display:flex;flex-direction:column;padding:var(--rem-3) 0;width:100%;z-index:99}.siteHeaderContainer .rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31{align-items:center;display:flex;justify-content:space-between;margin-bottom:var(--rem-1);max-width:1920px;padding:0 var(--rem-4);width:100%}.siteHeaderContainer .rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31 .rockstargames-modules-core-headerdf107c2f64cafbee316afb5bf5d6c994{font-family:var(--font-family-h);font-size:var(--rem-15)}.siteHeaderContainer .rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31 .rockstargames-modules-core-headera9c20e94d8cd00159778729b0c3eb095{align-items:center;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;line-height:100%;text-transform:uppercase}.siteHeaderContainer .rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31 .rockstargames-modules-core-headera9c20e94d8cd00159778729b0c3eb095 img{margin-left:var(--grid-gap-xxs);width:ar(--rem-1)}.siteHeaderContainer .rockstargames-modules-core-headerca5189f6c9b4274473d2cf9a8ace7bb0{align-content:flex-start;align-items:flex-start;display:flex;gap:var(--grid-gap-sm);max-width:1920px;padding:0 var(--rem-4);width:100%}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/GamesMenu/index.less"],
        names: [],
        mappings: "AA2QA,wFAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4FAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4LAEI,gCAAA,CACA,YC/OR,CDkPI,0JAEI,2BAAA,CADA,sBC/OR,CD8OI,8JAKQ,eChPZ,CAjEA,wFAUI,kBAAA,CAHA,kDAAA,CACA,YAAA,CACA,qBAAA,CARA,sBAAA,CAUA,UAAA,CATA,UAwEJ,CA5DA,wFAGI,kBAAA,CAFA,YAAA,CACA,6BAAA,CAEA,0BAAA,CAGA,gBAAA,CAFA,sBAAA,CACA,UA+DJ,CArEA,2JAUQ,gCAAA,CACA,uBA8DR,CAzEA,2JAsBQ,kBAAA,CADA,YAAA,CANA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CACA,wBAgER,CApFA,+JA0BY,+BAAA,CADA,iBA+DZ,CAzDA,wFAGI,wBAAA,CADA,sBAAA,CADA,YAAA,CAGA,sBAAA,CAEA,gBAAA,CADA,sBAAA,CAEA,UA2DJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/gen9-mixins';\n\n.gamesMenu {\n    padding: var(--rem-3) 0;\n    z-index: 99;\n    // begin hack for QA test 2\n    // background-color: black;\n    // position: absolute;\n    // end hack for QA test 2\n    border-bottom: 1px solid var(--blacks-border-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n.titleBar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: var(--rem-1);\n    padding: 0 var(--rem-4);\n    width: 100%;\n    max-width: 1920px;\n\n    .menuTitle {\n        font-family: var(--font-family-h);\n        font-size: var(--rem-15);\n    }\n\n    .viewAllLink {\n        font-family: var(--font-family-body);\n        font-size: 20px;\n        font-style: normal;\n        font-weight: 700;\n        line-height: 100%; /* 20px */\n        text-transform: uppercase;\n        display: flex;\n        align-items: center;\n\n        img {\n            width: ar(--rem-1);\n            margin-left: var(--grid-gap-xxs);\n        }\n    }\n}\n\n.gameCards {\n    display: flex;\n    align-items: flex-start;\n    align-content: flex-start;\n    gap: var(--grid-gap-sm);\n    padding: 0 var(--rem-4);\n    max-width: 1920px;\n    width: 100%;\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-headerd434f9fba21c660252bfc301b9e76c24",
        selected: "rockstargames-modules-core-headerb73f53fe62cee8016c25e0fbde20b58b",
        gamesMenu: "rockstargames-modules-core-headerc44e1e859a7c882c94e4ab6659292df1",
        titleBar: "rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31",
        menuTitle: "rockstargames-modules-core-headerdf107c2f64cafbee316afb5bf5d6c994",
        viewAllLink: "rockstargames-modules-core-headera9c20e94d8cd00159778729b0c3eb095",
        gameCards: "rockstargames-modules-core-headerca5189f6c9b4274473d2cf9a8ace7bb0"
      };
      const s = i
    },
    19836: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d{padding:0}.siteHeaderContainer .rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar{background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1));border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none}.siteHeaderContainer .rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar.swiper-scrollbar-disabled,.siteHeaderContainer .rockstargames-modules-core-headerdc6e1944afaf5126264e2bdf4feda399>.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar{display:none!important}.siteHeaderContainer .rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar.swiper-scrollbar-horizontal,.siteHeaderContainer .rockstargames-modules-core-headerce1abe15b9a826da664388a3a0feadf2>.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar{bottom:var(--swiper-scrollbar-bottom,4px);height:var(--swiper-scrollbar-size,4px);left:var(--swiper-scrollbar-sides-offset,1%);position:absolute;top:var(--swiper-scrollbar-top,auto);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));z-index:50}.siteHeaderContainer .rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar.swiper-scrollbar-vertical,.siteHeaderContainer .rockstargames-modules-core-headercd287b3bb2e9afbfb9aeda9f6822380f>.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar{height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));left:var(--swiper-scrollbar-left,auto);position:absolute;right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);width:var(--swiper-scrollbar-size,4px);z-index:50}.siteHeaderContainer .rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar-drag{background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);height:100%;left:0;position:relative;top:0;width:100%}.siteHeaderContainer .rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar-cursor-drag{cursor:move}.siteHeaderContainer .rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar-lock{display:none}.siteHeaderContainer .rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper{padding:0 var(--spacing-md) var(--spacing-sm)}.siteHeaderContainer .rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764{align-items:baseline;display:flex;justify-content:space-between;padding:var(--spacing-sm) var(--spacing-md)}.siteHeaderContainer .rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764 h2{font-family:var(--font-family-body);font-size:var(--nav-link-size);margin:0}.siteHeaderContainer .rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764 a{align-items:center;color:inherit;display:flex;font-size:calc(var(--base-rem-size) * .75);font-weight:700;letter-spacing:0;line-height:100%;padding:0;text-decoration:none;text-transform:uppercase}.siteHeaderContainer .rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764 a img{margin-left:calc(var(--base-rem-size) * .25);width:var(--base-rem-size)}.siteHeaderContainer .rockstargames-modules-core-headerc916087398dcb2ac0d81fc2541342f98 .swiper-wrapper{box-sizing:initial;display:flex;height:100%;position:relative;transition-duration:0ms;transition-property:transform;width:100%;z-index:1}.siteHeaderContainer .rockstargames-modules-core-headerfb650180ffb26ef3af920b51a6e292b1{flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}", "", {
        version: 3,
        sources: ["webpack://./src/components/GamesMenuMobile/index.less", "webpack://./../../../../node_modules/swiper/modules/scrollbar.less"],
        names: [],
        mappings: "AAAA,wFACI,SACJ,CAFA,0GCkBE,0DAAA,CAJA,wDAAA,CACA,iBAAA,CAEA,iBDKF,CCHE,iTAEE,sBDKJ,CCHE,mTAIE,yCAAA,CAGA,uCAAA,CAJA,4CAAA,CADA,iBAAA,CAGA,oCAAA,CAGA,+DAAA,CAFA,UDOJ,CCHE,iTAQE,gEAAA,CALA,sCAAA,CADA,iBAAA,CAEA,uCAAA,CACA,2CAAA,CAEA,sCAAA,CADA,UDOJ,CA9CA,+GCgDE,+DAAA,CACA,wDAAA,CAJA,WAAA,CAKA,MAAA,CAHA,iBAAA,CAIA,KAAA,CALA,UDSF,CAvDA,sHCsDE,WDIF,CA1DA,+GCyDE,YDIF,CA7DA,gGAOY,6CAyDZ,CApDA,wFAII,oBAAA,CAFA,YAAA,CACA,6BAAA,CAFA,2CAyDJ,CA1DA,2FAQQ,mCAAA,CADA,8BAAA,CAEA,QAsDR,CA/DA,0FAiBQ,kBAAA,CAJA,aAAA,CAGA,YAAA,CAFA,0CAAA,CAMA,eAAA,CADA,gBAAA,CADA,gBAAA,CAIA,SAAA,CADA,oBAAA,CANA,wBA4DR,CA3EA,8FA0BY,4CAAA,CADA,0BAsDZ,CAhDA,wGAEQ,kBAAA,CACA,YAAA,CACA,WAAA,CACA,iBAAA,CAIA,uBAAA,CAHA,6BAAA,CACA,UAAA,CACA,SAkDR,CA7CA,wFACI,aAAA,CACA,WAAA,CACA,iBAAA,CACA,6BAAA,CACA,UA+CJ",
        sourcesContent: [".gamesMenuMobile {\n    padding: 0;\n\n    :global {\n        @import (less) 'swiper/less/scrollbar';\n\n        .swiper {\n            padding: 0 var(--spacing-md) var(--spacing-sm);\n        }\n    }\n}\n\n.header {\n    padding: var(--spacing-sm) var(--spacing-md);\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n\n    h2 {\n        font-size: var(--nav-link-size);\n        font-family: var(--font-family-body);\n        margin: 0;\n    }\n\n    a {\n        color: inherit;\n        font-size: calc(var(--base-rem-size) * 0.75);\n        text-transform: uppercase;\n        display: flex;\n        align-items: center;\n        line-height: 100%;\n        letter-spacing: 0;\n        font-weight: 700;\n        text-decoration: none;\n        padding: 0;\n\n        img {\n            width: var(--base-rem-size);\n            margin-left: calc(var(--base-rem-size) * 0.25);\n        }\n    }\n}\n\n.slider {\n    :global(.swiper-wrapper) {\n        box-sizing: initial;\n        display: flex;\n        height: 100%;\n        position: relative;\n        transition-property: transform;\n        width: 100%;\n        z-index: 1;\n        transition-duration: 0ms;\n    }\n}\n\n.slide {\n    flex-shrink: 0;\n    height: 100%;\n    position: relative;\n    transition-property: transform;\n    width: 100%;\n}\n", ":root {\n  /*\n  --swiper-scrollbar-border-radius: 10px;\n  --swiper-scrollbar-top: auto;\n  --swiper-scrollbar-bottom: 4px;\n  --swiper-scrollbar-left: auto;\n  --swiper-scrollbar-right: 4px;\n  --swiper-scrollbar-sides-offset: 1%;\n  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);\n  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);\n  --swiper-scrollbar-size: 4px;\n  */\n}\n.swiper-scrollbar {\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  position: relative;\n  -ms-touch-action: none;\n  touch-action: none;\n  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));\n  .swiper-scrollbar-disabled > &,\n  &.swiper-scrollbar-disabled {\n    display: none !important;\n  }\n  .swiper-horizontal > &,\n  &.swiper-scrollbar-horizontal {\n    position: absolute;\n    left: var(--swiper-scrollbar-sides-offset, 1%);\n    bottom: var(--swiper-scrollbar-bottom, 4px);\n    top: var(--swiper-scrollbar-top, auto);\n    z-index: 50;\n    height: var(--swiper-scrollbar-size, 4px);\n    width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n  }\n  .swiper-vertical > &,\n  &.swiper-scrollbar-vertical {\n    position: absolute;\n    left: var(--swiper-scrollbar-left, auto);\n    right: var(--swiper-scrollbar-right, 4px);\n    top: var(--swiper-scrollbar-sides-offset, 1%);\n    z-index: 50;\n    width: var(--swiper-scrollbar-size, 4px);\n    height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n  }\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        gamesMenuMobile: "rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d",
        "swiper-scrollbar-disabled": "rockstargames-modules-core-headerdc6e1944afaf5126264e2bdf4feda399",
        "swiper-horizontal": "rockstargames-modules-core-headerce1abe15b9a826da664388a3a0feadf2",
        "swiper-vertical": "rockstargames-modules-core-headercd287b3bb2e9afbfb9aeda9f6822380f",
        header: "rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764",
        slider: "rockstargames-modules-core-headerc916087398dcb2ac0d81fc2541342f98",
        slide: "rockstargames-modules-core-headerfb650180ffb26ef3af920b51a6e292b1"
      };
      const s = i
    },
    13527: (e, a, n) => {
      n.d(a, {
        A: () => ja
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o),
        s = n(79908),
        d = n.n(s),
        l = new URL(n(97439), n.b),
        c = new URL(n(24921), n.b),
        A = new URL(n(98230), n.b),
        m = new URL(n(26207), n.b),
        g = new URL(n(6903), n.b),
        f = new URL(n(22154), n.b),
        h = new URL(n(49200), n.b),
        p = new URL(n(20928), n.b),
        u = new URL(n(90768), n.b),
        C = new URL(n(29951), n.b),
        b = new URL(n(28255), n.b),
        v = new URL(n(47594), n.b),
        w = new URL(n(54414), n.b),
        x = new URL(n(5676), n.b),
        y = new URL(n(28326), n.b),
        k = new URL(n(50225), n.b),
        B = new URL(n(32791), n.b),
        I = new URL(n(92973), n.b),
        H = new URL(n(25293), n.b),
        S = new URL(n(46962), n.b),
        z = new URL(n(66312), n.b),
        D = new URL(n(44934), n.b),
        R = new URL(n(66562), n.b),
        N = new URL(n(81117), n.b),
        _ = new URL(n(62051), n.b),
        T = new URL(n(68577), n.b),
        F = new URL(n(9133), n.b),
        E = new URL(n(93458), n.b),
        M = new URL(n(77032), n.b),
        j = new URL(n(44486), n.b),
        P = new URL(n(89307), n.b),
        G = new URL(n(58853), n.b),
        O = new URL(n(46010), n.b),
        L = new URL(n(26739), n.b),
        W = new URL(n(68145), n.b),
        J = new URL(n(59792), n.b),
        U = new URL(n(79122), n.b),
        Q = new URL(n(50228), n.b),
        K = new URL(n(304), n.b),
        q = new URL(n(79539), n.b),
        Y = new URL(n(61494), n.b),
        $ = new URL(n(313), n.b),
        V = new URL(n(94904), n.b),
        X = new URL(n(49027), n.b),
        Z = new URL(n(83493), n.b),
        ee = new URL(n(53037), n.b),
        ae = new URL(n(93803), n.b),
        ne = new URL(n(69400), n.b),
        re = new URL(n(44840), n.b),
        te = new URL(n(28168), n.b),
        oe = new URL(n(40792), n.b),
        ie = new URL(n(31431), n.b),
        se = new URL(n(51594), n.b),
        de = new URL(n(21130), n.b),
        le = new URL(n(57390), n.b),
        ce = new URL(n(36606), n.b),
        Ae = new URL(n(36334), n.b),
        me = new URL(n(89457), n.b),
        ge = new URL(n(79215), n.b),
        fe = new URL(n(34298), n.b),
        he = new URL(n(20629), n.b),
        pe = new URL(n(55490), n.b),
        ue = new URL(n(44001), n.b),
        Ce = new URL(n(11917), n.b),
        be = new URL(n(88622), n.b),
        ve = new URL(n(93262), n.b),
        we = new URL(n(52086), n.b),
        xe = new URL(n(66894), n.b),
        ye = i()(t()),
        ke = d()(l),
        Be = d()(c),
        Ie = d()(A),
        He = d()(m),
        Se = d()(g),
        ze = d()(f),
        De = d()(h),
        Re = d()(p),
        Ne = d()(u),
        _e = d()(C),
        Te = d()(b),
        Fe = d()(v),
        Ee = d()(w),
        Me = d()(x),
        je = d()(y),
        Pe = d()(k),
        Ge = d()(B),
        Oe = d()(I),
        Le = d()(H),
        We = d()(S),
        Je = d()(z),
        Ue = d()(D),
        Qe = d()(R),
        Ke = d()(N),
        qe = d()(_),
        Ye = d()(T),
        $e = d()(F),
        Ve = d()(E),
        Xe = d()(M),
        Ze = d()(j),
        ea = d()(P),
        aa = d()(G),
        na = d()(O),
        ra = d()(L),
        ta = d()(W),
        oa = d()(J),
        ia = d()(U),
        sa = d()(Q),
        da = d()(K),
        la = d()(q),
        ca = d()(Y),
        Aa = d()($),
        ma = d()(V),
        ga = d()(X),
        fa = d()(Z),
        ha = d()(ee),
        pa = d()(ae),
        ua = d()(ne),
        Ca = d()(re),
        ba = d()(te),
        va = d()(oe),
        wa = d()(ie),
        xa = d()(se),
        ya = d()(de),
        ka = d()(le),
        Ba = d()(ce),
        Ia = d()(Ae),
        Ha = d()(me),
        Sa = d()(ge),
        za = d()(fe),
        Da = d()(he),
        Ra = d()(pe),
        Na = d()(ue),
        _a = d()(Ce),
        Ta = d()(be),
        Fa = d()(ve),
        Ea = d()(we),
        Ma = d()(xe);
      ye.push([e.id, `.siteHeaderContainer .rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.siteHeaderContainer .rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e:focus,.siteHeaderContainer .rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e:hover{background-color:var(--white-40);outline:none}.siteHeaderContainer .rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e.rockstargames-modules-core-headere3891b1e9b084d58f6e1afb5fa14ab12{background:var(--white-100);color:var(--black-200)}.siteHeaderContainer .rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e.rockstargames-modules-core-headere3891b1e9b084d58f6e1afb5fa14ab12 img{filter:invert()}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--text-section-max-width:640px;--base-pixel-size:12px;--base-rem-size:0.75rem;--half-rem-size:calc(var(--base-rem-size) / 2);--twice-rem-size:calc(var(--base-rem-size) * 2);--section-margin-bottom:calc(var(--base-rem-size) * 4);--header-height:80px;--breadcrumbs-height:calc(var(--base-pixel-size) * 3.5);--max-width:1920px;--standard-color:#fcaf17;--color-h:#fff;--body-color:#e8e8e8;--background-color:#0b0b0b;--card-background-color:#000;--border-color:#282828;--privacy-banner-height:0px;--game-header-height:50px;--standard-grid-gap:calc(var(--base-rem-size) * 2);--image-margin-bottom:inherit;--image-rounding:0px;--image-rounding-static:16px;--image-rounding-static-sm:8px;--image-rounding-static-xs:4px;--grid-gap-static-xs:0.5rem;--grid-gap-static-sm:1rem;--grid-gap-static-md:2rem;--grid-gap-static-lg:4rem;--grid-gap-static-xl:8rem;--max-width-static:640px;--max-width-static-md:1088px;--max-width-static-lg:1920px;--max-width-static-xl:2560px;--margin-static:0 0 2rem;--h2-margin:2rem 0 0 0;--padding-sides:var(--grid-gap-static-lg);--padding-top-bottom:var(--padding-sides);--padding-static:var(--padding-sides);--font-family-std:var(--rsg-font-family-std);--font-family-h:var(--rsg-font-family-h);--font-family-h-halloween:nightmar;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;--font-family-body:"Chalet";--font-family-h:"ChaletComprime";--font-weight-regular:400;--font-weight-bold:700;--letter-spacing-body:0;--letter-spacing-h:0;--line-height-sm:1;--line-height-md:1.1;--line-height-lg:1.6;--black-200:#000;--black-100:#121212;--black-65:hsla(0,0%,7%,.65);--black-40:hsla(0,0%,7%,.4);--black-15:hsla(0,0%,7%,.15);--text-dark:#2d2d2d;--border-color:#2d2d2d;--white-100:#fff;--white-65:hsla(0,0%,100%,.65);--white-40:hsla(0,0%,100%,.4);--white-15:hsla(0,0%,100%,.15);--focusring-blue:blue;--red:#e03232;--circoloco-red:#eb1818;--rockstar-gold:#fcaf17;--playstation-blue:#00439c;--microsoft-green:#387a26;--pc-legacy:#b2b2b2;--pc-enhanced:#beb279;--color-h:var(--white-100);--color-body:var(--text-light);--green-light:#c1f7bd;--green-dark:#81da85;--scroll-thumb-color:#7d7d7d;--scroll-track-color:transparent;--max-width-sm:640px;--max-width-md:1088px;--max-width-lg:1920px;--max-width-xl:2560px;--spacing-xxs:0.25rem;--spacing-xs:0.5rem;--spacing-sm:1rem;--spacing-md:2rem;--spacing-lg:4rem;--spacing-xl:8rem;--grid-gap-xxs:var(--spacing-xxs);--grid-gap-xs:var(--spacing-xs);--grid-gap-sm:var(--spacing-sm);--grid-gap-md:var(--spacing-md);--grid-gap-lg:var(--spacing-lg);--grid-gap-xl:var(--spacing-xl);--padding-xxs:var(--spacing-xxs);--padding-xs:var(--spacing-xs);--padding-sm:var(--spacing-sm);--padding-md:var(--spacing-md);--padding-lg:var(--spacing-lg);--padding-xl:var(--spacing-xl);--margin-xxs:var(--spacing-xxs);--margin-xs:var(--spacing-xs);--margin-sm:var(--spacing-sm);--margin-md:var(--spacing-md);--margin-lg:var(--spacing-lg);--margin-xl:var(--spacing-xl);--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--gradient-overlay-bottom:linear-gradient(180.08deg,transparent 25%,rgba(0,0,0,.5) 65%,rgba(0,0,0,.6));--gradient-overlay-right:linear-gradient(270deg,rgba(0,0,0,.9),transparent);--promo-banner-z-index:11500;--font-family-h:HelveticaNowDisplayBold;--font-family-body:HelveticaNowText;--blacks-border-color:#282828;--text-light:#e8e8e8;--rem-025:calc(var(--base-rem-size) * 0.25);--rem-05:calc(var(--base-rem-size) * 0.5);--rem-075:calc(var(--base-rem-size) * 0.75);--rem-1:var(--base-rem-size);--rem-125:calc(var(--base-rem-size) * 1.25);--rem-15:calc(var(--base-rem-size) * 1.5);--rem-2:calc(var(--base-rem-size) * 2);--rem-3:calc(var(--base-rem-size) * 3);--rem-4:calc(var(--base-rem-size) * 4);--rem-6:calc(var(--base-rem-size) * 6);--rem-8:calc(var(--base-rem-size) * 8);--spacing-xxs:var(--rem-025);--spacing-xs:var(--rem-05);--spacing-sm:var(--rem-1);--spacing-md:var(--rem-2);--spacing-lg:var(--rem-4);--spacing-xl:var(--rem-8);--global-navigation-box-shadow:0px 8px 20px 0px rgba(0,0,0,.7);--global-navigation-height:80px;--base-rem-size:var(--base-rem-size);--mobile-nav-padding-sides:32px;--mobile-nav-item-padding:20px var(--mobile-nav-padding-sides);--nav-icon-size:var(--rem-1);--nav-link-size:calc(var(--base-rem-size) * 0.75);--sub-nav-indent:var(--spacing-sm);--sub-nav-min-width:240px;background-color:var(--background-color,transparent);font-family:var(--font-family-std,HelveticaNowText);font-family:var(--font-family-body);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (max-width:767px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--grid-gap-static-lg:2rem;--grid-gap-static-xl:4rem}}@media (min-width:2560px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--max-width-static-md:1440px}}@font-face{font-family:HelveticaNowText;font-style:italic;font-weight:400;src:url(${ke}) format("woff")}@font-face{font-family:HelveticaNowText;font-style:normal;font-weight:700;src:url(${Be}) format("woff")}@font-face{font-family:HelveticaNowDisplayMedium;font-style:normal;font-weight:400;src:url(${Ie}) format("woff")}@font-face{font-family:HelveticaNeueLTW05;font-style:normal;font-weight:400;src:url(${He}) format("woff")}@font-face{font-family:HelveticaNeueLTW05;font-style:italic;font-weight:400;src:url(${Se}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:normal;font-weight:400;src:url(${ze}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:italic;font-weight:400;src:url(${De}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:normal;font-weight:700;src:url(${Re}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:italic;font-weight:700;src:url(${Ne}) format("woff")}@font-face{font-family:HelveticaNeueLTW07-85Heavy;font-style:normal;font-weight:700;src:url(${_e}) format("woff")}@font-face{font-family:NeueHelveticaPaneuropean;font-style:normal;font-weight:400;src:url(${Te}) format("woff")}@font-face{font-family:SackersGothicW01-Square;font-style:normal;font-weight:400;src:url(${Fe}) format("woff")}@font-face{font-family:Cabrito-Nordem;font-style:normal;font-weight:400;src:url(${Ee}) format("woff")}@font-face{font-family:Droid-Serif-Pro;font-style:normal;font-weight:400;src:url(${Me}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:400;src:url(${je}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:500;src:url(${Pe}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:700;src:url(${Ge}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:900;src:url(${Oe}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:400;src:url(${Le}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:500;src:url(${We}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:700;src:url(${Je}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:900;src:url(${Ue}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:400;src:url(${Qe}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:500;src:url(${Ke}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:700;src:url(${qe}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:900;src:url(${Ye}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:400;src:url(${$e}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:500;src:url(${Ve}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:700;src:url(${Xe}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:900;src:url(${Ze}) format("woff")}@font-face{font-family:NotoSerifJP;font-style:normal;font-weight:700;src:url(${ea}) format("woff")}@font-face{font-family:NotoSerifJP;font-style:normal;font-weight:900;src:url(${aa}) format("woff")}@font-face{font-family:NotoSerifKR;font-style:normal;font-weight:700;src:url(${na}) format("woff")}@font-face{font-family:NotoSerifKR;font-style:normal;font-weight:900;src:url(${na}) format("woff")}@font-face{font-family:NotoSerifSC;font-style:normal;font-weight:700;src:url(${ra}) format("woff")}@font-face{font-family:NotoSerifSC;font-style:normal;font-weight:900;src:url(${ta}) format("woff")}@font-face{font-family:NotoSerifTC;font-style:normal;font-weight:700;src:url(${oa}) format("woff")}@font-face{font-family:NotoSerifTC;font-style:normal;font-weight:900;src:url(${ia}) format("woff")}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:400;src:url(${sa}) format("woff")}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:700;src:url(${da}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:400;src:url(${la}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:700;src:url(${ca}) format("woff")}@font-face{font-family:Pricedown;font-style:normal;font-weight:700;src:url(${Aa}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:400;src:url(${ma}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:700;src:url(${ga}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:900;src:url(${fa}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:400;src:url(${ha}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:400;src:url(${pa}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:700;src:url(${ua}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:700;src:url(${Ca}) format("woff")}@font-face{font-family:CorporateW05;font-style:normal;font-weight:400;src:url(${ba}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:400;src:url(${va}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:700;src:url(${wa}) format("woff")}@font-face{font-family:EurostileNextW05;font-style:normal;font-weight:700;src:url(${xa}) format("woff")}@font-face{font-family:Diploma;font-style:normal;font-weight:400;src:url(${ya}) format("woff")}@font-face{font-family:BrushScriptMT;font-style:normal;font-weight:400;src:url(${ka}) format("woff")}@font-face{font-family:BankGothicBT;font-style:normal;font-weight:400;src:url(${Ba}) format("woff")}@font-face{font-family:MeltdownRegular;font-style:normal;font-weight:400;src:url(${Ia}) format("woff")}@font-face{font-family:SharkSnackRegular;font-style:normal;font-weight:400;src:url(${Ha}) format("woff")}@font-face{font-family:GTAArtDeco;font-style:normal;font-weight:400;src:url(${Sa}) format("woff")}@font-face{font-family:GTAArtDeco;font-style:normal;font-weight:500;src:url(${za}) format("woff")}@font-face{font-family:RDRLino-Regular;font-style:normal;font-weight:400;src:url(${Da}) format("woff")}@font-face{font-family:HapnaSlabSerif;font-style:normal;font-weight:400;src:url(${Ra}) format("woff")}@font-face{font-family:HapnaSlabSerif;font-style:normal;font-weight:700;src:url(${Na}) format("woff")}@font-face{font-family:nightmar;font-style:normal;font-weight:100;src:url(${_a}) format("woff")}@font-face{font-family:RDRCatalogueBold;font-style:normal;font-weight:700;src:url(${Ta}) format("woff")}@font-face{font-family:RDRUltraHeadline;font-style:normal;font-weight:400;src:url(${Fa}) format("woff")}@media (min-width:0px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--root-font-size:16}}@media (min-width:768px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--root-font-size:18}}@media (min-width:1024px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--root-font-size:20}}@media (min-width:1920px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--root-font-size:22}}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b *{box-sizing:border-box}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b a{color:inherit;text-decoration:none}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h2,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h4,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h5,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h6,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b p{margin:0}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b figure{margin:0}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b caption,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b figcaption{--padding-dynamic:var(--padding-sides);--padding-dynamic-tb:initial;color:var(--body-color);display:block;font-family:var(--font-family-std);font-size:var(--font-size-2);font-style:italic;margin:var(--grid-gap-static-sm) auto 0;padding:var(--padding-t,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0) var(--padding-b,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0);text-align:center}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b caption p,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b figcaption p{display:block}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ru_ru){--font-family-h-halloween:RDRLino-Regular}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ko_kr){word-break:keep-all}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h2,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}.siteHeaderContainer [data-game=rdo] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3,.siteHeaderContainer [data-game^=rdr] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h4,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h5,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h4,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h5,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [template=community] main{color:var(--color-h,#161616)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [template=community] p{color:var(--body-color,#2d2d2d)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]{--font-family-std:var(--gta-font-family-std);--font-family-h:var(--gta-font-family-h);--letter-spacing-h:0;--line-height-h1:1;--font-weight-newswire-subtitle:400;--letter-spacing-std:0;--color-h:#fff;--body-color:#e8e8e8;--tag-color:#e8e8e8;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;background-color:var(--background-color,transparent);color:#e8e8e8;font-family:var(--font-family-std,HelveticaNowText);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (min-width:0px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]{--header-numerator:20.8}}@media (min-width:768px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]{--header-numerator:23.4}}@media (min-width:1024px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]{--header-numerator:26}}@media (min-width:1920px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]{--header-numerator:29.25}}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h2,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}.siteHeaderContainer [data-game=rdo] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3,.siteHeaderContainer [data-game^=rdr] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h4,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h5,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h4,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h5,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] [template=community] main{color:var(--color-h,#161616)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] [template=community] p{color:var(--body-color,#2d2d2d)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] .rockstargames-modules-core-headerab6bac3e7cd6aeeec5fe34375b77b1a2{font-family:var(--gta-font-family-badge)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(pl_pl) [data-game^=gta]{--font-family-h:ChaletComprime,NeueHelveticaW05;--font-family-newswire-subtitle:ChaletComprime,NeueHelveticaW05;--badge-font:Pricedown,NeueHelveticaW05}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(pl_pl) [data-context=newswire-article] h1{--font-family-h:NeueHelveticaPaneuropean}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ru_ru) [data-game^=gta]{--font-family-h:NeueHelveticaW05;--font-family-newswire-subtitle:NeueHelveticaW05;--badge-font:Pricedown,NeueHelveticaW05}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ru_ru) [data-context=newswire-article] h1{--font-family-h:NeueHelveticaW05}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hans) [data-game^=gta]{--font-family-h:NotoSansSC;--font-family-newswire-subtitle:NotoSansSC;--font-family-std:NotoSansSC;--badge-font:Pricedown,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hant) [data-game^=gta]{--font-family-h:NotoSansTC;--font-family-newswire-subtitle:NotoSansTC;--font-family-std:NotoSansTC;--badge-font:Pricedown,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ja_jp) [data-game^=gta]{--font-family-h:NotoSansJP;--font-family-newswire-subtitle:NotoSansJP;--font-family-std:NotoSansJP;--badge-font:Pricedown,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ja_jp) [data-context=newswire-article] h1{--font-family-h:NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ko_kr) [data-game^=gta]{--font-family-h:NotoSansKR;--font-family-newswire-subtitle:NotoSansKR;--font-family-std:NotoSansKR;--badge-font:Pricedown,NotoSansKR}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]{--font-family-std:var(--rdr-font-family-std);--font-family-h:var(--rdr-font-family-h);--font-family-newswire-subtitle:var(--rdr-font-family-newswire-subtitle);--area-font:var(--rdr-area-font);--font-weight-h:400;--font-weight-h1:400;--font-weight-h3:400;--font-weight-newswire-subtitle:700;--h3-numerator-override-newswire-subtitle:1;--letter-spacing-h:0;--line-height-h:1.2;--letter-spacing-std:0;--text-transform-newswire-subtitle:initial;--color-h:#c00;--color-h3:#fff;--color-h4:#fff;--body-color:#e8e8e8;--text-transform-h:uppercase;--tag-color:#e8e8e8;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;background-color:var(--background-color,transparent);color:#e8e8e8;font-family:var(--font-family-std,HelveticaNowText);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (min-width:0px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]{--header-numerator:15}}@media (min-width:768px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]{--header-numerator:16.88}}@media (min-width:1024px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]{--header-numerator:18.75}}@media (min-width:1920px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]{--header-numerator:21.09}}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h2,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h4,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h2,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h2,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3[data-context=newswire-subtitle],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}.siteHeaderContainer [data-game=rdo] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3,.siteHeaderContainer [data-game=rdo] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3,.siteHeaderContainer [data-game^=rdr] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3,.siteHeaderContainer [data-game^=rdr] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h4,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h5,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h6,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h4,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h5,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h2,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3[data-context=newswire-subtitle],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h4,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h5,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h6,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h4,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h5,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] [template=community],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] [template=community] main,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] [template=community] main{color:var(--color-h,#161616)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] [template=community] p,.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] [template=community] p{color:var(--body-color,#2d2d2d)}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(pl_pl) [data-game=rdo],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(pl_pl) [data-game^=rdr]{--font-family-h:RDRLino-Regular;--font-family-newswire-subtitle:HapnaSlabSerif;--font-family-std:HapnaSlabSerif;--badge-font:RDRLino-Regular}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hans) [data-game=rdo],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hans) [data-game^=rdr]{--font-family-h:NotoSerifSC;--font-family-newswire-subtitle:NotoSansSC,;--font-family-std:NotoSansSC;--area-font:NotoSansSC;--badge-font:RDRLino-Regular,NotoSerifSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hant) [data-game=rdo],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hant) [data-game^=rdr]{--font-family-h:NotoSerifTC;--font-family-newswire-subtitle:NotoSansTC;--font-family-std:NotoSansTC;--area-font:NotoSansTC;--badge-font:RDRLino-Regular,NotoSerifTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ja_jp) [data-game=rdo],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ja_jp) [data-game^=rdr]{--font-family-h:NotoSerifJP;--font-family-newswire-subtitle:NotoSansJP;--font-family-std:NotoSansJP;--area-font:NotoSansJP;--badge-font:RDRLino-Regular,NotoSerifTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ko_kr) [data-game=rdo],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ko_kr) [data-game^=rdr]{--font-family-h:NotoSerifKR;--font-family-newswire-subtitle:NotoSansKR;--font-family-std:NotoSansKR;--area-font:NotoSansKR;--badge-font:RDRLino-Regular,NotoSerifKR}@font-face{font-family:HelveticaNowDisplayBold;font-style:normal;font-weight:700;src:url(${Ea}) format("woff")}@font-face{font-family:HelveticaNowText;font-style:normal;font-weight:400;src:url(${Ma}) format("woff")}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(pl-PL),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(pl_pl){--font-family-h:NeueHelveticaPaneuropean;--font-family-std:NeueHelveticaPaneuropean}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ru-RU),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ru_ru){--font-family-h:NeueHelveticaPaneuropean}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-type-lang=pl],.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-type-lang=ru]{font-family:NeueHelveticaPaneuropean!important}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh-CN),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hans){--font-family-h:ChaletComprime,NotoSansSC;--font-family-body:NotoSansSC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-type-lang=zh]{font-family:ChaletComprime,NotoSansSC!important}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh-TW),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_tw){--font-family-h:ChaletComprime,NotoSansTC;--font-family-body:NotoSansTC}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-type-lang=tw]{font-family:ChaletComprime,NotoSansTC!important}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ja-JP),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ja_jp){--font-family-h:HelveticaNowDisplayBold,NotoSansJP;--font-family-body:HelveticaNowText,NotoSansJP}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-type-lang=jp]{font-family:HelveticaNowText,NotoSansJP!important}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ko-KR),.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ko_kr){--font-family-h:ChaletComprime,NotoSansKR;--font-family-body:NotoSansKR}.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-type-lang=kr]{font-family:ChaletComprime,NotoSansKR!important}@media (min-width:2560px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--max-width-md:1440px}}@media (max-width:767px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--spacing-lg:2rem;--spacing-xl:4rem}}@media (min-width:0px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--base-rem-size:16px}}@media (min-width:768px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--base-rem-size:18px}}@media (min-width:1024px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--base-rem-size:20px}}@media (min-width:1920px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--base-rem-size:22px}}@media (max-width:1023px){.siteHeaderContainer .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--nav-icon-size:var(--rem-125);--nav-link-size:calc(var(--base-rem-size) * 1.25);--sub-nav-indent:var(--spacing-md)}}.siteHeaderContainer .rockstargames-modules-core-headerd45d3098c677dd2ec79f50475413ab8e{height:var(--global-navigation-height)}@media screen and (min-width:1024px){.siteHeaderContainer .rockstargames-modules-core-headere22f06c8b88ebe362a876f197dca5953{height:calc(var(--global-navigation-height) + 140px)}}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/GlobalNavigation/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less", "webpack://./../../buildtime/legacy-design-system/less/typography.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-vars.less", "webpack://./src/components/GlobalNavigation/typography.less"],
        names: [],
        mappings: "AA2QA,wFAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4FAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4LAEI,gCAAA,CACA,YC/OR,CDkPI,0JAEI,2BAAA,CADA,sBC/OR,CD8OI,8JAKQ,eChPZ,CAjEA,wFC6PI,8BAAA,CACA,sBAAA,CACA,uBAAA,CACA,8CAAA,CACA,+CAAA,CACA,sDAAA,CACA,oBAAA,CACA,uDAAA,CACA,kBAAA,CACA,wBAAA,CACA,cAAA,CACA,oBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,2BAAA,CACA,yBAAA,CACA,kDAAA,CACA,6BAAA,CACA,oBAAA,CACA,4BAAA,CACA,8BAAA,CACA,8BAAA,CAEA,2BAAA,CACA,yBAAA,CACA,yBAAA,CACA,yBAAA,CACA,yBAAA,CAGA,wBAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CAGA,wBAAA,CACA,sBAAA,CAEA,yCAAA,CACA,yCAAA,CACA,qCAAA,CCvKJ,4CAAA,CACA,wCAAA,CACA,kCAAA,CDhBI,sCAAA,CAAA,2CAAA,CAAA,4BAAA,CAAA,kCAAA,CAAA,iCAAA,CAAA,oCAAA,CAAA,mCAAA,CAAA,kDAAA,CAAA,gCAAA,CAyBA,wFAAA,CAOA,kCAAA,CEnJJ,2BAAA,CACA,gCAAA,CAGA,yBAAA,CACA,sBAAA,CAGA,uBAAA,CACA,oBAAA,CAGA,kBAAA,CACA,oBAAA,CACA,oBAAA,CAGA,gBAAA,CACA,mBAAA,CACA,4BAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,sBAAA,CAEA,gBAAA,CACA,8BAAA,CACA,6BAAA,CACA,8BAAA,CAGA,qBAAA,CACA,aAAA,CACA,uBAAA,CACA,uBAAA,CACA,0BAAA,CACA,yBAAA,CACA,mBAAA,CAEA,qBAAA,CAGA,0BAAA,CACA,8BAAA,CAEA,qBAAA,CACA,oBAAA,CAGA,4BAAA,CACA,gCAAA,CAGA,oBAAA,CACA,qBAAA,CACA,qBAAA,CACA,qBAAA,CAIA,qBAAA,CACA,mBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CAIA,iCAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CAGA,gCAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CAGA,+BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CAGA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,uBAAA,CAGA,sGAAA,CAMA,2EAAA,CAOA,4BAAA,CH1GI,uCAAA,CACA,mCAAA,CAEA,6BAAA,CACA,oBAAA,CAOA,2CAAA,CACA,yCAAA,CACA,2CAAA,CACA,4BAAA,CACA,2CAAA,CACA,yCAAA,CACA,sCAAA,CACA,sCAAA,CACA,sCAAA,CACA,sCAAA,CACA,sCAAA,CAEA,4BAAA,CACA,0BAAA,CACA,yBAAA,CACA,yBAAA,CACA,yBAAA,CACA,yBAAA,CAEA,8DAAA,CAIA,+BAAA,CAEA,oCAAA,CACA,+BAAA,CACA,8DAAA,CAEA,4BAAA,CACA,iDAAA,CACA,kCAAA,CACA,yBAAA,CC4LA,oDAAA,CA/FA,mDAAA,CDxGA,mCAAA,CC4GA,2CAAA,CAHA,sCAAA,CACA,gDAAA,CACA,sCDyFJ,CChMI,yBAAA,wFAiPQ,yBAAA,CAA4B,yBD5CtC,CACF,CCnII,0BAAA,wFAoLS,4BD7CX,CACF,CCqPI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DD7OR,CCyOI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDvOR,CCmOI,WACI,qCAAA,CACA,iBAAA,CACA,eAAA,CACA,0DD3NR,CCuNI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDrNR,CCiNI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DD/MR,CC2MI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDzMR,CCqMI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDnMR,CC+LI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DD7LR,CCyLI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDvLR,CCmLI,WACI,sCAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDjLR,CC6KI,WACI,oCAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD3KR,CCuKI,WACI,mCAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDrKR,CCiKI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD/JR,CC2JI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDzJR,CCqJI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDnJR,CC+II,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD7IR,CCyII,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDvIR,CCmII,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDjIR,CC6HI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD3HR,CCuHI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDrHR,CCiHI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD/GR,CC2GI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDzGR,CCqGI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDnGR,CC+FI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD7FR,CCyFI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDvFR,CCmFI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDjFR,CC6EI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD3ER,CCuEI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDrER,CCiEI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD/DR,CC2DI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDzDR,CCqDI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDnDR,CC+CI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD7CR,CCyCI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDvCR,CCmCI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDjCR,CC6BI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD3BR,CCuBI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDrBR,CCiBI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDfR,CCWI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDTR,CCKI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDHR,CCDI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDGR,CCPI,WACI,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDSR,CCbI,WACI,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDeR,CCnBI,WACI,qBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDqBR,CCzBI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD2BR,CC/BI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDiCR,CCrCI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDuCR,CC3CI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD6CR,CCjDI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDmDR,CCvDI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDyDR,CC7DI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD+DR,CCnEI,WACI,wBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDqER,CCzEI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD2ER,CC/EI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDiFR,CCrFI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDuFR,CC3FI,WACI,mBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD6FR,CCjGI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDmGR,CCvGI,WACI,wBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDyGR,CC7GI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD+GR,CCnHI,WACI,6BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDqHR,CCzHI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD2HR,CC/HI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDiIR,CCrII,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDuIR,CC3II,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD6IR,CCjJI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDmJR,CCvJI,WACI,oBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDyJR,CC7JI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD+JR,CCnKI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDqKR,CC9mBI,uBAAA,wFAi4BK,mBD/QP,CACF,CCjmBI,yBAAA,wFAg3BK,mBD3QP,CACF,CCplBI,0BAAA,wFA+1BK,mBDvQP,CACF,CCvkBI,0BAAA,wFA80BK,mBDnQP,CACF,CAtqBA,0FE2FI,qBF8kBJ,CAzqBA,0FE8FI,aAAA,CACA,oBF8kBJ,CA7qBA,4nBEwGI,QF8kBJ,CAtrBA,+FE4GI,QF6kBJ,CAzrBA,mMDkKI,sCAAA,CACA,4BAAA,CG3CA,uBAAA,CAPA,aAAA,CAGA,kCAAA,CACA,4BAAA,CAEA,iBAAA,CALA,uCAAA,CHmDA,mJAAA,CG/CA,iBFglBJ,CAtsBA,uME2HQ,aF+kBR,CA1sBA,qGEsII,yCFukBJ,CA7sBA,qGE2II,mBFqkBJ,CC5lBI,oGACI,iDD8lBR,CC5lBI,sGACI,iDD8lBR,CC5lBI,oGACI,iDD8lBR,CCrmBI,oGACI,sDDumBR,CCrmBI,sGACI,sDDumBR,CCrmBI,oGACI,sDDumBR,CC9mBI,oGACI,uCDgnBR,CC9mBI,sGACI,uCDgnBR,CC9mBI,oGACI,uCDgnBR,CCvnBI,oGACI,6CDynBR,CCvnBI,sGACI,6CDynBR,CCvnBI,oGACI,6CDynBR,CChoBI,oGACI,4CDkoBR,CChoBI,sGACI,4CDkoBR,CChoBI,oGACI,4CDkoBR,CCzoBI,oGACI,+CD2oBR,CCzoBI,sGACI,+CD2oBR,CCzoBI,oGACI,+CD2oBR,CClpBI,oGACI,8CDopBR,CClpBI,sGACI,8CDopBR,CClpBI,oGACI,8CDopBR,CC3pBI,oGACI,6DD6pBR,CC3pBI,sGACI,6DD6pBR,CC3pBI,oGACI,6DD6pBR,CCpqBI,oGACI,2CDsqBR,CCpqBI,sGACI,2CDsqBR,CCpqBI,oGACI,2CDsqBR,CAjyBA,ygBCyJQ,wDAAA,CACA,8CD+oBR,CAzyBA,wPC8JQ,0DAAA,CAEA,0DAAA,CADA,oEDgpBR,CA/yBA,6JCoKQ,6DD8oBR,CAlzBA,2FCuKQ,6DD8oBR,CArzBA,2FC0KQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oED+oBR,CA3zBA,2FCgLQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oED+oBR,CC5oBQ,2HAYI,qEAAA,CAXA,6GAAA,CAOA,qEAAA,CAQA,sDDkoBZ,CCpTI,uNA1UQ,0DDkoBZ,CA30BA,iRCgNQ,6DAAA,CACA,oCDgoBR,CAj1BA,wPCwNQ,mED6nBR,CAr1BA,2FC2NQ,mED6nBR,CAx1BA,2FC8NQ,mED6nBR,CC3nBQ,2HACI,iGD6nBZ,CA91BA,iRC0OQ,mDDynBR,CAn2BA,6GC+OQ,sCAAA,CACA,8CDunBR,CAv2BA,kHCmPY,4BDunBZ,CA12BA,+GCsPY,+BDunBZ,CA72BA,yGEmJI,4CAAA,CACA,wCAAA,CACA,oBAAA,CACA,kBAAA,CACA,mCAAA,CACA,sBAAA,CACA,cAAA,CACA,oBAAA,CDibA,mBAAA,CAzdA,sCAAA,CAAA,2CAAA,CAAA,4BAAA,CAAA,kCAAA,CAAA,iCAAA,CAAA,oCAAA,CAAA,mCAAA,CAAA,kDAAA,CAAA,gCAAA,CAyBA,wFAAA,CAOA,kCAAA,CA0FA,oDAAA,CA8VA,aAAA,CA7bA,mDAAA,CAIA,2CAAA,CAHA,sCAAA,CACA,gDAAA,CACA,sCD2vBJ,CCv2BI,uBAAA,yGC0HK,uBFivBP,CACF,CC11BI,yBAAA,yGCyGK,uBFqvBP,CACF,CC70BI,0BAAA,yGCwFK,qBFyvBP,CACF,CCh0BI,0BAAA,yGCuEK,wBF6vBP,CACF,CC3yBI,qHACI,iDD6yBR,CC3yBI,uHACI,iDD6yBR,CC3yBI,qHACI,iDD6yBR,CCpzBI,qHACI,sDDszBR,CCpzBI,uHACI,sDDszBR,CCpzBI,qHACI,sDDszBR,CC7zBI,qHACI,uCD+zBR,CC7zBI,uHACI,uCD+zBR,CC7zBI,qHACI,uCD+zBR,CCt0BI,qHACI,6CDw0BR,CCt0BI,uHACI,6CDw0BR,CCt0BI,qHACI,6CDw0BR,CC/0BI,qHACI,4CDi1BR,CC/0BI,uHACI,4CDi1BR,CC/0BI,qHACI,4CDi1BR,CCx1BI,qHACI,+CD01BR,CCx1BI,uHACI,+CD01BR,CCx1BI,qHACI,+CD01BR,CCj2BI,qHACI,8CDm2BR,CCj2BI,uHACI,8CDm2BR,CCj2BI,qHACI,8CDm2BR,CC12BI,qHACI,6DD42BR,CC12BI,uHACI,6DD42BR,CC12BI,qHACI,6DD42BR,CCn3BI,qHACI,2CDq3BR,CCn3BI,uHACI,2CDq3BR,CCn3BI,qHACI,2CDq3BR,CAh/BA,8lBCyJQ,wDAAA,CACA,8CD81BR,CAx/BA,0RC8JQ,0DAAA,CAEA,0DAAA,CADA,oED+1BR,CA9/BA,8KCoKQ,6DD61BR,CAjgCA,4GCuKQ,6DD61BR,CApgCA,4GC0KQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oED81BR,CA1gCA,4GCgLQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oED81BR,CC31BQ,4IAYI,qEAAA,CAXA,6GAAA,CAOA,qEAAA,CAQA,sDDi1BZ,CCngBI,yPA1UQ,0DDi1BZ,CA1hCA,oUCgNQ,6DAAA,CACA,oCD+0BR,CAhiCA,0RCwNQ,mED40BR,CApiCA,4GC2NQ,mED40BR,CAviCA,4GC8NQ,mED40BR,CC10BQ,4IACI,iGD40BZ,CA7iCA,oUC0OQ,mDDw0BR,CAljCA,8HC+OQ,sCAAA,CACA,8CDs0BR,CAtjCA,mICmPY,4BDs0BZ,CAzjCA,gICsPY,+BDs0BZ,CA5jCA,4KEuKQ,wCFw5BR,CA/jCA,sHE8KM,+CAAA,CACA,+DAAA,CACA,uCFo5BN,CApkCA,wIEmLQ,wCFo5BR,CAvkCA,sHE0LM,gCAAA,CACA,gDAAA,CACA,uCFg5BN,CA5kCA,wIE+LQ,gCFg5BR,CA/kCA,wHEsMM,0BAAA,CACA,0CAAA,CACA,4BAAA,CACA,iCF44BN,CArlCA,wHEgNM,0BAAA,CACA,0CAAA,CACA,4BAAA,CACA,iCFw4BN,CA3lCA,sHE0NM,0BAAA,CACA,0CAAA,CACA,4BAAA,CACA,iCFo4BN,CAjmCA,wIEgOQ,0BFo4BR,CApmCA,sHEuOM,0BAAA,CACA,0CAAA,CACA,4BAAA,CACA,iCFg4BN,CA1mCA,iNEgPI,4CAAA,CACA,wCAAA,CACA,wEAAA,CACA,gCAAA,CACA,mBAAA,CACA,oBAAA,CACA,oBAAA,CACA,mCAAA,CACA,2CAAA,CACA,oBAAA,CACA,mBAAA,CACA,sBAAA,CACA,0CAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CACA,oBAAA,CACA,4BAAA,CD0UA,mBAAA,CAzdA,sCAAA,CAAA,2CAAA,CAAA,4BAAA,CAAA,kCAAA,CAAA,iCAAA,CAAA,oCAAA,CAAA,mCAAA,CAAA,kDAAA,CAAA,gCAAA,CAyBA,wFAAA,CAOA,kCAAA,CA0FA,oDAAA,CA8VA,aAAA,CA7bA,mDAAA,CAIA,2CAAA,CAHA,sCAAA,CACA,gDAAA,CACA,sCDmgCJ,CC/mCI,uBAAA,iNCiOK,qBFm5BP,CACF,CCnmCI,yBAAA,iNCgNK,wBFw5BP,CACF,CCvlCI,0BAAA,iNC+LK,wBF65BP,CACF,CC3kCI,0BAAA,iNC8KK,wBFk6BP,CACF,CCvjCI,yOACI,iDD0jCR,CCxjCI,6OACI,iDD2jCR,CCzjCI,yOACI,iDD4jCR,CCnkCI,yOACI,sDDskCR,CCpkCI,6OACI,sDDukCR,CCrkCI,yOACI,sDDwkCR,CC/kCI,yOACI,uCDklCR,CChlCI,6OACI,uCDmlCR,CCjlCI,yOACI,uCDolCR,CC3lCI,yOACI,6CD8lCR,CC5lCI,6OACI,6CD+lCR,CC7lCI,yOACI,6CDgmCR,CCvmCI,yOACI,4CD0mCR,CCxmCI,6OACI,4CD2mCR,CCzmCI,yOACI,4CD4mCR,CCnnCI,yOACI,+CDsnCR,CCpnCI,6OACI,+CDunCR,CCrnCI,yOACI,+CDwnCR,CC/nCI,yOACI,8CDkoCR,CChoCI,6OACI,8CDmoCR,CCjoCI,yOACI,8CDooCR,CC3oCI,yOACI,6DD8oCR,CC5oCI,6OACI,6DD+oCR,CC7oCI,yOACI,6DDgpCR,CCvpCI,yOACI,2CD0pCR,CCxpCI,6OACI,2CD2pCR,CCzpCI,yOACI,2CD4pCR,CAvxCA,urCCyJQ,wDAAA,CACA,8CD0oCR,CApyCA,kjBC8JQ,0DAAA,CAEA,0DAAA,CADA,oED6oCR,CA5yCA,2VCoKQ,6DD4oCR,CAhzCA,uNCuKQ,6DD6oCR,CApzCA,uNC0KQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oED+oCR,CA3zCA,uNCgLQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oEDgpCR,CC7oCQ,uRAYI,qEAAA,CAXA,6GAAA,CAOA,qEAAA,CAQA,sDDooCZ,CCtzBI,gfA1UQ,0DDsoCZ,CA/0CA,qoBCgNQ,6DAAA,CACA,oCDuoCR,CAx1CA,kjBCwNQ,mEDsoCR,CA91CA,uNC2NQ,mEDuoCR,CAl2CA,uNC8NQ,mEDwoCR,CCtoCQ,uRACI,iGDyoCZ,CA12CA,qoBC0OQ,mDDwoCR,CAl3CA,2PC+OQ,sCAAA,CACA,8CDuoCR,CAv3CA,qQCmPY,4BDwoCZ,CA33CA,+PCsPY,+BDyoCZ,CA/3CA,2OEiRM,+BAAA,CACA,8CAAA,CACA,gCAAA,CACA,4BFknCN,CAt4CA,+OE2RM,2BAAA,CACA,2CAAA,CACA,4BAAA,CACA,sBAAA,CACA,wCF+mCN,CA94CA,+OEsSM,2BAAA,CACA,0CAAA,CACA,4BAAA,CACA,sBAAA,CACA,wCF4mCN,CAt5CA,2OEiTM,2BAAA,CACA,0CAAA,CACA,4BAAA,CACA,sBAAA,CACA,wCFymCN,CA95CA,2OE4TM,2BAAA,CACA,0CAAA,CACA,4BAAA,CACA,sBAAA,CACA,wCFsmCN,CC77BI,WACI,mCAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD+7BR,CCn8BI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDq8BR,CAl7CA,0MIYI,wCAAA,CACA,0CJ06CJ,CAv7CA,0MIkBI,wCJy6CJ,CA37CA,wNIuBI,8CJw6CJ,CA/7CA,4MI6BI,yCAAA,CACA,6BJs6CJ,CAp8CA,4GIiCI,+CJs6CJ,CAv8CA,0MIuCI,yCAAA,CACA,6BJo6CJ,CA58CA,4GI2CI,+CJo6CJ,CA/8CA,0MIiDI,kDAAA,CACA,8CJk6CJ,CAp9CA,4GIqDI,iDJk6CJ,CAv9CA,0MI2DI,yCAAA,CACA,6BJg6CJ,CA59CA,4GI+DI,+CJg6CJ,CCn3CI,0BAAA,wFEpDE,qBH26CJ,CACF,CC37CI,yBAAA,wFEwBI,iBAAA,CAAoB,iBHw6C1B,CACF,CCt8CI,uBAAA,wFDzBK,oBAm+CP,CACF,CCz7CI,yBAAA,wFD1CK,oBAu+CP,CACF,CC56CI,0BAAA,wFD3DK,oBA2+CP,CACF,CC/5CI,0BAAA,wFD5EK,oBA++CP,CACF,CCn8CI,0BAAA,wFDRI,8BAAA,CACA,iDAAA,CACA,kCA+8CN,CACF,CA58CA,wFACI,sCA88CJ,CA18CI,qCAAA,wFACI,oDA68CN,CACF",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/gen9-mixins';\n\n.globalNavigationRoot {\n    .resetVariables();\n    @import './typography.less';\n    @import '@rsgweb/legacy-design-system/less/gen9-vars';\n\n    --font-family-h: HelveticaNowDisplayBold;\n    --font-family-body: HelveticaNowText;\n\n    --blacks-border-color: #282828;\n    --text-light: #e8e8e8;\n\n    .sm({--base-rem-size: 16px;});\n    .md({--base-rem-size: 18px;});\n    .lg({--base-rem-size: 20px;});\n    .xl({--base-rem-size: 22px;});\n\n    --rem-025: calc(var(--base-rem-size) * 0.25);\n    --rem-05: calc(var(--base-rem-size) * 0.5);\n    --rem-075: calc(var(--base-rem-size) * 0.75);\n    --rem-1: var(--base-rem-size);\n    --rem-125: calc(var(--base-rem-size) * 1.25);\n    --rem-15: calc(var(--base-rem-size) * 1.5);\n    --rem-2: calc(var(--base-rem-size) * 2);\n    --rem-3: calc(var(--base-rem-size) * 3);\n    --rem-4: calc(var(--base-rem-size) * 4);\n    --rem-6: calc(var(--base-rem-size) * 6);\n    --rem-8: calc(var(--base-rem-size) * 8);\n\n    --spacing-xxs: var(--rem-025);\n    --spacing-xs: var(--rem-05);\n    --spacing-sm: var(--rem-1);\n    --spacing-md: var(--rem-2);\n    --spacing-lg: var(--rem-4);\n    --spacing-xl: var(--rem-8);\n\n    --global-navigation-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.7);\n\n    font-family: var(--font-family-body);\n\n    --global-navigation-height: 80px;\n\n    --base-rem-size: var(--base-rem-size);\n    --mobile-nav-padding-sides: 32px;\n    --mobile-nav-item-padding: 20px var(--mobile-nav-padding-sides);\n\n    --nav-icon-size: var(--rem-1);\n    --nav-link-size: calc(var(--base-rem-size) * 0.75);\n    --sub-nav-indent: var(--spacing-sm);\n    --sub-nav-min-width: 240px;\n\n    .mdMax ({\n        --nav-icon-size: var(--rem-125);\n        --nav-link-size: calc(var(--base-rem-size) * 1.25);\n        --sub-nav-indent: var(--spacing-md);\n    });;\n}\n\n.globalNavigationSpacer {\n    height: var(--global-navigation-height);\n}\n\n.globalNavigationSearchSpacer {\n    @media screen and (min-width: 1024px) {\n        height: calc(var(--global-navigation-height) + 140px);\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n", "/*\nThis CSS resource incorporates links to web font and font software which is the valuable copyrighted property of House Industries and/or its suppliers. You expressly agree to not copy, install, redistribute, convert, modify, or reverse engineer this font software or the fonts rendered thereby. Please contact House Industries with any questions regarding Web Fonts: http://www.houseind.com\n*/\n\n@import './mixins.less';\n\n// RSG Fonts\n.loadFont(HelveticaNowText, 400, normal, HelveticaNowText);\n.loadFont(HelveticaNowText, 400, italic, HelveticaNowTextIt);\n.loadFont(HelveticaNowText, 700, normal, HelveticaNowTextBold);\n.loadFont(HelveticaNowDisplayBold, 700);\n.loadFont(HelveticaNowDisplayMedium);\n.loadFont(HelveticaNeueLTW05, 400, normal, HelveticaNeueLTW05-65Medium);\n.loadFont(HelveticaNeueLTW05, 400, italic, HelveticaNeueLTW05-66MediumIt);\n.loadFont(HelveticaNeueLTW07, 400, normal, HelveticaNeueLTW07-55Roman);\n.loadFont(HelveticaNeueLTW07, 400, italic, HelveticaNeueLTW07-56Italic);\n.loadFont(HelveticaNeueLTW07, 700, normal, HelveticaNeueLTW07-75Bold);\n.loadFont(HelveticaNeueLTW07, 700, italic, HelveticaNeueLTW07-76BoldIt);\n.loadFont(HelveticaNeueLTW07-85Heavy, 700, normal);\n.loadFont(NeueHelveticaPaneuropean, 400, normal, HelveticaPanEuro-Md);\n.loadFont(SackersGothicW01-Square);\n.loadFont(Cabrito-Nordem);\n.loadFont(Droid-Serif-Pro);\n\n.loadFont(NotoSansSC, 400, normal, Noto-Sans-SC-400);\n.loadFont(NotoSansSC, 500, normal, Noto-Sans-SC-500);\n.loadFont(NotoSansSC, 700, normal, Noto-Sans-SC-700);\n.loadFont(NotoSansSC, 900, normal, Noto-Sans-SC-900);\n\n.loadFont(NotoSansTC, 400, normal, Noto-Sans-TC-400);\n.loadFont(NotoSansTC, 500, normal, Noto-Sans-TC-500);\n.loadFont(NotoSansTC, 700, normal, Noto-Sans-TC-700);\n.loadFont(NotoSansTC, 900, normal, Noto-Sans-TC-900);\n\n.loadFont(NotoSansJP, 400, normal, Noto-Sans-JP-400);\n// .loadFontWoff2(NotoSansJP, 400, normal, Noto-Sans-JP-400);\n.loadFont(NotoSansJP, 500, normal, Noto-Sans-JP-500);\n.loadFont(NotoSansJP, 700, normal, Noto-Sans-JP-700);\n.loadFont(NotoSansJP, 900, normal, Noto-Sans-JP-900);\n\n.loadFont(NotoSansKR, 400, normal, Noto-Sans-KR-400);\n.loadFont(NotoSansKR, 500, normal, Noto-Sans-KR-500);\n.loadFont(NotoSansKR, 700, normal, Noto-Sans-KR-700);\n.loadFont(NotoSansKR, 900, normal, Noto-Sans-KR-900);\n\n.loadFont(NotoSerifJP, 700, normal, NotoSerifJP-Black);\n.loadFont(NotoSerifJP, 900, normal, Noto-Serif-JP-900);\n\n.loadFont(NotoSerifKR, 700, normal, Noto-Serif-KR-900);\n.loadFont(NotoSerifKR, 900, normal, Noto-Serif-KR-900);\n\n.loadFont(NotoSerifSC, 700, normal, NotoSerifSC-Black);\n.loadFont(NotoSerifSC, 900, normal, Noto-Serif-SC-900);\n\n.loadFont(NotoSerifTC, 700, normal, NotoSerifTC-Black);\n.loadFont(NotoSerifTC, 900, normal, Noto-Serif-TC-900);\n\n// GTA fonts\n.loadFont(ChaletComprime, 400, normal, CHALETCOMPRIME-COLOGNESIXTYSC);\n.loadFont(ChaletComprime, 700, normal, ChaletComprime-HongKongSixty);\n.loadFont(Chalet, 400, normal, Chalet-LondonSixty);\n.loadFont(Chalet, 700, normal, Chalet-NewYorkSixty);\n.loadFont(Pricedown, 700, normal, Pricedown);\n.loadFont(NeueHelveticaW05, 400, normal, NeueHelveticaW05-Condensed);\n.loadFont(NeueHelveticaW05, 700, normal, NeueHelveticaW05-CondensedBold);\n.loadFont(NeueHelveticaW05, 900, normal, NeueHelveticaW05-CondensedExtraBlack);\n.loadFont(FrizQuadrataW05, 400, normal, FrizQuadrataW05-Regular);\n.loadFont(FrizQuadrataW05, 400, italic, FrizQuadrataW05-Italic);\n.loadFont(FrizQuadrataW05, 700, normal, FrizQuadrataW05-Bold);\n.loadFont(FrizQuadrataW05, 700, italic, FrizQuadrataW05-BoldItalic);\n.loadFont(CorporateW05, 400, normal, CorporateURWRegW05-Regular);\n.loadFont(NimbusSansW05, 400, normal, NimbusSansW05-Regular);\n.loadFont(NimbusSansW05, 700, normal, NimbusSansW05-Bold);\n.loadFont(EurostileNextW05, 700, normal, EurostileNextW05-ExtBold);\n.loadFont(Diploma, 400, normal, Diploma);\n.loadFont(BrushScriptMT, 400, normal, BrushScriptMT);\n.loadFont(BankGothicBT, 400, normal, BankGothicBT-Medium);\n.loadFont(MeltdownRegular, 400, normal, MeltdownRegular-Normal);\n.loadFont(SharkSnackRegular, 400, normal, SharkSnackRegular-Normal);\n.loadFont(GTAArtDeco, 400, normal, GTAArtDeco-Regular);\n.loadFont(GTAArtDeco, 500, normal, GTAArtDeco-Medium);\n\n// RDR Fonts\n.loadFont(RDRLino-Regular);\n.loadFont(HapnaSlabSerif, 400, normal, HapnaSlabSerif-DemiBold);\n.loadFont(HapnaSlabSerif, 700, normal, HapnaSlabSerif-ExtraBold);\n.loadFont(nightmar, 100, normal);\n.loadFont(RDRCatalogueBold, 700, normal, RDRCatalogueBold-Bold);\n.loadFont(RDRUltraHeadline, 400, normal, RDRUltraHeadline);\n\n.setRootFontSizing();\n\n* {\n    box-sizing: border-box;\n}\na {\n    color: inherit;\n    text-decoration: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n    margin: 0;\n}\n\nfigure {\n    margin: 0;\n}\n\ncaption,\nfigcaption {\n    display: block;\n    margin: var(--grid-gap-static-sm) auto 0;\n    .handlePadding(var(--padding-sides), initial);\n    font-family: var(--font-family-std);\n    font-size: var(--font-size-2);\n    text-align: center;\n    font-style: italic;\n    color: var(--body-color);\n\n    p {\n        display: block;\n    }\n}\n\n// RSG Typography (default)\n--font-family-std: var(--rsg-font-family-std);\n--font-family-h: var(--rsg-font-family-h);\n--font-family-h-halloween: nightmar;\n\n// Russian\n:lang(ru_ru) {\n    --font-family-h-halloween: RDRLino-Regular;\n}\n\n// Korean\n:lang(ko_kr) {\n    word-break: keep-all;\n}\n\n.handleFontDeclarations;\n.handleColors;\n\n// GTA Type Scale\n.gta({\n    --font-family-std: var(--gta-font-family-std);\n    --font-family-h: var(--gta-font-family-h);\n    --letter-spacing-h: 0;\n    --line-height-h1: 1;\n    --font-weight-newswire-subtitle: 400;\n    --letter-spacing-std: 0;\n    --color-h: #fff;\n    --body-color: #e8e8e8;\n\n    .themeDark;\n\n    .sm({--header-numerator: 20.8;});\n    .md({--header-numerator: 23.4;});\n    .lg({--header-numerator: 26;});\n    .xl({--header-numerator: 29.25;});\n\n    .handleFontDeclarations;\n    .handleColors;\n\n    .badge {\n        font-family: var(--gta-font-family-badge);\n    }\n});\n\n// Polish\n:lang(pl_pl) {\n    .gta({\n      --font-family-h: ChaletComprime, NeueHelveticaW05;\n      --font-family-newswire-subtitle: ChaletComprime, NeueHelveticaW05;\n      --badge-font: Pricedown, NeueHelveticaW05;\n   });\n    [data-context='newswire-article'] h1 {\n        --font-family-h: NeueHelveticaPaneuropean;\n    }\n}\n\n// Russian\n:lang(ru_ru) {\n    .gta({\n      --font-family-h: NeueHelveticaW05;\n      --font-family-newswire-subtitle: NeueHelveticaW05;\n      --badge-font: Pricedown, NeueHelveticaW05;\n   });\n    [data-context='newswire-article'] h1 {\n        --font-family-h: NeueHelveticaW05;\n    }\n}\n\n// Chinese (Simplified)\n:lang(zh_hans) {\n    .gta({\n      --font-family-h: NotoSansSC;\n      --font-family-newswire-subtitle: NotoSansSC;\n      --font-family-std: NotoSansSC;\n      --badge-font: Pricedown, NotoSansSC;\n   });\n}\n\n// Chinese (Traditional)\n:lang(zh_hant) {\n    .gta({\n      --font-family-h: NotoSansTC;\n      --font-family-newswire-subtitle: NotoSansTC;\n      --font-family-std: NotoSansTC;\n      --badge-font: Pricedown, NotoSansTC;\n   });\n}\n\n// Japanese\n:lang(ja_jp) {\n    .gta({\n      --font-family-h: NotoSansJP;\n      --font-family-newswire-subtitle: NotoSansJP;\n      --font-family-std: NotoSansJP;\n      --badge-font: Pricedown, NotoSansJP;\n   });\n    [data-context='newswire-article'] h1 {\n        --font-family-h: NotoSansJP;\n    }\n}\n\n// Korean\n:lang(ko_kr) {\n    .gta({\n      --font-family-h: NotoSansKR;\n      --font-family-newswire-subtitle: NotoSansKR;\n      --font-family-std: NotoSansKR;\n      --badge-font: Pricedown, NotoSansKR;\n   });\n}\n\n// RDR Type Scale\n.rdr({\n    --font-family-std: var(--rdr-font-family-std);\n    --font-family-h: var(--rdr-font-family-h);\n    --font-family-newswire-subtitle: var(--rdr-font-family-newswire-subtitle);\n    --area-font: var(--rdr-area-font);\n    --font-weight-h: 400;\n    --font-weight-h1: 400;\n    --font-weight-h3: 400;\n    --font-weight-newswire-subtitle: 700;\n    --h3-numerator-override-newswire-subtitle: 1;\n    --letter-spacing-h: 0;\n    --line-height-h: 1.2;\n    --letter-spacing-std: 0;\n    --text-transform-newswire-subtitle: initial;\n    --color-h: #cc0000;\n    --color-h3: white;\n    --color-h4: white;\n    --body-color: #e8e8e8;\n    --text-transform-h: uppercase;\n\n    .themeDark;\n\n    .sm({--header-numerator: 15;});\n    .md({--header-numerator: 16.88;});\n    .lg({--header-numerator: 18.75;});\n    .xl({--header-numerator: 21.09;});\n\n    .handleFontDeclarations;\n    .handleColors;\n});\n\n// Polish\n:lang(pl_pl) {\n    .rdr({\n      --font-family-h: RDRLino-Regular;\n      --font-family-newswire-subtitle: HapnaSlabSerif;\n      --font-family-std: HapnaSlabSerif;\n      --badge-font: RDRLino-Regular;\n   });\n}\n\n// Chinese (Simplified)\n:lang(zh_hans) {\n    .rdr({\n      --font-family-h: NotoSerifSC;\n      --font-family-newswire-subtitle: NotoSansSC, ;\n      --font-family-std: NotoSansSC;\n      --area-font: NotoSansSC;\n      --badge-font: RDRLino-Regular, NotoSerifSC;\n   });\n}\n\n// Chinese (Traditional)\n:lang(zh_hant) {\n    .rdr({\n      --font-family-h: NotoSerifTC;\n      --font-family-newswire-subtitle: NotoSansTC;\n      --font-family-std: NotoSansTC;\n      --area-font: NotoSansTC;\n      --badge-font: RDRLino-Regular, NotoSerifTC;\n   });\n}\n\n// Japanese\n:lang(ja_jp) {\n    .rdr({\n      --font-family-h: NotoSerifJP;\n      --font-family-newswire-subtitle: NotoSansJP;\n      --font-family-std: NotoSansJP;\n      --area-font: NotoSansJP;\n      --badge-font: RDRLino-Regular, NotoSerifTC;\n   });\n}\n\n// Korean\n:lang(ko_kr) {\n    .rdr({\n      --font-family-h: NotoSerifKR;\n      --font-family-newswire-subtitle: NotoSansKR;\n      --font-family-std: NotoSansKR;\n      --area-font: NotoSansKR;\n      --badge-font: RDRLino-Regular, NotoSerifKR;\n   });\n}\n", "// Font Family\n--font-family-body: 'Chalet';\n--font-family-h: 'ChaletComprime';\n\n// Font Weight\n--font-weight-regular: 400;\n--font-weight-bold: 700;\n\n// Letter Spacing\n--letter-spacing-body: 0;\n--letter-spacing-h: 0;\n\n// Line Height\n--line-height-sm: 1;\n--line-height-md: 1.1;\n--line-height-lg: 1.6;\n\n// Colors\n--black-200: #000000;\n--black-100: #121212;\n--black-65: rgba(18, 18, 18, 0.65);\n--black-40: rgba(18, 18, 18, 0.4);\n--black-15: rgba(18, 18, 18, 0.15);\n--text-dark: #2d2d2d;\n--border-color: #2d2d2d;\n\n--white-100: #ffffff;\n--white-65: rgba(255, 255, 255, 0.65);\n--white-40: rgba(255, 255, 255, 0.4);\n--white-15: rgba(255, 255, 255, 0.15);\n--text-light: #e8e8e8;\n\n--focusring-blue: blue;\n--red: #e03232;\n--circoloco-red: #eb1818;\n--rockstar-gold: #fcaf17;\n--playstation-blue: #00439c;\n--microsoft-green: #387a26;\n--pc-legacy: #b2b2b2;\n/* #if PCALT */\n--pc-enhanced: #beb279;\n/* #endif */\n\n--color-h: var(--white-100);\n--color-body: var(--text-light);\n\n--green-light: #c1f7bd;\n--green-dark: #81da85;\n\n// Scrollbar Colors\n--scroll-thumb-color: #7d7d7d;\n--scroll-track-color: transparent;\n\n// Max-Widths\n--max-width-sm: 640px;\n--max-width-md: 1088px;\n--max-width-lg: 1920px;\n--max-width-xl: 2560px;\n.xxl({--max-width-md: 1440px;});\n\n// Spacing\n--spacing-xxs: 0.25rem;\n--spacing-xs: 0.5rem;\n--spacing-sm: 1rem;\n--spacing-md: 2rem;\n--spacing-lg: 4rem;\n--spacing-xl: 8rem;\n.smMax({--spacing-lg: 2rem; --spacing-xl: 4rem;});\n\n// Grid Gap\n--grid-gap-xxs: var(--spacing-xxs);\n--grid-gap-xs: var(--spacing-xs);\n--grid-gap-sm: var(--spacing-sm);\n--grid-gap-md: var(--spacing-md);\n--grid-gap-lg: var(--spacing-lg);\n--grid-gap-xl: var(--spacing-xl);\n\n// Padding\n--padding-xxs: var(--spacing-xxs);\n--padding-xs: var(--spacing-xs);\n--padding-sm: var(--spacing-sm);\n--padding-md: var(--spacing-md);\n--padding-lg: var(--spacing-lg);\n--padding-xl: var(--spacing-xl);\n\n// Margin\n--margin-xxs: var(--spacing-xxs);\n--margin-xs: var(--spacing-xs);\n--margin-sm: var(--spacing-sm);\n--margin-md: var(--spacing-md);\n--margin-lg: var(--spacing-lg);\n--margin-xl: var(--spacing-xl);\n\n// Border Radius\n--border-radius-xs: 2px;\n--border-radius-sm: 4px;\n--border-radius-md: 8px;\n--border-radius-lg: 16px;\n\n// Gradients\n--gradient-overlay-bottom: linear-gradient(\n    180.08deg,\n    rgba(0, 0, 0, 0) 25%,\n    rgba(0, 0, 0, 0.5) 65%,\n    rgba(0, 0, 0, 0.6) 100%\n);\n--gradient-overlay-right: linear-gradient(\n    270deg,\n    rgba(0, 0, 0, 0.9) 0%,\n    rgba(0, 0, 0, 0) 100%\n);\n\n// Z-indicies\n--promo-banner-z-index: 11500;\n", "/*\nThis CSS resource incorporates links to web font and font software which is the valuable copyrighted property of House Industries and/or its suppliers. You expressly agree to not copy, install, redistribute, convert, modify, or reverse engineer this font software or the fonts rendered thereby. Please contact House Industries with any questions regarding Web Fonts: http://www.houseind.com\n*/\n\n@import '@rsgweb/legacy-design-system/less/gen9-mixins';\n@import '@rsgweb/legacy-design-system/less/typography';\n\n.loadFont(HelveticaNowDisplayBold, 700, normal);\n.loadFont(HelveticaNowText, 400, normal);\n\n// Localized Fonts\n// Polish\n:lang(pl_pl),\n:lang(pl-PL) {\n    --font-family-h: NeueHelveticaPaneuropean;\n    --font-family-std: NeueHelveticaPaneuropean;\n}\n// Russian\n:lang(ru_ru),\n:lang(ru-RU) {\n    --font-family-h: NeueHelveticaPaneuropean;\n}\n\n[data-type-lang='pl'],\n[data-type-lang='ru'] {\n    font-family: NeueHelveticaPaneuropean !important;\n}\n\n// Chinese (Simplified)\n:lang(zh_hans),\n:lang(zh-CN) {\n    --font-family-h: ChaletComprime, NotoSansSC;\n    --font-family-body: NotoSansSC;\n}\n[data-type-lang='zh'] {\n    font-family: ChaletComprime, NotoSansSC !important;\n}\n\n// Chinese (Traditional)\n:lang(zh_tw),\n:lang(zh-TW) {\n    --font-family-h: ChaletComprime, NotoSansTC;\n    --font-family-body: NotoSansTC;\n}\n[data-type-lang='tw'] {\n    font-family: ChaletComprime, NotoSansTC !important;\n}\n\n// Japanese\n:lang(ja_jp),\n:lang(ja-JP) {\n    --font-family-h: HelveticaNowDisplayBold, NotoSansJP;\n    --font-family-body: HelveticaNowText, NotoSansJP;\n}\n[data-type-lang='jp'] {\n    font-family: HelveticaNowText, NotoSansJP !important;\n}\n\n// Korean\n:lang(ko_kr),\n:lang(ko-KR) {\n    --font-family-h: ChaletComprime, NotoSansKR;\n    --font-family-body: NotoSansKR;\n}\n[data-type-lang='kr'] {\n    font-family: ChaletComprime, NotoSansKR !important;\n}\n"],
        sourceRoot: ""
      }]), ye.locals = {
        pillBtn: "rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e",
        selected: "rockstargames-modules-core-headere3891b1e9b084d58f6e1afb5fa14ab12",
        globalNavigationRoot: "rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b",
        large: "rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79",
        badge: "rockstargames-modules-core-headerab6bac3e7cd6aeeec5fe34375b77b1a2",
        globalNavigationSpacer: "rockstargames-modules-core-headerd45d3098c677dd2ec79f50475413ab8e",
        globalNavigationSearchSpacer: "rockstargames-modules-core-headere22f06c8b88ebe362a876f197dca5953"
      };
      const ja = ye
    },
    58865: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052{align-items:center;display:flex}.siteHeaderContainer .rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052 button{background:transparent;border:none;cursor:pointer;display:flex;flex-flow:column;height:var(--rem-15);justify-content:center;padding:0;position:relative;width:var(--rem-15)}.siteHeaderContainer .rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052 span{background:#fff;border-radius:16px;height:2px;position:absolute;transform-origin:left center;transition:.2s;width:100%}.siteHeaderContainer .rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052 span:first-child{transform:translateY(-400%)}.siteHeaderContainer .rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052 span:last-child{transform:translateY(400%)}.siteHeaderContainer .rockstargames-modules-core-headerbd080f06ee310dbeb7602106d104aa1b span:first-child,.siteHeaderContainer .rockstargames-modules-core-headerbd080f06ee310dbeb7602106d104aa1b span:last-child{transform:translateY(0)}", "", {
        version: 3,
        sources: ["webpack://./src/components/Hamburger/index.less"],
        names: [],
        mappings: "AAAA,wFAEI,kBAAA,CADA,YAEJ,CAHA,+FAaQ,sBAAA,CADA,WAAA,CALA,cAAA,CAEA,YAAA,CACA,gBAAA,CAJA,oBAAA,CAKA,sBAAA,CAGA,SAAA,CANA,iBAAA,CAHA,mBAUR,CAfA,6FAsBQ,eAAA,CAHA,kBAAA,CACA,UAAA,CACA,iBAAA,CAGA,4BAAA,CADA,cAAA,CALA,UAMR,CAEQ,yGACI,2BAAZ,CAGQ,wGACI,0BADZ,CAQQ,iNAEI,uBANZ",
        sourcesContent: [".hamburger {\n    display: flex;\n    align-items: center;\n\n    button {\n        width: var(--rem-15);\n        height: var(--rem-15);\n        cursor: pointer;\n        position: relative;\n        display: flex;\n        flex-flow: column;\n        justify-content: center;\n        border: none;\n        background: transparent;\n        padding: 0;\n    }\n\n    span {\n        width: 100%;\n        border-radius: 16px;\n        height: 2px;\n        position: absolute;\n        background: white;\n        transition: 0.2s;\n        transform-origin: left center;\n\n        &:first-child {\n            transform: translateY(-400%);\n        }\n\n        &:last-child {\n            transform: translateY(400%);\n        }\n    }\n}\n\n.open {\n    span {\n        &:first-child,\n        &:last-child {\n            transform: translateY(0px);\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        hamburger: "rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052",
        open: "rockstargames-modules-core-headerbd080f06ee310dbeb7602106d104aa1b"
      };
      const s = i
    },
    94595: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerb9149341b2c77373002bd1b206231069{-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);background:rgba(0,0,0,.85);border-bottom:1px solid var(--blacks-border-color);color:#fff;display:flex;height:var(--global-navigation-height);opacity:1;padding:0 var(--rem-4);position:fixed;top:calc(var(--promo-banner-height, 0px) + var(--promo-banner-top, 0px));transition:top .3s ease-in-out;width:100%;z-index:99}.siteHeaderContainer [data-show-more-content] .rockstargames-modules-core-headerb9149341b2c77373002bd1b206231069{top:calc(-1 * var(--global-navigation-height, 0px))}.siteHeaderContainer [data-header-initialized=false] .rockstargames-modules-core-headerb9149341b2c77373002bd1b206231069{opacity:0;transition-duration:0s}.siteHeaderContainer .rockstargames-modules-core-headerec46a8779f24ebce8cd66175dfa225f8{flex-grow:1;overflow:hidden}.siteHeaderContainer .rockstargames-modules-core-headere7388ff62f2c8d2f6ecfc70019310faa{flex:1}.siteHeaderContainer .rockstargames-modules-core-headerbc99b8e4243957f58ee357454d77a14b{align-items:center;display:flex;flex:1}.siteHeaderContainer .rockstargames-modules-core-headera949a457f9b9536c84492c22ad8ab91e{opacity:0;pointer-events:none;position:absolute;top:100%;transform:translateY(-10px);transition:opacity .35s ease-out,transform 0s ease .5s}.siteHeaderContainer .rockstargames-modules-core-headera949a457f9b9536c84492c22ad8ab91e[data-qa-opened=true]{opacity:1;pointer-events:auto;transform:translateY(0);transition:opacity .15s ease,transform .15s ease}", "", {
        version: 3,
        sources: ["webpack://./src/components/Header/index.less"],
        names: [],
        mappings: "AAAA,wFAKI,kCAAA,CAAA,0BAAA,CADA,0BAAA,CAGA,kDAAA,CADA,UAAA,CALA,YAAA,CACA,sCAAA,CAmBA,SAAA,CAlBA,sBAAA,CAMA,cAAA,CAIA,wEAAA,CAOA,8BAAA,CAVA,UAAA,CAFA,UAMJ,CACI,iHACI,mDACR,CAKI,wHAEI,SAAA,CADA,sBAFR,CAOA,wFACI,WAAA,CACA,eALJ,CAQA,wFACI,MANJ,CASA,wFAEI,kBAAA,CADA,YAAA,CAEA,MAPJ,CAUA,wFAGI,SAAA,CAIA,mBAAA,CANA,iBAAA,CACA,QAAA,CAMA,2BAAA,CAJA,sDANJ,CAYI,6GACI,SAAA,CACA,mBAAA,CAIA,uBAAA,CAHA,gDATR",
        sourcesContent: [".header {\n    display: flex;\n    height: var(--global-navigation-height);\n    padding: 0 var(--rem-4);\n    background: rgba(0, 0, 0, 0.85);\n    backdrop-filter: blur(25px);\n    color: white;\n    border-bottom: 1px solid var(--blacks-border-color);\n    z-index: 99; // one less than expanded modals\n    position: fixed;\n    width: 100%;\n\n    \n    top: calc(var(--promo-banner-height, 0px) + var(--promo-banner-top, 0px));\n\n    [data-show-more-content] & {\n        top: calc(-1 * var(--global-navigation-height, 0px));\n    }\n    \n\n    transition: top 0.3s ease-in-out;\n    opacity: 1;\n    [data-header-initialized='false'] & {\n        transition-duration: 0s;\n        opacity: 0;\n    }\n}\n\n.fluid {\n    flex-grow: 1;\n    overflow: hidden;\n}\n\n.fixed {\n    flex: 1;\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    flex: 1;\n}\n\n.quickAccessWrapper {\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    transition:\n        opacity 0.35s ease-out,\n        transform 0s ease 0.5s;\n    pointer-events: none;\n    transform: translateY(-10px);\n\n    &[data-qa-opened='true'] {\n        opacity: 1;\n        pointer-events: auto;\n        transition:\n            opacity 0.15s ease,\n            transform 0.15s ease;\n        transform: translateY(0px);\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        header: "rockstargames-modules-core-headerb9149341b2c77373002bd1b206231069",
        fluid: "rockstargames-modules-core-headerec46a8779f24ebce8cd66175dfa225f8",
        fixed: "rockstargames-modules-core-headere7388ff62f2c8d2f6ecfc70019310faa",
        title: "rockstargames-modules-core-headerbc99b8e4243957f58ee357454d77a14b",
        quickAccessWrapper: "rockstargames-modules-core-headera949a457f9b9536c84492c22ad8ab91e"
      };
      const s = i
    },
    84481: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer[data-disallow-body-scroll]{overflow-y:hidden}.siteHeaderContainer .rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3{--nav-base-font-size:16px;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);background:rgba(0,0,0,.85);border-bottom:1px solid var(--blacks-border-color);color:var(--white-100);display:flex;font-size:var(--base-rem-size);height:var(--global-navigation-height);justify-content:space-between;opacity:1;padding:0 32px;position:fixed;top:0;top:calc(var(--promo-banner-height, 0px) + var(--promo-banner-top, 0px));transition:top .3s ease-in-out;width:100%;z-index:99}.siteHeaderContainer [data-show-more-content] .rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3{top:calc(-1 * var(--global-navigation-height, 0px))}.siteHeaderContainer [data-header-initialized=false] .rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3{opacity:0;transition-duration:0s}.siteHeaderContainer .rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3>div{flex:1}.siteHeaderContainer .rockstargames-modules-core-headerb77426232e2ade0dcb72f4d2764215e8{align-items:center;display:flex;justify-content:space-around}.siteHeaderContainer .rockstargames-modules-core-headerd6629e9cc98efe8997d0620a9275c627{background:#000;color:var(--white-100);left:0;max-height:100vh;overflow-x:hidden;overflow-y:auto;position:fixed;right:0;top:calc(var(--global-navigation-height) + var(--promo-banner-height, 0px) + var(--promo-banner-top, 0px));transition:top .3s ease-in-out;z-index:99}.siteHeaderContainer .rockstargames-modules-core-headerd6629e9cc98efe8997d0620a9275c627.rockstargames-modules-core-headeraa4c60d9207e8327ebc788a3e1d56d5b{bottom:0}.siteHeaderContainer [data-show-more-content] .rockstargames-modules-core-headerd6629e9cc98efe8997d0620a9275c627{top:0}.siteHeaderContainer .rockstargames-modules-core-headerc5b9f47efbb73b2dfd9c68013ca5bed4.rockstargames-modules-core-headerba19960a101d69f671900a795029cf7b{opacity:.3;pointer-events:none}.siteHeaderContainer .rockstargames-modules-core-headerff8c8312206e01ca7503d1914e699e1d{background-color:rgba(0,0,0,.8);height:100%;left:0;position:absolute;top:0;width:100%;z-index:2}", "", {
        version: 3,
        sources: ["webpack://./src/components/HeaderMobile/index.less"],
        names: [],
        mappings: "AAAA,gDACI,iBACJ,CAEA,wFACI,yBAAA,CAOA,kCAAA,CAAA,0BAAA,CADA,0BAAA,CAGA,kDAAA,CADA,sBAAA,CALA,YAAA,CADA,8BAAA,CAEA,sCAAA,CAQA,6BAAA,CAcA,SAAA,CArBA,cAAA,CAMA,cAAA,CAGA,KAAA,CAGA,wEAAA,CAOA,8BAAA,CAXA,UAAA,CAHA,UAMJ,CAGI,iHACI,mDADR,CAQI,wHAEI,SAAA,CADA,sBALR,CASI,4FACI,MAPR,CAWA,wFAEI,kBAAA,CADA,YAAA,CAEA,4BATJ,CAYA,wFAKI,eAAA,CAIA,sBAAA,CANA,MAAA,CAGA,gBAAA,CAEA,iBAAA,CADA,eAAA,CANA,cAAA,CAGA,OAAA,CAaA,0GAAA,CAPA,8BAAA,CARA,UADJ,CAWI,0JACI,QATR,CAkBI,iHACI,KAhBR,CAsBI,0JACI,UAAA,CACA,mBApBR,CAwBA,wFAMI,+BAAA,CAJA,WAAA,CAGA,MAAA,CAJA,iBAAA,CAGA,KAAA,CADA,UAAA,CAIA,SAtBJ",
        sourcesContent: ["html[data-disallow-body-scroll] {\n    overflow-y: hidden;\n}\n\n.header {\n    --nav-base-font-size: 16px;\n\n    font-size: var(--base-rem-size);\n    display: flex;\n    height: var(--global-navigation-height);\n    padding: 0 32px;\n    background: rgba(0, 0, 0, 0.85);\n    backdrop-filter: blur(25px);\n    color: var(--white-100);\n    border-bottom: 1px solid var(--blacks-border-color);\n    z-index: 99; // one less than expanded modals\n    position: fixed;\n    justify-content: space-between;\n    width: 100%;\n    top: 0;\n\n    \n    top: calc(var(--promo-banner-height, 0px) + var(--promo-banner-top, 0px));\n\n    [data-show-more-content] & {\n        top: calc(-1 * var(--global-navigation-height, 0px));\n    }\n    \n\n    transition: top 0.3s ease-in-out;\n\n    opacity: 1;\n    [data-header-initialized='false'] & {\n        transition-duration: 0s;\n        opacity: 0;\n    }\n\n    & > div {\n        flex: 1;\n    }\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.nav {\n    position: fixed;\n    z-index: 99; // same z-index as header\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 1);\n    max-height: 100vh;\n    overflow-y: auto;\n    overflow-x: hidden;\n    color: var(--white-100);\n    transition: top 0.3s ease-in-out;\n\n    &.fullMenuOpen {\n        bottom: 0;\n    }\n\n    \n    top: calc(\n        var(--global-navigation-height) + var(--promo-banner-height, 0px) +\n            var(--promo-banner-top, 0px)\n    );\n\n    [data-show-more-content] & {\n        top: 0;\n    }\n    \n}\n\n.navContainer {\n    &.searchOpen {\n        opacity: 0.3;\n        pointer-events: none;\n    }\n}\n\n.overlay {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 2;\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        header: "rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3",
        title: "rockstargames-modules-core-headerb77426232e2ade0dcb72f4d2764215e8",
        nav: "rockstargames-modules-core-headerd6629e9cc98efe8997d0620a9275c627",
        fullMenuOpen: "rockstargames-modules-core-headeraa4c60d9207e8327ebc788a3e1d56d5b",
        navContainer: "rockstargames-modules-core-headerc5b9f47efbb73b2dfd9c68013ca5bed4",
        searchOpen: "rockstargames-modules-core-headerba19960a101d69f671900a795029cf7b",
        overlay: "rockstargames-modules-core-headerff8c8312206e01ca7503d1914e699e1d"
      };
      const s = i
    },
    95768: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headere92969b01c7ecc3f45b726efcdd54e73{overflow-x:auto}.siteHeaderContainer .rockstargames-modules-core-headere92969b01c7ecc3f45b726efcdd54e73 ul{display:flex;flex-wrap:wrap;justify-content:center;margin:0;padding:0!important}.siteHeaderContainer .rockstargames-modules-core-headere92969b01c7ecc3f45b726efcdd54e73 li{height:var(--global-navigation-height);list-style:none}.siteHeaderContainer .rockstargames-modules-core-headerdc3da34691ab5b1e333e3d37858767f0{display:flex;justify-content:center;margin:0;padding:0!important;visibility:hidden}.siteHeaderContainer .rockstargames-modules-core-headerdc3da34691ab5b1e333e3d37858767f0 li{height:var(--global-navigation-height);list-style:none;min-width:100px}", "", {
        version: 3,
        sources: ["webpack://./src/components/Navigation/index.less"],
        names: [],
        mappings: "AAAA,wFACI,eACJ,CAFA,2FAKQ,YAAA,CADA,cAAA,CAIA,sBAAA,CAFA,QAAA,CACA,mBAER,CATA,2FAaQ,sCAAA,CADA,eACR,CAIA,wFAEI,YAAA,CAGA,sBAAA,CAFA,QAAA,CACA,mBAAA,CAHA,iBAEJ,CAHA,2FAUQ,sCAAA,CAFA,eAAA,CACA,eADR",
        sourcesContent: [".navigation {\n    overflow-x: auto;\n\n    ul {\n        flex-wrap: wrap;\n        display: flex;\n        margin: 0;\n        padding: 0 !important;\n        justify-content: center;\n    }\n\n    li {\n        list-style: none;\n        height: var(--global-navigation-height);\n    }\n}\n\n.ulHidden {\n    visibility: hidden;\n    display: flex;\n    margin: 0;\n    padding: 0 !important;\n    justify-content: center;\n\n    li {\n        list-style: none;\n        min-width: 100px;\n        height: var(--global-navigation-height);\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        navigation: "rockstargames-modules-core-headere92969b01c7ecc3f45b726efcdd54e73",
        ulHidden: "rockstargames-modules-core-headerdc3da34691ab5b1e333e3d37858767f0"
      };
      const s = i
    },
    9581: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, '.siteHeaderContainer .rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b{font-size:var(--nav-link-size)}.siteHeaderContainer .rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b img{transition:transform .2s ease-in-out;width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b.rockstargames-modules-core-headere981dceef9b773c1a38070cf53b88f91 img{transform:rotate(180deg)}@media screen and (max-width:1023px){.siteHeaderContainer .rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b{align-items:center;background:transparent;border:none;color:var(--white-100);display:flex;font-style:normal;font-weight:700;justify-content:space-between;line-height:100%;padding:var(--padding-sm) var(--padding-md);text-decoration:none;width:100%}}@media screen and (min-width:1024px){.siteHeaderContainer .rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b{align-items:center;background:transparent;border:none;color:var(--white-100);color:var(--text-light);cursor:pointer;display:flex;font-family:var(--font-family-body);font-style:normal;font-weight:400;gap:var(--grid-gap-xxs);height:calc(var(--global-navigation-height) - 6px);justify-content:center;margin-top:3px;padding:0 var(--padding-sm);position:relative;text-align:center;white-space:nowrap}.siteHeaderContainer .rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b:focus{outline:none}.siteHeaderContainer .rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b:focus-visible{border:1px solid var(--white-100);border-radius:6px;outline:none}.siteHeaderContainer .rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b:after{bottom:-2px;content:"";display:block;height:0;left:0;position:absolute;right:0;transition:all .2s ease-in;width:100%}.siteHeaderContainer .rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b.rockstargames-modules-core-headere0aebf0d85eeab7cf262811136363f68,.siteHeaderContainer .rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b:hover{color:var(--white-100)}.siteHeaderContainer .rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b.rockstargames-modules-core-headere0aebf0d85eeab7cf262811136363f68:after,.siteHeaderContainer .rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b:hover:after{background:var(--white-100);height:2px}.siteHeaderContainer .rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b.rockstargames-modules-core-headere0aebf0d85eeab7cf262811136363f68{font-weight:700}}', "", {
        version: 3,
        sources: ["webpack://./src/components/NavigationDropdown/index.less"],
        names: [],
        mappings: "AAAA,wFACI,8BACJ,CAFA,4FAIQ,oCAAA,CACA,0BACR,CAEI,8JAEQ,wBADZ,CAMA,qCACI,wFAII,kBAAA,CAMA,sBAAA,CACA,WAAA,CAHA,sBAAA,CAPA,YAAA,CAKA,iBAAA,CAMA,eAAA,CATA,6BAAA,CAEA,gBAAA,CAHA,2CAAA,CAKA,oBAAA,CAEA,UADN,CACF,CAMA,qCACI,wFAUI,kBAAA,CAKA,sBAAA,CACA,WAAA,CAdA,sBAAA,CAeA,uBAAA,CACA,cAAA,CAjBA,YAAA,CAGA,mCAAA,CACA,iBAAA,CACA,eAAA,CAKA,uBAAA,CAHA,kDAAA,CACA,sBAAA,CAIA,cAAA,CAMA,2BAAA,CAPA,iBAAA,CATA,iBAAA,CAIA,kBAON,CAOM,8FACI,YALV,CAQM,sGAEI,iCAAA,CACA,iBAAA,CAFA,YAJV,CASM,8FAMI,WAAA,CALA,UAAA,CAEA,aAAA,CAEA,QAAA,CAEA,MAAA,CAHA,iBAAA,CAIA,OAAA,CACA,0BAAA,CAPA,UAAV,CAUM,wPAEI,sBARV,CAUU,oQAEI,2BAAA,CADA,UANd,CAWM,0JACI,eATV,CACF",
        sourcesContent: [".navigationDropdownButton {\n    font-size: var(--nav-link-size);\n\n    img {\n        transition: transform 0.2s ease-in-out;\n        width: var(--nav-icon-size);\n    }\n\n    &.open {\n        img {\n            transform: rotate(180deg);\n        }\n    }\n}\n\n@media screen and (max-width: 1023px) {\n    .navigationDropdownButton {\n        display: flex;\n        padding: var(--padding-sm) var(--padding-md);\n        justify-content: space-between;\n        align-items: center;\n        line-height: 100%;\n        font-style: normal;\n        text-decoration: none;\n        color: var(--white-100);\n        width: 100%;\n        background: transparent;\n        border: none;\n        font-weight: 700;\n    }\n}\n@media screen and (min-width: 1024px) {\n    .navigationDropdownButton {\n        display: flex;\n        color: var(--white-100);\n        text-align: center;\n        font-family: var(--font-family-body);\n        font-style: normal;\n        font-weight: 400;\n        white-space: nowrap;\n        height: calc(var(--global-navigation-height) - 6px);\n        justify-content: center;\n        align-items: center;\n        gap: var(--grid-gap-xxs);\n        position: relative;\n        margin-top: 3px;\n\n        background: transparent;\n        border: none;\n        color: var(--text-light);\n        cursor: pointer;\n        padding: 0px var(--padding-sm);\n\n        &:focus {\n            outline: none;\n        }\n\n        &:focus-visible {\n            outline: none;\n            border: 1px solid var(--white-100);\n            border-radius: 6px;\n        }\n\n        &:after {\n            content: '';\n            width: 100%;\n            display: block;\n            position: absolute;\n            height: 0;\n            bottom: -2px;\n            left: 0;\n            right: 0;\n            transition: all 0.2s ease-in;\n        }\n\n        &.active,\n        &:hover {\n            color: var(--white-100);\n\n            &:after {\n                height: 2px;\n                background: var(--white-100);\n            }\n        }\n\n        &.active {\n            font-weight: 700;\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        navigationDropdownButton: "rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b",
        open: "rockstargames-modules-core-headere981dceef9b773c1a38070cf53b88f91",
        active: "rockstargames-modules-core-headere0aebf0d85eeab7cf262811136363f68"
      };
      const s = i
    },
    73343: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, '.siteHeaderContainer .rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558{align-items:center;color:var(--white-100);display:flex;font-family:var(--font-family-body);font-size:var(--nav-link-size);font-weight:400;gap:var(--grid-gap-xxs);height:calc(var(--global-navigation-height) - 6px);margin-top:3px;padding:0 var(--padding-sm);position:relative;text-decoration:none;transition:color .3s ease-in-out;white-space:nowrap}.siteHeaderContainer .rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558 img{width:var(--rem-075)}.siteHeaderContainer .rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558:focus-visible{border:1px solid var(--white-100);border-radius:6px;outline:none}.siteHeaderContainer .rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558:after{bottom:-2px;content:"";display:block;height:0;left:0;position:absolute;right:0;transition:all .2s ease-in;width:100%}.siteHeaderContainer .rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558.rockstargames-modules-core-headere6b2077f3b2a8ad9b1402ed6e0c25f95,.siteHeaderContainer .rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558:hover{color:var(--white-100)}.siteHeaderContainer .rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558.rockstargames-modules-core-headere6b2077f3b2a8ad9b1402ed6e0c25f95:after,.siteHeaderContainer .rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558:hover:after{background:var(--white-100);height:var(--rem-0125);height:2px}.siteHeaderContainer .rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558.rockstargames-modules-core-headere6b2077f3b2a8ad9b1402ed6e0c25f95{font-weight:700}.siteHeaderContainer a.rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558{color:var(--text-light)}.siteHeaderContainer button.rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558{background:transparent;border:none;cursor:pointer}', "", {
        version: 3,
        sources: ["webpack://./src/components/NavigationItem/index.less"],
        names: [],
        mappings: "AAAA,wFAKI,kBAAA,CAIA,sBAAA,CANA,YAAA,CAFA,mCAAA,CACA,8BAAA,CAIA,eAAA,CAFA,uBAAA,CAGA,kDAAA,CAOA,cAAA,CANA,2BAAA,CAKA,iBAAA,CAHA,oBAAA,CACA,gCAAA,CACA,kBAGJ,CAfA,4FAiBQ,oBACR,CAEI,sGAEI,iCAAA,CACA,iBAAA,CAFA,YAER,CAGI,8FAMI,WAAA,CALA,UAAA,CAEA,aAAA,CAEA,QAAA,CAEA,MAAA,CAHA,iBAAA,CAIA,OAAA,CACA,0BAAA,CAPA,UAMR,CAII,wPAEI,sBAFR,CAIQ,oQAGI,2BAAA,CAFA,sBAAA,CACA,UAAZ,CAKI,0JACI,eAHR,CAOA,yFACI,uBALJ,CAQA,8FACI,sBAAA,CACA,WAAA,CACA,cANJ",
        sourcesContent: [".navigationItem {\n    font-family: var(--font-family-body);\n    font-size: var(--nav-link-size);\n    display: flex;\n    gap: var(--grid-gap-xxs);\n    align-items: center;\n    font-weight: 400;\n    height: calc(var(--global-navigation-height) - 6px);\n    padding: 0px var(--padding-sm);\n    color: var(--white-100);\n    text-decoration: none;\n    transition: color 0.3s ease-in-out;\n    white-space: nowrap;\n    position: relative;\n    margin-top: 3px;\n\n    img {\n        width: var(--rem-075);\n    }\n\n    &:focus-visible {\n        outline: none;\n        border: 1px solid var(--white-100);\n        border-radius: 6px;\n    }\n\n    &:after {\n        content: '';\n        width: 100%;\n        display: block;\n        position: absolute;\n        height: 0;\n        bottom: -2px;\n        left: 0;\n        right: 0;\n        transition: all 0.2s ease-in;\n    }\n\n    &.active,\n    &:hover {\n        color: var(--white-100);\n\n        &:after {\n            height: var(--rem-0125);\n            height: 2px;\n            background: var(--white-100);\n        }\n    }\n\n    &.active {\n        font-weight: 700;\n    }\n}\n\na.navigationItem {\n    color: var(--text-light);\n}\n\nbutton.navigationItem {\n    background: transparent;\n    border: none;\n    cursor: pointer;\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        navigationItem: "rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558",
        active: "rockstargames-modules-core-headere6b2077f3b2a8ad9b1402ed6e0c25f95"
      };
      const s = i
    },
    27869: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerf6daff7a849e2826ed2d1f41b9941956{background:hsla(0,0%,100%,.1)}", "", {
        version: 3,
        sources: ["webpack://./src/components/NavigationItemMobile/index.less"],
        names: [],
        mappings: "AAAA,wFACI,6BACJ",
        sourcesContent: [".active {\n    background: rgba(255, 255, 255, 0.1);\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        active: "rockstargames-modules-core-headerf6daff7a849e2826ed2d1f41b9941956"
      };
      const s = i
    },
    77482: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, "@media screen and (max-width:1023px){.siteHeaderContainer .rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641{align-items:center;background-color:hsla(0,0%,100%,0);border:none;color:var(--white-100);display:flex;font-size:var(--nav-link-size);font-style:normal;justify-content:space-between;letter-spacing:-.025em;line-height:100%;padding:var(--padding-sm) var(--padding-md);text-decoration:none;transition:background-color .3s ease-in-out}.siteHeaderContainer .rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641 img{width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641.rockstargames-modules-core-headerab8c1da57859a4347bb7cd9722832fb9{border-radius:4px;margin:0 var(--margin-sm);padding:var(--padding-sm)}}.siteHeaderContainer .rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641.rockstargames-modules-core-headerab8c1da57859a4347bb7cd9722832fb9{background-color:hsla(0,0%,100%,.1);font-weight:700}", "", {
        version: 3,
        sources: ["webpack://./src/components/NavigationLink/sharedStyle.less"],
        names: [],
        mappings: "AACI,qCAAA,wFAKI,kBAAA,CAOA,kCAAA,CACA,WAAA,CAHA,sBAAA,CARA,YAAA,CADA,8BAAA,CAOA,iBAAA,CAJA,6BAAA,CAGA,sBAAA,CADA,gBAAA,CAHA,2CAAA,CAMA,oBAAA,CAEA,2CAGN,CAdE,4FAgBQ,0BACV,CAEM,0JACI,iBAAA,CAEA,yBAAA,CADA,yBACV,CACF,CAGI,0JACI,mCAAA,CACA,eADR",
        sourcesContent: [".navigationLink {\n    @media screen and (max-width: 1023px) {\n        font-size: var(--nav-link-size);\n        display: flex;\n        padding: var(--padding-sm) var(--padding-md);\n        justify-content: space-between;\n        align-items: center;\n        line-height: 100%;\n        letter-spacing: -0.025em;\n        font-style: normal;\n        text-decoration: none;\n        color: var(--white-100);\n        transition: background-color 0.3s ease-in-out;\n        background-color: rgba(255, 255, 255, 0);\n        border: none;\n\n        img {\n            width: var(--nav-icon-size);\n        }\n\n        &.active {\n            border-radius: 4px;\n            padding: var(--padding-sm);\n            margin: 0 var(--margin-sm);\n        }\n    }\n\n    &.active {\n        background-color: rgba(255, 255, 255, 0.1);\n        font-weight: bold;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        navigationLink: "rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641",
        active: "rockstargames-modules-core-headerab8c1da57859a4347bb7cd9722832fb9"
      };
      const s = i
    },
    27230: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerb6afa349a14125fd2210278a4b958ebb{color:#fff;margin-top:var(--spacing-sm)}.siteHeaderContainer .rockstargames-modules-core-headerb6afa349a14125fd2210278a4b958ebb ul{justify-content:center;margin:var(margin-xs);padding:0!important}.siteHeaderContainer .rockstargames-modules-core-headerb6afa349a14125fd2210278a4b958ebb li{border-bottom:2px solid transparent;font-size:calc(var(--base-rem-size) * 1.25);font-weight:700;list-style:none}.siteHeaderContainer .rockstargames-modules-core-headerc22ed7fb01d7e65a14a7913a0459a4e3{padding:var(--padding-sm) var(--padding-md)}", "", {
        version: 3,
        sources: ["webpack://./src/components/NavigationMobile/index.less"],
        names: [],
        mappings: "AAAA,wFACI,UAAA,CACA,4BACJ,CAHA,2FAOQ,sBAAA,CADA,qBAAA,CADA,mBAGR,CARA,2FAYQ,mCAAA,CACA,2CAAA,CACA,eAAA,CAHA,eAGR,CAIA,wFACI,2CAFJ",
        sourcesContent: [".navigation {\n    color: rgba(255, 255, 255, 1);\n    margin-top: var(--spacing-sm);\n\n    ul {\n        padding: 0 !important;\n        margin: var(margin-xs);\n        justify-content: center;\n    }\n\n    li {\n        list-style: none;\n        border-bottom: 2px solid transparent;\n        font-size: calc(var(--base-rem-size) * 1.25);\n        font-weight: bold;\n    }\n}\n\n.cta {\n    padding: var(--padding-sm) var(--padding-md);\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        navigation: "rockstargames-modules-core-headerb6afa349a14125fd2210278a4b958ebb",
        cta: "rockstargames-modules-core-headerc22ed7fb01d7e65a14a7913a0459a4e3"
      };
      const s = i
    },
    62323: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a{align-items:center;background:#282828;bottom:0;color:var(--white-100);display:flex;height:var(--global-navigation-height);justify-content:space-between;left:0;margin:0;padding:0 var(--rem-2)!important;position:fixed;right:0}.siteHeaderContainer .rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a li{list-style:none}@media (max-width:1023px){.siteHeaderContainer .rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a{z-index:100}}@media (min-width:1024px){.siteHeaderContainer .rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a{align-items:flex-start;background:var(--black-100);border:1px solid var(--border-color);border-radius:var(--border-radius-md);box-shadow:var(--global-navigation-box-shadow);flex-direction:column;height:auto;overflow:hidden;padding:0!important;position:static}.siteHeaderContainer .rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a li{border-bottom:1px solid var(--border-color);width:100%}.siteHeaderContainer .rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a li:last-child{border:0}}.siteHeaderContainer .rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876{font-size:var(--rem-1);font-weight:700;justify-content:center;letter-spacing:-.025em;line-height:160%;padding:var(--rem-125) 0}.siteHeaderContainer .rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876 img{margin-right:var(--rem-05);width:var(--rem-1)}@media (min-width:1024px){.siteHeaderContainer .rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876{background-color:var(--black-100);display:flex;font-size:var(--nav-link-size);font-weight:400;justify-content:flex-start;padding:var(--spacing-sm);transition:background-color .3s ease-in-out}.siteHeaderContainer .rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876 img{width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876:focus,.siteHeaderContainer .rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876:hover{background-color:var(--white-15);outline:none}}", "", {
        version: 3,
        sources: ["webpack://./src/components/QuickAccess/index.less"],
        names: [],
        mappings: "AAAA,wFAUI,kBAAA,CALA,kBAAA,CAHA,QAAA,CAUA,sBAAA,CAHA,YAAA,CAHA,sCAAA,CAKA,6BAAA,CARA,MAAA,CAIA,QAAA,CACA,gCAAA,CAPA,cAAA,CAGA,OASJ,CAbA,2FAeQ,eACR,CAEI,0BAAA,wFACI,WACN,CACF,CACI,0BAAA,wFAGI,sBAAA,CAMA,2BAAA,CAFA,oCAAA,CADA,qCAAA,CAIA,8CAAA,CARA,qBAAA,CAEA,WAAA,CAIA,eAAA,CAHA,mBAAA,CAJA,eAWN,CAZE,2FAcQ,2CAAA,CADA,UAGV,CAAU,sGACI,QAEd,CACF,CAGA,wFAMI,sBAAA,CALA,eAAA,CAGA,sBAAA,CADA,sBAAA,CADA,gBAAA,CAGA,wBAAJ,CALA,4FASQ,0BAAA,CACA,kBADR,CAII,0BAAA,wFAOI,iCAAA,CANA,YAAA,CAGA,8BAAA,CACA,eAAA,CAHA,0BAAA,CACA,yBAAA,CAGA,2CAAN,CANE,4FAUQ,0BADV,CAIM,4LAGI,gCAAA,CADA,YADV,CACF",
        sourcesContent: [".quickAccess {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: #282828;\n    height: var(--global-navigation-height);\n    margin: 0;\n    padding: 0 var(--rem-2) !important;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: var(--white-100);\n\n    li {\n        list-style: none;\n    }\n\n    @media (max-width: 1023px) {\n        z-index: 100;\n    }\n\n    @media (min-width: 1024px) {\n        position: static;\n        flex-direction: column;\n        align-items: flex-start;\n        height: auto;\n        padding: 0 !important;\n        border-radius: var(--border-radius-md);\n        border: 1px solid var(--border-color);\n        overflow: hidden;\n        background: var(--black-100);\n        box-shadow: var(--global-navigation-box-shadow);\n\n        li {\n            width: 100%;\n            border-bottom: 1px solid var(--border-color);\n\n            &:last-child {\n                border: 0;\n            }\n        }\n    }\n}\n\n.link {\n    font-weight: 700;\n    line-height: 160%;\n    letter-spacing: -0.025em;\n    justify-content: center;\n    padding: var(--rem-125) 0;\n    font-size: var(--rem-1);\n\n    img {\n        margin-right: var(--rem-05);\n        width: var(--rem-1);\n    }\n\n    @media (min-width: 1024px) {\n        display: flex;\n        justify-content: flex-start;\n        padding: var(--spacing-sm);\n        font-size: var(--nav-link-size);\n        font-weight: 400;\n        transition: background-color 0.3s ease-in-out;\n        background-color: var(--black-100);\n\n        img {\n            width: var(--nav-icon-size);\n        }\n\n        &:focus,\n        &:hover {\n            outline: none;\n            background-color: var(--white-15);\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        quickAccess: "rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a",
        link: "rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876"
      };
      const s = i
    },
    87704: (e, a, n) => {
      n.d(a, {
        A: () => m
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o),
        s = n(79908),
        d = n.n(s),
        l = new URL(n(34967), n.b),
        c = i()(t()),
        A = d()(l);
      c.push([e.id, `.siteHeaderContainer .rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a{background:url(${A}) no-repeat 50%/contain;cursor:pointer;height:var(--rem-15);position:relative;width:var(--rem-15)}@keyframes rockstargames-modules-core-headerd3d0e9f0a1e1ea78d7e8d9fcb1612218{0%{transform:translate(0)}20%{transform:translate(-2px,3px)}40%{transform:translate(-1px,-1px)}60%{transform:translate(1px,2px)}80%{transform:translate(1px,1px)}to{transform:translate(0)}}@keyframes rockstargames-modules-core-headerfa15be44842208bffd77584b859a6ec6{0%{transform:translate(0)}20%{transform:translate(1px,-2px)}40%{transform:translate(-1px,1px)}60%{transform:translate(-1px,-1px)}80%{transform:translateY(1px)}to{transform:translate(0)}}.siteHeaderContainer .rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:after,.siteHeaderContainer .rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:before{background:url(${A}) no-repeat 50%/contain;content:"";display:block;height:100%;left:0;opacity:0;position:absolute;text-transform:uppercase;top:0;transition:filter .1s;width:100%}.siteHeaderContainer .rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:before{z-index:-1}.siteHeaderContainer .rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:after{z-index:-2}.siteHeaderContainer .rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:hover:after,.siteHeaderContainer .rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:hover:before{opacity:1}.siteHeaderContainer .rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:hover:before{animation:rockstargames-modules-core-headerd3d0e9f0a1e1ea78d7e8d9fcb1612218 .4s 2 both;filter:invert(55%) sepia(80%) saturate(301%) hue-rotate(148deg) brightness(93%) contrast(91%)}.siteHeaderContainer .rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:hover:after{animation:rockstargames-modules-core-headerfa15be44842208bffd77584b859a6ec6 .4s 2 both;filter:invert(48%) sepia(83%) saturate(4695%) hue-rotate(329deg) brightness(84%) contrast(107%)}@media (max-width:1023px){.siteHeaderContainer .rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a{pointer-events:none}}`, "", {
        version: 3,
        sources: ["webpack://./src/components/RockstarLogo/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,wFA2CI,wEAAA,CAIA,cAAA,CAFA,oBAAA,CADA,iBAAA,CAEA,mBAXJ,CAlCI,6EACI,GACI,sBAoCV,CAlCM,IACI,6BAoCV,CAlCM,IACI,8BAoCV,CAlCM,IACI,4BAoCV,CAlCM,IACI,4BAoCV,CAlCM,GACI,sBAoCV,CACF,CAlCI,6EACI,GACI,sBAoCV,CAlCM,IACI,6BAoCV,CAlCM,IACI,6BAoCV,CAlCM,IACI,8BAoCV,CAlCM,IACI,yBAoCV,CAlCM,GACI,sBAoCV,CACF,CA1BI,6LAII,wEAAA,CADA,UAAA,CADA,aAAA,CAOA,WAAA,CADA,MAAA,CAIA,SAAA,CANA,iBAAA,CADA,wBAAA,CAEA,KAAA,CAIA,qBAAA,CADA,UA8BR,CA1BI,+FACI,UA4BR,CA1BI,8FACI,UA4BR,CAzBQ,yMAEI,SA2BZ,CAzBQ,qGACI,sFAAA,CACA,6FA2BZ,CAvBQ,oGACI,sFAAA,CACA,+FAyBZ,CChDI,0BAAA,wFD6BI,mBAuBN,CACF",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.rockstarLogo {\n    @keyframes glitch {\n        0% {\n            transform: translate(0);\n        }\n        20% {\n            transform: translate(-2px, 3px);\n        }\n        40% {\n            transform: translate(-1px, -1px);\n        }\n        60% {\n            transform: translate(1px, 2px);\n        }\n        80% {\n            transform: translate(1px, 1px);\n        }\n        to {\n            transform: translate(0);\n        }\n    }\n    @keyframes glitch2 {\n        0% {\n            transform: translate(0);\n        }\n        20% {\n            transform: translate(1px, -2px);\n        }\n        40% {\n            transform: translate(-1px, 1px);\n        }\n        60% {\n            transform: translate(-1px, -1px);\n        }\n        80% {\n            transform: translate(0, 1px);\n        }\n        to {\n            transform: translate(0);\n        }\n    }\n\n    @img: './img/rockstar.svg';\n    background: url(@img) no-repeat center/contain;\n    position: relative;\n    height: var(--rem-15);\n    width: var(--rem-15);\n    cursor: pointer;\n\n    &:before,\n    &:after {\n        display: block;\n        content: '';\n        background: url(@img) no-repeat center/contain;\n        text-transform: uppercase;\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n        transition: filter 0.1s;\n        opacity: 0;\n    }\n    &:before {\n        z-index: -1;\n    }\n    &:after {\n        z-index: -2;\n    }\n    &:hover {\n        &:before,\n        &:after {\n            opacity: 1;\n        }\n        &:before {\n            animation: glitch 0.4s both 2;\n            filter: invert(55%) sepia(80%) saturate(301%) hue-rotate(148deg)\n                brightness(93%) contrast(91%);\n        }\n\n        &:after {\n            animation: glitch2 0.4s both 2;\n            filter: invert(48%) sepia(83%) saturate(4695%) hue-rotate(329deg)\n                brightness(84%) contrast(107%);\n        }\n    }\n\n    .mdMax({\n        pointer-events: none;\n    });\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), c.locals = {
        rockstarLogo: "rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a",
        glitch: "rockstargames-modules-core-headerd3d0e9f0a1e1ea78d7e8d9fcb1612218",
        glitch2: "rockstargames-modules-core-headerfa15be44842208bffd77584b859a6ec6"
      };
      const m = c
    },
    82363: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.siteHeaderContainer .rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac:focus,.siteHeaderContainer .rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac:hover{background-color:var(--white-40);outline:none}.siteHeaderContainer .rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac.rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e{background:var(--white-100);color:var(--black-200)}.siteHeaderContainer .rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac.rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e img{filter:invert()}.siteHeaderContainer .rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.siteHeaderContainer .rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f:focus,.siteHeaderContainer .rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f:hover{background-color:var(--white-40);outline:none}.siteHeaderContainer .rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f.rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e{background:var(--white-100);color:var(--black-200)}.siteHeaderContainer .rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f.rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e img{filter:invert()}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/Search/components/PillButton/index.less"],
        names: [],
        mappings: "AA2QA,wFAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4FAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4LAEI,gCAAA,CACA,YC/OR,CDkPI,0JAEI,2BAAA,CADA,sBC/OR,CD8OI,8JAKQ,eChPZ,CAjEA,wFD8QI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CCzMJ,CApFA,4FDiSQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BCxMR,CD4MI,4LAEI,gCAAA,CACA,YC1MR,CD6MI,0JAEI,2BAAA,CADA,sBC1MR,CDyMI,8JAKQ,eC3MZ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.pillButton {\n    .pillBtn();\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac",
        selected: "rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e",
        pillButton: "rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f"
      };
      const s = i
    },
    64735: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerb14c9a28c3b2b3a58eb8a465f480fd60{background:transparent;border:none;height:var(--rem-125);padding:0;width:var(--rem-125)}.siteHeaderContainer .rockstargames-modules-core-headerb14c9a28c3b2b3a58eb8a465f480fd60 img{height:100%;width:100%}.siteHeaderContainer .rockstargames-modules-core-headerb14c9a28c3b2b3a58eb8a465f480fd60:hover{cursor:pointer}.siteHeaderContainer .rockstargames-modules-core-headerce9e8c7dd9562ae75b9543b27f740642{background:linear-gradient(0deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,.15)),#000;border-bottom:1px solid var(--border-color);box-shadow:var(--global-navigation-box-shadow);display:flex;justify-content:center;left:0;position:absolute;top:var(--global-navigation-height);width:100%}.siteHeaderContainer .rockstargames-modules-core-headerb6ffd9ebe8ffa3ac0f4e248ca522036b{align-items:center;display:flex;gap:var(--grid-gap-static-xs);max-width:1920px;padding:var(--padding-sm) var(--padding-sides);width:100%}.siteHeaderContainer .rockstargames-modules-core-headerdeb8b97cd5fbb70486ad3c025601d43d button{background:transparent;border:none;display:block;height:var(--rem-15);padding:0;width:var(--rem-15)}.siteHeaderContainer .rockstargames-modules-core-headerdeb8b97cd5fbb70486ad3c025601d43d img{height:var(--rem-15);width:var(--rem-15)}.siteHeaderContainer .rockstargames-modules-core-headerea7dbbd5e60585f29ab22be3d18988fd button{background:transparent;border:none;cursor:pointer;display:block;height:var(--rem-15);margin-left:var(--rem-15);padding:0;width:var(--rem-15)}.siteHeaderContainer .rockstargames-modules-core-headerea7dbbd5e60585f29ab22be3d18988fd img{height:var(--rem-15);width:var(--rem-15)}.siteHeaderContainer .rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f{flex-grow:1;margin-right:var(--margin-md)}.siteHeaderContainer .rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f input{background:linear-gradient(0deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,.15)),#000;border:1px solid transparent;color:var(--white-100);font-family:var(--font-family-h);font-size:1.5rem;font-style:normal;font-weight:700;height:100%;letter-spacing:-.025em;line-height:100%;outline:0;width:100%}.siteHeaderContainer .rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f input::-moz-placeholder{color:var(--text-light);opacity:1}.siteHeaderContainer .rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f input::placeholder{color:var(--text-light);opacity:1}.siteHeaderContainer .rockstargames-modules-core-headerf1bedf210587b5186fca4d243f05a1aa{align-items:flex-start;display:flex;gap:var(--grid-gap-xs)}.siteHeaderContainer .rockstargames-modules-core-headerc3e3363c5e7b53755b9c9afcc262ccb6{background:#c00;padding:var(--margin-xs) var(--padding-lg)}", "", {
        version: 3,
        sources: ["webpack://./src/components/Search/modules/Desktop/index.less"],
        names: [],
        mappings: "AAAA,wFACI,sBAAA,CACA,WAAA,CAGA,qBAAA,CAFA,SAAA,CACA,oBAEJ,CANA,4FASQ,WAAA,CADA,UAER,CAEI,8FACI,cAAR,CAIA,wFASI,6EAAA,CAFA,2CAAA,CACA,8CAAA,CANA,YAAA,CACA,sBAAA,CAEA,MAAA,CAJA,iBAAA,CAGA,mCAAA,CAEA,UACJ,CAUA,wFAKI,kBAAA,CADA,YAAA,CAEA,6BAAA,CAJA,gBAAA,CACA,8CAAA,CAFA,UAHJ,CAWA,+FAEQ,sBAAA,CACA,WAAA,CAIA,aAAA,CAFA,oBAAA,CACA,SAAA,CAFA,mBAPR,CAGA,4FAYQ,oBAAA,CADA,mBAVR,CAeA,+FAEQ,sBAAA,CACA,WAAA,CAMA,cAAA,CAFA,aAAA,CAFA,oBAAA,CAGA,yBAAA,CAFA,SAAA,CAFA,mBATR,CAKA,4FAcQ,oBAAA,CADA,mBAdR,CAmBA,wFACI,WAAA,CACA,6BAjBJ,CAeA,8FAOQ,6EAAA,CAMA,4BAAA,CAEA,sBAAA,CACA,gCAAA,CACA,gBAAA,CACA,iBAAA,CACA,eAAA,CAbA,WAAA,CAgBA,sBAAA,CAFA,gBAAA,CACA,SAAA,CAhBA,UANR,CA6BQ,gHACI,uBAAA,CACA,SA3BZ,CAyBQ,2GACI,uBAAA,CACA,SA3BZ,CAgCA,wFAEI,sBAAA,CADA,YAAA,CAEA,sBA9BJ,CAiCA,wFAEI,eAAA,CADA,0CA9BJ",
        sourcesContent: [".searchToggleButton {\n    background: transparent;\n    border: none;\n    padding: 0;\n    width: var(--rem-125);\n    height: var(--rem-125);\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n\n    &:hover {\n        cursor: pointer;\n    }\n}\n\n.searchPopup {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    top: var(--global-navigation-height);\n    left: 0;\n    width: 100%;\n    border-bottom: 1px solid var(--border-color);\n    box-shadow: var(--global-navigation-box-shadow);\n    background: linear-gradient(\n            0deg,\n            rgba(255, 255, 255, 0.15) 0%,\n            rgba(255, 255, 255, 0.15) 100%\n        ),\n        #000;\n}\n\n.searchQuery {\n    width: 100%;\n    max-width: 1920px;\n    padding: var(--padding-sm) var(--padding-sides);\n    display: flex;\n    align-items: center;\n    gap: var(--grid-gap-static-xs);\n}\n\n.searchIcon {\n    button {\n        background: transparent;\n        border: none;\n        width: var(--rem-15);\n        height: var(--rem-15);\n        padding: 0;\n        display: block;\n    }\n\n    img {\n        width: var(--rem-15);\n        height: var(--rem-15);\n    }\n}\n\n.closeIcon {\n    button {\n        background: transparent;\n        border: none;\n        width: var(--rem-15);\n        height: var(--rem-15);\n        padding: 0;\n        display: block;\n        margin-left: var(--rem-15);\n        cursor: pointer;\n    }\n\n    img {\n        width: var(--rem-15);\n        height: var(--rem-15);\n    }\n}\n\n.searchField {\n    flex-grow: 1;\n    margin-right: var(--margin-md);\n\n    input {\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(\n                0deg,\n                rgba(255, 255, 255, 0.15) 0%,\n                rgba(255, 255, 255, 0.15) 100%\n            ),\n            #000;\n        border: 0px 0px 1px solid transparent;\n\n        color: var(--white-100);\n        font-family: var(--font-family-h);\n        font-size: 1.5rem;\n        font-style: normal;\n        font-weight: 700;\n        line-height: 100%;\n        outline: 0;\n        letter-spacing: -0.025em;\n\n        &:focus {\n            // border-bottom: 1px solid var(--white-40);\n        }\n\n        &::placeholder {\n            color: var(--text-light);\n            opacity: 1;\n        }\n    }\n}\n\n.targets {\n    display: flex;\n    align-items: flex-start;\n    gap: var(--grid-gap-xs);\n}\n\n.errorMessage {\n    padding: var(--margin-xs) var(--padding-lg);\n    background: rgb(204, 0, 0);\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        searchToggleButton: "rockstargames-modules-core-headerb14c9a28c3b2b3a58eb8a465f480fd60",
        searchPopup: "rockstargames-modules-core-headerce9e8c7dd9562ae75b9543b27f740642",
        searchQuery: "rockstargames-modules-core-headerb6ffd9ebe8ffa3ac0f4e248ca522036b",
        searchIcon: "rockstargames-modules-core-headerdeb8b97cd5fbb70486ad3c025601d43d",
        closeIcon: "rockstargames-modules-core-headerea7dbbd5e60585f29ab22be3d18988fd",
        searchField: "rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f",
        targets: "rockstargames-modules-core-headerf1bedf210587b5186fca4d243f05a1aa",
        errorMessage: "rockstargames-modules-core-headerc3e3363c5e7b53755b9c9afcc262ccb6"
      };
      const s = i
    },
    39715: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, '.siteHeaderContainer .rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1{align-items:center;background:#282828;color:#fff;display:flex;gap:var(--grid-gap-static-xs);justify-content:space-between;padding:var(--padding-xs) var(--padding-md)}.siteHeaderContainer .rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1 input{background:transparent;border:0;color:inherit;font-size:var(--rem-1)}.siteHeaderContainer .rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1 input::-moz-placeholder{color:var(--text-light);opacity:1}.siteHeaderContainer .rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1 input::placeholder{color:var(--text-light);opacity:1}.siteHeaderContainer .rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1 input[type=text]{flex-grow:1;padding:var(--padding-xs) 0}.siteHeaderContainer .rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1 img{display:block;height:var(--nav-icon-size);width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1 button{background:transparent;border:0;padding:0}.siteHeaderContainer .rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd{border-bottom:1px solid var(--blacks-border-color);position:relative}.siteHeaderContainer .rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd:after,.siteHeaderContainer .rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd:before{bottom:0;content:"";opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .2s ease-in-out;width:var(--rem-4);z-index:1}.siteHeaderContainer .rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd:before{background:linear-gradient(-90deg,transparent 20%,var(--black-200) 100%);left:0}.siteHeaderContainer .rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd:after{background:linear-gradient(90deg,transparent 20%,var(--black-200) 100%);opacity:1;right:0}.siteHeaderContainer .rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd.rockstargames-modules-core-headere3fe68b0501338fe7b3cbed75b1773c8:before{opacity:1}.siteHeaderContainer .rockstargames-modules-core-headerc11370021ff4c9655878886a3a69c746{grid-gap:var(--grid-gap-xs);-ms-overflow-style:none;display:flex;max-width:100%;overflow-x:scroll;padding:var(--mobile-nav-item-padding);position:relative;scrollbar-width:none}.siteHeaderContainer .rockstargames-modules-core-headerc11370021ff4c9655878886a3a69c746 button{font-size:16px}.siteHeaderContainer .rockstargames-modules-core-headerc11370021ff4c9655878886a3a69c746::-webkit-scrollbar{display:none}.siteHeaderContainer .rockstargames-modules-core-headerbf16fe605728a09b0a5c269d57371bfa{background:#c00;padding:12px 32px}', "", {
        version: 3,
        sources: ["webpack://./src/components/Search/modules/Mobile/index.less"],
        names: [],
        mappings: "AAAA,wFAMI,kBAAA,CALA,kBAAA,CAMA,UAAA,CALA,YAAA,CAEA,6BAAA,CADA,6BAAA,CAEA,2CAGJ,CARA,8FAWQ,sBAAA,CADA,QAAA,CAEA,aAAA,CACA,sBACR,CACQ,gHACI,uBAAA,CACA,SACZ,CAHQ,2GACI,uBAAA,CACA,SACZ,CAEQ,yGACI,WAAA,CACA,2BAAZ,CAtBA,4FA2BQ,aAAA,CACA,2BAAA,CACA,0BAFR,CA3BA,+FAmCQ,sBAAA,CAFA,QAAA,CACA,SAFR,CAOA,wFAEI,kDAAA,CADA,iBAJJ,CAOI,6LAOI,QAAA,CALA,UAAA,CAMA,SAAA,CAJA,mBAAA,CADA,iBAAA,CAGA,KAAA,CAGA,kCAAA,CAJA,kBAAA,CAKA,SALR,CAQI,+FAEI,wEAAA,CADA,MALR,CAaI,8FAGI,uEAAA,CAFA,SAAA,CACA,OAVR,CAkBI,iKACI,SAhBR,CAoBA,wFAKI,2BAAA,CAOA,uBAAA,CAXA,YAAA,CAEA,cAAA,CACA,iBAAA,CAFA,sCAAA,CAIA,iBAAA,CAOA,oBAvBJ,CAUA,+FASQ,cAhBR,CAsBI,2GACI,YApBR,CAwBA,wFAEI,eAAA,CADA,iBArBJ",
        sourcesContent: [".search {\n    background: #282828;\n    display: flex;\n    justify-content: space-between;\n    gap: var(--grid-gap-static-xs);\n    padding: var(--padding-xs) var(--padding-md);\n    align-items: center;\n    color: #ffffff;\n\n    input {\n        border: 0;\n        background: transparent;\n        color: inherit;\n        font-size: var(--rem-1);\n\n        &::placeholder {\n            color: var(--text-light);\n            opacity: 1;\n        }\n\n        &[type='text'] {\n            flex-grow: 1;\n            padding: var(--padding-xs) 0;\n        }\n    }\n\n    img {\n        display: block;\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n    }\n\n    button {\n        border: 0;\n        padding: 0;\n        background: transparent;\n    }\n}\n\n.targetsOuter {\n    position: relative;\n    border-bottom: 1px solid var(--blacks-border-color);\n\n    &:after,\n    &:before {\n        content: '';\n        position: absolute;\n        pointer-events: none;\n        width: var(--rem-4);\n        top: 0;\n        bottom: 0;\n        opacity: 0;\n        transition: opacity 0.2s ease-in-out;\n        z-index: 1;\n    }\n\n    &:before {\n        left: 0;\n        background: linear-gradient(\n            -90deg,\n            rgba(0, 0, 0, 0) 20%,\n            var(--black-200) 100%\n        );\n    }\n\n    &:after {\n        opacity: 1;\n        right: 0;\n        background: linear-gradient(\n            90deg,\n            rgba(0, 0, 0, 0) 20%,\n            var(--black-200) 100%\n        );\n    }\n\n    &.hasScroll:before {\n        opacity: 1;\n    }\n}\n\n.targets {\n    display: flex;\n    padding: var(--mobile-nav-item-padding);\n    max-width: 100%;\n    overflow-x: scroll;\n    grid-gap: var(--grid-gap-xs);\n    position: relative;\n\n    button {\n        font-size: 16px;\n    }\n\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n\n    &::-webkit-scrollbar {\n        display: none;\n    }\n}\n\n.errorMessage {\n    padding: 12px 32px;\n    background: rgb(204, 0, 0);\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        search: "rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1",
        targetsOuter: "rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd",
        hasScroll: "rockstargames-modules-core-headere3fe68b0501338fe7b3cbed75b1773c8",
        targets: "rockstargames-modules-core-headerc11370021ff4c9655878886a3a69c746",
        errorMessage: "rockstargames-modules-core-headerbf16fe605728a09b0a5c269d57371bfa"
      };
      const s = i
    },
    31867: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerbf9f9a25ea6f9aa44b4b2ab52512e335{background:var(--black-100);box-shadow:var(--global-navigation-box-shadow);display:none;left:0;position:absolute;right:0;top:var(--global-navigation-height);width:100%;z-index:99}.siteHeaderContainer .rockstargames-modules-core-headerbbd3cc8e4460000b11ca8ef9b0eee345{display:none;height:100vh;left:0;position:absolute;top:var(--global-navigation-height);width:100%}.siteHeaderContainer .rockstargames-modules-core-headerb5c4f53ad11e76bbf9b1324c766560ad{display:block}", "", {
        version: 3,
        sources: ["webpack://./src/components/SecondaryNavigationSlide/index.less"],
        names: [],
        mappings: "AAAA,wFAOI,2BAAA,CACA,8CAAA,CAPA,YAAA,CAGA,MAAA,CADA,iBAAA,CAEA,OAAA,CACA,mCAAA,CAJA,UAAA,CAOA,UACJ,CAEA,wFACI,YAAA,CAEA,YAAA,CAGA,MAAA,CAJA,iBAAA,CAGA,mCAAA,CADA,UAEJ,CAGA,wFACI,aADJ",
        sourcesContent: [".secondaryNavigationSlide {\n    display: none;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: var(--global-navigation-height);\n    background: var(--black-100);\n    box-shadow: var(--global-navigation-box-shadow);\n    z-index: 99;\n}\n\n.secondaryNavigationOverlay {\n    display: none;\n    position: absolute;\n    height: 100vh;\n    width: 100%;\n    top: var(--global-navigation-height);\n    left: 0;\n}\n\n.open {\n    display: block;\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        secondaryNavigationSlide: "rockstargames-modules-core-headerbf9f9a25ea6f9aa44b4b2ab52512e335",
        secondaryNavigationOverlay: "rockstargames-modules-core-headerbbd3cc8e4460000b11ca8ef9b0eee345",
        open: "rockstargames-modules-core-headerb5c4f53ad11e76bbf9b1324c766560ad"
      };
      const s = i
    },
    72733: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headercc10478657fa254e4e3449bce7c07d2d{align-items:center;display:flex;gap:var(--rem-075);height:var(--rem-15)}.siteHeaderContainer .rockstargames-modules-core-headerd6ca505694953416f6cfd919ef1904e1{display:flex}.siteHeaderContainer .rockstargames-modules-core-headerc2788a414e74cc6eecfa96c0dc4ffac8{background-color:var(--white-40);height:100%;width:1px}.siteHeaderContainer .rockstargames-modules-core-headeref547bd473dcff449cc4d72700b35e3a{align-items:center;display:flex;height:100%}.siteHeaderContainer .rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e{height:var(--brand-logo-height,100%);max-height:var(--rem-15);max-width:50vw;width:auto}.siteHeaderContainer .rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e[data-brand=gta-plus]{--brand-logo-height:130%;margin-bottom:20%;max-height:none}.siteHeaderContainer .rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e[data-brand=careers]{--brand-logo-height:70%}@media screen and (min-width:1024px){.siteHeaderContainer .rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e{max-width:20vw}}.siteHeaderContainer .rockstargames-modules-core-headera8caa9bacc7f74ef9bd86698de9ff08c{background:none;border:none;padding:0}.siteHeaderContainer .rockstargames-modules-core-headerd6bd4cea9554313294cb18d1478da1ca{min-width:var(--sub-nav-min-width);z-index:1}", "", {
        version: 3,
        sources: ["webpack://./src/components/SiteTitle/index.less"],
        names: [],
        mappings: "AAEA,wFAGI,kBAAA,CAFA,YAAA,CAGA,kBAAA,CAFA,oBAgCJ,CA3BA,wFACI,YA6BJ,CA1BA,wFACI,gCAAA,CACA,WAAA,CACA,SA4BJ,CAzBA,wFAGI,kBAAA,CAFA,YAAA,CACA,WA4BJ,CAxBA,wFAYI,oCAAA,CACA,wBAAA,CACA,cAAA,CAHA,UAmBJ,CA7BI,6GACI,wBAAA,CACA,iBAAA,CACA,eA+BR,CA5BI,4GACI,uBA8BR,CAtBI,qCAAA,wFACI,cAyBN,CACF,CAtBA,wFACI,eAAA,CACA,WAAA,CACA,SAwBJ,CArBA,wFAEI,kCAAA,CADA,SAwBJ",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins';\n\n.siteTitle {\n    display: flex;\n    height: var(--rem-15);\n    align-items: center;\n    gap: var(--rem-075);\n}\n\n.rockstar {\n    display: flex;\n}\n\n.divider {\n    background-color: var(--white-40);\n    height: 100%;\n    width: 1px;\n}\n\n.brand {\n    display: flex;\n    height: 100%;\n    align-items: center;\n}\n\n.brandLogo {\n    &[data-brand='gta-plus'] {\n        --brand-logo-height: 130%;\n        margin-bottom: 20%;\n        max-height: none;\n    }\n\n    &[data-brand='careers'] {\n        --brand-logo-height: 70%;\n    }\n\n    width: auto;\n    height: var(--brand-logo-height, 100%);\n    max-height: var(--rem-15);\n    max-width: 50vw;\n\n    @media screen and (min-width: 1024px) {\n        max-width: 20vw;\n    }\n}\n\n.quickAccessButton {\n    background: none;\n    border: none;\n    padding: 0;\n}\n\n.quickAccessContainer {\n    z-index: 1;\n    min-width: var(--sub-nav-min-width);\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        siteTitle: "rockstargames-modules-core-headercc10478657fa254e4e3449bce7c07d2d",
        rockstar: "rockstargames-modules-core-headerd6ca505694953416f6cfd919ef1904e1",
        divider: "rockstargames-modules-core-headerc2788a414e74cc6eecfa96c0dc4ffac8",
        brand: "rockstargames-modules-core-headeref547bd473dcff449cc4d72700b35e3a",
        brandLogo: "rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e",
        quickAccessButton: "rockstargames-modules-core-headera8caa9bacc7f74ef9bd86698de9ff08c",
        quickAccessContainer: "rockstargames-modules-core-headerd6bd4cea9554313294cb18d1478da1ca"
      };
      const s = i
    },
    82370: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13{background:transparent;border-style:none;border-bottom:1px solid var(--blacks-border-color);color:var(--white-100);cursor:pointer;font-family:var(--font-family-body);font-size:16px;font-style:normal;font-weight:400;gap:var(--grid-gap-sm);letter-spacing:-.025em;line-height:160%;padding:var(--grid-gap-sm);text-align:left;transition:background-color .3s ease-in-out;width:100%}.siteHeaderContainer .rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13:focus,.siteHeaderContainer .rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13:hover{background-color:var(--white-15)}.siteHeaderContainer .rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13:last-child{border:none}", "", {
        version: 3,
        sources: ["webpack://./src/components/SubMenu/components/SubMenuButton/index.less"],
        names: [],
        mappings: "AAAA,wFACI,sBAAA,CAGA,iBAAA,CAYA,kDAAA,CAXA,sBAAA,CAcA,cAAA,CAbA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAMA,sBAAA,CAJA,sBAAA,CADA,gBAAA,CAIA,0BAAA,CAXA,eAAA,CAcA,2CAAA,CAfA,UAeJ,CAII,4LAEI,gCAFR,CAII,mGACI,WAFR",
        sourcesContent: [".subMenuButton {\n    background: transparent;\n    width: 100%;\n    text-align: left;\n    border-style: none;\n    color: var(--white-100);\n    font-family: var(--font-family-body);\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 160%;\n    letter-spacing: -0.025em;\n    cursor: pointer;\n\n    padding: var(--grid-gap-sm);\n    gap: var(--grid-gap-sm);\n    border-bottom: 1px solid var(--blacks-border-color);\n    transition: background-color 0.3s ease-in-out;\n\n    cursor: pointer;\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-15);\n    }\n    &:last-child {\n        border: none;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        subMenuButton: "rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13"
      };
      const s = i
    },
    51543: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerbe98900eb9861a339ca26cd5c23795c2{background:transparent;border-bottom:1px solid var(--blacks-border-color);width:100%}.siteHeaderContainer .rockstargames-modules-core-headerbe98900eb9861a339ca26cd5c23795c2.rockstargames-modules-core-headerb83b9fbed333ffb6cc89eb40ce1f258e{border-bottom:none}.siteHeaderContainer .rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8{background:transparent;background:hsla(0,0%,100%,0);border:none;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:var(--nav-link-size);font-weight:400;gap:var(--grid-gap-sm);justify-content:space-between;padding:var(--grid-gap-sm);transition:background-color .3s ease-in-out;width:100%}.siteHeaderContainer .rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8.rockstargames-modules-core-headerb83b9fbed333ffb6cc89eb40ce1f258e{border-bottom:none;border-radius:4px;font-family:var(--font-family-body);padding:0;padding:var(--padding-xs)}.siteHeaderContainer .rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8:hover{background-color:var(--white-15)}.siteHeaderContainer .rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8 img{transition:transform .2s ease-in-out}.siteHeaderContainer .rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8.rockstargames-modules-core-headerb232c7352afb473e20d474f81db87a11 img{transform:rotate(180deg)}.siteHeaderContainer .rockstargames-modules-core-headerb78556b7ba42b398bc55bf4720f9eee5{height:var(--nav-icon-size);width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headerf54f4c00ab7b5e6ab645951063e44b9e{align-items:flex-start;align-self:stretch;display:flex;flex-direction:column;gap:var(--padding-xxs);margin:0 var(--padding-xs) var(--padding-sm) var(--sub-nav-indent);overflow:hidden}", "", {
        version: 3,
        sources: ["webpack://./src/components/SubMenu/components/SubMenuDropdown/index.less"],
        names: [],
        mappings: "AAAA,wFACI,sBAAA,CACA,kDAAA,CACA,UACJ,CACI,0JACI,kBACR,CAGA,wFAEI,sBAAA,CAcA,4BAAA,CAfA,WAAA,CAUA,sBAAA,CALA,cAAA,CAHA,YAAA,CASA,mCAAA,CACA,8BAAA,CACA,eAAA,CATA,sBAAA,CAIA,6BAAA,CALA,0BAAA,CAWA,2CAAA,CAPA,UAKJ,CAKI,0JAEI,kBAAA,CAEA,iBAAA,CACA,mCAAA,CAJA,SAAA,CAEA,yBADR,CAMI,8FACI,gCAJR,CAvBA,4FA+BQ,oCALR,CAQI,8JAEQ,wBAPZ,CAYA,wFAEI,2BAAA,CADA,0BATJ,CAaA,wFAII,sBAAA,CACA,kBAAA,CAJA,YAAA,CAEA,qBAAA,CAGA,sBAAA,CAJA,kEAAA,CAKA,eAXJ",
        sourcesContent: [".subMenuDropdownContainer {\n    background: transparent;\n    border-bottom: 1px solid var(--blacks-border-color);\n    width: 100%;\n\n    &.nested {\n        border-bottom: none;\n    }\n}\n\n.subMenuDropdownButton {\n    border: none;\n    background: transparent;\n    display: flex;\n    padding: var(--grid-gap-sm);\n    gap: var(--grid-gap-sm);\n    cursor: pointer;\n\n    width: 100%;\n    justify-content: space-between;\n\n    color: var(--white-100);\n    font-family: var(--font-family-body);\n    font-size: var(--nav-link-size);\n    font-weight: 400;\n    transition: background-color 0.3s ease-in-out;\n    background: rgba(255, 255, 255, 0);\n\n    &.nested {\n        padding: 0;\n        border-bottom: none;\n        padding: var(--padding-xs);\n        border-radius: 4px;\n        font-family: var(--font-family-body);\n    }\n\n    &:hover {\n        background-color: var(--white-15);\n    }\n\n    img {\n        transition: transform 0.2s ease-in-out;\n    }\n\n    &.open {\n        img {\n            transform: rotate(180deg);\n        }\n    }\n}\n\n.openChevron {\n    width: var(--nav-icon-size);\n    height: var(--nav-icon-size);\n}\n\n.subMenuDropdownItems {\n    display: flex;\n    margin: 0 var(--padding-xs) var(--padding-sm) var(--sub-nav-indent);\n    flex-direction: column;\n    align-items: flex-start;\n    align-self: stretch;\n    gap: var(--padding-xxs);\n    overflow: hidden;\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        subMenuDropdownContainer: "rockstargames-modules-core-headerbe98900eb9861a339ca26cd5c23795c2",
        nested: "rockstargames-modules-core-headerb83b9fbed333ffb6cc89eb40ce1f258e",
        subMenuDropdownButton: "rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8",
        open: "rockstargames-modules-core-headerb232c7352afb473e20d474f81db87a11",
        openChevron: "rockstargames-modules-core-headerb78556b7ba42b398bc55bf4720f9eee5",
        subMenuDropdownItems: "rockstargames-modules-core-headerf54f4c00ab7b5e6ab645951063e44b9e"
      };
      const s = i
    },
    82853: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5{align-items:center;background:transparent;background-color:hsla(0,0%,100%,0);border-bottom:1px solid var(--blacks-border-color,#282828);color:var(--white-100);display:flex;font-family:var(--font-family-body);font-size:var(--nav-link-size);font-style:normal;font-weight:400;gap:var(--spacing-sm);justify-content:space-between;padding:var(--spacing-sm);transition:background-color .3s ease-in-out;width:100%}.siteHeaderContainer .rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5 img{height:var(--nav-icon-size);width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5.rockstargames-modules-core-headera81cbcdbdd397a2a286c23049697987b{border-bottom:none;border-radius:4px;margin-right:var(--margin-xs);padding:var(--padding-xs)}.siteHeaderContainer .rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5:focus,.siteHeaderContainer .rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5:hover{background-color:var(--white-15)}.siteHeaderContainer .rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5:last-child{border:none}", "", {
        version: 3,
        sources: ["webpack://./src/components/SubMenu/components/SubMenuItem/index.less"],
        names: [],
        mappings: "AAAA,wFAGI,kBAAA,CACA,sBAAA,CAaA,kCAAA,CAFA,0DAAA,CARA,sBAAA,CANA,YAAA,CAOA,mCAAA,CACA,8BAAA,CACA,iBAAA,CACA,eAAA,CAEA,qBAAA,CAXA,6BAAA,CAYA,yBAAA,CAEA,2CAAA,CAXA,UAWJ,CAhBA,4FAqBQ,2BAAA,CADA,0BAAR,CAII,0JAGI,kBAAA,CACA,iBAAA,CAFA,6BAAA,CADA,yBACR,CAKI,4LAEI,gCAHR,CAMI,mGACI,WAJR",
        sourcesContent: [".subMenuItem {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: transparent;\n    width: 100%;\n\n    color: var(--white-100);\n    font-family: var(--font-family-body);\n    font-size: var(--nav-link-size);\n    font-style: normal;\n    font-weight: 400;\n\n    gap: var(--spacing-sm);\n    padding: var(--spacing-sm);\n    border-bottom: 1px solid var(--blacks-border-color, #282828);\n    transition: background-color 0.3s ease-in-out;\n    background-color: rgba(255, 255, 255, 0);\n\n    img {\n        width: var(--nav-icon-size);\n        height: var(--nav-icon-size);\n    }\n\n    &.nested {\n        padding: var(--padding-xs);\n        margin-right: var(--margin-xs);\n        border-bottom: none;\n        border-radius: 4px;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-15);\n    }\n\n    &:last-child {\n        border: none;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        subMenuItem: "rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5",
        nested: "rockstargames-modules-core-headera81cbcdbdd397a2a286c23049697987b"
      };
      const s = i
    },
    14907: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.siteHeaderContainer .rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513:focus,.siteHeaderContainer .rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513:hover{background-color:var(--white-40);outline:none}.siteHeaderContainer .rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513.rockstargames-modules-core-headerdc9de673c49d945b85a20bf5e859500a{background:var(--white-100);color:var(--black-200)}.siteHeaderContainer .rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513.rockstargames-modules-core-headerdc9de673c49d945b85a20bf5e859500a img{filter:invert()}.siteHeaderContainer .rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7{align-items:flex-start;background:var(--black-100);border:1px solid var(--blacks-border-color);border-radius:var(--border-radius-md);box-shadow:var(--global-navigation-box-shadow);display:inline-flex;flex-direction:column;max-height:calc(100vh - 16px - var(--global-navigation-height));max-height:calc(100dvh - 16px - var(--global-navigation-height));min-width:var(--sub-nav-min-width);opacity:0;overflow-y:auto;scrollbar-color:var(--scroll-thumb-color) var(--scroll-track-color);scrollbar-width:auto;transition:opacity .3s ease-in-out;z-index:999}.siteHeaderContainer .rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7::-webkit-scrollbar{width:8px}.siteHeaderContainer .rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7::-webkit-scrollbar-track{background:transparent}.siteHeaderContainer .rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7::-webkit-scrollbar-thumb{background-color:var(--scroll-thumb-color);border:none;border-radius:10px}.siteHeaderContainer .rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7 a[data-ui-name=sub-menu-item]:focus-visible,.siteHeaderContainer .rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7 div[data-ui-name=sub-menu-item] button:focus-visible{background-color:var(--white-15);border:1px solid var(--white-100);border-radius:6px;outline:none}.siteHeaderContainer .rockstargames-modules-core-headerae886af8e4ee1f3fa82f58141f31dccb{opacity:1}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/SubMenu/index.less"],
        names: [],
        mappings: "AA2QA,wFAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4FAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4LAEI,gCAAA,CACA,YC/OR,CDkPI,0JAEI,2BAAA,CADA,sBC/OR,CD8OI,8JAKQ,eChPZ,CAjEA,wFAKI,sBAAA,CAGA,2BAAA,CADA,2CAAA,CADA,qCAAA,CAKA,8CAAA,CARA,mBAAA,CACA,qBAAA,CAQA,+DAAA,CACA,gEAAA,CAJA,kCAAA,CAOA,SAAA,CAFA,eAAA,CDoUA,mEAAA,CADA,oBAAA,CChUA,kCAAA,CAFA,WAsEJ,CDgQI,2GACI,SC9PR,CDgQI,iHACI,sBC9PR,CDgQI,iHACI,0CAAA,CAEA,WAAA,CADA,kBC7PR,CA3EQ,iRAII,gCAAA,CAFA,iCAAA,CACA,iBAAA,CAFA,YAiFZ,CAzEA,wFACI,SA2EJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.subMenu {\n    .scrollbar();\n\n    display: inline-flex;\n    flex-direction: column;\n    align-items: flex-start;\n    border-radius: var(--border-radius-md);\n    border: 1px solid var(--blacks-border-color);\n    background: var(--black-100);\n    min-width: var(--sub-nav-min-width);\n\n    box-shadow: var(--global-navigation-box-shadow);\n    max-height: calc(100vh - 16px - var(--global-navigation-height));\n    max-height: calc(100dvh - 16px - var(--global-navigation-height));\n    overflow-y: auto;\n    z-index: 999;\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n\n    a[data-ui-name='sub-menu-item'],\n    div[data-ui-name='sub-menu-item'] button {\n        &:focus-visible {\n            outline: none;\n            border: solid 1px var(--white-100);\n            border-radius: 6px;\n            background-color: var(--white-15);\n        }\n    }\n}\n\n.fadeIn {\n    opacity: 1;\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513",
        selected: "rockstargames-modules-core-headerdc9de673c49d945b85a20bf5e859500a",
        subMenu: "rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7",
        fadeIn: "rockstargames-modules-core-headerae886af8e4ee1f3fa82f58141f31dccb"
      };
      const s = i
    },
    59303: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerc02f6922f08136a6e751eed320862016{overflow:hidden}.siteHeaderContainer .rockstargames-modules-core-headerf24a7f458786bb57d5a3bc334c6355fc{align-items:center;background-color:initial;border:none;border-radius:0;color:inherit;color:var(--white-100);display:flex;font-size:var(--nav-link-size);font-style:normal;font-weight:700;justify-content:space-between;letter-spacing:-.025em;line-height:100%;padding:var(--padding-sm) var(--padding-md);text-decoration:none;width:100%}.siteHeaderContainer .rockstargames-modules-core-headerf24a7f458786bb57d5a3bc334c6355fc img{transition:transform .2s ease-in-out;width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headerf24a7f458786bb57d5a3bc334c6355fc.rockstargames-modules-core-headerbb4494f77dcd9ffda130e4e916bdb05d img{transform:rotate(180deg)}.siteHeaderContainer .rockstargames-modules-core-headerbf4e902d509c225732afae50338dd4c0{margin-left:var(--sub-nav-indent);overflow:hidden}", "", {
        version: 3,
        sources: ["webpack://./src/components/SubMenuMobile/components/SubMenuDropdownMobile/index.less"],
        names: [],
        mappings: "AAAA,wFACI,eACJ,CAEA,wFAKI,kBAAA,CAMA,wBAAA,CAEA,WAAA,CACA,eAAA,CAFA,aAAA,CAIA,sBAAA,CAdA,YAAA,CADA,8BAAA,CAOA,iBAAA,CAEA,eAAA,CANA,6BAAA,CAGA,sBAAA,CADA,gBAAA,CAHA,2CAAA,CAMA,oBAAA,CAMA,UACJ,CAhBA,4FAoBQ,oCAAA,CADA,0BACR,CAGI,8JAEQ,wBAFZ,CAOA,wFAEI,iCAAA,CADA,eAJJ",
        sourcesContent: [".subMenuDropdownContainer {\n    overflow: hidden;\n}\n\n.subMenuDropdownButton {\n    font-size: var(--nav-link-size);\n    display: flex;\n    padding: var(--padding-sm) var(--padding-md);\n    justify-content: space-between;\n    align-items: center;\n    line-height: 100%;\n    letter-spacing: -0.025em;\n    font-style: normal;\n    text-decoration: none;\n    font-weight: 700;\n    background-color: transparent;\n    color: inherit;\n    border: none;\n    border-radius: 0;\n    width: 100%;\n    color: var(--white-100);\n\n    img {\n        width: var(--nav-icon-size);\n        transition: transform 0.2s ease-in-out;\n    }\n\n    &.open {\n        img {\n            transform: rotate(180deg);\n        }\n    }\n}\n\n.subMenuDropdownItems {\n    overflow: hidden;\n    margin-left: var(--sub-nav-indent);\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        subMenuDropdownContainer: "rockstargames-modules-core-headerc02f6922f08136a6e751eed320862016",
        subMenuDropdownButton: "rockstargames-modules-core-headerf24a7f458786bb57d5a3bc334c6355fc",
        open: "rockstargames-modules-core-headerbb4494f77dcd9ffda130e4e916bdb05d",
        subMenuDropdownItems: "rockstargames-modules-core-headerbf4e902d509c225732afae50338dd4c0"
      };
      const s = i
    },
    56257: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, "", "", {
        version: 3,
        sources: [],
        names: [],
        mappings: "",
        sourceRoot: ""
      }]), i.locals = {};
      const s = i
    },
    15801: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var r = n(42587),
        t = n.n(r),
        o = n(15081),
        i = n.n(o)()(t());
      i.push([e.id, ".siteHeaderContainer .rockstargames-modules-core-headerad11bebe60eb9c08d9bb91f941f50d2a{margin:0 0 0 var(--sub-nav-indent);overflow:hidden}", "", {
        version: 3,
        sources: ["webpack://./src/components/SubMenuMobile/index.less"],
        names: [],
        mappings: "AAAA,wFAEI,kCAAA,CADA,eAEJ",
        sourcesContent: [".subMenu {\n    overflow: hidden;\n    margin: 0 0 0 var(--sub-nav-indent);\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        subMenu: "rockstargames-modules-core-headerad11bebe60eb9c08d9bb91f941f50d2a"
      };
      const s = i
    },
    34967: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c46845952588bf44125a37117d4da32c.svg"
    }
  }
]);