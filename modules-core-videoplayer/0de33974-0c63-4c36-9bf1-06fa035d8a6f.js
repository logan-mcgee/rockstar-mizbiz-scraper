! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0de33974-0c63-4c36-9bf1-06fa035d8a6f", e._sentryDebugIdIdentifier = "sentry-dbid-0de33974-0c63-4c36-9bf1-06fa035d8a6f")
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
  [6695], {
    28790: (e, t, n) => {
      n.d(t, {
        x: () => a
      });
      var o = n(77270);

      function a(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
        const r = o.w.bind(null, e || n.find((e => "object" == typeof e)));
        return n.map(r)
      }
    },
    54126: (e, t, n) => {
      n.d(t, {
        _P: () => a,
        s0: () => o
      }), Math.pow(10, 8);
      const o = 36e5,
        a = Symbol.for("constructDateFrom")
    },
    77270: (e, t, n) => {
      n.d(t, {
        w: () => a
      });
      var o = n(54126);

      function a(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && o._P in e ? e[o._P](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    56135: (e, t, n) => {
      n.d(t, {
        V: () => d
      });
      var o = n(28790),
        a = n(62518);

      function r(e, t) {
        const n = +(0, a.a)(e) - +(0, a.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function d(e, t, n) {
        const [a, d] = (0, o.x)(n?.in, e, t), s = r(a, d), f = Math.abs(function(e, t, n) {
          const [a, r] = (0, o.x)(n?.in, e, t);
          return a.getFullYear() - r.getFullYear()
        }(a, d));
        a.setFullYear(1584), d.setFullYear(1584);
        const u = s * (f - +(r(a, d) === -s));
        return 0 === u ? 0 : u
      }
    },
    94061: (e, t, n) => {
      n.d(t, {
        d: () => a
      });
      var o = n(62518);

      function a(e, t) {
        return +(0, o.a)(e) > +(0, o.a)(t)
      }
    },
    65685: (e, t, n) => {
      n.d(t, {
        f: () => a
      });
      var o = n(62518);

      function a(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, o.a)(e)));
        var t
      }
    },
    7313: (e, t, n) => {
      n.d(t, {
        j: () => s
      });
      var o = n(77270),
        a = n(62518);

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
          weeks: f = 0,
          days: u = 0,
          hours: i = 0,
          minutes: l = 0,
          seconds: c = 0
        } = t, b = r(d(e, s + 12 * a, n), u + 7 * f, n), g = 1e3 * (c + 60 * (l + 60 * i));
        return (0, o.w)(n?.in || e, +b - g)
      }
    },
    62518: (e, t, n) => {
      n.d(t, {
        a: () => a
      });
      var o = n(77270);

      function a(e, t) {
        return (0, o.w)(t || e, e)
      }
    }
  }
]);