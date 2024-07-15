! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "f0a3cc0c-1143-49bc-9f00-4d8ed44729e3", t._sentryDebugIdIdentifier = "sentry-dbid-f0a3cc0c-1143-49bc-9f00-4d8ed44729e3")
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
  [5272], {
    43540: (t, r, e) => {
      var o = e(43527)(e(36056), "DataView");
      t.exports = o
    },
    43640: (t, r, e) => {
      var o = e(78600),
        n = e(4648),
        a = e(59528),
        c = e(23920),
        s = e(17144);

      function i(t) {
        var r = -1,
          e = null == t ? 0 : t.length;
        for (this.clear(); ++r < e;) {
          var o = t[r];
          this.set(o[0], o[1])
        }
      }
      i.prototype.clear = o, i.prototype.delete = n, i.prototype.get = a, i.prototype.has = c, i.prototype.set = s, t.exports = i
    },
    35e3: (t, r, e) => {
      var o = e(6460),
        n = e(26152),
        a = e(85752),
        c = e(24408),
        s = e(71020);

      function i(t) {
        var r = -1,
          e = null == t ? 0 : t.length;
        for (this.clear(); ++r < e;) {
          var o = t[r];
          this.set(o[0], o[1])
        }
      }
      i.prototype.clear = o, i.prototype.delete = n, i.prototype.get = a, i.prototype.has = c, i.prototype.set = s, t.exports = i
    },
    90856: (t, r, e) => {
      var o = e(43527)(e(36056), "Map");
      t.exports = o
    },
    5704: (t, r, e) => {
      var o = e(3840),
        n = e(63256),
        a = e(67384),
        c = e(95312),
        s = e(1396);

      function i(t) {
        var r = -1,
          e = null == t ? 0 : t.length;
        for (this.clear(); ++r < e;) {
          var o = t[r];
          this.set(o[0], o[1])
        }
      }
      i.prototype.clear = o, i.prototype.delete = n, i.prototype.get = a, i.prototype.has = c, i.prototype.set = s, t.exports = i
    },
    49844: (t, r, e) => {
      var o = e(43527)(e(36056), "Promise");
      t.exports = o
    },
    78116: (t, r, e) => {
      var o = e(43527)(e(36056), "Set");
      t.exports = o
    },
    12276: (t, r, e) => {
      var o = e(35e3),
        n = e(52080),
        a = e(46272),
        c = e(59e3),
        s = e(75448),
        i = e(35688);

      function u(t) {
        var r = this.__data__ = new o(t);
        this.size = r.size
      }
      u.prototype.clear = n, u.prototype.delete = a, u.prototype.get = c, u.prototype.has = s, u.prototype.set = i, t.exports = u
    },
    6664: (t, r, e) => {
      var o = e(36056).Uint8Array;
      t.exports = o
    },
    91064: (t, r, e) => {
      var o = e(43527)(e(36056), "WeakMap");
      t.exports = o
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
        for (var e = -1, o = null == t ? 0 : t.length; ++e < o && !1 !== r(t[e], e, t););
        return t
      }
    },
    86876: t => {
      t.exports = function(t, r) {
        for (var e = -1, o = null == t ? 0 : t.length, n = 0, a = []; ++e < o;) {
          var c = t[e];
          r(c, e, t) && (a[n++] = c)
        }
        return a
      }
    },
    60228: (t, r, e) => {
      var o = e(48448),
        n = e(45340),
        a = e(28224),
        c = e(91640),
        s = e(38184),
        i = e(30336),
        u = Object.prototype.hasOwnProperty;
      t.exports = function(t, r) {
        var e = a(t),
          p = !e && n(t),
          f = !e && !p && c(t),
          l = !e && !p && !f && i(t),
          v = e || p || f || l,
          d = v ? o(t.length, String) : [],
          b = d.length;
        for (var h in t) !r && !u.call(t, h) || v && ("length" == h || f && ("offset" == h || "parent" == h) || l && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || s(h, b)) || d.push(h);
        return d
      }
    },
    1412: t => {
      t.exports = function(t, r) {
        for (var e = -1, o = null == t ? 0 : t.length, n = Array(o); ++e < o;) n[e] = r(t[e], e, t);
        return n
      }
    },
    60096: t => {
      t.exports = function(t, r) {
        for (var e = -1, o = r.length, n = t.length; ++e < o;) t[n + e] = r[e];
        return t
      }
    },
    50156: (t, r, e) => {
      var o = e(66508),
        n = e(2536);
      t.exports = function(t, r, e) {
        (void 0 !== e && !n(t[r], e) || void 0 === e && !(r in t)) && o(t, r, e)
      }
    },
    85952: (t, r, e) => {
      var o = e(66508),
        n = e(2536),
        a = Object.prototype.hasOwnProperty;
      t.exports = function(t, r, e) {
        var c = t[r];
        a.call(t, r) && n(c, e) && (void 0 !== e || r in t) || o(t, r, e)
      }
    },
    69784: (t, r, e) => {
      var o = e(2536);
      t.exports = function(t, r) {
        for (var e = t.length; e--;)
          if (o(t[e][0], r)) return e;
        return -1
      }
    },
    64816: (t, r, e) => {
      var o = e(94888),
        n = e(60836);
      t.exports = function(t, r) {
        return t && o(r, n(r), t)
      }
    },
    68704: (t, r, e) => {
      var o = e(94888),
        n = e(3280);
      t.exports = function(t, r) {
        return t && o(r, n(r), t)
      }
    },
    66508: (t, r, e) => {
      var o = e(78204);
      t.exports = function(t, r, e) {
        "__proto__" == r && o ? o(t, r, {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        }) : t[r] = e
      }
    },
    51816: (t, r, e) => {
      var o = e(12276),
        n = e(18540),
        a = e(85952),
        c = e(64816),
        s = e(68704),
        i = e(15832),
        u = e(62736),
        p = e(90576),
        f = e(24996),
        l = e(15648),
        v = e(55360),
        d = e(74868),
        b = e(90832),
        h = e(67252),
        y = e(7268),
        x = e(28224),
        _ = e(91640),
        m = e(92128),
        j = e(89048),
        g = e(15264),
        w = e(60836),
        S = e(3280),
        O = "[object Arguments]",
        A = "[object Function]",
        M = "[object Object]",
        k = {};
      k[O] = k["[object Array]"] = k["[object ArrayBuffer]"] = k["[object DataView]"] = k["[object Boolean]"] = k["[object Date]"] = k["[object Float32Array]"] = k["[object Float64Array]"] = k["[object Int8Array]"] = k["[object Int16Array]"] = k["[object Int32Array]"] = k["[object Map]"] = k["[object Number]"] = k[M] = k["[object RegExp]"] = k["[object Set]"] = k["[object String]"] = k["[object Symbol]"] = k["[object Uint8Array]"] = k["[object Uint8ClampedArray]"] = k["[object Uint16Array]"] = k["[object Uint32Array]"] = !0, k["[object Error]"] = k[A] = k["[object WeakMap]"] = !1, t.exports = function t(r, e, z, E, P, C) {
        var L, R = 1 & e,
          I = 2 & e,
          F = 4 & e;
        if (z && (L = P ? z(r, E, P, C) : z(r)), void 0 !== L) return L;
        if (!j(r)) return r;
        var B = x(r);
        if (B) {
          if (L = b(r), !R) return u(r, L)
        } else {
          var D = d(r),
            U = D == A || "[object GeneratorFunction]" == D;
          if (_(r)) return i(r, R);
          if (D == M || D == O || U && !P) {
            if (L = I || U ? {} : y(r), !R) return I ? f(r, s(L, r)) : p(r, c(L, r))
          } else {
            if (!k[D]) return P ? r : {};
            L = h(r, D, R)
          }
        }
        C || (C = new o);
        var T = C.get(r);
        if (T) return T;
        C.set(r, L), g(r) ? r.forEach((function(o) {
          L.add(t(o, e, z, o, r, C))
        })) : m(r) && r.forEach((function(o, n) {
          L.set(n, t(o, e, z, n, r, C))
        }));
        var $ = B ? void 0 : (F ? I ? v : l : I ? S : w)(r);
        return n($ || r, (function(o, n) {
          $ && (o = r[n = o]), a(L, n, t(o, e, z, n, r, C))
        })), L
      }
    },
    34480: (t, r, e) => {
      var o = e(89048),
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
    81644: (t, r, e) => {
      var o = e(13836)();
      t.exports = o
    },
    1952: (t, r, e) => {
      var o = e(60096),
        n = e(28224);
      t.exports = function(t, r, e) {
        var a = r(t);
        return n(t) ? a : o(a, e(t))
      }
    },
    68856: (t, r, e) => {
      var o = e(95992),
        n = e(72316);
      t.exports = function(t) {
        return n(t) && "[object Arguments]" == o(t)
      }
    },
    88884: (t, r, e) => {
      var o = e(74868),
        n = e(72316);
      t.exports = function(t) {
        return n(t) && "[object Map]" == o(t)
      }
    },
    30380: (t, r, e) => {
      var o = e(49120),
        n = e(38552),
        a = e(89048),
        c = e(29200),
        s = /^\[object .+?Constructor\]$/,
        i = Function.prototype,
        u = Object.prototype,
        p = i.toString,
        f = u.hasOwnProperty,
        l = RegExp("^" + p.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      t.exports = function(t) {
        return !(!a(t) || n(t)) && (o(t) ? l : s).test(c(t))
      }
    },
    62800: (t, r, e) => {
      var o = e(74868),
        n = e(72316);
      t.exports = function(t) {
        return n(t) && "[object Set]" == o(t)
      }
    },
    71664: (t, r, e) => {
      var o = e(95992),
        n = e(19080),
        a = e(72316),
        c = {};
      c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1, t.exports = function(t) {
        return a(t) && n(t.length) && !!c[o(t)]
      }
    },
    37228: (t, r, e) => {
      var o = e(12944),
        n = e(13696),
        a = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!o(t)) return n(t);
        var r = [];
        for (var e in Object(t)) a.call(t, e) && "constructor" != e && r.push(e);
        return r
      }
    },
    8088: (t, r, e) => {
      var o = e(89048),
        n = e(12944),
        a = e(28067),
        c = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!o(t)) return a(t);
        var r = n(t),
          e = [];
        for (var s in t)("constructor" != s || !r && c.call(t, s)) && e.push(s);
        return e
      }
    },
    81480: (t, r, e) => {
      var o = e(12276),
        n = e(50156),
        a = e(81644),
        c = e(46261),
        s = e(89048),
        i = e(3280),
        u = e(68040);
      t.exports = function t(r, e, p, f, l) {
        r !== e && a(e, (function(a, i) {
          if (l || (l = new o), s(a)) c(r, e, i, p, t, f, l);
          else {
            var v = f ? f(u(r, i), a, i + "", r, e, l) : void 0;
            void 0 === v && (v = a), n(r, i, v)
          }
        }), i)
      }
    },
    46261: (t, r, e) => {
      var o = e(50156),
        n = e(15832),
        a = e(3456),
        c = e(62736),
        s = e(7268),
        i = e(45340),
        u = e(28224),
        p = e(62480),
        f = e(91640),
        l = e(49120),
        v = e(89048),
        d = e(93592),
        b = e(30336),
        h = e(68040),
        y = e(86724);
      t.exports = function(t, r, e, x, _, m, j) {
        var g = h(t, e),
          w = h(r, e),
          S = j.get(w);
        if (S) o(t, e, S);
        else {
          var O = m ? m(g, w, e + "", t, r, j) : void 0,
            A = void 0 === O;
          if (A) {
            var M = u(w),
              k = !M && f(w),
              z = !M && !k && b(w);
            O = w, M || k || z ? u(g) ? O = g : p(g) ? O = c(g) : k ? (A = !1, O = n(w, !0)) : z ? (A = !1, O = a(w, !0)) : O = [] : d(w) || i(w) ? (O = g, i(g) ? O = y(g) : v(g) && !l(g) || (O = s(w))) : A = !1
          }
          A && (j.set(w, O), _(O, w, x, m, j), j.delete(w)), o(t, e, O)
        }
      }
    },
    70867: (t, r, e) => {
      var o = e(89848),
        n = e(39676),
        a = e(57396);
      t.exports = function(t, r) {
        return a(n(t, r, o), t + "")
      }
    },
    79336: (t, r, e) => {
      var o = e(85952),
        n = e(75328),
        a = e(38184),
        c = e(89048),
        s = e(92264);
      t.exports = function(t, r, e, i) {
        if (!c(t)) return t;
        for (var u = -1, p = (r = n(r, t)).length, f = p - 1, l = t; null != l && ++u < p;) {
          var v = s(r[u]),
            d = e;
          if ("__proto__" === v || "constructor" === v || "prototype" === v) return t;
          if (u != f) {
            var b = l[v];
            void 0 === (d = i ? i(b, v, l) : void 0) && (d = c(b) ? b : a(r[u + 1]) ? [] : {})
          }
          o(l, v, d), l = l[v]
        }
        return t
      }
    },
    11632: (t, r, e) => {
      var o = e(76088),
        n = e(78204),
        a = e(89848),
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
    48448: t => {
      t.exports = function(t, r) {
        for (var e = -1, o = Array(t); ++e < t;) o[e] = r(e);
        return o
      }
    },
    18352: (t, r, e) => {
      var o = e(31580),
        n = e(1412),
        a = e(28224),
        c = e(77084),
        s = o ? o.prototype : void 0,
        i = s ? s.toString : void 0;
      t.exports = function t(r) {
        if ("string" == typeof r) return r;
        if (a(r)) return n(r, t) + "";
        if (c(r)) return i ? i.call(r) : "";
        var e = r + "";
        return "0" == e && 1 / r == -1 / 0 ? "-0" : e
      }
    },
    10976: t => {
      t.exports = function(t) {
        return function(r) {
          return t(r)
        }
      }
    },
    75328: (t, r, e) => {
      var o = e(28224),
        n = e(61128),
        a = e(35748),
        c = e(62080);
      t.exports = function(t, r) {
        return o(t) ? t : n(t, r) ? [t] : a(c(t))
      }
    },
    72712: (t, r, e) => {
      var o = e(6664);
      t.exports = function(t) {
        var r = new t.constructor(t.byteLength);
        return new o(r).set(new o(t)), r
      }
    },
    15832: (t, r, e) => {
      t = e.nmd(t);
      var o = e(36056),
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
    41452: (t, r, e) => {
      var o = e(72712);
      t.exports = function(t, r) {
        var e = r ? o(t.buffer) : t.buffer;
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
      var o = e(31580),
        n = o ? o.prototype : void 0,
        a = n ? n.valueOf : void 0;
      t.exports = function(t) {
        return a ? Object(a.call(t)) : {}
      }
    },
    3456: (t, r, e) => {
      var o = e(72712);
      t.exports = function(t, r) {
        var e = r ? o(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.length)
      }
    },
    62736: t => {
      t.exports = function(t, r) {
        var e = -1,
          o = t.length;
        for (r || (r = Array(o)); ++e < o;) r[e] = t[e];
        return r
      }
    },
    94888: (t, r, e) => {
      var o = e(85952),
        n = e(66508);
      t.exports = function(t, r, e, a) {
        var c = !e;
        e || (e = {});
        for (var s = -1, i = r.length; ++s < i;) {
          var u = r[s],
            p = a ? a(e[u], t[u], u, e, t) : void 0;
          void 0 === p && (p = t[u]), c ? n(e, u, p) : o(e, u, p)
        }
        return e
      }
    },
    90576: (t, r, e) => {
      var o = e(94888),
        n = e(19655);
      t.exports = function(t, r) {
        return o(t, n(t), r)
      }
    },
    24996: (t, r, e) => {
      var o = e(94888),
        n = e(20140);
      t.exports = function(t, r) {
        return o(t, n(t), r)
      }
    },
    81704: (t, r, e) => {
      var o = e(36056)["__core-js_shared__"];
      t.exports = o
    },
    50936: (t, r, e) => {
      var o = e(70867),
        n = e(45920);
      t.exports = function(t) {
        return o((function(r, e) {
          var o = -1,
            a = e.length,
            c = a > 1 ? e[a - 1] : void 0,
            s = a > 2 ? e[2] : void 0;
          for (c = t.length > 3 && "function" == typeof c ? (a--, c) : void 0, s && n(e[0], e[1], s) && (c = a < 3 ? void 0 : c, a = 1), r = Object(r); ++o < a;) {
            var i = e[o];
            i && t(r, i, o, c)
          }
          return r
        }))
      }
    },
    13836: t => {
      t.exports = function(t) {
        return function(r, e, o) {
          for (var n = -1, a = Object(r), c = o(r), s = c.length; s--;) {
            var i = c[t ? s : ++n];
            if (!1 === e(a[i], i, a)) break
          }
          return r
        }
      }
    },
    78204: (t, r, e) => {
      var o = e(43527),
        n = function() {
          try {
            var t = o(Object, "defineProperty");
            return t({}, "", {}), t
          } catch (t) {}
        }();
      t.exports = n
    },
    15648: (t, r, e) => {
      var o = e(1952),
        n = e(19655),
        a = e(60836);
      t.exports = function(t) {
        return o(t, a, n)
      }
    },
    55360: (t, r, e) => {
      var o = e(1952),
        n = e(20140),
        a = e(3280);
      t.exports = function(t) {
        return o(t, a, n)
      }
    },
    46612: (t, r, e) => {
      var o = e(40288);
      t.exports = function(t, r) {
        var e = t.__data__;
        return o(r) ? e["string" == typeof r ? "string" : "hash"] : e.map
      }
    },
    43527: (t, r, e) => {
      var o = e(30380),
        n = e(34848);
      t.exports = function(t, r) {
        var e = n(t, r);
        return o(e) ? e : void 0
      }
    },
    47972: (t, r, e) => {
      var o = e(80980)(Object.getPrototypeOf, Object);
      t.exports = o
    },
    19655: (t, r, e) => {
      var o = e(86876),
        n = e(57080),
        a = Object.prototype.propertyIsEnumerable,
        c = Object.getOwnPropertySymbols,
        s = c ? function(t) {
          return null == t ? [] : (t = Object(t), o(c(t), (function(r) {
            return a.call(t, r)
          })))
        } : n;
      t.exports = s
    },
    20140: (t, r, e) => {
      var o = e(60096),
        n = e(47972),
        a = e(19655),
        c = e(57080),
        s = Object.getOwnPropertySymbols ? function(t) {
          for (var r = []; t;) o(r, a(t)), t = n(t);
          return r
        } : c;
      t.exports = s
    },
    74868: (t, r, e) => {
      var o = e(43540),
        n = e(90856),
        a = e(49844),
        c = e(78116),
        s = e(91064),
        i = e(95992),
        u = e(29200),
        p = "[object Map]",
        f = "[object Promise]",
        l = "[object Set]",
        v = "[object WeakMap]",
        d = "[object DataView]",
        b = u(o),
        h = u(n),
        y = u(a),
        x = u(c),
        _ = u(s),
        m = i;
      (o && m(new o(new ArrayBuffer(1))) != d || n && m(new n) != p || a && m(a.resolve()) != f || c && m(new c) != l || s && m(new s) != v) && (m = function(t) {
        var r = i(t),
          e = "[object Object]" == r ? t.constructor : void 0,
          o = e ? u(e) : "";
        if (o) switch (o) {
          case b:
            return d;
          case h:
            return p;
          case y:
            return f;
          case x:
            return l;
          case _:
            return v
        }
        return r
      }), t.exports = m
    },
    34848: t => {
      t.exports = function(t, r) {
        return null == t ? void 0 : t[r]
      }
    },
    78600: (t, r, e) => {
      var o = e(63368);
      t.exports = function() {
        this.__data__ = o ? o(null) : {}, this.size = 0
      }
    },
    4648: t => {
      t.exports = function(t) {
        var r = this.has(t) && delete this.__data__[t];
        return this.size -= r ? 1 : 0, r
      }
    },
    59528: (t, r, e) => {
      var o = e(63368),
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
    23920: (t, r, e) => {
      var o = e(63368),
        n = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var r = this.__data__;
        return o ? void 0 !== r[t] : n.call(r, t)
      }
    },
    17144: (t, r, e) => {
      var o = e(63368);
      t.exports = function(t, r) {
        var e = this.__data__;
        return this.size += this.has(t) ? 0 : 1, e[t] = o && void 0 === r ? "__lodash_hash_undefined__" : r, this
      }
    },
    90832: t => {
      var r = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = t.length,
          o = new t.constructor(e);
        return e && "string" == typeof t[0] && r.call(t, "index") && (o.index = t.index, o.input = t.input), o
      }
    },
    67252: (t, r, e) => {
      var o = e(72712),
        n = e(41452),
        a = e(93077),
        c = e(13235),
        s = e(3456);
      t.exports = function(t, r, e) {
        var i = t.constructor;
        switch (r) {
          case "[object ArrayBuffer]":
            return o(t);
          case "[object Boolean]":
          case "[object Date]":
            return new i(+t);
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
            return new i;
          case "[object Number]":
          case "[object String]":
            return new i(t);
          case "[object RegExp]":
            return a(t);
          case "[object Symbol]":
            return c(t)
        }
      }
    },
    7268: (t, r, e) => {
      var o = e(34480),
        n = e(47972),
        a = e(12944);
      t.exports = function(t) {
        return "function" != typeof t.constructor || a(t) ? {} : o(n(t))
      }
    },
    38184: t => {
      var r = /^(?:0|[1-9]\d*)$/;
      t.exports = function(t, e) {
        var o = typeof t;
        return !!(e = null == e ? 9007199254740991 : e) && ("number" == o || "symbol" != o && r.test(t)) && t > -1 && t % 1 == 0 && t < e
      }
    },
    45920: (t, r, e) => {
      var o = e(2536),
        n = e(59687),
        a = e(38184),
        c = e(89048);
      t.exports = function(t, r, e) {
        if (!c(e)) return !1;
        var s = typeof r;
        return !!("number" == s ? n(e) && a(r, e.length) : "string" == s && r in e) && o(e[r], t)
      }
    },
    61128: (t, r, e) => {
      var o = e(28224),
        n = e(77084),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        c = /^\w*$/;
      t.exports = function(t, r) {
        if (o(t)) return !1;
        var e = typeof t;
        return !("number" != e && "symbol" != e && "boolean" != e && null != t && !n(t)) || c.test(t) || !a.test(t) || null != r && t in Object(r)
      }
    },
    40288: t => {
      t.exports = function(t) {
        var r = typeof t;
        return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t
      }
    },
    38552: (t, r, e) => {
      var o, n = e(81704),
        a = (o = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "";
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
      var o = e(69784),
        n = Array.prototype.splice;
      t.exports = function(t) {
        var r = this.__data__,
          e = o(r, t);
        return !(e < 0 || (e == r.length - 1 ? r.pop() : n.call(r, e, 1), --this.size, 0))
      }
    },
    85752: (t, r, e) => {
      var o = e(69784);
      t.exports = function(t) {
        var r = this.__data__,
          e = o(r, t);
        return e < 0 ? void 0 : r[e][1]
      }
    },
    24408: (t, r, e) => {
      var o = e(69784);
      t.exports = function(t) {
        return o(this.__data__, t) > -1
      }
    },
    71020: (t, r, e) => {
      var o = e(69784);
      t.exports = function(t, r) {
        var e = this.__data__,
          n = o(e, t);
        return n < 0 ? (++this.size, e.push([t, r])) : e[n][1] = r, this
      }
    },
    3840: (t, r, e) => {
      var o = e(43640),
        n = e(35e3),
        a = e(90856);
      t.exports = function() {
        this.size = 0, this.__data__ = {
          hash: new o,
          map: new(a || n),
          string: new o
        }
      }
    },
    63256: (t, r, e) => {
      var o = e(46612);
      t.exports = function(t) {
        var r = o(this, t).delete(t);
        return this.size -= r ? 1 : 0, r
      }
    },
    67384: (t, r, e) => {
      var o = e(46612);
      t.exports = function(t) {
        return o(this, t).get(t)
      }
    },
    95312: (t, r, e) => {
      var o = e(46612);
      t.exports = function(t) {
        return o(this, t).has(t)
      }
    },
    1396: (t, r, e) => {
      var o = e(46612);
      t.exports = function(t, r) {
        var e = o(this, t),
          n = e.size;
        return e.set(t, r), this.size += e.size == n ? 0 : 1, this
      }
    },
    22336: (t, r, e) => {
      var o = e(66436);
      t.exports = function(t) {
        var r = o(t, (function(t) {
            return 500 === e.size && e.clear(), t
          })),
          e = r.cache;
        return r
      }
    },
    63368: (t, r, e) => {
      var o = e(43527)(Object, "create");
      t.exports = o
    },
    13696: (t, r, e) => {
      var o = e(80980)(Object.keys, Object);
      t.exports = o
    },
    28067: t => {
      t.exports = function(t) {
        var r = [];
        if (null != t)
          for (var e in Object(t)) r.push(e);
        return r
      }
    },
    99464: (t, r, e) => {
      t = e.nmd(t);
      var o = e(81044),
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
    80980: t => {
      t.exports = function(t, r) {
        return function(e) {
          return t(r(e))
        }
      }
    },
    39676: (t, r, e) => {
      var o = e(9924),
        n = Math.max;
      t.exports = function(t, r, e) {
        return r = n(void 0 === r ? t.length - 1 : r, 0),
          function() {
            for (var a = arguments, c = -1, s = n(a.length - r, 0), i = Array(s); ++c < s;) i[c] = a[r + c];
            c = -1;
            for (var u = Array(r + 1); ++c < r;) u[c] = a[c];
            return u[r] = e(i), o(t, this, u)
          }
      }
    },
    68040: t => {
      t.exports = function(t, r) {
        if (("constructor" !== r || "function" != typeof t[r]) && "__proto__" != r) return t[r]
      }
    },
    57396: (t, r, e) => {
      var o = e(11632),
        n = e(2360)(o);
      t.exports = n
    },
    2360: t => {
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
    52080: (t, r, e) => {
      var o = e(35e3);
      t.exports = function() {
        this.__data__ = new o, this.size = 0
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
      var o = e(35e3),
        n = e(90856),
        a = e(5704);
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
    35748: (t, r, e) => {
      var o = e(22336),
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
    92264: (t, r, e) => {
      var o = e(77084);
      t.exports = function(t) {
        if ("string" == typeof t || o(t)) return t;
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
    38584: (t, r, e) => {
      var o = e(51816);
      t.exports = function(t) {
        return o(t, 5)
      }
    },
    76088: t => {
      t.exports = function(t) {
        return function() {
          return t
        }
      }
    },
    2536: t => {
      t.exports = function(t, r) {
        return t === r || t != t && r != r
      }
    },
    89848: t => {
      t.exports = function(t) {
        return t
      }
    },
    45340: (t, r, e) => {
      var o = e(68856),
        n = e(72316),
        a = Object.prototype,
        c = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        i = o(function() {
          return arguments
        }()) ? o : function(t) {
          return n(t) && c.call(t, "callee") && !s.call(t, "callee")
        };
      t.exports = i
    },
    28224: t => {
      var r = Array.isArray;
      t.exports = r
    },
    59687: (t, r, e) => {
      var o = e(49120),
        n = e(19080);
      t.exports = function(t) {
        return null != t && n(t.length) && !o(t)
      }
    },
    62480: (t, r, e) => {
      var o = e(59687),
        n = e(72316);
      t.exports = function(t) {
        return n(t) && o(t)
      }
    },
    91640: (t, r, e) => {
      t = e.nmd(t);
      var o = e(36056),
        n = e(87732),
        a = r && !r.nodeType && r,
        c = a && t && !t.nodeType && t,
        s = c && c.exports === a ? o.Buffer : void 0,
        i = (s ? s.isBuffer : void 0) || n;
      t.exports = i
    },
    49120: (t, r, e) => {
      var o = e(95992),
        n = e(89048);
      t.exports = function(t) {
        if (!n(t)) return !1;
        var r = o(t);
        return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r
      }
    },
    19080: t => {
      t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
      }
    },
    92128: (t, r, e) => {
      var o = e(88884),
        n = e(10976),
        a = e(99464),
        c = a && a.isMap,
        s = c ? n(c) : o;
      t.exports = s
    },
    93592: (t, r, e) => {
      var o = e(95992),
        n = e(47972),
        a = e(72316),
        c = Function.prototype,
        s = Object.prototype,
        i = c.toString,
        u = s.hasOwnProperty,
        p = i.call(Object);
      t.exports = function(t) {
        if (!a(t) || "[object Object]" != o(t)) return !1;
        var r = n(t);
        if (null === r) return !0;
        var e = u.call(r, "constructor") && r.constructor;
        return "function" == typeof e && e instanceof e && i.call(e) == p
      }
    },
    15264: (t, r, e) => {
      var o = e(62800),
        n = e(10976),
        a = e(99464),
        c = a && a.isSet,
        s = c ? n(c) : o;
      t.exports = s
    },
    17724: (t, r, e) => {
      var o = e(95992),
        n = e(28224),
        a = e(72316);
      t.exports = function(t) {
        return "string" == typeof t || !n(t) && a(t) && "[object String]" == o(t)
      }
    },
    30336: (t, r, e) => {
      var o = e(71664),
        n = e(10976),
        a = e(99464),
        c = a && a.isTypedArray,
        s = c ? n(c) : o;
      t.exports = s
    },
    60836: (t, r, e) => {
      var o = e(60228),
        n = e(37228),
        a = e(59687);
      t.exports = function(t) {
        return a(t) ? o(t) : n(t)
      }
    },
    3280: (t, r, e) => {
      var o = e(60228),
        n = e(8088),
        a = e(59687);
      t.exports = function(t) {
        return a(t) ? o(t, !0) : n(t)
      }
    },
    66436: (t, r, e) => {
      var o = e(5704);

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
    14312: (t, r, e) => {
      var o = e(81480),
        n = e(50936)((function(t, r, e, n) {
          o(t, r, e, n)
        }));
      t.exports = n
    },
    52536: (t, r, e) => {
      var o = e(79336);
      t.exports = function(t, r, e, n) {
        return n = "function" == typeof n ? n : void 0, null == t ? t : o(t, r, e, n)
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
    86724: (t, r, e) => {
      var o = e(94888),
        n = e(3280);
      t.exports = function(t) {
        return o(t, n(t))
      }
    },
    62080: (t, r, e) => {
      var o = e(18352);
      t.exports = function(t) {
        return null == t ? "" : o(t)
      }
    },
    85272: (t, r, e) => {
      "use strict";
      e.r(r), e.d(r, {
        ThemeProvider: () => M,
        useColorScheme: () => h,
        useContrastMode: () => y,
        usePlatformScale: () => x,
        usePlatformScaleRatio: () => _,
        useTheme: () => b
      });
      var o = e(95240),
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
        c = "foundry_1tmxzf0aa",
        s = "foundry_1tmxzf0ab",
        i = "foundry_1tmxzf0a8",
        u = "foundry_1tmxzf0a9",
        p = "--foundry_1tmxzf00",
        f = "foundry_1tmxzf01",
        l = e(51664);
      const v = (0, l.createContext)({
          colorScheme: "dark",
          contrastMode: "normal",
          platformScale: "mobile",
          platformScaleRatio: a.mobile
        }),
        d = () => (0, l.useContext)(v),
        b = () => {
          const {
            colorScheme: t,
            contrastMode: r,
            platformScale: e,
            platformScaleRatio: o
          } = d();
          return {
            colorScheme: t,
            contrastMode: r,
            platformScale: e,
            platformScaleRatio: o
          }
        },
        h = () => {
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
        _ = () => {
          const {
            platformScaleRatio: t
          } = d();
          return t
        },
        m = "undefined" == typeof window;

      function j(t) {
        let {
          defaultValue: r = !1,
          initializeWithValue: e = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const o = t => m ? r : window.matchMedia(t).matches,
          [n, a] = (0, l.useState)((() => e ? o(t) : r));

        function c() {
          a(o(t))
        }
        return (0, l.useEffect)((() => {
          const r = window.matchMedia(t);
          return c(), r.addListener ? r.addListener(c) : r.addEventListener("change", c), () => {
            r.removeListener ? r.removeListener(c) : r.removeEventListener("change", c)
          }
        }), [t]), n
      }

      function g(t) {
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
      e(89772), e(14312), e(89048), e(49120), e(17724);
      const w = (t, r, e, o, n) => {
          const a = g(n),
            c = g(t.current);
          (0, l.useEffect)((() => {
            t.current?.classList.contains(f) || t.current?.classList.add(f), t.current?.classList.add(e), t.current?.classList.remove(...o), a && n && t.current?.classList.contains(a) ? t.current?.classList.replace(a, n) : a && !n && t.current?.classList.contains(a) ? t.current?.classList.remove(a) : n && t.current?.classList.add(n)
          }), [e, n]), (0, l.useEffect)((() => {
            t.current?.style.setProperty(p, r.toString())
          }), [r]), (0, l.useEffect)((() => {
            c?.classList.remove(f), c?.classList.remove(e), c?.style.removeProperty(p), n && c?.classList.remove(n)
          }), [c])
        },
        S = (t, r) => "dark" === t ? "more" === r ? s : c : "more" === r ? u : i,
        O = (t, r) => {
          const e = S(t, r);
          return [i, c, u, s].filter((t => t !== e))
        };
      e(52536), e(38584);
      const A = () => m ? null : document.body;

      function M(t) {
        let {
          children: r,
          className: e,
          container: c = A(),
          wrapDiv: s,
          colorScheme: i,
          defaultColorScheme: u,
          contrastMode: p,
          defaultContrastMode: f,
          platformScaleBreakpoints: d,
          platformScaleRatios: b,
          defaultPlatformScale: h,
          platformScale: y
        } = t;
        const x = (0, l.useRef)(s ? null : c),
          {
            ratio: _,
            scale: g
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
              i = () => {
                if (!m) {
                  for (const {
                      handler: t,
                      matchMedia: r
                    }
                    of s.current) r.removeEventListener("change", t);
                  s.current = []
                }
              };
            return (0, l.useEffect)((() => (t.platformScale || (() => {
              if (!m) {
                i();
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
            })(), i)), [e, t.platformScale]), {
              scale: o,
              ratio: r[o]
            }
          }({
            platformScaleBreakpoints: d,
            platformScaleRatios: b,
            defaultPlatformScale: h,
            platformScale: y
          }),
          {
            appearanceClass: M,
            otherAppearanceClasses: k,
            providerColor: z,
            providerContrast: E
          } = function(t) {
            let {
              colorScheme: r,
              defaultColorScheme: e = "dark",
              contrastMode: o,
              defaultContrastMode: n = "normal"
            } = t;
            const a = j("(prefers-color-scheme: light)"),
              c = j("(prefers-color-scheme: dark)"),
              s = j("(prefers-contrast: more)"),
              i = "system" !== r && r || a && "light" || c && "dark" || e,
              u = o || s && "more" || n;
            return {
              appearanceClass: (0, l.useMemo)((() => S(i, u)), [i, u]),
              otherAppearanceClasses: (0, l.useMemo)((() => O(i, u)), [i, u]),
              providerColor: i,
              providerContrast: u
            }
          }({
            colorScheme: i,
            defaultColorScheme: u,
            contrastMode: p,
            defaultContrastMode: f
          });
        return w(x, _, M, k, e), (0, o.jsx)(v.Provider, {
          value: {
            colorScheme: z,
            contrastMode: E,
            platformScale: g,
            platformScaleRatio: _
          },
          children: s ? (0, o.jsx)("div", {
            ref: x,
            children: r
          }) : r
        })
      }
    }
  }
]);