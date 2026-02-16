try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ebb175f9-af84-46fd-b3b8-335e7c29b182", e._sentryDebugIdIdentifier = "sentry-dbid-ebb175f9-af84-46fd-b3b8-335e7c29b182")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [2169, 4550], {
    32169: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => d,
        RockstarUserProvider: () => j,
        fetchUnreadNotificationCount: () => R,
        useGtmTrack: () => f,
        useRockstarUser: () => D,
        useRockstarUserState: () => T
      });
      var r = a(42295),
        n = a(62229),
        s = a(95966),
        o = a(56088);
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
        l = e => e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, "string" == typeof t ? t.toLowerCase() : t])) : e,
        u = (0, s.setContextItem)({
          context: (0, n.createContext)(void 0),
          key: "gtmContext22"
        }),
        d = ({
          checkUser: e,
          children: t
        }) => {
          const a = ((e = !0) => {
              const [t, a] = (0, n.useState)([]), [r, u] = (0, n.useState)(null), {
                data: d,
                loggedIn: p
              } = D(), f = (0, o.bn)(), m = (e, t) => {
                const r = e.length;
                e.forEach(e => {
                  const a = t ?? {};
                  (0, s.track)({
                    ...e,
                    ...a
                  })
                }), a(e => e.slice(r))
              };
              return (0, n.useEffect)(() => {
                if (d && null !== p) {
                  const e = ((e, t) => {
                    const a = [],
                      r = [],
                      n = [...new Set(e.gtaPlusPlatforms.map(e => c(e)))],
                      s = [];
                    return Object.entries(e?.characters ?? []).forEach(([e, t]) => {
                      t.length && t.forEach(t => {
                        const n = c(t.platform);
                        if ("gtao" === e) {
                          r.includes(n) || r.push(n);
                          const a = `${e}_${t.platform}`;
                          s.includes(a) || s.push(a)
                        }
                        a.includes(n) || a.push(n)
                      })
                    }), Object.entries(e?.gamesPlayed ?? []).forEach(([e, t]) => {
                      s.push(`${e}_${t}`), a.includes(t) || a.push(t)
                    }), {
                      member_id: e.id ?? void 0,
                      login_state: t ?? !1,
                      platforms_played: a.length ? a.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      games_played: s.length ? s.join("|").toUpperCase() : void 0,
                      gtao_platforms_played: r.length ? r.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_platforms: n.length ? n.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_active: n.length > 0,
                      use_enhanced_browser_features: f,
                      section_layout: t ? "signed in" : "signed out"
                    }
                  })(d, p);
                  t.length && e && m([...t], e), u(e)
                } else e || t.length && m([...t])
              }, [d, p, t, e]), {
                track: e => (Boolean(d && r), (0, s.track)({
                  ...l(e),
                  ...r
                }))
              }
            })(e),
            d = (0, n.useMemo)(() => a, [a, e]);
          return (0, r.jsx)(u.Provider, {
            value: d,
            children: t
          })
        },
        p = {
          track: () => null
        },
        f = () => (0, n.useContext)(u) ?? p,
        m = (0, s.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, s.makeVar)(null)
        }),
        g = e => m(e),
        h = (0, s.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, s.makeVar)(!1)
        }),
        k = e => h(e),
        y = (0, s.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, s.makeVar)((0, s.webSettingsReactive)()?.currentCharId)
        }),
        v = e => y(e),
        w = (0, s.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, s.makeVar)(null)
        }),
        b = e => w(e),
        _ = (0, s.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, s.makeVar)(null)
        }),
        S = (0, s.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        E = e => S(e),
        x = (0, s.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        C = e => x(e),
        I = (0, s.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, s.makeVar)(null)
        }),
        P = e => I(e),
        T = () => {
          const e = (0, s.useReactiveVar)(S),
            t = (0, s.useReactiveVar)(x),
            a = (0, s.useReactiveVar)(y),
            r = (0, s.useReactiveVar)(m),
            n = (0, s.useReactiveVar)(w);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            navOpen: r,
            userData: (0, s.useReactiveVar)(I),
            selectedCharacterTuple: n,
            jumpScMenuFocus: (0, s.useReactiveVar)(h),
            setCharactersNeeded: E,
            setCrewsNeeded: C,
            setCurrentCharId: v,
            setNavOpen: g,
            setSelectedCharacterTuple: b,
            setUserData: P,
            setJumpScMenuFocus: k
          }
        },
        R = async ({
          pingBearer: e
        }) => await (0, s.coreScApiFetch)("notification/count", {
          pingBearer: e
        });
      var N = a(39763),
        A = a.n(N);
      var O = a(58128),
        M = a(25130);
      const V = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: t,
            crewsNeeded: a
          } = T(), r = (0, s.useRockstarToken)(), [o, c] = (0, n.useState)({
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
          }), [i] = (0, s.useRockstarTokenReactive)(), l = (0, s.useRockstarTokenPing)(), [u, d] = (0, n.useState)(), [p, f] = (0, n.useState)(!1), m = void 0 === u, [g, h] = (0, n.useState)(1);
          return (0, n.useEffect)(() => {
            "gtao" !== t || o?.characters?.gtao || (c(e => ({
              ...e,
              accountSynced: !1
            })), h(e => e + 1))
          }, [t, o?.characters?.gtao]), (0, n.useEffect)(() => {
            a && !o?.crews && (c(e => ({
              ...e,
              accountSynced: !1
            })), h(e => e + 1))
          }, [a, o?.crews]), (0, n.useEffect)(() => {
            0 === g && c(e => ({
              ...e,
              accountSynced: !0
            }))
          }, [g]), (0, n.useEffect)(() => {
            e && i(e)
          }, [e]), (0, n.useEffect)(() => {
            "" !== r || l()
          }, [r]), (0, n.useEffect)(() => {
            if ("" === r) return;
            const e = !!r;
            if (e || p || ((async () => {
                try {
                  await (async ({
                    token: e
                  }) => {
                    const {
                      gateway: t,
                      silentCheck: a
                    } = (0, s.getConfigForDomain)(), r = {
                      method: "POST",
                      body: `fingerprint=${await A().get().then(e=>e)}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, n = await fetch(a, r);
                    if (200 !== n.status) return void e(!1);
                    const o = `${t}?code=${await n.json()}`,
                      c = await fetch(o, {
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
              })(), f(!0)), !e && p && d(!1), e) {
              const e = (({
                bearerToken: e
              }) => {
                const t = (0, O.s)(e),
                  {
                    host: a
                  } = (0, s.getConfigForDomain)(),
                  r = parseInt(t.nameid),
                  n = t["scAuth.Nickname"],
                  o = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  c = new Date(t["scAuth.MemberSince"]),
                  i = new Date,
                  l = (0, M.M)(i, c) < 12,
                  u = (new Date).getTime() / 1e3;
                return {
                  id: r,
                  nonExpiredToken: (t?.exp ?? 0) - u > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: o,
                  isNewAccount: l,
                  nickname: n,
                  profile_link: `https://${a}.rockstargames.com/member/${n}?id=${r}`
                }
              })({
                bearerToken: r
              });
              c(t => ({
                ...t,
                ...e
              }))
            }
          }, [r, p]), (0, n.useEffect)(() => {
            (async () => {
              if (u && o && a && !o?.crews && o?.characters) {
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
                c(t => ({
                  ...t,
                  crews: e
                })), h(e => e - 1)
              }
            })()
          }, [o?.nickname, a, u, o?.characters]), (0, n.useEffect)(() => {
            (async () => {
              if (!u || !o || null != o?.hasNotification) return;
              const e = await R({
                pingBearer: l
              });
              let t = !1;
              e?.count && (t = e.count > 0), c(e => ({
                ...e,
                hasNotification: t
              }))
            })()
          }, [u, o?.hasNotification]), (0, n.useEffect)(() => {
            (async () => {
              if (!u || !o || o?.gamesPlayed || !1 === t || !1 === a) return;
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
              c(t => ({
                ...t,
                gamesPlayed: e
              })), h(e => e - 1)
            })()
          }, [o?.nickname, u]), (0, n.useEffect)(() => {
            (async () => {
              if (u && o && "gtao" === t && !o?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: t
                } = await (async ({
                  pingBearer: e,
                  nickname: t,
                  rockstarId: a
                }) => {
                  const r = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: e
                    }),
                    n = r?.platforms?.map(async t => {
                      if (["ps3", "xbox", "xbox360"].includes(t)) return;
                      const a = await (0, s.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                        pingBearer: e
                      });
                      return a?.status ? a?.result?.map(e => {
                        const {
                          stats: a
                        } = e, {
                          overview: r
                        } = a, {
                          rank: n
                        } = r;
                        if ("0" === n.value) return;
                        const s = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return {
                          ...e,
                          mugshotUrl: s,
                          platform: t
                        }
                      }) : void 0
                    }),
                    o = (await Promise.all(n)).flat().filter(e => void 0 !== e),
                    {
                      status: c,
                      accounts: i
                    } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                      pingBearer: e
                    });
                  if (!c || !i.length) return {
                    gtaoCharacters: o,
                    linkedAccounts: []
                  };
                  const l = i[0],
                    {
                      rockstarAccount: u,
                      linkedAccounts: d
                    } = l;
                  if (u?.rockstarId !== a) return {
                    gtaoCharacters: o,
                    linkedAccounts: []
                  };
                  if (!o.length) return {
                    gtaoCharacters: o,
                    linkedAccounts: l.linkedAccounts
                  };
                  const p = t;
                  let f = "",
                    m = "";
                  return d?.map(e => ("xbl" === e?.onlineService ? f = e.userName : "np" === e?.onlineService && (m = e.userName), e)), o.sort((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter)), o.map((e, t) => (e.platformUsername = p, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = m || p), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = f || p), e)), {
                    gtaoCharacters: o,
                    linkedAccounts: d
                  }
                })({
                  pingBearer: l,
                  nickname: o.nickname,
                  rockstarId: o.id
                }), a = [];
                e.forEach(e => {
                  const t = e.platform;
                  a.includes(t) || "1" !== e.stats?.overview?.hasGtaPlus?.value || a.push(t)
                }), c(r => ({
                  ...r,
                  characters: {
                    ...r.characters,
                    gtao: e
                  },
                  linkedAccounts: t,
                  hasGtaPlus: a.length > 0,
                  gtaPlusPlatforms: a
                })), h(e => e - 1)
              }
            })()
          }, [t, o?.nickname, u]), (0, n.useEffect)(() => {
            o?.id && o?.nonExpiredToken && (d(!0), _(o.id))
          }, [JSON.stringify(o)]), {
            data: o,
            setData: c,
            loggedIn: u,
            loading: m
          }
        },
        B = {},
        U = (0, s.setContextItem)({
          context: (0, n.createContext)(B),
          key: "userContext"
        }),
        j = ({
          children: e,
          privateToken: t
        }) => {
          const a = V({
              privateToken: t
            }),
            s = (0, n.useMemo)(() => ({
              ...a,
              privateToken: t,
              hasProvider: !0
            }), [a]);
          return (0, r.jsx)(U.Provider, {
            value: s,
            children: e
          })
        },
        D = () => (0, n.useContext)(U)
    },
    42295: (e, t, a) => {
      e.exports = a(69245)
    },
    69245: (e, t, a) => {
      var r = a(62229),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, a) {
        var r, s = {},
          l = null,
          u = null;
        for (r in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) o.call(t, r) && !i.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: u,
          props: s,
          _owner: c.current
        }
      }
      t.Fragment = s, t.jsx = l, t.jsxs = l
    }
  }
]);