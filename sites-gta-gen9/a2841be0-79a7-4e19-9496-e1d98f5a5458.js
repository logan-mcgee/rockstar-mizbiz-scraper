try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a2841be0-79a7-4e19-9496-e1d98f5a5458", e._sentryDebugIdIdentifier = "sentry-dbid-a2841be0-79a7-4e19-9496-e1d98f5a5458")
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
  [2679], {
    77278(e, t, n) {
      "use strict";
      var r, i, o = {},
        s = n(73481),
        a = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: n,
              output: r
            } = this._buildTables(e);
            this.gotoFn = n, this.output = r, this.failure = t
          }
          _buildTables(e) {
            const t = {
                0: {}
              },
              n = {};
            let r = 0;
            for (const i of e) {
              let e = 0;
              for (const o of i) t[e] && o in t[e] ? e = t[e][o] : (r++, t[e][o] = r, t[r] = {}, e = r, n[r] = []);
              n[e].push(i)
            }
            const i = {},
              o = [];
            for (const e in t[0]) {
              const n = t[0][e];
              i[n] = 0, o.push(n)
            }
            for (; o.length > 0;) {
              const e = o.shift();
              if (void 0 !== e)
                for (const r in t[e]) {
                  const s = t[e][r];
                  o.push(s);
                  let a = i[e];
                  for (; a > 0 && !(r in t[a]);) a = i[a];
                  if (r in t[a]) {
                    const e = t[a][r];
                    i[s] = e, n[s] = [...n[s], ...n[e]]
                  } else i[s] = 0
                }
            }
            return {
              gotoFn: t,
              output: n,
              failure: i
            }
          }
          search(e) {
            let t = 0;
            const n = [];
            for (let r = 0; r < e.length; r++) {
              const i = e[r];
              for (; t > 0 && !(i in this.gotoFn[t]);) t = this.failure[t];
              if (i in this.gotoFn[t] && (t = this.gotoFn[t][i], this.output[t].length > 0)) {
                const e = this.output[t];
                n.push([r, e])
              }
            }
            return n
          }
          match(e) {
            let t = 0;
            for (let n = 0; n < e.length; n++) {
              const r = e[n];
              for (; t > 0 && !(r in this.gotoFn[t]);) t = this.failure[t];
              if (r in this.gotoFn[t] && (t = this.gotoFn[t][r], this.output[t].length > 0)) return !0
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
      }(r || (r = {})),
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

      function g(e, t, n) {
        const r = parseInt(t, 16) - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
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
          n = k(t, `${e}`, 0);
        if (n < e.length) throw new Error(`Unmatched selector: ${e.slice(n)}`);
        return t
      }

      function k(e, t, n) {
        let o = [];

        function s(e) {
          const r = t.slice(n + e).match(u);
          if (!r) throw new Error(`Expected name, found ${t.slice(n)}`);
          const [i] = r;
          return n += e + i.length, v(i)
        }

        function a(e) {
          for (n += e; n < t.length && w(t.charCodeAt(n));) n++
        }

        function l() {
          const e = n += 1;
          let r = 1;
          for (; r > 0 && n < t.length; n++) 40 !== t.charCodeAt(n) || c(n) ? 41 !== t.charCodeAt(n) || c(n) || r-- : r++;
          if (r) throw new Error("Parenthesis not matched");
          return v(t.slice(e, n - 1))
        }

        function c(e) {
          let n = 0;
          for (; 92 === t.charCodeAt(--e);) n++;
          return !(1 & ~n)
        }

        function h() {
          if (o.length > 0 && function(e) {
              switch (e.type) {
                case r.Adjacent:
                case r.Child:
                case r.Descendant:
                case r.Parent:
                case r.Sibling:
                case r.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(o[o.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function f(e) {
          o.length > 0 && o[o.length - 1].type === r.Descendant ? o[o.length - 1].type = e : (h(), o.push({
            type: e
          }))
        }

        function g(e, t) {
          o.push({
            type: r.Attribute,
            name: e,
            action: t,
            value: s(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function b() {
          if (o.length && o[o.length - 1].type === r.Descendant && o.pop(), 0 === o.length) throw new Error("Empty sub-selector");
          e.push(o)
        }
        if (a(0), t.length === n) return n;
        e: for (; n < t.length;) {
          const e = t.charCodeAt(n);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== o.length && o[0].type === r.Descendant || (h(), o.push({
                type: r.Descendant
              })), a(1);
              break;
            case 62:
              f(r.Child), a(1);
              break;
            case 60:
              f(r.Parent), a(1);
              break;
            case 126:
              f(r.Sibling), a(1);
              break;
            case 43:
              f(r.Adjacent), a(1);
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
              124 === t.charCodeAt(n) ? e = s(1) : t.startsWith("*|", n) ? (l = "*", e = s(2)) : (e = s(0), 124 === t.charCodeAt(n) && 61 !== t.charCodeAt(n + 1) && (l = e, e = s(1))), a(0);
              let h = i.Exists;
              const u = d.get(t.charCodeAt(n));
              if (u) {
                if (h = u, 61 !== t.charCodeAt(n + 1)) throw new Error("Expected `=`");
                a(2)
              } else 61 === t.charCodeAt(n) && (h = i.Equals, a(1));
              let f = "",
                p = null;
              if ("exists" !== h) {
                if (y(t.charCodeAt(n))) {
                  const e = t.charCodeAt(n);
                  let r = n + 1;
                  for (; r < t.length && (t.charCodeAt(r) !== e || c(r));) r += 1;
                  if (t.charCodeAt(r) !== e) throw new Error("Attribute value didn't end");
                  f = v(t.slice(n + 1, r)), n = r + 1
                } else {
                  const e = n;
                  for (; n < t.length && (!w(t.charCodeAt(n)) && 93 !== t.charCodeAt(n) || c(n));) n += 1;
                  f = v(t.slice(e, n))
                }
                a(0);
                const e = 32 | t.charCodeAt(n);
                115 === e ? (p = !1, a(1)) : 105 === e && (p = !0, a(1))
              }
              if (93 !== t.charCodeAt(n)) throw new Error("Attribute selector didn't terminate");
              n += 1;
              const m = {
                type: r.Attribute,
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
              if (58 === t.charCodeAt(n + 1)) {
                o.push({
                  type: r.PseudoElement,
                  name: s(2).toLowerCase(),
                  data: 40 === t.charCodeAt(n) ? l() : null
                });
                continue
              }
              const e = s(1).toLowerCase();
              let i = null;
              if (40 === t.charCodeAt(n))
                if (p.has(e)) {
                  if (y(t.charCodeAt(n + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (i = [], n = k(i, t, n + 1), 41 !== t.charCodeAt(n)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  n += 1
                } else {
                  if (i = l(), m.has(e)) {
                    const e = i.charCodeAt(0);
                    e === i.charCodeAt(i.length - 1) && y(e) && (i = i.slice(1, -1))
                  }
                  i = v(i)
                } o.push({
                type: r.Pseudo,
                name: e,
                data: i
              });
              break
            }
            case 44:
              b(), o = [], a(1);
              break;
            default: {
              if (t.startsWith("/*", n)) {
                const e = t.indexOf("*/", n + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                n = e + 2, 0 === o.length && a(0);
                break
              }
              let i, l = null;
              if (42 === e) n += 1, i = "*";
              else if (124 === e) {
                if (i = "", 124 === t.charCodeAt(n + 1)) {
                  f(r.ColumnCombinator), a(2);
                  break
                }
              } else {
                if (!u.test(t.slice(n))) break e;
                i = s(0)
              }
              124 === t.charCodeAt(n) && 124 !== t.charCodeAt(n + 1) && (l = i, 42 === t.charCodeAt(n + 1) ? (i = "*", n += 2) : i = s(1)), o.push("*" === i ? {
                type: r.Universal,
                namespace: l
              } : {
                type: r.Tag,
                name: i,
                namespace: l
              })
            }
          }
        }
        return b(), n
      }

      function x(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? x(Object(n), !0).forEach(function(t) {
            S(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function S(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      const A = function e(t) {
        return n.withOptions = n => e(C(C({}, t), n)), n;

        function n(e, ...n) {
          const r = "string" == typeof e ? [e] : e.raw,
            {
              alignValues: i = !1,
              escapeSpecialCharacters: o = Array.isArray(e),
              trimWhitespace: s = !0
            } = t;
          let a = "";
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            o && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), a += t, e < n.length && (a += i ? O(n[e], a) : n[e])
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
          return s && (a = a.trim()), o && (a = a.replace(/\\n/g, "\n").replace(/\\t/g, "\t").replace(/\\r/g, "\r").replace(/\\v/g, "\v").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\0/g, "\0").replace(/\\x([\da-fA-F]{2})/g, (e, t) => String.fromCharCode(parseInt(t, 16))).replace(/\\u\{([\da-fA-F]{1,6})\}/g, (e, t) => String.fromCodePoint(parseInt(t, 16))).replace(/\\u([\da-fA-F]{4})/g, (e, t) => String.fromCharCode(parseInt(t, 16)))), "undefined" != typeof Bun && (a = a.replace(/\\u(?:\{([\da-fA-F]{1,6})\}|([\da-fA-F]{4}))/g, (e, t, n) => {
            var r;
            const i = null !== (r = null != t ? t : n) && void 0 !== r ? r : "";
            return String.fromCodePoint(parseInt(i, 16))
          })), a
        }
      }({});

      function O(e, t) {
        if ("string" != typeof e || !e.includes("\n")) return e;
        const n = t.slice(t.lastIndexOf("\n") + 1).match(/^(\s+)/);
        if (n) {
          const t = n[1];
          return e.replace(/\n/g, `\n${t}`)
        }
        return e
      }
      var L = function() {
        return L = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }, L.apply(this, arguments)
      };

      function E(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
        }
        return n
      }

      function T(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, i, o = n.call(e),
          s = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
        } catch (e) {
          i = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return s
      }
      var z = /(\u000D|\u000C|\u000D\u000A)/g,
        F = /[\u0000\uD800-\uDFFF]/g,
        R = /(\/\*)[\s\S]*?(\*\/)/g,
        _ = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var n = e.charCodeAt(t), r = [], i = t + 1; i < e.length; i += 1) {
            var o = e.charCodeAt(i);
            if (o === n) return [i, String.fromCharCode.apply(null, r)];
            if (92 === o) {
              var s = D(e, i);
              if (null === s) return null;
              var a = T(s, 2),
                l = a[0],
                c = a[1];
              r.push(c), i = l
            } else {
              if (10 === o) return null;
              r.push(o)
            }
          }
          return null
        },
        j = function(e, t) {
          if (e.length <= t) return !1;
          var n, r = e.charCodeAt(t);
          return 45 === r ? !(e.length <= t + 1) && (45 === (n = e.charCodeAt(t + 1)) || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 1) && 10 !== (n = e.charCodeAt(t + 1))
        },
        D = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var n = e.charCodeAt(t + 1);
          if (10 === n) return null;
          if (n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102) {
            for (var r = [n], i = Math.min(t + 7, e.length), o = t + 2; o < i; o += 1) {
              var s = e.charCodeAt(o);
              if (!(s >= 48 && s <= 57 || s >= 65 && s <= 70 || s >= 97 && s <= 102)) break;
              r.push(s)
            }
            if (o < e.length) {
              var a = e.charCodeAt(o);
              9 !== a && 32 !== a && 10 !== a || (o += 1)
            }
            return [o - 1, parseInt(String.fromCharCode.apply(null, r), 16)]
          }
          return [t + 1, n]
        },
        P = function(e, t) {
          var n = M(e, t);
          if (null === n) return null;
          var r = T(n, 3),
            i = r[0],
            o = r[1],
            s = r[2],
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
          var n = "integer",
            r = [],
            i = e.charCodeAt(t);
          for (43 !== i && 45 !== i || (t += 1, 45 === i && r.push(45)); t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) r.push(c), t += 1;
          if (t + 1 < e.length) {
            var o = e.charCodeAt(t),
              s = e.charCodeAt(t + 1);
            if (46 === o && s >= 48 && s <= 57)
              for (r.push(o, s), n = "number", t += 2; t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) r.push(c), t += 1
          }
          if (t + 1 < e.length) {
            o = e.charCodeAt(t), s = e.charCodeAt(t + 1);
            var a = e.charCodeAt(t + 2);
            if (69 === o || 101 === o) {
              var l = s >= 48 && s <= 57;
              if (l || (43 === s || 45 === s) && a >= 48 && a <= 57)
                for (n = "number", l ? (r.push(69, s), t += 2) : 45 === s ? (r.push(69, 45, a), t += 3) : (r.push(69, a), t += 3); t < e.length;) {
                  var c;
                  if (!((c = e.charCodeAt(t)) >= 48 && c <= 57)) break;
                  r.push(c), t += 1
                }
            }
          }
          var h = String.fromCharCode.apply(null, r),
            u = "number" === n ? parseFloat(h) : parseInt(h);
          return -0 === u && (u = 0), Number.isNaN(u) ? null : [t - 1, u, n]
        },
        I = function(e, t) {
          if (e.length <= t) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var i = D(e, t);
              if (null === i) break;
              var o = T(i, 2),
                s = o[0],
                a = o[1];
              n.push(a), t = s
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, n)]
        },
        B = function(e, t) {
          if (e.length <= t || !j(e, t)) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var i = D(e, t);
              if (null === i) break;
              var o = T(i, 2),
                s = o[0],
                a = o[1];
              n.push(a), t = s
            } return [t - 1, String.fromCharCode.apply(null, n)]
        },
        W = function(e, t) {
          for (var n = e.charCodeAt(t); 9 === n || 32 === n || 10 === n;) n = e.charCodeAt(++t);
          for (var r = [], i = !1; t < e.length;) {
            if (41 === n) return [t, String.fromCharCode.apply(null, r)];
            if (34 === n || 39 === n || 40 === n) return null;
            if (9 === n || 32 === n || 10 === n) i || 0 === r.length || (i = !0);
            else if (92 === n) {
              var o = D(e, t);
              if (null === o || i) return null;
              var s = T(o, 2),
                a = s[0],
                l = s[1];
              r.push(l), t = a
            } else {
              if (i) return null;
              r.push(n)
            }
            n = e.charCodeAt(++t)
          }
          return null
        },
        N = function(e, t) {
          var n = B(e, t);
          if (null === n) return null;
          var r = T(n, 2),
            i = r[0],
            o = r[1];
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
          for (var n = t.children.length - 1; n >= 0; n--) {
            var r = t.children[n];
            if (!("context" in r)) {
              var i = e(r);
              if (null === i.operator && 1 === i.children.length) t.children[n] = i.children[0];
              else if (i.operator === t.operator && ("and" === i.operator || "or" === i.operator)) {
                for (var o = [n, 1], s = 0; s < i.children.length; s++) o.push(i.children[s]);
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
            for (var n = []; t < e.length; t += 1) {
              var r = e.charCodeAt(t);
              if (9 === r || 32 === r || 10 === r) {
                for (var i = e.charCodeAt(++t); 9 === i || 32 === i || 10 === i;) i = e.charCodeAt(++t);
                t -= 1, n.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === r) {
                if (null === (A = _(e, t))) return null;
                var o = T(A, 2),
                  s = o[0],
                  a = o[1];
                n.push({
                  type: "<string-token>",
                  value: a
                }), t = s
              } else if (35 === r) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = j(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (A = I(e, t + 1))) {
                    var c = T(A, 2);
                    s = c[0], a = c[1], n.push({
                      type: "<hash-token>",
                      value: a.toLowerCase(),
                      flag: l
                    }), t = s;
                    continue
                  }
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (39 === r) {
                if (null === (A = _(e, t))) return null;
                var h = T(A, 2);
                s = h[0], a = h[1], n.push({
                  type: "<string-token>",
                  value: a
                }), t = s
              } else if (40 === r) n.push({
                type: "<(-token>"
              });
              else if (41 === r) n.push({
                type: "<)-token>"
              });
              else if (43 === r) {
                var u = P(e, t);
                if (null === u) n.push({
                  type: "<delim-token>",
                  value: r
                });
                else {
                  var f = T(u, 2);
                  s = f[0], "<dimension-token>" === (C = f[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: C[1],
                    unit: C[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === C[0] ? n.push({
                    type: C[0],
                    value: C[1],
                    flag: C[2]
                  }) : n.push({
                    type: C[0],
                    value: C[1],
                    flag: "number"
                  }), t = s
                }
              } else if (44 === r) n.push({
                type: "<comma-token>"
              });
              else if (45 === r) {
                if (null !== (y = P(e, t))) {
                  var d = T(y, 2);
                  s = d[0], "<dimension-token>" === (C = d[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: C[1],
                    unit: C[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === C[0] ? n.push({
                    type: C[0],
                    value: C[1],
                    flag: C[2]
                  }) : n.push({
                    type: C[0],
                    value: C[1],
                    flag: "number"
                  }), t = s;
                  continue
                }
                if (t + 2 < e.length) {
                  var p = e.charCodeAt(t + 1),
                    m = e.charCodeAt(t + 2);
                  if (45 === p && 62 === m) {
                    n.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (A = N(e, t))) {
                  var g = T(A, 3),
                    v = (s = g[0], a = g[1], g[2]);
                  n.push({
                    type: v,
                    value: a
                  }), t = s;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (46 === r) {
                var y;
                if (null !== (y = P(e, t))) {
                  var w = T(y, 2);
                  s = w[0], "<dimension-token>" === (C = w[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: C[1],
                    unit: C[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === C[0] ? n.push({
                    type: C[0],
                    value: C[1],
                    flag: C[2]
                  }) : n.push({
                    type: C[0],
                    value: C[1],
                    flag: "number"
                  }), t = s;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (58 === r) n.push({
                type: "<colon-token>"
              });
              else if (59 === r) n.push({
                type: "<semicolon-token>"
              });
              else if (60 === r) {
                if (t + 3 < e.length) {
                  p = e.charCodeAt(t + 1), m = e.charCodeAt(t + 2);
                  var b = e.charCodeAt(t + 3);
                  if (33 === p && 45 === m && 45 === b) {
                    n.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (64 === r) {
                if (null !== (A = B(e, t + 1))) {
                  var k = T(A, 2);
                  s = k[0], a = k[1], n.push({
                    type: "<at-keyword-token>",
                    value: a.toLowerCase()
                  }), t = s;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (91 === r) n.push({
                type: "<[-token>"
              });
              else if (92 === r) {
                if (null === (A = D(e, t))) return null;
                var x = T(A, 2);
                s = x[0], a = x[1], e = e.slice(0, t) + a + e.slice(s + 1), t -= 1
              } else if (93 === r) n.push({
                type: "<]-token>"
              });
              else if (123 === r) n.push({
                type: "<{-token>"
              });
              else if (125 === r) n.push({
                type: "<}-token>"
              });
              else if (r >= 48 && r <= 57) {
                var C, S = T(A = P(e, t), 2);
                s = S[0], "<dimension-token>" === (C = S[1])[0] ? n.push({
                  type: "<dimension-token>",
                  value: C[1],
                  unit: C[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === C[0] ? n.push({
                  type: C[0],
                  value: C[1],
                  flag: C[2]
                }) : n.push({
                  type: C[0],
                  value: C[1],
                  flag: "number"
                }), t = s
              } else if (95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128) {
                var A;
                if (null === (A = N(e, t))) return null;
                var O = T(A, 3);
                s = O[0], a = O[1], v = O[2], n.push({
                  type: v,
                  value: a
                }), t = s
              } else n.push({
                type: "<delim-token>",
                value: r
              })
            }
            return n.push({
              type: "<EOF-token>"
            }), n
          }(e.trim());
          if (null === t) throw $("Failed tokenizing");
          var n = 0,
            r = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw $("Expected whitespace after media");
            n = 2;
            for (var i = 2; i < t.length - 1; i++) {
              var o = t[i];
              if ("<{-token>" === o.type) {
                r = i;
                break
              }
              if ("<semicolon-token>" === o.type) throw $("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(n, r), V(t)
        },
        G = function(e) {
          for (var t = [], n = !1, r = 0; r < e.length; r++) "<whitespace-token>" === e[r].type ? (n = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(L(L({}, e[r]), {
            wsBefore: n,
            wsAfter: !1
          })), n = !1);
          return t
        },
        V = function(e) {
          for (var t, n, r = [
              []
            ], i = 0; i < e.length; i++) {
            var o = e[i];
            "<comma-token>" === o.type ? r.push([]) : r[r.length - 1].push(o)
          }
          var s = r.map(G);
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
                  n = t && e[t],
                  r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && r >= e.length && (e = void 0), {
                      value: e && e[r++],
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
              h && !h.done && (n = c.return) && n.call(c)
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
            var n = null,
              r = void 0,
              i = t.value;
            "only" !== i && "not" !== i || (n = i);
            var o = null === n ? 0 : 1;
            if (e.length <= o) throw $("Expected extra token in media query");
            var s = e[o];
            if ("<ident-token>" === s.type) {
              var a = s.value;
              if ("all" === a) r = "all";
              else if ("print" === a || "screen" === a) r = a;
              else {
                if ("tty" !== a && "tv" !== a && "projection" !== a && "handheld" !== a && "braille" !== a && "embossed" !== a && "aural" !== a && "speech" !== a) throw $("Unknown ident '".concat(a, "' in media query"));
                n = "not" === n ? null : "not", r = "all"
              }
            } else {
              if ("not" !== n || "<(-token>" !== s.type) throw $("Invalid media query");
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
              mediaPrefix: n,
              mediaType: r,
              mediaCondition: null
            };
            if (!(o + 4 < e.length)) throw $("Expected media condition after media prefix");
            var c = e[o + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw $("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: n,
                mediaType: r,
                mediaCondition: Q(e.slice(o + 2), !1)
              }
            } catch (e) {
              throw $("Expected media condition after 'and'", e)
            }
          }
        },
        Q = function e(t, n, r) {
          if (void 0 === r && (r = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
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
            operator: r,
            children: [i]
          };
          var u = t[o + 1];
          if ("<ident-token>" !== u.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== r && r !== u.value) throw new Error("'".concat(u.value, "' and '").concat(r, "' must not be at same level\nInvalid media condition"));
          if ("or" === u.value && !n) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== u.value && "or" !== u.value) throw new Error("Invalid operator: '".concat(u.value, "'\nInvalid media condition"));
          var f = e(t.slice(o + 2), n, u.value);
          return {
            operator: u.value,
            children: [i].concat(f.children)
          }
        },
        Y = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], n = 1; n < e.length; n++) {
            if (n < e.length - 2) {
              var r = e[n],
                i = e[n + 1],
                o = e[n + 2];
              if ("<number-token>" === r.type && r.value > 0 && "<delim-token>" === i.type && 47 === i.value && "<number-token>" === o.type && o.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: r.value,
                  denominator: o.value,
                  wsBefore: r.wsBefore,
                  wsAfter: o.wsAfter
                }), n += 2;
                continue
              }
            }
            t.push(e[n])
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
          var t, n, r, i;
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
            var a = 2 + (null !== (n = null === (t = o[s ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0),
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
                var f = e[a + 1 + (null !== (i = null === (r = o.rightOp) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0)];
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
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function K(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? K(Object(n), !0).forEach(function(t) {
            var r, i, o;
            r = e, i = t, o = n[t], (i = X(i)) in r ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[i] = o
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function te(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }

      function ne(e, t) {
        for (var n in e) t(e[n], n)
      }

      function re(e, t) {
        var n = {};
        for (var r in e) - 1 === t.indexOf(r) && (n[r] = e[r]);
        return n
      }
      var ie, oe = /[ -,\.\/:-@\[-\^`\{-~]/,
        se = /[ -,\.\/:-@\[\]\^`\{-~]/,
        ae = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        le = {
          escapeEverything: !1,
          isIdentifier: !1,
          quotes: "single",
          wrap: !1
        };

      function ce(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = "double" === (t = ee(ee({}, le), t)).quotes ? '"' : "'", {
            isIdentifier: r
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
          } else h = t.escapeEverything ? oe.test(l) ? "\\" + l : "\\" + c.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(l) ? "\\" + c.toString(16).toUpperCase() + " " : "\\" === l || !r && ('"' === l && n === l || "'" === l && n === l) || r && se.test(l) ? "\\" + l : l;
          o += h
        }
        return r && (/^-[-\d]/.test(o) ? o = "\\-" + o.slice(1) : /\d/.test(i) && (o = "\\3" + i + " " + o.slice(1))), o = o.replace(ae, function(e, t, n) {
          return t && t.length % 2 ? e : (t || "") + n
        }), !r && t.wrap ? n + o + n : o
      }

      function he(e, t) {
        for (var n = e.length - 1; n >= 0; n--) {
          var r = e[n];
          if ("child" === r.type || "parent" === r.type || "sibling" === r.type || "adjacent" === r.type || "descendant" === r.type) return !1;
          if ("attribute" === r.type && "class" === r.name && r.value === t) return !0;
          if ("pseudo" === r.type && Array.isArray(r.data) && ("is" === r.name || "where" === r.name) && r.data.every(e => he(e, t))) return !0
        }
        return !1
      }
      var ue = (e, t) => {
        var n, r = () => {
          var n = new RegExp(".".concat(ce(t, {
            isIdentifier: !0
          }).replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
          return e.replace(n, "&")
        };
        try {
          n = b(e)
        } catch (e) {
          throw new Error("Invalid selector: ".concat(r()), {
            cause: e
          })
        }
        n.forEach(e => {
          if (!he(e, t)) throw new Error(A(ie || (ie = h(["\n        Invalid selector: ", "\n\n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n\n        This is to ensure that each style block only affects the styling of a single class.\n\n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n\n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), r(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
        })
      };
      class fe {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new fe
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var n of e) {
            var r = t.findOrCreateCondition(n);
            t = r.children
          }
          return t
        }
        addRule(e, t, n) {
          var r = this.getConditionalRulesetByPath(n).findOrCreateCondition(t);
          if (!r) throw new Error("Failed to add conditional rule");
          r.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var n = this.getConditionalRulesetByPath(e), r = 0; r < t.length; r++) {
            var i, o = t[r],
              s = null !== (i = n.precedenceLookup.get(o)) && void 0 !== i ? i : new Set;
            for (var a of t.slice(r + 1)) s.add(a);
            n.precedenceLookup.set(o, s)
          }
        }
        isCompatible(e) {
          for (var [t, n] of this.precedenceLookup.entries())
            for (var r of n) {
              var i;
              if (null !== (i = e.precedenceLookup.get(r)) && void 0 !== i && i.has(t)) return !1
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
              rules: n,
              children: r
            }
            of e.ruleset.values()) {
            var i = this.ruleset.get(t);
            i ? (i.rules.push(...n), i.children.merge(r)) : this.ruleset.set(t, {
              query: t,
              rules: n,
              children: r
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
            n = function(n) {
              var i = e.ruleset.get(r);
              if (!i) throw new Error("Can't find condition for ".concat(r));
              var o = t.findIndex(e => n.has(e.query));
              o > -1 ? t.splice(o, 0, i) : t.push(i)
            };
          for (var [r, i] of this.precedenceLookup.entries()) n(i);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: n,
              children: r
            }
            of this.getSortedRuleset()) {
            var i = {};
            for (var o of n) i[o.selector] = ee(ee({}, i[o.selector]), o.rule);
            Object.assign(i, ...r.renderToArray()), e.push({
              [t]: i
            })
          }
          return e
        }
      }
      var de, pe = {
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
        me = Object.keys(pe),
        ge = pe,
        ve = (e, t) => new Error(A(de || (de = h(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        ye = e => {
          if ("@media " === e) throw ve(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = q(e[t])
            })(H(e))
          } catch (t) {
            throw ve(e, t.message)
          }
        },
        we = ["vars"],
        be = ["content"],
        ke = "__DECLARATION",
        xe = {
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

      function Ce(e, t, n, r) {
        var i = e.slice(0, t),
          o = e.slice(n);
        return "".concat(i).concat(r).concat(o)
      }
      var Se = [...me, "@layer", "@media", "@supports", "@container", "@starting-style", "selectors"];
      class Ae {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new fe], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map(e => [e, e])), this.localClassNamesSearch = new a(e), this.layers = new Map, this.composedClassLists = t.map(e => {
            var {
              identifier: t,
              classList: n
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(n, ")"), "g")
            }
          }).reverse()
        }
        processCssObj(e) {
          if ("fontFace" !== e.type)
            if ("property" !== e.type) {
              if ("keyframes" === e.type) return e.rule = Object.fromEntries(Object.entries(e.rule).map(e => {
                var [t, n] = e;
                return [t, this.transformVars(this.transformProperties(n))]
              })), void this.keyframesRules.push(e);
              if (this.currConditionalRuleset = new fe, "layer" === e.type) {
                var t = "@layer ".concat(e.name);
                this.addLayer([t])
              } else {
                var n = re(e.rule, Se);
                this.addRule({
                  selector: e.selector,
                  rule: n
                }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformStartingStyle(e, e.rule["@starting-style"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
              }
              this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
            } else this.propertyRules.push(e);
          else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var n = this.transformVars(this.transformProperties(e.rule)),
            r = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var i = t[t.length - 1],
            o = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: r,
            rule: n
          }, i, o)
        }
        addRule(e) {
          var t = this.transformVars(this.transformProperties(e.rule)),
            n = this.transformSelector(e.selector);
          this.rules.push({
            selector: n,
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
          return ne(e, (t, n) => {
            "number" != typeof t || 0 === t || xe[n] || (e[n] = "".concat(t, "px"))
          }), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, n = te(e, we);
          return t ? ee(ee({}, function(e, t) {
            var n = {};
            for (var r in e) n[t(e[r], r)] = e[r];
            return n
          }(t, (e, t) => (0, s.Tm)(t))), n) : n
        }
        transformContent(e) {
          var {
            content: t
          } = e, n = te(e, be);
          return void 0 === t ? n : ee({
            content: (Array.isArray(t) ? t : [t]).map(e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"'))
          }, n)
        }
        transformClassname(e) {
          return ".".concat(ce(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            n = function(e) {
              t = t.replace(i, () => (function() {
                (() => {
                  if (l.length < 1) throw new Error("No adapter configured");
                  return l[l.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e))
            };
          for (var {
              identifier: r,
              regex: i
            }
            of this.composedClassLists) n(r);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var o = this.localClassNamesSearch.search(t), s = t.length, a = o.length - 1; a >= 0; a--) {
            var [c, [h]] = o[a], u = c - h.length + 1;
            s <= c || (s = u, "." !== t[u - 1] && (t = Ce(t, u, c + 1, this.transformClassname(h))))
          }
          return t
        }
        transformSelectors(e, t, n) {
          ne(t.selectors, (t, r) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var i = this.transformSelector(r.replace(RegExp("&", "g"), e.selector));
            ue(i, e.selector);
            var o = {
              selector: i,
              rule: re(t, Se)
            };
            n ? this.addConditionalRule(o, n) : this.addRule(o);
            var s = {
              type: "selector",
              selector: i,
              rule: t
            };
            this.transformLayer(s, t["@layer"], n), this.transformSupports(s, t["@supports"], n), this.transformMedia(s, t["@media"], n), this.transformContainer(s, t["@container"], n), this.transformStartingStyle(s, t["@starting-style"], n)
          })
        }
        transformMedia(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [i, o] of(null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map(e => "@media ".concat(e))), Object.entries(t))) {
              var s = "@media ".concat(i);
              ye(s);
              var a = [...r, s];
              this.addConditionalRule({
                selector: e.selector,
                rule: re(o, Se)
              }, a), "local" === e.type && (this.transformSimplePseudos(e, o, a), this.transformSelectors(e, o, a)), this.transformLayer(e, o["@layer"], a), this.transformSupports(e, o["@supports"], a), this.transformContainer(e, o["@container"], a), this.transformStartingStyle(e, o["@starting-style"], a)
            }
        }
        transformContainer(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map(e => "@container ".concat(e))), ne(t, (t, n) => {
            var i = "@container ".concat(n),
              o = [...r, i];
            this.addConditionalRule({
              selector: e.selector,
              rule: re(t, Se)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformSupports(e, t["@supports"], o), this.transformMedia(e, t["@media"], o), this.transformStartingStyle(e, t["@starting-style"], o)
          }))
        }
        transformLayer(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map(e => "@layer ".concat(e))), ne(t, (t, n) => {
            var i = [...r, "@layer ".concat(n)];
            this.addLayer(i), this.addConditionalRule({
              selector: e.selector,
              rule: re(t, Se)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformMedia(e, t["@media"], i), this.transformSupports(e, t["@supports"], i), this.transformContainer(e, t["@container"], i), this.transformStartingStyle(e, t["@starting-style"], i)
          }))
        }
        transformSupports(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map(e => "@supports ".concat(e))), ne(t, (t, n) => {
            var i = [...r, "@supports ".concat(n)];
            this.addConditionalRule({
              selector: e.selector,
              rule: re(t, Se)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformMedia(e, t["@media"], i), this.transformContainer(e, t["@container"], i), this.transformStartingStyle(e, t["@starting-style"], i)
          }))
        }
        transformSimplePseudos(e, t, n) {
          for (var r of Object.keys(t))
            if (ge[r]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              n ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(r),
                rule: t[r]
              }, n) : this.addRule({
                conditions: n,
                selector: "".concat(e.selector).concat(r),
                rule: t[r]
              })
            }
        }
        transformStartingStyle(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t) {
            var r, i = Object.keys(t).find(e => e.startsWith("@"));
            if (i) throw new Error('Nested at-rules (e.g. "'.concat(i, '") are not allowed inside @starting-style.'));
            null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, ["@starting-style"]);
            var o = [...n, "@starting-style"];
            this.addConditionalRule({
              selector: e.selector,
              rule: re(t, Se)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o))
          }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(Oe({
            "@font-face": t
          }));
          for (var n of this.propertyRules) e.push(Oe({
            ["@property ".concat(n.name)]: n.rule
          }));
          for (var r of this.keyframesRules) e.push(Oe({
            ["@keyframes ".concat(r.name)]: r.rule
          }));
          for (var i of this.layers.values()) {
            var [o, ...s] = i.reverse(), a = {
              [o]: ke
            };
            for (var l of s) a = {
              [l]: a
            };
            e.push(Oe(a))
          }
          for (var c of this.rules) e.push(Oe({
            [c.selector]: c.rule
          }));
          for (var h of this.conditionalRulesets)
            for (var u of h.renderToArray()) e.push(Oe(u));
          return e.filter(Boolean)
        }
      }

      function Oe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = [],
          r = function(r) {
            var i, o = e[r];
            o && Array.isArray(o) ? n.push(...o.map(e => Oe({
              [r]: e
            }, t))) : o && "object" == typeof o ? 0 === Object.keys(o).length || n.push("".concat(t).concat(r, " {\n").concat(Oe(o, t + "  "), "\n").concat(t, "}")) : o === ke ? n.push("".concat(t).concat(r, ";")) : n.push("".concat(t).concat(r.startsWith("--") ? r : (i = r, i.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(o, ";"))
          };
        for (var i of Object.keys(e)) r(i);
        return n.join("\n")
      }
      var Le = n(43431);
      const Ee = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        Te = new Set,
        ze = "object" == typeof Le && Le ? Le : {},
        Fe = (e, t, n, r) => {
          "function" == typeof ze.emitWarning ? ze.emitWarning(e, t, n, r) : console.error(`[${n}] ${t}: ${e}`)
        };
      let Re = globalThis.AbortController,
        _e = globalThis.AbortSignal;
      if (void 0 === Re) {
        _e = class {
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
          signal = new _e;
          abort(e) {
            if (!this.signal.aborted) {
              this.signal.reason = e, this.signal.aborted = !0;
              for (const t of this.signal._onabort) t(e);
              this.signal.onabort?.(e)
            }
          }
        };
        let e = "1" !== ze.env?.LRU_CACHE_IGNORE_AC_WARNING;
        const t = () => {
          e && (e = !1, Fe("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
        }
      }
      Symbol("type");
      const je = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        De = e => je(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? Pe : null : null;
      class Pe extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class Me {
        heap;
        length;
        static #e = !1;
        static create(e) {
          const t = De(e);
          if (!t) return [];
          Me.#e = !0;
          const n = new Me(e, t);
          return Me.#e = !1, n
        }
        constructor(e, t) {
          if (!Me.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class Ie {
        #t;
        #n;
        #r;
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
        #C;
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
            isBackgroundFetch: t => e.#S(t),
            backgroundFetch: (t, n, r, i) => e.#A(t, n, r, i),
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
          return this.#n
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
          return this.#r
        }
        get disposeAfter() {
          return this.#i
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: n,
            ttlResolution: r = 1,
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
          if (0 !== t && !je(t)) throw new TypeError("max option must be a nonnegative integer");
          const x = t ? De(t) : Array;
          if (!x) throw new Error("invalid max value: " + t);
          if (this.#t = t, this.#n = f, this.maxEntrySize = d || this.#n, this.sizeCalculation = p, this.sizeCalculation) {
            if (!this.#n && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== g && "function" != typeof g) throw new TypeError("memoMethod must be a function if defined");
          if (this.#s = g, void 0 !== m && "function" != typeof m) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#o = m, this.#x = !!m, this.#c = new Map, this.#h = new Array(t).fill(void 0), this.#u = new Array(t).fill(void 0), this.#f = new x(t), this.#d = new x(t), this.#p = 0, this.#m = 0, this.#g = Me.create(t), this.#a = 0, this.#l = 0, "function" == typeof l && (this.#r = l), "function" == typeof c ? (this.#i = c, this.#v = []) : (this.#i = void 0, this.#v = void 0), this.#k = !!this.#r, this.#C = !!this.#i, this.noDisposeOnSet = !!h, this.noUpdateTTL = !!u, this.noDeleteOnFetchRejection = !!v, this.allowStaleOnFetchRejection = !!w, this.allowStaleOnFetchAbort = !!b, this.ignoreFetchAbort = !!k, 0 !== this.maxEntrySize) {
            if (0 !== this.#n && !je(this.#n)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!je(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#z()
          }
          if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!s, this.ttlResolution = je(r) || 0 === r ? r : 1, this.ttlAutopurge = !!i, this.ttl = n || 0, this.ttl) {
            if (!je(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#F()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#n) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#n) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !Te.has(e))(e) && (Te.add(e), Fe("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, Ie))
          }
        }
        getRemainingTTL(e) {
          return this.#c.has(e) ? 1 / 0 : 0
        }
        #F() {
          const e = new Pe(this.#t),
            t = new Pe(this.#t);
          this.#b = e, this.#w = t, this.#R = (n, r, i = Ee.now()) => {
            if (t[n] = 0 !== r ? i : 0, e[n] = r, 0 !== r && this.ttlAutopurge) {
              const e = setTimeout(() => {
                this.#T(n) && this.#_(this.#h[n], "expire")
              }, r + 1);
              e.unref && e.unref()
            }
          }, this.#j = n => {
            t[n] = 0 !== e[n] ? Ee.now() : 0
          }, this.#D = (i, o) => {
            if (e[o]) {
              const s = e[o],
                a = t[o];
              if (!s || !a) return;
              i.ttl = s, i.start = a, i.now = n || r();
              const l = i.now - a;
              i.remainingTTL = s - l
            }
          };
          let n = 0;
          const r = () => {
            const e = Ee.now();
            if (this.ttlResolution > 0) {
              n = e;
              const t = setTimeout(() => n = 0, this.ttlResolution);
              t.unref && t.unref()
            }
            return e
          };
          this.getRemainingTTL = i => {
            const o = this.#c.get(i);
            if (void 0 === o) return 0;
            const s = e[o],
              a = t[o];
            return s && a ? s - ((n || r()) - a) : 1 / 0
          }, this.#T = i => {
            const o = t[i],
              s = e[i];
            return !!s && !!o && (n || r()) - o > s
          }
        }
        #j = () => {};
        #D = () => {};
        #R = () => {};
        #T = () => !1;
        #z() {
          const e = new Pe(this.#t);
          this.#l = 0, this.#y = e, this.#P = t => {
            this.#l -= e[t], e[t] = 0
          }, this.#M = (e, t, n, r) => {
            if (this.#S(t)) return 0;
            if (!je(n)) {
              if (!r) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
              if ("function" != typeof r) throw new TypeError("sizeCalculation must be a function");
              if (n = r(t, e), !je(n)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
            }
            return n
          }, this.#I = (t, n, r) => {
            if (e[t] = n, this.#n) {
              const n = this.#n - e[t];
              for (; this.#l > n;) this.#B(!0)
            }
            this.#l += e[t], r && (r.entrySize = n, r.totalCalculatedSize = this.#l)
          }
        }
        #P = e => {};
        #I = (e, t, n) => {};
        #M = (e, t, n, r) => {
          if (n || r) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
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
          for (const e of this.#L()) void 0 === this.#u[e] || void 0 === this.#h[e] || this.#S(this.#u[e]) || (yield [this.#h[e], this.#u[e]])
        }* rentries() {
          for (const e of this.#E()) void 0 === this.#u[e] || void 0 === this.#h[e] || this.#S(this.#u[e]) || (yield [this.#h[e], this.#u[e]])
        }* keys() {
          for (const e of this.#L()) {
            const t = this.#h[e];
            void 0 === t || this.#S(this.#u[e]) || (yield t)
          }
        }* rkeys() {
          for (const e of this.#E()) {
            const t = this.#h[e];
            void 0 === t || this.#S(this.#u[e]) || (yield t)
          }
        }* values() {
          for (const e of this.#L()) void 0 === this.#u[e] || this.#S(this.#u[e]) || (yield this.#u[e])
        }* rvalues() {
          for (const e of this.#E()) void 0 === this.#u[e] || this.#S(this.#u[e]) || (yield this.#u[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e, t = {}) {
          for (const n of this.#L()) {
            const r = this.#u[n],
              i = this.#S(r) ? r.__staleWhileFetching : r;
            if (void 0 !== i && e(i, this.#h[n], this)) return this.get(this.#h[n], t)
          }
        }
        forEach(e, t = this) {
          for (const n of this.#L()) {
            const r = this.#u[n],
              i = this.#S(r) ? r.__staleWhileFetching : r;
            void 0 !== i && e.call(t, i, this.#h[n], this)
          }
        }
        rforEach(e, t = this) {
          for (const n of this.#E()) {
            const r = this.#u[n],
              i = this.#S(r) ? r.__staleWhileFetching : r;
            void 0 !== i && e.call(t, i, this.#h[n], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (const t of this.#E({
              allowStale: !0
            })) this.#T(t) && (this.#_(this.#h[t], "expire"), e = !0);
          return e
        }
        info(e) {
          const t = this.#c.get(e);
          if (void 0 === t) return;
          const n = this.#u[t],
            r = this.#S(n) ? n.__staleWhileFetching : n;
          if (void 0 === r) return;
          const i = {
            value: r
          };
          if (this.#b && this.#w) {
            const e = this.#b[t],
              n = this.#w[t];
            if (e && n) {
              const t = e - (Ee.now() - n);
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
            const n = this.#h[t],
              r = this.#u[t],
              i = this.#S(r) ? r.__staleWhileFetching : r;
            if (void 0 === i || void 0 === n) continue;
            const o = {
              value: i
            };
            if (this.#b && this.#w) {
              o.ttl = this.#b[t];
              const e = Ee.now() - this.#w[t];
              o.start = Math.floor(Date.now() - e)
            }
            this.#y && (o.size = this.#y[t]), e.unshift([n, o])
          }
          return e
        }
        load(e) {
          this.clear();
          for (const [t, n] of e) {
            if (n.start) {
              const e = Date.now() - n.start;
              n.start = Ee.now() - e
            }
            this.set(t, n.value, n)
          }
        }
        set(e, t, n = {}) {
          if (void 0 === t) return this.delete(e), this;
          const {
            ttl: r = this.ttl,
            start: i,
            noDisposeOnSet: o = this.noDisposeOnSet,
            sizeCalculation: s = this.sizeCalculation,
            status: a
          } = n;
          let {
            noUpdateTTL: l = this.noUpdateTTL
          } = n;
          const c = this.#M(e, t, n.size || 0, s);
          if (this.maxEntrySize && c > this.maxEntrySize) return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.#_(e, "set"), this;
          let h = 0 === this.#a ? void 0 : this.#c.get(e);
          if (void 0 === h) h = 0 === this.#a ? this.#m : 0 !== this.#g.length ? this.#g.pop() : this.#a === this.#t ? this.#B(!1) : this.#a, this.#h[h] = e, this.#u[h] = t, this.#c.set(e, h), this.#f[this.#m] = h, this.#d[h] = this.#m, this.#m = h, this.#a++, this.#I(h, c, a), a && (a.set = "add"), l = !1;
          else {
            this.#O(h);
            const n = this.#u[h];
            if (t !== n) {
              if (this.#x && this.#S(n)) {
                n.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = n;
                void 0 === t || o || (this.#k && this.#r?.(t, e, "set"), this.#C && this.#v?.push([t, e, "set"]))
              } else o || (this.#k && this.#r?.(n, e, "set"), this.#C && this.#v?.push([n, e, "set"]));
              if (this.#P(h), this.#I(h, c, a), this.#u[h] = t, a) {
                a.set = "replace";
                const e = n && this.#S(n) ? n.__staleWhileFetching : n;
                void 0 !== e && (a.oldValue = e)
              }
            } else a && (a.set = "update")
          }
          if (0 === r || this.#b || this.#F(), this.#b && (l || this.#R(h, r, i), a && this.#D(a, h)), !o && this.#C && this.#v) {
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
              if (this.#B(!0), this.#S(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#C && this.#v) {
              const e = this.#v;
              let t;
              for (; t = e?.shift();) this.#i?.(...t)
            }
          }
        }
        #B(e) {
          const t = this.#p,
            n = this.#h[t],
            r = this.#u[t];
          return this.#x && this.#S(r) ? r.__abortController.abort(new Error("evicted")) : (this.#k || this.#C) && (this.#k && this.#r?.(r, n, "evict"), this.#C && this.#v?.push([r, n, "evict"])), this.#P(t), e && (this.#h[t] = void 0, this.#u[t] = void 0, this.#g.push(t)), 1 === this.#a ? (this.#p = this.#m = 0, this.#g.length = 0) : this.#p = this.#f[t], this.#c.delete(n), this.#a--, t
        }
        has(e, t = {}) {
          const {
            updateAgeOnHas: n = this.updateAgeOnHas,
            status: r
          } = t, i = this.#c.get(e);
          if (void 0 !== i) {
            const e = this.#u[i];
            if (this.#S(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#T(i)) return n && this.#j(i), r && (r.has = "hit", this.#D(r, i)), !0;
            r && (r.has = "stale", this.#D(r, i))
          } else r && (r.has = "miss");
          return !1
        }
        peek(e, t = {}) {
          const {
            allowStale: n = this.allowStale
          } = t, r = this.#c.get(e);
          if (void 0 === r || !n && this.#T(r)) return;
          const i = this.#u[r];
          return this.#S(i) ? i.__staleWhileFetching : i
        }
        #A(e, t, n, r) {
          const i = void 0 === t ? void 0 : this.#u[t];
          if (this.#S(i)) return i;
          const o = new Re,
            {
              signal: s
            } = n;
          s?.addEventListener("abort", () => o.abort(s.reason), {
            signal: o.signal
          });
          const a = {
              signal: o.signal,
              options: n,
              context: r
            },
            l = (r, i = !1) => {
              const {
                aborted: s
              } = o.signal, l = n.ignoreFetchAbort && void 0 !== r;
              if (n.status && (s && !i ? (n.status.fetchAborted = !0, n.status.fetchError = o.signal.reason, l && (n.status.fetchAbortIgnored = !0)) : n.status.fetchResolved = !0), s && !l && !i) return c(o.signal.reason);
              const u = h;
              return this.#u[t] === h && (void 0 === r ? u.__staleWhileFetching ? this.#u[t] = u.__staleWhileFetching : this.#_(e, "fetch") : (n.status && (n.status.fetchUpdated = !0), this.set(e, r, a.options))), r
            },
            c = r => {
              const {
                aborted: i
              } = o.signal, s = i && n.allowStaleOnFetchAbort, a = s || n.allowStaleOnFetchRejection, l = a || n.noDeleteOnFetchRejection, c = h;
              if (this.#u[t] === h && (l && void 0 !== c.__staleWhileFetching ? s || (this.#u[t] = c.__staleWhileFetching) : this.#_(e, "fetch")), a) return n.status && void 0 !== c.__staleWhileFetching && (n.status.returnedStale = !0), c.__staleWhileFetching;
              if (c.__returned === c) throw r
            };
          n.status && (n.status.fetchDispatched = !0);
          const h = new Promise((t, r) => {
              const s = this.#o?.(e, i, a);
              s && s instanceof Promise && s.then(e => t(void 0 === e ? void 0 : e), r), o.signal.addEventListener("abort", () => {
                n.ignoreFetchAbort && !n.allowStaleOnFetchAbort || (t(void 0), n.allowStaleOnFetchAbort && (t = e => l(e, !0)))
              })
            }).then(l, e => (n.status && (n.status.fetchRejected = !0, n.status.fetchError = e), c(e))),
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
        #S(e) {
          if (!this.#x) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof Re
        }
        async fetch(e, t = {}) {
          const {
            allowStale: n = this.allowStale,
            updateAgeOnGet: r = this.updateAgeOnGet,
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
            allowStale: n,
            updateAgeOnGet: r,
            noDeleteOnStaleGet: i,
            status: g
          });
          const y = {
            allowStale: n,
            updateAgeOnGet: r,
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
            if (this.#S(t)) {
              const e = n && void 0 !== t.__staleWhileFetching;
              return g && (g.fetch = "inflight", e && (g.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const i = this.#T(w);
            if (!m && !i) return g && (g.fetch = "hit"), this.#O(w), r && this.#j(w), g && this.#D(g, w), t;
            const o = this.#A(e, w, y, p),
              s = void 0 !== o.__staleWhileFetching && n;
            return g && (g.fetch = i ? "stale" : "refresh", s && i && (g.returnedStale = !0)), s ? o.__staleWhileFetching : o.__returned = o
          }
        }
        async forceFetch(e, t = {}) {
          const n = await this.fetch(e, t);
          if (void 0 === n) throw new Error("fetch() returned undefined");
          return n
        }
        memo(e, t = {}) {
          const n = this.#s;
          if (!n) throw new Error("no memoMethod provided to constructor");
          const {
            context: r,
            forceRefresh: i,
            ...o
          } = t, s = this.get(e, o);
          if (!i && void 0 !== s) return s;
          const a = n(e, s, {
            options: o,
            context: r
          });
          return this.set(e, a, o), a
        }
        get(e, t = {}) {
          const {
            allowStale: n = this.allowStale,
            updateAgeOnGet: r = this.updateAgeOnGet,
            noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
            status: o
          } = t, s = this.#c.get(e);
          if (void 0 !== s) {
            const t = this.#u[s],
              a = this.#S(t);
            return o && this.#D(o, s), this.#T(s) ? (o && (o.get = "stale"), a ? (o && n && void 0 !== t.__staleWhileFetching && (o.returnedStale = !0), n ? t.__staleWhileFetching : void 0) : (i || this.#_(e, "expire"), o && n && (o.returnedStale = !0), n ? t : void 0)) : (o && (o.get = "hit"), a ? t.__staleWhileFetching : (this.#O(s), r && this.#j(s), t))
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
          return this.#_(e, "delete")
        }
        #_(e, t) {
          let n = !1;
          if (0 !== this.#a) {
            const r = this.#c.get(e);
            if (void 0 !== r)
              if (n = !0, 1 === this.#a) this.#q(t);
              else {
                this.#P(r);
                const n = this.#u[r];
                if (this.#S(n) ? n.__abortController.abort(new Error("deleted")) : (this.#k || this.#C) && (this.#k && this.#r?.(n, e, t), this.#C && this.#v?.push([n, e, t])), this.#c.delete(e), this.#h[r] = void 0, this.#u[r] = void 0, r === this.#m) this.#m = this.#d[r];
                else if (r === this.#p) this.#p = this.#f[r];
                else {
                  const e = this.#d[r];
                  this.#f[e] = this.#f[r];
                  const t = this.#f[r];
                  this.#d[t] = this.#d[r]
                }
                this.#a--, this.#g.push(r)
              }
          }
          if (this.#C && this.#v?.length) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
          return n
        }
        clear() {
          return this.#q("delete")
        }
        #q(e) {
          for (const t of this.#E({
              allowStale: !0
            })) {
            const n = this.#u[t];
            if (this.#S(n)) n.__abortController.abort(new Error("deleted"));
            else {
              const r = this.#h[t];
              this.#k && this.#r?.(n, r, e), this.#C && this.#v?.push([n, r, e])
            }
          }
          if (this.#c.clear(), this.#u.fill(void 0), this.#h.fill(void 0), this.#b && this.#w && (this.#b.fill(0), this.#w.fill(0)), this.#y && this.#y.fill(0), this.#p = 0, this.#m = 0, this.#g.length = 0, this.#l = 0, this.#a = 0, this.#C && this.#v) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
        }
      }
      n(76597);
      var Be = new Set,
        We = [],
        Ne = [];
      c || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        c = !0, l.push(e)
      })({
        appendCss: e => {
          Ne.push(e)
        },
        registerClassName: e => {
          Be.add(e)
        },
        registerComposition: e => {
          We.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: n,
              composedClassLists: r
            } = e, i = new Ae(t, r);
            for (var o of n) i.processCssObj(o);
            return i.toCss()
          }({
            localClassNames: Array.from(Be),
            composedClassLists: We,
            cssObjs: Ne
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: n
            } = e, r = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, i = o[r];
            if (!i) {
              var s = document.createElement("style");
              t.packageName && s.setAttribute("data-package", t.packageName), s.setAttribute("data-file", t.filePath), s.setAttribute("type", "text/css"), i = o[r] = s, document.head.appendChild(s)
            }
            i.innerHTML = n
          })({
            fileScope: e,
            css: t
          }), Ne = []
        },
        getIdentOption: () => "short"
      });
      new Ie({
        max: 500
      })
    },
    64001(e, t, n) {
      "use strict";
      n.d(t, {
        D: () => i
      });
      var r = n(73481);

      function i(e, t) {
        var n = {};
        if ("object" == typeof t) {
          var i = e;
          (0, r.Bx)(t, (e, t) => {
            if (null != e) {
              var o = (0, r.Jt)(i, t);
              n[(0, r.Tm)(o)] = String(e)
            }
          })
        } else {
          var o = e;
          for (var s in o) {
            var a = o[s];
            null != a && (n[(0, r.Tm)(s)] = a)
          }
        }
        return Object.defineProperty(n, "toString", {
          value: function() {
            return Object.keys(this).map(e => "".concat(e, ":").concat(this[e])).join(";")
          },
          writable: !1
        }), n
      }
    },
    73481(e, t, n) {
      "use strict";

      function r(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function i(e, t) {
        var n = e;
        for (var r of t) {
          if (!(r in n)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
          n = n[r]
        }
        return n
      }

      function o(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          r = {};
        for (var i in e) {
          var s = e[i],
            a = [...n, i];
          "string" == typeof s || "number" == typeof s || null == s ? r[i] = t(s, a) : "object" != typeof s || Array.isArray(s) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(s) ? "Array" : typeof s, '"')) : r[i] = o(s, t, a)
        }
        return r
      }
      n.d(t, {
        Bx: () => o,
        Jt: () => i,
        Tm: () => r
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
              return e.$$typeof === n
            }(e)
          }(e)
        },
        n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function r(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? a((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
        var n
      }

      function i(e, t, n) {
        return e.concat(t).map(function(e) {
          return r(e, n)
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

      function a(e, n, l) {
        (l = l || {}).arrayMerge = l.arrayMerge || i, l.isMergeableObject = l.isMergeableObject || t, l.cloneUnlessOtherwiseSpecified = r;
        var c = Array.isArray(n);
        return c === Array.isArray(e) ? c ? l.arrayMerge(e, n, l) : function(e, t, n) {
          var i = {};
          return n.isMergeableObject(e) && o(e).forEach(function(t) {
            i[t] = r(e[t], n)
          }), o(t).forEach(function(o) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (s(e, o) && n.isMergeableObject(t[o]) ? i[o] = function(e, t) {
              if (!t.customMerge) return a;
              var n = t.customMerge(e);
              return "function" == typeof n ? n : a
            }(o, n)(e[o], t[o], n) : i[o] = r(t[o], n))
          }), i
        }(e, n, l) : r(n, l)
      }
      a.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, n) {
          return a(e, n, t)
        }, {})
      };
      var l = a;
      e.exports = l
    },
    43431(e) {
      var t, n, r = e.exports = {};

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
        } catch (n) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
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
          n = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
          n = o
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
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
              try {
                return n(e)
              } catch (t) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            }(e)
        }
      }

      function d(e, t) {
        this.fun = e, this.array = t
      }

      function p() {}
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new d(e, t)), 1 !== l.length || c || s(f)
      }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function(e) {
        return []
      }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    },
    45750(e, t, n) {
      "use strict";
      n.d(t, {
        UE: () => ee,
        ll: () => Z,
        rD: () => ne,
        UU: () => J,
        jD: () => K,
        ER: () => te,
        cY: () => Q,
        BN: () => Y,
        Ej: () => X
      });
      const r = ["top", "right", "bottom", "left"],
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

      function h(e, t, n) {
        return o(e, i(t, n))
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

      function C(e) {
        const t = f(e);
        return c[t] + e.slice(t.length)
      }

      function S(e) {
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
          y: n,
          width: r,
          height: i
        } = e;
        return {
          width: r,
          height: i,
          top: n,
          left: t,
          right: t + r,
          bottom: n + i,
          x: t,
          y: n
        }
      }

      function O(e, t, n) {
        let {
          reference: r,
          floating: i
        } = e;
        const o = g(t),
          s = v(t),
          a = m(s),
          l = f(t),
          c = "y" === o,
          h = r.x + r.width / 2 - i.width / 2,
          u = r.y + r.height / 2 - i.height / 2,
          p = r[a] / 2 - i[a] / 2;
        let y;
        switch (l) {
          case "top":
            y = {
              x: h,
              y: r.y - i.height
            };
            break;
          case "bottom":
            y = {
              x: h,
              y: r.y + r.height
            };
            break;
          case "right":
            y = {
              x: r.x + r.width,
              y: u
            };
            break;
          case "left":
            y = {
              x: r.x - i.width,
              y: u
            };
            break;
          default:
            y = {
              x: r.x,
              y: r.y
            }
        }
        switch (d(t)) {
          case "start":
            y[s] -= p * (n && c ? -1 : 1);
            break;
          case "end":
            y[s] += p * (n && c ? -1 : 1)
        }
        return y
      }
      async function L(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
          x: r,
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
        } = u(t, e), m = S(p), g = a[d ? "floating" === f ? "reference" : "floating" : f], v = A(await o.getClippingRect({
          element: null == (n = await (null == o.isElement ? void 0 : o.isElement(g))) || n ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(a.floating)),
          boundary: c,
          rootBoundary: h,
          strategy: l
        })), y = "floating" === f ? {
          x: r,
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
        return r.some(t => e[t] >= 0)
      }
      const z = new Set(["left", "top"]);
      var F = n(24843);

      function R(e) {
        const t = (0, F.L9)(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const i = (0, F.sb)(e),
          o = i ? e.offsetWidth : n,
          a = i ? e.offsetHeight : r,
          l = s(n) !== o || s(r) !== a;
        return l && (n = o, r = a), {
          width: n,
          height: r,
          $: l
        }
      }

      function _(e) {
        return (0, F.vq)(e) ? e : e.contextElement
      }

      function j(e) {
        const t = _(e);
        if (!(0, F.sb)(t)) return l(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: i,
            $: o
          } = R(t);
        let a = (o ? s(n.width) : n.width) / r,
          c = (o ? s(n.height) : n.height) / i;
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

      function M(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const i = e.getBoundingClientRect(),
          o = _(e);
        let s = l(1);
        t && (r ? (0, F.vq)(r) && (s = j(r)) : s = j(e));
        const a = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== (0, F.zk)(e)) && t
        }(o, n, r) ? P(o) : l(0);
        let c = (i.left + a.x) / s.x,
          h = (i.top + a.y) / s.y,
          u = i.width / s.x,
          f = i.height / s.y;
        if (o) {
          const e = (0, F.zk)(o),
            t = r && (0, F.vq)(r) ? (0, F.zk)(r) : r;
          let n = e,
            i = (0, F._m)(n);
          for (; i && r && t !== n;) {
            const e = j(i),
              t = i.getBoundingClientRect(),
              r = (0, F.L9)(i),
              o = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              s = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
            c *= e.x, h *= e.y, u *= e.x, f *= e.y, c += o, h += s, n = (0, F.zk)(i), i = (0, F._m)(n)
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
        const n = (0, F.CP)(e).scrollLeft;
        return t ? t.left + n : M((0, F.ep)(e)).left + n
      }

      function B(e, t) {
        const n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - I(e, n),
          y: n.top + t.scrollTop
        }
      }

      function W(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = (0, F.zk)(e),
            r = (0, F.ep)(e),
            i = n.visualViewport;
          let o = r.clientWidth,
            s = r.clientHeight,
            a = 0,
            l = 0;
          if (i) {
            o = i.width, s = i.height;
            const e = (0, F.Tc)();
            (!e || e && "fixed" === t) && (a = i.offsetLeft, l = i.offsetTop)
          }
          const c = I(r);
          if (c <= 0) {
            const e = r.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              i = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              s = Math.abs(r.clientWidth - t.clientWidth - i);
            s <= 25 && (o -= s)
          } else c <= 25 && (o += c);
          return {
            width: o,
            height: s,
            x: a,
            y: l
          }
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = (0, F.ep)(e),
            n = (0, F.CP)(e),
            r = e.ownerDocument.body,
            i = o(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            s = o(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let a = -n.scrollLeft + I(e);
          const l = -n.scrollTop;
          return "rtl" === (0, F.L9)(r).direction && (a += o(t.clientWidth, r.clientWidth) - i), {
            width: i,
            height: s,
            x: a,
            y: l
          }
        }((0, F.ep)(e));
        else if ((0, F.vq)(t)) r = function(e, t) {
          const n = M(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            i = n.left + e.clientLeft,
            o = (0, F.sb)(e) ? j(e) : l(1);
          return {
            width: e.clientWidth * o.x,
            height: e.clientHeight * o.y,
            x: i * o.x,
            y: r * o.y
          }
        }(t, n);
        else {
          const n = P(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return A(r)
      }

      function N(e, t) {
        const n = (0, F.$4)(e);
        return !(n === t || !(0, F.vq)(n) || (0, F.eu)(n)) && ("fixed" === (0, F.L9)(n).position || N(n, t))
      }

      function q(e, t, n) {
        const r = (0, F.sb)(t),
          i = (0, F.ep)(t),
          o = "fixed" === n,
          s = M(e, !0, o, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const c = l(0);

        function h() {
          c.x = I(i)
        }
        if (r || !r && !o)
          if (("body" !== (0, F.mq)(t) || (0, F.ZU)(i)) && (a = (0, F.CP)(t)), r) {
            const e = M(t, !0, o, t);
            c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
          } else i && h();
        o && !r && i && h();
        const u = !i || r || o ? l(0) : B(i, a);
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
        let n = e.offsetParent;
        return (0, F.ep)(e) === n && (n = n.ownerDocument.body), n
      }

      function H(e, t) {
        const n = (0, F.zk)(e);
        if ((0, F.Tf)(e)) return n;
        if (!(0, F.sb)(e)) {
          let t = (0, F.$4)(e);
          for (; t && !(0, F.eu)(t);) {
            if ((0, F.vq)(t) && !U(t)) return t;
            t = (0, F.$4)(t)
          }
          return n
        }
        let r = $(e, t);
        for (; r && (0, F.Lv)(r) && U(r);) r = $(r, t);
        return r && (0, F.eu)(r) && U(r) && !(0, F.sQ)(r) ? n : r || (0, F.gJ)(e) || n
      }
      const G = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: i
          } = e;
          const o = "fixed" === i,
            s = (0, F.ep)(r),
            a = !!t && (0, F.Tf)(t.floating);
          if (r === s || a && o) return n;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            h = l(1);
          const u = l(0),
            f = (0, F.sb)(r);
          if ((f || !f && !o) && (("body" !== (0, F.mq)(r) || (0, F.ZU)(s)) && (c = (0, F.CP)(r)), f)) {
            const e = M(r);
            h = j(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
          }
          const d = !s || f || o ? l(0) : B(s, c);
          return {
            width: n.width * h.x,
            height: n.height * h.y,
            x: n.x * h.x - c.scrollLeft * h.x + u.x + d.x,
            y: n.y * h.y - c.scrollTop * h.y + u.y + d.y
          }
        },
        getDocumentElement: F.ep,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: s
          } = e;
          const a = [..."clippingAncestors" === n ? (0, F.Tf)(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = (0, F.v9)(e, [], !1).filter(e => (0, F.vq)(e) && "body" !== (0, F.mq)(e)),
                i = null;
              const o = "fixed" === (0, F.L9)(e).position;
              let s = o ? (0, F.$4)(e) : e;
              for (;
                (0, F.vq)(s) && !(0, F.eu)(s);) {
                const t = (0, F.L9)(s),
                  n = (0, F.sQ)(s);
                n || "fixed" !== t.position || (i = null), (o ? !n && !i : !n && "static" === t.position && i && ("absolute" === i.position || "fixed" === i.position) || (0, F.ZU)(s) && !n && N(e, s)) ? r = r.filter(e => e !== s) : i = t, s = (0, F.$4)(s)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            l = W(t, a[0], s);
          let c = l.top,
            h = l.right,
            u = l.bottom,
            f = l.left;
          for (let e = 1; e < a.length; e++) {
            const n = W(t, a[e], s);
            c = o(n.top, c), h = i(n.right, h), u = i(n.bottom, u), f = o(n.left, f)
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
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: q(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: r.width,
              height: r.height
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: n
          } = R(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: j,
        isElement: F.vq,
        isRTL: function(e) {
          return "rtl" === (0, F.L9)(e).direction
        }
      };

      function V(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }

      function Z(e, t, n, r) {
        void 0 === r && (r = {});
        const {
          ancestorScroll: s = !0,
          ancestorResize: l = !0,
          elementResize: c = "function" == typeof ResizeObserver,
          layoutShift: h = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = r, f = _(e), d = s || l ? [...f ? (0, F.v9)(f) : [], ...t ? (0, F.v9)(t) : []] : [];
        d.forEach(e => {
          s && e.addEventListener("scroll", n, {
            passive: !0
          }), l && e.addEventListener("resize", n)
        });
        const p = f && h ? function(e, t) {
          let n, r = null;
          const s = (0, F.ep)(e);

          function l() {
            var e;
            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
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
              const r = t[0].intersectionRatio;
              if (r !== u) {
                if (!y) return c();
                r ? c(!1, r) : n = setTimeout(() => {
                  c(!1, 1e-7)
                }, 1e3)
              }
              1 !== r || V(f, e.getBoundingClientRect()) || c(), y = !1
            }
            try {
              r = new IntersectionObserver(w, {
                ...v,
                root: s.ownerDocument
              })
            } catch (e) {
              r = new IntersectionObserver(w, v)
            }
            r.observe(e)
          }(!0), l
        }(f, n) : null;
        let m, g = -1,
          v = null;
        c && (v = new ResizeObserver(e => {
          let [r] = e;
          r && r.target === f && v && t && (v.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
            var e;
            null == (e = v) || e.observe(t)
          })), n()
        }), f && !u && v.observe(f), t && v.observe(t));
        let y = u ? M(e) : null;
        return u && function t() {
          const r = M(e);
          y && !V(y, r) && n(), y = r, m = requestAnimationFrame(t)
        }(), n(), () => {
          var e;
          d.forEach(e => {
            s && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n)
          }), null == p || p(), null == (e = v) || e.disconnect(), v = null, u && cancelAnimationFrame(m)
        }
      }
      const Q = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              var n, r;
              const {
                x: i,
                y: o,
                placement: s,
                middlewareData: a
              } = t, l = await async function(e, t) {
                const {
                  placement: n,
                  platform: r,
                  elements: i
                } = e, o = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)), s = f(n), a = d(n), l = "y" === g(n), c = z.has(s) ? -1 : 1, h = o && l ? -1 : 1, p = u(t, e);
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
              return s === (null == (n = a.offset) ? void 0 : n.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
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
                x: n,
                y: r,
                placement: i,
                platform: o
              } = t, {
                mainAxis: s = !0,
                crossAxis: a = !1,
                limiter: l = {
                  fn: e => {
                    let {
                      x: t,
                      y: n
                    } = e;
                    return {
                      x: t,
                      y: n
                    }
                  }
                },
                ...c
              } = u(e, t), d = {
                x: n,
                y: r
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
                  x: k.x - n,
                  y: k.y - r,
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
              var n, r;
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
                fallbackPlacements: S,
                fallbackStrategy: A = "bestFit",
                fallbackAxisSideDirection: O = "none",
                flipAlignment: L = !0,
                ...E
              } = u(e, t);
              if (null != (n = o.arrow) && n.alignmentOffset) return {};
              const T = f(i),
                z = g(a),
                F = f(a) === a,
                R = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                _ = S || (F || !L ? [C(a)] : function(e) {
                  const t = C(e);
                  return [y(e), t, y(t)]
                }(a)),
                j = "none" !== O;
              !S && j && _.push(... function(e, t, n, r) {
                const i = d(e);
                let o = function(e, t, n) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? b : w : t ? w : b;
                    case "left":
                    case "right":
                      return t ? k : x;
                    default:
                      return []
                  }
                }(f(e), "start" === n, r);
                return i && (o = o.map(e => e + "-" + i), t && (o = o.concat(o.map(y)))), o
              }(a, L, O, R));
              const D = [a, ..._],
                P = await l.detectOverflow(t, E),
                M = [];
              let I = (null == (r = o.flip) ? void 0 : r.overflows) || [];
              if (h && M.push(P[T]), p) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = d(e),
                    i = v(e),
                    o = m(i);
                  let s = "x" === i ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[o] > t.floating[o] && (s = C(s)), [s, C(s)]
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
                let n = null == (W = I.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : W.placement;
                if (!n) switch (A) {
                  case "bestFit": {
                    var N;
                    const e = null == (N = I.filter(e => {
                      if (j) {
                        const t = g(e.placement);
                        return t === z || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : N[0];
                    e && (n = e);
                    break
                  }
                  case "initialPlacement":
                    n = a
                }
                if (i !== n) return {
                  reset: {
                    placement: n
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
              var n, r;
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
              let x, C;
              "top" === v || "bottom" === v ? (x = v, C = y === (await (null == l.isRTL ? void 0 : l.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (C = v, x = "end" === y ? "top" : "bottom");
              const S = k - m.top - m.bottom,
                A = b - m.left - m.right,
                O = i(k - m[x], S),
                L = i(b - m[C], A),
                E = !t.middlewareData.shift;
              let T = O,
                z = L;
              if (null != (n = t.middlewareData.shift) && n.enabled.x && (z = A), null != (r = t.middlewareData.shift) && r.enabled.y && (T = S), E && !y) {
                const e = o(m.left, 0),
                  t = o(m.right, 0),
                  n = o(m.top, 0),
                  r = o(m.bottom, 0);
                w ? z = b - 2 * (0 !== e || 0 !== t ? e + t : o(m.left, m.right)) : T = k - 2 * (0 !== n || 0 !== r ? n + r : o(m.top, m.bottom))
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
                rects: n,
                platform: r
              } = t, {
                strategy: i = "referenceHidden",
                ...o
              } = u(e, t);
              switch (i) {
                case "referenceHidden": {
                  const e = E(await r.detectOverflow(t, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: T(e)
                    }
                  }
                }
                case "escaped": {
                  const e = E(await r.detectOverflow(t, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
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
              x: n,
              y: r,
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
            const g = S(p),
              y = {
                x: n,
                y: r
              },
              w = v(o),
              b = m(w),
              k = await a.getDimensions(f),
              x = "y" === w,
              C = x ? "top" : "left",
              A = x ? "bottom" : "right",
              O = x ? "clientHeight" : "clientWidth",
              L = s.reference[b] + s.reference[w] - y[w] - s.floating[b],
              E = y[w] - s.reference[w],
              T = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(f));
            let z = T ? T[O] : 0;
            z && await (null == a.isElement ? void 0 : a.isElement(T)) || (z = l.floating[O] || s.floating[b]);
            const F = L / 2 - E / 2,
              R = z / 2 - k[b] / 2 - 1,
              _ = i(g[C], R),
              j = i(g[A], R),
              D = _,
              P = z - k[b] - j,
              M = z / 2 - k[b] / 2 + F,
              I = h(D, M, P),
              B = !c.arrow && null != d(o) && M !== I && s.reference[b] / 2 - (M < D ? _ : j) - k[b] / 2 < 0,
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
                x: n,
                y: r,
                placement: i,
                rects: o,
                middlewareData: s
              } = t, {
                offset: a = 0,
                mainAxis: l = !0,
                crossAxis: c = !0
              } = u(e, t), h = {
                x: n,
                y: r
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
                  n = o.reference[m] + o.reference[e] - b.mainAxis;
                v < t ? v = t : v > n && (v = n)
              }
              if (c) {
                var k, x;
                const e = "y" === m ? "width" : "height",
                  t = z.has(f(i)),
                  n = o.reference[d] - o.floating[e] + (t && (null == (k = s.offset) ? void 0 : k[d]) || 0) + (t ? 0 : b.crossAxis),
                  r = o.reference[d] + o.reference[e] + (t ? 0 : (null == (x = s.offset) ? void 0 : x[d]) || 0) - (t ? b.crossAxis : 0);
                y < n ? y = n : y > r && (y = r)
              }
              return {
                [m]: v,
                [d]: y
              }
            }
          }
        },
        ne = (e, t, n) => {
          const r = new Map,
            i = {
              platform: G,
              ...n
            },
            o = {
              ...i.platform,
              _c: r
            };
          return (async (e, t, n) => {
            const {
              placement: r = "bottom",
              strategy: i = "absolute",
              middleware: o = [],
              platform: s
            } = n, a = s.detectOverflow ? s : {
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
              } = O(c, r, l),
              f = r,
              d = 0;
            const p = {};
            for (let n = 0; n < o.length; n++) {
              const m = o[n];
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
                initialPlacement: r,
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
              } = O(c, f, l))), n = -1)
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
    24843(e, t, n) {
      "use strict";

      function r() {
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
        return !!r() && (e instanceof Node || e instanceof o(e).Node)
      }

      function l(e) {
        return !!r() && (e instanceof Element || e instanceof o(e).Element)
      }

      function c(e) {
        return !!r() && (e instanceof HTMLElement || e instanceof o(e).HTMLElement)
      }

      function h(e) {
        return !(!r() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof o(e).ShadowRoot)
      }

      function u(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: i
        } = x(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== i && "contents" !== i
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
      n.d(t, {
        $4: () => S,
        CP: () => C,
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
        let t = S(e);
        for (; c(t) && !k(t);) {
          if (y(t)) return t;
          if (d(t)) return null;
          t = S(t)
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

      function C(e) {
        return l(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function S(e) {
        if ("html" === i(e)) return e;
        const t = e.assignedSlot || e.parentNode || h(e) && e.host || s(e);
        return h(t) ? t.host : t
      }

      function A(e) {
        const t = S(e);
        return k(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : c(t) && u(t) ? t : A(t)
      }

      function O(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const i = A(e),
          s = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = o(i);
        if (s) {
          const e = L(a);
          return t.concat(a, a.visualViewport || [], u(i) ? i : [], e && n ? O(e) : [])
        }
        return t.concat(i, O(i, [], n))
      }

      function L(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }
    }
  }
]);