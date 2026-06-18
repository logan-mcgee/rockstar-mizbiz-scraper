try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "43c86adf-256e-4db8-94c3-44c1ebb0f9ff", e._sentryDebugIdIdentifier = "sentry-dbid-43c86adf-256e-4db8-94c3-44c1ebb0f9ff")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [6174, 9869], {
    90371(e, t, n) {
      n.d(t, {
        X: () => d
      });
      const d = "undefined" == typeof window
    },
    27859(e, t, n) {
      n.d(t, {
        X3: () => d.X,
        fi: () => i,
        IO: () => s,
        VW: () => p,
        v6: () => a.v,
        cJ: () => c
      });
      var d = n(90371);
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
      const r = "__FOUNDRY_ACCENT__",
        s = (e, t) => d.X ? t() : (window[r] || (window[r] = new Map), window[r].has(e) || window[r].set(e, t()), window[r].get(e));
      n(68309);
      var f, l = n(15963);

      function c(e, ...t) {
        return l(e, ...t)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const p = (...e) => e.filter(e => e).join(" ")
    },
    31985(e, t, n) {
      n.d(t, {
        v: () => r
      });
      var d = n(4921);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const d = o.get(t);
        return d ? (d.forEach(t => t(e)), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function r(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              r = o[e];
            "function" == typeof n && "function" == typeof r && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, r) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof r ? "id" === e && n && r ? t.id = i(n, r) : t[e] = void 0 !== r ? r : n : t[e] = (0, d.$)(n, r)
          }
        }
        return t
      }
    },
    4031(e, t, n) {
      n.d(t, {
        sG: () => a
      });
      var d = n(4637),
        o = (n(84017), n(38957)),
        i = n(39793),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, o.TL)(`Primitive.${t}`),
            a = d.forwardRef((e, d) => {
              const {
                asChild: o,
                ...a
              } = e, r = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(r, {
                ...a,
                ref: d
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
        s6: () => r
      });
      var d = n(4637),
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
        r = d.forwardRef((e, t) => (0, i.jsx)(o.sG.span, {
          ...e,
          ref: t,
          style: {
            ...a,
            ...e.style
          }
        }));
      r.displayName = "VisuallyHidden";
      var s = r
    }
  }
]);