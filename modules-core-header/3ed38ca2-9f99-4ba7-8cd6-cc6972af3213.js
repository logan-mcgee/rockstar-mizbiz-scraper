! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3ed38ca2-9f99-4ba7-8cd6-cc6972af3213", e._sentryDebugIdIdentifier = "sentry-dbid-3ed38ca2-9f99-4ba7-8cd6-cc6972af3213")
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
  [7683, 7344], {
    4066: (e, a, n) => {
      n.d(a, {
        A: () => w,
        K: () => f
      });
      var t = n(95966);
      const r = (0, t.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, t.makeVar)(null)
        }),
        o = e => r(e),
        i = (0, t.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, t.makeVar)(!1)
        }),
        s = e => i(e),
        d = (0, t.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, t.makeVar)(!1)
        }),
        l = e => d(e),
        c = (0, t.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, t.makeVar)((0, t.webSettingsReactive)()?.currentCharId)
        }),
        A = e => c(e),
        m = (0, t.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, t.makeVar)(null)
        }),
        g = e => m(e),
        f = (0, t.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, t.makeVar)(null)
        }),
        h = (0, t.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, t.makeVar)(!1)
        }),
        p = e => h(e),
        u = (0, t.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, t.makeVar)(!1)
        }),
        b = e => u(e),
        C = (0, t.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, t.makeVar)(null)
        }),
        v = e => C(e),
        w = () => {
          const e = (0, t.useReactiveVar)(h),
            a = (0, t.useReactiveVar)(u),
            n = (0, t.useReactiveVar)(c),
            f = (0, t.useReactiveVar)(r),
            w = (0, t.useReactiveVar)(d),
            x = (0, t.useReactiveVar)(m);
          return {
            charactersNeeded: e,
            crewsNeeded: a,
            currentCharId: n,
            hasNotifications: w,
            navOpen: f,
            userData: (0, t.useReactiveVar)(C),
            selectedCharacterTuple: x,
            jumpScMenuFocus: (0, t.useReactiveVar)(i),
            setCharactersNeeded: p,
            setCrewsNeeded: b,
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
        GtmProvider: () => t.UN,
        RockstarUserProvider: () => t.iR,
        useGtmTrack: () => t.h,
        useRockstarUser: () => t.Wx,
        useRockstarUserState: () => r.A
      });
      var t = n(85712),
        r = n(4066)
    },
    85712: (e, a, n) => {
      n.d(a, {
        UN: () => c,
        iR: () => w,
        h: () => m,
        Wx: () => x
      });
      var t = n(62229),
        r = n(95966),
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
      const l = (0, r.setContextItem)({
          context: (0, t.createContext)(void 0),
          key: "gtmContext22"
        }),
        c = e => {
          let {
            checkUser: a,
            children: n
          } = e;
          const c = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, n] = (0, t.useState)([]), [d, l] = (0, t.useState)([]), [c, A] = (0, t.useState)(null), {
                data: m,
                loggedIn: g
              } = (0, o.useRockstarUser)(), {
                hasGtaPlus: f
              } = m ?? {}, h = (0, i.bn)(), p = (e, t) => {
                const o = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = t ?? {};
                    (0, r.track)({
                      ...e,
                      ...a
                    }), o.push(e)
                  }
                })), n([...a, ...o])
              };
              (0, t.useEffect)((() => {
                if (m && null !== g) {
                  const e = u(m);
                  d.length && e && p(d, e), A(e)
                } else e || d.length && p(d)
              }), [m, g, d]), (0, t.useEffect)((() => {
                const e = d.filter((e => -1 === a.indexOf(e)));
                l(e)
              }), [a]);
              const u = e => {
                const a = [],
                  n = [],
                  t = [],
                  r = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [o, i] = e;
                  i.length && i.forEach((e => {
                    const i = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === o) {
                      n.includes(i) || n.push(i), t.includes(i) || "1" !== e.stats?.overview?.hasGtaPlus?.value || t.push(i);
                      const a = `${o}_${e.platform}`;
                      r.includes(a) || r.push(a)
                    }
                    a.includes(i) || a.push(i)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [n, t] = e;
                  r.push(`${n}_${t}`), a.includes(t) || a.push(t)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: g ?? !1,
                  gta_plus_active: !!g && Boolean(f),
                  platforms_played: a.length ? a.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: r.length ? r.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: n.length ? n.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: t.length ? t.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
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
                  return (0, r.track)({
                    ...e,
                    ...c
                  })
                }
              }
            }(a),
            A = (0, t.useMemo)((() => c), [c, a]);
          return (0, d.jsx)(l.Provider, {
            value: A,
            children: n
          })
        },
        A = {
          track: () => null
        },
        m = () => (0, t.useContext)(l) ?? A;
      var g = n(4066);
      var f = n(17531),
        h = n.n(f);
      var p = n(37240),
        u = n(35422);
      const b = e => {
          let {
            privateToken: a
          } = e;
          const {
            charactersNeeded: n,
            crewsNeeded: o,
            currentCharId: i
          } = (0, g.A)(), s = (0, r.useRockstarToken)(), [d, l] = (0, t.useState)(), [c] = (0, r.useRockstarTokenReactive)(), A = (0, r.useRockstarTokenPing)(), [m, f] = (0, t.useState)(), [b, C] = (0, t.useState)(!1), v = void 0 === m, [w, x] = (0, t.useState)(1);
          return (0, t.useEffect)((() => {
            "gtao" !== n || d?.characters?.gtao || (l({
              ...d,
              accountSynced: !1
            }), x((e => e + 1)))
          }), [n, d?.characters?.gtao]), (0, t.useEffect)((() => {
            o && !d?.crews && (l({
              ...d,
              accountSynced: !1
            }), x((e => e + 1)))
          }), [o, d?.crews]), (0, t.useEffect)((() => {
            0 === w && l({
              ...d,
              accountSynced: !0
            })
          }), [w]), (0, t.useEffect)((() => {
            a && c(a)
          }), [a]), (0, t.useEffect)((() => {
            "" !== s || A()
          }), [s]), (0, t.useEffect)((() => {
            if ("" === s) return;
            const e = !!s;
            if (e || b || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: a
                    } = e;
                    const {
                      gateway: n,
                      silentCheck: t
                    } = (0, r.getConfigForDomain)(), o = {
                      method: "POST",
                      body: `fingerprint=${await h().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, i = await fetch(t, o);
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
              })(), C(!0)), !e && b && f(!1), e) {
              const e = (e => {
                let {
                  bearerToken: a
                } = e;
                const n = (0, p.s)(a),
                  {
                    host: t
                  } = (0, r.getConfigForDomain)(),
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
                  profile_link: `https://${t}.rockstargames.com/member/${i}?id=${o}`
                }
              })({
                bearerToken: s
              });
              l({
                ...d,
                ...e
              })
            }
          }), [s, b]), (0, t.useEffect)((() => {
            (async () => {
              if (m && d && o && !d?.crews) {
                const e = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: n
                  } = e;
                  const {
                    crews: t
                  } = await (0, r.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: n
                    }
                  });
                  return t
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
          }), [d?.nickname, o, m]), (0, t.useEffect)((() => {
            (async () => {
              if (!m || !d || d?.gamesPlayed) return;
              const e = await (async e => {
                let {
                  pingBearer: a
                } = e;
                const {
                  all: n
                } = await (0, r.coreScApiFetch)("profile/lastPlayed", {
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
          }), [d?.nickname, m]), (0, t.useEffect)((() => {
            (async () => {
              if (m && d && "gtao" === n && !d?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: a
                } = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: n,
                    rockstarId: t
                  } = e;
                  const o = [],
                    i = await (0, r.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  await (i?.platforms?.reduce((async (e, n) => {
                    if (await e, ["ps3", "xbox", "xbox360"].includes(n)) return;
                    const t = await (0, r.coreScApiFetch)(`games/gtao/characters?platform=${n}`, {
                      pingBearer: a
                    });
                    t?.status && t?.result?.map((e => {
                      const {
                        stats: a
                      } = e, {
                        overview: t
                      } = a, {
                        rank: r
                      } = t;
                      if ("0" === r.value) return;
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
                  } = await (0, r.coreScApiFetch)(`profile/getprofile?nickname=${n}&maxFriends=0`, {
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
                  if (c?.rockstarId !== t) return {
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
          }), [n, d?.nickname, m]), (0, t.useEffect)((() => {
            d?.id && d?.nonExpiredToken && (f(!0), (0, g.K)(d.id))
          }), [JSON.stringify(d)]), {
            data: d,
            loggedIn: m,
            loading: v
          }
        },
        C = {},
        v = (0, r.setContextItem)({
          context: (0, t.createContext)(C),
          key: "userContext"
        }),
        w = e => {
          let {
            children: a,
            privateToken: n
          } = e;
          const r = b({
              privateToken: n
            }),
            o = (0, t.useMemo)((() => ({
              ...r,
              privateToken: n,
              hasProvider: !0
            })), [r]);
          return (0, d.jsx)(v.Provider, {
            value: o,
            children: a
          })
        },
        x = () => (0, t.useContext)(v)
    },
    68111: (e, a, n) => {
      n.d(a, {
        A: () => Mi
      });
      var t = n(62229),
        r = n(81788),
        o = n(2918),
        i = n(94038),
        s = n(95966),
        d = n(85712),
        l = n(53178),
        c = n.n(l),
        A = n(94566),
        m = n.n(A),
        g = n(31610),
        f = n.n(g),
        h = n(82510),
        p = n.n(h),
        u = n(39460),
        b = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      b.setAttributes = f(), b.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, b.domAPI = m(), b.insertStyleElement = p(), c()(u.A, b);
      const C = u.A && u.A.locals ? u.A.locals : void 0;
      var v = n(73855);
      class w extends t.Component {
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, v.jsxs)("div", {
            className: C.errorMsg,
            children: [(0, v.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, v.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      var x = n(27413),
        y = n(52542),
        k = n(30062);
      const B = (0, t.createContext)({
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
        _ = e => {
          let {
            navData: a,
            location: n,
            onNavigate: i,
            routeOptions: s,
            children: d,
            searchConfig: l
          } = e;
          const [c, A] = (0, t.useState)(null), [m, g] = (0, t.useMemo)((() => (0, r.getLocale)()), []), {
            hash: f
          } = n, {
            data: h
          } = (0, o.useRockstarUser)(), p = (0, k.A)(), u = (0, t.useMemo)((() => {
            const e = {
              ...n,
              ...window.location
            };
            return {
              navigationData: a,
              onNavigate: i,
              environment: p,
              location: e,
              locale: m,
              rockstarUser: h,
              openedDropdown: c,
              setOpenedDropdown: A,
              routeOptions: s,
              searchConfig: l
            }
          }), [a, m, JSON.stringify(n), p, c, s, h]);
          return (0, t.useEffect)((() => {
            g(m.iso);
            const e = () => A(null);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", e)
            }
          }), []), (0, t.useEffect)((() => {
            const e = f?.replace("#", "");
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
          }), [f]), (0, v.jsx)(B.Provider, {
            value: u,
            children: d
          })
        },
        I = () => {
          const e = (0, t.useContext)(B);
          if (void 0 === e) throw new Error("useDomainEnvironment must be used within a Navigation Provider");
          return e.environment
        },
        S = () => {
          const e = (0, t.useContext)(B);
          if (void 0 === e) throw new Error("useRockstarUserProfile must be used within a Navigation Provider");
          return e.rockstarUser
        },
        z = () => {
          const e = (0, t.useContext)(B);
          if (void 0 === e) throw new Error("useOpenDropdown must be used within a Navigation Provider");
          const {
            openedDropdown: a,
            setOpenedDropdown: n
          } = e;
          return [a, e => {
            n(e === a ? null : e)
          }]
        },
        R = () => {
          const e = (0, t.useContext)(B);
          if (void 0 === e) throw new Error("useSearchConfig must be used within a Navigation Provider");
          return e.searchConfig
        },
        D = () => {
          const e = (0, t.useContext)(B);
          if (void 0 === e) throw new Error("useRouteOptions must be used within a Navigation Provider");
          return e.routeOptions
        },
        E = () => {
          const e = (0, t.useContext)(B);
          if (void 0 === e) throw new Error("useWindowLocation must be used within a Navigation Provider");
          return e.location
        },
        N = () => {
          const e = (0, t.useContext)(B);
          if (void 0 === e) throw new Error("useOnNavigate must be used within a Navigation Provider");
          return e.onNavigate
        };
      var F = n(13581);
      let M, T, O, L, j, P, H, G, W, K, J, U, Q, q, Y = () => M || "undefined" != typeof window && (M = window.gsap) && M.registerPlugin && M,
        $ = 1,
        V = [],
        X = [],
        Z = [],
        ee = Date.now,
        ae = (e, a) => a,
        ne = (e, a) => ~Z.indexOf(e) && Z[Z.indexOf(e) + 1][a],
        te = e => !!~J.indexOf(e),
        re = (e, a, n, t, r) => e.addEventListener(a, n, {
          passive: !t,
          capture: !!r
        }),
        oe = (e, a, n, t) => e.removeEventListener(a, n, !!t),
        ie = "scrollLeft",
        se = "scrollTop",
        de = () => U && U.isPressed || X.cache++,
        le = (e, a) => {
          let n = t => {
            if (t || 0 === t) {
              $ && (L.history.scrollRestoration = "manual");
              let a = U && U.isPressed;
              t = n.v = Math.round(t) || (U && U.iOS ? 1 : 0), e(t), n.cacheID = X.cache, a && ae("ss", t)
            } else(a || X.cache !== n.cacheID || ae("ref")) && (n.cacheID = X.cache, n.v = e());
            return n.v + n.offset
          };
          return n.offset = 0, e && n
        },
        ce = {
          s: ie,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: le((function(e) {
            return arguments.length ? L.scrollTo(e, Ae.sc()) : L.pageXOffset || j[ie] || P[ie] || H[ie] || 0
          }))
        },
        Ae = {
          s: se,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: ce,
          sc: le((function(e) {
            return arguments.length ? L.scrollTo(ce.sc(), e) : L.pageYOffset || j[se] || P[se] || H[se] || 0
          }))
        },
        me = (e, a) => (a && a._ctx && a._ctx.selector || M.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== M.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        ge = (e, a) => {
          let {
            s: n,
            sc: t
          } = a;
          te(e) && (e = j.scrollingElement || P);
          let r = X.indexOf(e),
            o = t === Ae.sc ? 1 : 2;
          !~r && (r = X.push(e) - 1), X[r + o] || re(e, "scroll", de);
          let i = X[r + o],
            s = i || (X[r + o] = le(ne(e, n), !0) || (te(e) ? t : le((function(a) {
              return arguments.length ? e[n] = a : e[n]
            }))));
          return s.target = e, i || (s.smooth = "smooth" === M.getProperty(e, "scrollBehavior")), s
        },
        fe = (e, a, n) => {
          let t = e,
            r = e,
            o = ee(),
            i = o,
            s = a || 50,
            d = Math.max(500, 3 * s),
            l = (e, a) => {
              let d = ee();
              a || d - o > s ? (r = t, t = e, i = o, o = d) : n ? t += e : t = r + (e - r) / (d - i) * (o - i)
            };
          return {
            update: l,
            reset: () => {
              r = t = n ? 0 : t, i = o = 0
            },
            getVelocity: e => {
              let a = i,
                s = r,
                c = ee();
              return (e || 0 === e) && e !== t && l(e), o === i || c - i > d ? 0 : (t + (n ? s : -s)) / ((n ? c : o) - a) * 1e3
            }
          }
        },
        he = (e, a) => (a && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        pe = e => {
          let a = Math.max(...e),
            n = Math.min(...e);
          return Math.abs(a) >= Math.abs(n) ? a : n
        },
        ue = () => {
          K = M.core.globals().ScrollTrigger, K && K.core && (() => {
            let e = K.core,
              a = e.bridge || {},
              n = e._scrollers,
              t = e._proxies;
            n.push(...X), t.push(...Z), X = n, Z = t, ae = (e, n) => a[e](n)
          })()
        },
        be = e => (M = e || Y(), M && "undefined" != typeof document && document.body && (L = window, j = document, P = j.documentElement, H = j.body, J = [L, j, P, H], O = M.utils.clamp, q = M.core.context || function() {}, W = "onpointerenter" in H ? "pointer" : "mouse", G = Ce.isTouch = L.matchMedia && L.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in L || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Q = Ce.eventTypes = ("ontouchstart" in P ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in P ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => $ = 0), 500), ue(), T = 1), T);
      ce.op = Ae, X.cache = 0;
      class Ce {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          T || be(M) || console.warn("Please gsap.registerPlugin(Observer)"), K || ue();
          let {
            tolerance: a,
            dragMinimum: n,
            type: t,
            target: r,
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
            onRight: b,
            onLeft: C,
            onUp: v,
            onDown: w,
            onChangeX: x,
            onChangeY: y,
            onChange: k,
            onToggleX: B,
            onToggleY: _,
            onHover: I,
            onHoverEnd: S,
            onMove: z,
            ignoreCheck: R,
            isNormalizer: D,
            onGestureStart: E,
            onGestureEnd: N,
            onWheel: F,
            onEnable: O,
            onDisable: J,
            onClick: Y,
            scrollSpeed: $,
            capture: X,
            allowClicks: Z,
            lockAxis: ae,
            onLockAxis: ne
          } = e;
          this.target = r = me(r) || P, this.vars = e, c && (c = M.utils.toArray(c)), a = a || 1e-9, n = n || 0, A = A || 1, $ = $ || 1, t = t || "wheel,touch,pointer", i = !1 !== i, o || (o = parseFloat(L.getComputedStyle(H).lineHeight) || 22);
          let ie, se, le, Ce, ve, we, xe, ye = this,
            ke = 0,
            Be = 0,
            _e = ge(r, ce),
            Ie = ge(r, Ae),
            Se = _e(),
            ze = Ie(),
            Re = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === Q[0],
            De = te(r),
            Ee = r.ownerDocument || j,
            Ne = [0, 0, 0],
            Fe = [0, 0, 0],
            Me = 0,
            Te = () => Me = ee(),
            Oe = (e, a) => (ye.event = e) && c && ~c.indexOf(e.target) || a && Re && "touch" !== e.pointerType || R && R(e, a),
            Le = () => {
              let e = ye.deltaX = pe(Ne),
                n = ye.deltaY = pe(Fe),
                t = Math.abs(e) >= a,
                r = Math.abs(n) >= a;
              k && (t || r) && k(ye, e, n, Ne, Fe), t && (b && ye.deltaX > 0 && b(ye), C && ye.deltaX < 0 && C(ye), x && x(ye), B && ye.deltaX < 0 != ke < 0 && B(ye), ke = ye.deltaX, Ne[0] = Ne[1] = Ne[2] = 0), r && (w && ye.deltaY > 0 && w(ye), v && ye.deltaY < 0 && v(ye), y && y(ye), _ && ye.deltaY < 0 != Be < 0 && _(ye), Be = ye.deltaY, Fe[0] = Fe[1] = Fe[2] = 0), (Ce || le) && (z && z(ye), le && (h(ye), le = !1), Ce = !1), we && !(we = !1) && ne && ne(ye), ve && (F(ye), ve = !1), ie = 0
            },
            je = (e, a, n) => {
              Ne[n] += e, Fe[n] += a, ye._vx.update(e), ye._vy.update(a), i ? ie || (ie = requestAnimationFrame(Le)) : Le()
            },
            Pe = (e, a) => {
              ae && !xe && (ye.axis = xe = Math.abs(e) > Math.abs(a) ? "x" : "y", we = !0), "y" !== xe && (Ne[2] += e, ye._vx.update(e, !0)), "x" !== xe && (Fe[2] += a, ye._vy.update(a, !0)), i ? ie || (ie = requestAnimationFrame(Le)) : Le()
            },
            He = e => {
              if (Oe(e, 1)) return;
              let a = (e = he(e, s)).clientX,
                t = e.clientY,
                r = a - ye.x,
                o = t - ye.y,
                i = ye.isDragging;
              ye.x = a, ye.y = t, (i || Math.abs(ye.startX - a) >= n || Math.abs(ye.startY - t) >= n) && (h && (le = !0), i || (ye.isDragging = !0), Pe(r, o), i || g && g(ye))
            },
            Ge = ye.onPress = e => {
              Oe(e, 1) || e && e.button || (ye.axis = xe = null, se.pause(), ye.isPressed = !0, e = he(e), ke = Be = 0, ye.startX = ye.x = e.clientX, ye.startY = ye.y = e.clientY, ye._vx.reset(), ye._vy.reset(), re(D ? r : Ee, Q[1], He, s, !0), ye.deltaX = ye.deltaY = 0, p && p(ye))
            },
            We = ye.onRelease = e => {
              if (Oe(e, 1)) return;
              oe(D ? r : Ee, Q[1], He, !0);
              let a = !isNaN(ye.y - ye.startY),
                n = ye.isDragging && (Math.abs(ye.x - ye.startX) > 3 || Math.abs(ye.y - ye.startY) > 3),
                t = he(e);
              !n && a && (ye._vx.reset(), ye._vy.reset(), s && Z && M.delayedCall(.08, (() => {
                if (ee() - Me > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (Ee.createEvent) {
                  let a = Ee.createEvent("MouseEvents");
                  a.initMouseEvent("click", !0, !0, L, 1, t.screenX, t.screenY, t.clientX, t.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(a)
                }
              }))), ye.isDragging = ye.isGesturing = ye.isPressed = !1, d && !D && se.restart(!0), f && n && f(ye), u && u(ye, n)
            },
            Ke = e => e.touches && e.touches.length > 1 && (ye.isGesturing = !0) && E(e, ye.isDragging),
            Je = () => (ye.isGesturing = !1) || N(ye),
            Ue = e => {
              if (Oe(e)) return;
              let a = _e(),
                n = Ie();
              je((a - Se) * $, (n - ze) * $, 1), Se = a, ze = n, d && se.restart(!0)
            },
            Qe = e => {
              if (Oe(e)) return;
              e = he(e, s), F && (ve = !0);
              let a = (1 === e.deltaMode ? o : 2 === e.deltaMode ? L.innerHeight : 1) * A;
              je(e.deltaX * a, e.deltaY * a, 0), d && !D && se.restart(!0)
            },
            qe = e => {
              if (Oe(e)) return;
              let a = e.clientX,
                n = e.clientY,
                t = a - ye.x,
                r = n - ye.y;
              ye.x = a, ye.y = n, Ce = !0, (t || r) && Pe(t, r)
            },
            Ye = e => {
              ye.event = e, I(ye)
            },
            $e = e => {
              ye.event = e, S(ye)
            },
            Ve = e => Oe(e) || he(e, s) && Y(ye);
          se = ye._dc = M.delayedCall(l || .25, (() => {
            ye._vx.reset(), ye._vy.reset(), se.pause(), d && d(ye)
          })).pause(), ye.deltaX = ye.deltaY = 0, ye._vx = fe(0, 50, !0), ye._vy = fe(0, 50, !0), ye.scrollX = _e, ye.scrollY = Ie, ye.isDragging = ye.isGesturing = ye.isPressed = !1, q(this), ye.enable = e => (ye.isEnabled || (re(De ? Ee : r, "scroll", de), t.indexOf("scroll") >= 0 && re(De ? Ee : r, "scroll", Ue, s, X), t.indexOf("wheel") >= 0 && re(r, "wheel", Qe, s, X), (t.indexOf("touch") >= 0 && G || t.indexOf("pointer") >= 0) && (re(r, Q[0], Ge, s, X), re(Ee, Q[2], We), re(Ee, Q[3], We), Z && re(r, "click", Te, !1, !0), Y && re(r, "click", Ve), E && re(Ee, "gesturestart", Ke), N && re(Ee, "gestureend", Je), I && re(r, W + "enter", Ye), S && re(r, W + "leave", $e), z && re(r, W + "move", qe)), ye.isEnabled = !0, e && e.type && Ge(e), O && O(ye)), ye), ye.disable = () => {
            ye.isEnabled && (V.filter((e => e !== ye && te(e.target))).length || oe(De ? Ee : r, "scroll", de), ye.isPressed && (ye._vx.reset(), ye._vy.reset(), oe(D ? r : Ee, Q[1], He, !0)), oe(De ? Ee : r, "scroll", Ue, X), oe(r, "wheel", Qe, X), oe(r, Q[0], Ge, X), oe(Ee, Q[2], We), oe(Ee, Q[3], We), oe(r, "click", Te, !0), oe(r, "click", Ve), oe(Ee, "gesturestart", Ke), oe(Ee, "gestureend", Je), oe(r, W + "enter", Ye), oe(r, W + "leave", $e), oe(r, W + "move", qe), ye.isEnabled = ye.isPressed = ye.isDragging = !1, J && J(ye))
          }, ye.kill = ye.revert = () => {
            ye.disable();
            let e = V.indexOf(ye);
            e >= 0 && V.splice(e, 1), U === ye && (U = 0)
          }, V.push(ye), D && te(r) && (U = ye), ye.enable(m)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      Ce.version = "3.12.2", Ce.create = e => new Ce(e), Ce.register = be, Ce.getAll = () => V.slice(), Ce.getById = e => V.filter((a => a.vars.id === e))[0], Y() && M.registerPlugin(Ce);
      let ve, we, xe, ye, ke, Be, _e, Ie, Se, ze, Re, De, Ee, Ne, Fe, Me, Te, Oe, Le, je, Pe, He, Ge, We, Ke, Je, Ue, Qe, qe, Ye, $e, Ve, Xe, Ze, ea, aa, na = 1,
        ta = Date.now,
        ra = ta(),
        oa = 0,
        ia = 0,
        sa = (e, a, n) => {
          let t = wa(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return n["_" + a + "Clamp"] = t, t ? e.substr(6, e.length - 7) : e
        },
        da = (e, a) => !a || wa(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        la = () => ia && requestAnimationFrame(la),
        ca = () => Ne = 1,
        Aa = () => Ne = 0,
        ma = e => e,
        ga = e => Math.round(1e5 * e) / 1e5 || 0,
        fa = () => "undefined" != typeof window,
        ha = () => ve || fa() && (ve = window.gsap) && ve.registerPlugin && ve,
        pa = e => !!~_e.indexOf(e),
        ua = e => ("Height" === e ? $e : xe["inner" + e]) || ke["client" + e] || Be["client" + e],
        ba = e => ne(e, "getBoundingClientRect") || (pa(e) ? () => (Dn.width = xe.innerWidth, Dn.height = $e, Dn) : () => Ka(e)),
        Ca = (e, a) => {
          let {
            s: n,
            d2: t,
            d: r,
            a: o
          } = a;
          return Math.max(0, (n = "scroll" + t) && (o = ne(e, n)) ? o() - ba(e)()[r] : pa(e) ? (ke[n] || Be[n]) - ua(t) : e[n] - e["offset" + t])
        },
        va = (e, a) => {
          for (let n = 0; n < Le.length; n += 3)(!a || ~a.indexOf(Le[n + 1])) && e(Le[n], Le[n + 1], Le[n + 2])
        },
        wa = e => "string" == typeof e,
        xa = e => "function" == typeof e,
        ya = e => "number" == typeof e,
        ka = e => "object" == typeof e,
        Ba = (e, a, n) => e && e.progress(a ? 0 : 1) && n && e.pause(),
        _a = (e, a) => {
          if (e.enabled) {
            let n = a(e);
            n && n.totalTime && (e.callbackAnimation = n)
          }
        },
        Ia = Math.abs,
        Sa = "left",
        za = "right",
        Ra = "bottom",
        Da = "width",
        Ea = "height",
        Na = "Right",
        Fa = "Left",
        Ma = "Top",
        Ta = "Bottom",
        Oa = "padding",
        La = "margin",
        ja = "Width",
        Pa = "Height",
        Ha = "px",
        Ga = e => xe.getComputedStyle(e),
        Wa = (e, a) => {
          for (let n in a) n in e || (e[n] = a[n]);
          return e
        },
        Ka = (e, a) => {
          let n = a && "matrix(1, 0, 0, 1, 0, 0)" !== Ga(e)[Fe] && ve.to(e, {
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
            t = e.getBoundingClientRect();
          return n && n.progress(0).kill(), t
        },
        Ja = (e, a) => {
          let {
            d2: n
          } = a;
          return e["offset" + n] || e["client" + n] || 0
        },
        Ua = e => {
          let a, n = [],
            t = e.labels,
            r = e.duration();
          for (a in t) n.push(t[a] / r);
          return n
        },
        Qa = e => {
          let a = ve.utils.snap(e),
            n = Array.isArray(e) && e.slice(0).sort(((e, a) => e - a));
          return n ? function(e, t) {
            let r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001;
            if (!t) return a(e);
            if (t > 0) {
              for (e -= o, r = 0; r < n.length; r++)
                if (n[r] >= e) return n[r];
              return n[r - 1]
            }
            for (r = n.length, e += o; r--;)
              if (n[r] <= e) return n[r];
            return n[0]
          } : function(n, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001,
              o = a(n);
            return !t || Math.abs(o - n) < r || o - n < 0 == t < 0 ? o : a(t < 0 ? n - e : n + e)
          }
        },
        qa = (e, a, n, t) => n.split(",").forEach((n => e(a, n, t))),
        Ya = (e, a, n, t, r) => e.addEventListener(a, n, {
          passive: !t,
          capture: !!r
        }),
        $a = (e, a, n, t) => e.removeEventListener(a, n, !!t),
        Va = (e, a, n) => {
          (n = n && n.wheelHandler) && (e(a, "wheel", n), e(a, "touchmove", n))
        },
        Xa = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        Za = {
          toggleActions: "play",
          anticipatePin: 0
        },
        en = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        an = (e, a) => {
          if (wa(e)) {
            let n = e.indexOf("="),
              t = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
            ~n && (e.indexOf("%") > n && (t *= a / 100), e = e.substr(0, n - 1)), e = t + (e in en ? en[e] * a : ~e.indexOf("%") ? parseFloat(e) * a / 100 : parseFloat(e) || 0)
          }
          return e
        },
        nn = (e, a, n, t, r, o, i, s) => {
          let {
            startColor: d,
            endColor: l,
            fontSize: c,
            indent: A,
            fontWeight: m
          } = r, g = ye.createElement("div"), f = pa(n) || "fixed" === ne(n, "pinType"), h = -1 !== e.indexOf("scroller"), p = f ? Be : n, u = -1 !== e.indexOf("start"), b = u ? d : l, C = "border-color:" + b + ";font-size:" + c + ";color:" + b + ";font-weight:" + m + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return C += "position:" + ((h || s) && f ? "fixed;" : "absolute;"), (h || s || !f) && (C += (t === Ae ? za : Ra) + ":" + (o + parseFloat(A)) + "px;"), i && (C += "box-sizing:border-box;text-align:left;width:" + i.offsetWidth + "px;"), g._isStart = u, g.setAttribute("class", "gsap-marker-" + e + (a ? " marker-" + a : "")), g.style.cssText = C, g.innerText = a || 0 === a ? e + "-" + a : e, p.children[0] ? p.insertBefore(g, p.children[0]) : p.appendChild(g), g._offset = g["offset" + t.op.d2], tn(g, 0, t, u), g
        },
        tn = (e, a, n, t) => {
          let r = {
              display: "block"
            },
            o = n[t ? "os2" : "p2"],
            i = n[t ? "p2" : "os2"];
          e._isFlipped = t, r[n.a + "Percent"] = t ? -100 : 0, r[n.a] = t ? "1px" : 0, r["border" + o + ja] = 1, r["border" + i + ja] = 0, r[n.p] = a + "px", ve.set(e, r)
        },
        rn = [],
        on = {},
        sn = () => ta() - oa > 34 && (Xe || (Xe = requestAnimationFrame(kn))),
        dn = () => {
          (!Ge || !Ge.isPressed || Ge.startX > Be.clientWidth) && (X.cache++, Ge ? Xe || (Xe = requestAnimationFrame(kn)) : kn(), oa || fn("scrollStart"), oa = ta())
        },
        ln = () => {
          Je = xe.innerWidth, Ke = xe.innerHeight
        },
        cn = () => {
          X.cache++, !Ee && !He && !ye.fullscreenElement && !ye.webkitFullscreenElement && (!We || Je !== xe.innerWidth || Math.abs(xe.innerHeight - Ke) > .25 * xe.innerHeight) && Ie.restart(!0)
        },
        An = {},
        mn = [],
        gn = () => $a(Ln, "scrollEnd", gn) || wn(!0),
        fn = e => An[e] && An[e].map((e => e())) || mn,
        hn = [],
        pn = e => {
          for (let a = 0; a < hn.length; a += 5)(!e || hn[a + 4] && hn[a + 4].query === e) && (hn[a].style.cssText = hn[a + 1], hn[a].getBBox && hn[a].setAttribute("transform", hn[a + 2] || ""), hn[a + 3].uncache = 1)
        },
        un = (e, a) => {
          let n;
          for (Me = 0; Me < rn.length; Me++) n = rn[Me], !n || a && n._ctx !== a || (e ? n.kill(1) : n.revert(!0, !0));
          a && pn(a), a || fn("revert")
        },
        bn = (e, a) => {
          X.cache++, (a || !Ze) && X.forEach((e => xa(e) && e.cacheID++ && (e.rec = 0))), wa(e) && (xe.history.scrollRestoration = qe = e)
        },
        Cn = 0,
        vn = () => {
          Be.appendChild(Ye), $e = Ye.offsetHeight || xe.innerHeight, Be.removeChild(Ye)
        },
        wn = (e, a) => {
          if (oa && !e) return void Ya(Ln, "scrollEnd", gn);
          vn(), Ze = Ln.isRefreshing = !0, X.forEach((e => xa(e) && ++e.cacheID && (e.rec = e())));
          let n = fn("refreshInit");
          je && Ln.sort(), a || un(), X.forEach((e => {
            xa(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), rn.slice(0).forEach((e => e.refresh())), rn.forEach(((e, a) => {
            if (e._subPinOffset && e.pin) {
              let a = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                n = e.pin[a];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[a] - n), e.refresh()
            }
          })), rn.forEach((e => {
            let a = Ca(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > a) && e.setPositions(e.start, Math.max(e.start + 1, a), !0)
          })), n.forEach((e => e && e.render && e.render(-1))), X.forEach((e => {
            xa(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), bn(qe, 1), Ie.pause(), Cn++, Ze = 2, kn(2), rn.forEach((e => xa(e.vars.onRefresh) && e.vars.onRefresh(e))), Ze = Ln.isRefreshing = !1, fn("refresh")
        },
        xn = 0,
        yn = 1,
        kn = e => {
          if (!Ze || 2 === e) {
            Ln.isUpdating = !0, aa && aa.update(0);
            let e = rn.length,
              a = ta(),
              n = a - ra >= 50,
              t = e && rn[0].scroll();
            if (yn = xn > t ? -1 : 1, Ze || (xn = t), n && (oa && !Ne && a - oa > 200 && (oa = 0, fn("scrollEnd")), Re = ra, ra = a), yn < 0) {
              for (Me = e; Me-- > 0;) rn[Me] && rn[Me].update(0, n);
              yn = 1
            } else
              for (Me = 0; Me < e; Me++) rn[Me] && rn[Me].update(0, n);
            Ln.isUpdating = !1
          }
          Xe = 0
        },
        Bn = [Sa, "top", Ra, za, La + Ta, La + Na, La + Ma, La + Fa, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        _n = Bn.concat([Da, Ea, "boxSizing", "max" + ja, "max" + Pa, "position", La, Oa, Oa + Ma, Oa + Na, Oa + Ta, Oa + Fa]),
        In = (e, a, n, t) => {
          if (!e._gsap.swappedIn) {
            let r, o = Bn.length,
              i = a.style,
              s = e.style;
            for (; o--;) r = Bn[o], i[r] = n[r];
            i.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (i.display = "inline-block"), s[Ra] = s[za] = "auto", i.flexBasis = n.flexBasis || "auto", i.overflow = "visible", i.boxSizing = "border-box", i[Da] = Ja(e, ce) + Ha, i[Ea] = Ja(e, Ae) + Ha, i[Oa] = s[La] = s.top = s[Sa] = "0", zn(t), s[Da] = s["max" + ja] = n[Da], s[Ea] = s["max" + Pa] = n[Ea], s[Oa] = n[Oa], e.parentNode !== a && (e.parentNode.insertBefore(a, e), a.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        Sn = /([A-Z])/g,
        zn = e => {
          if (e) {
            let a, n, t = e.t.style,
              r = e.length,
              o = 0;
            for ((e.t._gsap || ve.core.getCache(e.t)).uncache = 1; o < r; o += 2) n = e[o + 1], a = e[o], n ? t[a] = n : t[a] && t.removeProperty(a.replace(Sn, "-$1").toLowerCase())
          }
        },
        Rn = e => {
          let a = _n.length,
            n = e.style,
            t = [],
            r = 0;
          for (; r < a; r++) t.push(_n[r], n[_n[r]]);
          return t.t = e, t
        },
        Dn = {
          left: 0,
          top: 0
        },
        En = (e, a, n, t, r, o, i, s, d, l, c, A, m, g) => {
          xa(e) && (e = e(s)), wa(e) && "max" === e.substr(0, 3) && (e = A + ("=" === e.charAt(4) ? an("0" + e.substr(3), n) : 0));
          let f, h, p, u = m ? m.time() : 0;
          if (m && m.seek(0), isNaN(e) || (e = +e), ya(e)) m && (e = ve.utils.mapRange(m.scrollTrigger.start, m.scrollTrigger.end, 0, A, e)), i && tn(i, n, t, !0);
          else {
            xa(a) && (a = a(s));
            let o, c, A, m, g = (e || "0").split(" ");
            p = me(a, s) || Be, o = Ka(p) || {}, o && (o.left || o.top) || "none" !== Ga(p).display || (m = p.style.display, p.style.display = "block", o = Ka(p), m ? p.style.display = m : p.style.removeProperty("display")), c = an(g[0], o[t.d]), A = an(g[1] || "0", n), e = o[t.p] - d[t.p] - l + c + r - A, i && tn(i, A, t, n - A < 20 || i._isStart && A > 20), n -= n - A
          }
          if (g && (s[g] = e || -.001, e < 0 && (e = 0)), o) {
            let a = e + n,
              r = o._isStart;
            f = "scroll" + t.d2, tn(o, a, t, r && a > 20 || !r && (c ? Math.max(Be[f], ke[f]) : o.parentNode[f]) <= a + 1), c && (d = Ka(i), c && (o.style[t.op.p] = d[t.op.p] - t.op.m - o._offset + Ha))
          }
          return m && p && (f = Ka(p), m.seek(A), h = Ka(p), m._caScrollDist = f[t.p] - h[t.p], e = e / m._caScrollDist * A), m && m.seek(u), m ? e : Math.round(e)
        },
        Nn = /(webkit|moz|length|cssText|inset)/i,
        Fn = (e, a, n, t) => {
          if (e.parentNode !== a) {
            let r, o, i = e.style;
            if (a === Be) {
              for (r in e._stOrig = i.cssText, o = Ga(e), o) + r || Nn.test(r) || !o[r] || "string" != typeof i[r] || "0" === r || (i[r] = o[r]);
              i.top = n, i.left = t
            } else i.cssText = e._stOrig;
            ve.core.getCache(e).uncache = 1, a.appendChild(e)
          }
        },
        Mn = (e, a, n) => {
          let t = a,
            r = t;
          return a => {
            let o = Math.round(e());
            return o !== t && o !== r && Math.abs(o - t) > 3 && Math.abs(o - r) > 3 && (a = o, n && n()), r = t, t = a, a
          }
        },
        Tn = (e, a, n) => {
          let t = {};
          t[a.p] = "+=" + n, ve.set(e, t)
        },
        On = (e, a) => {
          let n = ge(e, a),
            t = "_scroll" + a.p2,
            r = (a, o, i, s, d) => {
              let l = r.tween,
                c = o.onComplete,
                A = {};
              i = i || n();
              let m = Mn(n, i, (() => {
                l.kill(), r.tween = 0
              }));
              return d = s && d || 0, s = s || a - i, l && l.kill(), o[t] = a, o.modifiers = A, A[t] = () => m(i + s * l.ratio + d * l.ratio * l.ratio), o.onUpdate = () => {
                X.cache++, kn()
              }, o.onComplete = () => {
                r.tween = 0, c && c.call(l)
              }, l = r.tween = ve.to(e, o), l
            };
          return e[t] = n, n.wheelHandler = () => r.tween && r.tween.kill() && (r.tween = 0), Ya(e, "wheel", n.wheelHandler), Ln.isTouch && Ya(e, "touchmove", n.wheelHandler), r
        };
      class Ln {
        constructor(e, a) {
          we || Ln.register(ve) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Qe(this), this.init(e, a)
        }
        init(e, a) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !ia) return void(this.update = this.refresh = this.kill = ma);
          e = Wa(wa(e) || ya(e) || e.nodeType ? {
            trigger: e
          } : e, Za);
          let n, t, r, o, i, s, d, l, c, A, m, g, f, h, p, u, b, C, v, w, x, y, k, B, _, I, S, z, R, D, E, N, F, M, T, O, L, j, P, {
              onUpdate: H,
              toggleClass: G,
              id: W,
              onToggle: K,
              onRefresh: J,
              scrub: U,
              trigger: Q,
              pin: q,
              pinSpacing: Y,
              invalidateOnRefresh: $,
              anticipatePin: V,
              onScrubComplete: ee,
              onSnapComplete: ae,
              once: te,
              snap: re,
              pinReparent: oe,
              pinSpacer: ie,
              containerAnimation: se,
              fastScrollEnd: de,
              preventOverlaps: le
            } = e,
            fe = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? ce : Ae,
            he = !U && 0 !== U,
            pe = me(e.scroller || xe),
            ue = ve.core.getCache(pe),
            be = pa(pe),
            Ce = "fixed" === ("pinType" in e ? e.pinType : ne(pe, "pinType") || be && "fixed"),
            we = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            _e = he && e.toggleActions.split(" "),
            Ie = "markers" in e ? e.markers : Za.markers,
            De = be ? 0 : parseFloat(Ga(pe)["border" + fe.p2 + ja]) || 0,
            Fe = this,
            Te = e.onRefreshInit && (() => e.onRefreshInit(Fe)),
            Oe = ((e, a, n) => {
              let {
                d: t,
                d2: r,
                a: o
              } = n;
              return (o = ne(e, "getBoundingClientRect")) ? () => o()[t] : () => (a ? ua(r) : e["client" + r]) || 0
            })(pe, be, fe),
            Le = ((e, a) => !a || ~Z.indexOf(e) ? ba(e) : () => Dn)(pe, be),
            He = 0,
            Ge = 0,
            We = 0,
            Ke = ge(pe, fe);
          var Je;
          if (Fe._startClamp = Fe._endClamp = !1, Fe._dir = fe, V *= 45, Fe.scroller = pe, Fe.scroll = se ? se.time.bind(se) : Ke, o = Ke(), Fe.vars = e, a = a || e.animation, "refreshPriority" in e && (je = 1, -9999 === e.refreshPriority && (aa = Fe)), ue.tweenScroll = ue.tweenScroll || {
              top: On(pe, Ae),
              left: On(pe, ce)
            }, Fe.tweenTo = n = ue.tweenScroll[fe.p], Fe.scrubDuration = e => {
              F = ya(e) && e, F ? N ? N.duration(e) : N = ve.to(a, {
                ease: "expo",
                totalProgress: "+=0",
                duration: F,
                paused: !0,
                onComplete: () => ee && ee(Fe)
              }) : (N && N.progress(1).kill(), N = 0)
            }, a && (a.vars.lazy = !1, a._initted && !Fe.isReverted || !1 !== a.vars.immediateRender && !1 !== e.immediateRender && a.duration() && a.render(0, !0, !0), Fe.animation = a.pause(), a.scrollTrigger = Fe, Fe.scrubDuration(U), D = 0, W || (W = a.vars.id)), re && (ka(re) && !re.push || (re = {
              snapTo: re
            }), "scrollBehavior" in Be.style && ve.set(be ? [Be, ke] : pe, {
              scrollBehavior: "auto"
            }), X.forEach((e => xa(e) && e.target === (be ? ye.scrollingElement || ke : pe) && (e.smooth = !1))), r = xa(re.snapTo) ? re.snapTo : "labels" === re.snapTo ? (e => a => ve.utils.snap(Ua(e), a))(a) : "labelsDirectional" === re.snapTo ? (Je = a, (e, a) => Qa(Ua(Je))(e, a.direction)) : !1 !== re.directional ? (e, a) => Qa(re.snapTo)(e, ta() - Ge < 500 ? 0 : a.direction) : ve.utils.snap(re.snapTo), M = re.duration || {
              min: .1,
              max: 2
            }, M = ka(M) ? ze(M.min, M.max) : ze(M, M), T = ve.delayedCall(re.delay || F / 2 || .1, (() => {
              let e = Ke(),
                t = ta() - Ge < 500,
                o = n.tween;
              if (!(t || Math.abs(Fe.getVelocity()) < 10) || o || Ne || He === e) Fe.isActive && He !== e && T.restart(!0);
              else {
                let i = (e - s) / h,
                  l = a && !he ? a.totalProgress() : i,
                  c = t ? 0 : (l - E) / (ta() - Re) * 1e3 || 0,
                  A = ve.utils.clamp(-i, 1 - i, Ia(c / 2) * c / .185),
                  m = i + (!1 === re.inertia ? 0 : A),
                  g = ze(0, 1, r(m, Fe)),
                  f = Math.round(s + g * h),
                  {
                    onStart: p,
                    onInterrupt: u,
                    onComplete: b
                  } = re;
                if (e <= d && e >= s && f !== e) {
                  if (o && !o._initted && o.data <= Ia(f - e)) return;
                  !1 === re.inertia && (A = g - i), n(f, {
                    duration: M(Ia(.185 * Math.max(Ia(m - l), Ia(g - l)) / c / .05 || 0)),
                    ease: re.ease || "power3",
                    data: Ia(f - e),
                    onInterrupt: () => T.restart(!0) && u && u(Fe),
                    onComplete: () => {
                      Fe.update(), He = Ke(), D = E = a && !he ? a.totalProgress() : Fe.progress, ae && ae(Fe), b && b(Fe)
                    }
                  }, e, A * h, f - e - A * h), p && p(Fe, n.tween)
                }
              }
            })).pause()), W && (on[W] = Fe), Q = Fe.trigger = me(Q || !0 !== q && q), P = Q && Q._gsap && Q._gsap.stRevert, P && (P = P(Fe)), q = !0 === q ? Q : me(q), wa(G) && (G = {
              targets: Q,
              className: G
            }), q && (!1 === Y || Y === La || (Y = !(!Y && q.parentNode && q.parentNode.style && "flex" === Ga(q.parentNode).display) && Oa), Fe.pin = q, t = ve.core.getCache(q), t.spacer ? p = t.pinState : (ie && (ie = me(ie), ie && !ie.nodeType && (ie = ie.current || ie.nativeElement), t.spacerIsNative = !!ie, ie && (t.spacerState = Rn(ie))), t.spacer = C = ie || ye.createElement("div"), C.classList.add("pin-spacer"), W && C.classList.add("pin-spacer-" + W), t.pinState = p = Rn(q)), !1 !== e.force3D && ve.set(q, {
              force3D: !0
            }), Fe.spacer = C = t.spacer, R = Ga(q), B = R[Y + fe.os2], w = ve.getProperty(q), x = ve.quickSetter(q, fe.a, Ha), In(q, C, R), b = Rn(q)), Ie) {
            g = ka(Ie) ? Wa(Ie, Xa) : Xa, A = nn("scroller-start", W, pe, fe, g, 0), m = nn("scroller-end", W, pe, fe, g, 0, A), v = A["offset" + fe.op.d2];
            let e = me(ne(pe, "content") || pe);
            l = this.markerStart = nn("start", W, e, fe, g, v, 0, se), c = this.markerEnd = nn("end", W, e, fe, g, v, 0, se), se && (j = ve.quickSetter([l, c], fe.a, Ha)), Ce || Z.length && !0 === ne(pe, "fixedMarkers") || ((e => {
              let a = Ga(e).position;
              e.style.position = "absolute" === a || "fixed" === a ? a : "relative"
            })(be ? Be : pe), ve.set([A, m], {
              force3D: !0
            }), I = ve.quickSetter(A, fe.a, Ha), z = ve.quickSetter(m, fe.a, Ha))
          }
          if (se) {
            let e = se.vars.onUpdate,
              a = se.vars.onUpdateParams;
            se.eventCallback("onUpdate", (() => {
              Fe.update(0, 0, 1), e && e.apply(se, a || [])
            }))
          }
          if (Fe.previous = () => rn[rn.indexOf(Fe) - 1], Fe.next = () => rn[rn.indexOf(Fe) + 1], Fe.revert = (e, n) => {
              if (!n) return Fe.kill(!0);
              let t = !1 !== e || !Fe.enabled,
                r = Ee;
              t !== Fe.isReverted && (t && (O = Math.max(Ke(), Fe.scroll.rec || 0), We = Fe.progress, L = a && a.progress()), l && [l, c, A, m].forEach((e => e.style.display = t ? "none" : "block")), t && (Ee = Fe, Fe.update(t)), !q || oe && Fe.isActive || (t ? ((e, a, n) => {
                zn(n);
                let t = e._gsap;
                if (t.spacerIsNative) zn(t.spacerState);
                else if (e._gsap.swappedIn) {
                  let n = a.parentNode;
                  n && (n.insertBefore(e, a), n.removeChild(a))
                }
                e._gsap.swappedIn = !1
              })(q, C, p) : In(q, C, Ga(q), _)), t || Fe.update(t), Ee = r, Fe.isReverted = t)
            }, Fe.refresh = (t, r, g, v) => {
              if ((Ee || !Fe.enabled) && !r) return;
              if (q && t && oa) return void Ya(Ln, "scrollEnd", gn);
              !Ze && Te && Te(Fe), Ee = Fe, n.tween && !g && (n.tween.kill(), n.tween = 0), N && N.pause(), $ && a && a.revert({
                kill: !1
              }).invalidate(), Fe.isReverted || Fe.revert(!0, !0), Fe._subPinOffset = !1;
              let x, B, I, z, R, D, E, F, M, j, P, H, G, W = Oe(),
                K = Le(),
                U = se ? se.duration() : Ca(pe, fe),
                V = h <= .01,
                X = 0,
                Z = v || 0,
                ee = ka(g) ? g.end : e.end,
                ae = e.endTrigger || Q,
                ne = ka(g) ? g.start : e.start || (0 !== e.start && Q ? q ? "0 0" : "0 100%" : 0),
                te = Fe.pinnedContainer = e.pinnedContainer && me(e.pinnedContainer, Fe),
                re = Q && Math.max(0, rn.indexOf(Fe)) || 0,
                ie = re;
              for (Ie && ka(g) && (H = ve.getProperty(A, fe.p), G = ve.getProperty(m, fe.p)); ie--;) D = rn[ie], D.end || D.refresh(0, 1) || (Ee = Fe), E = D.pin, !E || E !== Q && E !== q && E !== te || D.isReverted || (j || (j = []), j.unshift(D), D.revert(!0, !0)), D !== rn[ie] && (re--, ie--);
              for (xa(ne) && (ne = ne(Fe)), ne = sa(ne, "start", Fe), s = En(ne, Q, W, fe, Ke(), l, A, Fe, K, De, Ce, U, se, Fe._startClamp && "_startClamp") || (q ? -.001 : 0), xa(ee) && (ee = ee(Fe)), wa(ee) && !ee.indexOf("+=") && (~ee.indexOf(" ") ? ee = (wa(ne) ? ne.split(" ")[0] : "") + ee : (X = an(ee.substr(2), W), ee = wa(ne) ? ne : (se ? ve.utils.mapRange(0, se.duration(), se.scrollTrigger.start, se.scrollTrigger.end, s) : s) + X, ae = Q)), ee = sa(ee, "end", Fe), d = Math.max(s, En(ee || (ae ? "100% 0" : U), ae, W, fe, Ke() + X, c, m, Fe, K, De, Ce, U, se, Fe._endClamp && "_endClamp")) || -.001, X = 0, ie = re; ie--;) D = rn[ie], E = D.pin, E && D.start - D._pinPush <= s && !se && D.end > 0 && (x = D.end - (Fe._startClamp ? Math.max(0, D.start) : D.start), (E === Q && D.start - D._pinPush < s || E === te) && isNaN(ne) && (X += x * (1 - D.progress)), E === q && (Z += x));
              if (s += X, d += X, Fe._startClamp && (Fe._startClamp += X), Fe._endClamp && !Ze && (Fe._endClamp = d || -.001, d = Math.min(d, Ca(pe, fe))), h = d - s || (s -= .01) && .001, V && (We = ve.utils.clamp(0, 1, ve.utils.normalize(s, d, O))), Fe._pinPush = Z, l && X && (x = {}, x[fe.a] = "+=" + X, te && (x[fe.p] = "-=" + Ke()), ve.set([l, c], x)), q) x = Ga(q), z = fe === Ae, I = Ke(), y = parseFloat(w(fe.a)) + Z, !U && d > 1 && (P = (be ? ye.scrollingElement || ke : pe).style, P = {
                style: P,
                value: P["overflow" + fe.a.toUpperCase()]
              }, be && "scroll" !== Ga(Be)["overflow" + fe.a.toUpperCase()] && (P.style["overflow" + fe.a.toUpperCase()] = "scroll")), In(q, C, x), b = Rn(q), B = Ka(q, !0), F = Ce && ge(pe, z ? ce : Ae)(), Y && (_ = [Y + fe.os2, h + Z + Ha], _.t = C, ie = Y === Oa ? Ja(q, fe) + h + Z : 0, ie && _.push(fe.d, ie + Ha), zn(_), te && rn.forEach((e => {
                e.pin === te && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), Ce && Ke(O)), Ce && (R = {
                top: B.top + (z ? I - s : F) + Ha,
                left: B.left + (z ? F : I - s) + Ha,
                boxSizing: "border-box",
                position: "fixed"
              }, R[Da] = R["max" + ja] = Math.ceil(B.width) + Ha, R[Ea] = R["max" + Pa] = Math.ceil(B.height) + Ha, R[La] = R[La + Ma] = R[La + Na] = R[La + Ta] = R[La + Fa] = "0", R[Oa] = x[Oa], R[Oa + Ma] = x[Oa + Ma], R[Oa + Na] = x[Oa + Na], R[Oa + Ta] = x[Oa + Ta], R[Oa + Fa] = x[Oa + Fa], u = ((e, a, n) => {
                let t, r = [],
                  o = e.length,
                  i = n ? 8 : 0;
                for (; i < o; i += 2) t = e[i], r.push(t, t in a ? a[t] : e[i + 1]);
                return r.t = e.t, r
              })(p, R, oe), Ze && Ke(0)), a ? (M = a._initted, Pe(1), a.render(a.duration(), !0, !0), k = w(fe.a) - y + h + Z, S = Math.abs(h - k) > 1, Ce && S && u.splice(u.length - 2, 2), a.render(0, !0, !0), M || a.invalidate(!0), a.parent || a.totalTime(a.totalTime()), Pe(0)) : k = h, P && (P.value ? P.style["overflow" + fe.a.toUpperCase()] = P.value : P.style.removeProperty("overflow-" + fe.a));
              else if (Q && Ke() && !se)
                for (B = Q.parentNode; B && B !== Be;) B._pinOffset && (s -= B._pinOffset, d -= B._pinOffset), B = B.parentNode;
              j && j.forEach((e => e.revert(!1, !0))), Fe.start = s, Fe.end = d, o = i = Ze ? O : Ke(), se || Ze || (o < O && Ke(O), Fe.scroll.rec = 0), Fe.revert(!1, !0), Ge = ta(), T && (He = -1, T.restart(!0)), Ee = 0, a && he && (a._initted || L) && a.progress() !== L && a.progress(L || 0, !0).render(a.time(), !0, !0), (V || We !== Fe.progress || se) && (a && !he && a.totalProgress(se && s < -.001 && !We ? ve.utils.normalize(s, d, 0) : We, !0), Fe.progress = V || (o - s) / h === We ? 0 : We), q && Y && (C._pinOffset = Math.round(Fe.progress * k)), N && N.invalidate(), isNaN(H) || (H -= ve.getProperty(A, fe.p), G -= ve.getProperty(m, fe.p), Tn(A, fe, H), Tn(l, fe, H - (v || 0)), Tn(m, fe, G), Tn(c, fe, G - (v || 0))), V && !Ze && Fe.update(), !J || Ze || f || (f = !0, J(Fe), f = !1)
            }, Fe.getVelocity = () => (Ke() - i) / (ta() - Re) * 1e3 || 0, Fe.endAnimation = () => {
              Ba(Fe.callbackAnimation), a && (N ? N.progress(1) : a.paused() ? he || Ba(a, Fe.direction < 0, 1) : Ba(a, a.reversed()))
            }, Fe.labelToScroll = e => a && a.labels && (s || Fe.refresh() || s) + a.labels[e] / a.duration() * h || 0, Fe.getTrailing = e => {
              let a = rn.indexOf(Fe),
                n = Fe.direction > 0 ? rn.slice(0, a).reverse() : rn.slice(a + 1);
              return (wa(e) ? n.filter((a => a.vars.preventOverlaps === e)) : n).filter((e => Fe.direction > 0 ? e.end <= s : e.start >= d))
            }, Fe.update = (e, t, r) => {
              if (se && !r && !e) return;
              let l, c, m, g, f, p, v, w, _ = !0 === Ze ? O : Fe.scroll(),
                R = e ? 0 : (_ - s) / h,
                F = R < 0 ? 0 : R > 1 ? 1 : R || 0,
                M = Fe.progress;
              if (t && (i = o, o = se ? Ke() : _, re && (E = D, D = a && !he ? a.totalProgress() : F)), V && !F && q && !Ee && !na && oa && s < _ + (_ - i) / (ta() - Re) * V && (F = 1e-4), F !== M && Fe.enabled) {
                if (l = Fe.isActive = !!F && F < 1, c = !!M && M < 1, p = l !== c, f = p || !!F != !!M, Fe.direction = F > M ? 1 : -1, Fe.progress = F, f && !Ee && (m = F && !M ? 0 : 1 === F ? 1 : 1 === M ? 2 : 3, he && (g = !p && "none" !== _e[m + 1] && _e[m + 1] || _e[m], w = a && ("complete" === g || "reset" === g || g in a))), le && (p || w) && (w || U || !a) && (xa(le) ? le(Fe) : Fe.getTrailing(le).forEach((e => e.endAnimation()))), he || (!N || Ee || na ? a && a.totalProgress(F, !(!Ee || !Ge && !e)) : (N._dp._time - N._start !== N._time && N.render(N._dp._time - N._start), N.resetTo ? N.resetTo("totalProgress", F, a._tTime / a._tDur) : (N.vars.totalProgress = F, N.invalidate().restart()))), q)
                  if (e && Y && (C.style[Y + fe.os2] = B), Ce) {
                    if (f) {
                      if (v = !e && F > M && d + 1 > _ && _ + 1 >= Ca(pe, fe), oe)
                        if (e || !l && !v) Fn(q, C);
                        else {
                          let e = Ka(q, !0),
                            a = _ - s;
                          Fn(q, Be, e.top + (fe === Ae ? a : 0) + Ha, e.left + (fe === Ae ? 0 : a) + Ha)
                        } zn(l || v ? u : b), S && F < 1 && l || x(y + (1 !== F || v ? 0 : k))
                    }
                  } else x(ga(y + k * F));
                re && !n.tween && !Ee && !na && T.restart(!0), G && (p || te && F && (F < 1 || !Ve)) && Se(G.targets).forEach((e => e.classList[l || te ? "add" : "remove"](G.className))), H && !he && !e && H(Fe), f && !Ee ? (he && (w && ("complete" === g ? a.pause().totalProgress(1) : "reset" === g ? a.restart(!0).pause() : "restart" === g ? a.restart(!0) : a[g]()), H && H(Fe)), !p && Ve || (K && p && _a(Fe, K), we[m] && _a(Fe, we[m]), te && (1 === F ? Fe.kill(!1, 1) : we[m] = 0), p || (m = 1 === F ? 1 : 3, we[m] && _a(Fe, we[m]))), de && !l && Math.abs(Fe.getVelocity()) > (ya(de) ? de : 2500) && (Ba(Fe.callbackAnimation), N ? N.progress(1) : Ba(a, "reverse" === g ? 1 : !F, 1))) : he && H && !Ee && H(Fe)
              }
              if (z) {
                let e = se ? _ / se.duration() * (se._caScrollDist || 0) : _;
                I(e + (A._isFlipped ? 1 : 0)), z(e)
              }
              j && j(-_ / se.duration() * (se._caScrollDist || 0))
            }, Fe.enable = (e, a) => {
              Fe.enabled || (Fe.enabled = !0, Ya(pe, "resize", cn), be || Ya(pe, "scroll", dn), Te && Ya(Ln, "refreshInit", Te), !1 !== e && (Fe.progress = We = 0, o = i = He = Ke()), !1 !== a && Fe.refresh())
            }, Fe.getTween = e => e && n ? n.tween : N, Fe.setPositions = (e, a, n, t) => {
              if (se) {
                let n = se.scrollTrigger,
                  t = se.duration(),
                  r = n.end - n.start;
                e = n.start + r * e / t, a = n.start + r * a / t
              }
              Fe.refresh(!1, !1, {
                start: da(e, n && !!Fe._startClamp),
                end: da(a, n && !!Fe._endClamp)
              }, t), Fe.update()
            }, Fe.adjustPinSpacing = e => {
              if (_ && e) {
                let a = _.indexOf(fe.d) + 1;
                _[a] = parseFloat(_[a]) + e + Ha, _[1] = parseFloat(_[1]) + e + Ha, zn(_)
              }
            }, Fe.disable = (e, a) => {
              if (Fe.enabled && (!1 !== e && Fe.revert(!0, !0), Fe.enabled = Fe.isActive = !1, a || N && N.pause(), O = 0, t && (t.uncache = 1), Te && $a(Ln, "refreshInit", Te), T && (T.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !be)) {
                let e = rn.length;
                for (; e--;)
                  if (rn[e].scroller === pe && rn[e] !== Fe) return;
                $a(pe, "resize", cn), be || $a(pe, "scroll", dn)
              }
            }, Fe.kill = (n, r) => {
              Fe.disable(n, r), N && !r && N.kill(), W && delete on[W];
              let o = rn.indexOf(Fe);
              o >= 0 && rn.splice(o, 1), o === Me && yn > 0 && Me--, o = 0, rn.forEach((e => e.scroller === Fe.scroller && (o = 1))), o || Ze || (Fe.scroll.rec = 0), a && (a.scrollTrigger = null, n && a.revert({
                kill: !1
              }), r || a.kill()), l && [l, c, A, m].forEach((e => e.parentNode && e.parentNode.removeChild(e))), aa === Fe && (aa = 0), q && (t && (t.uncache = 1), o = 0, rn.forEach((e => e.pin === q && o++)), o || (t.spacer = 0)), e.onKill && e.onKill(Fe)
            }, rn.push(Fe), Fe.enable(!1, !1), P && P(Fe), a && a.add && !h) {
            let e = Fe.update;
            Fe.update = () => {
              Fe.update = e, s || d || Fe.refresh()
            }, ve.delayedCall(.01, Fe.update), h = .01, s = d = 0
          } else Fe.refresh();
          q && (() => {
            if (ea !== Cn) {
              let e = ea = Cn;
              requestAnimationFrame((() => e === Cn && wn(!0)))
            }
          })()
        }
        static register(e) {
          return we || (ve = e || ha(), fa() && window.document && Ln.enable(), we = ia), we
        }
        static defaults(e) {
          if (e)
            for (let a in e) Za[a] = e[a];
          return Za
        }
        static disable(e, a) {
          ia = 0, rn.forEach((n => n[a ? "kill" : "disable"](e))), $a(xe, "wheel", dn), $a(ye, "scroll", dn), clearInterval(De), $a(ye, "touchcancel", ma), $a(Be, "touchstart", ma), qa($a, ye, "pointerdown,touchstart,mousedown", ca), qa($a, ye, "pointerup,touchend,mouseup", Aa), Ie.kill(), va($a);
          for (let e = 0; e < X.length; e += 3) Va($a, X[e], X[e + 1]), Va($a, X[e], X[e + 2])
        }
        static enable() {
          if (xe = window, ye = document, ke = ye.documentElement, Be = ye.body, ve && (Se = ve.utils.toArray, ze = ve.utils.clamp, Qe = ve.core.context || ma, Pe = ve.core.suppressOverwrites || ma, qe = xe.history.scrollRestoration || "auto", xn = xe.pageYOffset, ve.core.globals("ScrollTrigger", Ln), Be)) {
            ia = 1, Ye = document.createElement("div"), Ye.style.height = "100vh", Ye.style.position = "absolute", vn(), la(), Ce.register(ve), Ln.isTouch = Ce.isTouch, Ue = Ce.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ya(xe, "wheel", dn), _e = [xe, ye, ke, Be], ve.matchMedia ? (Ln.matchMedia = e => {
              let a, n = ve.matchMedia();
              for (a in e) n.add(a, e[a]);
              return n
            }, ve.addEventListener("matchMediaInit", (() => un())), ve.addEventListener("matchMediaRevert", (() => pn())), ve.addEventListener("matchMedia", (() => {
              wn(0, 1), fn("matchMedia")
            })), ve.matchMedia("(orientation: portrait)", (() => (ln(), ln)))) : console.warn("Requires GSAP 3.11.0 or later"), ln(), Ya(ye, "scroll", dn);
            let e, a, n = Be.style,
              t = n.borderTopStyle,
              r = ve.core.Animation.prototype;
            for (r.revert || Object.defineProperty(r, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), n.borderTopStyle = "solid", e = Ka(Be), Ae.m = Math.round(e.top + Ae.sc()) || 0, ce.m = Math.round(e.left + ce.sc()) || 0, t ? n.borderTopStyle = t : n.removeProperty("border-top-style"), De = setInterval(sn, 250), ve.delayedCall(.5, (() => na = 0)), Ya(ye, "touchcancel", ma), Ya(Be, "touchstart", ma), qa(Ya, ye, "pointerdown,touchstart,mousedown", ca), qa(Ya, ye, "pointerup,touchend,mouseup", Aa), Fe = ve.utils.checkPrefix("transform"), _n.push(Fe), we = ta(), Ie = ve.delayedCall(.2, wn).pause(), Le = [ye, "visibilitychange", () => {
                let e = xe.innerWidth,
                  a = xe.innerHeight;
                ye.hidden ? (Te = e, Oe = a) : Te === e && Oe === a || cn()
              }, ye, "DOMContentLoaded", wn, xe, "load", wn, xe, "resize", cn], va(Ya), rn.forEach((e => e.enable(0, 1))), a = 0; a < X.length; a += 3) Va($a, X[a], X[a + 1]), Va($a, X[a], X[a + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (Ve = !!e.limitCallbacks);
          let a = e.syncInterval;
          a && clearInterval(De) || (De = a) && setInterval(sn, a), "ignoreMobileResize" in e && (We = 1 === Ln.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (va($a) || va(Ya, e.autoRefreshEvents || "none"), He = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, a) {
          let n = me(e),
            t = X.indexOf(n),
            r = pa(n);
          ~t && X.splice(t, r ? 6 : 2), a && (r ? Z.unshift(xe, a, Be, a, ke, a) : Z.unshift(n, a))
        }
        static clearMatchMedia(e) {
          rn.forEach((a => a._ctx && a._ctx.query === e && a._ctx.kill(!0, !0)))
        }
        static isInViewport(e, a, n) {
          let t = (wa(e) ? me(e) : e).getBoundingClientRect(),
            r = t[n ? Da : Ea] * a || 0;
          return n ? t.right - r > 0 && t.left + r < xe.innerWidth : t.bottom - r > 0 && t.top + r < xe.innerHeight
        }
        static positionInViewport(e, a, n) {
          wa(e) && (e = me(e));
          let t = e.getBoundingClientRect(),
            r = t[n ? Da : Ea],
            o = null == a ? r / 2 : a in en ? en[a] * r : ~a.indexOf("%") ? parseFloat(a) * r / 100 : parseFloat(a) || 0;
          return n ? (t.left + o) / xe.innerWidth : (t.top + o) / xe.innerHeight
        }
        static killAll(e) {
          if (rn.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = An.killAll || [];
            An = {}, e.forEach((e => e()))
          }
        }
      }
      Ln.version = "3.12.2", Ln.saveStyles = e => e ? Se(e).forEach((e => {
        if (e && e.style) {
          let a = hn.indexOf(e);
          a >= 0 && hn.splice(a, 5), hn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), ve.core.getCache(e), Qe())
        }
      })) : hn, Ln.revert = (e, a) => un(!e, a), Ln.create = (e, a) => new Ln(e, a), Ln.refresh = e => e ? cn() : (we || Ln.register()) && wn(!0), Ln.update = e => ++X.cache && kn(!0 === e ? 2 : 0), Ln.clearScrollMemory = bn, Ln.maxScroll = (e, a) => Ca(e, a ? ce : Ae), Ln.getScrollFunc = (e, a) => ge(me(e), a ? ce : Ae), Ln.getById = e => on[e], Ln.getAll = () => rn.filter((e => "ScrollSmoother" !== e.vars.id)), Ln.isScrolling = () => !!oa, Ln.snapDirectional = Qa, Ln.addEventListener = (e, a) => {
        let n = An[e] || (An[e] = []);
        ~n.indexOf(a) || n.push(a)
      }, Ln.removeEventListener = (e, a) => {
        let n = An[e],
          t = n && n.indexOf(a);
        t >= 0 && n.splice(t, 1)
      }, Ln.batch = (e, a) => {
        let n, t = [],
          r = {},
          o = a.interval || .016,
          i = a.batchMax || 1e9,
          s = (e, a) => {
            let n = [],
              t = [],
              r = ve.delayedCall(o, (() => {
                a(n, t), n = [], t = []
              })).pause();
            return e => {
              n.length || r.restart(!0), n.push(e.trigger), t.push(e), i <= n.length && r.progress(1)
            }
          };
        for (n in a) r[n] = "on" === n.substr(0, 2) && xa(a[n]) && "onRefreshInit" !== n ? s(0, a[n]) : a[n];
        return xa(i) && (i = i(), Ya(Ln, "refresh", (() => i = a.batchMax()))), Se(e).forEach((e => {
          let a = {};
          for (n in r) a[n] = r[n];
          a.trigger = e, t.push(Ln.create(a))
        })), t
      };
      let jn, Pn = (e, a, n, t) => (a > t ? e(t) : a < 0 && e(0), n > t ? (t - a) / (n - a) : n < 0 ? a / (a - n) : 1),
        Hn = (e, a) => {
          !0 === a ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === a ? "auto" : a ? "pan-" + a + (Ce.isTouch ? " pinch-zoom" : "") : "none", e === ke && Hn(Be, a)
        },
        Gn = {
          auto: 1,
          scroll: 1
        },
        Wn = e => {
          let a, {
              event: n,
              target: t,
              axis: r
            } = e,
            o = (n.changedTouches ? n.changedTouches[0] : n).target,
            i = o._gsap || ve.core.getCache(o),
            s = ta();
          if (!i._isScrollT || s - i._isScrollT > 2e3) {
            for (; o && o !== Be && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !Gn[(a = Ga(o)).overflowY] && !Gn[a.overflowX]);) o = o.parentNode;
            i._isScroll = o && o !== t && !pa(o) && (Gn[(a = Ga(o)).overflowY] || Gn[a.overflowX]), i._isScrollT = s
          }(i._isScroll || "x" === r) && (n.stopPropagation(), n._gsapAllow = !0)
        },
        Kn = (e, a, n, t) => Ce.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: a,
          onWheel: t = t && Wn,
          onPress: t,
          onDrag: t,
          onScroll: t,
          onEnable: () => n && Ya(ye, Ce.eventTypes[0], Un, !1, !0),
          onDisable: () => $a(ye, Ce.eventTypes[0], Un, !0)
        }),
        Jn = /(input|label|select|textarea)/i,
        Un = e => {
          let a = Jn.test(e.target.tagName);
          (a || jn) && (e._gsapAllow = !0, jn = a)
        };
      Ln.sort = e => rn.sort(e || ((e, a) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (a.start + -1e6 * (a.vars.refreshPriority || 0)))), Ln.observe = e => new Ce(e), Ln.normalizeScroll = e => {
        if (void 0 === e) return Ge;
        if (!0 === e && Ge) return Ge.enable();
        if (!1 === e) return Ge && Ge.kill();
        let a = e instanceof Ce ? e : (e => {
          ka(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let a, n, t, r, o, i, s, d, {
              normalizeScrollX: l,
              momentum: c,
              allowNestedScroll: A,
              onRelease: m
            } = e,
            g = me(e.target) || ke,
            f = ve.core.globals().ScrollSmoother,
            h = f && f.get(),
            p = Ue && (e.content && me(e.content) || h && !1 !== e.content && !h.smooth() && h.content()),
            u = ge(g, Ae),
            b = ge(g, ce),
            C = 1,
            v = (Ce.isTouch && xe.visualViewport ? xe.visualViewport.scale * xe.visualViewport.width : xe.outerWidth) / xe.innerWidth,
            w = 0,
            x = xa(c) ? () => c(a) : () => c || 2.8,
            y = Kn(g, e.type, !0, A),
            k = () => r = !1,
            B = ma,
            _ = ma,
            I = () => {
              n = Ca(g, Ae), _ = ze(Ue ? 1 : 0, n), l && (B = ze(0, Ca(g, ce))), t = Cn
            },
            S = () => {
              p._gsap.y = ga(parseFloat(p._gsap.y) + u.offset) + "px", p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)", u.offset = u.cacheID = 0
            },
            z = () => {
              I(), o.isActive() && o.vars.scrollY > n && (u() > n ? o.progress(1) && u(n) : o.resetTo("scrollY", n))
            };
          return p && ve.set(p, {
            y: "+=0"
          }), e.ignoreCheck = e => Ue && "touchmove" === e.type && (() => {
            if (r) {
              requestAnimationFrame(k);
              let e = ga(a.deltaY / 2),
                n = _(u.v - e);
              if (p && n !== u.v + u.offset) {
                u.offset = n - u.v;
                let e = ga((parseFloat(p && p._gsap.y) || 0) - u.offset);
                p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", p._gsap.y = e + "px", u.cacheID = X.cache, kn()
              }
              return !0
            }
            u.offset && S(), r = !0
          })() || C > 1.05 && "touchstart" !== e.type || a.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            r = !1;
            let e = C;
            C = ga((xe.visualViewport && xe.visualViewport.scale || 1) / v), o.pause(), e !== C && Hn(g, C > 1.01 || !l && "x"), i = b(), s = u(), I(), t = Cn
          }, e.onRelease = e.onGestureStart = (e, a) => {
            if (u.offset && S(), a) {
              X.cache++;
              let a, t, r = x();
              l && (a = b(), t = a + .05 * r * -e.velocityX / .227, r *= Pn(b, a, t, Ca(g, ce)), o.vars.scrollX = B(t)), a = u(), t = a + .05 * r * -e.velocityY / .227, r *= Pn(u, a, t, Ca(g, Ae)), o.vars.scrollY = _(t), o.invalidate().duration(r).play(.01), (Ue && o.vars.scrollY >= n || a >= n - 1) && ve.to({}, {
                onUpdate: z,
                duration: r
              })
            } else d.restart(!0);
            m && m(e)
          }, e.onWheel = () => {
            o._ts && o.pause(), ta() - w > 1e3 && (t = 0, w = ta())
          }, e.onChange = (e, a, n, r, o) => {
            if (Cn !== t && I(), a && l && b(B(r[2] === a ? i + (e.startX - e.x) : b() + a - r[1])), n) {
              u.offset && S();
              let a = o[2] === n,
                t = a ? s + e.startY - e.y : u() + n - o[1],
                r = _(t);
              a && t !== r && (s += r - t), u(r)
            }(n || a) && kn()
          }, e.onEnable = () => {
            Hn(g, !l && "x"), Ln.addEventListener("refresh", z), Ya(xe, "resize", z), u.smooth && (u.target.style.scrollBehavior = "auto", u.smooth = b.smooth = !1), y.enable()
          }, e.onDisable = () => {
            Hn(g, !0), $a(xe, "resize", z), Ln.removeEventListener("refresh", z), y.kill()
          }, e.lockAxis = !1 !== e.lockAxis, a = new Ce(e), a.iOS = Ue, Ue && !u() && u(1), Ue && ve.ticker.add(ma), d = a._dc, o = ve.to(a, {
            ease: "power4",
            paused: !0,
            scrollX: l ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: Mn(u, u(), (() => o.pause()))
            },
            onUpdate: kn,
            onComplete: d.vars.onComplete
          }), a
        })(e);
        return Ge && Ge.target === a.target && Ge.kill(), pa(a.target) && (Ge = a), a
      }, Ln.core = {
        _getVelocityProp: fe,
        _inputObserver: Kn,
        _scrollers: X,
        _proxies: Z,
        bridge: {
          ss: () => {
            oa || fn("scrollStart"), oa = ta()
          },
          ref: () => Ee
        }
      }, ha() && ve.registerPlugin(Ln);
      let Qn, qn, Yn, $n, Vn, Xn, Zn, et, at, nt, tt, rt, ot, it, st, dt, lt = () => "undefined" != typeof window,
        ct = () => Qn || lt() && (Qn = window.gsap) && Qn.registerPlugin && Qn,
        At = e => nt.maxScroll(e || Yn);
      class mt {
        constructor(e) {
          qn || mt.register(Qn) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, tt && tt.kill(), tt = this, st(this);
          let a, n, t, r, o, i, s, d, l, c, A, m, g, f, h, {
              smoothTouch: p,
              onUpdate: u,
              onStop: b,
              smooth: C,
              onFocusIn: v,
              normalizeScroll: w,
              wholePixels: x
            } = e,
            y = this,
            k = e.effectsPrefix || "",
            B = nt.getScrollFunc(Yn),
            _ = 1 === nt.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === C || !1 === C ? 0 : parseFloat(C) || .8,
            I = _ && +e.speed || 1,
            S = 0,
            z = 0,
            R = 1,
            D = ot(0),
            E = () => D.update(-S),
            N = {
              y: 0
            },
            F = () => a.style.overflow = "visible",
            M = e => {
              e.update();
              let a = e.getTween();
              a && (a.pause(), a._time = a._dur, a._tTime = a._tDur), f = !1, e.animation.progress(e.progress, !0)
            },
            T = (e, n) => {
              (e !== S && !c || n) && (x && (e = Math.round(e)), _ && (a.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", a._gsap.y = e + "px"), z = e - S, S = e, nt.isUpdating || mt.isRefreshing || nt.update())
            },
            O = function(e) {
              return arguments.length ? (e < 0 && (e = 0), N.y = -e, f = !0, c ? S = -e : T(-e), nt.isRefreshing ? r.update() : B(e / I), this) : -S
            },
            L = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!nt.isRefreshing) {
                let e = At(n) * I;
                e < -S && O(e), dt.restart(!0)
              }
            })),
            j = e => {
              n.scrollTop = 0, e.target.contains && e.target.contains(n) || v && !1 === v(this, e) || (nt.isInViewport(e.target) || e.target === h || this.scrollTo(e.target, !1, "center center"), h = e.target)
            },
            P = (e, a) => {
              if (e < a.start) return e;
              let n = isNaN(a.ratio) ? 1 : a.ratio,
                t = a.end - a.start,
                r = e - a.start,
                o = a.offset || 0,
                i = a.pins || [],
                s = i.offset || 0,
                d = a._startClamp && a.start <= 0 || a.pins && a.pins.offset ? 0 : a._endClamp && a.end === At() ? 1 : .5;
              return i.forEach((a => {
                t -= a.distance, a.nativeStart <= e && (r -= a.distance)
              })), s && (r *= (t - s / n) / t), e + (r - o * d) / n - r
            },
            H = (e, a, n) => {
              n || (e.pins.length = e.pins.offset = 0);
              let t, r, o, i, s, d, l, c, A = e.pins,
                m = e.markers;
              for (l = 0; l < a.length; l++)
                if (c = a[l], e.trigger && c.trigger && e !== c && (c.trigger === e.trigger || c.pinnedContainer === e.trigger || e.trigger.contains(c.trigger)) && (s = c._startNative || c._startClamp || c.start, d = c._endNative || c._endClamp || c.end, o = P(s, e), i = c.pin && d > 0 ? o + (d - s) : P(d, e), c.setPositions(o, i, !0, (c._startClamp ? Math.max(0, o) : o) - s), c.markerStart && m.push(Qn.quickSetter([c.markerStart, c.markerEnd], "y", "px")), c.pin && c.end > 0 && !n)) {
                  if (t = c.end - c.start, r = e._startClamp && c.start < 0, r) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void H(e, a);
                    t += c.start, A.offset = -c.start
                  }
                  A.push({
                    start: c.start,
                    nativeStart: s,
                    end: c.end,
                    distance: t,
                    trig: c
                  }), e.setPositions(e.start, e.end + (r ? -c.start : t), !0)
                }
            },
            G = (e, a) => {
              o.forEach((n => H(n, e, a)))
            },
            W = () => {
              F(), requestAnimationFrame(F), o && (nt.getAll().forEach((e => {
                e._startNative = e.start, e._endNative = e.end
              })), o.forEach((e => {
                let a = e._startClamp || e.start,
                  n = e.autoSpeed ? Math.min(At(), e.end) : a + Math.abs((e.end - a) / e.ratio),
                  t = n - e.end;
                if (a -= t / 2, n -= t / 2, a > n) {
                  let e = a;
                  a = n, n = e
                }
                e._startClamp && a < 0 ? (n = e.ratio < 0 ? At() : e.end / e.ratio, t = n - e.end, a = 0) : (e.ratio < 0 || e._endClamp && n >= At()) && (n = At(), a = e.ratio < 0 || e.ratio > 1 ? 0 : n - (n - e.start) / e.ratio, t = (n - a) * e.ratio - (e.end - e.start)), e.offset = t || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(a, n, !0)
              })), G(nt.sort())), D.reset()
            },
            K = () => nt.addEventListener("refresh", W),
            J = () => o && o.forEach((e => e.vars.onRefresh(e))),
            U = () => (o && o.forEach((e => e.vars.onRefreshInit(e))), J),
            Q = (e, a, n, t) => () => {
              let r = "function" == typeof a ? a(n, t) : a;
              r || 0 === r || (r = t.getAttribute("data-" + k + e) || ("speed" === e ? 1 : 0)), t.setAttribute("data-" + k + e, r);
              let o = "clamp(" === (r + "").substr(0, 6);
              return {
                clamp: o,
                value: o ? r.substr(6, r.length - 7) : r
              }
            },
            q = (e, a, t, r, i) => {
              i = ("function" == typeof i ? i(r, e) : i) || 0;
              let s, d, l, c, A, m, g = Q("speed", a, r, e),
                f = Q("lag", t, r, e),
                h = Qn.getProperty(e, "y"),
                p = e._gsap,
                u = [],
                b = () => {
                  a = g(), t = parseFloat(f().value), s = parseFloat(a.value) || 1, l = "auto" === a.value, A = l || d && d._startClamp && d.start <= 0 || u.offset ? 0 : d && d._endClamp && d.end === At() ? 1 : .5, c && c.kill(), c = t && Qn.to(e, {
                    ease: rt,
                    overwrite: !1,
                    y: "+=0",
                    duration: t
                  }), d && (d.ratio = s, d.autoSpeed = l)
                },
                C = () => {
                  p.y = h + "px", p.renderTransform(1), b()
                },
                v = [],
                w = 0,
                x = a => {
                  if (l) {
                    C();
                    let n = ((e, a) => {
                      let n, t, r = e.parentNode || Vn,
                        o = e.getBoundingClientRect(),
                        i = r.getBoundingClientRect(),
                        s = i.top - o.top,
                        d = i.bottom - o.bottom,
                        l = (Math.abs(s) > Math.abs(d) ? s : d) / (1 - a),
                        c = -l * a;
                      return l > 0 && (n = i.height / (Yn.innerHeight + i.height), t = .5 === n ? 2 * i.height : 2 * Math.min(i.height, Math.abs(-l * n / (2 * n - 1))) * (a || 1), c += a ? -t * a : -t / 2, l += t), {
                        change: l,
                        offset: c
                      }
                    })(e, at(0, 1, -a.start / (a.end - a.start)));
                    w = n.change, m = n.offset
                  } else m = u.offset || 0, w = (a.end - a.start - m) * (1 - s);
                  u.forEach((e => w -= e.distance * (1 - s))), a.offset = w || .001, a.vars.onUpdate(a), c && c.progress(1)
                };
              return b(), (1 !== s || l || c) && (d = nt.create({
                trigger: l ? e.parentNode : e,
                start: () => a.clamp ? "clamp(top bottom+=" + i + ")" : "top bottom+=" + i,
                end: () => a.value < 0 ? "max" : a.clamp ? "clamp(bottom top-=" + i + ")" : "bottom top-=" + i,
                scroller: n,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: C,
                onRefresh: x,
                onKill: e => {
                  let a = o.indexOf(e);
                  a >= 0 && o.splice(a, 1), C()
                },
                onUpdate: e => {
                  let a, n, t, r = h + w * (e.progress - A),
                    o = u.length,
                    i = 0;
                  if (e.offset) {
                    if (o) {
                      for (n = -S, t = e.end; o--;) {
                        if (a = u[o], a.trig.isActive || n >= a.start && n <= a.end) return void(c && (a.trig.progress += a.trig.direction < 0 ? .001 : -.001, a.trig.update(0, 0, 1), c.resetTo("y", parseFloat(p.y), -z, !0), R && c.progress(1)));
                        n > a.end && (i += a.distance), t -= a.distance
                      }
                      r = h + i + w * ((Qn.utils.clamp(e.start, e.end, n) - e.start - i) / (t - e.start) - A)
                    }
                    v.length && !l && v.forEach((e => e(r - i))), s = r + m, r = Math.round(1e5 * s) / 1e5 || 0, c ? (c.resetTo("y", r, -z, !0), R && c.progress(1)) : (p.y = r + "px", p.renderTransform(1))
                  }
                  var s
                }
              }), x(d), Qn.core.getCache(d.trigger).stRevert = U, d.startY = h, d.pins = u, d.markers = v, d.ratio = s, d.autoSpeed = l, e.style.willChange = "transform"), d
            };

          function Y() {
            return t = a.clientHeight, a.style.overflow = "visible", Xn.style.height = Yn.innerHeight + (t - Yn.innerHeight) / I + "px", t - Yn.innerHeight
          }
          K(), nt.addEventListener("killAll", K), Qn.delayedCall(.5, (() => R = 0)), this.scrollTop = O, this.scrollTo = (e, a, n) => {
            let t = Qn.utils.clamp(0, At(), isNaN(e) ? this.offset(e, n) : +e);
            a ? c ? Qn.to(this, {
              duration: _,
              scrollTop: t,
              overwrite: "auto",
              ease: rt
            }) : B(t) : O(t)
          }, this.offset = (e, a) => {
            let n, t = (e = et(e)[0]).style.cssText,
              r = nt.create({
                trigger: e,
                start: a || "top top"
              });
            return o && (R ? nt.refresh() : G([r], !0)), n = r.start / I, r.kill(!1), e.style.cssText = t, Qn.core.getCache(e).uncache = 1, n
          }, this.content = function(e) {
            if (arguments.length) {
              let n = et(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || Xn.children[0];
              return n !== a && (a = n, l = a.getAttribute("style") || "", L && L.observe(a), Qn.set(a, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), _ || Qn.set(a, {
                clearProps: "transform"
              })), this
            }
            return a
          }, this.wrapper = function(e) {
            return arguments.length ? (n = et(e || "#smooth-wrapper")[0] || (e => {
              let a = $n.querySelector(".ScrollSmoother-wrapper");
              return a || (a = $n.createElement("div"), a.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(a, e), a.appendChild(e)), a
            })(a), d = n.getAttribute("style") || "", Y(), Qn.set(n, _ ? {
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
            (e = et(e)).forEach((e => {
              let a = o.length;
              for (; a--;) o[a].trigger === e && o[a].kill()
            })), a = a || {};
            let n, t, {
                speed: r,
                lag: i,
                effectsPadding: s
              } = a,
              d = [];
            for (n = 0; n < e.length; n++) t = q(e[n], r, i, n, s), t && d.push(t);
            return o.push(...d), d
          }, this.sections = (e, a) => {
            if (i || (i = []), !e) return i.slice(0);
            let n = et(e).map((e => nt.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: a => {
                e.style.opacity = a.isActive ? "1" : "0", e.style.pointerEvents = a.isActive ? "all" : "none"
              }
            })));
            return a && a.add ? i.push(...n) : i = n.slice(0), n
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => T(e || 0 === e ? e : S), this.getVelocity = () => D.getVelocity(-S), nt.scrollerProxy(n, {
            scrollTop: O,
            scrollHeight: () => Y() && Xn.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!_,
            content: a,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: Yn.innerWidth,
              height: Yn.innerHeight
            })
          }), nt.defaults({
            scroller: n
          });
          let $ = nt.getAll().filter((e => e.scroller === Yn || e.scroller === n));
          $.forEach((e => e.revert(!0, !0))), r = nt.create({
            animation: Qn.fromTo(N, {
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
                  e && (M(r), N.y = S), T(N.y, e), E(), u && !c && u(y)
                }
              }
            }),
            onRefreshInit: e => {
              if (mt.isRefreshing) return;
              if (mt.isRefreshing = !0, o) {
                let e = nt.getAll().filter((e => !!e.pin));
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
              g = a && a._end > a._dp._time, m = S, N.y = 0, _ && (1 === nt.isTouch && (n.style.position = "absolute"), n.scrollTop = 0, 1 === nt.isTouch && (n.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, Y() / I), g || M(e), N.y = -B() * I, T(N.y), R || e.animation.progress(Qn.utils.clamp(0, 1, m / I / -e.end)), g && (e.progress -= .001, e.update()), mt.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: Yn,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => Y() / I,
            onScrubComplete: () => {
              D.reset(), b && b(this)
            },
            scrub: _ || !0
          }), this.smooth = function(a) {
            return arguments.length && (_ = a || 0, I = _ && +e.speed || 1, r.scrubDuration(a)), r.getTween() ? r.getTween().duration() : 0
          }, r.getTween() && (r.getTween().vars.ease = e.ease || rt), this.scrollTrigger = r, e.effects && this.effects(!0 === e.effects ? "[data-" + k + "speed], [data-" + k + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), $.forEach((e => {
            e.vars.scroller = n, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, a) {
            return arguments.length ? (!!c !== e && (e ? (r.getTween() && r.getTween().pause(), B(-S / I), D.reset(), A = nt.normalizeScroll(), A && A.disable(), c = nt.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => O(-S)
            }), c.nested = it(Vn, "wheel,touch,scroll", !0, !1 !== a)) : (c.nested.kill(), c.kill(), c = 0, A && A.enable(), r.progress = (-S / I - r.start) / (r.end - r.start), M(r))), this) : !!c
          }, this.kill = this.revert = () => {
            this.paused(!1), M(r), r.kill();
            let e = (o || []).concat(i || []),
              t = e.length;
            for (; t--;) e[t].kill();
            nt.scrollerProxy(n), nt.removeEventListener("killAll", K), nt.removeEventListener("refresh", W), n.style.cssText = d, a.style.cssText = l;
            let c = nt.defaults({});
            c && c.scroller === n && nt.defaults({
              scroller: Yn
            }), this.normalizer && nt.normalizeScroll(!1), clearInterval(s), tt = null, L && L.disconnect(), Xn.style.removeProperty("height"), Yn.removeEventListener("focusin", j)
          }, this.refresh = (e, a) => r.refresh(e, a), w && (this.normalizer = nt.normalizeScroll(!0 === w ? {
            debounce: !0,
            content: !_ && a
          } : w)), nt.config(e), "overscrollBehavior" in Yn.getComputedStyle(Xn) && Qn.set([Xn, Vn], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in Yn.getComputedStyle(Xn) && Qn.set([Xn, Vn], {
            scrollBehavior: "auto"
          }), Yn.addEventListener("focusin", j), s = setInterval(E, 250), "loading" === $n.readyState || requestAnimationFrame((() => nt.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return qn || (Qn = e || ct(), lt() && window.document && (Yn = window, $n = document, Vn = $n.documentElement, Xn = $n.body), Qn && (et = Qn.utils.toArray, at = Qn.utils.clamp, rt = Qn.parseEase("expo"), st = Qn.core.context || function() {}, nt = Qn.core.globals().ScrollTrigger, Qn.core.globals("ScrollSmoother", mt), Xn && nt && (dt = Qn.delayedCall(.2, (() => nt.isRefreshing || tt && tt.refresh())).pause(), Zn = [Yn, $n, Vn, Xn], ot = nt.core._getVelocityProp, it = nt.core._inputObserver, mt.refresh = nt.refresh, qn = 1))), qn
        }
      }
      mt.version = "3.12.2", mt.create = e => tt && e && tt.content() === et(e.content)[0] ? tt : new mt(e), mt.get = () => tt, ct() && Qn.registerPlugin(mt);
      let gt, ft, ht, pt, ut, bt, Ct, vt, wt = () => "undefined" != typeof window,
        xt = () => gt || wt() && (gt = window.gsap) && gt.registerPlugin && gt,
        yt = e => "string" == typeof e,
        kt = e => "function" == typeof e,
        Bt = (e, a) => {
          let n = "x" === a ? "Width" : "Height",
            t = "scroll" + n,
            r = "client" + n;
          return e === ht || e === pt || e === ut ? Math.max(pt[t], ut[t]) - (ht["inner" + n] || pt[r] || ut[r]) : e[t] - e["offset" + n]
        },
        _t = (e, a) => {
          let n = "scroll" + ("x" === a ? "Left" : "Top");
          return e === ht && (null != e.pageXOffset ? n = "page" + a.toUpperCase() + "Offset" : e = null != pt[n] ? pt : ut), () => e[n]
        },
        It = (e, a) => {
          if (!(e = bt(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
          };
          let n = e.getBoundingClientRect(),
            t = !a || a === ht || a === ut,
            r = t ? {
              top: pt.clientTop - (ht.pageYOffset || pt.scrollTop || ut.scrollTop || 0),
              left: pt.clientLeft - (ht.pageXOffset || pt.scrollLeft || ut.scrollLeft || 0)
            } : a.getBoundingClientRect(),
            o = {
              x: n.left - r.left,
              y: n.top - r.top
            };
          return !t && a && (o.x += _t(a, "x")(), o.y += _t(a, "y")()), o
        },
        St = (e, a, n, t, r) => isNaN(e) || "object" == typeof e ? yt(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + t - r : "max" === e ? Bt(a, n) - r : Math.min(Bt(a, n), It(e, a)[n] - r) : parseFloat(e) - r,
        zt = () => {
          gt = xt(), wt() && gt && "undefined" != typeof document && document.body && (ht = window, ut = document.body, pt = document.documentElement, bt = gt.utils.toArray, gt.config({
            autoKillThreshold: 7
          }), Ct = gt.config(), ft = 1)
        };
      const Rt = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register(e) {
          gt = e, zt()
        },
        init(e, a, n, t, r) {
          ft || zt();
          let o = this,
            i = gt.getProperty(e, "scrollSnapType");
          o.isWin = e === ht, o.target = e, o.tween = n, a = ((e, a, n, t) => {
            if (kt(e) && (e = e(a, n, t)), "object" != typeof e) return yt(e) && "max" !== e && "=" !== e.charAt(1) ? {
              x: e,
              y: e
            } : {
              y: e
            };
            if (e.nodeType) return {
              y: e,
              x: e
            }; {
              let r, o = {};
              for (r in e) o[r] = "onAutoKill" !== r && kt(e[r]) ? e[r](a, n, t) : e[r];
              return o
            }
          })(a, t, e, r), o.vars = a, o.autoKill = !!a.autoKill, o.getX = _t(e, "x"), o.getY = _t(e, "y"), o.x = o.xPrev = o.getX(), o.y = o.yPrev = o.getY(), vt || (vt = gt.core.globals().ScrollTrigger), "smooth" === gt.getProperty(e, "scrollBehavior") && gt.set(e, {
            scrollBehavior: "auto"
          }), i && "none" !== i && (o.snap = 1, o.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != a.x ? (o.add(o, "x", o.x, St(a.x, e, "x", o.x, a.offsetX || 0), t, r), o._props.push("scrollTo_x")) : o.skipX = 1, null != a.y ? (o.add(o, "y", o.y, St(a.y, e, "y", o.y, a.offsetY || 0), t, r), o._props.push("scrollTo_y")) : o.skipY = 1
        },
        render(e, a) {
          let n, t, r, o, i, s = a._pt,
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
          n = g || !a.skipX ? a.getX() : A, t = g || !a.skipY ? a.getY() : m, r = t - m, o = n - A, i = Ct.autoKillThreshold, a.x < 0 && (a.x = 0), a.y < 0 && (a.y = 0), c && (!a.skipX && (o > i || o < -i) && n < Bt(d, "x") && (a.skipX = 1), !a.skipY && (r > i || r < -i) && t < Bt(d, "y") && (a.skipY = 1), a.skipX && a.skipY && (l.kill(), a.vars.onAutoKill && a.vars.onAutoKill.apply(l, a.vars.onAutoKillParams || []))), g ? ht.scrollTo(a.skipX ? n : a.x, a.skipY ? t : a.y) : (a.skipY || (d.scrollTop = a.y), a.skipX || (d.scrollLeft = a.x)), !f || 1 !== e && 0 !== e || (t = d.scrollTop, n = d.scrollLeft, h ? d.style.scrollSnapType = h : d.style.removeProperty("scroll-snap-type"), d.scrollTop = t + 1, d.scrollLeft = n + 1, d.scrollTop = t, d.scrollLeft = n), a.xPrev = a.x, a.yPrev = a.y, vt && vt.update()
        },
        kill(e) {
          let a = "scrollTo" === e;
          (a || "scrollTo_x" === e) && (this.skipX = 1), (a || "scrollTo_y" === e) && (this.skipY = 1)
        }
      };
      Rt.max = Bt, Rt.getOffset = It, Rt.buildGetter = _t, xt() && gt.registerPlugin(Rt);
      const Dt = e => {
        const a = S(),
          n = (e, t) => t?.requiresAuth && !a?.nickname ? e : [...e, {
            ...t,
            ...t.children ? {
              children: t.children.reduce(n, [])
            } : []
          }];
        return (0, t.useMemo)((() => e.reduce(n, [])), [e, a?.nickname])
      };
      var Et = n(20270),
        Nt = n(35449);
      const Ft = (e, a, n, t) => ({
          event: e || "nav_click",
          link_url: a,
          text: n,
          element_placement: `Global Nav > ${t}`
        }),
        Mt = () => {
          const e = I(),
            a = (() => {
              const e = (0, t.useContext)(B);
              if (void 0 === e) throw new Error("useNavigationLocale must be used within a Navigation Provider");
              return e.locale
            })(),
            n = S();
          return t => {
            if (!t.path) return t.domain;
            const o = [
                ["username", n?.nickname]
              ],
              i = ((e, a) => a.reduce(((e, a) => {
                let [n, t] = a;
                return e.replaceAll(`{${n}}`, t)
              }), e))(t.path, o),
              s = "www" === t.domain && "www" !== e.currentSite.site ? ((e, a) => {
                if (!a || a.iso === r.englishLocale.iso) return e;
                const n = a.subdomaincom;
                return "/" === e[0] ? n + e : `${n}/${e}`
              })(i, a) : i;
            return t.domain + s
          }
        },
        Tt = "nav-internal",
        Ot = "nav-external",
        Lt = "nav-dropdown",
        jt = "nav-no-link",
        Pt = "games-menu",
        Ht = (0, r.defineMessages)({
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
        Gt = e => {
          let {
            children: a,
            location: n,
            className: i,
            isLegacy: d,
            label: l,
            type: c,
            target: A,
            gaEvent: m,
            gaText: g,
            gaBreadCrumb: f,
            dataTestId: h,
            onClick: p,
            ...u
          } = e;
          const b = (0, r.useIntl)(),
            {
              track: C
            } = (0, o.useGtmTrack)(),
            w = Mt(),
            {
              dispatch: x
            } = (0, s.useRockstarEventDispatcher)(),
            y = N(),
            k = (0, t.useMemo)((() => {
              const e = {};
              return "_blank" === A && (e["aria-label"] = b.formatMessage(Ht.nav_opens_in_new_window, {
                text: l
              }), e.rel = "noopener"), e
            }), [l, A]);
          if (!n && c === jt && h) {
            const e = () => {
              C(Ft(m, "", g, f)), x(h)
            };
            return (0, v.jsx)("button", {
              type: "button",
              className: i,
              onClick: () => e(),
              "data-testid": h,
              ...u,
              ...k,
              children: a
            })
          }
          if (!n) return null;
          const B = w(n),
            _ = Boolean(c === Ot || d || document.documentElement.classList.contains("legacyPage"));
          return (0, v.jsx)(Nt.A, {
            className: i,
            target: A,
            to: B,
            onClick: () => (p?.(), void C(Ft(m, B.toString(), g, f))),
            onNavigate: y,
            reloadDocument: _,
            "data-testid": h,
            ...u,
            ...k,
            children: a
          })
        };
      var Wt = n(59229),
        Kt = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Kt.setAttributes = f(), Kt.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, Kt.domAPI = m(), Kt.insertStyleElement = p(), c()(Wt.A, Kt);
      const Jt = Wt.A && Wt.A.locals ? Wt.A.locals : void 0,
        Ut = e => {
          let {
            children: a,
            dataTestId: n,
            location: t,
            variant: r,
            gaEvent: o,
            gaText: i,
            target: s,
            onClick: d
          } = e;
          return (0, v.jsx)("div", {
            className: Jt.callToActionContainer,
            children: (0, v.jsx)(Gt, {
              className: [Jt.callToAction, r ? Jt[r] : ""].join(" "),
              dataTestId: n,
              location: t,
              gaEvent: o,
              gaText: i,
              gaBreadCrumb: i,
              onClick: d,
              target: s,
              children: a
            })
          })
        };
      var Qt = n(63582);
      const qt = {
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
        Yt = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        },
        $t = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        Vt = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg",
        Xt = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
        Zt = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg",
        er = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg";
      var ar = n(82363),
        nr = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      nr.setAttributes = f(), nr.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, nr.domAPI = m(), nr.insertStyleElement = p(), c()(ar.A, nr);
      const tr = ar.A && ar.A.locals ? ar.A.locals : void 0,
        rr = e => {
          let {
            children: a,
            selected: n,
            ...t
          } = e;
          return (0, v.jsx)("button", {
            type: "button",
            className: [tr.pillButton, n ? tr.selected : ""].join(" "),
            ...t,
            children: a
          })
        };
      var or = n(75971),
        ir = n(14907),
        sr = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      sr.setAttributes = f(), sr.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, sr.domAPI = m(), sr.insertStyleElement = p(), c()(ir.A, sr);
      const dr = ir.A && ir.A.locals ? ir.A.locals : void 0,
        lr = {
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
        cr = e => {
          let {
            openerRef: a,
            isOpen: n,
            isMobile: r,
            children: o
          } = e;
          const [i, s] = (0, t.useState)(null), {
            styles: d,
            attributes: l,
            forceUpdate: c
          } = (0, or.usePopper)(a, i, {
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
          return (0, t.useEffect)((() => {
            Promise.resolve().then(c)
          }), [a, n, r]), (0, v.jsx)(Qt.motion.div, {
            initial: "exit",
            animate: n ? "enter" : "exit",
            transition: qt.quickFade,
            variants: lr,
            className: [dr.subMenu].join(" "),
            style: {
              ...d.popper
            },
            ref: s,
            ...l.popper,
            children: o
          })
        };
      var Ar = n(82370),
        mr = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      mr.setAttributes = f(), mr.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, mr.domAPI = m(), mr.insertStyleElement = p(), c()(Ar.A, mr);
      const gr = Ar.A && Ar.A.locals ? Ar.A.locals : void 0,
        fr = e => {
          let {
            children: a,
            ...n
          } = e;
          return (0, v.jsx)("button", {
            type: "button",
            className: gr.subMenuButton,
            ...n,
            children: a
          })
        };
      var hr = n(39014),
        pr = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      pr.setAttributes = f(), pr.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, pr.domAPI = m(), pr.insertStyleElement = p(), c()(hr.A, pr);
      const ur = hr.A && hr.A.locals ? hr.A.locals : void 0,
        br = e => {
          let {
            children: a,
            isOpen: n,
            onClose: t,
            visible: r
          } = e;
          return n ? (0, v.jsxs)("div", {
            className: [ur.backgroundElevation].join(" "),
            onClick: t,
            children: [(0, v.jsx)("div", {
              className: [ur.backgroundOverlay, r ? ur.backgroundVisible : ""].join(" ")
            }), a]
          }) : null
        },
        Cr = e => {
          let {
            target: a,
            selected: n,
            selectedTarget: o,
            onClick: i,
            isMobile: s,
            ...d
          } = e;
          const l = (0, r.useIntl)(),
            [c, A] = (0, t.useState)(!1),
            [m, g] = (0, t.useState)(null);
          return a.type === Lt ? (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)("div", {
              ref: g,
              children: (0, v.jsxs)(rr, {
                "aria-label": l.formatMessage(Ht.search_target_aria_label, {
                  target: o && a?.targets?.indexOf(o) >= 0 ? o.text : a.text
                }),
                selected: n,
                onClick: () => A(!c),
                ...d,
                children: [o && a?.targets?.indexOf(o) >= 0 ? o.text : a.text, (0, v.jsx)("img", {
                  src: Xt,
                  alt: ""
                })]
              }, a.gaText)
            }), (0, v.jsx)(br, {
              isOpen: c,
              onClose: () => A(!1),
              children: (0, v.jsx)(cr, {
                isOpen: c,
                openerRef: m,
                isMobile: s,
                children: a.targets?.map((e => (0, v.jsx)(fr, {
                  "aria-label": l.formatMessage(Ht.search_target_aria_label, {
                    target: e.text
                  }),
                  onClick: () => i(e),
                  children: e.text
                }, e.gaText)))
              })
            })]
          }) : (0, v.jsx)(rr, {
            "aria-label": l.formatMessage(Ht.search_target_aria_label, {
              target: a.text
            }),
            selected: n,
            onClick: () => i(a),
            ...d,
            children: a.text
          }, a.tab)
        };
      var vr = n(64735),
        wr = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      wr.setAttributes = f(), wr.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, wr.domAPI = m(), wr.insertStyleElement = p(), c()(vr.A, wr);
      const xr = vr.A && vr.A.locals ? vr.A.locals : void 0;
      var yr = n(31867),
        kr = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      kr.setAttributes = f(), kr.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, kr.domAPI = m(), kr.insertStyleElement = p(), c()(yr.A, kr);
      const Br = yr.A && yr.A.locals ? yr.A.locals : void 0,
        _r = e => {
          let {
            children: a,
            isOpen: n,
            onMouseClick: r,
            onEscapeKey: o,
            onMouseAway: i,
            style: s
          } = e;
          const d = n ? [Br.open] : [],
            l = e => {
              "Escape" === e.key && o?.()
            };
          return (0, t.useEffect)((() => (n ? window.addEventListener("keyup", l) : window.removeEventListener("keyup", l), () => window.removeEventListener("keyup", l))), [l, n]), n ? (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)("div", {
              className: [Br.secondaryNavigationOverlay, ...d].join(" "),
              onClick: r,
              onMouseEnter: i,
              style: s
            }), a && (0, v.jsx)("div", {
              className: [Br.secondaryNavigationSlide, ...d].join(" "),
              children: a
            })]
          }) : null
        },
        Ir = e => {
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
          const h = (0, r.useIntl)(),
            p = R(),
            u = (0, t.useRef)(null),
            b = () => {
              i(), m || s(""), u?.current?.focus()
            },
            C = () => {
              m || i()
            };
          return (0, t.useEffect)((() => {
            d ? u?.current?.focus() : u?.current?.blur()
          }), [d]), (0, v.jsxs)("div", {
            children: [(0, v.jsx)("button", {
              className: xr.searchToggleButton,
              type: "button",
              onClick: b,
              "data-testid": "searchToggle",
              children: (0, v.jsx)("img", {
                src: $t,
                alt: h.formatMessage(d ? Ht.search_close_button : Ht.search_open_button)
              })
            }), (0, v.jsx)(Qt.AnimatePresence, {
              children: d && (0, v.jsxs)("div", {
                children: [(0, v.jsx)(_r, {
                  isOpen: !m,
                  onEscapeKey: C,
                  onMouseClick: C
                }), (0, v.jsxs)(Qt.motion.div, {
                  className: xr.searchPopup,
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
                    transition: qt.springClose
                  },
                  transition: qt.springOpen,
                  "data-testid": "searchBar",
                  children: [(0, v.jsxs)(Qt.motion.div, {
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
                    className: xr.searchQuery,
                    children: [(0, v.jsx)("div", {
                      className: xr.searchIcon,
                      children: (0, v.jsx)("button", {
                        type: "button",
                        onClick: a,
                        children: (0, v.jsx)("img", {
                          src: $t,
                          alt: h.formatMessage(Ht.search_action)
                        })
                      })
                    }), (0, v.jsx)("div", {
                      className: xr.searchField,
                      children: (0, v.jsx)("input", {
                        type: "textfield",
                        value: l,
                        onChange: e => s(e.target.value),
                        onKeyUp: n,
                        placeholder: h.formatMessage(Ht.search_placeholder),
                        ref: u,
                        enterKeyHint: "search",
                        maxLength: f
                      })
                    }), (0, v.jsx)("div", {
                      className: xr.targets,
                      children: p.targets.map(((e, a) => (0, v.jsx)(Cr, {
                        target: e,
                        onClick: e => o(e, a),
                        selected: A === a,
                        selectedTarget: c
                      }, e.tab)))
                    }), !m && (0, v.jsx)("div", {
                      className: xr.closeIcon,
                      children: (0, v.jsx)("button", {
                        type: "button",
                        onClick: b,
                        children: (0, v.jsx)("img", {
                          src: Vt,
                          alt: h.formatMessage(Ht.search_close_button)
                        })
                      })
                    })]
                  }), g && (0, v.jsx)("div", {
                    className: xr.errorMessage,
                    "aria-live": "polite",
                    children: g
                  })]
                })]
              })
            })]
          })
        };
      var Sr = n(39715),
        zr = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      zr.setAttributes = f(), zr.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, zr.domAPI = m(), zr.insertStyleElement = p(), c()(Sr.A, zr);
      const Rr = Sr.A && Sr.A.locals ? Sr.A.locals : void 0,
        Dr = e => {
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
          const h = (0, r.useIntl)(),
            p = R(),
            u = (0, t.useRef)(null),
            [b, C] = (0, t.useState)(!1);
          return (0, t.useEffect)((() => {
            let e, a, n = !1;
            const t = t => {
                u && u.current && (t.preventDefault(), n = !0, e = t.pageX - u.current.offsetLeft, a = u.current.scrollLeft)
              },
              r = () => {
                n = !1
              },
              o = t => {
                if (n && (t.preventDefault(), u && u.current)) {
                  const n = t.pageX - u.current.offsetLeft - e;
                  u.current.scrollLeft = a - n
                }
              },
              i = () => {
                if (u && u.current) {
                  const e = u.current.scrollLeft;
                  C(e > 20)
                }
              };
            if (u && u.current) {
              const e = u.current;
              e.addEventListener("mousedown", t), e.addEventListener("mouseup", r), e.addEventListener("mouseleave", r), e.addEventListener("mousemove", o), e.addEventListener("scroll", i)
            }
            return () => {
              u && u.current && (u.current.removeEventListener("mousedown", t), u.current.removeEventListener("mouseup", r), u.current.removeEventListener("mouseleave", r), u.current.removeEventListener("mousemove", o), u.current.removeEventListener("scroll", i))
            }
          })), (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsxs)(Qt.motion.div, {
              className: Rr.search,
              variants: Yt,
              transition: qt.staggerFade,
              "data-testid": "searchBar",
              children: [(0, v.jsx)("button", {
                type: "button",
                onClick: () => d ? a() : i(!0),
                children: (0, v.jsx)("img", {
                  src: $t,
                  alt: h.formatMessage(Ht.search_action)
                })
              }), (0, v.jsx)("input", {
                type: "text",
                value: l,
                onChange: e => s(e.target.value),
                onFocus: () => i(!0),
                onKeyUp: n,
                placeholder: h.formatMessage(Ht.search_placeholder),
                enterKeyHint: "search",
                maxLength: f
              }), d && !m && (0, v.jsx)("button", {
                type: "button",
                onClick: () => i(!1),
                children: (0, v.jsx)("img", {
                  src: Vt,
                  alt: h.formatMessage(Ht.search_close_button)
                })
              })]
            }), d && (0, v.jsxs)("div", {
              className: [Rr.targetsOuter, b ? Rr.hasScroll : ""].join(" "),
              children: [(0, v.jsx)("div", {
                className: Rr.targets,
                ref: u,
                children: p.targets.map(((e, a) => (0, v.jsx)(Cr, {
                  target: e,
                  selected: A === a,
                  selectedTarget: c,
                  onClick: e => o(e, a),
                  isMobile: !0
                }, e.tab)))
              }), g && (0, v.jsx)("div", {
                className: Rr.errorMessage,
                "aria-live": "polite",
                children: g
              })]
            })]
          })
        };
      var Er = n(16188),
        Nr = n.n(Er);
      const Fr = "global-nav-search",
        Mr = e => {
          let {
            ...a
          } = e;
          const {
            windowWidth: n
          } = (0, s.useWindowResize)(), {
            pathname: o,
            search: i
          } = E(), d = R(), [l, c] = (0, t.useState)(""), [A, m] = z(), [g, f] = (0, t.useState)(0), [h, p] = (0, t.useState)(d.targets[0]), [u, b] = (0, t.useState)(""), C = (() => {
            const e = Mt(),
              a = N();
            return (n, t) => {
              const r = new URLSearchParams(t.params),
                o = t.path?.replace("{term}", n);
              r.forEach(((e, a) => {
                "{query}" === e && r.set(a, n)
              }));
              const i = r.toString() ? `?${r.toString()}` : "",
                s = {
                  domain: t.domain,
                  path: o + i
                },
                d = e(s);
              d ? s.domain ? window.location.href = d : a ? a(d) : window.history.pushState({}, "", d) : console.error(`No search url could be constructed from ${t.domain} and ${t.path}`)
            }
          })(), {
            isSearchPage: w,
            forceSearch: x
          } = D(), y = (0, r.useIntl)(), k = n < 1024, B = w && x || A === Fr, _ = e => {
            if ("" === l) return !1;
            e.length > h.searchOptions.max && c(e.substring(0, h.searchOptions.max));
            const a = h.searchOptions.validationFunction?.(e);
            return e.split(/\s+/).every((e => e.length < h.searchOptions.min)) ? (b(y.formatMessage(Ht.nav_search_error_too_short, {
              count: h.searchOptions.min
            })), !1) : a ? (b(y.formatMessage(Ht.nav_search_error_invalid_chars, {
              invalidChars: [...new Set(a)].join(", ")
            })), !1) : (b(""), !0)
          }, I = () => {
            _(l) && C(l, h.location)
          }, S = (e, a) => {
            let n;
            const t = new URLSearchParams(e);
            return new URLSearchParams(a).forEach(((e, a) => {
              const r = t.get(a);
              "{query}" === e && r ? (n = !0, c(r), _(r)) : n = r === e && !1 !== n
            })), n
          }, F = (e, a) => {
            if (!a) return !1;
            const n = e.split(/[/?]+/),
              t = a.split(/[/?]+/);
            if (t.every(((e, a) => e === n[a] || "{term}" === e || "" === e))) {
              const e = t.findIndex((e => "{term}" === e));
              return e && c(n[e]), !0
            }
            return !1
          };
          (0, t.useEffect)((() => {
            w || (f(0), p(d.targets[0]));
            const e = d.targets.findIndex((e => {
              if ("" === e.type && e.location) {
                if (e.location.path && o.startsWith(e.location.path) && S(i, e.location.params)) return p(e), !0;
                if (!e.location.params && F(o, e.location.path)) return p(e), !0
              }
              if ("nav-dropdown" === e.type) {
                const a = e.targets?.findIndex((e => {
                  if ("" === e.type) {
                    if (e.location.path && o.startsWith(e.location.path) && S(i, e.location.params)) return p(e), !0;
                    if (F(o, e.location.path)) return p(e), !0
                  }
                  return !1
                }));
                return !Nr().isNil(a) && a >= 0
              }
            }));
            f(e)
          }), [o, i, w]);
          const M = {
            handleSearch: I,
            handleSearchKeypress: e => {
              b(""), "Enter" === e.key && I()
            },
            handleSearchTargetSelect: (e, a) => {
              p(e), f(a), _(l) && C(l, e.location)
            },
            setIsSearchOpen: () => m(Fr),
            setSearchQuery: c,
            isSearchOpen: B,
            searchQuery: l,
            selectedTarget: h,
            selectedTargetIndex: g,
            isSearchPage: w,
            searchError: u,
            maxSearchLength: h.searchOptions.max
          };
          return k ? (0, v.jsx)(Dr, {
            ...M,
            ...a
          }) : (0, v.jsx)(Ir, {
            ...M
          })
        };
      var Tr = n(6958),
        Or = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Or.setAttributes = f(), Or.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, Or.domAPI = m(), Or.insertStyleElement = p(), c()(Tr.A, Or);
      const Lr = Tr.A && Tr.A.locals ? Tr.A.locals : void 0,
        jr = e => {
          let {
            cta: a,
            includeSearch: n = !0,
            isMobile: t
          } = e;
          const r = E(),
            o = N(),
            [, i] = z();
          return (0, v.jsxs)("div", {
            className: Lr.actions,
            "data-testid": "actions",
            children: [a && (0, v.jsx)("div", {
              children: (0, v.jsx)(Ut, {
                variant: a.variant,
                location: a.location,
                dataTestId: a.dataTestId,
                gaEvent: a.ga,
                gaText: a.text,
                target: a.target,
                children: a.text
              })
            }), n && (0, v.jsx)(Mr, {}), (0, v.jsxs)("div", {
              children: [(0, v.jsx)(Et.MenuButton, {
                setOtherHeaderDropdowns: i
              }), !t && (0, v.jsx)(Et.Menu, {
                location: r,
                onNavigate: o
              })]
            })]
          })
        };
      var Pr = n(73343),
        Hr = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Hr.setAttributes = f(), Hr.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, Hr.domAPI = m(), Hr.insertStyleElement = p(), c()(Pr.A, Hr);
      const Gr = Pr.A && Pr.A.locals ? Pr.A.locals : void 0,
        Wr = e => e.replace(/\?.*$/, ""),
        Kr = (e, a) => e === a,
        Jr = e => {
          const {
            pathname: a,
            hostname: n
          } = E();
          return e && e.length ? e.map((e => {
            let {
              domain: t,
              path: r,
              additionalPathMatches: o
            } = e;
            if (t !== n && "" !== t) return null;
            const i = Wr(r || ""),
              s = Kr(i, Wr(a));
            let d;
            return o && (d = Kr(o, Wr(a))), Boolean(s || d)
          })) : []
        },
        Ur = e => {
          let {
            text: a,
            type: n,
            location: t,
            isLegacy: r,
            gaText: o,
            gaBreadCrumb: i,
            dataTestId: s,
            target: d,
            ...l
          } = e;
          const [c] = Jr(t ? [{
            domain: t?.domain,
            path: t?.path,
            end: "nav-internal" === n,
            additionalPathMatches: t?.additionalPathMatches
          }] : []), A = n === Ot;
          return (0, v.jsxs)(Gt, {
            className: [Gr.navigationItem, c ? Gr.active : ""].join(" "),
            location: t,
            isLegacy: r,
            type: n,
            target: d,
            gaText: o,
            gaBreadCrumb: i,
            dataTestId: s,
            label: a,
            ...l,
            children: [a, A && (0, v.jsx)("img", {
              alt: "",
              src: Zt
            })]
          })
        };
      var Qr = n(9581),
        qr = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      qr.setAttributes = f(), qr.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, qr.domAPI = m(), qr.insertStyleElement = p(), c()(Qr.A, qr);
      const Yr = Qr.A && Qr.A.locals ? Qr.A.locals : void 0,
        $r = e => {
          let {
            text: a,
            isOpen: n,
            onClick: r,
            buttonRef: i,
            navChildren: s,
            gaText: d,
            gaBreadCrumb: l,
            dataTestId: c
          } = e;
          const {
            track: A
          } = (0, o.useGtmTrack)(), m = (0, t.useCallback)((() => {
            A(Ft(void 0, "", d, l)), r()
          }), [d, l, n, r]), g = (0, t.useMemo)((() => {
            if (!s) return;
            const e = (a, n) => {
              let t;
              return t = n.children ? n.children.reduce(e, []) : n?.location ? [n.location] : [], [...a, ...t]
            };
            return s.reduce(e, [])
          }), [s]), f = Jr(g), h = f?.some(Boolean);
          return (0, v.jsx)("div", {
            className: Yr.navigationDropdown,
            ref: i,
            children: (0, v.jsxs)("button", {
              className: [Yr.navigationDropdownButton, h ? Yr.active : "", n ? Yr.open : ""].join(" "),
              type: "button",
              "data-testid": c || "navDropdown",
              onClick: m,
              children: [a, (0, v.jsx)("img", {
                src: Xt,
                alt: ""
              })]
            })
          })
        };
      var Vr = n(92824),
        Xr = n(8851),
        Zr = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Zr.setAttributes = f(), Zr.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, Zr.domAPI = m(), Zr.insertStyleElement = p(), c()(Xr.A, Zr);
      const eo = Xr.A && Xr.A.locals ? Xr.A.locals : void 0,
        ao = e => {
          let {
            title: a,
            titleSlug: n,
            location: t,
            gaText: r,
            gaBreadCrumb: o,
            dataTestId: i,
            ...s
          } = e;
          return (0, v.jsx)("div", {
            className: eo.gameCard,
            children: (0, v.jsx)(Gt, {
              location: t,
              gaText: r,
              gaBreadCrumb: o,
              dataTestId: i,
              ...s,
              children: (0, v.jsx)(Vr.A, {
                title: a,
                titleSlug: n
              })
            })
          }, a)
        };
      var no = n(78686),
        to = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      to.setAttributes = f(), to.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, to.domAPI = m(), to.insertStyleElement = p(), c()(no.A, to);
      const ro = no.A && no.A.locals ? no.A.locals : void 0,
        oo = (e, a) => {
          const n = a.currentSite?.site === k.C.www ? "" : `https://${a.sites[k.C.www]}.rockstargames.com`;
          return {
            viewAllLocation: {
              domain: n,
              path: "/games"
            },
            games: [{
              titleSlug: "gta-v",
              text: e.formatMessage(Ht.games_menu_gta_v),
              gaText: "Grand Theft Auto V",
              location: {
                domain: n,
                path: "/gta-v"
              },
              dataTestId: "gtav"
            }, {
              titleSlug: "gta-online",
              text: e.formatMessage(Ht.games_menu_gta_online),
              gaText: "Grand Theft Auto Online",
              location: {
                domain: n,
                path: "/gta-online"
              },
              dataTestId: "gtao"
            }, {
              titleSlug: "reddeadredemption2",
              text: e.formatMessage(Ht.games_menu_rdr_2),
              gaText: "Red Dead Redemption 2",
              location: {
                domain: n,
                path: "/reddeadredemption2"
              },
              dataTestId: "rdr2"
            }, {
              titleSlug: "reddeadredemption",
              text: e.formatMessage(Ht.games_menu_rdr),
              gaText: "Red Dead Redemption",
              location: {
                domain: n,
                path: "/reddeadredemption"
              },
              dataTestId: "rdr"
            }, {
              titleSlug: "reddeadonline",
              text: e.formatMessage(Ht.games_menu_rdr_online),
              gaText: "Red Dead Online",
              location: {
                domain: n,
                path: "/reddeadonline"
              },
              dataTestId: "rdo"
            }]
          }
        },
        io = () => {
          const e = (0, r.useIntl)(),
            a = I(),
            {
              viewAllLocation: n,
              games: t
            } = oo(e, a);
          return (0, v.jsxs)("div", {
            className: ro.gamesMenu,
            "data-testid": "gamesMenu",
            children: [(0, v.jsxs)("div", {
              className: ro.titleBar,
              children: [(0, v.jsx)("div", {
                children: (0, v.jsx)("h2", {
                  className: ro.menuTitle,
                  children: e.formatMessage(Ht.games_menu_featured)
                })
              }), (0, v.jsx)("div", {
                children: (0, v.jsxs)(Gt, {
                  className: ro.viewAllLink,
                  gaText: Ht.games_menu_view_all.defaultMessage,
                  gaBreadCrumb: `Games > ${Ht.games_menu_view_all.defaultMessage}`,
                  location: n,
                  children: [e.formatMessage(Ht.games_menu_view_all), (0, v.jsx)("img", {
                    src: er,
                    alt: e.formatMessage(Ht.nav_view_all_games)
                  })]
                })
              })]
            }), (0, v.jsx)("div", {
              className: ro.gameCards,
              children: t.map((e => (0, v.jsx)(ao, {
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
      var so = n(51543),
        lo = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      lo.setAttributes = f(), lo.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, lo.domAPI = m(), lo.insertStyleElement = p(), c()(so.A, lo);
      const co = so.A && so.A.locals ? so.A.locals : void 0;
      var Ao = n(82853),
        mo = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      mo.setAttributes = f(), mo.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, mo.domAPI = m(), mo.insertStyleElement = p(), c()(Ao.A, mo);
      const go = Ao.A && Ao.A.locals ? Ao.A.locals : void 0;
      var fo = n(77482),
        ho = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      ho.setAttributes = f(), ho.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, ho.domAPI = m(), ho.insertStyleElement = p(), c()(fo.A, ho);
      const po = fo.A && fo.A.locals ? fo.A.locals : void 0,
        uo = e => [po.navigationLink, e ? po.active : ""].join(" "),
        bo = e => {
          let {
            text: a,
            type: n,
            location: t,
            className: r,
            isLegacy: o,
            target: i,
            nested: s,
            gaText: d,
            gaBreadCrumb: l,
            dataTestId: c,
            ...A
          } = e;
          const m = n === Ot,
            g = t ? [{
              ...t,
              end: n === Tt
            }] : [],
            [f] = Jr(g);
          return (0, v.jsxs)(Gt, {
            className: [uo(Boolean(f)), go.subMenuItem, s ? go.nested : "", r].join(" "),
            location: t,
            isLegacy: o,
            type: n,
            target: i,
            gaText: d,
            gaBreadCrumb: l,
            dataTestId: c,
            label: a,
            "data-ui-name": "sub-menu-item",
            ...A,
            children: [a, m && (0, v.jsx)("img", {
              alt: "",
              src: Zt
            })]
          })
        },
        Co = "nav-dropdown",
        vo = e => {
          let {
            text: a,
            navChildren: n,
            gaText: r,
            gaBreadCrumb: i,
            nested: s,
            dataTestId: d,
            subMenuId: l,
            toggleOpen: c,
            isOpen: A,
            ...m
          } = e;
          const [g] = z(), {
            track: f
          } = (0, o.useGtmTrack)(), h = (0, t.useRef)(null), [p, u] = (0, t.useState)(null);
          (0, t.useEffect)((() => {
            null === g && c(null)
          }), [g]);
          const b = e => {
              f(Ft(void 0, "", r, i)), c(e ? l : null)
            },
            C = e => {
              "ArrowLeft" === e.code && (b(!1), h?.current?.focus())
            };
          return (0, v.jsxs)("div", {
            className: [co.subMenuDropdownContainer, s ? co.nested : ""].join(" "),
            ...m,
            "data-ui-name": "sub-menu-item",
            children: [(0, v.jsxs)("button", {
              type: "button",
              className: [co.subMenuDropdownButton, s ? co.nested : "", A ? co.open : ""].join(" "),
              onClick: () => b(!A),
              onKeyUp: e => {
                "Enter" === e.code && b(!0), "ArrowRight" === e.code && b(!0), "ArrowLeft" === e.code && b(!1)
              },
              ref: h,
              "data-testid": d,
              children: [a, (0, v.jsx)("img", {
                src: Xt,
                className: co.openChevron,
                alt: ""
              })]
            }), (0, v.jsx)(Qt.AnimatePresence, {
              children: A && n && (0, v.jsx)(Qt.motion.div, {
                className: co.subMenuDropdownItems,
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
                transition: qt.springOpen,
                children: n.map((e => e.type === Co ? (0, v.jsx)(vo, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.gaText,
                  gaBreadCrumb: `${i} > ${e.gaText}`,
                  nested: !0,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: p === `desktop-submenu-${e.gaText}`,
                  toggleOpen: u
                }, e.gaText) : (0, v.jsx)(bo, {
                  text: e.text,
                  type: e.type,
                  location: e.location,
                  gaText: e.gaText,
                  gaBreadCrumb: `${i} > ${e.gaText}`,
                  onKeyUp: C,
                  isLegacy: e.isLegacy,
                  dataTestId: e.dataTestId,
                  nested: !0
                }, e.gaText)))
              })
            })]
          })
        },
        wo = vo,
        xo = {
          show: {
            height: "auto",
            zIndex: 101,
            display: "block",
            visibility: "visible",
            transition: {
              ...qt.springOpen
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
              ...qt.springClose
            }
          }
        },
        yo = e => {
          let {
            text: a,
            gaText: n,
            type: r,
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
          const [f, h] = (0, t.useState)(null), p = E(), [u, b] = z(), [C, w] = (0, t.useState)(null), x = u === c, y = {
            ...x ? {
              visibility: "visible",
              display: "block"
            } : {
              visibility: "hidden",
              display: "none"
            }
          };
          (0, t.useEffect)((() => {
            b(null)
          }), [p.pathname, p.key]);
          const k = l ? `${l} > ${n}` : n ?? a;
          return r === Lt ? (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)($r, {
              text: a,
              gaText: n,
              gaBreadCrumb: k,
              onClick: () => b(c),
              isOpen: x,
              buttonRef: A ? void 0 : h,
              navChildren: i,
              dataTestId: m,
              ...g
            }), !A && (0, v.jsxs)(v.Fragment, {
              children: [(0, v.jsx)(_r, {
                isOpen: x,
                onMouseClick: () => b(null),
                onEscapeKey: () => b(null)
              }), (0, v.jsx)(cr, {
                isOpen: x,
                openerRef: f,
                children: i?.map((e => e.type === Lt ? (0, v.jsx)(wo, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.text,
                  gaBreadCrumb: `${k} > ${e.gaText}`,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: C === `desktop-submenu-${e.gaText}`,
                  toggleOpen: w
                }, `desktop-submenu-${e.text}`) : (0, v.jsx)(bo, {
                  location: e.location,
                  text: e.text,
                  type: e.type,
                  isLegacy: e.isLegacy,
                  target: e.target,
                  gaText: e.gaText,
                  gaBreadCrumb: `${k} > ${e.gaText}`,
                  dataTestId: e.dataTestId
                }, e.text)))
              })]
            })]
          }) : r === Pt ? (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)($r, {
              text: a,
              gaText: a,
              gaBreadCrumb: l ? `${l} > ${n}` : n,
              onClick: () => b(c),
              isOpen: x,
              dataTestId: m,
              ...g
            }), !A && (0, v.jsx)(_r, {
              isOpen: !0,
              onMouseClick: () => b(null),
              onEscapeKey: () => b(null),
              style: y,
              children: (0, v.jsx)(Qt.motion.div, {
                initial: "hidden",
                animate: x ? "show" : "hidden",
                variants: xo,
                children: (0, v.jsx)(io, {})
              })
            })]
          }) : o || r === jt ? (0, v.jsx)(Ur, {
            location: o,
            type: r,
            text: a,
            isLegacy: s,
            target: d,
            gaText: n,
            gaBreadCrumb: l ? `${l} > ${n}` : n,
            dataTestId: m,
            ...g
          }) : null
        };
      var ko = n(95768),
        Bo = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Bo.setAttributes = f(), Bo.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, Bo.domAPI = m(), Bo.insertStyleElement = p(), c()(ko.A, Bo);
      const _o = ko.A && ko.A.locals ? ko.A.locals : void 0,
        Io = e => {
          let {
            links: a
          } = e;
          const n = (0, r.useIntl)(),
            [o, i] = (0, t.useState)(a),
            [s, d] = (0, t.useState)([]),
            l = (0, t.useRef)(null),
            c = (0, t.useRef)(null),
            A = (0, t.useCallback)((() => {
              const e = c.current;
              if (!e || !a.length) return;
              const {
                children: n
              } = e;
              let t = 0;
              const r = Array.from(n).map(((e, a) => {
                  const n = e.getBoundingClientRect().top;
                  return 0 === a && (t = n), n
                })),
                o = r.filter((e => e !== t)).length,
                s = r.findIndex((e => e > t));
              let l = s;
              s > 0 && (l = s - 1), o ? (i(a.slice(0, l)), d(a.slice(l))) : (i(a), d([]))
            }), [a, c?.current]);
          (0, t.useEffect)((() => {
            const e = new ResizeObserver(A);
            return c?.current && e.observe(c.current), () => {
              c?.current && e.unobserve(c.current)
            }
          }), [a, c?.current]);
          const m = (0, t.useMemo)((() => (0, v.jsx)("ul", {
            ref: c,
            className: _o.ulHidden,
            "aria-hidden": "true",
            children: a.map((e => (0, v.jsx)("li", {
              children: (0, v.jsx)(yo, {
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
          return 0 === a.length ? null : (0, v.jsxs)("nav", {
            className: _o.navigation,
            children: [(0, v.jsxs)("ul", {
              ref: l,
              children: [o.map((e => (0, v.jsx)("li", {
                children: (0, v.jsx)(yo, {
                  text: e.text,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  navKey: e.text,
                  dataTestId: e?.dataTestId
                })
              }, e.text))), s.length > 0 && (0, v.jsx)("li", {
                children: (0, v.jsx)(yo, {
                  text: n.formatMessage(Ht.nav_more_dropdown),
                  type: Lt,
                  navChildren: s,
                  navKey: "more",
                  dataTestId: "navMore"
                })
              })]
            }), m]
          })
        };
      var So = n(87704),
        zo = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      zo.setAttributes = f(), zo.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, zo.domAPI = m(), zo.insertStyleElement = p(), c()(So.A, zo);
      const Ro = So.A && So.A.locals ? So.A.locals : void 0,
        Do = () => (0, v.jsx)("div", {
          className: Ro.rockstarLogo
        });
      var Eo = n(62323),
        No = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      No.setAttributes = f(), No.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, No.domAPI = m(), No.insertStyleElement = p(), c()(Eo.A, No);
      const Fo = Eo.A && Eo.A.locals ? Eo.A.locals : void 0,
        Mo = () => {
          const {
            windowWidth: e
          } = (0, s.useWindowResize)(), a = I(), n = a.currentSite?.site === k.C.www ? "" : `https://${a.sites[k.C.www]}.rockstargames.com`, t = e < 1024, o = {
            hidden: {
              y: "100%",
              transition: qt.hamburgerClose
            },
            show: {
              y: 0,
              transition: {
                ...qt.hamburgerOpen,
                staggerChildren: .1,
                delayChildren: .6 * qt.hamburgerOpen.duration
              }
            }
          }, i = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: qt.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: qt.staggerFade
            }
          }, d = (0, r.useIntl)(), l = {
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
          }, c = "Quick Access";
          return (0, v.jsxs)(Qt.motion.ul, {
            className: Fo.quickAccess,
            variants: t ? o : Yt,
            initial: "hidden",
            animate: "show",
            exit: "hidden",
            transition: t ? null : qt.quickFade,
            children: [(0, v.jsx)(Qt.motion.li, {
              variants: t ? i : null,
              children: (0, v.jsxs)(Gt, {
                location: l.home,
                className: [uo(), Fo.link].join(" "),
                gaText: Ht.nav_quick_access_home.defaultMessage,
                gaBreadCrumb: `${c} > ${Ht.nav_quick_access_home.defaultMessage}`,
                children: [(0, v.jsx)("img", {
                  alt: "Rockstar Games",
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg"
                }), (0, v.jsx)(r.FormattedMessage, {
                  ...Ht.nav_quick_access_home
                })]
              })
            }), (0, v.jsx)(Qt.motion.li, {
              variants: t ? i : null,
              children: (0, v.jsxs)(Gt, {
                location: l.games,
                className: [uo(), Fo.link].join(" "),
                gaText: Ht.nav_quick_access_games.defaultMessage,
                gaBreadCrumb: `${c} > ${Ht.nav_quick_access_games.defaultMessage}`,
                children: [(0, v.jsx)("img", {
                  alt: d.formatMessage(Ht.nav_quick_access_games),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg"
                }), (0, v.jsx)(r.FormattedMessage, {
                  ...Ht.nav_quick_access_games
                })]
              })
            }), (0, v.jsx)(Qt.motion.li, {
              variants: t ? i : null,
              children: (0, v.jsxs)(Gt, {
                location: l.newswire,
                className: [uo(), Fo.link].join(" "),
                gaText: Ht.nav_quick_access_newswire.defaultMessage,
                gaBreadCrumb: `${c} > ${Ht.nav_quick_access_newswire.defaultMessage}`,
                children: [(0, v.jsx)("img", {
                  alt: d.formatMessage(Ht.nav_quick_access_newswire),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg"
                }), (0, v.jsx)(r.FormattedMessage, {
                  ...Ht.nav_quick_access_newswire
                })]
              })
            })]
          })
        };
      var To = n(72733),
        Oo = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Oo.setAttributes = f(), Oo.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, Oo.domAPI = m(), Oo.insertStyleElement = p(), c()(To.A, Oo);
      const Lo = To.A && To.A.locals ? To.A.locals : void 0,
        jo = "quick-access-menu",
        Po = e => {
          let {
            site: a,
            brand: n,
            hideRockstarBrand: o,
            hideQuickAccess: i
          } = e;
          const d = (0, r.useIntl)(),
            {
              windowWidth: l
            } = (0, s.useWindowResize)(),
            [c, A] = (0, t.useState)(null),
            [m, g] = (0, t.useState)(null),
            [f, h] = z(),
            p = I(),
            u = f === jo,
            b = i ? Ht.nav_rockstargames_home : Ht.nav_rockstargames_logo,
            C = {
              domain: p.currentSite?.site === k.C.www ? "" : `https://${p.sites[k.C.www]}.rockstargames.com`,
              path: "/"
            },
            w = l < 1024,
            {
              styles: x,
              attributes: y,
              forceUpdate: B
            } = (0, or.usePopper)(c, m, {
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
          return (0, t.useEffect)((() => {
            Promise.resolve().then(B)
          }), [c, u]), (0, v.jsxs)("div", {
            className: Lo.siteTitle,
            children: [!o && (0, v.jsxs)("div", {
              className: Lo.rockstar,
              children: [(w || i) && (0, v.jsx)(Gt, {
                location: C,
                gaText: Ht.nav_rockstargames_home.defaultMessage,
                gaBreadCrumb: Ht.nav_rockstargames_home.defaultMessage,
                "aria-label": d.formatMessage(b),
                children: (0, v.jsx)(Do, {})
              }), !w && !i && (0, v.jsx)("button", {
                type: "button",
                className: Lo.quickAccessButton,
                onClick: () => h(jo),
                "aria-label": d.formatMessage(b),
                ref: A,
                children: (0, v.jsx)(Do, {})
              }), u && !i && (0, v.jsxs)(v.Fragment, {
                children: [(0, v.jsx)(_r, {
                  isOpen: u,
                  onEscapeKey: () => h(null),
                  onMouseClick: () => h(null)
                }), (0, v.jsx)("div", {
                  className: Lo.quickAccessContainer,
                  style: {
                    ...x.popper
                  },
                  ref: g,
                  ...y.popper,
                  children: (0, v.jsx)(Mo, {})
                })]
              })]
            }), n && (0, v.jsxs)(v.Fragment, {
              children: [!o && (0, v.jsx)("div", {
                className: Lo.divider
              }), (0, v.jsx)("div", {
                className: Lo.brand,
                children: (0, v.jsx)("img", {
                  className: Lo.brandLogo,
                  "data-brand": a,
                  alt: a,
                  src: n
                })
              })]
            })]
          })
        };
      var Ho = n(94595),
        Go = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Go.setAttributes = f(), Go.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, Go.domAPI = m(), Go.insertStyleElement = p(), c()(Ho.A, Go);
      const Wo = Ho.A && Ho.A.locals ? Ho.A.locals : void 0,
        Ko = e => {
          let {
            headerRef: a,
            data: n
          } = e;
          const r = (0, t.useMemo)((() => {
              const {
                currentSite: e
              } = (0, k.A)();
              if (e?.site === k.C.socialClub) return {
                zIndex: 8600
              }
            }), []),
            o = Dt(n.links);
          return (0, v.jsxs)("header", {
            ref: a,
            className: [Wo.header, Wo.fixed].join(" "),
            style: r,
            children: [(0, v.jsx)("div", {
              className: Wo.title,
              children: (0, v.jsx)(Po, {
                site: n.site,
                brand: n.brand,
                hideQuickAccess: n.hideQuickAccess || !1
              })
            }), (0, v.jsx)("div", {
              className: Wo.fluid,
              children: (0, v.jsx)(Io, {
                links: o
              })
            }), (0, v.jsx)("div", {
              className: Wo.fixed,
              children: (0, v.jsx)(jr, {
                cta: n.cta,
                includeSearch: !n.hideSearch
              })
            })]
          })
        };
      var Jo = n(58865),
        Uo = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Uo.setAttributes = f(), Uo.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, Uo.domAPI = m(), Uo.insertStyleElement = p(), c()(Jo.A, Uo);
      const Qo = Jo.A && Jo.A.locals ? Jo.A.locals : void 0,
        qo = e => {
          let {
            toggle: a,
            isMenuOpen: n
          } = e;
          const {
            track: t
          } = (0, o.useGtmTrack)();
          return (0, v.jsx)("div", {
            className: [Qo.hamburger, n ? Qo.open : ""].join(" "),
            children: (0, v.jsxs)("button", {
              onClick: () => {
                t({
                  event: n ? "nav_close" : "nav_open",
                  element_placement: "Global Nav"
                }), a?.()
              },
              title: "Open Menu",
              type: "button",
              children: [(0, v.jsx)("span", {}), (0, v.jsx)("span", {}), (0, v.jsx)("span", {})]
            })
          })
        };
      var Yo = n(84481),
        $o = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      $o.setAttributes = f(), $o.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, $o.domAPI = m(), $o.insertStyleElement = p(), c()(Yo.A, $o);
      const Vo = Yo.A && Yo.A.locals ? Yo.A.locals : void 0;
      var Xo = n(11040),
        Zo = n(19836),
        ei = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      ei.setAttributes = f(), ei.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, ei.domAPI = m(), ei.insertStyleElement = p(), c()(Zo.A, ei);
      const ai = Zo.A && Zo.A.locals ? Zo.A.locals : void 0,
        ni = e => {
          let {
            text: a
          } = e;
          const {
            isMobile: n
          } = (0, s.useWindowResize)(), o = (0, r.useIntl)(), i = I(), {
            viewAllLocation: d,
            games: l
          } = oo(o, i), [c, A] = (0, t.useState)(2.5);
          return (0, t.useEffect)((() => {
            A(n ? 2.5 : 3.5)
          }), [n]), (0, v.jsxs)("div", {
            className: ai.gamesMenuMobile,
            "data-testid": "gamesMenu",
            children: [(0, v.jsxs)("div", {
              className: ai.header,
              children: [(0, v.jsx)("h2", {
                children: a
              }), (0, v.jsxs)(Gt, {
                gaText: Ht.nav_view_all_games.defaultMessage,
                gaBreadCrumb: `Games > ${Ht.nav_view_all_games.defaultMessage}`,
                location: d,
                className: po.navigationLink,
                children: [(0, v.jsx)(r.FormattedMessage, {
                  ...Ht.nav_view_all_games
                }), (0, v.jsx)("img", {
                  src: er,
                  alt: o.formatMessage(Ht.nav_view_all_games)
                })]
              })]
            }), (0, v.jsx)(Xo.RC, {
              className: ai.slider,
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: c,
              speed: 700,
              children: l.map((e => (0, v.jsx)(Xo.qr, {
                className: ai.slide,
                children: (0, v.jsx)(ao, {
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
      var ti = n(15801),
        ri = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      ri.setAttributes = f(), ri.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, ri.domAPI = m(), ri.insertStyleElement = p(), c()(ti.A, ri);
      const oi = ti.A && ti.A.locals ? ti.A.locals : void 0,
        ii = e => {
          let {
            children: a,
            isOpen: n
          } = e;
          return (0, v.jsx)(Qt.AnimatePresence, {
            children: n && (0, v.jsx)(Qt.motion.div, {
              className: oi.subMenu,
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
              transition: qt.springOpen,
              children: a
            })
          })
        };
      var si = n(59303),
        di = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      di.setAttributes = f(), di.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, di.domAPI = m(), di.insertStyleElement = p(), c()(si.A, di);
      const li = si.A && si.A.locals ? si.A.locals : void 0;
      var ci = n(56257),
        Ai = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Ai.setAttributes = f(), Ai.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, Ai.domAPI = m(), Ai.insertStyleElement = p(), c()(ci.A, Ai);
      const mi = ci.A && ci.A.locals ? ci.A.locals : void 0,
        gi = e => {
          let {
            text: a,
            dataTestId: n,
            type: t,
            target: r,
            location: o,
            className: i,
            gaText: s,
            gaBreadCrumb: d,
            isLegacy: l,
            onClick: c,
            ...A
          } = e;
          const [m] = Jr(o ? [o] : []), g = t === Ot;
          return (0, v.jsxs)(Gt, {
            className: [uo(Boolean(m)), mi.subMenuItem, i].join(" "),
            dataTestId: n,
            location: o,
            type: t,
            target: r,
            gaText: s,
            gaBreadCrumb: d,
            onClick: c,
            isLegacy: l,
            label: a,
            ...A,
            children: [a, g && (0, v.jsx)("img", {
              alt: "",
              src: Zt
            })]
          })
        },
        fi = e => {
          let {
            text: a,
            dataTestId: n,
            navChildren: t,
            gaText: r,
            gaBreadCrumb: i,
            onClick: s,
            isSubMenuOpen: d,
            toggleMenuOpen: l,
            ...c
          } = e;
          const {
            track: A
          } = (0, o.useGtmTrack)();
          return (0, v.jsxs)("div", {
            className: li.subMenuDropdownContainer,
            ...c,
            children: [(0, v.jsxs)("button", {
              type: "button",
              "data-testid": n,
              className: [li.subMenuDropdownButton, d ? li.open : ""].join(" "),
              onClick: () => {
                A(Ft(void 0, "", r, i)), l()
              },
              children: [a, (0, v.jsx)("img", {
                src: Xt,
                alt: ""
              })]
            }), (0, v.jsx)(Qt.AnimatePresence, {
              children: d && (0, v.jsx)(Qt.motion.div, {
                className: li.subMenuDropdownItems,
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
                transition: qt.springOpen,
                children: t.map((e => (0, v.jsx)(gi, {
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
      var hi = n(27869),
        pi = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      pi.setAttributes = f(), pi.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, pi.domAPI = m(), pi.insertStyleElement = p(), c()(hi.A, pi);
      const ui = hi.A && hi.A.locals ? hi.A.locals : void 0,
        bi = e => {
          let {
            dataTestId: a,
            type: n,
            target: r,
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
          const [f, h] = (0, t.useState)(null), [p] = Jr(o ? [o] : []), u = s ? `${s} > ${m}` : m;
          if (n === Lt) return (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)($r, {
              text: A,
              dataTestId: a,
              gaText: m,
              gaBreadCrumb: u,
              onClick: () => c(),
              isOpen: l,
              ...g
            }), (0, v.jsx)(ii, {
              isOpen: l,
              children: i?.map(((e, a) => e.type === Lt ? (0, v.jsx)(fi, {
                text: e.text,
                dataTestId: e.dataTestId,
                navChildren: e.children || [],
                gaText: e.gaText,
                gaBreadCrumb: `${u} > ${e.gaText}`,
                onClick: d,
                isSubMenuOpen: f === a,
                toggleMenuOpen: () => h(f !== a ? a : null)
              }, e.gaText) : (0, v.jsx)(gi, {
                location: e.location,
                dataTestId: e.dataTestId,
                target: e.target,
                text: e.text,
                type: e.type,
                gaText: e.gaText,
                gaBreadCrumb: `${u} > ${e.gaText}`,
                onClick: d
              }, e.gaText)))
            })]
          });
          if (n === Pt) return (0, v.jsx)(ni, {
            text: A
          });
          const b = n === Ot;
          return (0, v.jsxs)(Gt, {
            location: o,
            dataTestId: a,
            type: n,
            target: r,
            gaText: m,
            gaBreadCrumb: u,
            className: [uo(Boolean(p)), p ? ui.active : ""].join(" "),
            label: A,
            ...g,
            children: [A, b && (0, v.jsx)("img", {
              alt: "",
              src: Zt
            })]
          })
        };
      var Ci = n(27230),
        vi = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      vi.setAttributes = f(), vi.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, vi.domAPI = m(), vi.insertStyleElement = p(), c()(Ci.A, vi);
      const wi = Ci.A && Ci.A.locals ? Ci.A.locals : void 0,
        xi = e => {
          let {
            links: a,
            cta: n,
            onClick: r
          } = e;
          const [o, i] = (0, t.useState)(null);
          return (0, v.jsx)("div", {
            className: wi.navigation,
            children: (0, v.jsxs)("ul", {
              children: [a.map(((e, a) => (0, v.jsx)(Qt.motion.li, {
                variants: Yt,
                transition: qt.staggerFade,
                children: (0, v.jsx)(bi, {
                  text: e.text,
                  gaText: e.gaText,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  onClick: r,
                  isOpen: o === a,
                  setIsOpen: () => i(o !== a ? a : null)
                })
              }, e.text))), n && (0, v.jsx)(Qt.motion.li, {
                className: wi.cta,
                variants: Yt,
                transition: qt.staggerFade,
                children: (0, v.jsx)(Ut, {
                  variant: n.variant,
                  dataTestId: n.dataTestId,
                  location: n.location,
                  gaEvent: n.ga,
                  gaText: n.gaText,
                  onClick: r,
                  children: n.text
                })
              })]
            })
          })
        },
        yi = e => {
          let {
            headerRef: a,
            data: n
          } = e;
          const [r, o] = (0, t.useState)(!1), [i, d] = (0, t.useState)(!1), {
            isSearchPage: l,
            forceSearch: c
          } = D(), A = E(), {
            pathname: m,
            hash: g,
            search: f
          } = A, h = N(), {
            currentSite: p
          } = I(), u = Dt(n.links), {
            setBodyIsLocked: b
          } = (0, s.useBodyScrollable)("HeaderMobile"), C = {
            show: {
              height: "auto",
              paddingBottom: r && n.brand ? "var(--global-navigation-height)" : "",
              transition: {
                ...qt.hamburgerOpen,
                staggerChildren: .05
              }
            },
            hidden: {
              height: 0,
              paddingBottom: 0,
              transition: qt.hamburgerClose
            }
          };
          return (0, t.useEffect)((() => {
            b(!!r)
          }), [r]), (0, t.useEffect)((() => {
            d(!1), o(!1)
          }), [m, g, f]), (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsxs)("header", {
              ref: a,
              className: Vo.header,
              children: [(0, v.jsx)(qo, {
                toggle: () => {
                  o(!r), d(!1)
                },
                isMenuOpen: r
              }), (0, v.jsx)("div", {
                className: Vo.title,
                children: (0, v.jsx)(Po, {
                  site: n.site,
                  brand: n.brand,
                  hideRockstarBrand: !!n.brand
                })
              }), (0, v.jsx)("div", {
                children: (0, v.jsx)(jr, {
                  includeSearch: !1,
                  isMobile: !0
                })
              })]
            }), (0, v.jsx)(Qt.AnimatePresence, {
              children: (r || i || l && p?.site === k.C.www) && (0, v.jsxs)(v.Fragment, {
                children: [(0, v.jsxs)(Qt.motion.nav, {
                  className: [Vo.nav, r && n.brand ? Vo.paddingBottom : "", r ? Vo.fullMenuOpen : ""].join(" "),
                  variants: C,
                  animate: "show",
                  initial: "hidden",
                  exit: "hidden",
                  children: [!n.hideSearch && (0, v.jsx)(Mr, {
                    isSearchOpen: i || l && c,
                    setIsSearchOpen: d
                  }), r && (0, v.jsx)("div", {
                    className: [Vo.navContainer, i ? Vo.searchOpen : ""].join(" "),
                    children: (0, v.jsx)(xi, {
                      links: u,
                      cta: n.cta,
                      onClick: () => {
                        o(!1), d(!1)
                      }
                    })
                  })]
                }), r && n.brand && !n.hideQuickAccess && (0, v.jsx)(Mo, {}), !l && (0, v.jsx)(Qt.motion.div, {
                  className: Vo.overlay,
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  exit: {
                    opacity: 0,
                    transition: qt.hamburgerClose
                  },
                  transition: qt.hamburgerOpen
                })]
              })
            }), (0, v.jsx)(Et.Menu, {
              location: A,
              onNavigate: h
            })]
          })
        };
      n(79952);
      var ki = n(48886),
        Bi = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Bi.setAttributes = f(), Bi.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, Bi.domAPI = m(), Bi.insertStyleElement = p(), c()(ki.A, Bi);
      const _i = ki.A && ki.A.locals ? ki.A.locals : void 0,
        Ii = () => {
          const e = (0, t.useRef)(null),
            a = "__spatialNavigation__" in window ? window.__spatialNavigation__ : null;
          return (0, t.useEffect)((() => {
            a && a.enableExperimentalAPIs(!0)
          }), []), (0, v.jsx)("button", {
            ref: e,
            className: _i.accessibility,
            onClick: () => {
              const n = document.querySelector("header");
              if (a && n) {
                const t = a.findCandidates(n, "down", {
                  mode: "all"
                });
                if (t !== n) {
                  const a = t.filter((a => {
                    if (n.contains(a) || e.current === a) return !1;
                    const t = a.getAttribute("tabindex"),
                      r = null === t || parseInt(t, 10) >= 0,
                      o = null !== a.offsetParent && "hidden" !== getComputedStyle(a).visibility;
                    return r && o
                  }));
                  a.length > 0 && a[0].focus()
                }
              }
            },
            children: (0, v.jsx)(r.FormattedMessage, {
              ...Ht.accessibility_skip_button
            })
          })
        };
      var Si = n(13527),
        zi = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      zi.setAttributes = f(), zi.insert = e => {
        const a = e.dataset.shadowtarget;
        a && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [a]: e
          }
        })
      }, zi.domAPI = m(), zi.insertStyleElement = p(), c()(Si.A, zi);
      const Ri = Si.A && Si.A.locals ? Si.A.locals : void 0;
      F.gsap.registerPlugin(Ln, mt, Rt);
      const Di = () => {
          const e = (0, t.useRef)(null),
            a = (0, s.useScroll)(),
            n = a?.freezeUserShouldSeeMore,
            {
              windowWidth: r
            } = (0, s.useWindowResize)(),
            o = (() => {
              const e = (0, t.useContext)(B);
              if (void 0 === e) throw new Error("useNavigationData must be used within a Navigation Provider");
              return e.navigationData
            })(),
            {
              isSearchPage: i,
              forceSearch: d
            } = D(),
            l = r < 1024,
            [c, A] = (0, t.useState)(!1),
            m = (0, t.useRef)(null),
            g = (0, t.useRef)(null);
          (0, t.useEffect)((() => {
            A(!0)
          }), []);
          const f = (0, t.useCallback)((a => {
            if (n) return;
            const t = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
            a.direction === m?.current || t ? t && a?.animation?.pause() : -1 === a.direction ? a.animation?.reverse() : a.animation?.play();
            const r = "data-show-more-content";
            1 === a.direction ? (document.body.setAttribute(r, ""), e?.current?.setAttribute(r, "")) : (document.body.removeAttribute(r), e?.current?.removeAttribute(r)), m.current = a.direction
          }), [n]);
          (0, t.useEffect)((() => {
            const e = F.gsap.context((() => {
              g?.current && F.gsap.set(g.current, {
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
          const h = (0, t.useMemo)((() => l ? (0, v.jsx)(yi, {
            headerRef: g,
            data: o
          }) : (0, v.jsx)(Ko, {
            headerRef: g,
            data: o
          })), [o, l]);
          return (0, v.jsxs)("div", {
            className: Ri.globalNavigationRoot,
            "data-header-initialized": c,
            ref: e,
            children: [(0, v.jsx)(Ii, {}), (0, v.jsx)("div", {
              className: [Ri.globalNavigationSpacer, i && d ? Ri.globalNavigationSearchSpacer : ""].join(" ")
            }), h]
          })
        },
        {
          graphEnv: Ei
        } = (0, s.getConfigForDomain)(),
        Ni = e => {
          let {
            navData: a,
            searchConfig: n,
            routeOptions: t,
            location: r,
            onNavigate: o
          } = e;
          return (0, v.jsx)(i.A, {
            packageName: "@rockstargames/modules-core-header",
            children: (0, v.jsx)(s.ResizeProvider, {
              children: (0, v.jsx)(d.UN, {
                children: (0, v.jsx)(_, {
                  navData: a,
                  location: r,
                  onNavigate: o,
                  searchConfig: n,
                  routeOptions: t,
                  children: (0, v.jsx)(Di, {})
                })
              })
            })
          })
        },
        Fi = (0, s.withRockstarGraph)((e => {
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
          }] = (0, r.getLocale)(), g = (0, t.useMemo)((() => x.w[m] || []), [m]);
          return (0, v.jsx)(i.A, {
            packageName: "@rockstargames/modules-core-header",
            loadFonts: ["HelveticaNowText", "HelveticaNowDisplayBold", "Chalet", ...g],
            children: (0, v.jsx)(s.ResizeProvider, {
              children: (0, v.jsx)(d.iR, {
                privateToken: A,
                children: (0, v.jsx)(d.UN, {
                  children: (0, v.jsx)(_, {
                    navData: a,
                    location: l,
                    onNavigate: c,
                    searchConfig: n,
                    routeOptions: o,
                    children: (0, v.jsx)(Di, {})
                  })
                })
              })
            })
          })
        }), {
          env: Ei
        }),
        Mi = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(t) {
            return (0, v.jsx)(w, {
              header: a,
              hidden: n,
              children: (0, v.jsx)(e, {
                ...t
              })
            })
          }
        }((0, r.withIntl)((e => {
          let {
            ...a
          } = e;
          const {
            hasProvider: n
          } = (0, o.useRockstarUser)();
          return n ? (0, v.jsx)(Ni, {
            ...a
          }) : (0, v.jsx)(Fi, {
            ...a
          })
        }), y), null, !0)
    },
    39460: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerd5c408a8b618087ef4bb452f96526b2b{grid-gap:1rem;align-content:center;background:#000;display:grid;grid-auto-rows:max-content;height:100%;justify-items:center;padding:.5rem}.rockstargames-modules-core-headerd5c408a8b618087ef4bb452f96526b2b,.rockstargames-modules-core-headerd5c408a8b618087ef4bb452f96526b2b h1{color:#fff}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/error/ErrorBoundarySimple/index.less"],
        names: [],
        mappings: "AAAA,mEAQI,aAAA,CAFA,oBAAA,CAHA,eAAA,CAEA,YAAA,CAIA,0BAAA,CARA,WAAA,CAMA,oBAAA,CALA,aAQJ,CAVA,yIAII,UASJ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headere0e27fbcd7bb62793ad72aa4562e8b53{background:#fff;border:1px solid #fff;border-radius:4px;box-shadow:none;cursor:pointer;font-weight:700;left:0;letter-spacing:0;margin:var(--rem-1);opacity:0;padding:var(--rem-05);pointer-events:none;position:absolute;text-transform:uppercase;top:calc(-100% + var(--rem-2));transition:transform .3s ease-in-out,opacity .3s ease-in-out;z-index:999}.rockstargames-modules-core-headere0e27fbcd7bb62793ad72aa4562e8b53:focus{border:1px solid #fff;color:#000;left:0;opacity:1;pointer-events:auto;top:0;transform:translateY(calc(100% - var(--rem-2)));z-index:9999}", "", {
        version: 3,
        sources: ["webpack://./src/components/AccessibilityButton/index.less"],
        names: [],
        mappings: "AAAA,mEACI,eAAA,CACA,qBAAA,CACA,iBAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CASA,MAAA,CARA,gBAAA,CAEA,mBAAA,CACA,SAAA,CAFA,qBAAA,CAGA,mBAAA,CAEA,iBAAA,CAKA,wBAAA,CAJA,8BAAA,CAKA,4DAAA,CAHA,WAEJ,CAKI,yEAOI,qBAAA,CADA,UAAA,CAHA,MAAA,CAEA,SAAA,CAGA,mBAAA,CANA,KAAA,CADA,+CAAA,CAGA,YACR",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerb5fce2c3384850553a25768f9fdbc74c{gap:var(--rem-15);justify-content:flex-end}.rockstargames-modules-core-headerb5fce2c3384850553a25768f9fdbc74c,.rockstargames-modules-core-headerb5fce2c3384850553a25768f9fdbc74c>div{align-items:center;display:flex}.rockstargames-modules-core-headerb5fce2c3384850553a25768f9fdbc74c>div{height:var(--global-navigation-height)}", "", {
        version: 3,
        sources: ["webpack://./src/components/Actions/actions.less"],
        names: [],
        mappings: "AAAA,mEAII,iBAAA,CAFA,wBAGJ,CACI,0IAHA,kBAAA,CAFA,YASJ,CAJI,uEAGI,sCACR",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerddaf896d4deca83f6d4a43dde2449ed6{display:block;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:999}.rockstargames-modules-core-headere39052a22cbfec8136c7f57d9e910820{height:100vh;left:0;position:absolute;top:var(--global-navigation-height);width:100%}.rockstargames-modules-core-headerdd3818dff0e6f7bd2777880270cbdabb{background:var(--black-65);filter:blur(5px)}", "", {
        version: 3,
        sources: ["webpack://./src/components/BackgroundOverlay/index.less"],
        names: [],
        mappings: "AAAA,mEACI,aAAA,CAMA,YAAA,CAFA,MAAA,CAHA,cAAA,CAEA,KAAA,CAEA,WAAA,CAHA,WAKJ,CAEA,mEAEI,YAAA,CACA,MAAA,CAFA,iBAAA,CAGA,mCAAA,CACA,UAAJ,CAGA,mEACI,0BAAA,CACA,gBADJ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770{align-items:center;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);background:var(--black-65);border:1px solid var(--white-100);border-radius:var(--border-radius-sm);color:var(--white-100);display:flex;font-family:var(--font-family-body);font-size:calc(var(--base-rem-size) * .75);font-style:normal;font-weight:700;gap:10px;justify-content:center;line-height:100%;padding:var(--rem-05) var(--rem-075);text-align:center;text-decoration:none;text-transform:uppercase;transition:all .3s ease-in;white-space:nowrap}.rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770:hover{background-color:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770.rockstargames-modules-core-headerd468a02858ad85269a394854bce5e316{background-color:#fcaf17;border:1px solid transparent;color:var(--black-200)}.rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770.rockstargames-modules-core-headerd468a02858ad85269a394854bce5e316:hover{background-color:#e19808;border:1px solid #e19808}@media screen and (max-width:1023px){.rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770{font-size:var(--base-rem-size);padding:var(--base-rem-size)}}", "", {
        version: 3,
        sources: ["webpack://./src/components/CallToAction/index.less"],
        names: [],
        mappings: "AAAA,mEAmBI,kBAAA,CAOA,kCAAA,CAAA,0BAAA,CADA,0BAAA,CADA,iCAAA,CADA,qCAAA,CAlBA,sBAAA,CAWA,YAAA,CATA,mCAAA,CACA,0CAAA,CACA,iBAAA,CAEA,eAAA,CASA,QAAA,CAFA,sBAAA,CAJA,gBAAA,CAGA,oCAAA,CAXA,iBAAA,CAOA,oBAAA,CADA,wBAAA,CASA,0BAAA,CAXA,kBAWJ,CAOI,yEAEI,iCAAA,CADA,sBAJR,CAQI,qIAEI,wBAAA,CACA,4BAAA,CAFA,sBAJR,CAQQ,2IACI,wBAAA,CACA,wBANZ,CAUI,qCAAA,mEAEI,8BAAA,CADA,4BANN,CACF",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7{border:1px solid var(--border-color);border-radius:4px;box-shadow:0 0 40px -25px transparent;flex-grow:1;overflow:hidden;transition:transform .3s cubic-bezier(0,0,.5,1),box-shadow .3s cubic-bezier(0,0,.5,1)}.rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7:hover{box-shadow:0 30px 40px -25px #000;transform:scale(1.025)}@media screen and (min-width:1024px){.rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7{width:20%}}.rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7 a{aspect-ratio:.81/1;display:block}.rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7 img{display:block;width:100%}", "", {
        version: 3,
        sources: ["webpack://./src/components/GamesCard/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,mEAEI,oCAAA,CACA,iBAAA,CCsqBA,qCAAA,CDxqBA,WAAA,CAGA,eAAA,CCkqBA,qFDloBJ,CCuoBI,yEAEI,iCAAA,CADA,sBDpoBR,CAjCI,qCAAA,mEACI,SAoCN,CACF,CA7CA,qEAaQ,kBAAA,CADA,aAqCR,CAjDA,uEAkBQ,aAAA,CADA,UAoCR",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerd434f9fba21c660252bfc301b9e76c24{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-headerd434f9fba21c660252bfc301b9e76c24 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-headerd434f9fba21c660252bfc301b9e76c24:focus,.rockstargames-modules-core-headerd434f9fba21c660252bfc301b9e76c24:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-headerd434f9fba21c660252bfc301b9e76c24.rockstargames-modules-core-headerb73f53fe62cee8016c25e0fbde20b58b{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-headerd434f9fba21c660252bfc301b9e76c24.rockstargames-modules-core-headerb73f53fe62cee8016c25e0fbde20b58b img{filter:invert()}.rockstargames-modules-core-headerc44e1e859a7c882c94e4ab6659292df1{border-bottom:1px solid var(--blacks-border-color);flex-direction:column;padding:var(--rem-3) 0;z-index:99}.rockstargames-modules-core-headerc44e1e859a7c882c94e4ab6659292df1,.rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31{align-items:center;display:flex;width:100%}.rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31{justify-content:space-between;margin-bottom:var(--rem-1);max-width:1920px;padding:0 var(--rem-4)}.rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31 .rockstargames-modules-core-headerdf107c2f64cafbee316afb5bf5d6c994{font-family:var(--font-family-h);font-size:var(--rem-15)}.rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31 .rockstargames-modules-core-headera9c20e94d8cd00159778729b0c3eb095{align-items:center;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;line-height:100%;text-transform:uppercase}.rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31 .rockstargames-modules-core-headera9c20e94d8cd00159778729b0c3eb095 img{margin-left:var(--grid-gap-xxs);width:ar(--rem-1)}.rockstargames-modules-core-headerca5189f6c9b4274473d2cf9a8ace7bb0{align-content:flex-start;align-items:flex-start;display:flex;gap:var(--grid-gap-sm);max-width:1920px;padding:0 var(--rem-4);width:100%}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/GamesMenu/index.less"],
        names: [],
        mappings: "AA2QA,mEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,uEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,kJAEI,gCAAA,CACA,YC/OR,CDkPI,qIAEI,2BAAA,CADA,sBC/OR,CD8OI,yIAKQ,eChPZ,CAjEA,mEAOI,kDAAA,CAEA,qBAAA,CARA,sBAAA,CACA,UAwEJ,CA5DA,sIAJI,kBAAA,CAFA,YAAA,CAGA,UAwEJ,CArEA,mEAEI,6BAAA,CAEA,0BAAA,CAGA,gBAAA,CAFA,sBAgEJ,CArEA,sIAUQ,gCAAA,CACA,uBA8DR,CAzEA,sIAsBQ,kBAAA,CADA,YAAA,CANA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CACA,wBAgER,CApFA,0IA0BY,+BAAA,CADA,iBA+DZ,CAzDA,mEAGI,wBAAA,CADA,sBAAA,CADA,YAAA,CAGA,sBAAA,CAEA,gBAAA,CADA,sBAAA,CAEA,UA2DJ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d{padding:0}.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar{background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1));border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none}.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar.swiper-scrollbar-disabled,.rockstargames-modules-core-headerdc6e1944afaf5126264e2bdf4feda399>.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar{display:none!important}.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar.swiper-scrollbar-horizontal,.rockstargames-modules-core-headerce1abe15b9a826da664388a3a0feadf2>.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar{bottom:var(--swiper-scrollbar-bottom,4px);height:var(--swiper-scrollbar-size,4px);left:var(--swiper-scrollbar-sides-offset,1%);position:absolute;top:var(--swiper-scrollbar-top,auto);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));z-index:50}.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar.swiper-scrollbar-vertical,.rockstargames-modules-core-headercd287b3bb2e9afbfb9aeda9f6822380f>.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar{height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));left:var(--swiper-scrollbar-left,auto);position:absolute;right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);width:var(--swiper-scrollbar-size,4px);z-index:50}.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar-drag{background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);height:100%;left:0;position:relative;top:0;width:100%}.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar-cursor-drag{cursor:move}.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper-scrollbar-lock{display:none}.rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d .swiper{padding:0 var(--spacing-md) var(--spacing-sm)}.rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764{align-items:baseline;display:flex;justify-content:space-between;padding:var(--spacing-sm) var(--spacing-md)}.rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764 h2{font-family:var(--font-family-body);font-size:var(--nav-link-size);margin:0}.rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764 a{align-items:center;color:inherit;display:flex;font-size:calc(var(--base-rem-size) * .75);font-weight:700;letter-spacing:0;line-height:100%;padding:0;text-decoration:none;text-transform:uppercase}.rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764 a img{margin-left:calc(var(--base-rem-size) * .25);width:var(--base-rem-size)}.rockstargames-modules-core-headerc916087398dcb2ac0d81fc2541342f98 .swiper-wrapper{box-sizing:initial;display:flex;height:100%;position:relative;transition-duration:0ms;transition-property:transform;width:100%;z-index:1}.rockstargames-modules-core-headerfb650180ffb26ef3af920b51a6e292b1{flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}", "", {
        version: 3,
        sources: ["webpack://./src/components/GamesMenuMobile/index.less", "webpack://./../../../../node_modules/swiper/modules/scrollbar.less"],
        names: [],
        mappings: "AAAA,mEACI,SACJ,CAFA,qFCkBE,0DAAA,CAJA,wDAAA,CACA,iBAAA,CAEA,iBDKF,CCHE,uQAEE,sBDKJ,CCHE,yQAIE,yCAAA,CAGA,uCAAA,CAJA,4CAAA,CADA,iBAAA,CAGA,oCAAA,CAGA,+DAAA,CAFA,UDOJ,CCHE,uQAQE,gEAAA,CALA,sCAAA,CADA,iBAAA,CAEA,uCAAA,CACA,2CAAA,CAEA,sCAAA,CADA,UDOJ,CA9CA,0FCgDE,+DAAA,CACA,wDAAA,CAJA,WAAA,CAKA,MAAA,CAHA,iBAAA,CAIA,KAAA,CALA,UDSF,CAvDA,iGCsDE,WDIF,CA1DA,0FCyDE,YDIF,CA7DA,2EAOY,6CAyDZ,CApDA,mEAII,oBAAA,CAFA,YAAA,CACA,6BAAA,CAFA,2CAyDJ,CA1DA,sEAQQ,mCAAA,CADA,8BAAA,CAEA,QAsDR,CA/DA,qEAiBQ,kBAAA,CAJA,aAAA,CAGA,YAAA,CAFA,0CAAA,CAMA,eAAA,CADA,gBAAA,CADA,gBAAA,CAIA,SAAA,CADA,oBAAA,CANA,wBA4DR,CA3EA,yEA0BY,4CAAA,CADA,0BAsDZ,CAhDA,mFAEQ,kBAAA,CACA,YAAA,CACA,WAAA,CACA,iBAAA,CAIA,uBAAA,CAHA,6BAAA,CACA,UAAA,CACA,SAkDR,CA7CA,mEACI,aAAA,CACA,WAAA,CACA,iBAAA,CACA,6BAAA,CACA,UA+CJ",
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
        A: () => La
      });
      var t = n(42587),
        r = n.n(t),
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
        b = new URL(n(29951), n.b),
        C = new URL(n(28255), n.b),
        v = new URL(n(47594), n.b),
        w = new URL(n(54414), n.b),
        x = new URL(n(5676), n.b),
        y = new URL(n(28326), n.b),
        k = new URL(n(50225), n.b),
        B = new URL(n(32791), n.b),
        _ = new URL(n(92973), n.b),
        I = new URL(n(25293), n.b),
        S = new URL(n(46962), n.b),
        z = new URL(n(66312), n.b),
        R = new URL(n(44934), n.b),
        D = new URL(n(66562), n.b),
        E = new URL(n(81117), n.b),
        N = new URL(n(62051), n.b),
        F = new URL(n(68577), n.b),
        M = new URL(n(9133), n.b),
        T = new URL(n(93458), n.b),
        O = new URL(n(77032), n.b),
        L = new URL(n(44486), n.b),
        j = new URL(n(89307), n.b),
        P = new URL(n(58853), n.b),
        H = new URL(n(46010), n.b),
        G = new URL(n(26739), n.b),
        W = new URL(n(68145), n.b),
        K = new URL(n(59792), n.b),
        J = new URL(n(79122), n.b),
        U = new URL(n(50228), n.b),
        Q = new URL(n(304), n.b),
        q = new URL(n(79539), n.b),
        Y = new URL(n(61494), n.b),
        $ = new URL(n(313), n.b),
        V = new URL(n(94904), n.b),
        X = new URL(n(49027), n.b),
        Z = new URL(n(83493), n.b),
        ee = new URL(n(53037), n.b),
        ae = new URL(n(93803), n.b),
        ne = new URL(n(69400), n.b),
        te = new URL(n(44840), n.b),
        re = new URL(n(28168), n.b),
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
        be = new URL(n(11917), n.b),
        Ce = new URL(n(88622), n.b),
        ve = new URL(n(93262), n.b),
        we = new URL(n(52086), n.b),
        xe = new URL(n(66894), n.b),
        ye = i()(r()),
        ke = d()(l),
        Be = d()(c),
        _e = d()(A),
        Ie = d()(m),
        Se = d()(g),
        ze = d()(f),
        Re = d()(h),
        De = d()(p),
        Ee = d()(u),
        Ne = d()(b),
        Fe = d()(C),
        Me = d()(v),
        Te = d()(w),
        Oe = d()(x),
        Le = d()(y),
        je = d()(k),
        Pe = d()(B),
        He = d()(_),
        Ge = d()(I),
        We = d()(S),
        Ke = d()(z),
        Je = d()(R),
        Ue = d()(D),
        Qe = d()(E),
        qe = d()(N),
        Ye = d()(F),
        $e = d()(M),
        Ve = d()(T),
        Xe = d()(O),
        Ze = d()(L),
        ea = d()(j),
        aa = d()(P),
        na = d()(H),
        ta = d()(G),
        ra = d()(W),
        oa = d()(K),
        ia = d()(J),
        sa = d()(U),
        da = d()(Q),
        la = d()(q),
        ca = d()(Y),
        Aa = d()($),
        ma = d()(V),
        ga = d()(X),
        fa = d()(Z),
        ha = d()(ee),
        pa = d()(ae),
        ua = d()(ne),
        ba = d()(te),
        Ca = d()(re),
        va = d()(oe),
        wa = d()(ie),
        xa = d()(se),
        ya = d()(de),
        ka = d()(le),
        Ba = d()(ce),
        _a = d()(Ae),
        Ia = d()(me),
        Sa = d()(ge),
        za = d()(fe),
        Ra = d()(he),
        Da = d()(pe),
        Ea = d()(ue),
        Na = d()(be),
        Fa = d()(Ce),
        Ma = d()(ve),
        Ta = d()(we),
        Oa = d()(xe);
      ye.push([e.id, `.rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e:focus,.rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e.rockstargames-modules-core-headere3891b1e9b084d58f6e1afb5fa14ab12{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e.rockstargames-modules-core-headere3891b1e9b084d58f6e1afb5fa14ab12 img{filter:invert()}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--text-section-max-width:640px;--base-pixel-size:12px;--base-rem-size:0.75rem;--half-rem-size:calc(var(--base-rem-size) / 2);--twice-rem-size:calc(var(--base-rem-size) * 2);--section-margin-bottom:calc(var(--base-rem-size) * 4);--header-height:80px;--breadcrumbs-height:calc(var(--base-pixel-size) * 3.5);--max-width:1920px;--standard-color:#fcaf17;--color-h:#fff;--body-color:#e8e8e8;--background-color:#0b0b0b;--card-background-color:#000;--border-color:#282828;--privacy-banner-height:0px;--game-header-height:50px;--standard-grid-gap:calc(var(--base-rem-size) * 2);--image-margin-bottom:inherit;--image-rounding:0px;--image-rounding-static:16px;--image-rounding-static-sm:8px;--image-rounding-static-xs:4px;--grid-gap-static-xs:0.5rem;--grid-gap-static-sm:1rem;--grid-gap-static-md:2rem;--grid-gap-static-lg:4rem;--grid-gap-static-xl:8rem;--max-width-static:640px;--max-width-static-md:1088px;--max-width-static-lg:1920px;--max-width-static-xl:2560px;--margin-static:0 0 2rem;--h2-margin:2rem 0 0 0;--padding-sides:var(--grid-gap-static-lg);--padding-top-bottom:var(--padding-sides);--padding-static:var(--padding-sides);--font-family-std:var(--rsg-font-family-std);--font-family-h:var(--rsg-font-family-h);--font-family-h-halloween:nightmar;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;--font-family-body:"Chalet";--font-family-h:"ChaletComprime";--font-weight-regular:400;--font-weight-bold:700;--letter-spacing-body:0;--letter-spacing-h:0;--line-height-sm:1;--line-height-md:1.1;--line-height-lg:1.6;--black-200:#000;--black-100:#121212;--black-65:hsla(0,0%,7%,.65);--black-40:hsla(0,0%,7%,.4);--black-15:hsla(0,0%,7%,.15);--text-dark:#2d2d2d;--border-color:#2d2d2d;--white-100:#fff;--white-65:hsla(0,0%,100%,.65);--white-40:hsla(0,0%,100%,.4);--white-15:hsla(0,0%,100%,.15);--focusring-blue:blue;--red:#e03232;--circoloco-red:#eb1818;--rockstar-gold:#fcaf17;--playstation-blue:#00439c;--microsoft-green:#387a26;--pc-legacy:#b2b2b2;--pc-enhanced:#beb279;--color-h:var(--white-100);--color-body:var(--text-light);--green-light:#c1f7bd;--green-dark:#81da85;--scroll-thumb-color:#7d7d7d;--scroll-track-color:transparent;--max-width-sm:640px;--max-width-md:1088px;--max-width-lg:1920px;--max-width-xl:2560px;--spacing-xxs:0.25rem;--spacing-xs:0.5rem;--spacing-sm:1rem;--spacing-md:2rem;--spacing-lg:4rem;--spacing-xl:8rem;--grid-gap-xxs:var(--spacing-xxs);--grid-gap-xs:var(--spacing-xs);--grid-gap-sm:var(--spacing-sm);--grid-gap-md:var(--spacing-md);--grid-gap-lg:var(--spacing-lg);--grid-gap-xl:var(--spacing-xl);--padding-xxs:var(--spacing-xxs);--padding-xs:var(--spacing-xs);--padding-sm:var(--spacing-sm);--padding-md:var(--spacing-md);--padding-lg:var(--spacing-lg);--padding-xl:var(--spacing-xl);--margin-xxs:var(--spacing-xxs);--margin-xs:var(--spacing-xs);--margin-sm:var(--spacing-sm);--margin-md:var(--spacing-md);--margin-lg:var(--spacing-lg);--margin-xl:var(--spacing-xl);--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--gradient-overlay-bottom:linear-gradient(180.08deg,transparent 25%,rgba(0,0,0,.5) 65%,rgba(0,0,0,.6));--gradient-overlay-right:linear-gradient(270deg,rgba(0,0,0,.9),transparent);--promo-banner-z-index:11500;--font-family-h:HelveticaNowDisplayBold;--font-family-body:HelveticaNowText;--blacks-border-color:#282828;--text-light:#e8e8e8;--rem-025:calc(var(--base-rem-size) * 0.25);--rem-05:calc(var(--base-rem-size) * 0.5);--rem-075:calc(var(--base-rem-size) * 0.75);--rem-1:var(--base-rem-size);--rem-125:calc(var(--base-rem-size) * 1.25);--rem-15:calc(var(--base-rem-size) * 1.5);--rem-2:calc(var(--base-rem-size) * 2);--rem-3:calc(var(--base-rem-size) * 3);--rem-4:calc(var(--base-rem-size) * 4);--rem-6:calc(var(--base-rem-size) * 6);--rem-8:calc(var(--base-rem-size) * 8);--spacing-xxs:var(--rem-025);--spacing-xs:var(--rem-05);--spacing-sm:var(--rem-1);--spacing-md:var(--rem-2);--spacing-lg:var(--rem-4);--spacing-xl:var(--rem-8);--global-navigation-box-shadow:0px 8px 20px 0px rgba(0,0,0,.7);--global-navigation-height:80px;--base-rem-size:var(--base-rem-size);--mobile-nav-padding-sides:32px;--mobile-nav-item-padding:20px var(--mobile-nav-padding-sides);--nav-icon-size:var(--rem-1);--nav-link-size:calc(var(--base-rem-size) * 0.75);--sub-nav-indent:var(--spacing-sm);--sub-nav-min-width:240px;background-color:var(--background-color,transparent);font-family:var(--font-family-std,HelveticaNowText);font-family:var(--font-family-body);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (max-width:767px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--grid-gap-static-lg:2rem;--grid-gap-static-xl:4rem}}@media (min-width:2560px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--max-width-static-md:1440px}}@font-face{font-family:HelveticaNowText;font-style:italic;font-weight:400;src:url(${ke}) format("woff")}@font-face{font-family:HelveticaNowText;font-style:normal;font-weight:700;src:url(${Be}) format("woff")}@font-face{font-family:HelveticaNowDisplayMedium;font-style:normal;font-weight:400;src:url(${_e}) format("woff")}@font-face{font-family:HelveticaNeueLTW05;font-style:normal;font-weight:400;src:url(${Ie}) format("woff")}@font-face{font-family:HelveticaNeueLTW05;font-style:italic;font-weight:400;src:url(${Se}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:normal;font-weight:400;src:url(${ze}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:italic;font-weight:400;src:url(${Re}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:normal;font-weight:700;src:url(${De}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:italic;font-weight:700;src:url(${Ee}) format("woff")}@font-face{font-family:HelveticaNeueLTW07-85Heavy;font-style:normal;font-weight:700;src:url(${Ne}) format("woff")}@font-face{font-family:NeueHelveticaPaneuropean;font-style:normal;font-weight:400;src:url(${Fe}) format("woff")}@font-face{font-family:SackersGothicW01-Square;font-style:normal;font-weight:400;src:url(${Me}) format("woff")}@font-face{font-family:Cabrito-Nordem;font-style:normal;font-weight:400;src:url(${Te}) format("woff")}@font-face{font-family:Droid-Serif-Pro;font-style:normal;font-weight:400;src:url(${Oe}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:400;src:url(${Le}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:500;src:url(${je}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:700;src:url(${Pe}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:900;src:url(${He}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:400;src:url(${Ge}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:500;src:url(${We}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:700;src:url(${Ke}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:900;src:url(${Je}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:400;src:url(${Ue}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:500;src:url(${Qe}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:700;src:url(${qe}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:900;src:url(${Ye}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:400;src:url(${$e}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:500;src:url(${Ve}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:700;src:url(${Xe}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:900;src:url(${Ze}) format("woff")}@font-face{font-family:NotoSerifJP;font-style:normal;font-weight:700;src:url(${ea}) format("woff")}@font-face{font-family:NotoSerifJP;font-style:normal;font-weight:900;src:url(${aa}) format("woff")}@font-face{font-family:NotoSerifKR;font-style:normal;font-weight:700;src:url(${na}) format("woff")}@font-face{font-family:NotoSerifKR;font-style:normal;font-weight:900;src:url(${na}) format("woff")}@font-face{font-family:NotoSerifSC;font-style:normal;font-weight:700;src:url(${ta}) format("woff")}@font-face{font-family:NotoSerifSC;font-style:normal;font-weight:900;src:url(${ra}) format("woff")}@font-face{font-family:NotoSerifTC;font-style:normal;font-weight:700;src:url(${oa}) format("woff")}@font-face{font-family:NotoSerifTC;font-style:normal;font-weight:900;src:url(${ia}) format("woff")}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:400;src:url(${sa}) format("woff")}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:700;src:url(${da}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:400;src:url(${la}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:700;src:url(${ca}) format("woff")}@font-face{font-family:Pricedown;font-style:normal;font-weight:700;src:url(${Aa}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:400;src:url(${ma}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:700;src:url(${ga}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:900;src:url(${fa}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:400;src:url(${ha}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:400;src:url(${pa}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:700;src:url(${ua}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:700;src:url(${ba}) format("woff")}@font-face{font-family:CorporateW05;font-style:normal;font-weight:400;src:url(${Ca}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:400;src:url(${va}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:700;src:url(${wa}) format("woff")}@font-face{font-family:EurostileNextW05;font-style:normal;font-weight:700;src:url(${xa}) format("woff")}@font-face{font-family:Diploma;font-style:normal;font-weight:400;src:url(${ya}) format("woff")}@font-face{font-family:BrushScriptMT;font-style:normal;font-weight:400;src:url(${ka}) format("woff")}@font-face{font-family:BankGothicBT;font-style:normal;font-weight:400;src:url(${Ba}) format("woff")}@font-face{font-family:MeltdownRegular;font-style:normal;font-weight:400;src:url(${_a}) format("woff")}@font-face{font-family:SharkSnackRegular;font-style:normal;font-weight:400;src:url(${Ia}) format("woff")}@font-face{font-family:GTAArtDeco;font-style:normal;font-weight:400;src:url(${Sa}) format("woff")}@font-face{font-family:GTAArtDeco;font-style:normal;font-weight:500;src:url(${za}) format("woff")}@font-face{font-family:RDRLino-Regular;font-style:normal;font-weight:400;src:url(${Ra}) format("woff")}@font-face{font-family:HapnaSlabSerif;font-style:normal;font-weight:400;src:url(${Da}) format("woff")}@font-face{font-family:HapnaSlabSerif;font-style:normal;font-weight:700;src:url(${Ea}) format("woff")}@font-face{font-family:nightmar;font-style:normal;font-weight:100;src:url(${Na}) format("woff")}@font-face{font-family:RDRCatalogueBold;font-style:normal;font-weight:700;src:url(${Fa}) format("woff")}@font-face{font-family:RDRUltraHeadline;font-style:normal;font-weight:400;src:url(${Ma}) format("woff")}@media (min-width:0px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--root-font-size:16}}@media (min-width:768px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--root-font-size:18}}@media (min-width:1024px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--root-font-size:20}}@media (min-width:1920px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--root-font-size:22}}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b *{box-sizing:border-box}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b a{color:inherit;text-decoration:none}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b figure,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h2,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h4,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h5,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h6,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b p{margin:0}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b caption,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b figcaption{--padding-dynamic:var(--padding-sides);--padding-dynamic-tb:initial;color:var(--body-color);display:block;font-family:var(--font-family-std);font-size:var(--font-size-2);font-style:italic;margin:var(--grid-gap-static-sm) auto 0;padding:var(--padding-t,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0) var(--padding-b,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0);text-align:center}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b caption p,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b figcaption p{display:block}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ru_ru){--font-family-h-halloween:RDRLino-Regular}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ko_kr){word-break:keep-all}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h2,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}[data-game=rdo] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3,[data-game^=rdr] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h4,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h5,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h4,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h5,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [template=community] main{color:var(--color-h,#161616)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [template=community] p{color:var(--body-color,#2d2d2d)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]{--font-family-std:var(--gta-font-family-std);--font-family-h:var(--gta-font-family-h);--letter-spacing-h:0;--line-height-h1:1;--font-weight-newswire-subtitle:400;--letter-spacing-std:0;--color-h:#fff;--body-color:#e8e8e8;--tag-color:#e8e8e8;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;background-color:var(--background-color,transparent);color:#e8e8e8;font-family:var(--font-family-std,HelveticaNowText);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (min-width:0px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]{--header-numerator:20.8}}@media (min-width:768px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]{--header-numerator:23.4}}@media (min-width:1024px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]{--header-numerator:26}}@media (min-width:1920px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]{--header-numerator:29.25}}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta]:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h2,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}[data-game=rdo] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3,[data-game^=rdr] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h4,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h5,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h4,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h5,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] [template=community] main{color:var(--color-h,#161616)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] [template=community] p{color:var(--body-color,#2d2d2d)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=gta] .rockstargames-modules-core-headerab6bac3e7cd6aeeec5fe34375b77b1a2{font-family:var(--gta-font-family-badge)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(pl_pl) [data-game^=gta]{--font-family-h:ChaletComprime,NeueHelveticaW05;--font-family-newswire-subtitle:ChaletComprime,NeueHelveticaW05;--badge-font:Pricedown,NeueHelveticaW05}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(pl_pl) [data-context=newswire-article] h1{--font-family-h:NeueHelveticaPaneuropean}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ru_ru) [data-game^=gta]{--font-family-h:NeueHelveticaW05;--font-family-newswire-subtitle:NeueHelveticaW05;--badge-font:Pricedown,NeueHelveticaW05}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ru_ru) [data-context=newswire-article] h1{--font-family-h:NeueHelveticaW05}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hans) [data-game^=gta]{--font-family-h:NotoSansSC;--font-family-newswire-subtitle:NotoSansSC;--font-family-std:NotoSansSC;--badge-font:Pricedown,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hant) [data-game^=gta]{--font-family-h:NotoSansTC;--font-family-newswire-subtitle:NotoSansTC;--font-family-std:NotoSansTC;--badge-font:Pricedown,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ja_jp) [data-game^=gta]{--font-family-h:NotoSansJP;--font-family-newswire-subtitle:NotoSansJP;--font-family-std:NotoSansJP;--badge-font:Pricedown,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ja_jp) [data-context=newswire-article] h1{--font-family-h:NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ko_kr) [data-game^=gta]{--font-family-h:NotoSansKR;--font-family-newswire-subtitle:NotoSansKR;--font-family-std:NotoSansKR;--badge-font:Pricedown,NotoSansKR}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]{--font-family-std:var(--rdr-font-family-std);--font-family-h:var(--rdr-font-family-h);--font-family-newswire-subtitle:var(--rdr-font-family-newswire-subtitle);--area-font:var(--rdr-area-font);--font-weight-h:400;--font-weight-h1:400;--font-weight-h3:400;--font-weight-newswire-subtitle:700;--h3-numerator-override-newswire-subtitle:1;--letter-spacing-h:0;--line-height-h:1.2;--letter-spacing-std:0;--text-transform-newswire-subtitle:initial;--color-h:#c00;--color-h3:#fff;--color-h4:#fff;--body-color:#e8e8e8;--text-transform-h:uppercase;--tag-color:#e8e8e8;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;background-color:var(--background-color,transparent);color:#e8e8e8;font-family:var(--font-family-std,HelveticaNowText);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (min-width:0px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]{--header-numerator:15}}@media (min-width:768px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]{--header-numerator:16.88}}@media (min-width:1024px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]{--header-numerator:18.75}}@media (min-width:1920px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]{--header-numerator:21.09}}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr]:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h2,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h4,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h2,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h2,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3[data-context=newswire-subtitle],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}[data-game=rdo] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3,[data-game=rdo] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3,[data-game^=rdr] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3,[data-game^=rdr] .rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h4,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h5,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h6,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h4,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h5,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h1.rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h2,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h3[data-context=newswire-subtitle],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h4,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h5,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] h6,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h4,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h5,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] [template=community],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] [template=community] main,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] [template=community] main{color:var(--color-h,#161616)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game=rdo] [template=community] p,.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-game^=rdr] [template=community] p{color:var(--body-color,#2d2d2d)}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(pl_pl) [data-game=rdo],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(pl_pl) [data-game^=rdr]{--font-family-h:RDRLino-Regular;--font-family-newswire-subtitle:HapnaSlabSerif;--font-family-std:HapnaSlabSerif;--badge-font:RDRLino-Regular}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hans) [data-game=rdo],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hans) [data-game^=rdr]{--font-family-h:NotoSerifSC;--font-family-newswire-subtitle:NotoSansSC,;--font-family-std:NotoSansSC;--area-font:NotoSansSC;--badge-font:RDRLino-Regular,NotoSerifSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hant) [data-game=rdo],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hant) [data-game^=rdr]{--font-family-h:NotoSerifTC;--font-family-newswire-subtitle:NotoSansTC;--font-family-std:NotoSansTC;--area-font:NotoSansTC;--badge-font:RDRLino-Regular,NotoSerifTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ja_jp) [data-game=rdo],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ja_jp) [data-game^=rdr]{--font-family-h:NotoSerifJP;--font-family-newswire-subtitle:NotoSansJP;--font-family-std:NotoSansJP;--area-font:NotoSansJP;--badge-font:RDRLino-Regular,NotoSerifTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ko_kr) [data-game=rdo],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ko_kr) [data-game^=rdr]{--font-family-h:NotoSerifKR;--font-family-newswire-subtitle:NotoSansKR;--font-family-std:NotoSansKR;--area-font:NotoSansKR;--badge-font:RDRLino-Regular,NotoSerifKR}@font-face{font-family:HelveticaNowDisplayBold;font-style:normal;font-weight:700;src:url(${Ta}) format("woff")}@font-face{font-family:HelveticaNowText;font-style:normal;font-weight:400;src:url(${Oa}) format("woff")}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(pl-PL),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(pl_pl){--font-family-h:NeueHelveticaPaneuropean;--font-family-std:NeueHelveticaPaneuropean}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ru-RU),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ru_ru){--font-family-h:NeueHelveticaPaneuropean}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-type-lang=pl],.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-type-lang=ru]{font-family:NeueHelveticaPaneuropean!important}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh-CN),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_hans){--font-family-h:ChaletComprime,NotoSansSC;--font-family-body:NotoSansSC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-type-lang=zh]{font-family:ChaletComprime,NotoSansSC!important}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh-TW),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(zh_tw){--font-family-h:ChaletComprime,NotoSansTC;--font-family-body:NotoSansTC}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-type-lang=tw]{font-family:ChaletComprime,NotoSansTC!important}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ja-JP),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ja_jp){--font-family-h:HelveticaNowDisplayBold,NotoSansJP;--font-family-body:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-type-lang=jp]{font-family:HelveticaNowText,NotoSansJP!important}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ko-KR),.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b :lang(ko_kr){--font-family-h:ChaletComprime,NotoSansKR;--font-family-body:NotoSansKR}.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b [data-type-lang=kr]{font-family:ChaletComprime,NotoSansKR!important}@media (min-width:2560px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--max-width-md:1440px}}@media (max-width:767px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--spacing-lg:2rem;--spacing-xl:4rem}}@media (min-width:0px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--base-rem-size:16px}}@media (min-width:768px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--base-rem-size:18px}}@media (min-width:1024px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--base-rem-size:20px}}@media (min-width:1920px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--base-rem-size:22px}}@media (max-width:1023px){.rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b{--nav-icon-size:var(--rem-125);--nav-link-size:calc(var(--base-rem-size) * 1.25);--sub-nav-indent:var(--spacing-md)}}.rockstargames-modules-core-headerd45d3098c677dd2ec79f50475413ab8e{height:var(--global-navigation-height)}@media screen and (min-width:1024px){.rockstargames-modules-core-headere22f06c8b88ebe362a876f197dca5953{height:calc(var(--global-navigation-height) + 140px)}}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/GlobalNavigation/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less", "webpack://./../../buildtime/legacy-design-system/less/typography.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-vars.less", "webpack://./src/components/GlobalNavigation/typography.less"],
        names: [],
        mappings: "AA2QA,mEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,uEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,kJAEI,gCAAA,CACA,YC/OR,CDkPI,qIAEI,2BAAA,CADA,sBC/OR,CD8OI,yIAKQ,eChPZ,CAjEA,mEC6PI,8BAAA,CACA,sBAAA,CACA,uBAAA,CACA,8CAAA,CACA,+CAAA,CACA,sDAAA,CACA,oBAAA,CACA,uDAAA,CACA,kBAAA,CACA,wBAAA,CACA,cAAA,CACA,oBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,2BAAA,CACA,yBAAA,CACA,kDAAA,CACA,6BAAA,CACA,oBAAA,CACA,4BAAA,CACA,8BAAA,CACA,8BAAA,CAEA,2BAAA,CACA,yBAAA,CACA,yBAAA,CACA,yBAAA,CACA,yBAAA,CAGA,wBAAA,CACA,4BAAA,CACA,4BAAA,CACA,4BAAA,CAGA,wBAAA,CACA,sBAAA,CAEA,yCAAA,CACA,yCAAA,CACA,qCAAA,CCvKJ,4CAAA,CACA,wCAAA,CACA,kCAAA,CDhBI,sCAAA,CAAA,2CAAA,CAAA,4BAAA,CAAA,kCAAA,CAAA,iCAAA,CAAA,oCAAA,CAAA,mCAAA,CAAA,kDAAA,CAAA,gCAAA,CAyBA,wFAAA,CAOA,kCAAA,CEnJJ,2BAAA,CACA,gCAAA,CAGA,yBAAA,CACA,sBAAA,CAGA,uBAAA,CACA,oBAAA,CAGA,kBAAA,CACA,oBAAA,CACA,oBAAA,CAGA,gBAAA,CACA,mBAAA,CACA,4BAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,sBAAA,CAEA,gBAAA,CACA,8BAAA,CACA,6BAAA,CACA,8BAAA,CAGA,qBAAA,CACA,aAAA,CACA,uBAAA,CACA,uBAAA,CACA,0BAAA,CACA,yBAAA,CACA,mBAAA,CAEA,qBAAA,CAGA,0BAAA,CACA,8BAAA,CAEA,qBAAA,CACA,oBAAA,CAGA,4BAAA,CACA,gCAAA,CAGA,oBAAA,CACA,qBAAA,CACA,qBAAA,CACA,qBAAA,CAIA,qBAAA,CACA,mBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CAIA,iCAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CAGA,gCAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CAGA,+BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CAGA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,uBAAA,CAGA,sGAAA,CAMA,2EAAA,CAOA,4BAAA,CH1GI,uCAAA,CACA,mCAAA,CAEA,6BAAA,CACA,oBAAA,CAOA,2CAAA,CACA,yCAAA,CACA,2CAAA,CACA,4BAAA,CACA,2CAAA,CACA,yCAAA,CACA,sCAAA,CACA,sCAAA,CACA,sCAAA,CACA,sCAAA,CACA,sCAAA,CAEA,4BAAA,CACA,0BAAA,CACA,yBAAA,CACA,yBAAA,CACA,yBAAA,CACA,yBAAA,CAEA,8DAAA,CAIA,+BAAA,CAEA,oCAAA,CACA,+BAAA,CACA,8DAAA,CAEA,4BAAA,CACA,iDAAA,CACA,kCAAA,CACA,yBAAA,CC4LA,oDAAA,CA/FA,mDAAA,CDxGA,mCAAA,CC4GA,2CAAA,CAHA,sCAAA,CACA,gDAAA,CACA,sCDyFJ,CChMI,yBAAA,mEAiPQ,yBAAA,CAA4B,yBD5CtC,CACF,CCnII,0BAAA,mEAoLS,4BD7CX,CACF,CCqPI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DD7OR,CCyOI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDvOR,CCmOI,WACI,qCAAA,CACA,iBAAA,CACA,eAAA,CACA,0DD3NR,CCuNI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDrNR,CCiNI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DD/MR,CC2MI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDzMR,CCqMI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDnMR,CC+LI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DD7LR,CCyLI,WACI,8BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDvLR,CCmLI,WACI,sCAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDjLR,CC6KI,WACI,oCAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD3KR,CCuKI,WACI,mCAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDrKR,CCiKI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD/JR,CC2JI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDzJR,CCqJI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDnJR,CC+II,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD7IR,CCyII,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDvIR,CCmII,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDjIR,CC6HI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD3HR,CCuHI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDrHR,CCiHI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD/GR,CC2GI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDzGR,CCqGI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDnGR,CC+FI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD7FR,CCyFI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDvFR,CCmFI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDjFR,CC6EI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD3ER,CCuEI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDrER,CCiEI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD/DR,CC2DI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDzDR,CCqDI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDnDR,CC+CI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD7CR,CCyCI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDvCR,CCmCI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDjCR,CC6BI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD3BR,CCuBI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDrBR,CCiBI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDfR,CCWI,WACI,uBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDTR,CCKI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDHR,CCDI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDGR,CCPI,WACI,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDSR,CCbI,WACI,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDeR,CCnBI,WACI,qBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDqBR,CCzBI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD2BR,CC/BI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDiCR,CCrCI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDuCR,CC3CI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD6CR,CCjDI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDmDR,CCvDI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDyDR,CC7DI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD+DR,CCnEI,WACI,wBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDqER,CCzEI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD2ER,CC/EI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDiFR,CCrFI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDuFR,CC3FI,WACI,mBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD6FR,CCjGI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDmGR,CCvGI,WACI,wBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDyGR,CC7GI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD+GR,CCnHI,WACI,6BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDqHR,CCzHI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD2HR,CC/HI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDiIR,CCrII,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDuIR,CC3II,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD6IR,CCjJI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDmJR,CCvJI,WACI,oBAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDyJR,CC7JI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD+JR,CCnKI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDqKR,CC9mBI,uBAAA,mEAi4BK,mBD/QP,CACF,CCjmBI,yBAAA,mEAg3BK,mBD3QP,CACF,CCplBI,0BAAA,mEA+1BK,mBDvQP,CACF,CCvkBI,0BAAA,mEA80BK,mBDnQP,CACF,CAtqBA,qEE2FI,qBF8kBJ,CAzqBA,qEE8FI,aAAA,CACA,oBF8kBJ,CA7qBA,mjBE4GI,QF6kBJ,CAzrBA,yJDkKI,sCAAA,CACA,4BAAA,CG3CA,uBAAA,CAPA,aAAA,CAGA,kCAAA,CACA,4BAAA,CAEA,iBAAA,CALA,uCAAA,CHmDA,mJAAA,CG/CA,iBFglBJ,CAtsBA,6JE2HQ,aF+kBR,CA1sBA,gFEsII,yCFukBJ,CA7sBA,gFE2II,mBFqkBJ,CC5lBI,+EACI,iDD8lBR,CC5lBI,iFACI,iDD8lBR,CC5lBI,+EACI,iDD8lBR,CCrmBI,+EACI,sDDumBR,CCrmBI,iFACI,sDDumBR,CCrmBI,+EACI,sDDumBR,CC9mBI,+EACI,uCDgnBR,CC9mBI,iFACI,uCDgnBR,CC9mBI,+EACI,uCDgnBR,CCvnBI,+EACI,6CDynBR,CCvnBI,iFACI,6CDynBR,CCvnBI,+EACI,6CDynBR,CChoBI,+EACI,4CDkoBR,CChoBI,iFACI,4CDkoBR,CChoBI,+EACI,4CDkoBR,CCzoBI,+EACI,+CD2oBR,CCzoBI,iFACI,+CD2oBR,CCzoBI,+EACI,+CD2oBR,CClpBI,+EACI,8CDopBR,CClpBI,iFACI,8CDopBR,CClpBI,+EACI,8CDopBR,CC3pBI,+EACI,6DD6pBR,CC3pBI,iFACI,6DD6pBR,CC3pBI,+EACI,6DD6pBR,CCpqBI,+EACI,2CDsqBR,CCpqBI,iFACI,2CDsqBR,CCpqBI,+EACI,2CDsqBR,CAjyBA,gaCyJQ,wDAAA,CACA,8CD+oBR,CAzyBA,8MC8JQ,0DAAA,CAEA,0DAAA,CADA,oEDgpBR,CA/yBA,wICoKQ,6DD8oBR,CAlzBA,sECuKQ,6DD8oBR,CArzBA,sEC0KQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oED+oBR,CA3zBA,sECgLQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oED+oBR,CC5oBQ,sGAYI,qEAAA,CAXA,6GAAA,CAOA,qEAAA,CAQA,sDDkoBZ,CCpTI,6KA1UQ,0DDkoBZ,CA30BA,kNCgNQ,6DAAA,CACA,oCDgoBR,CAj1BA,8MCwNQ,mED6nBR,CAr1BA,sEC2NQ,mED6nBR,CAx1BA,sEC8NQ,mED6nBR,CC3nBQ,sGACI,iGD6nBZ,CA91BA,kNC0OQ,mDDynBR,CAn2BA,wFC+OQ,sCAAA,CACA,8CDunBR,CAv2BA,6FCmPY,4BDunBZ,CA12BA,0FCsPY,+BDunBZ,CA72BA,oFEmJI,4CAAA,CACA,wCAAA,CACA,oBAAA,CACA,kBAAA,CACA,mCAAA,CACA,sBAAA,CACA,cAAA,CACA,oBAAA,CDibA,mBAAA,CAzdA,sCAAA,CAAA,2CAAA,CAAA,4BAAA,CAAA,kCAAA,CAAA,iCAAA,CAAA,oCAAA,CAAA,mCAAA,CAAA,kDAAA,CAAA,gCAAA,CAyBA,wFAAA,CAOA,kCAAA,CA0FA,oDAAA,CA8VA,aAAA,CA7bA,mDAAA,CAIA,2CAAA,CAHA,sCAAA,CACA,gDAAA,CACA,sCD2vBJ,CCv2BI,uBAAA,oFC0HK,uBFivBP,CACF,CC11BI,yBAAA,oFCyGK,uBFqvBP,CACF,CC70BI,0BAAA,oFCwFK,qBFyvBP,CACF,CCh0BI,0BAAA,oFCuEK,wBF6vBP,CACF,CC3yBI,gGACI,iDD6yBR,CC3yBI,kGACI,iDD6yBR,CC3yBI,gGACI,iDD6yBR,CCpzBI,gGACI,sDDszBR,CCpzBI,kGACI,sDDszBR,CCpzBI,gGACI,sDDszBR,CC7zBI,gGACI,uCD+zBR,CC7zBI,kGACI,uCD+zBR,CC7zBI,gGACI,uCD+zBR,CCt0BI,gGACI,6CDw0BR,CCt0BI,kGACI,6CDw0BR,CCt0BI,gGACI,6CDw0BR,CC/0BI,gGACI,4CDi1BR,CC/0BI,kGACI,4CDi1BR,CC/0BI,gGACI,4CDi1BR,CCx1BI,gGACI,+CD01BR,CCx1BI,kGACI,+CD01BR,CCx1BI,gGACI,+CD01BR,CCj2BI,gGACI,8CDm2BR,CCj2BI,kGACI,8CDm2BR,CCj2BI,gGACI,8CDm2BR,CC12BI,gGACI,6DD42BR,CC12BI,kGACI,6DD42BR,CC12BI,gGACI,6DD42BR,CCn3BI,gGACI,2CDq3BR,CCn3BI,kGACI,2CDq3BR,CCn3BI,gGACI,2CDq3BR,CAh/BA,qfCyJQ,wDAAA,CACA,8CD81BR,CAx/BA,gPC8JQ,0DAAA,CAEA,0DAAA,CADA,oED+1BR,CA9/BA,yJCoKQ,6DD61BR,CAjgCA,uFCuKQ,6DD61BR,CApgCA,uFC0KQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oED81BR,CA1gCA,uFCgLQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oED81BR,CC31BQ,uHAYI,qEAAA,CAXA,6GAAA,CAOA,qEAAA,CAQA,sDDi1BZ,CCngBI,+MA1UQ,0DDi1BZ,CA1hCA,qQCgNQ,6DAAA,CACA,oCD+0BR,CAhiCA,gPCwNQ,mED40BR,CApiCA,uFC2NQ,mED40BR,CAviCA,uFC8NQ,mED40BR,CC10BQ,uHACI,iGD40BZ,CA7iCA,qQC0OQ,mDDw0BR,CAljCA,yGC+OQ,sCAAA,CACA,8CDs0BR,CAtjCA,8GCmPY,4BDs0BZ,CAzjCA,2GCsPY,+BDs0BZ,CA5jCA,uJEuKQ,wCFw5BR,CA/jCA,iGE8KM,+CAAA,CACA,+DAAA,CACA,uCFo5BN,CApkCA,mHEmLQ,wCFo5BR,CAvkCA,iGE0LM,gCAAA,CACA,gDAAA,CACA,uCFg5BN,CA5kCA,mHE+LQ,gCFg5BR,CA/kCA,mGEsMM,0BAAA,CACA,0CAAA,CACA,4BAAA,CACA,iCF44BN,CArlCA,mGEgNM,0BAAA,CACA,0CAAA,CACA,4BAAA,CACA,iCFw4BN,CA3lCA,iGE0NM,0BAAA,CACA,0CAAA,CACA,4BAAA,CACA,iCFo4BN,CAjmCA,mHEgOQ,0BFo4BR,CApmCA,iGEuOM,0BAAA,CACA,0CAAA,CACA,4BAAA,CACA,iCFg4BN,CA1mCA,uKEgPI,4CAAA,CACA,wCAAA,CACA,wEAAA,CACA,gCAAA,CACA,mBAAA,CACA,oBAAA,CACA,oBAAA,CACA,mCAAA,CACA,2CAAA,CACA,oBAAA,CACA,mBAAA,CACA,sBAAA,CACA,0CAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CACA,oBAAA,CACA,4BAAA,CD0UA,mBAAA,CAzdA,sCAAA,CAAA,2CAAA,CAAA,4BAAA,CAAA,kCAAA,CAAA,iCAAA,CAAA,oCAAA,CAAA,mCAAA,CAAA,kDAAA,CAAA,gCAAA,CAyBA,wFAAA,CAOA,kCAAA,CA0FA,oDAAA,CA8VA,aAAA,CA7bA,mDAAA,CAIA,2CAAA,CAHA,sCAAA,CACA,gDAAA,CACA,sCDmgCJ,CC/mCI,uBAAA,uKCiOK,qBFm5BP,CACF,CCnmCI,yBAAA,uKCgNK,wBFw5BP,CACF,CCvlCI,0BAAA,uKC+LK,wBF65BP,CACF,CC3kCI,0BAAA,uKC8KK,wBFk6BP,CACF,CCvjCI,+LACI,iDD0jCR,CCxjCI,mMACI,iDD2jCR,CCzjCI,+LACI,iDD4jCR,CCnkCI,+LACI,sDDskCR,CCpkCI,mMACI,sDDukCR,CCrkCI,+LACI,sDDwkCR,CC/kCI,+LACI,uCDklCR,CChlCI,mMACI,uCDmlCR,CCjlCI,+LACI,uCDolCR,CC3lCI,+LACI,6CD8lCR,CC5lCI,mMACI,6CD+lCR,CC7lCI,+LACI,6CDgmCR,CCvmCI,+LACI,4CD0mCR,CCxmCI,mMACI,4CD2mCR,CCzmCI,+LACI,4CD4mCR,CCnnCI,+LACI,+CDsnCR,CCpnCI,mMACI,+CDunCR,CCrnCI,+LACI,+CDwnCR,CC/nCI,+LACI,8CDkoCR,CChoCI,mMACI,8CDmoCR,CCjoCI,+LACI,8CDooCR,CC3oCI,+LACI,6DD8oCR,CC5oCI,mMACI,6DD+oCR,CC7oCI,+LACI,6DDgpCR,CCvpCI,+LACI,2CD0pCR,CCxpCI,mMACI,2CD2pCR,CCzpCI,+LACI,2CD4pCR,CAvxCA,q+BCyJQ,wDAAA,CACA,8CD0oCR,CApyCA,8dC8JQ,0DAAA,CAEA,0DAAA,CADA,oED6oCR,CA5yCA,iTCoKQ,6DD4oCR,CAhzCA,6KCuKQ,6DD6oCR,CApzCA,6KC0KQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oED+oCR,CA3zCA,6KCgLQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oEDgpCR,CC7oCQ,6OAYI,qEAAA,CAXA,6GAAA,CAOA,qEAAA,CAQA,sDDooCZ,CCtzBI,4ZA1UQ,0DDsoCZ,CA/0CA,ugBCgNQ,6DAAA,CACA,oCDuoCR,CAx1CA,8dCwNQ,mEDsoCR,CA91CA,6KC2NQ,mEDuoCR,CAl2CA,6KC8NQ,mEDwoCR,CCtoCQ,6OACI,iGDyoCZ,CA12CA,ugBC0OQ,mDDwoCR,CAl3CA,iNC+OQ,sCAAA,CACA,8CDuoCR,CAv3CA,2NCmPY,4BDwoCZ,CA33CA,qNCsPY,+BDyoCZ,CA/3CA,iMEiRM,+BAAA,CACA,8CAAA,CACA,gCAAA,CACA,4BFknCN,CAt4CA,qME2RM,2BAAA,CACA,2CAAA,CACA,4BAAA,CACA,sBAAA,CACA,wCF+mCN,CA94CA,qMEsSM,2BAAA,CACA,0CAAA,CACA,4BAAA,CACA,sBAAA,CACA,wCF4mCN,CAt5CA,iMEiTM,2BAAA,CACA,0CAAA,CACA,4BAAA,CACA,sBAAA,CACA,wCFymCN,CA95CA,iME4TM,2BAAA,CACA,0CAAA,CACA,4BAAA,CACA,sBAAA,CACA,wCFsmCN,CC77BI,WACI,mCAAA,CACA,iBAAA,CACA,eAAA,CACA,2DD+7BR,CCn8BI,WACI,4BAAA,CACA,iBAAA,CACA,eAAA,CACA,2DDq8BR,CAl7CA,gKIYI,wCAAA,CACA,0CJ06CJ,CAv7CA,gKIkBI,wCJy6CJ,CA37CA,8KIuBI,8CJw6CJ,CA/7CA,kKI6BI,yCAAA,CACA,6BJs6CJ,CAp8CA,uFIiCI,+CJs6CJ,CAv8CA,gKIuCI,yCAAA,CACA,6BJo6CJ,CA58CA,uFI2CI,+CJo6CJ,CA/8CA,gKIiDI,kDAAA,CACA,8CJk6CJ,CAp9CA,uFIqDI,iDJk6CJ,CAv9CA,gKI2DI,yCAAA,CACA,6BJg6CJ,CA59CA,uFI+DI,+CJg6CJ,CCn3CI,0BAAA,mEEpDE,qBH26CJ,CACF,CC37CI,yBAAA,mEEwBI,iBAAA,CAAoB,iBHw6C1B,CACF,CCt8CI,uBAAA,mEDzBK,oBAm+CP,CACF,CCz7CI,yBAAA,mED1CK,oBAu+CP,CACF,CC56CI,0BAAA,mED3DK,oBA2+CP,CACF,CC/5CI,0BAAA,mED5EK,oBA++CP,CACF,CCn8CI,0BAAA,mEDRI,8BAAA,CACA,iDAAA,CACA,kCA+8CN,CACF,CA58CA,mEACI,sCA88CJ,CA18CI,qCAAA,mEACI,oDA68CN,CACF",
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
      const La = ye
    },
    58865: (e, a, n) => {
      n.d(a, {
        A: () => s
      });
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052{align-items:center;display:flex}.rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052 button{background:transparent;border:none;cursor:pointer;display:flex;flex-flow:column;height:var(--rem-15);justify-content:center;padding:0;position:relative;width:var(--rem-15)}.rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052 span{background:#fff;border-radius:16px;height:2px;position:absolute;transform-origin:left center;transition:.2s;width:100%}.rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052 span:first-child{transform:translateY(-400%)}.rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052 span:last-child{transform:translateY(400%)}.rockstargames-modules-core-headerbd080f06ee310dbeb7602106d104aa1b span:first-child,.rockstargames-modules-core-headerbd080f06ee310dbeb7602106d104aa1b span:last-child{transform:translateY(0)}", "", {
        version: 3,
        sources: ["webpack://./src/components/Hamburger/index.less"],
        names: [],
        mappings: "AAAA,mEAEI,kBAAA,CADA,YAEJ,CAHA,0EAaQ,sBAAA,CADA,WAAA,CALA,cAAA,CAEA,YAAA,CACA,gBAAA,CAJA,oBAAA,CAKA,sBAAA,CAGA,SAAA,CANA,iBAAA,CAHA,mBAUR,CAfA,wEAsBQ,eAAA,CAHA,kBAAA,CACA,UAAA,CACA,iBAAA,CAGA,4BAAA,CADA,cAAA,CALA,UAMR,CAEQ,oFACI,2BAAZ,CAGQ,mFACI,0BADZ,CAQQ,uKAEI,uBANZ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerb9149341b2c77373002bd1b206231069{-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);background:rgba(0,0,0,.85);border-bottom:1px solid var(--blacks-border-color);color:#fff;display:flex;height:var(--global-navigation-height);opacity:1;padding:0 var(--rem-4);position:fixed;top:0;transition:top .3s ease-in-out;width:100%;z-index:99}[data-show-more-content] .rockstargames-modules-core-headerb9149341b2c77373002bd1b206231069{top:calc(var(--global-navigation-height, 80px) * -1)}[data-header-initialized=false] .rockstargames-modules-core-headerb9149341b2c77373002bd1b206231069{opacity:0;transition-duration:0s}.rockstargames-modules-core-headerec46a8779f24ebce8cd66175dfa225f8{flex-grow:1;overflow:hidden}.rockstargames-modules-core-headere7388ff62f2c8d2f6ecfc70019310faa{flex:1}.rockstargames-modules-core-headerbc99b8e4243957f58ee357454d77a14b{align-items:center;display:flex;flex:1}.rockstargames-modules-core-headera949a457f9b9536c84492c22ad8ab91e{opacity:0;pointer-events:none;position:absolute;top:100%;transform:translateY(-10px);transition:opacity .35s ease-out,transform 0s ease .5s}.rockstargames-modules-core-headera949a457f9b9536c84492c22ad8ab91e[data-qa-opened=true]{opacity:1;pointer-events:auto;transform:translateY(0);transition:opacity .15s ease,transform .15s ease}", "", {
        version: 3,
        sources: ["webpack://./src/components/Header/index.less"],
        names: [],
        mappings: "AAAA,mEAKI,kCAAA,CAAA,0BAAA,CADA,0BAAA,CAGA,kDAAA,CADA,UAAA,CALA,YAAA,CACA,sCAAA,CAmBA,SAAA,CAlBA,sBAAA,CAMA,cAAA,CAIA,KAAA,CAOA,8BAAA,CAVA,UAAA,CAFA,UAMJ,CACI,4FACI,oDACR,CAKI,mGAEI,SAAA,CADA,sBAFR,CAOA,mEACI,WAAA,CACA,eALJ,CAQA,mEACI,MANJ,CASA,mEAEI,kBAAA,CADA,YAAA,CAEA,MAPJ,CAUA,mEAGI,SAAA,CAIA,mBAAA,CANA,iBAAA,CACA,QAAA,CAMA,2BAAA,CAJA,sDANJ,CAYI,wFACI,SAAA,CACA,mBAAA,CAIA,uBAAA,CAHA,gDATR",
        sourcesContent: [".header {\n    display: flex;\n    height: var(--global-navigation-height);\n    padding: 0 var(--rem-4);\n    background: rgba(0, 0, 0, 0.85);\n    backdrop-filter: blur(25px);\n    color: white;\n    border-bottom: 1px solid var(--blacks-border-color);\n    z-index: 99; // one less than expanded modals\n    position: fixed;\n    width: 100%;\n\n    \n    top: 0;\n\n    [data-show-more-content] & {\n        top: calc(var(--global-navigation-height, 80px) * -1);\n    }\n    \n\n    transition: top 0.3s ease-in-out;\n    opacity: 1;\n    [data-header-initialized='false'] & {\n        transition-duration: 0s;\n        opacity: 0;\n    }\n}\n\n.fluid {\n    flex-grow: 1;\n    overflow: hidden;\n}\n\n.fixed {\n    flex: 1;\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    flex: 1;\n}\n\n.quickAccessWrapper {\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    transition:\n        opacity 0.35s ease-out,\n        transform 0s ease 0.5s;\n    pointer-events: none;\n    transform: translateY(-10px);\n\n    &[data-qa-opened='true'] {\n        opacity: 1;\n        pointer-events: auto;\n        transition:\n            opacity 0.15s ease,\n            transform 0.15s ease;\n        transform: translateY(0px);\n    }\n}\n"],
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, "html[data-disallow-body-scroll]{overflow-y:hidden}.rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3{--nav-base-font-size:16px;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);background:rgba(0,0,0,.85);border-bottom:1px solid var(--blacks-border-color);color:var(--white-100);display:flex;font-size:var(--base-rem-size);height:var(--global-navigation-height);justify-content:space-between;opacity:1;padding:0 32px;position:fixed;top:0;transition:top .3s ease-in-out;width:100%;z-index:99}body[data-show-more-content] .rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3{top:calc(var(--global-navigation-height, 80px) * -1)}[data-header-initialized=false] .rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3{opacity:0;transition-duration:0s}.rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3>div{flex:1}.rockstargames-modules-core-headerb77426232e2ade0dcb72f4d2764215e8{align-items:center;display:flex;justify-content:space-around}.rockstargames-modules-core-headerd6629e9cc98efe8997d0620a9275c627{background:#000;color:var(--white-100);left:0;max-height:100vh;overflow-x:hidden;overflow-y:auto;position:fixed;right:0;top:var(--global-navigation-height);transition:top .3s ease-in-out;z-index:99}.rockstargames-modules-core-headerd6629e9cc98efe8997d0620a9275c627.rockstargames-modules-core-headeraa4c60d9207e8327ebc788a3e1d56d5b{bottom:0}.rockstargames-modules-core-headerc5b9f47efbb73b2dfd9c68013ca5bed4.rockstargames-modules-core-headerba19960a101d69f671900a795029cf7b{opacity:.3;pointer-events:none}.rockstargames-modules-core-headerff8c8312206e01ca7503d1914e699e1d{background-color:rgba(0,0,0,.8);height:100%;left:0;position:absolute;top:0;width:100%;z-index:2}", "", {
        version: 3,
        sources: ["webpack://./src/components/HeaderMobile/index.less"],
        names: [],
        mappings: "AAAA,gCACI,iBACJ,CAEA,mEACI,yBAAA,CAOA,kCAAA,CAAA,0BAAA,CADA,0BAAA,CAGA,kDAAA,CADA,sBAAA,CALA,YAAA,CADA,8BAAA,CAEA,sCAAA,CAQA,6BAAA,CAcA,SAAA,CArBA,cAAA,CAMA,cAAA,CAMA,KAAA,CAOA,8BAAA,CAXA,UAAA,CAHA,UAKJ,CAII,gGACI,oDAFR,CASI,mGAEI,SAAA,CADA,sBANR,CAUI,uEACI,MARR,CAYA,mEAEI,kBAAA,CADA,YAAA,CAEA,4BAVJ,CAaA,mEAKI,eAAA,CAIA,sBAAA,CANA,MAAA,CAGA,gBAAA,CAEA,iBAAA,CADA,eAAA,CANA,cAAA,CAGA,OAAA,CAaA,mCAAA,CAPA,8BAAA,CARA,UAFJ,CAYI,qIACI,QAVR,CAmBI,qIACI,UAAA,CACA,mBAjBR,CAqBA,mEAMI,+BAAA,CAJA,WAAA,CAGA,MAAA,CAJA,iBAAA,CAGA,KAAA,CADA,UAAA,CAIA,SAnBJ",
        sourcesContent: ["html[data-disallow-body-scroll] {\n    overflow-y: hidden;\n}\n\n.header {\n    --nav-base-font-size: 16px;\n\n    font-size: var(--base-rem-size);\n    display: flex;\n    height: var(--global-navigation-height);\n    padding: 0 32px;\n    background: rgba(0, 0, 0, 0.85);\n    backdrop-filter: blur(25px);\n    color: var(--white-100);\n    border-bottom: 1px solid var(--blacks-border-color);\n    z-index: 99; // one less than expanded modals\n    position: fixed;\n    justify-content: space-between;\n    width: 100%;\n    top: 0;\n\n    \n    top: 0;\n\n    body[data-show-more-content] & {\n        top: calc(var(--global-navigation-height, 80px) * -1);\n    }\n    \n\n    transition: top 0.3s ease-in-out;\n\n    opacity: 1;\n    [data-header-initialized='false'] & {\n        transition-duration: 0s;\n        opacity: 0;\n    }\n\n    & > div {\n        flex: 1;\n    }\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.nav {\n    position: fixed;\n    z-index: 99; // same z-index as header\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 1);\n    max-height: 100vh;\n    overflow-y: auto;\n    overflow-x: hidden;\n    color: var(--white-100);\n    transition: top 0.3s ease-in-out;\n\n    &.fullMenuOpen {\n        bottom: 0;\n    }\n\n    \n    top: var(--global-navigation-height);\n    \n}\n\n.navContainer {\n    &.searchOpen {\n        opacity: 0.3;\n        pointer-events: none;\n    }\n}\n\n.overlay {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 2;\n}\n"],
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headere92969b01c7ecc3f45b726efcdd54e73{overflow-x:auto}.rockstargames-modules-core-headere92969b01c7ecc3f45b726efcdd54e73 ul{display:flex;flex-wrap:wrap;justify-content:center;margin:0;padding:0!important}.rockstargames-modules-core-headere92969b01c7ecc3f45b726efcdd54e73 li{height:var(--global-navigation-height);list-style:none}.rockstargames-modules-core-headerdc3da34691ab5b1e333e3d37858767f0{display:flex;justify-content:center;margin:0;padding:0!important;visibility:hidden}.rockstargames-modules-core-headerdc3da34691ab5b1e333e3d37858767f0 li{height:var(--global-navigation-height);list-style:none;min-width:100px}", "", {
        version: 3,
        sources: ["webpack://./src/components/Navigation/index.less"],
        names: [],
        mappings: "AAAA,mEACI,eACJ,CAFA,sEAKQ,YAAA,CADA,cAAA,CAIA,sBAAA,CAFA,QAAA,CACA,mBAER,CATA,sEAaQ,sCAAA,CADA,eACR,CAIA,mEAEI,YAAA,CAGA,sBAAA,CAFA,QAAA,CACA,mBAAA,CAHA,iBAEJ,CAHA,sEAUQ,sCAAA,CAFA,eAAA,CACA,eADR",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, '.rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b{font-size:var(--nav-link-size)}.rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b img{transition:transform .2s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b.rockstargames-modules-core-headere981dceef9b773c1a38070cf53b88f91 img{transform:rotate(180deg)}@media screen and (max-width:1023px){.rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b{align-items:center;background:transparent;border:none;color:var(--white-100);display:flex;font-style:normal;font-weight:700;justify-content:space-between;line-height:100%;padding:var(--padding-sm) var(--padding-md);text-decoration:none;width:100%}}@media screen and (min-width:1024px){.rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b{align-items:center;background:transparent;border:none;color:var(--white-100);color:var(--text-light);cursor:pointer;display:flex;font-family:var(--font-family-body);font-style:normal;font-weight:400;gap:var(--grid-gap-xxs);height:calc(var(--global-navigation-height) - 6px);justify-content:center;margin-top:3px;padding:0 var(--padding-sm);position:relative;text-align:center;white-space:nowrap}.rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b:focus{outline:none}.rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b:focus-visible{border:1px solid var(--white-100);border-radius:6px;outline:none}.rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b:after{bottom:-2px;content:"";display:block;height:0;left:0;position:absolute;right:0;transition:all .2s ease-in;width:100%}.rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b.rockstargames-modules-core-headere0aebf0d85eeab7cf262811136363f68,.rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b:hover{color:var(--white-100)}.rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b.rockstargames-modules-core-headere0aebf0d85eeab7cf262811136363f68:after,.rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b:hover:after{background:var(--white-100);height:2px}.rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b.rockstargames-modules-core-headere0aebf0d85eeab7cf262811136363f68{font-weight:700}}', "", {
        version: 3,
        sources: ["webpack://./src/components/NavigationDropdown/index.less"],
        names: [],
        mappings: "AAAA,mEACI,8BACJ,CAFA,uEAIQ,oCAAA,CACA,0BACR,CAEI,yIAEQ,wBADZ,CAMA,qCACI,mEAII,kBAAA,CAMA,sBAAA,CACA,WAAA,CAHA,sBAAA,CAPA,YAAA,CAKA,iBAAA,CAMA,eAAA,CATA,6BAAA,CAEA,gBAAA,CAHA,2CAAA,CAKA,oBAAA,CAEA,UADN,CACF,CAMA,qCACI,mEAUI,kBAAA,CAKA,sBAAA,CACA,WAAA,CAdA,sBAAA,CAeA,uBAAA,CACA,cAAA,CAjBA,YAAA,CAGA,mCAAA,CACA,iBAAA,CACA,eAAA,CAKA,uBAAA,CAHA,kDAAA,CACA,sBAAA,CAIA,cAAA,CAMA,2BAAA,CAPA,iBAAA,CATA,iBAAA,CAIA,kBAON,CAOM,yEACI,YALV,CAQM,iFAEI,iCAAA,CACA,iBAAA,CAFA,YAJV,CASM,yEAMI,WAAA,CALA,UAAA,CAEA,aAAA,CAEA,QAAA,CAEA,MAAA,CAHA,iBAAA,CAIA,OAAA,CACA,0BAAA,CAPA,UAAV,CAUM,8MAEI,sBARV,CAUU,0NAEI,2BAAA,CADA,UANd,CAWM,qIACI,eATV,CACF",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, '.rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558{align-items:center;color:var(--white-100);display:flex;font-family:var(--font-family-body);font-size:var(--nav-link-size);font-weight:400;gap:var(--grid-gap-xxs);height:calc(var(--global-navigation-height) - 6px);margin-top:3px;padding:0 var(--padding-sm);position:relative;text-decoration:none;transition:color .3s ease-in-out;white-space:nowrap}.rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558 img{width:var(--rem-075)}.rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558:focus-visible{border:1px solid var(--white-100);border-radius:6px;outline:none}.rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558:after{bottom:-2px;content:"";display:block;height:0;left:0;position:absolute;right:0;transition:all .2s ease-in;width:100%}.rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558.rockstargames-modules-core-headere6b2077f3b2a8ad9b1402ed6e0c25f95,.rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558:hover{color:var(--white-100)}.rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558.rockstargames-modules-core-headere6b2077f3b2a8ad9b1402ed6e0c25f95:after,.rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558:hover:after{background:var(--white-100);height:var(--rem-0125);height:2px}.rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558.rockstargames-modules-core-headere6b2077f3b2a8ad9b1402ed6e0c25f95{font-weight:700}a.rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558{color:var(--text-light)}button.rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558{background:transparent;border:none;cursor:pointer}', "", {
        version: 3,
        sources: ["webpack://./src/components/NavigationItem/index.less"],
        names: [],
        mappings: "AAAA,mEAKI,kBAAA,CAIA,sBAAA,CANA,YAAA,CAFA,mCAAA,CACA,8BAAA,CAIA,eAAA,CAFA,uBAAA,CAGA,kDAAA,CAOA,cAAA,CANA,2BAAA,CAKA,iBAAA,CAHA,oBAAA,CACA,gCAAA,CACA,kBAGJ,CAfA,uEAiBQ,oBACR,CAEI,iFAEI,iCAAA,CACA,iBAAA,CAFA,YAER,CAGI,yEAMI,WAAA,CALA,UAAA,CAEA,aAAA,CAEA,QAAA,CAEA,MAAA,CAHA,iBAAA,CAIA,OAAA,CACA,0BAAA,CAPA,UAMR,CAII,8MAEI,sBAFR,CAIQ,0NAGI,2BAAA,CAFA,sBAAA,CACA,UAAZ,CAKI,qIACI,eAHR,CAOA,oEACI,uBALJ,CAQA,yEACI,sBAAA,CACA,WAAA,CACA,cANJ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerf6daff7a849e2826ed2d1f41b9941956{background:hsla(0,0%,100%,.1)}", "", {
        version: 3,
        sources: ["webpack://./src/components/NavigationItemMobile/index.less"],
        names: [],
        mappings: "AAAA,mEACI,6BACJ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, "@media screen and (max-width:1023px){.rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641{align-items:center;background-color:hsla(0,0%,100%,0);border:none;color:var(--white-100);display:flex;font-size:var(--nav-link-size);font-style:normal;justify-content:space-between;letter-spacing:-.025em;line-height:100%;padding:var(--padding-sm) var(--padding-md);text-decoration:none;transition:background-color .3s ease-in-out}.rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641 img{width:var(--nav-icon-size)}.rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641.rockstargames-modules-core-headerab8c1da57859a4347bb7cd9722832fb9{border-radius:4px;margin:0 var(--margin-sm);padding:var(--padding-sm)}}.rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641.rockstargames-modules-core-headerab8c1da57859a4347bb7cd9722832fb9{background-color:hsla(0,0%,100%,.1);font-weight:700}", "", {
        version: 3,
        sources: ["webpack://./src/components/NavigationLink/sharedStyle.less"],
        names: [],
        mappings: "AACI,qCAAA,mEAKI,kBAAA,CAOA,kCAAA,CACA,WAAA,CAHA,sBAAA,CARA,YAAA,CADA,8BAAA,CAOA,iBAAA,CAJA,6BAAA,CAGA,sBAAA,CADA,gBAAA,CAHA,2CAAA,CAMA,oBAAA,CAEA,2CAGN,CAdE,uEAgBQ,0BACV,CAEM,qIACI,iBAAA,CAEA,yBAAA,CADA,yBACV,CACF,CAGI,qIACI,mCAAA,CACA,eADR",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerb6afa349a14125fd2210278a4b958ebb{color:#fff;margin-top:var(--spacing-sm)}.rockstargames-modules-core-headerb6afa349a14125fd2210278a4b958ebb ul{justify-content:center;margin:var(margin-xs);padding:0!important}.rockstargames-modules-core-headerb6afa349a14125fd2210278a4b958ebb li{border-bottom:2px solid transparent;font-size:calc(var(--base-rem-size) * 1.25);font-weight:700;list-style:none}.rockstargames-modules-core-headerc22ed7fb01d7e65a14a7913a0459a4e3{padding:var(--padding-sm) var(--padding-md)}", "", {
        version: 3,
        sources: ["webpack://./src/components/NavigationMobile/index.less"],
        names: [],
        mappings: "AAAA,mEACI,UAAA,CACA,4BACJ,CAHA,sEAOQ,sBAAA,CADA,qBAAA,CADA,mBAGR,CARA,sEAYQ,mCAAA,CACA,2CAAA,CACA,eAAA,CAHA,eAGR,CAIA,mEACI,2CAFJ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a{align-items:center;background:#282828;bottom:0;color:var(--white-100);display:flex;height:var(--global-navigation-height);justify-content:space-between;left:0;margin:0;padding:0 var(--rem-2)!important;position:fixed;right:0}.rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a li{list-style:none}@media (max-width:1023px){.rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a{z-index:100}}@media (min-width:1024px){.rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a{align-items:flex-start;background:var(--black-100);border:1px solid var(--border-color);border-radius:var(--border-radius-md);box-shadow:var(--global-navigation-box-shadow);flex-direction:column;height:auto;overflow:hidden;padding:0!important;position:static}.rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a li{border-bottom:1px solid var(--border-color);width:100%}.rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a li:last-child{border:0}}.rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876{font-size:var(--rem-1);font-weight:700;justify-content:center;letter-spacing:-.025em;line-height:160%;padding:var(--rem-125) 0}.rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876 img{margin-right:var(--rem-05);width:var(--rem-1)}@media (min-width:1024px){.rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876{background-color:var(--black-100);display:flex;font-size:var(--nav-link-size);font-weight:400;justify-content:flex-start;padding:var(--spacing-sm);transition:background-color .3s ease-in-out}.rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876 img{width:var(--nav-icon-size)}.rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876:focus,.rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876:hover{background-color:var(--white-15);outline:none}}", "", {
        version: 3,
        sources: ["webpack://./src/components/QuickAccess/index.less"],
        names: [],
        mappings: "AAAA,mEAUI,kBAAA,CALA,kBAAA,CAHA,QAAA,CAUA,sBAAA,CAHA,YAAA,CAHA,sCAAA,CAKA,6BAAA,CARA,MAAA,CAIA,QAAA,CACA,gCAAA,CAPA,cAAA,CAGA,OASJ,CAbA,sEAeQ,eACR,CAEI,0BAAA,mEACI,WACN,CACF,CACI,0BAAA,mEAGI,sBAAA,CAMA,2BAAA,CAFA,oCAAA,CADA,qCAAA,CAIA,8CAAA,CARA,qBAAA,CAEA,WAAA,CAIA,eAAA,CAHA,mBAAA,CAJA,eAWN,CAZE,sEAcQ,2CAAA,CADA,UAGV,CAAU,iFACI,QAEd,CACF,CAGA,mEAMI,sBAAA,CALA,eAAA,CAGA,sBAAA,CADA,sBAAA,CADA,gBAAA,CAGA,wBAAJ,CALA,uEASQ,0BAAA,CACA,kBADR,CAII,0BAAA,mEAOI,iCAAA,CANA,YAAA,CAGA,8BAAA,CACA,eAAA,CAHA,0BAAA,CACA,yBAAA,CAGA,2CAAN,CANE,uEAUQ,0BADV,CAIM,kJAGI,gCAAA,CADA,YADV,CACF",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o),
        s = n(79908),
        d = n.n(s),
        l = new URL(n(34967), n.b),
        c = i()(r()),
        A = d()(l);
      c.push([e.id, `.rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a{background:url(${A}) no-repeat 50%/contain;cursor:pointer;height:var(--rem-15);position:relative;width:var(--rem-15)}@keyframes rockstargames-modules-core-headerd3d0e9f0a1e1ea78d7e8d9fcb1612218{0%{transform:translate(0)}20%{transform:translate(-2px,3px)}40%{transform:translate(-1px,-1px)}60%{transform:translate(1px,2px)}80%{transform:translate(1px,1px)}to{transform:translate(0)}}@keyframes rockstargames-modules-core-headerfa15be44842208bffd77584b859a6ec6{0%{transform:translate(0)}20%{transform:translate(1px,-2px)}40%{transform:translate(-1px,1px)}60%{transform:translate(-1px,-1px)}80%{transform:translateY(1px)}to{transform:translate(0)}}.rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:after,.rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:before{background:url(${A}) no-repeat 50%/contain;content:"";display:block;height:100%;left:0;opacity:0;position:absolute;text-transform:uppercase;top:0;transition:filter .1s;width:100%}.rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:before{z-index:-1}.rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:after{z-index:-2}.rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:hover:after,.rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:hover:before{opacity:1}.rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:hover:before{animation:rockstargames-modules-core-headerd3d0e9f0a1e1ea78d7e8d9fcb1612218 .4s 2 both;filter:invert(55%) sepia(80%) saturate(301%) hue-rotate(148deg) brightness(93%) contrast(91%)}.rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a:hover:after{animation:rockstargames-modules-core-headerfa15be44842208bffd77584b859a6ec6 .4s 2 both;filter:invert(48%) sepia(83%) saturate(4695%) hue-rotate(329deg) brightness(84%) contrast(107%)}@media (max-width:1023px){.rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a{pointer-events:none}}`, "", {
        version: 3,
        sources: ["webpack://./src/components/RockstarLogo/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,mEA2CI,wEAAA,CAIA,cAAA,CAFA,oBAAA,CADA,iBAAA,CAEA,mBAXJ,CAlCI,6EACI,GACI,sBAoCV,CAlCM,IACI,6BAoCV,CAlCM,IACI,8BAoCV,CAlCM,IACI,4BAoCV,CAlCM,IACI,4BAoCV,CAlCM,GACI,sBAoCV,CACF,CAlCI,6EACI,GACI,sBAoCV,CAlCM,IACI,6BAoCV,CAlCM,IACI,6BAoCV,CAlCM,IACI,8BAoCV,CAlCM,IACI,yBAoCV,CAlCM,GACI,sBAoCV,CACF,CA1BI,mJAII,wEAAA,CADA,UAAA,CADA,aAAA,CAOA,WAAA,CADA,MAAA,CAIA,SAAA,CANA,iBAAA,CADA,wBAAA,CAEA,KAAA,CAIA,qBAAA,CADA,UA8BR,CA1BI,0EACI,UA4BR,CA1BI,yEACI,UA4BR,CAzBQ,+JAEI,SA2BZ,CAzBQ,gFACI,sFAAA,CACA,6FA2BZ,CAvBQ,+EACI,sFAAA,CACA,+FAyBZ,CChDI,0BAAA,mED6BI,mBAuBN,CACF",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac:focus,.rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac.rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac.rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e img{filter:invert()}.rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f:focus,.rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f.rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f.rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e img{filter:invert()}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/Search/components/PillButton/index.less"],
        names: [],
        mappings: "AA2QA,mEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,uEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,kJAEI,gCAAA,CACA,YC/OR,CDkPI,qIAEI,2BAAA,CADA,sBC/OR,CD8OI,yIAKQ,eChPZ,CAjEA,mED8QI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CCzMJ,CApFA,uEDiSQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BCxMR,CD4MI,kJAEI,gCAAA,CACA,YC1MR,CD6MI,qIAEI,2BAAA,CADA,sBC1MR,CDyMI,yIAKQ,eC3MZ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerb14c9a28c3b2b3a58eb8a465f480fd60{background:transparent;border:none;height:var(--rem-125);padding:0;width:var(--rem-125)}.rockstargames-modules-core-headerb14c9a28c3b2b3a58eb8a465f480fd60 img{height:100%;width:100%}.rockstargames-modules-core-headerb14c9a28c3b2b3a58eb8a465f480fd60:hover{cursor:pointer}.rockstargames-modules-core-headerce9e8c7dd9562ae75b9543b27f740642{background:linear-gradient(0deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,.15)),#000;border-bottom:1px solid var(--border-color);box-shadow:var(--global-navigation-box-shadow);display:flex;justify-content:center;left:0;position:absolute;top:var(--global-navigation-height);width:100%}.rockstargames-modules-core-headerb6ffd9ebe8ffa3ac0f4e248ca522036b{align-items:center;display:flex;gap:var(--grid-gap-static-xs);max-width:1920px;padding:var(--padding-sm) var(--padding-sides);width:100%}.rockstargames-modules-core-headerdeb8b97cd5fbb70486ad3c025601d43d button{background:transparent;border:none;display:block;padding:0}.rockstargames-modules-core-headerea7dbbd5e60585f29ab22be3d18988fd button,.rockstargames-modules-core-headerdeb8b97cd5fbb70486ad3c025601d43d button,.rockstargames-modules-core-headerdeb8b97cd5fbb70486ad3c025601d43d img{height:var(--rem-15);width:var(--rem-15)}.rockstargames-modules-core-headerea7dbbd5e60585f29ab22be3d18988fd button{background:transparent;border:none;cursor:pointer;display:block;margin-left:var(--rem-15);padding:0}.rockstargames-modules-core-headerea7dbbd5e60585f29ab22be3d18988fd img{height:var(--rem-15);width:var(--rem-15)}.rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f{flex-grow:1;margin-right:var(--margin-md)}.rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f input{background:linear-gradient(0deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,.15)),#000;border:1px solid transparent;color:var(--white-100);font-family:var(--font-family-h);font-size:1.5rem;font-style:normal;font-weight:700;height:100%;letter-spacing:-.025em;line-height:100%;outline:0;width:100%}.rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f input::-moz-placeholder{color:var(--text-light);opacity:1}.rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f input::placeholder{color:var(--text-light);opacity:1}.rockstargames-modules-core-headerf1bedf210587b5186fca4d243f05a1aa{align-items:flex-start;display:flex;gap:var(--grid-gap-xs)}.rockstargames-modules-core-headerc3e3363c5e7b53755b9c9afcc262ccb6{background:#c00;padding:var(--margin-xs) var(--padding-lg)}", "", {
        version: 3,
        sources: ["webpack://./src/components/Search/modules/Desktop/index.less"],
        names: [],
        mappings: "AAAA,mEACI,sBAAA,CACA,WAAA,CAGA,qBAAA,CAFA,SAAA,CACA,oBAEJ,CANA,uEASQ,WAAA,CADA,UAER,CAEI,yEACI,cAAR,CAIA,mEASI,6EAAA,CAFA,2CAAA,CACA,8CAAA,CANA,YAAA,CACA,sBAAA,CAEA,MAAA,CAJA,iBAAA,CAGA,mCAAA,CAEA,UACJ,CAUA,mEAKI,kBAAA,CADA,YAAA,CAEA,6BAAA,CAJA,gBAAA,CACA,8CAAA,CAFA,UAHJ,CAWA,0EAEQ,sBAAA,CACA,WAAA,CAIA,aAAA,CADA,SATR,CAmBA,2NAXQ,oBAAA,CADA,mBAOR,CAKA,0EAEQ,sBAAA,CACA,WAAA,CAMA,cAAA,CAFA,aAAA,CACA,yBAAA,CAFA,SAXR,CAKA,uEAcQ,oBAAA,CADA,mBAdR,CAmBA,mEACI,WAAA,CACA,6BAjBJ,CAeA,yEAOQ,6EAAA,CAMA,4BAAA,CAEA,sBAAA,CACA,gCAAA,CACA,gBAAA,CACA,iBAAA,CACA,eAAA,CAbA,WAAA,CAgBA,sBAAA,CAFA,gBAAA,CACA,SAAA,CAhBA,UANR,CA6BQ,2FACI,uBAAA,CACA,SA3BZ,CAyBQ,sFACI,uBAAA,CACA,SA3BZ,CAgCA,mEAEI,sBAAA,CADA,YAAA,CAEA,sBA9BJ,CAiCA,mEAEI,eAAA,CADA,0CA9BJ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, '.rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1{align-items:center;background:#282828;color:#fff;display:flex;gap:var(--grid-gap-static-xs);justify-content:space-between;padding:var(--padding-xs) var(--padding-md)}.rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1 input{background:transparent;border:0;color:inherit;font-size:var(--rem-1)}.rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1 input::-moz-placeholder{color:var(--text-light);opacity:1}.rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1 input::placeholder{color:var(--text-light);opacity:1}.rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1 input[type=text]{flex-grow:1;padding:var(--padding-xs) 0}.rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1 img{display:block;height:var(--nav-icon-size);width:var(--nav-icon-size)}.rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1 button{background:transparent;border:0;padding:0}.rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd{border-bottom:1px solid var(--blacks-border-color);position:relative}.rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd:after,.rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd:before{bottom:0;content:"";opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .2s ease-in-out;width:var(--rem-4);z-index:1}.rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd:before{background:linear-gradient(-90deg,transparent 20%,var(--black-200) 100%);left:0}.rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd:after{background:linear-gradient(90deg,transparent 20%,var(--black-200) 100%);opacity:1;right:0}.rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd.rockstargames-modules-core-headere3fe68b0501338fe7b3cbed75b1773c8:before{opacity:1}.rockstargames-modules-core-headerc11370021ff4c9655878886a3a69c746{grid-gap:var(--grid-gap-xs);-ms-overflow-style:none;display:flex;max-width:100%;overflow-x:scroll;padding:var(--mobile-nav-item-padding);position:relative;scrollbar-width:none}.rockstargames-modules-core-headerc11370021ff4c9655878886a3a69c746 button{font-size:16px}.rockstargames-modules-core-headerc11370021ff4c9655878886a3a69c746::-webkit-scrollbar{display:none}.rockstargames-modules-core-headerbf16fe605728a09b0a5c269d57371bfa{background:#c00;padding:12px 32px}', "", {
        version: 3,
        sources: ["webpack://./src/components/Search/modules/Mobile/index.less"],
        names: [],
        mappings: "AAAA,mEAMI,kBAAA,CALA,kBAAA,CAMA,UAAA,CALA,YAAA,CAEA,6BAAA,CADA,6BAAA,CAEA,2CAGJ,CARA,yEAWQ,sBAAA,CADA,QAAA,CAEA,aAAA,CACA,sBACR,CACQ,2FACI,uBAAA,CACA,SACZ,CAHQ,sFACI,uBAAA,CACA,SACZ,CAEQ,oFACI,WAAA,CACA,2BAAZ,CAtBA,uEA2BQ,aAAA,CACA,2BAAA,CACA,0BAFR,CA3BA,0EAmCQ,sBAAA,CAFA,QAAA,CACA,SAFR,CAOA,mEAEI,kDAAA,CADA,iBAJJ,CAOI,mJAOI,QAAA,CALA,UAAA,CAMA,SAAA,CAJA,mBAAA,CADA,iBAAA,CAGA,KAAA,CAGA,kCAAA,CAJA,kBAAA,CAKA,SALR,CAQI,0EAEI,wEAAA,CADA,MALR,CAaI,yEAGI,uEAAA,CAFA,SAAA,CACA,OAVR,CAkBI,4IACI,SAhBR,CAoBA,mEAKI,2BAAA,CAOA,uBAAA,CAXA,YAAA,CAEA,cAAA,CACA,iBAAA,CAFA,sCAAA,CAIA,iBAAA,CAOA,oBAvBJ,CAUA,0EASQ,cAhBR,CAsBI,sFACI,YApBR,CAwBA,mEAEI,eAAA,CADA,iBArBJ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerbf9f9a25ea6f9aa44b4b2ab52512e335{background:var(--black-100);box-shadow:var(--global-navigation-box-shadow);right:0;z-index:99}.rockstargames-modules-core-headerbbd3cc8e4460000b11ca8ef9b0eee345,.rockstargames-modules-core-headerbf9f9a25ea6f9aa44b4b2ab52512e335{display:none;left:0;position:absolute;top:var(--global-navigation-height);width:100%}.rockstargames-modules-core-headerbbd3cc8e4460000b11ca8ef9b0eee345{height:100vh}.rockstargames-modules-core-headerb5c4f53ad11e76bbf9b1324c766560ad{display:block}", "", {
        version: 3,
        sources: ["webpack://./src/components/SecondaryNavigationSlide/index.less"],
        names: [],
        mappings: "AAAA,mEAOI,2BAAA,CACA,8CAAA,CAHA,OAAA,CAIA,UACJ,CAEA,sIAXI,YAAA,CAGA,MAAA,CADA,iBAAA,CAGA,mCAAA,CAJA,UAgBJ,CANA,mEAGI,YAGJ,CAGA,mEACI,aADJ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headercc10478657fa254e4e3449bce7c07d2d{align-items:center;gap:var(--rem-075);height:var(--rem-15)}.rockstargames-modules-core-headerd6ca505694953416f6cfd919ef1904e1,.rockstargames-modules-core-headercc10478657fa254e4e3449bce7c07d2d{display:flex}.rockstargames-modules-core-headerc2788a414e74cc6eecfa96c0dc4ffac8{background-color:var(--white-40);height:100%;width:1px}.rockstargames-modules-core-headeref547bd473dcff449cc4d72700b35e3a{align-items:center;display:flex;height:100%}.rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e{height:var(--brand-logo-height,100%);max-height:var(--rem-15);max-width:50vw;width:auto}.rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e[data-brand=gta-plus]{--brand-logo-height:130%;margin-bottom:20%;max-height:none}.rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e[data-brand=careers]{--brand-logo-height:70%}@media screen and (min-width:1024px){.rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e{max-width:20vw}}.rockstargames-modules-core-headera8caa9bacc7f74ef9bd86698de9ff08c{background:none;border:none;padding:0}.rockstargames-modules-core-headerd6bd4cea9554313294cb18d1478da1ca{min-width:var(--sub-nav-min-width);z-index:1}", "", {
        version: 3,
        sources: ["webpack://./src/components/SiteTitle/index.less"],
        names: [],
        mappings: "AAEA,mEAGI,kBAAA,CACA,kBAAA,CAFA,oBAgCJ,CA3BA,sIANI,YAoCJ,CA1BA,mEACI,gCAAA,CACA,WAAA,CACA,SA4BJ,CAzBA,mEAGI,kBAAA,CAFA,YAAA,CACA,WA4BJ,CAxBA,mEAYI,oCAAA,CACA,wBAAA,CACA,cAAA,CAHA,UAmBJ,CA7BI,wFACI,wBAAA,CACA,iBAAA,CACA,eA+BR,CA5BI,uFACI,uBA8BR,CAtBI,qCAAA,mEACI,cAyBN,CACF,CAtBA,mEACI,eAAA,CACA,WAAA,CACA,SAwBJ,CArBA,mEAEI,kCAAA,CADA,SAwBJ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13{background:transparent;border-style:none;border-bottom:1px solid var(--blacks-border-color);color:var(--white-100);cursor:pointer;font-family:var(--font-family-body);font-size:16px;font-style:normal;font-weight:400;gap:var(--grid-gap-sm);letter-spacing:-.025em;line-height:160%;padding:var(--grid-gap-sm);text-align:left;transition:background-color .3s ease-in-out;width:100%}.rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13:focus,.rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13:hover{background-color:var(--white-15)}.rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13:last-child{border:none}", "", {
        version: 3,
        sources: ["webpack://./src/components/SubMenu/components/SubMenuButton/index.less"],
        names: [],
        mappings: "AAAA,mEACI,sBAAA,CAGA,iBAAA,CAYA,kDAAA,CAXA,sBAAA,CAcA,cAAA,CAbA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAMA,sBAAA,CAJA,sBAAA,CADA,gBAAA,CAIA,0BAAA,CAXA,eAAA,CAcA,2CAAA,CAfA,UAeJ,CAII,kJAEI,gCAFR,CAII,8EACI,WAFR",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerbe98900eb9861a339ca26cd5c23795c2{background:transparent;border-bottom:1px solid var(--blacks-border-color);width:100%}.rockstargames-modules-core-headerbe98900eb9861a339ca26cd5c23795c2.rockstargames-modules-core-headerb83b9fbed333ffb6cc89eb40ce1f258e{border-bottom:none}.rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8{background:transparent;background:hsla(0,0%,100%,0);border:none;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:var(--nav-link-size);font-weight:400;gap:var(--grid-gap-sm);justify-content:space-between;padding:var(--grid-gap-sm);transition:background-color .3s ease-in-out;width:100%}.rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8.rockstargames-modules-core-headerb83b9fbed333ffb6cc89eb40ce1f258e{border-bottom:none;border-radius:4px;font-family:var(--font-family-body);padding:0;padding:var(--padding-xs)}.rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8:hover{background-color:var(--white-15)}.rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8 img{transition:transform .2s ease-in-out}.rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8.rockstargames-modules-core-headerb232c7352afb473e20d474f81db87a11 img{transform:rotate(180deg)}.rockstargames-modules-core-headerb78556b7ba42b398bc55bf4720f9eee5{height:var(--nav-icon-size);width:var(--nav-icon-size)}.rockstargames-modules-core-headerf54f4c00ab7b5e6ab645951063e44b9e{align-items:flex-start;align-self:stretch;display:flex;flex-direction:column;gap:var(--padding-xxs);margin:0 var(--padding-xs) var(--padding-sm) var(--sub-nav-indent);overflow:hidden}", "", {
        version: 3,
        sources: ["webpack://./src/components/SubMenu/components/SubMenuDropdown/index.less"],
        names: [],
        mappings: "AAAA,mEACI,sBAAA,CACA,kDAAA,CACA,UACJ,CACI,qIACI,kBACR,CAGA,mEAEI,sBAAA,CAcA,4BAAA,CAfA,WAAA,CAUA,sBAAA,CALA,cAAA,CAHA,YAAA,CASA,mCAAA,CACA,8BAAA,CACA,eAAA,CATA,sBAAA,CAIA,6BAAA,CALA,0BAAA,CAWA,2CAAA,CAPA,UAKJ,CAKI,qIAEI,kBAAA,CAEA,iBAAA,CACA,mCAAA,CAJA,SAAA,CAEA,yBADR,CAMI,yEACI,gCAJR,CAvBA,uEA+BQ,oCALR,CAQI,yIAEQ,wBAPZ,CAYA,mEAEI,2BAAA,CADA,0BATJ,CAaA,mEAII,sBAAA,CACA,kBAAA,CAJA,YAAA,CAEA,qBAAA,CAGA,sBAAA,CAJA,kEAAA,CAKA,eAXJ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5{align-items:center;background:transparent;background-color:hsla(0,0%,100%,0);border-bottom:1px solid var(--blacks-border-color,#282828);color:var(--white-100);display:flex;font-family:var(--font-family-body);font-size:var(--nav-link-size);font-style:normal;font-weight:400;gap:var(--spacing-sm);justify-content:space-between;padding:var(--spacing-sm);transition:background-color .3s ease-in-out;width:100%}.rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5 img{height:var(--nav-icon-size);width:var(--nav-icon-size)}.rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5.rockstargames-modules-core-headera81cbcdbdd397a2a286c23049697987b{border-bottom:none;border-radius:4px;margin-right:var(--margin-xs);padding:var(--padding-xs)}.rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5:focus,.rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5:hover{background-color:var(--white-15)}.rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5:last-child{border:none}", "", {
        version: 3,
        sources: ["webpack://./src/components/SubMenu/components/SubMenuItem/index.less"],
        names: [],
        mappings: "AAAA,mEAGI,kBAAA,CACA,sBAAA,CAaA,kCAAA,CAFA,0DAAA,CARA,sBAAA,CANA,YAAA,CAOA,mCAAA,CACA,8BAAA,CACA,iBAAA,CACA,eAAA,CAEA,qBAAA,CAXA,6BAAA,CAYA,yBAAA,CAEA,2CAAA,CAXA,UAWJ,CAhBA,uEAqBQ,2BAAA,CADA,0BAAR,CAII,qIAGI,kBAAA,CACA,iBAAA,CAFA,6BAAA,CADA,yBACR,CAKI,kJAEI,gCAHR,CAMI,8EACI,WAJR",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513:focus,.rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513.rockstargames-modules-core-headerdc9de673c49d945b85a20bf5e859500a{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513.rockstargames-modules-core-headerdc9de673c49d945b85a20bf5e859500a img{filter:invert()}.rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7{align-items:flex-start;background:var(--black-100);border:1px solid var(--blacks-border-color);border-radius:var(--border-radius-md);box-shadow:var(--global-navigation-box-shadow);display:inline-flex;flex-direction:column;max-height:calc(100vh - 16px - var(--global-navigation-height));max-height:calc(100dvh - 16px - var(--global-navigation-height));min-width:var(--sub-nav-min-width);opacity:0;overflow-y:auto;scrollbar-color:var(--scroll-thumb-color) var(--scroll-track-color);scrollbar-width:auto;transition:opacity .3s ease-in-out;z-index:999}.rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7::-webkit-scrollbar{width:8px}.rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7::-webkit-scrollbar-track{background:transparent}.rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7::-webkit-scrollbar-thumb{background-color:var(--scroll-thumb-color);border:none;border-radius:10px}.rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7 a[data-ui-name=sub-menu-item]:focus-visible,.rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7 div[data-ui-name=sub-menu-item] button:focus-visible{background-color:var(--white-15);border:1px solid var(--white-100);border-radius:6px;outline:none}.rockstargames-modules-core-headerae886af8e4ee1f3fa82f58141f31dccb{opacity:1}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/SubMenu/index.less"],
        names: [],
        mappings: "AA2QA,mEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,uEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,kJAEI,gCAAA,CACA,YC/OR,CDkPI,qIAEI,2BAAA,CADA,sBC/OR,CD8OI,yIAKQ,eChPZ,CAjEA,mEAKI,sBAAA,CAGA,2BAAA,CADA,2CAAA,CADA,qCAAA,CAKA,8CAAA,CARA,mBAAA,CACA,qBAAA,CAQA,+DAAA,CACA,gEAAA,CAJA,kCAAA,CAOA,SAAA,CAFA,eAAA,CDoUA,mEAAA,CADA,oBAAA,CChUA,kCAAA,CAFA,WAsEJ,CDgQI,sFACI,SC9PR,CDgQI,4FACI,sBC9PR,CDgQI,4FACI,0CAAA,CAEA,WAAA,CADA,kBC7PR,CA3EQ,uOAII,gCAAA,CAFA,iCAAA,CACA,iBAAA,CAFA,YAiFZ,CAzEA,mEACI,SA2EJ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerc02f6922f08136a6e751eed320862016{overflow:hidden}.rockstargames-modules-core-headerf24a7f458786bb57d5a3bc334c6355fc{align-items:center;background-color:initial;border:none;border-radius:0;color:inherit;color:var(--white-100);display:flex;font-size:var(--nav-link-size);font-style:normal;font-weight:700;justify-content:space-between;letter-spacing:-.025em;line-height:100%;padding:var(--padding-sm) var(--padding-md);text-decoration:none;width:100%}.rockstargames-modules-core-headerf24a7f458786bb57d5a3bc334c6355fc img{transition:transform .2s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-headerf24a7f458786bb57d5a3bc334c6355fc.rockstargames-modules-core-headerbb4494f77dcd9ffda130e4e916bdb05d img{transform:rotate(180deg)}.rockstargames-modules-core-headerbf4e902d509c225732afae50338dd4c0{margin-left:var(--sub-nav-indent);overflow:hidden}", "", {
        version: 3,
        sources: ["webpack://./src/components/SubMenuMobile/components/SubMenuDropdownMobile/index.less"],
        names: [],
        mappings: "AAAA,mEACI,eACJ,CAEA,mEAKI,kBAAA,CAMA,wBAAA,CAEA,WAAA,CACA,eAAA,CAFA,aAAA,CAIA,sBAAA,CAdA,YAAA,CADA,8BAAA,CAOA,iBAAA,CAEA,eAAA,CANA,6BAAA,CAGA,sBAAA,CADA,gBAAA,CAHA,2CAAA,CAMA,oBAAA,CAMA,UACJ,CAhBA,uEAoBQ,oCAAA,CADA,0BACR,CAGI,yIAEQ,wBAFZ,CAOA,mEAEI,iCAAA,CADA,eAJJ",
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
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
      var t = n(42587),
        r = n.n(t),
        o = n(15081),
        i = n.n(o)()(r());
      i.push([e.id, ".rockstargames-modules-core-headerad11bebe60eb9c08d9bb91f941f50d2a{margin:0 0 0 var(--sub-nav-indent);overflow:hidden}", "", {
        version: 3,
        sources: ["webpack://./src/components/SubMenuMobile/index.less"],
        names: [],
        mappings: "AAAA,mEAEI,kCAAA,CADA,eAEJ",
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