! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7bc8bf79-30b0-4d33-b8d7-32517907c50d", e._sentryDebugIdIdentifier = "sentry-dbid-7bc8bf79-30b0-4d33-b8d7-32517907c50d")
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
  [5523, 7904], {
    18372: (e, t, a) => {
      a.d(t, {
        A: () => w,
        K: () => m
      });
      var r = a(95966);
      const s = (0, r.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, r.makeVar)(null)
        }),
        c = e => s(e),
        n = (0, r.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, r.makeVar)(!1)
        }),
        o = e => n(e),
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
        m = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        k = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        g = e => k(e),
        h = (0, r.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        v = e => h(e),
        y = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        b = e => y(e),
        w = () => {
          const e = (0, r.useReactiveVar)(k),
            t = (0, r.useReactiveVar)(h),
            a = (0, r.useReactiveVar)(l),
            m = (0, r.useReactiveVar)(s),
            w = (0, r.useReactiveVar)(i),
            x = (0, r.useReactiveVar)(f);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: w,
            navOpen: m,
            userData: (0, r.useReactiveVar)(y),
            selectedCharacterTuple: x,
            jumpScMenuFocus: (0, r.useReactiveVar)(n),
            setCharactersNeeded: g,
            setCrewsNeeded: v,
            setCurrentCharId: d,
            setHasNotifications: u,
            setNavOpen: c,
            setSelectedCharacterTuple: p,
            setUserData: b,
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
        iR: () => w,
        h: () => f,
        Wx: () => x
      });
      var r = a(62229),
        s = a(95966),
        c = a(7607),
        n = a(2894);
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
                data: f,
                loggedIn: p
              } = (0, c.useRockstarUser)(), {
                hasGtaPlus: m
              } = f ?? {}, k = (0, n.bn)(), g = (e, r) => {
                const c = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = r ?? {};
                    (0, s.track)({
                      ...e,
                      ...t
                    }), c.push(e)
                  }
                })), a([...t, ...c])
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
                  let [c, n] = e;
                  n.length && n.forEach((e => {
                    const n = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === c) {
                      a.includes(n) || a.push(n), r.includes(n) || "1" !== e.stats?.overview?.hasGtaPlus?.value || r.push(n);
                      const t = `${c}_${e.platform}`;
                      s.includes(t) || s.push(t)
                    }
                    t.includes(n) || t.push(n)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [a, r] = e;
                  s.push(`${a}_${r}`), t.includes(r) || t.push(r)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: p ?? !1,
                  gta_plus_active: !!p && Boolean(m),
                  platforms_played: t.length ? t.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: k
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
      var p = a(18372);
      var m = a(43425),
        k = a.n(m);
      var g = a(29830),
        h = a(48004);
      const v = () => {
          const {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a
          } = (0, p.A)(), c = (0, s.useRockstarToken)(), [n, o] = (0, r.useState)(), [i, u] = (0, s.useRockstarTokenReactive)(), l = (0, s.useRockstarTokenPing)(), [d, f] = (0, r.useState)(), [m, v] = (0, r.useState)(!1), [y, b] = (0, r.useState)(), w = void 0 === d, [x, C] = (0, r.useState)(1);
          return (0, r.useEffect)((() => {
            e && (o({
              ...n,
              accountSynced: !1
            }), C((e => e + 1)))
          }), [e]), (0, r.useEffect)((() => {
            t && (o({
              ...n,
              accountSynced: !1
            }), C((e => e + 1)))
          }), [t]), (0, r.useEffect)((() => {
            0 === x && o({
              ...n,
              accountSynced: !0
            })
          }), [x]), (0, r.useEffect)((() => {
            e && b("1" === n?.characters?.[e]?.[a]?.stats?.overview?.hasGtaPlus?.value)
          }), [e, a, n]), (0, r.useEffect)((() => {
            o({
              ...n,
              hasGtaPlus: y
            })
          }), [y]), (0, r.useEffect)((() => {
            if (null === c) return void l();
            const e = !!c;
            if (e || m || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: t,
                      tokenPingExpires: a
                    } = e;
                    const {
                      gateway: r,
                      silentCheck: c
                    } = (0, s.getConfigForDomain)(), n = {
                      method: "POST",
                      body: `fingerprint=${await k().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, o = await fetch(c, n);
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
              })(), v(!0)), !e && m && f(!1), e) {
              const t = (e => {
                let {
                  bearerToken: t
                } = e;
                const a = (0, g.s)(t),
                  {
                    host: r
                  } = (0, s.getConfigForDomain)(),
                  c = parseInt(a.nameid),
                  n = a["scAuth.Nickname"],
                  o = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(a["scAuth.MemberSince"]),
                  u = new Date,
                  l = (0, h.M)(u, i) < 12;
                return {
                  id: c,
                  avatar: a["scAuth.AvatarUrl"],
                  bearer_token_expired: a.exp > Date.now(),
                  isAMinor: o,
                  isNewAccount: l,
                  nickname: n,
                  profile_link: `https://${r}.rockstargames.com/member/${n}?id=${c}`
                }
              })({
                bearerToken: c
              });
              o({
                ...n,
                ...t
              }), f(e), (0, p.K)(t.id)
            }
          }), [c, m]), (0, r.useEffect)((() => {
            (async () => {
              if (d && n && t && !n?.crews) {
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
                  rockstarId: n.id
                });
                o({
                  ...n,
                  crews: e
                }), C((e => e - 1))
              }
            })()
          }), [n?.nickname, t, d]), (0, r.useEffect)((() => {
            (async () => {
              if (d && n && !n?.gamesPlayed) {
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
                  ...n,
                  gamesPlayed: e
                }), C((e => e - 1))
              }
            })()
          }), [n?.nickname, d]), (0, r.useEffect)((() => {
            (async () => {
              if (d && n && "gtao" === e && !n?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: t
                } = await (async e => {
                  let {
                    pingBearer: t,
                    nickname: a,
                    rockstarId: r
                  } = e;
                  const c = [],
                    n = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  await (n?.platforms?.reduce((async (e, a) => {
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
                      const n = ["ps4", "ps5"].includes(a) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return c.push({
                        ...e,
                        mugshotUrl: n,
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
                    gtaoCharacters: c,
                    linkedAccounts: []
                  };
                  const u = i[0],
                    {
                      rockstarAccount: l,
                      linkedAccounts: d
                    } = u;
                  if (l?.rockstarId !== r) return {
                    gtaoCharacters: c,
                    linkedAccounts: []
                  };
                  if (!c.length) return {
                    gtaoCharacters: c,
                    linkedAccounts: u.linkedAccounts
                  };
                  const f = a;
                  let p = "",
                    m = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (m = e.userName), e))), c.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), c.map(((e, t) => (e.platformUsername = f, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = m || f), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || f), e))), {
                    gtaoCharacters: c,
                    linkedAccounts: d
                  }
                })({
                  pingBearer: l,
                  nickname: n.nickname,
                  rockstarId: n.id
                });
                o({
                  ...n,
                  characters: {
                    ...n.characters,
                    gtao: e
                  },
                  linkedAccounts: t
                }), C((e => e - 1))
              }
            })()
          }), [e, n?.nickname, d]), {
            data: n,
            loggedIn: d,
            loading: w
          }
        },
        y = {},
        b = (0, s.setContextItem)({
          context: (0, r.createContext)(y),
          key: "userContext"
        }),
        w = e => {
          let {
            children: t
          } = e;
          const a = v(),
            s = (0, r.useMemo)((() => ({
              ...a,
              hasProvider: !0
            })), [a]);
          return (0, i.jsx)(b.Provider, {
            value: s,
            children: t
          })
        },
        x = () => (0, r.useContext)(b)
    }
  }
]);