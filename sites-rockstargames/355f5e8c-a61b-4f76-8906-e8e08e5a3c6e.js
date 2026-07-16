try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "355f5e8c-a61b-4f76-8906-e8e08e5a3c6e", e._sentryDebugIdIdentifier = "sentry-dbid-355f5e8c-a61b-4f76-8906-e8e08e5a3c6e")
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
  [297], {
    95942(e, a, t) {
      var r = t(13331);
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
        v = e => k(e);
      t.d(a, ["A", 0, () => {
        const e = (0, r.useReactiveVar)(f),
          a = (0, r.useReactiveVar)(h),
          t = (0, r.useReactiveVar)(i),
          p = (0, r.useReactiveVar)(s),
          y = (0, r.useReactiveVar)(l);
        return {
          charactersNeeded: e,
          crewsNeeded: a,
          currentCharId: t,
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
      }, "K", 0, p])
    },
    58133(e, a, t) {
      t.r(a), t.d(a, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        fetchUnreadNotificationCount: () => n.WN,
        useGtmTrack: () => r.h,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => s.A
      });
      var r = t(57141),
        s = t(95942),
        n = t(83024)
    },
    57141(e, a, t) {
      t.d(a, {
        UN: () => p,
        iR: () => w,
        h: () => g,
        Wx: () => b
      });
      var r = t(39793),
        s = t(93082),
        n = t(13331),
        c = t(58133),
        o = t(56596);
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
        l = e => e ? Object.fromEntries(Object.entries(e).map(([e, a]) => [e, "string" == typeof a ? a.toLowerCase() : a])) : e,
        d = (0, n.setContextItem)({
          context: (0, s.createContext)(void 0),
          key: "gtmContext22"
        }),
        p = ({
          checkUser: e,
          children: a
        }) => {
          const t = ((e = !0) => {
              const [a, t] = (0, s.useState)([]), [r, d] = (0, s.useState)(null), {
                data: p,
                loggedIn: f
              } = (0, c.useRockstarUser)(), g = (0, o.bn)(), h = (e, a) => {
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
                if (p && null !== f) {
                  const e = ((e, a) => {
                    const t = [],
                      r = [],
                      s = [...new Set(e.gtaPlusPlatforms.map(e => i(e)))],
                      n = [];
                    return Object.entries(e?.characters ?? []).forEach(([e, a]) => {
                      a.length && a.forEach(a => {
                        const s = i(a.platform);
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
                      platforms_played: t.length ? t.map(e => u[e] ?? e).join("|").toUpperCase() : void 0,
                      games_played: n.length ? n.join("|").toUpperCase() : void 0,
                      gtao_platforms_played: r.length ? r.map(e => u[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_platforms: s.length ? s.map(e => u[e] ?? e).join("|").toUpperCase() : void 0,
                      gta_plus_active: s.length > 0,
                      use_enhanced_browser_features: g,
                      section_layout: a ? "signed in" : "signed out"
                    }
                  })(p, f);
                  a.length && e && h([...a], e), d(e)
                } else e || a.length && h([...a])
              }, [p, f, a, e]), {
                track: e => (Boolean(p && r), (0, n.track)({
                  ...l(e),
                  ...r
                }))
              }
            })(e),
            p = (0, s.useMemo)(() => t, [t, e]);
          return (0, r.jsx)(d.Provider, {
            value: p,
            children: a
          })
        },
        f = {
          track: () => null
        },
        g = () => (0, s.useContext)(d) ?? f;
      var h = t(95942),
        m = t(83024);
      const k = ({
          privateToken: e
        }) => {
          const {
            charactersNeeded: a,
            crewsNeeded: t
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
            "gtao" !== a || c?.characters?.gtao || (o(e => ({
              ...e,
              accountSynced: !1
            })), v(e => e + 1))
          }, [a, c?.characters?.gtao]), (0, s.useEffect)(() => {
            t && !c?.crews && (o(e => ({
              ...e,
              accountSynced: !1
            })), v(e => e + 1))
          }, [t, c?.crews]), (0, s.useEffect)(() => {
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
              o(a => ({
                ...a,
                ...e
              }))
            }
          }, [r, p]), (0, s.useEffect)(() => {
            (async () => {
              if (l && c && t && !c?.crews && c?.characters) {
                const e = await (0, m.Z3)({
                  pingBearer: u,
                  rockstarId: c.id
                });
                o(a => ({
                  ...a,
                  crews: e
                })), v(e => e - 1)
              }
            })()
          }, [c?.nickname, t, l, c?.characters]), (0, s.useEffect)(() => {
            (async () => {
              if (!l || !c || null != c?.hasNotification) return;
              const e = await (0, m.WN)({
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
              const e = await (0, m.ID)({
                pingBearer: u
              });
              o(a => ({
                ...a,
                gamesPlayed: e
              })), v(e => e - 1)
            })()
          }, [c?.nickname, l]), (0, s.useEffect)(() => {
            (async () => {
              if (l && c && "gtao" === a && !c?.characters?.gtao) {
                const e = (0, m.iJ)({
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
                })), v(e => e - 1)
              }
            })()
          }, [a, c?.nickname, l, c, u]), (0, s.useEffect)(() => {
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
          privateToken: a
        }) => {
          const t = k({
              privateToken: a
            }),
            n = (0, s.useMemo)(() => ({
              ...t,
              privateToken: a,
              hasProvider: !0
            }), [t]);
          return (0, r.jsx)(y.Provider, {
            value: n,
            children: e
          })
        },
        b = () => (0, s.useContext)(y)
    },
    83024(e, a, t) {
      t.d(a, {
        Z3: () => s,
        ID: () => n,
        iJ: () => c,
        WN: () => o,
        $n: () => l,
        II: () => f
      });
      var r = t(13331);
      const s = async ({
        pingBearer: e,
        rockstarId: a
      }) => {
        const {
          crews: t
        } = await (0, r.coreScApiFetch)("crew/forMember", {
          pingBearer: e,
          query: {
            userId: a
          }
        });
        return t
      }, n = async ({
        pingBearer: e
      }) => {
        const a = await (0, r.coreScApiFetch)("profile/lastPlayed", {
          pingBearer: e
        });
        return a?.all ?? {}
      }, c = async ({
        pingBearer: e
      }) => {
        const {
          result: {
            linkedAccounts: a = []
          }
        } = await (0, r.coreScApiFetch)("account/linkedaccounts", {
          pingBearer: e
        });
        return a ?? []
      }, o = async ({
        pingBearer: e
      }) => await (0, r.coreScApiFetch)("notification/count", {
        pingBearer: e
      });
      var i = t(4242),
        u = t(30174);
      const l = ({
        bearerToken: e
      }) => {
        const a = (0, i.s)(e),
          {
            host: t
          } = (0, r.getConfigForDomain)(),
          s = parseInt(a.nameid),
          n = a["scAuth.Nickname"],
          c = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
          o = new Date(a["scAuth.MemberSince"]),
          l = new Date,
          d = (0, u.M)(l, o) < 12,
          p = (new Date).getTime() / 1e3;
        return {
          id: s,
          nonExpiredToken: (a?.exp ?? 0) - p > 0,
          avatar: a["scAuth.AvatarUrl"],
          bearer_token_expired: a.exp > Date.now(),
          isAMinor: c,
          isNewAccount: d,
          nickname: n,
          profile_link: `https://${t}.rockstargames.com/member/${n}?id=${s}`
        }
      };
      var d = t(77033),
        p = t.n(d);
      const f = async ({
        token: e
      }) => {
        const {
          gateway: a,
          silentCheck: t
        } = (0, r.getConfigForDomain)(), s = {
          method: "POST",
          body: `fingerprint=${await p().get().then(e=>e)}`,
          credentials: "include",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
          }
        }, n = await fetch(t, s);
        if (200 !== n.status) return void e(!1);
        const c = `${a}?code=${await n.json()}`,
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