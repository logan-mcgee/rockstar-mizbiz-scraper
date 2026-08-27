try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c7d635d2-bf18-451e-8ab1-fc397447deaa", e._sentryDebugIdIdentifier = "sentry-dbid-c7d635d2-bf18-451e-8ab1-fc397447deaa")
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
  [4997], {
    25553(e) {
      e.exports = function(e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, r[0]);
          case 2:
            return e.call(t, r[0], r[1]);
          case 3:
            return e.call(t, r[0], r[1], r[2])
        }
        return e.apply(t, r)
      }
    },
    7557(e, t, r) {
      var n = r(4584),
        o = r(1504);
      e.exports = function(e, t, r) {
        (void 0 !== r && !o(e[t], r) || void 0 === r && !(t in e)) && n(e, t, r)
      }
    },
    90056(e, t, r) {
      var n = r(8568),
        o = r(23291);
      e.exports = function e(t, r, i, a, l) {
        var u = -1,
          f = t.length;
        for (i || (i = o), l || (l = []); ++u < f;) {
          var c = t[u];
          r > 0 && i(c) ? r > 1 ? e(c, r - 1, i, a, l) : n(l, c) : a || (l[l.length] = c)
        }
        return l
      }
    },
    82442(e, t, r) {
      var n = r(90889),
        o = r(7557),
        i = r(85089),
        a = r(92048),
        l = r(36373),
        u = r(71169),
        f = r(74646);
      e.exports = function e(t, r, c, s, d) {
        t !== r && i(r, function(i, u) {
          if (d || (d = new n), l(i)) a(t, r, u, c, e, s, d);
          else {
            var p = s ? s(f(t, u), i, u + "", t, r, d) : void 0;
            void 0 === p && (p = i), o(t, u, p)
          }
        }, u)
      }
    },
    92048(e, t, r) {
      var n = r(7557),
        o = r(34674),
        i = r(21537),
        a = r(5863),
        l = r(88673),
        u = r(43124),
        f = r(63577),
        c = r(64885),
        s = r(39968),
        d = r(49426),
        p = r(36373),
        v = r(4315),
        y = r(70247),
        g = r(74646),
        h = r(94772);
      e.exports = function(e, t, r, b, _, m, x) {
        var w = g(e, r),
          E = g(t, r),
          S = x.get(E);
        if (S) n(e, r, S);
        else {
          var O = m ? m(w, E, r + "", e, t, x) : void 0,
            R = void 0 === O;
          if (R) {
            var T = f(E),
              k = !T && s(E),
              j = !T && !k && y(E);
            O = E, T || k || j ? f(w) ? O = w : c(w) ? O = a(w) : k ? (R = !1, O = o(E, !0)) : j ? (R = !1, O = i(E, !0)) : O = [] : v(E) || u(E) ? (O = w, u(w) ? O = h(w) : p(w) && !d(w) || (O = l(E))) : R = !1
          }
          R && (x.set(E, O), _(O, E, b, m, x), x.delete(E)), n(e, r, O)
        }
      }
    },
    43599(e) {
      var t = Math.ceil,
        r = Math.max;
      e.exports = function(e, n, o, i) {
        for (var a = -1, l = r(t((n - e) / (o || 1)), 0), u = Array(l); l--;) u[i ? l : ++a] = e, e += o;
        return u
      }
    },
    78974(e, t, r) {
      var n = r(46568),
        o = r(27117),
        i = r(82857);
      e.exports = function(e, t) {
        return i(o(e, t, n), e + "")
      }
    },
    62314(e, t, r) {
      var n = r(87147),
        o = r(71025),
        i = r(15313),
        a = r(36373),
        l = r(30285);
      e.exports = function(e, t, r, u) {
        if (!a(e)) return e;
        for (var f = -1, c = (t = o(t, e)).length, s = c - 1, d = e; null != d && ++f < c;) {
          var p = l(t[f]),
            v = r;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (f != s) {
            var y = d[p];
            void 0 === (v = u ? u(y, p, d) : void 0) && (v = a(y) ? y : i(t[f + 1]) ? [] : {})
          }
          n(d, p, v), d = d[p]
        }
        return e
      }
    },
    13210(e, t, r) {
      var n = r(66798),
        o = r(78403),
        i = r(46568),
        a = o ? function(e, t) {
          return o(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(t),
            writable: !0
          })
        } : i;
      e.exports = a
    },
    52192(e) {
      e.exports = function(e, t, r) {
        var n = -1,
          o = e.length;
        t < 0 && (t = -t > o ? 0 : o + t), (r = r > o ? o : r) < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
        for (var i = Array(o); ++n < o;) i[n] = e[n + t];
        return i
      }
    },
    56792(e, t, r) {
      var n = r(41856),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(o, "") : e
      }
    },
    61187(e, t, r) {
      var n = r(71025),
        o = r(7730),
        i = r(70369),
        a = r(30285),
        l = Object.prototype.hasOwnProperty;
      e.exports = function(e, t) {
        var r = -1,
          u = (t = n(t, e)).length;
        if (!u) return !0;
        for (; ++r < u;) {
          var f = a(t[r]);
          if ("__proto__" === f && !l.call(e, "__proto__")) return !1;
          if (("constructor" === f || "prototype" === f) && r < u - 1) return !1
        }
        var c = i(e, t);
        return null == c || delete c[a(o(t))]
      }
    },
    71471(e, t, r) {
      var n = r(78974),
        o = r(34856);
      e.exports = function(e) {
        return n(function(t, r) {
          var n = -1,
            i = r.length,
            a = i > 1 ? r[i - 1] : void 0,
            l = i > 2 ? r[2] : void 0;
          for (a = e.length > 3 && "function" == typeof a ? (i--, a) : void 0, l && o(r[0], r[1], l) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++n < i;) {
            var u = r[n];
            u && e(t, u, n, a)
          }
          return t
        })
      }
    },
    55276(e, t, r) {
      var n = r(43599),
        o = r(34856),
        i = r(27872);
      e.exports = function(e) {
        return function(t, r, a) {
          return a && "number" != typeof a && o(t, r, a) && (r = a = void 0), t = i(t), void 0 === r ? (r = t, t = 0) : r = i(r), a = void 0 === a ? t < r ? 1 : -1 : i(a), n(t, r, a, e)
        }
      }
    },
    37546(e, t, r) {
      var n = r(4315);
      e.exports = function(e) {
        return n(e) ? void 0 : e
      }
    },
    4024(e, t, r) {
      var n = r(9786),
        o = r(27117),
        i = r(82857);
      e.exports = function(e) {
        return i(o(e, void 0, n), e + "")
      }
    },
    23291(e, t, r) {
      var n = r(64617),
        o = r(43124),
        i = r(63577),
        a = n ? n.isConcatSpreadable : void 0;
      e.exports = function(e) {
        return i(e) || o(e) || !!(a && e && e[a])
      }
    },
    34856(e, t, r) {
      var n = r(1504),
        o = r(19590),
        i = r(15313),
        a = r(36373);
      e.exports = function(e, t, r) {
        if (!a(r)) return !1;
        var l = typeof t;
        return !!("number" == l ? o(r) && i(t, r.length) : "string" == l && t in r) && n(r[t], e)
      }
    },
    27117(e, t, r) {
      var n = r(25553),
        o = Math.max;
      e.exports = function(e, t, r) {
        return t = o(void 0 === t ? e.length - 1 : t, 0),
          function() {
            for (var i = arguments, a = -1, l = o(i.length - t, 0), u = Array(l); ++a < l;) u[a] = i[t + a];
            a = -1;
            for (var f = Array(t + 1); ++a < t;) f[a] = i[a];
            return f[t] = r(u), n(e, this, f)
          }
      }
    },
    70369(e, t, r) {
      var n = r(69526),
        o = r(52192);
      e.exports = function(e, t) {
        return t.length < 2 ? e : n(e, o(t, 0, -1))
      }
    },
    74646(e) {
      e.exports = function(e, t) {
        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
      }
    },
    82857(e, t, r) {
      var n = r(13210),
        o = r(76411)(n);
      e.exports = o
    },
    76411(e) {
      var t = Date.now;
      e.exports = function(e) {
        var r = 0,
          n = 0;
        return function() {
          var o = t(),
            i = 16 - (o - n);
          if (n = o, i > 0) {
            if (++r >= 800) return arguments[0]
          } else r = 0;
          return e.apply(void 0, arguments)
        }
      }
    },
    41856(e) {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    66798(e) {
      e.exports = function(e) {
        return function() {
          return e
        }
      }
    },
    54389(e, t, r) {
      var n = r(36373),
        o = r(42308),
        i = r(73894),
        a = Math.max,
        l = Math.min;
      e.exports = function(e, t, r) {
        var u, f, c, s, d, p, v = 0,
          y = !1,
          g = !1,
          h = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function b(t) {
          var r = u,
            n = f;
          return u = f = void 0, v = t, s = e.apply(n, r)
        }

        function _(e) {
          var r = e - p;
          return void 0 === p || r >= t || r < 0 || g && e - v >= c
        }

        function m() {
          var e = o();
          if (_(e)) return x(e);
          d = setTimeout(m, function(e) {
            var r = t - (e - p);
            return g ? l(r, c - (e - v)) : r
          }(e))
        }

        function x(e) {
          return d = void 0, h && u ? b(e) : (u = f = void 0, s)
        }

        function w() {
          var e = o(),
            r = _(e);
          if (u = arguments, f = this, p = e, r) {
            if (void 0 === d) return function(e) {
              return v = e, d = setTimeout(m, t), y ? b(e) : s
            }(p);
            if (g) return clearTimeout(d), d = setTimeout(m, t), b(p)
          }
          return void 0 === d && (d = setTimeout(m, t)), s
        }
        return t = i(t) || 0, n(r) && (y = !!r.leading, c = (g = "maxWait" in r) ? a(i(r.maxWait) || 0, t) : c, h = "trailing" in r ? !!r.trailing : h), w.cancel = function() {
          void 0 !== d && clearTimeout(d), v = 0, u = p = f = d = void 0
        }, w.flush = function() {
          return void 0 === d ? s : x(o())
        }, w
      }
    },
    9786(e, t, r) {
      var n = r(90056);
      e.exports = function(e) {
        return null != e && e.length ? n(e, 1) : []
      }
    },
    64885(e, t, r) {
      var n = r(19590),
        o = r(5698);
      e.exports = function(e) {
        return o(e) && n(e)
      }
    },
    7730(e) {
      e.exports = function(e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0
      }
    },
    54028(e, t, r) {
      var n = r(82442),
        o = r(71471)(function(e, t, r) {
          n(e, t, r)
        });
      e.exports = o
    },
    42308(e, t, r) {
      var n = r(84373);
      e.exports = function() {
        return n.Date.now()
      }
    },
    15963(e, t, r) {
      var n = r(75708),
        o = r(5559),
        i = r(61187),
        a = r(71025),
        l = r(38439),
        u = r(37546),
        f = r(4024),
        c = r(8221),
        s = f(function(e, t) {
          var r = {};
          if (null == e) return r;
          var f = !1;
          t = n(t, function(t) {
            return t = a(t, e), f || (f = t.length > 1), t
          }), l(e, c(e), r), f && (r = o(r, 7, u));
          for (var s = t.length; s--;) i(r, t[s]);
          return r
        });
      e.exports = s
    },
    68309(e, t, r) {
      var n = r(55276)();
      e.exports = n
    },
    88584(e, t, r) {
      var n = r(62314);
      e.exports = function(e, t, r, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : n(e, t, r, o)
      }
    },
    27872(e, t, r) {
      var n = r(73894),
        o = 1 / 0;
      e.exports = function(e) {
        return e ? (e = n(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    73894(e, t, r) {
      var n = r(56792),
        o = r(36373),
        i = r(69570),
        a = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        f = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = l.test(e);
        return r || u.test(e) ? f(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
      }
    },
    94772(e, t, r) {
      var n = r(38439),
        o = r(71169);
      e.exports = function(e) {
        return n(e, o(e))
      }
    },
    94931(e, t, r) {
      "use strict";
      var n = r(93082),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, t, r) {
        var n, i = {},
          f = null,
          c = null;
        for (n in void 0 !== r && (f = "" + r), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, n) && !u.hasOwnProperty(n) && (i[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === i[n] && (i[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: c,
          props: i,
          _owner: l.current
        }
      }
      t.Fragment = i, t.jsx = f, t.jsxs = f
    },
    39793(e, t, r) {
      "use strict";
      e.exports = r(94931)
    },
    85049(e, t, r) {
      "use strict";
      r.d(t, {
        s: () => u
      });
      var n = r(93082),
        o = Object.defineProperty,
        i = (e, t) => o(e, "name", {
          value: t,
          configurable: !0
        });

      function a(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function l(...e) {
        return t => {
          let r = !1;
          const n = e.map(e => {
            const n = a(e, t);
            return r || "function" != typeof n || (r = !0), n
          });
          if (r) return () => {
            for (let t = 0; t < n.length; t++) {
              const r = n[t];
              "function" == typeof r ? r() : a(e[t], null)
            }
          }
        }
      }

      function u(...e) {
        return n.useCallback(l(...e), e)
      }
      i(a, "setRef"), i(l, "composeRefs"), i(u, "useComposedRefs")
    },
    93237(e, t, r) {
      "use strict";
      let n;
      r.d(t, {
        DX: () => f,
        Dc: () => s,
        TL: () => u,
        xV: () => d
      });
      var o = r(93082),
        i = r(85049),
        a = Object.defineProperty,
        l = (e, t) => a(e, "name", {
          value: t,
          configurable: !0
        });

      function u(e) {
        const t = o.forwardRef((t, r) => {
          let {
            children: n,
            ...a
          } = t, l = null, u = !1;
          const f = [];
          b(n) && "function" == typeof w && (n = w(n._payload)), o.Children.forEach(n, e => {
            if (g(e)) {
              u = !0;
              const t = e;
              let r = "child" in t.props ? t.props.child : t.props.children;
              b(r) && "function" == typeof w && (r = w(r._payload)), l = p(t, r), f.push(l?.props?.children)
            } else f.push(e)
          }), l ? l = o.cloneElement(l, void 0, f) : !u && 1 === o.Children.count(n) && o.isValidElement(n) && (l = n);
          const c = l ? y(l) : void 0,
            s = (0, i.s)(r, c);
          if (!l) {
            if (n || 0 === n) throw new Error(u ? x(e) : m(e));
            return n
          }
          const d = v(a, l.props ?? {});
          return l.type !== o.Fragment && (d.ref = r ? s : c), o.cloneElement(l, d)
        });
        return t.displayName = `${e}.Slot`, t
      }
      l(u, "createSlot");
      var f = u("Slot"),
        c = Symbol.for("radix.slottable");

      function s(e) {
        const t = l(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = c, t
      }
      l(s, "createSlottable");
      var d = s("Slottable"),
        p = l((e, t) => {
          if ("child" in e.props) {
            const t = e.props.child;
            return o.isValidElement(t) ? o.cloneElement(t, void 0, e.props.children(t.props.children)) : null
          }
          return o.isValidElement(t) ? t : null
        }, "getSlottableElementFromSlottable");

      function v(e, t) {
        const r = {
          ...t
        };
        for (const n in t) {
          const o = e[n],
            i = t[n];
          /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
            const t = i(...e);
            return o(...e), t
          } : o && (r[n] = o) : "style" === n ? r[n] = {
            ...o,
            ...i
          } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...r
        }
      }

      function y(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          r = t && "isReactWarning" in t && t.isReactWarning;
        return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
      }

      function g(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
      }
      l(v, "mergeProps"), l(y, "getElementRef"), l(g, "isSlottable");
      var h = Symbol.for("react.lazy");

      function b(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === h && "_payload" in e && _(e._payload)
      }

      function _(e) {
        return "object" == typeof e && null !== e && "then" in e
      }
      l(b, "isLazyComponent"), l(_, "isPromiseLike");
      var m = l(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        x = l(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        w = (n || (n = r.t(o, 2)))[" use ".trim().toString()]
    }
  }
]);