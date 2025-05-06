! function() {
  try {
    var A = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (A._sentryDebugIds = A._sentryDebugIds || {}, A._sentryDebugIds[e] = "34c4fc41-bbf4-431c-8a26-4e71dc240bfa", A._sentryDebugIdIdentifier = "sentry-dbid-34c4fc41-bbf4-431c-8a26-4e71dc240bfa")
  } catch (A) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [8571], {
    42868: (A, e, t) => {
      t.d(e, {
        A: () => s
      });
      const n = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let r;
      const o = new Uint8Array(16);

      function a() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(o)
      }
      const d = [];
      for (let A = 0; A < 256; ++A) d.push((A + 256).toString(16).slice(1));
      const s = function(A, e, t) {
        if (n.randomUUID && !e && !A) return n.randomUUID();
        const r = (A = A || {}).random || (A.rng || a)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, e) {
          t = t || 0;
          for (let A = 0; A < 16; ++A) e[t + A] = r[A];
          return e
        }
        return function(A) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return d[A[e + 0]] + d[A[e + 1]] + d[A[e + 2]] + d[A[e + 3]] + "-" + d[A[e + 4]] + d[A[e + 5]] + "-" + d[A[e + 6]] + d[A[e + 7]] + "-" + d[A[e + 8]] + d[A[e + 9]] + "-" + d[A[e + 10]] + d[A[e + 11]] + d[A[e + 12]] + d[A[e + 13]] + d[A[e + 14]] + d[A[e + 15]]
        }(r)
      }
    },
    29525: (A, e, t) => {
      t.d(e, {
        A: () => a
      });
      var n = t(62229),
        r = t(21308),
        o = t(73855);
      const a = A => {
        let {
          children: e,
          ...t
        } = A;
        const [a, d] = (0, n.useState)(!1);
        return (0, o.jsx)(r.zb, {
          ...t,
          onReady: () => {
            document.fonts.ready.then((() => {
              d(!0)
            }))
          },
          children: e
        })
      }
    },
    29960: (A, e, t) => {
      t.d(e, {
        i: () => l,
        o: () => s
      });
      var n = t(62229),
        r = t(95966),
        o = t(73855);
      const a = (0, r.setContextItem)({
          context: (0, n.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: d
        } = a,
        s = A => {
          let {
            children: e,
            payload: t
          } = A;
          return (0, o.jsx)(d, {
            value: t,
            children: e
          })
        },
        l = () => (0, n.useContext)(a)
    },
    19544: (A, e, t) => {
      t.d(e, {
        C1: () => s,
        S1: () => d,
        XC: () => u,
        jS: () => l,
        qg: () => c,
        z0: () => g
      });
      var n = t(62229),
        r = t(95966),
        o = t(29960);
      const a = A => {
          if (!A) return null;
          const {
            hostname: e,
            pathname: t
          } = new URL(A, (0, r.getCdnPrefix)(!0));
          return "/" === t ? null : (e.endsWith(".akamaized.net"), A)
        },
        d = A => {
          let {
            alt: e = null,
            mobile: t = null,
            desktop: d = null,
            ariaLabel: s = null,
            sources: l = null,
            prod: c = null
          } = A;
          const g = (0, r.useLocale)(),
            {
              meta: u = {}
            } = (0, o.i)() ?? {},
            [i, f] = (0, n.useState)(c ?? u?.cdn ?? u?.prod ?? !0);
          (0, n.useEffect)((() => {
            f(c ?? u?.cdn ?? u?.prod ?? !0)
          }), [c, u]);
          const B = (0, n.useCallback)((A => {
            const e = null !== l,
              t = A?.previewSrc ?? A ?? null;
            if (null === t || "string" != typeof t) return null;
            if (t.startsWith("http")) return a(t);
            const n = `${e?(0,r.getCdnPrefix)(i):""}${t}`;
            return a(n)
          }), [i, l]);
          return {
            alt: e,
            ariaLabel: s,
            src: {
              mobile: B(l?.[g]?.mobile ?? l?.en_us?.mobile ?? t),
              desktop: B(l?.[g]?.desktop ?? l?.en_us?.desktop ?? d)
            }
          }
        },
        s = A => {
          const e = (0, o.i)() ?? {},
            {
              meta: t = {}
            } = e,
            [d, s] = (0, n.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, n.useEffect)((() => {
            s(t?.cdn ?? t?.prod ?? !1)
          }), [t]), A ? A?.startsWith("http") ? a(A) : a(`${(0,r.getCdnPrefix)(d)}${A}`) : null
        },
        l = () => {
          const A = (0, o.i)() ?? {},
            {
              meta: e = {}
            } = A,
            t = (0, n.useMemo)((() => e?.cdn ?? e?.prod ?? !1), [e]);
          return (0, n.useCallback)((function(A) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = e?.prod ?? t;
            return A ? A?.startsWith("http") ? a(A) : a(`${(0,r.getCdnPrefix)(n)}${A}`) : null
          }), [t])
        },
        c = A => A.full_src,
        g = A => {
          const e = A?.previewSrc ?? A?.preview_src ?? A;
          return e?.startsWith("http") ? e : `${(0,r.getCdnPrefix)(!1)}${e}`
        },
        u = A => A.meta.uploads_directory
    },
    56085: A => {
      A.exports = "data:application/font-woff;charset=utf-8;base64, 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"
    }
  }
]);