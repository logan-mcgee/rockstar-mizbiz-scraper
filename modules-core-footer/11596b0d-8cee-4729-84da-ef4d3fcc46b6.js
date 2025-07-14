try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "11596b0d-8cee-4729-84da-ef4d3fcc46b6", e._sentryDebugIdIdentifier = "sentry-dbid-11596b0d-8cee-4729-84da-ef4d3fcc46b6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [7895], {
    57895: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => u,
        RockstarUserProvider: () => j,
        useGtmTrack: () => l,
        useRockstarUser: () => D,
        useRockstarUserState: () => M
      });
      var r = a(71127),
        s = a(95966),
        n = a(98397);
      const c = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var o = a(25854);
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
              const [t, a] = (0, r.useState)([]), [o, i] = (0, r.useState)([]), [u, d] = (0, r.useState)(null), {
                data: l,
                loggedIn: f
              } = D(), {
                hasGtaPlus: p
              } = l ?? {}, m = (0, n.bn)(), k = (e, r) => {
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
                if (l && null !== f) {
                  const e = h(l);
                  o.length && e && k(o, e), d(e)
                } else e || o.length && k(o)
              }), [l, f, o]), (0, r.useEffect)((() => {
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
                  login_state: f ?? !1,
                  gta_plus_active: !!f && Boolean(p),
                  platforms_played: t.length ? t.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  const t = "boolean" == typeof f,
                    a = Boolean(l && u);
                  if (!t || !0 === f && !a) {
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
            d = (0, r.useMemo)((() => u), [u, t]);
          return (0, o.jsx)(i.Provider, {
            value: d,
            children: a
          })
        },
        d = {
          track: () => null
        },
        l = () => (0, r.useContext)(i) ?? d,
        f = (0, s.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, s.makeVar)(null)
        }),
        p = e => f(e),
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
            r = (0, s.useReactiveVar)(f),
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
            setNavOpen: p,
            setSelectedCharacterTuple: b,
            setUserData: E,
            setJumpScMenuFocus: k
          }
        };
      var T = a(93830),
        V = a.n(T);
      var A = a(4895),
        N = a(71256);
      const P = e => {
          let {
            privateToken: t
          } = e;
          const {
            charactersNeeded: a,
            crewsNeeded: n,
            currentCharId: c
          } = M(), o = (0, s.useRockstarToken)(), [i, u] = (0, r.useState)(), [d] = (0, s.useRockstarTokenReactive)(), l = (0, s.useRockstarTokenPing)(), [f, p] = (0, r.useState)(), [m, k] = (0, r.useState)(!1), h = void 0 === f, [g, v] = (0, r.useState)(1);
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
            t && d(t)
          }), [t]), (0, r.useEffect)((() => {
            "" !== o || l()
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
                    token: d
                  })
                } catch (e) {}
              })(), k(!0)), !e && m && p(!1), e) {
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
                  d = (0, N.M)(u, i) < 12,
                  l = (new Date).getTime() / 1e3;
                return {
                  id: n,
                  nonExpiredToken: (a?.exp ?? 0) - l > 0,
                  avatar: a["scAuth.AvatarUrl"],
                  bearer_token_expired: a.exp > Date.now(),
                  isAMinor: o,
                  isNewAccount: d,
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
              if (f && i && n && !i?.crews) {
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
                  pingBearer: l,
                  rockstarId: i.id
                });
                u({
                  ...i,
                  crews: e
                }), v((e => e - 1))
              }
            })()
          }), [i?.nickname, n, f]), (0, r.useEffect)((() => {
            (async () => {
              if (!f || !i || i?.gamesPlayed) return;
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
                pingBearer: l
              });
              u({
                ...i,
                gamesPlayed: e
              }), v((e => e - 1))
            })()
          }), [i?.nickname, f]), (0, r.useEffect)((() => {
            (async () => {
              if (f && i && "gtao" === a && !i?.characters?.gtao) {
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
                      rockstarAccount: d,
                      linkedAccounts: l
                    } = u;
                  if (d?.rockstarId !== r) return {
                    gtaoCharacters: n,
                    linkedAccounts: []
                  };
                  if (!n.length) return {
                    gtaoCharacters: n,
                    linkedAccounts: u.linkedAccounts
                  };
                  const f = a;
                  let p = "",
                    m = "";
                  return l?.map((e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (m = e.userName), e))), n.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), n.map(((e, t) => (e.platformUsername = f, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = m || f), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || f), e))), {
                    gtaoCharacters: n,
                    linkedAccounts: l
                  }
                })({
                  pingBearer: l,
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
          }), [a, i?.nickname, f]), (0, r.useEffect)((() => {
            i?.id && i?.nonExpiredToken && (p(!0), C(i.id))
          }), [JSON.stringify(i)]), {
            data: i,
            loggedIn: f,
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