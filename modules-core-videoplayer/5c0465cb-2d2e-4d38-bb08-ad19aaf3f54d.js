! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5c0465cb-2d2e-4d38-bb08-ad19aaf3f54d", e._sentryDebugIdIdentifier = "sentry-dbid-5c0465cb-2d2e-4d38-bb08-ad19aaf3f54d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [7652, 1029, 5271], {
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
    97652: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => i,
        RockstarUserProvider: () => O,
        useGtmTrack: () => l,
        useRockstarUser: () => D,
        useRockstarUserState: () => E
      });
      var r = a(62229),
        s = a(95966),
        n = a(5315);
      var o = a(91029);
      const c = (0, s.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        i = e => {
          let {
            checkUser: t,
            children: a
          } = e;
          const i = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, a] = (0, r.useState)([]), [o, c] = (0, r.useState)([]), [i, u] = (0, r.useState)(null), {
                data: l,
                loggedIn: d
              } = D(), {
                hasGtaPlus: f
              } = l ?? {}, p = (0, n.bn)(), m = (e, r) => {
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
                if (l && null !== d) {
                  const e = k(l);
                  o.length && e && m(o, e), u(e)
                } else e || o.length && m(o)
              }), [l, d, o]), (0, r.useEffect)((() => {
                const e = o.filter((e => -1 === t.indexOf(e)));
                c(e)
              }), [t]);
              const k = e => {
                const t = [],
                  a = [],
                  r = [];
                return Object.keys(e?.characters ?? []).forEach((s => {
                  e.characters[s].length && (a.push(s), e.characters[s].forEach((e => {
                    "gtao" === s && (r.includes(e.platform) || r.push(e.platform)), t.includes(e.platform) || t.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: d ?? !1,
                  gta_plus_active: d ? Boolean(f) : void 0,
                  platforms_played: t.length ? t.join("|").toUpperCase() : void 0,
                  games_played: a.length ? a.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: r.length ? r.join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: p
                }
              };
              return {
                track: e => {
                  if (void 0 === d || !l || !i) {
                    const t = [...o];
                    return t.push({
                      ...e
                    }), c(t)
                  }
                  return (0, s.track)({
                    ...e,
                    ...i
                  })
                }
              }
            }(t),
            u = (0, r.useMemo)((() => i), [i, t]);
          return (0, o.jsx)(c.Provider, {
            value: u,
            children: a
          })
        },
        u = {
          track: () => null
        },
        l = () => (0, r.useContext)(c) ?? u,
        d = (0, s.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, s.makeVar)(null)
        }),
        f = e => d(e),
        p = (0, s.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, s.makeVar)(!1)
        }),
        m = e => p(e),
        k = (0, s.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, s.makeVar)(!1)
        }),
        h = e => k(e),
        v = (0, s.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, s.makeVar)((0, s.webSettingsReactive)()?.currentCharId)
        }),
        g = e => v(e),
        y = (0, s.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, s.makeVar)(null)
        }),
        b = e => y(e),
        w = (0, s.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, s.makeVar)(null)
        }),
        _ = (0, s.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        x = e => _(e),
        I = (0, s.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, s.makeVar)(!1)
        }),
        R = e => I(e),
        C = (0, s.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, s.makeVar)(null)
        }),
        S = e => C(e),
        E = () => {
          const e = (0, s.useReactiveVar)(_),
            t = (0, s.useReactiveVar)(I),
            a = (0, s.useReactiveVar)(v),
            r = (0, s.useReactiveVar)(d),
            n = (0, s.useReactiveVar)(k),
            o = (0, s.useReactiveVar)(y);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: n,
            navOpen: r,
            userData: (0, s.useReactiveVar)(C),
            selectedCharacterTuple: o,
            jumpScMenuFocus: (0, s.useReactiveVar)(p),
            setCharactersNeeded: x,
            setCrewsNeeded: R,
            setCurrentCharId: g,
            setHasNotifications: h,
            setNavOpen: f,
            setSelectedCharacterTuple: b,
            setUserData: S,
            setJumpScMenuFocus: m
          }
        };
      var M = a(43425),
        V = a.n(M);
      var N = a(29830),
        T = a(17390);
      const P = () => {
          const {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a
          } = E(), n = (0, s.useRockstarToken)(), [o, c] = (0, r.useState)(), [i, u] = (0, s.useRockstarTokenReactive)(), l = (0, s.useRockstarTokenPing)(), [d, f] = (0, r.useState)(), [p, m] = (0, r.useState)(!1), [k, h] = (0, r.useState)(), v = void 0 === d;
          return (0, r.useEffect)((() => {
            e && h("1" === o?.characters?.[e]?.[a]?.stats?.overview?.hasGtaPlus?.value)
          }), [e, a, o]), (0, r.useEffect)((() => {
            c({
              ...o,
              hasGtaPlus: k
            })
          }), [k]), (0, r.useEffect)((() => {
            if (null === n) return void l();
            const e = !!n;
            if (e || p || ((async () => {
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
                      body: `fingerprint=${await V().get().then((e=>e))}`,
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
              })(), m(!0)), !e && p && f(!1), e) {
              const t = (e => {
                let {
                  bearerToken: t
                } = e;
                const a = (0, N.s)(t),
                  {
                    host: r
                  } = (0, s.getConfigForDomain)(),
                  n = parseInt(a.nameid),
                  o = a["scAuth.Nickname"],
                  c = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(a["scAuth.MemberSince"]),
                  u = new Date,
                  l = (0, T.M)(u, i) < 12;
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
              }), f(e), w(t.id)
            }
          }), [n, p]), (0, r.useEffect)((() => {
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
                })
              }
            })()
          }), [o, t, d]), (0, r.useEffect)((() => {
            (async () => {
              if (d && o && "gtao" === e && !o?.characters?.gtao) {
                const e = await (async e => {
                  let {
                    pingBearer: t,
                    nickname: a,
                    rockstarId: r
                  } = e;
                  const n = [],
                    o = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  if (await (o?.platforms?.reduce((async (e, a) => {
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
                    }), Promise.resolve())), !n.length) return n;
                  const {
                    status: c,
                    accounts: i
                  } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${a}&maxFriends=0`, {
                    pingBearer: t
                  });
                  return c && i.length ? (i.forEach((e => {
                    const {
                      rockstarAccount: t,
                      linkedAccounts: s
                    } = e;
                    if (t?.rockstarId !== r) return;
                    const o = a;
                    let c = "",
                      i = "";
                    s?.map((e => ("xbl" === e?.onlineService ? c = e.userName : "np" === e?.onlineService && (i = e.userName), e))), n.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), n.map(((e, t) => (e.platformUsername = o, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = i || o), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = c || o), e)))
                  })), n) : n
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
                  }
                })
              }
            })()
          }), [e, o, d]), {
            data: o,
            loggedIn: d,
            loading: v
          }
        },
        U = {},
        A = (0, s.setContextItem)({
          context: (0, r.createContext)(U),
          key: "userContext"
        }),
        O = e => {
          let {
            children: t
          } = e;
          const a = P(),
            s = (0, r.useMemo)((() => ({
              ...a,
              hasProvider: !0
            })), [a]);
          return (0, o.jsx)(A.Provider, {
            value: s,
            children: t
          })
        },
        D = () => (0, r.useContext)(A)
    }
  }
]);