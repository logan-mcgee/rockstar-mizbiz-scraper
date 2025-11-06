try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3fc0cfd7-9573-46a1-a24a-e25903999357", e._sentryDebugIdIdentifier = "sentry-dbid-3fc0cfd7-9573-46a1-a24a-e25903999357")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6191], {
    42328: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        useGtmTrack: () => r.h,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => s.A
      });
      var r = a(93635),
        s = a(54709)
    },
    54709: (e, t, a) => {
      a.d(t, {
        A: () => y,
        K: () => f
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
          key: "currentCharIdReactive",
          value: (0, r.makeVar)((0, r.webSettingsReactive)()?.currentCharId)
        }),
        u = e => i(e),
        l = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        d = e => l(e),
        f = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        p = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        h = e => p(e),
        k = (0, r.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        m = e => k(e),
        g = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        v = e => g(e),
        y = () => {
          const e = (0, r.useReactiveVar)(p),
            t = (0, r.useReactiveVar)(k),
            a = (0, r.useReactiveVar)(i),
            f = (0, r.useReactiveVar)(s),
            y = (0, r.useReactiveVar)(l);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            navOpen: f,
            userData: (0, r.useReactiveVar)(g),
            selectedCharacterTuple: y,
            jumpScMenuFocus: (0, r.useReactiveVar)(c),
            setCharactersNeeded: h,
            setCrewsNeeded: m,
            setCurrentCharId: u,
            setNavOpen: n,
            setSelectedCharacterTuple: d,
            setUserData: v,
            setJumpScMenuFocus: o
          }
        }
    },
    93635: (e, t, a) => {
      a.d(t, {
        UN: () => l,
        iR: () => b,
        h: () => f,
        Wx: () => x
      });
      var r = a(42295),
        s = a(62229),
        n = a(95966),
        c = a(42328),
        o = a(56088);
      const i = {
          pcalt: "PC",
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        u = (0, n.setContextItem)({
          context: (0, s.createContext)(void 0),
          key: "gtmContext22"
        }),
        l = ({
          checkUser: e,
          children: t
        }) => {
          const a = ((e = !0) => {
              const [t, a] = (0, s.useState)([]), [r, u] = (0, s.useState)([]), [l, d] = (0, s.useState)(null), {
                data: f,
                loggedIn: p
              } = (0, c.useRockstarUser)(), {
                hasGtaPlus: h
              } = f ?? {}, k = (0, o.bn)(), m = (e, r) => {
                const s = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = r ?? {};
                    (0, n.track)({
                      ...e,
                      ...t
                    }), s.push(e)
                  }
                })), a([...t, ...s])
              };
              (0, s.useEffect)((() => {
                if (f && null !== p) {
                  const e = g(f);
                  r.length && e && m(r, e), d(e)
                } else e || r.length && m(r)
              }), [f, p, r]), (0, s.useEffect)((() => {
                const e = r.filter((e => -1 === t.indexOf(e)));
                u(e)
              }), [t]);
              const g = e => {
                const t = [],
                  a = [],
                  r = [],
                  s = [];
                return Object.entries(e?.characters ?? []).forEach((([e, n]) => {
                  n.length && n.forEach((n => {
                    const c = (e => "pcalt" === e ? "pc" : e.toString())(n.platform);
                    if ("gtao" === e) {
                      a.includes(c) || a.push(c), r.includes(c) || "1" !== n.stats?.overview?.hasGtaPlus?.value || r.push(c);
                      const t = `${e}_${n.platform}`;
                      s.includes(t) || s.push(t)
                    }
                    t.includes(c) || t.push(c)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((([e, a]) => {
                  s.push(`${e}_${a}`), t.includes(a) || t.push(a)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: p ?? !1,
                  gta_plus_active: !!p && Boolean(h),
                  platforms_played: t.length ? t.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: k
                }
              };
              return {
                track: e => {
                  const t = "boolean" == typeof p,
                    a = Boolean(f && l);
                  if (!t || !0 === p && !a) {
                    const t = [...r];
                    return t.push({
                      ...e
                    }), u(t)
                  }
                  return (0, n.track)({
                    ...e,
                    ...l
                  })
                }
              }
            })(e),
            l = (0, s.useMemo)((() => a), [a, e]);
          return (0, r.jsx)(u.Provider, {
            value: l,
            children: t
          })
        },
        d = {
          track: () => null
        },
        f = () => (0, s.useContext)(u) ?? d;
      var p = a(54709);
      var h = a(39763),
        k = a.n(h);
      var m = a(58128),
        g = a(25130);
      const v = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: t,
            crewsNeeded: a,
            currentCharId: r
          } = (0, p.A)(), c = (0, n.useRockstarToken)(), [o, i] = (0, s.useState)({
            id: 0,
            avatar: "",
            bearer_token_expired: !0,
            isAMinor: !1,
            isNewAccount: !1,
            nickname: "",
            nonExpiredToken: !1,
            profile_link: "https://",
            accountSynced: !1
          }), [u] = (0, n.useRockstarTokenReactive)(), l = (0, n.useRockstarTokenPing)(), [d, f] = (0, s.useState)(), [h, v] = (0, s.useState)(!1), y = void 0 === d, [w, b] = (0, s.useState)(1);
          return (0, s.useEffect)((() => {
            "gtao" !== t || o?.characters?.gtao || (i((e => ({
              ...e,
              accountSynced: !1
            }))), b((e => e + 1)))
          }), [t, o?.characters?.gtao]), (0, s.useEffect)((() => {
            a && !o?.crews && (i((e => ({
              ...e,
              accountSynced: !1
            }))), b((e => e + 1)))
          }), [a, o?.crews]), (0, s.useEffect)((() => {
            0 === w && i((e => ({
              ...e,
              accountSynced: !0
            })))
          }), [w]), (0, s.useEffect)((() => {
            e && u(e)
          }), [e]), (0, s.useEffect)((() => {
            "" !== c || l()
          }), [c]), (0, s.useEffect)((() => {
            if ("" === c) return;
            const e = !!c;
            if (e || h || ((async () => {
                try {
                  await (async ({
                    token: e
                  }) => {
                    const {
                      gateway: t,
                      silentCheck: a
                    } = (0, n.getConfigForDomain)(), r = {
                      method: "POST",
                      body: `fingerprint=${await k().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, s = await fetch(a, r);
                    if (200 !== s.status) return void e(!1);
                    const c = `${t}?code=${await s.json()}`,
                      o = await fetch(c, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: i
                      } = await o.json();
                    return e(i), i
                  })({
                    token: u
                  })
                } catch (e) {}
              })(), v(!0)), !e && h && f(!1), e) {
              const e = (({
                bearerToken: e
              }) => {
                const t = (0, m.s)(e),
                  {
                    host: a
                  } = (0, n.getConfigForDomain)(),
                  r = parseInt(t.nameid),
                  s = t["scAuth.Nickname"],
                  c = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  o = new Date(t["scAuth.MemberSince"]),
                  i = new Date,
                  u = (0, g.M)(i, o) < 12,
                  l = (new Date).getTime() / 1e3;
                return {
                  id: r,
                  nonExpiredToken: (t?.exp ?? 0) - l > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: u,
                  nickname: s,
                  profile_link: `https://${a}.rockstargames.com/member/${s}?id=${r}`
                }
              })({
                bearerToken: c
              });
              i((t => ({
                ...t,
                ...e
              })))
            }
          }), [c, h]), (0, s.useEffect)((() => {
            (async () => {
              if (d && o && a && !o?.crews && o?.characters) {
                const e = await (async ({
                  pingBearer: e,
                  rockstarId: t
                }) => {
                  const {
                    crews: a
                  } = await (0, n.coreScApiFetch)("crew/forMember", {
                    pingBearer: e,
                    query: {
                      userId: t
                    }
                  });
                  return a
                })({
                  pingBearer: l,
                  rockstarId: o.id
                });
                i((t => ({
                  ...t,
                  crews: e
                }))), b((e => e - 1))
              }
            })()
          }), [o?.nickname, a, d, o?.characters]), (0, s.useEffect)((() => {
            (async () => {
              if (!d || !o || null != o?.hasNotification) return;
              const e = await (async ({
                pingBearer: e
              }) => await (0, n.coreScApiFetch)("notification/count", {
                pingBearer: e
              }))({
                pingBearer: l
              });
              let t = !1;
              e?.count && (t = e.count > 0), i((e => ({
                ...e,
                hasNotification: t
              })))
            })()
          }), [d, o?.hasNotification]), (0, s.useEffect)((() => {
            (async () => {
              if (!d || !o || o?.gamesPlayed) return;
              const e = await (async ({
                pingBearer: e
              }) => {
                const {
                  all: t
                } = await (0, n.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: e
                });
                return t
              })({
                pingBearer: l
              });
              i((t => ({
                ...t,
                gamesPlayed: e
              }))), b((e => e - 1))
            })()
          }), [o?.nickname, d]), (0, s.useEffect)((() => {
            (async () => {
              if (d && o && "gtao" === t && !o?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: t
                } = await (async ({
                  pingBearer: e,
                  nickname: t,
                  rockstarId: a
                }) => {
                  const r = [],
                    s = await (0, n.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: e
                    });
                  await (s?.platforms?.reduce((async (t, a) => {
                    if (await t, ["ps3", "xbox", "xbox360"].includes(a)) return;
                    const s = await (0, n.coreScApiFetch)(`games/gtao/characters?platform=${a}`, {
                      pingBearer: e
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
                      const c = ["ps4", "ps5"].includes(a) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return r.push({
                        ...e,
                        mugshotUrl: c,
                        platform: a
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: c,
                    accounts: o
                  } = await (0, n.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                    pingBearer: e
                  });
                  if (!c || !o.length) return {
                    gtaoCharacters: r,
                    linkedAccounts: []
                  };
                  const i = o[0],
                    {
                      rockstarAccount: u,
                      linkedAccounts: l
                    } = i;
                  if (u?.rockstarId !== a) return {
                    gtaoCharacters: r,
                    linkedAccounts: []
                  };
                  if (!r.length) return {
                    gtaoCharacters: r,
                    linkedAccounts: i.linkedAccounts
                  };
                  const d = t;
                  let f = "",
                    p = "";
                  return l?.map((e => ("xbl" === e?.onlineService ? f = e.userName : "np" === e?.onlineService && (p = e.userName), e))), r.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), r.map(((e, t) => (e.platformUsername = d, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = p || d), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = f || d), e))), {
                    gtaoCharacters: r,
                    linkedAccounts: l
                  }
                })({
                  pingBearer: l,
                  nickname: o.nickname,
                  rockstarId: o.id
                });
                i((a => ({
                  ...a,
                  characters: {
                    ...a.characters,
                    gtao: e
                  },
                  linkedAccounts: t,
                  hasGtaPlus: "1" === e?.[r]?.stats?.overview?.hasGtaPlus?.value
                }))), b((e => e - 1))
              }
            })()
          }), [t, o?.nickname, d]), (0, s.useEffect)((() => {
            o?.id && o?.nonExpiredToken && (f(!0), (0, p.K)(o.id))
          }), [JSON.stringify(o)]), {
            data: o,
            loggedIn: d,
            loading: y
          }
        },
        y = {},
        w = (0, n.setContextItem)({
          context: (0, s.createContext)(y),
          key: "userContext"
        }),
        b = ({
          children: e,
          privateToken: t
        }) => {
          const a = v({
              privateToken: t
            }),
            n = (0, s.useMemo)((() => ({
              ...a,
              privateToken: t,
              hasProvider: !0
            })), [a]);
          return (0, r.jsx)(w.Provider, {
            value: n,
            children: e
          })
        },
        x = () => (0, s.useContext)(w)
    }
  }
]);