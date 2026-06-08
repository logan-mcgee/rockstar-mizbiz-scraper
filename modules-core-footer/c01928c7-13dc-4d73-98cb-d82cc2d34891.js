try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c01928c7-13dc-4d73-98cb-d82cc2d34891", e._sentryDebugIdIdentifier = "sentry-dbid-c01928c7-13dc-4d73-98cb-d82cc2d34891")
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
  [799], {
    799(e, t, a) {
      a.r(t), a.d(t, {
        GtmProvider: () => d,
        RockstarUserProvider: () => j,
        fetchUnreadNotificationCount: () => R,
        useGtmTrack: () => f,
        useRockstarUser: () => U,
        useRockstarUserState: () => x
      });
      var r = a(9793),
        s = a(4637),
        c = a(3331),
        n = a(5997);
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
        u = e => e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, "string" == typeof t ? t.toLowerCase() : t])) : e,
        l = (0, c.setContextItem)({
          context: (0, s.createContext)(void 0),
          key: "gtmContext22"
        }),
        d = ({
          checkUser: e,
          children: t
        }) => {
          const a = ((e = !0) => {
              const [t, a] = (0, s.useState)([]), [r, l] = (0, s.useState)(null), {
                data: d,
                loggedIn: p
              } = U(), f = (0, n.bn)(), h = (e, t) => {
                const r = e.length;
                e.forEach(e => {
                  const a = t ?? {};
                  (0, c.track)({
                    ...e,
                    ...a
                  })
                }), a(e => e.slice(r))
              };
              return (0, s.useEffect)(() => {
                if (d && null !== p) {
                  const e = ((e, t) => {
                    const a = [],
                      r = [],
                      s = [...new Set(e.gtaPlusPlatforms.map(e => o(e)))],
                      c = [];
                    return Object.entries(e?.characters ?? []).forEach(([e, t]) => {
                      t.length && t.forEach(t => {
                        const s = o(t.platform);
                        if ("gtao" === e) {
                          r.includes(s) || r.push(s);
                          const a = `${e}_${t.platform}`;
                          c.includes(a) || c.push(a)
                        }
                        a.includes(s) || a.push(s)
                      })
                    }), Object.entries(e?.gamesPlayed ?? []).forEach(([e, t]) => {
                      c.push(`${e}_${t}`), a.includes(t) || a.push(t)
                    }), {
                      member_id: e.id ?? void 0,
                      login_state: t ?? !1,
                      platforms_played: a.length ? a.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      games_played: c.length ? c.join("|").toUpperCase() : void 0,
                      gtao_platforms_played: r.length ? r.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_platforms: s.length ? s.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_active: s.length > 0,
                      use_enhanced_browser_features: f,
                      section_layout: t ? "signed in" : "signed out"
                    }
                  })(d, p);
                  t.length && e && h([...t], e), l(e)
                } else e || t.length && h([...t])
              }, [d, p, t, e]), {
                track: e => (Boolean(d && r), (0, c.track)({
                  ...u(e),
                  ...r
                }))
              }
            })(e),
            d = (0, s.useMemo)(() => a, [a, e]);
          return (0, r.jsx)(l.Provider, {
            value: d,
            children: t
          })
        },
        p = {
          track: () => null
        },
        f = () => (0, s.useContext)(l) ?? p,
        h = (0, c.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, c.makeVar)(null)
        }),
        g = e => h(e),
        m = (0, c.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, c.makeVar)(!1)
        }),
        k = e => m(e),
        y = (0, c.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, c.makeVar)((0, c.webSettingsReactive)()?.currentCharId)
        }),
        v = e => y(e),
        w = (0, c.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, c.makeVar)(null)
        }),
        b = e => w(e),
        S = (0, c.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, c.makeVar)(null)
        }),
        _ = (0, c.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, c.makeVar)(!1)
        }),
        E = e => _(e),
        C = (0, c.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, c.makeVar)(!1)
        }),
        P = e => C(e),
        T = (0, c.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, c.makeVar)(null)
        }),
        I = e => T(e),
        x = () => {
          const e = (0, c.useReactiveVar)(_),
            t = (0, c.useReactiveVar)(C),
            a = (0, c.useReactiveVar)(y),
            r = (0, c.useReactiveVar)(h),
            s = (0, c.useReactiveVar)(w);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            navOpen: r,
            userData: (0, c.useReactiveVar)(T),
            selectedCharacterTuple: s,
            jumpScMenuFocus: (0, c.useReactiveVar)(m),
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
        }) => await (0, c.coreScApiFetch)("notification/count", {
          pingBearer: e
        });
      var M = a(4242),
        N = a(7295),
        A = a(7033),
        O = a.n(A);
      const V = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: t,
            crewsNeeded: a
          } = x(), r = (0, c.useRockstarToken)(), [n, o] = (0, s.useState)({
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
          }), [i] = (0, c.useRockstarTokenReactive)(), u = (0, c.useRockstarTokenPing)(), [l, d] = (0, s.useState)(), [p, f] = (0, s.useState)(!1), h = void 0 === l, [g, m] = (0, s.useState)(1);
          return (0, s.useEffect)(() => {
            "gtao" !== t || n?.characters?.gtao || (o(e => ({
              ...e,
              accountSynced: !1
            })), m(e => e + 1))
          }, [t, n?.characters?.gtao]), (0, s.useEffect)(() => {
            a && !n?.crews && (o(e => ({
              ...e,
              accountSynced: !1
            })), m(e => e + 1))
          }, [a, n?.crews]), (0, s.useEffect)(() => {
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
                      gateway: t,
                      silentCheck: a
                    } = (0, c.getConfigForDomain)(), r = {
                      method: "POST",
                      body: `fingerprint=${await O().get().then(e=>e)}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, s = await fetch(a, r);
                    if (200 !== s.status) return void e(!1);
                    const n = `${t}?code=${await s.json()}`,
                      o = await fetch(n, {
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
                const t = (0, M.s)(e),
                  {
                    host: a
                  } = (0, c.getConfigForDomain)(),
                  r = parseInt(t.nameid),
                  s = t["scAuth.Nickname"],
                  n = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  o = new Date(t["scAuth.MemberSince"]),
                  i = new Date,
                  u = (0, N.M)(i, o) < 12,
                  l = (new Date).getTime() / 1e3;
                return {
                  id: r,
                  nonExpiredToken: (t?.exp ?? 0) - l > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: n,
                  isNewAccount: u,
                  nickname: s,
                  profile_link: `https://${a}.rockstargames.com/member/${s}?id=${r}`
                }
              })({
                bearerToken: r
              });
              o(t => ({
                ...t,
                ...e
              }))
            }
          }, [r, p]), (0, s.useEffect)(() => {
            (async () => {
              if (l && n && a && !n?.crews && n?.characters) {
                const e = await (async ({
                  pingBearer: e,
                  rockstarId: t
                }) => {
                  const {
                    crews: a
                  } = await (0, c.coreScApiFetch)("crew/forMember", {
                    pingBearer: e,
                    query: {
                      userId: t
                    }
                  });
                  return a
                })({
                  pingBearer: u,
                  rockstarId: n.id
                });
                o(t => ({
                  ...t,
                  crews: e
                })), m(e => e - 1)
              }
            })()
          }, [n?.nickname, a, l, n?.characters]), (0, s.useEffect)(() => {
            (async () => {
              if (!l || !n || null != n?.hasNotification) return;
              const e = await R({
                pingBearer: u
              });
              let t = !1;
              e?.count && (t = e.count > 0), o(e => ({
                ...e,
                hasNotification: t
              }))
            })()
          }, [l, n?.hasNotification]), (0, s.useEffect)(() => {
            (async () => {
              if (!l || !n || n?.gamesPlayed || !1 === t || !1 === a) return;
              const e = await (async ({
                pingBearer: e
              }) => {
                const {
                  all: t
                } = await (0, c.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: e
                });
                return t
              })({
                pingBearer: u
              });
              o(t => ({
                ...t,
                gamesPlayed: e
              })), m(e => e - 1)
            })()
          }, [n?.nickname, l]), (0, s.useEffect)(() => {
            (async () => {
              if (l && n && "gtao" === t && !n?.characters?.gtao) {
                const e = (async ({
                    pingBearer: e
                  }) => {
                    const {
                      result: {
                        linkedAccounts: t
                      }
                    } = await (0, c.coreScApiFetch)("account/linkedaccounts", {
                      pingBearer: e
                    });
                    return t
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
                    const a = t.result.flatMap(e => e.characters.filter(({
                      stats: {
                        overview: {
                          rank: e
                        }
                      }
                    }) => "0" !== e.value).map(t => {
                      return {
                        activeCharacter: t.activeCharacter,
                        characterSlot: t.characterSlot,
                        mugshotUrl: (a = t.mugshotUrl, r = e.platform, ["ps4", "ps5"].includes(r) ? a.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : a),
                        stats: t.stats,
                        platform: e.platform,
                        platformUsername: e.playerAccount.userName
                      };
                      var a, r
                    }));
                    return a.sort((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter)), a.map((e, t) => ({
                      ...e,
                      index: t
                    }))
                  })({
                    pingBearer: u
                  }),
                  [a, r] = await Promise.all([e, t]),
                  s = [];
                r.forEach(e => {
                  const t = e.platform;
                  s.includes(t) || "1" !== e.stats?.overview?.hasGtaPlus?.value || s.push(t)
                }), o(e => ({
                  ...e,
                  characters: {
                    ...e.characters,
                    gtao: r
                  },
                  linkedAccounts: a,
                  hasGtaPlus: s.length > 0,
                  gtaPlusPlatforms: s
                })), m(e => e - 1)
              }
            })()
          }, [t, n?.nickname, l, n, u]), (0, s.useEffect)(() => {
            n?.id && n?.nonExpiredToken && (d(!0), S(n.id))
          }, [JSON.stringify(n)]), {
            data: n,
            setData: o,
            loggedIn: l,
            loading: h
          }
        },
        B = {},
        D = (0, c.setContextItem)({
          context: (0, s.createContext)(B),
          key: "userContext"
        }),
        j = ({
          children: e,
          privateToken: t
        }) => {
          const a = V({
              privateToken: t
            }),
            c = (0, s.useMemo)(() => ({
              ...a,
              privateToken: t,
              hasProvider: !0
            }), [a]);
          return (0, r.jsx)(D.Provider, {
            value: c,
            children: e
          })
        },
        U = () => (0, s.useContext)(D)
    }
  }
]);