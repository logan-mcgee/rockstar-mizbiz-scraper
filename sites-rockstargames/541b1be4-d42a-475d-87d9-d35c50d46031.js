try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "541b1be4-d42a-475d-87d9-d35c50d46031", e._sentryDebugIdIdentifier = "sentry-dbid-541b1be4-d42a-475d-87d9-d35c50d46031")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [686, 8305], {
    21861: (e, t, a) => {
      a.d(t, {
        A: () => b,
        K: () => k
      });
      var r = a(95966);
      const s = (0, r.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, r.makeVar)(null)
        }),
        n = e => s(e),
        c = (0, r.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, r.makeVar)(!1)
        }),
        o = e => c(e),
        i = (0, r.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, r.makeVar)(!1)
        }),
        u = e => i(e),
        d = (0, r.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, r.makeVar)((0, r.webSettingsReactive)()?.currentCharId)
        }),
        l = e => d(e),
        p = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        f = e => p(e),
        k = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        m = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        h = e => m(e),
        g = (0, r.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        v = e => g(e),
        y = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        w = e => y(e),
        b = () => {
          const e = (0, r.useReactiveVar)(m),
            t = (0, r.useReactiveVar)(g),
            a = (0, r.useReactiveVar)(d),
            k = (0, r.useReactiveVar)(s),
            b = (0, r.useReactiveVar)(i),
            x = (0, r.useReactiveVar)(p);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: b,
            navOpen: k,
            userData: (0, r.useReactiveVar)(y),
            selectedCharacterTuple: x,
            jumpScMenuFocus: (0, r.useReactiveVar)(c),
            setCharactersNeeded: h,
            setCrewsNeeded: v,
            setCurrentCharId: l,
            setHasNotifications: u,
            setNavOpen: n,
            setSelectedCharacterTuple: f,
            setUserData: w,
            setJumpScMenuFocus: o
          }
        }
    },
    70344: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        useGtmTrack: () => r.h,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => s.A
      });
      var r = a(83098),
        s = a(21861)
    },
    83098: (e, t, a) => {
      a.d(t, {
        UN: () => d,
        iR: () => b,
        h: () => p,
        Wx: () => x
      });
      var r = a(62229),
        s = a(95966),
        n = a(70344),
        c = a(48539);
      const o = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var i = a(70954);
      const u = (0, s.setContextItem)({
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
              const [t, a] = (0, r.useState)([]), [i, u] = (0, r.useState)([]), [d, l] = (0, r.useState)(null), {
                data: p,
                loggedIn: f
              } = (0, n.useRockstarUser)(), {
                hasGtaPlus: k
              } = p ?? {}, m = (0, c.bn)(), h = (e, r) => {
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
                if (p && null !== f) {
                  const e = g(p);
                  i.length && e && h(i, e), l(e)
                } else e || i.length && h(i)
              }), [p, f, i]), (0, r.useEffect)((() => {
                const e = i.filter((e => -1 === t.indexOf(e)));
                u(e)
              }), [t]);
              const g = e => {
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
                  gta_plus_active: !!f && Boolean(k),
                  platforms_played: t.length ? t.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  const t = "boolean" == typeof f,
                    a = Boolean(p && d);
                  if (!t || !0 === f && !a) {
                    const t = [...i];
                    return t.push({
                      ...e
                    }), u(t)
                  }
                  return (0, s.track)({
                    ...e,
                    ...d
                  })
                }
              }
            }(t),
            l = (0, r.useMemo)((() => d), [d, t]);
          return (0, i.jsx)(u.Provider, {
            value: l,
            children: a
          })
        },
        l = {
          track: () => null
        },
        p = () => (0, r.useContext)(u) ?? l;
      var f = a(21861);
      var k = a(17330),
        m = a.n(k);
      var h = a(39445),
        g = a(53643);
      const v = e => {
          let {
            privateToken: t
          } = e;
          const {
            charactersNeeded: a,
            crewsNeeded: n,
            currentCharId: c
          } = (0, f.A)(), o = (0, s.useRockstarToken)(), [i, u] = (0, r.useState)(), [d] = (0, s.useRockstarTokenReactive)(), l = (0, s.useRockstarTokenPing)(), [p, k] = (0, r.useState)(), [v, y] = (0, r.useState)(!1), w = void 0 === p, [b, x] = (0, r.useState)(1);
          return (0, r.useEffect)((() => {
            "gtao" !== a || i?.characters?.gtao || (u({
              ...i,
              accountSynced: !1
            }), x((e => e + 1)))
          }), [a, i?.characters?.gtao]), (0, r.useEffect)((() => {
            n && !i?.crews && (u({
              ...i,
              accountSynced: !1
            }), x((e => e + 1)))
          }), [n, i?.crews]), (0, r.useEffect)((() => {
            0 === b && u({
              ...i,
              accountSynced: !0
            })
          }), [b]), (0, r.useEffect)((() => {
            t && d(t)
          }), [t]), (0, r.useEffect)((() => {
            "" !== o || l()
          }), [o]), (0, r.useEffect)((() => {
            if ("" === o) return;
            const e = !!o;
            if (e || v || ((async () => {
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
              })(), y(!0)), !e && v && k(!1), e) {
              const e = (e => {
                let {
                  bearerToken: t
                } = e;
                const a = (0, h.s)(t),
                  {
                    host: r
                  } = (0, s.getConfigForDomain)(),
                  n = parseInt(a.nameid),
                  c = a["scAuth.Nickname"],
                  o = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(a["scAuth.MemberSince"]),
                  u = new Date,
                  d = (0, g.M)(u, i) < 12,
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
          }), [o, v]), (0, r.useEffect)((() => {
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
                  pingBearer: l,
                  rockstarId: i.id
                });
                u({
                  ...i,
                  crews: e
                }), x((e => e - 1))
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
                pingBearer: l
              });
              u({
                ...i,
                gamesPlayed: e
              }), x((e => e - 1))
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
                  const p = a;
                  let f = "",
                    k = "";
                  return l?.map((e => ("xbl" === e?.onlineService ? f = e.userName : "np" === e?.onlineService && (k = e.userName), e))), n.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), n.map(((e, t) => (e.platformUsername = p, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = k || p), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = f || p), e))), {
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
                }), x((e => e - 1))
              }
            })()
          }), [a, i?.nickname, p]), (0, r.useEffect)((() => {
            i?.id && i?.nonExpiredToken && (k(!0), (0, f.K)(i.id))
          }), [JSON.stringify(i)]), {
            data: i,
            loggedIn: p,
            loading: w
          }
        },
        y = {},
        w = (0, s.setContextItem)({
          context: (0, r.createContext)(y),
          key: "userContext"
        }),
        b = e => {
          let {
            children: t,
            privateToken: a
          } = e;
          const s = v({
              privateToken: a
            }),
            n = (0, r.useMemo)((() => ({
              ...s,
              privateToken: a,
              hasProvider: !0
            })), [s]);
          return (0, i.jsx)(w.Provider, {
            value: n,
            children: t
          })
        },
        x = () => (0, r.useContext)(w)
    }
  }
]);