try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4ae63a72-1232-44f4-84a9-041adc2b3be9", e._sentryDebugIdIdentifier = "sentry-dbid-4ae63a72-1232-44f4-84a9-041adc2b3be9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1352], {
    90371(e, t, n) {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    27859(e, t, n) {
      n.d(t, {
        X3: () => r.X,
        fi: () => i,
        IO: () => s,
        VW: () => l,
        v6: () => a.v,
        cJ: () => c
      });
      var r = n(90371);
      const o = e => e - .02,
        i = {
          mobile: `(min-width: 0px) and (max-width: ${o(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${o(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${o(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${o(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var a = n(31985);
      const d = "__FOUNDRY_ACCENT__",
        s = (e, t) => r.X ? t() : (window[d] || (window[d] = new Map), window[d].has(e) || window[d].set(e, t()), window[d].get(e));
      n(68309);
      var f, u = n(15963);

      function c(e, ...t) {
        return u(e, ...t)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const l = (...e) => e.filter(e => e).join(" ")
    },
    90067(e, t, n) {
      n.d(t, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => d
      });
      var r = n(38957),
        o = n(39793),
        i = n(93082),
        a = n(34376);
      const d = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? a.s6 : i.Fragment;
        return (0, o.jsx)(n, {
          ...t
        })
      }
    },
    31985(e, t, n) {
      n.d(t, {
        v: () => d
      });
      var r = n(81270);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function d(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              d = o[e];
            "function" == typeof n && "function" == typeof d && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, d) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof d ? "id" === e && n && d ? t.id = i(n, d) : t[e] = void 0 !== d ? d : n : t[e] = (0, r.clsx)(n, d)
          }
        }
        return t
      }
    },
    4031(e, t, n) {
      n.d(t, {
        sG: () => a
      });
      var r = n(93082),
        o = (n(84017), n(38957)),
        i = n(39793),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, o.TL)(`Primitive.${t}`),
            a = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, d = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(d, {
                ...a,
                ref: r
              })
            });
          return a.displayName = `Primitive.${t}`, {
            ...e,
            [t]: a
          }
        }, {})
    },
    34376(e, t, n) {
      n.d(t, {
        bL: () => s,
        s6: () => d
      });
      var r = n(93082),
        o = n(4031),
        i = n(39793),
        a = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        d = r.forwardRef((e, t) => (0, i.jsx)(o.sG.span, {
          ...e,
          ref: t,
          style: {
            ...a,
            ...e.style
          }
        }));
      d.displayName = "VisuallyHidden";
      var s = d
    },
    34708(e, t, n) {
      n.d(t, {
        A: () => f
      });
      var r = n(45862),
        o = n(34336);
      const i = function() {
        return o.A.Date.now()
      };
      var a = n(82486),
        d = Math.max,
        s = Math.min;
      const f = function(e, t, n) {
        var o, f, u, c, l, p, v = 0,
          g = !1,
          w = !1,
          h = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function b(t) {
          var n = o,
            r = f;
          return o = f = void 0, v = t, c = e.apply(r, n)
        }

        function y(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || w && e - v >= u
        }

        function m() {
          var e = i();
          if (y(e)) return A(e);
          l = setTimeout(m, function(e) {
            var n = t - (e - p);
            return w ? s(n, u - (e - v)) : n
          }(e))
        }

        function A(e) {
          return l = void 0, h && o ? b(e) : (o = f = void 0, c)
        }

        function _() {
          var e = i(),
            n = y(e);
          if (o = arguments, f = this, p = e, n) {
            if (void 0 === l) return function(e) {
              return v = e, l = setTimeout(m, t), g ? b(e) : c
            }(p);
            if (w) return clearTimeout(l), l = setTimeout(m, t), b(p)
          }
          return void 0 === l && (l = setTimeout(m, t)), c
        }
        return t = (0, a.A)(t) || 0, (0, r.A)(n) && (g = !!n.leading, u = (w = "maxWait" in n) ? d((0, a.A)(n.maxWait) || 0, t) : u, h = "trailing" in n ? !!n.trailing : h), _.cancel = function() {
          void 0 !== l && clearTimeout(l), v = 0, o = p = f = l = void 0
        }, _.flush = function() {
          return void 0 === l ? c : A(i())
        }, _
      }
    },
    50573(e, t, n) {
      n.d(t, {
        A: () => T
      });
      var r = n(20829),
        o = n(70278),
        i = n(73443);
      var a = n(99793);
      const d = function(e, t) {
        return t.length < 2 ? e : (0, a.A)(e, function(e, t, n) {
          var r = -1,
            o = e.length;
          t < 0 && (t = -t > o ? 0 : o + t), (n = n > o ? o : n) < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
          for (var i = Array(o); ++r < o;) i[r] = e[r + t];
          return i
        }(t, 0, -1))
      };
      var s = n(33018),
        f = Object.prototype.hasOwnProperty;
      const u = function(e, t) {
        var n = -1,
          r = (t = (0, i.A)(t, e)).length;
        if (!r) return !0;
        for (; ++n < r;) {
          var o = (0, s.A)(t[n]);
          if ("__proto__" === o && !f.call(e, "__proto__")) return !1;
          if (("constructor" === o || "prototype" === o) && n < r - 1) return !1
        }
        var a = d(e, t);
        return null == a || delete a[(0, s.A)(function(e) {
          var t = null == e ? 0 : e.length;
          return t ? e[t - 1] : void 0
        }(t))]
      };
      var c = n(57502),
        l = n(58634);
      const p = function(e) {
        return (0, l.A)(e) ? void 0 : e
      };
      var v = n(68071),
        g = n(94508),
        w = n(48348),
        h = n(6700),
        b = g.A ? g.A.isConcatSpreadable : void 0;
      const y = function(e) {
          return (0, h.A)(e) || (0, w.A)(e) || !!(b && e && e[b])
        },
        m = function e(t, n, r, o, i) {
          var a = -1,
            d = t.length;
          for (r || (r = y), i || (i = []); ++a < d;) {
            var s = t[a];
            n > 0 && r(s) ? n > 1 ? e(s, n - 1, r, o, i) : (0, v.A)(i, s) : o || (i[i.length] = s)
          }
          return i
        },
        A = function(e) {
          return null != e && e.length ? m(e, 1) : []
        };
      var _ = n(7352),
        x = n(91847);
      var k = n(47016);
      const T = (E = function(e, t) {
        var n = {};
        if (null == e) return n;
        var a = !1;
        t = (0, r.A)(t, function(t) {
          return t = (0, i.A)(t, e), a || (a = t.length > 1), t
        }), (0, c.A)(e, (0, k.A)(e), n), a && (n = (0, o.A)(n, 7, p));
        for (var d = t.length; d--;) u(n, t[d]);
        return n
      }, (0, x.A)((0, _.A)(E, void 0, A), E + ""));
      var E
    },
    82486(e, t, n) {
      n.d(t, {
        A: () => l
      });
      var r = /\s/;
      var o = /^\s+/;
      const i = function(e) {
        return e ? e.slice(0, function(e) {
          for (var t = e.length; t-- && r.test(e.charAt(t)););
          return t
        }(e) + 1).replace(o, "") : e
      };
      var a = n(45862),
        d = n(80617),
        s = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt;
      const l = function(e) {
        if ("number" == typeof e) return e;
        if ((0, d.A)(e)) return NaN;
        if ((0, a.A)(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = (0, a.A)(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = i(e);
        var n = f.test(e);
        return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : s.test(e) ? NaN : +e
      }
    }
  }
]);