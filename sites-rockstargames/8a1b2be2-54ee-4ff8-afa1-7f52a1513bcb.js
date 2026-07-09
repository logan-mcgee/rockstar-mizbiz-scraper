try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8a1b2be2-54ee-4ff8-afa1-7f52a1513bcb", e._sentryDebugIdIdentifier = "sentry-dbid-8a1b2be2-54ee-4ff8-afa1-7f52a1513bcb")
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
  [2560], {
    87213(e, t, n) {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    23293(e, t, n) {
      n.d(t, {
        X3: () => r.X,
        fi: () => a,
        IO: () => f,
        VW: () => c,
        v6: () => i.v,
        cJ: () => l
      });
      var r = n(87213);
      const o = e => e - .02,
        a = {
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
      var i = n(71107);
      const d = "__FOUNDRY_ACCENT__",
        f = (e, t) => r.X ? t() : (window[d] || (window[d] = new Map), window[d].has(e) || window[d].set(e, t()), window[d].get(e));
      n(68309);
      var s, u = n(15963);

      function l(e, ...t) {
        return u(e, ...t)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(s || (s = {})), Symbol.toStringTag;
      const c = (...e) => e.filter(e => e).join(" ")
    },
    30377(e, t, n) {
      n.d(t, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => d
      });
      var r = n(38957),
        o = n(39793),
        a = n(93082),
        i = n(34376);
      const d = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? i.s6 : a.Fragment;
        return (0, o.jsx)(n, {
          ...t
        })
      }
    },
    71107(e, t, n) {
      n.d(t, {
        v: () => d
      });
      var r = n(81270);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function i(...e) {
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
            "function" == typeof n && "function" == typeof d && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, d) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof d ? "id" === e && n && d ? t.id = a(n, d) : t[e] = void 0 !== d ? d : n : t[e] = (0, r.clsx)(n, d)
          }
        }
        return t
      }
    },
    4031(e, t, n) {
      n.d(t, {
        sG: () => i
      });
      var r = n(93082),
        o = (n(84017), n(38957)),
        a = n(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, o.TL)(`Primitive.${t}`),
            i = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, d = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(d, {
                ...i,
                ref: r
              })
            });
          return i.displayName = `Primitive.${t}`, {
            ...e,
            [t]: i
          }
        }, {})
    },
    34376(e, t, n) {
      n.d(t, {
        bL: () => f,
        s6: () => d
      });
      var r = n(93082),
        o = n(4031),
        a = n(39793),
        i = Object.freeze({
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
        d = r.forwardRef((e, t) => (0, a.jsx)(o.sG.span, {
          ...e,
          ref: t,
          style: {
            ...i,
            ...e.style
          }
        }));
      d.displayName = "VisuallyHidden";
      var f = d
    },
    34708(e, t, n) {
      n.d(t, {
        A: () => s
      });
      var r = n(45862),
        o = n(34336);
      const a = function() {
        return o.A.Date.now()
      };
      var i = n(82486),
        d = Math.max,
        f = Math.min;
      const s = function(e, t, n) {
        var o, s, u, l, c, p, v = 0,
          g = !1,
          w = !1,
          b = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function h(t) {
          var n = o,
            r = s;
          return o = s = void 0, v = t, l = e.apply(r, n)
        }

        function y(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || w && e - v >= u
        }

        function m() {
          var e = a();
          if (y(e)) return A(e);
          c = setTimeout(m, function(e) {
            var n = t - (e - p);
            return w ? f(n, u - (e - v)) : n
          }(e))
        }

        function A(e) {
          return c = void 0, b && o ? h(e) : (o = s = void 0, l)
        }

        function _() {
          var e = a(),
            n = y(e);
          if (o = arguments, s = this, p = e, n) {
            if (void 0 === c) return function(e) {
              return v = e, c = setTimeout(m, t), g ? h(e) : l
            }(p);
            if (w) return clearTimeout(c), c = setTimeout(m, t), h(p)
          }
          return void 0 === c && (c = setTimeout(m, t)), l
        }
        return t = (0, i.A)(t) || 0, (0, r.A)(n) && (g = !!n.leading, u = (w = "maxWait" in n) ? d((0, i.A)(n.maxWait) || 0, t) : u, b = "trailing" in n ? !!n.trailing : b), _.cancel = function() {
          void 0 !== c && clearTimeout(c), v = 0, o = p = s = c = void 0
        }, _.flush = function() {
          return void 0 === c ? l : A(a())
        }, _
      }
    },
    50573(e, t, n) {
      n.d(t, {
        A: () => T
      });
      var r = n(20829),
        o = n(70278),
        a = n(73443);
      var i = n(99793);
      const d = function(e, t) {
        return t.length < 2 ? e : (0, i.A)(e, function(e, t, n) {
          var r = -1,
            o = e.length;
          t < 0 && (t = -t > o ? 0 : o + t), (n = n > o ? o : n) < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
          for (var a = Array(o); ++r < o;) a[r] = e[r + t];
          return a
        }(t, 0, -1))
      };
      var f = n(33018),
        s = Object.prototype.hasOwnProperty;
      const u = function(e, t) {
        var n = -1,
          r = (t = (0, a.A)(t, e)).length;
        if (!r) return !0;
        for (; ++n < r;) {
          var o = (0, f.A)(t[n]);
          if ("__proto__" === o && !s.call(e, "__proto__")) return !1;
          if (("constructor" === o || "prototype" === o) && n < r - 1) return !1
        }
        var i = d(e, t);
        return null == i || delete i[(0, f.A)(function(e) {
          var t = null == e ? 0 : e.length;
          return t ? e[t - 1] : void 0
        }(t))]
      };
      var l = n(57502),
        c = n(58634);
      const p = function(e) {
        return (0, c.A)(e) ? void 0 : e
      };
      var v = n(68071),
        g = n(94508),
        w = n(48348),
        b = n(6700),
        h = g.A ? g.A.isConcatSpreadable : void 0;
      const y = function(e) {
          return (0, b.A)(e) || (0, w.A)(e) || !!(h && e && e[h])
        },
        m = function e(t, n, r, o, a) {
          var i = -1,
            d = t.length;
          for (r || (r = y), a || (a = []); ++i < d;) {
            var f = t[i];
            n > 0 && r(f) ? n > 1 ? e(f, n - 1, r, o, a) : (0, v.A)(a, f) : o || (a[a.length] = f)
          }
          return a
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
        var i = !1;
        t = (0, r.A)(t, function(t) {
          return t = (0, a.A)(t, e), i || (i = t.length > 1), t
        }), (0, l.A)(e, (0, k.A)(e), n), i && (n = (0, o.A)(n, 7, p));
        for (var d = t.length; d--;) u(n, t[d]);
        return n
      }, (0, x.A)((0, _.A)(E, void 0, A), E + ""));
      var E
    },
    82486(e, t, n) {
      n.d(t, {
        A: () => c
      });
      var r = /\s/;
      var o = /^\s+/;
      const a = function(e) {
        return e ? e.slice(0, function(e) {
          for (var t = e.length; t-- && r.test(e.charAt(t)););
          return t
        }(e) + 1).replace(o, "") : e
      };
      var i = n(45862),
        d = n(80617),
        f = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        l = parseInt;
      const c = function(e) {
        if ("number" == typeof e) return e;
        if ((0, d.A)(e)) return NaN;
        if ((0, i.A)(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = (0, i.A)(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = a(e);
        var n = s.test(e);
        return n || u.test(e) ? l(e.slice(2), n ? 2 : 8) : f.test(e) ? NaN : +e
      }
    }
  }
]);