try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f3b7f33d-5d82-4049-a5e3-9e0c9d48cd17", e._sentryDebugIdIdentifier = "sentry-dbid-f3b7f33d-5d82-4049-a5e3-9e0c9d48cd17")
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
  [1089, 7469], {
    87213(e, n, t) {
      t.d(n, {
        X: () => d
      });
      const d = "undefined" == typeof window
    },
    23293(e, n, t) {
      t.d(n, {
        X3: () => d.X,
        fi: () => o,
        IO: () => s,
        VW: () => p,
        v6: () => i.v,
        cJ: () => c
      });
      var d = t(87213);
      const a = e => e - .02,
        o = {
          mobile: `(min-width: 0px) and (max-width: ${a(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${a(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${a(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${a(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var i = t(71107);
      const r = "__FOUNDRY_ACCENT__",
        s = (e, n) => d.X ? n() : (window[r] || (window[r] = new Map), window[r].has(e) || window[r].set(e, n()), window[r].get(e));
      t(68309);
      var f, l = t(15963);

      function c(e, ...n) {
        return l(e, ...n)
      }
      t(54028), t(74143), t(88584), t(73892), t(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const p = (...e) => e.filter(e => e).join(" ")
    },
    30377(e, n, t) {
      t.d(n, {
        DX: () => d.DX,
        xV: () => d.xV,
        s6: () => r
      });
      var d = t(38957),
        a = t(39793),
        o = t(93082),
        i = t(34376);
      const r = ({
        enabled: e = !0,
        ...n
      }) => {
        const t = e ? i.s6 : o.Fragment;
        return (0, a.jsx)(t, {
          ...n
        })
      }
    },
    71107(e, n, t) {
      t.d(n, {
        v: () => r
      });
      var d = t(81270);
      const a = new Map;

      function o(e, n) {
        if (e === n) return e;
        const t = a.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const d = a.get(n);
        return d ? (d.forEach(n => n(e)), e) : n
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
          const a = e[t];
          for (const e in a) {
            const t = n[e],
              r = a[e];
            "function" == typeof t && "function" == typeof r && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = i(t, r) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof r ? "id" === e && t && r ? n.id = o(t, r) : n[e] = void 0 !== r ? r : t : n[e] = (0, d.clsx)(t, r)
          }
        }
        return n
      }
    },
    4031(e, n, t) {
      t.d(n, {
        sG: () => i
      });
      var d = t(93082),
        a = (t(84017), t(38957)),
        o = t(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, a.TL)(`Primitive.${n}`),
            i = d.forwardRef((e, d) => {
              const {
                asChild: a,
                ...i
              } = e, r = a ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, o.jsx)(r, {
                ...i,
                ref: d
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
      var d = t(93082),
        a = t(4031),
        o = t(39793),
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
        r = d.forwardRef((e, n) => (0, o.jsx)(a.sG.span, {
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