try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "e05c750a-c7ce-4526-88c2-be895c354c32", e._sentryDebugIdIdentifier = "sentry-dbid-e05c750a-c7ce-4526-88c2-be895c354c32")
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
  [516], {
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
      e.exports = function e(r, t, i, a, u) {
        var l = -1,
          c = r.length;
        for (i || (i = o), u || (u = []); ++l < c;) {
          var f = r[l];
          t > 0 && i(f) ? t > 1 ? e(f, t - 1, i, a, u) : n(u, f) : a || (u[u.length] = f)
        }
        return u
      }
    },
    82442(e, r, t) {
      var n = t(90889),
        o = t(7557),
        i = t(85089),
        a = t(92048),
        u = t(36373),
        l = t(71169),
        c = t(74646);
      e.exports = function e(r, t, f, s, p) {
        r !== t && i(t, function(i, l) {
          if (p || (p = new n), u(i)) a(r, t, l, f, e, s, p);
          else {
            var d = s ? s(c(r, l), i, l + "", r, t, p) : void 0;
            void 0 === d && (d = i), o(r, l, d)
          }
        }, l)
      }
    },
    92048(e, r, t) {
      var n = t(7557),
        o = t(34674),
        i = t(21537),
        a = t(5863),
        u = t(88673),
        l = t(43124),
        c = t(63577),
        f = t(64885),
        s = t(39968),
        p = t(49426),
        d = t(36373),
        v = t(4315),
        y = t(70247),
        h = t(74646),
        g = t(94772);
      e.exports = function(e, r, t, _, x, b, m) {
        var w = h(e, t),
          E = h(r, t),
          S = m.get(E);
        if (S) n(e, t, S);
        else {
          var O = b ? b(w, E, t + "", e, r, m) : void 0,
            T = void 0 === O;
          if (T) {
            var k = c(E),
              R = !k && s(E),
              M = !k && !R && y(E);
            O = E, k || R || M ? c(w) ? O = w : f(w) ? O = a(w) : R ? (T = !1, O = o(E, !0)) : M ? (T = !1, O = i(E, !0)) : O = [] : v(E) || l(E) ? (O = w, l(w) ? O = g(w) : d(w) && !p(w) || (O = u(E))) : T = !1
          }
          T && (m.set(E, O), x(O, E, _, b, m), m.delete(E)), n(e, t, O)
        }
      }
    },
    43599(e) {
      var r = Math.ceil,
        t = Math.max;
      e.exports = function(e, n, o, i) {
        for (var a = -1, u = t(r((n - e) / (o || 1)), 0), l = Array(u); u--;) l[i ? u : ++a] = e, e += o;
        return l
      }
    },
    78974(e, r, t) {
      var n = t(46568),
        o = t(27117),
        i = t(82857);
      e.exports = function(e, r) {
        return i(o(e, r, n), e + "")
      }
    },
    62314(e, r, t) {
      var n = t(87147),
        o = t(71025),
        i = t(15313),
        a = t(36373),
        u = t(30285);
      e.exports = function(e, r, t, l) {
        if (!a(e)) return e;
        for (var c = -1, f = (r = o(r, e)).length, s = f - 1, p = e; null != p && ++c < f;) {
          var d = u(r[c]),
            v = t;
          if ("__proto__" === d || "constructor" === d || "prototype" === d) return e;
          if (c != s) {
            var y = p[d];
            void 0 === (v = l ? l(y, d, p) : void 0) && (v = a(y) ? y : i(r[c + 1]) ? [] : {})
          }
          n(p, d, v), p = p[d]
        }
        return e
      }
    },
    13210(e, r, t) {
      var n = t(66798),
        o = t(78403),
        i = t(46568),
        a = o ? function(e, r) {
          return o(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(r),
            writable: !0
          })
        } : i;
      e.exports = a
    },
    52192(e) {
      e.exports = function(e, r, t) {
        var n = -1,
          o = e.length;
        r < 0 && (r = -r > o ? 0 : o + r), (t = t > o ? o : t) < 0 && (t += o), o = r > t ? 0 : t - r >>> 0, r >>>= 0;
        for (var i = Array(o); ++n < o;) i[n] = e[n + r];
        return i
      }
    },
    56792(e, r, t) {
      var n = t(41856),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(o, "") : e
      }
    },
    61187(e, r, t) {
      var n = t(71025),
        o = t(7730),
        i = t(70369),
        a = t(30285),
        u = Object.prototype.hasOwnProperty;
      e.exports = function(e, r) {
        var t = -1,
          l = (r = n(r, e)).length;
        if (!l) return !0;
        for (; ++t < l;) {
          var c = a(r[t]);
          if ("__proto__" === c && !u.call(e, "__proto__")) return !1;
          if (("constructor" === c || "prototype" === c) && t < l - 1) return !1
        }
        var f = i(e, r);
        return null == f || delete f[a(o(r))]
      }
    },
    71471(e, r, t) {
      var n = t(78974),
        o = t(34856);
      e.exports = function(e) {
        return n(function(r, t) {
          var n = -1,
            i = t.length,
            a = i > 1 ? t[i - 1] : void 0,
            u = i > 2 ? t[2] : void 0;
          for (a = e.length > 3 && "function" == typeof a ? (i--, a) : void 0, u && o(t[0], t[1], u) && (a = i < 3 ? void 0 : a, i = 1), r = Object(r); ++n < i;) {
            var l = t[n];
            l && e(r, l, n, a)
          }
          return r
        })
      }
    },
    55276(e, r, t) {
      var n = t(43599),
        o = t(34856),
        i = t(27872);
      e.exports = function(e) {
        return function(r, t, a) {
          return a && "number" != typeof a && o(r, t, a) && (t = a = void 0), r = i(r), void 0 === t ? (t = r, r = 0) : t = i(t), a = void 0 === a ? r < t ? 1 : -1 : i(a), n(r, t, a, e)
        }
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
        i = t(82857);
      e.exports = function(e) {
        return i(o(e, void 0, n), e + "")
      }
    },
    23291(e, r, t) {
      var n = t(64617),
        o = t(43124),
        i = t(63577),
        a = n ? n.isConcatSpreadable : void 0;
      e.exports = function(e) {
        return i(e) || o(e) || !!(a && e && e[a])
      }
    },
    34856(e, r, t) {
      var n = t(1504),
        o = t(19590),
        i = t(15313),
        a = t(36373);
      e.exports = function(e, r, t) {
        if (!a(t)) return !1;
        var u = typeof r;
        return !!("number" == u ? o(t) && i(r, t.length) : "string" == u && r in t) && n(t[r], e)
      }
    },
    27117(e, r, t) {
      var n = t(25553),
        o = Math.max;
      e.exports = function(e, r, t) {
        return r = o(void 0 === r ? e.length - 1 : r, 0),
          function() {
            for (var i = arguments, a = -1, u = o(i.length - r, 0), l = Array(u); ++a < u;) l[a] = i[r + a];
            a = -1;
            for (var c = Array(r + 1); ++a < r;) c[a] = i[a];
            return c[r] = t(l), n(e, this, c)
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
            i = 16 - (o - n);
          if (n = o, i > 0) {
            if (++t >= 800) return arguments[0]
          } else t = 0;
          return e.apply(void 0, arguments)
        }
      }
    },
    41856(e) {
      var r = /\s/;
      e.exports = function(e) {
        for (var t = e.length; t-- && r.test(e.charAt(t)););
        return t
      }
    },
    66798(e) {
      e.exports = function(e) {
        return function() {
          return e
        }
      }
    },
    54389(e, r, t) {
      var n = t(36373),
        o = t(42308),
        i = t(73894),
        a = Math.max,
        u = Math.min;
      e.exports = function(e, r, t) {
        var l, c, f, s, p, d, v = 0,
          y = !1,
          h = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function _(r) {
          var t = l,
            n = c;
          return l = c = void 0, v = r, s = e.apply(n, t)
        }

        function x(e) {
          var t = e - d;
          return void 0 === d || t >= r || t < 0 || h && e - v >= f
        }

        function b() {
          var e = o();
          if (x(e)) return m(e);
          p = setTimeout(b, function(e) {
            var t = r - (e - d);
            return h ? u(t, f - (e - v)) : t
          }(e))
        }

        function m(e) {
          return p = void 0, g && l ? _(e) : (l = c = void 0, s)
        }

        function w() {
          var e = o(),
            t = x(e);
          if (l = arguments, c = this, d = e, t) {
            if (void 0 === p) return function(e) {
              return v = e, p = setTimeout(b, r), y ? _(e) : s
            }(d);
            if (h) return clearTimeout(p), p = setTimeout(b, r), _(d)
          }
          return void 0 === p && (p = setTimeout(b, r)), s
        }
        return r = i(r) || 0, n(t) && (y = !!t.leading, f = (h = "maxWait" in t) ? a(i(t.maxWait) || 0, r) : f, g = "trailing" in t ? !!t.trailing : g), w.cancel = function() {
          void 0 !== p && clearTimeout(p), v = 0, l = d = c = p = void 0
        }, w.flush = function() {
          return void 0 === p ? s : m(o())
        }, w
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
    42308(e, r, t) {
      var n = t(84373);
      e.exports = function() {
        return n.Date.now()
      }
    },
    15963(e, r, t) {
      var n = t(75708),
        o = t(5559),
        i = t(61187),
        a = t(71025),
        u = t(38439),
        l = t(37546),
        c = t(4024),
        f = t(8221),
        s = c(function(e, r) {
          var t = {};
          if (null == e) return t;
          var c = !1;
          r = n(r, function(r) {
            return r = a(r, e), c || (c = r.length > 1), r
          }), u(e, f(e), t), c && (t = o(t, 7, l));
          for (var s = r.length; s--;) i(t, r[s]);
          return t
        });
      e.exports = s
    },
    68309(e, r, t) {
      var n = t(55276)();
      e.exports = n
    },
    88584(e, r, t) {
      var n = t(62314);
      e.exports = function(e, r, t, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : n(e, r, t, o)
      }
    },
    27872(e, r, t) {
      var n = t(73894),
        o = 1 / 0;
      e.exports = function(e) {
        return e ? (e = n(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    73894(e, r, t) {
      var n = t(56792),
        o = t(36373),
        i = t(69570),
        a = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var r = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(r) ? r + "" : r
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var t = u.test(e);
        return t || l.test(e) ? c(e.slice(2), t ? 2 : 8) : a.test(e) ? NaN : +e
      }
    },
    94772(e, r, t) {
      var n = t(38439),
        o = t(71169);
      e.exports = function(e) {
        return n(e, o(e))
      }
    },
    94931(e, r, t) {
      "use strict";
      var n = t(93082),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, r, t) {
        var n, i = {},
          c = null,
          f = null;
        for (n in void 0 !== t && (c = "" + t), void 0 !== r.key && (c = "" + r.key), void 0 !== r.ref && (f = r.ref), r) a.call(r, n) && !l.hasOwnProperty(n) && (i[n] = r[n]);
        if (e && e.defaultProps)
          for (n in r = e.defaultProps) void 0 === i[n] && (i[n] = r[n]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: f,
          props: i,
          _owner: u.current
        }
      }
      r.Fragment = i, r.jsx = c, r.jsxs = c
    },
    39793(e, r, t) {
      "use strict";
      e.exports = t(94931)
    },
    64239(e, r, t) {
      "use strict";
      t.d(r, {
        s: () => i
      });
      var n = t(93082);

      function o(e, r) {
        if ("function" == typeof e) return e(r);
        null != e && (e.current = r)
      }

      function i(...e) {
        return n.useCallback(function(...e) {
          return r => {
            let t = !1;
            const n = e.map(e => {
              const n = o(e, r);
              return t || "function" != typeof n || (t = !0), n
            });
            if (t) return () => {
              for (let r = 0; r < n.length; r++) {
                const t = n[r];
                "function" == typeof t ? t() : o(e[r], null)
              }
            }
          }
        }(...e), e)
      }
    },
    17172(e, r, t) {
      "use strict";
      let n;
      t.d(r, {
        DX: () => u,
        Dc: () => c,
        TL: () => a,
        xV: () => f
      });
      var o = t(93082),
        i = t(64239);

      function a(e) {
        const r = o.forwardRef((r, t) => {
          let {
            children: n,
            ...a
          } = r, u = null, c = !1;
          const f = [];
          d(n) && "function" == typeof h && (n = h(n._payload)), o.Children.forEach(n, e => {
            if (r = e, o.isValidElement(r) && "function" == typeof r.type && "__radixId" in r.type && r.type.__radixId === l) {
              c = !0;
              const r = e;
              let t = "child" in r.props ? r.props.child : r.props.children;
              d(t) && "function" == typeof h && (t = h(t._payload)), u = s(r, t), f.push(u?.props?.children)
            } else f.push(e);
            var r
          }), u ? u = o.cloneElement(u, void 0, f) : !c && 1 === o.Children.count(n) && o.isValidElement(n) && (u = n);
          const p = u ? function(e) {
              let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                t = r && "isReactWarning" in r && r.isReactWarning;
              return t ? e.ref : (r = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
            }(u) : void 0,
            g = (0, i.s)(t, p);
          if (!u) {
            if (n || 0 === n) throw new Error(c ? y(e) : v(e));
            return n
          }
          const _ = function(e, r) {
            const t = {
              ...r
            };
            for (const n in r) {
              const o = e[n],
                i = r[n];
              /^on[A-Z]/.test(n) ? o && i ? t[n] = (...e) => {
                const r = i(...e);
                return o(...e), r
              } : o && (t[n] = o) : "style" === n ? t[n] = {
                ...o,
                ...i
              } : "className" === n && (t[n] = [o, i].filter(Boolean).join(" "))
            }
            return {
              ...e,
              ...t
            }
          }(a, u.props ?? {});
          return u.type !== o.Fragment && (_.ref = t ? g : p), o.cloneElement(u, _)
        });
        return r.displayName = `${e}.Slot`, r
      }
      var u = a("Slot"),
        l = Symbol.for("radix.slottable");

      function c(e) {
        const r = e => "child" in e ? e.children(e.child) : e.children;
        return r.displayName = `${e}.Slottable`, r.__radixId = l, r
      }
      var f = c("Slottable"),
        s = (e, r) => {
          if ("child" in e.props) {
            const r = e.props.child;
            return o.isValidElement(r) ? o.cloneElement(r, void 0, e.props.children(r.props.children)) : null
          }
          return o.isValidElement(r) ? r : null
        },
        p = Symbol.for("react.lazy");

      function d(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === p && "_payload" in e && "object" == typeof(r = e._payload) && null !== r && "then" in r;
        var r
      }
      var v = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        y = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        h = (n || (n = t.t(o, 2)))[" use ".trim().toString()]
    }
  }
]);