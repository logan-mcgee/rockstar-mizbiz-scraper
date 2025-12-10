try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b56ff137-8846-4e99-ac27-64a5f175eee8", e._sentryDebugIdIdentifier = "sentry-dbid-b56ff137-8846-4e99-ac27-64a5f175eee8")
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
  [1703], {
    1915: (e, t, n) => {
      n.d(t, {
        d: () => o
      });
      var a = n(6712);

      function o(e, t) {
        return +(0, a.a)(e) > +(0, a.a)(t)
      }
    },
    2649: (e, t, n) => {
      n.d(t, {
        f: () => o
      });
      var a = n(6712);

      function o(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, a.a)(e)));
        var t
      }
    },
    3497: (e, t, n) => {
      n.d(t, {
        V: () => s
      });
      var a = n(5e3),
        o = n(6712);

      function r(e, t) {
        const n = +(0, o.a)(e) - +(0, o.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function s(e, t, n) {
        const [o, s] = (0, a.x)(n?.in, e, t), f = r(o, s), d = Math.abs(function(e, t, n) {
          const [o, r] = (0, a.x)(n?.in, e, t);
          return o.getFullYear() - r.getFullYear()
        }(o, s));
        o.setFullYear(1584), s.setFullYear(1584);
        const i = f * (d - +(r(o, s) === -f));
        return 0 === i ? 0 : i
      }
    },
    5e3: (e, t, n) => {
      n.d(t, {
        x: () => o
      });
      var a = n(7044);

      function o(e, ...t) {
        const n = a.w.bind(null, e || t.find(e => "object" == typeof e));
        return t.map(n)
      }
    },
    5413: (e, t, n) => {
      n.d(t, {
        j: () => f
      });
      var a = n(7044),
        o = n(6712);

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
            f = (0, a.w)(n?.in || e, r.getTime());
          return f.setMonth(r.getMonth() + t + 1, 0), s >= f.getDate() ? f : (r.setFullYear(f.getFullYear(), f.getMonth(), s), r)
        }(e, -t, n)
      }

      function f(e, t, n) {
        const {
          years: o = 0,
          months: f = 0,
          weeks: d = 0,
          days: i = 0,
          hours: u = 0,
          minutes: l = 0,
          seconds: c = 0
        } = t, y = r(s(e, f + 12 * o, n), i + 7 * d, n), b = 1e3 * (c + 60 * (l + 60 * u));
        return (0, a.w)(n?.in || e, +y - b)
      }
    },
    6712: (e, t, n) => {
      n.d(t, {
        a: () => o
      });
      var a = n(7044);

      function o(e, t) {
        return (0, a.w)(t || e, e)
      }
    },
    7044: (e, t, n) => {
      n.d(t, {
        w: () => o
      });
      var a = n(7984);

      function o(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && a._P in e ? e[a._P](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    7984: (e, t, n) => {
      n.d(t, {
        _P: () => o,
        s0: () => a
      }), Math.pow(10, 8);
      const a = 36e5,
        o = Symbol.for("constructDateFrom")
    }
  }
]);