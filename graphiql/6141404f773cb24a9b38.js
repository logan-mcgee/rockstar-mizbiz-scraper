"use strict";
(self.webpackChunk_rockstargames_graphiql = self.webpackChunk_rockstargames_graphiql || []).push([
  [230], {
    9230: (e, t, a) => {
      a.r(t);
      var l = a(5489),
        r = a(1851),
        n = (a(822), a(7469), Object.defineProperty),
        u = (e, t) => n(e, "name", {
          value: t,
          configurable: !0
        });

      function i(e, t) {
        var a, l;
        const {
          levels: r,
          indentLevel: n
        } = e;
        return ((r && 0 !== r.length ? r[r.length - 1] - ((null === (a = this.electricInput) || void 0 === a ? void 0 : a.test(t)) ? 1 : 0) : n) || 0) * ((null === (l = this.config) || void 0 === l ? void 0 : l.indentUnit) || 0)
      }
      l.C.defineMode("graphql-variables", (e => {
        const t = (0, r.o)({
          eatWhitespace: e => e.eatSpace(),
          lexRules: s,
          parseRules: c,
          editorConfig: {
            tabSize: e.tabSize
          }
        });
        return {
          config: e,
          startState: t.startState,
          token: t.token,
          indent: i,
          electricInput: /^\s*[}\]]/,
          fold: "brace",
          closeBrackets: {
            pairs: '[]{}""',
            explode: "[]{}"
          }
        }
      })), u(i, "indent");
      const s = {
          Punctuation: /^\[|]|\{|\}|:|,/,
          Number: /^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,
          String: /^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,
          Keyword: /^true|false|null/
        },
        c = {
          Document: [(0, r.p)("{"), (0, r.l)("Variable", (0, r.b)((0, r.p)(","))), (0, r.p)("}")],
          Variable: [o("variable"), (0, r.p)(":"), "Value"],
          Value(e) {
            switch (e.kind) {
              case "Number":
                return "NumberValue";
              case "String":
                return "StringValue";
              case "Punctuation":
                switch (e.value) {
                  case "[":
                    return "ListValue";
                  case "{":
                    return "ObjectValue"
                }
                return null;
              case "Keyword":
                switch (e.value) {
                  case "true":
                  case "false":
                    return "BooleanValue";
                  case "null":
                    return "NullValue"
                }
                return null
            }
          },
          NumberValue: [(0, r.t)("Number", "number")],
          StringValue: [(0, r.t)("String", "string")],
          BooleanValue: [(0, r.t)("Keyword", "builtin")],
          NullValue: [(0, r.t)("Keyword", "keyword")],
          ListValue: [(0, r.p)("["), (0, r.l)("Value", (0, r.b)((0, r.p)(","))), (0, r.p)("]")],
          ObjectValue: [(0, r.p)("{"), (0, r.l)("ObjectField", (0, r.b)((0, r.p)(","))), (0, r.p)("}")],
          ObjectField: [o("attribute"), (0, r.p)(":"), "Value"]
        };

      function o(e) {
        return {
          style: e,
          match: e => "String" === e.kind,
          update(e, t) {
            e.name = t.value.slice(1, -1)
          }
        }
      }
      u(o, "namedKey")
    }
  }
]);