try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "bc899e39-27ff-4a97-8da7-fe1593de5aea", t._sentryDebugIdIdentifier = "sentry-dbid-bc899e39-27ff-4a97-8da7-fe1593de5aea")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9142], {
    21221: t => {
      t.exports = t => {
        if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
        const e = Object.getPrototypeOf(t);
        return null === e || e === Object.prototype
      }
    },
    79142: (t, e, r) => {
      r.r(e), r.d(e, {
        BLOCKS: () => o,
        CONTAINERS: () => d,
        EMPTY_DOCUMENT: () => m,
        HEADINGS: () => h,
        INLINES: () => a,
        LIST_ITEM_BLOCKS: () => p,
        MARKS: () => i,
        TABLE_BLOCKS: () => y,
        TEXT_CONTAINERS: () => b,
        TOP_LEVEL_BLOCKS: () => f,
        V1_MARKS: () => v,
        V1_NODE_TYPES: () => A,
        VOID_BLOCKS: () => E,
        helpers: () => n,
        validateRichTextDocument: () => Et
      });
      var n = {};
      r.r(n), r.d(n, {
        isBlock: () => g,
        isEmptyParagraph: () => I,
        isInline: () => D,
        isText: () => L,
        stripEmptyTrailingParagraphFromDocument: () => O
      });
      var o = function(t) {
          return t.DOCUMENT = "document", t.PARAGRAPH = "paragraph", t.HEADING_1 = "heading-1", t.HEADING_2 = "heading-2", t.HEADING_3 = "heading-3", t.HEADING_4 = "heading-4", t.HEADING_5 = "heading-5", t.HEADING_6 = "heading-6", t.OL_LIST = "ordered-list", t.UL_LIST = "unordered-list", t.LIST_ITEM = "list-item", t.HR = "hr", t.QUOTE = "blockquote", t.EMBEDDED_ENTRY = "embedded-entry-block", t.EMBEDDED_ASSET = "embedded-asset-block", t.EMBEDDED_RESOURCE = "embedded-resource-block", t.TABLE = "table", t.TABLE_ROW = "table-row", t.TABLE_CELL = "table-cell", t.TABLE_HEADER_CELL = "table-header-cell", t
        }({}),
        a = function(t) {
          return t.ASSET_HYPERLINK = "asset-hyperlink", t.EMBEDDED_ENTRY = "embedded-entry-inline", t.EMBEDDED_RESOURCE = "embedded-resource-inline", t.ENTRY_HYPERLINK = "entry-hyperlink", t.HYPERLINK = "hyperlink", t.RESOURCE_HYPERLINK = "resource-hyperlink", t
        }({}),
        i = function(t) {
          return t.BOLD = "bold", t.ITALIC = "italic", t.UNDERLINE = "underline", t.CODE = "code", t.SUPERSCRIPT = "superscript", t.SUBSCRIPT = "subscript", t.STRIKETHROUGH = "strikethrough", t
        }({});

      function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
      }

      function c(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }
      var s, l, f = [o.PARAGRAPH, o.HEADING_1, o.HEADING_2, o.HEADING_3, o.HEADING_4, o.HEADING_5, o.HEADING_6, o.OL_LIST, o.UL_LIST, o.HR, o.QUOTE, o.EMBEDDED_ENTRY, o.EMBEDDED_ASSET, o.EMBEDDED_RESOURCE, o.TABLE],
        p = [o.PARAGRAPH, o.HEADING_1, o.HEADING_2, o.HEADING_3, o.HEADING_4, o.HEADING_5, o.HEADING_6, o.OL_LIST, o.UL_LIST, o.HR, o.QUOTE, o.EMBEDDED_ENTRY, o.EMBEDDED_ASSET, o.EMBEDDED_RESOURCE],
        y = [o.TABLE, o.TABLE_ROW, o.TABLE_CELL, o.TABLE_HEADER_CELL],
        E = [o.HR, o.EMBEDDED_ENTRY, o.EMBEDDED_ASSET, o.EMBEDDED_RESOURCE],
        d = (c(s = {}, o.OL_LIST, [o.LIST_ITEM]), c(s, o.UL_LIST, [o.LIST_ITEM]), c(s, o.LIST_ITEM, p), c(s, o.QUOTE, [o.PARAGRAPH]), c(s, o.TABLE, [o.TABLE_ROW]), c(s, o.TABLE_ROW, [o.TABLE_CELL, o.TABLE_HEADER_CELL]), c(s, o.TABLE_CELL, [o.PARAGRAPH, o.UL_LIST, o.OL_LIST]), c(s, o.TABLE_HEADER_CELL, [o.PARAGRAPH]), s),
        h = [o.HEADING_1, o.HEADING_2, o.HEADING_3, o.HEADING_4, o.HEADING_5, o.HEADING_6],
        b = [o.PARAGRAPH].concat(function(t) {
          if (Array.isArray(t)) return u(t)
        }(l = h) || function(t) {
          if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(l) || function(t, e) {
          if (t) {
            if ("string" == typeof t) return u(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(t, e) : void 0
          }
        }(l) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()),
        A = [o.DOCUMENT, o.PARAGRAPH, o.HEADING_1, o.HEADING_2, o.HEADING_3, o.HEADING_4, o.HEADING_5, o.HEADING_6, o.OL_LIST, o.UL_LIST, o.LIST_ITEM, o.HR, o.QUOTE, o.EMBEDDED_ENTRY, o.EMBEDDED_ASSET, a.HYPERLINK, a.ENTRY_HYPERLINK, a.ASSET_HYPERLINK, a.EMBEDDED_ENTRY, "text"],
        v = [i.BOLD, i.CODE, i.ITALIC, i.UNDERLINE],
        m = {
          nodeType: o.DOCUMENT,
          data: {},
          content: [{
            nodeType: o.PARAGRAPH,
            data: {},
            content: [{
              nodeType: "text",
              value: "",
              marks: [],
              data: {}
            }]
          }]
        };

      function T(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }

      function _(t, e) {
        var r = !0,
          n = !1,
          o = void 0;
        try {
          for (var a, i = Object.keys(t)[Symbol.iterator](); !(r = (a = i.next()).done); r = !0)
            if (e === t[a.value]) return !0
        } catch (t) {
          n = !0, o = t
        } finally {
          try {
            r || null == i.return || i.return()
          } finally {
            if (n) throw o
          }
        }
        return !1
      }

      function D(t) {
        return _(a, t.nodeType)
      }

      function g(t) {
        return _(o, t.nodeType)
      }

      function L(t) {
        return "text" === t.nodeType
      }

      function I(t) {
        if (t.nodeType !== o.PARAGRAPH) return !1;
        if (1 !== t.content.length) return !1;
        var e = t.content[0];
        return "text" === e.nodeType && "" === e.value
      }
      var S = 2;

      function O(t) {
        return ! function(t) {
          return null != t && "object" == (void 0 === t ? "undefined" : (e = t) && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e) && "content" in t && Array.isArray(t.content);
          var e
        }(t) || t.content.length < S ? t : I(t.content[t.content.length - 1]) ? (e = function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
              return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))), n.forEach(function(e) {
              T(t, e, r[e])
            })
          }
          return t
        }({}, t), r = null != (r = {
          content: t.content.slice(0, -1)
        }) ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(t) {
          var e = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e.push.apply(e, r)
          }
          return e
        }(Object(r)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }), e) : t;
        var e, r
      }
      var R = r(21221);

      function N(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
      }

      function w(t) {
        return function(t) {
          if (Array.isArray(t)) return N(t)
        }(t) || function(t) {
          if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || function(t, e) {
          if (t) {
            if ("string" == typeof t) return N(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? N(t, e) : void 0
          }
        }(t) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var j = function(t) {
        var e = t.path,
          r = t.property,
          n = t.typeName,
          o = t.value;
        return {
          details: 'The type of "'.concat(r, '" is incorrect, expected type: ').concat(n),
          name: "type",
          path: e.toArray(),
          type: n,
          value: o
        }
      };

      function P(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
      }

      function H(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      function B(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }

      function C(t) {
        return function(t) {
          if (Array.isArray(t)) return P(t)
        }(t) || function(t) {
          if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || function(t, e) {
          if (t) {
            if ("string" == typeof t) return P(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? P(t, e) : void 0
          }
        }(t) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var M = function() {
        "use strict";

        function t(e, r) {
          var n = this,
            o = this;
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), B(this, "obj", void 0), B(this, "path", void 0), B(this, "_errors", void 0), B(this, "catch", void 0), B(this, "exists", void 0), B(this, "object", void 0), B(this, "string", void 0), B(this, "number", void 0), B(this, "array", void 0), B(this, "enum", void 0), B(this, "empty", void 0), B(this, "minLength", void 0), B(this, "noAdditionalProperties", void 0), B(this, "each", void 0), this.obj = e, this.path = r, this._errors = [], this.catch = function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            var n;
            (n = o._errors).push.apply(n, C(e))
          }, this.exists = function(t) {
            return t in n.obj || (n.catch(function(t) {
              var e = t.path;
              return {
                details: 'The property "'.concat(t.property, '" is required here'),
                name: "required",
                path: e.toArray()
              }
            }({
              property: t,
              path: n.path.of(t)
            })), !1)
          }, this.object = function(t) {
            var e = t ? n.obj[t] : n.obj;
            if (t && !n.exists(t)) return !1;
            if (R(e)) return !0;
            var r, o = t ? n.path.of(t) : n.path,
              a = null !== (r = null != t ? t : n.path.last()) && void 0 !== r ? r : "value";
            return n.catch(j({
              typeName: "Object",
              property: a,
              path: o,
              value: e
            })), !1
          }, this.string = function(t) {
            var e = n.obj[t];
            return !(t && !n.exists(t) || "string" != typeof e && (n.catch(j({
              typeName: "String",
              property: t,
              path: n.path.of(t),
              value: e
            })), 1))
          }, this.number = function(t, e) {
            var r = n.obj[t];
            return !(!e || t in n.obj) || !!n.exists(t) && ("number" == typeof r && !Number.isNaN(r) || (n.catch(j({
              typeName: "Number",
              property: t,
              path: n.path.of(t),
              value: r
            })), !1))
          }, this.array = function(t) {
            var e = n.obj[t];
            return !(t && !n.exists(t) || !Array.isArray(e) && (n.catch(j({
              typeName: "Array",
              property: t,
              path: n.path.of(t),
              value: e
            })), 1))
          }, this.enum = function(t, e) {
            var r = n.obj[t];
            return !("string" != typeof r || !e.includes(r)) || (n.catch(function(t) {
              var e = t.value,
                r = t.path;
              return {
                details: "Value must be one of expected values",
                name: "in",
                expected: w(t.expected).sort(),
                path: r.toArray(),
                value: e
              }
            }({
              expected: e,
              value: r,
              path: n.path.of(t)
            })), !1)
          }, this.empty = function(t) {
            if (!n.array(t)) return !1;
            var e = n.obj[t];
            return 0 === e.length || (n.catch(function(t) {
              var e = t.max,
                r = t.value;
              return {
                name: "size",
                max: e,
                path: t.path.toArray(),
                details: "Size must be at most ".concat(e),
                value: r
              }
            }({
              max: 0,
              value: e,
              path: n.path.of(t)
            })), !1)
          }, this.minLength = function(t, e) {
            if (!n.array(t)) return !1;
            var r = n.obj[t];
            return r.length >= e || (n.catch(function(t) {
              var e = t.min,
                r = t.value;
              return {
                name: "size",
                min: e,
                path: t.path.toArray(),
                details: "Size must be at least ".concat(e),
                value: r
              }
            }({
              min: e,
              value: r,
              path: n.path.of(t)
            })), !1)
          }, this.noAdditionalProperties = function(t) {
            var e = Object.keys(n.obj).sort().filter(function(e) {
              return !t.includes(e)
            });
            return e.forEach(function(t) {
              return n.catch(function(t) {
                var e = t.path;
                return {
                  details: 'The property "'.concat(t.property, '" is not expected'),
                  name: "unexpected",
                  path: e.toArray()
                }
              }({
                property: t,
                path: n.path.of(t)
              }))
            }), 0 === e.length
          }, this.each = function(t, e) {
            if (n.array(t)) {
              var r = n.obj[t],
                o = !1;
              r.forEach(function(r, a) {
                if (!o) {
                  var i = e(r, n.path.of(t).of(a));
                  i.length > 0 && (o = !0), n.catch.apply(n, C(i))
                }
              })
            }
          }
        }
        var e, r;
        return e = t, (r = [{
          key: "errors",
          get: function() {
            var t = this,
              e = function(t) {
                return JSON.stringify({
                  details: t.details,
                  path: t.path
                })
              };
            return this._errors.filter(function(r, n) {
              return t._errors.findIndex(function(t) {
                return e(r) === e(t)
              }) === n
            })
          }
        }]) && H(e.prototype, r), t
      }();

      function k(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
      }

      function G(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function U(t, e, r) {
        return e = Q(e),
          function(t, e) {
            return !e || "object" != ((r = e) && "undefined" != typeof Symbol && r.constructor === Symbol ? "symbol" : typeof r) && "function" != typeof e ? G(t) : e;
            var r
          }(t, z() ? Reflect.construct(e, r || [], Q(t).constructor) : e.apply(t, r))
      }

      function x(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function Y(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      function K(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }

      function Q(t) {
        return Q = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, Q(t)
      }

      function W(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && $(t, e)
      }

      function $(t, e) {
        return $ = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, $(t, e)
      }

      function V(t) {
        return function(t) {
          if (Array.isArray(t)) return k(t)
        }(t) || function(t) {
          if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || function(t, e) {
          if (t) {
            if ("string" == typeof t) return k(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? k(t, e) : void 0
          }
        }(t) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function z() {
        try {
          var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (t) {}
        return (z = function() {
          return !!t
        })()
      }
      var q = [],
        F = function() {
          "use strict";

          function t(e, r) {
            x(this, t), K(this, "contentRule", void 0), K(this, "validateData", void 0), this.contentRule = e, this.validateData = r
          }
          var e, r;
          return e = t, (r = [{
            key: "assert",
            value: function(t, e) {
              var r = new M(t, e);
              if (!r.object()) return r.errors;
              r.noAdditionalProperties(["nodeType", "data", "content"]);
              var n = Array.isArray(this.contentRule) ? {
                  nodeTypes: this.contentRule
                } : this.contentRule(t, e),
                o = n.nodeTypes,
                a = n.min,
                i = void 0 === a ? 0 : a;
              if (0 === o.length && i > 0) throw new Error("Invalid content rule. Cannot have enforce a 'min' of ".concat(i, " with no nodeTypes"));
              if (r.minLength("content", i), 0 === o.length ? r.empty("content") : r.each("content", function(t, e) {
                  var r = new M(t, e);
                  return r.object() ? (r.enum("nodeType", o), r.errors) : r.errors
                }), r.object("data")) {
                var u, c, s, l = null !== (s = null === (c = this.validateData) || void 0 === c ? void 0 : c.call(this, t.data, e.of("data"))) && void 0 !== s ? s : [];
                (u = r).catch.apply(u, V(l))
              }
              return r.errors
            }
          }]) && Y(e.prototype, r), t
        }(),
        J = function(t) {
          "use strict";

          function e(t, r) {
            var n;
            return x(this, e), K(n = U(this, e, [r, function(t, e) {
              return G(n).assertLink(t, e)
            }]), "linkType", void 0), K(n, "type", void 0), K(n, "assertLink", void 0), n.linkType = t, n.assertLink = function(t, e) {
              var r = new M(t, e);
              if (r.object("target")) {
                var o, a = new M(t.target.sys, e.of("target").of("sys"));
                a.object() && (a.enum("type", [n.type]), a.enum("linkType", [n.linkType]), "Link" === n.type ? (a.string("id"), a.noAdditionalProperties(["type", "linkType", "id"])) : "ResourceLink" === n.type && (a.string("urn"), a.noAdditionalProperties(["type", "linkType", "urn"]))), (o = r).catch.apply(o, V(a.errors))
              }
              return r.noAdditionalProperties(["target"]), r.errors
            }, n.type = n.linkType.startsWith("Contentful:") ? "ResourceLink" : "Link", n
          }
          return W(e, t), e
        }(F),
        X = function(t) {
          "use strict";

          function e() {
            var t;
            return x(this, e), K(t = U(this, e, [
              ["text"],
              function(e, r) {
                return G(t).assertLink(e, r)
              }
            ]), "assertLink", function(t, e) {
              var r = new M(t, e);
              return r.string("uri"), r.noAdditionalProperties(["uri"]), r.errors
            }), t
          }
          return W(e, t), e
        }(F),
        Z = function(t, e) {
          return new F(t, e)
        },
        tt = function(t, e) {
          return new J(t, e)
        };

      function et(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
      }

      function rt(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }
      var nt = function t() {
        "use strict";
        var e = this,
          r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), rt(this, "path", void 0), rt(this, "of", void 0), rt(this, "isRoot", void 0), rt(this, "last", void 0), rt(this, "toArray", void 0), this.path = r, this.of = function(r) {
          return new t(function(t) {
            return function(t) {
              if (Array.isArray(t)) return et(t)
            }(t) || function(t) {
              if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
            }(t) || function(t, e) {
              if (t) {
                if ("string" == typeof t) return et(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? et(t, e) : void 0
              }
            }(t) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
          }(e.path).concat([r]))
        }, this.isRoot = function() {
          return 0 === e.path.length
        }, this.last = function() {
          return e.path[e.path.length - 1]
        }, this.toArray = function() {
          return e.path
        }
      };

      function ot(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
      }

      function at(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }

      function it(t) {
        return function(t) {
          if (Array.isArray(t)) return ot(t)
        }(t) || function(t) {
          if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || function(t, e) {
          if (t) {
            if ("string" == typeof t) return ot(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ot(t, e) : void 0
          }
        }(t) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var ut, ct = Z(it(Object.values(a)).concat(["text"]).sort()),
        st = Z([o.LIST_ITEM]),
        lt = tt("Entry", q),
        ft = Z(function() {
          return {
            nodeTypes: [o.PARAGRAPH],
            min: 1
          }
        }, function(t, e) {
          var r = new M(t, e);
          return r.noAdditionalProperties(["colspan", "rowspan"]), r.number("colspan", !0), r.number("rowspan", !0), r.errors
        }),
        pt = (at(ut = {}, o.DOCUMENT, Z(f)), at(ut, o.PARAGRAPH, ct), at(ut, o.HEADING_1, ct), at(ut, o.HEADING_2, ct), at(ut, o.HEADING_3, ct), at(ut, o.HEADING_4, ct), at(ut, o.HEADING_5, ct), at(ut, o.HEADING_6, ct), at(ut, o.QUOTE, Z(d[o.QUOTE])), at(ut, o.EMBEDDED_ENTRY, lt), at(ut, o.EMBEDDED_ASSET, tt("Asset", q)), at(ut, o.EMBEDDED_RESOURCE, tt("Contentful:Entry", q)), at(ut, o.HR, Z(q)), at(ut, o.OL_LIST, st), at(ut, o.UL_LIST, st), at(ut, o.LIST_ITEM, Z(it(p).sort())), at(ut, o.TABLE, Z(function() {
          return {
            nodeTypes: [o.TABLE_ROW],
            min: 1
          }
        })), at(ut, o.TABLE_ROW, Z(function() {
          return {
            nodeTypes: [o.TABLE_CELL, o.TABLE_HEADER_CELL],
            min: 1
          }
        })), at(ut, o.TABLE_CELL, ft), at(ut, o.TABLE_HEADER_CELL, ft), at(ut, a.HYPERLINK, new X), at(ut, a.EMBEDDED_ENTRY, lt), at(ut, a.EMBEDDED_RESOURCE, tt("Contentful:Entry", q)), at(ut, a.ENTRY_HYPERLINK, tt("Entry", ["text"])), at(ut, a.ASSET_HYPERLINK, tt("Asset", ["text"])), at(ut, a.RESOURCE_HYPERLINK, tt("Contentful:Entry", ["text"])), ut);

      function yt(t, e) {
        if ("text" === t.nodeType) return function(t, e) {
          var r = new M(t, e);
          return r.object() ? (r.noAdditionalProperties(["nodeType", "data", "value", "marks"]), r.object("data"), r.each("marks", function(t, e) {
            var r = new M(t, e);
            return r.object() ? (r.string("type"), r.errors) : r.errors
          }), r.string("value"), r.errors) : r.errors
        }(t, e);
        var r = pt[t.nodeType].assert(t, e);
        if (r.length > 0) return r;
        var n = new M(t, e);
        return n.each("content", function(t, e) {
          return yt(t, e)
        }), n.errors
      }
      var Et = function(t) {
        var e = new nt,
          r = new M(t, e);
        return r.object() && r.enum("nodeType", [o.DOCUMENT]), r.errors.length > 0 ? r.errors : yt(t, e)
      }
    }
  }
]);