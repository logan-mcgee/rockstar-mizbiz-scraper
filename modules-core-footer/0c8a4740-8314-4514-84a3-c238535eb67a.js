! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0c8a4740-8314-4514-84a3-c238535eb67a", e._sentryDebugIdIdentifier = "sentry-dbid-0c8a4740-8314-4514-84a3-c238535eb67a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [40], {
    21181: (e, t, n) => {
      var r, o;
      n.d(t, {
          q: () => p
        }),
        function(e) {
          e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
        }(r || (r = {})),
        function(e) {
          e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
        }(o || (o = {}));
      const a = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        l = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        i = new Map([
          [126, o.Element],
          [94, o.Start],
          [36, o.End],
          [42, o.Any],
          [33, o.Not],
          [124, o.Hyphen]
        ]),
        f = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        u = new Set(["contains", "icontains"]);

      function s(e, t, n) {
        const r = parseInt(t, 16) - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      }

      function c(e) {
        return e.replace(l, s)
      }

      function h(e) {
        return 39 === e || 34 === e
      }

      function d(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function p(e) {
        const t = [],
          n = m(t, `${e}`, 0);
        if (n < e.length) throw new Error(`Unmatched selector: ${e.slice(n)}`);
        return t
      }

      function m(e, t, n) {
        let l = [];

        function s(e) {
          const r = t.slice(n + e).match(a);
          if (!r) throw new Error(`Expected name, found ${t.slice(n)}`);
          const [o] = r;
          return n += e + o.length, c(o)
        }

        function p(e) {
          for (n += e; n < t.length && d(t.charCodeAt(n));) n++
        }

        function v() {
          const e = n += 1;
          let r = 1;
          for (; r > 0 && n < t.length; n++) 40 !== t.charCodeAt(n) || g(n) ? 41 !== t.charCodeAt(n) || g(n) || r-- : r++;
          if (r) throw new Error("Parenthesis not matched");
          return c(t.slice(e, n - 1))
        }

        function g(e) {
          let n = 0;
          for (; 92 === t.charCodeAt(--e);) n++;
          return 1 == (1 & n)
        }

        function y() {
          if (l.length > 0 && function(e) {
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
            }(l[l.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function w(e) {
          l.length > 0 && l[l.length - 1].type === r.Descendant ? l[l.length - 1].type = e : (y(), l.push({
            type: e
          }))
        }

        function A(e, t) {
          l.push({
            type: r.Attribute,
            name: e,
            action: t,
            value: s(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function C() {
          if (l.length && l[l.length - 1].type === r.Descendant && l.pop(), 0 === l.length) throw new Error("Empty sub-selector");
          e.push(l)
        }
        if (p(0), t.length === n) return n;
        e: for (; n < t.length;) {
          const e = t.charCodeAt(n);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== l.length && l[0].type === r.Descendant || (y(), l.push({
                type: r.Descendant
              })), p(1);
              break;
            case 62:
              w(r.Child), p(1);
              break;
            case 60:
              w(r.Parent), p(1);
              break;
            case 126:
              w(r.Sibling), p(1);
              break;
            case 43:
              w(r.Adjacent), p(1);
              break;
            case 46:
              A("class", o.Element);
              break;
            case 35:
              A("id", o.Equals);
              break;
            case 91: {
              let e;
              p(1);
              let a = null;
              124 === t.charCodeAt(n) ? e = s(1) : t.startsWith("*|", n) ? (a = "*", e = s(2)) : (e = s(0), 124 === t.charCodeAt(n) && 61 !== t.charCodeAt(n + 1) && (a = e, e = s(1))), p(0);
              let f = o.Exists;
              const u = i.get(t.charCodeAt(n));
              if (u) {
                if (f = u, 61 !== t.charCodeAt(n + 1)) throw new Error("Expected `=`");
                p(2)
              } else 61 === t.charCodeAt(n) && (f = o.Equals, p(1));
              let m = "",
                v = null;
              if ("exists" !== f) {
                if (h(t.charCodeAt(n))) {
                  const e = t.charCodeAt(n);
                  let r = n + 1;
                  for (; r < t.length && (t.charCodeAt(r) !== e || g(r));) r += 1;
                  if (t.charCodeAt(r) !== e) throw new Error("Attribute value didn't end");
                  m = c(t.slice(n + 1, r)), n = r + 1
                } else {
                  const e = n;
                  for (; n < t.length && (!d(t.charCodeAt(n)) && 93 !== t.charCodeAt(n) || g(n));) n += 1;
                  m = c(t.slice(e, n))
                }
                p(0);
                const e = 32 | t.charCodeAt(n);
                115 === e ? (v = !1, p(1)) : 105 === e && (v = !0, p(1))
              }
              if (93 !== t.charCodeAt(n)) throw new Error("Attribute selector didn't terminate");
              n += 1;
              const y = {
                type: r.Attribute,
                name: e,
                action: f,
                value: m,
                namespace: a,
                ignoreCase: v
              };
              l.push(y);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(n + 1)) {
                l.push({
                  type: r.PseudoElement,
                  name: s(2).toLowerCase(),
                  data: 40 === t.charCodeAt(n) ? v() : null
                });
                continue
              }
              const e = s(1).toLowerCase();
              let o = null;
              if (40 === t.charCodeAt(n))
                if (f.has(e)) {
                  if (h(t.charCodeAt(n + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (o = [], n = m(o, t, n + 1), 41 !== t.charCodeAt(n)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  n += 1
                } else {
                  if (o = v(), u.has(e)) {
                    const e = o.charCodeAt(0);
                    e === o.charCodeAt(o.length - 1) && h(e) && (o = o.slice(1, -1))
                  }
                  o = c(o)
                } l.push({
                type: r.Pseudo,
                name: e,
                data: o
              });
              break
            }
            case 44:
              C(), l = [], p(1);
              break;
            default: {
              if (t.startsWith("/*", n)) {
                const e = t.indexOf("*/", n + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                n = e + 2, 0 === l.length && p(0);
                break
              }
              let o, i = null;
              if (42 === e) n += 1, o = "*";
              else if (124 === e) {
                if (o = "", 124 === t.charCodeAt(n + 1)) {
                  w(r.ColumnCombinator), p(2);
                  break
                }
              } else {
                if (!a.test(t.slice(n))) break e;
                o = s(0)
              }
              124 === t.charCodeAt(n) && 124 !== t.charCodeAt(n + 1) && (i = o, 42 === t.charCodeAt(n + 1) ? (o = "*", n += 2) : o = s(1)), l.push("*" === o ? {
                type: r.Universal,
                namespace: i
              } : {
                type: r.Tag,
                name: o,
                namespace: i
              })
            }
          }
        }
        return C(), n
      }
    },
    67094: e => {
      var t = {}.hasOwnProperty,
        n = /[ -,\.\/:-@\[-\^`\{-~]/,
        r = /[ -,\.\/:-@\[\]\^`\{-~]/,
        o = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        a = function e(a, l) {
          "single" != (l = function(e, n) {
            if (!e) return n;
            var r = {};
            for (var o in n) r[o] = t.call(e, o) ? e[o] : n[o];
            return r
          }(l, e.options)).quotes && "double" != l.quotes && (l.quotes = "single");
          for (var i = "double" == l.quotes ? '"' : "'", f = l.isIdentifier, u = a.charAt(0), s = "", c = 0, h = a.length; c < h;) {
            var d = a.charAt(c++),
              p = d.charCodeAt(),
              m = void 0;
            if (p < 32 || p > 126) {
              if (p >= 55296 && p <= 56319 && c < h) {
                var v = a.charCodeAt(c++);
                56320 == (64512 & v) ? p = ((1023 & p) << 10) + (1023 & v) + 65536 : c--
              }
              m = "\\" + p.toString(16).toUpperCase() + " "
            } else m = l.escapeEverything ? n.test(d) ? "\\" + d : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(d) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == d || !f && ('"' == d && i == d || "'" == d && i == d) || f && r.test(d) ? "\\" + d : d;
            s += m
          }
          return f && (/^-[-\d]/.test(s) ? s = "\\-" + s.slice(1) : /\d/.test(u) && (s = "\\3" + u + " " + s.slice(1))), s = s.replace(o, (function(e, t, n) {
            return t && t.length % 2 ? e : (t || "") + n
          })), !f && l.wrap ? i + s + i : s
        };
      a.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, a.version = "3.0.0", e.exports = a
    },
    62440: (e, t, n) => {
      n.d(t, {
        i0: () => C
      });
      var r = function() {
        return r = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, r.apply(this, arguments)
      };

      function o(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function a(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, a = n.call(e),
          l = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = a.next()).done;) l.push(r.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return l
      }
      var l = /(\u000D|\u000C|\u000D\u000A)/g,
        i = /[\u0000\uD800-\uDFFF]/g,
        f = /(\/\*)[\s\S]*?(\*\/)/g,
        u = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var n = e.charCodeAt(t), r = [], o = t + 1; o < e.length; o += 1) {
            var l = e.charCodeAt(o);
            if (l === n) return [o, String.fromCharCode.apply(null, r)];
            if (92 === l) {
              var i = c(e, o);
              if (null === i) return null;
              var f = a(i, 2),
                u = f[0],
                s = f[1];
              r.push(s), o = u
            } else {
              if (10 === l) return null;
              r.push(l)
            }
          }
          return null
        },
        s = function(e, t) {
          if (e.length <= t) return !1;
          var n, r = e.charCodeAt(t);
          return 45 === r ? !(e.length <= t + 1) && (45 === (n = e.charCodeAt(t + 1)) || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 1) && 10 !== (n = e.charCodeAt(t + 1))
        },
        c = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var n = e.charCodeAt(t + 1);
          if (10 === n) return null;
          if (n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102) {
            for (var r = [n], o = Math.min(t + 7, e.length), a = t + 2; a < o; a += 1) {
              var l = e.charCodeAt(a);
              if (!(l >= 48 && l <= 57 || l >= 65 && l <= 70 || l >= 97 && l <= 102)) break;
              r.push(l)
            }
            if (a < e.length) {
              var i = e.charCodeAt(a);
              9 !== i && 32 !== i && 10 !== i || (a += 1)
            }
            return [a - 1, parseInt(String.fromCharCode.apply(null, r), 16)]
          }
          return [t + 1, n]
        },
        h = function(e, t) {
          var n = d(e, t);
          if (null === n) return null;
          var r = a(n, 3),
            o = r[0],
            l = r[1],
            i = r[2],
            f = m(e, o + 1);
          if (null !== f) {
            var u = a(f, 2);
            return [u[0],
              ["<dimension-token>", l, u[1]]
            ]
          }
          return o + 1 < e.length && 37 === e.charCodeAt(o + 1) ? [o + 1, ["<percentage-token>", l]] : [o, ["<number-token>", l, i]]
        },
        d = function(e, t) {
          if (e.length <= t) return null;
          var n = "integer",
            r = [],
            o = e.charCodeAt(t);
          for (43 !== o && 45 !== o || (t += 1, 45 === o && r.push(45)); t < e.length && ((u = e.charCodeAt(t)) >= 48 && u <= 57);) r.push(u), t += 1;
          if (t + 1 < e.length) {
            var a = e.charCodeAt(t),
              l = e.charCodeAt(t + 1);
            if (46 === a && l >= 48 && l <= 57)
              for (r.push(a, l), n = "number", t += 2; t < e.length && ((u = e.charCodeAt(t)) >= 48 && u <= 57);) r.push(u), t += 1
          }
          if (t + 1 < e.length) {
            a = e.charCodeAt(t), l = e.charCodeAt(t + 1);
            var i = e.charCodeAt(t + 2);
            if (69 === a || 101 === a) {
              var f = l >= 48 && l <= 57;
              if (f || (43 === l || 45 === l) && i >= 48 && i <= 57)
                for (n = "number", f ? (r.push(69, l), t += 2) : 45 === l ? (r.push(69, 45, i), t += 3) : (r.push(69, i), t += 3); t < e.length;) {
                  var u;
                  if (!((u = e.charCodeAt(t)) >= 48 && u <= 57)) break;
                  r.push(u), t += 1
                }
            }
          }
          var s = String.fromCharCode.apply(null, r),
            c = "number" === n ? parseFloat(s) : parseInt(s);
          return -0 === c && (c = 0), Number.isNaN(c) ? null : [t - 1, c, n]
        },
        p = function(e, t) {
          if (e.length <= t) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var o = c(e, t);
              if (null === o) break;
              var l = a(o, 2),
                i = l[0],
                f = l[1];
              n.push(f), t = i
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, n)]
        },
        m = function(e, t) {
          if (e.length <= t || !s(e, t)) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var o = c(e, t);
              if (null === o) break;
              var l = a(o, 2),
                i = l[0],
                f = l[1];
              n.push(f), t = i
            } return [t - 1, String.fromCharCode.apply(null, n)]
        },
        v = function(e, t) {
          for (var n = e.charCodeAt(t); 9 === n || 32 === n || 10 === n;) n = e.charCodeAt(++t);
          for (var r = [], o = !1; t < e.length;) {
            if (41 === n) return [t, String.fromCharCode.apply(null, r)];
            if (34 === n || 39 === n || 40 === n) return null;
            if (9 === n || 32 === n || 10 === n) o || 0 === r.length || (o = !0);
            else if (92 === n) {
              var l = c(e, t);
              if (null === l || o) return null;
              var i = a(l, 2),
                f = i[0],
                u = i[1];
              r.push(u), t = f
            } else {
              if (o) return null;
              r.push(n)
            }
            n = e.charCodeAt(++t)
          }
          return null
        },
        g = function(e, t) {
          var n = m(e, t);
          if (null === n) return null;
          var r = a(n, 2),
            o = r[0],
            l = r[1];
          if ("url" === l.toLowerCase()) {
            if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) {
              for (var i = 2; o + i < e.length; i += 1) {
                var f = e.charCodeAt(o + i);
                if (34 === f || 39 === f) return [o + 1, l.toLowerCase(), "<function-token>"];
                if (9 !== f && 32 !== f && 10 !== f) {
                  var u = v(e, o + i);
                  if (null === u) return null;
                  var s = a(u, 2);
                  return [s[0], s[1], "<url-token>"]
                }
              }
              return [o + 1, l.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) return [o + 1, l.toLowerCase(), "<function-token>"];
          return [o, l.toLowerCase(), "<ident-token>"]
        },
        y = function(e) {
          if (null === e.mediaCondition) return e;
          var t = w(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        w = function e(t) {
          for (var n = t.children.length - 1; n >= 0; n--) {
            var r = t.children[n];
            if (!("context" in r)) {
              var o = e(r);
              if (null === o.operator && 1 === o.children.length) t.children[n] = o.children[0];
              else if (o.operator === t.operator && ("and" === o.operator || "or" === o.operator)) {
                for (var a = [n, 1], l = 0; l < o.children.length; l++) a.push(o.children[l]);
                t.children.splice.apply(t.children, a)
              }
            }
          }
          return t
        },
        A = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        C = function(e) {
          return function(e) {
            for (var t = e.length - 1; t >= 0; t--) e[t] = y(e[t]);
            return e
          }(k(e))
        },
        k = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(l, "\n").replace(i, "�")).replace(f, "");
            for (var n = []; t < e.length; t += 1) {
              var r = e.charCodeAt(t);
              if (9 === r || 32 === r || 10 === r) {
                for (var o = e.charCodeAt(++t); 9 === o || 32 === o || 10 === o;) o = e.charCodeAt(++t);
                t -= 1, n.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === r) {
                if (null === (L = u(e, t))) return null;
                var d = a(L, 2),
                  v = d[0],
                  y = d[1];
                n.push({
                  type: "<string-token>",
                  value: y
                }), t = v
              } else if (35 === r) {
                if (t + 1 < e.length && (95 === (O = e.charCodeAt(t + 1)) || O >= 65 && O <= 90 || O >= 97 && O <= 122 || O >= 128 || O >= 48 && O <= 57 || 92 === O && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var w = s(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (L = p(e, t + 1))) {
                    var A = a(L, 2);
                    v = A[0], y = A[1], n.push({
                      type: "<hash-token>",
                      value: y.toLowerCase(),
                      flag: w
                    }), t = v;
                    continue
                  }
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (39 === r) {
                if (null === (L = u(e, t))) return null;
                var C = a(L, 2);
                v = C[0], y = C[1], n.push({
                  type: "<string-token>",
                  value: y
                }), t = v
              } else if (40 === r) n.push({
                type: "<(-token>"
              });
              else if (41 === r) n.push({
                type: "<)-token>"
              });
              else if (43 === r) {
                var k = h(e, t);
                if (null === k) n.push({
                  type: "<delim-token>",
                  value: r
                });
                else {
                  var b = a(k, 2);
                  v = b[0], "<dimension-token>" === (P = b[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: P[1],
                    unit: P[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === P[0] ? n.push({
                    type: P[0],
                    value: P[1],
                    flag: P[2]
                  }) : n.push({
                    type: P[0],
                    value: P[1],
                    flag: "number"
                  }), t = v
                }
              } else if (44 === r) n.push({
                type: "<comma-token>"
              });
              else if (45 === r) {
                if (null !== (D = h(e, t))) {
                  var E = a(D, 2);
                  v = E[0], "<dimension-token>" === (P = E[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: P[1],
                    unit: P[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === P[0] ? n.push({
                    type: P[0],
                    value: P[1],
                    flag: P[2]
                  }) : n.push({
                    type: P[0],
                    value: P[1],
                    flag: "number"
                  }), t = v;
                  continue
                }
                if (t + 2 < e.length) {
                  var O = e.charCodeAt(t + 1),
                    I = e.charCodeAt(t + 2);
                  if (45 === O && 62 === I) {
                    n.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (L = g(e, t))) {
                  var B = a(L, 3),
                    x = (v = B[0], y = B[1], B[2]);
                  n.push({
                    type: x,
                    value: y
                  }), t = v;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (46 === r) {
                var D;
                if (null !== (D = h(e, t))) {
                  var T = a(D, 2);
                  v = T[0], "<dimension-token>" === (P = T[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: P[1],
                    unit: P[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === P[0] ? n.push({
                    type: P[0],
                    value: P[1],
                    flag: P[2]
                  }) : n.push({
                    type: P[0],
                    value: P[1],
                    flag: "number"
                  }), t = v;
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
                  O = e.charCodeAt(t + 1), I = e.charCodeAt(t + 2);
                  var S = e.charCodeAt(t + 3);
                  if (33 === O && 45 === I && 45 === S) {
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
                if (null !== (L = m(e, t + 1))) {
                  var _ = a(L, 2);
                  v = _[0], y = _[1], n.push({
                    type: "<at-keyword-token>",
                    value: y.toLowerCase()
                  }), t = v;
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
                if (null === (L = c(e, t))) return null;
                var j = a(L, 2);
                v = j[0], y = j[1], e = e.slice(0, t) + y + e.slice(v + 1), t -= 1
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
                var P, N = a(L = h(e, t), 2);
                v = N[0], "<dimension-token>" === (P = N[1])[0] ? n.push({
                  type: "<dimension-token>",
                  value: P[1],
                  unit: P[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === P[0] ? n.push({
                  type: P[0],
                  value: P[1],
                  flag: P[2]
                }) : n.push({
                  type: P[0],
                  value: P[1],
                  flag: "number"
                }), t = v
              } else if (95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128) {
                var L;
                if (null === (L = g(e, t))) return null;
                var q = a(L, 3);
                v = q[0], y = q[1], x = q[2], n.push({
                  type: x,
                  value: y
                }), t = v
              } else n.push({
                type: "<delim-token>",
                value: r
              })
            }
            return n.push({
              type: "<EOF-token>"
            }), n
          }(e.trim());
          if (null === t) throw A("Failed tokenizing");
          var n = 0,
            r = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw A("Expected whitespace after media");
            n = 2;
            for (var o = 2; o < t.length - 1; o++) {
              var d = t[o];
              if ("<{-token>" === d.type) {
                r = o;
                break
              }
              if ("<semicolon-token>" === d.type) throw A("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(n, r), E(t)
        },
        b = function(e) {
          for (var t = [], n = !1, o = 0; o < e.length; o++) "<whitespace-token>" === e[o].type ? (n = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(r(r({}, e[o]), {
            wsBefore: n,
            wsAfter: !1
          })), n = !1);
          return t
        },
        E = function(e) {
          for (var t, n, r = [
              []
            ], o = 0; o < e.length; o++) {
            var a = e[o];
            "<comma-token>" === a.type ? r.push([]) : r[r.length - 1].push(a)
          }
          var l = r.map(b);
          if (1 === l.length && 0 === l[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var i = l.map((function(e) {
              return 0 === e.length ? null : O(e)
            })),
            f = [];
          try {
            for (var u = function(e) {
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
              }(i), s = u.next(); !s.done; s = u.next()) {
              var c = s.value;
              null !== c && f.push(c)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              s && !s.done && (n = u.return) && n.call(u)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === f.length) throw A("No valid media queries");
          return f
        },
        O = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: I(e, !0)
            }
          } catch (e) {
            throw A("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw A("Expected media condition or media prefix");
            var n = null,
              r = void 0,
              o = t.value;
            "only" !== o && "not" !== o || (n = o);
            var a = null === n ? 0 : 1;
            if (e.length <= a) throw A("Expected extra token in media query");
            var l = e[a];
            if ("<ident-token>" === l.type) {
              var i = l.value;
              if ("all" === i) r = "all";
              else if ("print" === i || "screen" === i) r = i;
              else {
                if ("tty" !== i && "tv" !== i && "projection" !== i && "handheld" !== i && "braille" !== i && "embossed" !== i && "aural" !== i && "speech" !== i) throw A("Unknown ident '".concat(i, "' in media query"));
                n = "not" === n ? null : "not", r = "all"
              }
            } else {
              if ("not" !== n || "<(-token>" !== l.type) throw A("Invalid media query");
              var f = [{
                type: "<(-token>",
                wsBefore: !1,
                wsAfter: !1
              }];
              f.push.apply(f, e), f.push({
                type: "<)-token>",
                wsBefore: !1,
                wsAfter: !1
              });
              try {
                return {
                  mediaPrefix: null,
                  mediaType: "all",
                  mediaCondition: I(f, !0)
                }
              } catch (e) {
                throw A("Expected media condition after '('", e)
              }
            }
            if (a + 1 === e.length) return {
              mediaPrefix: n,
              mediaType: r,
              mediaCondition: null
            };
            if (!(a + 4 < e.length)) throw A("Expected media condition after media prefix");
            var u = e[a + 1];
            if ("<ident-token>" !== u.type || "and" !== u.value) throw A("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: n,
                mediaType: r,
                mediaCondition: I(e.slice(a + 2), !1)
              }
            } catch (e) {
              throw A("Expected media condition after 'and'", e)
            }
          }
        },
        I = function e(t, n, r) {
          if (void 0 === r && (r = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var o, a = t.length - 1, l = 0, i = 0, f = 0; f < t.length; f++) {
            var u = t[f];
            if ("<(-token>" === u.type ? (i += 1, l = Math.max(l, i)) : "<)-token>" === u.type && (i -= 1), 0 === i) {
              a = f;
              break
            }
          }
          if (0 !== i) throw new Error("Mismatched parens\nInvalid media condition");
          var s = t.slice(0, a + 1);
          if (o = 1 === l ? B(s) : "<ident-token>" === s[1].type && "not" === s[1].value ? e(s.slice(2, -1), !0, "not") : e(s.slice(1, -1), !0), a === t.length - 1) return {
            operator: r,
            children: [o]
          };
          var c = t[a + 1];
          if ("<ident-token>" !== c.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== r && r !== c.value) throw new Error("'".concat(c.value, "' and '").concat(r, "' must not be at same level\nInvalid media condition"));
          if ("or" === c.value && !n) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== c.value && "or" !== c.value) throw new Error("Invalid operator: '".concat(c.value, "'\nInvalid media condition"));
          var h = e(t.slice(a + 2), n, c.value);
          return {
            operator: c.value,
            children: [o].concat(h.children)
          }
        },
        B = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], n = 1; n < e.length; n++) {
            if (n < e.length - 2) {
              var r = e[n],
                a = e[n + 1],
                l = e[n + 2];
              if ("<number-token>" === r.type && r.value > 0 && "<delim-token>" === a.type && 47 === a.value && "<number-token>" === l.type && l.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: r.value,
                  denominator: l.value,
                  wsBefore: r.wsBefore,
                  wsAfter: l.wsAfter
                }), n += 2;
                continue
              }
            }
            t.push(e[n])
          }
          var i = t[1];
          if ("<ident-token>" === i.type && 3 === t.length) return {
            context: "boolean",
            feature: i.value
          };
          if (5 === t.length && "<ident-token>" === t[1].type && "<colon-token>" === t[2].type) {
            var f = t[3];
            if ("<number-token>" === f.type || "<dimension-token>" === f.type || "<ratio-token>" === f.type || "<ident-token>" === f.type) {
              var u = t[1].value,
                s = null,
                c = u.slice(0, 4);
              return "min-" === c ? (s = "min", u = u.slice(4)) : "max-" === c && (s = "max", u = u.slice(4)), f.wsBefore, f.wsAfter, {
                context: "value",
                prefix: s,
                feature: u,
                value: o(f, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var h = x(t);
            return {
              context: "range",
              feature: h.featureName,
              range: h
            }
          } catch (e) {
            throw A("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        x = function(e) {
          var t, n, r, a;
          if (e.length < 5 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid range");
          var l = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            i = "<number-token>" === e[1].type || "<dimension-token>" === e[1].type || "<ratio-token>" === e[1].type || "<ident-token>" === e[1].type && "infinite" === e[1].value;
          if ("<delim-token>" === e[2].type) {
            if (60 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? l[i ? "leftOp" : "rightOp"] = "<" : l[i ? "leftOp" : "rightOp"] = "<=";
            else if (62 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? l[i ? "leftOp" : "rightOp"] = ">" : l[i ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== e[2].value) throw new Error("Invalid range");
              l[i ? "leftOp" : "rightOp"] = "="
            }
            if (i) l.leftToken = e[1];
            else {
              if ("<ident-token>" !== e[1].type) throw new Error("Invalid range");
              l.featureName = e[1].value
            }
            var f = 2 + (null !== (n = null === (t = l[i ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0),
              u = e[f];
            if (i) {
              if ("<ident-token>" !== u.type) throw new Error("Invalid range");
              if (l.featureName = u.value, e.length >= 7) {
                var s = e[f + 1],
                  c = e[f + 2];
                if ("<delim-token>" !== s.type) throw new Error("Invalid range");
                var h = s.value;
                if (60 === h) "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? l.rightOp = "<" : l.rightOp = "<=";
                else {
                  if (62 !== h) throw new Error("Invalid range");
                  "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? l.rightOp = ">" : l.rightOp = ">="
                }
                var d = e[f + 1 + (null !== (a = null === (r = l.rightOp) || void 0 === r ? void 0 : r.length) && void 0 !== a ? a : 0)];
                l.rightToken = d
              } else if (f + 2 !== e.length) throw new Error("Invalid range")
            } else l.rightToken = u;
            var p = null,
              m = l.leftToken,
              v = l.leftOp,
              g = l.featureName,
              y = l.rightOp,
              w = l.rightToken,
              A = null;
            if (null !== m)
              if ("<ident-token>" === m.type) {
                var C = m.type;
                "infinite" === (b = m.value) && (A = {
                  type: C,
                  value: b
                })
              } else "<number-token>" !== m.type && "<dimension-token>" !== m.type && "<ratio-token>" !== m.type || (m.wsBefore, m.wsAfter, A = o(m, ["wsBefore", "wsAfter"]));
            var k = null;
            if (null !== w)
              if ("<ident-token>" === w.type) {
                var b;
                C = w.type, "infinite" === (b = w.value) && (k = {
                  type: C,
                  value: b
                })
              } else "<number-token>" !== w.type && "<dimension-token>" !== w.type && "<ratio-token>" !== w.type || (w.wsBefore, w.wsAfter, k = o(w, ["wsBefore", "wsAfter"]));
            if (null !== A && null !== k)
              if ("<" !== v && "<=" !== v || "<" !== y && "<=" !== y) {
                if (">" !== v && ">=" !== v || ">" !== y && ">=" !== y) throw new Error("Invalid range");
                p = {
                  leftToken: A,
                  leftOp: v,
                  featureName: g,
                  rightOp: y,
                  rightToken: k
                }
              } else p = {
                leftToken: A,
                leftOp: v,
                featureName: g,
                rightOp: y,
                rightToken: k
              };
            else(null === A && null === v && null !== y && null !== k || null !== A && null !== v && null === y && null === k) && (p = {
              leftToken: A,
              leftOp: v,
              featureName: g,
              rightOp: y,
              rightToken: k
            });
            return p
          }
          throw new Error("Invalid range")
        }
    },
    94760: (e, t, n) => {
      n.d(t, {
        A: () => A
      });
      var r = n(42587),
        o = n.n(r),
        a = n(15081),
        l = n.n(a),
        i = n(79908),
        f = n.n(i),
        u = new URL(n(25591), n.b),
        s = new URL(n(78118), n.b),
        c = new URL(n(14928), n.b),
        h = new URL(n(58858), n.b),
        d = new URL(n(78237), n.b),
        p = l()(o()),
        m = f()(u),
        v = f()(s),
        g = f()(c),
        y = f()(h),
        w = f()(d);
      p.push([e.id, `\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 400;\n    src: url(${m}) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: italic;\n    font-display: swap;\n    font-weight: 400;\n    src: url(${v}) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 700;\n    src: url(${g}) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Display";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 400;\n    src: url(${y}) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Display";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 700;\n    src: url(${w}) format("woff");\n}\n`, "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/fonts/dist/index.css"],
        names: [],
        mappings: ";AACA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAAsD;AAC1D;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAAwD;AAC5D;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAA0D;AAC9D;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAAyD;AAC7D;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAA6D;AACjE",
        sourcesContent: ['\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 400;\n    src: url(./files/HelveticaNowText.woff) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: italic;\n    font-display: swap;\n    font-weight: 400;\n    src: url(./files/HelveticaNowTextIt.woff) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 700;\n    src: url(./files/HelveticaNowTextBold.woff) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Display";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 400;\n    src: url(./files/HelveticaNowDisplay.woff) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Display";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 700;\n    src: url(./files/HelveticaNowDisplayBold.woff) format("woff");\n}\n'],
        sourceRoot: ""
      }]);
      const A = p
    },
    95469: (e, t, n) => {
      var r = n(53178),
        o = n.n(r),
        a = n(27835),
        l = n.n(a),
        i = n(17529),
        f = n.n(i),
        u = n(72162),
        s = n.n(u),
        c = n(82510),
        h = n.n(c),
        d = n(90675),
        p = n.n(d),
        m = n(94760),
        v = {};
      v.styleTagTransform = p(), v.setAttributes = s(), v.insert = f().bind(null, "head"), v.domAPI = l(), v.insertStyleElement = h(), o()(m.A, v), m.A && m.A.locals && m.A.locals
    },
    58858: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/8a7bed18c779bf815ff56c24ab6207e5.woff"
    },
    78237: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/2182248632b4e44ebf3764bc8ac7aba2.woff"
    },
    25591: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/63cfc284c204bd1597bc68464e18042b.woff"
    },
    14928: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/064abecda5d2f269d95fa7fd0f340e87.woff"
    },
    78118: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/ddff8a927395b3bbeb442818124b332e.woff"
    },
    22996: (e, t, n) => {
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? r(Object(n), !0).forEach((function(t) {
            a(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function a(e, t, n) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != typeof r) return r;
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
      n.d(t, {
        A: () => l
      });
      const l = function e(t) {
        return n.withOptions = n => e(o(o({}, t), n)), n;

        function n(e, ...n) {
          const r = "string" == typeof e ? [e] : e.raw,
            {
              escapeSpecialCharacters: o = Array.isArray(e)
            } = t;
          let a = "";
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            o && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), a += t, e < n.length && (a += n[e])
          }
          const l = a.split("\n");
          let i = null;
          for (const e of l) {
            const t = e.match(/^(\s+)\S+/);
            if (t) {
              const e = t[1].length;
              i = i ? Math.min(i, e) : e
            }
          }
          if (null !== i) {
            const e = i;
            a = l.map((t => " " === t[0] || "\t" === t[0] ? t.slice(e) : t)).join("\n")
          }
          return a = a.trim(), o && (a = a.replace(/\\n/g, "\n")), a
        }
      }({})
    },
    5681: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      class r {
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
          for (const o of e) {
            let e = 0;
            for (const a of o) t[e] && a in t[e] ? e = t[e][a] : (r++, t[e][a] = r, t[r] = {}, e = r, n[r] = []);
            n[e].push(o)
          }
          const o = {},
            a = [];
          for (const e in t[0]) {
            const n = t[0][e];
            o[n] = 0, a.push(n)
          }
          for (; a.length > 0;) {
            const e = a.shift();
            if (void 0 !== e)
              for (const r in t[e]) {
                const l = t[e][r];
                a.push(l);
                let i = o[e];
                for (; i > 0 && !(r in t[i]);) i = o[i];
                if (r in t[i]) {
                  const e = t[i][r];
                  o[l] = e, n[l] = [...n[l], ...n[e]]
                } else o[l] = 0
              }
          }
          return {
            gotoFn: t,
            output: n,
            failure: o
          }
        }
        search(e) {
          let t = 0;
          const n = [];
          for (let r = 0; r < e.length; r++) {
            const o = e[r];
            for (; t > 0 && !(o in this.gotoFn[t]);) t = this.failure[t];
            if (o in this.gotoFn[t] && (t = this.gotoFn[t][o], this.output[t].length > 0)) {
              const e = this.output[t];
              n.push([r, e])
            }
          }
          return n
        }
      }
    },
    3709: (e, t, n) => {
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, r.apply(this, arguments)
      }
      n.d(t, {
        A: () => r
      })
    }
  }
]);