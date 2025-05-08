! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "aa9ba930-5f05-41db-a2b6-00102b81c5ad", e._sentryDebugIdIdentifier = "sentry-dbid-aa9ba930-5f05-41db-a2b6-00102b81c5ad")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [1247], {
    93344: (e, t, n) => {
      n.d(t, {
        x: () => o
      });
      var a = n(45164);

      function o(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
        const r = a.w.bind(null, e || n.find((e => "object" == typeof e)));
        return n.map(r)
      }
    },
    59304: (e, t, n) => {
      n.d(t, {
        _P: () => o,
        s0: () => a
      }), Math.pow(10, 8);
      const a = 36e5,
        o = Symbol.for("constructDateFrom")
    },
    45164: (e, t, n) => {
      n.d(t, {
        w: () => o
      });
      var a = n(59304);

      function o(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && a._P in e ? e[a._P](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    55781: (e, t, n) => {
      n.d(t, {
        V: () => d
      });
      var a = n(93344),
        o = n(66992);

      function r(e, t) {
        const n = +(0, o.a)(e) - +(0, o.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function d(e, t, n) {
        const [o, d] = (0, a.x)(n?.in, e, t), s = r(o, d), c = Math.abs(function(e, t, n) {
          const [o, r] = (0, a.x)(n?.in, e, t);
          return o.getFullYear() - r.getFullYear()
        }(o, d));
        o.setFullYear(1584), d.setFullYear(1584);
        const u = s * (c - +(r(o, d) === -s));
        return 0 === u ? 0 : u
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
        j: () => s
      });
      var a = n(45164),
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
            s = (0, a.w)(n?.in || e, r.getTime());
          return s.setMonth(r.getMonth() + t + 1, 0), d >= s.getDate() ? s : (r.setFullYear(s.getFullYear(), s.getMonth(), d), r)
        }(e, -t, n)
      }

      function s(e, t, n) {
        const {
          years: o = 0,
          months: s = 0,
          weeks: c = 0,
          days: u = 0,
          hours: f = 0,
          minutes: i = 0,
          seconds: l = 0
        } = t, b = r(d(e, s + 12 * o, n), u + 7 * c, n), g = 1e3 * (l + 60 * (i + 60 * f));
        return (0, a.w)(n?.in || e, +b - g)
      }
    },
    66992: (e, t, n) => {
      n.d(t, {
        a: () => o
      });
      var a = n(45164);

      function o(e, t) {
        return (0, a.w)(t || e, e)
      }
    }
  }
]);