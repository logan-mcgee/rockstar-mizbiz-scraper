"use strict";
(self.webpackChunk_rockstargames_graphiql = self.webpackChunk_rockstargames_graphiql || []).push([
  [591], {
    2591: (e, t, r) => {
      r.r(t);
      var n = r(1703),
        l = r(9207),
        u = (r(1105), r(822), r(8853), Object.defineProperty);

      function a(e, t) {
        var r, n;
        const l = e.levels;
        return ((l && 0 !== l.length ? l[l.length - 1] - ((null === (r = this.electricInput) || void 0 === r ? void 0 : r.test(t)) ? 1 : 0) : e.indentLevel) || 0) * ((null === (n = this.config) || void 0 === n ? void 0 : n.indentUnit) || 0)
      }
      n.C.defineMode("graphql-results", (e => {
        const t = (0, l.o)({
          eatWhitespace: e => e.eatSpace(),
          lexRules: i,
          parseRules: s,
          editorConfig: {
            tabSize: e.tabSize
          }
        });
        return {
          config: e,
          startState: t.startState,
          token: t.token,
          indent: a,
          electricInput: /^\s*[}\]]/,
          fold: "brace",
          closeBrackets: {
            pairs: '[]{}""',
            explode: "[]{}"
          }
        }
      })), u(a, "name", {
        value: "indent",
        configurable: !0
      });
      const i = {
          Punctuation: /^\[|]|\{|\}|:|,/,
          Number: /^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,
          String: /^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,
          Keyword: /^true|false|null/
        },
        s = {
          Document: [(0, l.p)("{"), (0, l.l)("Entry", (0, l.p)(",")), (0, l.p)("}")],
          Entry: [(0, l.t)("String", "def"), (0, l.p)(":"), "Value"],
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
          NumberValue: [(0, l.t)("Number", "number")],
          StringValue: [(0, l.t)("String", "string")],
          BooleanValue: [(0, l.t)("Keyword", "builtin")],
          NullValue: [(0, l.t)("Keyword", "keyword")],
          ListValue: [(0, l.p)("["), (0, l.l)("Value", (0, l.p)(",")), (0, l.p)("]")],
          ObjectValue: [(0, l.p)("{"), (0, l.l)("ObjectField", (0, l.p)(",")), (0, l.p)("}")],
          ObjectField: [(0, l.t)("String", "property"), (0, l.p)(":"), "Value"]
        }
    }
  }
]);