try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "df35a1f1-fcb8-49cd-b47a-601d5fde455b", e._sentryDebugIdIdentifier = "sentry-dbid-df35a1f1-fcb8-49cd-b47a-601d5fde455b")
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
  [1771], {
    3322: (e, t, r) => {
      "use strict";
      r(4572), new Map
    },
    10131: (e, t, r) => {
      "use strict";
      var i, n, s = {},
        o = r(23644),
        a = r(78318),
        l = r.n(a),
        h = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: r,
              output: i
            } = this._buildTables(e);
            this.gotoFn = r, this.output = i, this.failure = t
          }
          _buildTables(e) {
            const t = {
                0: {}
              },
              r = {};
            let i = 0;
            for (const n of e) {
              let e = 0;
              for (const s of n) t[e] && s in t[e] ? e = t[e][s] : (i++, t[e][s] = i, t[i] = {}, e = i, r[i] = []);
              r[e].push(n)
            }
            const n = {},
              s = [];
            for (const e in t[0]) {
              const r = t[0][e];
              n[r] = 0, s.push(r)
            }
            for (; s.length > 0;) {
              const e = s.shift();
              if (void 0 !== e)
                for (const i in t[e]) {
                  const o = t[e][i];
                  s.push(o);
                  let a = n[e];
                  for (; a > 0 && !(i in t[a]);) a = n[a];
                  if (i in t[a]) {
                    const e = t[a][i];
                    n[o] = e, r[o] = [...r[o], ...r[e]]
                  } else n[o] = 0
                }
            }
            return {
              gotoFn: t,
              output: r,
              failure: n
            }
          }
          search(e) {
            let t = 0;
            const r = [];
            for (let i = 0; i < e.length; i++) {
              const n = e[i];
              for (; t > 0 && !(n in this.gotoFn[t]);) t = this.failure[t];
              if (n in this.gotoFn[t] && (t = this.gotoFn[t][n], this.output[t].length > 0)) {
                const e = this.output[t];
                r.push([i, e])
              }
            }
            return r
          }
          match(e) {
            let t = 0;
            for (let r = 0; r < e.length; r++) {
              const i = e[r];
              for (; t > 0 && !(i in this.gotoFn[t]);) t = this.failure[t];
              if (i in this.gotoFn[t] && (t = this.gotoFn[t][i], this.output[t].length > 0)) return !0
            }
            return !1
          }
        },
        c = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        u = !1;

      function d(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(i || (i = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(n || (n = {}));
      const f = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        p = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        m = new Map([
          [126, n.Element],
          [94, n.Start],
          [36, n.End],
          [42, n.Any],
          [33, n.Not],
          [124, n.Hyphen]
        ]),
        g = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        v = new Set(["contains", "icontains"]);

      function y(e, t, r) {
        const i = parseInt(t, 16) - 65536;
        return i != i || r ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      }

      function w(e) {
        return e.replace(p, y)
      }

      function b(e) {
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
        let s = [];

        function o(e) {
          const i = t.slice(r + e).match(f);
          if (!i) throw new Error(`Expected name, found ${t.slice(r)}`);
          const [n] = i;
          return r += e + n.length, w(n)
        }

        function a(e) {
          for (r += e; r < t.length && k(t.charCodeAt(r));) r++
        }

        function l() {
          const e = r += 1;
          let i = 1;
          for (; i > 0 && r < t.length; r++) 40 !== t.charCodeAt(r) || h(r) ? 41 !== t.charCodeAt(r) || h(r) || i-- : i++;
          if (i) throw new Error("Parenthesis not matched");
          return w(t.slice(e, r - 1))
        }

        function h(e) {
          let r = 0;
          for (; 92 === t.charCodeAt(--e);) r++;
          return !(1 & ~r)
        }

        function c() {
          if (s.length > 0 && function(e) {
              switch (e.type) {
                case i.Adjacent:
                case i.Child:
                case i.Descendant:
                case i.Parent:
                case i.Sibling:
                case i.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(s[s.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function u(e) {
          s.length > 0 && s[s.length - 1].type === i.Descendant ? s[s.length - 1].type = e : (c(), s.push({
            type: e
          }))
        }

        function d(e, t) {
          s.push({
            type: i.Attribute,
            name: e,
            action: t,
            value: o(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function p() {
          if (s.length && s[s.length - 1].type === i.Descendant && s.pop(), 0 === s.length) throw new Error("Empty sub-selector");
          e.push(s)
        }
        if (a(0), t.length === r) return r;
        e: for (; r < t.length;) {
          const e = t.charCodeAt(r);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== s.length && s[0].type === i.Descendant || (c(), s.push({
                type: i.Descendant
              })), a(1);
              break;
            case 62:
              u(i.Child), a(1);
              break;
            case 60:
              u(i.Parent), a(1);
              break;
            case 126:
              u(i.Sibling), a(1);
              break;
            case 43:
              u(i.Adjacent), a(1);
              break;
            case 46:
              d("class", n.Element);
              break;
            case 35:
              d("id", n.Equals);
              break;
            case 91: {
              let e;
              a(1);
              let l = null;
              124 === t.charCodeAt(r) ? e = o(1) : t.startsWith("*|", r) ? (l = "*", e = o(2)) : (e = o(0), 124 === t.charCodeAt(r) && 61 !== t.charCodeAt(r + 1) && (l = e, e = o(1))), a(0);
              let c = n.Exists;
              const u = m.get(t.charCodeAt(r));
              if (u) {
                if (c = u, 61 !== t.charCodeAt(r + 1)) throw new Error("Expected `=`");
                a(2)
              } else 61 === t.charCodeAt(r) && (c = n.Equals, a(1));
              let d = "",
                f = null;
              if ("exists" !== c) {
                if (b(t.charCodeAt(r))) {
                  const e = t.charCodeAt(r);
                  let i = r + 1;
                  for (; i < t.length && (t.charCodeAt(i) !== e || h(i));) i += 1;
                  if (t.charCodeAt(i) !== e) throw new Error("Attribute value didn't end");
                  d = w(t.slice(r + 1, i)), r = i + 1
                } else {
                  const e = r;
                  for (; r < t.length && (!k(t.charCodeAt(r)) && 93 !== t.charCodeAt(r) || h(r));) r += 1;
                  d = w(t.slice(e, r))
                }
                a(0);
                const e = 32 | t.charCodeAt(r);
                115 === e ? (f = !1, a(1)) : 105 === e && (f = !0, a(1))
              }
              if (93 !== t.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const p = {
                type: i.Attribute,
                name: e,
                action: c,
                value: d,
                namespace: l,
                ignoreCase: f
              };
              s.push(p);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(r + 1)) {
                s.push({
                  type: i.PseudoElement,
                  name: o(2).toLowerCase(),
                  data: 40 === t.charCodeAt(r) ? l() : null
                });
                continue
              }
              const e = o(1).toLowerCase();
              let n = null;
              if (40 === t.charCodeAt(r))
                if (g.has(e)) {
                  if (b(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (n = [], r = S(n, t, r + 1), 41 !== t.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  r += 1
                } else {
                  if (n = l(), v.has(e)) {
                    const e = n.charCodeAt(0);
                    e === n.charCodeAt(n.length - 1) && b(e) && (n = n.slice(1, -1))
                  }
                  n = w(n)
                } s.push({
                type: i.Pseudo,
                name: e,
                data: n
              });
              break
            }
            case 44:
              p(), s = [], a(1);
              break;
            default: {
              if (t.startsWith("/*", r)) {
                const e = t.indexOf("*/", r + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                r = e + 2, 0 === s.length && a(0);
                break
              }
              let n, l = null;
              if (42 === e) r += 1, n = "*";
              else if (124 === e) {
                if (n = "", 124 === t.charCodeAt(r + 1)) {
                  u(i.ColumnCombinator), a(2);
                  break
                }
              } else {
                if (!f.test(t.slice(r))) break e;
                n = o(0)
              }
              124 === t.charCodeAt(r) && 124 !== t.charCodeAt(r + 1) && (l = n, 42 === t.charCodeAt(r + 1) ? (n = "*", r += 2) : n = o(1)), s.push("*" === n ? {
                type: i.Universal,
                namespace: l
              } : {
                type: i.Tag,
                name: n,
                namespace: l
              })
            }
          }
        }
        return p(), r
      }

      function A(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, i)
        }
        return r
      }

      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? A(Object(r), !0).forEach(function(t) {
            x(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach(function(t) {
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
      const E = function e(t) {
        return r.withOptions = r => e(O(O({}, t), r)), r;

        function r(e, ...r) {
          const i = "string" == typeof e ? [e] : e.raw,
            {
              alignValues: n = !1,
              escapeSpecialCharacters: s = Array.isArray(e),
              trimWhitespace: o = !0
            } = t;
          let a = "";
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            s && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), a += t, e < r.length && (a += n ? T(r[e], a) : r[e])
          }
          const l = a.split("\n");
          let h = null;
          for (const e of l) {
            const t = e.match(/^(\s+)\S+/);
            if (t) {
              const e = t[1].length;
              h = h ? Math.min(h, e) : e
            }
          }
          if (null !== h) {
            const e = h;
            a = l.map(t => " " === t[0] || "\t" === t[0] ? t.slice(e) : t).join("\n")
          }
          return o && (a = a.trim()), s && (a = a.replace(/\\n/g, "\n")), a
        }
      }({});

      function T(e, t) {
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
          for (var t, r = 1, i = arguments.length; r < i; r++)
            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }, L.apply(this, arguments)
      };

      function z(e, t) {
        var r = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]])
        }
        return r
      }

      function F(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i, n, s = r.call(e),
          o = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
        } catch (e) {
          n = {
            error: e
          }
        } finally {
          try {
            i && !i.done && (r = s.return) && r.call(s)
          } finally {
            if (n) throw n.error
          }
        }
        return o
      }
      var _, j = /(\u000D|\u000C|\u000D\u000A)/g,
        R = /[\u0000\uD800-\uDFFF]/g,
        I = /(\/\*)[\s\S]*?(\*\/)/g,
        D = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), i = [], n = t + 1; n < e.length; n += 1) {
            var s = e.charCodeAt(n);
            if (s === r) return [n, String.fromCharCode.apply(null, i)];
            if (92 === s) {
              var o = P(e, n);
              if (null === o) return null;
              var a = F(o, 2),
                l = a[0],
                h = a[1];
              i.push(h), n = l
            } else {
              if (10 === s) return null;
              i.push(s)
            }
          }
          return null
        },
        M = function(e, t) {
          if (e.length <= t) return !1;
          var r, i = e.charCodeAt(t);
          return 45 === i ? !(e.length <= t + 1) && (45 === (r = e.charCodeAt(t + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === i || i >= 65 && i <= 90 || i >= 97 && i <= 122 || i >= 128 || 92 === i && !(e.length <= t + 1) && 10 !== (r = e.charCodeAt(t + 1))
        },
        P = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var r = e.charCodeAt(t + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var i = [r], n = Math.min(t + 7, e.length), s = t + 2; s < n; s += 1) {
              var o = e.charCodeAt(s);
              if (!(o >= 48 && o <= 57 || o >= 65 && o <= 70 || o >= 97 && o <= 102)) break;
              i.push(o)
            }
            if (s < e.length) {
              var a = e.charCodeAt(s);
              9 !== a && 32 !== a && 10 !== a || (s += 1)
            }
            return [s - 1, parseInt(String.fromCharCode.apply(null, i), 16)]
          }
          return [t + 1, r]
        },
        B = function(e, t) {
          var r = N(e, t);
          if (null === r) return null;
          var i = F(r, 3),
            n = i[0],
            s = i[1],
            o = i[2],
            a = U(e, n + 1);
          if (null !== a) {
            var l = F(a, 2);
            return [l[0],
              ["<dimension-token>", s, l[1]]
            ]
          }
          return n + 1 < e.length && 37 === e.charCodeAt(n + 1) ? [n + 1, ["<percentage-token>", s]] : [n, ["<number-token>", s, o]]
        },
        N = function(e, t) {
          if (e.length <= t) return null;
          var r = "integer",
            i = [],
            n = e.charCodeAt(t);
          for (43 !== n && 45 !== n || (t += 1, 45 === n && i.push(45)); t < e.length && ((h = e.charCodeAt(t)) >= 48 && h <= 57);) i.push(h), t += 1;
          if (t + 1 < e.length) {
            var s = e.charCodeAt(t),
              o = e.charCodeAt(t + 1);
            if (46 === s && o >= 48 && o <= 57)
              for (i.push(s, o), r = "number", t += 2; t < e.length && ((h = e.charCodeAt(t)) >= 48 && h <= 57);) i.push(h), t += 1
          }
          if (t + 1 < e.length) {
            s = e.charCodeAt(t), o = e.charCodeAt(t + 1);
            var a = e.charCodeAt(t + 2);
            if (69 === s || 101 === s) {
              var l = o >= 48 && o <= 57;
              if (l || (43 === o || 45 === o) && a >= 48 && a <= 57)
                for (r = "number", l ? (i.push(69, o), t += 2) : 45 === o ? (i.push(69, 45, a), t += 3) : (i.push(69, a), t += 3); t < e.length;) {
                  var h;
                  if (!((h = e.charCodeAt(t)) >= 48 && h <= 57)) break;
                  i.push(h), t += 1
                }
            }
          }
          var c = String.fromCharCode.apply(null, i),
            u = "number" === r ? parseFloat(c) : parseInt(c);
          return -0 === u && (u = 0), Number.isNaN(u) ? null : [t - 1, u, r]
        },
        W = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], i = e.charCodeAt(t); t < e.length; i = e.charCodeAt(++t))
            if (45 === i || 95 === i || i >= 65 && i <= 90 || i >= 97 && i <= 122 || i >= 128 || i >= 48 && i <= 57) r.push(i);
            else {
              var n = P(e, t);
              if (null === n) break;
              var s = F(n, 2),
                o = s[0],
                a = s[1];
              r.push(a), t = o
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        U = function(e, t) {
          if (e.length <= t || !M(e, t)) return null;
          for (var r = [], i = e.charCodeAt(t); t < e.length; i = e.charCodeAt(++t))
            if (45 === i || 95 === i || i >= 65 && i <= 90 || i >= 97 && i <= 122 || i >= 128 || i >= 48 && i <= 57) r.push(i);
            else {
              var n = P(e, t);
              if (null === n) break;
              var s = F(n, 2),
                o = s[0],
                a = s[1];
              r.push(a), t = o
            } return [t - 1, String.fromCharCode.apply(null, r)]
        },
        q = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var i = [], n = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, i)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) n || 0 === i.length || (n = !0);
            else if (92 === r) {
              var s = P(e, t);
              if (null === s || n) return null;
              var o = F(s, 2),
                a = o[0],
                l = o[1];
              i.push(l), t = a
            } else {
              if (n) return null;
              i.push(r)
            }
            r = e.charCodeAt(++t)
          }
          return null
        },
        G = function(e, t) {
          var r = U(e, t);
          if (null === r) return null;
          var i = F(r, 2),
            n = i[0],
            s = i[1];
          if ("url" === s.toLowerCase()) {
            if (e.length > n + 1 && 40 === e.charCodeAt(n + 1)) {
              for (var o = 2; n + o < e.length; o += 1) {
                var a = e.charCodeAt(n + o);
                if (34 === a || 39 === a) return [n + 1, s.toLowerCase(), "<function-token>"];
                if (9 !== a && 32 !== a && 10 !== a) {
                  var l = q(e, n + o);
                  if (null === l) return null;
                  var h = F(l, 2);
                  return [h[0], h[1], "<url-token>"]
                }
              }
              return [n + 1, s.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > n + 1 && 40 === e.charCodeAt(n + 1)) return [n + 1, s.toLowerCase(), "<function-token>"];
          return [n, s.toLowerCase(), "<ident-token>"]
        },
        $ = function(e) {
          if (null === e.mediaCondition) return e;
          var t = H(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        H = function e(t) {
          for (var r = t.children.length - 1; r >= 0; r--) {
            var i = t.children[r];
            if (!("context" in i)) {
              var n = e(i);
              if (null === n.operator && 1 === n.children.length) t.children[r] = n.children[0];
              else if (n.operator === t.operator && ("and" === n.operator || "or" === n.operator)) {
                for (var s = [r, 1], o = 0; o < n.children.length; o++) s.push(n.children[o]);
                t.children.splice.apply(t.children, s)
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
            void 0 === t && (t = 0), e = (e = e.replace(j, "\n").replace(R, "�")).replace(I, "");
            for (var r = []; t < e.length; t += 1) {
              var i = e.charCodeAt(t);
              if (9 === i || 32 === i || 10 === i) {
                for (var n = e.charCodeAt(++t); 9 === n || 32 === n || 10 === n;) n = e.charCodeAt(++t);
                t -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === i) {
                if (null === (O = D(e, t))) return null;
                var s = F(O, 2),
                  o = s[0],
                  a = s[1];
                r.push({
                  type: "<string-token>",
                  value: a
                }), t = o
              } else if (35 === i) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = M(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (O = W(e, t + 1))) {
                    var h = F(O, 2);
                    o = h[0], a = h[1], r.push({
                      type: "<hash-token>",
                      value: a.toLowerCase(),
                      flag: l
                    }), t = o;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: i
                })
              } else if (39 === i) {
                if (null === (O = D(e, t))) return null;
                var c = F(O, 2);
                o = c[0], a = c[1], r.push({
                  type: "<string-token>",
                  value: a
                }), t = o
              } else if (40 === i) r.push({
                type: "<(-token>"
              });
              else if (41 === i) r.push({
                type: "<)-token>"
              });
              else if (43 === i) {
                var u = B(e, t);
                if (null === u) r.push({
                  type: "<delim-token>",
                  value: i
                });
                else {
                  var d = F(u, 2);
                  o = d[0], "<dimension-token>" === (S = d[1])[0] ? r.push({
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
                  }), t = o
                }
              } else if (44 === i) r.push({
                type: "<comma-token>"
              });
              else if (45 === i) {
                if (null !== (y = B(e, t))) {
                  var f = F(y, 2);
                  o = f[0], "<dimension-token>" === (S = f[1])[0] ? r.push({
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
                  }), t = o;
                  continue
                }
                if (t + 2 < e.length) {
                  var p = e.charCodeAt(t + 1),
                    m = e.charCodeAt(t + 2);
                  if (45 === p && 62 === m) {
                    r.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (O = G(e, t))) {
                  var g = F(O, 3),
                    v = (o = g[0], a = g[1], g[2]);
                  r.push({
                    type: v,
                    value: a
                  }), t = o;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: i
                })
              } else if (46 === i) {
                var y;
                if (null !== (y = B(e, t))) {
                  var w = F(y, 2);
                  o = w[0], "<dimension-token>" === (S = w[1])[0] ? r.push({
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
                  }), t = o;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: i
                })
              } else if (58 === i) r.push({
                type: "<colon-token>"
              });
              else if (59 === i) r.push({
                type: "<semicolon-token>"
              });
              else if (60 === i) {
                if (t + 3 < e.length) {
                  p = e.charCodeAt(t + 1), m = e.charCodeAt(t + 2);
                  var b = e.charCodeAt(t + 3);
                  if (33 === p && 45 === m && 45 === b) {
                    r.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: i
                })
              } else if (64 === i) {
                if (null !== (O = U(e, t + 1))) {
                  var k = F(O, 2);
                  o = k[0], a = k[1], r.push({
                    type: "<at-keyword-token>",
                    value: a.toLowerCase()
                  }), t = o;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: i
                })
              } else if (91 === i) r.push({
                type: "<[-token>"
              });
              else if (92 === i) {
                if (null === (O = P(e, t))) return null;
                var C = F(O, 2);
                o = C[0], a = C[1], e = e.slice(0, t) + a + e.slice(o + 1), t -= 1
              } else if (93 === i) r.push({
                type: "<]-token>"
              });
              else if (123 === i) r.push({
                type: "<{-token>"
              });
              else if (125 === i) r.push({
                type: "<}-token>"
              });
              else if (i >= 48 && i <= 57) {
                var S, A = F(O = B(e, t), 2);
                o = A[0], "<dimension-token>" === (S = A[1])[0] ? r.push({
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
                }), t = o
              } else if (95 === i || i >= 65 && i <= 90 || i >= 97 && i <= 122 || i >= 128) {
                var O;
                if (null === (O = G(e, t))) return null;
                var x = F(O, 3);
                o = x[0], a = x[1], v = x[2], r.push({
                  type: v,
                  value: a
                }), t = o
              } else r.push({
                type: "<delim-token>",
                value: i
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(e.trim());
          if (null === t) throw V("Failed tokenizing");
          var r = 0,
            i = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw V("Expected whitespace after media");
            r = 2;
            for (var n = 2; n < t.length - 1; n++) {
              var s = t[n];
              if ("<{-token>" === s.type) {
                i = n;
                break
              }
              if ("<semicolon-token>" === s.type) throw V("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(r, i), Q(t)
        },
        Y = function(e) {
          for (var t = [], r = !1, i = 0; i < e.length; i++) "<whitespace-token>" === e[i].type ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(L(L({}, e[i]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return t
        },
        Q = function(e) {
          for (var t, r, i = [
              []
            ], n = 0; n < e.length; n++) {
            var s = e[n];
            "<comma-token>" === s.type ? i.push([]) : i[i.length - 1].push(s)
          }
          var o = i.map(Y);
          if (1 === o.length && 0 === o[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var a = o.map(function(e) {
              return 0 === e.length ? null : Z(e)
            }),
            l = [];
          try {
            for (var h = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  r = t && e[t],
                  i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && i >= e.length && (e = void 0), {
                      value: e && e[i++],
                      done: !e
                    }
                  }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(a), c = h.next(); !c.done; c = h.next()) {
              var u = c.value;
              null !== u && l.push(u)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              c && !c.done && (r = h.return) && r.call(h)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw V("No valid media queries");
          return l
        },
        Z = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: J(e, !0)
            }
          } catch (e) {
            throw V("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw V("Expected media condition or media prefix");
            var r = null,
              i = void 0,
              n = t.value;
            "only" !== n && "not" !== n || (r = n);
            var s = null === r ? 0 : 1;
            if (e.length <= s) throw V("Expected extra token in media query");
            var o = e[s];
            if ("<ident-token>" === o.type) {
              var a = o.value;
              if ("all" === a) i = "all";
              else if ("print" === a || "screen" === a) i = a;
              else {
                if ("tty" !== a && "tv" !== a && "projection" !== a && "handheld" !== a && "braille" !== a && "embossed" !== a && "aural" !== a && "speech" !== a) throw V("Unknown ident '".concat(a, "' in media query"));
                r = "not" === r ? null : "not", i = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== o.type) throw V("Invalid media query");
              var l = [{
                type: "<(-token>",
                wsBefore: !1,
                wsAfter: !1
              }];
              l.push.apply(l, e), l.push({
                type: "<)-token>",
                wsBefore: !1,
                wsAfter: !1
              });
              try {
                return {
                  mediaPrefix: null,
                  mediaType: "all",
                  mediaCondition: J(l, !0)
                }
              } catch (e) {
                throw V("Expected media condition after '('", e)
              }
            }
            if (s + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: i,
              mediaCondition: null
            };
            if (!(s + 4 < e.length)) throw V("Expected media condition after media prefix");
            var h = e[s + 1];
            if ("<ident-token>" !== h.type || "and" !== h.value) throw V("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: i,
                mediaCondition: J(e.slice(s + 2), !1)
              }
            } catch (e) {
              throw V("Expected media condition after 'and'", e)
            }
          }
        },
        J = function e(t, r, i) {
          if (void 0 === i && (i = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var n, s = t.length - 1, o = 0, a = 0, l = 0; l < t.length; l++) {
            var h = t[l];
            if ("<(-token>" === h.type ? (a += 1, o = Math.max(o, a)) : "<)-token>" === h.type && (a -= 1), 0 === a) {
              s = l;
              break
            }
          }
          if (0 !== a) throw new Error("Mismatched parens\nInvalid media condition");
          var c = t.slice(0, s + 1);
          if (n = 1 === o ? K(c) : "<ident-token>" === c[1].type && "not" === c[1].value ? e(c.slice(2, -1), !0, "not") : e(c.slice(1, -1), !0), s === t.length - 1) return {
            operator: i,
            children: [n]
          };
          var u = t[s + 1];
          if ("<ident-token>" !== u.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== i && i !== u.value) throw new Error("'".concat(u.value, "' and '").concat(i, "' must not be at same level\nInvalid media condition"));
          if ("or" === u.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== u.value && "or" !== u.value) throw new Error("Invalid operator: '".concat(u.value, "'\nInvalid media condition"));
          var d = e(t.slice(s + 2), r, u.value);
          return {
            operator: u.value,
            children: [n].concat(d.children)
          }
        },
        K = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], r = 1; r < e.length; r++) {
            if (r < e.length - 2) {
              var i = e[r],
                n = e[r + 1],
                s = e[r + 2];
              if ("<number-token>" === i.type && i.value > 0 && "<delim-token>" === n.type && 47 === n.value && "<number-token>" === s.type && s.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: i.value,
                  denominator: s.value,
                  wsBefore: i.wsBefore,
                  wsAfter: s.wsAfter
                }), r += 2;
                continue
              }
            }
            t.push(e[r])
          }
          var o = t[1];
          if ("<ident-token>" === o.type && 3 === t.length) return {
            context: "boolean",
            feature: o.value
          };
          if (5 === t.length && "<ident-token>" === t[1].type && "<colon-token>" === t[2].type) {
            var a = t[3];
            if ("<number-token>" === a.type || "<dimension-token>" === a.type || "<ratio-token>" === a.type || "<ident-token>" === a.type) {
              var l = t[1].value,
                h = null,
                c = l.slice(0, 4);
              return "min-" === c ? (h = "min", l = l.slice(4)) : "max-" === c && (h = "max", l = l.slice(4)), a.wsBefore, a.wsAfter, {
                context: "value",
                prefix: h,
                feature: l,
                value: z(a, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var u = ee(t);
            return {
              context: "range",
              feature: u.featureName,
              range: u
            }
          } catch (e) {
            throw V("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        ee = function(e) {
          var t, r, i, n;
          if (e.length < 5 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid range");
          var s = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            o = "<number-token>" === e[1].type || "<dimension-token>" === e[1].type || "<ratio-token>" === e[1].type || "<ident-token>" === e[1].type && "infinite" === e[1].value;
          if ("<delim-token>" === e[2].type) {
            if (60 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? s[o ? "leftOp" : "rightOp"] = "<" : s[o ? "leftOp" : "rightOp"] = "<=";
            else if (62 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? s[o ? "leftOp" : "rightOp"] = ">" : s[o ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== e[2].value) throw new Error("Invalid range");
              s[o ? "leftOp" : "rightOp"] = "="
            }
            if (o) s.leftToken = e[1];
            else {
              if ("<ident-token>" !== e[1].type) throw new Error("Invalid range");
              s.featureName = e[1].value
            }
            var a = 2 + (null !== (r = null === (t = s[o ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0),
              l = e[a];
            if (o) {
              if ("<ident-token>" !== l.type) throw new Error("Invalid range");
              if (s.featureName = l.value, e.length >= 7) {
                var h = e[a + 1],
                  c = e[a + 2];
                if ("<delim-token>" !== h.type) throw new Error("Invalid range");
                var u = h.value;
                if (60 === u) "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? s.rightOp = "<" : s.rightOp = "<=";
                else {
                  if (62 !== u) throw new Error("Invalid range");
                  "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? s.rightOp = ">" : s.rightOp = ">="
                }
                var d = e[a + 1 + (null !== (n = null === (i = s.rightOp) || void 0 === i ? void 0 : i.length) && void 0 !== n ? n : 0)];
                s.rightToken = d
              } else if (a + 2 !== e.length) throw new Error("Invalid range")
            } else s.rightToken = l;
            var f = null,
              p = s.leftToken,
              m = s.leftOp,
              g = s.featureName,
              v = s.rightOp,
              y = s.rightToken,
              w = null;
            if (null !== p)
              if ("<ident-token>" === p.type) {
                var b = p.type;
                "infinite" === (C = p.value) && (w = {
                  type: b,
                  value: C
                })
              } else "<number-token>" !== p.type && "<dimension-token>" !== p.type && "<ratio-token>" !== p.type || (p.wsBefore, p.wsAfter, w = z(p, ["wsBefore", "wsAfter"]));
            var k = null;
            if (null !== y)
              if ("<ident-token>" === y.type) {
                var C;
                b = y.type, "infinite" === (C = y.value) && (k = {
                  type: b,
                  value: C
                })
              } else "<number-token>" !== y.type && "<dimension-token>" !== y.type && "<ratio-token>" !== y.type || (y.wsBefore, y.wsAfter, k = z(y, ["wsBefore", "wsAfter"]));
            if (null !== w && null !== k)
              if ("<" !== m && "<=" !== m || "<" !== v && "<=" !== v) {
                if (">" !== m && ">=" !== m || ">" !== v && ">=" !== v) throw new Error("Invalid range");
                f = {
                  leftToken: w,
                  leftOp: m,
                  featureName: g,
                  rightOp: v,
                  rightToken: k
                }
              } else f = {
                leftToken: w,
                leftOp: m,
                featureName: g,
                rightOp: v,
                rightToken: k
              };
            else(null === w && null === m && null !== v && null !== k || null !== w && null !== m && null === v && null === k) && (f = {
              leftToken: w,
              leftOp: m,
              featureName: g,
              rightOp: v,
              rightToken: k
            });
            return f
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
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, i)
        }
        return r
      }

      function ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? re(Object(r), !0).forEach(function(t) {
            var i, n, s;
            i = e, n = t, s = r[t], (n = te(n)) in i ? Object.defineProperty(i, n, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : i[n] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : re(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ne(e, t) {
        if (null == e) return {};
        var r, i, n = function(e, t) {
          if (null == e) return {};
          var r, i, n = {},
            s = Object.keys(e);
          for (i = 0; i < s.length; i++) r = s[i], t.indexOf(r) >= 0 || (n[r] = e[r]);
          return n
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (i = 0; i < s.length; i++) r = s[i], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
        }
        return n
      }

      function se(e, t) {
        for (var r in e) t(e[r], r)
      }

      function oe(e, t) {
        var r = {};
        for (var i in e) - 1 === t.indexOf(i) && (r[i] = e[i]);
        return r
      }
      class ae {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new ae
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var r of e) {
            var i = t.findOrCreateCondition(r);
            t = i.children
          }
          return t
        }
        addRule(e, t, r) {
          var i = this.getConditionalRulesetByPath(r).findOrCreateCondition(t);
          if (!i) throw new Error("Failed to add conditional rule");
          i.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var r = this.getConditionalRulesetByPath(e), i = 0; i < t.length; i++) {
            var n, s = t[i],
              o = null !== (n = r.precedenceLookup.get(s)) && void 0 !== n ? n : new Set;
            for (var a of t.slice(i + 1)) o.add(a);
            r.precedenceLookup.set(s, o)
          }
        }
        isCompatible(e) {
          for (var [t, r] of this.precedenceLookup.entries())
            for (var i of r) {
              var n;
              if (null !== (n = e.precedenceLookup.get(i)) && void 0 !== n && n.has(t)) return !1
            }
          for (var {
              query: s,
              children: o
            }
            of e.ruleset.values()) {
            var a = this.ruleset.get(s);
            if (a && !a.children.isCompatible(o)) return !1
          }
          return !0
        }
        merge(e) {
          for (var {
              query: t,
              rules: r,
              children: i
            }
            of e.ruleset.values()) {
            var n = this.ruleset.get(t);
            n ? (n.rules.push(...r), n.children.merge(i)) : this.ruleset.set(t, {
              query: t,
              rules: r,
              children: i
            })
          }
          for (var [s, o] of e.precedenceLookup.entries()) {
            var a, l = null !== (a = this.precedenceLookup.get(s)) && void 0 !== a ? a : new Set;
            this.precedenceLookup.set(s, new Set([...l, ...o]))
          }
        }
        mergeIfCompatible(e) {
          return !!this.isCompatible(e) && (this.merge(e), !0)
        }
        getSortedRuleset() {
          var e = this,
            t = [],
            r = function(r) {
              var n = e.ruleset.get(i);
              if (!n) throw new Error("Can't find condition for ".concat(i));
              var s = t.findIndex(e => r.has(e.query));
              s > -1 ? t.splice(s, 0, n) : t.push(n)
            };
          for (var [i, n] of this.precedenceLookup.entries()) r(n);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: r,
              children: i
            }
            of this.getSortedRuleset()) {
            var n = {};
            for (var s of r) n[s.selector] = ie(ie({}, n[s.selector]), s.rule);
            Object.assign(n, ...i.renderToArray()), e.push({
              [t]: n
            })
          }
          return e
        }
      }
      var le, he = {
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
        ce = Object.keys(he),
        ue = he,
        de = (e, t) => new Error(E(le || (le = d(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        fe = e => {
          if ("@media " === e) throw de(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = $(e[t])
            })(X(e))
          } catch (t) {
            throw de(e, t.message)
          }
        },
        pe = ["vars"],
        me = ["content"],
        ge = "__DECLARATION",
        ve = {
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

      function ye(e, t, r, i) {
        var n = e.slice(0, t),
          s = e.slice(r);
        return "".concat(n).concat(i).concat(s)
      }
      var we = [...ce, "@layer", "@media", "@supports", "@container", "selectors"];
      class be {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new ae], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map(e => [e, e])), this.localClassNamesSearch = new h(e), this.layers = new Map, this.composedClassLists = t.map(e => {
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
              if (this.currConditionalRuleset = new ae, "layer" === e.type) {
                var t = "@layer ".concat(e.name);
                this.addLayer([t])
              } else {
                var r = oe(e.rule, we);
                this.addRule({
                  selector: e.selector,
                  rule: r
                }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
              }
              this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
            } else this.propertyRules.push(e);
          else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var r = this.transformVars(this.transformProperties(e.rule)),
            i = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var n = t[t.length - 1],
            s = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: i,
            rule: r
          }, n, s)
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
          return se(e, (t, r) => {
            "number" != typeof t || 0 === t || ve[r] || (e[r] = "".concat(t, "px"))
          }), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, r = ne(e, pe);
          return t ? ie(ie({}, function(e, t) {
            var r = {};
            for (var i in e) r[t(e[i], i)] = e[i];
            return r
          }(t, (e, t) => (0, o.Tm)(t))), r) : r
        }
        transformContent(e) {
          var {
            content: t
          } = e, r = ne(e, me);
          return void 0 === t ? r : ie({
            content: (Array.isArray(t) ? t : [t]).map(e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"'))
          }, r)
        }
        transformClassname(e) {
          return ".".concat(l()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            r = function(e) {
              t = t.replace(n, () => (function() {
                (() => {
                  if (c.length < 1) throw new Error("No adapter configured");
                  return c[c.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e))
            };
          for (var {
              identifier: i,
              regex: n
            }
            of this.composedClassLists) r(i);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var s = this.localClassNamesSearch.search(t), o = t.length, a = s.length - 1; a >= 0; a--) {
            var [l, [h]] = s[a], u = l - h.length + 1;
            o <= l || (o = u, "." !== t[u - 1] && (t = ye(t, u, l + 1, this.transformClassname(h))))
          }
          return t
        }
        transformSelectors(e, t, r) {
          se(t.selectors, (t, i) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var n = this.transformSelector(i.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var r, i = () => {
                var r = new RegExp(".".concat(l()(t, {
                  isIdentifier: !0
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(r, "&")
              };
              try {
                r = C(e)
              } catch (e) {
                throw new Error("Invalid selector: ".concat(i()))
              }
              r.forEach(e => {
                try {
                  for (var r = e.length - 1; r >= -1; r--) {
                    if (!e[r]) throw new Error;
                    var n = e[r];
                    if ("child" === n.type || "parent" === n.type || "sibling" === n.type || "adjacent" === n.type || "descendant" === n.type) throw new Error;
                    if ("attribute" === n.type && "class" === n.name && n.value === t) return
                  }
                } catch (e) {
                  throw new Error(E(_ || (_ = d(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), i(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              })
            })(n, e.selector);
            var s = {
              selector: n,
              rule: oe(t, we)
            };
            r ? this.addConditionalRule(s, r) : this.addRule(s);
            var o = {
              type: "selector",
              selector: n,
              rule: t
            };
            this.transformLayer(o, t["@layer"], r), this.transformSupports(o, t["@supports"], r), this.transformMedia(o, t["@media"], r), this.transformContainer(o, t["@container"], r)
          })
        }
        transformMedia(e, t) {
          var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [n, s] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(i, Object.keys(t).map(e => "@media ".concat(e))), Object.entries(t))) {
              var o = "@media ".concat(n);
              fe(o);
              var a = [...i, o];
              this.addConditionalRule({
                selector: e.selector,
                rule: oe(s, we)
              }, a), "local" === e.type && (this.transformSimplePseudos(e, s, a), this.transformSelectors(e, s, a)), this.transformLayer(e, s["@layer"], a), this.transformSupports(e, s["@supports"], a), this.transformContainer(e, s["@container"], a)
            }
        }
        transformContainer(e, t) {
          var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(i, Object.keys(t).map(e => "@container ".concat(e))), se(t, (t, r) => {
            var n = "@container ".concat(r),
              s = [...i, n];
            this.addConditionalRule({
              selector: e.selector,
              rule: oe(t, we)
            }, s), "local" === e.type && (this.transformSimplePseudos(e, t, s), this.transformSelectors(e, t, s)), this.transformLayer(e, t["@layer"], s), this.transformSupports(e, t["@supports"], s), this.transformMedia(e, t["@media"], s)
          }))
        }
        transformLayer(e, t) {
          var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(i, Object.keys(t).map(e => "@layer ".concat(e))), se(t, (t, r) => {
            var n = [...i, "@layer ".concat(r)];
            this.addLayer(n), this.addConditionalRule({
              selector: e.selector,
              rule: oe(t, we)
            }, n), "local" === e.type && (this.transformSimplePseudos(e, t, n), this.transformSelectors(e, t, n)), this.transformMedia(e, t["@media"], n), this.transformSupports(e, t["@supports"], n), this.transformContainer(e, t["@container"], n)
          }))
        }
        transformSupports(e, t) {
          var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(i, Object.keys(t).map(e => "@supports ".concat(e))), se(t, (t, r) => {
            var n = [...i, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: oe(t, we)
            }, n), "local" === e.type && (this.transformSimplePseudos(e, t, n), this.transformSelectors(e, t, n)), this.transformLayer(e, t["@layer"], n), this.transformMedia(e, t["@media"], n), this.transformContainer(e, t["@container"], n)
          }))
        }
        transformSimplePseudos(e, t, r) {
          for (var i of Object.keys(t))
            if (ue[i]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(i),
                rule: t[i]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(e.selector).concat(i),
                rule: t[i]
              })
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
          for (var i of this.keyframesRules) e.push(ke({
            ["@keyframes ".concat(i.name)]: i.rule
          }));
          for (var n of this.layers.values()) {
            var [s, ...o] = n.reverse(), a = {
              [s]: ge
            };
            for (var l of o) a = {
              [l]: a
            };
            e.push(ke(a))
          }
          for (var h of this.rules) e.push(ke({
            [h.selector]: h.rule
          }));
          for (var c of this.conditionalRulesets)
            for (var u of c.renderToArray()) e.push(ke(u));
          return e.filter(Boolean)
        }
      }

      function ke(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          i = function(i) {
            var n, s = e[i];
            s && Array.isArray(s) ? r.push(...s.map(e => ke({
              [i]: e
            }, t))) : s && "object" == typeof s ? 0 === Object.keys(s).length || r.push("".concat(t).concat(i, " {\n").concat(ke(s, t + "  "), "\n").concat(t, "}")) : s === ge ? r.push("".concat(t).concat(i, ";")) : r.push("".concat(t).concat(i.startsWith("--") ? i : (n = i, n.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(s, ";"))
          };
        for (var n of Object.keys(e)) i(n);
        return r.join("\n")
      }
      var Ce = r(42649);
      const Se = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        Ae = new Set,
        Oe = "object" == typeof Ce && Ce ? Ce : {},
        xe = (e, t, r, i) => {
          "function" == typeof Oe.emitWarning ? Oe.emitWarning(e, t, r, i) : console.error(`[${r}] ${t}: ${e}`)
        };
      let Ee = globalThis.AbortController,
        Te = globalThis.AbortSignal;
      if (void 0 === Ee) {
        Te = class {
          onabort;
          _onabort = [];
          reason;
          aborted = !1;
          addEventListener(e, t) {
            this._onabort.push(t)
          }
        }, Ee = class {
          constructor() {
            t()
          }
          signal = new Te;
          abort(e) {
            if (!this.signal.aborted) {
              this.signal.reason = e, this.signal.aborted = !0;
              for (const t of this.signal._onabort) t(e);
              this.signal.onabort?.(e)
            }
          }
        };
        let e = "1" !== Oe.env?.LRU_CACHE_IGNORE_AC_WARNING;
        const t = () => {
          e && (e = !1, xe("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
        }
      }
      Symbol("type");
      const Le = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        ze = e => Le(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? Fe : null : null;
      class Fe extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class _e {
        heap;
        length;
        static #e = !1;
        static create(e) {
          const t = ze(e);
          if (!t) return [];
          _e.#e = !0;
          const r = new _e(e, t);
          return _e.#e = !1, r
        }
        constructor(e, t) {
          if (!_e.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class je {
        #t;
        #r;
        #i;
        #n;
        #s;
        #o;
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
        #a;
        #l;
        #h;
        #c;
        #u;
        #d;
        #f;
        #p;
        #m;
        #g;
        #v;
        #y;
        #w;
        #b;
        #k;
        #C;
        #S;
        static unsafeExposeInternals(e) {
          return {
            starts: e.#w,
            ttls: e.#b,
            sizes: e.#y,
            keyMap: e.#h,
            keyList: e.#c,
            valList: e.#u,
            next: e.#d,
            prev: e.#f,
            get head() {
              return e.#p
            },
            get tail() {
              return e.#m
            },
            free: e.#g,
            isBackgroundFetch: t => e.#A(t),
            backgroundFetch: (t, r, i, n) => e.#O(t, r, i, n),
            moveToTail: t => e.#x(t),
            indexes: t => e.#E(t),
            rindexes: t => e.#T(t),
            isStale: t => e.#L(t)
          }
        }
        get max() {
          return this.#t
        }
        get maxSize() {
          return this.#r
        }
        get calculatedSize() {
          return this.#l
        }
        get size() {
          return this.#a
        }
        get fetchMethod() {
          return this.#s
        }
        get memoMethod() {
          return this.#o
        }
        get dispose() {
          return this.#i
        }
        get disposeAfter() {
          return this.#n
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: r,
            ttlResolution: i = 1,
            ttlAutopurge: n,
            updateAgeOnGet: s,
            updateAgeOnHas: o,
            allowStale: a,
            dispose: l,
            disposeAfter: h,
            noDisposeOnSet: c,
            noUpdateTTL: u,
            maxSize: d = 0,
            maxEntrySize: f = 0,
            sizeCalculation: p,
            fetchMethod: m,
            memoMethod: g,
            noDeleteOnFetchRejection: v,
            noDeleteOnStaleGet: y,
            allowStaleOnFetchRejection: w,
            allowStaleOnFetchAbort: b,
            ignoreFetchAbort: k
          } = e;
          if (0 !== t && !Le(t)) throw new TypeError("max option must be a nonnegative integer");
          const C = t ? ze(t) : Array;
          if (!C) throw new Error("invalid max value: " + t);
          if (this.#t = t, this.#r = d, this.maxEntrySize = f || this.#r, this.sizeCalculation = p, this.sizeCalculation) {
            if (!this.#r && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== g && "function" != typeof g) throw new TypeError("memoMethod must be a function if defined");
          if (this.#o = g, void 0 !== m && "function" != typeof m) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#s = m, this.#C = !!m, this.#h = new Map, this.#c = new Array(t).fill(void 0), this.#u = new Array(t).fill(void 0), this.#d = new C(t), this.#f = new C(t), this.#p = 0, this.#m = 0, this.#g = _e.create(t), this.#a = 0, this.#l = 0, "function" == typeof l && (this.#i = l), "function" == typeof h ? (this.#n = h, this.#v = []) : (this.#n = void 0, this.#v = void 0), this.#k = !!this.#i, this.#S = !!this.#n, this.noDisposeOnSet = !!c, this.noUpdateTTL = !!u, this.noDeleteOnFetchRejection = !!v, this.allowStaleOnFetchRejection = !!w, this.allowStaleOnFetchAbort = !!b, this.ignoreFetchAbort = !!k, 0 !== this.maxEntrySize) {
            if (0 !== this.#r && !Le(this.#r)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!Le(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#z()
          }
          if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!s, this.updateAgeOnHas = !!o, this.ttlResolution = Le(i) || 0 === i ? i : 1, this.ttlAutopurge = !!n, this.ttl = r || 0, this.ttl) {
            if (!Le(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#F()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#r) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#r) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !Ae.has(e))(e) && (Ae.add(e), xe("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, je))
          }
        }
        getRemainingTTL(e) {
          return this.#h.has(e) ? 1 / 0 : 0
        }
        #F() {
          const e = new Fe(this.#t),
            t = new Fe(this.#t);
          this.#b = e, this.#w = t, this.#_ = (r, i, n = Se.now()) => {
            if (t[r] = 0 !== i ? n : 0, e[r] = i, 0 !== i && this.ttlAutopurge) {
              const e = setTimeout(() => {
                this.#L(r) && this.#j(this.#c[r], "expire")
              }, i + 1);
              e.unref && e.unref()
            }
          }, this.#R = r => {
            t[r] = 0 !== e[r] ? Se.now() : 0
          }, this.#I = (n, s) => {
            if (e[s]) {
              const o = e[s],
                a = t[s];
              if (!o || !a) return;
              n.ttl = o, n.start = a, n.now = r || i();
              const l = n.now - a;
              n.remainingTTL = o - l
            }
          };
          let r = 0;
          const i = () => {
            const e = Se.now();
            if (this.ttlResolution > 0) {
              r = e;
              const t = setTimeout(() => r = 0, this.ttlResolution);
              t.unref && t.unref()
            }
            return e
          };
          this.getRemainingTTL = n => {
            const s = this.#h.get(n);
            if (void 0 === s) return 0;
            const o = e[s],
              a = t[s];
            return o && a ? o - ((r || i()) - a) : 1 / 0
          }, this.#L = n => {
            const s = t[n],
              o = e[n];
            return !!o && !!s && (r || i()) - s > o
          }
        }
        #R = () => {};
        #I = () => {};
        #_ = () => {};
        #L = () => !1;
        #z() {
          const e = new Fe(this.#t);
          this.#l = 0, this.#y = e, this.#D = t => {
            this.#l -= e[t], e[t] = 0
          }, this.#M = (e, t, r, i) => {
            if (this.#A(t)) return 0;
            if (!Le(r)) {
              if (!i) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
              if ("function" != typeof i) throw new TypeError("sizeCalculation must be a function");
              if (r = i(t, e), !Le(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
            }
            return r
          }, this.#P = (t, r, i) => {
            if (e[t] = r, this.#r) {
              const r = this.#r - e[t];
              for (; this.#l > r;) this.#B(!0)
            }
            this.#l += e[t], i && (i.entrySize = r, i.totalCalculatedSize = this.#l)
          }
        }
        #D = e => {};
        #P = (e, t, r) => {};
        #M = (e, t, r, i) => {
          if (r || i) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };* #E({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#a)
            for (let t = this.#m; this.#N(t) && (!e && this.#L(t) || (yield t), t !== this.#p);) t = this.#f[t]
        }* #T({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#a)
            for (let t = this.#p; this.#N(t) && (!e && this.#L(t) || (yield t), t !== this.#m);) t = this.#d[t]
        }
        #N(e) {
          return void 0 !== e && this.#h.get(this.#c[e]) === e
        }* entries() {
          for (const e of this.#E()) void 0 === this.#u[e] || void 0 === this.#c[e] || this.#A(this.#u[e]) || (yield [this.#c[e], this.#u[e]])
        }* rentries() {
          for (const e of this.#T()) void 0 === this.#u[e] || void 0 === this.#c[e] || this.#A(this.#u[e]) || (yield [this.#c[e], this.#u[e]])
        }* keys() {
          for (const e of this.#E()) {
            const t = this.#c[e];
            void 0 === t || this.#A(this.#u[e]) || (yield t)
          }
        }* rkeys() {
          for (const e of this.#T()) {
            const t = this.#c[e];
            void 0 === t || this.#A(this.#u[e]) || (yield t)
          }
        }* values() {
          for (const e of this.#E()) void 0 === this.#u[e] || this.#A(this.#u[e]) || (yield this.#u[e])
        }* rvalues() {
          for (const e of this.#T()) void 0 === this.#u[e] || this.#A(this.#u[e]) || (yield this.#u[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e, t = {}) {
          for (const r of this.#E()) {
            const i = this.#u[r],
              n = this.#A(i) ? i.__staleWhileFetching : i;
            if (void 0 !== n && e(n, this.#c[r], this)) return this.get(this.#c[r], t)
          }
        }
        forEach(e, t = this) {
          for (const r of this.#E()) {
            const i = this.#u[r],
              n = this.#A(i) ? i.__staleWhileFetching : i;
            void 0 !== n && e.call(t, n, this.#c[r], this)
          }
        }
        rforEach(e, t = this) {
          for (const r of this.#T()) {
            const i = this.#u[r],
              n = this.#A(i) ? i.__staleWhileFetching : i;
            void 0 !== n && e.call(t, n, this.#c[r], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (const t of this.#T({
              allowStale: !0
            })) this.#L(t) && (this.#j(this.#c[t], "expire"), e = !0);
          return e
        }
        info(e) {
          const t = this.#h.get(e);
          if (void 0 === t) return;
          const r = this.#u[t],
            i = this.#A(r) ? r.__staleWhileFetching : r;
          if (void 0 === i) return;
          const n = {
            value: i
          };
          if (this.#b && this.#w) {
            const e = this.#b[t],
              r = this.#w[t];
            if (e && r) {
              const t = e - (Se.now() - r);
              n.ttl = t, n.start = Date.now()
            }
          }
          return this.#y && (n.size = this.#y[t]), n
        }
        dump() {
          const e = [];
          for (const t of this.#E({
              allowStale: !0
            })) {
            const r = this.#c[t],
              i = this.#u[t],
              n = this.#A(i) ? i.__staleWhileFetching : i;
            if (void 0 === n || void 0 === r) continue;
            const s = {
              value: n
            };
            if (this.#b && this.#w) {
              s.ttl = this.#b[t];
              const e = Se.now() - this.#w[t];
              s.start = Math.floor(Date.now() - e)
            }
            this.#y && (s.size = this.#y[t]), e.unshift([r, s])
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
            ttl: i = this.ttl,
            start: n,
            noDisposeOnSet: s = this.noDisposeOnSet,
            sizeCalculation: o = this.sizeCalculation,
            status: a
          } = r;
          let {
            noUpdateTTL: l = this.noUpdateTTL
          } = r;
          const h = this.#M(e, t, r.size || 0, o);
          if (this.maxEntrySize && h > this.maxEntrySize) return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.#j(e, "set"), this;
          let c = 0 === this.#a ? void 0 : this.#h.get(e);
          if (void 0 === c) c = 0 === this.#a ? this.#m : 0 !== this.#g.length ? this.#g.pop() : this.#a === this.#t ? this.#B(!1) : this.#a, this.#c[c] = e, this.#u[c] = t, this.#h.set(e, c), this.#d[this.#m] = c, this.#f[c] = this.#m, this.#m = c, this.#a++, this.#P(c, h, a), a && (a.set = "add"), l = !1;
          else {
            this.#x(c);
            const r = this.#u[c];
            if (t !== r) {
              if (this.#C && this.#A(r)) {
                r.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = r;
                void 0 === t || s || (this.#k && this.#i?.(t, e, "set"), this.#S && this.#v?.push([t, e, "set"]))
              } else s || (this.#k && this.#i?.(r, e, "set"), this.#S && this.#v?.push([r, e, "set"]));
              if (this.#D(c), this.#P(c, h, a), this.#u[c] = t, a) {
                a.set = "replace";
                const e = r && this.#A(r) ? r.__staleWhileFetching : r;
                void 0 !== e && (a.oldValue = e)
              }
            } else a && (a.set = "update")
          }
          if (0 === i || this.#b || this.#F(), this.#b && (l || this.#_(c, i, n), a && this.#I(a, c)), !s && this.#S && this.#v) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#n?.(...t)
          }
          return this
        }
        pop() {
          try {
            for (; this.#a;) {
              const e = this.#u[this.#p];
              if (this.#B(!0), this.#A(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#S && this.#v) {
              const e = this.#v;
              let t;
              for (; t = e?.shift();) this.#n?.(...t)
            }
          }
        }
        #B(e) {
          const t = this.#p,
            r = this.#c[t],
            i = this.#u[t];
          return this.#C && this.#A(i) ? i.__abortController.abort(new Error("evicted")) : (this.#k || this.#S) && (this.#k && this.#i?.(i, r, "evict"), this.#S && this.#v?.push([i, r, "evict"])), this.#D(t), e && (this.#c[t] = void 0, this.#u[t] = void 0, this.#g.push(t)), 1 === this.#a ? (this.#p = this.#m = 0, this.#g.length = 0) : this.#p = this.#d[t], this.#h.delete(r), this.#a--, t
        }
        has(e, t = {}) {
          const {
            updateAgeOnHas: r = this.updateAgeOnHas,
            status: i
          } = t, n = this.#h.get(e);
          if (void 0 !== n) {
            const e = this.#u[n];
            if (this.#A(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#L(n)) return r && this.#R(n), i && (i.has = "hit", this.#I(i, n)), !0;
            i && (i.has = "stale", this.#I(i, n))
          } else i && (i.has = "miss");
          return !1
        }
        peek(e, t = {}) {
          const {
            allowStale: r = this.allowStale
          } = t, i = this.#h.get(e);
          if (void 0 === i || !r && this.#L(i)) return;
          const n = this.#u[i];
          return this.#A(n) ? n.__staleWhileFetching : n
        }
        #O(e, t, r, i) {
          const n = void 0 === t ? void 0 : this.#u[t];
          if (this.#A(n)) return n;
          const s = new Ee,
            {
              signal: o
            } = r;
          o?.addEventListener("abort", () => s.abort(o.reason), {
            signal: s.signal
          });
          const a = {
              signal: s.signal,
              options: r,
              context: i
            },
            l = (i, n = !1) => {
              const {
                aborted: o
              } = s.signal, l = r.ignoreFetchAbort && void 0 !== i;
              if (r.status && (o && !n ? (r.status.fetchAborted = !0, r.status.fetchError = s.signal.reason, l && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), o && !l && !n) return h(s.signal.reason);
              const u = c;
              return this.#u[t] === c && (void 0 === i ? u.__staleWhileFetching ? this.#u[t] = u.__staleWhileFetching : this.#j(e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, i, a.options))), i
            },
            h = i => {
              const {
                aborted: n
              } = s.signal, o = n && r.allowStaleOnFetchAbort, a = o || r.allowStaleOnFetchRejection, l = a || r.noDeleteOnFetchRejection, h = c;
              if (this.#u[t] === c && (l && void 0 !== h.__staleWhileFetching ? o || (this.#u[t] = h.__staleWhileFetching) : this.#j(e, "fetch")), a) return r.status && void 0 !== h.__staleWhileFetching && (r.status.returnedStale = !0), h.__staleWhileFetching;
              if (h.__returned === h) throw i
            };
          r.status && (r.status.fetchDispatched = !0);
          const c = new Promise((t, i) => {
              const o = this.#s?.(e, n, a);
              o && o instanceof Promise && o.then(e => t(void 0 === e ? void 0 : e), i), s.signal.addEventListener("abort", () => {
                r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = e => l(e, !0)))
              })
            }).then(l, e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), h(e))),
            u = Object.assign(c, {
              __abortController: s,
              __staleWhileFetching: n,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, u, {
            ...a.options,
            status: void 0
          }), t = this.#h.get(e)) : this.#u[t] = u, u
        }
        #A(e) {
          if (!this.#C) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof Ee
        }
        async fetch(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: i = this.updateAgeOnGet,
            noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
            ttl: s = this.ttl,
            noDisposeOnSet: o = this.noDisposeOnSet,
            size: a = 0,
            sizeCalculation: l = this.sizeCalculation,
            noUpdateTTL: h = this.noUpdateTTL,
            noDeleteOnFetchRejection: c = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: u = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: d = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: f = this.allowStaleOnFetchAbort,
            context: p,
            forceRefresh: m = !1,
            status: g,
            signal: v
          } = t;
          if (!this.#C) return g && (g.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: i,
            noDeleteOnStaleGet: n,
            status: g
          });
          const y = {
            allowStale: r,
            updateAgeOnGet: i,
            noDeleteOnStaleGet: n,
            ttl: s,
            noDisposeOnSet: o,
            size: a,
            sizeCalculation: l,
            noUpdateTTL: h,
            noDeleteOnFetchRejection: c,
            allowStaleOnFetchRejection: u,
            allowStaleOnFetchAbort: f,
            ignoreFetchAbort: d,
            status: g,
            signal: v
          };
          let w = this.#h.get(e);
          if (void 0 === w) {
            g && (g.fetch = "miss");
            const t = this.#O(e, w, y, p);
            return t.__returned = t
          } {
            const t = this.#u[w];
            if (this.#A(t)) {
              const e = r && void 0 !== t.__staleWhileFetching;
              return g && (g.fetch = "inflight", e && (g.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const n = this.#L(w);
            if (!m && !n) return g && (g.fetch = "hit"), this.#x(w), i && this.#R(w), g && this.#I(g, w), t;
            const s = this.#O(e, w, y, p),
              o = void 0 !== s.__staleWhileFetching && r;
            return g && (g.fetch = n ? "stale" : "refresh", o && n && (g.returnedStale = !0)), o ? s.__staleWhileFetching : s.__returned = s
          }
        }
        async forceFetch(e, t = {}) {
          const r = await this.fetch(e, t);
          if (void 0 === r) throw new Error("fetch() returned undefined");
          return r
        }
        memo(e, t = {}) {
          const r = this.#o;
          if (!r) throw new Error("no memoMethod provided to constructor");
          const {
            context: i,
            forceRefresh: n,
            ...s
          } = t, o = this.get(e, s);
          if (!n && void 0 !== o) return o;
          const a = r(e, o, {
            options: s,
            context: i
          });
          return this.set(e, a, s), a
        }
        get(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: i = this.updateAgeOnGet,
            noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
            status: s
          } = t, o = this.#h.get(e);
          if (void 0 !== o) {
            const t = this.#u[o],
              a = this.#A(t);
            return s && this.#I(s, o), this.#L(o) ? (s && (s.get = "stale"), a ? (s && r && void 0 !== t.__staleWhileFetching && (s.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (n || this.#j(e, "expire"), s && r && (s.returnedStale = !0), r ? t : void 0)) : (s && (s.get = "hit"), a ? t.__staleWhileFetching : (this.#x(o), i && this.#R(o), t))
          }
          s && (s.get = "miss")
        }
        #W(e, t) {
          this.#f[t] = e, this.#d[e] = t
        }
        #x(e) {
          e !== this.#m && (e === this.#p ? this.#p = this.#d[e] : this.#W(this.#f[e], this.#d[e]), this.#W(this.#m, e), this.#m = e)
        }
        delete(e) {
          return this.#j(e, "delete")
        }
        #j(e, t) {
          let r = !1;
          if (0 !== this.#a) {
            const i = this.#h.get(e);
            if (void 0 !== i)
              if (r = !0, 1 === this.#a) this.#U(t);
              else {
                this.#D(i);
                const r = this.#u[i];
                if (this.#A(r) ? r.__abortController.abort(new Error("deleted")) : (this.#k || this.#S) && (this.#k && this.#i?.(r, e, t), this.#S && this.#v?.push([r, e, t])), this.#h.delete(e), this.#c[i] = void 0, this.#u[i] = void 0, i === this.#m) this.#m = this.#f[i];
                else if (i === this.#p) this.#p = this.#d[i];
                else {
                  const e = this.#f[i];
                  this.#d[e] = this.#d[i];
                  const t = this.#d[i];
                  this.#f[t] = this.#f[i]
                }
                this.#a--, this.#g.push(i)
              }
          }
          if (this.#S && this.#v?.length) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#n?.(...t)
          }
          return r
        }
        clear() {
          return this.#U("delete")
        }
        #U(e) {
          for (const t of this.#T({
              allowStale: !0
            })) {
            const r = this.#u[t];
            if (this.#A(r)) r.__abortController.abort(new Error("deleted"));
            else {
              const i = this.#c[t];
              this.#k && this.#i?.(r, i, e), this.#S && this.#v?.push([r, i, e])
            }
          }
          if (this.#h.clear(), this.#u.fill(void 0), this.#c.fill(void 0), this.#b && this.#w && (this.#b.fill(0), this.#w.fill(0)), this.#y && this.#y.fill(0), this.#p = 0, this.#m = 0, this.#g.length = 0, this.#l = 0, this.#a = 0, this.#S && this.#v) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#n?.(...t)
          }
        }
      }
      r(79465);
      var Re = new Set,
        Ie = [],
        De = [];
      u || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        u = !0, c.push(e)
      })({
        appendCss: e => {
          De.push(e)
        },
        registerClassName: e => {
          Re.add(e)
        },
        registerComposition: e => {
          Ie.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: r,
              composedClassLists: i
            } = e, n = new be(t, i);
            for (var s of r) n.processCssObj(s);
            return n.toCss()
          }({
            localClassNames: Array.from(Re),
            composedClassLists: Ie,
            cssObjs: De
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: r
            } = e, i = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, n = s[i];
            if (!n) {
              var o = document.createElement("style");
              t.packageName && o.setAttribute("data-package", t.packageName), o.setAttribute("data-file", t.filePath), o.setAttribute("type", "text/css"), n = s[i] = o, document.head.appendChild(o)
            }
            n.innerHTML = r
          })({
            fileScope: e,
            css: t
          }), De = []
        },
        getIdentOption: () => "short"
      });
      new je({
        max: 500
      })
    },
    22673: (e, t, r) => {
      "use strict";
      r.d(t, {
        X3: () => i.X,
        IO: () => s
      });
      var i = r(37792);
      r(3322);
      const n = "__FOUNDRY_ACCENT__",
        s = (e, t) => i.X ? t() : (window[n] || (window[n] = new Map), window[n].has(e) || window[n].set(e, t()), window[n].get(e));
      var o;
      r(98312), r(41972), r(56265), r(31454), r(10533), r(10613), r(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag
    },
    23644: (e, t, r) => {
      "use strict";

      function i(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function n(e, t) {
        var r = e;
        for (var i of t) {
          if (!(i in r)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
          r = r[i]
        }
        return r
      }

      function s(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          i = {};
        for (var n in e) {
          var o = e[n],
            a = [...r, n];
          "string" == typeof o || "number" == typeof o || null == o ? i[n] = t(o, a) : "object" != typeof o || Array.isArray(o) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(o) ? "Array" : typeof o, '"')) : i[n] = s(o, t, a)
        }
        return i
      }
      r.d(t, {
        Bx: () => s,
        Jt: () => n,
        Tm: () => i
      })
    },
    37792: (e, t, r) => {
      "use strict";
      r.d(t, {
        X: () => i
      });
      const i = "undefined" == typeof window
    },
    42649: e => {
      var t, r, i = e.exports = {};

      function n() {
        throw new Error("setTimeout has not been defined")
      }

      function s() {
        throw new Error("clearTimeout has not been defined")
      }

      function o(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === n || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
          t = n
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
          r = s
        }
      }();
      var a, l = [],
        h = !1,
        c = -1;

      function u() {
        h && a && (h = !1, a.length ? l = a.concat(l) : c = -1, l.length && d())
      }

      function d() {
        if (!h) {
          var e = o(u);
          h = !0;
          for (var t = l.length; t;) {
            for (a = l, l = []; ++c < t;) a && a[c].run();
            c = -1, t = l.length
          }
          a = null, h = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function f(e, t) {
        this.fun = e, this.array = t
      }

      function p() {}
      i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new f(e, t)), 1 !== l.length || h || o(d)
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(e) {
        return []
      }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, i.cwd = function() {
        return "/"
      }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, i.umask = function() {
        return 0
      }
    },
    78318: e => {
      "use strict";
      var t = {}.hasOwnProperty,
        r = /[ -,\.\/:-@\[-\^`\{-~]/,
        i = /[ -,\.\/:-@\[\]\^`\{-~]/,
        n = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        s = function e(s, o) {
          "single" != (o = function(e, r) {
            if (!e) return r;
            var i = {};
            for (var n in r) i[n] = t.call(e, n) ? e[n] : r[n];
            return i
          }(o, e.options)).quotes && "double" != o.quotes && (o.quotes = "single");
          for (var a = "double" == o.quotes ? '"' : "'", l = o.isIdentifier, h = s.charAt(0), c = "", u = 0, d = s.length; u < d;) {
            var f = s.charAt(u++),
              p = f.charCodeAt(),
              m = void 0;
            if (p < 32 || p > 126) {
              if (p >= 55296 && p <= 56319 && u < d) {
                var g = s.charCodeAt(u++);
                56320 == (64512 & g) ? p = ((1023 & p) << 10) + (1023 & g) + 65536 : u--
              }
              m = "\\" + p.toString(16).toUpperCase() + " "
            } else m = o.escapeEverything ? r.test(f) ? "\\" + f : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(f) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == f || !l && ('"' == f && a == f || "'" == f && a == f) || l && i.test(f) ? "\\" + f : f;
            c += m
          }
          return l && (/^-[-\d]/.test(c) ? c = "\\-" + c.slice(1) : /\d/.test(h) && (c = "\\3" + h + " " + c.slice(1))), c = c.replace(n, function(e, t, r) {
            return t && t.length % 2 ? e : (t || "") + r
          }), !l && o.wrap ? a + c + a : c
        };
      s.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, s.version = "3.0.0", e.exports = s
    }
  }
]);