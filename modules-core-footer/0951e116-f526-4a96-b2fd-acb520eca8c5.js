! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0951e116-f526-4a96-b2fd-acb520eca8c5", e._sentryDebugIdIdentifier = "sentry-dbid-0951e116-f526-4a96-b2fd-acb520eca8c5")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [7895, 8965, 9090], {
    25854: (e, t, a) => {
      e.exports = a(41454)
    },
    41454: (e, t, a) => {
      var r = a(71127),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, a) {
        var r, o = {},
          u = null,
          l = null;
        for (r in void 0 !== a && (u = "" + a), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) s.call(t, r) && !i.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
        return {
          $$typeof: n,
          type: e,
          key: u,
          ref: l,
          props: o,
          _owner: c.current
        }
      }
      t.Fragment = o, t.jsx = u, t.jsxs = u
    },
    57895: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => u,
        RockstarUserProvider: () => U,
        useGtmTrack: () => d,
        useRockstarUser: () => B,
        useRockstarUserState: () => O
      });
      var r = a(71127),
        n = a(95966),
        o = a(98397);
      const s = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var c = a(25854);
      const i = (0, n.setContextItem)({
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
              const [t, a] = (0, r.useState)([]), [c, i] = (0, r.useState)([]), [u, l] = (0, r.useState)(null), {
                data: d,
                loggedIn: f
              } = B(), {
                hasGtaPlus: p
              } = d ?? {}, m = (0, o.bn)(), g = (e, r) => {
                const o = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = r ?? {};
                    (0, n.track)({
                      ...e,
                      ...t
                    }), o.push(e)
                  }
                })), a([...t, ...o])
              };
              (0, r.useEffect)((() => {
                if (d && null !== f) {
                  const e = y(d);
                  c.length && e && g(c, e), l(e)
                } else e || c.length && g(c)
              }), [d, f, c]), (0, r.useEffect)((() => {
                const e = c.filter((e => -1 === t.indexOf(e)));
                i(e)
              }), [t]);
              const y = e => {
                const t = [],
                  a = [],
                  r = [],
                  n = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [o, s] = e;
                  s.length && s.forEach((e => {
                    const s = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === o) {
                      a.includes(s) || a.push(s), r.includes(s) || "1" !== e.stats?.overview?.hasGtaPlus?.value || r.push(s);
                      const t = `${o}_${e.platform}`;
                      n.includes(t) || n.push(t)
                    }
                    t.includes(s) || t.push(s)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [a, r] = e;
                  n.push(`${a}_${r}`), t.includes(r) || t.push(r)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: f ?? !1,
                  gta_plus_active: !!f && Boolean(p),
                  platforms_played: t.length ? t.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: n.length ? n.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => s[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  const t = "boolean" == typeof f,
                    a = Boolean(d && u);
                  if (!t || !0 === f && !a) {
                    const t = [...c];
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
            l = (0, r.useMemo)((() => u), [u, t]);
          return (0, c.jsx)(i.Provider, {
            value: l,
            children: a
          })
        },
        l = {
          track: () => null
        },
        d = () => (0, r.useContext)(i) ?? l,
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
        y = (0, n.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, n.makeVar)(!1)
        }),
        h = e => y(e),
        k = (0, n.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, n.makeVar)((0, n.webSettingsReactive)()?.currentCharId)
        }),
        b = e => k(e),
        v = (0, n.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, n.makeVar)(null)
        }),
        w = e => v(e),
        _ = (0, n.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, n.makeVar)(null)
        }),
        M = (0, n.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, n.makeVar)(!1)
        }),
        S = e => M(e),
        x = (0, n.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, n.makeVar)(!1)
        }),
        C = e => x(e),
        E = (0, n.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, n.makeVar)(null)
        }),
        I = e => E(e),
        O = () => {
          const e = (0, n.useReactiveVar)(M),
            t = (0, n.useReactiveVar)(x),
            a = (0, n.useReactiveVar)(k),
            r = (0, n.useReactiveVar)(f),
            o = (0, n.useReactiveVar)(y),
            s = (0, n.useReactiveVar)(v);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: o,
            navOpen: r,
            userData: (0, n.useReactiveVar)(E),
            selectedCharacterTuple: s,
            jumpScMenuFocus: (0, n.useReactiveVar)(m),
            setCharactersNeeded: S,
            setCrewsNeeded: C,
            setCurrentCharId: b,
            setHasNotifications: h,
            setNavOpen: p,
            setSelectedCharacterTuple: w,
            setUserData: I,
            setJumpScMenuFocus: g
          }
        };
      var R = a(93830),
        A = a.n(R);
      var j = a(4895),
        T = a(71256);
      const P = e => {
          let {
            privateToken: t
          } = e;
          const {
            charactersNeeded: a,
            crewsNeeded: o,
            currentCharId: s
          } = O(), c = (0, n.useRockstarToken)(), [i, u] = (0, r.useState)(), [l] = (0, n.useRockstarTokenReactive)(), d = (0, n.useRockstarTokenPing)(), [f, p] = (0, r.useState)(), [m, g] = (0, r.useState)(!1), y = void 0 === f, [h, k] = (0, r.useState)(1);
          return (0, r.useEffect)((() => {
            "gtao" !== a || i?.characters?.gtao || (u({
              ...i,
              accountSynced: !1
            }), k((e => e + 1)))
          }), [a, i?.characters?.gtao]), (0, r.useEffect)((() => {
            o && !i?.crews && (u({
              ...i,
              accountSynced: !1
            }), k((e => e + 1)))
          }), [o, i?.crews]), (0, r.useEffect)((() => {
            0 === h && u({
              ...i,
              accountSynced: !0
            })
          }), [h]), (0, r.useEffect)((() => {
            t && l(t)
          }), [t]), (0, r.useEffect)((() => {
            "" !== c || d()
          }), [c]), (0, r.useEffect)((() => {
            if ("" === c) return;
            const e = !!c;
            if (e || m || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: t
                    } = e;
                    const {
                      gateway: a,
                      silentCheck: r
                    } = (0, n.getConfigForDomain)(), o = {
                      method: "POST",
                      body: `fingerprint=${await A().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, s = await fetch(r, o);
                    if (200 !== s.status) return void t(!1);
                    const c = `${a}?code=${await s.json()}`,
                      i = await fetch(c, {
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
                const a = (0, j.s)(t),
                  {
                    host: r
                  } = (0, n.getConfigForDomain)(),
                  o = parseInt(a.nameid),
                  s = a["scAuth.Nickname"],
                  c = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(a["scAuth.MemberSince"]),
                  u = new Date,
                  l = (0, T.M)(u, i) < 12,
                  d = (new Date).getTime() / 1e3;
                return {
                  id: o,
                  nonExpiredToken: (a?.exp ?? 0) - d > 0,
                  avatar: a["scAuth.AvatarUrl"],
                  bearer_token_expired: a.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: l,
                  nickname: s,
                  profile_link: `https://${r}.rockstargames.com/member/${s}?id=${o}`
                }
              })({
                bearerToken: c
              });
              u({
                ...i,
                ...e
              })
            }
          }), [c, m]), (0, r.useEffect)((() => {
            (async () => {
              if (f && i && o && !i?.crews) {
                const e = await (async e => {
                  let {
                    pingBearer: t,
                    rockstarId: a
                  } = e;
                  const {
                    crews: r
                  } = await (0, n.coreScApiFetch)("crew/forMember", {
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
                u({
                  ...i,
                  crews: e
                }), k((e => e - 1))
              }
            })()
          }), [i?.nickname, o, f]), (0, r.useEffect)((() => {
            (async () => {
              if (!f || !i || i?.gamesPlayed) return;
              const e = await (async e => {
                let {
                  pingBearer: t
                } = e;
                const {
                  all: a
                } = await (0, n.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: t
                });
                return a
              })({
                pingBearer: d
              });
              u({
                ...i,
                gamesPlayed: e
              }), k((e => e - 1))
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
                  const o = [],
                    s = await (0, n.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  await (s?.platforms?.reduce((async (e, a) => {
                    if (await e, ["ps3", "xbox", "xbox360"].includes(a)) return;
                    const r = await (0, n.coreScApiFetch)(`games/gtao/characters?platform=${a}`, {
                      pingBearer: t
                    });
                    r?.status && r?.result?.map((e => {
                      const {
                        stats: t
                      } = e, {
                        overview: r
                      } = t, {
                        rank: n
                      } = r;
                      if ("0" === n.value) return;
                      const s = ["ps4", "ps5"].includes(a) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return o.push({
                        ...e,
                        mugshotUrl: s,
                        platform: a
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: c,
                    accounts: i
                  } = await (0, n.coreScApiFetch)(`profile/getprofile?nickname=${a}&maxFriends=0`, {
                    pingBearer: t
                  });
                  if (!c || !i.length) return {
                    gtaoCharacters: o,
                    linkedAccounts: []
                  };
                  const u = i[0],
                    {
                      rockstarAccount: l,
                      linkedAccounts: d
                    } = u;
                  if (l?.rockstarId !== r) return {
                    gtaoCharacters: o,
                    linkedAccounts: []
                  };
                  if (!o.length) return {
                    gtaoCharacters: o,
                    linkedAccounts: u.linkedAccounts
                  };
                  const f = a;
                  let p = "",
                    m = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (m = e.userName), e))), o.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), o.map(((e, t) => (e.platformUsername = f, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = m || f), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || f), e))), {
                    gtaoCharacters: o,
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
                }), k((e => e - 1))
              }
            })()
          }), [a, i?.nickname, f]), (0, r.useEffect)((() => {
            i?.id && i?.nonExpiredToken && (p(!0), _(i.id))
          }), [JSON.stringify(i)]), {
            data: i,
            loggedIn: f,
            loading: y
          }
        },
        V = {},
        N = (0, n.setContextItem)({
          context: (0, r.createContext)(V),
          key: "userContext"
        }),
        U = e => {
          let {
            children: t,
            privateToken: a
          } = e;
          const n = P({
              privateToken: a
            }),
            o = (0, r.useMemo)((() => ({
              ...n,
              privateToken: a,
              hasProvider: !0
            })), [n]);
          return (0, c.jsx)(N.Provider, {
            value: o,
            children: t
          })
        },
        B = () => (0, r.useContext)(N)
    },
    98398: e => {
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === a
            }(e)
          }(e)
        },
        a = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function r(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? c((a = e, Array.isArray(a) ? [] : {}), e, t) : e;
        var a
      }

      function n(e, t, a) {
        return e.concat(t).map((function(e) {
          return r(e, a)
        }))
      }

      function o(e) {
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

      function c(e, a, i) {
        (i = i || {}).arrayMerge = i.arrayMerge || n, i.isMergeableObject = i.isMergeableObject || t, i.cloneUnlessOtherwiseSpecified = r;
        var u = Array.isArray(a);
        return u === Array.isArray(e) ? u ? i.arrayMerge(e, a, i) : function(e, t, a) {
          var n = {};
          return a.isMergeableObject(e) && o(e).forEach((function(t) {
            n[t] = r(e[t], a)
          })), o(t).forEach((function(o) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (s(e, o) && a.isMergeableObject(t[o]) ? n[o] = function(e, t) {
              if (!t.customMerge) return c;
              var a = t.customMerge(e);
              return "function" == typeof a ? a : c
            }(o, a)(e[o], t[o], a) : n[o] = r(t[o], a))
          })), n
        }(e, a, i) : r(a, i)
      }
      c.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, a) {
          return c(e, a, t)
        }), {})
      };
      var i = c;
      e.exports = i
    }
  }
]);