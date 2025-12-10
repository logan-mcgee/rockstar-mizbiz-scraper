try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a2edb109-abd8-4adf-9df4-1a30f398df20", e._sentryDebugIdIdentifier = "sentry-dbid-a2edb109-abd8-4adf-9df4-1a30f398df20")
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
        useGtmTrack: () => p,
        useRockstarUser: () => U,
        useRockstarUserState: () => T
      });
      var r = a(42295),
        s = a(62229),
        n = a(95966),
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
        u = (0, n.setContextItem)({
          context: (0, s.createContext)(void 0),
          key: "gtmContext22"
        }),
        d = ({
          checkUser: e,
          children: t
        }) => {
          const a = ((e = !0) => {
              const [t, a] = (0, s.useState)([]), [r, u] = (0, s.useState)(null), {
                data: d,
                loggedIn: f
              } = U(), p = (0, o.bn)(), m = (e, t) => {
                const r = e.length;
                e.forEach(e => {
                  const a = t ?? {};
                  (0, n.track)({
                    ...e,
                    ...a
                  })
                }), a(e => e.slice(r))
              };
              return (0, s.useEffect)(() => {
                if (d && null !== f) {
                  const e = ((e, t) => {
                    const a = [],
                      r = [],
                      s = [...new Set(e.gtaPlusPlatforms.map(e => c(e)))],
                      n = [];
                    return Object.entries(e?.characters ?? []).forEach(([e, t]) => {
                      t.length && t.forEach(t => {
                        const s = c(t.platform);
                        if ("gtao" === e) {
                          r.includes(s) || r.push(s);
                          const a = `${e}_${t.platform}`;
                          n.includes(a) || n.push(a)
                        }
                        a.includes(s) || a.push(s)
                      })
                    }), Object.entries(e?.gamesPlayed ?? []).forEach(([e, t]) => {
                      n.push(`${e}_${t}`), a.includes(t) || a.push(t)
                    }), {
                      member_id: e.id ?? void 0,
                      login_state: t ?? !1,
                      platforms_played: a.length ? a.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      games_played: n.length ? n.join("|").toUpperCase() : void 0,
                      gtao_platforms_played: r.length ? r.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_platforms: s.length ? s.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_active: s.length > 0,
                      use_enhanced_browser_features: p,
                      section_layout: t ? "signed in" : "signed out"
                    }
                  })(d, f);
                  t.length && e && m([...t], e), u(e)
                } else e || t.length && m([...t])
              }, [d, f, t, e]), {
                track: e => (Boolean(d && r), (0, n.track)({
                  ...l(e),
                  ...r
                }))
              }
            })(e),
            d = (0, s.useMemo)(() => a, [a, e]);
          return (0, r.jsx)(u.Provider, {
            value: d,
            children: t
          })
        },
        f = {
          track: () => null
        },
        p = () => (0, s.useContext)(u) ?? f,
        m = (0, n.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, n.makeVar)(null)
        }),
        g = e => m(e),
        h = (0, n.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, n.makeVar)(!1)
        }),
        k = e => h(e),
        y = (0, n.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, n.makeVar)((0, n.webSettingsReactive)()?.currentCharId)
        }),
        v = e => y(e),
        w = (0, n.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, n.makeVar)(null)
        }),
        b = e => w(e),
        _ = (0, n.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, n.makeVar)(null)
        }),
        S = (0, n.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, n.makeVar)(!1)
        }),
        E = e => S(e),
        x = (0, n.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, n.makeVar)(!1)
        }),
        C = e => x(e),
        I = (0, n.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, n.makeVar)(null)
        }),
        P = e => I(e),
        T = () => {
          const e = (0, n.useReactiveVar)(S),
            t = (0, n.useReactiveVar)(x),
            a = (0, n.useReactiveVar)(y),
            r = (0, n.useReactiveVar)(m),
            s = (0, n.useReactiveVar)(w);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            navOpen: r,
            userData: (0, n.useReactiveVar)(I),
            selectedCharacterTuple: s,
            jumpScMenuFocus: (0, n.useReactiveVar)(h),
            setCharactersNeeded: E,
            setCrewsNeeded: C,
            setCurrentCharId: v,
            setNavOpen: g,
            setSelectedCharacterTuple: b,
            setUserData: P,
            setJumpScMenuFocus: k
          }
        };
      var R = a(39763),
        N = a.n(R);
      var A = a(58128),
        O = a(25130);
      const M = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: t,
            crewsNeeded: a
          } = T(), r = (0, n.useRockstarToken)(), [o, c] = (0, s.useState)({
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
          }), [i] = (0, n.useRockstarTokenReactive)(), l = (0, n.useRockstarTokenPing)(), [u, d] = (0, s.useState)(), [f, p] = (0, s.useState)(!1), m = void 0 === u, [g, h] = (0, s.useState)(1);
          return (0, s.useEffect)(() => {
            "gtao" !== t || o?.characters?.gtao || (c(e => ({
              ...e,
              accountSynced: !1
            })), h(e => e + 1))
          }, [t, o?.characters?.gtao]), (0, s.useEffect)(() => {
            a && !o?.crews && (c(e => ({
              ...e,
              accountSynced: !1
            })), h(e => e + 1))
          }, [a, o?.crews]), (0, s.useEffect)(() => {
            0 === g && c(e => ({
              ...e,
              accountSynced: !0
            }))
          }, [g]), (0, s.useEffect)(() => {
            e && i(e)
          }, [e]), (0, s.useEffect)(() => {
            "" !== r || l()
          }, [r]), (0, s.useEffect)(() => {
            if ("" === r) return;
            const e = !!r;
            if (e || f || ((async () => {
                try {
                  await (async ({
                    token: e
                  }) => {
                    const {
                      gateway: t,
                      silentCheck: a
                    } = (0, n.getConfigForDomain)(), r = {
                      method: "POST",
                      body: `fingerprint=${await N().get().then(e=>e)}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, s = await fetch(a, r);
                    if (200 !== s.status) return void e(!1);
                    const o = `${t}?code=${await s.json()}`,
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
              })(), p(!0)), !e && f && d(!1), e) {
              const e = (({
                bearerToken: e
              }) => {
                const t = (0, A.s)(e),
                  {
                    host: a
                  } = (0, n.getConfigForDomain)(),
                  r = parseInt(t.nameid),
                  s = t["scAuth.Nickname"],
                  o = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  c = new Date(t["scAuth.MemberSince"]),
                  i = new Date,
                  l = (0, O.M)(i, c) < 12,
                  u = (new Date).getTime() / 1e3;
                return {
                  id: r,
                  nonExpiredToken: (t?.exp ?? 0) - u > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: o,
                  isNewAccount: l,
                  nickname: s,
                  profile_link: `https://${a}.rockstargames.com/member/${s}?id=${r}`
                }
              })({
                bearerToken: r
              });
              c(t => ({
                ...t,
                ...e
              }))
            }
          }, [r, f]), (0, s.useEffect)(() => {
            (async () => {
              if (u && o && a && !o?.crews && o?.characters) {
                const e = await (async ({
                  pingBearer: e,
                  rockstarId: t
                }) => {
                  const {
                    crews: a
                  } = await (0, n.coreScApiFetch)("crew/forMember", {
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
          }, [o?.nickname, a, u, o?.characters]), (0, s.useEffect)(() => {
            (async () => {
              if (!u || !o || null != o?.hasNotification) return;
              const e = await (async ({
                pingBearer: e
              }) => await (0, n.coreScApiFetch)("notification/count", {
                pingBearer: e
              }))({
                pingBearer: l
              });
              let t = !1;
              e?.count && (t = e.count > 0), c(e => ({
                ...e,
                hasNotification: t
              }))
            })()
          }, [u, o?.hasNotification]), (0, s.useEffect)(() => {
            (async () => {
              if (!u || !o || o?.gamesPlayed || !1 === t || !1 === a) return;
              const e = await (async ({
                pingBearer: e
              }) => {
                const {
                  all: t
                } = await (0, n.coreScApiFetch)("profile/lastPlayed", {
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
          }, [o?.nickname, u]), (0, s.useEffect)(() => {
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
                  const r = await (0, n.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: e
                    }),
                    s = r?.platforms?.map(async t => {
                      if (["ps3", "xbox", "xbox360"].includes(t)) return;
                      const a = await (0, n.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                        pingBearer: e
                      });
                      return a?.status ? a?.result?.map(e => {
                        const {
                          stats: a
                        } = e, {
                          overview: r
                        } = a, {
                          rank: s
                        } = r;
                        if ("0" === s.value) return;
                        const n = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return {
                          ...e,
                          mugshotUrl: n,
                          platform: t
                        }
                      }) : void 0
                    }),
                    o = (await Promise.all(s)).flat().filter(e => void 0 !== e),
                    {
                      status: c,
                      accounts: i
                    } = await (0, n.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
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
                  const f = t;
                  let p = "",
                    m = "";
                  return d?.map(e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (m = e.userName), e)), o.sort((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter)), o.map((e, t) => (e.platformUsername = f, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = m || f), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || f), e)), {
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
          }, [t, o?.nickname, u]), (0, s.useEffect)(() => {
            o?.id && o?.nonExpiredToken && (d(!0), _(o.id))
          }, [JSON.stringify(o)]), {
            data: o,
            loggedIn: u,
            loading: m
          }
        },
        V = {},
        B = (0, n.setContextItem)({
          context: (0, s.createContext)(V),
          key: "userContext"
        }),
        j = ({
          children: e,
          privateToken: t
        }) => {
          const a = M({
              privateToken: t
            }),
            n = (0, s.useMemo)(() => ({
              ...a,
              privateToken: t,
              hasProvider: !0
            }), [a]);
          return (0, r.jsx)(B.Provider, {
            value: n,
            children: e
          })
        },
        U = () => (0, s.useContext)(B)
    },
    42295: (e, t, a) => {
      e.exports = a(69245)
    },
    69245: (e, t, a) => {
      var r = a(62229),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
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
        for (r in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) o.call(t, r) && !i.hasOwnProperty(r) && (n[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === n[r] && (n[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: l,
          ref: u,
          props: n,
          _owner: c.current
        }
      }
      t.Fragment = n, t.jsx = l, t.jsxs = l
    }
  }
]);