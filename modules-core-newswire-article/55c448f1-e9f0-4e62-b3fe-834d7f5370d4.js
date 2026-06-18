try {
  let r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new r.Error).stack;
  e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "55c448f1-e9f0-4e62-b3fe-834d7f5370d4", r._sentryDebugIdIdentifier = "sentry-dbid-55c448f1-e9f0-4e62-b3fe-834d7f5370d4")
} catch (r) {} {
  let r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[(new r.Error).stack] = Object.assign({}, r._sentryModuleMetadata[(new r.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6765], {
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
      r.exports = function r(e, t, i, a, u) {
        var f = -1,
          l = e.length;
        for (i || (i = o), u || (u = []); ++f < l;) {
          var c = e[f];
          t > 0 && i(c) ? t > 1 ? r(c, t - 1, i, a, u) : n(u, c) : a || (u[u.length] = c)
        }
        return u
      }
    },
    82442(r, e, t) {
      var n = t(90889),
        o = t(7557),
        i = t(85089),
        a = t(92048),
        u = t(36373),
        f = t(71169),
        l = t(74646);
      r.exports = function r(e, t, c, s, d) {
        e !== t && i(t, function(i, f) {
          if (d || (d = new n), u(i)) a(e, t, f, c, r, s, d);
          else {
            var p = s ? s(l(e, f), i, f + "", e, t, d) : void 0;
            void 0 === p && (p = i), o(e, f, p)
          }
        }, f)
      }
    },
    92048(r, e, t) {
      var n = t(7557),
        o = t(34674),
        i = t(21537),
        a = t(5863),
        u = t(88673),
        f = t(43124),
        l = t(63577),
        c = t(64885),
        s = t(39968),
        d = t(49426),
        p = t(36373),
        v = t(4315),
        y = t(70247),
        g = t(74646),
        _ = t(94772);
      r.exports = function(r, e, t, h, x, b, m) {
        var w = g(r, t),
          E = g(e, t),
          O = m.get(E);
        if (O) n(r, t, O);
        else {
          var T = b ? b(w, E, t + "", r, e, m) : void 0,
            S = void 0 === T;
          if (S) {
            var k = l(E),
              j = !k && s(E),
              M = !k && !j && y(E);
            T = E, k || j || M ? l(w) ? T = w : c(w) ? T = a(w) : j ? (S = !1, T = o(E, !0)) : M ? (S = !1, T = i(E, !0)) : T = [] : v(E) || f(E) ? (T = w, f(w) ? T = _(w) : p(w) && !d(w) || (T = u(E))) : S = !1
          }
          S && (m.set(E, T), x(T, E, h, b, m), m.delete(E)), n(r, t, T)
        }
      }
    },
    43599(r) {
      var e = Math.ceil,
        t = Math.max;
      r.exports = function(r, n, o, i) {
        for (var a = -1, u = t(e((n - r) / (o || 1)), 0), f = Array(u); u--;) f[i ? u : ++a] = r, r += o;
        return f
      }
    },
    78974(r, e, t) {
      var n = t(46568),
        o = t(27117),
        i = t(82857);
      r.exports = function(r, e) {
        return i(o(r, e, n), r + "")
      }
    },
    62314(r, e, t) {
      var n = t(87147),
        o = t(71025),
        i = t(15313),
        a = t(36373),
        u = t(30285);
      r.exports = function(r, e, t, f) {
        if (!a(r)) return r;
        for (var l = -1, c = (e = o(e, r)).length, s = c - 1, d = r; null != d && ++l < c;) {
          var p = u(e[l]),
            v = t;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return r;
          if (l != s) {
            var y = d[p];
            void 0 === (v = f ? f(y, p, d) : void 0) && (v = a(y) ? y : i(e[l + 1]) ? [] : {})
          }
          n(d, p, v), d = d[p]
        }
        return r
      }
    },
    13210(r, e, t) {
      var n = t(66798),
        o = t(78403),
        i = t(46568),
        a = o ? function(r, e) {
          return o(r, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(e),
            writable: !0
          })
        } : i;
      r.exports = a
    },
    52192(r) {
      r.exports = function(r, e, t) {
        var n = -1,
          o = r.length;
        e < 0 && (e = -e > o ? 0 : o + e), (t = t > o ? o : t) < 0 && (t += o), o = e > t ? 0 : t - e >>> 0, e >>>= 0;
        for (var i = Array(o); ++n < o;) i[n] = r[n + e];
        return i
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
        i = t(70369),
        a = t(30285),
        u = Object.prototype.hasOwnProperty;
      r.exports = function(r, e) {
        var t = -1,
          f = (e = n(e, r)).length;
        if (!f) return !0;
        for (; ++t < f;) {
          var l = a(e[t]);
          if ("__proto__" === l && !u.call(r, "__proto__")) return !1;
          if (("constructor" === l || "prototype" === l) && t < f - 1) return !1
        }
        var c = i(r, e);
        return null == c || delete c[a(o(e))]
      }
    },
    71471(r, e, t) {
      var n = t(78974),
        o = t(34856);
      r.exports = function(r) {
        return n(function(e, t) {
          var n = -1,
            i = t.length,
            a = i > 1 ? t[i - 1] : void 0,
            u = i > 2 ? t[2] : void 0;
          for (a = r.length > 3 && "function" == typeof a ? (i--, a) : void 0, u && o(t[0], t[1], u) && (a = i < 3 ? void 0 : a, i = 1), e = Object(e); ++n < i;) {
            var f = t[n];
            f && r(e, f, n, a)
          }
          return e
        })
      }
    },
    55276(r, e, t) {
      var n = t(43599),
        o = t(34856),
        i = t(27872);
      r.exports = function(r) {
        return function(e, t, a) {
          return a && "number" != typeof a && o(e, t, a) && (t = a = void 0), e = i(e), void 0 === t ? (t = e, e = 0) : t = i(t), a = void 0 === a ? e < t ? 1 : -1 : i(a), n(e, t, a, r)
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
        i = t(82857);
      r.exports = function(r) {
        return i(o(r, void 0, n), r + "")
      }
    },
    23291(r, e, t) {
      var n = t(64617),
        o = t(43124),
        i = t(63577),
        a = n ? n.isConcatSpreadable : void 0;
      r.exports = function(r) {
        return i(r) || o(r) || !!(a && r && r[a])
      }
    },
    34856(r, e, t) {
      var n = t(1504),
        o = t(19590),
        i = t(15313),
        a = t(36373);
      r.exports = function(r, e, t) {
        if (!a(t)) return !1;
        var u = typeof e;
        return !!("number" == u ? o(t) && i(e, t.length) : "string" == u && e in t) && n(t[e], r)
      }
    },
    27117(r, e, t) {
      var n = t(25553),
        o = Math.max;
      r.exports = function(r, e, t) {
        return e = o(void 0 === e ? r.length - 1 : e, 0),
          function() {
            for (var i = arguments, a = -1, u = o(i.length - e, 0), f = Array(u); ++a < u;) f[a] = i[e + a];
            a = -1;
            for (var l = Array(e + 1); ++a < e;) l[a] = i[a];
            return l[e] = t(f), n(r, this, l)
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
            i = 16 - (o - n);
          if (n = o, i > 0) {
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
        i = t(73894),
        a = Math.max,
        u = Math.min;
      r.exports = function(r, e, t) {
        var f, l, c, s, d, p, v = 0,
          y = !1,
          g = !1,
          _ = !0;
        if ("function" != typeof r) throw new TypeError("Expected a function");

        function h(e) {
          var t = f,
            n = l;
          return f = l = void 0, v = e, s = r.apply(n, t)
        }

        function x(r) {
          var t = r - p;
          return void 0 === p || t >= e || t < 0 || g && r - v >= c
        }

        function b() {
          var r = o();
          if (x(r)) return m(r);
          d = setTimeout(b, function(r) {
            var t = e - (r - p);
            return g ? u(t, c - (r - v)) : t
          }(r))
        }

        function m(r) {
          return d = void 0, _ && f ? h(r) : (f = l = void 0, s)
        }

        function w() {
          var r = o(),
            t = x(r);
          if (f = arguments, l = this, p = r, t) {
            if (void 0 === d) return function(r) {
              return v = r, d = setTimeout(b, e), y ? h(r) : s
            }(p);
            if (g) return clearTimeout(d), d = setTimeout(b, e), h(p)
          }
          return void 0 === d && (d = setTimeout(b, e)), s
        }
        return e = i(e) || 0, n(t) && (y = !!t.leading, c = (g = "maxWait" in t) ? a(i(t.maxWait) || 0, e) : c, _ = "trailing" in t ? !!t.trailing : _), w.cancel = function() {
          void 0 !== d && clearTimeout(d), v = 0, f = p = l = d = void 0
        }, w.flush = function() {
          return void 0 === d ? s : m(o())
        }, w
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
        i = t(61187),
        a = t(71025),
        u = t(38439),
        f = t(37546),
        l = t(4024),
        c = t(8221),
        s = l(function(r, e) {
          var t = {};
          if (null == r) return t;
          var l = !1;
          e = n(e, function(e) {
            return e = a(e, r), l || (l = e.length > 1), e
          }), u(r, c(r), t), l && (t = o(t, 7, f));
          for (var s = e.length; s--;) i(t, e[s]);
          return t
        });
      r.exports = s
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
        i = t(69570),
        a = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
        l = parseInt;
      r.exports = function(r) {
        if ("number" == typeof r) return r;
        if (i(r)) return NaN;
        if (o(r)) {
          var e = "function" == typeof r.valueOf ? r.valueOf() : r;
          r = o(e) ? e + "" : e
        }
        if ("string" != typeof r) return 0 === r ? r : +r;
        r = n(r);
        var t = u.test(r);
        return t || f.test(r) ? l(r.slice(2), t ? 2 : 8) : a.test(r) ? NaN : +r
      }
    },
    94772(r, e, t) {
      var n = t(38439),
        o = t(71169);
      r.exports = function(r) {
        return n(r, o(r))
      }
    },
    94931(r, e, t) {
      "use strict";
      var n = t(93082),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(r, e, t) {
        var n, i = {},
          l = null,
          c = null;
        for (n in void 0 !== t && (l = "" + t), void 0 !== e.key && (l = "" + e.key), void 0 !== e.ref && (c = e.ref), e) a.call(e, n) && !f.hasOwnProperty(n) && (i[n] = e[n]);
        if (r && r.defaultProps)
          for (n in e = r.defaultProps) void 0 === i[n] && (i[n] = e[n]);
        return {
          $$typeof: o,
          type: r,
          key: l,
          ref: c,
          props: i,
          _owner: u.current
        }
      }
      e.Fragment = i, e.jsx = l, e.jsxs = l
    },
    39793(r, e, t) {
      "use strict";
      r.exports = t(94931)
    },
    50446(r, e, t) {
      "use strict";
      t.d(e, {
        s: () => a,
        t: () => i
      });
      var n = t(93082);

      function o(r, e) {
        if ("function" == typeof r) return r(e);
        null != r && (r.current = e)
      }

      function i(...r) {
        return e => {
          let t = !1;
          const n = r.map(r => {
            const n = o(r, e);
            return t || "function" != typeof n || (t = !0), n
          });
          if (t) return () => {
            for (let e = 0; e < n.length; e++) {
              const t = n[e];
              "function" == typeof t ? t() : o(r[e], null)
            }
          }
        }
      }

      function a(...r) {
        return n.useCallback(i(...r), r)
      }
    },
    38957(r, e, t) {
      "use strict";
      var n;
      t.d(e, {
        DX: () => s,
        TL: () => c,
        xV: () => y
      });
      var o = t(93082),
        i = t(50446),
        a = t(39793),
        u = Symbol.for("react.lazy"),
        f = (n || (n = t.t(o, 2)))[" use ".trim().toString()];

      function l(r) {
        return null != r && "object" == typeof r && "$$typeof" in r && r.$$typeof === u && "_payload" in r && "object" == typeof(e = r._payload) && null !== e && "then" in e;
        var e
      }

      function c(r) {
        const e = d(r),
          t = o.forwardRef((r, t) => {
            let {
              children: n,
              ...i
            } = r;
            l(n) && "function" == typeof f && (n = f(n._payload));
            const u = o.Children.toArray(n),
              c = u.find(g);
            if (c) {
              const r = c.props.children,
                n = u.map(e => e === c ? o.Children.count(r) > 1 ? o.Children.only(null) : o.isValidElement(r) ? r.props.children : null : e);
              return (0, a.jsx)(e, {
                ...i,
                ref: t,
                children: o.isValidElement(r) ? o.cloneElement(r, void 0, n) : null
              })
            }
            return (0, a.jsx)(e, {
              ...i,
              ref: t,
              children: n
            })
          });
        return t.displayName = `${r}.Slot`, t
      }
      var s = c("Slot");

      function d(r) {
        const e = o.forwardRef((r, e) => {
          let {
            children: t,
            ...n
          } = r;
          if (l(t) && "function" == typeof f && (t = f(t._payload)), o.isValidElement(t)) {
            const r = function(r) {
                let e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get,
                  t = e && "isReactWarning" in e && e.isReactWarning;
                return t ? r.ref : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning, t ? r.props.ref : r.props.ref || r.ref)
              }(t),
              a = function(r, e) {
                const t = {
                  ...e
                };
                for (const n in e) {
                  const o = r[n],
                    i = e[n];
                  /^on[A-Z]/.test(n) ? o && i ? t[n] = (...r) => {
                    const e = i(...r);
                    return o(...r), e
                  } : o && (t[n] = o) : "style" === n ? t[n] = {
                    ...o,
                    ...i
                  } : "className" === n && (t[n] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...r,
                  ...t
                }
              }(n, t.props);
            return t.type !== o.Fragment && (a.ref = e ? (0, i.t)(e, r) : r), o.cloneElement(t, a)
          }
          return o.Children.count(t) > 1 ? o.Children.only(null) : null
        });
        return e.displayName = `${r}.SlotClone`, e
      }
      var p = Symbol("radix.slottable");

      function v(r) {
        const e = ({
          children: r
        }) => (0, a.jsx)(a.Fragment, {
          children: r
        });
        return e.displayName = `${r}.Slottable`, e.__radixId = p, e
      }
      var y = v("Slottable");

      function g(r) {
        return o.isValidElement(r) && "function" == typeof r.type && "__radixId" in r.type && r.type.__radixId === p
      }
    }
  }
]);