! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "45bd086d-65c6-4ea4-8423-5c200e7c72c4", e._sentryDebugIdIdentifier = "sentry-dbid-45bd086d-65c6-4ea4-8423-5c200e7c72c4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7344, 4963], {
    4066: (e, t, a) => {
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
        l = (0, r.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, r.makeVar)((0, r.webSettingsReactive)()?.currentCharId)
        }),
        d = e => l(e),
        f = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        p = e => f(e),
        k = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        m = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        g = e => m(e),
        h = (0, r.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        v = e => h(e),
        w = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        y = e => w(e),
        b = () => {
          const e = (0, r.useReactiveVar)(m),
            t = (0, r.useReactiveVar)(h),
            a = (0, r.useReactiveVar)(l),
            k = (0, r.useReactiveVar)(s),
            b = (0, r.useReactiveVar)(i),
            x = (0, r.useReactiveVar)(f);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: b,
            navOpen: k,
            userData: (0, r.useReactiveVar)(w),
            selectedCharacterTuple: x,
            jumpScMenuFocus: (0, r.useReactiveVar)(c),
            setCharactersNeeded: g,
            setCrewsNeeded: v,
            setCurrentCharId: d,
            setHasNotifications: u,
            setNavOpen: n,
            setSelectedCharacterTuple: p,
            setUserData: y,
            setJumpScMenuFocus: o
          }
        }
    },
    66369: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        useGtmTrack: () => r.h,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => s.A
      });
      var r = a(85712),
        s = a(4066)
    },
    85712: (e, t, a) => {
      a.d(t, {
        UN: () => l,
        iR: () => b,
        h: () => f,
        Wx: () => x
      });
      var r = a(62229),
        s = a(95966),
        n = a(66369),
        c = a(40296);
      const o = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var i = a(73855);
      const u = (0, s.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        l = e => {
          let {
            checkUser: t,
            children: a
          } = e;
          const l = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, a] = (0, r.useState)([]), [i, u] = (0, r.useState)([]), [l, d] = (0, r.useState)(null), {
                data: f,
                loggedIn: p
              } = (0, n.useRockstarUser)(), {
                hasGtaPlus: k
              } = f ?? {}, m = (0, c.bn)(), g = (e, r) => {
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
                if (f && null !== p) {
                  const e = h(f);
                  i.length && e && g(i, e), d(e)
                } else e || i.length && g(i)
              }), [f, p, i]), (0, r.useEffect)((() => {
                const e = i.filter((e => -1 === t.indexOf(e)));
                u(e)
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
                  gta_plus_active: !!p && Boolean(k),
                  platforms_played: t.length ? t.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  if (void 0 === p || !f || !l) {
                    const t = [...i];
                    return t.push({
                      ...e
                    }), u(t)
                  }
                  return (0, s.track)({
                    ...e,
                    ...l
                  })
                }
              }
            }(t),
            d = (0, r.useMemo)((() => l), [l, t]);
          return (0, i.jsx)(u.Provider, {
            value: d,
            children: a
          })
        },
        d = {
          track: () => null
        },
        f = () => (0, r.useContext)(u) ?? d;
      var p = a(4066);
      var k = a(17531),
        m = a.n(k);
      var g = a(37240),
        h = a(35422);
      const v = e => {
          let {
            privateToken: t
          } = e;
          const {
            charactersNeeded: a,
            crewsNeeded: n,
            currentCharId: c
          } = (0, p.A)(), o = (0, s.useRockstarToken)(), [i, u] = (0, r.useState)(), [l] = (0, s.useRockstarTokenReactive)(), d = (0, s.useRockstarTokenPing)(), [f, k] = (0, r.useState)(), [v, w] = (0, r.useState)(!1), y = void 0 === f, [b, x] = (0, r.useState)(1);
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
            t && l(t)
          }), [t]), (0, r.useEffect)((() => {
            "" !== o || d()
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
                    token: l
                  })
                } catch (e) {}
              })(), w(!0)), !e && v && k(!1), e) {
              const e = (e => {
                let {
                  bearerToken: t
                } = e;
                const a = (0, g.s)(t),
                  {
                    host: r
                  } = (0, s.getConfigForDomain)(),
                  n = parseInt(a.nameid),
                  c = a["scAuth.Nickname"],
                  o = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(a["scAuth.MemberSince"]),
                  u = new Date,
                  l = (0, h.M)(u, i) < 12,
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
          }), [o, v]), (0, r.useEffect)((() => {
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
                  pingBearer: d,
                  rockstarId: i.id
                });
                u({
                  ...i,
                  crews: e
                }), x((e => e - 1))
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
                pingBearer: d
              });
              u({
                ...i,
                gamesPlayed: e
              }), x((e => e - 1))
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
                  const f = a;
                  let p = "",
                    k = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (k = e.userName), e))), n.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), n.map(((e, t) => (e.platformUsername = f, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = k || f), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || f), e))), {
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
                }), x((e => e - 1))
              }
            })()
          }), [a, i?.nickname, f]), (0, r.useEffect)((() => {
            i?.id && i?.nonExpiredToken && (k(!0), (0, p.K)(i.id))
          }), [JSON.stringify(i)]), {
            data: i,
            loggedIn: f,
            loading: y
          }
        },
        w = {},
        y = (0, s.setContextItem)({
          context: (0, r.createContext)(w),
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
          return (0, i.jsx)(y.Provider, {
            value: n,
            children: t
          })
        },
        x = () => (0, r.useContext)(y)
    }
  }
]);