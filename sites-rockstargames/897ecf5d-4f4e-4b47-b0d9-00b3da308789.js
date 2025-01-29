! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "897ecf5d-4f4e-4b47-b0d9-00b3da308789", e._sentryDebugIdIdentifier = "sentry-dbid-897ecf5d-4f4e-4b47-b0d9-00b3da308789")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4810, 2429], {
    26657: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => s
      });
      var n = t(95966);
      const r = (0, n.getScConfigForOrigin)(),
        s = (0, n.makeVar)(r)
    },
    95230: (e, a, t) => {
      "use strict";
      t.d(a, {
        F: () => r
      });
      var n = t(62229);
      const r = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
        return (0, n.useMemo)((() => {
          const n = e?.characters?.[t];
          return "1" === (n?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
        }), [e, t, a])
      }
    },
    38854: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => b,
        K: () => k
      });
      var n = t(95966);
      const r = (0, n.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, n.makeVar)(null)
        }),
        s = e => r(e),
        i = (0, n.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, n.makeVar)(!1)
        }),
        o = e => i(e),
        c = (0, n.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, n.makeVar)(!1)
        }),
        u = e => c(e),
        l = (0, n.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, n.makeVar)((0, n.lsSettingsReactive)()?.currentCharId)
        }),
        d = e => l(e),
        f = (0, n.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, n.makeVar)(null)
        }),
        m = e => f(e),
        k = (0, n.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, n.makeVar)(null)
        }),
        v = (0, n.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, n.makeVar)(null)
        }),
        g = e => v(e),
        p = (0, n.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, n.makeVar)(null)
        }),
        h = e => p(e),
        b = () => {
          const e = (0, n.useReactiveVar)(v),
            a = (0, n.useReactiveVar)(l),
            t = (0, n.useReactiveVar)(r),
            k = (0, n.useReactiveVar)(c),
            b = (0, n.useReactiveVar)(f);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: k,
            navOpen: t,
            userData: (0, n.useReactiveVar)(p),
            selectedCharacterTuple: b,
            jumpScMenuFocus: (0, n.useReactiveVar)(i),
            setCharactersNeeded: g,
            setCurrentCharId: d,
            setHasNotifications: u,
            setNavOpen: s,
            setSelectedCharacterTuple: m,
            setUserData: h,
            setJumpScMenuFocus: o
          }
        }
    },
    25327: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        GtmProvider: () => n.UN,
        RockstarUserProvider: () => n.iR,
        scConfig: () => o.A,
        useGtmTrack: () => n.h,
        useIsUserGtaPlus: () => r.F,
        useRockstarUser: () => n.Wx,
        useRockstarUserState: () => s.A,
        useScConfig: () => c
      });
      var n = t(61147),
        r = t(95230),
        s = t(38854),
        i = t(95966),
        o = t(26657);
      const c = () => (0, i.useReactiveVar)(o.A)
    },
    61147: (e, a, t) => {
      "use strict";
      t.d(a, {
        UN: () => S,
        iR: () => g,
        h: () => x,
        Wx: () => p
      });
      var n = t(62229),
        r = t(95966),
        s = t(38854);
      var i = t(8384),
        o = t.n(i),
        c = t(26657);
      var u = t(83428);
      const {
        graphEnv: l
      } = (0, r.getScConfigForOrigin)(), d = (0, r.getUriForGraphEnv)(l), f = () => {
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
          [i, l] = (0, n.useState)(!0),
          [f, m] = (0, r.useRockstarTokenReactive)(),
          k = (0, r.useRockstarTokenPing)(),
          {
            refetch: v
          } = (0, r.useQuery)(u.userData, {
            skip: !0,
            context: {
              uri: d
            }
          }),
          [g, p] = (0, n.useState)(null),
          [h, b] = (0, n.useState)(!1),
          [y, w] = (0, n.useState)(!1);
        return (0, n.useEffect)((() => {
          (async () => {
            const n = null === e ? null : !!e;
            if (n && !h) {
              l(!0), b(!0);
              const e = await v(),
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
                  pingBearer: k,
                  rockstarId: n
                }),
                o = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: t,
                    rockstarId: n
                  } = e;
                  const s = [],
                    i = await (0, r.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  if (await (i?.platforms?.reduce((async (e, t) => {
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
                        const i = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return s.push({
                          ...e,
                          mugshotUrl: i,
                          platform: t
                        }), e
                      }))
                    }), Promise.resolve())), !s.length) return s;
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
                    const i = t;
                    let o = "",
                      c = "";
                    r?.map((e => ("xbl" === e?.onlineService ? o = e.userName : "np" === e?.onlineService && (c = e.userName), e))), s.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), s.map(((e, a) => (e.platformUsername = i, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = c || i), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = o || i), e)))
                  })), s) : s
                })({
                  pingBearer: k,
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
              l(!1), t(c), p(!0), (0, s.K)(n)
            }
            if (!1 === n && !y) {
              try {
                await (async e => {
                  let {
                    token: a,
                    tokenPingExpires: t
                  } = e;
                  const n = {
                      method: "POST",
                      body: `fingerprint=${await o().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    },
                    r = await fetch((0, c.A)().silentCheck, n);
                  if (200 !== r.status) return void a(!1);
                  const s = await r.json(),
                    i = `${(0,c.A)().gateway}?code=${s}`,
                    u = await fetch(i, {
                      credentials: "include"
                    }),
                    {
                      bearerToken: l,
                      tokenExpiresTime: d
                    } = await u.json();
                  return a(l), t(d), l
                })({
                  token: f,
                  tokenPingExpires: m
                })
              } catch (e) {}
              w(!0)
            }!1 === n && y && (b(!0), p(!1), l(!1)), null === e && k()
          })()
        }), [e, h, y]), {
          data: a,
          loading: i,
          loggedIn: g
        }
      };
      var m = t(98096);
      const k = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        v = (0, r.setContextItem)({
          context: (0, n.createContext)(k),
          key: "userContext"
        }),
        g = e => {
          let {
            children: a
          } = e;
          const t = f(),
            r = (0, n.useMemo)((() => ({
              ...t,
              hasProvider: !0
            })), [t]);
          return (0, m.jsx)(v.Provider, {
            value: r,
            children: a
          })
        },
        p = () => (0, n.useContext)(v);
      var h = t(25327),
        b = t(95230),
        y = t(86082);
      const w = (0, r.setContextItem)({
          context: (0, n.createContext)(void 0),
          key: "gtmContext22"
        }),
        S = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const s = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, n.useState)([]), [s, i] = (0, n.useState)([]), [o, c] = (0, n.useState)(null), {
                data: u,
                loggedIn: l
              } = (0, h.useRockstarUser)(), {
                currentCharId: d
              } = (0, h.useRockstarUserState)(), f = (0, b.F)(u, d), m = (0, y.bn)(), k = (e, n) => {
                const s = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = n ?? {};
                    (0, r.track)({
                      ...e,
                      ...a
                    }), s.push(e)
                  }
                })), t([...a, ...s])
              };
              (0, n.useEffect)((() => {
                if (u && null !== l) {
                  const e = v(u);
                  s.length && e && k(s, e), c(e)
                } else e || s.length && k(s)
              }), [u, l, s]), (0, n.useEffect)((() => {
                const e = s.filter((e => -1 === a.indexOf(e)));
                i(e)
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
                  login_state: l ?? !1,
                  gta_plus_active: l ? Boolean(f) : void 0,
                  platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
                  games_played: t.length ? t.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: n.length ? n.join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  if (null === l || !u || !o) {
                    const a = [...s];
                    return a.push({
                      ...e
                    }), i(a)
                  }
                  return (0, r.track)({
                    ...e,
                    ...o
                  })
                }
              }
            }(a),
            i = (0, n.useMemo)((() => s), [s, a]);
          return (0, m.jsx)(w.Provider, {
            value: i,
            children: t
          })
        },
        _ = {
          track: () => null
        },
        x = () => (0, n.useContext)(w) ?? _
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
        var s = n[a] || new Set,
          i = new Set,
          o = new Set;
        for (s.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = r(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "userData")
    }
  }
]);