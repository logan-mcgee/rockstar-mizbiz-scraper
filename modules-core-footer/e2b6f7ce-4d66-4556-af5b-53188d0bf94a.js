! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e2b6f7ce-4d66-4556-af5b-53188d0bf94a", e._sentryDebugIdIdentifier = "sentry-dbid-e2b6f7ce-4d66-4556-af5b-53188d0bf94a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [1796, 7599, 2772], {
    7393: e => {
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
    },
    32469: (e, t, r) => {
      var a = r(62229),
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
    73855: (e, t, r) => {
      e.exports = r(32469)
    },
    2772: (e, t, r) => {
      r.r(t), r.d(t, {
        GtmProvider: () => u,
        RockstarUserProvider: () => U,
        useGtmTrack: () => d,
        useRockstarUser: () => D,
        useRockstarUserState: () => O
      });
      var a = r(62229),
        n = r(95966),
        c = r(40296);
      const s = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var o = r(73855);
      const i = (0, n.setContextItem)({
          context: (0, a.createContext)(void 0),
          key: "gtmContext22"
        }),
        u = e => {
          let {
            checkUser: t,
            children: r
          } = e;
          const u = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, r] = (0, a.useState)([]), [o, i] = (0, a.useState)([]), [u, l] = (0, a.useState)(null), {
                data: d,
                loggedIn: f
              } = D(), {
                hasGtaPlus: p
              } = d ?? {}, m = (0, c.bn)(), g = (e, a) => {
                const c = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = a ?? {};
                    (0, n.track)({
                      ...e,
                      ...t
                    }), c.push(e)
                  }
                })), r([...t, ...c])
              };
              (0, a.useEffect)((() => {
                if (d && null !== f) {
                  const e = k(d);
                  o.length && e && g(o, e), l(e)
                } else e || o.length && g(o)
              }), [d, f, o]), (0, a.useEffect)((() => {
                const e = o.filter((e => -1 === t.indexOf(e)));
                i(e)
              }), [t]);
              const k = e => {
                const t = [],
                  r = [],
                  a = [],
                  n = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [c, s] = e;
                  s.length && s.forEach((e => {
                    const s = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === c) {
                      r.includes(s) || r.push(s), a.includes(s) || "1" !== e.stats?.overview?.hasGtaPlus?.value || a.push(s);
                      const t = `${c}_${e.platform}`;
                      n.includes(t) || n.push(t)
                    }
                    t.includes(s) || t.push(s)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [r, a] = e;
                  n.push(`${r}_${a}`), t.includes(a) || t.push(a)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: f ?? !1,
                  gta_plus_active: !!f && Boolean(p),
                  platforms_played: t.length ? t.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: n.length ? n.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: r.length ? r.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: a.length ? a.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
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
                  return (0, n.track)({
                    ...e,
                    ...u
                  })
                }
              }
            }(t),
            l = (0, a.useMemo)((() => u), [u, t]);
          return (0, o.jsx)(i.Provider, {
            value: l,
            children: r
          })
        },
        l = {
          track: () => null
        },
        d = () => (0, a.useContext)(i) ?? l,
        f = (0, n.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, n.makeVar)(null)
        }),
        p = e => f(e),
        m = (0, n.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, n.makeVar)(!1)
        }),
        g = e => m(e),
        k = (0, n.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, n.makeVar)(!1)
        }),
        h = e => k(e),
        y = (0, n.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, n.makeVar)((0, n.webSettingsReactive)()?.currentCharId)
        }),
        v = e => y(e),
        b = (0, n.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, n.makeVar)(null)
        }),
        w = e => b(e),
        _ = (0, n.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, n.makeVar)(null)
        }),
        S = (0, n.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, n.makeVar)(!1)
        }),
        x = e => S(e),
        C = (0, n.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, n.makeVar)(!1)
        }),
        E = e => C(e),
        I = (0, n.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, n.makeVar)(null)
        }),
        M = e => I(e),
        O = () => {
          const e = (0, n.useReactiveVar)(S),
            t = (0, n.useReactiveVar)(C),
            r = (0, n.useReactiveVar)(y),
            a = (0, n.useReactiveVar)(f),
            c = (0, n.useReactiveVar)(k),
            s = (0, n.useReactiveVar)(b);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: r,
            hasNotifications: c,
            navOpen: a,
            userData: (0, n.useReactiveVar)(I),
            selectedCharacterTuple: s,
            jumpScMenuFocus: (0, n.useReactiveVar)(m),
            setCharactersNeeded: x,
            setCrewsNeeded: E,
            setCurrentCharId: v,
            setHasNotifications: h,
            setNavOpen: p,
            setSelectedCharacterTuple: w,
            setUserData: M,
            setJumpScMenuFocus: g
          }
        };
      var R = r(17531),
        A = r.n(R);
      var j = r(37240),
        P = r(35422);
      const V = e => {
          let {
            privateToken: t
          } = e;
          const {
            charactersNeeded: r,
            crewsNeeded: c,
            currentCharId: s
          } = O(), o = (0, n.useRockstarToken)(), [i, u] = (0, a.useState)(), [l] = (0, n.useRockstarTokenReactive)(), d = (0, n.useRockstarTokenPing)(), [f, p] = (0, a.useState)(), [m, g] = (0, a.useState)(!1), k = void 0 === f, [h, y] = (0, a.useState)(1);
          return (0, a.useEffect)((() => {
            "gtao" !== r || i?.characters?.gtao || (u({
              ...i,
              accountSynced: !1
            }), y((e => e + 1)))
          }), [r, i?.characters?.gtao]), (0, a.useEffect)((() => {
            c && !i?.crews && (u({
              ...i,
              accountSynced: !1
            }), y((e => e + 1)))
          }), [c, i?.crews]), (0, a.useEffect)((() => {
            0 === h && u({
              ...i,
              accountSynced: !0
            })
          }), [h]), (0, a.useEffect)((() => {
            t && l(t)
          }), [t]), (0, a.useEffect)((() => {
            "" !== o || d()
          }), [o]), (0, a.useEffect)((() => {
            if ("" === o) return;
            const e = !!o;
            if (e || m || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: t
                    } = e;
                    const {
                      gateway: r,
                      silentCheck: a
                    } = (0, n.getConfigForDomain)(), c = {
                      method: "POST",
                      body: `fingerprint=${await A().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, s = await fetch(a, c);
                    if (200 !== s.status) return void t(!1);
                    const o = `${r}?code=${await s.json()}`,
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
              })(), g(!0)), !e && m && p(!1), e) {
              const e = (e => {
                let {
                  bearerToken: t
                } = e;
                const r = (0, j.s)(t),
                  {
                    host: a
                  } = (0, n.getConfigForDomain)(),
                  c = parseInt(r.nameid),
                  s = r["scAuth.Nickname"],
                  o = "True" === (r?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(r["scAuth.MemberSince"]),
                  u = new Date,
                  l = (0, P.M)(u, i) < 12,
                  d = (new Date).getTime() / 1e3;
                return {
                  id: c,
                  nonExpiredToken: (r?.exp ?? 0) - d > 0,
                  avatar: r["scAuth.AvatarUrl"],
                  bearer_token_expired: r.exp > Date.now(),
                  isAMinor: o,
                  isNewAccount: l,
                  nickname: s,
                  profile_link: `https://${a}.rockstargames.com/member/${s}?id=${c}`
                }
              })({
                bearerToken: o
              });
              u({
                ...i,
                ...e
              })
            }
          }), [o, m]), (0, a.useEffect)((() => {
            (async () => {
              if (f && i && c && !i?.crews) {
                const e = await (async e => {
                  let {
                    pingBearer: t,
                    rockstarId: r
                  } = e;
                  const {
                    crews: a
                  } = await (0, n.coreScApiFetch)("crew/forMember", {
                    pingBearer: t,
                    query: {
                      userId: r
                    }
                  });
                  return a
                })({
                  pingBearer: d,
                  rockstarId: i.id
                });
                u({
                  ...i,
                  crews: e
                }), y((e => e - 1))
              }
            })()
          }), [i?.nickname, c, f]), (0, a.useEffect)((() => {
            (async () => {
              if (!f || !i || i?.gamesPlayed) return;
              const e = await (async e => {
                let {
                  pingBearer: t
                } = e;
                const {
                  all: r
                } = await (0, n.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: t
                });
                return r
              })({
                pingBearer: d
              });
              u({
                ...i,
                gamesPlayed: e
              }), y((e => e - 1))
            })()
          }), [i?.nickname, f]), (0, a.useEffect)((() => {
            (async () => {
              if (f && i && "gtao" === r && !i?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: t
                } = await (async e => {
                  let {
                    pingBearer: t,
                    nickname: r,
                    rockstarId: a
                  } = e;
                  const c = [],
                    s = await (0, n.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  await (s?.platforms?.reduce((async (e, r) => {
                    if (await e, ["ps3", "xbox", "xbox360"].includes(r)) return;
                    const a = await (0, n.coreScApiFetch)(`games/gtao/characters?platform=${r}`, {
                      pingBearer: t
                    });
                    a?.status && a?.result?.map((e => {
                      const {
                        stats: t
                      } = e, {
                        overview: a
                      } = t, {
                        rank: n
                      } = a;
                      if ("0" === n.value) return;
                      const s = ["ps4", "ps5"].includes(r) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return c.push({
                        ...e,
                        mugshotUrl: s,
                        platform: r
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: o,
                    accounts: i
                  } = await (0, n.coreScApiFetch)(`profile/getprofile?nickname=${r}&maxFriends=0`, {
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
                  if (l?.rockstarId !== a) return {
                    gtaoCharacters: c,
                    linkedAccounts: []
                  };
                  if (!c.length) return {
                    gtaoCharacters: c,
                    linkedAccounts: u.linkedAccounts
                  };
                  const f = r;
                  let p = "",
                    m = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (m = e.userName), e))), c.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), c.map(((e, t) => (e.platformUsername = f, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = m || f), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || f), e))), {
                    gtaoCharacters: c,
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
                  hasGtaPlus: "1" === e?.[s]?.stats?.overview?.hasGtaPlus?.value
                }), y((e => e - 1))
              }
            })()
          }), [r, i?.nickname, f]), (0, a.useEffect)((() => {
            i?.id && i?.nonExpiredToken && (p(!0), _(i.id))
          }), [JSON.stringify(i)]), {
            data: i,
            loggedIn: f,
            loading: k
          }
        },
        N = {},
        T = (0, n.setContextItem)({
          context: (0, a.createContext)(N),
          key: "userContext"
        }),
        U = e => {
          let {
            children: t,
            privateToken: r
          } = e;
          const n = V({
              privateToken: r
            }),
            c = (0, a.useMemo)((() => ({
              ...n,
              privateToken: r,
              hasProvider: !0
            })), [n]);
          return (0, o.jsx)(T.Provider, {
            value: c,
            children: t
          })
        },
        D = () => (0, a.useContext)(T)
    }
  }
]);