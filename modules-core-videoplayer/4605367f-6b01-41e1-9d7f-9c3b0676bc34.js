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
        V: () => d
      });
      var a = n(380),
        o = n(3415);

      function r(e, t) {
        const n = +(0, o.a)(e) - +(0, o.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function d(e, t, n) {
        const [o, d] = (0, a.x)(n?.in, e, t), s = r(o, d), i = Math.abs(function(e, t, n) {
          const [o, r] = (0, a.x)(n?.in, e, t);
          return o.getFullYear() - r.getFullYear()
        }(o, d));
        o.setFullYear(1584), d.setFullYear(1584);
        const u = s * (i - +(r(o, d) === -s));
        return 0 === u ? 0 : u
      }
    },
    8735(e, t, n) {
      n.d(t, {
        d: () => o
      });
      var a = n(3415);

      function o(e, t) {
        return +(0, a.a)(e) > +(0, a.a)(t)
      }
    },
    6573(e, t, n) {
      n.d(t, {
        f: () => o
      });
      var a = n(3415);

      function o(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, a.a)(e)));
        var t
      }
    },
    9177(e, t, n) {
      n.d(t, {
        j: () => s
      });
      var a = n(480),
        o = n(3415);

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
          weeks: i = 0,
          days: u = 0,
          hours: f = 0,
          minutes: l = 0,
          seconds: c = 0
        } = t, b = r(d(e, s + 12 * o, n), u + 7 * i, n), y = 1e3 * (c + 60 * (l + 60 * f));
        return (0, a.w)(n?.in || e, +b - y)
      }
    },
    3415(e, t, n) {
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