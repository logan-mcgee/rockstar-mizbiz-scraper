try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7db09be4-044f-42ec-9283-81b2efe6a02b", e._sentryDebugIdIdentifier = "sentry-dbid-7db09be4-044f-42ec-9283-81b2efe6a02b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [6018], {
    6926: (e, t, n) => {
      n.d(t, {
        j: () => d
      });
      var o = n(74523),
        a = n(93261);

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
          weeks: i = 0,
          days: f = 0,
          hours: u = 0,
          minutes: c = 0,
          seconds: l = 0
        } = t, b = r(s(e, d + 12 * a, n), f + 7 * i, n), y = 1e3 * (l + 60 * (c + 60 * u));
        return (0, o.w)(n?.in || e, +b - y)
      }
    },
    13967: (e, t, n) => {
      n.d(t, {
        x: () => a
      });
      var o = n(74523);

      function a(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
        const r = o.w.bind(null, e || n.find((e => "object" == typeof e)));
        return n.map(r)
      }
    },
    20148: (e, t, n) => {
      n.d(t, {
        d: () => a
      });
      var o = n(93261);

      function a(e, t) {
        return +(0, o.a)(e) > +(0, o.a)(t)
      }
    },
    42451: (e, t, n) => {
      n.d(t, {
        V: () => s
      });
      var o = n(13967),
        a = n(93261);

      function r(e, t) {
        const n = +(0, a.a)(e) - +(0, a.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function s(e, t, n) {
        const [a, s] = (0, o.x)(n?.in, e, t), d = r(a, s), i = Math.abs(function(e, t, n) {
          const [a, r] = (0, o.x)(n?.in, e, t);
          return a.getFullYear() - r.getFullYear()
        }(a, s));
        a.setFullYear(1584), s.setFullYear(1584);
        const f = d * (i - +(r(a, s) === -d));
        return 0 === f ? 0 : f
      }
    },
    66603: (e, t, n) => {
      n.d(t, {
        _P: () => a,
        s0: () => o
      }), Math.pow(10, 8);
      const o = 36e5,
        a = Symbol.for("constructDateFrom")
    },
    74523: (e, t, n) => {
      n.d(t, {
        w: () => a
      });
      var o = n(66603);

      function a(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && o._P in e ? e[o._P](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    93261: (e, t, n) => {
      n.d(t, {
        a: () => a
      });
      var o = n(74523);

      function a(e, t) {
        return (0, o.w)(t || e, e)
      }
    },
    96672: (e, t, n) => {
      n.d(t, {
        f: () => a
      });
      var o = n(93261);

      function a(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, o.a)(e)));
        var t
      }
    }
  }
]);