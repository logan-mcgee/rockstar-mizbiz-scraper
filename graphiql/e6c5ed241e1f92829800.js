"use strict";
(self.webpackChunk_rockstargames_graphiql = self.webpackChunk_rockstargames_graphiql || []).push([
  [92], {
    3092: (e, n, r) => {
      r.r(n);
      var t = r(1703),
        a = r(398),
        i = (r(1105), r(822), r(8853), Object.defineProperty),
        s = (e, n) => i(e, "name", {
          value: n,
          configurable: !0
        });

      function c(e) {
        o = e, u = e.length, l = d = f = -1, x(), O();
        const n = h();
        return g("EOF"), n
      }
      let o, u, l, d, f, p, b;

      function h() {
        const e = l,
          n = [];
        if (g("{"), !E("}")) {
          do {
            n.push(m())
          } while (E(","));
          g("}")
        }
        return {
          kind: "Object",
          start: e,
          end: f,
          members: n
        }
      }

      function m() {
        const e = l,
          n = "String" === b ? y() : null;
        g("String"), g(":");
        const r = v();
        return {
          kind: "Member",
          start: e,
          end: f,
          key: n,
          value: r
        }
      }

      function k() {
        const e = l,
          n = [];
        if (g("["), !E("]")) {
          do {
            n.push(v())
          } while (E(","));
          g("]")
        }
        return {
          kind: "Array",
          start: e,
          end: f,
          values: n
        }
      }

      function v() {
        switch (b) {
          case "[":
            return k();
          case "{":
            return h();
          case "String":
          case "Number":
          case "Boolean":
          case "Null":
            const e = y();
            return O(), e
        }
        g("Value")
      }

      function y() {
        return {
          kind: b,
          start: l,
          end: d,
          value: JSON.parse(o.slice(l, d))
        }
      }

      function g(e) {
        if (b === e) return void O();
        let n;
        if ("EOF" === b) n = "[end of file]";
        else if (d - l > 1) n = "`" + o.slice(l, d) + "`";
        else {
          const e = o.slice(l).match(/^.+?\b/);
          n = "`" + (e ? e[0] : o[l]) + "`"
        }
        throw N(`Expected ${e} but found ${n}.`)
      }
      s(c, "jsonParse"), s(h, "parseObj"), s(m, "parseMember"), s(k, "parseArr"), s(v, "parseVal"), s(y, "curToken"), s(g, "expect");
      class w extends Error {
        constructor(e, n) {
          super(e), this.position = n
        }
      }

      function N(e) {
        return new w(e, {
          start: l,
          end: d
        })
      }

      function E(e) {
        if (b === e) return O(), !0
      }

      function x() {
        return d < u && (d++, p = d === u ? 0 : o.charCodeAt(d)), p
      }

      function O() {
        for (f = d; 9 === p || 10 === p || 13 === p || 32 === p;) x();
        if (0 !== p) {
          switch (l = d, p) {
            case 34:
              return b = "String", S();
            case 45:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return b = "Number", j();
            case 102:
              if ("false" !== o.slice(l, l + 5)) break;
              return d += 4, x(), void(b = "Boolean");
            case 110:
              if ("null" !== o.slice(l, l + 4)) break;
              return d += 3, x(), void(b = "Null");
            case 116:
              if ("true" !== o.slice(l, l + 4)) break;
              return d += 3, x(), void(b = "Boolean")
          }
          b = o[l], x()
        } else b = "EOF"
      }

      function S() {
        for (x(); 34 !== p && p > 31;)
          if (92 === p) switch (p = x(), p) {
            case 34:
            case 47:
            case 92:
            case 98:
            case 102:
            case 110:
            case 114:
            case 116:
              x();
              break;
            case 117:
              x(), $(), $(), $(), $();
              break;
            default:
              throw N("Bad character escape sequence.")
          } else {
            if (d === u) throw N("Unterminated string.");
            x()
          }
        if (34 !== p) throw N("Unterminated string.");
        x()
      }

      function $() {
        if (p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102) return x();
        throw N("Expected hexadecimal digit.")
      }

      function j() {
        45 === p && x(), 48 === p ? x() : F(), 46 === p && (x(), F()), 69 !== p && 101 !== p || (p = x(), 43 !== p && 45 !== p || x(), F())
      }

      function F() {
        if (p < 48 || p > 57) throw N("Expected decimal digit.");
        do {
          x()
        } while (p >= 48 && p <= 57)
      }

      function T(e, n, r) {
        const t = [];
        return r.members.forEach((r => {
          var a;
          if (r) {
            const i = null === (a = r.key) || void 0 === a ? void 0 : a.value,
              s = n[i];
            s ? B(s, r.value).forEach((n => {
              let [r, a] = n;
              t.push(q(e, r, a))
            })) : t.push(q(e, r.key, `Variable "$${i}" does not appear in any GraphQL query.`))
          }
        })), t
      }

      function B(e, n) {
        if (!e || !n) return [];
        if (e instanceof a.bM) return "Null" === n.kind ? [
          [n, `Type "${e}" is non-nullable and cannot be null.`]
        ] : B(e.ofType, n);
        if ("Null" === n.kind) return [];
        if (e instanceof a.p2) {
          const r = e.ofType;
          return "Array" === n.kind ? A(n.values || [], (e => B(r, e))) : B(r, n)
        }
        if (e instanceof a.sR) {
          if ("Object" !== n.kind) return [
            [n, `Type "${e}" must be an Object.`]
          ];
          const r = Object.create(null),
            t = A(n.members, (n => {
              var t;
              const a = null === (t = null == n ? void 0 : n.key) || void 0 === t ? void 0 : t.value;
              r[a] = !0;
              const i = e.getFields()[a];
              return i ? B(i ? i.type : void 0, n.value) : [
                [n.key, `Type "${e}" does not have a field "${a}".`]
              ]
            }));
          return Object.keys(e.getFields()).forEach((i => {
            r[i] || e.getFields()[i].type instanceof a.bM && t.push([n, `Object of type "${e}" is missing required field "${i}".`])
          })), t
        }
        return "Boolean" === e.name && "Boolean" !== n.kind || "String" === e.name && "String" !== n.kind || "ID" === e.name && "Number" !== n.kind && "String" !== n.kind || "Float" === e.name && "Number" !== n.kind || "Int" === e.name && ("Number" !== n.kind || (0 | n.value) !== n.value) || (e instanceof a.mR || e instanceof a.n2) && ("String" !== n.kind && "Number" !== n.kind && "Boolean" !== n.kind && "Null" !== n.kind || V(e.parseValue(n.value))) ? [
          [n, `Expected value of type "${e}".`]
        ] : []
      }

      function q(e, n, r) {
        return {
          message: r,
          severity: "error",
          type: "validation",
          from: e.posFromIndex(n.start),
          to: e.posFromIndex(n.end)
        }
      }

      function V(e) {
        return null == e || e != e
      }

      function A(e, n) {
        return Array.prototype.concat.apply([], e.map(n))
      }
      s(w, "JSONSyntaxError"), s(N, "syntaxError"), s(E, "skip"), s(x, "ch"), s(O, "lex"), s(S, "readString"), s($, "readHex"), s(j, "readNumber"), s(F, "readDigits"), t.C.registerHelper("lint", "graphql-variables", ((e, n, r) => {
        if (!e) return [];
        let t;
        try {
          t = c(e)
        } catch (e) {
          if (e instanceof w) return [q(r, e.position, e.message)];
          throw e
        }
        const a = n.variableToType;
        return a ? T(r, a, t) : []
      })), s(T, "validateVariables"), s(B, "validateValue"), s(q, "lintError"), s(V, "isNullish"), s(A, "mapCat")
    }
  }
]);