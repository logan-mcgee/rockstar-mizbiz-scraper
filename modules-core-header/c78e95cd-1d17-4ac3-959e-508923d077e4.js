try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c78e95cd-1d17-4ac3-959e-508923d077e4", e._sentryDebugIdIdentifier = "sentry-dbid-c78e95cd-1d17-4ac3-959e-508923d077e4")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [954, 5716, 5959, 6681, 7798, 8305, 8573], {
    21861: (e, t, r) => {
      r.d(t, {
        A: () => w,
        K: () => m
      });
      var a = r(95966);
      const n = (0, a.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, a.makeVar)(null)
        }),
        s = e => n(e),
        o = (0, a.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, a.makeVar)(!1)
        }),
        c = e => o(e),
        i = (0, a.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, a.makeVar)(!1)
        }),
        u = e => i(e),
        l = (0, a.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, a.makeVar)((0, a.webSettingsReactive)()?.currentCharId)
        }),
        d = e => l(e),
        f = (0, a.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, a.makeVar)(null)
        }),
        p = e => f(e),
        m = (0, a.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, a.makeVar)(null)
        }),
        h = (0, a.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, a.makeVar)(!1)
        }),
        g = e => h(e),
        k = (0, a.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, a.makeVar)(!1)
        }),
        y = e => k(e),
        b = (0, a.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, a.makeVar)(null)
        }),
        v = e => b(e),
        w = () => {
          const e = (0, a.useReactiveVar)(h),
            t = (0, a.useReactiveVar)(k),
            r = (0, a.useReactiveVar)(l),
            m = (0, a.useReactiveVar)(n),
            w = (0, a.useReactiveVar)(i),
            _ = (0, a.useReactiveVar)(f);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: r,
            hasNotifications: w,
            navOpen: m,
            userData: (0, a.useReactiveVar)(b),
            selectedCharacterTuple: _,
            jumpScMenuFocus: (0, a.useReactiveVar)(o),
            setCharactersNeeded: g,
            setCrewsNeeded: y,
            setCurrentCharId: d,
            setHasNotifications: u,
            setNavOpen: s,
            setSelectedCharacterTuple: p,
            setUserData: v,
            setJumpScMenuFocus: c
          }
        }
    },
    32779: (e, t, r) => {
      r.d(t, {
        A: () => s,
        C: () => a
      });
      const a = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          supportNew: "support"
        },
        n = [{
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
        s = () => {
          let e;
          const {
            location: t
          } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), a = n.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [a, n] = t;
            return n === r && (e = {
              site: a,
              subDomain: n
            }, !0)
          })) >= 0)), s = n[a >= 0 ? a : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    },
    70344: (e, t, r) => {
      r.r(t), r.d(t, {
        GtmProvider: () => a.UN,
        RockstarUserProvider: () => a.iR,
        useGtmTrack: () => a.h,
        useRockstarUser: () => a.Wx,
        useRockstarUserState: () => n.A
      });
      var a = r(83098),
        n = r(21861)
    },
    70954: (e, t, r) => {
      e.exports = r(92834)
    },
    83098: (e, t, r) => {
      r.d(t, {
        UN: () => l,
        iR: () => w,
        h: () => f,
        Wx: () => _
      });
      var a = r(71127),
        n = r(95966),
        s = r(70344),
        o = r(48539);
      const c = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var i = r(70954);
      const u = (0, n.setContextItem)({
          context: (0, a.createContext)(void 0),
          key: "gtmContext22"
        }),
        l = e => {
          let {
            checkUser: t,
            children: r
          } = e;
          const l = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, r] = (0, a.useState)([]), [i, u] = (0, a.useState)([]), [l, d] = (0, a.useState)(null), {
                data: f,
                loggedIn: p
              } = (0, s.useRockstarUser)(), {
                hasGtaPlus: m
              } = f ?? {}, h = (0, o.bn)(), g = (e, a) => {
                const s = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = a ?? {};
                    (0, n.track)({
                      ...e,
                      ...t
                    }), s.push(e)
                  }
                })), r([...t, ...s])
              };
              (0, a.useEffect)((() => {
                if (f && null !== p) {
                  const e = k(f);
                  i.length && e && g(i, e), d(e)
                } else e || i.length && g(i)
              }), [f, p, i]), (0, a.useEffect)((() => {
                const e = i.filter((e => -1 === t.indexOf(e)));
                u(e)
              }), [t]);
              const k = e => {
                const t = [],
                  r = [],
                  a = [],
                  n = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [s, o] = e;
                  o.length && o.forEach((e => {
                    const o = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === s) {
                      r.includes(o) || r.push(o), a.includes(o) || "1" !== e.stats?.overview?.hasGtaPlus?.value || a.push(o);
                      const t = `${s}_${e.platform}`;
                      n.includes(t) || n.push(t)
                    }
                    t.includes(o) || t.push(o)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [r, a] = e;
                  n.push(`${r}_${a}`), t.includes(a) || t.push(a)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: p ?? !1,
                  gta_plus_active: !!p && Boolean(m),
                  platforms_played: t.length ? t.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: n.length ? n.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: r.length ? r.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: a.length ? a.map((e => c[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: h
                }
              };
              return {
                track: e => {
                  const t = "boolean" == typeof p,
                    r = Boolean(f && l);
                  if (!t || !0 === p && !r) {
                    const t = [...i];
                    return t.push({
                      ...e
                    }), u(t)
                  }
                  return (0, n.track)({
                    ...e,
                    ...l
                  })
                }
              }
            }(t),
            d = (0, a.useMemo)((() => l), [l, t]);
          return (0, i.jsx)(u.Provider, {
            value: d,
            children: r
          })
        },
        d = {
          track: () => null
        },
        f = () => (0, a.useContext)(u) ?? d;
      var p = r(21861);
      var m = r(17330),
        h = r.n(m);
      var g = r(39445),
        k = r(53643);
      const y = e => {
          let {
            privateToken: t
          } = e;
          const {
            charactersNeeded: r,
            crewsNeeded: s,
            currentCharId: o
          } = (0, p.A)(), c = (0, n.useRockstarToken)(), [i, u] = (0, a.useState)(), [l] = (0, n.useRockstarTokenReactive)(), d = (0, n.useRockstarTokenPing)(), [f, m] = (0, a.useState)(), [y, b] = (0, a.useState)(!1), v = void 0 === f, [w, _] = (0, a.useState)(1);
          return (0, a.useEffect)((() => {
            "gtao" !== r || i?.characters?.gtao || (u({
              ...i,
              accountSynced: !1
            }), _((e => e + 1)))
          }), [r, i?.characters?.gtao]), (0, a.useEffect)((() => {
            s && !i?.crews && (u({
              ...i,
              accountSynced: !1
            }), _((e => e + 1)))
          }), [s, i?.crews]), (0, a.useEffect)((() => {
            0 === w && u({
              ...i,
              accountSynced: !0
            })
          }), [w]), (0, a.useEffect)((() => {
            t && l(t)
          }), [t]), (0, a.useEffect)((() => {
            "" !== c || d()
          }), [c]), (0, a.useEffect)((() => {
            if ("" === c) return;
            const e = !!c;
            if (e || y || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: t
                    } = e;
                    const {
                      gateway: r,
                      silentCheck: a
                    } = (0, n.getConfigForDomain)(), s = {
                      method: "POST",
                      body: `fingerprint=${await h().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, o = await fetch(a, s);
                    if (200 !== o.status) return void t(!1);
                    const c = `${r}?code=${await o.json()}`,
                      i = await fetch(c, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: u
                      } = await i.json();
                    return t(u), u
                  })({
                    token: l
                  })
                } catch (e) {}
              })(), b(!0)), !e && y && m(!1), e) {
              const e = (e => {
                let {
                  bearerToken: t
                } = e;
                const r = (0, g.s)(t),
                  {
                    host: a
                  } = (0, n.getConfigForDomain)(),
                  s = parseInt(r.nameid),
                  o = r["scAuth.Nickname"],
                  c = "True" === (r?.["scAuth.IsAMinor"] ?? "True"),
                  i = new Date(r["scAuth.MemberSince"]),
                  u = new Date,
                  l = (0, k.M)(u, i) < 12,
                  d = (new Date).getTime() / 1e3;
                return {
                  id: s,
                  nonExpiredToken: (r?.exp ?? 0) - d > 0,
                  avatar: r["scAuth.AvatarUrl"],
                  bearer_token_expired: r.exp > Date.now(),
                  isAMinor: c,
                  isNewAccount: l,
                  nickname: o,
                  profile_link: `https://${a}.rockstargames.com/member/${o}?id=${s}`
                }
              })({
                bearerToken: c
              });
              u({
                ...i,
                ...e
              })
            }
          }), [c, y]), (0, a.useEffect)((() => {
            (async () => {
              if (f && i && s && !i?.crews && i?.characters) {
                const e = await (async e => {
                  let {
                    pingBearer: t,
                    rockstarId: r
                  } = e;
                  const {
                    crews: a
                  } = await (0, n.coreScApiFetch)("crew/forMember", {
                    pingBearer: t,
                    query: {
                      userId: r
                    }
                  });
                  return a
                })({
                  pingBearer: d,
                  rockstarId: i.id
                });
                u({
                  ...i,
                  crews: e
                }), _((e => e - 1))
              }
            })()
          }), [i?.nickname, s, f, i?.characters]), (0, a.useEffect)((() => {
            (async () => {
              if (!f || !i || i?.gamesPlayed) return;
              const e = await (async e => {
                let {
                  pingBearer: t
                } = e;
                const {
                  all: r
                } = await (0, n.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: t
                });
                return r
              })({
                pingBearer: d
              });
              u({
                ...i,
                gamesPlayed: e
              }), _((e => e - 1))
            })()
          }), [i?.nickname, f]), (0, a.useEffect)((() => {
            (async () => {
              if (f && i && "gtao" === r && !i?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: t
                } = await (async e => {
                  let {
                    pingBearer: t,
                    nickname: r,
                    rockstarId: a
                  } = e;
                  const s = [],
                    o = await (0, n.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  await (o?.platforms?.reduce((async (e, r) => {
                    if (await e, ["ps3", "xbox", "xbox360"].includes(r)) return;
                    const a = await (0, n.coreScApiFetch)(`games/gtao/characters?platform=${r}`, {
                      pingBearer: t
                    });
                    a?.status && a?.result?.map((e => {
                      const {
                        stats: t
                      } = e, {
                        overview: a
                      } = t, {
                        rank: n
                      } = a;
                      if ("0" === n.value) return;
                      const o = ["ps4", "ps5"].includes(r) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return s.push({
                        ...e,
                        mugshotUrl: o,
                        platform: r
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: c,
                    accounts: i
                  } = await (0, n.coreScApiFetch)(`profile/getprofile?nickname=${r}&maxFriends=0`, {
                    pingBearer: t
                  });
                  if (!c || !i.length) return {
                    gtaoCharacters: s,
                    linkedAccounts: []
                  };
                  const u = i[0],
                    {
                      rockstarAccount: l,
                      linkedAccounts: d
                    } = u;
                  if (l?.rockstarId !== a) return {
                    gtaoCharacters: s,
                    linkedAccounts: []
                  };
                  if (!s.length) return {
                    gtaoCharacters: s,
                    linkedAccounts: u.linkedAccounts
                  };
                  const f = r;
                  let p = "",
                    m = "";
                  return d?.map((e => ("xbl" === e?.onlineService ? p = e.userName : "np" === e?.onlineService && (m = e.userName), e))), s.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), s.map(((e, t) => (e.platformUsername = f, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = m || f), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = p || f), e))), {
                    gtaoCharacters: s,
                    linkedAccounts: d
                  }
                })({
                  pingBearer: d,
                  nickname: i.nickname,
                  rockstarId: i.id
                });
                u({
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
          }), [r, i?.nickname, f]), (0, a.useEffect)((() => {
            i?.id && i?.nonExpiredToken && (m(!0), (0, p.K)(i.id))
          }), [JSON.stringify(i)]), {
            data: i,
            loggedIn: f,
            loading: v
          }
        },
        b = {},
        v = (0, n.setContextItem)({
          context: (0, a.createContext)(b),
          key: "userContext"
        }),
        w = e => {
          let {
            children: t,
            privateToken: r
          } = e;
          const n = y({
              privateToken: r
            }),
            s = (0, a.useMemo)((() => ({
              ...n,
              privateToken: r,
              hasProvider: !0
            })), [n]);
          return (0, i.jsx)(v.Provider, {
            value: s,
            children: t
          })
        },
        _ = () => (0, a.useContext)(v)
    },
    90562: e => {
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === r
            }(e)
          }(e)
        },
        r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function a(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? c((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function n(e, t, r) {
        return e.concat(t).map((function(e) {
          return a(e, r)
        }))
      }

      function s(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          })) : []
        }(e))
      }

      function o(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function c(e, r, i) {
        (i = i || {}).arrayMerge = i.arrayMerge || n, i.isMergeableObject = i.isMergeableObject || t, i.cloneUnlessOtherwiseSpecified = a;
        var u = Array.isArray(r);
        return u === Array.isArray(e) ? u ? i.arrayMerge(e, r, i) : function(e, t, r) {
          var n = {};
          return r.isMergeableObject(e) && s(e).forEach((function(t) {
            n[t] = a(e[t], r)
          })), s(t).forEach((function(s) {
            (function(e, t) {
              return o(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, s) || (o(e, s) && r.isMergeableObject(t[s]) ? n[s] = function(e, t) {
              if (!t.customMerge) return c;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : c
            }(s, r)(e[s], t[s], r) : n[s] = a(t[s], r))
          })), n
        }(e, r, i) : a(r, i)
      }
      c.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, r) {
          return c(e, r, t)
        }), {})
      };
      var i = c;
      e.exports = i
    },
    92834: (e, t, r) => {
      var a = r(71127),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, r) {
        var a, s = {},
          u = null,
          l = null;
        for (a in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) o.call(t, a) && !i.hasOwnProperty(a) && (s[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === s[a] && (s[a] = t[a]);
        return {
          $$typeof: n,
          type: e,
          key: u,
          ref: l,
          props: s,
          _owner: c.current
        }
      }
      t.Fragment = s, t.jsx = u, t.jsxs = u
    }
  }
]);