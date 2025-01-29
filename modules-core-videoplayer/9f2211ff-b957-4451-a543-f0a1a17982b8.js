! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9f2211ff-b957-4451-a543-f0a1a17982b8", e._sentryDebugIdIdentifier = "sentry-dbid-9f2211ff-b957-4451-a543-f0a1a17982b8")
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
  [728], {
    8477: (e, t, n) => {
      n.d(t, {
        w: () => a
      }), Math.pow(10, 8);
      const o = Symbol.for("constructDateFrom");

      function a(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && o in e ? e[o](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    5163: (e, t, n) => {
      n.d(t, {
        V: () => s
      });
      var o = n(8477);

      function a(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
        const r = o.w.bind(null, e || n.find((e => "object" == typeof e)));
        return n.map(r)
      }
      var r = n(1447);

      function f(e, t) {
        const n = +(0, r.a)(e) - +(0, r.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function s(e, t, n) {
        const [o, r] = a(n?.in, e, t), s = f(o, r), d = Math.abs(function(e, t, n) {
          const [o, r] = a(n?.in, e, t);
          return o.getFullYear() - r.getFullYear()
        }(o, r));
        o.setFullYear(1584), r.setFullYear(1584);
        const u = s * (d - +(f(o, r) === -s));
        return 0 === u ? 0 : u
      }
    },
    8290: (e, t, n) => {
      n.d(t, {
        d: () => a
      });
      var o = n(1447);

      function a(e, t) {
        return +(0, o.a)(e) > +(0, o.a)(t)
      }
    },
    9373: (e, t, n) => {
      n.d(t, {
        f: () => a
      });
      var o = n(1447);

      function a(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, o.a)(e)));
        var t
      }
    },
    3129: (e, t, n) => {
      n.d(t, {
        j: () => s
      });
      var o = n(8477),
        a = n(1447);

      function r(e, t, n) {
        return function(e, t, n) {
          const r = (0, a.a)(e, n?.in);
          return isNaN(t) ? (0, o.w)(n?.in || e, NaN) : t ? (r.setDate(r.getDate() + t), r) : r
        }(e, -t, n)
      }

      function f(e, t, n) {
        return function(e, t, n) {
          const r = (0, a.a)(e, n?.in);
          if (isNaN(t)) return (0, o.w)(n?.in || e, NaN);
          if (!t) return r;
          const f = r.getDate(),
            s = (0, o.w)(n?.in || e, r.getTime());
          return s.setMonth(r.getMonth() + t + 1, 0), f >= s.getDate() ? s : (r.setFullYear(s.getFullYear(), s.getMonth(), f), r)
        }(e, -t, n)
      }

      function s(e, t, n) {
        const {
          years: a = 0,
          months: s = 0,
          weeks: d = 0,
          days: u = 0,
          hours: i = 0,
          minutes: l = 0,
          seconds: c = 0
        } = t, b = r(f(e, s + 12 * a, n), u + 7 * d, n), g = 1e3 * (c + 60 * (l + 60 * i));
        return (0, o.w)(n?.in || e, +b - g)
      }
    },
    1447: (e, t, n) => {
      n.d(t, {
        a: () => a
      });
      var o = n(8477);

      function a(e, t) {
        return (0, o.w)(t || e, e)
      }
    }
  }
]);