! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c5dde535-c61c-4c7e-8a29-a187ccc1af2b", e._sentryDebugIdIdentifier = "sentry-dbid-c5dde535-c61c-4c7e-8a29-a187ccc1af2b")
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
  [563], {
    516: (e, a, t) => {
      "use strict";
      var r = t(784),
        n = Symbol.for("react.element"),
        s = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      a.jsx = function(e, a, t) {
        var r, o = {},
          d = null,
          u = null;
        for (r in void 0 !== t && (d = "" + t), void 0 !== a.key && (d = "" + a.key), void 0 !== a.ref && (u = a.ref), a) s.call(a, r) && !c.hasOwnProperty(r) && (o[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === o[r] && (o[r] = a[r]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: u,
          props: o,
          _owner: i.current
        }
      }
    },
    632: (e, a, t) => {
      "use strict";
      e.exports = t(516)
    },
    951: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => s
      });
      var r = t(407);
      const n = (0, t(756).getScConfigForOrigin)(),
        s = (0, r.makeVar)(n)
    },
    600: (e, a, t) => {
      "use strict";
      t.d(a, {
        F: () => n
      });
      var r = t(784);
      const n = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
        return (0, r.useMemo)((() => {
          const r = e?.characters?.[t];
          return "1" === (r?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
        }), [e, t, a])
      }
    },
    480: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => w,
        K: () => g
      });
      var r = t(407),
        n = t(756);
      const s = (0, r.makeVarNamespace)("@rockstargames/modules-core-sc-user"),
        i = s("navOpenReactive", !1),
        c = e => i(e),
        o = s("jumpScMenuFocusReactive", !1),
        d = e => o(e),
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
            jumpScMenuFocus: (0, r.useReactiveVar)(o),
            setCharactersNeeded: h,
            setCurrentCharId: m,
            setHasNotifications: l,
            setNavOpen: c,
            setSelectedCharacterTuple: v,
            setUserData: b,
            setJumpScMenuFocus: d
          }
        }
    },
    36: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        scConfig: () => c.A,
        useGtmTrack: () => r.useGtmTrack,
        useIsUserGtaPlus: () => n.F,
        useRockstarUser: () => r.useRockstarUser,
        useRockstarUserState: () => s.A,
        useRpCategory: () => d,
        useScConfig: () => o
      });
      var r = t(896),
        n = t(600),
        s = t(480),
        i = t(407),
        c = t(951);
      const o = () => (0, i.useReactiveVar)(c.A),
        d = e => t(e < 100 ? 934 : e > 99 && e < 500 ? 210 : e > 499 && e < 750 ? 253 : 792)
    },
    896: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        GtmProvider: () => x,
        RockstarUserProvider: () => h,
        useGtmTrack: () => N,
        useRockstarUser: () => _
      });
      var r = t(784),
        n = t(407),
        s = t(756),
        i = t(148),
        c = t(480);
      var o = t(525),
        d = t.n(o),
        u = t(951);
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
          [o, l] = (0, r.useState)(!0),
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
                    status: c,
                    accounts: o
                  } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                    pingBearer: a
                  });
                  return c && o.length ? (o.forEach((e => {
                    const {
                      rockstarAccount: a,
                      linkedAccounts: s
                    } = e;
                    if (a?.rockstarId !== r) return;
                    const i = t;
                    let c = "",
                      o = "";
                    s?.map((e => ("xbl" === e?.onlineService ? c = e.userName : "np" === e?.onlineService && (o = e.userName), e))), n.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), n.map(((e, a) => (e.platformUsername = i, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = o || i), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = c || i), e)))
                  })), n) : n
                })({
                  pingBearer: v,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: r
                }),
                o = {
                  ...a,
                  ...e?.data?.user,
                  crews: n,
                  characters: {
                    gtao: i
                  }
                };
              l(!1), t(o), h(!0), (0, c.K)(r)
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
                    n = await fetch((0, u.A)().silentCheck, r);
                  if (200 !== n.status) return void a(!1);
                  const s = await n.json(),
                    i = `${(0,u.A)().gateway}?code=${s}`,
                    c = await fetch(i, {
                      credentials: "include"
                    }),
                    {
                      bearerToken: o,
                      tokenExpiresTime: l
                    } = await c.json();
                  return a(o), t(l), o
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
          loading: o,
          loggedIn: k
        }
      };
      var p = t(632);
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
      var b = t(662),
        w = t(36),
        y = t(600),
        S = t(396);
      const R = (0, r.createContext)(void 0),
        x = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const n = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, r.useState)([]), [n, s] = (0, r.useState)([]), [i, c] = (0, r.useState)(null), {
                data: o,
                loggedIn: d
              } = (0, w.useRockstarUser)(), {
                currentCharId: u
              } = (0, w.useRockstarUserState)(), l = (0, y.F)(o, u), f = (0, S.useBrowserCapabilityDetection)(), m = (e, r) => {
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
                if (o && null !== d) {
                  const e = p(o);
                  n.length && e && m(n, e), c(e)
                } else e || n.length && m(n)
              }), [o, d, n]), (0, r.useEffect)((() => {
                const e = n.filter((e => -1 === a.indexOf(e)));
                s(e)
              }), [a]);
              const p = e => {
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
                  gtao_platforms_played: r.length ? r.join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: f
                }
              };
              return {
                track: e => {
                  if (null === d || !o || !i) {
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
          return (0, p.jsx)(R.Provider, {
            value: s,
            children: t
          })
        },
        E = {
          track: () => null
        },
        N = () => (0, r.useContext)(R) ?? E
    },
    148: e => {
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
          c = new Set;
        for (s.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            i.has(e) || (i.add(e), (r[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var r = n(e, a);
          r && t.definitions.push(r)
        })), t
      }(a, "userData")
    },
    934: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    210: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    792: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    253: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);