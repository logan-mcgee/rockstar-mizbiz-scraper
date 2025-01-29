! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8a2f2ce9-08d6-4838-a428-bebbbdb8ebfc", e._sentryDebugIdIdentifier = "sentry-dbid-8a2f2ce9-08d6-4838-a428-bebbbdb8ebfc")
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
  [728], {
    38477: (e, t, n) => {
      n.d(t, {
        w: () => o
      }), Math.pow(10, 8);
      const a = Symbol.for("constructDateFrom");

      function o(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && a in e ? e[a](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    55163: (e, t, n) => {
      n.d(t, {
        V: () => s
      });
      var a = n(38477);

      function o(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
        const r = a.w.bind(null, e || n.find((e => "object" == typeof e)));
        return n.map(r)
      }
      var r = n(81447);

      function d(e, t) {
        const n = +(0, r.a)(e) - +(0, r.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function s(e, t, n) {
        const [a, r] = o(n?.in, e, t), s = d(a, r), f = Math.abs(function(e, t, n) {
          const [a, r] = o(n?.in, e, t);
          return a.getFullYear() - r.getFullYear()
        }(a, r));
        a.setFullYear(1584), r.setFullYear(1584);
        const i = s * (f - +(d(a, r) === -s));
        return 0 === i ? 0 : i
      }
    },
    8290: (e, t, n) => {
      n.d(t, {
        d: () => o
      });
      var a = n(81447);

      function o(e, t) {
        return +(0, a.a)(e) > +(0, a.a)(t)
      }
    },
    19373: (e, t, n) => {
      n.d(t, {
        f: () => o
      });
      var a = n(81447);

      function o(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, a.a)(e)));
        var t
      }
    },
    33129: (e, t, n) => {
      n.d(t, {
        j: () => s
      });
      var a = n(38477),
        o = n(81447);

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
            s = (0, a.w)(n?.in || e, r.getTime());
          return s.setMonth(r.getMonth() + t + 1, 0), d >= s.getDate() ? s : (r.setFullYear(s.getFullYear(), s.getMonth(), d), r)
        }(e, -t, n)
      }

      function s(e, t, n) {
        const {
          years: o = 0,
          months: s = 0,
          weeks: f = 0,
          days: i = 0,
          hours: u = 0,
          minutes: c = 0,
          seconds: l = 0
        } = t, b = r(d(e, s + 12 * o, n), i + 7 * f, n), g = 1e3 * (l + 60 * (c + 60 * u));
        return (0, a.w)(n?.in || e, +b - g)
      }
    },
    81447: (e, t, n) => {
      n.d(t, {
        a: () => o
      });
      var a = n(38477);

      function o(e, t) {
        return (0, a.w)(t || e, e)
      }
    }
  }
]);