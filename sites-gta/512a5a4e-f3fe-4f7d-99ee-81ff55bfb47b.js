! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "512a5a4e-f3fe-4f7d-99ee-81ff55bfb47b", e._sentryDebugIdIdentifier = "sentry-dbid-512a5a4e-f3fe-4f7d-99ee-81ff55bfb47b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [572, 679, 75], {
    5356: (e, t, a) => {
      "use strict";
      var r = a(2229),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, a) {
        var r, s = {},
          l = null,
          u = null;
        for (r in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) i.call(t, r) && !c.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: u,
          props: s,
          _owner: o.current
        }
      }
      t.Fragment = s, t.jsx = l, t.jsxs = l
    },
    8096: (e, t, a) => {
      "use strict";
      e.exports = a(5356)
    },
    5456: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        GtmProvider: () => T,
        RockstarUserProvider: () => F,
        scConfig: () => x,
        useGtmTrack: () => A,
        useIsUserGtaPlus: () => O,
        useRockstarUser: () => M,
        useRockstarUserState: () => b,
        useScConfig: () => B
      });
      var r = a(2229),
        n = a(5966);
      const s = (0, n.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, n.makeVar)(null)
        }),
        i = e => s(e),
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
        p = e => m(e),
        k = (0, n.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, n.makeVar)(null)
        }),
        v = (0, n.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, n.makeVar)(null)
        }),
        g = e => v(e),
        h = (0, n.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, n.makeVar)(null)
        }),
        w = e => h(e),
        b = () => {
          const e = (0, n.useReactiveVar)(v),
            t = (0, n.useReactiveVar)(d),
            a = (0, n.useReactiveVar)(s),
            r = (0, n.useReactiveVar)(l),
            k = (0, n.useReactiveVar)(m);
          return {
            charactersNeeded: e,
            currentCharId: t,
            hasNotifications: r,
            navOpen: a,
            userData: (0, n.useReactiveVar)(h),
            selectedCharacterTuple: k,
            jumpScMenuFocus: (0, n.useReactiveVar)(o),
            setCharactersNeeded: g,
            setCurrentCharId: f,
            setHasNotifications: u,
            setNavOpen: i,
            setSelectedCharacterTuple: p,
            setUserData: w,
            setJumpScMenuFocus: c
          }
        };
      var y = a(8384),
        _ = a.n(y);
      const S = (0, n.getScConfigForOrigin)(),
        x = (0, n.makeVar)(S);
      var C = a(3428);
      const {
        graphEnv: I
      } = (0, n.getScConfigForOrigin)(), R = (0, n.getUriForGraphEnv)(I), E = () => {
        const e = (0, n.useRockstarToken)(),
          [t, a] = (0, r.useState)({
            id: null,
            avatar: "",
            profile_link: "",
            nickname: "",
            crews: [],
            characters: {
              gtao: []
            }
          }),
          [s, i] = (0, r.useState)(!0),
          [o, c] = (0, n.useRockstarTokenReactive)(),
          l = (0, n.useRockstarTokenPing)(),
          {
            refetch: u
          } = (0, n.useQuery)(C.userData, {
            skip: !0,
            context: {
              uri: R
            }
          }),
          [d, f] = (0, r.useState)(null),
          [m, p] = (0, r.useState)(!1),
          [v, g] = (0, r.useState)(!1);
        return (0, r.useEffect)((() => {
          (async () => {
            const r = null === e ? null : !!e;
            if (r && !m) {
              i(!0), p(!0);
              const e = await u(),
                r = e?.data?.user?.id,
                s = await (async e => {
                  let {
                    pingBearer: t,
                    rockstarId: a
                  } = e;
                  const {
                    crews: r
                  } = await (0, n.coreScApiFetch)("crew/forMember", {
                    pingBearer: t,
                    query: {
                      userId: a
                    }
                  });
                  return r
                })({
                  pingBearer: l,
                  rockstarId: r
                }),
                o = await (async e => {
                  let {
                    pingBearer: t,
                    nickname: a,
                    rockstarId: r
                  } = e;
                  const s = [],
                    i = await (0, n.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  if (await (i?.platforms?.reduce((async (e, a) => {
                      if (await e, ["ps3", "xbox", "xbox360"].includes(a)) return;
                      const r = await (0, n.coreScApiFetch)(`games/gtao/characters?platform=${a}`, {
                        pingBearer: t
                      });
                      r?.status && r?.result?.map((e => {
                        const {
                          stats: t
                        } = e, {
                          overview: r
                        } = t, {
                          rank: n
                        } = r;
                        if ("0" === n.value) return;
                        const i = ["ps4", "ps5"].includes(a) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return s.push({
                          ...e,
                          mugshotUrl: i,
                          platform: a
                        }), e
                      }))
                    }), Promise.resolve())), !s.length) return s;
                  const {
                    status: o,
                    accounts: c
                  } = await (0, n.coreScApiFetch)(`profile/getprofile?nickname=${a}&maxFriends=0`, {
                    pingBearer: t
                  });
                  return o && c.length ? (c.forEach((e => {
                    const {
                      rockstarAccount: t,
                      linkedAccounts: n
                    } = e;
                    if (t?.rockstarId !== r) return;
                    const i = a;
                    let o = "",
                      c = "";
                    n?.map((e => ("xbl" === e?.onlineService ? o = e.userName : "np" === e?.onlineService && (c = e.userName), e))), s.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), s.map(((e, t) => (e.platformUsername = i, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = c || i), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = o || i), e)))
                  })), s) : s
                })({
                  pingBearer: l,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: r
                }),
                c = {
                  ...t,
                  ...e?.data?.user,
                  crews: s,
                  characters: {
                    gtao: o
                  }
                };
              i(!1), a(c), f(!0), k(r)
            }
            if (!1 === r && !v) {
              try {
                await (async e => {
                  let {
                    token: t,
                    tokenPingExpires: a
                  } = e;
                  const r = {
                      method: "POST",
                      body: `fingerprint=${await _().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    },
                    n = await fetch(x().silentCheck, r);
                  if (200 !== n.status) return void t(!1);
                  const s = await n.json(),
                    i = `${x().gateway}?code=${s}`,
                    o = await fetch(i, {
                      credentials: "include"
                    }),
                    {
                      bearerToken: c,
                      tokenExpiresTime: l
                    } = await o.json();
                  return t(c), a(l), c
                })({
                  token: o,
                  tokenPingExpires: c
                })
              } catch (e) {}
              g(!0)
            }!1 === r && v && (p(!0), f(!1), i(!1)), null === e && l()
          })()
        }), [e, m, v]), {
          data: t,
          loading: s,
          loggedIn: d
        }
      };
      var N = a(8096);
      const D = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        V = (0, n.setContextItem)({
          context: (0, r.createContext)(D),
          key: "userContext"
        }),
        F = e => {
          let {
            children: t
          } = e;
          const a = E(),
            n = (0, r.useMemo)((() => ({
              ...a,
              hasProvider: !0
            })), [a]);
          return (0, N.jsx)(V.Provider, {
            value: n,
            children: t
          })
        },
        M = () => (0, r.useContext)(V),
        O = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
          return (0, r.useMemo)((() => {
            const r = e?.characters?.[a];
            return "1" === (r?.[t]?.stats?.overview?.hasGtaPlus?.value ?? "0")
          }), [e, a, t])
        };
      var P = a(6082);
      const U = (0, n.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        T = e => {
          let {
            checkUser: t,
            children: a
          } = e;
          const s = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, a] = (0, r.useState)([]), [s, i] = (0, r.useState)([]), [o, c] = (0, r.useState)(null), {
                data: l,
                loggedIn: u
              } = M(), {
                currentCharId: d
              } = b(), f = O(l, d), m = (0, P.bn)(), p = (e, r) => {
                const s = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = r ?? {};
                    (0, n.track)({
                      ...e,
                      ...t
                    }), s.push(e)
                  }
                })), a([...t, ...s])
              };
              (0, r.useEffect)((() => {
                if (l && null !== u) {
                  const e = k(l);
                  s.length && e && p(s, e), c(e)
                } else e || s.length && p(s)
              }), [l, u, s]), (0, r.useEffect)((() => {
                const e = s.filter((e => -1 === t.indexOf(e)));
                i(e)
              }), [t]);
              const k = e => {
                const t = [],
                  a = [],
                  r = [];
                return Object.keys(e.characters).forEach((n => {
                  e.characters[n].length && (a.push(n), e.characters[n].forEach((e => {
                    "gtao" === n && (r.includes(e.platform) || r.push(e.platform)), t.includes(e.platform) || t.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: u ?? !1,
                  gta_plus_active: u ? Boolean(f) : void 0,
                  platforms_played: t.length ? t.join("|").toUpperCase() : void 0,
                  games_played: a.length ? a.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: r.length ? r.join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  if (null === u || !l || !o) {
                    const t = [...s];
                    return t.push({
                      ...e
                    }), i(t)
                  }
                  return (0, n.track)({
                    ...e,
                    ...o
                  })
                }
              }
            }(t),
            i = (0, r.useMemo)((() => s), [s, t]);
          return (0, N.jsx)(U.Provider, {
            value: i,
            children: a
          })
        },
        j = {
          track: () => null
        },
        A = () => (0, r.useContext)(U) ?? j,
        B = () => (0, n.useReactiveVar)(x)
    },
    5138: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => s,
        C: () => r
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        n = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        s = () => {
          let e;
          const {
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = n.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, n] = t;
            return n === a && (e = {
              site: r,
              subDomain: n
            }, !0)
          })) >= 0)), s = n[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    },
    3428: e => {
      var t = {
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

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && t.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query userData {\n    user: userData {\n        id\n        avatar\n        nickname\n        profile_link\n        isAMinor\n        bearer_token_expired\n        agegate_pass @client\n        logged_in @client\n        subscribed\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function n(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var r = e.definitions[a];
          if (r.name && r.name.value == t) return r
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), r[e.name.value] = t
        }
      })), e.exports = t, e.exports.userData = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var s = r[t] || new Set,
          i = new Set,
          o = new Set;
        for (s.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (r[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var r = n(e, t);
          r && a.definitions.push(r)
        })), a
      }(t, "userData")
    }
  }
]);