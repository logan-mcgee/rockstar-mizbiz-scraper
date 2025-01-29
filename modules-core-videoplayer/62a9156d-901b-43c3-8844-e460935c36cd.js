! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "62a9156d-901b-43c3-8844-e460935c36cd", e._sentryDebugIdIdentifier = "sentry-dbid-62a9156d-901b-43c3-8844-e460935c36cd")
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
  [75, 96, 456], {
    5356: (e, a, t) => {
      "use strict";
      var r = t(2229),
        n = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var r, i = {},
          l = null,
          u = null;
        for (r in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (u = a.ref), a) s.call(a, r) && !c.hasOwnProperty(r) && (i[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === i[r] && (i[r] = a[r]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: u,
          props: i,
          _owner: o.current
        }
      }
      a.Fragment = i, a.jsx = l, a.jsxs = l
    },
    8096: (e, a, t) => {
      "use strict";
      e.exports = t(5356)
    },
    5456: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        GtmProvider: () => T,
        RockstarUserProvider: () => F,
        scConfig: () => x,
        useGtmTrack: () => A,
        useIsUserGtaPlus: () => O,
        useRockstarUser: () => M,
        useRockstarUserState: () => _,
        useScConfig: () => B
      });
      var r = t(2229),
        n = t(5966);
      const i = (0, n.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, n.makeVar)(null)
        }),
        s = e => i(e),
        o = (0, n.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, n.makeVar)(!1)
        }),
        c = e => o(e),
        l = (0, n.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, n.makeVar)(!1)
        }),
        u = e => l(e),
        d = (0, n.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, n.makeVar)((0, n.lsSettingsReactive)()?.currentCharId)
        }),
        f = e => d(e),
        m = (0, n.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, n.makeVar)(null)
        }),
        v = e => m(e),
        k = (0, n.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, n.makeVar)(null)
        }),
        p = (0, n.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, n.makeVar)(null)
        }),
        g = e => p(e),
        h = (0, n.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, n.makeVar)(null)
        }),
        y = e => h(e),
        _ = () => {
          const e = (0, n.useReactiveVar)(p),
            a = (0, n.useReactiveVar)(d),
            t = (0, n.useReactiveVar)(i),
            r = (0, n.useReactiveVar)(l),
            k = (0, n.useReactiveVar)(m);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: r,
            navOpen: t,
            userData: (0, n.useReactiveVar)(h),
            selectedCharacterTuple: k,
            jumpScMenuFocus: (0, n.useReactiveVar)(o),
            setCharactersNeeded: g,
            setCurrentCharId: f,
            setHasNotifications: u,
            setNavOpen: s,
            setSelectedCharacterTuple: v,
            setUserData: y,
            setJumpScMenuFocus: c
          }
        };
      var b = t(8384),
        w = t.n(b);
      const S = (0, n.getScConfigForOrigin)(),
        x = (0, n.makeVar)(S);
      var I = t(3428);
      const {
        graphEnv: C
      } = (0, n.getScConfigForOrigin)(), R = (0, n.getUriForGraphEnv)(C), E = () => {
        const e = (0, n.useRockstarToken)(),
          [a, t] = (0, r.useState)({
            id: null,
            avatar: "",
            profile_link: "",
            nickname: "",
            crews: [],
            characters: {
              gtao: []
            }
          }),
          [i, s] = (0, r.useState)(!0),
          [o, c] = (0, n.useRockstarTokenReactive)(),
          l = (0, n.useRockstarTokenPing)(),
          {
            refetch: u
          } = (0, n.useQuery)(I.userData, {
            skip: !0,
            context: {
              uri: R
            }
          }),
          [d, f] = (0, r.useState)(null),
          [m, v] = (0, r.useState)(!1),
          [p, g] = (0, r.useState)(!1);
        return (0, r.useEffect)((() => {
          (async () => {
            const r = null === e ? null : !!e;
            if (r && !m) {
              s(!0), v(!0);
              const e = await u(),
                r = e?.data?.user?.id,
                i = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: t
                  } = e;
                  const {
                    crews: r
                  } = await (0, n.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: t
                    }
                  });
                  return r
                })({
                  pingBearer: l,
                  rockstarId: r
                }),
                o = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: t,
                    rockstarId: r
                  } = e;
                  const i = [],
                    s = await (0, n.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  if (await (s?.platforms?.reduce((async (e, t) => {
                      if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                      const r = await (0, n.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                        pingBearer: a
                      });
                      r?.status && r?.result?.map((e => {
                        const {
                          stats: a
                        } = e, {
                          overview: r
                        } = a, {
                          rank: n
                        } = r;
                        if ("0" === n.value) return;
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
                  } = await (0, n.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                    pingBearer: a
                  });
                  return o && c.length ? (c.forEach((e => {
                    const {
                      rockstarAccount: a,
                      linkedAccounts: n
                    } = e;
                    if (a?.rockstarId !== r) return;
                    const s = t;
                    let o = "",
                      c = "";
                    n?.map((e => ("xbl" === e?.onlineService ? o = e.userName : "np" === e?.onlineService && (c = e.userName), e))), i.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), i.map(((e, a) => (e.platformUsername = s, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = c || s), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = o || s), e)))
                  })), i) : i
                })({
                  pingBearer: l,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: r
                }),
                c = {
                  ...a,
                  ...e?.data?.user,
                  crews: i,
                  characters: {
                    gtao: o
                  }
                };
              s(!1), t(c), f(!0), k(r)
            }
            if (!1 === r && !p) {
              try {
                await (async e => {
                  let {
                    token: a,
                    tokenPingExpires: t
                  } = e;
                  const r = {
                      method: "POST",
                      body: `fingerprint=${await w().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    },
                    n = await fetch(x().silentCheck, r);
                  if (200 !== n.status) return void a(!1);
                  const i = await n.json(),
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
              g(!0)
            }!1 === r && p && (v(!0), f(!1), s(!1)), null === e && l()
          })()
        }), [e, m, p]), {
          data: a,
          loading: i,
          loggedIn: d
        }
      };
      var N = t(8096);
      const V = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        D = (0, n.setContextItem)({
          context: (0, r.createContext)(V),
          key: "userContext"
        }),
        F = e => {
          let {
            children: a
          } = e;
          const t = E(),
            n = (0, r.useMemo)((() => ({
              ...t,
              hasProvider: !0
            })), [t]);
          return (0, N.jsx)(D.Provider, {
            value: n,
            children: a
          })
        },
        M = () => (0, r.useContext)(D),
        O = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
          return (0, r.useMemo)((() => {
            const r = e?.characters?.[t];
            return "1" === (r?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
          }), [e, t, a])
        };
      var P = t(6082);
      const U = (0, n.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        T = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const i = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, r.useState)([]), [i, s] = (0, r.useState)([]), [o, c] = (0, r.useState)(null), {
                data: l,
                loggedIn: u
              } = M(), {
                currentCharId: d
              } = _(), f = O(l, d), m = (0, P.bn)(), v = (e, r) => {
                const i = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = r ?? {};
                    (0, n.track)({
                      ...e,
                      ...a
                    }), i.push(e)
                  }
                })), t([...a, ...i])
              };
              (0, r.useEffect)((() => {
                if (l && null !== u) {
                  const e = k(l);
                  i.length && e && v(i, e), c(e)
                } else e || i.length && v(i)
              }), [l, u, i]), (0, r.useEffect)((() => {
                const e = i.filter((e => -1 === a.indexOf(e)));
                s(e)
              }), [a]);
              const k = e => {
                const a = [],
                  t = [],
                  r = [];
                return Object.keys(e.characters).forEach((n => {
                  e.characters[n].length && (t.push(n), e.characters[n].forEach((e => {
                    "gtao" === n && (r.includes(e.platform) || r.push(e.platform)), a.includes(e.platform) || a.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: u ?? !1,
                  gta_plus_active: u ? Boolean(f) : void 0,
                  platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
                  games_played: t.length ? t.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: r.length ? r.join("|").toUpperCase() : void 0,
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
                  return (0, n.track)({
                    ...e,
                    ...o
                  })
                }
              }
            }(a),
            s = (0, r.useMemo)((() => i), [i, a]);
          return (0, N.jsx)(U.Provider, {
            value: s,
            children: t
          })
        },
        j = {
          track: () => null
        },
        A = () => (0, r.useContext)(U) ?? j,
        B = () => (0, n.useReactiveVar)(x)
    },
    3428: e => {
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
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
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
      var r = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var r = e.definitions[t];
          if (r.name && r.name.value == a) return r
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), r[e.name.value] = a
        }
      })), e.exports = a, e.exports.userData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = r[a] || new Set,
          s = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            s.has(e) || (s.add(e), (r[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var r = n(e, a);
          r && t.definitions.push(r)
        })), t
      }(a, "userData")
    }
  }
]);