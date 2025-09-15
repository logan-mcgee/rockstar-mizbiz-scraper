try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "91a2ae12-8bf8-4d7a-bbe7-314b4b06d5aa", e._sentryDebugIdIdentifier = "sentry-dbid-91a2ae12-8bf8-4d7a-bbe7-314b4b06d5aa")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4033], {
    42328: (e, a, t) => {
      t.r(a), t.d(a, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        useGtmTrack: () => r.h,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => s.A
      });
      var r = t(60438),
        s = t(54709)
    },
    54709: (e, a, t) => {
      t.d(a, {
        A: () => b,
        K: () => h
      });
      var r = t(95966);
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
        f = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        p = e => f(e),
        h = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        k = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        m = e => k(e),
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
          const e = (0, r.useReactiveVar)(k),
            a = (0, r.useReactiveVar)(g),
            t = (0, r.useReactiveVar)(d),
            h = (0, r.useReactiveVar)(s),
            b = (0, r.useReactiveVar)(i),
            x = (0, r.useReactiveVar)(f);
          return {
            charactersNeeded: e,
            crewsNeeded: a,
            currentCharId: t,
            hasNotifications: b,
            navOpen: h,
            userData: (0, r.useReactiveVar)(y),
            selectedCharacterTuple: x,
            jumpScMenuFocus: (0, r.useReactiveVar)(c),
            setCharactersNeeded: m,
            setCrewsNeeded: v,
            setCurrentCharId: l,
            setHasNotifications: u,
            setNavOpen: n,
            setSelectedCharacterTuple: p,
            setUserData: w,
            setJumpScMenuFocus: o
          }
        }
    },
    60438: (e, a, t) => {
      t.d(a, {
        UN: () => d,
        iR: () => b,
        h: () => f,
        Wx: () => x
      });
      var r = t(42295),
        s = t(71127),
        n = t(95966),
        c = t(42328),
        o = t(72148);
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
        d = ({
          checkUser: e,
          children: a
        }) => {
          const t = ((e = !0) => {
              const [a, t] = (0, s.useState)([]), [r, u] = (0, s.useState)([]), [d, l] = (0, s.useState)(null), {
                data: f,
                loggedIn: p
              } = (0, c.useRockstarUser)(), {
                hasGtaPlus: h
              } = f ?? {}, k = (0, o.bn)(), m = (e, r) => {
                const s = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = r ?? {};
                    (0, n.track)({
                      ...e,
                      ...a
                    }), s.push(e)
                  }
                })), t([...a, ...s])
              };
              (0, s.useEffect)((() => {
                if (f && null !== p) {
                  const e = g(f);
                  r.length && e && m(r, e), l(e)
                } else e || r.length && m(r)
              }), [f, p, r]), (0, s.useEffect)((() => {
                const e = r.filter((e => -1 === a.indexOf(e)));
                u(e)
              }), [a]);
              const g = e => {
                const a = [],
                  t = [],
                  r = [],
                  s = [];
                return Object.entries(e?.characters ?? []).forEach((([e, n]) => {
                  n.length && n.forEach((n => {
                    const c = (e => "pcalt" === e ? "pc" : e.toString())(n.platform);
                    if ("gtao" === e) {
                      t.includes(c) || t.push(c), r.includes(c) || "1" !== n.stats?.overview?.hasGtaPlus?.value || r.push(c);
                      const a = `${e}_${n.platform}`;
                      s.includes(a) || s.push(a)
                    }
                    a.includes(c) || a.push(c)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((([e, t]) => {
                  s.push(`${e}_${t}`), a.includes(t) || a.push(t)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: p ?? !1,
                  gta_plus_active: !!p && Boolean(h),
                  platforms_played: a.length ? a.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: t.length ? t.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: k
                }
              };
              return {
                track: e => {
                  const a = "boolean" == typeof p,
                    t = Boolean(f && d);
                  if (!a || !0 === p && !t) {
                    const a = [...r];
                    return a.push({
                      ...e
                    }), u(a)
                  }
                  return (0, n.track)({
                    ...e,
                    ...d
                  })
                }
              }
            })(e),
            d = (0, s.useMemo)((() => t), [t, e]);
          return (0, r.jsx)(u.Provider, {
            value: d,
            children: a
          })
        },
        l = {
          track: () => null
        },
        f = () => (0, s.useContext)(u) ?? l;
      var p = t(54709);
      var h = t(39763),
        k = t.n(h);
      var m = t(58128),
        g = t(25130);
      const v = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: a,
            crewsNeeded: t,
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
          }), [u] = (0, n.useRockstarTokenReactive)(), d = (0, n.useRockstarTokenPing)(), [l, f] = (0, s.useState)(), [h, v] = (0, s.useState)(!1), y = void 0 === l, [w, b] = (0, s.useState)(1);
          return (0, s.useEffect)((() => {
            "gtao" !== a || o?.characters?.gtao || (i((e => ({
              ...e,
              accountSynced: !1
            }))), b((e => e + 1)))
          }), [a, o?.characters?.gtao]), (0, s.useEffect)((() => {
            t && !o?.crews && (i((e => ({
              ...e,
              accountSynced: !1
            }))), b((e => e + 1)))
          }), [t, o?.crews]), (0, s.useEffect)((() => {
            0 === w && i((e => ({
              ...e,
              accountSynced: !0
            })))
          }), [w]), (0, s.useEffect)((() => {
            e && u(e)
          }), [e]), (0, s.useEffect)((() => {
            "" !== c || d()
          }), [c]), (0, s.useEffect)((() => {
            if ("" === c) return;
            const e = !!c;
            if (e || h || ((async () => {
                try {
                  await (async ({
                    token: e
                  }) => {
                    const {
                      gateway: a,
                      silentCheck: t
                    } = (0, n.getConfigForDomain)(), r = {
                      method: "POST",
                      body: `fingerprint=${await k().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, s = await fetch(t, r);
                    if (200 !== s.status) return void e(!1);
                    const c = `${a}?code=${await s.json()}`,
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
                const a = (0, m.s)(e),
                  {
                    host: t
                  } = (0, n.getConfigForDomain)(),
                  r = parseInt(a.nameid),
                  s = a["scAuth.Nickname"],
                  c = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  o = new Date(a["scAuth.MemberSince"]),
                  i = new Date,
                  u = (0, g.M)(i, o) < 12,
                  d = (new Date).getTime() / 1e3;
                return {
                  id: r,
                  nonExpiredToken: (a?.exp ?? 0) - d > 0,
                  avatar: a["scAuth.AvatarUrl"],
                  bearer_token_expired: a.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: u,
                  nickname: s,
                  profile_link: `https://${t}.rockstargames.com/member/${s}?id=${r}`
                }
              })({
                bearerToken: c
              });
              i((a => ({
                ...a,
                ...e
              })))
            }
          }), [c, h]), (0, s.useEffect)((() => {
            (async () => {
              if (l && o && t && !o?.crews && o?.characters) {
                const e = await (async ({
                  pingBearer: e,
                  rockstarId: a
                }) => {
                  const {
                    crews: t
                  } = await (0, n.coreScApiFetch)("crew/forMember", {
                    pingBearer: e,
                    query: {
                      userId: a
                    }
                  });
                  return t
                })({
                  pingBearer: d,
                  rockstarId: o.id
                });
                i((a => ({
                  ...a,
                  crews: e
                }))), b((e => e - 1))
              }
            })()
          }), [o?.nickname, t, l, o?.characters]), (0, s.useEffect)((() => {
            (async () => {
              if (!l || !o || o?.gamesPlayed) return;
              const e = await (async ({
                pingBearer: e
              }) => {
                const {
                  all: a
                } = await (0, n.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: e
                });
                return a
              })({
                pingBearer: d
              });
              i((a => ({
                ...a,
                gamesPlayed: e
              }))), b((e => e - 1))
            })()
          }), [o?.nickname, l]), (0, s.useEffect)((() => {
            (async () => {
              if (l && o && "gtao" === a && !o?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: a
                } = await (async ({
                  pingBearer: e,
                  nickname: a,
                  rockstarId: t
                }) => {
                  const r = [],
                    s = await (0, n.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: e
                    });
                  await (s?.platforms?.reduce((async (a, t) => {
                    if (await a, ["ps3", "xbox", "xbox360"].includes(t)) return;
                    const s = await (0, n.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                      pingBearer: e
                    });
                    s?.status && s?.result?.map((e => {
                      const {
                        stats: a
                      } = e, {
                        overview: s
                      } = a, {
                        rank: n
                      } = s;
                      if ("0" === n.value) return;
                      const c = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return r.push({
                        ...e,
                        mugshotUrl: c,
                        platform: t
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: c,
                    accounts: o
                  } = await (0, n.coreScApiFetch)(`profile/getprofile?nickname=${a}&maxFriends=0`, {
                    pingBearer: e
                  });
                  if (!c || !o.length) return {
                    gtaoCharacters: r,
                    linkedAccounts: []
                  };
                  const i = o[0],
                    {
                      rockstarAccount: u,
                      linkedAccounts: d
                    } = i;
                  if (u?.rockstarId !== t) return {
                    gtaoCharacters: r,
                    linkedAccounts: []
                  };
                  if (!r.length) return {
                    gtaoCharacters: r,
                    linkedAccounts: i.linkedAccounts
                  };
                  const l = a;
                  let f = "",
                    p = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? f = e.userName : "np" === e?.onlineService && (p = e.userName), e))), r.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), r.map(((e, a) => (e.platformUsername = l, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = p || l), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = f || l), e))), {
                    gtaoCharacters: r,
                    linkedAccounts: d
                  }
                })({
                  pingBearer: d,
                  nickname: o.nickname,
                  rockstarId: o.id
                });
                i((t => ({
                  ...t,
                  characters: {
                    ...t.characters,
                    gtao: e
                  },
                  linkedAccounts: a,
                  hasGtaPlus: "1" === e?.[r]?.stats?.overview?.hasGtaPlus?.value
                }))), b((e => e - 1))
              }
            })()
          }), [a, o?.nickname, l]), (0, s.useEffect)((() => {
            o?.id && o?.nonExpiredToken && (f(!0), (0, p.K)(o.id))
          }), [JSON.stringify(o)]), {
            data: o,
            loggedIn: l,
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
          privateToken: a
        }) => {
          const t = v({
              privateToken: a
            }),
            n = (0, s.useMemo)((() => ({
              ...t,
              privateToken: a,
              hasProvider: !0
            })), [t]);
          return (0, r.jsx)(w.Provider, {
            value: n,
            children: e
          })
        },
        x = () => (0, s.useContext)(w)
    }
  }
]);