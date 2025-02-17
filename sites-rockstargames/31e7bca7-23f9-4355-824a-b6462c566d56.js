! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "31e7bca7-23f9-4355-824a-b6462c566d56", e._sentryDebugIdIdentifier = "sentry-dbid-31e7bca7-23f9-4355-824a-b6462c566d56")
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
  [6546, 4165], {
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
        h = e => k(e),
        g = (0, r.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        v = e => g(e),
        w = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        b = e => w(e),
        y = () => {
          const e = (0, r.useReactiveVar)(k),
            t = (0, r.useReactiveVar)(g),
            a = (0, r.useReactiveVar)(l),
            m = (0, r.useReactiveVar)(s),
            y = (0, r.useReactiveVar)(i),
            x = (0, r.useReactiveVar)(f);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: y,
            navOpen: m,
            userData: (0, r.useReactiveVar)(w),
            selectedCharacterTuple: x,
            jumpScMenuFocus: (0, r.useReactiveVar)(n),
            setCharactersNeeded: h,
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
      var r = a(92596),
        s = a(18372)
    },
    92596: (e, t, a) => {
      a.d(t, {
        UN: () => u,
        iR: () => b,
        h: () => d,
        Wx: () => y
      });
      var r = a(62229),
        s = a(95966),
        c = a(7607),
        n = a(5315);
      var o = a(91029);
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
                loggedIn: f
              } = (0, c.useRockstarUser)(), {
                hasGtaPlus: p
              } = d ?? {}, m = (0, n.bn)(), k = (e, r) => {
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
                if (d && null !== f) {
                  const e = h(d);
                  o.length && e && k(o, e), l(e)
                } else e || o.length && k(o)
              }), [d, f, o]), (0, r.useEffect)((() => {
                const e = o.filter((e => -1 === t.indexOf(e)));
                i(e)
              }), [t]);
              const h = e => {
                const t = [],
                  a = [],
                  r = [];
                return Object.keys(e?.characters ?? []).forEach((s => {
                  e.characters[s].length && (a.push(s), e.characters[s].forEach((e => {
                    "gtao" === s && (r.includes(e.platform) || r.push(e.platform)), t.includes(e.platform) || t.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: f ?? !1,
                  gta_plus_active: f ? Boolean(p) : void 0,
                  platforms_played: t.length ? t.join("|").toUpperCase() : void 0,
                  games_played: a.length ? a.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: r.length ? r.join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  if (void 0 === f || !d || !u) {
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
        d = () => (0, r.useContext)(i) ?? l;
      var f = a(18372);
      var p = a(43425),
        m = a.n(p);
      var k = a(29830),
        h = a(48004);
      const g = () => {
          const {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a
          } = (0, f.A)(), c = (0, s.useRockstarToken)(), [n, o] = (0, r.useState)(), [i, u] = (0, s.useRockstarTokenReactive)(), l = (0, s.useRockstarTokenPing)(), [d, p] = (0, r.useState)(), [g, v] = (0, r.useState)(!1), [w, b] = (0, r.useState)(), y = void 0 === d;
          return (0, r.useEffect)((() => {
            e && b("1" === n?.characters?.[e]?.[a]?.stats?.overview?.hasGtaPlus?.value)
          }), [e, a, n]), (0, r.useEffect)((() => {
            o({
              ...n,
              hasGtaPlus: w
            })
          }), [w]), (0, r.useEffect)((() => {
            if (null === c) return void l();
            const e = !!c;
            if (e || g || ((async () => {
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
                      body: `fingerprint=${await m().get().then((e=>e))}`,
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
              })(), v(!0)), !e && g && p(!1), e) {
              const t = (e => {
                let {
                  bearerToken: t
                } = e;
                const a = (0, k.s)(t),
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
              }), p(e), (0, f.K)(t.id)
            }
          }), [c, g]), (0, r.useEffect)((() => {
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
                })
              }
            })()
          }), [n, t, d]), (0, r.useEffect)((() => {
            (async () => {
              if (d && n && "gtao" === e && !n?.characters?.gtao) {
                const e = await (async e => {
                  let {
                    pingBearer: t,
                    nickname: a,
                    rockstarId: r
                  } = e;
                  const c = [],
                    n = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  if (await (n?.platforms?.reduce((async (e, a) => {
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
                    }), Promise.resolve())), !c.length) return c;
                  const {
                    status: o,
                    accounts: i
                  } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${a}&maxFriends=0`, {
                    pingBearer: t
                  });
                  return o && i.length ? (i.forEach((e => {
                    const {
                      rockstarAccount: t,
                      linkedAccounts: s
                    } = e;
                    if (t?.rockstarId !== r) return;
                    const n = a;
                    let o = "",
                      i = "";
                    s?.map((e => ("xbl" === e?.onlineService ? o = e.userName : "np" === e?.onlineService && (i = e.userName), e))), c.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), c.map(((e, t) => (e.platformUsername = n, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = i || n), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = o || n), e)))
                  })), c) : c
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
                  }
                })
              }
            })()
          }), [e, n, d]), {
            data: n,
            loggedIn: d,
            loading: y
          }
        },
        v = {},
        w = (0, s.setContextItem)({
          context: (0, r.createContext)(v),
          key: "userContext"
        }),
        b = e => {
          let {
            children: t
          } = e;
          const a = g(),
            s = (0, r.useMemo)((() => ({
              ...a,
              hasProvider: !0
            })), [a]);
          return (0, o.jsx)(w.Provider, {
            value: s,
            children: t
          })
        },
        y = () => (0, r.useContext)(w)
    }
  }
]);