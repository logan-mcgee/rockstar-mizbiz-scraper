try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d029407b-ee07-4e9e-a7c1-a5ce78b92a57", e._sentryDebugIdIdentifier = "sentry-dbid-d029407b-ee07-4e9e-a7c1-a5ce78b92a57")
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
  [1696], {
    13124(e, n, t) {
      t.d(n, {
        A: () => c
      });
      var r = t(51177),
        a = t(93082),
        o = t(2603),
        i = t(74775);

      function u(e) {
        var n = (0, i.A)(),
          t = n.formatMessage,
          r = n.textComponent,
          o = void 0 === r ? a.Fragment : r,
          u = e.id,
          l = e.description,
          c = e.defaultMessage,
          s = e.values,
          f = e.children,
          d = e.tagName,
          v = void 0 === d ? o : d,
          A = t({
            id: u,
            description: l,
            defaultMessage: c
          }, s, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof f ? f(Array.isArray(A) ? A : [A]) : v ? a.createElement(v, null, A) : a.createElement(a.Fragment, null, A)
      }
      u.displayName = "FormattedMessage";
      var l = a.memo(u, function(e, n) {
        var t = e.values,
          a = (0, r.Tt)(e, ["values"]),
          i = n.values,
          u = (0, r.Tt)(n, ["values"]);
        return (0, o.bN)(i, t) && (0, o.bN)(a, u)
      });
      l.displayName = "MemoizedFormattedMessage";
      const c = l
    },
    7352(e, n, t) {
      t.d(n, {
        A: () => a
      });
      var r = Math.max;
      const a = function(e, n, t) {
        return n = r(void 0 === n ? e.length - 1 : n, 0),
          function() {
            for (var a = arguments, o = -1, i = r(a.length - n, 0), u = Array(i); ++o < i;) u[o] = a[n + o];
            o = -1;
            for (var l = Array(n + 1); ++o < n;) l[o] = a[o];
            return l[n] = t(u),
              function(e, n, t) {
                switch (t.length) {
                  case 0:
                    return e.call(n);
                  case 1:
                    return e.call(n, t[0]);
                  case 2:
                    return e.call(n, t[0], t[1]);
                  case 3:
                    return e.call(n, t[0], t[1], t[2])
                }
                return e.apply(n, t)
              }(e, this, l)
          }
      }
    },
    91847(e, n, t) {
      t.d(n, {
        A: () => u
      });
      var r = t(63406),
        a = t(23159);
      const o = r.A ? function(e, n) {
        return (0, r.A)(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: (t = n, function() {
            return t
          }),
          writable: !0
        });
        var t
      } : a.A;
      var i = Date.now;
      const u = (l = o, c = 0, s = 0, function() {
        var e = i(),
          n = 16 - (e - s);
        if (s = e, n > 0) {
          if (++c >= 800) return arguments[0]
        } else c = 0;
        return l.apply(void 0, arguments)
      });
      var l, c, s
    },
    58634(e, n, t) {
      t.d(n, {
        A: () => f
      });
      var r = t(86204),
        a = t(26670),
        o = t(96097),
        i = Function.prototype,
        u = Object.prototype,
        l = i.toString,
        c = u.hasOwnProperty,
        s = l.call(Object);
      const f = function(e) {
        if (!(0, o.A)(e) || "[object Object]" != (0, r.A)(e)) return !1;
        var n = (0, a.A)(e);
        if (null === n) return !0;
        var t = c.call(n, "constructor") && n.constructor;
        return "function" == typeof t && t instanceof t && l.call(t) == s
      }
    },
    40415(e, n, t) {
      t.d(n, {
        A: () => D
      });
      var r = t(6461),
        a = t(17367),
        o = t(47507);
      const i = function(e, n, t) {
        (void 0 !== t && !(0, o.A)(e[n], t) || void 0 === t && !(n in e)) && (0, a.A)(e, n, t)
      };
      var u = t(55481),
        l = t(15545),
        c = t(93870),
        s = t(24900),
        f = t(54746),
        d = t(48348),
        v = t(6700),
        A = t(99651),
        g = t(96097);
      var y = t(7269),
        p = t(78709),
        b = t(45862),
        h = t(58634),
        _ = t(10312);
      const w = function(e, n) {
        if (("constructor" !== n || "function" != typeof e[n]) && "__proto__" != n) return e[n]
      };
      var m = t(57502),
        M = t(62538);
      const k = function(e, n, t, r, a, o, u) {
          var k, T = w(e, t),
            E = w(n, t),
            O = u.get(E);
          if (O) i(e, t, O);
          else {
            var j = o ? o(T, E, t + "", e, n, u) : void 0,
              N = void 0 === j;
            if (N) {
              var D = (0, v.A)(E),
                F = !D && (0, y.A)(E),
                I = !D && !F && (0, _.A)(E);
              j = E, D || F || I ? (0, v.A)(T) ? j = T : (k = T, (0, g.A)(k) && (0, A.A)(k) ? j = (0, s.A)(T) : F ? (N = !1, j = (0, l.A)(E, !0)) : I ? (N = !1, j = (0, c.A)(E, !0)) : j = []) : (0, h.A)(E) || (0, d.A)(E) ? (j = T, (0, d.A)(T) ? j = function(e) {
                return (0, m.A)(e, (0, M.A)(e))
              }(T) : (0, b.A)(T) && !(0, p.A)(T) || (j = (0, f.A)(E))) : N = !1
            }
            N && (u.set(E, j), a(j, E, r, o, u), u.delete(E)), i(e, t, j)
          }
        },
        T = function e(n, t, a, o, l) {
          n !== t && (0, u.A)(t, function(u, c) {
            if (l || (l = new r.A), (0, b.A)(u)) k(n, t, c, a, e, o, l);
            else {
              var s = o ? o(w(n, c), u, c + "", n, t, l) : void 0;
              void 0 === s && (s = u), i(n, c, s)
            }
          }, M.A)
        };
      var E = t(23159),
        O = t(7352),
        j = t(91847);
      var N = t(17266);
      const D = (F = function(e, n, t) {
        T(e, n, t)
      }, I = function(e, n) {
        var t = -1,
          r = n.length,
          a = r > 1 ? n[r - 1] : void 0,
          i = r > 2 ? n[2] : void 0;
        for (a = F.length > 3 && "function" == typeof a ? (r--, a) : void 0, i && function(e, n, t) {
            if (!(0, b.A)(t)) return !1;
            var r = typeof n;
            return !!("number" == r ? (0, A.A)(t) && (0, N.A)(n, t.length) : "string" == r && n in t) && (0, o.A)(t[n], e)
          }(n[0], n[1], i) && (a = r < 3 ? void 0 : a, r = 1), e = Object(e); ++t < r;) {
          var u = n[t];
          u && F(e, u, t)
        }
        return e
      }, (0, j.A)((0, O.A)(I, S, E.A), I + ""));
      var F, I, S
    },
    50573(e, n, t) {
      t.d(n, {
        A: () => T
      });
      var r = t(20829),
        a = t(70278),
        o = t(61893);
      var i = t(99793);
      const u = function(e, n) {
        return n.length < 2 ? e : (0, i.A)(e, function(e, n, t) {
          var r = -1,
            a = e.length;
          n < 0 && (n = -n > a ? 0 : a + n), (t = t > a ? a : t) < 0 && (t += a), a = n > t ? 0 : t - n >>> 0, n >>>= 0;
          for (var o = Array(a); ++r < a;) o[r] = e[r + n];
          return o
        }(n, 0, -1))
      };
      var l = t(33018),
        c = Object.prototype.hasOwnProperty;
      const s = function(e, n) {
        var t = -1,
          r = (n = (0, o.A)(n, e)).length;
        if (!r) return !0;
        for (; ++t < r;) {
          var a = (0, l.A)(n[t]);
          if ("__proto__" === a && !c.call(e, "__proto__")) return !1;
          if (("constructor" === a || "prototype" === a) && t < r - 1) return !1
        }
        var i = u(e, n);
        return null == i || delete i[(0, l.A)(function(e) {
          var n = null == e ? 0 : e.length;
          return n ? e[n - 1] : void 0
        }(n))]
      };
      var f = t(57502),
        d = t(58634);
      const v = function(e) {
        return (0, d.A)(e) ? void 0 : e
      };
      var A = t(68071),
        g = t(94508),
        y = t(48348),
        p = t(6700),
        b = g.A ? g.A.isConcatSpreadable : void 0;
      const h = function(e) {
          return (0, p.A)(e) || (0, y.A)(e) || !!(b && e && e[b])
        },
        _ = function e(n, t, r, a, o) {
          var i = -1,
            u = n.length;
          for (r || (r = h), o || (o = []); ++i < u;) {
            var l = n[i];
            t > 0 && r(l) ? t > 1 ? e(l, t - 1, r, a, o) : (0, A.A)(o, l) : a || (o[o.length] = l)
          }
          return o
        },
        w = function(e) {
          return null != e && e.length ? _(e, 1) : []
        };
      var m = t(7352),
        M = t(91847);
      var k = t(47016);
      const T = (E = function(e, n) {
        var t = {};
        if (null == e) return t;
        var i = !1;
        n = (0, r.A)(n, function(n) {
          return n = (0, o.A)(n, e), i || (i = n.length > 1), n
        }), (0, f.A)(e, (0, k.A)(e), t), i && (t = (0, a.A)(t, 7, v));
        for (var u = n.length; u--;) s(t, n[u]);
        return t
      }, (0, M.A)((0, m.A)(E, void 0, w), E + ""));
      var E
    }
  }
]);