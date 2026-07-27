try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "eb43f464-2284-470f-a17e-b351f1a34489", e._sentryDebugIdIdentifier = "sentry-dbid-eb43f464-2284-470f-a17e-b351f1a34489")
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
  [740, 8144], {
    68025(e, n, t) {
      const o = "undefined" == typeof window;
      t.d(n, ["X", 0, o])
    },
    6241(e, n, t) {
      t.d(n, {
        X3: () => o.X,
        fi: () => i,
        IO: () => s,
        VW: () => p,
        v6: () => a.v,
        cJ: () => c
      });
      var o = t(68025);
      const d = e => e - .02,
        i = {
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
      var a = t(26455);
      const r = "__FOUNDRY_ACCENT__",
        s = (e, n) => o.X ? n() : (window[r] || (window[r] = new Map), window[r].has(e) || window[r].set(e, n()), window[r].get(e));
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
    26455(e, n, t) {
      t.d(n, {
        v: () => r
      });
      var o = t(4921);
      const d = new Map;

      function i(e, n) {
        if (e === n) return e;
        const t = d.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const o = d.get(n);
        return o ? (o.forEach(n => n(e)), e) : n
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
          const d = e[t];
          for (const e in d) {
            const t = n[e],
              r = d[e];
            "function" == typeof t && "function" == typeof r && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = a(t, r) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof r ? "id" === e && t && r ? n.id = i(t, r) : n[e] = void 0 !== r ? r : t : n[e] = (0, o.$)(t, r)
          }
        }
        return n
      }
    },
    31270(e, n, t) {
      t.d(n, {
        hO: () => s,
        sG: () => r
      });
      var o = t(4637),
        d = t(84017),
        i = t(17172),
        a = t(39793),
        r = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, i.TL)(`Primitive.${n}`),
            d = o.forwardRef((e, o) => {
              const {
                asChild: d,
                ...i
              } = e, r = d ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(r, {
                ...i,
                ref: o
              })
            });
          return d.displayName = `Primitive.${n}`, {
            ...e,
            [n]: d
          }
        }, {});

      function s(e, n) {
        e && d.flushSync(() => e.dispatchEvent(n))
      }
    },
    32637(e, n, t) {
      t.d(n, {
        Qg: () => a,
        bL: () => s,
        s6: () => r
      });
      var o = t(4637),
        d = t(31270),
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
        r = o.forwardRef((e, n) => (0, i.jsx)(d.sG.span, {
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