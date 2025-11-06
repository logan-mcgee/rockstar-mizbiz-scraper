try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "948e0b6d-1da8-48e6-84e0-124383d4d3a0", e._sentryDebugIdIdentifier = "sentry-dbid-948e0b6d-1da8-48e6-84e0-124383d4d3a0")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2169, 2295, 4676, 7533, 8113], {
    32169: (e, t, r) => {
      r.r(t), r.d(t, {
        GtmProvider: () => u,
        RockstarUserProvider: () => N,
        useGtmTrack: () => d,
        useRockstarUser: () => V,
        useRockstarUserState: () => M
      });
      var a = r(42295),
        n = r(71127),
        c = r(95966),
        s = r(56088);
      const o = {
          pcalt: "PC",
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        i = (0, c.setContextItem)({
          context: (0, n.createContext)(void 0),
          key: "gtmContext22"
        }),
        u = ({
          checkUser: e,
          children: t
        }) => {
          const r = ((e = !0) => {
              const [t, r] = (0, n.useState)([]), [a, i] = (0, n.useState)([]), [u, l] = (0, n.useState)(null), {
                data: d,
                loggedIn: f
              } = V(), {
                hasGtaPlus: p
              } = d ?? {}, m = (0, s.bn)(), h = (e, a) => {
                const n = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = a ?? {};
                    (0, c.track)({
                      ...e,
                      ...t
                    }), n.push(e)
                  }
                })), r([...t, ...n])
              };
              (0, n.useEffect)((() => {
                if (d && null !== f) {
                  const e = g(d);
                  a.length && e && h(a, e), l(e)
                } else e || a.length && h(a)
              }), [d, f, a]), (0, n.useEffect)((() => {
                const e = a.filter((e => -1 === t.indexOf(e)));
                i(e)
              }), [t]);
              const g = e => {
                const t = [],
                  r = [],
                  a = [],
                  n = [];
                return Object.entries(e?.characters ?? []).forEach((([e, c]) => {
                  c.length && c.forEach((c => {
                    const s = (e => "pcalt" === e ? "pc" : e.toString())(c.platform);
                    if ("gtao" === e) {
                      r.includes(s) || r.push(s), a.includes(s) || "1" !== c.stats?.overview?.hasGtaPlus?.value || a.push(s);
                      const t = `${e}_${c.platform}`;
                      n.includes(t) || n.push(t)
                    }
                    t.includes(s) || t.push(s)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((([e, r]) => {
                  n.push(`${e}_${r}`), t.includes(r) || t.push(r)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: f ?? !1,
                  gta_plus_active: !!f && Boolean(p),
                  platforms_played: t.length ? t.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: n.length ? n.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: r.length ? r.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: a.length ? a.map((e => o[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  const t = "boolean" == typeof f,
                    r = Boolean(d && u);
                  if (!t || !0 === f && !r) {
                    const t = [...a];
                    return t.push({
                      ...e
                    }), i(t)
                  }
                  return (0, c.track)({
                    ...e,
                    ...u
                  })
                }
              }
            })(e),
            u = (0, n.useMemo)((() => r), [r, e]);
          return (0, a.jsx)(i.Provider, {
            value: u,
            children: t
          })
        },
        l = {
          track: () => null
        },
        d = () => (0, n.useContext)(i) ?? l,
        f = (0, c.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, c.makeVar)(null)
        }),
        p = e => f(e),
        m = (0, c.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, c.makeVar)(!1)
        }),
        h = e => m(e),
        g = (0, c.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, c.makeVar)((0, c.webSettingsReactive)()?.currentCharId)
        }),
        k = e => g(e),
        y = (0, c.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, c.makeVar)(null)
        }),
        v = e => y(e),
        b = (0, c.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, c.makeVar)(null)
        }),
        w = (0, c.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, c.makeVar)(!1)
        }),
        _ = e => w(e),
        S = (0, c.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, c.makeVar)(!1)
        }),
        x = e => S(e),
        E = (0, c.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, c.makeVar)(null)
        }),
        C = e => E(e),
        M = () => {
          const e = (0, c.useReactiveVar)(w),
            t = (0, c.useReactiveVar)(S),
            r = (0, c.useReactiveVar)(g),
            a = (0, c.useReactiveVar)(f),
            n = (0, c.useReactiveVar)(y);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: r,
            navOpen: a,
            userData: (0, c.useReactiveVar)(E),
            selectedCharacterTuple: n,
            jumpScMenuFocus: (0, c.useReactiveVar)(m),
            setCharactersNeeded: _,
            setCrewsNeeded: x,
            setCurrentCharId: k,
            setNavOpen: p,
            setSelectedCharacterTuple: v,
            setUserData: C,
            setJumpScMenuFocus: h
          }
        };
      var I = r(39763),
        O = r.n(I);
      var A = r(58128),
        R = r(25130);
      const j = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: t,
            crewsNeeded: r,
            currentCharId: a
          } = M(), s = (0, c.useRockstarToken)(), [o, i] = (0, n.useState)({
            id: 0,
            avatar: "",
            bearer_token_expired: !0,
            isAMinor: !1,
            isNewAccount: !1,
            nickname: "",
            nonExpiredToken: !1,
            profile_link: "https://",
            accountSynced: !1
          }), [u] = (0, c.useRockstarTokenReactive)(), l = (0, c.useRockstarTokenPing)(), [d, f] = (0, n.useState)(), [p, m] = (0, n.useState)(!1), h = void 0 === d, [g, k] = (0, n.useState)(1);
          return (0, n.useEffect)((() => {
            "gtao" !== t || o?.characters?.gtao || (i((e => ({
              ...e,
              accountSynced: !1
            }))), k((e => e + 1)))
          }), [t, o?.characters?.gtao]), (0, n.useEffect)((() => {
            r && !o?.crews && (i((e => ({
              ...e,
              accountSynced: !1
            }))), k((e => e + 1)))
          }), [r, o?.crews]), (0, n.useEffect)((() => {
            0 === g && i((e => ({
              ...e,
              accountSynced: !0
            })))
          }), [g]), (0, n.useEffect)((() => {
            e && u(e)
          }), [e]), (0, n.useEffect)((() => {
            "" !== s || l()
          }), [s]), (0, n.useEffect)((() => {
            if ("" === s) return;
            const e = !!s;
            if (e || p || ((async () => {
                try {
                  await (async ({
                    token: e
                  }) => {
                    const {
                      gateway: t,
                      silentCheck: r
                    } = (0, c.getConfigForDomain)(), a = {
                      method: "POST",
                      body: `fingerprint=${await O().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, n = await fetch(r, a);
                    if (200 !== n.status) return void e(!1);
                    const s = `${t}?code=${await n.json()}`,
                      o = await fetch(s, {
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
              })(), m(!0)), !e && p && f(!1), e) {
              const e = (({
                bearerToken: e
              }) => {
                const t = (0, A.s)(e),
                  {
                    host: r
                  } = (0, c.getConfigForDomain)(),
                  a = parseInt(t.nameid),
                  n = t["scAuth.Nickname"],
                  s = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  o = new Date(t["scAuth.MemberSince"]),
                  i = new Date,
                  u = (0, R.M)(i, o) < 12,
                  l = (new Date).getTime() / 1e3;
                return {
                  id: a,
                  nonExpiredToken: (t?.exp ?? 0) - l > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: s,
                  isNewAccount: u,
                  nickname: n,
                  profile_link: `https://${r}.rockstargames.com/member/${n}?id=${a}`
                }
              })({
                bearerToken: s
              });
              i((t => ({
                ...t,
                ...e
              })))
            }
          }), [s, p]), (0, n.useEffect)((() => {
            (async () => {
              if (d && o && r && !o?.crews && o?.characters) {
                const e = await (async ({
                  pingBearer: e,
                  rockstarId: t
                }) => {
                  const {
                    crews: r
                  } = await (0, c.coreScApiFetch)("crew/forMember", {
                    pingBearer: e,
                    query: {
                      userId: t
                    }
                  });
                  return r
                })({
                  pingBearer: l,
                  rockstarId: o.id
                });
                i((t => ({
                  ...t,
                  crews: e
                }))), k((e => e - 1))
              }
            })()
          }), [o?.nickname, r, d, o?.characters]), (0, n.useEffect)((() => {
            (async () => {
              if (!d || !o || null != o?.hasNotification) return;
              const e = await (async ({
                pingBearer: e
              }) => await (0, c.coreScApiFetch)("notification/count", {
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
                } = await (0, c.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: e
                });
                return t
              })({
                pingBearer: l
              });
              i((t => ({
                ...t,
                gamesPlayed: e
              }))), k((e => e - 1))
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
                  rockstarId: r
                }) => {
                  const a = [],
                    n = await (0, c.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: e
                    });
                  await (n?.platforms?.reduce((async (t, r) => {
                    if (await t, ["ps3", "xbox", "xbox360"].includes(r)) return;
                    const n = await (0, c.coreScApiFetch)(`games/gtao/characters?platform=${r}`, {
                      pingBearer: e
                    });
                    n?.status && n?.result?.map((e => {
                      const {
                        stats: t
                      } = e, {
                        overview: n
                      } = t, {
                        rank: c
                      } = n;
                      if ("0" === c.value) return;
                      const s = ["ps4", "ps5"].includes(r) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return a.push({
                        ...e,
                        mugshotUrl: s,
                        platform: r
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: s,
                    accounts: o
                  } = await (0, c.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                    pingBearer: e
                  });
                  if (!s || !o.length) return {
                    gtaoCharacters: a,
                    linkedAccounts: []
                  };
                  const i = o[0],
                    {
                      rockstarAccount: u,
                      linkedAccounts: l
                    } = i;
                  if (u?.rockstarId !== r) return {
                    gtaoCharacters: a,
                    linkedAccounts: []
                  };
                  if (!a.length) return {
                    gtaoCharacters: a,
                    linkedAccounts: i.linkedAccounts
                  };
                  const d = t;
                  let f = "",
                    p = "";
                  return l?.map((e => ("xbl" === e?.onlineService ? f = e.userName : "np" === e?.onlineService && (p = e.userName), e))), a.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), a.map(((e, t) => (e.platformUsername = d, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = p || d), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = f || d), e))), {
                    gtaoCharacters: a,
                    linkedAccounts: l
                  }
                })({
                  pingBearer: l,
                  nickname: o.nickname,
                  rockstarId: o.id
                });
                i((r => ({
                  ...r,
                  characters: {
                    ...r.characters,
                    gtao: e
                  },
                  linkedAccounts: t,
                  hasGtaPlus: "1" === e?.[a]?.stats?.overview?.hasGtaPlus?.value
                }))), k((e => e - 1))
              }
            })()
          }), [t, o?.nickname, d]), (0, n.useEffect)((() => {
            o?.id && o?.nonExpiredToken && (f(!0), b(o.id))
          }), [JSON.stringify(o)]), {
            data: o,
            loggedIn: d,
            loading: h
          }
        },
        T = {},
        P = (0, c.setContextItem)({
          context: (0, n.createContext)(T),
          key: "userContext"
        }),
        N = ({
          children: e,
          privateToken: t
        }) => {
          const r = j({
              privateToken: t
            }),
            c = (0, n.useMemo)((() => ({
              ...r,
              privateToken: t,
              hasProvider: !0
            })), [r]);
          return (0, a.jsx)(P.Provider, {
            value: c,
            children: e
          })
        },
        V = () => (0, n.useContext)(P)
    },
    42295: (e, t, r) => {
      e.exports = r(69245)
    },
    69245: (e, t, r) => {
      var a = r(71127),
        n = Symbol.for("react.element"),
        c = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        o = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, r) {
        var a, c = {},
          u = null,
          l = null;
        for (a in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) s.call(t, a) && !i.hasOwnProperty(a) && (c[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === c[a] && (c[a] = t[a]);
        return {
          $$typeof: n,
          type: e,
          key: u,
          ref: l,
          props: c,
          _owner: o.current
        }
      }
      t.Fragment = c, t.jsx = u, t.jsxs = u
    },
    79465: e => {
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === r
            }(e)
          }(e)
        },
        r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function a(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? o((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function n(e, t, r) {
        return e.concat(t).map((function(e) {
          return a(e, r)
        }))
      }

      function c(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          })) : []
        }(e))
      }

      function s(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function o(e, r, i) {
        (i = i || {}).arrayMerge = i.arrayMerge || n, i.isMergeableObject = i.isMergeableObject || t, i.cloneUnlessOtherwiseSpecified = a;
        var u = Array.isArray(r);
        return u === Array.isArray(e) ? u ? i.arrayMerge(e, r, i) : function(e, t, r) {
          var n = {};
          return r.isMergeableObject(e) && c(e).forEach((function(t) {
            n[t] = a(e[t], r)
          })), c(t).forEach((function(c) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, c) || (s(e, c) && r.isMergeableObject(t[c]) ? n[c] = function(e, t) {
              if (!t.customMerge) return o;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : o
            }(c, r)(e[c], t[c], r) : n[c] = a(t[c], r))
          })), n
        }(e, r, i) : a(r, i)
      }
      o.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, r) {
          return o(e, r, t)
        }), {})
      };
      var i = o;
      e.exports = i
    }
  }
]);