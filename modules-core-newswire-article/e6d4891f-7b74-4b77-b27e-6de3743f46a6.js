try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "e6d4891f-7b74-4b77-b27e-6de3743f46a6", e._sentryDebugIdIdentifier = "sentry-dbid-e6d4891f-7b74-4b77-b27e-6de3743f46a6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [9512], {
    25553(e) {
      e.exports = function(e, r, t) {
        switch (t.length) {
          case 0:
            return e.call(r);
          case 1:
            return e.call(r, t[0]);
          case 2:
            return e.call(r, t[0], t[1]);
          case 3:
            return e.call(r, t[0], t[1], t[2])
        }
        return e.apply(r, t)
      }
    },
    7557(e, r, t) {
      var n = t(4584),
        o = t(1504);
      e.exports = function(e, r, t) {
        (void 0 !== t && !o(e[r], t) || void 0 === t && !(r in e)) && n(e, r, t)
      }
    },
    90056(e, r, t) {
      var n = t(8568),
        o = t(23291);
      e.exports = function e(r, t, a, i, u) {
        var f = -1,
          l = r.length;
        for (a || (a = o), u || (u = []); ++f < l;) {
          var s = r[f];
          t > 0 && a(s) ? t > 1 ? e(s, t - 1, a, i, u) : n(u, s) : i || (u[u.length] = s)
        }
        return u
      }
    },
    82442(e, r, t) {
      var n = t(90889),
        o = t(7557),
        a = t(85089),
        i = t(92048),
        u = t(36373),
        f = t(71169),
        l = t(74646);
      e.exports = function e(r, t, s, d, c) {
        r !== t && a(t, function(a, f) {
          if (c || (c = new n), u(a)) i(r, t, f, s, e, d, c);
          else {
            var v = d ? d(l(r, f), a, f + "", r, t, c) : void 0;
            void 0 === v && (v = a), o(r, f, v)
          }
        }, f)
      }
    },
    92048(e, r, t) {
      var n = t(7557),
        o = t(34674),
        a = t(21537),
        i = t(5863),
        u = t(88673),
        f = t(43124),
        l = t(63577),
        s = t(64885),
        d = t(39968),
        c = t(49426),
        v = t(36373),
        p = t(4315),
        g = t(70247),
        b = t(74646),
        y = t(94772);
      e.exports = function(e, r, t, _, h, w, x) {
        var k = b(e, t),
          m = b(r, t),
          M = x.get(m);
        if (M) n(e, t, M);
        else {
          var E = w ? w(k, m, t + "", e, r, x) : void 0,
            T = void 0 === E;
          if (T) {
            var D = l(m),
              I = !D && d(m),
              A = !D && !I && g(m);
            E = m, D || I || A ? l(k) ? E = k : s(k) ? E = i(k) : I ? (T = !1, E = o(m, !0)) : A ? (T = !1, E = a(m, !0)) : E = [] : p(m) || f(m) ? (E = k, f(k) ? E = y(k) : v(k) && !c(k) || (E = u(m))) : T = !1
          }
          T && (x.set(m, E), h(E, m, _, w, x), x.delete(m)), n(e, t, E)
        }
      }
    },
    78974(e, r, t) {
      var n = t(46568),
        o = t(27117),
        a = t(82857);
      e.exports = function(e, r) {
        return a(o(e, r, n), e + "")
      }
    },
    13210(e, r, t) {
      var n = t(66798),
        o = t(78403),
        a = t(46568),
        i = o ? function(e, r) {
          return o(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(r),
            writable: !0
          })
        } : a;
      e.exports = i
    },
    52192(e) {
      e.exports = function(e, r, t) {
        var n = -1,
          o = e.length;
        r < 0 && (r = -r > o ? 0 : o + r), (t = t > o ? o : t) < 0 && (t += o), o = r > t ? 0 : t - r >>> 0, r >>>= 0;
        for (var a = Array(o); ++n < o;) a[n] = e[n + r];
        return a
      }
    },
    61187(e, r, t) {
      var n = t(71025),
        o = t(7730),
        a = t(70369),
        i = t(30285),
        u = Object.prototype.hasOwnProperty;
      e.exports = function(e, r) {
        var t = -1,
          f = (r = n(r, e)).length;
        if (!f) return !0;
        for (; ++t < f;) {
          var l = i(r[t]);
          if ("__proto__" === l && !u.call(e, "__proto__")) return !1;
          if (("constructor" === l || "prototype" === l) && t < f - 1) return !1
        }
        var s = a(e, r);
        return null == s || delete s[i(o(r))]
      }
    },
    71471(e, r, t) {
      var n = t(78974),
        o = t(34856);
      e.exports = function(e) {
        return n(function(r, t) {
          var n = -1,
            a = t.length,
            i = a > 1 ? t[a - 1] : void 0,
            u = a > 2 ? t[2] : void 0;
          for (i = e.length > 3 && "function" == typeof i ? (a--, i) : void 0, u && o(t[0], t[1], u) && (i = a < 3 ? void 0 : i, a = 1), r = Object(r); ++n < a;) {
            var f = t[n];
            f && e(r, f, n, i)
          }
          return r
        })
      }
    },
    37546(e, r, t) {
      var n = t(4315);
      e.exports = function(e) {
        return n(e) ? void 0 : e
      }
    },
    4024(e, r, t) {
      var n = t(9786),
        o = t(27117),
        a = t(82857);
      e.exports = function(e) {
        return a(o(e, void 0, n), e + "")
      }
    },
    23291(e, r, t) {
      var n = t(64617),
        o = t(43124),
        a = t(63577),
        i = n ? n.isConcatSpreadable : void 0;
      e.exports = function(e) {
        return a(e) || o(e) || !!(i && e && e[i])
      }
    },
    34856(e, r, t) {
      var n = t(1504),
        o = t(19590),
        a = t(15313),
        i = t(36373);
      e.exports = function(e, r, t) {
        if (!i(t)) return !1;
        var u = typeof r;
        return !!("number" == u ? o(t) && a(r, t.length) : "string" == u && r in t) && n(t[r], e)
      }
    },
    27117(e, r, t) {
      var n = t(25553),
        o = Math.max;
      e.exports = function(e, r, t) {
        return r = o(void 0 === r ? e.length - 1 : r, 0),
          function() {
            for (var a = arguments, i = -1, u = o(a.length - r, 0), f = Array(u); ++i < u;) f[i] = a[r + i];
            i = -1;
            for (var l = Array(r + 1); ++i < r;) l[i] = a[i];
            return l[r] = t(f), n(e, this, l)
          }
      }
    },
    70369(e, r, t) {
      var n = t(69526),
        o = t(52192);
      e.exports = function(e, r) {
        return r.length < 2 ? e : n(e, o(r, 0, -1))
      }
    },
    74646(e) {
      e.exports = function(e, r) {
        if (("constructor" !== r || "function" != typeof e[r]) && "__proto__" != r) return e[r]
      }
    },
    82857(e, r, t) {
      var n = t(13210),
        o = t(76411)(n);
      e.exports = o
    },
    76411(e) {
      var r = Date.now;
      e.exports = function(e) {
        var t = 0,
          n = 0;
        return function() {
          var o = r(),
            a = 16 - (o - n);
          if (n = o, a > 0) {
            if (++t >= 800) return arguments[0]
          } else t = 0;
          return e.apply(void 0, arguments)
        }
      }
    },
    66798(e) {
      e.exports = function(e) {
        return function() {
          return e
        }
      }
    },
    9786(e, r, t) {
      var n = t(90056);
      e.exports = function(e) {
        return null != e && e.length ? n(e, 1) : []
      }
    },
    64885(e, r, t) {
      var n = t(19590),
        o = t(5698);
      e.exports = function(e) {
        return o(e) && n(e)
      }
    },
    7730(e) {
      e.exports = function(e) {
        var r = null == e ? 0 : e.length;
        return r ? e[r - 1] : void 0
      }
    },
    54028(e, r, t) {
      var n = t(82442),
        o = t(71471)(function(e, r, t) {
          n(e, r, t)
        });
      e.exports = o
    },
    15963(e, r, t) {
      var n = t(75708),
        o = t(5559),
        a = t(61187),
        i = t(71025),
        u = t(38439),
        f = t(37546),
        l = t(4024),
        s = t(8221),
        d = l(function(e, r) {
          var t = {};
          if (null == e) return t;
          var l = !1;
          r = n(r, function(r) {
            return r = i(r, e), l || (l = r.length > 1), r
          }), u(e, s(e), t), l && (t = o(t, 7, f));
          for (var d = r.length; d--;) a(t, r[d]);
          return t
        });
      e.exports = d
    },
    94772(e, r, t) {
      var n = t(38439),
        o = t(71169);
      e.exports = function(e) {
        return n(e, o(e))
      }
    }
  }
]);