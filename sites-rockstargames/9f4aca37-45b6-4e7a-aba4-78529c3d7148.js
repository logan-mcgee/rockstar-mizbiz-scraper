try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9f4aca37-45b6-4e7a-aba4-78529c3d7148", e._sentryDebugIdIdentifier = "sentry-dbid-9f4aca37-45b6-4e7a-aba4-78529c3d7148")
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
  [2932], {
    32101(e, t, n) {
      const i = "undefined" == typeof window;
      n.d(t, ["X", 0, i])
    },
    36421(e, t, n) {
      n.d(t, {
        X3: () => i.X,
        fi: () => o,
        IO: () => s,
        VW: () => l,
        v6: () => a.v,
        cJ: () => c
      });
      var i = n(32101);
      const r = e => e - .02,
        o = {
          mobile: `(min-width: 0px) and (max-width: ${r(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${r(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${r(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${r(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var a = n(64043);
      const d = "__FOUNDRY_ACCENT__",
        s = (e, t) => i.X ? t() : (window[d] || (window[d] = new Map), window[d].has(e) || window[d].set(e, t()), window[d].get(e));
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
    21297(e, t, n) {
      n.d(t, {
        DX: () => i.DX,
        xV: () => i.xV,
        s6: () => d
      });
      var i = n(93237),
        r = n(39793),
        o = n(93082),
        a = n(10333);
      const d = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? a.s6 : o.Fragment;
        return (0, r.jsx)(n, {
          ...t
        })
      }
    },
    64043(e, t, n) {
      n.d(t, {
        v: () => d
      });
      var i = n(81270);
      const r = new Map;

      function o(e, t) {
        if (e === t) return e;
        const n = r.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const i = r.get(t);
        return i ? (i.forEach(t => t(e)), e) : t
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
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              d = r[e];
            "function" == typeof n && "function" == typeof d && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, d) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof d ? "id" === e && n && d ? t.id = o(n, d) : t[e] = void 0 !== d ? d : n : t[e] = (0, i.clsx)(n, d)
          }
        }
        return t
      }
    },
    658(e, t, n) {
      n.d(t, {
        hO: () => f,
        sG: () => s
      });
      var i = n(93082),
        r = n(84017),
        o = n(93237),
        a = n(39793),
        d = Object.defineProperty,
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, o.TL)(`Primitive.${t}`),
            r = i.forwardRef((e, i) => {
              const {
                asChild: r,
                ...o
              } = e, d = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(d, {
                ...o,
                ref: i
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {});

      function f(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
      }
      d(f, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    10333(e, t, n) {
      n.d(t, {
        Qg: () => s,
        bL: () => u,
        s6: () => f
      });
      var i = n(93082),
        r = n(658),
        o = n(39793),
        a = Object.defineProperty,
        d = (e, t) => a(e, "name", {
          value: t,
          configurable: !0
        }),
        s = Object.freeze({
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
        f = i.forwardRef(d(function(e, t) {
          return (0, o.jsx)(r.sG.span, {
            ...e,
            ref: t,
            style: {
              ...s,
              ...e.style
            }
          })
        }, "VisuallyHidden")),
        u = f
    },
    34708(e, t, n) {
      n.d(t, {
        A: () => f
      });
      var i = n(45862),
        r = n(34336);
      const o = function() {
        return r.A.Date.now()
      };
      var a = n(82486),
        d = Math.max,
        s = Math.min;
      const f = function(e, t, n) {
        var r, f, u, c, l, p, w = 0,
          g = !1,
          h = !1,
          m = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function v(t) {
          var n = r,
            i = f;
          return r = f = void 0, w = t, c = e.apply(i, n)
        }

        function y(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || h && e - w >= u
        }

        function b() {
          var e = o();
          if (y(e)) return x(e);
          l = setTimeout(b, function(e) {
            var n = t - (e - p);
            return h ? s(n, u - (e - w)) : n
          }(e))
        }

        function x(e) {
          return l = void 0, m && r ? v(e) : (r = f = void 0, c)
        }

        function _() {
          var e = o(),
            n = y(e);
          if (r = arguments, f = this, p = e, n) {
            if (void 0 === l) return function(e) {
              return w = e, l = setTimeout(b, t), g ? v(e) : c
            }(p);
            if (h) return clearTimeout(l), l = setTimeout(b, t), v(p)
          }
          return void 0 === l && (l = setTimeout(b, t)), c
        }
        return t = (0, a.A)(t) || 0, (0, i.A)(n) && (g = !!n.leading, u = (h = "maxWait" in n) ? d((0, a.A)(n.maxWait) || 0, t) : u, m = "trailing" in n ? !!n.trailing : m), _.cancel = function() {
          void 0 !== l && clearTimeout(l), w = 0, r = p = f = l = void 0
        }, _.flush = function() {
          return void 0 === l ? c : x(o())
        }, _
      }
    },
    82486(e, t, n) {
      n.d(t, {
        A: () => l
      });
      var i = /\s/;
      var r = /^\s+/;
      const o = function(e) {
        return e ? e.slice(0, function(e) {
          for (var t = e.length; t-- && i.test(e.charAt(t)););
          return t
        }(e) + 1).replace(r, "") : e
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
        e = o(e);
        var n = f.test(e);
        return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : s.test(e) ? NaN : +e
      }
    }
  }
]);