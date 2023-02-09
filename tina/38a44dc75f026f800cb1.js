/*! For license information please see 38a44dc75f026f800cb1.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [236], {
    501: (e, l, n) => {
      n.d(l, {
        I: () => i,
        d: () => s
      });
      var r = n(822),
        t = n(563);
      const o = (0, r.createContext)(),
        {
          Provider: u
        } = o,
        s = e => {
          let {
            children: l,
            payload: n
          } = e;
          return (0, t.jsx)(u, {
            value: n,
            children: l
          })
        },
        i = () => (0, r.useContext)(o)
    },
    236: (e, l, n) => {
      n.r(l), n.d(l, {
        parse: () => a,
        previewSrc: () => d,
        uploadDir: () => c,
        useGetCdnSource: () => i,
        useImageParser: () => s
      });
      var r = n(822),
        t = n(929),
        o = n(501);
      Math.min(window.screen.width, 1920);
      const u = e => {
          if (!e) return null;
          const {
            hostname: l,
            pathname: n
          } = new URL(e, (0, t.getCdnPrefix)(!0));
          return "/" === n ? null : (l.endsWith("akamaized.net"), e)
        },
        s = e => {
          var l, n, s, i;
          let {
            alt: a = null,
            mobile: d = null,
            desktop: c = null,
            ariaLabel: p = null,
            sources: v = null,
            prod: f = null
          } = e;
          const _ = (0, t.useLocale)(),
            {
              meta: m = {}
            } = (0, o.I)() ?? {},
            [h, k] = (0, r.useState)(f ?? (null == m ? void 0 : m.cdn) ?? (null == m ? void 0 : m.prod) ?? !0);
          (0, r.useEffect)((() => {
            k(f ?? (null == m ? void 0 : m.cdn) ?? (null == m ? void 0 : m.prod) ?? !0)
          }), [f, m]);
          const y = (0, r.useCallback)((e => {
            const l = null !== v,
              n = "string" == typeof e ? e : "object" == typeof e ? (null == e ? void 0 : e.previewSrc) ?? null : null;
            if (null === n) return null;
            if (n.startsWith("http")) return u(n);
            const r = `${l?(0,t.getCdnPrefix)(h):""}${n}`;
            return u(r)
          }), [h, v]);
          return {
            alt: a,
            ariaLabel: p,
            src: {
              mobile: y((null == v || null === (l = v[_]) || void 0 === l ? void 0 : l.mobile) ?? (null == v || null === (n = v.en_us) || void 0 === n ? void 0 : n.mobile) ?? d),
              desktop: y((null == v || null === (s = v[_]) || void 0 === s ? void 0 : s.desktop) ?? (null == v || null === (i = v.en_us) || void 0 === i ? void 0 : i.desktop) ?? c)
            }
          }
        },
        i = e => {
          const {
            meta: l = {}
          } = (0, o.I)(), [n, s] = (0, r.useState)((null == l ? void 0 : l.cdn) ?? (null == l ? void 0 : l.prod) ?? !1);
          return (0, r.useEffect)((() => {
            s((null == l ? void 0 : l.cdn) ?? (null == l ? void 0 : l.prod) ?? !1)
          }), [l]), null === e ? null : e.startsWith("http") ? u(e) : u(`${(0,t.getCdnPrefix)(n)}${e}`)
        },
        a = e => e.full_src,
        d = e => `${(null==e?void 0:e.previewSrc)??e}`,
        c = e => e.meta.uploads_directory
    },
    98: (e, l, n) => {
      var r = n(822),
        t = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, l, n) {
        var r, i = {},
          a = null,
          d = null;
        for (r in void 0 !== n && (a = "" + n), void 0 !== l.key && (a = "" + l.key), void 0 !== l.ref && (d = l.ref), l) o.call(l, r) && !s.hasOwnProperty(r) && (i[r] = l[r]);
        if (e && e.defaultProps)
          for (r in l = e.defaultProps) void 0 === i[r] && (i[r] = l[r]);
        return {
          $$typeof: t,
          type: e,
          key: a,
          ref: d,
          props: i,
          _owner: u.current
        }
      }
      l.jsx = i, l.jsxs = i
    },
    563: (e, l, n) => {
      e.exports = n(98)
    }
  }
]);