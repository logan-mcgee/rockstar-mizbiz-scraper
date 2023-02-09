"use strict";
(self.webpackChunk_rockstargames_graphiql = self.webpackChunk_rockstargames_graphiql || []).push([
  [129], {
    6129: (e, t, n) => {
      n.d(t, {
        S: () => ft,
        T: () => vt,
        a: () => ht
      });
      var i = Object.defineProperty,
        r = (e, t) => i(e, "name", {
          value: t,
          configurable: !0
        });

      function s(e) {
        return o(e, [])
      }

      function o(e, t) {
        switch (typeof e) {
          case "string":
            return JSON.stringify(e);
          case "function":
            return e.name ? `[function ${e.name}]` : "[function]";
          case "object":
            return a(e, t);
          default:
            return String(e)
        }
      }

      function a(e, t) {
        if (null === e) return "null";
        if (t.includes(e)) return "[Circular]";
        const n = [...t, e];
        if (l(e)) {
          const t = e.toJSON();
          if (t !== e) return "string" == typeof t ? t : o(t, n)
        } else if (Array.isArray(e)) return c(e, n);
        return u(e, n)
      }

      function l(e) {
        return "function" == typeof e.toJSON
      }

      function u(e, t) {
        const n = Object.entries(e);
        return 0 === n.length ? "{}" : t.length > 2 ? "[" + p(e) + "]" : "{ " + n.map((e => {
          let [n, i] = e;
          return n + ": " + o(i, t)
        })).join(", ") + " }"
      }

      function c(e, t) {
        if (0 === e.length) return "[]";
        if (t.length > 2) return "[Array]";
        const n = Math.min(10, e.length),
          i = e.length - n,
          r = [];
        for (let i = 0; i < n; ++i) r.push(o(e[i], t));
        return 1 === i ? r.push("... 1 more item") : i > 1 && r.push(`... ${i} more items`), "[" + r.join(", ") + "]"
      }

      function p(e) {
        const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
        if ("Object" === t && "function" == typeof e.constructor) {
          const t = e.constructor.name;
          if ("string" == typeof t && "" !== t) return t
        }
        return t
      }

      function d(e, t) {
        if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
      }
      let f;
      var v;

      function h(e) {
        return 9 === e || 32 === e
      }

      function y(e) {
        return e >= 48 && e <= 57
      }

      function m(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function N(e) {
        return m(e) || 95 === e
      }

      function T(e) {
        return m(e) || y(e) || 95 === e
      }

      function I(e, t) {
        const n = e.replace(/"""/g, '\\"""'),
          i = n.split(/\r\n|[\n\r]/g),
          r = 1 === i.length,
          s = i.length > 1 && i.slice(1).every((e => 0 === e.length || h(e.charCodeAt(0)))),
          o = n.endsWith('\\"""'),
          a = e.endsWith('"') && !o,
          l = e.endsWith("\\"),
          u = a || l,
          c = !(null != t && t.minimize) && (!r || e.length > 70 || u || s || o);
        let p = "";
        const d = r && h(e.charCodeAt(0));
        return (c && !d || s) && (p += "\n"), p += n, (c || u) && (p += "\n"), '"""' + p + '"""'
      }

      function E(e) {
        return `"${e.replace(g,b)}"`
      }
      r(s, "inspect"), r(o, "formatValue"), r(a, "formatObjectValue"), r(l, "isJSONable"), r(u, "formatObject"), r(c, "formatArray"), r(p, "getObjectTag"), r(d, "invariant"), (v = f || (f = {})).QUERY = "QUERY", v.MUTATION = "MUTATION", v.SUBSCRIPTION = "SUBSCRIPTION", v.FIELD = "FIELD", v.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", v.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", v.INLINE_FRAGMENT = "INLINE_FRAGMENT", v.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", v.SCHEMA = "SCHEMA", v.SCALAR = "SCALAR", v.OBJECT = "OBJECT", v.FIELD_DEFINITION = "FIELD_DEFINITION", v.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", v.INTERFACE = "INTERFACE", v.UNION = "UNION", v.ENUM = "ENUM", v.ENUM_VALUE = "ENUM_VALUE", v.INPUT_OBJECT = "INPUT_OBJECT", v.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION", r(h, "isWhiteSpace"), r(y, "isDigit$1"), r(m, "isLetter"), r(N, "isNameStart"), r(T, "isNameContinue"), r(I, "printBlockString"), r(E, "printString");
      const g = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

      function b(e) {
        return O[e.charCodeAt(0)]
      }
      r(b, "escapedReplacer");
      const O = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"];

      function S(e, t) {
        if (!Boolean(e)) throw new Error(t)
      }
      r(S, "devAssert");
      const A = {
          Name: [],
          Document: ["definitions"],
          OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
          VariableDefinition: ["variable", "type", "defaultValue", "directives"],
          Variable: ["name"],
          SelectionSet: ["selections"],
          Field: ["alias", "name", "arguments", "directives", "selectionSet"],
          Argument: ["name", "value"],
          FragmentSpread: ["name", "directives"],
          InlineFragment: ["typeCondition", "directives", "selectionSet"],
          FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
          IntValue: [],
          FloatValue: [],
          StringValue: [],
          BooleanValue: [],
          NullValue: [],
          EnumValue: [],
          ListValue: ["values"],
          ObjectValue: ["fields"],
          ObjectField: ["name", "value"],
          Directive: ["name", "arguments"],
          NamedType: ["name"],
          ListType: ["type"],
          NonNullType: ["type"],
          SchemaDefinition: ["description", "directives", "operationTypes"],
          OperationTypeDefinition: ["type"],
          ScalarTypeDefinition: ["description", "name", "directives"],
          ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
          FieldDefinition: ["description", "name", "arguments", "type", "directives"],
          InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
          InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
          UnionTypeDefinition: ["description", "name", "directives", "types"],
          EnumTypeDefinition: ["description", "name", "directives", "values"],
          EnumValueDefinition: ["description", "name", "directives"],
          InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
          DirectiveDefinition: ["description", "name", "arguments", "locations"],
          SchemaExtension: ["directives", "operationTypes"],
          ScalarTypeExtension: ["name", "directives"],
          ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
          InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
          UnionTypeExtension: ["name", "directives", "types"],
          EnumTypeExtension: ["name", "directives", "values"],
          InputObjectTypeExtension: ["name", "directives", "fields"]
        },
        L = new Set(Object.keys(A));

      function _(e) {
        const t = null == e ? void 0 : e.kind;
        return "string" == typeof t && L.has(t)
      }
      let w;
      var D;
      let F;
      var x;
      r(_, "isNode"), (D = w || (w = {})).QUERY = "query", D.MUTATION = "mutation", D.SUBSCRIPTION = "subscription", (x = F || (F = {})).NAME = "Name", x.DOCUMENT = "Document", x.OPERATION_DEFINITION = "OperationDefinition", x.VARIABLE_DEFINITION = "VariableDefinition", x.SELECTION_SET = "SelectionSet", x.FIELD = "Field", x.ARGUMENT = "Argument", x.FRAGMENT_SPREAD = "FragmentSpread", x.INLINE_FRAGMENT = "InlineFragment", x.FRAGMENT_DEFINITION = "FragmentDefinition", x.VARIABLE = "Variable", x.INT = "IntValue", x.FLOAT = "FloatValue", x.STRING = "StringValue", x.BOOLEAN = "BooleanValue", x.NULL = "NullValue", x.ENUM = "EnumValue", x.LIST = "ListValue", x.OBJECT = "ObjectValue", x.OBJECT_FIELD = "ObjectField", x.DIRECTIVE = "Directive", x.NAMED_TYPE = "NamedType", x.LIST_TYPE = "ListType", x.NON_NULL_TYPE = "NonNullType", x.SCHEMA_DEFINITION = "SchemaDefinition", x.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", x.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", x.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", x.FIELD_DEFINITION = "FieldDefinition", x.INPUT_VALUE_DEFINITION = "InputValueDefinition", x.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", x.UNION_TYPE_DEFINITION = "UnionTypeDefinition", x.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", x.ENUM_VALUE_DEFINITION = "EnumValueDefinition", x.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", x.DIRECTIVE_DEFINITION = "DirectiveDefinition", x.SCHEMA_EXTENSION = "SchemaExtension", x.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", x.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", x.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", x.UNION_TYPE_EXTENSION = "UnionTypeExtension", x.ENUM_TYPE_EXTENSION = "EnumTypeExtension", x.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
      const R = Object.freeze({});

      function j(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A;
        const i = new Map;
        for (const e of Object.values(F)) i.set(e, U(t, e));
        let r, o, a, l = Array.isArray(e),
          u = [e],
          c = -1,
          p = [],
          d = e;
        const f = [],
          v = [];
        do {
          c++;
          const e = c === u.length,
            N = e && 0 !== p.length;
          if (e) {
            if (o = 0 === v.length ? void 0 : f[f.length - 1], d = a, a = v.pop(), N)
              if (l) {
                d = d.slice();
                let e = 0;
                for (const [t, n] of p) {
                  const i = t - e;
                  null === n ? (d.splice(i, 1), e++) : d[i] = n
                }
              } else {
                d = Object.defineProperties({}, Object.getOwnPropertyDescriptors(d));
                for (const [e, t] of p) d[e] = t
              } c = r.index, u = r.keys, p = r.edits, l = r.inArray, r = r.prev
          } else if (a) {
            if (o = l ? c : u[c], d = a[o], null == d) continue;
            f.push(o)
          }
          let T;
          if (!Array.isArray(d)) {
            var h, y;
            _(d) || S(!1, `Invalid AST Node: ${s(d)}.`);
            const n = e ? null === (h = i.get(d.kind)) || void 0 === h ? void 0 : h.leave : null === (y = i.get(d.kind)) || void 0 === y ? void 0 : y.enter;
            if (T = null == n ? void 0 : n.call(t, d, o, a, f, v), T === R) break;
            if (!1 === T) {
              if (!e) {
                f.pop();
                continue
              }
            } else if (void 0 !== T && (p.push([o, T]), !e)) {
              if (!_(T)) {
                f.pop();
                continue
              }
              d = T
            }
          }
          var m;
          void 0 === T && N && p.push([o, d]), e ? f.pop() : (r = {
            inArray: l,
            index: c,
            keys: u,
            edits: p,
            prev: r
          }, l = Array.isArray(d), u = l ? d : null !== (m = n[d.kind]) && void 0 !== m ? m : [], c = -1, p = [], a && v.push(a), a = d)
        } while (void 0 !== r);
        return 0 !== p.length ? p[p.length - 1][1] : e
      }

      function U(e, t) {
        const n = e[t];
        return "object" == typeof n ? n : "function" == typeof n ? {
          enter: n,
          leave: void 0
        } : {
          enter: e.enter,
          leave: e.leave
        }
      }

      function V(e) {
        return j(e, C)
      }
      r(j, "visit"), r(U, "getEnterLeaveForKind"), r(V, "print");
      const C = {
        Name: {
          leave: e => e.value
        },
        Variable: {
          leave: e => "$" + e.name
        },
        Document: {
          leave: e => $(e.definitions, "\n\n")
        },
        OperationDefinition: {
          leave(e) {
            const t = k("(", $(e.variableDefinitions, ", "), ")"),
              n = $([e.operation, $([e.name, t]), $(e.directives, " ")], " ");
            return ("query" === n ? "" : n + " ") + e.selectionSet
          }
        },
        VariableDefinition: {
          leave: e => {
            let {
              variable: t,
              type: n,
              defaultValue: i,
              directives: r
            } = e;
            return t + ": " + n + k(" = ", i) + k(" ", $(r, " "))
          }
        },
        SelectionSet: {
          leave: e => {
            let {
              selections: t
            } = e;
            return M(t)
          }
        },
        Field: {
          leave(e) {
            let {
              alias: t,
              name: n,
              arguments: i,
              directives: r,
              selectionSet: s
            } = e;
            const o = k("", t, ": ") + n;
            let a = o + k("(", $(i, ", "), ")");
            return a.length > 80 && (a = o + k("(\n", B($(i, "\n")), "\n)")), $([a, $(r, " "), s], " ")
          }
        },
        Argument: {
          leave: e => {
            let {
              name: t,
              value: n
            } = e;
            return t + ": " + n
          }
        },
        FragmentSpread: {
          leave: e => {
            let {
              name: t,
              directives: n
            } = e;
            return "..." + t + k(" ", $(n, " "))
          }
        },
        InlineFragment: {
          leave: e => {
            let {
              typeCondition: t,
              directives: n,
              selectionSet: i
            } = e;
            return $(["...", k("on ", t), $(n, " "), i], " ")
          }
        },
        FragmentDefinition: {
          leave: e => {
            let {
              name: t,
              typeCondition: n,
              variableDefinitions: i,
              directives: r,
              selectionSet: s
            } = e;
            return `fragment ${t}${k("(",$(i,", "),")")} on ${n} ${k("",$(r," ")," ")}` + s
          }
        },
        IntValue: {
          leave: e => {
            let {
              value: t
            } = e;
            return t
          }
        },
        FloatValue: {
          leave: e => {
            let {
              value: t
            } = e;
            return t
          }
        },
        StringValue: {
          leave: e => {
            let {
              value: t,
              block: n
            } = e;
            return n ? I(t) : E(t)
          }
        },
        BooleanValue: {
          leave: e => {
            let {
              value: t
            } = e;
            return t ? "true" : "false"
          }
        },
        NullValue: {
          leave: () => "null"
        },
        EnumValue: {
          leave: e => {
            let {
              value: t
            } = e;
            return t
          }
        },
        ListValue: {
          leave: e => {
            let {
              values: t
            } = e;
            return "[" + $(t, ", ") + "]"
          }
        },
        ObjectValue: {
          leave: e => {
            let {
              fields: t
            } = e;
            return "{" + $(t, ", ") + "}"
          }
        },
        ObjectField: {
          leave: e => {
            let {
              name: t,
              value: n
            } = e;
            return t + ": " + n
          }
        },
        Directive: {
          leave: e => {
            let {
              name: t,
              arguments: n
            } = e;
            return "@" + t + k("(", $(n, ", "), ")")
          }
        },
        NamedType: {
          leave: e => {
            let {
              name: t
            } = e;
            return t
          }
        },
        ListType: {
          leave: e => {
            let {
              type: t
            } = e;
            return "[" + t + "]"
          }
        },
        NonNullType: {
          leave: e => {
            let {
              type: t
            } = e;
            return t + "!"
          }
        },
        SchemaDefinition: {
          leave: e => {
            let {
              description: t,
              directives: n,
              operationTypes: i
            } = e;
            return k("", t, "\n") + $(["schema", $(n, " "), M(i)], " ")
          }
        },
        OperationTypeDefinition: {
          leave: e => {
            let {
              operation: t,
              type: n
            } = e;
            return t + ": " + n
          }
        },
        ScalarTypeDefinition: {
          leave: e => {
            let {
              description: t,
              name: n,
              directives: i
            } = e;
            return k("", t, "\n") + $(["scalar", n, $(i, " ")], " ")
          }
        },
        ObjectTypeDefinition: {
          leave: e => {
            let {
              description: t,
              name: n,
              interfaces: i,
              directives: r,
              fields: s
            } = e;
            return k("", t, "\n") + $(["type", n, k("implements ", $(i, " & ")), $(r, " "), M(s)], " ")
          }
        },
        FieldDefinition: {
          leave: e => {
            let {
              description: t,
              name: n,
              arguments: i,
              type: r,
              directives: s
            } = e;
            return k("", t, "\n") + n + (G(i) ? k("(\n", B($(i, "\n")), "\n)") : k("(", $(i, ", "), ")")) + ": " + r + k(" ", $(s, " "))
          }
        },
        InputValueDefinition: {
          leave: e => {
            let {
              description: t,
              name: n,
              type: i,
              defaultValue: r,
              directives: s
            } = e;
            return k("", t, "\n") + $([n + ": " + i, k("= ", r), $(s, " ")], " ")
          }
        },
        InterfaceTypeDefinition: {
          leave: e => {
            let {
              description: t,
              name: n,
              interfaces: i,
              directives: r,
              fields: s
            } = e;
            return k("", t, "\n") + $(["interface", n, k("implements ", $(i, " & ")), $(r, " "), M(s)], " ")
          }
        },
        UnionTypeDefinition: {
          leave: e => {
            let {
              description: t,
              name: n,
              directives: i,
              types: r
            } = e;
            return k("", t, "\n") + $(["union", n, $(i, " "), k("= ", $(r, " | "))], " ")
          }
        },
        EnumTypeDefinition: {
          leave: e => {
            let {
              description: t,
              name: n,
              directives: i,
              values: r
            } = e;
            return k("", t, "\n") + $(["enum", n, $(i, " "), M(r)], " ")
          }
        },
        EnumValueDefinition: {
          leave: e => {
            let {
              description: t,
              name: n,
              directives: i
            } = e;
            return k("", t, "\n") + $([n, $(i, " ")], " ")
          }
        },
        InputObjectTypeDefinition: {
          leave: e => {
            let {
              description: t,
              name: n,
              directives: i,
              fields: r
            } = e;
            return k("", t, "\n") + $(["input", n, $(i, " "), M(r)], " ")
          }
        },
        DirectiveDefinition: {
          leave: e => {
            let {
              description: t,
              name: n,
              arguments: i,
              repeatable: r,
              locations: s
            } = e;
            return k("", t, "\n") + "directive @" + n + (G(i) ? k("(\n", B($(i, "\n")), "\n)") : k("(", $(i, ", "), ")")) + (r ? " repeatable" : "") + " on " + $(s, " | ")
          }
        },
        SchemaExtension: {
          leave: e => {
            let {
              directives: t,
              operationTypes: n
            } = e;
            return $(["extend schema", $(t, " "), M(n)], " ")
          }
        },
        ScalarTypeExtension: {
          leave: e => {
            let {
              name: t,
              directives: n
            } = e;
            return $(["extend scalar", t, $(n, " ")], " ")
          }
        },
        ObjectTypeExtension: {
          leave: e => {
            let {
              name: t,
              interfaces: n,
              directives: i,
              fields: r
            } = e;
            return $(["extend type", t, k("implements ", $(n, " & ")), $(i, " "), M(r)], " ")
          }
        },
        InterfaceTypeExtension: {
          leave: e => {
            let {
              name: t,
              interfaces: n,
              directives: i,
              fields: r
            } = e;
            return $(["extend interface", t, k("implements ", $(n, " & ")), $(i, " "), M(r)], " ")
          }
        },
        UnionTypeExtension: {
          leave: e => {
            let {
              name: t,
              directives: n,
              types: i
            } = e;
            return $(["extend union", t, $(n, " "), k("= ", $(i, " | "))], " ")
          }
        },
        EnumTypeExtension: {
          leave: e => {
            let {
              name: t,
              directives: n,
              values: i
            } = e;
            return $(["extend enum", t, $(n, " "), M(i)], " ")
          }
        },
        InputObjectTypeExtension: {
          leave: e => {
            let {
              name: t,
              directives: n,
              fields: i
            } = e;
            return $(["extend input", t, $(n, " "), M(i)], " ")
          }
        }
      };

      function $(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        var n;
        return null !== (n = null == e ? void 0 : e.filter((e => e)).join(t)) && void 0 !== n ? n : ""
      }

      function M(e) {
        return k("{\n", B($(e, "\n")), "\n}")
      }

      function k(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return null != t && "" !== t ? e + t + n : ""
      }

      function B(e) {
        return k("  ", e.replace(/\n/g, "\n  "))
      }

      function G(e) {
        var t;
        return null !== (t = null == e ? void 0 : e.some((e => e.includes("\n")))) && void 0 !== t && t
      }

      function P(e) {
        return "object" == typeof e && "function" == typeof(null == e ? void 0 : e[Symbol.iterator])
      }

      function J(e) {
        return "object" == typeof e && null !== e
      }

      function Q(e, t) {
        const [n, i] = t ? [e, t] : [void 0, e];
        let r = " Did you mean ";
        n && (r += n + " ");
        const s = i.map((e => `"${e}"`));
        switch (s.length) {
          case 0:
            return "";
          case 1:
            return r + s[0] + "?";
          case 2:
            return r + s[0] + " or " + s[1] + "?"
        }
        const o = s.slice(0, 5),
          a = o.pop();
        return r + o.join(", ") + ", or " + a + "?"
      }

      function Y(e) {
        return e
      }
      r($, "join"), r(M, "block"), r(k, "wrap"), r(B, "indent"), r(G, "hasMultilineItems"), r(P, "isIterableObject"), r(J, "isObjectLike"), r(Q, "didYouMean"), r(Y, "identityFunc");
      const z = r((function(e, t) {
        return e instanceof t
      }), "instanceOf");

      function q(e, t) {
        const n = Object.create(null);
        for (const i of e) n[t(i)] = i;
        return n
      }

      function H(e, t, n) {
        const i = Object.create(null);
        for (const r of e) i[t(r)] = n(r);
        return i
      }

      function X(e, t) {
        const n = Object.create(null);
        for (const i of Object.keys(e)) n[i] = t(e[i], i);
        return n
      }

      function W(e, t) {
        let n = 0,
          i = 0;
        for (; n < e.length && i < t.length;) {
          let r = e.charCodeAt(n),
            s = t.charCodeAt(i);
          if (Z(r) && Z(s)) {
            let o = 0;
            do {
              ++n, o = 10 * o + r - K, r = e.charCodeAt(n)
            } while (Z(r) && o > 0);
            let a = 0;
            do {
              ++i, a = 10 * a + s - K, s = t.charCodeAt(i)
            } while (Z(s) && a > 0);
            if (o < a) return -1;
            if (o > a) return 1
          } else {
            if (r < s) return -1;
            if (r > s) return 1;
            ++n, ++i
          }
        }
        return e.length - t.length
      }
      r(q, "keyMap"), r(H, "keyValMap"), r(X, "mapValue"), r(W, "naturalCompare");
      const K = 48;

      function Z(e) {
        return !isNaN(e) && K <= e && e <= 57
      }

      function ee(e, t) {
        const n = Object.create(null),
          i = new te(e),
          r = Math.floor(.4 * e.length) + 1;
        for (const e of t) {
          const t = i.measure(e, r);
          void 0 !== t && (n[e] = t)
        }
        return Object.keys(n).sort(((e, t) => {
          const i = n[e] - n[t];
          return 0 !== i ? i : W(e, t)
        }))
      }
      r(Z, "isDigit"), r(ee, "suggestionList");
      class te {
        constructor(e) {
          this._input = e, this._inputLowerCase = e.toLowerCase(), this._inputArray = ne(this._inputLowerCase), this._rows = [new Array(e.length + 1).fill(0), new Array(e.length + 1).fill(0), new Array(e.length + 1).fill(0)]
        }
        measure(e, t) {
          if (this._input === e) return 0;
          const n = e.toLowerCase();
          if (this._inputLowerCase === n) return 1;
          let i = ne(n),
            r = this._inputArray;
          if (i.length < r.length) {
            const e = i;
            i = r, r = e
          }
          const s = i.length,
            o = r.length;
          if (s - o > t) return;
          const a = this._rows;
          for (let e = 0; e <= o; e++) a[0][e] = e;
          for (let e = 1; e <= s; e++) {
            const n = a[(e - 1) % 3],
              s = a[e % 3];
            let l = s[0] = e;
            for (let t = 1; t <= o; t++) {
              const o = i[e - 1] === r[t - 1] ? 0 : 1;
              let u = Math.min(n[t] + 1, s[t - 1] + 1, n[t - 1] + o);
              if (e > 1 && t > 1 && i[e - 1] === r[t - 2] && i[e - 2] === r[t - 1]) {
                const n = a[(e - 2) % 3][t - 2];
                u = Math.min(u, n + 1)
              }
              u < l && (l = u), s[t] = u
            }
            if (l > t) return
          }
          const l = a[s % 3][o];
          return l <= t ? l : void 0
        }
      }

      function ne(e) {
        const t = e.length,
          n = new Array(t);
        for (let i = 0; i < t; ++i) n[i] = e.charCodeAt(i);
        return n
      }

      function ie(e) {
        if (null == e) return Object.create(null);
        if (null === Object.getPrototypeOf(e)) return e;
        const t = Object.create(null);
        for (const [n, i] of Object.entries(e)) t[n] = i;
        return t
      }
      r(te, "LexicalDistance"), r(ne, "stringToArray"), r(ie, "toObjMap");
      const re = /\r\n|[\n\r]/g;

      function se(e, t) {
        let n = 0,
          i = 1;
        for (const r of e.body.matchAll(re)) {
          if ("number" == typeof r.index || d(!1), r.index >= t) break;
          n = r.index + r[0].length, i += 1
        }
        return {
          line: i,
          column: t + 1 - n
        }
      }

      function oe(e) {
        return ae(e.source, se(e.source, e.start))
      }

      function ae(e, t) {
        const n = e.locationOffset.column - 1,
          i = "".padStart(n) + e.body,
          r = t.line - 1,
          s = e.locationOffset.line - 1,
          o = t.line + s,
          a = 1 === t.line ? n : 0,
          l = t.column + a,
          u = `${e.name}:${o}:${l}\n`,
          c = i.split(/\r\n|[\n\r]/g),
          p = c[r];
        if (p.length > 120) {
          const e = Math.floor(l / 80),
            t = l % 80,
            n = [];
          for (let e = 0; e < p.length; e += 80) n.push(p.slice(e, e + 80));
          return u + le([
            [`${o} |`, n[0]], ...n.slice(1, e + 1).map((e => ["|", e])), ["|", "^".padStart(t)],
            ["|", n[e + 1]]
          ])
        }
        return u + le([
          [o - 1 + " |", c[r - 1]],
          [`${o} |`, p],
          ["|", "^".padStart(l)],
          [`${o+1} |`, c[r + 1]]
        ])
      }

      function le(e) {
        const t = e.filter((e => {
            let [t, n] = e;
            return void 0 !== n
          })),
          n = Math.max(...t.map((e => {
            let [t] = e;
            return t.length
          })));
        return t.map((e => {
          let [t, i] = e;
          return t.padStart(n) + (i ? " " + i : "")
        })).join("\n")
      }

      function ue(e) {
        const t = e[0];
        return null == t || "kind" in t || "length" in t ? {
          nodes: t,
          source: e[1],
          positions: e[2],
          path: e[3],
          originalError: e[4],
          extensions: e[5]
        } : t
      }
      r(se, "getLocation"), r(oe, "printLocation"), r(ae, "printSourceLocation"), r(le, "printPrefixedLines"), r(ue, "toNormalizedOptions");
      class ce extends Error {
        constructor(e) {
          for (var t, n, i, r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) s[o - 1] = arguments[o];
          const {
            nodes: a,
            source: l,
            positions: u,
            path: c,
            originalError: p,
            extensions: d
          } = ue(s);
          super(e), this.name = "GraphQLError", this.path = null != c ? c : void 0, this.originalError = null != p ? p : void 0, this.nodes = pe(Array.isArray(a) ? a : a ? [a] : void 0);
          const f = pe(null === (t = this.nodes) || void 0 === t ? void 0 : t.map((e => e.loc)).filter((e => null != e)));
          this.source = null != l ? l : null == f || null === (n = f[0]) || void 0 === n ? void 0 : n.source, this.positions = null != u ? u : null == f ? void 0 : f.map((e => e.start)), this.locations = u && l ? u.map((e => se(l, e))) : null == f ? void 0 : f.map((e => se(e.source, e.start)));
          const v = J(null == p ? void 0 : p.extensions) ? null == p ? void 0 : p.extensions : void 0;
          this.extensions = null !== (i = null != d ? d : v) && void 0 !== i ? i : Object.create(null), Object.defineProperties(this, {
            message: {
              writable: !0,
              enumerable: !0
            },
            name: {
              enumerable: !1
            },
            nodes: {
              enumerable: !1
            },
            source: {
              enumerable: !1
            },
            positions: {
              enumerable: !1
            },
            originalError: {
              enumerable: !1
            }
          }), null != p && p.stack ? Object.defineProperty(this, "stack", {
            value: p.stack,
            writable: !0,
            configurable: !0
          }) : Error.captureStackTrace ? Error.captureStackTrace(this, ce) : Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: !0,
            configurable: !0
          })
        }
        get[Symbol.toStringTag]() {
          return "GraphQLError"
        }
        toString() {
          let e = this.message;
          if (this.nodes)
            for (const t of this.nodes) t.loc && (e += "\n\n" + oe(t.loc));
          else if (this.source && this.locations)
            for (const t of this.locations) e += "\n\n" + ae(this.source, t);
          return e
        }
        toJSON() {
          const e = {
            message: this.message
          };
          return null != this.locations && (e.locations = this.locations), null != this.path && (e.path = this.path), null != this.extensions && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e
        }
      }

      function pe(e) {
        return void 0 === e || 0 === e.length ? void 0 : e
      }

      function de(e, t) {
        switch (e.kind) {
          case F.NULL:
            return null;
          case F.INT:
            return parseInt(e.value, 10);
          case F.FLOAT:
            return parseFloat(e.value);
          case F.STRING:
          case F.ENUM:
          case F.BOOLEAN:
            return e.value;
          case F.LIST:
            return e.values.map((e => de(e, t)));
          case F.OBJECT:
            return H(e.fields, (e => e.name.value), (e => de(e.value, t)));
          case F.VARIABLE:
            return null == t ? void 0 : t[e.name.value]
        }
      }

      function fe(e) {
        if (null != e || S(!1, "Must provide name."), "string" == typeof e || S(!1, "Expected name to be a string."), 0 === e.length) throw new ce("Expected name to be a non-empty string.");
        for (let t = 1; t < e.length; ++t)
          if (!T(e.charCodeAt(t))) throw new ce(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);
        if (!N(e.charCodeAt(0))) throw new ce(`Names must start with [_a-zA-Z] but "${e}" does not.`);
        return e
      }

      function ve(e) {
        if ("true" === e || "false" === e || "null" === e) throw new ce(`Enum values cannot be named: ${e}`);
        return fe(e)
      }

      function he(e) {
        return ye(e) || me(e) || Ne(e) || Te(e) || Ie(e) || Ee(e) || ge(e) || be(e)
      }

      function ye(e) {
        return z(e, Fe)
      }

      function me(e) {
        return z(e, xe)
      }

      function Ne(e) {
        return z(e, Me)
      }

      function Te(e) {
        return z(e, ke)
      }

      function Ie(e) {
        return z(e, Ge)
      }

      function Ee(e) {
        return z(e, Qe)
      }

      function ge(e) {
        return z(e, Ae)
      }

      function be(e) {
        return z(e, Le)
      }

      function Oe(e) {
        return ye(e) || Ie(e)
      }

      function Se(e) {
        return Ne(e) || Te(e)
      }
      r(ce, "GraphQLError"), r(pe, "undefinedIfEmpty"), r(de, "valueFromASTUntyped"), r(fe, "assertName"), r(ve, "assertEnumValueName"), r(he, "isType"), r(ye, "isScalarType"), r(me, "isObjectType"), r(Ne, "isInterfaceType"), r(Te, "isUnionType"), r(Ie, "isEnumType"), r(Ee, "isInputObjectType"), r(ge, "isListType"), r(be, "isNonNullType"), r(Oe, "isLeafType"), r(Se, "isAbstractType");
      class Ae {
        constructor(e) {
          he(e) || S(!1, `Expected ${s(e)} to be a GraphQL type.`), this.ofType = e
        }
        get[Symbol.toStringTag]() {
          return "GraphQLList"
        }
        toString() {
          return "[" + String(this.ofType) + "]"
        }
        toJSON() {
          return this.toString()
        }
      }
      r(Ae, "GraphQLList");
      class Le {
        constructor(e) {
          _e(e) || S(!1, `Expected ${s(e)} to be a GraphQL nullable type.`), this.ofType = e
        }
        get[Symbol.toStringTag]() {
          return "GraphQLNonNull"
        }
        toString() {
          return String(this.ofType) + "!"
        }
        toJSON() {
          return this.toString()
        }
      }

      function _e(e) {
        return he(e) && !be(e)
      }

      function we(e) {
        return "function" == typeof e ? e() : e
      }

      function De(e) {
        return "function" == typeof e ? e() : e
      }
      r(Le, "GraphQLNonNull"), r(_e, "isNullableType"), r(we, "resolveReadonlyArrayThunk"), r(De, "resolveObjMapThunk");
      class Fe {
        constructor(e) {
          var t, n, i, r;
          const o = null !== (t = e.parseValue) && void 0 !== t ? t : Y;
          this.name = fe(e.name), this.description = e.description, this.specifiedByURL = e.specifiedByURL, this.serialize = null !== (n = e.serialize) && void 0 !== n ? n : Y, this.parseValue = o, this.parseLiteral = null !== (i = e.parseLiteral) && void 0 !== i ? i : (e, t) => o(de(e, t)), this.extensions = ie(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (r = e.extensionASTNodes) && void 0 !== r ? r : [], null == e.specifiedByURL || "string" == typeof e.specifiedByURL || S(!1, `${this.name} must provide "specifiedByURL" as a string, but got: ${s(e.specifiedByURL)}.`), null == e.serialize || "function" == typeof e.serialize || S(!1, `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`), e.parseLiteral && ("function" == typeof e.parseValue && "function" == typeof e.parseLiteral || S(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`))
        }
        get[Symbol.toStringTag]() {
          return "GraphQLScalarType"
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            specifiedByURL: this.specifiedByURL,
            serialize: this.serialize,
            parseValue: this.parseValue,
            parseLiteral: this.parseLiteral,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
          }
        }
        toString() {
          return this.name
        }
        toJSON() {
          return this.toString()
        }
      }
      r(Fe, "GraphQLScalarType");
      class xe {
        constructor(e) {
          var t;
          this.name = fe(e.name), this.description = e.description, this.isTypeOf = e.isTypeOf, this.extensions = ie(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._fields = () => je(e), this._interfaces = () => Re(e), null == e.isTypeOf || "function" == typeof e.isTypeOf || S(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${s(e.isTypeOf)}.`)
        }
        get[Symbol.toStringTag]() {
          return "GraphQLObjectType"
        }
        getFields() {
          return "function" == typeof this._fields && (this._fields = this._fields()), this._fields
        }
        getInterfaces() {
          return "function" == typeof this._interfaces && (this._interfaces = this._interfaces()), this._interfaces
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: Ce(this.getFields()),
            isTypeOf: this.isTypeOf,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
          }
        }
        toString() {
          return this.name
        }
        toJSON() {
          return this.toString()
        }
      }

      function Re(e) {
        var t;
        const n = we(null !== (t = e.interfaces) && void 0 !== t ? t : []);
        return Array.isArray(n) || S(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`), n
      }

      function je(e) {
        const t = De(e.fields);
        return Ve(t) || S(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), X(t, ((t, n) => {
          var i;
          Ve(t) || S(!1, `${e.name}.${n} field config must be an object.`), null == t.resolve || "function" == typeof t.resolve || S(!1, `${e.name}.${n} field resolver must be a function if provided, but got: ${s(t.resolve)}.`);
          const r = null !== (i = t.args) && void 0 !== i ? i : {};
          return Ve(r) || S(!1, `${e.name}.${n} args must be an object with argument names as keys.`), {
            name: fe(n),
            description: t.description,
            type: t.type,
            args: Ue(r),
            resolve: t.resolve,
            subscribe: t.subscribe,
            deprecationReason: t.deprecationReason,
            extensions: ie(t.extensions),
            astNode: t.astNode
          }
        }))
      }

      function Ue(e) {
        return Object.entries(e).map((e => {
          let [t, n] = e;
          return {
            name: fe(t),
            description: n.description,
            type: n.type,
            defaultValue: n.defaultValue,
            deprecationReason: n.deprecationReason,
            extensions: ie(n.extensions),
            astNode: n.astNode
          }
        }))
      }

      function Ve(e) {
        return J(e) && !Array.isArray(e)
      }

      function Ce(e) {
        return X(e, (e => ({
          description: e.description,
          type: e.type,
          args: $e(e.args),
          resolve: e.resolve,
          subscribe: e.subscribe,
          deprecationReason: e.deprecationReason,
          extensions: e.extensions,
          astNode: e.astNode
        })))
      }

      function $e(e) {
        return H(e, (e => e.name), (e => ({
          description: e.description,
          type: e.type,
          defaultValue: e.defaultValue,
          deprecationReason: e.deprecationReason,
          extensions: e.extensions,
          astNode: e.astNode
        })))
      }
      r(xe, "GraphQLObjectType"), r(Re, "defineInterfaces"), r(je, "defineFieldMap"), r(Ue, "defineArguments"), r(Ve, "isPlainObj"), r(Ce, "fieldsToFieldsConfig"), r($e, "argsToArgsConfig");
      class Me {
        constructor(e) {
          var t;
          this.name = fe(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = ie(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._fields = je.bind(void 0, e), this._interfaces = Re.bind(void 0, e), null == e.resolveType || "function" == typeof e.resolveType || S(!1, `${this.name} must provide "resolveType" as a function, but got: ${s(e.resolveType)}.`)
        }
        get[Symbol.toStringTag]() {
          return "GraphQLInterfaceType"
        }
        getFields() {
          return "function" == typeof this._fields && (this._fields = this._fields()), this._fields
        }
        getInterfaces() {
          return "function" == typeof this._interfaces && (this._interfaces = this._interfaces()), this._interfaces
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: Ce(this.getFields()),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
          }
        }
        toString() {
          return this.name
        }
        toJSON() {
          return this.toString()
        }
      }
      r(Me, "GraphQLInterfaceType");
      class ke {
        constructor(e) {
          var t;
          this.name = fe(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = ie(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._types = Be.bind(void 0, e), null == e.resolveType || "function" == typeof e.resolveType || S(!1, `${this.name} must provide "resolveType" as a function, but got: ${s(e.resolveType)}.`)
        }
        get[Symbol.toStringTag]() {
          return "GraphQLUnionType"
        }
        getTypes() {
          return "function" == typeof this._types && (this._types = this._types()), this._types
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            types: this.getTypes(),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
          }
        }
        toString() {
          return this.name
        }
        toJSON() {
          return this.toString()
        }
      }

      function Be(e) {
        const t = we(e.types);
        return Array.isArray(t) || S(!1, `Must provide Array of types or a function which returns such an array for Union ${e.name}.`), t
      }
      r(ke, "GraphQLUnionType"), r(Be, "defineTypes");
      class Ge {
        constructor(e) {
          var t;
          this.name = fe(e.name), this.description = e.description, this.extensions = ie(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._values = Je(this.name, e.values), this._valueLookup = new Map(this._values.map((e => [e.value, e]))), this._nameLookup = q(this._values, (e => e.name))
        }
        get[Symbol.toStringTag]() {
          return "GraphQLEnumType"
        }
        getValues() {
          return this._values
        }
        getValue(e) {
          return this._nameLookup[e]
        }
        serialize(e) {
          const t = this._valueLookup.get(e);
          if (void 0 === t) throw new ce(`Enum "${this.name}" cannot represent value: ${s(e)}`);
          return t.name
        }
        parseValue(e) {
          if ("string" != typeof e) {
            const t = s(e);
            throw new ce(`Enum "${this.name}" cannot represent non-string value: ${t}.` + Pe(this, t))
          }
          const t = this.getValue(e);
          if (null == t) throw new ce(`Value "${e}" does not exist in "${this.name}" enum.` + Pe(this, e));
          return t.value
        }
        parseLiteral(e, t) {
          if (e.kind !== F.ENUM) {
            const t = V(e);
            throw new ce(`Enum "${this.name}" cannot represent non-enum value: ${t}.` + Pe(this, t), {
              nodes: e
            })
          }
          const n = this.getValue(e.value);
          if (null == n) {
            const t = V(e);
            throw new ce(`Value "${t}" does not exist in "${this.name}" enum.` + Pe(this, t), {
              nodes: e
            })
          }
          return n.value
        }
        toConfig() {
          const e = H(this.getValues(), (e => e.name), (e => ({
            description: e.description,
            value: e.value,
            deprecationReason: e.deprecationReason,
            extensions: e.extensions,
            astNode: e.astNode
          })));
          return {
            name: this.name,
            description: this.description,
            values: e,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
          }
        }
        toString() {
          return this.name
        }
        toJSON() {
          return this.toString()
        }
      }

      function Pe(e, t) {
        return Q("the enum value", ee(t, e.getValues().map((e => e.name))))
      }

      function Je(e, t) {
        return Ve(t) || S(!1, `${e} values must be an object with value names as keys.`), Object.entries(t).map((t => {
          let [n, i] = t;
          return Ve(i) || S(!1, `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${s(i)}.`), {
            name: ve(n),
            description: i.description,
            value: void 0 !== i.value ? i.value : n,
            deprecationReason: i.deprecationReason,
            extensions: ie(i.extensions),
            astNode: i.astNode
          }
        }))
      }
      r(Ge, "GraphQLEnumType"), r(Pe, "didYouMeanEnumValue"), r(Je, "defineEnumValues");
      class Qe {
        constructor(e) {
          var t;
          this.name = fe(e.name), this.description = e.description, this.extensions = ie(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._fields = Ye.bind(void 0, e)
        }
        get[Symbol.toStringTag]() {
          return "GraphQLInputObjectType"
        }
        getFields() {
          return "function" == typeof this._fields && (this._fields = this._fields()), this._fields
        }
        toConfig() {
          const e = X(this.getFields(), (e => ({
            description: e.description,
            type: e.type,
            defaultValue: e.defaultValue,
            deprecationReason: e.deprecationReason,
            extensions: e.extensions,
            astNode: e.astNode
          })));
          return {
            name: this.name,
            description: this.description,
            fields: e,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
          }
        }
        toString() {
          return this.name
        }
        toJSON() {
          return this.toString()
        }
      }

      function Ye(e) {
        const t = De(e.fields);
        return Ve(t) || S(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), X(t, ((t, n) => (!("resolve" in t) || S(!1, `${e.name}.${n} field has a resolve property, but Input Types cannot define resolvers.`), {
          name: fe(n),
          description: t.description,
          type: t.type,
          defaultValue: t.defaultValue,
          deprecationReason: t.deprecationReason,
          extensions: ie(t.extensions),
          astNode: t.astNode
        })))
      }
      r(Qe, "GraphQLInputObjectType"), r(Ye, "defineInputFieldMap");
      const ze = 2147483647,
        qe = -2147483648,
        He = new Fe({
          name: "Int",
          description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
          serialize(e) {
            const t = et(e);
            if ("boolean" == typeof t) return t ? 1 : 0;
            let n = t;
            if ("string" == typeof t && "" !== t && (n = Number(t)), "number" != typeof n || !Number.isInteger(n)) throw new ce(`Int cannot represent non-integer value: ${s(t)}`);
            if (n > ze || n < qe) throw new ce("Int cannot represent non 32-bit signed integer value: " + s(t));
            return n
          },
          parseValue(e) {
            if ("number" != typeof e || !Number.isInteger(e)) throw new ce(`Int cannot represent non-integer value: ${s(e)}`);
            if (e > ze || e < qe) throw new ce(`Int cannot represent non 32-bit signed integer value: ${e}`);
            return e
          },
          parseLiteral(e) {
            if (e.kind !== F.INT) throw new ce(`Int cannot represent non-integer value: ${V(e)}`, {
              nodes: e
            });
            const t = parseInt(e.value, 10);
            if (t > ze || t < qe) throw new ce(`Int cannot represent non 32-bit signed integer value: ${e.value}`, {
              nodes: e
            });
            return t
          }
        }),
        Xe = new Fe({
          name: "Float",
          description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
          serialize(e) {
            const t = et(e);
            if ("boolean" == typeof t) return t ? 1 : 0;
            let n = t;
            if ("string" == typeof t && "" !== t && (n = Number(t)), "number" != typeof n || !Number.isFinite(n)) throw new ce(`Float cannot represent non numeric value: ${s(t)}`);
            return n
          },
          parseValue(e) {
            if ("number" != typeof e || !Number.isFinite(e)) throw new ce(`Float cannot represent non numeric value: ${s(e)}`);
            return e
          },
          parseLiteral(e) {
            if (e.kind !== F.FLOAT && e.kind !== F.INT) throw new ce(`Float cannot represent non numeric value: ${V(e)}`, e);
            return parseFloat(e.value)
          }
        }),
        We = new Fe({
          name: "String",
          description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
          serialize(e) {
            const t = et(e);
            if ("string" == typeof t) return t;
            if ("boolean" == typeof t) return t ? "true" : "false";
            if ("number" == typeof t && Number.isFinite(t)) return t.toString();
            throw new ce(`String cannot represent value: ${s(e)}`)
          },
          parseValue(e) {
            if ("string" != typeof e) throw new ce(`String cannot represent a non string value: ${s(e)}`);
            return e
          },
          parseLiteral(e) {
            if (e.kind !== F.STRING) throw new ce(`String cannot represent a non string value: ${V(e)}`, {
              nodes: e
            });
            return e.value
          }
        }),
        Ke = new Fe({
          name: "Boolean",
          description: "The `Boolean` scalar type represents `true` or `false`.",
          serialize(e) {
            const t = et(e);
            if ("boolean" == typeof t) return t;
            if (Number.isFinite(t)) return 0 !== t;
            throw new ce(`Boolean cannot represent a non boolean value: ${s(t)}`)
          },
          parseValue(e) {
            if ("boolean" != typeof e) throw new ce(`Boolean cannot represent a non boolean value: ${s(e)}`);
            return e
          },
          parseLiteral(e) {
            if (e.kind !== F.BOOLEAN) throw new ce(`Boolean cannot represent a non boolean value: ${V(e)}`, {
              nodes: e
            });
            return e.value
          }
        }),
        Ze = new Fe({
          name: "ID",
          description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
          serialize(e) {
            const t = et(e);
            if ("string" == typeof t) return t;
            if (Number.isInteger(t)) return String(t);
            throw new ce(`ID cannot represent value: ${s(e)}`)
          },
          parseValue(e) {
            if ("string" == typeof e) return e;
            if ("number" == typeof e && Number.isInteger(e)) return e.toString();
            throw new ce(`ID cannot represent value: ${s(e)}`)
          },
          parseLiteral(e) {
            if (e.kind !== F.STRING && e.kind !== F.INT) throw new ce("ID cannot represent a non-string and non-integer value: " + V(e), {
              nodes: e
            });
            return e.value
          }
        });

      function et(e) {
        if (J(e)) {
          if ("function" == typeof e.valueOf) {
            const t = e.valueOf();
            if (!J(t)) return t
          }
          if ("function" == typeof e.toJSON) return e.toJSON()
        }
        return e
      }

      function tt(e, t) {
        if (be(t)) {
          const n = tt(e, t.ofType);
          return (null == n ? void 0 : n.kind) === F.NULL ? null : n
        }
        if (null === e) return {
          kind: F.NULL
        };
        if (void 0 === e) return null;
        if (ge(t)) {
          const n = t.ofType;
          if (P(e)) {
            const t = [];
            for (const i of e) {
              const e = tt(i, n);
              null != e && t.push(e)
            }
            return {
              kind: F.LIST,
              values: t
            }
          }
          return tt(e, n)
        }
        if (Ee(t)) {
          if (!J(e)) return null;
          const n = [];
          for (const i of Object.values(t.getFields())) {
            const t = tt(e[i.name], i.type);
            t && n.push({
              kind: F.OBJECT_FIELD,
              name: {
                kind: F.NAME,
                value: i.name
              },
              value: t
            })
          }
          return {
            kind: F.OBJECT,
            fields: n
          }
        }
        if (Oe(t)) {
          const n = t.serialize(e);
          if (null == n) return null;
          if ("boolean" == typeof n) return {
            kind: F.BOOLEAN,
            value: n
          };
          if ("number" == typeof n && Number.isFinite(n)) {
            const e = String(n);
            return nt.test(e) ? {
              kind: F.INT,
              value: e
            } : {
              kind: F.FLOAT,
              value: e
            }
          }
          if ("string" == typeof n) return Ie(t) ? {
            kind: F.ENUM,
            value: n
          } : t === Ze && nt.test(n) ? {
            kind: F.INT,
            value: n
          } : {
            kind: F.STRING,
            value: n
          };
          throw new TypeError(`Cannot convert value to AST: ${s(n)}.`)
        }
        d(!1, "Unexpected input type: " + s(t))
      }
      Object.freeze([We, He, Xe, Ke, Ze]), r(et, "serializeObject"), r(tt, "astFromValue");
      const nt = /^-?(?:0|[1-9][0-9]*)$/,
        it = new xe({
          name: "__Schema",
          description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
          fields: () => ({
            description: {
              type: We,
              resolve: e => e.description
            },
            types: {
              description: "A list of all types supported by this server.",
              type: new Le(new Ae(new Le(ot))),
              resolve: e => Object.values(e.getTypeMap())
            },
            queryType: {
              description: "The type that query operations will be rooted at.",
              type: new Le(ot),
              resolve: e => e.getQueryType()
            },
            mutationType: {
              description: "If this server supports mutation, the type that mutation operations will be rooted at.",
              type: ot,
              resolve: e => e.getMutationType()
            },
            subscriptionType: {
              description: "If this server support subscription, the type that subscription operations will be rooted at.",
              type: ot,
              resolve: e => e.getSubscriptionType()
            },
            directives: {
              description: "A list of all directives supported by this server.",
              type: new Le(new Ae(new Le(rt))),
              resolve: e => e.getDirectives()
            }
          })
        }),
        rt = new xe({
          name: "__Directive",
          description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
          fields: () => ({
            name: {
              type: new Le(We),
              resolve: e => e.name
            },
            description: {
              type: We,
              resolve: e => e.description
            },
            isRepeatable: {
              type: new Le(Ke),
              resolve: e => e.isRepeatable
            },
            locations: {
              type: new Le(new Ae(new Le(st))),
              resolve: e => e.locations
            },
            args: {
              type: new Le(new Ae(new Le(lt))),
              args: {
                includeDeprecated: {
                  type: Ke,
                  defaultValue: !1
                }
              },
              resolve(e, t) {
                let {
                  includeDeprecated: n
                } = t;
                return n ? e.args : e.args.filter((e => null == e.deprecationReason))
              }
            }
          })
        }),
        st = new Ge({
          name: "__DirectiveLocation",
          description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
          values: {
            QUERY: {
              value: f.QUERY,
              description: "Location adjacent to a query operation."
            },
            MUTATION: {
              value: f.MUTATION,
              description: "Location adjacent to a mutation operation."
            },
            SUBSCRIPTION: {
              value: f.SUBSCRIPTION,
              description: "Location adjacent to a subscription operation."
            },
            FIELD: {
              value: f.FIELD,
              description: "Location adjacent to a field."
            },
            FRAGMENT_DEFINITION: {
              value: f.FRAGMENT_DEFINITION,
              description: "Location adjacent to a fragment definition."
            },
            FRAGMENT_SPREAD: {
              value: f.FRAGMENT_SPREAD,
              description: "Location adjacent to a fragment spread."
            },
            INLINE_FRAGMENT: {
              value: f.INLINE_FRAGMENT,
              description: "Location adjacent to an inline fragment."
            },
            VARIABLE_DEFINITION: {
              value: f.VARIABLE_DEFINITION,
              description: "Location adjacent to a variable definition."
            },
            SCHEMA: {
              value: f.SCHEMA,
              description: "Location adjacent to a schema definition."
            },
            SCALAR: {
              value: f.SCALAR,
              description: "Location adjacent to a scalar definition."
            },
            OBJECT: {
              value: f.OBJECT,
              description: "Location adjacent to an object type definition."
            },
            FIELD_DEFINITION: {
              value: f.FIELD_DEFINITION,
              description: "Location adjacent to a field definition."
            },
            ARGUMENT_DEFINITION: {
              value: f.ARGUMENT_DEFINITION,
              description: "Location adjacent to an argument definition."
            },
            INTERFACE: {
              value: f.INTERFACE,
              description: "Location adjacent to an interface definition."
            },
            UNION: {
              value: f.UNION,
              description: "Location adjacent to a union definition."
            },
            ENUM: {
              value: f.ENUM,
              description: "Location adjacent to an enum definition."
            },
            ENUM_VALUE: {
              value: f.ENUM_VALUE,
              description: "Location adjacent to an enum value definition."
            },
            INPUT_OBJECT: {
              value: f.INPUT_OBJECT,
              description: "Location adjacent to an input object type definition."
            },
            INPUT_FIELD_DEFINITION: {
              value: f.INPUT_FIELD_DEFINITION,
              description: "Location adjacent to an input object field definition."
            }
          }
        }),
        ot = new xe({
          name: "__Type",
          description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
          fields: () => ({
            kind: {
              type: new Le(dt),
              resolve: e => ye(e) ? ct.SCALAR : me(e) ? ct.OBJECT : Ne(e) ? ct.INTERFACE : Te(e) ? ct.UNION : Ie(e) ? ct.ENUM : Ee(e) ? ct.INPUT_OBJECT : ge(e) ? ct.LIST : be(e) ? ct.NON_NULL : void d(!1, `Unexpected type: "${s(e)}".`)
            },
            name: {
              type: We,
              resolve: e => "name" in e ? e.name : void 0
            },
            description: {
              type: We,
              resolve: e => "description" in e ? e.description : void 0
            },
            specifiedByURL: {
              type: We,
              resolve: e => "specifiedByURL" in e ? e.specifiedByURL : void 0
            },
            fields: {
              type: new Ae(new Le(at)),
              args: {
                includeDeprecated: {
                  type: Ke,
                  defaultValue: !1
                }
              },
              resolve(e, t) {
                let {
                  includeDeprecated: n
                } = t;
                if (me(e) || Ne(e)) {
                  const t = Object.values(e.getFields());
                  return n ? t : t.filter((e => null == e.deprecationReason))
                }
              }
            },
            interfaces: {
              type: new Ae(new Le(ot)),
              resolve(e) {
                if (me(e) || Ne(e)) return e.getInterfaces()
              }
            },
            possibleTypes: {
              type: new Ae(new Le(ot)),
              resolve(e, t, n, i) {
                let {
                  schema: r
                } = i;
                if (Se(e)) return r.getPossibleTypes(e)
              }
            },
            enumValues: {
              type: new Ae(new Le(ut)),
              args: {
                includeDeprecated: {
                  type: Ke,
                  defaultValue: !1
                }
              },
              resolve(e, t) {
                let {
                  includeDeprecated: n
                } = t;
                if (Ie(e)) {
                  const t = e.getValues();
                  return n ? t : t.filter((e => null == e.deprecationReason))
                }
              }
            },
            inputFields: {
              type: new Ae(new Le(lt)),
              args: {
                includeDeprecated: {
                  type: Ke,
                  defaultValue: !1
                }
              },
              resolve(e, t) {
                let {
                  includeDeprecated: n
                } = t;
                if (Ee(e)) {
                  const t = Object.values(e.getFields());
                  return n ? t : t.filter((e => null == e.deprecationReason))
                }
              }
            },
            ofType: {
              type: ot,
              resolve: e => "ofType" in e ? e.ofType : void 0
            }
          })
        }),
        at = new xe({
          name: "__Field",
          description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
          fields: () => ({
            name: {
              type: new Le(We),
              resolve: e => e.name
            },
            description: {
              type: We,
              resolve: e => e.description
            },
            args: {
              type: new Le(new Ae(new Le(lt))),
              args: {
                includeDeprecated: {
                  type: Ke,
                  defaultValue: !1
                }
              },
              resolve(e, t) {
                let {
                  includeDeprecated: n
                } = t;
                return n ? e.args : e.args.filter((e => null == e.deprecationReason))
              }
            },
            type: {
              type: new Le(ot),
              resolve: e => e.type
            },
            isDeprecated: {
              type: new Le(Ke),
              resolve: e => null != e.deprecationReason
            },
            deprecationReason: {
              type: We,
              resolve: e => e.deprecationReason
            }
          })
        }),
        lt = new xe({
          name: "__InputValue",
          description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
          fields: () => ({
            name: {
              type: new Le(We),
              resolve: e => e.name
            },
            description: {
              type: We,
              resolve: e => e.description
            },
            type: {
              type: new Le(ot),
              resolve: e => e.type
            },
            defaultValue: {
              type: We,
              description: "A GraphQL-formatted string representing the default value for this input value.",
              resolve(e) {
                const {
                  type: t,
                  defaultValue: n
                } = e, i = tt(n, t);
                return i ? V(i) : null
              }
            },
            isDeprecated: {
              type: new Le(Ke),
              resolve: e => null != e.deprecationReason
            },
            deprecationReason: {
              type: We,
              resolve: e => e.deprecationReason
            }
          })
        }),
        ut = new xe({
          name: "__EnumValue",
          description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
          fields: () => ({
            name: {
              type: new Le(We),
              resolve: e => e.name
            },
            description: {
              type: We,
              resolve: e => e.description
            },
            isDeprecated: {
              type: new Le(Ke),
              resolve: e => null != e.deprecationReason
            },
            deprecationReason: {
              type: We,
              resolve: e => e.deprecationReason
            }
          })
        });
      let ct;
      var pt;
      (pt = ct || (ct = {})).SCALAR = "SCALAR", pt.OBJECT = "OBJECT", pt.INTERFACE = "INTERFACE", pt.UNION = "UNION", pt.ENUM = "ENUM", pt.INPUT_OBJECT = "INPUT_OBJECT", pt.LIST = "LIST", pt.NON_NULL = "NON_NULL";
      const dt = new Ge({
          name: "__TypeKind",
          description: "An enum describing what kind of type a given `__Type` is.",
          values: {
            SCALAR: {
              value: ct.SCALAR,
              description: "Indicates this type is a scalar."
            },
            OBJECT: {
              value: ct.OBJECT,
              description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
            },
            INTERFACE: {
              value: ct.INTERFACE,
              description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
            },
            UNION: {
              value: ct.UNION,
              description: "Indicates this type is a union. `possibleTypes` is a valid field."
            },
            ENUM: {
              value: ct.ENUM,
              description: "Indicates this type is an enum. `enumValues` is a valid field."
            },
            INPUT_OBJECT: {
              value: ct.INPUT_OBJECT,
              description: "Indicates this type is an input object. `inputFields` is a valid field."
            },
            LIST: {
              value: ct.LIST,
              description: "Indicates this type is a list. `ofType` is a valid field."
            },
            NON_NULL: {
              value: ct.NON_NULL,
              description: "Indicates this type is a non-null. `ofType` is a valid field."
            }
          }
        }),
        ft = {
          name: "__schema",
          type: new Le(it),
          description: "Access the current type schema of this server.",
          args: [],
          resolve: (e, t, n, i) => {
            let {
              schema: r
            } = i;
            return r
          },
          deprecationReason: void 0,
          extensions: Object.create(null),
          astNode: void 0
        },
        vt = {
          name: "__type",
          type: ot,
          description: "Request the type information of a single type.",
          args: [{
            name: "name",
            description: void 0,
            type: new Le(We),
            defaultValue: void 0,
            deprecationReason: void 0,
            extensions: Object.create(null),
            astNode: void 0
          }],
          resolve: (e, t, n, i) => {
            let {
              name: r
            } = t, {
              schema: s
            } = i;
            return s.getType(r)
          },
          deprecationReason: void 0,
          extensions: Object.create(null),
          astNode: void 0
        },
        ht = {
          name: "__typename",
          type: new Le(We),
          description: "The name of the current Object type at runtime.",
          args: [],
          resolve: (e, t, n, i) => {
            let {
              parentType: r
            } = i;
            return r.name
          },
          deprecationReason: void 0,
          extensions: Object.create(null),
          astNode: void 0
        };
      Object.freeze([it, rt, st, ot, at, lt, ut, dt])
    }
  }
]);