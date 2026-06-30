try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e2179bbf-88a2-4d12-9f71-a6133847e3a0", e._sentryDebugIdIdentifier = "sentry-dbid-e2179bbf-88a2-4d12-9f71-a6133847e3a0")
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
  [3180], {
    90799(e, a, t) {
      t.r(a), t.d(a, {
        GtmProvider: () => d,
        RockstarUserProvider: () => j,
        fetchUnreadNotificationCount: () => R,
        useGtmTrack: () => f,
        useRockstarUser: () => U,
        useRockstarUserState: () => x
      });
      var r = t(39793),
        s = t(4637),
        n = t(13331),
        c = t(85997);
      const o = e => "pcalt" === e ? "pc" : e.toString(),
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
        u = e => e ? Object.fromEntries(Object.entries(e).map(([e, a]) => [e, "string" == typeof a ? a.toLowerCase() : a])) : e,
        l = (0, n.setContextItem)({
          context: (0, s.createContext)(void 0),
          key: "gtmContext22"
        }),
        d = ({
          checkUser: e,
          children: a
        }) => {
          const t = ((e = !0) => {
              const [a, t] = (0, s.useState)([]), [r, l] = (0, s.useState)(null), {
                data: d,
                loggedIn: p
              } = U(), f = (0, c.bn)(), h = (e, a) => {
                const r = e.length;
                e.forEach(e => {
                  const t = a ?? {};
                  (0, n.track)({
                    ...e,
                    ...t
                  })
                }), t(e => e.slice(r))
              };
              return (0, s.useEffect)(() => {
                if (d && null !== p) {
                  const e = ((e, a) => {
                    const t = [],
                      r = [],
                      s = [...new Set(e.gtaPlusPlatforms.map(e => o(e)))],
                      n = [];
                    return Object.entries(e?.characters ?? []).forEach(([e, a]) => {
                      a.length && a.forEach(a => {
                        const s = o(a.platform);
                        if ("gtao" === e) {
                          r.includes(s) || r.push(s);
                          const t = `${e}_${a.platform}`;
                          n.includes(t) || n.push(t)
                        }
                        t.includes(s) || t.push(s)
                      })
                    }), Object.entries(e?.gamesPlayed ?? []).forEach(([e, a]) => {
                      n.push(`${e}_${a}`), t.includes(a) || t.push(a)
                    }), {
                      member_id: e.id ?? void 0,
                      login_state: a ?? !1,
                      platforms_played: t.length ? t.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      games_played: n.length ? n.join("|").toUpperCase() : void 0,
                      gtao_platforms_played: r.length ? r.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_platforms: s.length ? s.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_active: s.length > 0,
                      use_enhanced_browser_features: f,
                      section_layout: a ? "signed in" : "signed out"
                    }
                  })(d, p);
                  a.length && e && h([...a], e), l(e)
                } else e || a.length && h([...a])
              }, [d, p, a, e]), {
                track: e => (Boolean(d && r), (0, n.track)({
                  ...u(e),
                  ...r
                }))
              }
            })(e),
            d = (0, s.useMemo)(() => t, [t, e]);
          return (0, r.jsx)(l.Provider, {
            value: d,
            children: a
          })
        },
        p = {
          track: () => null
        },
        f = () => (0, s.useContext)(l) ?? p,
        h = (0, n.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, n.makeVar)(null)
        }),
        g = e => h(e),
        m = (0, n.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, n.makeVar)(!1)
        }),
        k = e => m(e),
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
        S = (0, n.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, n.makeVar)(null)
        }),
        _ = (0, n.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, n.makeVar)(!1)
        }),
        E = e => _(e),
        C = (0, n.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, n.makeVar)(!1)
        }),
        P = e => C(e),
        T = (0, n.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, n.makeVar)(null)
        }),
        I = e => T(e),
        x = () => {
          const e = (0, n.useReactiveVar)(_),
            a = (0, n.useReactiveVar)(C),
            t = (0, n.useReactiveVar)(y),
            r = (0, n.useReactiveVar)(h),
            s = (0, n.useReactiveVar)(w);
          return {
            charactersNeeded: e,
            crewsNeeded: a,
            currentCharId: t,
            navOpen: r,
            userData: (0, n.useReactiveVar)(T),
            selectedCharacterTuple: s,
            jumpScMenuFocus: (0, n.useReactiveVar)(m),
            setCharactersNeeded: E,
            setCrewsNeeded: P,
            setCurrentCharId: v,
            setNavOpen: g,
            setSelectedCharacterTuple: b,
            setUserData: I,
            setJumpScMenuFocus: k
          }
        },
        R = async ({
          pingBearer: e
        }) => await (0, n.coreScApiFetch)("notification/count", {
          pingBearer: e
        });
      var M = t(4242),
        N = t(37295),
        A = t(77033),
        O = t.n(A);
      const V = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: a,
            crewsNeeded: t
          } = x(), r = (0, n.useRockstarToken)(), [c, o] = (0, s.useState)({
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
          }), [i] = (0, n.useRockstarTokenReactive)(), u = (0, n.useRockstarTokenPing)(), [l, d] = (0, s.useState)(), [p, f] = (0, s.useState)(!1), h = void 0 === l, [g, m] = (0, s.useState)(1);
          return (0, s.useEffect)(() => {
            "gtao" !== a || c?.characters?.gtao || (o(e => ({
              ...e,
              accountSynced: !1
            })), m(e => e + 1))
          }, [a, c?.characters?.gtao]), (0, s.useEffect)(() => {
            t && !c?.crews && (o(e => ({
              ...e,
              accountSynced: !1
            })), m(e => e + 1))
          }, [t, c?.crews]), (0, s.useEffect)(() => {
            0 === g && o(e => ({
              ...e,
              accountSynced: !0
            }))
          }, [g]), (0, s.useEffect)(() => {
            e && i(e)
          }, [e]), (0, s.useEffect)(() => {
            "" !== r || u()
          }, [r]), (0, s.useEffect)(() => {
            if ("" === r) return;
            const e = !!r;
            if (e || p || ((async () => {
                try {
                  await (async ({
                    token: e
                  }) => {
                    const {
                      gateway: a,
                      silentCheck: t
                    } = (0, n.getConfigForDomain)(), r = {
                      method: "POST",
                      body: `fingerprint=${await O().get().then(e=>e)}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, s = await fetch(t, r);
                    if (200 !== s.status) return void e(!1);
                    const c = `${a}?code=${await s.json()}`,
                      o = await fetch(c, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: i
                      } = await o.json();
                    return e(i), i
                  })({
                    token: i
                  })
                } catch (e) {}
              })(), f(!0)), !e && p && d(!1), e) {
              const e = (({
                bearerToken: e
              }) => {
                const a = (0, M.s)(e),
                  {
                    host: t
                  } = (0, n.getConfigForDomain)(),
                  r = parseInt(a.nameid),
                  s = a["scAuth.Nickname"],
                  c = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  o = new Date(a["scAuth.MemberSince"]),
                  i = new Date,
                  u = (0, N.M)(i, o) < 12,
                  l = (new Date).getTime() / 1e3;
                return {
                  id: r,
                  nonExpiredToken: (a?.exp ?? 0) - l > 0,
                  avatar: a["scAuth.AvatarUrl"],
                  bearer_token_expired: a.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: u,
                  nickname: s,
                  profile_link: `https://${t}.rockstargames.com/member/${s}?id=${r}`
                }
              })({
                bearerToken: r
              });
              o(a => ({
                ...a,
                ...e
              }))
            }
          }, [r, p]), (0, s.useEffect)(() => {
            (async () => {
              if (l && c && t && !c?.crews && c?.characters) {
                const e = await (async ({
                  pingBearer: e,
                  rockstarId: a
                }) => {
                  const {
                    crews: t
                  } = await (0, n.coreScApiFetch)("crew/forMember", {
                    pingBearer: e,
                    query: {
                      userId: a
                    }
                  });
                  return t
                })({
                  pingBearer: u,
                  rockstarId: c.id
                });
                o(a => ({
                  ...a,
                  crews: e
                })), m(e => e - 1)
              }
            })()
          }, [c?.nickname, t, l, c?.characters]), (0, s.useEffect)(() => {
            (async () => {
              if (!l || !c || null != c?.hasNotification) return;
              const e = await R({
                pingBearer: u
              });
              let a = !1;
              e?.count && (a = e.count > 0), o(e => ({
                ...e,
                hasNotification: a
              }))
            })()
          }, [l, c?.hasNotification]), (0, s.useEffect)(() => {
            (async () => {
              if (!l || !c || c?.gamesPlayed || !1 === a || !1 === t) return;
              const e = await (async ({
                pingBearer: e
              }) => {
                const a = await (0, n.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: e
                });
                return a?.all ?? {}
              })({
                pingBearer: u
              });
              o(a => ({
                ...a,
                gamesPlayed: e
              })), m(e => e - 1)
            })()
          }, [c?.nickname, l]), (0, s.useEffect)(() => {
            (async () => {
              if (l && c && "gtao" === a && !c?.characters?.gtao) {
                const e = (async ({
                    pingBearer: e
                  }) => {
                    const {
                      result: {
                        linkedAccounts: a = []
                      }
                    } = await (0, n.coreScApiFetch)("account/linkedaccounts", {
                      pingBearer: e
                    });
                    return a ?? []
                  })({
                    pingBearer: u
                  }),
                  a = (async ({
                    pingBearer: e
                  }) => {
                    const a = await (0, n.coreScApiFetch)("games/gtao/charactersPlayedPlatforms", {
                      pingBearer: e
                    });
                    if (!a?.status) return [];
                    const t = a.result.flatMap(e => e.characters.filter(({
                      stats: {
                        overview: {
                          rank: e
                        }
                      }
                    }) => "0" !== e.value).map(a => {
                      return {
                        activeCharacter: a.activeCharacter,
                        characterSlot: a.characterSlot,
                        mugshotUrl: (t = a.mugshotUrl, r = e.platform, ["ps4", "ps5"].includes(r) ? t.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : t),
                        stats: a.stats,
                        platform: e.platform,
                        platformUsername: e.playerAccount.userName
                      };
                      var t, r
                    }));
                    return t.sort((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter)), t.map((e, a) => ({
                      ...e,
                      index: a
                    }))
                  })({
                    pingBearer: u
                  }),
                  [t, r] = await Promise.all([e, a]),
                  s = [];
                r.forEach(e => {
                  const a = e.platform;
                  s.includes(a) || "1" !== e.stats?.overview?.hasGtaPlus?.value || s.push(a)
                }), o(e => ({
                  ...e,
                  characters: {
                    ...e.characters,
                    gtao: r
                  },
                  linkedAccounts: t,
                  hasGtaPlus: s.length > 0,
                  gtaPlusPlatforms: s
                })), m(e => e - 1)
              }
            })()
          }, [a, c?.nickname, l, c, u]), (0, s.useEffect)(() => {
            c?.id && c?.nonExpiredToken && (d(!0), S(c.id))
          }, [JSON.stringify(c)]), {
            data: c,
            setData: o,
            loggedIn: l,
            loading: h
          }
        },
        B = {},
        D = (0, n.setContextItem)({
          context: (0, s.createContext)(B),
          key: "userContext"
        }),
        j = ({
          children: e,
          privateToken: a
        }) => {
          const t = V({
              privateToken: a
            }),
            n = (0, s.useMemo)(() => ({
              ...t,
              privateToken: a,
              hasProvider: !0
            }), [t]);
          return (0, r.jsx)(D.Provider, {
            value: n,
            children: e
          })
        },
        U = () => (0, s.useContext)(D)
    }
  }
]);