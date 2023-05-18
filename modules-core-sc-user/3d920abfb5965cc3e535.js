(self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [330], {
    973: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => i
      });
      var t = n(859);
      const r = (0, n(929).getScConfigForOrigin)(),
        i = (0, t.makeVar)(r)
    },
    963: (e, a, n) => {
      "use strict";
      n.d(a, {
        R: () => m,
        Z: () => v
      });
      var t = n(859);
      const r = (0, t.makeVar)(!1),
        i = e => r(e),
        s = (0, t.makeVar)(!1),
        c = e => s(e),
        o = (0, t.makeVar)(null),
        u = e => o(e),
        l = (0, t.makeVar)(null),
        d = e => l(e),
        m = (0, t.makeVar)(null),
        k = (0, t.makeVar)(null),
        f = e => k(e),
        v = () => {
          const e = (0, t.useReactiveVar)(k),
            a = (0, t.useReactiveVar)(o),
            n = (0, t.useReactiveVar)(r);
          return {
            charactersNeeded: e,
            currentCharId: a,
            hasNotifications: (0, t.useReactiveVar)(s),
            navOpen: n,
            selectedCharacterTuple: (0, t.useReactiveVar)(l),
            setCharactersNeeded: f,
            setCurrentCharId: u,
            setHasNotifications: c,
            setNavOpen: i,
            setSelectedCharacterTuple: d
          }
        }
    },
    330: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        RockstarUserProvider: () => v,
        useRockstarUser: () => p
      });
      var t = n(822),
        r = n(859),
        i = n(217),
        s = n(963),
        c = n(929);
      var o = n(989),
        u = n.n(o),
        l = n(973);
      const d = () => {
        const e = (0, r.useRockstarToken)(),
          [a, n] = (0, t.useState)({
            id: null,
            avatar: "",
            profile_link: "",
            nickname: "",
            crews: [],
            characters: {
              gtao: []
            }
          }),
          [o, d] = (0, t.useState)(!0),
          [m, , k] = (0, r.useRockstarTokenReactive)(),
          f = (0, r.useRockstarTokenPing)(),
          {
            refetch: v
          } = (0, r.useQuery)(i.userData, {
            skip: !0
          }),
          [p, g] = (0, t.useState)(null),
          [h, w] = (0, t.useState)(!1),
          [S, x] = (0, t.useState)(!1);
        return (0, t.useEffect)((() => {
          (async () => {
            const t = null === e ? null : !!e;
            if (t && !h) {
              d(!0), w(!0);
              const e = await v(),
                t = e?.data?.user?.id,
                r = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: n
                  } = e;
                  const {
                    crews: t
                  } = await (0, c.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: n
                    }
                  });
                  return t
                })({
                  pingBearer: f,
                  rockstarId: t
                }),
                i = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: n,
                    rockstarId: t
                  } = e;
                  const r = [],
                    i = await (0, c.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  if (await (i?.platforms?.reduce((async (e, n) => {
                      if (await e, ["ps3", "xbox", "xbox360"].includes(n)) return;
                      const t = await (0, c.coreScApiFetch)(`games/gtao/characters?platform=${n}`, {
                        pingBearer: a
                      });
                      t?.status && t?.result?.map((e => {
                        const {
                          activeCharacter: a,
                          stats: t
                        } = e, {
                          overview: i
                        } = t, {
                          rank: s
                        } = i;
                        if ("0" === s.value || !a) return;
                        const c = ["ps4", "ps5"].includes(n) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return r.push({
                          ...e,
                          platform: n,
                          mugshotUrl: c
                        }), e
                      }))
                    }), Promise.resolve())), !r.length) return r;
                  const {
                    status: s,
                    accounts: o
                  } = await (0, c.coreScApiFetch)(`profile/getprofile?nickname=${n}&maxFriends=0`, {
                    pingBearer: a
                  });
                  return s && o.length ? (o.forEach((e => {
                    const {
                      rockstarAccount: a,
                      linkedAccounts: i
                    } = e;
                    if (a?.rockstarId !== t) return;
                    const s = n;
                    let c = "",
                      o = "";
                    i?.map((e => ("xbl" === e?.onlineService ? c = e.userName : "np" === e?.onlineService && (o = e.userName), e))), r.map(((e, a) => (e.platformUsername = s, e.index = a, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = o || s), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = c || s), e)))
                  })), r) : r
                })({
                  pingBearer: f,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: t
                }),
                o = {
                  ...a,
                  ...e?.data?.user,
                  crews: r,
                  characters: {
                    gtao: i
                  }
                };
              d(!1), n(o), g(!0), (0, s.R)(t)
            }!1 !== t || S || (await (async e => {
              let {
                token: a,
                tokenPingExpires: n
              } = e;
              const t = {
                  method: "POST",
                  body: `fingerprint=${await u().get().then((e=>e))}`,
                  credentials: "include",
                  headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                  }
                },
                r = await fetch((0, l.Z)().silentCheck, t);
              if (200 !== r.status) return void a(!1);
              const i = await r.json(),
                s = `${(0,l.Z)().gateway}?code=${i}`,
                c = await fetch(s, {
                  credentials: "include"
                }),
                {
                  bearerToken: o,
                  tokenExpiresTime: d
                } = await c.json();
              return a(o), n(d), o
            })({
              token: m,
              tokenPingExpires: k
            }), x(!0)), !1 === t && S && (w(!0), g(!1), d(!1)), null === e && f()
          })()
        }), [e, h, S]), {
          data: a,
          loading: o,
          loggedIn: p
        }
      };
      var m = n(706);
      const k = {
          data: null,
          characters: {
            gtao: []
          },
          loggedIn: !0
        },
        f = (0, t.createContext)(k),
        v = e => {
          let {
            children: a
          } = e;
          const n = d(),
            r = (0, t.useMemo)((() => ({
              ...n
            })), [n]);
          return (0, m.jsx)(f.Provider, {
            value: r,
            children: a
          })
        },
        p = () => (0, t.useContext)(f)
    },
    217: e => {
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
                    value: "dob"
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
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 206
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      a.loc.source = {
        body: "query userData {\n    user: userData {\n        id\n        avatar\n        nickname\n        profile_link\n        dob\n        bearer_token_expired\n        agegate_pass @client\n        logged_in @client\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var t = e.definitions[n];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.userData = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = t[a] || new Set,
          s = new Set,
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            s.has(e) || (s.add(e), (t[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var t = r(e, a);
          t && n.definitions.push(t)
        })), n
      }(a, "userData")
    }
  }
]);