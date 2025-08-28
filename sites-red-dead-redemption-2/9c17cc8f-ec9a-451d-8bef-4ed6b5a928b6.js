try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9c17cc8f-ec9a-451d-8bef-4ed6b5a928b6", e._sentryDebugIdIdentifier = "sentry-dbid-9c17cc8f-ec9a-451d-8bef-4ed6b5a928b6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "61ad12580c14ee5147480faf673e214137f57fe1",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "61ad12580c14ee5147480faf673e214137f57fe1"
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
        j: () => d
      });
      var a = n(19090),
        o = n(33987);

      function r(e, t, n) {
        return function(e, t, n) {
          const r = (0, o.a)(e, n?.in);
          return isNaN(t) ? (0, a.w)(n?.in || e, NaN) : t ? (r.setDate(r.getDate() + t), r) : r
        }(e, -t, n)
      }

      function s(e, t, n) {
        return function(e, t, n) {
          const r = (0, o.a)(e, n?.in);
          if (isNaN(t)) return (0, a.w)(n?.in || e, NaN);
          if (!t) return r;
          const s = r.getDate(),
            d = (0, a.w)(n?.in || e, r.getTime());
          return d.setMonth(r.getMonth() + t + 1, 0), s >= d.getDate() ? d : (r.setFullYear(d.getFullYear(), d.getMonth(), s), r)
        }(e, -t, n)
      }

      function d(e, t, n) {
        const {
          years: o = 0,
          months: d = 0,
          weeks: f = 0,
          days: i = 0,
          hours: u = 0,
          minutes: c = 0,
          seconds: l = 0
        } = t, b = r(s(e, d + 12 * o, n), i + 7 * f, n), g = 1e3 * (l + 60 * (c + 60 * u));
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
        V: () => d
      });
      var a = n(19090);

      function o(e, ...t) {
        const n = a.w.bind(null, e || t.find((e => "object" == typeof e)));
        return t.map(n)
      }
      var r = n(33987);

      function s(e, t) {
        const n = +(0, r.a)(e) - +(0, r.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function d(e, t, n) {
        const [a, r] = o(n?.in, e, t), d = s(a, r), f = Math.abs(function(e, t, n) {
          const [a, r] = o(n?.in, e, t);
          return a.getFullYear() - r.getFullYear()
        }(a, r));
        a.setFullYear(1584), r.setFullYear(1584);
        const i = d * (f - +(s(a, r) === -d));
        return 0 === i ? 0 : i
      }
    }
  }
]);