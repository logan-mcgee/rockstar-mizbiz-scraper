try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4d2eb4bb-5264-47c9-973b-f20c325a14dc", e._sentryDebugIdIdentifier = "sentry-dbid-4d2eb4bb-5264-47c9-973b-f20c325a14dc")
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
  [82, 1401], {
    94931(e, t, n) {
      var o = n(93082),
        d = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, t, n) {
        var o, a = {},
          f = null,
          l = null;
        for (o in void 0 !== n && (f = "" + n), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (l = t.ref), t) r.call(t, o) && !s.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === a[o] && (a[o] = t[o]);
        return {
          $$typeof: d,
          type: e,
          key: f,
          ref: l,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = f, t.jsxs = f
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    51054(e, t, n) {
      const o = "undefined" == typeof window;
      n.d(t, ["X", 0, o])
    },
    6316(e, t, n) {
      n.d(t, {
        X3: () => o.X,
        fi: () => a,
        IO: () => s,
        VW: () => p,
        v6: () => r.v,
        cJ: () => c
      });
      var o = n(51054);
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
      var r = n(63384);
      const i = "__FOUNDRY_ACCENT__",
        s = (e, t) => o.X ? t() : (window[i] || (window[i] = new Map), window[i].has(e) || window[i].set(e, t()), window[i].get(e));
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
    63384(e, t, n) {
      n.d(t, {
        v: () => i
      });
      var o = n(81270);
      const d = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = d.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const o = d.get(t);
        return o ? (o.forEach(t => t(e)), e) : t
      }

      function r(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function i(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const d = e[n];
          for (const e in d) {
            const n = t[e],
              i = d[e];
            "function" == typeof n && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = r(n, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof i ? "id" === e && n && i ? t.id = a(n, i) : t[e] = void 0 !== i ? i : n : t[e] = (0, o.clsx)(n, i)
          }
        }
        return t
      }
    },
    31270(e, t, n) {
      n.d(t, {
        hO: () => s,
        sG: () => i
      });
      var o = n(93082),
        d = n(84017),
        a = n(17172),
        r = n(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, a.TL)(`Primitive.${t}`),
            d = o.forwardRef((e, o) => {
              const {
                asChild: d,
                ...a
              } = e, i = d ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, r.jsx)(i, {
                ...a,
                ref: o
              })
            });
          return d.displayName = `Primitive.${t}`, {
            ...e,
            [t]: d
          }
        }, {});

      function s(e, t) {
        e && d.flushSync(() => e.dispatchEvent(t))
      }
    },
    32637(e, t, n) {
      n.d(t, {
        Qg: () => r,
        bL: () => s,
        s6: () => i
      });
      var o = n(93082),
        d = n(31270),
        a = n(39793),
        r = Object.freeze({
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
        i = o.forwardRef((e, t) => (0, a.jsx)(d.sG.span, {
          ...e,
          ref: t,
          style: {
            ...r,
            ...e.style
          }
        }));
      i.displayName = "VisuallyHidden";
      var s = i
    }
  }
]);