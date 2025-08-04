try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9c17cc8f-ec9a-451d-8bef-4ed6b5a928b6", e._sentryDebugIdIdentifier = "sentry-dbid-9c17cc8f-ec9a-451d-8bef-4ed6b5a928b6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [280], {
    16534: (e, t, n) => {
      n.d(t, {
        d: () => o
      });
      var a = n(33987);

      function o(e, t) {
        return +(0, a.a)(e) > +(0, a.a)(t)
      }
    },
    19090: (e, t, n) => {
      n.d(t, {
        w: () => o
      }), Math.pow(10, 8);
      const a = Symbol.for("constructDateFrom");

      function o(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && a in e ? e[a](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    27554: (e, t, n) => {
      n.d(t, {
        j: () => s
      });
      var a = n(19090),
        o = n(33987);

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
          days: f = 0,
          hours: c = 0,
          minutes: u = 0,
          seconds: l = 0
        } = t, b = d(r(e, s + 12 * o, n), f + 7 * i, n), g = 1e3 * (l + 60 * (u + 60 * c));
        return (0, a.w)(n?.in || e, +b - g)
      }
    },
    33085: (e, t, n) => {
      n.d(t, {
        f: () => o
      });
      var a = n(33987);

      function o(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, a.a)(e)));
        var t
      }
    },
    33987: (e, t, n) => {
      n.d(t, {
        a: () => o
      });
      var a = n(19090);

      function o(e, t) {
        return (0, a.w)(t || e, e)
      }
    },
    85914: (e, t, n) => {
      n.d(t, {
        V: () => s
      });
      var a = n(19090);

      function o(e, ...t) {
        const n = a.w.bind(null, e || t.find((e => "object" == typeof e)));
        return t.map(n)
      }
      var d = n(33987);

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
        const f = s * (i - +(r(a, d) === -s));
        return 0 === f ? 0 : f
      }
    }
  }
]);