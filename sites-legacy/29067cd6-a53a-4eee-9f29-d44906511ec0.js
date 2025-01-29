! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "29067cd6-a53a-4eee-9f29-d44906511ec0", e._sentryDebugIdIdentifier = "sentry-dbid-29067cd6-a53a-4eee-9f29-d44906511ec0")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [5456], {
    93075: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        GtmProvider: () => T,
        RockstarUserProvider: () => D,
        scConfig: () => x,
        useGtmTrack: () => A,
        useIsUserGtaPlus: () => U,
        useRockstarUser: () => F,
        useRockstarUserState: () => b,
        useScConfig: () => B
      });
      var n = t(62229),
        r = t(95966);
      const i = (0, r.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, r.makeVar)(null)
        }),
        s = e => i(e),
        o = (0, r.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, r.makeVar)(!1)
        }),
        c = e => o(e),
        l = (0, r.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, r.makeVar)(!1)
        }),
        u = e => l(e),
        d = (0, r.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, r.makeVar)((0, r.lsSettingsReactive)()?.currentCharId)
        }),
        f = e => d(e),
        m = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        k = e => m(e),
        v = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        g = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(null)
        }),
        p = e => g(e),
        h = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        y = e => h(e),
        b = () => {
          const e = (0, r.useReactiveVar)(g),
            a = (0, r.useReactiveVar)(d),
            t = (0, r.useReactiveVar)(i),
            n = (0, r.useReactiveVar)(l),
            v = (0, r.useReactiveVar)(m);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: n,
            navOpen: t,
            userData: (0, r.useReactiveVar)(h),
            selectedCharacterTuple: v,
            jumpScMenuFocus: (0, r.useReactiveVar)(o),
            setCharactersNeeded: p,
            setCurrentCharId: f,
            setHasNotifications: u,
            setNavOpen: s,
            setSelectedCharacterTuple: k,
            setUserData: y,
            setJumpScMenuFocus: c
          }
        };
      var w = t(8384),
        _ = t.n(w);
      const S = (0, r.getScConfigForOrigin)(),
        x = (0, r.makeVar)(S);
      var C = t(83428);
      const {
        graphEnv: I
      } = (0, r.getScConfigForOrigin)(), N = (0, r.getUriForGraphEnv)(I), R = () => {
        const e = (0, r.useRockstarToken)(),
          [a, t] = (0, n.useState)({
            id: null,
            avatar: "",
            profile_link: "",
            nickname: "",
            crews: [],
            characters: {
              gtao: []
            }
          }),
          [i, s] = (0, n.useState)(!0),
          [o, c] = (0, r.useRockstarTokenReactive)(),
          l = (0, r.useRockstarTokenPing)(),
          {
            refetch: u
          } = (0, r.useQuery)(C.userData, {
            skip: !0,
            context: {
              uri: N
            }
          }),
          [d, f] = (0, n.useState)(null),
          [m, k] = (0, n.useState)(!1),
          [g, p] = (0, n.useState)(!1);
        return (0, n.useEffect)((() => {
          (async () => {
            const n = null === e ? null : !!e;
            if (n && !m) {
              s(!0), k(!0);
              const e = await u(),
                n = e?.data?.user?.id,
                i = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: t
                  } = e;
                  const {
                    crews: n
                  } = await (0, r.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: t
                    }
                  });
                  return n
                })({
                  pingBearer: l,
                  rockstarId: n
                }),
                o = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: t,
                    rockstarId: n
                  } = e;
                  const i = [],
                    s = await (0, r.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  if (await (s?.platforms?.reduce((async (e, t) => {
                      if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                      const n = await (0, r.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                        pingBearer: a
                      });
                      n?.status && n?.result?.map((e => {
                        const {
                          stats: a
                        } = e, {
                          overview: n
                        } = a, {
                          rank: r
                        } = n;
                        if ("0" === r.value) return;
                        const s = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return i.push({
                          ...e,
                          mugshotUrl: s,
                          platform: t
                        }), e
                      }))
                    }), Promise.resolve())), !i.length) return i;
                  const {
                    status: o,
                    accounts: c
                  } = await (0, r.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                    pingBearer: a
                  });
                  return o && c.length ? (c.forEach((e => {
                    const {
                      rockstarAccount: a,
                      linkedAccounts: r
                    } = e;
                    if (a?.rockstarId !== n) return;
                    const s = t;
                    let o = "",
                      c = "";
                    r?.map((e => ("xbl" === e?.onlineService ? o = e.userName : "np" === e?.onlineService && (c = e.userName), e))), i.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), i.map(((e, a) => (e.platformUsername = s, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = c || s), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = o || s), e)))
                  })), i) : i
                })({
                  pingBearer: l,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: n
                }),
                c = {
                  ...a,
                  ...e?.data?.user,
                  crews: i,
                  characters: {
                    gtao: o
                  }
                };
              s(!1), t(c), f(!0), v(n)
            }
            if (!1 === n && !g) {
              try {
                await (async e => {
                  let {
                    token: a,
                    tokenPingExpires: t
                  } = e;
                  const n = {
                      method: "POST",
                      body: `fingerprint=${await _().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    },
                    r = await fetch(x().silentCheck, n);
                  if (200 !== r.status) return void a(!1);
                  const i = await r.json(),
                    s = `${x().gateway}?code=${i}`,
                    o = await fetch(s, {
                      credentials: "include"
                    }),
                    {
                      bearerToken: c,
                      tokenExpiresTime: l
                    } = await o.json();
                  return a(c), t(l), c
                })({
                  token: o,
                  tokenPingExpires: c
                })
              } catch (e) {}
              p(!0)
            }!1 === n && g && (k(!0), f(!1), s(!1)), null === e && l()
          })()
        }), [e, m, g]), {
          data: a,
          loading: i,
          loggedIn: d
        }
      };
      var E = t(98096);
      const V = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        M = (0, r.setContextItem)({
          context: (0, n.createContext)(V),
          key: "userContext"
        }),
        D = e => {
          let {
            children: a
          } = e;
          const t = R(),
            r = (0, n.useMemo)((() => ({
              ...t,
              hasProvider: !0
            })), [t]);
          return (0, E.jsx)(M.Provider, {
            value: r,
            children: a
          })
        },
        F = () => (0, n.useContext)(M),
        U = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
          return (0, n.useMemo)((() => {
            const n = e?.characters?.[t];
            return "1" === (n?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
          }), [e, t, a])
        };
      var P = t(86082);
      const O = (0, r.setContextItem)({
          context: (0, n.createContext)(void 0),
          key: "gtmContext22"
        }),
        T = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const i = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, n.useState)([]), [i, s] = (0, n.useState)([]), [o, c] = (0, n.useState)(null), {
                data: l,
                loggedIn: u
              } = F(), {
                currentCharId: d
              } = b(), f = U(l, d), m = (0, P.bn)(), k = (e, n) => {
                const i = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = n ?? {};
                    (0, r.track)({
                      ...e,
                      ...a
                    }), i.push(e)
                  }
                })), t([...a, ...i])
              };
              (0, n.useEffect)((() => {
                if (l && null !== u) {
                  const e = v(l);
                  i.length && e && k(i, e), c(e)
                } else e || i.length && k(i)
              }), [l, u, i]), (0, n.useEffect)((() => {
                const e = i.filter((e => -1 === a.indexOf(e)));
                s(e)
              }), [a]);
              const v = e => {
                const a = [],
                  t = [],
                  n = [];
                return Object.keys(e.characters).forEach((r => {
                  e.characters[r].length && (t.push(r), e.characters[r].forEach((e => {
                    "gtao" === r && (n.includes(e.platform) || n.push(e.platform)), a.includes(e.platform) || a.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: u ?? !1,
                  gta_plus_active: u ? Boolean(f) : void 0,
                  platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
                  games_played: t.length ? t.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: n.length ? n.join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  if (null === u || !l || !o) {
                    const a = [...i];
                    return a.push({
                      ...e
                    }), s(a)
                  }
                  return (0, r.track)({
                    ...e,
                    ...o
                  })
                }
              }
            }(a),
            s = (0, n.useMemo)((() => i), [i, a]);
          return (0, E.jsx)(O.Provider, {
            value: s,
            children: t
          })
        },
        j = {
          track: () => null
        },
        A = () => (0, n.useContext)(O) ?? j,
        B = () => (0, r.useReactiveVar)(x)
    },
    83428: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "userData"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "user"
              },
              name: {
                kind: "Name",
                value: "userData"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "avatar"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "nickname"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "profile_link"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "isAMinor"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "bearer_token_expired"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "agegate_pass"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "client"
                    },
                    arguments: []
                  }]
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "logged_in"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "client"
                    },
                    arguments: []
                  }]
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "subscribed"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 230
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query userData {\n    user: userData {\n        id\n        avatar\n        nickname\n        profile_link\n        isAMinor\n        bearer_token_expired\n        agegate_pass @client\n        logged_in @client\n        subscribed\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.userData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = n[a] || new Set,
          s = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            s.has(e) || (s.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = r(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "userData")
    }
  }
]);