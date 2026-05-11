try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "b386e89f-a282-42b8-b985-1b40ac4e9ca3", t._sentryDebugIdIdentifier = "sentry-dbid-b386e89f-a282-42b8-b985-1b40ac4e9ca3")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [898], {
    5422(t, e, r) {
      "use strict";
      r.d(e, {
        A: () => s
      });
      const n = {
          getcanonicallocales: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 1303)),
            polyfill: () => r.e(5018).then(r.bind(r, 6819))
          },
          locale: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 206)),
            polyfill: () => r.e(9615).then(r.bind(r, 8634))
          },
          listformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 8727)),
            polyfill: () => Promise.all([r.e(4578), r.e(5932), r.e(8970)]).then(r.bind(r, 7369)),
            locale: t => r(7461)(`./${t}`)
          },
          displaynames: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 6670)),
            polyfill: () => Promise.all([r.e(4578), r.e(5932), r.e(3343)]).then(r.bind(r, 6826)),
            locale: t => r(1983)(`./${t}`)
          },
          pluralrules: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 4727)),
            polyfill: () => Promise.all([r.e(4578), r.e(5932), r.e(314)]).then(r.bind(r, 649)),
            locale: t => r(8525)(`./${t}`)
          },
          numberformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 1610)),
            polyfill: () => Promise.all([r.e(4578), r.e(5932), r.e(907)]).then(r.bind(r, 2694)),
            locale: t => r(5267)(`./${t}`)
          },
          relativetimeformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 9222)),
            polyfill: () => Promise.all([r.e(4578), r.e(5932), r.e(8391)]).then(r.bind(r, 6258)),
            locale: t => r(3019)(`./${t}`)
          },
          datetimeformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 1306)),
            polyfill: () => Promise.all([r.e(4578), r.e(5932), r.e(4731)]).then(r.bind(r, 5334)),
            locale: t => Promise.all([r.e(6280).then(r.t.bind(r, 9989, 23)), r(4819)(`./${t}`)])
          }
        },
        o = {
          getcanonicallocales: ["getcanonicallocales"],
          locale: ["getcanonicallocales", "locale"],
          pluralrules: ["getcanonicallocales", "locale", "pluralrules"],
          numberformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat"],
          relativetimeformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat", "relativetimeformat"],
          datetimeformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat", "datetimeformat"],
          displaynames: ["getcanonicallocales", "locale", "displaynames"],
          listformat: ["getcanonicallocales", "locale", "listformat"]
        },
        i = async (t, e, r) => {
          const {
            shouldPolyfill: n
          } = await t.should();
          return !!n(t.locale ? e : null) && (await t.polyfill(), t.locale && await t.locale(e), !0)
        }, s = async (t, e) => {
          if (!t) throw new Error("Please provide the desired locale");
          if (!e || !e.length) throw new Error(`Please provide the list of polyfills to load, supported ones are: ${Object.keys(o).join(", ")}`);
          const r = [];
          let s = 0;
          for (const a of e) {
            if (!a || !o[a]) throw new Error(`Unsupported polyfill: ${a}. Supported ones are: ${Object.keys(o).join(", ")}`);
            for (const e of o[a]) - 1 === r.indexOf(e) && (await i(n[e], t) && s++, r.push(e))
          }
          return s
        }
    },
    7737(t, e, r) {
      var n = r(3789)(r(5036), "DataView");
      t.exports = n
    },
    5072(t, e, r) {
      var n = r(9763),
        o = r(3879),
        i = r(8150),
        s = r(7106),
        a = r(938);

      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var n = t[e];
          this.set(n[0], n[1])
        }
      }
      c.prototype.clear = n, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = s, c.prototype.set = a, t.exports = c
    },
    5332(t, e, r) {
      var n = r(3023),
        o = r(4747),
        i = r(9978),
        s = r(6734),
        a = r(4710);

      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var n = t[e];
          this.set(n[0], n[1])
        }
      }
      c.prototype.clear = n, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = s, c.prototype.set = a, t.exports = c
    },
    16(t, e, r) {
      var n = r(3789)(r(5036), "Map");
      t.exports = n
    },
    1708(t, e, r) {
      var n = r(615),
        o = r(9859),
        i = r(5170),
        s = r(8470),
        a = r(7646);

      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
          var n = t[e];
          this.set(n[0], n[1])
        }
      }
      c.prototype.clear = n, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = s, c.prototype.set = a, t.exports = c
    },
    1767(t, e, r) {
      var n = r(3789)(r(5036), "Promise");
      t.exports = n
    },
    7802(t, e, r) {
      var n = r(3789)(r(5036), "Set");
      t.exports = n
    },
    9310(t, e, r) {
      var n = r(5332),
        o = r(9333),
        i = r(1893),
        s = r(9676),
        a = r(6536),
        c = r(3336);

      function l(t) {
        var e = this.__data__ = new n(t);
        this.size = e.size
      }
      l.prototype.clear = o, l.prototype.delete = i, l.prototype.get = s, l.prototype.has = a, l.prototype.set = c, t.exports = l
    },
    7432(t, e, r) {
      var n = r(5036).Symbol;
      t.exports = n
    },
    2562(t, e, r) {
      var n = r(5036).Uint8Array;
      t.exports = n
    },
    20(t, e, r) {
      var n = r(3789)(r(5036), "WeakMap");
      t.exports = n
    },
    9822(t) {
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
    2130(t) {
      t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
        return t
      }
    },
    5773(t) {
      t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n;) {
          var s = t[r];
          e(s, r, t) && (i[o++] = s)
        }
        return i
      }
    },
    6272(t, e, r) {
      var n = r(8355),
        o = r(7933),
        i = r(9464),
        s = r(8609),
        a = r(1574),
        c = r(264),
        l = Object.prototype.hasOwnProperty;
      t.exports = function(t, e) {
        var r = i(t),
          u = !r && o(t),
          h = !r && !u && s(t),
          f = !r && !u && !h && c(t),
          p = r || u || h || f,
          m = p ? n(t.length, String) : [],
          g = m.length;
        for (var b in t) !e && !l.call(t, b) || p && ("length" == b || h && ("offset" == b || "parent" == b) || f && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || a(b, g)) || m.push(b);
        return m
      }
    },
    6233(t) {
      t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n;) o[r] = e(t[r], r, t);
        return o
      }
    },
    1595(t) {
      t.exports = function(t, e) {
        for (var r = -1, n = e.length, o = t.length; ++r < n;) t[o + r] = e[r];
        return t
      }
    },
    3688(t, e, r) {
      var n = r(6571),
        o = r(9679);
      t.exports = function(t, e, r) {
        (void 0 !== r && !o(t[e], r) || void 0 === r && !(e in t)) && n(t, e, r)
      }
    },
    6312(t, e, r) {
      var n = r(6571),
        o = r(9679),
        i = Object.prototype.hasOwnProperty;
      t.exports = function(t, e, r) {
        var s = t[e];
        i.call(t, e) && o(s, r) && (void 0 !== r || e in t) || n(t, e, r)
      }
    },
    5096(t, e, r) {
      var n = r(9679);
      t.exports = function(t, e) {
        for (var r = t.length; r--;)
          if (n(t[r][0], e)) return r;
        return -1
      }
    },
    2516(t, e, r) {
      var n = r(5634),
        o = r(9125);
      t.exports = function(t, e) {
        return t && n(e, o(e), t)
      }
    },
    5771(t, e, r) {
      var n = r(5634),
        o = r(7798);
      t.exports = function(t, e) {
        return t && n(e, o(e), t)
      }
    },
    6571(t, e, r) {
      var n = r(6514);
      t.exports = function(t, e, r) {
        "__proto__" == e && n ? n(t, e, {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        }) : t[e] = r
      }
    },
    9192(t, e, r) {
      var n = r(9310),
        o = r(2130),
        i = r(6312),
        s = r(2516),
        a = r(5771),
        c = r(1733),
        l = r(5240),
        u = r(6752),
        h = r(4239),
        f = r(1679),
        p = r(6628),
        m = r(1344),
        g = r(7928),
        b = r(4290),
        d = r(6082),
        y = r(9464),
        E = r(8609),
        v = r(6043),
        _ = r(6130),
        T = r(6885),
        A = r(9125),
        H = r(7798),
        B = "[object Arguments]",
        P = "[object Function]",
        S = "[object Object]",
        I = {};
      I[B] = I["[object Array]"] = I["[object ArrayBuffer]"] = I["[object DataView]"] = I["[object Boolean]"] = I["[object Date]"] = I["[object Float32Array]"] = I["[object Float64Array]"] = I["[object Int8Array]"] = I["[object Int16Array]"] = I["[object Int32Array]"] = I["[object Map]"] = I["[object Number]"] = I[S] = I["[object RegExp]"] = I["[object Set]"] = I["[object String]"] = I["[object Symbol]"] = I["[object Uint8Array]"] = I["[object Uint8ClampedArray]"] = I["[object Uint16Array]"] = I["[object Uint32Array]"] = !0, I["[object Error]"] = I[P] = I["[object WeakMap]"] = !1, t.exports = function t(e, r, N, w, L, O) {
        var x, R = 1 & r,
          M = 2 & r,
          j = 4 & r;
        if (N && (x = L ? N(e, w, L, O) : N(e)), void 0 !== x) return x;
        if (!_(e)) return e;
        var C = y(e);
        if (C) {
          if (x = g(e), !R) return l(e, x)
        } else {
          var D = m(e),
            F = D == P || "[object GeneratorFunction]" == D;
          if (E(e)) return c(e, R);
          if (D == S || D == B || F && !L) {
            if (x = M || F ? {} : d(e), !R) return M ? h(e, a(x, e)) : u(e, s(x, e))
          } else {
            if (!I[D]) return L ? e : {};
            x = b(e, D, R)
          }
        }
        O || (O = new n);
        var U = O.get(e);
        if (U) return U;
        O.set(e, x), T(e) ? e.forEach(function(n) {
          x.add(t(n, r, N, n, e, O))
        }) : v(e) && e.forEach(function(n, o) {
          x.set(o, t(n, r, N, o, e, O))
        });
        var G = C ? void 0 : (j ? M ? p : f : M ? H : A)(e);
        return o(G || e, function(n, o) {
          G && (n = e[o = n]), i(x, o, t(n, r, N, o, e, O))
        }), x
      }
    },
    6309(t, e, r) {
      var n = r(6130),
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
    5951(t, e, r) {
      var n = r(1595),
        o = r(8352);
      t.exports = function t(e, r, i, s, a) {
        var c = -1,
          l = e.length;
        for (i || (i = o), a || (a = []); ++c < l;) {
          var u = e[c];
          r > 0 && i(u) ? r > 1 ? t(u, r - 1, i, s, a) : n(a, u) : s || (a[a.length] = u)
        }
        return a
      }
    },
    4350(t, e, r) {
      var n = r(2294)();
      t.exports = n
    },
    3117(t, e, r) {
      var n = r(8328),
        o = r(1966);
      t.exports = function(t, e) {
        for (var r = 0, i = (e = n(e, t)).length; null != t && r < i;) t = t[o(e[r++])];
        return r && r == i ? t : void 0
      }
    },
    4090(t, e, r) {
      var n = r(1595),
        o = r(9464);
      t.exports = function(t, e, r) {
        var i = e(t);
        return o(t) ? i : n(i, r(t))
      }
    },
    6077(t, e, r) {
      var n = r(7432),
        o = r(4444),
        i = r(3371),
        s = n ? n.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : s && s in Object(t) ? o(t) : i(t)
      }
    },
    5301(t, e, r) {
      var n = r(6077),
        o = r(4189);
      t.exports = function(t) {
        return o(t) && "[object Arguments]" == n(t)
      }
    },
    1939(t, e, r) {
      var n = r(1344),
        o = r(4189);
      t.exports = function(t) {
        return o(t) && "[object Map]" == n(t)
      }
    },
    9950(t, e, r) {
      var n = r(6553),
        o = r(3909),
        i = r(6130),
        s = r(2760),
        a = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        l = Object.prototype,
        u = c.toString,
        h = l.hasOwnProperty,
        f = RegExp("^" + u.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      t.exports = function(t) {
        return !(!i(t) || o(t)) && (n(t) ? f : a).test(s(t))
      }
    },
    8685(t, e, r) {
      var n = r(1344),
        o = r(4189);
      t.exports = function(t) {
        return o(t) && "[object Set]" == n(t)
      }
    },
    8912(t, e, r) {
      var n = r(6077),
        o = r(5841),
        i = r(4189),
        s = {};
      s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, t.exports = function(t) {
        return i(t) && o(t.length) && !!s[n(t)]
      }
    },
    4829(t, e, r) {
      var n = r(2632),
        o = r(9963),
        i = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!n(t)) return o(t);
        var e = [];
        for (var r in Object(t)) i.call(t, r) && "constructor" != r && e.push(r);
        return e
      }
    },
    9262(t, e, r) {
      var n = r(6130),
        o = r(2632),
        i = r(312),
        s = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!n(t)) return i(t);
        var e = o(t),
          r = [];
        for (var a in t)("constructor" != a || !e && s.call(t, a)) && r.push(a);
        return r
      }
    },
    7745(t, e, r) {
      var n = r(9310),
        o = r(3688),
        i = r(4350),
        s = r(5243),
        a = r(6130),
        c = r(7798),
        l = r(8837);
      t.exports = function t(e, r, u, h, f) {
        e !== r && i(r, function(i, c) {
          if (f || (f = new n), a(i)) s(e, r, c, u, t, h, f);
          else {
            var p = h ? h(l(e, c), i, c + "", e, r, f) : void 0;
            void 0 === p && (p = i), o(e, c, p)
          }
        }, c)
      }
    },
    5243(t, e, r) {
      var n = r(3688),
        o = r(1733),
        i = r(1058),
        s = r(5240),
        a = r(6082),
        c = r(7933),
        l = r(9464),
        u = r(8796),
        h = r(8609),
        f = r(6553),
        p = r(6130),
        m = r(6446),
        g = r(264),
        b = r(8837),
        d = r(1941);
      t.exports = function(t, e, r, y, E, v, _) {
        var T = b(t, r),
          A = b(e, r),
          H = _.get(A);
        if (H) n(t, r, H);
        else {
          var B = v ? v(T, A, r + "", t, e, _) : void 0,
            P = void 0 === B;
          if (P) {
            var S = l(A),
              I = !S && h(A),
              N = !S && !I && g(A);
            B = A, S || I || N ? l(T) ? B = T : u(T) ? B = s(T) : I ? (P = !1, B = o(A, !0)) : N ? (P = !1, B = i(A, !0)) : B = [] : m(A) || c(A) ? (B = T, c(T) ? B = d(T) : p(T) && !f(T) || (B = a(A))) : P = !1
          }
          P && (_.set(A, B), E(B, A, y, v, _), _.delete(A)), n(t, r, B)
        }
      }
    },
    8339(t, e, r) {
      var n = r(515),
        o = r(4088),
        i = r(6218);
      t.exports = function(t, e) {
        return i(o(t, e, n), t + "")
      }
    },
    5193(t, e, r) {
      var n = r(4961),
        o = r(6514),
        i = r(515),
        s = o ? function(t, e) {
          return o(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(e),
            writable: !0
          })
        } : i;
      t.exports = s
    },
    6699(t) {
      t.exports = function(t, e, r) {
        var n = -1,
          o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e), (r = r > o ? o : r) < 0 && (r += o), o = e > r ? 0 : r - e >>> 0, e >>>= 0;
        for (var i = Array(o); ++n < o;) i[n] = t[n + e];
        return i
      }
    },
    8355(t) {
      t.exports = function(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
      }
    },
    8761(t, e, r) {
      var n = r(7432),
        o = r(6233),
        i = r(9464),
        s = r(5733),
        a = n ? n.prototype : void 0,
        c = a ? a.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return o(e, t) + "";
        if (s(e)) return c ? c.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -1 / 0 ? "-0" : r
      }
    },
    7746(t) {
      t.exports = function(t) {
        return function(e) {
          return t(e)
        }
      }
    },
    3704(t, e, r) {
      var n = r(8328),
        o = r(1853),
        i = r(320),
        s = r(1966),
        a = Object.prototype.hasOwnProperty;
      t.exports = function(t, e) {
        var r = -1,
          c = (e = n(e, t)).length;
        if (!c) return !0;
        for (; ++r < c;) {
          var l = s(e[r]);
          if ("__proto__" === l && !a.call(t, "__proto__")) return !1;
          if (("constructor" === l || "prototype" === l) && r < c - 1) return !1
        }
        var u = i(t, e);
        return null == u || delete u[s(o(e))]
      }
    },
    8328(t, e, r) {
      var n = r(9464),
        o = r(3297),
        i = r(5643),
        s = r(8753);
      t.exports = function(t, e) {
        return n(t) ? t : o(t, e) ? [t] : i(s(t))
      }
    },
    5752(t, e, r) {
      var n = r(2562);
      t.exports = function(t) {
        var e = new t.constructor(t.byteLength);
        return new n(e).set(new n(t)), e
      }
    },
    1733(t, e, r) {
      t = r.nmd(t);
      var n = r(5036),
        o = e && !e.nodeType && e,
        i = o && t && !t.nodeType && t,
        s = i && i.exports === o ? n.Buffer : void 0,
        a = s ? s.allocUnsafe : void 0;
      t.exports = function(t, e) {
        if (e) return t.slice();
        var r = t.length,
          n = a ? a(r) : new t.constructor(r);
        return t.copy(n), n
      }
    },
    9842(t, e, r) {
      var n = r(5752);
      t.exports = function(t, e) {
        var r = e ? n(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.byteLength)
      }
    },
    7054(t) {
      var e = /\w*$/;
      t.exports = function(t) {
        var r = new t.constructor(t.source, e.exec(t));
        return r.lastIndex = t.lastIndex, r
      }
    },
    6923(t, e, r) {
      var n = r(7432),
        o = n ? n.prototype : void 0,
        i = o ? o.valueOf : void 0;
      t.exports = function(t) {
        return i ? Object(i.call(t)) : {}
      }
    },
    1058(t, e, r) {
      var n = r(5752);
      t.exports = function(t, e) {
        var r = e ? n(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
      }
    },
    5240(t) {
      t.exports = function(t, e) {
        var r = -1,
          n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
      }
    },
    5634(t, e, r) {
      var n = r(6312),
        o = r(6571);
      t.exports = function(t, e, r, i) {
        var s = !r;
        r || (r = {});
        for (var a = -1, c = e.length; ++a < c;) {
          var l = e[a],
            u = i ? i(r[l], t[l], l, r, t) : void 0;
          void 0 === u && (u = t[l]), s ? o(r, l, u) : n(r, l, u)
        }
        return r
      }
    },
    6752(t, e, r) {
      var n = r(5634),
        o = r(1809);
      t.exports = function(t, e) {
        return n(t, o(t), e)
      }
    },
    4239(t, e, r) {
      var n = r(5634),
        o = r(9242);
      t.exports = function(t, e) {
        return n(t, o(t), e)
      }
    },
    4780(t, e, r) {
      var n = r(5036)["__core-js_shared__"];
      t.exports = n
    },
    1094(t, e, r) {
      var n = r(8339),
        o = r(4661);
      t.exports = function(t) {
        return n(function(e, r) {
          var n = -1,
            i = r.length,
            s = i > 1 ? r[i - 1] : void 0,
            a = i > 2 ? r[2] : void 0;
          for (s = t.length > 3 && "function" == typeof s ? (i--, s) : void 0, a && o(r[0], r[1], a) && (s = i < 3 ? void 0 : s, i = 1), e = Object(e); ++n < i;) {
            var c = r[n];
            c && t(e, c, n, s)
          }
          return e
        })
      }
    },
    2294(t) {
      t.exports = function(t) {
        return function(e, r, n) {
          for (var o = -1, i = Object(e), s = n(e), a = s.length; a--;) {
            var c = s[t ? a : ++o];
            if (!1 === r(i[c], c, i)) break
          }
          return e
        }
      }
    },
    5589(t, e, r) {
      var n = r(6446);
      t.exports = function(t) {
        return n(t) ? void 0 : t
      }
    },
    6514(t, e, r) {
      var n = r(3789),
        o = function() {
          try {
            var t = n(Object, "defineProperty");
            return t({}, "", {}), t
          } catch (t) {}
        }();
      t.exports = o
    },
    565(t, e, r) {
      var n = r(9607),
        o = r(4088),
        i = r(6218);
      t.exports = function(t) {
        return i(o(t, void 0, n), t + "")
      }
    },
    8565(t, e, r) {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      t.exports = n
    },
    1679(t, e, r) {
      var n = r(4090),
        o = r(1809),
        i = r(9125);
      t.exports = function(t) {
        return n(t, i, o)
      }
    },
    6628(t, e, r) {
      var n = r(4090),
        o = r(9242),
        i = r(7798);
      t.exports = function(t) {
        return n(t, i, o)
      }
    },
    5930(t, e, r) {
      var n = r(29);
      t.exports = function(t, e) {
        var r = t.__data__;
        return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
      }
    },
    3789(t, e, r) {
      var n = r(9950),
        o = r(8869);
      t.exports = function(t, e) {
        var r = o(t, e);
        return n(r) ? r : void 0
      }
    },
    4754(t, e, r) {
      var n = r(2344)(Object.getPrototypeOf, Object);
      t.exports = n
    },
    4444(t, e, r) {
      var n = r(7432),
        o = Object.prototype,
        i = o.hasOwnProperty,
        s = o.toString,
        a = n ? n.toStringTag : void 0;
      t.exports = function(t) {
        var e = i.call(t, a),
          r = t[a];
        try {
          t[a] = void 0;
          var n = !0
        } catch (t) {}
        var o = s.call(t);
        return n && (e ? t[a] = r : delete t[a]), o
      }
    },
    1809(t, e, r) {
      var n = r(5773),
        o = r(3864),
        i = Object.prototype.propertyIsEnumerable,
        s = Object.getOwnPropertySymbols,
        a = s ? function(t) {
          return null == t ? [] : (t = Object(t), n(s(t), function(e) {
            return i.call(t, e)
          }))
        } : o;
      t.exports = a
    },
    9242(t, e, r) {
      var n = r(1595),
        o = r(4754),
        i = r(1809),
        s = r(3864),
        a = Object.getOwnPropertySymbols ? function(t) {
          for (var e = []; t;) n(e, i(t)), t = o(t);
          return e
        } : s;
      t.exports = a
    },
    1344(t, e, r) {
      var n = r(7737),
        o = r(16),
        i = r(1767),
        s = r(7802),
        a = r(20),
        c = r(6077),
        l = r(2760),
        u = "[object Map]",
        h = "[object Promise]",
        f = "[object Set]",
        p = "[object WeakMap]",
        m = "[object DataView]",
        g = l(n),
        b = l(o),
        d = l(i),
        y = l(s),
        E = l(a),
        v = c;
      (n && v(new n(new ArrayBuffer(1))) != m || o && v(new o) != u || i && v(i.resolve()) != h || s && v(new s) != f || a && v(new a) != p) && (v = function(t) {
        var e = c(t),
          r = "[object Object]" == e ? t.constructor : void 0,
          n = r ? l(r) : "";
        if (n) switch (n) {
          case g:
            return m;
          case b:
            return u;
          case d:
            return h;
          case y:
            return f;
          case E:
            return p
        }
        return e
      }), t.exports = v
    },
    8869(t) {
      t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
      }
    },
    9763(t, e, r) {
      var n = r(267);
      t.exports = function() {
        this.__data__ = n ? n(null) : {}, this.size = 0
      }
    },
    3879(t) {
      t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
      }
    },
    8150(t, e, r) {
      var n = r(267),
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
    7106(t, e, r) {
      var n = r(267),
        o = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = this.__data__;
        return n ? void 0 !== e[t] : o.call(e, t)
      }
    },
    938(t, e, r) {
      var n = r(267);
      t.exports = function(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e, this
      }
    },
    7928(t) {
      var e = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var r = t.length,
          n = new t.constructor(r);
        return r && "string" == typeof t[0] && e.call(t, "index") && (n.index = t.index, n.input = t.input), n
      }
    },
    4290(t, e, r) {
      var n = r(5752),
        o = r(9842),
        i = r(7054),
        s = r(6923),
        a = r(1058);
      t.exports = function(t, e, r) {
        var c = t.constructor;
        switch (e) {
          case "[object ArrayBuffer]":
            return n(t);
          case "[object Boolean]":
          case "[object Date]":
            return new c(+t);
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
            return a(t, r);
          case "[object Map]":
          case "[object Set]":
            return new c;
          case "[object Number]":
          case "[object String]":
            return new c(t);
          case "[object RegExp]":
            return i(t);
          case "[object Symbol]":
            return s(t)
        }
      }
    },
    6082(t, e, r) {
      var n = r(6309),
        o = r(4754),
        i = r(2632);
      t.exports = function(t) {
        return "function" != typeof t.constructor || i(t) ? {} : n(o(t))
      }
    },
    8352(t, e, r) {
      var n = r(7432),
        o = r(7933),
        i = r(9464),
        s = n ? n.isConcatSpreadable : void 0;
      t.exports = function(t) {
        return i(t) || o(t) || !!(s && t && t[s])
      }
    },
    1574(t) {
      var e = /^(?:0|[1-9]\d*)$/;
      t.exports = function(t, r) {
        var n = typeof t;
        return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && e.test(t)) && t > -1 && t % 1 == 0 && t < r
      }
    },
    4661(t, e, r) {
      var n = r(9679),
        o = r(623),
        i = r(1574),
        s = r(6130);
      t.exports = function(t, e, r) {
        if (!s(r)) return !1;
        var a = typeof e;
        return !!("number" == a ? o(r) && i(e, r.length) : "string" == a && e in r) && n(r[e], t)
      }
    },
    3297(t, e, r) {
      var n = r(9464),
        o = r(5733),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
      t.exports = function(t, e) {
        if (n(t)) return !1;
        var r = typeof t;
        return !("number" != r && "symbol" != r && "boolean" != r && null != t && !o(t)) || s.test(t) || !i.test(t) || null != e && t in Object(e)
      }
    },
    29(t) {
      t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
      }
    },
    3909(t, e, r) {
      var n, o = r(4780),
        i = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
      t.exports = function(t) {
        return !!i && i in t
      }
    },
    2632(t) {
      var e = Object.prototype;
      t.exports = function(t) {
        var r = t && t.constructor;
        return t === ("function" == typeof r && r.prototype || e)
      }
    },
    3023(t) {
      t.exports = function() {
        this.__data__ = [], this.size = 0
      }
    },
    4747(t, e, r) {
      var n = r(5096),
        o = Array.prototype.splice;
      t.exports = function(t) {
        var e = this.__data__,
          r = n(e, t);
        return !(r < 0 || (r == e.length - 1 ? e.pop() : o.call(e, r, 1), --this.size, 0))
      }
    },
    9978(t, e, r) {
      var n = r(5096);
      t.exports = function(t) {
        var e = this.__data__,
          r = n(e, t);
        return r < 0 ? void 0 : e[r][1]
      }
    },
    6734(t, e, r) {
      var n = r(5096);
      t.exports = function(t) {
        return n(this.__data__, t) > -1
      }
    },
    4710(t, e, r) {
      var n = r(5096);
      t.exports = function(t, e) {
        var r = this.__data__,
          o = n(r, t);
        return o < 0 ? (++this.size, r.push([t, e])) : r[o][1] = e, this
      }
    },
    615(t, e, r) {
      var n = r(5072),
        o = r(5332),
        i = r(16);
      t.exports = function() {
        this.size = 0, this.__data__ = {
          hash: new n,
          map: new(i || o),
          string: new n
        }
      }
    },
    9859(t, e, r) {
      var n = r(5930);
      t.exports = function(t) {
        var e = n(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
      }
    },
    5170(t, e, r) {
      var n = r(5930);
      t.exports = function(t) {
        return n(this, t).get(t)
      }
    },
    8470(t, e, r) {
      var n = r(5930);
      t.exports = function(t) {
        return n(this, t).has(t)
      }
    },
    7646(t, e, r) {
      var n = r(5930);
      t.exports = function(t, e) {
        var r = n(this, t),
          o = r.size;
        return r.set(t, e), this.size += r.size == o ? 0 : 1, this
      }
    },
    5647(t, e, r) {
      var n = r(7105);
      t.exports = function(t) {
        var e = n(t, function(t) {
            return 500 === r.size && r.clear(), t
          }),
          r = e.cache;
        return e
      }
    },
    267(t, e, r) {
      var n = r(3789)(Object, "create");
      t.exports = n
    },
    9963(t, e, r) {
      var n = r(2344)(Object.keys, Object);
      t.exports = n
    },
    312(t) {
      t.exports = function(t) {
        var e = [];
        if (null != t)
          for (var r in Object(t)) e.push(r);
        return e
      }
    },
    1172(t, e, r) {
      t = r.nmd(t);
      var n = r(8565),
        o = e && !e.nodeType && e,
        i = o && t && !t.nodeType && t,
        s = i && i.exports === o && n.process,
        a = function() {
          try {
            return i && i.require && i.require("util").types || s && s.binding && s.binding("util")
          } catch (t) {}
        }();
      t.exports = a
    },
    3371(t) {
      var e = Object.prototype.toString;
      t.exports = function(t) {
        return e.call(t)
      }
    },
    2344(t) {
      t.exports = function(t, e) {
        return function(r) {
          return t(e(r))
        }
      }
    },
    4088(t, e, r) {
      var n = r(9822),
        o = Math.max;
      t.exports = function(t, e, r) {
        return e = o(void 0 === e ? t.length - 1 : e, 0),
          function() {
            for (var i = arguments, s = -1, a = o(i.length - e, 0), c = Array(a); ++s < a;) c[s] = i[e + s];
            s = -1;
            for (var l = Array(e + 1); ++s < e;) l[s] = i[s];
            return l[e] = r(c), n(t, this, l)
          }
      }
    },
    320(t, e, r) {
      var n = r(3117),
        o = r(6699);
      t.exports = function(t, e) {
        return e.length < 2 ? t : n(t, o(e, 0, -1))
      }
    },
    5036(t, e, r) {
      var n = r(8565),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = n || o || Function("return this")();
      t.exports = i
    },
    8837(t) {
      t.exports = function(t, e) {
        if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
      }
    },
    6218(t, e, r) {
      var n = r(5193),
        o = r(5366)(n);
      t.exports = o
    },
    5366(t) {
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
    9333(t, e, r) {
      var n = r(5332);
      t.exports = function() {
        this.__data__ = new n, this.size = 0
      }
    },
    1893(t) {
      t.exports = function(t) {
        var e = this.__data__,
          r = e.delete(t);
        return this.size = e.size, r
      }
    },
    9676(t) {
      t.exports = function(t) {
        return this.__data__.get(t)
      }
    },
    6536(t) {
      t.exports = function(t) {
        return this.__data__.has(t)
      }
    },
    3336(t, e, r) {
      var n = r(5332),
        o = r(16),
        i = r(1708);
      t.exports = function(t, e) {
        var r = this.__data__;
        if (r instanceof n) {
          var s = r.__data__;
          if (!o || s.length < 199) return s.push([t, e]), this.size = ++r.size, this;
          r = this.__data__ = new i(s)
        }
        return r.set(t, e), this.size = r.size, this
      }
    },
    5643(t, e, r) {
      var n = r(5647),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        s = n(function(t) {
          var e = [];
          return 46 === t.charCodeAt(0) && e.push(""), t.replace(o, function(t, r, n, o) {
            e.push(n ? o.replace(i, "$1") : r || t)
          }), e
        });
      t.exports = s
    },
    1966(t, e, r) {
      var n = r(5733);
      t.exports = function(t) {
        if ("string" == typeof t || n(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -1 / 0 ? "-0" : e
      }
    },
    2760(t) {
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
    4961(t) {
      t.exports = function(t) {
        return function() {
          return t
        }
      }
    },
    9679(t) {
      t.exports = function(t, e) {
        return t === e || t != t && e != e
      }
    },
    9607(t, e, r) {
      var n = r(5951);
      t.exports = function(t) {
        return null != t && t.length ? n(t, 1) : []
      }
    },
    515(t) {
      t.exports = function(t) {
        return t
      }
    },
    7933(t, e, r) {
      var n = r(5301),
        o = r(4189),
        i = Object.prototype,
        s = i.hasOwnProperty,
        a = i.propertyIsEnumerable,
        c = n(function() {
          return arguments
        }()) ? n : function(t) {
          return o(t) && s.call(t, "callee") && !a.call(t, "callee")
        };
      t.exports = c
    },
    9464(t) {
      var e = Array.isArray;
      t.exports = e
    },
    623(t, e, r) {
      var n = r(6553),
        o = r(5841);
      t.exports = function(t) {
        return null != t && o(t.length) && !n(t)
      }
    },
    8796(t, e, r) {
      var n = r(623),
        o = r(4189);
      t.exports = function(t) {
        return o(t) && n(t)
      }
    },
    8609(t, e, r) {
      t = r.nmd(t);
      var n = r(5036),
        o = r(8042),
        i = e && !e.nodeType && e,
        s = i && t && !t.nodeType && t,
        a = s && s.exports === i ? n.Buffer : void 0,
        c = (a ? a.isBuffer : void 0) || o;
      t.exports = c
    },
    6553(t, e, r) {
      var n = r(6077),
        o = r(6130);
      t.exports = function(t) {
        if (!o(t)) return !1;
        var e = n(t);
        return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
      }
    },
    5841(t) {
      t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
      }
    },
    6043(t, e, r) {
      var n = r(1939),
        o = r(7746),
        i = r(1172),
        s = i && i.isMap,
        a = s ? o(s) : n;
      t.exports = a
    },
    6130(t) {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
      }
    },
    4189(t) {
      t.exports = function(t) {
        return null != t && "object" == typeof t
      }
    },
    6446(t, e, r) {
      var n = r(6077),
        o = r(4754),
        i = r(4189),
        s = Function.prototype,
        a = Object.prototype,
        c = s.toString,
        l = a.hasOwnProperty,
        u = c.call(Object);
      t.exports = function(t) {
        if (!i(t) || "[object Object]" != n(t)) return !1;
        var e = o(t);
        if (null === e) return !0;
        var r = l.call(e, "constructor") && e.constructor;
        return "function" == typeof r && r instanceof r && c.call(r) == u
      }
    },
    6885(t, e, r) {
      var n = r(8685),
        o = r(7746),
        i = r(1172),
        s = i && i.isSet,
        a = s ? o(s) : n;
      t.exports = a
    },
    5733(t, e, r) {
      var n = r(6077),
        o = r(4189);
      t.exports = function(t) {
        return "symbol" == typeof t || o(t) && "[object Symbol]" == n(t)
      }
    },
    264(t, e, r) {
      var n = r(8912),
        o = r(7746),
        i = r(1172),
        s = i && i.isTypedArray,
        a = s ? o(s) : n;
      t.exports = a
    },
    9125(t, e, r) {
      var n = r(6272),
        o = r(4829),
        i = r(623);
      t.exports = function(t) {
        return i(t) ? n(t) : o(t)
      }
    },
    7798(t, e, r) {
      var n = r(6272),
        o = r(9262),
        i = r(623);
      t.exports = function(t) {
        return i(t) ? n(t, !0) : o(t)
      }
    },
    1853(t) {
      t.exports = function(t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0
      }
    },
    7105(t, e, r) {
      var n = r(1708);

      function o(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
        var r = function() {
          var n = arguments,
            o = e ? e.apply(this, n) : n[0],
            i = r.cache;
          if (i.has(o)) return i.get(o);
          var s = t.apply(this, n);
          return r.cache = i.set(o, s) || i, s
        };
        return r.cache = new(o.Cache || n), r
      }
      o.Cache = n, t.exports = o
    },
    6265(t, e, r) {
      var n = r(7745),
        o = r(1094)(function(t, e, r) {
          n(t, e, r)
        });
      t.exports = o
    },
    1972(t, e, r) {
      var n = r(6233),
        o = r(9192),
        i = r(3704),
        s = r(8328),
        a = r(5634),
        c = r(5589),
        l = r(565),
        u = r(6628),
        h = l(function(t, e) {
          var r = {};
          if (null == t) return r;
          var l = !1;
          e = n(e, function(e) {
            return e = s(e, t), l || (l = e.length > 1), e
          }), a(t, u(t), r), l && (r = o(r, 7, c));
          for (var h = e.length; h--;) i(r, e[h]);
          return r
        });
      t.exports = h
    },
    3864(t) {
      t.exports = function() {
        return []
      }
    },
    8042(t) {
      t.exports = function() {
        return !1
      }
    },
    1941(t, e, r) {
      var n = r(5634),
        o = r(7798);
      t.exports = function(t) {
        return n(t, o(t))
      }
    },
    8753(t, e, r) {
      var n = r(8761);
      t.exports = function(t) {
        return null == t ? "" : n(t)
      }
    },
    5686(t, e, r) {
      "use strict";
      r.d(e, {
        Dk: () => de,
        YK: () => ye,
        tz: () => ae
      });
      var n = r(1127);

      function o(t, e) {
        const r = e && e.cache ? e.cache : h,
          n = e && e.serializer ? e.serializer : l;
        return (e && e.strategy ? e.strategy : c)(t, {
          cache: r,
          serializer: n
        })
      }

      function i(t, e, r, n) {
        const o = null == (i = n) || "number" == typeof i || "boolean" == typeof i ? n : r(n);
        var i;
        let s = e.get(o);
        return void 0 === s && (s = t.call(this, n), e.set(o, s)), s
      }

      function s(t, e, r) {
        const n = Array.prototype.slice.call(arguments, 3),
          o = r(n);
        let i = e.get(o);
        return void 0 === i && (i = t.apply(this, n), e.set(o, i)), i
      }

      function a(t, e, r, n, o) {
        return r.bind(e, t, n, o)
      }

      function c(t, e) {
        return a(t, this, 1 === t.length ? i : s, e.cache.create(), e.serializer)
      }
      const l = function() {
        return JSON.stringify(arguments)
      };
      var u = class {
        constructor() {
          this.cache = Object.create(null)
        }
        get(t) {
          return this.cache[t]
        }
        set(t, e) {
          this.cache[t] = e
        }
      };
      const h = {
          create: function() {
            return new u
          }
        },
        f = {
          variadic: function(t, e) {
            return a(t, this, s, e.cache.create(), e.serializer)
          },
          monadic: function(t, e) {
            return a(t, this, i, e.cache.create(), e.serializer)
          }
        },
        p = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function m(t) {
        const e = {};
        return t.replace(p, t => {
          const r = t.length;
          switch (t[0]) {
            case "G":
              e.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "y":
              e.year = 2 === r ? "2-digit" : "numeric";
              break;
            case "Y":
            case "u":
            case "U":
            case "r":
              throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
              throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
              e.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              e.day = ["numeric", "2-digit"][r - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              e.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "e":
              if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              e.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "c":
              if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              e.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "a":
              e.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "H":
              e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "K":
              e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "k":
              e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              e.minute = ["numeric", "2-digit"][r - 1];
              break;
            case "s":
              e.second = ["numeric", "2-digit"][r - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              e.timeZoneName = r < 4 ? "short" : "long";
              break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
          }
          return ""
        }), e
      }
      const g = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function b(t) {
        return t.replace(/^(.*?)-/, "")
      }
      const d = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        y = /^(@+)?(\+|#+)?[rs]?$/g,
        E = /(\*)(0+)|(#+)(0+)|(0+)/g,
        v = /^(0+)$/;

      function _(t) {
        const e = {};
        return "r" === t[t.length - 1] ? e.roundingPriority = "morePrecision" : "s" === t[t.length - 1] && (e.roundingPriority = "lessPrecision"), t.replace(y, function(t, r, n) {
          return "string" != typeof n ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : "+" === n ? e.minimumSignificantDigits = r.length : "#" === r[0] ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), e
      }

      function T(t) {
        switch (t) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };
          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };
          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };
          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always", currencySign: "accounting"
            };
          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };
          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero", currencySign: "accounting"
            };
          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            }
        }
      }

      function A(t) {
        let e;
        if ("E" === t[0] && "E" === t[1] ? (e = {
            notation: "engineering"
          }, t = t.slice(2)) : "E" === t[0] && (e = {
            notation: "scientific"
          }, t = t.slice(1)), e) {
          const r = t.slice(0, 2);
          if ("+!" === r ? (e.signDisplay = "always", t = t.slice(2)) : "+?" === r && (e.signDisplay = "exceptZero", t = t.slice(2)), !v.test(t)) throw new Error("Malformed concise eng/scientific notation");
          e.minimumIntegerDigits = t.length
        }
        return e
      }

      function H(t) {
        return T(t) || {}
      }

      function B(t) {
        let e = {};
        for (const r of t) {
          switch (r.stem) {
            case "percent":
            case "%":
              e.style = "percent";
              continue;
            case "%x100":
              e.style = "percent", e.scale = 100;
              continue;
            case "currency":
              e.style = "currency", e.currency = r.options[0];
              continue;
            case "group-off":
            case ",_":
              e.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              e.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              e.style = "unit", e.unit = b(r.options[0]);
              continue;
            case "compact-short":
            case "K":
              e.notation = "compact", e.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              e.notation = "compact", e.compactDisplay = "long";
              continue;
            case "scientific":
              e = {
                ...e,
                notation: "scientific",
                ...r.options.reduce((t, e) => ({
                  ...t,
                  ...H(e)
                }), {})
              };
              continue;
            case "engineering":
              e = {
                ...e,
                notation: "engineering",
                ...r.options.reduce((t, e) => ({
                  ...t,
                  ...H(e)
                }), {})
              };
              continue;
            case "notation-simple":
              e.notation = "standard";
              continue;
            case "unit-width-narrow":
              e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              e.currencyDisplay = "code", e.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              e.currencyDisplay = "name", e.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              e.currencyDisplay = "symbol";
              continue;
            case "scale":
              e.scale = parseFloat(r.options[0]);
              continue;
            case "rounding-mode-floor":
              e.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              e.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              e.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              e.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              e.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              e.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              e.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (r.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              r.options[0].replace(E, function(t, r, n, o, i, s) {
                if (r) e.minimumIntegerDigits = n.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (s) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (v.test(r.stem)) {
            e.minimumIntegerDigits = r.stem.length;
            continue
          }
          if (d.test(r.stem)) {
            if (r.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            r.stem.replace(d, function(t, r, n, o, i, s) {
              return "*" === n ? e.minimumFractionDigits = r.length : o && "#" === o[0] ? e.maximumFractionDigits = o.length : i && s ? (e.minimumFractionDigits = i.length, e.maximumFractionDigits = i.length + s.length) : (e.minimumFractionDigits = r.length, e.maximumFractionDigits = r.length), ""
            });
            const t = r.options[0];
            "w" === t ? e = {
              ...e,
              trailingZeroDisplay: "stripIfInteger"
            } : t && (e = {
              ...e,
              ..._(t)
            });
            continue
          }
          if (y.test(r.stem)) {
            e = {
              ...e,
              ..._(r.stem)
            };
            continue
          }
          const t = T(r.stem);
          t && (e = {
            ...e,
            ...t
          });
          const n = A(r.stem);
          n && (e = {
            ...e,
            ...n
          })
        }
        return e
      }
      let P = function(t) {
          return t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", t
        }({}),
        S = function(t) {
          return t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag", t
        }({}),
        I = function(t) {
          return t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime", t
        }({});

      function N(t) {
        return t.type === S.literal
      }

      function w(t) {
        return t.type === S.argument
      }

      function L(t) {
        return t.type === S.number
      }

      function O(t) {
        return t.type === S.date
      }

      function x(t) {
        return t.type === S.time
      }

      function R(t) {
        return t.type === S.select
      }

      function M(t) {
        return t.type === S.plural
      }

      function j(t) {
        return t.type === S.pound
      }

      function C(t) {
        return t.type === S.tag
      }

      function D(t) {
        return !(!t || "object" != typeof t || t.type !== I.number)
      }

      function F(t) {
        return !(!t || "object" != typeof t || t.type !== I.dateTime)
      }
      const U = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        G = {
          "001": ["H", "h"],
          419: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AD: ["H", "hB"],
          AE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AI: ["H", "h", "hb", "hB"],
          AL: ["h", "H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AR: ["h", "H", "hB", "hb"],
          AS: ["h", "H"],
          AT: ["H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          AW: ["H", "hB"],
          AX: ["H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BB: ["h", "hb", "H", "hB"],
          BD: ["h", "hB", "H"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BG: ["H", "hB", "h"],
          BH: ["h", "hB", "hb", "H"],
          BI: ["H", "h"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BN: ["hb", "hB", "h", "H"],
          BO: ["h", "H", "hB", "hb"],
          BQ: ["H"],
          BR: ["H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          BT: ["h", "H"],
          BW: ["H", "h", "hb", "hB"],
          BY: ["H", "h"],
          BZ: ["H", "h", "hb", "hB"],
          CA: ["h", "hb", "H", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CD: ["hB", "H"],
          CF: ["H", "h", "hB"],
          CG: ["H", "hB"],
          CH: ["H", "hB", "h"],
          CI: ["H", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CL: ["h", "H", "hB", "hb"],
          CM: ["H", "h", "hB"],
          CN: ["H", "hB", "hb", "h"],
          CO: ["h", "H", "hB", "hb"],
          CP: ["H"],
          CR: ["h", "H", "hB", "hb"],
          CU: ["h", "H", "hB", "hb"],
          CV: ["H", "hB"],
          CW: ["H", "hB"],
          CX: ["H", "h", "hb", "hB"],
          CY: ["h", "H", "hb", "hB"],
          CZ: ["H"],
          DE: ["H", "hB"],
          DG: ["H", "h", "hb", "hB"],
          DJ: ["h", "H"],
          DK: ["H"],
          DM: ["h", "hb", "H", "hB"],
          DO: ["h", "H", "hB", "hb"],
          DZ: ["h", "hB", "hb", "H"],
          EA: ["H", "h", "hB", "hb"],
          EC: ["h", "H", "hB", "hb"],
          EE: ["H", "hB"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          ER: ["h", "H"],
          ES: ["H", "hB", "h", "hb"],
          ET: ["hB", "hb", "h", "H"],
          FI: ["H"],
          FJ: ["h", "hb", "H", "hB"],
          FK: ["H", "h", "hb", "hB"],
          FM: ["h", "hb", "H", "hB"],
          FO: ["H", "h"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GE: ["H", "hB", "h"],
          GF: ["H", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GH: ["h", "H"],
          GI: ["H", "h", "hb", "hB"],
          GL: ["H", "h"],
          GM: ["h", "hb", "H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GQ: ["H", "hB", "h", "hb"],
          GR: ["h", "H", "hb", "hB"],
          GS: ["H", "h", "hb", "hB"],
          GT: ["h", "H", "hB", "hb"],
          GU: ["h", "hb", "H", "hB"],
          GW: ["H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          HK: ["h", "hB", "hb", "H"],
          HN: ["h", "H", "hB", "hb"],
          HR: ["H", "hB"],
          HU: ["H", "h"],
          IC: ["H", "h", "hB", "hb"],
          ID: ["H"],
          IE: ["H", "h", "hb", "hB"],
          IL: ["H", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IN: ["h", "H"],
          IO: ["H", "h", "hb", "hB"],
          IQ: ["h", "hB", "hb", "H"],
          IR: ["hB", "H"],
          IS: ["H"],
          IT: ["H", "hB"],
          JE: ["H", "h", "hb", "hB"],
          JM: ["h", "hb", "H", "hB"],
          JO: ["h", "hB", "hb", "H"],
          JP: ["H", "K", "h"],
          KE: ["hB", "hb", "H", "h"],
          KG: ["H", "h", "hB", "hb"],
          KH: ["hB", "h", "H", "hb"],
          KI: ["h", "hb", "H", "hB"],
          KM: ["H", "h", "hB", "hb"],
          KN: ["h", "hb", "H", "hB"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          KW: ["h", "hB", "hb", "H"],
          KY: ["h", "hb", "H", "hB"],
          KZ: ["H", "hB"],
          LA: ["H", "hb", "hB", "h"],
          LB: ["h", "hB", "hb", "H"],
          LC: ["h", "hb", "H", "hB"],
          LI: ["H", "hB", "h"],
          LK: ["H", "h", "hB", "hb"],
          LR: ["h", "hb", "H", "hB"],
          LS: ["h", "H"],
          LT: ["H", "h", "hb", "hB"],
          LU: ["H", "h", "hB"],
          LV: ["H", "hB", "hb", "h"],
          LY: ["h", "hB", "hb", "H"],
          MA: ["H", "h", "hB", "hb"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          ME: ["H", "hB", "h"],
          MF: ["H", "hB"],
          MG: ["H", "h"],
          MH: ["h", "hb", "H", "hB"],
          MK: ["H", "h", "hb", "hB"],
          ML: ["H"],
          MM: ["hB", "hb", "H", "h"],
          MN: ["H", "h", "hb", "hB"],
          MO: ["h", "hB", "hb", "H"],
          MP: ["h", "hb", "H", "hB"],
          MQ: ["H", "hB"],
          MR: ["h", "hB", "hb", "H"],
          MS: ["H", "h", "hb", "hB"],
          MT: ["H", "h"],
          MU: ["H", "h"],
          MV: ["H", "h"],
          MW: ["h", "hb", "H", "hB"],
          MX: ["h", "H", "hB", "hb"],
          MY: ["hb", "hB", "h", "H"],
          MZ: ["H", "hB"],
          NA: ["h", "H", "hB", "hb"],
          NC: ["H", "hB"],
          NE: ["H"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NI: ["h", "H", "hB", "hb"],
          NL: ["H", "hB"],
          NO: ["H", "h"],
          NP: ["H", "h", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          OM: ["h", "hB", "hb", "H"],
          PA: ["h", "H", "hB", "hb"],
          PE: ["h", "H", "hB", "hb"],
          PF: ["H", "h", "hB"],
          PG: ["h", "H"],
          PH: ["h", "hB", "hb", "H"],
          PK: ["h", "hB", "H"],
          PL: ["H", "h"],
          PM: ["H", "hB"],
          PN: ["H", "h", "hb", "hB"],
          PR: ["h", "H", "hB", "hb"],
          PS: ["h", "hB", "hb", "H"],
          PT: ["H", "hB"],
          PW: ["h", "H"],
          PY: ["h", "H", "hB", "hb"],
          QA: ["h", "hB", "hb", "H"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          RS: ["H", "hB", "h"],
          RU: ["H"],
          RW: ["H", "h"],
          SA: ["h", "hB", "hb", "H"],
          SB: ["h", "hb", "H", "hB"],
          SC: ["H", "h", "hB"],
          SD: ["h", "hB", "hb", "H"],
          SE: ["H"],
          SG: ["h", "hb", "H", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SI: ["H", "hB"],
          SJ: ["H"],
          SK: ["H"],
          SL: ["h", "hb", "H", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          SO: ["h", "H"],
          SR: ["H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          ST: ["H", "hB"],
          SV: ["h", "H", "hB", "hb"],
          SX: ["H", "h", "hb", "hB"],
          SY: ["h", "hB", "hb", "H"],
          SZ: ["h", "hb", "H", "hB"],
          TA: ["H", "h", "hb", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TD: ["h", "H", "hB"],
          TF: ["H", "h", "hB"],
          TG: ["H", "hB"],
          TH: ["H", "h"],
          TJ: ["H", "h"],
          TL: ["H", "hB", "hb", "h"],
          TM: ["H", "h"],
          TN: ["h", "hB", "hb", "H"],
          TO: ["h", "H"],
          TR: ["H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          TW: ["hB", "hb", "h", "H"],
          TZ: ["hB", "hb", "H", "h"],
          UA: ["H", "hB", "h"],
          UG: ["hB", "hb", "H", "h"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          UY: ["h", "H", "hB", "hb"],
          UZ: ["H", "hB", "h"],
          VA: ["H", "h", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VE: ["h", "H", "hB", "hb"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          VN: ["H", "h"],
          VU: ["h", "H"],
          WF: ["H", "hB"],
          WS: ["h", "H"],
          XK: ["H", "hB", "h"],
          YE: ["h", "hB", "hb", "H"],
          YT: ["H", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          ZW: ["H", "h"],
          "af-ZA": ["H", "h", "hB", "hb"],
          "ar-001": ["h", "hB", "hb", "H"],
          "ca-ES": ["H", "h", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          "en-HK": ["h", "hb", "H", "hB"],
          "en-IL": ["H", "h", "hb", "hB"],
          "en-MY": ["h", "hb", "H", "hB"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "hi-IN": ["hB", "h", "H"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          "kn-IN": ["hB", "h", "H"],
          "ku-SY": ["H", "hB"],
          "ml-IN": ["hB", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          "ta-IN": ["hB", "h", "hb", "H"],
          "te-IN": ["hB", "h", "H"],
          "zu-ZA": ["H", "hB", "hb", "h"]
        };

      function k(t) {
        let e = t.hourCycle;
        if (void 0 === e && t.hourCycles && t.hourCycles.length && (e = t.hourCycles[0]), e) switch (e) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        const r = t.language;
        let n;
        return "root" !== r && (n = t.maximize().region), (G[n || ""] || G[r || ""] || G[`${r}-001`] || G["001"])[0]
      }
      const $ = new RegExp(`^${U.source}*`),
        V = new RegExp(`${U.source}*$`);

      function X(t, e) {
        return {
          start: t,
          end: e
        }
      }
      const z = !!Object.fromEntries,
        K = !!String.prototype.trimStart,
        Z = !!String.prototype.trimEnd,
        Y = z ? Object.fromEntries : function(t) {
          const e = {};
          for (const [r, n] of t) e[r] = n;
          return e
        },
        W = K ? function(t) {
          return t.trimStart()
        } : function(t) {
          return t.replace($, "")
        },
        q = Z ? function(t) {
          return t.trimEnd()
        } : function(t) {
          return t.replace(V, "")
        },
        J = new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
      var Q = class {
        constructor(t, e = {}) {
          this.message = t, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!e.ignoreTag, this.locale = e.locale, this.requiresOtherClause = !!e.requiresOtherClause, this.shouldParseSkeletons = !!e.shouldParseSkeletons
        }
        parse() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }
        parseMessage(t, e, r) {
          let n = [];
          for (; !this.isEOF();) {
            const o = this.char();
            if (123 === o) {
              const e = this.parseArgument(t, r);
              if (e.err) return e;
              n.push(e.val)
            } else {
              if (125 === o && t > 0) break;
              if (35 !== o || "plural" !== e && "selectordinal" !== e) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(P.UNMATCHED_CLOSING_TAG, X(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && tt(this.peek() || 0)) {
                  const r = this.parseTag(t, e);
                  if (r.err) return r;
                  n.push(r.val)
                } else {
                  const r = this.parseLiteral(t, e);
                  if (r.err) return r;
                  n.push(r.val)
                }
              } else {
                const t = this.clonePosition();
                this.bump(), n.push({
                  type: S.pound,
                  location: X(t, this.clonePosition())
                })
              }
            }
          }
          return {
            val: n,
            err: null
          }
        }
        parseTag(t, e) {
          const r = this.clonePosition();
          this.bump();
          const n = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: S.literal,
              value: `<${n}/>`,
              location: X(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            const o = this.parseMessage(t + 1, e, !0);
            if (o.err) return o;
            const i = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !tt(this.char())) return this.error(P.INVALID_TAG, X(s, this.clonePosition()));
              const t = this.clonePosition();
              return n !== this.parseTagName() ? this.error(P.UNMATCHED_CLOSING_TAG, X(t, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: S.tag,
                  value: n,
                  children: i,
                  location: X(r, this.clonePosition())
                },
                err: null
              } : this.error(P.INVALID_TAG, X(s, this.clonePosition())))
            }
            return this.error(P.UNCLOSED_TAG, X(r, this.clonePosition()))
          }
          return this.error(P.INVALID_TAG, X(r, this.clonePosition()))
        }
        parseTagName() {
          const t = this.offset();
          for (this.bump(); !this.isEOF() && et(this.char());) this.bump();
          return this.message.slice(t, this.offset())
        }
        parseLiteral(t, e) {
          const r = this.clonePosition();
          let n = "";
          for (;;) {
            const r = this.tryParseQuote(e);
            if (r) {
              n += r;
              continue
            }
            const o = this.tryParseUnquoted(t, e);
            if (o) {
              n += o;
              continue
            }
            const i = this.tryParseLeftAngleBracket();
            if (!i) break;
            n += i
          }
          const o = X(r, this.clonePosition());
          return {
            val: {
              type: S.literal,
              value: n,
              location: o
            },
            err: null
          }
        }
        tryParseLeftAngleBracket() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (tt(t = this.peek() || 0) || 47 === t) ? null : (this.bump(), "<");
          var t
        }
        tryParseQuote(t) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === t || "selectordinal" === t) break;
              return null;
            default:
              return null
          }
          this.bump();
          const e = [this.char()];
          for (this.bump(); !this.isEOF();) {
            const t = this.char();
            if (39 === t) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              e.push(39), this.bump()
            } else e.push(t);
            this.bump()
          }
          return String.fromCodePoint(...e)
        }
        tryParseUnquoted(t, e) {
          if (this.isEOF()) return null;
          const r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === e || "selectordinal" === e) || 125 === r && t > 0 ? null : (this.bump(), String.fromCodePoint(r))
        }
        parseArgument(t, e) {
          const r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, X(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(P.EMPTY_ARGUMENT, X(r, this.clonePosition()));
          let n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(P.MALFORMED_ARGUMENT, X(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, X(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: S.argument,
                  value: n,
                  location: X(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, X(r, this.clonePosition())) : this.parseArgumentOptions(t, e, n, r);
            default:
              return this.error(P.MALFORMED_ARGUMENT, X(r, this.clonePosition()))
          }
        }
        parseIdentifierIfPossible() {
          const t = this.clonePosition(),
            e = this.offset(),
            r = (n = this.message, o = e, J.lastIndex = o, J.exec(n)[1] ?? "");
          var n, o;
          const i = e + r.length;
          return this.bumpTo(i), {
            value: r,
            location: X(t, this.clonePosition())
          }
        }
        parseArgumentOptions(t, e, r, n) {
          let o = this.clonePosition(),
            i = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (i) {
            case "":
              return this.error(P.EXPECT_ARGUMENT_TYPE, X(o, s));
            case "number":
            case "date":
            case "time": {
              this.bumpSpace();
              let t = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                const e = this.clonePosition(),
                  r = this.parseSimpleArgStyleIfPossible();
                if (r.err) return r;
                const n = q(r.val);
                if (0 === n.length) return this.error(P.EXPECT_ARGUMENT_STYLE, X(this.clonePosition(), this.clonePosition()));
                t = {
                  style: n,
                  styleLocation: X(e, this.clonePosition())
                }
              }
              const e = this.tryParseArgumentClose(n);
              if (e.err) return e;
              const o = X(n, this.clonePosition());
              if (t && t.style.startsWith("::")) {
                let e = W(t.style.slice(2));
                if ("number" === i) {
                  const n = this.parseNumberSkeletonFromString(e, t.styleLocation);
                  return n.err ? n : {
                    val: {
                      type: S.number,
                      value: r,
                      location: o,
                      style: n.val
                    },
                    err: null
                  }
                } {
                  if (0 === e.length) return this.error(P.EXPECT_DATE_TIME_SKELETON, o);
                  let n = e;
                  this.locale && (n = function(t, e) {
                    let r = "";
                    for (let n = 0; n < t.length; n++) {
                      const o = t.charAt(n);
                      if ("j" === o) {
                        let i = 0;
                        for (; n + 1 < t.length && t.charAt(n + 1) === o;) i++, n++;
                        let s = 1 + (1 & i),
                          a = i < 2 ? 1 : 3 + (i >> 1),
                          c = "a",
                          l = k(e);
                        for ("H" != l && "k" != l || (a = 0); a-- > 0;) r += c;
                        for (; s-- > 0;) r = l + r
                      } else r += "J" === o ? "H" : o
                    }
                    return r
                  }(e, this.locale));
                  const s = {
                    type: I.dateTime,
                    pattern: n,
                    location: t.styleLocation,
                    parsedOptions: this.shouldParseSkeletons ? m(n) : {}
                  };
                  return {
                    val: {
                      type: "date" === i ? S.date : S.time,
                      value: r,
                      location: o,
                      style: s
                    },
                    err: null
                  }
                }
              }
              return {
                val: {
                  type: "number" === i ? S.number : "date" === i ? S.date : S.time,
                  value: r,
                  location: o,
                  style: t?.style ?? null
                },
                err: null
              }
            }
            case "plural":
            case "selectordinal":
            case "select": {
              const o = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(P.EXPECT_SELECT_ARGUMENT_OPTIONS, X(o, {
                ...o
              }));
              this.bumpSpace();
              let s = this.parseIdentifierIfPossible(),
                a = 0;
              if ("select" !== i && "offset" === s.value) {
                if (!this.bumpIf(":")) return this.error(P.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, X(this.clonePosition(), this.clonePosition()));
                this.bumpSpace();
                const t = this.tryParseDecimalInteger(P.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, P.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                if (t.err) return t;
                this.bumpSpace(), s = this.parseIdentifierIfPossible(), a = t.val
              }
              const c = this.tryParsePluralOrSelectOptions(t, i, e, s);
              if (c.err) return c;
              const l = this.tryParseArgumentClose(n);
              if (l.err) return l;
              const u = X(n, this.clonePosition());
              return "select" === i ? {
                val: {
                  type: S.select,
                  value: r,
                  options: Y(c.val),
                  location: u
                },
                err: null
              } : {
                val: {
                  type: S.plural,
                  value: r,
                  options: Y(c.val),
                  offset: a,
                  pluralType: "plural" === i ? "cardinal" : "ordinal",
                  location: u
                },
                err: null
              }
            }
            default:
              return this.error(P.INVALID_ARGUMENT_TYPE, X(o, s))
          }
        }
        tryParseArgumentClose(t) {
          return this.isEOF() || 125 !== this.char() ? this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, X(t, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }
        parseSimpleArgStyleIfPossible() {
          let t = 0;
          const e = this.clonePosition();
          for (; !this.isEOF();) switch (this.char()) {
            case 39: {
              this.bump();
              let t = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(P.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, X(t, this.clonePosition()));
              this.bump();
              break
            }
            case 123:
              t += 1, this.bump();
              break;
            case 125:
              if (!(t > 0)) return {
                val: this.message.slice(e.offset, this.offset()),
                err: null
              };
              t -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(e.offset, this.offset()),
            err: null
          }
        }
        parseNumberSkeletonFromString(t, e) {
          let r = [];
          try {
            r = function(t) {
              if (0 === t.length) throw new Error("Number skeleton cannot be empty");
              const e = t.split(g).filter(t => t.length > 0),
                r = [];
              for (const t of e) {
                let e = t.split("/");
                if (0 === e.length) throw new Error("Invalid number skeleton");
                const [n, ...o] = e;
                for (const t of o)
                  if (0 === t.length) throw new Error("Invalid number skeleton");
                r.push({
                  stem: n,
                  options: o
                })
              }
              return r
            }(t)
          } catch {
            return this.error(P.INVALID_NUMBER_SKELETON, e)
          }
          return {
            val: {
              type: I.number,
              tokens: r,
              location: e,
              parsedOptions: this.shouldParseSkeletons ? B(r) : {}
            },
            err: null
          }
        }
        tryParsePluralOrSelectOptions(t, e, r, n) {
          let o = !1;
          const i = [],
            s = new Set;
          let {
            value: a,
            location: c
          } = n;
          for (;;) {
            if (0 === a.length) {
              const t = this.clonePosition();
              if ("select" === e || !this.bumpIf("=")) break; {
                const e = this.tryParseDecimalInteger(P.EXPECT_PLURAL_ARGUMENT_SELECTOR, P.INVALID_PLURAL_ARGUMENT_SELECTOR);
                if (e.err) return e;
                c = X(t, this.clonePosition()), a = this.message.slice(t.offset, this.offset())
              }
            }
            if (s.has(a)) return this.error("select" === e ? P.DUPLICATE_SELECT_ARGUMENT_SELECTOR : P.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === a && (o = !0), this.bumpSpace();
            const n = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === e ? P.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : P.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, X(this.clonePosition(), this.clonePosition()));
            const l = this.parseMessage(t + 1, e, r);
            if (l.err) return l;
            const u = this.tryParseArgumentClose(n);
            if (u.err) return u;
            i.push([a, {
              value: l.val,
              location: X(n, this.clonePosition())
            }]), s.add(a), this.bumpSpace(), ({
              value: a,
              location: c
            } = this.parseIdentifierIfPossible())
          }
          return 0 === i.length ? this.error("select" === e ? P.EXPECT_SELECT_ARGUMENT_SELECTOR : P.EXPECT_PLURAL_ARGUMENT_SELECTOR, X(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(P.MISSING_OTHER_CLAUSE, X(this.clonePosition(), this.clonePosition())) : {
            val: i,
            err: null
          }
        }
        tryParseDecimalInteger(t, e) {
          let r = 1;
          const n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          let o = !1,
            i = 0;
          for (; !this.isEOF();) {
            const t = this.char();
            if (!(t >= 48 && t <= 57)) break;
            o = !0, i = 10 * i + (t - 48), this.bump()
          }
          const s = X(n, this.clonePosition());
          return o ? (i *= r, Number.isSafeInteger(i) ? {
            val: i,
            err: null
          } : this.error(e, s)) : this.error(t, s)
        }
        offset() {
          return this.position.offset
        }
        isEOF() {
          return this.offset() === this.message.length
        }
        clonePosition() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }
        char() {
          const t = this.position.offset;
          if (t >= this.message.length) throw Error("out of bound");
          const e = this.message.codePointAt(t);
          if (void 0 === e) throw Error(`Offset ${t} is at invalid UTF-16 code unit boundary`);
          return e
        }
        error(t, e) {
          return {
            val: null,
            err: {
              kind: t,
              message: this.message,
              location: e
            }
          }
        }
        bump() {
          if (this.isEOF()) return;
          const t = this.char();
          10 === t ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2)
        }
        bumpIf(t) {
          if (this.message.startsWith(t, this.offset())) {
            for (let e = 0; e < t.length; e++) this.bump();
            return !0
          }
          return !1
        }
        bumpUntil(t) {
          const e = this.offset(),
            r = this.message.indexOf(t, e);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }
        bumpTo(t) {
          if (this.offset() > t) throw Error(`targetOffset ${t} must be greater than or equal to the current offset ${this.offset()}`);
          for (t = Math.min(t, this.message.length);;) {
            const e = this.offset();
            if (e === t) break;
            if (e > t) throw Error(`targetOffset ${t} is at invalid UTF-16 code unit boundary`);
            if (this.bump(), this.isEOF()) break
          }
        }
        bumpSpace() {
          for (; !this.isEOF() && rt(this.char());) this.bump()
        }
        peek() {
          if (this.isEOF()) return null;
          const t = this.char(),
            e = this.offset();
          return this.message.charCodeAt(e + (t >= 65536 ? 2 : 1)) ?? null
        }
      };

      function tt(t) {
        return t >= 97 && t <= 122 || t >= 65 && t <= 90
      }

      function et(t) {
        return 45 === t || 46 === t || t >= 48 && t <= 57 || 95 === t || t >= 97 && t <= 122 || t >= 65 && t <= 90 || 183 == t || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039
      }

      function rt(t) {
        return t >= 9 && t <= 13 || 32 === t || 133 === t || t >= 8206 && t <= 8207 || 8232 === t || 8233 === t
      }

      function nt(t) {
        t.forEach(t => {
          if (delete t.location, R(t) || M(t))
            for (const e in t.options) delete t.options[e].location, nt(t.options[e].value);
          else L(t) && D(t.style) || (O(t) || x(t)) && F(t.style) ? delete t.style.location : C(t) && nt(t.children)
        })
      }

      function ot(t, e = {}) {
        e = {
          shouldParseSkeletons: !0,
          requiresOtherClause: !0,
          ...e
        };
        const r = new Q(t, e).parse();
        if (r.err) {
          const t = SyntaxError(P[r.err.kind]);
          throw t.location = r.err.location, t.originalMessage = r.err.message, t
        }
        return e?.captureLocation || nt(r.val), r.val
      }
      let it = function(t) {
        return t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API", t
      }({});
      var st = class extends Error {
          constructor(t, e, r) {
            super(t), this.code = e, this.originalMessage = r
          }
          toString() {
            return `[formatjs Error: ${this.code}] ${this.message}`
          }
        },
        at = class extends st {
          constructor(t, e, r, n) {
            super(`Invalid values for "${t}": "${e}". Options are "${Object.keys(r).join('", "')}"`, it.INVALID_VALUE, n)
          }
        },
        ct = class extends st {
          constructor(t, e, r) {
            super(`Value for "${t}" must be of type ${e}`, it.INVALID_VALUE, r)
          }
        },
        lt = class extends st {
          constructor(t, e) {
            super(`The intl string context variable "${t}" was not provided to the string "${e}"`, it.MISSING_VALUE, e)
          }
        };
      let ut = function(t) {
        return t[t.literal = 0] = "literal", t[t.object = 1] = "object", t
      }({});

      function ht(t) {
        return "function" == typeof t
      }

      function ft(t, e, r, n, o, i, s) {
        if (1 === t.length && N(t[0])) return [{
          type: ut.literal,
          value: t[0].value
        }];
        const a = [];
        for (const c of t) {
          if (N(c)) {
            a.push({
              type: ut.literal,
              value: c.value
            });
            continue
          }
          if (j(c)) {
            "number" == typeof i && a.push({
              type: ut.literal,
              value: r.getNumberFormat(e).format(i)
            });
            continue
          }
          const {
            value: t
          } = c;
          if (!o || !(t in o)) throw new lt(t, s);
          let l = o[t];
          if (w(c)) l && "string" != typeof l && "number" != typeof l && "bigint" != typeof l || (l = "string" == typeof l || "number" == typeof l || "bigint" == typeof l ? String(l) : ""), a.push({
            type: "string" == typeof l ? ut.literal : ut.object,
            value: l
          });
          else {
            if (O(c)) {
              const t = "string" == typeof c.style ? n.date[c.style] : F(c.style) ? c.style.parsedOptions : void 0;
              a.push({
                type: ut.literal,
                value: r.getDateTimeFormat(e, t).format(l)
              });
              continue
            }
            if (x(c)) {
              const t = "string" == typeof c.style ? n.time[c.style] : F(c.style) ? c.style.parsedOptions : n.time.medium;
              a.push({
                type: ut.literal,
                value: r.getDateTimeFormat(e, t).format(l)
              });
              continue
            }
            if (L(c)) {
              const t = "string" == typeof c.style ? n.number[c.style] : D(c.style) ? c.style.parsedOptions : void 0;
              if (t && t.scale) {
                const e = t.scale || 1;
                if ("bigint" == typeof l) {
                  if (!Number.isInteger(e)) throw new TypeError(`Cannot apply fractional scale ${e} to bigint value. Scale must be an integer when formatting bigint.`);
                  l *= BigInt(e)
                } else l *= e
              }
              a.push({
                type: ut.literal,
                value: r.getNumberFormat(e, t).format(l)
              });
              continue
            }
            if (C(c)) {
              const {
                children: t,
                value: l
              } = c, u = o[l];
              if (!ht(u)) throw new ct(l, "function", s);
              let h = u(ft(t, e, r, n, o, i).map(t => t.value));
              Array.isArray(h) || (h = [h]), a.push(...h.map(t => ({
                type: "string" == typeof t ? ut.literal : ut.object,
                value: t
              })))
            }
            if (R(c)) {
              const t = l,
                i = (Object.prototype.hasOwnProperty.call(c.options, t) ? c.options[t] : void 0) || c.options.other;
              if (!i) throw new at(c.value, l, Object.keys(c.options), s);
              a.push(...ft(i.value, e, r, n, o));
              continue
            }
            if (M(c)) {
              const t = `=${l}`;
              let i = Object.prototype.hasOwnProperty.call(c.options, t) ? c.options[t] : void 0;
              if (!i) {
                if (!Intl.PluralRules) throw new st('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', it.MISSING_INTL_API, s);
                const t = "bigint" == typeof l ? Number(l) : l,
                  n = r.getPluralRules(e, {
                    type: c.pluralType
                  }).select(t - (c.offset || 0));
                i = (Object.prototype.hasOwnProperty.call(c.options, n) ? c.options[n] : void 0) || c.options.other
              }
              if (!i) throw new at(c.value, l, Object.keys(c.options), s);
              const u = "bigint" == typeof l ? Number(l) : l;
              a.push(...ft(i.value, e, r, n, o, u - (c.offset || 0)));
              continue
            }
          }
        }
        return (c = a).length < 2 ? c : c.reduce((t, e) => {
          const r = t[t.length - 1];
          return r && r.type === ut.literal && e.type === ut.literal ? r.value += e.value : t.push(e), t
        }, []);
        var c
      }

      function pt(t) {
        return {
          create: () => ({
            get: e => t[e],
            set(e, r) {
              t[e] = r
            }
          })
        }
      }
      var mt = class t {
        constructor(e, r = t.defaultLocale, n, i) {
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = t => {
              const e = this.formatToParts(t);
              if (1 === e.length) return e[0].value;
              const r = e.reduce((t, e) => (t.length && e.type === ut.literal && "string" == typeof t[t.length - 1] ? t[t.length - 1] += e.value : t.push(e.value), t), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = t => ft(this.ast, this.locales, this.formatters, this.formats, t, void 0, this.message), this.resolvedOptions = () => ({
              locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0]
            }), this.getAst = () => this.ast, this.locales = r, this.resolvedLocale = t.resolveLocale(r), "string" == typeof e) {
            if (this.message = e, !t.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            const {
              ...r
            } = i || {};
            this.ast = t.__parse(e, {
              ...r,
              locale: this.resolvedLocale
            })
          } else this.ast = e;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          var s, a;
          this.formats = (s = t.formats, (a = n) ? Object.keys(s).reduce((t, e) => {
            var r, n;
            return t[e] = (r = s[e], (n = a[e]) ? {
              ...r,
              ...n,
              ...Object.keys(r).reduce((t, e) => (t[e] = {
                ...r[e],
                ...n[e]
              }, t), {})
            } : r), t
          }, {
            ...s
          }) : s), this.formatters = i && i.formatters || function(t = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }) {
            return {
              getNumberFormat: o((...t) => new Intl.NumberFormat(...t), {
                cache: pt(t.number),
                strategy: f.variadic
              }),
              getDateTimeFormat: o((...t) => new Intl.DateTimeFormat(...t), {
                cache: pt(t.dateTime),
                strategy: f.variadic
              }),
              getPluralRules: o((...t) => new Intl.PluralRules(...t), {
                cache: pt(t.pluralRules),
                strategy: f.variadic
              })
            }
          }(this.formatterCache)
        }
        static {
          this.memoizedDefaultLocale = null
        }
        static get defaultLocale() {
          return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), t.memoizedDefaultLocale
        }
        static {
          this.resolveLocale = t => {
            if (void 0 === Intl.Locale) return;
            const e = Intl.NumberFormat.supportedLocalesOf(t);
            return e.length > 0 ? new Intl.Locale(e[0]) : new Intl.Locale("string" == typeof t ? t : t[0])
          }
        }
        static {
          this.__parse = ot
        }
        static {
          this.formats = {
            number: {
              integer: {
                maximumFractionDigits: 0
              },
              currency: {
                style: "currency"
              },
              percent: {
                style: "percent"
              }
            },
            date: {
              short: {
                month: "numeric",
                day: "numeric",
                year: "2-digit"
              },
              medium: {
                month: "short",
                day: "numeric",
                year: "numeric"
              },
              long: {
                month: "long",
                day: "numeric",
                year: "numeric"
              },
              full: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
              }
            },
            time: {
              short: {
                hour: "numeric",
                minute: "numeric"
              },
              medium: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
              },
              long: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
              },
              full: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
              }
            }
          }
        }
      };
      let gt = function(t) {
        return t.FORMAT_ERROR = "FORMAT_ERROR", t.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", t.INVALID_CONFIG = "INVALID_CONFIG", t.MISSING_DATA = "MISSING_DATA", t.MISSING_TRANSLATION = "MISSING_TRANSLATION", t
      }({});
      var bt = class t extends Error {
          constructor(e, r, n) {
            const o = n ? n instanceof Error ? n : new Error(String(n)) : void 0;
            super(`[@formatjs/intl Error ${e}] ${r}\n${o?`\n${o.message}\n${o.stack}`:""}`), this.code = e, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t)
          }
        },
        dt = class extends bt {
          constructor(t, e) {
            super(gt.UNSUPPORTED_FORMATTER, t, e)
          }
        },
        yt = class extends bt {
          constructor(t, e) {
            super(gt.INVALID_CONFIG, t, e)
          }
        },
        Et = class extends bt {
          constructor(t, e) {
            super(gt.MISSING_DATA, t, e)
          }
        },
        vt = class extends bt {
          constructor(t, e, r) {
            super(gt.FORMAT_ERROR, `${t}\nLocale: ${e}\n`, r), this.locale = e
          }
        },
        _t = class extends vt {
          constructor(t, e, r, n) {
            super(`${t}\nMessageID: ${r?.id}\nDefault Message: ${r?.defaultMessage}\nDescription: ${r?.description}\n`, e, n), this.descriptor = r, this.locale = e
          }
        },
        Tt = class extends bt {
          constructor(t, e) {
            super(gt.MISSING_TRANSLATION, `Missing message: "${t.id}" for locale "${e}", using ${t.defaultMessage?`default message (${"string"==typeof t.defaultMessage?t.defaultMessage:t.defaultMessage.map(t=>t.value??JSON.stringify(t)).join()})`:"id"} as fallback.`), this.descriptor = t
          }
        };

      function At(t, e, r = {}) {
        return e.reduce((e, n) => (n in t ? e[n] = t[n] : n in r && (e[n] = r[n]), e), {})
      }
      const Ht = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: t => {
          console.error(t)
        },
        onWarn: t => {
          console.warn(t)
        }
      };

      function Bt(t) {
        return {
          create: () => ({
            get: e => t[e],
            set(e, r) {
              t[e] = r
            }
          })
        }
      }

      function Pt(t, e, r, n) {
        const o = t && t[e];
        let i;
        if (o && (i = o[r]), i) return i;
        n(new dt(`No ${e} format named: ${r}`))
      }

      function St(t, e) {
        return Object.keys(t).reduce((r, n) => (r[n] = {
          timeZone: e,
          ...t[n]
        }, r), {})
      }

      function It(t, e) {
        return Object.keys({
          ...t,
          ...e
        }).reduce((r, n) => (r[n] = {
          ...t[n],
          ...e[n]
        }, r), {})
      }

      function Nt(t, e) {
        if (!e) return t;
        const r = mt.formats;
        return {
          ...r,
          ...t,
          date: It(St(r.date, e), St(t.date || {}, e)),
          time: It(St(r.time, e), St(t.time || {}, e))
        }
      }
      const wt = ({
          locale: t,
          formats: e,
          messages: r,
          defaultLocale: n,
          defaultFormats: o,
          fallbackOnEmptyString: i,
          onError: s,
          timeZone: a,
          defaultRichTextElements: c
        }, l, u = {
          id: ""
        }, h, f) => {
          const {
            id: p,
            defaultMessage: m
          } = u;
          ! function(t, e, r = Error) {
            if (!t) throw new r("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!p);
          const g = String(p),
            b = r && Object.prototype.hasOwnProperty.call(r, g) && r[g];
          if (Array.isArray(b) && 1 === b.length && b[0].type === S.literal) return b[0].value;
          if (h = {
              ...c,
              ...h
            }, e = Nt(e, a), o = Nt(o, a), !b) {
            if (!1 === i && "" === b) return b;
            if ((!m || t && t.toLowerCase() !== n.toLowerCase()) && s(new Tt(u, t)), m) try {
              return l.getMessageFormat(m, n, o, f).format(h)
            } catch (e) {
              return s(new _t(`Error formatting default message for: "${g}", rendering default message verbatim`, t, u, e)), "string" == typeof m ? m : g
            }
            return g
          }
          try {
            return l.getMessageFormat(b, t, e, {
              formatters: l,
              ...f
            }).format(h)
          } catch (e) {
            s(new _t(`Error formatting message: "${g}", using ${m?"default message":"id"} as fallback.`, t, u, e))
          }
          if (m) try {
            return l.getMessageFormat(m, n, o, f).format(h)
          } catch (e) {
            s(new _t(`Error formatting the default message for: "${g}", rendering message verbatim`, t, u, e))
          }
          return "string" == typeof b ? b : "string" == typeof m ? m : g
        },
        Lt = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function Ot({
        locale: t,
        formats: e,
        onError: r,
        timeZone: n
      }, o, i, s = {}) {
        const {
          format: a
        } = s;
        let c = At(s, Lt, {
          ...n && {
            timeZone: n
          },
          ...a && Pt(e, o, a, r)
        });
        return "time" !== o || c.hour || c.minute || c.second || c.timeStyle || c.dateStyle || (c = {
          ...c,
          hour: "numeric",
          minute: "numeric"
        }), i(t, c)
      }

      function xt(t, e, r, n = {}) {
        const o = "string" == typeof r ? new Date(r || 0) : r;
        try {
          return Ot(t, "date", e, n).format(o)
        } catch (e) {
          t.onError(new vt("Error formatting date.", t.locale, e))
        }
        return String(o)
      }

      function Rt(t, e, r, n = {}) {
        const o = "string" == typeof r ? new Date(r || 0) : r;
        try {
          return Ot(t, "time", e, n).format(o)
        } catch (e) {
          t.onError(new vt("Error formatting time.", t.locale, e))
        }
        return String(o)
      }

      function Mt(t, e, r, n, o = {}) {
        const i = "string" == typeof r ? new Date(r || 0) : r,
          s = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return Ot(t, "dateTimeRange", e, o).formatRange(i, s)
        } catch (e) {
          t.onError(new vt("Error formatting date time range.", t.locale, e))
        }
        return String(i)
      }

      function jt(t, e, r, n = {}) {
        const o = "string" == typeof r ? new Date(r || 0) : r;
        try {
          return Ot(t, "date", e, n).formatToParts(o)
        } catch (e) {
          t.onError(new vt("Error formatting date.", t.locale, e))
        }
        return []
      }

      function Ct(t, e, r, n = {}) {
        const o = "string" == typeof r ? new Date(r || 0) : r;
        try {
          return Ot(t, "time", e, n).formatToParts(o)
        } catch (e) {
          t.onError(new vt("Error formatting time.", t.locale, e))
        }
        return []
      }
      const Dt = ["style", "type", "fallback", "languageDisplay"];

      function Ft({
        locale: t,
        onError: e
      }, r, n, o) {
        Intl.DisplayNames || e(new st('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', it.MISSING_INTL_API));
        const i = At(o, Dt);
        try {
          return r(t, i).of(n)
        } catch (r) {
          e(new vt("Error formatting display name.", t, r))
        }
      }
      const Ut = ["type", "style"],
        Gt = Date.now();

      function kt(t, e, r, n = {}) {
        const o = $t(t, e, r, n).reduce((t, e) => {
          const r = e.value;
          return "string" != typeof r ? t.push(r) : "string" == typeof t[t.length - 1] ? t[t.length - 1] += r : t.push(r), t
        }, []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function $t({
        locale: t,
        onError: e
      }, r, n, o = {}) {
        Intl.ListFormat || e(new st('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', it.MISSING_INTL_API));
        const i = At(o, Ut);
        try {
          const e = {},
            o = Array.from(n).map((t, r) => {
              if ("object" == typeof t && null !== t) {
                const n = function(t) {
                  return `${Gt}_${t}_${Gt}`
                }(r);
                return e[n] = t, n
              }
              return String(t)
            });
          return r(t, i).formatToParts(o).map(t => "literal" === t.type ? t : {
            ...t,
            value: e[t.value] || t.value
          })
        } catch (r) {
          e(new vt("Error formatting list.", t, r))
        }
        return n
      }
      const Vt = ["type"];

      function Xt({
        locale: t,
        onError: e
      }, r, n, o = {}) {
        Intl.PluralRules || e(new st('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', it.MISSING_INTL_API));
        const i = At(o, Vt);
        try {
          return r(t, i).select(n)
        } catch (r) {
          e(new vt("Error formatting plural.", t, r))
        }
        return "other"
      }
      const zt = ["numeric", "style"];

      function Kt(t, e, r, n, o = {}) {
        n || (n = "second"), Intl.RelativeTimeFormat || t.onError(new st('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', it.MISSING_INTL_API));
        try {
          return function({
            locale: t,
            formats: e,
            onError: r
          }, n, o = {}) {
            const {
              format: i
            } = o;
            return n(t, At(o, zt, !!i && Pt(e, "relative", i, r) || {}))
          }(t, e, o).format(r, n)
        } catch (e) {
          t.onError(new vt("Error formatting relative time.", t.locale, e))
        }
        return String(r)
      }
      const Zt = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function Yt({
        locale: t,
        formats: e,
        onError: r
      }, n, o = {}) {
        const {
          format: i
        } = o;
        return n(t, At(o, Zt, i && Pt(e, "number", i, r) || {}))
      }

      function Wt(t, e, r, n = {}) {
        try {
          return Yt(t, e, n).format(r)
        } catch (e) {
          t.onError(new vt("Error formatting number.", t.locale, e))
        }
        return String(r)
      }

      function qt(t, e, r, n = {}) {
        try {
          return Yt(t, e, n).formatToParts(r)
        } catch (e) {
          t.onError(new vt("Error formatting number.", t.locale, e))
        }
        return []
      }

      function Jt(t, e) {
        const r = function(t = {
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {}
          }) {
            const e = Intl.RelativeTimeFormat,
              r = Intl.ListFormat,
              n = Intl.DisplayNames,
              i = o((...t) => new Intl.DateTimeFormat(...t), {
                cache: Bt(t.dateTime),
                strategy: f.variadic
              }),
              s = o((...t) => new Intl.NumberFormat(...t), {
                cache: Bt(t.number),
                strategy: f.variadic
              }),
              a = o((...t) => new Intl.PluralRules(...t), {
                cache: Bt(t.pluralRules),
                strategy: f.variadic
              });
            return {
              getDateTimeFormat: i,
              getNumberFormat: s,
              getMessageFormat: o((t, e, r, n) => new mt(t, e, r, {
                formatters: {
                  getNumberFormat: s,
                  getDateTimeFormat: i,
                  getPluralRules: a
                },
                ...n
              }), {
                cache: Bt(t.message),
                strategy: f.variadic
              }),
              getRelativeTimeFormat: o((...t) => new e(...t), {
                cache: Bt(t.relativeTime),
                strategy: f.variadic
              }),
              getPluralRules: a,
              getListFormat: o((...t) => new r(...t), {
                cache: Bt(t.list),
                strategy: f.variadic
              }),
              getDisplayNames: o((...t) => new n(...t), {
                cache: Bt(t.displayNames),
                strategy: f.variadic
              })
            }
          }(e),
          n = {
            ...Ht,
            ...t
          },
          {
            locale: i,
            defaultLocale: s,
            onError: a
          } = n;
        return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && a ? a(new Et(`Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${s}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && a && a(new Et(`Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${s}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)) : (a && a(new yt(`"locale" was not configured, using "${s}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`)), n.locale = n.defaultLocale || "en"),
          function(t) {
            var e;
            t.onWarn && t.defaultRichTextElements && "string" == typeof((e = t.messages || {}) ? e[Object.keys(e)[0]] : void 0) && t.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
          }(n), {
            ...n,
            formatters: r,
            formatNumber: Wt.bind(null, n, r.getNumberFormat),
            formatNumberToParts: qt.bind(null, n, r.getNumberFormat),
            formatRelativeTime: Kt.bind(null, n, r.getRelativeTimeFormat),
            formatDate: xt.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: jt.bind(null, n, r.getDateTimeFormat),
            formatTime: Rt.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: Mt.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: Ct.bind(null, n, r.getDateTimeFormat),
            formatPlural: Xt.bind(null, n, r.getPluralRules),
            formatMessage: wt.bind(null, n, r),
            $t: wt.bind(null, n, r),
            formatList: kt.bind(null, n, r.getListFormat),
            formatListToParts: $t.bind(null, n, r.getListFormat),
            formatDisplayName: Ft.bind(null, n, r.getDisplayNames)
          }
      }
      var Qt = r(2295);

      function te(t, e, r = Error) {
        if (!t) throw new r(e)
      }

      function ee(t) {
        te(t, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
      }
      const re = {
          ...Ht,
          textComponent: n.Fragment
        },
        ne = t => n.Children.toArray(t).map((t, e) => n.isValidElement(t) ? (0, Qt.jsx)(n.Fragment, {
          children: t
        }, e) : t);

      function oe(t, e) {
        if (t === e) return !0;
        if (!t || !e) return !1;
        var r = Object.keys(t),
          n = Object.keys(e),
          o = r.length;
        if (n.length !== o) return !1;
        for (var i = 0; i < o; i++) {
          var s = r[i];
          if (t[s] !== e[s] || !Object.prototype.hasOwnProperty.call(e, s)) return !1
        }
        return !0
      }
      const ie = n.createContext(null),
        se = ie.Provider;

      function ae() {
        const t = n.useContext(ie);
        return ee(t), t
      }
      var ce = function(t) {
          return t.formatDate = "FormattedDate", t.formatTime = "FormattedTime", t.formatNumber = "FormattedNumber", t.formatList = "FormattedList", t.formatDisplayName = "FormattedDisplayName", t
        }(ce || {}),
        le = function(t) {
          return t.formatDate = "FormattedDateParts", t.formatTime = "FormattedTimeParts", t.formatNumber = "FormattedNumberParts", t.formatList = "FormattedListParts", t
        }(le || {});
      const ue = t => {
        const e = ae(),
          {
            value: r,
            children: n,
            ...o
          } = t;
        return n(e.formatNumberToParts(r, o))
      };

      function he(t) {
        const e = e => {
          const r = ae(),
            {
              value: n,
              children: o,
              ...i
            } = e,
            s = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === t ? r.formatDateToParts(s, i) : r.formatTimeToParts(s, i))
        };
        return e.displayName = le[t], e
      }

      function fe(t) {
        const e = e => {
          const r = ae(),
            {
              value: o,
              children: i,
              ...s
            } = e,
            a = r[t](o, s);
          return "function" == typeof i ? i(a) : (0, Qt.jsx)(r.textComponent || n.Fragment, {
            children: a
          })
        };
        return e.displayName = ce[t], e
      }

      function pe(t) {
        return t ? Object.keys(t).reduce((e, r) => {
          const n = t[r];
          var o;
          return e[r] = ht(n) ? (o = n, function(t) {
            return o(ne(t))
          }) : n, e
        }, {}) : t
      }
      ue.displayName = "FormattedNumberParts", ue.displayName = "FormattedNumberParts";
      const me = (t, e, r, n, ...o) => {
        const i = wt(t, e, r, pe(n), ...o);
        return Array.isArray(i) ? ne(i) : i
      };

      function ge(t) {
        const {
          formatMessage: e,
          textComponent: r = n.Fragment
        } = ae(), {
          id: o,
          description: i,
          defaultMessage: s,
          values: a,
          children: c,
          tagName: l = r,
          ignoreTag: u
        } = t, h = e({
          id: o,
          description: i,
          defaultMessage: s
        }, a, {
          ignoreTag: u
        });
        return "function" == typeof c ? c(Array.isArray(h) ? h : [h]) : l ? (0, Qt.jsx)(l, {
          children: h
        }) : (0, Qt.jsx)(Qt.Fragment, {
          children: h
        })
      }

      function be(t) {
        const e = n.useRef({
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {}
          }),
          r = n.useRef(void 0),
          o = n.useRef(void 0),
          i = {};
        for (const e in t) void 0 !== t[e] && (i[e] = t[e]);
        const s = function(t) {
          return {
            locale: t.locale,
            timeZone: t.timeZone,
            fallbackOnEmptyString: t.fallbackOnEmptyString,
            formats: t.formats,
            textComponent: t.textComponent,
            messages: t.messages,
            defaultLocale: t.defaultLocale,
            defaultFormats: t.defaultFormats,
            onError: t.onError,
            onWarn: t.onWarn,
            wrapRichTextChunksInFragment: t.wrapRichTextChunksInFragment,
            defaultRichTextElements: t.defaultRichTextElements
          }
        }({
          ...re,
          ...i
        });
        return r.current && oe(r.current, s) || (r.current = s, o.current = (({
          defaultRichTextElements: t,
          ...e
        }, r) => {
          const n = pe(t),
            o = Jt({
              ...re,
              ...e,
              defaultRichTextElements: n
            }, r),
            i = {
              locale: o.locale,
              timeZone: o.timeZone,
              fallbackOnEmptyString: o.fallbackOnEmptyString,
              formats: o.formats,
              defaultLocale: o.defaultLocale,
              defaultFormats: o.defaultFormats,
              messages: o.messages,
              onError: o.onError,
              defaultRichTextElements: n
            };
          return {
            ...o,
            formatMessage: me.bind(null, i, o.formatters),
            $t: me.bind(null, i, o.formatters)
          }
        })(s, e.current)), ee(o.current), (0, Qt.jsx)(se, {
          value: o.current,
          children: t.children
        })
      }
      ge.displayName = "FormattedMessage", n.memo(ge, function(t, e) {
        const {
          values: r,
          ...n
        } = t, {
          values: o,
          ...i
        } = e;
        return oe(o, r) && oe(n, i)
      }).displayName = "MemoizedFormattedMessage", be.displayName = "IntlProvider";
      const de = be;

      function ye(t) {
        return t
      }
      fe("formatDate"), fe("formatTime"), fe("formatNumber"), fe("formatList"), fe("formatDisplayName"), he("formatDate"), he("formatTime")
    }
  }
]);