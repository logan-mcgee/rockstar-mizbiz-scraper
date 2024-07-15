! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e9dc43db-5e94-48f4-bc42-c1b7eb41fcd5", e._sentryDebugIdIdentifier = "sentry-dbid-e9dc43db-5e94-48f4-bc42-c1b7eb41fcd5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-sc-user",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [240], {
    576: (e, t, a) => {
      "use strict";
      var r = a(664),
        n = Symbol.for("react.element"),
        s = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, a) {
        var r, c = {},
          d = null,
          u = null;
        for (r in void 0 !== a && (d = "" + a), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (u = t.ref), t) s.call(t, r) && !o.hasOwnProperty(r) && (c[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === c[r] && (c[r] = t[r]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: u,
          props: c,
          _owner: i.current
        }
      }
    },
    860: (e, t, a) => {
      "use strict";
      e.exports = a(576)
    },
    424: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => s
      });
      var r = a(52);
      const n = (0, a(792).getScConfigForOrigin)(),
        s = (0, r.makeVar)(n)
    },
    608: (e, t, a) => {
      "use strict";
      a.d(t, {
        Y: () => n
      });
      var r = a(664);
      const n = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
        return (0, r.useMemo)((() => {
          const r = e?.characters?.[a];
          return "1" === (r?.[t]?.stats?.overview?.hasGtaPlus?.value ?? "0")
        }), [e, a, t])
      }
    },
    988: (e, t, a) => {
      "use strict";
      a.d(t, {
        R: () => g,
        c: () => w
      });
      var r = a(52),
        n = a(792);
      const s = (0, r.makeVarNamespace)("@rockstargames/modules-core-sc-user"),
        i = s("navOpenReactive", !1),
        o = e => i(e),
        c = s("jumpScMenuFocusReactive", !1),
        d = e => c(e),
        u = s("hasNotificationsReactive", !1),
        l = e => u(e),
        f = s("currentCharIdReactive", (0, n.lsSettingsReactive)()?.currentCharId),
        m = e => f(e),
        p = s("selectedCharacterTupleReactive", null),
        v = e => p(e),
        g = s("rockstarIdReactive", null),
        k = s("charactersNeededReactive", null),
        h = e => k(e),
        b = s("userDataReactive", null),
        _ = e => b(e),
        w = () => {
          const e = (0, r.useReactiveVar)(k),
            t = (0, r.useReactiveVar)(f),
            a = (0, r.useReactiveVar)(i),
            n = (0, r.useReactiveVar)(u),
            s = (0, r.useReactiveVar)(p);
          return {
            charactersNeeded: e,
            currentCharId: t,
            hasNotifications: n,
            navOpen: a,
            userData: (0, r.useReactiveVar)(b),
            selectedCharacterTuple: s,
            jumpScMenuFocus: (0, r.useReactiveVar)(c),
            setCharactersNeeded: h,
            setCurrentCharId: m,
            setHasNotifications: l,
            setNavOpen: o,
            setSelectedCharacterTuple: v,
            setUserData: _,
            setJumpScMenuFocus: d
          }
        }
    },
    848: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        scConfig: () => o.c,
        useGtmTrack: () => r.useGtmTrack,
        useIsUserGtaPlus: () => n.Y,
        useRockstarUser: () => r.useRockstarUser,
        useRockstarUserState: () => s.c,
        useRpCategory: () => d,
        useScConfig: () => c
      });
      var r = a(228),
        n = a(608),
        s = a(988),
        i = a(52),
        o = a(424);
      const c = () => (0, i.useReactiveVar)(o.c),
        d = e => a(e < 100 ? 876 : e > 99 && e < 500 ? 320 : e > 499 && e < 750 ? 640 : 936)
    },
    228: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        GtmProvider: () => R,
        RockstarUserProvider: () => h,
        useGtmTrack: () => E,
        useRockstarUser: () => b
      });
      var r = a(664),
        n = a(52),
        s = a(792),
        i = a(740),
        o = a(988);
      var c = a(468),
        d = a.n(c),
        u = a(424);
      const {
        graphEnv: l
      } = (0, s.getScConfigForOrigin)(), f = (0, n.uriForGraphEnv)(l), m = () => {
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
          [c, l] = (0, r.useState)(!0),
          [m, , p] = (0, n.useRockstarTokenReactive)(),
          v = (0, n.useRockstarTokenPing)(),
          {
            refetch: g
          } = (0, n.useQuery)(i.userData, {
            skip: !0,
            context: {
              uri: f
            }
          }),
          [k, h] = (0, r.useState)(null),
          [b, _] = (0, r.useState)(!1),
          [w, y] = (0, r.useState)(!1);
        return (0, r.useEffect)((() => {
          (async () => {
            const r = null === e ? null : !!e;
            if (r && !b) {
              l(!0), _(!0);
              const e = await g(),
                r = e?.data?.user?.id,
                n = await (async e => {
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
                  pingBearer: v,
                  rockstarId: r
                }),
                i = await (async e => {
                  let {
                    pingBearer: t,
                    nickname: a,
                    rockstarId: r
                  } = e;
                  const n = [],
                    i = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  if (await (i?.platforms?.reduce((async (e, a) => {
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
                        const i = ["ps4", "ps5"].includes(a) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return n.push({
                          ...e,
                          mugshotUrl: i,
                          platform: a
                        }), e
                      }))
                    }), Promise.resolve())), !n.length) return n;
                  const {
                    status: o,
                    accounts: c
                  } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${a}&maxFriends=0`, {
                    pingBearer: t
                  });
                  return o && c.length ? (c.forEach((e => {
                    const {
                      rockstarAccount: t,
                      linkedAccounts: s
                    } = e;
                    if (t?.rockstarId !== r) return;
                    const i = a;
                    let o = "",
                      c = "";
                    s?.map((e => ("xbl" === e?.onlineService ? o = e.userName : "np" === e?.onlineService && (c = e.userName), e))), n.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), n.map(((e, t) => (e.platformUsername = i, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = c || i), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = o || i), e)))
                  })), n) : n
                })({
                  pingBearer: v,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: r
                }),
                c = {
                  ...t,
                  ...e?.data?.user,
                  crews: n,
                  characters: {
                    gtao: i
                  }
                };
              l(!1), a(c), h(!0), (0, o.R)(r)
            }
            if (!1 === r && !w) {
              try {
                await (async e => {
                  let {
                    token: t,
                    tokenPingExpires: a
                  } = e;
                  const r = {
                      method: "POST",
                      body: `fingerprint=${await d().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    },
                    n = await fetch((0, u.c)().silentCheck, r);
                  if (200 !== n.status) return void t(!1);
                  const s = await n.json(),
                    i = `${(0,u.c)().gateway}?code=${s}`,
                    o = await fetch(i, {
                      credentials: "include"
                    }),
                    {
                      bearerToken: c,
                      tokenExpiresTime: l
                    } = await o.json();
                  return t(c), a(l), c
                })({
                  token: m,
                  tokenPingExpires: p
                })
              } catch (e) {}
              y(!0)
            }!1 === r && w && (_(!0), h(!1), l(!1)), null === e && v()
          })()
        }), [e, b, w]), {
          data: t,
          loading: c,
          loggedIn: k
        }
      };
      var p = a(860);
      const v = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        g = "user-context",
        k = window?.[g] ?? (window[g] = (0, r.createContext)(v)),
        h = e => {
          let {
            children: t
          } = e;
          const a = m(),
            n = (0, r.useMemo)((() => ({
              ...a,
              hasProvider: !0
            })), [a]);
          return (0, p.jsx)(k.Provider, {
            value: n,
            children: t
          })
        },
        b = () => (0, r.useContext)(k);
      var _ = a(92),
        w = a(848),
        y = a(608);
      const S = (0, r.createContext)(void 0),
        R = e => {
          let {
            checkUser: t,
            children: a
          } = e;
          const n = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, a] = (0, r.useState)([]), [n, s] = (0, r.useState)([]), [i, o] = (0, r.useState)(null), {
                data: c,
                loggedIn: d
              } = (0, w.useRockstarUser)(), {
                currentCharId: u
              } = (0, w.useRockstarUserState)(), l = (0, y.Y)(c, u), f = (e, r) => {
                const n = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = r ?? {};
                    (0, _.track)({
                      ...e,
                      ...t
                    }), n.push(e)
                  }
                })), a([...t, ...n])
              };
              (0, r.useEffect)((() => {
                if (c && null !== d) {
                  const e = m(c);
                  n.length && e && f(n, e), o(e)
                } else e || n.length && f(n)
              }), [c, d, n]), (0, r.useEffect)((() => {
                const e = n.filter((e => -1 === t.indexOf(e)));
                s(e)
              }), [t]);
              const m = e => {
                const t = [],
                  a = [],
                  r = [];
                return Object.keys(e.characters).forEach((n => {
                  e.characters[n].length && (a.push(n), e.characters[n].forEach((e => {
                    "gtao" === n && (r.includes(e.platform) || r.push(e.platform)), t.includes(e.platform) || t.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: d ?? !1,
                  gta_plus_active: d ? Boolean(l) : void 0,
                  platforms_played: t.length ? t.join("|").toUpperCase() : void 0,
                  games_played: a.length ? a.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: r.length ? r.join("|").toUpperCase() : void 0
                }
              };
              return {
                track: e => {
                  if (null === d || !c || !i) {
                    const t = [...n];
                    return t.push({
                      ...e
                    }), s(t)
                  }
                  return (0, _.track)({
                    ...e,
                    ...i
                  })
                }
              }
            }(t),
            s = (0, r.useMemo)((() => n), [n, t]);
          return (0, p.jsx)(S.Provider, {
            value: s,
            children: a
          })
        },
        x = {
          track: () => null
        },
        E = () => (0, r.useContext)(S) ?? x
    },
    740: e => {
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
    },
    876: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    320: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    936: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    640: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);