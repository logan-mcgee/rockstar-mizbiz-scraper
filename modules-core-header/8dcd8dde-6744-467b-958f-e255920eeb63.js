! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8dcd8dde-6744-467b-958f-e255920eeb63", e._sentryDebugIdIdentifier = "sentry-dbid-8dcd8dde-6744-467b-958f-e255920eeb63")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [85, 1029, 3410, 5791, 8172, 3692, 5523], {
    65039: (e, t, a) => {
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

      function u(e, t, a) {
        var r, n = {},
          u = null,
          l = null;
        for (r in void 0 !== a && (u = "" + a), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) o.call(t, r) && !i.hasOwnProperty(r) && (n[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === n[r] && (n[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: u,
          ref: l,
          props: n,
          _owner: c.current
        }
      }
      t.Fragment = n, t.jsx = u, t.jsxs = u
    },
    91029: (e, t, a) => {
      e.exports = a(65039)
    },
    18372: (e, t, a) => {
      a.d(t, {
        A: () => y,
        K: () => m
      });
      var r = a(95966);
      const s = (0, r.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, r.makeVar)(null)
        }),
        n = e => s(e),
        o = (0, r.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, r.makeVar)(!1)
        }),
        c = e => o(e),
        i = (0, r.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, r.makeVar)(!1)
        }),
        u = e => i(e),
        l = (0, r.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, r.makeVar)((0, r.webSettingsReactive)()?.currentCharId)
        }),
        d = e => l(e),
        p = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        f = e => p(e),
        m = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        k = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        h = e => k(e),
        g = (0, r.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        v = e => g(e),
        w = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        b = e => w(e),
        y = () => {
          const e = (0, r.useReactiveVar)(k),
            t = (0, r.useReactiveVar)(g),
            a = (0, r.useReactiveVar)(l),
            m = (0, r.useReactiveVar)(s),
            y = (0, r.useReactiveVar)(i),
            _ = (0, r.useReactiveVar)(p);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: y,
            navOpen: m,
            userData: (0, r.useReactiveVar)(w),
            selectedCharacterTuple: _,
            jumpScMenuFocus: (0, r.useReactiveVar)(o),
            setCharactersNeeded: h,
            setCrewsNeeded: v,
            setCurrentCharId: d,
            setHasNotifications: u,
            setNavOpen: n,
            setSelectedCharacterTuple: f,
            setUserData: b,
            setJumpScMenuFocus: c
          }
        }
    },
    7607: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        useGtmTrack: () => r.h,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => s.A
      });
      var r = a(57269),
        s = a(18372)
    },
    57269: (e, t, a) => {
      a.d(t, {
        UN: () => l,
        iR: () => y,
        h: () => p,
        Wx: () => _
      });
      var r = a(62229),
        s = a(95966),
        n = a(7607),
        o = a(2894);
      const c = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var i = a(91029);
      const u = (0, s.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        l = e => {
          let {
            checkUser: t,
            children: a
          } = e;
          const l = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, a] = (0, r.useState)([]), [i, u] = (0, r.useState)([]), [l, d] = (0, r.useState)(null), {
                data: p,
                loggedIn: f
              } = (0, n.useRockstarUser)(), {
                hasGtaPlus: m
              } = p ?? {}, k = (0, o.bn)(), h = (e, r) => {
                const n = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = r ?? {};
                    (0, s.track)({
                      ...e,
                      ...t
                    }), n.push(e)
                  }
                })), a([...t, ...n])
              };
              (0, r.useEffect)((() => {
                if (p && null !== f) {
                  const e = g(p);
                  i.length && e && h(i, e), d(e)
                } else e || i.length && h(i)
              }), [p, f, i]), (0, r.useEffect)((() => {
                const e = i.filter((e => -1 === t.indexOf(e)));
                u(e)
              }), [t]);
              const g = e => {
                const t = [],
                  a = [],
                  r = [],
                  s = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [n, o] = e;
                  o.length && o.forEach((e => {
                    const o = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === n) {
                      a.includes(o) || a.push(o), r.includes(o) || "1" !== e.stats?.overview?.hasGtaPlus?.value || r.push(o);
                      const t = `${n}_${e.platform}`;
                      s.includes(t) || s.push(t)
                    }
                    t.includes(o) || t.push(o)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [a, r] = e;
                  s.push(`${a}_${r}`), t.includes(r) || t.push(r)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: f ?? !1,
                  gta_plus_active: !!f && Boolean(m),
                  platforms_played: t.length ? t.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: k
                }
              };
              return {
                track: e => {
                  if (void 0 === f || !p || !l) {
                    const t = [...i];
                    return t.push({
                      ...e
                    }), u(t)
                  }
                  return (0, s.track)({
                    ...e,
                    ...l
                  })
                }
              }
            }(t),
            d = (0, r.useMemo)((() => l), [l, t]);
          return (0, i.jsx)(u.Provider, {
            value: d,
            children: a
          })
        },
        d = {
          track: () => null
        },
        p = () => (0, r.useContext)(u) ?? d;
      var f = a(18372);
      var m = a(43425),
        k = a.n(m);
      var h = a(29830),
        g = a(48004);
      const v = () => {
          const {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a
          } = (0, f.A)(), n = (0, s.useRockstarToken)(), [o, c] = (0, r.useState)(), [i, u] = (0, s.useRockstarTokenReactive)(), l = (0, s.useRockstarTokenPing)(), [d, p] = (0, r.useState)(), [m, v] = (0, r.useState)(!1), [w, b] = (0, r.useState)(), y = void 0 === d, [_, x] = (0, r.useState)(1);
          return (0, r.useEffect)((() => {
            e && x((e => e + 1))
          }), [e]), (0, r.useEffect)((() => {
            t && x((e => e + 1))
          }), [t]), (0, r.useEffect)((() => {
            0 === _ && c({
              ...o,
              accountSynced: !0
            })
          }), [_]), (0, r.useEffect)((() => {
            e && b("1" === o?.characters?.[e]?.[a]?.stats?.overview?.hasGtaPlus?.value)
          }), [e, a, o]), (0, r.useEffect)((() => {
            c({
              ...o,
              hasGtaPlus: w
            })
          }), [w]), (0, r.useEffect)((() => {
            if (null === n) return void l();
            const e = !!n;
            if (e || m || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: t,
                      tokenPingExpires: a
                    } = e;
                    const {
                      gateway: r,
                      silentCheck: n
                    } = (0, s.getConfigForDomain)(), o = {
                      method: "POST",
                      body: `fingerprint=${await k().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, c = await fetch(n, o);
                    if (200 !== c.status) return void t(!1);
                    const i = `${r}?code=${await c.json()}`,
                      u = await fetch(i, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: l,
                        tokenExpiresTime: d
                      } = await u.json();
                    return t(l), a(d), l
                  })({
                    token: i,
                    tokenPingExpires: u
                  })
                } catch (e) {}
              })(), v(!0)), !e && m && p(!1), e) {
              const t = (e => {
                let {
                  bearerToken: t
                } = e;
                const a = (0, h.s)(t),
                  {
                    host: r
                  } = (0, s.getConfigForDomain)(),
                  n = parseInt(a.nameid),
                  o = a["scAuth.Nickname"],
                  c = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(a["scAuth.MemberSince"]),
                  u = new Date,
                  l = (0, g.M)(u, i) < 12;
                return {
                  id: n,
                  avatar: a["scAuth.AvatarUrl"],
                  bearer_token_expired: a.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: l,
                  nickname: o,
                  profile_link: `https://${r}.rockstargames.com/member/${o}?id=${n}`
                }
              })({
                bearerToken: n
              });
              c({
                ...o,
                ...t
              }), p(e), (0, f.K)(t.id)
            }
          }), [n, m]), (0, r.useEffect)((() => {
            (async () => {
              if (d && o && t && !o?.crews) {
                const e = await (async e => {
                  let {
                    pingBearer: t,
                    rockstarId: a
                  } = e;
                  const {
                    crews: r
                  } = await (0, s.coreScApiFetch)("crew/forMember", {
                    pingBearer: t,
                    query: {
                      userId: a
                    }
                  });
                  return r
                })({
                  pingBearer: l,
                  rockstarId: o.id
                });
                c({
                  ...o,
                  crews: e
                }), x((e => e - 1))
              }
            })()
          }), [o?.nickname, t, d]), (0, r.useEffect)((() => {
            (async () => {
              if (d && o && !o?.gamesPlayed) {
                const e = await (async e => {
                  let {
                    pingBearer: t
                  } = e;
                  const {
                    all: a
                  } = await (0, s.coreScApiFetch)("profile/lastPlayed", {
                    pingBearer: t
                  });
                  return a
                })({
                  pingBearer: l
                });
                c({
                  ...o,
                  gamesPlayed: e
                }), x((e => e - 1))
              }
            })()
          }), [o?.nickname, d]), (0, r.useEffect)((() => {
            (async () => {
              if (d && o && "gtao" === e && !o?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: t
                } = await (async e => {
                  let {
                    pingBearer: t,
                    nickname: a,
                    rockstarId: r
                  } = e;
                  const n = [],
                    o = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  await (o?.platforms?.reduce((async (e, a) => {
                    if (await e, ["ps3", "xbox", "xbox360"].includes(a)) return;
                    const r = await (0, s.coreScApiFetch)(`games/gtao/characters?platform=${a}`, {
                      pingBearer: t
                    });
                    r?.status && r?.result?.map((e => {
                      const {
                        stats: t
                      } = e, {
                        overview: r
                      } = t, {
                        rank: s
                      } = r;
                      if ("0" === s.value) return;
                      const o = ["ps4", "ps5"].includes(a) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return n.push({
                        ...e,
                        mugshotUrl: o,
                        platform: a
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: c,
                    accounts: i
                  } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${a}&maxFriends=0`, {
                    pingBearer: t
                  });
                  if (!c || !i.length) return {
                    gtaoCharacters: n,
                    linkedAccounts: []
                  };
                  const u = i[0],
                    {
                      rockstarAccount: l,
                      linkedAccounts: d
                    } = u;
                  if (l?.rockstarId !== r) return {
                    gtaoCharacters: n,
                    linkedAccounts: []
                  };
                  if (!n.length) return {
                    gtaoCharacters: n,
                    linkedAccounts: u.linkedAccounts
                  };
                  const p = a;
                  let f = "",
                    m = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? f = e.userName : "np" === e?.onlineService && (m = e.userName), e))), n.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), n.map(((e, t) => (e.platformUsername = p, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = m || p), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = f || p), e))), {
                    gtaoCharacters: n,
                    linkedAccounts: d
                  }
                })({
                  pingBearer: l,
                  nickname: o.nickname,
                  rockstarId: o.id
                });
                c({
                  ...o,
                  characters: {
                    ...o.characters,
                    gtao: e
                  },
                  linkedAccounts: t
                }), x((e => e - 1))
              }
            })()
          }), [e, o?.nickname, d]), {
            data: o,
            loggedIn: d,
            loading: y
          }
        },
        w = {},
        b = (0, s.setContextItem)({
          context: (0, r.createContext)(w),
          key: "userContext"
        }),
        y = e => {
          let {
            children: t
          } = e;
          const a = v(),
            s = (0, r.useMemo)((() => ({
              ...a,
              hasProvider: !0
            })), [a]);
          return (0, i.jsx)(b.Provider, {
            value: s,
            children: t
          })
        },
        _ = () => (0, r.useContext)(b)
    },
    6400: (e, t, a) => {
      a.d(t, {
        A: () => n,
        C: () => r
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        s = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        n = () => {
          let e;
          const {
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = s.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, s] = t;
            return s === a && (e = {
              site: r,
              subDomain: s
            }, !0)
          })) >= 0)), n = s[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    }
  }
]);