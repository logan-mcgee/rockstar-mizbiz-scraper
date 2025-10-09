try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f0059f30-db8a-4b45-a1ac-171f8fa505c7", e._sentryDebugIdIdentifier = "sentry-dbid-f0059f30-db8a-4b45-a1ac-171f8fa505c7")
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
  [4858, 5239], {
    38476: (e, n, t) => {
      t.d(n, {
        v: () => s
      });
      var r = t(4572);
      const o = new Map;

      function i(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach((e => e(n))), n;
        const r = o.get(n);
        return r ? (r.forEach((n => n(e))), e) : n
      }

      function a(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function s(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              s = o[e];
            "function" == typeof t && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = a(t, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof s ? "id" === e && t && s ? n.id = i(t, s) : n[e] = void 0 !== s ? s : t : n[e] = (0, r.clsx)(t, s)
          }
        }
        return n
      }
    },
    39447: (e, n, t) => {
      t.d(n, {
        DX: () => s,
        Dc: () => f,
        TL: () => a,
        xV: () => c
      });
      var r = t(62229),
        o = t(95362),
        i = t(42295);

      function a(e) {
        const n = l(e),
          t = r.forwardRef(((e, t) => {
            const {
              children: o,
              ...a
            } = e, s = r.Children.toArray(o), l = s.find(u);
            if (l) {
              const e = l.props.children,
                o = s.map((n => n === l ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n));
              return (0, i.jsx)(n, {
                ...a,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, i.jsx)(n, {
              ...a,
              ref: t,
              children: o
            })
          }));
        return t.displayName = `${e}.Slot`, t
      }
      var s = a("Slot");

      function l(e) {
        const n = r.forwardRef(((e, n) => {
          const {
            children: t,
            ...i
          } = e;
          if (r.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              a = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    i = n[r];
                  /^on[A-Z]/.test(r) ? o && i ? t[r] = (...e) => {
                    i(...e), o(...e)
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (t[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(i, t.props);
            return t.type !== r.Fragment && (a.ref = n ? (0, o.t)(n, e) : e), r.cloneElement(t, a)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        }));
        return n.displayName = `${e}.SlotClone`, n
      }
      var d = Symbol("radix.slottable");

      function f(e) {
        const n = ({
          children: e
        }) => (0, i.jsx)(i.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = d, n
      }
      var c = f("Slottable");

      function u(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d
      }
    },
    68138: (e, n, t) => {
      t.d(n, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    69055: (e, n, t) => {
      t.d(n, {
        Qg: () => a,
        bL: () => l,
        s6: () => s
      });
      var r = t(62229),
        o = t(78004),
        i = t(42295),
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
        s = r.forwardRef(((e, n) => (0, i.jsx)(o.sG.span, {
          ...e,
          ref: n,
          style: {
            ...a,
            ...e.style
          }
        })));
      s.displayName = "VisuallyHidden";
      var l = s
    },
    78004: (e, n, t) => {
      t.d(n, {
        hO: () => l,
        sG: () => s
      });
      var r = t(62229),
        o = t(44853),
        i = t(39447),
        a = t(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, i.TL)(`Primitive.${n}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(s, {
                ...i,
                ref: r
              })
            }));
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }), {});

      function l(e, n) {
        e && o.flushSync((() => e.dispatchEvent(n)))
      }
    },
    95362: (e, n, t) => {
      t.d(n, {
        s: () => a,
        t: () => i
      });
      var r = t(62229);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function i(...e) {
        return n => {
          let t = !1;
          const r = e.map((e => {
            const r = o(e, n);
            return t || "function" != typeof r || (t = !0), r
          }));
          if (t) return () => {
            for (let n = 0; n < r.length; n++) {
              const t = r[n];
              "function" == typeof t ? t() : o(e[n], null)
            }
          }
        }
      }

      function a(...e) {
        return r.useCallback(i(...e), e)
      }
    },
    97066: (e, n, t) => {
      t.d(n, {
        AK: () => c,
        v6: () => o.v
      }), t(68138);
      var r, o = t(38476);

      function i(e) {
        return e
      }
      t(98312), t(41972), t(56265), t(31454), t(10533), t(10613), t(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(r || (r = {})), Symbol.toStringTag;
      const {
        cbrt: a,
        sqrt: s,
        PI: l
      } = Math, d = (e, n, t, r, o) => {
        const i = n + t * e,
          d = i ** 2 + r;
        if (d > 0) {
          const e = s(d);
          return a(i + e) + a(i - e) - o
        }
        const f = a(s(i * i - d)),
          c = i ? Math.atan(s(-d) / i) : -l / 2;
        let u;
        return u = t < 0 ? (i > 0 ? 2 * l : l) - c : o < 0 ? (i > 0 ? 2 * l : -3 * l) + c : (i > 0 ? 0 : l) + c, 2 * f * Math.cos(u / 3) - o
      }, f = (e, n, t, r) => ((n * e + 3 * t) * e + r) * e;

      function c(e, n, t, r) {
        if (!(0 <= e && e <= 1 && 0 <= t && t <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === n && t === r) return i;
        const o = 6 * (3 * e - 3 * t + 1),
          a = 6 * (t - 2 * e),
          s = 3 * e,
          l = o * o,
          c = a * a,
          u = a / o,
          p = 3 * a * s / l - c * a / (l * o),
          y = 2 * s / o - c / l,
          g = y * y * y,
          h = 3 / o,
          b = 3 * n - 3 * r + 1,
          w = r - 2 * n,
          m = 3 * n,
          v = o ? d : i;
        return e => 0 === e || 1 === e ? e : f(v(e, p, h, g, u), b, w, m)
      }
    }
  }
]);