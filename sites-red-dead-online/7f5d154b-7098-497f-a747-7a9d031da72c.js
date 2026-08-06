try {
  let r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new r.Error).stack;
  e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "7f5d154b-7098-497f-a747-7a9d031da72c", r._sentryDebugIdIdentifier = "sentry-dbid-7f5d154b-7098-497f-a747-7a9d031da72c")
} catch (r) {} {
  let r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[(new r.Error).stack] = Object.assign({}, r._sentryModuleMetadata[(new r.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [9249], {
    25553(r) {
      r.exports = function(r, e, t) {
        switch (t.length) {
          case 0:
            return r.call(e);
          case 1:
            return r.call(e, t[0]);
          case 2:
            return r.call(e, t[0], t[1]);
          case 3:
            return r.call(e, t[0], t[1], t[2])
        }
        return r.apply(e, t)
      }
    },
    7557(r, e, t) {
      var n = t(4584),
        o = t(1504);
      r.exports = function(r, e, t) {
        (void 0 !== t && !o(r[e], t) || void 0 === t && !(e in r)) && n(r, e, t)
      }
    },
    90056(r, e, t) {
      var n = t(8568),
        o = t(23291);
      r.exports = function r(e, t, a, i, u) {
        var f = -1,
          s = e.length;
        for (a || (a = o), u || (u = []); ++f < s;) {
          var d = e[f];
          t > 0 && a(d) ? t > 1 ? r(d, t - 1, a, i, u) : n(u, d) : i || (u[u.length] = d)
        }
        return u
      }
    },
    82442(r, e, t) {
      var n = t(90889),
        o = t(7557),
        a = t(85089),
        i = t(92048),
        u = t(36373),
        f = t(71169),
        s = t(74646);
      r.exports = function r(e, t, d, l, c) {
        e !== t && a(t, function(a, f) {
          if (c || (c = new n), u(a)) i(e, t, f, d, r, l, c);
          else {
            var v = l ? l(s(e, f), a, f + "", e, t, c) : void 0;
            void 0 === v && (v = a), o(e, f, v)
          }
        }, f)
      }
    },
    92048(r, e, t) {
      var n = t(7557),
        o = t(34674),
        a = t(21537),
        i = t(5863),
        u = t(88673),
        f = t(43124),
        s = t(63577),
        d = t(64885),
        l = t(39968),
        c = t(49426),
        v = t(36373),
        p = t(4315),
        g = t(70247),
        x = t(74646),
        y = t(94772);
      r.exports = function(r, e, t, h, b, _, w) {
        var m = x(r, t),
          T = x(e, t),
          M = w.get(T);
        if (M) n(r, t, M);
        else {
          var k = _ ? _(m, T, t + "", r, e, w) : void 0,
            E = void 0 === k;
          if (E) {
            var A = s(T),
              D = !A && l(T),
              I = !A && !D && g(T);
            k = T, A || D || I ? s(m) ? k = m : d(m) ? k = i(m) : D ? (E = !1, k = o(T, !0)) : I ? (E = !1, k = a(T, !0)) : k = [] : p(T) || f(T) ? (k = m, f(m) ? k = y(m) : v(m) && !c(m) || (k = u(T))) : E = !1
          }
          E && (w.set(T, k), b(k, T, h, _, w), w.delete(T)), n(r, t, k)
        }
      }
    },
    43599(r) {
      var e = Math.ceil,
        t = Math.max;
      r.exports = function(r, n, o, a) {
        for (var i = -1, u = t(e((n - r) / (o || 1)), 0), f = Array(u); u--;) f[a ? u : ++i] = r, r += o;
        return f
      }
    },
    78974(r, e, t) {
      var n = t(46568),
        o = t(27117),
        a = t(82857);
      r.exports = function(r, e) {
        return a(o(r, e, n), r + "")
      }
    },
    62314(r, e, t) {
      var n = t(87147),
        o = t(71025),
        a = t(15313),
        i = t(36373),
        u = t(30285);
      r.exports = function(r, e, t, f) {
        if (!i(r)) return r;
        for (var s = -1, d = (e = o(e, r)).length, l = d - 1, c = r; null != c && ++s < d;) {
          var v = u(e[s]),
            p = t;
          if ("__proto__" === v || "constructor" === v || "prototype" === v) return r;
          if (s != l) {
            var g = c[v];
            void 0 === (p = f ? f(g, v, c) : void 0) && (p = i(g) ? g : a(e[s + 1]) ? [] : {})
          }
          n(c, v, p), c = c[v]
        }
        return r
      }
    },
    13210(r, e, t) {
      var n = t(66798),
        o = t(78403),
        a = t(46568),
        i = o ? function(r, e) {
          return o(r, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(e),
            writable: !0
          })
        } : a;
      r.exports = i
    },
    52192(r) {
      r.exports = function(r, e, t) {
        var n = -1,
          o = r.length;
        e < 0 && (e = -e > o ? 0 : o + e), (t = t > o ? o : t) < 0 && (t += o), o = e > t ? 0 : t - e >>> 0, e >>>= 0;
        for (var a = Array(o); ++n < o;) a[n] = r[n + e];
        return a
      }
    },
    56792(r, e, t) {
      var n = t(41856),
        o = /^\s+/;
      r.exports = function(r) {
        return r ? r.slice(0, n(r) + 1).replace(o, "") : r
      }
    },
    61187(r, e, t) {
      var n = t(71025),
        o = t(7730),
        a = t(70369),
        i = t(30285),
        u = Object.prototype.hasOwnProperty;
      r.exports = function(r, e) {
        var t = -1,
          f = (e = n(e, r)).length;
        if (!f) return !0;
        for (; ++t < f;) {
          var s = i(e[t]);
          if ("__proto__" === s && !u.call(r, "__proto__")) return !1;
          if (("constructor" === s || "prototype" === s) && t < f - 1) return !1
        }
        var d = a(r, e);
        return null == d || delete d[i(o(e))]
      }
    },
    71471(r, e, t) {
      var n = t(78974),
        o = t(34856);
      r.exports = function(r) {
        return n(function(e, t) {
          var n = -1,
            a = t.length,
            i = a > 1 ? t[a - 1] : void 0,
            u = a > 2 ? t[2] : void 0;
          for (i = r.length > 3 && "function" == typeof i ? (a--, i) : void 0, u && o(t[0], t[1], u) && (i = a < 3 ? void 0 : i, a = 1), e = Object(e); ++n < a;) {
            var f = t[n];
            f && r(e, f, n, i)
          }
          return e
        })
      }
    },
    55276(r, e, t) {
      var n = t(43599),
        o = t(34856),
        a = t(27872);
      r.exports = function(r) {
        return function(e, t, i) {
          return i && "number" != typeof i && o(e, t, i) && (t = i = void 0), e = a(e), void 0 === t ? (t = e, e = 0) : t = a(t), i = void 0 === i ? e < t ? 1 : -1 : a(i), n(e, t, i, r)
        }
      }
    },
    37546(r, e, t) {
      var n = t(4315);
      r.exports = function(r) {
        return n(r) ? void 0 : r
      }
    },
    4024(r, e, t) {
      var n = t(9786),
        o = t(27117),
        a = t(82857);
      r.exports = function(r) {
        return a(o(r, void 0, n), r + "")
      }
    },
    23291(r, e, t) {
      var n = t(64617),
        o = t(43124),
        a = t(63577),
        i = n ? n.isConcatSpreadable : void 0;
      r.exports = function(r) {
        return a(r) || o(r) || !!(i && r && r[i])
      }
    },
    34856(r, e, t) {
      var n = t(1504),
        o = t(19590),
        a = t(15313),
        i = t(36373);
      r.exports = function(r, e, t) {
        if (!i(t)) return !1;
        var u = typeof e;
        return !!("number" == u ? o(t) && a(e, t.length) : "string" == u && e in t) && n(t[e], r)
      }
    },
    27117(r, e, t) {
      var n = t(25553),
        o = Math.max;
      r.exports = function(r, e, t) {
        return e = o(void 0 === e ? r.length - 1 : e, 0),
          function() {
            for (var a = arguments, i = -1, u = o(a.length - e, 0), f = Array(u); ++i < u;) f[i] = a[e + i];
            i = -1;
            for (var s = Array(e + 1); ++i < e;) s[i] = a[i];
            return s[e] = t(f), n(r, this, s)
          }
      }
    },
    70369(r, e, t) {
      var n = t(69526),
        o = t(52192);
      r.exports = function(r, e) {
        return e.length < 2 ? r : n(r, o(e, 0, -1))
      }
    },
    74646(r) {
      r.exports = function(r, e) {
        if (("constructor" !== e || "function" != typeof r[e]) && "__proto__" != e) return r[e]
      }
    },
    82857(r, e, t) {
      var n = t(13210),
        o = t(76411)(n);
      r.exports = o
    },
    76411(r) {
      var e = Date.now;
      r.exports = function(r) {
        var t = 0,
          n = 0;
        return function() {
          var o = e(),
            a = 16 - (o - n);
          if (n = o, a > 0) {
            if (++t >= 800) return arguments[0]
          } else t = 0;
          return r.apply(void 0, arguments)
        }
      }
    },
    41856(r) {
      var e = /\s/;
      r.exports = function(r) {
        for (var t = r.length; t-- && e.test(r.charAt(t)););
        return t
      }
    },
    66798(r) {
      r.exports = function(r) {
        return function() {
          return r
        }
      }
    },
    54389(r, e, t) {
      var n = t(36373),
        o = t(42308),
        a = t(73894),
        i = Math.max,
        u = Math.min;
      r.exports = function(r, e, t) {
        var f, s, d, l, c, v, p = 0,
          g = !1,
          x = !1,
          y = !0;
        if ("function" != typeof r) throw new TypeError("Expected a function");

        function h(e) {
          var t = f,
            n = s;
          return f = s = void 0, p = e, l = r.apply(n, t)
        }

        function b(r) {
          var t = r - v;
          return void 0 === v || t >= e || t < 0 || x && r - p >= d
        }

        function _() {
          var r = o();
          if (b(r)) return w(r);
          c = setTimeout(_, function(r) {
            var t = e - (r - v);
            return x ? u(t, d - (r - p)) : t
          }(r))
        }

        function w(r) {
          return c = void 0, y && f ? h(r) : (f = s = void 0, l)
        }

        function m() {
          var r = o(),
            t = b(r);
          if (f = arguments, s = this, v = r, t) {
            if (void 0 === c) return function(r) {
              return p = r, c = setTimeout(_, e), g ? h(r) : l
            }(v);
            if (x) return clearTimeout(c), c = setTimeout(_, e), h(v)
          }
          return void 0 === c && (c = setTimeout(_, e)), l
        }
        return e = a(e) || 0, n(t) && (g = !!t.leading, d = (x = "maxWait" in t) ? i(a(t.maxWait) || 0, e) : d, y = "trailing" in t ? !!t.trailing : y), m.cancel = function() {
          void 0 !== c && clearTimeout(c), p = 0, f = v = s = c = void 0
        }, m.flush = function() {
          return void 0 === c ? l : w(o())
        }, m
      }
    },
    9786(r, e, t) {
      var n = t(90056);
      r.exports = function(r) {
        return null != r && r.length ? n(r, 1) : []
      }
    },
    64885(r, e, t) {
      var n = t(19590),
        o = t(5698);
      r.exports = function(r) {
        return o(r) && n(r)
      }
    },
    7730(r) {
      r.exports = function(r) {
        var e = null == r ? 0 : r.length;
        return e ? r[e - 1] : void 0
      }
    },
    54028(r, e, t) {
      var n = t(82442),
        o = t(71471)(function(r, e, t) {
          n(r, e, t)
        });
      r.exports = o
    },
    42308(r, e, t) {
      var n = t(84373);
      r.exports = function() {
        return n.Date.now()
      }
    },
    15963(r, e, t) {
      var n = t(75708),
        o = t(5559),
        a = t(61187),
        i = t(71025),
        u = t(38439),
        f = t(37546),
        s = t(4024),
        d = t(8221),
        l = s(function(r, e) {
          var t = {};
          if (null == r) return t;
          var s = !1;
          e = n(e, function(e) {
            return e = i(e, r), s || (s = e.length > 1), e
          }), u(r, d(r), t), s && (t = o(t, 7, f));
          for (var l = e.length; l--;) a(t, e[l]);
          return t
        });
      r.exports = l
    },
    68309(r, e, t) {
      var n = t(55276)();
      r.exports = n
    },
    88584(r, e, t) {
      var n = t(62314);
      r.exports = function(r, e, t, o) {
        return o = "function" == typeof o ? o : void 0, null == r ? r : n(r, e, t, o)
      }
    },
    27872(r, e, t) {
      var n = t(73894),
        o = 1 / 0;
      r.exports = function(r) {
        return r ? (r = n(r)) === o || r === -1 / 0 ? 17976931348623157e292 * (r < 0 ? -1 : 1) : r == r ? r : 0 : 0 === r ? r : 0
      }
    },
    73894(r, e, t) {
      var n = t(56792),
        o = t(36373),
        a = t(69570),
        i = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
        s = parseInt;
      r.exports = function(r) {
        if ("number" == typeof r) return r;
        if (a(r)) return NaN;
        if (o(r)) {
          var e = "function" == typeof r.valueOf ? r.valueOf() : r;
          r = o(e) ? e + "" : e
        }
        if ("string" != typeof r) return 0 === r ? r : +r;
        r = n(r);
        var t = u.test(r);
        return t || f.test(r) ? s(r.slice(2), t ? 2 : 8) : i.test(r) ? NaN : +r
      }
    },
    94772(r, e, t) {
      var n = t(38439),
        o = t(71169);
      r.exports = function(r) {
        return n(r, o(r))
      }
    }
  }
]);