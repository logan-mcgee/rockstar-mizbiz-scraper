try {
  let r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new r.Error).stack;
  t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "a15b3323-251c-49f6-b0e3-9710a57b383e", r._sentryDebugIdIdentifier = "sentry-dbid-a15b3323-251c-49f6-b0e3-9710a57b383e")
} catch (r) {} {
  let r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[(new r.Error).stack] = Object.assign({}, r._sentryModuleMetadata[(new r.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6765], {
    25553(r) {
      r.exports = function(r, t, e) {
        switch (e.length) {
          case 0:
            return r.call(t);
          case 1:
            return r.call(t, e[0]);
          case 2:
            return r.call(t, e[0], e[1]);
          case 3:
            return r.call(t, e[0], e[1], e[2])
        }
        return r.apply(t, e)
      }
    },
    7557(r, t, e) {
      var n = e(4584),
        o = e(1504);
      r.exports = function(r, t, e) {
        (void 0 !== e && !o(r[t], e) || void 0 === e && !(t in r)) && n(r, t, e)
      }
    },
    90056(r, t, e) {
      var n = e(8568),
        o = e(23291);
      r.exports = function r(t, e, i, a, u) {
        var f = -1,
          l = t.length;
        for (i || (i = o), u || (u = []); ++f < l;) {
          var s = t[f];
          e > 0 && i(s) ? e > 1 ? r(s, e - 1, i, a, u) : n(u, s) : a || (u[u.length] = s)
        }
        return u
      }
    },
    82442(r, t, e) {
      var n = e(90889),
        o = e(7557),
        i = e(85089),
        a = e(92048),
        u = e(36373),
        f = e(71169),
        l = e(74646);
      r.exports = function r(t, e, s, c, d) {
        t !== e && i(e, function(i, f) {
          if (d || (d = new n), u(i)) a(t, e, f, s, r, c, d);
          else {
            var p = c ? c(l(t, f), i, f + "", t, e, d) : void 0;
            void 0 === p && (p = i), o(t, f, p)
          }
        }, f)
      }
    },
    92048(r, t, e) {
      var n = e(7557),
        o = e(34674),
        i = e(21537),
        a = e(5863),
        u = e(88673),
        f = e(43124),
        l = e(63577),
        s = e(64885),
        c = e(39968),
        d = e(49426),
        p = e(36373),
        v = e(4315),
        y = e(70247),
        g = e(74646),
        b = e(94772);
      r.exports = function(r, t, e, h, x, _, m) {
        var w = g(r, e),
          k = g(t, e),
          E = m.get(k);
        if (E) n(r, e, E);
        else {
          var T = _ ? _(w, k, e + "", r, t, m) : void 0,
            M = void 0 === T;
          if (M) {
            var S = l(k),
              j = !S && c(k),
              C = !S && !j && y(k);
            T = k, S || j || C ? l(w) ? T = w : s(w) ? T = a(w) : j ? (M = !1, T = o(k, !0)) : C ? (M = !1, T = i(k, !0)) : T = [] : v(k) || f(k) ? (T = w, f(w) ? T = b(w) : p(w) && !d(w) || (T = u(k))) : M = !1
          }
          M && (m.set(k, T), x(T, k, h, _, m), m.delete(k)), n(r, e, T)
        }
      }
    },
    43599(r) {
      var t = Math.ceil,
        e = Math.max;
      r.exports = function(r, n, o, i) {
        for (var a = -1, u = e(t((n - r) / (o || 1)), 0), f = Array(u); u--;) f[i ? u : ++a] = r, r += o;
        return f
      }
    },
    78974(r, t, e) {
      var n = e(46568),
        o = e(27117),
        i = e(82857);
      r.exports = function(r, t) {
        return i(o(r, t, n), r + "")
      }
    },
    62314(r, t, e) {
      var n = e(87147),
        o = e(71025),
        i = e(15313),
        a = e(36373),
        u = e(30285);
      r.exports = function(r, t, e, f) {
        if (!a(r)) return r;
        for (var l = -1, s = (t = o(t, r)).length, c = s - 1, d = r; null != d && ++l < s;) {
          var p = u(t[l]),
            v = e;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return r;
          if (l != c) {
            var y = d[p];
            void 0 === (v = f ? f(y, p, d) : void 0) && (v = a(y) ? y : i(t[l + 1]) ? [] : {})
          }
          n(d, p, v), d = d[p]
        }
        return r
      }
    },
    13210(r, t, e) {
      var n = e(66798),
        o = e(784),
        i = e(46568),
        a = o ? function(r, t) {
          return o(r, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(t),
            writable: !0
          })
        } : i;
      r.exports = a
    },
    52192(r) {
      r.exports = function(r, t, e) {
        var n = -1,
          o = r.length;
        t < 0 && (t = -t > o ? 0 : o + t), (e = e > o ? o : e) < 0 && (e += o), o = t > e ? 0 : e - t >>> 0, t >>>= 0;
        for (var i = Array(o); ++n < o;) i[n] = r[n + t];
        return i
      }
    },
    56792(r, t, e) {
      var n = e(41856),
        o = /^\s+/;
      r.exports = function(r) {
        return r ? r.slice(0, n(r) + 1).replace(o, "") : r
      }
    },
    61187(r, t, e) {
      var n = e(71025),
        o = e(7730),
        i = e(70369),
        a = e(30285),
        u = Object.prototype.hasOwnProperty;
      r.exports = function(r, t) {
        var e = -1,
          f = (t = n(t, r)).length;
        if (!f) return !0;
        for (; ++e < f;) {
          var l = a(t[e]);
          if ("__proto__" === l && !u.call(r, "__proto__")) return !1;
          if (("constructor" === l || "prototype" === l) && e < f - 1) return !1
        }
        var s = i(r, t);
        return null == s || delete s[a(o(t))]
      }
    },
    71471(r, t, e) {
      var n = e(78974),
        o = e(34856);
      r.exports = function(r) {
        return n(function(t, e) {
          var n = -1,
            i = e.length,
            a = i > 1 ? e[i - 1] : void 0,
            u = i > 2 ? e[2] : void 0;
          for (a = r.length > 3 && "function" == typeof a ? (i--, a) : void 0, u && o(e[0], e[1], u) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++n < i;) {
            var f = e[n];
            f && r(t, f, n, a)
          }
          return t
        })
      }
    },
    55276(r, t, e) {
      var n = e(43599),
        o = e(34856),
        i = e(27872);
      r.exports = function(r) {
        return function(t, e, a) {
          return a && "number" != typeof a && o(t, e, a) && (e = a = void 0), t = i(t), void 0 === e ? (e = t, t = 0) : e = i(e), a = void 0 === a ? t < e ? 1 : -1 : i(a), n(t, e, a, r)
        }
      }
    },
    37546(r, t, e) {
      var n = e(4315);
      r.exports = function(r) {
        return n(r) ? void 0 : r
      }
    },
    4024(r, t, e) {
      var n = e(9786),
        o = e(27117),
        i = e(82857);
      r.exports = function(r) {
        return i(o(r, void 0, n), r + "")
      }
    },
    23291(r, t, e) {
      var n = e(64617),
        o = e(43124),
        i = e(63577),
        a = n ? n.isConcatSpreadable : void 0;
      r.exports = function(r) {
        return i(r) || o(r) || !!(a && r && r[a])
      }
    },
    34856(r, t, e) {
      var n = e(1504),
        o = e(19590),
        i = e(15313),
        a = e(36373);
      r.exports = function(r, t, e) {
        if (!a(e)) return !1;
        var u = typeof t;
        return !!("number" == u ? o(e) && i(t, e.length) : "string" == u && t in e) && n(e[t], r)
      }
    },
    27117(r, t, e) {
      var n = e(25553),
        o = Math.max;
      r.exports = function(r, t, e) {
        return t = o(void 0 === t ? r.length - 1 : t, 0),
          function() {
            for (var i = arguments, a = -1, u = o(i.length - t, 0), f = Array(u); ++a < u;) f[a] = i[t + a];
            a = -1;
            for (var l = Array(t + 1); ++a < t;) l[a] = i[a];
            return l[t] = e(f), n(r, this, l)
          }
      }
    },
    70369(r, t, e) {
      var n = e(69526),
        o = e(52192);
      r.exports = function(r, t) {
        return t.length < 2 ? r : n(r, o(t, 0, -1))
      }
    },
    74646(r) {
      r.exports = function(r, t) {
        if (("constructor" !== t || "function" != typeof r[t]) && "__proto__" != t) return r[t]
      }
    },
    82857(r, t, e) {
      var n = e(13210),
        o = e(76411)(n);
      r.exports = o
    },
    76411(r) {
      var t = Date.now;
      r.exports = function(r) {
        var e = 0,
          n = 0;
        return function() {
          var o = t(),
            i = 16 - (o - n);
          if (n = o, i > 0) {
            if (++e >= 800) return arguments[0]
          } else e = 0;
          return r.apply(void 0, arguments)
        }
      }
    },
    41856(r) {
      var t = /\s/;
      r.exports = function(r) {
        for (var e = r.length; e-- && t.test(r.charAt(e)););
        return e
      }
    },
    66798(r) {
      r.exports = function(r) {
        return function() {
          return r
        }
      }
    },
    54389(r, t, e) {
      var n = e(36373),
        o = e(42308),
        i = e(73894),
        a = Math.max,
        u = Math.min;
      r.exports = function(r, t, e) {
        var f, l, s, c, d, p, v = 0,
          y = !1,
          g = !1,
          b = !0;
        if ("function" != typeof r) throw new TypeError("Expected a function");

        function h(t) {
          var e = f,
            n = l;
          return f = l = void 0, v = t, c = r.apply(n, e)
        }

        function x(r) {
          var e = r - p;
          return void 0 === p || e >= t || e < 0 || g && r - v >= s
        }

        function _() {
          var r = o();
          if (x(r)) return m(r);
          d = setTimeout(_, function(r) {
            var e = t - (r - p);
            return g ? u(e, s - (r - v)) : e
          }(r))
        }

        function m(r) {
          return d = void 0, b && f ? h(r) : (f = l = void 0, c)
        }

        function w() {
          var r = o(),
            e = x(r);
          if (f = arguments, l = this, p = r, e) {
            if (void 0 === d) return function(r) {
              return v = r, d = setTimeout(_, t), y ? h(r) : c
            }(p);
            if (g) return clearTimeout(d), d = setTimeout(_, t), h(p)
          }
          return void 0 === d && (d = setTimeout(_, t)), c
        }
        return t = i(t) || 0, n(e) && (y = !!e.leading, s = (g = "maxWait" in e) ? a(i(e.maxWait) || 0, t) : s, b = "trailing" in e ? !!e.trailing : b), w.cancel = function() {
          void 0 !== d && clearTimeout(d), v = 0, f = p = l = d = void 0
        }, w.flush = function() {
          return void 0 === d ? c : m(o())
        }, w
      }
    },
    9786(r, t, e) {
      var n = e(90056);
      r.exports = function(r) {
        return null != r && r.length ? n(r, 1) : []
      }
    },
    64885(r, t, e) {
      var n = e(19590),
        o = e(5698);
      r.exports = function(r) {
        return o(r) && n(r)
      }
    },
    7730(r) {
      r.exports = function(r) {
        var t = null == r ? 0 : r.length;
        return t ? r[t - 1] : void 0
      }
    },
    54028(r, t, e) {
      var n = e(82442),
        o = e(71471)(function(r, t, e) {
          n(r, t, e)
        });
      r.exports = o
    },
    42308(r, t, e) {
      var n = e(84373);
      r.exports = function() {
        return n.Date.now()
      }
    },
    15963(r, t, e) {
      var n = e(75708),
        o = e(5559),
        i = e(61187),
        a = e(71025),
        u = e(38439),
        f = e(37546),
        l = e(4024),
        s = e(8221),
        c = l(function(r, t) {
          var e = {};
          if (null == r) return e;
          var l = !1;
          t = n(t, function(t) {
            return t = a(t, r), l || (l = t.length > 1), t
          }), u(r, s(r), e), l && (e = o(e, 7, f));
          for (var c = t.length; c--;) i(e, t[c]);
          return e
        });
      r.exports = c
    },
    68309(r, t, e) {
      var n = e(55276)();
      r.exports = n
    },
    88584(r, t, e) {
      var n = e(62314);
      r.exports = function(r, t, e, o) {
        return o = "function" == typeof o ? o : void 0, null == r ? r : n(r, t, e, o)
      }
    },
    27872(r, t, e) {
      var n = e(73894),
        o = 1 / 0;
      r.exports = function(r) {
        return r ? (r = n(r)) === o || r === -1 / 0 ? 17976931348623157e292 * (r < 0 ? -1 : 1) : r == r ? r : 0 : 0 === r ? r : 0
      }
    },
    73894(r, t, e) {
      var n = e(56792),
        o = e(36373),
        i = e(69570),
        a = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
        l = parseInt;
      r.exports = function(r) {
        if ("number" == typeof r) return r;
        if (i(r)) return NaN;
        if (o(r)) {
          var t = "function" == typeof r.valueOf ? r.valueOf() : r;
          r = o(t) ? t + "" : t
        }
        if ("string" != typeof r) return 0 === r ? r : +r;
        r = n(r);
        var e = u.test(r);
        return e || f.test(r) ? l(r.slice(2), e ? 2 : 8) : a.test(r) ? NaN : +r
      }
    },
    94772(r, t, e) {
      var n = e(38439),
        o = e(71169);
      r.exports = function(r) {
        return n(r, o(r))
      }
    },
    50446(r, t, e) {
      "use strict";
      e.d(t, {
        s: () => a,
        t: () => i
      });
      var n = e(93082);

      function o(r, t) {
        if ("function" == typeof r) return r(t);
        null != r && (r.current = t)
      }

      function i(...r) {
        return t => {
          let e = !1;
          const n = r.map(r => {
            const n = o(r, t);
            return e || "function" != typeof n || (e = !0), n
          });
          if (e) return () => {
            for (let t = 0; t < n.length; t++) {
              const e = n[t];
              "function" == typeof e ? e() : o(r[t], null)
            }
          }
        }
      }

      function a(...r) {
        return n.useCallback(i(...r), r)
      }
    },
    38957(r, t, e) {
      "use strict";
      var n;
      e.d(t, {
        DX: () => c,
        TL: () => s,
        xV: () => y
      });
      var o = e(93082),
        i = e(50446),
        a = e(39793),
        u = Symbol.for("react.lazy"),
        f = (n || (n = e.t(o, 2)))[" use ".trim().toString()];

      function l(r) {
        return null != r && "object" == typeof r && "$$typeof" in r && r.$$typeof === u && "_payload" in r && "object" == typeof(t = r._payload) && null !== t && "then" in t;
        var t
      }

      function s(r) {
        const t = d(r),
          e = o.forwardRef((r, e) => {
            let {
              children: n,
              ...i
            } = r;
            l(n) && "function" == typeof f && (n = f(n._payload));
            const u = o.Children.toArray(n),
              s = u.find(g);
            if (s) {
              const r = s.props.children,
                n = u.map(t => t === s ? o.Children.count(r) > 1 ? o.Children.only(null) : o.isValidElement(r) ? r.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: e,
                children: o.isValidElement(r) ? o.cloneElement(r, void 0, n) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: e,
              children: n
            })
          });
        return e.displayName = `${r}.Slot`, e
      }
      var c = s("Slot");

      function d(r) {
        const t = o.forwardRef((r, t) => {
          let {
            children: e,
            ...n
          } = r;
          if (l(e) && "function" == typeof f && (e = f(e._payload)), o.isValidElement(e)) {
            const r = function(r) {
                let t = Object.getOwnPropertyDescriptor(r.props, "ref")?.get,
                  e = t && "isReactWarning" in t && t.isReactWarning;
                return e ? r.ref : (t = Object.getOwnPropertyDescriptor(r, "ref")?.get, e = t && "isReactWarning" in t && t.isReactWarning, e ? r.props.ref : r.props.ref || r.ref)
              }(e),
              a = function(r, t) {
                const e = {
                  ...t
                };
                for (const n in t) {
                  const o = r[n],
                    i = t[n];
                  /^on[A-Z]/.test(n) ? o && i ? e[n] = (...r) => {
                    const t = i(...r);
                    return o(...r), t
                  } : o && (e[n] = o) : "style" === n ? e[n] = {
                    ...o,
                    ...i
                  } : "className" === n && (e[n] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...r,
                  ...e
                }
              }(n, e.props);
            return e.type !== o.Fragment && (a.ref = t ? (0, i.t)(t, r) : r), o.cloneElement(e, a)
          }
          return o.Children.count(e) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${r}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function v(r) {
        const t = ({
          children: r
        }) => (0, a.jsx)(a.Fragment, {
          children: r
        });
        return t.displayName = `${r}.Slottable`, t.__radixId = p, t
      }
      var y = v("Slottable");

      function g(r) {
        return o.isValidElement(r) && "function" == typeof r.type && "__radixId" in r.type && r.type.__radixId === p
      }
    }
  }
]);