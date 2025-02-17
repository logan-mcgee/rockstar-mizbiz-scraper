! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "864a159d-6082-4300-af51-aa48a3e83452", e._sentryDebugIdIdentifier = "sentry-dbid-864a159d-6082-4300-af51-aa48a3e83452")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [5271, 7652], {
    97652: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => i,
        RockstarUserProvider: () => D,
        useGtmTrack: () => l,
        useRockstarUser: () => j,
        useRockstarUserState: () => V
      });
      var r = a(62229),
        s = a(95966),
        n = a(5315);
      var c = a(91029);
      const o = (0, s.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        i = e => {
          let {
            checkUser: t,
            children: a
          } = e;
          const i = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, a] = (0, r.useState)([]), [c, o] = (0, r.useState)([]), [i, u] = (0, r.useState)(null), {
                data: l,
                loggedIn: d
              } = j(), {
                hasGtaPlus: f
              } = l ?? {}, p = (0, n.bn)(), m = (e, r) => {
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
                if (l && null !== d) {
                  const e = k(l);
                  c.length && e && m(c, e), u(e)
                } else e || c.length && m(c)
              }), [l, d, c]), (0, r.useEffect)((() => {
                const e = c.filter((e => -1 === t.indexOf(e)));
                o(e)
              }), [t]);
              const k = e => {
                const t = [],
                  a = [],
                  r = [];
                return Object.keys(e?.characters ?? []).forEach((s => {
                  e.characters[s].length && (a.push(s), e.characters[s].forEach((e => {
                    "gtao" === s && (r.includes(e.platform) || r.push(e.platform)), t.includes(e.platform) || t.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: d ?? !1,
                  gta_plus_active: d ? Boolean(f) : void 0,
                  platforms_played: t.length ? t.join("|").toUpperCase() : void 0,
                  games_played: a.length ? a.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: r.length ? r.join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: p
                }
              };
              return {
                track: e => {
                  if (void 0 === d || !l || !i) {
                    const t = [...c];
                    return t.push({
                      ...e
                    }), o(t)
                  }
                  return (0, s.track)({
                    ...e,
                    ...i
                  })
                }
              }
            }(t),
            u = (0, r.useMemo)((() => i), [i, t]);
          return (0, c.jsx)(o.Provider, {
            value: u,
            children: a
          })
        },
        u = {
          track: () => null
        },
        l = () => (0, r.useContext)(o) ?? u,
        d = (0, s.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, s.makeVar)(null)
        }),
        f = e => d(e),
        p = (0, s.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, s.makeVar)(!1)
        }),
        m = e => p(e),
        k = (0, s.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, s.makeVar)(!1)
        }),
        h = e => k(e),
        g = (0, s.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, s.makeVar)((0, s.webSettingsReactive)()?.currentCharId)
        }),
        v = e => g(e),
        w = (0, s.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, s.makeVar)(null)
        }),
        y = e => w(e),
        b = (0, s.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, s.makeVar)(null)
        }),
        _ = (0, s.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        x = e => _(e),
        I = (0, s.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        C = e => I(e),
        R = (0, s.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, s.makeVar)(null)
        }),
        M = e => R(e),
        V = () => {
          const e = (0, s.useReactiveVar)(_),
            t = (0, s.useReactiveVar)(I),
            a = (0, s.useReactiveVar)(g),
            r = (0, s.useReactiveVar)(d),
            n = (0, s.useReactiveVar)(k),
            c = (0, s.useReactiveVar)(w);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: n,
            navOpen: r,
            userData: (0, s.useReactiveVar)(R),
            selectedCharacterTuple: c,
            jumpScMenuFocus: (0, s.useReactiveVar)(p),
            setCharactersNeeded: x,
            setCrewsNeeded: C,
            setCurrentCharId: v,
            setHasNotifications: h,
            setNavOpen: f,
            setSelectedCharacterTuple: y,
            setUserData: M,
            setJumpScMenuFocus: m
          }
        };
      var S = a(43425),
        E = a.n(S);
      var N = a(29830),
        A = a(48004);
      const T = () => {
          const {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a
          } = V(), n = (0, s.useRockstarToken)(), [c, o] = (0, r.useState)(), [i, u] = (0, s.useRockstarTokenReactive)(), l = (0, s.useRockstarTokenPing)(), [d, f] = (0, r.useState)(), [p, m] = (0, r.useState)(!1), [k, h] = (0, r.useState)(), g = void 0 === d;
          return (0, r.useEffect)((() => {
            e && h("1" === c?.characters?.[e]?.[a]?.stats?.overview?.hasGtaPlus?.value)
          }), [e, a, c]), (0, r.useEffect)((() => {
            o({
              ...c,
              hasGtaPlus: k
            })
          }), [k]), (0, r.useEffect)((() => {
            if (null === n) return void l();
            const e = !!n;
            if (e || p || ((async () => {
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
                      body: `fingerprint=${await E().get().then((e=>e))}`,
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
              })(), m(!0)), !e && p && f(!1), e) {
              const t = (e => {
                let {
                  bearerToken: t
                } = e;
                const a = (0, N.s)(t),
                  {
                    host: r
                  } = (0, s.getConfigForDomain)(),
                  n = parseInt(a.nameid),
                  c = a["scAuth.Nickname"],
                  o = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(a["scAuth.MemberSince"]),
                  u = new Date,
                  l = (0, A.M)(u, i) < 12;
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
              }), f(e), b(t.id)
            }
          }), [n, p]), (0, r.useEffect)((() => {
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
                })
              }
            })()
          }), [c, t, d]), (0, r.useEffect)((() => {
            (async () => {
              if (d && c && "gtao" === e && !c?.characters?.gtao) {
                const e = await (async e => {
                  let {
                    pingBearer: t,
                    nickname: a,
                    rockstarId: r
                  } = e;
                  const n = [],
                    c = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  if (await (c?.platforms?.reduce((async (e, a) => {
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
                    }), Promise.resolve())), !n.length) return n;
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
                    const c = a;
                    let o = "",
                      i = "";
                    s?.map((e => ("xbl" === e?.onlineService ? o = e.userName : "np" === e?.onlineService && (i = e.userName), e))), n.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), n.map(((e, t) => (e.platformUsername = c, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = i || c), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = o || c), e)))
                  })), n) : n
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
                  }
                })
              }
            })()
          }), [e, c, d]), {
            data: c,
            loggedIn: d,
            loading: g
          }
        },
        U = {},
        P = (0, s.setContextItem)({
          context: (0, r.createContext)(U),
          key: "userContext"
        }),
        D = e => {
          let {
            children: t
          } = e;
          const a = T(),
            s = (0, r.useMemo)((() => ({
              ...a,
              hasProvider: !0
            })), [a]);
          return (0, c.jsx)(P.Provider, {
            value: s,
            children: t
          })
        },
        j = () => (0, r.useContext)(P)
    }
  }
]);