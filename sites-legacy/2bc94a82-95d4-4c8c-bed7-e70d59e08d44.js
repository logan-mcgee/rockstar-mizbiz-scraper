try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "2bc94a82-95d4-4c8c-bed7-e70d59e08d44", t._sentryDebugIdIdentifier = "sentry-dbid-2bc94a82-95d4-4c8c-bed7-e70d59e08d44")
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
  [2194], {
    2656(t, e, r) {
      r.d(e, {
        A: () => i
      });
      var n = r(47507);
      const o = function(t, e) {
        for (var r = t.length; r--;)
          if ((0, n.A)(t[r][0], e)) return r;
        return -1
      };
      var a = Array.prototype.splice;

      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var n = t[e];
          this.set(n[0], n[1])
        }
      }
      c.prototype.clear = function() {
        this.__data__ = [], this.size = 0
      }, c.prototype.delete = function(t) {
        var e = this.__data__,
          r = o(e, t);
        return !(r < 0 || (r == e.length - 1 ? e.pop() : a.call(e, r, 1), --this.size, 0))
      }, c.prototype.get = function(t) {
        var e = this.__data__,
          r = o(e, t);
        return r < 0 ? void 0 : e[r][1]
      }, c.prototype.has = function(t) {
        return o(this.__data__, t) > -1
      }, c.prototype.set = function(t, e) {
        var r = this.__data__,
          n = o(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
      };
      const i = c
    },
    21541(t, e, r) {
      r.d(e, {
        A: () => A
      });
      const n = (0, r(56763).A)(Object, "create");
      var o = Object.prototype.hasOwnProperty;
      var a = Object.prototype.hasOwnProperty;

      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var n = t[e];
          this.set(n[0], n[1])
        }
      }
      c.prototype.clear = function() {
        this.__data__ = n ? n(null) : {}, this.size = 0
      }, c.prototype.delete = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
      }, c.prototype.get = function(t) {
        var e = this.__data__;
        if (n) {
          var r = e[t];
          return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return o.call(e, t) ? e[t] : void 0
      }, c.prototype.has = function(t) {
        var e = this.__data__;
        return n ? void 0 !== e[t] : a.call(e, t)
      }, c.prototype.set = function(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e, this
      };
      const i = c;
      var u = r(2656),
        s = r(86444);
      const f = function(t, e) {
        var r, n, o = t.__data__;
        return ("string" == (n = typeof(r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? o["string" == typeof e ? "string" : "hash"] : o.map
      };

      function l(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var n = t[e];
          this.set(n[0], n[1])
        }
      }
      l.prototype.clear = function() {
        this.size = 0, this.__data__ = {
          hash: new i,
          map: new(s.A || u.A),
          string: new i
        }
      }, l.prototype.delete = function(t) {
        var e = f(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
      }, l.prototype.get = function(t) {
        return f(this, t).get(t)
      }, l.prototype.has = function(t) {
        return f(this, t).has(t)
      }, l.prototype.set = function(t, e) {
        var r = f(this, t),
          n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
      };
      const A = l
    },
    6461(t, e, r) {
      r.d(e, {
        A: () => i
      });
      var n = r(2656);
      var o = r(86444),
        a = r(21541);

      function c(t) {
        var e = this.__data__ = new n.A(t);
        this.size = e.size
      }
      c.prototype.clear = function() {
        this.__data__ = new n.A, this.size = 0
      }, c.prototype.delete = function(t) {
        var e = this.__data__,
          r = e.delete(t);
        return this.size = e.size, r
      }, c.prototype.get = function(t) {
        return this.__data__.get(t)
      }, c.prototype.has = function(t) {
        return this.__data__.has(t)
      }, c.prototype.set = function(t, e) {
        var r = this.__data__;
        if (r instanceof n.A) {
          var c = r.__data__;
          if (!o.A || c.length < 199) return c.push([t, e]), this.size = ++r.size, this;
          r = this.__data__ = new a.A(c)
        }
        return r.set(t, e), this.size = r.size, this
      };
      const i = c
    },
    84137(t, e, r) {
      const n = r(34336).A.Uint8Array;
      r.d(e, ["A", 0, n])
    },
    90078(t, e, r) {
      r.d(e, ["A", 0, function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
        return t
      }])
    },
    57172(t, e, r) {
      r.d(e, {
        A: () => s
      });
      var n = r(48348),
        o = r(6700),
        a = r(7269),
        c = r(17266),
        i = r(10312),
        u = Object.prototype.hasOwnProperty;
      const s = function(t, e) {
        var r = (0, o.A)(t),
          s = !r && (0, n.A)(t),
          f = !r && !s && (0, a.A)(t),
          l = !r && !s && !f && (0, i.A)(t),
          A = r || s || f || l,
          d = A ? function(t, e) {
            for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
            return n
          }(t.length, String) : [],
          p = d.length;
        for (var v in t) !e && !u.call(t, v) || A && ("length" == v || f && ("offset" == v || "parent" == v) || l && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || (0, c.A)(v, p)) || d.push(v);
        return d
      }
    },
    20829(t, e, r) {
      r.d(e, ["A", 0, function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n;) o[r] = e(t[r], r, t);
        return o
      }])
    },
    68071(t, e, r) {
      r.d(e, ["A", 0, function(t, e) {
        for (var r = -1, n = e.length, o = t.length; ++r < n;) t[o + r] = e[r];
        return t
      }])
    },
    79660(t, e, r) {
      var n = r(17367),
        o = r(47507),
        a = Object.prototype.hasOwnProperty;
      r.d(e, ["A", 0, function(t, e, r) {
        var c = t[e];
        a.call(t, e) && (0, o.A)(c, r) && (void 0 !== r || e in t) || (0, n.A)(t, e, r)
      }])
    },
    17367(t, e, r) {
      var n = r(63406);
      r.d(e, ["A", 0, function(t, e, r) {
        "__proto__" == e && n.A ? (0, n.A)(t, e, {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        }) : t[e] = r
      }])
    },
    70278(t, e, r) {
      r.d(e, {
        A: () => $
      });
      var n = r(6461),
        o = r(90078),
        a = r(79660),
        c = r(57502),
        i = r(71353);
      var u = r(62538);
      var s = r(15545),
        f = r(24900),
        l = r(6866);
      var A = r(3582);
      var d = r(65883),
        p = r(47016),
        v = r(61105),
        b = Object.prototype.hasOwnProperty;
      var h = r(932);
      var y = /\w*$/;
      var _ = r(94508),
        g = _.A ? _.A.prototype : void 0,
        j = g ? g.valueOf : void 0;
      var w = r(93870);
      const O = function(t, e, r) {
        var n, o, a, c = t.constructor;
        switch (e) {
          case "[object ArrayBuffer]":
            return (0, h.A)(t);
          case "[object Boolean]":
          case "[object Date]":
            return new c(+t);
          case "[object DataView]":
            return function(t, e) {
              var r = e ? (0, h.A)(t.buffer) : t.buffer;
              return new t.constructor(r, t.byteOffset, t.byteLength)
            }(t, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return (0, w.A)(t, r);
          case "[object Map]":
          case "[object Set]":
            return new c;
          case "[object Number]":
          case "[object String]":
            return new c(t);
          case "[object RegExp]":
            return (a = new(o = t).constructor(o.source, y.exec(o))).lastIndex = o.lastIndex, a;
          case "[object Symbol]":
            return n = t, j ? Object(j.call(n)) : {}
        }
      };
      var m = r(54746),
        z = r(6700),
        E = r(7269),
        S = r(96097);
      var x = r(35134),
        I = r(43192),
        k = I.A && I.A.isMap;
      const M = k ? (0, x.A)(k) : function(t) {
        return (0, S.A)(t) && "[object Map]" == (0, v.A)(t)
      };
      var P = r(45862);
      var T = I.A && I.A.isSet;
      const U = T ? (0, x.A)(T) : function(t) {
        return (0, S.A)(t) && "[object Set]" == (0, v.A)(t)
      };
      var D = "[object Arguments]",
        C = "[object Function]",
        F = "[object Object]",
        B = {};
      B[D] = B["[object Array]"] = B["[object ArrayBuffer]"] = B["[object DataView]"] = B["[object Boolean]"] = B["[object Date]"] = B["[object Float32Array]"] = B["[object Float64Array]"] = B["[object Int8Array]"] = B["[object Int16Array]"] = B["[object Int32Array]"] = B["[object Map]"] = B["[object Number]"] = B[F] = B["[object RegExp]"] = B["[object Set]"] = B["[object String]"] = B["[object Symbol]"] = B["[object Uint8Array]"] = B["[object Uint8ClampedArray]"] = B["[object Uint16Array]"] = B["[object Uint32Array]"] = !0, B["[object Error]"] = B[C] = B["[object WeakMap]"] = !1;
      const $ = function t(e, r, h, y, _, g) {
        var j, w = 1 & r,
          S = 2 & r,
          x = 4 & r;
        if (h && (j = _ ? h(e, y, _, g) : h(e)), void 0 !== j) return j;
        if (!(0, P.A)(e)) return e;
        var I = (0, z.A)(e);
        if (I) {
          if (j = function(t) {
              var e = t.length,
                r = new t.constructor(e);
              return e && "string" == typeof t[0] && b.call(t, "index") && (r.index = t.index, r.input = t.input), r
            }(e), !w) return (0, f.A)(e, j)
        } else {
          var k = (0, v.A)(e),
            T = k == C || "[object GeneratorFunction]" == k;
          if ((0, E.A)(e)) return (0, s.A)(e, w);
          if (k == F || k == D || T && !_) {
            if (j = S || T ? {} : (0, m.A)(e), !w) return S ? function(t, e) {
              return (0, c.A)(t, (0, A.A)(t), e)
            }(e, function(t, e) {
              return t && (0, c.A)(e, (0, u.A)(e), t)
            }(j, e)) : function(t, e) {
              return (0, c.A)(t, (0, l.A)(t), e)
            }(e, function(t, e) {
              return t && (0, c.A)(e, (0, i.A)(e), t)
            }(j, e))
          } else {
            if (!B[k]) return _ ? e : {};
            j = O(e, k, w)
          }
        }
        g || (g = new n.A);
        var $ = g.get(e);
        if ($) return $;
        g.set(e, j), U(e) ? e.forEach(function(n) {
          j.add(t(n, r, h, n, e, g))
        }) : M(e) && e.forEach(function(n, o) {
          j.set(o, t(n, r, h, o, e, g))
        });
        var L = x ? S ? p.A : d.A : S ? u.A : i.A,
          N = I ? void 0 : L(e);
        return (0, o.A)(N || e, function(n, o) {
          N && (n = e[o = n]), (0, a.A)(j, o, t(n, r, h, o, e, g))
        }), j
      }
    },
    55481(t, e, r) {
      r.d(e, {
        A: () => n
      });
      const n = function(t, e, r) {
        for (var n = -1, o = Object(t), a = r(t), c = a.length; c--;) {
          var i = a[++n];
          if (!1 === e(o[i], i, o)) break
        }
        return t
      }
    },
    99793(t, e, r) {
      var n = r(61893),
        o = r(33018);
      r.d(e, ["A", 0, function(t, e) {
        for (var r = 0, a = (e = (0, n.A)(e, t)).length; null != t && r < a;) t = t[(0, o.A)(e[r++])];
        return r && r == a ? t : void 0
      }])
    },
    94526(t, e, r) {
      var n = r(68071),
        o = r(6700);
      r.d(e, ["A", 0, function(t, e, r) {
        var a = e(t);
        return (0, o.A)(t) ? a : (0, n.A)(a, r(t))
      }])
    },
    61893(t, e, r) {
      r.d(e, {
        A: () => d
      });
      var n = r(6700),
        o = r(50269),
        a = r(21541);

      function c(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
        var r = function() {
          var n = arguments,
            o = e ? e.apply(this, n) : n[0],
            a = r.cache;
          if (a.has(o)) return a.get(o);
          var c = t.apply(this, n);
          return r.cache = a.set(o, c) || a, c
        };
        return r.cache = new(c.Cache || a.A), r
      }
      c.Cache = a.A;
      var i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        u = /\\(\\)?/g;
      const s = (f = c(function(t) {
        var e = [];
        return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, r, n, o) {
          e.push(n ? o.replace(u, "$1") : r || t)
        }), e
      }, function(t) {
        return 500 === l.size && l.clear(), t
      }), l = f.cache, f);
      var f, l, A = r(91337);
      const d = function(t, e) {
        return (0, n.A)(t) ? t : (0, o.A)(t, e) ? [t] : s((0, A.A)(t))
      }
    },
    932(t, e, r) {
      var n = r(84137);
      r.d(e, ["A", 0, function(t) {
        var e = new t.constructor(t.byteLength);
        return new n.A(e).set(new n.A(t)), e
      }])
    },
    15545(t, e, r) {
      var n = r(34336),
        o = "object" == typeof exports && exports && !exports.nodeType && exports,
        a = o && "object" == typeof module && module && !module.nodeType && module,
        c = a && a.exports === o ? n.A.Buffer : void 0,
        i = c ? c.allocUnsafe : void 0;
      r.d(e, ["A", 0, function(t, e) {
        if (e) return t.slice();
        var r = t.length,
          n = i ? i(r) : new t.constructor(r);
        return t.copy(n), n
      }])
    },
    93870(t, e, r) {
      var n = r(932);
      r.d(e, ["A", 0, function(t, e) {
        var r = e ? (0, n.A)(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
      }])
    },
    24900(t, e, r) {
      r.d(e, ["A", 0, function(t, e) {
        var r = -1,
          n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
      }])
    },
    57502(t, e, r) {
      var n = r(79660),
        o = r(17367);
      r.d(e, ["A", 0, function(t, e, r, a) {
        var c = !r;
        r || (r = {});
        for (var i = -1, u = e.length; ++i < u;) {
          var s = e[i],
            f = a ? a(r[s], t[s], s, r, t) : void 0;
          void 0 === f && (f = t[s]), c ? (0, o.A)(r, s, f) : (0, n.A)(r, s, f)
        }
        return r
      }])
    },
    63406(t, e, r) {
      var n = r(56763);
      const o = function() {
        try {
          var t = (0, n.A)(Object, "defineProperty");
          return t({}, "", {}), t
        } catch (t) {}
      }();
      r.d(e, ["A", 0, o])
    },
    65883(t, e, r) {
      var n = r(94526),
        o = r(6866),
        a = r(71353);
      r.d(e, ["A", 0, function(t) {
        return (0, n.A)(t, a.A, o.A)
      }])
    },
    47016(t, e, r) {
      var n = r(94526),
        o = r(3582),
        a = r(62538);
      r.d(e, ["A", 0, function(t) {
        return (0, n.A)(t, a.A, o.A)
      }])
    },
    26670(t, e, r) {
      const n = (0, r(79260).A)(Object.getPrototypeOf, Object);
      r.d(e, ["A", 0, n])
    },
    6866(t, e, r) {
      r.d(e, {
        A: () => c
      });
      var n = r(76348),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols;
      const c = a ? function(t) {
        return null == t ? [] : (t = Object(t), function(t, e) {
          for (var r = -1, n = null == t ? 0 : t.length, o = 0, a = []; ++r < n;) {
            var c = t[r];
            e(c, r, t) && (a[o++] = c)
          }
          return a
        }(a(t), function(e) {
          return o.call(t, e)
        }))
      } : n.A
    },
    3582(t, e, r) {
      var n = r(68071),
        o = r(26670),
        a = r(6866),
        c = r(76348);
      const i = Object.getOwnPropertySymbols ? function(t) {
        for (var e = []; t;)(0, n.A)(e, (0, a.A)(t)), t = (0, o.A)(t);
        return e
      } : c.A;
      r.d(e, ["A", 0, i])
    },
    54746(t, e, r) {
      r.d(e, {
        A: () => u
      });
      var n = r(45862),
        o = Object.create;
      const a = function() {
        function t() {}
        return function(e) {
          if (!(0, n.A)(e)) return {};
          if (o) return o(e);
          t.prototype = e;
          var r = new t;
          return t.prototype = void 0, r
        }
      }();
      var c = r(26670),
        i = r(61044);
      const u = function(t) {
        return "function" != typeof t.constructor || (0, i.A)(t) ? {} : a((0, c.A)(t))
      }
    },
    17266(t, e, r) {
      var n = /^(?:0|[1-9]\d*)$/;
      r.d(e, ["A", 0, function(t, e) {
        var r = typeof t;
        return !!(e = e ?? 9007199254740991) && ("number" == r || "symbol" != r && n.test(t)) && t > -1 && t % 1 == 0 && t < e
      }])
    },
    50269(t, e, r) {
      var n = r(6700),
        o = r(80617),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        c = /^\w*$/;
      r.d(e, ["A", 0, function(t, e) {
        if ((0, n.A)(t)) return !1;
        var r = typeof t;
        return !("number" != r && "symbol" != r && "boolean" != r && null != t && !(0, o.A)(t)) || c.test(t) || !a.test(t) || null != e && t in Object(e)
      }])
    },
    33018(t, e, r) {
      var n = r(80617);
      r.d(e, ["A", 0, function(t) {
        if ("string" == typeof t || (0, n.A)(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -1 / 0 ? "-0" : e
      }])
    },
    47507(t, e, r) {
      r.d(e, ["A", 0, function(t, e) {
        return t === e || t != t && e != e
      }])
    },
    23159(t, e, r) {
      r.d(e, ["A", 0, function(t) {
        return t
      }])
    },
    80617(t, e, r) {
      var n = r(86204),
        o = r(96097);
      r.d(e, ["A", 0, function(t) {
        return "symbol" == typeof t || (0, o.A)(t) && "[object Symbol]" == (0, n.A)(t)
      }])
    },
    71353(t, e, r) {
      var n = r(57172),
        o = r(30570),
        a = r(99651);
      r.d(e, ["A", 0, function(t) {
        return (0, a.A)(t) ? (0, n.A)(t) : (0, o.A)(t)
      }])
    },
    62538(t, e, r) {
      r.d(e, {
        A: () => s
      });
      var n = r(57172),
        o = r(45862),
        a = r(61044);
      var c = Object.prototype.hasOwnProperty;
      const i = function(t) {
        if (!(0, o.A)(t)) return function(t) {
          var e = [];
          if (null != t)
            for (var r in Object(t)) e.push(r);
          return e
        }(t);
        var e = (0, a.A)(t),
          r = [];
        for (var n in t)("constructor" != n || !e && c.call(t, n)) && r.push(n);
        return r
      };
      var u = r(99651);
      const s = function(t) {
        return (0, u.A)(t) ? (0, n.A)(t, !0) : i(t)
      }
    },
    76348(t, e, r) {
      r.d(e, ["A", 0, function() {
        return []
      }])
    },
    91337(t, e, r) {
      r.d(e, {
        A: () => f
      });
      var n = r(94508),
        o = r(20829),
        a = r(6700),
        c = r(80617),
        i = n.A ? n.A.prototype : void 0,
        u = i ? i.toString : void 0;
      const s = function t(e) {
          if ("string" == typeof e) return e;
          if ((0, a.A)(e)) return (0, o.A)(e, t) + "";
          if ((0, c.A)(e)) return u ? u.call(e) : "";
          var r = e + "";
          return "0" == r && 1 / e == -1 / 0 ? "-0" : r
        },
        f = function(t) {
          return null == t ? "" : s(t)
        }
    }
  }
]);