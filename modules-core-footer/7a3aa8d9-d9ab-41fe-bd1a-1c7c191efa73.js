try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7a3aa8d9-d9ab-41fe-bd1a-1c7c191efa73", e._sentryDebugIdIdentifier = "sentry-dbid-7a3aa8d9-d9ab-41fe-bd1a-1c7c191efa73")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [2169, 8113], {
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
        c = r(56088);
      const s = e => "pcalt" === e ? "pc" : e.toString(),
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
              } = U(), p = (0, c.bn)(), g = (e, t) => {
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
                      n = [...new Set(e.gtaPlusPlatforms.map(e => s(e)))],
                      o = [];
                    return Object.entries(e?.characters ?? []).forEach(([e, t]) => {
                      t.length && t.forEach(t => {
                        const n = s(t.platform);
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
          } = P(), a = (0, o.useRockstarToken)(), [c, s] = (0, n.useState)({
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
            "gtao" !== t || c?.characters?.gtao || (s(e => ({
              ...e,
              accountSynced: !1
            })), h(e => e + 1))
          }, [t, c?.characters?.gtao]), (0, n.useEffect)(() => {
            r && !c?.crews && (s(e => ({
              ...e,
              accountSynced: !1
            })), h(e => e + 1))
          }, [r, c?.crews]), (0, n.useEffect)(() => {
            0 === m && s(e => ({
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
                    const c = `${t}?code=${await n.json()}`,
                      s = await fetch(c, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: i
                      } = await s.json();
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
                  c = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  s = new Date(t["scAuth.MemberSince"]),
                  i = new Date,
                  u = (0, R.M)(i, s) < 12,
                  l = (new Date).getTime() / 1e3;
                return {
                  id: a,
                  nonExpiredToken: (t?.exp ?? 0) - l > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: u,
                  nickname: n,
                  profile_link: `https://${r}.rockstargames.com/member/${n}?id=${a}`
                }
              })({
                bearerToken: a
              });
              s(t => ({
                ...t,
                ...e
              }))
            }
          }, [a, f]), (0, n.useEffect)(() => {
            (async () => {
              if (l && c && r && !c?.crews && c?.characters) {
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
                  rockstarId: c.id
                });
                s(t => ({
                  ...t,
                  crews: e
                })), h(e => e - 1)
              }
            })()
          }, [c?.nickname, r, l, c?.characters]), (0, n.useEffect)(() => {
            (async () => {
              if (!l || !c || null != c?.hasNotification) return;
              const e = await (async ({
                pingBearer: e
              }) => await (0, o.coreScApiFetch)("notification/count", {
                pingBearer: e
              }))({
                pingBearer: u
              });
              let t = !1;
              e?.count && (t = e.count > 0), s(e => ({
                ...e,
                hasNotification: t
              }))
            })()
          }, [l, c?.hasNotification]), (0, n.useEffect)(() => {
            (async () => {
              if (!l || !c || c?.gamesPlayed || !1 === t || !1 === r) return;
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
              s(t => ({
                ...t,
                gamesPlayed: e
              })), h(e => e - 1)
            })()
          }, [c?.nickname, l]), (0, n.useEffect)(() => {
            (async () => {
              if (l && c && "gtao" === t && !c?.characters?.gtao) {
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
                    c = (await Promise.all(n)).flat().filter(e => void 0 !== e),
                    {
                      status: s,
                      accounts: i
                    } = await (0, o.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                      pingBearer: e
                    });
                  if (!s || !i.length) return {
                    gtaoCharacters: c,
                    linkedAccounts: []
                  };
                  const u = i[0],
                    {
                      rockstarAccount: l,
                      linkedAccounts: d
                    } = u;
                  if (l?.rockstarId !== r) return {
                    gtaoCharacters: c,
                    linkedAccounts: []
                  };
                  if (!c.length) return {
                    gtaoCharacters: c,
                    linkedAccounts: u.linkedAccounts
                  };
                  const f = t;
                  let p = "",
                    g = "";
                  return d?.map(e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (g = e.userName), e)), c.sort((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter)), c.map((e, t) => (e.platformUsername = f, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = g || f), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || f), e)), {
                    gtaoCharacters: c,
                    linkedAccounts: d
                  }
                })({
                  pingBearer: u,
                  nickname: c.nickname,
                  rockstarId: c.id
                }), r = [];
                e.forEach(e => {
                  const t = e.platform;
                  r.includes(t) || "1" !== e.stats?.overview?.hasGtaPlus?.value || r.push(t)
                }), s(a => ({
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
          }, [t, c?.nickname, l]), (0, n.useEffect)(() => {
            c?.id && c?.nonExpiredToken && (d(!0), _(c.id))
          }, [JSON.stringify(c)]), {
            data: c,
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
        c = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
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
        for (a in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) c.call(t, a) && !i.hasOwnProperty(a) && (o[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === o[a] && (o[a] = t[a]);
        return {
          $$typeof: n,
          type: e,
          key: u,
          ref: l,
          props: o,
          _owner: s.current
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
        return !1 !== t.clone && t.isMergeableObject(e) ? s((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
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

      function c(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function s(e, r, i) {
        (i = i || {}).arrayMerge = i.arrayMerge || n, i.isMergeableObject = i.isMergeableObject || t, i.cloneUnlessOtherwiseSpecified = a;
        var u = Array.isArray(r);
        return u === Array.isArray(e) ? u ? i.arrayMerge(e, r, i) : function(e, t, r) {
          var n = {};
          return r.isMergeableObject(e) && o(e).forEach(function(t) {
            n[t] = a(e[t], r)
          }), o(t).forEach(function(o) {
            (function(e, t) {
              return c(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (c(e, o) && r.isMergeableObject(t[o]) ? n[o] = function(e, t) {
              if (!t.customMerge) return s;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : s
            }(o, r)(e[o], t[o], r) : n[o] = a(t[o], r))
          }), n
        }(e, r, i) : a(r, i)
      }
      s.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return s(e, r, t)
        }, {})
      };
      var i = s;
      e.exports = i
    }
  }
]);