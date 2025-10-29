try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "94e9698c-9dbb-4571-9961-eadf5b23416c", e._sentryDebugIdIdentifier = "sentry-dbid-94e9698c-9dbb-4571-9961-eadf5b23416c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [766], {
    20766: (e, t, r) => {
      var n, o, a, i = r(21221);
      t.BLOCKS = void 0, (n = t.BLOCKS || (t.BLOCKS = {})).DOCUMENT = "document", n.PARAGRAPH = "paragraph", n.HEADING_1 = "heading-1", n.HEADING_2 = "heading-2", n.HEADING_3 = "heading-3", n.HEADING_4 = "heading-4", n.HEADING_5 = "heading-5", n.HEADING_6 = "heading-6", n.OL_LIST = "ordered-list", n.UL_LIST = "unordered-list", n.LIST_ITEM = "list-item", n.HR = "hr", n.QUOTE = "blockquote", n.EMBEDDED_ENTRY = "embedded-entry-block", n.EMBEDDED_ASSET = "embedded-asset-block", n.EMBEDDED_RESOURCE = "embedded-resource-block", n.TABLE = "table", n.TABLE_ROW = "table-row", n.TABLE_CELL = "table-cell", n.TABLE_HEADER_CELL = "table-header-cell", t.INLINES = void 0, (o = t.INLINES || (t.INLINES = {})).ASSET_HYPERLINK = "asset-hyperlink", o.EMBEDDED_ENTRY = "embedded-entry-inline", o.EMBEDDED_RESOURCE = "embedded-resource-inline", o.ENTRY_HYPERLINK = "entry-hyperlink", o.HYPERLINK = "hyperlink", o.RESOURCE_HYPERLINK = "resource-hyperlink", t.MARKS = void 0, (a = t.MARKS || (t.MARKS = {})).BOLD = "bold", a.ITALIC = "italic", a.UNDERLINE = "underline", a.CODE = "code", a.SUPERSCRIPT = "superscript", a.SUBSCRIPT = "subscript", a.STRIKETHROUGH = "strikethrough";
      var E, s = function(e, t) {
        return s = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, s(e, t)
      };

      function L(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        s(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }

      function u(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }
      "function" == typeof SuppressedError && SuppressedError;
      var c = [t.BLOCKS.PARAGRAPH, t.BLOCKS.HEADING_1, t.BLOCKS.HEADING_2, t.BLOCKS.HEADING_3, t.BLOCKS.HEADING_4, t.BLOCKS.HEADING_5, t.BLOCKS.HEADING_6, t.BLOCKS.OL_LIST, t.BLOCKS.UL_LIST, t.BLOCKS.HR, t.BLOCKS.QUOTE, t.BLOCKS.EMBEDDED_ENTRY, t.BLOCKS.EMBEDDED_ASSET, t.BLOCKS.EMBEDDED_RESOURCE, t.BLOCKS.TABLE],
        S = [t.BLOCKS.PARAGRAPH, t.BLOCKS.HEADING_1, t.BLOCKS.HEADING_2, t.BLOCKS.HEADING_3, t.BLOCKS.HEADING_4, t.BLOCKS.HEADING_5, t.BLOCKS.HEADING_6, t.BLOCKS.OL_LIST, t.BLOCKS.UL_LIST, t.BLOCKS.HR, t.BLOCKS.QUOTE, t.BLOCKS.EMBEDDED_ENTRY, t.BLOCKS.EMBEDDED_ASSET, t.BLOCKS.EMBEDDED_RESOURCE],
        p = [t.BLOCKS.TABLE, t.BLOCKS.TABLE_ROW, t.BLOCKS.TABLE_CELL, t.BLOCKS.TABLE_HEADER_CELL],
        l = [t.BLOCKS.HR, t.BLOCKS.EMBEDDED_ENTRY, t.BLOCKS.EMBEDDED_ASSET, t.BLOCKS.EMBEDDED_RESOURCE],
        O = ((E = {})[t.BLOCKS.OL_LIST] = [t.BLOCKS.LIST_ITEM], E[t.BLOCKS.UL_LIST] = [t.BLOCKS.LIST_ITEM], E[t.BLOCKS.LIST_ITEM] = S, E[t.BLOCKS.QUOTE] = [t.BLOCKS.PARAGRAPH], E[t.BLOCKS.TABLE] = [t.BLOCKS.TABLE_ROW], E[t.BLOCKS.TABLE_ROW] = [t.BLOCKS.TABLE_CELL, t.BLOCKS.TABLE_HEADER_CELL], E[t.BLOCKS.TABLE_CELL] = [t.BLOCKS.PARAGRAPH, t.BLOCKS.UL_LIST, t.BLOCKS.OL_LIST], E[t.BLOCKS.TABLE_HEADER_CELL] = [t.BLOCKS.PARAGRAPH], E),
        d = [t.BLOCKS.HEADING_1, t.BLOCKS.HEADING_2, t.BLOCKS.HEADING_3, t.BLOCKS.HEADING_4, t.BLOCKS.HEADING_5, t.BLOCKS.HEADING_6],
        f = u([t.BLOCKS.PARAGRAPH], d, !0),
        B = [t.BLOCKS.DOCUMENT, t.BLOCKS.PARAGRAPH, t.BLOCKS.HEADING_1, t.BLOCKS.HEADING_2, t.BLOCKS.HEADING_3, t.BLOCKS.HEADING_4, t.BLOCKS.HEADING_5, t.BLOCKS.HEADING_6, t.BLOCKS.OL_LIST, t.BLOCKS.UL_LIST, t.BLOCKS.LIST_ITEM, t.BLOCKS.HR, t.BLOCKS.QUOTE, t.BLOCKS.EMBEDDED_ENTRY, t.BLOCKS.EMBEDDED_ASSET, t.INLINES.HYPERLINK, t.INLINES.ENTRY_HYPERLINK, t.INLINES.ASSET_HYPERLINK, t.INLINES.EMBEDDED_ENTRY, "text"],
        C = [t.MARKS.BOLD, t.MARKS.CODE, t.MARKS.ITALIC, t.MARKS.UNDERLINE],
        _ = {
          nodeType: t.BLOCKS.DOCUMENT,
          data: {},
          content: [{
            nodeType: t.BLOCKS.PARAGRAPH,
            data: {},
            content: [{
              nodeType: "text",
              value: "",
              marks: [],
              data: {}
            }]
          }]
        };

      function h(e, t) {
        for (var r = 0, n = Object.keys(e); r < n.length; r++)
          if (t === e[n[r]]) return !0;
        return !1
      }
      var A, T = Object.freeze({
          __proto__: null,
          isBlock: function(e) {
            return h(t.BLOCKS, e.nodeType)
          },
          isInline: function(e) {
            return h(t.INLINES, e.nodeType)
          },
          isText: function(e) {
            return "text" === e.nodeType
          }
        }),
        y = function(e) {
          var t = e.path,
            r = e.property,
            n = e.typeName,
            o = e.value;
          return {
            details: 'The type of "'.concat(r, '" is incorrect, expected type: ').concat(n),
            name: "type",
            path: t.toArray(),
            type: n,
            value: o
          }
        },
        K = function() {
          function e(e, t) {
            var r = this;
            this.obj = e, this.path = t, this._errors = [], this.catch = function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              (e = r._errors).push.apply(e, t)
            }, this.exists = function(e) {
              return e in r.obj || (r.catch(function(e) {
                var t = e.path;
                return {
                  details: 'The property "'.concat(e.property, '" is required here'),
                  name: "required",
                  path: t.toArray()
                }
              }({
                property: e,
                path: r.path.of(e)
              })), !1)
            }, this.object = function(e) {
              var t, n = e ? r.obj[e] : r.obj;
              if (e && !r.exists(e)) return !1;
              if (i(n)) return !0;
              var o = e ? r.path.of(e) : r.path,
                a = null !== (t = null != e ? e : r.path.last()) && void 0 !== t ? t : "value";
              return r.catch(y({
                typeName: "Object",
                property: a,
                path: o,
                value: n
              })), !1
            }, this.string = function(e) {
              var t = r.obj[e];
              return !(e && !r.exists(e) || "string" != typeof t && (r.catch(y({
                typeName: "String",
                property: e,
                path: r.path.of(e),
                value: t
              })), 1))
            }, this.number = function(e, t) {
              var n = r.obj[e];
              return !(!t || e in r.obj) || !!r.exists(e) && ("number" == typeof n && !Number.isNaN(n) || (r.catch(y({
                typeName: "Number",
                property: e,
                path: r.path.of(e),
                value: n
              })), !1))
            }, this.array = function(e) {
              var t = r.obj[e];
              return !(e && !r.exists(e) || !Array.isArray(t) && (r.catch(y({
                typeName: "Array",
                property: e,
                path: r.path.of(e),
                value: t
              })), 1))
            }, this.enum = function(e, t) {
              var n = r.obj[e];
              return !("string" != typeof n || !t.includes(n)) || (r.catch(function(e) {
                var t = e.value,
                  r = e.path;
                return {
                  details: "Value must be one of expected values",
                  name: "in",
                  expected: u([], e.expected, !0).sort(),
                  path: r.toArray(),
                  value: t
                }
              }({
                expected: t,
                value: n,
                path: r.path.of(e)
              })), !1)
            }, this.empty = function(e) {
              if (!r.array(e)) return !1;
              var t = r.obj[e];
              return 0 === t.length || (r.catch(function(e) {
                var t = e.max,
                  r = e.value;
                return {
                  name: "size",
                  max: t,
                  path: e.path.toArray(),
                  details: "Size must be at most ".concat(t),
                  value: r
                }
              }({
                max: 0,
                value: t,
                path: r.path.of(e)
              })), !1)
            }, this.minLength = function(e, t) {
              if (!r.array(e)) return !1;
              var n = r.obj[e];
              return n.length >= t || (r.catch(function(e) {
                var t = e.min,
                  r = e.value;
                return {
                  name: "size",
                  min: t,
                  path: e.path.toArray(),
                  details: "Size must be at least ".concat(t),
                  value: r
                }
              }({
                min: t,
                value: n,
                path: r.path.of(e)
              })), !1)
            }, this.noAdditionalProperties = function(e) {
              var t = Object.keys(r.obj).sort().filter((function(t) {
                return !e.includes(t)
              }));
              return t.forEach((function(e) {
                return r.catch(function(e) {
                  var t = e.path;
                  return {
                    details: 'The property "'.concat(e.property, '" is not expected'),
                    name: "unexpected",
                    path: t.toArray()
                  }
                }({
                  property: e,
                  path: r.path.of(e)
                }))
              })), 0 === t.length
            }, this.each = function(e, t) {
              if (r.array(e)) {
                var n = r.obj[e],
                  o = !1;
                n.forEach((function(n, a) {
                  if (!o) {
                    var i = t(n, r.path.of(e).of(a));
                    i.length > 0 && (o = !0), r.catch.apply(r, i)
                  }
                }))
              }
            }
          }
          return Object.defineProperty(e.prototype, "errors", {
            get: function() {
              var e = this,
                t = function(e) {
                  return JSON.stringify({
                    details: e.details,
                    path: e.path
                  })
                };
              return this._errors.filter((function(r, n) {
                return e._errors.findIndex((function(e) {
                  return t(r) === t(e)
                })) === n
              }))
            },
            enumerable: !1,
            configurable: !0
          }), e
        }(),
        D = [],
        I = function() {
          function e(e, t) {
            this.contentRule = e, this.validateData = t
          }
          return e.prototype.assert = function(e, t) {
            var r, n, o = new K(e, t);
            if (!o.object()) return o.errors;
            o.noAdditionalProperties(["nodeType", "data", "content"]);
            var a = Array.isArray(this.contentRule) ? {
                nodeTypes: this.contentRule
              } : this.contentRule(e, t),
              i = a.nodeTypes,
              E = a.min,
              s = void 0 === E ? 0 : E;
            if (0 === i.length && s > 0) throw new Error("Invalid content rule. Cannot have enforce a 'min' of ".concat(s, " with no nodeTypes"));
            if (o.minLength("content", s), 0 === i.length ? o.empty("content") : o.each("content", (function(e, t) {
                var r = new K(e, t);
                return r.object() ? (r.enum("nodeType", i), r.errors) : r.errors
              })), o.object("data")) {
              var L = null !== (n = null === (r = this.validateData) || void 0 === r ? void 0 : r.call(this, e.data, t.of("data"))) && void 0 !== n ? n : [];
              o.catch.apply(o, L)
            }
            return o.errors
          }, e
        }(),
        N = function(e) {
          function t(t, r) {
            var n = e.call(this, r, (function(e, t) {
              return n.assertLink(e, t)
            })) || this;
            return n.linkType = t, n.assertLink = function(e, t) {
              var r = new K(e, t);
              if (r.object("target")) {
                var o = new K(e.target.sys, t.of("target").of("sys"));
                o.object() && (o.enum("type", [n.type]), o.enum("linkType", [n.linkType]), "Link" === n.type ? (o.string("id"), o.noAdditionalProperties(["type", "linkType", "id"])) : "ResourceLink" === n.type && (o.string("urn"), o.noAdditionalProperties(["type", "linkType", "urn"]))), r.catch.apply(r, o.errors)
              }
              return r.noAdditionalProperties(["target"]), r.errors
            }, n.type = n.linkType.startsWith("Contentful:") ? "ResourceLink" : "Link", n
          }
          return L(t, e), t
        }(I),
        R = function(e) {
          function t() {
            var t = e.call(this, ["text"], (function(e, r) {
              return t.assertLink(e, r)
            })) || this;
            return t.assertLink = function(e, t) {
              var r = new K(e, t);
              return r.string("uri"), r.noAdditionalProperties(["uri"]), r.errors
            }, t
          }
          return L(t, e), t
        }(I),
        b = function(e, t) {
          return new I(e, t)
        },
        v = function(e, t) {
          return new N(e, t)
        },
        H = function e(t) {
          void 0 === t && (t = []);
          var r = this;
          this.path = t, this.of = function(t) {
            return new e(u(u([], r.path, !0), [t], !1))
          }, this.isRoot = function() {
            return 0 === r.path.length
          }, this.last = function() {
            return r.path[r.path.length - 1]
          }, this.toArray = function() {
            return r.path
          }
        },
        g = b(u(u([], Object.values(t.INLINES), !0), ["text"], !1).sort()),
        m = b([t.BLOCKS.LIST_ITEM]),
        M = v("Entry", D),
        P = b((function() {
          return {
            nodeTypes: [t.BLOCKS.PARAGRAPH],
            min: 1
          }
        }), (function(e, t) {
          var r = new K(e, t);
          return r.noAdditionalProperties(["colspan", "rowspan"]), r.number("colspan", !0), r.number("rowspan", !0), r.errors
        })),
        G = ((A = {})[t.BLOCKS.DOCUMENT] = b(c), A[t.BLOCKS.PARAGRAPH] = g, A[t.BLOCKS.HEADING_1] = g, A[t.BLOCKS.HEADING_2] = g, A[t.BLOCKS.HEADING_3] = g, A[t.BLOCKS.HEADING_4] = g, A[t.BLOCKS.HEADING_5] = g, A[t.BLOCKS.HEADING_6] = g, A[t.BLOCKS.QUOTE] = b(O[t.BLOCKS.QUOTE]), A[t.BLOCKS.EMBEDDED_ENTRY] = M, A[t.BLOCKS.EMBEDDED_ASSET] = v("Asset", D), A[t.BLOCKS.EMBEDDED_RESOURCE] = v("Contentful:Entry", D), A[t.BLOCKS.HR] = b(D), A[t.BLOCKS.OL_LIST] = m, A[t.BLOCKS.UL_LIST] = m, A[t.BLOCKS.LIST_ITEM] = b(u([], S, !0).sort()), A[t.BLOCKS.TABLE] = b((function() {
          return {
            nodeTypes: [t.BLOCKS.TABLE_ROW],
            min: 1
          }
        })), A[t.BLOCKS.TABLE_ROW] = b((function() {
          return {
            nodeTypes: [t.BLOCKS.TABLE_CELL, t.BLOCKS.TABLE_HEADER_CELL],
            min: 1
          }
        })), A[t.BLOCKS.TABLE_CELL] = P, A[t.BLOCKS.TABLE_HEADER_CELL] = P, A[t.INLINES.HYPERLINK] = new R, A[t.INLINES.EMBEDDED_ENTRY] = M, A[t.INLINES.EMBEDDED_RESOURCE] = v("Contentful:Entry", D), A[t.INLINES.ENTRY_HYPERLINK] = v("Entry", ["text"]), A[t.INLINES.ASSET_HYPERLINK] = v("Asset", ["text"]), A[t.INLINES.RESOURCE_HYPERLINK] = v("Contentful:Entry", ["text"]), A);

      function k(e, t) {
        if ("text" === e.nodeType) return function(e, t) {
          var r = new K(e, t);
          return r.object() ? (r.noAdditionalProperties(["nodeType", "data", "value", "marks"]), r.object("data"), r.each("marks", (function(e, t) {
            var r = new K(e, t);
            return r.object() ? (r.string("type"), r.errors) : r.errors
          })), r.string("value"), r.errors) : r.errors
        }(e, t);
        var r = G[e.nodeType].assert(e, t);
        if (r.length > 0) return r;
        var n = new K(e, t);
        return n.each("content", (function(e, t) {
          return k(e, t)
        })), n.errors
      }
      t.CONTAINERS = O, t.EMPTY_DOCUMENT = _, t.HEADINGS = d, t.LIST_ITEM_BLOCKS = S, t.TABLE_BLOCKS = p, t.TEXT_CONTAINERS = f, t.TOP_LEVEL_BLOCKS = c, t.V1_MARKS = C, t.V1_NODE_TYPES = B, t.VOID_BLOCKS = l, t.helpers = T, t.validateRichTextDocument = function(e) {
        var r = new H,
          n = new K(e, r);
        return n.object() && n.enum("nodeType", [t.BLOCKS.DOCUMENT]), n.errors.length > 0 ? n.errors : k(e, r)
      }
    },
    21221: e => {
      e.exports = e => {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        const t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype
      }
    }
  }
]);