try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "93063be7-b188-4ef9-9c5a-75cff67258da", t._sentryDebugIdIdentifier = "sentry-dbid-93063be7-b188-4ef9-9c5a-75cff67258da")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3860], {
    25553(t) {
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
    7557(t, e, r) {
      var n = r(4584),
        o = r(1504);
      t.exports = function(t, e, r) {
        (void 0 !== r && !o(t[e], r) || void 0 === r && !(e in t)) && n(t, e, r)
      }
    },
    90056(t, e, r) {
      var n = r(8568),
        o = r(23291);
      t.exports = function t(e, r, i, a, u) {
        var f = -1,
          l = e.length;
        for (i || (i = o), u || (u = []); ++f < l;) {
          var c = e[f];
          r > 0 && i(c) ? r > 1 ? t(c, r - 1, i, a, u) : n(u, c) : a || (u[u.length] = c)
        }
        return u
      }
    },
    82442(t, e, r) {
      var n = r(90889),
        o = r(7557),
        i = r(85089),
        a = r(92048),
        u = r(36373),
        f = r(71169),
        l = r(74646);
      t.exports = function t(e, r, c, s, p) {
        e !== r && i(r, function(i, f) {
          if (p || (p = new n), u(i)) a(e, r, f, c, t, s, p);
          else {
            var d = s ? s(l(e, f), i, f + "", e, r, p) : void 0;
            void 0 === d && (d = i), o(e, f, d)
          }
        }, f)
      }
    },
    92048(t, e, r) {
      var n = r(7557),
        o = r(34674),
        i = r(21537),
        a = r(5863),
        u = r(88673),
        f = r(43124),
        l = r(63577),
        c = r(64885),
        s = r(39968),
        p = r(49426),
        d = r(36373),
        v = r(4315),
        y = r(70247),
        h = r(74646),
        g = r(94772);
      t.exports = function(t, e, r, x, b, _, m) {
        var w = h(t, r),
          E = h(e, r),
          k = m.get(E);
        if (k) n(t, r, k);
        else {
          var T = _ ? _(w, E, r + "", t, e, m) : void 0,
            S = void 0 === T;
          if (S) {
            var M = l(E),
              $ = !M && s(E),
              D = !M && !$ && y(E);
            T = E, M || $ || D ? l(w) ? T = w : c(w) ? T = a(w) : $ ? (S = !1, T = o(E, !0)) : D ? (S = !1, T = i(E, !0)) : T = [] : v(E) || f(E) ? (T = w, f(w) ? T = g(w) : d(w) && !p(w) || (T = u(E))) : S = !1
          }
          S && (m.set(E, T), b(T, E, x, _, m), m.delete(E)), n(t, r, T)
        }
      }
    },
    43599(t) {
      var e = Math.ceil,
        r = Math.max;
      t.exports = function(t, n, o, i) {
        for (var a = -1, u = r(e((n - t) / (o || 1)), 0), f = Array(u); u--;) f[i ? u : ++a] = t, t += o;
        return f
      }
    },
    78974(t, e, r) {
      var n = r(46568),
        o = r(27117),
        i = r(82857);
      t.exports = function(t, e) {
        return i(o(t, e, n), t + "")
      }
    },
    62314(t, e, r) {
      var n = r(87147),
        o = r(71025),
        i = r(15313),
        a = r(36373),
        u = r(30285);
      t.exports = function(t, e, r, f) {
        if (!a(t)) return t;
        for (var l = -1, c = (e = o(e, t)).length, s = c - 1, p = t; null != p && ++l < c;) {
          var d = u(e[l]),
            v = r;
          if ("__proto__" === d || "constructor" === d || "prototype" === d) return t;
          if (l != s) {
            var y = p[d];
            void 0 === (v = f ? f(y, d, p) : void 0) && (v = a(y) ? y : i(e[l + 1]) ? [] : {})
          }
          n(p, d, v), p = p[d]
        }
        return t
      }
    },
    13210(t, e, r) {
      var n = r(66798),
        o = r(784),
        i = r(46568),
        a = o ? function(t, e) {
          return o(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(e),
            writable: !0
          })
        } : i;
      t.exports = a
    },
    52192(t) {
      t.exports = function(t, e, r) {
        var n = -1,
          o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e), (r = r > o ? o : r) < 0 && (r += o), o = e > r ? 0 : r - e >>> 0, e >>>= 0;
        for (var i = Array(o); ++n < o;) i[n] = t[n + e];
        return i
      }
    },
    56792(t, e, r) {
      var n = r(41856),
        o = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, n(t) + 1).replace(o, "") : t
      }
    },
    61187(t, e, r) {
      var n = r(71025),
        o = r(7730),
        i = r(70369),
        a = r(30285),
        u = Object.prototype.hasOwnProperty;
      t.exports = function(t, e) {
        var r = -1,
          f = (e = n(e, t)).length;
        if (!f) return !0;
        for (; ++r < f;) {
          var l = a(e[r]);
          if ("__proto__" === l && !u.call(t, "__proto__")) return !1;
          if (("constructor" === l || "prototype" === l) && r < f - 1) return !1
        }
        var c = i(t, e);
        return null == c || delete c[a(o(e))]
      }
    },
    71471(t, e, r) {
      var n = r(78974),
        o = r(34856);
      t.exports = function(t) {
        return n(function(e, r) {
          var n = -1,
            i = r.length,
            a = i > 1 ? r[i - 1] : void 0,
            u = i > 2 ? r[2] : void 0;
          for (a = t.length > 3 && "function" == typeof a ? (i--, a) : void 0, u && o(r[0], r[1], u) && (a = i < 3 ? void 0 : a, i = 1), e = Object(e); ++n < i;) {
            var f = r[n];
            f && t(e, f, n, a)
          }
          return e
        })
      }
    },
    55276(t, e, r) {
      var n = r(43599),
        o = r(34856),
        i = r(27872);
      t.exports = function(t) {
        return function(e, r, a) {
          return a && "number" != typeof a && o(e, r, a) && (r = a = void 0), e = i(e), void 0 === r ? (r = e, e = 0) : r = i(r), a = void 0 === a ? e < r ? 1 : -1 : i(a), n(e, r, a, t)
        }
      }
    },
    37546(t, e, r) {
      var n = r(4315);
      t.exports = function(t) {
        return n(t) ? void 0 : t
      }
    },
    4024(t, e, r) {
      var n = r(9786),
        o = r(27117),
        i = r(82857);
      t.exports = function(t) {
        return i(o(t, void 0, n), t + "")
      }
    },
    23291(t, e, r) {
      var n = r(64617),
        o = r(43124),
        i = r(63577),
        a = n ? n.isConcatSpreadable : void 0;
      t.exports = function(t) {
        return i(t) || o(t) || !!(a && t && t[a])
      }
    },
    34856(t, e, r) {
      var n = r(1504),
        o = r(19590),
        i = r(15313),
        a = r(36373);
      t.exports = function(t, e, r) {
        if (!a(r)) return !1;
        var u = typeof e;
        return !!("number" == u ? o(r) && i(e, r.length) : "string" == u && e in r) && n(r[e], t)
      }
    },
    27117(t, e, r) {
      var n = r(25553),
        o = Math.max;
      t.exports = function(t, e, r) {
        return e = o(void 0 === e ? t.length - 1 : e, 0),
          function() {
            for (var i = arguments, a = -1, u = o(i.length - e, 0), f = Array(u); ++a < u;) f[a] = i[e + a];
            a = -1;
            for (var l = Array(e + 1); ++a < e;) l[a] = i[a];
            return l[e] = r(f), n(t, this, l)
          }
      }
    },
    70369(t, e, r) {
      var n = r(69526),
        o = r(52192);
      t.exports = function(t, e) {
        return e.length < 2 ? t : n(t, o(e, 0, -1))
      }
    },
    74646(t) {
      t.exports = function(t, e) {
        if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
      }
    },
    82857(t, e, r) {
      var n = r(13210),
        o = r(76411)(n);
      t.exports = o
    },
    76411(t) {
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
    41856(t) {
      var e = /\s/;
      t.exports = function(t) {
        for (var r = t.length; r-- && e.test(t.charAt(r)););
        return r
      }
    },
    66798(t) {
      t.exports = function(t) {
        return function() {
          return t
        }
      }
    },
    54389(t, e, r) {
      var n = r(36373),
        o = r(42308),
        i = r(73894),
        a = Math.max,
        u = Math.min;
      t.exports = function(t, e, r) {
        var f, l, c, s, p, d, v = 0,
          y = !1,
          h = !1,
          g = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function x(e) {
          var r = f,
            n = l;
          return f = l = void 0, v = e, s = t.apply(n, r)
        }

        function b(t) {
          var r = t - d;
          return void 0 === d || r >= e || r < 0 || h && t - v >= c
        }

        function _() {
          var t = o();
          if (b(t)) return m(t);
          p = setTimeout(_, function(t) {
            var r = e - (t - d);
            return h ? u(r, c - (t - v)) : r
          }(t))
        }

        function m(t) {
          return p = void 0, g && f ? x(t) : (f = l = void 0, s)
        }

        function w() {
          var t = o(),
            r = b(t);
          if (f = arguments, l = this, d = t, r) {
            if (void 0 === p) return function(t) {
              return v = t, p = setTimeout(_, e), y ? x(t) : s
            }(d);
            if (h) return clearTimeout(p), p = setTimeout(_, e), x(d)
          }
          return void 0 === p && (p = setTimeout(_, e)), s
        }
        return e = i(e) || 0, n(r) && (y = !!r.leading, c = (h = "maxWait" in r) ? a(i(r.maxWait) || 0, e) : c, g = "trailing" in r ? !!r.trailing : g), w.cancel = function() {
          void 0 !== p && clearTimeout(p), v = 0, f = d = l = p = void 0
        }, w.flush = function() {
          return void 0 === p ? s : m(o())
        }, w
      }
    },
    9786(t, e, r) {
      var n = r(90056);
      t.exports = function(t) {
        return null != t && t.length ? n(t, 1) : []
      }
    },
    64885(t, e, r) {
      var n = r(19590),
        o = r(5698);
      t.exports = function(t) {
        return o(t) && n(t)
      }
    },
    7730(t) {
      t.exports = function(t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0
      }
    },
    54028(t, e, r) {
      var n = r(82442),
        o = r(71471)(function(t, e, r) {
          n(t, e, r)
        });
      t.exports = o
    },
    42308(t, e, r) {
      var n = r(84373);
      t.exports = function() {
        return n.Date.now()
      }
    },
    15963(t, e, r) {
      var n = r(75708),
        o = r(5559),
        i = r(61187),
        a = r(71025),
        u = r(38439),
        f = r(37546),
        l = r(4024),
        c = r(8221),
        s = l(function(t, e) {
          var r = {};
          if (null == t) return r;
          var l = !1;
          e = n(e, function(e) {
            return e = a(e, t), l || (l = e.length > 1), e
          }), u(t, c(t), r), l && (r = o(r, 7, f));
          for (var s = e.length; s--;) i(r, e[s]);
          return r
        });
      t.exports = s
    },
    68309(t, e, r) {
      var n = r(55276)();
      t.exports = n
    },
    88584(t, e, r) {
      var n = r(62314);
      t.exports = function(t, e, r, o) {
        return o = "function" == typeof o ? o : void 0, null == t ? t : n(t, e, r, o)
      }
    },
    27872(t, e, r) {
      var n = r(73894),
        o = 1 / 0;
      t.exports = function(t) {
        return t ? (t = n(t)) === o || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
      }
    },
    73894(t, e, r) {
      var n = r(56792),
        o = r(36373),
        i = r(69570),
        a = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
        l = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return NaN;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = n(t);
        var r = u.test(t);
        return r || f.test(t) ? l(t.slice(2), r ? 2 : 8) : a.test(t) ? NaN : +t
      }
    },
    94772(t, e, r) {
      var n = r(38439),
        o = r(71169);
      t.exports = function(t) {
        return n(t, o(t))
      }
    },
    64239(t, e, r) {
      "use strict";
      r.d(e, {
        s: () => a,
        t: () => i
      });
      var n = r(93082);

      function o(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e)
      }

      function i(...t) {
        return e => {
          let r = !1;
          const n = t.map(t => {
            const n = o(t, e);
            return r || "function" != typeof n || (r = !0), n
          });
          if (r) return () => {
            for (let e = 0; e < n.length; e++) {
              const r = n[e];
              "function" == typeof r ? r() : o(t[e], null)
            }
          }
        }
      }

      function a(...t) {
        return n.useCallback(i(...t), t)
      }
    },
    17172(t, e, r) {
      "use strict";
      let n;
      r.d(e, {
        DX: () => u,
        Dc: () => l,
        TL: () => a,
        xV: () => c
      });
      var o = r(93082),
        i = r(64239);

      function a(t) {
        const e = o.forwardRef((e, r) => {
          let {
            children: n,
            ...a
          } = e, u = null, l = !1;
          const c = [];
          d(n) && "function" == typeof h && (n = h(n._payload)), o.Children.forEach(n, t => {
            if (e = t, o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === f) {
              l = !0;
              const e = t;
              let r = "child" in e.props ? e.props.child : e.props.children;
              d(r) && "function" == typeof h && (r = h(r._payload)), u = s(e, r), c.push(u?.props?.children)
            } else c.push(t);
            var e
          }), u ? u = o.cloneElement(u, void 0, c) : !l && 1 === o.Children.count(n) && o.isValidElement(n) && (u = n);
          const p = u ? function(t) {
              let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
                r = e && "isReactWarning" in e && e.isReactWarning;
              return r ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? t.props.ref : t.props.ref || t.ref)
            }(u) : void 0,
            g = (0, i.s)(r, p);
          if (!u) {
            if (n || 0 === n) throw new Error(l ? y(t) : v(t));
            return n
          }
          const x = function(t, e) {
            const r = {
              ...e
            };
            for (const n in e) {
              const o = t[n],
                i = e[n];
              /^on[A-Z]/.test(n) ? o && i ? r[n] = (...t) => {
                const e = i(...t);
                return o(...t), e
              } : o && (r[n] = o) : "style" === n ? r[n] = {
                ...o,
                ...i
              } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
            }
            return {
              ...t,
              ...r
            }
          }(a, u.props ?? {});
          return u.type !== o.Fragment && (x.ref = r ? g : p), o.cloneElement(u, x)
        });
        return e.displayName = `${t}.Slot`, e
      }
      var u = a("Slot"),
        f = Symbol.for("radix.slottable");

      function l(t) {
        const e = t => "child" in t ? t.children(t.child) : t.children;
        return e.displayName = `${t}.Slottable`, e.__radixId = f, e
      }
      var c = l("Slottable"),
        s = (t, e) => {
          if ("child" in t.props) {
            const e = t.props.child;
            return o.isValidElement(e) ? o.cloneElement(e, void 0, t.props.children(e.props.children)) : null
          }
          return o.isValidElement(e) ? e : null
        },
        p = Symbol.for("react.lazy");

      function d(t) {
        return null != t && "object" == typeof t && "$$typeof" in t && t.$$typeof === p && "_payload" in t && "object" == typeof(e = t._payload) && null !== e && "then" in e;
        var e
      }
      var v = t => `${t} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        y = t => `${t} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        h = (n || (n = r.t(o, 2)))[" use ".trim().toString()]
    }
  }
]);