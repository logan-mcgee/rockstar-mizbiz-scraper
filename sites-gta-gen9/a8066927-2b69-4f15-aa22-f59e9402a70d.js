try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a8066927-2b69-4f15-aa22-f59e9402a70d", e._sentryDebugIdIdentifier = "sentry-dbid-a8066927-2b69-4f15-aa22-f59e9402a70d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2169, 2295, 4550], {
    32169: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => u,
        RockstarUserProvider: () => O,
        useGtmTrack: () => d,
        useRockstarUser: () => B,
        useRockstarUserState: () => I
      });
      var r = a(42295),
        n = a(62229),
        s = a(95966),
        c = a(56088);
      const o = {
          pcalt: "PC",
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        i = (0, s.setContextItem)({
          context: (0, n.createContext)(void 0),
          key: "gtmContext22"
        }),
        u = ({
          checkUser: e,
          children: t
        }) => {
          const a = ((e = !0) => {
              const [t, a] = (0, n.useState)([]), [r, i] = (0, n.useState)([]), [u, l] = (0, n.useState)(null), {
                data: d,
                loggedIn: p
              } = B(), {
                hasGtaPlus: f
              } = d ?? {}, g = (0, c.bn)(), h = (e, r) => {
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
              (0, n.useEffect)((() => {
                if (d && null !== p) {
                  const e = k(d);
                  r.length && e && h(r, e), l(e)
                } else e || r.length && h(r)
              }), [d, p, r]), (0, n.useEffect)((() => {
                const e = r.filter((e => -1 === t.indexOf(e)));
                i(e)
              }), [t]);
              const k = e => {
                const t = [],
                  a = [],
                  r = [],
                  n = [];
                return Object.entries(e?.characters ?? []).forEach((([e, s]) => {
                  s.length && s.forEach((s => {
                    const c = (e => "pcalt" === e ? "pc" : e.toString())(s.platform);
                    if ("gtao" === e) {
                      a.includes(c) || a.push(c), r.includes(c) || "1" !== s.stats?.overview?.hasGtaPlus?.value || r.push(c);
                      const t = `${e}_${s.platform}`;
                      n.includes(t) || n.push(t)
                    }
                    t.includes(c) || t.push(c)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((([e, a]) => {
                  n.push(`${e}_${a}`), t.includes(a) || t.push(a)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: p ?? !1,
                  gta_plus_active: !!p && Boolean(f),
                  platforms_played: t.length ? t.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: n.length ? n.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: g
                }
              };
              return {
                track: e => {
                  const t = "boolean" == typeof p,
                    a = Boolean(d && u);
                  if (!t || !0 === p && !a) {
                    const t = [...r];
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
            })(e),
            u = (0, n.useMemo)((() => a), [a, e]);
          return (0, r.jsx)(i.Provider, {
            value: u,
            children: t
          })
        },
        l = {
          track: () => null
        },
        d = () => (0, n.useContext)(i) ?? l,
        p = (0, s.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, s.makeVar)(null)
        }),
        f = e => p(e),
        g = (0, s.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, s.makeVar)(!1)
        }),
        h = e => g(e),
        k = (0, s.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, s.makeVar)((0, s.webSettingsReactive)()?.currentCharId)
        }),
        m = e => k(e),
        v = (0, s.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, s.makeVar)(null)
        }),
        y = e => v(e),
        w = (0, s.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, s.makeVar)(null)
        }),
        b = (0, s.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        _ = e => b(e),
        x = (0, s.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        S = e => x(e),
        C = (0, s.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, s.makeVar)(null)
        }),
        E = e => C(e),
        I = () => {
          const e = (0, s.useReactiveVar)(b),
            t = (0, s.useReactiveVar)(x),
            a = (0, s.useReactiveVar)(k),
            r = (0, s.useReactiveVar)(p),
            n = (0, s.useReactiveVar)(v);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            navOpen: r,
            userData: (0, s.useReactiveVar)(C),
            selectedCharacterTuple: n,
            jumpScMenuFocus: (0, s.useReactiveVar)(g),
            setCharactersNeeded: _,
            setCrewsNeeded: S,
            setCurrentCharId: m,
            setNavOpen: f,
            setSelectedCharacterTuple: y,
            setUserData: E,
            setJumpScMenuFocus: h
          }
        };
      var R = a(39763),
        T = a.n(R);
      var M = a(58128),
        A = a(34088);
      const N = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: t,
            crewsNeeded: a,
            currentCharId: r
          } = I(), c = (0, s.useRockstarToken)(), [o, i] = (0, n.useState)({
            id: 0,
            avatar: "",
            bearer_token_expired: !0,
            isAMinor: !1,
            isNewAccount: !1,
            nickname: "",
            nonExpiredToken: !1,
            profile_link: "https://",
            accountSynced: !1
          }), [u] = (0, s.useRockstarTokenReactive)(), l = (0, s.useRockstarTokenPing)(), [d, p] = (0, n.useState)(), [f, g] = (0, n.useState)(!1), h = void 0 === d, [k, m] = (0, n.useState)(1);
          return (0, n.useEffect)((() => {
            "gtao" !== t || o?.characters?.gtao || (i((e => ({
              ...e,
              accountSynced: !1
            }))), m((e => e + 1)))
          }), [t, o?.characters?.gtao]), (0, n.useEffect)((() => {
            a && !o?.crews && (i((e => ({
              ...e,
              accountSynced: !1
            }))), m((e => e + 1)))
          }), [a, o?.crews]), (0, n.useEffect)((() => {
            0 === k && i((e => ({
              ...e,
              accountSynced: !0
            })))
          }), [k]), (0, n.useEffect)((() => {
            e && u(e)
          }), [e]), (0, n.useEffect)((() => {
            "" !== c || l()
          }), [c]), (0, n.useEffect)((() => {
            if ("" === c) return;
            const e = !!c;
            if (e || f || ((async () => {
                try {
                  await (async ({
                    token: e
                  }) => {
                    const {
                      gateway: t,
                      silentCheck: a
                    } = (0, s.getConfigForDomain)(), r = {
                      method: "POST",
                      body: `fingerprint=${await T().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, n = await fetch(a, r);
                    if (200 !== n.status) return void e(!1);
                    const c = `${t}?code=${await n.json()}`,
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
              })(), g(!0)), !e && f && p(!1), e) {
              const e = (({
                bearerToken: e
              }) => {
                const t = (0, M.s)(e),
                  {
                    host: a
                  } = (0, s.getConfigForDomain)(),
                  r = parseInt(t.nameid),
                  n = t["scAuth.Nickname"],
                  c = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  o = new Date(t["scAuth.MemberSince"]),
                  i = new Date,
                  u = (0, A.M)(i, o) < 12,
                  l = (new Date).getTime() / 1e3;
                return {
                  id: r,
                  nonExpiredToken: (t?.exp ?? 0) - l > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: u,
                  nickname: n,
                  profile_link: `https://${a}.rockstargames.com/member/${n}?id=${r}`
                }
              })({
                bearerToken: c
              });
              i((t => ({
                ...t,
                ...e
              })))
            }
          }), [c, f]), (0, n.useEffect)((() => {
            (async () => {
              if (d && o && a && !o?.crews && o?.characters) {
                const e = await (async ({
                  pingBearer: e,
                  rockstarId: t
                }) => {
                  const {
                    crews: a
                  } = await (0, s.coreScApiFetch)("crew/forMember", {
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
                }))), m((e => e - 1))
              }
            })()
          }), [o?.nickname, a, d, o?.characters]), (0, n.useEffect)((() => {
            (async () => {
              if (!d || !o || null != o?.hasNotification) return;
              const e = await (async ({
                pingBearer: e
              }) => await (0, s.coreScApiFetch)("notification/count", {
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
          }), [d, o?.hasNotification]), (0, n.useEffect)((() => {
            (async () => {
              if (!d || !o || o?.gamesPlayed) return;
              const e = await (async ({
                pingBearer: e
              }) => {
                const {
                  all: t
                } = await (0, s.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: e
                });
                return t
              })({
                pingBearer: l
              });
              i((t => ({
                ...t,
                gamesPlayed: e
              }))), m((e => e - 1))
            })()
          }), [o?.nickname, d]), (0, n.useEffect)((() => {
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
                    n = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: e
                    });
                  await (n?.platforms?.reduce((async (t, a) => {
                    if (await t, ["ps3", "xbox", "xbox360"].includes(a)) return;
                    const n = await (0, s.coreScApiFetch)(`games/gtao/characters?platform=${a}`, {
                      pingBearer: e
                    });
                    n?.status && n?.result?.map((e => {
                      const {
                        stats: t
                      } = e, {
                        overview: n
                      } = t, {
                        rank: s
                      } = n;
                      if ("0" === s.value) return;
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
                  } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
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
                  let p = "",
                    f = "";
                  return l?.map((e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (f = e.userName), e))), r.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), r.map(((e, t) => (e.platformUsername = d, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = f || d), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || d), e))), {
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
                }))), m((e => e - 1))
              }
            })()
          }), [t, o?.nickname, d]), (0, n.useEffect)((() => {
            o?.id && o?.nonExpiredToken && (p(!0), w(o.id))
          }), [JSON.stringify(o)]), {
            data: o,
            loggedIn: d,
            loading: h
          }
        },
        P = {},
        V = (0, s.setContextItem)({
          context: (0, n.createContext)(P),
          key: "userContext"
        }),
        O = ({
          children: e,
          privateToken: t
        }) => {
          const a = N({
              privateToken: t
            }),
            s = (0, n.useMemo)((() => ({
              ...a,
              privateToken: t,
              hasProvider: !0
            })), [a]);
          return (0, r.jsx)(V.Provider, {
            value: s,
            children: e
          })
        },
        B = () => (0, n.useContext)(V)
    },
    42295: (e, t, a) => {
      e.exports = a(69245)
    },
    69245: (e, t, a) => {
      var r = a(62229),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        c = Object.prototype.hasOwnProperty,
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, a) {
        var r, s = {},
          u = null,
          l = null;
        for (r in void 0 !== a && (u = "" + a), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) c.call(t, r) && !i.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: n,
          type: e,
          key: u,
          ref: l,
          props: s,
          _owner: o.current
        }
      }
      t.Fragment = s, t.jsx = u, t.jsxs = u
    }
  }
]);