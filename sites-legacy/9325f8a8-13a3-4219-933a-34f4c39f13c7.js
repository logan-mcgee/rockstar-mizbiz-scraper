try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "9325f8a8-13a3-4219-933a-34f4c39f13c7", t._sentryDebugIdIdentifier = "sentry-dbid-9325f8a8-13a3-4219-933a-34f4c39f13c7")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [5201], {
    21441(t, e, r) {
      "use strict";

      function n(t) {
        var e = Object.create(null);
        return function(r) {
          return void 0 === e[r] && (e[r] = t(r)), e[r]
        }
      }
      r.d(e, {
        A: () => n
      })
    },
    38676(t, e, r) {
      var n = r(49958)(r(84373), "DataView");
      t.exports = n
    },
    62293(t, e, r) {
      var n = r(37592),
        i = r(54862),
        o = r(76665),
        s = r(62773),
        a = r(69661);

      function u(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var n = t[e];
          this.set(n[0], n[1])
        }
      }
      u.prototype.clear = n, u.prototype.delete = i, u.prototype.get = o, u.prototype.has = s, u.prototype.set = a, t.exports = u
    },
    14935(t, e, r) {
      var n = r(50526),
        i = r(50008),
        o = r(19195),
        s = r(60119),
        a = r(65663);

      function u(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var n = t[e];
          this.set(n[0], n[1])
        }
      }
      u.prototype.clear = n, u.prototype.delete = i, u.prototype.get = o, u.prototype.has = s, u.prototype.set = a, t.exports = u
    },
    4487(t, e, r) {
      var n = r(49958)(r(84373), "Map");
      t.exports = n
    },
    75365(t, e, r) {
      var n = r(70632),
        i = r(64222),
        o = r(76169),
        s = r(46213),
        a = r(7341);

      function u(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var n = t[e];
          this.set(n[0], n[1])
        }
      }
      u.prototype.clear = n, u.prototype.delete = i, u.prototype.get = o, u.prototype.has = s, u.prototype.set = a, t.exports = u
    },
    41804(t, e, r) {
      var n = r(49958)(r(84373), "Promise");
      t.exports = n
    },
    77017(t, e, r) {
      var n = r(49958)(r(84373), "Set");
      t.exports = n
    },
    90889(t, e, r) {
      var n = r(14935),
        i = r(90308),
        o = r(63090),
        s = r(39245),
        a = r(64641),
        u = r(82953);

      function c(t) {
        var e = this.__data__ = new n(t);
        this.size = e.size
      }
      c.prototype.clear = i, c.prototype.delete = o, c.prototype.get = s, c.prototype.has = a, c.prototype.set = u, t.exports = c
    },
    64617(t, e, r) {
      var n = r(84373).Symbol;
      t.exports = n
    },
    86508(t, e, r) {
      var n = r(84373).Uint8Array;
      t.exports = n
    },
    45991(t, e, r) {
      var n = r(49958)(r(84373), "WeakMap");
      t.exports = n
    },
    66569(t) {
      t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
        return t
      }
    },
    87682(t) {
      t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, i = 0, o = []; ++r < n;) {
          var s = t[r];
          e(s, r, t) && (o[i++] = s)
        }
        return o
      }
    },
    61887(t, e, r) {
      var n = r(20328),
        i = r(43124),
        o = r(63577),
        s = r(39968),
        a = r(15313),
        u = r(70247),
        c = Object.prototype.hasOwnProperty;
      t.exports = function(t, e) {
        var r = o(t),
          p = !r && i(t),
          h = !r && !p && s(t),
          l = !r && !p && !h && u(t),
          f = r || p || h || l,
          d = f ? n(t.length, String) : [],
          v = d.length;
        for (var b in t) !e && !c.call(t, b) || f && ("length" == b || h && ("offset" == b || "parent" == b) || l && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || a(b, v)) || d.push(b);
        return d
      }
    },
    75708(t) {
      t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n;) i[r] = e(t[r], r, t);
        return i
      }
    },
    8568(t) {
      t.exports = function(t, e) {
        for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r];
        return t
      }
    },
    87147(t, e, r) {
      var n = r(4584),
        i = r(1504),
        o = Object.prototype.hasOwnProperty;
      t.exports = function(t, e, r) {
        var s = t[e];
        o.call(t, e) && i(s, r) && (void 0 !== r || e in t) || n(t, e, r)
      }
    },
    6785(t, e, r) {
      var n = r(1504);
      t.exports = function(t, e) {
        for (var r = t.length; r--;)
          if (n(t[r][0], e)) return r;
        return -1
      }
    },
    24181(t, e, r) {
      var n = r(38439),
        i = r(59990);
      t.exports = function(t, e) {
        return t && n(e, i(e), t)
      }
    },
    87462(t, e, r) {
      var n = r(38439),
        i = r(71169);
      t.exports = function(t, e) {
        return t && n(e, i(e), t)
      }
    },
    4584(t, e, r) {
      var n = r(78403);
      t.exports = function(t, e, r) {
        "__proto__" == e && n ? n(t, e, {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        }) : t[e] = r
      }
    },
    5559(t, e, r) {
      var n = r(90889),
        i = r(66569),
        o = r(87147),
        s = r(24181),
        a = r(87462),
        u = r(34674),
        c = r(5863),
        p = r(62023),
        h = r(34316),
        l = r(43706),
        f = r(8221),
        d = r(69645),
        v = r(96373),
        b = r(87335),
        y = r(88673),
        g = r(63577),
        w = r(39968),
        x = r(45290),
        m = r(36373),
        j = r(71280),
        _ = r(59990),
        z = r(71169),
        A = "[object Arguments]",
        O = "[object Function]",
        S = "[object Object]",
        R = {};
      R[A] = R["[object Array]"] = R["[object ArrayBuffer]"] = R["[object DataView]"] = R["[object Boolean]"] = R["[object Date]"] = R["[object Float32Array]"] = R["[object Float64Array]"] = R["[object Int8Array]"] = R["[object Int16Array]"] = R["[object Int32Array]"] = R["[object Map]"] = R["[object Number]"] = R[S] = R["[object RegExp]"] = R["[object Set]"] = R["[object String]"] = R["[object Symbol]"] = R["[object Uint8Array]"] = R["[object Uint8ClampedArray]"] = R["[object Uint16Array]"] = R["[object Uint32Array]"] = !0, R["[object Error]"] = R[O] = R["[object WeakMap]"] = !1, t.exports = function t(e, r, E, W, M, P) {
        var k, T = 1 & r,
          B = 2 & r,
          N = 4 & r;
        if (E && (k = M ? E(e, W, M, P) : E(e)), void 0 !== k) return k;
        if (!m(e)) return e;
        var L = g(e);
        if (L) {
          if (k = v(e), !T) return c(e, k)
        } else {
          var D = d(e),
            U = D == O || "[object GeneratorFunction]" == D;
          if (w(e)) return u(e, T);
          if (D == S || D == A || U && !M) {
            if (k = B || U ? {} : y(e), !T) return B ? h(e, a(k, e)) : p(e, s(k, e))
          } else {
            if (!R[D]) return M ? e : {};
            k = b(e, D, T)
          }
        }
        P || (P = new n);
        var C = P.get(e);
        if (C) return C;
        P.set(e, k), j(e) ? e.forEach(function(n) {
          k.add(t(n, r, E, n, e, P))
        }) : x(e) && e.forEach(function(n, i) {
          k.set(i, t(n, r, E, i, e, P))
        });
        var H = L ? void 0 : (N ? B ? f : l : B ? z : _)(e);
        return i(H || e, function(n, i) {
          H && (n = e[i = n]), o(k, i, t(n, r, E, i, e, P))
        }), k
      }
    },
    65976(t, e, r) {
      var n = r(36373),
        i = Object.create,
        o = function() {
          function t() {}
          return function(e) {
            if (!n(e)) return {};
            if (i) return i(e);
            t.prototype = e;
            var r = new t;
            return t.prototype = void 0, r
          }
        }();
      t.exports = o
    },
    85089(t, e, r) {
      var n = r(29789)();
      t.exports = n
    },
    69526(t, e, r) {
      var n = r(71025),
        i = r(30285);
      t.exports = function(t, e) {
        for (var r = 0, o = (e = n(e, t)).length; null != t && r < o;) t = t[i(e[r++])];
        return r && r == o ? t : void 0
      }
    },
    77023(t, e, r) {
      var n = r(8568),
        i = r(63577);
      t.exports = function(t, e, r) {
        var o = e(t);
        return i(t) ? o : n(o, r(t))
      }
    },
    46224(t, e, r) {
      var n = r(64617),
        i = r(94475),
        o = r(1550),
        s = n ? n.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : s && s in Object(t) ? i(t) : o(t)
      }
    },
    84182(t, e, r) {
      var n = r(46224),
        i = r(5698);
      t.exports = function(t) {
        return i(t) && "[object Arguments]" == n(t)
      }
    },
    61484(t, e, r) {
      var n = r(69645),
        i = r(5698);
      t.exports = function(t) {
        return i(t) && "[object Map]" == n(t)
      }
    },
    87795(t, e, r) {
      var n = r(49426),
        i = r(50168),
        o = r(36373),
        s = r(96217),
        a = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        c = Object.prototype,
        p = u.toString,
        h = c.hasOwnProperty,
        l = RegExp("^" + p.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      t.exports = function(t) {
        return !(!o(t) || i(t)) && (n(t) ? l : a).test(s(t))
      }
    },
    76142(t, e, r) {
      var n = r(69645),
        i = r(5698);
      t.exports = function(t) {
        return i(t) && "[object Set]" == n(t)
      }
    },
    17213(t, e, r) {
      var n = r(46224),
        i = r(37118),
        o = r(5698),
        s = {};
      s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, t.exports = function(t) {
        return o(t) && i(t.length) && !!s[n(t)]
      }
    },
    93056(t, e, r) {
      var n = r(70879),
        i = r(78282),
        o = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!n(t)) return i(t);
        var e = [];
        for (var r in Object(t)) o.call(t, r) && "constructor" != r && e.push(r);
        return e
      }
    },
    77199(t, e, r) {
      var n = r(36373),
        i = r(70879),
        o = r(72237),
        s = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!n(t)) return o(t);
        var e = i(t),
          r = [];
        for (var a in t)("constructor" != a || !e && s.call(t, a)) && r.push(a);
        return r
      }
    },
    20328(t) {
      t.exports = function(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
      }
    },
    61612(t, e, r) {
      var n = r(64617),
        i = r(75708),
        o = r(63577),
        s = r(69570),
        a = n ? n.prototype : void 0,
        u = a ? a.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (o(e)) return i(e, t) + "";
        if (s(e)) return u ? u.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -1 / 0 ? "-0" : r
      }
    },
    29565(t) {
      t.exports = function(t) {
        return function(e) {
          return t(e)
        }
      }
    },
    71025(t, e, r) {
      var n = r(63577),
        i = r(77554),
        o = r(82770),
        s = r(55262);
      t.exports = function(t, e) {
        return n(t) ? t : i(t, e) ? [t] : o(s(t))
      }
    },
    27869(t, e, r) {
      var n = r(86508);
      t.exports = function(t) {
        var e = new t.constructor(t.byteLength);
        return new n(e).set(new n(t)), e
      }
    },
    34674(t, e, r) {
      t = r.nmd(t);
      var n = r(84373),
        i = e && !e.nodeType && e,
        o = i && t && !t.nodeType && t,
        s = o && o.exports === i ? n.Buffer : void 0,
        a = s ? s.allocUnsafe : void 0;
      t.exports = function(t, e) {
        if (e) return t.slice();
        var r = t.length,
          n = a ? a(r) : new t.constructor(r);
        return t.copy(n), n
      }
    },
    46433(t, e, r) {
      var n = r(27869);
      t.exports = function(t, e) {
        var r = e ? n(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.byteLength)
      }
    },
    50953(t) {
      var e = /\w*$/;
      t.exports = function(t) {
        var r = new t.constructor(t.source, e.exec(t));
        return r.lastIndex = t.lastIndex, r
      }
    },
    20112(t, e, r) {
      var n = r(64617),
        i = n ? n.prototype : void 0,
        o = i ? i.valueOf : void 0;
      t.exports = function(t) {
        return o ? Object(o.call(t)) : {}
      }
    },
    21537(t, e, r) {
      var n = r(27869);
      t.exports = function(t, e) {
        var r = e ? n(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
      }
    },
    5863(t) {
      t.exports = function(t, e) {
        var r = -1,
          n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
      }
    },
    38439(t, e, r) {
      var n = r(87147),
        i = r(4584);
      t.exports = function(t, e, r, o) {
        var s = !r;
        r || (r = {});
        for (var a = -1, u = e.length; ++a < u;) {
          var c = e[a],
            p = o ? o(r[c], t[c], c, r, t) : void 0;
          void 0 === p && (p = t[c]), s ? i(r, c, p) : n(r, c, p)
        }
        return r
      }
    },
    62023(t, e, r) {
      var n = r(38439),
        i = r(26656);
      t.exports = function(t, e) {
        return n(t, i(t), e)
      }
    },
    34316(t, e, r) {
      var n = r(38439),
        i = r(70191);
      t.exports = function(t, e) {
        return n(t, i(t), e)
      }
    },
    66913(t, e, r) {
      var n = r(84373)["__core-js_shared__"];
      t.exports = n
    },
    29789(t) {
      t.exports = function(t) {
        return function(e, r, n) {
          for (var i = -1, o = Object(e), s = n(e), a = s.length; a--;) {
            var u = s[t ? a : ++i];
            if (!1 === r(o[u], u, o)) break
          }
          return e
        }
      }
    },
    78403(t, e, r) {
      var n = r(49958),
        i = function() {
          try {
            var t = n(Object, "defineProperty");
            return t({}, "", {}), t
          } catch (t) {}
        }();
      t.exports = i
    },
    19728(t, e, r) {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      t.exports = n
    },
    43706(t, e, r) {
      var n = r(77023),
        i = r(26656),
        o = r(59990);
      t.exports = function(t) {
        return n(t, o, i)
      }
    },
    8221(t, e, r) {
      var n = r(77023),
        i = r(70191),
        o = r(71169);
      t.exports = function(t) {
        return n(t, o, i)
      }
    },
    95299(t, e, r) {
      var n = r(40514);
      t.exports = function(t, e) {
        var r = t.__data__;
        return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
      }
    },
    49958(t, e, r) {
      var n = r(87795),
        i = r(31152);
      t.exports = function(t, e) {
        var r = i(t, e);
        return n(r) ? r : void 0
      }
    },
    41095(t, e, r) {
      var n = r(82503)(Object.getPrototypeOf, Object);
      t.exports = n
    },
    94475(t, e, r) {
      var n = r(64617),
        i = Object.prototype,
        o = i.hasOwnProperty,
        s = i.toString,
        a = n ? n.toStringTag : void 0;
      t.exports = function(t) {
        var e = o.call(t, a),
          r = t[a];
        try {
          t[a] = void 0;
          var n = !0
        } catch (t) {}
        var i = s.call(t);
        return n && (e ? t[a] = r : delete t[a]), i
      }
    },
    26656(t, e, r) {
      var n = r(87682),
        i = r(95353),
        o = Object.prototype.propertyIsEnumerable,
        s = Object.getOwnPropertySymbols,
        a = s ? function(t) {
          return null == t ? [] : (t = Object(t), n(s(t), function(e) {
            return o.call(t, e)
          }))
        } : i;
      t.exports = a
    },
    70191(t, e, r) {
      var n = r(8568),
        i = r(41095),
        o = r(26656),
        s = r(95353),
        a = Object.getOwnPropertySymbols ? function(t) {
          for (var e = []; t;) n(e, o(t)), t = i(t);
          return e
        } : s;
      t.exports = a
    },
    69645(t, e, r) {
      var n = r(38676),
        i = r(4487),
        o = r(41804),
        s = r(77017),
        a = r(45991),
        u = r(46224),
        c = r(96217),
        p = "[object Map]",
        h = "[object Promise]",
        l = "[object Set]",
        f = "[object WeakMap]",
        d = "[object DataView]",
        v = c(n),
        b = c(i),
        y = c(o),
        g = c(s),
        w = c(a),
        x = u;
      (n && x(new n(new ArrayBuffer(1))) != d || i && x(new i) != p || o && x(o.resolve()) != h || s && x(new s) != l || a && x(new a) != f) && (x = function(t) {
        var e = u(t),
          r = "[object Object]" == e ? t.constructor : void 0,
          n = r ? c(r) : "";
        if (n) switch (n) {
          case v:
            return d;
          case b:
            return p;
          case y:
            return h;
          case g:
            return l;
          case w:
            return f
        }
        return e
      }), t.exports = x
    },
    31152(t) {
      t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
      }
    },
    37592(t, e, r) {
      var n = r(48474);
      t.exports = function() {
        this.__data__ = n ? n(null) : {}, this.size = 0
      }
    },
    54862(t) {
      t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
      }
    },
    76665(t, e, r) {
      var n = r(48474),
        i = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = this.__data__;
        if (n) {
          var r = e[t];
          return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return i.call(e, t) ? e[t] : void 0
      }
    },
    62773(t, e, r) {
      var n = r(48474),
        i = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = this.__data__;
        return n ? void 0 !== e[t] : i.call(e, t)
      }
    },
    69661(t, e, r) {
      var n = r(48474);
      t.exports = function(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e, this
      }
    },
    96373(t) {
      var e = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var r = t.length,
          n = new t.constructor(r);
        return r && "string" == typeof t[0] && e.call(t, "index") && (n.index = t.index, n.input = t.input), n
      }
    },
    87335(t, e, r) {
      var n = r(27869),
        i = r(46433),
        o = r(50953),
        s = r(20112),
        a = r(21537);
      t.exports = function(t, e, r) {
        var u = t.constructor;
        switch (e) {
          case "[object ArrayBuffer]":
            return n(t);
          case "[object Boolean]":
          case "[object Date]":
            return new u(+t);
          case "[object DataView]":
            return i(t, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return a(t, r);
          case "[object Map]":
          case "[object Set]":
            return new u;
          case "[object Number]":
          case "[object String]":
            return new u(t);
          case "[object RegExp]":
            return o(t);
          case "[object Symbol]":
            return s(t)
        }
      }
    },
    88673(t, e, r) {
      var n = r(65976),
        i = r(41095),
        o = r(70879);
      t.exports = function(t) {
        return "function" != typeof t.constructor || o(t) ? {} : n(i(t))
      }
    },
    15313(t) {
      var e = /^(?:0|[1-9]\d*)$/;
      t.exports = function(t, r) {
        var n = typeof t;
        return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && e.test(t)) && t > -1 && t % 1 == 0 && t < r
      }
    },
    77554(t, e, r) {
      var n = r(63577),
        i = r(69570),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
      t.exports = function(t, e) {
        if (n(t)) return !1;
        var r = typeof t;
        return !("number" != r && "symbol" != r && "boolean" != r && null != t && !i(t)) || s.test(t) || !o.test(t) || null != e && t in Object(e)
      }
    },
    40514(t) {
      t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
      }
    },
    50168(t, e, r) {
      var n, i = r(66913),
        o = (n = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
      t.exports = function(t) {
        return !!o && o in t
      }
    },
    70879(t) {
      var e = Object.prototype;
      t.exports = function(t) {
        var r = t && t.constructor;
        return t === ("function" == typeof r && r.prototype || e)
      }
    },
    50526(t) {
      t.exports = function() {
        this.__data__ = [], this.size = 0
      }
    },
    50008(t, e, r) {
      var n = r(6785),
        i = Array.prototype.splice;
      t.exports = function(t) {
        var e = this.__data__,
          r = n(e, t);
        return !(r < 0 || (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, 0))
      }
    },
    19195(t, e, r) {
      var n = r(6785);
      t.exports = function(t) {
        var e = this.__data__,
          r = n(e, t);
        return r < 0 ? void 0 : e[r][1]
      }
    },
    60119(t, e, r) {
      var n = r(6785);
      t.exports = function(t) {
        return n(this.__data__, t) > -1
      }
    },
    65663(t, e, r) {
      var n = r(6785);
      t.exports = function(t, e) {
        var r = this.__data__,
          i = n(r, t);
        return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
      }
    },
    70632(t, e, r) {
      var n = r(62293),
        i = r(14935),
        o = r(4487);
      t.exports = function() {
        this.size = 0, this.__data__ = {
          hash: new n,
          map: new(o || i),
          string: new n
        }
      }
    },
    64222(t, e, r) {
      var n = r(95299);
      t.exports = function(t) {
        var e = n(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
      }
    },
    76169(t, e, r) {
      var n = r(95299);
      t.exports = function(t) {
        return n(this, t).get(t)
      }
    },
    46213(t, e, r) {
      var n = r(95299);
      t.exports = function(t) {
        return n(this, t).has(t)
      }
    },
    7341(t, e, r) {
      var n = r(95299);
      t.exports = function(t, e) {
        var r = n(this, t),
          i = r.size;
        return r.set(t, e), this.size += r.size == i ? 0 : 1, this
      }
    },
    77304(t, e, r) {
      var n = r(79040);
      t.exports = function(t) {
        var e = n(t, function(t) {
            return 500 === r.size && r.clear(), t
          }),
          r = e.cache;
        return e
      }
    },
    48474(t, e, r) {
      var n = r(49958)(Object, "create");
      t.exports = n
    },
    78282(t, e, r) {
      var n = r(82503)(Object.keys, Object);
      t.exports = n
    },
    72237(t) {
      t.exports = function(t) {
        var e = [];
        if (null != t)
          for (var r in Object(t)) e.push(r);
        return e
      }
    },
    96929(t, e, r) {
      t = r.nmd(t);
      var n = r(19728),
        i = e && !e.nodeType && e,
        o = i && t && !t.nodeType && t,
        s = o && o.exports === i && n.process,
        a = function() {
          try {
            return o && o.require && o.require("util").types || s && s.binding && s.binding("util")
          } catch (t) {}
        }();
      t.exports = a
    },
    1550(t) {
      var e = Object.prototype.toString;
      t.exports = function(t) {
        return e.call(t)
      }
    },
    82503(t) {
      t.exports = function(t, e) {
        return function(r) {
          return t(e(r))
        }
      }
    },
    84373(t, e, r) {
      var n = r(19728),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = n || i || Function("return this")();
      t.exports = o
    },
    90308(t, e, r) {
      var n = r(14935);
      t.exports = function() {
        this.__data__ = new n, this.size = 0
      }
    },
    63090(t) {
      t.exports = function(t) {
        var e = this.__data__,
          r = e.delete(t);
        return this.size = e.size, r
      }
    },
    39245(t) {
      t.exports = function(t) {
        return this.__data__.get(t)
      }
    },
    64641(t) {
      t.exports = function(t) {
        return this.__data__.has(t)
      }
    },
    82953(t, e, r) {
      var n = r(14935),
        i = r(4487),
        o = r(75365);
      t.exports = function(t, e) {
        var r = this.__data__;
        if (r instanceof n) {
          var s = r.__data__;
          if (!i || s.length < 199) return s.push([t, e]), this.size = ++r.size, this;
          r = this.__data__ = new o(s)
        }
        return r.set(t, e), this.size = r.size, this
      }
    },
    82770(t, e, r) {
      var n = r(77304),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        s = n(function(t) {
          var e = [];
          return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, r, n, i) {
            e.push(n ? i.replace(o, "$1") : r || t)
          }), e
        });
      t.exports = s
    },
    30285(t, e, r) {
      var n = r(69570);
      t.exports = function(t) {
        if ("string" == typeof t || n(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -1 / 0 ? "-0" : e
      }
    },
    96217(t) {
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
    74143(t, e, r) {
      var n = r(5559);
      t.exports = function(t) {
        return n(t, 5)
      }
    },
    1504(t) {
      t.exports = function(t, e) {
        return t === e || t != t && e != e
      }
    },
    73892(t, e, r) {
      var n = r(69526);
      t.exports = function(t, e, r) {
        var i = null == t ? void 0 : n(t, e);
        return void 0 === i ? r : i
      }
    },
    46568(t) {
      t.exports = function(t) {
        return t
      }
    },
    43124(t, e, r) {
      var n = r(84182),
        i = r(5698),
        o = Object.prototype,
        s = o.hasOwnProperty,
        a = o.propertyIsEnumerable,
        u = n(function() {
          return arguments
        }()) ? n : function(t) {
          return i(t) && s.call(t, "callee") && !a.call(t, "callee")
        };
      t.exports = u
    },
    63577(t) {
      var e = Array.isArray;
      t.exports = e
    },
    19590(t, e, r) {
      var n = r(49426),
        i = r(37118);
      t.exports = function(t) {
        return null != t && i(t.length) && !n(t)
      }
    },
    39968(t, e, r) {
      t = r.nmd(t);
      var n = r(84373),
        i = r(42103),
        o = e && !e.nodeType && e,
        s = o && t && !t.nodeType && t,
        a = s && s.exports === o ? n.Buffer : void 0,
        u = (a ? a.isBuffer : void 0) || i;
      t.exports = u
    },
    49426(t, e, r) {
      var n = r(46224),
        i = r(36373);
      t.exports = function(t) {
        if (!i(t)) return !1;
        var e = n(t);
        return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
      }
    },
    37118(t) {
      t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
      }
    },
    45290(t, e, r) {
      var n = r(61484),
        i = r(29565),
        o = r(96929),
        s = o && o.isMap,
        a = s ? i(s) : n;
      t.exports = a
    },
    36373(t) {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
      }
    },
    5698(t) {
      t.exports = function(t) {
        return null != t && "object" == typeof t
      }
    },
    4315(t, e, r) {
      var n = r(46224),
        i = r(41095),
        o = r(5698),
        s = Function.prototype,
        a = Object.prototype,
        u = s.toString,
        c = a.hasOwnProperty,
        p = u.call(Object);
      t.exports = function(t) {
        if (!o(t) || "[object Object]" != n(t)) return !1;
        var e = i(t);
        if (null === e) return !0;
        var r = c.call(e, "constructor") && e.constructor;
        return "function" == typeof r && r instanceof r && u.call(r) == p
      }
    },
    71280(t, e, r) {
      var n = r(76142),
        i = r(29565),
        o = r(96929),
        s = o && o.isSet,
        a = s ? i(s) : n;
      t.exports = a
    },
    69570(t, e, r) {
      var n = r(46224),
        i = r(5698);
      t.exports = function(t) {
        return "symbol" == typeof t || i(t) && "[object Symbol]" == n(t)
      }
    },
    70247(t, e, r) {
      var n = r(17213),
        i = r(29565),
        o = r(96929),
        s = o && o.isTypedArray,
        a = s ? i(s) : n;
      t.exports = a
    },
    59990(t, e, r) {
      var n = r(61887),
        i = r(93056),
        o = r(19590);
      t.exports = function(t) {
        return o(t) ? n(t) : i(t)
      }
    },
    71169(t, e, r) {
      var n = r(61887),
        i = r(77199),
        o = r(19590);
      t.exports = function(t) {
        return o(t) ? n(t, !0) : i(t)
      }
    },
    79040(t, e, r) {
      var n = r(75365);

      function i(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
        var r = function() {
          var n = arguments,
            i = e ? e.apply(this, n) : n[0],
            o = r.cache;
          if (o.has(i)) return o.get(i);
          var s = t.apply(this, n);
          return r.cache = o.set(i, s) || o, s
        };
        return r.cache = new(i.Cache || n), r
      }
      i.Cache = n, t.exports = i
    },
    95353(t) {
      t.exports = function() {
        return []
      }
    },
    42103(t) {
      t.exports = function() {
        return !1
      }
    },
    55262(t, e, r) {
      var n = r(61612);
      t.exports = function(t) {
        return null == t ? "" : n(t)
      }
    },
    43431(t) {
      var e, r, n = t.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function o() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
          return e(t, 0)
        } catch (r) {
          try {
            return e.call(null, t, 0)
          } catch (r) {
            return e.call(this, t, 0)
          }
        }
      }! function() {
        try {
          e = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
          e = i
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (t) {
          r = o
        }
      }();
      var a, u = [],
        c = !1,
        p = -1;

      function h() {
        c && a && (c = !1, a.length ? u = a.concat(u) : p = -1, u.length && l())
      }

      function l() {
        if (!c) {
          var t = s(h);
          c = !0;
          for (var e = u.length; e;) {
            for (a = u, u = []; ++p < e;) a && a[p].run();
            p = -1, e = u.length
          }
          a = null, c = !1,
            function(t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
              try {
                return r(t)
              } catch (e) {
                try {
                  return r.call(null, t)
                } catch (e) {
                  return r.call(this, t)
                }
              }
            }(t)
        }
      }

      function f(t, e) {
        this.fun = t, this.array = e
      }

      function d() {}
      n.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        u.push(new f(t, e)), 1 !== u.length || c || s(l)
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = d, n.addListener = d, n.once = d, n.off = d, n.removeListener = d, n.removeAllListeners = d, n.emit = d, n.prependListener = d, n.prependOnceListener = d, n.listeners = function(t) {
        return []
      }, n.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    },
    79484(t, e, r) {
      "use strict";
      r.d(e, {
        c: () => A
      });
      var n, i = r(39793),
        o = r(93082),
        s = r(84017),
        a = function() {
          return a = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
          }, a.apply(this, arguments)
        },
        u = {
          width: "100%",
          height: "10px",
          top: "0px",
          left: "0px",
          cursor: "row-resize"
        },
        c = {
          width: "10px",
          height: "100%",
          top: "0px",
          left: "0px",
          cursor: "col-resize"
        },
        p = {
          width: "20px",
          height: "20px",
          position: "absolute",
          zIndex: 1
        },
        h = {
          top: a(a({}, u), {
            top: "-5px"
          }),
          right: a(a({}, c), {
            left: void 0,
            right: "-5px"
          }),
          bottom: a(a({}, u), {
            top: void 0,
            bottom: "-5px"
          }),
          left: a(a({}, c), {
            left: "-5px"
          }),
          topRight: a(a({}, p), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize"
          }),
          bottomRight: a(a({}, p), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize"
          }),
          bottomLeft: a(a({}, p), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize"
          }),
          topLeft: a(a({}, p), {
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize"
          })
        },
        l = (0, o.memo)(function(t) {
          var e = t.onResizeStart,
            r = t.direction,
            n = t.children,
            s = t.replaceStyles,
            u = t.className,
            c = (0, o.useCallback)(function(t) {
              e(t, r)
            }, [e, r]),
            p = (0, o.useCallback)(function(t) {
              e(t, r)
            }, [e, r]),
            l = (0, o.useMemo)(function() {
              return a(a({
                position: "absolute",
                userSelect: "none"
              }, h[r]), null != s ? s : {})
            }, [s, r]);
          return (0, i.jsx)("div", {
            className: u || void 0,
            style: l,
            onMouseDown: c,
            onTouchStart: p,
            children: n
          })
        }),
        f = (n = function(t, e) {
          return n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(t, e) {
            t.__proto__ = e
          } || function(t, e) {
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
          }, n(t, e)
        }, function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

          function r() {
            this.constructor = t
          }
          n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        d = function() {
          return d = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
          }, d.apply(this, arguments)
        },
        v = {
          width: "auto",
          height: "auto"
        },
        b = function(t, e, r) {
          return Math.max(Math.min(t, r), e)
        },
        y = function(t, e, r) {
          var n = Math.round(t / e);
          return n * e + r * (n - 1)
        },
        g = function(t, e) {
          return new RegExp(t, "i").test(e)
        },
        w = function(t) {
          return Boolean(t.touches && t.touches.length)
        },
        x = function(t, e, r) {
          void 0 === r && (r = 0);
          var n = e.reduce(function(r, n, i) {
              return Math.abs(n - t) < Math.abs(e[r] - t) ? i : r
            }, 0),
            i = Math.abs(e[n] - t);
          return 0 === r || i < r ? e[n] : t
        },
        m = function(t) {
          return "auto" === (t = t.toString()) || t.endsWith("px") || t.endsWith("%") || t.endsWith("vh") || t.endsWith("vw") || t.endsWith("vmax") || t.endsWith("vmin") ? t : "".concat(t, "px")
        },
        j = function(t, e, r, n) {
          if (t && "string" == typeof t) {
            if (t.endsWith("px")) return Number(t.replace("px", ""));
            if (t.endsWith("%")) return e * (Number(t.replace("%", "")) / 100);
            if (t.endsWith("vw")) return r * (Number(t.replace("vw", "")) / 100);
            if (t.endsWith("vh")) return n * (Number(t.replace("vh", "")) / 100)
          }
          return t
        },
        _ = ["as", "ref", "style", "className", "grid", "gridGap", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
        z = "__resizable_base__",
        A = function(t) {
          function e(e) {
            var r, n, i, o, s = t.call(this, e) || this;
            return s.ratio = 1, s.resizable = null, s.parentLeft = 0, s.parentTop = 0, s.resizableLeft = 0, s.resizableRight = 0, s.resizableTop = 0, s.resizableBottom = 0, s.targetLeft = 0, s.targetTop = 0, s.delta = {
              width: 0,
              height: 0
            }, s.appendBase = function() {
              if (!s.resizable || !s.window) return null;
              var t = s.parentNode;
              if (!t) return null;
              var e = s.window.document.createElement("div");
              return e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.transform = "scale(0, 0)", e.style.left = "0", e.style.flex = "0 0 100%", e.classList ? e.classList.add(z) : e.className += z, t.appendChild(e), e
            }, s.removeBase = function(t) {
              var e = s.parentNode;
              e && e.removeChild(t)
            }, s.state = {
              isResizing: !1,
              width: null !== (n = null === (r = s.propsSize) || void 0 === r ? void 0 : r.width) && void 0 !== n ? n : "auto",
              height: null !== (o = null === (i = s.propsSize) || void 0 === i ? void 0 : i.height) && void 0 !== o ? o : "auto",
              direction: "right",
              original: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              },
              backgroundStyle: {
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0)",
                cursor: "auto",
                opacity: 0,
                position: "fixed",
                zIndex: 9999,
                top: "0",
                left: "0",
                bottom: "0",
                right: "0"
              },
              flexBasis: void 0
            }, s.onResizeStart = s.onResizeStart.bind(s), s.onMouseMove = s.onMouseMove.bind(s), s.onMouseUp = s.onMouseUp.bind(s), s
          }
          return f(e, t), Object.defineProperty(e.prototype, "parentNode", {
            get: function() {
              return this.resizable ? this.resizable.parentNode : null
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "window", {
            get: function() {
              return this.resizable && this.resizable.ownerDocument ? this.resizable.ownerDocument.defaultView : null
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "propsSize", {
            get: function() {
              return this.props.size || this.props.defaultSize || v
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "size", {
            get: function() {
              var t = 0,
                e = 0;
              if (this.resizable && this.window) {
                var r = this.resizable.offsetWidth,
                  n = this.resizable.offsetHeight,
                  i = this.resizable.style.position;
                "relative" !== i && (this.resizable.style.position = "relative"), t = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : r, e = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : n, this.resizable.style.position = i
              }
              return {
                width: t,
                height: e
              }
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "sizeStyle", {
            get: function() {
              var t = this,
                e = this.props.size,
                r = function(e) {
                  var r;
                  if (void 0 === t.state[e] || "auto" === t.state[e]) return "auto";
                  if (t.propsSize && t.propsSize[e] && (null === (r = t.propsSize[e]) || void 0 === r ? void 0 : r.toString().endsWith("%"))) {
                    if (t.state[e].toString().endsWith("%")) return t.state[e].toString();
                    var n = t.getParentSize(),
                      i = Number(t.state[e].toString().replace("px", "")) / n[e] * 100;
                    return "".concat(i, "%")
                  }
                  return m(t.state[e])
                };
              return {
                width: e && void 0 !== e.width && !this.state.isResizing ? m(e.width) : r("width"),
                height: e && void 0 !== e.height && !this.state.isResizing ? m(e.height) : r("height")
              }
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.getParentSize = function() {
            if (!this.parentNode) return this.window ? {
              width: this.window.innerWidth,
              height: this.window.innerHeight
            } : {
              width: 0,
              height: 0
            };
            var t = this.appendBase();
            if (!t) return {
              width: 0,
              height: 0
            };
            var e = !1,
              r = this.parentNode.style.flexWrap;
            "wrap" !== r && (e = !0, this.parentNode.style.flexWrap = "wrap"), t.style.position = "relative", t.style.minWidth = "100%", t.style.minHeight = "100%";
            var n = {
              width: t.offsetWidth,
              height: t.offsetHeight
            };
            return e && (this.parentNode.style.flexWrap = r), this.removeBase(t), n
          }, e.prototype.bindEvents = function() {
            this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
              capture: !0,
              passive: !1
            }), this.window.addEventListener("touchend", this.onMouseUp))
          }, e.prototype.unbindEvents = function() {
            this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp))
          }, e.prototype.componentDidMount = function() {
            if (this.resizable && this.window) {
              var t = this.window.getComputedStyle(this.resizable);
              this.setState({
                width: this.state.width || this.size.width,
                height: this.state.height || this.size.height,
                flexBasis: "auto" !== t.flexBasis ? t.flexBasis : void 0
              })
            }
          }, e.prototype.componentWillUnmount = function() {
            this.window && this.unbindEvents()
          }, e.prototype.createSizeForCssProperty = function(t, e) {
            var r = this.propsSize && this.propsSize[e];
            return "auto" !== this.state[e] || this.state.original[e] !== t || void 0 !== r && "auto" !== r ? t : "auto"
          }, e.prototype.calculateNewMaxFromBoundary = function(t, e) {
            var r, n, i = this.props.boundsByDirection,
              o = this.state.direction,
              s = i && g("left", o),
              a = i && g("top", o);
            if ("parent" === this.props.bounds) {
              var u = this.parentNode;
              u && (r = s ? this.resizableRight - this.parentLeft : u.offsetWidth + (this.parentLeft - this.resizableLeft), n = a ? this.resizableBottom - this.parentTop : u.offsetHeight + (this.parentTop - this.resizableTop))
            } else "window" === this.props.bounds ? this.window && (r = s ? this.resizableRight : this.window.innerWidth - this.resizableLeft, n = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (r = s ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), n = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
            return r && Number.isFinite(r) && (t = t && t < r ? t : r), n && Number.isFinite(n) && (e = e && e < n ? e : n), {
              maxWidth: t,
              maxHeight: e
            }
          }, e.prototype.calculateNewSizeFromDirection = function(t, e) {
            var r, n = this.props.scale || 1,
              i = (r = this.props.resizeRatio || 1, Array.isArray(r) ? r : [r, r]),
              o = i[0],
              s = i[1],
              a = this.state,
              u = a.direction,
              c = a.original,
              p = this.props,
              h = p.lockAspectRatio,
              l = p.lockAspectRatioExtraHeight,
              f = p.lockAspectRatioExtraWidth,
              d = c.width,
              v = c.height,
              b = l || 0,
              y = f || 0;
            return g("right", u) && (d = c.width + (t - c.x) * o / n, h && (v = (d - y) / this.ratio + b)), g("left", u) && (d = c.width - (t - c.x) * o / n, h && (v = (d - y) / this.ratio + b)), g("bottom", u) && (v = c.height + (e - c.y) * s / n, h && (d = (v - b) * this.ratio + y)), g("top", u) && (v = c.height - (e - c.y) * s / n, h && (d = (v - b) * this.ratio + y)), {
              newWidth: d,
              newHeight: v
            }
          }, e.prototype.calculateNewSizeFromAspectRatio = function(t, e, r, n) {
            var i = this.props,
              o = i.lockAspectRatio,
              s = i.lockAspectRatioExtraHeight,
              a = i.lockAspectRatioExtraWidth,
              u = void 0 === n.width ? 10 : n.width,
              c = void 0 === r.width || r.width < 0 ? t : r.width,
              p = void 0 === n.height ? 10 : n.height,
              h = void 0 === r.height || r.height < 0 ? e : r.height,
              l = s || 0,
              f = a || 0;
            if (o) {
              var d = (p - l) * this.ratio + f,
                v = (h - l) * this.ratio + f,
                y = (u - f) / this.ratio + l,
                g = (c - f) / this.ratio + l,
                w = Math.max(u, d),
                x = Math.min(c, v),
                m = Math.max(p, y),
                j = Math.min(h, g);
              t = b(t, w, x), e = b(e, m, j)
            } else t = b(t, u, c), e = b(e, p, h);
            return {
              newWidth: t,
              newHeight: e
            }
          }, e.prototype.setBoundingClientRect = function() {
            var t = 1 / (this.props.scale || 1);
            if ("parent" === this.props.bounds) {
              var e = this.parentNode;
              if (e) {
                var r = e.getBoundingClientRect();
                this.parentLeft = r.left * t, this.parentTop = r.top * t
              }
            }
            if (this.props.bounds && "string" != typeof this.props.bounds) {
              var n = this.props.bounds.getBoundingClientRect();
              this.targetLeft = n.left * t, this.targetTop = n.top * t
            }
            if (this.resizable) {
              var i = this.resizable.getBoundingClientRect(),
                o = i.left,
                s = i.top,
                a = i.right,
                u = i.bottom;
              this.resizableLeft = o * t, this.resizableRight = a * t, this.resizableTop = s * t, this.resizableBottom = u * t
            }
          }, e.prototype.onResizeStart = function(t, e) {
            if (this.resizable && this.window) {
              var r, n = 0,
                i = 0;
              if (t.nativeEvent && function(t) {
                  return Boolean((t.clientX || 0 === t.clientX) && (t.clientY || 0 === t.clientY))
                }(t.nativeEvent) ? (n = t.nativeEvent.clientX, i = t.nativeEvent.clientY) : t.nativeEvent && w(t.nativeEvent) && (n = t.nativeEvent.touches[0].clientX, i = t.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(t, e, this.resizable)) return;
              this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
                height: this.props.size.height
              }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
                width: this.props.size.width
              })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
              var o = this.window.getComputedStyle(this.resizable);
              if ("auto" !== o.flexBasis) {
                var s = this.parentNode;
                if (s) {
                  var a = this.window.getComputedStyle(s).flexDirection;
                  this.flexDir = a.startsWith("row") ? "row" : "column", r = o.flexBasis
                }
              }
              this.setBoundingClientRect(), this.bindEvents();
              var u = {
                original: {
                  x: n,
                  y: i,
                  width: this.size.width,
                  height: this.size.height
                },
                isResizing: !0,
                backgroundStyle: d(d({}, this.state.backgroundStyle), {
                  cursor: this.window.getComputedStyle(t.target).cursor || "auto"
                }),
                direction: e,
                flexBasis: r
              };
              this.setState(u)
            }
          }, e.prototype.onMouseMove = function(t) {
            var e = this;
            if (this.state.isResizing && this.resizable && this.window) {
              if (this.window.TouchEvent && w(t)) try {
                t.preventDefault(), t.stopPropagation()
              } catch (t) {}
              var r = this.props,
                n = r.maxWidth,
                i = r.maxHeight,
                o = r.minWidth,
                a = r.minHeight,
                u = w(t) ? t.touches[0].clientX : t.clientX,
                c = w(t) ? t.touches[0].clientY : t.clientY,
                p = this.state,
                h = p.direction,
                l = p.original,
                f = p.width,
                d = p.height,
                v = this.getParentSize(),
                b = function(t, e, r, n, i, o, s) {
                  return n = j(n, t.width, e, r), i = j(i, t.height, e, r), o = j(o, t.width, e, r), s = j(s, t.height, e, r), {
                    maxWidth: void 0 === n ? void 0 : Number(n),
                    maxHeight: void 0 === i ? void 0 : Number(i),
                    minWidth: void 0 === o ? void 0 : Number(o),
                    minHeight: void 0 === s ? void 0 : Number(s)
                  }
                }(v, this.window.innerWidth, this.window.innerHeight, n, i, o, a);
              n = b.maxWidth, i = b.maxHeight, o = b.minWidth, a = b.minHeight;
              var g = this.calculateNewSizeFromDirection(u, c),
                m = g.newHeight,
                _ = g.newWidth,
                z = this.calculateNewMaxFromBoundary(n, i);
              this.props.snap && this.props.snap.x && (_ = x(_, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (m = x(m, this.props.snap.y, this.props.snapGap));
              var A = this.calculateNewSizeFromAspectRatio(_, m, {
                width: z.maxWidth,
                height: z.maxHeight
              }, {
                width: o,
                height: a
              });
              if (_ = A.newWidth, m = A.newHeight, this.props.grid) {
                var O = y(_, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0),
                  S = y(m, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0),
                  R = this.props.snapGap || 0;
                _ = 0 === R || Math.abs(O - _) <= R ? O : _, m = 0 === R || Math.abs(S - m) <= R ? S : m
              }
              var E = {
                width: _ - l.width,
                height: m - l.height
              };
              if (this.delta = E, f && "string" == typeof f)
                if (f.endsWith("%")) {
                  var W = _ / v.width * 100;
                  _ = "".concat(W, "%")
                } else if (f.endsWith("vw")) {
                var M = _ / this.window.innerWidth * 100;
                _ = "".concat(M, "vw")
              } else if (f.endsWith("vh")) {
                var P = _ / this.window.innerHeight * 100;
                _ = "".concat(P, "vh")
              }
              d && "string" == typeof d && (d.endsWith("%") ? (W = m / v.height * 100, m = "".concat(W, "%")) : d.endsWith("vw") ? (M = m / this.window.innerWidth * 100, m = "".concat(M, "vw")) : d.endsWith("vh") && (P = m / this.window.innerHeight * 100, m = "".concat(P, "vh")));
              var k = {
                width: this.createSizeForCssProperty(_, "width"),
                height: this.createSizeForCssProperty(m, "height")
              };
              "row" === this.flexDir ? k.flexBasis = k.width : "column" === this.flexDir && (k.flexBasis = k.height);
              var T = this.state.width !== k.width,
                B = this.state.height !== k.height,
                N = this.state.flexBasis !== k.flexBasis,
                L = T || B || N;
              L && (0, s.flushSync)(function() {
                e.setState(k)
              }), this.props.onResize && L && this.props.onResize(t, h, this.resizable, E)
            }
          }, e.prototype.onMouseUp = function(t) {
            var e, r, n = this.state,
              i = n.isResizing,
              o = n.direction;
            n.original, i && this.resizable && (this.props.onResizeStop && this.props.onResizeStop(t, o, this.resizable, this.delta), this.props.size && this.setState({
              width: null !== (e = this.props.size.width) && void 0 !== e ? e : "auto",
              height: null !== (r = this.props.size.height) && void 0 !== r ? r : "auto"
            }), this.unbindEvents(), this.setState({
              isResizing: !1,
              backgroundStyle: d(d({}, this.state.backgroundStyle), {
                cursor: "auto"
              })
            }))
          }, e.prototype.updateSize = function(t) {
            var e, r;
            this.setState({
              width: null !== (e = t.width) && void 0 !== e ? e : "auto",
              height: null !== (r = t.height) && void 0 !== r ? r : "auto"
            })
          }, e.prototype.renderResizer = function() {
            var t = this,
              e = this.props,
              r = e.enable,
              n = e.handleStyles,
              o = e.handleClasses,
              s = e.handleWrapperStyle,
              a = e.handleWrapperClass,
              u = e.handleComponent;
            if (!r) return null;
            var c = Object.keys(r).map(function(e) {
              return !1 !== r[e] ? (0, i.jsx)(l, {
                direction: e,
                onResizeStart: t.onResizeStart,
                replaceStyles: n && n[e],
                className: o && o[e],
                children: u && u[e] ? u[e] : null
              }, e) : null
            });
            return (0, i.jsx)("div", {
              className: a,
              style: s,
              children: c
            })
          }, e.prototype.render = function() {
            var t = this,
              e = Object.keys(this.props).reduce(function(e, r) {
                return -1 !== _.indexOf(r) || (e[r] = t.props[r]), e
              }, {}),
              r = d(d(d({
                position: "relative",
                userSelect: this.state.isResizing ? "none" : "auto"
              }, this.props.style), this.sizeStyle), {
                maxWidth: this.props.maxWidth,
                maxHeight: this.props.maxHeight,
                minWidth: this.props.minWidth,
                minHeight: this.props.minHeight,
                boxSizing: "border-box",
                flexShrink: 0
              });
            this.state.flexBasis && (r.flexBasis = this.state.flexBasis);
            var n = this.props.as || "div";
            return (0, i.jsxs)(n, d({
              style: r,
              className: this.props.className
            }, e, {
              ref: function(e) {
                e && (t.resizable = e)
              },
              children: [this.state.isResizing && (0, i.jsx)("div", {
                style: this.state.backgroundStyle
              }), this.props.children, this.renderResizer()]
            }))
          }, e.defaultProps = {
            as: "div",
            onResizeStart: function() {},
            onResize: function() {},
            onResizeStop: function() {},
            enable: {
              top: !0,
              right: !0,
              bottom: !0,
              left: !0,
              topRight: !0,
              bottomRight: !0,
              bottomLeft: !0,
              topLeft: !0
            },
            style: {},
            grid: [1, 1],
            gridGap: [0, 0],
            lockAspectRatio: !1,
            lockAspectRatioExtraWidth: 0,
            lockAspectRatioExtraHeight: 0,
            scale: 1,
            resizeRatio: 1,
            snapGap: 0
          }, e
        }(o.PureComponent)
    },
    39279(t, e, r) {
      "use strict";
      r.d(e, {
        A: () => u
      });
      const n = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let i;
      const o = new Uint8Array(16);

      function s() {
        if (!i && (i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !i)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return i(o)
      }
      const a = [];
      for (let t = 0; t < 256; ++t) a.push((t + 256).toString(16).slice(1));
      const u = function(t, e, r) {
        if (n.randomUUID && !e && !t) return n.randomUUID();
        const i = (t = t || {}).random || (t.rng || s)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, e) {
          r = r || 0;
          for (let t = 0; t < 16; ++t) e[r + t] = i[t];
          return e
        }
        return function(t, e = 0) {
          return a[t[e + 0]] + a[t[e + 1]] + a[t[e + 2]] + a[t[e + 3]] + "-" + a[t[e + 4]] + a[t[e + 5]] + "-" + a[t[e + 6]] + a[t[e + 7]] + "-" + a[t[e + 8]] + a[t[e + 9]] + "-" + a[t[e + 10]] + a[t[e + 11]] + a[t[e + 12]] + a[t[e + 13]] + a[t[e + 14]] + a[t[e + 15]]
        }(i)
      }
    },
    5953(t, e, r) {
      "use strict";
      r.d(e, {
        A: () => i
      });
      var n = r(94570);

      function i(t, e, r) {
        return (e = (0, n.A)(e)) in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }
    },
    88846(t, e, r) {
      "use strict";

      function n() {
        return n = Object.assign ? Object.assign.bind() : function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }, n.apply(null, arguments)
      }
      r.d(e, {
        A: () => n
      })
    },
    82229(t, e, r) {
      "use strict";
      r.d(e, {
        A: () => o
      });
      var n = r(5953);

      function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? i(Object(r), !0).forEach(function(e) {
            (0, n.A)(t, e, r[e])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          })
        }
        return t
      }
    },
    25473(t, e, r) {
      "use strict";

      function n(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
          if ({}.hasOwnProperty.call(t, n)) {
            if (-1 !== e.indexOf(n)) continue;
            r[n] = t[n]
          } return r
      }
      r.d(e, {
        A: () => n
      })
    },
    88208(t, e, r) {
      "use strict";

      function n(t, e) {
        return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
          return t.__proto__ = e, t
        }, n(t, e)
      }
      r.d(e, {
        A: () => n
      })
    },
    94570(t, e, r) {
      "use strict";
      r.d(e, {
        A: () => i
      });
      var n = r(8942);

      function i(t) {
        var e = function(t) {
          if ("object" != (0, n.A)(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var r = e.call(t, "string");
            if ("object" != (0, n.A)(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(t)
        }(t);
        return "symbol" == (0, n.A)(e) ? e : e + ""
      }
    },
    8942(t, e, r) {
      "use strict";

      function n(t) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, n(t)
      }
      r.d(e, {
        A: () => n
      })
    },
    29932(t, e, r) {
      "use strict";
      r.d(e, {
        A: () => s
      });
      var n = r(55481),
        i = r(71353);
      var o = r(99651);
      const s = (a = function(t, e) {
        return t && (0, n.A)(t, e, i.A)
      }, function(t, e) {
        if (null == t) return t;
        if (!(0, o.A)(t)) return a(t, e);
        for (var r = t.length, n = -1, i = Object(t); ++n < r && !1 !== e(i[n], n, i););
        return t
      });
      var a
    },
    31929(t, e, r) {
      "use strict";
      r.d(e, {
        A: () => c
      });
      var n = r(61893),
        i = r(48348),
        o = r(6700),
        s = r(17266),
        a = r(8933),
        u = r(33018);
      const c = function(t, e, r) {
        for (var c = -1, p = (e = (0, n.A)(e, t)).length, h = !1; ++c < p;) {
          var l = (0, u.A)(e[c]);
          if (!(h = null != t && r(t, l))) break;
          t = t[l]
        }
        return h || ++c != p ? h : !!(p = null == t ? 0 : t.length) && (0, a.A)(p) && (0, s.A)(l, p) && ((0, o.A)(t) || (0, i.A)(t))
      }
    },
    26065(t, e, r) {
      "use strict";
      r.d(e, {
        A: () => i
      });
      var n = r(99793);
      const i = function(t, e, r) {
        var i = null == t ? void 0 : (0, n.A)(t, e);
        return void 0 === i ? r : i
      }
    },
    84270(t, e, r) {
      "use strict";
      r.d(e, {
        A: () => Y
      });
      var n = r(20829),
        i = r(6461),
        o = r(21541);

      function s(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.__data__ = new o.A; ++e < r;) this.add(t[e])
      }
      s.prototype.add = s.prototype.push = function(t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this
      }, s.prototype.has = function(t) {
        return this.__data__.has(t)
      };
      const a = s,
        u = function(t, e) {
          for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
            if (e(t[r], r, t)) return !0;
          return !1
        },
        c = function(t, e, r, n, i, o) {
          var s = 1 & r,
            c = t.length,
            p = e.length;
          if (c != p && !(s && p > c)) return !1;
          var h = o.get(t),
            l = o.get(e);
          if (h && l) return h == e && l == t;
          var f = -1,
            d = !0,
            v = 2 & r ? new a : void 0;
          for (o.set(t, e), o.set(e, t); ++f < c;) {
            var b = t[f],
              y = e[f];
            if (n) var g = s ? n(y, b, f, e, t, o) : n(b, y, f, t, e, o);
            if (void 0 !== g) {
              if (g) continue;
              d = !1;
              break
            }
            if (v) {
              if (!u(e, function(t, e) {
                  if (s = e, !v.has(s) && (b === t || i(b, t, r, n, o))) return v.push(e);
                  var s
                })) {
                d = !1;
                break
              }
            } else if (b !== y && !i(b, y, r, n, o)) {
              d = !1;
              break
            }
          }
          return o.delete(t), o.delete(e), d
        };
      var p = r(94508),
        h = r(84137),
        l = r(47507);
      const f = function(t) {
          var e = -1,
            r = Array(t.size);
          return t.forEach(function(t, n) {
            r[++e] = [n, t]
          }), r
        },
        d = function(t) {
          var e = -1,
            r = Array(t.size);
          return t.forEach(function(t) {
            r[++e] = t
          }), r
        };
      var v = p.A ? p.A.prototype : void 0,
        b = v ? v.valueOf : void 0;
      var y = r(65883),
        g = Object.prototype.hasOwnProperty;
      var w = r(61105),
        x = r(6700),
        m = r(7269),
        j = r(10312),
        _ = "[object Arguments]",
        z = "[object Array]",
        A = "[object Object]",
        O = Object.prototype.hasOwnProperty;
      const S = function(t, e, r, n, o, s) {
        var a = (0, x.A)(t),
          u = (0, x.A)(e),
          p = a ? z : (0, w.A)(t),
          v = u ? z : (0, w.A)(e),
          S = (p = p == _ ? A : p) == A,
          R = (v = v == _ ? A : v) == A,
          E = p == v;
        if (E && (0, m.A)(t)) {
          if (!(0, m.A)(e)) return !1;
          a = !0, S = !1
        }
        if (E && !S) return s || (s = new i.A), a || (0, j.A)(t) ? c(t, e, r, n, o, s) : function(t, e, r, n, i, o, s) {
          switch (r) {
            case "[object DataView]":
              if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
              t = t.buffer, e = e.buffer;
            case "[object ArrayBuffer]":
              return !(t.byteLength != e.byteLength || !o(new h.A(t), new h.A(e)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return (0, l.A)(+t, +e);
            case "[object Error]":
              return t.name == e.name && t.message == e.message;
            case "[object RegExp]":
            case "[object String]":
              return t == e + "";
            case "[object Map]":
              var a = f;
            case "[object Set]":
              var u = 1 & n;
              if (a || (a = d), t.size != e.size && !u) return !1;
              var p = s.get(t);
              if (p) return p == e;
              n |= 2, s.set(t, e);
              var v = c(a(t), a(e), n, i, o, s);
              return s.delete(t), v;
            case "[object Symbol]":
              if (b) return b.call(t) == b.call(e)
          }
          return !1
        }(t, e, p, r, n, o, s);
        if (!(1 & r)) {
          var W = S && O.call(t, "__wrapped__"),
            M = R && O.call(e, "__wrapped__");
          if (W || M) {
            var P = W ? t.value() : t,
              k = M ? e.value() : e;
            return s || (s = new i.A), o(P, k, r, n, s)
          }
        }
        return !!E && (s || (s = new i.A), function(t, e, r, n, i, o) {
          var s = 1 & r,
            a = (0, y.A)(t),
            u = a.length;
          if (u != (0, y.A)(e).length && !s) return !1;
          for (var c = u; c--;) {
            var p = a[c];
            if (!(s ? p in e : g.call(e, p))) return !1
          }
          var h = o.get(t),
            l = o.get(e);
          if (h && l) return h == e && l == t;
          var f = !0;
          o.set(t, e), o.set(e, t);
          for (var d = s; ++c < u;) {
            var v = t[p = a[c]],
              b = e[p];
            if (n) var w = s ? n(b, v, p, e, t, o) : n(v, b, p, t, e, o);
            if (!(void 0 === w ? v === b || i(v, b, r, n, o) : w)) {
              f = !1;
              break
            }
            d || (d = "constructor" == p)
          }
          if (f && !d) {
            var x = t.constructor,
              m = e.constructor;
            x == m || !("constructor" in t) || !("constructor" in e) || "function" == typeof x && x instanceof x && "function" == typeof m && m instanceof m || (f = !1)
          }
          return o.delete(t), o.delete(e), f
        }(t, e, r, n, o, s))
      };
      var R = r(96097);
      const E = function t(e, r, n, i, o) {
        return e === r || (null == e || null == r || !(0, R.A)(e) && !(0, R.A)(r) ? e != e && r != r : S(e, r, n, i, t, o))
      };
      var W = r(45862);
      const M = function(t) {
        return t == t && !(0, W.A)(t)
      };
      var P = r(71353);
      const k = function(t, e) {
          return function(r) {
            return null != r && r[t] === e && (void 0 !== e || t in Object(r))
          }
        },
        T = function(t) {
          var e = function(t) {
            for (var e = (0, P.A)(t), r = e.length; r--;) {
              var n = e[r],
                i = t[n];
              e[r] = [n, i, M(i)]
            }
            return e
          }(t);
          return 1 == e.length && e[0][2] ? k(e[0][0], e[0][1]) : function(r) {
            return r === t || function(t, e, r, n) {
              var o = r.length,
                s = o,
                a = !n;
              if (null == t) return !s;
              for (t = Object(t); o--;) {
                var u = r[o];
                if (a && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1
              }
              for (; ++o < s;) {
                var c = (u = r[o])[0],
                  p = t[c],
                  h = u[1];
                if (a && u[2]) {
                  if (void 0 === p && !(c in t)) return !1
                } else {
                  var l = new i.A;
                  if (n) var f = n(p, h, c, t, e, l);
                  if (!(void 0 === f ? E(h, p, 3, n, l) : f)) return !1
                }
              }
              return !0
            }(r, t, e)
          }
        };
      var B = r(26065);
      const N = function(t, e) {
        return null != t && e in Object(t)
      };
      var L = r(31929);
      var D = r(50269),
        U = r(33018);
      const C = function(t, e) {
        return (0, D.A)(t) && M(e) ? k((0, U.A)(t), e) : function(r) {
          var n = (0, B.A)(r, t);
          return void 0 === n && n === e ? function(t, e) {
            return null != t && (0, L.A)(t, e, N)
          }(r, t) : E(e, n, 3)
        }
      };
      var H = r(23159);
      var F = r(99793);
      const I = function(t) {
        return (0, D.A)(t) ? (e = (0, U.A)(t), function(t) {
          return null == t ? void 0 : t[e]
        }) : function(t) {
          return function(e) {
            return (0, F.A)(e, t)
          }
        }(t);
        var e
      };
      var G = r(29932),
        $ = r(99651);
      const V = function(t, e) {
          var r = -1,
            n = (0, $.A)(t) ? Array(t.length) : [];
          return (0, G.A)(t, function(t, i, o) {
            n[++r] = e(t, i, o)
          }), n
        },
        Y = function(t, e) {
          return ((0, x.A)(t) ? n.A : V)(t, "function" == typeof(r = e) ? r : null == r ? H.A : "object" == typeof r ? (0, x.A)(r) ? C(r[0], r[1]) : T(r) : I(r));
          var r
        }
    },
    58969(t, e, r) {
      "use strict";
      r.d(e, {
        A: () => u
      });
      var n = r(79660),
        i = r(61893),
        o = r(17266),
        s = r(45862),
        a = r(33018);
      const u = function(t, e, r) {
        return null == t ? t : function(t, e, r, u) {
          if (!(0, s.A)(t)) return t;
          for (var c = -1, p = (e = (0, i.A)(e, t)).length, h = p - 1, l = t; null != l && ++c < p;) {
            var f = (0, a.A)(e[c]),
              d = r;
            if ("__proto__" === f || "constructor" === f || "prototype" === f) return t;
            if (c != h) {
              var v = l[f];
              void 0 === (d = u ? u(v, f, l) : void 0) && (d = (0, s.A)(v) ? v : (0, o.A)(e[c + 1]) ? [] : {})
            }(0, n.A)(l, f, d), l = l[f]
          }
          return t
        }(t, e, r)
      }
    }
  }
]);