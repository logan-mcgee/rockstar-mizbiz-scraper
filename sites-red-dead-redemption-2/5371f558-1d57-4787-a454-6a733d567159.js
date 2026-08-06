try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5371f558-1d57-4787-a454-6a733d567159", e._sentryDebugIdIdentifier = "sentry-dbid-5371f558-1d57-4787-a454-6a733d567159")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [964], {
    14069(e, t, n) {
      n.d(t, {
        w: () => o
      }), Math.pow(10, 8);
      const a = Symbol.for("constructDateFrom");

      function o(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && a in e ? e[a](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    7354(e, t, n) {
      n.d(t, {
        V: () => s
      });
      var a = n(14069);

      function o(e, ...t) {
        const n = a.w.bind(null, e || t.find(e => "object" == typeof e));
        return t.map(n)
      }
      var d = n(65796);

      function r(e, t) {
        const n = +(0, d.a)(e) - +(0, d.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function s(e, t, n) {
        const [a, d] = o(n?.in, e, t), s = r(a, d), i = Math.abs(function(e, t, n) {
          const [a, d] = o(n?.in, e, t);
          return a.getFullYear() - d.getFullYear()
        }(a, d));
        a.setFullYear(1584), d.setFullYear(1584);
        const u = s * (i - +(r(a, d) === -s));
        return 0 === u ? 0 : u
      }
    },
    98735(e, t, n) {
      n.d(t, {
        d: () => o
      });
      var a = n(65796);

      function o(e, t) {
        return +(0, a.a)(e) > +(0, a.a)(t)
      }
    },
    46573(e, t, n) {
      n.d(t, {
        f: () => o
      });
      var a = n(65796);

      function o(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, a.a)(e)));
        var t
      }
    },
    19177(e, t, n) {
      n.d(t, {
        j: () => s
      });
      var a = n(14069),
        o = n(65796);

      function d(e, t, n) {
        return function(e, t, n) {
          const d = (0, o.a)(e, n?.in);
          return isNaN(t) ? (0, a.w)(n?.in || e, NaN) : t ? (d.setDate(d.getDate() + t), d) : d
        }(e, -t, n)
      }

      function r(e, t, n) {
        return function(e, t, n) {
          const d = (0, o.a)(e, n?.in);
          if (isNaN(t)) return (0, a.w)(n?.in || e, NaN);
          if (!t) return d;
          const r = d.getDate(),
            s = (0, a.w)(n?.in || e, d.getTime());
          return s.setMonth(d.getMonth() + t + 1, 0), r >= s.getDate() ? s : (d.setFullYear(s.getFullYear(), s.getMonth(), r), d)
        }(e, -t, n)
      }

      function s(e, t, n) {
        const {
          years: o = 0,
          months: s = 0,
          weeks: i = 0,
          days: u = 0,
          hours: f = 0,
          minutes: l = 0,
          seconds: c = 0
        } = t, b = d(r(e, s + 12 * o, n), u + 7 * i, n), g = 1e3 * (c + 60 * (l + 60 * f));
        return (0, a.w)(n?.in || e, +b - g)
      }
    },
    65796(e, t, n) {
      n.d(t, {
        a: () => o
      });
      var a = n(14069);

      function o(e, t) {
        return (0, a.w)(t || e, e)
      }
    }
  }
]);