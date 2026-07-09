try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9e4e2e51-d222-45b8-8226-468629aeed6c", e._sentryDebugIdIdentifier = "sentry-dbid-9e4e2e51-d222-45b8-8226-468629aeed6c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [2808], {
    63673(e, t, a) {
      a.d(t, {
        A: () => y,
        K: () => p
      });
      var r = a(13331);
      const s = (0, r.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, r.makeVar)(null)
        }),
        n = e => s(e),
        c = (0, r.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, r.makeVar)(!1)
        }),
        o = e => c(e),
        i = (0, r.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, r.makeVar)((0, r.webSettingsReactive)()?.currentCharId)
        }),
        u = e => i(e),
        l = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        d = e => l(e),
        p = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        f = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        g = e => f(e),
        h = (0, r.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        m = e => h(e),
        k = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        v = e => k(e),
        y = () => {
          const e = (0, r.useReactiveVar)(f),
            t = (0, r.useReactiveVar)(h),
            a = (0, r.useReactiveVar)(i),
            p = (0, r.useReactiveVar)(s),
            y = (0, r.useReactiveVar)(l);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            navOpen: p,
            userData: (0, r.useReactiveVar)(k),
            selectedCharacterTuple: y,
            jumpScMenuFocus: (0, r.useReactiveVar)(c),
            setCharactersNeeded: g,
            setCrewsNeeded: m,
            setCurrentCharId: u,
            setNavOpen: n,
            setSelectedCharacterTuple: d,
            setUserData: v,
            setJumpScMenuFocus: o
          }
        }
    },
    70716(e, t, a) {
      a.r(t), a.d(t, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        fetchUnreadNotificationCount: () => n.WN,
        useGtmTrack: () => r.h,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => s.A
      });
      var r = a(73357),
        s = a(63673),
        n = a(65802)
    },
    73357(e, t, a) {
      a.d(t, {
        UN: () => p,
        iR: () => w,
        h: () => g,
        Wx: () => b
      });
      var r = a(39793),
        s = a(93082),
        n = a(13331),
        c = a(70716),
        o = a(85997);
      const i = e => "pcalt" === e ? "pc" : e.toString(),
        u = {
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
        d = (0, n.setContextItem)({
          context: (0, s.createContext)(void 0),
          key: "gtmContext22"
        }),
        p = ({
          checkUser: e,
          children: t
        }) => {
          const a = ((e = !0) => {
              const [t, a] = (0, s.useState)([]), [r, d] = (0, s.useState)(null), {
                data: p,
                loggedIn: f
              } = (0, c.useRockstarUser)(), g = (0, o.bn)(), h = (e, t) => {
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
                if (p && null !== f) {
                  const e = ((e, t) => {
                    const a = [],
                      r = [],
                      s = [...new Set(e.gtaPlusPlatforms.map(e => i(e)))],
                      n = [];
                    return Object.entries(e?.characters ?? []).forEach(([e, t]) => {
                      t.length && t.forEach(t => {
                        const s = i(t.platform);
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
                      platforms_played: a.length ? a.map(e => u[e] ?? e).join("|").toUpperCase() : void 0,
                      games_played: n.length ? n.join("|").toUpperCase() : void 0,
                      gtao_platforms_played: r.length ? r.map(e => u[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_platforms: s.length ? s.map(e => u[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_active: s.length > 0,
                      use_enhanced_browser_features: g,
                      section_layout: t ? "signed in" : "signed out"
                    }
                  })(p, f);
                  t.length && e && h([...t], e), d(e)
                } else e || t.length && h([...t])
              }, [p, f, t, e]), {
                track: e => (Boolean(p && r), (0, n.track)({
                  ...l(e),
                  ...r
                }))
              }
            })(e),
            p = (0, s.useMemo)(() => a, [a, e]);
          return (0, r.jsx)(d.Provider, {
            value: p,
            children: t
          })
        },
        f = {
          track: () => null
        },
        g = () => (0, s.useContext)(d) ?? f;
      var h = a(63673),
        m = a(65802);
      const k = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: t,
            crewsNeeded: a
          } = (0, h.A)(), r = (0, n.useRockstarToken)(), [c, o] = (0, s.useState)({
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
          }), [i] = (0, n.useRockstarTokenReactive)(), u = (0, n.useRockstarTokenPing)(), [l, d] = (0, s.useState)(), [p, f] = (0, s.useState)(!1), g = void 0 === l, [k, v] = (0, s.useState)(1);
          return (0, s.useEffect)(() => {
            "gtao" !== t || c?.characters?.gtao || (o(e => ({
              ...e,
              accountSynced: !1
            })), v(e => e + 1))
          }, [t, c?.characters?.gtao]), (0, s.useEffect)(() => {
            a && !c?.crews && (o(e => ({
              ...e,
              accountSynced: !1
            })), v(e => e + 1))
          }, [a, c?.crews]), (0, s.useEffect)(() => {
            0 === k && o(e => ({
              ...e,
              accountSynced: !0
            }))
          }, [k]), (0, s.useEffect)(() => {
            e && i(e)
          }, [e]), (0, s.useEffect)(() => {
            "" !== r || u()
          }, [r]), (0, s.useEffect)(() => {
            if ("" === r) return;
            const e = !!r;
            if (e || p || ((async () => {
                try {
                  await (0, m.II)({
                    token: i
                  })
                } catch (e) {}
              })(), f(!0)), !e && p && d(!1), e) {
              const e = (0, m.$n)({
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
                const e = await (0, m.Z3)({
                  pingBearer: u,
                  rockstarId: c.id
                });
                o(t => ({
                  ...t,
                  crews: e
                })), v(e => e - 1)
              }
            })()
          }, [c?.nickname, a, l, c?.characters]), (0, s.useEffect)(() => {
            (async () => {
              if (!l || !c || null != c?.hasNotification) return;
              const e = await (0, m.WN)({
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
              const e = await (0, m.ID)({
                pingBearer: u
              });
              o(t => ({
                ...t,
                gamesPlayed: e
              })), v(e => e - 1)
            })()
          }, [c?.nickname, l]), (0, s.useEffect)(() => {
            (async () => {
              if (l && c && "gtao" === t && !c?.characters?.gtao) {
                const e = (0, m.iJ)({
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
                })), v(e => e - 1)
              }
            })()
          }, [t, c?.nickname, l, c, u]), (0, s.useEffect)(() => {
            c?.id && c?.nonExpiredToken && (d(!0), (0, h.K)(c.id))
          }, [JSON.stringify(c)]), {
            data: c,
            setData: o,
            loggedIn: l,
            loading: g
          }
        },
        v = {},
        y = (0, n.setContextItem)({
          context: (0, s.createContext)(v),
          key: "userContext"
        }),
        w = ({
          children: e,
          privateToken: t
        }) => {
          const a = k({
              privateToken: t
            }),
            n = (0, s.useMemo)(() => ({
              ...a,
              privateToken: t,
              hasProvider: !0
            }), [a]);
          return (0, r.jsx)(y.Provider, {
            value: n,
            children: e
          })
        },
        b = () => (0, s.useContext)(y)
    },
    65802(e, t, a) {
      a.d(t, {
        Z3: () => s,
        ID: () => n,
        iJ: () => c,
        WN: () => o,
        $n: () => l,
        II: () => f
      });
      var r = a(13331);
      const s = async ({
        pingBearer: e,
        rockstarId: t
      }) => {
        const {
          crews: a
        } = await (0, r.coreScApiFetch)("crew/forMember", {
          pingBearer: e,
          query: {
            userId: t
          }
        });
        return a
      }, n = async ({
        pingBearer: e
      }) => {
        const t = await (0, r.coreScApiFetch)("profile/lastPlayed", {
          pingBearer: e
        });
        return t?.all ?? {}
      }, c = async ({
        pingBearer: e
      }) => {
        const {
          result: {
            linkedAccounts: t = []
          }
        } = await (0, r.coreScApiFetch)("account/linkedaccounts", {
          pingBearer: e
        });
        return t ?? []
      }, o = async ({
        pingBearer: e
      }) => await (0, r.coreScApiFetch)("notification/count", {
        pingBearer: e
      });
      var i = a(4242),
        u = a(37295);
      const l = ({
        bearerToken: e
      }) => {
        const t = (0, i.s)(e),
          {
            host: a
          } = (0, r.getConfigForDomain)(),
          s = parseInt(t.nameid),
          n = t["scAuth.Nickname"],
          c = "True" === (t?.["scAuth.IsAMinor"] ?? "True"),
          o = new Date(t["scAuth.MemberSince"]),
          l = new Date,
          d = (0, u.M)(l, o) < 12,
          p = (new Date).getTime() / 1e3;
        return {
          id: s,
          nonExpiredToken: (t?.exp ?? 0) - p > 0,
          avatar: t["scAuth.AvatarUrl"],
          bearer_token_expired: t.exp > Date.now(),
          isAMinor: c,
          isNewAccount: d,
          nickname: n,
          profile_link: `https://${a}.rockstargames.com/member/${n}?id=${s}`
        }
      };
      var d = a(77033),
        p = a.n(d);
      const f = async ({
        token: e
      }) => {
        const {
          gateway: t,
          silentCheck: a
        } = (0, r.getConfigForDomain)(), s = {
          method: "POST",
          body: `fingerprint=${await p().get().then(e=>e)}`,
          credentials: "include",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
          }
        }, n = await fetch(a, s);
        if (200 !== n.status) return void e(!1);
        const c = `${t}?code=${await n.json()}`,
          o = await fetch(c, {
            credentials: "include"
          }),
          {
            bearerToken: i
          } = await o.json();
        return e(i), i
      }
    }
  }
]);