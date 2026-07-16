try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "7c791175-0ea0-4dd0-ad9e-12cb252b484a", t._sentryDebugIdIdentifier = "sentry-dbid-7c791175-0ea0-4dd0-ad9e-12cb252b484a")
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
  [3866], {
    31602(t, e, n) {
      const r = "undefined" == typeof window;
      n.d(e, ["X", 0, r])
    },
    7912(t, e, n) {
      n.d(e, {
        X3: () => r.X,
        fi: () => a,
        IO: () => s,
        VW: () => l,
        v6: () => i.v,
        cJ: () => c
      });
      var r = n(31602);
      const o = t => t - .02,
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
      var i = n(47460);
      const d = "__FOUNDRY_ACCENT__",
        s = (t, e) => r.X ? e() : (window[d] || (window[d] = new Map), window[d].has(t) || window[d].set(t, e()), window[d].get(t));
      n(68309);
      var f, u = n(15963);

      function c(t, ...e) {
        return u(t, ...e)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(t) {
          t.Pending = "pending", t.Fulfilled = "fulfilled", t.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const l = (...t) => t.filter(t => t).join(" ")
    },
    69088(t, e, n) {
      n.d(e, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => d
      });
      var r = n(17172),
        o = n(39793),
        a = n(93082),
        i = n(84045);
      const d = ({
        enabled: t = !0,
        ...e
      }) => {
        const n = t ? i.s6 : a.Fragment;
        return (0, o.jsx)(n, {
          ...e
        })
      }
    },
    47460(t, e, n) {
      n.d(e, {
        v: () => d
      });
      var r = n(81270);
      const o = new Map;

      function a(t, e) {
        if (t === e) return t;
        const n = o.get(t);
        if (n) return n.forEach(t => t(e)), e;
        const r = o.get(e);
        return r ? (r.forEach(e => e(t)), t) : e
      }

      function i(...t) {
        return (...e) => {
          for (const n of t) "function" == typeof n && n(...e)
        }
      }

      function d(...t) {
        const e = {
          ...t[0]
        };
        for (let n = 1; n < t.length; n++) {
          const o = t[n];
          for (const t in o) {
            const n = e[t],
              d = o[t];
            "function" == typeof n && "function" == typeof d && "o" === t[0] && "n" === t[1] && t.charCodeAt(2) >= 65 && t.charCodeAt(2) <= 90 ? e[t] = i(n, d) : "className" !== t && "UNSAFE_className" !== t || "string" != typeof n || "string" != typeof d ? "id" === t && n && d ? e.id = a(n, d) : e[t] = void 0 !== d ? d : n : e[t] = (0, r.clsx)(n, d)
          }
        }
        return e
      }
    },
    13165(t, e, n) {
      n.d(e, {
        hO: () => s,
        sG: () => d
      });
      var r = n(93082),
        o = n(84017),
        a = n(17172),
        i = n(39793),
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((t, e) => {
          const n = (0, a.TL)(`Primitive.${e}`),
            o = r.forwardRef((t, r) => {
              const {
                asChild: o,
                ...a
              } = t, d = o ? n : e;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(d, {
                ...a,
                ref: r
              })
            });
          return o.displayName = `Primitive.${e}`, {
            ...t,
            [e]: o
          }
        }, {});

      function s(t, e) {
        t && o.flushSync(() => t.dispatchEvent(e))
      }
    },
    84045(t, e, n) {
      n.d(e, {
        Qg: () => i,
        bL: () => s,
        s6: () => d
      });
      var r = n(93082),
        o = n(13165),
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
        d = r.forwardRef((t, e) => (0, a.jsx)(o.sG.span, {
          ...t,
          ref: e,
          style: {
            ...i,
            ...t.style
          }
        }));
      d.displayName = "VisuallyHidden";
      var s = d
    },
    34708(t, e, n) {
      n.d(e, {
        A: () => f
      });
      var r = n(45862),
        o = n(34336);
      const a = function() {
        return o.A.Date.now()
      };
      var i = n(82486),
        d = Math.max,
        s = Math.min;
      const f = function(t, e, n) {
        var o, f, u, c, l, p, v = 0,
          g = !1,
          w = !1,
          h = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function y(e) {
          var n = o,
            r = f;
          return o = f = void 0, v = e, c = t.apply(r, n)
        }

        function m(t) {
          var n = t - p;
          return void 0 === p || n >= e || n < 0 || w && t - v >= u
        }

        function b() {
          var t = a();
          if (m(t)) return A(t);
          l = setTimeout(b, function(t) {
            var n = e - (t - p);
            return w ? s(n, u - (t - v)) : n
          }(t))
        }

        function A(t) {
          return l = void 0, h && o ? y(t) : (o = f = void 0, c)
        }

        function _() {
          var t = a(),
            n = m(t);
          if (o = arguments, f = this, p = t, n) {
            if (void 0 === l) return function(t) {
              return v = t, l = setTimeout(b, e), g ? y(t) : c
            }(p);
            if (w) return clearTimeout(l), l = setTimeout(b, e), y(p)
          }
          return void 0 === l && (l = setTimeout(b, e)), c
        }
        return e = (0, i.A)(e) || 0, (0, r.A)(n) && (g = !!n.leading, u = (w = "maxWait" in n) ? d((0, i.A)(n.maxWait) || 0, e) : u, h = "trailing" in n ? !!n.trailing : h), _.cancel = function() {
          void 0 !== l && clearTimeout(l), v = 0, o = p = f = l = void 0
        }, _.flush = function() {
          return void 0 === l ? c : A(a())
        }, _
      }
    },
    50573(t, e, n) {
      n.d(e, {
        A: () => T
      });
      var r = n(20829),
        o = n(70278),
        a = n(73443);
      var i = n(99793);
      const d = function(t, e) {
        return e.length < 2 ? t : (0, i.A)(t, function(t, e, n) {
          var r = -1,
            o = t.length;
          e < 0 && (e = -e > o ? 0 : o + e), (n = n > o ? o : n) < 0 && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0;
          for (var a = Array(o); ++r < o;) a[r] = t[r + e];
          return a
        }(e, 0, -1))
      };
      var s = n(33018),
        f = Object.prototype.hasOwnProperty;
      const u = function(t, e) {
        var n = -1,
          r = (e = (0, a.A)(e, t)).length;
        if (!r) return !0;
        for (; ++n < r;) {
          var o = (0, s.A)(e[n]);
          if ("__proto__" === o && !f.call(t, "__proto__")) return !1;
          if (("constructor" === o || "prototype" === o) && n < r - 1) return !1
        }
        var i = d(t, e);
        return null == i || delete i[(0, s.A)(function(t) {
          var e = null == t ? 0 : t.length;
          return e ? t[e - 1] : void 0
        }(e))]
      };
      var c = n(57502),
        l = n(58634);
      const p = function(t) {
        return (0, l.A)(t) ? void 0 : t
      };
      var v = n(68071),
        g = n(94508),
        w = n(48348),
        h = n(6700),
        y = g.A ? g.A.isConcatSpreadable : void 0;
      const m = function(t) {
          return (0, h.A)(t) || (0, w.A)(t) || !!(y && t && t[y])
        },
        b = function t(e, n, r, o, a) {
          var i = -1,
            d = e.length;
          for (r || (r = m), a || (a = []); ++i < d;) {
            var s = e[i];
            n > 0 && r(s) ? n > 1 ? t(s, n - 1, r, o, a) : (0, v.A)(a, s) : o || (a[a.length] = s)
          }
          return a
        },
        A = function(t) {
          return null != t && t.length ? b(t, 1) : []
        };
      var _ = n(7352),
        x = n(91847);
      var k = n(47016);
      const T = (E = function(t, e) {
        var n = {};
        if (null == t) return n;
        var i = !1;
        e = (0, r.A)(e, function(e) {
          return e = (0, a.A)(e, t), i || (i = e.length > 1), e
        }), (0, c.A)(t, (0, k.A)(t), n), i && (n = (0, o.A)(n, 7, p));
        for (var d = e.length; d--;) u(n, e[d]);
        return n
      }, (0, x.A)((0, _.A)(E, void 0, A), E + ""));
      var E
    },
    82486(t, e, n) {
      n.d(e, {
        A: () => l
      });
      var r = /\s/;
      var o = /^\s+/;
      const a = function(t) {
        return t ? t.slice(0, function(t) {
          for (var e = t.length; e-- && r.test(t.charAt(e)););
          return e
        }(t) + 1).replace(o, "") : t
      };
      var i = n(45862),
        d = n(80617),
        s = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt;
      const l = function(t) {
        if ("number" == typeof t) return t;
        if ((0, d.A)(t)) return NaN;
        if ((0, i.A)(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = (0, i.A)(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = a(t);
        var n = f.test(t);
        return n || u.test(t) ? c(t.slice(2), n ? 2 : 8) : s.test(t) ? NaN : +t
      }
    }
  }
]);