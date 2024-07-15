! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e9dc43db-5e94-48f4-bc42-c1b7eb41fcd5", e._sentryDebugIdIdentifier = "sentry-dbid-e9dc43db-5e94-48f4-bc42-c1b7eb41fcd5")
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
    576: (e, a, t) => {
      "use strict";
      var r = t(664),
        n = Symbol.for("react.element"),
        s = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      a.jsx = function(e, a, t) {
        var r, c = {},
          d = null,
          u = null;
        for (r in void 0 !== t && (d = "" + t), void 0 !== a.key && (d = "" + a.key), void 0 !== a.ref && (u = a.ref), a) s.call(a, r) && !o.hasOwnProperty(r) && (c[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === c[r] && (c[r] = a[r]);
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
    860: (e, a, t) => {
      "use strict";
      e.exports = t(576)
    },
    424: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => s
      });
      var r = t(52);
      const n = (0, t(792).getScConfigForOrigin)(),
        s = (0, r.makeVar)(n)
    },
    608: (e, a, t) => {
      "use strict";
      t.d(a, {
        Y: () => n
      });
      var r = t(664);
      const n = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
        return (0, r.useMemo)((() => {
          const r = e?.characters?.[t];
          return "1" === (r?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
        }), [e, t, a])
      }
    },
    988: (e, a, t) => {
      "use strict";
      t.d(a, {
        R: () => g,
        c: () => w
      });
      var r = t(52),
        n = t(792);
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
        _ = s("userDataReactive", null),
        b = e => _(e),
        w = () => {
          const e = (0, r.useReactiveVar)(k),
            a = (0, r.useReactiveVar)(f),
            t = (0, r.useReactiveVar)(i),
            n = (0, r.useReactiveVar)(u),
            s = (0, r.useReactiveVar)(p);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: n,
            navOpen: t,
            userData: (0, r.useReactiveVar)(_),
            selectedCharacterTuple: s,
            jumpScMenuFocus: (0, r.useReactiveVar)(c),
            setCharactersNeeded: h,
            setCurrentCharId: m,
            setHasNotifications: l,
            setNavOpen: o,
            setSelectedCharacterTuple: v,
            setUserData: b,
            setJumpScMenuFocus: d
          }
        }
    },
    848: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        scConfig: () => o.c,
        useGtmTrack: () => r.useGtmTrack,
        useIsUserGtaPlus: () => n.Y,
        useRockstarUser: () => r.useRockstarUser,
        useRockstarUserState: () => s.c,
        useRpCategory: () => d,
        useScConfig: () => c
      });
      var r = t(228),
        n = t(608),
        s = t(988),
        i = t(52),
        o = t(424);
      const c = () => (0, i.useReactiveVar)(o.c),
        d = e => t(e < 100 ? 876 : e > 99 && e < 500 ? 320 : e > 499 && e < 750 ? 640 : 936)
    },
    228: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        GtmProvider: () => R,
        RockstarUserProvider: () => h,
        useGtmTrack: () => E,
        useRockstarUser: () => _
      });
      var r = t(664),
        n = t(52),
        s = t(792),
        i = t(740),
        o = t(988);
      var c = t(468),
        d = t.n(c),
        u = t(424);
      const {
        graphEnv: l
      } = (0, s.getScConfigForOrigin)(), f = (0, n.uriForGraphEnv)(l), m = () => {
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
          [_, b] = (0, r.useState)(!1),
          [w, y] = (0, r.useState)(!1);
        return (0, r.useEffect)((() => {
          (async () => {
            const r = null === e ? null : !!e;
            if (r && !_) {
              l(!0), b(!0);
              const e = await g(),
                r = e?.data?.user?.id,
                n = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: t
                  } = e;
                  const {
                    crews: r
                  } = await (0, s.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: t
                    }
                  });
                  return r
                })({
                  pingBearer: v,
                  rockstarId: r
                }),
                i = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: t,
                    rockstarId: r
                  } = e;
                  const n = [],
                    i = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  if (await (i?.platforms?.reduce((async (e, t) => {
                      if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                      const r = await (0, s.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                        pingBearer: a
                      });
                      r?.status && r?.result?.map((e => {
                        const {
                          stats: a
                        } = e, {
                          overview: r
                        } = a, {
                          rank: s
                        } = r;
                        if ("0" === s.value) return;
                        const i = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return n.push({
                          ...e,
                          mugshotUrl: i,
                          platform: t
                        }), e
                      }))
                    }), Promise.resolve())), !n.length) return n;
                  const {
                    status: o,
                    accounts: c
                  } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                    pingBearer: a
                  });
                  return o && c.length ? (c.forEach((e => {
                    const {
                      rockstarAccount: a,
                      linkedAccounts: s
                    } = e;
                    if (a?.rockstarId !== r) return;
                    const i = t;
                    let o = "",
                      c = "";
                    s?.map((e => ("xbl" === e?.onlineService ? o = e.userName : "np" === e?.onlineService && (c = e.userName), e))), n.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), n.map(((e, a) => (e.platformUsername = i, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = c || i), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = o || i), e)))
                  })), n) : n
                })({
                  pingBearer: v,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: r
                }),
                c = {
                  ...a,
                  ...e?.data?.user,
                  crews: n,
                  characters: {
                    gtao: i
                  }
                };
              l(!1), t(c), h(!0), (0, o.R)(r)
            }
            if (!1 === r && !w) {
              try {
                await (async e => {
                  let {
                    token: a,
                    tokenPingExpires: t
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
                  if (200 !== n.status) return void a(!1);
                  const s = await n.json(),
                    i = `${(0,u.c)().gateway}?code=${s}`,
                    o = await fetch(i, {
                      credentials: "include"
                    }),
                    {
                      bearerToken: c,
                      tokenExpiresTime: l
                    } = await o.json();
                  return a(c), t(l), c
                })({
                  token: m,
                  tokenPingExpires: p
                })
              } catch (e) {}
              y(!0)
            }!1 === r && w && (b(!0), h(!1), l(!1)), null === e && v()
          })()
        }), [e, _, w]), {
          data: a,
          loading: c,
          loggedIn: k
        }
      };
      var p = t(860);
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
            children: a
          } = e;
          const t = m(),
            n = (0, r.useMemo)((() => ({
              ...t,
              hasProvider: !0
            })), [t]);
          return (0, p.jsx)(k.Provider, {
            value: n,
            children: a
          })
        },
        _ = () => (0, r.useContext)(k);
      var b = t(92),
        w = t(848),
        y = t(608);
      const S = (0, r.createContext)(void 0),
        R = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const n = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, r.useState)([]), [n, s] = (0, r.useState)([]), [i, o] = (0, r.useState)(null), {
                data: c,
                loggedIn: d
              } = (0, w.useRockstarUser)(), {
                currentCharId: u
              } = (0, w.useRockstarUserState)(), l = (0, y.Y)(c, u), f = (e, r) => {
                const n = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = r ?? {};
                    (0, b.track)({
                      ...e,
                      ...a
                    }), n.push(e)
                  }
                })), t([...a, ...n])
              };
              (0, r.useEffect)((() => {
                if (c && null !== d) {
                  const e = m(c);
                  n.length && e && f(n, e), o(e)
                } else e || n.length && f(n)
              }), [c, d, n]), (0, r.useEffect)((() => {
                const e = n.filter((e => -1 === a.indexOf(e)));
                s(e)
              }), [a]);
              const m = e => {
                const a = [],
                  t = [],
                  r = [];
                return Object.keys(e.characters).forEach((n => {
                  e.characters[n].length && (t.push(n), e.characters[n].forEach((e => {
                    "gtao" === n && (r.includes(e.platform) || r.push(e.platform)), a.includes(e.platform) || a.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: d ?? !1,
                  gta_plus_active: d ? Boolean(l) : void 0,
                  platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
                  games_played: t.length ? t.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: r.length ? r.join("|").toUpperCase() : void 0
                }
              };
              return {
                track: e => {
                  if (null === d || !c || !i) {
                    const a = [...n];
                    return a.push({
                      ...e
                    }), s(a)
                  }
                  return (0, b.track)({
                    ...e,
                    ...i
                  })
                }
              }
            }(a),
            s = (0, r.useMemo)((() => n), [n, a]);
          return (0, p.jsx)(S.Provider, {
            value: s,
            children: t
          })
        },
        x = {
          track: () => null
        },
        E = () => (0, r.useContext)(S) ?? x
    },
    740: e => {
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
        var s = r[a] || new Set,
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
        return i.forEach((function(a) {
          var r = n(e, a);
          r && t.definitions.push(r)
        })), t
      }(a, "userData")
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