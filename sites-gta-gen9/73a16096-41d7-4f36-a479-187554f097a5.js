try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "73a16096-41d7-4f36-a479-187554f097a5", e._sentryDebugIdIdentifier = "sentry-dbid-73a16096-41d7-4f36-a479-187554f097a5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7715], {
    3322: (e, t, r) => {
      r(1556), new Map
    },
    15411: (e, t, r) => {
      r.d(t, {
        X: () => a
      });
      const a = "undefined" == typeof window
    },
    22673: (e, t, r) => {
      r.d(t, {
        X3: () => a.X,
        IO: () => i
      });
      var a = r(15411);
      const o = e => e - .02;
      o(768), o(1440), o(1920), o(2560), r(3322);
      const n = "__FOUNDRY_ACCENT__",
        i = (e, t) => a.X ? t() : (window[n] || (window[n] = new Map), window[n].has(e) || window[n].set(e, t()), window[n].get(e));
      var l;
      r(98312), r(41972), r(56265), r(31454), r(10533), r(10613), r(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(l || (l = {})), Symbol.toStringTag
    },
    23644: (e, t, r) => {
      function a(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function o(e, t) {
        var r = e;
        for (var a of t) {
          if (!(a in r)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
          r = r[a]
        }
        return r
      }

      function n(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          a = {};
        for (var o in e) {
          var i = e[o],
            l = [...r, o];
          "string" == typeof i || "number" == typeof i || null == i ? a[o] = t(i, l) : "object" != typeof i || Array.isArray(i) ? console.warn('Skipping invalid key "'.concat(l.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(i) ? "Array" : typeof i, '"')) : a[o] = n(i, t, l)
        }
        return a
      }
      r.d(t, {
        Bx: () => n,
        Jt: () => o,
        Tm: () => a
      })
    },
    57461: (e, t, r) => {
      function a(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(r), !0).forEach(function(t) {
            var o, n, i;
            o = e, n = t, i = r[t], (n = a(n)) in o ? Object.defineProperty(o, n, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function i(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      r.d(t, {
        no: () => c
      });
      var l = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var o;
            if (e[a] !== (null !== (o = t[a]) && void 0 !== o ? o : r[a])) return !1
          }
          return !0
        },
        s = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = n(n({}, e.defaultVariants), t);
            for (var o in a) {
              var i, s = null !== (i = a[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var c = s;
                "boolean" == typeof c && (c = !0 === c ? "true" : "false");
                var d = e.variantClassNames[o][c];
                d && (r += " " + d)
              }
            }
            for (var [f, u] of e.compoundVariants) l(f, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return i(e.variantClassNames, e => i(e, e => e.split(" ")[0]))
            }
          }, t
        },
        c = {
          enabled: {
            background: "var(--foundry_1qqcnua0)",
            border: "var(--foundry_1qqcnua1)",
            text: "var(--foundry_1qqcnua2)",
            outline: "var(--foundry_1qqcnua3)"
          },
          hover: {
            background: "var(--foundry_1qqcnua4)",
            border: "var(--foundry_1qqcnua5)",
            text: "var(--foundry_1qqcnua6)",
            outline: "var(--foundry_1qqcnua7)"
          },
          focus: {
            background: "var(--foundry_1qqcnua8)",
            border: "var(--foundry_1qqcnua9)",
            text: "var(--foundry_1qqcnuaa)",
            outline: "var(--foundry_1qqcnuab)"
          },
          pressed: {
            background: "var(--foundry_1qqcnuac)",
            border: "var(--foundry_1qqcnuad)",
            text: "var(--foundry_1qqcnuae)",
            outline: "var(--foundry_1qqcnuaf)"
          },
          disabled: {
            background: "var(--foundry_1qqcnuag)",
            border: "var(--foundry_1qqcnuah)",
            text: "var(--foundry_1qqcnuai)",
            outline: "var(--foundry_1qqcnuaj)"
          },
          loading: {
            background: "var(--foundry_1qqcnuak)",
            border: "var(--foundry_1qqcnual)",
            text: "var(--foundry_1qqcnuam)",
            outline: "var(--foundry_1qqcnuan)"
          }
        };
      s({
        defaultClassName: "foundry_1qqcnuao",
        variantClassNames: {
          appearance: {
            primary: "foundry_1qqcnuap",
            secondary: "foundry_1qqcnuaq",
            tertiary: "foundry_1qqcnuar",
            ghost: "foundry_1qqcnuas",
            information: "foundry_1qqcnuat",
            danger: "foundry_1qqcnuau",
            accent: "foundry_1qqcnuav",
            link: "foundry_1qqcnuaw"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), s({
        defaultClassName: "foundry_tdsdcda foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdc",
            MD: "foundry_tdsdcdd",
            SM: "foundry_tdsdcde",
            XS: "foundry_tdsdcdf"
          },
          appearance: {
            default: "foundry_tdsdcdg",
            bold: "foundry_tdsdcdh",
            hyperlink: "foundry_tdsdcdi"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), s({
        defaultClassName: "foundry_tdsdcdr foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdt",
            bold: "foundry_tdsdcdu"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), s({
        defaultClassName: "foundry_tdsdcd2 foundry_tdsdcd0",
        variantClassNames: {
          level: {
            1: "foundry_tdsdcd4",
            2: "foundry_tdsdcd5",
            3: "foundry_tdsdcd6",
            4: "foundry_tdsdcd7",
            5: "foundry_tdsdcd8",
            6: "foundry_tdsdcd9"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), s({
        defaultClassName: "foundry_tdsdcdj foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdl",
            MD: "foundry_tdsdcdm",
            SM: "foundry_tdsdcdn",
            XS: "foundry_tdsdcdo"
          },
          appearance: {
            default: "foundry_tdsdcdp",
            bold: "foundry_tdsdcdq"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), r(84735)
    },
    78318: e => {
      var t = {}.hasOwnProperty,
        r = /[ -,\.\/:-@\[-\^`\{-~]/,
        a = /[ -,\.\/:-@\[\]\^`\{-~]/,
        o = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        n = function e(n, i) {
          "single" != (i = function(e, r) {
            if (!e) return r;
            var a = {};
            for (var o in r) a[o] = t.call(e, o) ? e[o] : r[o];
            return a
          }(i, e.options)).quotes && "double" != i.quotes && (i.quotes = "single");
          for (var l = "double" == i.quotes ? '"' : "'", s = i.isIdentifier, c = n.charAt(0), d = "", f = 0, u = n.length; f < u;) {
            var h = n.charAt(f++),
              g = h.charCodeAt(),
              v = void 0;
            if (g < 32 || g > 126) {
              if (g >= 55296 && g <= 56319 && f < u) {
                var p = n.charCodeAt(f++);
                56320 == (64512 & p) ? g = ((1023 & g) << 10) + (1023 & p) + 65536 : f--
              }
              v = "\\" + g.toString(16).toUpperCase() + " "
            } else v = i.escapeEverything ? r.test(h) ? "\\" + h : "\\" + g.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(h) ? "\\" + g.toString(16).toUpperCase() + " " : "\\" == h || !s && ('"' == h && l == h || "'" == h && l == h) || s && a.test(h) ? "\\" + h : h;
            d += v
          }
          return s && (/^-[-\d]/.test(d) ? d = "\\-" + d.slice(1) : /\d/.test(c) && (d = "\\3" + c + " " + d.slice(1))), d = d.replace(o, function(e, t, r) {
            return t && t.length % 2 ? e : (t || "") + r
          }), !s && i.wrap ? l + d + l : d
        };
      n.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, n.version = "3.0.0", e.exports = n
    },
    79465: e => {
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === r
            }(e)
          }(e)
        },
        r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function a(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? l((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function o(e, t, r) {
        return e.concat(t).map(function(e) {
          return a(e, r)
        })
      }

      function n(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function i(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function l(e, r, s) {
        (s = s || {}).arrayMerge = s.arrayMerge || o, s.isMergeableObject = s.isMergeableObject || t, s.cloneUnlessOtherwiseSpecified = a;
        var c = Array.isArray(r);
        return c === Array.isArray(e) ? c ? s.arrayMerge(e, r, s) : function(e, t, r) {
          var o = {};
          return r.isMergeableObject(e) && n(e).forEach(function(t) {
            o[t] = a(e[t], r)
          }), n(t).forEach(function(n) {
            (function(e, t) {
              return i(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, n) || (i(e, n) && r.isMergeableObject(t[n]) ? o[n] = function(e, t) {
              if (!t.customMerge) return l;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : l
            }(n, r)(e[n], t[n], r) : o[n] = a(t[n], r))
          }), o
        }(e, r, s) : a(r, s)
      }
      l.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return l(e, r, t)
        }, {})
      };
      var s = l;
      e.exports = s
    },
    84735: (e, t, r) => {
      var a, o, n = {},
        i = r(23644),
        l = r(78318),
        s = r.n(l),
        c = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: r,
              output: a
            } = this._buildTables(e);
            this.gotoFn = r, this.output = a, this.failure = t
          }
          _buildTables(e) {
            const t = {
                0: {}
              },
              r = {};
            let a = 0;
            for (const o of e) {
              let e = 0;
              for (const n of o) t[e] && n in t[e] ? e = t[e][n] : (a++, t[e][n] = a, t[a] = {}, e = a, r[a] = []);
              r[e].push(o)
            }
            const o = {},
              n = [];
            for (const e in t[0]) {
              const r = t[0][e];
              o[r] = 0, n.push(r)
            }
            for (; n.length > 0;) {
              const e = n.shift();
              if (void 0 !== e)
                for (const a in t[e]) {
                  const i = t[e][a];
                  n.push(i);
                  let l = o[e];
                  for (; l > 0 && !(a in t[l]);) l = o[l];
                  if (a in t[l]) {
                    const e = t[l][a];
                    o[i] = e, r[i] = [...r[i], ...r[e]]
                  } else o[i] = 0
                }
            }
            return {
              gotoFn: t,
              output: r,
              failure: o
            }
          }
          search(e) {
            let t = 0;
            const r = [];
            for (let a = 0; a < e.length; a++) {
              const o = e[a];
              for (; t > 0 && !(o in this.gotoFn[t]);) t = this.failure[t];
              if (o in this.gotoFn[t] && (t = this.gotoFn[t][o], this.output[t].length > 0)) {
                const e = this.output[t];
                r.push([a, e])
              }
            }
            return r
          }
          match(e) {
            let t = 0;
            for (let r = 0; r < e.length; r++) {
              const a = e[r];
              for (; t > 0 && !(a in this.gotoFn[t]);) t = this.failure[t];
              if (a in this.gotoFn[t] && (t = this.gotoFn[t][a], this.output[t].length > 0)) return !0
            }
            return !1
          }
        },
        d = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        f = !1;

      function u(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(a || (a = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(o || (o = {}));
      const h = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        g = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        v = new Map([
          [126, o.Element],
          [94, o.Start],
          [36, o.End],
          [42, o.Any],
          [33, o.Not],
          [124, o.Hyphen]
        ]),
        p = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        y = new Set(["contains", "icontains"]);

      function b(e, t, r) {
        const a = parseInt(t, 16) - 65536;
        return a != a || r ? t : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
      }

      function m(e) {
        return e.replace(g, b)
      }

      function w(e) {
        return 39 === e || 34 === e
      }

      function k(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function C(e) {
        const t = [],
          r = S(t, `${e}`, 0);
        if (r < e.length) throw new Error(`Unmatched selector: ${e.slice(r)}`);
        return t
      }

      function S(e, t, r) {
        let n = [];

        function i(e) {
          const a = t.slice(r + e).match(h);
          if (!a) throw new Error(`Expected name, found ${t.slice(r)}`);
          const [o] = a;
          return r += e + o.length, m(o)
        }

        function l(e) {
          for (r += e; r < t.length && k(t.charCodeAt(r));) r++
        }

        function s() {
          const e = r += 1;
          let a = 1;
          for (; a > 0 && r < t.length; r++) 40 !== t.charCodeAt(r) || c(r) ? 41 !== t.charCodeAt(r) || c(r) || a-- : a++;
          if (a) throw new Error("Parenthesis not matched");
          return m(t.slice(e, r - 1))
        }

        function c(e) {
          let r = 0;
          for (; 92 === t.charCodeAt(--e);) r++;
          return !(1 & ~r)
        }

        function d() {
          if (n.length > 0 && function(e) {
              switch (e.type) {
                case a.Adjacent:
                case a.Child:
                case a.Descendant:
                case a.Parent:
                case a.Sibling:
                case a.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(n[n.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function f(e) {
          n.length > 0 && n[n.length - 1].type === a.Descendant ? n[n.length - 1].type = e : (d(), n.push({
            type: e
          }))
        }

        function u(e, t) {
          n.push({
            type: a.Attribute,
            name: e,
            action: t,
            value: i(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function g() {
          if (n.length && n[n.length - 1].type === a.Descendant && n.pop(), 0 === n.length) throw new Error("Empty sub-selector");
          e.push(n)
        }
        if (l(0), t.length === r) return r;
        e: for (; r < t.length;) {
          const e = t.charCodeAt(r);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== n.length && n[0].type === a.Descendant || (d(), n.push({
                type: a.Descendant
              })), l(1);
              break;
            case 62:
              f(a.Child), l(1);
              break;
            case 60:
              f(a.Parent), l(1);
              break;
            case 126:
              f(a.Sibling), l(1);
              break;
            case 43:
              f(a.Adjacent), l(1);
              break;
            case 46:
              u("class", o.Element);
              break;
            case 35:
              u("id", o.Equals);
              break;
            case 91: {
              let e;
              l(1);
              let s = null;
              124 === t.charCodeAt(r) ? e = i(1) : t.startsWith("*|", r) ? (s = "*", e = i(2)) : (e = i(0), 124 === t.charCodeAt(r) && 61 !== t.charCodeAt(r + 1) && (s = e, e = i(1))), l(0);
              let d = o.Exists;
              const f = v.get(t.charCodeAt(r));
              if (f) {
                if (d = f, 61 !== t.charCodeAt(r + 1)) throw new Error("Expected `=`");
                l(2)
              } else 61 === t.charCodeAt(r) && (d = o.Equals, l(1));
              let u = "",
                h = null;
              if ("exists" !== d) {
                if (w(t.charCodeAt(r))) {
                  const e = t.charCodeAt(r);
                  let a = r + 1;
                  for (; a < t.length && (t.charCodeAt(a) !== e || c(a));) a += 1;
                  if (t.charCodeAt(a) !== e) throw new Error("Attribute value didn't end");
                  u = m(t.slice(r + 1, a)), r = a + 1
                } else {
                  const e = r;
                  for (; r < t.length && (!k(t.charCodeAt(r)) && 93 !== t.charCodeAt(r) || c(r));) r += 1;
                  u = m(t.slice(e, r))
                }
                l(0);
                const e = 32 | t.charCodeAt(r);
                115 === e ? (h = !1, l(1)) : 105 === e && (h = !0, l(1))
              }
              if (93 !== t.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const g = {
                type: a.Attribute,
                name: e,
                action: d,
                value: u,
                namespace: s,
                ignoreCase: h
              };
              n.push(g);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(r + 1)) {
                n.push({
                  type: a.PseudoElement,
                  name: i(2).toLowerCase(),
                  data: 40 === t.charCodeAt(r) ? s() : null
                });
                continue
              }
              const e = i(1).toLowerCase();
              let o = null;
              if (40 === t.charCodeAt(r))
                if (p.has(e)) {
                  if (w(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (o = [], r = S(o, t, r + 1), 41 !== t.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  r += 1
                } else {
                  if (o = s(), y.has(e)) {
                    const e = o.charCodeAt(0);
                    e === o.charCodeAt(o.length - 1) && w(e) && (o = o.slice(1, -1))
                  }
                  o = m(o)
                } n.push({
                type: a.Pseudo,
                name: e,
                data: o
              });
              break
            }
            case 44:
              g(), n = [], l(1);
              break;
            default: {
              if (t.startsWith("/*", r)) {
                const e = t.indexOf("*/", r + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                r = e + 2, 0 === n.length && l(0);
                break
              }
              let o, s = null;
              if (42 === e) r += 1, o = "*";
              else if (124 === e) {
                if (o = "", 124 === t.charCodeAt(r + 1)) {
                  f(a.ColumnCombinator), l(2);
                  break
                }
              } else {
                if (!h.test(t.slice(r))) break e;
                o = i(0)
              }
              124 === t.charCodeAt(r) && 124 !== t.charCodeAt(r + 1) && (s = o, 42 === t.charCodeAt(r + 1) ? (o = "*", r += 2) : o = i(1)), n.push("*" === o ? {
                type: a.Universal,
                namespace: s
              } : {
                type: a.Tag,
                name: o,
                namespace: s
              })
            }
          }
        }
        return g(), r
      }

      function O(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? O(Object(r), !0).forEach(function(t) {
            x(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function x(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      const _ = function e(t) {
        return r.withOptions = r => e(A(A({}, t), r)), r;

        function r(e, ...r) {
          const a = "string" == typeof e ? [e] : e.raw,
            {
              alignValues: o = !1,
              escapeSpecialCharacters: n = Array.isArray(e),
              trimWhitespace: i = !0
            } = t;
          let l = "";
          for (let e = 0; e < a.length; e++) {
            let t = a[e];
            n && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), l += t, e < r.length && (l += o ? L(r[e], l) : r[e])
          }
          const s = l.split("\n");
          let c = null;
          for (const e of s) {
            const t = e.match(/^(\s+)\S+/);
            if (t) {
              const e = t[1].length;
              c = c ? Math.min(c, e) : e
            }
          }
          if (null !== c) {
            const e = c;
            l = s.map(t => " " === t[0] || "\t" === t[0] ? t.slice(e) : t).join("\n")
          }
          return i && (l = l.trim()), n && (l = l.replace(/\\n/g, "\n")), l
        }
      }({});

      function L(e, t) {
        if ("string" != typeof e || !e.includes("\n")) return e;
        const r = t.slice(t.lastIndexOf("\n") + 1).match(/^(\s+)/);
        if (r) {
          const t = r[1];
          return e.replace(/\n/g, `\n${t}`)
        }
        return e
      }
      var z = function() {
        return z = Object.assign || function(e) {
          for (var t, r = 1, a = arguments.length; r < a; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, z.apply(this, arguments)
      };

      function E(e, t) {
        var r = {};
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (a = Object.getOwnPropertySymbols(e); o < a.length; o++) t.indexOf(a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[o]) && (r[a[o]] = e[a[o]])
        }
        return r
      }

      function T(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var a, o, n = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(a = n.next()).done;) i.push(a.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            a && !a.done && (r = n.return) && r.call(n)
          } finally {
            if (o) throw o.error
          }
        }
        return i
      }
      var j, F = /(\u000D|\u000C|\u000D\u000A)/g,
        q = /[\u0000\uD800-\uDFFF]/g,
        R = /(\/\*)[\s\S]*?(\*\/)/g,
        M = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), a = [], o = t + 1; o < e.length; o += 1) {
            var n = e.charCodeAt(o);
            if (n === r) return [o, String.fromCharCode.apply(null, a)];
            if (92 === n) {
              var i = D(e, o);
              if (null === i) return null;
              var l = T(i, 2),
                s = l[0],
                c = l[1];
              a.push(c), o = s
            } else {
              if (10 === n) return null;
              a.push(n)
            }
          }
          return null
        },
        P = function(e, t) {
          if (e.length <= t) return !1;
          var r, a = e.charCodeAt(t);
          return 45 === a ? !(e.length <= t + 1) && (45 === (r = e.charCodeAt(t + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === a || a >= 65 && a <= 90 || a >= 97 && a <= 122 || a >= 128 || 92 === a && !(e.length <= t + 1) && 10 !== (r = e.charCodeAt(t + 1))
        },
        D = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var r = e.charCodeAt(t + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var a = [r], o = Math.min(t + 7, e.length), n = t + 2; n < o; n += 1) {
              var i = e.charCodeAt(n);
              if (!(i >= 48 && i <= 57 || i >= 65 && i <= 70 || i >= 97 && i <= 102)) break;
              a.push(i)
            }
            if (n < e.length) {
              var l = e.charCodeAt(n);
              9 !== l && 32 !== l && 10 !== l || (n += 1)
            }
            return [n - 1, parseInt(String.fromCharCode.apply(null, a), 16)]
          }
          return [t + 1, r]
        },
        I = function(e, t) {
          var r = N(e, t);
          if (null === r) return null;
          var a = T(r, 3),
            o = a[0],
            n = a[1],
            i = a[2],
            l = W(e, o + 1);
          if (null !== l) {
            var s = T(l, 2);
            return [s[0],
              ["<dimension-token>", n, s[1]]
            ]
          }
          return o + 1 < e.length && 37 === e.charCodeAt(o + 1) ? [o + 1, ["<percentage-token>", n]] : [o, ["<number-token>", n, i]]
        },
        N = function(e, t) {
          if (e.length <= t) return null;
          var r = "integer",
            a = [],
            o = e.charCodeAt(t);
          for (43 !== o && 45 !== o || (t += 1, 45 === o && a.push(45)); t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) a.push(c), t += 1;
          if (t + 1 < e.length) {
            var n = e.charCodeAt(t),
              i = e.charCodeAt(t + 1);
            if (46 === n && i >= 48 && i <= 57)
              for (a.push(n, i), r = "number", t += 2; t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) a.push(c), t += 1
          }
          if (t + 1 < e.length) {
            n = e.charCodeAt(t), i = e.charCodeAt(t + 1);
            var l = e.charCodeAt(t + 2);
            if (69 === n || 101 === n) {
              var s = i >= 48 && i <= 57;
              if (s || (43 === i || 45 === i) && l >= 48 && l <= 57)
                for (r = "number", s ? (a.push(69, i), t += 2) : 45 === i ? (a.push(69, 45, l), t += 3) : (a.push(69, l), t += 3); t < e.length;) {
                  var c;
                  if (!((c = e.charCodeAt(t)) >= 48 && c <= 57)) break;
                  a.push(c), t += 1
                }
            }
          }
          var d = String.fromCharCode.apply(null, a),
            f = "number" === r ? parseFloat(d) : parseInt(d);
          return -0 === f && (f = 0), Number.isNaN(f) ? null : [t - 1, f, r]
        },
        B = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], a = e.charCodeAt(t); t < e.length; a = e.charCodeAt(++t))
            if (45 === a || 95 === a || a >= 65 && a <= 90 || a >= 97 && a <= 122 || a >= 128 || a >= 48 && a <= 57) r.push(a);
            else {
              var o = D(e, t);
              if (null === o) break;
              var n = T(o, 2),
                i = n[0],
                l = n[1];
              r.push(l), t = i
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        W = function(e, t) {
          if (e.length <= t || !P(e, t)) return null;
          for (var r = [], a = e.charCodeAt(t); t < e.length; a = e.charCodeAt(++t))
            if (45 === a || 95 === a || a >= 65 && a <= 90 || a >= 97 && a <= 122 || a >= 128 || a >= 48 && a <= 57) r.push(a);
            else {
              var o = D(e, t);
              if (null === o) break;
              var n = T(o, 2),
                i = n[0],
                l = n[1];
              r.push(l), t = i
            } return [t - 1, String.fromCharCode.apply(null, r)]
        },
        U = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var a = [], o = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, a)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) o || 0 === a.length || (o = !0);
            else if (92 === r) {
              var n = D(e, t);
              if (null === n || o) return null;
              var i = T(n, 2),
                l = i[0],
                s = i[1];
              a.push(s), t = l
            } else {
              if (o) return null;
              a.push(r)
            }
            r = e.charCodeAt(++t)
          }
          return null
        },
        H = function(e, t) {
          var r = W(e, t);
          if (null === r) return null;
          var a = T(r, 2),
            o = a[0],
            n = a[1];
          if ("url" === n.toLowerCase()) {
            if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) {
              for (var i = 2; o + i < e.length; i += 1) {
                var l = e.charCodeAt(o + i);
                if (34 === l || 39 === l) return [o + 1, n.toLowerCase(), "<function-token>"];
                if (9 !== l && 32 !== l && 10 !== l) {
                  var s = U(e, o + i);
                  if (null === s) return null;
                  var c = T(s, 2);
                  return [c[0], c[1], "<url-token>"]
                }
              }
              return [o + 1, n.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) return [o + 1, n.toLowerCase(), "<function-token>"];
          return [o, n.toLowerCase(), "<ident-token>"]
        },
        G = function(e) {
          if (null === e.mediaCondition) return e;
          var t = $(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        $ = function e(t) {
          for (var r = t.children.length - 1; r >= 0; r--) {
            var a = t.children[r];
            if (!("context" in a)) {
              var o = e(a);
              if (null === o.operator && 1 === o.children.length) t.children[r] = o.children[0];
              else if (o.operator === t.operator && ("and" === o.operator || "or" === o.operator)) {
                for (var n = [r, 1], i = 0; i < o.children.length; i++) n.push(o.children[i]);
                t.children.splice.apply(t.children, n)
              }
            }
          }
          return t
        },
        V = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        X = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(F, "\n").replace(q, "�")).replace(R, "");
            for (var r = []; t < e.length; t += 1) {
              var a = e.charCodeAt(t);
              if (9 === a || 32 === a || 10 === a) {
                for (var o = e.charCodeAt(++t); 9 === o || 32 === o || 10 === o;) o = e.charCodeAt(++t);
                t -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === a) {
                if (null === (A = M(e, t))) return null;
                var n = T(A, 2),
                  i = n[0],
                  l = n[1];
                r.push({
                  type: "<string-token>",
                  value: l
                }), t = i
              } else if (35 === a) {
                if (t + 1 < e.length && (95 === (g = e.charCodeAt(t + 1)) || g >= 65 && g <= 90 || g >= 97 && g <= 122 || g >= 128 || g >= 48 && g <= 57 || 92 === g && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var s = P(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (A = B(e, t + 1))) {
                    var c = T(A, 2);
                    i = c[0], l = c[1], r.push({
                      type: "<hash-token>",
                      value: l.toLowerCase(),
                      flag: s
                    }), t = i;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: a
                })
              } else if (39 === a) {
                if (null === (A = M(e, t))) return null;
                var d = T(A, 2);
                i = d[0], l = d[1], r.push({
                  type: "<string-token>",
                  value: l
                }), t = i
              } else if (40 === a) r.push({
                type: "<(-token>"
              });
              else if (41 === a) r.push({
                type: "<)-token>"
              });
              else if (43 === a) {
                var f = I(e, t);
                if (null === f) r.push({
                  type: "<delim-token>",
                  value: a
                });
                else {
                  var u = T(f, 2);
                  i = u[0], "<dimension-token>" === (S = u[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: S[1],
                    unit: S[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === S[0] ? r.push({
                    type: S[0],
                    value: S[1],
                    flag: S[2]
                  }) : r.push({
                    type: S[0],
                    value: S[1],
                    flag: "number"
                  }), t = i
                }
              } else if (44 === a) r.push({
                type: "<comma-token>"
              });
              else if (45 === a) {
                if (null !== (b = I(e, t))) {
                  var h = T(b, 2);
                  i = h[0], "<dimension-token>" === (S = h[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: S[1],
                    unit: S[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === S[0] ? r.push({
                    type: S[0],
                    value: S[1],
                    flag: S[2]
                  }) : r.push({
                    type: S[0],
                    value: S[1],
                    flag: "number"
                  }), t = i;
                  continue
                }
                if (t + 2 < e.length) {
                  var g = e.charCodeAt(t + 1),
                    v = e.charCodeAt(t + 2);
                  if (45 === g && 62 === v) {
                    r.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (A = H(e, t))) {
                  var p = T(A, 3),
                    y = (i = p[0], l = p[1], p[2]);
                  r.push({
                    type: y,
                    value: l
                  }), t = i;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: a
                })
              } else if (46 === a) {
                var b;
                if (null !== (b = I(e, t))) {
                  var m = T(b, 2);
                  i = m[0], "<dimension-token>" === (S = m[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: S[1],
                    unit: S[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === S[0] ? r.push({
                    type: S[0],
                    value: S[1],
                    flag: S[2]
                  }) : r.push({
                    type: S[0],
                    value: S[1],
                    flag: "number"
                  }), t = i;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: a
                })
              } else if (58 === a) r.push({
                type: "<colon-token>"
              });
              else if (59 === a) r.push({
                type: "<semicolon-token>"
              });
              else if (60 === a) {
                if (t + 3 < e.length) {
                  g = e.charCodeAt(t + 1), v = e.charCodeAt(t + 2);
                  var w = e.charCodeAt(t + 3);
                  if (33 === g && 45 === v && 45 === w) {
                    r.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: a
                })
              } else if (64 === a) {
                if (null !== (A = W(e, t + 1))) {
                  var k = T(A, 2);
                  i = k[0], l = k[1], r.push({
                    type: "<at-keyword-token>",
                    value: l.toLowerCase()
                  }), t = i;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: a
                })
              } else if (91 === a) r.push({
                type: "<[-token>"
              });
              else if (92 === a) {
                if (null === (A = D(e, t))) return null;
                var C = T(A, 2);
                i = C[0], l = C[1], e = e.slice(0, t) + l + e.slice(i + 1), t -= 1
              } else if (93 === a) r.push({
                type: "<]-token>"
              });
              else if (123 === a) r.push({
                type: "<{-token>"
              });
              else if (125 === a) r.push({
                type: "<}-token>"
              });
              else if (a >= 48 && a <= 57) {
                var S, O = T(A = I(e, t), 2);
                i = O[0], "<dimension-token>" === (S = O[1])[0] ? r.push({
                  type: "<dimension-token>",
                  value: S[1],
                  unit: S[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === S[0] ? r.push({
                  type: S[0],
                  value: S[1],
                  flag: S[2]
                }) : r.push({
                  type: S[0],
                  value: S[1],
                  flag: "number"
                }), t = i
              } else if (95 === a || a >= 65 && a <= 90 || a >= 97 && a <= 122 || a >= 128) {
                var A;
                if (null === (A = H(e, t))) return null;
                var x = T(A, 3);
                i = x[0], l = x[1], y = x[2], r.push({
                  type: y,
                  value: l
                }), t = i
              } else r.push({
                type: "<delim-token>",
                value: a
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(e.trim());
          if (null === t) throw V("Failed tokenizing");
          var r = 0,
            a = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw V("Expected whitespace after media");
            r = 2;
            for (var o = 2; o < t.length - 1; o++) {
              var n = t[o];
              if ("<{-token>" === n.type) {
                a = o;
                break
              }
              if ("<semicolon-token>" === n.type) throw V("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(r, a), J(t)
        },
        Y = function(e) {
          for (var t = [], r = !1, a = 0; a < e.length; a++) "<whitespace-token>" === e[a].type ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(z(z({}, e[a]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return t
        },
        J = function(e) {
          for (var t, r, a = [
              []
            ], o = 0; o < e.length; o++) {
            var n = e[o];
            "<comma-token>" === n.type ? a.push([]) : a[a.length - 1].push(n)
          }
          var i = a.map(Y);
          if (1 === i.length && 0 === i[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var l = i.map(function(e) {
              return 0 === e.length ? null : Q(e)
            }),
            s = [];
          try {
            for (var c = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  r = t && e[t],
                  a = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && a >= e.length && (e = void 0), {
                      value: e && e[a++],
                      done: !e
                    }
                  }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(l), d = c.next(); !d.done; d = c.next()) {
              var f = d.value;
              null !== f && s.push(f)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              d && !d.done && (r = c.return) && r.call(c)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === s.length) throw V("No valid media queries");
          return s
        },
        Q = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Z(e, !0)
            }
          } catch (e) {
            throw V("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw V("Expected media condition or media prefix");
            var r = null,
              a = void 0,
              o = t.value;
            "only" !== o && "not" !== o || (r = o);
            var n = null === r ? 0 : 1;
            if (e.length <= n) throw V("Expected extra token in media query");
            var i = e[n];
            if ("<ident-token>" === i.type) {
              var l = i.value;
              if ("all" === l) a = "all";
              else if ("print" === l || "screen" === l) a = l;
              else {
                if ("tty" !== l && "tv" !== l && "projection" !== l && "handheld" !== l && "braille" !== l && "embossed" !== l && "aural" !== l && "speech" !== l) throw V("Unknown ident '".concat(l, "' in media query"));
                r = "not" === r ? null : "not", a = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== i.type) throw V("Invalid media query");
              var s = [{
                type: "<(-token>",
                wsBefore: !1,
                wsAfter: !1
              }];
              s.push.apply(s, e), s.push({
                type: "<)-token>",
                wsBefore: !1,
                wsAfter: !1
              });
              try {
                return {
                  mediaPrefix: null,
                  mediaType: "all",
                  mediaCondition: Z(s, !0)
                }
              } catch (e) {
                throw V("Expected media condition after '('", e)
              }
            }
            if (n + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: a,
              mediaCondition: null
            };
            if (!(n + 4 < e.length)) throw V("Expected media condition after media prefix");
            var c = e[n + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw V("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: a,
                mediaCondition: Z(e.slice(n + 2), !1)
              }
            } catch (e) {
              throw V("Expected media condition after 'and'", e)
            }
          }
        },
        Z = function e(t, r, a) {
          if (void 0 === a && (a = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var o, n = t.length - 1, i = 0, l = 0, s = 0; s < t.length; s++) {
            var c = t[s];
            if ("<(-token>" === c.type ? (l += 1, i = Math.max(i, l)) : "<)-token>" === c.type && (l -= 1), 0 === l) {
              n = s;
              break
            }
          }
          if (0 !== l) throw new Error("Mismatched parens\nInvalid media condition");
          var d = t.slice(0, n + 1);
          if (o = 1 === i ? K(d) : "<ident-token>" === d[1].type && "not" === d[1].value ? e(d.slice(2, -1), !0, "not") : e(d.slice(1, -1), !0), n === t.length - 1) return {
            operator: a,
            children: [o]
          };
          var f = t[n + 1];
          if ("<ident-token>" !== f.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== a && a !== f.value) throw new Error("'".concat(f.value, "' and '").concat(a, "' must not be at same level\nInvalid media condition"));
          if ("or" === f.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== f.value && "or" !== f.value) throw new Error("Invalid operator: '".concat(f.value, "'\nInvalid media condition"));
          var u = e(t.slice(n + 2), r, f.value);
          return {
            operator: f.value,
            children: [o].concat(u.children)
          }
        },
        K = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], r = 1; r < e.length; r++) {
            if (r < e.length - 2) {
              var a = e[r],
                o = e[r + 1],
                n = e[r + 2];
              if ("<number-token>" === a.type && a.value > 0 && "<delim-token>" === o.type && 47 === o.value && "<number-token>" === n.type && n.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: a.value,
                  denominator: n.value,
                  wsBefore: a.wsBefore,
                  wsAfter: n.wsAfter
                }), r += 2;
                continue
              }
            }
            t.push(e[r])
          }
          var i = t[1];
          if ("<ident-token>" === i.type && 3 === t.length) return {
            context: "boolean",
            feature: i.value
          };
          if (5 === t.length && "<ident-token>" === t[1].type && "<colon-token>" === t[2].type) {
            var l = t[3];
            if ("<number-token>" === l.type || "<dimension-token>" === l.type || "<ratio-token>" === l.type || "<ident-token>" === l.type) {
              var s = t[1].value,
                c = null,
                d = s.slice(0, 4);
              return "min-" === d ? (c = "min", s = s.slice(4)) : "max-" === d && (c = "max", s = s.slice(4)), l.wsBefore, l.wsAfter, {
                context: "value",
                prefix: c,
                feature: s,
                value: E(l, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var f = ee(t);
            return {
              context: "range",
              feature: f.featureName,
              range: f
            }
          } catch (e) {
            throw V("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        ee = function(e) {
          var t, r, a, o;
          if (e.length < 5 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid range");
          var n = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            i = "<number-token>" === e[1].type || "<dimension-token>" === e[1].type || "<ratio-token>" === e[1].type || "<ident-token>" === e[1].type && "infinite" === e[1].value;
          if ("<delim-token>" === e[2].type) {
            if (60 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? n[i ? "leftOp" : "rightOp"] = "<" : n[i ? "leftOp" : "rightOp"] = "<=";
            else if (62 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? n[i ? "leftOp" : "rightOp"] = ">" : n[i ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== e[2].value) throw new Error("Invalid range");
              n[i ? "leftOp" : "rightOp"] = "="
            }
            if (i) n.leftToken = e[1];
            else {
              if ("<ident-token>" !== e[1].type) throw new Error("Invalid range");
              n.featureName = e[1].value
            }
            var l = 2 + (null !== (r = null === (t = n[i ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0),
              s = e[l];
            if (i) {
              if ("<ident-token>" !== s.type) throw new Error("Invalid range");
              if (n.featureName = s.value, e.length >= 7) {
                var c = e[l + 1],
                  d = e[l + 2];
                if ("<delim-token>" !== c.type) throw new Error("Invalid range");
                var f = c.value;
                if (60 === f) "<delim-token>" !== d.type || 61 !== d.value || d.wsBefore ? n.rightOp = "<" : n.rightOp = "<=";
                else {
                  if (62 !== f) throw new Error("Invalid range");
                  "<delim-token>" !== d.type || 61 !== d.value || d.wsBefore ? n.rightOp = ">" : n.rightOp = ">="
                }
                var u = e[l + 1 + (null !== (o = null === (a = n.rightOp) || void 0 === a ? void 0 : a.length) && void 0 !== o ? o : 0)];
                n.rightToken = u
              } else if (l + 2 !== e.length) throw new Error("Invalid range")
            } else n.rightToken = s;
            var h = null,
              g = n.leftToken,
              v = n.leftOp,
              p = n.featureName,
              y = n.rightOp,
              b = n.rightToken,
              m = null;
            if (null !== g)
              if ("<ident-token>" === g.type) {
                var w = g.type;
                "infinite" === (C = g.value) && (m = {
                  type: w,
                  value: C
                })
              } else "<number-token>" !== g.type && "<dimension-token>" !== g.type && "<ratio-token>" !== g.type || (g.wsBefore, g.wsAfter, m = E(g, ["wsBefore", "wsAfter"]));
            var k = null;
            if (null !== b)
              if ("<ident-token>" === b.type) {
                var C;
                w = b.type, "infinite" === (C = b.value) && (k = {
                  type: w,
                  value: C
                })
              } else "<number-token>" !== b.type && "<dimension-token>" !== b.type && "<ratio-token>" !== b.type || (b.wsBefore, b.wsAfter, k = E(b, ["wsBefore", "wsAfter"]));
            if (null !== m && null !== k)
              if ("<" !== v && "<=" !== v || "<" !== y && "<=" !== y) {
                if (">" !== v && ">=" !== v || ">" !== y && ">=" !== y) throw new Error("Invalid range");
                h = {
                  leftToken: m,
                  leftOp: v,
                  featureName: p,
                  rightOp: y,
                  rightToken: k
                }
              } else h = {
                leftToken: m,
                leftOp: v,
                featureName: p,
                rightOp: y,
                rightToken: k
              };
            else(null === m && null === v && null !== y && null !== k || null !== m && null !== v && null === y && null === k) && (h = {
              leftToken: m,
              leftOp: v,
              featureName: p,
              rightOp: y,
              rightToken: k
            });
            return h
          }
          throw new Error("Invalid range")
        };

      function te(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function re(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? re(Object(r), !0).forEach(function(t) {
            var a, o, n;
            a = e, o = t, n = r[t], (o = te(o)) in a ? Object.defineProperty(a, o, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[o] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : re(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function oe(e, t) {
        if (null == e) return {};
        var r, a, o = function(e, t) {
          if (null == e) return {};
          var r, a, o = {},
            n = Object.keys(e);
          for (a = 0; a < n.length; a++) r = n[a], t.indexOf(r) >= 0 || (o[r] = e[r]);
          return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (a = 0; a < n.length; a++) r = n[a], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
        }
        return o
      }

      function ne(e, t) {
        for (var r in e) t(e[r], r)
      }

      function ie(e, t) {
        var r = {};
        for (var a in e) - 1 === t.indexOf(a) && (r[a] = e[a]);
        return r
      }
      class le {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new le
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var r of e) {
            var a = t.findOrCreateCondition(r);
            t = a.children
          }
          return t
        }
        addRule(e, t, r) {
          var a = this.getConditionalRulesetByPath(r).findOrCreateCondition(t);
          if (!a) throw new Error("Failed to add conditional rule");
          a.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var r = this.getConditionalRulesetByPath(e), a = 0; a < t.length; a++) {
            var o, n = t[a],
              i = null !== (o = r.precedenceLookup.get(n)) && void 0 !== o ? o : new Set;
            for (var l of t.slice(a + 1)) i.add(l);
            r.precedenceLookup.set(n, i)
          }
        }
        isCompatible(e) {
          for (var [t, r] of this.precedenceLookup.entries())
            for (var a of r) {
              var o;
              if (null !== (o = e.precedenceLookup.get(a)) && void 0 !== o && o.has(t)) return !1
            }
          for (var {
              query: n,
              children: i
            }
            of e.ruleset.values()) {
            var l = this.ruleset.get(n);
            if (l && !l.children.isCompatible(i)) return !1
          }
          return !0
        }
        merge(e) {
          for (var {
              query: t,
              rules: r,
              children: a
            }
            of e.ruleset.values()) {
            var o = this.ruleset.get(t);
            o ? (o.rules.push(...r), o.children.merge(a)) : this.ruleset.set(t, {
              query: t,
              rules: r,
              children: a
            })
          }
          for (var [n, i] of e.precedenceLookup.entries()) {
            var l, s = null !== (l = this.precedenceLookup.get(n)) && void 0 !== l ? l : new Set;
            this.precedenceLookup.set(n, new Set([...s, ...i]))
          }
        }
        mergeIfCompatible(e) {
          return !!this.isCompatible(e) && (this.merge(e), !0)
        }
        getSortedRuleset() {
          var e = this,
            t = [],
            r = function(r) {
              var o = e.ruleset.get(a);
              if (!o) throw new Error("Can't find condition for ".concat(a));
              var n = t.findIndex(e => r.has(e.query));
              n > -1 ? t.splice(n, 0, o) : t.push(o)
            };
          for (var [a, o] of this.precedenceLookup.entries()) r(o);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: r,
              children: a
            }
            of this.getSortedRuleset()) {
            var o = {};
            for (var n of r) o[n.selector] = ae(ae({}, o[n.selector]), n.rule);
            Object.assign(o, ...a.renderToArray()), e.push({
              [t]: o
            })
          }
          return e
        }
      }
      var se, ce = {
          ":-moz-any-link": !0,
          ":-moz-full-screen": !0,
          ":-moz-placeholder": !0,
          ":-moz-read-only": !0,
          ":-moz-read-write": !0,
          ":-ms-fullscreen": !0,
          ":-ms-input-placeholder": !0,
          ":-webkit-any-link": !0,
          ":-webkit-full-screen": !0,
          "::-moz-color-swatch": !0,
          "::-moz-list-bullet": !0,
          "::-moz-list-number": !0,
          "::-moz-page-sequence": !0,
          "::-moz-page": !0,
          "::-moz-placeholder": !0,
          "::-moz-progress-bar": !0,
          "::-moz-range-progress": !0,
          "::-moz-range-thumb": !0,
          "::-moz-range-track": !0,
          "::-moz-scrolled-page-sequence": !0,
          "::-moz-selection": !0,
          "::-ms-backdrop": !0,
          "::-ms-browse": !0,
          "::-ms-check": !0,
          "::-ms-clear": !0,
          "::-ms-fill-lower": !0,
          "::-ms-fill-upper": !0,
          "::-ms-fill": !0,
          "::-ms-reveal": !0,
          "::-ms-thumb": !0,
          "::-ms-ticks-after": !0,
          "::-ms-ticks-before": !0,
          "::-ms-tooltip": !0,
          "::-ms-track": !0,
          "::-ms-value": !0,
          "::-webkit-backdrop": !0,
          "::-webkit-calendar-picker-indicator": !0,
          "::-webkit-inner-spin-button": !0,
          "::-webkit-input-placeholder": !0,
          "::-webkit-meter-bar": !0,
          "::-webkit-meter-even-less-good-value": !0,
          "::-webkit-meter-inner-element": !0,
          "::-webkit-meter-optimum-value": !0,
          "::-webkit-meter-suboptimum-value": !0,
          "::-webkit-outer-spin-button": !0,
          "::-webkit-progress-bar": !0,
          "::-webkit-progress-inner-element": !0,
          "::-webkit-progress-inner-value": !0,
          "::-webkit-progress-value": !0,
          "::-webkit-resizer": !0,
          "::-webkit-scrollbar-button": !0,
          "::-webkit-scrollbar-corner": !0,
          "::-webkit-scrollbar-thumb": !0,
          "::-webkit-scrollbar-track-piece": !0,
          "::-webkit-scrollbar-track": !0,
          "::-webkit-scrollbar": !0,
          "::-webkit-search-cancel-button": !0,
          "::-webkit-search-results-button": !0,
          "::-webkit-slider-runnable-track": !0,
          "::-webkit-slider-thumb": !0,
          "::after": !0,
          "::backdrop": !0,
          "::before": !0,
          "::cue": !0,
          "::file-selector-button": !0,
          "::first-letter": !0,
          "::first-line": !0,
          "::grammar-error": !0,
          "::marker": !0,
          "::placeholder": !0,
          "::selection": !0,
          "::spelling-error": !0,
          "::target-text": !0,
          "::view-transition-group": !0,
          "::view-transition-image-pair": !0,
          "::view-transition-new": !0,
          "::view-transition-old": !0,
          "::view-transition": !0,
          ":active": !0,
          ":after": !0,
          ":any-link": !0,
          ":before": !0,
          ":blank": !0,
          ":checked": !0,
          ":default": !0,
          ":defined": !0,
          ":disabled": !0,
          ":empty": !0,
          ":enabled": !0,
          ":first-child": !0,
          ":first-letter": !0,
          ":first-line": !0,
          ":first-of-type": !0,
          ":first": !0,
          ":focus-visible": !0,
          ":focus-within": !0,
          ":focus": !0,
          ":fullscreen": !0,
          ":hover": !0,
          ":in-range": !0,
          ":indeterminate": !0,
          ":invalid": !0,
          ":last-child": !0,
          ":last-of-type": !0,
          ":left": !0,
          ":link": !0,
          ":only-child": !0,
          ":only-of-type": !0,
          ":optional": !0,
          ":out-of-range": !0,
          ":placeholder-shown": !0,
          ":read-only": !0,
          ":read-write": !0,
          ":required": !0,
          ":right": !0,
          ":root": !0,
          ":scope": !0,
          ":target": !0,
          ":valid": !0,
          ":visited": !0
        },
        de = Object.keys(ce),
        fe = ce,
        ue = (e, t) => new Error(_(se || (se = u(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        he = e => {
          if ("@media " === e) throw ue(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = G(e[t])
            })(X(e))
          } catch (t) {
            throw ue(e, t.message)
          }
        },
        ge = ["vars"],
        ve = ["content"],
        pe = "__DECLARATION",
        ye = {
          animationIterationCount: !0,
          borderImage: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          initialLetter: !0,
          lineClamp: !0,
          lineHeight: !0,
          maxLines: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          tabSize: !0,
          WebkitLineClamp: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          maskBorder: !0,
          maskBorderOutset: !0,
          maskBorderSlice: !0,
          maskBorderWidth: !0,
          shapeImageThreshold: !0,
          stopOpacity: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        };

      function be(e, t, r, a) {
        var o = e.slice(0, t),
          n = e.slice(r);
        return "".concat(o).concat(a).concat(n)
      }
      var me = [...de, "@layer", "@media", "@supports", "@container", "@starting-style", "selectors"];
      class we {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new le], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map(e => [e, e])), this.localClassNamesSearch = new c(e), this.layers = new Map, this.composedClassLists = t.map(e => {
            var {
              identifier: t,
              classList: r
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(r, ")"), "g")
            }
          }).reverse()
        }
        processCssObj(e) {
          if ("fontFace" !== e.type)
            if ("property" !== e.type) {
              if ("keyframes" === e.type) return e.rule = Object.fromEntries(Object.entries(e.rule).map(e => {
                var [t, r] = e;
                return [t, this.transformVars(this.transformProperties(r))]
              })), void this.keyframesRules.push(e);
              if (this.currConditionalRuleset = new le, "layer" === e.type) {
                var t = "@layer ".concat(e.name);
                this.addLayer([t])
              } else {
                var r = ie(e.rule, me);
                this.addRule({
                  selector: e.selector,
                  rule: r
                }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformStartingStyle(e, e.rule["@starting-style"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
              }
              this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
            } else this.propertyRules.push(e);
          else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var r = this.transformVars(this.transformProperties(e.rule)),
            a = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var o = t[t.length - 1],
            n = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: a,
            rule: r
          }, o, n)
        }
        addRule(e) {
          var t = this.transformVars(this.transformProperties(e.rule)),
            r = this.transformSelector(e.selector);
          this.rules.push({
            selector: r,
            rule: t
          })
        }
        addLayer(e) {
          var t = e.join(" - ");
          this.layers.set(t, e)
        }
        transformProperties(e) {
          return this.transformContent(this.pixelifyProperties(e))
        }
        pixelifyProperties(e) {
          return ne(e, (t, r) => {
            "number" != typeof t || 0 === t || ye[r] || (e[r] = "".concat(t, "px"))
          }), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, r = oe(e, ge);
          return t ? ae(ae({}, function(e, t) {
            var r = {};
            for (var a in e) r[t(e[a], a)] = e[a];
            return r
          }(t, (e, t) => (0, i.Tm)(t))), r) : r
        }
        transformContent(e) {
          var {
            content: t
          } = e, r = oe(e, ve);
          return void 0 === t ? r : ae({
            content: (Array.isArray(t) ? t : [t]).map(e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"'))
          }, r)
        }
        transformClassname(e) {
          return ".".concat(s()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            r = function(e) {
              t = t.replace(o, () => (function() {
                (() => {
                  if (d.length < 1) throw new Error("No adapter configured");
                  return d[d.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e))
            };
          for (var {
              identifier: a,
              regex: o
            }
            of this.composedClassLists) r(a);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var n = this.localClassNamesSearch.search(t), i = t.length, l = n.length - 1; l >= 0; l--) {
            var [s, [c]] = n[l], f = s - c.length + 1;
            i <= s || (i = f, "." !== t[f - 1] && (t = be(t, f, s + 1, this.transformClassname(c))))
          }
          return t
        }
        transformSelectors(e, t, r) {
          ne(t.selectors, (t, a) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var o = this.transformSelector(a.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var r, a = () => {
                var r = new RegExp(".".concat(s()(t, {
                  isIdentifier: !0
                }).replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(r, "&")
              };
              try {
                r = C(e)
              } catch (e) {
                throw new Error("Invalid selector: ".concat(a()), {
                  cause: e
                })
              }
              r.forEach(e => {
                try {
                  for (var r = e.length - 1; r >= -1; r--) {
                    if (!e[r]) throw new Error;
                    var o = e[r];
                    if ("child" === o.type || "parent" === o.type || "sibling" === o.type || "adjacent" === o.type || "descendant" === o.type) throw new Error;
                    if ("attribute" === o.type && "class" === o.name && o.value === t) return
                  }
                } catch (e) {
                  throw new Error(_(j || (j = u(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), a(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"), {
                    cause: e
                  })
                }
              })
            })(o, e.selector);
            var n = {
              selector: o,
              rule: ie(t, me)
            };
            r ? this.addConditionalRule(n, r) : this.addRule(n);
            var i = {
              type: "selector",
              selector: o,
              rule: t
            };
            this.transformLayer(i, t["@layer"], r), this.transformSupports(i, t["@supports"], r), this.transformMedia(i, t["@media"], r), this.transformContainer(i, t["@container"], r), this.transformStartingStyle(i, t["@starting-style"], r)
          })
        }
        transformMedia(e, t) {
          var r, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [o, n] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(a, Object.keys(t).map(e => "@media ".concat(e))), Object.entries(t))) {
              var i = "@media ".concat(o);
              he(i);
              var l = [...a, i];
              this.addConditionalRule({
                selector: e.selector,
                rule: ie(n, me)
              }, l), "local" === e.type && (this.transformSimplePseudos(e, n, l), this.transformSelectors(e, n, l)), this.transformLayer(e, n["@layer"], l), this.transformSupports(e, n["@supports"], l), this.transformContainer(e, n["@container"], l), this.transformStartingStyle(e, n["@starting-style"], l)
            }
        }
        transformContainer(e, t) {
          var r, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(a, Object.keys(t).map(e => "@container ".concat(e))), ne(t, (t, r) => {
            var o = "@container ".concat(r),
              n = [...a, o];
            this.addConditionalRule({
              selector: e.selector,
              rule: ie(t, me)
            }, n), "local" === e.type && (this.transformSimplePseudos(e, t, n), this.transformSelectors(e, t, n)), this.transformLayer(e, t["@layer"], n), this.transformSupports(e, t["@supports"], n), this.transformMedia(e, t["@media"], n), this.transformStartingStyle(e, t["@starting-style"], n)
          }))
        }
        transformLayer(e, t) {
          var r, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(a, Object.keys(t).map(e => "@layer ".concat(e))), ne(t, (t, r) => {
            var o = [...a, "@layer ".concat(r)];
            this.addLayer(o), this.addConditionalRule({
              selector: e.selector,
              rule: ie(t, me)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformMedia(e, t["@media"], o), this.transformSupports(e, t["@supports"], o), this.transformContainer(e, t["@container"], o), this.transformStartingStyle(e, t["@starting-style"], o)
          }))
        }
        transformSupports(e, t) {
          var r, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(a, Object.keys(t).map(e => "@supports ".concat(e))), ne(t, (t, r) => {
            var o = [...a, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: ie(t, me)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformMedia(e, t["@media"], o), this.transformContainer(e, t["@container"], o), this.transformStartingStyle(e, t["@starting-style"], o)
          }))
        }
        transformSimplePseudos(e, t, r) {
          for (var a of Object.keys(t))
            if (fe[a]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(a),
                rule: t[a]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(e.selector).concat(a),
                rule: t[a]
              })
            }
        }
        transformStartingStyle(e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t) {
            var a, o = Object.keys(t).find(e => e.startsWith("@"));
            if (o) throw new Error('Nested at-rules (e.g. "'.concat(o, '") are not allowed inside @starting-style.'));
            null === (a = this.currConditionalRuleset) || void 0 === a || a.addConditionPrecedence(r, ["@starting-style"]);
            var n = [...r, "@starting-style"];
            this.addConditionalRule({
              selector: e.selector,
              rule: ie(t, me)
            }, n), "local" === e.type && (this.transformSimplePseudos(e, t, n), this.transformSelectors(e, t, n))
          }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(ke({
            "@font-face": t
          }));
          for (var r of this.propertyRules) e.push(ke({
            ["@property ".concat(r.name)]: r.rule
          }));
          for (var a of this.keyframesRules) e.push(ke({
            ["@keyframes ".concat(a.name)]: a.rule
          }));
          for (var o of this.layers.values()) {
            var [n, ...i] = o.reverse(), l = {
              [n]: pe
            };
            for (var s of i) l = {
              [s]: l
            };
            e.push(ke(l))
          }
          for (var c of this.rules) e.push(ke({
            [c.selector]: c.rule
          }));
          for (var d of this.conditionalRulesets)
            for (var f of d.renderToArray()) e.push(ke(f));
          return e.filter(Boolean)
        }
      }

      function ke(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          a = function(a) {
            var o, n = e[a];
            n && Array.isArray(n) ? r.push(...n.map(e => ke({
              [a]: e
            }, t))) : n && "object" == typeof n ? 0 === Object.keys(n).length || r.push("".concat(t).concat(a, " {\n").concat(ke(n, t + "  "), "\n").concat(t, "}")) : n === pe ? r.push("".concat(t).concat(a, ";")) : r.push("".concat(t).concat(a.startsWith("--") ? a : (o = a, o.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(n, ";"))
          };
        for (var o of Object.keys(e)) a(o);
        return r.join("\n")
      }
      var Ce = r(42649);
      const Se = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        Oe = new Set,
        Ae = "object" == typeof Ce && Ce ? Ce : {},
        xe = (e, t, r, a) => {
          "function" == typeof Ae.emitWarning ? Ae.emitWarning(e, t, r, a) : console.error(`[${r}] ${t}: ${e}`)
        };
      let _e = globalThis.AbortController,
        Le = globalThis.AbortSignal;
      if (void 0 === _e) {
        Le = class {
          onabort;
          _onabort = [];
          reason;
          aborted = !1;
          addEventListener(e, t) {
            this._onabort.push(t)
          }
        }, _e = class {
          constructor() {
            t()
          }
          signal = new Le;
          abort(e) {
            if (!this.signal.aborted) {
              this.signal.reason = e, this.signal.aborted = !0;
              for (const t of this.signal._onabort) t(e);
              this.signal.onabort?.(e)
            }
          }
        };
        let e = "1" !== Ae.env?.LRU_CACHE_IGNORE_AC_WARNING;
        const t = () => {
          e && (e = !1, xe("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
        }
      }
      Symbol("type");
      const ze = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        Ee = e => ze(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? Te : null : null;
      class Te extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class je {
        heap;
        length;
        static #e = !1;
        static create(e) {
          const t = Ee(e);
          if (!t) return [];
          je.#e = !0;
          const r = new je(e, t);
          return je.#e = !1, r
        }
        constructor(e, t) {
          if (!je.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class Fe {
        #t;
        #r;
        #a;
        #o;
        #n;
        #i;
        ttl;
        ttlResolution;
        ttlAutopurge;
        updateAgeOnGet;
        updateAgeOnHas;
        allowStale;
        noDisposeOnSet;
        noUpdateTTL;
        maxEntrySize;
        sizeCalculation;
        noDeleteOnFetchRejection;
        noDeleteOnStaleGet;
        allowStaleOnFetchAbort;
        allowStaleOnFetchRejection;
        ignoreFetchAbort;
        #l;
        #s;
        #c;
        #d;
        #f;
        #u;
        #h;
        #g;
        #v;
        #p;
        #y;
        #b;
        #m;
        #w;
        #k;
        #C;
        #S;
        static unsafeExposeInternals(e) {
          return {
            starts: e.#m,
            ttls: e.#w,
            sizes: e.#b,
            keyMap: e.#c,
            keyList: e.#d,
            valList: e.#f,
            next: e.#u,
            prev: e.#h,
            get head() {
              return e.#g
            },
            get tail() {
              return e.#v
            },
            free: e.#p,
            isBackgroundFetch: t => e.#O(t),
            backgroundFetch: (t, r, a, o) => e.#A(t, r, a, o),
            moveToTail: t => e.#x(t),
            indexes: t => e.#_(t),
            rindexes: t => e.#L(t),
            isStale: t => e.#z(t)
          }
        }
        get max() {
          return this.#t
        }
        get maxSize() {
          return this.#r
        }
        get calculatedSize() {
          return this.#s
        }
        get size() {
          return this.#l
        }
        get fetchMethod() {
          return this.#n
        }
        get memoMethod() {
          return this.#i
        }
        get dispose() {
          return this.#a
        }
        get disposeAfter() {
          return this.#o
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: r,
            ttlResolution: a = 1,
            ttlAutopurge: o,
            updateAgeOnGet: n,
            updateAgeOnHas: i,
            allowStale: l,
            dispose: s,
            disposeAfter: c,
            noDisposeOnSet: d,
            noUpdateTTL: f,
            maxSize: u = 0,
            maxEntrySize: h = 0,
            sizeCalculation: g,
            fetchMethod: v,
            memoMethod: p,
            noDeleteOnFetchRejection: y,
            noDeleteOnStaleGet: b,
            allowStaleOnFetchRejection: m,
            allowStaleOnFetchAbort: w,
            ignoreFetchAbort: k
          } = e;
          if (0 !== t && !ze(t)) throw new TypeError("max option must be a nonnegative integer");
          const C = t ? Ee(t) : Array;
          if (!C) throw new Error("invalid max value: " + t);
          if (this.#t = t, this.#r = u, this.maxEntrySize = h || this.#r, this.sizeCalculation = g, this.sizeCalculation) {
            if (!this.#r && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== p && "function" != typeof p) throw new TypeError("memoMethod must be a function if defined");
          if (this.#i = p, void 0 !== v && "function" != typeof v) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#n = v, this.#C = !!v, this.#c = new Map, this.#d = new Array(t).fill(void 0), this.#f = new Array(t).fill(void 0), this.#u = new C(t), this.#h = new C(t), this.#g = 0, this.#v = 0, this.#p = je.create(t), this.#l = 0, this.#s = 0, "function" == typeof s && (this.#a = s), "function" == typeof c ? (this.#o = c, this.#y = []) : (this.#o = void 0, this.#y = void 0), this.#k = !!this.#a, this.#S = !!this.#o, this.noDisposeOnSet = !!d, this.noUpdateTTL = !!f, this.noDeleteOnFetchRejection = !!y, this.allowStaleOnFetchRejection = !!m, this.allowStaleOnFetchAbort = !!w, this.ignoreFetchAbort = !!k, 0 !== this.maxEntrySize) {
            if (0 !== this.#r && !ze(this.#r)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!ze(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#E()
          }
          if (this.allowStale = !!l, this.noDeleteOnStaleGet = !!b, this.updateAgeOnGet = !!n, this.updateAgeOnHas = !!i, this.ttlResolution = ze(a) || 0 === a ? a : 1, this.ttlAutopurge = !!o, this.ttl = r || 0, this.ttl) {
            if (!ze(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#T()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#r) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#r) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !Oe.has(e))(e) && (Oe.add(e), xe("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, Fe))
          }
        }
        getRemainingTTL(e) {
          return this.#c.has(e) ? 1 / 0 : 0
        }
        #T() {
          const e = new Te(this.#t),
            t = new Te(this.#t);
          this.#w = e, this.#m = t, this.#j = (r, a, o = Se.now()) => {
            if (t[r] = 0 !== a ? o : 0, e[r] = a, 0 !== a && this.ttlAutopurge) {
              const e = setTimeout(() => {
                this.#z(r) && this.#F(this.#d[r], "expire")
              }, a + 1);
              e.unref && e.unref()
            }
          }, this.#q = r => {
            t[r] = 0 !== e[r] ? Se.now() : 0
          }, this.#R = (o, n) => {
            if (e[n]) {
              const i = e[n],
                l = t[n];
              if (!i || !l) return;
              o.ttl = i, o.start = l, o.now = r || a();
              const s = o.now - l;
              o.remainingTTL = i - s
            }
          };
          let r = 0;
          const a = () => {
            const e = Se.now();
            if (this.ttlResolution > 0) {
              r = e;
              const t = setTimeout(() => r = 0, this.ttlResolution);
              t.unref && t.unref()
            }
            return e
          };
          this.getRemainingTTL = o => {
            const n = this.#c.get(o);
            if (void 0 === n) return 0;
            const i = e[n],
              l = t[n];
            return i && l ? i - ((r || a()) - l) : 1 / 0
          }, this.#z = o => {
            const n = t[o],
              i = e[o];
            return !!i && !!n && (r || a()) - n > i
          }
        }
        #q = () => {};
        #R = () => {};
        #j = () => {};
        #z = () => !1;
        #E() {
          const e = new Te(this.#t);
          this.#s = 0, this.#b = e, this.#M = t => {
            this.#s -= e[t], e[t] = 0
          }, this.#P = (e, t, r, a) => {
            if (this.#O(t)) return 0;
            if (!ze(r)) {
              if (!a) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
              if ("function" != typeof a) throw new TypeError("sizeCalculation must be a function");
              if (r = a(t, e), !ze(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
            }
            return r
          }, this.#D = (t, r, a) => {
            if (e[t] = r, this.#r) {
              const r = this.#r - e[t];
              for (; this.#s > r;) this.#I(!0)
            }
            this.#s += e[t], a && (a.entrySize = r, a.totalCalculatedSize = this.#s)
          }
        }
        #M = e => {};
        #D = (e, t, r) => {};
        #P = (e, t, r, a) => {
          if (r || a) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };* #_({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#l)
            for (let t = this.#v; this.#N(t) && (!e && this.#z(t) || (yield t), t !== this.#g);) t = this.#h[t]
        }* #L({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#l)
            for (let t = this.#g; this.#N(t) && (!e && this.#z(t) || (yield t), t !== this.#v);) t = this.#u[t]
        }
        #N(e) {
          return void 0 !== e && this.#c.get(this.#d[e]) === e
        }* entries() {
          for (const e of this.#_()) void 0 === this.#f[e] || void 0 === this.#d[e] || this.#O(this.#f[e]) || (yield [this.#d[e], this.#f[e]])
        }* rentries() {
          for (const e of this.#L()) void 0 === this.#f[e] || void 0 === this.#d[e] || this.#O(this.#f[e]) || (yield [this.#d[e], this.#f[e]])
        }* keys() {
          for (const e of this.#_()) {
            const t = this.#d[e];
            void 0 === t || this.#O(this.#f[e]) || (yield t)
          }
        }* rkeys() {
          for (const e of this.#L()) {
            const t = this.#d[e];
            void 0 === t || this.#O(this.#f[e]) || (yield t)
          }
        }* values() {
          for (const e of this.#_()) void 0 === this.#f[e] || this.#O(this.#f[e]) || (yield this.#f[e])
        }* rvalues() {
          for (const e of this.#L()) void 0 === this.#f[e] || this.#O(this.#f[e]) || (yield this.#f[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e, t = {}) {
          for (const r of this.#_()) {
            const a = this.#f[r],
              o = this.#O(a) ? a.__staleWhileFetching : a;
            if (void 0 !== o && e(o, this.#d[r], this)) return this.get(this.#d[r], t)
          }
        }
        forEach(e, t = this) {
          for (const r of this.#_()) {
            const a = this.#f[r],
              o = this.#O(a) ? a.__staleWhileFetching : a;
            void 0 !== o && e.call(t, o, this.#d[r], this)
          }
        }
        rforEach(e, t = this) {
          for (const r of this.#L()) {
            const a = this.#f[r],
              o = this.#O(a) ? a.__staleWhileFetching : a;
            void 0 !== o && e.call(t, o, this.#d[r], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (const t of this.#L({
              allowStale: !0
            })) this.#z(t) && (this.#F(this.#d[t], "expire"), e = !0);
          return e
        }
        info(e) {
          const t = this.#c.get(e);
          if (void 0 === t) return;
          const r = this.#f[t],
            a = this.#O(r) ? r.__staleWhileFetching : r;
          if (void 0 === a) return;
          const o = {
            value: a
          };
          if (this.#w && this.#m) {
            const e = this.#w[t],
              r = this.#m[t];
            if (e && r) {
              const t = e - (Se.now() - r);
              o.ttl = t, o.start = Date.now()
            }
          }
          return this.#b && (o.size = this.#b[t]), o
        }
        dump() {
          const e = [];
          for (const t of this.#_({
              allowStale: !0
            })) {
            const r = this.#d[t],
              a = this.#f[t],
              o = this.#O(a) ? a.__staleWhileFetching : a;
            if (void 0 === o || void 0 === r) continue;
            const n = {
              value: o
            };
            if (this.#w && this.#m) {
              n.ttl = this.#w[t];
              const e = Se.now() - this.#m[t];
              n.start = Math.floor(Date.now() - e)
            }
            this.#b && (n.size = this.#b[t]), e.unshift([r, n])
          }
          return e
        }
        load(e) {
          this.clear();
          for (const [t, r] of e) {
            if (r.start) {
              const e = Date.now() - r.start;
              r.start = Se.now() - e
            }
            this.set(t, r.value, r)
          }
        }
        set(e, t, r = {}) {
          if (void 0 === t) return this.delete(e), this;
          const {
            ttl: a = this.ttl,
            start: o,
            noDisposeOnSet: n = this.noDisposeOnSet,
            sizeCalculation: i = this.sizeCalculation,
            status: l
          } = r;
          let {
            noUpdateTTL: s = this.noUpdateTTL
          } = r;
          const c = this.#P(e, t, r.size || 0, i);
          if (this.maxEntrySize && c > this.maxEntrySize) return l && (l.set = "miss", l.maxEntrySizeExceeded = !0), this.#F(e, "set"), this;
          let d = 0 === this.#l ? void 0 : this.#c.get(e);
          if (void 0 === d) d = 0 === this.#l ? this.#v : 0 !== this.#p.length ? this.#p.pop() : this.#l === this.#t ? this.#I(!1) : this.#l, this.#d[d] = e, this.#f[d] = t, this.#c.set(e, d), this.#u[this.#v] = d, this.#h[d] = this.#v, this.#v = d, this.#l++, this.#D(d, c, l), l && (l.set = "add"), s = !1;
          else {
            this.#x(d);
            const r = this.#f[d];
            if (t !== r) {
              if (this.#C && this.#O(r)) {
                r.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = r;
                void 0 === t || n || (this.#k && this.#a?.(t, e, "set"), this.#S && this.#y?.push([t, e, "set"]))
              } else n || (this.#k && this.#a?.(r, e, "set"), this.#S && this.#y?.push([r, e, "set"]));
              if (this.#M(d), this.#D(d, c, l), this.#f[d] = t, l) {
                l.set = "replace";
                const e = r && this.#O(r) ? r.__staleWhileFetching : r;
                void 0 !== e && (l.oldValue = e)
              }
            } else l && (l.set = "update")
          }
          if (0 === a || this.#w || this.#T(), this.#w && (s || this.#j(d, a, o), l && this.#R(l, d)), !n && this.#S && this.#y) {
            const e = this.#y;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
          return this
        }
        pop() {
          try {
            for (; this.#l;) {
              const e = this.#f[this.#g];
              if (this.#I(!0), this.#O(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#S && this.#y) {
              const e = this.#y;
              let t;
              for (; t = e?.shift();) this.#o?.(...t)
            }
          }
        }
        #I(e) {
          const t = this.#g,
            r = this.#d[t],
            a = this.#f[t];
          return this.#C && this.#O(a) ? a.__abortController.abort(new Error("evicted")) : (this.#k || this.#S) && (this.#k && this.#a?.(a, r, "evict"), this.#S && this.#y?.push([a, r, "evict"])), this.#M(t), e && (this.#d[t] = void 0, this.#f[t] = void 0, this.#p.push(t)), 1 === this.#l ? (this.#g = this.#v = 0, this.#p.length = 0) : this.#g = this.#u[t], this.#c.delete(r), this.#l--, t
        }
        has(e, t = {}) {
          const {
            updateAgeOnHas: r = this.updateAgeOnHas,
            status: a
          } = t, o = this.#c.get(e);
          if (void 0 !== o) {
            const e = this.#f[o];
            if (this.#O(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#z(o)) return r && this.#q(o), a && (a.has = "hit", this.#R(a, o)), !0;
            a && (a.has = "stale", this.#R(a, o))
          } else a && (a.has = "miss");
          return !1
        }
        peek(e, t = {}) {
          const {
            allowStale: r = this.allowStale
          } = t, a = this.#c.get(e);
          if (void 0 === a || !r && this.#z(a)) return;
          const o = this.#f[a];
          return this.#O(o) ? o.__staleWhileFetching : o
        }
        #A(e, t, r, a) {
          const o = void 0 === t ? void 0 : this.#f[t];
          if (this.#O(o)) return o;
          const n = new _e,
            {
              signal: i
            } = r;
          i?.addEventListener("abort", () => n.abort(i.reason), {
            signal: n.signal
          });
          const l = {
              signal: n.signal,
              options: r,
              context: a
            },
            s = (a, o = !1) => {
              const {
                aborted: i
              } = n.signal, s = r.ignoreFetchAbort && void 0 !== a;
              if (r.status && (i && !o ? (r.status.fetchAborted = !0, r.status.fetchError = n.signal.reason, s && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), i && !s && !o) return c(n.signal.reason);
              const f = d;
              return this.#f[t] === d && (void 0 === a ? f.__staleWhileFetching ? this.#f[t] = f.__staleWhileFetching : this.#F(e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, a, l.options))), a
            },
            c = a => {
              const {
                aborted: o
              } = n.signal, i = o && r.allowStaleOnFetchAbort, l = i || r.allowStaleOnFetchRejection, s = l || r.noDeleteOnFetchRejection, c = d;
              if (this.#f[t] === d && (s && void 0 !== c.__staleWhileFetching ? i || (this.#f[t] = c.__staleWhileFetching) : this.#F(e, "fetch")), l) return r.status && void 0 !== c.__staleWhileFetching && (r.status.returnedStale = !0), c.__staleWhileFetching;
              if (c.__returned === c) throw a
            };
          r.status && (r.status.fetchDispatched = !0);
          const d = new Promise((t, a) => {
              const i = this.#n?.(e, o, l);
              i && i instanceof Promise && i.then(e => t(void 0 === e ? void 0 : e), a), n.signal.addEventListener("abort", () => {
                r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = e => s(e, !0)))
              })
            }).then(s, e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), c(e))),
            f = Object.assign(d, {
              __abortController: n,
              __staleWhileFetching: o,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, f, {
            ...l.options,
            status: void 0
          }), t = this.#c.get(e)) : this.#f[t] = f, f
        }
        #O(e) {
          if (!this.#C) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof _e
        }
        async fetch(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: a = this.updateAgeOnGet,
            noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
            ttl: n = this.ttl,
            noDisposeOnSet: i = this.noDisposeOnSet,
            size: l = 0,
            sizeCalculation: s = this.sizeCalculation,
            noUpdateTTL: c = this.noUpdateTTL,
            noDeleteOnFetchRejection: d = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: f = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: u = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: h = this.allowStaleOnFetchAbort,
            context: g,
            forceRefresh: v = !1,
            status: p,
            signal: y
          } = t;
          if (!this.#C) return p && (p.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: a,
            noDeleteOnStaleGet: o,
            status: p
          });
          const b = {
            allowStale: r,
            updateAgeOnGet: a,
            noDeleteOnStaleGet: o,
            ttl: n,
            noDisposeOnSet: i,
            size: l,
            sizeCalculation: s,
            noUpdateTTL: c,
            noDeleteOnFetchRejection: d,
            allowStaleOnFetchRejection: f,
            allowStaleOnFetchAbort: h,
            ignoreFetchAbort: u,
            status: p,
            signal: y
          };
          let m = this.#c.get(e);
          if (void 0 === m) {
            p && (p.fetch = "miss");
            const t = this.#A(e, m, b, g);
            return t.__returned = t
          } {
            const t = this.#f[m];
            if (this.#O(t)) {
              const e = r && void 0 !== t.__staleWhileFetching;
              return p && (p.fetch = "inflight", e && (p.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const o = this.#z(m);
            if (!v && !o) return p && (p.fetch = "hit"), this.#x(m), a && this.#q(m), p && this.#R(p, m), t;
            const n = this.#A(e, m, b, g),
              i = void 0 !== n.__staleWhileFetching && r;
            return p && (p.fetch = o ? "stale" : "refresh", i && o && (p.returnedStale = !0)), i ? n.__staleWhileFetching : n.__returned = n
          }
        }
        async forceFetch(e, t = {}) {
          const r = await this.fetch(e, t);
          if (void 0 === r) throw new Error("fetch() returned undefined");
          return r
        }
        memo(e, t = {}) {
          const r = this.#i;
          if (!r) throw new Error("no memoMethod provided to constructor");
          const {
            context: a,
            forceRefresh: o,
            ...n
          } = t, i = this.get(e, n);
          if (!o && void 0 !== i) return i;
          const l = r(e, i, {
            options: n,
            context: a
          });
          return this.set(e, l, n), l
        }
        get(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: a = this.updateAgeOnGet,
            noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
            status: n
          } = t, i = this.#c.get(e);
          if (void 0 !== i) {
            const t = this.#f[i],
              l = this.#O(t);
            return n && this.#R(n, i), this.#z(i) ? (n && (n.get = "stale"), l ? (n && r && void 0 !== t.__staleWhileFetching && (n.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (o || this.#F(e, "expire"), n && r && (n.returnedStale = !0), r ? t : void 0)) : (n && (n.get = "hit"), l ? t.__staleWhileFetching : (this.#x(i), a && this.#q(i), t))
          }
          n && (n.get = "miss")
        }
        #B(e, t) {
          this.#h[t] = e, this.#u[e] = t
        }
        #x(e) {
          e !== this.#v && (e === this.#g ? this.#g = this.#u[e] : this.#B(this.#h[e], this.#u[e]), this.#B(this.#v, e), this.#v = e)
        }
        delete(e) {
          return this.#F(e, "delete")
        }
        #F(e, t) {
          let r = !1;
          if (0 !== this.#l) {
            const a = this.#c.get(e);
            if (void 0 !== a)
              if (r = !0, 1 === this.#l) this.#W(t);
              else {
                this.#M(a);
                const r = this.#f[a];
                if (this.#O(r) ? r.__abortController.abort(new Error("deleted")) : (this.#k || this.#S) && (this.#k && this.#a?.(r, e, t), this.#S && this.#y?.push([r, e, t])), this.#c.delete(e), this.#d[a] = void 0, this.#f[a] = void 0, a === this.#v) this.#v = this.#h[a];
                else if (a === this.#g) this.#g = this.#u[a];
                else {
                  const e = this.#h[a];
                  this.#u[e] = this.#u[a];
                  const t = this.#u[a];
                  this.#h[t] = this.#h[a]
                }
                this.#l--, this.#p.push(a)
              }
          }
          if (this.#S && this.#y?.length) {
            const e = this.#y;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
          return r
        }
        clear() {
          return this.#W("delete")
        }
        #W(e) {
          for (const t of this.#L({
              allowStale: !0
            })) {
            const r = this.#f[t];
            if (this.#O(r)) r.__abortController.abort(new Error("deleted"));
            else {
              const a = this.#d[t];
              this.#k && this.#a?.(r, a, e), this.#S && this.#y?.push([r, a, e])
            }
          }
          if (this.#c.clear(), this.#f.fill(void 0), this.#d.fill(void 0), this.#w && this.#m && (this.#w.fill(0), this.#m.fill(0)), this.#b && this.#b.fill(0), this.#g = 0, this.#v = 0, this.#p.length = 0, this.#s = 0, this.#l = 0, this.#S && this.#y) {
            const e = this.#y;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
        }
      }
      r(79465);
      var qe = new Set,
        Re = [],
        Me = [];
      f || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        f = !0, d.push(e)
      })({
        appendCss: e => {
          Me.push(e)
        },
        registerClassName: e => {
          qe.add(e)
        },
        registerComposition: e => {
          Re.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: r,
              composedClassLists: a
            } = e, o = new we(t, a);
            for (var n of r) o.processCssObj(n);
            return o.toCss()
          }({
            localClassNames: Array.from(qe),
            composedClassLists: Re,
            cssObjs: Me
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: r
            } = e, a = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, o = n[a];
            if (!o) {
              var i = document.createElement("style");
              t.packageName && i.setAttribute("data-package", t.packageName), i.setAttribute("data-file", t.filePath), i.setAttribute("type", "text/css"), o = n[a] = i, document.head.appendChild(i)
            }
            o.innerHTML = r
          })({
            fileScope: e,
            css: t
          }), Me = []
        },
        getIdentOption: () => "short"
      });
      new Fe({
        max: 500
      })
    },
    93715: (e, t, r) => {
      r.d(t, {
        DI: () => o,
        Tm: () => i,
        LU: () => n
      });
      var a = r(23644);

      function o(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var o = e;
          (0, a.Bx)(t, (e, t) => {
            if (null != e) {
              var n = (0, a.Jt)(o, t);
              r[(0, a.Tm)(n)] = String(e)
            }
          })
        } else {
          var n = e;
          for (var i in n) {
            var l = n[i];
            null != l && (r[(0, a.Tm)(i)] = l)
          }
        }
        return Object.defineProperty(r, "toString", {
          value: function() {
            return Object.keys(this).map(e => "".concat(e, ":").concat(this[e])).join(";")
          },
          writable: !1
        }), r
      }
      r(84735);
      var n = {
        global: {
          color: {
            grey: {
              static: {
                25: "var(--foundry-global-color-grey-static-25-05dae190)",
                50: "var(--foundry-global-color-grey-static-50-767699a7)",
                75: "var(--foundry-global-color-grey-static-75-a2172132)",
                100: "var(--foundry-global-color-grey-static-100-01811cdb)",
                200: "var(--foundry-global-color-grey-static-200-8230761c)",
                300: "var(--foundry-global-color-grey-static-300-60d2d1b8)",
                400: "var(--foundry-global-color-grey-static-400-b9847fcb)",
                500: "var(--foundry-global-color-grey-static-500-c92b4dd8)",
                600: "var(--foundry-global-color-grey-static-600-048e9067)",
                700: "var(--foundry-global-color-grey-static-700-6ebcd800)",
                800: "var(--foundry-global-color-grey-static-800-35f77231)",
                900: "var(--foundry-global-color-grey-static-900-a85ec23d)"
              },
              adaptive: {
                25: "var(--foundry-global-color-grey-adaptive-25-4181979c)",
                50: "var(--foundry-global-color-grey-adaptive-50-2026f5f9)",
                75: "var(--foundry-global-color-grey-adaptive-75-e832421c)",
                100: "var(--foundry-global-color-grey-adaptive-100-ed36bf65)",
                200: "var(--foundry-global-color-grey-adaptive-200-fb12d031)",
                300: "var(--foundry-global-color-grey-adaptive-300-02700b85)",
                400: "var(--foundry-global-color-grey-adaptive-400-54ccd69e)",
                500: "var(--foundry-global-color-grey-adaptive-500-ddc3fb78)",
                600: "var(--foundry-global-color-grey-adaptive-600-e8d9db01)",
                700: "var(--foundry-global-color-grey-adaptive-700-e3418aa4)",
                800: "var(--foundry-global-color-grey-adaptive-800-59c03dd7)",
                900: "var(--foundry-global-color-grey-adaptive-900-bbecd7df)",
                1e3: "var(--foundry-global-color-grey-adaptive-1000-020dfb1f)"
              }
            },
            red: {
              static: {
                100: "var(--foundry-global-color-red-static-100-5234bf51)",
                200: "var(--foundry-global-color-red-static-200-9b555022)",
                300: "var(--foundry-global-color-red-static-300-6ef42061)",
                400: "var(--foundry-global-color-red-static-400-bd31684b)",
                500: "var(--foundry-global-color-red-static-500-b89c22c5)",
                600: "var(--foundry-global-color-red-static-600-ed4f7808)",
                700: "var(--foundry-global-color-red-static-700-20c326c5)",
                800: "var(--foundry-global-color-red-static-800-60c90a7b)",
                900: "var(--foundry-global-color-red-static-900-55f69265)",
                1e3: "var(--foundry-global-color-red-static-1000-12c1e6bb)",
                1100: "var(--foundry-global-color-red-static-1100-284ef4c0)",
                1200: "var(--foundry-global-color-red-static-1200-5d3f7911)",
                1300: "var(--foundry-global-color-red-static-1300-43fd11f8)",
                1400: "var(--foundry-global-color-red-static-1400-dff9f9a5)"
              },
              adaptive: {
                100: "var(--foundry-global-color-red-adaptive-100-9f218b31)",
                200: "var(--foundry-global-color-red-adaptive-200-b287e195)",
                300: "var(--foundry-global-color-red-adaptive-300-3513afa6)",
                400: "var(--foundry-global-color-red-adaptive-400-2e43b523)",
                500: "var(--foundry-global-color-red-adaptive-500-d198b061)",
                600: "var(--foundry-global-color-red-adaptive-600-7da276f6)",
                700: "var(--foundry-global-color-red-adaptive-700-6f634812)",
                800: "var(--foundry-global-color-red-adaptive-800-7f423e03)",
                900: "var(--foundry-global-color-red-adaptive-900-43f71e11)",
                1e3: "var(--foundry-global-color-red-adaptive-1000-9f5e2924)",
                1100: "var(--foundry-global-color-red-adaptive-1100-f2f72614)",
                1200: "var(--foundry-global-color-red-adaptive-1200-aef5078c)",
                1300: "var(--foundry-global-color-red-adaptive-1300-3c79c39b)",
                1400: "var(--foundry-global-color-red-adaptive-1400-918ac2c6)"
              }
            },
            yellow: {
              static: {
                100: "var(--foundry-global-color-yellow-static-100-2887d8ce)",
                200: "var(--foundry-global-color-yellow-static-200-1dceac31)",
                300: "var(--foundry-global-color-yellow-static-300-bda8dae5)",
                400: "var(--foundry-global-color-yellow-static-400-e603ca1c)",
                500: "var(--foundry-global-color-yellow-static-500-b9703bbc)",
                600: "var(--foundry-global-color-yellow-static-600-828a39a0)",
                700: "var(--foundry-global-color-yellow-static-700-cb059cba)",
                800: "var(--foundry-global-color-yellow-static-800-e49b6916)",
                900: "var(--foundry-global-color-yellow-static-900-ff35761e)",
                1e3: "var(--foundry-global-color-yellow-static-1000-7c6c4551)",
                1100: "var(--foundry-global-color-yellow-static-1100-2e821a8c)",
                1200: "var(--foundry-global-color-yellow-static-1200-aea00231)",
                1300: "var(--foundry-global-color-yellow-static-1300-7eec7bd0)",
                1400: "var(--foundry-global-color-yellow-static-1400-0ff6b89d)"
              },
              adaptive: {
                100: "var(--foundry-global-color-yellow-adaptive-100-8f09820e)",
                200: "var(--foundry-global-color-yellow-adaptive-200-63c3f5ee)",
                300: "var(--foundry-global-color-yellow-adaptive-300-4deab2f6)",
                400: "var(--foundry-global-color-yellow-adaptive-400-78286ac3)",
                500: "var(--foundry-global-color-yellow-adaptive-500-f0427a70)",
                600: "var(--foundry-global-color-yellow-adaptive-600-3f6d60dc)",
                700: "var(--foundry-global-color-yellow-adaptive-700-959c799c)",
                800: "var(--foundry-global-color-yellow-adaptive-800-099fea86)",
                900: "var(--foundry-global-color-yellow-adaptive-900-9443df02)",
                1e3: "var(--foundry-global-color-yellow-adaptive-1000-abbedd59)",
                1100: "var(--foundry-global-color-yellow-adaptive-1100-ff18d083)",
                1200: "var(--foundry-global-color-yellow-adaptive-1200-4bc40f51)",
                1300: "var(--foundry-global-color-yellow-adaptive-1300-b3a4b5b4)",
                1400: "var(--foundry-global-color-yellow-adaptive-1400-3048335a)"
              }
            },
            green: {
              static: {
                100: "var(--foundry-global-color-green-static-100-753f09df)",
                200: "var(--foundry-global-color-green-static-200-b1b43708)",
                300: "var(--foundry-global-color-green-static-300-d66b3241)",
                400: "var(--foundry-global-color-green-static-400-a93942e5)",
                500: "var(--foundry-global-color-green-static-500-2888e254)",
                600: "var(--foundry-global-color-green-static-600-aebbfb3a)",
                700: "var(--foundry-global-color-green-static-700-89b4ffdc)",
                800: "var(--foundry-global-color-green-static-800-87b9bb4f)",
                900: "var(--foundry-global-color-green-static-900-b42b84da)",
                1e3: "var(--foundry-global-color-green-static-1000-43ecb25e)",
                1100: "var(--foundry-global-color-green-static-1100-d4597796)",
                1200: "var(--foundry-global-color-green-static-1200-a4dad299)",
                1300: "var(--foundry-global-color-green-static-1300-7861b376)",
                1400: "var(--foundry-global-color-green-static-1400-4d463023)"
              },
              adaptive: {
                100: "var(--foundry-global-color-green-adaptive-100-e36f5da3)",
                200: "var(--foundry-global-color-green-adaptive-200-e50d247c)",
                300: "var(--foundry-global-color-green-adaptive-300-e74a73b3)",
                400: "var(--foundry-global-color-green-adaptive-400-3e375ae0)",
                500: "var(--foundry-global-color-green-adaptive-500-5eb32af8)",
                600: "var(--foundry-global-color-green-adaptive-600-67db0104)",
                700: "var(--foundry-global-color-green-adaptive-700-b46c5b6e)",
                800: "var(--foundry-global-color-green-adaptive-800-62f4ea41)",
                900: "var(--foundry-global-color-green-adaptive-900-456c793d)",
                1e3: "var(--foundry-global-color-green-adaptive-1000-ebe84050)",
                1100: "var(--foundry-global-color-green-adaptive-1100-7d1a8857)",
                1200: "var(--foundry-global-color-green-adaptive-1200-f5a760b2)",
                1300: "var(--foundry-global-color-green-adaptive-1300-98111c27)",
                1400: "var(--foundry-global-color-green-adaptive-1400-c7a2c7e4)"
              }
            },
            blue: {
              static: {
                100: "var(--foundry-global-color-blue-static-100-e67c243c)",
                200: "var(--foundry-global-color-blue-static-200-d053fe98)",
                300: "var(--foundry-global-color-blue-static-300-564f6a4f)",
                400: "var(--foundry-global-color-blue-static-400-803833dc)",
                500: "var(--foundry-global-color-blue-static-500-029df7ec)",
                600: "var(--foundry-global-color-blue-static-600-55155611)",
                700: "var(--foundry-global-color-blue-static-700-f0d799e8)",
                800: "var(--foundry-global-color-blue-static-800-6d071594)",
                900: "var(--foundry-global-color-blue-static-900-92d3b7cc)",
                1e3: "var(--foundry-global-color-blue-static-1000-cc0c4d91)",
                1100: "var(--foundry-global-color-blue-static-1100-674881c3)",
                1200: "var(--foundry-global-color-blue-static-1200-81ade28f)",
                1300: "var(--foundry-global-color-blue-static-1300-92c235c9)",
                1400: "var(--foundry-global-color-blue-static-1400-1b5feb14)"
              },
              adaptive: {
                100: "var(--foundry-global-color-blue-adaptive-100-b6c46a86)",
                200: "var(--foundry-global-color-blue-adaptive-200-0ccc0c81)",
                300: "var(--foundry-global-color-blue-adaptive-300-e5d80c0e)",
                400: "var(--foundry-global-color-blue-adaptive-400-44a2af0b)",
                500: "var(--foundry-global-color-blue-adaptive-500-64093fc7)",
                600: "var(--foundry-global-color-blue-adaptive-600-41bcc0d5)",
                700: "var(--foundry-global-color-blue-adaptive-700-6f985a0d)",
                800: "var(--foundry-global-color-blue-adaptive-800-c66fae2b)",
                900: "var(--foundry-global-color-blue-adaptive-900-f87fb7ab)",
                1e3: "var(--foundry-global-color-blue-adaptive-1000-129c45a7)",
                1100: "var(--foundry-global-color-blue-adaptive-1100-579d2d7f)",
                1200: "var(--foundry-global-color-blue-adaptive-1200-5b826b61)",
                1300: "var(--foundry-global-color-blue-adaptive-1300-5864a192)",
                1400: "var(--foundry-global-color-blue-adaptive-1400-b9e5f8ab)"
              }
            },
            seafoam: {
              static: {
                100: "var(--foundry-global-color-seafoam-static-100-a401f55d)",
                200: "var(--foundry-global-color-seafoam-static-200-157f98a6)",
                300: "var(--foundry-global-color-seafoam-static-300-f057cb2a)",
                400: "var(--foundry-global-color-seafoam-static-400-5c314058)",
                500: "var(--foundry-global-color-seafoam-static-500-4eba9472)",
                600: "var(--foundry-global-color-seafoam-static-600-bb39e74b)",
                700: "var(--foundry-global-color-seafoam-static-700-97a0e42c)",
                800: "var(--foundry-global-color-seafoam-static-800-c898779d)",
                900: "var(--foundry-global-color-seafoam-static-900-ca1e00fd)",
                1e3: "var(--foundry-global-color-seafoam-static-1000-97b36592)",
                1100: "var(--foundry-global-color-seafoam-static-1100-7a540639)",
                1200: "var(--foundry-global-color-seafoam-static-1200-9d613b2f)",
                1300: "var(--foundry-global-color-seafoam-static-1300-5d82dc91)",
                1400: "var(--foundry-global-color-seafoam-static-1400-c9f1799c)"
              },
              adaptive: {
                100: "var(--foundry-global-color-seafoam-adaptive-100-9fd7898d)",
                200: "var(--foundry-global-color-seafoam-adaptive-200-ad5ea160)",
                300: "var(--foundry-global-color-seafoam-adaptive-300-339db442)",
                400: "var(--foundry-global-color-seafoam-adaptive-400-bacc52ab)",
                500: "var(--foundry-global-color-seafoam-adaptive-500-24d9f0ae)",
                600: "var(--foundry-global-color-seafoam-adaptive-600-28f1d217)",
                700: "var(--foundry-global-color-seafoam-adaptive-700-f8862c98)",
                800: "var(--foundry-global-color-seafoam-adaptive-800-240ff22d)",
                900: "var(--foundry-global-color-seafoam-adaptive-900-30744fa2)",
                1e3: "var(--foundry-global-color-seafoam-adaptive-1000-cecc3b2f)",
                1100: "var(--foundry-global-color-seafoam-adaptive-1100-307fe74e)",
                1200: "var(--foundry-global-color-seafoam-adaptive-1200-1d61b617)",
                1300: "var(--foundry-global-color-seafoam-adaptive-1300-26c82681)",
                1400: "var(--foundry-global-color-seafoam-adaptive-1400-6cf3df35)"
              }
            },
            white: {
              static: {
                5: "var(--foundry-global-color-white-static-5-c4aa496e)",
                10: "var(--foundry-global-color-white-static-10-fc74444e)",
                15: "var(--foundry-global-color-white-static-15-e98f967d)",
                20: "var(--foundry-global-color-white-static-20-6326998e)",
                35: "var(--foundry-global-color-white-static-35-fdd05d92)",
                40: "var(--foundry-global-color-white-static-40-a06b4074)",
                50: "var(--foundry-global-color-white-static-50-195bb728)",
                65: "var(--foundry-global-color-white-static-65-c30f2d6e)",
                80: "var(--foundry-global-color-white-static-80-1525ba22)",
                85: "var(--foundry-global-color-white-static-85-79c7cc6b)",
                90: "var(--foundry-global-color-white-static-90-5959c519)",
                95: "var(--foundry-global-color-white-static-95-becabaec)",
                100: "var(--foundry-global-color-white-static-100-d44db539)"
              }
            },
            black: {
              static: {
                5: "var(--foundry-global-color-black-static-5-5a16f697)",
                10: "var(--foundry-global-color-black-static-10-16a76e5e)",
                15: "var(--foundry-global-color-black-static-15-d198b2a6)",
                20: "var(--foundry-global-color-black-static-20-3ae064df)",
                35: "var(--foundry-global-color-black-static-35-1523cb80)",
                40: "var(--foundry-global-color-black-static-40-32fa6bf3)",
                50: "var(--foundry-global-color-black-static-50-e761096d)",
                65: "var(--foundry-global-color-black-static-65-1c288c8d)",
                80: "var(--foundry-global-color-black-static-80-ceca67af)",
                85: "var(--foundry-global-color-black-static-85-3cb71ba6)",
                90: "var(--foundry-global-color-black-static-90-45219d0a)",
                95: "var(--foundry-global-color-black-static-95-4042e3bb)",
                100: "var(--foundry-global-color-black-static-100-43aea341)"
              }
            },
            alpha: {
              adaptive: {
                5: "var(--foundry-global-color-alpha-adaptive-5-b141acdd)",
                10: "var(--foundry-global-color-alpha-adaptive-10-2f911b2f)",
                15: "var(--foundry-global-color-alpha-adaptive-15-695b3a30)",
                20: "var(--foundry-global-color-alpha-adaptive-20-8e38b04d)",
                35: "var(--foundry-global-color-alpha-adaptive-35-f9b0b74d)",
                40: "var(--foundry-global-color-alpha-adaptive-40-29c77778)",
                50: "var(--foundry-global-color-alpha-adaptive-50-f61afb4a)",
                65: "var(--foundry-global-color-alpha-adaptive-65-5c75d572)",
                80: "var(--foundry-global-color-alpha-adaptive-80-6e56c3f3)",
                85: "var(--foundry-global-color-alpha-adaptive-85-130819b2)",
                90: "var(--foundry-global-color-alpha-adaptive-90-a416f5ef)",
                95: "var(--foundry-global-color-alpha-adaptive-95-68274c65)"
              }
            }
          },
          platformScales: {
            scale: {
              0: "var(--foundry-global-platform-scales-scale-0-0804de50)",
              10: "var(--foundry-global-platform-scales-scale-10-e43007a8)",
              25: "var(--foundry-global-platform-scales-scale-25-6410d0da)",
              33: "var(--foundry-global-platform-scales-scale-33-15ea8cb3)",
              50: "var(--foundry-global-platform-scales-scale-50-ce8d9569)",
              75: "var(--foundry-global-platform-scales-scale-75-e6cf5003)",
              100: "var(--foundry-global-platform-scales-scale-100-d27bfb1e)",
              125: "var(--foundry-global-platform-scales-scale-125-f7e280cb)",
              150: "var(--foundry-global-platform-scales-scale-150-6ca614ed)",
              175: "var(--foundry-global-platform-scales-scale-175-55240242)",
              200: "var(--foundry-global-platform-scales-scale-200-b985b3f2)",
              225: "var(--foundry-global-platform-scales-scale-225-d561439e)",
              250: "var(--foundry-global-platform-scales-scale-250-5ace963d)",
              300: "var(--foundry-global-platform-scales-scale-300-9356406c)",
              350: "var(--foundry-global-platform-scales-scale-350-a2b3bb07)",
              400: "var(--foundry-global-platform-scales-scale-400-25879f98)",
              450: "var(--foundry-global-platform-scales-scale-450-3029ab1a)",
              500: "var(--foundry-global-platform-scales-scale-500-f82c7fa1)",
              550: "var(--foundry-global-platform-scales-scale-550-d38e7e5a)",
              600: "var(--foundry-global-platform-scales-scale-600-396e1774)",
              650: "var(--foundry-global-platform-scales-scale-650-4291ab1c)",
              700: "var(--foundry-global-platform-scales-scale-700-251bd5dc)",
              750: "var(--foundry-global-platform-scales-scale-750-70abde6a)",
              800: "var(--foundry-global-platform-scales-scale-800-3fe8ece7)",
              900: "var(--foundry-global-platform-scales-scale-900-703d3bf4)",
              950: "var(--foundry-global-platform-scales-scale-950-faa06d06)",
              1e3: "var(--foundry-global-platform-scales-scale-1000-43953c90)",
              1100: "var(--foundry-global-platform-scales-scale-1100-6e89015f)",
              1150: "var(--foundry-global-platform-scales-scale-1150-a779c276)",
              1200: "var(--foundry-global-platform-scales-scale-1200-32a4be13)",
              1400: "var(--foundry-global-platform-scales-scale-1400-cfe54919)",
              1600: "var(--foundry-global-platform-scales-scale-1600-54eb9368)",
              1700: "var(--foundry-global-platform-scales-scale-1700-2581e2fc)",
              1800: "var(--foundry-global-platform-scales-scale-1800-2a76d411)",
              2e3: "var(--foundry-global-platform-scales-scale-2000-2558d0f0)",
              2200: "var(--foundry-global-platform-scales-scale-2200-7289d3db)",
              2350: "var(--foundry-global-platform-scales-scale-2350-76168f14)",
              2400: "var(--foundry-global-platform-scales-scale-2400-e83742de)",
              2500: "var(--foundry-global-platform-scales-scale-2500-24cc854f)",
              2750: "var(--foundry-global-platform-scales-scale-2750-217f5509)",
              3e3: "var(--foundry-global-platform-scales-scale-3000-586585a3)",
              3150: "var(--foundry-global-platform-scales-scale-3150-8caf26b3)",
              3350: "var(--foundry-global-platform-scales-scale-3350-9395e22d)",
              3500: "var(--foundry-global-platform-scales-scale-3500-c9791024)",
              3750: "var(--foundry-global-platform-scales-scale-3750-e5864061)",
              4e3: "var(--foundry-global-platform-scales-scale-4000-35294825)",
              4125: "var(--foundry-global-platform-scales-scale-4125-d7f8e5c7)",
              4250: "var(--foundry-global-platform-scales-scale-4250-3f02afdd)",
              4500: "var(--foundry-global-platform-scales-scale-4500-4b7f7b1a)",
              4750: "var(--foundry-global-platform-scales-scale-4750-f39e7cdd)",
              5e3: "var(--foundry-global-platform-scales-scale-5000-fd5d6798)",
              5250: "var(--foundry-global-platform-scales-scale-5250-526fbc6e)",
              5500: "var(--foundry-global-platform-scales-scale-5500-8d4a1c23)",
              5750: "var(--foundry-global-platform-scales-scale-5750-231d0b96)",
              6e3: "var(--foundry-global-platform-scales-scale-6000-48c91d9d)",
              6250: "var(--foundry-global-platform-scales-scale-6250-47fc2cb8)"
            }
          },
          border: {
            radius: {
              0: "var(--foundry-global-border-radius-0-df9394ed)",
              25: "var(--foundry-global-border-radius-25-00f8ef97)",
              50: "var(--foundry-global-border-radius-50-5b3f01bf)",
              100: "var(--foundry-global-border-radius-100-742803b2)",
              150: "var(--foundry-global-border-radius-150-ca109bc3)",
              200: "var(--foundry-global-border-radius-200-ece22bd6)",
              300: "var(--foundry-global-border-radius-300-7c6d4daf)",
              400: "var(--foundry-global-border-radius-400-ddbb88dd)",
              circle: "var(--foundry-global-border-radius-circle-a97600a9)",
              pill: "var(--foundry-global-border-radius-pill-8c8d51e6)"
            },
            width: {
              0: "var(--foundry-global-border-width-0-b149a800)",
              10: "var(--foundry-global-border-width-10-8d34e94d)",
              25: "var(--foundry-global-border-width-25-52cee49a)",
              33: "var(--foundry-global-border-width-33-d4281be2)",
              50: "var(--foundry-global-border-width-50-ed6ae051)"
            }
          },
          spacing: {
            gap: {
              10: "var(--foundry-global-spacing-gap-10-33a1fb65)",
              25: "var(--foundry-global-spacing-gap-25-2a51e690)",
              33: "var(--foundry-global-spacing-gap-33-ab827c04)",
              50: "var(--foundry-global-spacing-gap-50-ae99fc48)",
              75: "var(--foundry-global-spacing-gap-75-397a0da6)",
              100: "var(--foundry-global-spacing-gap-100-05387de1)",
              125: "var(--foundry-global-spacing-gap-125-23231511)",
              150: "var(--foundry-global-spacing-gap-150-7f268a13)",
              175: "var(--foundry-global-spacing-gap-175-d63af5f3)",
              200: "var(--foundry-global-spacing-gap-200-7d922174)",
              225: "var(--foundry-global-spacing-gap-225-b2ca1ee1)",
              250: "var(--foundry-global-spacing-gap-250-ee21f32b)",
              300: "var(--foundry-global-spacing-gap-300-2f9fe0c5)",
              350: "var(--foundry-global-spacing-gap-350-7ac0bb64)",
              400: "var(--foundry-global-spacing-gap-400-f21302a9)",
              450: "var(--foundry-global-spacing-gap-450-08746772)",
              500: "var(--foundry-global-spacing-gap-500-0fe0ec68)",
              550: "var(--foundry-global-spacing-gap-550-aff30058)",
              600: "var(--foundry-global-spacing-gap-600-d02b9116)",
              650: "var(--foundry-global-spacing-gap-650-d67ef995)",
              700: "var(--foundry-global-spacing-gap-700-936963d7)",
              750: "var(--foundry-global-spacing-gap-750-66d6e892)",
              800: "var(--foundry-global-spacing-gap-800-4ee30294)",
              900: "var(--foundry-global-spacing-gap-900-9531b9b6)",
              950: "var(--foundry-global-spacing-gap-950-cf297696)",
              1e3: "var(--foundry-global-spacing-gap-1000-af3eeb0f)",
              1100: "var(--foundry-global-spacing-gap-1100-6d6ab862)",
              1150: "var(--foundry-global-spacing-gap-1150-5e5d766c)",
              1200: "var(--foundry-global-spacing-gap-1200-5eb7c00a)",
              1400: "var(--foundry-global-spacing-gap-1400-302a953d)",
              1600: "var(--foundry-global-spacing-gap-1600-f3e8c303)",
              1700: "var(--foundry-global-spacing-gap-1700-b6c3835e)",
              1800: "var(--foundry-global-spacing-gap-1800-9826a3ad)",
              2e3: "var(--foundry-global-spacing-gap-2000-c24e1178)",
              2200: "var(--foundry-global-spacing-gap-2200-8192be37)",
              2350: "var(--foundry-global-spacing-gap-2350-1cf77686)",
              2400: "var(--foundry-global-spacing-gap-2400-c9462d01)",
              2500: "var(--foundry-global-spacing-gap-2500-442ef530)"
            },
            dimensions: {
              10: "var(--foundry-global-spacing-dimensions-10-7d52ec29)",
              25: "var(--foundry-global-spacing-dimensions-25-eec1a90b)",
              33: "var(--foundry-global-spacing-dimensions-33-9d3ffc33)",
              50: "var(--foundry-global-spacing-dimensions-50-b85610c2)",
              75: "var(--foundry-global-spacing-dimensions-75-8db9e2a0)",
              100: "var(--foundry-global-spacing-dimensions-100-97e13da9)",
              125: "var(--foundry-global-spacing-dimensions-125-ef032ca7)",
              150: "var(--foundry-global-spacing-dimensions-150-ea1fb93c)",
              175: "var(--foundry-global-spacing-dimensions-175-6d1e42fb)",
              200: "var(--foundry-global-spacing-dimensions-200-2fbf5420)",
              225: "var(--foundry-global-spacing-dimensions-225-f91d4d91)",
              250: "var(--foundry-global-spacing-dimensions-250-1db78665)",
              300: "var(--foundry-global-spacing-dimensions-300-8149e8c1)",
              350: "var(--foundry-global-spacing-dimensions-350-1aeb7130)",
              400: "var(--foundry-global-spacing-dimensions-400-b120da78)",
              450: "var(--foundry-global-spacing-dimensions-450-41690cc7)",
              500: "var(--foundry-global-spacing-dimensions-500-72b67c3c)",
              550: "var(--foundry-global-spacing-dimensions-550-97601a54)",
              600: "var(--foundry-global-spacing-dimensions-600-552f3071)",
              650: "var(--foundry-global-spacing-dimensions-650-61f68482)",
              700: "var(--foundry-global-spacing-dimensions-700-523e51c1)",
              750: "var(--foundry-global-spacing-dimensions-750-8a3f1cbf)",
              800: "var(--foundry-global-spacing-dimensions-800-bbdfa298)",
              900: "var(--foundry-global-spacing-dimensions-900-efcdb6bf)",
              950: "var(--foundry-global-spacing-dimensions-950-cc7b4e5e)",
              1e3: "var(--foundry-global-spacing-dimensions-1000-7e8c9b30)",
              1100: "var(--foundry-global-spacing-dimensions-1100-aca957c8)",
              1150: "var(--foundry-global-spacing-dimensions-1150-f8665e69)",
              1200: "var(--foundry-global-spacing-dimensions-1200-71972197)",
              1400: "var(--foundry-global-spacing-dimensions-1400-8f4cc278)",
              1600: "var(--foundry-global-spacing-dimensions-1600-b5e74cd0)",
              1700: "var(--foundry-global-spacing-dimensions-1700-b22e9e34)",
              1800: "var(--foundry-global-spacing-dimensions-1800-94e4f433)",
              2e3: "var(--foundry-global-spacing-dimensions-2000-d510a4b4)",
              2200: "var(--foundry-global-spacing-dimensions-2200-93c325ca)",
              2350: "var(--foundry-global-spacing-dimensions-2350-3bd02711)",
              2400: "var(--foundry-global-spacing-dimensions-2400-8d3906cf)",
              2500: "var(--foundry-global-spacing-dimensions-2500-4ab359ad)",
              2750: "var(--foundry-global-spacing-dimensions-2750-165b8e80)",
              3e3: "var(--foundry-global-spacing-dimensions-3000-27404208)",
              3150: "var(--foundry-global-spacing-dimensions-3150-c73af8bd)",
              3350: "var(--foundry-global-spacing-dimensions-3350-d07d3335)",
              3500: "var(--foundry-global-spacing-dimensions-3500-832dd3e8)",
              3750: "var(--foundry-global-spacing-dimensions-3750-18293754)",
              4e3: "var(--foundry-global-spacing-dimensions-4000-981888ae)",
              4125: "var(--foundry-global-spacing-dimensions-4125-711bd372)",
              4250: "var(--foundry-global-spacing-dimensions-4250-11e9d696)",
              4500: "var(--foundry-global-spacing-dimensions-4500-2f90e66f)",
              4750: "var(--foundry-global-spacing-dimensions-4750-1ff43e79)",
              5e3: "var(--foundry-global-spacing-dimensions-5000-7c37a31a)",
              5250: "var(--foundry-global-spacing-dimensions-5250-eed14f39)",
              5500: "var(--foundry-global-spacing-dimensions-5500-1e6d6f23)",
              5750: "var(--foundry-global-spacing-dimensions-5750-f63e358c)",
              6e3: "var(--foundry-global-spacing-dimensions-6000-25c8873a)",
              6250: "var(--foundry-global-spacing-dimensions-6250-aabe7f2f)"
            }
          },
          font: {
            family: {
              arial: "var(--foundry-global-font-family-arial-29a7d878)",
              helveticaNowDisplay: "var(--foundry-global-font-family-helvetica-now-display-15e86e06)",
              helveticaNowText: "var(--foundry-global-font-family-helvetica-now-text-2f039cca)",
              consolas: "var(--foundry-global-font-family-consolas-b260a4d8)"
            },
            weight: {
              400: "var(--foundry-global-font-weight-400-c543d620)",
              700: "var(--foundry-global-font-weight-700-4d05ca0a)"
            },
            size: {
              150: "var(--foundry-global-font-size-150-198f06c7)",
              175: "var(--foundry-global-font-size-175-7c044718)",
              200: "var(--foundry-global-font-size-200-9b30a1c2)",
              225: "var(--foundry-global-font-size-225-6b268615)",
              250: "var(--foundry-global-font-size-250-7c909c36)",
              300: "var(--foundry-global-font-size-300-ed2e8eb5)",
              400: "var(--foundry-global-font-size-400-310f384e)",
              500: "var(--foundry-global-font-size-500-ae4c1498)",
              600: "var(--foundry-global-font-size-600-f98b9cf9)",
              700: "var(--foundry-global-font-size-700-e55fff7d)",
              800: "var(--foundry-global-font-size-800-cbeeb437)",
              900: "var(--foundry-global-font-size-900-195dff23)",
              1e3: "var(--foundry-global-font-size-1000-de0d9aba)",
              1100: "var(--foundry-global-font-size-1100-a7f67440)"
            },
            letterSpacing: {
              0: "var(--foundry-global-font-letter-spacing-0-11d3b242)",
              25: "var(--foundry-global-font-letter-spacing-25-e01b7d49)",
              100: "var(--foundry-global-font-letter-spacing-100-823e8792)",
              200: "var(--foundry-global-font-letter-spacing-200-3d4cc27a)",
              250: "var(--foundry-global-font-letter-spacing-250-c0a207ff)",
              neg250: "var(--foundry-global-font-letter-spacing-neg-250-6c4f28af)",
              neg150: "var(--foundry-global-font-letter-spacing-neg-150-d0c75081)",
              neg100: "var(--foundry-global-font-letter-spacing-neg-100-d1dce193)",
              neg75: "var(--foundry-global-font-letter-spacing-neg-75-247e228b)",
              neg50: "var(--foundry-global-font-letter-spacing-neg-50-2f64a6bc)"
            },
            lineHeight: {
              100: "var(--foundry-global-font-line-height-100-d7ba3e93)",
              110: "var(--foundry-global-font-line-height-110-f2a1d21c)",
              120: "var(--foundry-global-font-line-height-120-114ddbcd)",
              130: "var(--foundry-global-font-line-height-130-1468e63f)",
              150: "var(--foundry-global-font-line-height-150-dc282d1f)"
            },
            spacing: {
              400: "var(--foundry-global-font-spacing-400-d05cce10)"
            }
          }
        },
        alias: {
          color: {
            background: {
              twotone: {
                success: "var(--foundry-alias-color-background-twotone-success-aee211b5)",
                information: "var(--foundry-alias-color-background-twotone-information-433f71ca)",
                warning: "var(--foundry-alias-color-background-twotone-warning-1b16c91e)",
                danger: "var(--foundry-alias-color-background-twotone-danger-89bb8777)",
                seafoam: "var(--foundry-alias-color-background-twotone-seafoam-bbb55e0c)"
              },
              bold: {
                layer0: "var(--foundry-alias-color-background-bold-layer-0-f947e8a3)",
                layer1: "var(--foundry-alias-color-background-bold-layer-1-a2bc128b)",
                layer2: "var(--foundry-alias-color-background-bold-layer-2-eddb4873)",
                layer3: "var(--foundry-alias-color-background-bold-layer-3-aaaf37c3)"
              },
              subtle: {
                layer0: "var(--foundry-alias-color-background-subtle-layer-0-3f1d20b0)",
                layer1: "var(--foundry-alias-color-background-subtle-layer-1-74c1dd2f)",
                layer2: "var(--foundry-alias-color-background-subtle-layer-2-b67c0bd1)"
              },
              component: {
                tooltip: "var(--foundry-alias-color-background-component-tooltip-791bcb22)"
              }
            },
            text: {
              standard: "var(--foundry-alias-color-text-standard-2d241861)",
              disabled: "var(--foundry-alias-color-text-disabled-6c1b5f99)",
              subdued: "var(--foundry-alias-color-text-subdued-d5502516)",
              header: "var(--foundry-alias-color-text-header-c0780da4)",
              success: "var(--foundry-alias-color-text-success-5fcd04d6)",
              information: "var(--foundry-alias-color-text-information-5657d70d)",
              warning: "var(--foundry-alias-color-text-warning-c0b6f339)",
              danger: "var(--foundry-alias-color-text-danger-bcdfc5ff)",
              seafoam: "var(--foundry-alias-color-text-seafoam-62ff1b40)"
            },
            icon: {
              standard: "var(--foundry-alias-color-icon-standard-3eef4ce2)",
              disabled: "var(--foundry-alias-color-icon-disabled-34e2f46b)",
              illustration: "var(--foundry-alias-color-icon-illustration-9b2d1c8c)",
              subdued: "var(--foundry-alias-color-icon-subdued-a7a37139)",
              subduedLowestContrast: "var(--foundry-alias-color-icon-subdued-lowest-contrast-6e35947c)",
              information: "var(--foundry-alias-color-icon-information-139f1e42)",
              informationLowerContrast: "var(--foundry-alias-color-icon-information-lower-contrast-bf7ca27d)",
              informationHigherContrast: "var(--foundry-alias-color-icon-information-higher-contrast-1dc79bef)",
              informationLowestContrast: "var(--foundry-alias-color-icon-information-lowest-contrast-c97926f1)",
              informationHighestContrast: "var(--foundry-alias-color-icon-information-highest-contrast-5a450ba5)",
              success: "var(--foundry-alias-color-icon-success-e23133ed)",
              successLowerContrast: "var(--foundry-alias-color-icon-success-lower-contrast-a88e4244)",
              successHigherContrast: "var(--foundry-alias-color-icon-success-higher-contrast-574d0db3)",
              successLowestContrast: "var(--foundry-alias-color-icon-success-lowest-contrast-bbecce8c)",
              successHighestContrast: "var(--foundry-alias-color-icon-success-highest-contrast-1add093c)",
              warning: "var(--foundry-alias-color-icon-warning-72f96436)",
              warningLowerContrast: "var(--foundry-alias-color-icon-warning-lower-contrast-b6e0d50b)",
              warningHigherContrast: "var(--foundry-alias-color-icon-warning-higher-contrast-0bba028d)",
              warningLowestContrast: "var(--foundry-alias-color-icon-warning-lowest-contrast-c396ad20)",
              warningHighestContrast: "var(--foundry-alias-color-icon-warning-highest-contrast-78003698)",
              danger: "var(--foundry-alias-color-icon-danger-615a4836)",
              dangerLowerContrast: "var(--foundry-alias-color-icon-danger-lower-contrast-92eb2f13)",
              dangerHigherContrast: "var(--foundry-alias-color-icon-danger-higher-contrast-c78869be)",
              dangerLowestContrast: "var(--foundry-alias-color-icon-danger-lowest-contrast-af0106b8)",
              dangerHighestContrast: "var(--foundry-alias-color-icon-danger-highest-contrast-ef621d13)",
              seafoam: "var(--foundry-alias-color-icon-seafoam-7c088ef5)",
              seafoamLowerContrast: "var(--foundry-alias-color-icon-seafoam-lower-contrast-ec6e11bf)",
              seafoamHigherContrast: "var(--foundry-alias-color-icon-seafoam-higher-contrast-7245aa5c)",
              seafoamLowestContrast: "var(--foundry-alias-color-icon-seafoam-lowest-contrast-64031f29)",
              seafoamHighestContrast: "var(--foundry-alias-color-icon-seafoam-highest-contrast-4a2ef321)"
            },
            border: {
              decorative: "var(--foundry-alias-color-border-decorative-678f338a)",
              decorativeLowestContrast: "var(--foundry-alias-color-border-decorative-lowest-contrast-f8bbcfca)",
              field: "var(--foundry-alias-color-border-field-d535e421)",
              control: "var(--foundry-alias-color-border-control-192e0629)",
              information: "var(--foundry-alias-color-border-information-b430db7d)",
              informationLowestContrast: "var(--foundry-alias-color-border-information-lowest-contrast-9d4cedd9)",
              informationHighestContrast: "var(--foundry-alias-color-border-information-highest-contrast-d8396f29)",
              success: "var(--foundry-alias-color-border-success-d9400b20)",
              successLowestContrast: "var(--foundry-alias-color-border-success-lowest-contrast-e656d81a)",
              successHighestContrast: "var(--foundry-alias-color-border-success-highest-contrast-4e576195)",
              warning: "var(--foundry-alias-color-border-warning-83f5d462)",
              warningLowestContrast: "var(--foundry-alias-color-border-warning-lowest-contrast-fd52fff8)",
              warningHighestContrast: "var(--foundry-alias-color-border-warning-highest-contrast-6f1f8d51)",
              danger: "var(--foundry-alias-color-border-danger-c58a5d4f)",
              dangerLowestContrast: "var(--foundry-alias-color-border-danger-lowest-contrast-e645825b)",
              dangerHighestContrast: "var(--foundry-alias-color-border-danger-highest-contrast-783d81da)",
              seafoam: "var(--foundry-alias-color-border-seafoam-152722dd)",
              seafoamLowestContrast: "var(--foundry-alias-color-border-seafoam-lowest-contrast-83343f40)",
              seafoamHighestContrast: "var(--foundry-alias-color-border-seafoam-highest-contrast-e1935bc9)",
              disabled: "var(--foundry-alias-color-border-disabled-cacdfb33)",
              focus: "var(--foundry-alias-color-border-focus-e58b07c7)",
              shadow: "var(--foundry-alias-color-border-shadow-9f37e9b9)"
            },
            decorative: {
              information: "var(--foundry-alias-color-decorative-information-6d17b386)",
              informationLowestContrast: "var(--foundry-alias-color-decorative-information-lowest-contrast-a34024fd)",
              informationHighestContrast: "var(--foundry-alias-color-decorative-information-highest-contrast-68ba8e34)",
              success: "var(--foundry-alias-color-decorative-success-e509717f)",
              successLowestContrast: "var(--foundry-alias-color-decorative-success-lowest-contrast-9a2a33f9)",
              successHighestContrast: "var(--foundry-alias-color-decorative-success-highest-contrast-1fe42830)",
              warning: "var(--foundry-alias-color-decorative-warning-5a28cd24)",
              warningLowestContrast: "var(--foundry-alias-color-decorative-warning-lowest-contrast-3c247b72)",
              warningHighestContrast: "var(--foundry-alias-color-decorative-warning-highest-contrast-a50141af)",
              danger: "var(--foundry-alias-color-decorative-danger-e7f85ac4)",
              dangerLowestContrast: "var(--foundry-alias-color-decorative-danger-lowest-contrast-7692d49b)",
              dangerHighestContrast: "var(--foundry-alias-color-decorative-danger-highest-contrast-ace7b335)",
              seafoam: "var(--foundry-alias-color-decorative-seafoam-9f1d83a7)",
              seafoamLowestContrast: "var(--foundry-alias-color-decorative-seafoam-lowest-contrast-7bfe0e03)",
              seafoamHighestContrast: "var(--foundry-alias-color-decorative-seafoam-highest-contrast-194ae5a1)"
            },
            brand: {
              bully: {
                blue: "var(--foundry-alias-color-brand-bully-blue-09f992d6)",
                yellow: "var(--foundry-alias-color-brand-bully-yellow-6124e706)"
              },
              rdr: {
                red: "var(--foundry-alias-color-brand-rdr-red-d730e332)"
              },
              rockstar: {
                gold: "var(--foundry-alias-color-brand-rockstar-gold-28436c1a)"
              }
            }
          },
          font: {
            family: {
              heading: {
                primary: "var(--foundry-alias-font-family-heading-primary-fab3091b)",
                fallback: "var(--foundry-alias-font-family-heading-fallback-197c505b)"
              },
              body: {
                primary: "var(--foundry-alias-font-family-body-primary-a0f2e156)",
                fallback: "var(--foundry-alias-font-family-body-fallback-aa2c93c5)"
              },
              code: {
                primary: "var(--foundry-alias-font-family-code-primary-0731b8b8)",
                fallback: "var(--foundry-alias-font-family-code-fallback-65a5a9e6)"
              }
            },
            letterSpacing: {
              heading: {
                primary: "var(--foundry-alias-font-letter-spacing-heading-primary-4052fb4d)",
                fallback: "var(--foundry-alias-font-letter-spacing-heading-fallback-0c565619)"
              },
              body: {
                primary: "var(--foundry-alias-font-letter-spacing-body-primary-36e0f114)",
                fallback: "var(--foundry-alias-font-letter-spacing-body-fallback-1bae4182)"
              },
              label: {
                primary: "var(--foundry-alias-font-letter-spacing-label-primary-ab7f3c8d)",
                fallback: "var(--foundry-alias-font-letter-spacing-label-fallback-1226b09e)"
              }
            },
            weight: {
              regular: "var(--foundry-alias-font-weight-regular-c2af3245)",
              bold: "var(--foundry-alias-font-weight-bold-751d319e)"
            },
            spacing: {
              paragraph: "var(--foundry-alias-font-spacing-paragraph-cdd6040b)"
            },
            size: {
              heading: {
                display: "var(--foundry-alias-font-size-heading-display-a2892c71)",
                "01": "var(--foundry-alias-font-size-heading-01-1e8a0727)",
                "02": "var(--foundry-alias-font-size-heading-02-0fd2c0d9)",
                "03": "var(--foundry-alias-font-size-heading-03-9a73c535)",
                "04": "var(--foundry-alias-font-size-heading-04-1fdd08c0)",
                "05": "var(--foundry-alias-font-size-heading-05-beb13840)",
                "06": "var(--foundry-alias-font-size-heading-06-40a06748)"
              },
              body: {
                bodyLg: "var(--foundry-alias-font-size-body-body-lg-bec4de18)",
                bodyMd: "var(--foundry-alias-font-size-body-body-md-caf3b782)",
                bodySm: "var(--foundry-alias-font-size-body-body-sm-2a8e6da3)",
                bodyXs: "var(--foundry-alias-font-size-body-body-xs-cf241758)",
                code: "var(--foundry-alias-font-size-body-code-17a5a27f)"
              }
            },
            lineHeight: {
              heading: "var(--foundry-alias-font-line-height-heading-5379287f)",
              body: "var(--foundry-alias-font-line-height-body-3e320cc8)"
            }
          }
        }
      };
      r(22673);
      const i = e => {
        const t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }
    }
  }
]);