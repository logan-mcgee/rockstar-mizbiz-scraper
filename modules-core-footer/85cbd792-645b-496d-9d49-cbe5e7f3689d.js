try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "85cbd792-645b-496d-9d49-cbe5e7f3689d", e._sentryDebugIdIdentifier = "sentry-dbid-85cbd792-645b-496d-9d49-cbe5e7f3689d")
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
  [4059, 8095], {
    76597(e) {
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

      function c(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function o(e, t) {
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
          return r.isMergeableObject(e) && c(e).forEach(function(t) {
            n[t] = a(e[t], r)
          }), c(t).forEach(function(c) {
            (function(e, t) {
              return o(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, c) || (o(e, c) && r.isMergeableObject(t[c]) ? n[c] = function(e, t) {
              if (!t.customMerge) return s;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : s
            }(c, r)(e[c], t[c], r) : n[c] = a(t[c], r))
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
    },
    94931(e, t, r) {
      var a = r(4637),
        n = Symbol.for("react.element"),
        c = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
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
        for (a in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) o.call(t, a) && !i.hasOwnProperty(a) && (c[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === c[a] && (c[a] = t[a]);
        return {
          $$typeof: n,
          type: e,
          key: u,
          ref: l,
          props: c,
          _owner: s.current
        }
      }
      t.Fragment = c, t.jsx = u, t.jsxs = u
    },
    39793(e, t, r) {
      e.exports = r(94931)
    },
    58095(e, t, r) {
      r.r(t), r.d(t, {
        GtmProvider: () => d,
        RockstarUserProvider: () => D,
        fetchUnreadNotificationCount: () => T,
        useGtmTrack: () => p,
        useRockstarUser: () => U,
        useRockstarUserState: () => I
      });
      var a = r(39793),
        n = r(4637),
        c = r(13331),
        o = r(56596);
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
        l = (0, c.setContextItem)({
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
              } = U(), p = (0, o.bn)(), g = (e, t) => {
                const a = e.length;
                e.forEach(e => {
                  const r = t ?? {};
                  (0, c.track)({
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
                      c = [];
                    return Object.entries(e?.characters ?? []).forEach(([e, t]) => {
                      t.length && t.forEach(t => {
                        const n = s(t.platform);
                        if ("gtao" === e) {
                          a.includes(n) || a.push(n);
                          const r = `${e}_${t.platform}`;
                          c.includes(r) || c.push(r)
                        }
                        r.includes(n) || r.push(n)
                      })
                    }), Object.entries(e?.gamesPlayed ?? []).forEach(([e, t]) => {
                      c.push(`${e}_${t}`), r.includes(t) || r.push(t)
                    }), {
                      member_id: e.id ?? void 0,
                      login_state: t ?? !1,
                      platforms_played: r.length ? r.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      games_played: c.length ? c.join("|").toUpperCase() : void 0,
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
                track: e => (Boolean(d && a), (0, c.track)({
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
        g = (0, c.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, c.makeVar)(null)
        }),
        m = e => g(e),
        h = (0, c.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, c.makeVar)(!1)
        }),
        y = e => h(e),
        k = (0, c.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, c.makeVar)((0, c.webSettingsReactive)()?.currentCharId)
        }),
        b = e => k(e),
        v = (0, c.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, c.makeVar)(null)
        }),
        w = e => v(e),
        _ = (0, c.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, c.makeVar)(null)
        }),
        S = (0, c.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, c.makeVar)(!1)
        }),
        E = e => S(e),
        O = (0, c.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, c.makeVar)(!1)
        }),
        P = e => O(e),
        C = (0, c.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, c.makeVar)(null)
        }),
        M = e => C(e),
        I = () => {
          const e = (0, c.useReactiveVar)(S),
            t = (0, c.useReactiveVar)(O),
            r = (0, c.useReactiveVar)(k),
            a = (0, c.useReactiveVar)(g),
            n = (0, c.useReactiveVar)(v);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: r,
            navOpen: a,
            userData: (0, c.useReactiveVar)(C),
            selectedCharacterTuple: n,
            jumpScMenuFocus: (0, c.useReactiveVar)(h),
            setCharactersNeeded: E,
            setCrewsNeeded: P,
            setCurrentCharId: b,
            setNavOpen: m,
            setSelectedCharacterTuple: w,
            setUserData: M,
            setJumpScMenuFocus: y
          }
        },
        T = async ({
          pingBearer: e
        }) => await (0, c.coreScApiFetch)("notification/count", {
          pingBearer: e
        });
      var R = r(4242),
        x = r(30174),
        j = r(77033),
        A = r.n(j);
      const N = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: t,
            crewsNeeded: r
          } = I(), a = (0, c.useRockstarToken)(), [o, s] = (0, n.useState)({
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
          }), [i] = (0, c.useRockstarTokenReactive)(), u = (0, c.useRockstarTokenPing)(), [l, d] = (0, n.useState)(), [f, p] = (0, n.useState)(!1), g = void 0 === l, [m, h] = (0, n.useState)(1);
          return (0, n.useEffect)(() => {
            "gtao" !== t || o?.characters?.gtao || (s(e => ({
              ...e,
              accountSynced: !1
            })), h(e => e + 1))
          }, [t, o?.characters?.gtao]), (0, n.useEffect)(() => {
            r && !o?.crews && (s(e => ({
              ...e,
              accountSynced: !1
            })), h(e => e + 1))
          }, [r, o?.crews]), (0, n.useEffect)(() => {
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
                    } = (0, c.getConfigForDomain)(), a = {
                      method: "POST",
                      body: `fingerprint=${await A().get().then(e=>e)}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, n = await fetch(r, a);
                    if (200 !== n.status) return void e(!1);
                    const o = `${t}?code=${await n.json()}`,
                      s = await fetch(o, {
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
                const t = (0, R.s)(e),
                  {
                    host: r
                  } = (0, c.getConfigForDomain)(),
                  a = parseInt(t.nameid),
                  n = t["scAuth.Nickname"],
                  o = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  s = new Date(t["scAuth.MemberSince"]),
                  i = new Date,
                  u = (0, x.M)(i, s) < 12,
                  l = (new Date).getTime() / 1e3;
                return {
                  id: a,
                  nonExpiredToken: (t?.exp ?? 0) - l > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: o,
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
              if (l && o && r && !o?.crews && o?.characters) {
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
                  pingBearer: u,
                  rockstarId: o.id
                });
                s(t => ({
                  ...t,
                  crews: e
                })), h(e => e - 1)
              }
            })()
          }, [o?.nickname, r, l, o?.characters]), (0, n.useEffect)(() => {
            (async () => {
              if (!l || !o || null != o?.hasNotification) return;
              const e = await T({
                pingBearer: u
              });
              let t = !1;
              e?.count && (t = e.count > 0), s(e => ({
                ...e,
                hasNotification: t
              }))
            })()
          }, [l, o?.hasNotification]), (0, n.useEffect)(() => {
            (async () => {
              if (!l || !o || o?.gamesPlayed || !1 === t || !1 === r) return;
              const e = await (async ({
                pingBearer: e
              }) => {
                const t = await (0, c.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: e
                });
                return t?.all ?? {}
              })({
                pingBearer: u
              });
              s(t => ({
                ...t,
                gamesPlayed: e
              })), h(e => e - 1)
            })()
          }, [o?.nickname, l]), (0, n.useEffect)(() => {
            (async () => {
              if (l && o && "gtao" === t && !o?.characters?.gtao) {
                const e = (async ({
                    pingBearer: e
                  }) => {
                    const {
                      result: {
                        linkedAccounts: t = []
                      }
                    } = await (0, c.coreScApiFetch)("account/linkedaccounts", {
                      pingBearer: e
                    });
                    return t ?? []
                  })({
                    pingBearer: u
                  }),
                  t = (async ({
                    pingBearer: e
                  }) => {
                    const t = await (0, c.coreScApiFetch)("games/gtao/charactersPlayedPlatforms", {
                      pingBearer: e
                    });
                    if (!t?.status) return [];
                    const r = t.result.flatMap(e => e.characters.filter(({
                      stats: {
                        overview: {
                          rank: e
                        }
                      }
                    }) => "0" !== e.value).map(t => {
                      return {
                        activeCharacter: t.activeCharacter,
                        characterSlot: t.characterSlot,
                        mugshotUrl: (r = t.mugshotUrl, a = e.platform, ["ps4", "ps5"].includes(a) ? r.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : r),
                        stats: t.stats,
                        platform: e.platform,
                        platformUsername: e.playerAccount.userName
                      };
                      var r, a
                    }));
                    return r.sort((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter)), r.map((e, t) => ({
                      ...e,
                      index: t
                    }))
                  })({
                    pingBearer: u
                  }),
                  [r, a] = await Promise.all([e, t]),
                  n = [];
                a.forEach(e => {
                  const t = e.platform;
                  n.includes(t) || "1" !== e.stats?.overview?.hasGtaPlus?.value || n.push(t)
                }), s(e => ({
                  ...e,
                  characters: {
                    ...e.characters,
                    gtao: a
                  },
                  linkedAccounts: r,
                  hasGtaPlus: n.length > 0,
                  gtaPlusPlatforms: n
                })), h(e => e - 1)
              }
            })()
          }, [t, o?.nickname, l, o, u]), (0, n.useEffect)(() => {
            o?.id && o?.nonExpiredToken && (d(!0), _(o.id))
          }, [JSON.stringify(o)]), {
            data: o,
            setData: s,
            loggedIn: l,
            loading: g
          }
        },
        V = {},
        B = (0, c.setContextItem)({
          context: (0, n.createContext)(V),
          key: "userContext"
        }),
        D = ({
          children: e,
          privateToken: t
        }) => {
          const r = N({
              privateToken: t
            }),
            c = (0, n.useMemo)(() => ({
              ...r,
              privateToken: t,
              hasProvider: !0
            }), [r]);
          return (0, a.jsx)(B.Provider, {
            value: c,
            children: e
          })
        },
        U = () => (0, n.useContext)(B)
    }
  }
]);