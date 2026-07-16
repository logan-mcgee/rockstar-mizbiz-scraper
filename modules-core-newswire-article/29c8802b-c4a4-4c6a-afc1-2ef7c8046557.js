try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "29c8802b-c4a4-4c6a-afc1-2ef7c8046557", e._sentryDebugIdIdentifier = "sentry-dbid-29c8802b-c4a4-4c6a-afc1-2ef7c8046557")
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
  [6635, 7659], {
    31602(e, n, t) {
      const a = "undefined" == typeof window;
      t.d(n, ["X", 0, a])
    },
    7912(e, n, t) {
      t.d(n, {
        X3: () => a.X,
        fi: () => o,
        IO: () => s,
        VW: () => p,
        v6: () => i.v,
        cJ: () => c
      });
      var a = t(31602);
      const d = e => e - .02,
        o = {
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
      var i = t(47460);
      const r = "__FOUNDRY_ACCENT__",
        s = (e, n) => a.X ? n() : (window[r] || (window[r] = new Map), window[r].has(e) || window[r].set(e, n()), window[r].get(e));
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
    69088(e, n, t) {
      t.d(n, {
        DX: () => a.DX,
        xV: () => a.xV,
        s6: () => r
      });
      var a = t(17172),
        d = t(39793),
        o = t(93082),
        i = t(84045);
      const r = ({
        enabled: e = !0,
        ...n
      }) => {
        const t = e ? i.s6 : o.Fragment;
        return (0, d.jsx)(t, {
          ...n
        })
      }
    },
    47460(e, n, t) {
      t.d(n, {
        v: () => r
      });
      var a = t(81270);
      const d = new Map;

      function o(e, n) {
        if (e === n) return e;
        const t = d.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const a = d.get(n);
        return a ? (a.forEach(n => n(e)), e) : n
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
            "function" == typeof t && "function" == typeof r && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = i(t, r) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof r ? "id" === e && t && r ? n.id = o(t, r) : n[e] = void 0 !== r ? r : t : n[e] = (0, a.clsx)(t, r)
          }
        }
        return n
      }
    },
    13165(e, n, t) {
      t.d(n, {
        hO: () => s,
        sG: () => r
      });
      var a = t(93082),
        d = t(84017),
        o = t(17172),
        i = t(39793),
        r = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, o.TL)(`Primitive.${n}`),
            d = a.forwardRef((e, a) => {
              const {
                asChild: d,
                ...o
              } = e, r = d ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(r, {
                ...o,
                ref: a
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
    84045(e, n, t) {
      t.d(n, {
        Qg: () => i,
        bL: () => s,
        s6: () => r
      });
      var a = t(93082),
        d = t(13165),
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
        r = a.forwardRef((e, n) => (0, o.jsx)(d.sG.span, {
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