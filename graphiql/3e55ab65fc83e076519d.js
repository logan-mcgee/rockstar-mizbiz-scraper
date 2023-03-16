"use strict";
(self.webpackChunk_rockstargames_graphiql = self.webpackChunk_rockstargames_graphiql || []).push([
  [992], {
    7343: (e, t, n) => {
      n.d(t, {
        P: () => o,
        R: () => i
      });
      var r = Object.defineProperty,
        a = (e, t) => r(e, "name", {
          value: t,
          configurable: !0
        });
      class i {
        constructor(e, t) {
          this.containsPosition = e => this.start.line === e.line ? this.start.character <= e.character : this.end.line === e.line ? this.end.character >= e.character : this.start.line <= e.line && this.end.line >= e.line, this.start = e, this.end = t
        }
        setStart(e, t) {
          this.start = new o(e, t)
        }
        setEnd(e, t) {
          this.end = new o(e, t)
        }
      }
      a(i, "Range");
      class o {
        constructor(e, t) {
          this.lessThanOrEqualTo = e => this.line < e.line || this.line === e.line && this.character <= e.character, this.line = e, this.character = t
        }
        setLine(e) {
          this.line = e
        }
        setCharacter(e) {
          this.character = e
        }
      }
      a(o, "Position")
    },
    4992: (e, t, n) => {
      n.r(t);
      var r = n(5489),
        a = n(2877),
        i = n(7990),
        o = n(9538),
        s = n(3201),
        l = n(2618),
        c = n(3274),
        h = n(5580),
        u = n(4873),
        d = n(6300),
        g = n(4800),
        p = n(2266),
        v = n(2767),
        f = n(4196),
        m = n(1294),
        y = n(9092),
        w = n(5311),
        P = n(6584),
        b = n(7359),
        k = n(3486),
        E = n(4275),
        C = n(8087),
        L = n(5394),
        Q = n(1851),
        G = n(7343),
        R = (n(822), n(7469), Object.defineProperty),
        x = (e, t) => R(e, "name", {
          value: t,
          configurable: !0
        });
      const S = [a.t, i.q, o.P, s.L, l.y, c.o, h.I, u.J, d.k, g.g, p.L, v.P];

      function q(e, t, n, r, a) {
        const i = f.i.filter((e => e !== m.J && e !== y.i && (!r || e !== w.a)));
        return n && Array.prototype.push.apply(i, n), a && Array.prototype.push.apply(i, S), (0, P.Gu)(e, t, i).filter((e => {
          if (e.message.includes("Unknown directive") && e.nodes) {
            const t = e.nodes[0];
            if (t && t.kind === b.h.DIRECTIVE) {
              const e = t.name.value;
              if ("arguments" === e || "argumentDefinitions" === e) return !1
            }
          }
          return !0
        }))
      }
      x(q, "validateWithCustomRules");
      const _ = {
          Error: 1,
          Warning: 2,
          Information: 3,
          Hint: 4
        },
        D = x(((e, t) => {
          if (!e) throw new Error(t)
        }), "invariant");

      function T(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0;
        var i, o;
        let s = null,
          l = "";
        a && (l = "string" == typeof a ? a : a.reduce(((e, t) => e + (0, k.S)(t) + "\n\n"), ""));
        const c = l ? `${e}\n\n${l}` : e;
        try {
          s = (0, E.Qc)(c)
        } catch (e) {
          if (e instanceof C.__) {
            const t = V(null !== (o = null === (i = e.locations) || void 0 === i ? void 0 : i[0]) && void 0 !== o ? o : {
              line: 0,
              column: 0
            }, c);
            return [{
              severity: _.Error,
              message: e.message,
              source: "GraphQL: Syntax",
              range: t
            }]
          }
          throw e
        }
        return I(s, t, n, r)
      }

      function I(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!t) return [];
        const n = q(t, e, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0).flatMap((e => O(e, _.Error, "Validation"))),
          r = (0, P.Gu)(t, e, [L.r]).flatMap((e => O(e, _.Warning, "Deprecation")));
        return n.concat(r)
      }

      function O(e, t, n) {
        if (!e.nodes) return [];
        const r = [];
        return e.nodes.forEach(((a, i) => {
          const o = "Variable" !== a.kind && "name" in a && void 0 !== a.name ? a.name : "variable" in a && void 0 !== a.variable ? a.variable : a;
          if (o) {
            D(e.locations, "GraphQL validation error requires locations.");
            const a = e.locations[i],
              s = A(o),
              l = a.column + (s.end - s.start);
            r.push({
              source: `GraphQL: ${n}`,
              message: e.message,
              severity: t,
              range: new G.R(new G.P(a.line - 1, a.column - 1), new G.P(a.line - 1, l))
            })
          }
        })), r
      }

      function V(e, t) {
        const n = (0, Q.o)(),
          r = n.startState(),
          a = t.split("\n");
        D(a.length >= e.line, "Query text must have more lines than where the error happened");
        let i = null;
        for (let t = 0; t < e.line; t++)
          for (i = new Q.C(a[t]); !i.eol() && "invalidchar" !== n.token(i, r););
        D(i, "Expected Parser stream to be available.");
        const o = e.line - 1,
          s = i.getStartOfToken(),
          l = i.getCurrentPosition();
        return new G.R(new G.P(o, s), new G.P(o, l))
      }

      function A(e) {
        const t = e.loc;
        return D(t, "Expected ASTNode to have a location."), t
      }
      x(T, "getDiagnostics"), x(I, "validateQuery"), x(O, "annotations"), x(V, "getRange"), x(A, "getLocation");
      const W = ["error", "warning", "information", "hint"],
        $ = {
          "GraphQL: Validation": "validation",
          "GraphQL: Deprecation": "deprecation",
          "GraphQL: Syntax": "syntax"
        };
      r.C.registerHelper("lint", "graphql", ((e, t) => {
        const {
          schema: n,
          validationRules: a,
          externalFragments: i
        } = t;
        return T(e, n, a, void 0, i).map((e => ({
          message: e.message,
          severity: e.severity ? W[e.severity - 1] : W[0],
          type: e.source ? $[e.source] : void 0,
          from: r.C.Pos(e.range.start.line, e.range.start.character),
          to: r.C.Pos(e.range.end.line, e.range.end.character)
        })))
      }))
    }
  }
]);