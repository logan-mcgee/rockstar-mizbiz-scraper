! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e2408bf3-1c89-48f6-a848-40b433490bf8", e._sentryDebugIdIdentifier = "sentry-dbid-e2408bf3-1c89-48f6-a848-40b433490bf8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [328, 947], {
    49328: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        AgeGate: () => f
      });
      var n = t(62229),
        i = t(95966),
        r = t(93075),
        s = t(33129),
        d = t(19373),
        l = t(8290),
        o = t(55163);
      const c = {
        agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39"
      };
      var u = t(98096);
      const m = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        f = (0, i.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: f = {},
            ga: g = {},
            t: v
          } = e;
          const {
            track: k
          } = (0, r.h)(), p = (0, i.getCookieValueByName)("UAGC"), [b, h] = (0, n.useState)("1" === (y = p) ? m.PASSED : "0" === y ? m.FAILED : m.NOT_SUBMITTED);
          var y;
          const [_, D] = (0, n.useState)(), I = (0, n.createRef)(), S = (0, n.createRef)(), x = (0, n.createRef)(), {
            style: N
          } = f;
          return (0, n.useEffect)((() => {
            k({
              event: "age_gate_popup",
              element_placement: g.element_placement ?? ""
            })
          }), []), b === m.PASSED ? t : b === m.FAILED ? (0, u.jsxs)("div", {
            className: c.agegate,
            style: N,
            children: [f?.header, (0, u.jsx)("h2", {
              children: v("agegate_fail")
            })]
          }) : (0, u.jsxs)("div", {
            className: c.agegate,
            style: N,
            children: [f?.header, (0, u.jsx)("div", {
              className: c.bg,
              style: f?.bgImg ? {
                backgroundImage: `url(${f.bgImg})`
              } : {}
            }), !1 === _ && (0, u.jsx)("h5", {
              className: c.error,
              children: v("Please enter a valid age")
            }), (0, u.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(x?.current?.value, I?.current?.value, S?.current?.value),
                  n = (0, s.j)(new Date, {
                    years: 150
                  }),
                  r = (0, d.f)(t) && (0, l.d)(t, n);
                if (D(r), r) {
                  const e = (0, o.V)(new Date, t) >= a;
                  k(e ? {
                    event: "age_gate_passed",
                    element_placement: g.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: g.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const n = e ? "1" : "0";
                  (0, i.setCookieValue)("UAGC", n), h(n)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, u.jsx)("h5", {
                children: v("agegate_header")
              }), (0, u.jsxs)("div", {
                className: c.inputs,
                children: [(0, u.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [v("Month"), (0, u.jsx)("input", {
                    id: "monthInput",
                    ref: I,
                    placeholder: v("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [v("Day"), (0, u.jsx)("input", {
                    id: "dayInput",
                    ref: S,
                    placeholder: v("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [v("Year"), (0, u.jsx)("input", {
                    id: "yearInput",
                    ref: x,
                    className: c.year,
                    placeholder: v("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsx)("button", {
                  type: "submit",
                  className: c.submit,
                  children: v("SUBMIT")
                })]
              })]
            }), f?.footer]
          })
        }))
    },
    93075: (e, a, t) => {
      "use strict";
      t.d(a, {
        h: () => c
      });
      var n = t(62229),
        i = t(95966);
      (0, i.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, i.makeVar)(null)
      }), (0, i.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
        value: (0, i.makeVar)(!1)
      }), (0, i.setMakeVarItem)({
        key: "hasNotificationsReactive",
        value: (0, i.makeVar)(!1)
      }), (0, i.setMakeVarItem)({
        key: "currentCharIdReactive",
        value: (0, i.makeVar)((0, i.lsSettingsReactive)()?.currentCharId)
      }), (0, i.setMakeVarItem)({
        key: "selectedCharacterTupleReactive",
        value: (0, i.makeVar)(null)
      }), (0, i.setMakeVarItem)({
        key: "rockstarIdReactive",
        value: (0, i.makeVar)(null)
      }), (0, i.setMakeVarItem)({
        key: "charactersNeededReactive",
        value: (0, i.makeVar)(null)
      }), (0, i.setMakeVarItem)({
        key: "userDataReactive",
        value: (0, i.makeVar)(null)
      }), t(8384);
      const r = (0, i.getScConfigForOrigin)();
      (0, i.makeVar)(r), t(83428);
      const {
        graphEnv: s
      } = (0, i.getScConfigForOrigin)();
      (0, i.getUriForGraphEnv)(s), t(98096);
      const d = {
        data: null,
        characters: {
          gtao: []
        },
        loading: !1,
        loggedIn: null,
        hasProvider: !1
      };
      (0, i.setContextItem)({
        context: (0, n.createContext)(d),
        key: "userContext"
      }), t(86082);
      const l = (0, i.setContextItem)({
          context: (0, n.createContext)(void 0),
          key: "gtmContext22"
        }),
        o = {
          track: () => null
        },
        c = () => (0, n.useContext)(l) ?? o
    },
    83428: e => {
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
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
      var n = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.userData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = n[a] || new Set,
          s = new Set,
          d = new Set;
        for (r.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            s.has(e) || (s.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "userData")
    }
  }
]);