/*! For license information please see 9e2507ff764972e0f4757dc7edfd6cb6.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0dea2c42-3e60-4683-903c-f63049fe487b", e._sentryDebugIdIdentifier = "sentry-dbid-0dea2c42-3e60-4683-903c-f63049fe487b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [472], {
    1996: (e, t, r) => {
      var n = r(8200),
        a = Symbol.for("react.element"),
        l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, r) {
        var n, d = {},
          u = null,
          f = null;
        for (n in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (f = t.ref), t) l.call(t, n) && !s.hasOwnProperty(n) && (d[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === d[n] && (d[n] = t[n]);
        return {
          $$typeof: a,
          type: e,
          key: u,
          ref: f,
          props: d,
          _owner: o.current
        }
      }
      t.jsx = d, t.jsxs = d
    },
    3480: (e, t, r) => {
      e.exports = r(1996)
    },
    2792: (e, t, r) => {
      r.d(t, {
        Q: () => d,
        m: () => s
      });
      var n = r(8200),
        a = r(3480);
      const l = (0, n.createContext)(),
        {
          Provider: o
        } = l,
        s = e => {
          let {
            children: t,
            payload: r
          } = e;
          return (0, a.jsx)(o, {
            value: r,
            children: t
          })
        },
        d = () => (0, n.useContext)(l)
    },
    3472: (e, t, r) => {
      r.r(t), r.d(t, {
        parse: () => f,
        previewSrc: () => i,
        uploadDir: () => c,
        useGenerateCdnSource: () => u,
        useGetCdnSource: () => d,
        useImageParser: () => s
      });
      var n = r(8200),
        a = r(5792),
        l = r(2792);
      const o = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: r
          } = new URL(e, (0, a.getCdnPrefix)(!0));
          return "/" === r ? null : (t.endsWith(".akamaized.net"), e)
        },
        s = e => {
          let {
            alt: t = null,
            mobile: r = null,
            desktop: s = null,
            ariaLabel: d = null,
            sources: u = null,
            prod: f = null
          } = e;
          const i = (0, a.useLocale)(),
            {
              meta: c = {}
            } = (0, l.Q)() ?? {},
            [p, _] = (0, n.useState)(f ?? c?.cdn ?? c?.prod ?? !0);
          (0, n.useEffect)((() => {
            _(f ?? c?.cdn ?? c?.prod ?? !0)
          }), [f, c]);
          const b = (0, n.useCallback)((e => {
            const t = null !== u,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return o(r);
            const n = `${t?(0,a.getCdnPrefix)(p):""}${r}`;
            return o(n)
          }), [p, u]);
          return {
            alt: t,
            ariaLabel: d,
            src: {
              mobile: b(u?.[i]?.mobile ?? u?.en_us?.mobile ?? r),
              desktop: b(u?.[i]?.desktop ?? u?.en_us?.desktop ?? s)
            }
          }
        },
        d = e => {
          const {
            meta: t = {}
          } = (0, l.Q)() ?? {}, [r, s] = (0, n.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, n.useEffect)((() => {
            s(t?.cdn ?? t?.prod ?? !1)
          }), [t]), null === e ? null : e?.startsWith("http") ? o(e) : o(`${(0,a.getCdnPrefix)(r)}${e}`)
        },
        u = () => {
          const {
            meta: e = {}
          } = (0, l.Q)() ?? {}, t = (0, n.useMemo)((() => e?.cdn ?? e?.prod ?? !1), [e]);
          return (0, n.useCallback)((e => e ? e?.startsWith("http") ? o(e) : o(`${(0,a.getCdnPrefix)(t)}${e}`) : null), [t])
        },
        f = e => e.full_src,
        i = e => e?.previewSrc ?? "",
        c = e => e.meta.uploads_directory
    }
  }
]);
//# sourceMappingURL=9e2507ff764972e0f4757dc7edfd6cb6.js.map