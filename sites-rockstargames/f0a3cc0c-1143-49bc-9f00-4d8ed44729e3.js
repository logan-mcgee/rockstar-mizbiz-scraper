! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "f0a3cc0c-1143-49bc-9f00-4d8ed44729e3", t._sentryDebugIdIdentifier = "sentry-dbid-f0a3cc0c-1143-49bc-9f00-4d8ed44729e3")
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
    43540: (t, e, r) => {
      var o = r(43527)(r(36056), "DataView");
      t.exports = o
    },
    43640: (t, e, r) => {
      var o = r(78600),
        n = r(4648),
        a = r(59528),
        c = r(23920),
        s = r(17144);

      function i(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var o = t[e];
          this.set(o[0], o[1])
        }
      }
      i.prototype.clear = o, i.prototype.delete = n, i.prototype.get = a, i.prototype.has = c, i.prototype.set = s, t.exports = i
    },
    35e3: (t, e, r) => {
      var o = r(6460),
        n = r(26152),
        a = r(85752),
        c = r(24408),
        s = r(71020);

      function i(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var o = t[e];
          this.set(o[0], o[1])
        }
      }
      i.prototype.clear = o, i.prototype.delete = n, i.prototype.get = a, i.prototype.has = c, i.prototype.set = s, t.exports = i
    },
    90856: (t, e, r) => {
      var o = r(43527)(r(36056), "Map");
      t.exports = o
    },
    5704: (t, e, r) => {
      var o = r(3840),
        n = r(63256),
        a = r(67384),
        c = r(95312),
        s = r(1396);

      function i(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var o = t[e];
          this.set(o[0], o[1])
        }
      }
      i.prototype.clear = o, i.prototype.delete = n, i.prototype.get = a, i.prototype.has = c, i.prototype.set = s, t.exports = i
    },
    49844: (t, e, r) => {
      var o = r(43527)(r(36056), "Promise");
      t.exports = o
    },
    78116: (t, e, r) => {
      var o = r(43527)(r(36056), "Set");
      t.exports = o
    },
    12276: (t, e, r) => {
      var o = r(35e3),
        n = r(52080),
        a = r(46272),
        c = r(59e3),
        s = r(75448),
        i = r(35688);

      function u(t) {
        var e = this.__data__ = new o(t);
        this.size = e.size
      }
      u.prototype.clear = n, u.prototype.delete = a, u.prototype.get = c, u.prototype.has = s, u.prototype.set = i, t.exports = u
    },
    6664: (t, e, r) => {
      var o = r(36056).Uint8Array;
      t.exports = o
    },
    91064: (t, e, r) => {
      var o = r(43527)(r(36056), "WeakMap");
      t.exports = o
    },
    9924: t => {
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
    18540: t => {
      t.exports = function(t, e) {
        for (var r = -1, o = null == t ? 0 : t.length; ++r < o && !1 !== e(t[r], r, t););
        return t
      }
    },
    86876: t => {
      t.exports = function(t, e) {
        for (var r = -1, o = null == t ? 0 : t.length, n = 0, a = []; ++r < o;) {
          var c = t[r];
          e(c, r, t) && (a[n++] = c)
        }
        return a
      }
    },
    60228: (t, e, r) => {
      var o = r(48448),
        n = r(45340),
        a = r(28224),
        c = r(91640),
        s = r(38184),
        i = r(30336),
        u = Object.prototype.hasOwnProperty;
      t.exports = function(t, e) {
        var r = a(t),
          p = !r && n(t),
          f = !r && !p && c(t),
          l = !r && !p && !f && i(t),
          v = r || p || f || l,
          d = v ? o(t.length, String) : [],
          h = d.length;
        for (var b in t) !e && !u.call(t, b) || v && ("length" == b || f && ("offset" == b || "parent" == b) || l && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || s(b, h)) || d.push(b);
        return d
      }
    },
    1412: t => {
      t.exports = function(t, e) {
        for (var r = -1, o = null == t ? 0 : t.length, n = Array(o); ++r < o;) n[r] = e(t[r], r, t);
        return n
      }
    },
    60096: t => {
      t.exports = function(t, e) {
        for (var r = -1, o = e.length, n = t.length; ++r < o;) t[n + r] = e[r];
        return t
      }
    },
    50156: (t, e, r) => {
      var o = r(66508),
        n = r(2536);
      t.exports = function(t, e, r) {
        (void 0 !== r && !n(t[e], r) || void 0 === r && !(e in t)) && o(t, e, r)
      }
    },
    85952: (t, e, r) => {
      var o = r(66508),
        n = r(2536),
        a = Object.prototype.hasOwnProperty;
      t.exports = function(t, e, r) {
        var c = t[e];
        a.call(t, e) && n(c, r) && (void 0 !== r || e in t) || o(t, e, r)
      }
    },
    69784: (t, e, r) => {
      var o = r(2536);
      t.exports = function(t, e) {
        for (var r = t.length; r--;)
          if (o(t[r][0], e)) return r;
        return -1
      }
    },
    64816: (t, e, r) => {
      var o = r(94888),
        n = r(60836);
      t.exports = function(t, e) {
        return t && o(e, n(e), t)
      }
    },
    68704: (t, e, r) => {
      var o = r(94888),
        n = r(3280);
      t.exports = function(t, e) {
        return t && o(e, n(e), t)
      }
    },
    66508: (t, e, r) => {
      var o = r(78204);
      t.exports = function(t, e, r) {
        "__proto__" == e && o ? o(t, e, {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        }) : t[e] = r
      }
    },
    51816: (t, e, r) => {
      var o = r(12276),
        n = r(18540),
        a = r(85952),
        c = r(64816),
        s = r(68704),
        i = r(15832),
        u = r(62736),
        p = r(90576),
        f = r(24996),
        l = r(15648),
        v = r(55360),
        d = r(74868),
        h = r(90832),
        b = r(67252),
        y = r(7268),
        x = r(28224),
        _ = r(91640),
        m = r(92128),
        j = r(89048),
        g = r(15264),
        w = r(60836),
        S = r(3280),
        O = "[object Arguments]",
        A = "[object Function]",
        M = "[object Object]",
        k = {};
      k[O] = k["[object Array]"] = k["[object ArrayBuffer]"] = k["[object DataView]"] = k["[object Boolean]"] = k["[object Date]"] = k["[object Float32Array]"] = k["[object Float64Array]"] = k["[object Int8Array]"] = k["[object Int16Array]"] = k["[object Int32Array]"] = k["[object Map]"] = k["[object Number]"] = k[M] = k["[object RegExp]"] = k["[object Set]"] = k["[object String]"] = k["[object Symbol]"] = k["[object Uint8Array]"] = k["[object Uint8ClampedArray]"] = k["[object Uint16Array]"] = k["[object Uint32Array]"] = !0, k["[object Error]"] = k[A] = k["[object WeakMap]"] = !1, t.exports = function t(e, r, z, E, P, C) {
        var L, R = 1 & r,
          I = 2 & r,
          F = 4 & r;
        if (z && (L = P ? z(e, E, P, C) : z(e)), void 0 !== L) return L;
        if (!j(e)) return e;
        var B = x(e);
        if (B) {
          if (L = h(e), !R) return u(e, L)
        } else {
          var D = d(e),
            U = D == A || "[object GeneratorFunction]" == D;
          if (_(e)) return i(e, R);
          if (D == M || D == O || U && !P) {
            if (L = I || U ? {} : y(e), !R) return I ? f(e, s(L, e)) : p(e, c(L, e))
          } else {
            if (!k[D]) return P ? e : {};
            L = b(e, D, R)
          }
        }
        C || (C = new o);
        var T = C.get(e);
        if (T) return T;
        C.set(e, L), g(e) ? e.forEach((function(o) {
          L.add(t(o, r, z, o, e, C))
        })) : m(e) && e.forEach((function(o, n) {
          L.set(n, t(o, r, z, n, e, C))
        }));
        var $ = B ? void 0 : (F ? I ? v : l : I ? S : w)(e);
        return n($ || e, (function(o, n) {
          $ && (o = e[n = o]), a(L, n, t(o, r, z, n, e, C))
        })), L
      }
    },
    34480: (t, e, r) => {
      var o = r(89048),
        n = Object.create,
        a = function() {
          function t() {}
          return function(e) {
            if (!o(e)) return {};
            if (n) return n(e);
            t.prototype = e;
            var r = new t;
            return t.prototype = void 0, r
          }
        }();
      t.exports = a
    },
    81644: (t, e, r) => {
      var o = r(13836)();
      t.exports = o
    },
    1952: (t, e, r) => {
      var o = r(60096),
        n = r(28224);
      t.exports = function(t, e, r) {
        var a = e(t);
        return n(t) ? a : o(a, r(t))
      }
    },
    68856: (t, e, r) => {
      var o = r(95992),
        n = r(72316);
      t.exports = function(t) {
        return n(t) && "[object Arguments]" == o(t)
      }
    },
    88884: (t, e, r) => {
      var o = r(74868),
        n = r(72316);
      t.exports = function(t) {
        return n(t) && "[object Map]" == o(t)
      }
    },
    30380: (t, e, r) => {
      var o = r(49120),
        n = r(38552),
        a = r(89048),
        c = r(29200),
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
    62800: (t, e, r) => {
      var o = r(74868),
        n = r(72316);
      t.exports = function(t) {
        return n(t) && "[object Set]" == o(t)
      }
    },
    71664: (t, e, r) => {
      var o = r(95992),
        n = r(19080),
        a = r(72316),
        c = {};
      c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1, t.exports = function(t) {
        return a(t) && n(t.length) && !!c[o(t)]
      }
    },
    37228: (t, e, r) => {
      var o = r(12944),
        n = r(13696),
        a = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!o(t)) return n(t);
        var e = [];
        for (var r in Object(t)) a.call(t, r) && "constructor" != r && e.push(r);
        return e
      }
    },
    8088: (t, e, r) => {
      var o = r(89048),
        n = r(12944),
        a = r(28067),
        c = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!o(t)) return a(t);
        var e = n(t),
          r = [];
        for (var s in t)("constructor" != s || !e && c.call(t, s)) && r.push(s);
        return r
      }
    },
    81480: (t, e, r) => {
      var o = r(12276),
        n = r(50156),
        a = r(81644),
        c = r(46261),
        s = r(89048),
        i = r(3280),
        u = r(68040);
      t.exports = function t(e, r, p, f, l) {
        e !== r && a(r, (function(a, i) {
          if (l || (l = new o), s(a)) c(e, r, i, p, t, f, l);
          else {
            var v = f ? f(u(e, i), a, i + "", e, r, l) : void 0;
            void 0 === v && (v = a), n(e, i, v)
          }
        }), i)
      }
    },
    46261: (t, e, r) => {
      var o = r(50156),
        n = r(15832),
        a = r(3456),
        c = r(62736),
        s = r(7268),
        i = r(45340),
        u = r(28224),
        p = r(62480),
        f = r(91640),
        l = r(49120),
        v = r(89048),
        d = r(93592),
        h = r(30336),
        b = r(68040),
        y = r(86724);
      t.exports = function(t, e, r, x, _, m, j) {
        var g = b(t, r),
          w = b(e, r),
          S = j.get(w);
        if (S) o(t, r, S);
        else {
          var O = m ? m(g, w, r + "", t, e, j) : void 0,
            A = void 0 === O;
          if (A) {
            var M = u(w),
              k = !M && f(w),
              z = !M && !k && h(w);
            O = w, M || k || z ? u(g) ? O = g : p(g) ? O = c(g) : k ? (A = !1, O = n(w, !0)) : z ? (A = !1, O = a(w, !0)) : O = [] : d(w) || i(w) ? (O = g, i(g) ? O = y(g) : v(g) && !l(g) || (O = s(w))) : A = !1
          }
          A && (j.set(w, O), _(O, w, x, m, j), j.delete(w)), o(t, r, O)
        }
      }
    },
    70867: (t, e, r) => {
      var o = r(89848),
        n = r(39676),
        a = r(57396);
      t.exports = function(t, e) {
        return a(n(t, e, o), t + "")
      }
    },
    79336: (t, e, r) => {
      var o = r(85952),
        n = r(75328),
        a = r(38184),
        c = r(89048),
        s = r(92264);
      t.exports = function(t, e, r, i) {
        if (!c(t)) return t;
        for (var u = -1, p = (e = n(e, t)).length, f = p - 1, l = t; null != l && ++u < p;) {
          var v = s(e[u]),
            d = r;
          if ("__proto__" === v || "constructor" === v || "prototype" === v) return t;
          if (u != f) {
            var h = l[v];
            void 0 === (d = i ? i(h, v, l) : void 0) && (d = c(h) ? h : a(e[u + 1]) ? [] : {})
          }
          o(l, v, d), l = l[v]
        }
        return t
      }
    },
    11632: (t, e, r) => {
      var o = r(76088),
        n = r(78204),
        a = r(89848),
        c = n ? function(t, e) {
          return n(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: o(e),
            writable: !0
          })
        } : a;
      t.exports = c
    },
    48448: t => {
      t.exports = function(t, e) {
        for (var r = -1, o = Array(t); ++r < t;) o[r] = e(r);
        return o
      }
    },
    18352: (t, e, r) => {
      var o = r(31580),
        n = r(1412),
        a = r(28224),
        c = r(77084),
        s = o ? o.prototype : void 0,
        i = s ? s.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (a(e)) return n(e, t) + "";
        if (c(e)) return i ? i.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -1 / 0 ? "-0" : r
      }
    },
    10976: t => {
      t.exports = function(t) {
        return function(e) {
          return t(e)
        }
      }
    },
    75328: (t, e, r) => {
      var o = r(28224),
        n = r(61128),
        a = r(35748),
        c = r(62080);
      t.exports = function(t, e) {
        return o(t) ? t : n(t, e) ? [t] : a(c(t))
      }
    },
    72712: (t, e, r) => {
      var o = r(6664);
      t.exports = function(t) {
        var e = new t.constructor(t.byteLength);
        return new o(e).set(new o(t)), e
      }
    },
    15832: (t, e, r) => {
      t = r.nmd(t);
      var o = r(36056),
        n = e && !e.nodeType && e,
        a = n && t && !t.nodeType && t,
        c = a && a.exports === n ? o.Buffer : void 0,
        s = c ? c.allocUnsafe : void 0;
      t.exports = function(t, e) {
        if (e) return t.slice();
        var r = t.length,
          o = s ? s(r) : new t.constructor(r);
        return t.copy(o), o
      }
    },
    41452: (t, e, r) => {
      var o = r(72712);
      t.exports = function(t, e) {
        var r = e ? o(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.byteLength)
      }
    },
    93077: t => {
      var e = /\w*$/;
      t.exports = function(t) {
        var r = new t.constructor(t.source, e.exec(t));
        return r.lastIndex = t.lastIndex, r
      }
    },
    13235: (t, e, r) => {
      var o = r(31580),
        n = o ? o.prototype : void 0,
        a = n ? n.valueOf : void 0;
      t.exports = function(t) {
        return a ? Object(a.call(t)) : {}
      }
    },
    3456: (t, e, r) => {
      var o = r(72712);
      t.exports = function(t, e) {
        var r = e ? o(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
      }
    },
    62736: t => {
      t.exports = function(t, e) {
        var r = -1,
          o = t.length;
        for (e || (e = Array(o)); ++r < o;) e[r] = t[r];
        return e
      }
    },
    94888: (t, e, r) => {
      var o = r(85952),
        n = r(66508);
      t.exports = function(t, e, r, a) {
        var c = !r;
        r || (r = {});
        for (var s = -1, i = e.length; ++s < i;) {
          var u = e[s],
            p = a ? a(r[u], t[u], u, r, t) : void 0;
          void 0 === p && (p = t[u]), c ? n(r, u, p) : o(r, u, p)
        }
        return r
      }
    },
    90576: (t, e, r) => {
      var o = r(94888),
        n = r(19655);
      t.exports = function(t, e) {
        return o(t, n(t), e)
      }
    },
    24996: (t, e, r) => {
      var o = r(94888),
        n = r(20140);
      t.exports = function(t, e) {
        return o(t, n(t), e)
      }
    },
    81704: (t, e, r) => {
      var o = r(36056)["__core-js_shared__"];
      t.exports = o
    },
    50936: (t, e, r) => {
      var o = r(70867),
        n = r(45920);
      t.exports = function(t) {
        return o((function(e, r) {
          var o = -1,
            a = r.length,
            c = a > 1 ? r[a - 1] : void 0,
            s = a > 2 ? r[2] : void 0;
          for (c = t.length > 3 && "function" == typeof c ? (a--, c) : void 0, s && n(r[0], r[1], s) && (c = a < 3 ? void 0 : c, a = 1), e = Object(e); ++o < a;) {
            var i = r[o];
            i && t(e, i, o, c)
          }
          return e
        }))
      }
    },
    13836: t => {
      t.exports = function(t) {
        return function(e, r, o) {
          for (var n = -1, a = Object(e), c = o(e), s = c.length; s--;) {
            var i = c[t ? s : ++n];
            if (!1 === r(a[i], i, a)) break
          }
          return e
        }
      }
    },
    78204: (t, e, r) => {
      var o = r(43527),
        n = function() {
          try {
            var t = o(Object, "defineProperty");
            return t({}, "", {}), t
          } catch (t) {}
        }();
      t.exports = n
    },
    15648: (t, e, r) => {
      var o = r(1952),
        n = r(19655),
        a = r(60836);
      t.exports = function(t) {
        return o(t, a, n)
      }
    },
    55360: (t, e, r) => {
      var o = r(1952),
        n = r(20140),
        a = r(3280);
      t.exports = function(t) {
        return o(t, a, n)
      }
    },
    46612: (t, e, r) => {
      var o = r(40288);
      t.exports = function(t, e) {
        var r = t.__data__;
        return o(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
      }
    },
    43527: (t, e, r) => {
      var o = r(30380),
        n = r(34848);
      t.exports = function(t, e) {
        var r = n(t, e);
        return o(r) ? r : void 0
      }
    },
    47972: (t, e, r) => {
      var o = r(80980)(Object.getPrototypeOf, Object);
      t.exports = o
    },
    19655: (t, e, r) => {
      var o = r(86876),
        n = r(57080),
        a = Object.prototype.propertyIsEnumerable,
        c = Object.getOwnPropertySymbols,
        s = c ? function(t) {
          return null == t ? [] : (t = Object(t), o(c(t), (function(e) {
            return a.call(t, e)
          })))
        } : n;
      t.exports = s
    },
    20140: (t, e, r) => {
      var o = r(60096),
        n = r(47972),
        a = r(19655),
        c = r(57080),
        s = Object.getOwnPropertySymbols ? function(t) {
          for (var e = []; t;) o(e, a(t)), t = n(t);
          return e
        } : c;
      t.exports = s
    },
    74868: (t, e, r) => {
      var o = r(43540),
        n = r(90856),
        a = r(49844),
        c = r(78116),
        s = r(91064),
        i = r(95992),
        u = r(29200),
        p = "[object Map]",
        f = "[object Promise]",
        l = "[object Set]",
        v = "[object WeakMap]",
        d = "[object DataView]",
        h = u(o),
        b = u(n),
        y = u(a),
        x = u(c),
        _ = u(s),
        m = i;
      (o && m(new o(new ArrayBuffer(1))) != d || n && m(new n) != p || a && m(a.resolve()) != f || c && m(new c) != l || s && m(new s) != v) && (m = function(t) {
        var e = i(t),
          r = "[object Object]" == e ? t.constructor : void 0,
          o = r ? u(r) : "";
        if (o) switch (o) {
          case h:
            return d;
          case b:
            return p;
          case y:
            return f;
          case x:
            return l;
          case _:
            return v
        }
        return e
      }), t.exports = m
    },
    34848: t => {
      t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
      }
    },
    78600: (t, e, r) => {
      var o = r(63368);
      t.exports = function() {
        this.__data__ = o ? o(null) : {}, this.size = 0
      }
    },
    4648: t => {
      t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
      }
    },
    59528: (t, e, r) => {
      var o = r(63368),
        n = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = this.__data__;
        if (o) {
          var r = e[t];
          return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return n.call(e, t) ? e[t] : void 0
      }
    },
    23920: (t, e, r) => {
      var o = r(63368),
        n = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = this.__data__;
        return o ? void 0 !== e[t] : n.call(e, t)
      }
    },
    17144: (t, e, r) => {
      var o = r(63368);
      t.exports = function(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = o && void 0 === e ? "__lodash_hash_undefined__" : e, this
      }
    },
    90832: t => {
      var e = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var r = t.length,
          o = new t.constructor(r);
        return r && "string" == typeof t[0] && e.call(t, "index") && (o.index = t.index, o.input = t.input), o
      }
    },
    67252: (t, e, r) => {
      var o = r(72712),
        n = r(41452),
        a = r(93077),
        c = r(13235),
        s = r(3456);
      t.exports = function(t, e, r) {
        var i = t.constructor;
        switch (e) {
          case "[object ArrayBuffer]":
            return o(t);
          case "[object Boolean]":
          case "[object Date]":
            return new i(+t);
          case "[object DataView]":
            return n(t, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return s(t, r);
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
    7268: (t, e, r) => {
      var o = r(34480),
        n = r(47972),
        a = r(12944);
      t.exports = function(t) {
        return "function" != typeof t.constructor || a(t) ? {} : o(n(t))
      }
    },
    38184: t => {
      var e = /^(?:0|[1-9]\d*)$/;
      t.exports = function(t, r) {
        var o = typeof t;
        return !!(r = null == r ? 9007199254740991 : r) && ("number" == o || "symbol" != o && e.test(t)) && t > -1 && t % 1 == 0 && t < r
      }
    },
    45920: (t, e, r) => {
      var o = r(2536),
        n = r(59687),
        a = r(38184),
        c = r(89048);
      t.exports = function(t, e, r) {
        if (!c(r)) return !1;
        var s = typeof e;
        return !!("number" == s ? n(r) && a(e, r.length) : "string" == s && e in r) && o(r[e], t)
      }
    },
    61128: (t, e, r) => {
      var o = r(28224),
        n = r(77084),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        c = /^\w*$/;
      t.exports = function(t, e) {
        if (o(t)) return !1;
        var r = typeof t;
        return !("number" != r && "symbol" != r && "boolean" != r && null != t && !n(t)) || c.test(t) || !a.test(t) || null != e && t in Object(e)
      }
    },
    40288: t => {
      t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
      }
    },
    38552: (t, e, r) => {
      var o, n = r(81704),
        a = (o = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "";
      t.exports = function(t) {
        return !!a && a in t
      }
    },
    12944: t => {
      var e = Object.prototype;
      t.exports = function(t) {
        var r = t && t.constructor;
        return t === ("function" == typeof r && r.prototype || e)
      }
    },
    6460: t => {
      t.exports = function() {
        this.__data__ = [], this.size = 0
      }
    },
    26152: (t, e, r) => {
      var o = r(69784),
        n = Array.prototype.splice;
      t.exports = function(t) {
        var e = this.__data__,
          r = o(e, t);
        return !(r < 0 || (r == e.length - 1 ? e.pop() : n.call(e, r, 1), --this.size, 0))
      }
    },
    85752: (t, e, r) => {
      var o = r(69784);
      t.exports = function(t) {
        var e = this.__data__,
          r = o(e, t);
        return r < 0 ? void 0 : e[r][1]
      }
    },
    24408: (t, e, r) => {
      var o = r(69784);
      t.exports = function(t) {
        return o(this.__data__, t) > -1
      }
    },
    71020: (t, e, r) => {
      var o = r(69784);
      t.exports = function(t, e) {
        var r = this.__data__,
          n = o(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
      }
    },
    3840: (t, e, r) => {
      var o = r(43640),
        n = r(35e3),
        a = r(90856);
      t.exports = function() {
        this.size = 0, this.__data__ = {
          hash: new o,
          map: new(a || n),
          string: new o
        }
      }
    },
    63256: (t, e, r) => {
      var o = r(46612);
      t.exports = function(t) {
        var e = o(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
      }
    },
    67384: (t, e, r) => {
      var o = r(46612);
      t.exports = function(t) {
        return o(this, t).get(t)
      }
    },
    95312: (t, e, r) => {
      var o = r(46612);
      t.exports = function(t) {
        return o(this, t).has(t)
      }
    },
    1396: (t, e, r) => {
      var o = r(46612);
      t.exports = function(t, e) {
        var r = o(this, t),
          n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
      }
    },
    22336: (t, e, r) => {
      var o = r(66436);
      t.exports = function(t) {
        var e = o(t, (function(t) {
            return 500 === r.size && r.clear(), t
          })),
          r = e.cache;
        return e
      }
    },
    63368: (t, e, r) => {
      var o = r(43527)(Object, "create");
      t.exports = o
    },
    13696: (t, e, r) => {
      var o = r(80980)(Object.keys, Object);
      t.exports = o
    },
    28067: t => {
      t.exports = function(t) {
        var e = [];
        if (null != t)
          for (var r in Object(t)) e.push(r);
        return e
      }
    },
    99464: (t, e, r) => {
      t = r.nmd(t);
      var o = r(81044),
        n = e && !e.nodeType && e,
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
      t.exports = function(t, e) {
        return function(r) {
          return t(e(r))
        }
      }
    },
    39676: (t, e, r) => {
      var o = r(9924),
        n = Math.max;
      t.exports = function(t, e, r) {
        return e = n(void 0 === e ? t.length - 1 : e, 0),
          function() {
            for (var a = arguments, c = -1, s = n(a.length - e, 0), i = Array(s); ++c < s;) i[c] = a[e + c];
            c = -1;
            for (var u = Array(e + 1); ++c < e;) u[c] = a[c];
            return u[e] = r(i), o(t, this, u)
          }
      }
    },
    68040: t => {
      t.exports = function(t, e) {
        if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
      }
    },
    57396: (t, e, r) => {
      var o = r(11632),
        n = r(2360)(o);
      t.exports = n
    },
    2360: t => {
      var e = Date.now;
      t.exports = function(t) {
        var r = 0,
          o = 0;
        return function() {
          var n = e(),
            a = 16 - (n - o);
          if (o = n, a > 0) {
            if (++r >= 800) return arguments[0]
          } else r = 0;
          return t.apply(void 0, arguments)
        }
      }
    },
    52080: (t, e, r) => {
      var o = r(35e3);
      t.exports = function() {
        this.__data__ = new o, this.size = 0
      }
    },
    46272: t => {
      t.exports = function(t) {
        var e = this.__data__,
          r = e.delete(t);
        return this.size = e.size, r
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
    35688: (t, e, r) => {
      var o = r(35e3),
        n = r(90856),
        a = r(5704);
      t.exports = function(t, e) {
        var r = this.__data__;
        if (r instanceof o) {
          var c = r.__data__;
          if (!n || c.length < 199) return c.push([t, e]), this.size = ++r.size, this;
          r = this.__data__ = new a(c)
        }
        return r.set(t, e), this.size = r.size, this
      }
    },
    35748: (t, e, r) => {
      var o = r(22336),
        n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        c = o((function(t) {
          var e = [];
          return 46 === t.charCodeAt(0) && e.push(""), t.replace(n, (function(t, r, o, n) {
            e.push(o ? n.replace(a, "$1") : r || t)
          })), e
        }));
      t.exports = c
    },
    92264: (t, e, r) => {
      var o = r(77084);
      t.exports = function(t) {
        if ("string" == typeof t || o(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -1 / 0 ? "-0" : e
      }
    },
    29200: t => {
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
    38584: (t, e, r) => {
      var o = r(51816);
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
      t.exports = function(t, e) {
        return t === e || t != t && e != e
      }
    },
    89848: t => {
      t.exports = function(t) {
        return t
      }
    },
    45340: (t, e, r) => {
      var o = r(68856),
        n = r(72316),
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
      var e = Array.isArray;
      t.exports = e
    },
    59687: (t, e, r) => {
      var o = r(49120),
        n = r(19080);
      t.exports = function(t) {
        return null != t && n(t.length) && !o(t)
      }
    },
    62480: (t, e, r) => {
      var o = r(59687),
        n = r(72316);
      t.exports = function(t) {
        return n(t) && o(t)
      }
    },
    91640: (t, e, r) => {
      t = r.nmd(t);
      var o = r(36056),
        n = r(87732),
        a = e && !e.nodeType && e,
        c = a && t && !t.nodeType && t,
        s = c && c.exports === a ? o.Buffer : void 0,
        i = (s ? s.isBuffer : void 0) || n;
      t.exports = i
    },
    49120: (t, e, r) => {
      var o = r(95992),
        n = r(89048);
      t.exports = function(t) {
        if (!n(t)) return !1;
        var e = o(t);
        return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
      }
    },
    19080: t => {
      t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
      }
    },
    92128: (t, e, r) => {
      var o = r(88884),
        n = r(10976),
        a = r(99464),
        c = a && a.isMap,
        s = c ? n(c) : o;
      t.exports = s
    },
    93592: (t, e, r) => {
      var o = r(95992),
        n = r(47972),
        a = r(72316),
        c = Function.prototype,
        s = Object.prototype,
        i = c.toString,
        u = s.hasOwnProperty,
        p = i.call(Object);
      t.exports = function(t) {
        if (!a(t) || "[object Object]" != o(t)) return !1;
        var e = n(t);
        if (null === e) return !0;
        var r = u.call(e, "constructor") && e.constructor;
        return "function" == typeof r && r instanceof r && i.call(r) == p
      }
    },
    15264: (t, e, r) => {
      var o = r(62800),
        n = r(10976),
        a = r(99464),
        c = a && a.isSet,
        s = c ? n(c) : o;
      t.exports = s
    },
    17724: (t, e, r) => {
      var o = r(95992),
        n = r(28224),
        a = r(72316);
      t.exports = function(t) {
        return "string" == typeof t || !n(t) && a(t) && "[object String]" == o(t)
      }
    },
    30336: (t, e, r) => {
      var o = r(71664),
        n = r(10976),
        a = r(99464),
        c = a && a.isTypedArray,
        s = c ? n(c) : o;
      t.exports = s
    },
    60836: (t, e, r) => {
      var o = r(60228),
        n = r(37228),
        a = r(59687);
      t.exports = function(t) {
        return a(t) ? o(t) : n(t)
      }
    },
    3280: (t, e, r) => {
      var o = r(60228),
        n = r(8088),
        a = r(59687);
      t.exports = function(t) {
        return a(t) ? o(t, !0) : n(t)
      }
    },
    66436: (t, e, r) => {
      var o = r(5704);

      function n(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
        var r = function() {
          var o = arguments,
            n = e ? e.apply(this, o) : o[0],
            a = r.cache;
          if (a.has(n)) return a.get(n);
          var c = t.apply(this, o);
          return r.cache = a.set(n, c) || a, c
        };
        return r.cache = new(n.Cache || o), r
      }
      n.Cache = o, t.exports = n
    },
    14312: (t, e, r) => {
      var o = r(81480),
        n = r(50936)((function(t, e, r, n) {
          o(t, e, r, n)
        }));
      t.exports = n
    },
    52536: (t, e, r) => {
      var o = r(79336);
      t.exports = function(t, e, r, n) {
        return n = "function" == typeof n ? n : void 0, null == t ? t : o(t, e, r, n)
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
    86724: (t, e, r) => {
      var o = r(94888),
        n = r(3280);
      t.exports = function(t) {
        return o(t, n(t))
      }
    },
    62080: (t, e, r) => {
      var o = r(18352);
      t.exports = function(t) {
        return null == t ? "" : o(t)
      }
    },
    85272: (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        ThemeProvider: () => M,
        useColorScheme: () => b,
        useContrastMode: () => y,
        usePlatformScale: () => x,
        usePlatformScaleRatio: () => _,
        useTheme: () => h
      });
      var o = r(95240),
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
        l = r(51664);
      const v = (0, l.createContext)({
          colorScheme: "dark",
          contrastMode: "normal",
          platformScale: "mobile",
          platformScaleRatio: a.mobile
        }),
        d = () => (0, l.useContext)(v),
        h = () => {
          const {
            colorScheme: t,
            contrastMode: e,
            platformScale: r,
            platformScaleRatio: o
          } = d();
          return {
            colorScheme: t,
            contrastMode: e,
            platformScale: r,
            platformScaleRatio: o
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
        _ = () => {
          const {
            platformScaleRatio: t
          } = d();
          return t
        },
        m = "undefined" == typeof window;

      function j(t) {
        let {
          defaultValue: e = !1,
          initializeWithValue: r = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const o = t => m ? e : window.matchMedia(t).matches,
          [n, a] = (0, l.useState)((() => r ? o(t) : e));

        function c() {
          a(o(t))
        }
        return (0, l.useEffect)((() => {
          const e = window.matchMedia(t);
          return c(), e.addListener ? e.addListener(c) : e.addEventListener("change", c), () => {
            e.removeListener ? e.removeListener(c) : e.removeEventListener("change", c)
          }
        }), [t]), n
      }

      function g(t) {
        const e = (0, l.useRef)({
            value: t,
            prev: void 0
          }),
          r = e.current.value;
        return t !== r && (e.current = {
          value: t,
          prev: r
        }), e.current.prev
      }
      r(89772), r(14312), r(89048), r(49120), r(17724);
      const w = (t, e, r, o, n) => {
          const a = g(n),
            c = g(t.current);
          (0, l.useEffect)((() => {
            t.current?.classList.contains(f) || t.current?.classList.add(f), t.current?.classList.add(r), t.current?.classList.remove(...o), a && n && t.current?.classList.contains(a) ? t.current?.classList.replace(a, n) : a && !n && t.current?.classList.contains(a) ? t.current?.classList.remove(a) : n && t.current?.classList.add(n)
          }), [r, n]), (0, l.useEffect)((() => {
            t.current?.style.setProperty(p, e.toString())
          }), [e]), (0, l.useEffect)((() => {
            c?.classList.remove(f), c?.classList.remove(r), c?.style.removeProperty(p), n && c?.classList.remove(n)
          }), [c])
        },
        S = (t, e) => "dark" === t ? "more" === e ? s : c : "more" === e ? u : i,
        O = (t, e) => {
          const r = S(t, e);
          return [i, c, u, s].filter((t => t !== r))
        };
      r(52536), r(38584);
      const A = () => m ? null : document.body;

      function M(t) {
        let {
          children: e,
          className: r,
          container: c = A(),
          wrapDiv: s,
          colorScheme: i,
          defaultColorScheme: u,
          contrastMode: p,
          defaultContrastMode: f,
          platformScaleBreakpoints: d,
          platformScaleRatios: h,
          defaultPlatformScale: b,
          platformScale: y
        } = t;
        const x = (0, l.useRef)(s ? null : c),
          {
            ratio: _,
            scale: g
          } = function(t) {
            const e = (0, l.useMemo)((() => ({
                ...a,
                ...t.platformScaleRatios
              })), [t.platformScaleRatios]),
              r = (0, l.useMemo)((() => ({
                ...n,
                ...t.platformScaleBreakpoints
              })), [t.platformScaleBreakpoints]),
              [o, c] = (0, l.useState)(t.platformScale || t.defaultPlatformScale),
              s = (0, l.useRef)([]),
              i = () => {
                if (!m) {
                  for (const {
                      handler: t,
                      matchMedia: e
                    }
                    of s.current) e.removeEventListener("change", t);
                  s.current = []
                }
              };
            return (0, l.useEffect)((() => (t.platformScale || (() => {
              if (!m) {
                i();
                for (const t in r) {
                  const e = window.matchMedia(r[t]),
                    o = e => {
                      e.matches && c(t)
                    };
                  e.addEventListener("change", o), e.matches && c(t), s.current.push({
                    handler: o,
                    matchMedia: e
                  })
                }
              }
            })(), i)), [r, t.platformScale]), {
              scale: o,
              ratio: e[o]
            }
          }({
            platformScaleBreakpoints: d,
            platformScaleRatios: h,
            defaultPlatformScale: b,
            platformScale: y
          }),
          {
            appearanceClass: M,
            otherAppearanceClasses: k,
            providerColor: z,
            providerContrast: E
          } = function(t) {
            let {
              colorScheme: e,
              defaultColorScheme: r = "dark",
              contrastMode: o,
              defaultContrastMode: n = "normal"
            } = t;
            const a = j("(prefers-color-scheme: light)"),
              c = j("(prefers-color-scheme: dark)"),
              s = j("(prefers-contrast: more)"),
              i = "system" !== e && e || a && "light" || c && "dark" || r,
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
        return w(x, _, M, k, r), (0, o.jsx)(v.Provider, {
          value: {
            colorScheme: z,
            contrastMode: E,
            platformScale: g,
            platformScaleRatio: _
          },
          children: s ? (0, o.jsx)("div", {
            ref: x,
            children: e
          }) : e
        })
      }
    }
  }
]);