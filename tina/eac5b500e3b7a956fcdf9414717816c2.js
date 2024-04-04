/*! For license information please see eac5b500e3b7a956fcdf9414717816c2.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0ac87cf4-2a46-4d42-94e1-c6be48d5f6ba", e._sentryDebugIdIdentifier = "sentry-dbid-0ac87cf4-2a46-4d42-94e1-c6be48d5f6ba")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [544], {
    9576: (e, t, r) => {
      var n = r(1664),
        a = Symbol.for("react.element"),
        l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, t, r) {
        var n, s = {},
          u = null,
          f = null;
        for (n in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (f = t.ref), t) l.call(t, n) && !d.hasOwnProperty(n) && (s[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === s[n] && (s[n] = t[n]);
        return {
          $$typeof: a,
          type: e,
          key: u,
          ref: f,
          props: s,
          _owner: o.current
        }
      }
      t.jsx = s, t.jsxs = s
    },
    5240: (e, t, r) => {
      e.exports = r(9576)
    },
    508: (e, t, r) => {
      r.d(t, {
        Q: () => s,
        m: () => d
      });
      var n = r(1664),
        a = r(5240);
      const l = (0, n.createContext)(),
        {
          Provider: o
        } = l,
        d = e => {
          let {
            children: t,
            payload: r
          } = e;
          return (0, a.jsx)(o, {
            value: r,
            children: t
          })
        },
        s = () => (0, n.useContext)(l)
    },
    3924: (e, t, r) => {
      r.r(t), r.d(t, {
        parse: () => f,
        previewSrc: () => c,
        uploadDir: () => i,
        useGenerateCdnSource: () => u,
        useGetCdnSource: () => s,
        useImageParser: () => d
      });
      var n = r(1664),
        a = r(5792),
        l = r(508);
      const o = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: r
          } = new URL(e, (0, a.getCdnPrefix)(!0));
          return "/" === r ? null : (t.endsWith(".akamaized.net"), e)
        },
        d = e => {
          let {
            alt: t = null,
            mobile: r = null,
            desktop: d = null,
            ariaLabel: s = null,
            sources: u = null,
            prod: f = null
          } = e;
          const c = (0, a.useLocale)(),
            {
              meta: i = {}
            } = (0, l.Q)() ?? {},
            [p, b] = (0, n.useState)(f ?? i?.cdn ?? i?.prod ?? !0);
          (0, n.useEffect)((() => {
            b(f ?? i?.cdn ?? i?.prod ?? !0)
          }), [f, i]);
          const _ = (0, n.useCallback)((e => {
            const t = null !== u,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return o(r);
            const n = `${t?(0,a.getCdnPrefix)(p):""}${r}`;
            return o(n)
          }), [p, u]);
          return {
            alt: t,
            ariaLabel: s,
            src: {
              mobile: _(u?.[c]?.mobile ?? u?.en_us?.mobile ?? r),
              desktop: _(u?.[c]?.desktop ?? u?.en_us?.desktop ?? d)
            }
          }
        },
        s = e => {
          const {
            meta: t = {}
          } = (0, l.Q)() ?? {}, [r, d] = (0, n.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, n.useEffect)((() => {
            d(t?.cdn ?? t?.prod ?? !1)
          }), [t]), null === e ? null : e?.startsWith("http") ? o(e) : o(`${(0,a.getCdnPrefix)(r)}${e}`)
        },
        u = () => {
          const {
            meta: e = {}
          } = (0, l.Q)() ?? {}, t = (0, n.useMemo)((() => e?.cdn ?? e?.prod ?? !1), [e]);
          return (0, n.useCallback)((e => e ? e?.startsWith("http") ? o(e) : o(`${(0,a.getCdnPrefix)(t)}${e}`) : null), [t])
        },
        f = e => e.full_src,
        c = e => {
          const t = e?.previewSrc ?? e;
          return t?.startsWith("http") ? t : `${(0,a.getCdnPrefix)(!1)}${t}`
        },
        i = e => e.meta.uploads_directory
    }
  }
]);
//# sourceMappingURL=eac5b500e3b7a956fcdf9414717816c2.js.map