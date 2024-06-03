! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "63119c45-aca3-43e4-9723-a1371f756afe", e._sentryDebugIdIdentifier = "sentry-dbid-63119c45-aca3-43e4-9723-a1371f756afe")
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
  [772], {
    72988: (e, t, n) => {
      "use strict";
      n.d(t, {
        c: () => r
      });
      var a = n(61076);
      const i = (0, n(25144).S_)(),
        r = (0, a.UT)(i)
    },
    15080: (e, t, n) => {
      "use strict";
      n.d(t, {
        R: () => p,
        c: () => y
      });
      var a = n(61076),
        i = n(25144);
      const r = (0, a.C2)("@rockstargames/modules-core-sc-user"),
        o = r("navOpenReactive", !1),
        s = e => o(e),
        c = r("jumpScMenuFocusReactive", !1),
        l = e => c(e),
        d = r("hasNotificationsReactive", !1),
        u = e => d(e),
        m = r("currentCharIdReactive", (0, i.U$)()?.currentCharId),
        f = e => m(e),
        g = r("selectedCharacterTupleReactive", null),
        v = e => g(e),
        p = r("rockstarIdReactive", null),
        k = r("charactersNeededReactive", null),
        h = e => k(e),
        b = r("userDataReactive", null),
        w = e => b(e),
        y = () => {
          const e = (0, a.gh)(k),
            t = (0, a.gh)(m),
            n = (0, a.gh)(o),
            i = (0, a.gh)(d),
            r = (0, a.gh)(g);
          return {
            charactersNeeded: e,
            currentCharId: t,
            hasNotifications: i,
            navOpen: n,
            userData: (0, a.gh)(b),
            selectedCharacterTuple: r,
            jumpScMenuFocus: (0, a.gh)(c),
            setCharactersNeeded: h,
            setCurrentCharId: f,
            setHasNotifications: u,
            setNavOpen: s,
            setSelectedCharacterTuple: v,
            setUserData: w,
            setJumpScMenuFocus: l
          }
        }
    },
    54420: (e, t, n) => {
      "use strict";
      n.d(t, {
        O0: () => r.c,
        ye: () => a.ye,
        yi: () => a.yi,
        of: () => i.c
      });
      var a = n(37949),
        i = n(15080),
        r = (n(61076), n(72988))
    },
    37949: (e, t, n) => {
      "use strict";
      n.d(t, {
        SV: () => S,
        iC: () => h,
        ye: () => N,
        yi: () => b
      });
      var a = n(51664),
        i = n(61076),
        r = n(25144),
        o = n(30116),
        s = n(15080);
      var c = n(14996),
        l = n.n(c),
        d = n(72988);
      const {
        graphEnv: u
      } = (0, r.S_)(), m = (0, i.mg)(u), f = () => {
        const e = (0, i.Wy)(),
          [t, n] = (0, a.useState)({
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
          [b, w] = (0, a.useState)(!1),
          [y, x] = (0, a.useState)(!1);
        return (0, a.useEffect)((() => {
          (async () => {
            const a = null === e ? null : !!e;
            if (a && !b) {
              u(!0), w(!0);
              const e = await p(),
                a = e?.data?.user?.id,
                i = await (async e => {
                  let {
                    pingBearer: t,
                    rockstarId: n
                  } = e;
                  const {
                    crews: a
                  } = await (0, r.s9)("crew/forMember", {
                    pingBearer: t,
                    query: {
                      userId: n
                    }
                  });
                  return a
                })({
                  pingBearer: v,
                  rockstarId: a
                }),
                o = await (async e => {
                  let {
                    pingBearer: t,
                    nickname: n,
                    rockstarId: a
                  } = e;
                  const i = [],
                    o = await (0, r.s9)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  if (await (o?.platforms?.reduce((async (e, n) => {
                      if (await e, ["ps3", "xbox", "xbox360"].includes(n)) return;
                      const a = await (0, r.s9)(`games/gtao/characters?platform=${n}`, {
                        pingBearer: t
                      });
                      a?.status && a?.result?.map((e => {
                        const {
                          stats: t
                        } = e, {
                          overview: a
                        } = t, {
                          rank: r
                        } = a;
                        if ("0" === r.value) return;
                        const o = ["ps4", "ps5"].includes(n) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                        return i.push({
                          ...e,
                          mugshotUrl: o,
                          platform: n
                        }), e
                      }))
                    }), Promise.resolve())), !i.length) return i;
                  const {
                    status: s,
                    accounts: c
                  } = await (0, r.s9)(`profile/getprofile?nickname=${n}&maxFriends=0`, {
                    pingBearer: t
                  });
                  return s && c.length ? (c.forEach((e => {
                    const {
                      rockstarAccount: t,
                      linkedAccounts: r
                    } = e;
                    if (t?.rockstarId !== a) return;
                    const o = n;
                    let s = "",
                      c = "";
                    r?.map((e => ("xbl" === e?.onlineService ? s = e.userName : "np" === e?.onlineService && (c = e.userName), e))), i.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), i.map(((e, t) => (e.platformUsername = o, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = c || o), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = s || o), e)))
                  })), i) : i
                })({
                  pingBearer: v,
                  nickname: e?.data?.user?.nickname,
                  rockstarId: a
                }),
                c = {
                  ...t,
                  ...e?.data?.user,
                  crews: i,
                  characters: {
                    gtao: o
                  }
                };
              u(!1), n(c), h(!0), (0, s.R)(a)
            }
            if (!1 === a && !y) {
              try {
                await (async e => {
                  let {
                    token: t,
                    tokenPingExpires: n
                  } = e;
                  const a = {
                      method: "POST",
                      body: `fingerprint=${await l().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    },
                    i = await fetch((0, d.c)().silentCheck, a);
                  if (200 !== i.status) return void t(!1);
                  const r = await i.json(),
                    o = `${(0,d.c)().gateway}?code=${r}`,
                    s = await fetch(o, {
                      credentials: "include"
                    }),
                    {
                      bearerToken: c,
                      tokenExpiresTime: u
                    } = await s.json();
                  return t(c), n(u), c
                })({
                  token: f,
                  tokenPingExpires: g
                })
              } catch (e) {}
              x(!0)
            }!1 === a && y && (w(!0), h(!1), u(!1)), null === e && v()
          })()
        }), [e, b, y]), {
          data: t,
          loading: c,
          loggedIn: k
        }
      };
      var g = n(95240);
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
            children: t
          } = e;
          const n = f(),
            i = (0, a.useMemo)((() => ({
              ...n,
              hasProvider: !0
            })), [n]);
          return (0, g.jsx)(k.Provider, {
            value: i,
            children: t
          })
        },
        b = () => (0, a.useContext)(k);
      n(15908);
      var w = n(99928);
      n(57013);
      var y = n(54420);
      const x = (0, a.createContext)(void 0),
        S = e => {
          let {
            checkUser: t,
            children: n
          } = e;
          const i = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, n] = (0, a.useState)([]), [i, r] = (0, a.useState)([]), [o, s] = (0, a.useState)(null), {
                data: c,
                loggedIn: l
              } = (0, y.yi)(), {
                currentCharId: d
              } = (0, y.of)(), u = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
                return (0, a.useMemo)((() => {
                  const a = e?.characters?.[n];
                  return "1" === (a?.[t]?.stats?.overview?.hasGtaPlus?.value ?? "0")
                }), [e, n, t])
              }(c, d), m = (e, a) => {
                const i = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = a ?? {};
                    (0, w.c)({
                      ...e,
                      ...t
                    }), i.push(e)
                  }
                })), n([...t, ...i])
              };
              (0, a.useEffect)((() => {
                if (c && null !== l) {
                  const e = f(c);
                  i.length && e && m(i, e), s(e)
                } else e || i.length && m(i)
              }), [c, l, i]), (0, a.useEffect)((() => {
                const e = i.filter((e => -1 === t.indexOf(e)));
                r(e)
              }), [t]);
              const f = e => {
                const t = [],
                  n = [],
                  a = [];
                return Object.keys(e.characters).forEach((i => {
                  e.characters[i].length && (n.push(i), e.characters[i].forEach((e => {
                    "gtao" === i && (a.includes(e.platform) || a.push(e.platform)), t.includes(e.platform) || t.push(e.platform)
                  })))
                })), {
                  member_id: e.id ?? void 0,
                  login_state: l ?? !1,
                  gta_plus_active: l ? Boolean(u) : void 0,
                  platforms_played: t.length ? t.join("|").toUpperCase() : void 0,
                  games_played: n.length ? n.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.join("|").toUpperCase() : void 0
                }
              };
              return {
                track: e => {
                  if (null === l || !c || !o) {
                    const t = [...i];
                    return t.push({
                      ...e
                    }), r(t)
                  }
                  return (0, w.c)({
                    ...e,
                    ...o
                  })
                }
              }
            }(t),
            r = (0, a.useMemo)((() => i), [i, t]);
          return (0, g.jsx)(x.Provider, {
            value: r,
            children: n
          })
        },
        _ = {
          track: () => null
        },
        N = () => (0, a.useContext)(x) ?? _
    },
    99928: (e, t, n) => {
      "use strict";
      n.d(t, {
        c: () => c
      });
      var a = n(15908),
        i = n.n(a);
      const r = (0, n(53592).c)(),
        o = r?.id,
        s = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        c = e => {
          const t = {
            ...e,
            environment: o,
            display_type: s
          };
          i().dataLayer({
            dataLayer: t
          })
        }
    },
    25144: (e, t, n) => {
      "use strict";
      n.d(t, {
        a7: () => B,
        s9: () => C.c,
        KS: () => k,
        kh: () => w,
        I$: () => y,
        S_: () => D.c,
        UN: () => h,
        U$: () => F,
        G6: () => T,
        _g: () => I._,
        Qz: () => E,
        sL: () => V,
        y_: () => x.y_,
        kJ: () => x.kJ,
        i0: () => x.i0,
        ym: () => M,
        bk: () => A,
        S6: () => r,
        au: () => c,
        Ux: () => f
      });
      var a = n(99928),
        i = n(95240);
      const r = e => t => ((e, t) => (0, i.jsx)(e, {
        ...t,
        gtmTrack: e => {
          (0, a.c)(e)
        }
      }))(e, t);
      var o = n(61076),
        s = n(55806);
      const c = e => t => ((e, t) => {
        const n = (0, o.gh)(s.EH);
        return (0, i.jsx)(e, {
          ...t,
          locale: n
        })
      })(e, t);
      var l = n(51664),
        d = n(73660),
        u = n.n(d),
        m = n(95532);
      const f = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return n => ((e, t, n) => {
          const a = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
            const {
              data: t
            } = (0, o.UL)(m.Translations, {
              variables: {
                config: e
              }
            });
            return t ? e => t?.translations.find((t => t.key === e))?.value ?? e : null
          }(n);
          return a ? (0, i.jsx)(e, {
            ...t,
            t: a
          }) : null
        })(e, n, t)
      };
      class g {
        constructor(e, t, n) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = a
        }
      }
      const v = Object.freeze({
          pc: new g("pc", "PC", 8),
          ps3: new g("ps3", "PlayStation 3", 2),
          ps4: new g("ps4", "PlayStation 4", 11),
          ps5: new g("ps5", "PlayStation 5", 20),
          xbox360: new g("xbox360", "Xbox 360", 1),
          xboxone: new g("xboxone", "Xbox One", 12),
          xboxsx: new g("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new g("switch", "Nintendo Switch™", 18)
        }),
        p = Object.freeze(Object.values(v));

      function k(e) {
        if (!e) return;
        if (e instanceof g) return e;
        const t = e.toString().toLowerCase();
        return p.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const h = e => e.keys().forEach(e),
        b = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        w = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return b.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        y = () => [v.xboxsx.name, v.ps5.name];
      var x = n(94532);
      const S = (0, o.C2)("@rockstargames/utils")("bodyIsScrollableReactive", !0),
        _ = e => S(e),
        N = "data-disallow-body-scroll",
        E = () => {
          const e = (0, o.gh)(S);
          return (0, l.useEffect)((() => {
            e ? document.documentElement.removeAttribute(N) : document.documentElement.setAttribute(N, "")
          }), [e]), {
            bodyIsScrollable: e,
            setBodyIsScrollable: _
          }
        };
      var C = n(28152),
        D = n(42991),
        I = n(76772);
      const T = e => {
          const t = u().clone(e);
          return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], t
        },
        j = "rockstar-games-web";
      let O;
      try {
        const e = window.localStorage.getItem(j);
        O = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        O = {}
      }
      const F = (0, o.UT)(O),
        U = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const a = {
            ...F() ?? {}
          };
          return a[t] = n, null === n && delete a[t], window.localStorage.setItem(j, JSON.stringify(a)), F(a), a
        },
        M = () => ({
          lsSettings: (0, o.gh)(F),
          settingsReactive: F,
          mutateLSSettings: U
        });
      n(33820);
      const R = {
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
        L = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = R;
          return Object.keys(R).map((t => {
            const {
              min: a,
              max: i
            } = R[t], r = e >= a && e <= i, o = e >= a;
            n[t] = {
              activeExact: r,
              activeMin: o,
              min: a,
              max: i
            }
          })), {
            isMobile: e < R.sm.min,
            isTablet: e < R.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        P = (0, l.createContext)(L()),
        {
          Consumer: z
        } = P,
        $ = (0, o.UT)(L()),
        B = e => {
          let {
            children: t
          } = e;
          const n = (0, o.gh)($);
          return (0, l.useEffect)((() => {
            const e = () => {
              $(L())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, i.jsx)(P.Provider, {
            value: n,
            children: t
          })
        },
        A = () => (0, l.useContext)(P);
      n(2148);
      const q = (0, l.createContext)({}),
        V = () => (0, l.useContext)(q)
    },
    30116: e => {
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

      function n(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && t.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, t)
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
      var a = {};

      function i(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == t) return a
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          n(e, t), a[e.name.value] = t
        }
      })), e.exports = t, e.exports.userData = function(e, t) {
        var n = {
          kind: e.kind,
          definitions: [i(e, t)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var r = a[t] || new Set,
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
        return o.forEach((function(t) {
          var a = i(e, t);
          a && n.definitions.push(a)
        })), n
      }(t, "userData")
    },
    95532: e => {
      var t = {
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

      function n(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && t.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, t)
        }))
      }
      t.loc.source = {
        body: "query Translations($locale: String!, $config: String!) {\n    translations(locale: $locale, config: $config) {\n        key\n        value\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function i(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == t) return a
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          n(e, t), a[e.name.value] = t
        }
      })), e.exports = t, e.exports.Translations = function(e, t) {
        var n = {
          kind: e.kind,
          definitions: [i(e, t)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var r = a[t] || new Set,
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
        return o.forEach((function(t) {
          var a = i(e, t);
          a && n.definitions.push(a)
        })), n
      }(t, "Translations")
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