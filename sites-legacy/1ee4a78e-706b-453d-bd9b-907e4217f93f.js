try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1ee4a78e-706b-453d-bd9b-907e4217f93f", e._sentryDebugIdIdentifier = "sentry-dbid-1ee4a78e-706b-453d-bd9b-907e4217f93f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [601], {
    30601: (e, t, n) => {
      n.r(t), n.d(t, {
        BREAK: () => xe,
        BreakingChangeType: () => ss,
        DEFAULT_DEPRECATION_REASON: () => En,
        DangerousChangeType: () => as,
        DirectiveLocation: () => O,
        ExecutableDefinitionsRule: () => gi,
        FieldsOnCorrectTypeRule: () => Ii,
        FragmentsOnCompositeTypesRule: () => _i,
        GRAPHQL_MAX_INT: () => nn,
        GRAPHQL_MIN_INT: () => rn,
        GraphQLBoolean: () => cn,
        GraphQLDeprecatedDirective: () => Tn,
        GraphQLDirective: () => mn,
        GraphQLEnumType: () => Jt,
        GraphQLError: () => h,
        GraphQLFloat: () => sn,
        GraphQLID: () => un,
        GraphQLIncludeDirective: () => yn,
        GraphQLInputObjectType: () => zt,
        GraphQLInt: () => on,
        GraphQLInterfaceType: () => Yt,
        GraphQLList: () => _t,
        GraphQLNonNull: () => bt,
        GraphQLObjectType: () => Ct,
        GraphQLOneOfDirective: () => gn,
        GraphQLScalarType: () => Ft,
        GraphQLSchema: () => Gn,
        GraphQLSkipDirective: () => vn,
        GraphQLSpecifiedByDirective: () => Nn,
        GraphQLString: () => an,
        GraphQLUnionType: () => Qt,
        Kind: () => D,
        KnownArgumentNamesRule: () => bi,
        KnownDirectivesRule: () => Di,
        KnownFragmentNamesRule: () => Ai,
        KnownTypeNamesRule: () => Si,
        Lexer: () => V,
        Location: () => T,
        LoneAnonymousOperationRule: () => Ri,
        LoneSchemaDefinitionRule: () => Li,
        MaxIntrospectionDepthRule: () => $i,
        NoDeprecatedCustomRule: () => Io,
        NoFragmentCyclesRule: () => xi,
        NoSchemaIntrospectionCustomRule: () => _o,
        NoUndefinedVariablesRule: () => Fi,
        NoUnusedFragmentsRule: () => Ci,
        NoUnusedVariablesRule: () => Vi,
        OperationTypeNode: () => b,
        OverlappingFieldsCanBeMergedRule: () => ji,
        PossibleFragmentSpreadsRule: () => Wi,
        PossibleTypeExtensionsRule: () => Zi,
        ProvidedRequiredArgumentsRule: () => tr,
        ScalarLeafsRule: () => rr,
        SchemaMetaFieldDef: () => Cn,
        SingleFieldSubscriptionsRule: () => gr,
        Source: () => ce,
        Token: () => N,
        TokenKind: () => A,
        TypeInfo: () => ci,
        TypeKind: () => xn,
        TypeMetaFieldDef: () => Vn,
        TypeNameMetaFieldDef: () => Un,
        UniqueArgumentDefinitionNamesRule: () => _r,
        UniqueArgumentNamesRule: () => br,
        UniqueDirectiveNamesRule: () => Or,
        UniqueDirectivesPerLocationRule: () => Dr,
        UniqueEnumValueNamesRule: () => Ar,
        UniqueFieldDefinitionNamesRule: () => Sr,
        UniqueFragmentNamesRule: () => Rr,
        UniqueInputFieldNamesRule: () => Lr,
        UniqueOperationNamesRule: () => kr,
        UniqueOperationTypesRule: () => $r,
        UniqueTypeNamesRule: () => xr,
        UniqueVariableNamesRule: () => Fr,
        ValidationContext: () => qr,
        ValuesOfCorrectTypeRule: () => Cr,
        VariablesAreInputTypesRule: () => Ur,
        VariablesInAllowedPositionRule: () => Mr,
        __Directive: () => Sn,
        __DirectiveLocation: () => wn,
        __EnumValue: () => $n,
        __Field: () => Ln,
        __InputValue: () => kn,
        __Schema: () => An,
        __Type: () => Rn,
        __TypeKind: () => Fn,
        assertAbstractType: () => It,
        assertCompositeType: () => Nt,
        assertDirective: () => hn,
        assertEnumType: () => st,
        assertEnumValueName: () => Ke,
        assertInputObjectType: () => ct,
        assertInputType: () => ht,
        assertInterfaceType: () => nt,
        assertLeafType: () => Et,
        assertListType: () => lt,
        assertName: () => Je,
        assertNamedType: () => Lt,
        assertNonNullType: () => dt,
        assertNullableType: () => St,
        assertObjectType: () => et,
        assertOutputType: () => yt,
        assertScalarType: () => We,
        assertSchema: () => Bn,
        assertType: () => ze,
        assertUnionType: () => rt,
        assertValidName: () => rs,
        assertValidSchema: () => qn,
        assertWrappingType: () => Dt,
        astFromValue: () => On,
        buildASTSchema: () => xo,
        buildClientSchema: () => So,
        buildSchema: () => Fo,
        coerceInputValue: () => cr,
        concatAST: () => Zo,
        createSourceEventStream: () => go,
        defaultFieldResolver: () => ho,
        defaultTypeResolver: () => fo,
        doTypesOverlap: () => tn,
        execute: () => Zr,
        executeSync: () => eo,
        extendSchema: () => wo,
        findBreakingChanges: () => cs,
        findDangerousChanges: () => us,
        formatError: () => v,
        getArgumentValues: () => hr,
        getDirectiveValues: () => mr,
        getEnterLeaveForKind: () => Ve,
        getIntrospectionQuery: () => bo,
        getLocation: () => l,
        getNamedType: () => kt,
        getNullableType: () => wt,
        getOperationAST: () => Oo,
        getOperationRootType: () => Do,
        getVariableValues: () => fr,
        getVisitFn: () => Ue,
        graphql: () => yo,
        graphqlSync: () => vo,
        introspectionFromSchema: () => Ao,
        introspectionTypes: () => Mn,
        isAbstractType: () => gt,
        isCompositeType: () => Tt,
        isConstValueNode: () => mi,
        isDefinitionNode: () => pi,
        isDirective: () => fn,
        isEnumType: () => ot,
        isEqualType: () => Zt,
        isExecutableDefinitionNode: () => di,
        isInputObjectType: () => at,
        isInputType: () => ft,
        isInterfaceType: () => tt,
        isIntrospectionType: () => jn,
        isLeafType: () => vt,
        isListType: () => ut,
        isNamedType: () => Rt,
        isNonNullType: () => pt,
        isNullableType: () => At,
        isObjectType: () => Ze,
        isOutputType: () => mt,
        isRequiredArgument: () => Gt,
        isRequiredInputField: () => Wt,
        isScalarType: () => He,
        isSchema: () => Pn,
        isSelectionNode: () => fi,
        isSpecifiedDirective: () => _n,
        isSpecifiedScalarType: () => pn,
        isType: () => Xe,
        isTypeDefinitionNode: () => Ei,
        isTypeExtensionNode: () => Ni,
        isTypeNode: () => yi,
        isTypeSubTypeOf: () => en,
        isTypeSystemDefinitionNode: () => vi,
        isTypeSystemExtensionNode: () => Ti,
        isUnionType: () => it,
        isValidNameError: () => os,
        isValueNode: () => hi,
        isWrappingType: () => Ot,
        lexicographicSortSchema: () => Co,
        locatedError: () => Hr,
        parse: () => le,
        parseConstValue: () => de,
        parseType: () => fe,
        parseValue: () => pe,
        print: () => Me,
        printError: () => y,
        printIntrospectionSchema: () => Po,
        printLocation: () => p,
        printSchema: () => jo,
        printSourceLocation: () => d,
        printType: () => Qo,
        recommendedRules: () => Pr,
        resolveObjMapThunk: () => xt,
        resolveReadonlyArrayThunk: () => $t,
        responsePathAsArray: () => ar,
        separateOperations: () => es,
        specifiedDirectives: () => In,
        specifiedRules: () => Br,
        specifiedScalarTypes: () => ln,
        stripIgnoredCharacters: () => is,
        subscribe: () => No,
        syntaxError: () => E,
        typeFromAST: () => ai,
        validate: () => Jr,
        validateSchema: () => Qn,
        valueFromAST: () => pr,
        valueFromASTUntyped: () => qe,
        version: () => i,
        versionInfo: () => r,
        visit: () => Fe,
        visitInParallel: () => Ce,
        visitWithTypeInfo: () => li
      });
      const i = "16.11.0",
        r = Object.freeze({
          major: 16,
          minor: 11,
          patch: 0,
          preReleaseTag: null
        });

      function o(e, t) {
        if (!Boolean(e)) throw new Error(t)
      }

      function s(e) {
        return "function" == typeof(null == e ? void 0 : e.then)
      }

      function a(e) {
        return "object" == typeof e && null !== e
      }

      function c(e, t) {
        if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
      }
      const u = /\r\n|[\n\r]/g;

      function l(e, t) {
        let n = 0,
          i = 1;
        for (const r of e.body.matchAll(u)) {
          if ("number" == typeof r.index || c(!1), r.index >= t) break;
          n = r.index + r[0].length, i += 1
        }
        return {
          line: i,
          column: t + 1 - n
        }
      }

      function p(e) {
        return d(e.source, l(e.source, e.start))
      }

      function d(e, t) {
        const n = e.locationOffset.column - 1,
          i = "".padStart(n) + e.body,
          r = t.line - 1,
          o = e.locationOffset.line - 1,
          s = t.line + o,
          a = 1 === t.line ? n : 0,
          c = t.column + a,
          u = `${e.name}:${s}:${c}\n`,
          l = i.split(/\r\n|[\n\r]/g),
          p = l[r];
        if (p.length > 120) {
          const e = Math.floor(c / 80),
            t = c % 80,
            n = [];
          for (let e = 0; e < p.length; e += 80) n.push(p.slice(e, e + 80));
          return u + f([
            [`${s} |`, n[0]], ...n.slice(1, e + 1).map((e => ["|", e])), ["|", "^".padStart(t)],
            ["|", n[e + 1]]
          ])
        }
        return u + f([
          [s - 1 + " |", l[r - 1]],
          [`${s} |`, p],
          ["|", "^".padStart(c)],
          [`${s+1} |`, l[r + 1]]
        ])
      }

      function f(e) {
        const t = e.filter((([e, t]) => void 0 !== t)),
          n = Math.max(...t.map((([e]) => e.length)));
        return t.map((([e, t]) => e.padStart(n) + (t ? " " + t : ""))).join("\n")
      }
      class h extends Error {
        constructor(e, ...t) {
          var n, i, r;
          const {
            nodes: o,
            source: s,
            positions: c,
            path: u,
            originalError: p,
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
          super(e), this.name = "GraphQLError", this.path = null != u ? u : void 0, this.originalError = null != p ? p : void 0, this.nodes = m(Array.isArray(o) ? o : o ? [o] : void 0);
          const f = m(null === (n = this.nodes) || void 0 === n ? void 0 : n.map((e => e.loc)).filter((e => null != e)));
          this.source = null != s ? s : null == f || null === (i = f[0]) || void 0 === i ? void 0 : i.source, this.positions = null != c ? c : null == f ? void 0 : f.map((e => e.start)), this.locations = c && s ? c.map((e => l(s, e))) : null == f ? void 0 : f.map((e => l(e.source, e.start)));
          const y = a(null == p ? void 0 : p.extensions) ? null == p ? void 0 : p.extensions : void 0;
          this.extensions = null !== (r = null != d ? d : y) && void 0 !== r ? r : Object.create(null), Object.defineProperties(this, {
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
            for (const t of this.nodes) t.loc && (e += "\n\n" + p(t.loc));
          else if (this.source && this.locations)
            for (const t of this.locations) e += "\n\n" + d(this.source, t);
          return e
        }
        toJSON() {
          const e = {
            message: this.message
          };
          return null != this.locations && (e.locations = this.locations), null != this.path && (e.path = this.path), null != this.extensions && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e
        }
      }

      function m(e) {
        return void 0 === e || 0 === e.length ? void 0 : e
      }

      function y(e) {
        return e.toString()
      }

      function v(e) {
        return e.toJSON()
      }

      function E(e, t, n) {
        return new h(`Syntax Error: ${n}`, {
          source: e,
          positions: [t]
        })
      }
      class T {
        constructor(e, t, n) {
          this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n
        }
        get[Symbol.toStringTag]() {
          return "Location"
        }
        toJSON() {
          return {
            start: this.start,
            end: this.end
          }
        }
      }
      class N {
        constructor(e, t, n, i, r, o) {
          this.kind = e, this.start = t, this.end = n, this.line = i, this.column = r, this.value = o, this.prev = null, this.next = null
        }
        get[Symbol.toStringTag]() {
          return "Token"
        }
        toJSON() {
          return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
          }
        }
      }
      const g = {
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
        I = new Set(Object.keys(g));

      function _(e) {
        const t = null == e ? void 0 : e.kind;
        return "string" == typeof t && I.has(t)
      }
      var b, O, D, A;

      function S(e) {
        return 9 === e || 32 === e
      }

      function w(e) {
        return e >= 48 && e <= 57
      }

      function R(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function L(e) {
        return R(e) || 95 === e
      }

      function k(e) {
        return R(e) || w(e) || 95 === e
      }

      function $(e) {
        var t;
        let n = Number.MAX_SAFE_INTEGER,
          i = null,
          r = -1;
        for (let t = 0; t < e.length; ++t) {
          var o;
          const s = e[t],
            a = x(s);
          a !== s.length && (i = null !== (o = i) && void 0 !== o ? o : t, r = t, 0 !== t && a < n && (n = a))
        }
        return e.map(((e, t) => 0 === t ? e : e.slice(n))).slice(null !== (t = i) && void 0 !== t ? t : 0, r + 1)
      }

      function x(e) {
        let t = 0;
        for (; t < e.length && S(e.charCodeAt(t));) ++t;
        return t
      }

      function F(e) {
        if ("" === e) return !0;
        let t = !0,
          n = !1,
          i = !0,
          r = !1;
        for (let o = 0; o < e.length; ++o) switch (e.codePointAt(o)) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 11:
          case 12:
          case 14:
          case 15:
          case 13:
            return !1;
          case 10:
            if (t && !r) return !1;
            r = !0, t = !0, n = !1;
            break;
          case 9:
          case 32:
            n || (n = t);
            break;
          default:
            i && (i = n), t = !1
        }
        return !(t || i && r)
      }

      function C(e, t) {
        const n = e.replace(/"""/g, '\\"""'),
          i = n.split(/\r\n|[\n\r]/g),
          r = 1 === i.length,
          o = i.length > 1 && i.slice(1).every((e => 0 === e.length || S(e.charCodeAt(0)))),
          s = n.endsWith('\\"""'),
          a = e.endsWith('"') && !s,
          c = e.endsWith("\\"),
          u = a || c,
          l = !(null != t && t.minimize) && (!r || e.length > 70 || u || o || s);
        let p = "";
        const d = r && S(e.charCodeAt(0));
        return (l && !d || o) && (p += "\n"), p += n, (l || u) && (p += "\n"), '"""' + p + '"""'
      }! function(e) {
        e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription"
      }(b || (b = {})),
      function(e) {
        e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
      }(O || (O = {})),
      function(e) {
        e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension"
      }(D || (D = {})),
      function(e) {
        e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment"
      }(A || (A = {}));
      class V {
        constructor(e) {
          const t = new N(A.SOF, 0, 0, 0, 0);
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
          if (e.kind !== A.EOF)
            do {
              if (e.next) e = e.next;
              else {
                const t = Q(this, e.end);
                e.next = t, t.prev = e, e = t
              }
            } while (e.kind === A.COMMENT);
          return e
        }
      }

      function U(e) {
        return e === A.BANG || e === A.DOLLAR || e === A.AMP || e === A.PAREN_L || e === A.PAREN_R || e === A.SPREAD || e === A.COLON || e === A.EQUALS || e === A.AT || e === A.BRACKET_L || e === A.BRACKET_R || e === A.BRACE_L || e === A.PIPE || e === A.BRACE_R
      }

      function M(e) {
        return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
      }

      function j(e, t) {
        return P(e.charCodeAt(t)) && B(e.charCodeAt(t + 1))
      }

      function P(e) {
        return e >= 55296 && e <= 56319
      }

      function B(e) {
        return e >= 56320 && e <= 57343
      }

      function G(e, t) {
        const n = e.source.body.codePointAt(t);
        if (void 0 === n) return A.EOF;
        if (n >= 32 && n <= 126) {
          const e = String.fromCodePoint(n);
          return '"' === e ? "'\"'" : `"${e}"`
        }
        return "U+" + n.toString(16).toUpperCase().padStart(4, "0")
      }

      function Y(e, t, n, i, r) {
        const o = e.line,
          s = 1 + n - e.lineStart;
        return new N(t, n, i, o, s, r)
      }

      function Q(e, t) {
        const n = e.source.body,
          i = n.length;
        let r = t;
        for (; r < i;) {
          const t = n.charCodeAt(r);
          switch (t) {
            case 65279:
            case 9:
            case 32:
            case 44:
              ++r;
              continue;
            case 10:
              ++r, ++e.line, e.lineStart = r;
              continue;
            case 13:
              10 === n.charCodeAt(r + 1) ? r += 2 : ++r, ++e.line, e.lineStart = r;
              continue;
            case 35:
              return q(e, r);
            case 33:
              return Y(e, A.BANG, r, r + 1);
            case 36:
              return Y(e, A.DOLLAR, r, r + 1);
            case 38:
              return Y(e, A.AMP, r, r + 1);
            case 40:
              return Y(e, A.PAREN_L, r, r + 1);
            case 41:
              return Y(e, A.PAREN_R, r, r + 1);
            case 46:
              if (46 === n.charCodeAt(r + 1) && 46 === n.charCodeAt(r + 2)) return Y(e, A.SPREAD, r, r + 3);
              break;
            case 58:
              return Y(e, A.COLON, r, r + 1);
            case 61:
              return Y(e, A.EQUALS, r, r + 1);
            case 64:
              return Y(e, A.AT, r, r + 1);
            case 91:
              return Y(e, A.BRACKET_L, r, r + 1);
            case 93:
              return Y(e, A.BRACKET_R, r, r + 1);
            case 123:
              return Y(e, A.BRACE_L, r, r + 1);
            case 124:
              return Y(e, A.PIPE, r, r + 1);
            case 125:
              return Y(e, A.BRACE_R, r, r + 1);
            case 34:
              return 34 === n.charCodeAt(r + 1) && 34 === n.charCodeAt(r + 2) ? te(e, r) : X(e, r)
          }
          if (w(t) || 45 === t) return J(e, r, t);
          if (L(t)) return ne(e, r);
          throw E(e.source, r, 39 === t ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : M(t) || j(n, r) ? `Unexpected character: ${G(e,r)}.` : `Invalid character: ${G(e,r)}.`)
        }
        return Y(e, A.EOF, i, i)
      }

      function q(e, t) {
        const n = e.source.body,
          i = n.length;
        let r = t + 1;
        for (; r < i;) {
          const e = n.charCodeAt(r);
          if (10 === e || 13 === e) break;
          if (M(e)) ++r;
          else {
            if (!j(n, r)) break;
            r += 2
          }
        }
        return Y(e, A.COMMENT, t, r, n.slice(t + 1, r))
      }

      function J(e, t, n) {
        const i = e.source.body;
        let r = t,
          o = n,
          s = !1;
        if (45 === o && (o = i.charCodeAt(++r)), 48 === o) {
          if (o = i.charCodeAt(++r), w(o)) throw E(e.source, r, `Invalid number, unexpected digit after 0: ${G(e,r)}.`)
        } else r = K(e, r, o), o = i.charCodeAt(r);
        if (46 === o && (s = !0, o = i.charCodeAt(++r), r = K(e, r, o), o = i.charCodeAt(r)), 69 !== o && 101 !== o || (s = !0, o = i.charCodeAt(++r), 43 !== o && 45 !== o || (o = i.charCodeAt(++r)), r = K(e, r, o), o = i.charCodeAt(r)), 46 === o || L(o)) throw E(e.source, r, `Invalid number, expected digit but got: ${G(e,r)}.`);
        return Y(e, s ? A.FLOAT : A.INT, t, r, i.slice(t, r))
      }

      function K(e, t, n) {
        if (!w(n)) throw E(e.source, t, `Invalid number, expected digit but got: ${G(e,t)}.`);
        const i = e.source.body;
        let r = t + 1;
        for (; w(i.charCodeAt(r));) ++r;
        return r
      }

      function X(e, t) {
        const n = e.source.body,
          i = n.length;
        let r = t + 1,
          o = r,
          s = "";
        for (; r < i;) {
          const i = n.charCodeAt(r);
          if (34 === i) return s += n.slice(o, r), Y(e, A.STRING, t, r + 1, s);
          if (92 !== i) {
            if (10 === i || 13 === i) break;
            if (M(i)) ++r;
            else {
              if (!j(n, r)) throw E(e.source, r, `Invalid character within String: ${G(e,r)}.`);
              r += 2
            }
          } else {
            s += n.slice(o, r);
            const t = 117 === n.charCodeAt(r + 1) ? 123 === n.charCodeAt(r + 2) ? z(e, r) : H(e, r) : ee(e, r);
            s += t.value, r += t.size, o = r
          }
        }
        throw E(e.source, r, "Unterminated string.")
      }

      function z(e, t) {
        const n = e.source.body;
        let i = 0,
          r = 3;
        for (; r < 12;) {
          const e = n.charCodeAt(t + r++);
          if (125 === e) {
            if (r < 5 || !M(i)) break;
            return {
              value: String.fromCodePoint(i),
              size: r
            }
          }
          if (i = i << 4 | Z(e), i < 0) break
        }
        throw E(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+r)}".`)
      }

      function H(e, t) {
        const n = e.source.body,
          i = W(n, t + 2);
        if (M(i)) return {
          value: String.fromCodePoint(i),
          size: 6
        };
        if (P(i) && 92 === n.charCodeAt(t + 6) && 117 === n.charCodeAt(t + 7)) {
          const e = W(n, t + 8);
          if (B(e)) return {
            value: String.fromCodePoint(i, e),
            size: 12
          }
        }
        throw E(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)
      }

      function W(e, t) {
        return Z(e.charCodeAt(t)) << 12 | Z(e.charCodeAt(t + 1)) << 8 | Z(e.charCodeAt(t + 2)) << 4 | Z(e.charCodeAt(t + 3))
      }

      function Z(e) {
        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
      }

      function ee(e, t) {
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
        throw E(e.source, t, `Invalid character escape sequence: "${n.slice(t,t+2)}".`)
      }

      function te(e, t) {
        const n = e.source.body,
          i = n.length;
        let r = e.lineStart,
          o = t + 3,
          s = o,
          a = "";
        const c = [];
        for (; o < i;) {
          const i = n.charCodeAt(o);
          if (34 === i && 34 === n.charCodeAt(o + 1) && 34 === n.charCodeAt(o + 2)) {
            a += n.slice(s, o), c.push(a);
            const i = Y(e, A.BLOCK_STRING, t, o + 3, $(c).join("\n"));
            return e.line += c.length - 1, e.lineStart = r, i
          }
          if (92 !== i || 34 !== n.charCodeAt(o + 1) || 34 !== n.charCodeAt(o + 2) || 34 !== n.charCodeAt(o + 3))
            if (10 !== i && 13 !== i)
              if (M(i)) ++o;
              else {
                if (!j(n, o)) throw E(e.source, o, `Invalid character within String: ${G(e,o)}.`);
                o += 2
              }
          else a += n.slice(s, o), c.push(a), 13 === i && 10 === n.charCodeAt(o + 1) ? o += 2 : ++o, a = "", s = o, r = o;
          else a += n.slice(s, o), s = o + 1, o += 4
        }
        throw E(e.source, o, "Unterminated string.")
      }

      function ne(e, t) {
        const n = e.source.body,
          i = n.length;
        let r = t + 1;
        for (; r < i && k(n.charCodeAt(r));) ++r;
        return Y(e, A.NAME, t, r, n.slice(t, r))
      }
      const ie = 10,
        re = 2;

      function oe(e) {
        return se(e, [])
      }

      function se(e, t) {
        switch (typeof e) {
          case "string":
            return JSON.stringify(e);
          case "function":
            return e.name ? `[function ${e.name}]` : "[function]";
          case "object":
            return function(e, t) {
              if (null === e) return "null";
              if (t.includes(e)) return "[Circular]";
              const n = [...t, e];
              if (function(e) {
                  return "function" == typeof e.toJSON
                }(e)) {
                const t = e.toJSON();
                if (t !== e) return "string" == typeof t ? t : se(t, n)
              } else if (Array.isArray(e)) return function(e, t) {
                if (0 === e.length) return "[]";
                if (t.length > re) return "[Array]";
                const n = Math.min(ie, e.length),
                  i = e.length - n,
                  r = [];
                for (let i = 0; i < n; ++i) r.push(se(e[i], t));
                return 1 === i ? r.push("... 1 more item") : i > 1 && r.push(`... ${i} more items`), "[" + r.join(", ") + "]"
              }(e, n);
              return function(e, t) {
                const n = Object.entries(e);
                if (0 === n.length) return "{}";
                if (t.length > re) return "[" + function(e) {
                  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                  if ("Object" === t && "function" == typeof e.constructor) {
                    const t = e.constructor.name;
                    if ("string" == typeof t && "" !== t) return t
                  }
                  return t
                }(e) + "]";
                const i = n.map((([e, n]) => e + ": " + se(n, t)));
                return "{ " + i.join(", ") + " }"
              }(e, n)
            }(e, t);
          default:
            return String(e)
        }
      }
      const ae = globalThis.process ? function(e, t) {
        return e instanceof t
      } : function(e, t) {
        if (e instanceof t) return !0;
        if ("object" == typeof e && null !== e) {
          var n;
          const i = t.prototype[Symbol.toStringTag];
          if (i === (Symbol.toStringTag in e ? e[Symbol.toStringTag] : null === (n = e.constructor) || void 0 === n ? void 0 : n.name)) {
            const t = oe(e);
            throw new Error(`Cannot use ${i} "${t}" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.`)
          }
        }
        return !1
      };
      class ce {
        constructor(e, t = "GraphQL request", n = {
          line: 1,
          column: 1
        }) {
          "string" == typeof e || o(!1, `Body must be a string. Received: ${oe(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || o(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || o(!1, "column in locationOffset is 1-indexed and must be positive.")
        }
        get[Symbol.toStringTag]() {
          return "Source"
        }
      }

      function ue(e) {
        return ae(e, ce)
      }

      function le(e, t) {
        const n = new he(e, t),
          i = n.parseDocument();
        return Object.defineProperty(i, "tokenCount", {
          enumerable: !1,
          value: n.tokenCount
        }), i
      }

      function pe(e, t) {
        const n = new he(e, t);
        n.expectToken(A.SOF);
        const i = n.parseValueLiteral(!1);
        return n.expectToken(A.EOF), i
      }

      function de(e, t) {
        const n = new he(e, t);
        n.expectToken(A.SOF);
        const i = n.parseConstValueLiteral();
        return n.expectToken(A.EOF), i
      }

      function fe(e, t) {
        const n = new he(e, t);
        n.expectToken(A.SOF);
        const i = n.parseTypeReference();
        return n.expectToken(A.EOF), i
      }
      class he {
        constructor(e, t = {}) {
          const n = ue(e) ? e : new ce(e);
          this._lexer = new V(n), this._options = t, this._tokenCounter = 0
        }
        get tokenCount() {
          return this._tokenCounter
        }
        parseName() {
          const e = this.expectToken(A.NAME);
          return this.node(e, {
            kind: D.NAME,
            value: e.value
          })
        }
        parseDocument() {
          return this.node(this._lexer.token, {
            kind: D.DOCUMENT,
            definitions: this.many(A.SOF, this.parseDefinition, A.EOF)
          })
        }
        parseDefinition() {
          if (this.peek(A.BRACE_L)) return this.parseOperationDefinition();
          const e = this.peekDescription(),
            t = e ? this._lexer.lookahead() : this._lexer.token;
          if (t.kind === A.NAME) {
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
            if (e) throw E(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
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
          if (this.peek(A.BRACE_L)) return this.node(e, {
            kind: D.OPERATION_DEFINITION,
            operation: b.QUERY,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
          });
          const t = this.parseOperationType();
          let n;
          return this.peek(A.NAME) && (n = this.parseName()), this.node(e, {
            kind: D.OPERATION_DEFINITION,
            operation: t,
            name: n,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseOperationType() {
          const e = this.expectToken(A.NAME);
          switch (e.value) {
            case "query":
              return b.QUERY;
            case "mutation":
              return b.MUTATION;
            case "subscription":
              return b.SUBSCRIPTION
          }
          throw this.unexpected(e)
        }
        parseVariableDefinitions() {
          return this.optionalMany(A.PAREN_L, this.parseVariableDefinition, A.PAREN_R)
        }
        parseVariableDefinition() {
          return this.node(this._lexer.token, {
            kind: D.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(A.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(A.EQUALS) ? this.parseConstValueLiteral() : void 0,
            directives: this.parseConstDirectives()
          })
        }
        parseVariable() {
          const e = this._lexer.token;
          return this.expectToken(A.DOLLAR), this.node(e, {
            kind: D.VARIABLE,
            name: this.parseName()
          })
        }
        parseSelectionSet() {
          return this.node(this._lexer.token, {
            kind: D.SELECTION_SET,
            selections: this.many(A.BRACE_L, this.parseSelection, A.BRACE_R)
          })
        }
        parseSelection() {
          return this.peek(A.SPREAD) ? this.parseFragment() : this.parseField()
        }
        parseField() {
          const e = this._lexer.token,
            t = this.parseName();
          let n, i;
          return this.expectOptionalToken(A.COLON) ? (n = t, i = this.parseName()) : i = t, this.node(e, {
            kind: D.FIELD,
            alias: n,
            name: i,
            arguments: this.parseArguments(!1),
            directives: this.parseDirectives(!1),
            selectionSet: this.peek(A.BRACE_L) ? this.parseSelectionSet() : void 0
          })
        }
        parseArguments(e) {
          const t = e ? this.parseConstArgument : this.parseArgument;
          return this.optionalMany(A.PAREN_L, t, A.PAREN_R)
        }
        parseArgument(e = !1) {
          const t = this._lexer.token,
            n = this.parseName();
          return this.expectToken(A.COLON), this.node(t, {
            kind: D.ARGUMENT,
            name: n,
            value: this.parseValueLiteral(e)
          })
        }
        parseConstArgument() {
          return this.parseArgument(!0)
        }
        parseFragment() {
          const e = this._lexer.token;
          this.expectToken(A.SPREAD);
          const t = this.expectOptionalKeyword("on");
          return !t && this.peek(A.NAME) ? this.node(e, {
            kind: D.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1)
          }) : this.node(e, {
            kind: D.INLINE_FRAGMENT,
            typeCondition: t ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseFragmentDefinition() {
          const e = this._lexer.token;
          return this.expectKeyword("fragment"), !0 === this._options.allowLegacyFragmentVariables ? this.node(e, {
            kind: D.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          }) : this.node(e, {
            kind: D.FRAGMENT_DEFINITION,
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
            case A.BRACKET_L:
              return this.parseList(e);
            case A.BRACE_L:
              return this.parseObject(e);
            case A.INT:
              return this.advanceLexer(), this.node(t, {
                kind: D.INT,
                value: t.value
              });
            case A.FLOAT:
              return this.advanceLexer(), this.node(t, {
                kind: D.FLOAT,
                value: t.value
              });
            case A.STRING:
            case A.BLOCK_STRING:
              return this.parseStringLiteral();
            case A.NAME:
              switch (this.advanceLexer(), t.value) {
                case "true":
                  return this.node(t, {
                    kind: D.BOOLEAN,
                    value: !0
                  });
                case "false":
                  return this.node(t, {
                    kind: D.BOOLEAN,
                    value: !1
                  });
                case "null":
                  return this.node(t, {
                    kind: D.NULL
                  });
                default:
                  return this.node(t, {
                    kind: D.ENUM,
                    value: t.value
                  })
              }
            case A.DOLLAR:
              if (e) {
                if (this.expectToken(A.DOLLAR), this._lexer.token.kind === A.NAME) {
                  const e = this._lexer.token.value;
                  throw E(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`)
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
            kind: D.STRING,
            value: e.value,
            block: e.kind === A.BLOCK_STRING
          })
        }
        parseList(e) {
          return this.node(this._lexer.token, {
            kind: D.LIST,
            values: this.any(A.BRACKET_L, (() => this.parseValueLiteral(e)), A.BRACKET_R)
          })
        }
        parseObject(e) {
          return this.node(this._lexer.token, {
            kind: D.OBJECT,
            fields: this.any(A.BRACE_L, (() => this.parseObjectField(e)), A.BRACE_R)
          })
        }
        parseObjectField(e) {
          const t = this._lexer.token,
            n = this.parseName();
          return this.expectToken(A.COLON), this.node(t, {
            kind: D.OBJECT_FIELD,
            name: n,
            value: this.parseValueLiteral(e)
          })
        }
        parseDirectives(e) {
          const t = [];
          for (; this.peek(A.AT);) t.push(this.parseDirective(e));
          return t
        }
        parseConstDirectives() {
          return this.parseDirectives(!0)
        }
        parseDirective(e) {
          const t = this._lexer.token;
          return this.expectToken(A.AT), this.node(t, {
            kind: D.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(e)
          })
        }
        parseTypeReference() {
          const e = this._lexer.token;
          let t;
          if (this.expectOptionalToken(A.BRACKET_L)) {
            const n = this.parseTypeReference();
            this.expectToken(A.BRACKET_R), t = this.node(e, {
              kind: D.LIST_TYPE,
              type: n
            })
          } else t = this.parseNamedType();
          return this.expectOptionalToken(A.BANG) ? this.node(e, {
            kind: D.NON_NULL_TYPE,
            type: t
          }) : t
        }
        parseNamedType() {
          return this.node(this._lexer.token, {
            kind: D.NAMED_TYPE,
            name: this.parseName()
          })
        }
        peekDescription() {
          return this.peek(A.STRING) || this.peek(A.BLOCK_STRING)
        }
        parseDescription() {
          if (this.peekDescription()) return this.parseStringLiteral()
        }
        parseSchemaDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("schema");
          const n = this.parseConstDirectives(),
            i = this.many(A.BRACE_L, this.parseOperationTypeDefinition, A.BRACE_R);
          return this.node(e, {
            kind: D.SCHEMA_DEFINITION,
            description: t,
            directives: n,
            operationTypes: i
          })
        }
        parseOperationTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseOperationType();
          this.expectToken(A.COLON);
          const n = this.parseNamedType();
          return this.node(e, {
            kind: D.OPERATION_TYPE_DEFINITION,
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
            kind: D.SCALAR_TYPE_DEFINITION,
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
            r = this.parseConstDirectives(),
            o = this.parseFieldsDefinition();
          return this.node(e, {
            kind: D.OBJECT_TYPE_DEFINITION,
            description: t,
            name: n,
            interfaces: i,
            directives: r,
            fields: o
          })
        }
        parseImplementsInterfaces() {
          return this.expectOptionalKeyword("implements") ? this.delimitedMany(A.AMP, this.parseNamedType) : []
        }
        parseFieldsDefinition() {
          return this.optionalMany(A.BRACE_L, this.parseFieldDefinition, A.BRACE_R)
        }
        parseFieldDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseName(),
            i = this.parseArgumentDefs();
          this.expectToken(A.COLON);
          const r = this.parseTypeReference(),
            o = this.parseConstDirectives();
          return this.node(e, {
            kind: D.FIELD_DEFINITION,
            description: t,
            name: n,
            arguments: i,
            type: r,
            directives: o
          })
        }
        parseArgumentDefs() {
          return this.optionalMany(A.PAREN_L, this.parseInputValueDef, A.PAREN_R)
        }
        parseInputValueDef() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseName();
          this.expectToken(A.COLON);
          const i = this.parseTypeReference();
          let r;
          this.expectOptionalToken(A.EQUALS) && (r = this.parseConstValueLiteral());
          const o = this.parseConstDirectives();
          return this.node(e, {
            kind: D.INPUT_VALUE_DEFINITION,
            description: t,
            name: n,
            type: i,
            defaultValue: r,
            directives: o
          })
        }
        parseInterfaceTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("interface");
          const n = this.parseName(),
            i = this.parseImplementsInterfaces(),
            r = this.parseConstDirectives(),
            o = this.parseFieldsDefinition();
          return this.node(e, {
            kind: D.INTERFACE_TYPE_DEFINITION,
            description: t,
            name: n,
            interfaces: i,
            directives: r,
            fields: o
          })
        }
        parseUnionTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("union");
          const n = this.parseName(),
            i = this.parseConstDirectives(),
            r = this.parseUnionMemberTypes();
          return this.node(e, {
            kind: D.UNION_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: i,
            types: r
          })
        }
        parseUnionMemberTypes() {
          return this.expectOptionalToken(A.EQUALS) ? this.delimitedMany(A.PIPE, this.parseNamedType) : []
        }
        parseEnumTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("enum");
          const n = this.parseName(),
            i = this.parseConstDirectives(),
            r = this.parseEnumValuesDefinition();
          return this.node(e, {
            kind: D.ENUM_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: i,
            values: r
          })
        }
        parseEnumValuesDefinition() {
          return this.optionalMany(A.BRACE_L, this.parseEnumValueDefinition, A.BRACE_R)
        }
        parseEnumValueDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseEnumValueName(),
            i = this.parseConstDirectives();
          return this.node(e, {
            kind: D.ENUM_VALUE_DEFINITION,
            description: t,
            name: n,
            directives: i
          })
        }
        parseEnumValueName() {
          if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value) throw E(this._lexer.source, this._lexer.token.start, `${me(this._lexer.token)} is reserved and cannot be used for an enum value.`);
          return this.parseName()
        }
        parseInputObjectTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("input");
          const n = this.parseName(),
            i = this.parseConstDirectives(),
            r = this.parseInputFieldsDefinition();
          return this.node(e, {
            kind: D.INPUT_OBJECT_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: i,
            fields: r
          })
        }
        parseInputFieldsDefinition() {
          return this.optionalMany(A.BRACE_L, this.parseInputValueDef, A.BRACE_R)
        }
        parseTypeSystemExtension() {
          const e = this._lexer.lookahead();
          if (e.kind === A.NAME) switch (e.value) {
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
            n = this.optionalMany(A.BRACE_L, this.parseOperationTypeDefinition, A.BRACE_R);
          if (0 === t.length && 0 === n.length) throw this.unexpected();
          return this.node(e, {
            kind: D.SCHEMA_EXTENSION,
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
            kind: D.SCALAR_TYPE_EXTENSION,
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
            r = this.parseFieldsDefinition();
          if (0 === n.length && 0 === i.length && 0 === r.length) throw this.unexpected();
          return this.node(e, {
            kind: D.OBJECT_TYPE_EXTENSION,
            name: t,
            interfaces: n,
            directives: i,
            fields: r
          })
        }
        parseInterfaceTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("interface");
          const t = this.parseName(),
            n = this.parseImplementsInterfaces(),
            i = this.parseConstDirectives(),
            r = this.parseFieldsDefinition();
          if (0 === n.length && 0 === i.length && 0 === r.length) throw this.unexpected();
          return this.node(e, {
            kind: D.INTERFACE_TYPE_EXTENSION,
            name: t,
            interfaces: n,
            directives: i,
            fields: r
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
            kind: D.UNION_TYPE_EXTENSION,
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
            kind: D.ENUM_TYPE_EXTENSION,
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
            kind: D.INPUT_OBJECT_TYPE_EXTENSION,
            name: t,
            directives: n,
            fields: i
          })
        }
        parseDirectiveDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("directive"), this.expectToken(A.AT);
          const n = this.parseName(),
            i = this.parseArgumentDefs(),
            r = this.expectOptionalKeyword("repeatable");
          this.expectKeyword("on");
          const o = this.parseDirectiveLocations();
          return this.node(e, {
            kind: D.DIRECTIVE_DEFINITION,
            description: t,
            name: n,
            arguments: i,
            repeatable: r,
            locations: o
          })
        }
        parseDirectiveLocations() {
          return this.delimitedMany(A.PIPE, this.parseDirectiveLocation)
        }
        parseDirectiveLocation() {
          const e = this._lexer.token,
            t = this.parseName();
          if (Object.prototype.hasOwnProperty.call(O, t.value)) return t;
          throw this.unexpected(e)
        }
        node(e, t) {
          return !0 !== this._options.noLocation && (t.loc = new T(e, this._lexer.lastToken, this._lexer.source)), t
        }
        peek(e) {
          return this._lexer.token.kind === e
        }
        expectToken(e) {
          const t = this._lexer.token;
          if (t.kind === e) return this.advanceLexer(), t;
          throw E(this._lexer.source, t.start, `Expected ${ye(e)}, found ${me(t)}.`)
        }
        expectOptionalToken(e) {
          return this._lexer.token.kind === e && (this.advanceLexer(), !0)
        }
        expectKeyword(e) {
          const t = this._lexer.token;
          if (t.kind !== A.NAME || t.value !== e) throw E(this._lexer.source, t.start, `Expected "${e}", found ${me(t)}.`);
          this.advanceLexer()
        }
        expectOptionalKeyword(e) {
          const t = this._lexer.token;
          return t.kind === A.NAME && t.value === e && (this.advanceLexer(), !0)
        }
        unexpected(e) {
          const t = null != e ? e : this._lexer.token;
          return E(this._lexer.source, t.start, `Unexpected ${me(t)}.`)
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
          if (t.kind !== A.EOF && (++this._tokenCounter, void 0 !== e && this._tokenCounter > e)) throw E(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`)
        }
      }

      function me(e) {
        const t = e.value;
        return ye(e.kind) + (null != t ? ` "${t}"` : "")
      }

      function ye(e) {
        return U(e) ? `"${e}"` : e
      }
      const ve = 5;

      function Ee(e, t) {
        const [n, i] = t ? [e, t] : [void 0, e];
        let r = " Did you mean ";
        n && (r += n + " ");
        const o = i.map((e => `"${e}"`));
        switch (o.length) {
          case 0:
            return "";
          case 1:
            return r + o[0] + "?";
          case 2:
            return r + o[0] + " or " + o[1] + "?"
        }
        const s = o.slice(0, ve),
          a = s.pop();
        return r + s.join(", ") + ", or " + a + "?"
      }

      function Te(e) {
        return e
      }

      function Ne(e, t) {
        const n = Object.create(null);
        for (const i of e) n[t(i)] = i;
        return n
      }

      function ge(e, t, n) {
        const i = Object.create(null);
        for (const r of e) i[t(r)] = n(r);
        return i
      }

      function Ie(e, t) {
        const n = Object.create(null);
        for (const i of Object.keys(e)) n[i] = t(e[i], i);
        return n
      }

      function _e(e, t) {
        let n = 0,
          i = 0;
        for (; n < e.length && i < t.length;) {
          let r = e.charCodeAt(n),
            o = t.charCodeAt(i);
          if (De(r) && De(o)) {
            let s = 0;
            do {
              ++n, s = 10 * s + r - be, r = e.charCodeAt(n)
            } while (De(r) && s > 0);
            let a = 0;
            do {
              ++i, a = 10 * a + o - be, o = t.charCodeAt(i)
            } while (De(o) && a > 0);
            if (s < a) return -1;
            if (s > a) return 1
          } else {
            if (r < o) return -1;
            if (r > o) return 1;
            ++n, ++i
          }
        }
        return e.length - t.length
      }
      const be = 48,
        Oe = 57;

      function De(e) {
        return !isNaN(e) && be <= e && e <= Oe
      }

      function Ae(e, t) {
        const n = Object.create(null),
          i = new Se(e),
          r = Math.floor(.4 * e.length) + 1;
        for (const e of t) {
          const t = i.measure(e, r);
          void 0 !== t && (n[e] = t)
        }
        return Object.keys(n).sort(((e, t) => {
          const i = n[e] - n[t];
          return 0 !== i ? i : _e(e, t)
        }))
      }
      class Se {
        constructor(e) {
          this._input = e, this._inputLowerCase = e.toLowerCase(), this._inputArray = we(this._inputLowerCase), this._rows = [new Array(e.length + 1).fill(0), new Array(e.length + 1).fill(0), new Array(e.length + 1).fill(0)]
        }
        measure(e, t) {
          if (this._input === e) return 0;
          const n = e.toLowerCase();
          if (this._inputLowerCase === n) return 1;
          let i = we(n),
            r = this._inputArray;
          if (i.length < r.length) {
            const e = i;
            i = r, r = e
          }
          const o = i.length,
            s = r.length;
          if (o - s > t) return;
          const a = this._rows;
          for (let e = 0; e <= s; e++) a[0][e] = e;
          for (let e = 1; e <= o; e++) {
            const n = a[(e - 1) % 3],
              o = a[e % 3];
            let c = o[0] = e;
            for (let t = 1; t <= s; t++) {
              const s = i[e - 1] === r[t - 1] ? 0 : 1;
              let u = Math.min(n[t] + 1, o[t - 1] + 1, n[t - 1] + s);
              if (e > 1 && t > 1 && i[e - 1] === r[t - 2] && i[e - 2] === r[t - 1]) {
                const n = a[(e - 2) % 3][t - 2];
                u = Math.min(u, n + 1)
              }
              u < c && (c = u), o[t] = u
            }
            if (c > t) return
          }
          const c = a[o % 3][s];
          return c <= t ? c : void 0
        }
      }

      function we(e) {
        const t = e.length,
          n = new Array(t);
        for (let i = 0; i < t; ++i) n[i] = e.charCodeAt(i);
        return n
      }

      function Re(e) {
        if (null == e) return Object.create(null);
        if (null === Object.getPrototypeOf(e)) return e;
        const t = Object.create(null);
        for (const [n, i] of Object.entries(e)) t[n] = i;
        return t
      }
      const Le = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

      function ke(e) {
        return $e[e.charCodeAt(0)]
      }
      const $e = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"],
        xe = Object.freeze({});

      function Fe(e, t, n = g) {
        const i = new Map;
        for (const e of Object.values(D)) i.set(e, Ve(t, e));
        let r, s, a, c = Array.isArray(e),
          u = [e],
          l = -1,
          p = [],
          d = e;
        const f = [],
          h = [];
        do {
          l++;
          const e = l === u.length,
            E = e && 0 !== p.length;
          if (e) {
            if (s = 0 === h.length ? void 0 : f[f.length - 1], d = a, a = h.pop(), E)
              if (c) {
                d = d.slice();
                let e = 0;
                for (const [t, n] of p) {
                  const i = t - e;
                  null === n ? (d.splice(i, 1), e++) : d[i] = n
                }
              } else {
                d = {
                  ...d
                };
                for (const [e, t] of p) d[e] = t
              } l = r.index, u = r.keys, p = r.edits, c = r.inArray, r = r.prev
          } else if (a) {
            if (s = c ? l : u[l], d = a[s], null == d) continue;
            f.push(s)
          }
          let T;
          if (!Array.isArray(d)) {
            var m, y;
            _(d) || o(!1, `Invalid AST Node: ${oe(d)}.`);
            const n = e ? null === (m = i.get(d.kind)) || void 0 === m ? void 0 : m.leave : null === (y = i.get(d.kind)) || void 0 === y ? void 0 : y.enter;
            if (T = null == n ? void 0 : n.call(t, d, s, a, f, h), T === xe) break;
            if (!1 === T) {
              if (!e) {
                f.pop();
                continue
              }
            } else if (void 0 !== T && (p.push([s, T]), !e)) {
              if (!_(T)) {
                f.pop();
                continue
              }
              d = T
            }
          }
          var v;
          void 0 === T && E && p.push([s, d]), e ? f.pop() : (r = {
            inArray: c,
            index: l,
            keys: u,
            edits: p,
            prev: r
          }, c = Array.isArray(d), u = c ? d : null !== (v = n[d.kind]) && void 0 !== v ? v : [], l = -1, p = [], a && h.push(a), a = d)
        } while (void 0 !== r);
        return 0 !== p.length ? p[p.length - 1][1] : e
      }

      function Ce(e) {
        const t = new Array(e.length).fill(null),
          n = Object.create(null);
        for (const i of Object.values(D)) {
          let r = !1;
          const o = new Array(e.length).fill(void 0),
            s = new Array(e.length).fill(void 0);
          for (let t = 0; t < e.length; ++t) {
            const {
              enter: n,
              leave: a
            } = Ve(e[t], i);
            r || (r = null != n || null != a), o[t] = n, s[t] = a
          }
          if (!r) continue;
          const a = {
            enter(...n) {
              const i = n[0];
              for (let s = 0; s < e.length; s++)
                if (null === t[s]) {
                  var r;
                  const a = null === (r = o[s]) || void 0 === r ? void 0 : r.apply(e[s], n);
                  if (!1 === a) t[s] = i;
                  else if (a === xe) t[s] = xe;
                  else if (void 0 !== a) return a
                }
            },
            leave(...n) {
              const i = n[0];
              for (let o = 0; o < e.length; o++)
                if (null === t[o]) {
                  var r;
                  const i = null === (r = s[o]) || void 0 === r ? void 0 : r.apply(e[o], n);
                  if (i === xe) t[o] = xe;
                  else if (void 0 !== i && !1 !== i) return i
                } else t[o] === i && (t[o] = null)
            }
          };
          n[i] = a
        }
        return n
      }

      function Ve(e, t) {
        const n = e[t];
        return "object" == typeof n ? n : "function" == typeof n ? {
          enter: n,
          leave: void 0
        } : {
          enter: e.enter,
          leave: e.leave
        }
      }

      function Ue(e, t, n) {
        const {
          enter: i,
          leave: r
        } = Ve(e, t);
        return n ? r : i
      }

      function Me(e) {
        return Fe(e, je)
      }
      const je = {
        Name: {
          leave: e => e.value
        },
        Variable: {
          leave: e => "$" + e.name
        },
        Document: {
          leave: e => Pe(e.definitions, "\n\n")
        },
        OperationDefinition: {
          leave(e) {
            const t = Ge("(", Pe(e.variableDefinitions, ", "), ")"),
              n = Pe([e.operation, Pe([e.name, t]), Pe(e.directives, " ")], " ");
            return ("query" === n ? "" : n + " ") + e.selectionSet
          }
        },
        VariableDefinition: {
          leave: ({
            variable: e,
            type: t,
            defaultValue: n,
            directives: i
          }) => e + ": " + t + Ge(" = ", n) + Ge(" ", Pe(i, " "))
        },
        SelectionSet: {
          leave: ({
            selections: e
          }) => Be(e)
        },
        Field: {
          leave({
            alias: e,
            name: t,
            arguments: n,
            directives: i,
            selectionSet: r
          }) {
            const o = Ge("", e, ": ") + t;
            let s = o + Ge("(", Pe(n, ", "), ")");
            return s.length > 80 && (s = o + Ge("(\n", Ye(Pe(n, "\n")), "\n)")), Pe([s, Pe(i, " "), r], " ")
          }
        },
        Argument: {
          leave: ({
            name: e,
            value: t
          }) => e + ": " + t
        },
        FragmentSpread: {
          leave: ({
            name: e,
            directives: t
          }) => "..." + e + Ge(" ", Pe(t, " "))
        },
        InlineFragment: {
          leave: ({
            typeCondition: e,
            directives: t,
            selectionSet: n
          }) => Pe(["...", Ge("on ", e), Pe(t, " "), n], " ")
        },
        FragmentDefinition: {
          leave: ({
            name: e,
            typeCondition: t,
            variableDefinitions: n,
            directives: i,
            selectionSet: r
          }) => `fragment ${e}${Ge("(",Pe(n,", "),")")} on ${t} ${Ge("",Pe(i," ")," ")}` + r
        },
        IntValue: {
          leave: ({
            value: e
          }) => e
        },
        FloatValue: {
          leave: ({
            value: e
          }) => e
        },
        StringValue: {
          leave: ({
            value: e,
            block: t
          }) => t ? C(e) : `"${e.replace(Le,ke)}"`
        },
        BooleanValue: {
          leave: ({
            value: e
          }) => e ? "true" : "false"
        },
        NullValue: {
          leave: () => "null"
        },
        EnumValue: {
          leave: ({
            value: e
          }) => e
        },
        ListValue: {
          leave: ({
            values: e
          }) => "[" + Pe(e, ", ") + "]"
        },
        ObjectValue: {
          leave: ({
            fields: e
          }) => "{" + Pe(e, ", ") + "}"
        },
        ObjectField: {
          leave: ({
            name: e,
            value: t
          }) => e + ": " + t
        },
        Directive: {
          leave: ({
            name: e,
            arguments: t
          }) => "@" + e + Ge("(", Pe(t, ", "), ")")
        },
        NamedType: {
          leave: ({
            name: e
          }) => e
        },
        ListType: {
          leave: ({
            type: e
          }) => "[" + e + "]"
        },
        NonNullType: {
          leave: ({
            type: e
          }) => e + "!"
        },
        SchemaDefinition: {
          leave: ({
            description: e,
            directives: t,
            operationTypes: n
          }) => Ge("", e, "\n") + Pe(["schema", Pe(t, " "), Be(n)], " ")
        },
        OperationTypeDefinition: {
          leave: ({
            operation: e,
            type: t
          }) => e + ": " + t
        },
        ScalarTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n
          }) => Ge("", e, "\n") + Pe(["scalar", t, Pe(n, " ")], " ")
        },
        ObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: n,
            directives: i,
            fields: r
          }) => Ge("", e, "\n") + Pe(["type", t, Ge("implements ", Pe(n, " & ")), Pe(i, " "), Be(r)], " ")
        },
        FieldDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: n,
            type: i,
            directives: r
          }) => Ge("", e, "\n") + t + (Qe(n) ? Ge("(\n", Ye(Pe(n, "\n")), "\n)") : Ge("(", Pe(n, ", "), ")")) + ": " + i + Ge(" ", Pe(r, " "))
        },
        InputValueDefinition: {
          leave: ({
            description: e,
            name: t,
            type: n,
            defaultValue: i,
            directives: r
          }) => Ge("", e, "\n") + Pe([t + ": " + n, Ge("= ", i), Pe(r, " ")], " ")
        },
        InterfaceTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: n,
            directives: i,
            fields: r
          }) => Ge("", e, "\n") + Pe(["interface", t, Ge("implements ", Pe(n, " & ")), Pe(i, " "), Be(r)], " ")
        },
        UnionTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n,
            types: i
          }) => Ge("", e, "\n") + Pe(["union", t, Pe(n, " "), Ge("= ", Pe(i, " | "))], " ")
        },
        EnumTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n,
            values: i
          }) => Ge("", e, "\n") + Pe(["enum", t, Pe(n, " "), Be(i)], " ")
        },
        EnumValueDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n
          }) => Ge("", e, "\n") + Pe([t, Pe(n, " ")], " ")
        },
        InputObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n,
            fields: i
          }) => Ge("", e, "\n") + Pe(["input", t, Pe(n, " "), Be(i)], " ")
        },
        DirectiveDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: n,
            repeatable: i,
            locations: r
          }) => Ge("", e, "\n") + "directive @" + t + (Qe(n) ? Ge("(\n", Ye(Pe(n, "\n")), "\n)") : Ge("(", Pe(n, ", "), ")")) + (i ? " repeatable" : "") + " on " + Pe(r, " | ")
        },
        SchemaExtension: {
          leave: ({
            directives: e,
            operationTypes: t
          }) => Pe(["extend schema", Pe(e, " "), Be(t)], " ")
        },
        ScalarTypeExtension: {
          leave: ({
            name: e,
            directives: t
          }) => Pe(["extend scalar", e, Pe(t, " ")], " ")
        },
        ObjectTypeExtension: {
          leave: ({
            name: e,
            interfaces: t,
            directives: n,
            fields: i
          }) => Pe(["extend type", e, Ge("implements ", Pe(t, " & ")), Pe(n, " "), Be(i)], " ")
        },
        InterfaceTypeExtension: {
          leave: ({
            name: e,
            interfaces: t,
            directives: n,
            fields: i
          }) => Pe(["extend interface", e, Ge("implements ", Pe(t, " & ")), Pe(n, " "), Be(i)], " ")
        },
        UnionTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            types: n
          }) => Pe(["extend union", e, Pe(t, " "), Ge("= ", Pe(n, " | "))], " ")
        },
        EnumTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            values: n
          }) => Pe(["extend enum", e, Pe(t, " "), Be(n)], " ")
        },
        InputObjectTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            fields: n
          }) => Pe(["extend input", e, Pe(t, " "), Be(n)], " ")
        }
      };

      function Pe(e, t = "") {
        var n;
        return null !== (n = null == e ? void 0 : e.filter((e => e)).join(t)) && void 0 !== n ? n : ""
      }

      function Be(e) {
        return Ge("{\n", Ye(Pe(e, "\n")), "\n}")
      }

      function Ge(e, t, n = "") {
        return null != t && "" !== t ? e + t + n : ""
      }

      function Ye(e) {
        return Ge("  ", e.replace(/\n/g, "\n  "))
      }

      function Qe(e) {
        var t;
        return null !== (t = null == e ? void 0 : e.some((e => e.includes("\n")))) && void 0 !== t && t
      }

      function qe(e, t) {
        switch (e.kind) {
          case D.NULL:
            return null;
          case D.INT:
            return parseInt(e.value, 10);
          case D.FLOAT:
            return parseFloat(e.value);
          case D.STRING:
          case D.ENUM:
          case D.BOOLEAN:
            return e.value;
          case D.LIST:
            return e.values.map((e => qe(e, t)));
          case D.OBJECT:
            return ge(e.fields, (e => e.name.value), (e => qe(e.value, t)));
          case D.VARIABLE:
            return null == t ? void 0 : t[e.name.value]
        }
      }

      function Je(e) {
        if (null != e || o(!1, "Must provide name."), "string" == typeof e || o(!1, "Expected name to be a string."), 0 === e.length) throw new h("Expected name to be a non-empty string.");
        for (let t = 1; t < e.length; ++t)
          if (!k(e.charCodeAt(t))) throw new h(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);
        if (!L(e.charCodeAt(0))) throw new h(`Names must start with [_a-zA-Z] but "${e}" does not.`);
        return e
      }

      function Ke(e) {
        if ("true" === e || "false" === e || "null" === e) throw new h(`Enum values cannot be named: ${e}`);
        return Je(e)
      }

      function Xe(e) {
        return He(e) || Ze(e) || tt(e) || it(e) || ot(e) || at(e) || ut(e) || pt(e)
      }

      function ze(e) {
        if (!Xe(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL type.`);
        return e
      }

      function He(e) {
        return ae(e, Ft)
      }

      function We(e) {
        if (!He(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL Scalar type.`);
        return e
      }

      function Ze(e) {
        return ae(e, Ct)
      }

      function et(e) {
        if (!Ze(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL Object type.`);
        return e
      }

      function tt(e) {
        return ae(e, Yt)
      }

      function nt(e) {
        if (!tt(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL Interface type.`);
        return e
      }

      function it(e) {
        return ae(e, Qt)
      }

      function rt(e) {
        if (!it(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL Union type.`);
        return e
      }

      function ot(e) {
        return ae(e, Jt)
      }

      function st(e) {
        if (!ot(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL Enum type.`);
        return e
      }

      function at(e) {
        return ae(e, zt)
      }

      function ct(e) {
        if (!at(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL Input Object type.`);
        return e
      }

      function ut(e) {
        return ae(e, _t)
      }

      function lt(e) {
        if (!ut(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL List type.`);
        return e
      }

      function pt(e) {
        return ae(e, bt)
      }

      function dt(e) {
        if (!pt(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL Non-Null type.`);
        return e
      }

      function ft(e) {
        return He(e) || ot(e) || at(e) || Ot(e) && ft(e.ofType)
      }

      function ht(e) {
        if (!ft(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL input type.`);
        return e
      }

      function mt(e) {
        return He(e) || Ze(e) || tt(e) || it(e) || ot(e) || Ot(e) && mt(e.ofType)
      }

      function yt(e) {
        if (!mt(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL output type.`);
        return e
      }

      function vt(e) {
        return He(e) || ot(e)
      }

      function Et(e) {
        if (!vt(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL leaf type.`);
        return e
      }

      function Tt(e) {
        return Ze(e) || tt(e) || it(e)
      }

      function Nt(e) {
        if (!Tt(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL composite type.`);
        return e
      }

      function gt(e) {
        return tt(e) || it(e)
      }

      function It(e) {
        if (!gt(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL abstract type.`);
        return e
      }
      class _t {
        constructor(e) {
          Xe(e) || o(!1, `Expected ${oe(e)} to be a GraphQL type.`), this.ofType = e
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
      class bt {
        constructor(e) {
          At(e) || o(!1, `Expected ${oe(e)} to be a GraphQL nullable type.`), this.ofType = e
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

      function Ot(e) {
        return ut(e) || pt(e)
      }

      function Dt(e) {
        if (!Ot(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL wrapping type.`);
        return e
      }

      function At(e) {
        return Xe(e) && !pt(e)
      }

      function St(e) {
        if (!At(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL nullable type.`);
        return e
      }

      function wt(e) {
        if (e) return pt(e) ? e.ofType : e
      }

      function Rt(e) {
        return He(e) || Ze(e) || tt(e) || it(e) || ot(e) || at(e)
      }

      function Lt(e) {
        if (!Rt(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL named type.`);
        return e
      }

      function kt(e) {
        if (e) {
          let t = e;
          for (; Ot(t);) t = t.ofType;
          return t
        }
      }

      function $t(e) {
        return "function" == typeof e ? e() : e
      }

      function xt(e) {
        return "function" == typeof e ? e() : e
      }
      class Ft {
        constructor(e) {
          var t, n, i, r;
          const s = null !== (t = e.parseValue) && void 0 !== t ? t : Te;
          this.name = Je(e.name), this.description = e.description, this.specifiedByURL = e.specifiedByURL, this.serialize = null !== (n = e.serialize) && void 0 !== n ? n : Te, this.parseValue = s, this.parseLiteral = null !== (i = e.parseLiteral) && void 0 !== i ? i : (e, t) => s(qe(e, t)), this.extensions = Re(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (r = e.extensionASTNodes) && void 0 !== r ? r : [], null == e.specifiedByURL || "string" == typeof e.specifiedByURL || o(!1, `${this.name} must provide "specifiedByURL" as a string, but got: ${oe(e.specifiedByURL)}.`), null == e.serialize || "function" == typeof e.serialize || o(!1, `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`), e.parseLiteral && ("function" == typeof e.parseValue && "function" == typeof e.parseLiteral || o(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`))
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
      class Ct {
        constructor(e) {
          var t;
          this.name = Je(e.name), this.description = e.description, this.isTypeOf = e.isTypeOf, this.extensions = Re(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._fields = () => Ut(e), this._interfaces = () => Vt(e), null == e.isTypeOf || "function" == typeof e.isTypeOf || o(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${oe(e.isTypeOf)}.`)
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
            fields: Pt(this.getFields()),
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

      function Vt(e) {
        var t;
        const n = $t(null !== (t = e.interfaces) && void 0 !== t ? t : []);
        return Array.isArray(n) || o(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`), n
      }

      function Ut(e) {
        const t = xt(e.fields);
        return jt(t) || o(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), Ie(t, ((t, n) => {
          var i;
          jt(t) || o(!1, `${e.name}.${n} field config must be an object.`), null == t.resolve || "function" == typeof t.resolve || o(!1, `${e.name}.${n} field resolver must be a function if provided, but got: ${oe(t.resolve)}.`);
          const r = null !== (i = t.args) && void 0 !== i ? i : {};
          return jt(r) || o(!1, `${e.name}.${n} args must be an object with argument names as keys.`), {
            name: Je(n),
            description: t.description,
            type: t.type,
            args: Mt(r),
            resolve: t.resolve,
            subscribe: t.subscribe,
            deprecationReason: t.deprecationReason,
            extensions: Re(t.extensions),
            astNode: t.astNode
          }
        }))
      }

      function Mt(e) {
        return Object.entries(e).map((([e, t]) => ({
          name: Je(e),
          description: t.description,
          type: t.type,
          defaultValue: t.defaultValue,
          deprecationReason: t.deprecationReason,
          extensions: Re(t.extensions),
          astNode: t.astNode
        })))
      }

      function jt(e) {
        return a(e) && !Array.isArray(e)
      }

      function Pt(e) {
        return Ie(e, (e => ({
          description: e.description,
          type: e.type,
          args: Bt(e.args),
          resolve: e.resolve,
          subscribe: e.subscribe,
          deprecationReason: e.deprecationReason,
          extensions: e.extensions,
          astNode: e.astNode
        })))
      }

      function Bt(e) {
        return ge(e, (e => e.name), (e => ({
          description: e.description,
          type: e.type,
          defaultValue: e.defaultValue,
          deprecationReason: e.deprecationReason,
          extensions: e.extensions,
          astNode: e.astNode
        })))
      }

      function Gt(e) {
        return pt(e.type) && void 0 === e.defaultValue
      }
      class Yt {
        constructor(e) {
          var t;
          this.name = Je(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = Re(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._fields = Ut.bind(void 0, e), this._interfaces = Vt.bind(void 0, e), null == e.resolveType || "function" == typeof e.resolveType || o(!1, `${this.name} must provide "resolveType" as a function, but got: ${oe(e.resolveType)}.`)
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
            fields: Pt(this.getFields()),
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
      class Qt {
        constructor(e) {
          var t;
          this.name = Je(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = Re(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._types = qt.bind(void 0, e), null == e.resolveType || "function" == typeof e.resolveType || o(!1, `${this.name} must provide "resolveType" as a function, but got: ${oe(e.resolveType)}.`)
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

      function qt(e) {
        const t = $t(e.types);
        return Array.isArray(t) || o(!1, `Must provide Array of types or a function which returns such an array for Union ${e.name}.`), t
      }
      class Jt {
        constructor(e) {
          var t;
          this.name = Je(e.name), this.description = e.description, this.extensions = Re(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._values = "function" == typeof e.values ? e.values : Xt(this.name, e.values), this._valueLookup = null, this._nameLookup = null
        }
        get[Symbol.toStringTag]() {
          return "GraphQLEnumType"
        }
        getValues() {
          return "function" == typeof this._values && (this._values = Xt(this.name, this._values())), this._values
        }
        getValue(e) {
          return null === this._nameLookup && (this._nameLookup = Ne(this.getValues(), (e => e.name))), this._nameLookup[e]
        }
        serialize(e) {
          null === this._valueLookup && (this._valueLookup = new Map(this.getValues().map((e => [e.value, e]))));
          const t = this._valueLookup.get(e);
          if (void 0 === t) throw new h(`Enum "${this.name}" cannot represent value: ${oe(e)}`);
          return t.name
        }
        parseValue(e) {
          if ("string" != typeof e) {
            const t = oe(e);
            throw new h(`Enum "${this.name}" cannot represent non-string value: ${t}.` + Kt(this, t))
          }
          const t = this.getValue(e);
          if (null == t) throw new h(`Value "${e}" does not exist in "${this.name}" enum.` + Kt(this, e));
          return t.value
        }
        parseLiteral(e, t) {
          if (e.kind !== D.ENUM) {
            const t = Me(e);
            throw new h(`Enum "${this.name}" cannot represent non-enum value: ${t}.` + Kt(this, t), {
              nodes: e
            })
          }
          const n = this.getValue(e.value);
          if (null == n) {
            const t = Me(e);
            throw new h(`Value "${t}" does not exist in "${this.name}" enum.` + Kt(this, t), {
              nodes: e
            })
          }
          return n.value
        }
        toConfig() {
          const e = ge(this.getValues(), (e => e.name), (e => ({
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

      function Kt(e, t) {
        return Ee("the enum value", Ae(t, e.getValues().map((e => e.name))))
      }

      function Xt(e, t) {
        return jt(t) || o(!1, `${e} values must be an object with value names as keys.`), Object.entries(t).map((([t, n]) => (jt(n) || o(!1, `${e}.${t} must refer to an object with a "value" key representing an internal value but got: ${oe(n)}.`), {
          name: Ke(t),
          description: n.description,
          value: void 0 !== n.value ? n.value : t,
          deprecationReason: n.deprecationReason,
          extensions: Re(n.extensions),
          astNode: n.astNode
        })))
      }
      class zt {
        constructor(e) {
          var t, n;
          this.name = Je(e.name), this.description = e.description, this.extensions = Re(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this.isOneOf = null !== (n = e.isOneOf) && void 0 !== n && n, this._fields = Ht.bind(void 0, e)
        }
        get[Symbol.toStringTag]() {
          return "GraphQLInputObjectType"
        }
        getFields() {
          return "function" == typeof this._fields && (this._fields = this._fields()), this._fields
        }
        toConfig() {
          const e = Ie(this.getFields(), (e => ({
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
            extensionASTNodes: this.extensionASTNodes,
            isOneOf: this.isOneOf
          }
        }
        toString() {
          return this.name
        }
        toJSON() {
          return this.toString()
        }
      }

      function Ht(e) {
        const t = xt(e.fields);
        return jt(t) || o(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), Ie(t, ((t, n) => (!("resolve" in t) || o(!1, `${e.name}.${n} field has a resolve property, but Input Types cannot define resolvers.`), {
          name: Je(n),
          description: t.description,
          type: t.type,
          defaultValue: t.defaultValue,
          deprecationReason: t.deprecationReason,
          extensions: Re(t.extensions),
          astNode: t.astNode
        })))
      }

      function Wt(e) {
        return pt(e.type) && void 0 === e.defaultValue
      }

      function Zt(e, t) {
        return e === t || (pt(e) && pt(t) || !(!ut(e) || !ut(t))) && Zt(e.ofType, t.ofType)
      }

      function en(e, t, n) {
        return t === n || (pt(n) ? !!pt(t) && en(e, t.ofType, n.ofType) : pt(t) ? en(e, t.ofType, n) : ut(n) ? !!ut(t) && en(e, t.ofType, n.ofType) : !ut(t) && gt(n) && (tt(t) || Ze(t)) && e.isSubType(n, t))
      }

      function tn(e, t, n) {
        return t === n || (gt(t) ? gt(n) ? e.getPossibleTypes(t).some((t => e.isSubType(n, t))) : e.isSubType(t, n) : !!gt(n) && e.isSubType(n, t))
      }
      const nn = 2147483647,
        rn = -2147483648,
        on = new Ft({
          name: "Int",
          description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
          serialize(e) {
            const t = dn(e);
            if ("boolean" == typeof t) return t ? 1 : 0;
            let n = t;
            if ("string" == typeof t && "" !== t && (n = Number(t)), "number" != typeof n || !Number.isInteger(n)) throw new h(`Int cannot represent non-integer value: ${oe(t)}`);
            if (n > nn || n < rn) throw new h("Int cannot represent non 32-bit signed integer value: " + oe(t));
            return n
          },
          parseValue(e) {
            if ("number" != typeof e || !Number.isInteger(e)) throw new h(`Int cannot represent non-integer value: ${oe(e)}`);
            if (e > nn || e < rn) throw new h(`Int cannot represent non 32-bit signed integer value: ${e}`);
            return e
          },
          parseLiteral(e) {
            if (e.kind !== D.INT) throw new h(`Int cannot represent non-integer value: ${Me(e)}`, {
              nodes: e
            });
            const t = parseInt(e.value, 10);
            if (t > nn || t < rn) throw new h(`Int cannot represent non 32-bit signed integer value: ${e.value}`, {
              nodes: e
            });
            return t
          }
        }),
        sn = new Ft({
          name: "Float",
          description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
          serialize(e) {
            const t = dn(e);
            if ("boolean" == typeof t) return t ? 1 : 0;
            let n = t;
            if ("string" == typeof t && "" !== t && (n = Number(t)), "number" != typeof n || !Number.isFinite(n)) throw new h(`Float cannot represent non numeric value: ${oe(t)}`);
            return n
          },
          parseValue(e) {
            if ("number" != typeof e || !Number.isFinite(e)) throw new h(`Float cannot represent non numeric value: ${oe(e)}`);
            return e
          },
          parseLiteral(e) {
            if (e.kind !== D.FLOAT && e.kind !== D.INT) throw new h(`Float cannot represent non numeric value: ${Me(e)}`, e);
            return parseFloat(e.value)
          }
        }),
        an = new Ft({
          name: "String",
          description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
          serialize(e) {
            const t = dn(e);
            if ("string" == typeof t) return t;
            if ("boolean" == typeof t) return t ? "true" : "false";
            if ("number" == typeof t && Number.isFinite(t)) return t.toString();
            throw new h(`String cannot represent value: ${oe(e)}`)
          },
          parseValue(e) {
            if ("string" != typeof e) throw new h(`String cannot represent a non string value: ${oe(e)}`);
            return e
          },
          parseLiteral(e) {
            if (e.kind !== D.STRING) throw new h(`String cannot represent a non string value: ${Me(e)}`, {
              nodes: e
            });
            return e.value
          }
        }),
        cn = new Ft({
          name: "Boolean",
          description: "The `Boolean` scalar type represents `true` or `false`.",
          serialize(e) {
            const t = dn(e);
            if ("boolean" == typeof t) return t;
            if (Number.isFinite(t)) return 0 !== t;
            throw new h(`Boolean cannot represent a non boolean value: ${oe(t)}`)
          },
          parseValue(e) {
            if ("boolean" != typeof e) throw new h(`Boolean cannot represent a non boolean value: ${oe(e)}`);
            return e
          },
          parseLiteral(e) {
            if (e.kind !== D.BOOLEAN) throw new h(`Boolean cannot represent a non boolean value: ${Me(e)}`, {
              nodes: e
            });
            return e.value
          }
        }),
        un = new Ft({
          name: "ID",
          description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
          serialize(e) {
            const t = dn(e);
            if ("string" == typeof t) return t;
            if (Number.isInteger(t)) return String(t);
            throw new h(`ID cannot represent value: ${oe(e)}`)
          },
          parseValue(e) {
            if ("string" == typeof e) return e;
            if ("number" == typeof e && Number.isInteger(e)) return e.toString();
            throw new h(`ID cannot represent value: ${oe(e)}`)
          },
          parseLiteral(e) {
            if (e.kind !== D.STRING && e.kind !== D.INT) throw new h("ID cannot represent a non-string and non-integer value: " + Me(e), {
              nodes: e
            });
            return e.value
          }
        }),
        ln = Object.freeze([an, on, sn, cn, un]);

      function pn(e) {
        return ln.some((({
          name: t
        }) => e.name === t))
      }

      function dn(e) {
        if (a(e)) {
          if ("function" == typeof e.valueOf) {
            const t = e.valueOf();
            if (!a(t)) return t
          }
          if ("function" == typeof e.toJSON) return e.toJSON()
        }
        return e
      }

      function fn(e) {
        return ae(e, mn)
      }

      function hn(e) {
        if (!fn(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL directive.`);
        return e
      }
      class mn {
        constructor(e) {
          var t, n;
          this.name = Je(e.name), this.description = e.description, this.locations = e.locations, this.isRepeatable = null !== (t = e.isRepeatable) && void 0 !== t && t, this.extensions = Re(e.extensions), this.astNode = e.astNode, Array.isArray(e.locations) || o(!1, `@${e.name} locations must be an Array.`);
          const i = null !== (n = e.args) && void 0 !== n ? n : {};
          a(i) && !Array.isArray(i) || o(!1, `@${e.name} args must be an object with argument names as keys.`), this.args = Mt(i)
        }
        get[Symbol.toStringTag]() {
          return "GraphQLDirective"
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            locations: this.locations,
            args: Bt(this.args),
            isRepeatable: this.isRepeatable,
            extensions: this.extensions,
            astNode: this.astNode
          }
        }
        toString() {
          return "@" + this.name
        }
        toJSON() {
          return this.toString()
        }
      }
      const yn = new mn({
          name: "include",
          description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
          locations: [O.FIELD, O.FRAGMENT_SPREAD, O.INLINE_FRAGMENT],
          args: {
            if: {
              type: new bt(cn),
              description: "Included when true."
            }
          }
        }),
        vn = new mn({
          name: "skip",
          description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
          locations: [O.FIELD, O.FRAGMENT_SPREAD, O.INLINE_FRAGMENT],
          args: {
            if: {
              type: new bt(cn),
              description: "Skipped when true."
            }
          }
        }),
        En = "No longer supported",
        Tn = new mn({
          name: "deprecated",
          description: "Marks an element of a GraphQL schema as no longer supported.",
          locations: [O.FIELD_DEFINITION, O.ARGUMENT_DEFINITION, O.INPUT_FIELD_DEFINITION, O.ENUM_VALUE],
          args: {
            reason: {
              type: an,
              description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
              defaultValue: En
            }
          }
        }),
        Nn = new mn({
          name: "specifiedBy",
          description: "Exposes a URL that specifies the behavior of this scalar.",
          locations: [O.SCALAR],
          args: {
            url: {
              type: new bt(an),
              description: "The URL that specifies the behavior of this scalar."
            }
          }
        }),
        gn = new mn({
          name: "oneOf",
          description: "Indicates exactly one field must be supplied and this field must not be `null`.",
          locations: [O.INPUT_OBJECT],
          args: {}
        }),
        In = Object.freeze([yn, vn, Tn, Nn, gn]);

      function _n(e) {
        return In.some((({
          name: t
        }) => t === e.name))
      }

      function bn(e) {
        return "object" == typeof e && "function" == typeof(null == e ? void 0 : e[Symbol.iterator])
      }

      function On(e, t) {
        if (pt(t)) {
          const n = On(e, t.ofType);
          return (null == n ? void 0 : n.kind) === D.NULL ? null : n
        }
        if (null === e) return {
          kind: D.NULL
        };
        if (void 0 === e) return null;
        if (ut(t)) {
          const n = t.ofType;
          if (bn(e)) {
            const t = [];
            for (const i of e) {
              const e = On(i, n);
              null != e && t.push(e)
            }
            return {
              kind: D.LIST,
              values: t
            }
          }
          return On(e, n)
        }
        if (at(t)) {
          if (!a(e)) return null;
          const n = [];
          for (const i of Object.values(t.getFields())) {
            const t = On(e[i.name], i.type);
            t && n.push({
              kind: D.OBJECT_FIELD,
              name: {
                kind: D.NAME,
                value: i.name
              },
              value: t
            })
          }
          return {
            kind: D.OBJECT,
            fields: n
          }
        }
        if (vt(t)) {
          const n = t.serialize(e);
          if (null == n) return null;
          if ("boolean" == typeof n) return {
            kind: D.BOOLEAN,
            value: n
          };
          if ("number" == typeof n && Number.isFinite(n)) {
            const e = String(n);
            return Dn.test(e) ? {
              kind: D.INT,
              value: e
            } : {
              kind: D.FLOAT,
              value: e
            }
          }
          if ("string" == typeof n) return ot(t) ? {
            kind: D.ENUM,
            value: n
          } : t === un && Dn.test(n) ? {
            kind: D.INT,
            value: n
          } : {
            kind: D.STRING,
            value: n
          };
          throw new TypeError(`Cannot convert value to AST: ${oe(n)}.`)
        }
        c(!1, "Unexpected input type: " + oe(t))
      }
      const Dn = /^-?(?:0|[1-9][0-9]*)$/,
        An = new Ct({
          name: "__Schema",
          description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
          fields: () => ({
            description: {
              type: an,
              resolve: e => e.description
            },
            types: {
              description: "A list of all types supported by this server.",
              type: new bt(new _t(new bt(Rn))),
              resolve: e => Object.values(e.getTypeMap())
            },
            queryType: {
              description: "The type that query operations will be rooted at.",
              type: new bt(Rn),
              resolve: e => e.getQueryType()
            },
            mutationType: {
              description: "If this server supports mutation, the type that mutation operations will be rooted at.",
              type: Rn,
              resolve: e => e.getMutationType()
            },
            subscriptionType: {
              description: "If this server support subscription, the type that subscription operations will be rooted at.",
              type: Rn,
              resolve: e => e.getSubscriptionType()
            },
            directives: {
              description: "A list of all directives supported by this server.",
              type: new bt(new _t(new bt(Sn))),
              resolve: e => e.getDirectives()
            }
          })
        }),
        Sn = new Ct({
          name: "__Directive",
          description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
          fields: () => ({
            name: {
              type: new bt(an),
              resolve: e => e.name
            },
            description: {
              type: an,
              resolve: e => e.description
            },
            isRepeatable: {
              type: new bt(cn),
              resolve: e => e.isRepeatable
            },
            locations: {
              type: new bt(new _t(new bt(wn))),
              resolve: e => e.locations
            },
            args: {
              type: new bt(new _t(new bt(kn))),
              args: {
                includeDeprecated: {
                  type: cn,
                  defaultValue: !1
                }
              },
              resolve: (e, {
                includeDeprecated: t
              }) => t ? e.args : e.args.filter((e => null == e.deprecationReason))
            }
          })
        }),
        wn = new Jt({
          name: "__DirectiveLocation",
          description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
          values: {
            QUERY: {
              value: O.QUERY,
              description: "Location adjacent to a query operation."
            },
            MUTATION: {
              value: O.MUTATION,
              description: "Location adjacent to a mutation operation."
            },
            SUBSCRIPTION: {
              value: O.SUBSCRIPTION,
              description: "Location adjacent to a subscription operation."
            },
            FIELD: {
              value: O.FIELD,
              description: "Location adjacent to a field."
            },
            FRAGMENT_DEFINITION: {
              value: O.FRAGMENT_DEFINITION,
              description: "Location adjacent to a fragment definition."
            },
            FRAGMENT_SPREAD: {
              value: O.FRAGMENT_SPREAD,
              description: "Location adjacent to a fragment spread."
            },
            INLINE_FRAGMENT: {
              value: O.INLINE_FRAGMENT,
              description: "Location adjacent to an inline fragment."
            },
            VARIABLE_DEFINITION: {
              value: O.VARIABLE_DEFINITION,
              description: "Location adjacent to a variable definition."
            },
            SCHEMA: {
              value: O.SCHEMA,
              description: "Location adjacent to a schema definition."
            },
            SCALAR: {
              value: O.SCALAR,
              description: "Location adjacent to a scalar definition."
            },
            OBJECT: {
              value: O.OBJECT,
              description: "Location adjacent to an object type definition."
            },
            FIELD_DEFINITION: {
              value: O.FIELD_DEFINITION,
              description: "Location adjacent to a field definition."
            },
            ARGUMENT_DEFINITION: {
              value: O.ARGUMENT_DEFINITION,
              description: "Location adjacent to an argument definition."
            },
            INTERFACE: {
              value: O.INTERFACE,
              description: "Location adjacent to an interface definition."
            },
            UNION: {
              value: O.UNION,
              description: "Location adjacent to a union definition."
            },
            ENUM: {
              value: O.ENUM,
              description: "Location adjacent to an enum definition."
            },
            ENUM_VALUE: {
              value: O.ENUM_VALUE,
              description: "Location adjacent to an enum value definition."
            },
            INPUT_OBJECT: {
              value: O.INPUT_OBJECT,
              description: "Location adjacent to an input object type definition."
            },
            INPUT_FIELD_DEFINITION: {
              value: O.INPUT_FIELD_DEFINITION,
              description: "Location adjacent to an input object field definition."
            }
          }
        }),
        Rn = new Ct({
          name: "__Type",
          description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
          fields: () => ({
            kind: {
              type: new bt(Fn),
              resolve: e => He(e) ? xn.SCALAR : Ze(e) ? xn.OBJECT : tt(e) ? xn.INTERFACE : it(e) ? xn.UNION : ot(e) ? xn.ENUM : at(e) ? xn.INPUT_OBJECT : ut(e) ? xn.LIST : pt(e) ? xn.NON_NULL : void c(!1, `Unexpected type: "${oe(e)}".`)
            },
            name: {
              type: an,
              resolve: e => "name" in e ? e.name : void 0
            },
            description: {
              type: an,
              resolve: e => "description" in e ? e.description : void 0
            },
            specifiedByURL: {
              type: an,
              resolve: e => "specifiedByURL" in e ? e.specifiedByURL : void 0
            },
            fields: {
              type: new _t(new bt(Ln)),
              args: {
                includeDeprecated: {
                  type: cn,
                  defaultValue: !1
                }
              },
              resolve(e, {
                includeDeprecated: t
              }) {
                if (Ze(e) || tt(e)) {
                  const n = Object.values(e.getFields());
                  return t ? n : n.filter((e => null == e.deprecationReason))
                }
              }
            },
            interfaces: {
              type: new _t(new bt(Rn)),
              resolve(e) {
                if (Ze(e) || tt(e)) return e.getInterfaces()
              }
            },
            possibleTypes: {
              type: new _t(new bt(Rn)),
              resolve(e, t, n, {
                schema: i
              }) {
                if (gt(e)) return i.getPossibleTypes(e)
              }
            },
            enumValues: {
              type: new _t(new bt($n)),
              args: {
                includeDeprecated: {
                  type: cn,
                  defaultValue: !1
                }
              },
              resolve(e, {
                includeDeprecated: t
              }) {
                if (ot(e)) {
                  const n = e.getValues();
                  return t ? n : n.filter((e => null == e.deprecationReason))
                }
              }
            },
            inputFields: {
              type: new _t(new bt(kn)),
              args: {
                includeDeprecated: {
                  type: cn,
                  defaultValue: !1
                }
              },
              resolve(e, {
                includeDeprecated: t
              }) {
                if (at(e)) {
                  const n = Object.values(e.getFields());
                  return t ? n : n.filter((e => null == e.deprecationReason))
                }
              }
            },
            ofType: {
              type: Rn,
              resolve: e => "ofType" in e ? e.ofType : void 0
            },
            isOneOf: {
              type: cn,
              resolve: e => {
                if (at(e)) return e.isOneOf
              }
            }
          })
        }),
        Ln = new Ct({
          name: "__Field",
          description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
          fields: () => ({
            name: {
              type: new bt(an),
              resolve: e => e.name
            },
            description: {
              type: an,
              resolve: e => e.description
            },
            args: {
              type: new bt(new _t(new bt(kn))),
              args: {
                includeDeprecated: {
                  type: cn,
                  defaultValue: !1
                }
              },
              resolve: (e, {
                includeDeprecated: t
              }) => t ? e.args : e.args.filter((e => null == e.deprecationReason))
            },
            type: {
              type: new bt(Rn),
              resolve: e => e.type
            },
            isDeprecated: {
              type: new bt(cn),
              resolve: e => null != e.deprecationReason
            },
            deprecationReason: {
              type: an,
              resolve: e => e.deprecationReason
            }
          })
        }),
        kn = new Ct({
          name: "__InputValue",
          description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
          fields: () => ({
            name: {
              type: new bt(an),
              resolve: e => e.name
            },
            description: {
              type: an,
              resolve: e => e.description
            },
            type: {
              type: new bt(Rn),
              resolve: e => e.type
            },
            defaultValue: {
              type: an,
              description: "A GraphQL-formatted string representing the default value for this input value.",
              resolve(e) {
                const {
                  type: t,
                  defaultValue: n
                } = e, i = On(n, t);
                return i ? Me(i) : null
              }
            },
            isDeprecated: {
              type: new bt(cn),
              resolve: e => null != e.deprecationReason
            },
            deprecationReason: {
              type: an,
              resolve: e => e.deprecationReason
            }
          })
        }),
        $n = new Ct({
          name: "__EnumValue",
          description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
          fields: () => ({
            name: {
              type: new bt(an),
              resolve: e => e.name
            },
            description: {
              type: an,
              resolve: e => e.description
            },
            isDeprecated: {
              type: new bt(cn),
              resolve: e => null != e.deprecationReason
            },
            deprecationReason: {
              type: an,
              resolve: e => e.deprecationReason
            }
          })
        });
      var xn;
      ! function(e) {
        e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.INPUT_OBJECT = "INPUT_OBJECT", e.LIST = "LIST", e.NON_NULL = "NON_NULL"
      }(xn || (xn = {}));
      const Fn = new Jt({
          name: "__TypeKind",
          description: "An enum describing what kind of type a given `__Type` is.",
          values: {
            SCALAR: {
              value: xn.SCALAR,
              description: "Indicates this type is a scalar."
            },
            OBJECT: {
              value: xn.OBJECT,
              description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
            },
            INTERFACE: {
              value: xn.INTERFACE,
              description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
            },
            UNION: {
              value: xn.UNION,
              description: "Indicates this type is a union. `possibleTypes` is a valid field."
            },
            ENUM: {
              value: xn.ENUM,
              description: "Indicates this type is an enum. `enumValues` is a valid field."
            },
            INPUT_OBJECT: {
              value: xn.INPUT_OBJECT,
              description: "Indicates this type is an input object. `inputFields` is a valid field."
            },
            LIST: {
              value: xn.LIST,
              description: "Indicates this type is a list. `ofType` is a valid field."
            },
            NON_NULL: {
              value: xn.NON_NULL,
              description: "Indicates this type is a non-null. `ofType` is a valid field."
            }
          }
        }),
        Cn = {
          name: "__schema",
          type: new bt(An),
          description: "Access the current type schema of this server.",
          args: [],
          resolve: (e, t, n, {
            schema: i
          }) => i,
          deprecationReason: void 0,
          extensions: Object.create(null),
          astNode: void 0
        },
        Vn = {
          name: "__type",
          type: Rn,
          description: "Request the type information of a single type.",
          args: [{
            name: "name",
            description: void 0,
            type: new bt(an),
            defaultValue: void 0,
            deprecationReason: void 0,
            extensions: Object.create(null),
            astNode: void 0
          }],
          resolve: (e, {
            name: t
          }, n, {
            schema: i
          }) => i.getType(t),
          deprecationReason: void 0,
          extensions: Object.create(null),
          astNode: void 0
        },
        Un = {
          name: "__typename",
          type: new bt(an),
          description: "The name of the current Object type at runtime.",
          args: [],
          resolve: (e, t, n, {
            parentType: i
          }) => i.name,
          deprecationReason: void 0,
          extensions: Object.create(null),
          astNode: void 0
        },
        Mn = Object.freeze([An, Sn, wn, Rn, Ln, kn, $n, Fn]);

      function jn(e) {
        return Mn.some((({
          name: t
        }) => e.name === t))
      }

      function Pn(e) {
        return ae(e, Gn)
      }

      function Bn(e) {
        if (!Pn(e)) throw new Error(`Expected ${oe(e)} to be a GraphQL schema.`);
        return e
      }
      class Gn {
        constructor(e) {
          var t, n;
          this.__validationErrors = !0 === e.assumeValid ? [] : void 0, a(e) || o(!1, "Must provide configuration object."), !e.types || Array.isArray(e.types) || o(!1, `"types" must be Array if provided but got: ${oe(e.types)}.`), !e.directives || Array.isArray(e.directives) || o(!1, `"directives" must be Array if provided but got: ${oe(e.directives)}.`), this.description = e.description, this.extensions = Re(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._queryType = e.query, this._mutationType = e.mutation, this._subscriptionType = e.subscription, this._directives = null !== (n = e.directives) && void 0 !== n ? n : In;
          const i = new Set(e.types);
          if (null != e.types)
            for (const t of e.types) i.delete(t), Yn(t, i);
          null != this._queryType && Yn(this._queryType, i), null != this._mutationType && Yn(this._mutationType, i), null != this._subscriptionType && Yn(this._subscriptionType, i);
          for (const e of this._directives)
            if (fn(e))
              for (const t of e.args) Yn(t.type, i);
          Yn(An, i), this._typeMap = Object.create(null), this._subTypeMap = Object.create(null), this._implementationsMap = Object.create(null);
          for (const e of i) {
            if (null == e) continue;
            const t = e.name;
            if (t || o(!1, "One of the provided types for building the Schema is missing a name."), void 0 !== this._typeMap[t]) throw new Error(`Schema must contain uniquely named types but contains multiple types named "${t}".`);
            if (this._typeMap[t] = e, tt(e)) {
              for (const t of e.getInterfaces())
                if (tt(t)) {
                  let n = this._implementationsMap[t.name];
                  void 0 === n && (n = this._implementationsMap[t.name] = {
                    objects: [],
                    interfaces: []
                  }), n.interfaces.push(e)
                }
            } else if (Ze(e))
              for (const t of e.getInterfaces())
                if (tt(t)) {
                  let n = this._implementationsMap[t.name];
                  void 0 === n && (n = this._implementationsMap[t.name] = {
                    objects: [],
                    interfaces: []
                  }), n.objects.push(e)
                }
          }
        }
        get[Symbol.toStringTag]() {
          return "GraphQLSchema"
        }
        getQueryType() {
          return this._queryType
        }
        getMutationType() {
          return this._mutationType
        }
        getSubscriptionType() {
          return this._subscriptionType
        }
        getRootType(e) {
          switch (e) {
            case b.QUERY:
              return this.getQueryType();
            case b.MUTATION:
              return this.getMutationType();
            case b.SUBSCRIPTION:
              return this.getSubscriptionType()
          }
        }
        getTypeMap() {
          return this._typeMap
        }
        getType(e) {
          return this.getTypeMap()[e]
        }
        getPossibleTypes(e) {
          return it(e) ? e.getTypes() : this.getImplementations(e).objects
        }
        getImplementations(e) {
          const t = this._implementationsMap[e.name];
          return null != t ? t : {
            objects: [],
            interfaces: []
          }
        }
        isSubType(e, t) {
          let n = this._subTypeMap[e.name];
          if (void 0 === n) {
            if (n = Object.create(null), it(e))
              for (const t of e.getTypes()) n[t.name] = !0;
            else {
              const t = this.getImplementations(e);
              for (const e of t.objects) n[e.name] = !0;
              for (const e of t.interfaces) n[e.name] = !0
            }
            this._subTypeMap[e.name] = n
          }
          return void 0 !== n[t.name]
        }
        getDirectives() {
          return this._directives
        }
        getDirective(e) {
          return this.getDirectives().find((t => t.name === e))
        }
        toConfig() {
          return {
            description: this.description,
            query: this.getQueryType(),
            mutation: this.getMutationType(),
            subscription: this.getSubscriptionType(),
            types: Object.values(this.getTypeMap()),
            directives: this.getDirectives(),
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes,
            assumeValid: void 0 !== this.__validationErrors
          }
        }
      }

      function Yn(e, t) {
        const n = kt(e);
        if (!t.has(n))
          if (t.add(n), it(n))
            for (const e of n.getTypes()) Yn(e, t);
          else if (Ze(n) || tt(n)) {
          for (const e of n.getInterfaces()) Yn(e, t);
          for (const e of Object.values(n.getFields())) {
            Yn(e.type, t);
            for (const n of e.args) Yn(n.type, t)
          }
        } else if (at(n))
          for (const e of Object.values(n.getFields())) Yn(e.type, t);
        return t
      }

      function Qn(e) {
        if (Bn(e), e.__validationErrors) return e.__validationErrors;
        const t = new Jn(e);
        ! function(e) {
          const t = e.schema,
            n = t.getQueryType();
          if (n) {
            if (!Ze(n)) {
              var i;
              e.reportError(`Query root type must be Object type, it cannot be ${oe(n)}.`, null !== (i = Kn(t, b.QUERY)) && void 0 !== i ? i : n.astNode)
            }
          } else e.reportError("Query root type must be provided.", t.astNode);
          const r = t.getMutationType();
          var o;
          r && !Ze(r) && e.reportError(`Mutation root type must be Object type if provided, it cannot be ${oe(r)}.`, null !== (o = Kn(t, b.MUTATION)) && void 0 !== o ? o : r.astNode);
          const s = t.getSubscriptionType();
          var a;
          s && !Ze(s) && e.reportError(`Subscription root type must be Object type if provided, it cannot be ${oe(s)}.`, null !== (a = Kn(t, b.SUBSCRIPTION)) && void 0 !== a ? a : s.astNode)
        }(t),
        function(e) {
          for (const n of e.schema.getDirectives())
            if (fn(n)) {
              Xn(e, n), 0 === n.locations.length && e.reportError(`Directive @${n.name} must include 1 or more locations.`, n.astNode);
              for (const i of n.args) {
                var t;
                Xn(e, i), ft(i.type) || e.reportError(`The type of @${n.name}(${i.name}:) must be Input Type but got: ${oe(i.type)}.`, i.astNode), Gt(i) && null != i.deprecationReason && e.reportError(`Required argument @${n.name}(${i.name}:) cannot be deprecated.`, [si(i.astNode), null === (t = i.astNode) || void 0 === t ? void 0 : t.type])
              }
            } else e.reportError(`Expected directive but got: ${oe(n)}.`, null == n ? void 0 : n.astNode)
        }(t),
        function(e) {
          const t = function(e) {
              const t = Object.create(null),
                n = [],
                i = Object.create(null);
              return function r(o) {
                if (t[o.name]) return;
                t[o.name] = !0, i[o.name] = n.length;
                const s = Object.values(o.getFields());
                for (const t of s)
                  if (pt(t.type) && at(t.type.ofType)) {
                    const o = t.type.ofType,
                      s = i[o.name];
                    if (n.push(t), void 0 === s) r(o);
                    else {
                      const t = n.slice(s),
                        i = t.map((e => e.name)).join(".");
                      e.reportError(`Cannot reference Input Object "${o.name}" within itself through a series of non-null fields: "${i}".`, t.map((e => e.astNode)))
                    }
                    n.pop()
                  } i[o.name] = void 0
              }
            }(e),
            n = e.schema.getTypeMap();
          for (const i of Object.values(n)) Rt(i) ? (jn(i) || Xn(e, i), Ze(i) || tt(i) ? (zn(e, i), Hn(e, i)) : it(i) ? ei(e, i) : ot(i) ? ti(e, i) : at(i) && (ni(e, i), t(i))) : e.reportError(`Expected GraphQL named type but got: ${oe(i)}.`, i.astNode)
        }(t);
        const n = t.getErrors();
        return e.__validationErrors = n, n
      }

      function qn(e) {
        const t = Qn(e);
        if (0 !== t.length) throw new Error(t.map((e => e.message)).join("\n\n"))
      }
      class Jn {
        constructor(e) {
          this._errors = [], this.schema = e
        }
        reportError(e, t) {
          const n = Array.isArray(t) ? t.filter(Boolean) : t;
          this._errors.push(new h(e, {
            nodes: n
          }))
        }
        getErrors() {
          return this._errors
        }
      }

      function Kn(e, t) {
        var n;
        return null === (n = [e.astNode, ...e.extensionASTNodes].flatMap((e => {
          var t;
          return null !== (t = null == e ? void 0 : e.operationTypes) && void 0 !== t ? t : []
        })).find((e => e.operation === t))) || void 0 === n ? void 0 : n.type
      }

      function Xn(e, t) {
        t.name.startsWith("__") && e.reportError(`Name "${t.name}" must not begin with "__", which is reserved by GraphQL introspection.`, t.astNode)
      }

      function zn(e, t) {
        const n = Object.values(t.getFields());
        0 === n.length && e.reportError(`Type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
        for (const s of n) {
          var i;
          Xn(e, s), mt(s.type) || e.reportError(`The type of ${t.name}.${s.name} must be Output Type but got: ${oe(s.type)}.`, null === (i = s.astNode) || void 0 === i ? void 0 : i.type);
          for (const n of s.args) {
            const i = n.name;
            var r, o;
            Xn(e, n), ft(n.type) || e.reportError(`The type of ${t.name}.${s.name}(${i}:) must be Input Type but got: ${oe(n.type)}.`, null === (r = n.astNode) || void 0 === r ? void 0 : r.type), Gt(n) && null != n.deprecationReason && e.reportError(`Required argument ${t.name}.${s.name}(${i}:) cannot be deprecated.`, [si(n.astNode), null === (o = n.astNode) || void 0 === o ? void 0 : o.type])
          }
        }
      }

      function Hn(e, t) {
        const n = Object.create(null);
        for (const i of t.getInterfaces()) tt(i) ? t !== i ? n[i.name] ? e.reportError(`Type ${t.name} can only implement ${i.name} once.`, ri(t, i)) : (n[i.name] = !0, Zn(e, t, i), Wn(e, t, i)) : e.reportError(`Type ${t.name} cannot implement itself because it would create a circular reference.`, ri(t, i)) : e.reportError(`Type ${oe(t)} must only implement Interface types, it cannot implement ${oe(i)}.`, ri(t, i))
      }

      function Wn(e, t, n) {
        const i = t.getFields();
        for (const c of Object.values(n.getFields())) {
          const u = c.name,
            l = i[u];
          if (l) {
            var r, o;
            en(e.schema, l.type, c.type) || e.reportError(`Interface field ${n.name}.${u} expects type ${oe(c.type)} but ${t.name}.${u} is type ${oe(l.type)}.`, [null === (r = c.astNode) || void 0 === r ? void 0 : r.type, null === (o = l.astNode) || void 0 === o ? void 0 : o.type]);
            for (const i of c.args) {
              const r = i.name,
                o = l.args.find((e => e.name === r));
              var s, a;
              o ? Zt(i.type, o.type) || e.reportError(`Interface field argument ${n.name}.${u}(${r}:) expects type ${oe(i.type)} but ${t.name}.${u}(${r}:) is type ${oe(o.type)}.`, [null === (s = i.astNode) || void 0 === s ? void 0 : s.type, null === (a = o.astNode) || void 0 === a ? void 0 : a.type]) : e.reportError(`Interface field argument ${n.name}.${u}(${r}:) expected but ${t.name}.${u} does not provide it.`, [i.astNode, l.astNode])
            }
            for (const i of l.args) {
              const r = i.name;
              !c.args.find((e => e.name === r)) && Gt(i) && e.reportError(`Object field ${t.name}.${u} includes required argument ${r} that is missing from the Interface field ${n.name}.${u}.`, [i.astNode, c.astNode])
            }
          } else e.reportError(`Interface field ${n.name}.${u} expected but ${t.name} does not provide it.`, [c.astNode, t.astNode, ...t.extensionASTNodes])
        }
      }

      function Zn(e, t, n) {
        const i = t.getInterfaces();
        for (const r of n.getInterfaces()) i.includes(r) || e.reportError(r === t ? `Type ${t.name} cannot implement ${n.name} because it would create a circular reference.` : `Type ${t.name} must implement ${r.name} because it is implemented by ${n.name}.`, [...ri(n, r), ...ri(t, n)])
      }

      function ei(e, t) {
        const n = t.getTypes();
        0 === n.length && e.reportError(`Union type ${t.name} must define one or more member types.`, [t.astNode, ...t.extensionASTNodes]);
        const i = Object.create(null);
        for (const r of n) i[r.name] ? e.reportError(`Union type ${t.name} can only include type ${r.name} once.`, oi(t, r.name)) : (i[r.name] = !0, Ze(r) || e.reportError(`Union type ${t.name} can only include Object types, it cannot include ${oe(r)}.`, oi(t, String(r))))
      }

      function ti(e, t) {
        const n = t.getValues();
        0 === n.length && e.reportError(`Enum type ${t.name} must define one or more values.`, [t.astNode, ...t.extensionASTNodes]);
        for (const t of n) Xn(e, t)
      }

      function ni(e, t) {
        const n = Object.values(t.getFields());
        0 === n.length && e.reportError(`Input Object type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
        for (const o of n) {
          var i, r;
          Xn(e, o), ft(o.type) || e.reportError(`The type of ${t.name}.${o.name} must be Input Type but got: ${oe(o.type)}.`, null === (i = o.astNode) || void 0 === i ? void 0 : i.type), Wt(o) && null != o.deprecationReason && e.reportError(`Required input field ${t.name}.${o.name} cannot be deprecated.`, [si(o.astNode), null === (r = o.astNode) || void 0 === r ? void 0 : r.type]), t.isOneOf && ii(t, o, e)
        }
      }

      function ii(e, t, n) {
        var i;
        pt(t.type) && n.reportError(`OneOf input field ${e.name}.${t.name} must be nullable.`, null === (i = t.astNode) || void 0 === i ? void 0 : i.type), void 0 !== t.defaultValue && n.reportError(`OneOf input field ${e.name}.${t.name} cannot have a default value.`, t.astNode)
      }

      function ri(e, t) {
        const {
          astNode: n,
          extensionASTNodes: i
        } = e;
        return (null != n ? [n, ...i] : i).flatMap((e => {
          var t;
          return null !== (t = e.interfaces) && void 0 !== t ? t : []
        })).filter((e => e.name.value === t.name))
      }

      function oi(e, t) {
        const {
          astNode: n,
          extensionASTNodes: i
        } = e;
        return (null != n ? [n, ...i] : i).flatMap((e => {
          var t;
          return null !== (t = e.types) && void 0 !== t ? t : []
        })).filter((e => e.name.value === t))
      }

      function si(e) {
        var t;
        return null == e || null === (t = e.directives) || void 0 === t ? void 0 : t.find((e => e.name.value === Tn.name))
      }

      function ai(e, t) {
        switch (t.kind) {
          case D.LIST_TYPE: {
            const n = ai(e, t.type);
            return n && new _t(n)
          }
          case D.NON_NULL_TYPE: {
            const n = ai(e, t.type);
            return n && new bt(n)
          }
          case D.NAMED_TYPE:
            return e.getType(t.name.value)
        }
      }
      class ci {
        constructor(e, t, n) {
          this._schema = e, this._typeStack = [], this._parentTypeStack = [], this._inputTypeStack = [], this._fieldDefStack = [], this._defaultValueStack = [], this._directive = null, this._argument = null, this._enumValue = null, this._getFieldDef = null != n ? n : ui, t && (ft(t) && this._inputTypeStack.push(t), Tt(t) && this._parentTypeStack.push(t), mt(t) && this._typeStack.push(t))
        }
        get[Symbol.toStringTag]() {
          return "TypeInfo"
        }
        getType() {
          if (this._typeStack.length > 0) return this._typeStack[this._typeStack.length - 1]
        }
        getParentType() {
          if (this._parentTypeStack.length > 0) return this._parentTypeStack[this._parentTypeStack.length - 1]
        }
        getInputType() {
          if (this._inputTypeStack.length > 0) return this._inputTypeStack[this._inputTypeStack.length - 1]
        }
        getParentInputType() {
          if (this._inputTypeStack.length > 1) return this._inputTypeStack[this._inputTypeStack.length - 2]
        }
        getFieldDef() {
          if (this._fieldDefStack.length > 0) return this._fieldDefStack[this._fieldDefStack.length - 1]
        }
        getDefaultValue() {
          if (this._defaultValueStack.length > 0) return this._defaultValueStack[this._defaultValueStack.length - 1]
        }
        getDirective() {
          return this._directive
        }
        getArgument() {
          return this._argument
        }
        getEnumValue() {
          return this._enumValue
        }
        enter(e) {
          const t = this._schema;
          switch (e.kind) {
            case D.SELECTION_SET: {
              const e = kt(this.getType());
              this._parentTypeStack.push(Tt(e) ? e : void 0);
              break
            }
            case D.FIELD: {
              const n = this.getParentType();
              let i, r;
              n && (i = this._getFieldDef(t, n, e), i && (r = i.type)), this._fieldDefStack.push(i), this._typeStack.push(mt(r) ? r : void 0);
              break
            }
            case D.DIRECTIVE:
              this._directive = t.getDirective(e.name.value);
              break;
            case D.OPERATION_DEFINITION: {
              const n = t.getRootType(e.operation);
              this._typeStack.push(Ze(n) ? n : void 0);
              break
            }
            case D.INLINE_FRAGMENT:
            case D.FRAGMENT_DEFINITION: {
              const n = e.typeCondition,
                i = n ? ai(t, n) : kt(this.getType());
              this._typeStack.push(mt(i) ? i : void 0);
              break
            }
            case D.VARIABLE_DEFINITION: {
              const n = ai(t, e.type);
              this._inputTypeStack.push(ft(n) ? n : void 0);
              break
            }
            case D.ARGUMENT: {
              var n;
              let t, i;
              const r = null !== (n = this.getDirective()) && void 0 !== n ? n : this.getFieldDef();
              r && (t = r.args.find((t => t.name === e.name.value)), t && (i = t.type)), this._argument = t, this._defaultValueStack.push(t ? t.defaultValue : void 0), this._inputTypeStack.push(ft(i) ? i : void 0);
              break
            }
            case D.LIST: {
              const e = wt(this.getInputType()),
                t = ut(e) ? e.ofType : e;
              this._defaultValueStack.push(void 0), this._inputTypeStack.push(ft(t) ? t : void 0);
              break
            }
            case D.OBJECT_FIELD: {
              const t = kt(this.getInputType());
              let n, i;
              at(t) && (i = t.getFields()[e.name.value], i && (n = i.type)), this._defaultValueStack.push(i ? i.defaultValue : void 0), this._inputTypeStack.push(ft(n) ? n : void 0);
              break
            }
            case D.ENUM: {
              const t = kt(this.getInputType());
              let n;
              ot(t) && (n = t.getValue(e.value)), this._enumValue = n;
              break
            }
          }
        }
        leave(e) {
          switch (e.kind) {
            case D.SELECTION_SET:
              this._parentTypeStack.pop();
              break;
            case D.FIELD:
              this._fieldDefStack.pop(), this._typeStack.pop();
              break;
            case D.DIRECTIVE:
              this._directive = null;
              break;
            case D.OPERATION_DEFINITION:
            case D.INLINE_FRAGMENT:
            case D.FRAGMENT_DEFINITION:
              this._typeStack.pop();
              break;
            case D.VARIABLE_DEFINITION:
              this._inputTypeStack.pop();
              break;
            case D.ARGUMENT:
              this._argument = null, this._defaultValueStack.pop(), this._inputTypeStack.pop();
              break;
            case D.LIST:
            case D.OBJECT_FIELD:
              this._defaultValueStack.pop(), this._inputTypeStack.pop();
              break;
            case D.ENUM:
              this._enumValue = null
          }
        }
      }

      function ui(e, t, n) {
        const i = n.name.value;
        return i === Cn.name && e.getQueryType() === t ? Cn : i === Vn.name && e.getQueryType() === t ? Vn : i === Un.name && Tt(t) ? Un : Ze(t) || tt(t) ? t.getFields()[i] : void 0
      }

      function li(e, t) {
        return {
          enter(...n) {
            const i = n[0];
            e.enter(i);
            const r = Ve(t, i.kind).enter;
            if (r) {
              const o = r.apply(t, n);
              return void 0 !== o && (e.leave(i), _(o) && e.enter(o)), o
            }
          },
          leave(...n) {
            const i = n[0],
              r = Ve(t, i.kind).leave;
            let o;
            return r && (o = r.apply(t, n)), e.leave(i), o
          }
        }
      }

      function pi(e) {
        return di(e) || vi(e) || Ti(e)
      }

      function di(e) {
        return e.kind === D.OPERATION_DEFINITION || e.kind === D.FRAGMENT_DEFINITION
      }

      function fi(e) {
        return e.kind === D.FIELD || e.kind === D.FRAGMENT_SPREAD || e.kind === D.INLINE_FRAGMENT
      }

      function hi(e) {
        return e.kind === D.VARIABLE || e.kind === D.INT || e.kind === D.FLOAT || e.kind === D.STRING || e.kind === D.BOOLEAN || e.kind === D.NULL || e.kind === D.ENUM || e.kind === D.LIST || e.kind === D.OBJECT
      }

      function mi(e) {
        return hi(e) && (e.kind === D.LIST ? e.values.some(mi) : e.kind === D.OBJECT ? e.fields.some((e => mi(e.value))) : e.kind !== D.VARIABLE)
      }

      function yi(e) {
        return e.kind === D.NAMED_TYPE || e.kind === D.LIST_TYPE || e.kind === D.NON_NULL_TYPE
      }

      function vi(e) {
        return e.kind === D.SCHEMA_DEFINITION || Ei(e) || e.kind === D.DIRECTIVE_DEFINITION
      }

      function Ei(e) {
        return e.kind === D.SCALAR_TYPE_DEFINITION || e.kind === D.OBJECT_TYPE_DEFINITION || e.kind === D.INTERFACE_TYPE_DEFINITION || e.kind === D.UNION_TYPE_DEFINITION || e.kind === D.ENUM_TYPE_DEFINITION || e.kind === D.INPUT_OBJECT_TYPE_DEFINITION
      }

      function Ti(e) {
        return e.kind === D.SCHEMA_EXTENSION || Ni(e)
      }

      function Ni(e) {
        return e.kind === D.SCALAR_TYPE_EXTENSION || e.kind === D.OBJECT_TYPE_EXTENSION || e.kind === D.INTERFACE_TYPE_EXTENSION || e.kind === D.UNION_TYPE_EXTENSION || e.kind === D.ENUM_TYPE_EXTENSION || e.kind === D.INPUT_OBJECT_TYPE_EXTENSION
      }

      function gi(e) {
        return {
          Document(t) {
            for (const n of t.definitions)
              if (!di(n)) {
                const t = n.kind === D.SCHEMA_DEFINITION || n.kind === D.SCHEMA_EXTENSION ? "schema" : '"' + n.name.value + '"';
                e.reportError(new h(`The ${t} definition is not executable.`, {
                  nodes: n
                }))
              } return !1
          }
        }
      }

      function Ii(e) {
        return {
          Field(t) {
            const n = e.getParentType();
            if (n && !e.getFieldDef()) {
              const i = e.getSchema(),
                r = t.name.value;
              let o = Ee("to use an inline fragment on", function(e, t, n) {
                if (!gt(t)) return [];
                const i = new Set,
                  r = Object.create(null);
                for (const s of e.getPossibleTypes(t))
                  if (s.getFields()[n]) {
                    i.add(s), r[s.name] = 1;
                    for (const e of s.getInterfaces()) {
                      var o;
                      e.getFields()[n] && (i.add(e), r[e.name] = (null !== (o = r[e.name]) && void 0 !== o ? o : 0) + 1)
                    }
                  } return [...i].sort(((t, n) => {
                  const i = r[n.name] - r[t.name];
                  return 0 !== i ? i : tt(t) && e.isSubType(t, n) ? -1 : tt(n) && e.isSubType(n, t) ? 1 : _e(t.name, n.name)
                })).map((e => e.name))
              }(i, n, r));
              "" === o && (o = Ee(function(e, t) {
                return Ze(e) || tt(e) ? Ae(t, Object.keys(e.getFields())) : []
              }(n, r))), e.reportError(new h(`Cannot query field "${r}" on type "${n.name}".` + o, {
                nodes: t
              }))
            }
          }
        }
      }

      function _i(e) {
        return {
          InlineFragment(t) {
            const n = t.typeCondition;
            if (n) {
              const t = ai(e.getSchema(), n);
              if (t && !Tt(t)) {
                const t = Me(n);
                e.reportError(new h(`Fragment cannot condition on non composite type "${t}".`, {
                  nodes: n
                }))
              }
            }
          },
          FragmentDefinition(t) {
            const n = ai(e.getSchema(), t.typeCondition);
            if (n && !Tt(n)) {
              const n = Me(t.typeCondition);
              e.reportError(new h(`Fragment "${t.name.value}" cannot condition on non composite type "${n}".`, {
                nodes: t.typeCondition
              }))
            }
          }
        }
      }

      function bi(e) {
        return {
          ...Oi(e),
          Argument(t) {
            const n = e.getArgument(),
              i = e.getFieldDef(),
              r = e.getParentType();
            if (!n && i && r) {
              const n = t.name.value,
                o = Ae(n, i.args.map((e => e.name)));
              e.reportError(new h(`Unknown argument "${n}" on field "${r.name}.${i.name}".` + Ee(o), {
                nodes: t
              }))
            }
          }
        }
      }

      function Oi(e) {
        const t = Object.create(null),
          n = e.getSchema(),
          i = n ? n.getDirectives() : In;
        for (const e of i) t[e.name] = e.args.map((e => e.name));
        const r = e.getDocument().definitions;
        for (const e of r)
          if (e.kind === D.DIRECTIVE_DEFINITION) {
            var o;
            const n = null !== (o = e.arguments) && void 0 !== o ? o : [];
            t[e.name.value] = n.map((e => e.name.value))
          } return {
          Directive(n) {
            const i = n.name.value,
              r = t[i];
            if (n.arguments && r)
              for (const t of n.arguments) {
                const n = t.name.value;
                if (!r.includes(n)) {
                  const o = Ae(n, r);
                  e.reportError(new h(`Unknown argument "${n}" on directive "@${i}".` + Ee(o), {
                    nodes: t
                  }))
                }
              }
            return !1
          }
        }
      }

      function Di(e) {
        const t = Object.create(null),
          n = e.getSchema(),
          i = n ? n.getDirectives() : In;
        for (const e of i) t[e.name] = e.locations;
        const r = e.getDocument().definitions;
        for (const e of r) e.kind === D.DIRECTIVE_DEFINITION && (t[e.name.value] = e.locations.map((e => e.value)));
        return {
          Directive(n, i, r, o, s) {
            const a = n.name.value,
              u = t[a];
            if (!u) return void e.reportError(new h(`Unknown directive "@${a}".`, {
              nodes: n
            }));
            const l = function(e) {
              const t = e[e.length - 1];
              switch ("kind" in t || c(!1), t.kind) {
                case D.OPERATION_DEFINITION:
                  return function(e) {
                    switch (e) {
                      case b.QUERY:
                        return O.QUERY;
                      case b.MUTATION:
                        return O.MUTATION;
                      case b.SUBSCRIPTION:
                        return O.SUBSCRIPTION
                    }
                  }(t.operation);
                case D.FIELD:
                  return O.FIELD;
                case D.FRAGMENT_SPREAD:
                  return O.FRAGMENT_SPREAD;
                case D.INLINE_FRAGMENT:
                  return O.INLINE_FRAGMENT;
                case D.FRAGMENT_DEFINITION:
                  return O.FRAGMENT_DEFINITION;
                case D.VARIABLE_DEFINITION:
                  return O.VARIABLE_DEFINITION;
                case D.SCHEMA_DEFINITION:
                case D.SCHEMA_EXTENSION:
                  return O.SCHEMA;
                case D.SCALAR_TYPE_DEFINITION:
                case D.SCALAR_TYPE_EXTENSION:
                  return O.SCALAR;
                case D.OBJECT_TYPE_DEFINITION:
                case D.OBJECT_TYPE_EXTENSION:
                  return O.OBJECT;
                case D.FIELD_DEFINITION:
                  return O.FIELD_DEFINITION;
                case D.INTERFACE_TYPE_DEFINITION:
                case D.INTERFACE_TYPE_EXTENSION:
                  return O.INTERFACE;
                case D.UNION_TYPE_DEFINITION:
                case D.UNION_TYPE_EXTENSION:
                  return O.UNION;
                case D.ENUM_TYPE_DEFINITION:
                case D.ENUM_TYPE_EXTENSION:
                  return O.ENUM;
                case D.ENUM_VALUE_DEFINITION:
                  return O.ENUM_VALUE;
                case D.INPUT_OBJECT_TYPE_DEFINITION:
                case D.INPUT_OBJECT_TYPE_EXTENSION:
                  return O.INPUT_OBJECT;
                case D.INPUT_VALUE_DEFINITION: {
                  const t = e[e.length - 3];
                  return "kind" in t || c(!1), t.kind === D.INPUT_OBJECT_TYPE_DEFINITION ? O.INPUT_FIELD_DEFINITION : O.ARGUMENT_DEFINITION
                }
                default:
                  c(!1, "Unexpected kind: " + oe(t.kind))
              }
            }(s);
            l && !u.includes(l) && e.reportError(new h(`Directive "@${a}" may not be used on ${l}.`, {
              nodes: n
            }))
          }
        }
      }

      function Ai(e) {
        return {
          FragmentSpread(t) {
            const n = t.name.value;
            e.getFragment(n) || e.reportError(new h(`Unknown fragment "${n}".`, {
              nodes: t.name
            }))
          }
        }
      }

      function Si(e) {
        const t = e.getSchema(),
          n = t ? t.getTypeMap() : Object.create(null),
          i = Object.create(null);
        for (const t of e.getDocument().definitions) Ei(t) && (i[t.name.value] = !0);
        const r = [...Object.keys(n), ...Object.keys(i)];
        return {
          NamedType(t, o, s, a, c) {
            const u = t.name.value;
            if (!n[u] && !i[u]) {
              var l;
              const n = null !== (l = c[2]) && void 0 !== l ? l : s,
                i = null != n && "kind" in (p = n) && (vi(p) || Ti(p));
              if (i && wi.includes(u)) return;
              const o = Ae(u, i ? wi.concat(r) : r);
              e.reportError(new h(`Unknown type "${u}".` + Ee(o), {
                nodes: t
              }))
            }
            var p
          }
        }
      }
      const wi = [...ln, ...Mn].map((e => e.name));

      function Ri(e) {
        let t = 0;
        return {
          Document(e) {
            t = e.definitions.filter((e => e.kind === D.OPERATION_DEFINITION)).length
          },
          OperationDefinition(n) {
            !n.name && t > 1 && e.reportError(new h("This anonymous operation must be the only defined operation.", {
              nodes: n
            }))
          }
        }
      }

      function Li(e) {
        var t, n, i;
        const r = e.getSchema(),
          o = null !== (t = null !== (n = null !== (i = null == r ? void 0 : r.astNode) && void 0 !== i ? i : null == r ? void 0 : r.getQueryType()) && void 0 !== n ? n : null == r ? void 0 : r.getMutationType()) && void 0 !== t ? t : null == r ? void 0 : r.getSubscriptionType();
        let s = 0;
        return {
          SchemaDefinition(t) {
            o ? e.reportError(new h("Cannot define a new schema within a schema extension.", {
              nodes: t
            })) : (s > 0 && e.reportError(new h("Must provide only one schema definition.", {
              nodes: t
            })), ++s)
          }
        }
      }
      const ki = 3;

      function $i(e) {
        function t(n, i = Object.create(null), r = 0) {
          if (n.kind === D.FRAGMENT_SPREAD) {
            const o = n.name.value;
            if (!0 === i[o]) return !1;
            const s = e.getFragment(o);
            if (!s) return !1;
            try {
              return i[o] = !0, t(s, i, r)
            } finally {
              i[o] = void 0
            }
          }
          if (n.kind === D.FIELD && ("fields" === n.name.value || "interfaces" === n.name.value || "possibleTypes" === n.name.value || "inputFields" === n.name.value) && ++r >= ki) return !0;
          if ("selectionSet" in n && n.selectionSet)
            for (const e of n.selectionSet.selections)
              if (t(e, i, r)) return !0;
          return !1
        }
        return {
          Field(n) {
            if (("__schema" === n.name.value || "__type" === n.name.value) && t(n)) return e.reportError(new h("Maximum introspection depth exceeded", {
              nodes: [n]
            })), !1
          }
        }
      }

      function xi(e) {
        const t = Object.create(null),
          n = [],
          i = Object.create(null);
        return {
          OperationDefinition: () => !1,
          FragmentDefinition: e => (r(e), !1)
        };

        function r(o) {
          if (t[o.name.value]) return;
          const s = o.name.value;
          t[s] = !0;
          const a = e.getFragmentSpreads(o.selectionSet);
          if (0 !== a.length) {
            i[s] = n.length;
            for (const t of a) {
              const o = t.name.value,
                s = i[o];
              if (n.push(t), void 0 === s) {
                const t = e.getFragment(o);
                t && r(t)
              } else {
                const t = n.slice(s),
                  i = t.slice(0, -1).map((e => '"' + e.name.value + '"')).join(", ");
                e.reportError(new h(`Cannot spread fragment "${o}" within itself` + ("" !== i ? ` via ${i}.` : "."), {
                  nodes: t
                }))
              }
              n.pop()
            }
            i[s] = void 0
          }
        }
      }

      function Fi(e) {
        let t = Object.create(null);
        return {
          OperationDefinition: {
            enter() {
              t = Object.create(null)
            },
            leave(n) {
              const i = e.getRecursiveVariableUsages(n);
              for (const {
                  node: r
                }
                of i) {
                const i = r.name.value;
                !0 !== t[i] && e.reportError(new h(n.name ? `Variable "$${i}" is not defined by operation "${n.name.value}".` : `Variable "$${i}" is not defined.`, {
                  nodes: [r, n]
                }))
              }
            }
          },
          VariableDefinition(e) {
            t[e.variable.name.value] = !0
          }
        }
      }

      function Ci(e) {
        const t = [],
          n = [];
        return {
          OperationDefinition: e => (t.push(e), !1),
          FragmentDefinition: e => (n.push(e), !1),
          Document: {
            leave() {
              const i = Object.create(null);
              for (const n of t)
                for (const t of e.getRecursivelyReferencedFragments(n)) i[t.name.value] = !0;
              for (const t of n) {
                const n = t.name.value;
                !0 !== i[n] && e.reportError(new h(`Fragment "${n}" is never used.`, {
                  nodes: t
                }))
              }
            }
          }
        }
      }

      function Vi(e) {
        let t = [];
        return {
          OperationDefinition: {
            enter() {
              t = []
            },
            leave(n) {
              const i = Object.create(null),
                r = e.getRecursiveVariableUsages(n);
              for (const {
                  node: e
                }
                of r) i[e.name.value] = !0;
              for (const r of t) {
                const t = r.variable.name.value;
                !0 !== i[t] && e.reportError(new h(n.name ? `Variable "$${t}" is never used in operation "${n.name.value}".` : `Variable "$${t}" is never used.`, {
                  nodes: r
                }))
              }
            }
          },
          VariableDefinition(e) {
            t.push(e)
          }
        }
      }

      function Ui(e) {
        switch (e.kind) {
          case D.OBJECT:
            return {
              ...e, fields: (t = e.fields, t.map((e => ({
                ...e,
                value: Ui(e.value)
              }))).sort(((e, t) => _e(e.name.value, t.name.value))))
            };
          case D.LIST:
            return {
              ...e, values: e.values.map(Ui)
            };
          case D.INT:
          case D.FLOAT:
          case D.STRING:
          case D.BOOLEAN:
          case D.NULL:
          case D.ENUM:
          case D.VARIABLE:
            return e
        }
        var t
      }

      function Mi(e) {
        return Array.isArray(e) ? e.map((([e, t]) => `subfields "${e}" conflict because ` + Mi(t))).join(" and ") : e
      }

      function ji(e) {
        const t = new zi,
          n = new Hi,
          i = new Map;
        return {
          SelectionSet(r) {
            const o = function(e, t, n, i, r, o) {
              const s = [],
                [a, c] = Ji(e, t, r, o);
              if (function(e, t, n, i, r, o) {
                  for (const [s, a] of Object.entries(o))
                    if (a.length > 1)
                      for (let o = 0; o < a.length; o++)
                        for (let c = o + 1; c < a.length; c++) {
                          const u = Yi(e, n, i, r, !1, s, a[o], a[c]);
                          u && t.push(u)
                        }
                }(e, s, t, n, i, a), 0 !== c.length)
                for (let r = 0; r < c.length; r++) {
                  Pi(e, s, t, n, i, !1, a, c[r]);
                  for (let o = r + 1; o < c.length; o++) Bi(e, s, t, n, i, !1, c[r], c[o])
                }
              return s
            }(e, i, t, n, e.getParentType(), r);
            for (const [
                [t, n], i, r
              ] of o) {
              const o = Mi(n);
              e.reportError(new h(`Fields "${t}" conflict because ${o}. Use different aliases on the fields to fetch both if this was intentional.`, {
                nodes: i.concat(r)
              }))
            }
          }
        }
      }

      function Pi(e, t, n, i, r, o, s, a) {
        if (i.has(s, a, o)) return;
        i.add(s, a, o);
        const c = e.getFragment(a);
        if (!c) return;
        const [u, l] = Ki(e, n, c);
        if (s !== u) {
          Gi(e, t, n, i, r, o, s, u);
          for (const a of l) Pi(e, t, n, i, r, o, s, a)
        }
      }

      function Bi(e, t, n, i, r, o, s, a) {
        if (s === a) return;
        if (r.has(s, a, o)) return;
        r.add(s, a, o);
        const c = e.getFragment(s),
          u = e.getFragment(a);
        if (!c || !u) return;
        const [l, p] = Ki(e, n, c), [d, f] = Ki(e, n, u);
        Gi(e, t, n, i, r, o, l, d);
        for (const a of f) Bi(e, t, n, i, r, o, s, a);
        for (const s of p) Bi(e, t, n, i, r, o, s, a)
      }

      function Gi(e, t, n, i, r, o, s, a) {
        for (const [c, u] of Object.entries(s)) {
          const s = a[c];
          if (s)
            for (const a of u)
              for (const u of s) {
                const s = Yi(e, n, i, r, o, c, a, u);
                s && t.push(s)
              }
        }
      }

      function Yi(e, t, n, i, r, o, s, a) {
        const [c, u, l] = s, [p, d, f] = a, h = r || c !== p && Ze(c) && Ze(p);
        if (!h) {
          const e = u.name.value,
            t = d.name.value;
          if (e !== t) return [
            [o, `"${e}" and "${t}" are different fields`],
            [u],
            [d]
          ];
          if (! function(e, t) {
              const n = e.arguments,
                i = t.arguments;
              if (void 0 === n || 0 === n.length) return void 0 === i || 0 === i.length;
              if (void 0 === i || 0 === i.length) return !1;
              if (n.length !== i.length) return !1;
              const r = new Map(i.map((({
                name: e,
                value: t
              }) => [e.value, t])));
              return n.every((e => {
                const t = e.value,
                  n = r.get(e.name.value);
                return void 0 !== n && Qi(t) === Qi(n)
              }))
            }(u, d)) return [
            [o, "they have differing arguments"],
            [u],
            [d]
          ]
        }
        const m = null == l ? void 0 : l.type,
          y = null == f ? void 0 : f.type;
        if (m && y && qi(m, y)) return [
          [o, `they return conflicting types "${oe(m)}" and "${oe(y)}"`],
          [u],
          [d]
        ];
        const v = u.selectionSet,
          E = d.selectionSet;
        if (v && E) {
          const r = function(e, t, n, i, r, o, s, a, c) {
            const u = [],
              [l, p] = Ji(e, t, o, s),
              [d, f] = Ji(e, t, a, c);
            Gi(e, u, t, n, i, r, l, d);
            for (const o of f) Pi(e, u, t, n, i, r, l, o);
            for (const o of p) Pi(e, u, t, n, i, r, d, o);
            for (const o of p)
              for (const s of f) Bi(e, u, t, n, i, r, o, s);
            return u
          }(e, t, n, i, h, kt(m), v, kt(y), E);
          return function(e, t, n, i) {
            if (e.length > 0) return [
              [t, e.map((([e]) => e))],
              [n, ...e.map((([, e]) => e)).flat()],
              [i, ...e.map((([, , e]) => e)).flat()]
            ]
          }(r, o, u, d)
        }
      }

      function Qi(e) {
        return Me(Ui(e))
      }

      function qi(e, t) {
        return ut(e) ? !ut(t) || qi(e.ofType, t.ofType) : !!ut(t) || (pt(e) ? !pt(t) || qi(e.ofType, t.ofType) : !!pt(t) || !(!vt(e) && !vt(t)) && e !== t)
      }

      function Ji(e, t, n, i) {
        const r = t.get(i);
        if (r) return r;
        const o = Object.create(null),
          s = Object.create(null);
        Xi(e, n, i, o, s);
        const a = [o, Object.keys(s)];
        return t.set(i, a), a
      }

      function Ki(e, t, n) {
        const i = t.get(n.selectionSet);
        if (i) return i;
        const r = ai(e.getSchema(), n.typeCondition);
        return Ji(e, t, r, n.selectionSet)
      }

      function Xi(e, t, n, i, r) {
        for (const o of n.selections) switch (o.kind) {
          case D.FIELD: {
            const e = o.name.value;
            let n;
            (Ze(t) || tt(t)) && (n = t.getFields()[e]);
            const r = o.alias ? o.alias.value : e;
            i[r] || (i[r] = []), i[r].push([t, o, n]);
            break
          }
          case D.FRAGMENT_SPREAD:
            r[o.name.value] = !0;
            break;
          case D.INLINE_FRAGMENT: {
            const n = o.typeCondition,
              s = n ? ai(e.getSchema(), n) : t;
            Xi(e, s, o.selectionSet, i, r);
            break
          }
        }
      }
      class zi {
        constructor() {
          this._data = new Map
        }
        has(e, t, n) {
          var i;
          const r = null === (i = this._data.get(e)) || void 0 === i ? void 0 : i.get(t);
          return void 0 !== r && (!!n || n === r)
        }
        add(e, t, n) {
          const i = this._data.get(e);
          void 0 === i ? this._data.set(e, new Map([
            [t, n]
          ])) : i.set(t, n)
        }
      }
      class Hi {
        constructor() {
          this._orderedPairSet = new zi
        }
        has(e, t, n) {
          return e < t ? this._orderedPairSet.has(e, t, n) : this._orderedPairSet.has(t, e, n)
        }
        add(e, t, n) {
          e < t ? this._orderedPairSet.add(e, t, n) : this._orderedPairSet.add(t, e, n)
        }
      }

      function Wi(e) {
        return {
          InlineFragment(t) {
            const n = e.getType(),
              i = e.getParentType();
            if (Tt(n) && Tt(i) && !tn(e.getSchema(), n, i)) {
              const r = oe(i),
                o = oe(n);
              e.reportError(new h(`Fragment cannot be spread here as objects of type "${r}" can never be of type "${o}".`, {
                nodes: t
              }))
            }
          },
          FragmentSpread(t) {
            const n = t.name.value,
              i = function(e, t) {
                const n = e.getFragment(t);
                if (n) {
                  const t = ai(e.getSchema(), n.typeCondition);
                  if (Tt(t)) return t
                }
              }(e, n),
              r = e.getParentType();
            if (i && r && !tn(e.getSchema(), i, r)) {
              const o = oe(r),
                s = oe(i);
              e.reportError(new h(`Fragment "${n}" cannot be spread here as objects of type "${o}" can never be of type "${s}".`, {
                nodes: t
              }))
            }
          }
        }
      }

      function Zi(e) {
        const t = e.getSchema(),
          n = Object.create(null);
        for (const t of e.getDocument().definitions) Ei(t) && (n[t.name.value] = t);
        return {
          ScalarTypeExtension: i,
          ObjectTypeExtension: i,
          InterfaceTypeExtension: i,
          UnionTypeExtension: i,
          EnumTypeExtension: i,
          InputObjectTypeExtension: i
        };

        function i(i) {
          const r = i.name.value,
            o = n[r],
            s = null == t ? void 0 : t.getType(r);
          let a;
          if (o ? a = er[o.kind] : s && (a = He(u = s) ? D.SCALAR_TYPE_EXTENSION : Ze(u) ? D.OBJECT_TYPE_EXTENSION : tt(u) ? D.INTERFACE_TYPE_EXTENSION : it(u) ? D.UNION_TYPE_EXTENSION : ot(u) ? D.ENUM_TYPE_EXTENSION : at(u) ? D.INPUT_OBJECT_TYPE_EXTENSION : void c(!1, "Unexpected type: " + oe(u))), a) {
            if (a !== i.kind) {
              const t = function(e) {
                switch (e) {
                  case D.SCALAR_TYPE_EXTENSION:
                    return "scalar";
                  case D.OBJECT_TYPE_EXTENSION:
                    return "object";
                  case D.INTERFACE_TYPE_EXTENSION:
                    return "interface";
                  case D.UNION_TYPE_EXTENSION:
                    return "union";
                  case D.ENUM_TYPE_EXTENSION:
                    return "enum";
                  case D.INPUT_OBJECT_TYPE_EXTENSION:
                    return "input object";
                  default:
                    c(!1, "Unexpected kind: " + oe(e))
                }
              }(i.kind);
              e.reportError(new h(`Cannot extend non-${t} type "${r}".`, {
                nodes: o ? [o, i] : i
              }))
            }
          } else {
            const o = Ae(r, Object.keys({
              ...n,
              ...null == t ? void 0 : t.getTypeMap()
            }));
            e.reportError(new h(`Cannot extend type "${r}" because it is not defined.` + Ee(o), {
              nodes: i.name
            }))
          }
          var u
        }
      }
      const er = {
        [D.SCALAR_TYPE_DEFINITION]: D.SCALAR_TYPE_EXTENSION,
        [D.OBJECT_TYPE_DEFINITION]: D.OBJECT_TYPE_EXTENSION,
        [D.INTERFACE_TYPE_DEFINITION]: D.INTERFACE_TYPE_EXTENSION,
        [D.UNION_TYPE_DEFINITION]: D.UNION_TYPE_EXTENSION,
        [D.ENUM_TYPE_DEFINITION]: D.ENUM_TYPE_EXTENSION,
        [D.INPUT_OBJECT_TYPE_DEFINITION]: D.INPUT_OBJECT_TYPE_EXTENSION
      };

      function tr(e) {
        return {
          ...nr(e),
          Field: {
            leave(t) {
              var n;
              const i = e.getFieldDef();
              if (!i) return !1;
              const r = new Set(null === (n = t.arguments) || void 0 === n ? void 0 : n.map((e => e.name.value)));
              for (const n of i.args)
                if (!r.has(n.name) && Gt(n)) {
                  const r = oe(n.type);
                  e.reportError(new h(`Field "${i.name}" argument "${n.name}" of type "${r}" is required, but it was not provided.`, {
                    nodes: t
                  }))
                }
            }
          }
        }
      }

      function nr(e) {
        var t;
        const n = Object.create(null),
          i = e.getSchema(),
          r = null !== (t = null == i ? void 0 : i.getDirectives()) && void 0 !== t ? t : In;
        for (const e of r) n[e.name] = Ne(e.args.filter(Gt), (e => e.name));
        const o = e.getDocument().definitions;
        for (const e of o)
          if (e.kind === D.DIRECTIVE_DEFINITION) {
            var s;
            const t = null !== (s = e.arguments) && void 0 !== s ? s : [];
            n[e.name.value] = Ne(t.filter(ir), (e => e.name.value))
          } return {
          Directive: {
            leave(t) {
              const i = t.name.value,
                r = n[i];
              if (r) {
                var o;
                const n = null !== (o = t.arguments) && void 0 !== o ? o : [],
                  s = new Set(n.map((e => e.name.value)));
                for (const [n, o] of Object.entries(r))
                  if (!s.has(n)) {
                    const r = Xe(o.type) ? oe(o.type) : Me(o.type);
                    e.reportError(new h(`Directive "@${i}" argument "${n}" of type "${r}" is required, but it was not provided.`, {
                      nodes: t
                    }))
                  }
              }
            }
          }
        }
      }

      function ir(e) {
        return e.type.kind === D.NON_NULL_TYPE && null == e.defaultValue
      }

      function rr(e) {
        return {
          Field(t) {
            const n = e.getType(),
              i = t.selectionSet;
            if (n)
              if (vt(kt(n))) {
                if (i) {
                  const r = t.name.value,
                    o = oe(n);
                  e.reportError(new h(`Field "${r}" must not have a selection since type "${o}" has no subfields.`, {
                    nodes: i
                  }))
                }
              } else if (i) {
              if (0 === i.selections.length) {
                const i = t.name.value,
                  r = oe(n);
                e.reportError(new h(`Field "${i}" of type "${r}" must have at least one field selected.`, {
                  nodes: t
                }))
              }
            } else {
              const i = t.name.value,
                r = oe(n);
              e.reportError(new h(`Field "${i}" of type "${r}" must have a selection of subfields. Did you mean "${i} { ... }"?`, {
                nodes: t
              }))
            }
          }
        }
      }

      function or(e) {
        return e.map((e => "number" == typeof e ? "[" + e.toString() + "]" : "." + e)).join("")
      }

      function sr(e, t, n) {
        return {
          prev: e,
          key: t,
          typename: n
        }
      }

      function ar(e) {
        const t = [];
        let n = e;
        for (; n;) t.push(n.key), n = n.prev;
        return t.reverse()
      }

      function cr(e, t, n = ur) {
        return lr(e, t, n, void 0)
      }

      function ur(e, t, n) {
        let i = "Invalid value " + oe(t);
        throw e.length > 0 && (i += ` at "value${or(e)}"`), n.message = i + ": " + n.message, n
      }

      function lr(e, t, n, i) {
        if (pt(t)) return null != e ? lr(e, t.ofType, n, i) : void n(ar(i), e, new h(`Expected non-nullable type "${oe(t)}" not to be null.`));
        if (null == e) return null;
        if (ut(t)) {
          const r = t.ofType;
          return bn(e) ? Array.from(e, ((e, t) => {
            const o = sr(i, t, void 0);
            return lr(e, r, n, o)
          })) : [lr(e, r, n, i)]
        }
        if (at(t)) {
          if (!a(e) || Array.isArray(e)) return void n(ar(i), e, new h(`Expected type "${t.name}" to be an object.`));
          const r = {},
            o = t.getFields();
          for (const s of Object.values(o)) {
            const o = e[s.name];
            if (void 0 !== o) r[s.name] = lr(o, s.type, n, sr(i, s.name, t.name));
            else if (void 0 !== s.defaultValue) r[s.name] = s.defaultValue;
            else if (pt(s.type)) {
              const t = oe(s.type);
              n(ar(i), e, new h(`Field "${s.name}" of required type "${t}" was not provided.`))
            }
          }
          for (const r of Object.keys(e))
            if (!o[r]) {
              const o = Ae(r, Object.keys(t.getFields()));
              n(ar(i), e, new h(`Field "${r}" is not defined by type "${t.name}".` + Ee(o)))
            } if (t.isOneOf) {
            const o = Object.keys(r);
            1 !== o.length && n(ar(i), e, new h(`Exactly one key must be specified for OneOf type "${t.name}".`));
            const s = o[0],
              a = r[s];
            null === a && n(ar(i).concat(s), a, new h(`Field "${s}" must be non-null.`))
          }
          return r
        }
        if (vt(t)) {
          let r;
          try {
            r = t.parseValue(e)
          } catch (r) {
            return void n(ar(i), e, r instanceof h ? r : new h(`Expected type "${t.name}". ` + r.message, {
              originalError: r
            }))
          }
          return void 0 === r && n(ar(i), e, new h(`Expected type "${t.name}".`)), r
        }
        c(!1, "Unexpected input type: " + oe(t))
      }

      function pr(e, t, n) {
        if (e) {
          if (e.kind === D.VARIABLE) {
            const i = e.name.value;
            if (null == n || void 0 === n[i]) return;
            const r = n[i];
            if (null === r && pt(t)) return;
            return r
          }
          if (pt(t)) {
            if (e.kind === D.NULL) return;
            return pr(e, t.ofType, n)
          }
          if (e.kind === D.NULL) return null;
          if (ut(t)) {
            const i = t.ofType;
            if (e.kind === D.LIST) {
              const t = [];
              for (const r of e.values)
                if (dr(r, n)) {
                  if (pt(i)) return;
                  t.push(null)
                } else {
                  const e = pr(r, i, n);
                  if (void 0 === e) return;
                  t.push(e)
                } return t
            }
            const r = pr(e, i, n);
            if (void 0 === r) return;
            return [r]
          }
          if (at(t)) {
            if (e.kind !== D.OBJECT) return;
            const i = Object.create(null),
              r = Ne(e.fields, (e => e.name.value));
            for (const e of Object.values(t.getFields())) {
              const t = r[e.name];
              if (!t || dr(t.value, n)) {
                if (void 0 !== e.defaultValue) i[e.name] = e.defaultValue;
                else if (pt(e.type)) return;
                continue
              }
              const o = pr(t.value, e.type, n);
              if (void 0 === o) return;
              i[e.name] = o
            }
            if (t.isOneOf) {
              const e = Object.keys(i);
              if (1 !== e.length) return;
              if (null === i[e[0]]) return
            }
            return i
          }
          if (vt(t)) {
            let i;
            try {
              i = t.parseLiteral(e, n)
            } catch (e) {
              return
            }
            if (void 0 === i) return;
            return i
          }
          c(!1, "Unexpected input type: " + oe(t))
        }
      }

      function dr(e, t) {
        return e.kind === D.VARIABLE && (null == t || void 0 === t[e.name.value])
      }

      function fr(e, t, n, i) {
        const r = [],
          o = null == i ? void 0 : i.maxErrors;
        try {
          const i = function(e, t, n, i) {
            const r = {};
            for (const o of t) {
              const t = o.variable.name.value,
                s = ai(e, o.type);
              if (!ft(s)) {
                const e = Me(o.type);
                i(new h(`Variable "$${t}" expected value of type "${e}" which cannot be used as an input type.`, {
                  nodes: o.type
                }));
                continue
              }
              if (!yr(n, t)) {
                if (o.defaultValue) r[t] = pr(o.defaultValue, s);
                else if (pt(s)) {
                  const e = oe(s);
                  i(new h(`Variable "$${t}" of required type "${e}" was not provided.`, {
                    nodes: o
                  }))
                }
                continue
              }
              const a = n[t];
              if (null === a && pt(s)) {
                const e = oe(s);
                i(new h(`Variable "$${t}" of non-null type "${e}" must not be null.`, {
                  nodes: o
                }))
              } else r[t] = cr(a, s, ((e, n, r) => {
                let s = `Variable "$${t}" got invalid value ` + oe(n);
                e.length > 0 && (s += ` at "${t}${or(e)}"`), i(new h(s + "; " + r.message, {
                  nodes: o,
                  originalError: r
                }))
              }))
            }
            return r
          }(e, t, n, (e => {
            if (null != o && r.length >= o) throw new h("Too many errors processing variables, error limit reached. Execution aborted.");
            r.push(e)
          }));
          if (0 === r.length) return {
            coerced: i
          }
        } catch (e) {
          r.push(e)
        }
        return {
          errors: r
        }
      }

      function hr(e, t, n) {
        var i;
        const r = {},
          o = Ne(null !== (i = t.arguments) && void 0 !== i ? i : [], (e => e.name.value));
        for (const i of e.args) {
          const e = i.name,
            s = i.type,
            a = o[e];
          if (!a) {
            if (void 0 !== i.defaultValue) r[e] = i.defaultValue;
            else if (pt(s)) throw new h(`Argument "${e}" of required type "${oe(s)}" was not provided.`, {
              nodes: t
            });
            continue
          }
          const c = a.value;
          let u = c.kind === D.NULL;
          if (c.kind === D.VARIABLE) {
            const t = c.name.value;
            if (null == n || !yr(n, t)) {
              if (void 0 !== i.defaultValue) r[e] = i.defaultValue;
              else if (pt(s)) throw new h(`Argument "${e}" of required type "${oe(s)}" was provided the variable "$${t}" which was not provided a runtime value.`, {
                nodes: c
              });
              continue
            }
            u = null == n[t]
          }
          if (u && pt(s)) throw new h(`Argument "${e}" of non-null type "${oe(s)}" must not be null.`, {
            nodes: c
          });
          const l = pr(c, s, n);
          if (void 0 === l) throw new h(`Argument "${e}" has invalid value ${Me(c)}.`, {
            nodes: c
          });
          r[e] = l
        }
        return r
      }

      function mr(e, t, n) {
        var i;
        const r = null === (i = t.directives) || void 0 === i ? void 0 : i.find((t => t.name.value === e.name));
        if (r) return hr(e, r, n)
      }

      function yr(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }

      function vr(e, t, n, i, r) {
        const o = new Map;
        return Er(e, t, n, i, r, o, new Set), o
      }

      function Er(e, t, n, i, r, o, s) {
        for (const c of r.selections) switch (c.kind) {
          case D.FIELD: {
            if (!Tr(n, c)) continue;
            const e = (a = c).alias ? a.alias.value : a.name.value,
              t = o.get(e);
            void 0 !== t ? t.push(c) : o.set(e, [c]);
            break
          }
          case D.INLINE_FRAGMENT:
            if (!Tr(n, c) || !Nr(e, c, i)) continue;
            Er(e, t, n, i, c.selectionSet, o, s);
            break;
          case D.FRAGMENT_SPREAD: {
            const r = c.name.value;
            if (s.has(r) || !Tr(n, c)) continue;
            s.add(r);
            const a = t[r];
            if (!a || !Nr(e, a, i)) continue;
            Er(e, t, n, i, a.selectionSet, o, s);
            break
          }
        }
        var a
      }

      function Tr(e, t) {
        const n = mr(vn, t, e);
        if (!0 === (null == n ? void 0 : n.if)) return !1;
        const i = mr(yn, t, e);
        return !1 !== (null == i ? void 0 : i.if)
      }

      function Nr(e, t, n) {
        const i = t.typeCondition;
        if (!i) return !0;
        const r = ai(e, i);
        return r === n || !!gt(r) && e.isSubType(r, n)
      }

      function gr(e) {
        return {
          OperationDefinition(t) {
            if ("subscription" === t.operation) {
              const n = e.getSchema(),
                i = n.getSubscriptionType();
              if (i) {
                const r = t.name ? t.name.value : null,
                  o = Object.create(null),
                  s = e.getDocument(),
                  a = Object.create(null);
                for (const e of s.definitions) e.kind === D.FRAGMENT_DEFINITION && (a[e.name.value] = e);
                const c = vr(n, a, o, i, t.selectionSet);
                if (c.size > 1) {
                  const t = [...c.values()].slice(1).flat();
                  e.reportError(new h(null != r ? `Subscription "${r}" must select only one top level field.` : "Anonymous Subscription must select only one top level field.", {
                    nodes: t
                  }))
                }
                for (const t of c.values()) t[0].name.value.startsWith("__") && e.reportError(new h(null != r ? `Subscription "${r}" must not select an introspection top level field.` : "Anonymous Subscription must not select an introspection top level field.", {
                  nodes: t
                }))
              }
            }
          }
        }
      }

      function Ir(e, t) {
        const n = new Map;
        for (const i of e) {
          const e = t(i),
            r = n.get(e);
          void 0 === r ? n.set(e, [i]) : r.push(i)
        }
        return n
      }

      function _r(e) {
        return {
          DirectiveDefinition(e) {
            var t;
            const i = null !== (t = e.arguments) && void 0 !== t ? t : [];
            return n(`@${e.name.value}`, i)
          },
          InterfaceTypeDefinition: t,
          InterfaceTypeExtension: t,
          ObjectTypeDefinition: t,
          ObjectTypeExtension: t
        };

        function t(e) {
          var t;
          const i = e.name.value,
            r = null !== (t = e.fields) && void 0 !== t ? t : [];
          for (const e of r) {
            var o;
            n(`${i}.${e.name.value}`, null !== (o = e.arguments) && void 0 !== o ? o : [])
          }
          return !1
        }

        function n(t, n) {
          const i = Ir(n, (e => e.name.value));
          for (const [n, r] of i) r.length > 1 && e.reportError(new h(`Argument "${t}(${n}:)" can only be defined once.`, {
            nodes: r.map((e => e.name))
          }));
          return !1
        }
      }

      function br(e) {
        return {
          Field: t,
          Directive: t
        };

        function t(t) {
          var n;
          const i = Ir(null !== (n = t.arguments) && void 0 !== n ? n : [], (e => e.name.value));
          for (const [t, n] of i) n.length > 1 && e.reportError(new h(`There can be only one argument named "${t}".`, {
            nodes: n.map((e => e.name))
          }))
        }
      }

      function Or(e) {
        const t = Object.create(null),
          n = e.getSchema();
        return {
          DirectiveDefinition(i) {
            const r = i.name.value;
            if (null == n || !n.getDirective(r)) return t[r] ? e.reportError(new h(`There can be only one directive named "@${r}".`, {
              nodes: [t[r], i.name]
            })) : t[r] = i.name, !1;
            e.reportError(new h(`Directive "@${r}" already exists in the schema. It cannot be redefined.`, {
              nodes: i.name
            }))
          }
        }
      }

      function Dr(e) {
        const t = Object.create(null),
          n = e.getSchema(),
          i = n ? n.getDirectives() : In;
        for (const e of i) t[e.name] = !e.isRepeatable;
        const r = e.getDocument().definitions;
        for (const e of r) e.kind === D.DIRECTIVE_DEFINITION && (t[e.name.value] = !e.repeatable);
        const o = Object.create(null),
          s = Object.create(null);
        return {
          enter(n) {
            if (!("directives" in n) || !n.directives) return;
            let i;
            if (n.kind === D.SCHEMA_DEFINITION || n.kind === D.SCHEMA_EXTENSION) i = o;
            else if (Ei(n) || Ni(n)) {
              const e = n.name.value;
              i = s[e], void 0 === i && (s[e] = i = Object.create(null))
            } else i = Object.create(null);
            for (const r of n.directives) {
              const n = r.name.value;
              t[n] && (i[n] ? e.reportError(new h(`The directive "@${n}" can only be used once at this location.`, {
                nodes: [i[n], r]
              })) : i[n] = r)
            }
          }
        }
      }

      function Ar(e) {
        const t = e.getSchema(),
          n = t ? t.getTypeMap() : Object.create(null),
          i = Object.create(null);
        return {
          EnumTypeDefinition: r,
          EnumTypeExtension: r
        };

        function r(t) {
          var r;
          const o = t.name.value;
          i[o] || (i[o] = Object.create(null));
          const s = null !== (r = t.values) && void 0 !== r ? r : [],
            a = i[o];
          for (const t of s) {
            const i = t.name.value,
              r = n[o];
            ot(r) && r.getValue(i) ? e.reportError(new h(`Enum value "${o}.${i}" already exists in the schema. It cannot also be defined in this type extension.`, {
              nodes: t.name
            })) : a[i] ? e.reportError(new h(`Enum value "${o}.${i}" can only be defined once.`, {
              nodes: [a[i], t.name]
            })) : a[i] = t.name
          }
          return !1
        }
      }

      function Sr(e) {
        const t = e.getSchema(),
          n = t ? t.getTypeMap() : Object.create(null),
          i = Object.create(null);
        return {
          InputObjectTypeDefinition: r,
          InputObjectTypeExtension: r,
          InterfaceTypeDefinition: r,
          InterfaceTypeExtension: r,
          ObjectTypeDefinition: r,
          ObjectTypeExtension: r
        };

        function r(t) {
          var r;
          const o = t.name.value;
          i[o] || (i[o] = Object.create(null));
          const s = null !== (r = t.fields) && void 0 !== r ? r : [],
            a = i[o];
          for (const t of s) {
            const i = t.name.value;
            wr(n[o], i) ? e.reportError(new h(`Field "${o}.${i}" already exists in the schema. It cannot also be defined in this type extension.`, {
              nodes: t.name
            })) : a[i] ? e.reportError(new h(`Field "${o}.${i}" can only be defined once.`, {
              nodes: [a[i], t.name]
            })) : a[i] = t.name
          }
          return !1
        }
      }

      function wr(e, t) {
        return !!(Ze(e) || tt(e) || at(e)) && null != e.getFields()[t]
      }

      function Rr(e) {
        const t = Object.create(null);
        return {
          OperationDefinition: () => !1,
          FragmentDefinition(n) {
            const i = n.name.value;
            return t[i] ? e.reportError(new h(`There can be only one fragment named "${i}".`, {
              nodes: [t[i], n.name]
            })) : t[i] = n.name, !1
          }
        }
      }

      function Lr(e) {
        const t = [];
        let n = Object.create(null);
        return {
          ObjectValue: {
            enter() {
              t.push(n), n = Object.create(null)
            },
            leave() {
              const e = t.pop();
              e || c(!1), n = e
            }
          },
          ObjectField(t) {
            const i = t.name.value;
            n[i] ? e.reportError(new h(`There can be only one input field named "${i}".`, {
              nodes: [n[i], t.name]
            })) : n[i] = t.name
          }
        }
      }

      function kr(e) {
        const t = Object.create(null);
        return {
          OperationDefinition(n) {
            const i = n.name;
            return i && (t[i.value] ? e.reportError(new h(`There can be only one operation named "${i.value}".`, {
              nodes: [t[i.value], i]
            })) : t[i.value] = i), !1
          },
          FragmentDefinition: () => !1
        }
      }

      function $r(e) {
        const t = e.getSchema(),
          n = Object.create(null),
          i = t ? {
            query: t.getQueryType(),
            mutation: t.getMutationType(),
            subscription: t.getSubscriptionType()
          } : {};
        return {
          SchemaDefinition: r,
          SchemaExtension: r
        };

        function r(t) {
          var r;
          const o = null !== (r = t.operationTypes) && void 0 !== r ? r : [];
          for (const t of o) {
            const r = t.operation,
              o = n[r];
            i[r] ? e.reportError(new h(`Type for ${r} already defined in the schema. It cannot be redefined.`, {
              nodes: t
            })) : o ? e.reportError(new h(`There can be only one ${r} type in schema.`, {
              nodes: [o, t]
            })) : n[r] = t
          }
          return !1
        }
      }

      function xr(e) {
        const t = Object.create(null),
          n = e.getSchema();
        return {
          ScalarTypeDefinition: i,
          ObjectTypeDefinition: i,
          InterfaceTypeDefinition: i,
          UnionTypeDefinition: i,
          EnumTypeDefinition: i,
          InputObjectTypeDefinition: i
        };

        function i(i) {
          const r = i.name.value;
          if (null == n || !n.getType(r)) return t[r] ? e.reportError(new h(`There can be only one type named "${r}".`, {
            nodes: [t[r], i.name]
          })) : t[r] = i.name, !1;
          e.reportError(new h(`Type "${r}" already exists in the schema. It cannot also be defined in this type definition.`, {
            nodes: i.name
          }))
        }
      }

      function Fr(e) {
        return {
          OperationDefinition(t) {
            var n;
            const i = Ir(null !== (n = t.variableDefinitions) && void 0 !== n ? n : [], (e => e.variable.name.value));
            for (const [t, n] of i) n.length > 1 && e.reportError(new h(`There can be only one variable named "$${t}".`, {
              nodes: n.map((e => e.variable.name))
            }))
          }
        }
      }

      function Cr(e) {
        let t = {};
        return {
          OperationDefinition: {
            enter() {
              t = {}
            }
          },
          VariableDefinition(e) {
            t[e.variable.name.value] = e
          },
          ListValue(t) {
            if (!ut(wt(e.getParentInputType()))) return Vr(e, t), !1
          },
          ObjectValue(n) {
            const i = kt(e.getInputType());
            if (!at(i)) return Vr(e, n), !1;
            const r = Ne(n.fields, (e => e.name.value));
            for (const t of Object.values(i.getFields()))
              if (!r[t.name] && Wt(t)) {
                const r = oe(t.type);
                e.reportError(new h(`Field "${i.name}.${t.name}" of required type "${r}" was not provided.`, {
                  nodes: n
                }))
              } i.isOneOf && function(e, t, n, i, r) {
              var o;
              const s = Object.keys(i);
              if (1 !== s.length) return void e.reportError(new h(`OneOf Input Object "${n.name}" must specify exactly one key.`, {
                nodes: [t]
              }));
              const a = null === (o = i[s[0]]) || void 0 === o ? void 0 : o.value,
                c = !a || a.kind === D.NULL,
                u = (null == a ? void 0 : a.kind) === D.VARIABLE;
              if (c) e.reportError(new h(`Field "${n.name}.${s[0]}" must be non-null.`, {
                nodes: [t]
              }));
              else if (u) {
                const i = a.name.value;
                r[i].type.kind !== D.NON_NULL_TYPE && e.reportError(new h(`Variable "${i}" must be non-nullable to be used for OneOf Input Object "${n.name}".`, {
                  nodes: [t]
                }))
              }
            }(e, n, i, r, t)
          },
          ObjectField(t) {
            const n = kt(e.getParentInputType());
            if (!e.getInputType() && at(n)) {
              const i = Ae(t.name.value, Object.keys(n.getFields()));
              e.reportError(new h(`Field "${t.name.value}" is not defined by type "${n.name}".` + Ee(i), {
                nodes: t
              }))
            }
          },
          NullValue(t) {
            const n = e.getInputType();
            pt(n) && e.reportError(new h(`Expected value of type "${oe(n)}", found ${Me(t)}.`, {
              nodes: t
            }))
          },
          EnumValue: t => Vr(e, t),
          IntValue: t => Vr(e, t),
          FloatValue: t => Vr(e, t),
          StringValue: t => Vr(e, t),
          BooleanValue: t => Vr(e, t)
        }
      }

      function Vr(e, t) {
        const n = e.getInputType();
        if (!n) return;
        const i = kt(n);
        if (vt(i)) try {
          if (void 0 === i.parseLiteral(t, void 0)) {
            const i = oe(n);
            e.reportError(new h(`Expected value of type "${i}", found ${Me(t)}.`, {
              nodes: t
            }))
          }
        } catch (i) {
          const r = oe(n);
          i instanceof h ? e.reportError(i) : e.reportError(new h(`Expected value of type "${r}", found ${Me(t)}; ` + i.message, {
            nodes: t,
            originalError: i
          }))
        } else {
          const i = oe(n);
          e.reportError(new h(`Expected value of type "${i}", found ${Me(t)}.`, {
            nodes: t
          }))
        }
      }

      function Ur(e) {
        return {
          VariableDefinition(t) {
            const n = ai(e.getSchema(), t.type);
            if (void 0 !== n && !ft(n)) {
              const n = t.variable.name.value,
                i = Me(t.type);
              e.reportError(new h(`Variable "$${n}" cannot be non-input type "${i}".`, {
                nodes: t.type
              }))
            }
          }
        }
      }

      function Mr(e) {
        let t = Object.create(null);
        return {
          OperationDefinition: {
            enter() {
              t = Object.create(null)
            },
            leave(n) {
              const i = e.getRecursiveVariableUsages(n);
              for (const {
                  node: n,
                  type: r,
                  defaultValue: o,
                  parentType: s
                }
                of i) {
                const i = n.name.value,
                  a = t[i];
                if (a && r) {
                  const t = e.getSchema(),
                    c = ai(t, a.type);
                  if (c && !jr(t, c, a.defaultValue, r, o)) {
                    const t = oe(c),
                      o = oe(r);
                    e.reportError(new h(`Variable "$${i}" of type "${t}" used in position expecting type "${o}".`, {
                      nodes: [a, n]
                    }))
                  }
                  at(s) && s.isOneOf && At(c) && e.reportError(new h(`Variable "$${i}" is of type "${c}" but must be non-nullable to be used for OneOf Input Object "${s}".`, {
                    nodes: [a, n]
                  }))
                }
              }
            }
          },
          VariableDefinition(e) {
            t[e.variable.name.value] = e
          }
        }
      }

      function jr(e, t, n, i, r) {
        return pt(i) && !pt(t) ? (null != n && n.kind !== D.NULL || void 0 !== r) && en(e, t, i.ofType) : en(e, t, i)
      }
      const Pr = Object.freeze([$i]),
        Br = Object.freeze([gi, kr, Ri, gr, Si, _i, Ur, rr, Ii, Rr, Ai, Ci, Wi, xi, Fr, Fi, Vi, Di, Dr, bi, br, Cr, tr, Mr, ji, Lr, ...Pr]),
        Gr = Object.freeze([Li, $r, xr, Ar, Sr, _r, Or, Si, Di, Dr, Zi, Oi, br, Lr, nr]);
      class Yr {
        constructor(e, t) {
          this._ast = e, this._fragments = void 0, this._fragmentSpreads = new Map, this._recursivelyReferencedFragments = new Map, this._onError = t
        }
        get[Symbol.toStringTag]() {
          return "ASTValidationContext"
        }
        reportError(e) {
          this._onError(e)
        }
        getDocument() {
          return this._ast
        }
        getFragment(e) {
          let t;
          if (this._fragments) t = this._fragments;
          else {
            t = Object.create(null);
            for (const e of this.getDocument().definitions) e.kind === D.FRAGMENT_DEFINITION && (t[e.name.value] = e);
            this._fragments = t
          }
          return t[e]
        }
        getFragmentSpreads(e) {
          let t = this._fragmentSpreads.get(e);
          if (!t) {
            t = [];
            const n = [e];
            let i;
            for (; i = n.pop();)
              for (const e of i.selections) e.kind === D.FRAGMENT_SPREAD ? t.push(e) : e.selectionSet && n.push(e.selectionSet);
            this._fragmentSpreads.set(e, t)
          }
          return t
        }
        getRecursivelyReferencedFragments(e) {
          let t = this._recursivelyReferencedFragments.get(e);
          if (!t) {
            t = [];
            const n = Object.create(null),
              i = [e.selectionSet];
            let r;
            for (; r = i.pop();)
              for (const e of this.getFragmentSpreads(r)) {
                const r = e.name.value;
                if (!0 !== n[r]) {
                  n[r] = !0;
                  const e = this.getFragment(r);
                  e && (t.push(e), i.push(e.selectionSet))
                }
              }
            this._recursivelyReferencedFragments.set(e, t)
          }
          return t
        }
      }
      class Qr extends Yr {
        constructor(e, t, n) {
          super(e, n), this._schema = t
        }
        get[Symbol.toStringTag]() {
          return "SDLValidationContext"
        }
        getSchema() {
          return this._schema
        }
      }
      class qr extends Yr {
        constructor(e, t, n, i) {
          super(t, i), this._schema = e, this._typeInfo = n, this._variableUsages = new Map, this._recursiveVariableUsages = new Map
        }
        get[Symbol.toStringTag]() {
          return "ValidationContext"
        }
        getSchema() {
          return this._schema
        }
        getVariableUsages(e) {
          let t = this._variableUsages.get(e);
          if (!t) {
            const n = [],
              i = new ci(this._schema);
            Fe(e, li(i, {
              VariableDefinition: () => !1,
              Variable(e) {
                n.push({
                  node: e,
                  type: i.getInputType(),
                  defaultValue: i.getDefaultValue(),
                  parentType: i.getParentInputType()
                })
              }
            })), t = n, this._variableUsages.set(e, t)
          }
          return t
        }
        getRecursiveVariableUsages(e) {
          let t = this._recursiveVariableUsages.get(e);
          if (!t) {
            t = this.getVariableUsages(e);
            for (const n of this.getRecursivelyReferencedFragments(e)) t = t.concat(this.getVariableUsages(n));
            this._recursiveVariableUsages.set(e, t)
          }
          return t
        }
        getType() {
          return this._typeInfo.getType()
        }
        getParentType() {
          return this._typeInfo.getParentType()
        }
        getInputType() {
          return this._typeInfo.getInputType()
        }
        getParentInputType() {
          return this._typeInfo.getParentInputType()
        }
        getFieldDef() {
          return this._typeInfo.getFieldDef()
        }
        getDirective() {
          return this._typeInfo.getDirective()
        }
        getArgument() {
          return this._typeInfo.getArgument()
        }
        getEnumValue() {
          return this._typeInfo.getEnumValue()
        }
      }

      function Jr(e, t, n = Br, i, r = new ci(e)) {
        var s;
        const a = null !== (s = null == i ? void 0 : i.maxErrors) && void 0 !== s ? s : 100;
        t || o(!1, "Must provide document."), qn(e);
        const c = Object.freeze({}),
          u = [],
          l = new qr(e, t, r, (e => {
            if (u.length >= a) throw u.push(new h("Too many validation errors, error limit reached. Validation aborted.")), c;
            u.push(e)
          })),
          p = Ce(n.map((e => e(l))));
        try {
          Fe(t, li(r, p))
        } catch (e) {
          if (e !== c) throw e
        }
        return u
      }

      function Kr(e, t, n = Gr) {
        const i = [],
          r = new Qr(e, t, (e => {
            i.push(e)
          }));
        return Fe(e, Ce(n.map((e => e(r))))), i
      }

      function Xr(e) {
        return Promise.all(Object.values(e)).then((t => {
          const n = Object.create(null);
          for (const [i, r] of Object.keys(e).entries()) n[r] = t[i];
          return n
        }))
      }
      class zr extends Error {
        constructor(e) {
          super("Unexpected error value: " + oe(e)), this.name = "NonErrorThrown", this.thrownValue = e
        }
      }

      function Hr(e, t, n) {
        var i;
        const r = (o = e) instanceof Error ? o : new zr(o);
        var o, s;
        return s = r, Array.isArray(s.path) ? r : new h(r.message, {
          nodes: null !== (i = r.nodes) && void 0 !== i ? i : t,
          source: r.source,
          positions: r.positions,
          path: n,
          originalError: r
        })
      }
      const Wr = function() {
        let e;
        return function(t, n, i) {
          void 0 === e && (e = new WeakMap);
          let r = e.get(t);
          void 0 === r && (r = new WeakMap, e.set(t, r));
          let o = r.get(n);
          void 0 === o && (o = new WeakMap, r.set(n, o));
          let s = o.get(i);
          return void 0 === s && (c = n, u = i, s = function(e, t, n, i, r) {
            const o = new Map,
              s = new Set;
            for (const a of r) a.selectionSet && Er(e, t, n, i, a.selectionSet, o, s);
            return o
          }((a = t).schema, a.fragments, a.variableValues, c, u), o.set(i, s)), s;
          var a, c, u
        }
      }();

      function Zr(e) {
        arguments.length < 2 || o(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
        const {
          schema: t,
          document: n,
          variableValues: i,
          rootValue: r
        } = e;
        no(t, n, i);
        const a = io(e);
        if (!("schema" in a)) return {
          errors: a
        };
        try {
          const {
            operation: e
          } = a, t = function(e, t, n) {
            const i = e.schema.getRootType(t.operation);
            if (null == i) throw new h(`Schema is not configured to execute ${t.operation} operation.`, {
              nodes: t
            });
            const r = vr(e.schema, e.fragments, e.variableValues, i, t.selectionSet),
              o = void 0;
            switch (t.operation) {
              case b.QUERY:
                return ro(e, i, n, o, r);
              case b.MUTATION:
                return function(e, t, n, i, r) {
                  return function(e, t) {
                    let n = Object.create(null);
                    for (const i of e) n = s(n) ? n.then((e => t(e, i))) : t(n, i);
                    return n
                  }(r.entries(), ((r, [o, a]) => {
                    const c = sr(i, o, t.name),
                      u = oo(e, t, n, a, c);
                    return void 0 === u ? r : s(u) ? u.then((e => (r[o] = e, r))) : (r[o] = u, r)
                  }))
                }(e, i, n, o, r);
              case b.SUBSCRIPTION:
                return ro(e, i, n, o, r)
            }
          }(a, e, r);
          return s(t) ? t.then((e => to(e, a.errors)), (e => (a.errors.push(e), to(null, a.errors)))) : to(t, a.errors)
        } catch (e) {
          return a.errors.push(e), to(null, a.errors)
        }
      }

      function eo(e) {
        const t = Zr(e);
        if (s(t)) throw new Error("GraphQL execution failed to complete synchronously.");
        return t
      }

      function to(e, t) {
        return 0 === t.length ? {
          data: e
        } : {
          errors: t,
          data: e
        }
      }

      function no(e, t, n) {
        t || o(!1, "Must provide document."), qn(e), null == n || a(n) || o(!1, "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.")
      }

      function io(e) {
        var t, n, i;
        const {
          schema: r,
          document: o,
          rootValue: s,
          contextValue: a,
          variableValues: c,
          operationName: u,
          fieldResolver: l,
          typeResolver: p,
          subscribeFieldResolver: d,
          options: f
        } = e;
        let m;
        const y = Object.create(null);
        for (const e of o.definitions) switch (e.kind) {
          case D.OPERATION_DEFINITION:
            if (null == u) {
              if (void 0 !== m) return [new h("Must provide operation name if query contains multiple operations.")];
              m = e
            } else(null === (t = e.name) || void 0 === t ? void 0 : t.value) === u && (m = e);
            break;
          case D.FRAGMENT_DEFINITION:
            y[e.name.value] = e
        }
        if (!m) return null != u ? [new h(`Unknown operation named "${u}".`)] : [new h("Must provide an operation.")];
        const v = fr(r, null !== (n = m.variableDefinitions) && void 0 !== n ? n : [], null != c ? c : {}, {
          maxErrors: null !== (i = null == f ? void 0 : f.maxCoercionErrors) && void 0 !== i ? i : 50
        });
        return v.errors ? v.errors : {
          schema: r,
          fragments: y,
          rootValue: s,
          contextValue: a,
          operation: m,
          variableValues: v.coerced,
          fieldResolver: null != l ? l : ho,
          typeResolver: null != p ? p : fo,
          subscribeFieldResolver: null != d ? d : ho,
          errors: []
        }
      }

      function ro(e, t, n, i, r) {
        const o = Object.create(null);
        let a = !1;
        try {
          for (const [c, u] of r.entries()) {
            const r = oo(e, t, n, u, sr(i, c, t.name));
            void 0 !== r && (o[c] = r, s(r) && (a = !0))
          }
        } catch (e) {
          if (a) return Xr(o).finally((() => {
            throw e
          }));
          throw e
        }
        return a ? Xr(o) : o
      }

      function oo(e, t, n, i, r) {
        var o;
        const a = mo(e.schema, t, i[0]);
        if (!a) return;
        const c = a.type,
          u = null !== (o = a.resolve) && void 0 !== o ? o : e.fieldResolver,
          l = so(e, a, i, t, r);
        try {
          const t = u(n, hr(a, i[0], e.variableValues), e.contextValue, l);
          let o;
          return o = s(t) ? t.then((t => co(e, c, i, l, r, t))) : co(e, c, i, l, r, t), s(o) ? o.then(void 0, (t => ao(Hr(t, i, ar(r)), c, e))) : o
        } catch (t) {
          return ao(Hr(t, i, ar(r)), c, e)
        }
      }

      function so(e, t, n, i, r) {
        return {
          fieldName: t.name,
          fieldNodes: n,
          returnType: t.type,
          parentType: i,
          path: r,
          schema: e.schema,
          fragments: e.fragments,
          rootValue: e.rootValue,
          operation: e.operation,
          variableValues: e.variableValues
        }
      }

      function ao(e, t, n) {
        if (pt(t)) throw e;
        return n.errors.push(e), null
      }

      function co(e, t, n, i, r, o) {
        if (o instanceof Error) throw o;
        if (pt(t)) {
          const s = co(e, t.ofType, n, i, r, o);
          if (null === s) throw new Error(`Cannot return null for non-nullable field ${i.parentType.name}.${i.fieldName}.`);
          return s
        }
        return null == o ? null : ut(t) ? function(e, t, n, i, r, o) {
          if (!bn(o)) throw new h(`Expected Iterable, but did not find one for field "${i.parentType.name}.${i.fieldName}".`);
          const a = t.ofType;
          let c = !1;
          const u = Array.from(o, ((t, o) => {
            const u = sr(r, o, void 0);
            try {
              let r;
              return r = s(t) ? t.then((t => co(e, a, n, i, u, t))) : co(e, a, n, i, u, t), s(r) ? (c = !0, r.then(void 0, (t => ao(Hr(t, n, ar(u)), a, e)))) : r
            } catch (t) {
              return ao(Hr(t, n, ar(u)), a, e)
            }
          }));
          return c ? Promise.all(u) : u
        }(e, t, n, i, r, o) : vt(t) ? function(e, t) {
          const n = e.serialize(t);
          if (null == n) throw new Error(`Expected \`${oe(e)}.serialize(${oe(t)})\` to return non-nullable value, returned: ${oe(n)}`);
          return n
        }(t, o) : gt(t) ? function(e, t, n, i, r, o) {
          var a;
          const c = null !== (a = t.resolveType) && void 0 !== a ? a : e.typeResolver,
            u = e.contextValue,
            l = c(o, u, i, t);
          return s(l) ? l.then((s => lo(e, uo(s, e, t, n, i, o), n, i, r, o))) : lo(e, uo(l, e, t, n, i, o), n, i, r, o)
        }(e, t, n, i, r, o) : Ze(t) ? lo(e, t, n, i, r, o) : void c(!1, "Cannot complete value of unexpected output type: " + oe(t))
      }

      function uo(e, t, n, i, r, o) {
        if (null == e) throw new h(`Abstract type "${n.name}" must resolve to an Object type at runtime for field "${r.parentType.name}.${r.fieldName}". Either the "${n.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`, i);
        if (Ze(e)) throw new h("Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.");
        if ("string" != typeof e) throw new h(`Abstract type "${n.name}" must resolve to an Object type at runtime for field "${r.parentType.name}.${r.fieldName}" with value ${oe(o)}, received "${oe(e)}".`);
        const s = t.schema.getType(e);
        if (null == s) throw new h(`Abstract type "${n.name}" was resolved to a type "${e}" that does not exist inside the schema.`, {
          nodes: i
        });
        if (!Ze(s)) throw new h(`Abstract type "${n.name}" was resolved to a non-object type "${e}".`, {
          nodes: i
        });
        if (!t.schema.isSubType(n, s)) throw new h(`Runtime Object type "${s.name}" is not a possible type for "${n.name}".`, {
          nodes: i
        });
        return s
      }

      function lo(e, t, n, i, r, o) {
        const a = Wr(e, t, n);
        if (t.isTypeOf) {
          const c = t.isTypeOf(o, e.contextValue, i);
          if (s(c)) return c.then((i => {
            if (!i) throw po(t, o, n);
            return ro(e, t, o, r, a)
          }));
          if (!c) throw po(t, o, n)
        }
        return ro(e, t, o, r, a)
      }

      function po(e, t, n) {
        return new h(`Expected value of type "${e.name}" but got: ${oe(t)}.`, {
          nodes: n
        })
      }
      const fo = function(e, t, n, i) {
          if (a(e) && "string" == typeof e.__typename) return e.__typename;
          const r = n.schema.getPossibleTypes(i),
            o = [];
          for (let i = 0; i < r.length; i++) {
            const a = r[i];
            if (a.isTypeOf) {
              const r = a.isTypeOf(e, t, n);
              if (s(r)) o[i] = r;
              else if (r) return a.name
            }
          }
          return o.length ? Promise.all(o).then((e => {
            for (let t = 0; t < e.length; t++)
              if (e[t]) return r[t].name
          })) : void 0
        },
        ho = function(e, t, n, i) {
          if (a(e) || "function" == typeof e) {
            const r = e[i.fieldName];
            return "function" == typeof r ? e[i.fieldName](t, n, i) : r
          }
        };

      function mo(e, t, n) {
        const i = n.name.value;
        return i === Cn.name && e.getQueryType() === t ? Cn : i === Vn.name && e.getQueryType() === t ? Vn : i === Un.name ? Un : t.getFields()[i]
      }

      function yo(e) {
        return new Promise((t => t(Eo(e))))
      }

      function vo(e) {
        const t = Eo(e);
        if (s(t)) throw new Error("GraphQL execution failed to complete synchronously.");
        return t
      }

      function Eo(e) {
        arguments.length < 2 || o(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
        const {
          schema: t,
          source: n,
          rootValue: i,
          contextValue: r,
          variableValues: s,
          operationName: a,
          fieldResolver: c,
          typeResolver: u
        } = e, l = Qn(t);
        if (l.length > 0) return {
          errors: l
        };
        let p;
        try {
          p = le(n)
        } catch (e) {
          return {
            errors: [e]
          }
        }
        const d = Jr(t, p);
        return d.length > 0 ? {
          errors: d
        } : Zr({
          schema: t,
          document: p,
          rootValue: i,
          contextValue: r,
          variableValues: s,
          operationName: a,
          fieldResolver: c,
          typeResolver: u
        })
      }

      function To(e) {
        return "function" == typeof(null == e ? void 0 : e[Symbol.asyncIterator])
      }
      async function No(e) {
        arguments.length < 2 || o(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
        const t = await go(e);
        return To(t) ? function(t) {
          const n = t[Symbol.asyncIterator]();
          async function i(t) {
            if (t.done) return t;
            try {
              return {
                value: await (i = t.value, Zr({
                  ...e,
                  rootValue: i
                })),
                done: !1
              }
            } catch (e) {
              if ("function" == typeof n.return) try {
                await n.return()
              } catch (e) {}
              throw e
            }
            var i
          }
          return {
            next: async () => i(await n.next()),
            return: async () => "function" == typeof n.return ? i(await n.return()) : {
              value: void 0,
              done: !0
            },
            async throw (e) {
              if ("function" == typeof n.throw) return i(await n.throw(e));
              throw e
            },
            [Symbol.asyncIterator]() {
              return this
            }
          }
        }(t) : t
      }
      async function go(...e) {
        const t = function(e) {
            const t = e[0];
            return t && "document" in t ? t : {
              schema: t,
              document: e[1],
              rootValue: e[2],
              contextValue: e[3],
              variableValues: e[4],
              operationName: e[5],
              subscribeFieldResolver: e[6]
            }
          }(e),
          {
            schema: n,
            document: i,
            variableValues: r
          } = t;
        no(n, i, r);
        const o = io(t);
        if (!("schema" in o)) return {
          errors: o
        };
        try {
          const e = await async function(e) {
            const {
              schema: t,
              fragments: n,
              operation: i,
              variableValues: r,
              rootValue: o
            } = e, s = t.getSubscriptionType();
            if (null == s) throw new h("Schema is not configured to execute subscription operation.", {
              nodes: i
            });
            const a = vr(t, n, r, s, i.selectionSet),
              [c, u] = [...a.entries()][0],
              l = mo(t, s, u[0]);
            if (!l) {
              const e = u[0].name.value;
              throw new h(`The subscription field "${e}" is not defined.`, {
                nodes: u
              })
            }
            const p = sr(void 0, c, s.name),
              d = so(e, l, u, s, p);
            try {
              var f;
              const t = hr(l, u[0], r),
                n = e.contextValue,
                i = null !== (f = l.subscribe) && void 0 !== f ? f : e.subscribeFieldResolver,
                s = await i(o, t, n, d);
              if (s instanceof Error) throw s;
              return s
            } catch (e) {
              throw Hr(e, u, ar(p))
            }
          }(o);
          if (!To(e)) throw new Error(`Subscription field must return Async Iterable. Received: ${oe(e)}.`);
          return e
        } catch (e) {
          if (e instanceof h) return {
            errors: [e]
          };
          throw e
        }
      }

      function Io(e) {
        return {
          Field(t) {
            const n = e.getFieldDef(),
              i = null == n ? void 0 : n.deprecationReason;
            if (n && null != i) {
              const r = e.getParentType();
              null != r || c(!1), e.reportError(new h(`The field ${r.name}.${n.name} is deprecated. ${i}`, {
                nodes: t
              }))
            }
          },
          Argument(t) {
            const n = e.getArgument(),
              i = null == n ? void 0 : n.deprecationReason;
            if (n && null != i) {
              const r = e.getDirective();
              if (null != r) e.reportError(new h(`Directive "@${r.name}" argument "${n.name}" is deprecated. ${i}`, {
                nodes: t
              }));
              else {
                const r = e.getParentType(),
                  o = e.getFieldDef();
                null != r && null != o || c(!1), e.reportError(new h(`Field "${r.name}.${o.name}" argument "${n.name}" is deprecated. ${i}`, {
                  nodes: t
                }))
              }
            }
          },
          ObjectField(t) {
            const n = kt(e.getParentInputType());
            if (at(n)) {
              const i = n.getFields()[t.name.value],
                r = null == i ? void 0 : i.deprecationReason;
              null != r && e.reportError(new h(`The input field ${n.name}.${i.name} is deprecated. ${r}`, {
                nodes: t
              }))
            }
          },
          EnumValue(t) {
            const n = e.getEnumValue(),
              i = null == n ? void 0 : n.deprecationReason;
            if (n && null != i) {
              const r = kt(e.getInputType());
              null != r || c(!1), e.reportError(new h(`The enum value "${r.name}.${n.name}" is deprecated. ${i}`, {
                nodes: t
              }))
            }
          }
        }
      }

      function _o(e) {
        return {
          Field(t) {
            const n = kt(e.getType());
            n && jn(n) && e.reportError(new h(`GraphQL introspection has been disabled, but the requested query contained the field "${t.name.value}".`, {
              nodes: t
            }))
          }
        }
      }

      function bo(e) {
        const t = {
            descriptions: !0,
            specifiedByUrl: !1,
            directiveIsRepeatable: !1,
            schemaDescription: !1,
            inputValueDeprecation: !1,
            oneOf: !1,
            ...e
          },
          n = t.descriptions ? "description" : "",
          i = t.specifiedByUrl ? "specifiedByURL" : "",
          r = t.directiveIsRepeatable ? "isRepeatable" : "",
          o = t.schemaDescription ? n : "";

        function s(e) {
          return t.inputValueDeprecation ? e : ""
        }
        const a = t.oneOf ? "isOneOf" : "";
        return `\n    query IntrospectionQuery {\n      __schema {\n        ${o}\n        queryType { name kind }\n        mutationType { name kind }\n        subscriptionType { name kind }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ${n}\n          ${r}\n          locations\n          args${s("(includeDeprecated: true)")} {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ${n}\n      ${i}\n      ${a}\n      fields(includeDeprecated: true) {\n        name\n        ${n}\n        args${s("(includeDeprecated: true)")} {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields${s("(includeDeprecated: true)")} {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ${n}\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ${n}\n      type { ...TypeRef }\n      defaultValue\n      ${s("isDeprecated")}\n      ${s("deprecationReason")}\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                    ofType {\n                      kind\n                      name\n                      ofType {\n                        kind\n                        name\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `
      }

      function Oo(e, t) {
        let n = null;
        for (const r of e.definitions) {
          var i;
          if (r.kind === D.OPERATION_DEFINITION)
            if (null == t) {
              if (n) return null;
              n = r
            } else if ((null === (i = r.name) || void 0 === i ? void 0 : i.value) === t) return r
        }
        return n
      }

      function Do(e, t) {
        if ("query" === t.operation) {
          const n = e.getQueryType();
          if (!n) throw new h("Schema does not define the required query root type.", {
            nodes: t
          });
          return n
        }
        if ("mutation" === t.operation) {
          const n = e.getMutationType();
          if (!n) throw new h("Schema is not configured for mutations.", {
            nodes: t
          });
          return n
        }
        if ("subscription" === t.operation) {
          const n = e.getSubscriptionType();
          if (!n) throw new h("Schema is not configured for subscriptions.", {
            nodes: t
          });
          return n
        }
        throw new h("Can only have query, mutation and subscription operations.", {
          nodes: t
        })
      }

      function Ao(e, t) {
        const n = eo({
          schema: e,
          document: le(bo({
            specifiedByUrl: !0,
            directiveIsRepeatable: !0,
            schemaDescription: !0,
            inputValueDeprecation: !0,
            oneOf: !0,
            ...t
          }))
        });
        return !n.errors && n.data || c(!1), n.data
      }

      function So(e, t) {
        a(e) && a(e.__schema) || o(!1, `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${oe(e)}.`);
        const n = e.__schema,
          i = ge(n.types, (e => e.name), (e => function(e) {
            if (null != e && null != e.name && null != e.kind) switch (e.kind) {
              case xn.SCALAR:
                return new Ft({
                  name: (i = e).name,
                  description: i.description,
                  specifiedByURL: i.specifiedByURL
                });
              case xn.OBJECT:
                return new Ct({
                  name: (n = e).name,
                  description: n.description,
                  interfaces: () => h(n),
                  fields: () => m(n)
                });
              case xn.INTERFACE:
                return new Yt({
                  name: (t = e).name,
                  description: t.description,
                  interfaces: () => h(t),
                  fields: () => m(t)
                });
              case xn.UNION:
                return function(e) {
                  if (!e.possibleTypes) {
                    const t = oe(e);
                    throw new Error(`Introspection result missing possibleTypes: ${t}.`)
                  }
                  return new Qt({
                    name: e.name,
                    description: e.description,
                    types: () => e.possibleTypes.map(d)
                  })
                }(e);
              case xn.ENUM:
                return function(e) {
                  if (!e.enumValues) {
                    const t = oe(e);
                    throw new Error(`Introspection result missing enumValues: ${t}.`)
                  }
                  return new Jt({
                    name: e.name,
                    description: e.description,
                    values: ge(e.enumValues, (e => e.name), (e => ({
                      description: e.description,
                      deprecationReason: e.deprecationReason
                    })))
                  })
                }(e);
              case xn.INPUT_OBJECT:
                return function(e) {
                  if (!e.inputFields) {
                    const t = oe(e);
                    throw new Error(`Introspection result missing inputFields: ${t}.`)
                  }
                  return new zt({
                    name: e.name,
                    description: e.description,
                    fields: () => v(e.inputFields),
                    isOneOf: e.isOneOf
                  })
                }(e)
            }
            var t, n, i;
            const r = oe(e);
            throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${r}.`)
          }(e)));
        for (const e of [...ln, ...Mn]) i[e.name] && (i[e.name] = e);
        const r = n.queryType ? d(n.queryType) : null,
          s = n.mutationType ? d(n.mutationType) : null,
          c = n.subscriptionType ? d(n.subscriptionType) : null,
          u = n.directives ? n.directives.map((function(e) {
            if (!e.args) {
              const t = oe(e);
              throw new Error(`Introspection result missing directive args: ${t}.`)
            }
            if (!e.locations) {
              const t = oe(e);
              throw new Error(`Introspection result missing directive locations: ${t}.`)
            }
            return new mn({
              name: e.name,
              description: e.description,
              isRepeatable: e.isRepeatable,
              locations: e.locations.slice(),
              args: v(e.args)
            })
          })) : [];
        return new Gn({
          description: n.description,
          query: r,
          mutation: s,
          subscription: c,
          types: Object.values(i),
          directives: u,
          assumeValid: null == t ? void 0 : t.assumeValid
        });

        function l(e) {
          if (e.kind === xn.LIST) {
            const t = e.ofType;
            if (!t) throw new Error("Decorated type deeper than introspection query.");
            return new _t(l(t))
          }
          if (e.kind === xn.NON_NULL) {
            const t = e.ofType;
            if (!t) throw new Error("Decorated type deeper than introspection query.");
            const n = l(t);
            return new bt(St(n))
          }
          return p(e)
        }

        function p(e) {
          const t = e.name;
          if (!t) throw new Error(`Unknown type reference: ${oe(e)}.`);
          const n = i[t];
          if (!n) throw new Error(`Invalid or incomplete schema, unknown type: ${t}. Ensure that a full introspection query is used in order to build a client schema.`);
          return n
        }

        function d(e) {
          return et(p(e))
        }

        function f(e) {
          return nt(p(e))
        }

        function h(e) {
          if (null === e.interfaces && e.kind === xn.INTERFACE) return [];
          if (!e.interfaces) {
            const t = oe(e);
            throw new Error(`Introspection result missing interfaces: ${t}.`)
          }
          return e.interfaces.map(f)
        }

        function m(e) {
          if (!e.fields) throw new Error(`Introspection result missing fields: ${oe(e)}.`);
          return ge(e.fields, (e => e.name), y)
        }

        function y(e) {
          const t = l(e.type);
          if (!mt(t)) {
            const e = oe(t);
            throw new Error(`Introspection must provide output type for fields, but received: ${e}.`)
          }
          if (!e.args) {
            const t = oe(e);
            throw new Error(`Introspection result missing field args: ${t}.`)
          }
          return {
            description: e.description,
            deprecationReason: e.deprecationReason,
            type: t,
            args: v(e.args)
          }
        }

        function v(e) {
          return ge(e, (e => e.name), E)
        }

        function E(e) {
          const t = l(e.type);
          if (!ft(t)) {
            const e = oe(t);
            throw new Error(`Introspection must provide input type for arguments, but received: ${e}.`)
          }
          const n = null != e.defaultValue ? pr(pe(e.defaultValue), t) : void 0;
          return {
            description: e.description,
            type: t,
            defaultValue: n,
            deprecationReason: e.deprecationReason
          }
        }
      }

      function wo(e, t, n) {
        Bn(e), null != t && t.kind === D.DOCUMENT || o(!1, "Must provide valid Document AST."), !0 !== (null == n ? void 0 : n.assumeValid) && !0 !== (null == n ? void 0 : n.assumeValidSDL) && function(e, t) {
          const n = Kr(e, t);
          if (0 !== n.length) throw new Error(n.map((e => e.message)).join("\n\n"))
        }(t, e);
        const i = e.toConfig(),
          r = Ro(i, t, n);
        return i === r ? e : new Gn(r)
      }

      function Ro(e, t, n) {
        var i, r, o, s;
        const a = [],
          u = Object.create(null),
          l = [];
        let p;
        const d = [];
        for (const e of t.definitions)
          if (e.kind === D.SCHEMA_DEFINITION) p = e;
          else if (e.kind === D.SCHEMA_EXTENSION) d.push(e);
        else if (Ei(e)) a.push(e);
        else if (Ni(e)) {
          const t = e.name.value,
            n = u[t];
          u[t] = n ? n.concat([e]) : [e]
        } else e.kind === D.DIRECTIVE_DEFINITION && l.push(e);
        if (0 === Object.keys(u).length && 0 === a.length && 0 === l.length && 0 === d.length && null == p) return e;
        const f = Object.create(null);
        for (const t of e.types) f[t.name] = jn(h = t) || pn(h) ? h : He(h) ? function(e) {
          var t;
          const n = e.toConfig(),
            i = null !== (t = u[n.name]) && void 0 !== t ? t : [];
          let r = n.specifiedByURL;
          for (const e of i) {
            var o;
            r = null !== (o = $o(e)) && void 0 !== o ? o : r
          }
          return new Ft({
            ...n,
            specifiedByURL: r,
            extensionASTNodes: n.extensionASTNodes.concat(i)
          })
        }(h) : Ze(h) ? function(e) {
          var t;
          const n = e.toConfig(),
            i = null !== (t = u[n.name]) && void 0 !== t ? t : [];
          return new Ct({
            ...n,
            interfaces: () => [...e.getInterfaces().map(E), ...w(i)],
            fields: () => ({
              ...Ie(n.fields, T),
              ...b(i)
            }),
            extensionASTNodes: n.extensionASTNodes.concat(i)
          })
        }(h) : tt(h) ? function(e) {
          var t;
          const n = e.toConfig(),
            i = null !== (t = u[n.name]) && void 0 !== t ? t : [];
          return new Yt({
            ...n,
            interfaces: () => [...e.getInterfaces().map(E), ...w(i)],
            fields: () => ({
              ...Ie(n.fields, T),
              ...b(i)
            }),
            extensionASTNodes: n.extensionASTNodes.concat(i)
          })
        }(h) : it(h) ? function(e) {
          var t;
          const n = e.toConfig(),
            i = null !== (t = u[n.name]) && void 0 !== t ? t : [];
          return new Qt({
            ...n,
            types: () => [...e.getTypes().map(E), ...R(i)],
            extensionASTNodes: n.extensionASTNodes.concat(i)
          })
        }(h) : ot(h) ? function(e) {
          var t;
          const n = e.toConfig(),
            i = null !== (t = u[e.name]) && void 0 !== t ? t : [];
          return new Jt({
            ...n,
            values: {
              ...n.values,
              ...S(i)
            },
            extensionASTNodes: n.extensionASTNodes.concat(i)
          })
        }(h) : at(h) ? function(e) {
          var t;
          const n = e.toConfig(),
            i = null !== (t = u[n.name]) && void 0 !== t ? t : [];
          return new zt({
            ...n,
            fields: () => ({
              ...Ie(n.fields, (e => ({
                ...e,
                type: v(e.type)
              }))),
              ...A(i)
            }),
            extensionASTNodes: n.extensionASTNodes.concat(i)
          })
        }(h) : void c(!1, "Unexpected type: " + oe(h));
        var h;
        for (const e of a) {
          var m;
          const t = e.name.value;
          f[t] = null !== (m = Lo[t]) && void 0 !== m ? m : L(e)
        }
        const y = {
          query: e.query && E(e.query),
          mutation: e.mutation && E(e.mutation),
          subscription: e.subscription && E(e.subscription),
          ...p && g([p]),
          ...g(d)
        };
        return {
          description: null === (i = p) || void 0 === i || null === (r = i.description) || void 0 === r ? void 0 : r.value,
          ...y,
          types: Object.values(f),
          directives: [...e.directives.map((function(e) {
            const t = e.toConfig();
            return new mn({
              ...t,
              args: Ie(t.args, N)
            })
          })), ...l.map((function(e) {
            var t;
            return new mn({
              name: e.name.value,
              description: null === (t = e.description) || void 0 === t ? void 0 : t.value,
              locations: e.locations.map((({
                value: e
              }) => e)),
              isRepeatable: e.repeatable,
              args: O(e.arguments),
              astNode: e
            })
          }))],
          extensions: Object.create(null),
          astNode: null !== (o = p) && void 0 !== o ? o : e.astNode,
          extensionASTNodes: e.extensionASTNodes.concat(d),
          assumeValid: null !== (s = null == n ? void 0 : n.assumeValid) && void 0 !== s && s
        };

        function v(e) {
          return ut(e) ? new _t(v(e.ofType)) : pt(e) ? new bt(v(e.ofType)) : E(e)
        }

        function E(e) {
          return f[e.name]
        }

        function T(e) {
          return {
            ...e,
            type: v(e.type),
            args: e.args && Ie(e.args, N)
          }
        }

        function N(e) {
          return {
            ...e,
            type: v(e.type)
          }
        }

        function g(e) {
          const t = {};
          for (const i of e) {
            var n;
            const e = null !== (n = i.operationTypes) && void 0 !== n ? n : [];
            for (const n of e) t[n.operation] = I(n.type)
          }
          return t
        }

        function I(e) {
          var t;
          const n = e.name.value,
            i = null !== (t = Lo[n]) && void 0 !== t ? t : f[n];
          if (void 0 === i) throw new Error(`Unknown type: "${n}".`);
          return i
        }

        function _(e) {
          return e.kind === D.LIST_TYPE ? new _t(_(e.type)) : e.kind === D.NON_NULL_TYPE ? new bt(_(e.type)) : I(e)
        }

        function b(e) {
          const t = Object.create(null);
          for (const r of e) {
            var n;
            const e = null !== (n = r.fields) && void 0 !== n ? n : [];
            for (const n of e) {
              var i;
              t[n.name.value] = {
                type: _(n.type),
                description: null === (i = n.description) || void 0 === i ? void 0 : i.value,
                args: O(n.arguments),
                deprecationReason: ko(n),
                astNode: n
              }
            }
          }
          return t
        }

        function O(e) {
          const t = null != e ? e : [],
            n = Object.create(null);
          for (const e of t) {
            var i;
            const t = _(e.type);
            n[e.name.value] = {
              type: t,
              description: null === (i = e.description) || void 0 === i ? void 0 : i.value,
              defaultValue: pr(e.defaultValue, t),
              deprecationReason: ko(e),
              astNode: e
            }
          }
          return n
        }

        function A(e) {
          const t = Object.create(null);
          for (const r of e) {
            var n;
            const e = null !== (n = r.fields) && void 0 !== n ? n : [];
            for (const n of e) {
              var i;
              const e = _(n.type);
              t[n.name.value] = {
                type: e,
                description: null === (i = n.description) || void 0 === i ? void 0 : i.value,
                defaultValue: pr(n.defaultValue, e),
                deprecationReason: ko(n),
                astNode: n
              }
            }
          }
          return t
        }

        function S(e) {
          const t = Object.create(null);
          for (const r of e) {
            var n;
            const e = null !== (n = r.values) && void 0 !== n ? n : [];
            for (const n of e) {
              var i;
              t[n.name.value] = {
                description: null === (i = n.description) || void 0 === i ? void 0 : i.value,
                deprecationReason: ko(n),
                astNode: n
              }
            }
          }
          return t
        }

        function w(e) {
          return e.flatMap((e => {
            var t, n;
            return null !== (t = null === (n = e.interfaces) || void 0 === n ? void 0 : n.map(I)) && void 0 !== t ? t : []
          }))
        }

        function R(e) {
          return e.flatMap((e => {
            var t, n;
            return null !== (t = null === (n = e.types) || void 0 === n ? void 0 : n.map(I)) && void 0 !== t ? t : []
          }))
        }

        function L(e) {
          var t;
          const n = e.name.value,
            i = null !== (t = u[n]) && void 0 !== t ? t : [];
          switch (e.kind) {
            case D.OBJECT_TYPE_DEFINITION: {
              var r;
              const t = [e, ...i];
              return new Ct({
                name: n,
                description: null === (r = e.description) || void 0 === r ? void 0 : r.value,
                interfaces: () => w(t),
                fields: () => b(t),
                astNode: e,
                extensionASTNodes: i
              })
            }
            case D.INTERFACE_TYPE_DEFINITION: {
              var o;
              const t = [e, ...i];
              return new Yt({
                name: n,
                description: null === (o = e.description) || void 0 === o ? void 0 : o.value,
                interfaces: () => w(t),
                fields: () => b(t),
                astNode: e,
                extensionASTNodes: i
              })
            }
            case D.ENUM_TYPE_DEFINITION: {
              var s;
              const t = [e, ...i];
              return new Jt({
                name: n,
                description: null === (s = e.description) || void 0 === s ? void 0 : s.value,
                values: S(t),
                astNode: e,
                extensionASTNodes: i
              })
            }
            case D.UNION_TYPE_DEFINITION: {
              var a;
              const t = [e, ...i];
              return new Qt({
                name: n,
                description: null === (a = e.description) || void 0 === a ? void 0 : a.value,
                types: () => R(t),
                astNode: e,
                extensionASTNodes: i
              })
            }
            case D.SCALAR_TYPE_DEFINITION:
              var c;
              return new Ft({
                name: n,
                description: null === (c = e.description) || void 0 === c ? void 0 : c.value,
                specifiedByURL: $o(e),
                astNode: e,
                extensionASTNodes: i
              });
            case D.INPUT_OBJECT_TYPE_DEFINITION: {
              var l;
              const t = [e, ...i];
              return new zt({
                name: n,
                description: null === (l = e.description) || void 0 === l ? void 0 : l.value,
                fields: () => A(t),
                astNode: e,
                extensionASTNodes: i,
                isOneOf: (p = e, Boolean(mr(gn, p)))
              })
            }
          }
          var p
        }
      }
      const Lo = Ne([...ln, ...Mn], (e => e.name));

      function ko(e) {
        const t = mr(Tn, e);
        return null == t ? void 0 : t.reason
      }

      function $o(e) {
        const t = mr(Nn, e);
        return null == t ? void 0 : t.url
      }

      function xo(e, t) {
        null != e && e.kind === D.DOCUMENT || o(!1, "Must provide valid Document AST."), !0 !== (null == t ? void 0 : t.assumeValid) && !0 !== (null == t ? void 0 : t.assumeValidSDL) && function(e) {
          const t = Kr(e);
          if (0 !== t.length) throw new Error(t.map((e => e.message)).join("\n\n"))
        }(e);
        const n = Ro({
          description: void 0,
          types: [],
          directives: [],
          extensions: Object.create(null),
          extensionASTNodes: [],
          assumeValid: !1
        }, e, t);
        if (null == n.astNode)
          for (const e of n.types) switch (e.name) {
            case "Query":
              n.query = e;
              break;
            case "Mutation":
              n.mutation = e;
              break;
            case "Subscription":
              n.subscription = e
          }
        const i = [...n.directives, ...In.filter((e => n.directives.every((t => t.name !== e.name))))];
        return new Gn({
          ...n,
          directives: i
        })
      }

      function Fo(e, t) {
        return xo(le(e, {
          noLocation: null == t ? void 0 : t.noLocation,
          allowLegacyFragmentVariables: null == t ? void 0 : t.allowLegacyFragmentVariables
        }), {
          assumeValidSDL: null == t ? void 0 : t.assumeValidSDL,
          assumeValid: null == t ? void 0 : t.assumeValid
        })
      }

      function Co(e) {
        const t = e.toConfig(),
          n = ge(Uo(t.types), (e => e.name), (function(e) {
            if (He(e) || jn(e)) return e;
            if (Ze(e)) {
              const t = e.toConfig();
              return new Ct({
                ...t,
                interfaces: () => u(t.interfaces),
                fields: () => a(t.fields)
              })
            }
            if (tt(e)) {
              const t = e.toConfig();
              return new Yt({
                ...t,
                interfaces: () => u(t.interfaces),
                fields: () => a(t.fields)
              })
            }
            if (it(e)) {
              const t = e.toConfig();
              return new Qt({
                ...t,
                types: () => u(t.types)
              })
            }
            if (ot(e)) {
              const t = e.toConfig();
              return new Jt({
                ...t,
                values: Vo(t.values, (e => e))
              })
            }
            if (at(e)) {
              const t = e.toConfig();
              return new zt({
                ...t,
                fields: () => Vo(t.fields, (e => ({
                  ...e,
                  type: i(e.type)
                })))
              })
            }
            c(!1, "Unexpected type: " + oe(e))
          }));
        return new Gn({
          ...t,
          types: Object.values(n),
          directives: Uo(t.directives).map((function(e) {
            const t = e.toConfig();
            return new mn({
              ...t,
              locations: Mo(t.locations, (e => e)),
              args: s(t.args)
            })
          })),
          query: o(t.query),
          mutation: o(t.mutation),
          subscription: o(t.subscription)
        });

        function i(e) {
          return ut(e) ? new _t(i(e.ofType)) : pt(e) ? new bt(i(e.ofType)) : r(e)
        }

        function r(e) {
          return n[e.name]
        }

        function o(e) {
          return e && r(e)
        }

        function s(e) {
          return Vo(e, (e => ({
            ...e,
            type: i(e.type)
          })))
        }

        function a(e) {
          return Vo(e, (e => ({
            ...e,
            type: i(e.type),
            args: e.args && s(e.args)
          })))
        }

        function u(e) {
          return Uo(e).map(r)
        }
      }

      function Vo(e, t) {
        const n = Object.create(null);
        for (const i of Object.keys(e).sort(_e)) n[i] = t(e[i]);
        return n
      }

      function Uo(e) {
        return Mo(e, (e => e.name))
      }

      function Mo(e, t) {
        return e.slice().sort(((e, n) => _e(t(e), t(n))))
      }

      function jo(e) {
        return Go(e, (e => !_n(e)), Bo)
      }

      function Po(e) {
        return Go(e, _n, jn)
      }

      function Bo(e) {
        return !pn(e) && !jn(e)
      }

      function Go(e, t, n) {
        const i = e.getDirectives().filter(t),
          r = Object.values(e.getTypeMap()).filter(n);
        return [Yo(e), ...i.map((e => function(e) {
          return Wo(e) + "directive @" + e.name + Xo(e.args) + (e.isRepeatable ? " repeatable" : "") + " on " + e.locations.join(" | ")
        }(e))), ...r.map((e => Qo(e)))].filter(Boolean).join("\n\n")
      }

      function Yo(e) {
        if (null == e.description && function(e) {
            const t = e.getQueryType();
            if (t && "Query" !== t.name) return !1;
            const n = e.getMutationType();
            if (n && "Mutation" !== n.name) return !1;
            const i = e.getSubscriptionType();
            return !i || "Subscription" === i.name
          }(e)) return;
        const t = [],
          n = e.getQueryType();
        n && t.push(`  query: ${n.name}`);
        const i = e.getMutationType();
        i && t.push(`  mutation: ${i.name}`);
        const r = e.getSubscriptionType();
        return r && t.push(`  subscription: ${r.name}`), Wo(e) + `schema {\n${t.join("\n")}\n}`
      }

      function Qo(e) {
        return He(e) ? function(e) {
          return Wo(e) + `scalar ${e.name}` + (null == (t = e).specifiedByURL ? "" : ` @specifiedBy(url: ${Me({kind:D.STRING,value:t.specifiedByURL})})`);
          var t
        }(e) : Ze(e) ? function(e) {
          return Wo(e) + `type ${e.name}` + qo(e) + Jo(e)
        }(e) : tt(e) ? function(e) {
          return Wo(e) + `interface ${e.name}` + qo(e) + Jo(e)
        }(e) : it(e) ? function(e) {
          const t = e.getTypes(),
            n = t.length ? " = " + t.join(" | ") : "";
          return Wo(e) + "union " + e.name + n
        }(e) : ot(e) ? function(e) {
          const t = e.getValues().map(((e, t) => Wo(e, "  ", !t) + "  " + e.name + Ho(e.deprecationReason)));
          return Wo(e) + `enum ${e.name}` + Ko(t)
        }(e) : at(e) ? function(e) {
          const t = Object.values(e.getFields()).map(((e, t) => Wo(e, "  ", !t) + "  " + zo(e)));
          return Wo(e) + `input ${e.name}` + (e.isOneOf ? " @oneOf" : "") + Ko(t)
        }(e) : void c(!1, "Unexpected type: " + oe(e))
      }

      function qo(e) {
        const t = e.getInterfaces();
        return t.length ? " implements " + t.map((e => e.name)).join(" & ") : ""
      }

      function Jo(e) {
        return Ko(Object.values(e.getFields()).map(((e, t) => Wo(e, "  ", !t) + "  " + e.name + Xo(e.args, "  ") + ": " + String(e.type) + Ho(e.deprecationReason))))
      }

      function Ko(e) {
        return 0 !== e.length ? " {\n" + e.join("\n") + "\n}" : ""
      }

      function Xo(e, t = "") {
        return 0 === e.length ? "" : e.every((e => !e.description)) ? "(" + e.map(zo).join(", ") + ")" : "(\n" + e.map(((e, n) => Wo(e, "  " + t, !n) + "  " + t + zo(e))).join("\n") + "\n" + t + ")"
      }

      function zo(e) {
        const t = On(e.defaultValue, e.type);
        let n = e.name + ": " + String(e.type);
        return t && (n += ` = ${Me(t)}`), n + Ho(e.deprecationReason)
      }

      function Ho(e) {
        return null == e ? "" : e !== En ? ` @deprecated(reason: ${Me({kind:D.STRING,value:e})})` : " @deprecated"
      }

      function Wo(e, t = "", n = !0) {
        const {
          description: i
        } = e;
        return null == i ? "" : (t && !n ? "\n" + t : t) + Me({
          kind: D.STRING,
          value: i,
          block: F(i)
        }).replace(/\n/g, "\n" + t) + "\n"
      }

      function Zo(e) {
        const t = [];
        for (const n of e) t.push(...n.definitions);
        return {
          kind: D.DOCUMENT,
          definitions: t
        }
      }

      function es(e) {
        const t = [],
          n = Object.create(null);
        for (const i of e.definitions) switch (i.kind) {
          case D.OPERATION_DEFINITION:
            t.push(i);
            break;
          case D.FRAGMENT_DEFINITION:
            n[i.name.value] = ns(i.selectionSet)
        }
        const i = Object.create(null);
        for (const r of t) {
          const t = new Set;
          for (const e of ns(r.selectionSet)) ts(t, n, e);
          i[r.name ? r.name.value : ""] = {
            kind: D.DOCUMENT,
            definitions: e.definitions.filter((e => e === r || e.kind === D.FRAGMENT_DEFINITION && t.has(e.name.value)))
          }
        }
        return i
      }

      function ts(e, t, n) {
        if (!e.has(n)) {
          e.add(n);
          const i = t[n];
          if (void 0 !== i)
            for (const n of i) ts(e, t, n)
        }
      }

      function ns(e) {
        const t = [];
        return Fe(e, {
          FragmentSpread(e) {
            t.push(e.name.value)
          }
        }), t
      }

      function is(e) {
        const t = ue(e) ? e : new ce(e),
          n = t.body,
          i = new V(t);
        let r = "",
          o = !1;
        for (; i.advance().kind !== A.EOF;) {
          const e = i.token,
            t = e.kind,
            s = !U(e.kind);
          o && (s || e.kind === A.SPREAD) && (r += " ");
          const a = n.slice(e.start, e.end);
          t === A.BLOCK_STRING ? r += C(e.value, {
            minimize: !0
          }) : r += a, o = s
        }
        return r
      }

      function rs(e) {
        const t = os(e);
        if (t) throw t;
        return e
      }

      function os(e) {
        if ("string" == typeof e || o(!1, "Expected name to be a string."), e.startsWith("__")) return new h(`Name "${e}" must not begin with "__", which is reserved by GraphQL introspection.`);
        try {
          Je(e)
        } catch (e) {
          return e
        }
      }
      var ss, as;

      function cs(e, t) {
        return ls(e, t).filter((e => e.type in ss))
      }

      function us(e, t) {
        return ls(e, t).filter((e => e.type in as))
      }

      function ls(e, t) {
        return [...ds(e, t), ...ps(e, t)]
      }

      function ps(e, t) {
        const n = [],
          i = _s(e.getDirectives(), t.getDirectives());
        for (const e of i.removed) n.push({
          type: ss.DIRECTIVE_REMOVED,
          description: `${e.name} was removed.`
        });
        for (const [e, t] of i.persisted) {
          const i = _s(e.args, t.args);
          for (const t of i.added) Gt(t) && n.push({
            type: ss.REQUIRED_DIRECTIVE_ARG_ADDED,
            description: `A required arg ${t.name} on directive ${e.name} was added.`
          });
          for (const t of i.removed) n.push({
            type: ss.DIRECTIVE_ARG_REMOVED,
            description: `${t.name} was removed from ${e.name}.`
          });
          e.isRepeatable && !t.isRepeatable && n.push({
            type: ss.DIRECTIVE_REPEATABLE_REMOVED,
            description: `Repeatable flag was removed from ${e.name}.`
          });
          for (const i of e.locations) t.locations.includes(i) || n.push({
            type: ss.DIRECTIVE_LOCATION_REMOVED,
            description: `${i} was removed from ${e.name}.`
          })
        }
        return n
      }

      function ds(e, t) {
        const n = [],
          i = _s(Object.values(e.getTypeMap()), Object.values(t.getTypeMap()));
        for (const e of i.removed) n.push({
          type: ss.TYPE_REMOVED,
          description: pn(e) ? `Standard scalar ${e.name} was removed because it is not referenced anymore.` : `${e.name} was removed.`
        });
        for (const [e, t] of i.persisted) ot(e) && ot(t) ? n.push(...ms(e, t)) : it(e) && it(t) ? n.push(...hs(e, t)) : at(e) && at(t) ? n.push(...fs(e, t)) : Ze(e) && Ze(t) || tt(e) && tt(t) ? n.push(...vs(e, t), ...ys(e, t)) : e.constructor !== t.constructor && n.push({
          type: ss.TYPE_CHANGED_KIND,
          description: `${e.name} changed from ${gs(e)} to ${gs(t)}.`
        });
        return n
      }

      function fs(e, t) {
        const n = [],
          i = _s(Object.values(e.getFields()), Object.values(t.getFields()));
        for (const t of i.added) Wt(t) ? n.push({
          type: ss.REQUIRED_INPUT_FIELD_ADDED,
          description: `A required field ${t.name} on input type ${e.name} was added.`
        }) : n.push({
          type: as.OPTIONAL_INPUT_FIELD_ADDED,
          description: `An optional field ${t.name} on input type ${e.name} was added.`
        });
        for (const t of i.removed) n.push({
          type: ss.FIELD_REMOVED,
          description: `${e.name}.${t.name} was removed.`
        });
        for (const [t, r] of i.persisted) Ns(t.type, r.type) || n.push({
          type: ss.FIELD_CHANGED_KIND,
          description: `${e.name}.${t.name} changed type from ${String(t.type)} to ${String(r.type)}.`
        });
        return n
      }

      function hs(e, t) {
        const n = [],
          i = _s(e.getTypes(), t.getTypes());
        for (const t of i.added) n.push({
          type: as.TYPE_ADDED_TO_UNION,
          description: `${t.name} was added to union type ${e.name}.`
        });
        for (const t of i.removed) n.push({
          type: ss.TYPE_REMOVED_FROM_UNION,
          description: `${t.name} was removed from union type ${e.name}.`
        });
        return n
      }

      function ms(e, t) {
        const n = [],
          i = _s(e.getValues(), t.getValues());
        for (const t of i.added) n.push({
          type: as.VALUE_ADDED_TO_ENUM,
          description: `${t.name} was added to enum type ${e.name}.`
        });
        for (const t of i.removed) n.push({
          type: ss.VALUE_REMOVED_FROM_ENUM,
          description: `${t.name} was removed from enum type ${e.name}.`
        });
        return n
      }

      function ys(e, t) {
        const n = [],
          i = _s(e.getInterfaces(), t.getInterfaces());
        for (const t of i.added) n.push({
          type: as.IMPLEMENTED_INTERFACE_ADDED,
          description: `${t.name} added to interfaces implemented by ${e.name}.`
        });
        for (const t of i.removed) n.push({
          type: ss.IMPLEMENTED_INTERFACE_REMOVED,
          description: `${e.name} no longer implements interface ${t.name}.`
        });
        return n
      }

      function vs(e, t) {
        const n = [],
          i = _s(Object.values(e.getFields()), Object.values(t.getFields()));
        for (const t of i.removed) n.push({
          type: ss.FIELD_REMOVED,
          description: `${e.name}.${t.name} was removed.`
        });
        for (const [t, r] of i.persisted) n.push(...Es(e, t, r)), Ts(t.type, r.type) || n.push({
          type: ss.FIELD_CHANGED_KIND,
          description: `${e.name}.${t.name} changed type from ${String(t.type)} to ${String(r.type)}.`
        });
        return n
      }

      function Es(e, t, n) {
        const i = [],
          r = _s(t.args, n.args);
        for (const n of r.removed) i.push({
          type: ss.ARG_REMOVED,
          description: `${e.name}.${t.name} arg ${n.name} was removed.`
        });
        for (const [n, o] of r.persisted)
          if (Ns(n.type, o.type)) {
            if (void 0 !== n.defaultValue)
              if (void 0 === o.defaultValue) i.push({
                type: as.ARG_DEFAULT_VALUE_CHANGE,
                description: `${e.name}.${t.name} arg ${n.name} defaultValue was removed.`
              });
              else {
                const r = Is(n.defaultValue, n.type),
                  s = Is(o.defaultValue, o.type);
                r !== s && i.push({
                  type: as.ARG_DEFAULT_VALUE_CHANGE,
                  description: `${e.name}.${t.name} arg ${n.name} has changed defaultValue from ${r} to ${s}.`
                })
              }
          } else i.push({
            type: ss.ARG_CHANGED_KIND,
            description: `${e.name}.${t.name} arg ${n.name} has changed type from ${String(n.type)} to ${String(o.type)}.`
          });
        for (const n of r.added) Gt(n) ? i.push({
          type: ss.REQUIRED_ARG_ADDED,
          description: `A required arg ${n.name} on ${e.name}.${t.name} was added.`
        }) : i.push({
          type: as.OPTIONAL_ARG_ADDED,
          description: `An optional arg ${n.name} on ${e.name}.${t.name} was added.`
        });
        return i
      }

      function Ts(e, t) {
        return ut(e) ? ut(t) && Ts(e.ofType, t.ofType) || pt(t) && Ts(e, t.ofType) : pt(e) ? pt(t) && Ts(e.ofType, t.ofType) : Rt(t) && e.name === t.name || pt(t) && Ts(e, t.ofType)
      }

      function Ns(e, t) {
        return ut(e) ? ut(t) && Ns(e.ofType, t.ofType) : pt(e) ? pt(t) && Ns(e.ofType, t.ofType) || !pt(t) && Ns(e.ofType, t) : Rt(t) && e.name === t.name
      }

      function gs(e) {
        return He(e) ? "a Scalar type" : Ze(e) ? "an Object type" : tt(e) ? "an Interface type" : it(e) ? "a Union type" : ot(e) ? "an Enum type" : at(e) ? "an Input type" : void c(!1, "Unexpected type: " + oe(e))
      }

      function Is(e, t) {
        const n = On(e, t);
        return null != n || c(!1), Me(Ui(n))
      }

      function _s(e, t) {
        const n = [],
          i = [],
          r = [],
          o = Ne(e, (({
            name: e
          }) => e)),
          s = Ne(t, (({
            name: e
          }) => e));
        for (const t of e) {
          const e = s[t.name];
          void 0 === e ? i.push(t) : r.push([t, e])
        }
        for (const e of t) void 0 === o[e.name] && n.push(e);
        return {
          added: n,
          persisted: r,
          removed: i
        }
      }! function(e) {
        e.TYPE_REMOVED = "TYPE_REMOVED", e.TYPE_CHANGED_KIND = "TYPE_CHANGED_KIND", e.TYPE_REMOVED_FROM_UNION = "TYPE_REMOVED_FROM_UNION", e.VALUE_REMOVED_FROM_ENUM = "VALUE_REMOVED_FROM_ENUM", e.REQUIRED_INPUT_FIELD_ADDED = "REQUIRED_INPUT_FIELD_ADDED", e.IMPLEMENTED_INTERFACE_REMOVED = "IMPLEMENTED_INTERFACE_REMOVED", e.FIELD_REMOVED = "FIELD_REMOVED", e.FIELD_CHANGED_KIND = "FIELD_CHANGED_KIND", e.REQUIRED_ARG_ADDED = "REQUIRED_ARG_ADDED", e.ARG_REMOVED = "ARG_REMOVED", e.ARG_CHANGED_KIND = "ARG_CHANGED_KIND", e.DIRECTIVE_REMOVED = "DIRECTIVE_REMOVED", e.DIRECTIVE_ARG_REMOVED = "DIRECTIVE_ARG_REMOVED", e.REQUIRED_DIRECTIVE_ARG_ADDED = "REQUIRED_DIRECTIVE_ARG_ADDED", e.DIRECTIVE_REPEATABLE_REMOVED = "DIRECTIVE_REPEATABLE_REMOVED", e.DIRECTIVE_LOCATION_REMOVED = "DIRECTIVE_LOCATION_REMOVED"
      }(ss || (ss = {})),
      function(e) {
        e.VALUE_ADDED_TO_ENUM = "VALUE_ADDED_TO_ENUM", e.TYPE_ADDED_TO_UNION = "TYPE_ADDED_TO_UNION", e.OPTIONAL_INPUT_FIELD_ADDED = "OPTIONAL_INPUT_FIELD_ADDED", e.OPTIONAL_ARG_ADDED = "OPTIONAL_ARG_ADDED", e.IMPLEMENTED_INTERFACE_ADDED = "IMPLEMENTED_INTERFACE_ADDED", e.ARG_DEFAULT_VALUE_CHANGE = "ARG_DEFAULT_VALUE_CHANGE"
      }(as || (as = {}))
    }
  }
]);