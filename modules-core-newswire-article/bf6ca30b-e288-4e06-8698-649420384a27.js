! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "bf6ca30b-e288-4e06-8698-649420384a27", t._sentryDebugIdIdentifier = "sentry-dbid-bf6ca30b-e288-4e06-8698-649420384a27")
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
  [924, 240], {
    84296: (t, r, e) => {
      "use strict";
      e.d(r, {
        Q: () => f
      });
      var n = e(51664),
        o = e(77100);
      let a = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
        i = t => t && !Array.isArray(t) && "object" == typeof t,
        c = [],
        u = {},
        s = o.cp;
      const f = function(t) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
          e = u;
        i(t) ? (e = t, t = null, r = "dependencies" in e ? e.dependencies : c) : i(r) && (e = r, r = "dependencies" in e ? e.dependencies : c);
        let {
          scope: o,
          revertOnUpdate: f
        } = e, [p, l] = (0, n.useState)(!1);
        t && "function" != typeof t && console.warn("First parameter must be a function or config object");
        const v = s.context((() => {}), o),
          d = () => v.revert(),
          y = r && r.length && !f;
        return a((() => {
          if (t && v.add(t, o), !y || !p) return d
        }), r), y && a((() => (l(!0), d)), c), {
          context: v,
          contextSafe: t => v.add(null, t)
        }
      };
      f.register = t => {
        s = t
      }, f.headless = !0
    },
    43540: (t, r, e) => {
      var n = e(43527)(e(36056), "DataView");
      t.exports = n
    },
    43640: (t, r, e) => {
      var n = e(78600),
        o = e(4648),
        a = e(59528),
        i = e(23920),
        c = e(17144);

      function u(t) {
        var r = -1,
          e = null == t ? 0 : t.length;
        for (this.clear(); ++r < e;) {
          var n = t[r];
          this.set(n[0], n[1])
        }
      }
      u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = i, u.prototype.set = c, t.exports = u
    },
    35e3: (t, r, e) => {
      var n = e(6460),
        o = e(26152),
        a = e(85752),
        i = e(24408),
        c = e(71020);

      function u(t) {
        var r = -1,
          e = null == t ? 0 : t.length;
        for (this.clear(); ++r < e;) {
          var n = t[r];
          this.set(n[0], n[1])
        }
      }
      u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = i, u.prototype.set = c, t.exports = u
    },
    90856: (t, r, e) => {
      var n = e(43527)(e(36056), "Map");
      t.exports = n
    },
    5704: (t, r, e) => {
      var n = e(3840),
        o = e(63256),
        a = e(67384),
        i = e(95312),
        c = e(1396);

      function u(t) {
        var r = -1,
          e = null == t ? 0 : t.length;
        for (this.clear(); ++r < e;) {
          var n = t[r];
          this.set(n[0], n[1])
        }
      }
      u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = i, u.prototype.set = c, t.exports = u
    },
    49844: (t, r, e) => {
      var n = e(43527)(e(36056), "Promise");
      t.exports = n
    },
    78116: (t, r, e) => {
      var n = e(43527)(e(36056), "Set");
      t.exports = n
    },
    12276: (t, r, e) => {
      var n = e(35e3),
        o = e(52080),
        a = e(46272),
        i = e(59e3),
        c = e(75448),
        u = e(35688);

      function s(t) {
        var r = this.__data__ = new n(t);
        this.size = r.size
      }
      s.prototype.clear = o, s.prototype.delete = a, s.prototype.get = i, s.prototype.has = c, s.prototype.set = u, t.exports = s
    },
    31580: (t, r, e) => {
      var n = e(36056).Symbol;
      t.exports = n
    },
    6664: (t, r, e) => {
      var n = e(36056).Uint8Array;
      t.exports = n
    },
    91064: (t, r, e) => {
      var n = e(43527)(e(36056), "WeakMap");
      t.exports = n
    },
    9924: t => {
      t.exports = function(t, r, e) {
        switch (e.length) {
          case 0:
            return t.call(r);
          case 1:
            return t.call(r, e[0]);
          case 2:
            return t.call(r, e[0], e[1]);
          case 3:
            return t.call(r, e[0], e[1], e[2])
        }
        return t.apply(r, e)
      }
    },
    18540: t => {
      t.exports = function(t, r) {
        for (var e = -1, n = null == t ? 0 : t.length; ++e < n && !1 !== r(t[e], e, t););
        return t
      }
    },
    86876: t => {
      t.exports = function(t, r) {
        for (var e = -1, n = null == t ? 0 : t.length, o = 0, a = []; ++e < n;) {
          var i = t[e];
          r(i, e, t) && (a[o++] = i)
        }
        return a
      }
    },
    60228: (t, r, e) => {
      var n = e(48448),
        o = e(45340),
        a = e(28224),
        i = e(91640),
        c = e(38184),
        u = e(30336),
        s = Object.prototype.hasOwnProperty;
      t.exports = function(t, r) {
        var e = a(t),
          f = !e && o(t),
          p = !e && !f && i(t),
          l = !e && !f && !p && u(t),
          v = e || f || p || l,
          d = v ? n(t.length, String) : [],
          y = d.length;
        for (var h in t) !r && !s.call(t, h) || v && ("length" == h || p && ("offset" == h || "parent" == h) || l && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || c(h, y)) || d.push(h);
        return d
      }
    },
    1412: t => {
      t.exports = function(t, r) {
        for (var e = -1, n = null == t ? 0 : t.length, o = Array(n); ++e < n;) o[e] = r(t[e], e, t);
        return o
      }
    },
    60096: t => {
      t.exports = function(t, r) {
        for (var e = -1, n = r.length, o = t.length; ++e < n;) t[o + e] = r[e];
        return t
      }
    },
    50156: (t, r, e) => {
      var n = e(66508),
        o = e(2536);
      t.exports = function(t, r, e) {
        (void 0 !== e && !o(t[r], e) || void 0 === e && !(r in t)) && n(t, r, e)
      }
    },
    85952: (t, r, e) => {
      var n = e(66508),
        o = e(2536),
        a = Object.prototype.hasOwnProperty;
      t.exports = function(t, r, e) {
        var i = t[r];
        a.call(t, r) && o(i, e) && (void 0 !== e || r in t) || n(t, r, e)
      }
    },
    69784: (t, r, e) => {
      var n = e(2536);
      t.exports = function(t, r) {
        for (var e = t.length; e--;)
          if (n(t[e][0], r)) return e;
        return -1
      }
    },
    64816: (t, r, e) => {
      var n = e(94888),
        o = e(60836);
      t.exports = function(t, r) {
        return t && n(r, o(r), t)
      }
    },
    68704: (t, r, e) => {
      var n = e(94888),
        o = e(3280);
      t.exports = function(t, r) {
        return t && n(r, o(r), t)
      }
    },
    66508: (t, r, e) => {
      var n = e(78204);
      t.exports = function(t, r, e) {
        "__proto__" == r && n ? n(t, r, {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        }) : t[r] = e
      }
    },
    51816: (t, r, e) => {
      var n = e(12276),
        o = e(18540),
        a = e(85952),
        i = e(64816),
        c = e(68704),
        u = e(15832),
        s = e(62736),
        f = e(90576),
        p = e(24996),
        l = e(15648),
        v = e(55360),
        d = e(74868),
        y = e(90832),
        h = e(67252),
        b = e(7268),
        x = e(28224),
        g = e(91640),
        _ = e(92128),
        j = e(89048),
        w = e(15264),
        m = e(60836),
        O = e(3280),
        A = "[object Arguments]",
        S = "[object Function]",
        E = "[object Object]",
        M = {};
      M[A] = M["[object Array]"] = M["[object ArrayBuffer]"] = M["[object DataView]"] = M["[object Boolean]"] = M["[object Date]"] = M["[object Float32Array]"] = M["[object Float64Array]"] = M["[object Int8Array]"] = M["[object Int16Array]"] = M["[object Int32Array]"] = M["[object Map]"] = M["[object Number]"] = M[E] = M["[object RegExp]"] = M["[object Set]"] = M["[object String]"] = M["[object Symbol]"] = M["[object Uint8Array]"] = M["[object Uint8ClampedArray]"] = M["[object Uint16Array]"] = M["[object Uint32Array]"] = !0, M["[object Error]"] = M[S] = M["[object WeakMap]"] = !1, t.exports = function t(r, e, k, P, I, F) {
        var z, T = 1 & e,
          U = 2 & e,
          R = 4 & e;
        if (k && (z = I ? k(r, P, I, F) : k(r)), void 0 !== z) return z;
        if (!j(r)) return r;
        var $ = x(r);
        if ($) {
          if (z = y(r), !T) return s(r, z)
        } else {
          var C = d(r),
            D = C == S || "[object GeneratorFunction]" == C;
          if (g(r)) return u(r, T);
          if (C == E || C == A || D && !I) {
            if (z = U || D ? {} : b(r), !T) return U ? p(r, c(z, r)) : f(r, i(z, r))
          } else {
            if (!M[C]) return I ? r : {};
            z = h(r, C, T)
          }
        }
        F || (F = new n);
        var L = F.get(r);
        if (L) return L;
        F.set(r, z), w(r) ? r.forEach((function(n) {
          z.add(t(n, e, k, n, r, F))
        })) : _(r) && r.forEach((function(n, o) {
          z.set(o, t(n, e, k, o, r, F))
        }));
        var N = $ ? void 0 : (R ? U ? v : l : U ? O : m)(r);
        return o(N || r, (function(n, o) {
          N && (n = r[o = n]), a(z, o, t(n, e, k, o, r, F))
        })), z
      }
    },
    34480: (t, r, e) => {
      var n = e(89048),
        o = Object.create,
        a = function() {
          function t() {}
          return function(r) {
            if (!n(r)) return {};
            if (o) return o(r);
            t.prototype = r;
            var e = new t;
            return t.prototype = void 0, e
          }
        }();
      t.exports = a
    },
    43184: (t, r, e) => {
      var n = e(60096),
        o = e(67764);
      t.exports = function t(r, e, a, i, c) {
        var u = -1,
          s = r.length;
        for (a || (a = o), c || (c = []); ++u < s;) {
          var f = r[u];
          e > 0 && a(f) ? e > 1 ? t(f, e - 1, a, i, c) : n(c, f) : i || (c[c.length] = f)
        }
        return c
      }
    },
    81644: (t, r, e) => {
      var n = e(13836)();
      t.exports = n
    },
    86092: (t, r, e) => {
      var n = e(75328),
        o = e(92264);
      t.exports = function(t, r) {
        for (var e = 0, a = (r = n(r, t)).length; null != t && e < a;) t = t[o(r[e++])];
        return e && e == a ? t : void 0
      }
    },
    1952: (t, r, e) => {
      var n = e(60096),
        o = e(28224);
      t.exports = function(t, r, e) {
        var a = r(t);
        return o(t) ? a : n(a, e(t))
      }
    },
    95992: (t, r, e) => {
      var n = e(31580),
        o = e(78584),
        a = e(49176),
        i = n ? n.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : i && i in Object(t) ? o(t) : a(t)
      }
    },
    68856: (t, r, e) => {
      var n = e(95992),
        o = e(72316);
      t.exports = function(t) {
        return o(t) && "[object Arguments]" == n(t)
      }
    },
    88884: (t, r, e) => {
      var n = e(74868),
        o = e(72316);
      t.exports = function(t) {
        return o(t) && "[object Map]" == n(t)
      }
    },
    30380: (t, r, e) => {
      var n = e(49120),
        o = e(38552),
        a = e(89048),
        i = e(29200),
        c = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        s = Object.prototype,
        f = u.toString,
        p = s.hasOwnProperty,
        l = RegExp("^" + f.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      t.exports = function(t) {
        return !(!a(t) || o(t)) && (n(t) ? l : c).test(i(t))
      }
    },
    62800: (t, r, e) => {
      var n = e(74868),
        o = e(72316);
      t.exports = function(t) {
        return o(t) && "[object Set]" == n(t)
      }
    },
    71664: (t, r, e) => {
      var n = e(95992),
        o = e(19080),
        a = e(72316),
        i = {};
      i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, t.exports = function(t) {
        return a(t) && o(t.length) && !!i[n(t)]
      }
    },
    37228: (t, r, e) => {
      var n = e(12944),
        o = e(13696),
        a = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!n(t)) return o(t);
        var r = [];
        for (var e in Object(t)) a.call(t, e) && "constructor" != e && r.push(e);
        return r
      }
    },
    8088: (t, r, e) => {
      var n = e(89048),
        o = e(12944),
        a = e(28067),
        i = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!n(t)) return a(t);
        var r = o(t),
          e = [];
        for (var c in t)("constructor" != c || !r && i.call(t, c)) && e.push(c);
        return e
      }
    },
    81480: (t, r, e) => {
      var n = e(12276),
        o = e(50156),
        a = e(81644),
        i = e(46261),
        c = e(89048),
        u = e(3280),
        s = e(68040);
      t.exports = function t(r, e, f, p, l) {
        r !== e && a(e, (function(a, u) {
          if (l || (l = new n), c(a)) i(r, e, u, f, t, p, l);
          else {
            var v = p ? p(s(r, u), a, u + "", r, e, l) : void 0;
            void 0 === v && (v = a), o(r, u, v)
          }
        }), u)
      }
    },
    46261: (t, r, e) => {
      var n = e(50156),
        o = e(15832),
        a = e(3456),
        i = e(62736),
        c = e(7268),
        u = e(45340),
        s = e(28224),
        f = e(62480),
        p = e(91640),
        l = e(49120),
        v = e(89048),
        d = e(93592),
        y = e(30336),
        h = e(68040),
        b = e(86724);
      t.exports = function(t, r, e, x, g, _, j) {
        var w = h(t, e),
          m = h(r, e),
          O = j.get(m);
        if (O) n(t, e, O);
        else {
          var A = _ ? _(w, m, e + "", t, r, j) : void 0,
            S = void 0 === A;
          if (S) {
            var E = s(m),
              M = !E && p(m),
              k = !E && !M && y(m);
            A = m, E || M || k ? s(w) ? A = w : f(w) ? A = i(w) : M ? (S = !1, A = o(m, !0)) : k ? (S = !1, A = a(m, !0)) : A = [] : d(m) || u(m) ? (A = w, u(w) ? A = b(w) : v(w) && !l(w) || (A = c(m))) : S = !1
          }
          S && (j.set(m, A), g(A, m, x, _, j), j.delete(m)), n(t, e, A)
        }
      }
    },
    51744: t => {
      var r = Math.ceil,
        e = Math.max;
      t.exports = function(t, n, o, a) {
        for (var i = -1, c = e(r((n - t) / (o || 1)), 0), u = Array(c); c--;) u[a ? c : ++i] = t, t += o;
        return u
      }
    },
    70867: (t, r, e) => {
      var n = e(89848),
        o = e(39676),
        a = e(57396);
      t.exports = function(t, r) {
        return a(o(t, r, n), t + "")
      }
    },
    79336: (t, r, e) => {
      var n = e(85952),
        o = e(75328),
        a = e(38184),
        i = e(89048),
        c = e(92264);
      t.exports = function(t, r, e, u) {
        if (!i(t)) return t;
        for (var s = -1, f = (r = o(r, t)).length, p = f - 1, l = t; null != l && ++s < f;) {
          var v = c(r[s]),
            d = e;
          if ("__proto__" === v || "constructor" === v || "prototype" === v) return t;
          if (s != p) {
            var y = l[v];
            void 0 === (d = u ? u(y, v, l) : void 0) && (d = i(y) ? y : a(r[s + 1]) ? [] : {})
          }
          n(l, v, d), l = l[v]
        }
        return t
      }
    },
    11632: (t, r, e) => {
      var n = e(76088),
        o = e(78204),
        a = e(89848),
        i = o ? function(t, r) {
          return o(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(r),
            writable: !0
          })
        } : a;
      t.exports = i
    },
    21208: t => {
      t.exports = function(t, r, e) {
        var n = -1,
          o = t.length;
        r < 0 && (r = -r > o ? 0 : o + r), (e = e > o ? o : e) < 0 && (e += o), o = r > e ? 0 : e - r >>> 0, r >>>= 0;
        for (var a = Array(o); ++n < o;) a[n] = t[n + r];
        return a
      }
    },
    48448: t => {
      t.exports = function(t, r) {
        for (var e = -1, n = Array(t); ++e < t;) n[e] = r(e);
        return n
      }
    },
    18352: (t, r, e) => {
      var n = e(31580),
        o = e(1412),
        a = e(28224),
        i = e(99464),
        c = n ? n.prototype : void 0,
        u = c ? c.toString : void 0;
      t.exports = function t(r) {
        if ("string" == typeof r) return r;
        if (a(r)) return o(r, t) + "";
        if (i(r)) return u ? u.call(r) : "";
        var e = r + "";
        return "0" == e && 1 / r == -1 / 0 ? "-0" : e
      }
    },
    96096: (t, r, e) => {
      var n = e(57520),
        o = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, n(t) + 1).replace(o, "") : t
      }
    },
    10976: t => {
      t.exports = function(t) {
        return function(r) {
          return t(r)
        }
      }
    },
    76624: (t, r, e) => {
      var n = e(75328),
        o = e(21727),
        a = e(80252),
        i = e(92264);
      t.exports = function(t, r) {
        return r = n(r, t), null == (t = a(t, r)) || delete t[i(o(r))]
      }
    },
    75328: (t, r, e) => {
      var n = e(28224),
        o = e(61128),
        a = e(35748),
        i = e(62080);
      t.exports = function(t, r) {
        return n(t) ? t : o(t, r) ? [t] : a(i(t))
      }
    },
    72712: (t, r, e) => {
      var n = e(6664);
      t.exports = function(t) {
        var r = new t.constructor(t.byteLength);
        return new n(r).set(new n(t)), r
      }
    },
    15832: (t, r, e) => {
      t = e.nmd(t);
      var n = e(36056),
        o = r && !r.nodeType && r,
        a = o && t && !t.nodeType && t,
        i = a && a.exports === o ? n.Buffer : void 0,
        c = i ? i.allocUnsafe : void 0;
      t.exports = function(t, r) {
        if (r) return t.slice();
        var e = t.length,
          n = c ? c(e) : new t.constructor(e);
        return t.copy(n), n
      }
    },
    41452: (t, r, e) => {
      var n = e(72712);
      t.exports = function(t, r) {
        var e = r ? n(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.byteLength)
      }
    },
    93077: t => {
      var r = /\w*$/;
      t.exports = function(t) {
        var e = new t.constructor(t.source, r.exec(t));
        return e.lastIndex = t.lastIndex, e
      }
    },
    13235: (t, r, e) => {
      var n = e(31580),
        o = n ? n.prototype : void 0,
        a = o ? o.valueOf : void 0;
      t.exports = function(t) {
        return a ? Object(a.call(t)) : {}
      }
    },
    3456: (t, r, e) => {
      var n = e(72712);
      t.exports = function(t, r) {
        var e = r ? n(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.length)
      }
    },
    62736: t => {
      t.exports = function(t, r) {
        var e = -1,
          n = t.length;
        for (r || (r = Array(n)); ++e < n;) r[e] = t[e];
        return r
      }
    },
    94888: (t, r, e) => {
      var n = e(85952),
        o = e(66508);
      t.exports = function(t, r, e, a) {
        var i = !e;
        e || (e = {});
        for (var c = -1, u = r.length; ++c < u;) {
          var s = r[c],
            f = a ? a(e[s], t[s], s, e, t) : void 0;
          void 0 === f && (f = t[s]), i ? o(e, s, f) : n(e, s, f)
        }
        return e
      }
    },
    90576: (t, r, e) => {
      var n = e(94888),
        o = e(19655);
      t.exports = function(t, r) {
        return n(t, o(t), r)
      }
    },
    24996: (t, r, e) => {
      var n = e(94888),
        o = e(20140);
      t.exports = function(t, r) {
        return n(t, o(t), r)
      }
    },
    81704: (t, r, e) => {
      var n = e(36056)["__core-js_shared__"];
      t.exports = n
    },
    50936: (t, r, e) => {
      var n = e(70867),
        o = e(45920);
      t.exports = function(t) {
        return n((function(r, e) {
          var n = -1,
            a = e.length,
            i = a > 1 ? e[a - 1] : void 0,
            c = a > 2 ? e[2] : void 0;
          for (i = t.length > 3 && "function" == typeof i ? (a--, i) : void 0, c && o(e[0], e[1], c) && (i = a < 3 ? void 0 : i, a = 1), r = Object(r); ++n < a;) {
            var u = e[n];
            u && t(r, u, n, i)
          }
          return r
        }))
      }
    },
    13836: t => {
      t.exports = function(t) {
        return function(r, e, n) {
          for (var o = -1, a = Object(r), i = n(r), c = i.length; c--;) {
            var u = i[t ? c : ++o];
            if (!1 === e(a[u], u, a)) break
          }
          return r
        }
      }
    },
    63524: (t, r, e) => {
      var n = e(51744),
        o = e(45920),
        a = e(67040);
      t.exports = function(t) {
        return function(r, e, i) {
          return i && "number" != typeof i && o(r, e, i) && (e = i = void 0), r = a(r), void 0 === e ? (e = r, r = 0) : e = a(e), i = void 0 === i ? r < e ? 1 : -1 : a(i), n(r, e, i, t)
        }
      }
    },
    51309: (t, r, e) => {
      var n = e(93592);
      t.exports = function(t) {
        return n(t) ? void 0 : t
      }
    },
    78204: (t, r, e) => {
      var n = e(43527),
        o = function() {
          try {
            var t = n(Object, "defineProperty");
            return t({}, "", {}), t
          } catch (t) {}
        }();
      t.exports = o
    },
    43084: (t, r, e) => {
      var n = e(36272),
        o = e(39676),
        a = e(57396);
      t.exports = function(t) {
        return a(o(t, void 0, n), t + "")
      }
    },
    81044: (t, r, e) => {
      var n = "object" == typeof e.g && e.g && e.g.Object === Object && e.g;
      t.exports = n
    },
    15648: (t, r, e) => {
      var n = e(1952),
        o = e(19655),
        a = e(60836);
      t.exports = function(t) {
        return n(t, a, o)
      }
    },
    55360: (t, r, e) => {
      var n = e(1952),
        o = e(20140),
        a = e(3280);
      t.exports = function(t) {
        return n(t, a, o)
      }
    },
    46612: (t, r, e) => {
      var n = e(40288);
      t.exports = function(t, r) {
        var e = t.__data__;
        return n(r) ? e["string" == typeof r ? "string" : "hash"] : e.map
      }
    },
    43527: (t, r, e) => {
      var n = e(30380),
        o = e(34848);
      t.exports = function(t, r) {
        var e = o(t, r);
        return n(e) ? e : void 0
      }
    },
    47972: (t, r, e) => {
      var n = e(80980)(Object.getPrototypeOf, Object);
      t.exports = n
    },
    78584: (t, r, e) => {
      var n = e(31580),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.toString,
        c = n ? n.toStringTag : void 0;
      t.exports = function(t) {
        var r = a.call(t, c),
          e = t[c];
        try {
          t[c] = void 0;
          var n = !0
        } catch (t) {}
        var o = i.call(t);
        return n && (r ? t[c] = e : delete t[c]), o
      }
    },
    19655: (t, r, e) => {
      var n = e(86876),
        o = e(57080),
        a = Object.prototype.propertyIsEnumerable,
        i = Object.getOwnPropertySymbols,
        c = i ? function(t) {
          return null == t ? [] : (t = Object(t), n(i(t), (function(r) {
            return a.call(t, r)
          })))
        } : o;
      t.exports = c
    },
    20140: (t, r, e) => {
      var n = e(60096),
        o = e(47972),
        a = e(19655),
        i = e(57080),
        c = Object.getOwnPropertySymbols ? function(t) {
          for (var r = []; t;) n(r, a(t)), t = o(t);
          return r
        } : i;
      t.exports = c
    },
    74868: (t, r, e) => {
      var n = e(43540),
        o = e(90856),
        a = e(49844),
        i = e(78116),
        c = e(91064),
        u = e(95992),
        s = e(29200),
        f = "[object Map]",
        p = "[object Promise]",
        l = "[object Set]",
        v = "[object WeakMap]",
        d = "[object DataView]",
        y = s(n),
        h = s(o),
        b = s(a),
        x = s(i),
        g = s(c),
        _ = u;
      (n && _(new n(new ArrayBuffer(1))) != d || o && _(new o) != f || a && _(a.resolve()) != p || i && _(new i) != l || c && _(new c) != v) && (_ = function(t) {
        var r = u(t),
          e = "[object Object]" == r ? t.constructor : void 0,
          n = e ? s(e) : "";
        if (n) switch (n) {
          case y:
            return d;
          case h:
            return f;
          case b:
            return p;
          case x:
            return l;
          case g:
            return v
        }
        return r
      }), t.exports = _
    },
    34848: t => {
      t.exports = function(t, r) {
        return null == t ? void 0 : t[r]
      }
    },
    78600: (t, r, e) => {
      var n = e(63368);
      t.exports = function() {
        this.__data__ = n ? n(null) : {}, this.size = 0
      }
    },
    4648: t => {
      t.exports = function(t) {
        var r = this.has(t) && delete this.__data__[t];
        return this.size -= r ? 1 : 0, r
      }
    },
    59528: (t, r, e) => {
      var n = e(63368),
        o = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var r = this.__data__;
        if (n) {
          var e = r[t];
          return "__lodash_hash_undefined__" === e ? void 0 : e
        }
        return o.call(r, t) ? r[t] : void 0
      }
    },
    23920: (t, r, e) => {
      var n = e(63368),
        o = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var r = this.__data__;
        return n ? void 0 !== r[t] : o.call(r, t)
      }
    },
    17144: (t, r, e) => {
      var n = e(63368);
      t.exports = function(t, r) {
        var e = this.__data__;
        return this.size += this.has(t) ? 0 : 1, e[t] = n && void 0 === r ? "__lodash_hash_undefined__" : r, this
      }
    },
    90832: t => {
      var r = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = t.length,
          n = new t.constructor(e);
        return e && "string" == typeof t[0] && r.call(t, "index") && (n.index = t.index, n.input = t.input), n
      }
    },
    67252: (t, r, e) => {
      var n = e(72712),
        o = e(41452),
        a = e(93077),
        i = e(13235),
        c = e(3456);
      t.exports = function(t, r, e) {
        var u = t.constructor;
        switch (r) {
          case "[object ArrayBuffer]":
            return n(t);
          case "[object Boolean]":
          case "[object Date]":
            return new u(+t);
          case "[object DataView]":
            return o(t, e);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return c(t, e);
          case "[object Map]":
          case "[object Set]":
            return new u;
          case "[object Number]":
          case "[object String]":
            return new u(t);
          case "[object RegExp]":
            return a(t);
          case "[object Symbol]":
            return i(t)
        }
      }
    },
    7268: (t, r, e) => {
      var n = e(34480),
        o = e(47972),
        a = e(12944);
      t.exports = function(t) {
        return "function" != typeof t.constructor || a(t) ? {} : n(o(t))
      }
    },
    67764: (t, r, e) => {
      var n = e(31580),
        o = e(45340),
        a = e(28224),
        i = n ? n.isConcatSpreadable : void 0;
      t.exports = function(t) {
        return a(t) || o(t) || !!(i && t && t[i])
      }
    },
    38184: t => {
      var r = /^(?:0|[1-9]\d*)$/;
      t.exports = function(t, e) {
        var n = typeof t;
        return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && r.test(t)) && t > -1 && t % 1 == 0 && t < e
      }
    },
    45920: (t, r, e) => {
      var n = e(2536),
        o = e(59687),
        a = e(38184),
        i = e(89048);
      t.exports = function(t, r, e) {
        if (!i(e)) return !1;
        var c = typeof r;
        return !!("number" == c ? o(e) && a(r, e.length) : "string" == c && r in e) && n(e[r], t)
      }
    },
    61128: (t, r, e) => {
      var n = e(28224),
        o = e(99464),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/;
      t.exports = function(t, r) {
        if (n(t)) return !1;
        var e = typeof t;
        return !("number" != e && "symbol" != e && "boolean" != e && null != t && !o(t)) || i.test(t) || !a.test(t) || null != r && t in Object(r)
      }
    },
    40288: t => {
      t.exports = function(t) {
        var r = typeof t;
        return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t
      }
    },
    38552: (t, r, e) => {
      var n, o = e(81704),
        a = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
      t.exports = function(t) {
        return !!a && a in t
      }
    },
    12944: t => {
      var r = Object.prototype;
      t.exports = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || r)
      }
    },
    6460: t => {
      t.exports = function() {
        this.__data__ = [], this.size = 0
      }
    },
    26152: (t, r, e) => {
      var n = e(69784),
        o = Array.prototype.splice;
      t.exports = function(t) {
        var r = this.__data__,
          e = n(r, t);
        return !(e < 0 || (e == r.length - 1 ? r.pop() : o.call(r, e, 1), --this.size, 0))
      }
    },
    85752: (t, r, e) => {
      var n = e(69784);
      t.exports = function(t) {
        var r = this.__data__,
          e = n(r, t);
        return e < 0 ? void 0 : r[e][1]
      }
    },
    24408: (t, r, e) => {
      var n = e(69784);
      t.exports = function(t) {
        return n(this.__data__, t) > -1
      }
    },
    71020: (t, r, e) => {
      var n = e(69784);
      t.exports = function(t, r) {
        var e = this.__data__,
          o = n(e, t);
        return o < 0 ? (++this.size, e.push([t, r])) : e[o][1] = r, this
      }
    },
    3840: (t, r, e) => {
      var n = e(43640),
        o = e(35e3),
        a = e(90856);
      t.exports = function() {
        this.size = 0, this.__data__ = {
          hash: new n,
          map: new(a || o),
          string: new n
        }
      }
    },
    63256: (t, r, e) => {
      var n = e(46612);
      t.exports = function(t) {
        var r = n(this, t).delete(t);
        return this.size -= r ? 1 : 0, r
      }
    },
    67384: (t, r, e) => {
      var n = e(46612);
      t.exports = function(t) {
        return n(this, t).get(t)
      }
    },
    95312: (t, r, e) => {
      var n = e(46612);
      t.exports = function(t) {
        return n(this, t).has(t)
      }
    },
    1396: (t, r, e) => {
      var n = e(46612);
      t.exports = function(t, r) {
        var e = n(this, t),
          o = e.size;
        return e.set(t, r), this.size += e.size == o ? 0 : 1, this
      }
    },
    22336: (t, r, e) => {
      var n = e(66436);
      t.exports = function(t) {
        var r = n(t, (function(t) {
            return 500 === e.size && e.clear(), t
          })),
          e = r.cache;
        return r
      }
    },
    63368: (t, r, e) => {
      var n = e(43527)(Object, "create");
      t.exports = n
    },
    13696: (t, r, e) => {
      var n = e(80980)(Object.keys, Object);
      t.exports = n
    },
    28067: t => {
      t.exports = function(t) {
        var r = [];
        if (null != t)
          for (var e in Object(t)) r.push(e);
        return r
      }
    },
    77084: (t, r, e) => {
      t = e.nmd(t);
      var n = e(81044),
        o = r && !r.nodeType && r,
        a = o && t && !t.nodeType && t,
        i = a && a.exports === o && n.process,
        c = function() {
          try {
            return a && a.require && a.require("util").types || i && i.binding && i.binding("util")
          } catch (t) {}
        }();
      t.exports = c
    },
    49176: t => {
      var r = Object.prototype.toString;
      t.exports = function(t) {
        return r.call(t)
      }
    },
    80980: t => {
      t.exports = function(t, r) {
        return function(e) {
          return t(r(e))
        }
      }
    },
    39676: (t, r, e) => {
      var n = e(9924),
        o = Math.max;
      t.exports = function(t, r, e) {
        return r = o(void 0 === r ? t.length - 1 : r, 0),
          function() {
            for (var a = arguments, i = -1, c = o(a.length - r, 0), u = Array(c); ++i < c;) u[i] = a[r + i];
            i = -1;
            for (var s = Array(r + 1); ++i < r;) s[i] = a[i];
            return s[r] = e(u), n(t, this, s)
          }
      }
    },
    80252: (t, r, e) => {
      var n = e(86092),
        o = e(21208);
      t.exports = function(t, r) {
        return r.length < 2 ? t : n(t, o(r, 0, -1))
      }
    },
    36056: (t, r, e) => {
      var n = e(81044),
        o = "object" == typeof self && self && self.Object === Object && self,
        a = n || o || Function("return this")();
      t.exports = a
    },
    68040: t => {
      t.exports = function(t, r) {
        if (("constructor" !== r || "function" != typeof t[r]) && "__proto__" != r) return t[r]
      }
    },
    57396: (t, r, e) => {
      var n = e(11632),
        o = e(2360)(n);
      t.exports = o
    },
    2360: t => {
      var r = Date.now;
      t.exports = function(t) {
        var e = 0,
          n = 0;
        return function() {
          var o = r(),
            a = 16 - (o - n);
          if (n = o, a > 0) {
            if (++e >= 800) return arguments[0]
          } else e = 0;
          return t.apply(void 0, arguments)
        }
      }
    },
    52080: (t, r, e) => {
      var n = e(35e3);
      t.exports = function() {
        this.__data__ = new n, this.size = 0
      }
    },
    46272: t => {
      t.exports = function(t) {
        var r = this.__data__,
          e = r.delete(t);
        return this.size = r.size, e
      }
    },
    59e3: t => {
      t.exports = function(t) {
        return this.__data__.get(t)
      }
    },
    75448: t => {
      t.exports = function(t) {
        return this.__data__.has(t)
      }
    },
    35688: (t, r, e) => {
      var n = e(35e3),
        o = e(90856),
        a = e(5704);
      t.exports = function(t, r) {
        var e = this.__data__;
        if (e instanceof n) {
          var i = e.__data__;
          if (!o || i.length < 199) return i.push([t, r]), this.size = ++e.size, this;
          e = this.__data__ = new a(i)
        }
        return e.set(t, r), this.size = e.size, this
      }
    },
    35748: (t, r, e) => {
      var n = e(22336),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        i = n((function(t) {
          var r = [];
          return 46 === t.charCodeAt(0) && r.push(""), t.replace(o, (function(t, e, n, o) {
            r.push(n ? o.replace(a, "$1") : e || t)
          })), r
        }));
      t.exports = i
    },
    92264: (t, r, e) => {
      var n = e(99464);
      t.exports = function(t) {
        if ("string" == typeof t || n(t)) return t;
        var r = t + "";
        return "0" == r && 1 / t == -1 / 0 ? "-0" : r
      }
    },
    29200: t => {
      var r = Function.prototype.toString;
      t.exports = function(t) {
        if (null != t) {
          try {
            return r.call(t)
          } catch (t) {}
          try {
            return t + ""
          } catch (t) {}
        }
        return ""
      }
    },
    57520: t => {
      var r = /\s/;
      t.exports = function(t) {
        for (var e = t.length; e-- && r.test(t.charAt(e)););
        return e
      }
    },
    38584: (t, r, e) => {
      var n = e(51816);
      t.exports = function(t) {
        return n(t, 5)
      }
    },
    76088: t => {
      t.exports = function(t) {
        return function() {
          return t
        }
      }
    },
    69760: (t, r, e) => {
      var n = e(89048),
        o = e(12721),
        a = e(80088),
        i = Math.max,
        c = Math.min;
      t.exports = function(t, r, e) {
        var u, s, f, p, l, v, d = 0,
          y = !1,
          h = !1,
          b = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function x(r) {
          var e = u,
            n = s;
          return u = s = void 0, d = r, p = t.apply(n, e)
        }

        function g(t) {
          var e = t - v;
          return void 0 === v || e >= r || e < 0 || h && t - d >= f
        }

        function _() {
          var t = o();
          if (g(t)) return j(t);
          l = setTimeout(_, function(t) {
            var e = r - (t - v);
            return h ? c(e, f - (t - d)) : e
          }(t))
        }

        function j(t) {
          return l = void 0, b && u ? x(t) : (u = s = void 0, p)
        }

        function w() {
          var t = o(),
            e = g(t);
          if (u = arguments, s = this, v = t, e) {
            if (void 0 === l) return function(t) {
              return d = t, l = setTimeout(_, r), y ? x(t) : p
            }(v);
            if (h) return clearTimeout(l), l = setTimeout(_, r), x(v)
          }
          return void 0 === l && (l = setTimeout(_, r)), p
        }
        return r = a(r) || 0, n(e) && (y = !!e.leading, f = (h = "maxWait" in e) ? i(a(e.maxWait) || 0, r) : f, b = "trailing" in e ? !!e.trailing : b), w.cancel = function() {
          void 0 !== l && clearTimeout(l), d = 0, u = v = s = l = void 0
        }, w.flush = function() {
          return void 0 === l ? p : j(o())
        }, w
      }
    },
    2536: t => {
      t.exports = function(t, r) {
        return t === r || t != t && r != r
      }
    },
    36272: (t, r, e) => {
      var n = e(43184);
      t.exports = function(t) {
        return null != t && t.length ? n(t, 1) : []
      }
    },
    89848: t => {
      t.exports = function(t) {
        return t
      }
    },
    45340: (t, r, e) => {
      var n = e(68856),
        o = e(72316),
        a = Object.prototype,
        i = a.hasOwnProperty,
        c = a.propertyIsEnumerable,
        u = n(function() {
          return arguments
        }()) ? n : function(t) {
          return o(t) && i.call(t, "callee") && !c.call(t, "callee")
        };
      t.exports = u
    },
    28224: t => {
      var r = Array.isArray;
      t.exports = r
    },
    59687: (t, r, e) => {
      var n = e(49120),
        o = e(19080);
      t.exports = function(t) {
        return null != t && o(t.length) && !n(t)
      }
    },
    62480: (t, r, e) => {
      var n = e(59687),
        o = e(72316);
      t.exports = function(t) {
        return o(t) && n(t)
      }
    },
    91640: (t, r, e) => {
      t = e.nmd(t);
      var n = e(36056),
        o = e(87732),
        a = r && !r.nodeType && r,
        i = a && t && !t.nodeType && t,
        c = i && i.exports === a ? n.Buffer : void 0,
        u = (c ? c.isBuffer : void 0) || o;
      t.exports = u
    },
    49120: (t, r, e) => {
      var n = e(95992),
        o = e(89048);
      t.exports = function(t) {
        if (!o(t)) return !1;
        var r = n(t);
        return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r
      }
    },
    19080: t => {
      t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
      }
    },
    92128: (t, r, e) => {
      var n = e(88884),
        o = e(10976),
        a = e(77084),
        i = a && a.isMap,
        c = i ? o(i) : n;
      t.exports = c
    },
    89048: t => {
      t.exports = function(t) {
        var r = typeof t;
        return null != t && ("object" == r || "function" == r)
      }
    },
    72316: t => {
      t.exports = function(t) {
        return null != t && "object" == typeof t
      }
    },
    93592: (t, r, e) => {
      var n = e(95992),
        o = e(47972),
        a = e(72316),
        i = Function.prototype,
        c = Object.prototype,
        u = i.toString,
        s = c.hasOwnProperty,
        f = u.call(Object);
      t.exports = function(t) {
        if (!a(t) || "[object Object]" != n(t)) return !1;
        var r = o(t);
        if (null === r) return !0;
        var e = s.call(r, "constructor") && r.constructor;
        return "function" == typeof e && e instanceof e && u.call(e) == f
      }
    },
    15264: (t, r, e) => {
      var n = e(62800),
        o = e(10976),
        a = e(77084),
        i = a && a.isSet,
        c = i ? o(i) : n;
      t.exports = c
    },
    17724: (t, r, e) => {
      var n = e(95992),
        o = e(28224),
        a = e(72316);
      t.exports = function(t) {
        return "string" == typeof t || !o(t) && a(t) && "[object String]" == n(t)
      }
    },
    99464: (t, r, e) => {
      var n = e(95992),
        o = e(72316);
      t.exports = function(t) {
        return "symbol" == typeof t || o(t) && "[object Symbol]" == n(t)
      }
    },
    30336: (t, r, e) => {
      var n = e(71664),
        o = e(10976),
        a = e(77084),
        i = a && a.isTypedArray,
        c = i ? o(i) : n;
      t.exports = c
    },
    60836: (t, r, e) => {
      var n = e(60228),
        o = e(37228),
        a = e(59687);
      t.exports = function(t) {
        return a(t) ? n(t) : o(t)
      }
    },
    3280: (t, r, e) => {
      var n = e(60228),
        o = e(8088),
        a = e(59687);
      t.exports = function(t) {
        return a(t) ? n(t, !0) : o(t)
      }
    },
    21727: t => {
      t.exports = function(t) {
        var r = null == t ? 0 : t.length;
        return r ? t[r - 1] : void 0
      }
    },
    66436: (t, r, e) => {
      var n = e(5704);

      function o(t, r) {
        if ("function" != typeof t || null != r && "function" != typeof r) throw new TypeError("Expected a function");
        var e = function() {
          var n = arguments,
            o = r ? r.apply(this, n) : n[0],
            a = e.cache;
          if (a.has(o)) return a.get(o);
          var i = t.apply(this, n);
          return e.cache = a.set(o, i) || a, i
        };
        return e.cache = new(o.Cache || n), e
      }
      o.Cache = n, t.exports = o
    },
    69016: (t, r, e) => {
      var n = e(81480),
        o = e(50936)((function(t, r, e) {
          n(t, r, e)
        }));
      t.exports = o
    },
    14312: (t, r, e) => {
      var n = e(81480),
        o = e(50936)((function(t, r, e, o) {
          n(t, r, e, o)
        }));
      t.exports = o
    },
    12721: (t, r, e) => {
      var n = e(36056);
      t.exports = function() {
        return n.Date.now()
      }
    },
    19848: (t, r, e) => {
      var n = e(1412),
        o = e(51816),
        a = e(76624),
        i = e(75328),
        c = e(94888),
        u = e(51309),
        s = e(43084),
        f = e(55360),
        p = s((function(t, r) {
          var e = {};
          if (null == t) return e;
          var s = !1;
          r = n(r, (function(r) {
            return r = i(r, t), s || (s = r.length > 1), r
          })), c(t, f(t), e), s && (e = o(e, 7, u));
          for (var p = r.length; p--;) a(e, r[p]);
          return e
        }));
      t.exports = p
    },
    28948: (t, r, e) => {
      var n = e(63524)();
      t.exports = n
    },
    52536: (t, r, e) => {
      var n = e(79336);
      t.exports = function(t, r, e, o) {
        return o = "function" == typeof o ? o : void 0, null == t ? t : n(t, r, e, o)
      }
    },
    57080: t => {
      t.exports = function() {
        return []
      }
    },
    87732: t => {
      t.exports = function() {
        return !1
      }
    },
    67040: (t, r, e) => {
      var n = e(80088);
      t.exports = function(t) {
        return t ? Infinity === (t = n(t)) || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
      }
    },
    80088: (t, r, e) => {
      var n = e(96096),
        o = e(89048),
        a = e(99464),
        i = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        s = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (a(t)) return NaN;
        if (o(t)) {
          var r = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(r) ? r + "" : r
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = n(t);
        var e = c.test(t);
        return e || u.test(t) ? s(t.slice(2), e ? 2 : 8) : i.test(t) ? NaN : +t
      }
    },
    86724: (t, r, e) => {
      var n = e(94888),
        o = e(3280);
      t.exports = function(t) {
        return n(t, o(t))
      }
    },
    62080: (t, r, e) => {
      var n = e(18352);
      t.exports = function(t) {
        return null == t ? "" : n(t)
      }
    },
    99576: (t, r, e) => {
      "use strict";
      var n = e(51664),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(t, r, e) {
        var n, a = {},
          s = null,
          f = null;
        for (n in void 0 !== e && (s = "" + e), void 0 !== r.key && (s = "" + r.key), void 0 !== r.ref && (f = r.ref), r) i.call(r, n) && !u.hasOwnProperty(n) && (a[n] = r[n]);
        if (t && t.defaultProps)
          for (n in r = t.defaultProps) void 0 === a[n] && (a[n] = r[n]);
        return {
          $$typeof: o,
          type: t,
          key: s,
          ref: f,
          props: a,
          _owner: c.current
        }
      }
      r.Fragment = a, r.jsx = s, r.jsxs = s
    },
    95240: (t, r, e) => {
      "use strict";
      t.exports = e(99576)
    },
    89772: (t, r) => {
      var e;
      ! function() {
        "use strict";
        var n = {}.hasOwnProperty;

        function o() {
          for (var t = "", r = 0; r < arguments.length; r++) {
            var e = arguments[r];
            e && (t = i(t, a(e)))
          }
          return t
        }

        function a(t) {
          if ("string" == typeof t || "number" == typeof t) return t;
          if ("object" != typeof t) return "";
          if (Array.isArray(t)) return o.apply(null, t);
          if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
          var r = "";
          for (var e in t) n.call(t, e) && t[e] && (r = i(r, e));
          return r
        }

        function i(t, r) {
          return r ? t ? t + " " + r : t + r : t
        }
        t.exports ? (o.default = o, t.exports = o) : void 0 === (e = function() {
          return o
        }.apply(r, [])) || (t.exports = e)
      }()
    },
    39896: (t, r, e) => {
      "use strict";
      e.d(r, {
        eU: () => g,
        oU: () => b
      });
      var n = e(95240),
        o = e(51664);
      const a = "undefined" == typeof window;
      var i = e(89772),
        c = e(14312),
        u = e(49120),
        s = e(89048),
        f = e(17724);
      const p = (t, r) => Array().concat(r).reduce(((t, r) => c(t, r, ((t, r) => u(t) && u(r) ? function(...t) {
        return (...r) => {
          for (const e of t) "function" == typeof e && e(...r)
        }
      }(t, r) : s(t) && s(r) ? p(t, r) : f(t) && f(r) ? i(t, r) : r || t))), t);
      var l = e(28948);
      e(19848), e(69016), e(38584), e(52536);

      function v(t, r, e = 0) {
        const n = Math.floor(r.length / 2);
        t[r[n]] = e;
        const o = r.slice(0, n),
          a = r.slice(n + 1);
        return o.length && v(t, o, e + 1), a.length && v(t, a, e + 1), t
      }

      function d(t) {
        const r = [],
          e = l(t - 2);
        return v(e, e), e.forEach(((t, e) => {
          r[t] = r[t] || [], r[t].push(e + 1)
        })), r[1] = [...r[0], ...r[1]].sort(), r[0] = [0, t - 1], [...r]
      }
      async function y(t) {
        return new Promise(((r, e) => {
          const n = new Image;
          n.onabort = () => e(), n.onerror = () => e(), n.onload = () => r(n), n.src = t
        }))
      }
      const h = ({
          canvasRef: t,
          sequence: r,
          progressValue: e,
          enabled: n = !0
        }) => {
          const a = (() => {
              const t = (0, o.useRef)();
              return {
                cancelAnimationFrame: (0, o.useCallback)((() => cancelAnimationFrame(t.current)), []),
                requestAnimationFrame: (0, o.useCallback)((r => {
                  t.current = requestAnimationFrame(r)
                }), [])
              }
            })(),
            i = (t => {
              const r = () => t.current?.getContext("2d") || null,
                [e, n] = (0, o.useState)(r());
              return (0, o.useEffect)((() => {
                t.current && !e && n(r())
              }), [t.current]), e
            })(t),
            c = (({
              sequence: t,
              enabled: r,
              ctx: e,
              onLoad: n
            }) => {
              const a = (0, o.useRef)(new Array(t.frames));
              return (0, o.useEffect)((() => {
                r && async function(t, r, e) {
                  const n = d(r.frames);
                  for (const o of n) await Promise.all(o.map((async n => {
                    t[n] = await y(`${r.baseUrl}/${n.toString().padStart(4,"0")}.${r.format}`), e?.(n)
                  })))
                }(a.current, t, n)
              }), [r, e]), a.current
            })({
              sequence: r,
              enabled: n,
              ctx: i,
              onLoad(t) {
                0 === t && u(0)
              }
            }),
            u = (0, o.useCallback)((t => {
              if (i && n) {
                const e = Math.floor(t * r.frames),
                  n = c[e];
                n && a.requestAnimationFrame((() => {
                  !async function(t, r) {
                    const e = t.canvas,
                      {
                        offsetX: n,
                        offsetY: o,
                        width: a,
                        height: i
                      } = ((t, r, e, n, o = 1, a = .5, i = .5) => {
                        const c = e / n;
                        let u = t * o,
                          s = r * o;
                        return c < t / r ? s = u / c : u = s * c, {
                          width: u,
                          height: s,
                          offsetX: (t - u) * a,
                          offsetY: (r - s) * i
                        }
                      })(e.width, e.height, r.width, r.height);
                    t.clearRect(0, 0, e.width, e.height), t.drawImage(r, n, o, a, i)
                  }(i, n)
                }))
              }
            }), [i, n, c]);
          (0, o.useEffect)((() => (e.onChange(u), () => {
            e.disconnect(u)
          })), [e, u]), (0, o.useEffect)((() => () => {
            a.cancelAnimationFrame()
          }), [])
        },
        b = (0, o.forwardRef)((({
          alt: t,
          progressValue: r,
          sequence: e,
          usePosterOnly: i,
          testId: c,
          ...u
        }, s) => {
          const f = function(t, {
              defaultValue: r = !1,
              initializeWithValue: e = !0
            } = {}) {
              const n = t => a || !window.matchMedia ? r : window.matchMedia(t).matches,
                [i, c] = (0, o.useState)((() => e ? n(t) : r));

              function u() {
                c(n(t))
              }
              return (0, o.useEffect)((() => {
                const r = window.matchMedia?.(t);
                return u(), r?.addListener ? r?.addListener(u) : r?.addEventListener("change", u), () => {
                  r?.removeListener ? r?.removeListener(u) : r?.removeEventListener("change", u)
                }
              }), [t]), i
            }("prefers-reduced-motion", {
              defaultValue: !1,
              initializeWithValue: !0
            }),
            l = function(...t) {
              const r = (0, o.useRef)(null);
              return (0, o.useEffect)((() => {
                t.forEach((t => {
                  t && ("function" == typeof t ? t(r.current || null) : t.current = r.current)
                }))
              }), [t]), r
            }(s, (0, o.useRef)(null)),
            v = p(u, {
              className: "foundry_klt7c80"
            });
          return h({
            canvasRef: l,
            sequence: e,
            progressValue: r,
            enabled: !i && !f
          }), (0, n.jsxs)("div", {
            ...v,
            role: "img",
            "aria-label": t,
            "data-testid": c,
            children: [(0, n.jsx)("canvas", {
              ref: l,
              "aria-hidden": !0,
              width: e.width,
              height: e.height,
              className: "foundry_klt7c81"
            }), (0, n.jsx)("img", {
              src: e.poster,
              "aria-hidden": !0,
              width: e.width,
              height: e.height,
              className: "foundry_klt7c82"
            })]
          })
        })),
        x = (t, r, e) => Math.min(Math.max(e, t), r);
      class g {
        progress = 0;
        cbs = new Set;
        constructor(t = 0) {
          this.progress = x(0, 1, t)
        }
        get get() {
          return this.progress
        }
        onChange(t) {
          this.cbs.add(t)
        }
        disconnect(t) {
          this.cbs.has(t) && this.cbs.delete(t)
        }
        set(t) {
          this.progress = x(0, 1, t), this.cbs.forEach((t => t(this.progress)))
        }
      }
    }
  }
]);