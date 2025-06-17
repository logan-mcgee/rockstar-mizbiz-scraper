! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "acd79311-b0ed-4e70-8b26-b41d7f342254", e._sentryDebugIdIdentifier = "sentry-dbid-acd79311-b0ed-4e70-8b26-b41d7f342254")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [616, 2327, 2911, 3473, 5854, 7542], {
    15900: (e, t, a) => {
      a.d(t, {
        UN: () => u,
        iR: () => b,
        h: () => p,
        Wx: () => _
      });
      var r = a(71127),
        s = a(95966),
        n = a(80763),
        o = a(98397);
      const c = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var i = a(25854);
      const l = (0, s.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        u = e => {
          let {
            checkUser: t,
            children: a
          } = e;
          const u = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, a] = (0, r.useState)([]), [i, l] = (0, r.useState)([]), [u, d] = (0, r.useState)(null), {
                data: p,
                loggedIn: f
              } = (0, n.useRockstarUser)(), {
                hasGtaPlus: m
              } = p ?? {}, h = (0, o.bn)(), k = (e, r) => {
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
                  i.length && e && k(i, e), d(e)
                } else e || i.length && k(i)
              }), [p, f, i]), (0, r.useEffect)((() => {
                const e = i.filter((e => -1 === t.indexOf(e)));
                l(e)
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
                  use_enhanced_browser_features: h
                }
              };
              return {
                track: e => {
                  const t = "boolean" == typeof f,
                    a = Boolean(p && u);
                  if (!t || !0 === f && !a) {
                    const t = [...i];
                    return t.push({
                      ...e
                    }), l(t)
                  }
                  return (0, s.track)({
                    ...e,
                    ...u
                  })
                }
              }
            }(t),
            d = (0, r.useMemo)((() => u), [u, t]);
          return (0, i.jsx)(l.Provider, {
            value: d,
            children: a
          })
        },
        d = {
          track: () => null
        },
        p = () => (0, r.useContext)(l) ?? d;
      var f = a(84904);
      var m = a(93830),
        h = a.n(m);
      var k = a(4895),
        g = a(71256);
      const v = e => {
          let {
            privateToken: t
          } = e;
          const {
            charactersNeeded: a,
            crewsNeeded: n,
            currentCharId: o
          } = (0, f.A)(), c = (0, s.useRockstarToken)(), [i, l] = (0, r.useState)(), [u] = (0, s.useRockstarTokenReactive)(), d = (0, s.useRockstarTokenPing)(), [p, m] = (0, r.useState)(), [v, w] = (0, r.useState)(!1), y = void 0 === p, [b, _] = (0, r.useState)(1);
          return (0, r.useEffect)((() => {
            "gtao" !== a || i?.characters?.gtao || (l({
              ...i,
              accountSynced: !1
            }), _((e => e + 1)))
          }), [a, i?.characters?.gtao]), (0, r.useEffect)((() => {
            n && !i?.crews && (l({
              ...i,
              accountSynced: !1
            }), _((e => e + 1)))
          }), [n, i?.crews]), (0, r.useEffect)((() => {
            0 === b && l({
              ...i,
              accountSynced: !0
            })
          }), [b]), (0, r.useEffect)((() => {
            t && u(t)
          }), [t]), (0, r.useEffect)((() => {
            "" !== c || d()
          }), [c]), (0, r.useEffect)((() => {
            if ("" === c) return;
            const e = !!c;
            if (e || v || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: t
                    } = e;
                    const {
                      gateway: a,
                      silentCheck: r
                    } = (0, s.getConfigForDomain)(), n = {
                      method: "POST",
                      body: `fingerprint=${await h().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, o = await fetch(r, n);
                    if (200 !== o.status) return void t(!1);
                    const c = `${a}?code=${await o.json()}`,
                      i = await fetch(c, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: l
                      } = await i.json();
                    return t(l), l
                  })({
                    token: u
                  })
                } catch (e) {}
              })(), w(!0)), !e && v && m(!1), e) {
              const e = (e => {
                let {
                  bearerToken: t
                } = e;
                const a = (0, k.s)(t),
                  {
                    host: r
                  } = (0, s.getConfigForDomain)(),
                  n = parseInt(a.nameid),
                  o = a["scAuth.Nickname"],
                  c = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(a["scAuth.MemberSince"]),
                  l = new Date,
                  u = (0, g.M)(l, i) < 12,
                  d = (new Date).getTime() / 1e3;
                return {
                  id: n,
                  nonExpiredToken: (a?.exp ?? 0) - d > 0,
                  avatar: a["scAuth.AvatarUrl"],
                  bearer_token_expired: a.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: u,
                  nickname: o,
                  profile_link: `https://${r}.rockstargames.com/member/${o}?id=${n}`
                }
              })({
                bearerToken: c
              });
              l({
                ...i,
                ...e
              })
            }
          }), [c, v]), (0, r.useEffect)((() => {
            (async () => {
              if (p && i && n && !i?.crews) {
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
                  pingBearer: d,
                  rockstarId: i.id
                });
                l({
                  ...i,
                  crews: e
                }), _((e => e - 1))
              }
            })()
          }), [i?.nickname, n, p]), (0, r.useEffect)((() => {
            (async () => {
              if (!p || !i || i?.gamesPlayed) return;
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
                pingBearer: d
              });
              l({
                ...i,
                gamesPlayed: e
              }), _((e => e - 1))
            })()
          }), [i?.nickname, p]), (0, r.useEffect)((() => {
            (async () => {
              if (p && i && "gtao" === a && !i?.characters?.gtao) {
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
                  const l = i[0],
                    {
                      rockstarAccount: u,
                      linkedAccounts: d
                    } = l;
                  if (u?.rockstarId !== r) return {
                    gtaoCharacters: n,
                    linkedAccounts: []
                  };
                  if (!n.length) return {
                    gtaoCharacters: n,
                    linkedAccounts: l.linkedAccounts
                  };
                  const p = a;
                  let f = "",
                    m = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? f = e.userName : "np" === e?.onlineService && (m = e.userName), e))), n.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), n.map(((e, t) => (e.platformUsername = p, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = m || p), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = f || p), e))), {
                    gtaoCharacters: n,
                    linkedAccounts: d
                  }
                })({
                  pingBearer: d,
                  nickname: i.nickname,
                  rockstarId: i.id
                });
                l({
                  ...i,
                  characters: {
                    ...i.characters,
                    gtao: e
                  },
                  linkedAccounts: t,
                  hasGtaPlus: "1" === e?.[o]?.stats?.overview?.hasGtaPlus?.value
                }), _((e => e - 1))
              }
            })()
          }), [a, i?.nickname, p]), (0, r.useEffect)((() => {
            i?.id && i?.nonExpiredToken && (m(!0), (0, f.K)(i.id))
          }), [JSON.stringify(i)]), {
            data: i,
            loggedIn: p,
            loading: y
          }
        },
        w = {},
        y = (0, s.setContextItem)({
          context: (0, r.createContext)(w),
          key: "userContext"
        }),
        b = e => {
          let {
            children: t,
            privateToken: a
          } = e;
          const s = v({
              privateToken: a
            }),
            n = (0, r.useMemo)((() => ({
              ...s,
              privateToken: a,
              hasProvider: !0
            })), [s]);
          return (0, i.jsx)(y.Provider, {
            value: n,
            children: t
          })
        },
        _ = () => (0, r.useContext)(y)
    },
    25854: (e, t, a) => {
      e.exports = a(41454)
    },
    40148: (e, t, a) => {
      a.d(t, {
        A: () => n,
        C: () => r
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          supportNew: "support"
        },
        s = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            supportNew: "support"
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
    },
    41454: (e, t, a) => {
      var r = a(71127),
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
    },
    80763: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        useGtmTrack: () => r.h,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => s.A
      });
      var r = a(15900),
        s = a(84904)
    },
    84904: (e, t, a) => {
      a.d(t, {
        A: () => b,
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
        l = e => i(e),
        u = (0, r.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, r.makeVar)((0, r.webSettingsReactive)()?.currentCharId)
        }),
        d = e => u(e),
        p = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        f = e => p(e),
        m = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        h = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        k = e => h(e),
        g = (0, r.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        v = e => g(e),
        w = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        y = e => w(e),
        b = () => {
          const e = (0, r.useReactiveVar)(h),
            t = (0, r.useReactiveVar)(g),
            a = (0, r.useReactiveVar)(u),
            m = (0, r.useReactiveVar)(s),
            b = (0, r.useReactiveVar)(i),
            _ = (0, r.useReactiveVar)(p);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: b,
            navOpen: m,
            userData: (0, r.useReactiveVar)(w),
            selectedCharacterTuple: _,
            jumpScMenuFocus: (0, r.useReactiveVar)(o),
            setCharactersNeeded: k,
            setCrewsNeeded: v,
            setCurrentCharId: d,
            setHasNotifications: l,
            setNavOpen: n,
            setSelectedCharacterTuple: f,
            setUserData: y,
            setJumpScMenuFocus: c
          }
        }
    }
  }
]);