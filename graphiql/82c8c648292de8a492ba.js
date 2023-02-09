"use strict";
(self.webpackChunk_rockstargames_graphiql = self.webpackChunk_rockstargames_graphiql || []).push([
  [681, 871], {
    3005: (t, e, n) => {
      n.d(e, {
        C: () => o,
        P: () => a,
        R: () => r
      });
      var i = Object.defineProperty,
        s = (t, e) => i(t, "name", {
          value: e,
          configurable: !0
        });
      class o {
        constructor(t) {
          var e = this;
          this.getStartOfToken = () => this._start, this.getCurrentPosition = () => this._pos, this.eol = () => this._sourceText.length === this._pos, this.sol = () => 0 === this._pos, this.peek = () => this._sourceText.charAt(this._pos) ? this._sourceText.charAt(this._pos) : null, this.next = () => {
            const t = this._sourceText.charAt(this._pos);
            return this._pos++, t
          }, this.eat = t => {
            if (this._testNextCharacter(t)) return this._start = this._pos, this._pos++, this._sourceText.charAt(this._pos - 1)
          }, this.eatWhile = t => {
            let e = this._testNextCharacter(t),
              n = !1;
            for (e && (n = e, this._start = this._pos); e;) this._pos++, e = this._testNextCharacter(t), n = !0;
            return n
          }, this.eatSpace = () => this.eatWhile(/[\s\u00a0]/), this.skipToEnd = () => {
            this._pos = this._sourceText.length
          }, this.skipTo = t => {
            this._pos = t
          }, this.match = function(t) {
            let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              s = null,
              o = null;
            return "string" == typeof t ? (o = new RegExp(t, i ? "i" : "g").test(e._sourceText.substr(e._pos, t.length)), s = t) : t instanceof RegExp && (o = e._sourceText.slice(e._pos).match(t), s = null == o ? void 0 : o[0]), !(null == o || !("string" == typeof t || o instanceof Array && e._sourceText.startsWith(o[0], e._pos))) && (n && (e._start = e._pos, s && s.length && (e._pos += s.length)), o)
          }, this.backUp = t => {
            this._pos -= t
          }, this.column = () => this._pos, this.indentation = () => {
            const t = this._sourceText.match(/\s*/);
            let e = 0;
            if (t && 0 !== t.length) {
              const n = t[0];
              let i = 0;
              for (; n.length > i;) 9 === n.charCodeAt(i) ? e += 2 : e++, i++
            }
            return e
          }, this.current = () => this._sourceText.slice(this._start, this._pos), this._start = 0, this._pos = 0, this._sourceText = t
        }
        _testNextCharacter(t) {
          const e = this._sourceText.charAt(this._pos);
          let n = !1;
          return n = "string" == typeof t ? e === t : t instanceof RegExp ? t.test(e) : t(e), n
        }
      }
      s(o, "CharacterStream");
      class r {
        constructor(t, e) {
          this.containsPosition = t => this.start.line === t.line ? this.start.character <= t.character : this.end.line === t.line ? this.end.character >= t.character : this.start.line <= t.line && this.end.line >= t.line, this.start = t, this.end = e
        }
        setStart(t, e) {
          this.start = new a(t, e)
        }
        setEnd(t, e) {
          this.end = new a(t, e)
        }
      }
      s(r, "Range");
      class a {
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
      s(a, "Position")
    },
    5681: (t, e, n) => {
      n.r(e);
      var i = n(1703),
        s = (n(9871), n(398)),
        o = n(7304),
        r = n(4275),
        a = n(2433),
        l = n(3801),
        c = n(316),
        u = n(7359),
        h = n(9878),
        d = n(9207),
        p = n(3005),
        f = n(6129),
        g = (n(1105), n(822), n(8853), Object.defineProperty),
        m = (t, e) => g(t, "name", {
          value: e,
          configurable: !0
        });

      function v(t) {
        let e;
        return T(t, (t => {
          switch (t.kind) {
            case "Query":
            case "ShortQuery":
            case "Mutation":
            case "Subscription":
            case "FragmentDefinition":
              e = t
          }
        })), e
      }

      function E(t, e, n) {
        return n === f.S.name && t.getQueryType() === e ? f.S : n === f.T.name && t.getQueryType() === e ? f.T : n === f.a.name && (0, s.Gv)(e) ? f.a : "getFields" in e ? e.getFields()[n] : null
      }

      function T(t, e) {
        const n = [];
        let i = t;
        for (; null == i ? void 0 : i.kind;) n.push(i), i = i.prevState;
        for (let t = n.length - 1; t >= 0; t--) e(n[t])
      }

      function y(t) {
        const e = Object.keys(t),
          n = e.length,
          i = new Array(n);
        for (let s = 0; s < n; ++s) i[s] = t[e[s]];
        return i
      }

      function R(t, e) {
        return S(e, A(t.string))
      }

      function S(t, e) {
        return e ? b(b(t.map((t => ({
          proximity: I(A(t.label), e),
          entry: t
        }))), (t => t.proximity <= 2)), (t => !t.entry.isDeprecated)).sort(((t, e) => (t.entry.isDeprecated ? 1 : 0) - (e.entry.isDeprecated ? 1 : 0) || t.proximity - e.proximity || t.entry.label.length - e.entry.label.length)).map((t => t.entry)) : b(t, (t => !t.isDeprecated))
      }

      function b(t, e) {
        const n = t.filter(e);
        return 0 === n.length ? t : n
      }

      function A(t) {
        return t.toLowerCase().replace(/\W/g, "")
      }

      function I(t, e) {
        let n = C(e, t);
        return t.length > e.length && (n -= t.length - e.length - 1, n += 0 === t.indexOf(e) ? 0 : .5), n
      }

      function C(t, e) {
        let n, i;
        const s = [],
          o = t.length,
          r = e.length;
        for (n = 0; n <= o; n++) s[n] = [n];
        for (i = 1; i <= r; i++) s[0][i] = i;
        for (n = 1; n <= o; n++)
          for (i = 1; i <= r; i++) {
            const o = t[n - 1] === e[i - 1] ? 0 : 1;
            s[n][i] = Math.min(s[n - 1][i] + 1, s[n][i - 1] + 1, s[n - 1][i - 1] + o), n > 1 && i > 1 && t[n - 1] === e[i - 2] && t[n - 2] === e[i - 1] && (s[n][i] = Math.min(s[n][i], s[n - 2][i - 2] + o))
          }
        return s[o][r]
      }
      m(v, "getDefinitionState"), m(E, "getFieldDef"), m(T, "forEachState"), m(y, "objectValues"), m(R, "hintList"), m(S, "filterAndSortList"), m(b, "filterNonEmpty"), m(A, "normalizeText"), m(I, "getProximity"), m(C, "lexicalDistance");
      const _ = {
          command: "editor.action.triggerSuggest",
          title: "Suggestions"
        },
        N = m((t => {
          const e = [];
          if (t) try {
            (0, o.Vn)((0, r.Qc)(t), {
              FragmentDefinition(t) {
                e.push(t)
              }
            })
          } catch (t) {
            return []
          }
          return e
        }), "collectFragmentDefs");

      function k(t, e, n, i, o, r) {
        var a;
        const l = Object.assign(Object.assign({}, r), {
            schema: t
          }),
          c = i || G(e, n),
          u = "Invalid" === c.state.kind ? c.state.prevState : c.state;
        if (!u) return [];
        const h = u.kind,
          p = u.step,
          f = Y(t, c.state);
        if (h === d.R.DOCUMENT) return R(c, [{
          label: "query",
          kind: d.C.Function
        }, {
          label: "mutation",
          kind: d.C.Function
        }, {
          label: "subscription",
          kind: d.C.Function
        }, {
          label: "fragment",
          kind: d.C.Function
        }, {
          label: "{",
          kind: d.C.Constructor
        }]);
        if (h === d.R.IMPLEMENTS || h === d.R.NAMED_TYPE && (null === (a = u.prevState) || void 0 === a ? void 0 : a.kind) === d.R.IMPLEMENTS) return M(c, u, t, e, f);
        if (h === d.R.SELECTION_SET || h === d.R.FIELD || h === d.R.ALIASED_FIELD) return O(c, f, l);
        if (h === d.R.ARGUMENTS || h === d.R.ARGUMENT && 0 === p) {
          const t = f.argDefs;
          if (t) return R(c, t.map((t => {
            var e;
            return {
              label: t.name,
              insertText: t.name + ": ",
              command: _,
              detail: String(t.type),
              documentation: null !== (e = t.description) && void 0 !== e ? e : void 0,
              kind: d.C.Variable,
              type: t.type
            }
          })))
        }
        if ((h === d.R.OBJECT_VALUE || h === d.R.OBJECT_FIELD && 0 === p) && f.objectFieldDefs) {
          const t = y(f.objectFieldDefs),
            e = h === d.R.OBJECT_VALUE ? d.C.Value : d.C.Field;
          return R(c, t.map((t => {
            var n;
            return {
              label: t.name,
              detail: String(t.type),
              documentation: null !== (n = t.description) && void 0 !== n ? n : void 0,
              kind: e,
              type: t.type
            }
          })))
        }
        if (h === d.R.ENUM_VALUE || h === d.R.LIST_VALUE && 1 === p || h === d.R.OBJECT_FIELD && 2 === p || h === d.R.ARGUMENT && 2 === p) return x(c, f, e, t);
        if (h === d.R.VARIABLE && 1 === p) {
          const n = (0, s.xC)(f.inputType);
          return R(c, U(e, t, c).filter((t => t.detail === (null == n ? void 0 : n.name))))
        }
        return h === d.R.TYPE_CONDITION && 1 === p || h === d.R.NAMED_TYPE && null != u.prevState && u.prevState.kind === d.R.TYPE_CONDITION ? w(c, f, t) : h === d.R.FRAGMENT_SPREAD && 1 === p ? P(c, f, t, e, Array.isArray(o) ? o : N(o)) : h === d.R.VARIABLE_DEFINITION && 2 === p || h === d.R.LIST_TYPE && 1 === p || h === d.R.NAMED_TYPE && u.prevState && (u.prevState.kind === d.R.VARIABLE_DEFINITION || u.prevState.kind === d.R.LIST_TYPE || u.prevState.kind === d.R.NON_NULL_TYPE) ? H(c, t) : h === d.R.DIRECTIVE ? V(c, u, t) : []
      }
      m(k, "getAutocompleteSuggestions");
      const F = " {\n  $1\n}",
        D = m((t => {
          const e = t.type;
          if ((0, s.Gv)(e)) return F;
          if ((0, s.HG)(e) && (0, s.Gv)(e.ofType)) return F;
          if ((0, s.zM)(e)) {
            if ((0, s.Gv)(e.ofType)) return F;
            if ((0, s.HG)(e.ofType) && (0, s.Gv)(e.ofType.ofType)) return F
          }
          return null
        }), "getInsertText");

      function O(t, e, n) {
        var i;
        if (e.parentType) {
          const o = e.parentType;
          let r = [];
          return "getFields" in o && (r = y(o.getFields())), (0, s.Gv)(o) && r.push(a.hU), o === (null === (i = null == n ? void 0 : n.schema) || void 0 === i ? void 0 : i.getQueryType()) && r.push(a.Az, a.tF), R(t, r.map(((t, e) => {
            var n;
            const i = {
                sortText: String(e) + t.name,
                label: t.name,
                detail: String(t.type),
                documentation: null !== (n = t.description) && void 0 !== n ? n : void 0,
                deprecated: Boolean(t.deprecationReason),
                isDeprecated: Boolean(t.deprecationReason),
                deprecationReason: t.deprecationReason,
                kind: d.C.Field,
                type: t.type
              },
              s = D(t);
            return s && (i.insertText = t.name + s, i.insertTextFormat = d.I.Snippet, i.command = _), i
          })))
        }
        return []
      }

      function x(t, e, n, i) {
        const o = (0, s.xC)(e.inputType),
          r = U(n, i, t).filter((t => t.detail === o.name));
        return o instanceof s.mR ? R(t, o.getValues().map((t => {
          var e;
          return {
            label: t.name,
            detail: String(o),
            documentation: null !== (e = t.description) && void 0 !== e ? e : void 0,
            deprecated: Boolean(t.deprecationReason),
            isDeprecated: Boolean(t.deprecationReason),
            deprecationReason: t.deprecationReason,
            kind: d.C.EnumMember,
            type: o
          }
        })).concat(r)) : o === l.EZ ? R(t, r.concat([{
          label: "true",
          detail: String(l.EZ),
          documentation: "Not false.",
          kind: d.C.Variable,
          type: l.EZ
        }, {
          label: "false",
          detail: String(l.EZ),
          documentation: "Not true.",
          kind: d.C.Variable,
          type: l.EZ
        }])) : r
      }

      function M(t, e, n, i, o) {
        if (e.needsSeperator) return [];
        const r = y(n.getTypeMap()).filter(s.oT),
          a = r.map((t => {
            let {
              name: e
            } = t;
            return e
          })),
          l = new Set;
        j(i, ((t, e) => {
          var i, r, c, u, h;
          if (e.name && (e.kind !== d.R.INTERFACE_DEF || a.includes(e.name) || l.add(e.name), e.kind === d.R.NAMED_TYPE && (null === (i = e.prevState) || void 0 === i ? void 0 : i.kind) === d.R.IMPLEMENTS))
            if (o.interfaceDef) {
              if (null === (r = o.interfaceDef) || void 0 === r ? void 0 : r.getInterfaces().find((t => {
                  let {
                    name: n
                  } = t;
                  return n === e.name
                }))) return;
              const t = n.getType(e.name),
                i = null === (c = o.interfaceDef) || void 0 === c ? void 0 : c.toConfig();
              o.interfaceDef = new s.oW(Object.assign(Object.assign({}, i), {
                interfaces: [...i.interfaces, t || new s.oW({
                  name: e.name,
                  fields: {}
                })]
              }))
            } else if (o.objectTypeDef) {
            if (null === (u = o.objectTypeDef) || void 0 === u ? void 0 : u.getInterfaces().find((t => {
                let {
                  name: n
                } = t;
                return n === e.name
              }))) return;
            const t = n.getType(e.name),
              i = null === (h = o.objectTypeDef) || void 0 === h ? void 0 : h.toConfig();
            o.objectTypeDef = new s.h6(Object.assign(Object.assign({}, i), {
              interfaces: [...i.interfaces, t || new s.oW({
                name: e.name,
                fields: {}
              })]
            }))
          }
        }));
        const c = o.interfaceDef || o.objectTypeDef,
          u = ((null == c ? void 0 : c.getInterfaces()) || []).map((t => {
            let {
              name: e
            } = t;
            return e
          }));
        return R(t, r.concat([...l].map((t => ({
          name: t
        })))).filter((t => {
          let {
            name: e
          } = t;
          return e !== (null == c ? void 0 : c.name) && !u.includes(e)
        })).map((t => {
          const e = {
            label: t.name,
            kind: d.C.Interface,
            type: t
          };
          return (null == t ? void 0 : t.description) && (e.documentation = t.description), e
        })))
      }

      function w(t, e, n, i) {
        let o;
        if (e.parentType)
          if ((0, s.m0)(e.parentType)) {
            const t = (0, s.fU)(e.parentType),
              i = n.getPossibleTypes(t),
              r = Object.create(null);
            i.forEach((t => {
              t.getInterfaces().forEach((t => {
                r[t.name] = t
              }))
            })), o = i.concat(y(r))
          } else o = [e.parentType];
        else o = y(n.getTypeMap()).filter(s.Gv);
        return R(t, o.map((t => {
          const e = (0, s.xC)(t);
          return {
            label: String(t),
            documentation: (null == e ? void 0 : e.description) || "",
            kind: d.C.Field
          }
        })))
      }

      function P(t, e, n, i, o) {
        if (!i) return [];
        const r = n.getTypeMap(),
          a = v(t.state),
          l = B(i);
        return o && o.length > 0 && l.push(...o), R(t, l.filter((t => r[t.typeCondition.name.value] && !(a && a.kind === d.R.FRAGMENT_DEFINITION && a.name === t.name.value) && (0, s.Gv)(e.parentType) && (0, s.Gv)(r[t.typeCondition.name.value]) && (0, c.zR)(n, e.parentType, r[t.typeCondition.name.value]))).map((t => ({
          label: t.name.value,
          detail: String(r[t.typeCondition.name.value]),
          documentation: `fragment ${t.name.value} on ${t.typeCondition.name.value}`,
          kind: d.C.Field,
          type: r[t.typeCondition.name.value]
        }))))
      }
      m(O, "getSuggestionsForFieldNames"), m(x, "getSuggestionsForInputValues"), m(M, "getSuggestionsForImplements"), m(w, "getSuggestionsForFragmentTypeConditions"), m(P, "getSuggestionsForFragmentSpread");
      const L = m(((t, e) => {
        var n, i, s, o, r, a, l, c, u, h;
        return (null === (n = t.prevState) || void 0 === n ? void 0 : n.kind) === e ? t.prevState : (null === (s = null === (i = t.prevState) || void 0 === i ? void 0 : i.prevState) || void 0 === s ? void 0 : s.kind) === e ? t.prevState.prevState : (null === (a = null === (r = null === (o = t.prevState) || void 0 === o ? void 0 : o.prevState) || void 0 === r ? void 0 : r.prevState) || void 0 === a ? void 0 : a.kind) === e ? t.prevState.prevState.prevState : (null === (h = null === (u = null === (c = null === (l = t.prevState) || void 0 === l ? void 0 : l.prevState) || void 0 === c ? void 0 : c.prevState) || void 0 === u ? void 0 : u.prevState) || void 0 === h ? void 0 : h.kind) === e ? t.prevState.prevState.prevState.prevState : void 0
      }), "getParentDefinition");

      function U(t, e, n) {
        let i, s = null;
        const o = Object.create({});
        return j(t, ((t, r) => {
          if ((null == r ? void 0 : r.kind) === d.R.VARIABLE && r.name && (s = r.name), (null == r ? void 0 : r.kind) === d.R.NAMED_TYPE && s) {
            const t = L(r, d.R.TYPE);
            (null == t ? void 0 : t.type) && (i = e.getType(null == t ? void 0 : t.type))
          }
          s && i && (o[s] || (o[s] = {
            detail: i.toString(),
            insertText: "$" === n.string ? s : "$" + s,
            label: s,
            type: i,
            kind: d.C.Variable
          }, s = null, i = null))
        })), y(o)
      }

      function B(t) {
        const e = [];
        return j(t, ((t, n) => {
          n.kind === d.R.FRAGMENT_DEFINITION && n.name && n.type && e.push({
            kind: d.R.FRAGMENT_DEFINITION,
            name: {
              kind: u.h.NAME,
              value: n.name
            },
            selectionSet: {
              kind: d.R.SELECTION_SET,
              selections: []
            },
            typeCondition: {
              kind: d.R.NAMED_TYPE,
              name: {
                kind: u.h.NAME,
                value: n.type
              }
            }
          })
        })), e
      }

      function H(t, e, n) {
        return R(t, y(e.getTypeMap()).filter(s.j$).map((t => ({
          label: t.name,
          documentation: t.description,
          kind: d.C.Variable
        }))))
      }

      function V(t, e, n, i) {
        var s;
        return (null === (s = e.prevState) || void 0 === s ? void 0 : s.kind) ? R(t, n.getDirectives().filter((t => W(e.prevState, t))).map((t => ({
          label: t.name,
          documentation: t.description || "",
          kind: d.C.Function
        })))) : []
      }

      function G(t, e) {
        let n = null,
          i = null,
          s = null;
        const o = j(t, ((t, o, r, a) => {
          if (a === e.line && t.getCurrentPosition() >= e.character) return n = r, i = Object.assign({}, o), s = t.current(), "BREAK"
        }));
        return {
          start: o.start,
          end: o.end,
          string: s || o.string,
          state: i || o.state,
          style: n || o.style
        }
      }

      function j(t, e) {
        const n = t.split("\n"),
          i = (0, d.o)();
        let s = i.startState(),
          o = "",
          r = new p.C("");
        for (let t = 0; t < n.length; t++) {
          for (r = new p.C(n[t]); !r.eol() && (o = i.token(r, s), "BREAK" !== e(r, s, o, t)););
          e(r, s, o, t), s.kind || (s = i.startState())
        }
        return {
          start: r.getStartOfToken(),
          end: r.getCurrentPosition(),
          string: r.current(),
          state: s,
          style: o
        }
      }

      function W(t, e) {
        var n;
        if (!t || !t.kind) return !1;
        const i = t.kind,
          s = e.locations;
        switch (i) {
          case d.R.QUERY:
            return -1 !== s.indexOf(h.B.QUERY);
          case d.R.MUTATION:
            return -1 !== s.indexOf(h.B.MUTATION);
          case d.R.SUBSCRIPTION:
            return -1 !== s.indexOf(h.B.SUBSCRIPTION);
          case d.R.FIELD:
          case d.R.ALIASED_FIELD:
            return -1 !== s.indexOf(h.B.FIELD);
          case d.R.FRAGMENT_DEFINITION:
            return -1 !== s.indexOf(h.B.FRAGMENT_DEFINITION);
          case d.R.FRAGMENT_SPREAD:
            return -1 !== s.indexOf(h.B.FRAGMENT_SPREAD);
          case d.R.INLINE_FRAGMENT:
            return -1 !== s.indexOf(h.B.INLINE_FRAGMENT);
          case d.R.SCHEMA_DEF:
            return -1 !== s.indexOf(h.B.SCHEMA);
          case d.R.SCALAR_DEF:
            return -1 !== s.indexOf(h.B.SCALAR);
          case d.R.OBJECT_TYPE_DEF:
            return -1 !== s.indexOf(h.B.OBJECT);
          case d.R.FIELD_DEF:
            return -1 !== s.indexOf(h.B.FIELD_DEFINITION);
          case d.R.INTERFACE_DEF:
            return -1 !== s.indexOf(h.B.INTERFACE);
          case d.R.UNION_DEF:
            return -1 !== s.indexOf(h.B.UNION);
          case d.R.ENUM_DEF:
            return -1 !== s.indexOf(h.B.ENUM);
          case d.R.ENUM_VALUE:
            return -1 !== s.indexOf(h.B.ENUM_VALUE);
          case d.R.INPUT_DEF:
            return -1 !== s.indexOf(h.B.INPUT_OBJECT);
          case d.R.INPUT_VALUE_DEF:
            switch (null === (n = t.prevState) || void 0 === n ? void 0 : n.kind) {
              case d.R.ARGUMENTS_DEF:
                return -1 !== s.indexOf(h.B.ARGUMENT_DEFINITION);
              case d.R.INPUT_DEF:
                return -1 !== s.indexOf(h.B.INPUT_FIELD_DEFINITION)
            }
        }
        return !1
      }

      function Y(t, e) {
        let n, i, o, r, a, l, c, u, h, p, f;
        return T(e, (e => {
          var g;
          switch (e.kind) {
            case d.R.QUERY:
            case "ShortQuery":
              p = t.getQueryType();
              break;
            case d.R.MUTATION:
              p = t.getMutationType();
              break;
            case d.R.SUBSCRIPTION:
              p = t.getSubscriptionType();
              break;
            case d.R.INLINE_FRAGMENT:
            case d.R.FRAGMENT_DEFINITION:
              e.type && (p = t.getType(e.type));
              break;
            case d.R.FIELD:
            case d.R.ALIASED_FIELD:
              p && e.name ? (a = h ? E(t, h, e.name) : null, p = a ? a.type : null) : a = null;
              break;
            case d.R.SELECTION_SET:
              h = (0, s.xC)(p);
              break;
            case d.R.DIRECTIVE:
              o = e.name ? t.getDirective(e.name) : null;
              break;
            case d.R.INTERFACE_DEF:
              e.name && (c = null, f = new s.oW({
                name: e.name,
                interfaces: [],
                fields: {}
              }));
              break;
            case d.R.OBJECT_TYPE_DEF:
              e.name && (f = null, c = new s.h6({
                name: e.name,
                interfaces: [],
                fields: {}
              }));
              break;
            case d.R.ARGUMENTS:
              if (e.prevState) switch (e.prevState.kind) {
                case d.R.FIELD:
                  i = a && a.args;
                  break;
                case d.R.DIRECTIVE:
                  i = o && o.args;
                  break;
                case d.R.ALIASED_FIELD: {
                  const n = null === (g = e.prevState) || void 0 === g ? void 0 : g.name;
                  if (!n) {
                    i = null;
                    break
                  }
                  const s = h ? E(t, h, n) : null;
                  if (!s) {
                    i = null;
                    break
                  }
                  i = s.args;
                  break
                }
                default:
                  i = null
              } else i = null;
              break;
            case d.R.ARGUMENT:
              if (i)
                for (let t = 0; t < i.length; t++)
                  if (i[t].name === e.name) {
                    n = i[t];
                    break
                  } l = null == n ? void 0 : n.type;
              break;
            case d.R.ENUM_VALUE:
              const m = (0, s.xC)(l);
              r = m instanceof s.mR ? m.getValues().find((t => t.value === e.name)) : null;
              break;
            case d.R.LIST_VALUE:
              const v = (0, s.tf)(l);
              l = v instanceof s.p2 ? v.ofType : null;
              break;
            case d.R.OBJECT_VALUE:
              const T = (0, s.xC)(l);
              u = T instanceof s.sR ? T.getFields() : null;
              break;
            case d.R.OBJECT_FIELD:
              const y = e.name && u ? u[e.name] : null;
              l = null == y ? void 0 : y.type;
              break;
            case d.R.NAMED_TYPE:
              e.name && (p = t.getType(e.name))
          }
        })), {
          argDef: n,
          argDefs: i,
          directiveDef: o,
          enumValue: r,
          fieldDef: a,
          inputType: l,
          objectFieldDefs: u,
          parentType: h,
          type: p,
          interfaceDef: f,
          objectTypeDef: c
        }
      }
      m(U, "getVariableCompletions"), m(B, "getFragmentDefinitions"), m(H, "getSuggestionsForVariableDefinition"), m(V, "getSuggestionsForDirective"), m(G, "getTokenAtPosition"), m(j, "runOnlineParser"), m(W, "canUseDirective"), m(Y, "getTypeInfo"), i.C.registerHelper("hint", "graphql", ((t, e) => {
        const n = e.schema;
        if (!n) return;
        const s = t.getCursor(),
          o = t.getTokenAt(s),
          r = null !== o.type && /"|\w/.test(o.string[0]) ? o.start : o.end,
          a = new p.P(s.line, r),
          l = {
            list: k(n, t.getValue(), a, o, e.externalFragments).map((t => ({
              text: t.label,
              type: t.type,
              description: t.documentation,
              isDeprecated: t.isDeprecated,
              deprecationReason: t.deprecationReason
            }))),
            from: {
              line: s.line,
              ch: r
            },
            to: {
              line: s.line,
              ch: o.end
            }
          };
        return (null == l ? void 0 : l.list) && l.list.length > 0 && (l.from = i.C.Pos(l.from.line, l.from.ch), l.to = i.C.Pos(l.to.line, l.to.ch), i.C.signal(t, "hasCompletion", t, l, o)), l
      }))
    },
    9871: (t, e, n) => {
      n.r(e), n.d(e, {
        s: () => l
      });
      var i = n(1703),
        s = Object.defineProperty,
        o = (t, e) => s(t, "name", {
          value: e,
          configurable: !0
        });

      function r(t, e) {
        return e.forEach((function(e) {
          e && "string" != typeof e && !Array.isArray(e) && Object.keys(e).forEach((function(n) {
            if ("default" !== n && !(n in t)) {
              var i = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(t, n, i.get ? i : {
                enumerable: !0,
                get: function() {
                  return e[n]
                }
              })
            }
          }))
        })), Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }))
      }
      o(r, "_mergeNamespaces");
      var a = {
        exports: {}
      };
      ! function(t) {
        function e(t, e) {
          if (this.cm = t, this.options = e, this.widget = null, this.debounce = 0, this.tick = 0, this.startPos = this.cm.getCursor("start"), this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length, this.options.updateOnCursorActivity) {
            var n = this;
            t.on("cursorActivity", this.activityFunc = function() {
              n.cursorActivity()
            })
          }
        }
        t.showHint = function(t, e, n) {
          if (!e) return t.showHint(n);
          n && n.async && (e.async = !0);
          var i = {
            hint: e
          };
          if (n)
            for (var s in n) i[s] = n[s];
          return t.showHint(i)
        }, t.defineExtension("showHint", (function(n) {
          n = s(this, this.getCursor("start"), n);
          var i = this.listSelections();
          if (!(i.length > 1)) {
            if (this.somethingSelected()) {
              if (!n.hint.supportsSelection) return;
              for (var o = 0; o < i.length; o++)
                if (i[o].head.line != i[o].anchor.line) return
            }
            this.state.completionActive && this.state.completionActive.close();
            var r = this.state.completionActive = new e(this, n);
            r.options.hint && (t.signal(this, "startCompletion", this), r.update(!0))
          }
        })), t.defineExtension("closeHint", (function() {
          this.state.completionActive && this.state.completionActive.close()
        })), o(e, "Completion");
        var n = window.requestAnimationFrame || function(t) {
            return setTimeout(t, 1e3 / 60)
          },
          i = window.cancelAnimationFrame || clearTimeout;

        function s(t, e, n) {
          var i = t.options.hintOptions,
            s = {};
          for (var o in p) s[o] = p[o];
          if (i)
            for (var o in i) void 0 !== i[o] && (s[o] = i[o]);
          if (n)
            for (var o in n) void 0 !== n[o] && (s[o] = n[o]);
          return s.hint.resolve && (s.hint = s.hint.resolve(t, e)), s
        }

        function r(t) {
          return "string" == typeof t ? t : t.text
        }

        function a(t, e) {
          var n = {
            Up: function() {
              e.moveFocus(-1)
            },
            Down: function() {
              e.moveFocus(1)
            },
            PageUp: function() {
              e.moveFocus(1 - e.menuSize(), !0)
            },
            PageDown: function() {
              e.moveFocus(e.menuSize() - 1, !0)
            },
            Home: function() {
              e.setFocus(0)
            },
            End: function() {
              e.setFocus(e.length - 1)
            },
            Enter: e.pick,
            Tab: e.pick,
            Esc: e.close
          };
          /Mac/.test(navigator.platform) && (n["Ctrl-P"] = function() {
            e.moveFocus(-1)
          }, n["Ctrl-N"] = function() {
            e.moveFocus(1)
          });
          var i = t.options.customKeys,
            s = i ? {} : n;

          function r(t, i) {
            var r;
            r = "string" != typeof i ? o((function(t) {
              return i(t, e)
            }), "bound") : n.hasOwnProperty(i) ? n[i] : i, s[t] = r
          }
          if (o(r, "addBinding"), i)
            for (var a in i) i.hasOwnProperty(a) && r(a, i[a]);
          var l = t.options.extraKeys;
          if (l)
            for (var a in l) l.hasOwnProperty(a) && r(a, l[a]);
          return s
        }

        function l(t, e) {
          for (; e && e != t;) {
            if ("LI" === e.nodeName.toUpperCase() && e.parentNode == t) return e;
            e = e.parentNode
          }
        }

        function c(e, n) {
          this.id = "cm-complete-" + Math.floor(Math.random(1e6)), this.completion = e, this.data = n, this.picked = !1;
          var i = this,
            s = e.cm,
            o = s.getInputField().ownerDocument,
            c = o.defaultView || o.parentWindow,
            u = this.hints = o.createElement("ul");
          u.setAttribute("role", "listbox"), u.setAttribute("aria-expanded", "true"), u.id = this.id;
          var h = e.cm.options.theme;
          u.className = "CodeMirror-hints " + h, this.selectedHint = n.selectedHint || 0;
          for (var d = n.list, p = 0; p < d.length; ++p) {
            var f = u.appendChild(o.createElement("li")),
              g = d[p],
              m = "CodeMirror-hint" + (p != this.selectedHint ? "" : " CodeMirror-hint-active");
            null != g.className && (m = g.className + " " + m), f.className = m, p == this.selectedHint && f.setAttribute("aria-selected", "true"), f.id = this.id + "-" + p, f.setAttribute("role", "option"), g.render ? g.render(f, n, g) : f.appendChild(o.createTextNode(g.displayText || r(g))), f.hintId = p
          }
          var v = e.options.container || o.body,
            E = s.cursorCoords(e.options.alignWithWord ? n.from : null),
            T = E.left,
            y = E.bottom,
            R = !0,
            S = 0,
            b = 0;
          if (v !== o.body) {
            var A = -1 !== ["absolute", "relative", "fixed"].indexOf(c.getComputedStyle(v).position) ? v : v.offsetParent,
              I = A.getBoundingClientRect(),
              C = o.body.getBoundingClientRect();
            S = I.left - C.left - A.scrollLeft, b = I.top - C.top - A.scrollTop
          }
          u.style.left = T - S + "px", u.style.top = y - b + "px";
          var _ = c.innerWidth || Math.max(o.body.offsetWidth, o.documentElement.offsetWidth),
            N = c.innerHeight || Math.max(o.body.offsetHeight, o.documentElement.offsetHeight);
          v.appendChild(u), s.getInputField().setAttribute("aria-autocomplete", "list"), s.getInputField().setAttribute("aria-owns", this.id), s.getInputField().setAttribute("aria-activedescendant", this.id + "-" + this.selectedHint);
          var k, F = e.options.moveOnOverlap ? u.getBoundingClientRect() : new DOMRect,
            D = !!e.options.paddingForScrollbar && u.scrollHeight > u.clientHeight + 1;
          if (setTimeout((function() {
              k = s.getScrollInfo()
            })), F.bottom - N > 0) {
            var O = F.bottom - F.top;
            if (E.top - (E.bottom - F.top) - O > 0) u.style.top = (y = E.top - O - b) + "px", R = !1;
            else if (O > N) {
              u.style.height = N - 5 + "px", u.style.top = (y = E.bottom - F.top - b) + "px";
              var x = s.getCursor();
              n.from.ch != x.ch && (E = s.cursorCoords(x), u.style.left = (T = E.left - S) + "px", F = u.getBoundingClientRect())
            }
          }
          var M, w = F.right - _;
          if (D && (w += s.display.nativeBarWidth), w > 0 && (F.right - F.left > _ && (u.style.width = _ - 5 + "px", w -= F.right - F.left - _), u.style.left = (T = E.left - w - S) + "px"), D)
            for (var P = u.firstChild; P; P = P.nextSibling) P.style.paddingRight = s.display.nativeBarWidth + "px";
          s.addKeyMap(this.keyMap = a(e, {
            moveFocus: function(t, e) {
              i.changeActive(i.selectedHint + t, e)
            },
            setFocus: function(t) {
              i.changeActive(t)
            },
            menuSize: function() {
              return i.screenAmount()
            },
            length: d.length,
            close: function() {
              e.close()
            },
            pick: function() {
              i.pick()
            },
            data: n
          })), e.options.closeOnUnfocus && (s.on("blur", this.onBlur = function() {
            M = setTimeout((function() {
              e.close()
            }), 100)
          }), s.on("focus", this.onFocus = function() {
            clearTimeout(M)
          })), s.on("scroll", this.onScroll = function() {
            var t = s.getScrollInfo(),
              n = s.getWrapperElement().getBoundingClientRect();
            k || (k = s.getScrollInfo());
            var i = y + k.top - t.top,
              r = i - (c.pageYOffset || (o.documentElement || o.body).scrollTop);
            if (R || (r += u.offsetHeight), r <= n.top || r >= n.bottom) return e.close();
            u.style.top = i + "px", u.style.left = T + k.left - t.left + "px"
          }), t.on(u, "dblclick", (function(t) {
            var e = l(u, t.target || t.srcElement);
            e && null != e.hintId && (i.changeActive(e.hintId), i.pick())
          })), t.on(u, "click", (function(t) {
            var n = l(u, t.target || t.srcElement);
            n && null != n.hintId && (i.changeActive(n.hintId), e.options.completeOnSingleClick && i.pick())
          })), t.on(u, "mousedown", (function() {
            setTimeout((function() {
              s.focus()
            }), 20)
          }));
          var L = this.getSelectedHintRange();
          return 0 === L.from && 0 === L.to || this.scrollToActive(), t.signal(n, "select", d[this.selectedHint], u.childNodes[this.selectedHint]), !0
        }

        function u(t, e) {
          if (!t.somethingSelected()) return e;
          for (var n = [], i = 0; i < e.length; i++) e[i].supportsSelection && n.push(e[i]);
          return n
        }

        function h(t, e, n, i) {
          if (t.async) t(e, i, n);
          else {
            var s = t(e, n);
            s && s.then ? s.then(i) : i(s)
          }
        }

        function d(e, n) {
          var i, s = e.getHelpers(n, "hint");
          if (s.length) {
            var r = o((function(t, e, n) {
              var i = u(t, s);

              function r(s) {
                if (s == i.length) return e(null);
                h(i[s], t, n, (function(t) {
                  t && t.list.length > 0 ? e(t) : r(s + 1)
                }))
              }
              o(r, "run"), r(0)
            }), "resolved");
            return r.async = !0, r.supportsSelection = !0, r
          }
          return (i = e.getHelper(e.getCursor(), "hintWords")) ? function(e) {
            return t.hint.fromList(e, {
              words: i
            })
          } : t.hint.anyword ? function(e, n) {
            return t.hint.anyword(e, n)
          } : function() {}
        }
        e.prototype = {
          close: function() {
            this.active() && (this.cm.state.completionActive = null, this.tick = null, this.options.updateOnCursorActivity && this.cm.off("cursorActivity", this.activityFunc), this.widget && this.data && t.signal(this.data, "close"), this.widget && this.widget.close(), t.signal(this.cm, "endCompletion", this.cm))
          },
          active: function() {
            return this.cm.state.completionActive == this
          },
          pick: function(e, n) {
            var i = e.list[n],
              s = this;
            this.cm.operation((function() {
              i.hint ? i.hint(s.cm, e, i) : s.cm.replaceRange(r(i), i.from || e.from, i.to || e.to, "complete"), t.signal(e, "pick", i), s.cm.scrollIntoView()
            })), this.options.closeOnPick && this.close()
          },
          cursorActivity: function() {
            this.debounce && (i(this.debounce), this.debounce = 0);
            var t = this.startPos;
            this.data && (t = this.data.from);
            var e = this.cm.getCursor(),
              s = this.cm.getLine(e.line);
            if (e.line != this.startPos.line || s.length - e.ch != this.startLen - this.startPos.ch || e.ch < t.ch || this.cm.somethingSelected() || !e.ch || this.options.closeCharacters.test(s.charAt(e.ch - 1))) this.close();
            else {
              var o = this;
              this.debounce = n((function() {
                o.update()
              })), this.widget && this.widget.disable()
            }
          },
          update: function(t) {
            if (null != this.tick) {
              var e = this,
                n = ++this.tick;
              h(this.options.hint, this.cm, this.options, (function(i) {
                e.tick == n && e.finishUpdate(i, t)
              }))
            }
          },
          finishUpdate: function(e, n) {
            this.data && t.signal(this.data, "update");
            var i = this.widget && this.widget.picked || n && this.options.completeSingle;
            this.widget && this.widget.close(), this.data = e, e && e.list.length && (i && 1 == e.list.length ? this.pick(e, 0) : (this.widget = new c(this, e), t.signal(e, "shown")))
          }
        }, o(s, "parseOptions"), o(r, "getText"), o(a, "buildKeyMap"), o(l, "getHintElement"), o(c, "Widget"), c.prototype = {
          close: function() {
            if (this.completion.widget == this) {
              this.completion.widget = null, this.hints.parentNode && this.hints.parentNode.removeChild(this.hints), this.completion.cm.removeKeyMap(this.keyMap);
              var t = this.completion.cm.getInputField();
              t.removeAttribute("aria-activedescendant"), t.removeAttribute("aria-owns");
              var e = this.completion.cm;
              this.completion.options.closeOnUnfocus && (e.off("blur", this.onBlur), e.off("focus", this.onFocus)), e.off("scroll", this.onScroll)
            }
          },
          disable: function() {
            this.completion.cm.removeKeyMap(this.keyMap);
            var t = this;
            this.keyMap = {
              Enter: function() {
                t.picked = !0
              }
            }, this.completion.cm.addKeyMap(this.keyMap)
          },
          pick: function() {
            this.completion.pick(this.data, this.selectedHint)
          },
          changeActive: function(e, n) {
            if (e >= this.data.list.length ? e = n ? this.data.list.length - 1 : 0 : e < 0 && (e = n ? 0 : this.data.list.length - 1), this.selectedHint != e) {
              var i = this.hints.childNodes[this.selectedHint];
              i && (i.className = i.className.replace(" CodeMirror-hint-active", ""), i.removeAttribute("aria-selected")), (i = this.hints.childNodes[this.selectedHint = e]).className += " CodeMirror-hint-active", i.setAttribute("aria-selected", "true"), this.completion.cm.getInputField().setAttribute("aria-activedescendant", i.id), this.scrollToActive(), t.signal(this.data, "select", this.data.list[this.selectedHint], i)
            }
          },
          scrollToActive: function() {
            var t = this.getSelectedHintRange(),
              e = this.hints.childNodes[t.from],
              n = this.hints.childNodes[t.to],
              i = this.hints.firstChild;
            e.offsetTop < this.hints.scrollTop ? this.hints.scrollTop = e.offsetTop - i.offsetTop : n.offsetTop + n.offsetHeight > this.hints.scrollTop + this.hints.clientHeight && (this.hints.scrollTop = n.offsetTop + n.offsetHeight - this.hints.clientHeight + i.offsetTop)
          },
          screenAmount: function() {
            return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1
          },
          getSelectedHintRange: function() {
            var t = this.completion.options.scrollMargin || 0;
            return {
              from: Math.max(0, this.selectedHint - t),
              to: Math.min(this.data.list.length - 1, this.selectedHint + t)
            }
          }
        }, o(u, "applicableHelpers"), o(h, "fetchHints"), o(d, "resolveAutoHints"), t.registerHelper("hint", "auto", {
          resolve: d
        }), t.registerHelper("hint", "fromList", (function(e, n) {
          var i, s = e.getCursor(),
            o = e.getTokenAt(s),
            r = t.Pos(s.line, o.start),
            a = s;
          o.start < s.ch && /\w/.test(o.string.charAt(s.ch - o.start - 1)) ? i = o.string.substr(0, s.ch - o.start) : (i = "", r = s);
          for (var l = [], c = 0; c < n.words.length; c++) {
            var u = n.words[c];
            u.slice(0, i.length) == i && l.push(u)
          }
          if (l.length) return {
            list: l,
            from: r,
            to: a
          }
        })), t.commands.autocomplete = t.showHint;
        var p = {
          hint: t.hint.auto,
          completeSingle: !0,
          alignWithWord: !0,
          closeCharacters: /[\s()\[\]{};:>,]/,
          closeOnPick: !0,
          closeOnUnfocus: !0,
          updateOnCursorActivity: !0,
          completeOnSingleClick: !0,
          container: null,
          customKeys: null,
          extraKeys: null,
          paddingForScrollbar: !0,
          moveOnOverlap: !0
        };
        t.defineOption("hintOptions", null)
      }(i.a.exports);
      var l = r({
        __proto__: null,
        default: a.exports
      }, [a.exports])
    }
  }
]);