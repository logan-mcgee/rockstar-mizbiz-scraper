try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "64ed4d4e-7070-48b0-9aad-ef62a0fe7eb3", e._sentryDebugIdIdentifier = "sentry-dbid-64ed4d4e-7070-48b0-9aad-ef62a0fe7eb3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [111], {
    380(e, t, n) {
      n.d(t, {
        x: () => o
      });
      var a = n(480);

      function o(e, ...t) {
        const n = a.w.bind(null, e || t.find(e => "object" == typeof e));
        return t.map(n)
      }
    },
    9172(e, t, n) {
      Math.pow(10, 8);
      const a = Symbol.for("constructDateFrom");
      n.d(t, ["_P", 0, a, "s0", 0, 36e5])
    },
    480(e, t, n) {
      n.d(t, {
        w: () => o
      });
      var a = n(9172);

      function o(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && a._P in e ? e[a._P](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    8005(e, t, n) {
      n.d(t, {
        V: () => s
      });
      var a = n(380),
        o = n(1034);

      function r(e, t) {
        const n = +(0, o.a)(e) - +(0, o.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function s(e, t, n) {
        const [o, s] = (0, a.x)(n?.in, e, t), d = r(o, s), f = Math.abs(function(e, t, n) {
          const [o, r] = (0, a.x)(n?.in, e, t);
          return o.getFullYear() - r.getFullYear()
        }(o, s));
        o.setFullYear(1584), s.setFullYear(1584);
        const i = d * (f - +(r(o, s) === -d));
        return 0 === i ? 0 : i
      }
    },
    8735(e, t, n) {
      n.d(t, {
        d: () => o
      });
      var a = n(1034);

      function o(e, t) {
        return +(0, a.a)(e) > +(0, a.a)(t)
      }
    },
    6573(e, t, n) {
      n.d(t, {
        f: () => o
      });
      var a = n(1034);

      function o(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, a.a)(e)));
        var t
      }
    },
    9177(e, t, n) {
      n.d(t, {
        j: () => d
      });
      var a = n(480),
        o = n(1034);

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
          minutes: l = 0,
          seconds: c = 0
        } = t, b = r(s(e, d + 12 * o, n), i + 7 * f, n), y = 1e3 * (c + 60 * (l + 60 * u));
        return (0, a.w)(n?.in || e, +b - y)
      }
    },
    1034(e, t, n) {
      n.d(t, {
        a: () => o
      });
      var a = n(480);

      function o(e, t) {
        return (0, a.w)(t || e, e)
      }
    }
  }
]);