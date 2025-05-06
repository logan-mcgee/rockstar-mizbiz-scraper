! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c89a4943-f8ba-4bbd-b5cc-b73e2cf16fd9", e._sentryDebugIdIdentifier = "sentry-dbid-c89a4943-f8ba-4bbd-b5cc-b73e2cf16fd9")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [1360], {
    92927: (e, t, n) => {
      n.d(t, {
        w: () => o
      }), Math.pow(10, 8);
      const a = Symbol.for("constructDateFrom");

      function o(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && a in e ? e[a](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    29114: (e, t, n) => {
      n.d(t, {
        V: () => f
      });
      var a = n(92927);

      function o(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
        const r = a.w.bind(null, e || n.find((e => "object" == typeof e)));
        return n.map(r)
      }
      var r = n(66992);

      function d(e, t) {
        const n = +(0, r.a)(e) - +(0, r.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function f(e, t, n) {
        const [a, r] = o(n?.in, e, t), f = d(a, r), s = Math.abs(function(e, t, n) {
          const [a, r] = o(n?.in, e, t);
          return a.getFullYear() - r.getFullYear()
        }(a, r));
        a.setFullYear(1584), r.setFullYear(1584);
        const c = f * (s - +(d(a, r) === -f));
        return 0 === c ? 0 : c
      }
    },
    13267: (e, t, n) => {
      n.d(t, {
        d: () => o
      });
      var a = n(66992);

      function o(e, t) {
        return +(0, a.a)(e) > +(0, a.a)(t)
      }
    },
    88324: (e, t, n) => {
      n.d(t, {
        f: () => o
      });
      var a = n(66992);

      function o(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, a.a)(e)));
        var t
      }
    },
    87758: (e, t, n) => {
      n.d(t, {
        j: () => f
      });
      var a = n(92927),
        o = n(66992);

      function r(e, t, n) {
        return function(e, t, n) {
          const r = (0, o.a)(e, n?.in);
          return isNaN(t) ? (0, a.w)(n?.in || e, NaN) : t ? (r.setDate(r.getDate() + t), r) : r
        }(e, -t, n)
      }

      function d(e, t, n) {
        return function(e, t, n) {
          const r = (0, o.a)(e, n?.in);
          if (isNaN(t)) return (0, a.w)(n?.in || e, NaN);
          if (!t) return r;
          const d = r.getDate(),
            f = (0, a.w)(n?.in || e, r.getTime());
          return f.setMonth(r.getMonth() + t + 1, 0), d >= f.getDate() ? f : (r.setFullYear(f.getFullYear(), f.getMonth(), d), r)
        }(e, -t, n)
      }

      function f(e, t, n) {
        const {
          years: o = 0,
          months: f = 0,
          weeks: s = 0,
          days: c = 0,
          hours: i = 0,
          minutes: u = 0,
          seconds: l = 0
        } = t, b = r(d(e, f + 12 * o, n), c + 7 * s, n), g = 1e3 * (l + 60 * (u + 60 * i));
        return (0, a.w)(n?.in || e, +b - g)
      }
    },
    66992: (e, t, n) => {
      n.d(t, {
        a: () => o
      });
      var a = n(92927);

      function o(e, t) {
        return (0, a.w)(t || e, e)
      }
    }
  }
]);