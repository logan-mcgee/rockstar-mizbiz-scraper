! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0924faa3-e4f5-4f50-9d18-b99a51f5d580", e._sentryDebugIdIdentifier = "sentry-dbid-0924faa3-e4f5-4f50-9d18-b99a51f5d580")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [276], {
    57895: (e, a, t) => {
      t.r(a), t.d(a, {
        GtmProvider: () => l,
        RockstarUserProvider: () => j,
        useGtmTrack: () => d,
        useRockstarUser: () => D,
        useRockstarUserState: () => E
      });
      var r = t(62229),
        s = t(95966),
        n = t(98397);
      const o = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var c = t(25854);
      const i = (0, s.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        l = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const l = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, r.useState)([]), [c, i] = (0, r.useState)([]), [l, u] = (0, r.useState)(null), {
                data: d,
                loggedIn: f
              } = D(), {
                hasGtaPlus: p
              } = d ?? {}, m = (0, n.bn)(), k = (e, r) => {
                const n = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = r ?? {};
                    (0, s.track)({
                      ...e,
                      ...a
                    }), n.push(e)
                  }
                })), t([...a, ...n])
              };
              (0, r.useEffect)((() => {
                if (d && null !== f) {
                  const e = h(d);
                  c.length && e && k(c, e), u(e)
                } else e || c.length && k(c)
              }), [d, f, c]), (0, r.useEffect)((() => {
                const e = c.filter((e => -1 === a.indexOf(e)));
                i(e)
              }), [a]);
              const h = e => {
                const a = [],
                  t = [],
                  r = [],
                  s = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [n, o] = e;
                  o.length && o.forEach((e => {
                    const o = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === n) {
                      t.includes(o) || t.push(o), r.includes(o) || "1" !== e.stats?.overview?.hasGtaPlus?.value || r.push(o);
                      const a = `${n}_${e.platform}`;
                      s.includes(a) || s.push(a)
                    }
                    a.includes(o) || a.push(o)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [t, r] = e;
                  s.push(`${t}_${r}`), a.includes(r) || a.push(r)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: f ?? !1,
                  gta_plus_active: !!f && Boolean(p),
                  platforms_played: a.length ? a.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: t.length ? t.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  if (void 0 === f || !d || !l) {
                    const a = [...c];
                    return a.push({
                      ...e
                    }), i(a)
                  }
                  return (0, s.track)({
                    ...e,
                    ...l
                  })
                }
              }
            }(a),
            u = (0, r.useMemo)((() => l), [l, a]);
          return (0, c.jsx)(i.Provider, {
            value: u,
            children: t
          })
        },
        u = {
          track: () => null
        },
        d = () => (0, r.useContext)(i) ?? u,
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
        b = (0, s.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, s.makeVar)(null)
        }),
        w = e => b(e),
        _ = (0, s.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, s.makeVar)(null)
        }),
        M = (0, s.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        C = e => M(e),
        x = (0, s.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        S = e => x(e),
        I = (0, s.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, s.makeVar)(null)
        }),
        R = e => I(e),
        E = () => {
          const e = (0, s.useReactiveVar)(M),
            a = (0, s.useReactiveVar)(x),
            t = (0, s.useReactiveVar)(v),
            r = (0, s.useReactiveVar)(f),
            n = (0, s.useReactiveVar)(h),
            o = (0, s.useReactiveVar)(b);
          return {
            charactersNeeded: e,
            crewsNeeded: a,
            currentCharId: t,
            hasNotifications: n,
            navOpen: r,
            userData: (0, s.useReactiveVar)(I),
            selectedCharacterTuple: o,
            jumpScMenuFocus: (0, s.useReactiveVar)(m),
            setCharactersNeeded: C,
            setCrewsNeeded: S,
            setCurrentCharId: y,
            setHasNotifications: g,
            setNavOpen: p,
            setSelectedCharacterTuple: w,
            setUserData: R,
            setJumpScMenuFocus: k
          }
        };
      var T = t(93830),
        V = t.n(T);
      var A = t(4895),
        N = t(59270);
      const P = e => {
          let {
            privateToken: a
          } = e;
          const {
            charactersNeeded: t,
            crewsNeeded: n,
            currentCharId: o
          } = E(), c = (0, s.useRockstarToken)(), [i, l] = (0, r.useState)(), [u] = (0, s.useRockstarTokenReactive)(), d = (0, s.useRockstarTokenPing)(), [f, p] = (0, r.useState)(), [m, k] = (0, r.useState)(!1), h = void 0 === f, [g, v] = (0, r.useState)(1);
          return (0, r.useEffect)((() => {
            "gtao" !== t || i?.characters?.gtao || (l({
              ...i,
              accountSynced: !1
            }), v((e => e + 1)))
          }), [t, i?.characters?.gtao]), (0, r.useEffect)((() => {
            n && !i?.crews && (l({
              ...i,
              accountSynced: !1
            }), v((e => e + 1)))
          }), [n, i?.crews]), (0, r.useEffect)((() => {
            0 === g && l({
              ...i,
              accountSynced: !0
            })
          }), [g]), (0, r.useEffect)((() => {
            a && u(a)
          }), [a]), (0, r.useEffect)((() => {
            "" !== c || d()
          }), [c]), (0, r.useEffect)((() => {
            if ("" === c) return;
            const e = !!c;
            if (e || m || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: a
                    } = e;
                    const {
                      gateway: t,
                      silentCheck: r
                    } = (0, s.getConfigForDomain)(), n = {
                      method: "POST",
                      body: `fingerprint=${await V().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, o = await fetch(r, n);
                    if (200 !== o.status) return void a(!1);
                    const c = `${t}?code=${await o.json()}`,
                      i = await fetch(c, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: l
                      } = await i.json();
                    return a(l), l
                  })({
                    token: u
                  })
                } catch (e) {}
              })(), k(!0)), !e && m && p(!1), e) {
              const e = (e => {
                let {
                  bearerToken: a
                } = e;
                const t = (0, A.s)(a),
                  {
                    host: r
                  } = (0, s.getConfigForDomain)(),
                  n = parseInt(t.nameid),
                  o = t["scAuth.Nickname"],
                  c = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(t["scAuth.MemberSince"]),
                  l = new Date,
                  u = (0, N.M)(l, i) < 12,
                  d = (new Date).getTime() / 1e3;
                return {
                  id: n,
                  nonExpiredToken: (t?.exp ?? 0) - d > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: u,
                  nickname: o,
                  profile_link: `https://${r}.rockstargames.com/member/${o}?id=${n}`
                }
              })({
                bearerToken: c
              });
              l({
                ...i,
                ...e
              })
            }
          }), [c, m]), (0, r.useEffect)((() => {
            (async () => {
              if (f && i && n && !i?.crews) {
                const e = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: t
                  } = e;
                  const {
                    crews: r
                  } = await (0, s.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: t
                    }
                  });
                  return r
                })({
                  pingBearer: d,
                  rockstarId: i.id
                });
                l({
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
                  pingBearer: a
                } = e;
                const {
                  all: t
                } = await (0, s.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: a
                });
                return t
              })({
                pingBearer: d
              });
              l({
                ...i,
                gamesPlayed: e
              }), v((e => e - 1))
            })()
          }), [i?.nickname, f]), (0, r.useEffect)((() => {
            (async () => {
              if (f && i && "gtao" === t && !i?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: a
                } = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: t,
                    rockstarId: r
                  } = e;
                  const n = [],
                    o = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  await (o?.platforms?.reduce((async (e, t) => {
                    if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                    const r = await (0, s.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                      pingBearer: a
                    });
                    r?.status && r?.result?.map((e => {
                      const {
                        stats: a
                      } = e, {
                        overview: r
                      } = a, {
                        rank: s
                      } = r;
                      if ("0" === s.value) return;
                      const o = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return n.push({
                        ...e,
                        mugshotUrl: o,
                        platform: t
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: c,
                    accounts: i
                  } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                    pingBearer: a
                  });
                  if (!c || !i.length) return {
                    gtaoCharacters: n,
                    linkedAccounts: []
                  };
                  const l = i[0],
                    {
                      rockstarAccount: u,
                      linkedAccounts: d
                    } = l;
                  if (u?.rockstarId !== r) return {
                    gtaoCharacters: n,
                    linkedAccounts: []
                  };
                  if (!n.length) return {
                    gtaoCharacters: n,
                    linkedAccounts: l.linkedAccounts
                  };
                  const f = t;
                  let p = "",
                    m = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (m = e.userName), e))), n.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), n.map(((e, a) => (e.platformUsername = f, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = m || f), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || f), e))), {
                    gtaoCharacters: n,
                    linkedAccounts: d
                  }
                })({
                  pingBearer: d,
                  nickname: i.nickname,
                  rockstarId: i.id
                });
                l({
                  ...i,
                  characters: {
                    ...i.characters,
                    gtao: e
                  },
                  linkedAccounts: a,
                  hasGtaPlus: "1" === e?.[o]?.stats?.overview?.hasGtaPlus?.value
                }), v((e => e - 1))
              }
            })()
          }), [t, i?.nickname, f]), (0, r.useEffect)((() => {
            i?.id && i?.nonExpiredToken && (p(!0), _(i.id))
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
            children: a,
            privateToken: t
          } = e;
          const s = P({
              privateToken: t
            }),
            n = (0, r.useMemo)((() => ({
              ...s,
              privateToken: t,
              hasProvider: !0
            })), [s]);
          return (0, c.jsx)(B.Provider, {
            value: n,
            children: a
          })
        },
        D = () => (0, r.useContext)(B)
    }
  }
]);