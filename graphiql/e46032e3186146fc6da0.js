"use strict";
(self.webpackChunk_rockstargames_graphiql = self.webpackChunk_rockstargames_graphiql || []).push([
  [390], {
    5390: (e, t, n) => {
      n.r(t);
      var i = n(1703),
        a = n(9207),
        r = (n(1105), n(822), n(8853), Object.defineProperty),
        l = (e, t) => r(e, "name", {
          value: t,
          configurable: !0
        });

      function o(e, t) {
        var n, i;
        const a = e.levels;
        return ((a && 0 !== a.length ? a[a.length - 1] - ((null === (n = this.electricInput) || void 0 === n ? void 0 : n.test(t)) ? 1 : 0) : e.indentLevel) || 0) * ((null === (i = this.config) || void 0 === i ? void 0 : i.indentUnit) || 0)
      }
      l(o, "indent");
      const s = l((e => {
        const t = (0, a.o)({
          eatWhitespace: e => e.eatWhile(a.i),
          lexRules: a.L,
          parseRules: a.P,
          editorConfig: {
            tabSize: e.tabSize
          }
        });
        return {
          config: e,
          startState: t.startState,
          token: t.token,
          indent: o,
          electricInput: /^\s*[})\]]/,
          fold: "brace",
          lineComment: "#",
          closeBrackets: {
            pairs: '()[]{}""',
            explode: "()[]{}"
          }
        }
      }), "graphqlModeFactory");
      i.C.defineMode("graphql", s)
    }
  }
]);