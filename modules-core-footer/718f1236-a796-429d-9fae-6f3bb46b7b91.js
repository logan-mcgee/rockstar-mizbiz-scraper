try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "718f1236-a796-429d-9fae-6f3bb46b7b91", e._sentryDebugIdIdentifier = "sentry-dbid-718f1236-a796-429d-9fae-6f3bb46b7b91")
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
  [2204, 7001], {
    63844(e, t, n) {
      n.d(t, {
        X: () => o
      });
      const o = "undefined" == typeof window
    },
    69218(e, t, n) {
      n.d(t, {
        X3: () => o.X,
        fi: () => a,
        IO: () => s,
        VW: () => c,
        v6: () => i.v,
        cJ: () => p
      });
      var o = n(63844);
      const d = e => e - .02,
        a = {
          mobile: `(min-width: 0px) and (max-width: ${d(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${d(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${d(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${d(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var i = n(91350);
      const r = "__FOUNDRY_ACCENT__",
        s = (e, t) => o.X ? t() : (window[r] || (window[r] = new Map), window[r].has(e) || window[r].set(e, t()), window[r].get(e));
      n(68309);
      var f, l = n(15963);

      function p(e, ...t) {
        return l(e, ...t)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const c = (...e) => e.filter(e => e).join(" ")
    },
    91350(e, t, n) {
      n.d(t, {
        v: () => r
      });
      var o = n(4921);
      const d = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = d.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const o = d.get(t);
        return o ? (o.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function r(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const d = e[n];
          for (const e in d) {
            const n = t[e],
              r = d[e];
            "function" == typeof n && "function" == typeof r && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, r) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof r ? "id" === e && n && r ? t.id = a(n, r) : t[e] = void 0 !== r ? r : n : t[e] = (0, o.$)(n, r)
          }
        }
        return t
      }
    },
    20972(e, t, n) {
      n.d(t, {
        sG: () => i
      });
      var o = n(4637),
        d = (n(84017), n(38957)),
        a = n(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, d.TL)(`Primitive.${t}`),
            i = o.forwardRef((e, o) => {
              const {
                asChild: d,
                ...i
              } = e, r = d ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(r, {
                ...i,
                ref: o
              })
            });
          return i.displayName = `Primitive.${t}`, {
            ...e,
            [t]: i
          }
        }, {})
    },
    3541(e, t, n) {
      n.d(t, {
        bL: () => s,
        s6: () => r
      });
      var o = n(4637),
        d = n(20972),
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
        r = o.forwardRef((e, t) => (0, a.jsx)(d.sG.span, {
          ...e,
          ref: t,
          style: {
            ...i,
            ...e.style
          }
        }));
      r.displayName = "VisuallyHidden";
      var s = r
    }
  }
]);