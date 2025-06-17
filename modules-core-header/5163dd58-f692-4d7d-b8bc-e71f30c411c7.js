! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5163dd58-f692-4d7d-b8bc-e71f30c411c7", e._sentryDebugIdIdentifier = "sentry-dbid-5163dd58-f692-4d7d-b8bc-e71f30c411c7")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [7542], {
    15900: (e, t, a) => {
      a.d(t, {
        UN: () => u,
        iR: () => w,
        h: () => f,
        Wx: () => _
      });
      var r = a(71127),
        s = a(95966),
        n = a(80763),
        c = a(98397);
      const o = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var i = a(25854);
      const l = (0, s.setContextItem)({
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
              const [t, a] = (0, r.useState)([]), [i, l] = (0, r.useState)([]), [u, d] = (0, r.useState)(null), {
                data: f,
                loggedIn: p
              } = (0, n.useRockstarUser)(), {
                hasGtaPlus: h
              } = f ?? {}, m = (0, c.bn)(), k = (e, r) => {
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
                  const e = g(f);
                  i.length && e && k(i, e), d(e)
                } else e || i.length && k(i)
              }), [f, p, i]), (0, r.useEffect)((() => {
                const e = i.filter((e => -1 === t.indexOf(e)));
                l(e)
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
                  login_state: p ?? !1,
                  gta_plus_active: !!p && Boolean(h),
                  platforms_played: t.length ? t.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  const t = "boolean" == typeof p,
                    a = Boolean(f && u);
                  if (!t || !0 === p && !a) {
                    const t = [...i];
                    return t.push({
                      ...e
                    }), l(t)
                  }
                  return (0, s.track)({
                    ...e,
                    ...u
                  })
                }
              }
            }(t),
            d = (0, r.useMemo)((() => u), [u, t]);
          return (0, i.jsx)(l.Provider, {
            value: d,
            children: a
          })
        },
        d = {
          track: () => null
        },
        f = () => (0, r.useContext)(l) ?? d;
      var p = a(84904);
      var h = a(93830),
        m = a.n(h);
      var k = a(4895),
        g = a(71256);
      const v = e => {
          let {
            privateToken: t
          } = e;
          const {
            charactersNeeded: a,
            crewsNeeded: n,
            currentCharId: c
          } = (0, p.A)(), o = (0, s.useRockstarToken)(), [i, l] = (0, r.useState)(), [u] = (0, s.useRockstarTokenReactive)(), d = (0, s.useRockstarTokenPing)(), [f, h] = (0, r.useState)(), [v, y] = (0, r.useState)(!1), b = void 0 === f, [w, _] = (0, r.useState)(1);
          return (0, r.useEffect)((() => {
            "gtao" !== a || i?.characters?.gtao || (l({
              ...i,
              accountSynced: !1
            }), _((e => e + 1)))
          }), [a, i?.characters?.gtao]), (0, r.useEffect)((() => {
            n && !i?.crews && (l({
              ...i,
              accountSynced: !1
            }), _((e => e + 1)))
          }), [n, i?.crews]), (0, r.useEffect)((() => {
            0 === w && l({
              ...i,
              accountSynced: !0
            })
          }), [w]), (0, r.useEffect)((() => {
            t && u(t)
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
                        bearerToken: l
                      } = await i.json();
                    return t(l), l
                  })({
                    token: u
                  })
                } catch (e) {}
              })(), y(!0)), !e && v && h(!1), e) {
              const e = (e => {
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
                  l = new Date,
                  u = (0, g.M)(l, i) < 12,
                  d = (new Date).getTime() / 1e3;
                return {
                  id: n,
                  nonExpiredToken: (a?.exp ?? 0) - d > 0,
                  avatar: a["scAuth.AvatarUrl"],
                  bearer_token_expired: a.exp > Date.now(),
                  isAMinor: o,
                  isNewAccount: u,
                  nickname: c,
                  profile_link: `https://${r}.rockstargames.com/member/${c}?id=${n}`
                }
              })({
                bearerToken: o
              });
              l({
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
                l({
                  ...i,
                  crews: e
                }), _((e => e - 1))
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
              l({
                ...i,
                gamesPlayed: e
              }), _((e => e - 1))
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
                  const f = a;
                  let p = "",
                    h = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (h = e.userName), e))), n.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), n.map(((e, t) => (e.platformUsername = f, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = h || f), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || f), e))), {
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
                  linkedAccounts: t,
                  hasGtaPlus: "1" === e?.[c]?.stats?.overview?.hasGtaPlus?.value
                }), _((e => e - 1))
              }
            })()
          }), [a, i?.nickname, f]), (0, r.useEffect)((() => {
            i?.id && i?.nonExpiredToken && (h(!0), (0, p.K)(i.id))
          }), [JSON.stringify(i)]), {
            data: i,
            loggedIn: f,
            loading: b
          }
        },
        y = {},
        b = (0, s.setContextItem)({
          context: (0, r.createContext)(y),
          key: "userContext"
        }),
        w = e => {
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
          return (0, i.jsx)(b.Provider, {
            value: n,
            children: t
          })
        },
        _ = () => (0, r.useContext)(b)
    },
    80763: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        useGtmTrack: () => r.h,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => s.A
      });
      var r = a(15900),
        s = a(84904)
    },
    84904: (e, t, a) => {
      a.d(t, {
        A: () => w,
        K: () => h
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
        l = e => i(e),
        u = (0, r.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, r.makeVar)((0, r.webSettingsReactive)()?.currentCharId)
        }),
        d = e => u(e),
        f = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        p = e => f(e),
        h = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        m = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        k = e => m(e),
        g = (0, r.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        v = e => g(e),
        y = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        b = e => y(e),
        w = () => {
          const e = (0, r.useReactiveVar)(m),
            t = (0, r.useReactiveVar)(g),
            a = (0, r.useReactiveVar)(u),
            h = (0, r.useReactiveVar)(s),
            w = (0, r.useReactiveVar)(i),
            _ = (0, r.useReactiveVar)(f);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: w,
            navOpen: h,
            userData: (0, r.useReactiveVar)(y),
            selectedCharacterTuple: _,
            jumpScMenuFocus: (0, r.useReactiveVar)(c),
            setCharactersNeeded: k,
            setCrewsNeeded: v,
            setCurrentCharId: d,
            setHasNotifications: l,
            setNavOpen: n,
            setSelectedCharacterTuple: p,
            setUserData: b,
            setJumpScMenuFocus: o
          }
        }
    }
  }
]);