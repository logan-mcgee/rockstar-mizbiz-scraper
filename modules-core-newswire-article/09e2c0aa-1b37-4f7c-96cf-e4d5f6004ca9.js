! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "09e2c0aa-1b37-4f7c-96cf-e4d5f6004ca9", e._sentryDebugIdIdentifier = "sentry-dbid-09e2c0aa-1b37-4f7c-96cf-e4d5f6004ca9")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [2437], {
    39494: e => {
      function t(e) {
        return e && e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
      }

      function n(e) {
        return e
      }

      function a(e, a) {
        const r = (a = a || {}).delimiter || ".",
          i = a.maxDepth,
          o = a.transformKey || n,
          s = {};
        return function e(n, c, l) {
          l = l || 1, Object.keys(n).forEach((function(u) {
            const d = n[u],
              f = a.safe && Array.isArray(d),
              m = Object.prototype.toString.call(d),
              p = t(d),
              v = "[object Object]" === m || "[object Array]" === m,
              g = c ? c + r + o(u) : o(u);
            if (!f && !p && v && Object.keys(d).length && (!a.maxDepth || l < i)) return e(d, g, l + 1);
            s[g] = d
          }))
        }(e), s
      }
      e.exports = a, a.flatten = a, a.unflatten = function e(r, i) {
        const o = (i = i || {}).delimiter || ".",
          s = i.overwrite || !1,
          c = i.transformKey || n,
          l = {};
        if (t(r) || "[object Object]" !== Object.prototype.toString.call(r)) return r;

        function u(e) {
          const t = Number(e);
          return isNaN(t) || -1 !== e.indexOf(".") || i.object ? e : t
        }
        return r = Object.keys(r).reduce((function(e, t) {
          const n = Object.prototype.toString.call(r[t]);
          return "[object Object]" !== n && "[object Array]" !== n || function(e) {
            const t = Object.prototype.toString.call(e),
              n = "[object Object]" === t;
            return !e || ("[object Array]" === t ? !e.length : n ? !Object.keys(e).length : void 0)
          }(r[t]) ? (e[t] = r[t], e) : function(e, t, n) {
            return Object.keys(n).reduce((function(t, a) {
              return t[e + o + a] = n[a], t
            }), t)
          }(t, e, a(r[t], i))
        }), {}), Object.keys(r).forEach((function(t) {
          const n = t.split(o).map(c);
          let a = u(n.shift()),
            d = u(n[0]),
            f = l;
          for (; void 0 !== d;) {
            if ("__proto__" === a) return;
            const e = Object.prototype.toString.call(f[a]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!s && !t && void 0 !== f[a]) return;
            (s && !t || !s && null == f[a]) && (f[a] = "number" != typeof d || i.object ? {} : []), f = f[a], n.length > 0 && (a = u(n.shift()), d = u(n[0]))
          }
          f[a] = e(r[t], i)
        })), l
      }
    },
    93075: (e, t, n) => {
      "use strict";
      n.d(t, {
        Tz: () => S,
        h: () => D,
        F3: () => j,
        Wx: () => w,
        F$: () => b
      });
      var a = n(62229),
        r = n(95966);
      const i = (0, r.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, r.makeVar)(null)
        }),
        o = e => i(e),
        s = (0, r.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, r.makeVar)(!1)
        }),
        c = e => s(e),
        l = (0, r.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, r.makeVar)(!1)
        }),
        u = e => l(e),
        d = (0, r.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, r.makeVar)((0, r.lsSettingsReactive)()?.currentCharId)
        }),
        f = e => d(e),
        m = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        p = e => m(e),
        v = ((0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }), (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(null)
        })),
        g = e => v(e),
        k = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        y = e => k(e),
        b = () => {
          const e = (0, r.useReactiveVar)(v),
            t = (0, r.useReactiveVar)(d),
            n = (0, r.useReactiveVar)(i),
            a = (0, r.useReactiveVar)(l),
            b = (0, r.useReactiveVar)(m);
          return {
            charactersNeeded: e,
            currentCharId: t,
            hasNotifications: a,
            navOpen: n,
            userData: (0, r.useReactiveVar)(k),
            selectedCharacterTuple: b,
            jumpScMenuFocus: (0, r.useReactiveVar)(s),
            setCharactersNeeded: g,
            setCurrentCharId: f,
            setHasNotifications: u,
            setNavOpen: o,
            setSelectedCharacterTuple: p,
            setUserData: y,
            setJumpScMenuFocus: c
          }
        };
      n(8384);
      const h = (0, r.getScConfigForOrigin)(),
        S = (0, r.makeVar)(h);
      n(83428);
      const {
        graphEnv: _
      } = (0, r.getScConfigForOrigin)();
      (0, r.getUriForGraphEnv)(_), n(98096);
      const O = {
          data: null,
          characters: {
            gtao: []
          },
          loading: !1,
          loggedIn: null,
          hasProvider: !1
        },
        N = (0, r.setContextItem)({
          context: (0, a.createContext)(O),
          key: "userContext"
        }),
        w = () => (0, a.useContext)(N),
        j = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
          return (0, a.useMemo)((() => {
            const a = e?.characters?.[n];
            return "1" === (a?.[t]?.stats?.overview?.hasGtaPlus?.value ?? "0")
          }), [e, n, t])
        };
      n(86082);
      const C = (0, r.setContextItem)({
          context: (0, a.createContext)(void 0),
          key: "gtmContext22"
        }),
        x = {
          track: () => null
        },
        D = () => (0, a.useContext)(C) ?? x
    },
    52437: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => h,
        TinaParser: () => O,
        TinaPayloadProvider: () => f.o,
        recursiveNestedTemplates: () => j,
        useGenerateCdnSource: () => N.jS,
        useGetCdnSource: () => N.C1,
        useImageParser: () => N.S1,
        useTinaComponents: () => d,
        useTinaPayload: () => f.i,
        useTranslations: () => g
      });
      var a = n(62229),
        r = n(16188),
        i = n.n(r);
      var o = n(95966),
        s = n(98096);
      const c = (0, o.setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: l
        } = c,
        u = e => {
          let {
            children: t,
            components: n
          } = e;
          return (0, s.jsx)(l, {
            value: n,
            children: t
          })
        },
        d = () => (0, a.useContext)(c);
      var f = n(50412),
        m = n(39494),
        p = n.n(m),
        v = n(30745);
      const g = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const [r, o] = (0, a.useState)(t), [s, c] = (0, a.useState)(n);
        return (0, a.useEffect)((() => {
          const e = ((e, t) => {
              const n = {};
              return i().cloneDeepWith(e, ((e, a, r) => {
                a === t && e && (n[r.key] = e)
              })), n
            })(t, v.Qw),
            a = JSON.parse(JSON.stringify(i().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(n?.keys ?? {})))));
          c(a)
        }), [JSON.stringify(t), n]), (0, a.useEffect)((() => {
          const e = JSON.parse(JSON.stringify(t)),
            n = JSON.parse(JSON.stringify(s));
          i().cloneDeepWith(e, ((e, t, a) => {
            (e => {
              let {
                item: t,
                variableKey: a
              } = e;
              if (!t || !i().has(t, "key") || t.translated) return;
              const r = n[t.key] ?? null;
              if (!r) return;
              const o = p()(r);
              Object.keys(o).map((e => {
                i().set(t, e, o[e])
              })), i().set(t, "translated", !0), Object.freeze(t)
            })({
              item: a,
              variableKey: e
            })
          })), o(e)
        }), [JSON.stringify(t), JSON.stringify(s)]), r
      };
      var k = n(48648),
        y = n(93075);
      const b = {
          event: "page_section_impression",
          element_placement: null
        },
        h = e => {
          let {
            threshold: t = .6,
            children: n,
            gtm: r = {}
          } = e;
          const {
            track: i
          } = (0, y.h)(), {
            ref: c,
            scrollTracked: l
          } = (0, o.useScrollTracking)(t);
          return (0, a.useEffect)((() => {
            l && i({
              ...b,
              ...r
            })
          }), [l]), (0, s.jsx)("section", {
            ref: c,
            children: n
          })
        },
        S = e => {
          let {
            impressionTracking: t,
            gtm: n = {},
            children: a
          } = e;
          return t?.shouldTrack ? (0, s.jsx)(h, {
            threshold: t?.threshold,
            gtm: n,
            children: a
          }) : a
        },
        _ = e => {
          let {
            components: t,
            payload: n,
            componentProps: r = {}
          } = e;
          const o = (0, a.useMemo)((() => (i().cloneDeepWith(n, ((e, a) => {
            "_template" !== a || Number.isInteger(Number(e)) || i().get(t, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", t))
          })), (e => {
            let {
              components: t,
              payload: n,
              componentProps: r
            } = e;
            const o = e => {
              let c = "";
              if (c = Array.isArray(e?.[v.ZH]) ? e[v.ZH].map((e => o(e))) : e?.[v.ZH] ?? "", !e?._template) return c;
              let l = e._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), l = "gen9.Hero");
              const u = i().get(t, l) ?? null;
              if (!u) return null;
              const d = ((e, t) => n => ((e, t, n) => (0, s.jsx)(S, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, s.jsx)(e, {
                    ...t
                  })
                }))(e, n, t))(u, {
                  impressionTracking: e?.impressionTracking,
                  gtm: {
                    ...e?.gtm,
                    whatever: 1
                  }
                }),
                f = [...e?.translations ?? []].reverse(),
                m = `componentProps_${(0,k.A)()}`;
              return (0, a.createElement)(d, {
                ...n?.meta,
                ...e,
                ...r,
                t: e => f.find((t => t?._key === e))?.value ?? e,
                key: m
              }, c)
            };
            return n?.[v.ZH]?.length ? o(n) : null
          })({
            components: t,
            payload: n,
            componentProps: r
          }))), [JSON.stringify(n), JSON.stringify(t)]);
          return o
        },
        O = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: r = {}
          } = e;
          const o = (0, f.i)(),
            [c, l] = (0, a.useState)(null),
            [m, p] = (0, a.useState)(null);
          (0, a.useEffect)((() => {
            t?.payload && l(t.payload), t?.variables && p(t.variables)
          }), [t]);
          const [v] = (0, a.useState)({
            ...n,
            ...d() ?? {}
          }), k = (e => {
            let {
              payload: t
            } = e;
            const [n, r] = (0, a.useState)(t);
            return (0, a.useEffect)((() => {
              const e = i().debounce((() => {
                const e = JSON.parse(JSON.stringify(t));
                i().cloneDeepWith(e, ((e, t, n) => {
                  n?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const t = e.mediaQueryList.filter((e => {
                        let {
                          mediaQueryString: t
                        } = e;
                        return window.matchMedia(t).matches
                      })) ?? null,
                      n = Object.assign({}, ...t);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...n,
                      _template: e?._template
                    })
                  })(n)
                })), r(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [t]), n
          })({
            payload: c
          }), y = g({
            payload: c,
            variables: m
          });
          return (0, a.useMemo)((() => {
            if (!c) return null;
            const e = y,
              n = c?.meta?.prod ?? c?.meta?.cdn ?? o?.meta?.prod ?? o?.meta?.cdn ?? !1,
              a = {
                ...c,
                meta: {
                  ...c?.meta ?? {},
                  prod: n
                }
              };
            return (0, s.jsx)(f.o, {
              payload: a,
              children: (0, s.jsx)(u, {
                components: v,
                children: (0, s.jsx)(_, {
                  payload: e,
                  components: v,
                  componentProps: {
                    ...r,
                    tina: t
                  }
                })
              })
            })
          }), [o, c, JSON.stringify(k), JSON.stringify(y)])
        };
      var N = n(13916);
      const w = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            r = {
              ...n
            };
          if (t > 0) {
            const i = w(e, t - 1, n, a);
            r = {
              ...r,
              ...a(e, {
                templates: i
              })
            }
          }
          return r
        },
        j = w
    },
    83428: e => {
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

      function r(e, t) {
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
          definitions: [r(e, t)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = a[t] || new Set,
          o = new Set,
          s = new Set;
        for (i.forEach((function(e) {
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
          var a = r(e, t);
          a && n.definitions.push(a)
        })), n
      }(t, "userData")
    }
  }
]);