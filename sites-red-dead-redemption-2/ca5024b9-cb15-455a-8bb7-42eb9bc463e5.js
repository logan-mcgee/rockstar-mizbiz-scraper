try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ca5024b9-cb15-455a-8bb7-42eb9bc463e5", e._sentryDebugIdIdentifier = "sentry-dbid-ca5024b9-cb15-455a-8bb7-42eb9bc463e5")
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
  [2508], {
    11915: (e, t, n) => {
      n.d(t, {
        d: () => a
      });
      var o = n(66712);

      function a(e, t) {
        return +(0, o.a)(e) > +(0, o.a)(t)
      }
    },
    44550: (e, t, n) => {
      n.d(t, {
        V: () => d
      });
      var o = n(57449);

      function a(e, ...t) {
        const n = o.w.bind(null, e || t.find(e => "object" == typeof e));
        return t.map(n)
      }
      var r = n(66712);

      function s(e, t) {
        const n = +(0, r.a)(e) - +(0, r.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function d(e, t, n) {
        const [o, r] = a(n?.in, e, t), d = s(o, r), i = Math.abs(function(e, t, n) {
          const [o, r] = a(n?.in, e, t);
          return o.getFullYear() - r.getFullYear()
        }(o, r));
        o.setFullYear(1584), r.setFullYear(1584);
        const f = d * (i - +(s(o, r) === -d));
        return 0 === f ? 0 : f
      }
    },
    57449: (e, t, n) => {
      n.d(t, {
        w: () => a
      }), Math.pow(10, 8);
      const o = Symbol.for("constructDateFrom");

      function a(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && o in e ? e[o](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    66712: (e, t, n) => {
      n.d(t, {
        a: () => a
      });
      var o = n(57449);

      function a(e, t) {
        return (0, o.w)(t || e, e)
      }
    },
    75413: (e, t, n) => {
      n.d(t, {
        j: () => d
      });
      var o = n(57449),
        a = n(66712);

      function r(e, t, n) {
        return function(e, t, n) {
          const r = (0, a.a)(e, n?.in);
          return isNaN(t) ? (0, o.w)(n?.in || e, NaN) : t ? (r.setDate(r.getDate() + t), r) : r
        }(e, -t, n)
      }

      function s(e, t, n) {
        return function(e, t, n) {
          const r = (0, a.a)(e, n?.in);
          if (isNaN(t)) return (0, o.w)(n?.in || e, NaN);
          if (!t) return r;
          const s = r.getDate(),
            d = (0, o.w)(n?.in || e, r.getTime());
          return d.setMonth(r.getMonth() + t + 1, 0), s >= d.getDate() ? d : (r.setFullYear(d.getFullYear(), d.getMonth(), s), r)
        }(e, -t, n)
      }

      function d(e, t, n) {
        const {
          years: a = 0,
          months: d = 0,
          weeks: i = 0,
          days: f = 0,
          hours: c = 0,
          minutes: u = 0,
          seconds: l = 0
        } = t, b = r(s(e, d + 12 * a, n), f + 7 * i, n), g = 1e3 * (l + 60 * (u + 60 * c));
        return (0, o.w)(n?.in || e, +b - g)
      }
    },
    92649: (e, t, n) => {
      n.d(t, {
        f: () => a
      });
      var o = n(66712);

      function a(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, o.a)(e)));
        var t
      }
    }
  }
]);