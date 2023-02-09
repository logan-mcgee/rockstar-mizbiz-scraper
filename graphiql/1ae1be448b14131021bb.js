"use strict";
(self.webpackChunk_rockstargames_graphiql = self.webpackChunk_rockstargames_graphiql || []).push([
  [141], {
    3005: (t, e, s) => {
      s.d(e, {
        C: () => i,
        P: () => o,
        R: () => a
      });
      var n = Object.defineProperty,
        r = (t, e) => n(t, "name", {
          value: e,
          configurable: !0
        });
      class i {
        constructor(t) {
          var e = this;
          this.getStartOfToken = () => this._start, this.getCurrentPosition = () => this._pos, this.eol = () => this._sourceText.length === this._pos, this.sol = () => 0 === this._pos, this.peek = () => this._sourceText.charAt(this._pos) ? this._sourceText.charAt(this._pos) : null, this.next = () => {
            const t = this._sourceText.charAt(this._pos);
            return this._pos++, t
          }, this.eat = t => {
            if (this._testNextCharacter(t)) return this._start = this._pos, this._pos++, this._sourceText.charAt(this._pos - 1)
          }, this.eatWhile = t => {
            let e = this._testNextCharacter(t),
              s = !1;
            for (e && (s = e, this._start = this._pos); e;) this._pos++, e = this._testNextCharacter(t), s = !0;
            return s
          }, this.eatSpace = () => this.eatWhile(/[\s\u00a0]/), this.skipToEnd = () => {
            this._pos = this._sourceText.length
          }, this.skipTo = t => {
            this._pos = t
          }, this.match = function(t) {
            let s = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = null,
              i = null;
            return "string" == typeof t ? (i = new RegExp(t, n ? "i" : "g").test(e._sourceText.substr(e._pos, t.length)), r = t) : t instanceof RegExp && (i = e._sourceText.slice(e._pos).match(t), r = null == i ? void 0 : i[0]), !(null == i || !("string" == typeof t || i instanceof Array && e._sourceText.startsWith(i[0], e._pos))) && (s && (e._start = e._pos, r && r.length && (e._pos += r.length)), i)
          }, this.backUp = t => {
            this._pos -= t
          }, this.column = () => this._pos, this.indentation = () => {
            const t = this._sourceText.match(/\s*/);
            let e = 0;
            if (t && 0 !== t.length) {
              const s = t[0];
              let n = 0;
              for (; s.length > n;) 9 === s.charCodeAt(n) ? e += 2 : e++, n++
            }
            return e
          }, this.current = () => this._sourceText.slice(this._start, this._pos), this._start = 0, this._pos = 0, this._sourceText = t
        }
        _testNextCharacter(t) {
          const e = this._sourceText.charAt(this._pos);
          let s = !1;
          return s = "string" == typeof t ? e === t : t instanceof RegExp ? t.test(e) : t(e), s
        }
      }
      r(i, "CharacterStream");
      class a {
        constructor(t, e) {
          this.containsPosition = t => this.start.line === t.line ? this.start.character <= t.character : this.end.line === t.line ? this.end.character >= t.character : this.start.line <= t.line && this.end.line >= t.line, this.start = t, this.end = e
        }
        setStart(t, e) {
          this.start = new o(t, e)
        }
        setEnd(t, e) {
          this.end = new o(t, e)
        }
      }
      r(a, "Range");
      class o {
        constructor(t, e) {
          this.lessThanOrEqualTo = t => this.line < t.line || this.line === t.line && this.character <= t.character, this.line = t, this.character = e
        }
        setLine(t) {
          this.line = t
        }
        setCharacter(t) {
          this.character = t
        }
      }
      r(o, "Position")
    },
    7141: (t, e, s) => {
      s.r(e);
      var n = s(1703),
        r = s(2877),
        i = s(7990),
        a = s(9538),
        o = s(3201),
        h = s(2618),
        c = s(3274),
        l = s(5580),
        u = s(4873),
        p = s(6300),
        g = s(4800),
        d = s(2266),
        _ = s(2767),
        f = s(4196),
        v = s(1294),
        m = s(9092),
        x = s(5311),
        y = s(6584),
        T = s(7359),
        C = s(3486),
        w = s(4275),
        k = s(8087),
        P = s(5394),
        E = s(9207),
        b = s(3005),
        A = (s(1105), s(822), s(8853), Object.defineProperty),
        R = (t, e) => A(t, "name", {
          value: e,
          configurable: !0
        });
      const L = [r.t, i.q, a.P, o.L, h.y, c.o, l.I, u.J, p.k, g.g, d.L, _.P];

      function S(t, e, s, n, r) {
        const i = f.i.filter((t => t !== v.J && t !== m.i && (!n || t !== x.a)));
        return s && Array.prototype.push.apply(i, s), r && Array.prototype.push.apply(i, L), (0, y.Gu)(t, e, i).filter((t => {
          if (-1 !== t.message.indexOf("Unknown directive") && t.nodes) {
            const e = t.nodes[0];
            if (e && e.kind === T.h.DIRECTIVE) {
              const t = e.name.value;
              if ("arguments" === t || "argumentDefinitions" === t) return !1
            }
          }
          return !0
        }))
      }
      R(S, "validateWithCustomRules");
      const Q = {
          Error: 1,
          Warning: 2,
          Information: 3,
          Hint: 4
        },
        G = R(((t, e) => {
          if (!t) throw new Error(e)
        }), "invariant");

      function q(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          s = arguments.length > 2 ? arguments[2] : void 0,
          n = arguments.length > 3 ? arguments[3] : void 0,
          r = arguments.length > 4 ? arguments[4] : void 0;
        var i, a;
        let o = null;
        r && (t += "string" == typeof r ? "\n\n" + r : "\n\n" + r.reduce(((t, e) => t + ((0, C.S)(e) + "\n\n")), ""));
        try {
          o = (0, w.Qc)(t)
        } catch (e) {
          if (e instanceof k.__) {
            const s = N(null !== (a = null === (i = e.locations) || void 0 === i ? void 0 : i[0]) && void 0 !== a ? a : {
              line: 0,
              column: 0
            }, t);
            return [{
              severity: Q.Error,
              message: e.message,
              source: "GraphQL: Syntax",
              range: s
            }]
          }
          throw e
        }
        return O(o, e, s, n)
      }

      function O(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          s = arguments.length > 2 ? arguments[2] : void 0,
          n = arguments.length > 3 ? arguments[3] : void 0;
        if (!e) return [];
        const r = W(S(e, t, s, n), (t => D(t, Q.Error, "Validation"))),
          i = W((0, y.Gu)(e, t, [P.r]), (t => D(t, Q.Warning, "Deprecation")));
        return r.concat(i)
      }

      function W(t, e) {
        return Array.prototype.concat.apply([], t.map(e))
      }

      function D(t, e, s) {
        if (!t.nodes) return [];
        const n = [];
        return t.nodes.forEach((r => {
          const i = "Variable" !== r.kind && "name" in r && void 0 !== r.name ? r.name : "variable" in r && void 0 !== r.variable ? r.variable : r;
          if (i) {
            G(t.locations, "GraphQL validation error requires locations.");
            const r = t.locations[0],
              a = I(i),
              o = r.column + (a.end - a.start);
            n.push({
              source: `GraphQL: ${s}`,
              message: t.message,
              severity: e,
              range: new b.R(new b.P(r.line - 1, r.column - 1), new b.P(r.line - 1, o))
            })
          }
        })), n
      }

      function N(t, e) {
        const s = (0, E.o)(),
          n = s.startState(),
          r = e.split("\n");
        G(r.length >= t.line, "Query text must have more lines than where the error happened");
        let i = null;
        for (let e = 0; e < t.line; e++)
          for (i = new b.C(r[e]); !i.eol() && "invalidchar" !== s.token(i, n););
        G(i, "Expected Parser stream to be available.");
        const a = t.line - 1,
          o = i.getStartOfToken(),
          h = i.getCurrentPosition();
        return new b.R(new b.P(a, o), new b.P(a, h))
      }

      function I(t) {
        const e = t.loc;
        return G(e, "Expected ASTNode to have a location."), e
      }
      R(q, "getDiagnostics"), R(O, "validateQuery"), R(W, "mapCat"), R(D, "annotations"), R(N, "getRange"), R(I, "getLocation");
      const V = ["error", "warning", "information", "hint"],
        j = {
          "GraphQL: Validation": "validation",
          "GraphQL: Deprecation": "deprecation",
          "GraphQL: Syntax": "syntax"
        };
      n.C.registerHelper("lint", "graphql", ((t, e) => q(t, e.schema, e.validationRules, void 0, e.externalFragments).map((t => ({
        message: t.message,
        severity: t.severity ? V[t.severity - 1] : V[0],
        type: t.source ? j[t.source] : void 0,
        from: n.C.Pos(t.range.start.line, t.range.start.character),
        to: n.C.Pos(t.range.end.line, t.range.end.character)
      })))))
    }
  }
]);