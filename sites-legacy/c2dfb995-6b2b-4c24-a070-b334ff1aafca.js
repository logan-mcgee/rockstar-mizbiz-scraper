try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c2dfb995-6b2b-4c24-a070-b334ff1aafca", e._sentryDebugIdIdentifier = "sentry-dbid-c2dfb995-6b2b-4c24-a070-b334ff1aafca")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [7627], {
    90799(e, t, a) {
      a.r(t), a.d(t, {
        GtmProvider: () => d,
        RockstarUserProvider: () => D,
        fetchUnreadNotificationCount: () => R,
        useGtmTrack: () => h,
        useRockstarUser: () => j,
        useRockstarUserState: () => M
      });
      var s = a(39793),
        r = a(93082),
        n = a(13331),
        c = a(85997);
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
        l = (0, n.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        d = ({
          checkUser: e,
          children: t
        }) => {
          const a = ((e = !0) => {
              const [t, a] = (0, r.useState)([]), [s, l] = (0, r.useState)(null), {
                data: d,
                loggedIn: p
              } = j(), h = (0, c.bn)(), m = (e, t) => {
                const s = e.length;
                e.forEach(e => {
                  const a = t ?? {};
                  (0, n.track)({
                    ...e,
                    ...a
                  })
                }), a(e => e.slice(s))
              };
              return (0, r.useEffect)(() => {
                if (d && null !== p) {
                  const e = ((e, t) => {
                    const a = [],
                      s = [],
                      r = [...new Set(e.gtaPlusPlatforms.map(e => o(e)))],
                      n = [];
                    return Object.entries(e?.characters ?? []).forEach(([e, t]) => {
                      t.length && t.forEach(t => {
                        const r = o(t.platform);
                        if ("gtao" === e) {
                          s.includes(r) || s.push(r);
                          const a = `${e}_${t.platform}`;
                          n.includes(a) || n.push(a)
                        }
                        a.includes(r) || a.push(r)
                      })
                    }), Object.entries(e?.gamesPlayed ?? []).forEach(([e, t]) => {
                      n.push(`${e}_${t}`), a.includes(t) || a.push(t)
                    }), {
                      member_id: e.id ?? void 0,
                      login_state: t ?? !1,
                      platforms_played: a.length ? a.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      games_played: n.length ? n.join("|").toUpperCase() : void 0,
                      gtao_platforms_played: s.length ? s.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_platforms: r.length ? r.map(e => i[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_active: r.length > 0,
                      use_enhanced_browser_features: h,
                      section_layout: t ? "signed in" : "signed out"
                    }
                  })(d, p);
                  t.length && e && m([...t], e), l(e)
                } else e || t.length && m([...t])
              }, [d, p, t, e]), {
                track: e => (Boolean(d && s), (0, n.track)({
                  ...u(e),
                  ...s
                }))
              }
            })(e),
            d = (0, r.useMemo)(() => a, [a, e]);
          return (0, s.jsx)(l.Provider, {
            value: d,
            children: t
          })
        },
        p = {
          track: () => null
        },
        h = () => (0, r.useContext)(l) ?? p,
        m = (0, n.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, n.makeVar)(null)
        }),
        f = e => m(e),
        g = (0, n.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, n.makeVar)(!1)
        }),
        k = e => g(e),
        y = (0, n.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, n.makeVar)((0, n.webSettingsReactive)()?.currentCharId)
        }),
        w = e => y(e),
        v = (0, n.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, n.makeVar)(null)
        }),
        b = e => v(e),
        E = (0, n.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, n.makeVar)(null)
        }),
        T = (0, n.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, n.makeVar)(!1)
        }),
        S = e => T(e),
        C = (0, n.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, n.makeVar)(!1)
        }),
        P = e => C(e),
        _ = (0, n.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, n.makeVar)(null)
        }),
        I = e => _(e),
        M = () => {
          const e = (0, n.useReactiveVar)(T),
            t = (0, n.useReactiveVar)(C),
            a = (0, n.useReactiveVar)(y),
            s = (0, n.useReactiveVar)(m),
            r = (0, n.useReactiveVar)(v);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            navOpen: s,
            userData: (0, n.useReactiveVar)(_),
            selectedCharacterTuple: r,
            jumpScMenuFocus: (0, n.useReactiveVar)(g),
            setCharactersNeeded: S,
            setCrewsNeeded: P,
            setCurrentCharId: w,
            setNavOpen: f,
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
      var x = a(4242),
        B = a(37295),
        N = a(77033),
        A = a.n(N);
      const $ = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: t,
            crewsNeeded: a
          } = M(), s = (0, n.useRockstarToken)(), [c, o] = (0, r.useState)({
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
          }), [i] = (0, n.useRockstarTokenReactive)(), u = (0, n.useRockstarTokenPing)(), [l, d] = (0, r.useState)(), [p, h] = (0, r.useState)(!1), m = void 0 === l, [f, g] = (0, r.useState)(1);
          return (0, r.useEffect)(() => {
            "gtao" !== t || c?.characters?.gtao || (o(e => ({
              ...e,
              accountSynced: !1
            })), g(e => e + 1))
          }, [t, c?.characters?.gtao]), (0, r.useEffect)(() => {
            a && !c?.crews && (o(e => ({
              ...e,
              accountSynced: !1
            })), g(e => e + 1))
          }, [a, c?.crews]), (0, r.useEffect)(() => {
            0 === f && o(e => ({
              ...e,
              accountSynced: !0
            }))
          }, [f]), (0, r.useEffect)(() => {
            e && i(e)
          }, [e]), (0, r.useEffect)(() => {
            "" !== s || u()
          }, [s]), (0, r.useEffect)(() => {
            if ("" === s) return;
            const e = !!s;
            if (e || p || ((async () => {
                try {
                  await (async ({
                    token: e
                  }) => {
                    const {
                      gateway: t,
                      silentCheck: a
                    } = (0, n.getConfigForDomain)(), s = {
                      method: "POST",
                      body: `fingerprint=${await A().get().then(e=>e)}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, r = await fetch(a, s);
                    if (200 !== r.status) return void e(!1);
                    const c = `${t}?code=${await r.json()}`,
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
              })(), h(!0)), !e && p && d(!1), e) {
              const e = (({
                bearerToken: e
              }) => {
                const t = (0, x.s)(e),
                  {
                    host: a
                  } = (0, n.getConfigForDomain)(),
                  s = parseInt(t.nameid),
                  r = t["scAuth.Nickname"],
                  c = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  o = new Date(t["scAuth.MemberSince"]),
                  i = new Date,
                  u = (0, B.M)(i, o) < 12,
                  l = (new Date).getTime() / 1e3;
                return {
                  id: s,
                  nonExpiredToken: (t?.exp ?? 0) - l > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: u,
                  nickname: r,
                  profile_link: `https://${a}.rockstargames.com/member/${r}?id=${s}`
                }
              })({
                bearerToken: s
              });
              o(t => ({
                ...t,
                ...e
              }))
            }
          }, [s, p]), (0, r.useEffect)(() => {
            (async () => {
              if (l && c && a && !c?.crews && c?.characters) {
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
                  pingBearer: u,
                  rockstarId: c.id
                });
                o(t => ({
                  ...t,
                  crews: e
                })), g(e => e - 1)
              }
            })()
          }, [c?.nickname, a, l, c?.characters]), (0, r.useEffect)(() => {
            (async () => {
              if (!l || !c || null != c?.hasNotification) return;
              const e = await R({
                pingBearer: u
              });
              let t = !1;
              e?.count && (t = e.count > 0), o(e => ({
                ...e,
                hasNotification: t
              }))
            })()
          }, [l, c?.hasNotification]), (0, r.useEffect)(() => {
            (async () => {
              if (!l || !c || c?.gamesPlayed || !1 === t || !1 === a) return;
              const e = await (async ({
                pingBearer: e
              }) => {
                const t = await (0, n.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: e
                });
                return t?.all ?? {}
              })({
                pingBearer: u
              });
              o(t => ({
                ...t,
                gamesPlayed: e
              })), g(e => e - 1)
            })()
          }, [c?.nickname, l]), (0, r.useEffect)(() => {
            (async () => {
              if (l && c && "gtao" === t && !c?.characters?.gtao) {
                const e = (async ({
                    pingBearer: e
                  }) => {
                    const {
                      result: {
                        linkedAccounts: t = []
                      }
                    } = await (0, n.coreScApiFetch)("account/linkedaccounts", {
                      pingBearer: e
                    });
                    return t ?? []
                  })({
                    pingBearer: u
                  }),
                  t = (async ({
                    pingBearer: e
                  }) => {
                    const t = await (0, n.coreScApiFetch)("games/gtao/charactersPlayedPlatforms", {
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
                        mugshotUrl: (a = t.mugshotUrl, s = e.platform, ["ps4", "ps5"].includes(s) ? a.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : a),
                        stats: t.stats,
                        platform: e.platform,
                        platformUsername: e.playerAccount.userName
                      };
                      var a, s
                    }));
                    return a.sort((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter)), a.map((e, t) => ({
                      ...e,
                      index: t
                    }))
                  })({
                    pingBearer: u
                  }),
                  [a, s] = await Promise.all([e, t]),
                  r = [];
                s.forEach(e => {
                  const t = e.platform;
                  r.includes(t) || "1" !== e.stats?.overview?.hasGtaPlus?.value || r.push(t)
                }), o(e => ({
                  ...e,
                  characters: {
                    ...e.characters,
                    gtao: s
                  },
                  linkedAccounts: a,
                  hasGtaPlus: r.length > 0,
                  gtaPlusPlatforms: r
                })), g(e => e - 1)
              }
            })()
          }, [t, c?.nickname, l, c, u]), (0, r.useEffect)(() => {
            c?.id && c?.nonExpiredToken && (d(!0), E(c.id))
          }, [JSON.stringify(c)]), {
            data: c,
            setData: o,
            loggedIn: l,
            loading: m
          }
        },
        O = {},
        V = (0, n.setContextItem)({
          context: (0, r.createContext)(O),
          key: "userContext"
        }),
        D = ({
          children: e,
          privateToken: t
        }) => {
          const a = $({
              privateToken: t
            }),
            n = (0, r.useMemo)(() => ({
              ...a,
              privateToken: t,
              hasProvider: !0
            }), [a]);
          return (0, s.jsx)(V.Provider, {
            value: n,
            children: e
          })
        },
        j = () => (0, r.useContext)(V)
    },
    32118(e, t, a) {
      a.d(t, {
        t: () => n
      });
      var s = a(42909),
        r = a(39991);
      const n = async ({
        service: e,
        returnUrl: t,
        pingBearer: a
      }) => {
        const [{
          iso: n
        }] = (0, s.getLocale)(), {
          authHost: c,
          clientId: o
        } = (0, r.A)(), i = await a(), u = new URL(`tpa/${e}/link`, `https://${c}.rockstargames.com`);
        return u.searchParams.append("cid", o), u.searchParams.append("lang", n), u.searchParams.append("returnUrl", t ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && u.searchParams.append("accessToken", i.bearerToken), u
      }
    },
    39991(e, t, a) {
      a.d(t, {
        A: () => o
      });
      const s = window?.env?.sc,
        r = window?.env?.marketing,
        n = ({
          apiHost: e,
          authHost: t,
          clientId: a,
          cms: n,
          graphEnv: c,
          queryManifest: o,
          scHost: i,
          hostname: u,
          cdnBase: l,
          key: d,
          marketingAuthTLD: p
        }) => {
          const h = s?.apiHost ?? e,
            m = s?.authHost ?? t,
            f = s?.cdnBase ?? l,
            g = s?.clientId ?? a,
            k = r?.marketingAuthTLD ?? p,
            y = s?.scHost ?? i,
            w = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: s?.graphEnv ?? c,
            host: y,
            hostname: u,
            cdnBase: f,
            key: d,
            clientId: g,
            cms: `https://${n}.rockstargames.com/graphql`,
            authHost: m,
            queryManifest: o,
            scBase: `https://${y}.rockstargames.com/`,
            login: `https://${m}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${k}/auth/gateway.json`,
            logout: `https://${k}/auth/sc-auth-logout`,
            pingBearer: `https://${k}/${w}`,
            authCookieName: "BearerToken"
          }
        },
        c = [n({
          key: "prod",
          clientId: "rsg",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), n({
          key: "sc-prod",
          clientId: "socialclub",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        o = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = c.find(({
              key: t
            }) => t === e) ?? null;
            if (t) return t
          }
          return c.find(({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname)) || c[0]
        }
    }
  }
]);