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
    6926: (e, t, a) => {
      a.d(t, {
        j: () => s
      });
      var n = a(74523),
        o = a(93261);

      function r(e, t, a) {
        return function(e, t, a) {
          const r = (0, o.a)(e, a?.in);
          return isNaN(t) ? (0, n.w)(a?.in || e, NaN) : t ? (r.setDate(r.getDate() + t), r) : r
        }(e, -t, a)
      }

      function l(e, t, a) {
        return function(e, t, a) {
          const r = (0, o.a)(e, a?.in);
          if (isNaN(t)) return (0, n.w)(a?.in || e, NaN);
          if (!t) return r;
          const l = r.getDate(),
            s = (0, n.w)(a?.in || e, r.getTime());
          return s.setMonth(r.getMonth() + t + 1, 0), l >= s.getDate() ? s : (r.setFullYear(s.getFullYear(), s.getMonth(), l), r)
        }(e, -t, a)
      }

      function s(e, t, a) {
        const {
          years: o = 0,
          months: s = 0,
          weeks: d = 0,
          days: u = 0,
          hours: i = 0,
          minutes: f = 0,
          seconds: c = 0
        } = t, b = r(l(e, s + 12 * o, a), u + 7 * d, a), y = 1e3 * (c + 60 * (f + 60 * i));
        return (0, n.w)(a?.in || e, +b - y)
      }
    },
    13967: (e, t, a) => {
      a.d(t, {
        x: () => o
      });
      var n = a(74523);

      function o(e) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
        const r = n.w.bind(null, e || a.find((e => "object" == typeof e)));
        return a.map(r)
      }
    },
    20148: (e, t, a) => {
      a.d(t, {
        d: () => o
      });
      var n = a(93261);

      function o(e, t) {
        return +(0, n.a)(e) > +(0, n.a)(t)
      }
    },
    42451: (e, t, a) => {
      a.d(t, {
        V: () => l
      });
      var n = a(13967),
        o = a(93261);

      function r(e, t) {
        const a = +(0, o.a)(e) - +(0, o.a)(t);
        return a < 0 ? -1 : a > 0 ? 1 : a
      }

      function l(e, t, a) {
        const [o, l] = (0, n.x)(a?.in, e, t), s = r(o, l), d = Math.abs(function(e, t, a) {
          const [o, r] = (0, n.x)(a?.in, e, t);
          return o.getFullYear() - r.getFullYear()
        }(o, l));
        o.setFullYear(1584), l.setFullYear(1584);
        const u = s * (d - +(r(o, l) === -s));
        return 0 === u ? 0 : u
      }
    },
    66603: (e, t, a) => {
      a.d(t, {
        _P: () => o,
        s0: () => n
      }), Math.pow(10, 8);
      const n = 36e5,
        o = Symbol.for("constructDateFrom")
    },
    74523: (e, t, a) => {
      a.d(t, {
        w: () => o
      });
      var n = a(66603);

      function o(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && n._P in e ? e[n._P](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    93261: (e, t, a) => {
      a.d(t, {
        a: () => o
      });
      var n = a(74523);

      function o(e, t) {
        return (0, n.w)(t || e, e)
      }
    },
    96672: (e, t, a) => {
      a.d(t, {
        f: () => o
      });
      var n = a(93261);

      function o(e) {
        return !(!((t = e) instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)) && "number" != typeof e || isNaN(+(0, n.a)(e)));
        var t
      }
    }
  }
]);