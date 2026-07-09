try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "60007022-7c2e-41f9-9b14-821d7f3e52cd", e._sentryDebugIdIdentifier = "sentry-dbid-60007022-7c2e-41f9-9b14-821d7f3e52cd")
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
  [963], {
    3419(e, t, n) {
      n.d(t, {
        x: () => o
      });
      var a = n(6863);

      function o(e, ...t) {
        const n = a.w.bind(null, e || t.find(e => "object" == typeof e));
        return t.map(n)
      }
    },
    3319(e, t, n) {
      n.d(t, {
        _P: () => o,
        s0: () => a
      }), Math.pow(10, 8);
      const a = 36e5,
        o = Symbol.for("constructDateFrom")
    },
    6863(e, t, n) {
      n.d(t, {
        w: () => o
      });
      var a = n(3319);

      function o(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && a._P in e ? e[a._P](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    8004(e, t, n) {
      n.d(t, {
        V: () => s
      });
      var a = n(3419),
        o = n(4929);

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
    7824(e, t, n) {
      n.d(t, {
        d: () => o
      });
      var a = n(4929);

      function o(e, t) {
        return +(0, a.a)(e) > +(0, a.a)(t)
      }
    },
    6388(e, t, n) {
      n.d(t, {
        f: () => o
      });
      var a = n(4929);

      function o(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, a.a)(e)));
        var t
      }
    },
    8504(e, t, n) {
      n.d(t, {
        j: () => d
      });
      var a = n(6863),
        o = n(4929);

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
    4929(e, t, n) {
      n.d(t, {
        a: () => o
      });
      var a = n(6863);

      function o(e, t) {
        return (0, a.w)(t || e, e)
      }
    }
  }
]);