try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "93d8e8d7-1c46-4694-96be-f3d62d4fb818", e._sentryDebugIdIdentifier = "sentry-dbid-93d8e8d7-1c46-4694-96be-f3d62d4fb818")
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
    57449(e, t, n) {
      n.d(t, {
        w: () => a
      }), Math.pow(10, 8);
      const o = Symbol.for("constructDateFrom");

      function a(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && o in e ? e[o](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    44550(e, t, n) {
      n.d(t, {
        V: () => s
      });
      var o = n(57449);

      function a(e, ...t) {
        const n = o.w.bind(null, e || t.find(e => "object" == typeof e));
        return t.map(n)
      }
      var r = n(66712);

      function d(e, t) {
        const n = +(0, r.a)(e) - +(0, r.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function s(e, t, n) {
        const [o, r] = a(n?.in, e, t), s = d(o, r), i = Math.abs(function(e, t, n) {
          const [o, r] = a(n?.in, e, t);
          return o.getFullYear() - r.getFullYear()
        }(o, r));
        o.setFullYear(1584), r.setFullYear(1584);
        const f = s * (i - +(d(o, r) === -s));
        return 0 === f ? 0 : f
      }
    },
    11915(e, t, n) {
      n.d(t, {
        d: () => a
      });
      var o = n(66712);

      function a(e, t) {
        return +(0, o.a)(e) > +(0, o.a)(t)
      }
    },
    92649(e, t, n) {
      n.d(t, {
        f: () => a
      });
      var o = n(66712);

      function a(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, o.a)(e)));
        var t
      }
    },
    75413(e, t, n) {
      n.d(t, {
        j: () => s
      });
      var o = n(57449),
        a = n(66712);

      function r(e, t, n) {
        return function(e, t, n) {
          const r = (0, a.a)(e, n?.in);
          return isNaN(t) ? (0, o.w)(n?.in || e, NaN) : t ? (r.setDate(r.getDate() + t), r) : r
        }(e, -t, n)
      }

      function d(e, t, n) {
        return function(e, t, n) {
          const r = (0, a.a)(e, n?.in);
          if (isNaN(t)) return (0, o.w)(n?.in || e, NaN);
          if (!t) return r;
          const d = r.getDate(),
            s = (0, o.w)(n?.in || e, r.getTime());
          return s.setMonth(r.getMonth() + t + 1, 0), d >= s.getDate() ? s : (r.setFullYear(s.getFullYear(), s.getMonth(), d), r)
        }(e, -t, n)
      }

      function s(e, t, n) {
        const {
          years: a = 0,
          months: s = 0,
          weeks: i = 0,
          days: f = 0,
          hours: u = 0,
          minutes: c = 0,
          seconds: l = 0
        } = t, b = r(d(e, s + 12 * a, n), f + 7 * i, n), g = 1e3 * (l + 60 * (c + 60 * u));
        return (0, o.w)(n?.in || e, +b - g)
      }
    },
    66712(e, t, n) {
      n.d(t, {
        a: () => a
      });
      var o = n(57449);

      function a(e, t) {
        return (0, o.w)(t || e, e)
      }
    }
  }
]);