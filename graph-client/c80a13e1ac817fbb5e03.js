"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [158], {
    7158: (e, t, n) => {
      n.d(t, {
        Ps: () => q
      });
      var i = function() {
        return i = Object.assign || function(e) {
          for (var t, n = 1, i = arguments.length; n < i; n++)
            for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          return e
        }, i.apply(this, arguments)
      };

      function s(e, t) {
        if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
      }
      Object.create, Object.create;
      const r = /\r\n|[\n\r]/g;

      function o(e, t) {
        let n = 0,
          i = 1;
        for (const o of e.body.matchAll(r)) {
          if ("number" == typeof o.index || s(!1), o.index >= t) break;
          n = o.index + o[0].length, i += 1
        }
        return {
          line: i,
          column: t + 1 - n
        }
      }

      function a(e, t) {
        const n = e.locationOffset.column - 1,
          i = "".padStart(n) + e.body,
          s = t.line - 1,
          r = e.locationOffset.line - 1,
          o = t.line + r,
          a = 1 === t.line ? n : 0,
          h = t.column + a,
          p = `${e.name}:${o}:${h}\n`,
          l = i.split(/\r\n|[\n\r]/g),
          u = l[s];
        if (u.length > 120) {
          const e = Math.floor(h / 80),
            t = h % 80,
            n = [];
          for (let e = 0; e < u.length; e += 80) n.push(u.slice(e, e + 80));
          return p + c([
            [`${o} |`, n[0]], ...n.slice(1, e + 1).map((e => ["|", e])), ["|", "^".padStart(t)],
            ["|", n[e + 1]]
          ])
        }
        return p + c([
          [o - 1 + " |", l[s - 1]],
          [`${o} |`, u],
          ["|", "^".padStart(h)],
          [`${o+1} |`, l[s + 1]]
        ])
      }

      function c(e) {
        const t = e.filter((([e, t]) => void 0 !== t)),
          n = Math.max(...t.map((([e]) => e.length)));
        return t.map((([e, t]) => e.padStart(n) + (t ? " " + t : ""))).join("\n")
      }
      class h extends Error {
        constructor(e, ...t) {
          var n, i, s;
          const {
            nodes: r,
            source: a,
            positions: c,
            path: l,
            originalError: u,
            extensions: d
          } = function(e) {
            const t = e[0];
            return null == t || "kind" in t || "length" in t ? {
              nodes: t,
              source: e[1],
              positions: e[2],
              path: e[3],
              originalError: e[4],
              extensions: e[5]
            } : t
          }(t);
          super(e), this.name = "GraphQLError", this.path = null != l ? l : void 0, this.originalError = null != u ? u : void 0, this.nodes = p(Array.isArray(r) ? r : r ? [r] : void 0);
          const E = p(null === (n = this.nodes) || void 0 === n ? void 0 : n.map((e => e.loc)).filter((e => null != e)));
          this.source = null != a ? a : null == E || null === (i = E[0]) || void 0 === i ? void 0 : i.source, this.positions = null != c ? c : null == E ? void 0 : E.map((e => e.start)), this.locations = c && a ? c.map((e => o(a, e))) : null == E ? void 0 : E.map((e => o(e.source, e.start)));
          const f = "object" == typeof(N = null == u ? void 0 : u.extensions) && null !== N ? null == u ? void 0 : u.extensions : void 0;
          var N;
          this.extensions = null !== (s = null != d ? d : f) && void 0 !== s ? s : Object.create(null), Object.defineProperties(this, {
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
          }), null != u && u.stack ? Object.defineProperty(this, "stack", {
            value: u.stack,
            writable: !0,
            configurable: !0
          }) : Error.captureStackTrace ? Error.captureStackTrace(this, h) : Object.defineProperty(this, "stack", {
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
            for (const n of this.nodes) n.loc && (e += "\n\n" + a((t = n.loc).source, o(t.source, t.start)));
          else if (this.source && this.locations)
            for (const t of this.locations) e += "\n\n" + a(this.source, t);
          var t;
          return e
        }
        toJSON() {
          const e = {
            message: this.message
          };
          return null != this.locations && (e.locations = this.locations), null != this.path && (e.path = this.path), null != this.extensions && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e
        }
      }

      function p(e) {
        return void 0 === e || 0 === e.length ? void 0 : e
      }

      function l(e, t, n) {
        return new h(`Syntax Error: ${n}`, {
          source: e,
          positions: [t]
        })
      }
      var u, d = n(2380);
      ! function(e) {
        e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
      }(u || (u = {}));
      var E, f, N = n(7359),
        T = n(7392),
        m = n(8297);
      (f = E || (E = {})).SOF = "<SOF>", f.EOF = "<EOF>", f.BANG = "!", f.DOLLAR = "$", f.AMP = "&", f.PAREN_L = "(", f.PAREN_R = ")", f.SPREAD = "...", f.COLON = ":", f.EQUALS = "=", f.AT = "@", f.BRACKET_L = "[", f.BRACKET_R = "]", f.BRACE_L = "{", f.PIPE = "|", f.BRACE_R = "}", f.NAME = "Name", f.INT = "Int", f.FLOAT = "Float", f.STRING = "String", f.BLOCK_STRING = "BlockString", f.COMMENT = "Comment";
      class x {
        constructor(e) {
          const t = new d.WU(E.SOF, 0, 0, 0, 0);
          this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
        }
        get[Symbol.toStringTag]() {
          return "Lexer"
        }
        advance() {
          return this.lastToken = this.token, this.token = this.lookahead()
        }
        lookahead() {
          let e = this.token;
          if (e.kind !== E.EOF)
            do {
              if (e.next) e = e.next;
              else {
                const t = D(this, e.end);
                e.next = t, t.prev = e, e = t
              }
            } while (e.kind === E.COMMENT);
          return e
        }
      }

      function k(e) {
        return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
      }

      function A(e, t) {
        return _(e.charCodeAt(t)) && I(e.charCodeAt(t + 1))
      }

      function _(e) {
        return e >= 55296 && e <= 56319
      }

      function I(e) {
        return e >= 56320 && e <= 57343
      }

      function v(e, t) {
        const n = e.source.body.codePointAt(t);
        if (void 0 === n) return E.EOF;
        if (n >= 32 && n <= 126) {
          const e = String.fromCodePoint(n);
          return '"' === e ? "'\"'" : `"${e}"`
        }
        return "U+" + n.toString(16).toUpperCase().padStart(4, "0")
      }

      function O(e, t, n, i, s) {
        const r = e.line,
          o = 1 + n - e.lineStart;
        return new d.WU(t, n, i, r, o, s)
      }

      function D(e, t) {
        const n = e.source.body,
          i = n.length;
        let s = t;
        for (; s < i;) {
          const t = n.charCodeAt(s);
          switch (t) {
            case 65279:
            case 9:
            case 32:
            case 44:
              ++s;
              continue;
            case 10:
              ++s, ++e.line, e.lineStart = s;
              continue;
            case 13:
              10 === n.charCodeAt(s + 1) ? s += 2 : ++s, ++e.line, e.lineStart = s;
              continue;
            case 35:
              return y(e, s);
            case 33:
              return O(e, E.BANG, s, s + 1);
            case 36:
              return O(e, E.DOLLAR, s, s + 1);
            case 38:
              return O(e, E.AMP, s, s + 1);
            case 40:
              return O(e, E.PAREN_L, s, s + 1);
            case 41:
              return O(e, E.PAREN_R, s, s + 1);
            case 46:
              if (46 === n.charCodeAt(s + 1) && 46 === n.charCodeAt(s + 2)) return O(e, E.SPREAD, s, s + 3);
              break;
            case 58:
              return O(e, E.COLON, s, s + 1);
            case 61:
              return O(e, E.EQUALS, s, s + 1);
            case 64:
              return O(e, E.AT, s, s + 1);
            case 91:
              return O(e, E.BRACKET_L, s, s + 1);
            case 93:
              return O(e, E.BRACKET_R, s, s + 1);
            case 123:
              return O(e, E.BRACE_L, s, s + 1);
            case 124:
              return O(e, E.PIPE, s, s + 1);
            case 125:
              return O(e, E.BRACE_R, s, s + 1);
            case 34:
              return 34 === n.charCodeAt(s + 1) && 34 === n.charCodeAt(s + 2) ? P(e, s) : L(e, s)
          }
          if ((0, m.X1)(t) || 45 === t) return C(e, s, t);
          if ((0, m.LQ)(t)) return M(e, s);
          throw l(e.source, s, 39 === t ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : k(t) || A(n, s) ? `Unexpected character: ${v(e,s)}.` : `Invalid character: ${v(e,s)}.`)
        }
        return O(e, E.EOF, i, i)
      }

      function y(e, t) {
        const n = e.source.body,
          i = n.length;
        let s = t + 1;
        for (; s < i;) {
          const e = n.charCodeAt(s);
          if (10 === e || 13 === e) break;
          if (k(e)) ++s;
          else {
            if (!A(n, s)) break;
            s += 2
          }
        }
        return O(e, E.COMMENT, t, s, n.slice(t + 1, s))
      }

      function C(e, t, n) {
        const i = e.source.body;
        let s = t,
          r = n,
          o = !1;
        if (45 === r && (r = i.charCodeAt(++s)), 48 === r) {
          if (r = i.charCodeAt(++s), (0, m.X1)(r)) throw l(e.source, s, `Invalid number, unexpected digit after 0: ${v(e,s)}.`)
        } else s = R(e, s, r), r = i.charCodeAt(s);
        if (46 === r && (o = !0, r = i.charCodeAt(++s), s = R(e, s, r), r = i.charCodeAt(s)), 69 !== r && 101 !== r || (o = !0, r = i.charCodeAt(++s), 43 !== r && 45 !== r || (r = i.charCodeAt(++s)), s = R(e, s, r), r = i.charCodeAt(s)), 46 === r || (0, m.LQ)(r)) throw l(e.source, s, `Invalid number, expected digit but got: ${v(e,s)}.`);
        return O(e, o ? E.FLOAT : E.INT, t, s, i.slice(t, s))
      }

      function R(e, t, n) {
        if (!(0, m.X1)(n)) throw l(e.source, t, `Invalid number, expected digit but got: ${v(e,t)}.`);
        const i = e.source.body;
        let s = t + 1;
        for (;
          (0, m.X1)(i.charCodeAt(s));) ++s;
        return s
      }

      function L(e, t) {
        const n = e.source.body,
          i = n.length;
        let s = t + 1,
          r = s,
          o = "";
        for (; s < i;) {
          const i = n.charCodeAt(s);
          if (34 === i) return o += n.slice(r, s), O(e, E.STRING, t, s + 1, o);
          if (92 !== i) {
            if (10 === i || 13 === i) break;
            if (k(i)) ++s;
            else {
              if (!A(n, s)) throw l(e.source, s, `Invalid character within String: ${v(e,s)}.`);
              s += 2
            }
          } else {
            o += n.slice(r, s);
            const t = 117 === n.charCodeAt(s + 1) ? 123 === n.charCodeAt(s + 2) ? g(e, s) : S(e, s) : F(e, s);
            o += t.value, s += t.size, r = s
          }
        }
        throw l(e.source, s, "Unterminated string.")
      }

      function g(e, t) {
        const n = e.source.body;
        let i = 0,
          s = 3;
        for (; s < 12;) {
          const e = n.charCodeAt(t + s++);
          if (125 === e) {
            if (s < 5 || !k(i)) break;
            return {
              value: String.fromCodePoint(i),
              size: s
            }
          }
          if (i = i << 4 | w(e), i < 0) break
        }
        throw l(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+s)}".`)
      }

      function S(e, t) {
        const n = e.source.body,
          i = b(n, t + 2);
        if (k(i)) return {
          value: String.fromCodePoint(i),
          size: 6
        };
        if (_(i) && 92 === n.charCodeAt(t + 6) && 117 === n.charCodeAt(t + 7)) {
          const e = b(n, t + 8);
          if (I(e)) return {
            value: String.fromCodePoint(i, e),
            size: 12
          }
        }
        throw l(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)
      }

      function b(e, t) {
        return w(e.charCodeAt(t)) << 12 | w(e.charCodeAt(t + 1)) << 8 | w(e.charCodeAt(t + 2)) << 4 | w(e.charCodeAt(t + 3))
      }

      function w(e) {
        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
      }

      function F(e, t) {
        const n = e.source.body;
        switch (n.charCodeAt(t + 1)) {
          case 34:
            return {
              value: '"', size: 2
            };
          case 92:
            return {
              value: "\\", size: 2
            };
          case 47:
            return {
              value: "/", size: 2
            };
          case 98:
            return {
              value: "\b", size: 2
            };
          case 102:
            return {
              value: "\f", size: 2
            };
          case 110:
            return {
              value: "\n", size: 2
            };
          case 114:
            return {
              value: "\r", size: 2
            };
          case 116:
            return {
              value: "\t", size: 2
            }
        }
        throw l(e.source, t, `Invalid character escape sequence: "${n.slice(t,t+2)}".`)
      }

      function P(e, t) {
        const n = e.source.body,
          i = n.length;
        let s = e.lineStart,
          r = t + 3,
          o = r,
          a = "";
        const c = [];
        for (; r < i;) {
          const i = n.charCodeAt(r);
          if (34 === i && 34 === n.charCodeAt(r + 1) && 34 === n.charCodeAt(r + 2)) {
            a += n.slice(o, r), c.push(a);
            const i = O(e, E.BLOCK_STRING, t, r + 3, (0, T.wv)(c).join("\n"));
            return e.line += c.length - 1, e.lineStart = s, i
          }
          if (92 !== i || 34 !== n.charCodeAt(r + 1) || 34 !== n.charCodeAt(r + 2) || 34 !== n.charCodeAt(r + 3))
            if (10 !== i && 13 !== i)
              if (k(i)) ++r;
              else {
                if (!A(n, r)) throw l(e.source, r, `Invalid character within String: ${v(e,r)}.`);
                r += 2
              }
          else a += n.slice(o, r), c.push(a), 13 === i && 10 === n.charCodeAt(r + 1) ? r += 2 : ++r, a = "", o = r, s = r;
          else a += n.slice(o, r), o = r + 1, r += 4
        }
        throw l(e.source, r, "Unterminated string.")
      }

      function M(e, t) {
        const n = e.source.body,
          i = n.length;
        let s = t + 1;
        for (; s < i;) {
          const e = n.charCodeAt(s);
          if (!(0, m.HQ)(e)) break;
          ++s
        }
        return O(e, E.NAME, t, s, n.slice(t, s))
      }
      var U = n(4783);
      class B {
        constructor(e, t = {}) {
          const n = (0, U.T)(e) ? e : new U.H(e);
          this._lexer = new x(n), this._options = t, this._tokenCounter = 0
        }
        parseName() {
          const e = this.expectToken(E.NAME);
          return this.node(e, {
            kind: N.h.NAME,
            value: e.value
          })
        }
        parseDocument() {
          return this.node(this._lexer.token, {
            kind: N.h.DOCUMENT,
            definitions: this.many(E.SOF, this.parseDefinition, E.EOF)
          })
        }
        parseDefinition() {
          if (this.peek(E.BRACE_L)) return this.parseOperationDefinition();
          const e = this.peekDescription(),
            t = e ? this._lexer.lookahead() : this._lexer.token;
          if (t.kind === E.NAME) {
            switch (t.value) {
              case "schema":
                return this.parseSchemaDefinition();
              case "scalar":
                return this.parseScalarTypeDefinition();
              case "type":
                return this.parseObjectTypeDefinition();
              case "interface":
                return this.parseInterfaceTypeDefinition();
              case "union":
                return this.parseUnionTypeDefinition();
              case "enum":
                return this.parseEnumTypeDefinition();
              case "input":
                return this.parseInputObjectTypeDefinition();
              case "directive":
                return this.parseDirectiveDefinition()
            }
            if (e) throw l(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
            switch (t.value) {
              case "query":
              case "mutation":
              case "subscription":
                return this.parseOperationDefinition();
              case "fragment":
                return this.parseFragmentDefinition();
              case "extend":
                return this.parseTypeSystemExtension()
            }
          }
          throw this.unexpected(t)
        }
        parseOperationDefinition() {
          const e = this._lexer.token;
          if (this.peek(E.BRACE_L)) return this.node(e, {
            kind: N.h.OPERATION_DEFINITION,
            operation: d.ku.QUERY,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
          });
          const t = this.parseOperationType();
          let n;
          return this.peek(E.NAME) && (n = this.parseName()), this.node(e, {
            kind: N.h.OPERATION_DEFINITION,
            operation: t,
            name: n,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseOperationType() {
          const e = this.expectToken(E.NAME);
          switch (e.value) {
            case "query":
              return d.ku.QUERY;
            case "mutation":
              return d.ku.MUTATION;
            case "subscription":
              return d.ku.SUBSCRIPTION
          }
          throw this.unexpected(e)
        }
        parseVariableDefinitions() {
          return this.optionalMany(E.PAREN_L, this.parseVariableDefinition, E.PAREN_R)
        }
        parseVariableDefinition() {
          return this.node(this._lexer.token, {
            kind: N.h.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(E.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(E.EQUALS) ? this.parseConstValueLiteral() : void 0,
            directives: this.parseConstDirectives()
          })
        }
        parseVariable() {
          const e = this._lexer.token;
          return this.expectToken(E.DOLLAR), this.node(e, {
            kind: N.h.VARIABLE,
            name: this.parseName()
          })
        }
        parseSelectionSet() {
          return this.node(this._lexer.token, {
            kind: N.h.SELECTION_SET,
            selections: this.many(E.BRACE_L, this.parseSelection, E.BRACE_R)
          })
        }
        parseSelection() {
          return this.peek(E.SPREAD) ? this.parseFragment() : this.parseField()
        }
        parseField() {
          const e = this._lexer.token,
            t = this.parseName();
          let n, i;
          return this.expectOptionalToken(E.COLON) ? (n = t, i = this.parseName()) : i = t, this.node(e, {
            kind: N.h.FIELD,
            alias: n,
            name: i,
            arguments: this.parseArguments(!1),
            directives: this.parseDirectives(!1),
            selectionSet: this.peek(E.BRACE_L) ? this.parseSelectionSet() : void 0
          })
        }
        parseArguments(e) {
          const t = e ? this.parseConstArgument : this.parseArgument;
          return this.optionalMany(E.PAREN_L, t, E.PAREN_R)
        }
        parseArgument(e = !1) {
          const t = this._lexer.token,
            n = this.parseName();
          return this.expectToken(E.COLON), this.node(t, {
            kind: N.h.ARGUMENT,
            name: n,
            value: this.parseValueLiteral(e)
          })
        }
        parseConstArgument() {
          return this.parseArgument(!0)
        }
        parseFragment() {
          const e = this._lexer.token;
          this.expectToken(E.SPREAD);
          const t = this.expectOptionalKeyword("on");
          return !t && this.peek(E.NAME) ? this.node(e, {
            kind: N.h.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1)
          }) : this.node(e, {
            kind: N.h.INLINE_FRAGMENT,
            typeCondition: t ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseFragmentDefinition() {
          const e = this._lexer.token;
          return this.expectKeyword("fragment"), !0 === this._options.allowLegacyFragmentVariables ? this.node(e, {
            kind: N.h.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          }) : this.node(e, {
            kind: N.h.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseFragmentName() {
          if ("on" === this._lexer.token.value) throw this.unexpected();
          return this.parseName()
        }
        parseValueLiteral(e) {
          const t = this._lexer.token;
          switch (t.kind) {
            case E.BRACKET_L:
              return this.parseList(e);
            case E.BRACE_L:
              return this.parseObject(e);
            case E.INT:
              return this.advanceLexer(), this.node(t, {
                kind: N.h.INT,
                value: t.value
              });
            case E.FLOAT:
              return this.advanceLexer(), this.node(t, {
                kind: N.h.FLOAT,
                value: t.value
              });
            case E.STRING:
            case E.BLOCK_STRING:
              return this.parseStringLiteral();
            case E.NAME:
              switch (this.advanceLexer(), t.value) {
                case "true":
                  return this.node(t, {
                    kind: N.h.BOOLEAN,
                    value: !0
                  });
                case "false":
                  return this.node(t, {
                    kind: N.h.BOOLEAN,
                    value: !1
                  });
                case "null":
                  return this.node(t, {
                    kind: N.h.NULL
                  });
                default:
                  return this.node(t, {
                    kind: N.h.ENUM,
                    value: t.value
                  })
              }
            case E.DOLLAR:
              if (e) {
                if (this.expectToken(E.DOLLAR), this._lexer.token.kind === E.NAME) {
                  const e = this._lexer.token.value;
                  throw l(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`)
                }
                throw this.unexpected(t)
              }
              return this.parseVariable();
            default:
              throw this.unexpected()
          }
        }
        parseConstValueLiteral() {
          return this.parseValueLiteral(!0)
        }
        parseStringLiteral() {
          const e = this._lexer.token;
          return this.advanceLexer(), this.node(e, {
            kind: N.h.STRING,
            value: e.value,
            block: e.kind === E.BLOCK_STRING
          })
        }
        parseList(e) {
          return this.node(this._lexer.token, {
            kind: N.h.LIST,
            values: this.any(E.BRACKET_L, (() => this.parseValueLiteral(e)), E.BRACKET_R)
          })
        }
        parseObject(e) {
          return this.node(this._lexer.token, {
            kind: N.h.OBJECT,
            fields: this.any(E.BRACE_L, (() => this.parseObjectField(e)), E.BRACE_R)
          })
        }
        parseObjectField(e) {
          const t = this._lexer.token,
            n = this.parseName();
          return this.expectToken(E.COLON), this.node(t, {
            kind: N.h.OBJECT_FIELD,
            name: n,
            value: this.parseValueLiteral(e)
          })
        }
        parseDirectives(e) {
          const t = [];
          for (; this.peek(E.AT);) t.push(this.parseDirective(e));
          return t
        }
        parseConstDirectives() {
          return this.parseDirectives(!0)
        }
        parseDirective(e) {
          const t = this._lexer.token;
          return this.expectToken(E.AT), this.node(t, {
            kind: N.h.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(e)
          })
        }
        parseTypeReference() {
          const e = this._lexer.token;
          let t;
          if (this.expectOptionalToken(E.BRACKET_L)) {
            const n = this.parseTypeReference();
            this.expectToken(E.BRACKET_R), t = this.node(e, {
              kind: N.h.LIST_TYPE,
              type: n
            })
          } else t = this.parseNamedType();
          return this.expectOptionalToken(E.BANG) ? this.node(e, {
            kind: N.h.NON_NULL_TYPE,
            type: t
          }) : t
        }
        parseNamedType() {
          return this.node(this._lexer.token, {
            kind: N.h.NAMED_TYPE,
            name: this.parseName()
          })
        }
        peekDescription() {
          return this.peek(E.STRING) || this.peek(E.BLOCK_STRING)
        }
        parseDescription() {
          if (this.peekDescription()) return this.parseStringLiteral()
        }
        parseSchemaDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("schema");
          const n = this.parseConstDirectives(),
            i = this.many(E.BRACE_L, this.parseOperationTypeDefinition, E.BRACE_R);
          return this.node(e, {
            kind: N.h.SCHEMA_DEFINITION,
            description: t,
            directives: n,
            operationTypes: i
          })
        }
        parseOperationTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseOperationType();
          this.expectToken(E.COLON);
          const n = this.parseNamedType();
          return this.node(e, {
            kind: N.h.OPERATION_TYPE_DEFINITION,
            operation: t,
            type: n
          })
        }
        parseScalarTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("scalar");
          const n = this.parseName(),
            i = this.parseConstDirectives();
          return this.node(e, {
            kind: N.h.SCALAR_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: i
          })
        }
        parseObjectTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("type");
          const n = this.parseName(),
            i = this.parseImplementsInterfaces(),
            s = this.parseConstDirectives(),
            r = this.parseFieldsDefinition();
          return this.node(e, {
            kind: N.h.OBJECT_TYPE_DEFINITION,
            description: t,
            name: n,
            interfaces: i,
            directives: s,
            fields: r
          })
        }
        parseImplementsInterfaces() {
          return this.expectOptionalKeyword("implements") ? this.delimitedMany(E.AMP, this.parseNamedType) : []
        }
        parseFieldsDefinition() {
          return this.optionalMany(E.BRACE_L, this.parseFieldDefinition, E.BRACE_R)
        }
        parseFieldDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseName(),
            i = this.parseArgumentDefs();
          this.expectToken(E.COLON);
          const s = this.parseTypeReference(),
            r = this.parseConstDirectives();
          return this.node(e, {
            kind: N.h.FIELD_DEFINITION,
            description: t,
            name: n,
            arguments: i,
            type: s,
            directives: r
          })
        }
        parseArgumentDefs() {
          return this.optionalMany(E.PAREN_L, this.parseInputValueDef, E.PAREN_R)
        }
        parseInputValueDef() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseName();
          this.expectToken(E.COLON);
          const i = this.parseTypeReference();
          let s;
          this.expectOptionalToken(E.EQUALS) && (s = this.parseConstValueLiteral());
          const r = this.parseConstDirectives();
          return this.node(e, {
            kind: N.h.INPUT_VALUE_DEFINITION,
            description: t,
            name: n,
            type: i,
            defaultValue: s,
            directives: r
          })
        }
        parseInterfaceTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("interface");
          const n = this.parseName(),
            i = this.parseImplementsInterfaces(),
            s = this.parseConstDirectives(),
            r = this.parseFieldsDefinition();
          return this.node(e, {
            kind: N.h.INTERFACE_TYPE_DEFINITION,
            description: t,
            name: n,
            interfaces: i,
            directives: s,
            fields: r
          })
        }
        parseUnionTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("union");
          const n = this.parseName(),
            i = this.parseConstDirectives(),
            s = this.parseUnionMemberTypes();
          return this.node(e, {
            kind: N.h.UNION_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: i,
            types: s
          })
        }
        parseUnionMemberTypes() {
          return this.expectOptionalToken(E.EQUALS) ? this.delimitedMany(E.PIPE, this.parseNamedType) : []
        }
        parseEnumTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("enum");
          const n = this.parseName(),
            i = this.parseConstDirectives(),
            s = this.parseEnumValuesDefinition();
          return this.node(e, {
            kind: N.h.ENUM_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: i,
            values: s
          })
        }
        parseEnumValuesDefinition() {
          return this.optionalMany(E.BRACE_L, this.parseEnumValueDefinition, E.BRACE_R)
        }
        parseEnumValueDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseEnumValueName(),
            i = this.parseConstDirectives();
          return this.node(e, {
            kind: N.h.ENUM_VALUE_DEFINITION,
            description: t,
            name: n,
            directives: i
          })
        }
        parseEnumValueName() {
          if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value) throw l(this._lexer.source, this._lexer.token.start, `${K(this._lexer.token)} is reserved and cannot be used for an enum value.`);
          return this.parseName()
        }
        parseInputObjectTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("input");
          const n = this.parseName(),
            i = this.parseConstDirectives(),
            s = this.parseInputFieldsDefinition();
          return this.node(e, {
            kind: N.h.INPUT_OBJECT_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: i,
            fields: s
          })
        }
        parseInputFieldsDefinition() {
          return this.optionalMany(E.BRACE_L, this.parseInputValueDef, E.BRACE_R)
        }
        parseTypeSystemExtension() {
          const e = this._lexer.lookahead();
          if (e.kind === E.NAME) switch (e.value) {
            case "schema":
              return this.parseSchemaExtension();
            case "scalar":
              return this.parseScalarTypeExtension();
            case "type":
              return this.parseObjectTypeExtension();
            case "interface":
              return this.parseInterfaceTypeExtension();
            case "union":
              return this.parseUnionTypeExtension();
            case "enum":
              return this.parseEnumTypeExtension();
            case "input":
              return this.parseInputObjectTypeExtension()
          }
          throw this.unexpected(e)
        }
        parseSchemaExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("schema");
          const t = this.parseConstDirectives(),
            n = this.optionalMany(E.BRACE_L, this.parseOperationTypeDefinition, E.BRACE_R);
          if (0 === t.length && 0 === n.length) throw this.unexpected();
          return this.node(e, {
            kind: N.h.SCHEMA_EXTENSION,
            directives: t,
            operationTypes: n
          })
        }
        parseScalarTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("scalar");
          const t = this.parseName(),
            n = this.parseConstDirectives();
          if (0 === n.length) throw this.unexpected();
          return this.node(e, {
            kind: N.h.SCALAR_TYPE_EXTENSION,
            name: t,
            directives: n
          })
        }
        parseObjectTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("type");
          const t = this.parseName(),
            n = this.parseImplementsInterfaces(),
            i = this.parseConstDirectives(),
            s = this.parseFieldsDefinition();
          if (0 === n.length && 0 === i.length && 0 === s.length) throw this.unexpected();
          return this.node(e, {
            kind: N.h.OBJECT_TYPE_EXTENSION,
            name: t,
            interfaces: n,
            directives: i,
            fields: s
          })
        }
        parseInterfaceTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("interface");
          const t = this.parseName(),
            n = this.parseImplementsInterfaces(),
            i = this.parseConstDirectives(),
            s = this.parseFieldsDefinition();
          if (0 === n.length && 0 === i.length && 0 === s.length) throw this.unexpected();
          return this.node(e, {
            kind: N.h.INTERFACE_TYPE_EXTENSION,
            name: t,
            interfaces: n,
            directives: i,
            fields: s
          })
        }
        parseUnionTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("union");
          const t = this.parseName(),
            n = this.parseConstDirectives(),
            i = this.parseUnionMemberTypes();
          if (0 === n.length && 0 === i.length) throw this.unexpected();
          return this.node(e, {
            kind: N.h.UNION_TYPE_EXTENSION,
            name: t,
            directives: n,
            types: i
          })
        }
        parseEnumTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("enum");
          const t = this.parseName(),
            n = this.parseConstDirectives(),
            i = this.parseEnumValuesDefinition();
          if (0 === n.length && 0 === i.length) throw this.unexpected();
          return this.node(e, {
            kind: N.h.ENUM_TYPE_EXTENSION,
            name: t,
            directives: n,
            values: i
          })
        }
        parseInputObjectTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("input");
          const t = this.parseName(),
            n = this.parseConstDirectives(),
            i = this.parseInputFieldsDefinition();
          if (0 === n.length && 0 === i.length) throw this.unexpected();
          return this.node(e, {
            kind: N.h.INPUT_OBJECT_TYPE_EXTENSION,
            name: t,
            directives: n,
            fields: i
          })
        }
        parseDirectiveDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("directive"), this.expectToken(E.AT);
          const n = this.parseName(),
            i = this.parseArgumentDefs(),
            s = this.expectOptionalKeyword("repeatable");
          this.expectKeyword("on");
          const r = this.parseDirectiveLocations();
          return this.node(e, {
            kind: N.h.DIRECTIVE_DEFINITION,
            description: t,
            name: n,
            arguments: i,
            repeatable: s,
            locations: r
          })
        }
        parseDirectiveLocations() {
          return this.delimitedMany(E.PIPE, this.parseDirectiveLocation)
        }
        parseDirectiveLocation() {
          const e = this._lexer.token,
            t = this.parseName();
          if (Object.prototype.hasOwnProperty.call(u, t.value)) return t;
          throw this.unexpected(e)
        }
        node(e, t) {
          return !0 !== this._options.noLocation && (t.loc = new d.Ye(e, this._lexer.lastToken, this._lexer.source)), t
        }
        peek(e) {
          return this._lexer.token.kind === e
        }
        expectToken(e) {
          const t = this._lexer.token;
          if (t.kind === e) return this.advanceLexer(), t;
          throw l(this._lexer.source, t.start, `Expected ${V(e)}, found ${K(t)}.`)
        }
        expectOptionalToken(e) {
          return this._lexer.token.kind === e && (this.advanceLexer(), !0)
        }
        expectKeyword(e) {
          const t = this._lexer.token;
          if (t.kind !== E.NAME || t.value !== e) throw l(this._lexer.source, t.start, `Expected "${e}", found ${K(t)}.`);
          this.advanceLexer()
        }
        expectOptionalKeyword(e) {
          const t = this._lexer.token;
          return t.kind === E.NAME && t.value === e && (this.advanceLexer(), !0)
        }
        unexpected(e) {
          const t = null != e ? e : this._lexer.token;
          return l(this._lexer.source, t.start, `Unexpected ${K(t)}.`)
        }
        any(e, t, n) {
          this.expectToken(e);
          const i = [];
          for (; !this.expectOptionalToken(n);) i.push(t.call(this));
          return i
        }
        optionalMany(e, t, n) {
          if (this.expectOptionalToken(e)) {
            const e = [];
            do {
              e.push(t.call(this))
            } while (!this.expectOptionalToken(n));
            return e
          }
          return []
        }
        many(e, t, n) {
          this.expectToken(e);
          const i = [];
          do {
            i.push(t.call(this))
          } while (!this.expectOptionalToken(n));
          return i
        }
        delimitedMany(e, t) {
          this.expectOptionalToken(e);
          const n = [];
          do {
            n.push(t.call(this))
          } while (this.expectOptionalToken(e));
          return n
        }
        advanceLexer() {
          const {
            maxTokens: e
          } = this._options, t = this._lexer.advance();
          if (void 0 !== e && t.kind !== E.EOF && (++this._tokenCounter, this._tokenCounter > e)) throw l(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`)
        }
      }

      function K(e) {
        const t = e.value;
        return V(e.kind) + (null != t ? ` "${t}"` : "")
      }

      function V(e) {
        return function(e) {
          return e === E.BANG || e === E.DOLLAR || e === E.AMP || e === E.PAREN_L || e === E.PAREN_R || e === E.SPREAD || e === E.COLON || e === E.EQUALS || e === E.AT || e === E.BRACKET_L || e === E.BRACKET_R || e === E.BRACE_L || e === E.PIPE || e === E.BRACE_R
        }(e) ? `"${e}"` : e
      }
      var G = new Map,
        $ = new Map,
        j = !0,
        Y = !1;

      function Q(e) {
        return e.replace(/[\s,]+/g, " ").trim()
      }

      function z(e) {
        var t = Q(e);
        if (!G.has(t)) {
          var n = function(e, t) {
            return new B(e, t).parseDocument()
          }(e, {
            experimentalFragmentVariables: Y,
            allowLegacyFragmentVariables: Y
          });
          if (!n || "Document" !== n.kind) throw new Error("Not a valid GraphQL document.");
          G.set(t, function(e) {
            var t = new Set(e.definitions);
            t.forEach((function(e) {
              e.loc && delete e.loc, Object.keys(e).forEach((function(n) {
                var i = e[n];
                i && "object" == typeof i && t.add(i)
              }))
            }));
            var n = e.loc;
            return n && (delete n.startToken, delete n.endToken), e
          }(function(e) {
            var t = new Set,
              n = [];
            return e.definitions.forEach((function(e) {
              if ("FragmentDefinition" === e.kind) {
                var i = e.name.value,
                  s = Q((o = e.loc).source.body.substring(o.start, o.end)),
                  r = $.get(i);
                r && !r.has(s) ? j && console.warn("Warning: fragment with name " + i + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : r || $.set(i, r = new Set), r.add(s), t.has(s) || (t.add(s), n.push(e))
              } else n.push(e);
              var o
            })), i(i({}, e), {
              definitions: n
            })
          }(n)))
        }
        return G.get(t)
      }

      function q(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        "string" == typeof e && (e = [e]);
        var i = e[0];
        return t.forEach((function(t, n) {
          t && "Document" === t.kind ? i += t.loc.source.body : i += t, i += e[n + 1]
        })), z(i)
      }
      var J, X = q;
      (J = q || (q = {})).gql = X, J.resetCaches = function() {
        G.clear(), $.clear()
      }, J.disableFragmentWarnings = function() {
        j = !1
      }, J.enableExperimentalFragmentVariables = function() {
        Y = !0
      }, J.disableExperimentalFragmentVariables = function() {
        Y = !1
      }, q.default = q
    }
  }
]);