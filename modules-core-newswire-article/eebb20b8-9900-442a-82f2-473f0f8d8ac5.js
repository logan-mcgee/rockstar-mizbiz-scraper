! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eebb20b8-9900-442a-82f2-473f0f8d8ac5", e._sentryDebugIdIdentifier = "sentry-dbid-eebb20b8-9900-442a-82f2-473f0f8d8ac5")
  } catch (e) {}
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
  [7319], {
    77458: (e, t, r) => {
      var n = r(82892)(r(78007), "DataView");
      e.exports = n
    },
    71079: (e, t, r) => {
      var n = r(42542),
        o = r(27560),
        a = r(2571),
        c = r(18279),
        s = r(15279);

      function u(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
          var n = e[t];
          this.set(n[0], n[1])
        }
      }
      u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = c, u.prototype.set = s, e.exports = u
    },
    76557: (e, t, r) => {
      var n = r(79280),
        o = r(13110),
        a = r(1505),
        c = r(98861),
        s = r(70533);

      function u(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
          var n = e[t];
          this.set(n[0], n[1])
        }
      }
      u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = c, u.prototype.set = s, e.exports = u
    },
    78249: (e, t, r) => {
      var n = r(82892)(r(78007), "Map");
      e.exports = n
    },
    31827: (e, t, r) => {
      var n = r(60850),
        o = r(5796),
        a = r(53047),
        c = r(28107),
        s = r(6803);

      function u(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
          var n = e[t];
          this.set(n[0], n[1])
        }
      }
      u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = c, u.prototype.set = s, e.exports = u
    },
    10954: (e, t, r) => {
      var n = r(82892)(r(78007), "Promise");
      e.exports = n
    },
    55343: (e, t, r) => {
      var n = r(82892)(r(78007), "Set");
      e.exports = n
    },
    25487: (e, t, r) => {
      var n = r(76557),
        o = r(57174),
        a = r(68480),
        c = r(97283),
        s = r(63823),
        u = r(69543);

      function i(e) {
        var t = this.__data__ = new n(e);
        this.size = t.size
      }
      i.prototype.clear = o, i.prototype.delete = a, i.prototype.get = c, i.prototype.has = s, i.prototype.set = u, e.exports = i
    },
    38726: (e, t, r) => {
      var n = r(78007).Uint8Array;
      e.exports = n
    },
    88737: (e, t, r) => {
      var n = r(82892)(r(78007), "WeakMap");
      e.exports = n
    },
    65139: e => {
      e.exports = function(e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, r[0]);
          case 2:
            return e.call(t, r[0], r[1]);
          case 3:
            return e.call(t, r[0], r[1], r[2])
        }
        return e.apply(t, r)
      }
    },
    42567: e => {
      e.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
        return e
      }
    },
    49308: e => {
      e.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = 0, a = []; ++r < n;) {
          var c = e[r];
          t(c, r, e) && (a[o++] = c)
        }
        return a
      }
    },
    87245: (e, t, r) => {
      var n = r(15254),
        o = r(25138),
        a = r(49927),
        c = r(21210),
        s = r(13971),
        u = r(96265),
        i = Object.prototype.hasOwnProperty;
      e.exports = function(e, t) {
        var r = a(e),
          l = !r && o(e),
          f = !r && !l && c(e),
          p = !r && !l && !f && u(e),
          d = r || l || f || p,
          v = d ? n(e.length, String) : [],
          h = v.length;
        for (var b in e) !t && !i.call(e, b) || d && ("length" == b || f && ("offset" == b || "parent" == b) || p && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || s(b, h)) || v.push(b);
        return v
      }
    },
    77714: e => {
      e.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
        return o
      }
    },
    36814: e => {
      e.exports = function(e, t) {
        for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
        return e
      }
    },
    11807: (e, t, r) => {
      var n = r(63726),
        o = r(48414);
      e.exports = function(e, t, r) {
        (void 0 !== r && !o(e[t], r) || void 0 === r && !(t in e)) && n(e, t, r)
      }
    },
    61129: (e, t, r) => {
      var n = r(63726),
        o = r(48414),
        a = Object.prototype.hasOwnProperty;
      e.exports = function(e, t, r) {
        var c = e[t];
        a.call(e, t) && o(c, r) && (void 0 !== r || t in e) || n(e, t, r)
      }
    },
    90267: (e, t, r) => {
      var n = r(48414);
      e.exports = function(e, t) {
        for (var r = e.length; r--;)
          if (n(e[r][0], t)) return r;
        return -1
      }
    },
    56211: (e, t, r) => {
      var n = r(51469),
        o = r(94060);
      e.exports = function(e, t) {
        return e && n(t, o(t), e)
      }
    },
    36192: (e, t, r) => {
      var n = r(51469),
        o = r(63219);
      e.exports = function(e, t) {
        return e && n(t, o(t), e)
      }
    },
    63726: (e, t, r) => {
      var n = r(93741);
      e.exports = function(e, t, r) {
        "__proto__" == t && n ? n(e, t, {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        }) : e[t] = r
      }
    },
    66253: (e, t, r) => {
      var n = r(25487),
        o = r(42567),
        a = r(61129),
        c = r(56211),
        s = r(36192),
        u = r(872),
        i = r(77809),
        l = r(89705),
        f = r(73362),
        p = r(38220),
        d = r(86515),
        v = r(25387),
        h = r(29027),
        b = r(36293),
        y = r(84675),
        m = r(49927),
        x = r(21210),
        w = r(36160),
        _ = r(27335),
        g = r(39226),
        j = r(94060),
        S = r(63219),
        E = "[object Arguments]",
        A = "[object Function]",
        k = "[object Object]",
        C = {};
      C[E] = C["[object Array]"] = C["[object ArrayBuffer]"] = C["[object DataView]"] = C["[object Boolean]"] = C["[object Date]"] = C["[object Float32Array]"] = C["[object Float64Array]"] = C["[object Int8Array]"] = C["[object Int16Array]"] = C["[object Int32Array]"] = C["[object Map]"] = C["[object Number]"] = C[k] = C["[object RegExp]"] = C["[object Set]"] = C["[object String]"] = C["[object Symbol]"] = C["[object Uint8Array]"] = C["[object Uint8ClampedArray]"] = C["[object Uint16Array]"] = C["[object Uint32Array]"] = !0, C["[object Error]"] = C[A] = C["[object WeakMap]"] = !1, e.exports = function e(t, r, O, L, M, P) {
        var R, U = 1 & r,
          z = 2 & r,
          I = 4 & r;
        if (O && (R = M ? O(t, L, M, P) : O(t)), void 0 !== R) return R;
        if (!_(t)) return t;
        var B = m(t);
        if (B) {
          if (R = h(t), !U) return i(t, R)
        } else {
          var D = v(t),
            F = D == A || "[object GeneratorFunction]" == D;
          if (x(t)) return u(t, U);
          if (D == k || D == E || F && !M) {
            if (R = z || F ? {} : y(t), !U) return z ? f(t, s(R, t)) : l(t, c(R, t))
          } else {
            if (!C[D]) return M ? t : {};
            R = b(t, D, U)
          }
        }
        P || (P = new n);
        var T = P.get(t);
        if (T) return T;
        P.set(t, R), g(t) ? t.forEach((function(n) {
          R.add(e(n, r, O, n, t, P))
        })) : w(t) && t.forEach((function(n, o) {
          R.set(o, e(n, r, O, o, t, P))
        }));
        var W = B ? void 0 : (I ? z ? d : p : z ? S : j)(t);
        return o(W || t, (function(n, o) {
          W && (n = t[o = n]), a(R, o, e(n, r, O, o, t, P))
        })), R
      }
    },
    52022: (e, t, r) => {
      var n = r(27335),
        o = Object.create,
        a = function() {
          function e() {}
          return function(t) {
            if (!n(t)) return {};
            if (o) return o(t);
            e.prototype = t;
            var r = new e;
            return e.prototype = void 0, r
          }
        }();
      e.exports = a
    },
    38314: (e, t, r) => {
      var n = r(36814),
        o = r(76373);
      e.exports = function e(t, r, a, c, s) {
        var u = -1,
          i = t.length;
        for (a || (a = o), s || (s = []); ++u < i;) {
          var l = t[u];
          r > 0 && a(l) ? r > 1 ? e(l, r - 1, a, c, s) : n(s, l) : c || (s[s.length] = l)
        }
        return s
      }
    },
    65975: (e, t, r) => {
      var n = r(12107)();
      e.exports = n
    },
    40756: (e, t, r) => {
      var n = r(31119),
        o = r(25095);
      e.exports = function(e, t) {
        for (var r = 0, a = (t = n(t, e)).length; null != e && r < a;) e = e[o(t[r++])];
        return r && r == a ? e : void 0
      }
    },
    69433: (e, t, r) => {
      var n = r(36814),
        o = r(49927);
      e.exports = function(e, t, r) {
        var a = t(e);
        return o(e) ? a : n(a, r(e))
      }
    },
    59748: (e, t, r) => {
      var n = r(7158),
        o = r(95360);
      e.exports = function(e) {
        return o(e) && "[object Arguments]" == n(e)
      }
    },
    12154: (e, t, r) => {
      var n = r(25387),
        o = r(95360);
      e.exports = function(e) {
        return o(e) && "[object Map]" == n(e)
      }
    },
    28909: (e, t, r) => {
      var n = r(94048),
        o = r(79946),
        a = r(27335),
        c = r(36635),
        s = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        i = Object.prototype,
        l = u.toString,
        f = i.hasOwnProperty,
        p = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      e.exports = function(e) {
        return !(!a(e) || o(e)) && (n(e) ? p : s).test(c(e))
      }
    },
    56992: (e, t, r) => {
      var n = r(25387),
        o = r(95360);
      e.exports = function(e) {
        return o(e) && "[object Set]" == n(e)
      }
    },
    25175: (e, t, r) => {
      var n = r(7158),
        o = r(23008),
        a = r(95360),
        c = {};
      c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1, e.exports = function(e) {
        return a(e) && o(e.length) && !!c[n(e)]
      }
    },
    87078: (e, t, r) => {
      var n = r(10785),
        o = r(53960),
        a = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        if (!n(e)) return o(e);
        var t = [];
        for (var r in Object(e)) a.call(e, r) && "constructor" != r && t.push(r);
        return t
      }
    },
    40753: (e, t, r) => {
      var n = r(27335),
        o = r(10785),
        a = r(49303),
        c = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        if (!n(e)) return a(e);
        var t = o(e),
          r = [];
        for (var s in e)("constructor" != s || !t && c.call(e, s)) && r.push(s);
        return r
      }
    },
    40572: (e, t, r) => {
      var n = r(25487),
        o = r(11807),
        a = r(65975),
        c = r(68994),
        s = r(27335),
        u = r(63219),
        i = r(73684);
      e.exports = function e(t, r, l, f, p) {
        t !== r && a(r, (function(a, u) {
          if (p || (p = new n), s(a)) c(t, r, u, l, e, f, p);
          else {
            var d = f ? f(i(t, u), a, u + "", t, r, p) : void 0;
            void 0 === d && (d = a), o(t, u, d)
          }
        }), u)
      }
    },
    68994: (e, t, r) => {
      var n = r(11807),
        o = r(872),
        a = r(89455),
        c = r(77809),
        s = r(84675),
        u = r(25138),
        i = r(49927),
        l = r(20807),
        f = r(21210),
        p = r(94048),
        d = r(27335),
        v = r(35829),
        h = r(96265),
        b = r(73684),
        y = r(71414);
      e.exports = function(e, t, r, m, x, w, _) {
        var g = b(e, r),
          j = b(t, r),
          S = _.get(j);
        if (S) n(e, r, S);
        else {
          var E = w ? w(g, j, r + "", e, t, _) : void 0,
            A = void 0 === E;
          if (A) {
            var k = i(j),
              C = !k && f(j),
              O = !k && !C && h(j);
            E = j, k || C || O ? i(g) ? E = g : l(g) ? E = c(g) : C ? (A = !1, E = o(j, !0)) : O ? (A = !1, E = a(j, !0)) : E = [] : v(j) || u(j) ? (E = g, u(g) ? E = y(g) : d(g) && !p(g) || (E = s(j))) : A = !1
          }
          A && (_.set(j, E), x(E, j, m, w, _), _.delete(j)), n(e, r, E)
        }
      }
    },
    37253: e => {
      var t = Math.ceil,
        r = Math.max;
      e.exports = function(e, n, o, a) {
        for (var c = -1, s = r(t((n - e) / (o || 1)), 0), u = Array(s); s--;) u[a ? s : ++c] = e, e += o;
        return u
      }
    },
    51636: (e, t, r) => {
      var n = r(29498),
        o = r(2583),
        a = r(80995);
      e.exports = function(e, t) {
        return a(o(e, t, n), e + "")
      }
    },
    85840: (e, t, r) => {
      var n = r(61129),
        o = r(31119),
        a = r(13971),
        c = r(27335),
        s = r(25095);
      e.exports = function(e, t, r, u) {
        if (!c(e)) return e;
        for (var i = -1, l = (t = o(t, e)).length, f = l - 1, p = e; null != p && ++i < l;) {
          var d = s(t[i]),
            v = r;
          if ("__proto__" === d || "constructor" === d || "prototype" === d) return e;
          if (i != f) {
            var h = p[d];
            void 0 === (v = u ? u(h, d, p) : void 0) && (v = c(h) ? h : a(t[i + 1]) ? [] : {})
          }
          n(p, d, v), p = p[d]
        }
        return e
      }
    },
    14860: (e, t, r) => {
      var n = r(55792),
        o = r(93741),
        a = r(29498),
        c = o ? function(e, t) {
          return o(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(t),
            writable: !0
          })
        } : a;
      e.exports = c
    },
    39266: e => {
      e.exports = function(e, t, r) {
        var n = -1,
          o = e.length;
        t < 0 && (t = -t > o ? 0 : o + t), (r = r > o ? o : r) < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
        for (var a = Array(o); ++n < o;) a[n] = e[n + t];
        return a
      }
    },
    15254: e => {
      e.exports = function(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
      }
    },
    93934: (e, t, r) => {
      var n = r(19435),
        o = r(77714),
        a = r(49927),
        c = r(87416),
        s = n ? n.prototype : void 0,
        u = s ? s.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (a(t)) return o(t, e) + "";
        if (c(t)) return u ? u.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -1 / 0 ? "-0" : r
      }
    },
    43175: e => {
      e.exports = function(e) {
        return function(t) {
          return e(t)
        }
      }
    },
    53285: (e, t, r) => {
      var n = r(31119),
        o = r(34308),
        a = r(5583),
        c = r(25095);
      e.exports = function(e, t) {
        return t = n(t, e), null == (e = a(e, t)) || delete e[c(o(t))]
      }
    },
    31119: (e, t, r) => {
      var n = r(49927),
        o = r(4972),
        a = r(91127),
        c = r(4328);
      e.exports = function(e, t) {
        return n(e) ? e : o(e, t) ? [e] : a(c(e))
      }
    },
    97967: (e, t, r) => {
      var n = r(38726);
      e.exports = function(e) {
        var t = new e.constructor(e.byteLength);
        return new n(t).set(new n(e)), t
      }
    },
    872: (e, t, r) => {
      e = r.nmd(e);
      var n = r(78007),
        o = t && !t.nodeType && t,
        a = o && e && !e.nodeType && e,
        c = a && a.exports === o ? n.Buffer : void 0,
        s = c ? c.allocUnsafe : void 0;
      e.exports = function(e, t) {
        if (t) return e.slice();
        var r = e.length,
          n = s ? s(r) : new e.constructor(r);
        return e.copy(n), n
      }
    },
    69367: (e, t, r) => {
      var n = r(97967);
      e.exports = function(e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
      }
    },
    16871: e => {
      var t = /\w*$/;
      e.exports = function(e) {
        var r = new e.constructor(e.source, t.exec(e));
        return r.lastIndex = e.lastIndex, r
      }
    },
    39114: (e, t, r) => {
      var n = r(19435),
        o = n ? n.prototype : void 0,
        a = o ? o.valueOf : void 0;
      e.exports = function(e) {
        return a ? Object(a.call(e)) : {}
      }
    },
    89455: (e, t, r) => {
      var n = r(97967);
      e.exports = function(e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
      }
    },
    77809: e => {
      e.exports = function(e, t) {
        var r = -1,
          n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
      }
    },
    51469: (e, t, r) => {
      var n = r(61129),
        o = r(63726);
      e.exports = function(e, t, r, a) {
        var c = !r;
        r || (r = {});
        for (var s = -1, u = t.length; ++s < u;) {
          var i = t[s],
            l = a ? a(r[i], e[i], i, r, e) : void 0;
          void 0 === l && (l = e[i]), c ? o(r, i, l) : n(r, i, l)
        }
        return r
      }
    },
    89705: (e, t, r) => {
      var n = r(51469),
        o = r(59394);
      e.exports = function(e, t) {
        return n(e, o(e), t)
      }
    },
    73362: (e, t, r) => {
      var n = r(51469),
        o = r(86501);
      e.exports = function(e, t) {
        return n(e, o(e), t)
      }
    },
    10123: (e, t, r) => {
      var n = r(78007)["__core-js_shared__"];
      e.exports = n
    },
    11417: (e, t, r) => {
      var n = r(51636),
        o = r(16818);
      e.exports = function(e) {
        return n((function(t, r) {
          var n = -1,
            a = r.length,
            c = a > 1 ? r[a - 1] : void 0,
            s = a > 2 ? r[2] : void 0;
          for (c = e.length > 3 && "function" == typeof c ? (a--, c) : void 0, s && o(r[0], r[1], s) && (c = a < 3 ? void 0 : c, a = 1), t = Object(t); ++n < a;) {
            var u = r[n];
            u && e(t, u, n, c)
          }
          return t
        }))
      }
    },
    12107: e => {
      e.exports = function(e) {
        return function(t, r, n) {
          for (var o = -1, a = Object(t), c = n(t), s = c.length; s--;) {
            var u = c[e ? s : ++o];
            if (!1 === r(a[u], u, a)) break
          }
          return t
        }
      }
    },
    69666: (e, t, r) => {
      var n = r(37253),
        o = r(16818),
        a = r(44362);
      e.exports = function(e) {
        return function(t, r, c) {
          return c && "number" != typeof c && o(t, r, c) && (r = c = void 0), t = a(t), void 0 === r ? (r = t, t = 0) : r = a(r), c = void 0 === c ? t < r ? 1 : -1 : a(c), n(t, r, c, e)
        }
      }
    },
    67800: (e, t, r) => {
      var n = r(35829);
      e.exports = function(e) {
        return n(e) ? void 0 : e
      }
    },
    93741: (e, t, r) => {
      var n = r(82892),
        o = function() {
          try {
            var e = n(Object, "defineProperty");
            return e({}, "", {}), e
          } catch (e) {}
        }();
      e.exports = o
    },
    17274: (e, t, r) => {
      var n = r(4212),
        o = r(2583),
        a = r(80995);
      e.exports = function(e) {
        return a(o(e, void 0, n), e + "")
      }
    },
    38220: (e, t, r) => {
      var n = r(69433),
        o = r(59394),
        a = r(94060);
      e.exports = function(e) {
        return n(e, a, o)
      }
    },
    86515: (e, t, r) => {
      var n = r(69433),
        o = r(86501),
        a = r(63219);
      e.exports = function(e) {
        return n(e, a, o)
      }
    },
    6493: (e, t, r) => {
      var n = r(98752);
      e.exports = function(e, t) {
        var r = e.__data__;
        return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
      }
    },
    82892: (e, t, r) => {
      var n = r(28909),
        o = r(7910);
      e.exports = function(e, t) {
        var r = o(e, t);
        return n(r) ? r : void 0
      }
    },
    66365: (e, t, r) => {
      var n = r(79501)(Object.getPrototypeOf, Object);
      e.exports = n
    },
    59394: (e, t, r) => {
      var n = r(49308),
        o = r(99627),
        a = Object.prototype.propertyIsEnumerable,
        c = Object.getOwnPropertySymbols,
        s = c ? function(e) {
          return null == e ? [] : (e = Object(e), n(c(e), (function(t) {
            return a.call(e, t)
          })))
        } : o;
      e.exports = s
    },
    86501: (e, t, r) => {
      var n = r(36814),
        o = r(66365),
        a = r(59394),
        c = r(99627),
        s = Object.getOwnPropertySymbols ? function(e) {
          for (var t = []; e;) n(t, a(e)), e = o(e);
          return t
        } : c;
      e.exports = s
    },
    25387: (e, t, r) => {
      var n = r(77458),
        o = r(78249),
        a = r(10954),
        c = r(55343),
        s = r(88737),
        u = r(7158),
        i = r(36635),
        l = "[object Map]",
        f = "[object Promise]",
        p = "[object Set]",
        d = "[object WeakMap]",
        v = "[object DataView]",
        h = i(n),
        b = i(o),
        y = i(a),
        m = i(c),
        x = i(s),
        w = u;
      (n && w(new n(new ArrayBuffer(1))) != v || o && w(new o) != l || a && w(a.resolve()) != f || c && w(new c) != p || s && w(new s) != d) && (w = function(e) {
        var t = u(e),
          r = "[object Object]" == t ? e.constructor : void 0,
          n = r ? i(r) : "";
        if (n) switch (n) {
          case h:
            return v;
          case b:
            return l;
          case y:
            return f;
          case m:
            return p;
          case x:
            return d
        }
        return t
      }), e.exports = w
    },
    7910: e => {
      e.exports = function(e, t) {
        return null == e ? void 0 : e[t]
      }
    },
    42542: (e, t, r) => {
      var n = r(98112);
      e.exports = function() {
        this.__data__ = n ? n(null) : {}, this.size = 0
      }
    },
    27560: e => {
      e.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
      }
    },
    2571: (e, t, r) => {
      var n = r(98112),
        o = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        var t = this.__data__;
        if (n) {
          var r = t[e];
          return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return o.call(t, e) ? t[e] : void 0
      }
    },
    18279: (e, t, r) => {
      var n = r(98112),
        o = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        var t = this.__data__;
        return n ? void 0 !== t[e] : o.call(t, e)
      }
    },
    15279: (e, t, r) => {
      var n = r(98112);
      e.exports = function(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this
      }
    },
    29027: e => {
      var t = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        var r = e.length,
          n = new e.constructor(r);
        return r && "string" == typeof e[0] && t.call(e, "index") && (n.index = e.index, n.input = e.input), n
      }
    },
    36293: (e, t, r) => {
      var n = r(97967),
        o = r(69367),
        a = r(16871),
        c = r(39114),
        s = r(89455);
      e.exports = function(e, t, r) {
        var u = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return n(e);
          case "[object Boolean]":
          case "[object Date]":
            return new u(+e);
          case "[object DataView]":
            return o(e, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return s(e, r);
          case "[object Map]":
          case "[object Set]":
            return new u;
          case "[object Number]":
          case "[object String]":
            return new u(e);
          case "[object RegExp]":
            return a(e);
          case "[object Symbol]":
            return c(e)
        }
      }
    },
    84675: (e, t, r) => {
      var n = r(52022),
        o = r(66365),
        a = r(10785);
      e.exports = function(e) {
        return "function" != typeof e.constructor || a(e) ? {} : n(o(e))
      }
    },
    76373: (e, t, r) => {
      var n = r(19435),
        o = r(25138),
        a = r(49927),
        c = n ? n.isConcatSpreadable : void 0;
      e.exports = function(e) {
        return a(e) || o(e) || !!(c && e && e[c])
      }
    },
    13971: e => {
      var t = /^(?:0|[1-9]\d*)$/;
      e.exports = function(e, r) {
        var n = typeof e;
        return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && t.test(e)) && e > -1 && e % 1 == 0 && e < r
      }
    },
    16818: (e, t, r) => {
      var n = r(48414),
        o = r(66240),
        a = r(13971),
        c = r(27335);
      e.exports = function(e, t, r) {
        if (!c(r)) return !1;
        var s = typeof t;
        return !!("number" == s ? o(r) && a(t, r.length) : "string" == s && t in r) && n(r[t], e)
      }
    },
    4972: (e, t, r) => {
      var n = r(49927),
        o = r(87416),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        c = /^\w*$/;
      e.exports = function(e, t) {
        if (n(e)) return !1;
        var r = typeof e;
        return !("number" != r && "symbol" != r && "boolean" != r && null != e && !o(e)) || c.test(e) || !a.test(e) || null != t && e in Object(t)
      }
    },
    98752: e => {
      e.exports = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
      }
    },
    79946: (e, t, r) => {
      var n, o = r(10123),
        a = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
      e.exports = function(e) {
        return !!a && a in e
      }
    },
    10785: e => {
      var t = Object.prototype;
      e.exports = function(e) {
        var r = e && e.constructor;
        return e === ("function" == typeof r && r.prototype || t)
      }
    },
    79280: e => {
      e.exports = function() {
        this.__data__ = [], this.size = 0
      }
    },
    13110: (e, t, r) => {
      var n = r(90267),
        o = Array.prototype.splice;
      e.exports = function(e) {
        var t = this.__data__,
          r = n(t, e);
        return !(r < 0 || (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, 0))
      }
    },
    1505: (e, t, r) => {
      var n = r(90267);
      e.exports = function(e) {
        var t = this.__data__,
          r = n(t, e);
        return r < 0 ? void 0 : t[r][1]
      }
    },
    98861: (e, t, r) => {
      var n = r(90267);
      e.exports = function(e) {
        return n(this.__data__, e) > -1
      }
    },
    70533: (e, t, r) => {
      var n = r(90267);
      e.exports = function(e, t) {
        var r = this.__data__,
          o = n(r, e);
        return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this
      }
    },
    60850: (e, t, r) => {
      var n = r(71079),
        o = r(76557),
        a = r(78249);
      e.exports = function() {
        this.size = 0, this.__data__ = {
          hash: new n,
          map: new(a || o),
          string: new n
        }
      }
    },
    5796: (e, t, r) => {
      var n = r(6493);
      e.exports = function(e) {
        var t = n(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
      }
    },
    53047: (e, t, r) => {
      var n = r(6493);
      e.exports = function(e) {
        return n(this, e).get(e)
      }
    },
    28107: (e, t, r) => {
      var n = r(6493);
      e.exports = function(e) {
        return n(this, e).has(e)
      }
    },
    6803: (e, t, r) => {
      var n = r(6493);
      e.exports = function(e, t) {
        var r = n(this, e),
          o = r.size;
        return r.set(e, t), this.size += r.size == o ? 0 : 1, this
      }
    },
    40358: (e, t, r) => {
      var n = r(3826);
      e.exports = function(e) {
        var t = n(e, (function(e) {
            return 500 === r.size && r.clear(), e
          })),
          r = t.cache;
        return t
      }
    },
    98112: (e, t, r) => {
      var n = r(82892)(Object, "create");
      e.exports = n
    },
    53960: (e, t, r) => {
      var n = r(79501)(Object.keys, Object);
      e.exports = n
    },
    49303: e => {
      e.exports = function(e) {
        var t = [];
        if (null != e)
          for (var r in Object(e)) t.push(r);
        return t
      }
    },
    94079: (e, t, r) => {
      e = r.nmd(e);
      var n = r(94626),
        o = t && !t.nodeType && t,
        a = o && e && !e.nodeType && e,
        c = a && a.exports === o && n.process,
        s = function() {
          try {
            return a && a.require && a.require("util").types || c && c.binding && c.binding("util")
          } catch (e) {}
        }();
      e.exports = s
    },
    79501: e => {
      e.exports = function(e, t) {
        return function(r) {
          return e(t(r))
        }
      }
    },
    2583: (e, t, r) => {
      var n = r(65139),
        o = Math.max;
      e.exports = function(e, t, r) {
        return t = o(void 0 === t ? e.length - 1 : t, 0),
          function() {
            for (var a = arguments, c = -1, s = o(a.length - t, 0), u = Array(s); ++c < s;) u[c] = a[t + c];
            c = -1;
            for (var i = Array(t + 1); ++c < t;) i[c] = a[c];
            return i[t] = r(u), n(e, this, i)
          }
      }
    },
    5583: (e, t, r) => {
      var n = r(40756),
        o = r(39266);
      e.exports = function(e, t) {
        return t.length < 2 ? e : n(e, o(t, 0, -1))
      }
    },
    73684: e => {
      e.exports = function(e, t) {
        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
      }
    },
    80995: (e, t, r) => {
      var n = r(14860),
        o = r(39873)(n);
      e.exports = o
    },
    39873: e => {
      var t = Date.now;
      e.exports = function(e) {
        var r = 0,
          n = 0;
        return function() {
          var o = t(),
            a = 16 - (o - n);
          if (n = o, a > 0) {
            if (++r >= 800) return arguments[0]
          } else r = 0;
          return e.apply(void 0, arguments)
        }
      }
    },
    57174: (e, t, r) => {
      var n = r(76557);
      e.exports = function() {
        this.__data__ = new n, this.size = 0
      }
    },
    68480: e => {
      e.exports = function(e) {
        var t = this.__data__,
          r = t.delete(e);
        return this.size = t.size, r
      }
    },
    97283: e => {
      e.exports = function(e) {
        return this.__data__.get(e)
      }
    },
    63823: e => {
      e.exports = function(e) {
        return this.__data__.has(e)
      }
    },
    69543: (e, t, r) => {
      var n = r(76557),
        o = r(78249),
        a = r(31827);
      e.exports = function(e, t) {
        var r = this.__data__;
        if (r instanceof n) {
          var c = r.__data__;
          if (!o || c.length < 199) return c.push([e, t]), this.size = ++r.size, this;
          r = this.__data__ = new a(c)
        }
        return r.set(e, t), this.size = r.size, this
      }
    },
    91127: (e, t, r) => {
      var n = r(40358),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        c = n((function(e) {
          var t = [];
          return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, (function(e, r, n, o) {
            t.push(n ? o.replace(a, "$1") : r || e)
          })), t
        }));
      e.exports = c
    },
    25095: (e, t, r) => {
      var n = r(87416);
      e.exports = function(e) {
        if ("string" == typeof e || n(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
      }
    },
    36635: e => {
      var t = Function.prototype.toString;
      e.exports = function(e) {
        if (null != e) {
          try {
            return t.call(e)
          } catch (e) {}
          try {
            return e + ""
          } catch (e) {}
        }
        return ""
      }
    },
    14653: (e, t, r) => {
      var n = r(66253);
      e.exports = function(e) {
        return n(e, 5)
      }
    },
    55792: e => {
      e.exports = function(e) {
        return function() {
          return e
        }
      }
    },
    48414: e => {
      e.exports = function(e, t) {
        return e === t || e != e && t != t
      }
    },
    4212: (e, t, r) => {
      var n = r(38314);
      e.exports = function(e) {
        return null != e && e.length ? n(e, 1) : []
      }
    },
    29498: e => {
      e.exports = function(e) {
        return e
      }
    },
    25138: (e, t, r) => {
      var n = r(59748),
        o = r(95360),
        a = Object.prototype,
        c = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        u = n(function() {
          return arguments
        }()) ? n : function(e) {
          return o(e) && c.call(e, "callee") && !s.call(e, "callee")
        };
      e.exports = u
    },
    49927: e => {
      var t = Array.isArray;
      e.exports = t
    },
    66240: (e, t, r) => {
      var n = r(94048),
        o = r(23008);
      e.exports = function(e) {
        return null != e && o(e.length) && !n(e)
      }
    },
    20807: (e, t, r) => {
      var n = r(66240),
        o = r(95360);
      e.exports = function(e) {
        return o(e) && n(e)
      }
    },
    21210: (e, t, r) => {
      e = r.nmd(e);
      var n = r(78007),
        o = r(9017),
        a = t && !t.nodeType && t,
        c = a && e && !e.nodeType && e,
        s = c && c.exports === a ? n.Buffer : void 0,
        u = (s ? s.isBuffer : void 0) || o;
      e.exports = u
    },
    94048: (e, t, r) => {
      var n = r(7158),
        o = r(27335);
      e.exports = function(e) {
        if (!o(e)) return !1;
        var t = n(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
      }
    },
    23008: e => {
      e.exports = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      }
    },
    36160: (e, t, r) => {
      var n = r(12154),
        o = r(43175),
        a = r(94079),
        c = a && a.isMap,
        s = c ? o(c) : n;
      e.exports = s
    },
    35829: (e, t, r) => {
      var n = r(7158),
        o = r(66365),
        a = r(95360),
        c = Function.prototype,
        s = Object.prototype,
        u = c.toString,
        i = s.hasOwnProperty,
        l = u.call(Object);
      e.exports = function(e) {
        if (!a(e) || "[object Object]" != n(e)) return !1;
        var t = o(e);
        if (null === t) return !0;
        var r = i.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && u.call(r) == l
      }
    },
    39226: (e, t, r) => {
      var n = r(56992),
        o = r(43175),
        a = r(94079),
        c = a && a.isSet,
        s = c ? o(c) : n;
      e.exports = s
    },
    11377: (e, t, r) => {
      var n = r(7158),
        o = r(49927),
        a = r(95360);
      e.exports = function(e) {
        return "string" == typeof e || !o(e) && a(e) && "[object String]" == n(e)
      }
    },
    96265: (e, t, r) => {
      var n = r(25175),
        o = r(43175),
        a = r(94079),
        c = a && a.isTypedArray,
        s = c ? o(c) : n;
      e.exports = s
    },
    94060: (e, t, r) => {
      var n = r(87245),
        o = r(87078),
        a = r(66240);
      e.exports = function(e) {
        return a(e) ? n(e) : o(e)
      }
    },
    63219: (e, t, r) => {
      var n = r(87245),
        o = r(40753),
        a = r(66240);
      e.exports = function(e) {
        return a(e) ? n(e, !0) : o(e)
      }
    },
    34308: e => {
      e.exports = function(e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0
      }
    },
    3826: (e, t, r) => {
      var n = r(31827);

      function o(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
        var r = function() {
          var n = arguments,
            o = t ? t.apply(this, n) : n[0],
            a = r.cache;
          if (a.has(o)) return a.get(o);
          var c = e.apply(this, n);
          return r.cache = a.set(o, c) || a, c
        };
        return r.cache = new(o.Cache || n), r
      }
      o.Cache = n, e.exports = o
    },
    31062: (e, t, r) => {
      var n = r(40572),
        o = r(11417)((function(e, t, r) {
          n(e, t, r)
        }));
      e.exports = o
    },
    94066: (e, t, r) => {
      var n = r(40572),
        o = r(11417)((function(e, t, r, o) {
          n(e, t, r, o)
        }));
      e.exports = o
    },
    31949: (e, t, r) => {
      var n = r(77714),
        o = r(66253),
        a = r(53285),
        c = r(31119),
        s = r(51469),
        u = r(67800),
        i = r(17274),
        l = r(86515),
        f = i((function(e, t) {
          var r = {};
          if (null == e) return r;
          var i = !1;
          t = n(t, (function(t) {
            return t = c(t, e), i || (i = t.length > 1), t
          })), s(e, l(e), r), i && (r = o(r, 7, u));
          for (var f = t.length; f--;) a(r, t[f]);
          return r
        }));
      e.exports = f
    },
    51315: (e, t, r) => {
      var n = r(69666)();
      e.exports = n
    },
    4642: (e, t, r) => {
      var n = r(85840);
      e.exports = function(e, t, r, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : n(e, t, r, o)
      }
    },
    99627: e => {
      e.exports = function() {
        return []
      }
    },
    9017: e => {
      e.exports = function() {
        return !1
      }
    },
    44362: (e, t, r) => {
      var n = r(58972);
      e.exports = function(e) {
        return e ? Infinity === (e = n(e)) || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    71414: (e, t, r) => {
      var n = r(51469),
        o = r(63219);
      e.exports = function(e) {
        return n(e, o(e))
      }
    },
    4328: (e, t, r) => {
      var n = r(93934);
      e.exports = function(e) {
        return null == e ? "" : n(e)
      }
    },
    64126: (e, t, r) => {
      "use strict";
      r.d(t, {
        Cb: () => n,
        US: () => o,
        xW: () => a,
        HZ: () => c,
        X6: () => s
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
        a = {
          dark: "foundry_nu8bkpar",
          darkHc: "foundry_nu8bkpat",
          light: "foundry_nu8bkpaq",
          lightHc: "foundry_nu8bkpas",
          tokens: "foundry_nu8bkp1"
        },
        c = "--foundry_nu8bkp0",
        s = "foundry_nu8bkp1"
    },
    37230: (e, t, r) => {
      "use strict";
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    65797: (e, t, r) => {
      "use strict";
      r.d(t, {
        UP: () => s,
        ic: () => f,
        qn: () => m,
        Rv: () => y,
        iQ: () => v,
        Mk: () => d,
        UQ: () => l,
        gr: () => h,
        Ub: () => a,
        jt: () => u,
        ZC: () => c,
        rl: () => b
      });
      var n = r(37230),
        o = r(71403);

      function a(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const a = e => n.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [c, s] = (0, o.useState)((() => r ? a(e) : t));

        function u() {
          s(a(e))
        }
        return (0, o.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return u(), t?.addListener ? t?.addListener(u) : t?.addEventListener("change", u), () => {
            t?.removeListener ? t?.removeListener(u) : t?.removeEventListener("change", u)
          }
        }), [e]), c
      }

      function c(e) {
        const t = (0, o.useRef)({
            value: e,
            prev: void 0
          }),
          r = t.current.value;
        return e !== r && (t.current = {
          value: e,
          prev: r
        }), t.current.prev
      }

      function s(...e) {
        const t = (0, o.useRef)(null);
        return (0, o.useEffect)((() => {
          e.forEach((e => {
            e && ("function" == typeof e ? e(t.current || null) : e.current = t.current)
          }))
        }), [e]), t
      }
      const u = () => a("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function i(e) {
        const t = (0, o.useRef)(e);
        return (0, o.useEffect)((() => {
          t.current = e
        })), (0, o.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      const l = ({
        activity: e,
        leave: t,
        enabled: r = !0
      }) => {
        const n = (0, o.useRef)(),
          [a, c] = (0, o.useState)(!1),
          s = (0, o.useCallback)((() => c(!0)), []),
          u = (0, o.useCallback)(((t, r) => {
            let o = 0;
            return (...t) => {
              const r = Date.now();
              r - o >= 500 && (o = r, (() => {
                c(!1), window.clearTimeout(n.current), n.current = window.setTimeout(s, e)
              })(...t))
            }
          })(), []),
          i = (0, o.useCallback)((() => {
            window.clearTimeout(n.current), n.current = window.setTimeout(s, t)
          }), []),
          l = (0, o.useCallback)((() => {
            document.hidden || u()
          }), []);
        return (0, o.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", u), window.removeEventListener("mousedown", u), window.removeEventListener("resize", u), window.removeEventListener("keydown", u), window.removeEventListener("touchstart", u), window.removeEventListener("wheel", u), document.removeEventListener("mouseleave", i), document.removeEventListener("visibilitychange", l), window.clearTimeout(n.current), c(!1)
          };
          return r ? (window.addEventListener("mousemove", u), window.addEventListener("mousedown", u), window.addEventListener("resize", u), window.addEventListener("keydown", u), window.addEventListener("touchstart", u), window.addEventListener("wheel", u), document.addEventListener("mouseleave", i), document.addEventListener("visibilitychange", l), u()) : e(), () => e()
        }), [r]), {
          isIdle: a
        }
      };

      function f({
        prop: e,
        defaultProp: t,
        onChange: r = (() => {})
      }) {
        const [n, a] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, o.useState)(e),
            [n] = r,
            a = (0, o.useRef)(n),
            c = i(t);
          return (0, o.useEffect)((() => {
            a.current !== n && (c(n), a.current = n)
          }), [n, a, c]), r
        }({
          defaultProp: t,
          onChange: r
        }), c = void 0 !== e, s = c ? e : n, u = i(r), l = (0, o.useCallback)((t => {
          if (c) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && u(r)
          } else a(t)
        }), [c, e, a, u]);
        return [s, l]
      }

      function p(e, t, r, n) {
        const a = (0, o.useRef)(t);
        (0, o.useEffect)((() => {
          a.current = t
        }), [t]), (0, o.useEffect)((() => {
          const t = r?.current ?? window;
          if (!t || !t.addEventListener) return;
          const o = e => {
            a.current(e)
          };
          return t.addEventListener(e, o, n), () => {
            t.removeEventListener(e, o, n)
          }
        }), [e, r?.current, n])
      }
      const d = ({
          enabled: e,
          ref: t
        }) => {
          const [r, n] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            n(!1)
          }), [t.current]), p("mouseenter", (() => {
            n(!0)
          }), t), p("mouseleave", (() => {
            n(!1)
          }), t), {
            isHovered: !!e && r
          }
        },
        v = ({
          enabled: e,
          ref: t
        }) => {
          const [r, n] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            n(!1)
          }), [t.current]), p("focusin", (() => {
            n(!0)
          }), t), p("focusout", (() => {
            n(!1)
          }), t), {
            isFocused: !!e && r
          }
        },
        h = ({
          enabled: e = !0
        }) => {
          const [t, r] = (0, o.useState)(!1), [n, a] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            e || (r(!1), a(!1))
          }), [e]), {
            eventHandlers: {
              onLoad: () => {
                e && (a(!0), r(!1))
              },
              onAbort: () => {
                e && (a(!0), r(!1))
              },
              onError: () => {
                e && (a(!0), r(!1))
              }
            },
            error: t,
            loaded: n
          }
        };

      function b(e = !0) {
        return !!e && a("screen and (pointer: coarse) and (hover: none)")
      }
      const y = ({
          enabled: e = !0,
          latency: t = 300,
          onDoubleClick: r = (() => null),
          onSingleClick: n = (() => null)
        }) => {
          const a = (0, o.useRef)(0),
            c = (0, o.useRef)();
          return {
            handleClick: o => {
              e && (a.current += 1, c.current = setTimeout((() => {
                1 === a.current ? n(o) : 2 === a.current && r(o), a.current = 0
              }), t))
            }
          }
        },
        m = (e, t = []) => {
          const r = (0, o.useRef)(!1);
          (0, o.useEffect)((() => (r.current = !0, () => {
            r.current = !1
          })), []), (0, o.useEffect)((() => {
            r.current && e()
          }), [...t])
        }
    },
    76285: (e, t, r) => {
      "use strict";
      r.d(t, {
        X3: () => n.X,
        bZ: () => p,
        v6: () => i
      });
      var n = r(37230),
        o = r(11900),
        a = r(94066),
        c = r(94048),
        s = r(27335),
        u = r(11377);
      const i = (e, t) => Array().concat(t).reduce(((e, t) => a(e, t, ((e, t) => c(e) && c(t) ? function(...e) {
          return (...t) => {
            for (const r of e) "function" == typeof r && r(...t)
          }
        }(e, t) : s(e) && s(t) ? i(e, t) : u(e) && u(t) ? (0, o.$)(e, t) : t || e))), e),
        l = /^(on.*)$/,
        f = /^(onPress.*)$/;

      function p(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const r = {},
          n = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (f.test(o) ? t ? r[o] = e[o] : n[o] = e[o] : l.test(o) ? r[o] = e[o] : n[o] = e[o]);
        return {
          events: r,
          others: n
        }
      }
      r(51315), r(31949), r(31062), r(14653), r(4642), r(14963)
    },
    21711: (e, t, r) => {
      "use strict";
      r.d(t, {
        DX: () => c,
        xV: () => u,
        s6: () => v
      });
      var n = r(26677),
        o = r(71403);

      function a(...e) {
        return t => e.forEach((e => function(e, t) {
          "function" == typeof e ? e(t) : null != e && (e.current = t)
        }(e, t)))
      }
      const c = (0, o.forwardRef)(((e, t) => {
        const {
          children: r,
          ...a
        } = e, c = o.Children.toArray(r), u = c.find(i);
        if (u) {
          const e = u.props.children,
            r = c.map((t => t === u ? o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null : t));
          return (0, o.createElement)(s, (0, n.A)({}, a, {
            ref: t
          }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, r) : null)
        }
        return (0, o.createElement)(s, (0, n.A)({}, a, {
          ref: t
        }), r)
      }));
      c.displayName = "Slot";
      const s = (0, o.forwardRef)(((e, t) => {
        const {
          children: r,
          ...n
        } = e;
        return (0, o.isValidElement)(r) ? (0, o.cloneElement)(r, {
          ...l(n, r.props),
          ref: t ? a(t, r.ref) : r.ref
        }) : o.Children.count(r) > 1 ? o.Children.only(null) : null
      }));
      s.displayName = "SlotClone";
      const u = ({
        children: e
      }) => (0, o.createElement)(o.Fragment, null, e);

      function i(e) {
        return (0, o.isValidElement)(e) && e.type === u
      }

      function l(e, t) {
        const r = {
          ...t
        };
        for (const n in t) {
          const o = e[n],
            a = t[n];
          /^on[A-Z]/.test(n) ? o && a ? r[n] = (...e) => {
            a(...e), o(...e)
          } : o && (r[n] = o) : "style" === n ? r[n] = {
            ...o,
            ...a
          } : "className" === n && (r[n] = [o, a].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...r
        }
      }
      var f = r(46632);
      r(41011);
      const p = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const r = (0, o.forwardRef)(((e, r) => {
            const {
              asChild: a,
              ...s
            } = e, u = a ? c : t;
            return (0, o.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, o.createElement)(u, (0, n.A)({}, s, {
              ref: r
            }))
          }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {}),
        d = (0, o.forwardRef)(((e, t) => (0, o.createElement)(p.span, (0, n.A)({}, e, {
          ref: t,
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
            ...e.style
          }
        })))),
        v = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? d : o.Fragment;
          return (0, f.jsx)(r, {
            ...t
          })
        }
    },
    87319: (e, t, r) => {
      "use strict";
      r.d(t, {
        NP: () => h,
        Ym: () => l,
        DP: () => i
      });
      var n = r(46632),
        o = r(21711),
        a = r(64126),
        c = r(71403);
      const s = (0, c.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: a.US,
          platformScaleBreakpoints: a.Cb,
          locale: "en-US"
        }),
        u = () => (0, c.useContext)(s),
        i = () => {
          const {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: o,
            defaultPlatformScale: a,
            platformScaleRatios: c,
            platformScaleBreakpoints: s,
            locale: i
          } = u();
          return {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: o,
            defaultPlatformScale: a,
            platformScaleRatios: c,
            platformScaleBreakpoints: s,
            locale: i
          }
        },
        l = () => {
          const {
            locale: e
          } = u();
          return e
        };
      var f = r(65797);
      const p = (e, t) => {
        const r = "more" === t ? a.xW.lightHc : a.xW.light,
          n = "more" === t ? a.xW.darkHc : a.xW.dark;
        return "dark" === e ? n : r
      };
      var d = r(76285);
      const v = () => d.X3 ? null : document.body,
        h = (0, c.forwardRef)((({
          children: e,
          className: t,
          container: r = v(),
          asChild: u,
          colorScheme: i,
          defaultColorScheme: l,
          contrastMode: h,
          defaultContrastMode: b,
          platformScaleBreakpoints: y,
          platformScaleRatios: m,
          defaultPlatformScale: x,
          platformScale: w,
          locale: _ = "en-US"
        }, g) => {
          const j = (0, c.useRef)(null),
            S = (0, f.UP)(j, g),
            E = (0, c.useRef)(r),
            {
              ratio: A,
              scale: k
            } = function(e) {
              const t = (0, c.useMemo)((() => ({
                  ...a.US,
                  ...e.platformScaleRatios
                })), [e.platformScaleRatios]),
                r = (0, c.useMemo)((() => ({
                  ...a.Cb,
                  ...e.platformScaleBreakpoints
                })), [e.platformScaleBreakpoints]),
                [n, o] = (0, c.useState)(e.platformScale || e.defaultPlatformScale),
                s = (0, c.useRef)([]),
                u = () => {
                  if (!d.X3) {
                    for (const {
                        handler: e,
                        matchMedia: t
                      }
                      of s.current) t.removeEventListener("change", e);
                    s.current = []
                  }
                };
              return (0, c.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
                if (!d.X3) {
                  u();
                  for (const e in r) {
                    const t = window.matchMedia(r[e]),
                      n = t => {
                        t.matches && o(e)
                      };
                    t.addEventListener("change", n), t.matches && o(e), s.current.push({
                      handler: n,
                      matchMedia: t
                    })
                  }
                }
              })(), u)), [r, e.platformScale]), {
                scale: n,
                ratio: t[n]
              }
            }({
              platformScaleBreakpoints: y,
              platformScaleRatios: m,
              defaultPlatformScale: x,
              platformScale: w
            }),
            {
              appearanceClass: C,
              otherAppearanceClasses: O,
              providerColor: L,
              providerContrast: M
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark",
              contrastMode: r,
              defaultContrastMode: n = "normal"
            }) {
              const o = (0, f.Ub)("(prefers-color-scheme: light)"),
                s = (0, f.Ub)("(prefers-color-scheme: dark)"),
                u = (0, f.Ub)("(prefers-contrast: more)"),
                i = "system" !== e && e || o && "light" || s && "dark" || t,
                l = r || u && "more" || n,
                d = (0, c.useMemo)((() => p(i, l)), [i, l]),
                v = (0, c.useMemo)((() => ((e, t) => {
                  const r = p(e, t);
                  return [a.xW.light, a.xW.dark, a.xW.lightHc, a.xW.darkHc].filter((e => e !== r))
                })(i, l)), [i, l]);
              return {
                appearanceClass: d,
                otherAppearanceClasses: v,
                providerColor: i,
                providerContrast: l
              }
            }({
              colorScheme: i,
              defaultColorScheme: l,
              contrastMode: h,
              defaultContrastMode: b
            });
          return ((e, t, r, n, o) => {
            const s = (0, f.ZC)(o),
              u = (0, f.ZC)(e.current);
            (0, c.useEffect)((() => {
              e.current?.classList.contains(a.X6) || e.current?.classList.add(a.X6), e.current?.classList.add(r), e.current?.classList.remove(...n), s && o && e.current?.classList.contains(s) ? e.current?.classList.replace(s, o) : s && !o && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : o && e.current?.classList.add(o)
            }), [r, o]), (0, c.useEffect)((() => {
              e.current?.style.setProperty(a.HZ, t.toString())
            }), [t]), (0, c.useEffect)((() => {
              u?.classList.remove(a.X6), u?.classList.remove(r), u?.style.removeProperty(a.HZ), o && u?.classList.remove(o)
            }), [u])
          })(u ? S : E, A, C, O, t), (0, n.jsx)(s.Provider, {
            value: {
              locale: _,
              defaultColorScheme: l,
              colorScheme: L,
              defaultContrastMode: b,
              contrastMode: M,
              defaultPlatformScale: x,
              platformScale: k,
              platformScaleRatios: m,
              platformScaleBreakpoints: y
            },
            children: u ? (0, n.jsx)(o.DX, {
              ref: S,
              children: e
            }) : e
          })
        }))
    },
    11900: (e, t, r) => {
      "use strict";

      function n(e) {
        var t, r, o = "";
        if ("string" == typeof e || "number" == typeof e) o += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var a = e.length;
            for (t = 0; t < a; t++) e[t] && (r = n(e[t])) && (o && (o += " "), o += r)
          } else
            for (r in e) e[r] && (o && (o += " "), o += r);
        return o
      }

      function o() {
        for (var e, t, r = 0, o = "", a = arguments.length; r < a; r++)(e = arguments[r]) && (t = n(e)) && (o && (o += " "), o += t);
        return o
      }
      r.d(t, {
        $: () => o,
        A: () => a
      });
      const a = o
    }
  }
]);