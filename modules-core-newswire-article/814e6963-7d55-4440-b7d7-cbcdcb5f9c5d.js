try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "814e6963-7d55-4440-b7d7-cbcdcb5f9c5d", e._sentryDebugIdIdentifier = "sentry-dbid-814e6963-7d55-4440-b7d7-cbcdcb5f9c5d")
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
  [1089, 5829], {
    90371(e, n, t) {
      t.d(n, {
        X: () => d
      });
      const d = "undefined" == typeof window
    },
    27859(e, n, t) {
      t.d(n, {
        X3: () => d.X,
        fi: () => i,
        IO: () => s,
        VW: () => p,
        v6: () => a.v,
        cJ: () => c
      });
      var d = t(90371);
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
      var a = t(31985);
      const r = "__FOUNDRY_ACCENT__",
        s = (e, n) => d.X ? n() : (window[r] || (window[r] = new Map), window[r].has(e) || window[r].set(e, n()), window[r].get(e));
      t(68309);
      var l, f = t(15963);

      function c(e, ...n) {
        return f(e, ...n)
      }
      t(54028), t(74143), t(88584), t(73892), t(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(l || (l = {})), Symbol.toStringTag;
      const p = (...e) => e.filter(e => e).join(" ")
    },
    90067(e, n, t) {
      t.d(n, {
        DX: () => d.DX,
        xV: () => d.xV,
        s6: () => r
      });
      var d = t(38957),
        o = t(39793),
        i = t(93082),
        a = t(34376);
      const r = ({
        enabled: e = !0,
        ...n
      }) => {
        const t = e ? a.s6 : i.Fragment;
        return (0, o.jsx)(t, {
          ...n
        })
      }
    },
    31985(e, n, t) {
      t.d(n, {
        v: () => r
      });
      var d = t(81270);
      const o = new Map;

      function i(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const d = o.get(n);
        return d ? (d.forEach(n => n(e)), e) : n
      }

      function a(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function r(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              r = o[e];
            "function" == typeof t && "function" == typeof r && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = a(t, r) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof r ? "id" === e && t && r ? n.id = i(t, r) : n[e] = void 0 !== r ? r : t : n[e] = (0, d.clsx)(t, r)
          }
        }
        return n
      }
    },
    4031(e, n, t) {
      t.d(n, {
        sG: () => a
      });
      var d = t(93082),
        o = (t(84017), t(38957)),
        i = t(39793),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, o.TL)(`Primitive.${n}`),
            a = d.forwardRef((e, d) => {
              const {
                asChild: o,
                ...a
              } = e, r = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(r, {
                ...a,
                ref: d
              })
            });
          return a.displayName = `Primitive.${n}`, {
            ...e,
            [n]: a
          }
        }, {})
    },
    34376(e, n, t) {
      t.d(n, {
        bL: () => s,
        s6: () => r
      });
      var d = t(93082),
        o = t(4031),
        i = t(39793),
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
        r = d.forwardRef((e, n) => (0, i.jsx)(o.sG.span, {
          ...e,
          ref: n,
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