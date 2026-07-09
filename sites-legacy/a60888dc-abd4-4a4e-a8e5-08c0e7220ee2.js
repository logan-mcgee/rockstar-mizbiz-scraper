try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a60888dc-abd4-4a4e-a8e5-08c0e7220ee2", e._sentryDebugIdIdentifier = "sentry-dbid-a60888dc-abd4-4a4e-a8e5-08c0e7220ee2")
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
  [8, 7627, 9793], {
    94931(e, t, a) {
      var r = a(93082),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        c = Object.prototype.hasOwnProperty,
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, a) {
        var r, n = {},
          u = null,
          l = null;
        for (r in void 0 !== a && (u = "" + a), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) c.call(t, r) && !i.hasOwnProperty(r) && (n[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === n[r] && (n[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: u,
          ref: l,
          props: n,
          _owner: o.current
        }
      }
      t.Fragment = n, t.jsx = u, t.jsxs = u
    },
    39793(e, t, a) {
      e.exports = a(94931)
    },
    90799(e, t, a) {
      a.r(t), a.d(t, {
        GtmProvider: () => d,
        RockstarUserProvider: () => j,
        fetchUnreadNotificationCount: () => x,
        useGtmTrack: () => h,
        useRockstarUser: () => D,
        useRockstarUserState: () => R
      });
      var r = a(39793),
        s = a(93082),
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
              } = D(), h = (0, c.bn)(), f = (e, t) => {
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
                if (d && null !== p) {
                  const e = ((e, t) => {
                    const a = [],
                      r = [],
                      s = [...new Set(e.gtaPlusPlatforms.map(e => o(e)))],
                      n = [];
                    return Object.entries(e?.characters ?? []).forEach(([e, t]) => {
                      t.length && t.forEach(t => {
                        const s = o(t.platform);
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
                      use_enhanced_browser_features: h,
                      section_layout: t ? "signed in" : "signed out"
                    }
                  })(d, p);
                  t.length && e && f([...t], e), l(e)
                } else e || t.length && f([...t])
              }, [d, p, t, e]), {
                track: e => (Boolean(d && r), (0, n.track)({
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
        h = () => (0, s.useContext)(l) ?? p,
        f = (0, n.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, n.makeVar)(null)
        }),
        m = e => f(e),
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
        _ = (0, n.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, n.makeVar)(null)
        }),
        E = (0, n.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, n.makeVar)(!1)
        }),
        S = e => E(e),
        T = (0, n.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, n.makeVar)(!1)
        }),
        P = e => T(e),
        C = (0, n.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, n.makeVar)(null)
        }),
        I = e => C(e),
        R = () => {
          const e = (0, n.useReactiveVar)(E),
            t = (0, n.useReactiveVar)(T),
            a = (0, n.useReactiveVar)(y),
            r = (0, n.useReactiveVar)(f),
            s = (0, n.useReactiveVar)(v);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            navOpen: r,
            userData: (0, n.useReactiveVar)(C),
            selectedCharacterTuple: s,
            jumpScMenuFocus: (0, n.useReactiveVar)(g),
            setCharactersNeeded: S,
            setCrewsNeeded: P,
            setCurrentCharId: w,
            setNavOpen: m,
            setSelectedCharacterTuple: b,
            setUserData: I,
            setJumpScMenuFocus: k
          }
        },
        x = async ({
          pingBearer: e
        }) => await (0, n.coreScApiFetch)("notification/count", {
          pingBearer: e
        });
      var M = a(4242),
        N = a(37295),
        B = a(77033),
        O = a.n(B);
      const A = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: t,
            crewsNeeded: a
          } = R(), r = (0, n.useRockstarToken)(), [c, o] = (0, s.useState)({
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
          }), [i] = (0, n.useRockstarTokenReactive)(), u = (0, n.useRockstarTokenPing)(), [l, d] = (0, s.useState)(), [p, h] = (0, s.useState)(!1), f = void 0 === l, [m, g] = (0, s.useState)(1);
          return (0, s.useEffect)(() => {
            "gtao" !== t || c?.characters?.gtao || (o(e => ({
              ...e,
              accountSynced: !1
            })), g(e => e + 1))
          }, [t, c?.characters?.gtao]), (0, s.useEffect)(() => {
            a && !c?.crews && (o(e => ({
              ...e,
              accountSynced: !1
            })), g(e => e + 1))
          }, [a, c?.crews]), (0, s.useEffect)(() => {
            0 === m && o(e => ({
              ...e,
              accountSynced: !0
            }))
          }, [m]), (0, s.useEffect)(() => {
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
                    } = (0, n.getConfigForDomain)(), r = {
                      method: "POST",
                      body: `fingerprint=${await O().get().then(e=>e)}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, s = await fetch(a, r);
                    if (200 !== s.status) return void e(!1);
                    const c = `${t}?code=${await s.json()}`,
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
                const t = (0, M.s)(e),
                  {
                    host: a
                  } = (0, n.getConfigForDomain)(),
                  r = parseInt(t.nameid),
                  s = t["scAuth.Nickname"],
                  c = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
                  o = new Date(t["scAuth.MemberSince"]),
                  i = new Date,
                  u = (0, N.M)(i, o) < 12,
                  l = (new Date).getTime() / 1e3;
                return {
                  id: r,
                  nonExpiredToken: (t?.exp ?? 0) - l > 0,
                  avatar: t["scAuth.AvatarUrl"],
                  bearer_token_expired: t.exp > Date.now(),
                  isAMinor: c,
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
          }, [c?.nickname, a, l, c?.characters]), (0, s.useEffect)(() => {
            (async () => {
              if (!l || !c || null != c?.hasNotification) return;
              const e = await x({
                pingBearer: u
              });
              let t = !1;
              e?.count && (t = e.count > 0), o(e => ({
                ...e,
                hasNotification: t
              }))
            })()
          }, [l, c?.hasNotification]), (0, s.useEffect)(() => {
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
          }, [c?.nickname, l]), (0, s.useEffect)(() => {
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
                })), g(e => e - 1)
              }
            })()
          }, [t, c?.nickname, l, c, u]), (0, s.useEffect)(() => {
            c?.id && c?.nonExpiredToken && (d(!0), _(c.id))
          }, [JSON.stringify(c)]), {
            data: c,
            setData: o,
            loggedIn: l,
            loading: f
          }
        },
        $ = {},
        V = (0, n.setContextItem)({
          context: (0, s.createContext)($),
          key: "userContext"
        }),
        j = ({
          children: e,
          privateToken: t
        }) => {
          const a = A({
              privateToken: t
            }),
            n = (0, s.useMemo)(() => ({
              ...a,
              privateToken: t,
              hasProvider: !0
            }), [a]);
          return (0, r.jsx)(V.Provider, {
            value: n,
            children: e
          })
        },
        D = () => (0, s.useContext)(V)
    },
    32118(e, t, a) {
      a.d(t, {
        t: () => n
      });
      var r = a(42909),
        s = a(39991);
      const n = async ({
        service: e,
        returnUrl: t,
        pingBearer: a
      }) => {
        const [{
          iso: n
        }] = (0, r.getLocale)(), {
          authHost: c,
          clientId: o
        } = (0, s.A)(), i = await a(), u = new URL(`tpa/${e}/link`, `https://${c}.rockstargames.com`);
        return u.searchParams.append("cid", o), u.searchParams.append("lang", n), u.searchParams.append("returnUrl", t ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && u.searchParams.append("accessToken", i.bearerToken), u
      }
    },
    39991(e, t, a) {
      a.d(t, {
        A: () => o
      });
      const r = window?.env?.sc,
        s = window?.env?.marketing,
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
          const h = r?.apiHost ?? e,
            f = r?.authHost ?? t,
            m = r?.cdnBase ?? l,
            g = r?.clientId ?? a,
            k = s?.marketingAuthTLD ?? p,
            y = r?.scHost ?? i,
            w = s?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? c,
            host: y,
            hostname: u,
            cdnBase: m,
            key: d,
            clientId: g,
            cms: `https://${n}.rockstargames.com/graphql`,
            authHost: f,
            queryManifest: o,
            scBase: `https://${y}.rockstargames.com/`,
            login: `https://${f}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${g}`,
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