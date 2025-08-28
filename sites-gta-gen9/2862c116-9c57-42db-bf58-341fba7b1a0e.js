try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2862c116-9c57-42db-bf58-341fba7b1a0e", e._sentryDebugIdIdentifier = "sentry-dbid-2862c116-9c57-42db-bf58-341fba7b1a0e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [931], {
    357: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.printIteratorEntries = function(e, t, r, n, o, a, i = ": ") {
        let l = "",
          u = e.next();
        if (!u.done) {
          l += t.spacingOuter;
          const s = r + t.indent;
          for (; !u.done;) l += s + a(u.value[0], t, s, n, o) + i + a(u.value[1], t, s, n, o), u = e.next(), u.done ? t.min || (l += ",") : l += "," + t.spacingInner;
          l += t.spacingOuter + r
        }
        return l
      }, t.printIteratorValues = function(e, t, r, n, o, a) {
        let i = "",
          l = e.next();
        if (!l.done) {
          i += t.spacingOuter;
          const u = r + t.indent;
          for (; !l.done;) i += u + a(l.value, t, u, n, o), l = e.next(), l.done ? t.min || (i += ",") : i += "," + t.spacingInner;
          i += t.spacingOuter + r
        }
        return i
      }, t.printListItems = function(e, t, r, n, o, a) {
        let i = "";
        if (e.length) {
          i += t.spacingOuter;
          const l = r + t.indent;
          for (let r = 0; r < e.length; r++) i += l, r in e && (i += a(e[r], t, l, n, o)), r < e.length - 1 ? i += "," + t.spacingInner : t.min || (i += ",");
          i += t.spacingOuter + r
        }
        return i
      }, t.printObjectProperties = function(e, t, n, o, a, i) {
        let l = "";
        const u = r(e, t.compareKeys);
        if (u.length) {
          l += t.spacingOuter;
          const r = n + t.indent;
          for (let n = 0; n < u.length; n++) {
            const s = u[n];
            l += r + i(s, t, r, o, a) + ": " + i(e[s], t, r, o, a), n < u.length - 1 ? l += "," + t.spacingInner : t.min || (l += ",")
          }
          l += t.spacingOuter + n
        }
        return l
      };
      const r = (e, t) => {
        const r = Object.keys(e).sort(t);
        return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((t => {
          Object.getOwnPropertyDescriptor(e, t).enumerable && r.push(t)
        })), r
      }
    },
    832: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "dedication [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    1164: (e, t, r) => {
      "use strict";
      var n = r(32313);
      e.exports = function() {
        return Object.assign ? function() {
          if (!Object.assign) return !1;
          for (var e = "abcdefghijklmnopqrst", t = e.split(""), r = {}, n = 0; n < t.length; ++n) r[t[n]] = t[n];
          var o = Object.assign({}, r),
            a = "";
          for (var i in o) a += i;
          return e !== a
        }() || function() {
          if (!Object.assign || !Object.preventExtensions) return !1;
          var e = Object.preventExtensions({
            1: 2
          });
          try {
            Object.assign(e, "xy")
          } catch (t) {
            return "y" === e[1]
          }
          return !1
        }() ? n : Object.assign : n
      }
    },
    1782: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "afterword [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    2182: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "bibliography [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["doc-biblioentry"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    2851: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        if (e === t) return !0;
        var r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (var o = Object.prototype.hasOwnProperty, a = 0; a < r.length; a++)
          if (!o.call(t, r[a]) || e[r[a]] !== t[r[a]]) return !1;
        return !0
      }
    },
    3081: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(53699),
        o = "undefined" != typeof globalThis ? globalThis : void 0 !== o ? o : "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")(),
        a = o["jest-symbol-do-not-touch"] || o.Symbol;
      const i = "function" == typeof a && a.for ? a.for("react.test.json") : 245830487,
        l = (e, t, r, o, a, i) => ++o > t.maxDepth ? (0, n.printElementAsLeaf)(e.type, t) : (0, n.printElement)(e.type, e.props ? (0, n.printProps)((e => {
          const {
            props: t
          } = e;
          return t ? Object.keys(t).filter((e => void 0 !== t[e])).sort() : []
        })(e), e.props, t, r + t.indent, o, a, i) : "", e.children ? (0, n.printChildren)(e.children, t, r + t.indent, o, a, i) : "", t, r);
      t.serialize = l;
      const u = e => e && e.$$typeof === i;
      t.test = u;
      var s = {
        serialize: l,
        test: u
      };
      t.default = s
    },
    4246: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e() ? t((function r(o) {
          for (var a = arguments.length, i = Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++) i[l - 1] = arguments[l];
          o ? n(o) : e.apply(this, i) ? t(r) : n(null)
        })) : n(null)
      };
      var r = function() {}
    },
    4864: (e, t, r) => {
      "use strict";
      var n = r(45113),
        o = r(57126),
        a = r(91995)("%ArrayBuffer%", !0),
        i = o("ArrayBuffer.prototype.byteLength", !0),
        l = o("Object.prototype.toString"),
        u = !!a && !i && new a(0).slice,
        s = !!u && n(u);
      e.exports = i || s ? function(e) {
        if (!e || "object" != typeof e) return !1;
        try {
          return i ? i(e) : s(e, 0), !0
        } catch (e) {
          return !1
        }
      } : a ? function(e) {
        return "[object ArrayBuffer]" === l(e)
      } : function(e) {
        return !1
      }
    },
    5361: (e, t, r) => {
      var n = "function" == typeof Map && Map.prototype,
        o = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        a = n && o && "function" == typeof o.get ? o.get : null,
        i = n && Map.prototype.forEach,
        l = "function" == typeof Set && Set.prototype,
        u = Object.getOwnPropertyDescriptor && l ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        s = l && u && "function" == typeof u.get ? u.get : null,
        c = l && Set.prototype.forEach,
        d = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
        p = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
        f = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
        m = Boolean.prototype.valueOf,
        b = Object.prototype.toString,
        y = Function.prototype.toString,
        h = String.prototype.match,
        v = String.prototype.slice,
        g = String.prototype.replace,
        w = String.prototype.toUpperCase,
        P = String.prototype.toLowerCase,
        C = RegExp.prototype.test,
        E = Array.prototype.concat,
        x = Array.prototype.join,
        q = Array.prototype.slice,
        O = Math.floor,
        S = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
        R = Object.getOwnPropertySymbols,
        _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
        j = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
        M = "function" == typeof Symbol && Symbol.toStringTag && (Symbol.toStringTag, 1) ? Symbol.toStringTag : null,
        A = Object.prototype.propertyIsEnumerable,
        T = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
          return e.__proto__
        } : null);

      function I(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e != e || e && e > -1e3 && e < 1e3 || C.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if ("number" == typeof e) {
          var n = e < 0 ? -O(-e) : O(e);
          if (n !== e) {
            var o = String(n),
              a = v.call(t, o.length + 1);
            return g.call(o, r, "$&_") + "." + g.call(g.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
          }
        }
        return g.call(t, r, "$&_")
      }
      var k = r(14967),
        N = k.custom,
        F = $(N) ? N : null,
        B = {
          __proto__: null,
          double: '"',
          single: "'"
        },
        L = {
          __proto__: null,
          double: /(["\\])/g,
          single: /(['\\])/g
        };

      function U(e, t, r) {
        var n = r.quoteStyle || t,
          o = B[n];
        return o + e + o
      }

      function D(e) {
        return g.call(String(e), /"/g, "&quot;")
      }

      function H(e) {
        return !M || !("object" == typeof e && (M in e || void 0 !== e[M]))
      }

      function W(e) {
        return "[object Array]" === K(e) && H(e)
      }

      function z(e) {
        return "[object RegExp]" === K(e) && H(e)
      }

      function $(e) {
        if (j) return e && "object" == typeof e && e instanceof Symbol;
        if ("symbol" == typeof e) return !0;
        if (!e || "object" != typeof e || !_) return !1;
        try {
          return _.call(e), !0
        } catch (e) {}
        return !1
      }
      e.exports = function e(t, n, o, l) {
        var u = n || {};
        if (G(u, "quoteStyle") && !G(B, u.quoteStyle)) throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (G(u, "maxStringLength") && ("number" == typeof u.maxStringLength ? u.maxStringLength < 0 && u.maxStringLength !== 1 / 0 : null !== u.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var b = !G(u, "customInspect") || u.customInspect;
        if ("boolean" != typeof b && "symbol" !== b) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (G(u, "indent") && null !== u.indent && "\t" !== u.indent && !(parseInt(u.indent, 10) === u.indent && u.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (G(u, "numericSeparator") && "boolean" != typeof u.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var w = u.numericSeparator;
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if ("boolean" == typeof t) return t ? "true" : "false";
        if ("string" == typeof t) return Y(t, u);
        if ("number" == typeof t) {
          if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
          var C = String(t);
          return w ? I(t, C) : C
        }
        if ("bigint" == typeof t) {
          var O = String(t) + "n";
          return w ? I(t, O) : O
        }
        var R = void 0 === u.depth ? 5 : u.depth;
        if (void 0 === o && (o = 0), o >= R && R > 0 && "object" == typeof t) return W(t) ? "[Array]" : "[Object]";
        var N, L = function(e, t) {
          var r;
          if ("\t" === e.indent) r = "\t";
          else {
            if (!("number" == typeof e.indent && e.indent > 0)) return null;
            r = x.call(Array(e.indent + 1), " ")
          }
          return {
            base: r,
            prev: x.call(Array(t + 1), r)
          }
        }(u, o);
        if (void 0 === l) l = [];
        else if (X(l, t) >= 0) return "[Circular]";

        function V(t, r, n) {
          if (r && (l = q.call(l)).push(r), n) {
            var a = {
              depth: u.depth
            };
            return G(u, "quoteStyle") && (a.quoteStyle = u.quoteStyle), e(t, a, o + 1, l)
          }
          return e(t, u, o + 1, l)
        }
        if ("function" == typeof t && !z(t)) {
          var J = function(e) {
              if (e.name) return e.name;
              var t = h.call(y.call(e), /^function\s*([\w$]+)/);
              return t ? t[1] : null
            }(t),
            ne = re(t, V);
          return "[Function" + (J ? ": " + J : " (anonymous)") + "]" + (ne.length > 0 ? " { " + x.call(ne, ", ") + " }" : "")
        }
        if ($(t)) {
          var oe = j ? g.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : _.call(t);
          return "object" != typeof t || j ? oe : Z(oe)
        }
        if ((N = t) && "object" == typeof N && ("undefined" != typeof HTMLElement && N instanceof HTMLElement || "string" == typeof N.nodeName && "function" == typeof N.getAttribute)) {
          for (var ae = "<" + P.call(String(t.nodeName)), ie = t.attributes || [], le = 0; le < ie.length; le++) ae += " " + ie[le].name + "=" + U(D(ie[le].value), "double", u);
          return ae += ">", t.childNodes && t.childNodes.length && (ae += "..."), ae + "</" + P.call(String(t.nodeName)) + ">"
        }
        if (W(t)) {
          if (0 === t.length) return "[]";
          var ue = re(t, V);
          return L && ! function(e) {
            for (var t = 0; t < e.length; t++)
              if (X(e[t], "\n") >= 0) return !1;
            return !0
          }(ue) ? "[" + te(ue, L) + "]" : "[ " + x.call(ue, ", ") + " ]"
        }
        if (function(e) {
            return "[object Error]" === K(e) && H(e)
          }(t)) {
          var se = re(t, V);
          return "cause" in Error.prototype || !("cause" in t) || A.call(t, "cause") ? 0 === se.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + x.call(se, ", ") + " }" : "{ [" + String(t) + "] " + x.call(E.call("[cause]: " + V(t.cause), se), ", ") + " }"
        }
        if ("object" == typeof t && b) {
          if (F && "function" == typeof t[F] && k) return k(t, {
            depth: R - o
          });
          if ("symbol" !== b && "function" == typeof t.inspect) return t.inspect()
        }
        if (function(e) {
            if (!a || !e || "object" != typeof e) return !1;
            try {
              a.call(e);
              try {
                s.call(e)
              } catch (e) {
                return !0
              }
              return e instanceof Map
            } catch (e) {}
            return !1
          }(t)) {
          var ce = [];
          return i && i.call(t, (function(e, r) {
            ce.push(V(r, t, !0) + " => " + V(e, t))
          })), ee("Map", a.call(t), ce, L)
        }
        if (function(e) {
            if (!s || !e || "object" != typeof e) return !1;
            try {
              s.call(e);
              try {
                a.call(e)
              } catch (e) {
                return !0
              }
              return e instanceof Set
            } catch (e) {}
            return !1
          }(t)) {
          var de = [];
          return c && c.call(t, (function(e) {
            de.push(V(e, t))
          })), ee("Set", s.call(t), de, L)
        }
        if (function(e) {
            if (!d || !e || "object" != typeof e) return !1;
            try {
              d.call(e, d);
              try {
                p.call(e, p)
              } catch (e) {
                return !0
              }
              return e instanceof WeakMap
            } catch (e) {}
            return !1
          }(t)) return Q("WeakMap");
        if (function(e) {
            if (!p || !e || "object" != typeof e) return !1;
            try {
              p.call(e, p);
              try {
                d.call(e, d)
              } catch (e) {
                return !0
              }
              return e instanceof WeakSet
            } catch (e) {}
            return !1
          }(t)) return Q("WeakSet");
        if (function(e) {
            if (!f || !e || "object" != typeof e) return !1;
            try {
              return f.call(e), !0
            } catch (e) {}
            return !1
          }(t)) return Q("WeakRef");
        if (function(e) {
            return "[object Number]" === K(e) && H(e)
          }(t)) return Z(V(Number(t)));
        if (function(e) {
            if (!e || "object" != typeof e || !S) return !1;
            try {
              return S.call(e), !0
            } catch (e) {}
            return !1
          }(t)) return Z(V(S.call(t)));
        if (function(e) {
            return "[object Boolean]" === K(e) && H(e)
          }(t)) return Z(m.call(t));
        if (function(e) {
            return "[object String]" === K(e) && H(e)
          }(t)) return Z(V(String(t)));
        if ("undefined" != typeof window && t === window) return "{ [object Window] }";
        if ("undefined" != typeof globalThis && t === globalThis || void 0 !== r.g && t === r.g) return "{ [object globalThis] }";
        if (! function(e) {
            return "[object Date]" === K(e) && H(e)
          }(t) && !z(t)) {
          var pe = re(t, V),
            fe = T ? T(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            me = t instanceof Object ? "" : "null prototype",
            be = !fe && M && Object(t) === t && M in t ? v.call(K(t), 8, -1) : me ? "Object" : "",
            ye = (fe || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") + (be || me ? "[" + x.call(E.call([], be || [], me || []), ": ") + "] " : "");
          return 0 === pe.length ? ye + "{}" : L ? ye + "{" + te(pe, L) + "}" : ye + "{ " + x.call(pe, ", ") + " }"
        }
        return String(t)
      };
      var V = Object.prototype.hasOwnProperty || function(e) {
        return e in this
      };

      function G(e, t) {
        return V.call(e, t)
      }

      function K(e) {
        return b.call(e)
      }

      function X(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
          if (e[r] === t) return r;
        return -1
      }

      function Y(e, t) {
        if (e.length > t.maxStringLength) {
          var r = e.length - t.maxStringLength,
            n = "... " + r + " more character" + (r > 1 ? "s" : "");
          return Y(v.call(e, 0, t.maxStringLength), t) + n
        }
        var o = L[t.quoteStyle || "single"];
        return o.lastIndex = 0, U(g.call(g.call(e, o, "\\$1"), /[\x00-\x1f]/g, J), "single", t)
      }

      function J(e) {
        var t = e.charCodeAt(0),
          r = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
          } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + w.call(t.toString(16))
      }

      function Z(e) {
        return "Object(" + e + ")"
      }

      function Q(e) {
        return e + " { ? }"
      }

      function ee(e, t, r, n) {
        return e + " (" + t + ") {" + (n ? te(r, n) : x.call(r, ", ")) + "}"
      }

      function te(e, t) {
        if (0 === e.length) return "";
        var r = "\n" + t.prev + t.base;
        return r + x.call(e, "," + r) + "\n" + t.prev
      }

      function re(e, t) {
        var r = W(e),
          n = [];
        if (r) {
          n.length = e.length;
          for (var o = 0; o < e.length; o++) n[o] = G(e, o) ? t(e[o], e) : ""
        }
        var a, i = "function" == typeof R ? R(e) : [];
        if (j) {
          a = {};
          for (var l = 0; l < i.length; l++) a["$" + i[l]] = i[l]
        }
        for (var u in e) G(e, u) && (r && String(Number(u)) === u && u < e.length || j && a["$" + u] instanceof Symbol || (C.call(/[^\w$]/, u) ? n.push(t(u, e) + ": " + t(e[u], e)) : n.push(u + ": " + t(e[u], e))));
        if ("function" == typeof R)
          for (var s = 0; s < i.length; s++) A.call(e, i[s]) && n.push("[" + t(i[s]) + "]: " + t(e[i[s]], e));
        return n
      }
    },
    5491: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-sort": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "scope",
              value: "row"
            }],
            name: "th"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "scope",
              value: "rowgroup"
            }],
            name: "th"
          },
          module: "HTML"
        }],
        requireContextRole: ["row", "rowgroup"],
        requiredContextRole: ["row", "rowgroup"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "cell"],
          ["roletype", "structure", "section", "cell", "gridcell"],
          ["roletype", "widget", "gridcell"],
          ["roletype", "structure", "sectionhead"]
        ]
      }
    },
    6451: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = void 0,
          n = void 0,
          o = void 0,
          a = void 0,
          i = 0;

        function l() {
          a = 0, i = +new Date, o = e.apply(r, n), r = null, n = null
        }
        return function() {
          r = this, n = arguments;
          var e = new Date - i;
          return a || (e >= t ? l() : a = setTimeout(l, t - e)), o
        }
      }
    },
    6529: e => {
      "use strict";
      e.exports = TypeError
    },
    7211: (e, t, r) => {
      "use strict";
      var n = r(57126),
        o = r(15577),
        a = n("RegExp.prototype.exec"),
        i = r(6529);
      e.exports = function(e) {
        if (!o(e)) throw new i("`regex` must be a RegExp");
        return function(t) {
          return null !== a(e, t)
        }
      }
    },
    7215: (e, t, r) => {
      "use strict";
      var n = r(37466),
        o = r(45113),
        a = r(85345),
        i = r(50708),
        l = r(13886),
        u = o(i(), Object);
      n(u, {
        getPolyfill: i,
        implementation: a,
        shim: l
      }), e.exports = u
    },
    7475: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-invalid": null,
          "aria-multiselectable": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-orientation": "vertical"
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: [">1"],
              name: "size"
            }, {
              name: "multiple"
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: [">1"],
              name: "size"
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "multiple"
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            name: "datalist"
          },
          module: "HTML"
        }, {
          concept: {
            name: "list"
          },
          module: "ARIA"
        }, {
          concept: {
            name: "select"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["option", "group"],
          ["option"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"]
        ]
      }
    },
    7877: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "content"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "referrer [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command", "link"]
        ]
      }
    },
    8147: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-sort": null
        },
        relatedConcepts: [{
          attributes: [{
            name: "scope",
            value: "col"
          }],
          concept: {
            name: "th"
          },
          module: "HTML"
        }],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "cell"],
          ["roletype", "structure", "section", "cell", "gridcell"],
          ["roletype", "widget", "gridcell"],
          ["roletype", "structure", "sectionhead"]
        ]
      }
    },
    8169: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {
          "aria-atomic": null,
          "aria-busy": null,
          "aria-controls": null,
          "aria-current": null,
          "aria-describedby": null,
          "aria-details": null,
          "aria-dropeffect": null,
          "aria-flowto": null,
          "aria-grabbed": null,
          "aria-hidden": null,
          "aria-keyshortcuts": null,
          "aria-label": null,
          "aria-labelledby": null,
          "aria-live": null,
          "aria-owns": null,
          "aria-relevant": null,
          "aria-roledescription": null
        },
        relatedConcepts: [{
          concept: {
            name: "rel"
          },
          module: "HTML"
        }, {
          concept: {
            name: "role"
          },
          module: "XHTML"
        }, {
          concept: {
            name: "type"
          },
          module: "Dublin Core"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: []
      }
    },
    8690: (e, t, r) => {
      "use strict";
      var n = r(41782),
        o = r(69270),
        a = r(97734);
      e.exports = n ? function(e) {
        return n(e)
      } : o ? function(e) {
        if (!e || "object" != typeof e && "function" != typeof e) throw new TypeError("getProto: not an object");
        return o(e)
      } : a ? function(e) {
        return a(e)
      } : null
    },
    10513: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "rearnote [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: ["doc-endnotes"],
        requiredContextRole: ["doc-endnotes"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "listitem"]
        ]
      }
    },
    10643: (e, t, r) => {
      "use strict";
      var n = r(57126),
        o = n("String.prototype.valueOf"),
        a = n("Object.prototype.toString"),
        i = r(72914)();
      e.exports = function(e) {
        return "string" == typeof e || !(!e || "object" != typeof e) && (i ? function(e) {
          try {
            return o(e), !0
          } catch (e) {
            return !1
          }
        }(e) : "[object String]" === a(e))
      }
    },
    10884: (e, t, r) => {
      "use strict";
      var n = r(70130),
        o = Object.prototype.toString,
        a = Object.prototype.hasOwnProperty;
      e.exports = function(e, t, r) {
        if (!n(t)) throw new TypeError("iterator must be a function");
        var i, l;
        arguments.length >= 3 && (i = r), l = e, "[object Array]" === o.call(l) ? function(e, t, r) {
          for (var n = 0, o = e.length; n < o; n++) a.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e))
        }(e, t, i) : "string" == typeof e ? function(e, t, r) {
          for (var n = 0, o = e.length; n < o; n++) null == r ? t(e.charAt(n), n, e) : t.call(r, e.charAt(n), n, e)
        }(e, t, i) : function(e, t, r) {
          for (var n in e) a.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e))
        }(e, t, i)
      }
    },
    11031: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "cover [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "img"]
        ]
      }
    },
    11093: (e, t, r) => {
      "use strict";
      var n = r(5361),
        o = r(6529),
        a = function(e, t, r) {
          for (var n, o = e; null != (n = o.next); o = n)
            if (n.key === t) return o.next = n.next, r || (n.next = e.next, e.next = n), n
        };
      e.exports = function() {
        var e, t = {
          assert: function(e) {
            if (!t.has(e)) throw new o("Side channel does not contain " + n(e))
          },
          delete: function(t) {
            var r = e && e.next,
              n = function(e, t) {
                if (e) return a(e, t, !0)
              }(e, t);
            return n && r && r === n && (e = void 0), !!n
          },
          get: function(t) {
            return function(e, t) {
              if (e) {
                var r = a(e, t);
                return r && r.value
              }
            }(e, t)
          },
          has: function(t) {
            return function(e, t) {
              return !!e && !!a(e, t)
            }(e, t)
          },
          set: function(t, r) {
            e || (e = {
                next: void 0
              }),
              function(e, t, r) {
                var n = a(e, t);
                n ? n.value = r : e.next = {
                  key: t,
                  next: e.next,
                  value: r
                }
              }(e, t, r)
          }
        };
        return t
      }
    },
    11308: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: ["figure", "grid", "table"],
        requiredContextRole: ["figure", "grid", "table"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    11535: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "prologue [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    11612: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "alert"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "alert"],
          ["roletype", "window", "dialog"]
        ]
      }
    },
    12664: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "preface [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    12822: e => {
      "use strict";
      e.exports = Object
    },
    12842: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-disabled": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget"]
        ]
      }
    },
    13252: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-valuetext": null,
          "aria-orientation": "vertical",
          "aria-valuemax": "100",
          "aria-valuemin": "0"
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-controls": null,
          "aria-valuenow": null
        },
        superClass: [
          ["roletype", "structure", "range"],
          ["roletype", "widget"]
        ]
      }
    },
    13886: (e, t, r) => {
      "use strict";
      var n = r(50708),
        o = r(37466);
      e.exports = function() {
        var e = n();
        return o(Object, {
          is: e
        }, {
          is: function() {
            return Object.is !== e
          }
        }), e
      }
    },
    15241: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = Me(r(65296)),
        o = Me(r(11612)),
        a = Me(r(84788)),
        i = Me(r(74476)),
        l = Me(r(39202)),
        u = Me(r(68335)),
        s = Me(r(78924)),
        c = Me(r(11308)),
        d = Me(r(43328)),
        p = Me(r(60845)),
        f = Me(r(47933)),
        m = Me(r(8147)),
        b = Me(r(30771)),
        y = Me(r(89804)),
        h = Me(r(72063)),
        v = Me(r(24401)),
        g = Me(r(27514)),
        w = Me(r(90248)),
        P = Me(r(49509)),
        C = Me(r(53257)),
        E = Me(r(73626)),
        x = Me(r(51272)),
        q = Me(r(79308)),
        O = Me(r(68430)),
        S = Me(r(66843)),
        R = Me(r(20688)),
        _ = Me(r(99244)),
        j = Me(r(40693)),
        M = Me(r(83352)),
        A = Me(r(36925)),
        T = Me(r(29203)),
        I = Me(r(32528)),
        k = Me(r(65668)),
        N = Me(r(7475)),
        F = Me(r(57531)),
        B = Me(r(44908)),
        L = Me(r(28669)),
        U = Me(r(48358)),
        D = Me(r(92330)),
        H = Me(r(50795)),
        W = Me(r(86254)),
        z = Me(r(90684)),
        $ = Me(r(65581)),
        V = Me(r(17929)),
        G = Me(r(80231)),
        K = Me(r(27882)),
        X = Me(r(99370)),
        Y = Me(r(97644)),
        J = Me(r(83145)),
        Z = Me(r(65160)),
        Q = Me(r(93668)),
        ee = Me(r(81886)),
        te = Me(r(80361)),
        re = Me(r(82918)),
        ne = Me(r(35732)),
        oe = Me(r(97814)),
        ae = Me(r(67647)),
        ie = Me(r(5491)),
        le = Me(r(13252)),
        ue = Me(r(87020)),
        se = Me(r(49899)),
        ce = Me(r(71641)),
        de = Me(r(35461)),
        pe = Me(r(32856)),
        fe = Me(r(18674)),
        me = Me(r(16163)),
        be = Me(r(85279)),
        ye = Me(r(89426)),
        he = Me(r(77116)),
        ve = Me(r(55621)),
        ge = Me(r(45722)),
        we = Me(r(95137)),
        Pe = Me(r(43855)),
        Ce = Me(r(91150)),
        Ee = Me(r(38282)),
        xe = Me(r(69149)),
        qe = Me(r(87743)),
        Oe = Me(r(92933)),
        Se = Me(r(32397)),
        Re = Me(r(50784)),
        _e = Me(r(45236)),
        je = Me(r(76751));

      function Me(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var Ae = [
        ["alert", n.default],
        ["alertdialog", o.default],
        ["application", a.default],
        ["article", i.default],
        ["banner", l.default],
        ["blockquote", u.default],
        ["button", s.default],
        ["caption", c.default],
        ["cell", d.default],
        ["checkbox", p.default],
        ["code", f.default],
        ["columnheader", m.default],
        ["combobox", b.default],
        ["complementary", y.default],
        ["contentinfo", h.default],
        ["definition", v.default],
        ["deletion", g.default],
        ["dialog", w.default],
        ["directory", P.default],
        ["document", C.default],
        ["emphasis", E.default],
        ["feed", x.default],
        ["figure", q.default],
        ["form", O.default],
        ["generic", S.default],
        ["grid", R.default],
        ["gridcell", _.default],
        ["group", j.default],
        ["heading", M.default],
        ["img", A.default],
        ["insertion", T.default],
        ["link", I.default],
        ["list", k.default],
        ["listbox", N.default],
        ["listitem", F.default],
        ["log", B.default],
        ["main", L.default],
        ["marquee", U.default],
        ["math", D.default],
        ["menu", H.default],
        ["menubar", W.default],
        ["menuitem", z.default],
        ["menuitemcheckbox", $.default],
        ["menuitemradio", V.default],
        ["meter", G.default],
        ["navigation", K.default],
        ["none", X.default],
        ["note", Y.default],
        ["option", J.default],
        ["paragraph", Z.default],
        ["presentation", Q.default],
        ["progressbar", ee.default],
        ["radio", te.default],
        ["radiogroup", re.default],
        ["region", ne.default],
        ["row", oe.default],
        ["rowgroup", ae.default],
        ["rowheader", ie.default],
        ["scrollbar", le.default],
        ["search", ue.default],
        ["searchbox", se.default],
        ["separator", ce.default],
        ["slider", de.default],
        ["spinbutton", pe.default],
        ["status", fe.default],
        ["strong", me.default],
        ["subscript", be.default],
        ["superscript", ye.default],
        ["switch", he.default],
        ["tab", ve.default],
        ["table", ge.default],
        ["tablist", we.default],
        ["tabpanel", Pe.default],
        ["term", Ce.default],
        ["textbox", Ee.default],
        ["time", xe.default],
        ["timer", qe.default],
        ["toolbar", Oe.default],
        ["tooltip", Se.default],
        ["tree", Re.default],
        ["treegrid", _e.default],
        ["treeitem", je.default]
      ];
      t.default = Ae
    },
    15347: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n, o = (n = r(49272)) && n.__esModule ? n : {
        default: n
      };

      function a(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, o, a = [],
              i = !0,
              l = !1;
            try {
              for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
            } catch (e) {
              l = !0, o = e
            } finally {
              try {
                i || null == r.return || r.return()
              } finally {
                if (l) throw o
              }
            }
            return a
          }
        }(e, t) || i(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function i(e, t) {
        if (e) {
          if ("string" == typeof e) return l(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0
        }
      }

      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var u = [
          ["a", {
            reserved: !1
          }],
          ["abbr", {
            reserved: !1
          }],
          ["acronym", {
            reserved: !1
          }],
          ["address", {
            reserved: !1
          }],
          ["applet", {
            reserved: !1
          }],
          ["area", {
            reserved: !1
          }],
          ["article", {
            reserved: !1
          }],
          ["aside", {
            reserved: !1
          }],
          ["audio", {
            reserved: !1
          }],
          ["b", {
            reserved: !1
          }],
          ["base", {
            reserved: !0
          }],
          ["bdi", {
            reserved: !1
          }],
          ["bdo", {
            reserved: !1
          }],
          ["big", {
            reserved: !1
          }],
          ["blink", {
            reserved: !1
          }],
          ["blockquote", {
            reserved: !1
          }],
          ["body", {
            reserved: !1
          }],
          ["br", {
            reserved: !1
          }],
          ["button", {
            reserved: !1
          }],
          ["canvas", {
            reserved: !1
          }],
          ["caption", {
            reserved: !1
          }],
          ["center", {
            reserved: !1
          }],
          ["cite", {
            reserved: !1
          }],
          ["code", {
            reserved: !1
          }],
          ["col", {
            reserved: !0
          }],
          ["colgroup", {
            reserved: !0
          }],
          ["content", {
            reserved: !1
          }],
          ["data", {
            reserved: !1
          }],
          ["datalist", {
            reserved: !1
          }],
          ["dd", {
            reserved: !1
          }],
          ["del", {
            reserved: !1
          }],
          ["details", {
            reserved: !1
          }],
          ["dfn", {
            reserved: !1
          }],
          ["dialog", {
            reserved: !1
          }],
          ["dir", {
            reserved: !1
          }],
          ["div", {
            reserved: !1
          }],
          ["dl", {
            reserved: !1
          }],
          ["dt", {
            reserved: !1
          }],
          ["em", {
            reserved: !1
          }],
          ["embed", {
            reserved: !1
          }],
          ["fieldset", {
            reserved: !1
          }],
          ["figcaption", {
            reserved: !1
          }],
          ["figure", {
            reserved: !1
          }],
          ["font", {
            reserved: !1
          }],
          ["footer", {
            reserved: !1
          }],
          ["form", {
            reserved: !1
          }],
          ["frame", {
            reserved: !1
          }],
          ["frameset", {
            reserved: !1
          }],
          ["h1", {
            reserved: !1
          }],
          ["h2", {
            reserved: !1
          }],
          ["h3", {
            reserved: !1
          }],
          ["h4", {
            reserved: !1
          }],
          ["h5", {
            reserved: !1
          }],
          ["h6", {
            reserved: !1
          }],
          ["head", {
            reserved: !0
          }],
          ["header", {
            reserved: !1
          }],
          ["hgroup", {
            reserved: !1
          }],
          ["hr", {
            reserved: !1
          }],
          ["html", {
            reserved: !0
          }],
          ["i", {
            reserved: !1
          }],
          ["iframe", {
            reserved: !1
          }],
          ["img", {
            reserved: !1
          }],
          ["input", {
            reserved: !1
          }],
          ["ins", {
            reserved: !1
          }],
          ["kbd", {
            reserved: !1
          }],
          ["keygen", {
            reserved: !1
          }],
          ["label", {
            reserved: !1
          }],
          ["legend", {
            reserved: !1
          }],
          ["li", {
            reserved: !1
          }],
          ["link", {
            reserved: !0
          }],
          ["main", {
            reserved: !1
          }],
          ["map", {
            reserved: !1
          }],
          ["mark", {
            reserved: !1
          }],
          ["marquee", {
            reserved: !1
          }],
          ["menu", {
            reserved: !1
          }],
          ["menuitem", {
            reserved: !1
          }],
          ["meta", {
            reserved: !0
          }],
          ["meter", {
            reserved: !1
          }],
          ["nav", {
            reserved: !1
          }],
          ["noembed", {
            reserved: !0
          }],
          ["noscript", {
            reserved: !0
          }],
          ["object", {
            reserved: !1
          }],
          ["ol", {
            reserved: !1
          }],
          ["optgroup", {
            reserved: !1
          }],
          ["option", {
            reserved: !1
          }],
          ["output", {
            reserved: !1
          }],
          ["p", {
            reserved: !1
          }],
          ["param", {
            reserved: !0
          }],
          ["picture", {
            reserved: !0
          }],
          ["pre", {
            reserved: !1
          }],
          ["progress", {
            reserved: !1
          }],
          ["q", {
            reserved: !1
          }],
          ["rp", {
            reserved: !1
          }],
          ["rt", {
            reserved: !1
          }],
          ["rtc", {
            reserved: !1
          }],
          ["ruby", {
            reserved: !1
          }],
          ["s", {
            reserved: !1
          }],
          ["samp", {
            reserved: !1
          }],
          ["script", {
            reserved: !0
          }],
          ["section", {
            reserved: !1
          }],
          ["select", {
            reserved: !1
          }],
          ["small", {
            reserved: !1
          }],
          ["source", {
            reserved: !0
          }],
          ["spacer", {
            reserved: !1
          }],
          ["span", {
            reserved: !1
          }],
          ["strike", {
            reserved: !1
          }],
          ["strong", {
            reserved: !1
          }],
          ["style", {
            reserved: !0
          }],
          ["sub", {
            reserved: !1
          }],
          ["summary", {
            reserved: !1
          }],
          ["sup", {
            reserved: !1
          }],
          ["table", {
            reserved: !1
          }],
          ["tbody", {
            reserved: !1
          }],
          ["td", {
            reserved: !1
          }],
          ["textarea", {
            reserved: !1
          }],
          ["tfoot", {
            reserved: !1
          }],
          ["th", {
            reserved: !1
          }],
          ["thead", {
            reserved: !1
          }],
          ["time", {
            reserved: !1
          }],
          ["title", {
            reserved: !0
          }],
          ["tr", {
            reserved: !1
          }],
          ["track", {
            reserved: !0
          }],
          ["tt", {
            reserved: !1
          }],
          ["u", {
            reserved: !1
          }],
          ["ul", {
            reserved: !1
          }],
          ["var", {
            reserved: !1
          }],
          ["video", {
            reserved: !1
          }],
          ["wbr", {
            reserved: !1
          }],
          ["xmp", {
            reserved: !1
          }]
        ],
        s = {
          entries: function() {
            return u
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = function(e) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                  if (Array.isArray(e) || (t = i(e))) {
                    t && (e = t);
                    var r = 0,
                      n = function() {};
                    return {
                      s: n,
                      n: function() {
                        return r >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[r++]
                        }
                      },
                      e: function(e) {
                        throw e
                      },
                      f: n
                    }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                  l = !1;
                return {
                  s: function() {
                    t = t.call(e)
                  },
                  n: function() {
                    var e = t.next();
                    return a = e.done, e
                  },
                  e: function(e) {
                    l = !0, o = e
                  },
                  f: function() {
                    try {
                      a || null == t.return || t.return()
                    } finally {
                      if (l) throw o
                    }
                  }
                }
              }(u);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = a(t.value, 2),
                  l = o[0],
                  s = o[1];
                e.call(r, s, l, u)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = u.find((function(t) {
              return t[0] === e
            }));
            return t && t[1]
          },
          has: function(e) {
            return !!s.get(e)
          },
          keys: function() {
            return u.map((function(e) {
              return a(e, 1)[0]
            }))
          },
          values: function() {
            return u.map((function(e) {
              return a(e, 2)[1]
            }))
          }
        },
        c = (0, o.default)(s, s.entries());
      t.default = c
    },
    15577: (e, t, r) => {
      "use strict";
      var n, o = r(57126),
        a = r(72914)(),
        i = r(29983),
        l = r(39997);
      if (a) {
        var u = o("RegExp.prototype.exec"),
          s = {},
          c = function() {
            throw s
          },
          d = {
            toString: c,
            valueOf: c
          };
        "symbol" == typeof Symbol.toPrimitive && (d[Symbol.toPrimitive] = c), n = function(e) {
          if (!e || "object" != typeof e) return !1;
          var t = l(e, "lastIndex");
          if (!t || !i(t, "value")) return !1;
          try {
            u(e, d)
          } catch (e) {
            return e === s
          }
        }
      } else {
        var p = o("Object.prototype.toString");
        n = function(e) {
          return !(!e || "object" != typeof e && "function" != typeof e) && "[object RegExp]" === p(e)
        }
      }
      e.exports = n
    },
    16163: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    16271: e => {
      "use strict";
      e.exports = EvalError
    },
    17929: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "menuitem"
          },
          module: "ARIA"
        }],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [
          ["roletype", "widget", "input", "checkbox", "menuitemcheckbox"],
          ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"],
          ["roletype", "widget", "input", "radio"]
        ]
      }
    },
    18306: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "epilogue [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    18473: (e, t, r) => {
      "use strict";
      var n = r(10643),
        o = r(77393),
        a = r(93362),
        i = r(47034),
        l = r(57705);
      e.exports = function(e) {
        return null == e || "object" != typeof e && "function" != typeof e ? null : n(e) ? "String" : o(e) ? "Number" : a(e) ? "Boolean" : i(e) ? "Symbol" : l(e) ? "BigInt" : void 0
      }
    },
    18674: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-atomic": "true",
          "aria-live": "polite"
        },
        relatedConcepts: [{
          concept: {
            name: "output"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    19363: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = a(r(85986)),
        o = a(r(34451));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      const i = e => "string" == typeof e && !!e.match((0, n.default)());
      t.test = i;
      const l = (e, t, r, a, i, l) => l(e.replace((0, n.default)(), (e => {
        switch (e) {
          case o.default.red.close:
          case o.default.green.close:
          case o.default.cyan.close:
          case o.default.gray.close:
          case o.default.white.close:
          case o.default.yellow.close:
          case o.default.bgRed.close:
          case o.default.bgGreen.close:
          case o.default.bgYellow.close:
          case o.default.inverse.close:
          case o.default.dim.close:
          case o.default.bold.close:
          case o.default.reset.open:
          case o.default.reset.close:
            return "</>";
          case o.default.red.open:
            return "<red>";
          case o.default.green.open:
            return "<green>";
          case o.default.cyan.open:
            return "<cyan>";
          case o.default.gray.open:
            return "<gray>";
          case o.default.white.open:
            return "<white>";
          case o.default.yellow.open:
            return "<yellow>";
          case o.default.bgRed.open:
            return "<bgRed>";
          case o.default.bgGreen.open:
            return "<bgGreen>";
          case o.default.bgYellow.open:
            return "<bgYellow>";
          case o.default.inverse.open:
            return "<inverse>";
          case o.default.dim.open:
            return "<dim>";
          case o.default.bold.open:
            return "<bold>";
          default:
            return ""
        }
      })), t, r, a, i);
      t.serialize = l;
      var u = {
        serialize: l,
        test: i
      };
      t.default = u
    },
    19737: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = H(r(73532)),
        o = H(r(22790)),
        a = H(r(1782)),
        i = H(r(87791)),
        l = H(r(7877)),
        u = H(r(22738)),
        s = H(r(2182)),
        c = H(r(56092)),
        d = H(r(79093)),
        p = H(r(86764)),
        f = H(r(21305)),
        m = H(r(11031)),
        b = H(r(28563)),
        y = H(r(63194)),
        h = H(r(832)),
        v = H(r(10513)),
        g = H(r(88624)),
        w = H(r(53166)),
        P = H(r(18306)),
        C = H(r(77775)),
        E = H(r(34030)),
        x = H(r(85702)),
        q = H(r(68508)),
        O = H(r(73906)),
        S = H(r(54193)),
        R = H(r(48516)),
        _ = H(r(66270)),
        j = H(r(27469)),
        M = H(r(85894)),
        A = H(r(75554)),
        T = H(r(45853)),
        I = H(r(99075)),
        k = H(r(12664)),
        N = H(r(11535)),
        F = H(r(45997)),
        B = H(r(98234)),
        L = H(r(99686)),
        U = H(r(75653)),
        D = H(r(96850));

      function H(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var W = [
        ["doc-abstract", n.default],
        ["doc-acknowledgments", o.default],
        ["doc-afterword", a.default],
        ["doc-appendix", i.default],
        ["doc-backlink", l.default],
        ["doc-biblioentry", u.default],
        ["doc-bibliography", s.default],
        ["doc-biblioref", c.default],
        ["doc-chapter", d.default],
        ["doc-colophon", p.default],
        ["doc-conclusion", f.default],
        ["doc-cover", m.default],
        ["doc-credit", b.default],
        ["doc-credits", y.default],
        ["doc-dedication", h.default],
        ["doc-endnote", v.default],
        ["doc-endnotes", g.default],
        ["doc-epigraph", w.default],
        ["doc-epilogue", P.default],
        ["doc-errata", C.default],
        ["doc-example", E.default],
        ["doc-footnote", x.default],
        ["doc-foreword", q.default],
        ["doc-glossary", O.default],
        ["doc-glossref", S.default],
        ["doc-index", R.default],
        ["doc-introduction", _.default],
        ["doc-noteref", j.default],
        ["doc-notice", M.default],
        ["doc-pagebreak", A.default],
        ["doc-pagelist", T.default],
        ["doc-part", I.default],
        ["doc-preface", k.default],
        ["doc-prologue", N.default],
        ["doc-pullquote", F.default],
        ["doc-qna", B.default],
        ["doc-subtitle", L.default],
        ["doc-tip", U.default],
        ["doc-toc", D.default]
      ];
      t.default = W
    },
    20688: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-multiselectable": null,
          "aria-readonly": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "role",
              value: "grid"
            }],
            name: "table"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["row"],
          ["row", "rowgroup"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"],
          ["roletype", "structure", "section", "table"]
        ]
      }
    },
    21046: (e, t, r) => {
      "use strict";
      var n = r(62229),
        o = r(44853);
      var a = Object.assign;

      function i(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
      }

      function l() {
        return !0
      }

      function u() {
        return !1
      }

      function s(e) {
        function t(t, r, n, o, a) {
          for (var i in this._reactName = t, this._targetInst = n, this.type = r, this.nativeEvent = o, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
          return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? l : u, this.isPropagationStopped = u, this
        }
        return a(t.prototype, {
          preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = l)
          },
          stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = l)
          },
          persist: function() {},
          isPersistent: l
        }), t
      }
      var c = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function(e) {
            return e.timeStamp || Date.now()
          },
          defaultPrevented: 0,
          isTrusted: 0
        },
        d = s(c),
        p = a({}, c, {
          view: 0,
          detail: 0
        });
      s(p);
      var f, m, b, y = a({}, p, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: P,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
          return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
          return "movementX" in e ? e.movementX : (e !== b && (b && "mousemove" === e.type ? (f = e.screenX - b.screenX, m = e.screenY - b.screenY) : m = f = 0, b = e), f)
        },
        movementY: function(e) {
          return "movementY" in e ? e.movementY : m
        }
      });
      s(y), s(a({}, y, {
        dataTransfer: 0
      })), s(a({}, p, {
        relatedTarget: 0
      })), s(a({}, c, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      })), s(a({}, c, {
        clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
      })), s(a({}, c, {
        data: 0
      }));
      var h = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified"
        },
        v = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta"
        },
        g = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey"
        };

      function w(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = g[e]) && !!t[e]
      }

      function P() {
        return w
      }

      function C(e, t, r, n, o, a, i, l, u) {
        var s = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(r, s)
        } catch (e) {
          this.onError(e)
        }
      }
      s(a({}, p, {
        key: function(e) {
          if (e.key) {
            var t = h[e.key] || e.key;
            if ("Unidentified" !== t) return t
          }
          return "keypress" === e.type ? 13 === (e = i(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? v[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: P,
        charCode: function(e) {
          return "keypress" === e.type ? i(e) : 0
        },
        keyCode: function(e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function(e) {
          return "keypress" === e.type ? i(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
      })), s(a({}, y, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
      })), s(a({}, p, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: P
      })), s(a({}, c, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      })), s(a({}, y, {
        deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
      }));
      var E = !1,
        x = null,
        q = !1,
        O = null,
        S = {
          onError: function(e) {
            E = !0, x = e
          }
        };

      function R(e, t, r, n, o, a, i, l, u) {
        E = !1, x = null, C.apply(S, arguments)
      }
      var _ = Array.isArray,
        j = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,
        M = j[0],
        A = j[1],
        T = j[2],
        I = j[3],
        k = j[4],
        N = n.unstable_act;

      function F() {}

      function B(e) {
        return !(!e || 1 !== e.nodeType || !e.tagName)
      }

      function L(e) {
        return !B(e) && null != e && "function" == typeof e.render && "function" == typeof e.setState
      }

      function U(e, t, r) {
        var n = e.type || "unknown-event";
        e.currentTarget = A(r),
          function(e, t, r, n, o, a, i, l, u) {
            if (R.apply(this, arguments), E) {
              if (!E) throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
              var s = x;
              E = !1, x = null, q || (q = !0, O = s)
            }
          }(n, t, void 0, e), e.currentTarget = null
      }

      function D(e, t) {
        var r = e.stateNode;
        if (!r) return null;
        var n = T(r);
        if (!n) return null;
        r = n[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (n = !n.disabled) || (n = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !n;
            break e;
          default:
            e = !1
        }
        if (e) return null;
        if (r && "function" != typeof r) throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof r + "` type.");
        return r
      }

      function H(e, t, r) {
        var n = r._reactName;
        "captured" === t && (n += "Capture"), (t = D(e, n)) && (null == r._dispatchListeners && (r._dispatchListeners = []), null == r._dispatchInstances && (r._dispatchInstances = []), r._dispatchListeners.push(t), r._dispatchInstances.push(e))
      }
      var W = {},
        z = new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
      "blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach((function(e) {
        W[e] = function(e) {
          return function(t, r) {
            if (n.isValidElement(t)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
            if (L(t)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
            var i = "on" + e[0].toUpperCase() + e.slice(1),
              l = new F;
            l.target = t, l.type = e.toLowerCase();
            var u = M(t),
              s = new d(i, l.type, u, l, t);
            s.persist(), a(s, r), z.has(e) ? s && s._reactName && function(e, t, r) {
              e && r && r._reactName && (t = D(e, r._reactName)) && (null == r._dispatchListeners && (r._dispatchListeners = []), null == r._dispatchInstances && (r._dispatchInstances = []), r._dispatchListeners.push(t), r._dispatchInstances.push(e))
            }(s._targetInst, null, s) : s && s._reactName && function(e, t, r) {
              for (var n = []; e;) {
                n.push(e);
                do {
                  e = e.return
                } while (e && 5 !== e.tag);
                e = e || null
              }
              for (e = n.length; 0 < e--;) t(n[e], "captured", r);
              for (e = 0; e < n.length; e++) t(n[e], "bubbled", r)
            }(s._targetInst, H, s), o.unstable_batchedUpdates((function() {
              if (I(t), s) {
                var e = s._dispatchListeners,
                  r = s._dispatchInstances;
                if (_(e))
                  for (var n = 0; n < e.length && !s.isPropagationStopped(); n++) U(s, e[n], r[n]);
                else e && U(s, e, r);
                s._dispatchListeners = null, s._dispatchInstances = null, s.isPersistent() || s.constructor.release(s)
              }
              if (q) throw e = O, q = !1, O = null, e
            })), k()
          }
        }(e)
      })), t.act = N
    },
    21305: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "conclusion [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    21572: (e, t, r) => {
      "use strict";
      var n = r(13404),
        o = r(39378),
        a = r(92170);
      if (r(44505)() || r(50811)()) {
        var i = Symbol.iterator;
        e.exports = function(e) {
          return null != e && void 0 !== e[i] ? e[i]() : o(e) ? Array.prototype[i].call(e) : void 0
        }
      } else {
        var l = r(54676),
          u = r(10643),
          s = r(91995),
          c = s("%Map%", !0),
          d = s("%Set%", !0),
          p = r(49529),
          f = p("Array.prototype.push"),
          m = p("String.prototype.charCodeAt"),
          b = p("String.prototype.slice"),
          y = function(e) {
            var t = 0;
            return {
              next: function() {
                var r, n = t >= e.length;
                return n || (r = e[t], t += 1), {
                  done: n,
                  value: r
                }
              }
            }
          },
          h = function(e, t) {
            if (l(e) || o(e)) return y(e);
            if (u(e)) {
              var r = 0;
              return {
                next: function() {
                  var t = function(e, t) {
                      if (t + 1 >= e.length) return t + 1;
                      var r = m(e, t);
                      if (r < 55296 || r > 56319) return t + 1;
                      var n = m(e, t + 1);
                      return n < 56320 || n > 57343 ? t + 1 : t + 2
                    }(e, r),
                    n = b(e, r, t);
                  return r = t, {
                    done: t > e.length,
                    value: n
                  }
                }
              }
            }
            return t && void 0 !== e["_es6-shim iterator_"] ? e["_es6-shim iterator_"]() : void 0
          };
        if (c || d) {
          var v = r(31576),
            g = r(28378),
            w = p("Map.prototype.forEach", !0),
            P = p("Set.prototype.forEach", !0);
          if (void 0 === n || !n.versions || !n.versions.node) var C = p("Map.prototype.iterator", !0),
            E = p("Set.prototype.iterator", !0);
          var x = p("Map.prototype.@@iterator", !0) || p("Map.prototype._es6-shim iterator_", !0),
            q = p("Set.prototype.@@iterator", !0) || p("Set.prototype._es6-shim iterator_", !0);
          e.exports = function(e) {
            return function(e) {
              if (v(e)) {
                if (C) return a(C(e));
                if (x) return x(e);
                if (w) {
                  var t = [];
                  return w(e, (function(e, r) {
                    f(t, [r, e])
                  })), y(t)
                }
              }
              if (g(e)) {
                if (E) return a(E(e));
                if (q) return q(e);
                if (P) {
                  var r = [];
                  return P(e, (function(e) {
                    f(r, e)
                  })), y(r)
                }
              }
            }(e) || h(e)
          }
        } else e.exports = function(e) {
          if (null != e) return h(e, !0)
        }
      }
    },
    22465: (e, t, r) => {
      "use strict";
      var n = r(64728),
        o = r(6529),
        a = Object;
      e.exports = n((function() {
        if (null == this || this !== a(this)) throw new o("RegExp.prototype.flags getter called on non-object");
        var e = "";
        return this.hasIndices && (e += "d"), this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.dotAll && (e += "s"), this.unicode && (e += "u"), this.unicodeSets && (e += "v"), this.sticky && (e += "y"), e
      }), "get flags", !0)
    },
    22738: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "EPUB biblioentry [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: ["doc-bibliography"],
        requiredContextRole: ["doc-bibliography"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "listitem"]
        ]
      }
    },
    22790: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "acknowledgments [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    22797: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "img"]
        ]
      }
    },
    23283: e => {
      "use strict";
      var t = Object.prototype.toString;
      e.exports = function(e) {
        var r = t.call(e),
          n = "[object Arguments]" === r;
        return n || (n = "[object Array]" !== r && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), n
      }
    },
    23953: (e, t, r) => {
      "use strict";
      var n = r(91995),
        o = r(57126),
        a = r(5361),
        i = r(54533),
        l = r(6529),
        u = n("%WeakMap%", !0),
        s = o("WeakMap.prototype.get", !0),
        c = o("WeakMap.prototype.set", !0),
        d = o("WeakMap.prototype.has", !0),
        p = o("WeakMap.prototype.delete", !0);
      e.exports = u ? function() {
        var e, t, r = {
          assert: function(e) {
            if (!r.has(e)) throw new l("Side channel does not contain " + a(e))
          },
          delete: function(r) {
            if (u && r && ("object" == typeof r || "function" == typeof r)) {
              if (e) return p(e, r)
            } else if (i && t) return t.delete(r);
            return !1
          },
          get: function(r) {
            return u && r && ("object" == typeof r || "function" == typeof r) && e ? s(e, r) : t && t.get(r)
          },
          has: function(r) {
            return u && r && ("object" == typeof r || "function" == typeof r) && e ? d(e, r) : !!t && t.has(r)
          },
          set: function(r, n) {
            u && r && ("object" == typeof r || "function" == typeof r) ? (e || (e = new u), c(e, r, n)) : i && (t || (t = i()), t.set(r, n))
          }
        };
        return r
      } : i
    },
    24152: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          module: "GRAPHICS",
          concept: {
            name: "graphics-object"
          }
        }, {
          module: "ARIA",
          concept: {
            name: "img"
          }
        }, {
          module: "ARIA",
          concept: {
            name: "article"
          }
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "document"]
        ]
      }
    },
    24401: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "dd"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    24719: e => {
      "use strict";
      e.exports = Object.getOwnPropertyDescriptor
    },
    25266: e => {
      "use strict";
      e.exports = Math.pow
    },
    26565: e => {
      "use strict";
      e.exports = "undefined" != typeof Reflect && Reflect && Reflect.apply
    },
    26892: (e, t, r) => {
      "use strict";
      var n = r(57126)("SharedArrayBuffer.prototype.byteLength", !0);
      e.exports = n ? function(e) {
        if (!e || "object" != typeof e) return !1;
        try {
          return n(e), !0
        } catch (e) {
          return !1
        }
      } : function(e) {
        return !1
      }
    },
    27316: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-valuemax": null,
          "aria-valuemin": null,
          "aria-valuenow": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    27469: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "noteref [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command", "link"]
        ]
      }
    },
    27514: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    27882: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "nav"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    28378: e => {
      "use strict";
      var t, r = "function" == typeof Map && Map.prototype ? Map : null,
        n = "function" == typeof Set && Set.prototype ? Set : null;
      n || (t = function(e) {
        return !1
      });
      var o = r ? Map.prototype.has : null,
        a = n ? Set.prototype.has : null;
      t || a || (t = function(e) {
        return !1
      }), e.exports = t || function(e) {
        if (!e || "object" != typeof e) return !1;
        try {
          if (a.call(e), o) try {
            o.call(e)
          } catch (e) {
            return !0
          }
          return e instanceof n
        } catch (e) {}
        return !1
      }
    },
    28563: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "credit [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    28669: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "main"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    28910: e => {
      "use strict";
      e.exports = Math.max
    },
    29203: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    29463: e => {
      "use strict";
      e.exports = URIError
    },
    29696: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype"]
        ]
      }
    },
    29983: (e, t, r) => {
      "use strict";
      var n = Function.prototype.call,
        o = Object.prototype.hasOwnProperty,
        a = r(66729);
      e.exports = a.call(n, o)
    },
    30584: e => {
      "use strict";
      e.exports = RangeError
    },
    30771: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-autocomplete": null,
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-expanded": "false",
          "aria-haspopup": "listbox"
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "email"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "search"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "tel"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "text"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "url"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "list"
            }, {
              name: "type",
              value: "url"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "multiple"
            }, {
              constraints: ["undefined"],
              name: "size"
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "multiple"
            }, {
              name: "size",
              value: 1
            }],
            name: "select"
          },
          module: "HTML"
        }, {
          concept: {
            name: "select"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-controls": null,
          "aria-expanded": "false"
        },
        superClass: [
          ["roletype", "widget", "input"]
        ]
      }
    },
    31576: e => {
      "use strict";
      var t, r = "function" == typeof Map && Map.prototype ? Map : null,
        n = "function" == typeof Set && Set.prototype ? Set : null;
      r || (t = function(e) {
        return !1
      });
      var o = r ? Map.prototype.has : null,
        a = n ? Set.prototype.has : null;
      t || o || (t = function(e) {
        return !1
      }), e.exports = t || function(e) {
        if (!e || "object" != typeof e) return !1;
        try {
          if (o.call(e), a) try {
            a.call(e)
          } catch (e) {
            return !0
          }
          return e instanceof r
        } catch (e) {}
        return !1
      }
    },
    32313: (e, t, r) => {
      "use strict";
      var n = r(70315),
        o = r(50811)(),
        a = r(57126),
        i = r(12822),
        l = a("Array.prototype.push"),
        u = a("Object.prototype.propertyIsEnumerable"),
        s = o ? i.getOwnPropertySymbols : null;
      e.exports = function(e, t) {
        if (null == e) throw new TypeError("target must be an object");
        var r = i(e);
        if (1 === arguments.length) return r;
        for (var a = 1; a < arguments.length; ++a) {
          var c = i(arguments[a]),
            d = n(c),
            p = o && (i.getOwnPropertySymbols || s);
          if (p)
            for (var f = p(c), m = 0; m < f.length; ++m) {
              var b = f[m];
              u(c, b) && l(d, b)
            }
          for (var y = 0; y < d.length; ++y) {
            var h = d[y];
            if (u(c, h)) {
              var v = c[h];
              r[h] = v
            }
          }
        }
        return r
      }
    },
    32397: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    32528: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "href"
            }],
            name: "a"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "href"
            }],
            name: "area"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "href"
            }],
            name: "link"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command"]
        ]
      }
    },
    32856: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-valuetext": null,
          "aria-valuenow": "0"
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "type",
              value: "number"
            }],
            name: "input"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"],
          ["roletype", "widget", "input"],
          ["roletype", "structure", "range"]
        ]
      }
    },
    33714: (e, t, r) => {
      "use strict";
      r.d(t, {
        jK: () => fe,
        rC: () => ar,
        zj: () => me,
        E5: () => rr,
        fE: () => ce,
        nj: () => ur
      });
      var n = r(74212),
        o = Object.prototype.toString;

      function a(e) {
        return "function" == typeof e || "[object Function]" === o.call(e)
      }
      var i = Math.pow(2, 53) - 1;

      function l(e, t) {
        var r = Array,
          n = Object(e);
        if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
        if (void 0 !== t && !a(t)) throw new TypeError("Array.from: when provided, the second argument must be a function");
        for (var o, l = function(e) {
            var t = function(e) {
              var t = Number(e);
              return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
            }(e);
            return Math.min(Math.max(t, 0), i)
          }(n.length), u = a(r) ? Object(new r(l)) : new Array(l), s = 0; s < l;) o = n[s], u[s] = t ? t(o, s) : o, s += 1;
        return u.length = l, u
      }

      function u(e) {
        return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, u(e)
      }

      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, c(n.key), n)
        }
      }

      function c(e) {
        var t = function(e) {
          if ("object" !== u(e) || null === e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" !== u(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" === u(t) ? t : String(t)
      }
      const d = "undefined" == typeof Set ? Set : function() {
        function e() {
          var t, r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), t = this, n = void 0, (r = c(r = "items")) in t ? Object.defineProperty(t, r, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[r] = n, this.items = o
        }
        var t, r;
        return t = e, (r = [{
          key: "add",
          value: function(e) {
            return !1 === this.has(e) && this.items.push(e), this
          }
        }, {
          key: "clear",
          value: function() {
            this.items = []
          }
        }, {
          key: "delete",
          value: function(e) {
            var t = this.items.length;
            return this.items = this.items.filter((function(t) {
              return t !== e
            })), t !== this.items.length
          }
        }, {
          key: "forEach",
          value: function(e) {
            var t = this;
            this.items.forEach((function(r) {
              e(r, r, t)
            }))
          }
        }, {
          key: "has",
          value: function(e) {
            return -1 !== this.items.indexOf(e)
          }
        }, {
          key: "size",
          get: function() {
            return this.items.length
          }
        }]) && s(t.prototype, r), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e
      }();

      function p(e) {
        var t;
        return null !== (t = e.localName) && void 0 !== t ? t : e.tagName.toLowerCase()
      }
      var f = {
          article: "article",
          aside: "complementary",
          button: "button",
          datalist: "listbox",
          dd: "definition",
          details: "group",
          dialog: "dialog",
          dt: "term",
          fieldset: "group",
          figure: "figure",
          form: "form",
          footer: "contentinfo",
          h1: "heading",
          h2: "heading",
          h3: "heading",
          h4: "heading",
          h5: "heading",
          h6: "heading",
          header: "banner",
          hr: "separator",
          html: "document",
          legend: "legend",
          li: "listitem",
          math: "math",
          main: "main",
          menu: "list",
          nav: "navigation",
          ol: "list",
          optgroup: "group",
          option: "option",
          output: "status",
          progress: "progressbar",
          section: "region",
          summary: "button",
          table: "table",
          tbody: "rowgroup",
          textarea: "textbox",
          tfoot: "rowgroup",
          td: "cell",
          th: "columnheader",
          thead: "rowgroup",
          tr: "row",
          ul: "list"
        },
        m = {
          caption: new Set(["aria-label", "aria-labelledby"]),
          code: new Set(["aria-label", "aria-labelledby"]),
          deletion: new Set(["aria-label", "aria-labelledby"]),
          emphasis: new Set(["aria-label", "aria-labelledby"]),
          generic: new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
          insertion: new Set(["aria-label", "aria-labelledby"]),
          paragraph: new Set(["aria-label", "aria-labelledby"]),
          presentation: new Set(["aria-label", "aria-labelledby"]),
          strong: new Set(["aria-label", "aria-labelledby"]),
          subscript: new Set(["aria-label", "aria-labelledby"]),
          superscript: new Set(["aria-label", "aria-labelledby"])
        };

      function b(e, t) {
        return function(e, t) {
          return ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-dropeffect", "aria-flowto", "aria-grabbed", "aria-hidden", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"].some((function(r) {
            var n;
            return e.hasAttribute(r) && !(null !== (n = m[t]) && void 0 !== n && n.has(r))
          }))
        }(e, t)
      }

      function y(e) {
        return null !== e && e.nodeType === e.ELEMENT_NODE
      }

      function h(e) {
        return y(e) && "caption" === p(e)
      }

      function v(e) {
        return y(e) && "input" === p(e)
      }

      function g(e) {
        return y(e) && "legend" === p(e)
      }

      function w(e) {
        return function(e) {
          return y(e) && void 0 !== e.ownerSVGElement
        }(e) && "title" === p(e)
      }

      function P(e, t) {
        if (y(e) && e.hasAttribute(t)) {
          var r = e.getAttribute(t).split(" "),
            n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
          return r.map((function(e) {
            return n.getElementById(e)
          })).filter((function(e) {
            return null !== e
          }))
        }
        return []
      }

      function C(e, t) {
        return !!y(e) && -1 !== t.indexOf(function(e) {
          var t = function(e) {
            var t = e.getAttribute("role");
            if (null !== t) {
              var r = t.trim().split(" ")[0];
              if (r.length > 0) return r
            }
            return null
          }(e);
          if (null === t || "presentation" === t) {
            var r = function(e) {
              var t = f[p(e)];
              if (void 0 !== t) return t;
              switch (p(e)) {
                case "a":
                case "area":
                case "link":
                  if (e.hasAttribute("href")) return "link";
                  break;
                case "img":
                  return "" !== e.getAttribute("alt") || b(e, "img") ? "img" : "presentation";
                case "input":
                  var r = e.type;
                  switch (r) {
                    case "button":
                    case "image":
                    case "reset":
                    case "submit":
                      return "button";
                    case "checkbox":
                    case "radio":
                      return r;
                    case "range":
                      return "slider";
                    case "email":
                    case "tel":
                    case "text":
                    case "url":
                      return e.hasAttribute("list") ? "combobox" : "textbox";
                    case "search":
                      return e.hasAttribute("list") ? "combobox" : "searchbox";
                    case "number":
                      return "spinbutton";
                    default:
                      return null
                  }
                case "select":
                  return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox"
              }
              return null
            }(e);
            if ("presentation" !== t || b(e, r || "")) return r
          }
          return t
        }(e))
      }

      function E(e, t) {
        if (!y(e)) return !1;
        if ("range" === t) return C(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
        throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("))
      }

      function x(e, t) {
        var r = l(e.querySelectorAll(t));
        return P(e, "aria-owns").forEach((function(e) {
          r.push.apply(r, l(e.querySelectorAll(t)))
        })), r
      }

      function q(e) {
        var t = e.getPropertyValue("content");
        return /^["'].*["']$/.test(t) ? t.slice(1, -1) : ""
      }

      function O(e) {
        var t = p(e);
        return "button" === t || "input" === t && "hidden" !== e.getAttribute("type") || "meter" === t || "output" === t || "progress" === t || "select" === t || "textarea" === t
      }

      function S(e) {
        if (O(e)) return e;
        var t = null;
        return e.childNodes.forEach((function(e) {
          if (null === t && y(e)) {
            var r = S(e);
            null !== r && (t = r)
          }
        })), t
      }

      function R(e) {
        if (void 0 !== e.control) return e.control;
        var t = e.getAttribute("for");
        return null !== t ? e.ownerDocument.getElementById(t) : S(e)
      }

      function _(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = new d,
          n = function(e) {
            var t = (null === e.ownerDocument ? e : e.ownerDocument).defaultView;
            if (null === t) throw new TypeError("no window available");
            return t
          }(e),
          o = t.compute,
          a = void 0 === o ? "name" : o,
          i = t.computedStyleSupportsPseudoElements,
          u = void 0 === i ? void 0 !== t.getComputedStyle : i,
          s = t.getComputedStyle,
          c = void 0 === s ? n.getComputedStyle.bind(n) : s,
          f = t.hidden,
          m = void 0 !== f && f;

        function b(e, t) {
          var r, n, o = "";
          if (y(e) && u) {
            var a = q(c(e, "::before"));
            o = "".concat(a, " ").concat(o)
          }
          if ((function(e) {
              return y(e) && "slot" === p(e)
            }(e) ? 0 === (n = (r = e).assignedNodes()).length ? l(r.childNodes) : n : l(e.childNodes).concat(P(e, "aria-owns"))).forEach((function(e) {
              var r = _(e, {
                  isEmbeddedInLabel: t.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0
                }),
                n = "inline" !== (y(e) ? c(e).getPropertyValue("display") : "inline") ? " " : "";
              o += "".concat(n).concat(r).concat(n)
            })), y(e) && u) {
            var i = q(c(e, "::after"));
            o = "".concat(o, " ").concat(i)
          }
          return o.trim()
        }

        function S(e, t) {
          var n = e.getAttributeNode(t);
          return null === n || r.has(n) || "" === n.value.trim() ? null : (r.add(n), n.value)
        }

        function _(e, t) {
          if (r.has(e)) return "";
          if (!m && function(e, t) {
              if (!y(e)) return !1;
              if (e.hasAttribute("hidden") || "true" === e.getAttribute("aria-hidden")) return !0;
              var r = t(e);
              return "none" === r.getPropertyValue("display") || "hidden" === r.getPropertyValue("visibility")
            }(e, c) && !t.isReferenced) return r.add(e), "";
          var n = y(e) ? e.getAttributeNode("aria-labelledby") : null,
            o = null === n || r.has(n) ? [] : P(e, "aria-labelledby");
          if ("name" === a && !t.isReferenced && o.length > 0) return r.add(n), o.map((function(e) {
            return _(e, {
              isEmbeddedInLabel: t.isEmbeddedInLabel,
              isReferenced: !0,
              recursion: !1
            })
          })).join(" ");
          var i, u = t.recursion && (C(i = e, ["button", "combobox", "listbox", "textbox"]) || E(i, "range")) && "name" === a;
          if (!u) {
            var s = (y(e) && e.getAttribute("aria-label") || "").trim();
            if ("" !== s && "name" === a) return r.add(e), s;
            if (! function(e) {
                return C(e, ["none", "presentation"])
              }(e)) {
              var d = function(e) {
                if (!y(e)) return null;
                if (function(e) {
                    return y(e) && "fieldset" === p(e)
                  }(e)) {
                  r.add(e);
                  for (var t = l(e.childNodes), n = 0; n < t.length; n += 1) {
                    var o = t[n];
                    if (g(o)) return _(o, {
                      isEmbeddedInLabel: !1,
                      isReferenced: !1,
                      recursion: !1
                    })
                  }
                } else if (function(e) {
                    return y(e) && "table" === p(e)
                  }(e)) {
                  r.add(e);
                  for (var a = l(e.childNodes), i = 0; i < a.length; i += 1) {
                    var u = a[i];
                    if (h(u)) return _(u, {
                      isEmbeddedInLabel: !1,
                      isReferenced: !1,
                      recursion: !1
                    })
                  }
                } else {
                  if (function(e) {
                      return y(e) && "svg" === p(e)
                    }(e)) {
                    r.add(e);
                    for (var s = l(e.childNodes), c = 0; c < s.length; c += 1) {
                      var d = s[c];
                      if (w(d)) return d.textContent
                    }
                    return null
                  }
                  if ("img" === p(e) || "area" === p(e)) {
                    var f = S(e, "alt");
                    if (null !== f) return f
                  } else if (function(e) {
                      return y(e) && "optgroup" === p(e)
                    }(e)) {
                    var m = S(e, "label");
                    if (null !== m) return m
                  }
                }
                if (v(e) && ("button" === e.type || "submit" === e.type || "reset" === e.type)) {
                  var P = S(e, "value");
                  if (null !== P) return P;
                  if ("submit" === e.type) return "Submit";
                  if ("reset" === e.type) return "Reset"
                }
                var E, x, q = null === (x = (E = e).labels) ? x : void 0 !== x ? l(x) : O(E) ? l(E.ownerDocument.querySelectorAll("label")).filter((function(e) {
                  return R(e) === E
                })) : null;
                if (null !== q && 0 !== q.length) return r.add(e), l(q).map((function(e) {
                  return _(e, {
                    isEmbeddedInLabel: !0,
                    isReferenced: !1,
                    recursion: !0
                  })
                })).filter((function(e) {
                  return e.length > 0
                })).join(" ");
                if (v(e) && "image" === e.type) {
                  var j = S(e, "alt");
                  if (null !== j) return j;
                  var M = S(e, "title");
                  return null !== M ? M : "Submit Query"
                }
                if (C(e, ["button"])) {
                  var A = b(e, {
                    isEmbeddedInLabel: !1,
                    isReferenced: !1
                  });
                  if ("" !== A) return A
                }
                return null
              }(e);
              if (null !== d) return r.add(e), d
            }
          }
          if (C(e, ["menu"])) return r.add(e), "";
          if (u || t.isEmbeddedInLabel || t.isReferenced) {
            if (C(e, ["combobox", "listbox"])) {
              r.add(e);
              var f = function(e) {
                return y(t = e) && "select" === p(t) ? e.selectedOptions || x(e, "[selected]") : x(e, '[aria-selected="true"]');
                var t
              }(e);
              return 0 === f.length ? v(e) ? e.value : "" : l(f).map((function(e) {
                return _(e, {
                  isEmbeddedInLabel: t.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0
                })
              })).join(" ")
            }
            if (E(e, "range")) return r.add(e), e.hasAttribute("aria-valuetext") ? e.getAttribute("aria-valuetext") : e.hasAttribute("aria-valuenow") ? e.getAttribute("aria-valuenow") : e.getAttribute("value") || "";
            if (C(e, ["textbox"])) return r.add(e),
              function(e) {
                return v(e) || y(t = e) && "textarea" === p(t) ? e.value : e.textContent || "";
                var t
              }(e)
          }
          if (function(e) {
              return C(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"])
            }(e) || y(e) && t.isReferenced || function(e) {
              return h(e)
            }(e)) {
            var q = b(e, {
              isEmbeddedInLabel: t.isEmbeddedInLabel,
              isReferenced: !1
            });
            if ("" !== q) return r.add(e), q
          }
          if (e.nodeType === e.TEXT_NODE) return r.add(e), e.textContent || "";
          if (t.recursion) return r.add(e), b(e, {
            isEmbeddedInLabel: t.isEmbeddedInLabel,
            isReferenced: !1
          });
          var j = function(e) {
            return y(e) ? S(e, "title") : null
          }(e);
          return null !== j ? (r.add(e), j) : (r.add(e), "")
        }
        return _(e, {
          isEmbeddedInLabel: !1,
          isReferenced: "description" === a,
          recursion: !1
        }).trim().replace(/\s\s+/g, " ")
      }

      function j(e) {
        return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, j(e)
      }

      function M(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? M(Object(r), !0).forEach((function(t) {
            T(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function T(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" !== j(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== j(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" === j(t) ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function I(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = P(e, "aria-describedby").map((function(e) {
            return _(e, A(A({}, t), {}, {
              compute: "description"
            }))
          })).join(" ");
        if ("" === r) {
          var n = e.getAttribute("title");
          r = null === n ? "" : n
        }
        return r
      }

      function k(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return C(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]) ? "" : _(e, t)
      }
      var N = r(56333),
        F = r(66026),
        B = r.n(F);
      e = r.hmd(e);
      var L = r(13404);

      function U(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      const D = (e, t, r, n, o, a, i) => {
          const l = n + r.indent,
            u = r.colors;
          return e.map((e => {
            const s = t[e];
            let c = i(s, r, l, o, a);
            return "string" != typeof s && (-1 !== c.indexOf("\n") && (c = r.spacingOuter + l + c + r.spacingOuter + n), c = "{" + c + "}"), r.spacingInner + n + u.prop.open + e + u.prop.close + "=" + u.value.open + c + u.value.close
          })).join("")
        },
        H = (e, t, r, n, o, a) => e.map((e => {
          const i = "string" == typeof e ? W(e, t) : a(e, t, r, n, o);
          return "" === i && "object" == typeof e && null !== e && 3 !== e.nodeType ? "" : t.spacingOuter + r + i
        })).join(""),
        W = (e, t) => {
          const r = t.colors.content;
          return r.open + U(e) + r.close
        },
        z = (e, t) => {
          const r = t.colors.comment;
          return r.open + "\x3c!--" + U(e) + "--\x3e" + r.close
        },
        $ = (e, t, r, n, o) => {
          const a = n.colors.tag;
          return a.open + "<" + e + (t && a.close + t + n.spacingOuter + o + a.open) + (r ? ">" + a.close + r + n.spacingOuter + o + a.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + a.close
        },
        V = (e, t) => {
          const r = t.colors.tag;
          return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close
        },
        G = 3,
        K = 8,
        X = 11,
        Y = /^((HTML|SVG)\w*)?Element$/,
        J = e => {
          const t = e.constructor.name,
            {
              nodeType: r,
              tagName: n
            } = e,
            o = "string" == typeof n && n.includes("-") || "function" == typeof e.hasAttribute && e.hasAttribute("is");
          return 1 === r && (Y.test(t) || o) || r === G && "Text" === t || r === K && "Comment" === t || r === X && "DocumentFragment" === t
        };

      function Z(e) {
        return e.nodeType === X
      }

      function Q(e) {
        return {
          test: e => {
            var t;
            return (null == e || null == (t = e.constructor) ? void 0 : t.name) && J(e)
          },
          serialize: (t, r, n, o, a, i) => {
            if (function(e) {
                return e.nodeType === G
              }(t)) return W(t.data, r);
            if (function(e) {
                return e.nodeType === K
              }(t)) return z(t.data, r);
            const l = Z(t) ? "DocumentFragment" : t.tagName.toLowerCase();
            return ++o > r.maxDepth ? V(l, r) : $(l, D(Z(t) ? [] : Array.from(t.attributes).map((e => e.name)).sort(), Z(t) ? {} : Array.from(t.attributes).reduce(((e, t) => (e[t.name] = t.value, e)), {}), r, n + r.indent, o, a, i), H(Array.prototype.slice.call(t.childNodes || t.children).filter(e), r, n + r.indent, o, a, i), r, n)
          }
        }
      }
      let ee = null,
        te = null,
        re = null;
      try {
        const t = e && e.require;
        te = t.call(e, "fs").readFileSync, re = t.call(e, "@babel/code-frame").codeFrameColumns, ee = t.call(e, "chalk")
      } catch {}

      function ne() {
        return "undefined" != typeof jest && null !== jest && (!0 === setTimeout._isMockFunction || Object.prototype.hasOwnProperty.call(setTimeout, "clock"))
      }

      function oe() {
        if ("undefined" == typeof window) throw new Error("Could not find default container");
        return window.document
      }

      function ae(e) {
        if (e.defaultView) return e.defaultView;
        if (e.ownerDocument && e.ownerDocument.defaultView) return e.ownerDocument.defaultView;
        if (e.window) return e.window;
        throw e.ownerDocument && null === e.ownerDocument.defaultView ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : "function" == typeof e.debug && "function" == typeof e.logTestingPlaygroundURL ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".")
      }

      function ie(e) {
        if (!e || "function" != typeof e.querySelector || "function" != typeof e.querySelectorAll) throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + (("object" == typeof(t = e) ? null === t ? "null" : t.constructor.name : typeof t) + "."));
        var t
      }
      const le = () => {
          let e;
          try {
            var t;
            e = JSON.parse(null == (t = L) || null == (t = t.env) ? void 0 : t.COLORS)
          } catch (e) {}
          return "boolean" == typeof e ? e : void 0 !== L && void 0 !== L.versions && void 0 !== L.versions.node
        },
        {
          DOMCollection: ue
        } = n.Nx;

      function se(e) {
        return 8 !== e.nodeType && (1 !== e.nodeType || !e.matches(me().defaultIgnore))
      }

      function ce(e, t, r) {
        if (void 0 === r && (r = {}), e || (e = oe().body), "number" != typeof t && (t = void 0 !== L && L.env.DEBUG_PRINT_LIMIT || 7e3), 0 === t) return "";
        e.documentElement && (e = e.documentElement);
        let o = typeof e;
        if ("object" === o ? o = e.constructor.name : e = {}, !("outerHTML" in e)) throw new TypeError("Expected an element or document but got " + o);
        const {
          filterNode: a = se,
          ...i
        } = r, l = n.GP(e, {
          plugins: [Q(a), ue],
          printFunctionName: !1,
          highlight: le(),
          ...i
        });
        return void 0 !== t && e.outerHTML.length > t ? l.slice(0, t) + "..." : l
      }
      const de = function() {
        const e = te && re ? function(e) {
          const t = e.indexOf("(") + 1,
            r = e.indexOf(")"),
            n = e.slice(t, r),
            o = n.split(":"),
            [a, i, l] = [o[0], parseInt(o[1], 10), parseInt(o[2], 10)];
          let u = "";
          try {
            u = te(a, "utf-8")
          } catch {
            return ""
          }
          const s = re(u, {
            start: {
              line: i,
              column: l
            }
          }, {
            highlightCode: !0,
            linesBelow: 0
          });
          return ee.dim(n) + "\n" + s + "\n"
        }((new Error).stack.split("\n").slice(1).find((e => !e.includes("node_modules/")))) : "";
        e ? console.log(ce(...arguments) + "\n\n" + e) : console.log(ce(...arguments))
      };
      let pe = {
        testIdAttribute: "data-testid",
        asyncUtilTimeout: 1e3,
        asyncWrapper: e => e(),
        unstable_advanceTimersWrapper: e => e(),
        eventWrapper: e => e(),
        defaultHidden: !1,
        defaultIgnore: "script, style",
        showOriginalStackTrace: !1,
        throwSuggestions: !1,
        getElementError(e, t) {
          const r = ce(t),
            n = new Error([e, "Ignored nodes: comments, " + pe.defaultIgnore + "\n" + r].filter(Boolean).join("\n\n"));
          return n.name = "TestingLibraryElementError", n
        },
        _disableExpensiveErrorDiagnostics: !1,
        computedStyleSupportsPseudoElements: !1
      };

      function fe(e) {
        "function" == typeof e && (e = e(pe)), pe = {
          ...pe,
          ...e
        }
      }

      function me() {
        return pe
      }
      const be = ["button", "meter", "output", "progress", "select", "textarea", "input"];

      function ye(e) {
        return be.includes(e.nodeName.toLowerCase()) ? "" : 3 === e.nodeType ? e.textContent : Array.from(e.childNodes).map((e => ye(e))).join("")
      }

      function he(e) {
        let t;
        return t = "label" === e.tagName.toLowerCase() ? ye(e) : e.value || e.textContent, t
      }

      function ve(e) {
        var t;
        if (void 0 !== e.labels) return null != (t = e.labels) ? t : [];
        if (! function(e) {
            return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || "INPUT" === e.tagName && "hidden" !== e.getAttribute("type")
          }(e)) return [];
        const r = e.ownerDocument.querySelectorAll("label");
        return Array.from(r).filter((t => t.control === e))
      }

      function ge(e, t, r) {
        let {
          selector: n = "*"
        } = void 0 === r ? {} : r;
        const o = t.getAttribute("aria-labelledby"),
          a = o ? o.split(" ") : [];
        return a.length ? a.map((t => {
          const r = e.querySelector('[id="' + t + '"]');
          return r ? {
            content: he(r),
            formControl: null
          } : {
            content: "",
            formControl: null
          }
        })) : Array.from(ve(t)).map((e => ({
          content: he(e),
          formControl: Array.from(e.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter((e => e.matches(n)))[0]
        })))
      }

      function we(e) {
        if (null == e) throw new Error("It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?")
      }

      function Pe(e, t, r, n) {
        if ("string" != typeof e) return !1;
        we(r);
        const o = n(e);
        return "string" == typeof r || "number" == typeof r ? o.toLowerCase().includes(r.toString().toLowerCase()) : "function" == typeof r ? r(o, t) : qe(r, o)
      }

      function Ce(e, t, r, n) {
        if ("string" != typeof e) return !1;
        we(r);
        const o = n(e);
        return r instanceof Function ? r(o, t) : r instanceof RegExp ? qe(r, o) : o === String(r)
      }

      function Ee(e) {
        let {
          trim: t = !0,
          collapseWhitespace: r = !0
        } = void 0 === e ? {} : e;
        return e => {
          let n = e;
          return n = t ? n.trim() : n, n = r ? n.replace(/\s+/g, " ") : n, n
        }
      }

      function xe(e) {
        let {
          trim: t,
          collapseWhitespace: r,
          normalizer: n
        } = e;
        if (!n) return Ee({
          trim: t,
          collapseWhitespace: r
        });
        if (void 0 !== t || void 0 !== r) throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
        return n
      }

      function qe(e, t) {
        const r = e.test(t);
        return e.global && 0 !== e.lastIndex && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), r
      }

      function Oe(e) {
        return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((e => 3 === e.nodeType && Boolean(e.textContent))).map((e => e.textContent)).join("")
      }
      const Se = function(e) {
        function t(e) {
          let {
            attributes: t = []
          } = e;
          return t.length
        }

        function r(e) {
          let {
            attributes: t = []
          } = e;
          const r = t.findIndex((e => e.value && "type" === e.name && "text" === e.value));
          r >= 0 && (t = [...t.slice(0, r), ...t.slice(r + 1)]);
          const n = function(e) {
            let {
              name: t,
              attributes: r
            } = e;
            return "" + t + r.map((e => {
              let {
                name: t,
                value: r,
                constraints: n = []
              } = e;
              return -1 !== n.indexOf("undefined") ? ":not([" + t + "])" : r ? "[" + t + '="' + r + '"]' : "[" + t + "]"
            })).join("")
          }({
            ...e,
            attributes: t
          });
          return e => !(r >= 0 && "text" !== e.type) && e.matches(n)
        }
        let n = [];
        for (const [o, a] of e.entries()) n = [...n, {
          match: r(o),
          roles: Array.from(a),
          specificity: t(o)
        }];
        return n.sort((function(e, t) {
          let {
            specificity: r
          } = e, {
            specificity: n
          } = t;
          return n - r
        }))
      }(N._s);

      function Re(e) {
        return !0 === e.hidden || ("true" === e.getAttribute("aria-hidden") || "none" === e.ownerDocument.defaultView.getComputedStyle(e).display)
      }

      function _e(e, t) {
        void 0 === t && (t = {});
        const {
          isSubtreeInaccessible: r = Re
        } = t;
        if ("hidden" === e.ownerDocument.defaultView.getComputedStyle(e).visibility) return !0;
        let n = e;
        for (; n;) {
          if (r(n)) return !0;
          n = n.parentElement
        }
        return !1
      }

      function je(e) {
        for (const {
            match: t,
            roles: r
          }
          of Se)
          if (t(e)) return [...r];
        return []
      }

      function Me(e, t) {
        const r = e.getAttribute(t);
        return "true" === r || "false" !== r && void 0
      }
      const Ae = Ee();

      function Te(e) {
        return new RegExp(function(e) {
          return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
        }(e.toLowerCase()), "i")
      }

      function Ie(e, t, r, n) {
        let {
          variant: o,
          name: a
        } = n, i = "";
        const l = {},
          u = [
            ["Role", "TestId"].includes(e) ? r : Te(r)
          ];
        a && (l.name = Te(a)), "Role" === e && _e(t) && (l.hidden = !0, i = "Element is inaccessible. This means that the element and all its children are invisible to screen readers.\n    If you are using the aria-hidden prop, make sure this is the right choice for your case.\n    "), Object.keys(l).length > 0 && u.push(l);
        const s = o + "By" + e;
        return {
          queryName: e,
          queryMethod: s,
          queryArgs: u,
          variant: o,
          warning: i,
          toString() {
            i && console.warn(i);
            let [e, t] = u;
            return e = "string" == typeof e ? "'" + e + "'" : e, t = t ? ", { " + Object.entries(t).map((e => {
              let [t, r] = e;
              return t + ": " + r
            })).join(", ") + " }" : "", s + "(" + e + t + ")"
          }
        }
      }

      function ke(e, t, r) {
        return r && (!t || t.toLowerCase() === e.toLowerCase())
      }

      function Ne(e, t, r) {
        var n, o;
        if (void 0 === t && (t = "get"), e.matches(me().defaultIgnore)) return;
        const a = null != (n = e.getAttribute("role")) ? n : null == (o = je(e)) ? void 0 : o[0];
        if ("generic" !== a && ke("Role", r, a)) return Ie("Role", e, a, {
          variant: t,
          name: k(e, {
            computedStyleSupportsPseudoElements: me().computedStyleSupportsPseudoElements
          })
        });
        const i = ge(document, e).map((e => e.content)).join(" ");
        if (ke("LabelText", r, i)) return Ie("LabelText", e, i, {
          variant: t
        });
        const l = e.getAttribute("placeholder");
        if (ke("PlaceholderText", r, l)) return Ie("PlaceholderText", e, l, {
          variant: t
        });
        const u = Ae(Oe(e));
        if (ke("Text", r, u)) return Ie("Text", e, u, {
          variant: t
        });
        if (ke("DisplayValue", r, e.value)) return Ie("DisplayValue", e, Ae(e.value), {
          variant: t
        });
        const s = e.getAttribute("alt");
        if (ke("AltText", r, s)) return Ie("AltText", e, s, {
          variant: t
        });
        const c = e.getAttribute("title");
        if (ke("Title", r, c)) return Ie("Title", e, c, {
          variant: t
        });
        const d = e.getAttribute(me().testIdAttribute);
        return ke("TestId", r, d) ? Ie("TestId", e, d, {
          variant: t
        }) : void 0
      }

      function Fe(e, t) {
        e.stack = t.stack.replace(t.message, e.message)
      }

      function Be(e, t) {
        const r = new Error("STACK_TRACE_MESSAGE");
        return me().asyncWrapper((() => function(e, t) {
          let {
            container: r = oe(),
            timeout: n = me().asyncUtilTimeout,
            showOriginalStackTrace: o = me().showOriginalStackTrace,
            stackTraceError: a,
            interval: i = 50,
            onTimeout: l = e => (Object.defineProperty(e, "message", {
              value: me().getElementError(e.message, r).message
            }), e),
            mutationObserverOptions: u = {
              subtree: !0,
              childList: !0,
              attributes: !0,
              characterData: !0
            }
          } = t;
          if ("function" != typeof e) throw new TypeError("Received `callback` arg must be a function");
          return new Promise((async (t, s) => {
            let c, d, p, f = !1,
              m = "idle";
            const b = setTimeout((function() {
                let e;
                c ? (e = c, o || "TestingLibraryElementError" !== e.name || Fe(e, a)) : (e = new Error("Timed out in waitFor."), o || Fe(e, a)), h(l(e), null)
              }), n),
              y = ne();
            if (y) {
              const {
                unstable_advanceTimersWrapper: e
              } = me();
              for (g(); !f;) {
                if (!ne()) {
                  const e = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
                  return o || Fe(e, a), void s(e)
                }
                if (await e((async () => {
                    jest.advanceTimersByTime(i)
                  })), f) break;
                g()
              }
            } else {
              try {
                ie(r)
              } catch (e) {
                return void s(e)
              }
              d = setInterval(v, i);
              const {
                MutationObserver: e
              } = ae(r);
              p = new e(v), p.observe(r, u), g()
            }

            function h(e, r) {
              f = !0, clearTimeout(b), y || (clearInterval(d), p.disconnect()), e ? s(e) : t(r)
            }

            function v() {
              if (ne()) {
                const e = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
                return o || Fe(e, a), s(e)
              }
              return g()
            }

            function g() {
              if ("pending" !== m) try {
                const t = function(e) {
                  try {
                    return pe._disableExpensiveErrorDiagnostics = !0, e()
                  } finally {
                    pe._disableExpensiveErrorDiagnostics = !1
                  }
                }(e);
                "function" == typeof(null == t ? void 0 : t.then) ? (m = "pending", t.then((e => {
                  m = "resolved", h(null, e)
                }), (e => {
                  m = "rejected", c = e
                }))) : h(null, t)
              } catch (e) {
                c = e
              }
            }
          }))
        }(e, {
          stackTraceError: r,
          ...t
        })))
      }

      function Le(e, t) {
        return me().getElementError(e, t)
      }

      function Ue(e, t, r, n) {
        let {
          exact: o = !0,
          collapseWhitespace: a,
          trim: i,
          normalizer: l
        } = void 0 === n ? {} : n;
        const u = o ? Ce : Pe,
          s = xe({
            collapseWhitespace: a,
            trim: i,
            normalizer: l
          });
        return Array.from(t.querySelectorAll("[" + e + "]")).filter((t => u(t.getAttribute(e), t, r, s)))
      }

      function De(e, t) {
        return function(r) {
          for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
          const i = e(r, ...o);
          if (i.length > 1) {
            const e = i.map((e => Le(null, e).message)).join("\n\n");
            throw function(e, t) {
              return Le(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t)
            }(t(r, ...o) + "\n\nHere are the matching elements:\n\n" + e, r)
          }
          return i[0] || null
        }
      }

      function He(e, t) {
        return me().getElementError("A better query is available, try this:\n" + e.toString() + "\n", t)
      }

      function We(e) {
        return (t, r, n, o) => Be((() => e(t, r, n)), {
          container: t,
          ...o
        })
      }
      const ze = (e, t, r) => function(n) {
          for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
          const l = e(n, ...a),
            [{
              suggest: u = me().throwSuggestions
            } = {}] = a.slice(-1);
          if (l && u) {
            const e = Ne(l, r);
            if (e && !t.endsWith(e.queryName)) throw He(e.toString(), n)
          }
          return l
        },
        $e = (e, t, r) => function(n) {
          for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
          const l = e(n, ...a),
            [{
              suggest: u = me().throwSuggestions
            } = {}] = a.slice(-1);
          if (l.length && u) {
            const e = [...new Set(l.map((e => {
              var t;
              return null == (t = Ne(e, r)) ? void 0 : t.toString()
            })))];
            if (1 === e.length && !t.endsWith(Ne(l[0], r).queryName)) throw He(e[0], n)
          }
          return l
        };

      function Ve(e, t, r) {
        const n = ze(De(e, t), e.name, "query"),
          o = function(e, t) {
            return function(r) {
              for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
              const i = e(r, ...o);
              if (!i.length) throw me().getElementError(t(r, ...o), r);
              return i
            }
          }(e, r),
          a = De(o, t),
          i = ze(a, e.name, "get");
        return [n, $e(o, e.name.replace("query", "get"), "getAll"), i, We($e(o, e.name, "findAll")), We(ze(a, e.name, "find"))]
      }
      const Ge = function(e, t, r) {
          let {
            selector: n = "*",
            exact: o = !0,
            collapseWhitespace: a,
            trim: i,
            normalizer: l
          } = void 0 === r ? {} : r;
          ie(e);
          const u = o ? Ce : Pe,
            s = xe({
              collapseWhitespace: a,
              trim: i,
              normalizer: l
            }),
            c = Array.from(e.querySelectorAll("*")).filter((e => ve(e).length || e.hasAttribute("aria-labelledby"))).reduce(((r, o) => {
              const a = ge(e, o, {
                selector: n
              });
              a.filter((e => Boolean(e.formControl))).forEach((e => {
                u(e.content, e.formControl, t, s) && e.formControl && r.push(e.formControl)
              }));
              const i = a.filter((e => Boolean(e.content))).map((e => e.content));
              return u(i.join(" "), o, t, s) && r.push(o), i.length > 1 && i.forEach(((e, n) => {
                u(e, o, t, s) && r.push(o);
                const a = [...i];
                a.splice(n, 1), a.length > 1 && u(a.join(" "), o, t, s) && r.push(o)
              })), r
            }), []).concat(Ue("aria-label", e, t, {
              exact: o,
              normalizer: s
            }));
          return Array.from(new Set(c)).filter((e => e.matches(n)))
        },
        Ke = function(e, t) {
          for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];
          const a = Ge(e, t, ...n);
          if (!a.length) {
            const r = function(e, t, r) {
              let {
                exact: n = !0,
                trim: o,
                collapseWhitespace: a,
                normalizer: i
              } = void 0 === r ? {} : r;
              const l = n ? Ce : Pe,
                u = xe({
                  collapseWhitespace: a,
                  trim: o,
                  normalizer: i
                }),
                s = function(e) {
                  return Array.from(e.querySelectorAll("label,input")).map((e => ({
                    node: e,
                    textToMatch: he(e)
                  }))).filter((e => {
                    let {
                      textToMatch: t
                    } = e;
                    return null !== t
                  }))
                }(e);
              return s.filter((e => {
                let {
                  node: r,
                  textToMatch: n
                } = e;
                return l(n, r, t, u)
              })).map((e => {
                let {
                  node: t
                } = e;
                return t
              }))
            }(e, t, ...n);
            if (r.length) {
              const n = r.map((t => function(e, t) {
                const r = t.getAttribute("for");
                if (!r) return null;
                const n = e.querySelector('[id="' + r + '"]');
                return n ? n.tagName.toLowerCase() : null
              }(e, t))).filter((e => !!e));
              throw n.length ? me().getElementError(n.map((e => "Found a label with the text of: " + t + ", however the element associated with this label (<" + e + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + e + " />, you can use aria-label or aria-labelledby instead.")).join("\n\n"), e) : me().getElementError("Found a label with the text of: " + t + ', however no form control was found associated to that label. Make sure you\'re using the "for" attribute or "aria-labelledby" attribute correctly.', e)
            }
            throw me().getElementError("Unable to find a label with the text of: " + t, e)
          }
          return a
        },
        Xe = (e, t) => "Found multiple elements with the text of: " + t,
        Ye = ze(De(Ge, Xe), Ge.name, "query"),
        Je = De(Ke, Xe),
        Ze = We($e(Ke, Ke.name, "findAll")),
        Qe = We(ze(Je, Ke.name, "find")),
        et = $e(Ke, Ke.name, "getAll"),
        tt = ze(Je, Ke.name, "get"),
        rt = $e(Ge, Ge.name, "queryAll"),
        nt = function() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return ie(t[0]), Ue("placeholder", ...t)
        },
        ot = $e(nt, nt.name, "queryAll"),
        [at, it, lt, ut, st] = Ve(nt, ((e, t) => "Found multiple elements with the placeholder text of: " + t), ((e, t) => "Unable to find an element with the placeholder text of: " + t)),
        ct = function(e, t, r) {
          let {
            selector: n = "*",
            exact: o = !0,
            collapseWhitespace: a,
            trim: i,
            ignore: l = me().defaultIgnore,
            normalizer: u
          } = void 0 === r ? {} : r;
          ie(e);
          const s = o ? Ce : Pe,
            c = xe({
              collapseWhitespace: a,
              trim: i,
              normalizer: u
            });
          let d = [];
          return "function" == typeof e.matches && e.matches(n) && (d = [e]), [...d, ...Array.from(e.querySelectorAll(n))].filter((e => !l || !e.matches(l))).filter((e => s(Oe(e), e, t, c)))
        },
        dt = $e(ct, ct.name, "queryAll"),
        [pt, ft, mt, bt, yt] = Ve(ct, ((e, t) => "Found multiple elements with the text: " + t), (function(e, t, r) {
          void 0 === r && (r = {});
          const {
            collapseWhitespace: n,
            trim: o,
            normalizer: a,
            selector: i
          } = r, l = xe({
            collapseWhitespace: n,
            trim: o,
            normalizer: a
          })(t.toString());
          return "Unable to find an element with the text: " + (l !== t.toString() ? l + " (normalized from '" + t + "')" : t) + ("*" !== (null != i ? i : "*") ? ", which matches selector '" + i + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible."
        })),
        ht = function(e, t, r) {
          let {
            exact: n = !0,
            collapseWhitespace: o,
            trim: a,
            normalizer: i
          } = void 0 === r ? {} : r;
          ie(e);
          const l = n ? Ce : Pe,
            u = xe({
              collapseWhitespace: o,
              trim: a,
              normalizer: i
            });
          return Array.from(e.querySelectorAll("input,textarea,select")).filter((e => "SELECT" === e.tagName ? Array.from(e.options).filter((e => e.selected)).some((e => l(Oe(e), e, t, u))) : l(e.value, e, t, u)))
        },
        vt = $e(ht, ht.name, "queryAll"),
        [gt, wt, Pt, Ct, Et] = Ve(ht, ((e, t) => "Found multiple elements with the display value: " + t + "."), ((e, t) => "Unable to find an element with the display value: " + t + ".")),
        xt = /^(img|input|area|.+-.+)$/i,
        qt = function(e, t, r) {
          return void 0 === r && (r = {}), ie(e), Ue("alt", e, t, r).filter((e => xt.test(e.tagName)))
        },
        Ot = $e(qt, qt.name, "queryAll"),
        [St, Rt, _t, jt, Mt] = Ve(qt, ((e, t) => "Found multiple elements with the alt text: " + t), ((e, t) => "Unable to find an element with the alt text: " + t)),
        At = function(e, t, r) {
          let {
            exact: n = !0,
            collapseWhitespace: o,
            trim: a,
            normalizer: i
          } = void 0 === r ? {} : r;
          ie(e);
          const l = n ? Ce : Pe,
            u = xe({
              collapseWhitespace: o,
              trim: a,
              normalizer: i
            });
          return Array.from(e.querySelectorAll("[title], svg > title")).filter((e => l(e.getAttribute("title"), e, t, u) || (e => {
            var t;
            return "title" === e.tagName.toLowerCase() && "svg" === (null == (t = e.parentElement) ? void 0 : t.tagName.toLowerCase())
          })(e) && l(Oe(e), e, t, u)))
        },
        Tt = $e(At, At.name, "queryAll"),
        [It, kt, Nt, Ft, Bt] = Ve(At, ((e, t) => "Found multiple elements with the title: " + t + "."), ((e, t) => "Unable to find an element with the title: " + t + ".")),
        Lt = function(e, t, r) {
          let {
            hidden: n = me().defaultHidden,
            name: o,
            description: a,
            queryFallbacks: i = !1,
            selected: l,
            busy: u,
            checked: s,
            pressed: c,
            current: d,
            level: p,
            expanded: f,
            value: {
              now: m,
              min: b,
              max: y,
              text: h
            } = {}
          } = void 0 === r ? {} : r;
          var v, g, w, P, C, E, x, q, O, S;
          if (ie(e), void 0 !== l && void 0 === (null == (v = N.Ot.get(t)) ? void 0 : v.props["aria-selected"])) throw new Error('"aria-selected" is not supported on role "' + t + '".');
          if (void 0 !== u && void 0 === (null == (g = N.Ot.get(t)) ? void 0 : g.props["aria-busy"])) throw new Error('"aria-busy" is not supported on role "' + t + '".');
          if (void 0 !== s && void 0 === (null == (w = N.Ot.get(t)) ? void 0 : w.props["aria-checked"])) throw new Error('"aria-checked" is not supported on role "' + t + '".');
          if (void 0 !== c && void 0 === (null == (P = N.Ot.get(t)) ? void 0 : P.props["aria-pressed"])) throw new Error('"aria-pressed" is not supported on role "' + t + '".');
          if (void 0 !== d && void 0 === (null == (C = N.Ot.get(t)) ? void 0 : C.props["aria-current"])) throw new Error('"aria-current" is not supported on role "' + t + '".');
          if (void 0 !== p && "heading" !== t) throw new Error('Role "' + t + '" cannot have "level" property.');
          if (void 0 !== m && void 0 === (null == (E = N.Ot.get(t)) ? void 0 : E.props["aria-valuenow"])) throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
          if (void 0 !== y && void 0 === (null == (x = N.Ot.get(t)) ? void 0 : x.props["aria-valuemax"])) throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
          if (void 0 !== b && void 0 === (null == (q = N.Ot.get(t)) ? void 0 : q.props["aria-valuemin"])) throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
          if (void 0 !== h && void 0 === (null == (O = N.Ot.get(t)) ? void 0 : O.props["aria-valuetext"])) throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
          if (void 0 !== f && void 0 === (null == (S = N.Ot.get(t)) ? void 0 : S.props["aria-expanded"])) throw new Error('"aria-expanded" is not supported on role "' + t + '".');
          const R = new WeakMap;

          function _(e) {
            return R.has(e) || R.set(e, Re(e)), R.get(e)
          }
          return Array.from(e.querySelectorAll(function(e) {
            var t;
            const r = '*[role~="' + e + '"]',
              n = null != (t = N.wZ.get(e)) ? t : new Set,
              o = new Set(Array.from(n).map((e => {
                let {
                  name: t
                } = e;
                return t
              })));
            return [r].concat(Array.from(o)).join(",")
          }(t))).filter((e => {
            if (e.hasAttribute("role")) {
              const r = e.getAttribute("role");
              if (i) return r.split(" ").filter(Boolean).some((e => e === t));
              const [n] = r.split(" ");
              return n === t
            }
            return je(e).some((e => e === t))
          })).filter((e => {
            if (void 0 !== l) return l === function(e) {
              return "OPTION" === e.tagName ? e.selected : Me(e, "aria-selected")
            }(e);
            if (void 0 !== u) return u === function(e) {
              return "true" === e.getAttribute("aria-busy")
            }(e);
            if (void 0 !== s) return s === function(e) {
              if (!("indeterminate" in e) || !e.indeterminate) return "checked" in e ? e.checked : Me(e, "aria-checked")
            }(e);
            if (void 0 !== c) return c === function(e) {
              return Me(e, "aria-pressed")
            }(e);
            if (void 0 !== d) return d === function(e) {
              var t, r;
              return null != (t = null != (r = Me(e, "aria-current")) ? r : e.getAttribute("aria-current")) && t
            }(e);
            if (void 0 !== f) return f === function(e) {
              return Me(e, "aria-expanded")
            }(e);
            if (void 0 !== p) return p === function(e) {
              return e.getAttribute("aria-level") && Number(e.getAttribute("aria-level")) || {
                H1: 1,
                H2: 2,
                H3: 3,
                H4: 4,
                H5: 5,
                H6: 6
              } [e.tagName]
            }(e);
            if (void 0 !== m || void 0 !== y || void 0 !== b || void 0 !== h) {
              let r = !0;
              var t;
              return void 0 !== m && r && (r = m === function(e) {
                const t = e.getAttribute("aria-valuenow");
                return null === t ? void 0 : +t
              }(e)), void 0 !== y && r && (r = y === function(e) {
                const t = e.getAttribute("aria-valuemax");
                return null === t ? void 0 : +t
              }(e)), void 0 !== b && r && (r = b === function(e) {
                const t = e.getAttribute("aria-valuemin");
                return null === t ? void 0 : +t
              }(e)), void 0 !== h && r && (r = Ce(null != (t = function(e) {
                const t = e.getAttribute("aria-valuetext");
                return null === t ? void 0 : t
              }(e)) ? t : null, e, h, (e => e))), r
            }
            return !0
          })).filter((e => void 0 === o || Ce(k(e, {
            computedStyleSupportsPseudoElements: me().computedStyleSupportsPseudoElements
          }), e, o, (e => e)))).filter((e => void 0 === a || Ce(I(e, {
            computedStyleSupportsPseudoElements: me().computedStyleSupportsPseudoElements
          }), e, a, (e => e)))).filter((e => !1 !== n || !1 === _e(e, {
            isSubtreeInaccessible: _
          })))
        },
        Ut = e => {
          let t = "";
          return t = void 0 === e ? "" : "string" == typeof e ? ' and name "' + e + '"' : " and name `" + e + "`", t
        },
        Dt = $e(Lt, Lt.name, "queryAll"),
        [Ht, Wt, zt, $t, Vt] = Ve(Lt, (function(e, t, r) {
          let {
            name: n
          } = void 0 === r ? {} : r;
          return 'Found multiple elements with the role "' + t + '"' + Ut(n)
        }), (function(e, t, r) {
          let {
            hidden: n = me().defaultHidden,
            name: o,
            description: a
          } = void 0 === r ? {} : r;
          if (me()._disableExpensiveErrorDiagnostics) return 'Unable to find role="' + t + '"' + Ut(o);
          let i, l = "";
          Array.from(e.children).forEach((e => {
            l += function(e, t) {
              let {
                hidden: r,
                includeDescription: n
              } = t;
              const o = function(e, t) {
                let {
                  hidden: r = !1
                } = void 0 === t ? {} : t;
                return function e(t) {
                  return [t, ...Array.from(t.children).reduce(((t, r) => [...t, ...e(r)]), [])]
                }(e).filter((e => !1 !== r || !1 === _e(e))).reduce(((e, t) => {
                  let r = [];
                  return r = t.hasAttribute("role") ? t.getAttribute("role").split(" ").slice(0, 1) : je(t), r.reduce(((e, r) => Array.isArray(e[r]) ? {
                    ...e,
                    [r]: [...e[r], t]
                  } : {
                    ...e,
                    [r]: [t]
                  }), e)
                }), {})
              }(e, {
                hidden: r
              });
              return Object.entries(o).filter((e => {
                let [t] = e;
                return "generic" !== t
              })).map((e => {
                let [t, r] = e;
                const o = "-".repeat(50);
                return t + ":\n\n" + r.map((e => {
                  const t = 'Name "' + k(e, {
                      computedStyleSupportsPseudoElements: me().computedStyleSupportsPseudoElements
                    }) + '":\n',
                    r = ce(e.cloneNode(!1));
                  return n ? t + 'Description "' + I(e, {
                    computedStyleSupportsPseudoElements: me().computedStyleSupportsPseudoElements
                  }) + '":\n' + r : "" + t + r
                })).join("\n\n") + "\n\n" + o
              })).join("\n")
            }(e, {
              hidden: n,
              includeDescription: void 0 !== a
            })
          })), i = 0 === l.length ? !1 === n ? "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : "There are no available roles." : ("\nHere are the " + (!1 === n ? "accessible" : "available") + " roles:\n\n  " + l.replace(/\n/g, "\n  ").replace(/\n\s\s\n/g, "\n\n") + "\n").trim();
          let u = "";
          u = void 0 === o ? "" : "string" == typeof o ? ' and name "' + o + '"' : " and name `" + o + "`";
          let s = "";
          return s = void 0 === a ? "" : "string" == typeof a ? ' and description "' + a + '"' : " and description `" + a + "`", ("\nUnable to find an " + (!1 === n ? "accessible " : "") + 'element with the role "' + t + '"' + u + s + "\n\n" + i).trim()
        })),
        Gt = () => me().testIdAttribute,
        Kt = function() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return ie(t[0]), Ue(Gt(), ...t)
        },
        Xt = $e(Kt, Kt.name, "queryAll"),
        [Yt, Jt, Zt, Qt, er] = Ve(Kt, ((e, t) => "Found multiple elements by: [" + Gt() + '="' + t + '"]'), ((e, t) => "Unable to find an element by: [" + Gt() + '="' + t + '"]'));
      var tr = Object.freeze({
        __proto__: null,
        queryAllByLabelText: rt,
        queryByLabelText: Ye,
        getAllByLabelText: et,
        getByLabelText: tt,
        findAllByLabelText: Ze,
        findByLabelText: Qe,
        queryByPlaceholderText: at,
        queryAllByPlaceholderText: ot,
        getByPlaceholderText: lt,
        getAllByPlaceholderText: it,
        findAllByPlaceholderText: ut,
        findByPlaceholderText: st,
        queryByText: pt,
        queryAllByText: dt,
        getByText: mt,
        getAllByText: ft,
        findAllByText: bt,
        findByText: yt,
        queryByDisplayValue: gt,
        queryAllByDisplayValue: vt,
        getByDisplayValue: Pt,
        getAllByDisplayValue: wt,
        findAllByDisplayValue: Ct,
        findByDisplayValue: Et,
        queryByAltText: St,
        queryAllByAltText: Ot,
        getByAltText: _t,
        getAllByAltText: Rt,
        findAllByAltText: jt,
        findByAltText: Mt,
        queryByTitle: It,
        queryAllByTitle: Tt,
        getByTitle: Nt,
        getAllByTitle: kt,
        findAllByTitle: Ft,
        findByTitle: Bt,
        queryByRole: Ht,
        queryAllByRole: Dt,
        getAllByRole: Wt,
        getByRole: zt,
        findAllByRole: $t,
        findByRole: Vt,
        queryByTestId: Yt,
        queryAllByTestId: Xt,
        getByTestId: Zt,
        getAllByTestId: Jt,
        findAllByTestId: Qt,
        findByTestId: er
      });

      function rr(e, t, r) {
        return void 0 === t && (t = tr), void 0 === r && (r = {}), Object.keys(t).reduce(((r, n) => {
          const o = t[n];
          return r[n] = o.bind(null, e), r
        }), r)
      }
      const nr = {
          copy: {
            EventType: "ClipboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          cut: {
            EventType: "ClipboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          paste: {
            EventType: "ClipboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          compositionEnd: {
            EventType: "CompositionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          compositionStart: {
            EventType: "CompositionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          compositionUpdate: {
            EventType: "CompositionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          keyDown: {
            EventType: "KeyboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              charCode: 0,
              composed: !0
            }
          },
          keyPress: {
            EventType: "KeyboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              charCode: 0,
              composed: !0
            }
          },
          keyUp: {
            EventType: "KeyboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              charCode: 0,
              composed: !0
            }
          },
          focus: {
            EventType: "FocusEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1,
              composed: !0
            }
          },
          blur: {
            EventType: "FocusEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1,
              composed: !0
            }
          },
          focusIn: {
            EventType: "FocusEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          focusOut: {
            EventType: "FocusEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          change: {
            EventType: "Event",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          input: {
            EventType: "InputEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          invalid: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !0
            }
          },
          submit: {
            EventType: "Event",
            defaultInit: {
              bubbles: !0,
              cancelable: !0
            }
          },
          reset: {
            EventType: "Event",
            defaultInit: {
              bubbles: !0,
              cancelable: !0
            }
          },
          click: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              button: 0,
              composed: !0
            }
          },
          contextMenu: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          dblClick: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          drag: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          dragEnd: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          dragEnter: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          dragExit: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          dragLeave: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          dragOver: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          dragStart: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          drop: {
            EventType: "DragEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          mouseDown: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          mouseEnter: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1,
              composed: !0
            }
          },
          mouseLeave: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1,
              composed: !0
            }
          },
          mouseMove: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          mouseOut: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          mouseOver: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          mouseUp: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          select: {
            EventType: "Event",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          touchCancel: {
            EventType: "TouchEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          touchEnd: {
            EventType: "TouchEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          touchMove: {
            EventType: "TouchEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          touchStart: {
            EventType: "TouchEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          resize: {
            EventType: "UIEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          scroll: {
            EventType: "UIEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          wheel: {
            EventType: "WheelEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          abort: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          canPlay: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          canPlayThrough: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          durationChange: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          emptied: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          encrypted: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          ended: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          loadedData: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          loadedMetadata: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          loadStart: {
            EventType: "ProgressEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          pause: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          play: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          playing: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          progress: {
            EventType: "ProgressEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          rateChange: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          seeked: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          seeking: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          stalled: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          suspend: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          timeUpdate: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          volumeChange: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          waiting: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          load: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          error: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          animationStart: {
            EventType: "AnimationEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          animationEnd: {
            EventType: "AnimationEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          animationIteration: {
            EventType: "AnimationEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          transitionCancel: {
            EventType: "TransitionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          transitionEnd: {
            EventType: "TransitionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0
            }
          },
          transitionRun: {
            EventType: "TransitionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          transitionStart: {
            EventType: "TransitionEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          pointerOver: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          pointerEnter: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          pointerDown: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          pointerMove: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          pointerUp: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          pointerCancel: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          pointerOut: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            }
          },
          pointerLeave: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          gotPointerCapture: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          lostPointerCapture: {
            EventType: "PointerEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1,
              composed: !0
            }
          },
          popState: {
            EventType: "PopStateEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !1
            }
          },
          offline: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          },
          online: {
            EventType: "Event",
            defaultInit: {
              bubbles: !1,
              cancelable: !1
            }
          }
        },
        or = {
          doubleClick: "dblClick"
        };

      function ar(e, t) {
        return me().eventWrapper((() => {
          if (!t) throw new Error("Unable to fire an event - please provide an event object.");
          if (!e) throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
          return e.dispatchEvent(t)
        }))
      }

      function ir(e, t, r, n) {
        let {
          EventType: o = "Event",
          defaultInit: a = {}
        } = void 0 === n ? {} : n;
        if (!t) throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.');
        const i = {
            ...a,
            ...r
          },
          {
            target: {
              value: l,
              files: u,
              ...s
            } = {}
          } = i;
        void 0 !== l && function(e, t) {
          const {
            set: r
          } = Object.getOwnPropertyDescriptor(e, "value") || {}, n = Object.getPrototypeOf(e), {
            set: o
          } = Object.getOwnPropertyDescriptor(n, "value") || {};
          if (o && r !== o) o.call(e, t);
          else {
            if (!r) throw new Error("The given element does not have a value setter");
            r.call(e, t)
          }
        }(t, l), void 0 !== u && Object.defineProperty(t, "files", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: u
        }), Object.assign(t, s);
        const c = ae(t),
          d = c[o] || c.Event;
        let p;
        if ("function" == typeof d) p = new d(e, i);
        else {
          p = c.document.createEvent(o);
          const {
            bubbles: t,
            cancelable: r,
            detail: n,
            ...a
          } = i;
          p.initEvent(e, t, r, n), Object.keys(a).forEach((e => {
            p[e] = a[e]
          }))
        }
        return ["dataTransfer", "clipboardData"].forEach((e => {
          const t = i[e];
          "object" == typeof t && ("function" == typeof c.DataTransfer ? Object.defineProperty(p, e, {
            value: Object.getOwnPropertyNames(t).reduce(((e, r) => (Object.defineProperty(e, r, {
              value: t[r]
            }), e)), new c.DataTransfer)
          }) : Object.defineProperty(p, e, {
            value: t
          }))
        })), p
      }
      Object.keys(nr).forEach((e => {
        const {
          EventType: t,
          defaultInit: r
        } = nr[e], n = e.toLowerCase();
        ir[e] = (e, o) => ir(n, e, o, {
          EventType: t,
          defaultInit: r
        }), ar[e] = (t, r) => ar(t, ir[e](t, r))
      })), Object.keys(or).forEach((e => {
        const t = or[e];
        ar[e] = function() {
          return ar[t](...arguments)
        }
      }));
      const lr = {
          debug: (e, t, r) => Array.isArray(e) ? e.forEach((e => de(e, t, r))) : de(e, t, r),
          logTestingPlaygroundURL: function(e) {
            if (void 0 === e && (e = oe().body), !e || !("innerHTML" in e)) return void console.log("The element you're providing isn't a valid DOM element.");
            if (!e.innerHTML) return void console.log("The provided element doesn't have any children.");
            const t = (r = e.innerHTML, "https://testing-playground.com/#markup=" + (n = r, B().compressToEncodedURIComponent(n.replace(/[ \t]*[\n][ \t]*/g, "\n"))));
            var r, n;
            return console.log("Open this URL in your browser\n\n" + t), t
          }
        },
        ur = "undefined" != typeof document && document.body ? rr(document.body, tr, lr) : Object.keys(tr).reduce(((e, t) => (e[t] = () => {
          throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error")
        }, e)), lr)
    },
    33721: e => {
      "use strict";
      var t = Object.defineProperty || !1;
      if (t) try {
        t({}, "a", {
          value: 1
        })
      } catch (e) {
        t = !1
      }
      e.exports = t
    },
    33795: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(357),
        o = "undefined" != typeof globalThis ? globalThis : void 0 !== o ? o : "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")(),
        a = o["jest-symbol-do-not-touch"] || o.Symbol;
      const i = "function" == typeof a && a.for ? a.for("jest.asymmetricMatcher") : 1267621,
        l = (e, t, r, o, a, i) => {
          const l = e.toString();
          return "ArrayContaining" === l || "ArrayNotContaining" === l ? ++o > t.maxDepth ? "[" + l + "]" : l + " [" + (0, n.printListItems)(e.sample, t, r, o, a, i) + "]" : "ObjectContaining" === l || "ObjectNotContaining" === l ? ++o > t.maxDepth ? "[" + l + "]" : l + " {" + (0, n.printObjectProperties)(e.sample, t, r, o, a, i) + "}" : "StringMatching" === l || "StringNotMatching" === l || "StringContaining" === l || "StringNotContaining" === l ? l + " " + i(e.sample, t, r, o, a) : e.toAsymmetricMatcher()
        };
      t.serialize = l;
      const u = e => e && e.$$typeof === i;
      t.test = u;
      var s = {
        serialize: l,
        test: u
      };
      t.default = s
    },
    33898: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = function(e, t) {
          if (e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var r = a(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              l && (l.get || l.set) ? Object.defineProperty(n, i, l) : n[i] = e[i]
            } return n.default = e, r && r.set(e, n), n
        }(r(67451)),
        o = r(53699);

      function a(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          r = new WeakMap;
        return (a = function(e) {
          return e ? r : t
        })(e)
      }
      const i = (e, t = []) => (Array.isArray(e) ? e.forEach((e => {
          i(e, t)
        })) : null != e && !1 !== e && t.push(e), t),
        l = e => {
          const t = e.type;
          if ("string" == typeof t) return t;
          if ("function" == typeof t) return t.displayName || t.name || "Unknown";
          if (n.isFragment(e)) return "React.Fragment";
          if (n.isSuspense(e)) return "React.Suspense";
          if ("object" == typeof t && null !== t) {
            if (n.isContextProvider(e)) return "Context.Provider";
            if (n.isContextConsumer(e)) return "Context.Consumer";
            if (n.isForwardRef(e)) {
              if (t.displayName) return t.displayName;
              const e = t.render.displayName || t.render.name || "";
              return "" !== e ? "ForwardRef(" + e + ")" : "ForwardRef"
            }
            if (n.isMemo(e)) {
              const e = t.displayName || t.type.displayName || t.type.name || "";
              return "" !== e ? "Memo(" + e + ")" : "Memo"
            }
          }
          return "UNDEFINED"
        },
        u = (e, t, r, n, a, u) => ++n > t.maxDepth ? (0, o.printElementAsLeaf)(l(e), t) : (0, o.printElement)(l(e), (0, o.printProps)((e => {
          const {
            props: t
          } = e;
          return Object.keys(t).filter((e => "children" !== e && void 0 !== t[e])).sort()
        })(e), e.props, t, r + t.indent, n, a, u), (0, o.printChildren)(i(e.props.children), t, r + t.indent, n, a, u), t, r);
      t.serialize = u;
      const s = e => null != e && n.isElement(e);
      t.test = s;
      var c = {
        serialize: u,
        test: s
      };
      t.default = c
    },
    34030: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    34088: e => {
      "use strict";
      var t, r = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap : null,
        n = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet : null;
      r || (t = function(e) {
        return !1
      });
      var o = r ? r.prototype.has : null,
        a = n ? n.prototype.has : null;
      t || o || (t = function(e) {
        return !1
      }), e.exports = t || function(e) {
        if (!e || "object" != typeof e) return !1;
        try {
          if (o.call(e, o), a) try {
            a.call(e, a)
          } catch (e) {
            return !0
          }
          return e instanceof r
        } catch (e) {}
        return !1
      }
    },
    34451: (e, t, r) => {
      "use strict";
      e = r.nmd(e);
      const n = (e = 0) => t => `[${38+e};5;${t}m`,
        o = (e = 0) => (t, r, n) => `[${38+e};2;${t};${r};${n}m`;
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        get: function() {
          const e = new Map,
            t = {
              modifier: {
                reset: [0, 0],
                bold: [1, 22],
                dim: [2, 22],
                italic: [3, 23],
                underline: [4, 24],
                overline: [53, 55],
                inverse: [7, 27],
                hidden: [8, 28],
                strikethrough: [9, 29]
              },
              color: {
                black: [30, 39],
                red: [31, 39],
                green: [32, 39],
                yellow: [33, 39],
                blue: [34, 39],
                magenta: [35, 39],
                cyan: [36, 39],
                white: [37, 39],
                blackBright: [90, 39],
                redBright: [91, 39],
                greenBright: [92, 39],
                yellowBright: [93, 39],
                blueBright: [94, 39],
                magentaBright: [95, 39],
                cyanBright: [96, 39],
                whiteBright: [97, 39]
              },
              bgColor: {
                bgBlack: [40, 49],
                bgRed: [41, 49],
                bgGreen: [42, 49],
                bgYellow: [43, 49],
                bgBlue: [44, 49],
                bgMagenta: [45, 49],
                bgCyan: [46, 49],
                bgWhite: [47, 49],
                bgBlackBright: [100, 49],
                bgRedBright: [101, 49],
                bgGreenBright: [102, 49],
                bgYellowBright: [103, 49],
                bgBlueBright: [104, 49],
                bgMagentaBright: [105, 49],
                bgCyanBright: [106, 49],
                bgWhiteBright: [107, 49]
              }
            };
          t.color.gray = t.color.blackBright, t.bgColor.bgGray = t.bgColor.bgBlackBright, t.color.grey = t.color.blackBright, t.bgColor.bgGrey = t.bgColor.bgBlackBright;
          for (const [r, n] of Object.entries(t)) {
            for (const [r, o] of Object.entries(n)) t[r] = {
              open: `[${o[0]}m`,
              close: `[${o[1]}m`
            }, n[r] = t[r], e.set(o[0], o[1]);
            Object.defineProperty(t, r, {
              value: n,
              enumerable: !1
            })
          }
          return Object.defineProperty(t, "codes", {
            value: e,
            enumerable: !1
          }), t.color.close = "[39m", t.bgColor.close = "[49m", t.color.ansi256 = n(), t.color.ansi16m = o(), t.bgColor.ansi256 = n(10), t.bgColor.ansi16m = o(10), Object.defineProperties(t, {
            rgbToAnsi256: {
              value: (e, t, r) => e === t && t === r ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(t / 255 * 5) + Math.round(r / 255 * 5),
              enumerable: !1
            },
            hexToRgb: {
              value: e => {
                const t = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(e.toString(16));
                if (!t) return [0, 0, 0];
                let {
                  colorString: r
                } = t.groups;
                3 === r.length && (r = r.split("").map((e => e + e)).join(""));
                const n = Number.parseInt(r, 16);
                return [n >> 16 & 255, n >> 8 & 255, 255 & n]
              },
              enumerable: !1
            },
            hexToAnsi256: {
              value: e => t.rgbToAnsi256(...t.hexToRgb(e)),
              enumerable: !1
            }
          }), t
        }
      })
    },
    35461: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-valuetext": null,
          "aria-orientation": "horizontal",
          "aria-valuemax": "100",
          "aria-valuemin": "0"
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "type",
              value: "range"
            }],
            name: "input"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-valuenow": null
        },
        superClass: [
          ["roletype", "widget", "input"],
          ["roletype", "structure", "range"]
        ]
      }
    },
    35732: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-label"
            }],
            name: "section"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-labelledby"
            }],
            name: "section"
          },
          module: "HTML"
        }, {
          concept: {
            name: "Device Independence Glossart perceivable unit"
          }
        }, {
          concept: {
            name: "frame"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    36413: (e, t, r) => {
      "use strict";
      var n;
      if (!Object.keys) {
        var o = Object.prototype.hasOwnProperty,
          a = Object.prototype.toString,
          i = r(23283),
          l = Object.prototype.propertyIsEnumerable,
          u = !l.call({
            toString: null
          }, "toString"),
          s = l.call((function() {}), "prototype"),
          c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
          d = function(e) {
            var t = e.constructor;
            return t && t.prototype === e
          },
          p = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
          },
          f = function() {
            if ("undefined" == typeof window) return !1;
            for (var e in window) try {
              if (!p["$" + e] && o.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                d(window[e])
              } catch (e) {
                return !0
              }
            } catch (e) {
              return !0
            }
            return !1
          }();
        n = function(e) {
          var t = null !== e && "object" == typeof e,
            r = "[object Function]" === a.call(e),
            n = i(e),
            l = t && "[object String]" === a.call(e),
            p = [];
          if (!t && !r && !n) throw new TypeError("Object.keys called on a non-object");
          var m = s && r;
          if (l && e.length > 0 && !o.call(e, 0))
            for (var b = 0; b < e.length; ++b) p.push(String(b));
          if (n && e.length > 0)
            for (var y = 0; y < e.length; ++y) p.push(String(y));
          else
            for (var h in e) m && "prototype" === h || !o.call(e, h) || p.push(String(h));
          if (u)
            for (var v = function(e) {
                if ("undefined" == typeof window || !f) return d(e);
                try {
                  return d(e)
                } catch (e) {
                  return !1
                }
              }(e), g = 0; g < c.length; ++g) v && "constructor" === c[g] || !o.call(e, c[g]) || p.push(c[g]);
          return p
        }
      }
      e.exports = n
    },
    36883: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(53699);
      const o = /^((HTML|SVG)\w*)?Element$/,
        a = e => {
          var t;
          return (null == e || null === (t = e.constructor) || void 0 === t ? void 0 : t.name) && (e => {
            const t = e.constructor.name,
              {
                nodeType: r,
                tagName: n
              } = e,
              a = "string" == typeof n && n.includes("-") || (e => {
                try {
                  return "function" == typeof e.hasAttribute && e.hasAttribute("is")
                } catch {
                  return !1
                }
              })(e);
            return 1 === r && (o.test(t) || a) || 3 === r && "Text" === t || 8 === r && "Comment" === t || 11 === r && "DocumentFragment" === t
          })(e)
        };

      function i(e) {
        return 11 === e.nodeType
      }
      t.test = a;
      const l = (e, t, r, o, a, l) => {
        if (function(e) {
            return 3 === e.nodeType
          }(e)) return (0, n.printText)(e.data, t);
        if (function(e) {
            return 8 === e.nodeType
          }(e)) return (0, n.printComment)(e.data, t);
        const u = i(e) ? "DocumentFragment" : e.tagName.toLowerCase();
        return ++o > t.maxDepth ? (0, n.printElementAsLeaf)(u, t) : (0, n.printElement)(u, (0, n.printProps)(i(e) ? [] : Array.from(e.attributes).map((e => e.name)).sort(), i(e) ? {} : Array.from(e.attributes).reduce(((e, t) => (e[t.name] = t.value, e)), {}), t, r + t.indent, o, a, l), (0, n.printChildren)(Array.prototype.slice.call(e.childNodes || e.children), t, r + t.indent, o, a, l), t, r)
      };
      t.serialize = l;
      var u = {
        serialize: l,
        test: a
      };
      t.default = u
    },
    36925: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "alt"
            }],
            name: "img"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "alt"
            }],
            name: "img"
          },
          module: "HTML"
        }, {
          concept: {
            name: "imggroup"
          },
          module: "DTB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    37466: (e, t, r) => {
      "use strict";
      var n = r(70315),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
        a = Object.prototype.toString,
        i = Array.prototype.concat,
        l = r(88479),
        u = r(43706)(),
        s = function(e, t, r, n) {
          if (t in e)
            if (!0 === n) {
              if (e[t] === r) return
            } else if ("function" != typeof(o = n) || "[object Function]" !== a.call(o) || !n()) return;
          var o;
          u ? l(e, t, r, !0) : l(e, t, r)
        },
        c = function(e, t) {
          var r = arguments.length > 2 ? arguments[2] : {},
            a = n(t);
          o && (a = i.call(a, Object.getOwnPropertySymbols(t)));
          for (var l = 0; l < a.length; l += 1) s(e, a[l], t[a[l]], r[a[l]])
        };
      c.supportsDescriptors = !!u, e.exports = c
    },
    38282: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-autocomplete": null,
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-multiline": null,
          "aria-placeholder": null,
          "aria-readonly": null,
          "aria-required": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "type"
            }, {
              constraints: ["undefined"],
              name: "list"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "email"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "tel"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "text"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "url"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            name: "input"
          },
          module: "XForms"
        }, {
          concept: {
            name: "textarea"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "input"]
        ]
      }
    },
    39202: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            constraints: ["direct descendant of document"],
            name: "header"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    39378: (e, t, r) => {
      "use strict";
      var n = r(72914)(),
        o = r(57126)("Object.prototype.toString"),
        a = function(e) {
          return !(n && e && "object" == typeof e && Symbol.toStringTag in e) && "[object Arguments]" === o(e)
        },
        i = function(e) {
          return !!a(e) || null !== e && "object" == typeof e && "length" in e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== o(e) && "callee" in e && "[object Function]" === o(e.callee)
        },
        l = function() {
          return a(arguments)
        }();
      a.isLegacyArguments = i, e.exports = l ? a : i
    },
    39997: (e, t, r) => {
      "use strict";
      var n = r(24719);
      if (n) try {
        n([], "length")
      } catch (e) {
        n = null
      }
      e.exports = n
    },
    40294: (e, t, r) => {
      "use strict";
      var n = r(37466),
        o = r(1164);
      e.exports = function() {
        var e = o();
        return n(Object, {
          assign: e
        }, {
          assign: function() {
            return Object.assign !== e
          }
        }), e
      }
    },
    40693: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-disabled": null
        },
        relatedConcepts: [{
          concept: {
            name: "details"
          },
          module: "HTML"
        }, {
          concept: {
            name: "fieldset"
          },
          module: "HTML"
        }, {
          concept: {
            name: "optgroup"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    40748: (e, t, r) => {
      "use strict";
      var n = r(44853);
      t.H = n.createRoot, t.c = n.hydrateRoot
    },
    41782: e => {
      "use strict";
      e.exports = "undefined" != typeof Reflect && Reflect.getPrototypeOf || null
    },
    43328: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-colindex": null,
          "aria-colspan": null,
          "aria-rowindex": null,
          "aria-rowspan": null
        },
        relatedConcepts: [{
          concept: {
            constraints: ["descendant of table"],
            name: "td"
          },
          module: "HTML"
        }],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    43706: (e, t, r) => {
      "use strict";
      var n = r(33721),
        o = function() {
          return !!n
        };
      o.hasArrayLengthDefineBug = function() {
        if (!n) return null;
        try {
          return 1 !== n([], "length", {
            value: 1
          }).length
        } catch (e) {
          return !0
        }
      }, e.exports = o
    },
    43855: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    44505: (e, t, r) => {
      "use strict";
      var n = "undefined" != typeof Symbol && Symbol,
        o = r(50811);
      e.exports = function() {
        return "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && o()
      }
    },
    44908: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-live": "polite"
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    45113: (e, t, r) => {
      "use strict";
      var n = r(70687),
        o = r(33721),
        a = r(80064),
        i = r(57979);
      e.exports = function(e) {
        var t = a(arguments),
          r = e.length - (arguments.length - 1);
        return n(t, 1 + (r > 0 ? r : 0), !0)
      }, o ? o(e.exports, "apply", {
        value: i
      }) : e.exports.apply = i
    },
    45236: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["row"],
          ["row", "rowgroup"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "grid"],
          ["roletype", "structure", "section", "table", "grid"],
          ["roletype", "widget", "composite", "select", "tree"],
          ["roletype", "structure", "section", "group", "select", "tree"]
        ]
      }
    },
    45722: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-colcount": null,
          "aria-rowcount": null
        },
        relatedConcepts: [{
          concept: {
            name: "table"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["row"],
          ["row", "rowgroup"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    45760: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function() {
        var e = this,
          t = 0,
          r = {
            "@@iterator": function() {
              return r
            },
            next: function() {
              if (t < e.length) {
                var r = e[t];
                return t += 1, {
                  done: !1,
                  value: r
                }
              }
              return {
                done: !0
              }
            }
          };
        return r
      }
    },
    45853: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "page-list [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark", "navigation"]
        ]
      }
    },
    45970: (e, t, r) => {
      "use strict";
      var n = r(6529),
        o = r(5361),
        a = r(11093),
        i = r(54533),
        l = r(23953) || i || a;
      e.exports = function() {
        var e, t = {
          assert: function(e) {
            if (!t.has(e)) throw new n("Side channel does not contain " + o(e))
          },
          delete: function(t) {
            return !!e && e.delete(t)
          },
          get: function(t) {
            return e && e.get(t)
          },
          has: function(t) {
            return !!e && e.has(t)
          },
          set: function(t, r) {
            e || (e = l()), e.set(t, r)
          }
        };
        return t
      }
    },
    45997: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "pullquote [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["none"]
        ]
      }
    },
    46004: (e, t, r) => {
      "use strict";
      var n = r(22465),
        o = r(37466).supportsDescriptors,
        a = Object.getOwnPropertyDescriptor;
      e.exports = function() {
        if (o && "gim" === /a/gim.flags) {
          var e = a(RegExp.prototype, "flags");
          if (e && "function" == typeof e.get && "dotAll" in RegExp.prototype && "hasIndices" in RegExp.prototype) {
            var t = "",
              r = {};
            if (Object.defineProperty(r, "hasIndices", {
                get: function() {
                  t += "d"
                }
              }), Object.defineProperty(r, "sticky", {
                get: function() {
                  t += "y"
                }
              }), e.get.call(r), "dy" === t) return e.get
          }
        }
        return n
      }
    },
    46511: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        },
        o = function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        }(),
        a = f(r(62229)),
        i = f(r(18626)),
        l = f(r(2851)),
        u = f(r(88694)),
        s = f(r(4246)),
        c = f(r(6451)),
        d = f(r(93677)),
        p = r(67354);

      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function m(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function b(e, t) {
        return e.scrollHeight - 1 <= t
      }
      var y = function(e) {
        function t(e) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var r = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return r.state = {
            fontSize: null,
            ready: !1
          }, r.handleWindowResize = function() {
            r.process()
          }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), r.handleWindowResize = (0, c.default)(r.handleWindowResize, e.throttle), r
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), o(t, [{
          key: "componentDidMount",
          value: function() {
            this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            this.state.ready && ((0, l.default)(this.props, e) || this.process())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, d.default)()
          }
        }, {
          key: "process",
          value: function() {
            var e = this,
              t = this.props,
              r = t.min,
              n = t.max,
              o = t.mode,
              a = t.forceSingleModeWidth,
              i = t.onReady,
              l = this._parent,
              c = this._child,
              f = (0, p.innerWidth)(l),
              y = (0, p.innerHeight)(l);
            if (y <= 0 || isNaN(y)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (f <= 0 || isNaN(f)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var h = (0, d.default)();
              this.pid = h;
              var v = function() {
                  return h !== e.pid
                },
                g = "multi" === o ? function() {
                  return b(c, y)
                } : function() {
                  return m(c, f)
                },
                w = "multi" === o ? function() {
                  return m(c, f)
                } : function() {
                  return b(c, y)
                },
                P = void 0,
                C = r,
                E = n;
              this.setState({
                ready: !1
              }), (0, u.default)([function(t) {
                return (0, s.default)((function() {
                  return C <= E
                }), (function(t) {
                  if (v()) return t(!0);
                  P = parseInt((C + E) / 2, 10), e.setState({
                    fontSize: P
                  }, (function() {
                    return v() ? t(!0) : (g() ? C = P + 1 : E = P - 1, t())
                  }))
                }), t)
              }, function(t) {
                return "single" === o && a || w() ? t() : (C = r, E = P, (0, s.default)((function() {
                  return C < E
                }), (function(t) {
                  if (v()) return t(!0);
                  P = parseInt((C + E) / 2, 10), e.setState({
                    fontSize: P
                  }, (function() {
                    return h !== e.pid ? t(!0) : (w() ? C = P + 1 : E = P - 1, t())
                  }))
                }), t))
              }, function(t) {
                if (P = Math.min(C, E), P = Math.max(P, r), P = Math.min(P, n), P = Math.max(P, 0), v()) return t(!0);
                e.setState({
                  fontSize: P
                }, t)
              }], (function(t) {
                t || v() || e.setState({
                  ready: !0
                }, (function() {
                  return i(P)
                }))
              }))
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              r = t.children,
              o = t.text,
              i = t.style,
              l = (t.min, t.max, t.mode),
              u = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var r = {};
                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                return r
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              s = this.state,
              c = s.fontSize,
              d = s.ready,
              p = n({}, i, {
                fontSize: c
              }),
              f = {
                display: d ? "block" : "inline-block"
              };
            return "single" === l && (f.whiteSpace = "nowrap"), a.default.createElement("div", n({
              ref: function(t) {
                return e._parent = t
              },
              style: p
            }, u), a.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: f
            }, o && "function" == typeof r ? d ? r(o) : o : r))
          }
        }]), t
      }(a.default.Component);
      y.propTypes = {
        children: i.default.node,
        text: i.default.string,
        min: i.default.number,
        max: i.default.number,
        mode: i.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: i.default.bool,
        throttle: i.default.number,
        onReady: i.default.func
      }, y.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, t.default = y
    },
    47034: (e, t, r) => {
      "use strict";
      var n = r(57126),
        o = n("Object.prototype.toString"),
        a = r(44505)(),
        i = r(7211);
      if (a) {
        var l = n("Symbol.prototype.toString"),
          u = i(/^Symbol\(.*\)$/);
        e.exports = function(e) {
          if ("symbol" == typeof e) return !0;
          if (!e || "object" != typeof e || "[object Symbol]" !== o(e)) return !1;
          try {
            return function(e) {
              return "symbol" == typeof e.valueOf() && u(l(e))
            }(e)
          } catch (e) {
            return !1
          }
        }
      } else e.exports = function(e) {
        return !1
      }
    },
    47933: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    48358: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    48516: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "index [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark", "navigation"]
        ]
      }
    },
    49109: (e, t, r) => {
      "use strict";
      var n = r(73972),
        o = "undefined" == typeof globalThis ? r.g : globalThis;
      e.exports = function() {
        for (var e = [], t = 0; t < n.length; t++) "function" == typeof o[n[t]] && (e[e.length] = n[t]);
        return e
      }
    },
    49272: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        return "function" == typeof Symbol && "symbol" === a(Symbol.iterator) && Object.defineProperty(e, Symbol.iterator, {
          value: o.default.bind(t)
        }), e
      };
      var n, o = (n = r(45760)) && n.__esModule ? n : {
        default: n
      };

      function a(e) {
        return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, a(e)
      }
    },
    49509: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          module: "DAISY Guide"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "list"]
        ]
      }
    },
    49529: (e, t, r) => {
      "use strict";
      var n = r(91995),
        o = r(45113),
        a = o(n("String.prototype.indexOf"));
      e.exports = function(e, t) {
        var r = n(e, !!t);
        return "function" == typeof r && a(e, ".prototype.") > -1 ? o(r) : r
      }
    },
    49552: e => {
      "use strict";
      e.exports = Math.min
    },
    49899: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["undefined"],
              name: "list"
            }, {
              name: "type",
              value: "search"
            }],
            name: "input"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "input", "textbox"]
        ]
      }
    },
    50708: (e, t, r) => {
      "use strict";
      var n = r(85345);
      e.exports = function() {
        return "function" == typeof Object.is ? Object.is : n
      }
    },
    50784: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-multiselectable": null,
          "aria-required": null,
          "aria-orientation": "vertical"
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["treeitem", "group"],
          ["treeitem"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"]
        ]
      }
    },
    50795: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-orientation": "vertical"
        },
        relatedConcepts: [{
          concept: {
            name: "MENU"
          },
          module: "JAPI"
        }, {
          concept: {
            name: "list"
          },
          module: "ARIA"
        }, {
          concept: {
            name: "select"
          },
          module: "XForms"
        }, {
          concept: {
            name: "sidebar"
          },
          module: "DTB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["menuitem", "group"],
          ["menuitemradio", "group"],
          ["menuitemcheckbox", "group"],
          ["menuitem"],
          ["menuitemcheckbox"],
          ["menuitemradio"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"]
        ]
      }
    },
    50811: e => {
      "use strict";
      e.exports = function() {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var e = {},
          t = Symbol("test"),
          r = Object(t);
        if ("string" == typeof t) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
        for (var n in e[t] = 42, e) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
        var o = Object.getOwnPropertySymbols(e);
        if (1 !== o.length || o[0] !== t) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var a = Object.getOwnPropertyDescriptor(e, t);
          if (42 !== a.value || !0 !== a.enumerable) return !1
        }
        return !0
      }
    },
    50959: (e, t, r) => {
      "use strict";
      var n = r(37466),
        o = r(45113),
        a = r(22465),
        i = r(46004),
        l = r(80030),
        u = o(i());
      n(u, {
        getPolyfill: i,
        implementation: a,
        shim: l
      }), e.exports = u
    },
    51272: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["article"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "list"]
        ]
      }
    },
    52776: e => {
      "use strict";
      var t = "undefined" != typeof BigInt && BigInt;
      e.exports = function() {
        return "function" == typeof t && "function" == typeof BigInt && "bigint" == typeof t(42) && "bigint" == typeof BigInt(42)
      }
    },
    53166: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "epigraph [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    53257: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "Device Independence Delivery Unit"
          }
        }, {
          concept: {
            name: "body"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    53616: (e, t, r) => {
      "use strict";
      var n = r(62759),
        o = r(49529),
        a = r(50959),
        i = r(91995),
        l = r(21572),
        u = r(45970),
        s = r(7215),
        c = r(39378),
        d = r(54676),
        p = r(4864),
        f = r(80430),
        m = r(15577),
        b = r(26892),
        y = r(70315),
        h = r(18473),
        v = r(93247),
        g = r(68645),
        w = r(75573),
        P = o("SharedArrayBuffer.prototype.byteLength", !0),
        C = o("Date.prototype.getTime"),
        E = Object.getPrototypeOf,
        x = o("Object.prototype.toString"),
        q = i("%Set%", !0),
        O = o("Map.prototype.has", !0),
        S = o("Map.prototype.get", !0),
        R = o("Map.prototype.size", !0),
        _ = o("Set.prototype.add", !0),
        j = o("Set.prototype.delete", !0),
        M = o("Set.prototype.has", !0),
        A = o("Set.prototype.size", !0);

      function T(e, t, r, n) {
        for (var o, a = l(e);
          (o = a.next()) && !o.done;)
          if (B(t, o.value, r, n)) return j(e, o.value), !0;
        return !1
      }

      function I(e) {
        return void 0 === e ? null : "object" != typeof e ? "symbol" != typeof e && ("string" != typeof e && "number" != typeof e || +e == +e) : void 0
      }

      function k(e, t, r, o, a, i) {
        var l = I(r);
        if (null != l) return l;
        var u = S(t, l),
          s = n({}, a, {
            strict: !1
          });
        return !(void 0 === u && !O(t, l) || !B(o, u, s, i)) && !O(e, l) && B(o, u, s, i)
      }

      function N(e, t, r) {
        var n = I(r);
        return null != n ? n : M(t, n) && !M(e, n)
      }

      function F(e, t, r, n, o, a) {
        for (var i, u, s = l(e);
          (i = s.next()) && !i.done;)
          if (B(r, u = i.value, o, a) && B(n, S(t, u), o, a)) return j(e, u), !0;
        return !1
      }

      function B(e, t, r, o) {
        var i = r || {};
        if (i.strict ? s(e, t) : e === t) return !0;
        if (h(e) !== h(t)) return !1;
        if (!e || !t || "object" != typeof e && "object" != typeof t) return i.strict ? s(e, t) : e == t;
        var u, j = o.has(e),
          I = o.has(t);
        if (j && I) {
          if (o.get(e) === o.get(t)) return !0
        } else u = {};
        return j || o.set(e, u), I || o.set(t, u),
          function(e, t, r, o) {
            var i, u;
            if (typeof e != typeof t) return !1;
            if (null == e || null == t) return !1;
            if (x(e) !== x(t)) return !1;
            if (c(e) !== c(t)) return !1;
            if (d(e) !== d(t)) return !1;
            var s = e instanceof Error,
              h = t instanceof Error;
            if (s !== h) return !1;
            if ((s || h) && (e.name !== t.name || e.message !== t.message)) return !1;
            var j = m(e),
              I = m(t);
            if (j !== I) return !1;
            if ((j || I) && (e.source !== t.source || a(e) !== a(t))) return !1;
            var U = f(e),
              D = f(t);
            if (U !== D) return !1;
            if ((U || D) && C(e) !== C(t)) return !1;
            if (r.strict && E && E(e) !== E(t)) return !1;
            var H = g(e),
              W = g(t);
            if (H !== W) return !1;
            if (H || W) {
              if (e.length !== t.length) return !1;
              for (i = 0; i < e.length; i++)
                if (e[i] !== t[i]) return !1;
              return !0
            }
            var z = L(e),
              $ = L(t);
            if (z !== $) return !1;
            if (z || $) {
              if (e.length !== t.length) return !1;
              for (i = 0; i < e.length; i++)
                if (e[i] !== t[i]) return !1;
              return !0
            }
            var V = p(e),
              G = p(t);
            if (V !== G) return !1;
            if (V || G) return w(e) === w(t) && "function" == typeof Uint8Array && B(new Uint8Array(e), new Uint8Array(t), r, o);
            var K = b(e),
              X = b(t);
            if (K !== X) return !1;
            if (K || X) return P(e) === P(t) && "function" == typeof Uint8Array && B(new Uint8Array(e), new Uint8Array(t), r, o);
            if (typeof e != typeof t) return !1;
            var Y = y(e),
              J = y(t);
            if (Y.length !== J.length) return !1;
            for (Y.sort(), J.sort(), i = Y.length - 1; i >= 0; i--)
              if (Y[i] != J[i]) return !1;
            for (i = Y.length - 1; i >= 0; i--)
              if (!B(e[u = Y[i]], t[u], r, o)) return !1;
            var Z = v(e),
              Q = v(t);
            return Z === Q && ("Set" === Z || "Set" === Q ? function(e, t, r, n) {
              if (A(e) !== A(t)) return !1;
              for (var o, a, i, u = l(e), s = l(t);
                (o = u.next()) && !o.done;)
                if (o.value && "object" == typeof o.value) i || (i = new q), _(i, o.value);
                else if (!M(t, o.value)) {
                if (r.strict) return !1;
                if (!N(e, t, o.value)) return !1;
                i || (i = new q), _(i, o.value)
              }
              if (i) {
                for (;
                  (a = s.next()) && !a.done;)
                  if (a.value && "object" == typeof a.value) {
                    if (!T(i, a.value, r.strict, n)) return !1
                  } else if (!r.strict && !M(e, a.value) && !T(i, a.value, r.strict, n)) return !1;
                return 0 === A(i)
              }
              return !0
            }(e, t, r, o) : "Map" !== Z || function(e, t, r, o) {
              if (R(e) !== R(t)) return !1;
              for (var a, i, u, s, c, d, p = l(e), f = l(t);
                (a = p.next()) && !a.done;)
                if (s = a.value[0], c = a.value[1], s && "object" == typeof s) u || (u = new q), _(u, s);
                else if (void 0 === (d = S(t, s)) && !O(t, s) || !B(c, d, r, o)) {
                if (r.strict) return !1;
                if (!k(e, t, s, c, r, o)) return !1;
                u || (u = new q), _(u, s)
              }
              if (u) {
                for (;
                  (i = f.next()) && !i.done;)
                  if (s = i.value[0], d = i.value[1], s && "object" == typeof s) {
                    if (!F(u, e, s, d, r, o)) return !1
                  } else if (!(r.strict || e.has(s) && B(S(e, s), d, r, o) || F(u, e, s, d, n({}, r, {
                    strict: !1
                  }), o))) return !1;
                return 0 === A(u)
              }
              return !0
            }(e, t, r, o))
          }(e, t, i, o)
      }

      function L(e) {
        return !(!e || "object" != typeof e || "number" != typeof e.length || "function" != typeof e.copy || "function" != typeof e.slice || e.length > 0 && "number" != typeof e[0] || !(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e)))
      }
      e.exports = function(e, t, r) {
        return B(e, t, r, u())
      }
    },
    53699: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.printText = t.printProps = t.printElementAsLeaf = t.printElement = t.printComment = t.printChildren = void 0;
      var n, o = (n = r(72265)) && n.__esModule ? n : {
        default: n
      };
      t.printProps = (e, t, r, n, o, a, i) => {
        const l = n + r.indent,
          u = r.colors;
        return e.map((e => {
          const s = t[e];
          let c = i(s, r, l, o, a);
          return "string" != typeof s && (-1 !== c.indexOf("\n") && (c = r.spacingOuter + l + c + r.spacingOuter + n), c = "{" + c + "}"), r.spacingInner + n + u.prop.open + e + u.prop.close + "=" + u.value.open + c + u.value.close
        })).join("")
      }, t.printChildren = (e, t, r, n, o, i) => e.map((e => t.spacingOuter + r + ("string" == typeof e ? a(e, t) : i(e, t, r, n, o)))).join("");
      const a = (e, t) => {
        const r = t.colors.content;
        return r.open + (0, o.default)(e) + r.close
      };
      t.printText = a, t.printComment = (e, t) => {
        const r = t.colors.comment;
        return r.open + "\x3c!--" + (0, o.default)(e) + "--\x3e" + r.close
      }, t.printElement = (e, t, r, n, o) => {
        const a = n.colors.tag;
        return a.open + "<" + e + (t && a.close + t + n.spacingOuter + o + a.open) + (r ? ">" + a.close + r + n.spacingOuter + o + a.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + a.close
      }, t.printElementAsLeaf = (e, t) => {
        const r = t.colors.tag;
        return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close
      }
    },
    54193: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "glossref [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command", "link"]
        ]
      }
    },
    54399: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(357);
      const o = ["DOMStringMap", "NamedNodeMap"],
        a = /^(HTML\w*Collection|NodeList)$/,
        i = e => {
          return e && e.constructor && !!e.constructor.name && (t = e.constructor.name, -1 !== o.indexOf(t) || a.test(t));
          var t
        };
      t.test = i;
      const l = (e, t, r, a, i, l) => {
        const u = e.constructor.name;
        return ++a > t.maxDepth ? "[" + u + "]" : (t.min ? "" : u + " ") + (-1 !== o.indexOf(u) ? "{" + (0, n.printObjectProperties)((e => "NamedNodeMap" === e.constructor.name)(e) ? Array.from(e).reduce(((e, t) => (e[t.name] = t.value, e)), {}) : {
          ...e
        }, t, r, a, i, l) + "}" : "[" + (0, n.printListItems)(Array.from(e), t, r, a, i, l) + "]")
      };
      t.serialize = l;
      var u = {
        serialize: l,
        test: i
      };
      t.default = u
    },
    54533: (e, t, r) => {
      "use strict";
      var n = r(91995),
        o = r(57126),
        a = r(5361),
        i = r(6529),
        l = n("%Map%", !0),
        u = o("Map.prototype.get", !0),
        s = o("Map.prototype.set", !0),
        c = o("Map.prototype.has", !0),
        d = o("Map.prototype.delete", !0),
        p = o("Map.prototype.size", !0);
      e.exports = !!l && function() {
        var e, t = {
          assert: function(e) {
            if (!t.has(e)) throw new i("Side channel does not contain " + a(e))
          },
          delete: function(t) {
            if (e) {
              var r = d(e, t);
              return 0 === p(e) && (e = void 0), r
            }
            return !1
          },
          get: function(t) {
            if (e) return u(e, t)
          },
          has: function(t) {
            return !!e && c(e, t)
          },
          set: function(t, r) {
            e || (e = new l), s(e, t, r)
          }
        };
        return t
      }
    },
    54676: e => {
      var t = {}.toString;
      e.exports = Array.isArray || function(e) {
        return "[object Array]" == t.call(e)
      }
    },
    54958: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "frontmatter"
          },
          module: "DTB"
        }, {
          concept: {
            name: "level"
          },
          module: "DTB"
        }, {
          concept: {
            name: "level"
          },
          module: "SMIL"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    55054: e => {
      "use strict";
      e.exports = Function.prototype.call
    },
    55621: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-posinset": null,
          "aria-setsize": null,
          "aria-selected": "false"
        },
        relatedConcepts: [],
        requireContextRole: ["tablist"],
        requiredContextRole: ["tablist"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "sectionhead"],
          ["roletype", "widget"]
        ]
      }
    },
    56092: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "biblioref [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command", "link"]
        ]
      }
    },
    56333: (e, t, r) => {
      "use strict";
      t.Ot = t.wZ = t._s = void 0;
      var n = u(r(64632)),
        o = u(r(15347)),
        a = u(r(62356)),
        i = u(r(68855)),
        l = u(r(81335));

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      n.default, o.default;
      var s = a.default;
      t.Ot = s;
      var c = i.default;
      t._s = c;
      var d = l.default;
      t.wZ = d
    },
    56575: (e, t) => {
      "use strict";
      var r = 60103,
        n = 60106,
        o = 60107,
        a = 60108,
        i = 60114,
        l = 60109,
        u = 60110,
        s = 60112,
        c = 60113,
        d = 60120,
        p = 60115,
        f = 60116,
        m = 60121,
        b = 60122,
        y = 60117,
        h = 60129,
        v = 60131;
      if ("function" == typeof Symbol && Symbol.for) {
        var g = Symbol.for;
        r = g("react.element"), n = g("react.portal"), o = g("react.fragment"), a = g("react.strict_mode"), i = g("react.profiler"), l = g("react.provider"), u = g("react.context"), s = g("react.forward_ref"), c = g("react.suspense"), d = g("react.suspense_list"), p = g("react.memo"), f = g("react.lazy"), m = g("react.block"), b = g("react.server.block"), y = g("react.fundamental"), h = g("react.debug_trace_mode"), v = g("react.legacy_hidden")
      }

      function w(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case o:
                case i:
                case a:
                case c:
                case d:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case u:
                    case s:
                    case f:
                    case p:
                    case l:
                      return e;
                    default:
                      return t
                  }
              }
            case n:
              return t
          }
        }
      }
      var P = l,
        C = r,
        E = s,
        x = o,
        q = f,
        O = p,
        S = n,
        R = i,
        _ = a,
        j = c;
      t.ContextConsumer = u, t.ContextProvider = P, t.Element = C, t.ForwardRef = E, t.Fragment = x, t.Lazy = q, t.Memo = O, t.Portal = S, t.Profiler = R, t.StrictMode = _, t.Suspense = j, t.isAsyncMode = function() {
        return !1
      }, t.isConcurrentMode = function() {
        return !1
      }, t.isContextConsumer = function(e) {
        return w(e) === u
      }, t.isContextProvider = function(e) {
        return w(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return w(e) === s
      }, t.isFragment = function(e) {
        return w(e) === o
      }, t.isLazy = function(e) {
        return w(e) === f
      }, t.isMemo = function(e) {
        return w(e) === p
      }, t.isPortal = function(e) {
        return w(e) === n
      }, t.isProfiler = function(e) {
        return w(e) === i
      }, t.isStrictMode = function(e) {
        return w(e) === a
      }, t.isSuspense = function(e) {
        return w(e) === c
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === o || e === i || e === h || e === a || e === c || e === d || e === v || "object" == typeof e && null !== e && (e.$$typeof === f || e.$$typeof === p || e.$$typeof === l || e.$$typeof === u || e.$$typeof === s || e.$$typeof === y || e.$$typeof === m || e[0] === b)
      }, t.typeOf = w
    },
    57126: (e, t, r) => {
      "use strict";
      var n = r(91995),
        o = r(80064),
        a = o([n("%String.prototype.indexOf%")]);
      e.exports = function(e, t) {
        var r = n(e, !!t);
        return "function" == typeof r && a(e, ".prototype.") > -1 ? o([r]) : r
      }
    },
    57169: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-orientation": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"],
          ["roletype", "structure", "section", "group"]
        ]
      }
    },
    57531: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-level": null,
          "aria-posinset": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            constraints: ["direct descendant of ol, ul or menu"],
            name: "li"
          },
          module: "HTML"
        }, {
          concept: {
            name: "item"
          },
          module: "XForms"
        }],
        requireContextRole: ["directory", "list"],
        requiredContextRole: ["directory", "list"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    57705: (e, t, r) => {
      "use strict";
      if (r(52776)()) {
        var n = BigInt.prototype.valueOf;
        e.exports = function(e) {
          return null != e && "boolean" != typeof e && "string" != typeof e && "number" != typeof e && "symbol" != typeof e && "function" != typeof e && ("bigint" == typeof e || function(e) {
            try {
              return n.call(e), !0
            } catch (e) {}
            return !1
          }(e))
        }
      } else e.exports = function(e) {
        return !1
      }
    },
    57979: (e, t, r) => {
      "use strict";
      var n = r(66729),
        o = r(73660),
        a = r(95354);
      e.exports = function() {
        return a(n, o, arguments)
      }
    },
    60845: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-checked": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "type",
              value: "checkbox"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            name: "option"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [
          ["roletype", "widget", "input"]
        ]
      }
    },
    62356: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = u(r(65238)),
        o = u(r(15241)),
        a = u(r(19737)),
        i = u(r(84875)),
        l = u(r(49272));

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = d(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return n >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[n++]
                }
              },
              e: function(e) {
                throw e
              },
              f: o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0,
          l = !1;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return i = e.done, e
          },
          e: function(e) {
            l = !0, a = e
          },
          f: function() {
            try {
              i || null == r.return || r.return()
            } finally {
              if (l) throw a
            }
          }
        }
      }

      function c(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, o, a = [],
              i = !0,
              l = !1;
            try {
              for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
            } catch (e) {
              l = !0, o = e
            } finally {
              try {
                i || null == r.return || r.return()
              } finally {
                if (l) throw o
              }
            }
            return a
          }
        }(e, t) || d(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function d(e, t) {
        if (e) {
          if ("string" == typeof e) return p(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(e, t) : void 0
        }
      }

      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var f = [].concat(n.default, o.default, a.default, i.default);
      f.forEach((function(e) {
        var t, r = c(e, 2)[1],
          n = s(r.superClass);
        try {
          for (n.s(); !(t = n.n()).done;) {
            var o, a = s(t.value);
            try {
              var i = function() {
                var e, t, n, a = o.value,
                  i = f.find((function(e) {
                    return c(e, 1)[0] === a
                  }));
                if (i)
                  for (var l = i[1], u = 0, s = Object.keys(l.props); u < s.length; u++) {
                    var d = s[u];
                    Object.prototype.hasOwnProperty.call(r.props, d) || Object.assign(r.props, (e = {}, t = d, n = l.props[d], t in e ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : e[t] = n, e))
                  }
              };
              for (a.s(); !(o = a.n()).done;) i()
            } catch (e) {
              a.e(e)
            } finally {
              a.f()
            }
          }
        } catch (e) {
          n.e(e)
        } finally {
          n.f()
        }
      }));
      var m = {
          entries: function() {
            return f
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = s(f);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = c(t.value, 2),
                  a = o[0],
                  i = o[1];
                e.call(r, i, a, f)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = f.find((function(t) {
              return t[0] === e
            }));
            return t && t[1]
          },
          has: function(e) {
            return !!m.get(e)
          },
          keys: function() {
            return f.map((function(e) {
              return c(e, 1)[0]
            }))
          },
          values: function() {
            return f.map((function(e) {
              return c(e, 2)[1]
            }))
          }
        },
        b = (0, l.default)(m, m.entries());
      t.default = b
    },
    62759: (e, t, r) => {
      "use strict";
      var n = r(37466),
        o = r(45113),
        a = r(32313),
        i = r(1164),
        l = r(40294),
        u = o.apply(i()),
        s = function(e, t) {
          return u(Object, arguments)
        };
      n(s, {
        getPolyfill: i,
        implementation: a,
        shim: l
      }), e.exports = s
    },
    62933: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype"]
        ]
      }
    },
    63194: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "credits [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    64632: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n, o = (n = r(49272)) && n.__esModule ? n : {
        default: n
      };

      function a(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, o, a = [],
              i = !0,
              l = !1;
            try {
              for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
            } catch (e) {
              l = !0, o = e
            } finally {
              try {
                i || null == r.return || r.return()
              } finally {
                if (l) throw o
              }
            }
            return a
          }
        }(e, t) || i(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function i(e, t) {
        if (e) {
          if ("string" == typeof e) return l(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0
        }
      }

      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var u = [
          ["aria-activedescendant", {
            type: "id"
          }],
          ["aria-atomic", {
            type: "boolean"
          }],
          ["aria-autocomplete", {
            type: "token",
            values: ["inline", "list", "both", "none"]
          }],
          ["aria-busy", {
            type: "boolean"
          }],
          ["aria-checked", {
            type: "tristate"
          }],
          ["aria-colcount", {
            type: "integer"
          }],
          ["aria-colindex", {
            type: "integer"
          }],
          ["aria-colspan", {
            type: "integer"
          }],
          ["aria-controls", {
            type: "idlist"
          }],
          ["aria-current", {
            type: "token",
            values: ["page", "step", "location", "date", "time", !0, !1]
          }],
          ["aria-describedby", {
            type: "idlist"
          }],
          ["aria-details", {
            type: "id"
          }],
          ["aria-disabled", {
            type: "boolean"
          }],
          ["aria-dropeffect", {
            type: "tokenlist",
            values: ["copy", "execute", "link", "move", "none", "popup"]
          }],
          ["aria-errormessage", {
            type: "id"
          }],
          ["aria-expanded", {
            type: "boolean",
            allowundefined: !0
          }],
          ["aria-flowto", {
            type: "idlist"
          }],
          ["aria-grabbed", {
            type: "boolean",
            allowundefined: !0
          }],
          ["aria-haspopup", {
            type: "token",
            values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"]
          }],
          ["aria-hidden", {
            type: "boolean",
            allowundefined: !0
          }],
          ["aria-invalid", {
            type: "token",
            values: ["grammar", !1, "spelling", !0]
          }],
          ["aria-keyshortcuts", {
            type: "string"
          }],
          ["aria-label", {
            type: "string"
          }],
          ["aria-labelledby", {
            type: "idlist"
          }],
          ["aria-level", {
            type: "integer"
          }],
          ["aria-live", {
            type: "token",
            values: ["assertive", "off", "polite"]
          }],
          ["aria-modal", {
            type: "boolean"
          }],
          ["aria-multiline", {
            type: "boolean"
          }],
          ["aria-multiselectable", {
            type: "boolean"
          }],
          ["aria-orientation", {
            type: "token",
            values: ["vertical", "undefined", "horizontal"]
          }],
          ["aria-owns", {
            type: "idlist"
          }],
          ["aria-placeholder", {
            type: "string"
          }],
          ["aria-posinset", {
            type: "integer"
          }],
          ["aria-pressed", {
            type: "tristate"
          }],
          ["aria-readonly", {
            type: "boolean"
          }],
          ["aria-relevant", {
            type: "tokenlist",
            values: ["additions", "all", "removals", "text"]
          }],
          ["aria-required", {
            type: "boolean"
          }],
          ["aria-roledescription", {
            type: "string"
          }],
          ["aria-rowcount", {
            type: "integer"
          }],
          ["aria-rowindex", {
            type: "integer"
          }],
          ["aria-rowspan", {
            type: "integer"
          }],
          ["aria-selected", {
            type: "boolean",
            allowundefined: !0
          }],
          ["aria-setsize", {
            type: "integer"
          }],
          ["aria-sort", {
            type: "token",
            values: ["ascending", "descending", "none", "other"]
          }],
          ["aria-valuemax", {
            type: "number"
          }],
          ["aria-valuemin", {
            type: "number"
          }],
          ["aria-valuenow", {
            type: "number"
          }],
          ["aria-valuetext", {
            type: "string"
          }]
        ],
        s = {
          entries: function() {
            return u
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = function(e) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                  if (Array.isArray(e) || (t = i(e))) {
                    t && (e = t);
                    var r = 0,
                      n = function() {};
                    return {
                      s: n,
                      n: function() {
                        return r >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[r++]
                        }
                      },
                      e: function(e) {
                        throw e
                      },
                      f: n
                    }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                  l = !1;
                return {
                  s: function() {
                    t = t.call(e)
                  },
                  n: function() {
                    var e = t.next();
                    return a = e.done, e
                  },
                  e: function(e) {
                    l = !0, o = e
                  },
                  f: function() {
                    try {
                      a || null == t.return || t.return()
                    } finally {
                      if (l) throw o
                    }
                  }
                }
              }(u);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = a(t.value, 2),
                  l = o[0],
                  s = o[1];
                e.call(r, s, l, u)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = u.find((function(t) {
              return t[0] === e
            }));
            return t && t[1]
          },
          has: function(e) {
            return !!s.get(e)
          },
          keys: function() {
            return u.map((function(e) {
              return a(e, 1)[0]
            }))
          },
          values: function() {
            return u.map((function(e) {
              return a(e, 2)[1]
            }))
          }
        },
        c = (0, o.default)(s, s.entries());
      t.default = c
    },
    64728: (e, t, r) => {
      "use strict";
      var n = r(88479),
        o = r(43706)(),
        a = r(81900).functionsHaveConfigurableNames(),
        i = r(6529);
      e.exports = function(e, t) {
        if ("function" != typeof e) throw new i("`fn` is not a function");
        return arguments.length > 2 && !!arguments[2] && !a || (o ? n(e, "name", t, !0, !0) : n(e, "name", t)), e
      }
    },
    65160: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    65238: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = b(r(65464)),
        o = b(r(12842)),
        a = b(r(79181)),
        i = b(r(93173)),
        l = b(r(27316)),
        u = b(r(8169)),
        s = b(r(54958)),
        c = b(r(89184)),
        d = b(r(57169)),
        p = b(r(29696)),
        f = b(r(62933)),
        m = b(r(85557));

      function b(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var y = [
        ["command", n.default],
        ["composite", o.default],
        ["input", a.default],
        ["landmark", i.default],
        ["range", l.default],
        ["roletype", u.default],
        ["section", s.default],
        ["sectionhead", c.default],
        ["select", d.default],
        ["structure", p.default],
        ["widget", f.default],
        ["window", m.default]
      ];
      t.default = y
    },
    65296: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-atomic": "true",
          "aria-live": "assertive"
        },
        relatedConcepts: [{
          concept: {
            name: "alert"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    65464: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "menuitem"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget"]
        ]
      }
    },
    65581: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "menuitem"
          },
          module: "ARIA"
        }],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [
          ["roletype", "widget", "input", "checkbox"],
          ["roletype", "widget", "command", "menuitem"]
        ]
      }
    },
    65668: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "menu"
          },
          module: "HTML"
        }, {
          concept: {
            name: "ol"
          },
          module: "HTML"
        }, {
          concept: {
            name: "ul"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["listitem"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    66026: (e, t, r) => {
      var n, o = function() {
        var e = String.fromCharCode,
          t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
          n = {};

        function o(e, t) {
          if (!n[e]) {
            n[e] = {};
            for (var r = 0; r < e.length; r++) n[e][e.charAt(r)] = r
          }
          return n[e][t]
        }
        var a = {
          compressToBase64: function(e) {
            if (null == e) return "";
            var r = a._compress(e, 6, (function(e) {
              return t.charAt(e)
            }));
            switch (r.length % 4) {
              default:
              case 0:
                return r;
              case 1:
                return r + "===";
              case 2:
                return r + "==";
              case 3:
                return r + "="
            }
          },
          decompressFromBase64: function(e) {
            return null == e ? "" : "" == e ? null : a._decompress(e.length, 32, (function(r) {
              return o(t, e.charAt(r))
            }))
          },
          compressToUTF16: function(t) {
            return null == t ? "" : a._compress(t, 15, (function(t) {
              return e(t + 32)
            })) + " "
          },
          decompressFromUTF16: function(e) {
            return null == e ? "" : "" == e ? null : a._decompress(e.length, 16384, (function(t) {
              return e.charCodeAt(t) - 32
            }))
          },
          compressToUint8Array: function(e) {
            for (var t = a.compress(e), r = new Uint8Array(2 * t.length), n = 0, o = t.length; n < o; n++) {
              var i = t.charCodeAt(n);
              r[2 * n] = i >>> 8, r[2 * n + 1] = i % 256
            }
            return r
          },
          decompressFromUint8Array: function(t) {
            if (null == t) return a.decompress(t);
            for (var r = new Array(t.length / 2), n = 0, o = r.length; n < o; n++) r[n] = 256 * t[2 * n] + t[2 * n + 1];
            var i = [];
            return r.forEach((function(t) {
              i.push(e(t))
            })), a.decompress(i.join(""))
          },
          compressToEncodedURIComponent: function(e) {
            return null == e ? "" : a._compress(e, 6, (function(e) {
              return r.charAt(e)
            }))
          },
          decompressFromEncodedURIComponent: function(e) {
            return null == e ? "" : "" == e ? null : (e = e.replace(/ /g, "+"), a._decompress(e.length, 32, (function(t) {
              return o(r, e.charAt(t))
            })))
          },
          compress: function(t) {
            return a._compress(t, 16, (function(t) {
              return e(t)
            }))
          },
          _compress: function(e, t, r) {
            if (null == e) return "";
            var n, o, a, i = {},
              l = {},
              u = "",
              s = "",
              c = "",
              d = 2,
              p = 3,
              f = 2,
              m = [],
              b = 0,
              y = 0;
            for (a = 0; a < e.length; a += 1)
              if (u = e.charAt(a), Object.prototype.hasOwnProperty.call(i, u) || (i[u] = p++, l[u] = !0), s = c + u, Object.prototype.hasOwnProperty.call(i, s)) c = s;
              else {
                if (Object.prototype.hasOwnProperty.call(l, c)) {
                  if (c.charCodeAt(0) < 256) {
                    for (n = 0; n < f; n++) b <<= 1, y == t - 1 ? (y = 0, m.push(r(b)), b = 0) : y++;
                    for (o = c.charCodeAt(0), n = 0; n < 8; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, m.push(r(b)), b = 0) : y++, o >>= 1
                  } else {
                    for (o = 1, n = 0; n < f; n++) b = b << 1 | o, y == t - 1 ? (y = 0, m.push(r(b)), b = 0) : y++, o = 0;
                    for (o = c.charCodeAt(0), n = 0; n < 16; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, m.push(r(b)), b = 0) : y++, o >>= 1
                  }
                  0 == --d && (d = Math.pow(2, f), f++), delete l[c]
                } else
                  for (o = i[c], n = 0; n < f; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, m.push(r(b)), b = 0) : y++, o >>= 1;
                0 == --d && (d = Math.pow(2, f), f++), i[s] = p++, c = String(u)
              } if ("" !== c) {
              if (Object.prototype.hasOwnProperty.call(l, c)) {
                if (c.charCodeAt(0) < 256) {
                  for (n = 0; n < f; n++) b <<= 1, y == t - 1 ? (y = 0, m.push(r(b)), b = 0) : y++;
                  for (o = c.charCodeAt(0), n = 0; n < 8; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, m.push(r(b)), b = 0) : y++, o >>= 1
                } else {
                  for (o = 1, n = 0; n < f; n++) b = b << 1 | o, y == t - 1 ? (y = 0, m.push(r(b)), b = 0) : y++, o = 0;
                  for (o = c.charCodeAt(0), n = 0; n < 16; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, m.push(r(b)), b = 0) : y++, o >>= 1
                }
                0 == --d && (d = Math.pow(2, f), f++), delete l[c]
              } else
                for (o = i[c], n = 0; n < f; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, m.push(r(b)), b = 0) : y++, o >>= 1;
              0 == --d && (d = Math.pow(2, f), f++)
            }
            for (o = 2, n = 0; n < f; n++) b = b << 1 | 1 & o, y == t - 1 ? (y = 0, m.push(r(b)), b = 0) : y++, o >>= 1;
            for (;;) {
              if (b <<= 1, y == t - 1) {
                m.push(r(b));
                break
              }
              y++
            }
            return m.join("")
          },
          decompress: function(e) {
            return null == e ? "" : "" == e ? null : a._decompress(e.length, 32768, (function(t) {
              return e.charCodeAt(t)
            }))
          },
          _decompress: function(t, r, n) {
            var o, a, i, l, u, s, c, d = [],
              p = 4,
              f = 4,
              m = 3,
              b = "",
              y = [],
              h = {
                val: n(0),
                position: r,
                index: 1
              };
            for (o = 0; o < 3; o += 1) d[o] = o;
            for (i = 0, u = Math.pow(2, 2), s = 1; s != u;) l = h.val & h.position, h.position >>= 1, 0 == h.position && (h.position = r, h.val = n(h.index++)), i |= (l > 0 ? 1 : 0) * s, s <<= 1;
            switch (i) {
              case 0:
                for (i = 0, u = Math.pow(2, 8), s = 1; s != u;) l = h.val & h.position, h.position >>= 1, 0 == h.position && (h.position = r, h.val = n(h.index++)), i |= (l > 0 ? 1 : 0) * s, s <<= 1;
                c = e(i);
                break;
              case 1:
                for (i = 0, u = Math.pow(2, 16), s = 1; s != u;) l = h.val & h.position, h.position >>= 1, 0 == h.position && (h.position = r, h.val = n(h.index++)), i |= (l > 0 ? 1 : 0) * s, s <<= 1;
                c = e(i);
                break;
              case 2:
                return ""
            }
            for (d[3] = c, a = c, y.push(c);;) {
              if (h.index > t) return "";
              for (i = 0, u = Math.pow(2, m), s = 1; s != u;) l = h.val & h.position, h.position >>= 1, 0 == h.position && (h.position = r, h.val = n(h.index++)), i |= (l > 0 ? 1 : 0) * s, s <<= 1;
              switch (c = i) {
                case 0:
                  for (i = 0, u = Math.pow(2, 8), s = 1; s != u;) l = h.val & h.position, h.position >>= 1, 0 == h.position && (h.position = r, h.val = n(h.index++)), i |= (l > 0 ? 1 : 0) * s, s <<= 1;
                  d[f++] = e(i), c = f - 1, p--;
                  break;
                case 1:
                  for (i = 0, u = Math.pow(2, 16), s = 1; s != u;) l = h.val & h.position, h.position >>= 1, 0 == h.position && (h.position = r, h.val = n(h.index++)), i |= (l > 0 ? 1 : 0) * s, s <<= 1;
                  d[f++] = e(i), c = f - 1, p--;
                  break;
                case 2:
                  return y.join("")
              }
              if (0 == p && (p = Math.pow(2, m), m++), d[c]) b = d[c];
              else {
                if (c !== f) return null;
                b = a + a.charAt(0)
              }
              y.push(b), d[f++] = a + b.charAt(0), a = b, 0 == --p && (p = Math.pow(2, m), m++)
            }
          }
        };
        return a
      }();
      void 0 === (n = function() {
        return o
      }.call(t, r, t, e)) || (e.exports = n)
    },
    66259: (e, t, r) => {
      "use strict";
      r.d(t, {
        XX: () => A,
        nj: () => u.nj,
        rC: () => y
      });
      var n = r(62229),
        o = r(70003),
        a = r(44853),
        i = r.n(a),
        l = r(40748),
        u = r(33714),
        s = r(13404);
      const c = "function" == typeof n.act ? n.act : o.act;

      function d() {
        if ("undefined" != typeof globalThis) return globalThis;
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== r.g) return r.g;
        throw new Error("unable to locate global object")
      }

      function p(e) {
        d().IS_REACT_ACT_ENVIRONMENT = e
      }

      function f() {
        return d().IS_REACT_ACT_ENVIRONMENT
      }
      const m = (b = c, e => {
        const t = f();
        p(!0);
        try {
          let r = !1;
          const n = b((() => {
            const t = e();
            return null !== t && "object" == typeof t && "function" == typeof t.then && (r = !0), t
          }));
          if (r) {
            const e = n;
            return {
              then: (r, n) => {
                e.then((e => {
                  p(t), r(e)
                }), (e => {
                  p(t), n(e)
                }))
              }
            }
          }
          return p(t), n
        } catch (e) {
          throw p(t), e
        }
      });
      var b;
      const y = function() {
        return (0, u.rC)(...arguments)
      };
      Object.keys(u.rC).forEach((e => {
        y[e] = function() {
          return u.rC[e](...arguments)
        }
      }));
      const h = y.mouseEnter,
        v = y.mouseLeave;
      y.mouseEnter = function() {
        return h(...arguments), y.mouseOver(...arguments)
      }, y.mouseLeave = function() {
        return v(...arguments), y.mouseOut(...arguments)
      };
      const g = y.pointerEnter,
        w = y.pointerLeave;
      y.pointerEnter = function() {
        return g(...arguments), y.pointerOver(...arguments)
      }, y.pointerLeave = function() {
        return w(...arguments), y.pointerOut(...arguments)
      };
      const P = y.select;
      y.select = (e, t) => {
        P(e, t), e.focus(), y.keyUp(e, t)
      };
      const C = y.blur,
        E = y.focus;
      y.blur = function() {
        return y.focusOut(...arguments), C(...arguments)
      }, y.focus = function() {
        return y.focusIn(...arguments), E(...arguments)
      };
      let x = {
        reactStrictMode: !1
      };
      (0, u.jK)({
        unstable_advanceTimersWrapper: e => m(e),
        asyncWrapper: async e => {
          const t = f();
          p(!1);
          try {
            const t = await e();
            return await new Promise((e => {
              setTimeout((() => {
                e()
              }), 0), "undefined" == typeof jest || null === jest || !0 !== setTimeout._isMockFunction && !Object.prototype.hasOwnProperty.call(setTimeout, "clock") || jest.advanceTimersByTime(0)
            })), t
          } finally {
            p(t)
          }
        },
        eventWrapper: e => {
          let t;
          return m((() => {
            t = e()
          })), t
        }
      });
      const q = new Set,
        O = [];

      function S(e) {
        return {
          ...(0, u.zj)(),
          ...x
        }.reactStrictMode ? n.createElement(n.StrictMode, null, e) : e
      }

      function R(e, t) {
        return t ? n.createElement(t, null, e) : e
      }

      function _(e, t) {
        let r, {
          hydrate: n,
          ui: o,
          wrapper: a
        } = t;
        return n ? m((() => {
          r = l.c(e, S(R(o, a)))
        })) : r = l.H(e), {
          hydrate() {
            if (!n) throw new Error("Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.")
          },
          render(e) {
            r.render(e)
          },
          unmount() {
            r.unmount()
          }
        }
      }

      function j(e) {
        return {
          hydrate(t) {
            i().hydrate(t, e)
          },
          render(t) {
            i().render(t, e)
          },
          unmount() {
            i().unmountComponentAtNode(e)
          }
        }
      }

      function M(e, t) {
        let {
          baseElement: r,
          container: n,
          hydrate: o,
          queries: a,
          root: i,
          wrapper: l
        } = t;
        return m((() => {
          o ? i.hydrate(S(R(e, l)), n) : i.render(S(R(e, l)), n)
        })), {
          container: n,
          baseElement: r,
          debug: function(e, t, n) {
            return void 0 === e && (e = r), Array.isArray(e) ? e.forEach((e => console.log((0, u.fE)(e, t, n)))) : console.log((0, u.fE)(e, t, n))
          },
          unmount: () => {
            m((() => {
              i.unmount()
            }))
          },
          rerender: e => {
            M(e, {
              container: n,
              baseElement: r,
              root: i,
              wrapper: l
            })
          },
          asFragment: () => {
            if ("function" == typeof document.createRange) return document.createRange().createContextualFragment(n.innerHTML); {
              const e = document.createElement("template");
              return e.innerHTML = n.innerHTML, e.content
            }
          },
          ...(0, u.E5)(r, a)
        }
      }

      function A(e, t) {
        let r, {
          container: n,
          baseElement: o = n,
          legacyRoot: a = !1,
          queries: l,
          hydrate: u = !1,
          wrapper: s
        } = void 0 === t ? {} : t;
        if (a && "function" != typeof i().render) {
          const e = new Error("`legacyRoot: true` is not supported in this version of React. Please use React 18 instead.");
          throw Error.captureStackTrace(e, A), e
        }
        return o || (o = document.body), n || (n = o.appendChild(document.createElement("div"))), q.has(n) ? O.forEach((e => {
          e.container === n && (r = e.root)
        })) : (r = (a ? j : _)(n, {
          hydrate: u,
          ui: e,
          wrapper: s
        }), O.push({
          container: n,
          root: r
        }), q.add(n)), M(e, {
          container: n,
          baseElement: o,
          queries: l,
          hydrate: u,
          wrapper: s,
          root: r
        })
      }

      function T() {
        O.forEach((e => {
          let {
            root: t,
            container: r
          } = e;
          m((() => {
            t.unmount()
          })), r.parentNode === document.body && document.body.removeChild(r)
        })), O.length = 0, q.clear()
      }
      if ((void 0 === s || !s.env?.RTL_SKIP_AUTO_CLEANUP) && ("function" == typeof afterEach ? afterEach((() => {
          T()
        })) : "function" == typeof teardown && teardown((() => {
          T()
        })), "function" == typeof beforeAll && "function" == typeof afterAll)) {
        let e = f();
        beforeAll((() => {
          e = f(), p(!0)
        })), afterAll((() => {
          p(e)
        }))
      }
    },
    66270: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "introduction [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    66729: (e, t, r) => {
      "use strict";
      var n = r(68927);
      e.exports = Function.prototype.bind || n
    },
    66843: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "span"
          },
          module: "HTML"
        }, {
          concept: {
            name: "div"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    67354: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.innerHeight = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientHeight - parseInt(t.getPropertyValue("padding-top"), 10) - parseInt(t.getPropertyValue("padding-bottom"), 10) : e.clientHeight
      }, t.innerWidth = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientWidth - parseInt(t.getPropertyValue("padding-left"), 10) - parseInt(t.getPropertyValue("padding-right"), 10) : e.clientWidth
      }
    },
    67451: (e, t, r) => {
      "use strict";
      e.exports = r(56575)
    },
    67647: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "tbody"
          },
          module: "HTML"
        }, {
          concept: {
            name: "tfoot"
          },
          module: "HTML"
        }, {
          concept: {
            name: "thead"
          },
          module: "HTML"
        }],
        requireContextRole: ["grid", "table", "treegrid"],
        requiredContextRole: ["grid", "table", "treegrid"],
        requiredOwnedElements: [
          ["row"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    68335: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    68430: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-label"
            }],
            name: "form"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-labelledby"
            }],
            name: "form"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "name"
            }],
            name: "form"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    68508: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "foreword [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    68645: (e, t, r) => {
      "use strict";
      var n = r(10884),
        o = r(49109),
        a = r(45113),
        i = r(57126),
        l = r(39997),
        u = r(8690),
        s = i("Object.prototype.toString"),
        c = r(72914)(),
        d = "undefined" == typeof globalThis ? r.g : globalThis,
        p = o(),
        f = i("String.prototype.slice"),
        m = i("Array.prototype.indexOf", !0) || function(e, t) {
          for (var r = 0; r < e.length; r += 1)
            if (e[r] === t) return r;
          return -1
        },
        b = {
          __proto__: null
        };
      n(p, c && l && u ? function(e) {
        var t = new d[e];
        if (Symbol.toStringTag in t && u) {
          var r = u(t),
            n = l(r, Symbol.toStringTag);
          if (!n && r) {
            var o = u(r);
            n = l(o, Symbol.toStringTag)
          }
          b["$" + e] = a(n.get)
        }
      } : function(e) {
        var t = new d[e],
          r = t.slice || t.set;
        r && (b["$" + e] = a(r))
      }), e.exports = function(e) {
        if (!e || "object" != typeof e) return !1;
        if (!c) {
          var t = f(s(e), 8, -1);
          return m(p, t) > -1 ? t : "Object" === t && function(e) {
            var t = !1;
            return n(b, (function(r, n) {
              if (!t) try {
                r(e), t = f(n, 1)
              } catch (e) {}
            })), t
          }(e)
        }
        return l ? function(e) {
          var t = !1;
          return n(b, (function(r, n) {
            if (!t) try {
              "$" + r(e) === n && (t = f(n, 1))
            } catch (e) {}
          })), t
        }(e) : null
      }
    },
    68855: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = i(r(53616)),
        o = i(r(49272)),
        a = i(r(62356));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, o, a = [],
              i = !0,
              l = !1;
            try {
              for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
            } catch (e) {
              l = !0, o = e
            } finally {
              try {
                i || null == r.return || r.return()
              } finally {
                if (l) throw o
              }
            }
            return a
          }
        }(e, t) || u(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function u(e, t) {
        if (e) {
          if ("string" == typeof e) return s(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e, t) : void 0
        }
      }

      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      for (var c = [], d = a.default.keys(), p = 0; p < d.length; p++) {
        var f = d[p],
          m = a.default.get(f);
        if (m)
          for (var b = [].concat(m.baseConcepts, m.relatedConcepts), y = 0; y < b.length; y++) {
            var h = b[y];
            if ("HTML" === h.module) {
              var v = h.concept;
              v && function() {
                var e = JSON.stringify(v),
                  t = c.find((function(t) {
                    return JSON.stringify(t[0]) === e
                  })),
                  r = void 0;
                r = t ? t[1] : [];
                for (var n = !0, o = 0; o < r.length; o++)
                  if (r[o] === f) {
                    n = !1;
                    break
                  } n && r.push(f), c.push([v, r])
              }()
            }
          }
      }
      var g = {
          entries: function() {
            return c
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = function(e) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                  if (Array.isArray(e) || (t = u(e))) {
                    t && (e = t);
                    var r = 0,
                      n = function() {};
                    return {
                      s: n,
                      n: function() {
                        return r >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[r++]
                        }
                      },
                      e: function(e) {
                        throw e
                      },
                      f: n
                    }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                  i = !1;
                return {
                  s: function() {
                    t = t.call(e)
                  },
                  n: function() {
                    var e = t.next();
                    return a = e.done, e
                  },
                  e: function(e) {
                    i = !0, o = e
                  },
                  f: function() {
                    try {
                      a || null == t.return || t.return()
                    } finally {
                      if (i) throw o
                    }
                  }
                }
              }(c);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = l(t.value, 2),
                  a = o[0],
                  i = o[1];
                e.call(r, i, a, c)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = c.find((function(t) {
              return (0, n.default)(e, t[0])
            }));
            return t && t[1]
          },
          has: function(e) {
            return !!g.get(e)
          },
          keys: function() {
            return c.map((function(e) {
              return l(e, 1)[0]
            }))
          },
          values: function() {
            return c.map((function(e) {
              return l(e, 2)[1]
            }))
          }
        },
        w = (0, o.default)(g, g.entries());
      t.default = w
    },
    68927: e => {
      "use strict";
      var t = Object.prototype.toString,
        r = Math.max,
        n = function(e, t) {
          for (var r = [], n = 0; n < e.length; n += 1) r[n] = e[n];
          for (var o = 0; o < t.length; o += 1) r[o + e.length] = t[o];
          return r
        };
      e.exports = function(e) {
        var o = this;
        if ("function" != typeof o || "[object Function]" !== t.apply(o)) throw new TypeError("Function.prototype.bind called on incompatible " + o);
        for (var a, i = function(e) {
            for (var t = [], r = 1, n = 0; r < e.length; r += 1, n += 1) t[n] = e[r];
            return t
          }(arguments), l = r(0, o.length - i.length), u = [], s = 0; s < l; s++) u[s] = "$" + s;
        if (a = Function("binder", "return function (" + function(e) {
            for (var t = "", r = 0; r < e.length; r += 1) t += e[r], r + 1 < e.length && (t += ",");
            return t
          }(u) + "){ return binder.apply(this,arguments); }")((function() {
            if (this instanceof a) {
              var t = o.apply(this, n(i, arguments));
              return Object(t) === t ? t : this
            }
            return o.apply(e, n(i, arguments))
          })), o.prototype) {
          var c = function() {};
          c.prototype = o.prototype, a.prototype = new c, c.prototype = null
        }
        return a
      }
    },
    69149: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    69270: (e, t, r) => {
      "use strict";
      var n = r(12822);
      e.exports = n.getPrototypeOf || null
    },
    69774: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          module: "GRAPHICS",
          concept: {
            name: "graphics-document"
          }
        }, {
          module: "ARIA",
          concept: {
            name: "group"
          }
        }, {
          module: "ARIA",
          concept: {
            name: "img"
          }
        }, {
          module: "GRAPHICS",
          concept: {
            name: "graphics-symbol"
          }
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "group"]
        ]
      }
    },
    70003: (e, t, r) => {
      "use strict";
      e.exports = r(21046)
    },
    70130: e => {
      "use strict";
      var t, r, n = Function.prototype.toString,
        o = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
      if ("function" == typeof o && "function" == typeof Object.defineProperty) try {
        t = Object.defineProperty({}, "length", {
          get: function() {
            throw r
          }
        }), r = {}, o((function() {
          throw 42
        }), null, t)
      } catch (e) {
        e !== r && (o = null)
      } else o = null;
      var a = /^\s*class\b/,
        i = function(e) {
          try {
            var t = n.call(e);
            return a.test(t)
          } catch (e) {
            return !1
          }
        },
        l = function(e) {
          try {
            return !i(e) && (n.call(e), !0)
          } catch (e) {
            return !1
          }
        },
        u = Object.prototype.toString,
        s = "function" == typeof Symbol && !!Symbol.toStringTag,
        c = !(0 in [, ]),
        d = function() {
          return !1
        };
      if ("object" == typeof document) {
        var p = document.all;
        u.call(p) === u.call(document.all) && (d = function(e) {
          if ((c || !e) && (void 0 === e || "object" == typeof e)) try {
            var t = u.call(e);
            return ("[object HTMLAllCollection]" === t || "[object HTML document.all class]" === t || "[object HTMLCollection]" === t || "[object Object]" === t) && null == e("")
          } catch (e) {}
          return !1
        })
      }
      e.exports = o ? function(e) {
        if (d(e)) return !0;
        if (!e) return !1;
        if ("function" != typeof e && "object" != typeof e) return !1;
        try {
          o(e, null, t)
        } catch (e) {
          if (e !== r) return !1
        }
        return !i(e) && l(e)
      } : function(e) {
        if (d(e)) return !0;
        if (!e) return !1;
        if ("function" != typeof e && "object" != typeof e) return !1;
        if (s) return l(e);
        if (i(e)) return !1;
        var t = u.call(e);
        return !("[object Function]" !== t && "[object GeneratorFunction]" !== t && !/^\[object HTML/.test(t)) && l(e)
      }
    },
    70163: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.test = t.serialize = t.default = void 0;
      var n = r(357);
      const o = "@@__IMMUTABLE_ORDERED__@@",
        a = e => "Immutable." + e,
        i = e => "[" + e + "]",
        l = " ",
        u = (e, t, r, o, u, s, c) => ++o > t.maxDepth ? i(a(c)) : a(c) + l + "[" + (0, n.printIteratorValues)(e.values(), t, r, o, u, s) + "]",
        s = (e, t, r, s, c, d) => e["@@__IMMUTABLE_MAP__@@"] ? ((e, t, r, o, u, s, c) => ++o > t.maxDepth ? i(a(c)) : a(c) + l + "{" + (0, n.printIteratorEntries)(e.entries(), t, r, o, u, s) + "}")(e, t, r, s, c, d, e[o] ? "OrderedMap" : "Map") : e["@@__IMMUTABLE_LIST__@@"] ? u(e, t, r, s, c, d, "List") : e["@@__IMMUTABLE_SET__@@"] ? u(e, t, r, s, c, d, e[o] ? "OrderedSet" : "Set") : e["@@__IMMUTABLE_STACK__@@"] ? u(e, t, r, s, c, d, "Stack") : e["@@__IMMUTABLE_SEQ__@@"] ? ((e, t, r, o, u, s) => {
          const c = a("Seq");
          return ++o > t.maxDepth ? i(c) : e["@@__IMMUTABLE_KEYED__@@"] ? c + l + "{" + (e._iter || e._object ? (0, n.printIteratorEntries)(e.entries(), t, r, o, u, s) : "…") + "}" : c + l + "[" + (e._iter || e._array || e._collection || e._iterable ? (0, n.printIteratorValues)(e.values(), t, r, o, u, s) : "…") + "]"
        })(e, t, r, s, c, d) : ((e, t, r, o, u, s) => {
          const c = a(e._name || "Record");
          return ++o > t.maxDepth ? i(c) : c + l + "{" + (0, n.printIteratorEntries)(function(e) {
            let t = 0;
            return {
              next() {
                if (t < e._keys.length) {
                  const r = e._keys[t++];
                  return {
                    done: !1,
                    value: [r, e.get(r)]
                  }
                }
                return {
                  done: !0,
                  value: void 0
                }
              }
            }
          }(e), t, r, o, u, s) + "}"
        })(e, t, r, s, c, d);
      t.serialize = s;
      const c = e => e && (!0 === e["@@__IMMUTABLE_ITERABLE__@@"] || !0 === e["@@__IMMUTABLE_RECORD__@@"]);
      t.test = c;
      var d = {
        serialize: s,
        test: c
      };
      t.default = d
    },
    70315: (e, t, r) => {
      "use strict";
      var n = Array.prototype.slice,
        o = r(23283),
        a = Object.keys,
        i = a ? function(e) {
          return a(e)
        } : r(36413),
        l = Object.keys;
      i.shim = function() {
        if (Object.keys) {
          var e = function() {
            var e = Object.keys(arguments);
            return e && e.length === arguments.length
          }(1, 2);
          e || (Object.keys = function(e) {
            return o(e) ? l(n.call(e)) : l(e)
          })
        } else Object.keys = i;
        return Object.keys || i
      }, e.exports = i
    },
    70687: (e, t, r) => {
      "use strict";
      var n = r(91995),
        o = r(88479),
        a = r(43706)(),
        i = r(39997),
        l = r(6529),
        u = n("%Math.floor%");
      e.exports = function(e, t) {
        if ("function" != typeof e) throw new l("`fn` is not a function");
        if ("number" != typeof t || t < 0 || t > 4294967295 || u(t) !== t) throw new l("`length` must be a positive 32-bit integer");
        var r = arguments.length > 2 && !!arguments[2],
          n = !0,
          s = !0;
        if ("length" in e && i) {
          var c = i(e, "length");
          c && !c.configurable && (n = !1), c && !c.writable && (s = !1)
        }
        return (n || s || !r) && (a ? o(e, "length", t, !0, !0) : o(e, "length", t)), e
      }
    },
    71641: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-orientation": "horizontal",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": null,
          "aria-valuetext": null
        },
        relatedConcepts: [{
          concept: {
            name: "hr"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    72063: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            constraints: ["direct descendant of document"],
            name: "footer"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    72265: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
    },
    72914: (e, t, r) => {
      "use strict";
      var n = r(50811);
      e.exports = function() {
        return n() && !!Symbol.toStringTag
      }
    },
    73324: e => {
      "use strict";
      e.exports = Math.abs
    },
    73532: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "abstract [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    73626: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    73660: e => {
      "use strict";
      e.exports = Function.prototype.apply
    },
    73906: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "glossary [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["definition"],
          ["term"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    73972: e => {
      "use strict";
      e.exports = ["Float16Array", "Float32Array", "Float64Array", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array"]
    },
    74212: (e, t, r) => {
      "use strict";
      t.GP = function(e, t) {
        if (t && (function(e) {
            if (Object.keys(e).forEach((e => {
                if (!A.hasOwnProperty(e)) throw new Error(`pretty-format: Unknown option "${e}".`)
              })), e.min && void 0 !== e.indent && 0 !== e.indent) throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
            if (void 0 !== e.theme) {
              if (null === e.theme) throw new Error('pretty-format: Option "theme" must not be null.');
              if ("object" != typeof e.theme) throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`)
            }
          }(t), t.plugins)) {
          const r = R(t.plugins, e);
          if (null !== r) return S(r, e, F(t), "", 0, [])
        }
        const r = q(e, I(t), k(t), N(t));
        return null !== r ? r : O(e, F(t), "", 0, [])
      }, t.Nx = void 0;
      var n = p(r(34451)),
        o = r(357),
        a = p(r(33795)),
        i = p(r(19363)),
        l = p(r(54399)),
        u = p(r(36883)),
        s = p(r(70163)),
        c = p(r(33898)),
        d = p(r(3081));

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      const f = Object.prototype.toString,
        m = Date.prototype.toISOString,
        b = Error.prototype.toString,
        y = RegExp.prototype.toString,
        h = e => "function" == typeof e.constructor && e.constructor.name || "Object",
        v = e => "undefined" != typeof window && e === window,
        g = /^Symbol\((.*)\)(.*)$/,
        w = /\n/gi;
      class P extends Error {
        constructor(e, t) {
          super(e), this.stack = t, this.name = this.constructor.name
        }
      }

      function C(e, t) {
        return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]"
      }

      function E(e) {
        return String(e).replace(g, "Symbol($1)")
      }

      function x(e) {
        return "[" + b.call(e) + "]"
      }

      function q(e, t, r, n) {
        if (!0 === e || !1 === e) return "" + e;
        if (void 0 === e) return "undefined";
        if (null === e) return "null";
        const o = typeof e;
        if ("number" === o) return function(e) {
          return Object.is(e, -0) ? "-0" : String(e)
        }(e);
        if ("bigint" === o) return function(e) {
          return String(`${e}n`)
        }(e);
        if ("string" === o) return n ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
        if ("function" === o) return C(e, t);
        if ("symbol" === o) return E(e);
        const a = f.call(e);
        return "[object WeakMap]" === a ? "WeakMap {}" : "[object WeakSet]" === a ? "WeakSet {}" : "[object Function]" === a || "[object GeneratorFunction]" === a ? C(e, t) : "[object Symbol]" === a ? E(e) : "[object Date]" === a ? isNaN(+e) ? "Date { NaN }" : m.call(e) : "[object Error]" === a ? x(e) : "[object RegExp]" === a ? r ? y.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : y.call(e) : e instanceof Error ? x(e) : null
      }

      function O(e, t, r, n, a, i) {
        if (-1 !== a.indexOf(e)) return "[Circular]";
        (a = a.slice()).push(e);
        const l = ++n > t.maxDepth,
          u = t.min;
        if (t.callToJSON && !l && e.toJSON && "function" == typeof e.toJSON && !i) return _(e.toJSON(), t, r, n, a, !0);
        const s = f.call(e);
        return "[object Arguments]" === s ? l ? "[Arguments]" : (u ? "" : "Arguments ") + "[" + (0, o.printListItems)(e, t, r, n, a, _) + "]" : function(e) {
          return "[object Array]" === e || "[object ArrayBuffer]" === e || "[object DataView]" === e || "[object Float32Array]" === e || "[object Float64Array]" === e || "[object Int8Array]" === e || "[object Int16Array]" === e || "[object Int32Array]" === e || "[object Uint8Array]" === e || "[object Uint8ClampedArray]" === e || "[object Uint16Array]" === e || "[object Uint32Array]" === e
        }(s) ? l ? "[" + e.constructor.name + "]" : (u ? "" : t.printBasicPrototype || "Array" !== e.constructor.name ? e.constructor.name + " " : "") + "[" + (0, o.printListItems)(e, t, r, n, a, _) + "]" : "[object Map]" === s ? l ? "[Map]" : "Map {" + (0, o.printIteratorEntries)(e.entries(), t, r, n, a, _, " => ") + "}" : "[object Set]" === s ? l ? "[Set]" : "Set {" + (0, o.printIteratorValues)(e.values(), t, r, n, a, _) + "}" : l || v(e) ? "[" + h(e) + "]" : (u ? "" : t.printBasicPrototype || "Object" !== h(e) ? h(e) + " " : "") + "{" + (0, o.printObjectProperties)(e, t, r, n, a, _) + "}"
      }

      function S(e, t, r, n, o, a) {
        let i;
        try {
          i = function(e) {
            return null != e.serialize
          }(e) ? e.serialize(t, r, n, o, a, _) : e.print(t, (e => _(e, r, n, o, a)), (e => {
            const t = n + r.indent;
            return t + e.replace(w, "\n" + t)
          }), {
            edgeSpacing: r.spacingOuter,
            min: r.min,
            spacing: r.spacingInner
          }, r.colors)
        } catch (e) {
          throw new P(e.message, e.stack)
        }
        if ("string" != typeof i) throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`);
        return i
      }

      function R(e, t) {
        for (let r = 0; r < e.length; r++) try {
          if (e[r].test(t)) return e[r]
        } catch (e) {
          throw new P(e.message, e.stack)
        }
        return null
      }

      function _(e, t, r, n, o, a) {
        const i = R(t.plugins, e);
        if (null !== i) return S(i, e, t, r, n, o);
        const l = q(e, t.printFunctionName, t.escapeRegex, t.escapeString);
        return null !== l ? l : O(e, t, r, n, o, a)
      }
      const j = {
          comment: "gray",
          content: "reset",
          prop: "yellow",
          tag: "cyan",
          value: "green"
        },
        M = Object.keys(j),
        A = {
          callToJSON: !0,
          compareKeys: void 0,
          escapeRegex: !1,
          escapeString: !0,
          highlight: !1,
          indent: 2,
          maxDepth: 1 / 0,
          min: !1,
          plugins: [],
          printBasicPrototype: !0,
          printFunctionName: !0,
          theme: j
        },
        T = e => M.reduce(((t, r) => {
          const o = e.theme && void 0 !== e.theme[r] ? e.theme[r] : j[r],
            a = o && n.default[o];
          if (!a || "string" != typeof a.close || "string" != typeof a.open) throw new Error(`pretty-format: Option "theme" has a key "${r}" whose value "${o}" is undefined in ansi-styles.`);
          return t[r] = a, t
        }), Object.create(null)),
        I = e => e && void 0 !== e.printFunctionName ? e.printFunctionName : A.printFunctionName,
        k = e => e && void 0 !== e.escapeRegex ? e.escapeRegex : A.escapeRegex,
        N = e => e && void 0 !== e.escapeString ? e.escapeString : A.escapeString,
        F = e => {
          var t, r;
          return {
            callToJSON: e && void 0 !== e.callToJSON ? e.callToJSON : A.callToJSON,
            colors: e && e.highlight ? T(e) : M.reduce(((e, t) => (e[t] = {
              close: "",
              open: ""
            }, e)), Object.create(null)),
            compareKeys: e && "function" == typeof e.compareKeys ? e.compareKeys : A.compareKeys,
            escapeRegex: k(e),
            escapeString: N(e),
            indent: e && e.min ? "" : (r = e && void 0 !== e.indent ? e.indent : A.indent, new Array(r + 1).join(" ")),
            maxDepth: e && void 0 !== e.maxDepth ? e.maxDepth : A.maxDepth,
            min: e && void 0 !== e.min ? e.min : A.min,
            plugins: e && void 0 !== e.plugins ? e.plugins : A.plugins,
            printBasicPrototype: null === (t = null == e ? void 0 : e.printBasicPrototype) || void 0 === t || t,
            printFunctionName: I(e),
            spacingInner: e && e.min ? " " : "\n",
            spacingOuter: e && e.min ? "" : "\n"
          }
        };
      const B = {
        AsymmetricMatcher: a.default,
        ConvertAnsi: i.default,
        DOMCollection: l.default,
        DOMElement: u.default,
        Immutable: s.default,
        ReactElement: c.default,
        ReactTestComponent: d.default
      };
      t.Nx = B
    },
    74476: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-posinset": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            name: "article"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "document"]
        ]
      }
    },
    74538: (e, t, r) => {
      "use strict";
      var n = r(91995),
        o = r(57126),
        a = n("%WeakSet%", !0),
        i = o("WeakSet.prototype.has", !0);
      if (i) {
        var l = o("WeakMap.prototype.has", !0);
        e.exports = function(e) {
          if (!e || "object" != typeof e) return !1;
          try {
            if (i(e, i), l) try {
              l(e, l)
            } catch (e) {
              return !0
            }
            return e instanceof a
          } catch (e) {}
          return !1
        }
      } else e.exports = function(e) {
        return !1
      }
    },
    74554: e => {
      "use strict";
      e.exports = Math.floor
    },
    75554: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "pagebreak [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "separator"]
        ]
      }
    },
    75573: (e, t, r) => {
      "use strict";
      var n = r(57126)("ArrayBuffer.prototype.byteLength", !0),
        o = r(4864);
      e.exports = function(e) {
        return o(e) ? n ? n(e) : e.byteLength : NaN
      }
    },
    75653: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "help [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "note"]
        ]
      }
    },
    75866: e => {
      "use strict";
      e.exports = SyntaxError
    },
    76751: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-expanded": null,
          "aria-haspopup": null
        },
        relatedConcepts: [],
        requireContextRole: ["group", "tree"],
        requiredContextRole: ["group", "tree"],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-selected": null
        },
        superClass: [
          ["roletype", "structure", "section", "listitem"],
          ["roletype", "widget", "input", "option"]
        ]
      }
    },
    77116: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "button"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [
          ["roletype", "widget", "input", "checkbox"]
        ]
      }
    },
    77393: (e, t, r) => {
      "use strict";
      var n = r(57126),
        o = n("Number.prototype.toString"),
        a = n("Object.prototype.toString"),
        i = r(72914)();
      e.exports = function(e) {
        return "number" == typeof e || !(!e || "object" != typeof e) && (i ? function(e) {
          try {
            return o(e), !0
          } catch (e) {
            return !1
          }
        }(e) : "[object Number]" === a(e))
      }
    },
    77775: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "errata [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    78924: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-pressed": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              constraints: ["set"],
              name: "aria-pressed"
            }, {
              name: "type",
              value: "checkbox"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "aria-expanded",
              value: "false"
            }],
            name: "summary"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "aria-expanded",
              value: "true"
            }],
            constraints: ["direct descendant of details element with the open attribute defined"],
            name: "summary"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "type",
              value: "button"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "type",
              value: "image"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "type",
              value: "reset"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            attributes: [{
              name: "type",
              value: "submit"
            }],
            name: "input"
          },
          module: "HTML"
        }, {
          concept: {
            name: "button"
          },
          module: "HTML"
        }, {
          concept: {
            name: "trigger"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command"]
        ]
      }
    },
    79093: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "chapter [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    79181: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null
        },
        relatedConcepts: [{
          concept: {
            name: "input"
          },
          module: "XForms"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget"]
        ]
      }
    },
    79308: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "figure"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    79660: e => {
      "use strict";
      e.exports = Math.round
    },
    80030: (e, t, r) => {
      "use strict";
      var n = r(37466).supportsDescriptors,
        o = r(46004),
        a = r(39997),
        i = Object.defineProperty,
        l = r(93581),
        u = r(8690),
        s = /a/;
      e.exports = function() {
        if (!n || !u) throw new l("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
        var e = o(),
          t = u(s),
          r = a(t, "flags");
        return r && r.get === e || i(t, "flags", {
          configurable: !0,
          enumerable: !1,
          get: e
        }), e
      }
    },
    80064: (e, t, r) => {
      "use strict";
      var n = r(66729),
        o = r(6529),
        a = r(55054),
        i = r(95354);
      e.exports = function(e) {
        if (e.length < 1 || "function" != typeof e[0]) throw new o("a function is required");
        return i(n, a, e)
      }
    },
    80231: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-valuetext": null,
          "aria-valuemax": "100",
          "aria-valuemin": "0"
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-valuenow": null
        },
        superClass: [
          ["roletype", "structure", "range"]
        ]
      }
    },
    80361: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-checked": null,
          "aria-posinset": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "type",
              value: "radio"
            }],
            name: "input"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-checked": null
        },
        superClass: [
          ["roletype", "widget", "input"]
        ]
      }
    },
    80430: (e, t, r) => {
      "use strict";
      var n = r(57126),
        o = n("Date.prototype.getDay"),
        a = n("Object.prototype.toString"),
        i = r(72914)();
      e.exports = function(e) {
        return "object" == typeof e && null !== e && (i ? function(e) {
          try {
            return o(e), !0
          } catch (e) {
            return !1
          }
        }(e) : "[object Date]" === a(e))
      }
    },
    81335: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = a(r(49272)),
        o = a(r(62356));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function i(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, o, a = [],
              i = !0,
              l = !1;
            try {
              for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
            } catch (e) {
              l = !0, o = e
            } finally {
              try {
                i || null == r.return || r.return()
              } finally {
                if (l) throw o
              }
            }
            return a
          }
        }(e, t) || l(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function l(e, t) {
        if (e) {
          if ("string" == typeof e) return u(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(e, t) : void 0
        }
      }

      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      for (var s = [], c = o.default.keys(), d = function(e) {
          var t = c[e],
            r = o.default.get(t);
          if (r)
            for (var n = [].concat(r.baseConcepts, r.relatedConcepts), a = 0; a < n.length; a++) {
              var i = n[a];
              if ("HTML" === i.module) {
                var l = i.concept;
                if (l) {
                  var u = s.find((function(e) {
                      return e[0] === t
                    })),
                    d = void 0;
                  (d = u ? u[1] : []).push(l), s.push([t, d])
                }
              }
            }
        }, p = 0; p < c.length; p++) d(p);
      var f = {
          entries: function() {
            return s
          },
          forEach: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = function(e) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                  if (Array.isArray(e) || (t = l(e))) {
                    t && (e = t);
                    var r = 0,
                      n = function() {};
                    return {
                      s: n,
                      n: function() {
                        return r >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[r++]
                        }
                      },
                      e: function(e) {
                        throw e
                      },
                      f: n
                    }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                  i = !1;
                return {
                  s: function() {
                    t = t.call(e)
                  },
                  n: function() {
                    var e = t.next();
                    return a = e.done, e
                  },
                  e: function(e) {
                    i = !0, o = e
                  },
                  f: function() {
                    try {
                      a || null == t.return || t.return()
                    } finally {
                      if (i) throw o
                    }
                  }
                }
              }(s);
            try {
              for (n.s(); !(t = n.n()).done;) {
                var o = i(t.value, 2),
                  a = o[0],
                  u = o[1];
                e.call(r, u, a, s)
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          },
          get: function(e) {
            var t = s.find((function(t) {
              return t[0] === e
            }));
            return t && t[1]
          },
          has: function(e) {
            return !!f.get(e)
          },
          keys: function() {
            return s.map((function(e) {
              return i(e, 1)[0]
            }))
          },
          values: function() {
            return s.map((function(e) {
              return i(e, 2)[1]
            }))
          }
        },
        m = (0, n.default)(f, f.entries());
      t.default = m
    },
    81886: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-valuetext": null
        },
        relatedConcepts: [{
          concept: {
            name: "progress"
          },
          module: "HTML"
        }, {
          concept: {
            name: "status"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "range"],
          ["roletype", "widget"]
        ]
      }
    },
    81900: e => {
      "use strict";
      var t = function() {
          return "string" == typeof
          function() {}.name
        },
        r = Object.getOwnPropertyDescriptor;
      if (r) try {
        r([], "length")
      } catch (e) {
        r = null
      }
      t.functionsHaveConfigurableNames = function() {
        if (!t() || !r) return !1;
        var e = r((function() {}), "name");
        return !!e && !!e.configurable
      };
      var n = Function.prototype.bind;
      t.boundFunctionsHaveNames = function() {
        return t() && "function" == typeof n && "" !== function() {}.bind().name
      }, e.exports = t
    },
    82316: e => {
      "use strict";
      e.exports = ReferenceError
    },
    82777: (e, t, r) => {
      "use strict";
      t.zb = void 0;
      var n, o = (n = r(46511)) && n.__esModule ? n : {
        default: n
      };
      t.zb = o.default, o.default
    },
    82918: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null
        },
        relatedConcepts: [{
          concept: {
            name: "list"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["radio"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"]
        ]
      }
    },
    83145: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-checked": null,
          "aria-posinset": null,
          "aria-setsize": null,
          "aria-selected": "false"
        },
        relatedConcepts: [{
          concept: {
            name: "item"
          },
          module: "XForms"
        }, {
          concept: {
            name: "listitem"
          },
          module: "ARIA"
        }, {
          concept: {
            name: "option"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-selected": "false"
        },
        superClass: [
          ["roletype", "widget", "input"]
        ]
      }
    },
    83352: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-level": "2"
        },
        relatedConcepts: [{
          concept: {
            name: "h1"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h2"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h3"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h4"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h5"
          },
          module: "HTML"
        }, {
          concept: {
            name: "h6"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {
          "aria-level": "2"
        },
        superClass: [
          ["roletype", "structure", "sectionhead"]
        ]
      }
    },
    84788: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "Device Independence Delivery Unit"
          }
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    84857: (e, t, r) => {
      "use strict";
      var n = r(29983),
        o = r(45970)(),
        a = r(6529),
        i = {
          assert: function(e, t) {
            if (!e || "object" != typeof e && "function" != typeof e) throw new a("`O` is not an object");
            if ("string" != typeof t) throw new a("`slot` must be a string");
            if (o.assert(e), !i.has(e, t)) throw new a("`" + t + "` is not present on `O`")
          },
          get: function(e, t) {
            if (!e || "object" != typeof e && "function" != typeof e) throw new a("`O` is not an object");
            if ("string" != typeof t) throw new a("`slot` must be a string");
            var r = o.get(e);
            return r && r["$" + t]
          },
          has: function(e, t) {
            if (!e || "object" != typeof e && "function" != typeof e) throw new a("`O` is not an object");
            if ("string" != typeof t) throw new a("`slot` must be a string");
            var r = o.get(e);
            return !!r && n(r, "$" + t)
          },
          set: function(e, t, r) {
            if (!e || "object" != typeof e && "function" != typeof e) throw new a("`O` is not an object");
            if ("string" != typeof t) throw new a("`slot` must be a string");
            var n = o.get(e);
            n || (n = {}, o.set(e, n)), n["$" + t] = r
          }
        };
      Object.freeze && Object.freeze(i), e.exports = i
    },
    84875: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = i(r(24152)),
        o = i(r(69774)),
        a = i(r(22797));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var l = [
        ["graphics-document", n.default],
        ["graphics-object", o.default],
        ["graphics-symbol", a.default]
      ];
      t.default = l
    },
    85279: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    85345: e => {
      "use strict";
      var t = function(e) {
        return e != e
      };
      e.exports = function(e, r) {
        return 0 === e && 0 === r ? 1 / e == 1 / r : e === r || !(!t(e) || !t(r))
      }
    },
    85557: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-modal": null
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype"]
        ]
      }
    },
    85702: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "footnote [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    85894: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "notice [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "note"]
        ]
      }
    },
    85986: e => {
      "use strict";
      e.exports = ({
        onlyFirst: e = !1
      } = {}) => {
        const t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g")
      }
    },
    86254: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-orientation": "horizontal"
        },
        relatedConcepts: [{
          concept: {
            name: "toolbar"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["menuitem", "group"],
          ["menuitemradio", "group"],
          ["menuitemcheckbox", "group"],
          ["menuitem"],
          ["menuitemcheckbox"],
          ["menuitemradio"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select", "menu"],
          ["roletype", "structure", "section", "group", "select", "menu"]
        ]
      }
    },
    86764: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "colophon [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    87020: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    87049: e => {
      "use strict";
      e.exports = Number.isNaN || function(e) {
        return e != e
      }
    },
    87743: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "status"]
        ]
      }
    },
    87791: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "appendix [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    88479: (e, t, r) => {
      "use strict";
      var n = r(33721),
        o = r(75866),
        a = r(6529),
        i = r(39997);
      e.exports = function(e, t, r) {
        if (!e || "object" != typeof e && "function" != typeof e) throw new a("`obj` must be an object or a function`");
        if ("string" != typeof t && "symbol" != typeof t) throw new a("`property` must be a string or a symbol`");
        if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new a("`nonEnumerable`, if provided, must be a boolean or null");
        if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new a("`nonWritable`, if provided, must be a boolean or null");
        if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new a("`nonConfigurable`, if provided, must be a boolean or null");
        if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new a("`loose`, if provided, must be a boolean");
        var l = arguments.length > 3 ? arguments[3] : null,
          u = arguments.length > 4 ? arguments[4] : null,
          s = arguments.length > 5 ? arguments[5] : null,
          c = arguments.length > 6 && arguments[6],
          d = !!i && i(e, t);
        if (n) n(e, t, {
          configurable: null === s && d ? d.configurable : !s,
          enumerable: null === l && d ? d.enumerable : !l,
          value: r,
          writable: null === u && d ? d.writable : !u
        });
        else {
          if (!c && (l || u || s)) throw new o("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
          e[t] = r
        }
      }
    },
    88624: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "rearnotes [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["doc-endnote"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    88694: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = [],
          n = 0,
          a = !0;

        function i(e) {
          function n() {
            t && t(e, r)
          }
          a ? o.default.nextTick(n) : n()
        }
        e.length > 0 ? e[0]((function t(o, a) {
          r.push(a), ++n >= e.length || o ? i(o) : e[n](t)
        })) : i(null), a = !1
      };
      var n, o = (n = r(13404)) && n.__esModule ? n : {
        default: n
      }
    },
    89184: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    89319: (e, t, r) => {
      "use strict";
      var n = r(87049);
      e.exports = function(e) {
        return n(e) || 0 === e ? e : e < 0 ? -1 : 1
      }
    },
    89426: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    89804: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "aside"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    90248: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "dialog"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "window"]
        ]
      }
    },
    90684: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-posinset": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            name: "MENU_ITEM"
          },
          module: "JAPI"
        }, {
          concept: {
            name: "listitem"
          },
          module: "ARIA"
        }, {
          concept: {
            name: "menuitem"
          },
          module: "HTML"
        }, {
          concept: {
            name: "option"
          },
          module: "ARIA"
        }],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "command"]
        ]
      }
    },
    91150: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "dfn"
          },
          module: "HTML"
        }, {
          concept: {
            name: "dt"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    91995: (e, t, r) => {
      "use strict";
      var n, o = r(12822),
        a = r(93581),
        i = r(16271),
        l = r(30584),
        u = r(82316),
        s = r(75866),
        c = r(6529),
        d = r(29463),
        p = r(73324),
        f = r(74554),
        m = r(28910),
        b = r(49552),
        y = r(25266),
        h = r(79660),
        v = r(89319),
        g = Function,
        w = function(e) {
          try {
            return g('"use strict"; return (' + e + ").constructor;")()
          } catch (e) {}
        },
        P = r(39997),
        C = r(33721),
        E = function() {
          throw new c
        },
        x = P ? function() {
          try {
            return E
          } catch (e) {
            try {
              return P(arguments, "callee").get
            } catch (e) {
              return E
            }
          }
        }() : E,
        q = r(44505)(),
        O = r(8690),
        S = r(69270),
        R = r(41782),
        _ = r(73660),
        j = r(55054),
        M = {},
        A = "undefined" != typeof Uint8Array && O ? O(Uint8Array) : n,
        T = {
          __proto__: null,
          "%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
          "%ArrayIteratorPrototype%": q && O ? O([][Symbol.iterator]()) : n,
          "%AsyncFromSyncIteratorPrototype%": n,
          "%AsyncFunction%": M,
          "%AsyncGenerator%": M,
          "%AsyncGeneratorFunction%": M,
          "%AsyncIteratorPrototype%": M,
          "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
          "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
          "%BigInt64Array%": "undefined" == typeof BigInt64Array ? n : BigInt64Array,
          "%BigUint64Array%": "undefined" == typeof BigUint64Array ? n : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" == typeof DataView ? n : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": a,
          "%eval%": eval,
          "%EvalError%": i,
          "%Float16Array%": "undefined" == typeof Float16Array ? n : Float16Array,
          "%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array,
          "%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array,
          "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry,
          "%Function%": g,
          "%GeneratorFunction%": M,
          "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
          "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
          "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": q && O ? O(O([][Symbol.iterator]())) : n,
          "%JSON%": "object" == typeof JSON ? JSON : n,
          "%Map%": "undefined" == typeof Map ? n : Map,
          "%MapIteratorPrototype%": "undefined" != typeof Map && q && O ? O((new Map)[Symbol.iterator]()) : n,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": o,
          "%Object.getOwnPropertyDescriptor%": P,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" == typeof Promise ? n : Promise,
          "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
          "%RangeError%": l,
          "%ReferenceError%": u,
          "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" == typeof Set ? n : Set,
          "%SetIteratorPrototype%": "undefined" != typeof Set && q && O ? O((new Set)[Symbol.iterator]()) : n,
          "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": q && O ? O("" [Symbol.iterator]()) : n,
          "%Symbol%": q ? Symbol : n,
          "%SyntaxError%": s,
          "%ThrowTypeError%": x,
          "%TypedArray%": A,
          "%TypeError%": c,
          "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
          "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
          "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array,
          "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array,
          "%URIError%": d,
          "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
          "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
          "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet,
          "%Function.prototype.call%": j,
          "%Function.prototype.apply%": _,
          "%Object.defineProperty%": C,
          "%Object.getPrototypeOf%": S,
          "%Math.abs%": p,
          "%Math.floor%": f,
          "%Math.max%": m,
          "%Math.min%": b,
          "%Math.pow%": y,
          "%Math.round%": h,
          "%Math.sign%": v,
          "%Reflect.getPrototypeOf%": R
        };
      if (O) try {
        null.error
      } catch (e) {
        var I = O(O(e));
        T["%Error.prototype%"] = I
      }
      var k = function e(t) {
          var r;
          if ("%AsyncFunction%" === t) r = w("async function () {}");
          else if ("%GeneratorFunction%" === t) r = w("function* () {}");
          else if ("%AsyncGeneratorFunction%" === t) r = w("async function* () {}");
          else if ("%AsyncGenerator%" === t) {
            var n = e("%AsyncGeneratorFunction%");
            n && (r = n.prototype)
          } else if ("%AsyncIteratorPrototype%" === t) {
            var o = e("%AsyncGenerator%");
            o && O && (r = O(o.prototype))
          }
          return T[t] = r, r
        },
        N = {
          __proto__: null,
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"]
        },
        F = r(66729),
        B = r(29983),
        L = F.call(j, Array.prototype.concat),
        U = F.call(_, Array.prototype.splice),
        D = F.call(j, String.prototype.replace),
        H = F.call(j, String.prototype.slice),
        W = F.call(j, RegExp.prototype.exec),
        z = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        $ = /\\(\\)?/g,
        V = function(e, t) {
          var r, n = e;
          if (B(N, n) && (n = "%" + (r = N[n])[0] + "%"), B(T, n)) {
            var o = T[n];
            if (o === M && (o = k(n)), void 0 === o && !t) throw new c("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
              alias: r,
              name: n,
              value: o
            }
          }
          throw new s("intrinsic " + e + " does not exist!")
        };
      e.exports = function(e, t) {
        if ("string" != typeof e || 0 === e.length) throw new c("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t) throw new c('"allowMissing" argument must be a boolean');
        if (null === W(/^%?[^%]*%?$/, e)) throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var r = function(e) {
            var t = H(e, 0, 1),
              r = H(e, -1);
            if ("%" === t && "%" !== r) throw new s("invalid intrinsic syntax, expected closing `%`");
            if ("%" === r && "%" !== t) throw new s("invalid intrinsic syntax, expected opening `%`");
            var n = [];
            return D(e, z, (function(e, t, r, o) {
              n[n.length] = r ? D(o, $, "$1") : t || e
            })), n
          }(e),
          n = r.length > 0 ? r[0] : "",
          o = V("%" + n + "%", t),
          a = o.name,
          i = o.value,
          l = !1,
          u = o.alias;
        u && (n = u[0], U(r, L([0, 1], u)));
        for (var d = 1, p = !0; d < r.length; d += 1) {
          var f = r[d],
            m = H(f, 0, 1),
            b = H(f, -1);
          if (('"' === m || "'" === m || "`" === m || '"' === b || "'" === b || "`" === b) && m !== b) throw new s("property names with quotes must have matching quotes");
          if ("constructor" !== f && p || (l = !0), B(T, a = "%" + (n += "." + f) + "%")) i = T[a];
          else if (null != i) {
            if (!(f in i)) {
              if (!t) throw new c("base intrinsic for " + e + " exists, but the property is not available.");
              return
            }
            if (P && d + 1 >= r.length) {
              var y = P(i, f);
              i = (p = !!y) && "get" in y && !("originalValue" in y.get) ? y.get : i[f]
            } else p = B(i, f), i = i[f];
            p && !l && (T[a] = i)
          }
        }
        return i
      }
    },
    92170: (e, t, r) => {
      "use strict";
      var n = r(84857),
        o = r(75866),
        a = "object" == typeof StopIteration ? StopIteration : null;
      e.exports = function(e) {
        if (!a) throw new o("this environment lacks StopIteration");
        n.set(e, "[[Done]]", !1);
        var t = {
          next: function() {
            var e = n.get(this, "[[Iterator]]"),
              t = !!n.get(e, "[[Done]]");
            try {
              return {
                done: t,
                value: t ? void 0 : e.next()
              }
            } catch (t) {
              if (n.set(e, "[[Done]]", !0), t !== a) throw t;
              return {
                done: !0,
                value: void 0
              }
            }
          }
        };
        return n.set(t, "[[Iterator]]", e), t
      }
    },
    92330: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{
          concept: {
            name: "math"
          },
          module: "HTML"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    92933: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-orientation": "horizontal"
        },
        relatedConcepts: [{
          concept: {
            name: "menubar"
          },
          module: "ARIA"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "group"]
        ]
      }
    },
    93173: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    93247: (e, t, r) => {
      "use strict";
      var n = r(31576),
        o = r(28378),
        a = r(34088),
        i = r(74538);
      e.exports = function(e) {
        if (e && "object" == typeof e) {
          if (n(e)) return "Map";
          if (o(e)) return "Set";
          if (a(e)) return "WeakMap";
          if (i(e)) return "WeakSet"
        }
        return !1
      }
    },
    93362: (e, t, r) => {
      "use strict";
      var n = r(57126),
        o = n("Boolean.prototype.toString"),
        a = n("Object.prototype.toString"),
        i = r(72914)();
      e.exports = function(e) {
        return "boolean" == typeof e || null !== e && "object" == typeof e && (i ? function(e) {
          try {
            return o(e), !0
          } catch (e) {
            return !1
          }
        }(e) : "[object Boolean]" === a(e))
      }
    },
    93581: e => {
      "use strict";
      e.exports = Error
    },
    93668: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure"]
        ]
      }
    },
    93677: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return r++
      };
      var r = 0
    },
    95137: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-level": null,
          "aria-multiselectable": null,
          "aria-orientation": "horizontal"
        },
        relatedConcepts: [{
          module: "DAISY",
          concept: {
            name: "guide"
          }
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["tab"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"]
        ]
      }
    },
    95354: (e, t, r) => {
      "use strict";
      var n = r(66729),
        o = r(73660),
        a = r(55054),
        i = r(26565);
      e.exports = i || n.call(a, o)
    },
    96850: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "toc [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark", "navigation"]
        ]
      }
    },
    97644: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    97734: (e, t, r) => {
      "use strict";
      var n, o = r(80064),
        a = r(39997);
      try {
        n = [].__proto__ === Array.prototype
      } catch (e) {
        if (!e || "object" != typeof e || !("code" in e) || "ERR_PROTO_ACCESS" !== e.code) throw e
      }
      var i = !!n && a && a(Object.prototype, "__proto__"),
        l = Object,
        u = l.getPrototypeOf;
      e.exports = i && "function" == typeof i.get ? o([i.get]) : "function" == typeof u && function(e) {
        return u(null == e ? e : l(e))
      }
    },
    97814: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-colindex": null,
          "aria-expanded": null,
          "aria-level": null,
          "aria-posinset": null,
          "aria-rowindex": null,
          "aria-selected": null,
          "aria-setsize": null
        },
        relatedConcepts: [{
          concept: {
            name: "tr"
          },
          module: "HTML"
        }],
        requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
        requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
        requiredOwnedElements: [
          ["cell"],
          ["columnheader"],
          ["gridcell"],
          ["rowheader"]
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "group"],
          ["roletype", "widget"]
        ]
      }
    },
    98234: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "qna [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section"]
        ]
      }
    },
    99075: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "part [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark"]
        ]
      }
    },
    99244: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-selected": null
        },
        relatedConcepts: [{
          concept: {
            attributes: [{
              name: "role",
              value: "gridcell"
            }],
            name: "td"
          },
          module: "HTML"
        }],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "cell"],
          ["roletype", "widget"]
        ]
      }
    },
    99370: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: []
      }
    },
    99686: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null
        },
        relatedConcepts: [{
          concept: {
            name: "subtitle [EPUB-SSV]"
          },
          module: "EPUB"
        }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "sectionhead"]
        ]
      }
    }
  }
]);