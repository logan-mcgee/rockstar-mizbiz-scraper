! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "6316bb45-bc75-4b47-a05f-3309a5725c0f", t._sentryDebugIdIdentifier = "sentry-dbid-6316bb45-bc75-4b47-a05f-3309a5725c0f")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [2151], {
    98018: (t, e, r) => {
      "use strict";
      var n = r(20844),
        o = {
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
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        c = {};

      function s(t) {
        return n.isMemo(t) ? a : c[t.$$typeof] || o
      }
      c[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, c[n.Memo] = a;
      var u = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        v = Object.prototype;
      t.exports = function t(e, r, n) {
        if ("string" != typeof r) {
          if (v) {
            var o = d(r);
            o && o !== v && t(e, o, n)
          }
          var a = l(r);
          f && (a = a.concat(f(r)));
          for (var c = s(e), h = s(r), y = 0; y < a.length; ++y) {
            var m = a[y];
            if (!(i[m] || n && n[m] || h && h[m] || c && c[m])) {
              var b = p(r, m);
              try {
                u(e, m, b)
              } catch (t) {}
            }
          }
        }
        return e
      }
    },
    98160: (t, e) => {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        c = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        u = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        v = r ? Symbol.for("react.suspense_list") : 60120,
        h = r ? Symbol.for("react.memo") : 60115,
        y = r ? Symbol.for("react.lazy") : 60116,
        m = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        g = r ? Symbol.for("react.responder") : 60118,
        x = r ? Symbol.for("react.scope") : 60119;

      function w(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case n:
              switch (t = t.type) {
                case l:
                case f:
                case i:
                case c:
                case a:
                case d:
                  return t;
                default:
                  switch (t = t && t.$$typeof) {
                    case u:
                    case p:
                    case y:
                    case h:
                    case s:
                      return t;
                    default:
                      return e
                  }
              }
            case o:
              return e
          }
        }
      }

      function _(t) {
        return w(t) === f
      }
      e.AsyncMode = l, e.ConcurrentMode = f, e.ContextConsumer = u, e.ContextProvider = s, e.Element = n, e.ForwardRef = p, e.Fragment = i, e.Lazy = y, e.Memo = h, e.Portal = o, e.Profiler = c, e.StrictMode = a, e.Suspense = d, e.isAsyncMode = function(t) {
        return _(t) || w(t) === l
      }, e.isConcurrentMode = _, e.isContextConsumer = function(t) {
        return w(t) === u
      }, e.isContextProvider = function(t) {
        return w(t) === s
      }, e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === n
      }, e.isForwardRef = function(t) {
        return w(t) === p
      }, e.isFragment = function(t) {
        return w(t) === i
      }, e.isLazy = function(t) {
        return w(t) === y
      }, e.isMemo = function(t) {
        return w(t) === h
      }, e.isPortal = function(t) {
        return w(t) === o
      }, e.isProfiler = function(t) {
        return w(t) === c
      }, e.isStrictMode = function(t) {
        return w(t) === a
      }, e.isSuspense = function(t) {
        return w(t) === d
      }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === i || t === f || t === c || t === a || t === d || t === v || "object" == typeof t && null !== t && (t.$$typeof === y || t.$$typeof === h || t.$$typeof === s || t.$$typeof === u || t.$$typeof === p || t.$$typeof === b || t.$$typeof === g || t.$$typeof === x || t.$$typeof === m)
      }, e.typeOf = w
    },
    20844: (t, e, r) => {
      "use strict";
      t.exports = r(98160)
    },
    41068: (t, e, r) => {
      var n = r(34078)(r(20605), "DataView");
      t.exports = n
    },
    79133: (t, e, r) => {
      var n = r(27520),
        o = r(41414),
        i = r(21009),
        a = r(35229),
        c = r(3669);

      function s(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var n = t[e];
          this.set(n[0], n[1])
        }
      }
      s.prototype.clear = n, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = a, s.prototype.set = c, t.exports = s
    },
    34015: (t, e, r) => {
      var n = r(8646),
        o = r(62896),
        i = r(38579),
        a = r(74527),
        c = r(8119);

      function s(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var n = t[e];
          this.set(n[0], n[1])
        }
      }
      s.prototype.clear = n, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = a, s.prototype.set = c, t.exports = s
    },
    33775: (t, e, r) => {
      var n = r(34078)(r(20605), "Map");
      t.exports = n
    },
    86669: (t, e, r) => {
      var n = r(30384),
        o = r(37942),
        i = r(78817),
        a = r(29805),
        c = r(47845);

      function s(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var n = t[e];
          this.set(n[0], n[1])
        }
      }
      s.prototype.clear = n, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = a, s.prototype.set = c, t.exports = s
    },
    69012: (t, e, r) => {
      var n = r(34078)(r(20605), "Promise");
      t.exports = n
    },
    51153: (t, e, r) => {
      var n = r(34078)(r(20605), "Set");
      t.exports = n
    },
    3025: (t, e, r) => {
      var n = r(34015),
        o = r(1196),
        i = r(87626),
        a = r(73541),
        c = r(15689),
        s = r(4513);

      function u(t) {
        var e = this.__data__ = new n(t);
        this.size = e.size
      }
      u.prototype.clear = o, u.prototype.delete = i, u.prototype.get = a, u.prototype.has = c, u.prototype.set = s, t.exports = u
    },
    80689: (t, e, r) => {
      var n = r(20605).Symbol;
      t.exports = n
    },
    69748: (t, e, r) => {
      var n = r(20605).Uint8Array;
      t.exports = n
    },
    60735: (t, e, r) => {
      var n = r(34078)(r(20605), "WeakMap");
      t.exports = n
    },
    62761: t => {
      t.exports = function(t, e, r) {
        switch (r.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, r[0]);
          case 2:
            return t.call(e, r[0], r[1]);
          case 3:
            return t.call(e, r[0], r[1], r[2])
        }
        return t.apply(e, r)
      }
    },
    88449: t => {
      t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
        return t
      }
    },
    46410: t => {
      t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n;) {
          var a = t[r];
          e(a, r, t) && (i[o++] = a)
        }
        return i
      }
    },
    90775: (t, e, r) => {
      var n = r(4800),
        o = r(57692),
        i = r(82993),
        a = r(20504),
        c = r(9257),
        s = r(42111),
        u = Object.prototype.hasOwnProperty;
      t.exports = function(t, e) {
        var r = i(t),
          l = !r && o(t),
          f = !r && !l && a(t),
          p = !r && !l && !f && s(t),
          d = r || l || f || p,
          v = d ? n(t.length, String) : [],
          h = v.length;
        for (var y in t) !e && !u.call(t, y) || d && ("length" == y || f && ("offset" == y || "parent" == y) || p && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || c(y, h)) || v.push(y);
        return v
      }
    },
    16548: t => {
      t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n;) o[r] = e(t[r], r, t);
        return o
      }
    },
    272: t => {
      t.exports = function(t, e) {
        for (var r = -1, n = e.length, o = t.length; ++r < n;) t[o + r] = e[r];
        return t
      }
    },
    88205: (t, e, r) => {
      var n = r(91088),
        o = r(21224);
      t.exports = function(t, e, r) {
        (void 0 !== r && !o(t[e], r) || void 0 === r && !(e in t)) && n(t, e, r)
      }
    },
    71507: (t, e, r) => {
      var n = r(91088),
        o = r(21224),
        i = Object.prototype.hasOwnProperty;
      t.exports = function(t, e, r) {
        var a = t[e];
        i.call(t, e) && o(a, r) && (void 0 !== r || e in t) || n(t, e, r)
      }
    },
    36953: (t, e, r) => {
      var n = r(21224);
      t.exports = function(t, e) {
        for (var r = t.length; r--;)
          if (n(t[r][0], e)) return r;
        return -1
      }
    },
    31005: (t, e, r) => {
      var n = r(97231),
        o = r(62110);
      t.exports = function(t, e) {
        return t && n(e, o(e), t)
      }
    },
    51310: (t, e, r) => {
      var n = r(97231),
        o = r(6793);
      t.exports = function(t, e) {
        return t && n(e, o(e), t)
      }
    },
    91088: (t, e, r) => {
      var n = r(70539);
      t.exports = function(t, e, r) {
        "__proto__" == e && n ? n(t, e, {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        }) : t[e] = r
      }
    },
    38591: (t, e, r) => {
      var n = r(3025),
        o = r(88449),
        i = r(71507),
        a = r(31005),
        c = r(51310),
        s = r(86010),
        u = r(79599),
        l = r(8735),
        f = r(55460),
        p = r(86274),
        d = r(30693),
        v = r(54133),
        h = r(11437),
        y = r(82271),
        m = r(49849),
        b = r(82993),
        g = r(20504),
        x = r(90786),
        w = r(23693),
        _ = r(69336),
        j = r(62110),
        S = r(6793),
        E = "[object Arguments]",
        A = "[object Function]",
        O = "[object Object]",
        C = {};
      C[E] = C["[object Array]"] = C["[object ArrayBuffer]"] = C["[object DataView]"] = C["[object Boolean]"] = C["[object Date]"] = C["[object Float32Array]"] = C["[object Float64Array]"] = C["[object Int8Array]"] = C["[object Int16Array]"] = C["[object Int32Array]"] = C["[object Map]"] = C["[object Number]"] = C[O] = C["[object RegExp]"] = C["[object Set]"] = C["[object String]"] = C["[object Symbol]"] = C["[object Uint8Array]"] = C["[object Uint8ClampedArray]"] = C["[object Uint16Array]"] = C["[object Uint32Array]"] = !0, C["[object Error]"] = C[A] = C["[object WeakMap]"] = !1, t.exports = function t(e, r, k, L, R, T) {
        var P, M = 1 & r,
          D = 2 & r,
          $ = 4 & r;
        if (k && (P = R ? k(e, L, R, T) : k(e)), void 0 !== P) return P;
        if (!w(e)) return e;
        var F = b(e);
        if (F) {
          if (P = h(e), !M) return u(e, P)
        } else {
          var z = v(e),
            I = z == A || "[object GeneratorFunction]" == z;
          if (g(e)) return s(e, M);
          if (z == O || z == E || I && !R) {
            if (P = D || I ? {} : m(e), !M) return D ? f(e, c(P, e)) : l(e, a(P, e))
          } else {
            if (!C[z]) return R ? e : {};
            P = y(e, z, M)
          }
        }
        T || (T = new n);
        var B = T.get(e);
        if (B) return B;
        T.set(e, P), _(e) ? e.forEach((function(n) {
          P.add(t(n, r, k, n, e, T))
        })) : x(e) && e.forEach((function(n, o) {
          P.set(o, t(n, r, k, o, e, T))
        }));
        var W = F ? void 0 : ($ ? D ? d : p : D ? S : j)(e);
        return o(W || e, (function(n, o) {
          W && (n = e[o = n]), i(P, o, t(n, r, k, o, e, T))
        })), P
      }
    },
    39232: (t, e, r) => {
      var n = r(23693),
        o = Object.create,
        i = function() {
          function t() {}
          return function(e) {
            if (!n(e)) return {};
            if (o) return o(e);
            t.prototype = e;
            var r = new t;
            return t.prototype = void 0, r
          }
        }();
      t.exports = i
    },
    24736: (t, e, r) => {
      var n = r(272),
        o = r(99027);
      t.exports = function t(e, r, i, a, c) {
        var s = -1,
          u = e.length;
        for (i || (i = o), c || (c = []); ++s < u;) {
          var l = e[s];
          r > 0 && i(l) ? r > 1 ? t(l, r - 1, i, a, c) : n(c, l) : a || (c[c.length] = l)
        }
        return c
      }
    },
    88649: (t, e, r) => {
      var n = r(49829)();
      t.exports = n
    },
    38958: (t, e, r) => {
      var n = r(21129),
        o = r(19029);
      t.exports = function(t, e) {
        for (var r = 0, i = (e = n(e, t)).length; null != t && r < i;) t = t[o(e[r++])];
        return r && r == i ? t : void 0
      }
    },
    65639: (t, e, r) => {
      var n = r(272),
        o = r(82993);
      t.exports = function(t, e, r) {
        var i = e(t);
        return o(t) ? i : n(i, r(t))
      }
    },
    95192: (t, e, r) => {
      var n = r(80689),
        o = r(54915),
        i = r(18150),
        a = n ? n.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? o(t) : i(t)
      }
    },
    1694: (t, e, r) => {
      var n = r(95192),
        o = r(56490);
      t.exports = function(t) {
        return o(t) && "[object Arguments]" == n(t)
      }
    },
    80420: (t, e, r) => {
      var n = r(54133),
        o = r(56490);
      t.exports = function(t) {
        return o(t) && "[object Map]" == n(t)
      }
    },
    77835: (t, e, r) => {
      var n = r(3882),
        o = r(72016),
        i = r(23693),
        a = r(62529),
        c = /^\[object .+?Constructor\]$/,
        s = Function.prototype,
        u = Object.prototype,
        l = s.toString,
        f = u.hasOwnProperty,
        p = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      t.exports = function(t) {
        return !(!i(t) || o(t)) && (n(t) ? p : c).test(a(t))
      }
    },
    87222: (t, e, r) => {
      var n = r(54133),
        o = r(56490);
      t.exports = function(t) {
        return o(t) && "[object Set]" == n(t)
      }
    },
    81269: (t, e, r) => {
      var n = r(95192),
        o = r(26822),
        i = r(56490),
        a = {};
      a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
        return i(t) && o(t.length) && !!a[n(t)]
      }
    },
    71624: (t, e, r) => {
      var n = r(69111),
        o = r(35602),
        i = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!n(t)) return o(t);
        var e = [];
        for (var r in Object(t)) i.call(t, r) && "constructor" != r && e.push(r);
        return e
      }
    },
    35543: (t, e, r) => {
      var n = r(23693),
        o = r(69111),
        i = r(26165),
        a = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!n(t)) return i(t);
        var e = o(t),
          r = [];
        for (var c in t)("constructor" != c || !e && a.call(t, c)) && r.push(c);
        return r
      }
    },
    1074: (t, e, r) => {
      var n = r(3025),
        o = r(88205),
        i = r(88649),
        a = r(42104),
        c = r(23693),
        s = r(6793),
        u = r(6894);
      t.exports = function t(e, r, l, f, p) {
        e !== r && i(r, (function(i, s) {
          if (p || (p = new n), c(i)) a(e, r, s, l, t, f, p);
          else {
            var d = f ? f(u(e, s), i, s + "", e, r, p) : void 0;
            void 0 === d && (d = i), o(e, s, d)
          }
        }), s)
      }
    },
    42104: (t, e, r) => {
      var n = r(88205),
        o = r(86010),
        i = r(36585),
        a = r(79599),
        c = r(49849),
        s = r(57692),
        u = r(82993),
        l = r(35933),
        f = r(20504),
        p = r(3882),
        d = r(23693),
        v = r(88691),
        h = r(42111),
        y = r(6894),
        m = r(48620);
      t.exports = function(t, e, r, b, g, x, w) {
        var _ = y(t, r),
          j = y(e, r),
          S = w.get(j);
        if (S) n(t, r, S);
        else {
          var E = x ? x(_, j, r + "", t, e, w) : void 0,
            A = void 0 === E;
          if (A) {
            var O = u(j),
              C = !O && f(j),
              k = !O && !C && h(j);
            E = j, O || C || k ? u(_) ? E = _ : l(_) ? E = a(_) : C ? (A = !1, E = o(j, !0)) : k ? (A = !1, E = i(j, !0)) : E = [] : v(j) || s(j) ? (E = _, s(_) ? E = m(_) : d(_) && !p(_) || (E = c(j))) : A = !1
          }
          A && (w.set(j, E), g(E, j, b, x, w), w.delete(j)), n(t, r, E)
        }
      }
    },
    21399: t => {
      var e = Math.ceil,
        r = Math.max;
      t.exports = function(t, n, o, i) {
        for (var a = -1, c = r(e((n - t) / (o || 1)), 0), s = Array(c); c--;) s[i ? c : ++a] = t, t += o;
        return s
      }
    },
    56230: (t, e, r) => {
      var n = r(67152),
        o = r(9477),
        i = r(80657);
      t.exports = function(t, e) {
        return i(o(t, e, n), t + "")
      }
    },
    9986: (t, e, r) => {
      var n = r(71507),
        o = r(21129),
        i = r(9257),
        a = r(23693),
        c = r(19029);
      t.exports = function(t, e, r, s) {
        if (!a(t)) return t;
        for (var u = -1, l = (e = o(e, t)).length, f = l - 1, p = t; null != p && ++u < l;) {
          var d = c(e[u]),
            v = r;
          if ("__proto__" === d || "constructor" === d || "prototype" === d) return t;
          if (u != f) {
            var h = p[d];
            void 0 === (v = s ? s(h, d, p) : void 0) && (v = a(h) ? h : i(e[u + 1]) ? [] : {})
          }
          n(p, d, v), p = p[d]
        }
        return t
      }
    },
    63074: (t, e, r) => {
      var n = r(32774),
        o = r(70539),
        i = r(67152),
        a = o ? function(t, e) {
          return o(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(e),
            writable: !0
          })
        } : i;
      t.exports = a
    },
    82328: t => {
      t.exports = function(t, e, r) {
        var n = -1,
          o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e), (r = r > o ? o : r) < 0 && (r += o), o = e > r ? 0 : r - e >>> 0, e >>>= 0;
        for (var i = Array(o); ++n < o;) i[n] = t[n + e];
        return i
      }
    },
    4800: t => {
      t.exports = function(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
      }
    },
    83236: (t, e, r) => {
      var n = r(80689),
        o = r(16548),
        i = r(82993),
        a = r(69978),
        c = n ? n.prototype : void 0,
        s = c ? c.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return o(e, t) + "";
        if (a(e)) return s ? s.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -1 / 0 ? "-0" : r
      }
    },
    42368: (t, e, r) => {
      var n = r(69896),
        o = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, n(t) + 1).replace(o, "") : t
      }
    },
    22293: t => {
      t.exports = function(t) {
        return function(e) {
          return t(e)
        }
      }
    },
    66379: (t, e, r) => {
      var n = r(21129),
        o = r(57226),
        i = r(10553),
        a = r(19029);
      t.exports = function(t, e) {
        return e = n(e, t), null == (t = i(t, e)) || delete t[a(o(e))]
      }
    },
    21129: (t, e, r) => {
      var n = r(82993),
        o = r(67226),
        i = r(83738),
        a = r(9398);
      t.exports = function(t, e) {
        return n(t) ? t : o(t, e) ? [t] : i(a(t))
      }
    },
    55717: (t, e, r) => {
      var n = r(69748);
      t.exports = function(t) {
        var e = new t.constructor(t.byteLength);
        return new n(e).set(new n(t)), e
      }
    },
    86010: (t, e, r) => {
      t = r.nmd(t);
      var n = r(20605),
        o = e && !e.nodeType && e,
        i = o && t && !t.nodeType && t,
        a = i && i.exports === o ? n.Buffer : void 0,
        c = a ? a.allocUnsafe : void 0;
      t.exports = function(t, e) {
        if (e) return t.slice();
        var r = t.length,
          n = c ? c(r) : new t.constructor(r);
        return t.copy(n), n
      }
    },
    67065: (t, e, r) => {
      var n = r(55717);
      t.exports = function(t, e) {
        var r = e ? n(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.byteLength)
      }
    },
    60321: t => {
      var e = /\w*$/;
      t.exports = function(t) {
        var r = new t.constructor(t.source, e.exec(t));
        return r.lastIndex = t.lastIndex, r
      }
    },
    93976: (t, e, r) => {
      var n = r(80689),
        o = n ? n.prototype : void 0,
        i = o ? o.valueOf : void 0;
      t.exports = function(t) {
        return i ? Object(i.call(t)) : {}
      }
    },
    36585: (t, e, r) => {
      var n = r(55717);
      t.exports = function(t, e) {
        var r = e ? n(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
      }
    },
    79599: t => {
      t.exports = function(t, e) {
        var r = -1,
          n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
      }
    },
    97231: (t, e, r) => {
      var n = r(71507),
        o = r(91088);
      t.exports = function(t, e, r, i) {
        var a = !r;
        r || (r = {});
        for (var c = -1, s = e.length; ++c < s;) {
          var u = e[c],
            l = i ? i(r[u], t[u], u, r, t) : void 0;
          void 0 === l && (l = t[u]), a ? o(r, u, l) : n(r, u, l)
        }
        return r
      }
    },
    8735: (t, e, r) => {
      var n = r(97231),
        o = r(32744);
      t.exports = function(t, e) {
        return n(t, o(t), e)
      }
    },
    55460: (t, e, r) => {
      var n = r(97231),
        o = r(51927);
      t.exports = function(t, e) {
        return n(t, o(t), e)
      }
    },
    78633: (t, e, r) => {
      var n = r(20605)["__core-js_shared__"];
      t.exports = n
    },
    36791: (t, e, r) => {
      var n = r(56230),
        o = r(4560);
      t.exports = function(t) {
        return n((function(e, r) {
          var n = -1,
            i = r.length,
            a = i > 1 ? r[i - 1] : void 0,
            c = i > 2 ? r[2] : void 0;
          for (a = t.length > 3 && "function" == typeof a ? (i--, a) : void 0, c && o(r[0], r[1], c) && (a = i < 3 ? void 0 : a, i = 1), e = Object(e); ++n < i;) {
            var s = r[n];
            s && t(e, s, n, a)
          }
          return e
        }))
      }
    },
    49829: t => {
      t.exports = function(t) {
        return function(e, r, n) {
          for (var o = -1, i = Object(e), a = n(e), c = a.length; c--;) {
            var s = a[t ? c : ++o];
            if (!1 === r(i[s], s, i)) break
          }
          return e
        }
      }
    },
    15604: (t, e, r) => {
      var n = r(21399),
        o = r(4560),
        i = r(37384);
      t.exports = function(t) {
        return function(e, r, a) {
          return a && "number" != typeof a && o(e, r, a) && (r = a = void 0), e = i(e), void 0 === r ? (r = e, e = 0) : r = i(r), a = void 0 === a ? e < r ? 1 : -1 : i(a), n(e, r, a, t)
        }
      }
    },
    20674: (t, e, r) => {
      var n = r(88691);
      t.exports = function(t) {
        return n(t) ? void 0 : t
      }
    },
    70539: (t, e, r) => {
      var n = r(34078),
        o = function() {
          try {
            var t = n(Object, "defineProperty");
            return t({}, "", {}), t
          } catch (t) {}
        }();
      t.exports = o
    },
    17264: (t, e, r) => {
      var n = r(27314),
        o = r(9477),
        i = r(80657);
      t.exports = function(t) {
        return i(o(t, void 0, n), t + "")
      }
    },
    38888: (t, e, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      t.exports = n
    },
    86274: (t, e, r) => {
      var n = r(65639),
        o = r(32744),
        i = r(62110);
      t.exports = function(t) {
        return n(t, i, o)
      }
    },
    30693: (t, e, r) => {
      var n = r(65639),
        o = r(51927),
        i = r(6793);
      t.exports = function(t) {
        return n(t, i, o)
      }
    },
    49851: (t, e, r) => {
      var n = r(91194);
      t.exports = function(t, e) {
        var r = t.__data__;
        return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
      }
    },
    34078: (t, e, r) => {
      var n = r(77835),
        o = r(4008);
      t.exports = function(t, e) {
        var r = o(t, e);
        return n(r) ? r : void 0
      }
    },
    90079: (t, e, r) => {
      var n = r(34543)(Object.getPrototypeOf, Object);
      t.exports = n
    },
    54915: (t, e, r) => {
      var n = r(80689),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        c = n ? n.toStringTag : void 0;
      t.exports = function(t) {
        var e = i.call(t, c),
          r = t[c];
        try {
          t[c] = void 0;
          var n = !0
        } catch (t) {}
        var o = a.call(t);
        return n && (e ? t[c] = r : delete t[c]), o
      }
    },
    32744: (t, e, r) => {
      var n = r(46410),
        o = r(47489),
        i = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        c = a ? function(t) {
          return null == t ? [] : (t = Object(t), n(a(t), (function(e) {
            return i.call(t, e)
          })))
        } : o;
      t.exports = c
    },
    51927: (t, e, r) => {
      var n = r(272),
        o = r(90079),
        i = r(32744),
        a = r(47489),
        c = Object.getOwnPropertySymbols ? function(t) {
          for (var e = []; t;) n(e, i(t)), t = o(t);
          return e
        } : a;
      t.exports = c
    },
    54133: (t, e, r) => {
      var n = r(41068),
        o = r(33775),
        i = r(69012),
        a = r(51153),
        c = r(60735),
        s = r(95192),
        u = r(62529),
        l = "[object Map]",
        f = "[object Promise]",
        p = "[object Set]",
        d = "[object WeakMap]",
        v = "[object DataView]",
        h = u(n),
        y = u(o),
        m = u(i),
        b = u(a),
        g = u(c),
        x = s;
      (n && x(new n(new ArrayBuffer(1))) != v || o && x(new o) != l || i && x(i.resolve()) != f || a && x(new a) != p || c && x(new c) != d) && (x = function(t) {
        var e = s(t),
          r = "[object Object]" == e ? t.constructor : void 0,
          n = r ? u(r) : "";
        if (n) switch (n) {
          case h:
            return v;
          case y:
            return l;
          case m:
            return f;
          case b:
            return p;
          case g:
            return d
        }
        return e
      }), t.exports = x
    },
    4008: t => {
      t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
      }
    },
    27520: (t, e, r) => {
      var n = r(41506);
      t.exports = function() {
        this.__data__ = n ? n(null) : {}, this.size = 0
      }
    },
    41414: t => {
      t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
      }
    },
    21009: (t, e, r) => {
      var n = r(41506),
        o = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = this.__data__;
        if (n) {
          var r = e[t];
          return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return o.call(e, t) ? e[t] : void 0
      }
    },
    35229: (t, e, r) => {
      var n = r(41506),
        o = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = this.__data__;
        return n ? void 0 !== e[t] : o.call(e, t)
      }
    },
    3669: (t, e, r) => {
      var n = r(41506);
      t.exports = function(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e, this
      }
    },
    11437: t => {
      var e = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var r = t.length,
          n = new t.constructor(r);
        return r && "string" == typeof t[0] && e.call(t, "index") && (n.index = t.index, n.input = t.input), n
      }
    },
    82271: (t, e, r) => {
      var n = r(55717),
        o = r(67065),
        i = r(60321),
        a = r(93976),
        c = r(36585);
      t.exports = function(t, e, r) {
        var s = t.constructor;
        switch (e) {
          case "[object ArrayBuffer]":
            return n(t);
          case "[object Boolean]":
          case "[object Date]":
            return new s(+t);
          case "[object DataView]":
            return o(t, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return c(t, r);
          case "[object Map]":
          case "[object Set]":
            return new s;
          case "[object Number]":
          case "[object String]":
            return new s(t);
          case "[object RegExp]":
            return i(t);
          case "[object Symbol]":
            return a(t)
        }
      }
    },
    49849: (t, e, r) => {
      var n = r(39232),
        o = r(90079),
        i = r(69111);
      t.exports = function(t) {
        return "function" != typeof t.constructor || i(t) ? {} : n(o(t))
      }
    },
    99027: (t, e, r) => {
      var n = r(80689),
        o = r(57692),
        i = r(82993),
        a = n ? n.isConcatSpreadable : void 0;
      t.exports = function(t) {
        return i(t) || o(t) || !!(a && t && t[a])
      }
    },
    9257: t => {
      var e = /^(?:0|[1-9]\d*)$/;
      t.exports = function(t, r) {
        var n = typeof t;
        return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && e.test(t)) && t > -1 && t % 1 == 0 && t < r
      }
    },
    4560: (t, e, r) => {
      var n = r(21224),
        o = r(83278),
        i = r(9257),
        a = r(23693);
      t.exports = function(t, e, r) {
        if (!a(r)) return !1;
        var c = typeof e;
        return !!("number" == c ? o(r) && i(e, r.length) : "string" == c && e in r) && n(r[e], t)
      }
    },
    67226: (t, e, r) => {
      var n = r(82993),
        o = r(69978),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
      t.exports = function(t, e) {
        if (n(t)) return !1;
        var r = typeof t;
        return !("number" != r && "symbol" != r && "boolean" != r && null != t && !o(t)) || a.test(t) || !i.test(t) || null != e && t in Object(e)
      }
    },
    91194: t => {
      t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
      }
    },
    72016: (t, e, r) => {
      var n, o = r(78633),
        i = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
      t.exports = function(t) {
        return !!i && i in t
      }
    },
    69111: t => {
      var e = Object.prototype;
      t.exports = function(t) {
        var r = t && t.constructor;
        return t === ("function" == typeof r && r.prototype || e)
      }
    },
    8646: t => {
      t.exports = function() {
        this.__data__ = [], this.size = 0
      }
    },
    62896: (t, e, r) => {
      var n = r(36953),
        o = Array.prototype.splice;
      t.exports = function(t) {
        var e = this.__data__,
          r = n(e, t);
        return !(r < 0 || (r == e.length - 1 ? e.pop() : o.call(e, r, 1), --this.size, 0))
      }
    },
    38579: (t, e, r) => {
      var n = r(36953);
      t.exports = function(t) {
        var e = this.__data__,
          r = n(e, t);
        return r < 0 ? void 0 : e[r][1]
      }
    },
    74527: (t, e, r) => {
      var n = r(36953);
      t.exports = function(t) {
        return n(this.__data__, t) > -1
      }
    },
    8119: (t, e, r) => {
      var n = r(36953);
      t.exports = function(t, e) {
        var r = this.__data__,
          o = n(r, t);
        return o < 0 ? (++this.size, r.push([t, e])) : r[o][1] = e, this
      }
    },
    30384: (t, e, r) => {
      var n = r(79133),
        o = r(34015),
        i = r(33775);
      t.exports = function() {
        this.size = 0, this.__data__ = {
          hash: new n,
          map: new(i || o),
          string: new n
        }
      }
    },
    37942: (t, e, r) => {
      var n = r(49851);
      t.exports = function(t) {
        var e = n(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
      }
    },
    78817: (t, e, r) => {
      var n = r(49851);
      t.exports = function(t) {
        return n(this, t).get(t)
      }
    },
    29805: (t, e, r) => {
      var n = r(49851);
      t.exports = function(t) {
        return n(this, t).has(t)
      }
    },
    47845: (t, e, r) => {
      var n = r(49851);
      t.exports = function(t, e) {
        var r = n(this, t),
          o = r.size;
        return r.set(t, e), this.size += r.size == o ? 0 : 1, this
      }
    },
    16832: (t, e, r) => {
      var n = r(81352);
      t.exports = function(t) {
        var e = n(t, (function(t) {
            return 500 === r.size && r.clear(), t
          })),
          r = e.cache;
        return e
      }
    },
    41506: (t, e, r) => {
      var n = r(34078)(Object, "create");
      t.exports = n
    },
    35602: (t, e, r) => {
      var n = r(34543)(Object.keys, Object);
      t.exports = n
    },
    26165: t => {
      t.exports = function(t) {
        var e = [];
        if (null != t)
          for (var r in Object(t)) e.push(r);
        return e
      }
    },
    77097: (t, e, r) => {
      t = r.nmd(t);
      var n = r(38888),
        o = e && !e.nodeType && e,
        i = o && t && !t.nodeType && t,
        a = i && i.exports === o && n.process,
        c = function() {
          try {
            return i && i.require && i.require("util").types || a && a.binding && a.binding("util")
          } catch (t) {}
        }();
      t.exports = c
    },
    18150: t => {
      var e = Object.prototype.toString;
      t.exports = function(t) {
        return e.call(t)
      }
    },
    34543: t => {
      t.exports = function(t, e) {
        return function(r) {
          return t(e(r))
        }
      }
    },
    9477: (t, e, r) => {
      var n = r(62761),
        o = Math.max;
      t.exports = function(t, e, r) {
        return e = o(void 0 === e ? t.length - 1 : e, 0),
          function() {
            for (var i = arguments, a = -1, c = o(i.length - e, 0), s = Array(c); ++a < c;) s[a] = i[e + a];
            a = -1;
            for (var u = Array(e + 1); ++a < e;) u[a] = i[a];
            return u[e] = r(s), n(t, this, u)
          }
      }
    },
    10553: (t, e, r) => {
      var n = r(38958),
        o = r(82328);
      t.exports = function(t, e) {
        return e.length < 2 ? t : n(t, o(e, 0, -1))
      }
    },
    20605: (t, e, r) => {
      var n = r(38888),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = n || o || Function("return this")();
      t.exports = i
    },
    6894: t => {
      t.exports = function(t, e) {
        if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
      }
    },
    80657: (t, e, r) => {
      var n = r(63074),
        o = r(5555)(n);
      t.exports = o
    },
    5555: t => {
      var e = Date.now;
      t.exports = function(t) {
        var r = 0,
          n = 0;
        return function() {
          var o = e(),
            i = 16 - (o - n);
          if (n = o, i > 0) {
            if (++r >= 800) return arguments[0]
          } else r = 0;
          return t.apply(void 0, arguments)
        }
      }
    },
    1196: (t, e, r) => {
      var n = r(34015);
      t.exports = function() {
        this.__data__ = new n, this.size = 0
      }
    },
    87626: t => {
      t.exports = function(t) {
        var e = this.__data__,
          r = e.delete(t);
        return this.size = e.size, r
      }
    },
    73541: t => {
      t.exports = function(t) {
        return this.__data__.get(t)
      }
    },
    15689: t => {
      t.exports = function(t) {
        return this.__data__.has(t)
      }
    },
    4513: (t, e, r) => {
      var n = r(34015),
        o = r(33775),
        i = r(86669);
      t.exports = function(t, e) {
        var r = this.__data__;
        if (r instanceof n) {
          var a = r.__data__;
          if (!o || a.length < 199) return a.push([t, e]), this.size = ++r.size, this;
          r = this.__data__ = new i(a)
        }
        return r.set(t, e), this.size = r.size, this
      }
    },
    83738: (t, e, r) => {
      var n = r(16832),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        a = n((function(t) {
          var e = [];
          return 46 === t.charCodeAt(0) && e.push(""), t.replace(o, (function(t, r, n, o) {
            e.push(n ? o.replace(i, "$1") : r || t)
          })), e
        }));
      t.exports = a
    },
    19029: (t, e, r) => {
      var n = r(69978);
      t.exports = function(t) {
        if ("string" == typeof t || n(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -1 / 0 ? "-0" : e
      }
    },
    62529: t => {
      var e = Function.prototype.toString;
      t.exports = function(t) {
        if (null != t) {
          try {
            return e.call(t)
          } catch (t) {}
          try {
            return t + ""
          } catch (t) {}
        }
        return ""
      }
    },
    69896: t => {
      var e = /\s/;
      t.exports = function(t) {
        for (var r = t.length; r-- && e.test(t.charAt(r)););
        return r
      }
    },
    57479: (t, e, r) => {
      var n = r(38591);
      t.exports = function(t) {
        return n(t, 5)
      }
    },
    32774: t => {
      t.exports = function(t) {
        return function() {
          return t
        }
      }
    },
    45757: (t, e, r) => {
      var n = r(23693),
        o = r(42204),
        i = r(79902),
        a = Math.max,
        c = Math.min;
      t.exports = function(t, e, r) {
        var s, u, l, f, p, d, v = 0,
          h = !1,
          y = !1,
          m = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function b(e) {
          var r = s,
            n = u;
          return s = u = void 0, v = e, f = t.apply(n, r)
        }

        function g(t) {
          var r = t - d;
          return void 0 === d || r >= e || r < 0 || y && t - v >= l
        }

        function x() {
          var t = o();
          if (g(t)) return w(t);
          p = setTimeout(x, function(t) {
            var r = e - (t - d);
            return y ? c(r, l - (t - v)) : r
          }(t))
        }

        function w(t) {
          return p = void 0, m && s ? b(t) : (s = u = void 0, f)
        }

        function _() {
          var t = o(),
            r = g(t);
          if (s = arguments, u = this, d = t, r) {
            if (void 0 === p) return function(t) {
              return v = t, p = setTimeout(x, e), h ? b(t) : f
            }(d);
            if (y) return clearTimeout(p), p = setTimeout(x, e), b(d)
          }
          return void 0 === p && (p = setTimeout(x, e)), f
        }
        return e = i(e) || 0, n(r) && (h = !!r.leading, l = (y = "maxWait" in r) ? a(i(r.maxWait) || 0, e) : l, m = "trailing" in r ? !!r.trailing : m), _.cancel = function() {
          void 0 !== p && clearTimeout(p), v = 0, s = d = u = p = void 0
        }, _.flush = function() {
          return void 0 === p ? f : w(o())
        }, _
      }
    },
    21224: t => {
      t.exports = function(t, e) {
        return t === e || t != t && e != e
      }
    },
    27314: (t, e, r) => {
      var n = r(24736);
      t.exports = function(t) {
        return null != t && t.length ? n(t, 1) : []
      }
    },
    67152: t => {
      t.exports = function(t) {
        return t
      }
    },
    57692: (t, e, r) => {
      var n = r(1694),
        o = r(56490),
        i = Object.prototype,
        a = i.hasOwnProperty,
        c = i.propertyIsEnumerable,
        s = n(function() {
          return arguments
        }()) ? n : function(t) {
          return o(t) && a.call(t, "callee") && !c.call(t, "callee")
        };
      t.exports = s
    },
    82993: t => {
      var e = Array.isArray;
      t.exports = e
    },
    83278: (t, e, r) => {
      var n = r(3882),
        o = r(26822);
      t.exports = function(t) {
        return null != t && o(t.length) && !n(t)
      }
    },
    35933: (t, e, r) => {
      var n = r(83278),
        o = r(56490);
      t.exports = function(t) {
        return o(t) && n(t)
      }
    },
    20504: (t, e, r) => {
      t = r.nmd(t);
      var n = r(20605),
        o = r(94495),
        i = e && !e.nodeType && e,
        a = i && t && !t.nodeType && t,
        c = a && a.exports === i ? n.Buffer : void 0,
        s = (c ? c.isBuffer : void 0) || o;
      t.exports = s
    },
    3882: (t, e, r) => {
      var n = r(95192),
        o = r(23693);
      t.exports = function(t) {
        if (!o(t)) return !1;
        var e = n(t);
        return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
      }
    },
    26822: t => {
      t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
      }
    },
    90786: (t, e, r) => {
      var n = r(80420),
        o = r(22293),
        i = r(77097),
        a = i && i.isMap,
        c = a ? o(a) : n;
      t.exports = c
    },
    23693: t => {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
      }
    },
    56490: t => {
      t.exports = function(t) {
        return null != t && "object" == typeof t
      }
    },
    88691: (t, e, r) => {
      var n = r(95192),
        o = r(90079),
        i = r(56490),
        a = Function.prototype,
        c = Object.prototype,
        s = a.toString,
        u = c.hasOwnProperty,
        l = s.call(Object);
      t.exports = function(t) {
        if (!i(t) || "[object Object]" != n(t)) return !1;
        var e = o(t);
        if (null === e) return !0;
        var r = u.call(e, "constructor") && e.constructor;
        return "function" == typeof r && r instanceof r && s.call(r) == l
      }
    },
    69336: (t, e, r) => {
      var n = r(87222),
        o = r(22293),
        i = r(77097),
        a = i && i.isSet,
        c = a ? o(a) : n;
      t.exports = c
    },
    1543: (t, e, r) => {
      var n = r(95192),
        o = r(82993),
        i = r(56490);
      t.exports = function(t) {
        return "string" == typeof t || !o(t) && i(t) && "[object String]" == n(t)
      }
    },
    69978: (t, e, r) => {
      var n = r(95192),
        o = r(56490);
      t.exports = function(t) {
        return "symbol" == typeof t || o(t) && "[object Symbol]" == n(t)
      }
    },
    42111: (t, e, r) => {
      var n = r(81269),
        o = r(22293),
        i = r(77097),
        a = i && i.isTypedArray,
        c = a ? o(a) : n;
      t.exports = c
    },
    62110: (t, e, r) => {
      var n = r(90775),
        o = r(71624),
        i = r(83278);
      t.exports = function(t) {
        return i(t) ? n(t) : o(t)
      }
    },
    6793: (t, e, r) => {
      var n = r(90775),
        o = r(35543),
        i = r(83278);
      t.exports = function(t) {
        return i(t) ? n(t, !0) : o(t)
      }
    },
    57226: t => {
      t.exports = function(t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0
      }
    },
    81352: (t, e, r) => {
      var n = r(86669);

      function o(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
        var r = function() {
          var n = arguments,
            o = e ? e.apply(this, n) : n[0],
            i = r.cache;
          if (i.has(o)) return i.get(o);
          var a = t.apply(this, n);
          return r.cache = i.set(o, a) || i, a
        };
        return r.cache = new(o.Cache || n), r
      }
      o.Cache = n, t.exports = o
    },
    24948: (t, e, r) => {
      var n = r(1074),
        o = r(36791)((function(t, e, r) {
          n(t, e, r)
        }));
      t.exports = o
    },
    60316: (t, e, r) => {
      var n = r(1074),
        o = r(36791)((function(t, e, r, o) {
          n(t, e, r, o)
        }));
      t.exports = o
    },
    42204: (t, e, r) => {
      var n = r(20605);
      t.exports = function() {
        return n.Date.now()
      }
    },
    95347: (t, e, r) => {
      var n = r(16548),
        o = r(38591),
        i = r(66379),
        a = r(21129),
        c = r(97231),
        s = r(20674),
        u = r(17264),
        l = r(30693),
        f = u((function(t, e) {
          var r = {};
          if (null == t) return r;
          var u = !1;
          e = n(e, (function(e) {
            return e = a(e, t), u || (u = e.length > 1), e
          })), c(t, l(t), r), u && (r = o(r, 7, s));
          for (var f = e.length; f--;) i(r, e[f]);
          return r
        }));
      t.exports = f
    },
    76573: (t, e, r) => {
      var n = r(15604)();
      t.exports = n
    },
    75616: (t, e, r) => {
      var n = r(9986);
      t.exports = function(t, e, r, o) {
        return o = "function" == typeof o ? o : void 0, null == t ? t : n(t, e, r, o)
      }
    },
    47489: t => {
      t.exports = function() {
        return []
      }
    },
    94495: t => {
      t.exports = function() {
        return !1
      }
    },
    37384: (t, e, r) => {
      var n = r(79902);
      t.exports = function(t) {
        return t ? Infinity === (t = n(t)) || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
      }
    },
    79902: (t, e, r) => {
      var n = r(42368),
        o = r(23693),
        i = r(69978),
        a = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        u = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return NaN;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = n(t);
        var r = c.test(t);
        return r || s.test(t) ? u(t.slice(2), r ? 2 : 8) : a.test(t) ? NaN : +t
      }
    },
    48620: (t, e, r) => {
      var n = r(97231),
        o = r(6793);
      t.exports = function(t) {
        return n(t, o(t))
      }
    },
    9398: (t, e, r) => {
      var n = r(83236);
      t.exports = function(t) {
        return null == t ? "" : n(t)
      }
    },
    93782: (t, e, r) => {
      "use strict";
      r.d(e, {
        S: () => o
      });
      var n = r(62229);

      function o(t, e) {
        return r = e || null, o = function(e) {
          return t.forEach((function(t) {
            return function(t, e) {
              return "function" == typeof t ? t(e) : t && (t.current = e), t
            }(t, e)
          }))
        }, (i = (0, n.useState)((function() {
          return {
            value: r,
            callback: o,
            facade: {
              get current() {
                return i.value
              },
              set current(t) {
                var e = i.value;
                e !== t && (i.value = t, i.callback(t, e))
              }
            }
          }
        }))[0]).callback = o, i.facade;
        var r, o, i
      }
    },
    64269: (t, e, r) => {
      "use strict";
      r.d(e, {
        C: () => a,
        f: () => c
      });
      var n = r(78322);

      function o(t) {
        return t
      }

      function i(t, e) {
        void 0 === e && (e = o);
        var r = [],
          n = !1;
        return {
          read: function() {
            if (n) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return r.length ? r[r.length - 1] : t
          },
          useMedium: function(t) {
            var o = e(t, n);
            return r.push(o),
              function() {
                r = r.filter((function(t) {
                  return t !== o
                }))
              }
          },
          assignSyncMedium: function(t) {
            for (n = !0; r.length;) {
              var e = r;
              r = [], e.forEach(t)
            }
            r = {
              push: function(e) {
                return t(e)
              },
              filter: function() {
                return r
              }
            }
          },
          assignMedium: function(t) {
            n = !0;
            var e = [];
            if (r.length) {
              var o = r;
              r = [], o.forEach(t), e = r
            }
            var i = function() {
                var r = e;
                e = [], r.forEach(t)
              },
              a = function() {
                return Promise.resolve().then(i)
              };
            a(), r = {
              push: function(t) {
                e.push(t), a()
              },
              filter: function(t) {
                return e = e.filter(t), r
              }
            }
          }
        }
      }

      function a(t, e) {
        return void 0 === e && (e = o), i(t, e)
      }

      function c(t) {
        void 0 === t && (t = {});
        var e = i(null);
        return e.options = (0, n.Cl)({
          async: !0,
          ssr: !1
        }, t), e
      }
    },
    79600: (t, e, r) => {
      "use strict";
      r.d(e, {
        BN: () => d,
        ER: () => v,
        Ej: () => h,
        UE: () => c,
        UU: () => s,
        cY: () => p,
        jD: () => f,
        rD: () => i
      });
      var n = r(74788);

      function o(t, e, r) {
        let {
          reference: o,
          floating: i
        } = t;
        const a = (0, n.TV)(e),
          c = (0, n.Dz)(e),
          s = (0, n.sq)(c),
          u = (0, n.C0)(e),
          l = "y" === a,
          f = o.x + o.width / 2 - i.width / 2,
          p = o.y + o.height / 2 - i.height / 2,
          d = o[s] / 2 - i[s] / 2;
        let v;
        switch (u) {
          case "top":
            v = {
              x: f,
              y: o.y - i.height
            };
            break;
          case "bottom":
            v = {
              x: f,
              y: o.y + o.height
            };
            break;
          case "right":
            v = {
              x: o.x + o.width,
              y: p
            };
            break;
          case "left":
            v = {
              x: o.x - i.width,
              y: p
            };
            break;
          default:
            v = {
              x: o.x,
              y: o.y
            }
        }
        switch ((0, n.Sg)(e)) {
          case "start":
            v[c] -= d * (r && l ? -1 : 1);
            break;
          case "end":
            v[c] += d * (r && l ? -1 : 1)
        }
        return v
      }
      const i = async (t, e, r) => {
        const {
          placement: n = "bottom",
          strategy: i = "absolute",
          middleware: a = [],
          platform: c
        } = r, s = a.filter(Boolean), u = await (null == c.isRTL ? void 0 : c.isRTL(e));
        let l = await c.getElementRects({
            reference: t,
            floating: e,
            strategy: i
          }),
          {
            x: f,
            y: p
          } = o(l, n, u),
          d = n,
          v = {},
          h = 0;
        for (let r = 0; r < s.length; r++) {
          const {
            name: a,
            fn: y
          } = s[r], {
            x: m,
            y: b,
            data: g,
            reset: x
          } = await y({
            x: f,
            y: p,
            initialPlacement: n,
            placement: d,
            strategy: i,
            middlewareData: v,
            rects: l,
            platform: c,
            elements: {
              reference: t,
              floating: e
            }
          });
          f = null != m ? m : f, p = null != b ? b : p, v = {
            ...v,
            [a]: {
              ...v[a],
              ...g
            }
          }, x && h <= 50 && (h++, "object" == typeof x && (x.placement && (d = x.placement), x.rects && (l = !0 === x.rects ? await c.getElementRects({
            reference: t,
            floating: e,
            strategy: i
          }) : x.rects), ({
            x: f,
            y: p
          } = o(l, d, u))), r = -1)
        }
        return {
          x: f,
          y: p,
          placement: d,
          strategy: i,
          middlewareData: v
        }
      };
      async function a(t, e) {
        var r;
        void 0 === e && (e = {});
        const {
          x: o,
          y: i,
          platform: a,
          rects: c,
          elements: s,
          strategy: u
        } = t, {
          boundary: l = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: p = "floating",
          altBoundary: d = !1,
          padding: v = 0
        } = (0, n._3)(e, t), h = (0, n.nI)(v), y = s[d ? "floating" === p ? "reference" : "floating" : p], m = (0, n.B1)(await a.getClippingRect({
          element: null == (r = await (null == a.isElement ? void 0 : a.isElement(y))) || r ? y : y.contextElement || await (null == a.getDocumentElement ? void 0 : a.getDocumentElement(s.floating)),
          boundary: l,
          rootBoundary: f,
          strategy: u
        })), b = "floating" === p ? {
          ...c.floating,
          x: o,
          y: i
        } : c.reference, g = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(s.floating)), x = await (null == a.isElement ? void 0 : a.isElement(g)) && await (null == a.getScale ? void 0 : a.getScale(g)) || {
          x: 1,
          y: 1
        }, w = (0, n.B1)(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: b,
          offsetParent: g,
          strategy: u
        }) : b);
        return {
          top: (m.top - w.top + h.top) / x.y,
          bottom: (w.bottom - m.bottom + h.bottom) / x.y,
          left: (m.left - w.left + h.left) / x.x,
          right: (w.right - m.right + h.right) / x.x
        }
      }
      const c = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: r,
              y: o,
              placement: i,
              rects: a,
              platform: c,
              elements: s,
              middlewareData: u
            } = e, {
              element: l,
              padding: f = 0
            } = (0, n._3)(t, e) || {};
            if (null == l) return {};
            const p = (0, n.nI)(f),
              d = {
                x: r,
                y: o
              },
              v = (0, n.Dz)(i),
              h = (0, n.sq)(v),
              y = await c.getDimensions(l),
              m = "y" === v,
              b = m ? "top" : "left",
              g = m ? "bottom" : "right",
              x = m ? "clientHeight" : "clientWidth",
              w = a.reference[h] + a.reference[v] - d[v] - a.floating[h],
              _ = d[v] - a.reference[v],
              j = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(l));
            let S = j ? j[x] : 0;
            S && await (null == c.isElement ? void 0 : c.isElement(j)) || (S = s.floating[x] || a.floating[h]);
            const E = w / 2 - _ / 2,
              A = S / 2 - y[h] / 2 - 1,
              O = (0, n.jk)(p[b], A),
              C = (0, n.jk)(p[g], A),
              k = O,
              L = S - y[h] - C,
              R = S / 2 - y[h] / 2 + E,
              T = (0, n.qE)(k, R, L),
              P = !u.arrow && null != (0, n.Sg)(i) && R != T && a.reference[h] / 2 - (R < k ? O : C) - y[h] / 2 < 0,
              M = P ? R < k ? R - k : R - L : 0;
            return {
              [v]: d[v] + M,
              data: {
                [v]: T,
                centerOffset: R - T - M,
                ...P && {
                  alignmentOffset: M
                }
              },
              reset: P
            }
          }
        }),
        s = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var r, o;
              const {
                placement: i,
                middlewareData: c,
                rects: s,
                initialPlacement: u,
                platform: l,
                elements: f
              } = e, {
                mainAxis: p = !0,
                crossAxis: d = !0,
                fallbackPlacements: v,
                fallbackStrategy: h = "bestFit",
                fallbackAxisSideDirection: y = "none",
                flipAlignment: m = !0,
                ...b
              } = (0, n._3)(t, e);
              if (null != (r = c.arrow) && r.alignmentOffset) return {};
              const g = (0, n.C0)(i),
                x = (0, n.C0)(u) === u,
                w = await (null == l.isRTL ? void 0 : l.isRTL(f.floating)),
                _ = v || (x || !m ? [(0, n.bV)(u)] : (0, n.WJ)(u));
              v || "none" === y || _.push(...(0, n.lP)(u, m, y, w));
              const j = [u, ..._],
                S = await a(e, b),
                E = [];
              let A = (null == (o = c.flip) ? void 0 : o.overflows) || [];
              if (p && E.push(S[g]), d) {
                const t = (0, n.w7)(i, s, w);
                E.push(S[t[0]], S[t[1]])
              }
              if (A = [...A, {
                  placement: i,
                  overflows: E
                }], !E.every((t => t <= 0))) {
                var O, C;
                const t = ((null == (O = c.flip) ? void 0 : O.index) || 0) + 1,
                  e = j[t];
                if (e) return {
                  data: {
                    index: t,
                    overflows: A
                  },
                  reset: {
                    placement: e
                  }
                };
                let r = null == (C = A.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : C.placement;
                if (!r) switch (h) {
                  case "bestFit": {
                    var k;
                    const t = null == (k = A.map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : k[0];
                    t && (r = t);
                    break
                  }
                  case "initialPlacement":
                    r = u
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
        };

      function u(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width
        }
      }

      function l(t) {
        return n.r_.some((e => t[e] >= 0))
      }
      const f = function(t) {
          return void 0 === t && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
              const {
                rects: r
              } = e, {
                strategy: o = "referenceHidden",
                ...i
              } = (0, n._3)(t, e);
              switch (o) {
                case "referenceHidden": {
                  const t = u(await a(e, {
                    ...i,
                    elementContext: "reference"
                  }), r.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: t,
                      referenceHidden: l(t)
                    }
                  }
                }
                case "escaped": {
                  const t = u(await a(e, {
                    ...i,
                    altBoundary: !0
                  }), r.floating);
                  return {
                    data: {
                      escapedOffsets: t,
                      escaped: l(t)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        p = function(t) {
          return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
              const {
                x: r,
                y: o
              } = e, i = await async function(t, e) {
                const {
                  placement: r,
                  platform: o,
                  elements: i
                } = t, a = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)), c = (0, n.C0)(r), s = (0, n.Sg)(r), u = "y" === (0, n.TV)(r), l = ["left", "top"].includes(c) ? -1 : 1, f = a && u ? -1 : 1, p = (0, n._3)(e, t);
                let {
                  mainAxis: d,
                  crossAxis: v,
                  alignmentAxis: h
                } = "number" == typeof p ? {
                  mainAxis: p,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  alignmentAxis: null,
                  ...p
                };
                return s && "number" == typeof h && (v = "end" === s ? -1 * h : h), u ? {
                  x: v * f,
                  y: d * l
                } : {
                  x: d * l,
                  y: v * f
                }
              }(e, t);
              return {
                x: r + i.x,
                y: o + i.y,
                data: i
              }
            }
          }
        },
        d = function(t) {
          return void 0 === t && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
              const {
                x: r,
                y: o,
                placement: i
              } = e, {
                mainAxis: c = !0,
                crossAxis: s = !1,
                limiter: u = {
                  fn: t => {
                    let {
                      x: e,
                      y: r
                    } = t;
                    return {
                      x: e,
                      y: r
                    }
                  }
                },
                ...l
              } = (0, n._3)(t, e), f = {
                x: r,
                y: o
              }, p = await a(e, l), d = (0, n.TV)((0, n.C0)(i)), v = (0, n.PG)(d);
              let h = f[v],
                y = f[d];
              if (c) {
                const t = "y" === v ? "bottom" : "right",
                  e = h + p["y" === v ? "top" : "left"],
                  r = h - p[t];
                h = (0, n.qE)(e, h, r)
              }
              if (s) {
                const t = "y" === d ? "bottom" : "right",
                  e = y + p["y" === d ? "top" : "left"],
                  r = y - p[t];
                y = (0, n.qE)(e, y, r)
              }
              const m = u.fn({
                ...e,
                [v]: h,
                [d]: y
              });
              return {
                ...m,
                data: {
                  x: m.x - r,
                  y: m.y - o
                }
              }
            }
          }
        },
        v = function(t) {
          return void 0 === t && (t = {}), {
            options: t,
            fn(e) {
              const {
                x: r,
                y: o,
                placement: i,
                rects: a,
                middlewareData: c
              } = e, {
                offset: s = 0,
                mainAxis: u = !0,
                crossAxis: l = !0
              } = (0, n._3)(t, e), f = {
                x: r,
                y: o
              }, p = (0, n.TV)(i), d = (0, n.PG)(p);
              let v = f[d],
                h = f[p];
              const y = (0, n._3)(s, e),
                m = "number" == typeof y ? {
                  mainAxis: y,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...y
                };
              if (u) {
                const t = "y" === d ? "height" : "width",
                  e = a.reference[d] - a.floating[t] + m.mainAxis,
                  r = a.reference[d] + a.reference[t] - m.mainAxis;
                v < e ? v = e : v > r && (v = r)
              }
              if (l) {
                var b, g;
                const t = "y" === d ? "width" : "height",
                  e = ["top", "left"].includes((0, n.C0)(i)),
                  r = a.reference[p] - a.floating[t] + (e && (null == (b = c.offset) ? void 0 : b[p]) || 0) + (e ? 0 : m.crossAxis),
                  o = a.reference[p] + a.reference[t] + (e ? 0 : (null == (g = c.offset) ? void 0 : g[p]) || 0) - (e ? m.crossAxis : 0);
                h < r ? h = r : h > o && (h = o)
              }
              return {
                [d]: v,
                [p]: h
              }
            }
          }
        },
        h = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              const {
                placement: r,
                rects: o,
                platform: i,
                elements: c
              } = e, {
                apply: s = (() => {}),
                ...u
              } = (0, n._3)(t, e), l = await a(e, u), f = (0, n.C0)(r), p = (0, n.Sg)(r), d = "y" === (0, n.TV)(r), {
                width: v,
                height: h
              } = o.floating;
              let y, m;
              "top" === f || "bottom" === f ? (y = f, m = p === (await (null == i.isRTL ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (m = f, y = "end" === p ? "top" : "bottom");
              const b = h - l[y],
                g = v - l[m],
                x = !e.middlewareData.shift;
              let w = b,
                _ = g;
              if (d) {
                const t = v - l.left - l.right;
                _ = p || x ? (0, n.jk)(g, t) : t
              } else {
                const t = h - l.top - l.bottom;
                w = p || x ? (0, n.jk)(b, t) : t
              }
              if (x && !p) {
                const t = (0, n.T9)(l.left, 0),
                  e = (0, n.T9)(l.right, 0),
                  r = (0, n.T9)(l.top, 0),
                  o = (0, n.T9)(l.bottom, 0);
                d ? _ = v - 2 * (0 !== t || 0 !== e ? t + e : (0, n.T9)(l.left, l.right)) : w = h - 2 * (0 !== r || 0 !== o ? r + o : (0, n.T9)(l.top, l.bottom))
              }
              await s({
                ...e,
                availableWidth: _,
                availableHeight: w
              });
              const j = await i.getDimensions(c.floating);
              return v !== j.width || h !== j.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        }
    },
    546: (t, e, r) => {
      "use strict";
      r.d(e, {
        ll: () => D,
        rD: () => $
      });
      var n = r(74788),
        o = r(79600);

      function i(t) {
        return s(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function a(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function c(t) {
        var e;
        return null == (e = (s(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function s(t) {
        return t instanceof Node || t instanceof a(t).Node
      }

      function u(t) {
        return t instanceof Element || t instanceof a(t).Element
      }

      function l(t) {
        return t instanceof HTMLElement || t instanceof a(t).HTMLElement
      }

      function f(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof a(t).ShadowRoot)
      }

      function p(t) {
        const {
          overflow: e,
          overflowX: r,
          overflowY: n,
          display: o
        } = m(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !["inline", "contents"].includes(o)
      }

      function d(t) {
        return ["table", "td", "th"].includes(i(t))
      }

      function v(t) {
        const e = h(),
          r = m(t);
        return "none" !== r.transform || "none" !== r.perspective || !!r.containerType && "normal" !== r.containerType || !e && !!r.backdropFilter && "none" !== r.backdropFilter || !e && !!r.filter && "none" !== r.filter || ["transform", "perspective", "filter"].some((t => (r.willChange || "").includes(t))) || ["paint", "layout", "strict", "content"].some((t => (r.contain || "").includes(t)))
      }

      function h() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function y(t) {
        return ["html", "body", "#document"].includes(i(t))
      }

      function m(t) {
        return a(t).getComputedStyle(t)
      }

      function b(t) {
        return u(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.pageXOffset,
          scrollTop: t.pageYOffset
        }
      }

      function g(t) {
        if ("html" === i(t)) return t;
        const e = t.assignedSlot || t.parentNode || f(t) && t.host || c(t);
        return f(e) ? e.host : e
      }

      function x(t) {
        const e = g(t);
        return y(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : l(e) && p(e) ? e : x(e)
      }

      function w(t, e, r) {
        var n;
        void 0 === e && (e = []), void 0 === r && (r = !0);
        const o = x(t),
          i = o === (null == (n = t.ownerDocument) ? void 0 : n.body),
          c = a(o);
        return i ? e.concat(c, c.visualViewport || [], p(o) ? o : [], c.frameElement && r ? w(c.frameElement) : []) : e.concat(o, w(o, [], r))
      }

      function _(t) {
        const e = m(t);
        let r = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const i = l(t),
          a = i ? t.offsetWidth : r,
          c = i ? t.offsetHeight : o,
          s = (0, n.LI)(r) !== a || (0, n.LI)(o) !== c;
        return s && (r = a, o = c), {
          width: r,
          height: o,
          $: s
        }
      }

      function j(t) {
        return u(t) ? t : t.contextElement
      }

      function S(t) {
        const e = j(t);
        if (!l(e)) return (0, n.Jx)(1);
        const r = e.getBoundingClientRect(),
          {
            width: o,
            height: i,
            $: a
          } = _(e);
        let c = (a ? (0, n.LI)(r.width) : r.width) / o,
          s = (a ? (0, n.LI)(r.height) : r.height) / i;
        return c && Number.isFinite(c) || (c = 1), s && Number.isFinite(s) || (s = 1), {
          x: c,
          y: s
        }
      }
      const E = (0, n.Jx)(0);

      function A(t) {
        const e = a(t);
        return h() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : E
      }

      function O(t, e, r, o) {
        void 0 === e && (e = !1), void 0 === r && (r = !1);
        const i = t.getBoundingClientRect(),
          c = j(t);
        let s = (0, n.Jx)(1);
        e && (o ? u(o) && (s = S(o)) : s = S(t));
        const l = function(t, e, r) {
          return void 0 === e && (e = !1), !(!r || e && r !== a(t)) && e
        }(c, r, o) ? A(c) : (0, n.Jx)(0);
        let f = (i.left + l.x) / s.x,
          p = (i.top + l.y) / s.y,
          d = i.width / s.x,
          v = i.height / s.y;
        if (c) {
          const t = a(c),
            e = o && u(o) ? a(o) : o;
          let r = t.frameElement;
          for (; r && o && e !== t;) {
            const t = S(r),
              e = r.getBoundingClientRect(),
              n = m(r),
              o = e.left + (r.clientLeft + parseFloat(n.paddingLeft)) * t.x,
              i = e.top + (r.clientTop + parseFloat(n.paddingTop)) * t.y;
            f *= t.x, p *= t.y, d *= t.x, v *= t.y, f += o, p += i, r = a(r).frameElement
          }
        }
        return (0, n.B1)({
          width: d,
          height: v,
          x: f,
          y: p
        })
      }

      function C(t) {
        return O(c(t)).left + b(t).scrollLeft
      }

      function k(t, e, r) {
        let o;
        if ("viewport" === e) o = function(t, e) {
          const r = a(t),
            n = c(t),
            o = r.visualViewport;
          let i = n.clientWidth,
            s = n.clientHeight,
            u = 0,
            l = 0;
          if (o) {
            i = o.width, s = o.height;
            const t = h();
            (!t || t && "fixed" === e) && (u = o.offsetLeft, l = o.offsetTop)
          }
          return {
            width: i,
            height: s,
            x: u,
            y: l
          }
        }(t, r);
        else if ("document" === e) o = function(t) {
          const e = c(t),
            r = b(t),
            o = t.ownerDocument.body,
            i = (0, n.T9)(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            a = (0, n.T9)(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
          let s = -r.scrollLeft + C(t);
          const u = -r.scrollTop;
          return "rtl" === m(o).direction && (s += (0, n.T9)(e.clientWidth, o.clientWidth) - i), {
            width: i,
            height: a,
            x: s,
            y: u
          }
        }(c(t));
        else if (u(e)) o = function(t, e) {
          const r = O(t, !0, "fixed" === e),
            o = r.top + t.clientTop,
            i = r.left + t.clientLeft,
            a = l(t) ? S(t) : (0, n.Jx)(1);
          return {
            width: t.clientWidth * a.x,
            height: t.clientHeight * a.y,
            x: i * a.x,
            y: o * a.y
          }
        }(e, r);
        else {
          const r = A(t);
          o = {
            ...e,
            x: e.x - r.x,
            y: e.y - r.y
          }
        }
        return (0, n.B1)(o)
      }

      function L(t, e) {
        const r = g(t);
        return !(r === e || !u(r) || y(r)) && ("fixed" === m(r).position || L(r, e))
      }

      function R(t, e, r) {
        const o = l(e),
          a = c(e),
          s = "fixed" === r,
          u = O(t, !0, s, e);
        let f = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const d = (0, n.Jx)(0);
        if (o || !o && !s)
          if (("body" !== i(e) || p(a)) && (f = b(e)), o) {
            const t = O(e, !0, s, e);
            d.x = t.x + e.clientLeft, d.y = t.y + e.clientTop
          } else a && (d.x = C(a));
        return {
          x: u.left + f.scrollLeft - d.x,
          y: u.top + f.scrollTop - d.y,
          width: u.width,
          height: u.height
        }
      }

      function T(t, e) {
        return l(t) && "fixed" !== m(t).position ? e ? e(t) : t.offsetParent : null
      }

      function P(t, e) {
        const r = a(t);
        if (!l(t)) return r;
        let n = T(t, e);
        for (; n && d(n) && "static" === m(n).position;) n = T(n, e);
        return n && ("html" === i(n) || "body" === i(n) && "static" === m(n).position && !v(n)) ? r : n || function(t) {
          let e = g(t);
          for (; l(e) && !y(e);) {
            if (v(e)) return e;
            e = g(e)
          }
          return null
        }(t) || r
      }
      const M = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            rect: e,
            offsetParent: r,
            strategy: o
          } = t;
          const a = l(r),
            s = c(r);
          if (r === s) return e;
          let u = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = (0, n.Jx)(1);
          const d = (0, n.Jx)(0);
          if ((a || !a && "fixed" !== o) && (("body" !== i(r) || p(s)) && (u = b(r)), l(r))) {
            const t = O(r);
            f = S(r), d.x = t.x + r.clientLeft, d.y = t.y + r.clientTop
          }
          return {
            width: e.width * f.x,
            height: e.height * f.y,
            x: e.x * f.x - u.scrollLeft * f.x + d.x,
            y: e.y * f.y - u.scrollTop * f.y + d.y
          }
        },
        getDocumentElement: c,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: r,
            rootBoundary: o,
            strategy: a
          } = t;
          const c = [..."clippingAncestors" === r ? function(t, e) {
              const r = e.get(t);
              if (r) return r;
              let n = w(t, [], !1).filter((t => u(t) && "body" !== i(t))),
                o = null;
              const a = "fixed" === m(t).position;
              let c = a ? g(t) : t;
              for (; u(c) && !y(c);) {
                const e = m(c),
                  r = v(c);
                r || "fixed" !== e.position || (o = null), (a ? !r && !o : !r && "static" === e.position && o && ["absolute", "fixed"].includes(o.position) || p(c) && !r && L(t, c)) ? n = n.filter((t => t !== c)) : o = e, c = g(c)
              }
              return e.set(t, n), n
            }(e, this._c) : [].concat(r), o],
            s = c[0],
            l = c.reduce(((t, r) => {
              const o = k(e, r, a);
              return t.top = (0, n.T9)(o.top, t.top), t.right = (0, n.jk)(o.right, t.right), t.bottom = (0, n.jk)(o.bottom, t.bottom), t.left = (0, n.T9)(o.left, t.left), t
            }), k(e, s, a));
          return {
            width: l.right - l.left,
            height: l.bottom - l.top,
            x: l.left,
            y: l.top
          }
        },
        getOffsetParent: P,
        getElementRects: async function(t) {
          let {
            reference: e,
            floating: r,
            strategy: n
          } = t;
          const o = this.getOffsetParent || P,
            i = this.getDimensions;
          return {
            reference: R(e, await o(r), n),
            floating: {
              x: 0,
              y: 0,
              ...await i(r)
            }
          }
        },
        getClientRects: function(t) {
          return Array.from(t.getClientRects())
        },
        getDimensions: function(t) {
          return _(t)
        },
        getScale: S,
        isElement: u,
        isRTL: function(t) {
          return "rtl" === m(t).direction
        }
      };

      function D(t, e, r, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: i = !0,
          ancestorResize: a = !0,
          elementResize: s = "function" == typeof ResizeObserver,
          layoutShift: u = "function" == typeof IntersectionObserver,
          animationFrame: l = !1
        } = o, f = j(t), p = i || a ? [...f ? w(f) : [], ...w(e)] : [];
        p.forEach((t => {
          i && t.addEventListener("scroll", r, {
            passive: !0
          }), a && t.addEventListener("resize", r)
        }));
        const d = f && u ? function(t, e) {
          let r, o = null;
          const i = c(t);

          function a() {
            clearTimeout(r), o && o.disconnect(), o = null
          }
          return function c(s, u) {
            void 0 === s && (s = !1), void 0 === u && (u = 1), a();
            const {
              left: l,
              top: f,
              width: p,
              height: d
            } = t.getBoundingClientRect();
            if (s || e(), !p || !d) return;
            const v = {
              rootMargin: -(0, n.RI)(f) + "px " + -(0, n.RI)(i.clientWidth - (l + p)) + "px " + -(0, n.RI)(i.clientHeight - (f + d)) + "px " + -(0, n.RI)(l) + "px",
              threshold: (0, n.T9)(0, (0, n.jk)(1, u)) || 1
            };
            let h = !0;

            function y(t) {
              const e = t[0].intersectionRatio;
              if (e !== u) {
                if (!h) return c();
                e ? c(!1, e) : r = setTimeout((() => {
                  c(!1, 1e-7)
                }), 100)
              }
              h = !1
            }
            try {
              o = new IntersectionObserver(y, {
                ...v,
                root: i.ownerDocument
              })
            } catch (t) {
              o = new IntersectionObserver(y, v)
            }
            o.observe(t)
          }(!0), a
        }(f, r) : null;
        let v, h = -1,
          y = null;
        s && (y = new ResizeObserver((t => {
          let [n] = t;
          n && n.target === f && y && (y.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame((() => {
            y && y.observe(e)
          }))), r()
        })), f && !l && y.observe(f), y.observe(e));
        let m = l ? O(t) : null;
        return l && function e() {
          const n = O(t);
          !m || n.x === m.x && n.y === m.y && n.width === m.width && n.height === m.height || r(), m = n, v = requestAnimationFrame(e)
        }(), r(), () => {
          p.forEach((t => {
            i && t.removeEventListener("scroll", r), a && t.removeEventListener("resize", r)
          })), d && d(), y && y.disconnect(), y = null, l && cancelAnimationFrame(v)
        }
      }
      const $ = (t, e, r) => {
        const n = new Map,
          i = {
            platform: M,
            ...r
          },
          a = {
            ...i.platform,
            _c: n
          };
        return (0, o.rD)(t, e, {
          ...i,
          platform: a
        })
      }
    },
    74788: (t, e, r) => {
      "use strict";
      r.d(e, {
        B1: () => E,
        C0: () => d,
        Dz: () => b,
        Jx: () => s,
        LI: () => a,
        PG: () => h,
        RI: () => c,
        Sg: () => v,
        T9: () => i,
        TV: () => m,
        WJ: () => x,
        _3: () => p,
        bV: () => j,
        jk: () => o,
        lP: () => _,
        nI: () => S,
        qE: () => f,
        r_: () => n,
        sq: () => y,
        w7: () => g
      });
      const n = ["top", "right", "bottom", "left"],
        o = Math.min,
        i = Math.max,
        a = Math.round,
        c = Math.floor,
        s = t => ({
          x: t,
          y: t
        }),
        u = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        l = {
          start: "end",
          end: "start"
        };

      function f(t, e, r) {
        return i(t, o(e, r))
      }

      function p(t, e) {
        return "function" == typeof t ? t(e) : t
      }

      function d(t) {
        return t.split("-")[0]
      }

      function v(t) {
        return t.split("-")[1]
      }

      function h(t) {
        return "x" === t ? "y" : "x"
      }

      function y(t) {
        return "y" === t ? "height" : "width"
      }

      function m(t) {
        return ["top", "bottom"].includes(d(t)) ? "y" : "x"
      }

      function b(t) {
        return h(m(t))
      }

      function g(t, e, r) {
        void 0 === r && (r = !1);
        const n = v(t),
          o = b(t),
          i = y(o);
        let a = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
        return e.reference[i] > e.floating[i] && (a = j(a)), [a, j(a)]
      }

      function x(t) {
        const e = j(t);
        return [w(t), e, w(e)]
      }

      function w(t) {
        return t.replace(/start|end/g, (t => l[t]))
      }

      function _(t, e, r, n) {
        const o = v(t);
        let i = function(t, e, r) {
          const n = ["left", "right"],
            o = ["right", "left"],
            i = ["top", "bottom"],
            a = ["bottom", "top"];
          switch (t) {
            case "top":
            case "bottom":
              return r ? e ? o : n : e ? n : o;
            case "left":
            case "right":
              return e ? i : a;
            default:
              return []
          }
        }(d(t), "start" === r, n);
        return o && (i = i.map((t => t + "-" + o)), e && (i = i.concat(i.map(w)))), i
      }

      function j(t) {
        return t.replace(/left|right|bottom|top/g, (t => u[t]))
      }

      function S(t) {
        return "number" != typeof t ? function(t) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...t
          }
        }(t) : {
          top: t,
          right: t,
          bottom: t,
          left: t
        }
      }

      function E(t) {
        return {
          ...t,
          top: t.y,
          left: t.x,
          right: t.x + t.width,
          bottom: t.y + t.height
        }
      }
    },
    63235: (t, e, r) => {
      "use strict";
      r.d(e, {
        Cb: () => n,
        US: () => o,
        xW: () => i,
        HZ: () => a,
        X6: () => c
      });
      var n = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        o = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        i = {
          dark: "foundry_nu8bkpar",
          darkHc: "foundry_nu8bkpat",
          light: "foundry_nu8bkpaq",
          lightHc: "foundry_nu8bkpas",
          tokens: "foundry_nu8bkp1"
        },
        a = "--foundry_nu8bkp0",
        c = "foundry_nu8bkp1"
    },
    60211: (t, e, r) => {
      "use strict";
      r.d(e, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    85126: (t, e, r) => {
      "use strict";
      r.d(e, {
        UP: () => c,
        ic: () => f,
        qn: () => b,
        Pt: () => g,
        Rv: () => m,
        iQ: () => v,
        Mk: () => d,
        UQ: () => l,
        gr: () => h,
        Ub: () => i,
        jt: () => s,
        ZC: () => a,
        rl: () => y
      });
      var n = r(60211),
        o = r(62229);

      function i(t, {
        defaultValue: e = !1,
        initializeWithValue: r = !0
      } = {}) {
        const i = t => n.X || !window.matchMedia ? e : window.matchMedia(t).matches,
          [a, c] = (0, o.useState)((() => r ? i(t) : e));

        function s() {
          c(i(t))
        }
        return (0, o.useEffect)((() => {
          const e = window.matchMedia?.(t);
          return s(), e?.addListener ? e?.addListener(s) : e?.addEventListener("change", s), () => {
            e?.removeListener ? e?.removeListener(s) : e?.removeEventListener("change", s)
          }
        }), [t]), a
      }

      function a(t) {
        const e = (0, o.useRef)({
            value: t,
            prev: void 0
          }),
          r = e.current.value;
        return t !== r && (e.current = {
          value: t,
          prev: r
        }), e.current.prev
      }

      function c(...t) {
        const e = (0, o.useRef)(null);
        return (0, o.useEffect)((() => {
          t.forEach((t => {
            t && ("function" == typeof t ? t(e.current || null) : t.current = e.current)
          }))
        }), [t]), e
      }
      const s = () => i("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function u(t) {
        const e = (0, o.useRef)(t);
        return (0, o.useEffect)((() => {
          e.current = t
        })), (0, o.useMemo)((() => (...t) => e.current?.(...t)), [])
      }
      const l = ({
        activity: t,
        leave: e,
        enabled: r = !0
      }) => {
        const n = (0, o.useRef)(),
          [i, a] = (0, o.useState)(!1),
          c = (0, o.useCallback)((() => a(!0)), []),
          s = (0, o.useCallback)(((e, r) => {
            let o = 0;
            return (...e) => {
              const r = Date.now();
              r - o >= 500 && (o = r, (() => {
                a(!1), window.clearTimeout(n.current), n.current = window.setTimeout(c, t)
              })(...e))
            }
          })(), []),
          u = (0, o.useCallback)((() => {
            window.clearTimeout(n.current), n.current = window.setTimeout(c, e)
          }), []),
          l = (0, o.useCallback)((() => {
            document.hidden || s()
          }), []);
        return (0, o.useEffect)((() => {
          const t = () => {
            window.removeEventListener("mousemove", s), window.removeEventListener("mousedown", s), window.removeEventListener("resize", s), window.removeEventListener("keydown", s), window.removeEventListener("touchstart", s), window.removeEventListener("wheel", s), document.removeEventListener("mouseleave", u), document.removeEventListener("visibilitychange", l), window.clearTimeout(n.current), a(!1)
          };
          return r ? (window.addEventListener("mousemove", s), window.addEventListener("mousedown", s), window.addEventListener("resize", s), window.addEventListener("keydown", s), window.addEventListener("touchstart", s), window.addEventListener("wheel", s), document.addEventListener("mouseleave", u), document.addEventListener("visibilitychange", l), s()) : t(), () => t()
        }), [r]), {
          isIdle: i
        }
      };

      function f({
        prop: t,
        defaultProp: e,
        onChange: r = (() => {})
      }) {
        const [n, i] = function({
          defaultProp: t,
          onChange: e
        }) {
          const r = (0, o.useState)(t),
            [n] = r,
            i = (0, o.useRef)(n),
            a = u(e);
          return (0, o.useEffect)((() => {
            i.current !== n && (a(n), i.current = n)
          }), [n, i, a]), r
        }({
          defaultProp: e,
          onChange: r
        }), a = void 0 !== t, c = a ? t : n, s = u(r), l = (0, o.useCallback)((e => {
          if (a) {
            const r = "function" == typeof e ? e(t) : e;
            r !== t && s(r)
          } else i(e)
        }), [a, t, i, s]);
        return [c, l]
      }

      function p(t, e, r, n) {
        const i = (0, o.useRef)(e);
        (0, o.useEffect)((() => {
          i.current = e
        }), [e]), (0, o.useEffect)((() => {
          const e = r?.current ?? window;
          if (!e || !e.addEventListener) return;
          const o = t => {
            i.current(t)
          };
          return e.addEventListener(t, o, n), () => {
            e.removeEventListener(t, o, n)
          }
        }), [t, r?.current, n])
      }
      const d = ({
          enabled: t,
          ref: e
        }) => {
          const [r, n] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            n(!1)
          }), [e.current]), p("mouseenter", (() => {
            n(!0)
          }), e), p("mouseleave", (() => {
            n(!1)
          }), e), {
            isHovered: !!t && r
          }
        },
        v = ({
          enabled: t,
          ref: e
        }) => {
          const [r, n] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            n(!1)
          }), [e.current]), p("focusin", (() => {
            n(!0)
          }), e), p("focusout", (() => {
            n(!1)
          }), e), {
            isFocused: !!t && r
          }
        },
        h = ({
          enabled: t = !0
        }) => {
          const [e, r] = (0, o.useState)(!1), [n, i] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            t || (r(!1), i(!1))
          }), [t]), {
            eventHandlers: {
              onLoad: () => {
                t && (i(!0), r(!1))
              },
              onAbort: () => {
                t && (i(!0), r(!1))
              },
              onError: () => {
                t && (i(!0), r(!1))
              }
            },
            error: e,
            loaded: n
          }
        };

      function y(t = !0) {
        return !!t && i("screen and (pointer: coarse) and (hover: none)")
      }
      const m = ({
          enabled: t = !0,
          latency: e = 300,
          onDoubleClick: r = (() => null),
          onSingleClick: n = (() => null)
        }) => {
          const i = (0, o.useRef)(0),
            a = (0, o.useRef)();
          return {
            handleClick: o => {
              t && (i.current += 1, a.current = setTimeout((() => {
                1 === i.current ? n(o) : 2 === i.current && r(o), i.current = 0
              }), e))
            }
          }
        },
        b = (t, e = []) => {
          const r = (0, o.useRef)(!1);
          (0, o.useEffect)((() => (r.current = !0, () => {
            r.current = !1
          })), []), (0, o.useEffect)((() => {
            r.current && t()
          }), [...e])
        };

      function g() {
        return {
          countWrappedElements: t => {
            if (!t.current) return;
            const {
              children: e
            } = t.current;
            let r = 0,
              n = 0;
            return Array.from(e).map(((t, e) => {
              const o = t.getBoundingClientRect().top,
                i = t.getBoundingClientRect().height;
              return 0 === e && (r = o, n = i), o
            })).filter((t => t >= r + n)).length
          }
        }
      }
    },
    76006: (t, e, r) => {
      "use strict";
      r.d(e, {
        X3: () => n.X,
        bZ: () => p,
        v6: () => u
      });
      var n = r(60211),
        o = r(10439),
        i = r(60316),
        a = r(3882),
        c = r(23693),
        s = r(1543);
      const u = (t, e) => Array().concat(e).reduce(((t, e) => i(t, e, ((t, e) => a(t) && a(e) ? function(...t) {
          return (...e) => {
            for (const r of t) "function" == typeof r && r(...e)
          }
        }(t, e) : c(t) && c(e) ? u(t, e) : s(t) && s(e) ? (0, o.$)(t, e) : e || t))), t),
        l = /^(on.*)$/,
        f = /^(onPress.*)$/;

      function p(t, {
        onPress: e
      } = {
        onPress: !0
      }) {
        const r = {},
          n = {};
        for (const o in t) Object.prototype.hasOwnProperty.call(t, o) && (f.test(o) ? e ? r[o] = t[o] : n[o] = t[o] : l.test(o) ? r[o] = t[o] : n[o] = t[o]);
        return {
          events: r,
          others: n
        }
      }
      r(76573), r(95347), r(24948), r(57479), r(75616), r(45757)
    },
    13008: (t, e, r) => {
      "use strict";
      r.d(e, {
        DX: () => a,
        xV: () => s,
        s6: () => v
      });
      var n = r(43680),
        o = r(62229);

      function i(...t) {
        return e => t.forEach((t => function(t, e) {
          "function" == typeof t ? t(e) : null != t && (t.current = e)
        }(t, e)))
      }
      const a = (0, o.forwardRef)(((t, e) => {
        const {
          children: r,
          ...i
        } = t, a = o.Children.toArray(r), s = a.find(u);
        if (s) {
          const t = s.props.children,
            r = a.map((e => e === s ? o.Children.count(t) > 1 ? o.Children.only(null) : (0, o.isValidElement)(t) ? t.props.children : null : e));
          return (0, o.createElement)(c, (0, n.A)({}, i, {
            ref: e
          }), (0, o.isValidElement)(t) ? (0, o.cloneElement)(t, void 0, r) : null)
        }
        return (0, o.createElement)(c, (0, n.A)({}, i, {
          ref: e
        }), r)
      }));
      a.displayName = "Slot";
      const c = (0, o.forwardRef)(((t, e) => {
        const {
          children: r,
          ...n
        } = t;
        return (0, o.isValidElement)(r) ? (0, o.cloneElement)(r, {
          ...l(n, r.props),
          ref: e ? i(e, r.ref) : r.ref
        }) : o.Children.count(r) > 1 ? o.Children.only(null) : null
      }));
      c.displayName = "SlotClone";
      const s = ({
        children: t
      }) => (0, o.createElement)(o.Fragment, null, t);

      function u(t) {
        return (0, o.isValidElement)(t) && t.type === s
      }

      function l(t, e) {
        const r = {
          ...e
        };
        for (const n in e) {
          const o = t[n],
            i = e[n];
          /^on[A-Z]/.test(n) ? o && i ? r[n] = (...t) => {
            i(...t), o(...t)
          } : o && (r[n] = o) : "style" === n ? r[n] = {
            ...o,
            ...i
          } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
        }
        return {
          ...t,
          ...r
        }
      }
      var f = r(98096);
      r(44853);
      const p = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((t, e) => {
          const r = (0, o.forwardRef)(((t, r) => {
            const {
              asChild: i,
              ...c
            } = t, s = i ? a : e;
            return (0, o.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, o.createElement)(s, (0, n.A)({}, c, {
              ref: r
            }))
          }));
          return r.displayName = `Primitive.${e}`, {
            ...t,
            [e]: r
          }
        }), {}),
        d = (0, o.forwardRef)(((t, e) => (0, o.createElement)(p.span, (0, n.A)({}, t, {
          ref: e,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...t.style
          }
        })))),
        v = ({
          enabled: t = !0,
          ...e
        }) => {
          const r = t ? d : o.Fragment;
          return (0, f.jsx)(r, {
            ...e
          })
        }
    },
    68322: (t, e, r) => {
      "use strict";
      r.d(e, {
        NP: () => h,
        Ym: () => l,
        DP: () => u
      });
      var n = r(98096),
        o = r(13008),
        i = r(63235),
        a = r(62229);
      const c = (0, a.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: i.US,
          platformScaleBreakpoints: i.Cb,
          locale: "en-US"
        }),
        s = () => (0, a.useContext)(c),
        u = () => {
          const {
            colorScheme: t,
            defaultColorScheme: e,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: o,
            defaultPlatformScale: i,
            platformScaleRatios: a,
            platformScaleBreakpoints: c,
            locale: u
          } = s();
          return {
            colorScheme: t,
            defaultColorScheme: e,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: o,
            defaultPlatformScale: i,
            platformScaleRatios: a,
            platformScaleBreakpoints: c,
            locale: u
          }
        },
        l = () => {
          const {
            locale: t
          } = s();
          return t
        };
      var f = r(85126);
      const p = (t, e) => {
        const r = "more" === e ? i.xW.lightHc : i.xW.light,
          n = "more" === e ? i.xW.darkHc : i.xW.dark;
        return "dark" === t ? n : r
      };
      var d = r(76006);
      const v = () => d.X3 ? null : document.body,
        h = (0, a.forwardRef)((({
          children: t,
          className: e,
          container: r = v(),
          asChild: s,
          colorScheme: u,
          defaultColorScheme: l,
          contrastMode: h,
          defaultContrastMode: y,
          platformScaleBreakpoints: m,
          platformScaleRatios: b,
          defaultPlatformScale: g,
          platformScale: x,
          locale: w = "en-US"
        }, _) => {
          const j = (0, a.useRef)(null),
            S = (0, f.UP)(j, _),
            E = (0, a.useRef)(r),
            {
              ratio: A,
              scale: O
            } = function(t) {
              const e = (0, a.useMemo)((() => ({
                  ...i.US,
                  ...t.platformScaleRatios
                })), [t.platformScaleRatios]),
                r = (0, a.useMemo)((() => ({
                  ...i.Cb,
                  ...t.platformScaleBreakpoints
                })), [t.platformScaleBreakpoints]),
                [n, o] = (0, a.useState)(t.platformScale || t.defaultPlatformScale),
                c = (0, a.useRef)([]),
                s = () => {
                  if (!d.X3) {
                    for (const {
                        handler: t,
                        matchMedia: e
                      }
                      of c.current) e.removeEventListener("change", t);
                    c.current = []
                  }
                };
              return (0, a.useEffect)((() => (t.platformScale ? o(t.platformScale) : (() => {
                if (!d.X3) {
                  s();
                  for (const t in r) {
                    const e = window.matchMedia(r[t]),
                      n = e => {
                        e.matches && o(t)
                      };
                    e.addEventListener("change", n), e.matches && o(t), c.current.push({
                      handler: n,
                      matchMedia: e
                    })
                  }
                }
              })(), s)), [r, t.platformScale]), {
                scale: n,
                ratio: e[n]
              }
            }({
              platformScaleBreakpoints: m,
              platformScaleRatios: b,
              defaultPlatformScale: g,
              platformScale: x
            }),
            {
              appearanceClass: C,
              otherAppearanceClasses: k,
              providerColor: L,
              providerContrast: R
            } = function({
              colorScheme: t,
              defaultColorScheme: e = "dark",
              contrastMode: r,
              defaultContrastMode: n = "normal"
            }) {
              const o = (0, f.Ub)("(prefers-color-scheme: light)"),
                c = (0, f.Ub)("(prefers-color-scheme: dark)"),
                s = (0, f.Ub)("(prefers-contrast: more)"),
                u = "system" !== t && t || o && "light" || c && "dark" || e,
                l = r || s && "more" || n,
                d = (0, a.useMemo)((() => p(u, l)), [u, l]),
                v = (0, a.useMemo)((() => ((t, e) => {
                  const r = p(t, e);
                  return [i.xW.light, i.xW.dark, i.xW.lightHc, i.xW.darkHc].filter((t => t !== r))
                })(u, l)), [u, l]);
              return {
                appearanceClass: d,
                otherAppearanceClasses: v,
                providerColor: u,
                providerContrast: l
              }
            }({
              colorScheme: u,
              defaultColorScheme: l,
              contrastMode: h,
              defaultContrastMode: y
            });
          return ((t, e, r, n, o) => {
            const c = (0, f.ZC)(o),
              s = (0, f.ZC)(t.current);
            (0, a.useEffect)((() => {
              t.current?.classList.contains(i.X6) || t.current?.classList.add(i.X6), t.current?.classList.add(r), t.current?.classList.remove(...n), c && o && t.current?.classList.contains(c) ? t.current?.classList.replace(c, o) : c && !o && t.current?.classList.contains(c) ? t.current?.classList.remove(c) : o && t.current?.classList.add(o)
            }), [r, o]), (0, a.useEffect)((() => {
              t.current?.style.setProperty(i.HZ, e.toString())
            }), [e]), (0, a.useEffect)((() => {
              s?.classList.remove(i.X6), s?.classList.remove(r), s?.style.removeProperty(i.HZ), o && s?.classList.remove(o)
            }), [s])
          })(s ? S : E, A, C, k, e), (0, n.jsx)(c.Provider, {
            value: {
              locale: w,
              defaultColorScheme: l,
              colorScheme: L,
              defaultContrastMode: y,
              contrastMode: R,
              defaultPlatformScale: g,
              platformScale: O,
              platformScaleRatios: b,
              platformScaleBreakpoints: m
            },
            children: s ? (0, n.jsx)(o.DX, {
              ref: S,
              children: t
            }) : t
          })
        }))
    },
    43680: (t, e, r) => {
      "use strict";

      function n() {
        return n = Object.assign ? Object.assign.bind() : function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }, n.apply(this, arguments)
      }
      r.d(e, {
        A: () => n
      })
    },
    10439: (t, e, r) => {
      "use strict";

      function n(t) {
        var e, r, o = "";
        if ("string" == typeof t || "number" == typeof t) o += t;
        else if ("object" == typeof t)
          if (Array.isArray(t)) {
            var i = t.length;
            for (e = 0; e < i; e++) t[e] && (r = n(t[e])) && (o && (o += " "), o += r)
          } else
            for (r in t) t[r] && (o && (o += " "), o += r);
        return o
      }

      function o() {
        for (var t, e, r = 0, o = "", i = arguments.length; r < i; r++)(t = arguments[r]) && (e = n(t)) && (o && (o += " "), o += e);
        return o
      }
      r.d(e, {
        $: () => o,
        A: () => i
      });
      const i = o
    }
  }
]);