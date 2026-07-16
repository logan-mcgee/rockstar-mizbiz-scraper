try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ca37c70b-59fb-4ea6-a60d-fca4c9f11b06", e._sentryDebugIdIdentifier = "sentry-dbid-ca37c70b-59fb-4ea6-a60d-fca4c9f11b06")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [573], {
    70278(e, t, r) {
      r.d(t, {
        A: () => P
      });
      var n = r(6461),
        a = r(90078),
        o = r(79660),
        c = r(57502),
        u = r(71353);
      var i = r(62538);
      var f = r(15545),
        s = r(24900),
        b = r(6866);
      var A = r(3582);
      var d = r(65883),
        l = r(47016),
        y = r(61105),
        j = Object.prototype.hasOwnProperty;
      var v = r(932);
      var p = /\w*$/;
      var g = r(94508),
        w = g.A ? g.A.prototype : void 0,
        h = w ? w.valueOf : void 0;
      var _ = r(93870);
      const I = function(e, t, r) {
        var n, a, o, c = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return (0, v.A)(e);
          case "[object Boolean]":
          case "[object Date]":
            return new c(+e);
          case "[object DataView]":
            return function(e, t) {
              var r = t ? (0, v.A)(e.buffer) : e.buffer;
              return new e.constructor(r, e.byteOffset, e.byteLength)
            }(e, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return (0, _.A)(e, r);
          case "[object Map]":
          case "[object Set]":
            return new c;
          case "[object Number]":
          case "[object String]":
            return new c(e);
          case "[object RegExp]":
            return (o = new(a = e).constructor(a.source, p.exec(a))).lastIndex = a.lastIndex, o;
          case "[object Symbol]":
            return n = e, h ? Object(h.call(n)) : {}
        }
      };
      var M = r(54746),
        k = r(6700),
        m = r(7269),
        E = r(96097);
      var S = r(35134),
        O = r(43192),
        x = O.A && O.A.isMap;
      const D = x ? (0, S.A)(x) : function(e) {
        return (0, E.A)(e) && "[object Map]" == (0, y.A)(e)
      };
      var U = r(45862);
      var T = O.A && O.A.isSet;
      const F = T ? (0, S.A)(T) : function(e) {
        return (0, E.A)(e) && "[object Set]" == (0, y.A)(e)
      };
      var C = "[object Arguments]",
        B = "[object Function]",
        N = "[object Object]",
        R = {};
      R[C] = R["[object Array]"] = R["[object ArrayBuffer]"] = R["[object DataView]"] = R["[object Boolean]"] = R["[object Date]"] = R["[object Float32Array]"] = R["[object Float64Array]"] = R["[object Int8Array]"] = R["[object Int16Array]"] = R["[object Int32Array]"] = R["[object Map]"] = R["[object Number]"] = R[N] = R["[object RegExp]"] = R["[object Set]"] = R["[object String]"] = R["[object Symbol]"] = R["[object Uint8Array]"] = R["[object Uint8ClampedArray]"] = R["[object Uint16Array]"] = R["[object Uint32Array]"] = !0, R["[object Error]"] = R[B] = R["[object WeakMap]"] = !1;
      const P = function e(t, r, v, p, g, w) {
        var h, _ = 1 & r,
          E = 2 & r,
          S = 4 & r;
        if (v && (h = g ? v(t, p, g, w) : v(t)), void 0 !== h) return h;
        if (!(0, U.A)(t)) return t;
        var O = (0, k.A)(t);
        if (O) {
          if (h = function(e) {
              var t = e.length,
                r = new e.constructor(t);
              return t && "string" == typeof e[0] && j.call(e, "index") && (r.index = e.index, r.input = e.input), r
            }(t), !_) return (0, s.A)(t, h)
        } else {
          var x = (0, y.A)(t),
            T = x == B || "[object GeneratorFunction]" == x;
          if ((0, m.A)(t)) return (0, f.A)(t, _);
          if (x == N || x == C || T && !g) {
            if (h = E || T ? {} : (0, M.A)(t), !_) return E ? function(e, t) {
              return (0, c.A)(e, (0, A.A)(e), t)
            }(t, function(e, t) {
              return e && (0, c.A)(t, (0, i.A)(t), e)
            }(h, t)) : function(e, t) {
              return (0, c.A)(e, (0, b.A)(e), t)
            }(t, function(e, t) {
              return e && (0, c.A)(t, (0, u.A)(t), e)
            }(h, t))
          } else {
            if (!R[x]) return g ? t : {};
            h = I(t, x, _)
          }
        }
        w || (w = new n.A);
        var P = w.get(t);
        if (P) return P;
        w.set(t, h), F(t) ? t.forEach(function(n) {
          h.add(e(n, r, v, n, t, w))
        }) : D(t) && t.forEach(function(n, a) {
          h.set(a, e(n, r, v, a, t, w))
        });
        var L = S ? E ? l.A : d.A : E ? i.A : u.A,
          V = O ? void 0 : L(t);
        return (0, a.A)(V || t, function(n, a) {
          V && (n = t[a = n]), (0, o.A)(h, a, e(n, r, v, a, t, w))
        }), h
      }
    },
    47016(e, t, r) {
      var n = r(94526),
        a = r(3582),
        o = r(62538);
      r.d(t, ["A", 0, function(e) {
        return (0, n.A)(e, o.A, a.A)
      }])
    },
    3582(e, t, r) {
      var n = r(68071),
        a = r(26670),
        o = r(6866),
        c = r(76348);
      const u = Object.getOwnPropertySymbols ? function(e) {
        for (var t = []; e;)(0, n.A)(t, (0, o.A)(e)), e = (0, a.A)(e);
        return t
      } : c.A;
      r.d(t, ["A", 0, u])
    },
    50573(e, t, r) {
      r.d(t, {
        A: () => k
      });
      var n = r(20829),
        a = r(70278),
        o = r(73443);
      var c = r(99793);
      const u = function(e, t) {
        return t.length < 2 ? e : (0, c.A)(e, function(e, t, r) {
          var n = -1,
            a = e.length;
          t < 0 && (t = -t > a ? 0 : a + t), (r = r > a ? a : r) < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
          for (var o = Array(a); ++n < a;) o[n] = e[n + t];
          return o
        }(t, 0, -1))
      };
      var i = r(33018),
        f = Object.prototype.hasOwnProperty;
      const s = function(e, t) {
        var r = -1,
          n = (t = (0, o.A)(t, e)).length;
        if (!n) return !0;
        for (; ++r < n;) {
          var a = (0, i.A)(t[r]);
          if ("__proto__" === a && !f.call(e, "__proto__")) return !1;
          if (("constructor" === a || "prototype" === a) && r < n - 1) return !1
        }
        var c = u(e, t);
        return null == c || delete c[(0, i.A)(function(e) {
          var t = null == e ? 0 : e.length;
          return t ? e[t - 1] : void 0
        }(t))]
      };
      var b = r(57502),
        A = r(58634);
      const d = function(e) {
        return (0, A.A)(e) ? void 0 : e
      };
      var l = r(68071),
        y = r(94508),
        j = r(48348),
        v = r(6700),
        p = y.A ? y.A.isConcatSpreadable : void 0;
      const g = function(e) {
          return (0, v.A)(e) || (0, j.A)(e) || !!(p && e && e[p])
        },
        w = function e(t, r, n, a, o) {
          var c = -1,
            u = t.length;
          for (n || (n = g), o || (o = []); ++c < u;) {
            var i = t[c];
            r > 0 && n(i) ? r > 1 ? e(i, r - 1, n, a, o) : (0, l.A)(o, i) : a || (o[o.length] = i)
          }
          return o
        },
        h = function(e) {
          return null != e && e.length ? w(e, 1) : []
        };
      var _ = r(7352),
        I = r(91847);
      var M = r(47016);
      const k = (m = function(e, t) {
        var r = {};
        if (null == e) return r;
        var c = !1;
        t = (0, n.A)(t, function(t) {
          return t = (0, o.A)(t, e), c || (c = t.length > 1), t
        }), (0, b.A)(e, (0, M.A)(e), r), c && (r = (0, a.A)(r, 7, d));
        for (var u = t.length; u--;) s(r, t[u]);
        return r
      }, (0, I.A)((0, _.A)(m, void 0, h), m + ""));
      var m
    }
  }
]);