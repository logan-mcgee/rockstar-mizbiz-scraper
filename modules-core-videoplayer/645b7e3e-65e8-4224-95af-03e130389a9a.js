! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "645b7e3e-65e8-4224-95af-03e130389a9a", e._sentryDebugIdIdentifier = "sentry-dbid-645b7e3e-65e8-4224-95af-03e130389a9a")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [6018], {
    6926: (e, t, n) => {
      n.d(t, {
        j: () => l
      });
      var a = n(74523),
        o = n(93261);

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
            l = (0, a.w)(n?.in || e, r.getTime());
          return l.setMonth(r.getMonth() + t + 1, 0), d >= l.getDate() ? l : (r.setFullYear(l.getFullYear(), l.getMonth(), d), r)
        }(e, -t, n)
      }

      function l(e, t, n) {
        const {
          years: o = 0,
          months: l = 0,
          weeks: s = 0,
          days: u = 0,
          hours: i = 0,
          minutes: f = 0,
          seconds: c = 0
        } = t, b = r(d(e, l + 12 * o, n), u + 7 * s, n), y = 1e3 * (c + 60 * (f + 60 * i));
        return (0, a.w)(n?.in || e, +b - y)
      }
    },
    13967: (e, t, n) => {
      n.d(t, {
        x: () => o
      });
      var a = n(74523);

      function o(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
        const r = a.w.bind(null, e || n.find((e => "object" == typeof e)));
        return n.map(r)
      }
    },
    20148: (e, t, n) => {
      n.d(t, {
        d: () => o
      });
      var a = n(93261);

      function o(e, t) {
        return +(0, a.a)(e) > +(0, a.a)(t)
      }
    },
    42451: (e, t, n) => {
      n.d(t, {
        V: () => d
      });
      var a = n(13967),
        o = n(93261);

      function r(e, t) {
        const n = +(0, o.a)(e) - +(0, o.a)(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function d(e, t, n) {
        const [o, d] = (0, a.x)(n?.in, e, t), l = r(o, d), s = Math.abs(function(e, t, n) {
          const [o, r] = (0, a.x)(n?.in, e, t);
          return o.getFullYear() - r.getFullYear()
        }(o, d));
        o.setFullYear(1584), d.setFullYear(1584);
        const u = l * (s - +(r(o, d) === -l));
        return 0 === u ? 0 : u
      }
    },
    66603: (e, t, n) => {
      n.d(t, {
        _P: () => o,
        s0: () => a
      }), Math.pow(10, 8);
      const a = 36e5,
        o = Symbol.for("constructDateFrom")
    },
    74523: (e, t, n) => {
      n.d(t, {
        w: () => o
      });
      var a = n(66603);

      function o(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && a._P in e ? e[a._P](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    93261: (e, t, n) => {
      n.d(t, {
        a: () => o
      });
      var a = n(74523);

      function o(e, t) {
        return (0, a.w)(t || e, e)
      }
    },
    96672: (e, t, n) => {
      n.d(t, {
        f: () => o
      });
      var a = n(93261);

      function o(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, a.a)(e)));
        var t
      }
    }
  }
]);