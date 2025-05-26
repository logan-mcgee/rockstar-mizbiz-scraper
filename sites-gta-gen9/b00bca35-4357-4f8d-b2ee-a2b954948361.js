! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b00bca35-4357-4f8d-b2ee-a2b954948361", e._sentryDebugIdIdentifier = "sentry-dbid-b00bca35-4357-4f8d-b2ee-a2b954948361")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [276, 5854, 7895], {
    25854: (e, t, a) => {
      e.exports = a(41454)
    },
    41454: (e, t, a) => {
      var r = a(62229),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        c = Object.prototype.hasOwnProperty,
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, a) {
        var r, n = {},
          l = null,
          u = null;
        for (r in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) c.call(t, r) && !i.hasOwnProperty(r) && (n[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === n[r] && (n[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: l,
          ref: u,
          props: n,
          _owner: o.current
        }
      }
      t.Fragment = n, t.jsx = l, t.jsxs = l
    },
    57895: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => l,
        RockstarUserProvider: () => j,
        useGtmTrack: () => d,
        useRockstarUser: () => B,
        useRockstarUserState: () => E
      });
      var r = a(62229),
        s = a(95966),
        n = a(98397);
      const c = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var o = a(25854);
      const i = (0, s.setContextItem)({
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
              const [t, a] = (0, r.useState)([]), [o, i] = (0, r.useState)([]), [l, u] = (0, r.useState)(null), {
                data: d,
                loggedIn: f
              } = B(), {
                hasGtaPlus: p
              } = d ?? {}, g = (0, n.bn)(), m = (e, r) => {
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
                if (d && null !== f) {
                  const e = k(d);
                  o.length && e && m(o, e), u(e)
                } else e || o.length && m(o)
              }), [d, f, o]), (0, r.useEffect)((() => {
                const e = o.filter((e => -1 === t.indexOf(e)));
                i(e)
              }), [t]);
              const k = e => {
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
                  gta_plus_active: !!f && Boolean(p),
                  platforms_played: t.length ? t.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: g
                }
              };
              return {
                track: e => {
                  if (void 0 === f || !d || !l) {
                    const t = [...o];
                    return t.push({
                      ...e
                    }), i(t)
                  }
                  return (0, s.track)({
                    ...e,
                    ...l
                  })
                }
              }
            }(t),
            u = (0, r.useMemo)((() => l), [l, t]);
          return (0, o.jsx)(i.Provider, {
            value: u,
            children: a
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
        g = (0, s.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, s.makeVar)(!1)
        }),
        m = e => g(e),
        k = (0, s.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, s.makeVar)(!1)
        }),
        h = e => k(e),
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
        x = e => M(e),
        C = (0, s.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        S = e => C(e),
        I = (0, s.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, s.makeVar)(null)
        }),
        R = e => I(e),
        E = () => {
          const e = (0, s.useReactiveVar)(M),
            t = (0, s.useReactiveVar)(C),
            a = (0, s.useReactiveVar)(v),
            r = (0, s.useReactiveVar)(f),
            n = (0, s.useReactiveVar)(k),
            c = (0, s.useReactiveVar)(b);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: n,
            navOpen: r,
            userData: (0, s.useReactiveVar)(I),
            selectedCharacterTuple: c,
            jumpScMenuFocus: (0, s.useReactiveVar)(g),
            setCharactersNeeded: x,
            setCrewsNeeded: S,
            setCurrentCharId: y,
            setHasNotifications: h,
            setNavOpen: p,
            setSelectedCharacterTuple: w,
            setUserData: R,
            setJumpScMenuFocus: m
          }
        };
      var T = a(93830),
        V = a.n(T);
      var N = a(4895),
        A = a(10715);
      const P = e => {
          let {
            privateToken: t
          } = e;
          const {
            charactersNeeded: a,
            crewsNeeded: n,
            currentCharId: c
          } = E(), o = (0, s.useRockstarToken)(), [i, l] = (0, r.useState)(), [u] = (0, s.useRockstarTokenReactive)(), d = (0, s.useRockstarTokenPing)(), [f, p] = (0, r.useState)(), [g, m] = (0, r.useState)(!1), k = void 0 === f, [h, v] = (0, r.useState)(1);
          return (0, r.useEffect)((() => {
            "gtao" !== a || i?.characters?.gtao || (l({
              ...i,
              accountSynced: !1
            }), v((e => e + 1)))
          }), [a, i?.characters?.gtao]), (0, r.useEffect)((() => {
            n && !i?.crews && (l({
              ...i,
              accountSynced: !1
            }), v((e => e + 1)))
          }), [n, i?.crews]), (0, r.useEffect)((() => {
            0 === h && l({
              ...i,
              accountSynced: !0
            })
          }), [h]), (0, r.useEffect)((() => {
            t && u(t)
          }), [t]), (0, r.useEffect)((() => {
            "" !== o || d()
          }), [o]), (0, r.useEffect)((() => {
            if ("" === o) return;
            const e = !!o;
            if (e || g || ((async () => {
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
                      body: `fingerprint=${await V().get().then((e=>e))}`,
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
              })(), m(!0)), !e && g && p(!1), e) {
              const e = (e => {
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
                  l = new Date,
                  u = (0, A.M)(l, i) < 12,
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
          }), [o, g]), (0, r.useEffect)((() => {
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
                }), v((e => e - 1))
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
              }), v((e => e - 1))
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
                    g = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (g = e.userName), e))), n.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), n.map(((e, t) => (e.platformUsername = f, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = g || f), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || f), e))), {
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
                }), v((e => e - 1))
              }
            })()
          }), [a, i?.nickname, f]), (0, r.useEffect)((() => {
            i?.id && i?.nonExpiredToken && (p(!0), _(i.id))
          }), [JSON.stringify(i)]), {
            data: i,
            loggedIn: f,
            loading: k
          }
        },
        O = {},
        U = (0, s.setContextItem)({
          context: (0, r.createContext)(O),
          key: "userContext"
        }),
        j = e => {
          let {
            children: t,
            privateToken: a
          } = e;
          const s = P({
              privateToken: a
            }),
            n = (0, r.useMemo)((() => ({
              ...s,
              privateToken: a,
              hasProvider: !0
            })), [s]);
          return (0, o.jsx)(U.Provider, {
            value: n,
            children: t
          })
        },
        B = () => (0, r.useContext)(U)
    }
  }
]);