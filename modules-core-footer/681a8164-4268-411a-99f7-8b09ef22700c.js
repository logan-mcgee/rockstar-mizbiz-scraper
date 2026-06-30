try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "681a8164-4268-411a-99f7-8b09ef22700c", e._sentryDebugIdIdentifier = "sentry-dbid-681a8164-4268-411a-99f7-8b09ef22700c")
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
  [7165], {
    87213(e, n, t) {
      t.d(n, {
        X: () => o
      });
      const o = "undefined" == typeof window
    },
    23293(e, n, t) {
      t.d(n, {
        X3: () => o.X,
        fi: () => a,
        IO: () => s,
        VW: () => c,
        v6: () => i.v,
        cJ: () => p
      });
      var o = t(87213);
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
      var i = t(71107);
      const r = "__FOUNDRY_ACCENT__",
        s = (e, n) => o.X ? n() : (window[r] || (window[r] = new Map), window[r].has(e) || window[r].set(e, n()), window[r].get(e));
      t(68309);
      var f, l = t(15963);

      function p(e, ...n) {
        return l(e, ...n)
      }
      t(54028), t(74143), t(88584), t(73892), t(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const c = (...e) => e.filter(e => e).join(" ")
    },
    30377(e, n, t) {
      t.d(n, {
        DX: () => o.DX,
        xV: () => o.xV,
        s6: () => r
      });
      var o = t(38957),
        d = t(39793),
        a = t(4637),
        i = t(34376);
      const r = ({
        enabled: e = !0,
        ...n
      }) => {
        const t = e ? i.s6 : a.Fragment;
        return (0, d.jsx)(t, {
          ...n
        })
      }
    },
    71107(e, n, t) {
      t.d(n, {
        v: () => r
      });
      var o = t(4921);
      const d = new Map;

      function a(e, n) {
        if (e === n) return e;
        const t = d.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const o = d.get(n);
        return o ? (o.forEach(n => n(e)), e) : n
      }

      function i(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function r(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const d = e[t];
          for (const e in d) {
            const t = n[e],
              r = d[e];
            "function" == typeof t && "function" == typeof r && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = i(t, r) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof r ? "id" === e && t && r ? n.id = a(t, r) : n[e] = void 0 !== r ? r : t : n[e] = (0, o.$)(t, r)
          }
        }
        return n
      }
    },
    4031(e, n, t) {
      t.d(n, {
        sG: () => i
      });
      var o = t(4637),
        d = (t(84017), t(38957)),
        a = t(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, d.TL)(`Primitive.${n}`),
            i = o.forwardRef((e, o) => {
              const {
                asChild: d,
                ...i
              } = e, r = d ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(r, {
                ...i,
                ref: o
              })
            });
          return i.displayName = `Primitive.${n}`, {
            ...e,
            [n]: i
          }
        }, {})
    },
    34376(e, n, t) {
      t.d(n, {
        bL: () => s,
        s6: () => r
      });
      var o = t(4637),
        d = t(4031),
        a = t(39793),
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
        r = o.forwardRef((e, n) => (0, a.jsx)(d.sG.span, {
          ...e,
          ref: n,
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