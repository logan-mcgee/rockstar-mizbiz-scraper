/*! For license information please see 51aa90365c3c09828c65.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [907], {
    858: (e, r, t) => {
      t.d(r, {
        I: () => u,
        d: () => a
      });
      var n = t(822),
        l = t(668);
      const o = (0, n.createContext)(),
        {
          Provider: s
        } = o,
        a = e => {
          let {
            children: r,
            payload: t
          } = e;
          return (0, l.jsx)(s, {
            value: t,
            children: r
          })
        },
        u = () => (0, n.useContext)(o)
    },
    907: (e, r, t) => {
      t.r(r), t.d(r, {
        parse: () => c,
        previewSrc: () => i,
        uploadDir: () => d,
        useGetCdnSource: () => u,
        useImageParser: () => a
      });
      var n = t(822),
        l = t(929),
        o = t(858);
      Math.min(window.screen.width, 1920);
      const s = e => {
          if (!e) return null;
          const {
            hostname: r,
            pathname: t
          } = new URL(e, (0, l.getCdnPrefix)(!0));
          return "/" === t ? null : (r.endsWith("akamaized.net"), e)
        },
        a = e => {
          let {
            alt: r = null,
            mobile: t = null,
            desktop: a = null,
            ariaLabel: u = null,
            sources: c = null,
            prod: i = null
          } = e;
          const d = (0, l.useLocale)(),
            {
              meta: p = {}
            } = (0, o.I)() ?? {},
            [f, _] = (0, n.useState)(i ?? p?.cdn ?? p?.prod ?? !0);
          (0, n.useEffect)((() => {
            _(i ?? p?.cdn ?? p?.prod ?? !0)
          }), [i, p]);
          const m = (0, n.useCallback)((e => {
            const r = null !== c,
              t = "string" == typeof e ? e : "object" == typeof e ? e?.previewSrc ?? null : null;
            if (null === t) return null;
            if (t.startsWith("http")) return s(t);
            const n = `${r?(0,l.getCdnPrefix)(f):""}${t}`;
            return s(n)
          }), [f, c]);
          return {
            alt: r,
            ariaLabel: u,
            src: {
              mobile: m(c?.[d]?.mobile ?? c?.en_us?.mobile ?? t),
              desktop: m(c?.[d]?.desktop ?? c?.en_us?.desktop ?? a)
            }
          }
        },
        u = e => {
          const {
            meta: r = {}
          } = (0, o.I)(), [t, a] = (0, n.useState)(r?.cdn ?? r?.prod ?? !1);
          return (0, n.useEffect)((() => {
            a(r?.cdn ?? r?.prod ?? !1)
          }), [r]), null === e ? null : e.startsWith("http") ? s(e) : s(`${(0,l.getCdnPrefix)(t)}${e}`)
        },
        c = e => e.full_src,
        i = e => `${e?.previewSrc??e}`,
        d = e => e.meta.uploads_directory
    },
    670: (e, r, t) => {
      var n = t(822),
        l = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        a = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, r, t) {
        var n, u = {},
          c = null,
          i = null;
        for (n in void 0 !== t && (c = "" + t), void 0 !== r.key && (c = "" + r.key), void 0 !== r.ref && (i = r.ref), r) o.call(r, n) && !a.hasOwnProperty(n) && (u[n] = r[n]);
        if (e && e.defaultProps)
          for (n in r = e.defaultProps) void 0 === u[n] && (u[n] = r[n]);
        return {
          $$typeof: l,
          type: e,
          key: c,
          ref: i,
          props: u,
          _owner: s.current
        }
      }
      r.jsx = u, r.jsxs = u
    },
    668: (e, r, t) => {
      e.exports = t(670)
    }
  }
]);