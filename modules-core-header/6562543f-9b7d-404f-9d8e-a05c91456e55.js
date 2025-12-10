try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6562543f-9b7d-404f-9d8e-a05c91456e55", e._sentryDebugIdIdentifier = "sentry-dbid-6562543f-9b7d-404f-9d8e-a05c91456e55")
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
        GtmProvider: () => d,
        RockstarUserProvider: () => B,
        useGtmTrack: () => p,
        useRockstarUser: () => U,
        useRockstarUserState: () => P
      });
      var a = r(42295),
        n = r(71127),
        o = r(95966),
        s = r(56088);
      const c = e => "pcalt" === e ? "pc" : e.toString(),
        i = {
          pcalt: "PC",
          pc: "PC",
          ps: "PS",
          ps3: "PS3",
          ps4: "PS4",
          ps5: "PS5",
          xbox: "XBOX",
          xbox360: "XBOX 360",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S",
          switch: "NINTENDO SWITCH",
          nintendoswitch: "NINTENDO SWITCH",
          applestore: "APPLE STORE",
          app_store: "APPLE STORE",
          googleplay: "GOOGLE PLAY",
          ggle_play: "GOOGLE PLAY"
        },
        u = e => e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, "string" == typeof t ? t.toLowerCase() : t])) : e,
        l = (0, o.setContextItem)({
          context: (0, n.createContext)(void 0),
          key: "gtmContext22"
        }),
        d = ({
          checkUser: e,
          children: t
        }) => {
          const r = ((e = !0) => {
              const [t, r] = (0, n.useState)([]), [a, l] = (0, n.useState)(null), {
                data: d,
                loggedIn: f
              } = U(), p = (0, s.bn)(), g = (e, t) => {
                const a = e.length;
                e.forEach(e => {
                  const r = t ?? {};
                  (0, o.track)({
                    ...e,
                    ...r
                  })
                }), r(e => e.slice(a))
              };
              return (0, n.useEffect)(() => {
                if (d && null !== f) {
                  const e = ((e, t) => {
                    const r = [],
                      a = [],
                      n = [...new Set(e.gtaPlusPlatforms.map(e => c(e)))],
                      o = [];
                    return Object.entries(e?.characters ?? []).forEach(([e, t]) => {
                      t.length && t.forEach(t => {
                        const n = c(t.platform);
                        if ("gtao" === e) {
                          a.includes(n) || a.push(n);
                          const r = `${e}_${t.platform}`;
                          o.includes(r) || o.push(r)
                        }
                        r.includes(n) || r.push(n)
                      })
                    }), Object.entries(e?.gamesPlayed ?? []).forEach(([e, t]) => {
                      o.push(`${e}_${t}`), r.includes(t) || r.push(t)
                    }), {
                      member_id: e.id ?? void 0,
                      login_state: t ?? !1,
                      platforms_played: r.length ? r.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      games_played: o.length ? o.join("|").toUpperCase() : void 0,
                      gtao_platforms_played: a.length ? a.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_platforms: n.length ? n.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_active: n.length > 0,
                      use_enhanced_browser_features: p,
                      section_layout: t ? "signed in" : "signed out"
                    }
                  })(d, f);
                  t.length && e && g([...t], e), l(e)
                } else e || t.length && g([...t])
              }, [d, f, t, e]), {
                track: e => (Boolean(d && a), (0, o.track)({
                  ...u(e),
                  ...a
                }))
              }
            })(e),
            d = (0, n.useMemo)(() => r, [r, e]);
          return (0, a.jsx)(l.Provider, {
            value: d,
            children: t
          })
        },
        f = {
          track: () => null
        },
        p = () => (0, n.useContext)(l) ?? f,
        g = (0, o.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, o.makeVar)(null)
        }),
        m = e => g(e),
        h = (0, o.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, o.makeVar)(!1)
        }),
        y = e => h(e),
        k = (0, o.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, o.makeVar)((0, o.webSettingsReactive)()?.currentCharId)
        }),
        b = e => k(e),
        v = (0, o.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, o.makeVar)(null)
        }),
        w = e => v(e),
        _ = (0, o.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, o.makeVar)(null)
        }),
        S = (0, o.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, o.makeVar)(!1)
        }),
        E = e => S(e),
        O = (0, o.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, o.makeVar)(!1)
        }),
        x = e => O(e),
        C = (0, o.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, o.makeVar)(null)
        }),
        I = e => C(e),
        P = () => {
          const e = (0, o.useReactiveVar)(S),
            t = (0, o.useReactiveVar)(O),
            r = (0, o.useReactiveVar)(k),
            a = (0, o.useReactiveVar)(g),
            n = (0, o.useReactiveVar)(v);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: r,
            navOpen: a,
            userData: (0, o.useReactiveVar)(C),
            selectedCharacterTuple: n,
            jumpScMenuFocus: (0, o.useReactiveVar)(h),
            setCharactersNeeded: E,
            setCrewsNeeded: x,
            setCurrentCharId: b,
            setNavOpen: m,
            setSelectedCharacterTuple: w,
            setUserData: I,
            setJumpScMenuFocus: y
          }
        };
      var A = r(39763),
        M = r.n(A);
      var T = r(58128),
        R = r(25130);
      const j = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: t,
            crewsNeeded: r
          } = P(), a = (0, o.useRockstarToken)(), [s, c] = (0, n.useState)({
            id: 0,
            avatar: "",
            bearer_token_expired: !0,
            isAMinor: void 0,
            isNewAccount: !1,
            nickname: "",
            nonExpiredToken: !1,
            profile_link: "https://",
            accountSynced: !1,
            hasGtaPlus: !1,
            gtaPlusPlatforms: []
          }), [i] = (0, o.useRockstarTokenReactive)(), u = (0, o.useRockstarTokenPing)(), [l, d] = (0, n.useState)(), [f, p] = (0, n.useState)(!1), g = void 0 === l, [m, h] = (0, n.useState)(1);
          return (0, n.useEffect)(() => {
            "gtao" !== t || s?.characters?.gtao || (c(e => ({
              ...e,
              accountSynced: !1
            })), h(e => e + 1))
          }, [t, s?.characters?.gtao]), (0, n.useEffect)(() => {
            r && !s?.crews && (c(e => ({
              ...e,
              accountSynced: !1
            })), h(e => e + 1))
          }, [r, s?.crews]), (0, n.useEffect)(() => {
            0 === m && c(e => ({
              ...e,
              accountSynced: !0
            }))
          }, [m]), (0, n.useEffect)(() => {
            e && i(e)
          }, [e]), (0, n.useEffect)(() => {
            "" !== a || u()
          }, [a]), (0, n.useEffect)(() => {
            if ("" === a) return;
            const e = !!a;
            if (e || f || ((async () => {
                try {
                  await (async ({
                    token: e
                  }) => {
                    const {
                      gateway: t,
                      silentCheck: r
                    } = (0, o.getConfigForDomain)(), a = {
                      method: "POST",
                      body: `fingerprint=${await M().get().then(e=>e)}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, n = await fetch(r, a);
                    if (200 !== n.status) return void e(!1);
                    const s = `${t}?code=${await n.json()}`,
                      c = await fetch(s, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: i
                      } = await c.json();
                    return e(i), i
                  })({
                    token: i
                  })
                } catch (e) {}
              })(), p(!0)), !e && f && d(!1), e) {
              const e = (({
                bearerToken: e
              }) => {
                const t = (0, T.s)(e),
                  {
                    host: r
                  } = (0, o.getConfigForDomain)(),
                  a = parseInt(t.nameid),
                  n = t["scAuth.Nickname"],
                  s = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  c = new Date(t["scAuth.MemberSince"]),
                  i = new Date,
                  u = (0, R.M)(i, c) < 12,
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
                bearerToken: a
              });
              c(t => ({
                ...t,
                ...e
              }))
            }
          }, [a, f]), (0, n.useEffect)(() => {
            (async () => {
              if (l && s && r && !s?.crews && s?.characters) {
                const e = await (async ({
                  pingBearer: e,
                  rockstarId: t
                }) => {
                  const {
                    crews: r
                  } = await (0, o.coreScApiFetch)("crew/forMember", {
                    pingBearer: e,
                    query: {
                      userId: t
                    }
                  });
                  return r
                })({
                  pingBearer: u,
                  rockstarId: s.id
                });
                c(t => ({
                  ...t,
                  crews: e
                })), h(e => e - 1)
              }
            })()
          }, [s?.nickname, r, l, s?.characters]), (0, n.useEffect)(() => {
            (async () => {
              if (!l || !s || null != s?.hasNotification) return;
              const e = await (async ({
                pingBearer: e
              }) => await (0, o.coreScApiFetch)("notification/count", {
                pingBearer: e
              }))({
                pingBearer: u
              });
              let t = !1;
              e?.count && (t = e.count > 0), c(e => ({
                ...e,
                hasNotification: t
              }))
            })()
          }, [l, s?.hasNotification]), (0, n.useEffect)(() => {
            (async () => {
              if (!l || !s || s?.gamesPlayed || !1 === t || !1 === r) return;
              const e = await (async ({
                pingBearer: e
              }) => {
                const {
                  all: t
                } = await (0, o.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: e
                });
                return t
              })({
                pingBearer: u
              });
              c(t => ({
                ...t,
                gamesPlayed: e
              })), h(e => e - 1)
            })()
          }, [s?.nickname, l]), (0, n.useEffect)(() => {
            (async () => {
              if (l && s && "gtao" === t && !s?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: t
                } = await (async ({
                  pingBearer: e,
                  nickname: t,
                  rockstarId: r
                }) => {
                  const a = await (0, o.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: e
                    }),
                    n = a?.platforms?.map(async t => {
                      if (["ps3", "xbox", "xbox360"].includes(t)) return;
                      const r = await (0, o.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                        pingBearer: e
                      });
                      return r?.status ? r?.result?.map(e => {
                        const {
                          stats: r
                        } = e, {
                          overview: a
                        } = r, {
                          rank: n
                        } = a;
                        if ("0" === n.value) return;
                        const o = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return {
                          ...e,
                          mugshotUrl: o,
                          platform: t
                        }
                      }) : void 0
                    }),
                    s = (await Promise.all(n)).flat().filter(e => void 0 !== e),
                    {
                      status: c,
                      accounts: i
                    } = await (0, o.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                      pingBearer: e
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
                  if (l?.rockstarId !== r) return {
                    gtaoCharacters: s,
                    linkedAccounts: []
                  };
                  if (!s.length) return {
                    gtaoCharacters: s,
                    linkedAccounts: u.linkedAccounts
                  };
                  const f = t;
                  let p = "",
                    g = "";
                  return d?.map(e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (g = e.userName), e)), s.sort((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter)), s.map((e, t) => (e.platformUsername = f, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = g || f), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || f), e)), {
                    gtaoCharacters: s,
                    linkedAccounts: d
                  }
                })({
                  pingBearer: u,
                  nickname: s.nickname,
                  rockstarId: s.id
                }), r = [];
                e.forEach(e => {
                  const t = e.platform;
                  r.includes(t) || "1" !== e.stats?.overview?.hasGtaPlus?.value || r.push(t)
                }), c(a => ({
                  ...a,
                  characters: {
                    ...a.characters,
                    gtao: e
                  },
                  linkedAccounts: t,
                  hasGtaPlus: r.length > 0,
                  gtaPlusPlatforms: r
                })), h(e => e - 1)
              }
            })()
          }, [t, s?.nickname, l]), (0, n.useEffect)(() => {
            s?.id && s?.nonExpiredToken && (d(!0), _(s.id))
          }, [JSON.stringify(s)]), {
            data: s,
            loggedIn: l,
            loading: g
          }
        },
        N = {},
        V = (0, o.setContextItem)({
          context: (0, n.createContext)(N),
          key: "userContext"
        }),
        B = ({
          children: e,
          privateToken: t
        }) => {
          const r = j({
              privateToken: t
            }),
            o = (0, n.useMemo)(() => ({
              ...r,
              privateToken: t,
              hasProvider: !0
            }), [r]);
          return (0, a.jsx)(V.Provider, {
            value: o,
            children: e
          })
        },
        U = () => (0, n.useContext)(V)
    },
    42295: (e, t, r) => {
      e.exports = r(69245)
    },
    69245: (e, t, r) => {
      var a = r(71127),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, r) {
        var a, o = {},
          u = null,
          l = null;
        for (a in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) s.call(t, a) && !i.hasOwnProperty(a) && (o[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === o[a] && (o[a] = t[a]);
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
        return !1 !== t.clone && t.isMergeableObject(e) ? c((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function n(e, t, r) {
        return e.concat(t).map(function(e) {
          return a(e, r)
        })
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function s(e, t) {
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
          return r.isMergeableObject(e) && o(e).forEach(function(t) {
            n[t] = a(e[t], r)
          }), o(t).forEach(function(o) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (s(e, o) && r.isMergeableObject(t[o]) ? n[o] = function(e, t) {
              if (!t.customMerge) return c;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : c
            }(o, r)(e[o], t[o], r) : n[o] = a(t[o], r))
          }), n
        }(e, r, i) : a(r, i)
      }
      c.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return c(e, r, t)
        }, {})
      };
      var i = c;
      e.exports = i
    }
  }
]);