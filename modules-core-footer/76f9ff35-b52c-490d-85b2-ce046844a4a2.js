! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      l = (new Error).stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "76f9ff35-b52c-490d-85b2-ce046844a4a2", e._sentryDebugIdIdentifier = "sentry-dbid-76f9ff35-b52c-490d-85b2-ce046844a4a2")
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
  [9869], {
    22102: (e, l, r) => {
      "use strict";
      r.d(l, {
        m: () => t
      });
      var t = function() {
        return r.nc
      }
    },
    63991: (e, l, r) => {
      var t = r(30019)(r(45590), "DataView");
      e.exports = t
    },
    2594: (e, l, r) => {
      var t = r(10305),
        a = r(22025),
        o = r(57168),
        i = r(39188),
        s = r(12084);

      function n(e) {
        var l = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++l < r;) {
          var t = e[l];
          this.set(t[0], t[1])
        }
      }
      n.prototype.clear = t, n.prototype.delete = a, n.prototype.get = o, n.prototype.has = i, n.prototype.set = s, e.exports = n
    },
    69090: (e, l, r) => {
      var t = r(43617),
        a = r(25833),
        o = r(94032),
        i = r(33684),
        s = r(37428);

      function n(e) {
        var l = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++l < r;) {
          var t = e[l];
          this.set(t[0], t[1])
        }
      }
      n.prototype.clear = t, n.prototype.delete = a, n.prototype.get = o, n.prototype.has = i, n.prototype.set = s, e.exports = n
    },
    96370: (e, l, r) => {
      var t = r(30019)(r(45590), "Map");
      e.exports = t
    },
    79186: (e, l, r) => {
      var t = r(38801),
        a = r(65721),
        o = r(2656),
        i = r(31620),
        s = r(70788);

      function n(e) {
        var l = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++l < r;) {
          var t = e[l];
          this.set(t[0], t[1])
        }
      }
      n.prototype.clear = t, n.prototype.delete = a, n.prototype.get = o, n.prototype.has = i, n.prototype.set = s, e.exports = n
    },
    9469: (e, l, r) => {
      var t = r(30019)(r(45590), "Promise");
      e.exports = t
    },
    86984: (e, l, r) => {
      var t = r(30019)(r(45590), "Set");
      e.exports = t
    },
    36068: (e, l, r) => {
      var t = r(69090),
        a = r(28703),
        o = r(24923),
        i = r(15802),
        s = r(27070),
        n = r(68774);

      function d(e) {
        var l = this.__data__ = new t(e);
        this.size = l.size
      }
      d.prototype.clear = a, d.prototype.delete = o, d.prototype.get = i, d.prototype.has = s, d.prototype.set = n, e.exports = d
    },
    44970: (e, l, r) => {
      var t = r(45590).Symbol;
      e.exports = t
    },
    18335: (e, l, r) => {
      var t = r(45590).Uint8Array;
      e.exports = t
    },
    98318: (e, l, r) => {
      var t = r(30019)(r(45590), "WeakMap");
      e.exports = t
    },
    18600: e => {
      e.exports = function(e, l, r) {
        switch (r.length) {
          case 0:
            return e.call(l);
          case 1:
            return e.call(l, r[0]);
          case 2:
            return e.call(l, r[0], r[1]);
          case 3:
            return e.call(l, r[0], r[1], r[2])
        }
        return e.apply(l, r)
      }
    },
    67368: e => {
      e.exports = function(e, l) {
        for (var r = -1, t = null == e ? 0 : e.length; ++r < t && !1 !== l(e[r], r, e););
        return e
      }
    },
    24671: e => {
      e.exports = function(e, l) {
        for (var r = -1, t = null == e ? 0 : e.length, a = 0, o = []; ++r < t;) {
          var i = e[r];
          l(i, r, e) && (o[a++] = i)
        }
        return o
      }
    },
    76990: (e, l, r) => {
      var t = r(43073),
        a = r(36171),
        o = r(90558),
        i = r(52757),
        s = r(9224),
        n = r(26850),
        d = Object.prototype.hasOwnProperty;
      e.exports = function(e, l) {
        var r = o(e),
          c = !r && a(e),
          h = !r && !c && i(e),
          f = !r && !c && !h && n(e),
          v = r || c || h || f,
          w = v ? t(e.length, String) : [],
          x = w.length;
        for (var u in e) !l && !d.call(e, u) || v && ("length" == u || h && ("offset" == u || "parent" == u) || f && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || s(u, x)) || w.push(u);
        return w
      }
    },
    14255: e => {
      e.exports = function(e, l) {
        for (var r = -1, t = null == e ? 0 : e.length, a = Array(t); ++r < t;) a[r] = l(e[r], r, e);
        return a
      }
    },
    8641: e => {
      e.exports = function(e, l) {
        for (var r = -1, t = l.length, a = e.length; ++r < t;) e[a + r] = l[r];
        return e
      }
    },
    68546: (e, l, r) => {
      var t = r(26025),
        a = r(11973);
      e.exports = function(e, l, r) {
        (void 0 !== r && !a(e[l], r) || void 0 === r && !(l in e)) && t(e, l, r)
      }
    },
    99446: (e, l, r) => {
      var t = r(26025),
        a = r(11973),
        o = Object.prototype.hasOwnProperty;
      e.exports = function(e, l, r) {
        var i = e[l];
        o.call(e, l) && a(i, r) && (void 0 !== r || l in e) || t(e, l, r)
      }
    },
    36978: (e, l, r) => {
      var t = r(11973);
      e.exports = function(e, l) {
        for (var r = e.length; r--;)
          if (t(e[r][0], l)) return r;
        return -1
      }
    },
    10466: (e, l, r) => {
      var t = r(16208),
        a = r(9363);
      e.exports = function(e, l) {
        return e && t(l, a(l), e)
      }
    },
    98437: (e, l, r) => {
      var t = r(16208),
        a = r(51680);
      e.exports = function(e, l) {
        return e && t(l, a(l), e)
      }
    },
    26025: (e, l, r) => {
      var t = r(33836);
      e.exports = function(e, l, r) {
        "__proto__" == l && t ? t(e, l, {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        }) : e[l] = r
      }
    },
    39566: (e, l, r) => {
      var t = r(36068),
        a = r(67368),
        o = r(99446),
        i = r(10466),
        s = r(98437),
        n = r(32483),
        d = r(50874),
        c = r(84354),
        h = r(58661),
        f = r(11329),
        v = r(86762),
        w = r(91422),
        x = r(96270),
        u = r(57568),
        g = r(89124),
        p = r(90558),
        j = r(52757),
        m = r(18329),
        M = r(88660),
        R = r(94751),
        b = r(9363),
        L = r(51680),
        z = "[object Arguments]",
        y = "[object Function]",
        C = "[object Object]",
        A = {};
      A[z] = A["[object Array]"] = A["[object ArrayBuffer]"] = A["[object DataView]"] = A["[object Boolean]"] = A["[object Date]"] = A["[object Float32Array]"] = A["[object Float64Array]"] = A["[object Int8Array]"] = A["[object Int16Array]"] = A["[object Int32Array]"] = A["[object Map]"] = A["[object Number]"] = A[C] = A["[object RegExp]"] = A["[object Set]"] = A["[object String]"] = A["[object Symbol]"] = A["[object Uint8Array]"] = A["[object Uint8ClampedArray]"] = A["[object Uint16Array]"] = A["[object Uint32Array]"] = !0, A["[object Error]"] = A[y] = A["[object WeakMap]"] = !1, e.exports = function e(l, r, D, I, B, S) {
        var H, V = 1 & r,
          N = 2 & r,
          G = 4 & r;
        if (D && (H = B ? D(l, I, B, S) : D(l)), void 0 !== H) return H;
        if (!M(l)) return l;
        var k = p(l);
        if (k) {
          if (H = x(l), !V) return d(l, H)
        } else {
          var X = w(l),
            O = X == y || "[object GeneratorFunction]" == X;
          if (j(l)) return n(l, V);
          if (X == C || X == z || O && !B) {
            if (H = N || O ? {} : g(l), !V) return N ? h(l, s(H, l)) : c(l, i(H, l))
          } else {
            if (!A[X]) return B ? l : {};
            H = u(l, X, V)
          }
        }
        S || (S = new t);
        var F = S.get(l);
        if (F) return F;
        S.set(l, H), R(l) ? l.forEach((function(t) {
          H.add(e(t, r, D, t, l, S))
        })) : m(l) && l.forEach((function(t, a) {
          H.set(a, e(t, r, D, a, l, S))
        }));
        var P = k ? void 0 : (G ? N ? v : f : N ? L : b)(l);
        return a(P || l, (function(t, a) {
          P && (t = l[a = t]), o(H, a, e(t, r, D, a, l, S))
        })), H
      }
    },
    25755: (e, l, r) => {
      var t = r(88660),
        a = Object.create,
        o = function() {
          function e() {}
          return function(l) {
            if (!t(l)) return {};
            if (a) return a(l);
            e.prototype = l;
            var r = new e;
            return e.prototype = void 0, r
          }
        }();
      e.exports = o
    },
    5297: (e, l, r) => {
      var t = r(8641),
        a = r(90482);
      e.exports = function e(l, r, o, i, s) {
        var n = -1,
          d = l.length;
        for (o || (o = a), s || (s = []); ++n < d;) {
          var c = l[n];
          r > 0 && o(c) ? r > 1 ? e(c, r - 1, o, i, s) : t(s, c) : i || (s[s.length] = c)
        }
        return s
      }
    },
    22284: (e, l, r) => {
      var t = r(87228)();
      e.exports = t
    },
    89611: (e, l, r) => {
      var t = r(69041),
        a = r(90320);
      e.exports = function(e, l) {
        for (var r = 0, o = (l = t(l, e)).length; null != e && r < o;) e = e[a(l[r++])];
        return r && r == o ? e : void 0
      }
    },
    5228: (e, l, r) => {
      var t = r(8641),
        a = r(90558);
      e.exports = function(e, l, r) {
        var o = l(e);
        return a(e) ? o : t(o, r(e))
      }
    },
    56203: (e, l, r) => {
      var t = r(44970),
        a = r(97390),
        o = r(65461),
        i = t ? t.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? a(e) : o(e)
      }
    },
    97907: (e, l, r) => {
      var t = r(56203),
        a = r(10939);
      e.exports = function(e) {
        return a(e) && "[object Arguments]" == t(e)
      }
    },
    91537: (e, l, r) => {
      var t = r(91422),
        a = r(10939);
      e.exports = function(e) {
        return a(e) && "[object Map]" == t(e)
      }
    },
    69312: (e, l, r) => {
      var t = r(17567),
        a = r(20351),
        o = r(88660),
        i = r(21754),
        s = /^\[object .+?Constructor\]$/,
        n = Function.prototype,
        d = Object.prototype,
        c = n.toString,
        h = d.hasOwnProperty,
        f = RegExp("^" + c.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      e.exports = function(e) {
        return !(!o(e) || a(e)) && (t(e) ? f : s).test(i(e))
      }
    },
    23399: (e, l, r) => {
      var t = r(91422),
        a = r(10939);
      e.exports = function(e) {
        return a(e) && "[object Set]" == t(e)
      }
    },
    43226: (e, l, r) => {
      var t = r(56203),
        a = r(82723),
        o = r(10939),
        i = {};
      i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, e.exports = function(e) {
        return o(e) && a(e.length) && !!i[t(e)]
      }
    },
    85211: (e, l, r) => {
      var t = r(12858),
        a = r(63937),
        o = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        if (!t(e)) return a(e);
        var l = [];
        for (var r in Object(e)) o.call(e, r) && "constructor" != r && l.push(r);
        return l
      }
    },
    67496: (e, l, r) => {
      var t = r(88660),
        a = r(12858),
        o = r(90762),
        i = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        if (!t(e)) return o(e);
        var l = a(e),
          r = [];
        for (var s in e)("constructor" != s || !l && i.call(e, s)) && r.push(s);
        return r
      }
    },
    93299: (e, l, r) => {
      var t = r(36068),
        a = r(68546),
        o = r(22284),
        i = r(28221),
        s = r(88660),
        n = r(51680),
        d = r(23475);
      e.exports = function e(l, r, c, h, f) {
        l !== r && o(r, (function(o, n) {
          if (f || (f = new t), s(o)) i(l, r, n, c, e, h, f);
          else {
            var v = h ? h(d(l, n), o, n + "", l, r, f) : void 0;
            void 0 === v && (v = o), a(l, n, v)
          }
        }), n)
      }
    },
    28221: (e, l, r) => {
      var t = r(68546),
        a = r(32483),
        o = r(17984),
        i = r(50874),
        s = r(89124),
        n = r(36171),
        d = r(90558),
        c = r(19062),
        h = r(52757),
        f = r(17567),
        v = r(88660),
        w = r(97232),
        x = r(26850),
        u = r(23475),
        g = r(40439);
      e.exports = function(e, l, r, p, j, m, M) {
        var R = u(e, r),
          b = u(l, r),
          L = M.get(b);
        if (L) t(e, r, L);
        else {
          var z = m ? m(R, b, r + "", e, l, M) : void 0,
            y = void 0 === z;
          if (y) {
            var C = d(b),
              A = !C && h(b),
              D = !C && !A && x(b);
            z = b, C || A || D ? d(R) ? z = R : c(R) ? z = i(R) : A ? (y = !1, z = a(b, !0)) : D ? (y = !1, z = o(b, !0)) : z = [] : w(b) || n(b) ? (z = R, n(R) ? z = g(R) : v(R) && !f(R) || (z = s(b))) : y = !1
          }
          y && (M.set(b, z), j(z, b, p, m, M), M.delete(b)), t(e, r, z)
        }
      }
    },
    9950: e => {
      var l = Math.ceil,
        r = Math.max;
      e.exports = function(e, t, a, o) {
        for (var i = -1, s = r(l((t - e) / (a || 1)), 0), n = Array(s); s--;) n[o ? s : ++i] = e, e += a;
        return n
      }
    },
    71809: (e, l, r) => {
      var t = r(98109),
        a = r(40778),
        o = r(93972);
      e.exports = function(e, l) {
        return o(a(e, l, t), e + "")
      }
    },
    87919: (e, l, r) => {
      var t = r(99446),
        a = r(69041),
        o = r(9224),
        i = r(88660),
        s = r(90320);
      e.exports = function(e, l, r, n) {
        if (!i(e)) return e;
        for (var d = -1, c = (l = a(l, e)).length, h = c - 1, f = e; null != f && ++d < c;) {
          var v = s(l[d]),
            w = r;
          if ("__proto__" === v || "constructor" === v || "prototype" === v) return e;
          if (d != h) {
            var x = f[v];
            void 0 === (w = n ? n(x, v, f) : void 0) && (w = i(x) ? x : o(l[d + 1]) ? [] : {})
          }
          t(f, v, w), f = f[v]
        }
        return e
      }
    },
    20131: (e, l, r) => {
      var t = r(94755),
        a = r(33836),
        o = r(98109),
        i = a ? function(e, l) {
          return a(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: t(l),
            writable: !0
          })
        } : o;
      e.exports = i
    },
    81957: e => {
      e.exports = function(e, l, r) {
        var t = -1,
          a = e.length;
        l < 0 && (l = -l > a ? 0 : a + l), (r = r > a ? a : r) < 0 && (r += a), a = l > r ? 0 : r - l >>> 0, l >>>= 0;
        for (var o = Array(a); ++t < a;) o[t] = e[t + l];
        return o
      }
    },
    43073: e => {
      e.exports = function(e, l) {
        for (var r = -1, t = Array(e); ++r < e;) t[r] = l(r);
        return t
      }
    },
    5131: (e, l, r) => {
      var t = r(44970),
        a = r(14255),
        o = r(90558),
        i = r(23771),
        s = t ? t.prototype : void 0,
        n = s ? s.toString : void 0;
      e.exports = function e(l) {
        if ("string" == typeof l) return l;
        if (o(l)) return a(l, e) + "";
        if (i(l)) return n ? n.call(l) : "";
        var r = l + "";
        return "0" == r && 1 / l == -1 / 0 ? "-0" : r
      }
    },
    50811: (e, l, r) => {
      var t = r(72089),
        a = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, t(e) + 1).replace(a, "") : e
      }
    },
    5820: e => {
      e.exports = function(e) {
        return function(l) {
          return e(l)
        }
      }
    },
    67402: (e, l, r) => {
      var t = r(69041),
        a = r(98831),
        o = r(42430),
        i = r(90320);
      e.exports = function(e, l) {
        return l = t(l, e), null == (e = o(e, l)) || delete e[i(a(l))]
      }
    },
    69041: (e, l, r) => {
      var t = r(90558),
        a = r(93563),
        o = r(86149),
        i = r(90195);
      e.exports = function(e, l) {
        return t(e) ? e : a(e, l) ? [e] : o(i(e))
      }
    },
    64362: (e, l, r) => {
      var t = r(18335);
      e.exports = function(e) {
        var l = new e.constructor(e.byteLength);
        return new t(l).set(new t(e)), l
      }
    },
    32483: (e, l, r) => {
      e = r.nmd(e);
      var t = r(45590),
        a = l && !l.nodeType && l,
        o = a && e && !e.nodeType && e,
        i = o && o.exports === a ? t.Buffer : void 0,
        s = i ? i.allocUnsafe : void 0;
      e.exports = function(e, l) {
        if (l) return e.slice();
        var r = e.length,
          t = s ? s(r) : new e.constructor(r);
        return e.copy(t), t
      }
    },
    63176: (e, l, r) => {
      var t = r(64362);
      e.exports = function(e, l) {
        var r = l ? t(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
      }
    },
    94732: e => {
      var l = /\w*$/;
      e.exports = function(e) {
        var r = new e.constructor(e.source, l.exec(e));
        return r.lastIndex = e.lastIndex, r
      }
    },
    56845: (e, l, r) => {
      var t = r(44970),
        a = t ? t.prototype : void 0,
        o = a ? a.valueOf : void 0;
      e.exports = function(e) {
        return o ? Object(o.call(e)) : {}
      }
    },
    17984: (e, l, r) => {
      var t = r(64362);
      e.exports = function(e, l) {
        var r = l ? t(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
      }
    },
    50874: e => {
      e.exports = function(e, l) {
        var r = -1,
          t = e.length;
        for (l || (l = Array(t)); ++r < t;) l[r] = e[r];
        return l
      }
    },
    16208: (e, l, r) => {
      var t = r(99446),
        a = r(26025);
      e.exports = function(e, l, r, o) {
        var i = !r;
        r || (r = {});
        for (var s = -1, n = l.length; ++s < n;) {
          var d = l[s],
            c = o ? o(r[d], e[d], d, r, e) : void 0;
          void 0 === c && (c = e[d]), i ? a(r, d, c) : t(r, d, c)
        }
        return r
      }
    },
    84354: (e, l, r) => {
      var t = r(16208),
        a = r(37011);
      e.exports = function(e, l) {
        return t(e, a(e), l)
      }
    },
    58661: (e, l, r) => {
      var t = r(16208),
        a = r(54976);
      e.exports = function(e, l) {
        return t(e, a(e), l)
      }
    },
    49302: (e, l, r) => {
      var t = r(45590)["__core-js_shared__"];
      e.exports = t
    },
    99216: (e, l, r) => {
      var t = r(71809),
        a = r(31615);
      e.exports = function(e) {
        return t((function(l, r) {
          var t = -1,
            o = r.length,
            i = o > 1 ? r[o - 1] : void 0,
            s = o > 2 ? r[2] : void 0;
          for (i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0, s && a(r[0], r[1], s) && (i = o < 3 ? void 0 : i, o = 1), l = Object(l); ++t < o;) {
            var n = r[t];
            n && e(l, n, t, i)
          }
          return l
        }))
      }
    },
    87228: e => {
      e.exports = function(e) {
        return function(l, r, t) {
          for (var a = -1, o = Object(l), i = t(l), s = i.length; s--;) {
            var n = i[e ? s : ++a];
            if (!1 === r(o[n], n, o)) break
          }
          return l
        }
      }
    },
    94845: (e, l, r) => {
      var t = r(9950),
        a = r(31615),
        o = r(80477);
      e.exports = function(e) {
        return function(l, r, i) {
          return i && "number" != typeof i && a(l, r, i) && (r = i = void 0), l = o(l), void 0 === r ? (r = l, l = 0) : r = o(r), i = void 0 === i ? l < r ? 1 : -1 : o(i), t(l, r, i, e)
        }
      }
    },
    92499: (e, l, r) => {
      var t = r(97232);
      e.exports = function(e) {
        return t(e) ? void 0 : e
      }
    },
    33836: (e, l, r) => {
      var t = r(30019),
        a = function() {
          try {
            var e = t(Object, "defineProperty");
            return e({}, "", {}), e
          } catch (e) {}
        }();
      e.exports = a
    },
    70375: (e, l, r) => {
      var t = r(60153),
        a = r(40778),
        o = r(93972);
      e.exports = function(e) {
        return o(a(e, void 0, t), e + "")
      }
    },
    94239: (e, l, r) => {
      var t = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = t
    },
    11329: (e, l, r) => {
      var t = r(5228),
        a = r(37011),
        o = r(9363);
      e.exports = function(e) {
        return t(e, o, a)
      }
    },
    86762: (e, l, r) => {
      var t = r(5228),
        a = r(54976),
        o = r(51680);
      e.exports = function(e) {
        return t(e, o, a)
      }
    },
    63396: (e, l, r) => {
      var t = r(68131);
      e.exports = function(e, l) {
        var r = e.__data__;
        return t(l) ? r["string" == typeof l ? "string" : "hash"] : r.map
      }
    },
    30019: (e, l, r) => {
      var t = r(69312),
        a = r(86787);
      e.exports = function(e, l) {
        var r = a(e, l);
        return t(r) ? r : void 0
      }
    },
    95880: (e, l, r) => {
      var t = r(85326)(Object.getPrototypeOf, Object);
      e.exports = t
    },
    97390: (e, l, r) => {
      var t = r(44970),
        a = Object.prototype,
        o = a.hasOwnProperty,
        i = a.toString,
        s = t ? t.toStringTag : void 0;
      e.exports = function(e) {
        var l = o.call(e, s),
          r = e[s];
        try {
          e[s] = void 0;
          var t = !0
        } catch (e) {}
        var a = i.call(e);
        return t && (l ? e[s] = r : delete e[s]), a
      }
    },
    37011: (e, l, r) => {
      var t = r(24671),
        a = r(14466),
        o = Object.prototype.propertyIsEnumerable,
        i = Object.getOwnPropertySymbols,
        s = i ? function(e) {
          return null == e ? [] : (e = Object(e), t(i(e), (function(l) {
            return o.call(e, l)
          })))
        } : a;
      e.exports = s
    },
    54976: (e, l, r) => {
      var t = r(8641),
        a = r(95880),
        o = r(37011),
        i = r(14466),
        s = Object.getOwnPropertySymbols ? function(e) {
          for (var l = []; e;) t(l, o(e)), e = a(e);
          return l
        } : i;
      e.exports = s
    },
    91422: (e, l, r) => {
      var t = r(63991),
        a = r(96370),
        o = r(9469),
        i = r(86984),
        s = r(98318),
        n = r(56203),
        d = r(21754),
        c = "[object Map]",
        h = "[object Promise]",
        f = "[object Set]",
        v = "[object WeakMap]",
        w = "[object DataView]",
        x = d(t),
        u = d(a),
        g = d(o),
        p = d(i),
        j = d(s),
        m = n;
      (t && m(new t(new ArrayBuffer(1))) != w || a && m(new a) != c || o && m(o.resolve()) != h || i && m(new i) != f || s && m(new s) != v) && (m = function(e) {
        var l = n(e),
          r = "[object Object]" == l ? e.constructor : void 0,
          t = r ? d(r) : "";
        if (t) switch (t) {
          case x:
            return w;
          case u:
            return c;
          case g:
            return h;
          case p:
            return f;
          case j:
            return v
        }
        return l
      }), e.exports = m
    },
    86787: e => {
      e.exports = function(e, l) {
        return null == e ? void 0 : e[l]
      }
    },
    10305: (e, l, r) => {
      var t = r(46169);
      e.exports = function() {
        this.__data__ = t ? t(null) : {}, this.size = 0
      }
    },
    22025: e => {
      e.exports = function(e) {
        var l = this.has(e) && delete this.__data__[e];
        return this.size -= l ? 1 : 0, l
      }
    },
    57168: (e, l, r) => {
      var t = r(46169),
        a = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        var l = this.__data__;
        if (t) {
          var r = l[e];
          return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return a.call(l, e) ? l[e] : void 0
      }
    },
    39188: (e, l, r) => {
      var t = r(46169),
        a = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        var l = this.__data__;
        return t ? void 0 !== l[e] : a.call(l, e)
      }
    },
    12084: (e, l, r) => {
      var t = r(46169);
      e.exports = function(e, l) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = t && void 0 === l ? "__lodash_hash_undefined__" : l, this
      }
    },
    96270: e => {
      var l = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        var r = e.length,
          t = new e.constructor(r);
        return r && "string" == typeof e[0] && l.call(e, "index") && (t.index = e.index, t.input = e.input), t
      }
    },
    57568: (e, l, r) => {
      var t = r(64362),
        a = r(63176),
        o = r(94732),
        i = r(56845),
        s = r(17984);
      e.exports = function(e, l, r) {
        var n = e.constructor;
        switch (l) {
          case "[object ArrayBuffer]":
            return t(e);
          case "[object Boolean]":
          case "[object Date]":
            return new n(+e);
          case "[object DataView]":
            return a(e, r);
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
            return new n;
          case "[object Number]":
          case "[object String]":
            return new n(e);
          case "[object RegExp]":
            return o(e);
          case "[object Symbol]":
            return i(e)
        }
      }
    },
    89124: (e, l, r) => {
      var t = r(25755),
        a = r(95880),
        o = r(12858);
      e.exports = function(e) {
        return "function" != typeof e.constructor || o(e) ? {} : t(a(e))
      }
    },
    90482: (e, l, r) => {
      var t = r(44970),
        a = r(36171),
        o = r(90558),
        i = t ? t.isConcatSpreadable : void 0;
      e.exports = function(e) {
        return o(e) || a(e) || !!(i && e && e[i])
      }
    },
    9224: e => {
      var l = /^(?:0|[1-9]\d*)$/;
      e.exports = function(e, r) {
        var t = typeof e;
        return !!(r = null == r ? 9007199254740991 : r) && ("number" == t || "symbol" != t && l.test(e)) && e > -1 && e % 1 == 0 && e < r
      }
    },
    31615: (e, l, r) => {
      var t = r(11973),
        a = r(29833),
        o = r(9224),
        i = r(88660);
      e.exports = function(e, l, r) {
        if (!i(r)) return !1;
        var s = typeof l;
        return !!("number" == s ? a(r) && o(l, r.length) : "string" == s && l in r) && t(r[l], e)
      }
    },
    93563: (e, l, r) => {
      var t = r(90558),
        a = r(23771),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/;
      e.exports = function(e, l) {
        if (t(e)) return !1;
        var r = typeof e;
        return !("number" != r && "symbol" != r && "boolean" != r && null != e && !a(e)) || i.test(e) || !o.test(e) || null != l && e in Object(l)
      }
    },
    68131: e => {
      e.exports = function(e) {
        var l = typeof e;
        return "string" == l || "number" == l || "symbol" == l || "boolean" == l ? "__proto__" !== e : null === e
      }
    },
    20351: (e, l, r) => {
      var t, a = r(49302),
        o = (t = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "")) ? "Symbol(src)_1." + t : "";
      e.exports = function(e) {
        return !!o && o in e
      }
    },
    12858: e => {
      var l = Object.prototype;
      e.exports = function(e) {
        var r = e && e.constructor;
        return e === ("function" == typeof r && r.prototype || l)
      }
    },
    43617: e => {
      e.exports = function() {
        this.__data__ = [], this.size = 0
      }
    },
    25833: (e, l, r) => {
      var t = r(36978),
        a = Array.prototype.splice;
      e.exports = function(e) {
        var l = this.__data__,
          r = t(l, e);
        return !(r < 0 || (r == l.length - 1 ? l.pop() : a.call(l, r, 1), --this.size, 0))
      }
    },
    94032: (e, l, r) => {
      var t = r(36978);
      e.exports = function(e) {
        var l = this.__data__,
          r = t(l, e);
        return r < 0 ? void 0 : l[r][1]
      }
    },
    33684: (e, l, r) => {
      var t = r(36978);
      e.exports = function(e) {
        return t(this.__data__, e) > -1
      }
    },
    37428: (e, l, r) => {
      var t = r(36978);
      e.exports = function(e, l) {
        var r = this.__data__,
          a = t(r, e);
        return a < 0 ? (++this.size, r.push([e, l])) : r[a][1] = l, this
      }
    },
    38801: (e, l, r) => {
      var t = r(2594),
        a = r(69090),
        o = r(96370);
      e.exports = function() {
        this.size = 0, this.__data__ = {
          hash: new t,
          map: new(o || a),
          string: new t
        }
      }
    },
    65721: (e, l, r) => {
      var t = r(63396);
      e.exports = function(e) {
        var l = t(this, e).delete(e);
        return this.size -= l ? 1 : 0, l
      }
    },
    2656: (e, l, r) => {
      var t = r(63396);
      e.exports = function(e) {
        return t(this, e).get(e)
      }
    },
    31620: (e, l, r) => {
      var t = r(63396);
      e.exports = function(e) {
        return t(this, e).has(e)
      }
    },
    70788: (e, l, r) => {
      var t = r(63396);
      e.exports = function(e, l) {
        var r = t(this, e),
          a = r.size;
        return r.set(e, l), this.size += r.size == a ? 0 : 1, this
      }
    },
    15309: (e, l, r) => {
      var t = r(54603);
      e.exports = function(e) {
        var l = t(e, (function(e) {
            return 500 === r.size && r.clear(), e
          })),
          r = l.cache;
        return l
      }
    },
    46169: (e, l, r) => {
      var t = r(30019)(Object, "create");
      e.exports = t
    },
    63937: (e, l, r) => {
      var t = r(85326)(Object.keys, Object);
      e.exports = t
    },
    90762: e => {
      e.exports = function(e) {
        var l = [];
        if (null != e)
          for (var r in Object(e)) l.push(r);
        return l
      }
    },
    25626: (e, l, r) => {
      e = r.nmd(e);
      var t = r(94239),
        a = l && !l.nodeType && l,
        o = a && e && !e.nodeType && e,
        i = o && o.exports === a && t.process,
        s = function() {
          try {
            return o && o.require && o.require("util").types || i && i.binding && i.binding("util")
          } catch (e) {}
        }();
      e.exports = s
    },
    65461: e => {
      var l = Object.prototype.toString;
      e.exports = function(e) {
        return l.call(e)
      }
    },
    85326: e => {
      e.exports = function(e, l) {
        return function(r) {
          return e(l(r))
        }
      }
    },
    40778: (e, l, r) => {
      var t = r(18600),
        a = Math.max;
      e.exports = function(e, l, r) {
        return l = a(void 0 === l ? e.length - 1 : l, 0),
          function() {
            for (var o = arguments, i = -1, s = a(o.length - l, 0), n = Array(s); ++i < s;) n[i] = o[l + i];
            i = -1;
            for (var d = Array(l + 1); ++i < l;) d[i] = o[i];
            return d[l] = r(n), t(e, this, d)
          }
      }
    },
    42430: (e, l, r) => {
      var t = r(89611),
        a = r(81957);
      e.exports = function(e, l) {
        return l.length < 2 ? e : t(e, a(l, 0, -1))
      }
    },
    45590: (e, l, r) => {
      var t = r(94239),
        a = "object" == typeof self && self && self.Object === Object && self,
        o = t || a || Function("return this")();
      e.exports = o
    },
    23475: e => {
      e.exports = function(e, l) {
        if (("constructor" !== l || "function" != typeof e[l]) && "__proto__" != l) return e[l]
      }
    },
    93972: (e, l, r) => {
      var t = r(20131),
        a = r(84956)(t);
      e.exports = a
    },
    84956: e => {
      var l = Date.now;
      e.exports = function(e) {
        var r = 0,
          t = 0;
        return function() {
          var a = l(),
            o = 16 - (a - t);
          if (t = a, o > 0) {
            if (++r >= 800) return arguments[0]
          } else r = 0;
          return e.apply(void 0, arguments)
        }
      }
    },
    28703: (e, l, r) => {
      var t = r(69090);
      e.exports = function() {
        this.__data__ = new t, this.size = 0
      }
    },
    24923: e => {
      e.exports = function(e) {
        var l = this.__data__,
          r = l.delete(e);
        return this.size = l.size, r
      }
    },
    15802: e => {
      e.exports = function(e) {
        return this.__data__.get(e)
      }
    },
    27070: e => {
      e.exports = function(e) {
        return this.__data__.has(e)
      }
    },
    68774: (e, l, r) => {
      var t = r(69090),
        a = r(96370),
        o = r(79186);
      e.exports = function(e, l) {
        var r = this.__data__;
        if (r instanceof t) {
          var i = r.__data__;
          if (!a || i.length < 199) return i.push([e, l]), this.size = ++r.size, this;
          r = this.__data__ = new o(i)
        }
        return r.set(e, l), this.size = r.size, this
      }
    },
    86149: (e, l, r) => {
      var t = r(15309),
        a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        i = t((function(e) {
          var l = [];
          return 46 === e.charCodeAt(0) && l.push(""), e.replace(a, (function(e, r, t, a) {
            l.push(t ? a.replace(o, "$1") : r || e)
          })), l
        }));
      e.exports = i
    },
    90320: (e, l, r) => {
      var t = r(23771);
      e.exports = function(e) {
        if ("string" == typeof e || t(e)) return e;
        var l = e + "";
        return "0" == l && 1 / e == -1 / 0 ? "-0" : l
      }
    },
    21754: e => {
      var l = Function.prototype.toString;
      e.exports = function(e) {
        if (null != e) {
          try {
            return l.call(e)
          } catch (e) {}
          try {
            return e + ""
          } catch (e) {}
        }
        return ""
      }
    },
    72089: e => {
      var l = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && l.test(e.charAt(r)););
        return r
      }
    },
    39796: (e, l, r) => {
      var t = r(39566);
      e.exports = function(e) {
        return t(e, 5)
      }
    },
    94755: e => {
      e.exports = function(e) {
        return function() {
          return e
        }
      }
    },
    12296: (e, l, r) => {
      var t = r(88660),
        a = r(21383),
        o = r(48635),
        i = Math.max,
        s = Math.min;
      e.exports = function(e, l, r) {
        var n, d, c, h, f, v, w = 0,
          x = !1,
          u = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function p(l) {
          var r = n,
            t = d;
          return n = d = void 0, w = l, h = e.apply(t, r)
        }

        function j(e) {
          var r = e - v;
          return void 0 === v || r >= l || r < 0 || u && e - w >= c
        }

        function m() {
          var e = a();
          if (j(e)) return M(e);
          f = setTimeout(m, function(e) {
            var r = l - (e - v);
            return u ? s(r, c - (e - w)) : r
          }(e))
        }

        function M(e) {
          return f = void 0, g && n ? p(e) : (n = d = void 0, h)
        }

        function R() {
          var e = a(),
            r = j(e);
          if (n = arguments, d = this, v = e, r) {
            if (void 0 === f) return function(e) {
              return w = e, f = setTimeout(m, l), x ? p(e) : h
            }(v);
            if (u) return clearTimeout(f), f = setTimeout(m, l), p(v)
          }
          return void 0 === f && (f = setTimeout(m, l)), h
        }
        return l = o(l) || 0, t(r) && (x = !!r.leading, c = (u = "maxWait" in r) ? i(o(r.maxWait) || 0, l) : c, g = "trailing" in r ? !!r.trailing : g), R.cancel = function() {
          void 0 !== f && clearTimeout(f), w = 0, n = v = d = f = void 0
        }, R.flush = function() {
          return void 0 === f ? h : M(a())
        }, R
      }
    },
    11973: e => {
      e.exports = function(e, l) {
        return e === l || e != e && l != l
      }
    },
    60153: (e, l, r) => {
      var t = r(5297);
      e.exports = function(e) {
        return null != e && e.length ? t(e, 1) : []
      }
    },
    98109: e => {
      e.exports = function(e) {
        return e
      }
    },
    36171: (e, l, r) => {
      var t = r(97907),
        a = r(10939),
        o = Object.prototype,
        i = o.hasOwnProperty,
        s = o.propertyIsEnumerable,
        n = t(function() {
          return arguments
        }()) ? t : function(e) {
          return a(e) && i.call(e, "callee") && !s.call(e, "callee")
        };
      e.exports = n
    },
    90558: e => {
      var l = Array.isArray;
      e.exports = l
    },
    29833: (e, l, r) => {
      var t = r(17567),
        a = r(82723);
      e.exports = function(e) {
        return null != e && a(e.length) && !t(e)
      }
    },
    19062: (e, l, r) => {
      var t = r(29833),
        a = r(10939);
      e.exports = function(e) {
        return a(e) && t(e)
      }
    },
    52757: (e, l, r) => {
      e = r.nmd(e);
      var t = r(45590),
        a = r(53356),
        o = l && !l.nodeType && l,
        i = o && e && !e.nodeType && e,
        s = i && i.exports === o ? t.Buffer : void 0,
        n = (s ? s.isBuffer : void 0) || a;
      e.exports = n
    },
    17567: (e, l, r) => {
      var t = r(56203),
        a = r(88660);
      e.exports = function(e) {
        if (!a(e)) return !1;
        var l = t(e);
        return "[object Function]" == l || "[object GeneratorFunction]" == l || "[object AsyncFunction]" == l || "[object Proxy]" == l
      }
    },
    82723: e => {
      e.exports = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      }
    },
    18329: (e, l, r) => {
      var t = r(91537),
        a = r(5820),
        o = r(25626),
        i = o && o.isMap,
        s = i ? a(i) : t;
      e.exports = s
    },
    88660: e => {
      e.exports = function(e) {
        var l = typeof e;
        return null != e && ("object" == l || "function" == l)
      }
    },
    10939: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    97232: (e, l, r) => {
      var t = r(56203),
        a = r(95880),
        o = r(10939),
        i = Function.prototype,
        s = Object.prototype,
        n = i.toString,
        d = s.hasOwnProperty,
        c = n.call(Object);
      e.exports = function(e) {
        if (!o(e) || "[object Object]" != t(e)) return !1;
        var l = a(e);
        if (null === l) return !0;
        var r = d.call(l, "constructor") && l.constructor;
        return "function" == typeof r && r instanceof r && n.call(r) == c
      }
    },
    94751: (e, l, r) => {
      var t = r(23399),
        a = r(5820),
        o = r(25626),
        i = o && o.isSet,
        s = i ? a(i) : t;
      e.exports = s
    },
    23771: (e, l, r) => {
      var t = r(56203),
        a = r(10939);
      e.exports = function(e) {
        return "symbol" == typeof e || a(e) && "[object Symbol]" == t(e)
      }
    },
    26850: (e, l, r) => {
      var t = r(43226),
        a = r(5820),
        o = r(25626),
        i = o && o.isTypedArray,
        s = i ? a(i) : t;
      e.exports = s
    },
    9363: (e, l, r) => {
      var t = r(76990),
        a = r(85211),
        o = r(29833);
      e.exports = function(e) {
        return o(e) ? t(e) : a(e)
      }
    },
    51680: (e, l, r) => {
      var t = r(76990),
        a = r(67496),
        o = r(29833);
      e.exports = function(e) {
        return o(e) ? t(e, !0) : a(e)
      }
    },
    98831: e => {
      e.exports = function(e) {
        var l = null == e ? 0 : e.length;
        return l ? e[l - 1] : void 0
      }
    },
    54603: (e, l, r) => {
      var t = r(79186);

      function a(e, l) {
        if ("function" != typeof e || null != l && "function" != typeof l) throw new TypeError("Expected a function");
        var r = function() {
          var t = arguments,
            a = l ? l.apply(this, t) : t[0],
            o = r.cache;
          if (o.has(a)) return o.get(a);
          var i = e.apply(this, t);
          return r.cache = o.set(a, i) || o, i
        };
        return r.cache = new(a.Cache || t), r
      }
      a.Cache = t, e.exports = a
    },
    15307: (e, l, r) => {
      var t = r(93299),
        a = r(99216)((function(e, l, r) {
          t(e, l, r)
        }));
      e.exports = a
    },
    21383: (e, l, r) => {
      var t = r(45590);
      e.exports = function() {
        return t.Date.now()
      }
    },
    5126: (e, l, r) => {
      var t = r(14255),
        a = r(39566),
        o = r(67402),
        i = r(69041),
        s = r(16208),
        n = r(92499),
        d = r(70375),
        c = r(86762),
        h = d((function(e, l) {
          var r = {};
          if (null == e) return r;
          var d = !1;
          l = t(l, (function(l) {
            return l = i(l, e), d || (d = l.length > 1), l
          })), s(e, c(e), r), d && (r = a(r, 7, n));
          for (var h = l.length; h--;) o(r, l[h]);
          return r
        }));
      e.exports = h
    },
    97718: (e, l, r) => {
      var t = r(94845)();
      e.exports = t
    },
    91439: (e, l, r) => {
      var t = r(87919);
      e.exports = function(e, l, r, a) {
        return a = "function" == typeof a ? a : void 0, null == e ? e : t(e, l, r, a)
      }
    },
    14466: e => {
      e.exports = function() {
        return []
      }
    },
    53356: e => {
      e.exports = function() {
        return !1
      }
    },
    80477: (e, l, r) => {
      var t = r(48635);
      e.exports = function(e) {
        return e ? Infinity === (e = t(e)) || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    48635: (e, l, r) => {
      var t = r(50811),
        a = r(88660),
        o = r(23771),
        i = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        n = /^0o[0-7]+$/i,
        d = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (o(e)) return NaN;
        if (a(e)) {
          var l = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = a(l) ? l + "" : l
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = t(e);
        var r = s.test(e);
        return r || n.test(e) ? d(e.slice(2), r ? 2 : 8) : i.test(e) ? NaN : +e
      }
    },
    40439: (e, l, r) => {
      var t = r(16208),
        a = r(51680);
      e.exports = function(e) {
        return t(e, a(e))
      }
    },
    90195: (e, l, r) => {
      var t = r(5131);
      e.exports = function(e) {
        return null == e ? "" : t(e)
      }
    },
    26068: (e, l, r) => {
      "use strict";
      r.d(l, {
        T0: () => o
      });
      var t = r(62229),
        a = r(22102),
        o = function() {
          var e, l, r, o = (l = 0, r = null, e = {
            add: function(e) {
              var t, o;
              0 == l && (r = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var l = (0, a.m)();
                return l && e.setAttribute("nonce", l), e
              }()) && (o = e, (t = r).styleSheet ? t.styleSheet.cssText = o : t.appendChild(document.createTextNode(o)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(r)), l++
            },
            remove: function() {
              !--l && r && (r.parentNode && r.parentNode.removeChild(r), r = null)
            }
          }, function(l, r) {
            t.useEffect((function() {
              return e.add(l),
                function() {
                  e.remove()
                }
            }), [l && r])
          });
          return function(e) {
            var l = e.styles,
              r = e.dynamic;
            return o(l, r), null
          }
        }
    },
    79898: (e, l, r) => {
      "use strict";
      r.d(l, {
        m: () => i
      });
      var t = r(63461),
        a = r(62229),
        o = function(e) {
          var l = e.sideCar,
            r = (0, t.__rest)(e, ["sideCar"]);
          if (!l) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
          var o = l.read();
          if (!o) throw new Error("Sidecar medium not found");
          return a.createElement(o, (0, t.__assign)({}, r))
        };

      function i(e, l) {
        return e.useMedium(l), o
      }
      o.isSideCarExport = !0
    },
    81402: (e, l, r) => {
      "use strict";
      r.d(l, {
        f: () => o
      });
      var t = r(63461);

      function a(e) {
        return e
      }

      function o(e) {
        void 0 === e && (e = {});
        var l = function(e, l) {
          void 0 === l && (l = a);
          var r = [],
            t = !1;
          return {
            read: function() {
              if (t) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
              return r.length ? r[r.length - 1] : e
            },
            useMedium: function(e) {
              var a = l(e, t);
              return r.push(a),
                function() {
                  r = r.filter((function(e) {
                    return e !== a
                  }))
                }
            },
            assignSyncMedium: function(e) {
              for (t = !0; r.length;) {
                var l = r;
                r = [], l.forEach(e)
              }
              r = {
                push: function(l) {
                  return e(l)
                },
                filter: function() {
                  return r
                }
              }
            },
            assignMedium: function(e) {
              t = !0;
              var l = [];
              if (r.length) {
                var a = r;
                r = [], a.forEach(e), l = r
              }
              var o = function() {
                  var r = l;
                  l = [], r.forEach(e)
                },
                i = function() {
                  return Promise.resolve().then(o)
                };
              i(), r = {
                push: function(e) {
                  l.push(e), i()
                },
                filter: function(e) {
                  return l = l.filter(e), r
                }
              }
            }
          }
        }(null);
        return l.options = (0, t.__assign)({
          async: !0,
          ssr: !1
        }, e), l
      }
    },
    83540: (e, l, r) => {
      "use strict";
      r.d(l, {
        X: () => t
      });
      const t = "undefined" == typeof window
    },
    57120: (e, l, r) => {
      "use strict";
      r.d(l, {
        X3: () => t.X,
        AK: () => j,
        bZ: () => h,
        v6: () => n
      });
      var t = r(83540),
        a = r(15302);
      const o = new Map;

      function i(e, l) {
        if (e === l) return e;
        const r = o.get(e);
        if (r) return r.forEach((e => e(l))), l;
        const t = o.get(l);
        return t ? (t.forEach((l => l(e))), e) : l
      }

      function s(...e) {
        return (...l) => {
          for (const r of e) "function" == typeof r && r(...l)
        }
      }

      function n(...e) {
        const l = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const t = e[r];
          for (const e in t) {
            const r = l[e],
              o = t[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? l[e] = s(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? l.id = i(r, o) : l[e] = void 0 !== o ? o : r : l[e] = (0, a.A)(r, o)
          }
        }
        return l
      }
      const d = /^(on.*)$/,
        c = /^(onPress.*)$/;

      function h(e, {
        onPress: l
      } = {
        onPress: !0
      }) {
        const r = {},
          t = {};
        for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (c.test(a) ? l ? r[a] = e[a] : t[a] = e[a] : d.test(a) ? r[a] = e[a] : t[a] = e[a]);
        return {
          events: r,
          others: t
        }
      }
      var f;

      function v(e) {
        return e
      }
      r(97718), r(5126), r(15307), r(39796), r(91439), r(12296),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const {
        cbrt: w,
        sqrt: x,
        PI: u
      } = Math, g = (e, l, r, t, a) => {
        const o = l + r * e,
          i = o ** 2 + t;
        if (i > 0) {
          const e = x(i);
          return w(o + e) + w(o - e) - a
        }
        const s = w(x(o * o - i)),
          n = o ? Math.atan(x(-i) / o) : -u / 2;
        let d;
        return d = r < 0 ? (o > 0 ? 2 * u : u) - n : a < 0 ? (o > 0 ? 2 * u : -3 * u) + n : (o > 0 ? 0 : u) + n, 2 * s * Math.cos(d / 3) - a
      }, p = (e, l, r, t) => ((l * e + 3 * r) * e + t) * e;

      function j(e, l, r, t) {
        if (!(0 <= e && e <= 1 && 0 <= r && r <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === l && r === t) return v;
        const a = 6 * (3 * e - 3 * r + 1),
          o = 6 * (r - 2 * e),
          i = 3 * e,
          s = a * a,
          n = o * o,
          d = o / a,
          c = 3 * o * i / s - n * o / (s * a),
          h = 2 * i / a - n / s,
          f = h * h * h,
          w = 3 / a,
          x = 3 * l - 3 * t + 1,
          u = t - 2 * l,
          j = 3 * l,
          m = a ? g : v;
        return e => 0 === e || 1 === e ? e : p(m(e, c, w, f, d), x, u, j)
      }
    },
    3082: (e, l, r) => {
      "use strict";
      r.r(l), r.d(l, {
        AlertTriangle: () => ge,
        AlertTriangleSolid: () => Ss,
        ArrowDown: () => C,
        ArrowDownSolid: () => ii,
        ArrowLeft: () => B,
        ArrowLeftSolid: () => ci,
        ArrowRight: () => N,
        ArrowRightSolid: () => wi,
        ArrowUp: () => b,
        ArrowUpSolid: () => ri,
        Arrows: () => le,
        AuxMenuSolid: () => Ao,
        Bell: () => so,
        BlockCircle: () => De,
        Car: () => mo,
        ChatBubbleSolid: () => yi,
        Check: () => Ha,
        CheckCircle: () => ve,
        CheckCircleSolid: () => So,
        CheckShieldSolid: () => _i,
        CheckSquare: () => Ea,
        CheckSquareSolid: () => Vi,
        ChevronDown: () => W,
        ChevronLeft: () => q,
        ChevronRight: () => O,
        ChevronUp: () => Y,
        Circle: () => va,
        CircleDot: () => ga,
        Clock: () => ze,
        Code: () => Hr,
        CurrencySolid: () => pi,
        Discord: () => da,
        Download: () => ke,
        Envelope: () => hl,
        EnvelopeSolid: () => $o,
        ExternalLink: () => sl,
        Eye: () => Nt,
        EyeSlash: () => Ot,
        EyeSlashSolid: () => As,
        EyeSolid: () => us,
        Facebook: () => Yt,
        Files: () => He,
        Gear: () => kr,
        GearSolid: () => Go,
        Globe: () => zr,
        Grid: () => Er,
        HelpCircle: () => gr,
        House: () => Ct,
        IdentificationSolid: () => as,
        InfoCircle: () => Me,
        InfoCircleSolid: () => Ls,
        Instagram: () => Wt,
        Link: () => Ze,
        List: () => Zr,
        Maximize: () => Wl,
        Menu: () => Pr,
        Minimize: () => Yl,
        Minus: () => za,
        MinusCircle: () => ka,
        MinusCircleSolid: () => Lo,
        MinusSquare: () => Za,
        MinusSquareSolid: () => Xi,
        Moon: () => lr,
        Padlock: () => jt,
        PadlockPassword: () => bt,
        PadlockPasswordSolid: () => fs,
        PadlockSolid: () => ns,
        PaperPlaneSolid: () => Uo,
        Paperclip: () => xl,
        PartialCircle: () => Mr,
        Pause: () => ql,
        Pencil: () => Je,
        Person: () => Dr,
        PersonBlock: () => Bt,
        PersonBlockSolid: () => es,
        PersonMinus: () => xt,
        PersonMinusSolid: () => Qi,
        PersonPlus: () => ht,
        PersonPlusSolid: () => Ti,
        PersonSolid: () => Fo,
        PhoneSolid: () => Ri,
        Play: () => Bl,
        Plus: () => Ma,
        Property: () => fo,
        Refresh: () => tl,
        Revert: () => oe,
        Search: () => Jr,
        SkipBack: () => Nl,
        SkipForward: () => Ol,
        Square: () => Pa,
        SquareSolid: () => Ii,
        Sun: () => or,
        ThumbsDown: () => Ja,
        ThumbsUp: () => to,
        Trash: () => Ee,
        Twitch: () => qt,
        Twitter: () => la,
        TwoPeopleSolid: () => Ko,
        Upload: () => Pe,
        VolumeDown: () => jl,
        VolumeOff: () => Cl,
        VolumeUp: () => bl,
        Weapon: () => uo,
        WifiOff: () => st,
        WifiOn: () => tt,
        X: () => Da,
        XCircle: () => de,
        XCircleSolid: () => ms,
        Youtube: () => oa,
        ZoomIn: () => dr,
        ZoomOut: () => vr
      });
      var t = r(91029),
        a = r(62229),
        o = (r(44853), r(50786)),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, l) => {
          const r = a.forwardRef(((e, r) => {
            const {
              asChild: a,
              ...i
            } = e, s = a ? o.DX : l;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(s, {
              ...i,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${l}`, {
            ...e,
            [l]: r
          }
        }), {}),
        s = a.forwardRef(((e, l) => (0, t.jsx)(i.span, {
          ...e,
          ref: l,
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
        })));
      s.displayName = "VisuallyHidden";
      var n = s,
        d = ({
          children: e,
          label: l
        }) => {
          const r = a.Children.only(e);
          return (0, t.jsxs)(t.Fragment, {
            children: [a.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, t.jsx)(n, {
              children: l
            })]
          })
        };
      d.displayName = "AccessibleIcon";
      var c = d,
        h = r(57120);

      function f(e) {
        var l = function(e, l) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var t = r.call(e, "string");
            if ("object" != typeof t) return t;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof l ? l : String(l)
      }

      function v(e, l) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          l && (t = t.filter((function(l) {
            return Object.getOwnPropertyDescriptor(e, l).enumerable
          }))), r.push.apply(r, t)
        }
        return r
      }

      function w(e) {
        for (var l = 1; l < arguments.length; l++) {
          var r = null != arguments[l] ? arguments[l] : {};
          l % 2 ? v(Object(r), !0).forEach((function(l) {
            var t, a, o;
            t = e, a = l, o = r[l], (a = f(a)) in t ? Object.defineProperty(t, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[a] = o
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(l) {
            Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(r, l))
          }))
        }
        return e
      }

      function x(e, l) {
        var r = {};
        for (var t in e) r[t] = l(e[t], t);
        return r
      }
      var u, g, p = (e, l, r) => {
          for (var t of Object.keys(e)) {
            var a;
            if (e[t] !== (null !== (a = l[t]) && void 0 !== a ? a : r[t])) return !1
          }
          return !0
        },
        j = (u = {
          defaultClassName: "foundry_v1yii70",
          variantClassNames: {
            size: {
              MD: "foundry_v1yii71",
              LG: "foundry_v1yii72",
              XL: "foundry_v1yii73"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, (g = e => {
          var l = u.defaultClassName,
            r = w(w({}, u.defaultVariants), e);
          for (var t in r) {
            var a, o = null !== (a = r[t]) && void 0 !== a ? a : u.defaultVariants[t];
            if (null != o) {
              var i = o;
              "boolean" == typeof i && (i = !0 === i ? "true" : "false");
              var s = u.variantClassNames[t][i];
              s && (l += " " + s)
            }
          }
          for (var [n, d] of u.compoundVariants) p(n, r, u.defaultVariants) && (l += " " + d);
          return l
        }).variants = () => Object.keys(u.variantClassNames), g.classNames = {
          get base() {
            return u.defaultClassName.split(" ")[0]
          },
          get variants() {
            return x(u.variantClassNames, (e => x(e, (e => e.split(" ")[0]))))
          }
        }, g);
      const m = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.47 2.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1-1.06 1.06L8.75 4.81V13a.75.75 0 0 1-1.5 0V4.81L3.53 8.53a.75.75 0 0 1-1.06-1.06z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        M = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M11.293 3.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L13 6.414V20a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        R = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 3.75c.352 0 .688.149.925.41l10 11a1.25 1.25 0 1 1-1.85 1.68L17.25 8.234V26a1.25 1.25 0 1 1-2.5 0V8.233l-7.825 8.608a1.25 1.25 0 1 1-1.85-1.682l10-11c.237-.26.573-.409.925-.409",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        b = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(m, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(M, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(R, {
              ...a,
              ref: r
            })]
          })
        }));
      b.displayName = "ArrowUp", b.category = "Arrows", b.variant = "Outline", b.keywords = "Up, Navigation, Increase", b.MD = m, b.LG = M, b.XL = R;
      const L = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 2.25a.75.75 0 0 1 .75.75v8.19l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 1.06-1.06l3.72 3.72V3A.75.75 0 0 1 8 2.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        z = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 3a1 1 0 0 1 1 1v13.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L11 17.586V4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        y = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 3.75c.69 0 1.25.56 1.25 1.25v18.767l7.825-8.608a1.25 1.25 0 1 1 1.85 1.682l-10 11a1.25 1.25 0 0 1-1.85 0l-10-11a1.25 1.25 0 1 1 1.85-1.682l7.825 8.608V5c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        C = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(L, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(z, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(y, {
              ...a,
              ref: r
            })]
          })
        }));
      C.displayName = "ArrowDown", C.category = "Arrows", C.variant = "Outline", C.keywords = "Down, Navigation, Decrease", C.MD = L, C.LG = z, C.XL = y;
      const A = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.53 2.47a.75.75 0 0 1 0 1.06L3.81 7.25H14a.75.75 0 0 1 0 1.5H3.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        D = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M11.707 4.293a1 1 0 0 1 0 1.414L6.414 11H20a1 1 0 1 1 0 2H6.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        I = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16.925 5.16a1.25 1.25 0 0 1-.084 1.765L8.233 14.75H27a1.25 1.25 0 0 1 0 2.5H8.233l8.608 7.825a1.25 1.25 0 1 1-1.682 1.85l-11-10a1.25 1.25 0 0 1 0-1.85l11-10a1.25 1.25 0 0 1 1.766.084",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        B = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(A, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(D, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(I, {
              ...a,
              ref: r
            })]
          })
        }));
      B.displayName = "ArrowLeft", B.category = "Arrows", B.variant = "Outline", B.keywords = "Left, Navigation, Back", B.MD = A, B.LG = D, B.XL = I;
      const S = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8.47 2.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06-1.06l3.72-3.72H2a.75.75 0 0 1 0-1.5h10.19L8.47 3.53a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        H = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 1 1 0-2h13.586l-5.293-5.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        V = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15.075 5.16a1.25 1.25 0 0 1 1.766-.085l11 10a1.25 1.25 0 0 1 0 1.85l-11 10a1.25 1.25 0 1 1-1.682-1.85l8.608-7.825H5a1.25 1.25 0 1 1 0-2.5h18.767l-8.608-7.825a1.25 1.25 0 0 1-.084-1.766",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        N = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(S, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(H, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(V, {
              ...a,
              ref: r
            })]
          })
        }));
      N.displayName = "ArrowRight", N.category = "Arrows", N.variant = "Outline", N.keywords = "Right, Navigation, Forward", N.MD = S, N.LG = H, N.XL = V;
      const G = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M5.529 3.529c.26-.26.682-.26.942 0l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 1 1-.942-.942L9.057 8 5.53 4.471a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        k = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        X = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M11.116 7.116a1.25 1.25 0 0 1 1.768 0l8 8a1.25 1.25 0 0 1 0 1.768l-8 8a1.25 1.25 0 0 1-1.768-1.768L18.232 16l-7.116-7.116a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        O = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(G, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(k, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(X, {
              ...a,
              ref: r
            })]
          })
        }));
      O.displayName = "ChevronRight", O.category = "Arrows", O.variant = "Outline", O.keywords = "Right, Direction, Side, Navigation", O.MD = G, O.LG = k, O.XL = X;
      const F = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M10.471 3.529c.26.26.26.682 0 .942L6.943 8l3.528 3.529a.667.667 0 0 1-.942.942l-4-4a.667.667 0 0 1 0-.942l4-4c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        P = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15.707 5.293a1 1 0 0 1 0 1.414L10.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _ = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M20.884 7.116a1.25 1.25 0 0 1 0 1.768L13.768 16l7.116 7.116a1.25 1.25 0 0 1-1.768 1.768l-8-8a1.25 1.25 0 0 1 0-1.768l8-8a1.25 1.25 0 0 1 1.768 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        q = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(F, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(P, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(_, {
              ...a,
              ref: r
            })]
          })
        }));
      q.displayName = "ChevronLeft", q.category = "Arrows", q.variant = "Outline", q.keywords = "Left, Direction, Side, Navigation", q.MD = F, q.LG = P, q.XL = _;
      const U = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3.529 5.529c.26-.26.682-.26.942 0L8 9.057l3.529-3.528a.667.667 0 1 1 .942.942l-4 4a.667.667 0 0 1-.942 0l-4-4a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        E = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        T = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.116 11.116a1.25 1.25 0 0 1 1.768 0L16 18.232l7.116-7.116a1.25 1.25 0 0 1 1.768 1.768l-8 8a1.25 1.25 0 0 1-1.768 0l-8-8a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        W = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(U, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(E, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(T, {
              ...a,
              ref: r
            })]
          })
        }));
      W.displayName = "ChevronDown", W.category = "Arrows", W.variant = "Outline", W.keywords = "Down, Direction, Bottom, Navigation", W.MD = U, W.LG = E, W.XL = T;
      const $ = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.529 5.529c.26-.26.682-.26.942 0l4 4a.667.667 0 0 1-.942.942L8 6.943 4.471 10.47a.667.667 0 1 1-.942-.942z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Z = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M11.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Q = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15.116 11.116a1.25 1.25 0 0 1 1.768 0l8 8a1.25 1.25 0 0 1-1.768 1.768L16 13.768l-7.116 7.116a1.25 1.25 0 0 1-1.768-1.768z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Y = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)($, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Z, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Q, {
              ...a,
              ref: r
            })]
          })
        }));
      Y.displayName = "ChevronUp", Y.category = "Arrows", Y.variant = "Outline", Y.keywords = "Up, Direction, Top, Navigation", Y.MD = $, Y.LG = Z, Y.XL = Q;
      const K = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4.47 3.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72V12a.75.75 0 0 1-1.5 0V5.81l-.72.72a.75.75 0 0 1-1.06-1.06zM11 3.25a.75.75 0 0 1 .75.75v6.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V4a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        J = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 5a1 1 0 0 1 .8.4l3 4a1 1 0 0 1-1.6 1.2L9 9v9a1 1 0 1 1-2 0V9l-1.2 1.6a1 1 0 1 1-1.6-1.2l3-4A1 1 0 0 1 8 5m8 0a1 1 0 0 1 1 1v9l1.2-1.6a1 1 0 0 1 1.6 1.2l-3 4a1 1 0 0 1-1.6 0l-3-4a1 1 0 0 1 1.6-1.2L15 15V6a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ee = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M11 6.75c.418 0 .808.209 1.04.557l4 6a1.25 1.25 0 0 1-2.08 1.386l-1.71-2.564V24a1.25 1.25 0 1 1-2.5 0V12.129l-1.71 2.564a1.25 1.25 0 0 1-2.08-1.386l4-6A1.25 1.25 0 0 1 11 6.75m10 0c.69 0 1.25.56 1.25 1.25v11.872l1.71-2.565a1.25 1.25 0 0 1 2.08 1.386l-4 6a1.25 1.25 0 0 1-2.08 0l-4-6a1.25 1.25 0 0 1 2.08-1.386l1.71 2.565V8c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        le = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(K, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(J, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ee, {
              ...a,
              ref: r
            })]
          })
        }));
      le.displayName = "Arrows", le.category = "Arrows", le.variant = "Outline", le.keywords = "Sorting, Sortable, Control, Filter, Sort", le.MD = K, le.LG = J, le.XL = ee;
      const re = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M5.47 3.47a.75.75 0 0 1 1.06 1.06L6 4zm-.66 2.78 1.72-1.719L6 4l-.53-.53-3 3a.75.75 0 0 0 0 1.06l2.997 2.998.002.002L6 10l-.53.53a.75.75 0 0 0 1.06-1.06v-.001L4.81 7.75H10a2.25 2.25 0 0 1 0 4.5H7.643a.75.75 0 0 0 0 1.5H10a3.75 3.75 0 1 0 0-7.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        te = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M9.707 5.293a1 1 0 0 1 0 1.414L7.414 9H14.5a5.5 5.5 0 1 1 0 11h-2.464a1 1 0 1 1 0-2H14.5a3.5 3.5 0 1 0 0-7H7.414l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ae = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M13.884 6.116a1.25 1.25 0 0 1 0 1.768l-2.866 2.866h8.444c3.841 0 6.788 3.342 6.788 7.25s-2.947 7.25-6.788 7.25h-3.033a1.25 1.25 0 1 1 0-2.5h3.033c2.276 0 4.288-2.03 4.288-4.75s-2.012-4.75-4.288-4.75h-8.444l2.866 2.866a1.25 1.25 0 0 1-1.768 1.768l-5-5a1.25 1.25 0 0 1 0-1.768l5-5a1.25 1.25 0 0 1 1.768 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        oe = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(re, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(te, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ae, {
              ...a,
              ref: r
            })]
          })
        }));
      oe.displayName = "Revert", oe.category = "Arrows", oe.variant = "Outline", oe.keywords = "Back, Undo, Return, Arrow, Navigation", oe.MD = re, oe.LG = te, oe.XL = ae;
      const ie = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m4.22-2.53a.75.75 0 0 1 1.06 0L8 6.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L9.06 8l1.47 1.47a.75.75 0 1 1-1.06 1.06L8 9.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L6.94 8 5.47 6.53a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        se = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m6.293-3.707a1 1 0 0 1 1.414 0L12 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 12 8.293 9.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ne = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m8.366-4.884a1.25 1.25 0 0 1 1.768 0L16 14.232l3.116-3.116a1.25 1.25 0 0 1 1.768 1.768L17.768 16l3.116 3.116a1.25 1.25 0 0 1-1.768 1.768L16 17.768l-3.116 3.116a1.25 1.25 0 0 1-1.768-1.768L14.232 16l-3.116-3.116a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        de = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ie, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(se, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ne, {
              ...a,
              ref: r
            })]
          })
        }));
      de.displayName = "XCircle", de.category = "Feedback", de.variant = "Outline", de.keywords = "Close, Error, Remove, Clean, Erase, Deprecate, Delete, Navigation", de.MD = ie, de.LG = se, de.XL = ne;
      const ce = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m10.28-2.53a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06L7 8.94l3.47-3.47a.75.75 0 0 1 1.06 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        he = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m14.664-3.747a1 1 0 0 1 .083 1.411l-5.333 6a1 1 0 0 1-1.495 0l-2.666-3a1 1 0 0 1 1.494-1.328l1.92 2.159 4.586-5.16a1 1 0 0 1 1.411-.082",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fe = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m19.05-4.96c.53.442.602 1.23.16 1.76l-6.666 8a1.25 1.25 0 0 1-1.921 0l-3.333-4a1.25 1.25 0 0 1 1.92-1.6l2.373 2.847L20.04 11.2a1.25 1.25 0 0 1 1.76-.16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ve = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ce, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(he, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(fe, {
              ...a,
              ref: r
            })]
          })
        }));
      ve.displayName = "CheckCircle", ve.category = "Feedback", ve.variant = "Outline", ve.keywords = "Done, Ready, Yes, Available, Completed, Circle, Approve, Success", ve.MD = ce, ve.LG = he, ve.XL = fe;
      const we = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.053 1.512a1.85 1.85 0 0 1 1.894 0c.286.17.521.413.686.7l.002.004 4.87 8.602a2.02 2.02 0 0 1 .005 1.924c-.16.296-.393.548-.68.727a1.85 1.85 0 0 1-.957.28l-.009.001H3.127a1.85 1.85 0 0 1-.957-.281 1.94 1.94 0 0 1-.68-.727 2.02 2.02 0 0 1 .006-1.924l.005-.01 4.866-8.596c.165-.287.4-.53.686-.7M8 2.75a.35.35 0 0 0-.18.05.43.43 0 0 0-.15.157l-.001.001L2.81 11.54a.52.52 0 0 0 .001.49q.062.111.151.165a.35.35 0 0 0 .18.055h9.717a.35.35 0 0 0 .178-.055.44.44 0 0 0 .152-.164.52.52 0 0 0 0-.49L8.332 2.957v-.001A.43.43 0 0 0 8.18 2.8.35.35 0 0 0 8 2.75m0 2.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 8 5.25m-.75 5.25A.75.75 0 0 1 8 9.75h.1a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xe = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M10.655 3.361a2.69 2.69 0 0 1 2.69 0c.41.237.749.575.989.981l.003.005 7.296 12.497.008.014a2.8 2.8 0 0 1 .007 2.735c-.232.419-.57.771-.98 1.019s-.88.383-1.36.388H4.692a2.7 2.7 0 0 1-1.36-.388c-.411-.248-.749-.6-.981-1.019a2.8 2.8 0 0 1 .007-2.735l.008-.014 7.3-12.502c.24-.406.579-.744.988-.98M12 5a.7.7 0 0 0-.345.093.74.74 0 0 0-.266.265l-7.29 12.486a.8.8 0 0 0 .001.778.75.75 0 0 0 .266.278.7.7 0 0 0 .345.1h14.578a.7.7 0 0 0 .345-.1c.108-.065.2-.16.266-.278a.8.8 0 0 0 0-.778L12.613 5.36v-.002a.74.74 0 0 0-.267-.265A.7.7 0 0 0 12 5m0 3.004a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M11 16.5a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ue = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M14.233 4.239A3.45 3.45 0 0 1 16 3.75c.623 0 1.232.17 1.767.489s.973.771 1.282 1.31l.003.005 9.728 17.184.01.017a3.8 3.8 0 0 1 .46 1.805 3.8 3.8 0 0 1-.45 1.806 3.6 3.6 0 0 1-1.271 1.36 3.45 3.45 0 0 1-1.786.524H6.257a3.45 3.45 0 0 1-1.786-.524 3.6 3.6 0 0 1-1.27-1.36 3.8 3.8 0 0 1-.451-1.806 3.8 3.8 0 0 1 .46-1.805l.01-.017 9.731-17.19a3.6 3.6 0 0 1 1.282-1.31M16 6.25a.95.95 0 0 0-.487.136c-.153.092-.29.228-.391.403l-.002.003L5.401 23.96c-.097.18-.15.39-.151.606 0 .22.053.431.152.614.098.183.235.326.39.423.154.095.322.144.489.147h19.438a.95.95 0 0 0 .488-.147c.155-.097.293-.24.391-.423a1.3 1.3 0 0 0 .152-.614 1.3 1.3 0 0 0-.151-.606l-9.72-17.168v-.003a1.1 1.1 0 0 0-.392-.403A.95.95 0 0 0 16 6.25m0 4.5c.69 0 1.25.56 1.25 1.25v6a1.25 1.25 0 1 1-2.5 0v-6c0-.69.56-1.25 1.25-1.25M14.75 23c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 1 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ge = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(we, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(xe, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ue, {
              ...a,
              ref: r
            })]
          })
        }));
      ge.displayName = "AlertTriangle", ge.category = "Feedback", ge.variant = "Outline", ge.keywords = "Warning, Alert, Caution, Attention, Danger, Error, Triangle", ge.MD = we, ge.LG = xe, ge.XL = ue;
      const pe = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m6-3A.75.75 0 0 1 8 4.25h.1a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 5M8 7.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 8 7.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        je = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m9-4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m1 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        me = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m12-6c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 1 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25M16 13.75c.69 0 1.25.56 1.25 1.25v6a1.25 1.25 0 1 1-2.5 0v-6c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Me = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(pe, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(je, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(me, {
              ...a,
              ref: r
            })]
          })
        }));
      Me.displayName = "InfoCircle", Me.category = "Feedback", Me.variant = "Outline", Me.keywords = "Info, Information, Help, Support", Me.MD = pe, Me.LG = je, Me.XL = me;
      const Re = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0M8 4.25a.75.75 0 0 1 .75.75v2.536l1.585.793a.75.75 0 1 1-.67 1.342l-2-1A.75.75 0 0 1 7.25 8V5A.75.75 0 0 1 8 4.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        be = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-6a1 1 0 0 1 1 1v5.382l3.447 1.724a1 1 0 1 1-.894 1.788l-4-2A1 1 0 0 1 11 13V7a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Le = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16M16 6.75c.69 0 1.25.56 1.25 1.25v8.228l5.309 2.654a1.25 1.25 0 1 1-1.118 2.236l-6-3A1.25 1.25 0 0 1 14.75 17V8c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ze = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Re, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(be, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Le, {
              ...a,
              ref: r
            })]
          })
        }));
      ze.displayName = "Clock", ze.category = "Feedback", ze.variant = "Outline", ze.keywords = "Time, Hour, Minute, Second, Planned, Watch", ze.MD = Re, ze.LG = be, ze.XL = Le;
      const ye = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3.795 4.856a5.25 5.25 0 0 0 7.349 7.349zm1.06-1.06 7.35 7.348a5.25 5.25 0 0 0-7.349-7.349M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ce = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M5.68 7.094A8 8 0 0 0 16.905 18.32zM7.094 5.68 18.32 16.906A8 8 0 0 0 7.094 5.68M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ae = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.566 9.334A10.7 10.7 0 0 0 5.25 16c0 5.937 4.813 10.75 10.75 10.75 2.518 0 4.834-.866 6.666-2.316zm1.768-1.768 15.1 15.1A10.7 10.7 0 0 0 26.75 16c0-5.937-4.813-10.75-10.75-10.75-2.518 0-4.834.866-6.666 2.316M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        De = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ye, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Ce, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Ae, {
              ...a,
              ref: r
            })]
          })
        }));
      De.displayName = "BlockCircle", De.category = "Feedback", De.variant = "Outline", De.keywords = "Blocked, Restricted, Denied, Forbidden, Unavailable, Stop, No, Cancel, Error, Alert", De.MD = ye, De.LG = Ce, De.XL = Ae;
      const Ie = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M5.874 1.725A2.08 2.08 0 0 1 7.23 1.25h5.538a1.98 1.98 0 0 1 1.981 1.98v5.54c0 .444-.103.925-.393 1.316-.31.42-.787.664-1.357.664h-.75v-1.5H13a.25.25 0 0 0 .11-.019.1.1 0 0 0 .042-.038c.04-.055.098-.189.098-.424V3.231a.48.48 0 0 0-.48-.481H7.23a.6.6 0 0 0-.383.116c-.055.047-.097.114-.097.234v.75h-1.5V3.1c0-.56.234-1.043.624-1.375M2.25 6.23A1.98 1.98 0 0 1 4.23 4.25h5.54a1.98 1.98 0 0 1 1.98 1.98v5.54a1.98 1.98 0 0 1-1.98 1.98H4.23a1.98 1.98 0 0 1-1.98-1.98zm1.98-.481a.48.48 0 0 0-.48.48v5.54c0 .265.215.48.48.48h5.54a.48.48 0 0 0 .48-.48V6.23a.48.48 0 0 0-.48-.48z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Be = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.945 3.564C8.503 3.151 9.197 3 9.846 3h8.308A2.846 2.846 0 0 1 21 5.846v8.308c0 .65-.15 1.343-.564 1.9-.442.597-1.119.946-1.936.946h-1v-2h1a.5.5 0 0 0 .22-.041.3.3 0 0 0 .109-.095c.081-.11.171-.34.171-.71V5.846A.846.846 0 0 0 18.154 5H9.846c-.37 0-.6.09-.71.171a.3.3 0 0 0-.095.109A.5.5 0 0 0 9 5.5v1H7v-1c0-.817.35-1.494.945-1.936M3 9.846A2.846 2.846 0 0 1 5.846 7h8.308A2.846 2.846 0 0 1 17 9.846v8.308A2.846 2.846 0 0 1 14.154 21H5.846A2.846 2.846 0 0 1 3 18.154zM5.846 9A.846.846 0 0 0 5 9.846v8.308c0 .467.379.846.846.846h8.308a.846.846 0 0 0 .846-.846V9.846A.846.846 0 0 0 14.154 9z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Se = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M10.764 5.086c.618-.736 1.559-1.336 2.698-1.336h11.077a3.71 3.71 0 0 1 3.711 3.712v11.077c0 1.106-.545 2.044-1.263 2.677A4.1 4.1 0 0 1 24.3 22.25h-1.25v-2.5h1.25c.352 0 .738-.149 1.033-.408.291-.258.417-.55.417-.803V7.461c0-.67-.542-1.212-1.212-1.212H13.462c-.22 0-.51.12-.783.444-.274.326-.428.747-.428 1.106v1.25h-2.5V7.8c0-1 .397-1.98 1.014-2.714M3.75 13.461A3.71 3.71 0 0 1 7.462 9.75h11.077a3.71 3.71 0 0 1 3.711 3.711v11.077a3.71 3.71 0 0 1-3.712 3.712H7.462a3.71 3.71 0 0 1-3.712-3.712zm3.712-1.211c-.67 0-1.212.542-1.212 1.211v11.077c0 .67.542 1.212 1.212 1.212h11.077c.669 0 1.211-.542 1.211-1.212V13.462c0-.669-.542-1.211-1.212-1.211z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        He = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ie, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Be, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Se, {
              ...a,
              ref: r
            })]
          })
        }));
      He.displayName = "Files", He.category = "Files", He.variant = "Outline", He.keywords = "Copy, Data, Document, File, Folder, Restore", He.MD = Ie, He.LG = Be, He.XL = Se;
      const Ve = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 1.25a.75.75 0 0 1 .75.75v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V2A.75.75 0 0 1 8 1.25m-5 7a.75.75 0 0 1 .75.75v3.12l.02.014a.93.93 0 0 0 .48.116h7.5a.93.93 0 0 0 .5-.13V9a.75.75 0 0 1 1.5 0v3.2c0 .546-.337.958-.712 1.197-.376.241-.84.353-1.288.353h-7.5c-.447 0-.912-.112-1.288-.353-.375-.24-.712-.65-.712-1.197V9A.75.75 0 0 1 3 8.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ne = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 2a1 1 0 0 1 1 1v8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L11 11.586V3a1 1 0 0 1 1-1M4 13a1 1 0 0 1 1 1v4.718c.02.018.05.043.1.073.19.114.512.209.9.209h12c.388 0 .71-.095.9-.209a.6.6 0 0 0 .1-.073V14a1 1 0 1 1 2 0v4.8c0 .795-.521 1.376-1.071 1.706-.56.336-1.256.494-1.929.494H6c-.673 0-1.368-.158-1.929-.494C3.521 20.176 3 19.595 3 18.8V14a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ge = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 2.75c.69 0 1.25.56 1.25 1.25v11.982l4.866-4.866a1.25 1.25 0 0 1 1.768 1.768l-7 7a1.25 1.25 0 0 1-1.768 0l-7-7a1.25 1.25 0 0 1 1.768-1.768l4.866 4.866V4c0-.69.56-1.25 1.25-1.25m-11 15c.69 0 1.25.56 1.25 1.25v6.314a.8.8 0 0 0 .184.137c.287.167.759.299 1.316.299h16.5c.557 0 1.03-.132 1.316-.3a.8.8 0 0 0 .184-.136V19a1.25 1.25 0 1 1 2.5 0v6.4c0 1.04-.7 1.79-1.427 2.212-.745.433-1.672.638-2.573.638H7.75c-.901 0-1.828-.205-2.573-.638C4.45 27.189 3.75 26.44 3.75 25.4V19c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ke = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ve, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Ne, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Ge, {
              ...a,
              ref: r
            })]
          })
        }));
      ke.displayName = "Download", ke.category = "Files", ke.variant = "Outline", ke.keywords = "Down, File", ke.MD = Ve, ke.LG = Ne, ke.XL = Ge;
      const Xe = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.47 1.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L8.75 3.81V9a.75.75 0 0 1-1.5 0V3.81L5.53 5.53a.75.75 0 0 1-1.06-1.06zM3 6.25a.75.75 0 0 1 .75.75v4.8c0 .11.045.22.136.307a.53.53 0 0 0 .364.143h7.5a.53.53 0 0 0 .364-.143.43.43 0 0 0 .136-.307V7a.75.75 0 0 1 1.5 0v4.8c0 .527-.219 1.026-.597 1.39-.377.362-.882.56-1.403.56h-7.5c-.52 0-1.026-.198-1.403-.56a1.93 1.93 0 0 1-.597-1.39V7A.75.75 0 0 1 3 6.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Oe = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M11.293 2.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L13 5.414V15a1 1 0 1 1-2 0V5.414L7.707 8.707a1 1 0 0 1-1.414-1.414zM4 10a1 1 0 0 1 1 1v7.2c0 .176.077.37.255.53.181.163.448.27.745.27h12c.297 0 .564-.107.745-.27A.72.72 0 0 0 19 18.2V11a1 1 0 1 1 2 0v7.2c0 .779-.345 1.501-.917 2.016A3.12 3.12 0 0 1 18 21H6a3.12 3.12 0 0 1-2.083-.784A2.71 2.71 0 0 1 3 18.2V11a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fe = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15.116 3.116a1.25 1.25 0 0 1 1.768 0l7 7a1.25 1.25 0 0 1-1.768 1.768L17.25 7.018V20a1.25 1.25 0 1 1-2.5 0V7.018l-4.866 4.866a1.25 1.25 0 0 1-1.768-1.768zM5 13.75c.69 0 1.25.56 1.25 1.25v9.6c0 .246.11.522.377.755.273.238.674.395 1.123.395h16.5c.449 0 .85-.157 1.123-.395.267-.233.377-.51.377-.755V15a1.25 1.25 0 1 1 2.5 0v9.6c0 1.027-.469 1.972-1.233 2.639-.76.662-1.757 1.011-2.767 1.011H7.75c-1.01 0-2.007-.349-2.766-1.011-.765-.667-1.234-1.612-1.234-2.639V15c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pe = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Xe, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Oe, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Fe, {
              ...a,
              ref: r
            })]
          })
        }));
      Pe.displayName = "Upload", Pe.category = "Files", Pe.variant = "Outline", Pe.keywords = "Up, File, Share", Pe.MD = Xe, Pe.LG = Oe, Pe.XL = Fe;
      const _e = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7 2.75a.25.25 0 0 0-.25.25v.25h2.5V3A.25.25 0 0 0 9 2.75zm3.75.5V3A1.75 1.75 0 0 0 9 1.25H7A1.75 1.75 0 0 0 5.25 3v.25H3a.75.75 0 0 0 0 1.5h.25v5.534c0 .576.03 1.088.125 1.527.096.446.272.862.597 1.194.636.65 1.617.745 2.684.745h2.688c1.067 0 2.048-.094 2.685-.745.324-.332.5-.748.597-1.194.095-.438.124-.951.124-1.527V4.75H13a.75.75 0 0 0 0-1.5zm.5 1.5h-6.5v5.534c0 .542.03.928.09 1.208.06.273.138.397.204.464.145.149.492.294 1.612.294h2.688c1.12 0 1.467-.145 1.612-.294.066-.067.144-.19.204-.463.06-.281.09-.667.09-1.21zM6.5 6.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m3 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qe = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M10.066 4.273c-.037.125-.066.34-.066.719V5h4v-.008c0-.378-.03-.594-.066-.72a.3.3 0 0 0-.034-.083l-.008-.008c-.016-.013-.104-.069-.375-.114-.269-.045-.643-.067-1.173-.067h-.688c-.53 0-.904.022-1.173.067-.27.045-.359.101-.375.114-.005.003-.005.004-.008.007a.3.3 0 0 0-.034.085M16 5v-.008c0-.829-.094-1.8-.908-2.411-.374-.28-.813-.415-1.246-.487S12.908 2 12.344 2h-.688c-.564 0-1.068.022-1.502.094s-.872.206-1.246.487C8.094 3.19 8 4.163 8 4.992V5H4a1 1 0 0 0 0 2h1v8.933c0 .86.044 1.617.184 2.26.142.655.397 1.253.863 1.729C6.961 20.854 8.38 21 9.984 21h4.032c1.605 0 3.023-.146 3.937-1.078.466-.476.72-1.074.863-1.728.14-.644.184-1.402.184-2.261V7h1a1 1 0 1 0 0-2zm1 2H7v8.933c0 .815.044 1.402.138 1.835.092.423.218.632.338.754.259.264.832.478 2.508.478h4.032c1.675 0 2.25-.214 2.508-.478.12-.122.246-.331.338-.754.094-.433.138-1.02.138-1.835zm-7 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ue = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M13.342 5.673c-.053.179-.092.476-.092.983v.094h5.5v-.094c0-.507-.039-.804-.092-.983-.04-.134-.073-.157-.083-.164l-.002-.001c-.037-.028-.169-.106-.536-.168-.366-.06-.87-.09-1.578-.09h-.918c-.708 0-1.212.03-1.578.09-.367.062-.499.14-.536.168l-.002.001c-.01.007-.043.03-.083.164M21.25 6.75v-.094c0-1.104-.127-2.36-1.177-3.148-.484-.363-1.055-.539-1.625-.634-.572-.095-1.24-.124-1.99-.124h-.917c-.75 0-1.417.03-1.989.124-.57.095-1.141.27-1.625.634-1.05.787-1.177 2.044-1.177 3.148v.094H5a1.25 1.25 0 1 0 0 2.5h1.75v12.23c0 1.164.058 2.182.242 3.042.187.872.519 1.662 1.123 2.29 1.19 1.237 3.051 1.438 5.197 1.438h5.376c2.146 0 4.006-.201 5.197-1.438.604-.628.936-1.418 1.122-2.29.184-.86.243-1.878.243-3.041V9.25H27a1.25 1.25 0 1 0 0-2.5zm1.5 2.5H9.25v12.23c0 1.11.059 1.918.187 2.52.126.588.302.894.48 1.078.37.386 1.166.672 3.395.672h5.376c2.229 0 3.024-.286 3.396-.672.177-.184.353-.49.479-1.079.128-.6.187-1.41.187-2.518zM13 11.75c.69 0 1.25.56 1.25 1.25v8a1.25 1.25 0 1 1-2.5 0v-8c0-.69.56-1.25 1.25-1.25m6 0c.69 0 1.25.56 1.25 1.25v8a1.25 1.25 0 1 1-2.5 0v-8c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ee = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(_e, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(qe, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Ue, {
              ...a,
              ref: r
            })]
          })
        }));
      Ee.displayName = "Trash", Ee.category = "Files", Ee.variant = "Outline", Ee.keywords = "Trashcan, Bin, Waste bin, Erase, Delete, Remove", Ee.MD = _e, Ee.LG = qe, Ee.XL = Ue;
      const Te = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M10.215 3.25a2.48 2.48 0 0 0-1.767.723l-.918.918a.75.75 0 0 1-1.06-1.06l.917-.918a3.98 3.98 0 0 1 2.837-1.163 4.05 4.05 0 0 1 2.838 1.188 4.05 4.05 0 0 1 1.188 2.838 3.98 3.98 0 0 1-1.163 2.837l-.917.917a.75.75 0 0 1-1.06-1.06l.917-.918a2.48 2.48 0 0 0 .723-1.767 2.55 2.55 0 0 0-.749-1.786 2.55 2.55 0 0 0-1.786-.749m-.185 2.72a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0m-5.14.5a.75.75 0 0 1 0 1.06l-.917.918a2.48 2.48 0 0 0-.723 1.767 2.55 2.55 0 0 0 .749 1.786 2.55 2.55 0 0 0 1.786.749 2.48 2.48 0 0 0 1.767-.723l.918-.918a.75.75 0 1 1 1.06 1.06l-.917.918a3.98 3.98 0 0 1-2.837 1.163 4.05 4.05 0 0 1-2.838-1.188 4.05 4.05 0 0 1-1.188-2.838 3.98 3.98 0 0 1 1.163-2.837l.917-.917a.75.75 0 0 1 1.06 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        We = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15.425 5a3.4 3.4 0 0 0-2.456.992l-1.262 1.262a1 1 0 1 1-1.414-1.414l1.261-1.262A5.4 5.4 0 0 1 15.448 3a5.62 5.62 0 0 1 3.901 1.651 5.62 5.62 0 0 1 1.65 3.901 5.4 5.4 0 0 1-1.577 3.894l-1.262 1.261a1 1 0 0 1-1.414-1.414l1.262-1.262A3.4 3.4 0 0 0 19 8.575a3.62 3.62 0 0 0-1.065-2.51A3.62 3.62 0 0 0 15.425 5m-.218 3.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0m-7.953 1.5a1 1 0 0 1 0 1.414L5.992 12.97A3.4 3.4 0 0 0 5 15.425c.01.932.392 1.836 1.065 2.51A3.62 3.62 0 0 0 8.575 19a3.4 3.4 0 0 0 2.456-.992l1.262-1.262a1 1 0 1 1 1.414 1.414l-1.261 1.262A5.4 5.4 0 0 1 8.552 21a5.62 5.62 0 0 1-3.901-1.651 5.62 5.62 0 0 1-1.65-3.901 5.4 5.4 0 0 1 1.577-3.894l1.262-1.261a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $e = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M20.901 6.25a4.63 4.63 0 0 0-3.335 1.348L15.884 9.28a1.25 1.25 0 0 1-1.768-1.768l1.682-1.682a7.13 7.13 0 0 1 5.132-2.08 7.4 7.4 0 0 1 5.143 2.177 7.4 7.4 0 0 1 2.177 5.143 7.13 7.13 0 0 1-2.08 5.132l-1.682 1.682a1.25 1.25 0 0 1-1.768-1.768l1.682-1.682A4.63 4.63 0 0 0 25.75 11.1a4.9 4.9 0 0 0-1.445-3.404 4.9 4.9 0 0 0-3.404-1.445m-1.017 5.866a1.25 1.25 0 0 1 0 1.768l-6 6a1.25 1.25 0 0 1-1.768-1.768l6-6a1.25 1.25 0 0 1 1.768 0m-10.604 2a1.25 1.25 0 0 1 0 1.768l-1.682 1.682A4.63 4.63 0 0 0 6.25 20.9a4.9 4.9 0 0 0 1.445 3.404 4.9 4.9 0 0 0 3.404 1.445 4.63 4.63 0 0 0 3.335-1.348l1.682-1.682a1.25 1.25 0 0 1 1.768 1.768l-1.682 1.682a7.13 7.13 0 0 1-5.132 2.08 7.4 7.4 0 0 1-5.143-2.177A7.4 7.4 0 0 1 3.75 20.93a7.13 7.13 0 0 1 2.08-5.132l1.682-1.682a1.25 1.25 0 0 1 1.768 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ze = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Te, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(We, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)($e, {
              ...a,
              ref: r
            })]
          })
        }));
      Ze.displayName = "Link", Ze.category = "Files", Ze.variant = "Outline", Ze.keywords = "Chain, URL, Links, Hyperlink", Ze.MD = Te, Ze.LG = We, Ze.XL = $e;
      const Qe = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M9.37 3.174a1.75 1.75 0 0 1 2.492.043l1.001 1.052a1.75 1.75 0 0 1-.042 2.457l-6.439 6.31a.75.75 0 0 1-.396.203l-2.857.5a.75.75 0 0 1-.87-.857l.476-3a.75.75 0 0 1 .216-.418zm1.406 1.078a.25.25 0 0 0-.357-.006l-6.24 6.116-.274 1.718 1.594-.279 6.272-6.147a.25.25 0 0 0 .006-.35z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ye = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M14.766 3.996a2 2 0 0 1 2.848.049l2.43 2.551a2 2 0 0 1-.048 2.808L9.27 19.914a1 1 0 0 1-.527.271l-4.572.8a1 1 0 0 1-1.16-1.142l.762-4.8a1 1 0 0 1 .288-.557zM5.698 15.683l-.49 3.09 2.885-.505L18.596 7.977l-2.43-2.552.724-.69-.724.69z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ke = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M20.163 4.817a2.25 2.25 0 0 1 3.204.055l3.858 4.052a2.25 2.25 0 0 1-.054 3.159l-15.01 14.71a1.25 1.25 0 0 1-.66.338l-6.286 1.1a1.25 1.25 0 0 1-1.45-1.427l1.048-6.6a1.25 1.25 0 0 1 .36-.697zM21.73 6.78 7.217 21.004l-.708 4.463 4.179-.731L25.245 10.47z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Je = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Qe, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Ye, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Ke, {
              ...a,
              ref: r
            })]
          })
        }));
      Je.displayName = "Pencil", Je.category = "Files", Je.variant = "Outline", Je.keywords = "Edit, Update, Correct, Modify, Note, Draft", Je.MD = Qe, Je.LG = Ye, Je.XL = Ke;
      const el = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M6.944 3.802c-1.577.252-2.884 1.364-3.23 2.43a.75.75 0 0 1-1.427-.464c.553-1.7 2.396-3.124 4.42-3.448a5.24 5.24 0 0 1 3.212.482c.87.439 1.666 1.145 2.331 2.151V4a.75.75 0 1 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 1 1 0-1.5h1.282c-.602-1.09-1.319-1.746-2.038-2.109a3.74 3.74 0 0 0-2.3-.34M2.25 9A.75.75 0 0 1 3 8.25h3a.75.75 0 0 1 0 1.5H4.707l.006.018c.347 1.066 1.654 2.178 3.23 2.43a3.74 3.74 0 0 0 2.3-.34c.742-.373 1.481-1.058 2.095-2.21a.75.75 0 0 1 1.324.704c-.737 1.384-1.685 2.312-2.743 2.846a5.24 5.24 0 0 1-3.213.482c-1.628-.261-3.14-1.234-3.956-2.49V12a.75.75 0 0 1-1.5 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ll = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M11.119 5.087c-2.47.424-4.584 2.3-5.162 4.204a1 1 0 1 1-1.914-.582c.822-2.707 3.608-5.056 6.738-5.593 1.598-.274 3.315-.083 4.932.79 1.213.656 2.33 1.674 3.287 3.099V5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.873c-.93-1.7-2.018-2.744-3.11-3.334-1.184-.64-2.441-.785-3.644-.579M6.584 16H9a1 1 0 0 0 0-2H4a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-2.773c1.277 1.83 3.432 3.254 5.781 3.657 1.598.274 3.315.083 4.932-.79 1.615-.873 3.06-2.388 4.182-4.649a1 1 0 0 0-1.79-.89c-.977 1.965-2.158 3.139-3.343 3.78-1.183.639-2.44.784-3.643.578-1.902-.327-3.594-1.515-4.535-2.913",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M14.722 6.393c-3.816.69-7.152 3.75-8.016 6.934a1.25 1.25 0 0 1-2.412-.654c1.136-4.193 5.3-7.893 9.984-8.74 2.385-.431 4.94-.13 7.316 1.242 1.52.879 2.926 2.172 4.156 3.926V6a1.25 1.25 0 1 1 2.5 0v7c0 .69-.56 1.25-1.25 1.25h-7a1.25 1.25 0 1 1 0-2.5h4.472c-1.241-2.168-2.673-3.569-4.129-4.41-1.811-1.047-3.756-1.284-5.62-.947M7.338 20.25H12a1.25 1.25 0 1 0 0-2.5H5c-.69 0-1.25.56-1.25 1.25v7a1.25 1.25 0 1 0 2.5 0v-2.854c1.916 2.462 4.852 4.347 8.028 4.921 2.385.431 4.94.13 7.316-1.242 2.371-1.37 4.467-3.752 6.049-7.318a1.25 1.25 0 1 0-2.286-1.014c-1.418 3.196-3.197 5.117-5.014 6.167-1.811 1.047-3.756 1.284-5.62.947-3.178-.574-6.023-2.793-7.385-5.357",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tl = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(el, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ll, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(rl, {
              ...a,
              ref: r
            })]
          })
        }));
      tl.displayName = "Refresh", tl.category = "Files", tl.variant = "Outline", tl.keywords = "Loop, Reload, Repeat, Sync, Update, Arrows, Reset, Restore", tl.MD = el, tl.LG = ll, tl.XL = rl;
      const al = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M10 2.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V3.81L8.53 8.53a.75.75 0 0 1-1.06-1.06l4.72-4.72zm-5.667 1a.583.583 0 0 0-.583.583v7.334a.583.583 0 0 0 .583.583h7.334a.583.583 0 0 0 .583-.583v-3a.75.75 0 0 1 1.5 0v3a2.083 2.083 0 0 1-2.083 2.083H4.333a2.083 2.083 0 0 1-2.083-2.083V4.333A2.083 2.083 0 0 1 4.333 2.25h3a.75.75 0 1 1 0 1.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ol = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15 4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.414l-7.793 7.793a1 1 0 0 1-1.414-1.414L18.586 4zM6.133 5A1.133 1.133 0 0 0 5 6.133v11.734A1.134 1.134 0 0 0 6.133 19h11.734A1.134 1.134 0 0 0 19 17.867V13a1 1 0 1 1 2 0v4.867A3.133 3.133 0 0 1 17.867 21H6.133A3.133 3.133 0 0 1 3 17.867V6.133A3.133 3.133 0 0 1 6.133 3H11a1 1 0 1 1 0 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        il = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M18.75 4c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v8a1.25 1.25 0 1 1-2.5 0V7.018L15.384 18.384a1.25 1.25 0 0 1-1.768-1.768L24.982 5.25H20c-.69 0-1.25-.56-1.25-1.25M7.933 6.25A1.683 1.683 0 0 0 6.25 7.933v16.134a1.683 1.683 0 0 0 1.683 1.683h16.134a1.684 1.684 0 0 0 1.683-1.683v-6.692a1.25 1.25 0 1 1 2.5 0v6.692a4.183 4.183 0 0 1-4.183 4.183H7.933a4.183 4.183 0 0 1-4.183-4.183V7.933A4.183 4.183 0 0 1 7.933 3.75h6.692a1.25 1.25 0 1 1 0 2.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sl = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(al, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ol, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(il, {
              ...a,
              ref: r
            })]
          })
        }));
      sl.displayName = "ExternalLink", sl.category = "Files", sl.variant = "Outline", sl.keywords = "Link, New tab, New Window, Open, URL, Hyperlink, External", sl.MD = al, sl.LG = ol, sl.XL = il;
      const nl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm1.5.662V5.5h9v.162L8 7.912zm0 1.677V10.5h9V7.339L8.343 9.417a.75.75 0 0 1-.686 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3 8.651V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm2-.52V8h14v.132l-7 4.667zm14 2.405V16H5v-5.464l6.445 4.296a1 1 0 0 0 1.11 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        cl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4 10.5A2.5 2.5 0 0 1 6.5 8h19a2.5 2.5 0 0 1 2.5 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 21.5zm2.5 0h19v.063L16 17.688l-9.5-7.125zm0 3.188V21.5h19v-7.812l-8.734 6.55a1.25 1.25 0 0 1-1.543-.008z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hl = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(nl, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(dl, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(cl, {
              ...a,
              ref: r
            })]
          })
        }));
      hl.displayName = "Envelope", hl.category = "Files", hl.variant = "Outline", hl.keywords = "Mail, Email, Message, Inbox, Chat, Letter, Invitation", hl.MD = nl, hl.LG = dl, hl.XL = cl;
      const fl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M11.228 3.144c-.335-.324-.636-.45-1.064-.444a1.45 1.45 0 0 0-.706.222c-.166.099-.272.196-.29.213L4.398 8.078c-.027.03-.699.772-.699 1.8 0 .431.06.72.165.956.105.239.279.474.581.767s.559.468.814.57c.25.101.54.148.932.122a2.73 2.73 0 0 0 1.638-.678l.004-.004 2.248-2.27a.7.7 0 0 1 .995.986L8.83 12.594c-.085.087-1.001.991-2.545 1.096-.56.038-1.068-.026-1.548-.22-.476-.19-.882-.49-1.267-.864-.376-.365-.682-.745-.886-1.205-.205-.463-.285-.958-.285-1.523 0-1.633 1.056-2.735 1.088-2.768l.002-.002 4.78-4.955.008-.008c.035-.036.827-.827 1.964-.845.836-.012 1.486.282 2.06.838.277.268.489.55.624.894.132.337.17.681.177 1.035.022 1.15-.745 1.964-.777 1.998l-.007.007-4.783 4.958-.056.053c-.037.031-.17.14-.358.246-.178.1-.47.236-.815.245a1.7 1.7 0 0 1-.72-.11 1.7 1.7 0 0 1-.545-.374 1.7 1.7 0 0 1-.406-.566 1.8 1.8 0 0 1-.137-.673 1.8 1.8 0 0 1 .49-1.27l4.435-4.566a.7.7 0 1 1 1.005.975L5.894 9.555a.42.42 0 0 0-.095.263.4.4 0 0 0 .022.15.4.4 0 0 0 .088.11c.07.066.099.085.106.089.01.002.05.01.154.008q.001.002.054-.013a1 1 0 0 0 .112-.052c.054-.03.097-.062.12-.08l4.75-4.922c.013-.016.107-.124.2-.294.112-.203.203-.454.198-.72-.005-.278-.034-.434-.08-.55-.042-.108-.118-.23-.295-.4m-5.215 7.022h.002zm.002 0 .002.002zm-.127-.605h.001",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16.773 4.708C16.24 4.194 15.755 3.99 15.07 4c-.423.007-.82.167-1.136.356a3 3 0 0 0-.461.34l-7.37 7.64-.002.002C6.064 12.38 5 13.55 5 15.175c0 .674.094 1.133.262 1.51.169.383.444.755.916 1.212.471.457.877.736 1.284.899.4.16.86.234 1.476.192 1.625-.11 2.584-1.07 2.584-1.07l.002-.003.005-.005.003-.003 3.471-3.503a1 1 0 0 1 1.42 1.407l-3.47 3.503.005-.004-.006.006c-.123.126-1.521 1.508-3.879 1.668-.857.058-1.628-.04-2.357-.332-.722-.29-1.341-.748-1.93-1.32-.579-.56-1.044-1.138-1.353-1.836C3.122 16.793 3 16.04 3 15.175 3 12.683 4.613 11 4.658 10.953l.003-.002.001-.002h.001l7.38-7.65.002-.003.002-.002.005-.005.007-.007c.047-.047 1.251-1.255 2.98-1.281 1.268-.02 2.252.426 3.125 1.27.422.41.742.837.946 1.354.199.508.257 1.029.267 1.572.033 1.745-1.136 2.984-1.18 3.03l-.005.005-.005.005-.003.003-7.39 7.66a1 1 0 0 1-.074.071c-.05.042-.248.208-.534.37-.27.153-.713.36-1.231.374-.363.01-.723-.02-1.08-.165-.352-.143-.61-.364-.817-.561a2.6 2.6 0 0 1-.609-.848 2.7 2.7 0 0 1-.205-1.01 2.72 2.72 0 0 1 .735-1.904l6.854-7.056a1 1 0 0 1 1.434 1.393l-6.855 7.057c-.005.007-.041.049-.079.118a.7.7 0 0 0-.09.345.7.7 0 0 0 .041.262.6.6 0 0 0 .155.196c.147.14.187.155.19.155.001.001.014.006.05.011.042.006.11.01.22.007a.4.4 0 0 0 .11-.025q.089-.03.19-.088c.088-.05.159-.102.194-.13l7.346-7.614c.021-.024.17-.196.321-.467.178-.321.326-.725.318-1.157-.009-.434-.055-.686-.13-.877-.071-.181-.196-.378-.475-.649",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M22.1 6.567c-.696-.662-1.325-.919-2.215-.905-.543.008-1.056.209-1.472.452a3.7 3.7 0 0 0-.605.436L7.874 16.651l-.002.002c-.055.06-1.455 1.577-1.455 3.677 0 .88.125 1.472.343 1.954.22.488.581.969 1.211 1.568.629.598 1.165.957 1.695 1.166.521.205 1.125.301 1.942.247 2.145-.143 3.414-1.386 3.414-1.386l.008-.008 4.684-4.637a1.48 1.48 0 0 1 2.062-.01c.572.557.577 1.462.01 2.024l-4.68 4.633c-.176.177-2.085 2.025-5.3 2.238-1.17.078-2.226-.052-3.227-.447-.99-.39-1.838-1.004-2.639-1.766-.785-.747-1.422-1.522-1.847-2.463-.427-.947-.593-1.957-.593-3.113 0-3.337 2.2-5.589 2.266-5.657l.004-.004 9.96-10.126.016-.017c.074-.072 1.723-1.689 4.094-1.725 1.74-.027 3.095.576 4.29 1.71.577.549 1.02 1.126 1.3 1.83.276.687.355 1.39.37 2.115.044 2.348-1.553 4.012-1.62 4.082l-.015.015L14.2 22.685a2 2 0 0 1-.116.107 5 5 0 0 1-.746.504c-.37.205-.98.481-1.697.5-.496.014-1-.026-1.5-.225-.495-.197-.854-.5-1.136-.764a3.5 3.5 0 0 1-.846-1.156 3.6 3.6 0 0 1-.286-1.376c-.037-1.513.903-2.478 1.022-2.596l9.24-9.33a1.48 1.48 0 0 1 2.063-.03c.577.55.59 1.456.03 2.023l-9.24 9.329a1 1 0 0 0-.093.137.8.8 0 0 0-.106.399c.005.2.033.277.047.307.012.027.046.095.183.223.145.136.206.175.22.184.02.005.105.021.322.016 0 0 .04-.003.111-.027q.107-.037.234-.106c.112-.062.202-.126.25-.162l9.895-10.061c.03-.032.224-.253.42-.6.233-.414.422-.927.412-1.471-.011-.568-.072-.887-.167-1.123-.089-.222-.247-.47-.615-.82M11.236 20.92l.005.002zm.005.002.004.002zm-.264-1.238.002-.002z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xl = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(fl, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(vl, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(wl, {
              ...a,
              ref: r
            })]
          })
        }));
      xl.displayName = "Paperclip", xl.category = "Files", xl.variant = "Outline", xl.keywords = "Attach, Clip, Document, Attachment, Paper", xl.MD = fl, xl.LG = vl, xl.XL = wl;
      const ul = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M9.313 2.319A.75.75 0 0 1 9.75 3v10a.75.75 0 0 1-1.238.57l-3.123-2.677H3a.75.75 0 0 1-.75-.75V5.857a.75.75 0 0 1 .75-.75h2.39l3.122-2.676a.75.75 0 0 1 .801-.112M8.25 4.63 6.155 6.427a.75.75 0 0 1-.488.18H3.75v2.786h1.917a.75.75 0 0 1 .488.18L8.25 11.37zm3.172.89a.75.75 0 0 1 1.056-.099C13.27 6.078 13.75 7.001 13.75 8c0 1-.48 1.922-1.271 2.578a.75.75 0 1 1-.957-1.156c.489-.405.728-.921.728-1.422s-.24-1.017-.729-1.422a.75.75 0 0 1-.099-1.056",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M14.433 4.099A1 1 0 0 1 15 5v14a1 1 0 0 1-1.625.78L8.65 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121M13 7.08l-3.375 2.7A1 1 0 0 1 9 10H6v4h3a1 1 0 0 1 .625.22L13 16.92zm3.15 1.391a1 1 0 0 1 1.378-.321C18.99 9.059 20 10.415 20 12s-1.01 2.94-2.472 3.85a1 1 0 0 1-1.056-1.7C17.572 13.469 18 12.666 18 12s-.429-1.468-1.528-2.15a1 1 0 0 1-.321-1.378",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M19.551 5.878c.428.21.699.645.699 1.122v18a1.25 1.25 0 0 1-2.014.99l-6.329-4.883H7c-.69 0-1.25-.56-1.25-1.25v-7.714c0-.69.56-1.25 1.25-1.25h4.907l6.33-4.883a1.25 1.25 0 0 1 1.314-.132M17.75 9.543l-4.653 3.59a1.25 1.25 0 0 1-.764.26H8.25v5.214h4.083c.277 0 .545.092.764.26l4.653 3.59zm5.156 1.853a1.25 1.25 0 0 1 1.698-.49C26.72 12.074 28.25 13.85 28.25 16s-1.53 3.926-3.646 5.094a1.25 1.25 0 0 1-1.208-2.188c1.726-.954 2.354-2.054 2.354-2.906s-.628-1.952-2.354-2.906a1.25 1.25 0 0 1-.49-1.698",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jl = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ul, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(gl, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(pl, {
              ...a,
              ref: r
            })]
          })
        }));
      jl.displayName = "VolumeDown", jl.category = "Media playback", jl.variant = "Outline", jl.keywords = "Control, Volume, Low, Sound, Speaker", jl.MD = ul, jl.LG = gl, jl.XL = pl;
      const ml = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M9.313 2.319A.75.75 0 0 1 9.75 3v10a.75.75 0 0 1-1.238.57l-3.123-2.677H3a.75.75 0 0 1-.75-.75V5.857a.75.75 0 0 1 .75-.75h2.39l3.122-2.676a.75.75 0 0 1 .801-.112M8.25 4.63 6.155 6.427a.75.75 0 0 1-.488.18H3.75v2.786h1.917a.75.75 0 0 1 .488.18L8.25 11.37zm4.28-.215a.75.75 0 0 1 1.054.114c.759.943 1.166 2.192 1.166 3.47s-.407 2.528-1.166 3.47a.75.75 0 1 1-1.168-.94c.522-.649.834-1.557.834-2.53s-.312-1.881-.834-2.53a.75.75 0 0 1 .114-1.054m-2.107 1.106a.75.75 0 0 1 1.056-.1c.79.656 1.271 1.579 1.271 2.578 0 1-.48 1.922-1.271 2.578a.75.75 0 1 1-.957-1.156c.489-.405.728-.921.728-1.422s-.24-1.017-.729-1.422a.75.75 0 0 1-.099-1.056",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ml = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M14.433 4.099A1 1 0 0 1 15 5v14a1 1 0 0 1-1.625.78L8.65 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121M13 7.08l-3.375 2.7A1 1 0 0 1 9 10H6v4h3a1 1 0 0 1 .625.22L13 16.92zm6.23.281a1 1 0 0 1 1.408-.132C22.12 8.458 23 10.167 23 12s-.88 3.542-2.362 4.77a1 1 0 0 1-1.276-1.54C20.442 14.336 21 13.168 21 12s-.558-2.336-1.638-3.23a1 1 0 0 1-.132-1.408m-3.08 1.11a1 1 0 0 1 1.378-.321C18.99 9.059 20 10.415 20 12s-1.01 2.94-2.472 3.85a1 1 0 0 1-1.056-1.7C17.572 13.469 18 12.666 18 12s-.429-1.468-1.528-2.15a1 1 0 0 1-.321-1.378",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M19.551 5.878c.428.21.699.645.699 1.122v18a1.25 1.25 0 0 1-2.014.99l-6.329-4.883H7c-.69 0-1.25-.56-1.25-1.25v-7.714c0-.69.56-1.25 1.25-1.25h4.907l6.33-4.883a1.25 1.25 0 0 1 1.314-.132M17.75 9.543l-4.653 3.59a1.25 1.25 0 0 1-.764.26H8.25v5.214h4.083c.277 0 .545.092.764.26l4.653 3.59zm7.221.747a1.25 1.25 0 0 1 1.74-.319c2.165 1.495 3.539 3.641 3.539 6.029s-1.374 4.534-3.54 6.029a1.25 1.25 0 0 1-1.42-2.058c1.676-1.157 2.46-2.608 2.46-3.971s-.784-2.814-2.46-3.971a1.25 1.25 0 0 1-.319-1.74m-4.065 1.106a1.25 1.25 0 0 1 1.698-.49C24.72 12.074 26.25 13.85 26.25 16s-1.53 3.926-3.646 5.094a1.25 1.25 0 0 1-1.208-2.188c1.726-.954 2.354-2.054 2.354-2.906s-.628-1.952-2.354-2.906a1.25 1.25 0 0 1-.49-1.698",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bl = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ml, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Ml, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Rl, {
              ...a,
              ref: r
            })]
          })
        }));
      bl.displayName = "VolumeUp", bl.category = "Media playback", bl.variant = "Outline", bl.keywords = "Control, Volume, High, Sound, Speaker", bl.MD = ml, bl.LG = Ml, bl.XL = Rl;
      const Ll = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M9.313 2.319A.75.75 0 0 1 9.75 3v10a.75.75 0 0 1-1.238.57l-3.123-2.677H3a.75.75 0 0 1-.75-.75V5.857a.75.75 0 0 1 .75-.75h2.39l3.122-2.676a.75.75 0 0 1 .801-.112M8.25 4.63 6.155 6.427a.75.75 0 0 1-.488.18H3.75v2.786h1.917a.75.75 0 0 1 .488.18L8.25 11.37zm2.22 1.339a.75.75 0 0 1 1.06 0l.97.97.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M14.433 4.099A1 1 0 0 1 15 5v14a1 1 0 0 1-1.625.78L8.65 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121M13 7.08l-3.375 2.7A1 1 0 0 1 9 10H6v4h3a1 1 0 0 1 .625.22L13 16.92zm3.293 2.212a1 1 0 0 1 1.414 0L19 10.586l1.293-1.293a1 1 0 0 1 1.414 1.414L20.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L19 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L17.586 12l-1.293-1.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M19.551 5.878c.428.21.699.645.699 1.122v18a1.25 1.25 0 0 1-2.014.99l-6.329-4.883H7c-.69 0-1.25-.56-1.25-1.25v-7.714c0-.69.56-1.25 1.25-1.25h4.907l6.33-4.883a1.25 1.25 0 0 1 1.314-.132M17.75 9.543l-4.653 3.59a1.25 1.25 0 0 1-.764.26H8.25v5.214h4.083c.277 0 .545.092.764.26l4.653 3.59zm4.366 3.573a1.25 1.25 0 0 1 1.768 0l1.616 1.616 1.616-1.616a1.25 1.25 0 0 1 1.768 1.768L27.268 16.5l1.616 1.616a1.25 1.25 0 0 1-1.768 1.768L25.5 18.268l-1.616 1.616a1.25 1.25 0 0 1-1.768-1.768l1.616-1.616-1.616-1.616a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cl = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ll, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(zl, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(yl, {
              ...a,
              ref: r
            })]
          })
        }));
      Cl.displayName = "VolumeOff", Cl.category = "Media playback", Cl.variant = "Outline", Cl.keywords = "Control, Volume, Mute, Sound, Speaker", Cl.MD = Ll, Cl.LG = zl, Cl.XL = yl;
      const Al = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3.636 2.344a.75.75 0 0 1 .761.02l8 5a.75.75 0 0 1 0 1.272l-8 5A.75.75 0 0 1 3.25 13V3a.75.75 0 0 1 .386-.656m1.114 2.01v7.293L10.585 8z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Dl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4.498 3.135a1 1 0 0 1 .998-.003l14 8a1 1 0 0 1 0 1.736l-14 8A1 1 0 0 1 4 20V4a1 1 0 0 1 .498-.865M6 5.723v12.554L16.984 12z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Il = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M6.389 3.91A1.25 1.25 0 0 0 5.75 5v22a1.25 1.25 0 0 0 1.902 1.067l18-11a1.25 1.25 0 0 0 0-2.134l-18-11a1.25 1.25 0 0 0-1.263-.023M22.603 16 8.25 24.771V7.23z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bl = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Al, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Dl, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Il, {
              ...a,
              ref: r
            })]
          })
        }));
      Bl.displayName = "Play", Bl.category = "Media playback", Bl.variant = "Outline", Bl.keywords = "Play, Control, Player", Bl.MD = Al, Bl.LG = Dl, Bl.XL = Il;
      const Sl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M13.343 2.333A.75.75 0 0 1 13.75 3v10a.75.75 0 0 1-1.186.61l-7-5a.75.75 0 0 1 0-1.22l7-5a.75.75 0 0 1 .78-.057M7.29 8l4.96 3.543V4.457zM3 3.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 3 3.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M19.433 3.099A1 1 0 0 1 20 4v16a1 1 0 0 1-1.625.78l-10-8a1 1 0 0 1 0-1.56l10-8a1 1 0 0 1 1.058-.121M10.601 12 18 17.92V6.08zM5 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M25.546 3.876c.43.209.704.645.704 1.124v22a1.25 1.25 0 0 1-2.022.983l-14-11a1.25 1.25 0 0 1 0-1.966l14-11a1.25 1.25 0 0 1 1.318-.141M13.023 16l10.727 8.428V7.572zM6 4.75c.69 0 1.25.56 1.25 1.25v20a1.25 1.25 0 1 1-2.5 0V6c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nl = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Sl, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Hl, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Vl, {
              ...a,
              ref: r
            })]
          })
        }));
      Nl.displayName = "SkipBack", Nl.category = "Media playback", Nl.variant = "Outline", Nl.keywords = "Back, Rewind, Reverse, Control, Player", Nl.MD = Sl, Nl.LG = Hl, Nl.XL = Vl;
      const Gl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2.657 2.333a.75.75 0 0 1 .779.057l7 5a.75.75 0 0 1 0 1.22l-7 5A.75.75 0 0 1 2.25 13V3a.75.75 0 0 1 .407-.667M3.75 4.457v7.086L8.71 8zM13 3.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        kl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4.567 3.099a1 1 0 0 1 1.058.12l10 8a1 1 0 0 1 0 1.562l-10 8A1 1 0 0 1 4 20V4a1 1 0 0 1 .567-.901M6 6.08v11.838L13.4 12zM19 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M6.454 3.876a1.25 1.25 0 0 1 1.318.141l14 11a1.25 1.25 0 0 1 0 1.966l-14 11A1.25 1.25 0 0 1 5.75 27V5c0-.479.273-.915.704-1.124M8.25 7.572v16.856L18.977 16zM26 4.75c.69 0 1.25.56 1.25 1.25v20a1.25 1.25 0 1 1-2.5 0V6c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ol = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Gl, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(kl, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Xl, {
              ...a,
              ref: r
            })]
          })
        }));
      Ol.displayName = "SkipForward", Ol.category = "Media playback", Ol.variant = "Outline", Ol.keywords = "Next, Forward, Front, Control, Player", Ol.MD = Gl, Ol.LG = kl, Ol.XL = Xl;
      const Fl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2.35 4c0-.911.739-1.65 1.65-1.65h2c.911 0 1.65.739 1.65 1.65v8A1.65 1.65 0 0 1 6 13.65H4A1.65 1.65 0 0 1 2.35 12zM4 3.65a.35.35 0 0 0-.35.35v8c0 .193.157.35.35.35h2a.35.35 0 0 0 .35-.35V4A.35.35 0 0 0 6 3.65zM8.35 4c0-.911.739-1.65 1.65-1.65h2c.911 0 1.65.739 1.65 1.65v8A1.65 1.65 0 0 1 12 13.65h-2A1.65 1.65 0 0 1 8.35 12zM10 3.65a.35.35 0 0 0-.35.35v8c0 .193.157.35.35.35h2a.35.35 0 0 0 .35-.35V4a.35.35 0 0 0-.35-.35z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm7 1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _l = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3.75 7A3.25 3.25 0 0 1 7 3.75h4A3.25 3.25 0 0 1 14.25 7v18A3.25 3.25 0 0 1 11 28.25H7A3.25 3.25 0 0 1 3.75 25zM7 6.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75zM17.75 7A3.25 3.25 0 0 1 21 3.75h4A3.25 3.25 0 0 1 28.25 7v18A3.25 3.25 0 0 1 25 28.25h-4A3.25 3.25 0 0 1 17.75 25zM21 6.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ql = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Fl, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Pl, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(_l, {
              ...a,
              ref: r
            })]
          })
        }));
      ql.displayName = "Pause", ql.category = "Media playback", ql.variant = "Outline", ql.keywords = "Pause, Control, Player", ql.MD = Fl, ql.LG = Pl, ql.XL = _l;
      const Ul = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M9.25 3a.75.75 0 0 1 .75-.75h2c.966 0 1.75.784 1.75 1.75v2a.75.75 0 0 1-1.5 0V4a.25.25 0 0 0-.25-.25h-2A.75.75 0 0 1 9.25 3m-7 1c0-.966.784-1.75 1.75-1.75h2a.75.75 0 0 1 0 1.5H4a.25.25 0 0 0-.25.25v2a.75.75 0 0 1-1.5 0zM3 9.25a.75.75 0 0 1 .75.75v2c0 .138.112.25.25.25h2a.75.75 0 0 1 0 1.5H4A1.75 1.75 0 0 1 2.25 12v-2A.75.75 0 0 1 3 9.25m10 0a.75.75 0 0 1 .75.75v2A1.75 1.75 0 0 1 12 13.75h-2a.75.75 0 0 1 0-1.5h2a.25.25 0 0 0 .25-.25v-2a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        El = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15 4a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1M3 6a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0zm1 9a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Tl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M19.75 5c0-.69.56-1.25 1.25-1.25h4A3.25 3.25 0 0 1 28.25 7v4a1.25 1.25 0 1 1-2.5 0V7a.75.75 0 0 0-.75-.75h-4c-.69 0-1.25-.56-1.25-1.25m-16 2A3.25 3.25 0 0 1 7 3.75h4a1.25 1.25 0 1 1 0 2.5H7a.75.75 0 0 0-.75.75v4a1.25 1.25 0 1 1-2.5 0zM5 19.75c.69 0 1.25.56 1.25 1.25v4c0 .414.336.75.75.75h4a1.25 1.25 0 1 1 0 2.5H7A3.25 3.25 0 0 1 3.75 25v-4c0-.69.56-1.25 1.25-1.25m22 0c.69 0 1.25.56 1.25 1.25v4A3.25 3.25 0 0 1 25 28.25h-4a1.25 1.25 0 1 1 0-2.5h4a.75.75 0 0 0 .75-.75v-4c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wl = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ul, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(El, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Tl, {
              ...a,
              ref: r
            })]
          })
        }));
      Wl.displayName = "Maximize", Wl.category = "Media playback", Wl.variant = "Outline", Wl.keywords = "Maximum, Full screen, Big, Large, Expand", Wl.MD = Ul, Wl.LG = El, Wl.XL = Tl;
      const $l = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M10 2.25a.75.75 0 0 1 .75.75v2c0 .138.112.25.25.25h2a.75.75 0 0 1 0 1.5h-2A1.75 1.75 0 0 1 9.25 5V3a.75.75 0 0 1 .75-.75m-4 0a.75.75 0 0 1 .75.75v2A1.75 1.75 0 0 1 5 6.75H3a.75.75 0 0 1 0-1.5h2A.25.25 0 0 0 5.25 5V3A.75.75 0 0 1 6 2.25M2.25 10A.75.75 0 0 1 3 9.25h2c.966 0 1.75.784 1.75 1.75v2a.75.75 0 0 1-1.5 0v-2a.25.25 0 0 0-.25-.25H3a.75.75 0 0 1-.75-.75m7 1c0-.966.784-1.75 1.75-1.75h2a.75.75 0 0 1 0 1.5h-2a.25.25 0 0 0-.25.25v2a.75.75 0 0 1-1.5 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M9 3a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H4a1 1 0 0 1 0-2h3a1 1 0 0 0 1-1V4a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2h-3a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1M3 15a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0v-3a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1m11 2a3 3 0 0 1 3-3h3a1 1 0 1 1 0 2h-3a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ql = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M20 3.75c.69 0 1.25.56 1.25 1.25v5c0 .414.336.75.75.75h5a1.25 1.25 0 1 1 0 2.5h-5A3.25 3.25 0 0 1 18.75 10V5c0-.69.56-1.25 1.25-1.25m-8 0c.69 0 1.25.56 1.25 1.25v5A3.25 3.25 0 0 1 10 13.25H5a1.25 1.25 0 1 1 0-2.5h5a.75.75 0 0 0 .75-.75V5c0-.69.56-1.25 1.25-1.25M3.75 20c0-.69.56-1.25 1.25-1.25h5A3.25 3.25 0 0 1 13.25 22v5a1.25 1.25 0 1 1-2.5 0v-5a.75.75 0 0 0-.75-.75H5c-.69 0-1.25-.56-1.25-1.25m15 2A3.25 3.25 0 0 1 22 18.75h5a1.25 1.25 0 1 1 0 2.5h-5a.75.75 0 0 0-.75.75v5a1.25 1.25 0 1 1-2.5 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yl = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)($l, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Zl, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Ql, {
              ...a,
              ref: r
            })]
          })
        }));
      Yl.displayName = "Minimize", Yl.category = "Media playback", Yl.variant = "Outline", Yl.keywords = "Full screen, Exit, Window, Shrink, Reduce, Video Playback", Yl.MD = $l, Yl.LG = Zl, Yl.XL = Ql;
      const Kl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8.113 1.632a.75.75 0 0 1-.05.814 3.927 3.927 0 0 0 5.491 5.491.75.75 0 0 1 1.193.673A6.763 6.763 0 1 1 7.39 1.253a.75.75 0 0 1 .723.379M6.06 3.1a5.263 5.263 0 1 0 6.84 6.84A5.427 5.427 0 0 1 6.06 3.1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jl = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12.15 3.509a1 1 0 0 1-.067 1.085 5.236 5.236 0 0 0 7.323 7.323 1 1 0 0 1 1.59.896 9.017 9.017 0 1 1-9.809-9.809 1 1 0 0 1 .963.505M9.414 5.467a7.017 7.017 0 1 0 9.12 9.12 7.233 7.233 0 0 1-9.455-6.343c-.07-.946.046-1.889.335-2.777",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        er = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16.188 5.386c.242.43.21.96-.084 1.357a6.544 6.544 0 0 0 9.153 9.153 1.25 1.25 0 0 1 1.988 1.12 11.272 11.272 0 1 1-12.26-12.26 1.25 1.25 0 0 1 1.203.63m-3.421 2.448a8.772 8.772 0 1 0 11.4 11.4 9.044 9.044 0 0 1-11.4-11.4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        lr = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Kl, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Jl, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(er, {
              ...a,
              ref: r
            })]
          })
        }));
      lr.displayName = "Moon", lr.category = "Accessibility", lr.variant = "Outline", lr.keywords = "Night, Dark, Lightness, Theme, Brightness", lr.MD = Kl, lr.LG = Jl, lr.XL = er;
      const rr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 1 1-1.5 0V2A.75.75 0 0 1 8 1.25m4.955 1.863c.301.285.314.76.03 1.06l-.77.813a.75.75 0 1 1-1.089-1.032l.77-.812a.75.75 0 0 1 1.06-.029m-10.007.18a.75.75 0 0 1 1.06-.045l.823.756a.75.75 0 1 1-1.015 1.105l-.823-.757a.75.75 0 0 1-.045-1.06M8 5.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M4.25 8a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m-3 0A.75.75 0 0 1 2 7.25h1a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8m11 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-1.266 2.955a.75.75 0 0 1 1.06.03l.77.811a.75.75 0 0 1-1.09 1.032l-.769-.812a.75.75 0 0 1 .03-1.06m-5.97.062a.75.75 0 0 1-.045 1.06l-.824.756a.75.75 0 0 1-1.014-1.105l.823-.756a.75.75 0 0 1 1.06.045M8 12.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M5.077 5.187a1 1 0 0 1 1.414-.033L7.794 6.4a1 1 0 0 1-1.381 1.446L5.109 6.6a1 1 0 0 1-.032-1.414m13.923 0a1 1 0 0 1-.032 1.414l-1.304 1.245A1 1 0 1 1 16.283 6.4l1.303-1.246A1 1 0 0 1 19 5.188M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0m-5 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m16 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M8 16.049a1 1 0 0 1-.032 1.414l-1.304 1.245a1 1 0 0 1-1.381-1.446l1.303-1.246A1 1 0 0 1 8 16.05m8.077.26a1 1 0 0 1 1.414-.032l1.303 1.245a1 1 0 1 1-1.381 1.446l-1.304-1.245a1 1 0 0 1-.032-1.414M12 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ar = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 2.75c.69 0 1.25.56 1.25 1.25v3a1.25 1.25 0 1 1-2.5 0V4c0-.69.56-1.25 1.25-1.25m8.824 4.49a1.25 1.25 0 0 1 .058 1.767l-1.71 1.825a1.25 1.25 0 0 1-1.824-1.71l1.71-1.824a1.25 1.25 0 0 1 1.766-.058m-17.679.048a1.25 1.25 0 0 1 1.767.057l1.71 1.825a1.25 1.25 0 0 1-1.825 1.71l-1.71-1.825a1.25 1.25 0 0 1 .058-1.767M16 12.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M9.75 16a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0m-7 0c0-.69.56-1.25 1.25-1.25h3a1.25 1.25 0 1 1 0 2.5H4c-.69 0-1.25-.56-1.25-1.25m21 0c0-.69.56-1.25 1.25-1.25h3a1.25 1.25 0 1 1 0 2.5h-3c-.69 0-1.25-.56-1.25-1.25m-12.926 5.24a1.25 1.25 0 0 1 .058 1.767l-1.71 1.825a1.25 1.25 0 0 1-1.824-1.71l1.71-1.824a1.25 1.25 0 0 1 1.766-.058m10.321.048a1.25 1.25 0 0 1 1.767.057l1.71 1.825a1.25 1.25 0 0 1-1.825 1.71l-1.71-1.825a1.25 1.25 0 0 1 .058-1.767M16 23.75c.69 0 1.25.56 1.25 1.25v3a1.25 1.25 0 1 1-2.5 0v-3c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        or = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(rr, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(tr, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ar, {
              ...a,
              ref: r
            })]
          })
        }));
      or.displayName = "Sun", or.category = "Accessibility", or.variant = "Outline", or.keywords = "Day, Light, Lightness, Theme, Brightness", or.MD = rr, or.LG = tr, or.XL = ar;
      const ir = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M7.75 5a.75.75 0 0 0-1.5 0v1.25H5a.75.75 0 0 0 0 1.5h1.25V9a.75.75 0 0 0 1.5 0V7.75H9a.75.75 0 0 0 0-1.5H7.75z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M7 1.25a5.75 5.75 0 1 0 3.239 10.502l2.292 1.834a.75.75 0 0 0 .938-1.172l-2.098-1.678A5.75 5.75 0 0 0 7 1.25M2.75 7a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        sr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M12 7a1 1 0 1 0-2 0v3H7a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2h-3z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M11 2a9 9 0 1 0 5.618 16.032l2.675 2.675a1 1 0 0 0 1.414-1.414l-2.675-2.675A9 9 0 0 0 11 2m-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        nr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15 5.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S20.385 5.25 15 5.25M2.75 15C2.75 8.235 8.235 2.75 15 2.75S27.25 8.235 27.25 15c0 2.933-1.03 5.624-2.749 7.733l3.383 3.383a1.25 1.25 0 0 1-1.768 1.768L22.733 24.5A12.2 12.2 0 0 1 15 27.25C8.235 27.25 2.75 21.765 2.75 15M15 7.75c.69 0 1.25.56 1.25 1.25v4.75H21a1.25 1.25 0 1 1 0 2.5h-4.75V21a1.25 1.25 0 1 1-2.5 0v-4.75H9a1.25 1.25 0 1 1 0-2.5h4.75V9c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dr = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ir, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(sr, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(nr, {
              ...a,
              ref: r
            })]
          })
        }));
      dr.displayName = "ZoomIn", dr.category = "Accessibility", dr.variant = "Outline", dr.keywords = "Magnifying glass, Zoom, View, See, More, Closer", dr.MD = ir, dr.LG = sr, dr.XL = nr;
      const cr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7 2.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5M1.25 7a5.75 5.75 0 1 1 10.12 3.736l2.099 1.678a.75.75 0 0 1-.937 1.172l-2.293-1.834A5.75 5.75 0 0 1 1.25 7m3 0A.75.75 0 0 1 5 6.25h4a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 7",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-9 7a9 9 0 1 1 16.032 5.618l2.675 2.675a1 1 0 0 1-1.414 1.414l-2.675-2.675A9 9 0 0 1 2 11m4 0a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15 5.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S20.385 5.25 15 5.25M2.75 15C2.75 8.235 8.235 2.75 15 2.75S27.25 8.235 27.25 15c0 2.933-1.03 5.624-2.749 7.733l3.383 3.383a1.25 1.25 0 0 1-1.768 1.768L22.733 24.5A12.2 12.2 0 0 1 15 27.25C8.235 27.25 2.75 21.765 2.75 15m5 0c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H9c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vr = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(cr, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(hr, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(fr, {
              ...a,
              ref: r
            })]
          })
        }));
      vr.displayName = "ZoomOut", vr.category = "Accessibility", vr.variant = "Outline", vr.keywords = "Magnifying glass, Zoom, View, See, Less, Further", vr.MD = cr, vr.LG = hr, vr.XL = fr;
      const wr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.75 2.274a5.476 5.476 0 1 0 0 10.952 5.476 5.476 0 0 0 0-10.952M1 7.75a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m6.94-2.91a1.5 1.5 0 0 0-.996.175c-.299.17-.521.435-.633.744a.637.637 0 1 1-1.197-.434A2.7 2.7 0 0 1 6.312 3.91a2.8 2.8 0 0 1 1.838-.326 2.75 2.75 0 0 1 1.626.906c.418.483.65 1.096.649 1.732 0 1.026-.782 1.7-1.34 2.062a5.6 5.6 0 0 1-1.163.568l-.024.008-.007.003h-.003s-.001.001-.197-.605l.196.606a.637.637 0 0 1-.394-1.211l.013-.005.054-.019a4.338 4.338 0 0 0 .833-.415c.491-.317.758-.66.758-.992 0-.325-.117-.644-.337-.897a1.48 1.48 0 0 0-.873-.485m-.827 5.967c0-.352.285-.637.637-.637h.153a.637.637 0 0 1 0 1.273H7.75a.637.637 0 0 1-.637-.636",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 3.887a8.113 8.113 0 1 0 0 16.226 8.113 8.113 0 0 0 0-16.226M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10.282-4.312a2.24 2.24 0 0 0-1.477.26 2.1 2.1 0 0 0-.937 1.103.943.943 0 0 1-1.774-.643A3.98 3.98 0 0 1 9.87 6.31a4.13 4.13 0 0 1 2.722-.484c.936.156 1.79.63 2.41 1.344.619.714.961 1.622.96 2.565 0 1.52-1.158 2.52-1.984 3.054a8.3 8.3 0 0 1-1.723.842l-.035.012-.011.004-.004.001h-.001s-.002 0-.292-.897l.29.898a.943.943 0 0 1-.582-1.795l.019-.006a5 5 0 0 0 .385-.151c.259-.112.597-.277.929-.492.727-.47 1.123-.979 1.123-1.47v-.002c0-.482-.175-.952-.5-1.328a2.2 2.2 0 0 0-1.294-.717m3.68 2.047v.001l-.943-.001zm-4.905 6.793c0-.52.422-.943.943-.943h.226a.943.943 0 0 1 0 1.887H12a.943.943 0 0 1-.943-.944",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ur = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m13.624-5.714a2.97 2.97 0 0 0-1.957.346 2.78 2.78 0 0 0-1.242 1.46 1.25 1.25 0 1 1-2.35-.852 5.28 5.28 0 0 1 2.353-2.78 5.47 5.47 0 0 1 3.607-.64 5.4 5.4 0 0 1 3.192 1.78 5.18 5.18 0 0 1 1.273 3.399c0 2.013-1.534 3.338-2.63 4.047a11 11 0 0 1-2.283 1.115l-.046.016-.014.005-.005.002h-.002s-.002 0-.387-1.189l.385 1.19a1.25 1.25 0 0 1-.772-2.378h.001l.025-.009.105-.037a8.52 8.52 0 0 0 1.636-.814c.963-.624 1.487-1.297 1.487-1.949v-.002a2.68 2.68 0 0 0-.662-1.759 2.9 2.9 0 0 0-1.714-.951m4.876 2.713V13L20 12.998zM14.75 22c0-.69.56-1.25 1.25-1.25h.3a1.25 1.25 0 1 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gr = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(wr, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(xr, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ur, {
              ...a,
              ref: r
            })]
          })
        }));
      gr.displayName = "HelpCircle", gr.category = "Accessibility", gr.variant = "Outline", gr.keywords = "Help, Question mark, Support, Assistance, Doubt, FAQ, Tooltip", gr.MD = wr, gr.LG = xr, gr.XL = ur;
      const pr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8.001 2a6.001 6.001 0 1 0 0 12.003A6.001 6.001 0 0 0 8.001 2M8 3.5a4.501 4.501 0 0 0 0 9.003z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12.001 3a9.001 9.001 0 1 0 0 18.002 9.001 9.001 0 0 0 0-18.002M5 12.001A7 7 0 0 1 12.001 5v14.002a7 7 0 0 1-7.001-7",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16.001 4C9.373 4 4 9.373 4 16.001s5.373 12.002 12.001 12.002S28.003 22.629 28.003 16 22.629 4 16 4M6.5 16.001A9.5 9.5 0 0 1 16.001 6.5v19.003A9.5 9.5 0 0 1 6.5 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mr = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(pr, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(jr, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(mr, {
              ...a,
              ref: r
            })]
          })
        }));
      Mr.displayName = "PartialCircle", Mr.category = "Accessibility", Mr.variant = "Outline", Mr.keywords = "Partial, Half, Middle, Split", Mr.MD = pr, Mr.LG = jr, Mr.XL = mr;
      const Rr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2.803 7.25h2.483a11.2 11.2 0 0 1 1.217-4.283 5.26 5.26 0 0 0-3.7 4.283M8 3.355A9.6 9.6 0 0 0 6.792 7.25h2.416A9.6 9.6 0 0 0 8 3.355M9.208 8.75A9.6 9.6 0 0 1 8 12.645 9.6 9.6 0 0 1 6.792 8.75zm-3.922 0H2.803a5.26 5.26 0 0 0 3.7 4.283A11.2 11.2 0 0 1 5.286 8.75m4.211 4.283a11.2 11.2 0 0 0 1.217-4.283h2.483a5.26 5.26 0 0 1-3.7 4.283m3.7-5.783h-2.483a11.2 11.2 0 0 0-1.217-4.283 5.26 5.26 0 0 1 3.7 4.283M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        br = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4.062 11h3.983c.177-2.404.849-4.722 1.957-6.748A8.01 8.01 0 0 0 4.062 11M12 4.785c-1.084 1.817-1.761 3.96-1.95 6.215h3.9c-.189-2.256-.866-4.398-1.95-6.215M13.95 13c-.189 2.255-.866 4.398-1.95 6.215-1.084-1.817-1.761-3.96-1.95-6.215zm-5.905 0H4.062a8.01 8.01 0 0 0 5.94 6.748C8.894 17.722 8.222 15.404 8.045 13m5.953 6.748c1.108-2.026 1.78-4.344 1.957-6.748h3.983a8.01 8.01 0 0 1-5.94 6.748M19.938 11h-3.983c-.177-2.404-.849-4.722-1.957-6.748A8.01 8.01 0 0 1 19.938 11M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Lr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M5.322 14.75h5.482c.231-3.289 1.159-6.457 2.697-9.208a10.76 10.76 0 0 0-8.18 9.208M16 6.218c-1.508 2.484-2.444 5.43-2.69 8.532h5.38c-.245-3.102-1.182-6.048-2.69-8.532m2.69 11.032c-.245 3.102-1.182 6.048-2.69 8.532-1.508-2.484-2.444-5.43-2.69-8.532zm-7.886 0H5.322a10.76 10.76 0 0 0 8.179 9.208c-1.538-2.75-2.466-5.92-2.697-9.208m7.695 9.208c1.539-2.75 2.466-5.92 2.697-9.208h5.482a10.76 10.76 0 0 1-8.179 9.208m8.18-11.708h-5.483c-.231-3.289-1.158-6.457-2.697-9.208a10.76 10.76 0 0 1 8.18 9.208M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zr = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Rr, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(br, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Lr, {
              ...a,
              ref: r
            })]
          })
        }));
      zr.displayName = "Globe", zr.category = "Accessibility", zr.variant = "Outline", zr.keywords = "Global, Network, Earth, World", zr.MD = Rr, zr.LG = br, zr.XL = Lr;
      const yr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M4.75 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M3.185 9.268A3.17 3.17 0 0 1 5.5 8.25h5c.878 0 1.71.373 2.315 1.018a3.5 3.5 0 0 1 .935 2.399V13a.75.75 0 0 1-1.5 0v-1.333a2 2 0 0 0-.53-1.373 1.67 1.67 0 0 0-1.22-.544h-5c-.448 0-.888.19-1.22.544a2 2 0 0 0-.53 1.373V13a.75.75 0 0 1-1.5 0v-1.333c0-.891.331-1.755.935-2.399",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7m-2.536 7.464A5 5 0 0 1 8 13h8a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ar = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 5.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M9.75 9a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0M5.74 19.665a6.84 6.84 0 0 1 4.76-1.915h11c1.778 0 3.49.684 4.76 1.915a6.5 6.5 0 0 1 1.99 4.668V27a1.25 1.25 0 1 1-2.5 0v-2.667c0-1.07-.438-2.105-1.231-2.873a4.34 4.34 0 0 0-3.019-1.21h-11c-1.14 0-2.225.44-3.019 1.21a4 4 0 0 0-1.231 2.873V27a1.25 1.25 0 1 1-2.5 0v-2.667c0-1.758.72-3.437 1.99-4.668",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Dr = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(yr, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Cr, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Ar, {
              ...a,
              ref: r
            })]
          })
        }));
      Dr.displayName = "Person", Dr.category = "User Interface", Dr.variant = "Outline", Dr.keywords = "Profile, Avatar, Account, User, People, Human", Dr.MD = yr, Dr.LG = Cr, Dr.XL = Ar;
      const Ir = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M9.335 5.33a.75.75 0 0 1 .336 1.005l-2 4a.75.75 0 0 1-1.342-.67l2-4a.75.75 0 0 1 1.006-.336m-4.805.14a.75.75 0 0 1 0 1.06L3.06 8l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0m6.94 0a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06L12.94 8l-1.47-1.47a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Br = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M13.243 7.03a1 1 0 0 1 .727 1.213l-2 8a1 1 0 1 1-1.94-.485l2-8a1 1 0 0 1 1.213-.728m-5.536.263a1 1 0 0 1 0 1.414L4.414 12l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0m8.586 0a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L19.586 12l-3.293-3.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M17.245 9.774a1.25 1.25 0 0 1 .98 1.471l-2 10a1.25 1.25 0 1 1-2.45-.49l2-10a1.25 1.25 0 0 1 1.47-.98m-6.285.426a1.25 1.25 0 0 1-.16 1.76L5.953 16l4.847 4.04a1.25 1.25 0 1 1-1.6 1.92l-6-5a1.25 1.25 0 0 1 0-1.92l6-5a1.25 1.25 0 0 1 1.76.16m10.08 0a1.25 1.25 0 0 1 1.76-.16l6 5a1.25 1.25 0 0 1 0 1.92l-6 5a1.25 1.25 0 0 1-1.6-1.92L26.047 16 21.2 11.96a1.25 1.25 0 0 1-.16-1.76",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hr = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ir, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Br, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Sr, {
              ...a,
              ref: r
            })]
          })
        }));
      Hr.displayName = "Code", Hr.category = "User Interface", Hr.variant = "Outline", Hr.keywords = "Code, Computer, Dev, Engineering, Web, Develop, HTML, Tag", Hr.MD = Ir, Hr.LG = Br, Hr.XL = Sr;
      const Vr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m11.341 4.027-.293 1.296-.607.144a6.7 6.7 0 0 0-1.958.812l-.53.327-1.125-.71a8 8 0 0 0-.932.932l.71 1.124-.327.531a6.7 6.7 0 0 0-.812 1.958l-.144.607-1.296.293a8 8 0 0 0 0 1.318l1.296.293.144.607a6.7 6.7 0 0 0 .812 1.958l.327.53-.71 1.125q.429.504.932.932l1.124-.71.531.327a6.7 6.7 0 0 0 1.958.812l.607.144.293 1.296a8 8 0 0 0 1.318 0l.293-1.296.607-.144a6.7 6.7 0 0 0 1.958-.812l.53-.327 1.125.71a8 8 0 0 0 .932-.932l-.71-1.124.327-.531a6.7 6.7 0 0 0 .812-1.958l.144-.607 1.296-.293a8 8 0 0 0 0-1.318l-1.296-.293-.144-.607a6.7 6.7 0 0 0-.812-1.958l-.327-.53.71-1.125a8 8 0 0 0-.932-.932l-1.124.71-.531-.327a6.7 6.7 0 0 0-1.958-.812l-.607-.144-.293-1.296a8 8 0 0 0-1.318 0m-.984-1.893a10 10 0 0 1 3.286 0l.664.11.326 1.447q.72.229 1.38.572l1.253-.792.548.392a10 10 0 0 1 2.323 2.323l.392.548-.792 1.253q.343.66.572 1.38l1.447.326.11.664a10 10 0 0 1 0 3.286l-.11.664-1.447.326q-.229.72-.572 1.38l.792 1.253-.392.548a10 10 0 0 1-2.323 2.323l-.547.392-1.254-.792q-.66.343-1.38.572l-.326 1.447-.664.11a10 10 0 0 1-3.286 0l-.664-.11-.326-1.447a8.7 8.7 0 0 1-1.38-.572l-1.253.792-.548-.392a10 10 0 0 1-2.323-2.323l-.392-.547.792-1.254q-.343-.66-.572-1.38l-1.447-.326-.11-.664a10 10 0 0 1 0-3.286l.11-.664 1.447-.326q.229-.72.572-1.38L3.47 6.734l.392-.548a10 10 0 0 1 2.323-2.323l.548-.392 1.253.792q.66-.343 1.38-.572l.326-1.447zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m7.628 2.763-.193.855-.455.108c-.459.109-.89.29-1.28.53l-.399.246-.741-.468a5 5 0 0 0-.526.526l.468.741-.245.398c-.24.391-.422.822-.531 1.281l-.108.455-.855.193a5 5 0 0 0 0 .744l.855.193.108.455c.109.459.29.89.53 1.28l.246.399-.468.741q.244.282.526.526l.741-.468.398.245c.391.24.822.422 1.281.531l.455.108.193.855a5 5 0 0 0 .744 0l.193-.855.455-.108c.459-.109.89-.29 1.28-.53l.399-.246.741.468q.282-.244.526-.526l-.468-.741.245-.398c.24-.391.422-.822.531-1.281l.108-.455.855-.193a5 5 0 0 0 0-.744l-.855-.193-.108-.455a4.4 4.4 0 0 0-.53-1.28l-.246-.399.468-.741a5 5 0 0 0-.526-.526l-.741.468-.398-.245a4.4 4.4 0 0 0-1.281-.531l-.455-.108-.193-.855a5 5 0 0 0-.744 0M6.891 1.34a6.8 6.8 0 0 1 2.218 0l.498.082.22.973q.439.143.844.35l.843-.532.41.293a6.8 6.8 0 0 1 1.569 1.569l.293.41-.532.843q.207.405.35.845l.973.22.082.497a6.8 6.8 0 0 1 0 2.218l-.082.498-.973.22a6 6 0 0 1-.35.844l.532.843-.293.41a6.8 6.8 0 0 1-1.569 1.569l-.41.293-.843-.532q-.405.207-.845.35l-.22.973-.497.082a6.8 6.8 0 0 1-2.218 0l-.498-.082-.22-.973a6 6 0 0 1-.844-.35l-.843.532-.41-.293a6.8 6.8 0 0 1-1.569-1.569l-.293-.41.532-.843a6 6 0 0 1-.35-.845l-.973-.22-.082-.497a6.8 6.8 0 0 1 0-2.218l.082-.498.973-.22q.143-.438.35-.844l-.532-.843.293-.41a6.8 6.8 0 0 1 1.569-1.569l.41-.293.843.532q.405-.207.845-.35l.22-.973zM8 6.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M5.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m15.054 5.291-.393 1.737-.758.18a9 9 0 0 0-2.636 1.093l-.663.41-1.507-.952q-.727.61-1.338 1.338l.951 1.507-.409.664a9 9 0 0 0-1.092 2.635l-.18.758-1.738.393a11 11 0 0 0 0 1.892l1.737.393.18.758a9 9 0 0 0 1.093 2.636l.41.663-.952 1.507q.61.727 1.338 1.338l1.507-.951.664.409a9 9 0 0 0 2.635 1.092l.758.18.393 1.738a11 11 0 0 0 1.892 0l.393-1.738.758-.18a9 9 0 0 0 2.636-1.092l.663-.41 1.507.952a11 11 0 0 0 1.338-1.338l-.951-1.507.409-.663a9 9 0 0 0 1.092-2.636l.18-.758 1.738-.393a11 11 0 0 0 0-1.892l-1.738-.393-.18-.758a9 9 0 0 0-1.092-2.636l-.41-.663.952-1.507a11 11 0 0 0-1.338-1.338l-1.507.951-.663-.409a9 9 0 0 0-2.636-1.092l-.758-.18-.393-1.738a11 11 0 0 0-1.892 0m-1.23-2.363a13.3 13.3 0 0 1 4.353 0l.83.137.433 1.921q1 .314 1.914.794l1.665-1.051.684.489a13.3 13.3 0 0 1 3.079 3.08l.49.683-1.052 1.665q.481.912.794 1.913l1.92.434.138.83a13.3 13.3 0 0 1 0 4.354l-.137.83-1.921.433a11.5 11.5 0 0 1-.794 1.914l1.051 1.665-.489.684a13.3 13.3 0 0 1-3.08 3.079l-.683.49-1.665-1.052a11.5 11.5 0 0 1-1.913.794l-.434 1.92-.83.138a13.3 13.3 0 0 1-4.354 0l-.83-.137-.434-1.921a11.5 11.5 0 0 1-1.913-.794L8.98 27.271l-.684-.489a13.3 13.3 0 0 1-3.079-3.08l-.49-.683 1.052-1.665a11.5 11.5 0 0 1-.794-1.913l-1.92-.434-.138-.83a13.3 13.3 0 0 1 0-4.354l.137-.83 1.921-.434q.314-1 .794-1.913L4.729 8.98l.489-.684a13.3 13.3 0 0 1 3.08-3.079l.683-.49 1.665 1.052a11.5 11.5 0 0 1 1.913-.794l.434-1.92zM16 13.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M10.75 16a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        kr = (0, a.forwardRef)((({
          size: e = "LG",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["LG" === e && (0, t.jsx)(Vr, {
              ...a,
              ref: r
            }), "MD" === e && (0, t.jsx)(Nr, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Gr, {
              ...a,
              ref: r
            })]
          })
        }));
      kr.displayName = "Gear", kr.category = "User Interface", kr.variant = "Outline", kr.keywords = "Settings, Preferences, Options, Custom, Customize", kr.LG = Vr, kr.MD = Nr, kr.XL = Gr;
      const Xr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2.25 4A.75.75 0 0 1 3 3.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 4m0 4A.75.75 0 0 1 3 7.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8m0 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Or = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3.75 8c0-.69.56-1.25 1.25-1.25h22a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m0 8c0-.69.56-1.25 1.25-1.25h22a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m0 8c0-.69.56-1.25 1.25-1.25h22a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pr = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Xr, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Or, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Fr, {
              ...a,
              ref: r
            })]
          })
        }));
      Pr.displayName = "Menu", Pr.category = "User Interface", Pr.variant = "Outline", Pr.keywords = "Hamburger, Navigation, Side nav, Triple bar, Item", Pr.MD = Xr, Pr.LG = Or, Pr.XL = Fr;
      const _r = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2.3 3a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H3a.7.7 0 0 1-.7-.7zm1.4.7v2.6h2.6V3.7zM8.3 3a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H9a.7.7 0 0 1-.7-.7zm1.4.7v2.6h2.6V3.7zM2.3 9a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H3a.7.7 0 0 1-.7-.7zm1.4.7v2.6h2.6V9.7zM8.3 9a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H9a.7.7 0 0 1-.7-.7zm1.4.7v2.6h2.6V9.7z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm2 1v4h4V5zm8-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm2 1v4h4V5zM3 14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm2 1v4h4v-4zm8-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm2 1v4h4v-4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ur = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3.75 5.5c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75zm2.5.75v5.5h5.5v-5.5zm11.5-.75c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75zm2.5.75v5.5h5.5v-5.5zM3.75 19.5c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75zm2.5.75v5.5h5.5v-5.5zm11.5-.75c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75zm2.5.75v5.5h5.5v-5.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Er = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(_r, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(qr, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Ur, {
              ...a,
              ref: r
            })]
          })
        }));
      Er.displayName = "Grid", Er.category = "User Interface", Er.variant = "Outline", Er.keywords = "Squares, Hub, Menu, Blocks, Options, Items, Gallery", Er.MD = _r, Er.LG = qr, Er.XL = Ur;
      const Tr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2.25 4A.75.75 0 0 1 3 3.25h.1a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 4m3 0A.75.75 0 0 1 6 3.25h7a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 4m-3 4A.75.75 0 0 1 3 7.25h.1a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8m3 0A.75.75 0 0 1 6 7.25h7a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m-3 4a.75.75 0 0 1 .75-.75h.1a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m3 0a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3 6a1 1 0 0 1 1-1h.2a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-4 6a1 1 0 0 1 1-1h.2a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-4 6a1 1 0 0 1 1-1h.2a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $r = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3.75 8c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m5 0c0-.69.56-1.25 1.25-1.25h17a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25m-5 8c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m5 0c0-.69.56-1.25 1.25-1.25h17a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25m-5 8c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m5 0c0-.69.56-1.25 1.25-1.25h17a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zr = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Tr, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Wr, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)($r, {
              ...a,
              ref: r
            })]
          })
        }));
      Zr.displayName = "List", Zr.category = "User Interface", Zr.variant = "Outline", Zr.keywords = "Index, Table of Contents, Menu, Side nav, Navigation, Bullet, To do", Zr.MD = Tr, Zr.LG = Wr, Zr.XL = $r;
      const Qr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7 2.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5M1.25 7a5.75 5.75 0 1 1 10.12 3.736l2.099 1.678a.75.75 0 0 1-.937 1.172l-2.293-1.834A5.75 5.75 0 0 1 1.25 7",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-9 7a9 9 0 1 1 16.032 5.618l2.675 2.675a1 1 0 0 1-1.414 1.414l-2.675-2.675A9 9 0 0 1 2 11",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kr = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15 5.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S20.385 5.25 15 5.25M2.75 15C2.75 8.235 8.235 2.75 15 2.75S27.25 8.235 27.25 15c0 2.933-1.03 5.624-2.749 7.733l3.383 3.383a1.25 1.25 0 0 1-1.768 1.768L22.733 24.5A12.2 12.2 0 0 1 15 27.25C8.235 27.25 2.75 21.765 2.75 15",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jr = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Qr, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Yr, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Kr, {
              ...a,
              ref: r
            })]
          })
        }));
      Jr.displayName = "Search", Jr.category = "User Interface", Jr.variant = "Outline", Jr.keywords = "Magnifying Glass, Look, Find, View", Jr.MD = Qr, Jr.LG = Yr, Jr.XL = Kr;
      const et = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 3.75c-2.28 0-4.095.906-5.47 2.28a.75.75 0 0 1-1.06-1.06C3.095 3.344 5.28 2.25 8 2.25s4.905 1.094 6.53 2.72a.75.75 0 0 1-1.06 1.06C12.095 4.656 10.28 3.75 8 3.75m0 3.5a6.47 6.47 0 0 0-4.48 1.791.75.75 0 0 1-1.04-1.082A7.97 7.97 0 0 1 8 5.75a7.97 7.97 0 0 1 5.52 2.209.75.75 0 1 1-1.04 1.082A6.47 6.47 0 0 0 8 7.25m0 3.5c-.91 0-1.795.379-2.46 1.07a.75.75 0 0 1-1.08-1.04A4.9 4.9 0 0 1 8 9.25c1.333 0 2.603.555 3.54 1.53a.75.75 0 0 1-1.08 1.04A3.41 3.41 0 0 0 8 10.75m-.75 2.75a.75.75 0 0 1 .75-.75h.1a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        lt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 6C8.93 6 5.966 7.152 3.673 9.24A1 1 0 0 1 2.327 7.76 14.36 14.36 0 0 1 12 4.001c3.572 0 7.016 1.34 9.673 3.76a1 1 0 0 1-1.346 1.479A12.36 12.36 0 0 0 12 6m0 5c-2.395 0-4.673.822-6.35 2.26a1 1 0 1 1-1.3-1.52C6.411 9.974 9.16 9 12 9s5.588.973 7.65 2.74a1 1 0 1 1-1.3 1.52C16.672 11.822 14.394 11 12 11m0 5c-1.26 0-2.455.454-3.331 1.243a1 1 0 0 1-1.338-1.486C8.591 14.623 10.268 14 12 14s3.41.623 4.669 1.757a1 1 0 0 1-1.338 1.486C14.455 16.454 13.26 16 12 16m-1 4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 7.75c-3.771 0-8.414 1.432-11.116 4.134a1.25 1.25 0 0 1-1.768-1.768C6.414 6.818 11.771 5.25 16 5.25s9.586 1.568 12.884 4.866a1.25 1.25 0 0 1-1.768 1.768C24.414 9.182 19.771 7.75 16 7.75m-4.83 7.296c-1.24.486-2.26 1.16-3.463 1.985a1.25 1.25 0 0 1-1.414-2.062c1.2-.823 2.43-1.65 3.964-2.25 1.552-.61 3.36-.969 5.743-.969s4.19.36 5.743.968c1.534.602 2.764 1.428 3.964 2.251a1.25 1.25 0 0 1-1.414 2.062c-1.203-.825-2.223-1.5-3.463-1.985-1.222-.48-2.714-.796-4.83-.796s-3.608.316-4.83.796M16 20.25c-1.669 0-3.026.587-4.134 1.652a1.25 1.25 0 0 1-1.732-1.804c1.562-1.5 3.535-2.348 5.866-2.348 1.104 0 2.14.138 3.136.52 1.001.386 1.895.993 2.748 1.846a1.25 1.25 0 0 1-1.768 1.768c-.647-.647-1.253-1.04-1.877-1.28-.63-.242-1.343-.354-2.239-.354M14.75 26c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 0 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tt = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(et, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(lt, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(rt, {
              ...a,
              ref: r
            })]
          })
        }));
      tt.displayName = "WifiOn", tt.category = "User Interface", tt.variant = "Outline", tt.keywords = "Connection, Internet, Wireless, Technology, Network, Signal", tt.MD = et, tt.LG = lt, tt.XL = rt;
      const at = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m2.1 3.2 10.607 10.607 1.06-1.061-5.49-5.49a6.47 6.47 0 0 1 4.204 1.785.75.75 0 1 0 1.038-1.082 7.97 7.97 0 0 0-6.665-2.127L5.26 4.238A7.7 7.7 0 0 1 8 3.75c2.28 0 4.095.906 5.47 2.28a.75.75 0 1 0 1.06-1.06C12.905 3.344 10.72 2.25 8 2.25c-1.447 0-2.743.31-3.884.845l-.955-.956zM3.327 5.327 2.26 4.26a10 10 0 0 0-.79.71A.75.75 0 0 0 2.53 6.03q.377-.376.797-.703M5.677 7.677 4.536 6.536A7.9 7.9 0 0 0 2.48 7.959a.75.75 0 0 0 1.038 1.082 6.4 6.4 0 0 1 2.158-1.364M4.46 10.78A4.95 4.95 0 0 1 7.3 9.301l1.565 1.565A3.3 3.3 0 0 0 8 10.75c-.91 0-1.795.379-2.46 1.07a.75.75 0 0 1-1.08-1.04M7.25 13.5a.75.75 0 0 1 .75-.75h.1a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
            })
          })
        }))),
        ot = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m3 4.8 16.264 16.263 1.414-1.414L12.028 11c2.385.007 4.652.828 6.321 2.26a1 1 0 1 0 1.302-1.52C17.588 9.974 14.84 9 12 9q-.929 0-1.835.136L7.778 6.75A12.3 12.3 0 0 1 12 6c3.07 0 6.034 1.152 8.327 3.24a1 1 0 0 0 1.346-1.479A14.36 14.36 0 0 0 12 4.001c-1.998 0-3.956.419-5.759 1.212L4.414 3.386zM13.122 16.122l-2.06-2.06c-1.391.182-2.7.767-3.731 1.695a1 1 0 0 0 1.338 1.486C9.545 16.454 10.74 16 12 16c.382 0 .759.042 1.122.122M7.044 10.044l1.538 1.538a9.2 9.2 0 0 0-2.931 1.677 1 1 0 1 1-1.302-1.518c.806-.69 1.716-1.26 2.695-1.697M3.674 6.674 5.11 8.11A12.5 12.5 0 0 0 3.673 9.24 1 1 0 1 1 2.327 7.76q.645-.587 1.347-1.087M11 20a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1"
            })
          })
        }))),
        it = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m4 6 21.92 21.92 1.768-1.768-11.901-11.9q.105-.003.213-.002c2.116 0 3.608.316 4.83.796 1.24.486 2.26 1.16 3.463 1.985a1.25 1.25 0 0 0 1.414-2.062c-1.2-.823-2.43-1.65-3.964-2.25-1.552-.61-3.36-.969-5.743-.969-.934 0-1.78.055-2.556.159l-3.181-3.182c1.905-.645 3.922-.977 5.737-.977 3.771 0 8.414 1.432 11.116 4.134a1.25 1.25 0 0 0 1.768-1.768C25.586 6.818 20.229 5.25 16 5.25c-2.392 0-5.144.502-7.68 1.534L5.767 4.232zM8.861 13.361l1.869 1.869c-1.049.467-1.965 1.075-3.023 1.8a1.25 1.25 0 0 1-1.414-2.06c.814-.56 1.642-1.119 2.568-1.609M6.24 10.74 4.454 8.954q-.713.54-1.337 1.163a1.25 1.25 0 0 0 1.768 1.768c.41-.41.866-.792 1.356-1.143M13.583 18.083l2.171 2.171c-1.557.055-2.835.636-3.888 1.648a1.25 1.25 0 0 1-1.732-1.804c.99-.95 2.143-1.638 3.449-2.015M14.75 26c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 0 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25"
            })
          })
        }))),
        st = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(at, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ot, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(it, {
              ...a,
              ref: r
            })]
          })
        }));
      st.displayName = "WifiOff", st.category = "User Interface", st.variant = "Outline", st.keywords = "Connection, Internet, Wireless, Technology, Network, Signal, No, Off", st.MD = at, st.LG = ot, st.XL = it;
      const nt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M4.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M7 4.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M8.819 9.25H5A2.75 2.75 0 0 0 2.25 12v1a.75.75 0 0 0 1.5 0v-1A1.25 1.25 0 0 1 5 10.75h3.08c.123-.562.381-1.074.739-1.5"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M14 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-2.5-1.6a.35.35 0 0 1 .35.35v.9h.9a.35.35 0 1 1 0 .7h-.9v.9a.35.35 0 1 1-.7 0v-.9h-.9a.35.35 0 1 1 0-.7h.9v-.9a.35.35 0 0 1 .35-.35",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        dt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M6.5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M12.691 14H7.25a4.2 4.2 0 0 0-3.014 1.278A4.38 4.38 0 0 0 3 18.333V20a1 1 0 1 0 2 0v-1.667c0-.627.243-1.223.668-1.659A2.2 2.2 0 0 1 7.25 16h4.595c.141-.732.435-1.41.846-2"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M21 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4-2.65a.65.65 0 0 1 .65.65v1.35H19a.65.65 0 1 1 0 1.3h-1.35V19a.65.65 0 1 1-1.3 0v-1.35H15a.65.65 0 1 1 0-1.3h1.35V15a.65.65 0 0 1 .65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ct = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M8.75 12a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M14 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M18.082 18.75H9.5a5.67 5.67 0 0 0-4.082 1.75 6 6 0 0 0-1.668 4.167V27a1.25 1.25 0 1 0 2.5 0v-2.333c0-.92.353-1.795.968-2.433A3.17 3.17 0 0 1 9.5 21.25h7.238a6.5 6.5 0 0 1 1.344-2.5"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M28 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-5-3.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H20.5a.75.75 0 0 1 0-1.5h1.75V20.5a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ht = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(nt, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(dt, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ct, {
              ...a,
              ref: r
            })]
          })
        }));
      ht.displayName = "PersonPlus", ht.category = "User Interface", ht.variant = "Outline", ht.keywords = "User, Add, Contact, Friend, Follow, People, Person, Profile", ht.MD = nt, ht.LG = dt, ht.XL = ct;
      const ft = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M4.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M7 4.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M8.819 9.25H5A2.75 2.75 0 0 0 2.25 12v1a.75.75 0 0 0 1.5 0v-1A1.25 1.25 0 0 1 5 10.75h3.08c.123-.562.381-1.074.739-1.5"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M14 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-4.1 0a.35.35 0 0 1 .35-.35h2.5a.35.35 0 1 1 0 .7h-2.5a.35.35 0 0 1-.35-.35",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        vt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M6.5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M12.691 14H7.25a4.2 4.2 0 0 0-3.014 1.278A4.38 4.38 0 0 0 3 18.333V20a1 1 0 1 0 2 0v-1.667c0-.627.243-1.223.668-1.659A2.2 2.2 0 0 1 7.25 16h4.595c.141-.732.435-1.41.846-2"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M21 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-6.65 0a.65.65 0 0 1 .65-.65h4a.65.65 0 1 1 0 1.3h-4a.65.65 0 0 1-.65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        wt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M8.75 12a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M14 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M18.082 18.75H9.5a5.67 5.67 0 0 0-4.082 1.75 6 6 0 0 0-1.668 4.167V27a1.25 1.25 0 1 0 2.5 0v-2.333c0-.92.353-1.795.968-2.433A3.17 3.17 0 0 1 9.5 21.25h7.238a6.5 6.5 0 0 1 1.344-2.5"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M28 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-8.25 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        xt = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ft, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(vt, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(wt, {
              ...a,
              ref: r
            })]
          })
        }));
      xt.displayName = "PersonMinus", xt.category = "User Interface", xt.variant = "Outline", xt.keywords = "Person, Profile, Remove, User, Delete, People, Unfriend, Friend, Unfollow", xt.MD = ft, xt.LG = vt, xt.XL = wt;
      const ut = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M8.75 8a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M4.3 3.757a5 5 0 0 0-.031.256A2 2 0 0 0 2.5 6v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V6a2 2 0 0 0-1.757-1.985 4 4 0 0 0-.023-.253c-.055-.453-.208-1.077-.63-1.64C10.377 1.172 9.222.75 7.993.75c-1.16 0-2.402.28-3.126 1.419a4.1 4.1 0 0 0-.569 1.588M7.993 2.25c-.977 0-1.551.237-1.86.723a2.6 2.6 0 0 0-.35 1.002L5.78 4h4.458l-.007-.057c-.036-.3-.131-.64-.342-.922-.349-.465-.987-.771-1.895-.771M11.5 5.5h-7A.5.5 0 0 0 4 6v6a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        gt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M13 12.5a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M6.08 6.798a8 8 0 0 0-.045.36A3 3 0 0 0 4 10v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-2.013-2.834 7 7 0 0 0-.034-.366c-.089-.73-.336-1.722-1.004-2.614C15.823 2.684 13.985 2 11.99 2c-1.902 0-3.862.459-5 2.249-.567.893-.807 1.846-.91 2.549M11.99 4c-1.658 0-2.727.402-3.31 1.321-.347.545-.523 1.16-.608 1.679h7.89c-.067-.516-.237-1.113-.614-1.615C14.707 4.53 13.556 4 11.99 4M17 9H7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        pt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M17.25 17a1.25 1.25 0 1 0-2.5 0v4a1.25 1.25 0 1 0 2.5 0z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M7.86 9.339c-.06.412-.089.775-.101 1.059A4 4 0 0 0 5.5 14v10a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4V14a4 4 0 0 0-2.25-3.598c0-.29-.016-.654-.065-1.064-.122-1.006-.462-2.367-1.376-3.587-1.54-2.055-4.063-3.001-6.823-3.001-2.644 0-5.322.638-6.872 3.079-.78 1.227-1.11 2.539-1.254 3.51m8.126-4.089c-2.34 0-3.903.567-4.762 1.92-.527.83-.778 1.768-.89 2.533a8 8 0 0 0-.039.297h11.442a7 7 0 0 0-.034-.36c-.091-.751-.334-1.64-.895-2.39-.934-1.248-2.597-2-4.822-2M22.5 12.5h-13A1.5 1.5 0 0 0 8 14v10a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 24 24V14a1.5 1.5 0 0 0-1.5-1.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        jt = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ut, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(gt, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(pt, {
              ...a,
              ref: r
            })]
          })
        }));
      jt.displayName = "Padlock", jt.category = "User Interface", jt.variant = "Outline", jt.keywords = "Lock, Password, Safe, Protection, Secure, Security, Latch", jt.MD = ut, jt.LG = gt, jt.XL = pt;
      const mt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M5.5 8.25a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5zM8 8.25a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5zM10.5 8.25a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M4.3 3.757a5 5 0 0 0-.031.256A2 2 0 0 0 2.5 6v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V6a2 2 0 0 0-1.757-1.985 4 4 0 0 0-.023-.253c-.055-.453-.208-1.077-.63-1.64C10.377 1.172 9.222.75 7.993.75c-1.16 0-2.402.28-3.126 1.419a4.1 4.1 0 0 0-.569 1.588M7.993 2.25c-.977 0-1.551.237-1.86.723a2.6 2.6 0 0 0-.35 1.002L5.78 4h4.458l-.007-.057c-.036-.3-.131-.64-.342-.922-.349-.465-.987-.771-1.895-.771M11.5 5.5h-7A.5.5 0 0 0 4 6v6a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Mt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M8.5 13a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zM12 13a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zM15.5 13a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M6.08 6.798a8 8 0 0 0-.045.36A3 3 0 0 0 4 10v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-2.013-2.834 7 7 0 0 0-.034-.366c-.089-.73-.336-1.722-1.004-2.614C15.823 2.684 13.985 2 11.99 2c-1.902 0-3.862.459-5 2.249-.567.893-.807 1.846-.91 2.549M11.99 4c-1.658 0-2.727.402-3.31 1.321-.347.545-.523 1.16-.608 1.679h7.89c-.067-.516-.237-1.113-.614-1.615C14.707 4.53 13.556 4 11.99 4M17 9H7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Rt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M11.5 17.75a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5zM16 17.75a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5zM20.5 17.75a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M7.86 9.339c-.06.412-.089.775-.101 1.059A4 4 0 0 0 5.5 14v10a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4V14a4 4 0 0 0-2.25-3.598c0-.29-.016-.654-.065-1.064-.122-1.006-.462-2.367-1.376-3.587-1.54-2.055-4.063-3.001-6.823-3.001-2.644 0-5.322.638-6.872 3.079-.78 1.227-1.11 2.539-1.254 3.51m8.126-4.089c-2.34 0-3.903.567-4.762 1.92-.527.83-.778 1.768-.89 2.533a8 8 0 0 0-.039.297h11.442a7 7 0 0 0-.034-.36c-.091-.751-.334-1.64-.895-2.39-.934-1.248-2.597-2-4.822-2M22.5 12.5h-13A1.5 1.5 0 0 0 8 14v10a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 24 24V14a1.5 1.5 0 0 0-1.5-1.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        bt = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(mt, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Mt, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Rt, {
              ...a,
              ref: r
            })]
          })
        }));
      bt.displayName = "PadlockPassword", bt.category = "User Interface", bt.variant = "Outline", bt.keywords = "", bt.MD = mt, bt.LG = Mt, bt.XL = Rt;
      const Lt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M14 8a1 1 0 0 1-1 1h-.5v3.5A1.5 1.5 0 0 1 11 14H5a1.5 1.5 0 0 1-1.5-1.5V9H3a1 1 0 0 1-1-1V6.362a1.5 1.5 0 0 1 .744-1.296l4.5-2.625a1.5 1.5 0 0 1 1.512 0l4.5 2.625A1.5 1.5 0 0 1 14 6.362zm-1.5-.5H11v5H9.55v-2.4a.65.65 0 0 0-.65-.65H7.1a.65.65 0 0 0-.65.65v2.4H5v-5H3.5V6.362L8 3.737l4.5 2.625zm-4.95 5h.9v-1.95h-.9z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M21 11.8a1.7 1.7 0 0 1-1.7 1.7h-.55V19a2 2 0 0 1-2 2h-9.5a2 2 0 0 1-2-2v-5.5H4.7A1.7 1.7 0 0 1 3 11.8V9.399a2 2 0 0 1 .992-1.728l7-4.083a2 2 0 0 1 2.016 0l7 4.083A2 2 0 0 1 21 9.4zm-4.25-.3V19h-2.1v-4.5a.95.95 0 0 0-.95-.95h-3.4a.95.95 0 0 0-.95.95V19h-2.1v-7.5H5V9.399l7-4.084L19 9.4V11.5zm-5.7 7.5h1.9v-3.75h-1.9z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M28 16a2 2 0 0 1-2 2h-1v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 7 25.5V18H6a2 2 0 0 1-2-2v-3.564a2.5 2.5 0 0 1 1.24-2.16l9.5-5.541a2.5 2.5 0 0 1 2.52 0l9.5 5.542A2.5 2.5 0 0 1 28 12.436zm-5.5-.5v10h-2.802v-6.4a1.2 1.2 0 0 0-1.2-1.2h-5a1.2 1.2 0 0 0-1.2 1.2v6.4H9.5v-10h-3v-3.064L16 6.894l9.5 5.542V15.5zm-8.002 10h3v-5.4h-3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ct = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Lt, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(zt, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(yt, {
              ...a,
              ref: r
            })]
          })
        }));
      Ct.displayName = "House", Ct.category = "User Interface", Ct.variant = "Outline", Ct.keywords = "Home, Building, Property, Homepage, City", Ct.MD = Lt, Ct.LG = zt, Ct.XL = yt;
      const At = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M4.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M7 4.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M8.819 9.25H5A2.75 2.75 0 0 0 2.25 12v1a.75.75 0 0 0 1.5 0v-1A1.25 1.25 0 0 1 5 10.75h3.08c.123-.562.381-1.074.739-1.5"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M11.75 8.45a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6m-1.7 2.8c0-.269.062-.523.173-.749l2.276 2.276a1.7 1.7 0 0 1-2.449-1.527m3.227.749L11 9.723a1.7 1.7 0 0 1 2.275 2.275",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Dt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M6.5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M12.691 14H7.25a4.2 4.2 0 0 0-3.014 1.278A4.38 4.38 0 0 0 3 18.333V20a1 1 0 1 0 2 0v-1.667c0-.627.243-1.223.668-1.659A2.2 2.2 0 0 1 7.25 16h4.595c.141-.732.435-1.41.846-2"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M17 13.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M14.75 17c0-.347.079-.676.22-.97l3 3A2.25 2.25 0 0 1 14.75 17m4.28.97-3-3a2.25 2.25 0 0 1 3 3",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        It = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M8.75 12a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M14 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M18.082 18.75H9.5a5.67 5.67 0 0 0-4.082 1.75 6 6 0 0 0-1.668 4.167V27a1.25 1.25 0 1 0 2.5 0v-2.333c0-.92.353-1.795.968-2.433A3.17 3.17 0 0 1 9.5 21.25h7.238a6.5 6.5 0 0 1 1.344-2.5"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M23 18a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-3 5c0-.463.105-.902.292-1.293l4.001 4A3 3 0 0 1 20 23m5.708 1.293-4.001-4a3 3 0 0 1 4.001 4.001",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Bt = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(At, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Dt, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(It, {
              ...a,
              ref: r
            })]
          })
        }));
      Bt.displayName = "PersonBlock", Bt.category = "User Interface", Bt.variant = "Outline", Bt.keywords = "", Bt.MD = At, Bt.LG = Dt, Bt.XL = It;
      const St = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsxs)("mask", {
              id: "a",
              fill: e,
              children: [(0, t.jsx)("path", {
                d: "M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }), (0, t.jsx)("path", {
                d: "M8 3.25c-1.693 0-3.197.644-4.35 1.507-1.141.854-1.998 1.968-2.358 2.995L1.205 8l.087.248c.36 1.027 1.217 2.141 2.359 2.995C4.803 12.106 6.307 12.75 8 12.75s3.197-.644 4.35-1.507c1.141-.854 1.998-1.968 2.358-2.995L14.794 8l-.086-.248c-.36-1.027-1.217-2.141-2.359-2.995C11.197 3.894 9.693 3.25 8 3.25m-3.45 6.792C3.702 9.41 3.101 8.644 2.807 8c.294-.644.895-1.409 1.741-2.042C5.497 5.248 6.693 4.75 8 4.75c1.308 0 2.504.499 3.452 1.208.846.633 1.447 1.398 1.74 2.042-.293.644-.894 1.409-1.74 2.042-.948.71-2.144 1.208-3.451 1.208s-2.503-.499-3.45-1.208",
                fillRule: "evenodd",
                clipRule: "evenodd"
              })]
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M8 3.25c-1.693 0-3.197.644-4.35 1.507-1.141.854-1.998 1.968-2.358 2.995L1.205 8l.087.248c.36 1.027 1.217 2.141 2.359 2.995C4.803 12.106 6.307 12.75 8 12.75s3.197-.644 4.35-1.507c1.141-.854 1.998-1.968 2.358-2.995L14.794 8l-.086-.248c-.36-1.027-1.217-2.141-2.359-2.995C11.197 3.894 9.693 3.25 8 3.25m-3.45 6.792C3.702 9.41 3.101 8.644 2.807 8c.294-.644.895-1.409 1.741-2.042C5.497 5.248 6.693 4.75 8 4.75c1.308 0 2.504.499 3.452 1.208.846.633 1.447 1.398 1.74 2.042-.293.644-.894 1.409-1.74 2.042-.948.71-2.144 1.208-3.451 1.208s-2.503-.499-3.45-1.208",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "m3.65 4.757 2.397 3.202zM1.293 7.752l3.775 1.322zM1.205 8-2.57 6.679-3.033 8l.463 1.321zm.087.248 3.775-1.322zm2.359 2.995 2.396-3.202zm8.698 0 2.397 3.203zm2.359-2.995 3.775 1.321zM14.794 8l3.776 1.321L19.032 8l-.462-1.321zm-.086-.248 3.775-1.321zm-2.359-2.995 2.397-3.203zM2.81 8-.83 6.337-1.59 8l.76 1.663zm1.74 2.042-2.396 3.203zm0-4.084L2.153 2.755zm6.902 0 2.396-3.203zM13.19 8l3.638 1.663L17.59 8l-.76-1.663zm-1.74 2.042 2.396 3.203zM6.047 7.96C6.654 7.505 7.337 7.25 8 7.25v-8C5.277-.75 2.953.283 1.254 1.554zm-.98 1.115c.009-.025.074-.18.261-.42.18-.23.425-.475.72-.695L1.253 1.554c-1.63 1.22-3.06 2.943-3.737 4.877zm-.086.247.086-.247-7.55-2.643-.087.248zm.086-2.395-.086-.247L-2.57 9.32l.087.248zm.98 1.115a3.9 3.9 0 0 1-.719-.696 1.8 1.8 0 0 1-.26-.419L-2.484 9.57c.677 1.934 2.107 3.657 3.737 4.877zM8 8.75c-.663 0-1.346-.255-1.953-.71l-4.793 6.406C2.953 15.716 5.277 16.75 8 16.75zm1.953-.71c-.607.455-1.29.71-1.953.71v8c2.723 0 5.047-1.033 6.746-2.304zm.98-1.114c-.01.025-.074.18-.261.42a3.9 3.9 0 0 1-.72.695l4.794 6.405c1.63-1.22 3.06-2.943 3.737-4.877zm.086-.247-.087.247 7.551 2.643.087-.248zm-.087 2.395.087.247L18.57 6.68l-.087-.248zm-.98-1.115c.295.22.54.466.72.696.187.239.252.394.26.419l7.551-2.643c-.677-1.934-2.107-3.657-3.737-4.877zM8 7.25c.663 0 1.346.255 1.953.71l4.793-6.406C13.047.284 10.723-.75 8-.75zM-.83 9.663c.61 1.333 1.675 2.603 2.983 3.582L6.946 6.84a2.4 2.4 0 0 1-.402-.377c-.102-.122-.12-.176-.098-.126zm2.983-6.908C.845 3.734-.22 5.005-.83 6.337l7.276 3.326c-.023.05-.004-.004.098-.126a2.4 2.4 0 0 1 .402-.377zM8 .75c-2.336 0-4.352.886-5.847 2.005L6.946 9.16c.4-.3.775-.41 1.054-.41zm5.847 2.005C12.352 1.636 10.336.75 8 .75v8c.278 0 .654.11 1.054.41zm2.983 3.582c-.61-1.333-1.675-2.603-2.983-3.582L9.054 9.16c.172.129.307.263.402.377.102.122.12.176.098.126zm-2.983 6.908c1.308-.979 2.373-2.25 2.983-3.582L9.554 6.337c.023-.05.004.004-.098.126a2.4 2.4 0 0 1-.402.377zM8 15.25c2.335 0 4.352-.886 5.847-2.005L9.054 6.84c-.4.3-.776.41-1.054.41zm-5.847-2.005C3.648 14.364 5.664 15.25 8 15.25v-8c-.279 0-.654-.11-1.054-.41zM8 15a7 7 0 0 0 7-7H7a1 1 0 0 1 1-1zM1 8a7 7 0 0 0 7 7V7a1 1 0 0 1 1 1zm7-7a7 7 0 0 0-7 7h8a1 1 0 0 1-1 1zm7 7a7 7 0 0 0-7-7v8a1 1 0 0 1-1-1zm-7 5.25c2.9 0 5.25-2.35 5.25-5.25h-8A2.75 2.75 0 0 1 8 5.25zM2.75 8c0 2.9 2.35 5.25 5.25 5.25v-8A2.75 2.75 0 0 1 10.75 8zM8 2.75A5.25 5.25 0 0 0 2.75 8h8A2.75 2.75 0 0 1 8 10.75zM13.25 8c0-2.9-2.35-5.25-5.25-5.25v8A2.75 2.75 0 0 1 5.25 8z",
              mask: "url(#a)"
            })]
          })
        }))),
        Ht = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-2 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M12 6c-2.24 0-4.237.8-5.774 1.878-1.52 1.066-2.675 2.466-3.163 3.772l-.13.35.13.35c.488 1.306 1.642 2.706 3.163 3.772C7.763 17.201 9.76 18 12 18s4.237-.8 5.774-1.878c1.52-1.066 2.675-2.466 3.163-3.772l.13-.35-.13-.35c-.488-1.306-1.642-2.706-3.163-3.772C16.237 6.799 14.24 6 12 6m-4.626 8.485c-1.108-.777-1.89-1.707-2.283-2.485.393-.778 1.175-1.708 2.283-2.485C8.637 8.63 10.24 8 12 8s3.363.63 4.626 1.515c1.108.777 1.89 1.707 2.283 2.485-.393.778-1.175 1.708-2.283 2.485C15.363 15.37 13.76 16 12 16s-3.363-.63-4.626-1.515",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Vt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-3 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M16 6.75c-3.322 0-6.278 1.264-8.549 2.963-2.253 1.686-3.932 3.877-4.63 5.874L2.675 16l.144.413c.7 1.997 2.378 4.188 4.631 5.874 2.27 1.699 5.227 2.963 8.549 2.963s6.278-1.264 8.549-2.963c2.253-1.686 3.932-3.876 4.63-5.874l.145-.413-.144-.413c-.7-1.998-2.378-4.188-4.631-5.874-2.271-1.699-5.227-2.963-8.55-2.963M8.949 20.285c-1.764-1.32-3.015-2.93-3.606-4.285.591-1.355 1.842-2.965 3.606-4.285 1.929-1.444 4.373-2.465 7.05-2.465 2.68 0 5.123 1.021 7.052 2.465 1.764 1.32 3.014 2.93 3.606 4.285-.592 1.355-1.842 2.965-3.606 4.285-1.93 1.444-4.373 2.465-7.051 2.465s-5.122-1.021-7.051-2.465",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Nt = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(St, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Ht, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Vt, {
              ...a,
              ref: r
            })]
          })
        }));
      Nt.displayName = "Eye", Nt.category = "User Interface", Nt.variant = "Outline", Nt.keywords = "View, Password, Sign, Vision, Watch, See, Look, Show, Visible", Nt.MD = St, Nt.LG = Ht, Nt.XL = Vt;
      const Gt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsxs)("mask", {
              id: "a",
              fill: e,
              children: [(0, t.jsx)("path", {
                d: "m2.102 3.2 10.606 10.607 1.06-1.061-1.466-1.467.047-.036c1.142-.854 2-1.968 2.359-2.995L14.794 8l-.086-.248c-.36-1.027-1.217-2.141-2.359-2.995C11.197 3.894 9.693 3.25 8 3.25a7 7 0 0 0-3.023.703L3.162 2.139zm4.017 1.896.333.333a3 3 0 0 1 4.118 4.118l.656.656a7 7 0 0 0 .225-.16c.846-.634 1.447-1.4 1.74-2.043-.293-.644-.894-1.409-1.74-2.042C10.503 5.248 9.307 4.75 8 4.75c-.662 0-1.295.128-1.881.346M9.233 8.21q.017-.104.017-.21a1.25 1.25 0 0 0-1.46-1.233z",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }), (0, t.jsx)("path", {
                d: "m9.95 12.462-1.258-1.258q-.34.046-.692.046c-1.307 0-2.503-.499-3.45-1.208C3.702 9.41 3.101 8.644 2.807 8c.22-.48.609-1.027 1.143-1.537l-1.06-1.06c-.76.73-1.325 1.565-1.599 2.35L1.205 8l.087.248c.36 1.027 1.217 2.141 2.359 2.995C4.803 12.106 6.307 12.75 8 12.75c.685 0 1.338-.105 1.95-.288"
              }), (0, t.jsx)("path", {
                d: "m8.454 10.966-3.42-3.42Q5 7.768 5 8a3 3 0 0 0 3.454 2.966"
              })]
            }), (0, t.jsx)("path", {
              fill: e,
              d: "m2.102 3.2 10.606 10.607 1.06-1.061-1.466-1.467.047-.036c1.142-.854 2-1.968 2.359-2.995L14.794 8l-.086-.248c-.36-1.027-1.217-2.141-2.359-2.995C11.197 3.894 9.693 3.25 8 3.25a7 7 0 0 0-3.023.703L3.162 2.139zm4.017 1.896.333.333a3 3 0 0 1 4.118 4.118l.656.656a7 7 0 0 0 .225-.16c.846-.634 1.447-1.4 1.74-2.043-.293-.644-.894-1.409-1.74-2.042C10.503 5.248 9.307 4.75 8 4.75c-.662 0-1.295.128-1.881.346M9.233 8.21q.017-.104.017-.21a1.25 1.25 0 0 0-1.46-1.233z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "m9.95 12.462-1.258-1.258q-.34.046-.692.046c-1.307 0-2.503-.499-3.45-1.208C3.702 9.41 3.101 8.644 2.807 8c.22-.48.609-1.027 1.143-1.537l-1.06-1.06c-.76.73-1.325 1.565-1.599 2.35L1.205 8l.087.248c.36 1.027 1.217 2.141 2.359 2.995C4.803 12.106 6.307 12.75 8 12.75c.685 0 1.338-.105 1.95-.288"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "m8.454 10.966-3.42-3.42Q5 7.768 5 8a3 3 0 0 0 3.454 2.966"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M12.708 13.807 9.88 16.635l2.828 2.828 2.829-2.828zM2.102 3.2-.727.372-3.555 3.2l2.828 2.828zm11.667 9.546 2.828 2.828 2.829-2.828-2.829-2.828zm-1.467-1.467-2.373-3.22-3.745 2.759 3.29 3.29zm.047-.036 2.397 3.203zm2.359-2.995 3.775 1.321zM14.794 8l3.776 1.321L19.032 8l-.462-1.321zm-.086-.248 3.775-1.321zm-2.359-2.995 2.397-3.203zm-7.373-.804L2.147 6.78l2.001 2.001 2.553-1.22zM3.162 2.139 5.991-.689 3.162-3.518.334-.689zM6.12 5.096l-1.394-3.75-5.842 2.171L3.29 7.924zm.333.333L3.624 8.258l2.214 2.214 2.68-1.618zm4.118 4.119L7.147 7.48l-1.618 2.681 2.214 2.214zm.656.655-2.828 2.829 2.348 2.348 2.74-1.877zm.225-.16L9.054 6.84zM13.19 8l3.638 1.663L17.59 8l-.76-1.663zm-1.74-2.042 2.396-3.203zM9.232 8.21l-2.828 2.828 5.482 5.482 1.29-7.644zM7.79 6.767l-.666-3.944L-.52 4.114l5.482 5.482zm.902 4.437 2.828-2.829-1.4-1.4-1.96.264zm1.258 1.258 1.144 3.833 6.429-1.917-4.744-4.744zm-5.4-2.42L6.945 6.84zM2.807 8-.83 6.337-1.59 8l.76 1.663zm1.143-1.537 2.761 2.894 2.964-2.826L6.78 3.635zm-1.06-1.06 2.828-2.83L2.944-.2.117 2.52zm-1.599 2.35 3.775 1.32zM1.205 8-2.57 6.679-3.033 8l.463 1.321zm.087.248-3.775 1.321zm2.359 2.995 2.396-3.202zm1.383-3.697 2.829-2.829L2.267-.878 1.08 6.945zm3.42 3.42.6 3.955 7.824-1.188-5.595-5.596zm7.083.012L4.93.372-.727 6.028 9.88 16.635zm-4.597-1.06-1.06 1.06 5.657 5.657 1.06-1.06zm-1.467 4.19 1.467 1.466 5.657-5.656L15.13 8.45zm.48-6.067-.024.018 4.746 6.44.07-.053zm.98-1.115c-.01.025-.074.18-.261.42a3.9 3.9 0 0 1-.72.695l4.794 6.405c1.63-1.22 3.06-2.943 3.737-4.877zm.086-.247-.087.247 7.551 2.643.087-.248zm-.087 2.395.087.247L18.57 6.68l-.087-.248zm-.98-1.115c.295.22.54.466.72.696.187.239.252.394.26.419l7.551-2.643c-.677-1.934-2.107-3.657-3.737-4.877zM8 7.25c.663 0 1.346.255 1.953.71l4.793-6.406C13.047.283 10.723-.75 8-.75zM6.7 7.562A3 3 0 0 1 8 7.25v-8c-1.774 0-3.383.44-4.75 1.094zM.334 4.968 2.147 6.78l5.657-5.656L5.991-.69zm4.596 1.06 1.06-1.06L.335-.69-.726.37zM3.29 7.924l.334.334L9.28 2.6l-.334-.334zM8 1a7 7 0 0 0-3.614 1.005l4.133 6.85A1 1 0 0 1 8 9zm7 7a7 7 0 0 0-7-7v8a1 1 0 0 1-1-1zm-1.005 3.614A7 7 0 0 0 15 8H7c0-.182.053-.365.146-.519zm-6.253.762.656.656 5.657-5.657-.656-.656zm5.744 1.127q.184-.126.361-.258L9.054 6.84l-.088.063zm.361-.258c1.308-.979 2.373-2.25 2.983-3.582L9.554 6.337c.023-.05.004.004-.098.126a2.4 2.4 0 0 1-.402.377zm2.983-6.908c-.61-1.333-1.675-2.603-2.983-3.582L9.054 9.16c.172.129.307.263.402.377.102.122.12.176.098.126zm-2.983-3.582C12.352 1.636 10.336.75 8 .75v8c.278 0 .654.11 1.054.41zM8 .75c-1.18 0-2.285.228-3.275.596l2.787 7.5c.184-.069.346-.096.488-.096zM5.25 8q0-.23.038-.456l7.889 1.332A5 5 0 0 0 13.25 8zM8 10.75A2.75 2.75 0 0 1 5.25 8h8c0-2.9-2.35-5.25-5.25-5.25zm.456-.038A3 3 0 0 1 8 10.75v-8q-.444 0-.876.073zM4.962 9.596l1.442 1.442 5.657-5.657-1.442-1.442zm.901 4.436 1.259 1.258 5.657-5.656-1.259-1.259zM8 15.25q.626-.001 1.224-.082L8.16 7.239q-.08.01-.16.011zm-5.847-2.005C3.648 14.364 5.664 15.25 8 15.25v-8c-.279 0-.654-.11-1.054-.41zM-.83 9.663c.61 1.333 1.675 2.603 2.983 3.582L6.946 6.84a2.4 2.4 0 0 1-.402-.377c-.102-.122-.12-.176-.098-.126zM1.19 3.57C.35 4.37-.366 5.323-.83 6.337l7.276 3.326c-.02.042-.014.02.038-.05.05-.068.125-.157.228-.256zM.062 8.23l1.06 1.06L6.78 3.636 5.719 2.574zm5.005.843c.005-.013.043-.11.151-.27.106-.154.255-.335.447-.52L.117 2.52c-1.103 1.062-2.074 2.408-2.6 3.91zm-.086.247.086-.247-7.55-2.643-.087.248zm.086-2.395-.086-.247L-2.57 9.32l.087.248zm.98 1.115a3.9 3.9 0 0 1-.719-.696 1.8 1.8 0 0 1-.26-.419L-2.484 9.57c.677 1.934 2.107 3.657 3.737 4.877zM8 8.75c-.663 0-1.346-.255-1.953-.71l-4.793 6.406C2.953 15.716 5.277 16.75 8 16.75zm.807-.121q-.4.12-.807.121v8c1.098 0 2.137-.17 3.094-.455zm-6.601 1.745 3.42 3.42 5.657-5.657-3.42-3.42zM9 8a1 1 0 0 1-.011.146l-7.91-1.2Q1 7.465 1 8zM8 7a1 1 0 0 1 1 1H1a7 7 0 0 0 7 7zm-.146.011A1 1 0 0 1 8 7v8q.534 0 1.055-.08z",
              mask: "url(#a)"
            })]
          })
        }))),
        kt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "m3 4.8 16.264 16.264 1.414-1.415-3.277-3.276q.192-.123.374-.25c1.52-1.067 2.675-2.467 3.163-3.773l.13-.35-.13-.35c-.488-1.306-1.642-2.706-3.163-3.772C16.238 6.799 14.241 6 12.001 6a9.8 9.8 0 0 0-4.07.902L4.413 3.386zm6.466 3.638A7.7 7.7 0 0 1 12.001 8c1.76 0 3.363.63 4.626 1.515 1.108.777 1.89 1.707 2.283 2.485-.393.778-1.175 1.708-2.283 2.485a9 9 0 0 1-.681.432l-1.01-1.01a3.5 3.5 0 0 0-4.842-4.842zm3.976 3.976a1.502 1.502 0 0 0-1.856-1.856z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M6.407 10.305c-.604.571-1.049 1.168-1.315 1.695.393.778 1.175 1.708 2.283 2.485C8.638 15.371 10.241 16 12.001 16h.1l1.807 1.806a9.5 9.5 0 0 1-1.907.194c-2.24 0-4.237-.8-5.774-1.878-1.52-1.066-2.675-2.466-3.163-3.772l-.13-.35.13-.35c.345-.924 1.023-1.894 1.929-2.76z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "m11.576 15.475-3.05-3.051a3.5 3.5 0 0 0 3.05 3.05"
            })]
          })
        }))),
        Xt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "m4 6 21.92 21.92 1.768-1.768-3.56-3.56q.214-.15.421-.305c2.253-1.686 3.932-3.876 4.631-5.874l.145-.413-.145-.413c-.7-1.998-2.378-4.188-4.631-5.874C22.279 8.014 19.322 6.75 16 6.75c-2.273 0-4.375.592-6.204 1.51L5.768 4.233zm7.68 4.144A11.1 11.1 0 0 1 16 9.25c2.678 0 5.122 1.021 7.051 2.465 1.764 1.32 3.015 2.93 3.607 4.285-.592 1.355-1.843 2.965-3.607 4.285q-.351.263-.725.506l-1.385-1.386a6 6 0 0 0-8.346-8.346zm3.11 3.11a3 3 0 0 1 3.956 3.956z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "m20.176 24.576-2.042-2.042c-.69.14-1.403.216-2.134.216-2.678 0-5.122-1.021-7.051-2.465-1.764-1.32-3.014-2.93-3.606-4.285.486-1.112 1.415-2.396 2.707-3.55l-1.77-1.77c-1.66 1.51-2.888 3.273-3.46 4.907L2.676 16l.144.413c.7 1.998 2.378 4.188 4.631 5.874 2.271 1.699 5.228 2.963 8.55 2.963 1.472 0 2.874-.249 4.175-.674"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "m17.508 21.809-7.317-7.317a6 6 0 0 0 7.317 7.317"
            })]
          })
        }))),
        Ot = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Gt, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(kt, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Xt, {
              ...a,
              ref: r
            })]
          })
        }));
      Ot.displayName = "EyeSlash", Ot.category = "User Interface", Ot.variant = "Outline", Ot.keywords = "Lock, Password, Private, Vision, See, Look, Hide, Invisible", Ot.MD = Gt, Ot.LG = kt, Ot.XL = Xt;
      const Ft = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M5.143 2 3 4.143v7.714h2.571V14l2.143-2.143H9.43L13.286 8V2zm7.286 5.571-1.715 1.715H9l-1.5 1.5v-1.5H5.571V2.857h6.858z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M11.143 4.357h-.857V6.93h.857zM8.786 4.357h-.857V6.93h.857z"
            })]
          })
        }))),
        Pt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M7.514 3 4.3 6.214v11.572h3.857V21l3.214-3.214h2.572L19.728 12V3zm10.929 8.357L15.87 13.93H13.3l-2.25 2.25v-2.25H8.157V4.286h10.286z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M16.514 6.536h-1.286v3.857h1.286zM12.978 6.536h-1.285v3.857h1.285z"
            })]
          })
        }))),
        _t = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M9.986 4 5.7 8.286v15.428h5.143V28l4.286-4.286h3.428L26.272 16V4zm14.571 11.143L21.13 18.57H17.7l-3 3v-3h-3.857V5.714h13.714z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M21.986 8.714h-1.714v5.143h1.714zM17.272 8.714h-1.715v5.143h1.715z"
            })]
          })
        }))),
        qt = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ft, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Pt, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(_t, {
              ...a,
              ref: r
            })]
          })
        }));
      qt.displayName = "Twitch", qt.category = "Social Media", qt.variant = "Outline", qt.keywords = "Social media, Streaming, Game, App, Share", qt.MD = Ft, qt.LG = Pt, qt.XL = _t;
      const Ut = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M5.515 2.042c-.638.03-1.074.132-1.455.282-.395.153-.73.36-1.062.694a2.9 2.9 0 0 0-.69 1.063c-.148.382-.248.818-.276 1.457s-.034.844-.031 2.474c.003 1.629.01 1.833.041 2.473.03.639.132 1.074.282 1.456.154.394.36.728.694 1.061s.668.537 1.064.69c.382.147.818.248 1.457.276.638.028.844.034 2.473.031s1.834-.01 2.474-.04 1.073-.133 1.455-.282c.394-.154.729-.36 1.061-.694a2.9 2.9 0 0 0 .69-1.064c.148-.382.248-.818.276-1.456.028-.64.034-.845.031-2.474s-.01-1.834-.04-2.474-.133-1.074-.282-1.456a2.95 2.95 0 0 0-.694-1.061 2.9 2.9 0 0 0-1.064-.69c-.382-.147-.818-.248-1.457-.276-.638-.027-.844-.034-2.473-.031s-1.834.01-2.474.041m.07 10.847c-.585-.026-.902-.123-1.114-.204a1.9 1.9 0 0 1-.691-.448 1.85 1.85 0 0 1-.45-.689c-.082-.212-.181-.529-.209-1.114-.03-.632-.036-.822-.04-2.424-.003-1.602.003-1.791.031-2.424.025-.584.123-.902.204-1.114.108-.28.238-.48.448-.69.21-.212.409-.342.689-.451.211-.083.529-.18 1.113-.209.633-.03.823-.036 2.424-.039 1.602-.004 1.792.002 2.425.03.585.026.903.123 1.114.204.28.108.48.238.69.448.212.21.342.409.451.69.083.21.181.527.209 1.112.03.633.037.823.04 2.424.002 1.602-.003 1.792-.031 2.424-.026.585-.123.903-.204 1.115-.108.28-.238.48-.448.69-.21.211-.409.341-.689.45-.211.083-.529.182-1.113.21-.633.03-.822.035-2.425.039s-1.791-.003-2.424-.03m4.892-8.096a.72.72 0 1 0 1.44-.002.72.72 0 0 0-1.44.002M4.919 8.006a3.08 3.08 0 1 0 6.162-.012 3.08 3.08 0 0 0-6.162.012M6 8.004a2 2 0 1 1 4-.008 2 2 0 0 1-4 .008"
            })
          })
        }))),
        Et = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8.273 3.063c-.958.045-1.612.198-2.184.423-.591.23-1.093.54-1.592 1.04a4.4 4.4 0 0 0-1.035 1.596c-.222.572-.372 1.227-.414 2.185s-.052 1.266-.047 3.71.016 2.75.062 3.71c.046.958.198 1.612.423 2.184.23.591.54 1.093 1.04 1.592.502.5 1.003.806 1.597 1.035.572.221 1.227.372 2.185.414s1.266.052 3.71.047 2.75-.016 3.71-.061c.96-.046 1.61-.199 2.183-.423a4.4 4.4 0 0 0 1.592-1.04 4.4 4.4 0 0 0 1.035-1.597c.221-.572.372-1.227.414-2.184.042-.96.051-1.268.047-3.711-.005-2.444-.016-2.75-.061-3.71-.046-.96-.198-1.612-.423-2.184a4.4 4.4 0 0 0-1.04-1.592c-.501-.5-1.004-.806-1.597-1.035-.572-.221-1.227-.372-2.185-.414s-1.266-.052-3.71-.047-2.75.015-3.71.062m.105 16.27c-.878-.038-1.354-.184-1.672-.306a2.8 2.8 0 0 1-1.036-.671 2.8 2.8 0 0 1-.675-1.034c-.124-.317-.272-.793-.313-1.67-.045-.95-.054-1.234-.06-3.637s.005-2.687.046-3.636c.038-.877.184-1.354.306-1.671.162-.421.357-.72.671-1.036a2.8 2.8 0 0 1 1.034-.675c.317-.124.793-.272 1.67-.313.95-.045 1.234-.054 3.637-.06s2.687.004 3.637.046c.876.038 1.354.183 1.67.306.421.162.72.357 1.037.671s.511.613.675 1.034c.124.317.271.792.313 1.67.045.95.055 1.234.06 3.636s-.005 2.688-.046 3.636c-.038.877-.184 1.354-.306 1.672-.162.42-.357.72-.672 1.036-.314.316-.613.511-1.033.675-.317.124-.794.271-1.67.313-.95.045-1.234.054-3.637.06s-2.687-.005-3.636-.046M15.715 7.19a1.08 1.08 0 1 0 2.16-.004 1.08 1.08 0 0 0-2.16.004m-8.336 4.819a4.621 4.621 0 1 0 9.242-.018 4.621 4.621 0 0 0-9.242.018M9 12.006a3 3 0 1 1 6-.012 3 3 0 0 1-6 .012"
            })
          })
        }))),
        Tt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M11.03 4.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388 5.9 5.9 0 0 0-1.38 2.127c-.295.764-.495 1.637-.552 2.914-.056 1.278-.069 1.688-.063 4.947s.021 3.667.083 4.948c.061 1.276.264 2.148.564 2.91a5.9 5.9 0 0 0 1.387 2.123 5.9 5.9 0 0 0 2.13 1.38c.762.295 1.635.496 2.913.552s1.688.069 4.946.063 3.668-.02 4.948-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.122-1.388 5.9 5.9 0 0 0 1.38-2.128c.295-.764.496-1.637.552-2.913.056-1.28.069-1.69.063-4.948s-.021-3.667-.082-4.946c-.06-1.28-.264-2.15-.563-2.912a5.9 5.9 0 0 0-1.388-2.123 5.86 5.86 0 0 0-2.128-1.38c-.764-.295-1.636-.496-2.914-.552-1.277-.055-1.688-.069-4.947-.063s-3.667.02-4.947.083m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895 3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228-.06-1.264-.072-1.644-.08-4.848-.006-3.204.006-3.583.061-4.848.05-1.169.246-1.805.408-2.228.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417 1.265-.06 1.644-.072 4.848-.08 3.203-.006 3.583.006 4.85.062 1.168.05 1.805.244 2.227.408.561.216.96.475 1.382.895s.681.817.9 1.378c.166.422.362 1.056.417 2.227.06 1.265.074 1.645.08 4.848s-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23a3.7 3.7 0 0 1-.895 1.38c-.42.422-.819.682-1.379.9-.422.165-1.058.362-2.226.418-1.266.06-1.645.072-4.85.079s-3.582-.006-4.847-.06m9.782-16.192a1.44 1.44 0 1 0 2.88-.004 1.44 1.44 0 0 0-2.88.004M9.84 16.012a6.162 6.162 0 1 0 12.323-.026 6.162 6.162 0 0 0-12.323.026M12 16.008a4 4 0 1 1 8-.016 4 4 0 0 1-8 .016"
            })
          })
        }))),
        Wt = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ut, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Et, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Tt, {
              ...a,
              ref: r
            })]
          })
        }));
      Wt.displayName = "Instagram", Wt.category = "Social Media", Wt.variant = "Outline", Wt.keywords = "Social media, Photo, Camera, App, Share", Wt.MD = Ut, Wt.LG = Et, Wt.XL = Tt;
      const $t = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M14 8.022C14 4.696 11.313 2 8 2S2 4.696 2 8.022a6.02 6.02 0 0 0 4.55 5.845V9.862H5.314v-1.84h1.238v-.793c0-2.05.924-3 2.929-3 .38 0 1.036.075 1.304.15v1.668a8 8 0 0 0-.693-.022c-.984 0-1.364.374-1.364 1.346v.65h1.96l-.337 1.841H8.727V14A6.015 6.015 0 0 0 14 8.022"
            })
          })
        }))),
        Zt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M21 12.033C21 7.044 16.97 3 12 3s-9 4.044-9 9.033A9.03 9.03 0 0 0 9.826 20.8v-6.007H7.97v-2.76h1.856v-1.19c0-3.074 1.386-4.499 4.393-4.499.57 0 1.555.112 1.957.224V9.07a12 12 0 0 0-1.04-.033c-1.475 0-2.045.561-2.045 2.02v.976h2.94l-.506 2.76h-2.434V21C17.547 20.46 21 16.65 21 12.033"
            })
          })
        }))),
        Qt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M28 16.044C28 9.392 22.627 4 16 4S4 9.392 4 16.044a12.04 12.04 0 0 0 9.101 11.69v-8.01h-2.474v-3.68H13.1v-1.586c0-4.1 1.848-6 5.858-6 .76 0 2.073.15 2.61.3v3.336c-.284-.03-.776-.045-1.387-.045-1.968 0-2.728.748-2.728 2.693v1.302h3.92l-.674 3.68h-3.246V28C23.396 27.28 28 22.202 28 16.044"
            })
          })
        }))),
        Yt = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)($t, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Zt, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Qt, {
              ...a,
              ref: r
            })]
          })
        }));
      Yt.displayName = "Facebook", Yt.category = "Social Media", Yt.variant = "Outline", Yt.keywords = "Social media, Profile, Feed, App, Share", Yt.MD = $t, Yt.LG = Zt, Yt.XL = Qt;
      const Kt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M9.142 7.081 13.609 2H12.55L8.671 6.412 5.573 2H2l4.685 6.672L2 14h1.059l4.096-4.66L10.427 14H14zm-1.45 1.65-.475-.665L3.44 2.78h1.626l3.048 4.266.475.664 3.962 5.546h-1.626z"
            })
          })
        }))),
        Jt = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M13.712 10.622 20.413 3h-1.588l-5.818 6.618L8.36 3H3l7.027 10.007L3 21h1.588l6.144-6.989L15.64 21H21zm-2.174 2.474-.713-.997L5.16 4.17H7.6l4.571 6.4.712.996 5.943 8.319h-2.439z"
            })
          })
        }))),
        ea = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M18.283 14.162 27.218 4H25.1l-7.758 8.824L11.147 4H4l9.37 13.343L4 28h2.117l8.193-9.318L20.853 28H28zm-2.9 3.299-.95-1.329L6.88 5.56h3.252l6.096 8.532.95 1.329 7.924 11.09h-3.253z"
            })
          })
        }))),
        la = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Kt, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Jt, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ea, {
              ...a,
              ref: r
            })]
          })
        }));
      la.displayName = "Twitter", la.category = "Social Media", la.variant = "Outline", la.keywords = "Social media, Twitter, Tweet, App, Share, X", la.MD = Kt, la.LG = Jt, la.XL = ea;
      const ra = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M14.708 4.63a1.75 1.75 0 0 0-1.237-1.237C12.378 3.1 8 3.1 8 3.1s-4.378 0-5.47.293A1.75 1.75 0 0 0 1.293 4.63C1 5.722 1 8 1 8s0 2.278.293 3.37a1.75 1.75 0 0 0 1.237 1.237C3.622 12.9 8 12.9 8 12.9s4.378 0 5.47-.293a1.75 1.75 0 0 0 1.237-1.237C15 10.278 15 8 15 8s0-2.278-.293-3.37zM6.6 10.1V5.9L10.237 8z"
            })
          })
        }))),
        ta = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M21.584 7.186a2.5 2.5 0 0 0-1.769-1.768C18.255 5 12 5 12 5s-6.255 0-7.814.418a2.5 2.5 0 0 0-1.768 1.768C2 8.746 2 12 2 12s0 3.255.418 4.814c.23.86.907 1.537 1.768 1.768C5.746 19 12 19 12 19s6.255 0 7.814-.418a2.5 2.5 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.255-.418-4.814zM10 15V9l5.196 3z"
            })
          })
        }))),
        aa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M28.459 9.742a3.26 3.26 0 0 0-2.3-2.298C24.132 6.9 16 6.9 16 6.9s-8.13 0-10.158.544a3.26 3.26 0 0 0-2.298 2.298C3 11.77 3 16 3 16s0 4.231.544 6.258a3.26 3.26 0 0 0 2.298 2.298C7.87 25.1 16 25.1 16 25.1s8.13 0 10.158-.544a3.26 3.26 0 0 0 2.298-2.298C29 20.23 29 16 29 16s0-4.231-.544-6.258zM13.399 19.9V12.1l6.755 3.9z"
            })
          })
        }))),
        oa = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ra, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ta, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(aa, {
              ...a,
              ref: r
            })]
          })
        }));
      oa.displayName = "Youtube", oa.category = "Social Media", oa.variant = "Outline", oa.keywords = "Social media, Video, Player, App, Share", oa.MD = ra, oa.LG = ta, oa.XL = aa;
      const ia = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12.165 4.362A10 10 0 0 0 9.69 3.6q-.175.314-.317.645a9.2 9.2 0 0 0-2.747 0q-.142-.33-.317-.645a10 10 0 0 0-2.478.764C2.263 6.682 1.84 8.942 2.051 11.17a10 10 0 0 0 3.036 1.524 7.3 7.3 0 0 0 .65-1.049 6.5 6.5 0 0 1-1.023-.489q.129-.094.25-.188a7.13 7.13 0 0 0 6.071 0q.123.1.251.188-.492.29-1.025.49.28.552.65 1.048a10 10 0 0 0 3.038-1.524c.25-2.584-.426-4.824-1.784-6.81M6.007 9.8c-.592 0-1.081-.537-1.081-1.198S5.398 7.4 6.005 7.4s1.092.542 1.081 1.202c-.01.661-.476 1.198-1.08 1.198m3.986 0c-.592 0-1.08-.537-1.08-1.198S9.387 7.4 9.994 7.4s1.09.542 1.08 1.202c-.011.661-.476 1.198-1.08 1.198"
            })
          })
        }))),
        sa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M18.248 6.342A15 15 0 0 0 14.534 5.2q-.263.47-.476.967a13.8 13.8 0 0 0-4.12 0q-.213-.495-.476-.967a15 15 0 0 0-3.717 1.145c-2.35 3.477-2.987 6.868-2.669 10.21a15 15 0 0 0 4.555 2.287 11 11 0 0 0 .975-1.573 9.7 9.7 0 0 1-1.536-.733q.195-.142.377-.283a10.7 10.7 0 0 0 9.106 0q.186.152.377.283c-.49.29-1.006.535-1.54.735q.421.827.976 1.571a14.9 14.9 0 0 0 4.558-2.285c.373-3.876-.639-7.236-2.676-10.215M9.01 14.5c-.888 0-1.621-.806-1.621-1.796 0-.992.708-1.804 1.618-1.804s1.638.812 1.623 1.803c-.016.992-.715 1.797-1.62 1.797m5.98 0c-.889 0-1.62-.806-1.62-1.796 0-.992.708-1.804 1.62-1.804s1.634.812 1.618 1.803c-.015.992-.713 1.797-1.618 1.797"
            })
          })
        }))),
        na = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M24.33 8.423A19.9 19.9 0 0 0 19.38 6.9a14 14 0 0 0-.634 1.29 18.4 18.4 0 0 0-5.495 0q-.283-.662-.635-1.29A20 20 0 0 0 7.66 8.427c-3.133 4.636-3.983 9.157-3.558 13.614a20 20 0 0 0 6.073 3.049q.738-.994 1.3-2.097a13 13 0 0 1-2.048-.978q.259-.189.502-.378a14.26 14.26 0 0 0 12.142 0q.247.202.502.378-.983.58-2.052.98c.373.733.808 1.434 1.3 2.095a19.9 19.9 0 0 0 6.077-3.047c.498-5.168-.851-9.648-3.568-13.62M12.013 19.3c-1.183 0-2.161-1.074-2.161-2.395 0-1.322.944-2.405 2.157-2.405s2.184 1.083 2.164 2.405-.954 2.395-2.16 2.395m7.974 0c-1.186 0-2.16-1.074-2.16-2.395 0-1.322.944-2.405 2.16-2.405 1.215 0 2.178 1.083 2.157 2.405s-.951 2.395-2.157 2.395"
            })
          })
        }))),
        da = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ia, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(sa, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(na, {
              ...a,
              ref: r
            })]
          })
        }));
      da.displayName = "Discord", da.category = "Social Media", da.variant = "Outline", da.keywords = "Social media, Video, Player, Game, Community, App, Share", da.MD = ia, da.LG = sa, da.XL = na;
      const ca = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ha = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        va = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ca, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ha, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(fa, {
              ...a,
              ref: r
            })]
          })
        }));
      va.displayName = "Circle", va.category = "Selection", va.variant = "Outline", va.keywords = "Radio, Radio Button, Round, Empty, Selection, Unchecked", va.MD = ca, va.LG = ha, va.XL = fa;
      const wa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        xa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ua = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M16 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M16 2.75C8.682 2.75 2.75 8.682 2.75 16S8.682 29.25 16 29.25 29.25 23.318 29.25 16 23.318 2.75 16 2.75M5.25 16c0-5.937 4.813-10.75 10.75-10.75S26.75 10.063 26.75 16 21.937 26.75 16 26.75 5.25 21.937 5.25 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ga = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(wa, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(xa, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ua, {
              ...a,
              ref: r
            })]
          })
        }));
      ga.displayName = "CircleDot", ga.category = "Selection", ga.variant = "Outline", ga.keywords = "Radio, Radio Button, Round, Filled, Selection, Aim, Checked", ga.MD = wa, ga.LG = xa, ga.XL = ua;
      const pa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 2.25a.75.75 0 0 1 .75.75v4.25H13a.75.75 0 0 1 0 1.5H8.75V13a.75.75 0 0 1-1.5 0V8.75H3a.75.75 0 0 1 0-1.5h4.25V3A.75.75 0 0 1 8 2.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ja = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ma = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 4.75c.69 0 1.25.56 1.25 1.25v8.75H26a1.25 1.25 0 1 1 0 2.5h-8.75V26a1.25 1.25 0 1 1-2.5 0v-8.75H6a1.25 1.25 0 1 1 0-2.5h8.75V6c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ma = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(pa, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ja, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ma, {
              ...a,
              ref: r
            })]
          })
        }));
      Ma.displayName = "Plus", Ma.category = "Selection", Ma.variant = "Outline", Ma.keywords = "Add, More, Create, New, Navigation", Ma.MD = pa, Ma.LG = ja, Ma.XL = ma;
      const Ra = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2.25 8A.75.75 0 0 1 3 7.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ba = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        La = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4.75 16c0-.69.56-1.25 1.25-1.25h20a1.25 1.25 0 1 1 0 2.5H6c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        za = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ra, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ba, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(La, {
              ...a,
              ref: r
            })]
          })
        }));
      za.displayName = "Minus", za.category = "Selection", za.variant = "Outline", za.keywords = "Remove, Less, Delete, Navigation, Minimize", za.MD = Ra, za.LG = ba, za.XL = La;
      const ya = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ca = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Aa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.116 7.116a1.25 1.25 0 0 1 1.768 0L16 14.232l7.116-7.116a1.25 1.25 0 0 1 1.768 1.768L17.768 16l7.116 7.116a1.25 1.25 0 0 1-1.768 1.768L16 17.768l-7.116 7.116a1.25 1.25 0 0 1-1.768-1.768L14.232 16 7.116 8.884a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Da = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ya, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Ca, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Aa, {
              ...a,
              ref: r
            })]
          })
        }));
      Da.displayName = "X", Da.category = "Selection", Da.variant = "Outline", Da.keywords = "Close, Error, Remove, Clean, Erase, Delete, Navigation, Cross, Times, Cancel", Da.MD = ya, Da.LG = Ca, Da.XL = Aa;
      const Ia = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M14.245 4.041a.75.75 0 0 1 0 1.06l-8 8a.75.75 0 0 1-1.061 0L1.755 9.674a.75.75 0 1 1 1.061-1.06l2.898 2.898 7.47-7.47a.75.75 0 0 1 1.06 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ba = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M19.684 6.27a1 1 0 0 1 .046 1.414l-10.313 11a1 1 0 0 1-1.459 0l-4.688-5a1 1 0 1 1 1.46-1.368l3.957 4.222L18.27 6.316a1 1 0 0 1 1.414-.046",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M26.876 10.108c.492.484.5 1.275.016 1.768l-13.75 14a1.25 1.25 0 0 1-1.784 0l-6.25-6.364a1.25 1.25 0 1 1 1.784-1.751l5.358 5.455 12.858-13.092a1.25 1.25 0 0 1 1.768-.016",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ha = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ia, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Ba, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Sa, {
              ...a,
              ref: r
            })]
          })
        }));
      Ha.displayName = "Check", Ha.category = "Selection", Ha.variant = "Outline", Ha.keywords = "Done, Ready, Yes, Available, Completed, Success, Accept, Tick", Ha.MD = Ia, Ha.LG = Ba, Ha.XL = Sa;
      const Va = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m4 0A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Na = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m5 0a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ga = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m6 0c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ka = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Va, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Na, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Ga, {
              ...a,
              ref: r
            })]
          })
        }));
      ka.displayName = "MinusCircle", ka.category = "Selection", ka.variant = "Outline", ka.keywords = "Minus, No, Less, n/a, Remove, Delete", ka.MD = Va, ka.LG = Na, ka.XL = Ga;
      const Xa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12.5 3.5h-9v9h9zM3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Oa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M19 5H5v14h14zM5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M24 6.5H8A1.5 1.5 0 0 0 6.5 8v16A1.5 1.5 0 0 0 8 25.5h16a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 24 6.5M8 4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pa = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Xa, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Oa, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Fa, {
              ...a,
              ref: r
            })]
          })
        }));
      Pa.displayName = "Square", Pa.category = "Selection", Pa.variant = "Outline", Pa.keywords = "Checkbox, Shape, Empty, Selection, Unchecked, Unselected, Maximize", Pa.MD = Xa, Pa.LG = Oa, Pa.XL = Fa;
      const _a = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M1.25 3.5A2.25 2.25 0 0 1 3.5 1.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75zm8.03 2.72a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06L7 8.94l3.47-3.47a.75.75 0 0 1 1.06 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm11.664 4.253a1 1 0 0 1 .083 1.411l-5.333 6a1 1 0 0 1-1.495 0l-2.666-3a1 1 0 0 1 1.494-1.328l1.92 2.159 4.586-5.16a1 1 0 0 1 1.411-.082",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ua = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2.75 8C2.75 5.1 5.1 2.75 8 2.75h16c2.9 0 5.25 2.35 5.25 5.25v16c0 2.9-2.35 5.25-5.25 5.25H8A5.25 5.25 0 0 1 2.75 24zM8 5.25A2.75 2.75 0 0 0 5.25 8v16A2.75 2.75 0 0 0 8 26.75h16A2.75 2.75 0 0 0 26.75 24V8A2.75 2.75 0 0 0 24 5.25zm13.8 5.79c.53.442.602 1.23.16 1.76l-6.666 8a1.25 1.25 0 0 1-1.921 0l-3.333-4a1.25 1.25 0 0 1 1.92-1.6l2.373 2.847L20.04 11.2a1.25 1.25 0 0 1 1.76-.16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ea = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(_a, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(qa, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Ua, {
              ...a,
              ref: r
            })]
          })
        }));
      Ea.displayName = "CheckSquare", Ea.category = "Selection", Ea.variant = "Outline", Ea.keywords = "Checkbox, Selection, Checked, Completed, Check Mark, To do, Done, Approved, Selected", Ea.MD = _a, Ea.LG = qa, Ea.XL = Ua;
      const Ta = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M1.25 3.5A2.25 2.25 0 0 1 3.5 1.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75zM5.25 8A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm2 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $a = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2.75 8C2.75 5.1 5.1 2.75 8 2.75h16c2.9 0 5.25 2.35 5.25 5.25v16c0 2.9-2.35 5.25-5.25 5.25H8A5.25 5.25 0 0 1 2.75 24zM8 5.25A2.75 2.75 0 0 0 5.25 8v16A2.75 2.75 0 0 0 8 26.75h16A2.75 2.75 0 0 0 26.75 24V8A2.75 2.75 0 0 0 24 5.25zM8.75 16c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Za = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ta, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Wa, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)($a, {
              ...a,
              ref: r
            })]
          })
        }));
      Za.displayName = "MinusSquare", Za.category = "Selection", Za.variant = "Outline", Za.keywords = "Checkbox, Partial, Selection, Intermediate, Remove, Minus, Delete, Indeterminate", Za.MD = Ta, Za.LG = Wa, Za.XL = $a;
      const Qa = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M10.162 13.153a.75.75 0 0 1-.735.597 8 8 0 0 1-1.223-.139 5 5 0 0 1-.707-.178c-.183-.062-.487-.179-.698-.407a2.47 2.47 0 0 1-.646-1.676V9.9H4.032a1.7 1.7 0 0 1-.76-.172 1.8 1.8 0 0 1-.607-.486 1.9 1.9 0 0 1-.35-.69 1.9 1.9 0 0 1-.046-.771l.7-4.95c.06-.426.262-.826.582-1.121a1.72 1.72 0 0 1 1.182-.46h7.25c.49 0 .944.21 1.27.563.324.351.497.815.497 1.287v3.85c0 .472-.173.936-.497 1.287a1.73 1.73 0 0 1-1.27.563h-.914zM11.21 7.3h.774a.23.23 0 0 0 .168-.081.4.4 0 0 0 .098-.269V3.1a.4.4 0 0 0-.098-.269.23.23 0 0 0-.168-.08h-.774zm-1.5-4.55H4.72a.22.22 0 0 0-.153.064.38.38 0 0 0-.112.225l-.7 4.95a.4.4 0 0 0 .01.174.4.4 0 0 0 .07.14q.045.053.093.076a.2.2 0 0 0 .09.021h2.885a.75.75 0 0 1 .75.75v2.2c0 .237.081.457.214.619q.026.013.112.043c.13.045.306.088.505.125q.178.035.345.057l.88-4.221z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ya = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M14.459 20.285A1 1 0 0 1 13.5 21c-.36 0-.75-.128-1.034-.237a10 10 0 0 1-.999-.457c-.616-.321-1.324-.754-1.668-1.093-.446-.44-.622-1.023-.704-1.46a7 7 0 0 1-.092-1.332l.16-2.021H5.649a2.65 2.65 0 0 1-2-.888 2.6 2.6 0 0 1-.619-2.104l1.122-7.2c.096-.624.418-1.19.901-1.594A2.64 2.64 0 0 1 6.771 2h11.603c.692 0 1.358.27 1.851.756.494.486.775 1.15.775 1.844v5.6c0 .695-.28 1.358-.775 1.844a2.64 2.64 0 0 1-1.85.756h-1.693zm2.477-9.485h1.438a.64.64 0 0 0 .448-.181A.59.59 0 0 0 19 10.2V4.6a.59.59 0 0 0-.178-.419.64.64 0 0 0-.448-.18h-1.438zm-2-6.8H6.755a.64.64 0 0 0-.419.148.6.6 0 0 0-.207.364l-1.122 7.2a.58.58 0 0 0 .141.476q.09.1.216.157a.65.65 0 0 0 .27.055h4.611a1 1 0 0 1 .997 1.079L11 16.539c.001.292.013.59.062.848q.038.198.086.305c.03.072.054.095.053.095.113.111.582.428 1.19.745q.226.117.438.215l2.106-7.092z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ka = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M19.26 28.361a1.25 1.25 0 0 1-1.198.889c-.467 0-.98-.165-1.37-.311-.437-.165-.911-.383-1.36-.613-.846-.434-1.804-1.012-2.264-1.457-.59-.571-.827-1.338-.938-1.924-.116-.613-.13-1.233-.13-1.68q0-.05.004-.1l.229-2.844H7.267a3.55 3.55 0 0 1-1.445-.294c-.458-.199-.87-.493-1.203-.865a3.4 3.4 0 0 1-.728-1.293 3.35 3.35 0 0 1-.1-1.481v-.002l1.542-9.74c.13-.825.56-1.567 1.203-2.096a3.53 3.53 0 0 1 2.273-.8h15.956c.911 0 1.793.35 2.45.986a3.38 3.38 0 0 1 1.035 2.429v7.576a3.38 3.38 0 0 1-1.035 2.429 3.52 3.52 0 0 1-2.45.986H22.34zm3.401-12.705h2.104c.274 0 .529-.106.71-.282a.88.88 0 0 0 .275-.633V7.165a.88.88 0 0 0-.274-.633 1.02 1.02 0 0 0-.711-.282H22.66zm-2.5-9.406H8.79a1.03 1.03 0 0 0-.665.23.9.9 0 0 0-.322.554l-1.543 9.74a.85.85 0 0 0 .026.377c.037.122.102.239.193.34a1 1 0 0 0 .34.244c.133.058.28.087.428.086h6.34a1.25 1.25 0 0 1 1.246 1.35l-.333 4.143c.001.398.018.808.086 1.166.076.398.182.555.221.593.169.163.829.6 1.665 1.028.26.133.514.254.75.356l2.94-9.736z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ja = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Qa, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Ya, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Ka, {
              ...a,
              ref: r
            })]
          })
        }));
      Ja.displayName = "ThumbsDown", Ja.category = "Social", Ja.variant = "Outline", Ja.keywords = "Dislike, Rate, Social, Review, Feedback, Negative", Ja.MD = Qa, Ja.LG = Ya, Ja.XL = Ka;
      const eo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M5.838 1.847a.75.75 0 0 1 .735-.597c.263 0 .76.051 1.223.139.234.044.484.103.706.178.184.062.488.179.7.407.418.454.645 1.058.645 1.676V5.1h2.121a1.7 1.7 0 0 1 .76.172c.237.115.444.283.607.486.164.204.282.44.35.69.066.252.082.514.046.771l-.7 4.95c-.06.426-.262.826-.582 1.121a1.72 1.72 0 0 1-1.182.46h-7.25c-.49 0-.945-.21-1.27-.563A1.9 1.9 0 0 1 2.25 11.9V8.05c0-.472.173-.936.497-1.287a1.73 1.73 0 0 1 1.27-.563h.914zM4.79 7.7h-.774a.23.23 0 0 0-.167.081.4.4 0 0 0-.099.269v3.85c0 .111.041.207.099.269a.23.23 0 0 0 .167.08h.774zm1.5 4.55h4.99a.22.22 0 0 0 .153-.064.38.38 0 0 0 .112-.225l.7-4.95a.4.4 0 0 0-.01-.174.4.4 0 0 0-.07-.14.3.3 0 0 0-.093-.076.2.2 0 0 0-.09-.021H9.097a.75.75 0 0 1-.75-.75v-2.2a.98.98 0 0 0-.214-.619 1 1 0 0 0-.112-.043 4 4 0 0 0-.505-.126 7 7 0 0 0-.345-.056l-.88 4.221z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        lo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M9.541 2.715A1 1 0 0 1 10.5 2c.36 0 .75.128 1.034.237.322.123.67.286.999.457.616.321 1.324.754 1.668 1.093.446.44.622 1.023.704 1.46a7 7 0 0 1 .092 1.332l-.16 2.021h3.514a2.65 2.65 0 0 1 2 .888 2.6 2.6 0 0 1 .619 2.104l-1.122 7.2a2.6 2.6 0 0 1-.901 1.594 2.64 2.64 0 0 1-1.718.614H5.626a2.64 2.64 0 0 1-1.851-.756A2.59 2.59 0 0 1 3 18.4v-5.6c0-.695.28-1.358.775-1.844a2.64 2.64 0 0 1 1.85-.756h1.693zM7.064 12.2H5.626a.64.64 0 0 0-.448.181A.59.59 0 0 0 5 12.8v5.6c0 .154.062.305.178.419a.64.64 0 0 0 .448.18h1.438zm2 6.8h8.181a.64.64 0 0 0 .419-.148.6.6 0 0 0 .207-.364l1.122-7.2a.58.58 0 0 0-.141-.476.649.649 0 0 0-.485-.212h-4.612a1 1 0 0 1-.997-1.079L13 6.461c-.001-.293-.013-.59-.062-.848a1.5 1.5 0 0 0-.086-.305c-.03-.072-.054-.095-.053-.095-.113-.111-.582-.428-1.19-.745a10 10 0 0 0-.438-.215l-2.107 7.092z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ro = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12.74 3.639a1.25 1.25 0 0 1 1.197-.889c.468 0 .982.165 1.372.312.436.164.91.382 1.359.612.846.434 1.804 1.012 2.264 1.457.59.571.827 1.338.938 1.924.116.613.13 1.233.13 1.68q0 .05-.004.1l-.229 2.844h4.966c.497-.004.99.096 1.445.294.458.199.87.493 1.203.865.335.373.584.813.728 1.293s.178.986.1 1.481v.002l-1.542 9.74a3.4 3.4 0 0 1-1.203 2.096 3.53 3.53 0 0 1-2.273.8H7.235c-.911 0-1.793-.35-2.45-.986a3.38 3.38 0 0 1-1.035-2.429V17.26a3.38 3.38 0 0 1 1.035-2.429 3.52 3.52 0 0 1 2.45-.986H9.66zM9.34 16.344H7.235c-.274 0-.529.106-.71.282a.88.88 0 0 0-.275.633v7.576c0 .23.094.458.274.633.182.176.437.282.711.282H9.34zm2.5 9.406H23.21a1.03 1.03 0 0 0 .665-.23.9.9 0 0 0 .322-.553l1.543-9.742a.85.85 0 0 0-.026-.376.9.9 0 0 0-.193-.34 1 1 0 0 0-.34-.244 1.05 1.05 0 0 0-.428-.086h-6.34a1.25 1.25 0 0 1-1.246-1.35l.333-4.143a6.6 6.6 0 0 0-.086-1.166c-.076-.398-.182-.555-.221-.593-.169-.163-.829-.6-1.665-1.028a13 13 0 0 0-.75-.356l-2.94 9.736z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        to = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(eo, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(lo, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ro, {
              ...a,
              ref: r
            })]
          })
        }));
      to.displayName = "ThumbsUp", to.category = "Social", to.variant = "Outline", to.keywords = "Like, Rate, Social, Review, Feedback, Positive", to.MD = eo, to.LG = lo, to.XL = ro;
      const ao = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M5.124 2.396A4.16 4.16 0 0 1 8 1.25c1.073 0 2.109.409 2.877 1.146A3.89 3.89 0 0 1 12.083 5.2c0 1.75.39 2.82.736 3.43.174.306.342.504.454.618a1.4 1.4 0 0 0 .143.128A.75.75 0 0 1 13 10.75H3a.75.75 0 0 1-.397-1.389 2 2 0 0 0 .124-.113c.112-.114.28-.312.454-.619.346-.608.736-1.678.736-3.429 0-1.058.438-2.066 1.207-2.804M4.552 9.25h6.896c-.46-.86-.865-2.158-.865-4.05 0-.64-.264-1.26-.745-1.722A2.66 2.66 0 0 0 8 2.75c-.695 0-1.355.265-1.838.728A2.39 2.39 0 0 0 5.417 5.2c0 1.892-.404 3.19-.865 4.05m1.031 2.126a.75.75 0 0 1 1.04.207c.126.188.315.357.558.478.244.122.527.189.82.189s.574-.067.818-.189c.243-.121.432-.29.557-.478a.75.75 0 0 1 1.248.834c-.281.42-.676.757-1.135.986-.458.23-.971.347-1.489.347s-1.03-.118-1.49-.347a2.94 2.94 0 0 1-1.134-.986.75.75 0 0 1 .207-1.04",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        oo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.69 3.755C8.91 2.625 10.55 2 12.245 2c1.696 0 3.336.624 4.555 1.755 1.222 1.133 1.923 2.685 1.923 4.32 0 2.843.655 4.6 1.254 5.617.3.511.594.847.798 1.047a3 3 0 0 0 .277.237l.002.002a.943.943 0 0 1-.507 1.739H3.943a.943.943 0 0 1-.498-1.744h-.002l-.003.003-.004.003q-.002 0 0 0l.003-.002.047-.035a3 3 0 0 0 .23-.203c.204-.2.497-.536.798-1.048.598-1.017 1.253-2.773 1.253-5.616 0-1.635.702-3.187 1.923-4.32M6.03 14.83h12.43l-.11-.182c-.785-1.335-1.513-3.427-1.513-6.573 0-1.086-.465-2.145-1.32-2.937-.856-.794-2.032-1.251-3.272-1.251s-2.415.457-3.272 1.251c-.854.792-1.319 1.85-1.319 2.937 0 3.146-.728 5.238-1.514 6.573zm2.813 3.1a.943.943 0 0 1 1.245.479c.25.562.597.998.982 1.286.38.286.785.418 1.175.418s.795-.132 1.176-.418c.385-.288.73-.724.982-1.287a.943.943 0 1 1 1.723.768c-.363.815-.897 1.522-1.573 2.029-.678.509-1.475.795-2.308.795s-1.629-.286-2.308-.795c-.675-.507-1.21-1.214-1.572-2.029a.943.943 0 0 1 .478-1.245",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        io = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M9.965 5.075C11.58 3.577 13.753 2.75 16 2.75s4.42.827 6.035 2.325c1.62 1.501 2.548 3.558 2.548 5.725 0 3.766.868 6.093 1.661 7.441a6.7 6.7 0 0 0 1.058 1.388 4 4 0 0 0 .367.315l.003.002A1.25 1.25 0 0 1 27 22.25H5a1.25 1.25 0 0 1-.66-2.311l-.003.001-.005.003-.005.004.001-.001.003-.002q.014-.009.062-.046c.064-.05.17-.137.306-.27.27-.264.658-.709 1.057-1.387.793-1.348 1.66-3.675 1.66-7.441 0-2.167.93-4.224 2.549-5.725m-2.2 14.675h16.47l-.146-.241c-1.04-1.769-2.006-4.542-2.006-8.709 0-1.44-.616-2.842-1.747-3.892C19.2 5.856 17.643 5.25 16 5.25c-1.642 0-3.2.606-4.335 1.658-1.132 1.05-1.748 2.452-1.748 3.892 0 4.167-.966 6.94-2.006 8.709zm3.726 4.108a1.25 1.25 0 0 1 1.65.633c.333.746.792 1.323 1.301 1.705.505.379 1.041.554 1.558.554s1.053-.175 1.558-.554c.51-.382.968-.96 1.3-1.705a1.25 1.25 0 1 1 2.284 1.018c-.481 1.08-1.19 2.016-2.084 2.687-.9.675-1.954 1.054-3.058 1.054s-2.159-.38-3.058-1.054c-.895-.67-1.603-1.608-2.084-2.687a1.25 1.25 0 0 1 .633-1.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        so = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ao, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(oo, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(io, {
              ...a,
              ref: r
            })]
          })
        }));
      so.displayName = "Bell", so.category = "Social", so.variant = "Outline", so.keywords = "Notification, Message, Ring, Ding, Attention, Reminder, Alarm", so.MD = ao, so.LG = oo, so.XL = io;
      const no = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M5.5 6V4.5H7V6zM5.5 8.5V7H7v1.5zM9 4.5V6h1.5V4.5zM9 8.5V7h1.5v1.5z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M4.5 14A1.5 1.5 0 0 1 3 12.5v-9A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 3.5v9a1.5 1.5 0 0 1-1.5 1.5zm0-10.5h7v9H9.55v-2.4a.65.65 0 0 0-.65-.65H7.1a.65.65 0 0 0-.65.65v2.4H4.5zm3.95 9h-.9v-1.95h.9z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        co = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M8.5 6v2h2V6zM8.5 10v2h2v-2zM13.5 6v2h2V6zM13.5 10v2h2v-2z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2 0h10v14h-2.35v-4.5a.95.95 0 0 0-.95-.95h-3.4a.95.95 0 0 0-.95.95V19H7zm4.05 14h1.9v-3.75h-1.9z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ho = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M11.5 8v2.667H14V8zM11.5 13.667v2.666H14v-2.666zM18 8v2.667h2.5V8zM18 13.667v2.666h2.5v-2.666z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M7 6.5A2.5 2.5 0 0 1 9.5 4h13A2.5 2.5 0 0 1 25 6.5v19a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 7 25.5zm2.5 0h13v19h-2.8v-6.4a1.2 1.2 0 0 0-1.2-1.2h-5a1.2 1.2 0 0 0-1.2 1.2v6.4H9.5zm5 19h3v-5.4h-3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        fo = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(no, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(co, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ho, {
              ...a,
              ref: r
            })]
          })
        }));
      fo.displayName = "Property", fo.category = "GTA Online", fo.variant = "Outline", fo.keywords = "Building, House, City, GTAO, Structure", fo.MD = no, fo.LG = co, fo.XL = ho;
      const vo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4.205 4.3a.35.35 0 0 0-.32.205l-.554 1.22a.35.35 0 0 0 .095.414l.263.218a1.65 1.65 0 0 1 .517 1.765l-.751 2.377a.35.35 0 0 0 .334.455h1.096a.35.35 0 0 0 .332-.239L6.352 7.31a1.65 1.65 0 0 1 1.566-1.128h3.506a.35.35 0 0 0 .35-.35V4.65a.35.35 0 0 0-.35-.35zm-1.503-.333A1.65 1.65 0 0 1 4.205 3h7.22c.91 0 1.65.739 1.65 1.65v1.182a1.65 1.65 0 0 1-1.65 1.65h-1.239a3.06 3.06 0 0 1-.705 1.514c-.566.639-1.434 1.013-2.63.931l-.4 1.2a1.65 1.65 0 0 1-1.566 1.127H3.79a1.65 1.65 0 0 1-1.574-2.146l.751-2.378a.35.35 0 0 0-.11-.374l-.262-.219a1.65 1.65 0 0 1-.446-1.95zm4.578 4.67c.647-.023 1.013-.26 1.23-.504.167-.189.278-.42.345-.651h-.937a.35.35 0 0 0-.332.24z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4.416 6.172A2 2 0 0 1 6.236 5h12.538a2 2 0 0 1 2 2v3.09a2 2 0 0 1-2 2H16.16c-.133.799-.463 1.692-1.124 2.437-.902 1.016-2.288 1.614-4.208 1.474l-.786 2.359a2 2 0 0 1-1.898 1.367H5.14a2 2 0 0 1-1.907-2.602L4.8 12.157l-1.08-.9a2 2 0 0 1-.54-2.365zm7.072 7.85c1.08-.026 1.692-.416 2.052-.822.286-.322.47-.717.576-1.11H12.13zM18.774 7H6.236L5 9.72l1.08.9a2 2 0 0 1 .628 2.14l-1.57 4.967h3.006l2.09-6.268a2 2 0 0 1 1.897-1.368h6.643z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m8.33 8.5-1.773 3.9 1.752 1.46a2.25 2.25 0 0 1 .705 2.406L6.73 23.5h4.393l2.988-8.961A2.25 2.25 0 0 1 16.244 13h9.53V8.5zM6.12 7.319A2.25 2.25 0 0 1 8.168 6h17.856a2.25 2.25 0 0 1 2.25 2.25v5a2.25 2.25 0 0 1-2.25 2.25h-4.077c-.166 1.104-.611 2.355-1.531 3.392-1.225 1.38-3.122 2.194-5.78 1.977l-1.198 3.593A2.25 2.25 0 0 1 11.303 26H6.39a2.25 2.25 0 0 1-2.146-2.927l2.337-7.4-1.77-1.475a2.25 2.25 0 0 1-.608-2.66zm9.337 11.087c1.625.004 2.546-.562 3.089-1.173.446-.503.717-1.127.858-1.733h-2.979z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        uo = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(vo, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(wo, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(xo, {
              ...a,
              ref: r
            })]
          })
        }));
      uo.displayName = "Weapon", uo.category = "GTA Online", uo.variant = "Outline", uo.keywords = "Gun, Pistol, GTAO, Fire, Shoot", uo.MD = vo, uo.LG = wo, uo.XL = xo;
      const go = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m4.483 5.317-.136.488h7.307l-.136-.488-.007-.014a2.227 2.227 0 0 0-.373-.56 1.78 1.78 0 0 0-1.366-.593H6.229a1.78 1.78 0 0 0-1.367.593 2.2 2.2 0 0 0-.38.574m7.042.016v.003zm1.219-.45.016.05.377 1.352.207.767.017.046.066.184c.05.143.115.336.16.497.027.098.034.216.038.27v.005q.008.125.013.295c.006.226.01.517.011.828.003.624-.002 1.346-.009 1.833a91 91 0 0 0-.002 1.683.95.95 0 0 1-.95.957H11.3a.95.95 0 0 1-.95-.95v-1.05h-4.7v1.05a.95.95 0 0 1-.95.95H3.313a.95.95 0 0 1-.95-.957c.002-.411.005-1.15-.003-1.683-.007-.487-.012-1.209-.009-1.833.002-.311.005-.602.012-.828q.005-.17.012-.295v-.005c.004-.054.011-.173.038-.27a9 9 0 0 1 .226-.681l.017-.046.208-.772.376-1.348.016-.05.001-.002.001-.003.004-.008.009-.024.03-.072a3.527 3.527 0 0 1 .603-.91A3.08 3.08 0 0 1 6.23 2.85h3.543c1.108 0 1.862.511 2.324 1.014a3.5 3.5 0 0 1 .633.981l.01.024.003.008.001.003v.002zm-8.86 2.595v.003l-.006.013-.018.05-.06.168a8 8 0 0 0-.124.38l-.004.044q-.005.09-.01.25c-.006.211-.01.49-.011.798-.002.377 0 .791.002 1.166h8.694c.003-.375.004-.79.002-1.166a36 36 0 0 0-.01-.798 8 8 0 0 0-.014-.293 8 8 0 0 0-.185-.55l-.018-.049-.005-.012-.001-.003L12 7.478m.335 4.172h-.685v.7h.686zm-8.67 0v.7h.685v-.7zM4.35 8.8A.65.65 0 0 1 5 8.15h.1a.65.65 0 0 1 0 1.3H5a.65.65 0 0 1-.65-.65m6 0a.65.65 0 0 1 .65-.65h.1a.65.65 0 1 1 0 1.3H11a.65.65 0 0 1-.65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        po = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M7 12.1a.9.9 0 1 0 0 1.8h.2a.9.9 0 0 0 0-1.8zM16.8 12.1a.9.9 0 1 0 0 1.8h.2a.9.9 0 0 0 0-1.8z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "m19.481 7.33-.022-.069v-.002l-.001-.002-.002-.004-.005-.013a2 2 0 0 0-.061-.146 5.503 5.503 0 0 0-.94-1.417A4.79 4.79 0 0 0 14.835 4.1h-5.67A4.79 4.79 0 0 0 5.55 5.677a5.5 5.5 0 0 0-.94 1.417l-.06.146-.006.013-.001.004-.001.002v.002l-.023.069-.601 2.155-.335 1.24-.029.08c-.027.073-.064.175-.105.292-.08.23-.182.534-.253.787a2 2 0 0 0-.055.35c-.009.105-.016.229-.02.363-.011.27-.017.612-.02.986-.004.75.004 1.655.015 2.43.013.875.008 2.242.003 2.978A1.4 1.4 0 0 0 4.52 20.4H6.6A1.4 1.4 0 0 0 8 19v-2.1h8V19a1.4 1.4 0 0 0 1.4 1.4h2.08a1.4 1.4 0 0 0 1.4-1.409c-.004-.736-.009-2.103.004-2.978.012-.775.02-1.68.015-2.43a33 33 0 0 0-.019-.986 8 8 0 0 0-.02-.363 2 2 0 0 0-.056-.35c-.07-.253-.173-.558-.253-.787l-.105-.292-.029-.08-.333-1.232zM5.971 8.827l.269-.966.014-.033a3.703 3.703 0 0 1 .622-.933c.462-.504 1.18-.995 2.29-.995h5.669c1.108 0 1.827.49 2.29.995a3.7 3.7 0 0 1 .636.966l.269.966zm-.69 2.495-.007.02-.029.08-.097.27c-.073.21-.154.452-.208.641l-.005.052a7 7 0 0 0-.016.282c-.01.242-.015.561-.017.928-.003.461-.002.987.003 1.505h14.19c.005-.518.007-1.044.004-1.505a31 31 0 0 0-.018-.928 7 7 0 0 0-.02-.334c-.054-.189-.135-.43-.209-.64l-.097-.272-.029-.079-.008-.02-.125-.452-.04-.144-.027-.099H5.474l-.164.607zm12.52 5.578h1.276c-.002.584 0 1.209.002 1.7H17.8zM4.92 18.6c.003-.491.004-1.116.002-1.7H6.2v1.7z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        jo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m8.091 9.937-.366 1.313h16.55l-.366-1.313-.02-.044a5.08 5.08 0 0 0-.852-1.28c-.634-.69-1.62-1.363-3.14-1.363h-7.794c-1.52 0-2.506.673-3.14 1.363a5 5 0 0 0-.852 1.28zM26.266 9.1l.002.006q.016.047.03.095l.83 2.974.457 1.695.04.108c.037.1.088.242.144.403.11.314.252.734.349 1.082.048.173.066.363.076.475.012.142.021.308.028.488.015.36.022.815.026 1.314.007 1-.004 2.214-.02 3.28-.016 1.05-.012 2.501-.007 3.466a2.253 2.253 0 0 1-2.252 2.265h-2.024a2.25 2.25 0 0 1-2.25-2.25v-2.25h-11.39v2.25a2.25 2.25 0 0 1-2.25 2.25H6.031a2.253 2.253 0 0 1-2.252-2.265c.005-.965.009-2.416-.007-3.466-.016-1.066-.027-2.28-.02-3.28.003-.5.011-.954.026-1.314.007-.18.016-.346.029-.488.01-.112.028-.302.076-.475.096-.349.238-.767.348-1.082a34 34 0 0 1 .184-.511l.46-1.705.827-2.964q.014-.048.03-.095v-.002h.001l.001-.004.003-.006.006-.017a3 3 0 0 1 .085-.202 7.579 7.579 0 0 1 1.294-1.952c.99-1.077 2.603-2.172 4.98-2.172h7.796c2.377 0 3.99 1.095 4.98 2.172a7.6 7.6 0 0 1 1.294 1.952 5 5 0 0 1 .085.202l.006.017zM7.04 13.75l-.266.947-.01.028a23 23 0 0 0-.174.481c-.1.289-.212.622-.286.881l-.007.066a9 9 0 0 0-.021.372c-.013.32-.02.743-.024 1.23-.004.608-.002 1.302.005 1.995h19.486c.007-.693.01-1.387.005-1.994-.003-.488-.01-.912-.024-1.231a9 9 0 0 0-.028-.438c-.074-.26-.185-.592-.286-.88-.052-.15-.1-.28-.134-.373l-.027-.075-.012-.034-.01-.028-.004-.009-.278-.938m.773 8.5h-1.523v2h1.525c-.003-.584-.005-1.303-.002-2m-19.436 0c.003.697 0 1.416-.002 2h1.525v-2zM7.75 17c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5H9c-.69 0-1.25-.56-1.25-1.25m13.8 0c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5h-.2c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mo = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(go, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(po, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(jo, {
              ...a,
              ref: r
            })]
          })
        }));
      mo.displayName = "Car", mo.category = "GTA Online", mo.variant = "Outline", mo.keywords = "Vehicle, Automobile, GTAO, Transport", mo.MD = go, mo.LG = po, mo.XL = jo;
      const Mo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6 7.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ro = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13m-6-14.25a1.25 1.25 0 1 0 0 2.5h12a1.25 1.25 0 1 0 0-2.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Lo = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Mo, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Ro, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(bo, {
              ...a,
              ref: r
            })]
          })
        }));
      Lo.displayName = "MinusCircleSolid", Lo.category = "Uncategorized", Lo.variant = "Solid", Lo.keywords = "Minus, No, Less, n/a, Remove, Delete", Lo.MD = Mo, Lo.LG = Ro, Lo.XL = bo;
      const zo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M9.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            })
          })
        }))),
        yo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
            })
          })
        }))),
        Co = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M19 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M19 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0M19 25a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            })
          })
        }))),
        Ao = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(zo, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(yo, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Co, {
              ...a,
              ref: r
            })]
          })
        }));
      Ao.displayName = "AuxMenuSolid", Ao.category = "Uncategorized", Ao.variant = "Solid", Ao.keywords = "Navigation, Side nav, Dots, Item, More", Ao.MD = zo, Ao.LG = yo, Ao.XL = Co;
      const Do = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-3.47-1.47a.75.75 0 0 0-1.06-1.06L7 8.94 5.53 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Io = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.253-2.336a1 1 0 0 0-1.494-1.328l-4.586 5.159-1.92-2.16a1 1 0 0 0-1.494 1.33l2.666 3a1 1 0 0 0 1.495 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13m-7.04-3.2a1.25 1.25 0 0 0-1.92-1.6l-5.707 6.847L11.96 15.2a1.25 1.25 0 0 0-1.92 1.6l3.333 4a1.25 1.25 0 0 0 1.92 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        So = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Do, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Io, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Bo, {
              ...a,
              ref: r
            })]
          })
        }));
      So.displayName = "CheckCircleSolid", So.category = "Uncategorized", So.variant = "Solid", So.keywords = "Done, Ready, Yes, Available, Completed, Circle, Approve, Success", So.MD = Do, So.LG = Io, So.XL = Bo;
      const Ho = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m3.931 2.303.926.585a6 6 0 0 1 1.751-.726l.241-1.068a7 7 0 0 1 2.302 0l.241 1.068c.628.15 1.217.397 1.751.726l.926-.585c.628.45 1.178 1 1.627 1.628l-.584.926c.329.534.577 1.123.726 1.751l1.068.241a7 7 0 0 1 0 2.302l-1.068.241a6 6 0 0 1-.726 1.751l.585.926c-.45.628-1 1.178-1.628 1.627l-.926-.584a6 6 0 0 1-1.751.726l-.241 1.068a7 7 0 0 1-2.302 0l-.241-1.068a6 6 0 0 1-1.751-.726l-.926.585a7 7 0 0 1-1.628-1.628l.585-.926a6 6 0 0 1-.726-1.751l-1.068-.241a7 7 0 0 1 0-2.302l1.068-.241c.15-.628.397-1.217.726-1.751l-.585-.926a7 7 0 0 1 1.628-1.628M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m6.187 3.862 1.323.835a8.5 8.5 0 0 1 2.502-1.037l.344-1.526a10 10 0 0 1 3.288 0l.345 1.526a8.5 8.5 0 0 1 2.501 1.037l1.323-.835a10 10 0 0 1 2.325 2.325l-.835 1.323a8.5 8.5 0 0 1 1.037 2.502l1.526.344a10 10 0 0 1 0 3.288l-1.526.345a8.5 8.5 0 0 1-1.037 2.501l.835 1.323a10 10 0 0 1-2.325 2.325l-1.323-.835a8.5 8.5 0 0 1-2.501 1.037l-.345 1.526a10 10 0 0 1-3.288 0l-.344-1.526a8.5 8.5 0 0 1-2.502-1.037l-1.323.835a10 10 0 0 1-2.325-2.325l.835-1.323A8.5 8.5 0 0 1 3.66 13.99l-1.526-.345a10 10 0 0 1 0-3.288l1.526-.344A8.5 8.5 0 0 1 4.697 7.51l-.835-1.323a10 10 0 0 1 2.325-2.325M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        No = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m8.443 5.42 1.72 1.087a11 11 0 0 1 3.252-1.348l.448-1.984a13.1 13.1 0 0 1 4.274 0l.448 1.984c1.166.276 2.26.736 3.252 1.348l1.72-1.086a13.1 13.1 0 0 1 3.022 3.022l-1.086 1.72a11.1 11.1 0 0 1 1.349 3.252l1.983.448a13.1 13.1 0 0 1 0 4.274l-1.983.448a11.1 11.1 0 0 1-1.349 3.252l1.086 1.72a13.1 13.1 0 0 1-3.022 3.022l-1.72-1.086a11.1 11.1 0 0 1-3.252 1.349l-.448 1.983a13.1 13.1 0 0 1-4.274 0l-.448-1.983a11.1 11.1 0 0 1-3.252-1.349l-1.72 1.086a13.1 13.1 0 0 1-3.022-3.022l1.086-1.72a11 11 0 0 1-1.348-3.252l-1.984-.448a13.1 13.1 0 0 1 0-4.274l1.984-.448c.276-1.166.736-2.26 1.348-3.252L5.42 8.443a13.1 13.1 0 0 1 3.022-3.022M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Go = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ho, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Vo, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(No, {
              ...a,
              ref: r
            })]
          })
        }));
      Go.displayName = "GearSolid", Go.category = "Uncategorized", Go.variant = "Solid", Go.keywords = "Settings, Preferences, Options, Custom, Customize", Go.MD = Ho, Go.LG = Vo, Go.XL = No;
      const ko = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6M5 9h6c.75 0 1.5.25 2.25 1s.75 1.75.75 2.5V14H2v-1.5c0-.687.05-1.8.75-2.5S4 9 5 9"
            })
          })
        }))),
        Xo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10M7.5 14h9c1.125 0 2.25.35 3.375 1.4S21 17.85 21 18.9V21H3v-2.1c0-.962.076-2.521 1.125-3.5S6 14 7.5 14"
            })
          })
        }))),
        Oo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 4.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12M10 19h12c1.5 0 3 .45 4.5 1.8s1.5 3.15 1.5 4.5V28H4v-2.7c0-1.238.102-3.241 1.5-4.5S8 19 10 19"
            })
          })
        }))),
        Fo = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ko, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Xo, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Oo, {
              ...a,
              ref: r
            })]
          })
        }));
      Fo.displayName = "PersonSolid", Fo.category = "Uncategorized", Fo.variant = "Solid", Fo.keywords = "Profile, Avatar, Account, User, People, Human", Fo.MD = ko, Fo.LG = Xo, Fo.XL = Oo;
      const Po = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12.98 2.642a.504.504 0 0 0-.652-.613l-9.99 3.48a.502.502 0 0 0-.038.934l3.404 1.506 4.913-3.762c.094-.071.214.048.142.141l-3.71 4.8 2.123 3.623c.224.382.798.31.921-.115z"
            })
          })
        }))),
        _o = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M20.467 4.247c.197-.757-.521-1.435-1.273-1.2L3.702 7.892c-.918.287-.942 1.568-.035 1.889l5.844 2.068 7.513-5.682c.14-.106.317.07.21.21l-5.621 7.325 2.932 6.224c.399.846 1.645.731 1.88-.173z"
            })
          })
        }))),
        qo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M27.465 5.25c.203-.76-.52-1.442-1.272-1.2L4.692 10.96c-.9.29-.93 1.546-.044 1.877l8.407 3.136 9.576-7.486c.186-.145.427.095.28.28l-7.401 9.372 4.356 8.806c.408.824 1.625.704 1.861-.184z"
            })
          })
        }))),
        Uo = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Po, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(_o, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(qo, {
              ...a,
              ref: r
            })]
          })
        }));
      Uo.displayName = "PaperPlaneSolid", Uo.category = "Uncategorized", Uo.variant = "Solid", Uo.keywords = "Send, Sent, Message, Delivery, Mail", Uo.MD = Po, Uo.LG = _o, Uo.XL = qo;
      const Eo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M3 4a1 1 0 0 0-1 1c.113 0 .228.025.336.08L8 7.911l5.665-2.833A.75.75 0 0 1 14 5a1 1 0 0 0-1-1z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M14 6.589 8.343 9.417a.75.75 0 0 1-.686 0L2 6.59V11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z"
            })]
          })
        }))),
        To = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M3.25 7.031a1 1 0 0 1 .305.137L12 12.798l8.445-5.63q.146-.096.305-.137A2 2 0 0 0 19 6H5a2 2 0 0 0-1.75 1.031"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "m21 9.202-8.426 5.617a1 1 0 0 1-1.148 0L3 9.202V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
            })]
          })
        }))),
        Wo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M4.442 9.08q.162.062.308.17L16 17.688 27.25 9.25q.146-.108.308-.17A2.5 2.5 0 0 0 25.5 8h-19c-.853 0-1.607.428-2.058 1.08"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "m28 11.813-11.228 8.42a1.25 1.25 0 0 1-1.303.149 1.2 1.2 0 0 1-.241-.149L4 11.813V21.5A2.5 2.5 0 0 0 6.5 24h19a2.5 2.5 0 0 0 2.5-2.5z"
            })]
          })
        }))),
        $o = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Eo, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(To, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Wo, {
              ...a,
              ref: r
            })]
          })
        }));
      $o.displayName = "EnvelopeSolid", $o.category = "Uncategorized", $o.variant = "Solid", $o.keywords = "Mail, Email, Message, Inbox, Chat, Letter, Invitation", $o.MD = Eo, $o.LG = To, $o.XL = Wo;
      const Zo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 10h4c.5 0 1 .2 1.5.8s.5 1.4.5 2V14H6v-1.2c0-.55.034-1.44.5-2S7.333 10 8 10M12.25 6.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0M4 10h2v.059c-.38.101-.665.339-1 .741-.466.56-.5 1.45-.5 2V14H2v-1.2c0-.55.034-1.44.5-2S3.333 10 4 10M7.25 4.629a2.248 2.248 0 0 0 0 3.742 2.25 2.25 0 1 1 0-3.742"
            })
          })
        }))),
        Qo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12 15h6c.75 0 1.5.3 2.25 1.2s.75 2.1.75 3V21H9v-1.8c0-.825.05-2.16.75-3S11 15 12 15M18.5 9.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0M6 15h3v.041c-.436.073-.797.273-1.25.816C7 16.757 7 17.84 7 19.2V21H3v-1.8c0-.825.05-2.16.75-3S5 15 6 15M10.688 6.835a3.25 3.25 0 1 0 .228 5.706A5.48 5.48 0 0 1 10 9.5c0-.967.25-1.876.688-2.665"
            })
          })
        }))),
        Yo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 20h8c1 0 2 .4 3 1.6s1 2.8 1 4V28H12v-2.4c0-1.1.068-2.881 1-4s1.667-1.6 3-1.6M25 12.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0M14.5 8.169A5 5 0 0 0 12 12.5a5 5 0 0 0 2.5 4.331 5 5 0 1 1 0-8.662M8 20h4v.117c-.762.204-1.33.679-2 1.483-.932 1.119-1 2.9-1 4V28H4v-2.4c0-1.1.068-2.881 1-4S6.667 20 8 20"
            })
          })
        }))),
        Ko = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Zo, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Qo, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Yo, {
              ...a,
              ref: r
            })]
          })
        }));
      Ko.displayName = "TwoPeopleSolid", Ko.category = "Uncategorized", Ko.variant = "Solid", Ko.keywords = "People, Humans, Persons, Users, Friends, Multiple, Group", Ko.MD = Zo, Ko.LG = Qo, Ko.XL = Yo;
      const Jo = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.227 2.148a1.146 1.146 0 0 1 1.546 0l4.996 4.497a1.15 1.15 0 1 1-1.538 1.71L9.15 5.582V13a1.15 1.15 0 0 1-2.3 0V5.582L3.77 8.355a1.15 1.15 0 0 1-1.54-1.71z"
            })
          })
        }))),
        ei = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M13.02 2.9a1.5 1.5 0 0 0-2.04 0l-7 6.5a1.5 1.5 0 0 0 2.04 2.2l4.48-4.16V19a1.5 1.5 0 0 0 3 0V7.44l4.48 4.16a1.5 1.5 0 0 0 2.04-2.2z"
            })
          })
        }))),
        li = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16 3.25c.5 0 .95.21 1.27.546l9.997 10.497a1.75 1.75 0 1 1-2.534 2.414L17.75 9.375V25a1.75 1.75 0 1 1-3.5 0V9.375l-6.983 7.332a1.75 1.75 0 1 1-2.534-2.414L14.73 3.796c.32-.336.77-.546 1.27-.546"
            })
          })
        }))),
        ri = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Jo, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ei, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(li, {
              ...a,
              ref: r
            })]
          })
        }));
      ri.displayName = "ArrowUpSolid", ri.category = "Uncategorized", ri.variant = "Solid", ri.keywords = "Up, Navigation, Increase", ri.MD = Jo, ri.LG = ei, ri.XL = li;
      const ti = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 1.85c.635 0 1.15.515 1.15 1.15v7.418l3.08-2.773a1.15 1.15 0 1 1 1.54 1.71l-5 4.5a1.15 1.15 0 0 1-1.54 0l-5-4.5a1.15 1.15 0 0 1 1.54-1.71l3.08 2.773V3c0-.635.515-1.15 1.15-1.15"
            })
          })
        }))),
        ai = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M13.5 5a1.5 1.5 0 0 0-3 0v10.56L6.02 11.4a1.5 1.5 0 0 0-2.04 2.2l6.996 6.496a1.5 1.5 0 0 0 .297.217c.213.118.457.185.718.187h.019a1.5 1.5 0 0 0 1.014-.404L20.02 13.6a1.5 1.5 0 0 0-2.042-2.198L13.5 15.56z"
            })
          })
        }))),
        oi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M17.75 7a1.75 1.75 0 1 0-3.5 0v15.625l-6.983-7.332a1.75 1.75 0 1 0-2.534 2.414l9.997 10.497c.319.336.77.546 1.27.546a1.74 1.74 0 0 0 1.27-.546l9.997-10.497a1.75 1.75 0 1 0-2.534-2.414l-6.983 7.332z"
            })
          })
        }))),
        ii = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ti, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ai, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(oi, {
              ...a,
              ref: r
            })]
          })
        }));
      ii.displayName = "ArrowDownSolid", ii.category = "Uncategorized", ii.variant = "Solid", ii.keywords = "Down, Navigation, Decrease", ii.MD = ti, ii.LG = ai, ii.XL = oi;
      const si = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8.355 3.77a1.15 1.15 0 0 0-1.71-1.54L2.148 7.229a1.146 1.146 0 0 0 0 1.545l4.497 4.996a1.15 1.15 0 1 0 1.71-1.538L5.582 9.15H13a1.15 1.15 0 0 0 0-2.3H5.582z"
            })
          })
        }))),
        ni = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12.6 6.02a1.5 1.5 0 0 0-2.2-2.04l-6.496 6.996A1.5 1.5 0 0 0 3.5 12a1.5 1.5 0 0 0 .404 1.024L10.4 20.02a1.5 1.5 0 0 0 2.198-2.042L8.44 13.5H19a1.5 1.5 0 0 0 0-3H8.44z"
            })
          })
        }))),
        di = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M16.707 7.267a1.75 1.75 0 1 0-2.414-2.534L3.796 14.73c-.336.32-.546.77-.546 1.27s.21.95.546 1.27l10.497 9.997a1.75 1.75 0 1 0 2.414-2.534L9.375 17.75H25a1.75 1.75 0 1 0 0-3.5H9.375z"
            })
          })
        }))),
        ci = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(si, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ni, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(di, {
              ...a,
              ref: r
            })]
          })
        }));
      ci.displayName = "ArrowLeftSolid", ci.category = "Uncategorized", ci.variant = "Solid", ci.keywords = "Left, Navigation, Back", ci.MD = si, ci.LG = ni, ci.XL = di;
      const hi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M9.355 2.23a1.15 1.15 0 1 0-1.71 1.54l2.773 3.08H3a1.15 1.15 0 1 0 0 2.3h7.418l-2.773 3.08a1.15 1.15 0 1 0 1.71 1.54l4.497-4.997a1.145 1.145 0 0 0 0-1.545z"
            })
          })
        }))),
        fi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M13.6 3.98a1.5 1.5 0 0 0-2.2 2.04l4.16 4.48H5a1.5 1.5 0 0 0 0 3h10.56l-4.16 4.48a1.5 1.5 0 0 0 2.2 2.04l6.496-6.996A1.5 1.5 0 0 0 20.5 12a1.5 1.5 0 0 0-.4-1.02M13.6 3.98l6.496 6.996z"
            })
          })
        }))),
        vi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15.293 24.733a1.75 1.75 0 1 0 2.414 2.534l10.497-9.997c.336-.32.546-.77.546-1.27s-.21-.951-.546-1.27L17.707 4.733a1.75 1.75 0 1 0-2.414 2.534l7.332 6.983H7a1.75 1.75 0 1 0 0 3.5h15.625z"
            })
          })
        }))),
        wi = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(hi, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(fi, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(vi, {
              ...a,
              ref: r
            })]
          })
        }));
      wi.displayName = "ArrowRightSolid", wi.category = "Uncategorized", wi.variant = "Solid", wi.keywords = "Right, Navigation, Forward", wi.MD = hi, wi.LG = fi, wi.XL = vi;
      const xi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-6.267 4.22c1.777-.182 2.767-1.126 2.767-2.543 0-1.356-.918-2.034-2.158-2.313l-2.17-.484c-.561-.121-.836-.4-.836-.872 0-.617.49-.92 1.598-.92 1.116 0 1.635.298 1.803.97.037.149.161.265.314.265h1.035c.173 0 .311-.146.284-.317-.196-1.227-1.097-2.1-2.637-2.323V2.3a.3.3 0 0 0-.3-.3h-.711a.3.3 0 0 0-.3.3v1.359c-1.968.17-2.767 1.32-2.767 2.519 0 1.162.727 1.985 1.98 2.264l2.301.509c.632.145.883.4.883.871 0 .666-.525.981-1.73.981-1.223 0-1.791-.327-1.925-1.069-.029-.158-.158-.287-.32-.287H4.81c-.17 0-.306.14-.286.308.166 1.408 1.184 2.295 2.899 2.465v1.48a.3.3 0 0 0 .3.3h.711a.3.3 0 0 0 .3-.3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ui = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-9.057 5.627c2.284-.242 3.557-1.502 3.557-3.39 0-1.81-1.18-2.713-2.775-3.085l-2.79-.645c-.721-.162-1.074-.533-1.074-1.163 0-.823.629-1.227 2.055-1.227 1.386 0 2.056.37 2.294 1.205.07.246.276.442.531.442h1.107c.287 0 .519-.243.468-.526-.284-1.582-1.435-2.702-3.373-2.994V4.5a.5.5 0 0 0-.5-.5h-.687a.5.5 0 0 0-.5.5v1.712C8.726 6.438 7.7 7.972 7.7 9.57c0 1.55.936 2.648 2.546 3.02l2.959.677c.812.194 1.134.533 1.134 1.163 0 .888-.674 1.308-2.223 1.308-1.521 0-2.255-.41-2.457-1.33-.058-.263-.27-.479-.54-.479H8.015c-.282 0-.511.234-.473.514.25 1.817 1.55 2.962 3.714 3.184V19.5a.5.5 0 0 0 .5.5h.687a.5.5 0 0 0 .5-.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13m-11.847 7.033c2.792-.302 4.347-1.877 4.347-4.238 0-2.26-1.443-3.39-3.392-3.855l-3.41-.807c-.881-.202-1.312-.666-1.312-1.453 0-1.03.768-1.534 2.51-1.534 1.752 0 2.568.496 2.832 1.614.059.25.268.445.524.445h1.569c.287 0 .518-.243.475-.527-.307-2.046-1.723-3.5-4.143-3.873V6.5a.5.5 0 0 0-.5-.5H15.59a.5.5 0 0 0-.5.5v2.265c-3.092.282-4.347 2.2-4.347 4.198 0 1.937 1.143 3.31 3.11 3.774l3.617.847c.993.242 1.387.666 1.387 1.453 0 1.11-.825 1.635-2.718 1.635-1.921 0-2.815-.546-3.026-1.78-.045-.265-.26-.48-.53-.48h-1.57a.47.47 0 0 0-.479.513c.262 2.347 1.862 3.826 4.556 4.108V25.5a.5.5 0 0 0 .5.5h1.062a.5.5 0 0 0 .5-.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pi = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(xi, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ui, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(gi, {
              ...a,
              ref: r
            })]
          })
        }));
      pi.displayName = "CurrencySolid", pi.category = "Uncategorized", pi.variant = "Solid", pi.keywords = "Money, Cash, Finance, Refund, Donation, Coin, Gold, Dollar, Bank, Payment, Purchase, Value", pi.MD = xi, pi.LG = ui, pi.XL = gi;
      const ji = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m9.204 10.812.148-.19.72-.92c.176-.228.407-.352.696-.333.123.008.251.044.36.1.63.316 1.254.642 1.88.965.18.093.363.182.541.278.444.24.582.728.315 1.156q-.502.812-1.03 1.605c-.226.337-.556.53-.964.527a6.4 6.4 0 0 1-1.595-.206c-.996-.269-1.916-.707-2.783-1.26A13.2 13.2 0 0 1 5.041 10.5a12.7 12.7 0 0 1-1.899-2.545c-.42-.745-.764-1.524-.957-2.36-.086-.372-.115-.757-.166-1.137a1.4 1.4 0 0 1 .022-.58c.075-.28.221-.516.462-.679.54-.365 1.083-.727 1.633-1.078a.783.783 0 0 1 1.101.276c.196.346.37.703.55 1.056q.37.716.734 1.435a.79.79 0 0 1-.22 1.004q-.526.415-1.06.822c-.06.046-.068.08-.03.147.29.526.604 1.037.985 1.504a9.4 9.4 0 0 0 2.984 2.442c.005.002.01.001.024.004"
            })
          })
        }))),
        mi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M13.805 16.217q.11-.137.223-.284l1.079-1.38c.266-.342.612-.528 1.046-.499.183.012.376.065.54.149.944.475 1.88.964 2.82 1.448.27.14.544.272.81.418.666.36.874 1.09.474 1.733a89 89 0 0 1-1.546 2.408c-.338.505-.834.796-1.446.79a9.6 9.6 0 0 1-2.393-.308c-1.494-.404-2.874-1.062-4.174-1.891a19.8 19.8 0 0 1-3.677-3.049 19 19 0 0 1-2.847-3.817c-.63-1.119-1.147-2.288-1.436-3.54-.13-.559-.173-1.136-.25-1.706-.039-.29-.046-.582.033-.87.113-.42.332-.774.693-1.018.81-.549 1.625-1.092 2.45-1.617a1.174 1.174 0 0 1 1.652.412c.293.52.554 1.056.825 1.585q.554 1.074 1.1 2.152a1.184 1.184 0 0 1-.33 1.506q-.787.624-1.589 1.233c-.09.07-.102.12-.046.22.437.79.907 1.556 1.479 2.257 1.244 1.523 2.725 2.756 4.475 3.662.007.004.014.003.035.006"
            })
          })
        }))),
        Mi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M18.407 21.623q.146-.183.297-.379l1.439-1.84c.354-.456.816-.703 1.394-.665.244.015.501.087.72.198 1.26.633 2.508 1.285 3.76 1.93.36.187.726.364 1.082.558.887.48 1.163 1.455.63 2.312a119 119 0 0 1-2.061 3.21c-.451.674-1.111 1.06-1.928 1.053-1.076-.013-2.148-.129-3.19-.411-1.992-.538-3.832-1.415-5.566-2.521a26.3 26.3 0 0 1-4.903-4.065 25.5 25.5 0 0 1-3.796-5.09c-.84-1.492-1.53-3.05-1.915-4.72-.171-.745-.23-1.514-.332-2.274-.052-.387-.062-.776.043-1.16.15-.56.443-1.033.924-1.358a143 143 0 0 1 3.268-2.156c.754-.481 1.76-.23 2.202.55.39.692.738 1.408 1.1 2.114.49.955.983 1.91 1.467 2.868.362.716.19 1.51-.44 2.009q-1.051.831-2.12 1.644c-.118.092-.136.16-.061.293.583 1.052 1.21 2.074 1.972 3.008 1.66 2.031 3.634 3.675 5.967 4.884.01.005.019.003.047.008"
            })
          })
        }))),
        Ri = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ji, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(mi, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Mi, {
              ...a,
              ref: r
            })]
          })
        }));
      Ri.displayName = "PhoneSolid", Ri.category = "Uncategorized", Ri.variant = "Solid", Ri.keywords = "", Ri.MD = ji, Ri.LG = mi, Ri.XL = Mi;
      const bi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2 3.5V14l2.5-2.5h8A1.5 1.5 0 0 0 14 10V3.5A1.5 1.5 0 0 0 12.5 2h-9A1.5 1.5 0 0 0 2 3.5"
            })
          })
        }))),
        Li = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3 5v16l3.75-3.75H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"
            })
          })
        }))),
        zi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4 6.5V28l5-5h16.5a2.5 2.5 0 0 0 2.5-2.5v-14A2.5 2.5 0 0 0 25.5 4h-19A2.5 2.5 0 0 0 4 6.5"
            })
          })
        }))),
        yi = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(bi, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Li, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(zi, {
              ...a,
              ref: r
            })]
          })
        }));
      yi.displayName = "ChatBubbleSolid", yi.category = "Uncategorized", yi.variant = "Solid", yi.keywords = "Message, Support, DM, Communication, Conversation", yi.MD = bi, yi.LG = Li, yi.XL = zi;
      const Ci = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5z"
            })
          })
        }))),
        Ai = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            })
          })
        }))),
        Di = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
            })
          })
        }))),
        Ii = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ci, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Ai, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Di, {
              ...a,
              ref: r
            })]
          })
        }));
      Ii.displayName = "SquareSolid", Ii.category = "Uncategorized", Ii.variant = "Solid", Ii.keywords = "Checkbox, Shape, Empty, Selection, Unchecked, Unselected, Maximize", Ii.MD = Ci, Ii.LG = Ai, Ii.XL = Di;
      const Bi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2zm8.03 4.53a.75.75 0 0 0-1.06-1.06L7 8.94 5.53 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Si = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm11.747 6.664a1 1 0 0 0-1.494-1.328l-4.586 5.159-1.92-2.16a1 1 0 0 0-1.494 1.33l2.666 3a1 1 0 0 0 1.495 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm13.96 8.8a1.25 1.25 0 0 0-1.92-1.6l-5.707 6.847L11.96 15.2a1.25 1.25 0 0 0-1.92 1.6l3.333 4a1.25 1.25 0 0 0 1.92 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vi = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Bi, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Si, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Hi, {
              ...a,
              ref: r
            })]
          })
        }));
      Vi.displayName = "CheckSquareSolid", Vi.category = "Uncategorized", Vi.variant = "Solid", Vi.keywords = "Checkbox, Selection, Checked, Completed, Check Mark, To do, Done, Approved, Selected", Vi.MD = Bi, Vi.LG = Si, Vi.XL = Hi;
      const Ni = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2zM6 7.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm3 8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ki = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M8 4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm2 10.75a1.25 1.25 0 1 0 0 2.5h12a1.25 1.25 0 1 0 0-2.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xi = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ni, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Gi, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ki, {
              ...a,
              ref: r
            })]
          })
        }));
      Xi.displayName = "MinusSquareSolid", Xi.category = "Uncategorized", Xi.variant = "Solid", Xi.keywords = "Checkbox, Partial, Selection, Intermediate, Remove, Minus, Delete, Indeterminate", Xi.MD = Ni, Xi.LG = Gi, Xi.XL = ki;
      const Oi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M18.71 4.056c-.802.342-2.216.82-3.182.455-1.042-.394-2.421-1.697-3.076-2.356a.53.53 0 0 0-.751 0c-.655.66-2.035 1.962-3.077 2.356-.977.37-2.415-.125-3.212-.468-.3-.13-.657.033-.723.354-.419 2.059-1.54 8.661.483 12.271 2.203 3.933 6.127 4.932 6.804 5.078a.4.4 0 0 0 .198-.006c.697-.191 4.91-1.48 6.807-5.072 1.73-3.276.81-10.083.46-12.234-.054-.333-.42-.51-.73-.378M16.748 9.43a1 1 0 0 0-1.494-1.329l-4.586 5.16-1.92-2.16a1 1 0 0 0-1.494 1.33l2.666 3a1 1 0 0 0 1.495 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M24.904 5.94c-1.11.309-2.815.639-4.03.203-1.326-.474-3.048-1.958-4.011-2.856a1.086 1.086 0 0 0-1.472 0c-.963.898-2.685 2.382-4.01 2.856-1.253.449-3.085.085-4.233-.231-.574-.159-1.186.165-1.307.748-.598 2.871-1.89 10.76.792 15.287 2.826 4.77 7.711 6.22 9.11 6.547.254.06.511.052.762-.02 1.447-.41 6.675-2.158 9.116-6.527 2.294-4.105 1.154-12.218.623-15.22-.107-.607-.746-.953-1.34-.788m-2.921 6.435a1.25 1.25 0 1 0-1.92-1.6l-5.707 6.847-2.373-2.847a1.25 1.25 0 1 0-1.92 1.6l3.333 4a1.25 1.25 0 0 0 1.92 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M12.677 2.46c-.537.212-1.561.535-2.251.269-.694-.268-1.603-1.129-2.07-1.603a.43.43 0 0 0-.608 0c-.466.474-1.376 1.335-2.07 1.603-.697.268-1.735-.064-2.268-.275-.178-.07-.383.027-.421.215-.276 1.33-1.099 5.998.316 8.57 1.524 2.77 4.247 3.46 4.686 3.556q.061.013.12-.004c.454-.126 3.376-1.024 4.688-3.553 1.21-2.334.534-7.156.304-8.548-.032-.194-.242-.301-.426-.23M11.53 6.339a.75.75 0 0 0-1.06-1.061L7 8.747l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _i = (0, a.forwardRef)((({
          size: e = "LG",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["LG" === e && (0, t.jsx)(Oi, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Fi, {
              ...a,
              ref: r
            }), "MD" === e && (0, t.jsx)(Pi, {
              ...a,
              ref: r
            })]
          })
        }));
      _i.displayName = "CheckShieldSolid", _i.category = "Uncategorized", _i.variant = "Solid", _i.keywords = "Protection, Security, Verification, Safety, Defense, Secure", _i.LG = Oi, _i.XL = Fi, _i.MD = Pi;
      const qi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M7 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M8.337 10H4.5c-.833 0-1.292.24-1.875.8S2 12.25 2 12.8V14h7.05A3.5 3.5 0 0 1 8 11.5c0-.537.12-1.045.337-1.5"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M14 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-2.5-1.6a.35.35 0 0 1 .35.35v.9h.9a.35.35 0 1 1 0 .7h-.9v.9a.35.35 0 1 1-.7 0v-.9h-.9a.35.35 0 1 1 0-.7h.9v-.9a.35.35 0 0 1 .35-.35",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ui = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M14.5 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.144 15H6.75c-1.25 0-1.938.36-2.812 1.2-.875.84-.938 2.175-.938 3V21h10.6a5.24 5.24 0 0 1-1.85-4c0-.708.14-1.384.394-2"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M21 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4-2.65a.65.65 0 0 1 .65.65v1.35H19a.65.65 0 1 1 0 1.3h-1.35V19a.65.65 0 1 1-1.3 0v-1.35H15a.65.65 0 1 1 0-1.3h1.35V15a.65.65 0 0 1 .65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ei = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M14 7.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10M18.846 28a6.49 6.49 0 0 1-2.346-5c0-1.082.264-2.102.732-3H9c-1.667 0-2.585.481-3.75 1.6S4 24.5 4 25.6V28z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M28 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-5-3.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H20.5a.75.75 0 0 1 0-1.5h1.75V20.5a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ti = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(qi, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Ui, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Ei, {
              ...a,
              ref: r
            })]
          })
        }));
      Ti.displayName = "PersonPlusSolid", Ti.category = "Uncategorized", Ti.variant = "Solid", Ti.keywords = "User, Add, Contact, Friend, Follow, People, Person, Profile", Ti.MD = qi, Ti.LG = Ui, Ti.XL = Ei;
      const Wi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M7 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M8.337 10H4.5c-.833 0-1.292.24-1.875.8S2 12.25 2 12.8V14h7.05A3.5 3.5 0 0 1 8 11.5c0-.537.12-1.045.337-1.5"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M14 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-4.1 0a.35.35 0 0 1 .35-.35h2.5a.35.35 0 1 1 0 .7h-2.5a.35.35 0 0 1-.35-.35",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        $i = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M14.5 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.144 15H6.75c-1.25 0-1.938.36-2.812 1.2-.875.84-.938 2.175-.938 3V21h10.6a5.24 5.24 0 0 1-1.85-4c0-.708.14-1.384.394-2"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M21 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-6.65 0a.65.65 0 0 1 .65-.65h4a.65.65 0 1 1 0 1.3h-4a.65.65 0 0 1-.65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Zi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M14 7.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10M18.846 28a6.49 6.49 0 0 1-2.346-5c0-1.082.264-2.102.732-3H9c-1.667 0-2.585.481-3.75 1.6S4 24.5 4 25.6V28z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M28 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-8.25 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Qi = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Wi, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)($i, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Zi, {
              ...a,
              ref: r
            })]
          })
        }));
      Qi.displayName = "PersonMinusSolid", Qi.category = "Uncategorized", Qi.variant = "Solid", Qi.keywords = "Person, Profile, Remove, User, Delete, People, Unfriend, Friend, Unfollow", Qi.MD = Wi, Qi.LG = $i, Qi.XL = Zi;
      const Yi = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M7 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M8.337 10H4.5c-.833 0-1.292.24-1.875.8S2 12.25 2 12.8V14h7.05A3.5 3.5 0 0 1 8 11.5c0-.537.12-1.045.337-1.5"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M11.75 8.45a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6m-1.7 2.8c0-.269.062-.523.173-.749l2.276 2.276a1.7 1.7 0 0 1-2.449-1.527m3.227.749L11 9.723a1.7 1.7 0 0 1 2.275 2.275",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ki = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M14.5 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.144 15H6.75c-1.25 0-1.938.36-2.812 1.2-.875.84-.938 2.175-.938 3V21h10.6a5.24 5.24 0 0 1-1.85-4c0-.708.14-1.384.394-2"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M17 13.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m-2.25 3.75c0-.347.079-.676.22-.97l3 3a2.25 2.25 0 0 1-3.22-2.03m4.28.97-3-3a2.25 2.25 0 0 1 3 3",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ji = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M14 7.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10M18.846 28a6.49 6.49 0 0 1-2.346-5c0-1.082.264-2.102.732-3H9c-1.667 0-2.585.481-3.75 1.6S4 24.5 4 25.6V28z"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M23 18.05a4.95 4.95 0 1 0 0 9.9 4.95 4.95 0 0 0 0-9.9M19.95 23c0-.496.118-.964.328-1.378l4.1 4.1A3.05 3.05 0 0 1 19.95 23m5.772 1.378-4.1-4.1a3.05 3.05 0 0 1 4.1 4.1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        es = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Yi, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Ki, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Ji, {
              ...a,
              ref: r
            })]
          })
        }));
      es.displayName = "PersonBlockSolid", es.category = "Uncategorized", es.variant = "Solid", es.keywords = "User, Blocked, Contact, Unfriend, Restricted", es.MD = Yi, es.LG = Ki, es.XL = Ji;
      const ls = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M2 10.5v-5A1.5 1.5 0 0 1 3.5 4h9A1.5 1.5 0 0 1 14 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 10.5m7.1-3.9c0-.22.18-.4.4-.4H12a.4.4 0 0 1 0 .8H9.5a.4.4 0 0 1-.4-.4m.4 1.1a.4.4 0 0 0 0 .8H12a.4.4 0 0 0 0-.8zm-.4 1.9c0-.22.18-.4.4-.4h1a.4.4 0 0 1 0 .8h-1a.4.4 0 0 1-.4-.4M7 6.96c0 .53-.448.96-1 .96s-1-.43-1-.96S5.448 6 6 6s1 .43 1 .96M7 8.4H5c-.333 0-.517.096-.75.32S4 9.3 4 9.52V10h4v-.48c0-.24 0-.56-.25-.8S7.25 8.4 7 8.4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rs = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M3 16V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m5-4.12c.828 0 1.5-.645 1.5-1.44S8.828 9 8 9s-1.5.645-1.5 1.44.672 1.44 1.5 1.44m-1.5.72h3c.375 0 .75.12 1.125.48s.375.84.375 1.2V15H5v-.72c0-.33.025-.864.375-1.2S6 12.6 6.5 12.6m6.3-3.95a.65.65 0 0 0 0 1.3h5.5a.65.65 0 1 0 0-1.3zm-.65 3.15a.65.65 0 0 1 .65-.65h5.5a.65.65 0 1 1 0 1.3h-5.5a.65.65 0 0 1-.65-.65m.65 1.85a.65.65 0 0 0 0 1.3h3.3a.65.65 0 1 0 0-1.3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ts = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4 22.5v-13A2.5 2.5 0 0 1 6.5 7h19A2.5 2.5 0 0 1 28 9.5v13a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 22.5m7-6.66c1.105 0 2-.86 2-1.92S12.105 12 11 12s-2 .86-2 1.92.895 1.92 2 1.92m-2 .96h4c.5 0 1 .16 1.5.64s.5 1.12.5 1.6V20H7v-.96c0-.44.034-1.152.5-1.6s.833-.64 1.5-.64m8.5-4.7a.9.9 0 1 0 0 1.8h7a.9.9 0 1 0 0-1.8zm-.9 3.9a.9.9 0 0 1 .9-.9h7a.9.9 0 1 1 0 1.8h-7a.9.9 0 0 1-.9-.9m.9 2.1a.9.9 0 1 0 0 1.8h4a.9.9 0 1 0 0-1.8z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        as = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ls, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(rs, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ts, {
              ...a,
              ref: r
            })]
          })
        }));
      as.displayName = "IdentificationSolid", as.category = "Uncategorized", as.variant = "Solid", as.keywords = "ID, Card, Access, Information, Security, Privacy, Proof, Personal, Verification", as.MD = ls, as.LG = rs, as.XL = ts;
      const os = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4.269 4.013q.01-.119.03-.256a4.1 4.1 0 0 1 .569-1.588C5.592 1.029 6.835.75 7.994.75c1.229 0 2.384.422 3.095 1.372.423.563.576 1.187.631 1.64q.017.135.023.253A2 2 0 0 1 13.5 6v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V6a2 2 0 0 1 1.769-1.987m1.865-1.04c.309-.486.883-.723 1.86-.723.908 0 1.546.306 1.895.771.21.281.306.622.342.922l.007.057H5.78l.003-.025c.046-.31.147-.68.351-1.002M8 7.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 8 7.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        is = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M6.035 7.158q.017-.169.045-.36c.103-.703.343-1.656.91-2.55C8.129 2.459 10.089 2 11.99 2c1.995 0 3.833.684 4.959 2.186.668.892.915 1.884 1.004 2.614q.022.194.034.366A3 3 0 0 1 20 10v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8c0-1.32.852-2.44 2.035-2.842M8.68 5.321C9.263 4.402 10.331 4 11.99 4c1.566 0 2.717.53 3.358 1.385.377.502.547 1.099.614 1.615h-7.89c.085-.52.261-1.134.607-1.679M12 11.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ss = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.759 10.398c.012-.284.04-.647.101-1.06.143-.97.475-2.282 1.254-3.51 1.55-2.44 4.228-3.078 6.872-3.078 2.76 0 5.283.946 6.822 3 .915 1.221 1.255 2.582 1.377 3.588.05.41.065.773.065 1.064A4 4 0 0 1 26.5 14v10a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4V14a4 4 0 0 1 2.259-3.602m3.465-3.229c.859-1.352 2.422-1.919 4.762-1.919 2.225 0 3.887.752 4.822 2 .561.75.804 1.639.895 2.39q.022.19.034.36H10.295q.015-.142.039-.297c.112-.765.363-1.704.89-2.534M16 15.75c.69 0 1.25.56 1.25 1.25v4a1.25 1.25 0 1 1-2.5 0v-4c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ns = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(os, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(is, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(ss, {
              ...a,
              ref: r
            })]
          })
        }));
      ns.displayName = "PadlockSolid", ns.category = "Uncategorized", ns.variant = "Solid", ns.keywords = "Lock, Password, Safe, Protection, Secure, Security, Latch", ns.MD = os, ns.LG = is, ns.XL = ss;
      const ds = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M4.269 4.013q.01-.119.03-.256a4.1 4.1 0 0 1 .569-1.588C5.592 1.029 6.835.75 7.994.75c1.229 0 2.384.422 3.095 1.372.423.563.576 1.187.631 1.64q.017.135.023.253A2 2 0 0 1 13.5 6v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V6a2 2 0 0 1 1.769-1.987m1.865-1.04c.309-.486.883-.723 1.86-.723.908 0 1.546.306 1.895.771.21.281.306.622.342.922l.007.057H5.78l.003-.025c.046-.31.147-.68.351-1.002M7.25 9A.75.75 0 0 1 8 8.25h.1a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m3.25-.75a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5zM4.75 9a.75.75 0 0 1 .75-.75h.1a.75.75 0 0 1 0 1.5h-.1A.75.75 0 0 1 4.75 9",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        cs = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M6.035 7.158q.017-.169.045-.36c.103-.703.343-1.656.91-2.55C8.129 2.459 10.089 2 11.99 2c1.995 0 3.833.684 4.959 2.186.668.892.915 1.884 1.004 2.614q.022.194.034.366A3 3 0 0 1 20 10v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8c0-1.32.852-2.44 2.035-2.842M8.68 5.321C9.263 4.402 10.331 4 11.99 4c1.566 0 2.717.53 3.358 1.385.377.502.547 1.099.614 1.615h-7.89c.085-.52.261-1.134.607-1.679M11 14a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4.5-1a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm-8 1a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hs = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M7.759 10.398c.012-.284.04-.647.101-1.06.143-.97.475-2.282 1.254-3.51 1.55-2.44 4.228-3.078 6.872-3.078 2.76 0 5.283.946 6.822 3 .915 1.221 1.255 2.582 1.377 3.588.05.41.065.773.065 1.064A4 4 0 0 1 26.5 14v10a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4V14a4 4 0 0 1 2.259-3.602m3.465-3.229c.859-1.352 2.422-1.919 4.762-1.919 2.225 0 3.887.752 4.822 2 .561.75.804 1.639.895 2.39q.022.19.034.36H10.295q.015-.142.039-.297c.112-.765.363-1.704.89-2.534M14.75 19c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 1 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25m-3.25-1.25a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5zM19.25 19c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 1 1 0 2.5h-.1c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fs = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(ds, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(cs, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(hs, {
              ...a,
              ref: r
            })]
          })
        }));
      fs.displayName = "PadlockPasswordSolid", fs.category = "Uncategorized", fs.variant = "Solid", fs.keywords = "Lock, Password, Safe, Protection, Secure, Security, Latch, Access, Code", fs.MD = ds, fs.LG = cs, fs.XL = hs;
      const vs = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M9.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M2 8c.6-1.714 3-4 6-4s5.4 2.286 6 4c-.6 1.714-3 4-6 4S2.6 9.714 2 8m9 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ws = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M4 12c.8-2.143 4-5 8-5s7.2 2.857 8 5c-.8 2.143-4 5-8 5s-7.2-2.857-8-5m11.5 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        xs = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "M19 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "M4 16c1.2-3.429 6-8 12-8s10.8 4.571 12 8c-1.2 3.429-6 8-12 8S5.2 19.429 4 16m18 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        us = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(vs, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ws, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(xs, {
              ...a,
              ref: r
            })]
          })
        }));
      us.displayName = "EyeSolid", us.category = "Uncategorized", us.variant = "Solid", us.keywords = "View, Password, Sign, Vision, Watch, See, Look, Show, Visible", us.MD = vs, us.LG = ws, us.XL = xs;
      const gs = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.53 5.47a.75.75 0 0 0-1.06 1.06L6.94 8 5.47 9.47a.75.75 0 1 0 1.06 1.06L8 9.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.06 8l1.47-1.47a.75.75 0 1 0-1.06-1.06L8 6.94z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ps = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M9.707 8.293a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        js = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13m-16.116-4.884a1.25 1.25 0 0 0-1.768 1.768L14.232 16l-3.116 3.116a1.25 1.25 0 0 0 1.768 1.768L16 17.768l3.116 3.116a1.25 1.25 0 0 0 1.768-1.768L17.768 16l3.116-3.116a1.25 1.25 0 0 0-1.768-1.768L16 14.232z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ms = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(gs, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ps, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(js, {
              ...a,
              ref: r
            })]
          })
        }));
      ms.displayName = "XCircleSolid", ms.category = "Uncategorized", ms.variant = "Solid", ms.keywords = "Close, Error, Remove, Clean, Erase, Deprecate, Delete, Navigation", ms.MD = gs, ms.LG = ps, ms.XL = js;
      const Ms = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8 4.25a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5zM8.75 8a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rs = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M12 7a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm1 5a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bs = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13M16 8.75a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5zM17.25 15a1.25 1.25 0 1 0-2.5 0v6a1.25 1.25 0 1 0 2.5 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ls = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ms, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Rs, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(bs, {
              ...a,
              ref: r
            })]
          })
        }));
      Ls.displayName = "InfoCircleSolid", Ls.category = "Uncategorized", Ls.variant = "Solid", Ls.keywords = "Info, Information, Help, Support", Ls.MD = Ms, Ls.LG = Rs, Ls.XL = bs;
      const zs = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "m2.102 3.2 10.606 10.607 1.06-1.06-2.004-2.005C12.886 9.942 13.688 8.894 14 8c-.6-1.714-3-4-6-4a6.2 6.2 0 0 0-2.458.52l-2.38-2.38zm4.35 2.23L7.79 6.768q.103-.018.21-.018a1.25 1.25 0 0 1 1.232 1.46l1.338 1.338A3 3 0 0 0 6.452 5.43",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "m9.337 11.849-.883-.883Q8.231 11 8 11a3 3 0 0 1-2.966-3.454L3.421 5.933C2.727 6.598 2.231 7.34 2 8c.6 1.714 3 4 6 4a6 6 0 0 0 1.337-.152"
            })]
          })
        }))),
        ys = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "m3 4.8 16.264 16.263 1.414-1.414-4.002-4.002C18.35 14.627 19.552 13.201 20 12c-.8-2.143-4-5-8-5a8.7 8.7 0 0 0-3.31.662L4.415 3.386zm7.093 4.265a3.5 3.5 0 0 1 4.842 4.842l-1.493-1.493q.058-.198.058-.414a1.5 1.5 0 0 0-1.914-1.442z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "m13.038 16.936-1.462-1.461a3.5 3.5 0 0 1-3.05-3.051L5.698 9.597C4.876 10.381 4.285 11.237 4 12c.8 2.143 4 5 8 5q.529 0 1.037-.064"
            })]
          })
        }))),
        Cs = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, t.jsx)("path", {
              fill: e,
              d: "m4 6 21.92 21.92 1.768-1.767-4.46-4.46C25.628 20.07 27.347 17.866 28 16c-1.2-3.428-6-8-12-8-1.902 0-3.684.46-5.268 1.196L5.768 4.232zm8.595 5.06a6 6 0 0 1 8.346 8.346l-2.195-2.195a3 3 0 0 0-3.956-3.956z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, t.jsx)("path", {
              fill: e,
              d: "m18.254 23.785-1.802-1.802Q16.228 22 16 22a6 6 0 0 1-5.983-6.452l-3.431-3.43C5.332 13.381 4.432 14.764 4 16c1.2 3.429 6 8 12 8 .773 0 1.526-.076 2.253-.215"
            })]
          })
        }))),
        As = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(zs, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(ys, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Cs, {
              ...a,
              ref: r
            })]
          })
        }));
      As.displayName = "EyeSlashSolid", As.category = "Uncategorized", As.variant = "Solid", As.keywords = "Lock, Password, Private, Vision, See, Look, Hide, Invisible", As.MD = zs, As.LG = ys, As.XL = Cs;
      const Ds = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "m7.018 2.585-4.864 8.592a1.27 1.27 0 0 0-.003 1.21c.099.184.242.338.415.445.173.108.37.166.57.168h9.728c.2-.002.397-.06.57-.168.173-.107.316-.261.415-.445a1.27 1.27 0 0 0-.003-1.21L8.982 2.585a1.2 1.2 0 0 0-.419-.429 1.1 1.1 0 0 0-1.126 0 1.2 1.2 0 0 0-.419.429M8 5.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 8 5.25m0 4.5a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Is = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M10.527 4.85 3.231 17.35a1.8 1.8 0 0 0-.005 1.759c.149.268.364.491.623.648.26.157.554.24.855.244h14.592c.3-.003.596-.087.855-.244.26-.157.474-.38.623-.648a1.8 1.8 0 0 0-.005-1.76L13.473 4.852a1.74 1.74 0 0 0-.628-.624 1.69 1.69 0 0 0-1.69 0 1.74 1.74 0 0 0-.628.624M12 8.005a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m0 7.496a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bs = (0, a.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: r,
          ...a
        }, o) => (0, t.jsx)(c, {
          label: r,
          children: (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...a,
            ref: o,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, t.jsx)("path", {
              fill: e,
              d: "M14.036 6.17 4.308 23.354A2.54 2.54 0 0 0 4 24.563c-.001.424.103.841.301 1.21.199.369.485.676.831.891.346.216.739.331 1.14.336h19.456c.401-.005.794-.12 1.14-.336.346-.215.632-.522.83-.89.2-.37.303-.787.302-1.211a2.54 2.54 0 0 0-.308-1.209L17.964 6.17a2.36 2.36 0 0 0-.837-.857A2.2 2.2 0 0 0 16 5a2.2 2.2 0 0 0-1.127.313 2.36 2.36 0 0 0-.837.857M16 10.75c.69 0 1.25.56 1.25 1.25v6a1.25 1.25 0 1 1-2.5 0v-6c0-.69.56-1.25 1.25-1.25m0 11a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ss = (0, a.forwardRef)((({
          size: e = "MD",
          ...l
        }, r) => {
          const a = (0, h.v6)(l, {
            className: j({
              size: e
            })
          });
          return (0, t.jsxs)(t.Fragment, {
            children: ["MD" === e && (0, t.jsx)(Ds, {
              ...a,
              ref: r
            }), "LG" === e && (0, t.jsx)(Is, {
              ...a,
              ref: r
            }), "XL" === e && (0, t.jsx)(Bs, {
              ...a,
              ref: r
            })]
          })
        }));
      Ss.displayName = "AlertTriangleSolid", Ss.category = "Uncategorized", Ss.variant = "Solid", Ss.keywords = "Warning, Alert, Caution, Attention, Danger, Error, Triangle", Ss.MD = Ds, Ss.LG = Is, Ss.XL = Bs
    },
    50786: (e, l, r) => {
      "use strict";
      r.d(l, {
        DX: () => i,
        xV: () => n
      });
      var t = r(62229);

      function a(...e) {
        return l => e.forEach((e => function(e, l) {
          "function" == typeof e ? e(l) : null != e && (e.current = l)
        }(e, l)))
      }
      var o = r(91029),
        i = t.forwardRef(((e, l) => {
          const {
            children: r,
            ...a
          } = e, i = t.Children.toArray(r), n = i.find(d);
          if (n) {
            const e = n.props.children,
              r = i.map((l => l === n ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : l));
            return (0, o.jsx)(s, {
              ...a,
              ref: l,
              children: t.isValidElement(e) ? t.cloneElement(e, void 0, r) : null
            })
          }
          return (0, o.jsx)(s, {
            ...a,
            ref: l,
            children: r
          })
        }));
      i.displayName = "Slot";
      var s = t.forwardRef(((e, l) => {
        const {
          children: r,
          ...o
        } = e;
        if (t.isValidElement(r)) {
          const e = function(e) {
            let l = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = l && "isReactWarning" in l && l.isReactWarning;
            return r ? e.ref : (l = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = l && "isReactWarning" in l && l.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
          }(r);
          return t.cloneElement(r, {
            ...c(o, r.props),
            ref: l ? a(l, e) : e
          })
        }
        return t.Children.count(r) > 1 ? t.Children.only(null) : null
      }));
      s.displayName = "SlotClone";
      var n = ({
        children: e
      }) => (0, o.jsx)(o.Fragment, {
        children: e
      });

      function d(e) {
        return t.isValidElement(e) && e.type === n
      }

      function c(e, l) {
        const r = {
          ...l
        };
        for (const t in l) {
          const a = e[t],
            o = l[t];
          /^on[A-Z]/.test(t) ? a && o ? r[t] = (...e) => {
            o(...e), a(...e)
          } : a && (r[t] = a) : "style" === t ? r[t] = {
            ...a,
            ...o
          } : "className" === t && (r[t] = [a, o].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...r
        }
      }
    },
    15302: (e, l, r) => {
      "use strict";

      function t(e) {
        var l, r, a = "";
        if ("string" == typeof e || "number" == typeof e) a += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (l = 0; l < o; l++) e[l] && (r = t(e[l])) && (a && (a += " "), a += r)
          } else
            for (r in e) e[r] && (a && (a += " "), a += r);
        return a
      }

      function a() {
        for (var e, l, r = 0, a = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (l = t(e)) && (a && (a += " "), a += l);
        return a
      }
      r.d(l, {
        $: () => a,
        A: () => o
      });
      const o = a
    }
  }
]);