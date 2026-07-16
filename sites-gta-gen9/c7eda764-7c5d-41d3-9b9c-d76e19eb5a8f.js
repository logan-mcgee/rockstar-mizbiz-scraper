try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c7eda764-7c5d-41d3-9b9c-d76e19eb5a8f", e._sentryDebugIdIdentifier = "sentry-dbid-c7eda764-7c5d-41d3-9b9c-d76e19eb5a8f")
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
  [617], {
    54540(e, t, r) {
      "use strict";
      var n, i, o = {},
        s = r(73481),
        a = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: r,
              output: n
            } = this._buildTables(e);
            this.gotoFn = r, this.output = n, this.failure = t
          }
          _buildTables(e) {
            const t = {
                0: {}
              },
              r = {};
            let n = 0;
            for (const i of e) {
              let e = 0;
              for (const o of i) t[e] && o in t[e] ? e = t[e][o] : (n++, t[e][o] = n, t[n] = {}, e = n, r[n] = []);
              r[e].push(i)
            }
            const i = {},
              o = [];
            for (const e in t[0]) {
              const r = t[0][e];
              i[r] = 0, o.push(r)
            }
            for (; o.length > 0;) {
              const e = o.shift();
              if (void 0 !== e)
                for (const n in t[e]) {
                  const s = t[e][n];
                  o.push(s);
                  let a = i[e];
                  for (; a > 0 && !(n in t[a]);) a = i[a];
                  if (n in t[a]) {
                    const e = t[a][n];
                    i[s] = e, r[s] = [...r[s], ...r[e]]
                  } else i[s] = 0
                }
            }
            return {
              gotoFn: t,
              output: r,
              failure: i
            }
          }
          search(e) {
            let t = 0;
            const r = [];
            for (let n = 0; n < e.length; n++) {
              const i = e[n];
              for (; t > 0 && !(i in this.gotoFn[t]);) t = this.failure[t];
              if (i in this.gotoFn[t] && (t = this.gotoFn[t][i], this.output[t].length > 0)) {
                const e = this.output[t];
                r.push([n, e])
              }
            }
            return r
          }
          match(e) {
            let t = 0;
            for (let r = 0; r < e.length; r++) {
              const n = e[r];
              for (; t > 0 && !(n in this.gotoFn[t]);) t = this.failure[t];
              if (n in this.gotoFn[t] && (t = this.gotoFn[t][n], this.output[t].length > 0)) return !0
            }
            return !1
          }
        },
        l = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        c = !1;

      function h(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(n || (n = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(i || (i = {}));
      const u = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        f = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        d = new Map([
          [126, i.Element],
          [94, i.Start],
          [36, i.End],
          [42, i.Any],
          [33, i.Not],
          [124, i.Hyphen]
        ]),
        p = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        m = new Set(["contains", "icontains"]);

      function g(e, t, r) {
        const n = parseInt(t, 16) - 65536;
        return n != n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
      }

      function v(e) {
        return e.replace(f, g)
      }

      function y(e) {
        return 39 === e || 34 === e
      }

      function w(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function b(e) {
        const t = [],
          r = k(t, `${e}`, 0);
        if (r < e.length) throw new Error(`Unmatched selector: ${e.slice(r)}`);
        return t
      }

      function k(e, t, r) {
        let o = [];

        function s(e) {
          const n = t.slice(r + e).match(u);
          if (!n) throw new Error(`Expected name, found ${t.slice(r)}`);
          const [i] = n;
          return r += e + i.length, v(i)
        }

        function a(e) {
          for (r += e; r < t.length && w(t.charCodeAt(r));) r++
        }

        function l() {
          const e = r += 1;
          let n = 1;
          for (; n > 0 && r < t.length; r++) 40 !== t.charCodeAt(r) || c(r) ? 41 !== t.charCodeAt(r) || c(r) || n-- : n++;
          if (n) throw new Error("Parenthesis not matched");
          return v(t.slice(e, r - 1))
        }

        function c(e) {
          let r = 0;
          for (; 92 === t.charCodeAt(--e);) r++;
          return !(1 & ~r)
        }

        function h() {
          if (o.length > 0 && function(e) {
              switch (e.type) {
                case n.Adjacent:
                case n.Child:
                case n.Descendant:
                case n.Parent:
                case n.Sibling:
                case n.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(o[o.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function f(e) {
          o.length > 0 && o[o.length - 1].type === n.Descendant ? o[o.length - 1].type = e : (h(), o.push({
            type: e
          }))
        }

        function g(e, t) {
          o.push({
            type: n.Attribute,
            name: e,
            action: t,
            value: s(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function b() {
          if (o.length && o[o.length - 1].type === n.Descendant && o.pop(), 0 === o.length) throw new Error("Empty sub-selector");
          e.push(o)
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
              0 !== o.length && o[0].type === n.Descendant || (h(), o.push({
                type: n.Descendant
              })), a(1);
              break;
            case 62:
              f(n.Child), a(1);
              break;
            case 60:
              f(n.Parent), a(1);
              break;
            case 126:
              f(n.Sibling), a(1);
              break;
            case 43:
              f(n.Adjacent), a(1);
              break;
            case 46:
              g("class", i.Element);
              break;
            case 35:
              g("id", i.Equals);
              break;
            case 91: {
              let e;
              a(1);
              let l = null;
              124 === t.charCodeAt(r) ? e = s(1) : t.startsWith("*|", r) ? (l = "*", e = s(2)) : (e = s(0), 124 === t.charCodeAt(r) && 61 !== t.charCodeAt(r + 1) && (l = e, e = s(1))), a(0);
              let h = i.Exists;
              const u = d.get(t.charCodeAt(r));
              if (u) {
                if (h = u, 61 !== t.charCodeAt(r + 1)) throw new Error("Expected `=`");
                a(2)
              } else 61 === t.charCodeAt(r) && (h = i.Equals, a(1));
              let f = "",
                p = null;
              if ("exists" !== h) {
                if (y(t.charCodeAt(r))) {
                  const e = t.charCodeAt(r);
                  let n = r + 1;
                  for (; n < t.length && (t.charCodeAt(n) !== e || c(n));) n += 1;
                  if (t.charCodeAt(n) !== e) throw new Error("Attribute value didn't end");
                  f = v(t.slice(r + 1, n)), r = n + 1
                } else {
                  const e = r;
                  for (; r < t.length && (!w(t.charCodeAt(r)) && 93 !== t.charCodeAt(r) || c(r));) r += 1;
                  f = v(t.slice(e, r))
                }
                a(0);
                const e = 32 | t.charCodeAt(r);
                115 === e ? (p = !1, a(1)) : 105 === e && (p = !0, a(1))
              }
              if (93 !== t.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const m = {
                type: n.Attribute,
                name: e,
                action: h,
                value: f,
                namespace: l,
                ignoreCase: p
              };
              o.push(m);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(r + 1)) {
                o.push({
                  type: n.PseudoElement,
                  name: s(2).toLowerCase(),
                  data: 40 === t.charCodeAt(r) ? l() : null
                });
                continue
              }
              const e = s(1).toLowerCase();
              let i = null;
              if (40 === t.charCodeAt(r))
                if (p.has(e)) {
                  if (y(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (i = [], r = k(i, t, r + 1), 41 !== t.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  r += 1
                } else {
                  if (i = l(), m.has(e)) {
                    const e = i.charCodeAt(0);
                    e === i.charCodeAt(i.length - 1) && y(e) && (i = i.slice(1, -1))
                  }
                  i = v(i)
                } o.push({
                type: n.Pseudo,
                name: e,
                data: i
              });
              break
            }
            case 44:
              b(), o = [], a(1);
              break;
            default: {
              if (t.startsWith("/*", r)) {
                const e = t.indexOf("*/", r + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                r = e + 2, 0 === o.length && a(0);
                break
              }
              let i, l = null;
              if (42 === e) r += 1, i = "*";
              else if (124 === e) {
                if (i = "", 124 === t.charCodeAt(r + 1)) {
                  f(n.ColumnCombinator), a(2);
                  break
                }
              } else {
                if (!u.test(t.slice(r))) break e;
                i = s(0)
              }
              124 === t.charCodeAt(r) && 124 !== t.charCodeAt(r + 1) && (l = i, 42 === t.charCodeAt(r + 1) ? (i = "*", r += 2) : i = s(1)), o.push("*" === i ? {
                type: n.Universal,
                namespace: l
              } : {
                type: n.Tag,
                name: i,
                namespace: l
              })
            }
          }
        }
        return b(), r
      }

      function x(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? x(Object(r), !0).forEach(function(t) {
            C(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function C(e, t, r) {
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
          const n = "string" == typeof e ? [e] : e.raw,
            {
              alignValues: i = !1,
              escapeSpecialCharacters: o = Array.isArray(e),
              trimWhitespace: s = !0
            } = t;
          let a = "";
          for (let e = 0; e < n.length; e++) {
            let t = n[e];
            o && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), a += t, e < r.length && (a += i ? O(r[e], a) : r[e])
          }
          const l = a.split("\n");
          let c = null;
          for (const e of l) {
            const t = e.match(/^(\s+)\S+/);
            if (t) {
              const e = t[1].length;
              c = c ? Math.min(c, e) : e
            }
          }
          if (null !== c) {
            const e = c;
            a = l.map(t => " " === t[0] || "\t" === t[0] ? t.slice(e) : t).join("\n")
          }
          return s && (a = a.trim()), o && (a = a.replace(/\\n/g, "\n").replace(/\\t/g, "\t").replace(/\\r/g, "\r").replace(/\\v/g, "\v").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\0/g, "\0").replace(/\\x([\da-fA-F]{2})/g, (e, t) => String.fromCharCode(parseInt(t, 16))).replace(/\\u\{([\da-fA-F]{1,6})\}/g, (e, t) => String.fromCodePoint(parseInt(t, 16))).replace(/\\u([\da-fA-F]{4})/g, (e, t) => String.fromCharCode(parseInt(t, 16)))), "undefined" != typeof Bun && (a = a.replace(/\\u(?:\{([\da-fA-F]{1,6})\}|([\da-fA-F]{4}))/g, (e, t, r) => {
            var n;
            const i = null !== (n = null != t ? t : r) && void 0 !== n ? n : "";
            return String.fromCodePoint(parseInt(i, 16))
          })), a
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
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }, L.apply(this, arguments)
      };

      function E(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
        }
        return r
      }

      function T(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, o = r.call(e),
          s = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = o.next()).done;) s.push(n.value)
        } catch (e) {
          i = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return s
      }
      var z = /(\u000D|\u000C|\u000D\u000A)/g,
        F = /[\u0000\uD800-\uDFFF]/g,
        R = /(\/\*)[\s\S]*?(\*\/)/g,
        j = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), n = [], i = t + 1; i < e.length; i += 1) {
            var o = e.charCodeAt(i);
            if (o === r) return [i, String.fromCharCode.apply(null, n)];
            if (92 === o) {
              var s = D(e, i);
              if (null === s) return null;
              var a = T(s, 2),
                l = a[0],
                c = a[1];
              n.push(c), i = l
            } else {
              if (10 === o) return null;
              n.push(o)
            }
          }
          return null
        },
        _ = function(e, t) {
          if (e.length <= t) return !1;
          var r, n = e.charCodeAt(t);
          return 45 === n ? !(e.length <= t + 1) && (45 === (r = e.charCodeAt(t + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 1) && 10 !== (r = e.charCodeAt(t + 1))
        },
        D = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var r = e.charCodeAt(t + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var n = [r], i = Math.min(t + 7, e.length), o = t + 2; o < i; o += 1) {
              var s = e.charCodeAt(o);
              if (!(s >= 48 && s <= 57 || s >= 65 && s <= 70 || s >= 97 && s <= 102)) break;
              n.push(s)
            }
            if (o < e.length) {
              var a = e.charCodeAt(o);
              9 !== a && 32 !== a && 10 !== a || (o += 1)
            }
            return [o - 1, parseInt(String.fromCharCode.apply(null, n), 16)]
          }
          return [t + 1, r]
        },
        P = function(e, t) {
          var r = M(e, t);
          if (null === r) return null;
          var n = T(r, 3),
            i = n[0],
            o = n[1],
            s = n[2],
            a = B(e, i + 1);
          if (null !== a) {
            var l = T(a, 2);
            return [l[0],
              ["<dimension-token>", o, l[1]]
            ]
          }
          return i + 1 < e.length && 37 === e.charCodeAt(i + 1) ? [i + 1, ["<percentage-token>", o]] : [i, ["<number-token>", o, s]]
        },
        M = function(e, t) {
          if (e.length <= t) return null;
          var r = "integer",
            n = [],
            i = e.charCodeAt(t);
          for (43 !== i && 45 !== i || (t += 1, 45 === i && n.push(45)); t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1;
          if (t + 1 < e.length) {
            var o = e.charCodeAt(t),
              s = e.charCodeAt(t + 1);
            if (46 === o && s >= 48 && s <= 57)
              for (n.push(o, s), r = "number", t += 2; t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1
          }
          if (t + 1 < e.length) {
            o = e.charCodeAt(t), s = e.charCodeAt(t + 1);
            var a = e.charCodeAt(t + 2);
            if (69 === o || 101 === o) {
              var l = s >= 48 && s <= 57;
              if (l || (43 === s || 45 === s) && a >= 48 && a <= 57)
                for (r = "number", l ? (n.push(69, s), t += 2) : 45 === s ? (n.push(69, 45, a), t += 3) : (n.push(69, a), t += 3); t < e.length;) {
                  var c;
                  if (!((c = e.charCodeAt(t)) >= 48 && c <= 57)) break;
                  n.push(c), t += 1
                }
            }
          }
          var h = String.fromCharCode.apply(null, n),
            u = "number" === r ? parseFloat(h) : parseInt(h);
          return -0 === u && (u = 0), Number.isNaN(u) ? null : [t - 1, u, r]
        },
        I = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var i = D(e, t);
              if (null === i) break;
              var o = T(i, 2),
                s = o[0],
                a = o[1];
              r.push(a), t = s
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        B = function(e, t) {
          if (e.length <= t || !_(e, t)) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var i = D(e, t);
              if (null === i) break;
              var o = T(i, 2),
                s = o[0],
                a = o[1];
              r.push(a), t = s
            } return [t - 1, String.fromCharCode.apply(null, r)]
        },
        W = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var n = [], i = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, n)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) i || 0 === n.length || (i = !0);
            else if (92 === r) {
              var o = D(e, t);
              if (null === o || i) return null;
              var s = T(o, 2),
                a = s[0],
                l = s[1];
              n.push(l), t = a
            } else {
              if (i) return null;
              n.push(r)
            }
            r = e.charCodeAt(++t)
          }
          return null
        },
        N = function(e, t) {
          var r = B(e, t);
          if (null === r) return null;
          var n = T(r, 2),
            i = n[0],
            o = n[1];
          if ("url" === o.toLowerCase()) {
            if (e.length > i + 1 && 40 === e.charCodeAt(i + 1)) {
              for (var s = 2; i + s < e.length; s += 1) {
                var a = e.charCodeAt(i + s);
                if (34 === a || 39 === a) return [i + 1, o.toLowerCase(), "<function-token>"];
                if (9 !== a && 32 !== a && 10 !== a) {
                  var l = W(e, i + s);
                  if (null === l) return null;
                  var c = T(l, 2);
                  return [c[0], c[1], "<url-token>"]
                }
              }
              return [i + 1, o.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > i + 1 && 40 === e.charCodeAt(i + 1)) return [i + 1, o.toLowerCase(), "<function-token>"];
          return [i, o.toLowerCase(), "<ident-token>"]
        },
        q = function(e) {
          if (null === e.mediaCondition) return e;
          var t = U(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        U = function e(t) {
          for (var r = t.children.length - 1; r >= 0; r--) {
            var n = t.children[r];
            if (!("context" in n)) {
              var i = e(n);
              if (null === i.operator && 1 === i.children.length) t.children[r] = i.children[0];
              else if (i.operator === t.operator && ("and" === i.operator || "or" === i.operator)) {
                for (var o = [r, 1], s = 0; s < i.children.length; s++) o.push(i.children[s]);
                t.children.splice.apply(t.children, o)
              }
            }
          }
          return t
        },
        $ = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        H = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(z, "\n").replace(F, "�")).replace(R, "");
            for (var r = []; t < e.length; t += 1) {
              var n = e.charCodeAt(t);
              if (9 === n || 32 === n || 10 === n) {
                for (var i = e.charCodeAt(++t); 9 === i || 32 === i || 10 === i;) i = e.charCodeAt(++t);
                t -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === n) {
                if (null === (A = j(e, t))) return null;
                var o = T(A, 2),
                  s = o[0],
                  a = o[1];
                r.push({
                  type: "<string-token>",
                  value: a
                }), t = s
              } else if (35 === n) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = _(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (A = I(e, t + 1))) {
                    var c = T(A, 2);
                    s = c[0], a = c[1], r.push({
                      type: "<hash-token>",
                      value: a.toLowerCase(),
                      flag: l
                    }), t = s;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (39 === n) {
                if (null === (A = j(e, t))) return null;
                var h = T(A, 2);
                s = h[0], a = h[1], r.push({
                  type: "<string-token>",
                  value: a
                }), t = s
              } else if (40 === n) r.push({
                type: "<(-token>"
              });
              else if (41 === n) r.push({
                type: "<)-token>"
              });
              else if (43 === n) {
                var u = P(e, t);
                if (null === u) r.push({
                  type: "<delim-token>",
                  value: n
                });
                else {
                  var f = T(u, 2);
                  s = f[0], "<dimension-token>" === (S = f[1])[0] ? r.push({
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
                  }), t = s
                }
              } else if (44 === n) r.push({
                type: "<comma-token>"
              });
              else if (45 === n) {
                if (null !== (y = P(e, t))) {
                  var d = T(y, 2);
                  s = d[0], "<dimension-token>" === (S = d[1])[0] ? r.push({
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
                  }), t = s;
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
                if (null !== (A = N(e, t))) {
                  var g = T(A, 3),
                    v = (s = g[0], a = g[1], g[2]);
                  r.push({
                    type: v,
                    value: a
                  }), t = s;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (46 === n) {
                var y;
                if (null !== (y = P(e, t))) {
                  var w = T(y, 2);
                  s = w[0], "<dimension-token>" === (S = w[1])[0] ? r.push({
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
                  }), t = s;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (58 === n) r.push({
                type: "<colon-token>"
              });
              else if (59 === n) r.push({
                type: "<semicolon-token>"
              });
              else if (60 === n) {
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
                  value: n
                })
              } else if (64 === n) {
                if (null !== (A = B(e, t + 1))) {
                  var k = T(A, 2);
                  s = k[0], a = k[1], r.push({
                    type: "<at-keyword-token>",
                    value: a.toLowerCase()
                  }), t = s;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (91 === n) r.push({
                type: "<[-token>"
              });
              else if (92 === n) {
                if (null === (A = D(e, t))) return null;
                var x = T(A, 2);
                s = x[0], a = x[1], e = e.slice(0, t) + a + e.slice(s + 1), t -= 1
              } else if (93 === n) r.push({
                type: "<]-token>"
              });
              else if (123 === n) r.push({
                type: "<{-token>"
              });
              else if (125 === n) r.push({
                type: "<}-token>"
              });
              else if (n >= 48 && n <= 57) {
                var S, C = T(A = P(e, t), 2);
                s = C[0], "<dimension-token>" === (S = C[1])[0] ? r.push({
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
                }), t = s
              } else if (95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128) {
                var A;
                if (null === (A = N(e, t))) return null;
                var O = T(A, 3);
                s = O[0], a = O[1], v = O[2], r.push({
                  type: v,
                  value: a
                }), t = s
              } else r.push({
                type: "<delim-token>",
                value: n
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(e.trim());
          if (null === t) throw $("Failed tokenizing");
          var r = 0,
            n = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw $("Expected whitespace after media");
            r = 2;
            for (var i = 2; i < t.length - 1; i++) {
              var o = t[i];
              if ("<{-token>" === o.type) {
                n = i;
                break
              }
              if ("<semicolon-token>" === o.type) throw $("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(r, n), V(t)
        },
        G = function(e) {
          for (var t = [], r = !1, n = 0; n < e.length; n++) "<whitespace-token>" === e[n].type ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(L(L({}, e[n]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return t
        },
        V = function(e) {
          for (var t, r, n = [
              []
            ], i = 0; i < e.length; i++) {
            var o = e[i];
            "<comma-token>" === o.type ? n.push([]) : n[n.length - 1].push(o)
          }
          var s = n.map(G);
          if (1 === s.length && 0 === s[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var a = s.map(function(e) {
              return 0 === e.length ? null : Z(e)
            }),
            l = [];
          try {
            for (var c = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  r = t && e[t],
                  n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && n >= e.length && (e = void 0), {
                      value: e && e[n++],
                      done: !e
                    }
                  }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(a), h = c.next(); !h.done; h = c.next()) {
              var u = h.value;
              null !== u && l.push(u)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              h && !h.done && (r = c.return) && r.call(c)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw $("No valid media queries");
          return l
        },
        Z = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Q(e, !0)
            }
          } catch (e) {
            throw $("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw $("Expected media condition or media prefix");
            var r = null,
              n = void 0,
              i = t.value;
            "only" !== i && "not" !== i || (r = i);
            var o = null === r ? 0 : 1;
            if (e.length <= o) throw $("Expected extra token in media query");
            var s = e[o];
            if ("<ident-token>" === s.type) {
              var a = s.value;
              if ("all" === a) n = "all";
              else if ("print" === a || "screen" === a) n = a;
              else {
                if ("tty" !== a && "tv" !== a && "projection" !== a && "handheld" !== a && "braille" !== a && "embossed" !== a && "aural" !== a && "speech" !== a) throw $("Unknown ident '".concat(a, "' in media query"));
                r = "not" === r ? null : "not", n = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== s.type) throw $("Invalid media query");
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
                  mediaCondition: Q(l, !0)
                }
              } catch (e) {
                throw $("Expected media condition after '('", e)
              }
            }
            if (o + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: n,
              mediaCondition: null
            };
            if (!(o + 4 < e.length)) throw $("Expected media condition after media prefix");
            var c = e[o + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw $("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: n,
                mediaCondition: Q(e.slice(o + 2), !1)
              }
            } catch (e) {
              throw $("Expected media condition after 'and'", e)
            }
          }
        },
        Q = function e(t, r, n) {
          if (void 0 === n && (n = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var i, o = t.length - 1, s = 0, a = 0, l = 0; l < t.length; l++) {
            var c = t[l];
            if ("<(-token>" === c.type ? (a += 1, s = Math.max(s, a)) : "<)-token>" === c.type && (a -= 1), 0 === a) {
              o = l;
              break
            }
          }
          if (0 !== a) throw new Error("Mismatched parens\nInvalid media condition");
          var h = t.slice(0, o + 1);
          if (i = 1 === s ? Y(h) : "<ident-token>" === h[1].type && "not" === h[1].value ? e(h.slice(2, -1), !0, "not") : e(h.slice(1, -1), !0), o === t.length - 1) return {
            operator: n,
            children: [i]
          };
          var u = t[o + 1];
          if ("<ident-token>" !== u.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== n && n !== u.value) throw new Error("'".concat(u.value, "' and '").concat(n, "' must not be at same level\nInvalid media condition"));
          if ("or" === u.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== u.value && "or" !== u.value) throw new Error("Invalid operator: '".concat(u.value, "'\nInvalid media condition"));
          var f = e(t.slice(o + 2), r, u.value);
          return {
            operator: u.value,
            children: [i].concat(f.children)
          }
        },
        Y = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], r = 1; r < e.length; r++) {
            if (r < e.length - 2) {
              var n = e[r],
                i = e[r + 1],
                o = e[r + 2];
              if ("<number-token>" === n.type && n.value > 0 && "<delim-token>" === i.type && 47 === i.value && "<number-token>" === o.type && o.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: n.value,
                  denominator: o.value,
                  wsBefore: n.wsBefore,
                  wsAfter: o.wsAfter
                }), r += 2;
                continue
              }
            }
            t.push(e[r])
          }
          var s = t[1];
          if ("<ident-token>" === s.type && 3 === t.length) return {
            context: "boolean",
            feature: s.value
          };
          if (5 === t.length && "<ident-token>" === t[1].type && "<colon-token>" === t[2].type) {
            var a = t[3];
            if ("<number-token>" === a.type || "<dimension-token>" === a.type || "<ratio-token>" === a.type || "<ident-token>" === a.type) {
              var l = t[1].value,
                c = null,
                h = l.slice(0, 4);
              return "min-" === h ? (c = "min", l = l.slice(4)) : "max-" === h && (c = "max", l = l.slice(4)), a.wsBefore, a.wsAfter, {
                context: "value",
                prefix: c,
                feature: l,
                value: E(a, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var u = J(t);
            return {
              context: "range",
              feature: u.featureName,
              range: u
            }
          } catch (e) {
            throw $("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        J = function(e) {
          var t, r, n, i;
          if (e.length < 5 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid range");
          var o = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            s = "<number-token>" === e[1].type || "<dimension-token>" === e[1].type || "<ratio-token>" === e[1].type || "<ident-token>" === e[1].type && "infinite" === e[1].value;
          if ("<delim-token>" === e[2].type) {
            if (60 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? o[s ? "leftOp" : "rightOp"] = "<" : o[s ? "leftOp" : "rightOp"] = "<=";
            else if (62 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? o[s ? "leftOp" : "rightOp"] = ">" : o[s ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== e[2].value) throw new Error("Invalid range");
              o[s ? "leftOp" : "rightOp"] = "="
            }
            if (s) o.leftToken = e[1];
            else {
              if ("<ident-token>" !== e[1].type) throw new Error("Invalid range");
              o.featureName = e[1].value
            }
            var a = 2 + (null !== (r = null === (t = o[s ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0),
              l = e[a];
            if (s) {
              if ("<ident-token>" !== l.type) throw new Error("Invalid range");
              if (o.featureName = l.value, e.length >= 7) {
                var c = e[a + 1],
                  h = e[a + 2];
                if ("<delim-token>" !== c.type) throw new Error("Invalid range");
                var u = c.value;
                if (60 === u) "<delim-token>" !== h.type || 61 !== h.value || h.wsBefore ? o.rightOp = "<" : o.rightOp = "<=";
                else {
                  if (62 !== u) throw new Error("Invalid range");
                  "<delim-token>" !== h.type || 61 !== h.value || h.wsBefore ? o.rightOp = ">" : o.rightOp = ">="
                }
                var f = e[a + 1 + (null !== (i = null === (n = o.rightOp) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0)];
                o.rightToken = f
              } else if (a + 2 !== e.length) throw new Error("Invalid range")
            } else o.rightToken = l;
            var d = null,
              p = o.leftToken,
              m = o.leftOp,
              g = o.featureName,
              v = o.rightOp,
              y = o.rightToken,
              w = null;
            if (null !== p)
              if ("<ident-token>" === p.type) {
                var b = p.type;
                "infinite" === (x = p.value) && (w = {
                  type: b,
                  value: x
                })
              } else "<number-token>" !== p.type && "<dimension-token>" !== p.type && "<ratio-token>" !== p.type || (p.wsBefore, p.wsAfter, w = E(p, ["wsBefore", "wsAfter"]));
            var k = null;
            if (null !== y)
              if ("<ident-token>" === y.type) {
                var x;
                b = y.type, "infinite" === (x = y.value) && (k = {
                  type: b,
                  value: x
                })
              } else "<number-token>" !== y.type && "<dimension-token>" !== y.type && "<ratio-token>" !== y.type || (y.wsBefore, y.wsAfter, k = E(y, ["wsBefore", "wsAfter"]));
            if (null !== w && null !== k)
              if ("<" !== m && "<=" !== m || "<" !== v && "<=" !== v) {
                if (">" !== m && ">=" !== m || ">" !== v && ">=" !== v) throw new Error("Invalid range");
                d = {
                  leftToken: w,
                  leftOp: m,
                  featureName: g,
                  rightOp: v,
                  rightToken: k
                }
              } else d = {
                leftToken: w,
                leftOp: m,
                featureName: g,
                rightOp: v,
                rightToken: k
              };
            else(null === w && null === m && null !== v && null !== k || null !== w && null !== m && null === v && null === k) && (d = {
              leftToken: w,
              leftOp: m,
              featureName: g,
              rightOp: v,
              rightToken: k
            });
            return d
          }
          throw new Error("Invalid range")
        };

      function X(e) {
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
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? K(Object(r), !0).forEach(function(t) {
            var n, i, o;
            n = e, i = t, o = r[t], (i = X(i)) in n ? Object.defineProperty(n, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[i] = o
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : K(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function te(e, t) {
        if (null == e) return {};
        var r, n, i = function(e, t) {
          if (null == e) return {};
          var r, n, i = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
        }
        return i
      }
      var re = /(?<=^(?:[^"']|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')*)&/g;

      function ne(e, t) {
        for (var r in e) t(e[r], r)
      }

      function ie(e, t) {
        var r = {};
        for (var n in e) - 1 === t.indexOf(n) && (r[n] = e[n]);
        return r
      }

      function oe(e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
      }
      var se, ae = /[ -,\.\/:-@\[-\^`\{-~]/,
        le = /[ -,\.\/:-@\[\]\^`\{-~]/,
        ce = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        he = {
          escapeEverything: !1,
          isIdentifier: !1,
          quotes: "single",
          wrap: !1
        };

      function ue(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = "double" === (t = ee(ee({}, he), t)).quotes ? '"' : "'", {
            isIdentifier: n
          } = t, i = e.charAt(0), o = "", s = 0, a = e.length; s < a;) {
          var l = e.charAt(s++),
            c = l.charCodeAt(0),
            h = void 0;
          if (c < 32 || c > 126) {
            if (c >= 55296 && c <= 56319 && s < a) {
              var u = e.charCodeAt(s++);
              56320 == (64512 & u) ? c = ((1023 & c) << 10) + (1023 & u) + 65536 : s--
            }
            h = "\\" + c.toString(16).toUpperCase() + " "
          } else h = t.escapeEverything ? ae.test(l) ? "\\" + l : "\\" + c.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(l) ? "\\" + c.toString(16).toUpperCase() + " " : "\\" === l || !n && ('"' === l && r === l || "'" === l && r === l) || n && le.test(l) ? "\\" + l : l;
          o += h
        }
        return n && (/^-[-\d]/.test(o) ? o = "\\-" + o.slice(1) : /\d/.test(i) && (o = "\\3" + i + " " + o.slice(1))), o = o.replace(ce, function(e, t, r) {
          return t && t.length % 2 ? e : (t || "") + r
        }), !n && t.wrap ? r + o + r : o
      }

      function fe(e, t) {
        for (var r = e.length - 1; r >= 0; r--) {
          var n = e[r];
          if ("child" === n.type || "parent" === n.type || "sibling" === n.type || "adjacent" === n.type || "descendant" === n.type) return !1;
          if ("attribute" === n.type && "class" === n.name && n.value === t) return !0;
          if ("pseudo" === n.type && Array.isArray(n.data) && ("is" === n.name || "where" === n.name) && n.data.every(e => fe(e, t))) return !0
        }
        return !1
      }
      var de = (e, t) => {
        var r, n = () => {
          var r = new RegExp(".".concat(oe(ue(t, {
            isIdentifier: !0
          }))), "g");
          return e.replace(r, "&")
        };
        try {
          r = b(e)
        } catch (e) {
          throw new Error("Invalid selector: ".concat(n()), {
            cause: e
          })
        }
        r.forEach(e => {
          if (!fe(e, t)) throw new Error(A(se || (se = h(["\n        Invalid selector: ", "\n\n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n\n        This is to ensure that each style block only affects the styling of a single class.\n\n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n\n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), n(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
        })
      };
      class pe {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new pe
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var r of e) {
            var n = t.findOrCreateCondition(r);
            t = n.children
          }
          return t
        }
        addRule(e, t, r) {
          var n = this.getConditionalRulesetByPath(r).findOrCreateCondition(t);
          if (!n) throw new Error("Failed to add conditional rule");
          n.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var r = this.getConditionalRulesetByPath(e), n = 0; n < t.length; n++) {
            var i, o = t[n],
              s = null !== (i = r.precedenceLookup.get(o)) && void 0 !== i ? i : new Set;
            for (var a of t.slice(n + 1)) s.add(a);
            r.precedenceLookup.set(o, s)
          }
        }
        isCompatible(e) {
          for (var [t, r] of this.precedenceLookup.entries())
            for (var n of r) {
              var i;
              if (null !== (i = e.precedenceLookup.get(n)) && void 0 !== i && i.has(t)) return !1
            }
          for (var {
              query: o,
              children: s
            }
            of e.ruleset.values()) {
            var a = this.ruleset.get(o);
            if (a && !a.children.isCompatible(s)) return !1
          }
          return !0
        }
        merge(e) {
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of e.ruleset.values()) {
            var i = this.ruleset.get(t);
            i ? (i.rules.push(...r), i.children.merge(n)) : this.ruleset.set(t, {
              query: t,
              rules: r,
              children: n
            })
          }
          for (var [o, s] of e.precedenceLookup.entries()) {
            var a, l = null !== (a = this.precedenceLookup.get(o)) && void 0 !== a ? a : new Set;
            this.precedenceLookup.set(o, new Set([...l, ...s]))
          }
        }
        mergeIfCompatible(e) {
          return !!this.isCompatible(e) && (this.merge(e), !0)
        }
        getSortedRuleset() {
          var e = this,
            t = [],
            r = function(r) {
              var i = e.ruleset.get(n);
              if (!i) throw new Error("Can't find condition for ".concat(n));
              var o = t.findIndex(e => r.has(e.query));
              o > -1 ? t.splice(o, 0, i) : t.push(i)
            };
          for (var [n, i] of this.precedenceLookup.entries()) r(i);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of this.getSortedRuleset()) {
            var i = {};
            for (var o of r) i[o.selector] = ee(ee({}, i[o.selector]), o.rule);
            Object.assign(i, ...n.renderToArray()), e.push({
              [t]: i
            })
          }
          return e
        }
      }
      var me, ge = {
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
        ve = Object.keys(ge),
        ye = ge,
        we = (e, t) => new Error(A(me || (me = h(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        be = e => {
          if ("@media " === e) throw we(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = q(e[t])
            })(H(e))
          } catch (t) {
            throw we(e, t.message)
          }
        },
        ke = ["vars"],
        xe = ["content"],
        Se = "__DECLARATION",
        Ce = {
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

      function Ae(e, t, r, n) {
        var i = e.slice(0, t),
          o = e.slice(r);
        return "".concat(i).concat(n).concat(o)
      }
      var Oe = [...ve, "@layer", "@scope", "@media", "@supports", "@container", "@starting-style", "selectors"];
      class Le {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new pe], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map(e => [e, e])), this.localClassNamesSearch = new a(e), this.layers = new Map, this.composedClassLists = t.map(e => {
            var {
              identifier: t,
              classList: r
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(oe(r), ")"), "g")
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
              if (this.currConditionalRuleset = new pe, "layer" === e.type) {
                var t = "@layer ".concat(e.name);
                this.addLayer([t])
              } else {
                var r = ie(e.rule, Oe);
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
            n = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var i = t[t.length - 1],
            o = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: n,
            rule: r
          }, i, o)
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
            "number" != typeof t || 0 === t || Ce[r] || (e[r] = "".concat(t, "px"))
          }), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, r = te(e, ke);
          return t ? ee(ee({}, function(e, t) {
            var r = {};
            for (var n in e) r[t(e[n], n)] = e[n];
            return r
          }(t, (e, t) => (0, s.Tm)(t))), r) : r
        }
        transformContent(e) {
          var {
            content: t
          } = e, r = te(e, xe);
          return void 0 === t ? r : ee({
            content: (Array.isArray(t) ? t : [t]).map(e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"'))
          }, r)
        }
        transformClassname(e) {
          return ".".concat(ue(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            r = function(e) {
              t = t.replace(i, () => (function() {
                (() => {
                  if (l.length < 1) throw new Error("No adapter configured");
                  return l[l.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e))
            };
          for (var {
              identifier: n,
              regex: i
            }
            of this.composedClassLists) r(n);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var o = this.localClassNamesSearch.search(t), s = t.length, a = o.length - 1; a >= 0; a--) {
            var [c, [h]] = o[a], u = c - h.length + 1;
            s <= c || (s = u, "." !== t[u - 1] && (t = Ae(t, u, c + 1, this.transformClassname(h))))
          }
          return t
        }
        transformSelectors(e, t, r) {
          ne(t.selectors, (t, n) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var i = this.transformSelector(n.replace(RegExp("&", "g"), e.selector));
            de(i, e.selector);
            var o = {
              selector: i,
              rule: ie(t, Oe)
            };
            r ? this.addConditionalRule(o, r) : this.addRule(o);
            var s = {
              type: "selector",
              selector: i,
              rule: t
            };
            this.transformLayer(s, t["@layer"], r), this.transformScope(s, t["@scope"], r), this.transformSupports(s, t["@supports"], r), this.transformMedia(s, t["@media"], r), this.transformContainer(s, t["@container"], r), this.transformStartingStyle(s, t["@starting-style"], r)
          })
        }
        transformMedia(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [i, o] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map(e => "@media ".concat(e))), Object.entries(t))) {
              var s = "@media ".concat(i);
              be(s);
              var a = [...n, s];
              this.addConditionalRule({
                selector: e.selector,
                rule: ie(o, Oe)
              }, a), "local" === e.type && (this.transformSimplePseudos(e, o, a), this.transformSelectors(e, o, a)), this.transformLayer(e, o["@layer"], a), this.transformScope(e, o["@scope"], a), this.transformSupports(e, o["@supports"], a), this.transformContainer(e, o["@container"], a), this.transformStartingStyle(e, o["@starting-style"], a)
            }
        }
        transformContainer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map(e => "@container ".concat(e))), ne(t, (t, r) => {
            var i = "@container ".concat(r),
              o = [...n, i];
            this.addConditionalRule({
              selector: e.selector,
              rule: ie(t, Oe)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformScope(e, t["@scope"], o), this.transformSupports(e, t["@supports"], o), this.transformMedia(e, t["@media"], o), this.transformStartingStyle(e, t["@starting-style"], o)
          }))
        }
        transformLayer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map(e => "@layer ".concat(e))), ne(t, (t, r) => {
            var i = [...n, "@layer ".concat(r)];
            this.addLayer(i), this.addConditionalRule({
              selector: e.selector,
              rule: ie(t, Oe)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformScope(e, t["@scope"], i), this.transformMedia(e, t["@media"], i), this.transformSupports(e, t["@supports"], i), this.transformContainer(e, t["@container"], i), this.transformStartingStyle(e, t["@starting-style"], i)
          }))
        }
        transformScope(e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t) {
            var n, i = {};
            for (var [o, s] of(null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map(t => (i[t] = "@scope ".concat(this.transformSelector(t.replace(re, e.selector))), i[t]))), Object.entries(t))) {
              var a = [...r, i[o]];
              this.addConditionalRule({
                selector: e.selector,
                rule: ie(s, Oe)
              }, a), "local" === e.type && (this.transformSimplePseudos(e, s, a), this.transformSelectors(e, s, a)), this.transformLayer(e, s["@layer"], a), this.transformMedia(e, s["@media"], a), this.transformSupports(e, s["@supports"], a), this.transformContainer(e, s["@container"], a), this.transformStartingStyle(e, s["@starting-style"], a)
            }
          }
        }
        transformSupports(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map(e => "@supports ".concat(e))), ne(t, (t, r) => {
            var i = [...n, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: ie(t, Oe)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformScope(e, t["@scope"], i), this.transformMedia(e, t["@media"], i), this.transformContainer(e, t["@container"], i), this.transformStartingStyle(e, t["@starting-style"], i)
          }))
        }
        transformSimplePseudos(e, t, r) {
          for (var n of Object.keys(t))
            if (ye[n]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              })
            }
        }
        transformStartingStyle(e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t) {
            var n, i = Object.keys(t).find(e => e.startsWith("@"));
            if (i) throw new Error('Nested at-rules (e.g. "'.concat(i, '") are not allowed inside @starting-style.'));
            null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, ["@starting-style"]);
            var o = [...r, "@starting-style"];
            this.addConditionalRule({
              selector: e.selector,
              rule: ie(t, Oe)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o))
          }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(Ee({
            "@font-face": t
          }));
          for (var r of this.propertyRules) e.push(Ee({
            ["@property ".concat(r.name)]: r.rule
          }));
          for (var n of this.keyframesRules) e.push(Ee({
            ["@keyframes ".concat(n.name)]: n.rule
          }));
          for (var i of this.layers.values()) {
            var [o, ...s] = i.reverse(), a = {
              [o]: Se
            };
            for (var l of s) a = {
              [l]: a
            };
            e.push(Ee(a))
          }
          for (var c of this.rules) e.push(Ee({
            [c.selector]: c.rule
          }));
          for (var h of this.conditionalRulesets)
            for (var u of h.renderToArray()) e.push(Ee(u));
          return e.filter(Boolean)
        }
      }

      function Ee(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          n = function(n) {
            var i, o = e[n];
            o && Array.isArray(o) ? r.push(...o.map(e => Ee({
              [n]: e
            }, t))) : o && "object" == typeof o ? 0 === Object.keys(o).length || r.push("".concat(t).concat(n, " {\n").concat(Ee(o, t + "  "), "\n").concat(t, "}")) : o === Se ? r.push("".concat(t).concat(n, ";")) : r.push("".concat(t).concat(n.startsWith("--") ? n : (i = n, i.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(o, ";"))
          };
        for (var i of Object.keys(e)) n(i);
        return r.join("\n")
      }
      var Te = r(43431);
      const ze = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        Fe = new Set,
        Re = "object" == typeof Te && Te ? Te : {},
        je = (e, t, r, n) => {
          "function" == typeof Re.emitWarning ? Re.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`)
        };
      let _e = globalThis.AbortController,
        De = globalThis.AbortSignal;
      if (void 0 === _e) {
        De = class {
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
          signal = new De;
          abort(e) {
            if (!this.signal.aborted) {
              this.signal.reason = e, this.signal.aborted = !0;
              for (const t of this.signal._onabort) t(e);
              this.signal.onabort?.(e)
            }
          }
        };
        let e = "1" !== Re.env?.LRU_CACHE_IGNORE_AC_WARNING;
        const t = () => {
          e && (e = !1, je("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
        }
      }
      Symbol("type");
      const Pe = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        Me = e => Pe(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? Ie : null : null;
      class Ie extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class Be {
        heap;
        length;
        static #e = !1;
        static create(e) {
          const t = Me(e);
          if (!t) return [];
          Be.#e = !0;
          const r = new Be(e, t);
          return Be.#e = !1, r
        }
        constructor(e, t) {
          if (!Be.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class We {
        #t;
        #r;
        #n;
        #i;
        #o;
        #s;
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
        #c;
        #h;
        #u;
        #f;
        #d;
        #p;
        #m;
        #g;
        #v;
        #y;
        #w;
        #b;
        #k;
        #x;
        #S;
        static unsafeExposeInternals(e) {
          return {
            starts: e.#w,
            ttls: e.#b,
            sizes: e.#y,
            keyMap: e.#c,
            keyList: e.#h,
            valList: e.#u,
            next: e.#f,
            prev: e.#d,
            get head() {
              return e.#p
            },
            get tail() {
              return e.#m
            },
            free: e.#g,
            isBackgroundFetch: t => e.#C(t),
            backgroundFetch: (t, r, n, i) => e.#A(t, r, n, i),
            moveToTail: t => e.#O(t),
            indexes: t => e.#L(t),
            rindexes: t => e.#E(t),
            isStale: t => e.#T(t)
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
          return this.#o
        }
        get memoMethod() {
          return this.#s
        }
        get dispose() {
          return this.#n
        }
        get disposeAfter() {
          return this.#i
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: r,
            ttlResolution: n = 1,
            ttlAutopurge: i,
            updateAgeOnGet: o,
            updateAgeOnHas: s,
            allowStale: a,
            dispose: l,
            disposeAfter: c,
            noDisposeOnSet: h,
            noUpdateTTL: u,
            maxSize: f = 0,
            maxEntrySize: d = 0,
            sizeCalculation: p,
            fetchMethod: m,
            memoMethod: g,
            noDeleteOnFetchRejection: v,
            noDeleteOnStaleGet: y,
            allowStaleOnFetchRejection: w,
            allowStaleOnFetchAbort: b,
            ignoreFetchAbort: k
          } = e;
          if (0 !== t && !Pe(t)) throw new TypeError("max option must be a nonnegative integer");
          const x = t ? Me(t) : Array;
          if (!x) throw new Error("invalid max value: " + t);
          if (this.#t = t, this.#r = f, this.maxEntrySize = d || this.#r, this.sizeCalculation = p, this.sizeCalculation) {
            if (!this.#r && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== g && "function" != typeof g) throw new TypeError("memoMethod must be a function if defined");
          if (this.#s = g, void 0 !== m && "function" != typeof m) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#o = m, this.#x = !!m, this.#c = new Map, this.#h = new Array(t).fill(void 0), this.#u = new Array(t).fill(void 0), this.#f = new x(t), this.#d = new x(t), this.#p = 0, this.#m = 0, this.#g = Be.create(t), this.#a = 0, this.#l = 0, "function" == typeof l && (this.#n = l), "function" == typeof c ? (this.#i = c, this.#v = []) : (this.#i = void 0, this.#v = void 0), this.#k = !!this.#n, this.#S = !!this.#i, this.noDisposeOnSet = !!h, this.noUpdateTTL = !!u, this.noDeleteOnFetchRejection = !!v, this.allowStaleOnFetchRejection = !!w, this.allowStaleOnFetchAbort = !!b, this.ignoreFetchAbort = !!k, 0 !== this.maxEntrySize) {
            if (0 !== this.#r && !Pe(this.#r)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!Pe(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#z()
          }
          if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!s, this.ttlResolution = Pe(n) || 0 === n ? n : 1, this.ttlAutopurge = !!i, this.ttl = r || 0, this.ttl) {
            if (!Pe(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#F()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#r) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#r) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !Fe.has(e))(e) && (Fe.add(e), je("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, We))
          }
        }
        getRemainingTTL(e) {
          return this.#c.has(e) ? 1 / 0 : 0
        }
        #F() {
          const e = new Ie(this.#t),
            t = new Ie(this.#t);
          this.#b = e, this.#w = t, this.#R = (r, n, i = ze.now()) => {
            if (t[r] = 0 !== n ? i : 0, e[r] = n, 0 !== n && this.ttlAutopurge) {
              const e = setTimeout(() => {
                this.#T(r) && this.#j(this.#h[r], "expire")
              }, n + 1);
              e.unref && e.unref()
            }
          }, this.#_ = r => {
            t[r] = 0 !== e[r] ? ze.now() : 0
          }, this.#D = (i, o) => {
            if (e[o]) {
              const s = e[o],
                a = t[o];
              if (!s || !a) return;
              i.ttl = s, i.start = a, i.now = r || n();
              const l = i.now - a;
              i.remainingTTL = s - l
            }
          };
          let r = 0;
          const n = () => {
            const e = ze.now();
            if (this.ttlResolution > 0) {
              r = e;
              const t = setTimeout(() => r = 0, this.ttlResolution);
              t.unref && t.unref()
            }
            return e
          };
          this.getRemainingTTL = i => {
            const o = this.#c.get(i);
            if (void 0 === o) return 0;
            const s = e[o],
              a = t[o];
            return s && a ? s - ((r || n()) - a) : 1 / 0
          }, this.#T = i => {
            const o = t[i],
              s = e[i];
            return !!s && !!o && (r || n()) - o > s
          }
        }
        #_ = () => {};
        #D = () => {};
        #R = () => {};
        #T = () => !1;
        #z() {
          const e = new Ie(this.#t);
          this.#l = 0, this.#y = e, this.#P = t => {
            this.#l -= e[t], e[t] = 0
          }, this.#M = (e, t, r, n) => {
            if (this.#C(t)) return 0;
            if (!Pe(r)) {
              if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
              if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
              if (r = n(t, e), !Pe(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
            }
            return r
          }, this.#I = (t, r, n) => {
            if (e[t] = r, this.#r) {
              const r = this.#r - e[t];
              for (; this.#l > r;) this.#B(!0)
            }
            this.#l += e[t], n && (n.entrySize = r, n.totalCalculatedSize = this.#l)
          }
        }
        #P = e => {};
        #I = (e, t, r) => {};
        #M = (e, t, r, n) => {
          if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };* #L({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#a)
            for (let t = this.#m; this.#W(t) && (!e && this.#T(t) || (yield t), t !== this.#p);) t = this.#d[t]
        }* #E({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#a)
            for (let t = this.#p; this.#W(t) && (!e && this.#T(t) || (yield t), t !== this.#m);) t = this.#f[t]
        }
        #W(e) {
          return void 0 !== e && this.#c.get(this.#h[e]) === e
        }* entries() {
          for (const e of this.#L()) void 0 === this.#u[e] || void 0 === this.#h[e] || this.#C(this.#u[e]) || (yield [this.#h[e], this.#u[e]])
        }* rentries() {
          for (const e of this.#E()) void 0 === this.#u[e] || void 0 === this.#h[e] || this.#C(this.#u[e]) || (yield [this.#h[e], this.#u[e]])
        }* keys() {
          for (const e of this.#L()) {
            const t = this.#h[e];
            void 0 === t || this.#C(this.#u[e]) || (yield t)
          }
        }* rkeys() {
          for (const e of this.#E()) {
            const t = this.#h[e];
            void 0 === t || this.#C(this.#u[e]) || (yield t)
          }
        }* values() {
          for (const e of this.#L()) void 0 === this.#u[e] || this.#C(this.#u[e]) || (yield this.#u[e])
        }* rvalues() {
          for (const e of this.#E()) void 0 === this.#u[e] || this.#C(this.#u[e]) || (yield this.#u[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e, t = {}) {
          for (const r of this.#L()) {
            const n = this.#u[r],
              i = this.#C(n) ? n.__staleWhileFetching : n;
            if (void 0 !== i && e(i, this.#h[r], this)) return this.get(this.#h[r], t)
          }
        }
        forEach(e, t = this) {
          for (const r of this.#L()) {
            const n = this.#u[r],
              i = this.#C(n) ? n.__staleWhileFetching : n;
            void 0 !== i && e.call(t, i, this.#h[r], this)
          }
        }
        rforEach(e, t = this) {
          for (const r of this.#E()) {
            const n = this.#u[r],
              i = this.#C(n) ? n.__staleWhileFetching : n;
            void 0 !== i && e.call(t, i, this.#h[r], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (const t of this.#E({
              allowStale: !0
            })) this.#T(t) && (this.#j(this.#h[t], "expire"), e = !0);
          return e
        }
        info(e) {
          const t = this.#c.get(e);
          if (void 0 === t) return;
          const r = this.#u[t],
            n = this.#C(r) ? r.__staleWhileFetching : r;
          if (void 0 === n) return;
          const i = {
            value: n
          };
          if (this.#b && this.#w) {
            const e = this.#b[t],
              r = this.#w[t];
            if (e && r) {
              const t = e - (ze.now() - r);
              i.ttl = t, i.start = Date.now()
            }
          }
          return this.#y && (i.size = this.#y[t]), i
        }
        dump() {
          const e = [];
          for (const t of this.#L({
              allowStale: !0
            })) {
            const r = this.#h[t],
              n = this.#u[t],
              i = this.#C(n) ? n.__staleWhileFetching : n;
            if (void 0 === i || void 0 === r) continue;
            const o = {
              value: i
            };
            if (this.#b && this.#w) {
              o.ttl = this.#b[t];
              const e = ze.now() - this.#w[t];
              o.start = Math.floor(Date.now() - e)
            }
            this.#y && (o.size = this.#y[t]), e.unshift([r, o])
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
            ttl: n = this.ttl,
            start: i,
            noDisposeOnSet: o = this.noDisposeOnSet,
            sizeCalculation: s = this.sizeCalculation,
            status: a
          } = r;
          let {
            noUpdateTTL: l = this.noUpdateTTL
          } = r;
          const c = this.#M(e, t, r.size || 0, s);
          if (this.maxEntrySize && c > this.maxEntrySize) return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.#j(e, "set"), this;
          let h = 0 === this.#a ? void 0 : this.#c.get(e);
          if (void 0 === h) h = 0 === this.#a ? this.#m : 0 !== this.#g.length ? this.#g.pop() : this.#a === this.#t ? this.#B(!1) : this.#a, this.#h[h] = e, this.#u[h] = t, this.#c.set(e, h), this.#f[this.#m] = h, this.#d[h] = this.#m, this.#m = h, this.#a++, this.#I(h, c, a), a && (a.set = "add"), l = !1;
          else {
            this.#O(h);
            const r = this.#u[h];
            if (t !== r) {
              if (this.#x && this.#C(r)) {
                r.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = r;
                void 0 === t || o || (this.#k && this.#n?.(t, e, "set"), this.#S && this.#v?.push([t, e, "set"]))
              } else o || (this.#k && this.#n?.(r, e, "set"), this.#S && this.#v?.push([r, e, "set"]));
              if (this.#P(h), this.#I(h, c, a), this.#u[h] = t, a) {
                a.set = "replace";
                const e = r && this.#C(r) ? r.__staleWhileFetching : r;
                void 0 !== e && (a.oldValue = e)
              }
            } else a && (a.set = "update")
          }
          if (0 === n || this.#b || this.#F(), this.#b && (l || this.#R(h, n, i), a && this.#D(a, h)), !o && this.#S && this.#v) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
          return this
        }
        pop() {
          try {
            for (; this.#a;) {
              const e = this.#u[this.#p];
              if (this.#B(!0), this.#C(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#S && this.#v) {
              const e = this.#v;
              let t;
              for (; t = e?.shift();) this.#i?.(...t)
            }
          }
        }
        #B(e) {
          const t = this.#p,
            r = this.#h[t],
            n = this.#u[t];
          return this.#x && this.#C(n) ? n.__abortController.abort(new Error("evicted")) : (this.#k || this.#S) && (this.#k && this.#n?.(n, r, "evict"), this.#S && this.#v?.push([n, r, "evict"])), this.#P(t), e && (this.#h[t] = void 0, this.#u[t] = void 0, this.#g.push(t)), 1 === this.#a ? (this.#p = this.#m = 0, this.#g.length = 0) : this.#p = this.#f[t], this.#c.delete(r), this.#a--, t
        }
        has(e, t = {}) {
          const {
            updateAgeOnHas: r = this.updateAgeOnHas,
            status: n
          } = t, i = this.#c.get(e);
          if (void 0 !== i) {
            const e = this.#u[i];
            if (this.#C(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#T(i)) return r && this.#_(i), n && (n.has = "hit", this.#D(n, i)), !0;
            n && (n.has = "stale", this.#D(n, i))
          } else n && (n.has = "miss");
          return !1
        }
        peek(e, t = {}) {
          const {
            allowStale: r = this.allowStale
          } = t, n = this.#c.get(e);
          if (void 0 === n || !r && this.#T(n)) return;
          const i = this.#u[n];
          return this.#C(i) ? i.__staleWhileFetching : i
        }
        #A(e, t, r, n) {
          const i = void 0 === t ? void 0 : this.#u[t];
          if (this.#C(i)) return i;
          const o = new _e,
            {
              signal: s
            } = r;
          s?.addEventListener("abort", () => o.abort(s.reason), {
            signal: o.signal
          });
          const a = {
              signal: o.signal,
              options: r,
              context: n
            },
            l = (n, i = !1) => {
              const {
                aborted: s
              } = o.signal, l = r.ignoreFetchAbort && void 0 !== n;
              if (r.status && (s && !i ? (r.status.fetchAborted = !0, r.status.fetchError = o.signal.reason, l && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), s && !l && !i) return c(o.signal.reason);
              const u = h;
              return this.#u[t] === h && (void 0 === n ? u.__staleWhileFetching ? this.#u[t] = u.__staleWhileFetching : this.#j(e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, n, a.options))), n
            },
            c = n => {
              const {
                aborted: i
              } = o.signal, s = i && r.allowStaleOnFetchAbort, a = s || r.allowStaleOnFetchRejection, l = a || r.noDeleteOnFetchRejection, c = h;
              if (this.#u[t] === h && (l && void 0 !== c.__staleWhileFetching ? s || (this.#u[t] = c.__staleWhileFetching) : this.#j(e, "fetch")), a) return r.status && void 0 !== c.__staleWhileFetching && (r.status.returnedStale = !0), c.__staleWhileFetching;
              if (c.__returned === c) throw n
            };
          r.status && (r.status.fetchDispatched = !0);
          const h = new Promise((t, n) => {
              const s = this.#o?.(e, i, a);
              s && s instanceof Promise && s.then(e => t(void 0 === e ? void 0 : e), n), o.signal.addEventListener("abort", () => {
                r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = e => l(e, !0)))
              })
            }).then(l, e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), c(e))),
            u = Object.assign(h, {
              __abortController: o,
              __staleWhileFetching: i,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, u, {
            ...a.options,
            status: void 0
          }), t = this.#c.get(e)) : this.#u[t] = u, u
        }
        #C(e) {
          if (!this.#x) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof _e
        }
        async fetch(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: n = this.updateAgeOnGet,
            noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
            ttl: o = this.ttl,
            noDisposeOnSet: s = this.noDisposeOnSet,
            size: a = 0,
            sizeCalculation: l = this.sizeCalculation,
            noUpdateTTL: c = this.noUpdateTTL,
            noDeleteOnFetchRejection: h = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: u = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: f = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: d = this.allowStaleOnFetchAbort,
            context: p,
            forceRefresh: m = !1,
            status: g,
            signal: v
          } = t;
          if (!this.#x) return g && (g.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: i,
            status: g
          });
          const y = {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: i,
            ttl: o,
            noDisposeOnSet: s,
            size: a,
            sizeCalculation: l,
            noUpdateTTL: c,
            noDeleteOnFetchRejection: h,
            allowStaleOnFetchRejection: u,
            allowStaleOnFetchAbort: d,
            ignoreFetchAbort: f,
            status: g,
            signal: v
          };
          let w = this.#c.get(e);
          if (void 0 === w) {
            g && (g.fetch = "miss");
            const t = this.#A(e, w, y, p);
            return t.__returned = t
          } {
            const t = this.#u[w];
            if (this.#C(t)) {
              const e = r && void 0 !== t.__staleWhileFetching;
              return g && (g.fetch = "inflight", e && (g.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const i = this.#T(w);
            if (!m && !i) return g && (g.fetch = "hit"), this.#O(w), n && this.#_(w), g && this.#D(g, w), t;
            const o = this.#A(e, w, y, p),
              s = void 0 !== o.__staleWhileFetching && r;
            return g && (g.fetch = i ? "stale" : "refresh", s && i && (g.returnedStale = !0)), s ? o.__staleWhileFetching : o.__returned = o
          }
        }
        async forceFetch(e, t = {}) {
          const r = await this.fetch(e, t);
          if (void 0 === r) throw new Error("fetch() returned undefined");
          return r
        }
        memo(e, t = {}) {
          const r = this.#s;
          if (!r) throw new Error("no memoMethod provided to constructor");
          const {
            context: n,
            forceRefresh: i,
            ...o
          } = t, s = this.get(e, o);
          if (!i && void 0 !== s) return s;
          const a = r(e, s, {
            options: o,
            context: n
          });
          return this.set(e, a, o), a
        }
        get(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: n = this.updateAgeOnGet,
            noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
            status: o
          } = t, s = this.#c.get(e);
          if (void 0 !== s) {
            const t = this.#u[s],
              a = this.#C(t);
            return o && this.#D(o, s), this.#T(s) ? (o && (o.get = "stale"), a ? (o && r && void 0 !== t.__staleWhileFetching && (o.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (i || this.#j(e, "expire"), o && r && (o.returnedStale = !0), r ? t : void 0)) : (o && (o.get = "hit"), a ? t.__staleWhileFetching : (this.#O(s), n && this.#_(s), t))
          }
          o && (o.get = "miss")
        }
        #N(e, t) {
          this.#d[t] = e, this.#f[e] = t
        }
        #O(e) {
          e !== this.#m && (e === this.#p ? this.#p = this.#f[e] : this.#N(this.#d[e], this.#f[e]), this.#N(this.#m, e), this.#m = e)
        }
        delete(e) {
          return this.#j(e, "delete")
        }
        #j(e, t) {
          let r = !1;
          if (0 !== this.#a) {
            const n = this.#c.get(e);
            if (void 0 !== n)
              if (r = !0, 1 === this.#a) this.#q(t);
              else {
                this.#P(n);
                const r = this.#u[n];
                if (this.#C(r) ? r.__abortController.abort(new Error("deleted")) : (this.#k || this.#S) && (this.#k && this.#n?.(r, e, t), this.#S && this.#v?.push([r, e, t])), this.#c.delete(e), this.#h[n] = void 0, this.#u[n] = void 0, n === this.#m) this.#m = this.#d[n];
                else if (n === this.#p) this.#p = this.#f[n];
                else {
                  const e = this.#d[n];
                  this.#f[e] = this.#f[n];
                  const t = this.#f[n];
                  this.#d[t] = this.#d[n]
                }
                this.#a--, this.#g.push(n)
              }
          }
          if (this.#S && this.#v?.length) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
          return r
        }
        clear() {
          return this.#q("delete")
        }
        #q(e) {
          for (const t of this.#E({
              allowStale: !0
            })) {
            const r = this.#u[t];
            if (this.#C(r)) r.__abortController.abort(new Error("deleted"));
            else {
              const n = this.#h[t];
              this.#k && this.#n?.(r, n, e), this.#S && this.#v?.push([r, n, e])
            }
          }
          if (this.#c.clear(), this.#u.fill(void 0), this.#h.fill(void 0), this.#b && this.#w && (this.#b.fill(0), this.#w.fill(0)), this.#y && this.#y.fill(0), this.#p = 0, this.#m = 0, this.#g.length = 0, this.#l = 0, this.#a = 0, this.#S && this.#v) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
        }
      }
      r(76597);
      var Ne = new Set,
        qe = [],
        Ue = [];
      c || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        c = !0, l.push(e)
      })({
        appendCss: e => {
          Ue.push(e)
        },
        registerClassName: e => {
          Ne.add(e)
        },
        registerComposition: e => {
          qe.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: r,
              composedClassLists: n
            } = e, i = new Le(t, n);
            for (var o of r) i.processCssObj(o);
            return i.toCss()
          }({
            localClassNames: Array.from(Ne),
            composedClassLists: qe,
            cssObjs: Ue
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: r
            } = e, n = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, i = o[n];
            if (!i) {
              var s = document.createElement("style");
              t.packageName && s.setAttribute("data-package", t.packageName), s.setAttribute("data-file", t.filePath), s.setAttribute("type", "text/css"), i = o[n] = s, document.head.appendChild(s)
            }
            i.innerHTML = r
          })({
            fileScope: e,
            css: t
          }), Ue = []
        },
        getIdentOption: () => "short"
      });
      new We({
        max: 500
      })
    },
    64001(e, t, r) {
      "use strict";
      r.d(t, {
        D: () => i
      });
      var n = r(73481);

      function i(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var i = e;
          (0, n.Bx)(t, (e, t) => {
            if (null != e) {
              var o = (0, n.Jt)(i, t);
              r[(0, n.Tm)(o)] = String(e)
            }
          })
        } else {
          var o = e;
          for (var s in o) {
            var a = o[s];
            null != a && (r[(0, n.Tm)(s)] = a)
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
      "use strict";

      function n(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function i(e, t) {
        var r = e;
        for (var n of t) {
          if (!(n in r)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
          r = r[n]
        }
        return r
      }

      function o(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          n = {};
        for (var i in e) {
          var s = e[i],
            a = [...r, i];
          "string" == typeof s || "number" == typeof s || null == s ? n[i] = t(s, a) : "object" != typeof s || Array.isArray(s) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(s) ? "Array" : typeof s, '"')) : n[i] = o(s, t, a)
        }
        return n
      }
      r.d(t, {
        Bx: () => o,
        Jt: () => i,
        Tm: () => n
      })
    },
    76597(e) {
      "use strict";
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

      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? a((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function i(e, t, r) {
        return e.concat(t).map(function(e) {
          return n(e, r)
        })
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function s(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function a(e, r, l) {
        (l = l || {}).arrayMerge = l.arrayMerge || i, l.isMergeableObject = l.isMergeableObject || t, l.cloneUnlessOtherwiseSpecified = n;
        var c = Array.isArray(r);
        return c === Array.isArray(e) ? c ? l.arrayMerge(e, r, l) : function(e, t, r) {
          var i = {};
          return r.isMergeableObject(e) && o(e).forEach(function(t) {
            i[t] = n(e[t], r)
          }), o(t).forEach(function(o) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (s(e, o) && r.isMergeableObject(t[o]) ? i[o] = function(e, t) {
              if (!t.customMerge) return a;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : a
            }(o, r)(e[o], t[o], r) : i[o] = n(t[o], r))
          }), i
        }(e, r, l) : n(r, l)
      }
      a.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return a(e, r, t)
        }, {})
      };
      var l = a;
      e.exports = l
    },
    43431(e) {
      var t, r, n = e.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function o() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
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
          t = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
          t = i
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
          r = o
        }
      }();
      var a, l = [],
        c = !1,
        h = -1;

      function u() {
        c && a && (c = !1, a.length ? l = a.concat(l) : h = -1, l.length && f())
      }

      function f() {
        if (!c) {
          var e = s(u);
          c = !0;
          for (var t = l.length; t;) {
            for (a = l, l = []; ++h < t;) a && a[h].run();
            h = -1, t = l.length
          }
          a = null, c = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
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

      function d(e, t) {
        this.fun = e, this.array = t
      }

      function p() {}
      n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new d(e, t)), 1 !== l.length || c || s(f)
      }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(e) {
        return []
      }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    },
    45750(e, t, r) {
      "use strict";
      r.d(t, {
        UE: () => ee,
        ll: () => Z,
        rD: () => re,
        UU: () => J,
        jD: () => K,
        ER: () => te,
        cY: () => Q,
        BN: () => Y,
        Ej: () => X
      });
      const n = ["top", "right", "bottom", "left"],
        i = Math.min,
        o = Math.max,
        s = Math.round,
        a = Math.floor,
        l = e => ({
          x: e,
          y: e
        }),
        c = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

      function h(e, t, r) {
        return o(e, i(t, r))
      }

      function u(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function f(e) {
        return e.split("-")[0]
      }

      function d(e) {
        return e.split("-")[1]
      }

      function p(e) {
        return "x" === e ? "y" : "x"
      }

      function m(e) {
        return "y" === e ? "height" : "width"
      }

      function g(e) {
        const t = e[0];
        return "t" === t || "b" === t ? "y" : "x"
      }

      function v(e) {
        return p(g(e))
      }

      function y(e) {
        return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
      }
      const w = ["left", "right"],
        b = ["right", "left"],
        k = ["top", "bottom"],
        x = ["bottom", "top"];

      function S(e) {
        const t = f(e);
        return c[t] + e.slice(t.length)
      }

      function C(e) {
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
          width: n,
          height: i
        } = e;
        return {
          width: n,
          height: i,
          top: r,
          left: t,
          right: t + n,
          bottom: r + i,
          x: t,
          y: r
        }
      }

      function O(e, t, r) {
        let {
          reference: n,
          floating: i
        } = e;
        const o = g(t),
          s = v(t),
          a = m(s),
          l = f(t),
          c = "y" === o,
          h = n.x + n.width / 2 - i.width / 2,
          u = n.y + n.height / 2 - i.height / 2,
          p = n[a] / 2 - i[a] / 2;
        let y;
        switch (l) {
          case "top":
            y = {
              x: h,
              y: n.y - i.height
            };
            break;
          case "bottom":
            y = {
              x: h,
              y: n.y + n.height
            };
            break;
          case "right":
            y = {
              x: n.x + n.width,
              y: u
            };
            break;
          case "left":
            y = {
              x: n.x - i.width,
              y: u
            };
            break;
          default:
            y = {
              x: n.x,
              y: n.y
            }
        }
        switch (d(t)) {
          case "start":
            y[s] -= p * (r && c ? -1 : 1);
            break;
          case "end":
            y[s] += p * (r && c ? -1 : 1)
        }
        return y
      }
      async function L(e, t) {
        var r;
        void 0 === t && (t = {});
        const {
          x: n,
          y: i,
          platform: o,
          rects: s,
          elements: a,
          strategy: l
        } = e, {
          boundary: c = "clippingAncestors",
          rootBoundary: h = "viewport",
          elementContext: f = "floating",
          altBoundary: d = !1,
          padding: p = 0
        } = u(t, e), m = C(p), g = a[d ? "floating" === f ? "reference" : "floating" : f], v = A(await o.getClippingRect({
          element: null == (r = await (null == o.isElement ? void 0 : o.isElement(g))) || r ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(a.floating)),
          boundary: c,
          rootBoundary: h,
          strategy: l
        })), y = "floating" === f ? {
          x: n,
          y: i,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, w = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(a.floating)), b = await (null == o.isElement ? void 0 : o.isElement(w)) && await (null == o.getScale ? void 0 : o.getScale(w)) || {
          x: 1,
          y: 1
        }, k = A(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: y,
          offsetParent: w,
          strategy: l
        }) : y);
        return {
          top: (v.top - k.top + m.top) / b.y,
          bottom: (k.bottom - v.bottom + m.bottom) / b.y,
          left: (v.left - k.left + m.left) / b.x,
          right: (k.right - v.right + m.right) / b.x
        }
      }

      function E(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function T(e) {
        return n.some(t => e[t] >= 0)
      }
      const z = new Set(["left", "top"]);
      var F = r(24843);

      function R(e) {
        const t = (0, F.L9)(e);
        let r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0;
        const i = (0, F.sb)(e),
          o = i ? e.offsetWidth : r,
          a = i ? e.offsetHeight : n,
          l = s(r) !== o || s(n) !== a;
        return l && (r = o, n = a), {
          width: r,
          height: n,
          $: l
        }
      }

      function j(e) {
        return (0, F.vq)(e) ? e : e.contextElement
      }

      function _(e) {
        const t = j(e);
        if (!(0, F.sb)(t)) return l(1);
        const r = t.getBoundingClientRect(),
          {
            width: n,
            height: i,
            $: o
          } = R(t);
        let a = (o ? s(r.width) : r.width) / n,
          c = (o ? s(r.height) : r.height) / i;
        return a && Number.isFinite(a) || (a = 1), c && Number.isFinite(c) || (c = 1), {
          x: a,
          y: c
        }
      }
      const D = l(0);

      function P(e) {
        const t = (0, F.zk)(e);
        return (0, F.Tc)() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : D
      }

      function M(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const i = e.getBoundingClientRect(),
          o = j(e);
        let s = l(1);
        t && (n ? (0, F.vq)(n) && (s = _(n)) : s = _(e));
        const a = function(e, t, r) {
          return void 0 === t && (t = !1), !(!r || t && r !== (0, F.zk)(e)) && t
        }(o, r, n) ? P(o) : l(0);
        let c = (i.left + a.x) / s.x,
          h = (i.top + a.y) / s.y,
          u = i.width / s.x,
          f = i.height / s.y;
        if (o) {
          const e = (0, F.zk)(o),
            t = n && (0, F.vq)(n) ? (0, F.zk)(n) : n;
          let r = e,
            i = (0, F._m)(r);
          for (; i && n && t !== r;) {
            const e = _(i),
              t = i.getBoundingClientRect(),
              n = (0, F.L9)(i),
              o = t.left + (i.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              s = t.top + (i.clientTop + parseFloat(n.paddingTop)) * e.y;
            c *= e.x, h *= e.y, u *= e.x, f *= e.y, c += o, h += s, r = (0, F.zk)(i), i = (0, F._m)(r)
          }
        }
        return A({
          width: u,
          height: f,
          x: c,
          y: h
        })
      }

      function I(e, t) {
        const r = (0, F.CP)(e).scrollLeft;
        return t ? t.left + r : M((0, F.ep)(e)).left + r
      }

      function B(e, t) {
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - I(e, r),
          y: r.top + t.scrollTop
        }
      }

      function W(e, t, r) {
        let n;
        if ("viewport" === t) n = function(e, t) {
          const r = (0, F.zk)(e),
            n = (0, F.ep)(e),
            i = r.visualViewport;
          let o = n.clientWidth,
            s = n.clientHeight,
            a = 0,
            l = 0;
          if (i) {
            o = i.width, s = i.height;
            const e = (0, F.Tc)();
            (!e || e && "fixed" === t) && (a = i.offsetLeft, l = i.offsetTop)
          }
          const c = I(n);
          if (c <= 0) {
            const e = n.ownerDocument,
              t = e.body,
              r = getComputedStyle(t),
              i = "CSS1Compat" === e.compatMode && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0,
              s = Math.abs(n.clientWidth - t.clientWidth - i);
            s <= 25 && (o -= s)
          } else c <= 25 && (o += c);
          return {
            width: o,
            height: s,
            x: a,
            y: l
          }
        }(e, r);
        else if ("document" === t) n = function(e) {
          const t = (0, F.ep)(e),
            r = (0, F.CP)(e),
            n = e.ownerDocument.body,
            i = o(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
            s = o(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
          let a = -r.scrollLeft + I(e);
          const l = -r.scrollTop;
          return "rtl" === (0, F.L9)(n).direction && (a += o(t.clientWidth, n.clientWidth) - i), {
            width: i,
            height: s,
            x: a,
            y: l
          }
        }((0, F.ep)(e));
        else if ((0, F.vq)(t)) n = function(e, t) {
          const r = M(e, !0, "fixed" === t),
            n = r.top + e.clientTop,
            i = r.left + e.clientLeft,
            o = (0, F.sb)(e) ? _(e) : l(1);
          return {
            width: e.clientWidth * o.x,
            height: e.clientHeight * o.y,
            x: i * o.x,
            y: n * o.y
          }
        }(t, r);
        else {
          const r = P(e);
          n = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
          }
        }
        return A(n)
      }

      function N(e, t) {
        const r = (0, F.$4)(e);
        return !(r === t || !(0, F.vq)(r) || (0, F.eu)(r)) && ("fixed" === (0, F.L9)(r).position || N(r, t))
      }

      function q(e, t, r) {
        const n = (0, F.sb)(t),
          i = (0, F.ep)(t),
          o = "fixed" === r,
          s = M(e, !0, o, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const c = l(0);

        function h() {
          c.x = I(i)
        }
        if (n || !n && !o)
          if (("body" !== (0, F.mq)(t) || (0, F.ZU)(i)) && (a = (0, F.CP)(t)), n) {
            const e = M(t, !0, o, t);
            c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
          } else i && h();
        o && !n && i && h();
        const u = !i || n || o ? l(0) : B(i, a);
        return {
          x: s.left + a.scrollLeft - c.x - u.x,
          y: s.top + a.scrollTop - c.y - u.y,
          width: s.width,
          height: s.height
        }
      }

      function U(e) {
        return "static" === (0, F.L9)(e).position
      }

      function $(e, t) {
        if (!(0, F.sb)(e) || "fixed" === (0, F.L9)(e).position) return null;
        if (t) return t(e);
        let r = e.offsetParent;
        return (0, F.ep)(e) === r && (r = r.ownerDocument.body), r
      }

      function H(e, t) {
        const r = (0, F.zk)(e);
        if ((0, F.Tf)(e)) return r;
        if (!(0, F.sb)(e)) {
          let t = (0, F.$4)(e);
          for (; t && !(0, F.eu)(t);) {
            if ((0, F.vq)(t) && !U(t)) return t;
            t = (0, F.$4)(t)
          }
          return r
        }
        let n = $(e, t);
        for (; n && (0, F.Lv)(n) && U(n);) n = $(n, t);
        return n && (0, F.eu)(n) && U(n) && !(0, F.sQ)(n) ? r : n || (0, F.gJ)(e) || r
      }
      const G = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: r,
            offsetParent: n,
            strategy: i
          } = e;
          const o = "fixed" === i,
            s = (0, F.ep)(n),
            a = !!t && (0, F.Tf)(t.floating);
          if (n === s || a && o) return r;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            h = l(1);
          const u = l(0),
            f = (0, F.sb)(n);
          if ((f || !f && !o) && (("body" !== (0, F.mq)(n) || (0, F.ZU)(s)) && (c = (0, F.CP)(n)), f)) {
            const e = M(n);
            h = _(n), u.x = e.x + n.clientLeft, u.y = e.y + n.clientTop
          }
          const d = !s || f || o ? l(0) : B(s, c);
          return {
            width: r.width * h.x,
            height: r.height * h.y,
            x: r.x * h.x - c.scrollLeft * h.x + u.x + d.x,
            y: r.y * h.y - c.scrollTop * h.y + u.y + d.y
          }
        },
        getDocumentElement: F.ep,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: r,
            rootBoundary: n,
            strategy: s
          } = e;
          const a = [..."clippingAncestors" === r ? (0, F.Tf)(t) ? [] : function(e, t) {
              const r = t.get(e);
              if (r) return r;
              let n = (0, F.v9)(e, [], !1).filter(e => (0, F.vq)(e) && "body" !== (0, F.mq)(e)),
                i = null;
              const o = "fixed" === (0, F.L9)(e).position;
              let s = o ? (0, F.$4)(e) : e;
              for (;
                (0, F.vq)(s) && !(0, F.eu)(s);) {
                const t = (0, F.L9)(s),
                  r = (0, F.sQ)(s);
                r || "fixed" !== t.position || (i = null), (o ? !r && !i : !r && "static" === t.position && i && ("absolute" === i.position || "fixed" === i.position) || (0, F.ZU)(s) && !r && N(e, s)) ? n = n.filter(e => e !== s) : i = t, s = (0, F.$4)(s)
              }
              return t.set(e, n), n
            }(t, this._c) : [].concat(r), n],
            l = W(t, a[0], s);
          let c = l.top,
            h = l.right,
            u = l.bottom,
            f = l.left;
          for (let e = 1; e < a.length; e++) {
            const r = W(t, a[e], s);
            c = o(r.top, c), h = i(r.right, h), u = i(r.bottom, u), f = o(r.left, f)
          }
          return {
            width: h - f,
            height: u - c,
            x: f,
            y: c
          }
        },
        getOffsetParent: H,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || H,
            r = this.getDimensions,
            n = await r(e.floating);
          return {
            reference: q(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: n.width,
              height: n.height
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
          } = R(e);
          return {
            width: t,
            height: r
          }
        },
        getScale: _,
        isElement: F.vq,
        isRTL: function(e) {
          return "rtl" === (0, F.L9)(e).direction
        }
      };

      function V(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }

      function Z(e, t, r, n) {
        void 0 === n && (n = {});
        const {
          ancestorScroll: s = !0,
          ancestorResize: l = !0,
          elementResize: c = "function" == typeof ResizeObserver,
          layoutShift: h = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = n, f = j(e), d = s || l ? [...f ? (0, F.v9)(f) : [], ...t ? (0, F.v9)(t) : []] : [];
        d.forEach(e => {
          s && e.addEventListener("scroll", r, {
            passive: !0
          }), l && e.addEventListener("resize", r)
        });
        const p = f && h ? function(e, t) {
          let r, n = null;
          const s = (0, F.ep)(e);

          function l() {
            var e;
            clearTimeout(r), null == (e = n) || e.disconnect(), n = null
          }
          return function c(h, u) {
            void 0 === h && (h = !1), void 0 === u && (u = 1), l();
            const f = e.getBoundingClientRect(),
              {
                left: d,
                top: p,
                width: m,
                height: g
              } = f;
            if (h || t(), !m || !g) return;
            const v = {
              rootMargin: -a(p) + "px " + -a(s.clientWidth - (d + m)) + "px " + -a(s.clientHeight - (p + g)) + "px " + -a(d) + "px",
              threshold: o(0, i(1, u)) || 1
            };
            let y = !0;

            function w(t) {
              const n = t[0].intersectionRatio;
              if (n !== u) {
                if (!y) return c();
                n ? c(!1, n) : r = setTimeout(() => {
                  c(!1, 1e-7)
                }, 1e3)
              }
              1 !== n || V(f, e.getBoundingClientRect()) || c(), y = !1
            }
            try {
              n = new IntersectionObserver(w, {
                ...v,
                root: s.ownerDocument
              })
            } catch (e) {
              n = new IntersectionObserver(w, v)
            }
            n.observe(e)
          }(!0), l
        }(f, r) : null;
        let m, g = -1,
          v = null;
        c && (v = new ResizeObserver(e => {
          let [n] = e;
          n && n.target === f && v && t && (v.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
            var e;
            null == (e = v) || e.observe(t)
          })), r()
        }), f && !u && v.observe(f), t && v.observe(t));
        let y = u ? M(e) : null;
        return u && function t() {
          const n = M(e);
          y && !V(y, n) && r(), y = n, m = requestAnimationFrame(t)
        }(), r(), () => {
          var e;
          d.forEach(e => {
            s && e.removeEventListener("scroll", r), l && e.removeEventListener("resize", r)
          }), null == p || p(), null == (e = v) || e.disconnect(), v = null, u && cancelAnimationFrame(m)
        }
      }
      const Q = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              var r, n;
              const {
                x: i,
                y: o,
                placement: s,
                middlewareData: a
              } = t, l = await async function(e, t) {
                const {
                  placement: r,
                  platform: n,
                  elements: i
                } = e, o = await (null == n.isRTL ? void 0 : n.isRTL(i.floating)), s = f(r), a = d(r), l = "y" === g(r), c = z.has(s) ? -1 : 1, h = o && l ? -1 : 1, p = u(t, e);
                let {
                  mainAxis: m,
                  crossAxis: v,
                  alignmentAxis: y
                } = "number" == typeof p ? {
                  mainAxis: p,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: p.mainAxis || 0,
                  crossAxis: p.crossAxis || 0,
                  alignmentAxis: p.alignmentAxis
                };
                return a && "number" == typeof y && (v = "end" === a ? -1 * y : y), l ? {
                  x: v * h,
                  y: m * c
                } : {
                  x: m * c,
                  y: v * h
                }
              }(t, e);
              return s === (null == (r = a.offset) ? void 0 : r.placement) && null != (n = a.arrow) && n.alignmentOffset ? {} : {
                x: i + l.x,
                y: o + l.y,
                data: {
                  ...l,
                  placement: s
                }
              }
            }
          }
        },
        Y = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: r,
                y: n,
                placement: i,
                platform: o
              } = t, {
                mainAxis: s = !0,
                crossAxis: a = !1,
                limiter: l = {
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
              } = u(e, t), d = {
                x: r,
                y: n
              }, m = await o.detectOverflow(t, c), v = g(f(i)), y = p(v);
              let w = d[y],
                b = d[v];
              if (s) {
                const e = "y" === y ? "bottom" : "right";
                w = h(w + m["y" === y ? "top" : "left"], w, w - m[e])
              }
              if (a) {
                const e = "y" === v ? "bottom" : "right";
                b = h(b + m["y" === v ? "top" : "left"], b, b - m[e])
              }
              const k = l.fn({
                ...t,
                [y]: w,
                [v]: b
              });
              return {
                ...k,
                data: {
                  x: k.x - r,
                  y: k.y - n,
                  enabled: {
                    [y]: s,
                    [v]: a
                  }
                }
              }
            }
          }
        },
        J = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var r, n;
              const {
                placement: i,
                middlewareData: o,
                rects: s,
                initialPlacement: a,
                platform: l,
                elements: c
              } = t, {
                mainAxis: h = !0,
                crossAxis: p = !0,
                fallbackPlacements: C,
                fallbackStrategy: A = "bestFit",
                fallbackAxisSideDirection: O = "none",
                flipAlignment: L = !0,
                ...E
              } = u(e, t);
              if (null != (r = o.arrow) && r.alignmentOffset) return {};
              const T = f(i),
                z = g(a),
                F = f(a) === a,
                R = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                j = C || (F || !L ? [S(a)] : function(e) {
                  const t = S(e);
                  return [y(e), t, y(t)]
                }(a)),
                _ = "none" !== O;
              !C && _ && j.push(... function(e, t, r, n) {
                const i = d(e);
                let o = function(e, t, r) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return r ? t ? b : w : t ? w : b;
                    case "left":
                    case "right":
                      return t ? k : x;
                    default:
                      return []
                  }
                }(f(e), "start" === r, n);
                return i && (o = o.map(e => e + "-" + i), t && (o = o.concat(o.map(y)))), o
              }(a, L, O, R));
              const D = [a, ...j],
                P = await l.detectOverflow(t, E),
                M = [];
              let I = (null == (n = o.flip) ? void 0 : n.overflows) || [];
              if (h && M.push(P[T]), p) {
                const e = function(e, t, r) {
                  void 0 === r && (r = !1);
                  const n = d(e),
                    i = v(e),
                    o = m(i);
                  let s = "x" === i ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                  return t.reference[o] > t.floating[o] && (s = S(s)), [s, S(s)]
                }(i, s, R);
                M.push(P[e[0]], P[e[1]])
              }
              if (I = [...I, {
                  placement: i,
                  overflows: M
                }], !M.every(e => e <= 0)) {
                var B, W;
                const e = ((null == (B = o.flip) ? void 0 : B.index) || 0) + 1,
                  t = D[e];
                if (t && ("alignment" !== p || z === g(t) || I.every(e => g(e.placement) !== z || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: I
                  },
                  reset: {
                    placement: t
                  }
                };
                let r = null == (W = I.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : W.placement;
                if (!r) switch (A) {
                  case "bestFit": {
                    var N;
                    const e = null == (N = I.filter(e => {
                      if (_) {
                        const t = g(e.placement);
                        return t === z || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : N[0];
                    e && (r = e);
                    break
                  }
                  case "initialPlacement":
                    r = a
                }
                if (i !== r) return {
                  reset: {
                    placement: r
                  }
                }
              }
              return {}
            }
          }
        },
        X = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              var r, n;
              const {
                placement: s,
                rects: a,
                platform: l,
                elements: c
              } = t, {
                apply: h = () => {},
                ...p
              } = u(e, t), m = await l.detectOverflow(t, p), v = f(s), y = d(s), w = "y" === g(s), {
                width: b,
                height: k
              } = a.floating;
              let x, S;
              "top" === v || "bottom" === v ? (x = v, S = y === (await (null == l.isRTL ? void 0 : l.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (S = v, x = "end" === y ? "top" : "bottom");
              const C = k - m.top - m.bottom,
                A = b - m.left - m.right,
                O = i(k - m[x], C),
                L = i(b - m[S], A),
                E = !t.middlewareData.shift;
              let T = O,
                z = L;
              if (null != (r = t.middlewareData.shift) && r.enabled.x && (z = A), null != (n = t.middlewareData.shift) && n.enabled.y && (T = C), E && !y) {
                const e = o(m.left, 0),
                  t = o(m.right, 0),
                  r = o(m.top, 0),
                  n = o(m.bottom, 0);
                w ? z = b - 2 * (0 !== e || 0 !== t ? e + t : o(m.left, m.right)) : T = k - 2 * (0 !== r || 0 !== n ? r + n : o(m.top, m.bottom))
              }
              await h({
                ...t,
                availableWidth: z,
                availableHeight: T
              });
              const F = await l.getDimensions(c.floating);
              return b !== F.width || k !== F.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        K = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: r,
                platform: n
              } = t, {
                strategy: i = "referenceHidden",
                ...o
              } = u(e, t);
              switch (i) {
                case "referenceHidden": {
                  const e = E(await n.detectOverflow(t, {
                    ...o,
                    elementContext: "reference"
                  }), r.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: T(e)
                    }
                  }
                }
                case "escaped": {
                  const e = E(await n.detectOverflow(t, {
                    ...o,
                    altBoundary: !0
                  }), r.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: T(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        ee = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: r,
              y: n,
              placement: o,
              rects: s,
              platform: a,
              elements: l,
              middlewareData: c
            } = t, {
              element: f,
              padding: p = 0
            } = u(e, t) || {};
            if (null == f) return {};
            const g = C(p),
              y = {
                x: r,
                y: n
              },
              w = v(o),
              b = m(w),
              k = await a.getDimensions(f),
              x = "y" === w,
              S = x ? "top" : "left",
              A = x ? "bottom" : "right",
              O = x ? "clientHeight" : "clientWidth",
              L = s.reference[b] + s.reference[w] - y[w] - s.floating[b],
              E = y[w] - s.reference[w],
              T = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(f));
            let z = T ? T[O] : 0;
            z && await (null == a.isElement ? void 0 : a.isElement(T)) || (z = l.floating[O] || s.floating[b]);
            const F = L / 2 - E / 2,
              R = z / 2 - k[b] / 2 - 1,
              j = i(g[S], R),
              _ = i(g[A], R),
              D = j,
              P = z - k[b] - _,
              M = z / 2 - k[b] / 2 + F,
              I = h(D, M, P),
              B = !c.arrow && null != d(o) && M !== I && s.reference[b] / 2 - (M < D ? j : _) - k[b] / 2 < 0,
              W = B ? M < D ? M - D : M - P : 0;
            return {
              [w]: y[w] + W,
              data: {
                [w]: I,
                centerOffset: M - I - W,
                ...B && {
                  alignmentOffset: W
                }
              },
              reset: B
            }
          }
        }),
        te = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: r,
                y: n,
                placement: i,
                rects: o,
                middlewareData: s
              } = t, {
                offset: a = 0,
                mainAxis: l = !0,
                crossAxis: c = !0
              } = u(e, t), h = {
                x: r,
                y: n
              }, d = g(i), m = p(d);
              let v = h[m],
                y = h[d];
              const w = u(a, t),
                b = "number" == typeof w ? {
                  mainAxis: w,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...w
                };
              if (l) {
                const e = "y" === m ? "height" : "width",
                  t = o.reference[m] - o.floating[e] + b.mainAxis,
                  r = o.reference[m] + o.reference[e] - b.mainAxis;
                v < t ? v = t : v > r && (v = r)
              }
              if (c) {
                var k, x;
                const e = "y" === m ? "width" : "height",
                  t = z.has(f(i)),
                  r = o.reference[d] - o.floating[e] + (t && (null == (k = s.offset) ? void 0 : k[d]) || 0) + (t ? 0 : b.crossAxis),
                  n = o.reference[d] + o.reference[e] + (t ? 0 : (null == (x = s.offset) ? void 0 : x[d]) || 0) - (t ? b.crossAxis : 0);
                y < r ? y = r : y > n && (y = n)
              }
              return {
                [m]: v,
                [d]: y
              }
            }
          }
        },
        re = (e, t, r) => {
          const n = new Map,
            i = {
              platform: G,
              ...r
            },
            o = {
              ...i.platform,
              _c: n
            };
          return (async (e, t, r) => {
            const {
              placement: n = "bottom",
              strategy: i = "absolute",
              middleware: o = [],
              platform: s
            } = r, a = s.detectOverflow ? s : {
              ...s,
              detectOverflow: L
            }, l = await (null == s.isRTL ? void 0 : s.isRTL(t));
            let c = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: i
              }),
              {
                x: h,
                y: u
              } = O(c, n, l),
              f = n,
              d = 0;
            const p = {};
            for (let r = 0; r < o.length; r++) {
              const m = o[r];
              if (!m) continue;
              const {
                name: g,
                fn: v
              } = m, {
                x: y,
                y: w,
                data: b,
                reset: k
              } = await v({
                x: h,
                y: u,
                initialPlacement: n,
                placement: f,
                strategy: i,
                middlewareData: p,
                rects: c,
                platform: a,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              h = null != y ? y : h, u = null != w ? w : u, p[g] = {
                ...p[g],
                ...b
              }, k && d < 50 && (d++, "object" == typeof k && (k.placement && (f = k.placement), k.rects && (c = !0 === k.rects ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: i
              }) : k.rects), ({
                x: h,
                y: u
              } = O(c, f, l))), r = -1)
            }
            return {
              x: h,
              y: u,
              placement: f,
              strategy: i,
              middlewareData: p
            }
          })(e, t, {
            ...i,
            platform: o
          })
        }
    },
    24843(e, t, r) {
      "use strict";

      function n() {
        return "undefined" != typeof window
      }

      function i(e) {
        return a(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function o(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function s(e) {
        var t;
        return null == (t = (a(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function a(e) {
        return !!n() && (e instanceof Node || e instanceof o(e).Node)
      }

      function l(e) {
        return !!n() && (e instanceof Element || e instanceof o(e).Element)
      }

      function c(e) {
        return !!n() && (e instanceof HTMLElement || e instanceof o(e).HTMLElement)
      }

      function h(e) {
        return !(!n() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof o(e).ShadowRoot)
      }

      function u(e) {
        const {
          overflow: t,
          overflowX: r,
          overflowY: n,
          display: i
        } = x(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && "inline" !== i && "contents" !== i
      }

      function f(e) {
        return /^(table|td|th)$/.test(i(e))
      }

      function d(e) {
        try {
          if (e.matches(":popover-open")) return !0
        } catch (e) {}
        try {
          return e.matches(":modal")
        } catch (e) {
          return !1
        }
      }
      r.d(t, {
        $4: () => C,
        CP: () => S,
        L9: () => x,
        Lv: () => f,
        Tc: () => b,
        Tf: () => d,
        ZU: () => u,
        _m: () => L,
        ep: () => s,
        eu: () => k,
        gJ: () => w,
        mq: () => i,
        sQ: () => y,
        sb: () => c,
        v9: () => O,
        vq: () => l,
        zk: () => o
      });
      const p = /transform|translate|scale|rotate|perspective|filter/,
        m = /paint|layout|strict|content/,
        g = e => !!e && "none" !== e;
      let v;

      function y(e) {
        const t = l(e) ? x(e) : e;
        return g(t.transform) || g(t.translate) || g(t.scale) || g(t.rotate) || g(t.perspective) || !b() && (g(t.backdropFilter) || g(t.filter)) || p.test(t.willChange || "") || m.test(t.contain || "")
      }

      function w(e) {
        let t = C(e);
        for (; c(t) && !k(t);) {
          if (y(t)) return t;
          if (d(t)) return null;
          t = C(t)
        }
        return null
      }

      function b() {
        return null == v && (v = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), v
      }

      function k(e) {
        return /^(html|body|#document)$/.test(i(e))
      }

      function x(e) {
        return o(e).getComputedStyle(e)
      }

      function S(e) {
        return l(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function C(e) {
        if ("html" === i(e)) return e;
        const t = e.assignedSlot || e.parentNode || h(e) && e.host || s(e);
        return h(t) ? t.host : t
      }

      function A(e) {
        const t = C(e);
        return k(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : c(t) && u(t) ? t : A(t)
      }

      function O(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        const i = A(e),
          s = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
          a = o(i);
        if (s) {
          const e = L(a);
          return t.concat(a, a.visualViewport || [], u(i) ? i : [], e && r ? O(e) : [])
        }
        return t.concat(i, O(i, [], r))
      }

      function L(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }
    }
  }
]);