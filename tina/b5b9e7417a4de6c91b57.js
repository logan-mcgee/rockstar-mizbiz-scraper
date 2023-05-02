/*! For license information please see b5b9e7417a4de6c91b57.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [69], {
    201: (e, r, t) => {
      t.d(r, {
        I: () => u,
        d: () => a
      });
      var n = t(822),
        l = t(322);
      const s = (0, n.createContext)(),
        {
          Provider: o
        } = s,
        a = e => {
          let {
            children: r,
            payload: t
          } = e;
          return (0, l.jsx)(o, {
            value: t,
            children: r
          })
        },
        u = () => (0, n.useContext)(s)
    },
    69: (e, r, t) => {
      t.r(r), t.d(r, {
        parse: () => c,
        previewSrc: () => d,
        uploadDir: () => i,
        useGetCdnSource: () => u,
        useImageParser: () => a
      });
      var n = t(822),
        l = t(929),
        s = t(201);
      const o = e => {
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
            prod: d = null
          } = e;
          const i = (0, l.useLocale)(),
            {
              meta: p = {}
            } = (0, s.I)() ?? {},
            [f, _] = (0, n.useState)(d ?? p?.cdn ?? p?.prod ?? !0);
          (0, n.useEffect)((() => {
            _(d ?? p?.cdn ?? p?.prod ?? !0)
          }), [d, p]);
          const m = (0, n.useCallback)((e => {
            const r = null !== c,
              t = e?.previewSrc ?? e ?? null;
            if (null === t) return null;
            if (t.startsWith("http")) return o(t);
            const n = `${r?(0,l.getCdnPrefix)(f):""}${t}`;
            return o(n)
          }), [f, c]);
          return {
            alt: r,
            ariaLabel: u,
            src: {
              mobile: m(c?.[i]?.mobile ?? c?.en_us?.mobile ?? t),
              desktop: m(c?.[i]?.desktop ?? c?.en_us?.desktop ?? a)
            }
          }
        },
        u = e => {
          const {
            meta: r = {}
          } = (0, s.I)() ?? {}, [t, a] = (0, n.useState)(r?.cdn ?? r?.prod ?? !1);
          return (0, n.useEffect)((() => {
            a(r?.cdn ?? r?.prod ?? !1)
          }), [r]), null === e ? null : e.startsWith("http") ? o(e) : o(`${(0,l.getCdnPrefix)(t)}${e}`)
        },
        c = e => e.full_src,
        d = e => `${(0,l.getCdnPrefix)(!1)}${e?.previewSrc??e}`,
        i = e => e.meta.uploads_directory
    },
    652: (e, r, t) => {
      var n = t(822),
        l = Symbol.for("react.element"),
        s = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        a = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, r, t) {
        var n, u = {},
          c = null,
          d = null;
        for (n in void 0 !== t && (c = "" + t), void 0 !== r.key && (c = "" + r.key), void 0 !== r.ref && (d = r.ref), r) s.call(r, n) && !a.hasOwnProperty(n) && (u[n] = r[n]);
        if (e && e.defaultProps)
          for (n in r = e.defaultProps) void 0 === u[n] && (u[n] = r[n]);
        return {
          $$typeof: l,
          type: e,
          key: c,
          ref: d,
          props: u,
          _owner: o.current
        }
      }
      r.jsx = u, r.jsxs = u
    },
    322: (e, r, t) => {
      e.exports = t(652)
    }
  }
]);