(self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [496], {
    404: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => i
      });
      var r = t(859);
      const n = (0, t(929).getScConfigForOrigin)(),
        i = (0, r.makeVar)(n)
    },
    489: (e, a, t) => {
      "use strict";
      t.d(a, {
        R: () => k,
        Z: () => R
      });
      var r = t(859),
        n = t(929);
      const i = (0, r.makeVarNamespace)("@rockstargames/modules-core-sc-user"),
        s = i("navOpenReactive", !1),
        c = e => s(e),
        o = i("jumpScMenuFocusReactive", !1),
        u = e => o(e),
        l = i("hasNotificationsReactive", !1),
        d = e => l(e),
        m = i("currentCharIdReactive", (0, n.lsSettingsReactive)()?.currentCharId),
        v = e => m(e),
        f = i("selectedCharacterTupleReactive", null),
        p = e => f(e),
        k = i("rockstarIdReactive", null),
        g = i("charactersNeededReactive", null),
        h = e => g(e),
        S = i("userDataReactive", null),
        w = e => S(e),
        R = () => {
          const e = (0, r.useReactiveVar)(g),
            a = (0, r.useReactiveVar)(m),
            t = (0, r.useReactiveVar)(s),
            n = (0, r.useReactiveVar)(l),
            i = (0, r.useReactiveVar)(f);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: n,
            navOpen: t,
            userData: (0, r.useReactiveVar)(S),
            selectedCharacterTuple: i,
            jumpScMenuFocus: (0, r.useReactiveVar)(o),
            setCharactersNeeded: h,
            setCurrentCharId: v,
            setHasNotifications: d,
            setNavOpen: c,
            setSelectedCharacterTuple: p,
            setUserData: w,
            setJumpScMenuFocus: u
          }
        }
    },
    841: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        scConfig: () => s.Z,
        useGtmTrack: () => r.useGtmTrack,
        useRockstarUser: () => r.useRockstarUser,
        useRockstarUserState: () => n.Z,
        useScConfig: () => c
      });
      var r = t(989),
        n = t(489),
        i = t(859),
        s = t(404);
      const c = () => (0, i.useReactiveVar)(s.Z)
    },
    989: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        GtmProvider: () => N,
        RockstarUserProvider: () => h,
        useGtmTrack: () => C,
        useRockstarUser: () => S
      });
      var r = t(927),
        n = t(859),
        i = t(929),
        s = t(244),
        c = t(489);
      var o = t(348),
        u = t.n(o),
        l = t(404);
      const {
        graphEnv: d
      } = (0, i.getScConfigForOrigin)(), m = (0, n.uriForGraphEnv)(d), v = () => {
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
          [o, d] = (0, r.useState)(!0),
          [v, , f] = (0, n.useRockstarTokenReactive)(),
          p = (0, n.useRockstarTokenPing)(),
          {
            refetch: k
          } = (0, n.useQuery)(s.userData, {
            skip: !0,
            context: {
              uri: m
            }
          }),
          [g, h] = (0, r.useState)(null),
          [S, w] = (0, r.useState)(!1),
          [R, x] = (0, r.useState)(!1);
        return (0, r.useEffect)((() => {
          (async () => {
            const r = null === e ? null : !!e;
            if (r && !S) {
              d(!0), w(!0);
              const e = await k(),
                r = e?.data?.user?.id,
                n = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: t
                  } = e;
                  const {
                    crews: r
                  } = await (0, i.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: t
                    }
                  });
                  return r
                })({
                  pingBearer: p,
                  rockstarId: r
                }),
                s = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: t,
                    rockstarId: r
                  } = e;
                  const n = [],
                    s = await (0, i.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  if (await (s?.platforms?.reduce((async (e, t) => {
                      if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                      const r = await (0, i.coreScApiFetch)(`games/gtao/characters?platform=${t}`, {
                        pingBearer: a
                      });
                      r?.status && r?.result?.map((e => {
                        const {
                          stats: a
                        } = e, {
                          overview: r
                        } = a, {
                          rank: i
                        } = r;
                        if ("0" === i.value) return;
                        const s = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return n.push({
                          ...e,
                          platform: t,
                          mugshotUrl: s
                        }), e
                      }))
                    }), Promise.resolve())), !n.length) return n;
                  const {
                    status: c,
                    accounts: o
                  } = await (0, i.coreScApiFetch)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                    pingBearer: a
                  });
                  return c && o.length ? (o.forEach((e => {
                    const {
                      rockstarAccount: a,
                      linkedAccounts: i
                    } = e;
                    if (a?.rockstarId !== r) return;
                    const s = t;
                    let c = "",
                      o = "";
                    i?.map((e => ("xbl" === e?.onlineService ? c = e.userName : "np" === e?.onlineService && (o = e.userName), e))), n.sort(((e, a) => Number(a.activeCharacter) - Number(e.activeCharacter))), n.map(((e, a) => (e.platformUsername = s, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = o || s), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = c || s), e)))
                  })), n) : n
                })({
                  pingBearer: p,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: r
                }),
                o = {
                  ...a,
                  ...e?.data?.user,
                  crews: n,
                  characters: {
                    gtao: s
                  }
                };
              d(!1), t(o), h(!0), (0, c.R)(r)
            }
            if (!1 === r && !R) {
              try {
                await (async e => {
                  let {
                    token: a,
                    tokenPingExpires: t
                  } = e;
                  const r = {
                      method: "POST",
                      body: `fingerprint=${await u().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    },
                    n = await fetch((0, l.Z)().silentCheck, r);
                  if (200 !== n.status) return void a(!1);
                  const i = await n.json(),
                    s = `${(0,l.Z)().gateway}?code=${i}`,
                    c = await fetch(s, {
                      credentials: "include"
                    }),
                    {
                      bearerToken: o,
                      tokenExpiresTime: d
                    } = await c.json();
                  return a(o), t(d), o
                })({
                  token: v,
                  tokenPingExpires: f
                })
              } catch (e) {}
              x(!0)
            }!1 === r && R && (w(!0), h(!1), d(!1)), null === e && p()
          })()
        }), [e, S, R]), {
          data: a,
          loading: o,
          loggedIn: g
        }
      };
      var f = t(705);
      const p = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        k = "user-context",
        g = window?.[k] ?? (window[k] = (0, r.createContext)(p)),
        h = e => {
          let {
            children: a
          } = e;
          const t = v(),
            n = (0, r.useMemo)((() => ({
              ...t,
              hasProvider: !0
            })), [t]);
          return (0, f.jsx)(g.Provider, {
            value: n,
            children: a
          })
        },
        S = () => (0, r.useContext)(g);
      var w = t(331),
        R = t(841);
      const x = (0, r.createContext)(void 0),
        N = e => {
          let {
            checkUser: a,
            children: t
          } = e;
          const n = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, t] = (0, r.useState)([]), [n, i] = (0, r.useState)([]), [s, c] = (0, r.useState)(null), {
                data: o,
                loggedIn: u
              } = (0, R.useRockstarUser)(), l = (e, r) => {
                const n = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = r ?? {};
                    (0, w.track)({
                      ...e,
                      ...a
                    }), n.push(e)
                  }
                })), t([...a, ...n])
              };
              (0, r.useEffect)((() => {
                if (o && null !== u) {
                  const e = d(o);
                  n.length && e && l(n, e), c(e)
                } else e || n.length && l(n)
              }), [o, u, n]), (0, r.useEffect)((() => {
                const e = n.filter((e => -1 === a.indexOf(e)));
                i(e)
              }), [a]);
              const d = e => {
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
                  platforms_played: a.length ? a.join("|").toUpperCase() : void 0,
                  games_played: t.length ? t.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: r.length ? r.join("|").toUpperCase() : void 0
                }
              };
              return {
                track: e => {
                  if (null === u || !o || !s) {
                    const a = [...n];
                    return a.push({
                      ...e
                    }), i(a)
                  }
                  return (0, w.track)({
                    ...e,
                    ...s
                  })
                }
              }
            }(a),
            i = (0, r.useMemo)((() => n), [n, a]);
          return (0, f.jsx)(x.Provider, {
            value: i,
            children: t
          })
        },
        _ = {
          track: () => null
        },
        C = () => (0, r.useContext)(x) ?? _
    },
    244: e => {
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
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            s.has(e) || (s.add(e), (r[e] || new Set).forEach((function(e) {
              c.add(e)
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