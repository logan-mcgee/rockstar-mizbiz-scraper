try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "93253efd-320b-4fc2-b640-96ef71bf7ec7", e._sentryDebugIdIdentifier = "sentry-dbid-93253efd-320b-4fc2-b640-96ef71bf7ec7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [5880], {
    7352(e, t, n) {
      n.d(t, {
        A: () => o
      });
      var r = Math.max;
      const o = function(e, t, n) {
        return t = r(void 0 === t ? e.length - 1 : t, 0),
          function() {
            for (var o = arguments, i = -1, a = r(o.length - t, 0), f = Array(a); ++i < a;) f[i] = o[t + i];
            i = -1;
            for (var u = Array(t + 1); ++i < t;) u[i] = o[i];
            return u[t] = n(f),
              function(e, t, n) {
                switch (n.length) {
                  case 0:
                    return e.call(t);
                  case 1:
                    return e.call(t, n[0]);
                  case 2:
                    return e.call(t, n[0], n[1]);
                  case 3:
                    return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
              }(e, this, u)
          }
      }
    },
    91847(e, t, n) {
      n.d(t, {
        A: () => f
      });
      var r = n(63406),
        o = n(23159);
      const i = r.A ? function(e, t) {
        return (0, r.A)(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: (n = t, function() {
            return n
          }),
          writable: !0
        });
        var n
      } : o.A;
      var a = Date.now;
      const f = (u = i, c = 0, s = 0, function() {
        var e = a(),
          t = 16 - (e - s);
        if (s = e, t > 0) {
          if (++c >= 800) return arguments[0]
        } else c = 0;
        return u.apply(void 0, arguments)
      });
      var u, c, s
    },
    79098(e, t, n) {
      n.d(t, {
        A: () => g
      });
      var r = n(45862),
        o = n(34336);
      const i = function() {
        return o.A.Date.now()
      };
      var a = /\s/;
      var f = /^\s+/;
      const u = function(e) {
        return e ? e.slice(0, function(e) {
          for (var t = e.length; t-- && a.test(e.charAt(t)););
          return t
        }(e) + 1).replace(f, "") : e
      };
      var c = n(80617),
        s = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        v = parseInt;
      const A = function(e) {
        if ("number" == typeof e) return e;
        if ((0, c.A)(e)) return NaN;
        if ((0, r.A)(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = (0, r.A)(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = u(e);
        var n = l.test(e);
        return n || d.test(e) ? v(e.slice(2), n ? 2 : 8) : s.test(e) ? NaN : +e
      };
      var b = Math.max,
        y = Math.min;
      const g = function(e, t, n) {
        var o, a, f, u, c, s, l = 0,
          d = !1,
          v = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function p(t) {
          var n = o,
            r = a;
          return o = a = void 0, l = t, u = e.apply(r, n)
        }

        function h(e) {
          var n = e - s;
          return void 0 === s || n >= t || n < 0 || v && e - l >= f
        }

        function w() {
          var e = i();
          if (h(e)) return _(e);
          c = setTimeout(w, function(e) {
            var n = t - (e - s);
            return v ? y(n, f - (e - l)) : n
          }(e))
        }

        function _(e) {
          return c = void 0, g && o ? p(e) : (o = a = void 0, u)
        }

        function m() {
          var e = i(),
            n = h(e);
          if (o = arguments, a = this, s = e, n) {
            if (void 0 === c) return function(e) {
              return l = e, c = setTimeout(w, t), d ? p(e) : u
            }(s);
            if (v) return clearTimeout(c), c = setTimeout(w, t), p(s)
          }
          return void 0 === c && (c = setTimeout(w, t)), u
        }
        return t = A(t) || 0, (0, r.A)(n) && (d = !!n.leading, f = (v = "maxWait" in n) ? b(A(n.maxWait) || 0, t) : f, g = "trailing" in n ? !!n.trailing : g), m.cancel = function() {
          void 0 !== c && clearTimeout(c), l = 0, o = s = a = c = void 0
        }, m.flush = function() {
          return void 0 === c ? u : _(i())
        }, m
      }
    },
    58634(e, t, n) {
      n.d(t, {
        A: () => l
      });
      var r = n(86204),
        o = n(26670),
        i = n(96097),
        a = Function.prototype,
        f = Object.prototype,
        u = a.toString,
        c = f.hasOwnProperty,
        s = u.call(Object);
      const l = function(e) {
        if (!(0, i.A)(e) || "[object Object]" != (0, r.A)(e)) return !1;
        var t = (0, o.A)(e);
        if (null === t) return !0;
        var n = c.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && u.call(n) == s
      }
    },
    40415(e, t, n) {
      n.d(t, {
        A: () => D
      });
      var r = n(6461),
        o = n(17367),
        i = n(47507);
      const a = function(e, t, n) {
        (void 0 !== n && !(0, i.A)(e[t], n) || void 0 === n && !(t in e)) && (0, o.A)(e, t, n)
      };
      var f = n(55481),
        u = n(15545),
        c = n(93870),
        s = n(24900),
        l = n(54746),
        d = n(48348),
        v = n(6700),
        A = n(99651),
        b = n(96097);
      var y = n(7269),
        g = n(78709),
        p = n(45862),
        h = n(58634),
        w = n(10312);
      const _ = function(e, t) {
        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
      };
      var m = n(57502),
        T = n(62538);
      const k = function(e, t, n, r, o, i, f) {
          var k, M = _(e, n),
            E = _(t, n),
            O = f.get(E);
          if (O) a(e, n, O);
          else {
            var j = i ? i(M, E, n + "", e, t, f) : void 0,
              x = void 0 === j;
            if (x) {
              var D = (0, v.A)(E),
                I = !D && (0, y.A)(E),
                N = !D && !I && (0, w.A)(E);
              j = E, D || I || N ? (0, v.A)(M) ? j = M : (k = M, (0, b.A)(k) && (0, A.A)(k) ? j = (0, s.A)(M) : I ? (x = !1, j = (0, u.A)(E, !0)) : N ? (x = !1, j = (0, c.A)(E, !0)) : j = []) : (0, h.A)(E) || (0, d.A)(E) ? (j = M, (0, d.A)(M) ? j = function(e) {
                return (0, m.A)(e, (0, T.A)(e))
              }(M) : (0, p.A)(M) && !(0, g.A)(M) || (j = (0, l.A)(E))) : x = !1
            }
            x && (f.set(E, j), o(j, E, r, i, f), f.delete(E)), a(e, n, j)
          }
        },
        M = function e(t, n, o, i, u) {
          t !== n && (0, f.A)(n, function(f, c) {
            if (u || (u = new r.A), (0, p.A)(f)) k(t, n, c, o, e, i, u);
            else {
              var s = i ? i(_(t, c), f, c + "", t, n, u) : void 0;
              void 0 === s && (s = f), a(t, c, s)
            }
          }, T.A)
        };
      var E = n(23159),
        O = n(7352),
        j = n(91847);
      var x = n(17266);
      const D = (I = function(e, t, n) {
        M(e, t, n)
      }, N = function(e, t) {
        var n = -1,
          r = t.length,
          o = r > 1 ? t[r - 1] : void 0,
          a = r > 2 ? t[2] : void 0;
        for (o = I.length > 3 && "function" == typeof o ? (r--, o) : void 0, a && function(e, t, n) {
            if (!(0, p.A)(n)) return !1;
            var r = typeof t;
            return !!("number" == r ? (0, A.A)(n) && (0, x.A)(t, n.length) : "string" == r && t in n) && (0, i.A)(n[t], e)
          }(t[0], t[1], a) && (o = r < 3 ? void 0 : o, r = 1), e = Object(e); ++n < r;) {
          var f = t[n];
          f && I(e, f, n)
        }
        return e
      }, (0, j.A)((0, O.A)(N, S, E.A), N + ""));
      var I, N, S
    }
  }
]);