try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "0178f30f-c22d-40d3-8f40-610e76556f4c", t._sentryDebugIdIdentifier = "sentry-dbid-0178f30f-c22d-40d3-8f40-610e76556f4c")
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
  [9730], {
    13899(t, e, n) {
      const r = "undefined" == typeof window;
      n.d(e, ["X", 0, r])
    },
    25739(t, e, n) {
      n.d(e, {
        X3: () => r.X,
        fi: () => i,
        IO: () => f,
        VW: () => l,
        v6: () => a.v,
        cJ: () => c
      });
      var r = n(13899);
      const o = t => t - .02,
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
      var a = n(96297);
      const d = "__FOUNDRY_ACCENT__",
        f = (t, e) => r.X ? e() : (window[d] || (window[d] = new Map), window[d].has(t) || window[d].set(t, e()), window[d].get(t));
      n(68309);
      var s, u = n(15963);

      function c(t, ...e) {
        return u(t, ...e)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(t) {
          t.Pending = "pending", t.Fulfilled = "fulfilled", t.Rejected = "rejected"
        }(s || (s = {})), Symbol.toStringTag;
      const l = (...t) => t.filter(t => t).join(" ")
    },
    61707(t, e, n) {
      n.d(e, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => d
      });
      var r = n(17172),
        o = n(39793),
        i = n(93082),
        a = n(23482);
      const d = ({
        enabled: t = !0,
        ...e
      }) => {
        const n = t ? a.s6 : i.Fragment;
        return (0, o.jsx)(n, {
          ...e
        })
      }
    },
    96297(t, e, n) {
      n.d(e, {
        v: () => d
      });
      var r = n(81270);
      const o = new Map;

      function i(t, e) {
        if (t === e) return t;
        const n = o.get(t);
        if (n) return n.forEach(t => t(e)), e;
        const r = o.get(e);
        return r ? (r.forEach(e => e(t)), t) : e
      }

      function a(...t) {
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
            "function" == typeof n && "function" == typeof d && "o" === t[0] && "n" === t[1] && t.charCodeAt(2) >= 65 && t.charCodeAt(2) <= 90 ? e[t] = a(n, d) : "className" !== t && "UNSAFE_className" !== t || "string" != typeof n || "string" != typeof d ? "id" === t && n && d ? e.id = i(n, d) : e[t] = void 0 !== d ? d : n : e[t] = (0, r.clsx)(n, d)
          }
        }
        return e
      }
    },
    94435(t, e, n) {
      n.d(e, {
        hO: () => f,
        sG: () => d
      });
      var r = n(93082),
        o = n(84017),
        i = n(17172),
        a = n(39793),
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((t, e) => {
          const n = (0, i.TL)(`Primitive.${e}`),
            o = r.forwardRef((t, r) => {
              const {
                asChild: o,
                ...i
              } = t, d = o ? n : e;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(d, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${e}`, {
            ...t,
            [e]: o
          }
        }, {});

      function f(t, e) {
        t && o.flushSync(() => t.dispatchEvent(e))
      }
    },
    23482(t, e, n) {
      n.d(e, {
        Qg: () => a,
        bL: () => f,
        s6: () => d
      });
      var r = n(93082),
        o = n(94435),
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
        d = r.forwardRef((t, e) => (0, i.jsx)(o.sG.span, {
          ...t,
          ref: e,
          style: {
            ...a,
            ...t.style
          }
        }));
      d.displayName = "VisuallyHidden";
      var f = d
    },
    34708(t, e, n) {
      n.d(e, {
        A: () => s
      });
      var r = n(45862),
        o = n(34336);
      const i = function() {
        return o.A.Date.now()
      };
      var a = n(82486),
        d = Math.max,
        f = Math.min;
      const s = function(t, e, n) {
        var o, s, u, c, l, p, v = 0,
          g = !1,
          w = !1,
          h = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function y(e) {
          var n = o,
            r = s;
          return o = s = void 0, v = e, c = t.apply(r, n)
        }

        function m(t) {
          var n = t - p;
          return void 0 === p || n >= e || n < 0 || w && t - v >= u
        }

        function b() {
          var t = i();
          if (m(t)) return A(t);
          l = setTimeout(b, function(t) {
            var n = e - (t - p);
            return w ? f(n, u - (t - v)) : n
          }(t))
        }

        function A(t) {
          return l = void 0, h && o ? y(t) : (o = s = void 0, c)
        }

        function _() {
          var t = i(),
            n = m(t);
          if (o = arguments, s = this, p = t, n) {
            if (void 0 === l) return function(t) {
              return v = t, l = setTimeout(b, e), g ? y(t) : c
            }(p);
            if (w) return clearTimeout(l), l = setTimeout(b, e), y(p)
          }
          return void 0 === l && (l = setTimeout(b, e)), c
        }
        return e = (0, a.A)(e) || 0, (0, r.A)(n) && (g = !!n.leading, u = (w = "maxWait" in n) ? d((0, a.A)(n.maxWait) || 0, e) : u, h = "trailing" in n ? !!n.trailing : h), _.cancel = function() {
          void 0 !== l && clearTimeout(l), v = 0, o = p = s = l = void 0
        }, _.flush = function() {
          return void 0 === l ? c : A(i())
        }, _
      }
    },
    50573(t, e, n) {
      n.d(e, {
        A: () => T
      });
      var r = n(20829),
        o = n(70278),
        i = n(73443);
      var a = n(99793);
      const d = function(t, e) {
        return e.length < 2 ? t : (0, a.A)(t, function(t, e, n) {
          var r = -1,
            o = t.length;
          e < 0 && (e = -e > o ? 0 : o + e), (n = n > o ? o : n) < 0 && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0;
          for (var i = Array(o); ++r < o;) i[r] = t[r + e];
          return i
        }(e, 0, -1))
      };
      var f = n(33018),
        s = Object.prototype.hasOwnProperty;
      const u = function(t, e) {
        var n = -1,
          r = (e = (0, i.A)(e, t)).length;
        if (!r) return !0;
        for (; ++n < r;) {
          var o = (0, f.A)(e[n]);
          if ("__proto__" === o && !s.call(t, "__proto__")) return !1;
          if (("constructor" === o || "prototype" === o) && n < r - 1) return !1
        }
        var a = d(t, e);
        return null == a || delete a[(0, f.A)(function(t) {
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
        b = function t(e, n, r, o, i) {
          var a = -1,
            d = e.length;
          for (r || (r = m), i || (i = []); ++a < d;) {
            var f = e[a];
            n > 0 && r(f) ? n > 1 ? t(f, n - 1, r, o, i) : (0, v.A)(i, f) : o || (i[i.length] = f)
          }
          return i
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
        var a = !1;
        e = (0, r.A)(e, function(e) {
          return e = (0, i.A)(e, t), a || (a = e.length > 1), e
        }), (0, c.A)(t, (0, k.A)(t), n), a && (n = (0, o.A)(n, 7, p));
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
      const i = function(t) {
        return t ? t.slice(0, function(t) {
          for (var e = t.length; e-- && r.test(t.charAt(e)););
          return e
        }(t) + 1).replace(o, "") : t
      };
      var a = n(45862),
        d = n(80617),
        f = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt;
      const l = function(t) {
        if ("number" == typeof t) return t;
        if ((0, d.A)(t)) return NaN;
        if ((0, a.A)(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = (0, a.A)(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = i(t);
        var n = s.test(t);
        return n || u.test(t) ? c(t.slice(2), n ? 2 : 8) : f.test(t) ? NaN : +t
      }
    }
  }
]);