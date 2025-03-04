! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2b574353-1707-4871-9bb3-81e14eb2a3bd", e._sentryDebugIdIdentifier = "sentry-dbid-2b574353-1707-4871-9bb3-81e14eb2a3bd")
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
  [5523], {
    18372: (e, t, a) => {
      a.d(t, {
        A: () => y,
        K: () => m
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
        p = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        f = e => p(e),
        m = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        h = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        k = e => h(e),
        g = (0, r.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        v = e => g(e),
        b = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        w = e => b(e),
        y = () => {
          const e = (0, r.useReactiveVar)(h),
            t = (0, r.useReactiveVar)(g),
            a = (0, r.useReactiveVar)(l),
            m = (0, r.useReactiveVar)(s),
            y = (0, r.useReactiveVar)(i),
            _ = (0, r.useReactiveVar)(p);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: y,
            navOpen: m,
            userData: (0, r.useReactiveVar)(b),
            selectedCharacterTuple: _,
            jumpScMenuFocus: (0, r.useReactiveVar)(c),
            setCharactersNeeded: k,
            setCrewsNeeded: v,
            setCurrentCharId: d,
            setHasNotifications: u,
            setNavOpen: n,
            setSelectedCharacterTuple: f,
            setUserData: w,
            setJumpScMenuFocus: o
          }
        }
    },
    7607: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        useGtmTrack: () => r.h,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => s.A
      });
      var r = a(57269),
        s = a(18372)
    },
    57269: (e, t, a) => {
      a.d(t, {
        UN: () => l,
        iR: () => y,
        h: () => p,
        Wx: () => _
      });
      var r = a(62229),
        s = a(95966),
        n = a(7607),
        c = a(2894);
      const o = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var i = a(91029);
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
                data: p,
                loggedIn: f
              } = (0, n.useRockstarUser)(), {
                hasGtaPlus: m
              } = p ?? {}, h = (0, c.bn)(), k = (e, r) => {
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
                  i.length && e && k(i, e), d(e)
                } else e || i.length && k(i)
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
                  gta_plus_active: !!f && Boolean(m),
                  platforms_played: t.length ? t.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: h
                }
              };
              return {
                track: e => {
                  if (void 0 === f || !p || !l) {
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
        p = () => (0, r.useContext)(u) ?? d;
      var f = a(18372);
      var m = a(43425),
        h = a.n(m);
      var k = a(29830),
        g = a(48004);
      const v = () => {
          const {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a
          } = (0, f.A)(), n = (0, s.useRockstarToken)(), [c, o] = (0, r.useState)(), [i, u] = (0, s.useRockstarTokenReactive)(), l = (0, s.useRockstarTokenPing)(), [d, p] = (0, r.useState)(), [m, v] = (0, r.useState)(!1), [b, w] = (0, r.useState)(), y = void 0 === d, [_, x] = (0, r.useState)(1);
          return (0, r.useEffect)((() => {
            e && x((e => e + 1))
          }), [e]), (0, r.useEffect)((() => {
            t && x((e => e + 1))
          }), [t]), (0, r.useEffect)((() => {
            0 === _ && o({
              ...c,
              accountSynced: !0
            })
          }), [_]), (0, r.useEffect)((() => {
            e && w("1" === c?.characters?.[e]?.[a]?.stats?.overview?.hasGtaPlus?.value)
          }), [e, a, c]), (0, r.useEffect)((() => {
            o({
              ...c,
              hasGtaPlus: b
            })
          }), [b]), (0, r.useEffect)((() => {
            if (null === n) return void l();
            const e = !!n;
            if (e || m || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: t,
                      tokenPingExpires: a
                    } = e;
                    const {
                      gateway: r,
                      silentCheck: n
                    } = (0, s.getConfigForDomain)(), c = {
                      method: "POST",
                      body: `fingerprint=${await h().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, o = await fetch(n, c);
                    if (200 !== o.status) return void t(!1);
                    const i = `${r}?code=${await o.json()}`,
                      u = await fetch(i, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: l,
                        tokenExpiresTime: d
                      } = await u.json();
                    return t(l), a(d), l
                  })({
                    token: i,
                    tokenPingExpires: u
                  })
                } catch (e) {}
              })(), v(!0)), !e && m && p(!1), e) {
              const t = (e => {
                let {
                  bearerToken: t
                } = e;
                const a = (0, k.s)(t),
                  {
                    host: r
                  } = (0, s.getConfigForDomain)(),
                  n = parseInt(a.nameid),
                  c = a["scAuth.Nickname"],
                  o = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(a["scAuth.MemberSince"]),
                  u = new Date,
                  l = (0, g.M)(u, i) < 12;
                return {
                  id: n,
                  avatar: a["scAuth.AvatarUrl"],
                  bearer_token_expired: a.exp > Date.now(),
                  isAMinor: o,
                  isNewAccount: l,
                  nickname: c,
                  profile_link: `https://${r}.rockstargames.com/member/${c}?id=${n}`
                }
              })({
                bearerToken: n
              });
              o({
                ...c,
                ...t
              }), p(e), (0, f.K)(t.id)
            }
          }), [n, m]), (0, r.useEffect)((() => {
            (async () => {
              if (d && c && t && !c?.crews) {
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
                  rockstarId: c.id
                });
                o({
                  ...c,
                  crews: e
                }), x((e => e - 1))
              }
            })()
          }), [c?.nickname, t, d]), (0, r.useEffect)((() => {
            (async () => {
              if (d && c && !c?.gamesPlayed) {
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
                o({
                  ...c,
                  gamesPlayed: e
                }), x((e => e - 1))
              }
            })()
          }), [c?.nickname, d]), (0, r.useEffect)((() => {
            (async () => {
              if (d && c && "gtao" === e && !c?.characters?.gtao) {
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
                  pingBearer: l,
                  nickname: c.nickname,
                  rockstarId: c.id
                });
                o({
                  ...c,
                  characters: {
                    ...c.characters,
                    gtao: e
                  },
                  linkedAccounts: t
                }), x((e => e - 1))
              }
            })()
          }), [e, c?.nickname, d]), {
            data: c,
            loggedIn: d,
            loading: y
          }
        },
        b = {},
        w = (0, s.setContextItem)({
          context: (0, r.createContext)(b),
          key: "userContext"
        }),
        y = e => {
          let {
            children: t
          } = e;
          const a = v(),
            s = (0, r.useMemo)((() => ({
              ...a,
              hasProvider: !0
            })), [a]);
          return (0, i.jsx)(w.Provider, {
            value: s,
            children: t
          })
        },
        _ = () => (0, r.useContext)(w)
    }
  }
]);