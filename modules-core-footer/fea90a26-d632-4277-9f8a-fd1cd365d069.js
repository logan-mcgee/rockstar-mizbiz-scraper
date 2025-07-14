try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fea90a26-d632-4277-9f8a-fd1cd365d069", e._sentryDebugIdIdentifier = "sentry-dbid-fea90a26-d632-4277-9f8a-fd1cd365d069")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [7895, 8965, 9090], {
    25854: (e, t, r) => {
      e.exports = r(41454)
    },
    41454: (e, t, r) => {
      var a = r(71127),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, r) {
        var a, s = {},
          u = null,
          l = null;
        for (a in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) o.call(t, a) && !i.hasOwnProperty(a) && (s[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === s[a] && (s[a] = t[a]);
        return {
          $$typeof: n,
          type: e,
          key: u,
          ref: l,
          props: s,
          _owner: c.current
        }
      }
      t.Fragment = s, t.jsx = u, t.jsxs = u
    },
    57895: (e, t, r) => {
      r.r(t), r.d(t, {
        GtmProvider: () => u,
        RockstarUserProvider: () => U,
        useGtmTrack: () => d,
        useRockstarUser: () => B,
        useRockstarUserState: () => O
      });
      var a = r(71127),
        n = r(95966),
        s = r(98397);
      const o = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var c = r(25854);
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
              const [t, r] = (0, a.useState)([]), [c, i] = (0, a.useState)([]), [u, l] = (0, a.useState)(null), {
                data: d,
                loggedIn: f
              } = B(), {
                hasGtaPlus: p
              } = d ?? {}, m = (0, s.bn)(), g = (e, a) => {
                const s = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = a ?? {};
                    (0, n.track)({
                      ...e,
                      ...t
                    }), s.push(e)
                  }
                })), r([...t, ...s])
              };
              (0, a.useEffect)((() => {
                if (d && null !== f) {
                  const e = h(d);
                  c.length && e && g(c, e), l(e)
                } else e || c.length && g(c)
              }), [d, f, c]), (0, a.useEffect)((() => {
                const e = c.filter((e => -1 === t.indexOf(e)));
                i(e)
              }), [t]);
              const h = e => {
                const t = [],
                  r = [],
                  a = [],
                  n = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [s, o] = e;
                  o.length && o.forEach((e => {
                    const o = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === s) {
                      r.includes(o) || r.push(o), a.includes(o) || "1" !== e.stats?.overview?.hasGtaPlus?.value || a.push(o);
                      const t = `${s}_${e.platform}`;
                      n.includes(t) || n.push(t)
                    }
                    t.includes(o) || t.push(o)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [r, a] = e;
                  n.push(`${r}_${a}`), t.includes(a) || t.push(a)
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
            l = (0, a.useMemo)((() => u), [u, t]);
          return (0, c.jsx)(i.Provider, {
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
        h = (0, n.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, n.makeVar)(!1)
        }),
        k = e => h(e),
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
            s = (0, n.useReactiveVar)(h),
            o = (0, n.useReactiveVar)(b);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: r,
            hasNotifications: s,
            navOpen: a,
            userData: (0, n.useReactiveVar)(I),
            selectedCharacterTuple: o,
            jumpScMenuFocus: (0, n.useReactiveVar)(m),
            setCharactersNeeded: x,
            setCrewsNeeded: E,
            setCurrentCharId: v,
            setHasNotifications: k,
            setNavOpen: p,
            setSelectedCharacterTuple: w,
            setUserData: M,
            setJumpScMenuFocus: g
          }
        };
      var R = r(93830),
        A = r.n(R);
      var j = r(4895),
        T = r(71256);
      const P = e => {
          let {
            privateToken: t
          } = e;
          const {
            charactersNeeded: r,
            crewsNeeded: s,
            currentCharId: o
          } = O(), c = (0, n.useRockstarToken)(), [i, u] = (0, a.useState)(), [l] = (0, n.useRockstarTokenReactive)(), d = (0, n.useRockstarTokenPing)(), [f, p] = (0, a.useState)(), [m, g] = (0, a.useState)(!1), h = void 0 === f, [k, y] = (0, a.useState)(1);
          return (0, a.useEffect)((() => {
            "gtao" !== r || i?.characters?.gtao || (u({
              ...i,
              accountSynced: !1
            }), y((e => e + 1)))
          }), [r, i?.characters?.gtao]), (0, a.useEffect)((() => {
            s && !i?.crews && (u({
              ...i,
              accountSynced: !1
            }), y((e => e + 1)))
          }), [s, i?.crews]), (0, a.useEffect)((() => {
            0 === k && u({
              ...i,
              accountSynced: !0
            })
          }), [k]), (0, a.useEffect)((() => {
            t && l(t)
          }), [t]), (0, a.useEffect)((() => {
            "" !== c || d()
          }), [c]), (0, a.useEffect)((() => {
            if ("" === c) return;
            const e = !!c;
            if (e || m || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: t
                    } = e;
                    const {
                      gateway: r,
                      silentCheck: a
                    } = (0, n.getConfigForDomain)(), s = {
                      method: "POST",
                      body: `fingerprint=${await A().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, o = await fetch(a, s);
                    if (200 !== o.status) return void t(!1);
                    const c = `${r}?code=${await o.json()}`,
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
                const r = (0, j.s)(t),
                  {
                    host: a
                  } = (0, n.getConfigForDomain)(),
                  s = parseInt(r.nameid),
                  o = r["scAuth.Nickname"],
                  c = "True" === (r?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(r["scAuth.MemberSince"]),
                  u = new Date,
                  l = (0, T.M)(u, i) < 12,
                  d = (new Date).getTime() / 1e3;
                return {
                  id: s,
                  nonExpiredToken: (r?.exp ?? 0) - d > 0,
                  avatar: r["scAuth.AvatarUrl"],
                  bearer_token_expired: r.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: l,
                  nickname: o,
                  profile_link: `https://${a}.rockstargames.com/member/${o}?id=${s}`
                }
              })({
                bearerToken: c
              });
              u({
                ...i,
                ...e
              })
            }
          }), [c, m]), (0, a.useEffect)((() => {
            (async () => {
              if (f && i && s && !i?.crews) {
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
          }), [i?.nickname, s, f]), (0, a.useEffect)((() => {
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
                  const s = [],
                    o = await (0, n.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  await (o?.platforms?.reduce((async (e, r) => {
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
                      const o = ["ps4", "ps5"].includes(r) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return s.push({
                        ...e,
                        mugshotUrl: o,
                        platform: r
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: c,
                    accounts: i
                  } = await (0, n.coreScApiFetch)(`profile/getprofile?nickname=${r}&maxFriends=0`, {
                    pingBearer: t
                  });
                  if (!c || !i.length) return {
                    gtaoCharacters: s,
                    linkedAccounts: []
                  };
                  const u = i[0],
                    {
                      rockstarAccount: l,
                      linkedAccounts: d
                    } = u;
                  if (l?.rockstarId !== a) return {
                    gtaoCharacters: s,
                    linkedAccounts: []
                  };
                  if (!s.length) return {
                    gtaoCharacters: s,
                    linkedAccounts: u.linkedAccounts
                  };
                  const f = r;
                  let p = "",
                    m = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (m = e.userName), e))), s.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), s.map(((e, t) => (e.platformUsername = f, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = m || f), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || f), e))), {
                    gtaoCharacters: s,
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
                  hasGtaPlus: "1" === e?.[o]?.stats?.overview?.hasGtaPlus?.value
                }), y((e => e - 1))
              }
            })()
          }), [r, i?.nickname, f]), (0, a.useEffect)((() => {
            i?.id && i?.nonExpiredToken && (p(!0), _(i.id))
          }), [JSON.stringify(i)]), {
            data: i,
            loggedIn: f,
            loading: h
          }
        },
        V = {},
        N = (0, n.setContextItem)({
          context: (0, a.createContext)(V),
          key: "userContext"
        }),
        U = e => {
          let {
            children: t,
            privateToken: r
          } = e;
          const n = P({
              privateToken: r
            }),
            s = (0, a.useMemo)((() => ({
              ...n,
              privateToken: r,
              hasProvider: !0
            })), [n]);
          return (0, c.jsx)(N.Provider, {
            value: s,
            children: t
          })
        },
        B = () => (0, a.useContext)(N)
    },
    98398: e => {
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
        return !1 !== t.clone && t.isMergeableObject(e) ? c((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function n(e, t, r) {
        return e.concat(t).map((function(e) {
          return a(e, r)
        }))
      }

      function s(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          })) : []
        }(e))
      }

      function o(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function c(e, r, i) {
        (i = i || {}).arrayMerge = i.arrayMerge || n, i.isMergeableObject = i.isMergeableObject || t, i.cloneUnlessOtherwiseSpecified = a;
        var u = Array.isArray(r);
        return u === Array.isArray(e) ? u ? i.arrayMerge(e, r, i) : function(e, t, r) {
          var n = {};
          return r.isMergeableObject(e) && s(e).forEach((function(t) {
            n[t] = a(e[t], r)
          })), s(t).forEach((function(s) {
            (function(e, t) {
              return o(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, s) || (o(e, s) && r.isMergeableObject(t[s]) ? n[s] = function(e, t) {
              if (!t.customMerge) return c;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : c
            }(s, r)(e[s], t[s], r) : n[s] = a(t[s], r))
          })), n
        }(e, r, i) : a(r, i)
      }
      c.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, r) {
          return c(e, r, t)
        }), {})
      };
      var i = c;
      e.exports = i
    }
  }
]);