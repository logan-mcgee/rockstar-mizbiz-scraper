try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "376247ef-9616-482b-a97a-9ff89d40fa7d", e._sentryDebugIdIdentifier = "sentry-dbid-376247ef-9616-482b-a97a-9ff89d40fa7d")
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
        GtmProvider: () => l,
        RockstarUserProvider: () => B,
        useGtmTrack: () => p,
        useRockstarUser: () => j,
        useRockstarUserState: () => T
      });
      var r = a(42295),
        n = a(62229),
        s = a(95966),
        c = a(56088);
      const o = {
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
        i = e => e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, "string" == typeof t ? t.toLowerCase() : t])) : e,
        u = (0, s.setContextItem)({
          context: (0, n.createContext)(void 0),
          key: "gtmContext22"
        }),
        l = ({
          checkUser: e,
          children: t
        }) => {
          const a = ((e = !0) => {
              const [t, a] = (0, n.useState)([]), [r, u] = (0, n.useState)(null), {
                data: l,
                loggedIn: d
              } = j(), {
                hasGtaPlus: p
              } = l ?? {}, f = (0, c.bn)(), m = (e, t) => {
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
                if (l && null !== d) {
                  const e = ((e, t) => {
                    const a = [],
                      r = [],
                      n = [],
                      s = [];
                    return Object.entries(e?.characters ?? []).forEach(([e, t]) => {
                      t.length && t.forEach(t => {
                        const c = (e => "pcalt" === e ? "pc" : e.toString())(t.platform);
                        if ("gtao" === e) {
                          r.includes(c) || r.push(c), n.includes(c) || "1" !== t.stats?.overview?.hasGtaPlus?.value || n.push(c);
                          const a = `${e}_${t.platform}`;
                          s.includes(a) || s.push(a)
                        }
                        a.includes(c) || a.push(c)
                      })
                    }), Object.entries(e?.gamesPlayed ?? []).forEach(([e, t]) => {
                      s.push(`${e}_${t}`), a.includes(t) || a.push(t)
                    }), {
                      member_id: e.id ?? void 0,
                      login_state: t ?? !1,
                      gta_plus_active: !!t && Boolean(p),
                      platforms_played: a.length ? a.map(e => o[e] ?? e).join("|").toUpperCase() : void 0,
                      games_played: s.length ? s.join("|").toUpperCase() : void 0,
                      gtao_platforms_played: r.length ? r.map(e => o[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_platforms: n.length ? n.map(e => o[e] ?? e).join("|").toUpperCase() : void 0,
                      use_enhanced_browser_features: f,
                      section_layout: t ? "signed in" : "signed out"
                    }
                  })(l, d);
                  t.length && e && m([...t], e), u(e)
                } else e || t.length && m([...t])
              }, [l, d, t, e]), {
                track: e => (Boolean(l && r), (0, s.track)({
                  ...i(e),
                  ...r
                }))
              }
            })(e),
            l = (0, n.useMemo)(() => a, [a, e]);
          return (0, r.jsx)(u.Provider, {
            value: l,
            children: t
          })
        },
        d = {
          track: () => null
        },
        p = () => (0, n.useContext)(u) ?? d,
        f = (0, s.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, s.makeVar)(null)
        }),
        m = e => f(e),
        g = (0, s.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, s.makeVar)(!1)
        }),
        h = e => g(e),
        k = (0, s.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, s.makeVar)((0, s.webSettingsReactive)()?.currentCharId)
        }),
        v = e => k(e),
        y = (0, s.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, s.makeVar)(null)
        }),
        w = e => y(e),
        _ = (0, s.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, s.makeVar)(null)
        }),
        b = (0, s.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        S = e => b(e),
        x = (0, s.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        E = e => x(e),
        C = (0, s.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, s.makeVar)(null)
        }),
        I = e => C(e),
        T = () => {
          const e = (0, s.useReactiveVar)(b),
            t = (0, s.useReactiveVar)(x),
            a = (0, s.useReactiveVar)(k),
            r = (0, s.useReactiveVar)(f),
            n = (0, s.useReactiveVar)(y);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            navOpen: r,
            userData: (0, s.useReactiveVar)(C),
            selectedCharacterTuple: n,
            jumpScMenuFocus: (0, s.useReactiveVar)(g),
            setCharactersNeeded: S,
            setCrewsNeeded: E,
            setCurrentCharId: v,
            setNavOpen: m,
            setSelectedCharacterTuple: w,
            setUserData: I,
            setJumpScMenuFocus: h
          }
        };
      var R = a(39763),
        N = a.n(R);
      var P = a(58128),
        A = a(25130);
      const O = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: t,
            crewsNeeded: a,
            currentCharId: r
          } = T(), c = (0, s.useRockstarToken)(), [o, i] = (0, n.useState)({
            id: 0,
            avatar: "",
            bearer_token_expired: !0,
            isAMinor: void 0,
            isNewAccount: !1,
            nickname: "",
            nonExpiredToken: !1,
            profile_link: "https://",
            accountSynced: !1
          }), [u] = (0, s.useRockstarTokenReactive)(), l = (0, s.useRockstarTokenPing)(), [d, p] = (0, n.useState)(), [f, m] = (0, n.useState)(!1), g = void 0 === d, [h, k] = (0, n.useState)(1);
          return (0, n.useEffect)(() => {
            "gtao" !== t || o?.characters?.gtao || (i(e => ({
              ...e,
              accountSynced: !1
            })), k(e => e + 1))
          }, [t, o?.characters?.gtao]), (0, n.useEffect)(() => {
            a && !o?.crews && (i(e => ({
              ...e,
              accountSynced: !1
            })), k(e => e + 1))
          }, [a, o?.crews]), (0, n.useEffect)(() => {
            0 === h && i(e => ({
              ...e,
              accountSynced: !0
            }))
          }, [h]), (0, n.useEffect)(() => {
            e && u(e)
          }, [e]), (0, n.useEffect)(() => {
            "" !== c || l()
          }, [c]), (0, n.useEffect)(() => {
            if ("" === c) return;
            const e = !!c;
            if (e || f || ((async () => {
                try {
                  await (async ({
                    token: e
                  }) => {
                    const {
                      gateway: t,
                      silentCheck: a
                    } = (0, s.getConfigForDomain)(), r = {
                      method: "POST",
                      body: `fingerprint=${await N().get().then(e=>e)}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, n = await fetch(a, r);
                    if (200 !== n.status) return void e(!1);
                    const c = `${t}?code=${await n.json()}`,
                      o = await fetch(c, {
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
              })(), m(!0)), !e && f && p(!1), e) {
              const e = (({
                bearerToken: e
              }) => {
                const t = (0, P.s)(e),
                  {
                    host: a
                  } = (0, s.getConfigForDomain)(),
                  r = parseInt(t.nameid),
                  n = t["scAuth.Nickname"],
                  c = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  o = new Date(t["scAuth.MemberSince"]),
                  i = new Date,
                  u = (0, A.M)(i, o) < 12,
                  l = (new Date).getTime() / 1e3;
                return {
                  id: r,
                  nonExpiredToken: (t?.exp ?? 0) - l > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: u,
                  nickname: n,
                  profile_link: `https://${a}.rockstargames.com/member/${n}?id=${r}`
                }
              })({
                bearerToken: c
              });
              i(t => ({
                ...t,
                ...e
              }))
            }
          }, [c, f]), (0, n.useEffect)(() => {
            (async () => {
              if (d && o && a && !o?.crews && o?.characters) {
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
                i(t => ({
                  ...t,
                  crews: e
                })), k(e => e - 1)
              }
            })()
          }, [o?.nickname, a, d, o?.characters]), (0, n.useEffect)(() => {
            (async () => {
              if (!d || !o || null != o?.hasNotification) return;
              const e = await (async ({
                pingBearer: e
              }) => await (0, s.coreScApiFetch)("notification/count", {
                pingBearer: e
              }))({
                pingBearer: l
              });
              let t = !1;
              e?.count && (t = e.count > 0), i(e => ({
                ...e,
                hasNotification: t
              }))
            })()
          }, [d, o?.hasNotification]), (0, n.useEffect)(() => {
            (async () => {
              if (!d || !o || o?.gamesPlayed || !1 === t || !1 === a) return;
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
              i(t => ({
                ...t,
                gamesPlayed: e
              })), k(e => e - 1)
            })()
          }, [o?.nickname, d]), (0, n.useEffect)(() => {
            (async () => {
              if (d && o && "gtao" === t && !o?.characters?.gtao) {
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
                    c = (await Promise.all(n)).flat().filter(e => void 0 !== e),
                    {
                      status: o,
                      accounts: i
                    } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                      pingBearer: e
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
                  const p = t;
                  let f = "",
                    m = "";
                  return d?.map(e => ("xbl" === e?.onlineService ? f = e.userName : "np" === e?.onlineService && (m = e.userName), e)), c.sort((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter)), c.map((e, t) => (e.platformUsername = p, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = m || p), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = f || p), e)), {
                    gtaoCharacters: c,
                    linkedAccounts: d
                  }
                })({
                  pingBearer: l,
                  nickname: o.nickname,
                  rockstarId: o.id
                });
                i(a => ({
                  ...a,
                  characters: {
                    ...a.characters,
                    gtao: e
                  },
                  linkedAccounts: t,
                  hasGtaPlus: "1" === e?.[r]?.stats?.overview?.hasGtaPlus?.value
                })), k(e => e - 1)
              }
            })()
          }, [t, o?.nickname, d]), (0, n.useEffect)(() => {
            o?.id && o?.nonExpiredToken && (p(!0), _(o.id))
          }, [JSON.stringify(o)]), {
            data: o,
            loggedIn: d,
            loading: g
          }
        },
        M = {},
        V = (0, s.setContextItem)({
          context: (0, n.createContext)(M),
          key: "userContext"
        }),
        B = ({
          children: e,
          privateToken: t
        }) => {
          const a = O({
              privateToken: t
            }),
            s = (0, n.useMemo)(() => ({
              ...a,
              privateToken: t,
              hasProvider: !0
            }), [a]);
          return (0, r.jsx)(V.Provider, {
            value: s,
            children: e
          })
        },
        j = () => (0, n.useContext)(V)
    },
    42295: (e, t, a) => {
      e.exports = a(69245)
    },
    69245: (e, t, a) => {
      var r = a(62229),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        c = Object.prototype.hasOwnProperty,
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, a) {
        var r, s = {},
          u = null,
          l = null;
        for (r in void 0 !== a && (u = "" + a), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) c.call(t, r) && !i.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: n,
          type: e,
          key: u,
          ref: l,
          props: s,
          _owner: o.current
        }
      }
      t.Fragment = s, t.jsx = u, t.jsxs = u
    }
  }
]);