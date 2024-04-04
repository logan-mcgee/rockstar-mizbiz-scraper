! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e1e74473-ce9e-4967-b1fb-c4328369c73f", e._sentryDebugIdIdentifier = "sentry-dbid-e1e74473-ce9e-4967-b1fb-c4328369c73f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [541], {
    72988: (e, n, t) => {
      "use strict";
      t.d(n, {
        c: () => r
      });
      var a = t(61076);
      const i = (0, t(71612).S_)(),
        r = (0, a.UT)(i)
    },
    15080: (e, n, t) => {
      "use strict";
      t.d(n, {
        R: () => p,
        c: () => w
      });
      var a = t(61076),
        i = t(71612);
      const r = (0, a.C2)("@rockstargames/modules-core-sc-user"),
        o = r("navOpenReactive", !1),
        s = e => o(e),
        c = r("jumpScMenuFocusReactive", !1),
        d = e => c(e),
        l = r("hasNotificationsReactive", !1),
        u = e => l(e),
        m = r("currentCharIdReactive", (0, i.U$)()?.currentCharId),
        f = e => m(e),
        g = r("selectedCharacterTupleReactive", null),
        v = e => g(e),
        p = r("rockstarIdReactive", null),
        k = r("charactersNeededReactive", null),
        h = e => k(e),
        b = r("userDataReactive", null),
        y = e => b(e),
        w = () => {
          const e = (0, a.gh)(k),
            n = (0, a.gh)(m),
            t = (0, a.gh)(o),
            i = (0, a.gh)(l),
            r = (0, a.gh)(g);
          return {
            charactersNeeded: e,
            currentCharId: n,
            hasNotifications: i,
            navOpen: t,
            userData: (0, a.gh)(b),
            selectedCharacterTuple: r,
            jumpScMenuFocus: (0, a.gh)(c),
            setCharactersNeeded: h,
            setCurrentCharId: f,
            setHasNotifications: u,
            setNavOpen: s,
            setSelectedCharacterTuple: v,
            setUserData: y,
            setJumpScMenuFocus: d
          }
        }
    },
    54420: (e, n, t) => {
      "use strict";
      t.d(n, {
        O0: () => r.c,
        ye: () => a.ye,
        yi: () => a.yi,
        of: () => i.c
      });
      var a = t(37949),
        i = t(15080),
        r = (t(61076), t(72988))
    },
    37949: (e, n, t) => {
      "use strict";
      t.d(n, {
        SV: () => x,
        iC: () => h,
        ye: () => N,
        yi: () => b
      });
      var a = t(51664),
        i = t(61076),
        r = t(71612),
        o = t(30116),
        s = t(15080);
      var c = t(14996),
        d = t.n(c),
        l = t(72988);
      const {
        graphEnv: u
      } = (0, r.S_)(), m = (0, i.mg)(u), f = () => {
        const e = (0, i.Wy)(),
          [n, t] = (0, a.useState)({
            id: null,
            avatar: "",
            profile_link: "",
            nickname: "",
            crews: [],
            characters: {
              gtao: []
            }
          }),
          [c, u] = (0, a.useState)(!0),
          [f, , g] = (0, i.vb)(),
          v = (0, i.aI)(),
          {
            refetch: p
          } = (0, i.UL)(o.userData, {
            skip: !0,
            context: {
              uri: m
            }
          }),
          [k, h] = (0, a.useState)(null),
          [b, y] = (0, a.useState)(!1),
          [w, S] = (0, a.useState)(!1);
        return (0, a.useEffect)((() => {
          (async () => {
            const a = null === e ? null : !!e;
            if (a && !b) {
              u(!0), y(!0);
              const e = await p(),
                a = e?.data?.user?.id,
                i = await (async e => {
                  let {
                    pingBearer: n,
                    rockstarId: t
                  } = e;
                  const {
                    crews: a
                  } = await (0, r.s9)("crew/forMember", {
                    pingBearer: n,
                    query: {
                      userId: t
                    }
                  });
                  return a
                })({
                  pingBearer: v,
                  rockstarId: a
                }),
                o = await (async e => {
                  let {
                    pingBearer: n,
                    nickname: t,
                    rockstarId: a
                  } = e;
                  const i = [],
                    o = await (0, r.s9)("profile/playedplatforms?game=gtav", {
                      pingBearer: n
                    });
                  if (await (o?.platforms?.reduce((async (e, t) => {
                      if (await e, ["ps3", "xbox", "xbox360"].includes(t)) return;
                      const a = await (0, r.s9)(`games/gtao/characters?platform=${t}`, {
                        pingBearer: n
                      });
                      a?.status && a?.result?.map((e => {
                        const {
                          stats: n
                        } = e, {
                          overview: a
                        } = n, {
                          rank: r
                        } = a;
                        if ("0" === r.value) return;
                        const o = ["ps4", "ps5"].includes(t) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return i.push({
                          ...e,
                          mugshotUrl: o,
                          platform: t
                        }), e
                      }))
                    }), Promise.resolve())), !i.length) return i;
                  const {
                    status: s,
                    accounts: c
                  } = await (0, r.s9)(`profile/getprofile?nickname=${t}&maxFriends=0`, {
                    pingBearer: n
                  });
                  return s && c.length ? (c.forEach((e => {
                    const {
                      rockstarAccount: n,
                      linkedAccounts: r
                    } = e;
                    if (n?.rockstarId !== a) return;
                    const o = t;
                    let s = "",
                      c = "";
                    r?.map((e => ("xbl" === e?.onlineService ? s = e.userName : "np" === e?.onlineService && (c = e.userName), e))), i.sort(((e, n) => Number(n.activeCharacter) - Number(e.activeCharacter))), i.map(((e, n) => (e.platformUsername = o, e.index = n, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = c || o), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = s || o), e)))
                  })), i) : i
                })({
                  pingBearer: v,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: a
                }),
                c = {
                  ...n,
                  ...e?.data?.user,
                  crews: i,
                  characters: {
                    gtao: o
                  }
                };
              u(!1), t(c), h(!0), (0, s.R)(a)
            }
            if (!1 === a && !w) {
              try {
                await (async e => {
                  let {
                    token: n,
                    tokenPingExpires: t
                  } = e;
                  const a = {
                      method: "POST",
                      body: `fingerprint=${await d().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    },
                    i = await fetch((0, l.c)().silentCheck, a);
                  if (200 !== i.status) return void n(!1);
                  const r = await i.json(),
                    o = `${(0,l.c)().gateway}?code=${r}`,
                    s = await fetch(o, {
                      credentials: "include"
                    }),
                    {
                      bearerToken: c,
                      tokenExpiresTime: u
                    } = await s.json();
                  return n(c), t(u), c
                })({
                  token: f,
                  tokenPingExpires: g
                })
              } catch (e) {}
              S(!0)
            }!1 === a && w && (y(!0), h(!1), u(!1)), null === e && v()
          })()
        }), [e, b, w]), {
          data: n,
          loading: c,
          loggedIn: k
        }
      };
      var g = t(95240);
      const v = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        p = "user-context",
        k = window?.[p] ?? (window[p] = (0, a.createContext)(v)),
        h = e => {
          let {
            children: n
          } = e;
          const t = f(),
            i = (0, a.useMemo)((() => ({
              ...t,
              hasProvider: !0
            })), [t]);
          return (0, g.jsx)(k.Provider, {
            value: i,
            children: n
          })
        },
        b = () => (0, a.useContext)(k);
      t(15908);
      var y = t(99928);
      t(57013);
      var w = t(54420);
      const S = (0, a.createContext)(void 0),
        x = e => {
          let {
            checkUser: n,
            children: t
          } = e;
          const i = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [n, t] = (0, a.useState)([]), [i, r] = (0, a.useState)([]), [o, s] = (0, a.useState)(null), {
                data: c,
                loggedIn: d
              } = (0, w.yi)(), {
                currentCharId: l
              } = (0, w.of)(), u = function(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
                return (0, a.useMemo)((() => {
                  const a = e?.characters?.[t];
                  return "1" === (a?.[n]?.stats?.overview?.hasGtaPlus?.value ?? "0")
                }), [e, t, n])
              }(c, l), m = (e, a) => {
                const i = [];
                e.forEach((e => {
                  if (-1 === n.indexOf(e)) {
                    const n = a ?? {};
                    (0, y.c)({
                      ...e,
                      ...n
                    }), i.push(e)
                  }
                })), t([...n, ...i])
              };
              (0, a.useEffect)((() => {
                if (c && null !== d) {
                  const e = f(c);
                  i.length && e && m(i, e), s(e)
                } else e || i.length && m(i)
              }), [c, d, i]), (0, a.useEffect)((() => {
                const e = i.filter((e => -1 === n.indexOf(e)));
                r(e)
              }), [n]);
              const f = e => {
                const n = [],
                  t = [],
                  a = [];
                return Object.keys(e.characters).forEach((i => {
                  e.characters[i].length && (t.push(i), e.characters[i].forEach((e => {
                    "gtao" === i && (a.includes(e.platform) || a.push(e.platform)), n.includes(e.platform) || n.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: d ?? !1,
                  gta_plus_active: d ? Boolean(u) : void 0,
                  platforms_played: n.length ? n.join("|").toUpperCase() : void 0,
                  games_played: t.length ? t.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.join("|").toUpperCase() : void 0
                }
              };
              return {
                track: e => {
                  if (null === d || !c || !o) {
                    const n = [...i];
                    return n.push({
                      ...e
                    }), r(n)
                  }
                  return (0, y.c)({
                    ...e,
                    ...o
                  })
                }
              }
            }(n),
            r = (0, a.useMemo)((() => i), [i, n]);
          return (0, g.jsx)(S.Provider, {
            value: r,
            children: t
          })
        },
        _ = {
          track: () => null
        },
        N = () => (0, a.useContext)(S) ?? _
    },
    99928: (e, n, t) => {
      "use strict";
      t.d(n, {
        c: () => c
      });
      var a = t(15908),
        i = t.n(a);
      const r = (0, t(53592).c)(),
        o = r?.id,
        s = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        c = e => {
          const n = {
            ...e,
            environment: o,
            display_type: s
          };
          i().dataLayer({
            dataLayer: n
          })
        }
    },
    71612: (e, n, t) => {
      "use strict";
      t.d(n, {
        a7: () => O,
        s9: () => w.c,
        kh: () => p,
        S_: () => S.c,
        UN: () => g,
        U$: () => C,
        G6: () => _,
        _g: () => x._,
        Qz: () => y,
        sL: () => P,
        y_: () => k.y_,
        kJ: () => k.kJ,
        ym: () => I,
        bk: () => R,
        S6: () => r,
        au: () => c,
        Ux: () => f
      });
      var a = t(99928),
        i = t(95240);
      const r = e => n => ((e, n) => (0, i.jsx)(e, {
        ...n,
        gtmTrack: e => {
          (0, a.c)(e)
        }
      }))(e, n);
      var o = t(61076),
        s = t(55806);
      const c = e => n => ((e, n) => {
        const t = (0, o.gh)(s.EH);
        return (0, i.jsx)(e, {
          ...n,
          locale: t
        })
      })(e, n);
      var d = t(51664),
        l = t(73660),
        u = t.n(l),
        m = t(95532);
      const f = function(e) {
          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return t => ((e, n, t) => {
            const a = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const {
                data: n
              } = (0, o.UL)(m.Translations, {
                variables: {
                  config: e
                }
              });
              return n ? e => n?.translations.find((n => n.key === e))?.value ?? e : null
            }(t);
            return a ? (0, i.jsx)(e, {
              ...n,
              t: a
            }) : null
          })(e, t, n)
        },
        g = e => e.keys().forEach(e),
        v = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        p = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return v.filter((n => n.key === (e ? "prod" : "dev")))[0]?.path ?? null
        };
      var k = t(55576);
      const h = (0, o.UT)(!0),
        b = "data-disallow-body-scroll",
        y = () => {
          const e = (0, o.gh)(h);
          return (0, d.useEffect)((() => {
            e ? document.documentElement.removeAttribute(b) : document.documentElement.setAttribute(b, "")
          }), [e]), {
            bodyIsScrollable: e,
            setBodyIsScrollable: h
          }
        };
      var w = t(28152),
        S = t(42991),
        x = t(76772);
      const _ = e => {
          const n = u().clone(e);
          return n?.["margin-top"] && (n.marginTop = n["margin-top"]), n?.["margin-bottom"] && (n.marginBottom = n["margin-bottom"]), n?.["margin-left"] && (n.marginLeft = n["margin-left"]), n?.["margin-right"] && (n.marginRight = n["margin-right"]), n?.["object-fit"] && (n.objectFit = n["object-fit"]), delete n?.["margin-top"], delete n?.["margin-bottom"], delete n?.["margin-right"], delete n?.["margin-left"], delete n?.["object-fit"], n
        },
        N = "rockstar-games-web";
      let E;
      try {
        const e = window.localStorage.getItem(N);
        E = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        E = {}
      }
      const C = (0, o.UT)(E),
        D = e => {
          let {
            key: n,
            value: t
          } = e;
          if (null == n) throw Error("You have to specify a key and a value.");
          const a = {
            ...C() ?? {}
          };
          return a[n] = t, null === t && delete a[n], window.localStorage.setItem(N, JSON.stringify(a)), C(a), a
        },
        I = () => ({
          lsSettings: (0, o.gh)(C),
          settingsReactive: C,
          mutateLSSettings: D
        });
      t(33820);
      const T = {
          xxs: {
            min: 0,
            max: 479
          },
          xs: {
            min: 480,
            max: 767
          },
          sm: {
            min: 768,
            max: 991
          },
          md: {
            min: 992,
            max: 1199
          },
          lg: {
            min: 1200,
            max: 1439
          },
          xl: {
            min: 1440,
            max: 1919
          },
          xxl: {
            min: 1920,
            max: 99999
          }
        },
        U = () => {
          const e = window.innerWidth,
            n = window.innerHeight,
            t = T;
          return Object.keys(T).map((n => {
            const {
              min: a,
              max: i
            } = T[n], r = e >= a && e <= i, o = e >= a;
            t[n] = {
              activeExact: r,
              activeMin: o,
              min: a,
              max: i
            }
          })), {
            isMobile: e <= T.sm.min,
            isTablet: e <= T.md.max,
            breakpoints: t,
            windowWidth: e,
            windowHeight: n
          }
        },
        F = (0, d.createContext)(U()),
        {
          Consumer: j
        } = F,
        M = (0, o.UT)(U()),
        O = e => {
          let {
            children: n
          } = e;
          const t = (0, o.gh)(M);
          return (0, d.useEffect)((() => {
            const e = () => {
              M(U())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, i.jsx)(F.Provider, {
            value: t,
            children: n
          })
        },
        R = () => (0, d.useContext)(F);
      t(2148);
      const L = (0, d.createContext)({}),
        P = () => (0, d.useContext)(L)
    },
    30116: e => {
      var n = {
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

      function t(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && n.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, n)
        }))
      }
      n.loc.source = {
        body: "query userData {\n    user: userData {\n        id\n        avatar\n        nickname\n        profile_link\n        isAMinor\n        bearer_token_expired\n        agegate_pass @client\n        logged_in @client\n        subscribed\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function i(e, n) {
        for (var t = 0; t < e.definitions.length; t++) {
          var a = e.definitions[t];
          if (a.name && a.name.value == n) return a
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          t(e, n), a[e.name.value] = n
        }
      })), e.exports = n, e.exports.userData = function(e, n) {
        var t = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = a[n] || new Set,
          o = new Set,
          s = new Set;
        for (r.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var c = s;
          s = new Set, c.forEach((function(e) {
            o.has(e) || (o.add(e), (a[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var a = i(e, n);
          a && t.definitions.push(a)
        })), t
      }(n, "userData")
    },
    95532: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Translations"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "config"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "translations"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "config"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "config"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "value"
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
          end: 144
        }
      };

      function t(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && n.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, n)
        }))
      }
      n.loc.source = {
        body: "query Translations($locale: String!, $config: String!) {\n    translations(locale: $locale, config: $config) {\n        key\n        value\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function i(e, n) {
        for (var t = 0; t < e.definitions.length; t++) {
          var a = e.definitions[t];
          if (a.name && a.name.value == n) return a
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          t(e, n), a[e.name.value] = n
        }
      })), e.exports = n, e.exports.Translations = function(e, n) {
        var t = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = a[n] || new Set,
          o = new Set,
          s = new Set;
        for (r.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var c = s;
          s = new Set, c.forEach((function(e) {
            o.has(e) || (o.add(e), (a[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var a = i(e, n);
          a && t.definitions.push(a)
        })), t
      }(n, "Translations")
    },
    54604: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    13620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    62264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    740: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);