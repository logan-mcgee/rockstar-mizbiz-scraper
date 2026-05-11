try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3d32a814-9a5c-48a8-b564-0904e8535d9f", e._sentryDebugIdIdentifier = "sentry-dbid-3d32a814-9a5c-48a8-b564-0904e8535d9f")
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
  [7920], {
    7920(e, t, n) {
      n.r(t), n.d(t, {
        BREAK: () => Le,
        BreakingChangeType: () => as,
        DEFAULT_DEPRECATION_REASON: () => yn,
        DangerousChangeType: () => cs,
        DirectiveLocation: () => b,
        ExecutableDefinitionsRule: () => Ni,
        FieldsOnCorrectTypeRule: () => gi,
        FragmentsOnCompositeTypesRule: () => Ii,
        GRAPHQL_MAX_INT: () => en,
        GRAPHQL_MIN_INT: () => tn,
        GraphQLBoolean: () => sn,
        GraphQLDeprecatedDirective: () => En,
        GraphQLDirective: () => fn,
        GraphQLEnumType: () => Qt,
        GraphQLError: () => h,
        GraphQLFloat: () => rn,
        GraphQLID: () => an,
        GraphQLIncludeDirective: () => hn,
        GraphQLInputObjectType: () => Kt,
        GraphQLInt: () => nn,
        GraphQLInterfaceType: () => Bt,
        GraphQLList: () => gt,
        GraphQLNonNull: () => It,
        GraphQLObjectType: () => Ft,
        GraphQLOneOfDirective: () => Tn,
        GraphQLScalarType: () => xt,
        GraphQLSchema: () => Pn,
        GraphQLSkipDirective: () => mn,
        GraphQLSpecifiedByDirective: () => vn,
        GraphQLString: () => on,
        GraphQLUnionType: () => Gt,
        Kind: () => D,
        KnownArgumentNamesRule: () => _i,
        KnownDirectivesRule: () => bi,
        KnownFragmentNamesRule: () => Di,
        KnownTypeNamesRule: () => Ai,
        Lexer: () => V,
        Location: () => T,
        LoneAnonymousOperationRule: () => wi,
        LoneSchemaDefinitionRule: () => Ri,
        MaxIntrospectionDepthRule: () => ki,
        NoDeprecatedCustomRule: () => _o,
        NoFragmentCyclesRule: () => Li,
        NoSchemaIntrospectionCustomRule: () => Oo,
        NoUndefinedVariablesRule: () => xi,
        NoUnusedFragmentsRule: () => Fi,
        NoUnusedVariablesRule: () => $i,
        OperationTypeNode: () => O,
        OverlappingFieldsCanBeMergedRule: () => Ui,
        PossibleFragmentSpreadsRule: () => zi,
        PossibleTypeExtensionsRule: () => Hi,
        ProvidedRequiredArgumentsRule: () => Zi,
        ScalarLeafsRule: () => nr,
        SchemaMetaFieldDef: () => Fn,
        SingleFieldSubscriptionsRule: () => Nr,
        Source: () => ae,
        Token: () => N,
        TokenKind: () => A,
        TypeInfo: () => si,
        TypeKind: () => Ln,
        TypeMetaFieldDef: () => $n,
        TypeNameMetaFieldDef: () => Cn,
        UniqueArgumentDefinitionNamesRule: () => Ir,
        UniqueArgumentNamesRule: () => _r,
        UniqueDirectiveNamesRule: () => Or,
        UniqueDirectivesPerLocationRule: () => br,
        UniqueEnumValueNamesRule: () => Dr,
        UniqueFieldDefinitionNamesRule: () => Ar,
        UniqueFragmentNamesRule: () => wr,
        UniqueInputFieldNamesRule: () => Rr,
        UniqueOperationNamesRule: () => kr,
        UniqueOperationTypesRule: () => Lr,
        UniqueTypeNamesRule: () => xr,
        UniqueVariableNamesRule: () => Fr,
        ValidationContext: () => Qr,
        ValuesOfCorrectTypeRule: () => $r,
        VariablesAreInputTypesRule: () => Vr,
        VariablesInAllowedPositionRule: () => Ur,
        __Directive: () => Dn,
        __DirectiveLocation: () => An,
        __EnumValue: () => kn,
        __Field: () => wn,
        __InputValue: () => Rn,
        __Schema: () => bn,
        __Type: () => Sn,
        __TypeKind: () => xn,
        assertAbstractType: () => Nt,
        assertCompositeType: () => vt,
        assertDirective: () => dn,
        assertEnumType: () => rt,
        assertEnumValueName: () => qe,
        assertInputObjectType: () => st,
        assertInputType: () => dt,
        assertInterfaceType: () => et,
        assertLeafType: () => yt,
        assertListType: () => ct,
        assertName: () => Qe,
        assertNamedType: () => wt,
        assertNonNullType: () => lt,
        assertNullableType: () => Dt,
        assertObjectType: () => We,
        assertOutputType: () => ht,
        assertScalarType: () => ze,
        assertSchema: () => jn,
        assertType: () => Ke,
        assertUnionType: () => nt,
        assertValidName: () => os,
        assertValidSchema: () => Yn,
        assertWrappingType: () => Ot,
        astFromValue: () => _n,
        buildASTSchema: () => $o,
        buildClientSchema: () => wo,
        buildSchema: () => Co,
        coerceInputValue: () => sr,
        concatAST: () => es,
        createSourceEventStream: () => Io,
        defaultFieldResolver: () => mo,
        defaultTypeResolver: () => ho,
        doTypesOverlap: () => Zt,
        execute: () => eo,
        executeSync: () => to,
        extendSchema: () => Ro,
        findBreakingChanges: () => us,
        findDangerousChanges: () => ls,
        formatError: () => E,
        getArgumentValues: () => dr,
        getDirectiveValues: () => fr,
        getEnterLeaveForKind: () => $e,
        getIntrospectionQuery: () => bo,
        getLocation: () => l,
        getNamedType: () => Rt,
        getNullableType: () => At,
        getOperationAST: () => Do,
        getOperationRootType: () => Ao,
        getVariableValues: () => pr,
        getVisitFn: () => Ce,
        graphql: () => Eo,
        graphqlSync: () => vo,
        introspectionFromSchema: () => So,
        introspectionTypes: () => Vn,
        isAbstractType: () => Tt,
        isCompositeType: () => Et,
        isConstValueNode: () => fi,
        isDefinitionNode: () => ui,
        isDirective: () => pn,
        isEnumType: () => it,
        isEqualType: () => Ht,
        isExecutableDefinitionNode: () => li,
        isInputObjectType: () => ot,
        isInputType: () => pt,
        isInterfaceType: () => Ze,
        isIntrospectionType: () => Un,
        isLeafType: () => mt,
        isListType: () => at,
        isNamedType: () => St,
        isNonNullType: () => ut,
        isNullableType: () => bt,
        isObjectType: () => He,
        isOutputType: () => ft,
        isRequiredArgument: () => Pt,
        isRequiredInputField: () => zt,
        isScalarType: () => Xe,
        isSchema: () => Mn,
        isSchemaCoordinateNode: () => Ti,
        isSelectionNode: () => pi,
        isSpecifiedDirective: () => gn,
        isSpecifiedScalarType: () => un,
        isType: () => Je,
        isTypeDefinitionNode: () => yi,
        isTypeExtensionNode: () => vi,
        isTypeNode: () => hi,
        isTypeSubTypeOf: () => Wt,
        isTypeSystemDefinitionNode: () => mi,
        isTypeSystemExtensionNode: () => Ei,
        isUnionType: () => tt,
        isValidNameError: () => ss,
        isValueNode: () => di,
        isWrappingType: () => _t,
        lexicographicSortSchema: () => Vo,
        locatedError: () => Hr,
        parse: () => ue,
        parseConstValue: () => pe,
        parseSchemaCoordinate: () => fe,
        parseType: () => de,
        parseValue: () => le,
        print: () => Ve,
        printError: () => y,
        printIntrospectionSchema: () => Bo,
        printLocation: () => p,
        printSchema: () => Po,
        printSourceLocation: () => d,
        printType: () => qo,
        recommendedRules: () => jr,
        resolveASTSchemaCoordinate: () => Ds,
        resolveObjMapThunk: () => Lt,
        resolveReadonlyArrayThunk: () => kt,
        resolveSchemaCoordinate: () => bs,
        responsePathAsArray: () => or,
        separateOperations: () => ts,
        specifiedDirectives: () => Nn,
        specifiedRules: () => Pr,
        specifiedScalarTypes: () => cn,
        stripIgnoredCharacters: () => rs,
        subscribe: () => go,
        syntaxError: () => v,
        typeFromAST: () => oi,
        validate: () => Jr,
        validateSchema: () => Gn,
        valueFromAST: () => ur,
        valueFromASTUntyped: () => Ye,
        version: () => i,
        versionInfo: () => r,
        visit: () => xe,
        visitInParallel: () => Fe,
        visitWithTypeInfo: () => ci
      });
      const i = "16.13.2",
        r = Object.freeze({
          major: 16,
          minor: 13,
          patch: 2,
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
            [`${s} |`, n[0]], ...n.slice(1, e + 1).map(e => ["|", e]), ["|", "^".padStart(t)],
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
        const t = e.filter(([e, t]) => void 0 !== t),
          n = Math.max(...t.map(([e]) => e.length));
        return t.map(([e, t]) => e.padStart(n) + (t ? " " + t : "")).join("\n")
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
          const f = m(null === (n = this.nodes) || void 0 === n ? void 0 : n.map(e => e.loc).filter(e => null != e));
          this.source = null != s ? s : null == f || null === (i = f[0]) || void 0 === i ? void 0 : i.source, this.positions = null != c ? c : null == f ? void 0 : f.map(e => e.start), this.locations = c && s ? c.map(e => l(s, e)) : null == f ? void 0 : f.map(e => l(e.source, e.start));
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

      function E(e) {
        return e.toJSON()
      }

      function v(e, t, n) {
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
          OperationDefinition: ["description", "name", "variableDefinitions", "directives", "selectionSet"],
          VariableDefinition: ["description", "variable", "type", "defaultValue", "directives"],
          Variable: ["name"],
          SelectionSet: ["selections"],
          Field: ["alias", "name", "arguments", "directives", "selectionSet"],
          Argument: ["name", "value"],
          FragmentSpread: ["name", "directives"],
          InlineFragment: ["typeCondition", "directives", "selectionSet"],
          FragmentDefinition: ["description", "name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
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
          InputObjectTypeExtension: ["name", "directives", "fields"],
          TypeCoordinate: ["name"],
          MemberCoordinate: ["name", "memberName"],
          ArgumentCoordinate: ["name", "fieldName", "argumentName"],
          DirectiveCoordinate: ["name"],
          DirectiveArgumentCoordinate: ["name", "argumentName"]
        },
        I = new Set(Object.keys(g));

      function _(e) {
        const t = null == e ? void 0 : e.kind;
        return "string" == typeof t && I.has(t)
      }
      var O, b, D, A;

      function S(e) {
        return 9 === e || 32 === e
      }

      function w(e) {
        return e >= 48 && e <= 57
      }

      function R(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function k(e) {
        return R(e) || 95 === e
      }

      function L(e) {
        return R(e) || w(e) || 95 === e
      }

      function x(e) {
        var t;
        let n = Number.MAX_SAFE_INTEGER,
          i = null,
          r = -1;
        for (let t = 0; t < e.length; ++t) {
          var o;
          const s = e[t],
            a = F(s);
          a !== s.length && (i = null !== (o = i) && void 0 !== o ? o : t, r = t, 0 !== t && a < n && (n = a))
        }
        return e.map((e, t) => 0 === t ? e : e.slice(n)).slice(null !== (t = i) && void 0 !== t ? t : 0, r + 1)
      }

      function F(e) {
        let t = 0;
        for (; t < e.length && S(e.charCodeAt(t));) ++t;
        return t
      }

      function $(e) {
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
          o = i.length > 1 && i.slice(1).every(e => 0 === e.length || S(e.charCodeAt(0))),
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
      }(O || (O = {})),
      function(e) {
        e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
      }(b || (b = {})),
      function(e) {
        e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", e.TYPE_COORDINATE = "TypeCoordinate", e.MEMBER_COORDINATE = "MemberCoordinate", e.ARGUMENT_COORDINATE = "ArgumentCoordinate", e.DIRECTIVE_COORDINATE = "DirectiveCoordinate", e.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate"
      }(D || (D = {})),
      function(e) {
        e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.DOT = ".", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment"
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
        return e === A.BANG || e === A.DOLLAR || e === A.AMP || e === A.PAREN_L || e === A.PAREN_R || e === A.DOT || e === A.SPREAD || e === A.COLON || e === A.EQUALS || e === A.AT || e === A.BRACKET_L || e === A.BRACKET_R || e === A.BRACE_L || e === A.PIPE || e === A.BRACE_R
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
          if (k(t)) return ne(e, r);
          throw v(e.source, r, 39 === t ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : M(t) || j(n, r) ? `Unexpected character: ${G(e,r)}.` : `Invalid character: ${G(e,r)}.`)
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
          if (o = i.charCodeAt(++r), w(o)) throw v(e.source, r, `Invalid number, unexpected digit after 0: ${G(e,r)}.`)
        } else r = K(e, r, o), o = i.charCodeAt(r);
        if (46 === o && (s = !0, o = i.charCodeAt(++r), r = K(e, r, o), o = i.charCodeAt(r)), 69 !== o && 101 !== o || (s = !0, o = i.charCodeAt(++r), 43 !== o && 45 !== o || (o = i.charCodeAt(++r)), r = K(e, r, o), o = i.charCodeAt(r)), 46 === o || k(o)) throw v(e.source, r, `Invalid number, expected digit but got: ${G(e,r)}.`);
        return Y(e, s ? A.FLOAT : A.INT, t, r, i.slice(t, r))
      }

      function K(e, t, n) {
        if (!w(n)) throw v(e.source, t, `Invalid number, expected digit but got: ${G(e,t)}.`);
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
          if (92 === i) {
            s += n.slice(o, r);
            const t = 117 === n.charCodeAt(r + 1) ? 123 === n.charCodeAt(r + 2) ? z(e, r) : H(e, r) : ee(e, r);
            s += t.value, r += t.size, o = r;
            continue
          }
          if (10 === i || 13 === i) break;
          if (M(i)) ++r;
          else {
            if (!j(n, r)) throw v(e.source, r, `Invalid character within String: ${G(e,r)}.`);
            r += 2
          }
        }
        throw v(e.source, r, "Unterminated string.")
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
        throw v(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+r)}".`)
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
        throw v(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)
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
        throw v(e.source, t, `Invalid character escape sequence: "${n.slice(t,t+2)}".`)
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
            const i = Y(e, A.BLOCK_STRING, t, o + 3, x(c).join("\n"));
            return e.line += c.length - 1, e.lineStart = r, i
          }
          if (92 !== i || 34 !== n.charCodeAt(o + 1) || 34 !== n.charCodeAt(o + 2) || 34 !== n.charCodeAt(o + 3))
            if (10 !== i && 13 !== i)
              if (M(i)) ++o;
              else {
                if (!j(n, o)) throw v(e.source, o, `Invalid character within String: ${G(e,o)}.`);
                o += 2
              }
          else a += n.slice(s, o), c.push(a), 13 === i && 10 === n.charCodeAt(o + 1) ? o += 2 : ++o, a = "", s = o, r = o;
          else a += n.slice(s, o), s = o + 1, o += 4
        }
        throw v(e.source, o, "Unterminated string.")
      }

      function ne(e, t) {
        const n = e.source.body,
          i = n.length;
        let r = t + 1;
        for (; r < i && L(n.charCodeAt(r));) ++r;
        return Y(e, A.NAME, t, r, n.slice(t, r))
      }
      class ie {
        line = 1;
        lineStart = 0;
        constructor(e) {
          const t = new N(A.SOF, 0, 0, 0, 0);
          this.source = e, this.lastToken = t, this.token = t
        }
        get[Symbol.toStringTag]() {
          return "SchemaCoordinateLexer"
        }
        advance() {
          return this.lastToken = this.token, this.token = this.lookahead()
        }
        lookahead() {
          let e = this.token;
          if (e.kind !== A.EOF) {
            const t = function(e, t) {
              const n = e.source.body,
                i = n.length,
                r = t;
              if (r < i) {
                const t = n.charCodeAt(r);
                switch (t) {
                  case 46:
                    return Y(e, A.DOT, r, r + 1);
                  case 40:
                    return Y(e, A.PAREN_L, r, r + 1);
                  case 41:
                    return Y(e, A.PAREN_R, r, r + 1);
                  case 58:
                    return Y(e, A.COLON, r, r + 1);
                  case 64:
                    return Y(e, A.AT, r, r + 1)
                }
                if (k(t)) return ne(e, r);
                throw v(e.source, r, `Invalid character: ${G(e,r)}.`)
              }
              return Y(e, A.EOF, i, i)
            }(this, e.end);
            e.next = t, t.prev = e, e = t
          }
          return e
        }
      }

      function re(e) {
        return oe(e, [])
      }

      function oe(e, t) {
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
                if (t !== e) return "string" == typeof t ? t : oe(t, n)
              } else if (Array.isArray(e)) return function(e, t) {
                if (0 === e.length) return "[]";
                if (t.length > 2) return "[Array]";
                const n = Math.min(10, e.length),
                  i = e.length - n,
                  r = [];
                for (let i = 0; i < n; ++i) r.push(oe(e[i], t));
                return 1 === i ? r.push("... 1 more item") : i > 1 && r.push(`... ${i} more items`), "[" + r.join(", ") + "]"
              }(e, n);
              return function(e, t) {
                const n = Object.entries(e);
                if (0 === n.length) return "{}";
                if (t.length > 2) return "[" + function(e) {
                  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                  if ("Object" === t && "function" == typeof e.constructor) {
                    const t = e.constructor.name;
                    if ("string" == typeof t && "" !== t) return t
                  }
                  return t
                }(e) + "]";
                const i = n.map(([e, n]) => e + ": " + oe(n, t));
                return "{ " + i.join(", ") + " }"
              }(e, n)
            }(e, t);
          default:
            return String(e)
        }
      }
      const se = globalThis.process ? function(e, t) {
        return e instanceof t
      } : function(e, t) {
        if (e instanceof t) return !0;
        if ("object" == typeof e && null !== e) {
          var n;
          const i = t.prototype[Symbol.toStringTag];
          if (i === (Symbol.toStringTag in e ? e[Symbol.toStringTag] : null === (n = e.constructor) || void 0 === n ? void 0 : n.name)) {
            const t = re(e);
            throw new Error(`Cannot use ${i} "${t}" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.`)
          }
        }
        return !1
      };
      class ae {
        constructor(e, t = "GraphQL request", n = {
          line: 1,
          column: 1
        }) {
          "string" == typeof e || o(!1, `Body must be a string. Received: ${re(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || o(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || o(!1, "column in locationOffset is 1-indexed and must be positive.")
        }
        get[Symbol.toStringTag]() {
          return "Source"
        }
      }

      function ce(e) {
        return se(e, ae)
      }

      function ue(e, t) {
        const n = new he(e, t),
          i = n.parseDocument();
        return Object.defineProperty(i, "tokenCount", {
          enumerable: !1,
          value: n.tokenCount
        }), i
      }

      function le(e, t) {
        const n = new he(e, t);
        n.expectToken(A.SOF);
        const i = n.parseValueLiteral(!1);
        return n.expectToken(A.EOF), i
      }

      function pe(e, t) {
        const n = new he(e, t);
        n.expectToken(A.SOF);
        const i = n.parseConstValueLiteral();
        return n.expectToken(A.EOF), i
      }

      function de(e, t) {
        const n = new he(e, t);
        n.expectToken(A.SOF);
        const i = n.parseTypeReference();
        return n.expectToken(A.EOF), i
      }

      function fe(e) {
        const t = ce(e) ? e : new ae(e),
          n = new ie(t),
          i = new he(e, {
            lexer: n
          });
        i.expectToken(A.SOF);
        const r = i.parseSchemaCoordinate();
        return i.expectToken(A.EOF), r
      }
      class he {
        constructor(e, t = {}) {
          const {
            lexer: n,
            ...i
          } = t;
          if (n) this._lexer = n;
          else {
            const t = ce(e) ? e : new ae(e);
            this._lexer = new V(t)
          }
          this._options = i, this._tokenCounter = 0
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
          if (e && t.kind === A.BRACE_L) throw v(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are not supported on shorthand queries.");
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
            switch (t.value) {
              case "query":
              case "mutation":
              case "subscription":
                return this.parseOperationDefinition();
              case "fragment":
                return this.parseFragmentDefinition()
            }
            if (e) throw v(this._lexer.source, this._lexer.token.start, "Unexpected description, only GraphQL definitions support descriptions.");
            if ("extend" === t.value) return this.parseTypeSystemExtension()
          }
          throw this.unexpected(t)
        }
        parseOperationDefinition() {
          const e = this._lexer.token;
          if (this.peek(A.BRACE_L)) return this.node(e, {
            kind: D.OPERATION_DEFINITION,
            operation: O.QUERY,
            description: void 0,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
          });
          const t = this.parseDescription(),
            n = this.parseOperationType();
          let i;
          return this.peek(A.NAME) && (i = this.parseName()), this.node(e, {
            kind: D.OPERATION_DEFINITION,
            operation: n,
            description: t,
            name: i,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseOperationType() {
          const e = this.expectToken(A.NAME);
          switch (e.value) {
            case "query":
              return O.QUERY;
            case "mutation":
              return O.MUTATION;
            case "subscription":
              return O.SUBSCRIPTION
          }
          throw this.unexpected(e)
        }
        parseVariableDefinitions() {
          return this.optionalMany(A.PAREN_L, this.parseVariableDefinition, A.PAREN_R)
        }
        parseVariableDefinition() {
          return this.node(this._lexer.token, {
            kind: D.VARIABLE_DEFINITION,
            description: this.parseDescription(),
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
          const e = this._lexer.token,
            t = this.parseDescription();
          return this.expectKeyword("fragment"), !0 === this._options.allowLegacyFragmentVariables ? this.node(e, {
            kind: D.FRAGMENT_DEFINITION,
            description: t,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          }) : this.node(e, {
            kind: D.FRAGMENT_DEFINITION,
            description: t,
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
                  throw v(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`)
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
            values: this.any(A.BRACKET_L, () => this.parseValueLiteral(e), A.BRACKET_R)
          })
        }
        parseObject(e) {
          return this.node(this._lexer.token, {
            kind: D.OBJECT,
            fields: this.any(A.BRACE_L, () => this.parseObjectField(e), A.BRACE_R)
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
          if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value) throw v(this._lexer.source, this._lexer.token.start, `${me(this._lexer.token)} is reserved and cannot be used for an enum value.`);
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
          if (Object.prototype.hasOwnProperty.call(b, t.value)) return t;
          throw this.unexpected(e)
        }
        parseSchemaCoordinate() {
          const e = this._lexer.token,
            t = this.expectOptionalToken(A.AT),
            n = this.parseName();
          let i, r;
          return !t && this.expectOptionalToken(A.DOT) && (i = this.parseName()), (t || i) && this.expectOptionalToken(A.PAREN_L) && (r = this.parseName(), this.expectToken(A.COLON), this.expectToken(A.PAREN_R)), t ? r ? this.node(e, {
            kind: D.DIRECTIVE_ARGUMENT_COORDINATE,
            name: n,
            argumentName: r
          }) : this.node(e, {
            kind: D.DIRECTIVE_COORDINATE,
            name: n
          }) : i ? r ? this.node(e, {
            kind: D.ARGUMENT_COORDINATE,
            name: n,
            fieldName: i,
            argumentName: r
          }) : this.node(e, {
            kind: D.MEMBER_COORDINATE,
            name: n,
            memberName: i
          }) : this.node(e, {
            kind: D.TYPE_COORDINATE,
            name: n
          })
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
          throw v(this._lexer.source, t.start, `Expected ${ye(e)}, found ${me(t)}.`)
        }
        expectOptionalToken(e) {
          return this._lexer.token.kind === e && (this.advanceLexer(), !0)
        }
        expectKeyword(e) {
          const t = this._lexer.token;
          if (t.kind !== A.NAME || t.value !== e) throw v(this._lexer.source, t.start, `Expected "${e}", found ${me(t)}.`);
          this.advanceLexer()
        }
        expectOptionalKeyword(e) {
          const t = this._lexer.token;
          return t.kind === A.NAME && t.value === e && (this.advanceLexer(), !0)
        }
        unexpected(e) {
          const t = null != e ? e : this._lexer.token;
          return v(this._lexer.source, t.start, `Unexpected ${me(t)}.`)
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
          if (t.kind !== A.EOF && (++this._tokenCounter, void 0 !== e && this._tokenCounter > e)) throw v(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`)
        }
      }

      function me(e) {
        const t = e.value;
        return ye(e.kind) + (null != t ? ` "${t}"` : "")
      }

      function ye(e) {
        return U(e) ? `"${e}"` : e
      }

      function Ee(e, t) {
        const [n, i] = t ? [e, t] : [void 0, e];
        let r = " Did you mean ";
        n && (r += n + " ");
        const o = i.map(e => `"${e}"`);
        switch (o.length) {
          case 0:
            return "";
          case 1:
            return r + o[0] + "?";
          case 2:
            return r + o[0] + " or " + o[1] + "?"
        }
        const s = o.slice(0, 5),
          a = s.pop();
        return r + s.join(", ") + ", or " + a + "?"
      }

      function ve(e) {
        return e
      }

      function Te(e, t) {
        const n = Object.create(null);
        for (const i of e) n[t(i)] = i;
        return n
      }

      function Ne(e, t, n) {
        const i = Object.create(null);
        for (const r of e) i[t(r)] = n(r);
        return i
      }

      function ge(e, t) {
        const n = Object.create(null);
        for (const i of Object.keys(e)) n[i] = t(e[i], i);
        return n
      }

      function Ie(e, t) {
        let n = 0,
          i = 0;
        for (; n < e.length && i < t.length;) {
          let r = e.charCodeAt(n),
            o = t.charCodeAt(i);
          if (Oe(r) && Oe(o)) {
            let s = 0;
            do {
              ++n, s = 10 * s + r - _e, r = e.charCodeAt(n)
            } while (Oe(r) && s > 0);
            let a = 0;
            do {
              ++i, a = 10 * a + o - _e, o = t.charCodeAt(i)
            } while (Oe(o) && a > 0);
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
      const _e = 48;

      function Oe(e) {
        return !isNaN(e) && _e <= e && e <= 57
      }

      function be(e, t) {
        const n = Object.create(null),
          i = new De(e),
          r = Math.floor(.4 * e.length) + 1;
        for (const e of t) {
          const t = i.measure(e, r);
          void 0 !== t && (n[e] = t)
        }
        return Object.keys(n).sort((e, t) => {
          const i = n[e] - n[t];
          return 0 !== i ? i : Ie(e, t)
        })
      }
      class De {
        constructor(e) {
          this._input = e, this._inputLowerCase = e.toLowerCase(), this._inputArray = Ae(this._inputLowerCase), this._rows = [new Array(e.length + 1).fill(0), new Array(e.length + 1).fill(0), new Array(e.length + 1).fill(0)]
        }
        measure(e, t) {
          if (this._input === e) return 0;
          const n = e.toLowerCase();
          if (this._inputLowerCase === n) return 1;
          let i = Ae(n),
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

      function Ae(e) {
        const t = e.length,
          n = new Array(t);
        for (let i = 0; i < t; ++i) n[i] = e.charCodeAt(i);
        return n
      }

      function Se(e) {
        if (null == e) return Object.create(null);
        if (null === Object.getPrototypeOf(e)) return e;
        const t = Object.create(null);
        for (const [n, i] of Object.entries(e)) t[n] = i;
        return t
      }
      const we = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

      function Re(e) {
        return ke[e.charCodeAt(0)]
      }
      const ke = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"],
        Le = Object.freeze({});

      function xe(e, t, n = g) {
        const i = new Map;
        for (const e of Object.values(D)) i.set(e, $e(t, e));
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
            v = e && 0 !== p.length;
          if (e) {
            if (s = 0 === h.length ? void 0 : f[f.length - 1], d = a, a = h.pop(), v)
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
            _(d) || o(!1, `Invalid AST Node: ${re(d)}.`);
            const n = e ? null === (m = i.get(d.kind)) || void 0 === m ? void 0 : m.leave : null === (y = i.get(d.kind)) || void 0 === y ? void 0 : y.enter;
            if (T = null == n ? void 0 : n.call(t, d, s, a, f, h), T === Le) break;
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
          var E;
          void 0 === T && v && p.push([s, d]), e ? f.pop() : (r = {
            inArray: c,
            index: l,
            keys: u,
            edits: p,
            prev: r
          }, c = Array.isArray(d), u = c ? d : null !== (E = n[d.kind]) && void 0 !== E ? E : [], l = -1, p = [], a && h.push(a), a = d)
        } while (void 0 !== r);
        return 0 !== p.length ? p[p.length - 1][1] : e
      }

      function Fe(e) {
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
            } = $e(e[t], i);
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
                  else if (a === Le) t[s] = Le;
                  else if (void 0 !== a) return a
                }
            },
            leave(...n) {
              const i = n[0];
              for (let o = 0; o < e.length; o++)
                if (null === t[o]) {
                  var r;
                  const i = null === (r = s[o]) || void 0 === r ? void 0 : r.apply(e[o], n);
                  if (i === Le) t[o] = Le;
                  else if (void 0 !== i && !1 !== i) return i
                } else t[o] === i && (t[o] = null)
            }
          };
          n[i] = a
        }
        return n
      }

      function $e(e, t) {
        const n = e[t];
        return "object" == typeof n ? n : "function" == typeof n ? {
          enter: n,
          leave: void 0
        } : {
          enter: e.enter,
          leave: e.leave
        }
      }

      function Ce(e, t, n) {
        const {
          enter: i,
          leave: r
        } = $e(e, t);
        return n ? r : i
      }

      function Ve(e) {
        return xe(e, Ue)
      }
      const Ue = {
        Name: {
          leave: e => e.value
        },
        Variable: {
          leave: e => "$" + e.name
        },
        Document: {
          leave: e => Me(e.definitions, "\n\n")
        },
        OperationDefinition: {
          leave(e) {
            const t = Ge(e.variableDefinitions) ? Pe("(\n", Me(e.variableDefinitions, "\n"), "\n)") : Pe("(", Me(e.variableDefinitions, ", "), ")"),
              n = Pe("", e.description, "\n") + Me([e.operation, Me([e.name, t]), Me(e.directives, " ")], " ");
            return ("query" === n ? "" : n + " ") + e.selectionSet
          }
        },
        VariableDefinition: {
          leave: ({
            variable: e,
            type: t,
            defaultValue: n,
            directives: i,
            description: r
          }) => Pe("", r, "\n") + e + ": " + t + Pe(" = ", n) + Pe(" ", Me(i, " "))
        },
        SelectionSet: {
          leave: ({
            selections: e
          }) => je(e)
        },
        Field: {
          leave({
            alias: e,
            name: t,
            arguments: n,
            directives: i,
            selectionSet: r
          }) {
            const o = Pe("", e, ": ") + t;
            let s = o + Pe("(", Me(n, ", "), ")");
            return s.length > 80 && (s = o + Pe("(\n", Be(Me(n, "\n")), "\n)")), Me([s, Me(i, " "), r], " ")
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
          }) => "..." + e + Pe(" ", Me(t, " "))
        },
        InlineFragment: {
          leave: ({
            typeCondition: e,
            directives: t,
            selectionSet: n
          }) => Me(["...", Pe("on ", e), Me(t, " "), n], " ")
        },
        FragmentDefinition: {
          leave: ({
            name: e,
            typeCondition: t,
            variableDefinitions: n,
            directives: i,
            selectionSet: r,
            description: o
          }) => Pe("", o, "\n") + `fragment ${e}${Pe("(",Me(n,", "),")")} ` + `on ${t} ${Pe("",Me(i," ")," ")}` + r
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
          }) => t ? C(e) : `"${e.replace(we,Re)}"`
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
          }) => "[" + Me(e, ", ") + "]"
        },
        ObjectValue: {
          leave: ({
            fields: e
          }) => "{" + Me(e, ", ") + "}"
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
          }) => "@" + e + Pe("(", Me(t, ", "), ")")
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
          }) => Pe("", e, "\n") + Me(["schema", Me(t, " "), je(n)], " ")
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
          }) => Pe("", e, "\n") + Me(["scalar", t, Me(n, " ")], " ")
        },
        ObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: n,
            directives: i,
            fields: r
          }) => Pe("", e, "\n") + Me(["type", t, Pe("implements ", Me(n, " & ")), Me(i, " "), je(r)], " ")
        },
        FieldDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: n,
            type: i,
            directives: r
          }) => Pe("", e, "\n") + t + (Ge(n) ? Pe("(\n", Be(Me(n, "\n")), "\n)") : Pe("(", Me(n, ", "), ")")) + ": " + i + Pe(" ", Me(r, " "))
        },
        InputValueDefinition: {
          leave: ({
            description: e,
            name: t,
            type: n,
            defaultValue: i,
            directives: r
          }) => Pe("", e, "\n") + Me([t + ": " + n, Pe("= ", i), Me(r, " ")], " ")
        },
        InterfaceTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: n,
            directives: i,
            fields: r
          }) => Pe("", e, "\n") + Me(["interface", t, Pe("implements ", Me(n, " & ")), Me(i, " "), je(r)], " ")
        },
        UnionTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n,
            types: i
          }) => Pe("", e, "\n") + Me(["union", t, Me(n, " "), Pe("= ", Me(i, " | "))], " ")
        },
        EnumTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n,
            values: i
          }) => Pe("", e, "\n") + Me(["enum", t, Me(n, " "), je(i)], " ")
        },
        EnumValueDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n
          }) => Pe("", e, "\n") + Me([t, Me(n, " ")], " ")
        },
        InputObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n,
            fields: i
          }) => Pe("", e, "\n") + Me(["input", t, Me(n, " "), je(i)], " ")
        },
        DirectiveDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: n,
            repeatable: i,
            locations: r
          }) => Pe("", e, "\n") + "directive @" + t + (Ge(n) ? Pe("(\n", Be(Me(n, "\n")), "\n)") : Pe("(", Me(n, ", "), ")")) + (i ? " repeatable" : "") + " on " + Me(r, " | ")
        },
        SchemaExtension: {
          leave: ({
            directives: e,
            operationTypes: t
          }) => Me(["extend schema", Me(e, " "), je(t)], " ")
        },
        ScalarTypeExtension: {
          leave: ({
            name: e,
            directives: t
          }) => Me(["extend scalar", e, Me(t, " ")], " ")
        },
        ObjectTypeExtension: {
          leave: ({
            name: e,
            interfaces: t,
            directives: n,
            fields: i
          }) => Me(["extend type", e, Pe("implements ", Me(t, " & ")), Me(n, " "), je(i)], " ")
        },
        InterfaceTypeExtension: {
          leave: ({
            name: e,
            interfaces: t,
            directives: n,
            fields: i
          }) => Me(["extend interface", e, Pe("implements ", Me(t, " & ")), Me(n, " "), je(i)], " ")
        },
        UnionTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            types: n
          }) => Me(["extend union", e, Me(t, " "), Pe("= ", Me(n, " | "))], " ")
        },
        EnumTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            values: n
          }) => Me(["extend enum", e, Me(t, " "), je(n)], " ")
        },
        InputObjectTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            fields: n
          }) => Me(["extend input", e, Me(t, " "), je(n)], " ")
        },
        TypeCoordinate: {
          leave: ({
            name: e
          }) => e
        },
        MemberCoordinate: {
          leave: ({
            name: e,
            memberName: t
          }) => Me([e, Pe(".", t)])
        },
        ArgumentCoordinate: {
          leave: ({
            name: e,
            fieldName: t,
            argumentName: n
          }) => Me([e, Pe(".", t), Pe("(", n, ":)")])
        },
        DirectiveCoordinate: {
          leave: ({
            name: e
          }) => Me(["@", e])
        },
        DirectiveArgumentCoordinate: {
          leave: ({
            name: e,
            argumentName: t
          }) => Me(["@", e, Pe("(", t, ":)")])
        }
      };

      function Me(e, t = "") {
        var n;
        return null !== (n = null == e ? void 0 : e.filter(e => e).join(t)) && void 0 !== n ? n : ""
      }

      function je(e) {
        return Pe("{\n", Be(Me(e, "\n")), "\n}")
      }

      function Pe(e, t, n = "") {
        return null != t && "" !== t ? e + t + n : ""
      }

      function Be(e) {
        return Pe("  ", e.replace(/\n/g, "\n  "))
      }

      function Ge(e) {
        var t;
        return null !== (t = null == e ? void 0 : e.some(e => e.includes("\n"))) && void 0 !== t && t
      }

      function Ye(e, t) {
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
            return e.values.map(e => Ye(e, t));
          case D.OBJECT:
            return Ne(e.fields, e => e.name.value, e => Ye(e.value, t));
          case D.VARIABLE:
            return null == t ? void 0 : t[e.name.value]
        }
      }

      function Qe(e) {
        if (null != e || o(!1, "Must provide name."), "string" == typeof e || o(!1, "Expected name to be a string."), 0 === e.length) throw new h("Expected name to be a non-empty string.");
        for (let t = 1; t < e.length; ++t)
          if (!L(e.charCodeAt(t))) throw new h(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);
        if (!k(e.charCodeAt(0))) throw new h(`Names must start with [_a-zA-Z] but "${e}" does not.`);
        return e
      }

      function qe(e) {
        if ("true" === e || "false" === e || "null" === e) throw new h(`Enum values cannot be named: ${e}`);
        return Qe(e)
      }

      function Je(e) {
        return Xe(e) || He(e) || Ze(e) || tt(e) || it(e) || ot(e) || at(e) || ut(e)
      }

      function Ke(e) {
        if (!Je(e)) throw new Error(`Expected ${re(e)} to be a GraphQL type.`);
        return e
      }

      function Xe(e) {
        return se(e, xt)
      }

      function ze(e) {
        if (!Xe(e)) throw new Error(`Expected ${re(e)} to be a GraphQL Scalar type.`);
        return e
      }

      function He(e) {
        return se(e, Ft)
      }

      function We(e) {
        if (!He(e)) throw new Error(`Expected ${re(e)} to be a GraphQL Object type.`);
        return e
      }

      function Ze(e) {
        return se(e, Bt)
      }

      function et(e) {
        if (!Ze(e)) throw new Error(`Expected ${re(e)} to be a GraphQL Interface type.`);
        return e
      }

      function tt(e) {
        return se(e, Gt)
      }

      function nt(e) {
        if (!tt(e)) throw new Error(`Expected ${re(e)} to be a GraphQL Union type.`);
        return e
      }

      function it(e) {
        return se(e, Qt)
      }

      function rt(e) {
        if (!it(e)) throw new Error(`Expected ${re(e)} to be a GraphQL Enum type.`);
        return e
      }

      function ot(e) {
        return se(e, Kt)
      }

      function st(e) {
        if (!ot(e)) throw new Error(`Expected ${re(e)} to be a GraphQL Input Object type.`);
        return e
      }

      function at(e) {
        return se(e, gt)
      }

      function ct(e) {
        if (!at(e)) throw new Error(`Expected ${re(e)} to be a GraphQL List type.`);
        return e
      }

      function ut(e) {
        return se(e, It)
      }

      function lt(e) {
        if (!ut(e)) throw new Error(`Expected ${re(e)} to be a GraphQL Non-Null type.`);
        return e
      }

      function pt(e) {
        return Xe(e) || it(e) || ot(e) || _t(e) && pt(e.ofType)
      }

      function dt(e) {
        if (!pt(e)) throw new Error(`Expected ${re(e)} to be a GraphQL input type.`);
        return e
      }

      function ft(e) {
        return Xe(e) || He(e) || Ze(e) || tt(e) || it(e) || _t(e) && ft(e.ofType)
      }

      function ht(e) {
        if (!ft(e)) throw new Error(`Expected ${re(e)} to be a GraphQL output type.`);
        return e
      }

      function mt(e) {
        return Xe(e) || it(e)
      }

      function yt(e) {
        if (!mt(e)) throw new Error(`Expected ${re(e)} to be a GraphQL leaf type.`);
        return e
      }

      function Et(e) {
        return He(e) || Ze(e) || tt(e)
      }

      function vt(e) {
        if (!Et(e)) throw new Error(`Expected ${re(e)} to be a GraphQL composite type.`);
        return e
      }

      function Tt(e) {
        return Ze(e) || tt(e)
      }

      function Nt(e) {
        if (!Tt(e)) throw new Error(`Expected ${re(e)} to be a GraphQL abstract type.`);
        return e
      }
      class gt {
        constructor(e) {
          Je(e) || o(!1, `Expected ${re(e)} to be a GraphQL type.`), this.ofType = e
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
      class It {
        constructor(e) {
          bt(e) || o(!1, `Expected ${re(e)} to be a GraphQL nullable type.`), this.ofType = e
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

      function _t(e) {
        return at(e) || ut(e)
      }

      function Ot(e) {
        if (!_t(e)) throw new Error(`Expected ${re(e)} to be a GraphQL wrapping type.`);
        return e
      }

      function bt(e) {
        return Je(e) && !ut(e)
      }

      function Dt(e) {
        if (!bt(e)) throw new Error(`Expected ${re(e)} to be a GraphQL nullable type.`);
        return e
      }

      function At(e) {
        if (e) return ut(e) ? e.ofType : e
      }

      function St(e) {
        return Xe(e) || He(e) || Ze(e) || tt(e) || it(e) || ot(e)
      }

      function wt(e) {
        if (!St(e)) throw new Error(`Expected ${re(e)} to be a GraphQL named type.`);
        return e
      }

      function Rt(e) {
        if (e) {
          let t = e;
          for (; _t(t);) t = t.ofType;
          return t
        }
      }

      function kt(e) {
        return "function" == typeof e ? e() : e
      }

      function Lt(e) {
        return "function" == typeof e ? e() : e
      }
      class xt {
        constructor(e) {
          var t, n, i, r;
          const s = null !== (t = e.parseValue) && void 0 !== t ? t : ve;
          this.name = Qe(e.name), this.description = e.description, this.specifiedByURL = e.specifiedByURL, this.serialize = null !== (n = e.serialize) && void 0 !== n ? n : ve, this.parseValue = s, this.parseLiteral = null !== (i = e.parseLiteral) && void 0 !== i ? i : (e, t) => s(Ye(e, t)), this.extensions = Se(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (r = e.extensionASTNodes) && void 0 !== r ? r : [], null == e.specifiedByURL || "string" == typeof e.specifiedByURL || o(!1, `${this.name} must provide "specifiedByURL" as a string, but got: ${re(e.specifiedByURL)}.`), null == e.serialize || "function" == typeof e.serialize || o(!1, `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`), e.parseLiteral && ("function" == typeof e.parseValue && "function" == typeof e.parseLiteral || o(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`))
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
      class Ft {
        constructor(e) {
          var t;
          this.name = Qe(e.name), this.description = e.description, this.isTypeOf = e.isTypeOf, this.extensions = Se(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._fields = () => Ct(e), this._interfaces = () => $t(e), null == e.isTypeOf || "function" == typeof e.isTypeOf || o(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${re(e.isTypeOf)}.`)
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
            fields: Mt(this.getFields()),
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

      function $t(e) {
        var t;
        const n = kt(null !== (t = e.interfaces) && void 0 !== t ? t : []);
        return Array.isArray(n) || o(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`), n
      }

      function Ct(e) {
        const t = Lt(e.fields);
        return Ut(t) || o(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), ge(t, (t, n) => {
          var i;
          Ut(t) || o(!1, `${e.name}.${n} field config must be an object.`), null == t.resolve || "function" == typeof t.resolve || o(!1, `${e.name}.${n} field resolver must be a function if provided, but got: ${re(t.resolve)}.`);
          const r = null !== (i = t.args) && void 0 !== i ? i : {};
          return Ut(r) || o(!1, `${e.name}.${n} args must be an object with argument names as keys.`), {
            name: Qe(n),
            description: t.description,
            type: t.type,
            args: Vt(r),
            resolve: t.resolve,
            subscribe: t.subscribe,
            deprecationReason: t.deprecationReason,
            extensions: Se(t.extensions),
            astNode: t.astNode
          }
        })
      }

      function Vt(e) {
        return Object.entries(e).map(([e, t]) => ({
          name: Qe(e),
          description: t.description,
          type: t.type,
          defaultValue: t.defaultValue,
          deprecationReason: t.deprecationReason,
          extensions: Se(t.extensions),
          astNode: t.astNode
        }))
      }

      function Ut(e) {
        return a(e) && !Array.isArray(e)
      }

      function Mt(e) {
        return ge(e, e => ({
          description: e.description,
          type: e.type,
          args: jt(e.args),
          resolve: e.resolve,
          subscribe: e.subscribe,
          deprecationReason: e.deprecationReason,
          extensions: e.extensions,
          astNode: e.astNode
        }))
      }

      function jt(e) {
        return Ne(e, e => e.name, e => ({
          description: e.description,
          type: e.type,
          defaultValue: e.defaultValue,
          deprecationReason: e.deprecationReason,
          extensions: e.extensions,
          astNode: e.astNode
        }))
      }

      function Pt(e) {
        return ut(e.type) && void 0 === e.defaultValue
      }
      class Bt {
        constructor(e) {
          var t;
          this.name = Qe(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = Se(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._fields = Ct.bind(void 0, e), this._interfaces = $t.bind(void 0, e), null == e.resolveType || "function" == typeof e.resolveType || o(!1, `${this.name} must provide "resolveType" as a function, but got: ${re(e.resolveType)}.`)
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
            fields: Mt(this.getFields()),
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
      class Gt {
        constructor(e) {
          var t;
          this.name = Qe(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = Se(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._types = Yt.bind(void 0, e), null == e.resolveType || "function" == typeof e.resolveType || o(!1, `${this.name} must provide "resolveType" as a function, but got: ${re(e.resolveType)}.`)
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

      function Yt(e) {
        const t = kt(e.types);
        return Array.isArray(t) || o(!1, `Must provide Array of types or a function which returns such an array for Union ${e.name}.`), t
      }
      class Qt {
        constructor(e) {
          var t;
          this.name = Qe(e.name), this.description = e.description, this.extensions = Se(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._values = "function" == typeof e.values ? e.values : Jt(this.name, e.values), this._valueLookup = null, this._nameLookup = null
        }
        get[Symbol.toStringTag]() {
          return "GraphQLEnumType"
        }
        getValues() {
          return "function" == typeof this._values && (this._values = Jt(this.name, this._values())), this._values
        }
        getValue(e) {
          return null === this._nameLookup && (this._nameLookup = Te(this.getValues(), e => e.name)), this._nameLookup[e]
        }
        serialize(e) {
          null === this._valueLookup && (this._valueLookup = new Map(this.getValues().map(e => [e.value, e])));
          const t = this._valueLookup.get(e);
          if (void 0 === t) throw new h(`Enum "${this.name}" cannot represent value: ${re(e)}`);
          return t.name
        }
        parseValue(e) {
          if ("string" != typeof e) {
            const t = re(e);
            throw new h(`Enum "${this.name}" cannot represent non-string value: ${t}.` + qt(this, t))
          }
          const t = this.getValue(e);
          if (null == t) throw new h(`Value "${e}" does not exist in "${this.name}" enum.` + qt(this, e));
          return t.value
        }
        parseLiteral(e, t) {
          if (e.kind !== D.ENUM) {
            const t = Ve(e);
            throw new h(`Enum "${this.name}" cannot represent non-enum value: ${t}.` + qt(this, t), {
              nodes: e
            })
          }
          const n = this.getValue(e.value);
          if (null == n) {
            const t = Ve(e);
            throw new h(`Value "${t}" does not exist in "${this.name}" enum.` + qt(this, t), {
              nodes: e
            })
          }
          return n.value
        }
        toConfig() {
          const e = Ne(this.getValues(), e => e.name, e => ({
            description: e.description,
            value: e.value,
            deprecationReason: e.deprecationReason,
            extensions: e.extensions,
            astNode: e.astNode
          }));
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

      function qt(e, t) {
        return Ee("the enum value", be(t, e.getValues().map(e => e.name)))
      }

      function Jt(e, t) {
        return Ut(t) || o(!1, `${e} values must be an object with value names as keys.`), Object.entries(t).map(([t, n]) => (Ut(n) || o(!1, `${e}.${t} must refer to an object with a "value" key representing an internal value but got: ${re(n)}.`), {
          name: qe(t),
          description: n.description,
          value: void 0 !== n.value ? n.value : t,
          deprecationReason: n.deprecationReason,
          extensions: Se(n.extensions),
          astNode: n.astNode
        }))
      }
      class Kt {
        constructor(e) {
          var t, n;
          this.name = Qe(e.name), this.description = e.description, this.extensions = Se(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this.isOneOf = null !== (n = e.isOneOf) && void 0 !== n && n, this._fields = Xt.bind(void 0, e)
        }
        get[Symbol.toStringTag]() {
          return "GraphQLInputObjectType"
        }
        getFields() {
          return "function" == typeof this._fields && (this._fields = this._fields()), this._fields
        }
        toConfig() {
          const e = ge(this.getFields(), e => ({
            description: e.description,
            type: e.type,
            defaultValue: e.defaultValue,
            deprecationReason: e.deprecationReason,
            extensions: e.extensions,
            astNode: e.astNode
          }));
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

      function Xt(e) {
        const t = Lt(e.fields);
        return Ut(t) || o(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), ge(t, (t, n) => (!("resolve" in t) || o(!1, `${e.name}.${n} field has a resolve property, but Input Types cannot define resolvers.`), {
          name: Qe(n),
          description: t.description,
          type: t.type,
          defaultValue: t.defaultValue,
          deprecationReason: t.deprecationReason,
          extensions: Se(t.extensions),
          astNode: t.astNode
        }))
      }

      function zt(e) {
        return ut(e.type) && void 0 === e.defaultValue
      }

      function Ht(e, t) {
        return e === t || (ut(e) && ut(t) || !(!at(e) || !at(t))) && Ht(e.ofType, t.ofType)
      }

      function Wt(e, t, n) {
        return t === n || (ut(n) ? !!ut(t) && Wt(e, t.ofType, n.ofType) : ut(t) ? Wt(e, t.ofType, n) : at(n) ? !!at(t) && Wt(e, t.ofType, n.ofType) : !at(t) && Tt(n) && (Ze(t) || He(t)) && e.isSubType(n, t))
      }

      function Zt(e, t, n) {
        return t === n || (Tt(t) ? Tt(n) ? e.getPossibleTypes(t).some(t => e.isSubType(n, t)) : e.isSubType(t, n) : !!Tt(n) && e.isSubType(n, t))
      }
      const en = 2147483647,
        tn = -2147483648,
        nn = new xt({
          name: "Int",
          description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
          serialize(e) {
            const t = ln(e);
            if ("boolean" == typeof t) return t ? 1 : 0;
            let n = t;
            if ("string" == typeof t && "" !== t && (n = Number(t)), "number" != typeof n || !Number.isInteger(n)) throw new h(`Int cannot represent non-integer value: ${re(t)}`);
            if (n > en || n < tn) throw new h("Int cannot represent non 32-bit signed integer value: " + re(t));
            return n
          },
          parseValue(e) {
            if ("number" != typeof e || !Number.isInteger(e)) throw new h(`Int cannot represent non-integer value: ${re(e)}`);
            if (e > en || e < tn) throw new h(`Int cannot represent non 32-bit signed integer value: ${e}`);
            return e
          },
          parseLiteral(e) {
            if (e.kind !== D.INT) throw new h(`Int cannot represent non-integer value: ${Ve(e)}`, {
              nodes: e
            });
            const t = parseInt(e.value, 10);
            if (t > en || t < tn) throw new h(`Int cannot represent non 32-bit signed integer value: ${e.value}`, {
              nodes: e
            });
            return t
          }
        }),
        rn = new xt({
          name: "Float",
          description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
          serialize(e) {
            const t = ln(e);
            if ("boolean" == typeof t) return t ? 1 : 0;
            let n = t;
            if ("string" == typeof t && "" !== t && (n = Number(t)), "number" != typeof n || !Number.isFinite(n)) throw new h(`Float cannot represent non numeric value: ${re(t)}`);
            return n
          },
          parseValue(e) {
            if ("number" != typeof e || !Number.isFinite(e)) throw new h(`Float cannot represent non numeric value: ${re(e)}`);
            return e
          },
          parseLiteral(e) {
            if (e.kind !== D.FLOAT && e.kind !== D.INT) throw new h(`Float cannot represent non numeric value: ${Ve(e)}`, e);
            return parseFloat(e.value)
          }
        }),
        on = new xt({
          name: "String",
          description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
          serialize(e) {
            const t = ln(e);
            if ("string" == typeof t) return t;
            if ("boolean" == typeof t) return t ? "true" : "false";
            if ("number" == typeof t && Number.isFinite(t)) return t.toString();
            throw new h(`String cannot represent value: ${re(e)}`)
          },
          parseValue(e) {
            if ("string" != typeof e) throw new h(`String cannot represent a non string value: ${re(e)}`);
            return e
          },
          parseLiteral(e) {
            if (e.kind !== D.STRING) throw new h(`String cannot represent a non string value: ${Ve(e)}`, {
              nodes: e
            });
            return e.value
          }
        }),
        sn = new xt({
          name: "Boolean",
          description: "The `Boolean` scalar type represents `true` or `false`.",
          serialize(e) {
            const t = ln(e);
            if ("boolean" == typeof t) return t;
            if (Number.isFinite(t)) return 0 !== t;
            throw new h(`Boolean cannot represent a non boolean value: ${re(t)}`)
          },
          parseValue(e) {
            if ("boolean" != typeof e) throw new h(`Boolean cannot represent a non boolean value: ${re(e)}`);
            return e
          },
          parseLiteral(e) {
            if (e.kind !== D.BOOLEAN) throw new h(`Boolean cannot represent a non boolean value: ${Ve(e)}`, {
              nodes: e
            });
            return e.value
          }
        }),
        an = new xt({
          name: "ID",
          description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
          serialize(e) {
            const t = ln(e);
            if ("string" == typeof t) return t;
            if (Number.isInteger(t)) return String(t);
            throw new h(`ID cannot represent value: ${re(e)}`)
          },
          parseValue(e) {
            if ("string" == typeof e) return e;
            if ("number" == typeof e && Number.isInteger(e)) return e.toString();
            throw new h(`ID cannot represent value: ${re(e)}`)
          },
          parseLiteral(e) {
            if (e.kind !== D.STRING && e.kind !== D.INT) throw new h("ID cannot represent a non-string and non-integer value: " + Ve(e), {
              nodes: e
            });
            return e.value
          }
        }),
        cn = Object.freeze([on, nn, rn, sn, an]);

      function un(e) {
        return cn.some(({
          name: t
        }) => e.name === t)
      }

      function ln(e) {
        if (a(e)) {
          if ("function" == typeof e.valueOf) {
            const t = e.valueOf();
            if (!a(t)) return t
          }
          if ("function" == typeof e.toJSON) return e.toJSON()
        }
        return e
      }

      function pn(e) {
        return se(e, fn)
      }

      function dn(e) {
        if (!pn(e)) throw new Error(`Expected ${re(e)} to be a GraphQL directive.`);
        return e
      }
      class fn {
        constructor(e) {
          var t, n;
          this.name = Qe(e.name), this.description = e.description, this.locations = e.locations, this.isRepeatable = null !== (t = e.isRepeatable) && void 0 !== t && t, this.extensions = Se(e.extensions), this.astNode = e.astNode, Array.isArray(e.locations) || o(!1, `@${e.name} locations must be an Array.`);
          const i = null !== (n = e.args) && void 0 !== n ? n : {};
          a(i) && !Array.isArray(i) || o(!1, `@${e.name} args must be an object with argument names as keys.`), this.args = Vt(i)
        }
        get[Symbol.toStringTag]() {
          return "GraphQLDirective"
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            locations: this.locations,
            args: jt(this.args),
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
      const hn = new fn({
          name: "include",
          description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
          locations: [b.FIELD, b.FRAGMENT_SPREAD, b.INLINE_FRAGMENT],
          args: {
            if: {
              type: new It(sn),
              description: "Included when true."
            }
          }
        }),
        mn = new fn({
          name: "skip",
          description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
          locations: [b.FIELD, b.FRAGMENT_SPREAD, b.INLINE_FRAGMENT],
          args: {
            if: {
              type: new It(sn),
              description: "Skipped when true."
            }
          }
        }),
        yn = "No longer supported",
        En = new fn({
          name: "deprecated",
          description: "Marks an element of a GraphQL schema as no longer supported.",
          locations: [b.FIELD_DEFINITION, b.ARGUMENT_DEFINITION, b.INPUT_FIELD_DEFINITION, b.ENUM_VALUE],
          args: {
            reason: {
              type: on,
              description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
              defaultValue: yn
            }
          }
        }),
        vn = new fn({
          name: "specifiedBy",
          description: "Exposes a URL that specifies the behavior of this scalar.",
          locations: [b.SCALAR],
          args: {
            url: {
              type: new It(on),
              description: "The URL that specifies the behavior of this scalar."
            }
          }
        }),
        Tn = new fn({
          name: "oneOf",
          description: "Indicates exactly one field must be supplied and this field must not be `null`.",
          locations: [b.INPUT_OBJECT],
          args: {}
        }),
        Nn = Object.freeze([hn, mn, En, vn, Tn]);

      function gn(e) {
        return Nn.some(({
          name: t
        }) => t === e.name)
      }

      function In(e) {
        return "object" == typeof e && "function" == typeof(null == e ? void 0 : e[Symbol.iterator])
      }

      function _n(e, t) {
        if (ut(t)) {
          const n = _n(e, t.ofType);
          return (null == n ? void 0 : n.kind) === D.NULL ? null : n
        }
        if (null === e) return {
          kind: D.NULL
        };
        if (void 0 === e) return null;
        if (at(t)) {
          const n = t.ofType;
          if (In(e)) {
            const t = [];
            for (const i of e) {
              const e = _n(i, n);
              null != e && t.push(e)
            }
            return {
              kind: D.LIST,
              values: t
            }
          }
          return _n(e, n)
        }
        if (ot(t)) {
          if (!a(e)) return null;
          const n = [];
          for (const i of Object.values(t.getFields())) {
            const t = _n(e[i.name], i.type);
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
        if (mt(t)) {
          const n = t.serialize(e);
          if (null == n) return null;
          if ("boolean" == typeof n) return {
            kind: D.BOOLEAN,
            value: n
          };
          if ("number" == typeof n && Number.isFinite(n)) {
            const e = String(n);
            return On.test(e) ? {
              kind: D.INT,
              value: e
            } : {
              kind: D.FLOAT,
              value: e
            }
          }
          if ("string" == typeof n) return it(t) ? {
            kind: D.ENUM,
            value: n
          } : t === an && On.test(n) ? {
            kind: D.INT,
            value: n
          } : {
            kind: D.STRING,
            value: n
          };
          throw new TypeError(`Cannot convert value to AST: ${re(n)}.`)
        }
        c(!1, "Unexpected input type: " + re(t))
      }
      const On = /^-?(?:0|[1-9][0-9]*)$/,
        bn = new Ft({
          name: "__Schema",
          description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
          fields: () => ({
            description: {
              type: on,
              resolve: e => e.description
            },
            types: {
              description: "A list of all types supported by this server.",
              type: new It(new gt(new It(Sn))),
              resolve: e => Object.values(e.getTypeMap())
            },
            queryType: {
              description: "The type that query operations will be rooted at.",
              type: new It(Sn),
              resolve: e => e.getQueryType()
            },
            mutationType: {
              description: "If this server supports mutation, the type that mutation operations will be rooted at.",
              type: Sn,
              resolve: e => e.getMutationType()
            },
            subscriptionType: {
              description: "If this server support subscription, the type that subscription operations will be rooted at.",
              type: Sn,
              resolve: e => e.getSubscriptionType()
            },
            directives: {
              description: "A list of all directives supported by this server.",
              type: new It(new gt(new It(Dn))),
              resolve: e => e.getDirectives()
            }
          })
        }),
        Dn = new Ft({
          name: "__Directive",
          description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
          fields: () => ({
            name: {
              type: new It(on),
              resolve: e => e.name
            },
            description: {
              type: on,
              resolve: e => e.description
            },
            isRepeatable: {
              type: new It(sn),
              resolve: e => e.isRepeatable
            },
            locations: {
              type: new It(new gt(new It(An))),
              resolve: e => e.locations
            },
            args: {
              type: new It(new gt(new It(Rn))),
              args: {
                includeDeprecated: {
                  type: sn,
                  defaultValue: !1
                }
              },
              resolve: (e, {
                includeDeprecated: t
              }) => t ? e.args : e.args.filter(e => null == e.deprecationReason)
            }
          })
        }),
        An = new Qt({
          name: "__DirectiveLocation",
          description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
          values: {
            QUERY: {
              value: b.QUERY,
              description: "Location adjacent to a query operation."
            },
            MUTATION: {
              value: b.MUTATION,
              description: "Location adjacent to a mutation operation."
            },
            SUBSCRIPTION: {
              value: b.SUBSCRIPTION,
              description: "Location adjacent to a subscription operation."
            },
            FIELD: {
              value: b.FIELD,
              description: "Location adjacent to a field."
            },
            FRAGMENT_DEFINITION: {
              value: b.FRAGMENT_DEFINITION,
              description: "Location adjacent to a fragment definition."
            },
            FRAGMENT_SPREAD: {
              value: b.FRAGMENT_SPREAD,
              description: "Location adjacent to a fragment spread."
            },
            INLINE_FRAGMENT: {
              value: b.INLINE_FRAGMENT,
              description: "Location adjacent to an inline fragment."
            },
            VARIABLE_DEFINITION: {
              value: b.VARIABLE_DEFINITION,
              description: "Location adjacent to a variable definition."
            },
            SCHEMA: {
              value: b.SCHEMA,
              description: "Location adjacent to a schema definition."
            },
            SCALAR: {
              value: b.SCALAR,
              description: "Location adjacent to a scalar definition."
            },
            OBJECT: {
              value: b.OBJECT,
              description: "Location adjacent to an object type definition."
            },
            FIELD_DEFINITION: {
              value: b.FIELD_DEFINITION,
              description: "Location adjacent to a field definition."
            },
            ARGUMENT_DEFINITION: {
              value: b.ARGUMENT_DEFINITION,
              description: "Location adjacent to an argument definition."
            },
            INTERFACE: {
              value: b.INTERFACE,
              description: "Location adjacent to an interface definition."
            },
            UNION: {
              value: b.UNION,
              description: "Location adjacent to a union definition."
            },
            ENUM: {
              value: b.ENUM,
              description: "Location adjacent to an enum definition."
            },
            ENUM_VALUE: {
              value: b.ENUM_VALUE,
              description: "Location adjacent to an enum value definition."
            },
            INPUT_OBJECT: {
              value: b.INPUT_OBJECT,
              description: "Location adjacent to an input object type definition."
            },
            INPUT_FIELD_DEFINITION: {
              value: b.INPUT_FIELD_DEFINITION,
              description: "Location adjacent to an input object field definition."
            }
          }
        }),
        Sn = new Ft({
          name: "__Type",
          description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
          fields: () => ({
            kind: {
              type: new It(xn),
              resolve: e => Xe(e) ? Ln.SCALAR : He(e) ? Ln.OBJECT : Ze(e) ? Ln.INTERFACE : tt(e) ? Ln.UNION : it(e) ? Ln.ENUM : ot(e) ? Ln.INPUT_OBJECT : at(e) ? Ln.LIST : ut(e) ? Ln.NON_NULL : void c(!1, `Unexpected type: "${re(e)}".`)
            },
            name: {
              type: on,
              resolve: e => "name" in e ? e.name : void 0
            },
            description: {
              type: on,
              resolve: e => "description" in e ? e.description : void 0
            },
            specifiedByURL: {
              type: on,
              resolve: e => "specifiedByURL" in e ? e.specifiedByURL : void 0
            },
            fields: {
              type: new gt(new It(wn)),
              args: {
                includeDeprecated: {
                  type: sn,
                  defaultValue: !1
                }
              },
              resolve(e, {
                includeDeprecated: t
              }) {
                if (He(e) || Ze(e)) {
                  const n = Object.values(e.getFields());
                  return t ? n : n.filter(e => null == e.deprecationReason)
                }
              }
            },
            interfaces: {
              type: new gt(new It(Sn)),
              resolve(e) {
                if (He(e) || Ze(e)) return e.getInterfaces()
              }
            },
            possibleTypes: {
              type: new gt(new It(Sn)),
              resolve(e, t, n, {
                schema: i
              }) {
                if (Tt(e)) return i.getPossibleTypes(e)
              }
            },
            enumValues: {
              type: new gt(new It(kn)),
              args: {
                includeDeprecated: {
                  type: sn,
                  defaultValue: !1
                }
              },
              resolve(e, {
                includeDeprecated: t
              }) {
                if (it(e)) {
                  const n = e.getValues();
                  return t ? n : n.filter(e => null == e.deprecationReason)
                }
              }
            },
            inputFields: {
              type: new gt(new It(Rn)),
              args: {
                includeDeprecated: {
                  type: sn,
                  defaultValue: !1
                }
              },
              resolve(e, {
                includeDeprecated: t
              }) {
                if (ot(e)) {
                  const n = Object.values(e.getFields());
                  return t ? n : n.filter(e => null == e.deprecationReason)
                }
              }
            },
            ofType: {
              type: Sn,
              resolve: e => "ofType" in e ? e.ofType : void 0
            },
            isOneOf: {
              type: sn,
              resolve: e => {
                if (ot(e)) return e.isOneOf
              }
            }
          })
        }),
        wn = new Ft({
          name: "__Field",
          description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
          fields: () => ({
            name: {
              type: new It(on),
              resolve: e => e.name
            },
            description: {
              type: on,
              resolve: e => e.description
            },
            args: {
              type: new It(new gt(new It(Rn))),
              args: {
                includeDeprecated: {
                  type: sn,
                  defaultValue: !1
                }
              },
              resolve: (e, {
                includeDeprecated: t
              }) => t ? e.args : e.args.filter(e => null == e.deprecationReason)
            },
            type: {
              type: new It(Sn),
              resolve: e => e.type
            },
            isDeprecated: {
              type: new It(sn),
              resolve: e => null != e.deprecationReason
            },
            deprecationReason: {
              type: on,
              resolve: e => e.deprecationReason
            }
          })
        }),
        Rn = new Ft({
          name: "__InputValue",
          description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
          fields: () => ({
            name: {
              type: new It(on),
              resolve: e => e.name
            },
            description: {
              type: on,
              resolve: e => e.description
            },
            type: {
              type: new It(Sn),
              resolve: e => e.type
            },
            defaultValue: {
              type: on,
              description: "A GraphQL-formatted string representing the default value for this input value.",
              resolve(e) {
                const {
                  type: t,
                  defaultValue: n
                } = e, i = _n(n, t);
                return i ? Ve(i) : null
              }
            },
            isDeprecated: {
              type: new It(sn),
              resolve: e => null != e.deprecationReason
            },
            deprecationReason: {
              type: on,
              resolve: e => e.deprecationReason
            }
          })
        }),
        kn = new Ft({
          name: "__EnumValue",
          description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
          fields: () => ({
            name: {
              type: new It(on),
              resolve: e => e.name
            },
            description: {
              type: on,
              resolve: e => e.description
            },
            isDeprecated: {
              type: new It(sn),
              resolve: e => null != e.deprecationReason
            },
            deprecationReason: {
              type: on,
              resolve: e => e.deprecationReason
            }
          })
        });
      var Ln;
      ! function(e) {
        e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.INPUT_OBJECT = "INPUT_OBJECT", e.LIST = "LIST", e.NON_NULL = "NON_NULL"
      }(Ln || (Ln = {}));
      const xn = new Qt({
          name: "__TypeKind",
          description: "An enum describing what kind of type a given `__Type` is.",
          values: {
            SCALAR: {
              value: Ln.SCALAR,
              description: "Indicates this type is a scalar."
            },
            OBJECT: {
              value: Ln.OBJECT,
              description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
            },
            INTERFACE: {
              value: Ln.INTERFACE,
              description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
            },
            UNION: {
              value: Ln.UNION,
              description: "Indicates this type is a union. `possibleTypes` is a valid field."
            },
            ENUM: {
              value: Ln.ENUM,
              description: "Indicates this type is an enum. `enumValues` is a valid field."
            },
            INPUT_OBJECT: {
              value: Ln.INPUT_OBJECT,
              description: "Indicates this type is an input object. `inputFields` is a valid field."
            },
            LIST: {
              value: Ln.LIST,
              description: "Indicates this type is a list. `ofType` is a valid field."
            },
            NON_NULL: {
              value: Ln.NON_NULL,
              description: "Indicates this type is a non-null. `ofType` is a valid field."
            }
          }
        }),
        Fn = {
          name: "__schema",
          type: new It(bn),
          description: "Access the current type schema of this server.",
          args: [],
          resolve: (e, t, n, {
            schema: i
          }) => i,
          deprecationReason: void 0,
          extensions: Object.create(null),
          astNode: void 0
        },
        $n = {
          name: "__type",
          type: Sn,
          description: "Request the type information of a single type.",
          args: [{
            name: "name",
            description: void 0,
            type: new It(on),
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
        Cn = {
          name: "__typename",
          type: new It(on),
          description: "The name of the current Object type at runtime.",
          args: [],
          resolve: (e, t, n, {
            parentType: i
          }) => i.name,
          deprecationReason: void 0,
          extensions: Object.create(null),
          astNode: void 0
        },
        Vn = Object.freeze([bn, Dn, An, Sn, wn, Rn, kn, xn]);

      function Un(e) {
        return Vn.some(({
          name: t
        }) => e.name === t)
      }

      function Mn(e) {
        return se(e, Pn)
      }

      function jn(e) {
        if (!Mn(e)) throw new Error(`Expected ${re(e)} to be a GraphQL schema.`);
        return e
      }
      class Pn {
        constructor(e) {
          var t, n;
          this.__validationErrors = !0 === e.assumeValid ? [] : void 0, a(e) || o(!1, "Must provide configuration object."), !e.types || Array.isArray(e.types) || o(!1, `"types" must be Array if provided but got: ${re(e.types)}.`), !e.directives || Array.isArray(e.directives) || o(!1, `"directives" must be Array if provided but got: ${re(e.directives)}.`), this.description = e.description, this.extensions = Se(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = null !== (t = e.extensionASTNodes) && void 0 !== t ? t : [], this._queryType = e.query, this._mutationType = e.mutation, this._subscriptionType = e.subscription, this._directives = null !== (n = e.directives) && void 0 !== n ? n : Nn;
          const i = new Set(e.types);
          if (null != e.types)
            for (const t of e.types) i.delete(t), Bn(t, i);
          null != this._queryType && Bn(this._queryType, i), null != this._mutationType && Bn(this._mutationType, i), null != this._subscriptionType && Bn(this._subscriptionType, i);
          for (const e of this._directives)
            if (pn(e))
              for (const t of e.args) Bn(t.type, i);
          Bn(bn, i), this._typeMap = Object.create(null), this._subTypeMap = Object.create(null), this._implementationsMap = Object.create(null);
          for (const e of i) {
            if (null == e) continue;
            const t = e.name;
            if (t || o(!1, "One of the provided types for building the Schema is missing a name."), void 0 !== this._typeMap[t]) throw new Error(`Schema must contain uniquely named types but contains multiple types named "${t}".`);
            if (this._typeMap[t] = e, Ze(e)) {
              for (const t of e.getInterfaces())
                if (Ze(t)) {
                  let n = this._implementationsMap[t.name];
                  void 0 === n && (n = this._implementationsMap[t.name] = {
                    objects: [],
                    interfaces: []
                  }), n.interfaces.push(e)
                }
            } else if (He(e))
              for (const t of e.getInterfaces())
                if (Ze(t)) {
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
            case O.QUERY:
              return this.getQueryType();
            case O.MUTATION:
              return this.getMutationType();
            case O.SUBSCRIPTION:
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
          return tt(e) ? e.getTypes() : this.getImplementations(e).objects
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
            if (n = Object.create(null), tt(e))
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
          return this.getDirectives().find(t => t.name === e)
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

      function Bn(e, t) {
        const n = Rt(e);
        if (!t.has(n))
          if (t.add(n), tt(n))
            for (const e of n.getTypes()) Bn(e, t);
          else if (He(n) || Ze(n)) {
          for (const e of n.getInterfaces()) Bn(e, t);
          for (const e of Object.values(n.getFields())) {
            Bn(e.type, t);
            for (const n of e.args) Bn(n.type, t)
          }
        } else if (ot(n))
          for (const e of Object.values(n.getFields())) Bn(e.type, t);
        return t
      }

      function Gn(e) {
        if (jn(e), e.__validationErrors) return e.__validationErrors;
        const t = new Qn(e);
        ! function(e) {
          const t = e.schema,
            n = t.getQueryType();
          if (n) {
            if (!He(n)) {
              var i;
              e.reportError(`Query root type must be Object type, it cannot be ${re(n)}.`, null !== (i = qn(t, O.QUERY)) && void 0 !== i ? i : n.astNode)
            }
          } else e.reportError("Query root type must be provided.", t.astNode);
          const r = t.getMutationType();
          var o;
          r && !He(r) && e.reportError(`Mutation root type must be Object type if provided, it cannot be ${re(r)}.`, null !== (o = qn(t, O.MUTATION)) && void 0 !== o ? o : r.astNode);
          const s = t.getSubscriptionType();
          var a;
          s && !He(s) && e.reportError(`Subscription root type must be Object type if provided, it cannot be ${re(s)}.`, null !== (a = qn(t, O.SUBSCRIPTION)) && void 0 !== a ? a : s.astNode)
        }(t),
        function(e) {
          for (const n of e.schema.getDirectives())
            if (pn(n)) {
              Jn(e, n), 0 === n.locations.length && e.reportError(`Directive @${n.name} must include 1 or more locations.`, n.astNode);
              for (const i of n.args) {
                var t;
                Jn(e, i), pt(i.type) || e.reportError(`The type of @${n.name}(${i.name}:) must be Input Type but got: ${re(i.type)}.`, i.astNode), Pt(i) && null != i.deprecationReason && e.reportError(`Required argument @${n.name}(${i.name}:) cannot be deprecated.`, [ri(i.astNode), null === (t = i.astNode) || void 0 === t ? void 0 : t.type])
              }
            } else e.reportError(`Expected directive but got: ${re(n)}.`, null == n ? void 0 : n.astNode)
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
                  if (ut(t.type) && ot(t.type.ofType)) {
                    const o = t.type.ofType,
                      s = i[o.name];
                    if (n.push(t), void 0 === s) r(o);
                    else {
                      const t = n.slice(s),
                        i = t.map(e => e.name).join(".");
                      e.reportError(`Cannot reference Input Object "${o.name}" within itself through a series of non-null fields: "${i}".`, t.map(e => e.astNode))
                    }
                    n.pop()
                  } i[o.name] = void 0
              }
            }(e),
            n = e.schema.getTypeMap();
          for (const i of Object.values(n)) St(i) ? (Un(i) || Jn(e, i), He(i) || Ze(i) ? (Kn(e, i), Xn(e, i)) : tt(i) ? Wn(e, i) : it(i) ? Zn(e, i) : ot(i) && (ei(e, i), t(i))) : e.reportError(`Expected GraphQL named type but got: ${re(i)}.`, i.astNode)
        }(t);
        const n = t.getErrors();
        return e.__validationErrors = n, n
      }

      function Yn(e) {
        const t = Gn(e);
        if (0 !== t.length) throw new Error(t.map(e => e.message).join("\n\n"))
      }
      class Qn {
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

      function qn(e, t) {
        var n;
        return null === (n = [e.astNode, ...e.extensionASTNodes].flatMap(e => {
          var t;
          return null !== (t = null == e ? void 0 : e.operationTypes) && void 0 !== t ? t : []
        }).find(e => e.operation === t)) || void 0 === n ? void 0 : n.type
      }

      function Jn(e, t) {
        t.name.startsWith("__") && e.reportError(`Name "${t.name}" must not begin with "__", which is reserved by GraphQL introspection.`, t.astNode)
      }

      function Kn(e, t) {
        const n = Object.values(t.getFields());
        0 === n.length && e.reportError(`Type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
        for (const s of n) {
          var i;
          Jn(e, s), ft(s.type) || e.reportError(`The type of ${t.name}.${s.name} must be Output Type but got: ${re(s.type)}.`, null === (i = s.astNode) || void 0 === i ? void 0 : i.type);
          for (const n of s.args) {
            const i = n.name;
            var r, o;
            Jn(e, n), pt(n.type) || e.reportError(`The type of ${t.name}.${s.name}(${i}:) must be Input Type but got: ${re(n.type)}.`, null === (r = n.astNode) || void 0 === r ? void 0 : r.type), Pt(n) && null != n.deprecationReason && e.reportError(`Required argument ${t.name}.${s.name}(${i}:) cannot be deprecated.`, [ri(n.astNode), null === (o = n.astNode) || void 0 === o ? void 0 : o.type])
          }
        }
      }

      function Xn(e, t) {
        const n = Object.create(null);
        for (const i of t.getInterfaces()) Ze(i) ? t !== i ? n[i.name] ? e.reportError(`Type ${t.name} can only implement ${i.name} once.`, ni(t, i)) : (n[i.name] = !0, Hn(e, t, i), zn(e, t, i)) : e.reportError(`Type ${t.name} cannot implement itself because it would create a circular reference.`, ni(t, i)) : e.reportError(`Type ${re(t)} must only implement Interface types, it cannot implement ${re(i)}.`, ni(t, i))
      }

      function zn(e, t, n) {
        const i = t.getFields();
        for (const c of Object.values(n.getFields())) {
          const u = c.name,
            l = i[u];
          if (l) {
            var r, o;
            Wt(e.schema, l.type, c.type) || e.reportError(`Interface field ${n.name}.${u} expects type ${re(c.type)} but ${t.name}.${u} is type ${re(l.type)}.`, [null === (r = c.astNode) || void 0 === r ? void 0 : r.type, null === (o = l.astNode) || void 0 === o ? void 0 : o.type]);
            for (const i of c.args) {
              const r = i.name,
                o = l.args.find(e => e.name === r);
              var s, a;
              o ? Ht(i.type, o.type) || e.reportError(`Interface field argument ${n.name}.${u}(${r}:) expects type ${re(i.type)} but ${t.name}.${u}(${r}:) is type ${re(o.type)}.`, [null === (s = i.astNode) || void 0 === s ? void 0 : s.type, null === (a = o.astNode) || void 0 === a ? void 0 : a.type]) : e.reportError(`Interface field argument ${n.name}.${u}(${r}:) expected but ${t.name}.${u} does not provide it.`, [i.astNode, l.astNode])
            }
            for (const i of l.args) {
              const r = i.name;
              !c.args.find(e => e.name === r) && Pt(i) && e.reportError(`Object field ${t.name}.${u} includes required argument ${r} that is missing from the Interface field ${n.name}.${u}.`, [i.astNode, c.astNode])
            }
          } else e.reportError(`Interface field ${n.name}.${u} expected but ${t.name} does not provide it.`, [c.astNode, t.astNode, ...t.extensionASTNodes])
        }
      }

      function Hn(e, t, n) {
        const i = t.getInterfaces();
        for (const r of n.getInterfaces()) i.includes(r) || e.reportError(r === t ? `Type ${t.name} cannot implement ${n.name} because it would create a circular reference.` : `Type ${t.name} must implement ${r.name} because it is implemented by ${n.name}.`, [...ni(n, r), ...ni(t, n)])
      }

      function Wn(e, t) {
        const n = t.getTypes();
        0 === n.length && e.reportError(`Union type ${t.name} must define one or more member types.`, [t.astNode, ...t.extensionASTNodes]);
        const i = Object.create(null);
        for (const r of n) i[r.name] ? e.reportError(`Union type ${t.name} can only include type ${r.name} once.`, ii(t, r.name)) : (i[r.name] = !0, He(r) || e.reportError(`Union type ${t.name} can only include Object types, it cannot include ${re(r)}.`, ii(t, String(r))))
      }

      function Zn(e, t) {
        const n = t.getValues();
        0 === n.length && e.reportError(`Enum type ${t.name} must define one or more values.`, [t.astNode, ...t.extensionASTNodes]);
        for (const t of n) Jn(e, t)
      }

      function ei(e, t) {
        const n = Object.values(t.getFields());
        0 === n.length && e.reportError(`Input Object type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
        for (const o of n) {
          var i, r;
          Jn(e, o), pt(o.type) || e.reportError(`The type of ${t.name}.${o.name} must be Input Type but got: ${re(o.type)}.`, null === (i = o.astNode) || void 0 === i ? void 0 : i.type), zt(o) && null != o.deprecationReason && e.reportError(`Required input field ${t.name}.${o.name} cannot be deprecated.`, [ri(o.astNode), null === (r = o.astNode) || void 0 === r ? void 0 : r.type]), t.isOneOf && ti(t, o, e)
        }
      }

      function ti(e, t, n) {
        var i;
        ut(t.type) && n.reportError(`OneOf input field ${e.name}.${t.name} must be nullable.`, null === (i = t.astNode) || void 0 === i ? void 0 : i.type), void 0 !== t.defaultValue && n.reportError(`OneOf input field ${e.name}.${t.name} cannot have a default value.`, t.astNode)
      }

      function ni(e, t) {
        const {
          astNode: n,
          extensionASTNodes: i
        } = e;
        return (null != n ? [n, ...i] : i).flatMap(e => {
          var t;
          return null !== (t = e.interfaces) && void 0 !== t ? t : []
        }).filter(e => e.name.value === t.name)
      }

      function ii(e, t) {
        const {
          astNode: n,
          extensionASTNodes: i
        } = e;
        return (null != n ? [n, ...i] : i).flatMap(e => {
          var t;
          return null !== (t = e.types) && void 0 !== t ? t : []
        }).filter(e => e.name.value === t)
      }

      function ri(e) {
        var t;
        return null == e || null === (t = e.directives) || void 0 === t ? void 0 : t.find(e => e.name.value === En.name)
      }

      function oi(e, t) {
        switch (t.kind) {
          case D.LIST_TYPE: {
            const n = oi(e, t.type);
            return n && new gt(n)
          }
          case D.NON_NULL_TYPE: {
            const n = oi(e, t.type);
            return n && new It(n)
          }
          case D.NAMED_TYPE:
            return e.getType(t.name.value)
        }
      }
      class si {
        constructor(e, t, n) {
          this._schema = e, this._typeStack = [], this._parentTypeStack = [], this._inputTypeStack = [], this._fieldDefStack = [], this._defaultValueStack = [], this._directive = null, this._argument = null, this._enumValue = null, this._getFieldDef = null != n ? n : ai, t && (pt(t) && this._inputTypeStack.push(t), Et(t) && this._parentTypeStack.push(t), ft(t) && this._typeStack.push(t))
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
              const e = Rt(this.getType());
              this._parentTypeStack.push(Et(e) ? e : void 0);
              break
            }
            case D.FIELD: {
              const n = this.getParentType();
              let i, r;
              n && (i = this._getFieldDef(t, n, e), i && (r = i.type)), this._fieldDefStack.push(i), this._typeStack.push(ft(r) ? r : void 0);
              break
            }
            case D.DIRECTIVE:
              this._directive = t.getDirective(e.name.value);
              break;
            case D.OPERATION_DEFINITION: {
              const n = t.getRootType(e.operation);
              this._typeStack.push(He(n) ? n : void 0);
              break
            }
            case D.INLINE_FRAGMENT:
            case D.FRAGMENT_DEFINITION: {
              const n = e.typeCondition,
                i = n ? oi(t, n) : Rt(this.getType());
              this._typeStack.push(ft(i) ? i : void 0);
              break
            }
            case D.VARIABLE_DEFINITION: {
              const n = oi(t, e.type);
              this._inputTypeStack.push(pt(n) ? n : void 0);
              break
            }
            case D.ARGUMENT: {
              var n;
              let t, i;
              const r = null !== (n = this.getDirective()) && void 0 !== n ? n : this.getFieldDef();
              r && (t = r.args.find(t => t.name === e.name.value), t && (i = t.type)), this._argument = t, this._defaultValueStack.push(t ? t.defaultValue : void 0), this._inputTypeStack.push(pt(i) ? i : void 0);
              break
            }
            case D.LIST: {
              const e = At(this.getInputType()),
                t = at(e) ? e.ofType : e;
              this._defaultValueStack.push(void 0), this._inputTypeStack.push(pt(t) ? t : void 0);
              break
            }
            case D.OBJECT_FIELD: {
              const t = Rt(this.getInputType());
              let n, i;
              ot(t) && (i = t.getFields()[e.name.value], i && (n = i.type)), this._defaultValueStack.push(i ? i.defaultValue : void 0), this._inputTypeStack.push(pt(n) ? n : void 0);
              break
            }
            case D.ENUM: {
              const t = Rt(this.getInputType());
              let n;
              it(t) && (n = t.getValue(e.value)), this._enumValue = n;
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

      function ai(e, t, n) {
        const i = n.name.value;
        return i === Fn.name && e.getQueryType() === t ? Fn : i === $n.name && e.getQueryType() === t ? $n : i === Cn.name && Et(t) ? Cn : He(t) || Ze(t) ? t.getFields()[i] : void 0
      }

      function ci(e, t) {
        return {
          enter(...n) {
            const i = n[0];
            e.enter(i);
            const r = $e(t, i.kind).enter;
            if (r) {
              const o = r.apply(t, n);
              return void 0 !== o && (e.leave(i), _(o) && e.enter(o)), o
            }
          },
          leave(...n) {
            const i = n[0],
              r = $e(t, i.kind).leave;
            let o;
            return r && (o = r.apply(t, n)), e.leave(i), o
          }
        }
      }

      function ui(e) {
        return li(e) || mi(e) || Ei(e)
      }

      function li(e) {
        return e.kind === D.OPERATION_DEFINITION || e.kind === D.FRAGMENT_DEFINITION
      }

      function pi(e) {
        return e.kind === D.FIELD || e.kind === D.FRAGMENT_SPREAD || e.kind === D.INLINE_FRAGMENT
      }

      function di(e) {
        return e.kind === D.VARIABLE || e.kind === D.INT || e.kind === D.FLOAT || e.kind === D.STRING || e.kind === D.BOOLEAN || e.kind === D.NULL || e.kind === D.ENUM || e.kind === D.LIST || e.kind === D.OBJECT
      }

      function fi(e) {
        return di(e) && (e.kind === D.LIST ? e.values.some(fi) : e.kind === D.OBJECT ? e.fields.some(e => fi(e.value)) : e.kind !== D.VARIABLE)
      }

      function hi(e) {
        return e.kind === D.NAMED_TYPE || e.kind === D.LIST_TYPE || e.kind === D.NON_NULL_TYPE
      }

      function mi(e) {
        return e.kind === D.SCHEMA_DEFINITION || yi(e) || e.kind === D.DIRECTIVE_DEFINITION
      }

      function yi(e) {
        return e.kind === D.SCALAR_TYPE_DEFINITION || e.kind === D.OBJECT_TYPE_DEFINITION || e.kind === D.INTERFACE_TYPE_DEFINITION || e.kind === D.UNION_TYPE_DEFINITION || e.kind === D.ENUM_TYPE_DEFINITION || e.kind === D.INPUT_OBJECT_TYPE_DEFINITION
      }

      function Ei(e) {
        return e.kind === D.SCHEMA_EXTENSION || vi(e)
      }

      function vi(e) {
        return e.kind === D.SCALAR_TYPE_EXTENSION || e.kind === D.OBJECT_TYPE_EXTENSION || e.kind === D.INTERFACE_TYPE_EXTENSION || e.kind === D.UNION_TYPE_EXTENSION || e.kind === D.ENUM_TYPE_EXTENSION || e.kind === D.INPUT_OBJECT_TYPE_EXTENSION
      }

      function Ti(e) {
        return e.kind === D.TYPE_COORDINATE || e.kind === D.MEMBER_COORDINATE || e.kind === D.ARGUMENT_COORDINATE || e.kind === D.DIRECTIVE_COORDINATE || e.kind === D.DIRECTIVE_ARGUMENT_COORDINATE
      }

      function Ni(e) {
        return {
          Document(t) {
            for (const n of t.definitions)
              if (!li(n)) {
                const t = n.kind === D.SCHEMA_DEFINITION || n.kind === D.SCHEMA_EXTENSION ? "schema" : '"' + n.name.value + '"';
                e.reportError(new h(`The ${t} definition is not executable.`, {
                  nodes: n
                }))
              } return !1
          }
        }
      }

      function gi(e) {
        return {
          Field(t) {
            const n = e.getParentType();
            if (n && !e.getFieldDef()) {
              const i = e.getSchema(),
                r = t.name.value;
              let o = Ee("to use an inline fragment on", function(e, t, n) {
                if (!Tt(t)) return [];
                const i = new Set,
                  r = Object.create(null);
                for (const s of e.getPossibleTypes(t))
                  if (s.getFields()[n]) {
                    i.add(s), r[s.name] = 1;
                    for (const e of s.getInterfaces()) {
                      var o;
                      e.getFields()[n] && (i.add(e), r[e.name] = (null !== (o = r[e.name]) && void 0 !== o ? o : 0) + 1)
                    }
                  } return [...i].sort((t, n) => {
                  const i = r[n.name] - r[t.name];
                  return 0 !== i ? i : Ze(t) && e.isSubType(t, n) ? -1 : Ze(n) && e.isSubType(n, t) ? 1 : Ie(t.name, n.name)
                }).map(e => e.name)
              }(i, n, r));
              "" === o && (o = Ee(function(e, t) {
                return He(e) || Ze(e) ? be(t, Object.keys(e.getFields())) : []
              }(n, r))), e.reportError(new h(`Cannot query field "${r}" on type "${n.name}".` + o, {
                nodes: t
              }))
            }
          }
        }
      }

      function Ii(e) {
        return {
          InlineFragment(t) {
            const n = t.typeCondition;
            if (n) {
              const t = oi(e.getSchema(), n);
              if (t && !Et(t)) {
                const t = Ve(n);
                e.reportError(new h(`Fragment cannot condition on non composite type "${t}".`, {
                  nodes: n
                }))
              }
            }
          },
          FragmentDefinition(t) {
            const n = oi(e.getSchema(), t.typeCondition);
            if (n && !Et(n)) {
              const n = Ve(t.typeCondition);
              e.reportError(new h(`Fragment "${t.name.value}" cannot condition on non composite type "${n}".`, {
                nodes: t.typeCondition
              }))
            }
          }
        }
      }

      function _i(e) {
        return {
          ...Oi(e),
          Argument(t) {
            const n = e.getArgument(),
              i = e.getFieldDef(),
              r = e.getParentType();
            if (!n && i && r) {
              const n = t.name.value,
                o = be(n, i.args.map(e => e.name));
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
          i = n ? n.getDirectives() : Nn;
        for (const e of i) t[e.name] = e.args.map(e => e.name);
        const r = e.getDocument().definitions;
        for (const e of r)
          if (e.kind === D.DIRECTIVE_DEFINITION) {
            var o;
            const n = null !== (o = e.arguments) && void 0 !== o ? o : [];
            t[e.name.value] = n.map(e => e.name.value)
          } return {
          Directive(n) {
            const i = n.name.value,
              r = t[i];
            if (n.arguments && r)
              for (const t of n.arguments) {
                const n = t.name.value;
                if (!r.includes(n)) {
                  const o = be(n, r);
                  e.reportError(new h(`Unknown argument "${n}" on directive "@${i}".` + Ee(o), {
                    nodes: t
                  }))
                }
              }
            return !1
          }
        }
      }

      function bi(e) {
        const t = Object.create(null),
          n = e.getSchema(),
          i = n ? n.getDirectives() : Nn;
        for (const e of i) t[e.name] = e.locations;
        const r = e.getDocument().definitions;
        for (const e of r) e.kind === D.DIRECTIVE_DEFINITION && (t[e.name.value] = e.locations.map(e => e.value));
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
                      case O.QUERY:
                        return b.QUERY;
                      case O.MUTATION:
                        return b.MUTATION;
                      case O.SUBSCRIPTION:
                        return b.SUBSCRIPTION
                    }
                  }(t.operation);
                case D.FIELD:
                  return b.FIELD;
                case D.FRAGMENT_SPREAD:
                  return b.FRAGMENT_SPREAD;
                case D.INLINE_FRAGMENT:
                  return b.INLINE_FRAGMENT;
                case D.FRAGMENT_DEFINITION:
                  return b.FRAGMENT_DEFINITION;
                case D.VARIABLE_DEFINITION:
                  return b.VARIABLE_DEFINITION;
                case D.SCHEMA_DEFINITION:
                case D.SCHEMA_EXTENSION:
                  return b.SCHEMA;
                case D.SCALAR_TYPE_DEFINITION:
                case D.SCALAR_TYPE_EXTENSION:
                  return b.SCALAR;
                case D.OBJECT_TYPE_DEFINITION:
                case D.OBJECT_TYPE_EXTENSION:
                  return b.OBJECT;
                case D.FIELD_DEFINITION:
                  return b.FIELD_DEFINITION;
                case D.INTERFACE_TYPE_DEFINITION:
                case D.INTERFACE_TYPE_EXTENSION:
                  return b.INTERFACE;
                case D.UNION_TYPE_DEFINITION:
                case D.UNION_TYPE_EXTENSION:
                  return b.UNION;
                case D.ENUM_TYPE_DEFINITION:
                case D.ENUM_TYPE_EXTENSION:
                  return b.ENUM;
                case D.ENUM_VALUE_DEFINITION:
                  return b.ENUM_VALUE;
                case D.INPUT_OBJECT_TYPE_DEFINITION:
                case D.INPUT_OBJECT_TYPE_EXTENSION:
                  return b.INPUT_OBJECT;
                case D.INPUT_VALUE_DEFINITION: {
                  const t = e[e.length - 3];
                  return "kind" in t || c(!1), t.kind === D.INPUT_OBJECT_TYPE_DEFINITION ? b.INPUT_FIELD_DEFINITION : b.ARGUMENT_DEFINITION
                }
                default:
                  c(!1, "Unexpected kind: " + re(t.kind))
              }
            }(s);
            l && !u.includes(l) && e.reportError(new h(`Directive "@${a}" may not be used on ${l}.`, {
              nodes: n
            }))
          }
        }
      }

      function Di(e) {
        return {
          FragmentSpread(t) {
            const n = t.name.value;
            e.getFragment(n) || e.reportError(new h(`Unknown fragment "${n}".`, {
              nodes: t.name
            }))
          }
        }
      }

      function Ai(e) {
        const t = e.getSchema(),
          n = t ? t.getTypeMap() : Object.create(null),
          i = Object.create(null);
        for (const t of e.getDocument().definitions) yi(t) && (i[t.name.value] = !0);
        const r = [...Object.keys(n), ...Object.keys(i)];
        return {
          NamedType(t, o, s, a, c) {
            const u = t.name.value;
            if (!n[u] && !i[u]) {
              var l;
              const n = null !== (l = c[2]) && void 0 !== l ? l : s,
                i = null != n && "kind" in (p = n) && (mi(p) || Ei(p));
              if (i && Si.includes(u)) return;
              const o = be(u, i ? Si.concat(r) : r);
              e.reportError(new h(`Unknown type "${u}".` + Ee(o), {
                nodes: t
              }))
            }
            var p
          }
        }
      }
      const Si = [...cn, ...Vn].map(e => e.name);

      function wi(e) {
        let t = 0;
        return {
          Document(e) {
            t = e.definitions.filter(e => e.kind === D.OPERATION_DEFINITION).length
          },
          OperationDefinition(n) {
            !n.name && t > 1 && e.reportError(new h("This anonymous operation must be the only defined operation.", {
              nodes: n
            }))
          }
        }
      }

      function Ri(e) {
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

      function ki(e) {
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
          if (n.kind === D.FIELD && ("fields" === n.name.value || "interfaces" === n.name.value || "possibleTypes" === n.name.value || "inputFields" === n.name.value) && ++r >= 3) return !0;
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

      function Li(e) {
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
                  i = t.slice(0, -1).map(e => '"' + e.name.value + '"').join(", ");
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

      function xi(e) {
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

      function Fi(e) {
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

      function $i(e) {
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

      function Ci(e) {
        switch (e.kind) {
          case D.OBJECT:
            return {
              ...e, fields: (t = e.fields, t.map(e => ({
                ...e,
                value: Ci(e.value)
              })).sort((e, t) => Ie(e.name.value, t.name.value)))
            };
          case D.LIST:
            return {
              ...e, values: e.values.map(Ci)
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

      function Vi(e) {
        return Array.isArray(e) ? e.map(([e, t]) => `subfields "${e}" conflict because ` + Vi(t)).join(" and ") : e
      }

      function Ui(e) {
        const t = new Ki,
          n = new Xi,
          i = new Map;
        return {
          SelectionSet(r) {
            const o = function(e, t, n, i, r, o) {
              const s = [],
                [a, c] = Qi(e, t, r, o);
              if (function(e, t, n, i, r, o) {
                  for (const [s, a] of Object.entries(o))
                    if (a.length > 1)
                      for (let o = 0; o < a.length; o++)
                        for (let c = o + 1; c < a.length; c++) {
                          const u = Bi(e, n, i, r, !1, s, a[o], a[c]);
                          u && t.push(u)
                        }
                }(e, s, t, n, i, a), 0 !== c.length)
                for (let r = 0; r < c.length; r++) {
                  Mi(e, s, t, n, i, !1, a, c[r]);
                  for (let o = r + 1; o < c.length; o++) ji(e, s, t, n, i, !1, c[r], c[o])
                }
              return s
            }(e, i, t, n, e.getParentType(), r);
            for (const [
                [t, n], i, r
              ] of o) {
              const o = Vi(n);
              e.reportError(new h(`Fields "${t}" conflict because ${o}. Use different aliases on the fields to fetch both if this was intentional.`, {
                nodes: i.concat(r)
              }))
            }
          }
        }
      }

      function Mi(e, t, n, i, r, o, s, a) {
        if (i.has(s, a, o)) return;
        i.add(s, a, o);
        const c = e.getFragment(a);
        if (!c) return;
        const [u, l] = qi(e, n, c);
        if (s !== u) {
          Pi(e, t, n, i, r, o, s, u);
          for (const a of l) Mi(e, t, n, i, r, o, s, a)
        }
      }

      function ji(e, t, n, i, r, o, s, a) {
        if (s === a) return;
        if (r.has(s, a, o)) return;
        r.add(s, a, o);
        const c = e.getFragment(s),
          u = e.getFragment(a);
        if (!c || !u) return;
        const [l, p] = qi(e, n, c), [d, f] = qi(e, n, u);
        Pi(e, t, n, i, r, o, l, d);
        for (const a of f) ji(e, t, n, i, r, o, s, a);
        for (const s of p) ji(e, t, n, i, r, o, s, a)
      }

      function Pi(e, t, n, i, r, o, s, a) {
        for (const [c, u] of Object.entries(s)) {
          const s = a[c];
          if (s)
            for (const a of u)
              for (const u of s) {
                const s = Bi(e, n, i, r, o, c, a, u);
                s && t.push(s)
              }
        }
      }

      function Bi(e, t, n, i, r, o, s, a) {
        const [c, u, l] = s, [p, d, f] = a, h = r || c !== p && He(c) && He(p);
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
              const r = new Map(i.map(({
                name: e,
                value: t
              }) => [e.value, t]));
              return n.every(e => {
                const t = e.value,
                  n = r.get(e.name.value);
                return void 0 !== n && Gi(t) === Gi(n)
              })
            }(u, d)) return [
            [o, "they have differing arguments"],
            [u],
            [d]
          ]
        }
        const m = null == l ? void 0 : l.type,
          y = null == f ? void 0 : f.type;
        if (m && y && Yi(m, y)) return [
          [o, `they return conflicting types "${re(m)}" and "${re(y)}"`],
          [u],
          [d]
        ];
        const E = u.selectionSet,
          v = d.selectionSet;
        if (E && v) {
          const r = function(e, t, n, i, r, o, s, a, c) {
            const u = [],
              [l, p] = Qi(e, t, o, s),
              [d, f] = Qi(e, t, a, c);
            Pi(e, u, t, n, i, r, l, d);
            for (const o of f) Mi(e, u, t, n, i, r, l, o);
            for (const o of p) Mi(e, u, t, n, i, r, d, o);
            for (const o of p)
              for (const s of f) ji(e, u, t, n, i, r, o, s);
            return u
          }(e, t, n, i, h, Rt(m), E, Rt(y), v);
          return function(e, t, n, i) {
            if (e.length > 0) return [
              [t, e.map(([e]) => e)],
              [n, ...e.map(([, e]) => e).flat()],
              [i, ...e.map(([, , e]) => e).flat()]
            ]
          }(r, o, u, d)
        }
      }

      function Gi(e) {
        return Ve(Ci(e))
      }

      function Yi(e, t) {
        return at(e) ? !at(t) || Yi(e.ofType, t.ofType) : !!at(t) || (ut(e) ? !ut(t) || Yi(e.ofType, t.ofType) : !!ut(t) || !(!mt(e) && !mt(t)) && e !== t)
      }

      function Qi(e, t, n, i) {
        const r = t.get(i);
        if (r) return r;
        const o = Object.create(null),
          s = Object.create(null);
        Ji(e, n, i, o, s);
        const a = [o, Object.keys(s)];
        return t.set(i, a), a
      }

      function qi(e, t, n) {
        const i = t.get(n.selectionSet);
        if (i) return i;
        const r = oi(e.getSchema(), n.typeCondition);
        return Qi(e, t, r, n.selectionSet)
      }

      function Ji(e, t, n, i, r) {
        for (const o of n.selections) switch (o.kind) {
          case D.FIELD: {
            const e = o.name.value;
            let n;
            (He(t) || Ze(t)) && (n = t.getFields()[e]);
            const r = o.alias ? o.alias.value : e;
            i[r] || (i[r] = []), i[r].push([t, o, n]);
            break
          }
          case D.FRAGMENT_SPREAD:
            r[o.name.value] = !0;
            break;
          case D.INLINE_FRAGMENT: {
            const n = o.typeCondition,
              s = n ? oi(e.getSchema(), n) : t;
            Ji(e, s, o.selectionSet, i, r);
            break
          }
        }
      }
      class Ki {
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
      class Xi {
        constructor() {
          this._orderedPairSet = new Ki
        }
        has(e, t, n) {
          return e < t ? this._orderedPairSet.has(e, t, n) : this._orderedPairSet.has(t, e, n)
        }
        add(e, t, n) {
          e < t ? this._orderedPairSet.add(e, t, n) : this._orderedPairSet.add(t, e, n)
        }
      }

      function zi(e) {
        return {
          InlineFragment(t) {
            const n = e.getType(),
              i = e.getParentType();
            if (Et(n) && Et(i) && !Zt(e.getSchema(), n, i)) {
              const r = re(i),
                o = re(n);
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
                  const t = oi(e.getSchema(), n.typeCondition);
                  if (Et(t)) return t
                }
              }(e, n),
              r = e.getParentType();
            if (i && r && !Zt(e.getSchema(), i, r)) {
              const o = re(r),
                s = re(i);
              e.reportError(new h(`Fragment "${n}" cannot be spread here as objects of type "${o}" can never be of type "${s}".`, {
                nodes: t
              }))
            }
          }
        }
      }

      function Hi(e) {
        const t = e.getSchema(),
          n = Object.create(null);
        for (const t of e.getDocument().definitions) yi(t) && (n[t.name.value] = t);
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
          if (o ? a = Wi[o.kind] : s && (a = Xe(u = s) ? D.SCALAR_TYPE_EXTENSION : He(u) ? D.OBJECT_TYPE_EXTENSION : Ze(u) ? D.INTERFACE_TYPE_EXTENSION : tt(u) ? D.UNION_TYPE_EXTENSION : it(u) ? D.ENUM_TYPE_EXTENSION : ot(u) ? D.INPUT_OBJECT_TYPE_EXTENSION : void c(!1, "Unexpected type: " + re(u))), a) {
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
                    c(!1, "Unexpected kind: " + re(e))
                }
              }(i.kind);
              e.reportError(new h(`Cannot extend non-${t} type "${r}".`, {
                nodes: o ? [o, i] : i
              }))
            }
          } else {
            const o = be(r, Object.keys({
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
      const Wi = {
        [D.SCALAR_TYPE_DEFINITION]: D.SCALAR_TYPE_EXTENSION,
        [D.OBJECT_TYPE_DEFINITION]: D.OBJECT_TYPE_EXTENSION,
        [D.INTERFACE_TYPE_DEFINITION]: D.INTERFACE_TYPE_EXTENSION,
        [D.UNION_TYPE_DEFINITION]: D.UNION_TYPE_EXTENSION,
        [D.ENUM_TYPE_DEFINITION]: D.ENUM_TYPE_EXTENSION,
        [D.INPUT_OBJECT_TYPE_DEFINITION]: D.INPUT_OBJECT_TYPE_EXTENSION
      };

      function Zi(e) {
        return {
          ...er(e),
          Field: {
            leave(t) {
              var n;
              const i = e.getFieldDef();
              if (!i) return !1;
              const r = new Set(null === (n = t.arguments) || void 0 === n ? void 0 : n.map(e => e.name.value));
              for (const n of i.args)
                if (!r.has(n.name) && Pt(n)) {
                  const r = re(n.type);
                  e.reportError(new h(`Field "${i.name}" argument "${n.name}" of type "${r}" is required, but it was not provided.`, {
                    nodes: t
                  }))
                }
            }
          }
        }
      }

      function er(e) {
        var t;
        const n = Object.create(null),
          i = e.getSchema(),
          r = null !== (t = null == i ? void 0 : i.getDirectives()) && void 0 !== t ? t : Nn;
        for (const e of r) n[e.name] = Te(e.args.filter(Pt), e => e.name);
        const o = e.getDocument().definitions;
        for (const e of o)
          if (e.kind === D.DIRECTIVE_DEFINITION) {
            var s;
            const t = null !== (s = e.arguments) && void 0 !== s ? s : [];
            n[e.name.value] = Te(t.filter(tr), e => e.name.value)
          } return {
          Directive: {
            leave(t) {
              const i = t.name.value,
                r = n[i];
              if (r) {
                var o;
                const n = null !== (o = t.arguments) && void 0 !== o ? o : [],
                  s = new Set(n.map(e => e.name.value));
                for (const [n, o] of Object.entries(r))
                  if (!s.has(n)) {
                    const r = Je(o.type) ? re(o.type) : Ve(o.type);
                    e.reportError(new h(`Directive "@${i}" argument "${n}" of type "${r}" is required, but it was not provided.`, {
                      nodes: t
                    }))
                  }
              }
            }
          }
        }
      }

      function tr(e) {
        return e.type.kind === D.NON_NULL_TYPE && null == e.defaultValue
      }

      function nr(e) {
        return {
          Field(t) {
            const n = e.getType(),
              i = t.selectionSet;
            if (n)
              if (mt(Rt(n))) {
                if (i) {
                  const r = t.name.value,
                    o = re(n);
                  e.reportError(new h(`Field "${r}" must not have a selection since type "${o}" has no subfields.`, {
                    nodes: i
                  }))
                }
              } else if (i) {
              if (0 === i.selections.length) {
                const i = t.name.value,
                  r = re(n);
                e.reportError(new h(`Field "${i}" of type "${r}" must have at least one field selected.`, {
                  nodes: t
                }))
              }
            } else {
              const i = t.name.value,
                r = re(n);
              e.reportError(new h(`Field "${i}" of type "${r}" must have a selection of subfields. Did you mean "${i} { ... }"?`, {
                nodes: t
              }))
            }
          }
        }
      }

      function ir(e) {
        return e.map(e => "number" == typeof e ? "[" + e.toString() + "]" : "." + e).join("")
      }

      function rr(e, t, n) {
        return {
          prev: e,
          key: t,
          typename: n
        }
      }

      function or(e) {
        const t = [];
        let n = e;
        for (; n;) t.push(n.key), n = n.prev;
        return t.reverse()
      }

      function sr(e, t, n = ar) {
        return cr(e, t, n, void 0)
      }

      function ar(e, t, n) {
        let i = "Invalid value " + re(t);
        throw e.length > 0 && (i += ` at "value${ir(e)}"`), n.message = i + ": " + n.message, n
      }

      function cr(e, t, n, i) {
        if (ut(t)) return null != e ? cr(e, t.ofType, n, i) : void n(or(i), e, new h(`Expected non-nullable type "${re(t)}" not to be null.`));
        if (null == e) return null;
        if (at(t)) {
          const r = t.ofType;
          return In(e) ? Array.from(e, (e, t) => {
            const o = rr(i, t, void 0);
            return cr(e, r, n, o)
          }) : [cr(e, r, n, i)]
        }
        if (ot(t)) {
          if (!a(e) || Array.isArray(e)) return void n(or(i), e, new h(`Expected type "${t.name}" to be an object.`));
          const r = Object.create(null),
            o = t.getFields();
          for (const s of Object.values(o)) {
            const o = e[s.name];
            if (void 0 !== o) r[s.name] = cr(o, s.type, n, rr(i, s.name, t.name));
            else if (void 0 !== s.defaultValue) r[s.name] = s.defaultValue;
            else if (ut(s.type)) {
              const t = re(s.type);
              n(or(i), e, new h(`Field "${s.name}" of required type "${t}" was not provided.`))
            }
          }
          for (const r of Object.keys(e))
            if (!o[r]) {
              const o = be(r, Object.keys(t.getFields()));
              n(or(i), e, new h(`Field "${r}" is not defined by type "${t.name}".` + Ee(o)))
            } if (t.isOneOf) {
            const o = Object.keys(r);
            1 !== o.length && n(or(i), e, new h(`Exactly one key must be specified for OneOf type "${t.name}".`));
            const s = o[0],
              a = r[s];
            null === a && n(or(i).concat(s), a, new h(`Field "${s}" must be non-null.`))
          }
          return {
            ...r
          }
        }
        if (mt(t)) {
          let r;
          try {
            r = t.parseValue(e)
          } catch (r) {
            return void n(or(i), e, r instanceof h ? r : new h(`Expected type "${t.name}". ` + r.message, {
              originalError: r
            }))
          }
          return void 0 === r && n(or(i), e, new h(`Expected type "${t.name}".`)), r
        }
        c(!1, "Unexpected input type: " + re(t))
      }

      function ur(e, t, n) {
        if (e) {
          if (e.kind === D.VARIABLE) {
            const i = e.name.value;
            if (null == n || void 0 === n[i]) return;
            const r = n[i];
            if (null === r && ut(t)) return;
            return r
          }
          if (ut(t)) {
            if (e.kind === D.NULL) return;
            return ur(e, t.ofType, n)
          }
          if (e.kind === D.NULL) return null;
          if (at(t)) {
            const i = t.ofType;
            if (e.kind === D.LIST) {
              const t = [];
              for (const r of e.values)
                if (lr(r, n)) {
                  if (ut(i)) return;
                  t.push(null)
                } else {
                  const e = ur(r, i, n);
                  if (void 0 === e) return;
                  t.push(e)
                } return t
            }
            const r = ur(e, i, n);
            if (void 0 === r) return;
            return [r]
          }
          if (ot(t)) {
            if (e.kind !== D.OBJECT) return;
            const i = Object.create(null),
              r = Te(e.fields, e => e.name.value);
            for (const e of Object.values(t.getFields())) {
              const t = r[e.name];
              if (!t || lr(t.value, n)) {
                if (void 0 !== e.defaultValue) i[e.name] = e.defaultValue;
                else if (ut(e.type)) return;
                continue
              }
              const o = ur(t.value, e.type, n);
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
          if (mt(t)) {
            let i;
            try {
              i = t.parseLiteral(e, n)
            } catch (e) {
              return
            }
            if (void 0 === i) return;
            return i
          }
          c(!1, "Unexpected input type: " + re(t))
        }
      }

      function lr(e, t) {
        return e.kind === D.VARIABLE && (null == t || void 0 === t[e.name.value])
      }

      function pr(e, t, n, i) {
        const r = [],
          o = null == i ? void 0 : i.maxErrors;
        try {
          const i = function(e, t, n, i) {
            const r = Object.create(null);
            for (const o of t) {
              const t = o.variable.name.value,
                s = oi(e, o.type);
              if (!pt(s)) {
                const e = Ve(o.type);
                i(new h(`Variable "$${t}" expected value of type "${e}" which cannot be used as an input type.`, {
                  nodes: o.type
                }));
                continue
              }
              if (!hr(n, t)) {
                if (o.defaultValue) r[t] = ur(o.defaultValue, s);
                else if (ut(s)) {
                  const e = re(s);
                  i(new h(`Variable "$${t}" of required type "${e}" was not provided.`, {
                    nodes: o
                  }))
                }
                continue
              }
              const a = n[t];
              if (null === a && ut(s)) {
                const e = re(s);
                i(new h(`Variable "$${t}" of non-null type "${e}" must not be null.`, {
                  nodes: o
                }));
                continue
              }
              r[t] = sr(a, s, (e, n, r) => {
                let s = `Variable "$${t}" got invalid value ` + re(n);
                e.length > 0 && (s += ` at "${t}${ir(e)}"`), i(new h(s + "; " + r.message, {
                  nodes: o,
                  originalError: r
                }))
              })
            }
            return {
              ...r
            }
          }(e, t, n, e => {
            if (null != o && r.length >= o) throw new h("Too many errors processing variables, error limit reached. Execution aborted.");
            r.push(e)
          });
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

      function dr(e, t, n) {
        var i;
        const r = Object.create(null),
          o = Te(null !== (i = t.arguments) && void 0 !== i ? i : [], e => e.name.value);
        for (const i of e.args) {
          const e = i.name,
            s = i.type,
            a = o[e];
          if (!a) {
            if (void 0 !== i.defaultValue) r[e] = i.defaultValue;
            else if (ut(s)) throw new h(`Argument "${e}" of required type "${re(s)}" was not provided.`, {
              nodes: t
            });
            continue
          }
          const c = a.value;
          let u = c.kind === D.NULL;
          if (c.kind === D.VARIABLE) {
            const t = c.name.value;
            if (null == n || !hr(n, t)) {
              if (void 0 !== i.defaultValue) r[e] = i.defaultValue;
              else if (ut(s)) throw new h(`Argument "${e}" of required type "${re(s)}" was provided the variable "$${t}" which was not provided a runtime value.`, {
                nodes: c
              });
              continue
            }
            u = null == n[t]
          }
          if (u && ut(s)) throw new h(`Argument "${e}" of non-null type "${re(s)}" must not be null.`, {
            nodes: c
          });
          const l = ur(c, s, n);
          if (void 0 === l) throw new h(`Argument "${e}" has invalid value ${Ve(c)}.`, {
            nodes: c
          });
          r[e] = l
        }
        return {
          ...r
        }
      }

      function fr(e, t, n) {
        var i;
        const r = null === (i = t.directives) || void 0 === i ? void 0 : i.find(t => t.name.value === e.name);
        if (r) return dr(e, r, n)
      }

      function hr(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }

      function mr(e, t, n, i, r) {
        const o = new Map;
        return yr(e, t, n, i, r, o, new Set), o
      }

      function yr(e, t, n, i, r, o, s) {
        for (const a of r.selections) switch (a.kind) {
          case D.FIELD: {
            if (!Er(n, a)) continue;
            const e = Tr(a),
              t = o.get(e);
            void 0 !== t ? t.push(a) : o.set(e, [a]);
            break
          }
          case D.INLINE_FRAGMENT:
            if (!Er(n, a) || !vr(e, a, i)) continue;
            yr(e, t, n, i, a.selectionSet, o, s);
            break;
          case D.FRAGMENT_SPREAD: {
            const r = a.name.value;
            if (s.has(r) || !Er(n, a)) continue;
            s.add(r);
            const c = t[r];
            if (!c || !vr(e, c, i)) continue;
            yr(e, t, n, i, c.selectionSet, o, s);
            break
          }
        }
      }

      function Er(e, t) {
        const n = fr(mn, t, e);
        if (!0 === (null == n ? void 0 : n.if)) return !1;
        const i = fr(hn, t, e);
        return !1 !== (null == i ? void 0 : i.if)
      }

      function vr(e, t, n) {
        const i = t.typeCondition;
        if (!i) return !0;
        const r = oi(e, i);
        return r === n || !!Tt(r) && e.isSubType(r, n)
      }

      function Tr(e) {
        return e.alias ? e.alias.value : e.name.value
      }

      function Nr(e) {
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
                const c = mr(n, a, o, i, t.selectionSet);
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

      function gr(e, t) {
        const n = new Map;
        for (const i of e) {
          const e = t(i),
            r = n.get(e);
          void 0 === r ? n.set(e, [i]) : r.push(i)
        }
        return n
      }

      function Ir(e) {
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
          const i = gr(n, e => e.name.value);
          for (const [n, r] of i) r.length > 1 && e.reportError(new h(`Argument "${t}(${n}:)" can only be defined once.`, {
            nodes: r.map(e => e.name)
          }));
          return !1
        }
      }

      function _r(e) {
        return {
          Field: t,
          Directive: t
        };

        function t(t) {
          var n;
          const i = gr(null !== (n = t.arguments) && void 0 !== n ? n : [], e => e.name.value);
          for (const [t, n] of i) n.length > 1 && e.reportError(new h(`There can be only one argument named "${t}".`, {
            nodes: n.map(e => e.name)
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

      function br(e) {
        const t = Object.create(null),
          n = e.getSchema(),
          i = n ? n.getDirectives() : Nn;
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
            else if (yi(n) || vi(n)) {
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

      function Dr(e) {
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
            it(r) && r.getValue(i) ? e.reportError(new h(`Enum value "${o}.${i}" already exists in the schema. It cannot also be defined in this type extension.`, {
              nodes: t.name
            })) : a[i] ? e.reportError(new h(`Enum value "${o}.${i}" can only be defined once.`, {
              nodes: [a[i], t.name]
            })) : a[i] = t.name
          }
          return !1
        }
      }

      function Ar(e) {
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
            Sr(n[o], i) ? e.reportError(new h(`Field "${o}.${i}" already exists in the schema. It cannot also be defined in this type extension.`, {
              nodes: t.name
            })) : a[i] ? e.reportError(new h(`Field "${o}.${i}" can only be defined once.`, {
              nodes: [a[i], t.name]
            })) : a[i] = t.name
          }
          return !1
        }
      }

      function Sr(e, t) {
        return !!(He(e) || Ze(e) || ot(e)) && null != e.getFields()[t]
      }

      function wr(e) {
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

      function Rr(e) {
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

      function Lr(e) {
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
            const i = gr(null !== (n = t.variableDefinitions) && void 0 !== n ? n : [], e => e.variable.name.value);
            for (const [t, n] of i) n.length > 1 && e.reportError(new h(`There can be only one variable named "$${t}".`, {
              nodes: n.map(e => e.variable.name)
            }))
          }
        }
      }

      function $r(e) {
        return {
          ListValue(t) {
            if (!at(At(e.getParentInputType()))) return Cr(e, t), !1
          },
          ObjectValue(t) {
            const n = Rt(e.getInputType());
            if (!ot(n)) return Cr(e, t), !1;
            const i = Te(t.fields, e => e.name.value);
            for (const r of Object.values(n.getFields()))
              if (!i[r.name] && zt(r)) {
                const i = re(r.type);
                e.reportError(new h(`Field "${n.name}.${r.name}" of required type "${i}" was not provided.`, {
                  nodes: t
                }))
              } n.isOneOf && function(e, t, n, i) {
              var r;
              const o = Object.keys(i);
              if (1 !== o.length) return void e.reportError(new h(`OneOf Input Object "${n.name}" must specify exactly one key.`, {
                nodes: [t]
              }));
              const s = null === (r = i[o[0]]) || void 0 === r ? void 0 : r.value;
              s && s.kind !== D.NULL || e.reportError(new h(`Field "${n.name}.${o[0]}" must be non-null.`, {
                nodes: [t]
              }))
            }(e, t, n, i)
          },
          ObjectField(t) {
            const n = Rt(e.getParentInputType());
            if (!e.getInputType() && ot(n)) {
              const i = be(t.name.value, Object.keys(n.getFields()));
              e.reportError(new h(`Field "${t.name.value}" is not defined by type "${n.name}".` + Ee(i), {
                nodes: t
              }))
            }
          },
          NullValue(t) {
            const n = e.getInputType();
            ut(n) && e.reportError(new h(`Expected value of type "${re(n)}", found ${Ve(t)}.`, {
              nodes: t
            }))
          },
          EnumValue: t => Cr(e, t),
          IntValue: t => Cr(e, t),
          FloatValue: t => Cr(e, t),
          StringValue: t => Cr(e, t),
          BooleanValue: t => Cr(e, t)
        }
      }

      function Cr(e, t) {
        const n = e.getInputType();
        if (!n) return;
        const i = Rt(n);
        if (!mt(i)) {
          const i = re(n);
          return void e.reportError(new h(`Expected value of type "${i}", found ${Ve(t)}.`, {
            nodes: t
          }))
        }
        try {
          if (void 0 === i.parseLiteral(t, void 0)) {
            const i = re(n);
            e.reportError(new h(`Expected value of type "${i}", found ${Ve(t)}.`, {
              nodes: t
            }))
          }
        } catch (i) {
          const r = re(n);
          i instanceof h ? e.reportError(i) : e.reportError(new h(`Expected value of type "${r}", found ${Ve(t)}; ` + i.message, {
            nodes: t,
            originalError: i
          }))
        }
      }

      function Vr(e) {
        return {
          VariableDefinition(t) {
            const n = oi(e.getSchema(), t.type);
            if (void 0 !== n && !pt(n)) {
              const n = t.variable.name.value,
                i = Ve(t.type);
              e.reportError(new h(`Variable "$${n}" cannot be non-input type "${i}".`, {
                nodes: t.type
              }))
            }
          }
        }
      }

      function Ur(e) {
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
                    c = oi(t, a.type);
                  if (c && !Mr(t, c, a.defaultValue, r, o)) {
                    const t = re(c),
                      o = re(r);
                    e.reportError(new h(`Variable "$${i}" of type "${t}" used in position expecting type "${o}".`, {
                      nodes: [a, n]
                    }))
                  }
                  ot(s) && s.isOneOf && bt(c) && e.reportError(new h(`Variable "$${i}" is of type "${c}" but must be non-nullable to be used for OneOf Input Object "${s}".`, {
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

      function Mr(e, t, n, i, r) {
        return ut(i) && !ut(t) ? (null != n && n.kind !== D.NULL || void 0 !== r) && Wt(e, t, i.ofType) : Wt(e, t, i)
      }
      const jr = Object.freeze([ki]),
        Pr = Object.freeze([Ni, kr, wi, Nr, Ai, Ii, Vr, nr, gi, wr, Di, Fi, zi, Li, Fr, xi, $i, bi, br, _i, _r, $r, Zi, Ur, Ui, Rr, ...jr]),
        Br = Object.freeze([Ri, Lr, xr, Dr, Ar, Ir, Or, Ai, bi, br, Hi, Oi, _r, Rr, er]);
      class Gr {
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
      class Yr extends Gr {
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
      class Qr extends Gr {
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
              i = new si(this._schema);
            xe(e, ci(i, {
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
      const qr = ge(g, e => e.filter(e => "description" !== e));

      function Jr(e, t, n = Pr, i, r = new si(e)) {
        var s;
        const a = null !== (s = null == i ? void 0 : i.maxErrors) && void 0 !== s ? s : 100;
        t || o(!1, "Must provide document."), Yn(e);
        const c = Object.freeze({}),
          u = [],
          l = new Qr(e, t, r, e => {
            if (u.length >= a) throw u.push(new h("Too many validation errors, error limit reached. Validation aborted.")), c;
            u.push(e)
          }),
          p = Fe(n.map(e => e(l)));
        try {
          xe(t, ci(r, p), qr)
        } catch (e) {
          if (e !== c) throw e
        }
        return u
      }

      function Kr(e, t, n = Br) {
        const i = [],
          r = new Yr(e, t, e => {
            i.push(e)
          });
        return xe(e, Fe(n.map(e => e(r)))), i
      }

      function Xr(e) {
        return Promise.all(Object.values(e)).then(t => {
          const n = Object.create(null);
          for (const [i, r] of Object.keys(e).entries()) n[r] = t[i];
          return n
        })
      }
      class zr extends Error {
        constructor(e) {
          super("Unexpected error value: " + re(e)), this.name = "NonErrorThrown", this.thrownValue = e
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
            for (const a of r) a.selectionSet && yr(e, t, n, i, a.selectionSet, o, s);
            return o
          }((a = t).schema, a.fragments, a.variableValues, c, u), o.set(i, s)), s;
          var a, c, u
        }
      }();
      class Zr {
        constructor() {
          this._errorPositions = new Set, this._errors = []
        }
        get errors() {
          return this._errors
        }
        add(e, t) {
          this._hasNulledPosition(t) || (this._errorPositions.add(t), this._errors.push(e))
        }
        _hasNulledPosition(e) {
          let t = e;
          for (; void 0 !== t;) {
            if (this._errorPositions.has(t)) return !0;
            t = t.prev
          }
          return this._errorPositions.has(void 0)
        }
      }

      function eo(e) {
        arguments.length < 2 || o(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
        const {
          schema: t,
          document: n,
          variableValues: i,
          rootValue: r
        } = e;
        io(t, n, i);
        const a = ro(e);
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
            const r = mr(e.schema, e.fragments, e.variableValues, i, t.selectionSet),
              o = void 0;
            switch (t.operation) {
              case O.QUERY:
                return oo(e, i, n, o, r);
              case O.MUTATION:
                return function(e, t, n, i, r) {
                  return function(e, t) {
                    let n = Object.create(null);
                    for (const i of e) n = s(n) ? n.then(e => t(e, i)) : t(n, i);
                    return n
                  }(r.entries(), (r, [o, a]) => {
                    const c = rr(i, o, t.name),
                      u = so(e, t, n, a, c);
                    return void 0 === u ? r : s(u) ? u.then(e => (r[o] = e, r)) : (r[o] = u, r)
                  })
                }(e, i, n, o, r);
              case O.SUBSCRIPTION:
                return oo(e, i, n, o, r)
            }
          }(a, e, r);
          return s(t) ? t.then(e => no(e, a.collectedErrors.errors), e => (a.collectedErrors.add(e, void 0), no(null, a.collectedErrors.errors))) : no(t, a.collectedErrors.errors)
        } catch (e) {
          return a.collectedErrors.add(e, void 0), no(null, a.collectedErrors.errors)
        }
      }

      function to(e) {
        const t = eo(e);
        if (s(t)) throw new Error("GraphQL execution failed to complete synchronously.");
        return t
      }

      function no(e, t) {
        return 0 === t.length ? {
          data: e
        } : {
          errors: t,
          data: e
        }
      }

      function io(e, t, n) {
        t || o(!1, "Must provide document."), Yn(e), null == n || a(n) || o(!1, "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.")
      }

      function ro(e) {
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
        const E = pr(r, null !== (n = m.variableDefinitions) && void 0 !== n ? n : [], null != c ? c : {}, {
          maxErrors: null !== (i = null == f ? void 0 : f.maxCoercionErrors) && void 0 !== i ? i : 50
        });
        return E.errors ? E.errors : {
          schema: r,
          fragments: y,
          rootValue: s,
          contextValue: a,
          operation: m,
          variableValues: E.coerced,
          fieldResolver: null != l ? l : mo,
          typeResolver: null != p ? p : ho,
          subscribeFieldResolver: null != d ? d : mo,
          collectedErrors: new Zr
        }
      }

      function oo(e, t, n, i, r) {
        const o = Object.create(null);
        let a = !1;
        try {
          for (const [c, u] of r.entries()) {
            const r = so(e, t, n, u, rr(i, c, t.name));
            void 0 !== r && (o[c] = r, s(r) && (a = !0))
          }
        } catch (e) {
          if (a) return Xr(o).finally(() => {
            throw e
          });
          throw e
        }
        return a ? Xr(o) : o
      }

      function so(e, t, n, i, r) {
        var o;
        const a = yo(e.schema, t, i[0]);
        if (!a) return;
        const c = a.type,
          u = null !== (o = a.resolve) && void 0 !== o ? o : e.fieldResolver,
          l = ao(e, a, i, t, r);
        try {
          const t = u(n, dr(a, i[0], e.variableValues), e.contextValue, l);
          let o;
          return o = s(t) ? t.then(t => uo(e, c, i, l, r, t)) : uo(e, c, i, l, r, t), s(o) ? o.then(void 0, t => co(Hr(t, i, or(r)), c, r, e)) : o
        } catch (t) {
          return co(Hr(t, i, or(r)), c, r, e)
        }
      }

      function ao(e, t, n, i, r) {
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

      function co(e, t, n, i) {
        if (ut(t)) throw e;
        return i.collectedErrors.add(e, n), null
      }

      function uo(e, t, n, i, r, o) {
        if (o instanceof Error) throw o;
        if (ut(t)) {
          const s = uo(e, t.ofType, n, i, r, o);
          if (null === s) throw new Error(`Cannot return null for non-nullable field ${i.parentType.name}.${i.fieldName}.`);
          return s
        }
        return null == o ? null : at(t) ? function(e, t, n, i, r, o) {
          if (!In(o)) throw new h(`Expected Iterable, but did not find one for field "${i.parentType.name}.${i.fieldName}".`);
          const a = t.ofType;
          let c = !1;
          const u = Array.from(o, (t, o) => {
            const u = rr(r, o, void 0);
            try {
              let r;
              return r = s(t) ? t.then(t => uo(e, a, n, i, u, t)) : uo(e, a, n, i, u, t), s(r) ? (c = !0, r.then(void 0, t => co(Hr(t, n, or(u)), a, u, e))) : r
            } catch (t) {
              return co(Hr(t, n, or(u)), a, u, e)
            }
          });
          return c ? Promise.all(u) : u
        }(e, t, n, i, r, o) : mt(t) ? function(e, t) {
          const n = e.serialize(t);
          if (null == n) throw new Error(`Expected \`${re(e)}.serialize(${re(t)})\` to return non-nullable value, returned: ${re(n)}`);
          return n
        }(t, o) : Tt(t) ? function(e, t, n, i, r, o) {
          var a;
          const c = null !== (a = t.resolveType) && void 0 !== a ? a : e.typeResolver,
            u = e.contextValue,
            l = c(o, u, i, t);
          return s(l) ? l.then(s => po(e, lo(s, e, t, n, i, o), n, i, r, o)) : po(e, lo(l, e, t, n, i, o), n, i, r, o)
        }(e, t, n, i, r, o) : He(t) ? po(e, t, n, i, r, o) : void c(!1, "Cannot complete value of unexpected output type: " + re(t))
      }

      function lo(e, t, n, i, r, o) {
        if (null == e) throw new h(`Abstract type "${n.name}" must resolve to an Object type at runtime for field "${r.parentType.name}.${r.fieldName}". Either the "${n.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`, i);
        if (He(e)) throw new h("Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.");
        if ("string" != typeof e) throw new h(`Abstract type "${n.name}" must resolve to an Object type at runtime for field "${r.parentType.name}.${r.fieldName}" with value ${re(o)}, received "${re(e)}".`);
        const s = t.schema.getType(e);
        if (null == s) throw new h(`Abstract type "${n.name}" was resolved to a type "${e}" that does not exist inside the schema.`, {
          nodes: i
        });
        if (!He(s)) throw new h(`Abstract type "${n.name}" was resolved to a non-object type "${e}".`, {
          nodes: i
        });
        if (!t.schema.isSubType(n, s)) throw new h(`Runtime Object type "${s.name}" is not a possible type for "${n.name}".`, {
          nodes: i
        });
        return s
      }

      function po(e, t, n, i, r, o) {
        const a = Wr(e, t, n);
        if (t.isTypeOf) {
          const c = t.isTypeOf(o, e.contextValue, i);
          if (s(c)) return c.then(i => {
            if (!i) throw fo(t, o, n);
            return oo(e, t, o, r, a)
          });
          if (!c) throw fo(t, o, n)
        }
        return oo(e, t, o, r, a)
      }

      function fo(e, t, n) {
        return new h(`Expected value of type "${e.name}" but got: ${re(t)}.`, {
          nodes: n
        })
      }
      const ho = function(e, t, n, i) {
          if (a(e) && "string" == typeof e.__typename) return e.__typename;
          const r = n.schema.getPossibleTypes(i),
            o = [];
          for (let i = 0; i < r.length; i++) {
            const a = r[i];
            if (a.isTypeOf) {
              const r = a.isTypeOf(e, t, n);
              if (s(r)) o[i] = r;
              else if (r) return o.length && Promise.allSettled(o).catch(() => {}), a.name
            }
          }
          return o.length ? Promise.all(o).then(e => {
            for (let t = 0; t < e.length; t++)
              if (e[t]) return r[t].name
          }) : void 0
        },
        mo = function(e, t, n, i) {
          if (a(e) || "function" == typeof e) {
            const r = e[i.fieldName];
            return "function" == typeof r ? e[i.fieldName](t, n, i) : r
          }
        };

      function yo(e, t, n) {
        const i = n.name.value;
        return i === Fn.name && e.getQueryType() === t ? Fn : i === $n.name && e.getQueryType() === t ? $n : i === Cn.name ? Cn : t.getFields()[i]
      }

      function Eo(e) {
        return new Promise(t => t(To(e)))
      }

      function vo(e) {
        const t = To(e);
        if (s(t)) throw new Error("GraphQL execution failed to complete synchronously.");
        return t
      }

      function To(e) {
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
        } = e, l = Gn(t);
        if (l.length > 0) return {
          errors: l
        };
        let p;
        try {
          p = ue(n)
        } catch (e) {
          return {
            errors: [e]
          }
        }
        const d = Jr(t, p);
        return d.length > 0 ? {
          errors: d
        } : eo({
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

      function No(e) {
        return "function" == typeof(null == e ? void 0 : e[Symbol.asyncIterator])
      }
      async function go(e) {
        arguments.length < 2 || o(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
        const t = await Io(e);
        return No(t) ? function(t) {
          const n = t[Symbol.asyncIterator]();
          async function i(t) {
            if (t.done) return t;
            try {
              return {
                value: await (i = t.value, eo({
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
      async function Io(...e) {
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
        io(n, i, r);
        const o = ro(t);
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
            const a = mr(t, n, r, s, i.selectionSet),
              [c, u] = [...a.entries()][0],
              l = yo(t, s, u[0]);
            if (!l) {
              const e = u[0].name.value;
              throw new h(`The subscription field "${e}" is not defined.`, {
                nodes: u
              })
            }
            const p = rr(void 0, c, s.name),
              d = ao(e, l, u, s, p);
            try {
              var f;
              const t = dr(l, u[0], r),
                n = e.contextValue,
                i = null !== (f = l.subscribe) && void 0 !== f ? f : e.subscribeFieldResolver,
                s = await i(o, t, n, d);
              if (s instanceof Error) throw s;
              return s
            } catch (e) {
              throw Hr(e, u, or(p))
            }
          }(o);
          if (!No(e)) throw new Error(`Subscription field must return Async Iterable. Received: ${re(e)}.`);
          return e
        } catch (e) {
          if (e instanceof h) return {
            errors: [e]
          };
          throw e
        }
      }

      function _o(e) {
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
            const n = Rt(e.getParentInputType());
            if (ot(n)) {
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
              const r = Rt(e.getInputType());
              null != r || c(!1), e.reportError(new h(`The enum value "${r.name}.${n.name}" is deprecated. ${i}`, {
                nodes: t
              }))
            }
          }
        }
      }

      function Oo(e) {
        return {
          Field(t) {
            const n = Rt(e.getType());
            n && Un(n) && e.reportError(new h(`GraphQL introspection has been disabled, but the requested query contained the field "${t.name.value}".`, {
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

      function Do(e, t) {
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

      function Ao(e, t) {
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

      function So(e, t) {
        const n = to({
          schema: e,
          document: ue(bo({
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

      function wo(e, t) {
        a(e) && a(e.__schema) || o(!1, `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${re(e)}.`);
        const n = e.__schema,
          i = Ne(n.types, e => e.name, e => function(e) {
            if (null != e && null != e.name && null != e.kind) switch (e.kind) {
              case Ln.SCALAR:
                return new xt({
                  name: (i = e).name,
                  description: i.description,
                  specifiedByURL: i.specifiedByURL
                });
              case Ln.OBJECT:
                return new Ft({
                  name: (n = e).name,
                  description: n.description,
                  interfaces: () => h(n),
                  fields: () => m(n)
                });
              case Ln.INTERFACE:
                return new Bt({
                  name: (t = e).name,
                  description: t.description,
                  interfaces: () => h(t),
                  fields: () => m(t)
                });
              case Ln.UNION:
                return function(e) {
                  if (!e.possibleTypes) {
                    const t = re(e);
                    throw new Error(`Introspection result missing possibleTypes: ${t}.`)
                  }
                  return new Gt({
                    name: e.name,
                    description: e.description,
                    types: () => e.possibleTypes.map(d)
                  })
                }(e);
              case Ln.ENUM:
                return function(e) {
                  if (!e.enumValues) {
                    const t = re(e);
                    throw new Error(`Introspection result missing enumValues: ${t}.`)
                  }
                  return new Qt({
                    name: e.name,
                    description: e.description,
                    values: Ne(e.enumValues, e => e.name, e => ({
                      description: e.description,
                      deprecationReason: e.deprecationReason
                    }))
                  })
                }(e);
              case Ln.INPUT_OBJECT:
                return function(e) {
                  if (!e.inputFields) {
                    const t = re(e);
                    throw new Error(`Introspection result missing inputFields: ${t}.`)
                  }
                  return new Kt({
                    name: e.name,
                    description: e.description,
                    fields: () => E(e.inputFields),
                    isOneOf: e.isOneOf
                  })
                }(e)
            }
            var t, n, i;
            const r = re(e);
            throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${r}.`)
          }(e));
        for (const e of [...cn, ...Vn]) i[e.name] && (i[e.name] = e);
        const r = n.queryType ? d(n.queryType) : null,
          s = n.mutationType ? d(n.mutationType) : null,
          c = n.subscriptionType ? d(n.subscriptionType) : null,
          u = n.directives ? n.directives.map(function(e) {
            if (!e.args) {
              const t = re(e);
              throw new Error(`Introspection result missing directive args: ${t}.`)
            }
            if (!e.locations) {
              const t = re(e);
              throw new Error(`Introspection result missing directive locations: ${t}.`)
            }
            return new fn({
              name: e.name,
              description: e.description,
              isRepeatable: e.isRepeatable,
              locations: e.locations.slice(),
              args: E(e.args)
            })
          }) : [];
        return new Pn({
          description: n.description,
          query: r,
          mutation: s,
          subscription: c,
          types: Object.values(i),
          directives: u,
          assumeValid: null == t ? void 0 : t.assumeValid
        });

        function l(e) {
          if (e.kind === Ln.LIST) {
            const t = e.ofType;
            if (!t) throw new Error("Decorated type deeper than introspection query.");
            return new gt(l(t))
          }
          if (e.kind === Ln.NON_NULL) {
            const t = e.ofType;
            if (!t) throw new Error("Decorated type deeper than introspection query.");
            const n = l(t);
            return new It(Dt(n))
          }
          return p(e)
        }

        function p(e) {
          const t = e.name;
          if (!t) throw new Error(`Unknown type reference: ${re(e)}.`);
          const n = i[t];
          if (!n) throw new Error(`Invalid or incomplete schema, unknown type: ${t}. Ensure that a full introspection query is used in order to build a client schema.`);
          return n
        }

        function d(e) {
          return We(p(e))
        }

        function f(e) {
          return et(p(e))
        }

        function h(e) {
          if (null === e.interfaces && e.kind === Ln.INTERFACE) return [];
          if (!e.interfaces) {
            const t = re(e);
            throw new Error(`Introspection result missing interfaces: ${t}.`)
          }
          return e.interfaces.map(f)
        }

        function m(e) {
          if (!e.fields) throw new Error(`Introspection result missing fields: ${re(e)}.`);
          return Ne(e.fields, e => e.name, y)
        }

        function y(e) {
          const t = l(e.type);
          if (!ft(t)) {
            const e = re(t);
            throw new Error(`Introspection must provide output type for fields, but received: ${e}.`)
          }
          if (!e.args) {
            const t = re(e);
            throw new Error(`Introspection result missing field args: ${t}.`)
          }
          return {
            description: e.description,
            deprecationReason: e.deprecationReason,
            type: t,
            args: E(e.args)
          }
        }

        function E(e) {
          return Ne(e, e => e.name, v)
        }

        function v(e) {
          const t = l(e.type);
          if (!pt(t)) {
            const e = re(t);
            throw new Error(`Introspection must provide input type for arguments, but received: ${e}.`)
          }
          const n = null != e.defaultValue ? ur(le(e.defaultValue), t) : void 0;
          return {
            description: e.description,
            type: t,
            defaultValue: n,
            deprecationReason: e.deprecationReason
          }
        }
      }

      function Ro(e, t, n) {
        jn(e), null != t && t.kind === D.DOCUMENT || o(!1, "Must provide valid Document AST."), !0 !== (null == n ? void 0 : n.assumeValid) && !0 !== (null == n ? void 0 : n.assumeValidSDL) && function(e, t) {
          const n = Kr(e, t);
          if (0 !== n.length) throw new Error(n.map(e => e.message).join("\n\n"))
        }(t, e);
        const i = e.toConfig(),
          r = ko(i, t, n);
        return i === r ? e : new Pn(r)
      }

      function ko(e, t, n) {
        var i, r, o, s;
        const a = [],
          u = Object.create(null),
          l = [];
        let p;
        const d = [];
        for (const e of t.definitions)
          if (e.kind === D.SCHEMA_DEFINITION) p = e;
          else if (e.kind === D.SCHEMA_EXTENSION) d.push(e);
        else if (yi(e)) a.push(e);
        else if (vi(e)) {
          const t = e.name.value,
            n = u[t];
          u[t] = n ? n.concat([e]) : [e]
        } else e.kind === D.DIRECTIVE_DEFINITION && l.push(e);
        if (0 === Object.keys(u).length && 0 === a.length && 0 === l.length && 0 === d.length && null == p) return e;
        const f = Object.create(null);
        for (const t of e.types) f[t.name] = v(t);
        for (const e of a) {
          var h;
          const t = e.name.value;
          f[t] = null !== (h = Lo[t]) && void 0 !== h ? h : k(e)
        }
        const m = {
          query: e.query && E(e.query),
          mutation: e.mutation && E(e.mutation),
          subscription: e.subscription && E(e.subscription),
          ...p && g([p]),
          ...g(d)
        };
        return {
          description: null === (i = p) || void 0 === i || null === (r = i.description) || void 0 === r ? void 0 : r.value,
          ...m,
          types: Object.values(f),
          directives: [...e.directives.map(function(e) {
            const t = e.toConfig();
            return new fn({
              ...t,
              args: ge(t.args, N)
            })
          }), ...l.map(function(e) {
            var t;
            return new fn({
              name: e.name.value,
              description: null === (t = e.description) || void 0 === t ? void 0 : t.value,
              locations: e.locations.map(({
                value: e
              }) => e),
              isRepeatable: e.repeatable,
              args: b(e.arguments),
              astNode: e
            })
          })],
          extensions: Object.create(null),
          astNode: null !== (o = p) && void 0 !== o ? o : e.astNode,
          extensionASTNodes: e.extensionASTNodes.concat(d),
          assumeValid: null !== (s = null == n ? void 0 : n.assumeValid) && void 0 !== s && s
        };

        function y(e) {
          return at(e) ? new gt(y(e.ofType)) : ut(e) ? new It(y(e.ofType)) : E(e)
        }

        function E(e) {
          return f[e.name]
        }

        function v(e) {
          return Un(e) || un(e) ? e : Xe(e) ? function(e) {
            var t;
            const n = e.toConfig(),
              i = null !== (t = u[n.name]) && void 0 !== t ? t : [];
            let r = n.specifiedByURL;
            for (const e of i) {
              var o;
              r = null !== (o = Fo(e)) && void 0 !== o ? o : r
            }
            return new xt({
              ...n,
              specifiedByURL: r,
              extensionASTNodes: n.extensionASTNodes.concat(i)
            })
          }(e) : He(e) ? function(e) {
            var t;
            const n = e.toConfig(),
              i = null !== (t = u[n.name]) && void 0 !== t ? t : [];
            return new Ft({
              ...n,
              interfaces: () => [...e.getInterfaces().map(E), ...w(i)],
              fields: () => ({
                ...ge(n.fields, T),
                ...O(i)
              }),
              extensionASTNodes: n.extensionASTNodes.concat(i)
            })
          }(e) : Ze(e) ? function(e) {
            var t;
            const n = e.toConfig(),
              i = null !== (t = u[n.name]) && void 0 !== t ? t : [];
            return new Bt({
              ...n,
              interfaces: () => [...e.getInterfaces().map(E), ...w(i)],
              fields: () => ({
                ...ge(n.fields, T),
                ...O(i)
              }),
              extensionASTNodes: n.extensionASTNodes.concat(i)
            })
          }(e) : tt(e) ? function(e) {
            var t;
            const n = e.toConfig(),
              i = null !== (t = u[n.name]) && void 0 !== t ? t : [];
            return new Gt({
              ...n,
              types: () => [...e.getTypes().map(E), ...R(i)],
              extensionASTNodes: n.extensionASTNodes.concat(i)
            })
          }(e) : it(e) ? function(e) {
            var t;
            const n = e.toConfig(),
              i = null !== (t = u[e.name]) && void 0 !== t ? t : [];
            return new Qt({
              ...n,
              values: {
                ...n.values,
                ...S(i)
              },
              extensionASTNodes: n.extensionASTNodes.concat(i)
            })
          }(e) : ot(e) ? function(e) {
            var t;
            const n = e.toConfig(),
              i = null !== (t = u[n.name]) && void 0 !== t ? t : [];
            return new Kt({
              ...n,
              fields: () => ({
                ...ge(n.fields, e => ({
                  ...e,
                  type: y(e.type)
                })),
                ...A(i)
              }),
              extensionASTNodes: n.extensionASTNodes.concat(i)
            })
          }(e) : void c(!1, "Unexpected type: " + re(e))
        }

        function T(e) {
          return {
            ...e,
            type: y(e.type),
            args: e.args && ge(e.args, N)
          }
        }

        function N(e) {
          return {
            ...e,
            type: y(e.type)
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
          return e.kind === D.LIST_TYPE ? new gt(_(e.type)) : e.kind === D.NON_NULL_TYPE ? new It(_(e.type)) : I(e)
        }

        function O(e) {
          const t = Object.create(null);
          for (const r of e) {
            var n;
            const e = null !== (n = r.fields) && void 0 !== n ? n : [];
            for (const n of e) {
              var i;
              t[n.name.value] = {
                type: _(n.type),
                description: null === (i = n.description) || void 0 === i ? void 0 : i.value,
                args: b(n.arguments),
                deprecationReason: xo(n),
                astNode: n
              }
            }
          }
          return t
        }

        function b(e) {
          const t = null != e ? e : [],
            n = Object.create(null);
          for (const e of t) {
            var i;
            const t = _(e.type);
            n[e.name.value] = {
              type: t,
              description: null === (i = e.description) || void 0 === i ? void 0 : i.value,
              defaultValue: ur(e.defaultValue, t),
              deprecationReason: xo(e),
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
                defaultValue: ur(n.defaultValue, e),
                deprecationReason: xo(n),
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
                deprecationReason: xo(n),
                astNode: n
              }
            }
          }
          return t
        }

        function w(e) {
          return e.flatMap(e => {
            var t, n;
            return null !== (t = null === (n = e.interfaces) || void 0 === n ? void 0 : n.map(I)) && void 0 !== t ? t : []
          })
        }

        function R(e) {
          return e.flatMap(e => {
            var t, n;
            return null !== (t = null === (n = e.types) || void 0 === n ? void 0 : n.map(I)) && void 0 !== t ? t : []
          })
        }

        function k(e) {
          var t;
          const n = e.name.value,
            i = null !== (t = u[n]) && void 0 !== t ? t : [];
          switch (e.kind) {
            case D.OBJECT_TYPE_DEFINITION: {
              var r;
              const t = [e, ...i];
              return new Ft({
                name: n,
                description: null === (r = e.description) || void 0 === r ? void 0 : r.value,
                interfaces: () => w(t),
                fields: () => O(t),
                astNode: e,
                extensionASTNodes: i
              })
            }
            case D.INTERFACE_TYPE_DEFINITION: {
              var o;
              const t = [e, ...i];
              return new Bt({
                name: n,
                description: null === (o = e.description) || void 0 === o ? void 0 : o.value,
                interfaces: () => w(t),
                fields: () => O(t),
                astNode: e,
                extensionASTNodes: i
              })
            }
            case D.ENUM_TYPE_DEFINITION: {
              var s;
              const t = [e, ...i];
              return new Qt({
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
              return new Gt({
                name: n,
                description: null === (a = e.description) || void 0 === a ? void 0 : a.value,
                types: () => R(t),
                astNode: e,
                extensionASTNodes: i
              })
            }
            case D.SCALAR_TYPE_DEFINITION:
              var c;
              return new xt({
                name: n,
                description: null === (c = e.description) || void 0 === c ? void 0 : c.value,
                specifiedByURL: Fo(e),
                astNode: e,
                extensionASTNodes: i
              });
            case D.INPUT_OBJECT_TYPE_DEFINITION: {
              var l;
              const t = [e, ...i];
              return new Kt({
                name: n,
                description: null === (l = e.description) || void 0 === l ? void 0 : l.value,
                fields: () => A(t),
                astNode: e,
                extensionASTNodes: i,
                isOneOf: (p = e, Boolean(fr(Tn, p)))
              })
            }
          }
          var p
        }
      }
      const Lo = Te([...cn, ...Vn], e => e.name);

      function xo(e) {
        const t = fr(En, e);
        return null == t ? void 0 : t.reason
      }

      function Fo(e) {
        const t = fr(vn, e);
        return null == t ? void 0 : t.url
      }

      function $o(e, t) {
        null != e && e.kind === D.DOCUMENT || o(!1, "Must provide valid Document AST."), !0 !== (null == t ? void 0 : t.assumeValid) && !0 !== (null == t ? void 0 : t.assumeValidSDL) && function(e) {
          const t = Kr(e);
          if (0 !== t.length) throw new Error(t.map(e => e.message).join("\n\n"))
        }(e);
        const n = ko({
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
        const i = [...n.directives, ...Nn.filter(e => n.directives.every(t => t.name !== e.name))];
        return new Pn({
          ...n,
          directives: i
        })
      }

      function Co(e, t) {
        return $o(ue(e, {
          noLocation: null == t ? void 0 : t.noLocation,
          allowLegacyFragmentVariables: null == t ? void 0 : t.allowLegacyFragmentVariables
        }), {
          assumeValidSDL: null == t ? void 0 : t.assumeValidSDL,
          assumeValid: null == t ? void 0 : t.assumeValid
        })
      }

      function Vo(e) {
        const t = e.toConfig(),
          n = Ne(Mo(t.types), e => e.name, function(e) {
            if (Xe(e) || Un(e)) return e;
            if (He(e)) {
              const t = e.toConfig();
              return new Ft({
                ...t,
                interfaces: () => u(t.interfaces),
                fields: () => a(t.fields)
              })
            }
            if (Ze(e)) {
              const t = e.toConfig();
              return new Bt({
                ...t,
                interfaces: () => u(t.interfaces),
                fields: () => a(t.fields)
              })
            }
            if (tt(e)) {
              const t = e.toConfig();
              return new Gt({
                ...t,
                types: () => u(t.types)
              })
            }
            if (it(e)) {
              const t = e.toConfig();
              return new Qt({
                ...t,
                values: Uo(t.values, e => e)
              })
            }
            if (ot(e)) {
              const t = e.toConfig();
              return new Kt({
                ...t,
                fields: () => Uo(t.fields, e => ({
                  ...e,
                  type: i(e.type)
                }))
              })
            }
            c(!1, "Unexpected type: " + re(e))
          });
        return new Pn({
          ...t,
          types: Object.values(n),
          directives: Mo(t.directives).map(function(e) {
            const t = e.toConfig();
            return new fn({
              ...t,
              locations: jo(t.locations, e => e),
              args: s(t.args)
            })
          }),
          query: o(t.query),
          mutation: o(t.mutation),
          subscription: o(t.subscription)
        });

        function i(e) {
          return at(e) ? new gt(i(e.ofType)) : ut(e) ? new It(i(e.ofType)) : r(e)
        }

        function r(e) {
          return n[e.name]
        }

        function o(e) {
          return e && r(e)
        }

        function s(e) {
          return Uo(e, e => ({
            ...e,
            type: i(e.type)
          }))
        }

        function a(e) {
          return Uo(e, e => ({
            ...e,
            type: i(e.type),
            args: e.args && s(e.args)
          }))
        }

        function u(e) {
          return Mo(e).map(r)
        }
      }

      function Uo(e, t) {
        const n = Object.create(null);
        for (const i of Object.keys(e).sort(Ie)) n[i] = t(e[i]);
        return n
      }

      function Mo(e) {
        return jo(e, e => e.name)
      }

      function jo(e, t) {
        return e.slice().sort((e, n) => Ie(t(e), t(n)))
      }

      function Po(e) {
        return Yo(e, e => !gn(e), Go)
      }

      function Bo(e) {
        return Yo(e, gn, Un)
      }

      function Go(e) {
        return !un(e) && !Un(e)
      }

      function Yo(e, t, n) {
        const i = e.getDirectives().filter(t),
          r = Object.values(e.getTypeMap()).filter(n);
        return [Qo(e), ...i.map(e => function(e) {
          return Zo(e) + "directive @" + e.name + zo(e.args) + (e.isRepeatable ? " repeatable" : "") + " on " + e.locations.join(" | ")
        }(e)), ...r.map(e => qo(e))].filter(Boolean).join("\n\n")
      }

      function Qo(e) {
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
        return r && t.push(`  subscription: ${r.name}`), Zo(e) + `schema {\n${t.join("\n")}\n}`
      }

      function qo(e) {
        return Xe(e) ? function(e) {
          return Zo(e) + `scalar ${e.name}` + (null == (t = e).specifiedByURL ? "" : ` @specifiedBy(url: ${Ve({kind:D.STRING,value:t.specifiedByURL})})`);
          var t
        }(e) : He(e) ? function(e) {
          return Zo(e) + `type ${e.name}` + Jo(e) + Ko(e)
        }(e) : Ze(e) ? function(e) {
          return Zo(e) + `interface ${e.name}` + Jo(e) + Ko(e)
        }(e) : tt(e) ? function(e) {
          const t = e.getTypes(),
            n = t.length ? " = " + t.join(" | ") : "";
          return Zo(e) + "union " + e.name + n
        }(e) : it(e) ? function(e) {
          const t = e.getValues().map((e, t) => Zo(e, "  ", !t) + "  " + e.name + Wo(e.deprecationReason));
          return Zo(e) + `enum ${e.name}` + Xo(t)
        }(e) : ot(e) ? function(e) {
          const t = Object.values(e.getFields()).map((e, t) => Zo(e, "  ", !t) + "  " + Ho(e));
          return Zo(e) + `input ${e.name}` + (e.isOneOf ? " @oneOf" : "") + Xo(t)
        }(e) : void c(!1, "Unexpected type: " + re(e))
      }

      function Jo(e) {
        const t = e.getInterfaces();
        return t.length ? " implements " + t.map(e => e.name).join(" & ") : ""
      }

      function Ko(e) {
        return Xo(Object.values(e.getFields()).map((e, t) => Zo(e, "  ", !t) + "  " + e.name + zo(e.args, "  ") + ": " + String(e.type) + Wo(e.deprecationReason)))
      }

      function Xo(e) {
        return 0 !== e.length ? " {\n" + e.join("\n") + "\n}" : ""
      }

      function zo(e, t = "") {
        return 0 === e.length ? "" : e.every(e => !e.description) ? "(" + e.map(Ho).join(", ") + ")" : "(\n" + e.map((e, n) => Zo(e, "  " + t, !n) + "  " + t + Ho(e)).join("\n") + "\n" + t + ")"
      }

      function Ho(e) {
        const t = _n(e.defaultValue, e.type);
        let n = e.name + ": " + String(e.type);
        return t && (n += ` = ${Ve(t)}`), n + Wo(e.deprecationReason)
      }

      function Wo(e) {
        return null == e ? "" : e !== yn ? ` @deprecated(reason: ${Ve({kind:D.STRING,value:e})})` : " @deprecated"
      }

      function Zo(e, t = "", n = !0) {
        const {
          description: i
        } = e;
        return null == i ? "" : (t && !n ? "\n" + t : t) + Ve({
          kind: D.STRING,
          value: i,
          block: $(i)
        }).replace(/\n/g, "\n" + t) + "\n"
      }

      function es(e) {
        const t = [];
        for (const n of e) t.push(...n.definitions);
        return {
          kind: D.DOCUMENT,
          definitions: t
        }
      }

      function ts(e) {
        const t = [],
          n = Object.create(null);
        for (const i of e.definitions) switch (i.kind) {
          case D.OPERATION_DEFINITION:
            t.push(i);
            break;
          case D.FRAGMENT_DEFINITION:
            n[i.name.value] = is(i.selectionSet)
        }
        const i = Object.create(null);
        for (const r of t) {
          const t = new Set;
          for (const e of is(r.selectionSet)) ns(t, n, e);
          i[r.name ? r.name.value : ""] = {
            kind: D.DOCUMENT,
            definitions: e.definitions.filter(e => e === r || e.kind === D.FRAGMENT_DEFINITION && t.has(e.name.value))
          }
        }
        return i
      }

      function ns(e, t, n) {
        if (!e.has(n)) {
          e.add(n);
          const i = t[n];
          if (void 0 !== i)
            for (const n of i) ns(e, t, n)
        }
      }

      function is(e) {
        const t = [];
        return xe(e, {
          FragmentSpread(e) {
            t.push(e.name.value)
          }
        }), t
      }

      function rs(e) {
        const t = ce(e) ? e : new ae(e),
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

      function os(e) {
        const t = ss(e);
        if (t) throw t;
        return e
      }

      function ss(e) {
        if ("string" == typeof e || o(!1, "Expected name to be a string."), e.startsWith("__")) return new h(`Name "${e}" must not begin with "__", which is reserved by GraphQL introspection.`);
        try {
          Qe(e)
        } catch (e) {
          return e
        }
      }
      var as, cs;

      function us(e, t) {
        return ps(e, t).filter(e => e.type in as)
      }

      function ls(e, t) {
        return ps(e, t).filter(e => e.type in cs)
      }

      function ps(e, t) {
        return [...fs(e, t), ...ds(e, t)]
      }

      function ds(e, t) {
        const n = [],
          i = Os(e.getDirectives(), t.getDirectives());
        for (const e of i.removed) n.push({
          type: as.DIRECTIVE_REMOVED,
          description: `${e.name} was removed.`
        });
        for (const [e, t] of i.persisted) {
          const i = Os(e.args, t.args);
          for (const t of i.added) Pt(t) && n.push({
            type: as.REQUIRED_DIRECTIVE_ARG_ADDED,
            description: `A required arg ${t.name} on directive ${e.name} was added.`
          });
          for (const t of i.removed) n.push({
            type: as.DIRECTIVE_ARG_REMOVED,
            description: `${t.name} was removed from ${e.name}.`
          });
          e.isRepeatable && !t.isRepeatable && n.push({
            type: as.DIRECTIVE_REPEATABLE_REMOVED,
            description: `Repeatable flag was removed from ${e.name}.`
          });
          for (const i of e.locations) t.locations.includes(i) || n.push({
            type: as.DIRECTIVE_LOCATION_REMOVED,
            description: `${i} was removed from ${e.name}.`
          })
        }
        return n
      }

      function fs(e, t) {
        const n = [],
          i = Os(Object.values(e.getTypeMap()), Object.values(t.getTypeMap()));
        for (const e of i.removed) n.push({
          type: as.TYPE_REMOVED,
          description: un(e) ? `Standard scalar ${e.name} was removed because it is not referenced anymore.` : `${e.name} was removed.`
        });
        for (const [e, t] of i.persisted) it(e) && it(t) ? n.push(...ys(e, t)) : tt(e) && tt(t) ? n.push(...ms(e, t)) : ot(e) && ot(t) ? n.push(...hs(e, t)) : He(e) && He(t) || Ze(e) && Ze(t) ? n.push(...vs(e, t), ...Es(e, t)) : e.constructor !== t.constructor && n.push({
          type: as.TYPE_CHANGED_KIND,
          description: `${e.name} changed from ${Is(e)} to ${Is(t)}.`
        });
        return n
      }

      function hs(e, t) {
        const n = [],
          i = Os(Object.values(e.getFields()), Object.values(t.getFields()));
        for (const t of i.added) zt(t) ? n.push({
          type: as.REQUIRED_INPUT_FIELD_ADDED,
          description: `A required field ${t.name} on input type ${e.name} was added.`
        }) : n.push({
          type: cs.OPTIONAL_INPUT_FIELD_ADDED,
          description: `An optional field ${t.name} on input type ${e.name} was added.`
        });
        for (const t of i.removed) n.push({
          type: as.FIELD_REMOVED,
          description: `${e.name}.${t.name} was removed.`
        });
        for (const [t, r] of i.persisted) gs(t.type, r.type) || n.push({
          type: as.FIELD_CHANGED_KIND,
          description: `${e.name}.${t.name} changed type from ${String(t.type)} to ${String(r.type)}.`
        });
        return n
      }

      function ms(e, t) {
        const n = [],
          i = Os(e.getTypes(), t.getTypes());
        for (const t of i.added) n.push({
          type: cs.TYPE_ADDED_TO_UNION,
          description: `${t.name} was added to union type ${e.name}.`
        });
        for (const t of i.removed) n.push({
          type: as.TYPE_REMOVED_FROM_UNION,
          description: `${t.name} was removed from union type ${e.name}.`
        });
        return n
      }

      function ys(e, t) {
        const n = [],
          i = Os(e.getValues(), t.getValues());
        for (const t of i.added) n.push({
          type: cs.VALUE_ADDED_TO_ENUM,
          description: `${t.name} was added to enum type ${e.name}.`
        });
        for (const t of i.removed) n.push({
          type: as.VALUE_REMOVED_FROM_ENUM,
          description: `${t.name} was removed from enum type ${e.name}.`
        });
        return n
      }

      function Es(e, t) {
        const n = [],
          i = Os(e.getInterfaces(), t.getInterfaces());
        for (const t of i.added) n.push({
          type: cs.IMPLEMENTED_INTERFACE_ADDED,
          description: `${t.name} added to interfaces implemented by ${e.name}.`
        });
        for (const t of i.removed) n.push({
          type: as.IMPLEMENTED_INTERFACE_REMOVED,
          description: `${e.name} no longer implements interface ${t.name}.`
        });
        return n
      }

      function vs(e, t) {
        const n = [],
          i = Os(Object.values(e.getFields()), Object.values(t.getFields()));
        for (const t of i.removed) n.push({
          type: as.FIELD_REMOVED,
          description: `${e.name}.${t.name} was removed.`
        });
        for (const [t, r] of i.persisted) n.push(...Ts(e, t, r)), Ns(t.type, r.type) || n.push({
          type: as.FIELD_CHANGED_KIND,
          description: `${e.name}.${t.name} changed type from ${String(t.type)} to ${String(r.type)}.`
        });
        return n
      }

      function Ts(e, t, n) {
        const i = [],
          r = Os(t.args, n.args);
        for (const n of r.removed) i.push({
          type: as.ARG_REMOVED,
          description: `${e.name}.${t.name} arg ${n.name} was removed.`
        });
        for (const [n, o] of r.persisted)
          if (gs(n.type, o.type)) {
            if (void 0 !== n.defaultValue)
              if (void 0 === o.defaultValue) i.push({
                type: cs.ARG_DEFAULT_VALUE_CHANGE,
                description: `${e.name}.${t.name} arg ${n.name} defaultValue was removed.`
              });
              else {
                const r = _s(n.defaultValue, n.type),
                  s = _s(o.defaultValue, o.type);
                r !== s && i.push({
                  type: cs.ARG_DEFAULT_VALUE_CHANGE,
                  description: `${e.name}.${t.name} arg ${n.name} has changed defaultValue from ${r} to ${s}.`
                })
              }
          } else i.push({
            type: as.ARG_CHANGED_KIND,
            description: `${e.name}.${t.name} arg ${n.name} has changed type from ${String(n.type)} to ${String(o.type)}.`
          });
        for (const n of r.added) Pt(n) ? i.push({
          type: as.REQUIRED_ARG_ADDED,
          description: `A required arg ${n.name} on ${e.name}.${t.name} was added.`
        }) : i.push({
          type: cs.OPTIONAL_ARG_ADDED,
          description: `An optional arg ${n.name} on ${e.name}.${t.name} was added.`
        });
        return i
      }

      function Ns(e, t) {
        return at(e) ? at(t) && Ns(e.ofType, t.ofType) || ut(t) && Ns(e, t.ofType) : ut(e) ? ut(t) && Ns(e.ofType, t.ofType) : St(t) && e.name === t.name || ut(t) && Ns(e, t.ofType)
      }

      function gs(e, t) {
        return at(e) ? at(t) && gs(e.ofType, t.ofType) : ut(e) ? ut(t) && gs(e.ofType, t.ofType) || !ut(t) && gs(e.ofType, t) : St(t) && e.name === t.name
      }

      function Is(e) {
        return Xe(e) ? "a Scalar type" : He(e) ? "an Object type" : Ze(e) ? "an Interface type" : tt(e) ? "a Union type" : it(e) ? "an Enum type" : ot(e) ? "an Input type" : void c(!1, "Unexpected type: " + re(e))
      }

      function _s(e, t) {
        const n = _n(e, t);
        return null != n || c(!1), Ve(Ci(n))
      }

      function Os(e, t) {
        const n = [],
          i = [],
          r = [],
          o = Te(e, ({
            name: e
          }) => e),
          s = Te(t, ({
            name: e
          }) => e);
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
      }

      function bs(e, t) {
        return Ds(e, fe(t))
      }

      function Ds(e, t) {
        switch (t.kind) {
          case D.TYPE_COORDINATE:
            return function(e, t) {
              const n = t.name.value,
                i = e.getType(n);
              if (null != i) return {
                kind: "NamedType",
                type: i
              }
            }(e, t);
          case D.MEMBER_COORDINATE:
            return function(e, t) {
              const n = t.name.value,
                i = e.getType(n);
              if (!i) throw new Error(`Expected ${re(n)} to be defined as a type in the schema.`);
              if (!(it(i) || ot(i) || He(i) || Ze(i))) throw new Error(`Expected ${re(n)} to be an Enum, Input Object, Object or Interface type.`);
              if (it(i)) {
                const e = t.memberName.value,
                  n = i.getValue(e);
                if (null == n) return;
                return {
                  kind: "EnumValue",
                  type: i,
                  enumValue: n
                }
              }
              if (ot(i)) {
                const e = t.memberName.value,
                  n = i.getFields()[e];
                if (null == n) return;
                return {
                  kind: "InputField",
                  type: i,
                  inputField: n
                }
              }
              const r = t.memberName.value,
                o = i.getFields()[r];
              if (null != o) return {
                kind: "Field",
                type: i,
                field: o
              }
            }(e, t);
          case D.ARGUMENT_COORDINATE:
            return function(e, t) {
              const n = t.name.value,
                i = e.getType(n);
              if (null == i) throw new Error(`Expected ${re(n)} to be defined as a type in the schema.`);
              if (!He(i) && !Ze(i)) throw new Error(`Expected ${re(n)} to be an object type or interface type.`);
              const r = t.fieldName.value,
                o = i.getFields()[r];
              if (null == o) throw new Error(`Expected ${re(r)} to exist as a field of type ${re(n)} in the schema.`);
              const s = t.argumentName.value,
                a = o.args.find(e => e.name === s);
              if (null != a) return {
                kind: "FieldArgument",
                type: i,
                field: o,
                fieldArgument: a
              }
            }(e, t);
          case D.DIRECTIVE_COORDINATE:
            return function(e, t) {
              const n = t.name.value,
                i = e.getDirective(n);
              if (i) return {
                kind: "Directive",
                directive: i
              }
            }(e, t);
          case D.DIRECTIVE_ARGUMENT_COORDINATE:
            return function(e, t) {
              const n = t.name.value,
                i = e.getDirective(n);
              if (!i) throw new Error(`Expected ${re(n)} to be defined as a directive in the schema.`);
              const {
                argumentName: {
                  value: r
                }
              } = t, o = i.args.find(e => e.name === r);
              if (o) return {
                kind: "DirectiveArgument",
                directive: i,
                directiveArgument: o
              }
            }(e, t)
        }
      }! function(e) {
        e.TYPE_REMOVED = "TYPE_REMOVED", e.TYPE_CHANGED_KIND = "TYPE_CHANGED_KIND", e.TYPE_REMOVED_FROM_UNION = "TYPE_REMOVED_FROM_UNION", e.VALUE_REMOVED_FROM_ENUM = "VALUE_REMOVED_FROM_ENUM", e.REQUIRED_INPUT_FIELD_ADDED = "REQUIRED_INPUT_FIELD_ADDED", e.IMPLEMENTED_INTERFACE_REMOVED = "IMPLEMENTED_INTERFACE_REMOVED", e.FIELD_REMOVED = "FIELD_REMOVED", e.FIELD_CHANGED_KIND = "FIELD_CHANGED_KIND", e.REQUIRED_ARG_ADDED = "REQUIRED_ARG_ADDED", e.ARG_REMOVED = "ARG_REMOVED", e.ARG_CHANGED_KIND = "ARG_CHANGED_KIND", e.DIRECTIVE_REMOVED = "DIRECTIVE_REMOVED", e.DIRECTIVE_ARG_REMOVED = "DIRECTIVE_ARG_REMOVED", e.REQUIRED_DIRECTIVE_ARG_ADDED = "REQUIRED_DIRECTIVE_ARG_ADDED", e.DIRECTIVE_REPEATABLE_REMOVED = "DIRECTIVE_REPEATABLE_REMOVED", e.DIRECTIVE_LOCATION_REMOVED = "DIRECTIVE_LOCATION_REMOVED"
      }(as || (as = {})),
      function(e) {
        e.VALUE_ADDED_TO_ENUM = "VALUE_ADDED_TO_ENUM", e.TYPE_ADDED_TO_UNION = "TYPE_ADDED_TO_UNION", e.OPTIONAL_INPUT_FIELD_ADDED = "OPTIONAL_INPUT_FIELD_ADDED", e.OPTIONAL_ARG_ADDED = "OPTIONAL_ARG_ADDED", e.IMPLEMENTED_INTERFACE_ADDED = "IMPLEMENTED_INTERFACE_ADDED", e.ARG_DEFAULT_VALUE_CHANGE = "ARG_DEFAULT_VALUE_CHANGE"
      }(cs || (cs = {}))
    }
  }
]);