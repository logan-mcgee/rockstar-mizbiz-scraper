try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "04e00ed6-12c4-48cc-a0e2-4ded9e42336a", e._sentryDebugIdIdentifier = "sentry-dbid-04e00ed6-12c4-48cc-a0e2-4ded9e42336a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3712], {
    54540(e, t, r) {
      var o, a, n = {},
        i = r(73481),
        l = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: r,
              output: o
            } = this._buildTables(e);
            this.gotoFn = r, this.output = o, this.failure = t
          }
          _buildTables(e) {
            const t = {
                0: {}
              },
              r = {};
            let o = 0;
            for (const a of e) {
              let e = 0;
              for (const n of a) t[e] && n in t[e] ? e = t[e][n] : (o++, t[e][n] = o, t[o] = {}, e = o, r[o] = []);
              r[e].push(a)
            }
            const a = {},
              n = [];
            for (const e in t[0]) {
              const r = t[0][e];
              a[r] = 0, n.push(r)
            }
            for (; n.length > 0;) {
              const e = n.shift();
              if (void 0 !== e)
                for (const o in t[e]) {
                  const i = t[e][o];
                  n.push(i);
                  let l = a[e];
                  for (; l > 0 && !(o in t[l]);) l = a[l];
                  if (o in t[l]) {
                    const e = t[l][o];
                    a[i] = e, r[i] = [...r[i], ...r[e]]
                  } else a[i] = 0
                }
            }
            return {
              gotoFn: t,
              output: r,
              failure: a
            }
          }
          search(e) {
            let t = 0;
            const r = [];
            for (let o = 0; o < e.length; o++) {
              const a = e[o];
              for (; t > 0 && !(a in this.gotoFn[t]);) t = this.failure[t];
              if (a in this.gotoFn[t] && (t = this.gotoFn[t][a], this.output[t].length > 0)) {
                const e = this.output[t];
                r.push([o, e])
              }
            }
            return r
          }
          match(e) {
            let t = 0;
            for (let r = 0; r < e.length; r++) {
              const o = e[r];
              for (; t > 0 && !(o in this.gotoFn[t]);) t = this.failure[t];
              if (o in this.gotoFn[t] && (t = this.gotoFn[t][o], this.output[t].length > 0)) return !0
            }
            return !1
          }
        },
        s = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        c = !1;

      function d(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(o || (o = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(a || (a = {}));
      const f = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        u = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        h = new Map([
          [126, a.Element],
          [94, a.Start],
          [36, a.End],
          [42, a.Any],
          [33, a.Not],
          [124, a.Hyphen]
        ]),
        g = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        p = new Set(["contains", "icontains"]);

      function y(e, t, r) {
        const o = parseInt(t, 16) - 65536;
        return o != o || r ? t : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
      }

      function v(e) {
        return e.replace(u, y)
      }

      function b(e) {
        return 39 === e || 34 === e
      }

      function m(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function w(e) {
        const t = [],
          r = k(t, `${e}`, 0);
        if (r < e.length) throw new Error(`Unmatched selector: ${e.slice(r)}`);
        return t
      }

      function k(e, t, r) {
        let n = [];

        function i(e) {
          const o = t.slice(r + e).match(f);
          if (!o) throw new Error(`Expected name, found ${t.slice(r)}`);
          const [a] = o;
          return r += e + a.length, v(a)
        }

        function l(e) {
          for (r += e; r < t.length && m(t.charCodeAt(r));) r++
        }

        function s() {
          const e = r += 1;
          let o = 1;
          for (; o > 0 && r < t.length; r++) 40 !== t.charCodeAt(r) || c(r) ? 41 !== t.charCodeAt(r) || c(r) || o-- : o++;
          if (o) throw new Error("Parenthesis not matched");
          return v(t.slice(e, r - 1))
        }

        function c(e) {
          let r = 0;
          for (; 92 === t.charCodeAt(--e);) r++;
          return !(1 & ~r)
        }

        function d() {
          if (n.length > 0 && function(e) {
              switch (e.type) {
                case o.Adjacent:
                case o.Child:
                case o.Descendant:
                case o.Parent:
                case o.Sibling:
                case o.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(n[n.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function u(e) {
          n.length > 0 && n[n.length - 1].type === o.Descendant ? n[n.length - 1].type = e : (d(), n.push({
            type: e
          }))
        }

        function y(e, t) {
          n.push({
            type: o.Attribute,
            name: e,
            action: t,
            value: i(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function w() {
          if (n.length && n[n.length - 1].type === o.Descendant && n.pop(), 0 === n.length) throw new Error("Empty sub-selector");
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
              0 !== n.length && n[0].type === o.Descendant || (d(), n.push({
                type: o.Descendant
              })), l(1);
              break;
            case 62:
              u(o.Child), l(1);
              break;
            case 60:
              u(o.Parent), l(1);
              break;
            case 126:
              u(o.Sibling), l(1);
              break;
            case 43:
              u(o.Adjacent), l(1);
              break;
            case 46:
              y("class", a.Element);
              break;
            case 35:
              y("id", a.Equals);
              break;
            case 91: {
              let e;
              l(1);
              let s = null;
              124 === t.charCodeAt(r) ? e = i(1) : t.startsWith("*|", r) ? (s = "*", e = i(2)) : (e = i(0), 124 === t.charCodeAt(r) && 61 !== t.charCodeAt(r + 1) && (s = e, e = i(1))), l(0);
              let d = a.Exists;
              const f = h.get(t.charCodeAt(r));
              if (f) {
                if (d = f, 61 !== t.charCodeAt(r + 1)) throw new Error("Expected `=`");
                l(2)
              } else 61 === t.charCodeAt(r) && (d = a.Equals, l(1));
              let u = "",
                g = null;
              if ("exists" !== d) {
                if (b(t.charCodeAt(r))) {
                  const e = t.charCodeAt(r);
                  let o = r + 1;
                  for (; o < t.length && (t.charCodeAt(o) !== e || c(o));) o += 1;
                  if (t.charCodeAt(o) !== e) throw new Error("Attribute value didn't end");
                  u = v(t.slice(r + 1, o)), r = o + 1
                } else {
                  const e = r;
                  for (; r < t.length && (!m(t.charCodeAt(r)) && 93 !== t.charCodeAt(r) || c(r));) r += 1;
                  u = v(t.slice(e, r))
                }
                l(0);
                const e = 32 | t.charCodeAt(r);
                115 === e ? (g = !1, l(1)) : 105 === e && (g = !0, l(1))
              }
              if (93 !== t.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const p = {
                type: o.Attribute,
                name: e,
                action: d,
                value: u,
                namespace: s,
                ignoreCase: g
              };
              n.push(p);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(r + 1)) {
                n.push({
                  type: o.PseudoElement,
                  name: i(2).toLowerCase(),
                  data: 40 === t.charCodeAt(r) ? s() : null
                });
                continue
              }
              const e = i(1).toLowerCase();
              let a = null;
              if (40 === t.charCodeAt(r))
                if (g.has(e)) {
                  if (b(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (a = [], r = k(a, t, r + 1), 41 !== t.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  r += 1
                } else {
                  if (a = s(), p.has(e)) {
                    const e = a.charCodeAt(0);
                    e === a.charCodeAt(a.length - 1) && b(e) && (a = a.slice(1, -1))
                  }
                  a = v(a)
                } n.push({
                type: o.Pseudo,
                name: e,
                data: a
              });
              break
            }
            case 44:
              w(), n = [], l(1);
              break;
            default: {
              if (t.startsWith("/*", r)) {
                const e = t.indexOf("*/", r + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                r = e + 2, 0 === n.length && l(0);
                break
              }
              let a, s = null;
              if (42 === e) r += 1, a = "*";
              else if (124 === e) {
                if (a = "", 124 === t.charCodeAt(r + 1)) {
                  u(o.ColumnCombinator), l(2);
                  break
                }
              } else {
                if (!f.test(t.slice(r))) break e;
                a = i(0)
              }
              124 === t.charCodeAt(r) && 124 !== t.charCodeAt(r + 1) && (s = a, 42 === t.charCodeAt(r + 1) ? (a = "*", r += 2) : a = i(1)), n.push("*" === a ? {
                type: o.Universal,
                namespace: s
              } : {
                type: o.Tag,
                name: a,
                namespace: s
              })
            }
          }
        }
        return w(), r
      }

      function C(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? C(Object(r), !0).forEach(function(t) {
            x(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function(t) {
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
      const A = function e(t) {
        return r.withOptions = r => e(S(S({}, t), r)), r;

        function r(e, ...r) {
          const o = "string" == typeof e ? [e] : e.raw,
            {
              alignValues: a = !1,
              escapeSpecialCharacters: n = Array.isArray(e),
              trimWhitespace: i = !0
            } = t;
          let l = "";
          for (let e = 0; e < o.length; e++) {
            let t = o[e];
            n && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), l += t, e < r.length && (l += a ? O(r[e], l) : r[e])
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
          return i && (l = l.trim()), n && (l = l.replace(/\\n/g, "\n").replace(/\\t/g, "\t").replace(/\\r/g, "\r").replace(/\\v/g, "\v").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\0/g, "\0").replace(/\\x([\da-fA-F]{2})/g, (e, t) => String.fromCharCode(parseInt(t, 16))).replace(/\\u\{([\da-fA-F]{1,6})\}/g, (e, t) => String.fromCodePoint(parseInt(t, 16))).replace(/\\u([\da-fA-F]{4})/g, (e, t) => String.fromCharCode(parseInt(t, 16)))), "undefined" != typeof Bun && (l = l.replace(/\\u(?:\{([\da-fA-F]{1,6})\}|([\da-fA-F]{4}))/g, (e, t, r) => {
            var o;
            const a = null !== (o = null != t ? t : r) && void 0 !== o ? o : "";
            return String.fromCodePoint(parseInt(a, 16))
          })), l
        }
      }({});

      function O(e, t) {
        if ("string" != typeof e || !e.includes("\n")) return e;
        const r = t.slice(t.lastIndexOf("\n") + 1).match(/^(\s+)/);
        if (r) {
          const t = r[1];
          return e.replace(/\n/g, `\n${t}`)
        }
        return e
      }
      var L = function() {
        return L = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++)
            for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e
        }, L.apply(this, arguments)
      };

      function _(e, t) {
        var r = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (o = Object.getOwnPropertySymbols(e); a < o.length; a++) t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (r[o[a]] = e[o[a]])
        }
        return r
      }

      function E(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var o, a, n = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(o = n.next()).done;) i.push(o.value)
        } catch (e) {
          a = {
            error: e
          }
        } finally {
          try {
            o && !o.done && (r = n.return) && r.call(n)
          } finally {
            if (a) throw a.error
          }
        }
        return i
      }
      var z = /(\u000D|\u000C|\u000D\u000A)/g,
        T = /[\u0000\uD800-\uDFFF]/g,
        F = /(\/\*)[\s\S]*?(\*\/)/g,
        j = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), o = [], a = t + 1; a < e.length; a += 1) {
            var n = e.charCodeAt(a);
            if (n === r) return [a, String.fromCharCode.apply(null, o)];
            if (92 === n) {
              var i = P(e, a);
              if (null === i) return null;
              var l = E(i, 2),
                s = l[0],
                c = l[1];
              o.push(c), a = s
            } else {
              if (10 === n) return null;
              o.push(n)
            }
          }
          return null
        },
        R = function(e, t) {
          if (e.length <= t) return !1;
          var r, o = e.charCodeAt(t);
          return 45 === o ? !(e.length <= t + 1) && (45 === (r = e.charCodeAt(t + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === o || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o >= 128 || 92 === o && !(e.length <= t + 1) && 10 !== (r = e.charCodeAt(t + 1))
        },
        P = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var r = e.charCodeAt(t + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var o = [r], a = Math.min(t + 7, e.length), n = t + 2; n < a; n += 1) {
              var i = e.charCodeAt(n);
              if (!(i >= 48 && i <= 57 || i >= 65 && i <= 70 || i >= 97 && i <= 102)) break;
              o.push(i)
            }
            if (n < e.length) {
              var l = e.charCodeAt(n);
              9 !== l && 32 !== l && 10 !== l || (n += 1)
            }
            return [n - 1, parseInt(String.fromCharCode.apply(null, o), 16)]
          }
          return [t + 1, r]
        },
        D = function(e, t) {
          var r = M(e, t);
          if (null === r) return null;
          var o = E(r, 3),
            a = o[0],
            n = o[1],
            i = o[2],
            l = I(e, a + 1);
          if (null !== l) {
            var s = E(l, 2);
            return [s[0],
              ["<dimension-token>", n, s[1]]
            ]
          }
          return a + 1 < e.length && 37 === e.charCodeAt(a + 1) ? [a + 1, ["<percentage-token>", n]] : [a, ["<number-token>", n, i]]
        },
        M = function(e, t) {
          if (e.length <= t) return null;
          var r = "integer",
            o = [],
            a = e.charCodeAt(t);
          for (43 !== a && 45 !== a || (t += 1, 45 === a && o.push(45)); t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) o.push(c), t += 1;
          if (t + 1 < e.length) {
            var n = e.charCodeAt(t),
              i = e.charCodeAt(t + 1);
            if (46 === n && i >= 48 && i <= 57)
              for (o.push(n, i), r = "number", t += 2; t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) o.push(c), t += 1
          }
          if (t + 1 < e.length) {
            n = e.charCodeAt(t), i = e.charCodeAt(t + 1);
            var l = e.charCodeAt(t + 2);
            if (69 === n || 101 === n) {
              var s = i >= 48 && i <= 57;
              if (s || (43 === i || 45 === i) && l >= 48 && l <= 57)
                for (r = "number", s ? (o.push(69, i), t += 2) : 45 === i ? (o.push(69, 45, l), t += 3) : (o.push(69, l), t += 3); t < e.length;) {
                  var c;
                  if (!((c = e.charCodeAt(t)) >= 48 && c <= 57)) break;
                  o.push(c), t += 1
                }
            }
          }
          var d = String.fromCharCode.apply(null, o),
            f = "number" === r ? parseFloat(d) : parseInt(d);
          return -0 === f && (f = 0), Number.isNaN(f) ? null : [t - 1, f, r]
        },
        q = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], o = e.charCodeAt(t); t < e.length; o = e.charCodeAt(++t))
            if (45 === o || 95 === o || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o >= 128 || o >= 48 && o <= 57) r.push(o);
            else {
              var a = P(e, t);
              if (null === a) break;
              var n = E(a, 2),
                i = n[0],
                l = n[1];
              r.push(l), t = i
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        I = function(e, t) {
          if (e.length <= t || !R(e, t)) return null;
          for (var r = [], o = e.charCodeAt(t); t < e.length; o = e.charCodeAt(++t))
            if (45 === o || 95 === o || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o >= 128 || o >= 48 && o <= 57) r.push(o);
            else {
              var a = P(e, t);
              if (null === a) break;
              var n = E(a, 2),
                i = n[0],
                l = n[1];
              r.push(l), t = i
            } return [t - 1, String.fromCharCode.apply(null, r)]
        },
        N = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var o = [], a = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, o)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) a || 0 === o.length || (a = !0);
            else if (92 === r) {
              var n = P(e, t);
              if (null === n || a) return null;
              var i = E(n, 2),
                l = i[0],
                s = i[1];
              o.push(s), t = l
            } else {
              if (a) return null;
              o.push(r)
            }
            r = e.charCodeAt(++t)
          }
          return null
        },
        B = function(e, t) {
          var r = I(e, t);
          if (null === r) return null;
          var o = E(r, 2),
            a = o[0],
            n = o[1];
          if ("url" === n.toLowerCase()) {
            if (e.length > a + 1 && 40 === e.charCodeAt(a + 1)) {
              for (var i = 2; a + i < e.length; i += 1) {
                var l = e.charCodeAt(a + i);
                if (34 === l || 39 === l) return [a + 1, n.toLowerCase(), "<function-token>"];
                if (9 !== l && 32 !== l && 10 !== l) {
                  var s = N(e, a + i);
                  if (null === s) return null;
                  var c = E(s, 2);
                  return [c[0], c[1], "<url-token>"]
                }
              }
              return [a + 1, n.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > a + 1 && 40 === e.charCodeAt(a + 1)) return [a + 1, n.toLowerCase(), "<function-token>"];
          return [a, n.toLowerCase(), "<ident-token>"]
        },
        $ = function(e) {
          if (null === e.mediaCondition) return e;
          var t = W(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        W = function e(t) {
          for (var r = t.children.length - 1; r >= 0; r--) {
            var o = t.children[r];
            if (!("context" in o)) {
              var a = e(o);
              if (null === a.operator && 1 === a.children.length) t.children[r] = a.children[0];
              else if (a.operator === t.operator && ("and" === a.operator || "or" === a.operator)) {
                for (var n = [r, 1], i = 0; i < a.children.length; i++) n.push(a.children[i]);
                t.children.splice.apply(t.children, n)
              }
            }
          }
          return t
        },
        H = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        U = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(z, "\n").replace(T, "�")).replace(F, "");
            for (var r = []; t < e.length; t += 1) {
              var o = e.charCodeAt(t);
              if (9 === o || 32 === o || 10 === o) {
                for (var a = e.charCodeAt(++t); 9 === a || 32 === a || 10 === a;) a = e.charCodeAt(++t);
                t -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === o) {
                if (null === (A = j(e, t))) return null;
                var n = E(A, 2),
                  i = n[0],
                  l = n[1];
                r.push({
                  type: "<string-token>",
                  value: l
                }), t = i
              } else if (35 === o) {
                if (t + 1 < e.length && (95 === (g = e.charCodeAt(t + 1)) || g >= 65 && g <= 90 || g >= 97 && g <= 122 || g >= 128 || g >= 48 && g <= 57 || 92 === g && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var s = R(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (A = q(e, t + 1))) {
                    var c = E(A, 2);
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
                  value: o
                })
              } else if (39 === o) {
                if (null === (A = j(e, t))) return null;
                var d = E(A, 2);
                i = d[0], l = d[1], r.push({
                  type: "<string-token>",
                  value: l
                }), t = i
              } else if (40 === o) r.push({
                type: "<(-token>"
              });
              else if (41 === o) r.push({
                type: "<)-token>"
              });
              else if (43 === o) {
                var f = D(e, t);
                if (null === f) r.push({
                  type: "<delim-token>",
                  value: o
                });
                else {
                  var u = E(f, 2);
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
              } else if (44 === o) r.push({
                type: "<comma-token>"
              });
              else if (45 === o) {
                if (null !== (b = D(e, t))) {
                  var h = E(b, 2);
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
                    p = e.charCodeAt(t + 2);
                  if (45 === g && 62 === p) {
                    r.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (A = B(e, t))) {
                  var y = E(A, 3),
                    v = (i = y[0], l = y[1], y[2]);
                  r.push({
                    type: v,
                    value: l
                  }), t = i;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: o
                })
              } else if (46 === o) {
                var b;
                if (null !== (b = D(e, t))) {
                  var m = E(b, 2);
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
                  value: o
                })
              } else if (58 === o) r.push({
                type: "<colon-token>"
              });
              else if (59 === o) r.push({
                type: "<semicolon-token>"
              });
              else if (60 === o) {
                if (t + 3 < e.length) {
                  g = e.charCodeAt(t + 1), p = e.charCodeAt(t + 2);
                  var w = e.charCodeAt(t + 3);
                  if (33 === g && 45 === p && 45 === w) {
                    r.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: o
                })
              } else if (64 === o) {
                if (null !== (A = I(e, t + 1))) {
                  var k = E(A, 2);
                  i = k[0], l = k[1], r.push({
                    type: "<at-keyword-token>",
                    value: l.toLowerCase()
                  }), t = i;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: o
                })
              } else if (91 === o) r.push({
                type: "<[-token>"
              });
              else if (92 === o) {
                if (null === (A = P(e, t))) return null;
                var C = E(A, 2);
                i = C[0], l = C[1], e = e.slice(0, t) + l + e.slice(i + 1), t -= 1
              } else if (93 === o) r.push({
                type: "<]-token>"
              });
              else if (123 === o) r.push({
                type: "<{-token>"
              });
              else if (125 === o) r.push({
                type: "<}-token>"
              });
              else if (o >= 48 && o <= 57) {
                var S, x = E(A = D(e, t), 2);
                i = x[0], "<dimension-token>" === (S = x[1])[0] ? r.push({
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
              } else if (95 === o || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o >= 128) {
                var A;
                if (null === (A = B(e, t))) return null;
                var O = E(A, 3);
                i = O[0], l = O[1], v = O[2], r.push({
                  type: v,
                  value: l
                }), t = i
              } else r.push({
                type: "<delim-token>",
                value: o
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(e.trim());
          if (null === t) throw H("Failed tokenizing");
          var r = 0,
            o = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw H("Expected whitespace after media");
            r = 2;
            for (var a = 2; a < t.length - 1; a++) {
              var n = t[a];
              if ("<{-token>" === n.type) {
                o = a;
                break
              }
              if ("<semicolon-token>" === n.type) throw H("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(r, o), G(t)
        },
        V = function(e) {
          for (var t = [], r = !1, o = 0; o < e.length; o++) "<whitespace-token>" === e[o].type ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(L(L({}, e[o]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return t
        },
        G = function(e) {
          for (var t, r, o = [
              []
            ], a = 0; a < e.length; a++) {
            var n = e[a];
            "<comma-token>" === n.type ? o.push([]) : o[o.length - 1].push(n)
          }
          var i = o.map(V);
          if (1 === i.length && 0 === i[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var l = i.map(function(e) {
              return 0 === e.length ? null : X(e)
            }),
            s = [];
          try {
            for (var c = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  r = t && e[t],
                  o = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && o >= e.length && (e = void 0), {
                      value: e && e[o++],
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
          if (0 === s.length) throw H("No valid media queries");
          return s
        },
        X = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Y(e, !0)
            }
          } catch (e) {
            throw H("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw H("Expected media condition or media prefix");
            var r = null,
              o = void 0,
              a = t.value;
            "only" !== a && "not" !== a || (r = a);
            var n = null === r ? 0 : 1;
            if (e.length <= n) throw H("Expected extra token in media query");
            var i = e[n];
            if ("<ident-token>" === i.type) {
              var l = i.value;
              if ("all" === l) o = "all";
              else if ("print" === l || "screen" === l) o = l;
              else {
                if ("tty" !== l && "tv" !== l && "projection" !== l && "handheld" !== l && "braille" !== l && "embossed" !== l && "aural" !== l && "speech" !== l) throw H("Unknown ident '".concat(l, "' in media query"));
                r = "not" === r ? null : "not", o = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== i.type) throw H("Invalid media query");
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
                  mediaCondition: Y(s, !0)
                }
              } catch (e) {
                throw H("Expected media condition after '('", e)
              }
            }
            if (n + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: o,
              mediaCondition: null
            };
            if (!(n + 4 < e.length)) throw H("Expected media condition after media prefix");
            var c = e[n + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw H("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: o,
                mediaCondition: Y(e.slice(n + 2), !1)
              }
            } catch (e) {
              throw H("Expected media condition after 'and'", e)
            }
          }
        },
        Y = function e(t, r, o) {
          if (void 0 === o && (o = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var a, n = t.length - 1, i = 0, l = 0, s = 0; s < t.length; s++) {
            var c = t[s];
            if ("<(-token>" === c.type ? (l += 1, i = Math.max(i, l)) : "<)-token>" === c.type && (l -= 1), 0 === l) {
              n = s;
              break
            }
          }
          if (0 !== l) throw new Error("Mismatched parens\nInvalid media condition");
          var d = t.slice(0, n + 1);
          if (a = 1 === i ? J(d) : "<ident-token>" === d[1].type && "not" === d[1].value ? e(d.slice(2, -1), !0, "not") : e(d.slice(1, -1), !0), n === t.length - 1) return {
            operator: o,
            children: [a]
          };
          var f = t[n + 1];
          if ("<ident-token>" !== f.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== o && o !== f.value) throw new Error("'".concat(f.value, "' and '").concat(o, "' must not be at same level\nInvalid media condition"));
          if ("or" === f.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== f.value && "or" !== f.value) throw new Error("Invalid operator: '".concat(f.value, "'\nInvalid media condition"));
          var u = e(t.slice(n + 2), r, f.value);
          return {
            operator: f.value,
            children: [a].concat(u.children)
          }
        },
        J = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], r = 1; r < e.length; r++) {
            if (r < e.length - 2) {
              var o = e[r],
                a = e[r + 1],
                n = e[r + 2];
              if ("<number-token>" === o.type && o.value > 0 && "<delim-token>" === a.type && 47 === a.value && "<number-token>" === n.type && n.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: o.value,
                  denominator: n.value,
                  wsBefore: o.wsBefore,
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
                value: _(l, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var f = Q(t);
            return {
              context: "range",
              feature: f.featureName,
              range: f
            }
          } catch (e) {
            throw H("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        Q = function(e) {
          var t, r, o, a;
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
                var u = e[l + 1 + (null !== (a = null === (o = n.rightOp) || void 0 === o ? void 0 : o.length) && void 0 !== a ? a : 0)];
                n.rightToken = u
              } else if (l + 2 !== e.length) throw new Error("Invalid range")
            } else n.rightToken = s;
            var h = null,
              g = n.leftToken,
              p = n.leftOp,
              y = n.featureName,
              v = n.rightOp,
              b = n.rightToken,
              m = null;
            if (null !== g)
              if ("<ident-token>" === g.type) {
                var w = g.type;
                "infinite" === (C = g.value) && (m = {
                  type: w,
                  value: C
                })
              } else "<number-token>" !== g.type && "<dimension-token>" !== g.type && "<ratio-token>" !== g.type || (g.wsBefore, g.wsAfter, m = _(g, ["wsBefore", "wsAfter"]));
            var k = null;
            if (null !== b)
              if ("<ident-token>" === b.type) {
                var C;
                w = b.type, "infinite" === (C = b.value) && (k = {
                  type: w,
                  value: C
                })
              } else "<number-token>" !== b.type && "<dimension-token>" !== b.type && "<ratio-token>" !== b.type || (b.wsBefore, b.wsAfter, k = _(b, ["wsBefore", "wsAfter"]));
            if (null !== m && null !== k)
              if ("<" !== p && "<=" !== p || "<" !== v && "<=" !== v) {
                if (">" !== p && ">=" !== p || ">" !== v && ">=" !== v) throw new Error("Invalid range");
                h = {
                  leftToken: m,
                  leftOp: p,
                  featureName: y,
                  rightOp: v,
                  rightToken: k
                }
              } else h = {
                leftToken: m,
                leftOp: p,
                featureName: y,
                rightOp: v,
                rightToken: k
              };
            else(null === m && null === p && null !== v && null !== k || null !== m && null !== p && null === v && null === k) && (h = {
              leftToken: m,
              leftOp: p,
              featureName: y,
              rightOp: v,
              rightToken: k
            });
            return h
          }
          throw new Error("Invalid range")
        };

      function Z(e) {
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

      function K(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? K(Object(r), !0).forEach(function(t) {
            var o, a, n;
            o = e, a = t, n = r[t], (a = Z(a)) in o ? Object.defineProperty(o, a, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[a] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : K(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function te(e, t) {
        if (null == e) return {};
        var r, o, a = function(e, t) {
          if (null == e) return {};
          var r, o, a = {},
            n = Object.keys(e);
          for (o = 0; o < n.length; o++) r = n[o], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (o = 0; o < n.length; o++) r = n[o], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }
      var re = /(?<=^(?:[^"']|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')*)&/g;

      function oe(e, t) {
        for (var r in e) t(e[r], r)
      }

      function ae(e, t) {
        var r = {};
        for (var o in e) - 1 === t.indexOf(o) && (r[o] = e[o]);
        return r
      }

      function ne(e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
      }
      var ie, le = /[ -,\.\/:-@\[-\^`\{-~]/,
        se = /[ -,\.\/:-@\[\]\^`\{-~]/,
        ce = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        de = {
          escapeEverything: !1,
          isIdentifier: !1,
          quotes: "single",
          wrap: !1
        };

      function fe(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = "double" === (t = ee(ee({}, de), t)).quotes ? '"' : "'", {
            isIdentifier: o
          } = t, a = e.charAt(0), n = "", i = 0, l = e.length; i < l;) {
          var s = e.charAt(i++),
            c = s.charCodeAt(0),
            d = void 0;
          if (c < 32 || c > 126) {
            if (c >= 55296 && c <= 56319 && i < l) {
              var f = e.charCodeAt(i++);
              56320 == (64512 & f) ? c = ((1023 & c) << 10) + (1023 & f) + 65536 : i--
            }
            d = "\\" + c.toString(16).toUpperCase() + " "
          } else d = t.escapeEverything ? le.test(s) ? "\\" + s : "\\" + c.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(s) ? "\\" + c.toString(16).toUpperCase() + " " : "\\" === s || !o && ('"' === s && r === s || "'" === s && r === s) || o && se.test(s) ? "\\" + s : s;
          n += d
        }
        return o && (/^-[-\d]/.test(n) ? n = "\\-" + n.slice(1) : /\d/.test(a) && (n = "\\3" + a + " " + n.slice(1))), n = n.replace(ce, function(e, t, r) {
          return t && t.length % 2 ? e : (t || "") + r
        }), !o && t.wrap ? r + n + r : n
      }

      function ue(e, t) {
        for (var r = e.length - 1; r >= 0; r--) {
          var o = e[r];
          if ("child" === o.type || "parent" === o.type || "sibling" === o.type || "adjacent" === o.type || "descendant" === o.type) return !1;
          if ("attribute" === o.type && "class" === o.name && o.value === t) return !0;
          if ("pseudo" === o.type && Array.isArray(o.data) && ("is" === o.name || "where" === o.name) && o.data.every(e => ue(e, t))) return !0
        }
        return !1
      }
      var he = (e, t) => {
        var r, o = () => {
          var r = new RegExp(".".concat(ne(fe(t, {
            isIdentifier: !0
          }))), "g");
          return e.replace(r, "&")
        };
        try {
          r = w(e)
        } catch (e) {
          throw new Error("Invalid selector: ".concat(o()), {
            cause: e
          })
        }
        r.forEach(e => {
          if (!ue(e, t)) throw new Error(A(ie || (ie = d(["\n        Invalid selector: ", "\n\n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n\n        This is to ensure that each style block only affects the styling of a single class.\n\n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n\n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), o(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
        })
      };
      class ge {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new ge
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var r of e) {
            var o = t.findOrCreateCondition(r);
            t = o.children
          }
          return t
        }
        addRule(e, t, r) {
          var o = this.getConditionalRulesetByPath(r).findOrCreateCondition(t);
          if (!o) throw new Error("Failed to add conditional rule");
          o.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var r = this.getConditionalRulesetByPath(e), o = 0; o < t.length; o++) {
            var a, n = t[o],
              i = null !== (a = r.precedenceLookup.get(n)) && void 0 !== a ? a : new Set;
            for (var l of t.slice(o + 1)) i.add(l);
            r.precedenceLookup.set(n, i)
          }
        }
        isCompatible(e) {
          for (var [t, r] of this.precedenceLookup.entries())
            for (var o of r) {
              var a;
              if (null !== (a = e.precedenceLookup.get(o)) && void 0 !== a && a.has(t)) return !1
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
              children: o
            }
            of e.ruleset.values()) {
            var a = this.ruleset.get(t);
            a ? (a.rules.push(...r), a.children.merge(o)) : this.ruleset.set(t, {
              query: t,
              rules: r,
              children: o
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
              var a = e.ruleset.get(o);
              if (!a) throw new Error("Can't find condition for ".concat(o));
              var n = t.findIndex(e => r.has(e.query));
              n > -1 ? t.splice(n, 0, a) : t.push(a)
            };
          for (var [o, a] of this.precedenceLookup.entries()) r(a);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: r,
              children: o
            }
            of this.getSortedRuleset()) {
            var a = {};
            for (var n of r) a[n.selector] = ee(ee({}, a[n.selector]), n.rule);
            Object.assign(a, ...o.renderToArray()), e.push({
              [t]: a
            })
          }
          return e
        }
      }
      var pe, ye = {
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
        ve = Object.keys(ye),
        be = ye,
        me = (e, t) => new Error(A(pe || (pe = d(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        we = e => {
          if ("@media " === e) throw me(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = $(e[t])
            })(U(e))
          } catch (t) {
            throw me(e, t.message)
          }
        },
        ke = ["vars"],
        Ce = ["content"],
        Se = "__DECLARATION",
        xe = {
          animationIterationCount: !0,
          borderImage: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
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

      function Ae(e, t, r, o) {
        var a = e.slice(0, t),
          n = e.slice(r);
        return "".concat(a).concat(o).concat(n)
      }
      var Oe = [...ve, "@layer", "@scope", "@media", "@supports", "@container", "@starting-style", "selectors"];
      class Le {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new ge], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map(e => [e, e])), this.localClassNamesSearch = new l(e), this.layers = new Map, this.composedClassLists = t.map(e => {
            var {
              identifier: t,
              classList: r
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(ne(r), ")"), "g")
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
              if (this.currConditionalRuleset = new ge, "layer" === e.type) {
                var t = "@layer ".concat(e.name);
                this.addLayer([t])
              } else {
                var r = ae(e.rule, Oe);
                this.addRule({
                  selector: e.selector,
                  rule: r
                }), this.transformLayer(e, e.rule["@layer"]), this.transformScope(e, e.rule["@scope"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformStartingStyle(e, e.rule["@starting-style"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
              }
              this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
            } else this.propertyRules.push(e);
          else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var r = this.transformVars(this.transformProperties(e.rule)),
            o = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var a = t[t.length - 1],
            n = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: o,
            rule: r
          }, a, n)
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
          return oe(e, (t, r) => {
            "number" != typeof t || 0 === t || xe[r] || (e[r] = "".concat(t, "px"))
          }), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, r = te(e, ke);
          return t ? ee(ee({}, function(e, t) {
            var r = {};
            for (var o in e) r[t(e[o], o)] = e[o];
            return r
          }(t, (e, t) => (0, i.Tm)(t))), r) : r
        }
        transformContent(e) {
          var {
            content: t
          } = e, r = te(e, Ce);
          return void 0 === t ? r : ee({
            content: (Array.isArray(t) ? t : [t]).map(e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"'))
          }, r)
        }
        transformClassname(e) {
          return ".".concat(fe(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            r = function(e) {
              t = t.replace(a, () => (function() {
                (() => {
                  if (s.length < 1) throw new Error("No adapter configured");
                  return s[s.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e))
            };
          for (var {
              identifier: o,
              regex: a
            }
            of this.composedClassLists) r(o);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var n = this.localClassNamesSearch.search(t), i = t.length, l = n.length - 1; l >= 0; l--) {
            var [c, [d]] = n[l], f = c - d.length + 1;
            i <= c || (i = f, "." !== t[f - 1] && (t = Ae(t, f, c + 1, this.transformClassname(d))))
          }
          return t
        }
        transformSelectors(e, t, r) {
          oe(t.selectors, (t, o) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var a = this.transformSelector(o.replace(RegExp("&", "g"), e.selector));
            he(a, e.selector);
            var n = {
              selector: a,
              rule: ae(t, Oe)
            };
            r ? this.addConditionalRule(n, r) : this.addRule(n);
            var i = {
              type: "selector",
              selector: a,
              rule: t
            };
            this.transformLayer(i, t["@layer"], r), this.transformScope(i, t["@scope"], r), this.transformSupports(i, t["@supports"], r), this.transformMedia(i, t["@media"], r), this.transformContainer(i, t["@container"], r), this.transformStartingStyle(i, t["@starting-style"], r)
          })
        }
        transformMedia(e, t) {
          var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [a, n] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(o, Object.keys(t).map(e => "@media ".concat(e))), Object.entries(t))) {
              var i = "@media ".concat(a);
              we(i);
              var l = [...o, i];
              this.addConditionalRule({
                selector: e.selector,
                rule: ae(n, Oe)
              }, l), "local" === e.type && (this.transformSimplePseudos(e, n, l), this.transformSelectors(e, n, l)), this.transformLayer(e, n["@layer"], l), this.transformScope(e, n["@scope"], l), this.transformSupports(e, n["@supports"], l), this.transformContainer(e, n["@container"], l), this.transformStartingStyle(e, n["@starting-style"], l)
            }
        }
        transformContainer(e, t) {
          var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(o, Object.keys(t).map(e => "@container ".concat(e))), oe(t, (t, r) => {
            var a = "@container ".concat(r),
              n = [...o, a];
            this.addConditionalRule({
              selector: e.selector,
              rule: ae(t, Oe)
            }, n), "local" === e.type && (this.transformSimplePseudos(e, t, n), this.transformSelectors(e, t, n)), this.transformLayer(e, t["@layer"], n), this.transformScope(e, t["@scope"], n), this.transformSupports(e, t["@supports"], n), this.transformMedia(e, t["@media"], n), this.transformStartingStyle(e, t["@starting-style"], n)
          }))
        }
        transformLayer(e, t) {
          var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(o, Object.keys(t).map(e => "@layer ".concat(e))), oe(t, (t, r) => {
            var a = [...o, "@layer ".concat(r)];
            this.addLayer(a), this.addConditionalRule({
              selector: e.selector,
              rule: ae(t, Oe)
            }, a), "local" === e.type && (this.transformSimplePseudos(e, t, a), this.transformSelectors(e, t, a)), this.transformScope(e, t["@scope"], a), this.transformMedia(e, t["@media"], a), this.transformSupports(e, t["@supports"], a), this.transformContainer(e, t["@container"], a), this.transformStartingStyle(e, t["@starting-style"], a)
          }))
        }
        transformScope(e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t) {
            var o, a = {};
            for (var [n, i] of(null === (o = this.currConditionalRuleset) || void 0 === o || o.addConditionPrecedence(r, Object.keys(t).map(t => (a[t] = "@scope ".concat(this.transformSelector(t.replace(re, e.selector))), a[t]))), Object.entries(t))) {
              var l = [...r, a[n]];
              this.addConditionalRule({
                selector: e.selector,
                rule: ae(i, Oe)
              }, l), "local" === e.type && (this.transformSimplePseudos(e, i, l), this.transformSelectors(e, i, l)), this.transformLayer(e, i["@layer"], l), this.transformMedia(e, i["@media"], l), this.transformSupports(e, i["@supports"], l), this.transformContainer(e, i["@container"], l), this.transformStartingStyle(e, i["@starting-style"], l)
            }
          }
        }
        transformSupports(e, t) {
          var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(o, Object.keys(t).map(e => "@supports ".concat(e))), oe(t, (t, r) => {
            var a = [...o, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: ae(t, Oe)
            }, a), "local" === e.type && (this.transformSimplePseudos(e, t, a), this.transformSelectors(e, t, a)), this.transformLayer(e, t["@layer"], a), this.transformScope(e, t["@scope"], a), this.transformMedia(e, t["@media"], a), this.transformContainer(e, t["@container"], a), this.transformStartingStyle(e, t["@starting-style"], a)
          }))
        }
        transformSimplePseudos(e, t, r) {
          for (var o of Object.keys(t))
            if (be[o]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(o),
                rule: t[o]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(e.selector).concat(o),
                rule: t[o]
              })
            }
        }
        transformStartingStyle(e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t) {
            var o, a = Object.keys(t).find(e => e.startsWith("@"));
            if (a) throw new Error('Nested at-rules (e.g. "'.concat(a, '") are not allowed inside @starting-style.'));
            null === (o = this.currConditionalRuleset) || void 0 === o || o.addConditionPrecedence(r, ["@starting-style"]);
            var n = [...r, "@starting-style"];
            this.addConditionalRule({
              selector: e.selector,
              rule: ae(t, Oe)
            }, n), "local" === e.type && (this.transformSimplePseudos(e, t, n), this.transformSelectors(e, t, n))
          }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(_e({
            "@font-face": t
          }));
          for (var r of this.propertyRules) e.push(_e({
            ["@property ".concat(r.name)]: r.rule
          }));
          for (var o of this.keyframesRules) e.push(_e({
            ["@keyframes ".concat(o.name)]: o.rule
          }));
          for (var a of this.layers.values()) {
            var [n, ...i] = a.reverse(), l = {
              [n]: Se
            };
            for (var s of i) l = {
              [s]: l
            };
            e.push(_e(l))
          }
          for (var c of this.rules) e.push(_e({
            [c.selector]: c.rule
          }));
          for (var d of this.conditionalRulesets)
            for (var f of d.renderToArray()) e.push(_e(f));
          return e.filter(Boolean)
        }
      }

      function _e(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          o = function(o) {
            var a, n = e[o];
            n && Array.isArray(n) ? r.push(...n.map(e => _e({
              [o]: e
            }, t))) : n && "object" == typeof n ? 0 === Object.keys(n).length || r.push("".concat(t).concat(o, " {\n").concat(_e(n, t + "  "), "\n").concat(t, "}")) : n === Se ? r.push("".concat(t).concat(o, ";")) : r.push("".concat(t).concat(o.startsWith("--") ? o : (a = o, a.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(n, ";"))
          };
        for (var a of Object.keys(e)) o(a);
        return r.join("\n")
      }
      var Ee = r(43431);
      const ze = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        Te = new Set,
        Fe = "object" == typeof Ee && Ee ? Ee : {},
        je = (e, t, r, o) => {
          "function" == typeof Fe.emitWarning ? Fe.emitWarning(e, t, r, o) : console.error(`[${r}] ${t}: ${e}`)
        };
      let Re = globalThis.AbortController,
        Pe = globalThis.AbortSignal;
      if (void 0 === Re) {
        Pe = class {
          onabort;
          _onabort = [];
          reason;
          aborted = !1;
          addEventListener(e, t) {
            this._onabort.push(t)
          }
        }, Re = class {
          constructor() {
            t()
          }
          signal = new Pe;
          abort(e) {
            if (!this.signal.aborted) {
              this.signal.reason = e, this.signal.aborted = !0;
              for (const t of this.signal._onabort) t(e);
              this.signal.onabort?.(e)
            }
          }
        };
        let e = "1" !== Fe.env?.LRU_CACHE_IGNORE_AC_WARNING;
        const t = () => {
          e && (e = !1, je("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
        }
      }
      Symbol("type");
      const De = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        Me = e => De(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? qe : null : null;
      class qe extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class Ie {
        heap;
        length;
        static #e = !1;
        static create(e) {
          const t = Me(e);
          if (!t) return [];
          Ie.#e = !0;
          const r = new Ie(e, t);
          return Ie.#e = !1, r
        }
        constructor(e, t) {
          if (!Ie.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class Ne {
        #t;
        #r;
        #o;
        #a;
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
        #p;
        #y;
        #v;
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
              return e.#p
            },
            free: e.#y,
            isBackgroundFetch: t => e.#x(t),
            backgroundFetch: (t, r, o, a) => e.#A(t, r, o, a),
            moveToTail: t => e.#O(t),
            indexes: t => e.#L(t),
            rindexes: t => e.#_(t),
            isStale: t => e.#E(t)
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
          return this.#o
        }
        get disposeAfter() {
          return this.#a
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: r,
            ttlResolution: o = 1,
            ttlAutopurge: a,
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
            fetchMethod: p,
            memoMethod: y,
            noDeleteOnFetchRejection: v,
            noDeleteOnStaleGet: b,
            allowStaleOnFetchRejection: m,
            allowStaleOnFetchAbort: w,
            ignoreFetchAbort: k
          } = e;
          if (0 !== t && !De(t)) throw new TypeError("max option must be a nonnegative integer");
          const C = t ? Me(t) : Array;
          if (!C) throw new Error("invalid max value: " + t);
          if (this.#t = t, this.#r = u, this.maxEntrySize = h || this.#r, this.sizeCalculation = g, this.sizeCalculation) {
            if (!this.#r && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== y && "function" != typeof y) throw new TypeError("memoMethod must be a function if defined");
          if (this.#i = y, void 0 !== p && "function" != typeof p) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#n = p, this.#C = !!p, this.#c = new Map, this.#d = new Array(t).fill(void 0), this.#f = new Array(t).fill(void 0), this.#u = new C(t), this.#h = new C(t), this.#g = 0, this.#p = 0, this.#y = Ie.create(t), this.#l = 0, this.#s = 0, "function" == typeof s && (this.#o = s), "function" == typeof c ? (this.#a = c, this.#v = []) : (this.#a = void 0, this.#v = void 0), this.#k = !!this.#o, this.#S = !!this.#a, this.noDisposeOnSet = !!d, this.noUpdateTTL = !!f, this.noDeleteOnFetchRejection = !!v, this.allowStaleOnFetchRejection = !!m, this.allowStaleOnFetchAbort = !!w, this.ignoreFetchAbort = !!k, 0 !== this.maxEntrySize) {
            if (0 !== this.#r && !De(this.#r)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!De(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#z()
          }
          if (this.allowStale = !!l, this.noDeleteOnStaleGet = !!b, this.updateAgeOnGet = !!n, this.updateAgeOnHas = !!i, this.ttlResolution = De(o) || 0 === o ? o : 1, this.ttlAutopurge = !!a, this.ttl = r || 0, this.ttl) {
            if (!De(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#T()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#r) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#r) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !Te.has(e))(e) && (Te.add(e), je("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, Ne))
          }
        }
        getRemainingTTL(e) {
          return this.#c.has(e) ? 1 / 0 : 0
        }
        #T() {
          const e = new qe(this.#t),
            t = new qe(this.#t);
          this.#w = e, this.#m = t, this.#F = (r, o, a = ze.now()) => {
            if (t[r] = 0 !== o ? a : 0, e[r] = o, 0 !== o && this.ttlAutopurge) {
              const e = setTimeout(() => {
                this.#E(r) && this.#j(this.#d[r], "expire")
              }, o + 1);
              e.unref && e.unref()
            }
          }, this.#R = r => {
            t[r] = 0 !== e[r] ? ze.now() : 0
          }, this.#P = (a, n) => {
            if (e[n]) {
              const i = e[n],
                l = t[n];
              if (!i || !l) return;
              a.ttl = i, a.start = l, a.now = r || o();
              const s = a.now - l;
              a.remainingTTL = i - s
            }
          };
          let r = 0;
          const o = () => {
            const e = ze.now();
            if (this.ttlResolution > 0) {
              r = e;
              const t = setTimeout(() => r = 0, this.ttlResolution);
              t.unref && t.unref()
            }
            return e
          };
          this.getRemainingTTL = a => {
            const n = this.#c.get(a);
            if (void 0 === n) return 0;
            const i = e[n],
              l = t[n];
            return i && l ? i - ((r || o()) - l) : 1 / 0
          }, this.#E = a => {
            const n = t[a],
              i = e[a];
            return !!i && !!n && (r || o()) - n > i
          }
        }
        #R = () => {};
        #P = () => {};
        #F = () => {};
        #E = () => !1;
        #z() {
          const e = new qe(this.#t);
          this.#s = 0, this.#b = e, this.#D = t => {
            this.#s -= e[t], e[t] = 0
          }, this.#M = (e, t, r, o) => {
            if (this.#x(t)) return 0;
            if (!De(r)) {
              if (!o) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
              if ("function" != typeof o) throw new TypeError("sizeCalculation must be a function");
              if (r = o(t, e), !De(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
            }
            return r
          }, this.#q = (t, r, o) => {
            if (e[t] = r, this.#r) {
              const r = this.#r - e[t];
              for (; this.#s > r;) this.#I(!0)
            }
            this.#s += e[t], o && (o.entrySize = r, o.totalCalculatedSize = this.#s)
          }
        }
        #D = e => {};
        #q = (e, t, r) => {};
        #M = (e, t, r, o) => {
          if (r || o) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };* #L({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#l)
            for (let t = this.#p; this.#N(t) && (!e && this.#E(t) || (yield t), t !== this.#g);) t = this.#h[t]
        }* #_({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#l)
            for (let t = this.#g; this.#N(t) && (!e && this.#E(t) || (yield t), t !== this.#p);) t = this.#u[t]
        }
        #N(e) {
          return void 0 !== e && this.#c.get(this.#d[e]) === e
        }* entries() {
          for (const e of this.#L()) void 0 === this.#f[e] || void 0 === this.#d[e] || this.#x(this.#f[e]) || (yield [this.#d[e], this.#f[e]])
        }* rentries() {
          for (const e of this.#_()) void 0 === this.#f[e] || void 0 === this.#d[e] || this.#x(this.#f[e]) || (yield [this.#d[e], this.#f[e]])
        }* keys() {
          for (const e of this.#L()) {
            const t = this.#d[e];
            void 0 === t || this.#x(this.#f[e]) || (yield t)
          }
        }* rkeys() {
          for (const e of this.#_()) {
            const t = this.#d[e];
            void 0 === t || this.#x(this.#f[e]) || (yield t)
          }
        }* values() {
          for (const e of this.#L()) void 0 === this.#f[e] || this.#x(this.#f[e]) || (yield this.#f[e])
        }* rvalues() {
          for (const e of this.#_()) void 0 === this.#f[e] || this.#x(this.#f[e]) || (yield this.#f[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e, t = {}) {
          for (const r of this.#L()) {
            const o = this.#f[r],
              a = this.#x(o) ? o.__staleWhileFetching : o;
            if (void 0 !== a && e(a, this.#d[r], this)) return this.get(this.#d[r], t)
          }
        }
        forEach(e, t = this) {
          for (const r of this.#L()) {
            const o = this.#f[r],
              a = this.#x(o) ? o.__staleWhileFetching : o;
            void 0 !== a && e.call(t, a, this.#d[r], this)
          }
        }
        rforEach(e, t = this) {
          for (const r of this.#_()) {
            const o = this.#f[r],
              a = this.#x(o) ? o.__staleWhileFetching : o;
            void 0 !== a && e.call(t, a, this.#d[r], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (const t of this.#_({
              allowStale: !0
            })) this.#E(t) && (this.#j(this.#d[t], "expire"), e = !0);
          return e
        }
        info(e) {
          const t = this.#c.get(e);
          if (void 0 === t) return;
          const r = this.#f[t],
            o = this.#x(r) ? r.__staleWhileFetching : r;
          if (void 0 === o) return;
          const a = {
            value: o
          };
          if (this.#w && this.#m) {
            const e = this.#w[t],
              r = this.#m[t];
            if (e && r) {
              const t = e - (ze.now() - r);
              a.ttl = t, a.start = Date.now()
            }
          }
          return this.#b && (a.size = this.#b[t]), a
        }
        dump() {
          const e = [];
          for (const t of this.#L({
              allowStale: !0
            })) {
            const r = this.#d[t],
              o = this.#f[t],
              a = this.#x(o) ? o.__staleWhileFetching : o;
            if (void 0 === a || void 0 === r) continue;
            const n = {
              value: a
            };
            if (this.#w && this.#m) {
              n.ttl = this.#w[t];
              const e = ze.now() - this.#m[t];
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
              r.start = ze.now() - e
            }
            this.set(t, r.value, r)
          }
        }
        set(e, t, r = {}) {
          if (void 0 === t) return this.delete(e), this;
          const {
            ttl: o = this.ttl,
            start: a,
            noDisposeOnSet: n = this.noDisposeOnSet,
            sizeCalculation: i = this.sizeCalculation,
            status: l
          } = r;
          let {
            noUpdateTTL: s = this.noUpdateTTL
          } = r;
          const c = this.#M(e, t, r.size || 0, i);
          if (this.maxEntrySize && c > this.maxEntrySize) return l && (l.set = "miss", l.maxEntrySizeExceeded = !0), this.#j(e, "set"), this;
          let d = 0 === this.#l ? void 0 : this.#c.get(e);
          if (void 0 === d) d = 0 === this.#l ? this.#p : 0 !== this.#y.length ? this.#y.pop() : this.#l === this.#t ? this.#I(!1) : this.#l, this.#d[d] = e, this.#f[d] = t, this.#c.set(e, d), this.#u[this.#p] = d, this.#h[d] = this.#p, this.#p = d, this.#l++, this.#q(d, c, l), l && (l.set = "add"), s = !1;
          else {
            this.#O(d);
            const r = this.#f[d];
            if (t !== r) {
              if (this.#C && this.#x(r)) {
                r.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = r;
                void 0 === t || n || (this.#k && this.#o?.(t, e, "set"), this.#S && this.#v?.push([t, e, "set"]))
              } else n || (this.#k && this.#o?.(r, e, "set"), this.#S && this.#v?.push([r, e, "set"]));
              if (this.#D(d), this.#q(d, c, l), this.#f[d] = t, l) {
                l.set = "replace";
                const e = r && this.#x(r) ? r.__staleWhileFetching : r;
                void 0 !== e && (l.oldValue = e)
              }
            } else l && (l.set = "update")
          }
          if (0 === o || this.#w || this.#T(), this.#w && (s || this.#F(d, o, a), l && this.#P(l, d)), !n && this.#S && this.#v) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#a?.(...t)
          }
          return this
        }
        pop() {
          try {
            for (; this.#l;) {
              const e = this.#f[this.#g];
              if (this.#I(!0), this.#x(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#S && this.#v) {
              const e = this.#v;
              let t;
              for (; t = e?.shift();) this.#a?.(...t)
            }
          }
        }
        #I(e) {
          const t = this.#g,
            r = this.#d[t],
            o = this.#f[t];
          return this.#C && this.#x(o) ? o.__abortController.abort(new Error("evicted")) : (this.#k || this.#S) && (this.#k && this.#o?.(o, r, "evict"), this.#S && this.#v?.push([o, r, "evict"])), this.#D(t), e && (this.#d[t] = void 0, this.#f[t] = void 0, this.#y.push(t)), 1 === this.#l ? (this.#g = this.#p = 0, this.#y.length = 0) : this.#g = this.#u[t], this.#c.delete(r), this.#l--, t
        }
        has(e, t = {}) {
          const {
            updateAgeOnHas: r = this.updateAgeOnHas,
            status: o
          } = t, a = this.#c.get(e);
          if (void 0 !== a) {
            const e = this.#f[a];
            if (this.#x(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#E(a)) return r && this.#R(a), o && (o.has = "hit", this.#P(o, a)), !0;
            o && (o.has = "stale", this.#P(o, a))
          } else o && (o.has = "miss");
          return !1
        }
        peek(e, t = {}) {
          const {
            allowStale: r = this.allowStale
          } = t, o = this.#c.get(e);
          if (void 0 === o || !r && this.#E(o)) return;
          const a = this.#f[o];
          return this.#x(a) ? a.__staleWhileFetching : a
        }
        #A(e, t, r, o) {
          const a = void 0 === t ? void 0 : this.#f[t];
          if (this.#x(a)) return a;
          const n = new Re,
            {
              signal: i
            } = r;
          i?.addEventListener("abort", () => n.abort(i.reason), {
            signal: n.signal
          });
          const l = {
              signal: n.signal,
              options: r,
              context: o
            },
            s = (o, a = !1) => {
              const {
                aborted: i
              } = n.signal, s = r.ignoreFetchAbort && void 0 !== o;
              if (r.status && (i && !a ? (r.status.fetchAborted = !0, r.status.fetchError = n.signal.reason, s && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), i && !s && !a) return c(n.signal.reason);
              const f = d;
              return this.#f[t] === d && (void 0 === o ? f.__staleWhileFetching ? this.#f[t] = f.__staleWhileFetching : this.#j(e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, o, l.options))), o
            },
            c = o => {
              const {
                aborted: a
              } = n.signal, i = a && r.allowStaleOnFetchAbort, l = i || r.allowStaleOnFetchRejection, s = l || r.noDeleteOnFetchRejection, c = d;
              if (this.#f[t] === d && (s && void 0 !== c.__staleWhileFetching ? i || (this.#f[t] = c.__staleWhileFetching) : this.#j(e, "fetch")), l) return r.status && void 0 !== c.__staleWhileFetching && (r.status.returnedStale = !0), c.__staleWhileFetching;
              if (c.__returned === c) throw o
            };
          r.status && (r.status.fetchDispatched = !0);
          const d = new Promise((t, o) => {
              const i = this.#n?.(e, a, l);
              i && i instanceof Promise && i.then(e => t(void 0 === e ? void 0 : e), o), n.signal.addEventListener("abort", () => {
                r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = e => s(e, !0)))
              })
            }).then(s, e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), c(e))),
            f = Object.assign(d, {
              __abortController: n,
              __staleWhileFetching: a,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, f, {
            ...l.options,
            status: void 0
          }), t = this.#c.get(e)) : this.#f[t] = f, f
        }
        #x(e) {
          if (!this.#C) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof Re
        }
        async fetch(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: o = this.updateAgeOnGet,
            noDeleteOnStaleGet: a = this.noDeleteOnStaleGet,
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
            forceRefresh: p = !1,
            status: y,
            signal: v
          } = t;
          if (!this.#C) return y && (y.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: o,
            noDeleteOnStaleGet: a,
            status: y
          });
          const b = {
            allowStale: r,
            updateAgeOnGet: o,
            noDeleteOnStaleGet: a,
            ttl: n,
            noDisposeOnSet: i,
            size: l,
            sizeCalculation: s,
            noUpdateTTL: c,
            noDeleteOnFetchRejection: d,
            allowStaleOnFetchRejection: f,
            allowStaleOnFetchAbort: h,
            ignoreFetchAbort: u,
            status: y,
            signal: v
          };
          let m = this.#c.get(e);
          if (void 0 === m) {
            y && (y.fetch = "miss");
            const t = this.#A(e, m, b, g);
            return t.__returned = t
          } {
            const t = this.#f[m];
            if (this.#x(t)) {
              const e = r && void 0 !== t.__staleWhileFetching;
              return y && (y.fetch = "inflight", e && (y.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const a = this.#E(m);
            if (!p && !a) return y && (y.fetch = "hit"), this.#O(m), o && this.#R(m), y && this.#P(y, m), t;
            const n = this.#A(e, m, b, g),
              i = void 0 !== n.__staleWhileFetching && r;
            return y && (y.fetch = a ? "stale" : "refresh", i && a && (y.returnedStale = !0)), i ? n.__staleWhileFetching : n.__returned = n
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
            context: o,
            forceRefresh: a,
            ...n
          } = t, i = this.get(e, n);
          if (!a && void 0 !== i) return i;
          const l = r(e, i, {
            options: n,
            context: o
          });
          return this.set(e, l, n), l
        }
        get(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: o = this.updateAgeOnGet,
            noDeleteOnStaleGet: a = this.noDeleteOnStaleGet,
            status: n
          } = t, i = this.#c.get(e);
          if (void 0 !== i) {
            const t = this.#f[i],
              l = this.#x(t);
            return n && this.#P(n, i), this.#E(i) ? (n && (n.get = "stale"), l ? (n && r && void 0 !== t.__staleWhileFetching && (n.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (a || this.#j(e, "expire"), n && r && (n.returnedStale = !0), r ? t : void 0)) : (n && (n.get = "hit"), l ? t.__staleWhileFetching : (this.#O(i), o && this.#R(i), t))
          }
          n && (n.get = "miss")
        }
        #B(e, t) {
          this.#h[t] = e, this.#u[e] = t
        }
        #O(e) {
          e !== this.#p && (e === this.#g ? this.#g = this.#u[e] : this.#B(this.#h[e], this.#u[e]), this.#B(this.#p, e), this.#p = e)
        }
        delete(e) {
          return this.#j(e, "delete")
        }
        #j(e, t) {
          let r = !1;
          if (0 !== this.#l) {
            const o = this.#c.get(e);
            if (void 0 !== o)
              if (r = !0, 1 === this.#l) this.#$(t);
              else {
                this.#D(o);
                const r = this.#f[o];
                if (this.#x(r) ? r.__abortController.abort(new Error("deleted")) : (this.#k || this.#S) && (this.#k && this.#o?.(r, e, t), this.#S && this.#v?.push([r, e, t])), this.#c.delete(e), this.#d[o] = void 0, this.#f[o] = void 0, o === this.#p) this.#p = this.#h[o];
                else if (o === this.#g) this.#g = this.#u[o];
                else {
                  const e = this.#h[o];
                  this.#u[e] = this.#u[o];
                  const t = this.#u[o];
                  this.#h[t] = this.#h[o]
                }
                this.#l--, this.#y.push(o)
              }
          }
          if (this.#S && this.#v?.length) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#a?.(...t)
          }
          return r
        }
        clear() {
          return this.#$("delete")
        }
        #$(e) {
          for (const t of this.#_({
              allowStale: !0
            })) {
            const r = this.#f[t];
            if (this.#x(r)) r.__abortController.abort(new Error("deleted"));
            else {
              const o = this.#d[t];
              this.#k && this.#o?.(r, o, e), this.#S && this.#v?.push([r, o, e])
            }
          }
          if (this.#c.clear(), this.#f.fill(void 0), this.#d.fill(void 0), this.#w && this.#m && (this.#w.fill(0), this.#m.fill(0)), this.#b && this.#b.fill(0), this.#g = 0, this.#p = 0, this.#y.length = 0, this.#s = 0, this.#l = 0, this.#S && this.#v) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#a?.(...t)
          }
        }
      }
      r(76597);
      var Be = new Set,
        $e = [],
        We = [];
      c || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        c = !0, s.push(e)
      })({
        appendCss: e => {
          We.push(e)
        },
        registerClassName: e => {
          Be.add(e)
        },
        registerComposition: e => {
          $e.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: r,
              composedClassLists: o
            } = e, a = new Le(t, o);
            for (var n of r) a.processCssObj(n);
            return a.toCss()
          }({
            localClassNames: Array.from(Be),
            composedClassLists: $e,
            cssObjs: We
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: r
            } = e, o = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, a = n[o];
            if (!a) {
              var i = document.createElement("style");
              t.packageName && i.setAttribute("data-package", t.packageName), i.setAttribute("data-file", t.filePath), i.setAttribute("type", "text/css"), a = n[o] = i, document.head.appendChild(i)
            }
            a.innerHTML = r
          })({
            fileScope: e,
            css: t
          }), We = []
        },
        getIdentOption: () => "short"
      });
      new Ne({
        max: 500
      })
    },
    64001(e, t, r) {
      r.d(t, {
        D: () => a
      });
      var o = r(73481);

      function a(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var a = e;
          (0, o.Bx)(t, (e, t) => {
            if (null != e) {
              var n = (0, o.Jt)(a, t);
              r[(0, o.Tm)(n)] = String(e)
            }
          })
        } else {
          var n = e;
          for (var i in n) {
            var l = n[i];
            null != l && (r[(0, o.Tm)(i)] = l)
          }
        }
        return Object.defineProperty(r, "toString", {
          value: function() {
            return Object.keys(this).map(e => "".concat(e, ":").concat(this[e])).join(";")
          },
          writable: !1
        }), r
      }
    },
    73481(e, t, r) {
      function o(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function a(e, t) {
        var r = e;
        for (var o of t) {
          if (!(o in r)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
          r = r[o]
        }
        return r
      }

      function n(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          o = {};
        for (var a in e) {
          var i = e[a],
            l = [...r, a];
          "string" == typeof i || "number" == typeof i || null == i ? o[a] = t(i, l) : "object" != typeof i || Array.isArray(i) ? console.warn('Skipping invalid key "'.concat(l.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(i) ? "Array" : typeof i, '"')) : o[a] = n(i, t, l)
        }
        return o
      }
      r.d(t, {
        Bx: () => n,
        Jt: () => a,
        Tm: () => o
      })
    },
    76597(e) {
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

      function o(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? l((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function a(e, t, r) {
        return e.concat(t).map(function(e) {
          return o(e, r)
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
        (s = s || {}).arrayMerge = s.arrayMerge || a, s.isMergeableObject = s.isMergeableObject || t, s.cloneUnlessOtherwiseSpecified = o;
        var c = Array.isArray(r);
        return c === Array.isArray(e) ? c ? s.arrayMerge(e, r, s) : function(e, t, r) {
          var a = {};
          return r.isMergeableObject(e) && n(e).forEach(function(t) {
            a[t] = o(e[t], r)
          }), n(t).forEach(function(n) {
            (function(e, t) {
              return i(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, n) || (i(e, n) && r.isMergeableObject(t[n]) ? a[n] = function(e, t) {
              if (!t.customMerge) return l;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : l
            }(n, r)(e[n], t[n], r) : a[n] = o(t[n], r))
          }), a
        }(e, r, s) : o(r, s)
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
    56848(e, t, r) {
      var o = r(70502),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        n = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        l = {};

      function s(e) {
        return o.isMemo(e) ? i : l[e.$$typeof] || a
      }
      l[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, l[o.Memo] = i;
      var c = Object.defineProperty,
        d = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        u = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        g = Object.prototype;
      e.exports = function e(t, r, o) {
        if ("string" != typeof r) {
          if (g) {
            var a = h(r);
            a && a !== g && e(t, a, o)
          }
          var i = d(r);
          f && (i = i.concat(f(r)));
          for (var l = s(t), p = s(r), y = 0; y < i.length; ++y) {
            var v = i[y];
            if (!(n[v] || o && o[v] || p && p[v] || l && l[v])) {
              var b = u(r, v);
              try {
                c(t, v, b)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    56458(e, t) {
      var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        a = r ? Symbol.for("react.portal") : 60106,
        n = r ? Symbol.for("react.fragment") : 60107,
        i = r ? Symbol.for("react.strict_mode") : 60108,
        l = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        d = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        u = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        g = r ? Symbol.for("react.suspense_list") : 60120,
        p = r ? Symbol.for("react.memo") : 60115,
        y = r ? Symbol.for("react.lazy") : 60116,
        v = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        m = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119;

      function k(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case o:
              switch (e = e.type) {
                case d:
                case f:
                case n:
                case l:
                case i:
                case h:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case u:
                    case y:
                    case p:
                    case s:
                      return e;
                    default:
                      return t
                  }
              }
            case a:
              return t
          }
        }
      }

      function C(e) {
        return k(e) === f
      }
      t.AsyncMode = d, t.ConcurrentMode = f, t.ContextConsumer = c, t.ContextProvider = s, t.Element = o, t.ForwardRef = u, t.Fragment = n, t.Lazy = y, t.Memo = p, t.Portal = a, t.Profiler = l, t.StrictMode = i, t.Suspense = h, t.isAsyncMode = function(e) {
        return C(e) || k(e) === d
      }, t.isConcurrentMode = C, t.isContextConsumer = function(e) {
        return k(e) === c
      }, t.isContextProvider = function(e) {
        return k(e) === s
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
      }, t.isForwardRef = function(e) {
        return k(e) === u
      }, t.isFragment = function(e) {
        return k(e) === n
      }, t.isLazy = function(e) {
        return k(e) === y
      }, t.isMemo = function(e) {
        return k(e) === p
      }, t.isPortal = function(e) {
        return k(e) === a
      }, t.isProfiler = function(e) {
        return k(e) === l
      }, t.isStrictMode = function(e) {
        return k(e) === i
      }, t.isSuspense = function(e) {
        return k(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === n || e === f || e === l || e === i || e === h || e === g || "object" == typeof e && null !== e && (e.$$typeof === y || e.$$typeof === p || e.$$typeof === s || e.$$typeof === c || e.$$typeof === u || e.$$typeof === b || e.$$typeof === m || e.$$typeof === w || e.$$typeof === v)
      }, t.typeOf = k
    },
    70502(e, t, r) {
      e.exports = r(56458)
    },
    10376(e, t, r) {
      r.d(t, {
        UE: () => Se,
        ll: () => ve,
        rD: () => Ae,
        UU: () => we,
        jD: () => Ce,
        ER: () => xe,
        cY: () => be,
        BN: () => me,
        Ej: () => ke
      });
      const o = ["top", "right", "bottom", "left"],
        a = Math.min,
        n = Math.max,
        i = Math.round,
        l = Math.floor,
        s = e => ({
          x: e,
          y: e
        }),
        c = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

      function d(e, t, r) {
        return n(e, a(t, r))
      }

      function f(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function u(e) {
        return e.split("-")[0]
      }

      function h(e) {
        return e.split("-")[1]
      }

      function g(e) {
        return "x" === e ? "y" : "x"
      }

      function p(e) {
        return "y" === e ? "height" : "width"
      }

      function y(e) {
        const t = e[0];
        return "t" === t || "b" === t ? "y" : "x"
      }

      function v(e) {
        return g(y(e))
      }

      function b(e) {
        return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
      }
      const m = ["left", "right"],
        w = ["right", "left"],
        k = ["top", "bottom"],
        C = ["bottom", "top"];

      function S(e) {
        const t = u(e);
        return c[t] + e.slice(t.length)
      }

      function x(e) {
        return "number" != typeof e ? function(e) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
          }
        }(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function A(e) {
        const {
          x: t,
          y: r,
          width: o,
          height: a
        } = e;
        return {
          width: o,
          height: a,
          top: r,
          left: t,
          right: t + o,
          bottom: r + a,
          x: t,
          y: r
        }
      }

      function O(e, t, r) {
        let {
          reference: o,
          floating: a
        } = e;
        const n = y(t),
          i = v(t),
          l = p(i),
          s = u(t),
          c = "y" === n,
          d = o.x + o.width / 2 - a.width / 2,
          f = o.y + o.height / 2 - a.height / 2,
          g = o[l] / 2 - a[l] / 2;
        let b;
        switch (s) {
          case "top":
            b = {
              x: d,
              y: o.y - a.height
            };
            break;
          case "bottom":
            b = {
              x: d,
              y: o.y + o.height
            };
            break;
          case "right":
            b = {
              x: o.x + o.width,
              y: f
            };
            break;
          case "left":
            b = {
              x: o.x - a.width,
              y: f
            };
            break;
          default:
            b = {
              x: o.x,
              y: o.y
            }
        }
        switch (h(t)) {
          case "start":
            b[i] -= g * (r && c ? -1 : 1);
            break;
          case "end":
            b[i] += g * (r && c ? -1 : 1)
        }
        return b
      }
      async function L(e, t) {
        var r;
        void 0 === t && (t = {});
        const {
          x: o,
          y: a,
          platform: n,
          rects: i,
          elements: l,
          strategy: s
        } = e, {
          boundary: c = "clippingAncestors",
          rootBoundary: d = "viewport",
          elementContext: u = "floating",
          altBoundary: h = !1,
          padding: g = 0
        } = f(t, e), p = x(g), y = l[h ? "floating" === u ? "reference" : "floating" : u], v = A(await n.getClippingRect({
          element: null == (r = await (null == n.isElement ? void 0 : n.isElement(y))) || r ? y : y.contextElement || await (null == n.getDocumentElement ? void 0 : n.getDocumentElement(l.floating)),
          boundary: c,
          rootBoundary: d,
          strategy: s
        })), b = "floating" === u ? {
          x: o,
          y: a,
          width: i.floating.width,
          height: i.floating.height
        } : i.reference, m = await (null == n.getOffsetParent ? void 0 : n.getOffsetParent(l.floating)), w = await (null == n.isElement ? void 0 : n.isElement(m)) && await (null == n.getScale ? void 0 : n.getScale(m)) || {
          x: 1,
          y: 1
        }, k = A(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: b,
          offsetParent: m,
          strategy: s
        }) : b);
        return {
          top: (v.top - k.top + p.top) / w.y,
          bottom: (k.bottom - v.bottom + p.bottom) / w.y,
          left: (v.left - k.left + p.left) / w.x,
          right: (k.right - v.right + p.right) / w.x
        }
      }

      function _(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function E(e) {
        return o.some(t => e[t] >= 0)
      }
      const z = new Set(["left", "top"]);

      function T() {
        return "undefined" != typeof window
      }

      function F(e) {
        return P(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function j(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function R(e) {
        var t;
        return null == (t = (P(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function P(e) {
        return !!T() && (e instanceof Node || e instanceof j(e).Node)
      }

      function D(e) {
        return !!T() && (e instanceof Element || e instanceof j(e).Element)
      }

      function M(e) {
        return !!T() && (e instanceof HTMLElement || e instanceof j(e).HTMLElement)
      }

      function q(e) {
        return !(!T() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof j(e).ShadowRoot)
      }

      function I(e) {
        const {
          overflow: t,
          overflowX: r,
          overflowY: o,
          display: a
        } = Y(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && "inline" !== a && "contents" !== a
      }

      function N(e) {
        return /^(table|td|th)$/.test(F(e))
      }

      function B(e) {
        try {
          if (e.matches(":popover-open")) return !0
        } catch (e) {}
        try {
          return e.matches(":modal")
        } catch (e) {
          return !1
        }
      }
      const $ = /transform|translate|scale|rotate|perspective|filter/,
        W = /paint|layout|strict|content/,
        H = e => !!e && "none" !== e;
      let U;

      function V(e) {
        const t = D(e) ? Y(e) : e;
        return H(t.transform) || H(t.translate) || H(t.scale) || H(t.rotate) || H(t.perspective) || !G() && (H(t.backdropFilter) || H(t.filter)) || $.test(t.willChange || "") || W.test(t.contain || "")
      }

      function G() {
        return null == U && (U = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), U
      }

      function X(e) {
        return /^(html|body|#document)$/.test(F(e))
      }

      function Y(e) {
        return j(e).getComputedStyle(e)
      }

      function J(e) {
        return D(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function Q(e) {
        if ("html" === F(e)) return e;
        const t = e.assignedSlot || e.parentNode || q(e) && e.host || R(e);
        return q(t) ? t.host : t
      }

      function Z(e) {
        const t = Q(e);
        return X(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : M(t) && I(t) ? t : Z(t)
      }

      function K(e, t, r) {
        var o;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        const a = Z(e),
          n = a === (null == (o = e.ownerDocument) ? void 0 : o.body),
          i = j(a);
        if (n) {
          const e = ee(i);
          return t.concat(i, i.visualViewport || [], I(a) ? a : [], e && r ? K(e) : [])
        }
        return t.concat(a, K(a, [], r))
      }

      function ee(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function te(e) {
        const t = Y(e);
        let r = parseFloat(t.width) || 0,
          o = parseFloat(t.height) || 0;
        const a = M(e),
          n = a ? e.offsetWidth : r,
          l = a ? e.offsetHeight : o,
          s = i(r) !== n || i(o) !== l;
        return s && (r = n, o = l), {
          width: r,
          height: o,
          $: s
        }
      }

      function re(e) {
        return D(e) ? e : e.contextElement
      }

      function oe(e) {
        const t = re(e);
        if (!M(t)) return s(1);
        const r = t.getBoundingClientRect(),
          {
            width: o,
            height: a,
            $: n
          } = te(t);
        let l = (n ? i(r.width) : r.width) / o,
          c = (n ? i(r.height) : r.height) / a;
        return l && Number.isFinite(l) || (l = 1), c && Number.isFinite(c) || (c = 1), {
          x: l,
          y: c
        }
      }
      const ae = s(0);

      function ne(e) {
        const t = j(e);
        return G() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : ae
      }

      function ie(e, t, r, o) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const a = e.getBoundingClientRect(),
          n = re(e);
        let i = s(1);
        t && (o ? D(o) && (i = oe(o)) : i = oe(e));
        const l = function(e, t, r) {
          return void 0 === t && (t = !1), !(!r || t && r !== j(e)) && t
        }(n, r, o) ? ne(n) : s(0);
        let c = (a.left + l.x) / i.x,
          d = (a.top + l.y) / i.y,
          f = a.width / i.x,
          u = a.height / i.y;
        if (n) {
          const e = j(n),
            t = o && D(o) ? j(o) : o;
          let r = e,
            a = ee(r);
          for (; a && o && t !== r;) {
            const e = oe(a),
              t = a.getBoundingClientRect(),
              o = Y(a),
              n = t.left + (a.clientLeft + parseFloat(o.paddingLeft)) * e.x,
              i = t.top + (a.clientTop + parseFloat(o.paddingTop)) * e.y;
            c *= e.x, d *= e.y, f *= e.x, u *= e.y, c += n, d += i, r = j(a), a = ee(r)
          }
        }
        return A({
          width: f,
          height: u,
          x: c,
          y: d
        })
      }

      function le(e, t) {
        const r = J(e).scrollLeft;
        return t ? t.left + r : ie(R(e)).left + r
      }

      function se(e, t) {
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - le(e, r),
          y: r.top + t.scrollTop
        }
      }

      function ce(e, t, r) {
        let o;
        if ("viewport" === t) o = function(e, t) {
          const r = j(e),
            o = R(e),
            a = r.visualViewport;
          let n = o.clientWidth,
            i = o.clientHeight,
            l = 0,
            s = 0;
          if (a) {
            n = a.width, i = a.height;
            const e = G();
            (!e || e && "fixed" === t) && (l = a.offsetLeft, s = a.offsetTop)
          }
          const c = le(o);
          if (c <= 0) {
            const e = o.ownerDocument,
              t = e.body,
              r = getComputedStyle(t),
              a = "CSS1Compat" === e.compatMode && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0,
              i = Math.abs(o.clientWidth - t.clientWidth - a);
            i <= 25 && (n -= i)
          } else c <= 25 && (n += c);
          return {
            width: n,
            height: i,
            x: l,
            y: s
          }
        }(e, r);
        else if ("document" === t) o = function(e) {
          const t = R(e),
            r = J(e),
            o = e.ownerDocument.body,
            a = n(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
            i = n(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
          let l = -r.scrollLeft + le(e);
          const s = -r.scrollTop;
          return "rtl" === Y(o).direction && (l += n(t.clientWidth, o.clientWidth) - a), {
            width: a,
            height: i,
            x: l,
            y: s
          }
        }(R(e));
        else if (D(t)) o = function(e, t) {
          const r = ie(e, !0, "fixed" === t),
            o = r.top + e.clientTop,
            a = r.left + e.clientLeft,
            n = M(e) ? oe(e) : s(1);
          return {
            width: e.clientWidth * n.x,
            height: e.clientHeight * n.y,
            x: a * n.x,
            y: o * n.y
          }
        }(t, r);
        else {
          const r = ne(e);
          o = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
          }
        }
        return A(o)
      }

      function de(e, t) {
        const r = Q(e);
        return !(r === t || !D(r) || X(r)) && ("fixed" === Y(r).position || de(r, t))
      }

      function fe(e, t, r) {
        const o = M(t),
          a = R(t),
          n = "fixed" === r,
          i = ie(e, !0, n, t);
        let l = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const c = s(0);

        function d() {
          c.x = le(a)
        }
        if (o || !o && !n)
          if (("body" !== F(t) || I(a)) && (l = J(t)), o) {
            const e = ie(t, !0, n, t);
            c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
          } else a && d();
        n && !o && a && d();
        const f = !a || o || n ? s(0) : se(a, l);
        return {
          x: i.left + l.scrollLeft - c.x - f.x,
          y: i.top + l.scrollTop - c.y - f.y,
          width: i.width,
          height: i.height
        }
      }

      function ue(e) {
        return "static" === Y(e).position
      }

      function he(e, t) {
        if (!M(e) || "fixed" === Y(e).position) return null;
        if (t) return t(e);
        let r = e.offsetParent;
        return R(e) === r && (r = r.ownerDocument.body), r
      }

      function ge(e, t) {
        const r = j(e);
        if (B(e)) return r;
        if (!M(e)) {
          let t = Q(e);
          for (; t && !X(t);) {
            if (D(t) && !ue(t)) return t;
            t = Q(t)
          }
          return r
        }
        let o = he(e, t);
        for (; o && N(o) && ue(o);) o = he(o, t);
        return o && X(o) && ue(o) && !V(o) ? r : o || function(e) {
          let t = Q(e);
          for (; M(t) && !X(t);) {
            if (V(t)) return t;
            if (B(t)) return null;
            t = Q(t)
          }
          return null
        }(e) || r
      }
      const pe = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: r,
            offsetParent: o,
            strategy: a
          } = e;
          const n = "fixed" === a,
            i = R(o),
            l = !!t && B(t.floating);
          if (o === i || l && n) return r;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            d = s(1);
          const f = s(0),
            u = M(o);
          if ((u || !u && !n) && (("body" !== F(o) || I(i)) && (c = J(o)), u)) {
            const e = ie(o);
            d = oe(o), f.x = e.x + o.clientLeft, f.y = e.y + o.clientTop
          }
          const h = !i || u || n ? s(0) : se(i, c);
          return {
            width: r.width * d.x,
            height: r.height * d.y,
            x: r.x * d.x - c.scrollLeft * d.x + f.x + h.x,
            y: r.y * d.y - c.scrollTop * d.y + f.y + h.y
          }
        },
        getDocumentElement: R,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: r,
            rootBoundary: o,
            strategy: i
          } = e;
          const l = [..."clippingAncestors" === r ? B(t) ? [] : function(e, t) {
              const r = t.get(e);
              if (r) return r;
              let o = K(e, [], !1).filter(e => D(e) && "body" !== F(e)),
                a = null;
              const n = "fixed" === Y(e).position;
              let i = n ? Q(e) : e;
              for (; D(i) && !X(i);) {
                const t = Y(i),
                  r = V(i);
                r || "fixed" !== t.position || (a = null), (n ? !r && !a : !r && "static" === t.position && a && ("absolute" === a.position || "fixed" === a.position) || I(i) && !r && de(e, i)) ? o = o.filter(e => e !== i) : a = t, i = Q(i)
              }
              return t.set(e, o), o
            }(t, this._c) : [].concat(r), o],
            s = ce(t, l[0], i);
          let c = s.top,
            d = s.right,
            f = s.bottom,
            u = s.left;
          for (let e = 1; e < l.length; e++) {
            const r = ce(t, l[e], i);
            c = n(r.top, c), d = a(r.right, d), f = a(r.bottom, f), u = n(r.left, u)
          }
          return {
            width: d - u,
            height: f - c,
            x: u,
            y: c
          }
        },
        getOffsetParent: ge,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || ge,
            r = this.getDimensions,
            o = await r(e.floating);
          return {
            reference: fe(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: o.width,
              height: o.height
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: r
          } = te(e);
          return {
            width: t,
            height: r
          }
        },
        getScale: oe,
        isElement: D,
        isRTL: function(e) {
          return "rtl" === Y(e).direction
        }
      };

      function ye(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }

      function ve(e, t, r, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: i = !0,
          ancestorResize: s = !0,
          elementResize: c = "function" == typeof ResizeObserver,
          layoutShift: d = "function" == typeof IntersectionObserver,
          animationFrame: f = !1
        } = o, u = re(e), h = i || s ? [...u ? K(u) : [], ...t ? K(t) : []] : [];
        h.forEach(e => {
          i && e.addEventListener("scroll", r, {
            passive: !0
          }), s && e.addEventListener("resize", r)
        });
        const g = u && d ? function(e, t) {
          let r, o = null;
          const i = R(e);

          function s() {
            var e;
            clearTimeout(r), null == (e = o) || e.disconnect(), o = null
          }
          return function c(d, f) {
            void 0 === d && (d = !1), void 0 === f && (f = 1), s();
            const u = e.getBoundingClientRect(),
              {
                left: h,
                top: g,
                width: p,
                height: y
              } = u;
            if (d || t(), !p || !y) return;
            const v = {
              rootMargin: -l(g) + "px " + -l(i.clientWidth - (h + p)) + "px " + -l(i.clientHeight - (g + y)) + "px " + -l(h) + "px",
              threshold: n(0, a(1, f)) || 1
            };
            let b = !0;

            function m(t) {
              const o = t[0].intersectionRatio;
              if (o !== f) {
                if (!b) return c();
                o ? c(!1, o) : r = setTimeout(() => {
                  c(!1, 1e-7)
                }, 1e3)
              }
              1 !== o || ye(u, e.getBoundingClientRect()) || c(), b = !1
            }
            try {
              o = new IntersectionObserver(m, {
                ...v,
                root: i.ownerDocument
              })
            } catch (e) {
              o = new IntersectionObserver(m, v)
            }
            o.observe(e)
          }(!0), s
        }(u, r) : null;
        let p, y = -1,
          v = null;
        c && (v = new ResizeObserver(e => {
          let [o] = e;
          o && o.target === u && v && t && (v.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
            var e;
            null == (e = v) || e.observe(t)
          })), r()
        }), u && !f && v.observe(u), t && v.observe(t));
        let b = f ? ie(e) : null;
        return f && function t() {
          const o = ie(e);
          b && !ye(b, o) && r(), b = o, p = requestAnimationFrame(t)
        }(), r(), () => {
          var e;
          h.forEach(e => {
            i && e.removeEventListener("scroll", r), s && e.removeEventListener("resize", r)
          }), null == g || g(), null == (e = v) || e.disconnect(), v = null, f && cancelAnimationFrame(p)
        }
      }
      const be = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              var r, o;
              const {
                x: a,
                y: n,
                placement: i,
                middlewareData: l
              } = t, s = await async function(e, t) {
                const {
                  placement: r,
                  platform: o,
                  elements: a
                } = e, n = await (null == o.isRTL ? void 0 : o.isRTL(a.floating)), i = u(r), l = h(r), s = "y" === y(r), c = z.has(i) ? -1 : 1, d = n && s ? -1 : 1, g = f(t, e);
                let {
                  mainAxis: p,
                  crossAxis: v,
                  alignmentAxis: b
                } = "number" == typeof g ? {
                  mainAxis: g,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: g.mainAxis || 0,
                  crossAxis: g.crossAxis || 0,
                  alignmentAxis: g.alignmentAxis
                };
                return l && "number" == typeof b && (v = "end" === l ? -1 * b : b), s ? {
                  x: v * d,
                  y: p * c
                } : {
                  x: p * c,
                  y: v * d
                }
              }(t, e);
              return i === (null == (r = l.offset) ? void 0 : r.placement) && null != (o = l.arrow) && o.alignmentOffset ? {} : {
                x: a + s.x,
                y: n + s.y,
                data: {
                  ...s,
                  placement: i
                }
              }
            }
          }
        },
        me = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: r,
                y: o,
                placement: a,
                platform: n
              } = t, {
                mainAxis: i = !0,
                crossAxis: l = !1,
                limiter: s = {
                  fn: e => {
                    let {
                      x: t,
                      y: r
                    } = e;
                    return {
                      x: t,
                      y: r
                    }
                  }
                },
                ...c
              } = f(e, t), h = {
                x: r,
                y: o
              }, p = await n.detectOverflow(t, c), v = y(u(a)), b = g(v);
              let m = h[b],
                w = h[v];
              if (i) {
                const e = "y" === b ? "bottom" : "right";
                m = d(m + p["y" === b ? "top" : "left"], m, m - p[e])
              }
              if (l) {
                const e = "y" === v ? "bottom" : "right";
                w = d(w + p["y" === v ? "top" : "left"], w, w - p[e])
              }
              const k = s.fn({
                ...t,
                [b]: m,
                [v]: w
              });
              return {
                ...k,
                data: {
                  x: k.x - r,
                  y: k.y - o,
                  enabled: {
                    [b]: i,
                    [v]: l
                  }
                }
              }
            }
          }
        },
        we = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var r, o;
              const {
                placement: a,
                middlewareData: n,
                rects: i,
                initialPlacement: l,
                platform: s,
                elements: c
              } = t, {
                mainAxis: d = !0,
                crossAxis: g = !0,
                fallbackPlacements: x,
                fallbackStrategy: A = "bestFit",
                fallbackAxisSideDirection: O = "none",
                flipAlignment: L = !0,
                ..._
              } = f(e, t);
              if (null != (r = n.arrow) && r.alignmentOffset) return {};
              const E = u(a),
                z = y(l),
                T = u(l) === l,
                F = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                j = x || (T || !L ? [S(l)] : function(e) {
                  const t = S(e);
                  return [b(e), t, b(t)]
                }(l)),
                R = "none" !== O;
              !x && R && j.push(... function(e, t, r, o) {
                const a = h(e);
                let n = function(e, t, r) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return r ? t ? w : m : t ? m : w;
                    case "left":
                    case "right":
                      return t ? k : C;
                    default:
                      return []
                  }
                }(u(e), "start" === r, o);
                return a && (n = n.map(e => e + "-" + a), t && (n = n.concat(n.map(b)))), n
              }(l, L, O, F));
              const P = [l, ...j],
                D = await s.detectOverflow(t, _),
                M = [];
              let q = (null == (o = n.flip) ? void 0 : o.overflows) || [];
              if (d && M.push(D[E]), g) {
                const e = function(e, t, r) {
                  void 0 === r && (r = !1);
                  const o = h(e),
                    a = v(e),
                    n = p(a);
                  let i = "x" === a ? o === (r ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return t.reference[n] > t.floating[n] && (i = S(i)), [i, S(i)]
                }(a, i, F);
                M.push(D[e[0]], D[e[1]])
              }
              if (q = [...q, {
                  placement: a,
                  overflows: M
                }], !M.every(e => e <= 0)) {
                var I, N;
                const e = ((null == (I = n.flip) ? void 0 : I.index) || 0) + 1,
                  t = P[e];
                if (t && ("alignment" !== g || z === y(t) || q.every(e => y(e.placement) !== z || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: q
                  },
                  reset: {
                    placement: t
                  }
                };
                let r = null == (N = q.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : N.placement;
                if (!r) switch (A) {
                  case "bestFit": {
                    var B;
                    const e = null == (B = q.filter(e => {
                      if (R) {
                        const t = y(e.placement);
                        return t === z || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : B[0];
                    e && (r = e);
                    break
                  }
                  case "initialPlacement":
                    r = l
                }
                if (a !== r) return {
                  reset: {
                    placement: r
                  }
                }
              }
              return {}
            }
          }
        },
        ke = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              var r, o;
              const {
                placement: i,
                rects: l,
                platform: s,
                elements: c
              } = t, {
                apply: d = () => {},
                ...g
              } = f(e, t), p = await s.detectOverflow(t, g), v = u(i), b = h(i), m = "y" === y(i), {
                width: w,
                height: k
              } = l.floating;
              let C, S;
              "top" === v || "bottom" === v ? (C = v, S = b === (await (null == s.isRTL ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (S = v, C = "end" === b ? "top" : "bottom");
              const x = k - p.top - p.bottom,
                A = w - p.left - p.right,
                O = a(k - p[C], x),
                L = a(w - p[S], A),
                _ = !t.middlewareData.shift;
              let E = O,
                z = L;
              if (null != (r = t.middlewareData.shift) && r.enabled.x && (z = A), null != (o = t.middlewareData.shift) && o.enabled.y && (E = x), _ && !b) {
                const e = n(p.left, 0),
                  t = n(p.right, 0),
                  r = n(p.top, 0),
                  o = n(p.bottom, 0);
                m ? z = w - 2 * (0 !== e || 0 !== t ? e + t : n(p.left, p.right)) : E = k - 2 * (0 !== r || 0 !== o ? r + o : n(p.top, p.bottom))
              }
              await d({
                ...t,
                availableWidth: z,
                availableHeight: E
              });
              const T = await s.getDimensions(c.floating);
              return w !== T.width || k !== T.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        Ce = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: r,
                platform: o
              } = t, {
                strategy: a = "referenceHidden",
                ...n
              } = f(e, t);
              switch (a) {
                case "referenceHidden": {
                  const e = _(await o.detectOverflow(t, {
                    ...n,
                    elementContext: "reference"
                  }), r.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: E(e)
                    }
                  }
                }
                case "escaped": {
                  const e = _(await o.detectOverflow(t, {
                    ...n,
                    altBoundary: !0
                  }), r.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: E(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        Se = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: r,
              y: o,
              placement: n,
              rects: i,
              platform: l,
              elements: s,
              middlewareData: c
            } = t, {
              element: u,
              padding: g = 0
            } = f(e, t) || {};
            if (null == u) return {};
            const y = x(g),
              b = {
                x: r,
                y: o
              },
              m = v(n),
              w = p(m),
              k = await l.getDimensions(u),
              C = "y" === m,
              S = C ? "top" : "left",
              A = C ? "bottom" : "right",
              O = C ? "clientHeight" : "clientWidth",
              L = i.reference[w] + i.reference[m] - b[m] - i.floating[w],
              _ = b[m] - i.reference[m],
              E = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u));
            let z = E ? E[O] : 0;
            z && await (null == l.isElement ? void 0 : l.isElement(E)) || (z = s.floating[O] || i.floating[w]);
            const T = L / 2 - _ / 2,
              F = z / 2 - k[w] / 2 - 1,
              j = a(y[S], F),
              R = a(y[A], F),
              P = j,
              D = z - k[w] - R,
              M = z / 2 - k[w] / 2 + T,
              q = d(P, M, D),
              I = !c.arrow && null != h(n) && M !== q && i.reference[w] / 2 - (M < P ? j : R) - k[w] / 2 < 0,
              N = I ? M < P ? M - P : M - D : 0;
            return {
              [m]: b[m] + N,
              data: {
                [m]: q,
                centerOffset: M - q - N,
                ...I && {
                  alignmentOffset: N
                }
              },
              reset: I
            }
          }
        }),
        xe = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: r,
                y: o,
                placement: a,
                rects: n,
                middlewareData: i
              } = t, {
                offset: l = 0,
                mainAxis: s = !0,
                crossAxis: c = !0
              } = f(e, t), d = {
                x: r,
                y: o
              }, h = y(a), p = g(h);
              let v = d[p],
                b = d[h];
              const m = f(l, t),
                w = "number" == typeof m ? {
                  mainAxis: m,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...m
                };
              if (s) {
                const e = "y" === p ? "height" : "width",
                  t = n.reference[p] - n.floating[e] + w.mainAxis,
                  r = n.reference[p] + n.reference[e] - w.mainAxis;
                v < t ? v = t : v > r && (v = r)
              }
              if (c) {
                var k, C;
                const e = "y" === p ? "width" : "height",
                  t = z.has(u(a)),
                  r = n.reference[h] - n.floating[e] + (t && (null == (k = i.offset) ? void 0 : k[h]) || 0) + (t ? 0 : w.crossAxis),
                  o = n.reference[h] + n.reference[e] + (t ? 0 : (null == (C = i.offset) ? void 0 : C[h]) || 0) - (t ? w.crossAxis : 0);
                b < r ? b = r : b > o && (b = o)
              }
              return {
                [p]: v,
                [h]: b
              }
            }
          }
        },
        Ae = (e, t, r) => {
          const o = new Map,
            a = {
              platform: pe,
              ...r
            },
            n = {
              ...a.platform,
              _c: o
            };
          return (async (e, t, r) => {
            const {
              placement: o = "bottom",
              strategy: a = "absolute",
              middleware: n = [],
              platform: i
            } = r, l = i.detectOverflow ? i : {
              ...i,
              detectOverflow: L
            }, s = await (null == i.isRTL ? void 0 : i.isRTL(t));
            let c = await i.getElementRects({
                reference: e,
                floating: t,
                strategy: a
              }),
              {
                x: d,
                y: f
              } = O(c, o, s),
              u = o,
              h = 0;
            const g = {};
            for (let r = 0; r < n.length; r++) {
              const p = n[r];
              if (!p) continue;
              const {
                name: y,
                fn: v
              } = p, {
                x: b,
                y: m,
                data: w,
                reset: k
              } = await v({
                x: d,
                y: f,
                initialPlacement: o,
                placement: u,
                strategy: a,
                middlewareData: g,
                rects: c,
                platform: l,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              d = null != b ? b : d, f = null != m ? m : f, g[y] = {
                ...g[y],
                ...w
              }, k && h < 50 && (h++, "object" == typeof k && (k.placement && (u = k.placement), k.rects && (c = !0 === k.rects ? await i.getElementRects({
                reference: e,
                floating: t,
                strategy: a
              }) : k.rects), ({
                x: d,
                y: f
              } = O(c, u, s))), r = -1)
            }
            return {
              x: d,
              y: f,
              placement: u,
              strategy: a,
              middlewareData: g
            }
          })(e, t, {
            ...a,
            platform: n
          })
        }
    },
    57030(e, t, r) {
      r.d(t, {
        DI: () => o.D,
        Tm: () => n,
        LU: () => a
      });
      var o = r(64001),
        a = (r(54540), {
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
                125: "var(--foundry-global-font-size-125-7465ed8a)",
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
                1100: "var(--foundry-global-font-size-1100-a7f67440)",
                multiplier: "var(--foundry-global-font-size-multiplier-a0cecbef)"
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
            },
            _platformScale: "--foundry-platform-scales-ratio-65afb887",
            _fontScale: "--foundry-global-font-size-multiplier-a0cecbef"
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
                  "06": "var(--foundry-alias-font-size-heading-06-40a06748)",
                  "07": "var(--foundry-alias-font-size-heading-07-edb7b105)"
                },
                body: {
                  bodyLg: "var(--foundry-alias-font-size-body-body-lg-bec4de18)",
                  bodyMd: "var(--foundry-alias-font-size-body-body-md-caf3b782)",
                  bodySm: "var(--foundry-alias-font-size-body-body-sm-2a8e6da3)",
                  bodyXs: "var(--foundry-alias-font-size-body-body-xs-cf241758)",
                  bodyXxs: "var(--foundry-alias-font-size-body-body-xxs-828e0ccb)",
                  code: "var(--foundry-alias-font-size-body-code-17a5a27f)"
                }
              },
              lineHeight: {
                heading: "var(--foundry-alias-font-line-height-heading-5379287f)",
                body: "var(--foundry-alias-font-line-height-body-3e320cc8)"
              }
            },
            grid: {
              columns: "var(--foundry_nu8bkp5)",
              margin: "var(--foundry_nu8bkp6)",
              gutter: "var(--foundry_nu8bkp7)",
              sectionGap: "var(--foundry_nu8bkp8)",
              sectionGapHalf: "var(--foundry_nu8bkp9)",
              maxWidth: "var(--foundry_nu8bkpa)"
            }
          }
        });
      r(36205);
      const n = e => {
        const t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }
    },
    98065(e, t, r) {
      function o(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? a(Object(r), !0).forEach(function(t) {
            var a, n, i;
            a = e, n = t, i = r[t], (n = o(n)) in a ? Object.defineProperty(a, n, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[n] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function i(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      r.d(t, {
        no: () => c
      });
      var l = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var a;
            if (e[o] !== (null !== (a = t[o]) && void 0 !== a ? a : r[o])) return !1
          }
          return !0
        },
        s = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = n(n({}, e.defaultVariants), t);
            for (var a in o) {
              var i, s = null !== (i = o[a]) && void 0 !== i ? i : e.defaultVariants[a];
              if (null != s) {
                var c = s;
                "boolean" == typeof c && (c = !0 === c ? "true" : "false");
                var d = e.variantClassNames[a][c];
                d && (r += " " + d)
              }
            }
            for (var [f, u] of e.compoundVariants) l(f, o, e.defaultVariants) && (r += " " + u);
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
        defaultClassName: "foundry_tdsdcdb foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdd",
            MD: "foundry_tdsdcde",
            SM: "foundry_tdsdcdf",
            XS: "foundry_tdsdcdg",
            XXS: "foundry_tdsdcdh"
          },
          appearance: {
            default: "foundry_tdsdcdi",
            bold: "foundry_tdsdcdj",
            hyperlink: "foundry_tdsdcdk"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), s({
        defaultClassName: "foundry_tdsdcdu foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdw",
            bold: "foundry_tdsdcdx"
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
            6: "foundry_tdsdcd9",
            7: "foundry_tdsdcda"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), s({
        defaultClassName: "foundry_tdsdcdl foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdn",
            MD: "foundry_tdsdcdo",
            SM: "foundry_tdsdcdp",
            XS: "foundry_tdsdcdq",
            XXS: "foundry_tdsdcdr"
          },
          appearance: {
            default: "foundry_tdsdcds",
            bold: "foundry_tdsdcdt"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), r(54540)
    },
    86361(e, t, r) {
      r.d(t, {
        DX: () => o.DX,
        xV: () => o.xV,
        s6: () => l
      });
      var o = r(17172),
        a = r(39793),
        n = r(93082),
        i = r(92023);
      const l = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? i.s6 : n.Fragment;
        return (0, a.jsx)(r, {
          ...t
        })
      }
    }
  }
]);