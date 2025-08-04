try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6403ae13-ca73-47ba-940e-623fb9282e79", e._sentryDebugIdIdentifier = "sentry-dbid-6403ae13-ca73-47ba-940e-623fb9282e79")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [6871], {
    66871: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => u,
        RockstarUserProvider: () => j,
        useGtmTrack: () => d,
        useRockstarUser: () => D,
        useRockstarUserState: () => M
      });
      var r = a(62229),
        s = a(95966),
        n = a(48539);
      const c = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var o = a(70954);
      const i = (0, s.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        u = e => {
          let {
            checkUser: t,
            children: a
          } = e;
          const u = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, a] = (0, r.useState)([]), [o, i] = (0, r.useState)([]), [u, l] = (0, r.useState)(null), {
                data: d,
                loggedIn: p
              } = D(), {
                hasGtaPlus: f
              } = d ?? {}, m = (0, n.bn)(), k = (e, r) => {
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
                if (d && null !== p) {
                  const e = h(d);
                  o.length && e && k(o, e), l(e)
                } else e || o.length && k(o)
              }), [d, p, o]), (0, r.useEffect)((() => {
                const e = o.filter((e => -1 === t.indexOf(e)));
                i(e)
              }), [t]);
              const h = e => {
                const t = [],
                  a = [],
                  r = [],
                  s = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [n, c] = e;
                  c.length && c.forEach((e => {
                    const c = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === n) {
                      a.includes(c) || a.push(c), r.includes(c) || "1" !== e.stats?.overview?.hasGtaPlus?.value || r.push(c);
                      const t = `${n}_${e.platform}`;
                      s.includes(t) || s.push(t)
                    }
                    t.includes(c) || t.push(c)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [a, r] = e;
                  s.push(`${a}_${r}`), t.includes(r) || t.push(r)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: p ?? !1,
                  gta_plus_active: !!p && Boolean(f),
                  platforms_played: t.length ? t.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  const t = "boolean" == typeof p,
                    a = Boolean(d && u);
                  if (!t || !0 === p && !a) {
                    const t = [...o];
                    return t.push({
                      ...e
                    }), i(t)
                  }
                  return (0, s.track)({
                    ...e,
                    ...u
                  })
                }
              }
            }(t),
            l = (0, r.useMemo)((() => u), [u, t]);
          return (0, o.jsx)(i.Provider, {
            value: l,
            children: a
          })
        },
        l = {
          track: () => null
        },
        d = () => (0, r.useContext)(i) ?? l,
        p = (0, s.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, s.makeVar)(null)
        }),
        f = e => p(e),
        m = (0, s.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, s.makeVar)(!1)
        }),
        k = e => m(e),
        h = (0, s.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, s.makeVar)(!1)
        }),
        g = e => h(e),
        v = (0, s.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, s.makeVar)((0, s.webSettingsReactive)()?.currentCharId)
        }),
        y = e => v(e),
        w = (0, s.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, s.makeVar)(null)
        }),
        b = e => w(e),
        C = (0, s.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, s.makeVar)(null)
        }),
        x = (0, s.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        _ = e => x(e),
        S = (0, s.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        I = e => S(e),
        R = (0, s.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, s.makeVar)(null)
        }),
        E = e => R(e),
        M = () => {
          const e = (0, s.useReactiveVar)(x),
            t = (0, s.useReactiveVar)(S),
            a = (0, s.useReactiveVar)(v),
            r = (0, s.useReactiveVar)(p),
            n = (0, s.useReactiveVar)(h),
            c = (0, s.useReactiveVar)(w);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: n,
            navOpen: r,
            userData: (0, s.useReactiveVar)(R),
            selectedCharacterTuple: c,
            jumpScMenuFocus: (0, s.useReactiveVar)(m),
            setCharactersNeeded: _,
            setCrewsNeeded: I,
            setCurrentCharId: y,
            setHasNotifications: g,
            setNavOpen: f,
            setSelectedCharacterTuple: b,
            setUserData: E,
            setJumpScMenuFocus: k
          }
        };
      var T = a(17330),
        V = a.n(T);
      var A = a(39445),
        N = a(92302);
      const P = e => {
          let {
            privateToken: t
          } = e;
          const {
            charactersNeeded: a,
            crewsNeeded: n,
            currentCharId: c
          } = M(), o = (0, s.useRockstarToken)(), [i, u] = (0, r.useState)(), [l] = (0, s.useRockstarTokenReactive)(), d = (0, s.useRockstarTokenPing)(), [p, f] = (0, r.useState)(), [m, k] = (0, r.useState)(!1), h = void 0 === p, [g, v] = (0, r.useState)(1);
          return (0, r.useEffect)((() => {
            "gtao" !== a || i?.characters?.gtao || (u({
              ...i,
              accountSynced: !1
            }), v((e => e + 1)))
          }), [a, i?.characters?.gtao]), (0, r.useEffect)((() => {
            n && !i?.crews && (u({
              ...i,
              accountSynced: !1
            }), v((e => e + 1)))
          }), [n, i?.crews]), (0, r.useEffect)((() => {
            0 === g && u({
              ...i,
              accountSynced: !0
            })
          }), [g]), (0, r.useEffect)((() => {
            t && l(t)
          }), [t]), (0, r.useEffect)((() => {
            "" !== o || d()
          }), [o]), (0, r.useEffect)((() => {
            if ("" === o) return;
            const e = !!o;
            if (e || m || ((async () => {
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
                      body: `fingerprint=${await V().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, c = await fetch(r, n);
                    if (200 !== c.status) return void t(!1);
                    const o = `${a}?code=${await c.json()}`,
                      i = await fetch(o, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: u
                      } = await i.json();
                    return t(u), u
                  })({
                    token: l
                  })
                } catch (e) {}
              })(), k(!0)), !e && m && f(!1), e) {
              const e = (e => {
                let {
                  bearerToken: t
                } = e;
                const a = (0, A.s)(t),
                  {
                    host: r
                  } = (0, s.getConfigForDomain)(),
                  n = parseInt(a.nameid),
                  c = a["scAuth.Nickname"],
                  o = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(a["scAuth.MemberSince"]),
                  u = new Date,
                  l = (0, N.M)(u, i) < 12,
                  d = (new Date).getTime() / 1e3;
                return {
                  id: n,
                  nonExpiredToken: (a?.exp ?? 0) - d > 0,
                  avatar: a["scAuth.AvatarUrl"],
                  bearer_token_expired: a.exp > Date.now(),
                  isAMinor: o,
                  isNewAccount: l,
                  nickname: c,
                  profile_link: `https://${r}.rockstargames.com/member/${c}?id=${n}`
                }
              })({
                bearerToken: o
              });
              u({
                ...i,
                ...e
              })
            }
          }), [o, m]), (0, r.useEffect)((() => {
            (async () => {
              if (p && i && n && !i?.crews) {
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
                  pingBearer: d,
                  rockstarId: i.id
                });
                u({
                  ...i,
                  crews: e
                }), v((e => e - 1))
              }
            })()
          }), [i?.nickname, n, p]), (0, r.useEffect)((() => {
            (async () => {
              if (!p || !i || i?.gamesPlayed) return;
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
                pingBearer: d
              });
              u({
                ...i,
                gamesPlayed: e
              }), v((e => e - 1))
            })()
          }), [i?.nickname, p]), (0, r.useEffect)((() => {
            (async () => {
              if (p && i && "gtao" === a && !i?.characters?.gtao) {
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
                    c = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  await (c?.platforms?.reduce((async (e, a) => {
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
                      const c = ["ps4", "ps5"].includes(a) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return n.push({
                        ...e,
                        mugshotUrl: c,
                        platform: a
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: o,
                    accounts: i
                  } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${a}&maxFriends=0`, {
                    pingBearer: t
                  });
                  if (!o || !i.length) return {
                    gtaoCharacters: n,
                    linkedAccounts: []
                  };
                  const u = i[0],
                    {
                      rockstarAccount: l,
                      linkedAccounts: d
                    } = u;
                  if (l?.rockstarId !== r) return {
                    gtaoCharacters: n,
                    linkedAccounts: []
                  };
                  if (!n.length) return {
                    gtaoCharacters: n,
                    linkedAccounts: u.linkedAccounts
                  };
                  const p = a;
                  let f = "",
                    m = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? f = e.userName : "np" === e?.onlineService && (m = e.userName), e))), n.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), n.map(((e, t) => (e.platformUsername = p, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = m || p), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = f || p), e))), {
                    gtaoCharacters: n,
                    linkedAccounts: d
                  }
                })({
                  pingBearer: d,
                  nickname: i.nickname,
                  rockstarId: i.id
                });
                u({
                  ...i,
                  characters: {
                    ...i.characters,
                    gtao: e
                  },
                  linkedAccounts: t,
                  hasGtaPlus: "1" === e?.[c]?.stats?.overview?.hasGtaPlus?.value
                }), v((e => e - 1))
              }
            })()
          }), [a, i?.nickname, p]), (0, r.useEffect)((() => {
            i?.id && i?.nonExpiredToken && (f(!0), C(i.id))
          }), [JSON.stringify(i)]), {
            data: i,
            loggedIn: p,
            loading: h
          }
        },
        U = {},
        B = (0, s.setContextItem)({
          context: (0, r.createContext)(U),
          key: "userContext"
        }),
        j = e => {
          let {
            children: t,
            privateToken: a
          } = e;
          const s = P({
              privateToken: a
            }),
            n = (0, r.useMemo)((() => ({
              ...s,
              privateToken: a,
              hasProvider: !0
            })), [s]);
          return (0, o.jsx)(B.Provider, {
            value: n,
            children: t
          })
        },
        D = () => (0, r.useContext)(B)
    }
  }
]);