! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "44b3f484-6c9a-408c-bfd3-e58cf22c022d", t._sentryDebugIdIdentifier = "sentry-dbid-44b3f484-6c9a-408c-bfd3-e58cf22c022d")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4001], {
    77458: (t, r, e) => {
      var o = e(82892)(e(78007), "DataView");
      t.exports = o
    },
    71079: (t, r, e) => {
      var o = e(42542),
        n = e(27560),
        a = e(2571),
        c = e(18279),
        s = e(15279);

      function u(t) {
        var r = -1,
          e = null == t ? 0 : t.length;
        for (this.clear(); ++r < e;) {
          var o = t[r];
          this.set(o[0], o[1])
        }
      }
      u.prototype.clear = o, u.prototype.delete = n, u.prototype.get = a, u.prototype.has = c, u.prototype.set = s, t.exports = u
    },
    76557: (t, r, e) => {
      var o = e(79280),
        n = e(13110),
        a = e(1505),
        c = e(98861),
        s = e(70533);

      function u(t) {
        var r = -1,
          e = null == t ? 0 : t.length;
        for (this.clear(); ++r < e;) {
          var o = t[r];
          this.set(o[0], o[1])
        }
      }
      u.prototype.clear = o, u.prototype.delete = n, u.prototype.get = a, u.prototype.has = c, u.prototype.set = s, t.exports = u
    },
    78249: (t, r, e) => {
      var o = e(82892)(e(78007), "Map");
      t.exports = o
    },
    31827: (t, r, e) => {
      var o = e(60850),
        n = e(5796),
        a = e(53047),
        c = e(28107),
        s = e(6803);

      function u(t) {
        var r = -1,
          e = null == t ? 0 : t.length;
        for (this.clear(); ++r < e;) {
          var o = t[r];
          this.set(o[0], o[1])
        }
      }
      u.prototype.clear = o, u.prototype.delete = n, u.prototype.get = a, u.prototype.has = c, u.prototype.set = s, t.exports = u
    },
    10954: (t, r, e) => {
      var o = e(82892)(e(78007), "Promise");
      t.exports = o
    },
    55343: (t, r, e) => {
      var o = e(82892)(e(78007), "Set");
      t.exports = o
    },
    25487: (t, r, e) => {
      var o = e(76557),
        n = e(57174),
        a = e(68480),
        c = e(97283),
        s = e(63823),
        u = e(69543);

      function i(t) {
        var r = this.__data__ = new o(t);
        this.size = r.size
      }
      i.prototype.clear = n, i.prototype.delete = a, i.prototype.get = c, i.prototype.has = s, i.prototype.set = u, t.exports = i
    },
    38726: (t, r, e) => {
      var o = e(78007).Uint8Array;
      t.exports = o
    },
    88737: (t, r, e) => {
      var o = e(82892)(e(78007), "WeakMap");
      t.exports = o
    },
    65139: t => {
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
    42567: t => {
      t.exports = function(t, r) {
        for (var e = -1, o = null == t ? 0 : t.length; ++e < o && !1 !== r(t[e], e, t););
        return t
      }
    },
    49308: t => {
      t.exports = function(t, r) {
        for (var e = -1, o = null == t ? 0 : t.length, n = 0, a = []; ++e < o;) {
          var c = t[e];
          r(c, e, t) && (a[n++] = c)
        }
        return a
      }
    },
    87245: (t, r, e) => {
      var o = e(15254),
        n = e(25138),
        a = e(49927),
        c = e(21210),
        s = e(13971),
        u = e(96265),
        i = Object.prototype.hasOwnProperty;
      t.exports = function(t, r) {
        var e = a(t),
          f = !e && n(t),
          p = !e && !f && c(t),
          l = !e && !f && !p && u(t),
          v = e || f || p || l,
          d = v ? o(t.length, String) : [],
          h = d.length;
        for (var b in t) !r && !i.call(t, b) || v && ("length" == b || p && ("offset" == b || "parent" == b) || l && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || s(b, h)) || d.push(b);
        return d
      }
    },
    77714: t => {
      t.exports = function(t, r) {
        for (var e = -1, o = null == t ? 0 : t.length, n = Array(o); ++e < o;) n[e] = r(t[e], e, t);
        return n
      }
    },
    36814: t => {
      t.exports = function(t, r) {
        for (var e = -1, o = r.length, n = t.length; ++e < o;) t[n + e] = r[e];
        return t
      }
    },
    11807: (t, r, e) => {
      var o = e(63726),
        n = e(48414);
      t.exports = function(t, r, e) {
        (void 0 !== e && !n(t[r], e) || void 0 === e && !(r in t)) && o(t, r, e)
      }
    },
    61129: (t, r, e) => {
      var o = e(63726),
        n = e(48414),
        a = Object.prototype.hasOwnProperty;
      t.exports = function(t, r, e) {
        var c = t[r];
        a.call(t, r) && n(c, e) && (void 0 !== e || r in t) || o(t, r, e)
      }
    },
    90267: (t, r, e) => {
      var o = e(48414);
      t.exports = function(t, r) {
        for (var e = t.length; e--;)
          if (o(t[e][0], r)) return e;
        return -1
      }
    },
    56211: (t, r, e) => {
      var o = e(51469),
        n = e(94060);
      t.exports = function(t, r) {
        return t && o(r, n(r), t)
      }
    },
    36192: (t, r, e) => {
      var o = e(51469),
        n = e(63219);
      t.exports = function(t, r) {
        return t && o(r, n(r), t)
      }
    },
    63726: (t, r, e) => {
      var o = e(93741);
      t.exports = function(t, r, e) {
        "__proto__" == r && o ? o(t, r, {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        }) : t[r] = e
      }
    },
    66253: (t, r, e) => {
      var o = e(25487),
        n = e(42567),
        a = e(61129),
        c = e(56211),
        s = e(36192),
        u = e(872),
        i = e(77809),
        f = e(89705),
        p = e(73362),
        l = e(38220),
        v = e(86515),
        d = e(25387),
        h = e(29027),
        b = e(36293),
        y = e(84675),
        x = e(49927),
        m = e(21210),
        _ = e(36160),
        g = e(27335),
        j = e(39226),
        w = e(94060),
        S = e(63219),
        A = "[object Arguments]",
        O = "[object Function]",
        M = "[object Object]",
        k = {};
      k[A] = k["[object Array]"] = k["[object ArrayBuffer]"] = k["[object DataView]"] = k["[object Boolean]"] = k["[object Date]"] = k["[object Float32Array]"] = k["[object Float64Array]"] = k["[object Int8Array]"] = k["[object Int16Array]"] = k["[object Int32Array]"] = k["[object Map]"] = k["[object Number]"] = k[M] = k["[object RegExp]"] = k["[object Set]"] = k["[object String]"] = k["[object Symbol]"] = k["[object Uint8Array]"] = k["[object Uint8ClampedArray]"] = k["[object Uint16Array]"] = k["[object Uint32Array]"] = !0, k["[object Error]"] = k[O] = k["[object WeakMap]"] = !1, t.exports = function t(r, e, C, P, E, L) {
        var z, I = 1 & e,
          R = 2 & e,
          B = 4 & e;
        if (C && (z = E ? C(r, P, E, L) : C(r)), void 0 !== z) return z;
        if (!g(r)) return r;
        var F = x(r);
        if (F) {
          if (z = h(r), !I) return i(r, z)
        } else {
          var D = d(r),
            U = D == O || "[object GeneratorFunction]" == D;
          if (m(r)) return u(r, I);
          if (D == M || D == A || U && !E) {
            if (z = R || U ? {} : y(r), !I) return R ? p(r, s(z, r)) : f(r, c(z, r))
          } else {
            if (!k[D]) return E ? r : {};
            z = b(r, D, I)
          }
        }
        L || (L = new o);
        var T = L.get(r);
        if (T) return T;
        L.set(r, z), j(r) ? r.forEach((function(o) {
          z.add(t(o, e, C, o, r, L))
        })) : _(r) && r.forEach((function(o, n) {
          z.set(n, t(o, e, C, n, r, L))
        }));
        var $ = F ? void 0 : (B ? R ? v : l : R ? S : w)(r);
        return n($ || r, (function(o, n) {
          $ && (o = r[n = o]), a(z, n, t(o, e, C, n, r, L))
        })), z
      }
    },
    52022: (t, r, e) => {
      var o = e(27335),
        n = Object.create,
        a = function() {
          function t() {}
          return function(r) {
            if (!o(r)) return {};
            if (n) return n(r);
            t.prototype = r;
            var e = new t;
            return t.prototype = void 0, e
          }
        }();
      t.exports = a
    },
    38314: (t, r, e) => {
      var o = e(36814),
        n = e(76373);
      t.exports = function t(r, e, a, c, s) {
        var u = -1,
          i = r.length;
        for (a || (a = n), s || (s = []); ++u < i;) {
          var f = r[u];
          e > 0 && a(f) ? e > 1 ? t(f, e - 1, a, c, s) : o(s, f) : c || (s[s.length] = f)
        }
        return s
      }
    },
    65975: (t, r, e) => {
      var o = e(12107)();
      t.exports = o
    },
    40756: (t, r, e) => {
      var o = e(31119),
        n = e(25095);
      t.exports = function(t, r) {
        for (var e = 0, a = (r = o(r, t)).length; null != t && e < a;) t = t[n(r[e++])];
        return e && e == a ? t : void 0
      }
    },
    69433: (t, r, e) => {
      var o = e(36814),
        n = e(49927);
      t.exports = function(t, r, e) {
        var a = r(t);
        return n(t) ? a : o(a, e(t))
      }
    },
    59748: (t, r, e) => {
      var o = e(7158),
        n = e(95360);
      t.exports = function(t) {
        return n(t) && "[object Arguments]" == o(t)
      }
    },
    12154: (t, r, e) => {
      var o = e(25387),
        n = e(95360);
      t.exports = function(t) {
        return n(t) && "[object Map]" == o(t)
      }
    },
    28909: (t, r, e) => {
      var o = e(94048),
        n = e(79946),
        a = e(27335),
        c = e(36635),
        s = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        i = Object.prototype,
        f = u.toString,
        p = i.hasOwnProperty,
        l = RegExp("^" + f.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      t.exports = function(t) {
        return !(!a(t) || n(t)) && (o(t) ? l : s).test(c(t))
      }
    },
    56992: (t, r, e) => {
      var o = e(25387),
        n = e(95360);
      t.exports = function(t) {
        return n(t) && "[object Set]" == o(t)
      }
    },
    25175: (t, r, e) => {
      var o = e(7158),
        n = e(23008),
        a = e(95360),
        c = {};
      c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1, t.exports = function(t) {
        return a(t) && n(t.length) && !!c[o(t)]
      }
    },
    87078: (t, r, e) => {
      var o = e(10785),
        n = e(53960),
        a = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!o(t)) return n(t);
        var r = [];
        for (var e in Object(t)) a.call(t, e) && "constructor" != e && r.push(e);
        return r
      }
    },
    40753: (t, r, e) => {
      var o = e(27335),
        n = e(10785),
        a = e(49303),
        c = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!o(t)) return a(t);
        var r = n(t),
          e = [];
        for (var s in t)("constructor" != s || !r && c.call(t, s)) && e.push(s);
        return e
      }
    },
    40572: (t, r, e) => {
      var o = e(25487),
        n = e(11807),
        a = e(65975),
        c = e(68994),
        s = e(27335),
        u = e(63219),
        i = e(73684);
      t.exports = function t(r, e, f, p, l) {
        r !== e && a(e, (function(a, u) {
          if (l || (l = new o), s(a)) c(r, e, u, f, t, p, l);
          else {
            var v = p ? p(i(r, u), a, u + "", r, e, l) : void 0;
            void 0 === v && (v = a), n(r, u, v)
          }
        }), u)
      }
    },
    68994: (t, r, e) => {
      var o = e(11807),
        n = e(872),
        a = e(89455),
        c = e(77809),
        s = e(84675),
        u = e(25138),
        i = e(49927),
        f = e(20807),
        p = e(21210),
        l = e(94048),
        v = e(27335),
        d = e(35829),
        h = e(96265),
        b = e(73684),
        y = e(71414);
      t.exports = function(t, r, e, x, m, _, g) {
        var j = b(t, e),
          w = b(r, e),
          S = g.get(w);
        if (S) o(t, e, S);
        else {
          var A = _ ? _(j, w, e + "", t, r, g) : void 0,
            O = void 0 === A;
          if (O) {
            var M = i(w),
              k = !M && p(w),
              C = !M && !k && h(w);
            A = w, M || k || C ? i(j) ? A = j : f(j) ? A = c(j) : k ? (O = !1, A = n(w, !0)) : C ? (O = !1, A = a(w, !0)) : A = [] : d(w) || u(w) ? (A = j, u(j) ? A = y(j) : v(j) && !l(j) || (A = s(w))) : O = !1
          }
          O && (g.set(w, A), m(A, w, x, _, g), g.delete(w)), o(t, e, A)
        }
      }
    },
    37253: t => {
      var r = Math.ceil,
        e = Math.max;
      t.exports = function(t, o, n, a) {
        for (var c = -1, s = e(r((o - t) / (n || 1)), 0), u = Array(s); s--;) u[a ? s : ++c] = t, t += n;
        return u
      }
    },
    51636: (t, r, e) => {
      var o = e(29498),
        n = e(2583),
        a = e(80995);
      t.exports = function(t, r) {
        return a(n(t, r, o), t + "")
      }
    },
    85840: (t, r, e) => {
      var o = e(61129),
        n = e(31119),
        a = e(13971),
        c = e(27335),
        s = e(25095);
      t.exports = function(t, r, e, u) {
        if (!c(t)) return t;
        for (var i = -1, f = (r = n(r, t)).length, p = f - 1, l = t; null != l && ++i < f;) {
          var v = s(r[i]),
            d = e;
          if ("__proto__" === v || "constructor" === v || "prototype" === v) return t;
          if (i != p) {
            var h = l[v];
            void 0 === (d = u ? u(h, v, l) : void 0) && (d = c(h) ? h : a(r[i + 1]) ? [] : {})
          }
          o(l, v, d), l = l[v]
        }
        return t
      }
    },
    14860: (t, r, e) => {
      var o = e(55792),
        n = e(93741),
        a = e(29498),
        c = n ? function(t, r) {
          return n(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: o(r),
            writable: !0
          })
        } : a;
      t.exports = c
    },
    39266: t => {
      t.exports = function(t, r, e) {
        var o = -1,
          n = t.length;
        r < 0 && (r = -r > n ? 0 : n + r), (e = e > n ? n : e) < 0 && (e += n), n = r > e ? 0 : e - r >>> 0, r >>>= 0;
        for (var a = Array(n); ++o < n;) a[o] = t[o + r];
        return a
      }
    },
    15254: t => {
      t.exports = function(t, r) {
        for (var e = -1, o = Array(t); ++e < t;) o[e] = r(e);
        return o
      }
    },
    93934: (t, r, e) => {
      var o = e(19435),
        n = e(77714),
        a = e(49927),
        c = e(87416),
        s = o ? o.prototype : void 0,
        u = s ? s.toString : void 0;
      t.exports = function t(r) {
        if ("string" == typeof r) return r;
        if (a(r)) return n(r, t) + "";
        if (c(r)) return u ? u.call(r) : "";
        var e = r + "";
        return "0" == e && 1 / r == -1 / 0 ? "-0" : e
      }
    },
    43175: t => {
      t.exports = function(t) {
        return function(r) {
          return t(r)
        }
      }
    },
    53285: (t, r, e) => {
      var o = e(31119),
        n = e(34308),
        a = e(5583),
        c = e(25095);
      t.exports = function(t, r) {
        return r = o(r, t), null == (t = a(t, r)) || delete t[c(n(r))]
      }
    },
    31119: (t, r, e) => {
      var o = e(49927),
        n = e(4972),
        a = e(13508),
        c = e(4328);
      t.exports = function(t, r) {
        return o(t) ? t : n(t, r) ? [t] : a(c(t))
      }
    },
    97967: (t, r, e) => {
      var o = e(38726);
      t.exports = function(t) {
        var r = new t.constructor(t.byteLength);
        return new o(r).set(new o(t)), r
      }
    },
    872: (t, r, e) => {
      t = e.nmd(t);
      var o = e(78007),
        n = r && !r.nodeType && r,
        a = n && t && !t.nodeType && t,
        c = a && a.exports === n ? o.Buffer : void 0,
        s = c ? c.allocUnsafe : void 0;
      t.exports = function(t, r) {
        if (r) return t.slice();
        var e = t.length,
          o = s ? s(e) : new t.constructor(e);
        return t.copy(o), o
      }
    },
    69367: (t, r, e) => {
      var o = e(97967);
      t.exports = function(t, r) {
        var e = r ? o(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.byteLength)
      }
    },
    16871: t => {
      var r = /\w*$/;
      t.exports = function(t) {
        var e = new t.constructor(t.source, r.exec(t));
        return e.lastIndex = t.lastIndex, e
      }
    },
    39114: (t, r, e) => {
      var o = e(19435),
        n = o ? o.prototype : void 0,
        a = n ? n.valueOf : void 0;
      t.exports = function(t) {
        return a ? Object(a.call(t)) : {}
      }
    },
    89455: (t, r, e) => {
      var o = e(97967);
      t.exports = function(t, r) {
        var e = r ? o(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.length)
      }
    },
    77809: t => {
      t.exports = function(t, r) {
        var e = -1,
          o = t.length;
        for (r || (r = Array(o)); ++e < o;) r[e] = t[e];
        return r
      }
    },
    51469: (t, r, e) => {
      var o = e(61129),
        n = e(63726);
      t.exports = function(t, r, e, a) {
        var c = !e;
        e || (e = {});
        for (var s = -1, u = r.length; ++s < u;) {
          var i = r[s],
            f = a ? a(e[i], t[i], i, e, t) : void 0;
          void 0 === f && (f = t[i]), c ? n(e, i, f) : o(e, i, f)
        }
        return e
      }
    },
    89705: (t, r, e) => {
      var o = e(51469),
        n = e(59394);
      t.exports = function(t, r) {
        return o(t, n(t), r)
      }
    },
    73362: (t, r, e) => {
      var o = e(51469),
        n = e(86501);
      t.exports = function(t, r) {
        return o(t, n(t), r)
      }
    },
    10123: (t, r, e) => {
      var o = e(78007)["__core-js_shared__"];
      t.exports = o
    },
    11417: (t, r, e) => {
      var o = e(51636),
        n = e(16818);
      t.exports = function(t) {
        return o((function(r, e) {
          var o = -1,
            a = e.length,
            c = a > 1 ? e[a - 1] : void 0,
            s = a > 2 ? e[2] : void 0;
          for (c = t.length > 3 && "function" == typeof c ? (a--, c) : void 0, s && n(e[0], e[1], s) && (c = a < 3 ? void 0 : c, a = 1), r = Object(r); ++o < a;) {
            var u = e[o];
            u && t(r, u, o, c)
          }
          return r
        }))
      }
    },
    12107: t => {
      t.exports = function(t) {
        return function(r, e, o) {
          for (var n = -1, a = Object(r), c = o(r), s = c.length; s--;) {
            var u = c[t ? s : ++n];
            if (!1 === e(a[u], u, a)) break
          }
          return r
        }
      }
    },
    69666: (t, r, e) => {
      var o = e(37253),
        n = e(16818),
        a = e(44362);
      t.exports = function(t) {
        return function(r, e, c) {
          return c && "number" != typeof c && n(r, e, c) && (e = c = void 0), r = a(r), void 0 === e ? (e = r, r = 0) : e = a(e), c = void 0 === c ? r < e ? 1 : -1 : a(c), o(r, e, c, t)
        }
      }
    },
    67800: (t, r, e) => {
      var o = e(35829);
      t.exports = function(t) {
        return o(t) ? void 0 : t
      }
    },
    93741: (t, r, e) => {
      var o = e(82892),
        n = function() {
          try {
            var t = o(Object, "defineProperty");
            return t({}, "", {}), t
          } catch (t) {}
        }();
      t.exports = n
    },
    17274: (t, r, e) => {
      var o = e(4212),
        n = e(2583),
        a = e(80995);
      t.exports = function(t) {
        return a(n(t, void 0, o), t + "")
      }
    },
    38220: (t, r, e) => {
      var o = e(69433),
        n = e(59394),
        a = e(94060);
      t.exports = function(t) {
        return o(t, a, n)
      }
    },
    86515: (t, r, e) => {
      var o = e(69433),
        n = e(86501),
        a = e(63219);
      t.exports = function(t) {
        return o(t, a, n)
      }
    },
    6493: (t, r, e) => {
      var o = e(98752);
      t.exports = function(t, r) {
        var e = t.__data__;
        return o(r) ? e["string" == typeof r ? "string" : "hash"] : e.map
      }
    },
    82892: (t, r, e) => {
      var o = e(28909),
        n = e(7910);
      t.exports = function(t, r) {
        var e = n(t, r);
        return o(e) ? e : void 0
      }
    },
    66365: (t, r, e) => {
      var o = e(79501)(Object.getPrototypeOf, Object);
      t.exports = o
    },
    59394: (t, r, e) => {
      var o = e(49308),
        n = e(99627),
        a = Object.prototype.propertyIsEnumerable,
        c = Object.getOwnPropertySymbols,
        s = c ? function(t) {
          return null == t ? [] : (t = Object(t), o(c(t), (function(r) {
            return a.call(t, r)
          })))
        } : n;
      t.exports = s
    },
    86501: (t, r, e) => {
      var o = e(36814),
        n = e(66365),
        a = e(59394),
        c = e(99627),
        s = Object.getOwnPropertySymbols ? function(t) {
          for (var r = []; t;) o(r, a(t)), t = n(t);
          return r
        } : c;
      t.exports = s
    },
    25387: (t, r, e) => {
      var o = e(77458),
        n = e(78249),
        a = e(10954),
        c = e(55343),
        s = e(88737),
        u = e(7158),
        i = e(36635),
        f = "[object Map]",
        p = "[object Promise]",
        l = "[object Set]",
        v = "[object WeakMap]",
        d = "[object DataView]",
        h = i(o),
        b = i(n),
        y = i(a),
        x = i(c),
        m = i(s),
        _ = u;
      (o && _(new o(new ArrayBuffer(1))) != d || n && _(new n) != f || a && _(a.resolve()) != p || c && _(new c) != l || s && _(new s) != v) && (_ = function(t) {
        var r = u(t),
          e = "[object Object]" == r ? t.constructor : void 0,
          o = e ? i(e) : "";
        if (o) switch (o) {
          case h:
            return d;
          case b:
            return f;
          case y:
            return p;
          case x:
            return l;
          case m:
            return v
        }
        return r
      }), t.exports = _
    },
    7910: t => {
      t.exports = function(t, r) {
        return null == t ? void 0 : t[r]
      }
    },
    42542: (t, r, e) => {
      var o = e(98112);
      t.exports = function() {
        this.__data__ = o ? o(null) : {}, this.size = 0
      }
    },
    27560: t => {
      t.exports = function(t) {
        var r = this.has(t) && delete this.__data__[t];
        return this.size -= r ? 1 : 0, r
      }
    },
    2571: (t, r, e) => {
      var o = e(98112),
        n = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var r = this.__data__;
        if (o) {
          var e = r[t];
          return "__lodash_hash_undefined__" === e ? void 0 : e
        }
        return n.call(r, t) ? r[t] : void 0
      }
    },
    18279: (t, r, e) => {
      var o = e(98112),
        n = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var r = this.__data__;
        return o ? void 0 !== r[t] : n.call(r, t)
      }
    },
    15279: (t, r, e) => {
      var o = e(98112);
      t.exports = function(t, r) {
        var e = this.__data__;
        return this.size += this.has(t) ? 0 : 1, e[t] = o && void 0 === r ? "__lodash_hash_undefined__" : r, this
      }
    },
    29027: t => {
      var r = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = t.length,
          o = new t.constructor(e);
        return e && "string" == typeof t[0] && r.call(t, "index") && (o.index = t.index, o.input = t.input), o
      }
    },
    36293: (t, r, e) => {
      var o = e(97967),
        n = e(69367),
        a = e(16871),
        c = e(39114),
        s = e(89455);
      t.exports = function(t, r, e) {
        var u = t.constructor;
        switch (r) {
          case "[object ArrayBuffer]":
            return o(t);
          case "[object Boolean]":
          case "[object Date]":
            return new u(+t);
          case "[object DataView]":
            return n(t, e);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return s(t, e);
          case "[object Map]":
          case "[object Set]":
            return new u;
          case "[object Number]":
          case "[object String]":
            return new u(t);
          case "[object RegExp]":
            return a(t);
          case "[object Symbol]":
            return c(t)
        }
      }
    },
    84675: (t, r, e) => {
      var o = e(52022),
        n = e(66365),
        a = e(10785);
      t.exports = function(t) {
        return "function" != typeof t.constructor || a(t) ? {} : o(n(t))
      }
    },
    76373: (t, r, e) => {
      var o = e(19435),
        n = e(25138),
        a = e(49927),
        c = o ? o.isConcatSpreadable : void 0;
      t.exports = function(t) {
        return a(t) || n(t) || !!(c && t && t[c])
      }
    },
    13971: t => {
      var r = /^(?:0|[1-9]\d*)$/;
      t.exports = function(t, e) {
        var o = typeof t;
        return !!(e = null == e ? 9007199254740991 : e) && ("number" == o || "symbol" != o && r.test(t)) && t > -1 && t % 1 == 0 && t < e
      }
    },
    16818: (t, r, e) => {
      var o = e(48414),
        n = e(66240),
        a = e(13971),
        c = e(27335);
      t.exports = function(t, r, e) {
        if (!c(e)) return !1;
        var s = typeof r;
        return !!("number" == s ? n(e) && a(r, e.length) : "string" == s && r in e) && o(e[r], t)
      }
    },
    4972: (t, r, e) => {
      var o = e(49927),
        n = e(87416),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        c = /^\w*$/;
      t.exports = function(t, r) {
        if (o(t)) return !1;
        var e = typeof t;
        return !("number" != e && "symbol" != e && "boolean" != e && null != t && !n(t)) || c.test(t) || !a.test(t) || null != r && t in Object(r)
      }
    },
    98752: t => {
      t.exports = function(t) {
        var r = typeof t;
        return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t
      }
    },
    79946: (t, r, e) => {
      var o, n = e(10123),
        a = (o = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "";
      t.exports = function(t) {
        return !!a && a in t
      }
    },
    10785: t => {
      var r = Object.prototype;
      t.exports = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || r)
      }
    },
    79280: t => {
      t.exports = function() {
        this.__data__ = [], this.size = 0
      }
    },
    13110: (t, r, e) => {
      var o = e(90267),
        n = Array.prototype.splice;
      t.exports = function(t) {
        var r = this.__data__,
          e = o(r, t);
        return !(e < 0 || (e == r.length - 1 ? r.pop() : n.call(r, e, 1), --this.size, 0))
      }
    },
    1505: (t, r, e) => {
      var o = e(90267);
      t.exports = function(t) {
        var r = this.__data__,
          e = o(r, t);
        return e < 0 ? void 0 : r[e][1]
      }
    },
    98861: (t, r, e) => {
      var o = e(90267);
      t.exports = function(t) {
        return o(this.__data__, t) > -1
      }
    },
    70533: (t, r, e) => {
      var o = e(90267);
      t.exports = function(t, r) {
        var e = this.__data__,
          n = o(e, t);
        return n < 0 ? (++this.size, e.push([t, r])) : e[n][1] = r, this
      }
    },
    60850: (t, r, e) => {
      var o = e(71079),
        n = e(76557),
        a = e(78249);
      t.exports = function() {
        this.size = 0, this.__data__ = {
          hash: new o,
          map: new(a || n),
          string: new o
        }
      }
    },
    5796: (t, r, e) => {
      var o = e(6493);
      t.exports = function(t) {
        var r = o(this, t).delete(t);
        return this.size -= r ? 1 : 0, r
      }
    },
    53047: (t, r, e) => {
      var o = e(6493);
      t.exports = function(t) {
        return o(this, t).get(t)
      }
    },
    28107: (t, r, e) => {
      var o = e(6493);
      t.exports = function(t) {
        return o(this, t).has(t)
      }
    },
    6803: (t, r, e) => {
      var o = e(6493);
      t.exports = function(t, r) {
        var e = o(this, t),
          n = e.size;
        return e.set(t, r), this.size += e.size == n ? 0 : 1, this
      }
    },
    40358: (t, r, e) => {
      var o = e(3826);
      t.exports = function(t) {
        var r = o(t, (function(t) {
            return 500 === e.size && e.clear(), t
          })),
          e = r.cache;
        return r
      }
    },
    98112: (t, r, e) => {
      var o = e(82892)(Object, "create");
      t.exports = o
    },
    53960: (t, r, e) => {
      var o = e(79501)(Object.keys, Object);
      t.exports = o
    },
    49303: t => {
      t.exports = function(t) {
        var r = [];
        if (null != t)
          for (var e in Object(t)) r.push(e);
        return r
      }
    },
    94079: (t, r, e) => {
      t = e.nmd(t);
      var o = e(94626),
        n = r && !r.nodeType && r,
        a = n && t && !t.nodeType && t,
        c = a && a.exports === n && o.process,
        s = function() {
          try {
            return a && a.require && a.require("util").types || c && c.binding && c.binding("util")
          } catch (t) {}
        }();
      t.exports = s
    },
    79501: t => {
      t.exports = function(t, r) {
        return function(e) {
          return t(r(e))
        }
      }
    },
    2583: (t, r, e) => {
      var o = e(65139),
        n = Math.max;
      t.exports = function(t, r, e) {
        return r = n(void 0 === r ? t.length - 1 : r, 0),
          function() {
            for (var a = arguments, c = -1, s = n(a.length - r, 0), u = Array(s); ++c < s;) u[c] = a[r + c];
            c = -1;
            for (var i = Array(r + 1); ++c < r;) i[c] = a[c];
            return i[r] = e(u), o(t, this, i)
          }
      }
    },
    5583: (t, r, e) => {
      var o = e(40756),
        n = e(39266);
      t.exports = function(t, r) {
        return r.length < 2 ? t : o(t, n(r, 0, -1))
      }
    },
    73684: t => {
      t.exports = function(t, r) {
        if (("constructor" !== r || "function" != typeof t[r]) && "__proto__" != r) return t[r]
      }
    },
    80995: (t, r, e) => {
      var o = e(14860),
        n = e(39873)(o);
      t.exports = n
    },
    39873: t => {
      var r = Date.now;
      t.exports = function(t) {
        var e = 0,
          o = 0;
        return function() {
          var n = r(),
            a = 16 - (n - o);
          if (o = n, a > 0) {
            if (++e >= 800) return arguments[0]
          } else e = 0;
          return t.apply(void 0, arguments)
        }
      }
    },
    57174: (t, r, e) => {
      var o = e(76557);
      t.exports = function() {
        this.__data__ = new o, this.size = 0
      }
    },
    68480: t => {
      t.exports = function(t) {
        var r = this.__data__,
          e = r.delete(t);
        return this.size = r.size, e
      }
    },
    97283: t => {
      t.exports = function(t) {
        return this.__data__.get(t)
      }
    },
    63823: t => {
      t.exports = function(t) {
        return this.__data__.has(t)
      }
    },
    69543: (t, r, e) => {
      var o = e(76557),
        n = e(78249),
        a = e(31827);
      t.exports = function(t, r) {
        var e = this.__data__;
        if (e instanceof o) {
          var c = e.__data__;
          if (!n || c.length < 199) return c.push([t, r]), this.size = ++e.size, this;
          e = this.__data__ = new a(c)
        }
        return e.set(t, r), this.size = e.size, this
      }
    },
    13508: (t, r, e) => {
      var o = e(40358),
        n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        c = o((function(t) {
          var r = [];
          return 46 === t.charCodeAt(0) && r.push(""), t.replace(n, (function(t, e, o, n) {
            r.push(o ? n.replace(a, "$1") : e || t)
          })), r
        }));
      t.exports = c
    },
    25095: (t, r, e) => {
      var o = e(87416);
      t.exports = function(t) {
        if ("string" == typeof t || o(t)) return t;
        var r = t + "";
        return "0" == r && 1 / t == -1 / 0 ? "-0" : r
      }
    },
    36635: t => {
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
    14653: (t, r, e) => {
      var o = e(66253);
      t.exports = function(t) {
        return o(t, 5)
      }
    },
    55792: t => {
      t.exports = function(t) {
        return function() {
          return t
        }
      }
    },
    48414: t => {
      t.exports = function(t, r) {
        return t === r || t != t && r != r
      }
    },
    4212: (t, r, e) => {
      var o = e(38314);
      t.exports = function(t) {
        return null != t && t.length ? o(t, 1) : []
      }
    },
    29498: t => {
      t.exports = function(t) {
        return t
      }
    },
    25138: (t, r, e) => {
      var o = e(59748),
        n = e(95360),
        a = Object.prototype,
        c = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        u = o(function() {
          return arguments
        }()) ? o : function(t) {
          return n(t) && c.call(t, "callee") && !s.call(t, "callee")
        };
      t.exports = u
    },
    49927: t => {
      var r = Array.isArray;
      t.exports = r
    },
    66240: (t, r, e) => {
      var o = e(94048),
        n = e(23008);
      t.exports = function(t) {
        return null != t && n(t.length) && !o(t)
      }
    },
    20807: (t, r, e) => {
      var o = e(66240),
        n = e(95360);
      t.exports = function(t) {
        return n(t) && o(t)
      }
    },
    21210: (t, r, e) => {
      t = e.nmd(t);
      var o = e(78007),
        n = e(9017),
        a = r && !r.nodeType && r,
        c = a && t && !t.nodeType && t,
        s = c && c.exports === a ? o.Buffer : void 0,
        u = (s ? s.isBuffer : void 0) || n;
      t.exports = u
    },
    94048: (t, r, e) => {
      var o = e(7158),
        n = e(27335);
      t.exports = function(t) {
        if (!n(t)) return !1;
        var r = o(t);
        return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r
      }
    },
    23008: t => {
      t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
      }
    },
    36160: (t, r, e) => {
      var o = e(12154),
        n = e(43175),
        a = e(94079),
        c = a && a.isMap,
        s = c ? n(c) : o;
      t.exports = s
    },
    35829: (t, r, e) => {
      var o = e(7158),
        n = e(66365),
        a = e(95360),
        c = Function.prototype,
        s = Object.prototype,
        u = c.toString,
        i = s.hasOwnProperty,
        f = u.call(Object);
      t.exports = function(t) {
        if (!a(t) || "[object Object]" != o(t)) return !1;
        var r = n(t);
        if (null === r) return !0;
        var e = i.call(r, "constructor") && r.constructor;
        return "function" == typeof e && e instanceof e && u.call(e) == f
      }
    },
    39226: (t, r, e) => {
      var o = e(56992),
        n = e(43175),
        a = e(94079),
        c = a && a.isSet,
        s = c ? n(c) : o;
      t.exports = s
    },
    11377: (t, r, e) => {
      var o = e(7158),
        n = e(49927),
        a = e(95360);
      t.exports = function(t) {
        return "string" == typeof t || !n(t) && a(t) && "[object String]" == o(t)
      }
    },
    96265: (t, r, e) => {
      var o = e(25175),
        n = e(43175),
        a = e(94079),
        c = a && a.isTypedArray,
        s = c ? n(c) : o;
      t.exports = s
    },
    94060: (t, r, e) => {
      var o = e(87245),
        n = e(87078),
        a = e(66240);
      t.exports = function(t) {
        return a(t) ? o(t) : n(t)
      }
    },
    63219: (t, r, e) => {
      var o = e(87245),
        n = e(40753),
        a = e(66240);
      t.exports = function(t) {
        return a(t) ? o(t, !0) : n(t)
      }
    },
    34308: t => {
      t.exports = function(t) {
        var r = null == t ? 0 : t.length;
        return r ? t[r - 1] : void 0
      }
    },
    3826: (t, r, e) => {
      var o = e(31827);

      function n(t, r) {
        if ("function" != typeof t || null != r && "function" != typeof r) throw new TypeError("Expected a function");
        var e = function() {
          var o = arguments,
            n = r ? r.apply(this, o) : o[0],
            a = e.cache;
          if (a.has(n)) return a.get(n);
          var c = t.apply(this, o);
          return e.cache = a.set(n, c) || a, c
        };
        return e.cache = new(n.Cache || o), e
      }
      n.Cache = o, t.exports = n
    },
    31062: (t, r, e) => {
      var o = e(40572),
        n = e(11417)((function(t, r, e) {
          o(t, r, e)
        }));
      t.exports = n
    },
    94066: (t, r, e) => {
      var o = e(40572),
        n = e(11417)((function(t, r, e, n) {
          o(t, r, e, n)
        }));
      t.exports = n
    },
    31949: (t, r, e) => {
      var o = e(77714),
        n = e(66253),
        a = e(53285),
        c = e(31119),
        s = e(51469),
        u = e(67800),
        i = e(17274),
        f = e(86515),
        p = i((function(t, r) {
          var e = {};
          if (null == t) return e;
          var i = !1;
          r = o(r, (function(r) {
            return r = c(r, t), i || (i = r.length > 1), r
          })), s(t, f(t), e), i && (e = n(e, 7, u));
          for (var p = r.length; p--;) a(e, r[p]);
          return e
        }));
      t.exports = p
    },
    51315: (t, r, e) => {
      var o = e(69666)();
      t.exports = o
    },
    4642: (t, r, e) => {
      var o = e(85840);
      t.exports = function(t, r, e, n) {
        return n = "function" == typeof n ? n : void 0, null == t ? t : o(t, r, e, n)
      }
    },
    99627: t => {
      t.exports = function() {
        return []
      }
    },
    9017: t => {
      t.exports = function() {
        return !1
      }
    },
    44362: (t, r, e) => {
      var o = e(58972);
      t.exports = function(t) {
        return t ? Infinity === (t = o(t)) || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
      }
    },
    71414: (t, r, e) => {
      var o = e(51469),
        n = e(63219);
      t.exports = function(t) {
        return o(t, n(t))
      }
    },
    4328: (t, r, e) => {
      var o = e(93934);
      t.exports = function(t) {
        return null == t ? "" : o(t)
      }
    },
    24001: (t, r, e) => {
      "use strict";
      e.r(r), e.d(r, {
        ThemeProvider: () => M,
        useColorScheme: () => b,
        useContrastMode: () => y,
        usePlatformScale: () => x,
        usePlatformScaleRatio: () => m,
        useTheme: () => h
      });
      var o = e(46632),
        n = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        a = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        c = "foundry_nu8bkpah",
        s = "foundry_nu8bkpai",
        u = "foundry_nu8bkpaf",
        i = "foundry_nu8bkpag",
        f = "--foundry_nu8bkp0",
        p = "foundry_nu8bkp1",
        l = e(71403);
      const v = (0, l.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatio: a.mobile,
          platformScaleBreakpoints: n
        }),
        d = () => (0, l.useContext)(v),
        h = () => {
          const {
            colorScheme: t,
            defaultColorScheme: r,
            contrastMode: e,
            defaultContrastMode: o,
            platformScale: n,
            defaultPlatformScale: a,
            platformScaleRatio: c,
            platformScaleBreakpoints: s
          } = d();
          return {
            colorScheme: t,
            defaultColorScheme: r,
            contrastMode: e,
            defaultContrastMode: o,
            platformScale: n,
            defaultPlatformScale: a,
            platformScaleRatio: c,
            platformScaleBreakpoints: s
          }
        },
        b = () => {
          const {
            colorScheme: t
          } = d();
          return t
        },
        y = () => {
          const {
            contrastMode: t
          } = d();
          return t
        },
        x = () => {
          const {
            platformScale: t
          } = d();
          return t
        },
        m = () => {
          const {
            platformScaleRatio: t
          } = d();
          return t
        },
        _ = "undefined" == typeof window;

      function g(t, {
        defaultValue: r = !1,
        initializeWithValue: e = !0
      } = {}) {
        const o = t => _ || !window.matchMedia ? r : window.matchMedia(t).matches,
          [n, a] = (0, l.useState)((() => e ? o(t) : r));

        function c() {
          a(o(t))
        }
        return (0, l.useEffect)((() => {
          const r = window.matchMedia?.(t);
          return c(), r?.addListener ? r?.addListener(c) : r?.addEventListener("change", c), () => {
            r?.removeListener ? r?.removeListener(c) : r?.removeEventListener("change", c)
          }
        }), [t]), n
      }

      function j(t) {
        const r = (0, l.useRef)({
            value: t,
            prev: void 0
          }),
          e = r.current.value;
        return t !== e && (r.current = {
          value: t,
          prev: e
        }), r.current.prev
      }
      const w = (t, r, e, o, n) => {
          const a = j(n),
            c = j(t.current);
          (0, l.useEffect)((() => {
            t.current?.classList.contains(p) || t.current?.classList.add(p), t.current?.classList.add(e), t.current?.classList.remove(...o), a && n && t.current?.classList.contains(a) ? t.current?.classList.replace(a, n) : a && !n && t.current?.classList.contains(a) ? t.current?.classList.remove(a) : n && t.current?.classList.add(n)
          }), [e, n]), (0, l.useEffect)((() => {
            t.current?.style.setProperty(f, r.toString())
          }), [r]), (0, l.useEffect)((() => {
            c?.classList.remove(p), c?.classList.remove(e), c?.style.removeProperty(f), n && c?.classList.remove(n)
          }), [c])
        },
        S = (t, r) => "dark" === t ? "more" === r ? s : c : "more" === r ? i : u,
        A = (t, r) => {
          const e = S(t, r);
          return [u, c, i, s].filter((t => t !== e))
        };
      e(72862), e(94066), e(94048), e(27335), e(11377), e(51315), e(31949), e(31062), e(14653), e(4642), e(14963);
      const O = () => _ ? null : document.body;

      function M({
        children: t,
        className: r,
        container: e = O(),
        wrapDiv: c,
        colorScheme: s,
        defaultColorScheme: u,
        contrastMode: i,
        defaultContrastMode: f,
        platformScaleBreakpoints: p,
        platformScaleRatios: d,
        defaultPlatformScale: h,
        platformScale: b
      }) {
        const y = (0, l.useRef)(c ? null : e),
          {
            ratio: x,
            scale: m
          } = function(t) {
            const r = (0, l.useMemo)((() => ({
                ...a,
                ...t.platformScaleRatios
              })), [t.platformScaleRatios]),
              e = (0, l.useMemo)((() => ({
                ...n,
                ...t.platformScaleBreakpoints
              })), [t.platformScaleBreakpoints]),
              [o, c] = (0, l.useState)(t.platformScale || t.defaultPlatformScale),
              s = (0, l.useRef)([]),
              u = () => {
                if (!_) {
                  for (const {
                      handler: t,
                      matchMedia: r
                    }
                    of s.current) r.removeEventListener("change", t);
                  s.current = []
                }
              };
            return (0, l.useEffect)((() => (t.platformScale || (() => {
              if (!_) {
                u();
                for (const t in e) {
                  const r = window.matchMedia(e[t]),
                    o = r => {
                      r.matches && c(t)
                    };
                  r.addEventListener("change", o), r.matches && c(t), s.current.push({
                    handler: o,
                    matchMedia: r
                  })
                }
              }
            })(), u)), [e, t.platformScale]), {
              scale: o,
              ratio: r[o]
            }
          }({
            platformScaleBreakpoints: p,
            platformScaleRatios: d,
            defaultPlatformScale: h,
            platformScale: b
          }),
          {
            appearanceClass: j,
            otherAppearanceClasses: M,
            providerColor: k,
            providerContrast: C
          } = function({
            colorScheme: t,
            defaultColorScheme: r = "dark",
            contrastMode: e,
            defaultContrastMode: o = "normal"
          }) {
            const n = g("(prefers-color-scheme: light)"),
              a = g("(prefers-color-scheme: dark)"),
              c = g("(prefers-contrast: more)"),
              s = "system" !== t && t || n && "light" || a && "dark" || r,
              u = e || c && "more" || o;
            return {
              appearanceClass: (0, l.useMemo)((() => S(s, u)), [s, u]),
              otherAppearanceClasses: (0, l.useMemo)((() => A(s, u)), [s, u]),
              providerColor: s,
              providerContrast: u
            }
          }({
            colorScheme: s,
            defaultColorScheme: u,
            contrastMode: i,
            defaultContrastMode: f
          });
        return w(y, x, j, M, r), (0, o.jsx)(v.Provider, {
          value: {
            colorScheme: k,
            contrastMode: C,
            platformScale: m,
            platformScaleRatio: x,
            defaultColorScheme: u,
            defaultContrastMode: f,
            defaultPlatformScale: h,
            platformScaleBreakpoints: p
          },
          children: c ? (0, o.jsx)("div", {
            ref: y,
            children: t
          }) : t
        })
      }
    }
  }
]);