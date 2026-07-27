try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4605367f-6b01-41e1-9d7f-9c3b0676bc34", e._sentryDebugIdIdentifier = "sentry-dbid-4605367f-6b01-41e1-9d7f-9c3b0676bc34")
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
        x: () => a
      });
      var o = n(480);

      function a(e, ...t) {
        const n = o.w.bind(null, e || t.find(e => "object" == typeof e));
        return t.map(n)
      }
    },
    9172(e, t, n) {
      Math.pow(10, 8);
      const o = Symbol.for("constructDateFrom");
      n.d(t, ["_P", 0, o, "s0", 0, 36e5])
    },
    480(e, t, n) {
      n.d(t, {
        w: () => a
      });
      var o = n(9172);

      function a(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && o._P in e ? e[o._P](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    8005(e, t, n) {
      n.d(t, {
        V: () => s
      });
      var o = n(380),
        a = n(3415);

      function r(e, t) {
        const n = +(0, a.a)(e) - +(0, a.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function s(e, t, n) {
        const [a, s] = (0, o.x)(n?.in, e, t), d = r(a, s), f = Math.abs(function(e, t, n) {
          const [a, r] = (0, o.x)(n?.in, e, t);
          return a.getFullYear() - r.getFullYear()
        }(a, s));
        a.setFullYear(1584), s.setFullYear(1584);
        const i = d * (f - +(r(a, s) === -d));
        return 0 === i ? 0 : i
      }
    },
    8735(e, t, n) {
      n.d(t, {
        d: () => a
      });
      var o = n(3415);

      function a(e, t) {
        return +(0, o.a)(e) > +(0, o.a)(t)
      }
    },
    6573(e, t, n) {
      n.d(t, {
        f: () => a
      });
      var o = n(3415);

      function a(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, o.a)(e)));
        var t
      }
    },
    9177(e, t, n) {
      n.d(t, {
        j: () => d
      });
      var o = n(480),
        a = n(3415);

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
          weeks: f = 0,
          days: i = 0,
          hours: u = 0,
          minutes: c = 0,
          seconds: l = 0
        } = t, b = r(s(e, d + 12 * a, n), i + 7 * f, n), y = 1e3 * (l + 60 * (c + 60 * u));
        return (0, o.w)(n?.in || e, +b - y)
      }
    },
    3415(e, t, n) {
      n.d(t, {
        a: () => a
      });
      var o = n(480);

      function a(e, t) {
        return (0, o.w)(t || e, e)
      }
    }
  }
]);