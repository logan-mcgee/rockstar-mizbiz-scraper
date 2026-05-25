try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "78783307-a71f-483a-aea4-0c3ae76e1cd5", e._sentryDebugIdIdentifier = "sentry-dbid-78783307-a71f-483a-aea4-0c3ae76e1cd5")
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
  [6182], {
    26182(e, t, n) {
      n.r(t), n.d(t, {
        BLOCKS: () => s,
        CONTAINERS: () => p,
        EMPTY_DOCUMENT: () => T,
        HEADINGS: () => d,
        INLINES: () => o,
        LIST_ITEM_BLOCKS: () => E,
        MARKS: () => a,
        TABLE_BLOCKS: () => c,
        TEXT_CONTAINERS: () => l,
        TOP_LEVEL_BLOCKS: () => i,
        V1_MARKS: () => A,
        V1_NODE_TYPES: () => u,
        VOID_BLOCKS: () => h,
        helpers: () => r,
        validateRichTextDocument: () => w
      });
      var r = {};
      n.r(r), n.d(r, {
        isBlock: () => y,
        isEmptyParagraph: () => R,
        isInline: () => D,
        isText: () => L,
        stripEmptyTrailingParagraphFromDocument: () => f
      });
      var s = function(e) {
          return e.DOCUMENT = "document", e.PARAGRAPH = "paragraph", e.HEADING_1 = "heading-1", e.HEADING_2 = "heading-2", e.HEADING_3 = "heading-3", e.HEADING_4 = "heading-4", e.HEADING_5 = "heading-5", e.HEADING_6 = "heading-6", e.OL_LIST = "ordered-list", e.UL_LIST = "unordered-list", e.LIST_ITEM = "list-item", e.HR = "hr", e.QUOTE = "blockquote", e.EMBEDDED_ENTRY = "embedded-entry-block", e.EMBEDDED_ASSET = "embedded-asset-block", e.EMBEDDED_RESOURCE = "embedded-resource-block", e.TABLE = "table", e.TABLE_ROW = "table-row", e.TABLE_CELL = "table-cell", e.TABLE_HEADER_CELL = "table-header-cell", e
        }({}),
        o = function(e) {
          return e.ASSET_HYPERLINK = "asset-hyperlink", e.EMBEDDED_ENTRY = "embedded-entry-inline", e.EMBEDDED_RESOURCE = "embedded-resource-inline", e.ENTRY_HYPERLINK = "entry-hyperlink", e.HYPERLINK = "hyperlink", e.RESOURCE_HYPERLINK = "resource-hyperlink", e
        }({}),
        a = function(e) {
          return e.BOLD = "bold", e.ITALIC = "italic", e.UNDERLINE = "underline", e.CODE = "code", e.SUPERSCRIPT = "superscript", e.SUBSCRIPT = "subscript", e.STRIKETHROUGH = "strikethrough", e
        }({});
      const i = [s.PARAGRAPH, s.HEADING_1, s.HEADING_2, s.HEADING_3, s.HEADING_4, s.HEADING_5, s.HEADING_6, s.OL_LIST, s.UL_LIST, s.HR, s.QUOTE, s.EMBEDDED_ENTRY, s.EMBEDDED_ASSET, s.EMBEDDED_RESOURCE, s.TABLE],
        E = [s.PARAGRAPH, s.HEADING_1, s.HEADING_2, s.HEADING_3, s.HEADING_4, s.HEADING_5, s.HEADING_6, s.OL_LIST, s.UL_LIST, s.HR, s.QUOTE, s.EMBEDDED_ENTRY, s.EMBEDDED_ASSET, s.EMBEDDED_RESOURCE],
        c = [s.TABLE, s.TABLE_ROW, s.TABLE_CELL, s.TABLE_HEADER_CELL],
        h = [s.HR, s.EMBEDDED_ENTRY, s.EMBEDDED_ASSET, s.EMBEDDED_RESOURCE],
        p = {
          [s.OL_LIST]: [s.LIST_ITEM],
          [s.UL_LIST]: [s.LIST_ITEM],
          [s.LIST_ITEM]: E,
          [s.QUOTE]: [s.PARAGRAPH],
          [s.TABLE]: [s.TABLE_ROW],
          [s.TABLE_ROW]: [s.TABLE_CELL, s.TABLE_HEADER_CELL],
          [s.TABLE_CELL]: [s.PARAGRAPH, s.UL_LIST, s.OL_LIST],
          [s.TABLE_HEADER_CELL]: [s.PARAGRAPH]
        },
        d = [s.HEADING_1, s.HEADING_2, s.HEADING_3, s.HEADING_4, s.HEADING_5, s.HEADING_6],
        l = [s.PARAGRAPH, ...d],
        u = [s.DOCUMENT, s.PARAGRAPH, s.HEADING_1, s.HEADING_2, s.HEADING_3, s.HEADING_4, s.HEADING_5, s.HEADING_6, s.OL_LIST, s.UL_LIST, s.LIST_ITEM, s.HR, s.QUOTE, s.EMBEDDED_ENTRY, s.EMBEDDED_ASSET, o.HYPERLINK, o.ENTRY_HYPERLINK, o.ASSET_HYPERLINK, o.EMBEDDED_ENTRY, "text"],
        A = [a.BOLD, a.CODE, a.ITALIC, a.UNDERLINE],
        T = {
          nodeType: s.DOCUMENT,
          data: {},
          content: [{
            nodeType: s.PARAGRAPH,
            data: {},
            content: [{
              nodeType: "text",
              value: "",
              marks: [],
              data: {}
            }]
          }]
        };

      function _(e, t) {
        for (const n of Object.keys(e))
          if (t === e[n]) return !0;
        return !1
      }

      function D(e) {
        return _(o, e.nodeType)
      }

      function y(e) {
        return _(s, e.nodeType)
      }

      function L(e) {
        return "text" === e.nodeType
      }

      function R(e) {
        if (e.nodeType !== s.PARAGRAPH) return !1;
        if (1 !== e.content.length) return !1;
        const t = e.content[0];
        return "text" === t.nodeType && "" === t.value
      }

      function f(e) {
        return ! function(e) {
          return null != e && "object" == typeof e && "content" in e && Array.isArray(e.content)
        }(e) || e.content.length < 2 ? e : R(e.content[e.content.length - 1]) ? {
          ...e,
          content: e.content.slice(0, -1)
        } : e
      }
      const I = ({
        path: e,
        property: t,
        typeName: n,
        value: r
      }) => ({
        details: `The type of "${t}" is incorrect, expected type: ${n}`,
        name: "type",
        path: e.toArray(),
        type: n,
        value: r
      });
      class N {
        obj;
        path;
        _errors = [];
        constructor(e, t) {
          this.obj = e, this.path = t
        } catch = (...e) => {
          this._errors.push(...e)
        };
        get errors() {
          const e = e => JSON.stringify({
            details: e.details,
            path: e.path
          });
          return this._errors.filter((t, n) => this._errors.findIndex(n => e(t) === e(n)) === n)
        }
        exists = e => e in this.obj || (this.catch((({
          property: e,
          path: t
        }) => ({
          details: `The property "${e}" is required here`,
          name: "required",
          path: t.toArray()
        }))({
          property: e,
          path: this.path.of(e)
        })), !1);
        object = e => {
          const t = e ? this.obj[e] : this.obj;
          if (e && !this.exists(e)) return !1;
          if ("object" == typeof t && !Array.isArray(t) && null !== t) return !0;
          const n = e ? this.path.of(e) : this.path,
            r = e ?? this.path.last() ?? "value";
          return this.catch(I({
            typeName: "Object",
            property: r,
            path: n,
            value: t
          })), !1
        };
        string = e => {
          const t = this.obj[e];
          return !(e && !this.exists(e) || "string" != typeof t && (this.catch(I({
            typeName: "String",
            property: e,
            path: this.path.of(e),
            value: t
          })), 1))
        };
        number = (e, t) => {
          const n = this.obj[e];
          return !(!t || e in this.obj) || !!this.exists(e) && ("number" == typeof n && !Number.isNaN(n) || (this.catch(I({
            typeName: "Number",
            property: e,
            path: this.path.of(e),
            value: n
          })), !1))
        };
        array = e => {
          const t = this.obj[e];
          return !(e && !this.exists(e) || !Array.isArray(t) && (this.catch(I({
            typeName: "Array",
            property: e,
            path: this.path.of(e),
            value: t
          })), 1))
        };
        enum = (e, t) => {
          const n = this.obj[e];
          return !("string" != typeof n || !t.includes(n)) || (this.catch((({
            expected: e,
            value: t,
            path: n
          }) => ({
            details: "Value must be one of expected values",
            name: "in",
            expected: [...e].sort(),
            path: n.toArray(),
            value: t
          }))({
            expected: t,
            value: n,
            path: this.path.of(e)
          })), !1)
        };
        empty = e => {
          if (!this.array(e)) return !1;
          const t = this.obj[e];
          return 0 === t.length || (this.catch((({
            max: e,
            value: t,
            path: n
          }) => ({
            name: "size",
            max: e,
            path: n.toArray(),
            details: `Size must be at most ${e}`,
            value: t
          }))({
            max: 0,
            value: t,
            path: this.path.of(e)
          })), !1)
        };
        minLength = (e, t) => {
          if (!this.array(e)) return !1;
          const n = this.obj[e];
          return n.length >= t || (this.catch((({
            min: e,
            value: t,
            path: n
          }) => ({
            name: "size",
            min: e,
            path: n.toArray(),
            details: `Size must be at least ${e}`,
            value: t
          }))({
            min: t,
            value: n,
            path: this.path.of(e)
          })), !1)
        };
        noAdditionalProperties = e => {
          const t = Object.keys(this.obj).sort().filter(t => !e.includes(t));
          return t.forEach(e => this.catch((({
            property: e,
            path: t
          }) => ({
            details: `The property "${e}" is not expected`,
            name: "unexpected",
            path: t.toArray()
          }))({
            property: e,
            path: this.path.of(e)
          }))), 0 === t.length
        };
        each = (e, t) => {
          if (!this.array(e)) return;
          const n = this.obj[e];
          let r = !1;
          n.forEach((n, s) => {
            if (r) return;
            const o = t(n, this.path.of(e).of(s));
            o.length > 0 && (r = !0), this.catch(...o)
          })
        }
      }
      const b = [];
      class H {
        contentRule;
        validateData;
        constructor(e, t) {
          this.contentRule = e, this.validateData = t
        }
        assert(e, t) {
          const n = new N(e, t);
          if (!n.object()) return n.errors;
          n.noAdditionalProperties(["nodeType", "data", "content"]);
          const {
            nodeTypes: r,
            min: s = 0
          } = Array.isArray(this.contentRule) ? {
            nodeTypes: this.contentRule
          } : this.contentRule(e, t);
          if (0 === r.length && s > 0) throw new Error(`Invalid content rule. Cannot have enforce a 'min' of ${s} with no nodeTypes`);
          if (n.minLength("content", s), 0 === r.length ? n.empty("content") : n.each("content", (e, t) => {
              const n = new N(e, t);
              return n.object() ? (n.enum("nodeType", r), n.errors) : n.errors
            }), n.object("data")) {
            const r = this.validateData?.(e.data, t.of("data")) ?? [];
            n.catch(...r)
          }
          return n.errors
        }
      }
      class S extends H {
        linkType;
        type;
        constructor(e, t) {
          super(t, (e, t) => this.assertLink(e, t)), this.linkType = e, this.type = this.linkType.startsWith("Contentful:") ? "ResourceLink" : "Link"
        }
        assertLink = (e, t) => {
          const n = new N(e, t);
          if (n.object("target")) {
            const r = new N(e.target.sys, t.of("target").of("sys"));
            r.object() && (r.enum("type", [this.type]), r.enum("linkType", [this.linkType]), "Link" === this.type ? (r.string("id"), r.noAdditionalProperties(["type", "linkType", "id"])) : "ResourceLink" === this.type && (r.string("urn"), r.noAdditionalProperties(["type", "linkType", "urn"]))), n.catch(...r.errors)
          }
          return n.noAdditionalProperties(["target"]), n.errors
        }
      }
      const g = (e, t) => new H(e, t),
        m = (e, t) => new S(e, t);
      class O {
        path;
        constructor(e = []) {
          this.path = e
        }
        of = e => new O([...this.path, e]);
        isRoot = () => 0 === this.path.length;
        last = () => this.path[this.path.length - 1];
        toArray = () => this.path
      }
      const B = g([...Object.values(o), "text"].sort()),
        P = g([s.LIST_ITEM]),
        G = m("Entry", b),
        C = g(() => ({
          nodeTypes: [s.PARAGRAPH],
          min: 1
        }), (e, t) => {
          const n = new N(e, t);
          return n.noAdditionalProperties(["colspan", "rowspan"]), n.number("colspan", !0), n.number("rowspan", !0), n.errors
        }),
        M = {
          [s.DOCUMENT]: g(i),
          [s.PARAGRAPH]: B,
          [s.HEADING_1]: B,
          [s.HEADING_2]: B,
          [s.HEADING_3]: B,
          [s.HEADING_4]: B,
          [s.HEADING_5]: B,
          [s.HEADING_6]: B,
          [s.QUOTE]: g(p[s.QUOTE]),
          [s.EMBEDDED_ENTRY]: G,
          [s.EMBEDDED_ASSET]: m("Asset", b),
          [s.EMBEDDED_RESOURCE]: m("Contentful:Entry", b),
          [s.HR]: g(b),
          [s.OL_LIST]: P,
          [s.UL_LIST]: P,
          [s.LIST_ITEM]: g([...E].sort()),
          [s.TABLE]: g(() => ({
            nodeTypes: [s.TABLE_ROW],
            min: 1
          })),
          [s.TABLE_ROW]: g(() => ({
            nodeTypes: [s.TABLE_CELL, s.TABLE_HEADER_CELL],
            min: 1
          })),
          [s.TABLE_CELL]: C,
          [s.TABLE_HEADER_CELL]: C,
          [o.HYPERLINK]: new class extends H {
            constructor() {
              super(["text"], (e, t) => this.assertLink(e, t))
            }
            assertLink = (e, t) => {
              const n = new N(e, t);
              return n.string("uri"), n.noAdditionalProperties(["uri"]), n.errors
            }
          },
          [o.EMBEDDED_ENTRY]: G,
          [o.EMBEDDED_RESOURCE]: m("Contentful:Entry", b),
          [o.ENTRY_HYPERLINK]: m("Entry", ["text"]),
          [o.ASSET_HYPERLINK]: m("Asset", ["text"]),
          [o.RESOURCE_HYPERLINK]: m("Contentful:Entry", ["text"])
        };

      function k(e, t) {
        if ("text" === e.nodeType) return function(e, t) {
          const n = new N(e, t);
          return n.object() ? (n.noAdditionalProperties(["nodeType", "data", "value", "marks"]), n.object("data"), n.each("marks", (e, t) => {
            const n = new N(e, t);
            return n.object() ? (n.string("type"), n.errors) : n.errors
          }), n.string("value"), n.errors) : n.errors
        }(e, t);
        const n = M[e.nodeType].assert(e, t);
        if (n.length > 0) return n;
        const r = new N(e, t);
        return r.each("content", (e, t) => k(e, t)), r.errors
      }
      const w = e => {
        const t = new O,
          n = new N(e, t);
        return n.object() && n.enum("nodeType", [s.DOCUMENT]), n.errors.length > 0 ? n.errors : k(e, t)
      }
    }
  }
]);